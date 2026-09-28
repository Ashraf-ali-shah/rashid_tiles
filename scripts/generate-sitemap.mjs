import { readFileSync, writeFileSync } from "node:fs";

// Put your real domain here: no trailing slash, and use exactly
// the address your site loads at (with or without www).
const SITE = "https://rashidtiles.com";

const staticPages = ["/", "/about", "/services", "/blog", "/contact"];
const today = new Date().toISOString().split("T")[0];

// Read blogData.js as plain text and pull out every slug: "..." value.
// (Importing the file directly fails because it imports .webp images.)
const source = readFileSync("src/data/blogData.js", "utf8");
const slugs = [...source.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);

const urls = [
  ...staticPages,
  ...slugs.map((s) => `/blog/${encodeURIComponent(s)}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml written with ${urls.length} URLs (${slugs.length} blog posts)`);