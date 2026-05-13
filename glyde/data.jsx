// G//LYDE WORLD — central data store. Exported to window.

const ROUTES = [
  { id: "home", label: "Home", num: "00" },
  { id: "lore", label: "Lore", num: "01" },
  { id: "gravsport", label: "Gravsport", num: "02" },
  { id: "circuits", label: "Circuits", num: "03" },
  { id: "gcore", label: "G-Core", num: "04" },
  { id: "riders", label: "Riders", num: "05" },
  { id: "machines", label: "Machines", num: "06" },
  { id: "leagues", label: "Leagues", num: "07" },
  { id: "factions", label: "Factions", num: "08" },
  { id: "codex", label: "Codex", num: "09" },
];

const DISCIPLINES = [
  { id: "race", label: "Race", color: "var(--c-race)", line: "Compete across iconic districts." },
  { id: "steez", label: "Steez", color: "var(--c-steez)", line: "Style is points. Express your edge." },
  { id: "evolve", label: "Evolve", color: "var(--c-evolve)", line: "Your core. Your build. Your legacy." },
  { id: "wager", label: "Wager", color: "var(--c-wager)", line: "Risk it all. Win everything." },
  { id: "legends", label: "Legends", color: "var(--c-legends)", line: "Only a few will be remembered." },
];

// ---------------------------------------------------------------------
// The three competition categories — central to G//LYDE
// ---------------------------------------------------------------------
const CATEGORIES = [
  {
    id: "gsuit",
    name: "G-Suit",
    code: "CAT-01",
    tag: "Foot-Glide Racing",
    tagline: "Thrust. Slide. Wallride. Survive.",
    accent: "var(--ion)",
    short: "Powered glide suits with foot thrusters and gravity distortion tech.",
    body: "Foot-glide racing. Racers wear powered glide suits with foot thrusters and gravity distortion tech. Wallrides, rail grinds, vertical slides, mid-air thrust transfers. It feels like futuristic roller skating, parkour, and motorsport in a single discipline. This is the most athletic and expressive version of the sport — and the hardest to fake.",
    line: "The body becomes the machine.",
    stats: { Speed: 70, Agility: 96, Air: 88, Contact: 42, Style: 90, Endurance: 78, Sync: 86, Risk: 80 },
    examples: "HALO MK-IV · VOLTEX BLADE · OPACITY GHOSTSUIT",
    image: "assets/ref-metroascent.jpg",
  },
  {
    id: "gravboard",
    name: "Gravboard",
    code: "CAT-02",
    tag: "Iconic Street Machine",
    tagline: "Style-heavy. Trick-heavy. Culture-defining.",
    accent: "var(--acid)",
    short: "The sleek hoverboard. In official races, paired with a G-Suit for control and air.",
    body: "The iconic street machine. Sleek gravboards rode by sprinters, tricksters, and ghosts. In official or formal races, riders still wear G-Suits for safety, control, and additional thrust. Gravboard racing is style-heavy, trick-heavy, street-famous, and culture-defining — the entry point that put G//LYDE on flags, jackets, and stadium screens.",
    line: "Boards made it famous.",
    stats: { Speed: 76, Agility: 88, Air: 74, Contact: 56, Style: 96, Endurance: 60, Sync: 80, Risk: 70 },
    examples: "ZENITH SR-9 · PHANTOM FRAME · ECHO-01",
    image: "assets/ref-night.jpg",
  },
  {
    id: "grig",
    name: "G-Rig",
    code: "CAT-03",
    tag: "One-Rider Grav Machines",
    tagline: "Built for speed, contact, and elite circuit war.",
    accent: "var(--crimson)",
    short: "Larger one-rider craft — speeder-bike grav vehicles with airborne glide.",
    body: "Larger one-rider machines: sleek speeder-bike grav vehicles with airborne glide ability, brutal acceleration, and aggressive race applications. G-Rigs are used in elite circuits, long-distance routes, high-speed duels, and more dangerous professional events. The most expensive entry into the sport — and the only category where engineering can outrun talent.",
    line: "Rigs made it war.",
    stats: { Speed: 96, Agility: 70, Air: 78, Contact: 84, Style: 72, Endurance: 88, Sync: 70, Risk: 86 },
    examples: "AEGIS-V · HAVOC MKII · MERIDIAN-LX",
    image: "assets/ref-daylight.jpg",
  },
];

// ---------------------------------------------------------------------
// CIRCUITS — locations across the planet (+ rumored off-world)
// ---------------------------------------------------------------------
const CIRCUITS = [
  {
    id: "overcity",
    name: "The Overcity Metro Core",
    code: "CR-001",
    region: "Vertical Megastructure · 35.6°N",
    tag: "FLAGSHIP CIRCUIT",
    status: "OFFICIAL · LIVE",
    accent: "var(--nova)",
    palette: ["#2e8bff", "#46e6d4", "#b975ff"],
    short: "Flagship vertical circuit. LED towers, skyways, wallrides, transit gaps, dense audience coverage.",
    body: "The most iconic course in the sport. A vertical race carved across LED towers, private skyways, broken transit lines, and corporate circuit platforms. Cameras everywhere. Audience saturation is total. Every line in the Overcity is a televised line.",
    line: "Where the sport became a religion.",
    image: "assets/ref-daylight.jpg",
    layered: true,
    stats: { Length: "12.4 km", Vertical: "+1,720 m", Drone: "FULL", Wager: "Crown-Only" },
    layers: ["The Crown", "The Midline", "The Lowline", "The Under"],
  },
  {
    id: "solar-harbor",
    name: "Solar Harbor",
    code: "CR-002",
    region: "Coastal Megacity · 21.3°N",
    tag: "ELITE SUMMER",
    status: "OFFICIAL · SEASONAL",
    accent: "var(--sol)",
    palette: ["#ffb547", "#46e6d4", "#fdfaee"],
    short: "Coastal megacity. Bright water, luxury towers, open-air speed lanes, sponsor yachts, summer culture.",
    body: "The Crown's favorite holiday. A bright coastal megacity wraps the harbor in luxury towers, open-air speed lanes, and sponsor yachts moored beneath the start gate. The summer leg of the Grand Cup runs here. Wealth above. Currents below.",
    line: "Wealth above. Currents below.",
    image: "assets/ref-daylight.jpg",
    stats: { Length: "8.6 km", Vertical: "+220 m", Drone: "FULL", Wager: "Restricted" },
  },
  {
    id: "ashfall",
    name: "Ashfall Run",
    code: "CR-003",
    region: "Continental Interior · Restricted",
    tag: "ENDURANCE · ILLEGAL",
    status: "UNSANCTIONED",
    accent: "var(--crimson)",
    palette: ["#ff3a3a", "#ffb547", "#3a2820"],
    short: "Desert industrial route. Collapsed highways, heat distortion, abandoned factories, illegal wagers.",
    body: "Collapsed highways carve through abandoned factories under a black sky. Heat distortion erases lines mid-race. Endurance and dehydration matter as much as throttle. The Crown does not televise Ashfall. The Brokers televise everything.",
    line: "Forgotten routes. Hidden truths.",
    image: "assets/ref-metroascent.jpg",
    stats: { Length: "44 km", Vertical: "-80 m", Drone: "NONE", Wager: "Open" },
  },
  {
    id: "skyport",
    name: "Skyport District",
    code: "CR-004",
    region: "Orbital Transit Hub · 0°N",
    tag: "AIRPORT · ORBITAL TRANSIT",
    status: "OFFICIAL · RESTRICTED",
    accent: "var(--ion)",
    palette: ["#46e6d4", "#2e8bff", "#fdfaee"],
    short: "Launch towers, cargo lanes, floating terminals, speed restrictions, high-risk overtakes.",
    body: "The world's busiest sky meets the world's most disciplined race. Launch towers, cargo lanes, floating terminals. Riders thread their lines between scheduled departures. The race never closes the airspace. The airspace closes the race.",
    line: "Speed is status. Elevation is power.",
    image: "assets/ref-night.jpg",
    stats: { Length: "18.2 km", Vertical: "+440 m", Drone: "REGULATED", Wager: "Crown" },
  },
  {
    id: "glacial",
    name: "Glacial Edge",
    code: "CR-005",
    region: "Polar Massif · 78.9°N",
    tag: "PRESTIGE · ENDURANCE",
    status: "OFFICIAL · LIVE",
    accent: "#bfe9ff",
    palette: ["#bfe9ff", "#fdfaee", "#46e6d4"],
    short: "Frozen high-altitude course. Low traction, high speed, brutal weather, prestige endurance.",
    body: "The most beautiful course in the calendar and the easiest to die on. Low traction over impossible speed. Wind shears that punish hesitation. Prestige is the only currency Glacial Edge respects.",
    line: "Beauty is lethal. Drip is survival.",
    image: "assets/ref-daylight.jpg",
    stats: { Length: "22.4 km", Vertical: "+960 m", Drone: "PARTIAL", Wager: "Invitational" },
  },
  {
    id: "veilreach",
    name: "Veilreach",
    code: "CR-006",
    region: "Classified · Disputed",
    tag: "EXPERIMENTAL · REDACTED",
    status: "UNVERIFIED",
    accent: "var(--rift)",
    palette: ["#b975ff", "#ff4dc4", "#2a2c30"],
    short: "Unstable gravity pockets, banned G-Core research, strange route behavior.",
    body: "An experimental circuit that should not be possible. Local gravity pockets shift mid-route. Veteran riders report sections of track that other riders cannot see. Veilreach exists in the Worldwide Circuit calendar inside a folder marked READ-ONLY.",
    line: "What the city forgot.",
    image: "assets/ref-night.jpg",
    mystery: true,
    stats: { Length: "??.? km", Vertical: "??", Drone: "FAILS", Wager: "Banned" },
  },
  {
    id: "orbital-9",
    name: "Orbital 9",
    code: "CR-007",
    region: "Low Orbit · Suborbital Belt",
    tag: "RUMOR · OFF-WORLD",
    status: "UNCONFIRMED",
    accent: "var(--bone)",
    palette: ["#fdfaee", "#46e6d4", "#b975ff"],
    short: "Rumored off-world exhibition circuit. Not fully confirmed.",
    body: "The first whispered off-world course. A low-orbit exhibition track. Photos surface every other season and disappear by the next. The Open Grav League refuses to comment. Brokers in Ashfall already take bets on the inaugural roster.",
    line: "The first off-world circuit is only a rumor. For now.",
    image: "assets/ref-night.jpg",
    rumor: true,
    stats: { Length: "?? km", Vertical: "ORBITAL", Drone: "STATIC", Wager: "Rumor" },
  },
];

// ---------------------------------------------------------------------
// LEAGUES
// ---------------------------------------------------------------------
const LEAGUES = [
  {
    id: "grand-cup", name: "The Grand Cup", code: "LG-01", accent: "var(--sol)",
    tier: "PREMIER CHAMPIONSHIP",
    short: "The premier official championship series. Year-long. Worldwide.",
    body: "The flagship championship of G//LYDE. A year-long calendar of marquee circuits across the world, ending in a televised final on the Overcity skyline. The Grand Cup crowns the sport. Sponsors fight harder for it than riders do.",
    sponsor: "AXIOM PERFORMANCE · ZENITH",
    rounds: 11,
    rule: "All categories permitted. G-Rig dominant.",
  },
  {
    id: "crown", name: "Crown Circuit", code: "LG-02", accent: "var(--bone)",
    tier: "ELITE SPONSORED",
    short: "Elite sponsored professional circuit. Polished. Prestigious. Engineered.",
    body: "The official elite league. Polished, prestigious, beautiful, and corrupt. This is where sponsors, media, celebrities, corporate heirs, and manufactured champions live.",
    sponsor: "SOLACE ENERGY · PRISM VISUAL",
    rounds: 9,
    rule: "Licensed riders only. Equipment audited.",
  },
  {
    id: "lowline", name: "Lowline Runs", code: "LG-03", accent: "var(--acid)",
    tier: "ILLEGAL STREET",
    short: "Illegal street-level wager races. The Crown does not televise it. Everyone watches anyway.",
    body: "Unsanctioned street races in the lower city — and in every city. Police drones permitting. No licenses. No commentary booth. Lowline Runs make legends the Crown can never erase. Boards rule here. Many of the sport's greatest names started on a Lowline corner.",
    sponsor: "BLACKLINE RACING · OPACITY DRIVE",
    rounds: "Ongoing",
    rule: "No rules. House takes 8%.",
  },
  {
    id: "open-grav", name: "Open Grav League", code: "LG-04", accent: "var(--ion)",
    tier: "PUBLIC RANKED",
    short: "Public-ranked competition network. Open to any registered rider.",
    body: "The largest official ranked network. Open to any registered rider with a valid G-Core ID. The path from Open Grav to Crown to Grand Cup is the polished version of the dream. Most riders stay here. Some never leave.",
    sponsor: "EX//LINE · HALO RIG",
    rounds: "Continuous",
    rule: "Standard ranked. All categories.",
  },
  {
    id: "blackline", name: "Blackline Invitational", code: "LG-05", accent: "var(--crimson)",
    tier: "INVITE-ONLY · HIGH STAKES",
    short: "Illegal high-stakes invitation-only event. You do not apply. You are summoned.",
    body: "The most dangerous tournament in the sport. Invitation-only. Wager-mandatory. Stakes range from rigs to rumored Lineborn Legendaries to debts that change names. Brokers run the lobby. Crews run the security.",
    sponsor: "BLACKLINE RACING · BROKERED",
    rounds: 7,
    rule: "Wager required. No insurance.",
  },
  {
    id: "worldwide", name: "Worldwide Circuit", code: "LG-06", accent: "var(--nova)",
    tier: "PLANETARY CALENDAR",
    short: "Planetary circuit calendar. The map of where everything is happening.",
    body: "Not a league so much as a calendar. The Worldwide Circuit is the planetary itinerary — every recognized race weekend, every disputed event, every season opener. Every rider, every crew, every broker calibrates to this map.",
    sponsor: "EX//LINE · PRISM VISUAL",
    rounds: 32,
    rule: "Calendar of record.",
  },
  {
    id: "orbital", name: "Orbital Exhibition", code: "LG-07", accent: "var(--rift)",
    tier: "RUMORED · OFF-WORLD",
    short: "Rumored / experimental off-world race program. Not officially sanctioned.",
    body: "A whispered program. Off-world exhibition runs allegedly staged on low-orbit platforms. The Open Grav League has neither confirmed nor denied it. Brokers in Veilreach already settle bets on imagined finishes.",
    sponsor: "UNKNOWN",
    rounds: "??",
    rule: "Unwritten.",
    rumor: true,
  },
];

// ---------------------------------------------------------------------
// CORES
// ---------------------------------------------------------------------
const CORES = [
  { id: "sol", name: "Sol Core", color: "#ffb547", glow: "rgba(255,181,71,0.55)", affinity: "Speed · Pressure · Spotlight · Dominance", rider: "Sprinters · Front-runners · High-risk winners", weakness: "Burns hot. Drains fast. Punishes hesitation.", line: "Sol riders want the lead. They like being seen.", glyph: "S" },
  { id: "nova", name: "Nova Core", color: "#2e8bff", glow: "rgba(46,139,255,0.55)", affinity: "Precision · Boost control · Clean acceleration", rider: "Technicians · Controlled racers", weakness: "Demands discipline. Less forgiving under chaos.", line: "Nova riders are clean, calculated, and hard to shake.", glyph: "N" },
  { id: "ion", name: "Ion Core", color: "#46e6d4", glow: "rgba(70,230,212,0.55)", affinity: "Handling · Sharp turns · Reaction windows", rider: "Drifters · Corner specialists · Route readers", weakness: "Weaker in direct impact or open-stretch speed fights.", line: "Ion riders win by owning the line.", glyph: "I" },
  { id: "crimson", name: "Crimson Core", color: "#ff3a3a", glow: "rgba(255,58,58,0.55)", affinity: "Aggression · Contact · Collision recovery", rider: "Bruisers · Enforcers · Pressure riders", weakness: "Risky. Unstable. Easily overcommitted.", line: "Crimson riders attack confidence.", glyph: "C" },
  { id: "verdant", name: "Verdant Core", color: "#7af07e", glow: "rgba(122,240,126,0.55)", affinity: "Endurance · Recovery · Long routes · Stamina", rider: "Survival racers · Long-distance riders", weakness: "Slower burst ceiling. Less flashy at first glance.", line: "Verdant riders do not always start fast. They finish alive.", glyph: "V" },
  { id: "rift", name: "Rift Core", color: "#b975ff", glow: "rgba(185,117,255,0.55)", affinity: "Hidden skills · Anomaly routes · Experimental tech", rider: "Explorers · Trick-line hunters · Unstable prodigies", weakness: "Unpredictable. Volatile. Difficult to control.", line: "Rift riders find what the city forgot.", glyph: "R" },
  { id: "void", name: "Void Core", color: "#2a2c30", glow: "rgba(180,180,190,0.35)", affinity: "Stealth · Silence · Misdirection · Forbidden movement", rider: "Ghosts · Smugglers · Thieves · Route phantoms", weakness: "Rare. Illegal. Heavily monitored.", line: "Void riders win by vanishing.", glyph: "Ø", dark: true },
  { id: "prism", name: "Prism Core", color: "#ffffff", glow: "rgba(255,255,255,0.35)", affinity: "Adaptive builds · Mixed-class riders · Rare sync events", rider: "Hybrids · Prodigies · Unstable legends", weakness: "Hard to stabilize. Expensive. Often banned.", line: "Prism Cores become dangerous with riders who refuse category.", glyph: "P", prism: true },
];

// ---------------------------------------------------------------------
// RIDERS — preferred category added
// ---------------------------------------------------------------------
const RIDERS = [
  { id: "kai-vale", name: "Kai Vale", number: "K/01", affiliation: "Independent", classType: "Ghost-Sprinter", affinity: ["Void", "Ion"], category: "Gravboard · G-Suit", rig: "Phantom Board", status: "Wanted", skill: "Blind Corner", accent: "var(--ion)", bio: "A Lowline courier turned wager runner. Kai does not win by being seen. He wins by leaving the race before anyone realizes he changed the route.", quote: "Freedom moves faster when nobody sees it coming.", discipline: "RACE", circuit: "Lowline · Worldwide" },
  { id: "juno-sable", name: "Juno Sable", number: "J/07", affiliation: "Lowline Crew", classType: "Trickster", affinity: ["Prism", "Rift"], category: "Gravboard", rig: "Zenith Board · Prototype Glider", status: "Line Hunter", skill: "Mirror Drop", accent: "var(--rift)", bio: "Juno rides for style, but never without purpose. She chases Lost Lines like scripture and treats every route as a secret waiting to be embarrassed.", quote: "Winning is cute. Being remembered is better.", discipline: "STEEZ", circuit: "Overcity · Veilreach" },
  { id: "rex-lowe", name: "Rex Lowe", number: "R/13", affiliation: "Black Shop Enforcer", classType: "Bruiser", affinity: ["Crimson"], category: "G-Rig", rig: "Havoc MKII", status: "Debt Collector", skill: "Break Point", accent: "var(--crimson)", bio: "Rex turns races into contact sports. He does not chase the line. He breaks it and makes everyone else survive the debris.", quote: "Speed is different after fear touches you.", discipline: "WAGER", circuit: "Ashfall · Blackline" },
  { id: "mira-sol", name: "Mira Sol", number: "M/00", affiliation: "Crown Circuit", classType: "Sprinter", affinity: ["Sol", "Nova"], category: "G-Rig · G-Suit", rig: "Aegis-V", status: "Sponsored Champion", skill: "Solar Lead", accent: "var(--sol)", bio: "Mira was built for cameras, clean starts, and impossible pressure. The Crown calls her the future. The Lowline calls her manufactured.", quote: "Pressure is only ugly when you cannot afford it.", discipline: "RACE", circuit: "Solar Harbor · Grand Cup" },
  { id: "otto-veil", name: "Otto Veil", number: "O/04", affiliation: "Corporate Technician", classType: "Technician", affinity: ["Nova", "Ion"], category: "G-Rig", rig: "Meridian-LX", status: "Analyst-Rider", skill: "Perfect Read", accent: "var(--nova)", bio: "Otto rides like a calculation that learned how to smile. He studies rivals until their instincts become predictable.", quote: "Every race tells you how it wants to be solved.", discipline: "EVOLVE", circuit: "Skyport · Open Grav" },
  { id: "saint-nine", name: "Saint Nine", number: "S/09", affiliation: "Unknown", classType: "Ghost", affinity: ["Void"], category: "G-Suit · Relic", rig: "Relic Phantom", status: "Unverified", skill: "Vanish State", accent: "#cfd2d6", bio: "Saint Nine appears in wager archives, illegal route footage, and impossible Lost Line rumors. Nobody agrees on whether they are one rider, a crew, or a myth.", quote: "If they saw me, I failed.", discipline: "LEGENDS", circuit: "Veilreach · Rumor" },
];

const RIDER_CLASSES = [
  { id: "sprinter", name: "Sprinter", short: "Acceleration · boost timing · straight-line dominance.", question: "Can you catch me before the route runs out?", affinity: "Sol · Nova", rigs: "G-Rig · velocity boards · G-Suit sprints", accent: "var(--sol)" },
  { id: "trickster", name: "Trickster", short: "Combos · flips · rails · spins · steez farming.", question: "Did you win, or did they remember me?", affinity: "Prism · Rift · Ion", rigs: "Gravboard · G-Suit · light prototypes", accent: "var(--acid)" },
  { id: "drifter", name: "Drifter", short: "Cornering · flow · momentum · line control.", question: "Can you survive the line I already saw?", affinity: "Ion · Nova", rigs: "G-Rig · agile boards · tuned suits", accent: "var(--ion)" },
  { id: "bruiser", name: "Bruiser", short: "Contact racing · pressure · durability · intimidation.", question: "How fast are you after fear touches you?", affinity: "Crimson · Verdant", rigs: "G-Rig · heavy boards · armored prototypes", accent: "var(--crimson)" },
  { id: "ghost", name: "Ghost", short: "Shortcuts · silent movement · fake-outs · smuggling.", question: "Can you beat someone you cannot follow?", affinity: "Void · Ion · Rift", rigs: "Phantom boards · silent G-Suits · black-market gear", accent: "#bfc3c9" },
  { id: "technician", name: "Technician", short: "Timing · gear mastery · skill chains · route calculation.", question: "Can you beat someone who already solved the race?", affinity: "Nova · Ion · Prism", rigs: "Balanced boards · Aegis G-Rigs · precision suits", accent: "var(--nova)" },
];

// ---------------------------------------------------------------------
// MACHINES — full list across categories incl. prototypes & relics
// ---------------------------------------------------------------------
const MACHINES = [
  { id: "gsuit", name: "G-Suit", code: "MX-01", category: "G-Suit", tag: "Foot-Glide · Athletic",
    body: "Powered glide suits with foot thrusters and gravity distortion. The most physical category in the sport. Wallrides, rails, mid-air thrust transfers, and vertical slides. Where the body becomes the machine.",
    stats: { Speed: 70, Agility: 96, Air: 88, Contact: 42, Style: 90, Endurance: 78, Sync: 86, Risk: 80 },
    example: "HALO MK-IV · VOLTEX BLADE · OPACITY GHOSTSUIT" },
  { id: "gravboard", name: "Gravboard", code: "MX-02", category: "Gravboard", tag: "Iconic · Street · Style",
    body: "The signature street form. Sleek, expressive, tuned for tricks and Lost Lines. In official events, paired with a G-Suit for air control. Gravboards put G//LYDE on the wall posters of the world.",
    stats: { Speed: 76, Agility: 88, Air: 74, Contact: 56, Style: 96, Endurance: 60, Sync: 80, Risk: 70 },
    example: "ZENITH SR-9 · PHANTOM FRAME · ECHO-01" },
  { id: "grig", name: "G-Rig", code: "MX-03", category: "G-Rig", tag: "Speeder · Elite Circuit",
    body: "One-rider speeder-bike grav machines. The category where engineering can outrun talent. Heavy thrust, airborne glide, professional aerodynamics. Where the Crown projects its champions.",
    stats: { Speed: 96, Agility: 70, Air: 78, Contact: 84, Style: 72, Endurance: 88, Sync: 70, Risk: 86 },
    example: "AEGIS-V · HAVOC MKII · MERIDIAN-LX" },
  { id: "prototypes", name: "Prototypes", code: "MX-04", category: "Cross-Class", tag: "Experimental · Volatile",
    body: "Corporate or Black Shop experimental machines. High ceiling, high failure rate. Built to break limits or break riders. Frequently banned mid-season.",
    stats: { Speed: 92, Agility: 74, Air: 84, Contact: 50, Style: 76, Endurance: 48, Sync: 80, Risk: 96 },
    example: "DRIFT-ALPHA · NULL-7 · KIRIN" },
  { id: "relics", name: "Relics", code: "MX-05", category: "Pre-Core", tag: "Found Tech · Hidden Behaviors",
    body: "Old-world machines tied to lost experiments or early G-Core research. Not always stronger — but they may carry hidden behaviors modern machines cannot replicate.",
    stats: { Speed: 70, Agility: 64, Air: 72, Contact: 60, Style: 88, Endurance: 70, Sync: 92, Risk: 84 },
    example: "EREBUS · PRE-CORE 0X · SAINT FRAME" },
];

// ---------------------------------------------------------------------
// FACTIONS
// ---------------------------------------------------------------------
const FACTIONS = [
  { id: "corporations", name: "The Corporations", code: "F·01", accent: "var(--nova)", short: "Own the legal leagues. License G-Core production. Sell the dream of rising.", body: "Own the legal leagues, sponsor elite riders, license G-Core production, control media narratives, manufacture premium machines, and profit from everything. They sell the dream of rising while owning the ladder.", seal: "C" },
  { id: "crews", name: "The Crews", code: "F·02", accent: "var(--acid)", short: "Street families. Routes, territory, knowledge, identity.", body: "Street families. They share routes, protect territory, build machines, pool knowledge, and create identity. A crew is a racing team, neighborhood gang, friend group, brand, and survival network at once.", seal: "X" },
  { id: "independents", name: "The Independents", code: "F·03", accent: "var(--ion)", short: "Solo riders, explorers, wager hunters, thieves.", body: "Solo riders, explorers, wager hunters, couriers, thieves, and freelancers. They refuse to be owned, which makes them valuable and vulnerable.", seal: "I" },
  { id: "brokers", name: "The Brokers", code: "F·04", accent: "var(--sol)", short: "Bookmakers, debt holders, lobby hosts, match arrangers.", body: "Bookmakers, debt holders, illegal lobby hosts, and match arrangers. They know who is desperate, who is lying, and who has something worth taking.", seal: "B" },
  { id: "blackshops", name: "The Black Shops", code: "F·05", accent: "var(--crimson)", short: "Underground mechanics and illegal modders.", body: "Underground mechanics and illegal modders. They repair damaged machines, hide forbidden skills, crack G-Core restrictions, and build rigs the Crown would ban.", seal: "S" },
  { id: "crown", name: "The Crown Circuit", code: "F·06", accent: "var(--bone)", short: "Official elite league. Polished. Prestigious. Corrupt.", body: "The official elite league. Polished, prestigious, beautiful, and corrupt. This is where sponsors, media, celebrities, corporate heirs, and manufactured champions live.", seal: "♛" },
  { id: "blooded", name: "The Blooded", code: "F·07", accent: "var(--rift)", mystery: true, short: "Nightlife-connected elites. Fund the wagers. Know something older.", body: "A deeper-universe faction. Beautiful, wealthy, nightlife-connected elites who sponsor races, own clubs, fund illegal wagers, and may know that G-Core technology is connected to something older than science.", seal: "✶" },
];

// ---------------------------------------------------------------------
// RACE TYPES
// ---------------------------------------------------------------------
const RACE_TYPES = [
  { name: "Ranked Races", type: "Sport", body: "League-tracked competition that determines your placement on the public Ledger." },
  { name: "Wager Races", type: "War", body: "Stakes everything on the line — gear, skills, machines, debts, or reputation." },
  { name: "Trick Competitions", type: "Steez", body: "Style-judged exhibitions where a beautiful loss outranks an ugly win." },
  { name: "Crew Battles", type: "Crew", body: "Multi-rider crew-versus-crew warfare across districts." },
  { name: "Lost Line Hunts", type: "Hidden", body: "Open searches for the hidden route. Completion grants Lineborn Legendaries." },
  { name: "Courier Runs", type: "Survival", body: "Illegal delivery races through hostile streets. Time and contact both punish." },
  { name: "Crown Circuit Events", type: "Elite", body: "Televised, sponsored, polished. The world watches. The world bets." },
  { name: "Lowline Runs", type: "Street", body: "Unsanctioned street races. Police drones permitting." },
  { name: "Open-Sky Sprints", type: "Altitude", body: "Pure speed across open-sky course platforms between towers." },
  { name: "Class Duels", type: "Duel", body: "Same-category head-to-head. Skill above gear." },
];

// ---------------------------------------------------------------------
// CODEX
// ---------------------------------------------------------------------
const CODEX = [
  { term: "OVER//UNDER", tag: "Universe", body: "The larger universe and IP umbrella that G//LYDE opens into." },
  { term: "G//LYDE", tag: "Sport", body: "The gravsport racing, wagering, and outlaw culture inside the universe." },
  { term: "G//LYDE WORLD", tag: "Hub", body: "The official world hub and cultural archive at glydeworld.com." },
  { term: "G-Suit", tag: "Category", body: "Powered foot-glide suit. The athletic category — wallrides, rails, slides, mid-air thrust." },
  { term: "Gravboard", tag: "Category", body: "Iconic hoverboard. Style-heavy, trick-heavy, street-famous. Paired with a G-Suit in official events." },
  { term: "G-Rig", tag: "Category", body: "One-rider speeder-bike grav machine. Built for elite circuits and high-speed war." },
  { term: "The Overcity", tag: "Place", body: "Vertical megastructure flagship circuit. One of many circuits worldwide." },
  { term: "Gravsport", tag: "Sport", body: "Personal anti-gravity racing, tricking, wagering, and rig-based movement." },
  { term: "G-Core", tag: "Tech", body: "The anti-gravity engine that powers every machine and adapts to its rider." },
  { term: "Drift", tag: "Tech", body: "The process by which a rider's build slowly changes based on how they ride." },
  { term: "Steez", tag: "Culture", body: "Style as mechanical score, cultural value, and identity expression." },
  { term: "Lost Line", tag: "Hidden", body: "A hidden trick route embedded inside a track. Six gates must chain to clear it." },
  { term: "Lineborn Legendary", tag: "Item", body: "A one-time legendary item earned by completing a Lost Line. Cannot be farmed." },
  { term: "Lifetime Skill", tag: "Tech", body: "A protected skill that represents a rider's permanent identity." },
  { term: "The Ledger", tag: "System", body: "Public reputation tracking riders, crews, wagers, trophies, rivalries, and status." },
  { term: "Wager Race", tag: "Sport", body: "A high-stakes race where riders risk gear, skills, legends, debts, machines, or reputation." },
  { term: "Grand Cup", tag: "League", body: "The premier worldwide championship series." },
  { term: "Crown Circuit", tag: "League", body: "The official elite league. Polished. Sponsored. Manufactured." },
  { term: "Lowline Runs", tag: "League", body: "Illegal street races. Where most legends are actually made." },
  { term: "Blackline Invitational", tag: "League", body: "Invite-only high-stakes wager tournament." },
  { term: "Worldwide Circuit", tag: "League", body: "The planetary calendar of recognized races." },
  { term: "Orbital 9", tag: "Rumor", body: "Rumored low-orbit exhibition circuit. Officially nonexistent.", mystery: true },
  { term: "Veilreach", tag: "Rumor", body: "Experimental circuit with unstable gravity pockets. File restricted.", mystery: true },
  { term: "Grace", tag: "Mystery", body: "An old-world word for the affinity some riders carry. Origin disputed.", mystery: true },
  { term: "The Blooded", tag: "Faction", body: "Nightlife-connected elites who fund wagers. Origin disputed.", mystery: true },
  { term: "Volume 0", tag: "Release", body: "The compact lore, art, character, and concept release that establishes the foundation of OVER//UNDER." },
];

// ---------------------------------------------------------------------
// SPONSORS — official partners with full lore
// ---------------------------------------------------------------------
const SPONSORS = [
  { id: "axiom", name: "AXIOM PERFORMANCE", code: "S·01", role: "Telemetry · Analytics · Scoring", legit: true, mono: "A//" },
  { id: "zenith", name: "ZENITH AERODYNAMICS", code: "S·02", role: "Premium G-Rig · Engineering", legit: true, mono: "Z//" },
  { id: "solace", name: "SOLACE ENERGY", code: "S·03", role: "Circuit Infrastructure · Power", legit: true, mono: "S//" },
  { id: "voltex", name: "VOLTEX MOTION", code: "S·04", role: "G-Suit Propulsion · Thrust Systems", legit: true, mono: "V//" },
  { id: "prism", name: "PRISM VISUAL ENGINEERING", code: "S·05", role: "Helmet Displays · Broadcast · Signage", legit: true, mono: "P//" },
  { id: "halo", name: "HALO RIG", code: "S·06", role: "G-Suit Safety · Official Equipment", legit: true, mono: "H//" },
  { id: "blackline", name: "BLACKLINE RACING GEAR", code: "S·07", role: "Underground Parts · Semi-Legal", legit: false, mono: "X//" },
  { id: "opacity", name: "OPACITY DRIVE", code: "S·08", role: "Stealth Tech · Ghost-Class Gear", legit: false, mono: "Ø//" },
  { id: "exline", name: "EX//LINE", code: "S·09", role: "Route Mapping · Track Architecture", legit: true, mono: "X//" },
];

// ---------------------------------------------------------------------
// RUMORS FROM THE GRID
// ---------------------------------------------------------------------
const RUMORS = [
  { tag: "ORBITAL", body: "Photos of a low-orbit start gate surfaced again on the Blackline forum. Deleted within the hour." },
  { tag: "VEILREACH", body: "A Crown Circuit rookie clocked an unregistered route segment. The footage will not stabilize." },
  { tag: "SAINT NINE", body: "A Lineborn artifact appeared in a Brokers' lobby with no listed seller. The lobby was sealed by morning." },
  { tag: "PRE-CORE", body: "A relic frame was sold in Ashfall under a buyer alias. Buyer untraceable. Frame undocumented." },
  { tag: "GRAND CUP", body: "Two unconfirmed names removed from the seeding chart. The Crown denies any change occurred." },
  { tag: "VOLUME 0", body: "Concept stills from Volume 0 leaked across underground channels. Deny everything." },
];

Object.assign(window, {
  ROUTES, DISCIPLINES, CATEGORIES, CIRCUITS, LEAGUES, CORES, RIDERS, RIDER_CLASSES, MACHINES, FACTIONS, RACE_TYPES, CODEX, SPONSORS, RUMORS
});
