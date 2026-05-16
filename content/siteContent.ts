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
  movementSystems: HomepageCard[];
  neoNoctis: {
    eyebrow: string;
    title: string;
    body: string;
    tags: string[];
    href: string;
  };
  offLedger: {
    eyebrow: string;
    title: string;
    body: string;
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

export const contentStorageKey = "glydeworld.siteContent.v2";

export const siteContent: SiteContent = {
  settings: {
    title: "G//LYDE WORLD",
    description:
      "A premium living portal for OVER//UNDER, GRAVSPORTS, and G//LYDE Grav Racing.",
    domain: "glydeworld.com",
    universeLabel: "OVER//UNDER",
    footerCopy:
      "G//LYDE WORLD is the first public portal into OVER//UNDER: a gravsports universe built for manga, anime, games, fashion, and interactive storytelling.",
    conceptArtNote:
      "Select visuals are concept development references for the evolving G//LYDE universe.",
  },
  seo: {
    title: "G//LYDE WORLD | The Peak of Gravsports",
    description:
      "Enter G//LYDE WORLD, a living gravsports universe of G-Suits, G-Boards, G-Rigs, Neo Noctis, Off Ledger runs, route rights, wagers, style, and speed.",
    ogTitle: "G//LYDE WORLD",
    ogDescription:
      "The world does not race on wheels anymore. Enter the living archive of G//LYDE Grav Racing, Neo Noctis, and the future of gravsports.",
    ogImage: "https://glydeworld.com/assets/ref-metroascent.jpg",
    twitterTitle: "G//LYDE WORLD",
    twitterDescription: "Gravsports made movement competitive. G//LYDE made it impossible to look away.",
    twitterImage: "https://glydeworld.com/assets/ref-night.jpg",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Gravsports", href: "/gravsports" },
    { label: "G//LYDE Racing", href: "/glyde-racing" },
    { label: "Neo Noctis", href: "/neo-noctis" },
    { label: "Characters", href: "/characters" },
    { label: "Archive", href: "/archive" },
    { label: "Circuits", href: "/circuits" },
    { label: "Factions", href: "/factions" },
    { label: "The Garage", href: "/garage" },
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
      alt: "Technical catalog visual used for G-Suits, G-Boards, and G-Rigs",
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
    "G-SUIT",
    "G-BOARD",
    "G-RIG",
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
        body: "Learn the sport, the city, and the systems before the Index starts pricing the riders.",
        href: "/gravsports",
        image: asset("ref-daylight.jpg"),
        tags: ["Gravsports", "G-Suit", "G-Board", "G-Rig"],
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
        body: "Submit a rider, crew, circuit, sponsor, machine, or story concept for curated review.",
        href: "/garage",
        image: asset("ref-catalog.jpg"),
        tags: ["The Garage", "Submissions", "Volume 0"],
      },
    ],
    movementSystems: [
      {
        eyebrow: "Body discipline",
        title: "G-Suit",
        body: "Body-based gravsport. Foot-thrust, glide soles, wallrides, contact pressure, and raw athletic movement. G-Suit owns the nerve.",
        href: "/gravsports",
        image: asset("ref-catalog.jpg"),
        tags: ["Foot-thrust", "Wallrides", "Nerve"],
      },
      {
        eyebrow: "Culture discipline",
        title: "G-Board",
        body: "The culture discipline. Style, Steez, tricks, Lost Lines, crowd impact, and route expression. G-Board owns the culture.",
        href: "/gravsports",
        image: asset("ref-night.jpg"),
        tags: ["Steez", "Lost Lines", "Crowd"],
      },
      {
        eyebrow: "Machine discipline",
        title: "G-Rig",
        body: "The machine discipline. Speeders, one-rider rigs, elite engineering, sponsor money, and high-speed prestige. G-Rig owns the money.",
        href: "/gravsports",
        image: asset("ref-daylight.jpg"),
        tags: ["Sector speed", "Sponsors", "Engineering"],
      },
    ],
    neoNoctis: {
      eyebrow: "Neo Noctis",
      title: "The city that made gravsports feel like nightlife.",
      body:
        "Neo Noctis is Eidolon's race-week capital, where off-world visitors, models, inventors, brand owners, Oddsmakers, riders, and sponsors come to watch, wager, party, and become part of the sport. Above, Neo Noctis sells glamour. Below, the Lowline sets the terms.",
      tags: ["Eidolon", "Lowline", "Gate 8", "The Rouxline"],
      href: "/neo-noctis",
    },
    offLedger: {
      eyebrow: "OFF LEDGER // First arc",
      title: "A private run pulls the Roux family into something bigger than the race.",
      body:
        "At The Rouxline, a chrome lounge above the Lowline, route rights are worth more than real estate. When Gate 8 is challenged by a Wager House, one private run turns family pressure into public leverage.",
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
      "gsync-click",
      "lowline-runs",
      "vey-terms",
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
        title: "Submit a Circuit",
        body: "Pitch a route, gate, city, planet, track, or Grand Cup host concept.",
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
    ],
    supportCta: {
      eyebrow: "Join the early signal",
      title: "Help make the world impossible to ignore.",
      body:
        "Back Volume 0, fund visual development, join updates, or enter The Garage with a concept worth pricing.",
      ctas: [
        { label: "Support Volume 0", href: "/support", kind: "primary" },
        { label: "Enter The Garage", href: "/garage", kind: "secondary" },
      ],
    },
    canonNotice:
      "Canon is curated. Submissions may inspire or be adapted into the archive, but do not guarantee inclusion, ownership, compensation, publication, or official status.",
  },
  pages: {
    home: {
      slug: "/",
      navLabel: "Home",
      seoTitle: "G//LYDE WORLD | The Peak of Gravsports",
      seoDescription:
        "Enter G//LYDE WORLD, a living gravsports universe of G-Suits, G-Boards, G-Rigs, Neo Noctis, Off Ledger runs, route rights, wagers, style, and speed.",
      hero: {
        eyebrow: "G//LYDE WORLD // A gravsports saga from the OVER//UNDER universe",
        title: "THE WORLD DOES NOT RACE ON WHEELS ANYMORE.",
        body:
          "Gravsports are the biggest sport in the known worlds. G//LYDE Grav Racing is the peak: where speed, style, route rights, wagers, and machine control collide. In Neo Noctis, one Off Ledger run can turn a local rider into a market event.",
        image: asset("ref-metroascent.jpg"),
        ctas: [
          { label: "Enter Neo Noctis", href: "/neo-noctis", kind: "primary" },
          { label: "Explore G//LYDE Racing", href: "/glyde-racing", kind: "secondary" },
          { label: "Read Off Ledger", href: "/archive", kind: "secondary" },
          { label: "Join the World", href: "/garage", kind: "support" },
        ],
      },
      blocks: [
        {
          kicker: "What is G//LYDE?",
          title: "GRAVSPORTS MADE MOVEMENT COMPETITIVE. G//LYDE MADE IT IMPOSSIBLE TO LOOK AWAY.",
          body:
            "G//LYDE Grav Racing is the peak of gravsports: a world of G-Suits, G-Boards, G-Rigs, official circuits, Lowline Runs, route rights, sponsor empires, and wagers that can change a rider's life in one night. Official racing has rules. Lowline racing has terms.",
          quote: "G//LYDE does not just reward talent. It prices it.",
        },
        {
          kicker: "Three movement systems",
          title: "THREE WAYS TO MOVE. ONE WAY TO BE REMEMBERED.",
          body:
            "G//LYDE is fought across body, board, and machine. Each discipline has its own culture, economy, and danger.",
          points: ["G-Suit: foot-thrust, wallrides, contact control.", "G-Board: Steez, Lost Lines, crowd impact.", "G-Rig: speed, sector dominance, engineering power."],
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
      navLabel: "Gravsports",
      seoTitle: "Gravsports | G//LYDE WORLD",
      seoDescription:
        "Gravsports are the biggest sport in the known worlds: G-Suits, G-Boards, G-Rigs, route rights, Lowline Runs, and Grand Cup events.",
      hero: {
        eyebrow: "Sports category",
        title: "GRAVSPORTS ARE THE BIGGEST SPORT IN THE KNOWN WORLDS.",
        body:
          "Competitions built around gravity systems, engineered movement, G-Suits, G-Boards, G-Rigs, anti-gravity tracks, route rights, and the constant question of who gets to be seen.",
        image: asset("ref-daylight.jpg"),
        ctas: [{ label: "Explore G//LYDE Racing", href: "/glyde-racing", kind: "primary" }],
      },
      blocks: [
        {
          kicker: "The ecosystem",
          title: "Local riders feed planetary qualifiers. Planetary qualifiers feed the Grand Cup.",
          body:
            "G-Suit racing, G-Board racing, G-Rig racing, trick showcases, endurance routes, team events, street runs, mixed-class exhibitions, Lowline Runs, and Grand Cup events all live under gravsports.",
          points: ["Thousands ride local.", "Hundreds qualify planetary.", "Twelve worlds host the Cup."],
        },
        {
          kicker: "Movement systems",
          title: "The leagues separate disciplines for fairness. The Lowline mixes them because fairness was never the point.",
          body:
            "G-Suit is body-based nerve. G-Board is culture, Steez, and remembered lines. G-Rig is money, engineering, sponsorship, and sector dominance.",
          quote: "G-Board owns the culture. G-Rig owns the money. G-Suit owns the nerve.",
        },
      ],
    },
    racing: {
      slug: "/glyde-racing",
      navLabel: "G//LYDE Racing",
      seoTitle: "G//LYDE Grav Racing | The Peak Discipline",
      seoDescription:
        "G//LYDE Grav Racing is the peak of gravsports, where route intelligence, G-Sync, Steez, sponsor money, and wager culture converge.",
      hero: {
        eyebrow: "Flagship sport",
        title: "G//LYDE GRAV RACING IS THE PEAK.",
        body:
          "Speed, style, G-Sync, route intelligence, sponsor money, wager culture, and machine control converge across official races, Lowline Runs, route rights, sanctioned zones, unsanctioned zones, and Grand Cup pressure.",
        image: asset("ref-night.jpg"),
        ctas: [{ label: "View Circuits", href: "/circuits", kind: "primary" }],
      },
      blocks: [
        {
          kicker: "Race logic",
          title: "Technique wins races. Steez changes how the world remembers them.",
          body:
            "Circuit races reward placement and time. G-Board adds Steez and route execution. G-Suit adds contact control and movement discipline. G-Rig adds sector dominance and machine performance. Trick showcases price originality. Lowline terms decide everything.",
          points: ["G-Sync", "The Click", "Resonance / G-Res", "Overdrive", "Steez", "Grand Cup"],
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
        "Neo Noctis is the first iconic G//LYDE setting: a coastal, vertical, luxurious city where gravsports became nightlife, status, and religion.",
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
            "Eidolon is the first planet. Neo Noctis is its nightlife and wager capital. The Overcity holds towers, official events, sponsors, luxury, and broadcast decks. The Lowline holds off-route races, Black Book terms, street culture, and hidden access.",
          points: ["Eidolon", "Neo Noctis", "The Overcity", "The Lowline", "The Rouxline", "Gate 8"],
        },
        {
          kicker: "The Rouxline",
          title: "The Rouxline was the lounge. Gate 8 was the reason people came.",
          body:
            "Uno Roux owns a chrome lounge, small nightclub, and private G//LYDE garage above the Lowline. The lounge is beautiful. Gate 8 is the real asset: private route access. In Neo Noctis, real estate was expensive. Access was priceless.",
        },
      ],
    },
    garage: {
      slug: "/garage",
      navLabel: "The Garage",
      seoTitle: "The Garage | G//LYDE Co-Creation Portal",
      seoDescription:
        "The Garage is the curated co-creation portal for riders, crews, sponsors, circuits, machines, and story concepts.",
      hero: {
        eyebrow: "Curated co-creation",
        title: "BUILD WHAT THE ARCHIVE MIGHT REMEMBER.",
        body:
          "G//LYDE is being built as a living universe. The Garage is where early supporters, writers, artists, riders, builders, and worldmakers can submit concepts for potential adaptation into the official archive.",
        image: asset("ref-catalog.jpg"),
        ctas: [{ label: "Submit a Rider", href: "#submission-paths", kind: "submission" }],
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
        title: "HELP MAKE THE WORLD IMPOSSIBLE TO IGNORE.",
        body:
          "G//LYDE WORLD is being built from the ground up as a future manga, game, anime, fashion, and interactive universe. Support helps fund visual development, archive entries, character illustrations, pitch materials, and Volume 0.",
        image: asset("ref-daylight.jpg"),
        ctas: [{ label: "Back Volume 0", href: "https://example.com/back-volume-0", kind: "payment" }],
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
        "Kellan Roux is a known local rider with flair, logic, and a fear of being ordinary. He wants the main circuit, the money, the status, and the kind of legacy that turns family pressure into generational freedom. But visibility is not freedom. It is exposure.",
      tags: ["POV", "Rouxline", "G-Board", "Off Ledger"],
      image: asset("ref-night.jpg"),
      archiveIds: ["kellan-rooftop", "off-ledger-run"],
    },
    {
      id: "gio-roux",
      name: "Gio Roux",
      role: "Older half-brother / route support",
      discipline: "G-Rig / independent movement",
      affiliation: "The Rouxline / independents / Lowline links",
      location: "Neo Noctis",
      status: "Canon",
      quote: "You keep chasing rooms. I keep looking for exits.",
      bio:
        "Five years older, smooth, funny, skeptical, and hard to own. Gio wants wealth, discovery, companionship, and freedom outside the systems that make riders visible.",
      tags: ["Rouxline", "G-Rig", "Lowline", "Family"],
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
      body: "Kellan counts the gates twice and the cameras once. He knows the run is not supposed to count. He knows that is why everyone who matters is watching.",
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
      title: "The Rouxline - Chrome Above the Lowline",
      category: "Route Files",
      source: "Archive Desk",
      location: "The Rouxline",
      excerpt: "The Rouxline was the lounge. Gate 8 was the reason people came.",
      body: "A chrome lounge, a small nightclub, a private garage, and a door into routes nobody can buy from the official map.",
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
      body: "Gate 8 is not a door. It is a claim, a route right, a private geometry, and the difference between running for fun and running for market value.",
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
      body: "Uno Roux's empire was not what it used to be. That did not mean it was gone. Some men own machines. Uno owned the path to them.",
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
      body: "Vey Sable prices the room before anyone else sees the table. That is why riders fear the smile more than the wager.",
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
      body: "Off Ledger does not mean without consequence. It means without protection. Once the clip escaped, Kellan Roux stopped being local and became a number someone could trade.",
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
      body: "The first version had no rider tag. The second had three. The third had a sponsor watermark nobody admitted placing.",
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
      body: "G-Sync is control. Resonance is when the Core answers back. The Click is the moment the rider stops operating the machine and starts being understood by it.",
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
      category: "Circuit Reports",
      source: "Archive Desk",
      location: "Neo Noctis // Lowline",
      excerpt: "Official racing has rules. Lowline racing has terms.",
      body: "Lowline Runs are unsanctioned, wager-driven, mixed-class routes below the official city image. The leagues separate disciplines for fairness. The Lowline mixes them because fairness was never the point.",
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
      body: "Route rights decide who can run, film, wager, sponsor, block, insure, tax, or disappear a path through the city. Visibility is class. Access is leverage.",
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
      type: "Official circuit",
      status: "Official",
      risk: "Medium",
      discipline: "G-Rig dominant",
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
      discipline: "G-Suit / G-Rig",
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
      type: "Official restricted circuit",
      status: "Official",
      risk: "High",
      discipline: "G-Rig",
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
      discipline: "G-Suit endurance",
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
      discipline: "G-Rig",
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
    { id: "zenith", name: "Zenith Aerodynamics", category: "G-Board / aero", tagline: "Control the line.", description: "Premium board and aero systems manufacturer.", link: "https://example.com" },
    { id: "voltex", name: "Voltex Motion", category: "G-Suit", tagline: "Nerve made visible.", description: "Athletic G-Suit systems for contact-heavy movement.", link: "https://example.com" },
    { id: "halo", name: "Halo Rig", category: "G-Rig", tagline: "Built above fear.", description: "High-end G-Rig frames and stabilizers.", link: "https://example.com" },
    { id: "axiom", name: "Axiom Performance", category: "Performance", tagline: "Speed, audited.", description: "Telemetry, race tuning, and Grand Cup infrastructure.", link: "https://example.com" },
    { id: "prism", name: "Prism Visual Engineering", category: "Broadcast tech", tagline: "Every angle sells.", description: "G//NET camera systems, overlays, and broadcast capture.", link: "https://example.com" },
    { id: "orochi", name: "Orochi Dynamics", category: "Prototype", tagline: "No line is final.", description: "Experimental G-Core behavior and banned prototypes.", link: "https://example.com" },
    { id: "echelon", name: "Echelon Coreworks", category: "G-Core", tagline: "The Core answers.", description: "G-Core research, certification, and performance drift labs.", link: "https://example.com" },
    { id: "blackline-gear", name: "Blackline Racing Gear", category: "Lowline equipment", tagline: "Terms accepted.", description: "Underground gear with official-deniable performance.", link: "https://example.com" },
    { id: "opacity", name: "Opacity Drive", category: "Stealth systems", tagline: "Seen when useful.", description: "Signal, livery, and route masking systems.", link: "https://example.com" },
    { id: "exline", name: "EX//LINE", category: "Route systems", tagline: "Access is architecture.", description: "Route mapping, gate telemetry, and access hardware.", link: "https://example.com" },
  ],
  sponsors: [
    { id: "solace", name: "Solace Energy", category: "Energy", tagline: "Power the visible.", description: "Official-facing energy sponsor with deep circuit interests.", link: "https://example.com" },
    { id: "crown-water", name: "Crown Water", category: "Luxury beverage", tagline: "Hydrate the winners.", description: "Hospitality and Grand Cup lounge sponsor.", link: "https://example.com" },
    { id: "neon-bureau", name: "Neon Bureau", category: "Fashion/media", tagline: "Wear the signal.", description: "Nightlife editorial sponsor and G//NET personality incubator.", link: "https://example.com" },
    { id: "morrow-bank", name: "Morrow Bank", category: "Finance", tagline: "Tomorrow has terms.", description: "Sponsor finance, contract banking, and rider valuation.", link: "https://example.com" },
    { id: "saint-glass", name: "Saint Glass", category: "Hospitality", tagline: "Above the route.", description: "High-status towers, lounges, and private viewing suites.", link: "https://example.com" },
    { id: "dove-circuit", name: "Dove Circuit", category: "Lifestyle", tagline: "Soft landing, hard launch.", description: "Wellness, beauty, and race-week recovery empire.", link: "https://example.com" },
    { id: "red-halo", name: "Red Halo", category: "Performance drink", tagline: "Pulse sells.", description: "Aggressive Lowline-adjacent sponsor with official ambitions.", link: "https://example.com" },
    { id: "auraline", name: "Auraline", category: "Audio", tagline: "Hear the Click.", description: "Sound systems, race audio, and G//NET clip identity.", link: "https://example.com" },
    { id: "house-argent", name: "House Argent", category: "Wager House", tagline: "Elegant terms.", description: "Placeholder Wager House, editable and intentionally not hard-locked.", link: "https://example.com" },
  ],
  garage: {
    title: "The Garage",
    intro:
      "G//LYDE is being built as a living universe. The Garage is where early supporters, writers, artists, riders, builders, and worldmakers can submit characters, crews, sponsors, circuits, machines, and story concepts for potential adaptation into the official archive.",
    prompt:
      "Bring a sharp idea with a clean hook: what pressure it adds, where it lives, who it changes, and why it belongs in a world where visibility is class.",
    paths: [
      { title: "Join the World", body: "Free signup, Discord interest, updates, and early access signals.", linkLabel: "Join the Early List", href: "https://example.com/early-list" },
      { title: "Submit a Rider", body: "Character concept, discipline, affiliation, quote, tags, and why they fit G//LYDE.", linkLabel: "Submit Rider", href: "https://example.com/submit-rider" },
      { title: "Submit a Crew", body: "Lowline crew, academy group, faction cell, sponsor squad, or route family.", linkLabel: "Submit Crew", href: "https://example.com/submit-crew" },
      { title: "Submit a Sponsor", body: "In-world brand, manufacturer, fashion label, media company, or Wager House.", linkLabel: "Submit Sponsor", href: "https://example.com/submit-sponsor" },
      { title: "Submit a Circuit", body: "City, route, gate, planet, Grand Cup host, or Lowline pressure point.", linkLabel: "Submit Circuit", href: "https://example.com/submit-circuit" },
      { title: "Submit a Story Entry", body: "Rider log, Off Ledger file, G//NET clip, Black Book note, or character scene.", linkLabel: "Submit Story", href: "https://example.com/submit-story" },
      { title: "Support / Pay", body: "Fund concept review, official-style files, illustrated cards, archive consideration, or Volume 0.", linkLabel: "Support", href: "https://example.com/pay/glydeworld" },
    ],
    canonNotice:
      "G//LYDE WORLD is a curated universe. Community submissions may inspire, influence, or be adapted into official archive entries, but submission does not guarantee inclusion, ownership, compensation, publication, or canon status. Accepted concepts may be edited, renamed, merged, expanded, or reinterpreted by the G//LYDE creative team to protect continuity and quality.",
    supportNotice:
      "Paid participation supports development, review, visual production, and worldbuilding. It does not guarantee canon inclusion unless explicitly agreed in writing.",
    submissionLinks: [
      { label: "Discord Invite", href: "https://example.com/discord", kind: "support" },
      { label: "Early List", href: "https://example.com/early-list", kind: "support" },
      { label: "Collaboration Form", href: "https://example.com/collab", kind: "submission" },
      { label: "Payment Link", href: "https://example.com/pay/glydeworld", kind: "payment" },
    ],
  },
  support: {
    title: "Support G//LYDE WORLD",
    intro:
      "A premium invitation to help fund visual development, archive entries, character illustrations, pitch materials, worldbuilding, and the first official Volume 0 release.",
    cards: [
      { title: "Join the Early List", body: "Get first signal when new archive drops, rider files, and Volume 0 updates go live.", linkLabel: "Join", href: "https://example.com/early-list" },
      { title: "Enter The Garage", body: "Submit a rider, crew, circuit, sponsor, machine, or story concept for curated review.", linkLabel: "Enter", href: "/garage" },
      { title: "Back Volume 0", body: "Help build the first official story package and pitch-ready world foundation.", linkLabel: "Back Volume 0", href: "https://example.com/back-volume-0" },
      { title: "Sponsor a Drop", body: "Support a future illustrated archive drop, character file, or circuit report.", linkLabel: "Sponsor", href: "https://example.com/sponsor-drop" },
      { title: "Fund an Illustration", body: "Contribute directly to concept and character visual development.", linkLabel: "Fund", href: "https://example.com/fund-illustration" },
      { title: "Collaborate", body: "Signal interest as an artist, writer, developer, producer, fashion partner, or sponsor.", linkLabel: "Collaborate", href: "https://example.com/collab" },
    ],
    paymentLinks: [
      { label: "Back Volume 0", href: "https://example.com/back-volume-0", kind: "payment" },
      { label: "Fund an Illustration", href: "https://example.com/fund-illustration", kind: "payment" },
      { label: "Sponsor a Drop", href: "https://example.com/sponsor-drop", kind: "payment" },
    ],
    supportNotice:
      "Paid participation supports development, review, visual production, and worldbuilding. It does not guarantee canon inclusion unless explicitly agreed in writing.",
  },
};
