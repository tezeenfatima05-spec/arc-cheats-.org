/**
 * Per-article SEO overrides (document title, meta, optional H1).
 * Does not change visible lead copy in posts.ts unless h1 is set.
 */

export interface BlogSeoOverride {
  title: string;
  description: string;
  keywords?: string;
  /** Visible article H1 when audit requires title alignment */
  h1?: string;
  sidebarHeadingsAsParagraphs?: boolean;
  checkoutLinkLabel?: string;
  navCheckoutLabel?: string;
  navProductsLabel?: string;
  navBlogLabel?: string;
  ctaButtonLabel?: string;
  imageAlt?: string;
  sidebarEliteLabel?: string;
  sidebarHubLabel?: string;
  toolbarBackLabel?: string;
  /** Distinct aria-labels for duplicate checkout URLs (sidebar vs action bar). */
  checkoutSidebarAria?: string;
  checkoutNavAria?: string;
  faqSectionHeading?: string;
  sitemapLinkLabel?: string;
  srOnlyAnchors?: { href: string; label: string }[];
}

export const BLOG_SEO_BY_SLUG: Record<string, BlogSeoOverride> = {
  'arc-raiders-player-esp-layout': {
    title: 'Player ESP layout that stays readable | ARC Cheats',
    description:
      'Player esp layout: boxes, skeletons, squad tags, and distance caps — pick a minimal stack before you add more overlays for Steam PC raids.',
    keywords: 'player esp layout, arc raiders esp, arc raiders cheats, steam pc',
    h1: 'Player ESP layout that stays readable in ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from player ESP layout',
    checkoutLinkLabel: 'ESP layout end-of-article purchase',
    navCheckoutLabel: 'Get access after ESP layout tips',
    navProductsLabel: 'Player ESP tier listing',
    navBlogLabel: 'Sibling layout articles',
    ctaButtonLabel: 'Open feature map (ESP layout)',
    sidebarEliteLabel: 'Raiders SKU feature sheet',
    sidebarHubLabel: 'Every software SKU index',
    checkoutSidebarAria: 'Checkout after ESP layout sidebar',
    checkoutNavAria: 'Checkout after ESP layout actions',
    faqSectionHeading: 'Questions after ESP layout caps',
    sitemapLinkLabel: 'Sitemap row — player ESP layout guide',
    srOnlyAnchors: [
      { href: '/support/', label: 'Loader tickets beside ESP layout' },
      { href: '/faq/', label: 'Portal policies for layout readers' },
      { href: '/blog/arc-raiders-loot-and-world-esp-filters/', label: 'Loot filters after box caps' },
      { href: '/go/arc-raiders/', label: 'Checkout hop after ESP layout guide' },
      { href: '/privacy/', label: 'Privacy note for ESP layout readers' },
    ],
  },
  'arc-raiders-loot-and-world-esp-filters': {
    title: 'Loot and world ESP filters for ARC Raiders | Cheats',
    description:
      'Rarity and type filters, container selection, and ARC markers without cluttering the hud. All articles Guides 6 min read Nov 3, 2025 Loot and world ESP.',
    keywords: 'arc, arc raiders esp, loot filters, steam pc',
    h1: 'Loot and world ESP filters for ARC Raiders — cheats',
    imageAlt: 'ARC Raiders loot rarity and world ESP filter reference',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from loot filter article',
    checkoutLinkLabel: 'Loot filter sidebar purchase link',
    navCheckoutLabel: 'Portal access after loot filters',
    navProductsLabel: 'Loot overlay product listing',
    navBlogLabel: 'Sibling guides on world ESP',
    ctaButtonLabel: 'Open loot feature map',
    sidebarEliteLabel: 'Loot filter SKU sheet',
    sidebarHubLabel: 'Publisher software roll-up',
    checkoutSidebarAria: 'Checkout after loot filters sidebar',
    checkoutNavAria: 'Checkout after loot filters action bar',
    faqSectionHeading: 'Questions after loot and world filters',
    sitemapLinkLabel: 'Sitemap row — loot and world ESP filters guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-player-esp-layout/', label: 'Player ESP caps before loot filters' },
      { href: '/blog/arc-raiders-arc-threat-overlays/', label: 'Threat markers beside loot routing' },
      { href: '/support/', label: 'Loader help for loot filter readers' },
      { href: '/go/arc-raiders/', label: 'Secure hop after loot filter article' },
      { href: '/privacy/', label: 'Privacy note for loot filter readers' },
    ],
  },
  'arc-raiders-aimbot-and-fov-settings': {
    title: 'ARC Raiders aimbot: FOV, smooth, and filters e | Cheats',
    description:
      'What each aim slider does, when to tighten FOV, and how visible check and bones interact on Steam PC ARC Raiders aimbot guides.',
    keywords: 'fov, arc raiders aimbot, arc raiders cheats, steam pc',
    h1: 'ARC Raiders aimbot: FOV, smooth, and filters explained — cheats',
    imageAlt: 'ARC Raiders aimbot and smoothing settings reference',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from aimbot FOV article',
    checkoutLinkLabel: 'Aim FOV section purchase link',
    navCheckoutLabel: 'Portal access after FOV tuning',
    navProductsLabel: 'Aim group product listing',
    navBlogLabel: 'Siblings on aim and ESP',
    ctaButtonLabel: 'Open aim feature map (FOV)',
    sidebarEliteLabel: 'Aimbot tier breakdown',
    sidebarHubLabel: 'SKU-wide software inventory',
    checkoutSidebarAria: 'Checkout after FOV tuning sidebar',
    checkoutNavAria: 'Checkout after FOV tuning actions',
    faqSectionHeading: 'Questions after aimbot FOV tuning',
    sitemapLinkLabel: 'Sitemap row — aimbot FOV settings guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-setup-and-first-launch/', label: 'Portal enable order before FOV' },
      { href: '/privacy/', label: 'Analytics privacy for FOV readers' },
      { href: '/blog/arc-raiders-player-esp-layout/', label: 'ESP clutter companion to FOV' },
      { href: '/go/arc-raiders/', label: 'Checkout hop after FOV tuning guide' },
    ],
  },
  'arc-raiders-setup-and-first-launch': {
    title: 'Arc Raiders – and a safe order for enabling overlays on',
    description:
      'Arc Raiders portal access, first launch, and a safe order for enabling overlays on Steam PC before you stack aimbot or ESP groups.',
    keywords: 'arc raiders, arc raiders setup, arc raiders cheats, steam pc',
    h1: 'Arc Raiders setup: safe order for enabling overlays on PC (portal first)',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from setup launch article',
    checkoutLinkLabel: 'Setup steps purchase link',
    navCheckoutLabel: 'Portal access after setup',
    navProductsLabel: 'Software hub (setup article)',
    navBlogLabel: 'More overlay setup pieces',
    ctaButtonLabel: 'Raiders map (setup article)',
    sidebarEliteLabel: 'Portal tier breakdown',
    sidebarHubLabel: 'Operator catalog listing',
    checkoutSidebarAria: 'Checkout after setup launch sidebar',
    checkoutNavAria: 'Checkout after setup launch actions',
    faqSectionHeading: 'Questions after portal-first setup',
    sitemapLinkLabel: 'Sitemap row — portal first launch guide',
    srOnlyAnchors: [
      { href: '/support/', label: 'Install tickets after setup steps' },
      { href: '/terms/', label: 'License wording for setup readers' },
      { href: '/blog/arc-raiders-misc-camera-and-crosshair/', label: 'Camera misc notes post-setup' },
      { href: '/go/arc-raiders/', label: 'Checkout hop after setup launch guide' },
      { href: '/privacy/', label: 'Privacy note for setup launch readers' },
    ],
  },
  'arc-raiders-arc-threat-overlays': {
    title: 'ARC threat overlays when units are on your rou | Cheats',
    description:
      'Threat markers, corpses, and distance context on Steam PC — know when to break contact with ARC Raiders ARC unit overlays.',
    keywords: 'threat, arc raiders esp, arc threat overlays, arc raiders cheats',
    h1: 'ARC threat overlays when units are on your route — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from ARC threat article',
    checkoutLinkLabel: 'Threat overlay purchase link',
    navCheckoutLabel: 'Secure access (threat article)',
    navProductsLabel: 'Threat marker listing',
    navBlogLabel: 'Threat/ESP companion reads',
    ctaButtonLabel: 'Threat overlay map link',
    sidebarEliteLabel: 'Threat marker SKU sheet',
    sidebarHubLabel: 'Publisher-wide listing table',
    checkoutSidebarAria: 'Checkout after threat overlay sidebar',
    checkoutNavAria: 'Checkout after threat overlay actions',
    faqSectionHeading: 'Questions after ARC threat overlays',
    sitemapLinkLabel: 'Sitemap row — ARC threat overlay guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-extraction-and-threat-overlays/', label: 'Exit cap pairing with threat' },
      { href: '/forum/', label: 'Forum thread samples (threat)' },
      { href: '/about/', label: 'Publisher background (threat)' },
      { href: '/go/arc-raiders/', label: 'Checkout hop after threat overlay guide' },
      { href: '/privacy/', label: 'Privacy note for threat overlay readers' },
    ],
  },
  'arc-raiders-extraction-and-threat-overlays': {
    title: 'Extraction – Cap distance so only relevant | ARC Cheats',
    description:
      'Using extraction icons with distance caps and switching combat mode for quieter world ESP on Steam PC—relevant exits stay visible under pressure.',
    keywords: 'extraction, arc raiders esp, exit overlays, arc raiders cheats',
    h1: 'Extraction – cap distance so only relevant exits — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from exit overlay article',
    checkoutLinkLabel: 'Exit overlay sidebar purchase',
    navCheckoutLabel: 'Portal purchase after exit caps',
    navProductsLabel: 'Exit marker product listing',
    navBlogLabel: 'ESP sibling walkthroughs',
    ctaButtonLabel: 'Overlay map for exit routes',
    sidebarEliteLabel: 'Exit overlay SKU map',
    sidebarHubLabel: 'Inventory-wide download index',
    checkoutSidebarAria: 'Checkout after exit caps sidebar',
    checkoutNavAria: 'Checkout after exit caps action bar',
    faqSectionHeading: 'Questions after exit distance caps',
    sitemapLinkLabel: 'Sitemap row — exit overlay threat guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-combat-routing-to-extract/', label: 'Peel routing sibling piece' },
      { href: '/products/cloud-dma/', label: 'DMA hardware reference page' },
      { href: '/terms/', label: 'License wording for exit readers' },
      { href: '/privacy/', label: 'Privacy notice for exit overlay guide' },
      { href: '/go/arc-raiders/', label: 'Secure hop after exit cap article' },
    ],
  },
  'arc-raiders-combat-routing-to-extract': {
    title: 'Extract – balance combat overlays with exit icons on Steam',
    description:
      'Extract clean under pressure: balance combat overlays with exit icons on Steam PC so you peel without guessing the route out.',
    keywords: 'extract, arc raiders esp, extraction routing, arc raiders cheats',
    h1: 'Extract – balance combat overlays with exit icons on Steam — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from extract routing article',
    checkoutLinkLabel: 'Extract routing purchase',
    navCheckoutLabel: 'Access after extract tips',
    navProductsLabel: 'Combat overlay listing',
    navBlogLabel: 'Extract/combat siblings',
    ctaButtonLabel: 'Product map (extract routing)',
    sidebarEliteLabel: 'Combat routing SKU page',
    sidebarHubLabel: 'Broader software roll-up',
    checkoutSidebarAria: 'Checkout after extract routing sidebar',
    checkoutNavAria: 'Checkout after extract routing actions',
    faqSectionHeading: 'Questions after combat peel routing',
    sitemapLinkLabel: 'Sitemap row — combat routing to extract guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-misc-camera-and-crosshair/', label: 'Camera misc after extract routing' },
      { href: '/blog/arc-raiders-extraction-and-threat-overlays/', label: 'Exit overlay sibling article' },
      { href: '/products/arc-raiders/', label: 'Elite product breakdown page' },
      { href: '/go/arc-raiders/', label: 'Checkout hop after peel routing guide' },
      { href: '/privacy/', label: 'Privacy note for peel routing readers' },
      { href: '/support/', label: 'Support mailbox after peel routing guide' },
    ],
  },
};

export function getBlogSeoOverride(slug: string): BlogSeoOverride | undefined {
  return BLOG_SEO_BY_SLUG[slug];
}
