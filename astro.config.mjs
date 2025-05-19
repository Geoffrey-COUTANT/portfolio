import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    site: 'https://geoffrey-coutant.github.io/portfolio/',
    base: isProd ? '/portfolio/' : '/',
    devToolbar: {
        enabled: false
    },
    alias: {
        '@': './src'
    },
    integrations: [react(), tailwind(), sitemap()]
});
