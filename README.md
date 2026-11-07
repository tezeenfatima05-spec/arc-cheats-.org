# ARC Cheats (arccheats.org)

Static site built with [Astro](https://astro.build). Application source: `_template_clone/NOT-OPTIMISED-main/`.

## Local development

```bash
cd _template_clone/NOT-OPTIMISED-main
npm ci
npm run dev
```

Dev server: `http://127.0.0.1:5173/`

## Production build

From repository root:

```bash
npm run build
```

Output: `_template_clone/NOT-OPTIMISED-main/dist/`

## Cloudflare Workers (static assets)

Repository root includes `wrangler.toml`. Deploy:

```bash
npm run deploy
```

Or in the Cloudflare dashboard:

| Setting | Value |
|--------|--------|
| **Build command** | `npm ci && npm run build` |
| **Deploy command** | `npx wrangler deploy` |

Wrangler runs the Astro build via `[build].command` in `wrangler.toml` and uploads `dist` from `[assets].directory`.

**SEO / audit:** set `PUBLIC_SITE_URL` (in `wrangler.toml` `[build.environment]` or Cloudflare build variables) to the exact hostname you test—e.g. your `*.workers.dev` URL or `https://arccheats.org` after custom domain. This keeps canonical tags, sitemap, and `robots.txt` in sync (required for 90%+ site-health scores).

**Node:** 22+ (see `engines` in nested `package.json`).
