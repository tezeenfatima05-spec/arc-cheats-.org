/**
 * Central titles/descriptions for high-traffic routes.
 * Title target: ≤60 characters. Description target: 120–160 characters.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'ARC Raiders Cheats — Aimbot & ESP | ARC Cheats',
    description:
      'ARC Raiders cheats for Steam PC: aimbot, player ESP, loot overlays, extraction markers, and misc tools. Guides and checkout at ARC Cheats.',
  },
  '/products/': {
    title: 'ARC Raiders Products & Checkout | ARC Cheats',
    description:
      'Browse ARC Raiders cheats, Cloud DMA access, and the UGC tool — feature lists, setup notes, and secure checkout links.',
  },
  '/products/arc-raiders/': {
    title: 'ARC Raiders Aimbot & ESP Build | ARC Cheats',
    description:
      'Full ARC Raiders cheat feature list for Steam PC: aimbot tuning, player ESP, world and loot overlays, extraction markers, and misc options.',
  },
  '/products/cloud-dma/': {
    title: 'Cloud DMA Access | ARC Cheats',
    description:
      'Cloud DMA hardware access on supported Windows rigs — compatibility notes, portal setup, and secure checkout for ARC Raiders operators.',
  },
  '/products/ugc/': {
    title: 'UGC Tool Access | ARC Cheats',
    description:
      'UGC utility tool for Windows — overview, one-time access pricing, portal download steps, and secure checkout through ARC Cheats.',
  },
  '/blog/': {
    title: 'ARC Raiders Setup & Feature Guides | ARC Cheats',
    description:
      'Setup walkthroughs, aimbot tuning, ESP layout tips, loot filters, and patch-day notes for ARC Raiders cheats on Steam PC.',
  },
  '/forum/': {
    title: 'ARC Raiders Forum & Q&A | ARC Cheats',
    description:
      'Community-style threads on setup, ESP layout, combat mode, loot filters, and Cloud DMA — sample Q&A for ARC Raiders on PC.',
  },
  '/faq/': {
    title: 'ARC Raiders Cheats FAQ | ARC Cheats',
    description:
      'FAQ on ARC Raiders features, Steam compatibility, ban risk, Cloud DMA, checkout, loader setup, and support at ARC Cheats.',
  },
  '/terms/': {
    title: 'Terms & Conditions | ARC Cheats',
    description:
      'Terms of use, license scope, refunds, and checkout policy for ARC Cheats product listings and partner storefront links.',
  },
  '/privacy/': {
    title: 'Privacy Policy | ARC Cheats',
    description:
      'How ARC Cheats handles analytics, cookies, and contact data when you browse arccheats.org or open a support request.',
  },
  '/about/': {
    title: 'About ARC Cheats',
    description:
      'What ARC Cheats publishes: ARC Raiders PC software overview, honest limitations, guides, and status notes for Steam players.',
  },
  '/support/': {
    title: 'Support & Setup Help | ARC Cheats',
    description:
      'Get help with portal login, loader setup, checkout, and Windows compatibility for ARC Raiders cheats on Steam PC.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
