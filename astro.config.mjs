// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from 'tailwind.config.mjs';
// https://astro.build/config
export default defineConfig({
    site: 'https://i.linexic.top',
    integrations: [mdx(), sitemap(), tailwind()],
});