import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE, SITE_DOMAIN } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'ARC Cheats',
    domain: SITE_DOMAIN,
    title: 'ARC Raiders Cheats | Aimbot & ESP PC',
    description:
      'ARC Raiders cheats for Steam PC: aimbot, player ESP, loot overlays, extraction markers, and misc tools. Features, guides, and secure checkout.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'ARC Raiders — Steam PC',
    eyebrow: 'Private build · Steam',
    titleAccessible:
      'ARC Raiders cheats for Steam PC with aimbot, player ESP, loot overlays, and extraction tools.',
    titleLine1: 'ARC Raiders',
    titleLine2: 'Cheats',
    subtitle:
      'ARC Raiders cheats for Steam PC: aimbot, ESP, and raid overlays with clean menus and patch-aware updates.',
    ctaPrimary: 'View product',
    ctaDiscord: 'Get access',
    modesLabel: 'Platform',
    modes: ['Steam', 'Windows 10/11', 'Cloud DMA', 'Operator portal'],
    metrics: [
      { label: 'Patch focus', strong: 'Active' },
      { label: 'Setup help', strong: '24/7' },
      { label: 'Core scope', strong: 'ARC Raiders' },
      { label: 'Checkout', strong: 'Secure' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need for ARC Raiders',
    subtitle:
      'Aimbot, player and world ESP, loot filters, extraction markers, and misc tools — grouped the way the software is organized.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Steam-only aim suite.',
        desc:
          'Enable aim assistance with FOV, smooth, speed, and stickiness, plus filters, bone selection, visible check, drawn FOV, and target line so you can read what the module is doing mid-fight.',
        bullets: [
          'Steam-only build path with tunable FOV and smoothing',
          'Stickiness, speed, and filter options for different ranges',
          'Visible check, bone selection, draw FOV, and target line',
        ],
        tags: ['ARC Raiders aimbot', 'FOV', 'smooth aim'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player visuals',
        subtitle: 'ESP and wallhack-style readouts.',
        desc:
          'Box, head circle, skeleton, view direction, weapon and level, distance, name, squad name, health and shield bars, OOF arrows, and max distance caps so raids stay readable.',
        bullets: [
          'Box, skeleton, head circle, view direction',
          'Name, squad, weapon, level, health and shield',
          'OOF arrows and distance limits',
        ],
        tags: ['ARC Raiders ESP', 'player wallhack', 'skeleton ESP'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'ARC & world',
        subtitle: 'Threats, loot, and routes.',
        desc:
          'ARC icons, threat level, corpses, field crate, salvage, containers, loot with rarity and type filters, custom container and loot selection, and max distance for world clutter control.',
        bullets: ['ARC icons, threat, and corpse markers', 'Containers, salvage, field crate', 'Loot filters by rarity and type'],
        tags: ['ARC Raiders loot ESP', 'container ESP', 'ARC threat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Extraction',
        subtitle: 'Find the way out.',
        desc:
          'Extraction point markers and icons with distance limits pair with your player and world layers so rotations stay obvious under pressure.',
        bullets: ['Extraction icons and point overlays', 'Distance caps for extraction cues', 'Works alongside combat mode'],
        tags: ['extraction ESP', 'ARC Raiders cheats PC', 'raid routing'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Misc & quality of life',
        subtitle: 'Comfort without a new UI.',
        desc:
          'FOV changer, camera zoom, long-distance revive and consumable helpers, flashlight brightness and color, full bright, custom crosshair, custom font size, and combat mode to hide world ESP when you only want combat overlays.',
        bullets: [
          'FOV, zoom, crosshair, and font controls',
          'Flashlight brightness, color, and full bright',
          'Combat mode hides world ESP for focused fights',
        ],
        tags: ['FOV changer', 'combat mode', 'crosshair'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Hardware note',
        subtitle: 'Cloud DMA',
        desc:
          'Many operators run Cloud DMA on a supported Windows setup. Confirm exact requirements in your portal or with support before purchase — expectations can shift after patches.',
        bullets: ['Check compatibility before checkout', 'Follow portal steps for hardware pairing', 'Pause if status shows maintenance'],
        tags: ['Cloud DMA', 'compatibility', 'Steam PC'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Operator delivery',
        subtitle: 'Portal-first workflow.',
        desc:
          'Access runs through the operator portal with updates tied to ARC Raiders builds — read status before you queue a session.',
        bullets: ['Portal download and changelog', 'Support channel for setup issues', 'Back up your profile before major patches'],
        tags: ['portal', 'updates', 'ARC Cheats'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Readability',
        subtitle: 'Less noise, more signal.',
        desc:
          'Tune distance per category, use combat mode when overlays feel busy, and enable filters so loot lists match what you actually pick up.',
        bullets: ['Per-category max distance', 'Loot rarity and type filters', 'Combat mode for PvP-heavy stretches'],
        tags: ['filters', 'max distance', 'readability'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Patch-aware tooling for ARC Raiders on Steam',
    subtitle:
      'We keep arccheats.org focused on one game build, clear feature lists, and honest limitations — not generic FPS promises.',
    usLabel: 'ARC Cheats',
    otherLabel: 'Typical listing sites',
    rows: [
      {
        title: 'Game-specific pages',
        desc: 'ARC Raiders has its own product copy, FAQs, and guides — not recycled shooter bullet lists.',
      },
      {
        title: 'Grouped features',
        desc: 'Aimbot, player ESP, world ARC markers, loot, extraction, and misc mirror how the menu is structured.',
      },
      {
        title: 'Checkout privacy',
        desc: 'Commercial CTAs use internal /go/ paths so your browser bar stays on arccheats.org until redirect.',
      },
      {
        title: 'Support scope',
        desc: 'Questions go through the paths listed on the Support page — include your order email and Windows build.',
      },
      {
        title: 'Risk clarity',
        desc: 'Third-party tools can conflict with updates and policies. We state limitations up front.',
      },
      {
        title: 'No fake forums',
        desc: 'Forum threads are labeled samples for setup and feature Q&A — not impersonated customers.',
      },
    ],
    metrics: [
      {
        value: '1',
        title: 'Primary build',
        desc: 'ARC Raiders for Steam PC is the flagship product page.',
      },
      {
        value: '24/7',
        title: 'Support window',
        desc: 'Operators list coverage on the Support page — include detail when you open a ticket.',
      },
      {
        value: 'Steam',
        title: 'Platform',
        desc: 'Windows 10/11 with ARC Raiders from Steam — verify Cloud DMA notes in portal.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to',
    titleHighlight: 'first tuned session',
    intro:
      'Follow the portal flow: secure access, download the current build, enable features gradually, then verify in a safe session before pushing harder settings.',
    ctaPrimary: 'View product',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: `${productBase}arc-raiders/`,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Complete access',
        desc: 'Finish checkout, keep your order email, and open the operator portal link from the confirmation path.',
      },
      {
        step: 'Step 2',
        title: 'Install and verify',
        desc: 'Download the current loader build for Windows, confirm Steam and any Cloud DMA requirements, then launch once with overlays off.',
      },
      {
        step: 'Step 3',
        title: 'Layer features',
        desc: 'Enable player ESP distance caps first, then aimbot smoothing, then loot and world layers. Save a conservative profile before long sessions.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Built for Steam PC.',
    subtitle: 'Confirm Cloud DMA and driver notes in your portal before you rely on hardware-assisted setups.',
    items: [
      'Windows 10 & 11',
      'Steam · ARC Raiders',
      'Operator portal',
      'Patch-tracked builds',
      'Configurable profiles',
      'Email & ticket support',
      'Hardware docs in portal',
      'Risk disclosure up front',
    ],
  },
  cheats: {
    eyebrow: 'Product',
    title: 'ARC Raiders for PC',
    subtitle: 'Single hub for aimbot, ESP, world overlays, and misc options — details on the product page.',
    viewAll: 'Open product page',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'PC',
        name: 'ARC Raiders',
        title: 'ARC Raiders Cheats',
        desc: 'Steam-focused build with aimbot tuning, player ESP, ARC and loot overlays, extraction markers, filters, and misc quality-of-life tools.',
        features: [
          'Aimbot with FOV, smooth, filters',
          'Player ESP: box, skeleton, bars',
          'ARC & loot overlays',
          'Extraction markers',
          'Misc: FOV, crosshair, combat mode',
        ],
        more: 35,
        href: `${productBase}arc-raiders/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'ARC Raiders software',
    subtitle:
      'ARC Raiders cheats plus Cloud DMA hardware access and the UGC tool — each listing links to its own product page and checkout.',
    viewAll: 'View product',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Hardware',
        category: 'Cloud DMA',
        title: 'Cloud DMA',
        subtitle: 'Hardware-assisted setups on supported Windows rigs',
        desc:
          'Portal-backed Cloud DMA access for operators who pair compatible hardware with a supported Windows build. Confirm driver and firmware notes before checkout.',
        features: [
          'Compatible Windows PC required',
          'Portal setup and driver notes',
          'Pairs with ARC Raiders builds',
          'Verify requirements before purchase',
        ],
        more: 0,
        href: `${productBase}cloud-dma/`,
      },
      {
        badge: 'Utility',
        category: 'UGC tool',
        title: 'UGC Tool',
        subtitle: 'User-generated content workflows and access',
        desc:
          'Standalone UGC tool access through secure checkout — review scope and licensing in the portal after purchase.',
        features: [
          'One-time access option',
          'Portal download after checkout',
          'Windows-focused workflow',
          'Support via Discord when needed',
        ],
        more: 0,
        href: `${productBase}ugc/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Setup, aimbot tuning, ESP layout, loot filters, and patch-day notes for ARC Raiders on Steam PC.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup walkthroughs and feature explanations.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'Raid atmosphere: reading ARC zones with world ESP',
        slug: 'arc-raiders-raid-atmosphere-and-arc-zones',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866391955-mn4li4-arcane-arc-s2.webp',
        desc: 'How distance caps and ARC icons help you skim a zone before you commit to a fight.',
        date: 'Nov 7, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Features',
        title: 'ARC threat overlays when units are on your route',
        slug: 'arc-raiders-arc-threat-overlays',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866372473-d20cm3-arcane-arc-s3.webp',
        desc: 'Threat markers, corpses, and distance context so you know when to break contact.',
        date: 'Nov 7, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Fight hard, extract clean: overlay routing under pressure',
        slug: 'arc-raiders-combat-routing-to-extract',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866348754-97lv7p-arcane-arc-s4.webp',
        desc: 'Balance combat overlays with extraction icons so you exit without guessing the path.',
        date: 'Nov 7, 2025',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'How to set up ARC Raiders cheats on PC (portal first)',
        slug: 'arc-raiders-setup-and-first-launch',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794008121990-ksd4fl-arctic-cheats-how-to-setup-arc-raiders-cheats-full-tutorial-ajh5udvmfaa-873x491-.webp',
        desc: 'Walk through portal access, first launch, and a safe order for enabling overlays on Steam.',
        date: 'Nov 6, 2025',
        readTime: '8 min read',
      },
      {
        tag: 'Features',
        title: 'ARC Raiders aimbot: FOV, smooth, and filters explained',
        slug: 'arc-raiders-aimbot-and-fov-settings',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793197687507-jc9xf6-arcraidersimage1.webp',
        desc: 'What each aim slider does, when to tighten FOV, and how visible check and bones interact.',
        date: 'Nov 5, 2025',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'Player ESP layout that stays readable in ARC Raiders',
        slug: 'arc-raiders-player-esp-layout',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794007894051-jedo40-jiiago-this-arc-raiders-cheat-lets-you-give-teammates-your-esp-uo0gu7hqeva-873x4.webp',
        desc: 'Boxes, skeletons, squad tags, and distance caps — pick a minimal stack before you add more.',
        date: 'Nov 4, 2025',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Loot and world ESP filters for ARC Raiders',
        slug: 'arc-raiders-loot-and-world-esp-filters',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/d668cf71-915f-4d4e-84bc-5ec0cbed3619/1793194358691-6dss8c-ancient-arc-s2.webp',
        desc: 'Rarity and type filters, container selection, and ARC markers without cluttering the hud.',
        date: 'Nov 3, 2025',
        readTime: '6 min read',
      },
      {
        tag: 'Features',
        title: 'Extraction overlays and combat mode',
        slug: 'arc-raiders-extraction-and-threat-overlays',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620131347-c29bi0-zadeyo-arcraiders-3-misc.webp',
        desc: 'Using extraction icons with distance caps and switching combat mode for quieter world ESP.',
        date: 'Nov 2, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Misc options: FOV, crosshair, and flashlight tweaks',
        slug: 'arc-raiders-misc-camera-and-crosshair',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619413119-xqbd8w-levo-arcraiders-3-misc.webp',
        desc: 'Camera zoom, crosshair, full bright, and flashlight settings that pair with combat mode.',
        date: 'Nov 1, 2025',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized menus',
    subtitle: 'Groups mirror aimbot, players, world, loot, extraction, and misc so you are not hunting tabs mid-raid.',
    items: [
      { num: '01', label: 'Combat', title: 'Aimbot cluster', desc: 'FOV, smooth, filters, bones, visible check, draw FOV.' },
      { num: '02', label: 'Players', title: 'ESP stack', desc: 'Box, skeleton, squad, health, shield, OOF arrows.' },
      { num: '03', label: 'World', title: 'ARC & environment', desc: 'Icons, threat, corpses, salvage, containers.' },
      { num: '04', label: 'Loot', title: 'Filters', desc: 'Rarity and type filters with custom selection lists.' },
      { num: '05', label: 'Route', title: 'Extraction', desc: 'Point markers, icons, and capped distance.' },
      { num: '06', label: 'Comfort', title: 'Misc & combat mode', desc: 'FOV, zoom, crosshair, flashlight, combat mode.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: 'Four steps',
    titleBefore: 'From checkout to',
    titleHighlight: 'saved profile',
    subtitle: 'Purchase, install, layer features, then store a profile you can reload after patches.',
    ctaLabel: 'View product',
    ctaHref: `${productBase}arc-raiders/`,
    ctaSecondary: 'Read FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Read compatibility',
        desc: 'Confirm Steam PC, Windows build, and any Cloud DMA requirement noted in the portal.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Get access',
        desc: 'Use the secure checkout path, save your order email, and open the operator portal.',
      },
      {
        num: '03',
        phase: 'Install',
        title: 'Launch once clean',
        desc: 'Install the build, verify the game launches, then enable overlays in small steps.',
      },
      {
        num: '04',
        phase: 'Play',
        title: 'Save profiles',
        desc: 'Store conservative and aggressive profiles so you can swap after patches or loot routes.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for ARC Raiders pacing.',
    items: [
      {
        num: '01',
        title: 'Patch discipline',
        desc: 'After client updates, reread portal notes before queuing — feature availability can shift.',
      },
      {
        num: '02',
        title: 'Start small',
        desc: 'Distance caps and combat mode beat maxing every overlay on day one.',
      },
      {
        num: '03',
        title: 'Support signal',
        desc: 'Tickets move faster with Windows build, Steam build, and a short description of what failed.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'ARC Cheats support',
    subtitle: 'Tell us what blocked you.',
    channels: [
      {
        icon: 'users',
        title: 'Before checkout',
        desc: 'Questions about features or compatibility.',
        linkLabel: 'Get access',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: 'Loader, access, and account questions.',
        linkLabel: 'support@arccheats.org',
        href: 'mailto:support@arccheats.org',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, risk, and setup — before you buy.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Response time',
        desc: 'Include order email and Windows version.',
        linkLabel: 'Join Discord',
        href: 'https://discord.com/invite/wmFY3xVtwm',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout.' },
      { title: 'Platform', desc: 'Windows version and Steam ARC Raiders build.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or game.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, risk, and access — without vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I buy ARC Raiders cheats?',
        a: 'Use the Get access / checkout button on arccheats.org. It opens our secure flow and returns you to the operator portal after purchase.',
      },
      {
        num: '02',
        q: 'What happens after purchase?',
        a: 'You receive access instructions through the checkout flow. Follow the portal steps to download the current build before launching ARC Raiders.',
      },
      {
        num: '03',
        q: 'Can I get banned?',
        a: 'Yes. Third-party tools can violate game rules and risk enforcement. Read current notes and accept the risk before using anything.',
      },
      {
        num: '04',
        q: 'Which platform is supported?',
        a: 'ARC Raiders via Steam on Windows 10 or 11 64-bit. Other platforms are not supported unless the portal explicitly lists them.',
      },
      {
        num: '05',
        q: 'What is Cloud DMA?',
        a: 'Some setups use Cloud DMA hardware with a compatible PC. Requirements live in the portal — confirm before you buy.',
      },
      {
        num: '06',
        q: 'Where is the full feature list?',
        a: 'The ARC Raiders product page lists aimbot, player ESP, world overlays, loot filters, extraction markers, and misc options in one place.',
      },
    ],
  },
  footer: {
    tagline: 'ARC Raiders cheats for PC — aimbot, ESP, and tools. arccheats.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}arc-raiders/`, label: 'ARC Raiders product', ariaLabel: 'ARC Raiders cheats' },
      { href: `${productBase}`, label: 'All products', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About ARC Cheats',
      description:
        'ARC Cheats publishes ARC Raiders PC resources, guides, and product information at arccheats.org.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'ARC Cheats is a PC-focused resource for ARC Raiders players reviewing aimbot, ESP, world overlays, and misc tools before checkout. Game names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Product pages, blog guides, FAQs, and forum samples explain setup and features. Content updates when builds or policies change.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use the Support page and email listed on the site. Include your order email and system details when asking about access or errors.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How arccheats.org handles analytics, cookies, and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard analytics such as pages viewed, device type, browser, and approximate region. Checkout runs on external pages — we do not store payment card numbers on arccheats.org.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us fix broken links and improve guides. Support messages retain the email and content you send until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies for analytics when enabled. You can block cookies in your browser; core content remains readable.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'Privacy questions go through the Support page. Purchase rules appear in Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description: 'Purchase, license, and site use terms for ARC Cheats and arccheats.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'By using arccheats.org or completing checkout for a linked product, you agree to these Terms and the Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We describe software access for ARC Raiders on Steam PC. Feature lists reflect the product page at purchase time and may change when the game or protections update.',
          ],
        },
        {
          heading: 'Checkout',
          paragraphs: [
            'Payment and fulfillment occur on external checkout pages. arccheats.org does not process or store card data.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are personal. Do not share loaders, portal logins, or keys. Device limits follow portal rules.',
          ],
        },
        {
          heading: 'Refunds',
          paragraphs: [
            'Digital access sales are final once checkout completes unless required otherwise by law or expressly stated by the seller. Contact support with order proof for defective access on a supported setup.',
          ],
        },
        {
          heading: 'Risk',
          paragraphs: [
            'Third-party tools can conflict with game updates and policies. You accept enforcement risk. Pause if status shows maintenance.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. Continued use after changes means you accept the revised terms.',
          ],
        },
      ],
    },
    support: {
      title: 'ARC Cheats Support',
      description: 'Loader, access, and checkout questions for ARC Raiders on arccheats.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Get access',
    browseCheatsMobile: 'Get access',
    homeAria: 'ARC Cheats home',
    checkoutAria: 'Get access — secure checkout',
    discordAria: 'Open secure checkout',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
