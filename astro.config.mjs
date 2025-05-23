import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    devToolbar: {
        enabled: false
    },
    alias: {
        '@': './src'
    },
    output: 'static',
    integrations: [react(), tailwind(), sitemap()]
});