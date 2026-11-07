import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

const site = (process.env.PUBLIC_SITE_URL || 'https://arccheats.org').replace(/\/+$/, '');

export default defineConfig({
  site,
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  trailingSlash: 'always',
  redirects: {
    '/products/arc-raiders/arc-raiders/': '/products/arc-raiders/',
    '/cheats/': '/products/arc-raiders/',
    '/products/arc-raiders/utilities/': '/products/utilities/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const skip = ['/404', '/go/', '/products/utilities/', '/cheats/', '/contact/'];
        return !skip.some((part) => page.includes(part));
      },
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
