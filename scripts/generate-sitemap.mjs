import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? walk(path) : path;
});

const urls = walk(root)
  .filter((path) => path.endsWith(".html"))
  .flatMap((path) => {
    const html = readFileSync(path, "utf8");
    const match = html.match(/<link rel="canonical" href="([^"]+)">/);
    return match ? [match[1]] : [];
  })
  .sort((a, b) => {
    if (a === "https://englishexamlab.kr/") return -1;
    if (b === "https://englishexamlab.kr/") return 1;
    return a.localeCompare(b, "en");
  });

const lastModified = new Date().toISOString().slice(0, 10);
const lines = urls.map((url) => `  <url><loc>${url}</loc><lastmod>${lastModified}</lastmod></url>`);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lines.join("\n")}\n</urlset>\n`;
writeFileSync(join(root, "sitemap.xml"), sitemap, "utf8");
console.log(`Generated sitemap with ${urls.length} URLs`);
