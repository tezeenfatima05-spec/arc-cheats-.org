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
      { href: '/support/', label: 'Loader tickets beside ESP layout article' },
      { href: '/faq/', label: 'Portal policies linked from ESP layout' },
      { href: '/blog/arc-raiders-loot-and-world-esp-filters/', label: 'Loot filter sibling after box layout' },
      { href: '/go/arc-raiders/', label: 'Secure purchase hop from ESP layout' },
      { href: '/privacy/', label: 'Analytics privacy on ESP layout guide' },
      { href: '/forum/skeleton-or-box-esp/', label: 'Forum box-vs-skeleton thread from layout' },
    ],
  },
  'arc-raiders-loot-and-world-esp-filters': {
    title: 'Loot and world ESP filters for ARC Raiders | Cheats',
    description:
      'Tune loot rarity filters, container toggles, and ARC world markers for ARC Raiders ESP—readable routing without screen noise on Steam PC cheats.',
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
      { href: '/blog/arc-raiders-arc-threat-overlays/', label: 'Unit marker sibling for loot filters' },
      { href: '/support/', label: 'Install helpdesk from loot filter guide' },
      { href: '/go/arc-raiders/', label: 'Checkout hop after loot filter tuning' },
      { href: '/privacy/', label: 'Cookie policy hop from loot filters' },
      { href: '/forum/loot-filters-vs-visual-noise/', label: 'Forum loot strictness from filter guide' },
    ],
  },
  'arc-raiders-aimbot-and-fov-settings': {
    title: 'Fov – visible check, bones, and smooth on Steam | Cheats',
    description:
      'Fov tuning for ARC Raiders aimbot on Steam PC—cone width, smooth, stickiness, filters, visible check, and bone picks explained clearly.',
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
      { href: '/blog/arc-raiders-setup-and-first-launch/', label: 'Portal enable order before aim tuning' },
      { href: '/privacy/', label: 'Privacy disclosure on aimbot guide' },
      { href: '/blog/arc-raiders-player-esp-layout/', label: 'ESP clutter companion to aim tuning' },
      { href: '/go/arc-raiders/', label: 'Purchase hop after aim cone article' },
      { href: '/forum/aim-smooth-stickiness-debate/', label: 'Forum smooth debate from aim guide' },
    ],
  },
  'arc-raiders-setup-and-first-launch': {
    title: 'Arc Raiders – stable first session before aimbot | Cheats',
    description:
      'Arc Raiders cheats setup on Steam PC—portal download hygiene, overlay order, and a stable first session before aimbot or ESP groups.',
    keywords: 'arc raiders setup, arc raiders cheats, steam pc loader, arc raiders portal',
    h1: 'ARC Raiders cheats setup: portal download to first stable raid',
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
      { href: '/support/', label: 'Support mailbox after portal setup' },
      { href: '/terms/', label: 'License terms hop from setup guide' },
      { href: '/blog/arc-raiders-misc-camera-and-crosshair/', label: 'Camera misc walkthrough after setup' },
      { href: '/go/arc-raiders/', label: 'Get access hop after first-launch guide' },
      { href: '/privacy/', label: 'Cookie notice on setup launch article' },
      { href: '/forum/how-to-enable-features-safely/', label: 'Forum enable-order thread from setup' },
    ],
  },
  'arc-raiders-arc-threat-overlays': {
    title: 'Threat – know when to break contact on Raiders | Cheats',
    description:
      'Threat cues on Steam PC—unit markers, corpses, and distance bands so you know when to push or peel with Raiders ESP overlays.',
    keywords: 'threat, arc raiders esp, arc threat overlays, arc raiders cheats',
    h1: 'Threat overlays when units are on your route — ARC Raiders cheats',
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
      { href: '/blog/arc-raiders-extraction-and-threat-overlays/', label: 'Exit distance sibling for unit markers' },
      { href: '/forum/extraction-icons-under-fire/', label: 'Forum extract icons under pressure' },
      { href: '/about/', label: 'Publisher background from unit marker guide' },
      { href: '/go/arc-raiders/', label: 'Checkout hop after threat overlay article' },
      { href: '/privacy/', label: 'Privacy hop on threat marker guide' },
    ],
  },
  'arc-raiders-extraction-and-threat-overlays': {
    title: 'Extraction – relevant exits visible under pressure | Cheats',
    description:
      'Extraction icons with distance caps and combat mode on Steam PC—keep relevant exits visible under pressure with Raiders ESP overlays.',
    keywords: 'extraction, arc raiders esp, exit overlays, arc raiders cheats',
    h1: 'Extraction overlays and combat mode for ARC Raiders cheats',
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
      { href: '/blog/arc-raiders-combat-routing-to-extract/', label: 'Peel routing walkthrough after exit caps' },
      { href: '/products/arc-raiders/', label: 'Raiders SKU hub from exit overlay guide' },
      { href: '/terms/', label: 'Terms hop from extraction overlay article' },
      { href: '/privacy/', label: 'Privacy statement on exit cap guide' },
      { href: '/go/arc-raiders/', label: 'Buy access after extraction ESP article' },
      { href: '/forum/what-does-combat-mode-hide/', label: 'Forum combat-mode thread from exit guide' },
    ],
  },
  'arc-raiders-combat-routing-to-extract': {
    title: 'Extract – balance combat overlays with exit icons | Cheats',
    description:
      'Extract under pressure on Steam PC—balance combat overlays with exit icons so you peel without guessing the route out.',
    keywords: 'extract, arc raiders esp, extraction routing, arc raiders cheats',
    h1: 'Extract clean: combat overlay routing for ARC Raiders cheats',
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
      { href: '/blog/arc-raiders-misc-camera-and-crosshair/', label: 'Camera misc companion to peel routing' },
      { href: '/blog/arc-raiders-extraction-and-threat-overlays/', label: 'Exit overlay primer before peel routes' },
      { href: '/products/arc-raiders/', label: 'Feature list hop from extract routing' },
      { href: '/go/arc-raiders/', label: 'Secure checkout after combat peel article' },
      { href: '/privacy/', label: 'Analytics privacy on peel routing guide' },
      { href: '/support/', label: 'Ticket desk from extract routing article' },
    ],
  },
  'arc-raiders-misc-camera-and-crosshair': {
    title: 'Misc ARC Raiders cheat options | ARC Cheats',
    description:
      'FOV, camera zoom, crosshair, flashlight, and full bright for ARC Raiders cheats—comfort profiles that pair with combat and farm sessions on Steam.',
    keywords: 'arc raiders fov, arc raiders crosshair, arc raiders cheats misc, steam pc',
    h1: 'Misc ARC Raiders cheat options: FOV, crosshair, camera, flashlight',
    imageAlt: 'ARC Raiders misc camera crosshair and flashlight options',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from misc camera article',
    checkoutLinkLabel: 'Misc options purchase link',
    navCheckoutLabel: 'Portal access after misc tuning',
    navProductsLabel: 'Misc group product listing',
    navBlogLabel: 'Sibling comfort tuning guides',
    ctaButtonLabel: 'Open misc feature map',
    sidebarEliteLabel: 'Misc toolkit SKU sheet',
    sidebarHubLabel: 'Software catalog listing',
    checkoutSidebarAria: 'Checkout after misc options sidebar',
    checkoutNavAria: 'Checkout after misc options actions',
    faqSectionHeading: 'Questions after misc camera tuning',
    sitemapLinkLabel: 'Sitemap row — misc camera crosshair guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-setup-and-first-launch/', label: 'Portal setup before misc profiles' },
      { href: '/forum/', label: 'Forum misc profile habits' },
      { href: '/go/arc-raiders/', label: 'Checkout hop after misc camera guide' },
    ],
  },
  'arc-raiders-raid-atmosphere-and-arc-zones': {
    title: 'ARC zone reads with world ESP | ARC Cheats',
    description:
      'ARC Raiders world ESP for zone scouting—ARC icons, threat level, and distance caps before you commit to a fight or farm route on Steam PC.',
    keywords: 'arc raiders world esp, arc zones, arc raiders cheats, steam pc',
    h1: 'Reading ARC zones with world ESP in ARC Raiders',
    imageAlt: 'ARC Raiders zone atmosphere and ARC icon distance reference',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from ARC zone article',
    checkoutLinkLabel: 'World ESP purchase link',
    navCheckoutLabel: 'Portal access after zone tuning',
    navProductsLabel: 'World ESP product listing',
    navBlogLabel: 'Sibling ARC routing guides',
    ctaButtonLabel: 'Open world ESP map',
    sidebarEliteLabel: 'ARC zone SKU sheet',
    sidebarHubLabel: 'Full software catalog',
    checkoutSidebarAria: 'Checkout after ARC zone sidebar',
    checkoutNavAria: 'Checkout after ARC zone actions',
    faqSectionHeading: 'Questions after ARC zone overlays',
    sitemapLinkLabel: 'Sitemap row — ARC zone atmosphere guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-arc-threat-overlays/', label: 'Threat overlays after zone caps' },
      { href: '/blog/arc-raiders-loot-and-world-esp-filters/', label: 'Loot filters after zone reads' },
      { href: '/go/arc-raiders/', label: 'Checkout hop after ARC zone guide' },
    ],
  },
};

export function getBlogSeoOverride(slug: string): BlogSeoOverride | undefined {
  return BLOG_SEO_BY_SLUG[slug];
}
