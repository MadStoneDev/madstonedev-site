/*
  One data file for every MadStoneDev product.

  The home page list and the three page templates (app / game / web) all render
  from this. Facts here were checked against each app's repo and live site
  (see RESEARCH.md). Anything still unconfirmed is written as a visible
  [bracket] so it's obvious on the page and easy to grep for later.

  Conventions:
  - Keep copy plain, first person, Australian English. No hype words.
  - `hidden: true` keeps a product in the data but renders it nowhere.
  - `hasPage: true` gives a product its own /<slug> page on this site.
    Products without a page link straight to their live site.
*/

export type ProductType = "mobile" | "game" | "web";
export type ProductStatus = "live" | "in-development" | "planned";

export interface Feature {
  title: string;
  body: string;
}

export interface Plan {
  name: string;
  price: string;
  blurb: string;
  cta: string;
  featured?: boolean;
}

export interface Faq {
  q: string;
  a: string;
}

/** A term/description row, used for the Azimuth privacy summary and the
 *  "what it costs" list on the game page. */
export interface InfoRow {
  term: string;
  detail: string;
}

export interface CrewMember {
  name: string;
  role: string;
  /** design-token colour name, e.g. "al" | "tony" | "vonditto" */
  colorToken: "al" | "tony" | "vonditto";
  moves: string;
  /** Character art shown on the crew card (path under /public). */
  art?: string;
}

export interface StoreLinks {
  appStore?: string;
  googlePlay?: string;
}

export interface NotifySignup {
  /** Wording on the label above the email field. */
  label: string;
  /** Stable key kept separate per product when a sign-up is submitted. */
  key: string;
}

export interface Product {
  slug: string;
  name: string;
  type: ProductType;
  status: ProductStatus;
  hidden?: boolean;
  hasPage: boolean;

  /** Short line for home cards / the web-apps list / hero. */
  tagline: string;
  /** One-liner for the compact web-apps list. */
  listNote?: string;
  /** Longer hero paragraph on the product's own page. */
  heroBody?: string;

  platforms: string[];
  /** Small status pill wording, e.g. "Out now", "Web now · Mobile in development". */
  statusLabel: string;
  category?: string;
  priceLabel?: string;

  externalUrl?: string;
  externalLabel?: string;
  store?: StoreLinks;

  // App / web template content
  features?: Feature[];
  faq?: Faq[];
  supportEmail?: string;
  /** Internal privacy page path hosted on this site, if any. */
  privacyPath?: string;
  /** External privacy policy (lives on the app's own domain). */
  privacyUrl?: string;
  privacyRows?: InfoRow[];
  builtWith?: string[];
  /** Short paragraphs for an "about this app" / "made in Australia" panel. */
  aboutParagraphs?: string[];
  aboutHeading?: string;
  /** Operating company, when it differs from the studio (e.g. "RAVENCI Solutions").
   *  Rendered as a quiet "A <name> product" line on the product's page. */
  operatedBy?: string;

  // Web template plans
  plans?: Plan[];
  plansNote?: string;

  // Game template content
  /** Hero key art shown in place of the placeholder box (path under /public). */
  keyArt?: string;
  keyArtAlt?: string;
  crew?: CrewMember[];
  mechanics?: Feature[];
  costRows?: InfoRow[];
  launchNote?: { title: string; body: string };
  screenshots?: string[];

  notify?: NotifySignup;

  // SEO
  seoTitle?: string;
  seoDescription: string;
  ogTagline?: string;
}

/* ------------------------------------------------------------------ */

export const PRODUCTS: Product[] = [
  // ----------------------------------------------------------------
  // MOBILE
  // ----------------------------------------------------------------
  {
    slug: "azimuth",
    name: "Azimuth Compass",
    type: "mobile",
    status: "live",
    hasPage: true,
    tagline:
      "A compass that uses your phone's camera to take a bearing, like a prismatic compass.",
    heroBody:
      "Azimuth uses your phone's camera like a prismatic compass. Point it at a landmark, lock the bearing, and it tells you to turn left or right to stay on course. An update rolling out now adds a red or green night-vision mode, saved waypoints, and an optional account so your waypoints work across your devices. You pay once and use it everywhere.",
    platforms: ["iPhone (iOS 16.4+)", "Android"],
    statusLabel: "Out now",
    category: "Navigation",
    priceLabel: "Free · No ads",
    store: {
      appStore:
        "https://apps.apple.com/au/app/azimuth-compass/id6808949289",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.madstonedev.azimuthcompass",
    },
    features: [
      {
        title: "Prismatic sighting",
        body: "Line up a distant landmark in the camera view and read its bearing directly.",
      },
      {
        title: "Bearing lock",
        body: "Lock a bearing, then follow turn-left and turn-right cues to hold your course.",
      },
      {
        title: "Degrees or mils",
        body: "Show degrees, NATO mils, or both side by side.",
      },
      {
        title: "True or magnetic north",
        body: "Switch any time, with declination worked out for where you are.",
      },
      {
        title: "Tilt-compensated",
        body: "You don't have to hold the phone flat to get a heading.",
      },
      {
        title: "Live accuracy",
        body: "Shows how accurate the reading is, and you can calibrate with a figure-8 if something is throwing it off.",
      },
      {
        title: "High-contrast display",
        body: "Easier to read outdoors.",
      },
      {
        title: "Keep screen awake",
        body: "Stops the screen dimming during long sightings.",
      },
    ],
    privacyPath: "/azimuth/privacy",
    privacyRows: [
      {
        term: "Camera",
        detail:
          "Used live for sighting only. Nothing is recorded, saved or uploaded.",
      },
      {
        term: "Location",
        detail:
          "Optional, and only used to work out magnetic declination for true north. The correction is done on your device from the phone's own compass and GPS, with no network request. Turn location off and Azimuth uses magnetic north.",
      },
      {
        term: "Accounts & tracking",
        detail:
          "No ads and no analytics. The compass needs no account. Azimuth is adding an optional account so your saved waypoints work across your devices; if you sign in, your sign-in details and waypoints are stored on my own server so they can sync. Nothing else is collected.",
      },
      {
        term: "Offline",
        detail:
          "The compass works without a signal and makes no network requests, even with true north on. Only the optional account features, like syncing waypoints when you're signed in, use the network.",
      },
    ],
    supportEmail: "hello@madstone.dev",
    faq: [
      {
        q: "The heading jumps around. What do I do?",
        a: "Move away from metal, cars and electronics, then calibrate by moving the phone in a figure-8. The accuracy indicator shows when the reading is reliable again.",
      },
      {
        q: "Should I use true or magnetic north?",
        a: "Use the one your map uses. Most topographic maps give grid or true bearings; if you're working from a magnetic bearing, switch Azimuth to magnetic.",
      },
      {
        q: "What are NATO mils?",
        a: "A finer unit than degrees. There are 6400 mils in a full circle, and they're used by the military and on some compasses. You can show degrees, mils or both.",
      },
      {
        q: "Can I rely on it instead of a real compass?",
        a: "A phone compass depends on the magnetometer, which metal, magnets and electronics can throw off. Azimuth shows a live accuracy indicator and a figure-8 calibration to help, but for anything safety-critical carry a proper compass as a backup.",
      },
    ],
    seoTitle: "Azimuth Compass",
    seoDescription:
      "Azimuth Compass uses your phone's camera like a prismatic compass. Sight a landmark, lock the bearing, and read it in degrees or NATO mils, true or magnetic north. Free, no ads.",
    ogTagline: "Find your bearing.",
  },

  {
    slug: "justsent",
    name: "JustSent",
    type: "mobile",
    status: "in-development",
    hasPage: true,
    tagline:
      "Send someone a file, or open a room where everyone can drop files and chat.",
    heroBody:
      "Send a file with a short code or link, no sign-up needed to receive it. Or open a room where a few people can drop files, chat and see what's landed. It runs in the browser now, and I'm working on an iPhone and Android app.",
    platforms: ["Web", "iPhone & Android (in development)"],
    statusLabel: "Web now · Mobile in development",
    externalUrl: "https://justsent.app",
    externalLabel: "Open JustSent",
    features: [
      {
        title: "Send with a code",
        body: "Share a file with a short code or link. The other person doesn't need an account to download it.",
      },
      {
        title: "Rooms",
        body: "Open a named room where a few people can drop files, chat, and see who's downloaded what.",
      },
      {
        title: "Your own library",
        body: "Signed-in plans keep a personal library of files you can re-share, instead of re-uploading.",
      },
      {
        title: "Expiry you control",
        body: "Set how long a link or room lasts, from an hour up to a year on the larger plans.",
      },
      {
        title: "Encrypted in transit",
        body: "Files move over an encrypted connection. [Confirm at-rest encryption wording before claiming it on the page.]",
      },
      {
        title: "Private links",
        body: "Optional end-to-end-encrypted links where the file is encrypted in your browser and the key never reaches the server.",
      },
    ],
    privacyUrl: "https://justsent.app/privacy",
    operatedBy: "RAVENCI Solutions",
    aboutHeading: "How it's built",
    aboutParagraphs: [
      "JustSent is a web app today, and the iPhone and Android app is in development. Files are stored on Cloudflare R2 and the app runs on my own servers.",
      "There are no ads. Paid plans cover the storage and bandwidth.",
    ],
    supportEmail: "hello@madstone.dev",
    notify: {
      label: "Let me know when the app's out",
      key: "justsent",
    },
    seoTitle: "JustSent",
    seoDescription:
      "JustSent lets you send a file with a short code, or open a room where everyone can drop files and chat. Web app now, with an iPhone and Android app in development.",
    ogTagline: "Send a file, or open a room.",
  },

  {
    slug: "justnoted",
    name: "JustNoted",
    type: "mobile",
    status: "in-development",
    hasPage: true,
    tagline:
      "A notepad you can trust. Write, close it, come back later and it's all there.",
    heroBody:
      "I wanted a notepad I could trust. Write something, close it, come back later and it's all still there. Keep notes on your device or sync them to your account, with notebooks, sharing and version history.",
    platforms: ["Web", "Mobile (planned)"],
    statusLabel: "Web now · Mobile planned",
    externalUrl: "https://justnoted.app",
    externalLabel: "Open JustNoted",
    features: [
      {
        title: "Just write",
        body: "A calm, distraction-free editor with markdown, slash commands, word goals and a focus mode.",
      },
      {
        title: "Notebooks",
        body: "Organise notes into notebooks. The free plan gives you ten; Scribe makes them unlimited.",
      },
      {
        title: "Local or synced",
        body: "Keep a note in your browser, or sync it to your account so it follows you across devices. Notes save locally first, then sync in the background.",
      },
      {
        title: "Sharing",
        body: "Share a note with a public or private link, with a password, an expiry date, or anonymously.",
      },
      {
        title: "Live collaboration",
        body: "On the Scribe plan, share a note other people can edit with you at the same time.",
      },
      {
        title: "Version history",
        body: "Notes keep a history of saved versions so you can look back, with a date filter on Scribe.",
      },
    ],
    privacyUrl: "https://justnoted.app/privacy-policy",
    operatedBy: "RAVENCI Solutions",
    aboutHeading: "About your notes",
    aboutParagraphs: [
      "JustNoted has a free plan (Draft) and a paid plan (Scribe) at A$5 a month. There are no ads, and your notes aren't used to train AI.",
      "JustNoted uses Google Analytics and LogRocket to understand problems and usage, and these only run after you agree on the consent banner. It isn't a no-tracking app, and I'd rather say so plainly.",
    ],
    supportEmail: "hello@madstone.dev",
    notify: {
      label: "Let me know when the app's out",
      key: "justnoted",
    },
    seoTitle: "JustNoted",
    seoDescription:
      "JustNoted is a calm, distraction-free notepad for the web. Write in markdown, keep notes local or synced, with notebooks, sharing and version history. Free to start.",
    ogTagline: "A notepad you can trust.",
  },

  // ----------------------------------------------------------------
  // GAMES
  // ----------------------------------------------------------------
  {
    slug: "bustin-out",
    name: "Bustin' Out",
    type: "game",
    status: "in-development",
    hasPage: true,
    tagline:
      "Three criminals got framed for the heist they'd been planning for years. Now they want out.",
    heroBody:
      "Three criminals got framed for a heist they didn't pull. They could have done it, they'd been planning it for years, but they won't take credit for someone else's work. Now they want out.",
    platforms: ["iPhone & Android"],
    statusLabel: "In development · iPhone & Android",
    keyArt: "/bustin-out-key-art.png",
    keyArtAlt:
      "The three convicts standing in the rubble of a prison break at night, with police helicopters shining spotlights down on them.",
    crew: [
      {
        name: "Al Cologne",
        role: "The boss",
        colorToken: "al",
        art: "/bustin-out-al.png",
        moves:
          "Moves one square in any direction. Usually has to be the last one out.",
      },
      {
        name: "Tony Oregano",
        role: "The muscle",
        colorToken: "tony",
        art: "/bustin-out-tony.png",
        moves:
          "Moves diagonally, as far as he likes. The only one who can push things out of the way.",
      },
      {
        name: "Von Ditto Funnybone",
        role: "[Role]",
        colorToken: "vonditto",
        art: "/bustin-out-vonditto.png",
        moves:
          "Moves up, down, left or right and keeps sliding until something stops him. Small enough to fit through hatches into bonus rooms.",
      },
    ],
    mechanics: [
      { title: "Move limits", body: "Some rooms only give you so many moves." },
      {
        title: "Guards",
        body: "They patrol, stand and turn, or sleep. Get spotted and it's over.",
      },
      {
        title: "Dogs",
        body: "They smell anyone next to them, and crates won't hide you.",
      },
      {
        title: "Cameras",
        body: "Fixed or sweeping. Push a crate in front to block them.",
      },
      {
        title: "Keys and doors",
        body: "Whoever has the key opens the door. Some chests are worth more than others.",
      },
      {
        title: "Switches and plates",
        body: "Switches stay flipped. Pressure plates only work while someone stands on them.",
      },
    ],
    costRows: [
      {
        term: "The game",
        detail:
          "Free. Every prison is free and you unlock the next one by playing.",
      },
      { term: "Ads", detail: "None." },
      {
        term: "Hints",
        detail:
          "You get 10 free. A hint shows you the next move. You can buy more hint packs from the in-game store.",
      },
      { term: "Undo and retry", detail: "Always free." },
    ],
    launchNote: {
      title: "2 prisons at launch",
      body: "100 rooms in each, with 3 more prisons on the way.",
    },
    screenshots: [
      "[Screenshot — Prison 1 cell]",
      "[Screenshot — guard patrol]",
      "[Screenshot — Tony pushing a crate]",
      "[Screenshot — room cleared]",
    ],
    notify: {
      label: "Want to know when it's out?",
      key: "bustin-out",
    },
    seoTitle: "Bustin' Out",
    seoDescription:
      "Bustin' Out is a turn-based puzzle game. Three framed criminals want out, and each one moves differently. Work out who goes where to clear each room. In development for iPhone and Android.",
    ogTagline: "Each one moves differently.",
  },

  // ----------------------------------------------------------------
  // WEB APPS
  // ----------------------------------------------------------------
  {
    slug: "qrmory",
    name: "QRmory",
    type: "web",
    status: "live",
    hasPage: true,
    tagline:
      "QR codes you can change after they're printed, with scan stats.",
    listNote: "QR codes you can change after they're printed, with scan stats.",
    heroBody:
      "QR codes you can change after they're printed. Point a code somewhere new any time, and see how many people scanned it.",
    platforms: ["Web"],
    statusLabel: "Live",
    externalUrl: "https://qrmory.com",
    externalLabel: "Open QRmory",
    features: [
      {
        title: "Change it later",
        body: "Dynamic codes let you update where a code points without reprinting it.",
      },
      {
        title: "Scan stats",
        body: "See how many times each code was scanned, without storing anyone's IP address.",
      },
      {
        title: "Safe links",
        body: "Links are checked for phishing and malware with Google Web Risk before a code goes live.",
      },
      {
        title: "Your own domain",
        body: "Use your own domain for your codes on the Explorer plan and up.",
      },
      {
        title: "No ads",
        body: "Not on the free plan, not on any plan.",
      },
      {
        title: "Codes stay safe",
        body: "Drop to a smaller plan and codes over the limit are paused for 90 days, not deleted.",
      },
    ],
    plans: [
      {
        name: "Free",
        price: "A$0",
        blurb: "3 dynamic codes, scan stats and styling. On qrmory.com.",
        cta: "Start free",
      },
      {
        name: "Explorer",
        price: "A$5.99 / mo",
        blurb: "25 dynamic codes and 1 custom domain.",
        cta: "Choose Explorer",
      },
      {
        name: "Creator",
        price: "A$12.99 / mo",
        blurb: "50 dynamic codes and 3 custom domains.",
        cta: "Choose Creator",
        featured: true,
      },
      {
        name: "Champion",
        price: "A$39.99 / mo",
        blurb: "250 dynamic codes and 10 custom domains.",
        cta: "Choose Champion",
      },
    ],
    plansNote: "Prices in AUD. Cancel any time from your dashboard.",
    operatedBy: "RAVENCI Solutions",
    aboutHeading: "Made in Australia",
    aboutParagraphs: [
      "QRmory is Australian owned and run. I built it and I run it, so when you need help you're talking to me. I usually reply within 24 to 48 hours.",
      "Scans are counted without storing anyone's IP address, and there are no third-party ads in front of your customers when they scan.",
    ],
    builtWith: ["Next.js", "TypeScript", "Supabase", "Google Web Risk"],
    seoTitle: "QRmory",
    seoDescription:
      "QRmory makes QR codes you can change after they're printed, with scan stats, safe-link checking and custom domains. Australian owned, free plan available.",
    ogTagline: "QR codes you can change after they're printed.",
  },

  {
    slug: "justreel",
    name: "JustReel",
    type: "web",
    status: "live",
    hasPage: true,
    tagline: "Keep track of what you've watched and share lists with friends.",
    listNote: "Keep track of what you've watched and share lists with friends.",
    heroBody:
      "JustReel keeps track of the films and shows you've watched, down to the episode, and lets you build lists you share and run with other people. It's free, and it runs in your browser.",
    platforms: ["Web"],
    statusLabel: "Live",
    externalUrl: "https://justreel.app",
    externalLabel: "Open JustReel",
    features: [
      {
        title: "Track what you've watched",
        body: "Mark films and episodes watched or rewatched. TV series tick off as you go, so your history stays accurate without much fuss.",
      },
      {
        title: "Shared lists",
        body: "Build lists on your own or with other people, and set who can edit, view or just follow each one.",
      },
      {
        title: "Recommendations",
        body: "Get suggestions from your history, mixing an AI pass with trending, cast and taste-based picks that refresh each day.",
      },
      {
        title: "Talk about it",
        body: "Follow people, watch an activity feed, leave ratings and comments, and message other watchers.",
      },
      {
        title: "Where to watch",
        body: "See where a title is streaming. [Streaming availability is United States only for now, to confirm.]",
      },
      {
        title: "Works like an app",
        body: "It runs in the browser and installs as a web app on your phone or desktop. There's no native app yet.",
      },
    ],
    aboutHeading: "How it works",
    aboutParagraphs: [
      "JustReel is free. There's no paid tier yet, and there are no ads.",
      "Film and show data comes from TMDB. It runs on my own servers, and you sign in with a magic link rather than a password.",
    ],
    builtWith: ["Next.js", "Supabase", "TMDB", "Claude Haiku"],
    seoTitle: "JustReel",
    seoDescription:
      "JustReel helps you keep track of the films and TV you've watched, down to the episode, and share lists with friends. Free, in your browser.",
    ogTagline: "Keep track of what you've watched.",
  },

  {
    slug: "thejury",
    name: "TheJury",
    type: "web",
    status: "live",
    hasPage: false,
    tagline:
      "Polls and votes for Australian organisations, with a results record for the minutes.",
    listNote:
      "Polls and votes for Australian organisations, with a results record for the minutes.",
    platforms: ["Web"],
    statusLabel: "Live",
    externalUrl: "https://thejury.app",
    externalLabel: "Open TheJury",
    seoDescription:
      "TheJury is Australian-hosted polling and decision-making for organisations. Members vote with no account, and you get a results record you can attach to the minutes.",
  },

  {
    slug: "iloveboardgames",
    name: "iLoveBoardGames",
    type: "web",
    status: "live",
    hasPage: true,
    tagline:
      "Discover board games and trading card games, with rankings and a game-night finder.",
    listNote:
      "Discover board games and trading card games, with rankings and a game-night finder.",
    heroBody:
      "iLoveBoardGames helps you find your next game. Search board games, see what's trending and highly rated, and work out what to play tonight by how many of you there are and how long you've got.",
    platforms: ["Web"],
    statusLabel: "Live",
    externalUrl: "https://iloveboardgames.xyz",
    externalLabel: "Open iLoveBoardGames",
    features: [
      {
        title: "Find something for tonight",
        body: "Tell it how many players you have and how much time, and it suggests games that fit.",
      },
      {
        title: "Browse and search",
        body: "Look through games by category, and see what's top rated, trending, newly released and coming up.",
      },
      {
        title: "Rankings from BoardGameGeek",
        body: "Game data and rankings come from BoardGameGeek, so the numbers match what the community already uses.",
      },
      {
        title: "Game nights and community",
        body: "Keep a profile, follow an activity feed, set up game nights and climb the leaderboards.",
      },
      {
        title: "A card-game side",
        body: "There's a Cards section for trading card games alongside the board games. [To confirm: what the Cards side covers so I can describe it properly.]",
      },
    ],
    aboutHeading: "About",
    aboutParagraphs: [
      "iLoveBoardGames is free to use.",
      "Board-game data and rankings come from BoardGameGeek, with a separate section for trading card games.",
    ],
    builtWith: ["Next.js", "Supabase", "BoardGameGeek"],
    seoTitle: "iLoveBoardGames",
    seoDescription:
      "iLoveBoardGames helps you discover board games and trading card games, with BoardGameGeek rankings, a game-night finder and what's trending. Free to use.",
    ogTagline: "Find your next game.",
  },

  {
    slug: "beforeaftr",
    name: "beforeAftr",
    type: "web",
    status: "live",
    hasPage: false,
    tagline:
      "Compare two photos with a slider you drag to wipe between the before and the after.",
    listNote:
      "Compare two photos with a slider you drag between before and after.",
    platforms: ["Web"],
    statusLabel: "Live",
    externalUrl: "https://beforeaftr.me",
    externalLabel: "Open beforeAftr",
    seoDescription:
      "beforeAftr is a free, no-sign-up tool for comparing two photos with a slider you drag to wipe between the before and the after.",
  },

  // ----------------------------------------------------------------
  // HIDDEN (kept in the data, rendered nowhere)
  // ----------------------------------------------------------------
  {
    slug: "tabletop-chronicles",
    name: "Tabletop Chronicles",
    type: "web",
    status: "live",
    hidden: true,
    hasPage: false,
    tagline: "[Hidden for now.]",
    platforms: ["Web"],
    statusLabel: "Live",
    externalUrl: "https://tabletopchronicles.app",
    seoDescription: "Tabletop Chronicles.",
  },
];

/* ------------------------------------------------------------------ */
/* Accessors                                                          */
/* ------------------------------------------------------------------ */

/** Everything that should be shown somewhere (drops hidden products). */
export const visibleProducts = PRODUCTS.filter((p) => !p.hidden);

export function productsByType(type: ProductType): Product[] {
  return visibleProducts.filter((p) => p.type === type);
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug && !p.hidden);
}

/** Slugs that should get their own page on this site. */
export function pageProducts(): Product[] {
  return visibleProducts.filter((p) => p.hasPage);
}

/** The dropdown options for the contact form's topic field. */
export const contactTopics: string[] = [
  ...productsByType("mobile").map((p) => p.name),
  ...productsByType("game").map((p) => p.name),
  "One of the web apps",
  "Something else",
];
