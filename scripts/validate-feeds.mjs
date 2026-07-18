import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { grammarCategories } from "./english-grammar-guide.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rssPath = path.join(root, "rss.xml");
const sitemapPath = path.join(root, "sitemap.xml");
const indexPath = path.join(root, "index.html");
const rss = fs.readFileSync(rssPath, "utf8");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const index = fs.readFileSync(indexPath, "utf8");
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const rssItems = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => match[1]);
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

assert(rss.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), "RSS XML 선언 누락");
assert(rss.includes('<rss version="2.0"'), "RSS 2.0 루트 누락");
assert(rssItems.length === grammarCategories.length, `RSS 항목: 예상 ${grammarCategories.length}개, 실제 ${rssItems.length}개`);
assert(fs.statSync(rssPath).size < 10 * 1024 * 1024, "RSS가 네이버 제한 10MB를 초과함");
assert(index.includes('<link rel="alternate" type="application/rss+xml"'), "홈페이지 RSS 자동발견 링크 누락");

for (const [index, item] of rssItems.entries()) {
  const title = item.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const link = item.match(/<link>([^<]+)<\/link>/)?.[1];
  const description = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1];
  const pubDate = item.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1];
  const guid = item.match(/<guid[^>]*>([^<]+)<\/guid>/)?.[1];
  assert(Boolean(title), `RSS ${index + 1}번 제목 누락`);
  assert(link?.startsWith("https://englishexamlab.kr/grammar/"), `RSS ${index + 1}번 도메인 또는 링크 오류`);
  assert(guid === link, `RSS ${index + 1}번 guid 불일치`);
  assert((description?.length ?? 0) >= 3000, `RSS ${index + 1}번 본문이 충분히 포함되지 않음`);
  assert(!Number.isNaN(Date.parse(pubDate ?? "")), `RSS ${index + 1}번 발행일 오류`);
}

assert(sitemapUrls.length === 102, `사이트맵 URL: 예상 102개, 실제 ${sitemapUrls.length}개`);
assert(new Set(sitemapUrls).size === sitemapUrls.length, "사이트맵 중복 URL 존재");
assert(sitemapUrls.every((url) => url.startsWith("https://englishexamlab.kr/")), "사이트맵에 다른 도메인 URL 존재");
for (const category of grammarCategories) {
  assert(sitemapUrls.includes(`https://englishexamlab.kr/grammar/${category.id}.html`), `${category.title} 사이트맵 URL 누락`);
}

if (failures.length) {
  console.error(failures.map((message) => `- ${message}`).join("\n"));
  process.exit(1);
}

console.log(`피드 검증 완료: 사이트맵 ${sitemapUrls.length}개 URL, RSS ${rssItems.length}개 전체본문 항목`);
console.log(`RSS 용량: ${(fs.statSync(rssPath).size / 1024).toFixed(1)}KB`);
