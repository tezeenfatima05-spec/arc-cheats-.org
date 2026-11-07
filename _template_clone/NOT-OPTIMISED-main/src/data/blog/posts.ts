import type { BlogPostFull } from './types';
import { PRODUCT_BASE } from '../../config/site';
const hub = PRODUCT_BASE;

/** On-site responsive covers (see scripts/mirror-blog-images.mjs). */
function blogCover(slug: string): string {
  return `/images/blog/${slug}`;
}

export const blogPosts: BlogPostFull[] = [
  {
    featured: true,
    tag: 'Setup',
    title: 'How to set up ARC Raiders cheats on PC (portal first)',
    slug: 'arc-raiders-setup-and-first-launch',
    image: blogCover('arc-raiders-setup-and-first-launch'),
    desc: 'Walk through portal access, first launch, and a safe order for enabling overlays on Steam.',
    date: 'Nov 6, 2025',
    readTime: '8 min read',
    body: [
      {
        type: 'p',
        text: `This walkthrough is for Steam **ARC Raiders** on **Windows 10 or 11**. It assumes you already completed checkout and have an operator portal login. The goal is a boring first session: launcher works, game starts, then you enable **one feature group at a time**. Product detail and checkout live on [ARC Raiders](${hub}arc-raiders/).`,
      },
      { type: 'h2', text: '1) Portal and download hygiene' },
      {
        type: 'p',
        text: 'Download only from your portal. Note the build version, unzip to a fixed folder, and exclude it from aggressive AV cleaning until you confirm launch. Keep your order email in reach—support will ask for it.',
      },
      { type: 'h2', text: '2) Launch with overlays off' },
      {
        type: 'p',
        text: 'First boot should prove Steam and ARC Raiders run normally. If the game crashes before you touch menus, fix that before enabling ESP or aimbot. Patch days mean patch patience.',
      },
      { type: 'h2', text: '3) Layer player ESP before aimbot' },
      {
        type: 'p',
        text: `Enable distance caps, then boxes or skeleton—not both at maximum on day one. Add name and squad tags after distance reads feel stable. This mirrors the [player ESP layout](/blog/arc-raiders-player-esp-layout/) article.`,
      },
      { type: 'h2', text: '4) Add aimbot conservatively' },
      {
        type: 'p',
        text: `Tight FOV, higher smooth, visible check on. Tune against bots or low-pressure raids before trusting aggressive profiles. See [aimbot settings](/blog/arc-raiders-aimbot-and-fov-settings/) for what each slider does.`,
      },
      {
        type: 'cta',
        title: 'ARC Raiders setup access',
        text: 'Continue with the full feature list and secure checkout.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'ARC Raiders aimbot: smooth and filters explained',
    slug: 'arc-raiders-aimbot-and-fov-settings',
    image: blogCover('arc-raiders-aimbot-and-fov-settings'),
    desc: 'What each aim slider does, when to tighten the aim cone, and how visible check and bones interact.',
    date: 'Nov 5, 2025',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'Aim assistance is the fastest way to make mistakes if you max every knob. This article explains the **aim cone**, **smooth**, **stickiness**, **speed**, **filters**, **bone selection**, and **visible check** as they are used in ARC Raiders tooling—not generic FPS jargon.',
      },
      { type: 'h2', text: 'Aim cone and smoothing' },
      {
        type: 'p',
        text: 'The aim cone decides how wide the search window is. A narrow cone looks more intentional; a wide cone compensates for fast strafes but snaps more often. Smooth adds inertia so reticle movement matches human motion. Raise smooth before you widen the cone.',
      },
      { type: 'h2', text: 'Filters and bones' },
      {
        type: 'p',
        text: 'Filters keep aimbot from picking the wrong target category. Bone selection chooses head vs torso trade-offs. Visible check stops engagement through solid cover when enabled—pair with how you use wallhack-style ESP.',
      },
      { type: 'h3', text: 'Debug visuals after tuning' },
      {
        type: 'p',
        text: 'Target lines and cone outlines help you see what the module considers active. Turn them off for minimal HUD clutter once profiles feel stable. Combat mode (see misc article) can hide world ESP while retaining combat overlays.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders aimbot access',
        text: 'Open the ARC Raiders product page for the full menu map.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Player ESP layout that stays readable in ARC Raiders',
    slug: 'arc-raiders-player-esp-layout',
    image: blogCover('arc-raiders-player-esp-layout'),
    desc: 'Boxes, skeletons, squad tags, and distance caps — pick a minimal stack before you add more.',
    date: 'Nov 4, 2025',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Readable ESP beats noisy ESP. Start with **max distance** per category, then add **box** *or* **skeleton**, not both blown out. Layer **health** and **shield** next, then **name** and **squad** if you need voice-linked callouts.',
      },
      { type: 'h2', text: 'OOF arrows and view direction' },
      {
        type: 'p',
        text: 'Off-screen arrows keep you oriented; view direction helps you track peek angles. If the screen feels crowded, reduce arrow frequency or distance before removing combat-critical info.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders ESP features',
        text: 'See grouped features on the product hub.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Loot and world ESP filters for ARC Raiders',
    slug: 'arc-raiders-loot-and-world-esp-filters',
    image: blogCover('arc-raiders-loot-and-world-esp-filters'),
    desc: 'Rarity and type filters, container selection, and ARC markers without cluttering the hud.',
    date: 'Nov 3, 2025',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'World overlays cover **ARC icons**, **threat**, **corpses**, **loot**, **containers**, **salvage**, and **field crate** cues. Filters exist so you only highlight what you will actually route for.',
      },
      { type: 'h2', text: 'Rarity and custom selection' },
      {
        type: 'p',
        text: 'Loot rarity and type filters prevent rainbow vomit on screen. Custom selection lists pair with max distance—shorter in dense POIs, longer when loot routing is sparse.',
      },
      {
        type: 'cta',
        title: 'Get access',
        text: 'Filters and distances are listed on the product page.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'Exit overlays and combat mode',
    slug: 'arc-raiders-extraction-and-threat-overlays',
    image: blogCover('arc-raiders-extraction-and-threat-overlays'),
    desc: 'Using exit icons with distance caps and switching combat mode for quieter world ESP.',
    date: 'Nov 2, 2025',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: '**Exit** markers belong in your rotation muscle memory. Cap distance so only relevant evac points stay lit mid-fight. Pair with **ARC threat** when you need a fast “leave now” signal.',
      },
      { type: 'h2', text: 'Combat mode vs full world ESP' },
      {
        type: 'p',
        text: 'Combat mode hides world ESP while keeping combat overlays front and center. Toggle when you are committed to a fight and do not need salvage or container spam.',
      },
      { type: 'h3', text: 'When to widen exit marker range' },
      {
        type: 'p',
        text: 'Keep exit icons inside a band you can reach without crossing open ground. After a wipe or reset, widen caps briefly while you loot, then tighten again before the next engagement.',
      },
      {
        type: 'p',
        text: 'If secondary world layers fight your combat HUD, pause container or salvage highlights during the push and restore them only when the sector is quiet.',
      },
      {
        type: 'p',
        text: 'Review portal patch notes when combat mode behavior changes—distance caps that worked last build may need one click, not a full profile rebuild.',
      },
      { type: 'h3', text: 'After you test exit caps' },
      {
        type: 'p',
        text: 'Log one successful raid where combat mode toggles matched your peel timing. Reuse that profile instead of re-tuning every lobby when only minor UI clutter was the problem.',
      },
      { type: 'h3', text: 'Threat icons when exits spike' },
      {
        type: 'p',
        text: 'If unit markers flood the same screen edge as exits, drop threat distance first and keep exit caps fixed. Restore threat range only after you have a clean peel path logged.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders overlay access',
        text: 'Checkout when you are ready for the full build.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Misc options: FOV, crosshair, and flashlight tweaks',
    slug: 'arc-raiders-misc-camera-and-crosshair',
    image: blogCover('arc-raiders-misc-camera-and-crosshair'),
    desc: 'Camera zoom, crosshair, full bright, and flashlight settings that pair with combat mode.',
    date: 'Nov 1, 2025',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Misc options are comfort tools: **FOV changer**, **camera zoom**, **flashlight brightness** and **color**, **full bright**, **custom crosshair**, **font size**, and **long-distance revive/consumable** helpers. They do not replace combat skill—they reduce friction.',
      },
      { type: 'h2', text: 'Profile pairing' },
      {
        type: 'p',
        text: 'Save separate profiles for night maps, ARC-heavy zones, and combat-mode pushes so you are not tweaking sliders mid-raid.',
      },
      {
        type: 'cta',
        title: 'Get access',
        text: 'Use secure checkout from the ARC Cheats hub.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Raid atmosphere: reading ARC zones with world ESP',
    slug: 'arc-raiders-raid-atmosphere-and-arc-zones',
    image: blogCover('arc-raiders-raid-atmosphere-and-arc-zones'),
    desc: 'How distance caps and ARC icons help you skim a zone before you commit to a fight.',
    date: 'Nov 7, 2025',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `Dense raids punish noisy overlays. Start with **ARC icons** and **threat level** at moderate distance, then add containers or loot only when you are routing—not during every gunfight. The full option list lives on [ARC Raiders](${hub}arc-raiders/).`,
      },
      { type: 'h2', text: 'Cap distance before you add categories' },
      {
        type: 'p',
        text: 'Shorter max distance keeps the HUD calm in tight POIs. Expand caps when you are looting or rotating between sectors—not when players are on your screen.',
      },
      { type: 'h2', text: 'Pair with combat mode' },
      {
        type: 'p',
        text: 'When you push a fight, toggle **combat mode** so world spam drops while player ESP stays up. Flip back to full world read when the area is quiet.',
      },
      {
        type: 'cta',
        title: 'Get access',
        text: 'World ESP groups are listed on the product page.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'ARC threat overlays on your route',
    slug: 'arc-raiders-arc-threat-overlays',
    image: blogCover('arc-raiders-arc-threat-overlays'),
    desc: 'Markers, corpses, and distance context so you know when to break contact.',
    date: 'Nov 7, 2025',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: '**ARC unit** and **corpse** markers are navigation tools. They should answer one question: is it safer to push or peel? Keep readouts inside a distance band you can actually react to.',
      },
      { type: 'h2', text: 'Do not mirror PvP ESP settings' },
      {
        type: 'p',
        text: 'Player ESP wants longer ranges; ARC cues often work better shorter so icons cluster only near your path. Save profiles for “ARC-heavy” maps if you swap often.',
      },
      { type: 'h3', text: 'Distance bands that stay readable' },
      {
        type: 'p',
        text: 'Start with a conservative max distance on world icons, then widen only after you confirm frame time and map density stay stable. Pair corpse cues with extraction markers only when your route is already set—adding both at max range creates the same clutter PvP ESP avoids.',
      },
      {
        type: 'p',
        text: 'When pressure spikes, toggle combat mode so player and squad layers stay primary while secondary world icons pause. That habit keeps contact decisions fast without deleting your tuned profile.',
      },
      {
        type: 'p',
        text: 'Document which distance cap you used in calm lobbies so patch days do not force a full retune. Notes in the operator portal beat guessing after every build bump.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders overlay access',
        text: 'Compare world and unit groups before checkout.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Fight hard, extract clean: overlay routing under pressure',
    slug: 'arc-raiders-combat-routing-to-extract',
    image: blogCover('arc-raiders-combat-routing-to-extract'),
    desc: 'Balance combat overlays with extraction icons so you exit without guessing the path.',
    date: 'Nov 7, 2025',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Mid-raid, **extraction points** and **icons** should stay within a capped distance you trained on in calmer lobbies. If exits only appear when you are already boxed in, lower combat clutter before you lower extract range.',
      },
      { type: 'h2', text: 'Pre-fight checklist' },
      {
        type: 'ul',
        items: [
          'Player ESP distance locked for the current map.',
          'Extraction markers on with a sane max distance.',
          'Combat mode mapped to a key you can hit without looking.',
        ],
      },
      { type: 'h3', text: 'Peel timing with exit icons' },
      {
        type: 'p',
        text: 'If exit markers only show when you are already boxed in, tighten combat clutter first—not the exit range you trained on. Rotate toward the nearest lit icon instead of widening every layer at once.',
      },
      {
        type: 'p',
        text: 'For the misc tools that pair with this (crosshair, flashlight, camera zoom), see the [misc camera guide](/blog/arc-raiders-misc-camera-and-crosshair/).',
      },
      {
        type: 'cta',
        title: 'ARC Raiders extract routing access',
        text: 'Extraction and combat mode live in the main build.',
        href: '/go/arc-raiders/',
      },
    ],
  },
];
