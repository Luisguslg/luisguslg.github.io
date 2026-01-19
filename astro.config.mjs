import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const site = "https://luisguslg.github.io";
// Para repos "project pages" usa BASE_PATH="/<repo>/".
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  outDir: "./docs",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});

