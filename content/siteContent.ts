export type Cta = {
  label: string;
  href: string;
  kind: "primary" | "secondary" | "submission" | "payment" | "support";
};

export type ImageAsset = {
  id: string;
  title: string;
  url: string;
  alt: string;
  caption: string;
};

export type PageBlock = {
  kicker: string;
  title: string;
  body: string;
  points?: string[];
  quote?: string;
  ctas?: Cta[];
};

export type PageContent = {
  slug: string;
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    image: string;
    ctas: Cta[];
  };
  blocks: PageBlock[];
};

export type Character = {
  id: string;
  name: string;
  role: string;
  discipline: string;
  affiliation: string;
  location: string;
  status: string;
  quote: string;
  bio: string;
  tags: string[];
  image: string;
  archiveIds: string[];
};

export type ArchiveEntry = {
  id: string;
  title: string;
  category: string;
  source: string;
  location: string;
  excerpt: string;
  body: string;
  image: string;
  tags: string[];
  relatedCharacters: string[];
  relatedFactions: string[];
  status: "canon" | "draft" | "community submission" | "adapted";
  publishDate: string;
  seoTitle: string;
  seoDescription: string;
};

export type Circuit = {
  id: string;
  name: string;
  planet: string;
  region: string;
  type: string;
  status: string;
  risk: string;
  discipline: string;
  description: string;
  events: string[];
  image: string;
  tags: string[];
};

export type Faction = {
  id: string;
  name: string;
  role: string;
  agenda: string;
  description: string;
  image: string;
  tags: string[];
};

export type BrandEntity = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  link: string;
};

export type BrandSettings = {
  logoText: string;
  logoImageUrl: string;
  alternateLogoImageUrl: string;
  faviconUrl: string;
  markUrl: string;
  wordmarkUrl: string;
  lightLogoUrl: string;
  darkLogoUrl: string;
  footerLogoUrl: string;
  accentColor: string;
};

export type FooterLinkGroup = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

export type CodexTerm = {
  id: string;
  term: string;
  category: string;
  definition: string;
  fullDescription: string;
  whyItMatters: string;
  usage: string;
  tags: string[];
  relatedTerms: string[];
  relatedArchiveIds: string[];
  relatedCharacterIds: string[];
  relatedCircuitIds?: string[];
  image: string;
  featured?: boolean;
};

export type GCore = {
  id: string;
  name: string;
  color: string;
  affinity: string;
  riderType: string;
  strengths: string[];
  weakness: string;
  discipline: string;
  image: string;
  relatedRiders: string[];
  relatedMachines: string[];
};

export type GaragePath = {
  title: string;
  body: string;
  linkLabel: string;
  href: string;
};

export type HomepageCard = {
  title: string;
  eyebrow: string;
  body: string;
  href: string;
  image?: string;
  tags?: string[];
};

export type HomepageContent = {
  startHere: HomepageCard[];
  worldTeaser: {
    eyebrow: string;
    title: string;
    body: string;
    callouts: HomepageCard[];
  };
  movementSystems: HomepageCard[];
  neoNoctis: {
    eyebrow: string;
    title: string;
    body: string;
    tags: string[];
    href: string;
    subcards: HomepageCard[];
  };
  offLedger: {
    eyebrow: string;
    title: string;
    body: string;
    image: string;
    ctas: Cta[];
    href: string;
  };
  characterSpotlight: {
    characterId: string;
    eyebrow: string;
    title: string;
    body: string;
    microcopy: string;
    ctas: Cta[];
  };
  latestDropIds: string[];
  codexCards: HomepageCard[];
  garageCards: HomepageCard[];
  supportCta: {
    eyebrow: string;
    title: string;
    body: string;
    ctas: Cta[];
  };
  canonNotice: string;
};

export type SiteContent = {
  settings: {
    title: string;
    description: string;
    domain: string;
    universeLabel: string;
    footerCopy: string;
    conceptArtNote: string;
    copyrightText: string;
  };
  brand: BrandSettings;
  footer: {
    tagline: string;
    copy: string;
    columns: FooterLinkGroup[];
    socialLinks: Array<{ label: string; href: string }>;
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
  };
  nav: Array<{ label: string; href: string }>;
  ctas: Cta[];
  images: ImageAsset[];
  featureStrip: string[];
  homepage: HomepageContent;
  pages: Record<string, PageContent>;
  characters: Character[];
  archive: ArchiveEntry[];
  circuits: Circuit[];
  factions: Faction[];
  manufacturers: BrandEntity[];
  sponsors: BrandEntity[];
  codex: CodexTerm[];
  gCores: GCore[];
  garage: {
    title: string;
    intro: string;
    prompt: string;
    paths: GaragePath[];
    canonNotice: string;
    supportNotice: string;
    submissionLinks: Cta[];
  };
  support: {
    title: string;
    intro: string;
    cards: GaragePath[];
    paymentLinks: Cta[];
    supportNotice: string;
  };
};

const asset = (file: string) => `/assets/${file}`;

export const contentStorageKey = "glydeworld.siteContent.v4";

export const siteContent: SiteContent = {
  settings: {
    title: "G//LYDE WORLD",
    description:
      "A premium IP portal for G//LYDE GRAVITY, a gravboard racing saga from the OVER//UNDER universe.",
    domain: "glydeworld.com",
    universeLabel: "OVER//UNDER",
    footerCopy:
      "G//LYDE WORLD is the public portal for G//LYDE GRAVITY: character files, illustrated archive drops, route lore, visual development, and curated worldbuilding before Volume 0.",
    conceptArtNote:
      "Select visuals are concept development references for the evolving G//LYDE universe.",
    copyrightText: "© G//LYDE WORLD / OVER//UNDER.",
  },
  brand: {
    logoText: "G//LYDE",
    logoImageUrl: "",
    alternateLogoImageUrl: "",
    faviconUrl: "/favicon.ico",
    markUrl: "",
    wordmarkUrl: "",
    lightLogoUrl: "",
    darkLogoUrl: "",
    footerLogoUrl: "",
    accentColor: "#d4f23a",
  },
  footer: {
    tagline: "A gravboard saga from the OVER//UNDER universe.",
    copy:
      "The official portal for G//LYDE: character files, illustrated story drops, route lore, Codex entries, and curated worldbuilding before Volume 0.",
    columns: [
      {
        title: "World",
        links: [
          { label: "Home", href: "/" },
          { label: "G//LYDE", href: "/glyde-racing" },
          { label: "Neo Noctis", href: "/neo-noctis" },
          { label: "Off Ledger", href: "/off-ledger" },
        ],
      },
      {
        title: "Archive",
        links: [
          { label: "Characters", href: "/characters" },
          { label: "Archive", href: "/archive" },
          { label: "Codex", href: "/codex" },
          { label: "Boards & Gear", href: "/movement-systems" },
          { label: "Routes & Cities", href: "/routes-cities" },
          { label: "Factions", href: "/factions" },
          { label: "Machines", href: "/machines" },
        ],
      },
      {
        title: "Build",
        links: [
          { label: "GG / Garage", href: "/garage" },
          { label: "Submit a Concept", href: "/garage" },
          { label: "Support a Drop", href: "/support-a-drop" },
          { label: "Collaborate", href: "/collaborate" },
          { label: "Join Early List", href: "/join" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Discord", href: "/join" },
          { label: "Instagram", href: "/join" },
          { label: "X / Twitter", href: "/join" },
          { label: "Email / Contact", href: "mailto:hello@glydeworld.com" },
          { label: "Newsletter", href: "/join" },
        ],
      },
    ],
    socialLinks: [
      { label: "Discord", href: "/join" },
      { label: "Instagram", href: "/join" },
      { label: "X / Twitter", href: "/join" },
      { label: "Newsletter", href: "/join" },
    ],
  },
  seo: {
    title: "G//LYDE WORLD | A Gravboard Saga",
    description:
      "Enter G//LYDE WORLD, the public portal for a future-facing gravboard racing saga of riders, boards, Neo Noctis, Off Ledger files, route rights, wagers, style, and speed.",
    ogTitle: "G//LYDE WORLD",
    ogDescription:
      "The world does not race on wheels anymore. Enter the story archive of G//LYDE, Neo Noctis, and the future of gravboard culture.",
    ogImage: "https://glydeworld.com/assets/ref-metroascent.jpg",
    twitterTitle: "G//LYDE WORLD",
    twitterDescription: "Movement is status. Boards are identity. One impossible line can become a market event.",
    twitterImage: "https://glydeworld.com/assets/ref-night.jpg",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "G//LYDE", href: "/glyde-racing" },
    { label: "Neo Noctis", href: "/neo-noctis" },
    { label: "Characters", href: "/characters" },
    { label: "Archive", href: "/archive" },
    { label: "Codex", href: "/codex" },
    { label: "Routes & Cities", href: "/routes-cities" },
    { label: "Factions", href: "/factions" },
    { label: "GG", href: "/garage" },
    { label: "Support", href: "/support" },
  ],
  ctas: [
    { label: "Join the World", href: "/garage", kind: "primary" },
    { label: "Submit a Rider", href: "/garage", kind: "submission" },
    { label: "Read Off Ledger", href: "/archive", kind: "secondary" },
    { label: "Support Volume 0", href: "/support", kind: "payment" },
  ],
  images: [
    {
      id: "neo-noctis",
      title: "Neo Noctis",
      url: asset("ref-metroascent.jpg"),
      alt: "Chrome-lit city ascent used as Neo Noctis concept direction",
      caption: "Neo Noctis: coastal, vertical, luxurious, beautiful first, dangerous underneath.",
    },
    {
      id: "lowline",
      title: "Lowline Night",
      url: asset("ref-night.jpg"),
      alt: "Night racing atmosphere used as Lowline concept direction",
      caption: "Above, Neo Noctis sells glamour. Below, the Lowline sets the terms.",
    },
    {
      id: "gtech",
      title: "G-Tech Catalog",
      url: asset("ref-catalog.jpg"),
      alt: "Technical catalog visual used for G-Boards, rider gear, and board tuning",
      caption: "Style is mechanical.",
    },
    {
      id: "eidolon",
      title: "Eidolon Daylight",
      url: asset("ref-daylight.jpg"),
      alt: "Bright futuristic racing environment for Eidolon",
      caption: "The first planet is Eidolon. The first city is Neo Noctis.",
    },
  ],
  featureStrip: [
    "G-BOARD",
    "RIDERS",
    "ROUTES",
    "G//NET",
    "THE INDEX",
    "THE LEDGER",
    "THE BLACK BOOK",
    "GRAND CUP",
    "LOWLINE RUNS",
    "STE.EZ",
    "G-SYNC",
    "G-RES",
    "OVERDRIVE",
    "GATE 8",
    "NEO NOCTIS",
  ],
  homepage: {
    startHere: [
      {
        eyebrow: "01 // Onboard",
        title: "New to G//LYDE",
        body: "Learn the boards, riders, city, and route economy before the Index starts pricing the feed.",
        href: "/glyde-racing",
        image: asset("ref-daylight.jpg"),
        tags: ["Boards", "Riders", "Routes"],
      },
      {
        eyebrow: "02 // Story",
        title: "Read the Story",
        body: "Begin with OFF LEDGER and the Rouxline files, where one private run becomes public market pressure.",
        href: "/archive",
        image: asset("ref-night.jpg"),
        tags: ["OFF LEDGER", "The Rouxline", "Gate 8"],
      },
      {
        eyebrow: "03 // Co-create",
        title: "Build With Us",
        body: "Submit a rider, crew, route, sponsor, board, or story concept for curated review.",
        href: "/garage",
        image: asset("ref-catalog.jpg"),
        tags: ["GG", "Submissions", "Volume 0"],
      },
    ],
    worldTeaser: {
      eyebrow: "World teaser",
      title: "Gravboard culture made movement impossible to look away from.",
      body:
        "G//LYDE is where riders become celebrities, boards become status symbols, and route access can be worth more than real estate. Official leagues sell the dream. The Lowline writes the terms. G//NET turns one impossible clip into a career, a debt, or a target.",
      callouts: [
        {
          eyebrow: "Broadcast",
          title: "G//NET makes you visible.",
          body: "One clip can turn a local rider into a planet-wide argument before sunrise.",
          href: "/archive",
          tags: ["Clips", "Virality", "Pressure"],
        },
        {
          eyebrow: "Market",
          title: "The Index prices you.",
          body: "Talent becomes projection. Projection becomes leverage. Leverage becomes a contract.",
          href: "/factions",
          tags: ["Rankings", "Sponsors", "Value"],
        },
        {
          eyebrow: "Record",
          title: "The Ledger records you.",
          body: "Official wins, route rights, obligations, licenses, and the deals riders sign to survive.",
          href: "/factions",
          tags: ["Contracts", "Results", "Rights"],
        },
        {
          eyebrow: "Debt",
          title: "The Black Book remembers what you owe.",
          body: "Off Ledger never means free. It means the consequences belong to someone else.",
          href: "/archive",
          tags: ["Wagers", "Terms", "Lowline"],
        },
      ],
    },
    movementSystems: [
      {
        eyebrow: "Names in the feed",
        title: "Riders",
        body: "The names the world watches: athletes, style icons, wagers, celebrities, local legends, and future ghosts in the feed.",
        href: "/movement-systems",
        image: asset("ref-night.jpg"),
        tags: ["Style", "Status", "Risk"],
      },
      {
        eyebrow: "The icon",
        title: "G-Boards",
        body: "Tuned anti-gravity boards built for speed, control, route expression, and risk. The board is the public symbol of G//LYDE.",
        href: "/movement-systems",
        image: asset("ref-catalog.jpg"),
        tags: ["Control", "Steez", "Identity"],
      },
      {
        eyebrow: "Where reputations move",
        title: "Routes",
        body: "The city lines, gates, tracks, drops, rooftops, and Lowline paths where reputation is won, priced, or lost.",
        href: "/movement-systems",
        image: asset("ref-metroascent.jpg"),
        tags: ["Gates", "Lowline", "Price"],
      },
    ],
    neoNoctis: {
      eyebrow: "Neo Noctis",
      title: "The city that made board culture feel like nightlife.",
      body:
        "Neo Noctis is Eidolon's race-week capital, where off-world visitors, models, inventors, brand owners, Oddsmakers, riders, and sponsors come to watch, wager, party, and become part of the sport. Above, Neo Noctis sells glamour. Below, the Lowline sets the terms.",
      tags: ["Eidolon", "Lowline", "Gate 8", "The Rouxline"],
      href: "/neo-noctis",
      subcards: [
        {
          eyebrow: "Skyline",
          title: "The Overcity",
          body: "Broadcast decks, official events, sponsor towers, luxury suites, and the dream sold in perfect light.",
          href: "/neo-noctis",
          image: asset("ref-metroascent.jpg"),
          tags: ["Official", "Luxury", "Broadcast"],
        },
        {
          eyebrow: "Below",
          title: "The Lowline",
          body: "Off-route races, hidden access, Black Book terms, street crews, and people with nothing to lose.",
          href: "/neo-noctis",
          image: asset("ref-night.jpg"),
          tags: ["Terms", "Wagers", "Pressure"],
        },
        {
          eyebrow: "Roux owned",
          title: "The Rouxline",
          body: "Uno Roux's private lounge and rider house: part social room, part board room, part family territory.",
          href: "/archive",
          image: asset("ref-catalog.jpg"),
          tags: ["Lounge", "Garage", "Family"],
        },
        {
          eyebrow: "Route access",
          title: "Gate 8",
          body: "A valuable route access point close enough to start arguments without making the entire city revolve around it.",
          href: "/archive",
          image: asset("ref-daylight.jpg"),
          tags: ["Access", "Route rights", "Conflict"],
        },
      ],
    },
    offLedger: {
      eyebrow: "OFF LEDGER",
      title: "The first file from G//LYDE WORLD",
      body:
        "At The Rouxline, the party is only the surface. Below the polished rooms and private introductions, route access moves quietly through Neo Noctis. When a private run challenges the Roux family's position, the race is supposed to stay quiet. No broadcast. No record. No protection. Then the clip leaks. By morning, sponsors want the rider, Oddsmakers price the moment, manufacturers study the data, and Neo Noctis wants to know what the Roux family has been hiding.",
      image: asset("ref-night.jpg"),
      ctas: [
        { label: "Read Off Ledger", href: "/archive", kind: "primary" },
        { label: "Open Gate 8 File", href: "/archive", kind: "secondary" },
      ],
      href: "/archive",
    },
    characterSpotlight: {
      characterId: "kellan-roux",
      eyebrow: "Character spotlight",
      title: "Primary Lens / G-Board Talent / Neo Noctis",
      body:
        "Kellan Roux is a known local rider with flair, logic, and a fear of being ordinary. He wants the main circuit, the money, the status, and the kind of legacy that turns family pressure into generational freedom. But visibility is not freedom. It is exposure.",
      microcopy: "More perspectives are coming through The Archive.",
      ctas: [
        { label: "View Characters", href: "/characters", kind: "primary" },
        { label: "Read Kellan's First Log", href: "/archive", kind: "secondary" },
      ],
    },
    latestDropIds: [
      "kellan-rooftop",
      "rouxline-chrome",
      "gate-8",
      "off-ledger-run",
      "gsync-click",
      "lowline-runs",
    ],
    codexCards: [
      {
        eyebrow: "Core tech",
        title: "G-Core",
        body: "The power architecture behind controlled gravity, sync behavior, and forbidden prototype rumors.",
        href: "/g-core",
        tags: ["Machine", "Energy", "Risk"],
      },
      {
        eyebrow: "Control",
        title: "G-Sync",
        body: "The rider-machine connection that separates clean motion from expensive mistakes.",
        href: "/glyde-racing",
        tags: ["Control", "Telemetry", "Training"],
      },
      {
        eyebrow: "Moment",
        title: "The Click",
        body: "When control stops feeling like command and starts feeling like the Core answered back.",
        href: "/archive",
        tags: ["Resonance", "Instinct", "G-Res"],
      },
      {
        eyebrow: "Style value",
        title: "Steez",
        body: "Style judged as mechanical value: crowd reaction, route expression, originality, and nerve.",
        href: "/glyde-racing",
        tags: ["Culture", "Score", "Memory"],
      },
      {
        eyebrow: "Underground record",
        title: "The Black Book",
        body: "A shadow record of wagers, debts, off-Ledger terms, route claims, and consequences.",
        href: "/factions",
        tags: ["Debt", "Terms", "Lowline"],
      },
      {
        eyebrow: "Access economy",
        title: "Route Rights",
        body: "Control the route and you control who gets seen, who gets paid, and who gets owned.",
        href: "/archive",
        tags: ["Access", "Contracts", "Gate 8"],
      },
    ],
    garageCards: [
      {
        eyebrow: "Rider file",
        title: "Submit a Rider",
        body: "Create a racer, Handler, Oddsmaker, mechanic, G//NET personality, model, inventor, or sponsor figure.",
        href: "/garage",
        tags: ["Character", "Discipline", "Quote"],
      },
      {
        eyebrow: "Crew build",
        title: "Create a Crew",
        body: "Build a Lowline crew, academy team, private racing house, or sponsor-backed squad.",
        href: "/garage",
        tags: ["Lowline", "Academy", "House"],
      },
      {
        eyebrow: "Route pitch",
        title: "Submit a Route",
        body: "Pitch a city line, gate, district, track, planet, or Cup host concept.",
        href: "/garage",
        tags: ["Route", "Gate", "Planet"],
      },
      {
        eyebrow: "Back a drop",
        title: "Support a Drop",
        body: "Help fund character files, concept visuals, story entries, and Volume 0 development.",
        href: "/support",
        tags: ["Archive", "Visuals", "Volume 0"],
      },
      {
        eyebrow: "Brand file",
        title: "Submit a Sponsor",
        body: "Pitch a fashion house, Wager House, media brand, manufacturer, or performance label.",
        href: "/garage",
        tags: ["Brand", "Money", "Style"],
      },
      {
        eyebrow: "Archive pitch",
        title: "Submit a Story File",
        body: "Send a rider log, G//NET clip, Black Book note, route rumor, or scene fragment.",
        href: "/garage",
        tags: ["Story", "Lore", "Drop"],
      },
    ],
    supportCta: {
      eyebrow: "Before Volume 0",
      title: "Build with us before Volume 0 drops.",
      body:
        "G//LYDE WORLD is being developed through character files, illustrated drops, route lore, story entries, and curated community participation. Join early, support a drop, submit a concept, or collaborate on the world.",
      ctas: [
        { label: "Join The World", href: "/join", kind: "primary" },
        { label: "Support A Drop", href: "/support-a-drop", kind: "support" },
        { label: "Enter GG", href: "/garage", kind: "secondary" },
      ],
    },
    canonNotice:
      "Canon is curated. Submissions may inspire or be adapted into the archive, but do not guarantee inclusion, ownership, compensation, publication, or official status.",
  },
  pages: {
    home: {
      slug: "/",
      navLabel: "Home",
      seoTitle: "G//LYDE WORLD | A Gravboard Saga",
      seoDescription:
        "Enter G//LYDE WORLD, a story portal for riders, boards, Neo Noctis, Off Ledger files, route rights, wagers, style, and speed.",
      hero: {
        eyebrow: "G//LYDE WORLD // A gravboard saga from the OVER//UNDER universe",
        title: "THE WORLD DOES NOT RACE ON WHEELS ANYMORE.",
        body:
          "G//LYDE is a gravboard racing saga set in a future where movement is status, boards are identity, and one impossible line can turn a rider into a market event. In Neo Noctis, speed sells. Style is mechanical. Every route has a price.",
        image: asset("ref-metroascent.jpg"),
        ctas: [
          { label: "Enter Neo Noctis", href: "/neo-noctis", kind: "primary" },
          { label: "Read Off Ledger", href: "/archive", kind: "secondary" },
          { label: "Build in GG", href: "/garage", kind: "support" },
        ],
      },
      blocks: [
        {
          kicker: "What is G//LYDE?",
          title: "GRAVBOARD CULTURE MADE MOVEMENT IMPOSSIBLE TO LOOK AWAY FROM.",
          body:
            "G//LYDE is where riders become celebrities, boards become status symbols, and route access can be worth more than real estate. Official racing sells the dream. The Lowline writes the terms.",
          quote: "G//LYDE does not just reward talent. It prices it.",
        },
        {
          kicker: "Riders / Boards / Routes",
          title: "THE RIDER MAKES THE LINE. THE BOARD MAKES IT VISIBLE. THE ROUTE MAKES IT WORTH SOMETHING.",
          body:
            "Public-facing G//LYDE begins with boards: the icon, the risk, the style object, and the thing a city learns to price.",
          points: ["Riders: style, status, risk.", "G-Boards: speed, control, identity.", "Routes: gates, rooftops, Lowline terms."],
        },
        {
          kicker: "First story arc",
          title: "OFF LEDGER begins with Kellan Roux, The Rouxline, and Gate 8.",
          body:
            "Some runs are not supposed to count. Some runs change everything. It was supposed to stay off the Ledger. Then G//NET saw it.",
          ctas: [{ label: "Open The Archive", href: "/archive", kind: "secondary" }],
        },
      ],
    },
    gravsports: {
      slug: "/gravsports",
      navLabel: "Gravboard Culture",
      seoTitle: "G//LYDE Gravboard Culture | G//LYDE WORLD",
      seoDescription:
        "G//LYDE is the boards-first racing culture inside the wider G//LYDE GRAVITY branch of OVER//UNDER.",
      hero: {
        eyebrow: "Boards first",
        title: "G//LYDE BEGINS WITH THE BOARD.",
        body:
          "G//LYDE is the gravboard racing saga: riders, tuned anti-gravity boards, route rights, Lowline runs, sponsor pressure, and the constant question of who gets to be seen.",
        image: asset("ref-daylight.jpg"),
        ctas: [{ label: "Explore G//LYDE", href: "/glyde-racing", kind: "primary" }],
      },
      blocks: [
        {
          kicker: "The ecosystem",
          title: "The board is the public icon. The rider is the market event.",
          body:
            "G-Suits exist as rider gear for safety, control, interface, impact protection, and style. G-Rigs and other gravsport extensions exist in the wider world, but the public face of this story starts with G-Boards.",
          points: ["Riders build the name.", "Boards carry the identity.", "Routes set the price."],
        },
        {
          kicker: "Culture logic",
          title: "Official racing sells the dream. The Lowline writes the terms.",
          body:
            "A clean line can make a rider visible. A dangerous line can make them valuable. G//NET decides what the world remembers.",
          quote: "In Neo Noctis, speed sells. Style is mechanical. Every route has a price.",
        },
      ],
    },
    racing: {
      slug: "/glyde-racing",
      navLabel: "G//LYDE",
      seoTitle: "G//LYDE | Gravboard Racing Saga",
      seoDescription:
        "G//LYDE is a gravboard racing saga where route intelligence, G-Sync, Steez, sponsor pressure, and wager culture converge.",
      hero: {
        eyebrow: "Gravboard saga",
        title: "G//LYDE IS BOARDS, STATUS, AND IMPOSSIBLE LINES.",
        body:
          "Speed, style, G-Sync, route intelligence, sponsor money, wager culture, and board control converge across official events, Lowline runs, route rights, sanctioned zones, and unsanctioned pressure.",
        image: asset("ref-night.jpg"),
        ctas: [{ label: "View Routes & Cities", href: "/routes-cities", kind: "primary" }],
      },
      blocks: [
        {
          kicker: "Race logic",
          title: "Technique wins races. Steez changes how the world remembers them.",
          body:
            "Official board races reward placement, timing, route execution, and control. G//LYDE culture also remembers Steez: the line, the posture, the risk, the timing, and the moment a rider makes the city feel newly possible.",
          points: ["G-Sync", "The Click", "Resonance / G-Res", "Overdrive", "Steez", "Lowline Runs"],
        },
        {
          kicker: "Official vs Lowline",
          title: "Official racing has rules. Lowline racing has terms.",
          body:
            "Off Ledger does not mean without consequence. It means without protection. A contract can be a cage or a way out. Most riders do not know which until it closes.",
        },
      ],
    },
    neoNoctis: {
      slug: "/neo-noctis",
      navLabel: "Neo Noctis",
      seoTitle: "Neo Noctis | Eidolon's Nightlife Grav Racing Capital",
      seoDescription:
        "Neo Noctis is the first iconic G//LYDE setting: a coastal, vertical, luxurious city where board culture became nightlife, status, and wager pressure.",
      hero: {
        eyebrow: "Eidolon // First major city",
        title: "NEO NOCTIS SELLS GLAMOUR. THE LOWLINE SETS THE TERMS.",
        body:
          "Neo Noctis is the Miami / Vegas / Monaco of Eidolon: coastal, vertical, luxurious, party-driven, wager-heavy, beautiful first, dangerous underneath.",
        image: asset("ref-metroascent.jpg"),
        ctas: [{ label: "Read Off Ledger", href: "/archive", kind: "primary" }],
      },
      blocks: [
        {
          kicker: "The city stack",
          title: "The Overcity broadcasts the dream. The Lowline writes the debt.",
          body:
            "Eidolon is the first planet. Neo Noctis is its nightlife and wager capital. The Overcity holds towers, official events, sponsors, luxury, and broadcast decks. The Lowline holds off-route board runs, Black Book terms, street culture, and hidden access.",
          points: ["Eidolon", "Neo Noctis", "The Overcity", "The Lowline", "The Rouxline", "Gate 8"],
        },
        {
          kicker: "The Rouxline",
          title: "The Rouxline keeps the room warm and the doors selective.",
          body:
            "The Rouxline is Uno Roux's private lounge and rider house in Neo Noctis: part social room, part board room, part family territory. It sits close enough to the Lowline to hear the terms being written, and polished enough for sponsors to pretend they are only there for the view.",
        },
      ],
    },
    garage: {
      slug: "/garage",
      navLabel: "GG",
      seoTitle: "GG / G//LYDE Garage | Creator and Supporter Portal",
      seoDescription:
        "GG / G//LYDE Garage is the early-access creator and supporter portal for curated G//LYDE WORLD participation.",
      hero: {
        eyebrow: "GG // G//LYDE Garage",
        title: "ENTER THE WORLD BEFORE THE FIRST VOLUME DROPS.",
        body:
          "G//LYDE WORLD is being developed through character files, illustrated drops, route lore, story entries, and curated community participation. GG is the early-access portal for supporters, writers, artists, builders, brands, and worldmakers who want to help shape the edges before Volume 0.",
        image: asset("ref-catalog.jpg"),
        ctas: [
          { label: "Join The World", href: "/join", kind: "primary" },
          { label: "Support A Drop", href: "/support-a-drop", kind: "support" },
          { label: "Submit A Concept", href: "/garage", kind: "submission" },
        ],
      },
      blocks: [],
    },
    support: {
      slug: "/support",
      navLabel: "Support",
      seoTitle: "Support G//LYDE WORLD",
      seoDescription:
        "Support G//LYDE WORLD, back Volume 0, fund visual development, submit concepts, and join the early list.",
      hero: {
        eyebrow: "Early backer signal",
        title: "HELP BUILD THE WORLD BEFORE THE FIRST VOLUME DROPS.",
        body:
          "Support funds character files, visual development, archive entries, pitch materials, Volume 0, and the systems that let early creators help shape the edges of G//LYDE WORLD.",
        image: asset("ref-daylight.jpg"),
        ctas: [{ label: "Back Volume 0", href: "/support-a-drop", kind: "payment" }],
      },
      blocks: [],
    },
  },
  characters: [
    {
      id: "kellan-roux",
      name: "Kellan Roux",
      role: "Primary lens / local G-Board talent",
      discipline: "G-Board first, versatile across all",
      affiliation: "The Rouxline",
      location: "Neo Noctis",
      status: "Canon // OFF LEDGER",
      quote: "I don't need them to like me. I need them to remember.",
      bio:
        "Kellan Roux is a known local rider with flair, logic, and a fear of being ordinary. He wants the official board circuit, the money, the status, and the kind of legacy that turns family pressure into generational freedom. But visibility is not freedom. It is exposure.",
      tags: ["POV", "Rouxline", "G-Board", "Off Ledger"],
      image: asset("ref-night.jpg"),
      archiveIds: ["kellan-rooftop", "off-ledger-run"],
    },
    {
      id: "gio-roux",
      name: "Gio Roux",
      role: "Older half-brother / route support",
      discipline: "Route support / independent movement",
      affiliation: "The Rouxline / independents / Lowline links",
      location: "Neo Noctis",
      status: "Canon",
      quote: "You keep chasing rooms. I keep looking for exits.",
      bio:
        "Five years older, smooth, funny, skeptical, and hard to own. Gio wants wealth, discovery, companionship, and freedom outside the systems that make riders visible.",
      tags: ["Rouxline", "Routes", "Lowline", "Family"],
      image: asset("ref-daylight.jpg"),
      archiveIds: ["gate-8"],
    },
    {
      id: "uno-roux",
      name: "Uno Roux",
      role: "Former high-level Handler / owner of The Rouxline",
      discipline: "Access, route rights, private logistics",
      affiliation: "The Rouxline",
      location: "Neo Noctis",
      status: "Canon",
      quote: "I never owned the sport. I owned doors into it.",
      bio:
        "Still rich, stylish, connected, and rebuilding after betrayal. Uno's hidden asset may be the Noctis Key, old data, or a route secret even he does not fully understand.",
      tags: ["Handler", "Rouxline", "Gate 8", "Noctis Key"],
      image: asset("ref-catalog.jpg"),
      archiveIds: ["uno-handler", "rouxline-chrome"],
    },
    {
      id: "vey-sable",
      name: "Vey Sable",
      role: "Oddsmaker",
      discipline: "Terms, risk pricing, Black Book pressure",
      affiliation: "Wager House / Black Book-adjacent",
      location: "Neo Noctis",
      status: "Canon",
      quote: "I don't take lives. I take terms.",
      bio:
        "Cold, critical, flashy, surgical. Vey challenges Roux route rights on behalf of something bigger than one wager.",
      tags: ["Oddsmaker", "Black Book", "Wager House", "Antagonist Pressure"],
      image: asset("ref-metroascent.jpg"),
      archiveIds: ["vey-terms"],
    },
  ],
  archive: [
    {
      id: "kellan-rooftop",
      title: "Kellan Roux - Rooftop Before the Run",
      category: "Rider Logs",
      source: "Kellan Roux",
      location: "Neo Noctis // Rooftop service deck",
      excerpt: "The city looked expensive from above. That was the trick. From below, it looked hungry.",
      body:
        "Kellan counts the gates twice and the cameras once. He knows the run is not supposed to count. He knows that is why everyone who matters is watching.\n\nNeo Noctis glows below him like money pretending to be weather. The towers sell clean light. The Lowline throws it back broken, wet, and moving. Somewhere under the service deck, Gate 8 is waiting with its mouth shut.\n\nHe checks the board with his thumb, then checks the city with his eyes. The camera drones are not official. That makes them worse. Official cameras have angles, contracts, and names on the insurance. These have appetite.\n\nKellan does not need them to like him. He needs the line to survive the first replay. He needs the clip to look like a choice, not luck. If the run goes clean, someone upstairs will call it talent. If it goes wrong, someone below will call it terms.\n\nThe countdown never appears. Off Ledger runs do not ask permission from numbers. They begin when everyone in the room understands it is too late to leave.",
      image: asset("ref-night.jpg"),
      tags: ["Off Ledger", "Kellan", "Gate 8"],
      relatedCharacters: ["kellan-roux"],
      relatedFactions: ["gnet", "the-ledger"],
      status: "canon",
      publishDate: "2026-05-13",
      seoTitle: "Kellan Roux - Rooftop Before the Run",
      seoDescription: "A first OFF LEDGER rider log from Kellan Roux in Neo Noctis.",
    },
    {
      id: "rouxline-chrome",
      title: "THE ROUXLINE",
      category: "Route Files",
      source: "Archive Desk",
      location: "The Rouxline",
      excerpt: "A private room above the Lowline. A family name close to the sport's hidden economy.",
      body:
        "The Rouxline was never the largest room in Neo Noctis. That was part of its power. Large rooms belonged to sponsors. Small rooms belonged to people who knew which sponsor was lying.\n\nBy midnight, the lounge reflected everyone twice: once in chrome, once in glass. Riders came through with heat still in their jackets. Handlers came through smiling too early. Oddsmakers came alone.\n\nUno Roux kept the room warm, the doors selective, and the family close to the sport's hidden economy.\n\nThe public saw a lounge. The Lowline saw access.\n\nGate 8 was not advertised. It did not need to be.",
      image: asset("ref-catalog.jpg"),
      tags: ["Rouxline", "Gate 8", "Neo Noctis"],
      relatedCharacters: ["uno-roux", "kellan-roux"],
      relatedFactions: ["handlers"],
      status: "canon",
      publishDate: "2026-05-14",
      seoTitle: "The Rouxline - Chrome Above the Lowline",
      seoDescription: "The Rouxline is a lounge, garage, and route access asset in Neo Noctis.",
    },
    {
      id: "gate-8",
      title: "Gate 8 - The Price of Access",
      category: "Black Book Notes",
      source: "Redacted",
      location: "Neo Noctis // Lowline threshold",
      excerpt: "In Neo Noctis, real estate was expensive. Access was priceless.",
      body:
        "Gate 8 is not a door. It is a claim, a route right, a private geometry, and the difference between running for fun and running for market value.\n\nOfficial maps call it inactive. The Ledger calls it disputed. The Black Book calls it useful. None of those descriptions are wrong, which is why the argument keeps getting expensive.\n\nA gate controls more than entry. It controls timing, camera access, emergency exits, betting windows, sponsor sightlines, and who gets to say a run happened. In Neo Noctis, a route can be worth more than the building above it because the building only holds people. The route moves them.\n\nWhen Vey Sable asked about Gate 8, nobody heard a threat. That was the threat.",
      image: asset("ref-metroascent.jpg"),
      tags: ["Gate 8", "Route Rights", "Black Book"],
      relatedCharacters: ["gio-roux", "uno-roux"],
      relatedFactions: ["the-black-book"],
      status: "canon",
      publishDate: "2026-05-15",
      seoTitle: "Gate 8 - The Price of Access",
      seoDescription: "Gate 8 explains why access matters in Neo Noctis.",
    },
    {
      id: "uno-handler",
      title: "Uno Roux - The Handler Who Still Had Doors",
      category: "Character Entries",
      source: "The Index",
      location: "Neo Noctis",
      excerpt: "He smiled like every contract had already forgiven him.",
      body:
        "Uno Roux's empire was not what it used to be. That did not mean it was gone. Some men own machines. Uno owned the path to them.\n\nBefore The Rouxline, Uno handled riders who arrived with talent and left with contracts they did not understand. He knew which sponsor wanted a face, which manufacturer wanted telemetry, and which Wager House wanted a rider desperate enough to confuse ownership with rescue.\n\nThen the betrayal happened. The official record has cleaner language for it. Uno does not. He kept the lounge, some doors, a private garage, and enough old data to make powerful people polite.\n\nHis sons think he is rebuilding an empire. Uno knows better. He is rebuilding leverage.",
      image: asset("ref-catalog.jpg"),
      tags: ["Uno", "Handler", "Access"],
      relatedCharacters: ["uno-roux"],
      relatedFactions: ["handlers", "the-ledger"],
      status: "canon",
      publishDate: "2026-05-15",
      seoTitle: "Uno Roux - The Handler Who Still Had Doors",
      seoDescription: "A character archive file for Uno Roux.",
    },
    {
      id: "vey-terms",
      title: "Vey Sable - Oddsmaker Terms",
      category: "Wager Notes",
      source: "Black Book-adjacent",
      location: "Unknown booth // Neo Noctis",
      excerpt: "I don't take lives. I take terms.",
      body:
        "Vey Sable prices the room before anyone else sees the table. That is why riders fear the smile more than the wager.\n\nOddsmakers do not only calculate who wins. They calculate who can afford to lose, who needs to be seen, who is hiding damage, who is riding above their contract, and who will mistake applause for protection.\n\nVey dresses like the future already paid him. White gloves. Red detail. No wasted movement. He does not raise his voice because the terms do that for him.\n\nWhen he says he does not take lives, he is telling the truth. A life is messy. Terms are cleaner. Terms can outlive the rider.",
      image: asset("ref-metroascent.jpg"),
      tags: ["Vey Sable", "Oddsmaker", "Terms"],
      relatedCharacters: ["vey-sable"],
      relatedFactions: ["oddsmakers", "wager-houses"],
      status: "canon",
      publishDate: "2026-05-15",
      seoTitle: "Vey Sable - Oddsmaker Terms",
      seoDescription: "A Black Book note on Vey Sable.",
    },
    {
      id: "off-ledger-run",
      title: "Off Ledger - The Run That Shouldn't Have Counted",
      category: "Off Ledger Files",
      source: "G//NET scrape",
      location: "Gate 8 // Sector unknown",
      excerpt: "It was supposed to stay off the Ledger. Then G//NET saw it.",
      body:
        "Off Ledger does not mean without consequence. It means without protection. Once the clip escaped, Kellan Roux stopped being local and became a number someone could trade.\n\nThe run was supposed to stay private: no broadcast, no official timing, no sponsor watermark, no route admission. Just Gate 8, a challenge, and enough witnesses to make denial useful.\n\nThen G//NET saw it.\n\nBy morning, the clip had three cuts, five captions, and a market projection that made Kellan's name look heavier than it had the night before. Sponsors wanted a meeting. Manufacturers wanted the telemetry. Oddsmakers wanted the terms. Neo Noctis wanted to know what the Roux family had been hiding.\n\nSome runs are not supposed to count. Some runs change everything.",
      image: asset("ref-night.jpg"),
      tags: ["Off Ledger", "G//NET", "Kellan"],
      relatedCharacters: ["kellan-roux"],
      relatedFactions: ["gnet", "the-index"],
      status: "canon",
      publishDate: "2026-05-15",
      seoTitle: "Off Ledger - The Run That Shouldn't Have Counted",
      seoDescription: "The first OFF LEDGER story hook for G//LYDE WORLD.",
    },
    {
      id: "gnet-leak",
      title: "G//NET Leak - Corrupted Clip, Sector Unknown",
      category: "G//NET Clips",
      source: "G//NET mirror",
      location: "Sector unknown",
      excerpt: "The clip degraded every time it got reposted. The price kept going up.",
      body:
        "The first version had no rider tag. The second had three. The third had a sponsor watermark nobody admitted placing.\n\nG//NET does not behave like a channel. It behaves like weather with a memory. A clip leaks, mirrors, corrupts, recuts, gets scored by strangers, gets denied by sponsors, gets priced by The Index, and becomes more real every time someone insists it is not official.\n\nThe Sector Unknown file is damaged in four places. The board trail is clean in two. That contradiction is why the clip keeps moving.\n\nSomeone tried to bury the source. Someone else made sure the compression artifact looked like a signature.",
      image: asset("ref-night.jpg"),
      tags: ["G//NET", "Leak", "Visibility"],
      relatedCharacters: ["kellan-roux"],
      relatedFactions: ["gnet"],
      status: "draft",
      publishDate: "2026-05-15",
      seoTitle: "G//NET Leak - Corrupted Clip",
      seoDescription: "A G//NET-style archive entry for the OFF LEDGER arc.",
    },
    {
      id: "gsync-click",
      title: "G-Sync and The Click",
      category: "Visual Drops",
      source: "Technical archive",
      location: "G-Tech index",
      excerpt: "You can buy the machine. You cannot buy the Click.",
      body:
        "G-Sync is control. Resonance is when the Core answers back. The Click is the moment the rider stops operating the machine and starts being understood by it.\n\nTraining academies describe G-Sync as a measurable link between rider intent and grav system response. Manufacturers prefer that language because it sounds certifiable. Riders use shorter language: the machine listened.\n\nThe Click is not magic. That is what technicians say in public. In private, they admit there are moments when telemetry stops looking like command and starts looking like conversation.\n\nYou can buy the machine. You cannot buy the Click.",
      image: asset("ref-catalog.jpg"),
      tags: ["G-Sync", "The Click", "G-Core"],
      relatedCharacters: [],
      relatedFactions: ["manufacturers"],
      status: "canon",
      publishDate: "2026-05-15",
      seoTitle: "G-Sync and The Click",
      seoDescription: "A technical archive note on G-Sync and The Click.",
    },
    {
      id: "lowline-runs",
      title: "What Are Lowline Runs?",
      category: "Route File",
      source: "Archive Desk",
      location: "Neo Noctis // Lowline",
      excerpt: "Official racing has rules. Lowline racing has terms.",
      body:
        "Lowline Runs are unsanctioned, wager-driven routes below the official city image. The official sport sells categories, timing, safety, and clean exits. The Lowline sells terms.\n\nA sanctioned board race tells you the route, the rules, the timing window, and who can file a complaint. A Lowline Run tells you who enters, what counts, who pays, who films, what route is legal for the next six minutes, and what happens if the run exposes something valuable.\n\nThe Lowline is not chaos. It has structure. It just does not owe that structure to the official sport.",
      image: asset("ref-night.jpg"),
      tags: ["Lowline", "Runs", "Terms"],
      relatedCharacters: ["gio-roux"],
      relatedFactions: ["lowline-crews"],
      status: "canon",
      publishDate: "2026-05-15",
      seoTitle: "What Are Lowline Runs?",
      seoDescription: "A guide to Lowline Runs in G//LYDE WORLD.",
    },
    {
      id: "route-rights",
      title: "Why Route Rights Matter",
      category: "Sponsor Memos",
      source: "The Ledger",
      location: "Neo Noctis",
      excerpt: "Every route has a price.",
      body:
        "Route rights decide who can run, film, wager, sponsor, block, insure, tax, or disappear a path through the city. Visibility is class. Access is leverage.\n\nA route is not only pavement, airspace, rail gaps, tower drift, or Lowline geometry. A route is permission. It is camera placement. It is liability. It is crowd memory. It is the difference between a rider making a move and a market recognizing it.\n\nSponsors buy routes because routes create moments. Wager Houses pressure routes because routes create terms. Families protect routes because one door can keep an entire name alive.\n\nEvery route has a price. The smart money asks who pays it before the run begins.",
      image: asset("ref-metroascent.jpg"),
      tags: ["Route Rights", "Ledger", "Sponsors"],
      relatedCharacters: ["uno-roux", "vey-sable"],
      relatedFactions: ["the-ledger", "sponsors"],
      status: "canon",
      publishDate: "2026-05-15",
      seoTitle: "Why Route Rights Matter",
      seoDescription: "An archive memo explaining route rights in G//LYDE WORLD.",
    },
  ],
  circuits: [
    {
      id: "neo-noctis",
      name: "Neo Noctis",
      planet: "Eidolon",
      region: "Coastal vertical capital",
      type: "City / Grand Cup anchor",
      status: "Mixed",
      risk: "High glamour / hidden debt",
      discipline: "All classes",
      description:
        "The first iconic setting: official racing, Lowline terms, sponsor towers, private gates, wager culture, and night heat.",
      events: ["Neo Noctis Open", "OFF LEDGER // Gate 8"],
      image: asset("ref-metroascent.jpg"),
      tags: ["first city", "Eidolon", "Lowline"],
    },
    {
      id: "gate-8",
      name: "Gate 8",
      planet: "Eidolon",
      region: "The Rouxline",
      type: "Private route access",
      status: "Underground",
      risk: "Black Book attention",
      discipline: "Mixed",
      description:
        "The private access point tied to The Rouxline. Not the prettiest asset Uno owns. The most valuable.",
      events: ["The Run That Shouldn't Have Counted"],
      image: asset("ref-night.jpg"),
      tags: ["route rights", "Rouxline", "Off Ledger"],
    },
    {
      id: "solar-harbor",
      name: "Solar Harbor",
      planet: "Eidolon",
      region: "Coastal sponsor district",
      type: "Official board circuit",
      status: "Official",
      risk: "Medium",
      discipline: "Board route / sponsor district",
      description: "Luxury towers, sponsor yachts, open-air lanes, and summer-circuit politics.",
      events: ["Grand Cup Qualifier"],
      image: asset("ref-daylight.jpg"),
      tags: ["coastal", "sponsor", "Grand Cup"],
    },
    {
      id: "ashfall-run",
      name: "Ashfall Run",
      planet: "Eidolon",
      region: "Industrial interior",
      type: "Endurance route",
      status: "Mixed",
      risk: "Severe",
      discipline: "Board / mixed future expansion",
      description: "Heat distortion, collapsed highways, old factories, and bets nobody insures.",
      events: ["Ashfall Endurance"],
      image: asset("ref-catalog.jpg"),
      tags: ["endurance", "industrial", "wager"],
    },
    {
      id: "skyport-district",
      name: "Skyport District",
      planet: "Eidolon",
      region: "Orbital transit hub",
      type: "Official restricted board route",
      status: "Official",
      risk: "High",
      discipline: "Board route / future rig expansion",
      description: "Launch towers, cargo lanes, floating terminals, and high-risk overtakes.",
      events: ["Skyport Restricted"],
      image: asset("ref-daylight.jpg"),
      tags: ["orbital", "restricted", "speed"],
    },
    {
      id: "glacial-edge",
      name: "Glacial Edge",
      planet: "Off-world host",
      region: "Polar massif",
      type: "Grand Cup host",
      status: "Official",
      risk: "Severe",
      discipline: "Board endurance",
      description: "The most beautiful route in the calendar and the easiest to die on.",
      events: ["Grand Cup Host World"],
      image: asset("ref-daylight.jpg"),
      tags: ["off-world", "Grand Cup", "endurance"],
    },
    {
      id: "veilreach",
      name: "Veilreach",
      planet: "Classified",
      region: "Disputed",
      type: "Experimental route",
      status: "Rumored",
      risk: "Unknown",
      discipline: "Mixed",
      description: "Unstable gravity pockets, banned G-Core research, and route behavior The Index cannot price.",
      events: ["Redacted"],
      image: asset("ref-night.jpg"),
      tags: ["rumor", "experimental", "G-Core"],
    },
    {
      id: "orbital-9",
      name: "Orbital 9",
      planet: "Low orbit",
      region: "Suborbital belt",
      type: "Exhibition route",
      status: "Rumored",
      risk: "Unknown",
      discipline: "Board route / future rig expansion",
      description: "A whispered off-world exhibition course that appears in leaked images and vanishes before verification.",
      events: ["Orbital Exhibition"],
      image: asset("ref-night.jpg"),
      tags: ["off-world", "rumor", "exhibition"],
    },
  ],
  factions: [
    {
      id: "glyde-authority",
      name: "G//LYDE Authority",
      role: "Regulator",
      agenda: "Safety, sanctioned zones, equipment certification, licenses, investigations.",
      description: "Controls the official surface of the sport and insists the surface is the whole truth.",
      image: asset("ref-catalog.jpg"),
      tags: ["official", "licenses", "certification"],
    },
    {
      id: "grand-cup-committee",
      name: "Grand Cup Committee",
      role: "Championship control",
      agenda: "Twelve host worlds, annual championship calendar, prestige rights.",
      description: "The committee that turns planetary qualification into interplanetary myth.",
      image: asset("ref-daylight.jpg"),
      tags: ["Grand Cup", "host worlds", "prestige"],
    },
    {
      id: "gnet",
      name: "G//NET",
      role: "Broadcast / social racing network",
      agenda: "Make riders visible, monetize clips, move attention before anyone can regulate it.",
      description: "Decentralized, impossible to fully control, with corporate layers pretending they own the signal.",
      image: asset("ref-night.jpg"),
      tags: ["visibility", "clips", "broadcast"],
    },
    {
      id: "the-index",
      name: "The Index",
      role: "Analytics / market value",
      agenda: "Rankings, sponsor projections, rider profiles, scouting, price movement.",
      description: "The Index does not make riders famous. It makes fame legible to money.",
      image: asset("ref-catalog.jpg"),
      tags: ["analytics", "market", "sponsors"],
    },
    {
      id: "the-ledger",
      name: "The Ledger",
      role: "Official and shadow record",
      agenda: "Contracts, route rights, race results, obligations, consequences.",
      description: "If it counts, The Ledger records it. If it does not count, someone paid to keep it elsewhere.",
      image: asset("ref-metroascent.jpg"),
      tags: ["contracts", "route rights", "records"],
    },
    {
      id: "the-black-book",
      name: "The Black Book",
      role: "Underground memory",
      agenda: "Wagers, debts, off-Ledger terms, route claims, consequences.",
      description: "The book nobody admits reading until it already knows what they owe.",
      image: asset("ref-night.jpg"),
      tags: ["debts", "wagers", "terms"],
    },
    {
      id: "wager-houses",
      name: "Wager Houses",
      role: "Private betting institutions",
      agenda: "Operate between legal sport and underground obligation.",
      description: "They do not simply bet on the race. They shape what the race can cost.",
      image: asset("ref-metroascent.jpg"),
      tags: ["wagers", "houses", "risk"],
    },
    {
      id: "oddsmakers",
      name: "Oddsmakers",
      role: "Risk pricers",
      agenda: "Price races, riders, routes, terms, and impossible outcomes.",
      description: "An Oddsmaker can turn talent into a number, then turn the number into a trap.",
      image: asset("ref-catalog.jpg"),
      tags: ["Vey Sable", "risk", "terms"],
    },
    {
      id: "handlers",
      name: "Handlers",
      role: "Access logistics",
      agenda: "Meetings, route rights, sponsorships, private runs, quiet logistics.",
      description: "Handlers know the doors. The best ones know which doors should remain closed.",
      image: asset("ref-daylight.jpg"),
      tags: ["Uno Roux", "access", "deals"],
    },
    {
      id: "lowline-crews",
      name: "Lowline Crews",
      role: "Street teams / local cultures",
      agenda: "Routes, mechanics, territory, protection, reputation.",
      description: "The official sport harvests the Lowline. The Lowline remembers.",
      image: asset("ref-night.jpg"),
      tags: ["Lowline", "crews", "street"],
    },
  ],
  manufacturers: [
    { id: "zenith", name: "Zenith Aerodynamics", category: "G-Board / aero", tagline: "Control the line.", description: "Premium board and aero systems manufacturer.", link: "/submit-sponsor" },
    { id: "voltex", name: "Voltex Motion", category: "Rider gear", tagline: "Nerve made visible.", description: "Protective suit, board interface, and impact-control systems for riders.", link: "/submit-sponsor" },
    { id: "halo", name: "Halo Rig", category: "Future expansion", tagline: "Built above fear.", description: "Background gravsport engineering house for future rig and vehicle extensions.", link: "/submit-sponsor" },
    { id: "axiom", name: "Axiom Performance", category: "Performance", tagline: "Speed, audited.", description: "Telemetry, race tuning, and Grand Cup infrastructure.", link: "/submit-sponsor" },
    { id: "prism", name: "Prism Visual Engineering", category: "Broadcast tech", tagline: "Every angle sells.", description: "G//NET camera systems, overlays, and broadcast capture.", link: "/submit-sponsor" },
    { id: "orochi", name: "Orochi Dynamics", category: "Prototype", tagline: "No line is final.", description: "Experimental G-Core behavior and banned prototypes.", link: "/submit-machine" },
    { id: "echelon", name: "Echelon Coreworks", category: "G-Core", tagline: "The Core answers.", description: "G-Core research, certification, and performance drift labs.", link: "/submit-machine" },
    { id: "blackline-gear", name: "Blackline Racing Gear", category: "Lowline equipment", tagline: "Terms accepted.", description: "Underground gear with official-deniable performance.", link: "/submit-sponsor" },
    { id: "opacity", name: "Opacity Drive", category: "Stealth systems", tagline: "Seen when useful.", description: "Signal, livery, and route masking systems.", link: "/submit-machine" },
    { id: "exline", name: "EX//LINE", category: "Route systems", tagline: "Access is architecture.", description: "Route mapping, gate telemetry, and access hardware.", link: "/submit-circuit" },
  ],
  sponsors: [
    { id: "solace", name: "Solace Energy", category: "Energy", tagline: "Power the visible.", description: "Official-facing energy sponsor with deep circuit interests.", link: "/submit-sponsor" },
    { id: "crown-water", name: "Crown Water", category: "Luxury beverage", tagline: "Hydrate the winners.", description: "Hospitality and Grand Cup lounge sponsor.", link: "/submit-sponsor" },
    { id: "neon-bureau", name: "Neon Bureau", category: "Fashion/media", tagline: "Wear the signal.", description: "Nightlife editorial sponsor and G//NET personality incubator.", link: "/submit-sponsor" },
    { id: "morrow-bank", name: "Morrow Bank", category: "Finance", tagline: "Tomorrow has terms.", description: "Sponsor finance, contract banking, and rider valuation.", link: "/submit-sponsor" },
    { id: "saint-glass", name: "Saint Glass", category: "Hospitality", tagline: "Above the route.", description: "High-status towers, lounges, and private viewing suites.", link: "/submit-sponsor" },
    { id: "dove-circuit", name: "Dove Circuit", category: "Lifestyle", tagline: "Soft landing, hard launch.", description: "Wellness, beauty, and race-week recovery empire.", link: "/submit-sponsor" },
    { id: "red-halo", name: "Red Halo", category: "Performance drink", tagline: "Pulse sells.", description: "Aggressive Lowline-adjacent sponsor with official ambitions.", link: "/submit-sponsor" },
    { id: "auraline", name: "Auraline", category: "Audio", tagline: "Hear the Click.", description: "Sound systems, race audio, and G//NET clip identity.", link: "/submit-sponsor" },
    { id: "house-argent", name: "House Argent", category: "Wager House", tagline: "Elegant terms.", description: "Placeholder Wager House, editable and intentionally not hard-locked.", link: "/submit-sponsor" },
  ],
  codex: [
    {
      id: "over-under",
      term: "OVER//UNDER",
      category: "World",
      definition: "The wider IP universe that G//LYDE GRAVITY belongs to.",
      fullDescription: "OVER//UNDER is the umbrella world layer. G//LYDE does not explain the entire universe; it opens one branch through gravboard culture, Neo Noctis, and the first story files around OFF LEDGER.",
      whyItMatters: "It keeps the portal focused while leaving room for other worlds, branches, cities, and story lines to surface later.",
      usage: "G//LYDE WORLD is a gravboard saga from the OVER//UNDER universe.",
      tags: ["umbrella", "IP", "world layer"],
      relatedTerms: ["G//LYDE GRAVITY", "G//LYDE WORLD", "Volume 0"],
      relatedArchiveIds: ["off-ledger-run"],
      relatedCharacterIds: [],
      relatedCircuitIds: [],
      image: asset("ref-city.jpg"),
      featured: true,
    },
    {
      id: "glyde-gravity",
      term: "G//LYDE GRAVITY",
      category: "World",
      definition: "The franchise branch inside OVER//UNDER that holds G//LYDE, Neo Noctis, and the board-racing story world.",
      fullDescription: "G//LYDE GRAVITY is the lane where anti-gravity sport, route rights, style economies, G//NET feeds, and character files converge. It is built for story first, with archive drops and visual development shaping the world before Volume 0.",
      whyItMatters: "It gives the site a clear home: bigger than one race, smaller and sharper than the entire OVER//UNDER universe.",
      usage: "Archive files from G//LYDE GRAVITY usually begin with a route, a rider, or a clip somebody wanted buried.",
      tags: ["series branch", "story world", "gravity"],
      relatedTerms: ["OVER//UNDER", "G//LYDE WORLD", "G//LYDE"],
      relatedArchiveIds: ["off-ledger-run", "rouxline-chrome"],
      relatedCharacterIds: ["kellan-roux", "uno-roux"],
      relatedCircuitIds: ["neo-noctis"],
      image: asset("ref-metroascent.jpg"),
      featured: true,
    },
    {
      id: "glyde-world",
      term: "G//LYDE WORLD",
      category: "World",
      definition: "The public portal for character files, story drops, Codex entries, routes, and curated co-creation.",
      fullDescription: "G//LYDE WORLD is the doorway into the branch. It publishes the files that make the universe legible: journals, G//NET clips, visual drops, route lore, Codex records, and GG entry points for early supporters.",
      whyItMatters: "The site is where the current equivalent of chapters lives before Volume 0 becomes the next formal release.",
      usage: "Open G//LYDE WORLD when you need the story, the terms, and the route map in one place.",
      tags: ["portal", "archive", "GG"],
      relatedTerms: ["The Archive", "Volume 0", "GG"],
      relatedArchiveIds: ["kellan-rooftop", "gate-8"],
      relatedCharacterIds: ["kellan-roux", "gio-roux", "uno-roux", "vey-sable"],
      relatedCircuitIds: ["neo-noctis", "gate-8"],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "glyde",
      term: "G//LYDE",
      category: "Sport",
      definition: "A gravboard racing saga and culture where movement is status and boards are identity.",
      fullDescription: "G//LYDE is the public-facing sport culture inside this branch: riders, boards, routes, city clips, sponsors, wagers, and style that changes how a run is remembered. It is boards-first right now, with other gravsport extensions kept in the background.",
      whyItMatters: "It is the cleanest way into the dream: one rider, one board, one impossible line, one city watching.",
      usage: "G//LYDE made movement impossible to look away from.",
      tags: ["gravboard", "culture", "sport"],
      relatedTerms: ["G-Board", "Steez", "G//NET", "Route Rights"],
      relatedArchiveIds: ["kellan-rooftop", "off-ledger-run"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: ["neo-noctis"],
      image: asset("ref-night.jpg"),
      featured: true,
    },
    {
      id: "gravsports",
      term: "Gravsports",
      category: "Sport",
      definition: "The wider category of competitive movement built around controlled gravity.",
      fullDescription: "Gravsports includes official tracks, street runs, board culture, rider gear, future rig disciplines, showcases, and championship systems. G//LYDE is the branch currently in focus: the one Neo Noctis watches hardest.",
      whyItMatters: "It explains why the stakes are bigger than one local scene. G//LYDE sits inside a sport economy with institutions, sponsors, and world-scale attention.",
      usage: "Gravsports are the biggest spectacle in the known worlds.",
      tags: ["sport category", "competition", "gravity"],
      relatedTerms: ["G//LYDE", "Grand Cup", "Official Track", "Lowline Run"],
      relatedArchiveIds: ["lowline-runs"],
      relatedCharacterIds: ["kellan-roux", "gio-roux"],
      relatedCircuitIds: ["solar-harbor"],
      image: asset("ref-city.jpg"),
    },
    {
      id: "off-ledger",
      term: "OFF LEDGER",
      category: "World",
      definition: "The first story arc from G//LYDE WORLD.",
      fullDescription: "OFF LEDGER begins around a private run, a family position, and a clip that should never have moved through G//NET. It is not a whole-world explanation. It is the first pressure point.",
      whyItMatters: "It gives the audience a story hook: a route dispute becomes public, and a family starts being priced by forces bigger than the room.",
      usage: "No broadcast. No record. No protection. Then the clip leaks.",
      tags: ["first arc", "story file", "leak"],
      relatedTerms: ["The Rouxline", "Gate 8", "G//NET", "The Ledger"],
      relatedArchiveIds: ["off-ledger-run", "gate-8", "rouxline-chrome"],
      relatedCharacterIds: ["kellan-roux", "uno-roux", "vey-sable"],
      relatedCircuitIds: ["gate-8", "neo-noctis"],
      image: asset("ref-night.jpg"),
      featured: true,
    },
    {
      id: "volume-0",
      term: "Volume 0",
      category: "World",
      definition: "The planned first formal release point for the story-first G//LYDE universe.",
      fullDescription: "Volume 0 is the development target the portal points toward: character files, visual drops, serialized archive entries, pitch materials, and story systems becoming a sharper release package.",
      whyItMatters: "It gives support and participation a clear purpose without promising uncontrolled canon or finished media before it exists.",
      usage: "Build the world before Volume 0 drops.",
      tags: ["release", "development", "visual drops"],
      relatedTerms: ["G//LYDE WORLD", "GG", "The Archive"],
      relatedArchiveIds: ["off-ledger-run"],
      relatedCharacterIds: [],
      relatedCircuitIds: [],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "eidolon",
      term: "Eidolon",
      category: "World",
      definition: "The first planet introduced through G//LYDE WORLD.",
      fullDescription: "Eidolon is the first planetary home of the story. Neo Noctis is its opening city, but not the whole planet. The Codex treats Eidolon as a platform for future routes, cities, sponsors, and off-world comparison.",
      whyItMatters: "It keeps Neo Noctis iconic without making the whole universe feel trapped in one skyline.",
      usage: "Eidolon gets the first spotlight because Neo Noctis knows how to turn a race into weather.",
      tags: ["planet", "first setting", "world map"],
      relatedTerms: ["Neo Noctis", "Grand Cup", "Series"],
      relatedArchiveIds: ["rouxline-chrome", "lowline-runs"],
      relatedCharacterIds: ["kellan-roux", "gio-roux"],
      relatedCircuitIds: ["neo-noctis"],
      image: asset("ref-city.jpg"),
    },
    {
      id: "neo-noctis",
      term: "Neo Noctis",
      category: "Routes",
      definition: "Eidolon’s race-week capital where sport, nightlife, status, and wagers collide.",
      fullDescription: "Neo Noctis is coastal, vertical, chrome-lit, beautiful first, dangerous underneath. It is where riders become brands, sponsors pretend they are only watching, and Lowline terms move beneath the polished decks.",
      whyItMatters: "It is the first iconic setting: a city that can sell glamour upstairs while the real price gets written below.",
      usage: "In Neo Noctis, speed sells. Style is mechanical. Every route has a price.",
      tags: ["city", "Eidolon", "race week"],
      relatedTerms: ["The Lowline", "The Rouxline", "Gate 8", "Route Rights"],
      relatedArchiveIds: ["rouxline-chrome", "gate-8", "lowline-runs"],
      relatedCharacterIds: ["kellan-roux", "gio-roux", "uno-roux"],
      relatedCircuitIds: ["neo-noctis", "gate-8", "solar-harbor"],
      image: asset("ref-city.jpg"),
      featured: true,
    },
    {
      id: "the-lowline",
      term: "The Lowline",
      category: "Routes",
      definition: "The off-route layer where unofficial access, street terms, and hidden runs move.",
      fullDescription: "The Lowline is not just underground space. It is a pressure system: crews, private routes, Black Book memory, hidden access, and people who know the official sport needs them more than it admits.",
      whyItMatters: "The Lowline gives the world danger without making it ugly. It is where beauty becomes leverage.",
      usage: "Official racing sells the dream. The Lowline writes the terms.",
      tags: ["district", "terms", "street routes"],
      relatedTerms: ["Lowline Run", "The Black Book", "Route Rights"],
      relatedArchiveIds: ["lowline-runs", "gate-8"],
      relatedCharacterIds: ["gio-roux", "vey-sable"],
      relatedCircuitIds: ["neo-noctis", "gate-8"],
      image: asset("ref-metroascent.jpg"),
    },
    {
      id: "the-rouxline",
      term: "The Rouxline",
      category: "Culture",
      definition: "Uno Roux’s private lounge and rider house in Neo Noctis.",
      fullDescription: "The Rouxline is part social room, part board room, part family territory. It sits close enough to the Lowline to hear the terms being written, and polished enough for sponsors to pretend they are only there for the view.",
      whyItMatters: "It makes the Roux family legible as a social force, not just a racing family.",
      usage: "Uno keeps the room warm, the doors selective, and the family close to the sport’s hidden economy.",
      tags: ["Roux family", "lounge", "rider house"],
      relatedTerms: ["Uno Roux", "Gate 8", "The Lowline"],
      relatedArchiveIds: ["rouxline-chrome", "uno-handler"],
      relatedCharacterIds: ["uno-roux", "kellan-roux", "gio-roux"],
      relatedCircuitIds: ["neo-noctis", "gate-8"],
      image: asset("ref-night.jpg"),
    },
    {
      id: "gate-8",
      term: "Gate 8",
      category: "Routes",
      definition: "A valuable private route access point tied to early OFF LEDGER pressure.",
      fullDescription: "Gate 8 is useful because access has value in Neo Noctis. It can connect family territory, route memory, private introductions, Lowline pressure, and sponsor curiosity without carrying the whole premise by itself.",
      whyItMatters: "It shows how one piece of city access can become a family problem, a market signal, and a story file.",
      usage: "In Neo Noctis, real estate is expensive. Access is priceless.",
      tags: ["gate", "route access", "OFF LEDGER"],
      relatedTerms: ["Route Gate", "Route Rights", "The Rouxline"],
      relatedArchiveIds: ["gate-8", "off-ledger-run"],
      relatedCharacterIds: ["uno-roux", "vey-sable", "kellan-roux"],
      relatedCircuitIds: ["gate-8"],
      image: asset("ref-metroascent.jpg"),
      featured: true,
    },
    {
      id: "g-board",
      term: "G-Board",
      category: "Boards",
      definition: "The core sport object and visual icon of G//LYDE.",
      fullDescription: "A G-Board is a tuned anti-gravity board built for speed, control, route expression, and risk. Boards carry status, rider identity, sponsor signatures, illegal tweaks, and the kind of wear that tells a story before the rider speaks.",
      whyItMatters: "The board is the icon. It makes G//LYDE instantly readable from across a feed.",
      usage: "Boards are identity. One impossible line can turn a rider into a market event.",
      tags: ["board", "icon", "rider identity"],
      relatedTerms: ["G-Core", "Board Interface", "Steez", "Lost Line"],
      relatedArchiveIds: ["kellan-rooftop", "gsync-click"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: ["solar-harbor", "gate-8"],
      image: asset("ref-catalog.jpg"),
      featured: true,
    },
    {
      id: "g-core",
      term: "G-Core",
      category: "Boards",
      definition: "The power architecture behind controlled gravity, sync behavior, and prototype rumors.",
      fullDescription: "A G-Core converts engineered gravity into rider-responsive movement. Official cores are certified, measured, insured, and branded. Prototype cores sometimes drift into behavior the Authority does not like naming.",
      whyItMatters: "The Core decides what a board can survive, what a rider can feel, and what a sponsor can sell.",
      usage: "You can buy the machine. You cannot buy the Click.",
      tags: ["core", "energy", "board tech"],
      relatedTerms: ["G-Sync", "The Click", "Overdrive", "Board Interface"],
      relatedArchiveIds: ["gsync-click"],
      relatedCharacterIds: ["kellan-roux", "uno-roux"],
      relatedCircuitIds: [],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "g-suit",
      term: "G-Suit",
      category: "Gear",
      definition: "Rider gear for safety, control, board interface, impact protection, and style.",
      fullDescription: "A G-Suit is not the center of the public sport right now, but it shapes how a rider survives it. Suits manage impact, signal, board feel, heat, pressure, and the fashion language that makes a rider recognizable.",
      whyItMatters: "The suit makes speed wearable. It also turns safety into silhouette.",
      usage: "A clean suit can make a sponsor look twice. A damaged one can make G//NET replay the fall.",
      tags: ["gear", "safety", "style"],
      relatedTerms: ["Glide Soles", "Board Interface", "G-Sync"],
      relatedArchiveIds: ["gsync-click", "kellan-rooftop"],
      relatedCharacterIds: ["kellan-roux", "gio-roux"],
      relatedCircuitIds: [],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "glide-soles",
      term: "Glide Soles",
      category: "Gear",
      definition: "Suit-integrated sole systems that help riders catch surfaces, absorb impact, and recover movement.",
      fullDescription: "Glide Soles let riders survive the moments between board control and city surface. They matter in wall catches, emergency dismounts, route transfers, and the split second when style becomes self-preservation.",
      whyItMatters: "They keep rider movement physical. G//LYDE is not just floating. It is contact, recovery, and nerve.",
      usage: "A rider with dead soles does not lose style first. They lose options.",
      tags: ["suit tech", "impact", "movement"],
      relatedTerms: ["G-Suit", "Board Interface", "Lowline Run"],
      relatedArchiveIds: ["kellan-rooftop"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: ["gate-8"],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "board-interface",
      term: "Board Interface",
      category: "Boards",
      definition: "The physical and signal relationship between rider, suit, Core, and board.",
      fullDescription: "The board interface includes stance reads, suit signal, grip response, haptic feedback, Core behavior, and calibration history. Good interface makes control feel invisible. Bad interface makes every correction expensive.",
      whyItMatters: "It is where rider identity meets hardware. A board that does not read you can ruin you in public.",
      usage: "Kellan does not tune for comfort. He tunes for the moment the board stops asking.",
      tags: ["interface", "calibration", "control"],
      relatedTerms: ["G-Board", "G-Core", "G-Sync"],
      relatedArchiveIds: ["gsync-click"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: [],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "lost-line",
      term: "Lost Line",
      category: "Routes",
      definition: "A route expression or hidden path that falls outside the expected read.",
      fullDescription: "A Lost Line can be a forgotten city path, a risky angle through traffic architecture, or a movement choice nobody sees until the clip repeats. It is discovery under pressure.",
      whyItMatters: "Lost Lines make riders mythic. They turn geography into authorship.",
      usage: "The feed did not understand the line until the second replay.",
      tags: ["route", "discovery", "style"],
      relatedTerms: ["Steez", "Route Rights", "G//NET"],
      relatedArchiveIds: ["kellan-rooftop", "off-ledger-run"],
      relatedCharacterIds: ["kellan-roux", "gio-roux"],
      relatedCircuitIds: ["neo-noctis", "gate-8"],
      image: asset("ref-metroascent.jpg"),
    },
    {
      id: "steez",
      term: "Steez",
      category: "Culture",
      definition: "Style judged as mechanical value: route expression, originality, crowd heat, and nerve.",
      fullDescription: "Steez is not decoration. It changes how a run is remembered, replayed, sponsored, copied, and argued over by people who swear they only care about time.",
      whyItMatters: "Technique wins races. Steez changes how the world remembers them.",
      usage: "Style is mechanical.",
      tags: ["style", "memory", "score"],
      relatedTerms: ["G-Board", "Lost Line", "G//NET"],
      relatedArchiveIds: ["kellan-rooftop", "gsync-click"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: ["solar-harbor"],
      image: asset("ref-night.jpg"),
      featured: true,
    },
    {
      id: "gnet",
      term: "G//NET",
      category: "Signals",
      definition: "The broadcast, social, clip, and reputation layer that decides what the world remembers.",
      fullDescription: "G//NET is part network, part feed, part myth engine. It makes clean wins valuable, leaked clips dangerous, and rider identity portable. It is corporate enough to sell, decentralized enough to escape control.",
      whyItMatters: "Visibility is class in G//LYDE. G//NET is how local movement becomes public pressure.",
      usage: "G//NET turns one impossible clip into a career, a debt, or a target.",
      tags: ["broadcast", "visibility", "clips"],
      relatedTerms: ["The Index", "The Ledger", "Steez", "OFF LEDGER"],
      relatedArchiveIds: ["gnet-leak", "off-ledger-run"],
      relatedCharacterIds: ["kellan-roux", "vey-sable"],
      relatedCircuitIds: ["neo-noctis"],
      image: asset("ref-night.jpg"),
      featured: true,
    },
    {
      id: "the-index",
      term: "The Index",
      category: "Economy",
      definition: "The analytics layer that prices riders, clips, routes, sponsor heat, and market potential.",
      fullDescription: "The Index turns performance into forecast. It reads telemetry, attention, sponsor fit, injury risk, style velocity, and market movement. Riders hate it until it makes them expensive.",
      whyItMatters: "Talent is not enough. In G//LYDE, talent has to be priced before institutions move.",
      usage: "G//NET makes you visible. The Index prices you.",
      tags: ["analytics", "valuation", "market"],
      relatedTerms: ["G//NET", "The Ledger", "Wagers"],
      relatedArchiveIds: ["off-ledger-run", "vey-terms"],
      relatedCharacterIds: ["kellan-roux", "vey-sable"],
      relatedCircuitIds: [],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "the-ledger",
      term: "The Ledger",
      category: "Economy",
      definition: "The official and semi-official record of contracts, route rights, results, and obligations.",
      fullDescription: "The Ledger is where the respectable world writes down what it wants to count: contracts, access, sanctioning, obligations, wins, and consequences that can survive legal daylight.",
      whyItMatters: "If it reaches the Ledger, institutions can act on it. If it stays off, protection gets thin.",
      usage: "The Ledger records you.",
      tags: ["record", "contracts", "official"],
      relatedTerms: ["OFF LEDGER", "The Black Book", "Route Rights"],
      relatedArchiveIds: ["route-rights", "gate-8"],
      relatedCharacterIds: ["uno-roux", "vey-sable"],
      relatedCircuitIds: ["gate-8"],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "the-black-book",
      term: "The Black Book",
      category: "Economy",
      definition: "A shadow record of wagers, debts, off-Ledger terms, route claims, and consequences.",
      fullDescription: "The Black Book is not one object. It is a memory network for terms the official sport refuses to admit still move it. It keeps score where contracts become threats.",
      whyItMatters: "Official records protect winners. The Black Book remembers who paid for the chance.",
      usage: "The Black Book remembers what you owe.",
      tags: ["debt", "terms", "Lowline"],
      relatedTerms: ["The Ledger", "Wagers", "Lowline Run", "Oddsmakers"],
      relatedArchiveIds: ["gate-8", "vey-terms"],
      relatedCharacterIds: ["vey-sable", "gio-roux"],
      relatedCircuitIds: ["gate-8"],
      image: asset("ref-metroascent.jpg"),
      featured: true,
    },
    {
      id: "route-rights",
      term: "Route Rights",
      category: "Economy",
      definition: "Legal, private, or shadow claims over who can run, film, wager, insure, or block a route.",
      fullDescription: "Route rights turn geography into power. They can belong to leagues, cities, houses, families, sponsors, crews, or people who only own the right because everyone else is afraid to challenge them.",
      whyItMatters: "In Neo Noctis, access can be worth more than real estate because access decides who becomes visible.",
      usage: "Every route has a price.",
      tags: ["access", "contracts", "routes"],
      relatedTerms: ["Gate 8", "The Ledger", "Route Gate", "Wagers"],
      relatedArchiveIds: ["route-rights", "gate-8"],
      relatedCharacterIds: ["uno-roux", "vey-sable"],
      relatedCircuitIds: ["gate-8", "neo-noctis"],
      image: asset("ref-metroascent.jpg"),
      featured: true,
    },
    {
      id: "wagers",
      term: "Wagers",
      category: "Economy",
      definition: "Money, terms, favors, access, debt, or reputation placed against an outcome.",
      fullDescription: "Wagers are culture and control. Some are legal market activity. Some are Lowline terms with names attached. The difference matters most after someone loses.",
      whyItMatters: "Wagers turn performance into consequence. A rider can win a run and still owe the wrong person.",
      usage: "Official races have odds. Lowline runs have terms.",
      tags: ["betting", "terms", "risk"],
      relatedTerms: ["Oddsmakers", "The Black Book", "The Index"],
      relatedArchiveIds: ["vey-terms", "off-ledger-run"],
      relatedCharacterIds: ["vey-sable"],
      relatedCircuitIds: ["neo-noctis"],
      image: asset("ref-night.jpg"),
    },
    {
      id: "oddsmakers",
      term: "Oddsmakers",
      category: "Institutions",
      definition: "People who price risk, riders, routes, impossible outcomes, and the cost of pressure.",
      fullDescription: "Oddsmakers sit between sport, money, rumor, and consequence. The clean ones publish odds. The dangerous ones write terms that make a race feel like a contract.",
      whyItMatters: "They give the economy a face. Vey Sable is not just watching the race. He is measuring what it can take.",
      usage: "Vey does not take lives. He takes terms.",
      tags: ["risk", "pricing", "wager houses"],
      relatedTerms: ["Wagers", "The Index", "The Black Book"],
      relatedArchiveIds: ["vey-terms", "gate-8"],
      relatedCharacterIds: ["vey-sable"],
      relatedCircuitIds: ["gate-8"],
      image: asset("ref-night.jpg"),
    },
    {
      id: "handlers",
      term: "Handlers",
      category: "Institutions",
      definition: "People who arrange access, meetings, route rights, sponsor conversations, and quiet logistics.",
      fullDescription: "Handlers know doors. Some work in official sport. Some work near families, crews, sponsors, or houses. Good Handlers make impossible movement look polite.",
      whyItMatters: "Uno Roux matters because he once owned doors into the sport, and some of those doors may still remember him.",
      usage: "I never owned the sport. I owned doors into it.",
      tags: ["access", "logistics", "sponsors"],
      relatedTerms: ["The Rouxline", "Route Rights", "The Ledger"],
      relatedArchiveIds: ["uno-handler", "rouxline-chrome"],
      relatedCharacterIds: ["uno-roux"],
      relatedCircuitIds: ["neo-noctis"],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "grand-cup",
      term: "Grand Cup",
      category: "Sport",
      definition: "The elite interplanetary championship structure above local and planetary qualifiers.",
      fullDescription: "The Grand Cup is the official dream machine: host worlds, qualifiers, sponsor ladders, elite routes, and clean broadcast language. It sells the top of the sport as destiny.",
      whyItMatters: "It gives local riders a horizon. Most never reach it, but everyone understands what reaching it would mean.",
      usage: "Thousands ride local. Hundreds qualify planetary. Twelve worlds host the Cup.",
      tags: ["championship", "official", "worlds"],
      relatedTerms: ["Series", "Circuit", "Official Track", "Gravsports"],
      relatedArchiveIds: ["lowline-runs"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: ["solar-harbor"],
      image: asset("ref-city.jpg"),
    },
    {
      id: "lowline-run",
      term: "Lowline Run",
      category: "Routes",
      definition: "An unofficial or off-route race where the terms decide what counts.",
      fullDescription: "Lowline Runs can be private, social, dangerous, beautiful, predatory, or all of those at once. The route may matter less than the agreement around it.",
      whyItMatters: "They let the story move outside polished official systems without losing sport logic.",
      usage: "Official racing has rules. Lowline racing has terms.",
      tags: ["unofficial", "route", "terms"],
      relatedTerms: ["The Lowline", "The Black Book", "OFF LEDGER"],
      relatedArchiveIds: ["lowline-runs", "off-ledger-run"],
      relatedCharacterIds: ["kellan-roux", "gio-roux", "vey-sable"],
      relatedCircuitIds: ["gate-8", "neo-noctis"],
      image: asset("ref-metroascent.jpg"),
    },
    {
      id: "official-track",
      term: "Official Track",
      category: "Routes",
      definition: "A sanctioned competitive course with certified safety, scoring, broadcast, and equipment rules.",
      fullDescription: "Official Tracks let leagues sell spectacle as order. They have sector timing, crowd infrastructure, clean camera lanes, and enough rules to make sponsors comfortable.",
      whyItMatters: "They define the dream Kellan thinks he wants before Neo Noctis complicates what visibility costs.",
      usage: "Official racing sells the dream.",
      tags: ["sanctioned", "league", "track"],
      relatedTerms: ["Circuit", "Series", "Grand Cup"],
      relatedArchiveIds: ["lowline-runs"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: ["solar-harbor"],
      image: asset("ref-city.jpg"),
    },
    {
      id: "route-gate",
      term: "Route Gate",
      category: "Routes",
      definition: "An access point, checkpoint, or control threshold that changes who can enter a route.",
      fullDescription: "Route Gates can be physical infrastructure, permissions, signal locks, social doors, or private agreements. A gate is where route rights become visible.",
      whyItMatters: "Gate logic makes the city explorable. Every door implies who is allowed through and who pays to follow.",
      usage: "A gate is never only an entrance in Neo Noctis.",
      tags: ["access", "gate", "route"],
      relatedTerms: ["Gate 8", "Route Rights", "The Ledger"],
      relatedArchiveIds: ["gate-8", "route-rights"],
      relatedCharacterIds: ["uno-roux"],
      relatedCircuitIds: ["gate-8"],
      image: asset("ref-metroascent.jpg"),
    },
    {
      id: "circuit",
      term: "Circuit",
      category: "Routes",
      definition: "A designed race loop or course. A city can contain circuits, but a city is not a circuit.",
      fullDescription: "Circuits are specific competitive routes with names, sectors, risk, broadcast value, and records. They sit inside districts, cities, planets, and series structures.",
      whyItMatters: "Precise terms make the world feel real. Neo Noctis is a city. The Night Circuit is a circuit.",
      usage: "Do not call every location a circuit. The sport knows the difference.",
      tags: ["course", "track", "taxonomy"],
      relatedTerms: ["Official Track", "Series", "Route Gate"],
      relatedArchiveIds: ["lowline-runs"],
      relatedCharacterIds: [],
      relatedCircuitIds: ["solar-harbor"],
      image: asset("ref-city.jpg"),
    },
    {
      id: "series",
      term: "Series",
      category: "Sport",
      definition: "A structured set of races, hosts, points, qualifiers, and championship stakes.",
      fullDescription: "A Series turns individual races into a season. It gives sponsors a calendar, riders a ladder, and cities a reason to compete for attention.",
      whyItMatters: "It separates a single spectacle from a system that can build careers.",
      usage: "The Grand Cup is a Series before it is a crown.",
      tags: ["season", "competition", "championship"],
      relatedTerms: ["Grand Cup", "Circuit", "Official Track"],
      relatedArchiveIds: ["lowline-runs"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: ["solar-harbor"],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "the-click",
      term: "The Click",
      category: "Signals",
      definition: "The moment control stops feeling like command and starts feeling like the board answered back.",
      fullDescription: "Riders talk about The Click like a confession. It is not simply skill. It is the instant board, route, Core, nerve, and timing agree.",
      whyItMatters: "The Click makes a rider memorable. It also makes them expensive.",
      usage: "You cannot buy the Click.",
      tags: ["resonance", "instinct", "board feel"],
      relatedTerms: ["G-Sync", "G-Res", "G-Core"],
      relatedArchiveIds: ["gsync-click", "kellan-rooftop"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: ["gate-8"],
      image: asset("ref-night.jpg"),
    },
    {
      id: "g-sync",
      term: "G-Sync",
      category: "Signals",
      definition: "The rider-board connection that separates clean motion from expensive mistakes.",
      fullDescription: "G-Sync measures how cleanly a rider translates intent into gravity control. Training improves it. Fear interrupts it. Talent makes it look effortless until telemetry proves how rare it is.",
      whyItMatters: "Without G-Sync, speed becomes liability. With it, a rider becomes sponsor-readable.",
      usage: "G-Sync is control. Resonance is when the Core answers back.",
      tags: ["control", "telemetry", "training"],
      relatedTerms: ["The Click", "G-Res", "Board Interface"],
      relatedArchiveIds: ["gsync-click"],
      relatedCharacterIds: ["kellan-roux"],
      relatedCircuitIds: [],
      image: asset("ref-catalog.jpg"),
    },
    {
      id: "g-res",
      term: "G-Res",
      category: "Signals",
      definition: "Short for gravity resonance: the unstable feeling that the Core is answering more than commands.",
      fullDescription: "G-Res sits at the edge of performance language and rumor. Some teams treat it as measurable resonance. Lowline riders talk about it like the board knows when a route wants blood.",
      whyItMatters: "It gives the technology a mythic edge without removing the engineering logic.",
      usage: "Resonance is when the Core answers back.",
      tags: ["resonance", "G-Core", "signal"],
      relatedTerms: ["G-Core", "The Click", "G-Sync"],
      relatedArchiveIds: ["gsync-click", "gnet-leak"],
      relatedCharacterIds: ["kellan-roux", "uno-roux"],
      relatedCircuitIds: ["gate-8"],
      image: asset("ref-night.jpg"),
    },
    {
      id: "overdrive",
      term: "Overdrive",
      category: "Boards",
      definition: "A high-risk performance state that pushes board, Core, rider, and route beyond clean safety margins.",
      fullDescription: "Overdrive is not just going faster. It is a temporary escalation of board response, heat, sync demand, and failure risk. Official systems regulate it. Lowline systems negotiate with it.",
      whyItMatters: "It makes speed costly. Every spectacular burst needs a consequence waiting nearby.",
      usage: "Overdrive looks like freedom until the Core asks for payment.",
      tags: ["performance", "risk", "Core"],
      relatedTerms: ["G-Core", "G-Sync", "The Click"],
      relatedArchiveIds: ["gsync-click", "gnet-leak"],
      relatedCharacterIds: ["kellan-roux", "gio-roux"],
      relatedCircuitIds: ["gate-8", "solar-harbor"],
      image: asset("ref-catalog.jpg"),
    },
  ],
  gCores: [
    {
      id: "aurora-core",
      name: "Aurora Core",
      color: "Glass blue",
      affinity: "Control / clean resonance",
      riderType: "Precision riders and official board-circuit prospects",
      strengths: ["Stable G-Sync", "Clean route telemetry", "High certification rating"],
      weakness: "Overdrive ceiling is lower than outlaw cores.",
      discipline: "G-Board / rider gear",
      image: asset("ref-catalog.jpg"),
      relatedRiders: ["kellan-roux"],
      relatedMachines: ["G-Board", "Rider gear"],
    },
    {
      id: "redline-core",
      name: "Redline Core",
      color: "Signal red",
      affinity: "Burst speed / unstable sector dominance",
      riderType: "Lowline runners and future rig specialists with bad ideas",
      strengths: ["Explosive launch", "Sector speed", "Crowd heat"],
      weakness: "Heat drift and sync spikes can punish hesitation.",
      discipline: "Future rig expansion",
      image: asset("ref-night.jpg"),
      relatedRiders: ["gio-roux"],
      relatedMachines: ["Future rigs"],
    },
    {
      id: "noctis-core",
      name: "Noctis Key",
      color: "Black chrome",
      affinity: "Route memory / access anomalies",
      riderType: "Unknown",
      strengths: ["Hidden route recall", "Gate interaction rumors", "Index-resistant behavior"],
      weakness: "Uncertified, unpriced, and possibly not just a Core.",
      discipline: "Classified",
      image: asset("ref-metroascent.jpg"),
      relatedRiders: ["uno-roux"],
      relatedMachines: ["Gate systems"],
    },
  ],
  garage: {
    title: "GG / G//LYDE Garage",
    intro:
      "GG is the early-access creator and supporter portal for G//LYDE WORLD. Join the world, support drops, submit concepts for curated review, collaborate, and help build before Volume 0.",
    prompt:
      "Bring a sharp idea with a clean hook: what pressure it adds, where it lives, who it changes, and why it belongs in a world where visibility is class.",
    paths: [
      { title: "Join the World", body: "Free signup, Discord interest, updates, and early access signals.", linkLabel: "Join the Early List", href: "/join" },
      { title: "Submit a Rider", body: "Character concept, discipline, affiliation, quote, tags, and why they fit G//LYDE.", linkLabel: "Submit Rider", href: "/submit-rider" },
      { title: "Submit a Crew", body: "Lowline crew, academy group, faction cell, sponsor squad, or route family.", linkLabel: "Submit Crew", href: "/submit-crew" },
      { title: "Submit a Sponsor", body: "In-world brand, manufacturer, fashion label, media company, or Wager House.", linkLabel: "Submit Sponsor", href: "/submit-sponsor" },
      { title: "Submit a Route", body: "City, route, gate, planet, Cup host, or Lowline pressure point.", linkLabel: "Submit Route", href: "/submit-circuit" },
      { title: "Submit a Board", body: "G-Board, rider gear, G-Core, tuning house, prototype, or route technology concept.", linkLabel: "Submit Board", href: "/submit-machine" },
      { title: "Submit a Story Entry", body: "Rider log, Off Ledger file, G//NET clip, Black Book note, or character scene.", linkLabel: "Submit Story", href: "/submit-story" },
      { title: "Support a Drop", body: "Fund concept review, official-style files, illustrated cards, archive consideration, or Volume 0.", linkLabel: "Support", href: "/support-a-drop" },
    ],
    canonNotice:
      "G//LYDE WORLD is a curated universe. Community submissions may inspire, influence, or be adapted into official archive entries, but submission does not guarantee inclusion, ownership, compensation, publication, or canon status. Accepted concepts may be edited, renamed, merged, expanded, or reinterpreted by the G//LYDE creative team to protect continuity and quality.",
    supportNotice:
      "Paid participation supports development, review, visual production, and worldbuilding. It does not guarantee canon inclusion unless explicitly agreed in writing.",
    submissionLinks: [
      { label: "Join Early List", href: "/join", kind: "support" },
      { label: "Submit Rider", href: "/submit-rider", kind: "submission" },
      { label: "Submit Sponsor", href: "/submit-sponsor", kind: "submission" },
      { label: "Collaborate", href: "/collaborate", kind: "submission" },
    ],
  },
  support: {
    title: "Support G//LYDE WORLD",
    intro:
      "A premium invitation to help fund visual development, archive entries, character illustrations, pitch materials, worldbuilding, and the first official Volume 0 release.",
    cards: [
      { title: "Join the Early List", body: "Get first signal when new archive drops, rider files, and Volume 0 updates go live.", linkLabel: "Join", href: "/join" },
      { title: "Enter GG", body: "Submit a rider, crew, route, sponsor, board, or story concept for curated review.", linkLabel: "Enter", href: "/garage" },
      { title: "Back Volume 0", body: "Help build the first official story package and pitch-ready world foundation.", linkLabel: "Back Volume 0", href: "/support-a-drop" },
      { title: "Sponsor a Drop", body: "Support a future illustrated archive drop, character file, or circuit report.", linkLabel: "Sponsor", href: "/support-a-drop" },
      { title: "Fund an Illustration", body: "Contribute directly to concept and character visual development.", linkLabel: "Fund", href: "/support-a-drop" },
      { title: "Collaborate", body: "Signal interest as an artist, writer, developer, producer, fashion partner, or sponsor.", linkLabel: "Collaborate", href: "/collaborate" },
    ],
    paymentLinks: [
      { label: "Back Volume 0", href: "/support-a-drop", kind: "payment" },
      { label: "Fund an Illustration", href: "/support-a-drop", kind: "payment" },
      { label: "Sponsor a Drop", href: "/support-a-drop", kind: "payment" },
    ],
    supportNotice:
      "Paid participation supports development, review, visual production, and worldbuilding. It does not guarantee canon inclusion unless explicitly agreed in writing.",
  },
};
