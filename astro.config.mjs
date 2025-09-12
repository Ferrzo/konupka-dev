import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: 'https://konupka.dev',
  trailingSlash: 'always',
  integrations: [sitemap()]
});