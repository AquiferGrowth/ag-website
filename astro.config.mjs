import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://dev.ag-website-c9y.pages.dev",
  output: "static"
});
