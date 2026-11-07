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

**Node:** 22+ (see `engines` in nested `package.json`).
