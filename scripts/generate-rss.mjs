import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { grammarCategories } from "./english-grammar-guide.mjs";
import { grammarPageHref } from "./english-grammar-catalog.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const feedPath = path.join(root, "rss.xml");
const escapeXml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");
const cdata = (value) => String(value).replaceAll("]]>", "]]]]><![CDATA[>");

const contentFiles = grammarCategories.map((category) => grammarPageHref(category.id));
const items = contentFiles.map((relativePath) => {
  const filePath = path.join(root, relativePath);
  const html = fs.readFileSync(filePath, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const link = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  if (!title || !link || !main) throw new Error(`RSS 항목 생성에 필요한 정보 누락: ${relativePath}`);

  const body = main.replace(/\s+href="([^"]+)"/g, (match, href) => {
    if (/^(?:[a-z]+:|#|\/\/)/i.test(href)) return match;
    return ` href="${new URL(href, link).href}"`;
  });
  const pubDate = fs.statSync(filePath).mtime.toUTCString();
  return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <description><![CDATA[${cdata(body)}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
    </item>`;
});

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>영어시험연구소 최신 학습 자료</title>
    <link>https://englishexamlab.kr/</link>
    <description>2027 수능특강 영어 영문법 상세 해설과 자체 학습 자료</description>
    <language>ko-KR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://englishexamlab.kr/rss.xml" rel="self" type="application/rss+xml" />
${items.join("\n")}
  </channel>
</rss>
`;

fs.writeFileSync(feedPath, rss, "utf8");
console.log(`Generated RSS with ${items.length} full-content items: ${feedPath}`);
