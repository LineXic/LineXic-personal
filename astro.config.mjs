// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from 'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.3/css/bootstrap-grid.min.css';

// https://astro.build/config
export default defineConfig({
    site: 'https://i.linexic.top',
    integrations: [mdx(), sitemap(), tailwind()],
});