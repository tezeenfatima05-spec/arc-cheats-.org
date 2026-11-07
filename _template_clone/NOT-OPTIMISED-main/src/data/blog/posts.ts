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
    title: 'ARC Raiders cheats setup: portal download to first stable raid',
    slug: 'arc-raiders-setup-and-first-launch',
    image: blogCover('arc-raiders-setup-and-first-launch'),
    desc: 'Portal-first ARC Raiders cheats setup on Steam PC—download hygiene, overlay order, and a calm first session before you stack aimbot or ESP.',
    date: 'Nov 6, 2025',
    readTime: '9 min read',
    body: [
      {
        type: 'p',
        text: `This guide is written for **ARC Raiders cheats on Steam PC** after you already have portal access from arccheats.org checkout. The objective is not a flashy first raid—it is a **boring, repeatable launch** where Steam, ARC Raiders, and the loader agree on the same night. Full SKU detail stays on the [ARC Raiders product page](${hub}arc-raiders/).`,
      },
      { type: 'h2', text: 'Download only from your operator portal' },
      {
        type: 'p',
        text: 'Treat the portal build hash like a patch note. Pin the unzip folder, keep your order email visible, and pause aggressive antivirus scrubbing until one clean game launch succeeds. Support tickets move faster when you can cite the portal version—not “latest zip from Discord.”',
      },
      { type: 'h2', text: 'Prove the base game before overlays' },
      {
        type: 'p',
        text: 'Session one: loader attached, **every overlay group off**, ARC Raiders through Steam until you reach a menu you recognize. If the client crashes here, no amount of ESP tuning will help. Patch weeks deserve patch patience—queue later, read notes now.',
      },
      { type: 'h2', text: 'Enable player ESP before aimbot' },
      {
        type: 'p',
        text: 'Session two: set **max distance** for player visuals, add **box OR skeleton** (not both maxed), then layer health or shield bars. Names and squad tags come after distance feels honest. This mirrors the dedicated [player ESP layout](/blog/arc-raiders-player-esp-layout/) walkthrough.',
      },
      { type: 'h2', text: 'Add aim assistance with guardrails' },
      {
        type: 'p',
        text: 'Tight aim cone, higher smooth, **visible check on**, chest bone until profiles feel stable. Debug lines for one evening only—they explain why a snap felt wrong. When aim groups behave, world loot and extraction markers can join the stack. See [aimbot tuning](/blog/arc-raiders-aimbot-and-fov-settings/) for slider semantics.',
      },
      { type: 'h2', text: 'Save a baseline profile' },
      {
        type: 'p',
        text: 'Name a conservative profile before you experiment with aggressive caps. Screenshot distance sliders when a build is stable; after ARC Raiders updates, reload baseline instead of retuning from memory.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders cheats access',
        text: 'Secure checkout opens the operator portal and feature map.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'ARC Raiders aimbot guide: FOV, smooth, stickiness, and filters',
    slug: 'arc-raiders-aimbot-and-fov-settings',
    image: blogCover('arc-raiders-aimbot-and-fov-settings'),
    desc: 'ARC Raiders aimbot settings explained—FOV cone, smooth, stickiness, bone pick, visible check, and filters without generic shooter jargon.',
    date: 'Nov 5, 2025',
    readTime: '8 min read',
    body: [
      {
        type: 'p',
        text: 'Aim assistance in **ARC Raiders cheats** is powerful and loud when every slider maxes. This article maps each control to raid behavior—strafe fights, peek trades, and mid-range pressure—so you tune with intent, not nostalgia from other titles.',
      },
      { type: 'h2', text: 'FOV cone: width vs honesty' },
      {
        type: 'p',
        text: 'The aim cone is a search window, not a magic bullet. Narrow cones look deliberate in kill cams; wide cones forgive fast ARC Raiders movement but snap more often. Raise **smooth** before you widen FOV when you feel jitter.',
      },
      { type: 'h2', text: 'Smooth, speed, and stickiness' },
      {
        type: 'p',
        text: '**Smooth** adds inertia so reticle motion resembles human input. **Speed** caps how fast assistance closes distance. **Stickiness** keeps lock when targets slide sideways—high stickiness helps tracking, low stickiness feels looser on flicks. Most stable profiles start mid stickiness and only spike it for chronic strafers.',
      },
      { type: 'h2', text: 'Filters, bones, and visible check' },
      {
        type: 'p',
        text: 'Filters stop aimbot from loving the wrong category (downed players, friendlies, etc.—per your build). **Bone** selection trades head risk for chest reliability. **Visible check** refuses targets behind cover when enabled—pair it with how aggressively you run player ESP.',
      },
      { type: 'h3', text: 'Debug visuals, then silence' },
      {
        type: 'p',
        text: 'Drawn FOV and target lines earn their keep during tuning night. Turn them off once profiles settle; combat mode (see extraction guide) can hide world ESP while combat overlays stay hot.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders aimbot access',
        text: 'Compare the full aim group on the ARC Raiders cheats product page.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Player ESP for ARC Raiders: a readable box-and-tag stack',
    slug: 'arc-raiders-player-esp-layout',
    image: blogCover('arc-raiders-player-esp-layout'),
    desc: 'Build player ESP for ARC Raiders cheats—distance caps, box vs skeleton, squad tags, and off-screen arrows without HUD clutter.',
    date: 'Nov 4, 2025',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'Player ESP should answer three questions quickly: **where**, **who**, and **how hurt**. Everything else is decoration. This layout targets Steam ARC Raiders raids where fights stack in uneven terrain.',
      },
      { type: 'h2', text: 'Distance first, visuals second' },
      {
        type: 'p',
        text: 'Set **max distance** before you toggle boxes or skeletons. If icons spawn outside your realistic gun range, you train bad peek habits. Tighten caps in urban POIs; loosen slightly on open rotates once you know the map.',
      },
      { type: 'h2', text: 'Box, skeleton, or hybrid' },
      {
        type: 'p',
        text: 'Skeletons teach peek angles; boxes stay clean in foliage. Running both at full opacity is how HUDs become lava lamps. Pick one primary, add **shield/health** bars, then **squad name** if you sync calls with a duo.',
      },
      { type: 'h2', text: 'OOF arrows and view direction' },
      {
        type: 'p',
        text: 'Off-screen arrows help orientation—cap their distance so edges do not look like radar. View direction lines reward hold players; disable them if frame time dips on your rig.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders ESP access',
        text: 'Player visual groups and limits are listed on the product hub.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Loot and world ESP filters for ARC Raiders cheats',
    slug: 'arc-raiders-loot-and-world-esp-filters',
    image: blogCover('arc-raiders-loot-and-world-esp-filters'),
    desc: 'Tune loot rarity filters, container toggles, and ARC world markers for ARC Raiders ESP—readable routing without screen noise.',
    date: 'Nov 3, 2025',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'World overlays for **ARC Raiders cheats** span **ARC units**, **threat**, **corpses**, **loot**, **containers**, **salvage**, and **field crates**. Filters exist so you highlight loot you will actually path toward—not every shimmer on the map.',
      },
      { type: 'h2', text: 'Rarity gates and type filters' },
      {
        type: 'p',
        text: 'Rarity alone cannot save a bad route. Pair **rarity** with **type** filters so weapon parts, meds, or craft mats light up without junk spam. Start strict on unfamiliar maps; loosen one tier after you memorize crate locations.',
      },
      { type: 'h2', text: 'Custom selection and distance pairs' },
      {
        type: 'p',
        text: 'Custom selection lists let you whitelist container classes you care about. Keep **max distance** shorter in dense POIs; stretch it when rotates are long and sparse. If the HUD still screams, drop corpse highlights before you drop loot.',
      },
      { type: 'h2', text: 'ARC markers without PvP blindness' },
      {
        type: 'p',
        text: 'ARC icons behave like navigation—not every marker deserves fight priority. Separate profiles for “ARC farm” vs “PvP push” so threat cues do not fight player ESP for attention.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders loot ESP access',
        text: 'Filter groups and distances live on the ARC Raiders cheats listing.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'Extraction overlays and combat mode for ARC Raiders',
    slug: 'arc-raiders-extraction-and-threat-overlays',
    image: blogCover('arc-raiders-extraction-and-threat-overlays'),
    desc: 'Extraction point ESP, threat markers, and combat mode—keep exit routes visible under pressure with ARC Raiders cheats on Steam.',
    date: 'Nov 2, 2025',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: '**Extraction markers** belong in muscle memory. When fights stack, you should not grep the map for an exit. Cap distance so only reachable evac points glow mid-fight, and pair with **ARC threat** cues when pressure spikes.',
      },
      { type: 'h2', text: 'Combat mode vs full world ESP' },
      {
        type: 'p',
        text: 'Combat mode trims world clutter—salvage, containers, dense loot—while player and aim overlays stay forward. Toggle in for CQC stretches; toggle out before loot rotations or you rotate blind.',
      },
      { type: 'h2', text: 'Threat distance before exit distance' },
      {
        type: 'p',
        text: 'When threat icons and exits hug the same screen edge, **lower threat distance first**. Keep exit caps trained from calm lobbies. Corpses and salvage can pause during pushes and return for farm profiles.',
      },
      { type: 'h3', text: 'After a stable extract' },
      {
        type: 'p',
        text: 'Log one successful raid where combat toggles matched peel timing. Reuse that profile instead of re-tuning every queue when only minor clutter was the problem.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders extraction ESP access',
        text: 'Extraction and combat groups ship in the main ARC Raiders build.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Misc ARC Raiders cheat options: FOV, crosshair, camera, flashlight',
    slug: 'arc-raiders-misc-camera-and-crosshair',
    image: blogCover('arc-raiders-misc-camera-and-crosshair'),
    desc: 'FOV changer, camera zoom, crosshair, full bright, and flashlight tweaks for ARC Raiders cheats—comfort layers that pair with combat profiles.',
    date: 'Nov 1, 2025',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Misc tools in **ARC Raiders cheats** are friction reducers: **FOV changer**, **camera zoom**, **flashlight brightness/color**, **full bright**, **custom crosshair**, **font size**, and long-range revive helpers. They do not replace aim discipline—they keep menus from eating raid time.',
      },
      { type: 'h2', text: 'Night maps and ARC-heavy zones' },
      {
        type: 'p',
        text: 'Flashlight and full bright profiles should be separate from PvP profiles. ARC zones often need wider camera zoom; CQC needs tighter FOV for readability. Save three names: **farm**, **fight**, **night**.',
      },
      { type: 'h2', text: 'Crosshair and font size' },
      {
        type: 'p',
        text: 'Custom crosshair helps when game reticles wash out on snow or ember maps. Shrink ESP font before you delete data—you might only need one step down, not a feature purge.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders misc toolkit access',
        text: 'Misc groups are bundled on the ARC Raiders cheats product page.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Reading ARC zones with world ESP in ARC Raiders',
    slug: 'arc-raiders-raid-atmosphere-and-arc-zones',
    image: blogCover('arc-raiders-raid-atmosphere-and-arc-zones'),
    desc: 'ARC Raiders world ESP for zone reads—ARC icons, threat level, and distance caps before you commit to a fight or farm route.',
    date: 'Nov 7, 2025',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Dense ARC Raiders zones punish noisy overlays. Start with **ARC icons** and **threat level** at moderate distance; add containers or loot only when you are routing—not during every gunfight. SKU reference: [ARC Raiders cheats](${hub}arc-raiders/).',
      },
      { type: 'h2', text: 'Cap distance before categories multiply' },
      {
        type: 'p',
        text: 'Shorter caps keep POIs readable. Expand only during loot passes on maps you understand. If player ESP and ARC markers compete, lower world distance—not player distance—during pushes.',
      },
      { type: 'h2', text: 'Combat mode as a zone tool' },
      {
        type: 'p',
        text: 'Flip combat mode when entering a fight corridor; restore full world read when the sector quiets. Zone farming benefits from seeing ARC corpses; PvP chases do not.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders world ESP access',
        text: 'World and ARC groups are documented on the product hub.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'ARC threat overlays: when to break contact in ARC Raiders',
    slug: 'arc-raiders-arc-threat-overlays',
    image: blogCover('arc-raiders-arc-threat-overlays'),
    desc: 'ARC unit markers, corpse cues, and distance bands for ARC Raiders threat ESP—know when to push or peel with cheats on Steam PC.',
    date: 'Nov 7, 2025',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: '**ARC threat overlays** answer a single question: is it safer to push or peel? Markers should live inside a distance band you can physically react to—not across the entire map.',
      },
      { type: 'h2', text: 'Do not clone PvP ESP ranges' },
      {
        type: 'p',
        text: 'Player ESP often wants longer ranges; ARC cues frequently work shorter so icons cluster near your path. Maintain an “ARC-heavy map” profile if you swap zones often.',
      },
      { type: 'h2', text: 'Corpses, units, and combat mode' },
      {
        type: 'p',
        text: 'Corpse highlights help routing; they hurt clarity mid-fight. Pair threat markers with combat mode so player ESP stays primary when contact starts. Document distance caps on calm nights so patch weeks are diffs, not guesswork.',
      },
      {
        type: 'cta',
        title: 'ARC Raiders threat marker access',
        text: 'Compare ARC and threat groups before checkout.',
        href: '/go/arc-raiders/',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Fight hard, extract clean: overlay routing under pressure',
    slug: 'arc-raiders-combat-routing-to-extract',
    image: blogCover('arc-raiders-combat-routing-to-extract'),
    desc: 'Balance combat ESP with extraction icons during ARC Raiders raids—peel routes, checklists, and profile habits for Steam PC cheats.',
    date: 'Nov 7, 2025',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'Mid-raid, **extraction points** should sit inside a distance cap you drilled in calm lobbies. If exits appear only when you are boxed in, fix combat clutter before you widen exit range.',
      },
      { type: 'h2', text: 'Pre-fight checklist' },
      {
        type: 'ul',
        items: [
          'Player ESP distance locked for the current map.',
          'Extraction markers on with a trained max distance.',
          'Combat mode on a key you can hit without looking.',
          'Portal notes skimmed if a patch dropped this week.',
        ],
      },
      { type: 'h2', text: 'Peel timing with exit icons' },
      {
        type: 'p',
        text: 'Rotate toward the nearest lit exit instead of widening every overlay at once. When threat and exits collide on-screen, step threat distance down first. For misc tools that support peels—crosshair, zoom—see the [misc camera guide](/blog/arc-raiders-misc-camera-and-crosshair/).',
      },
      {
        type: 'cta',
        title: 'ARC Raiders extract routing access',
        text: 'Extraction, combat, and player groups ship together.',
        href: '/go/arc-raiders/',
      },
    ],
  },
];
