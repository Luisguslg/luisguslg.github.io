import { site } from "../content/site";

export async function GET() {
  const sitemap = new URL("sitemap-index.xml", site.meta.canonical).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

