import type { APIRoute } from 'astro';
import { SITE_URL } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Disallow: /go/

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(`${body.trim()}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
