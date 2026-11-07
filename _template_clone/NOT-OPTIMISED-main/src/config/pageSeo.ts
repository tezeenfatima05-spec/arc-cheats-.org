/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'ARC Raiders Cheats — Aimbot, ESP & Wallhack | ARC Cheats',
    description:
      'ARC Raiders cheats for PC on Steam: aimbot, player ESP, wallhack, loot and world visuals, extraction markers, and misc tools — learn features and access at arccheats.org.',
  },
  '/products/': {
    title: 'ARC Raiders Software & Access | ARC Cheats',
    description:
      'ARC Raiders cheats for PC on Steam — product overview, feature groups, and secure checkout links at arccheats.org.',
  },
  '/products/arc-raiders/': {
    title: 'ARC Raiders Cheats — Aimbot, ESP & Wallhack | ARC Cheats',
    description:
      'Discover ARC Raiders cheats for PC featuring aimbot, player ESP, wallhack, loot ESP, container tracking, extraction markers, and customizable settings at ARC Cheats.',
  },
  '/products/cloud-dma/': {
    title: 'Cloud DMA Access | ARC Cheats',
    description:
      'Cloud DMA hardware-assisted setups on supported Windows rigs — portal requirements, overview, and secure checkout at arccheats.org.',
  },
  '/products/ugc/': {
    title: 'UGC Tool Access | ARC Cheats',
    description:
      'UGC tool utility access for Windows — product overview, pricing options, and secure checkout through ARC Cheats.',
  },
  '/products/utilities/': {
    title: 'ARC Raiders Product & Checkout | ARC Cheats',
    description:
      'ARC Raiders for PC: feature overview, Steam-only compatibility, and secure access through our partner checkout.',
  },
  '/blog/': {
    title: 'ARC Raiders Guides & Setup | ARC Cheats',
    description:
      'Setup guides, feature tips, and patch notes for ARC Raiders cheats — aimbot, ESP, loot overlays, and configuration at arccheats.org.',
  },
  '/forum/': {
    title: 'ARC Raiders Community Forum | ARC Cheats',
    description:
      'Discuss ARC Raiders cheat setup, features, troubleshooting, and configuration with other PC players.',
  },
  '/faq/': {
    title: 'FAQ | ARC Raiders Cheats & Access | ARC Cheats',
    description:
      'Answers on ARC Raiders features, Steam PC compatibility, checkout, loader setup, and support at arccheats.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | ARC Cheats',
    description:
      'Purchase terms, license use, and refund policy for ARC Cheats listings and checkout links used on arccheats.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | ARC Cheats',
    description:
      'How arccheats.org uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About ARC Cheats',
    description:
      'What ARC Cheats publishes: ARC Raiders PC tools, guides, and status notes at arccheats.org.',
  },
  '/support/': {
    title: 'Support | ARC Cheats',
    description:
      'Get help with loader setup, access, and checkout for ARC Raiders on Steam PC.',
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
