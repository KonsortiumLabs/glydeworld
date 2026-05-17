"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import type { ArchiveEntry, Character, CodexTerm, Circuit, Faction, GCore, PageContent } from "@/content/siteContent";
import { useSiteContent } from "@/components/ContentProvider";

type SubmissionKind = "rider" | "crew" | "sponsor" | "circuit" | "machine" | "story" | "join" | "collaborate" | "support";

function CtaButtons({ ctas }: { ctas: Array<{ label: string; href: string; kind: string }> }) {
  return (
    <div className="cta-row">
      {ctas.map((cta, index) => (
        <Link key={`${cta.href}-${cta.label}`} href={cta.href} className={`btn ${index === 0 || cta.kind === "primary" ? "primary" : ""}`}>
          {cta.label} →
        </Link>
      ))}
    </div>
  );
}

function SplitDisplayTitle({ text, className = "" }: { text: string; className?: string }) {
  const parts = text
    .split(/(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) return <>{text}</>;

  return (
    <span className={`split-display-title ${className}`}>
      {parts.map((part) => <span key={part}>{part}</span>)}
    </span>
  );
}

export function HomeView() {
  const { content } = useSiteContent();
  const page = content.pages.home;
  const home = content.homepage;
  const tickerItems = Array.from({ length: 4 }, () => content.featureStrip).flat();
  const worldCards = [
    {
      title: "Neo Noctis",
      href: "/neo-noctis",
      image: content.images[0].url,
      body: "The first iconic city: a race-week capital where sport, nightlife, status, and wagers collide.",
    },
    {
      title: "Characters",
      href: "/characters",
      image: content.images[1].url,
      body: "Open rider files, family lines, rivals, Oddsmakers, inventors, sponsors, and future community-created figures.",
    },
    {
      title: "Archive",
      href: "/archive",
      image: content.images[2].url,
      body: "Read character journals, Off Ledger files, G//NET clips, route notes, and illustrated story drops.",
    },
    {
      title: "Codex",
      href: "/codex",
      image: content.images[3].url,
      body: "Learn the terms, machines, wagers, signals, and systems that shape the world.",
    },
  ];

  return (
    <>
      <section className="hero teaser-hero">
        <img className="bg" src={page.hero.image} alt="" />
        <div className="broadcast-strip">
          <div>
            <span><i className="live-dot" /> G//NET LIVE</span>
            <span>GLYDEWORLD.COM</span>
            <span>A GRAVBOARD SAGA FROM THE OVER//UNDER UNIVERSE</span>
            <span>NEO NOCTIS // EIDOLON</span>
            <span style={{ marginLeft: "auto", color: "var(--acid)" }}>OFF LEDGER // VOLUME 0</span>
          </div>
        </div>
        <div className="hero-inner">
          <div className="hero-stage">
            <div className="hero-copy-panel">
            <p className="label hero-kicker">{page.hero.eyebrow}</p>
            <h1 className="display">{page.hero.title}</h1>
            <p className="hero-copy">{page.hero.body}</p>
            <CtaButtons ctas={page.hero.ctas} />
            </div>
            <Link href="/off-ledger" className="hero-poster-card story-card-link">
              <div className="feed-topline">
                <span className="label"><i className="live-dot" /> OFF LEDGER</span>
                <span className="feed-status">first file</span>
              </div>
              <div className="feed-visual">
                <img src={content.images[1].url} alt="" />
                <div className="feed-scanline" />
                <div className="feed-route">
                  <span>Rouxline</span>
                  <b>Gate 8</b>
                  <span>Lowline</span>
                </div>
              </div>
              <div className="feed-copy">
                <span className="label">Story file</span>
                <b>THE RUN WAS SUPPOSED TO STAY QUIET.</b>
                <p>No broadcast. No record. No protection. Then G//NET remembered it for everyone.</p>
              </div>
              <div className="feed-metrics">
                <div><span className="label">City</span><b>Neo Noctis</b></div>
                <div><span className="label">Arc</span><b>Off Ledger</b></div>
                <div><span className="label">File</span><b>Open</b></div>
              </div>
            </Link>
          </div>
          <div className="telemetry">
            <div><span className="label">First planet</span><b>Eidolon</b></div>
            <div><span className="label">First city</span><b>Neo Noctis</b></div>
            <div><span className="label">First arc</span><b>OFF LEDGER</b></div>
            <div><span className="label">World</span><b>OVER//UNDER</b></div>
          </div>
        </div>
      </section>

      <div className="ticker gnet-ticker" aria-label="G//NET signal ticker">
        <div className="ticker-track">
          {tickerItems.map((item, i) => <span key={`${item}-${i}`}><i />{item}</span>)}
        </div>
      </div>

      <section className="section world-teaser-section">
        <div className="section-head">
          <div>
            <span className="label">{home.worldTeaser.eyebrow}</span>
            <h2 className="display">{home.worldTeaser.title}</h2>
          </div>
          <p className="lead">{home.worldTeaser.body}</p>
        </div>
        <div className="signal-card-grid">
          {home.worldTeaser.callouts.map((card) => (
            <Link className="signal-card" href={card.href} key={card.title}>
              <span className="label">{card.eyebrow}</span>
              <h3 className="display">{card.title}</h3>
              <p>{card.body}</p>
              <div className="tag-row">{card.tags?.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </Link>
          ))}
        </div>
        <div className="compact-system-row">
          {home.movementSystems.map((system, index) => (
            <Link className="compact-system-card" href="/glyde" key={system.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <b>{system.title}</b>
                <p>{system.body}</p>
                <small>{system.tags?.join(" / ")}</small>
              </div>
            </Link>
          ))}
        </div>
        <Link className="inline-section-cta btn" href="/glyde">Open Riders / Boards / Routes →</Link>
      </section>

      <section className="section off-ledger-section">
        <Link href={home.offLedger.href} className="story-panel">
          <img src={home.offLedger.image} alt="" />
          <div className="story-copy">
            <span className="label">{home.offLedger.eyebrow}</span>
            <h2 className="display">{home.offLedger.title}</h2>
            <p>{home.offLedger.body}</p>
            <CtaButtons ctas={home.offLedger.ctas} />
          </div>
          <div className="story-data">
            <span>NO BROADCAST</span>
            <span>NO RECORD</span>
            <span>NO PROTECTION</span>
            <b>CLIP LEAKED</b>
          </div>
        </Link>
      </section>
      <section className="section enter-world-section">
        <div className="section-head">
          <div>
            <span className="label">Enter the world</span>
            <h2 className="display">ENTER THE WORLD.</h2>
          </div>
          <p className="lead">Choose a door into the sport, the city, the story, or the archive.</p>
        </div>
        <div className="world-gateway-grid">
          {worldCards.map((card) => (
            <Link className="world-gateway-card" href={card.href} key={card.title}>
              <img src={card.image} alt="" />
              <div>
                <span className="label">Open file</span>
                <h3 className="display">{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section support-band garage-support-merge">
        <div className="support-panel">
          <span className="label">{home.supportCta.eyebrow}</span>
          <h2 className="display">{home.supportCta.title}</h2>
          <p>{home.supportCta.body}</p>
          <CtaButtons ctas={[
            { label: "Join The World", href: "/join", kind: "primary" },
            { label: "Submit A Concept", href: "/garage", kind: "submission" },
            { label: "Support A Drop", href: "/support-a-drop", kind: "support" },
            { label: "Collaborate", href: "/collaborate", kind: "secondary" },
          ]} />
          <details className="policy-note">
            <summary>Canon note</summary>
            <p>{home.canonNotice}</p>
          </details>
        </div>
      </section>
    </>
  );
}

export function PageView({ pageKey }: { pageKey: "gravsports" | "racing" | "neoNoctis" }) {
  const { content } = useSiteContent();
  const page = content.pages[pageKey] as PageContent;
  const [selected, setSelected] = useState<null | {
    title: string;
    category: string;
    image: string;
    definition: string;
    description: string;
    whyItMatters?: string;
    tags?: string[];
    ctas?: Array<{ label: string; href: string; kind: string }>;
  }>(null);
  const [archiveSelected, setArchiveSelected] = useState<ArchiveEntry | null>(null);

  if (pageKey === "neoNoctis") {
    const cityFiles = [
      {
        title: "The Overcity",
        category: "Neo Noctis // Skyline layer",
        fileType: "City layer",
        accessLevel: "Public / sponsored",
        routeZone: "Overcity",
        fileStatus: "Broadcast clean",
        image: content.images[0].url,
        definition: "Sponsor towers, official events, broadcast decks, luxury suites, and the version of the sport sold in perfect light.",
        description: "The Overcity is where Neo Noctis performs itself. Grand Cup guests arrive here first. Sponsors buy glass, height, and proximity to the cameras. The official sport looks clean from this altitude because the debts are below the frame.",
        whyItMatters: "The Overcity sells the dream that every Lowline rider is trying to touch without being owned by it.",
        tags: ["Official", "Sponsors", "Broadcast", "Luxury"],
      },
      {
        title: "The Lowline",
        category: "Neo Noctis // Below the route map",
        fileType: "District / pressure layer",
        accessLevel: "Restricted / street",
        routeZone: "Lowline",
        fileStatus: "Terms active",
        image: content.images[1].url,
        definition: "Off-route races, hidden access, Black Book terms, street crews, mechanics, and people with nothing to lose.",
        description: "The Lowline is not simply underground. It is the part of Neo Noctis that keeps the official sport honest, dangerous, and hungry. Runs happen there because sanctioned routes cannot answer every ambition.",
        whyItMatters: "Official racing has rules. Lowline racing has terms.",
        tags: ["Lowline Runs", "Black Book", "Crews", "Terms"],
      },
      {
        title: "The Rouxline",
        category: "Neo Noctis // Private rider house",
        fileType: "Rider house / salon",
        accessLevel: "Selective / private",
        routeZone: "Roux orbit",
        fileStatus: "Watched",
        image: content.images[2].url,
        definition: "Uno Roux's private rider house, board garage, salon, and high-stakes social territory.",
        description: "The Rouxline is where deals, rivalries, route politics, and board culture pass through the same room. Uno keeps the doors selective, the room warm, and the family close enough to the sport's hidden economy to hear terms forming before they become public.",
        whyItMatters: "It gives OFF LEDGER an intimate pressure point where private money, family pressure, route access, and Neo Noctis nightlife begin to overlap.",
        tags: ["Uno Roux", "Kellan Roux", "Rider House", "Route Politics"],
      },
      {
        title: "Gate 8",
        category: "Neo Noctis // Private route access",
        fileType: "Gate / route access",
        accessLevel: "Private / off-map",
        routeZone: "Roux orbit",
        fileStatus: "Disputed",
        image: content.images[3].url,
        definition: "A private route-access point tied to the Roux orbit, quiet arrivals, and off-map movement.",
        description: "Gate 8 matters because controlled access matters. It can support private board runs, quiet arrivals, and off-map movement without turning the whole city into one door.",
        whyItMatters: "It shows how one route can make a rider visible without making the entire city depend on one door.",
        tags: ["Route Rights", "Off Ledger", "Wager Houses", "Gate 8"],
      },
    ];
    const relatedEntries = content.archive.filter((entry) => ["rouxline-chrome", "gate-8", "lowline-runs", "route-rights", "off-ledger-run"].includes(entry.id));

    return (
      <>
        <RouteHero page={page} />
        <section className="section city-feature-section neo-deep-section">
          <div className="section-head">
            <div>
              <span className="label">City files</span>
              <h2 className="display">Neo Noctis is a stack of dreams, debts, doors, and cameras.</h2>
            </div>
            <p className="lead">Open each layer to understand why the first story begins here: luxury above, pressure below, and Gate 8 sitting between family history and market appetite.</p>
          </div>
          <div className="city-feature">
            <button className="city-hero-card clickable-card" onClick={() => setSelected({
              title: "Neo Noctis",
              category: "Eidolon // First major city",
              image: content.images[0].url,
              definition: "The Miami / Vegas / Monaco of Eidolon, where gravboard culture became nightlife, status, and wager pressure.",
              description: "Neo Noctis is coastal, vertical, luxurious, hot, social, and dangerous underneath the beauty. Off-world visitors, models, inventors, brand owners, riders, Oddsmakers, sponsors, and G//NET personalities come here to watch, wager, party, and become part of the sport.",
              whyItMatters: "This is the first iconic setting because it makes the promise and the cost of G//LYDE visible in the same skyline.",
              tags: ["Eidolon", "Lowline", "Gate 8", "The Rouxline"],
              ctas: [{ label: "Read Off Ledger", href: "/off-ledger", kind: "primary" }],
            })}>
              <img src={content.images[0].url} alt={content.images[0].alt} />
              <div>
                <span className="label">Featured dossier // Eidolon city file</span>
                <h2 className="display">The city that made board culture feel like nightlife.</h2>
                <p>Above, Neo Noctis sells glamour. Below, the Lowline sets the terms.</p>
                <div className="city-cover-meta">
                  <span>FILE TYPE <b>City dossier</b></span>
                  <span>STATUS <b>Open</b></span>
                  <span>ACCESS <b>Public</b></span>
                </div>
                <span className="btn dossier-cta">View Dossier →</span>
              </div>
            </button>
            <div className="city-dossier-index">
              <div className="city-dossier-head">
                <span className="label">NEO NOCTIS FILES</span>
                <h3 className="display">Routes, crews, access points, and the city systems behind modern board culture.</h3>
              </div>
              <div className="city-node-grid">
                {cityFiles.map((file) => (
                  <button className="city-node-card clickable-card" onClick={() => setSelected({ ...file, ctas: [{ label: "View Archive", href: "/archive", kind: "primary" }] })} key={file.title}>
                    <img src={file.image} alt="" />
                    <div className="city-file-meta">
                      <span>FILE TYPE <b>{file.fileType}</b></span>
                      <span>ACCESS LEVEL <b>{file.accessLevel}</b></span>
                      <span>ROUTE / DISTRICT <b>{file.routeZone}</b></span>
                      <span>STATUS <b>{file.fileStatus}</b></span>
                    </div>
                    <span className="label">{file.category}</span>
                    <h3 className="display">{file.title}</h3>
                    <p>{file.definition}</p>
                    <span className="btn card-cta">Preview File →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section drops-section">
          <div className="section-inner">
            <div className="section-head">
              <div><span className="label">Related files</span><h2 className="display">Read the city through its pressure points.</h2></div>
              <Link className="btn" href="/archive">Open Archive →</Link>
            </div>
            <div className="drops-grid">{relatedEntries.map((entry) => <ArchiveCard key={entry.id} entry={entry} onOpen={setArchiveSelected} />)}</div>
          </div>
        </section>
        {selected && <FileModal item={selected} onClose={() => setSelected(null)} />}
        {archiveSelected && <ArchiveReader entry={archiveSelected} onClose={() => setArchiveSelected(null)} />}
      </>
    );
  }

  return (
    <>
      <RouteHero page={page} />
      <section className="section">
        <div className="grid two">
          {page.blocks.map((block) => (
            <article className="card" key={block.title}>
              <div className="card-body">
                <span className="label">{block.kicker}</span>
                <h3 className="display"><SplitDisplayTitle text={block.title} /></h3>
                <p className="muted">{block.body}</p>
                {block.quote && <p className="display" style={{ color: "var(--acid)", fontSize: "2rem" }}>"{block.quote}"</p>}
                {block.points && <div className="tag-row">{block.points.map((point) => <span className="tag" key={point}>{point}</span>)}</div>}
                {block.ctas && <CtaButtons ctas={block.ctas} />}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function MovementSystemsView() {
  const { content } = useSiteContent();
  const [selected, setSelected] = useState<null | {
    title: string;
    category: string;
    image: string;
    definition: string;
    description: string;
    whyItMatters?: string;
    tags?: string[];
    ctas?: Array<{ label: string; href: string; kind: string }>;
  }>(null);
  const systems = content.homepage.movementSystems.map((system) => {
    const title = system.title.toUpperCase();
    const details = {
      "RIDERS": {
        category: "Character system // G//LYDE",
        definition: "The names the world watches: athletes, style icons, wagers, celebrities, local legends, and future ghosts in the feed.",
        description: "Riders are the emotional engine of G//LYDE. They carry family pressure, sponsor appetite, local reputation, style, fear, debt, and the need to become impossible to ignore. A rider is not only someone who races. A rider is a name the city can price.",
        whyItMatters: "The site is built around character files and journals because the sport only matters when the people risking themselves feel real.",
        tags: ["Character files", "Status", "Style", "Pressure", "G//NET"],
      },
      "G-BOARDS": {
        category: "Board system // G//LYDE",
        definition: "Tuned anti-gravity boards built for speed, control, route expression, and risk. The board is the icon.",
        description: "G-Boards are the visual object people remember first: tuned decks, Core behavior, grip language, signal trails, boardwear, repair scars, sponsor finishes, and the impossible line between personal style and mechanical value.",
        whyItMatters: "Boards make movement visible. They turn identity into silhouette, telemetry, fashion, and market signal.",
        tags: ["Steez", "G-Sync", "Core tuning", "Boardwear", "Identity"],
      },
      "ROUTES": {
        category: "Route system // Neo Noctis",
        definition: "The city lines, gates, tracks, drops, rooftops, and Lowline paths where reputation is won, priced, or lost.",
        description: "Routes are permission, access, camera angles, risk, crowd memory, sponsor value, and Black Book terms. A route can be official, hidden, purchased, disputed, inherited, leaked, or taken for one night.",
        whyItMatters: "Every route has a price. The route decides whether a move becomes a private risk, a public clip, or a market event.",
        tags: ["Route rights", "Lowline", "Gates", "City lines", "Access"],
      },
    }[title] ?? {
      category: "Movement discipline",
      definition: system.body,
      description: system.body,
      whyItMatters: "Each movement system changes what a rider can risk, sell, and become.",
      tags: system.tags ?? [],
    };
    return { ...system, ...details };
  });
  const comparisonRows = [
    ["Core fantasy", "A name becomes impossible to ignore.", "A board turns identity into motion.", "A city line becomes valuable."],
    ["What wins", "Nerve, style, judgment, timing.", "Control, Steez, tuning, sync.", "Access, risk, timing, terms."],
    ["Where it lives", "Character files, feeds, contracts.", "Board rooms, rooftops, Lowline runs.", "Gates, rooftops, circuits, districts."],
    ["What can go wrong", "Exposure, debt, being owned.", "Sync drift, board failure, bad line.", "Wrong terms, wrong witness, no protection."],
  ];

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "Boards-first system // Riders / Boards / Routes",
          title: "RIDERS. G-BOARDS. ROUTES. THE THREE THINGS THE WORLD PRICES FIRST.",
          body: "Public-facing G//LYDE begins with boards: the rider, the board, and the route that turns a line into status. G-Suits are gear. G-Rigs and other extensions can grow later. The board is the icon now.",
          image: content.images[2].url,
          ctas: [
            { label: "Open G//LYDE", href: "/glyde-racing", kind: "primary" },
            { label: "View Routes & Cities", href: "/routes-cities", kind: "secondary" },
          ],
        }
      }} />
      <section className="section movement-deep-section">
        <div className="section-head">
          <div>
            <span className="label">System files</span>
            <h2 className="display">Rider. Board. Route. That is the public signal.</h2>
          </div>
          <p className="lead">Open each file for the rules, culture, risk, and story value behind the boards-first G//LYDE experience.</p>
        </div>
        <div className="movement-deep-grid">
          {systems.map((system, index) => (
            <button className="movement-file-card clickable-card" onClick={() => setSelected({
              title: system.title,
              category: system.category,
              image: system.image ?? content.images[index % content.images.length].url,
              definition: system.definition,
              description: system.description,
              whyItMatters: system.whyItMatters,
              tags: system.tags,
              ctas: [
                { label: "Read Race Rules", href: "/glyde-racing", kind: "primary" },
                { label: "Submit A Rider", href: "/garage", kind: "submission" },
              ],
            })} key={system.title}>
              <img src={system.image ?? content.images[index % content.images.length].url} alt="" />
              <div className="movement-file-copy">
                <span className="label">{system.eyebrow}</span>
                <h3 className="display">{system.title}</h3>
                <p>{system.definition}</p>
                <div className="spec-strip">{system.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <span className="btn card-cta">Open System File →</span>
              </div>
              <span className="system-number">{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </section>
      <section className="section system-compare-section">
        <div className="section-inner">
          <div className="section-head">
            <div><span className="label">Race literacy</span><h2 className="display">The leagues separate disciplines. The Lowline mixes them.</h2></div>
            <p className="lead">Official events separate body, board, and rig for fairness. Lowline Runs mix them because fairness was never the point.</p>
          </div>
          <div className="system-table">
            <div className="system-table-row header"><span>Signal</span><span>Riders</span><span>G-Boards</span><span>Routes</span></div>
            {comparisonRows.map((row) => (
              <div className="system-table-row" key={row[0]}>
                {row.map((cell) => <span key={cell}>{cell}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section support-band movement-cta-band">
        <div className="support-panel">
          <span className="label">Why it matters</span>
          <h2 className="display">The board is the icon. The rider is the name. The route is the price.</h2>
          <p>G-Suits remain rider gear. G-Rigs remain future expansion. The public face of G//LYDE starts with the board line everyone wants to replay.</p>
          <CtaButtons ctas={[
            { label: "Open The Codex", href: "/codex", kind: "primary" },
            { label: "View Characters", href: "/characters", kind: "secondary" },
            { label: "Build in the Garage", href: "/garage", kind: "submission" },
          ]} />
        </div>
      </section>
      {selected && <FileModal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function RouteHero({ page }: { page: Pick<PageContent, "hero"> }) {
  return (
    <section className="route-hero">
      <img className="bg" src={page.hero.image} alt="" />
      <div className="route-hero-inner">
        <span className="label hero-kicker">{page.hero.eyebrow}</span>
        <h1 className="display">{page.hero.title}</h1>
        <p>{page.hero.body}</p>
        <CtaButtons ctas={page.hero.ctas} />
      </div>
    </section>
  );
}

type CharacterMeta = {
  status: string;
  affiliation: string;
  routeRole: string;
  specialty: string;
  access: string;
  lastSeen: string;
  knownRoute: string;
  circuitPresence: string;
  risk: string;
  chips: string[];
};

function getCharacterMeta(character: Character): CharacterMeta {
  if (character.id === "kellan-roux") return {
    status: "Off Ledger",
    affiliation: "Independent / Roux orbit",
    routeRole: "Primary lens / local G-Board talent",
    specialty: "Style under pressure",
    access: "Rider file",
    lastSeen: "Metro Core",
    knownRoute: "Gate 8",
    circuitPresence: "Off-ledger",
    risk: "High",
    chips: ["RIDER", "OFF LEDGER", "G-BOARD TALENT"],
  };
  if (character.id === "gio-roux") return {
    status: "Canon",
    affiliation: "Rouxline / Lowline",
    routeRole: "Older half-brother / route support",
    specialty: "Access, survival, route memory",
    access: "Rouxline file",
    lastSeen: "Lowline threshold",
    knownRoute: "Gate 8",
    circuitPresence: "Independent",
    risk: "Medium-high",
    chips: ["LOWLINE", "ROUXLINE", "ROUTE SUPPORT"],
  };
  if (character.id === "uno-roux") return {
    status: "Canon",
    affiliation: "The Rouxline",
    routeRole: "Former high-level Handler / owner",
    specialty: "Gate access, rider politics, private rooms",
    access: "Handler file",
    lastSeen: "The Rouxline",
    knownRoute: "Private rooms",
    circuitPresence: "Behind the room",
    risk: "Controlled",
    chips: ["HANDLER", "ROUXLINE", "ACCESS"],
  };
  if (character.id === "vey-sable") return {
    status: "Canon",
    affiliation: "Black Book / Wager House",
    routeRole: "Oddsmaker",
    specialty: "Pressure, odds, controlled chaos",
    access: "Black Book file",
    lastSeen: "Terms table",
    knownRoute: "Disputed access",
    circuitPresence: "Off-ledger",
    risk: "Severe",
    chips: ["ODDSMAKER", "BLACK BOOK", "OFF LEDGER"],
  };
  return {
    status: character.status,
    affiliation: character.affiliation,
    routeRole: character.role,
    specialty: character.discipline,
    access: "Character file",
    lastSeen: character.location,
    knownRoute: "Unassigned",
    circuitPresence: "Developing",
    risk: "Unknown",
    chips: character.tags.slice(0, 3).map((tag) => tag.toUpperCase()),
  };
}

export function CharactersView() {
  const { content } = useSiteContent();
  const [selected, setSelected] = useState<Character | null>(null);
  const [filter, setFilter] = useState("ALL");
  const filters = ["ALL", "RIDERS", "ROUXLINE", "LOWLINE", "BLACK BOOK", "OFF LEDGER"];
  const visibleCharacters = content.characters.filter((character) => {
    if (filter === "ALL") return true;
    const meta = getCharacterMeta(character);
    const text = `${character.name} ${character.role} ${character.affiliation} ${character.status} ${character.tags.join(" ")} ${meta.chips.join(" ")}`.toUpperCase();
    if (filter === "RIDERS") return text.includes("RIDER") || text.includes("G-BOARD");
    return text.includes(filter);
  });

  return (
    <>
      <section className="route-hero character-roster-hero">
        <img className="bg" src={content.images[1].url} alt="" />
        <div className="route-hero-inner character-roster-inner">
          <span className="label">Character Files // G//LYDE Roster</span>
          <h1 className="display">
            <span className="split-display-title">
              <span>RIDERS, RIVALS</span>
              <span>& ROUTE GHOSTS</span>
            </span>
          </h1>
          <p>The faces moving through G//LYDE's board culture, from polished circuit talent to off-ledger threats, route fixers, oddsmakers, and house operators.</p>
          <div className="character-hero-actions">
            <Link className="btn primary" href="/submit-rider">Submit Rider File →</Link>
            <Link className="btn" href="/archive">Read Character Journals →</Link>
          </div>
          <div className="character-hero-meta">
            <span>Roster <b>{content.characters.length}</b></span>
            <span>First Arc <b>OFF LEDGER</b></span>
            <span>City <b>Neo Noctis</b></span>
          </div>
        </div>
      </section>
      <section className="section character-roster-section">
        <div className="character-roster-toolbar">
          <div>
            <span className="label">Cast archive</span>
            <h2 className="display">Open the rider files.</h2>
          </div>
          <div className="filters character-filters">
            {filters.map((item) => <button className={`filter-btn ${item === filter ? "active" : ""}`} key={item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
        </div>
        <div className="roster-grid">
          {visibleCharacters.map((character) => {
            const meta = getCharacterMeta(character);
            return (
              <button className="rider-file-card clickable-card" key={character.id} onClick={() => setSelected(character)}>
                <div className="rider-file-image">
                  <img src={character.image} alt={character.name} />
                  <span>{meta.access}</span>
                </div>
                <div className="rider-file-copy">
                  <div className="classification-row">{meta.chips.slice(0, 3).map((chip) => <span key={chip}>{chip}</span>)}</div>
                  <h3 className="display">{character.name}</h3>
                  <p>{character.quote}</p>
                  <div className="rider-meta-grid">
                    <span>STATUS <b>{meta.status}</b></span>
                    <span>AFFILIATION <b>{meta.affiliation}</b></span>
                    <span>ROUTE ROLE <b>{meta.routeRole}</b></span>
                    <span>SPECIALTY <b>{meta.specialty}</b></span>
                  </div>
                  <div className="rider-signal-row">
                    <span>Last Seen <b>{meta.lastSeen}</b></span>
                    <span>Known Route <b>{meta.knownRoute}</b></span>
                    <span>Risk <b>{meta.risk}</b></span>
                  </div>
                  <span className="btn card-cta">View Rider File →</span>
                </div>
              </button>
            );
          })}
        </div>
        <div className="roster-submit-band">
          <div>
            <span className="label">Garage intake</span>
            <h3 className="display">
              <span className="split-display-title">
                <span>Have a rider, route fixer, crew face,</span>
                <span>or board-culture figure?</span>
              </span>
            </h3>
          </div>
          <Link className="btn primary" href="/submit-rider">Add to the Roster →</Link>
        </div>
      </section>
      {selected && <CharacterModal character={selected} meta={getCharacterMeta(selected)} onClose={() => setSelected(null)} />}
    </>
  );
}

function CharacterModal({ character, meta, onClose }: { character: Character; meta: CharacterMeta; onClose: () => void }) {
  const { content } = useSiteContent();
  const archiveEntries = character.archiveIds
    .map((id) => content.archive.find((entry) => entry.id === id))
    .filter((entry): entry is ArchiveEntry => Boolean(entry));
  return (
    <div className="modal-backdrop character-drawer-backdrop" onClick={onClose}>
      <article className="character-drawer" onClick={(event) => event.stopPropagation()}>
        <button className="close" onClick={onClose}>x</button>
        <header className="character-drawer-hero">
          <img src={character.image} alt={character.name} />
          <div>
            <span className="label">{meta.access} // {meta.status}</span>
            <h2 className="display">{character.name}</h2>
            <p>{character.quote}</p>
            <div className="classification-row">{meta.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
          </div>
        </header>
        <div className="character-drawer-layout">
          <main>
            <span className="label">Character file</span>
            <p className="lede">{character.bio}</p>
            <div className="reader-callout">
              <span className="label">World note</span>
              <p>{character.name} matters because G//LYDE is built through people before systems: riders, handlers, route fixers, odds, family pressure, and the price of being seen.</p>
            </div>
            <div className="character-archive-links">
              <span className="label">Related journals / files</span>
              <div className="related-file-grid">
                {archiveEntries.length ? archiveEntries.map((entry) => (
                  <Link className="related-file-card" href="/archive" key={entry.id}>
                    <img src={entry.image} alt="" />
                    <div><span className="label">{entry.category}</span><b>{entry.title}</b><p>{entry.excerpt}</p></div>
                  </Link>
                )) : <p className="muted">No journal files assigned yet.</p>}
              </div>
            </div>
            <CtaButtons ctas={[
              { label: "Read Archive Files", href: "/archive", kind: "primary" },
              { label: "Submit Related Lore", href: "/submit-story", kind: "submission" },
            ]} />
          </main>
          <aside>
            {[
              ["STATUS", meta.status],
              ["AFFILIATION", meta.affiliation],
              ["ROUTE ROLE", meta.routeRole],
              ["BOARD / SPECIALTY", meta.specialty],
              ["ACCESS LEVEL", meta.access],
              ["LAST SEEN", meta.lastSeen],
              ["KNOWN ROUTE", meta.knownRoute],
              ["CIRCUIT PRESENCE", meta.circuitPresence],
              ["RISK LEVEL", meta.risk],
              ["LOCATION", character.location],
            ].map(([label, value]) => <div key={label}><span className="label">{label}</span><b>{value}</b></div>)}
          </aside>
        </div>
      </article>
    </div>
  );
}

function FileModal({
  item,
  onClose,
}: {
  item: {
    title: string;
    category: string;
    image: string;
    definition: string;
    description: string;
    whyItMatters?: string;
    tags?: string[];
    ctas?: Array<{ label: string; href: string; kind: string }>;
  };
  onClose: () => void;
}) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal file-modal" onClick={(event) => event.stopPropagation()}>
        <button className="close" onClick={onClose}>x</button>
        <div className="modal-head">
          <img src={item.image} alt={item.title} />
          <div className="modal-title">
            <span className="label">{item.category}</span>
            <h2 className="display" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", margin: 0 }}>{item.title}</h2>
          </div>
        </div>
        <div className="detail-grid"><span className="label">Definition</span><p>{item.definition}</p></div>
        <div className="detail-grid"><span className="label">Full file</span><p>{item.description}</p></div>
        {item.whyItMatters && <div className="detail-grid"><span className="label">Why it matters</span><p>{item.whyItMatters}</p></div>}
        {item.tags && <div className="detail-grid"><span className="label">Tags</span><div className="tag-row">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>}
        <div className="detail-grid">
          <span className="label">Next route</span>
          <CtaButtons ctas={item.ctas ?? [{ label: "Open the Garage", href: "/garage", kind: "primary" }]} />
        </div>
      </div>
    </div>
  );
}

function ArchiveReader({
  entry,
  entries,
  onClose,
  onSelectEntry,
}: {
  entry: ArchiveEntry;
  entries?: ArchiveEntry[];
  onClose: () => void;
  onSelectEntry?: (entry: ArchiveEntry) => void;
}) {
  const { content } = useSiteContent();
  const allEntries = entries ?? content.archive;
  const entryIndex = allEntries.findIndex((item) => item.id === entry.id);
  const previousEntry = entryIndex > 0 ? allEntries[entryIndex - 1] : null;
  const nextEntry = entryIndex >= 0 && entryIndex < allEntries.length - 1 ? allEntries[entryIndex + 1] : null;
  const relatedCharacters = entry.relatedCharacters
    .map((id) => content.characters.find((character) => character.id === id))
    .filter((character): character is Character => Boolean(character));
  const relatedFactions = entry.relatedFactions
    .map((id) => content.factions.find((faction) => faction.id === id))
    .filter((faction): faction is Faction => Boolean(faction));
  const relatedTerms = content.codex.filter((term) => term.relatedArchiveIds.includes(entry.id)).slice(0, 8);
  const relatedLocations = content.circuits.filter((route) => {
    const text = `${entry.location} ${entry.tags.join(" ")} ${entry.body}`.toLowerCase();
    return text.includes(route.name.toLowerCase()) || route.tags.some((tag) => text.includes(tag.toLowerCase()));
  }).slice(0, 4);
  const relatedEntries = content.archive
    .filter((item) => item.id !== entry.id && (
      item.relatedCharacters.some((id) => entry.relatedCharacters.includes(id)) ||
      item.tags.some((tag) => entry.tags.includes(tag)) ||
      item.relatedFactions.some((id) => entry.relatedFactions.includes(id))
    ))
    .slice(0, 3);
  const paragraphs = entry.body.split(/\n{2,}/).map((part) => part.trim()).filter(Boolean);
  const pullQuote = entry.id === "rouxline-chrome"
    ? "The public saw a lounge. The Lowline saw access."
    : paragraphs.find((paragraph) => paragraph.length < 150 && paragraph.length > 30) ?? entry.excerpt;
  const whyFileMatters = entry.id === "rouxline-chrome"
    ? "The Rouxline is one of the first doors into OFF LEDGER: a place where family pressure, route access, private money, and Neo Noctis nightlife begin to overlap."
    : "The Archive is how G//LYDE opens before Volume 0: story fragments, route lore, character pressure, visual drops, and files that make the sport feel lived in.";
  const selectArchive = (item: ArchiveEntry | null) => {
    if (!item) return;
    onSelectEntry?.(item);
  };

  return (
    <div className="modal-backdrop archive-reader-backdrop" onClick={onClose}>
      <article className="archive-reader" onClick={(event) => event.stopPropagation()}>
        <div className="archive-reader-topbar">
          <button className="btn reader-back-button" onClick={onClose}>Back to Archive</button>
          <div className="archive-reader-meta-strip">
            <span>{entry.category}</span>
            <span>{entry.status}</span>
            <span>{entry.publishDate}</span>
            <span>{entry.source}</span>
          </div>
        </div>
        <header className="archive-reader-hero">
          <img src={entry.image} alt={entry.title} />
          <div className="archive-reader-title">
            <span className="label">G//LYDE Archive File</span>
            <h2 className="display">{entry.title}</h2>
            <p>{entry.excerpt}</p>
            <div className="reader-chip-row">
              {relatedCharacters.map((character) => <Link href="/characters" key={character.id}>{character.name}</Link>)}
              {relatedLocations.map((route) => <Link href="/routes-cities" key={route.id}>{route.name}</Link>)}
              {!relatedCharacters.length && <span>{entry.location}</span>}
            </div>
          </div>
        </header>
        <div className="archive-reader-layout">
          <main className="archive-reader-body">
            <div className="archive-body-header">
              <span className="label">Story file</span>
              <div className="archive-file-code">FILE // {entry.id.toUpperCase()}</div>
            </div>
            {paragraphs.map((paragraph, index) => (
              <p className={index === 0 ? "lede" : ""} key={`${entry.id}-${index}`}>{paragraph}</p>
            ))}
            <blockquote className="archive-pullquote">{pullQuote}</blockquote>
            <div className="reader-callout">
              <span className="label">Why this file exists</span>
              <p>{whyFileMatters}</p>
            </div>
            <div className="reader-gallery">
              <img src={entry.image} alt="" />
              {relatedCharacters.slice(0, 2).map((character) => <img src={character.image} alt={character.name} key={character.id} />)}
            </div>
            <div className="archive-related-grid">
              <section>
                <span className="label">Related Codex</span>
                <div className="reader-chip-row">{relatedTerms.length ? relatedTerms.map((term) => <Link href="/codex" key={term.id}>{term.term}</Link>) : <span>No Codex links yet</span>}</div>
              </section>
              <section>
                <span className="label">Related Characters</span>
                <div className="reader-chip-row">{relatedCharacters.length ? relatedCharacters.map((character) => <Link href="/characters" key={character.id}>{character.name}</Link>) : <span>Unassigned</span>}</div>
              </section>
              <section>
                <span className="label">Related Locations</span>
                <div className="reader-chip-row">{relatedLocations.length ? relatedLocations.map((route) => <Link href="/routes-cities" key={route.id}>{route.name}</Link>) : <span>{entry.location}</span>}</div>
              </section>
              <section>
                <span className="label">Institutions</span>
                <div className="reader-chip-row">{relatedFactions.length ? relatedFactions.map((faction) => <Link href="/factions" key={faction.id}>{faction.name}</Link>) : <span>Unassigned</span>}</div>
              </section>
            </div>
            {relatedEntries.length > 0 && (
              <section className="archive-related-files">
                <span className="label">Related Archive Files</span>
                <div className="related-file-grid">
                  {relatedEntries.map((item) => (
                    <button className="related-file-card clickable-card" onClick={() => selectArchive(item)} key={item.id}>
                      <img src={item.image} alt="" />
                      <div><span className="label">{item.category}</span><b>{item.title}</b><p>{item.excerpt}</p></div>
                    </button>
                  ))}
                </div>
              </section>
            )}
            <div className="tag-row">{entry.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          </main>
          <aside className="archive-reader-rail">
            <div><span className="label">Source</span><b>{entry.source}</b></div>
            <div><span className="label">Location</span><b>{entry.location}</b></div>
            <div><span className="label">Canon status</span><b>{entry.status}</b></div>
            <div><span className="label">Category</span><b>{entry.category}</b></div>
            <div><span className="label">Next actions</span><Link className="btn primary" href="/garage">Submit Related Lore →</Link><Link className="btn" href="/support-a-drop">Support A Visual Drop →</Link></div>
          </aside>
        </div>
        <footer className="archive-reader-footer">
          <button className="file-nav-card" disabled={!previousEntry} onClick={() => selectArchive(previousEntry)}>
            <span className="label">Previous File</span>
            <b>{previousEntry?.title ?? "Start of archive"}</b>
          </button>
          <button className="file-nav-card" disabled={!nextEntry} onClick={() => selectArchive(nextEntry)}>
            <span className="label">Next File</span>
            <b>{nextEntry?.title ?? "End of archive"}</b>
          </button>
          <Link className="btn primary" href="/garage">Submit Related Lore →</Link>
          <Link className="btn" href="/support-a-drop">Support A Visual Drop →</Link>
          <button className="btn" onClick={onClose}>Back to Archive</button>
        </footer>
      </article>
    </div>
  );
}

function CodexReader({
  term,
  onClose,
  onSelectTerm,
}: {
  term: CodexTerm;
  onClose: () => void;
  onSelectTerm: (term: CodexTerm) => void;
}) {
  const { content } = useSiteContent();
  const relatedCharacters = term.relatedCharacterIds
    .map((id) => content.characters.find((character) => character.id === id))
    .filter((character): character is Character => Boolean(character));
  const relatedArchive = term.relatedArchiveIds
    .map((id) => content.archive.find((entry) => entry.id === id))
    .filter((entry): entry is ArchiveEntry => Boolean(entry));
  const relatedRoutes = (term.relatedCircuitIds ?? [])
    .map((id) => content.circuits.find((route) => route.id === id))
    .filter((route): route is Circuit => Boolean(route));
  const relatedTerms = term.relatedTerms
    .map((name) => {
      const normalized = name.toLowerCase();
      return content.codex.find((item) => item.term.toLowerCase() === normalized || item.id === normalized.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
    })
    .filter((item): item is CodexTerm => Boolean(item));

  return (
    <div className="modal-backdrop archive-reader-backdrop" onClick={onClose}>
      <article className="codex-reader" onClick={(event) => event.stopPropagation()}>
        <button className="close reader-close" onClick={onClose}>x</button>
        <header className="codex-reader-hero">
          <img src={term.image} alt={term.term} />
          <div className="codex-reader-title">
            <span className="label">Codex File // {term.category}</span>
            <h2 className="display">{term.term}</h2>
            <p>{term.definition}</p>
          </div>
        </header>
        <div className="codex-reader-layout">
          <aside className="codex-reader-rail">
            <div><span className="label">Category</span><b>{term.category}</b></div>
            <div><span className="label">Related characters</span>{relatedCharacters.length ? relatedCharacters.map((character) => <b key={character.id}>{character.name}</b>) : <b>None yet</b>}</div>
            <div><span className="label">Related routes / cities</span>{relatedRoutes.length ? relatedRoutes.map((route) => <b key={route.id}>{route.name}</b>) : <b>Unmapped</b>}</div>
            <div><span className="label">Tags</span><div className="tag-row">{term.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
          </aside>
          <main className="codex-reader-body">
            <section>
              <span className="label">Expanded file</span>
              <p className="lede">{term.fullDescription}</p>
            </section>
            <section className="reader-callout">
              <span className="label">Why it matters</span>
              <p>{term.whyItMatters}</p>
            </section>
            <section>
              <span className="label">In-world example</span>
              <p>{term.usage}</p>
            </section>
            <section>
              <div className="reader-section-title">
                <span className="label">Related files</span>
                <Link className="text-link" href="/archive">Open Archive →</Link>
              </div>
              <div className="related-file-grid">
                {relatedArchive.length ? relatedArchive.map((entry) => (
                  <Link className="related-file-card" href="/archive" key={entry.id}>
                    <img src={entry.image} alt="" />
                    <div><span className="label">{entry.category}</span><b>{entry.title}</b><p>{entry.excerpt}</p></div>
                  </Link>
                )) : <p className="muted">No archive file is attached yet. This is a clean place for a future drop.</p>}
              </div>
            </section>
            <section>
              <span className="label">Related terms</span>
              <div className="codex-term-links">
                {relatedTerms.length ? relatedTerms.map((related) => (
                  <button key={related.id} onClick={() => onSelectTerm(related)}>{related.term}</button>
                )) : <span className="muted">No linked term files yet.</span>}
              </div>
            </section>
            <CtaButtons ctas={[
              { label: "Submit Related Lore", href: "/garage", kind: "submission" },
              { label: "Support A Visual Drop", href: "/support-a-drop", kind: "support" },
              { label: "Open Routes & Cities", href: "/routes-cities", kind: "secondary" },
            ]} />
          </main>
        </div>
      </article>
    </div>
  );
}

function ArchiveCard({ entry, onOpen }: { entry: ArchiveEntry; onOpen?: (entry: ArchiveEntry) => void }) {
  const inner = (
    <>
      <div className="card-img"><img src={entry.image} alt={entry.title} /></div>
      <div className="card-body">
        <span className="label">{entry.category} // {entry.status}</span>
        <h3 className="display">{entry.title}</h3>
        <p className="muted">{entry.excerpt}</p>
        <div className="tag-row">{entry.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        <span className="btn card-cta">Read File →</span>
      </div>
    </>
  );
  if (onOpen) {
    return <button className="card archive-card clickable-card" onClick={() => onOpen(entry)}>{inner}</button>;
  }
  return (
    <Link className="card archive-card" href="/archive">
      {inner}
    </Link>
  );
}

export function ArchiveView() {
  const { content } = useSiteContent();
  const categories = useMemo(() => ["All", ...Array.from(new Set(content.archive.map((entry) => entry.category)))], [content.archive]);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ArchiveEntry | null>(null);
  const entries = content.archive.filter((entry) => {
    const matchesCategory = category === "All" || entry.category === category;
    const text = `${entry.title} ${entry.category} ${entry.source} ${entry.location} ${entry.excerpt} ${entry.body} ${entry.tags.join(" ")}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase());
  });
  const offLedgerEntries = content.archive.filter((entry) => ["kellan-rooftop", "rouxline-chrome", "gate-8", "off-ledger-run"].includes(entry.id));
  const journalEntries = content.archive.filter((entry) => entry.category.toLowerCase().includes("rider") || entry.category.toLowerCase().includes("character")).slice(0, 4);
  const visualEntries = content.archive.filter((entry) => entry.category.toLowerCase().includes("visual") || entry.tags.some((tag) => tag.toLowerCase().includes("visual"))).slice(0, 4);

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "THE ARCHIVE",
          title: "STORY FILES, CHARACTER JOURNALS, ROUTE NOTES, G//NET CLIPS, AND VISUAL DROPS FROM G//LYDE.",
          body: "Before Volume 0, the world opens through files: fragments, journals, rumors, records, and illustrated entries that reveal the sport one route at a time.",
          image: content.images[0].url,
          ctas: [{ label: "Start OFF LEDGER", href: "#reading-order", kind: "primary" }, { label: "Latest Files", href: "#entries", kind: "secondary" }],
        }
      }} />
      <section id="reading-order" className="section archive-hub-section">
        <div className="section-head">
          <div><span className="label">Featured reading order</span><h2 className="display">OFF LEDGER opens the archive.</h2></div>
          <p className="lead">Start with the first files: a rooftop, a private room, a route-access problem, and the leaked run that makes Neo Noctis pay attention.</p>
        </div>
        <div className="archive-reading-order">
          {offLedgerEntries.map((entry, index) => (
            <button className="archive-order-card clickable-card" onClick={() => setSelected(entry)} key={entry.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img src={entry.image} alt="" />
              <div><span className="label">{entry.category}</span><h3 className="display">{entry.title}</h3><p>{entry.excerpt}</p></div>
            </button>
          ))}
        </div>
      </section>
      <section className="section archive-hub-section archive-secondary-section">
        <div className="section-head">
          <div><span className="label">Journals and visual drops</span><h2 className="display">Read the world before it becomes Volume 0.</h2></div>
          <p className="lead">Character pressure, route lore, visual references, Black Book notes, and G//NET fragments live here as official story files.</p>
        </div>
        <div className="grid two">
          <div>
            <span className="label">Character journals</span>
            <div className="archive-mini-list">{journalEntries.map((entry) => <button key={entry.id} onClick={() => setSelected(entry)}><b>{entry.title}</b><span>{entry.excerpt}</span></button>)}</div>
          </div>
          <div>
            <span className="label">Visual drops</span>
            <div className="archive-mini-list">{(visualEntries.length ? visualEntries : content.archive.slice(0, 4)).map((entry) => <button key={entry.id} onClick={() => setSelected(entry)}><b>{entry.title}</b><span>{entry.category} // {entry.status}</span></button>)}</div>
          </div>
        </div>
      </section>
      <section id="entries" className="section archive-index-section">
        <div className="section-head">
          <div><span className="label">Latest files</span><h2 className="display">Open the archive index.</h2></div>
          <label className="field archive-search"><span className="label">Search files</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rouxline, Gate 8, Kellan, Lowline..." /></label>
        </div>
        <div className="filters">{categories.map((item) => <button key={item} className={`filter-btn ${item === category ? "active" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="grid">{entries.map((entry) => <ArchiveCard key={entry.id} entry={entry} onOpen={setSelected} />)}</div>
      </section>
      {selected && (
        <ArchiveReader
          onClose={() => setSelected(null)}
          entry={selected}
          entries={content.archive}
          onSelectEntry={setSelected}
        />
      )}
    </>
  );
}

type FactionPowerMeta = {
  classification: string;
  type: string;
  influence: string;
  control: string;
  access: string;
  territory: string;
  riderRelationship: string;
  strength: number;
  alliedWith: string[];
  tensionWith: string[];
  controls: string[];
  seeks: string;
  exploits: string;
  chips: string[];
};

type FactionDossier = {
  id: string;
  number: string;
  title: string;
  type: string;
  access: string;
  priority: string;
  body: string;
  detail: string;
  controls: string[];
  tension: string;
  image: string;
};

function getFactionPowerMeta(faction: Faction): FactionPowerMeta {
  const index: Record<string, FactionPowerMeta> = {
    "glyde-authority": {
      classification: "Institutions",
      type: "Regulator",
      influence: "Official surface",
      control: "Licenses, certification, sanctioned events",
      access: "Official",
      territory: "Sponsor Circuit",
      riderRelationship: "Grants legitimacy, restricts freedom",
      strength: 82,
      alliedWith: ["Grand Cup Committee", "The Index"],
      tensionWith: ["Lowline Crews", "The Black Book"],
      controls: ["Licenses", "Sanctioned circuits", "Equipment certification"],
      seeks: "Order, sponsor safety, and a sport that can be sold cleanly.",
      exploits: "Every rider's need to be recognized by the official surface.",
      chips: ["LICENSES", "CERTIFICATION", "SANCTIONED"],
    },
    "grand-cup-committee": {
      classification: "Institutions",
      type: "Championship Control",
      influence: "Prestige system",
      control: "Qualification, mythology, host worlds",
      access: "Elite",
      territory: "Official circuit",
      riderRelationship: "Turns talent into myth, but owns the stage",
      strength: 88,
      alliedWith: ["G//LYDE Authority", "Sponsors"],
      tensionWith: ["G//NET", "Lowline Crews"],
      controls: ["Host selection", "Cup qualification", "Broadcast prestige"],
      seeks: "A clean ladder from local talent to interplanetary legend.",
      exploits: "The dream every rider has of being impossible to ignore.",
      chips: ["GRAND CUP", "HOST WORLDS", "PRESTIGE"],
    },
    "gnet": {
      classification: "Networks",
      type: "Broadcast / Social Racing Network",
      influence: "Visibility",
      control: "Clips, rankings, signal, public memory",
      access: "Everywhere",
      territory: "Any feed with a signal",
      riderRelationship: "Makes you visible, then makes you valuable",
      strength: 94,
      alliedWith: ["The Index", "Sponsors"],
      tensionWith: ["G//LYDE Authority", "The Ledger"],
      controls: ["Attention", "Clip velocity", "Public memory"],
      seeks: "The moment before anyone knows how to price it.",
      exploits: "Riders who confuse being seen with being free.",
      chips: ["SIGNAL", "CLIPS", "MEMORY"],
    },
    "the-index": {
      classification: "Networks",
      type: "Market Intelligence",
      influence: "Value calculation",
      control: "Rankings, sponsor projections, scouting",
      access: "Corporate",
      territory: "Sponsor decks / scouting rooms",
      riderRelationship: "Turns motion into a number sponsors can buy",
      strength: 86,
      alliedWith: ["G//NET", "Sponsors"],
      tensionWith: ["The Black Book", "Independent riders"],
      controls: ["Market value", "Sponsor projections", "Scout language"],
      seeks: "Proof that talent can be forecast before it becomes power.",
      exploits: "The gap between what a rider is worth and what they know.",
      chips: ["RANKINGS", "VALUE", "SCOUTING"],
    },
    "the-ledger": {
      classification: "Institutions",
      type: "Record System",
      influence: "Official consequence",
      control: "Contracts, route rights, obligations",
      access: "Restricted",
      territory: "Contracts / route claims",
      riderRelationship: "Records what can be enforced",
      strength: 80,
      alliedWith: ["G//LYDE Authority", "Handlers"],
      tensionWith: ["The Black Book", "Off-Ledger Networks"],
      controls: ["Contracts", "Route rights", "Recorded obligations"],
      seeks: "A world where every consequence has a line item.",
      exploits: "Riders desperate enough to sign before they understand.",
      chips: ["CONTRACTS", "ROUTE RIGHTS", "RECORD"],
    },
    "the-black-book": {
      classification: "Wager Systems",
      type: "Underground Memory",
      influence: "Debt / private terms",
      control: "Wagers, pressure, off-ledger matches",
      access: "Black",
      territory: "Lowline / private rooms",
      riderRelationship: "Funds risk, collects consequences",
      strength: 91,
      alliedWith: ["Wager Houses", "Oddsmakers"],
      tensionWith: ["The Ledger", "G//LYDE Authority"],
      controls: ["Debt", "Private terms", "Unrecorded pressure"],
      seeks: "Leverage that survives after the feed goes quiet.",
      exploits: "Every run someone needed badly enough to accept the terms.",
      chips: ["DEBT", "TERMS", "OFF LEDGER"],
    },
    "wager-houses": {
      classification: "Houses",
      type: "Private Betting Houses",
      influence: "Money under pressure",
      control: "Stakes, odds, private challenges",
      access: "Selective",
      territory: "Luxury rooms / Lowline doors",
      riderRelationship: "Raises the prize and hides the cost",
      strength: 84,
      alliedWith: ["Oddsmakers", "The Black Book"],
      tensionWith: ["G//LYDE Authority", "The Rouxline"],
      controls: ["Private stakes", "Quiet challenges", "Risk pricing"],
      seeks: "Races where the visible prize is smaller than the hidden value.",
      exploits: "Ambition, debt, and the need to move fast tonight.",
      chips: ["WAGERS", "HOUSES", "PRIVATE TERMS"],
    },
    oddsmakers: {
      classification: "Wager Systems",
      type: "Risk Pricers",
      influence: "Terms / odds",
      control: "Rider value, route risk, impossible outcomes",
      access: "Selective",
      territory: "Wherever a run can be priced",
      riderRelationship: "Turns talent into leverage",
      strength: 78,
      alliedWith: ["Wager Houses", "The Black Book"],
      tensionWith: ["Handlers", "Rouxline riders"],
      controls: ["Odds", "Pressure", "Terms"],
      seeks: "The number that makes a rider say yes.",
      exploits: "The distance between confidence and desperation.",
      chips: ["ODDS", "RISK", "VEY SABLE"],
    },
    handlers: {
      classification: "Off Ledger",
      type: "Access Logistics",
      influence: "Doors / introductions",
      control: "Meetings, route rights, quiet runs",
      access: "Private",
      territory: "Back rooms / route corridors",
      riderRelationship: "Can protect a rider or package them for sale",
      strength: 73,
      alliedWith: ["The Ledger", "Private houses"],
      tensionWith: ["Oddsmakers", "Street crews"],
      controls: ["Introductions", "Private runs", "Quiet logistics"],
      seeks: "Control over who gets in the room before the room is named.",
      exploits: "Riders with talent, heat, and no clean door upward.",
      chips: ["ACCESS", "DEALS", "ROOMS"],
    },
    "lowline-crews": {
      classification: "Crews",
      type: "Street Crews",
      influence: "Local route memory",
      control: "Territory, protection, route knowledge",
      access: "Street",
      territory: "The Lowline",
      riderRelationship: "Protects local talent, tests outsiders",
      strength: 76,
      alliedWith: ["Mechanics", "Independent riders"],
      tensionWith: ["G//LYDE Authority", "Wager Houses"],
      controls: ["Local routes", "Street reputation", "Crew protection"],
      seeks: "Freedom from systems that profit from their movement.",
      exploits: "No one. The best crews survive by remembering who did.",
      chips: ["LOWLINE", "CREWS", "ROUTE MEMORY"],
    },
  };

  return index[faction.id] ?? {
    classification: "Sponsors",
    type: faction.role,
    influence: "Special interest",
    control: faction.agenda,
    access: "Variable",
    territory: "Neo Noctis",
    riderRelationship: "Shapes opportunity around riders",
    strength: 64,
    alliedWith: ["Sponsors"],
    tensionWith: ["Lowline Crews"],
    controls: faction.tags,
    seeks: faction.agenda,
    exploits: "The space between visibility and ownership.",
    chips: faction.tags.map((tag) => tag.toUpperCase()),
  };
}

function FactionDossierDrawer({ dossier, onClose }: { dossier: FactionDossier; onClose: () => void }) {
  return (
    <div className="character-drawer-backdrop" role="dialog" aria-modal="true">
      <article className="faction-drawer">
        <button className="reader-back-button drawer-close" onClick={onClose}>Back to Network</button>
        <div className="faction-drawer-hero">
          <img src={dossier.image} alt="" />
          <div>
            <span className="label">{dossier.number} // {dossier.type} // {dossier.access}</span>
            <h2 className="display"><SplitDisplayTitle text={dossier.title} /></h2>
            <p>{dossier.body}</p>
          </div>
        </div>
        <div className="faction-drawer-grid">
          <main>
            <span className="label">Classified read</span>
            <p className="lede">{dossier.detail}</p>
            <div className="faction-relation-grid">
              <div><span>Controls</span><b>{dossier.controls.join(" / ")}</b></div>
              <div><span>Access Level</span><b>{dossier.access}</b></div>
              <div><span>Priority</span><b>{dossier.priority}</b></div>
              <div><span>Pressure Point</span><b>{dossier.tension}</b></div>
              <div className="wide"><span>Rider Consequence</span><b>Every alignment can become a door, a price, or a leash.</b></div>
            </div>
          </main>
          <aside>
            <div><span>FACTION TYPE</span><b>{dossier.type}</b></div>
            <div><span>WHAT THEY SHAPE</span><b>{dossier.controls.join(", ")}</b></div>
            <div><span>KNOWN TERRITORY</span><b>{dossier.access}</b></div>
            <CtaButtons ctas={[
              { label: "Study the Network", href: "/factions#power-map", kind: "primary" },
              { label: "Open the Black Book", href: "/codex", kind: "secondary" },
              { label: "Return to Archive", href: "/archive", kind: "secondary" },
            ]} />
          </aside>
        </div>
      </article>
    </div>
  );
}

function FactionDrawer({ faction, meta, onClose }: { faction: Faction; meta: FactionPowerMeta; onClose: () => void }) {
  return (
    <div className="character-drawer-backdrop" role="dialog" aria-modal="true">
      <article className="faction-drawer">
        <button className="reader-back-button drawer-close" onClick={onClose}>Back to Power Map</button>
        <div className="faction-drawer-hero">
          <img src={faction.image} alt="" />
          <div>
            <span className="label">{meta.type} // {meta.influence}</span>
            <h2 className="display"><SplitDisplayTitle text={faction.name} /></h2>
            <p>{faction.description}</p>
          </div>
        </div>
        <div className="faction-drawer-grid">
          <main>
            <span className="label">Power file</span>
            <p className="lede">{faction.agenda}</p>
            <div className="faction-relation-grid">
              <div><span>Allied With</span><b>{meta.alliedWith.join(" / ")}</b></div>
              <div><span>In Tension With</span><b>{meta.tensionWith.join(" / ")}</b></div>
              <div><span>Controls</span><b>{meta.controls.join(" / ")}</b></div>
              <div><span>Seeks</span><b>{meta.seeks}</b></div>
              <div className="wide"><span>Exploits</span><b>{meta.exploits}</b></div>
            </div>
            <div className="faction-control-tags">{meta.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
          </main>
          <aside>
            <div><span>TYPE</span><b>{meta.type}</b></div>
            <div><span>CONTROL</span><b>{meta.control}</b></div>
            <div><span>ACCESS LEVEL</span><b>{meta.access}</b></div>
            <div><span>KNOWN TERRITORY</span><b>{meta.territory}</b></div>
            <div><span>RELATIONSHIP TO RIDERS</span><b>{meta.riderRelationship}</b></div>
            <CtaButtons ctas={[
              { label: "Open Archive", href: "/archive", kind: "primary" },
              { label: "Trace Routes", href: "/routes-cities", kind: "secondary" },
              { label: "Submit Related Lore", href: "/garage", kind: "secondary" },
            ]} />
          </aside>
        </div>
      </article>
    </div>
  );
}

export function CollectionView({ type }: { type: "circuits" | "factions" }) {
  const { content } = useSiteContent();
  const [selected, setSelected] = useState<Circuit | Faction | null>(null);
  const [selectedDossier, setSelectedDossier] = useState<FactionDossier | null>(null);
  const [factionFilter, setFactionFilter] = useState("All");
  const isCircuits = type === "circuits";
  const items = isCircuits ? content.circuits : content.factions;
  const powerLanes = [
    { title: "Equipment", body: "Boards, G-Skins, recovered Core handling, telemetry, tuning rooms, and who gets the good build." },
    { title: "Visibility", body: "Feeds, editors, rankings, clips, scandals, mythmaking, and who the city remembers." },
    { title: "Access", body: "Rider houses, routekeepers, private gates, rooftop lines, and the rooms that open before a run." },
    { title: "Money", body: "Sponsor contracts, private backers, wager pressure, debt terms, and consequences nobody puts in the release." },
  ];
  const factionFilters = ["All", "Institutions", "Houses", "Crews", "Sponsors", "Wager Systems", "Networks", "Off Ledger"];

  if (!isCircuits) {
    const factionDossiers: FactionDossier[] = [
      {
        id: "sanctioning-bodies",
        number: "01",
        title: "Sanctioning Bodies",
        type: "Officials",
        access: "Public legitimacy",
        priority: "Official",
        body: "The official authorities behind licenses, events, rankings, penalties, and public legitimacy.",
        detail: "They sell order. They decide what counts, which results matter, what gear passes inspection, and when a rider becomes too dangerous to keep visible.",
        controls: ["Licenses", "Events", "Rankings", "Penalties"],
        tension: "They need spectacle, but not the kind that exposes how the sport really moves.",
        image: content.images[2].url,
      },
      {
        id: "sponsor-houses",
        number: "02",
        title: "Sponsor Houses",
        type: "Patron money",
        access: "Contracts / image rights",
        priority: "High",
        body: "Fashion labels, beverage brands, tech patrons, luxury houses, and private backers turning riders into symbols.",
        detail: "Sponsor houses buy more than visibility. They buy posture, language, color, public emotion, and the right to make a rider mean something profitable.",
        controls: ["Contracts", "Brand identity", "Travel", "Public image"],
        tension: "The deal that saves a rider can become the room they cannot leave.",
        image: content.images[1].url,
      },
      {
        id: "manufacturers",
        number: "03",
        title: "Manufacturers",
        type: "Equipment power",
        access: "Boards / G-Skins / telemetry",
        priority: "High",
        body: "Boardmakers, G-Skin houses, Core handlers, telemetry firms, and design labs shaping the equipment behind the sport.",
        detail: "Manufacturers decide who rides clean, who rides loud, who gets prototype response, and who becomes test data without knowing it.",
        controls: ["G-Boards", "G-Skins", "Telemetry", "Core interfaces"],
        tension: "Recovered technology does not belong to the street, but the street keeps finding ways to adapt it.",
        image: content.images[3].url,
      },
      {
        id: "broadcast-houses",
        number: "04",
        title: "Broadcast Houses",
        type: "Media power",
        access: "Feeds / edits / memory",
        priority: "High",
        body: "The feeds, editors, stream networks, and media syndicates turning riders into icons or erasing them overnight.",
        detail: "Broadcast houses do not only report the sport. They choose the angle, replay the mistake, bury the debt, and decide which rider becomes a face.",
        controls: ["Clips", "Narratives", "Public memory", "Scandal velocity"],
        tension: "G//NET can make a rider visible faster than anyone can protect them.",
        image: content.images[0].url,
      },
      {
        id: "routekeepers",
        number: "05",
        title: "Routekeepers",
        type: "Access control",
        access: "City lines / private gates",
        priority: "Selective",
        body: "Local operators who control corridors, rooftops, shortcuts, private gates, and the knowledge needed to survive a city line.",
        detail: "Routekeepers know which door opens, which drop is watched, and which line has already been promised to someone else.",
        controls: ["Corridors", "Rooftops", "Gates", "Shortcut memory"],
        tension: "They rarely look powerful until the rider needs to move without being seen.",
        image: content.images[2].url,
      },
      {
        id: "rider-houses",
        number: "06",
        title: "Rider Houses",
        type: "Talent systems",
        access: "Training / styling / patron circles",
        priority: "High",
        body: "Elite training rooms, salons, academies, and patron circles where riders are recruited, styled, funded, and owned.",
        detail: "A rider house can teach discipline, protect a name, hide a problem, or turn a person into property with better lighting.",
        controls: ["Training", "Introductions", "Style language", "Private funding"],
        tension: "Family, ambition, loyalty, and ownership blur fastest inside a beautiful room.",
        image: content.images[1].url,
      },
      {
        id: "street-crews",
        number: "07",
        title: "Street Crews",
        type: "Lowline power",
        access: "Neighborhood routes",
        priority: "Essential",
        body: "Lowline families, mechanics, runners, spotters, and neighborhood riders who protect reputation outside the polished circuit.",
        detail: "Street crews carry the memory official broadcasts clean up. They know who earned the line, who bought it, and who should not be trusted near it.",
        controls: ["Reputation", "Protection", "Repair", "Local route memory"],
        tension: "The official sport harvests Lowline style while pretending the Lowline is a problem.",
        image: content.images[0].url,
      },
      {
        id: "wager-cartels",
        number: "08",
        title: "Wager Cartels",
        type: "Off-ledger money",
        access: "Private stakes",
        priority: "Danger",
        body: "The money behind odds, private stakes, fixed races, debt pressure, and consequences no sponsor will acknowledge.",
        detail: "Wager cartels price courage, fear, timing, and desperation. They can turn a private run into a career or a debt that outlives the clip.",
        controls: ["Odds", "Debt", "Private stakes", "Fixed pressure"],
        tension: "The sport pretends money follows performance. The cartels know money can design it.",
        image: content.images[2].url,
      },
      {
        id: "off-ledger-networks",
        number: "09",
        title: "Off-Ledger Networks",
        type: "Hidden economy",
        access: "Black routes / private channels",
        priority: "Black",
        body: "Private channels, black routes, unlicensed races, hidden archives, and the economy beneath the visible sport.",
        detail: "Off-ledger networks move when the official map closes. They remember unlicensed runs, leaked routes, hidden clips, and people the public record cannot admit exist.",
        controls: ["Black routes", "Private channels", "Hidden archives", "Unlicensed races"],
        tension: "Off Ledger does not mean without consequence. It means without protection.",
        image: content.images[3].url,
      },
    ];

    return (
      <>
        <RouteHero page={{
          hero: {
            eyebrow: "Classified factions // sport politics",
            title: "FACTIONS CONTROL WHAT THE SPORT REFUSES TO SAY OUT LOUD.",
            body: "G//LYDE is sold as speed, style, and sanctioned spectacle.\n\nBehind the feed, the world is shaped by sponsors, manufacturers, rider houses, street crews, routekeepers, media networks, officials, and off-ledger money. They decide who gets equipment, who gets seen, who gets protected, who gets invited, and who gets erased.\n\nTo ride is one thing.\n\nTo matter, you need alignment.",
            image: content.images[2].url,
            ctas: [
              { label: "Study the Network", href: "#power-map", kind: "primary" },
              { label: "Open the Black Book", href: "/codex", kind: "secondary" },
              { label: "Return to Archive", href: "/archive", kind: "secondary" },
            ],
          }
        }} />

        <section id="power-map" className="section faction-map-section">
          <div className="section-head">
            <div>
              <span className="label">Network overview</span>
              <h2 className="display">A rider's career is built by forces the feed barely names.</h2>
            </div>
            <p>Every route has a visible line and a hidden owner. Every public myth has a private backing structure.</p>
          </div>
          <div className="power-lane-grid">
            {powerLanes.map((lane, index) => (
              <div className="power-lane-card" key={lane.title} style={{ "--lane-index": index } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{lane.title}</h3>
                <p>{lane.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section faction-index-section">
          <div className="section-head">
            <div>
              <span className="label">Faction dossiers</span>
              <h2 className="display">Power centers beneath the sport.</h2>
            </div>
            <p>Who backs the rider. Who watches the rider. Who owns the terms when the rider finally matters.</p>
          </div>
          <div className="faction-dossier-grid">
            {factionDossiers.map((dossier) => (
                <button className="faction-dossier-card" key={dossier.id} onClick={() => setSelectedDossier(dossier)}>
                  <div className="faction-card-media">
                    <img src={dossier.image} alt="" />
                    <span>{dossier.number} // {dossier.type}</span>
                  </div>
                  <div className="faction-card-body">
                    <span className="label">{dossier.access}</span>
                    <h3 className="display"><SplitDisplayTitle text={dossier.title} /></h3>
                    <p>{dossier.body}</p>
                    <div className="faction-meta-grid">
                      <div><span>CALLSIGN</span><b>{dossier.number}</b></div>
                      <div><span>TYPE</span><b>{dossier.type}</b></div>
                      <div><span>ACCESS</span><b>{dossier.access}</b></div>
                      <div><span>PRIORITY</span><b>{dossier.priority}</b></div>
                    </div>
                    <div className="faction-meter" aria-label={`${dossier.title} pressure meter`}><span style={{ width: `${Math.min(96, 55 + Number(dossier.number) * 4)}%` }} /></div>
                    <div className="faction-control-tags">{dossier.controls.slice(0, 3).map((chip) => <span key={chip}>{chip.toUpperCase()}</span>)}</div>
                  </div>
                  <span className="btn card-cta">Study the Network →</span>
                </button>
              ))}
          </div>
          <div className="faction-closing-callout">
            <span className="label">Closing file</span>
            <h3 className="display">EVERY RIDER IS BACKED, WATCHED, OR OWNED BY SOMEONE.</h3>
            <p>The dangerous ones are claimed by more than one faction.</p>
            <CtaButtons ctas={[
              { label: "Open the Black Book", href: "/codex", kind: "primary" },
              { label: "Return to Archive", href: "/archive", kind: "secondary" },
            ]} />
          </div>
        </section>

        {selectedDossier && <FactionDossierDrawer dossier={selectedDossier} onClose={() => setSelectedDossier(null)} />}
      </>
    );
  }

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: isCircuits ? "Routes & Cities" : "Power blocs",
          title: isCircuits ? "PLANET. CITY. DISTRICT. ROUTE. GATE. CIRCUIT. EVERY LINE HAS A PRICE." : "G//NET MAKES YOU VISIBLE. THE INDEX PRICES YOU. THE BLACK BOOK REMEMBERS WHAT YOU OWE.",
          body: isCircuits ? "A city is not a circuit. Explore the places, gates, tracks, districts, and routes where board culture becomes status, risk, and story." : "The institutions, houses, crews, manufacturers, sponsors, and unofficial systems that control movement, visibility, terms, and debt.",
          image: isCircuits ? content.images[3].url : content.images[2].url,
          ctas: [{ label: isCircuits ? "Submit a Route or City" : "Open the Garage", href: isCircuits ? "/submit-circuit" : "/garage", kind: "primary" }],
        }
      }} />
      <section className="section">
        <div className="grid">
          {items.map((item: any) => (
            <button className="card clickable-card" key={item.id} onClick={() => setSelected(item)}>
              <div className="card-img"><img src={item.image} alt={item.name} /></div>
              <div className="card-body">
                <span className="label">{isCircuits ? `${item.planet} // ${item.status}` : item.role}</span>
                <h3 className="display">{item.name}</h3>
                <p className="muted">{isCircuits ? item.description : item.description}</p>
                <div className="tag-row">{(item.tags || []).map((tag: string) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
              <span className="btn card-cta">Open File →</span>
            </button>
          ))}
        </div>
      </section>
      {selected && (
        <FileModal
          onClose={() => setSelected(null)}
          item={{
            title: "name" in selected ? selected.name : "",
            category: isCircuits ? "Route / City file" : "Faction / Power bloc",
            image: selected.image,
            definition: isCircuits ? `${(selected as Circuit).planet} // ${(selected as Circuit).status}` : (selected as Faction).role,
            description: selected.description,
            whyItMatters: isCircuits ? `${(selected as Circuit).risk} // ${(selected as Circuit).discipline}` : (selected as Faction).agenda,
            tags: selected.tags,
            ctas: [{ label: isCircuits ? "Submit a Route or City" : "Build in the Garage", href: isCircuits ? "/submit-circuit" : "/garage", kind: "primary" }],
          }}
        />
      )}
    </>
  );
}

export function OffLedgerView() {
  const { content } = useSiteContent();
  const entries = content.homepage.latestDropIds
    .map((id) => content.archive.find((entry) => entry.id === id))
    .filter((entry): entry is ArchiveEntry => Boolean(entry));
  const keyCharacters = content.characters.filter((character) => ["kellan-roux", "gio-roux", "uno-roux", "vey-sable"].includes(character.id));

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "OFF LEDGER // First arc",
          title: "THE RUN THAT WAS SUPPOSED TO STAY QUIET.",
          body: "A private challenge over Gate 8 turns The Rouxline into a public pressure point. No broadcast. No record. No protection. Then the clip leaks.",
          image: content.images[1].url,
          ctas: [{ label: "Start Reading", href: "/archive", kind: "primary" }, { label: "Submit Related Lore", href: "/garage", kind: "submission" }],
        }
      }} />
      <section className="section arc-section">
        <div className="section-head">
          <div><span className="label">Arc hub</span><h2 className="display">Gate 8 made the family valuable. The leak made them visible.</h2></div>
          <p className="lead">OFF LEDGER is the first story arc from G//LYDE: Neo Noctis, The Rouxline, route rights, Oddsmaker pressure, and the moment a local run becomes market weather.</p>
        </div>
        <div className="grid two">
          {["The Rouxline", "Gate 8", "Neo Noctis", "The Lowline"].map((title, index) => (
            <Link className="card feature-file-card" href={index < 2 ? "/archive" : "/neo-noctis"} key={title}>
              <div className="card-img"><img src={content.images[index % content.images.length].url} alt="" /></div>
              <div className="card-body">
                <span className="label">Key location</span>
                <h3 className="display">{title}</h3>
                <p className="muted">{title === "Gate 8" ? "A private route access point worth more than the building itself." : "A pressure point in the first arc's route, family, and wager economy."}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section character-files-section">
        <div className="section-head"><div><span className="label">Key characters</span><h2 className="display">The first pressure map.</h2></div></div>
        <div className="cast-grid">
          {keyCharacters.map((character) => (
            <Link className="cast-card" href="/characters" key={character.id}>
              <img src={character.image} alt={character.name} />
              <div><span className="label">{character.role}</span><h3 className="display">{character.name}</h3><p>{character.bio}</p></div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section drops-section">
        <div className="section-inner">
          <div className="section-head"><div><span className="label">Reading order</span><h2 className="display">Read the first files.</h2></div><Link className="btn" href="/archive">Open Archive →</Link></div>
          <div className="drops-grid">{entries.map((entry) => <ArchiveCard key={entry.id} entry={entry} />)}</div>
        </div>
      </section>
    </>
  );
}

export function CodexView() {
  const { content } = useSiteContent();
  const categoryOrder = ["All", "World", "Sport", "Boards", "Gear", "Routes", "Culture", "Economy", "Institutions", "Signals"];
  const categories = useMemo(() => categoryOrder.filter((item) => item === "All" || content.codex.some((term) => term.category === item)), [content.codex]);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<CodexTerm | null>(null);
  const featuredTerms = content.codex.filter((term) => term.featured).slice(0, 8);
  const terms = content.codex.filter((term) => {
    const matchesCategory = category === "All" || term.category === category;
    const text = `${term.term} ${term.definition} ${term.fullDescription} ${term.whyItMatters} ${term.usage} ${term.tags.join(" ")} ${term.relatedTerms.join(" ")}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase());
  });

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "Codex",
          title: "THE SPORT HAS LANGUAGE. THE CITY HAS MEMORY.",
          body: "Every term in G//LYDE carries weight: a rule, a risk, a rumor, a debt, a machine, a route, or a way to disappear. Open the files. Learn what the cameras miss.",
          image: content.images[2].url,
          ctas: [{ label: "Submit a Term", href: "/garage", kind: "submission" }],
        }
      }} />
      <section className="section codex-page-section">
        <div className="codex-console">
          <div>
            <span className="label">Operating manual // World bible // Database layer</span>
            <h2 className="display">Read the systems behind the story.</h2>
          </div>
          <p className="lead">Search the language of Neo Noctis, then open full files with examples, related characters, archive drops, routes, and linked terms.</p>
        </div>
        <div className="codex-featured-grid">
          {featuredTerms.map((term) => (
            <button className="codex-featured-card clickable-card" key={term.id} onClick={() => setSelected(term)}>
              <img src={term.image} alt="" />
              <div>
                <span className="label">{term.category} // Featured</span>
                <h3 className="display">{term.term}</h3>
                <p>{term.definition}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="filters">
          {categories.map((item) => <button key={item} className={`filter-btn ${item === category ? "active" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="field codex-search"><span className="label">Search Codex</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Neo Noctis, G-Board, Route Rights, The Click..." /></label>
        <div className="codex-result-bar">
          <span>{terms.length} files</span>
          <span>{category === "All" ? "All categories" : category}</span>
        </div>
        <div className="codex-grid">
          {terms.map((term) => (
            <button className="codex-card clickable-card" onClick={() => setSelected(term)} key={term.id}>
              <span className="label">{term.category}</span>
              <h3 className="display">{term.term}</h3>
              <p>{term.definition}</p>
              <small>{term.relatedArchiveIds.length} archive links // {(term.relatedCircuitIds ?? []).length} route links</small>
              <div className="tag-row">{term.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <span className="btn card-cta">Open File →</span>
            </button>
          ))}
        </div>
      </section>
      {selected && <CodexReader onClose={() => setSelected(null)} onSelectTerm={setSelected} term={selected} />}
    </>
  );
}

export function GCoreView() {
  const { content } = useSiteContent();
  const [selected, setSelected] = useState<GCore | null>(null);
  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "G-Core // Machines",
          title: "THE ENGINE DOES NOT JUST MOVE THE MACHINE. IT LEARNS THE RIDER.",
          body: "G-Core files are product spec, rumor, and warning label at the same time.",
          image: content.images[2].url,
          ctas: [{ label: "Open Codex", href: "/codex", kind: "primary" }],
        }
      }} />
      <section className="section gcore-section">
        <div className="gcore-grid">
          {content.gCores.map((core) => (
            <button className="gcore-card clickable-card" key={core.id} onClick={() => setSelected(core)} style={{ "--core-color": core.color.toLowerCase().includes("red") ? "var(--red)" : core.color.toLowerCase().includes("black") ? "#111" : "var(--cyan)" } as CSSProperties}>
              <img src={core.image} alt={core.name} />
              <div className="card-body">
                <span className="label">{core.color} // {core.discipline}</span>
                <h3 className="display">{core.name}</h3>
                <p className="muted">{core.affinity}</p>
                <div className="spec-strip">{core.strengths.map((item) => <span key={item}>{item}</span>)}</div>
                <span className="btn card-cta">Open Spec →</span>
              </div>
            </button>
          ))}
        </div>
      </section>
      {selected && <FileModal onClose={() => setSelected(null)} item={{
        title: selected.name,
        category: `G-Core // ${selected.color}`,
        image: selected.image,
        definition: selected.affinity,
        description: `Rider type: ${selected.riderType}. Strengths: ${selected.strengths.join(", ")}.`,
        whyItMatters: `Failure mode: ${selected.weakness}`,
        tags: [...selected.relatedMachines, selected.discipline],
        ctas: [{ label: "Submit a Machine", href: "/garage", kind: "submission" }],
      }} />}
    </>
  );
}

const submissionCopy: Record<SubmissionKind, {
  eyebrow: string;
  title: string;
  body: string;
  titleLabel: string;
  descriptionLabel: string;
  roleLabel: string;
  fitLabel: string;
}> = {
  rider: {
    eyebrow: "Rider intake // Canon review",
    title: "Submit a rider file.",
    body: "Send a rider, route fixer, crew face, Oddsmaker, house operator, G//NET personality, sponsor figure, or rival with a clean line into G//LYDE's board culture.",
    titleLabel: "Rider Name / Alias",
    descriptionLabel: "Rider Concept / Look / Pressure / Story Hook",
    roleLabel: "Role / Affiliation / Known Line",
    fitLabel: "Why does this rider belong on the line?",
  },
  crew: {
    eyebrow: "Garage intake // Crew file",
    title: "Create a crew, academy, house, or squad.",
    body: "Submit a Lowline crew, academy team, private racing house, sponsor-backed squad, route family, or faction cell.",
    titleLabel: "Crew / group name",
    descriptionLabel: "Crew identity, members, territory, style, rivalries, and pressure",
    roleLabel: "Crew type / location / faction",
    fitLabel: "Why does this crew sharpen the world?",
  },
  sponsor: {
    eyebrow: "Garage intake // Brand file",
    title: "Submit a sponsor, manufacturer, or in-world brand.",
    body: "Pitch a fashion label, Wager House, media brand, manufacturer, hospitality group, performance company, or sponsor empire.",
    titleLabel: "Brand / sponsor name",
    descriptionLabel: "Brand concept, visual identity, product, money source, and agenda",
    roleLabel: "Category / industry / faction tie",
    fitLabel: "Why would this brand want G//LYDE?",
  },
  circuit: {
    eyebrow: "Garage intake // Route file",
    title: "Submit a route, city, planet, gate, or track.",
    body: "Pitch an official board route, Lowline path, private gate, city district, Cup host, or off-world location.",
    titleLabel: "Route / city / location name",
    descriptionLabel: "Location, route behavior, hazards, visual identity, crowd, and stakes",
    roleLabel: "Planet / city / discipline / status",
    fitLabel: "Why does this location matter to the sport?",
  },
  machine: {
    eyebrow: "Garage intake // Machine file",
    title: "Submit a machine, G-Core, rig, board, or suit concept.",
    body: "Send equipment ideas that feel mechanical, stylish, and dangerous enough to belong in the sport.",
    titleLabel: "Machine / tech name",
    descriptionLabel: "Machine concept, visual shape, capabilities, limits, and failure mode",
    roleLabel: "System type / discipline / manufacturer",
    fitLabel: "Why does this machine change how someone moves?",
  },
  story: {
    eyebrow: "Garage intake // Story file",
    title: "Submit a story file or archive drop.",
    body: "Submit a rider log, G//NET clip, Black Book note, route rumor, sponsor memo, scene fragment, or Off Ledger-adjacent file.",
    titleLabel: "Story / file title",
    descriptionLabel: "The entry, scene, memo, rumor, or file text",
    roleLabel: "Source / POV / category",
    fitLabel: "Why does this reveal something useful about G//LYDE?",
  },
  join: {
    eyebrow: "Join the world",
    title: "Join the early list.",
    body: "Get archive drops, rider files, Garage calls, and Volume 0 development signals as G//LYDE opens.",
    titleLabel: "How do you want to be listed?",
    descriptionLabel: "Tell us what you want updates about",
    roleLabel: "Reader / artist / writer / developer / backer / brand",
    fitLabel: "What pulled you into G//LYDE?",
  },
  collaborate: {
    eyebrow: "Collaboration intake",
    title: "Signal interest in collaborating.",
    body: "For artists, writers, producers, developers, fashion partners, sponsors, community builders, and production allies.",
    titleLabel: "Collaboration focus",
    descriptionLabel: "What you do, links, availability, and what you want to build",
    roleLabel: "Role / studio / skillset",
    fitLabel: "Why does this collaboration fit G//LYDE?",
  },
  support: {
    eyebrow: "Support intake",
    title: "Support a visual drop, review, or Volume 0.",
    body: "Use this to register serious support interest while paid checkout is being connected. The team can follow up with the correct support route.",
    titleLabel: "Support focus",
    descriptionLabel: "What you want to support: visual drop, Volume 0, concept review, archive entry, sponsorship, or collaboration",
    roleLabel: "Support type / budget range / preferred route",
    fitLabel: "What part of the world do you want to help make real?",
  },
};

export function SubmissionView({ kind }: { kind: SubmissionKind }) {
  const { content } = useSiteContent();
  const copy = submissionCopy[kind];
  const isRiderSubmission = kind === "rider";
  const [form, setForm] = useState({
    name: "",
    email: "",
    conceptTitle: "",
    conceptDescription: "",
    roleOrDiscipline: "",
    visualReferences: "",
    fitReason: "",
    consent: false,
  });
  const [state, setState] = useState<{ status: "idle" | "sending" | "sent" | "error"; message: string; id?: string }>({ status: "idle", message: "" });
  const set = (key: keyof typeof form, value: string | boolean) => setForm((current) => ({ ...current, [key]: value }));

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: copy.eyebrow,
          title: copy.title.toUpperCase(),
          body: copy.body,
          image: content.images[kind === "sponsor" ? 2 : kind === "circuit" ? 0 : kind === "machine" ? 3 : 1].url,
          ctas: [{ label: "Back to Garage", href: "/garage", kind: "secondary" }],
        }
      }} />
      <section className="section submission-section">
        <div className="submission-layout">
          <form
            className="submission-form"
            onSubmit={async (event) => {
              event.preventDefault();
              setState({ status: "sending", message: isRiderSubmission ? "Submitting rider file..." : "Submitting file..." });
              const response = await fetch("/api/submissions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, type: kind, source: location.pathname }),
              });
              const data = await response.json();
              if (!response.ok) {
                setState({ status: "error", message: Array.isArray(data.errors) ? data.errors.join(" ") : data.error ?? "Submission failed." });
                return;
              }
              setState({ status: "sent", message: data.message, id: data.id });
              setForm({ name: "", email: "", conceptTitle: "", conceptDescription: "", roleOrDiscipline: "", visualReferences: "", fitReason: "", consent: false });
            }}
          >
            <div className="form-grid">
              <label className="field"><span className="label">Name</span><input required value={form.name} onChange={(event) => set("name", event.target.value)} /></label>
              <label className="field"><span className="label">Email</span><input required type="email" value={form.email} onChange={(event) => set("email", event.target.value)} /></label>
            </div>
            <label className="field"><span className="label">{copy.titleLabel}</span><input required value={form.conceptTitle} onChange={(event) => set("conceptTitle", event.target.value)} /></label>
            <label className="field"><span className="label">{copy.roleLabel}</span><input value={form.roleOrDiscipline} onChange={(event) => set("roleOrDiscipline", event.target.value)} /></label>
            <label className="field"><span className="label">{copy.descriptionLabel}</span><textarea required minLength={40} value={form.conceptDescription} onChange={(event) => set("conceptDescription", event.target.value)} /></label>
            <label className="field"><span className="label">{isRiderSubmission ? "Visual References / Moodboard" : "Visual references link"}</span><input value={form.visualReferences} onChange={(event) => set("visualReferences", event.target.value)} placeholder={isRiderSubmission ? "Portfolio, moodboard, Drive folder, social post, sketch reference, etc." : "Portfolio, moodboard, Drive folder, social post, etc."} /></label>
            <label className="field"><span className="label">{copy.fitLabel}</span><textarea required minLength={24} value={form.fitReason} onChange={(event) => set("fitReason", event.target.value)} /></label>
            <label className="consent-field">
              <input required type="checkbox" checked={form.consent} onChange={(event) => set("consent", event.target.checked)} />
              <span>{isRiderSubmission ? "I understand this is a curated submission. Inclusion, publication, compensation, ownership, or canon status is not guaranteed." : "I understand G//LYDE is curated. Submission does not guarantee inclusion, ownership, compensation, publication, or canon status."}</span>
            </label>
            <button className="btn primary submission-submit" disabled={state.status === "sending"} type="submit">{state.status === "sending" ? "Submitting..." : isRiderSubmission ? "Submit Rider File" : "Submit File"} →</button>
            {state.message && <div className={`form-status ${state.status}`}><b>{state.status === "sent" ? "Received" : state.status === "error" ? "Check the file" : "Working"}</b><p>{state.message}</p>{state.id && <span className="label">Reference: {state.id}</span>}</div>}
          </form>
          <aside className="submission-side">
            <span className="label">What happens next</span>
            <h2 className="display"><SplitDisplayTitle text={isRiderSubmission ? "Submit the rider. We verify the signal." : "Every file enters through review."} /></h2>
            <p>{isRiderSubmission ? "Your submission enters the G//LYDE review queue for canon consideration. Strong concepts may be refined, merged, expanded, declined, or held for future world development." : "Your submission is saved for review. Strong concepts may be refined, renamed, merged, expanded, declined, or held for future world development."}</p>
            <p>{isRiderSubmission ? "No submission guarantees inclusion, ownership, compensation, publication, or canon status." : "Submission does not guarantee inclusion, ownership, compensation, publication, or canon status."}</p>
            <div className="submission-steps">
              <span>01 // Received</span>
              <span>02 // Reviewed for fit</span>
              <span>03 // Follow-up if needed</span>
              <span>04 // Potential archive adaptation</span>
            </div>
            <details className="policy-note" open>
              <summary>Canon policy</summary>
              <p>{content.garage.canonNotice}</p>
            </details>
          </aside>
        </div>
      </section>
    </>
  );
}

export function GarageView() {
  const { content } = useSiteContent();
  const page = content.pages.garage;
  const openCalls = [
    {
      title: "Neo Noctis Lowline Crews",
      eyebrow: "OPEN CALL",
      access: "Street",
      priority: "High",
      body: "Street crews, mechanics, spotters, route runners, and off-ledger groups shaping the city from below.",
      bodyLines: ["Street crews, mechanics, spotters,", "route runners, and off-ledger groups", "shaping the city from below."],
      href: "/submit-crew",
    },
    {
      title: "G//NET Personalities",
      eyebrow: "OPEN CALL",
      access: "Broadcast",
      priority: "High",
      body: "Broadcast voices, clip curators, commentators, signal chasers, and public-facing figures who shape the sport's visibility.",
      bodyLines: ["Broadcast voices, clip curators,", "commentators, signal chasers,", "and public-facing figures shaping visibility."],
      href: "/submit-rider",
    },
    {
      title: "Rival Riders",
      eyebrow: "OPEN CALL",
      access: "Roster",
      priority: "High",
      body: "Riders with pressure, style, flaws, ambition, and a reason to become part of the circuit.",
      bodyLines: ["Riders with pressure, style, flaws,", "ambition, and a reason", "to become part of the circuit."],
      href: "/submit-rider",
    },
    {
      title: "Wager House Concepts",
      eyebrow: "OPEN CALL",
      access: "Private",
      priority: "Selective",
      body: "Private rooms, odds systems, debt rituals, Black Book customs, and the people who price risk.",
      bodyLines: ["Private rooms, odds systems,", "debt rituals, Black Book customs,", "and people who price risk."],
      href: "/submit-sponsor",
    },
    {
      title: "Sponsor Brands",
      eyebrow: "OPEN CALL",
      access: "Commercial",
      priority: "Medium",
      body: "Fictional brands, manufacturers, luxury partners, and cultural sponsors with a clear role inside G//LYDE.",
      bodyLines: ["Fictional brands, manufacturers,", "luxury partners, and cultural sponsors", "with a clear role inside G//LYDE."],
      href: "/submit-sponsor",
    },
    {
      title: "Gate 8 Rumors",
      eyebrow: "OPEN CALL",
      access: "Rouxline orbit",
      priority: "Selective",
      body: "Whispers, sightings, access myths, private arrivals, and stories tied to the Rouxline orbit.",
      bodyLines: ["Whispers, sightings, access myths,", "private arrivals, and stories", "tied to the Rouxline orbit."],
      href: "/submit-story",
    },
    {
      title: "Board Tuning Houses",
      eyebrow: "OPEN CALL",
      access: "Workshop",
      priority: "Medium",
      body: "Garages, builders, suit techs, board stylists, and underground specialists who shape how riders move.",
      bodyLines: ["Garages, builders, suit techs,", "board stylists, and underground specialists", "who shape how riders move."],
      href: "/submit-machine",
    },
    {
      title: "Off-World Routes",
      eyebrow: "LIMITED CALL",
      access: "Expansion",
      priority: "Low",
      body: "Only submit if the route feels essential. New planets, cities, and lines should expand the world without breaking its tone.",
      bodyLines: ["Only submit if the route feels essential.", "New planets, cities, and lines", "must expand without breaking tone."],
      href: "/submit-circuit",
    },
  ];
  return (
    <>
      <RouteHero page={page} />
      <section className="section world-teaser-section">
        <div className="section-head">
          <div><span className="label">Choose your route</span><h2 className="display">One front door. Different ways in.</h2></div>
          <p className="lead">{content.garage.prompt}</p>
        </div>
        <div className="garage-route-grid">
          {content.garage.paths.map((path) => (
            <Link className="garage-route-card" key={path.title} href={path.href}>
              <span className="label">Garage route</span>
              <h3 className="display">{path.title}</h3>
              <p>{path.body}</p>
              <span className="btn">{path.linkLabel} →</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section garage-process-section">
        <div className="section-head">
          <div><span className="label">Review flow</span><h2 className="display">What happens after you submit.</h2></div>
          <p className="lead">The Garage is curated, not closed. Every submission becomes a clean review file, then moves through fit, continuity, follow-up, and possible adaptation.</p>
        </div>
        <div className="review-flow-grid">
          {[
            ["01", "Received", "The submission is saved to the backend and appears in G//LYDE CONTROL for review."],
            ["02", "Checked for fit", "We look for a clean hook, visual clarity, world pressure, and continuity."],
            ["03", "Follow-up", "Strong files may need refinement, questions, references, or a sharper route into the archive."],
            ["04", "Adapted or declined", "Accepted ideas may be edited, renamed, merged, expanded, or held for later."],
          ].map(([step, title, body]) => (
            <article className="review-flow-card" key={step}>
              <span className="label">{step}</span>
              <h3 className="display">{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section garage-home-section">
        <div className="section-inner">
          <div className="section-head compact">
            <div>
              <span className="label">Open calls</span>
              <h2 className="display">Currently accepting signals.</h2>
              <p className="garage-intro">Selected submissions may be reviewed for future G//LYDE world development, visual drops, rider files, route records, or archive entries. Strong ideas should feel specific, visual, and connected to board culture.</p>
              <p className="garage-intake-note">We are not looking for everything. We are looking for signals that belong on the line.</p>
            </div>
          </div>
          <div className="garage-card-grid">{openCalls.map((call) => (
            <Link className="garage-card classified-call-card" href={call.href} key={call.title}>
              <div className="classified-call-meta">
                <span>{call.eyebrow}</span>
                <span>{call.priority}</span>
              </div>
              <h3 className="display">{call.title}</h3>
              <p>{call.bodyLines.map((line) => <span key={line}>{line}</span>)}</p>
              <div className="classified-call-footer">
                <span>ACCESS // {call.access}</span>
                <b>Submit World File →</b>
              </div>
            </Link>
          ))}</div>
          <details className="policy-note"><summary>Submission Notice</summary><p>G//LYDE is curated. Submissions may be refined, merged, declined, or held for future development. Submission does not guarantee inclusion, ownership, compensation, publication, or canon status.</p></details>
        </div>
      </section>
    </>
  );
}

export function SupportView() {
  const { content } = useSiteContent();
  return (
    <>
      <RouteHero page={content.pages.support} />
      <section className="section">
        <div className="section-head">
          <div><span className="label">Premium invitation</span><h2 className="display">{content.support.title}</h2></div>
          <p className="lead">{content.support.intro}</p>
        </div>
        <div className="grid">
          {content.support.cards.map((card) => (
            <Link className="card" key={card.title} href={card.href}>
              <div className="card-body">
                <span className="label">Support path</span>
                <h3 className="display">{card.title}</h3>
                <p className="muted">{card.body}</p>
                <span className="btn">{card.linkLabel} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section alt"><div className="section-inner notice"><b>Support Notice</b><p>{content.support.supportNotice}</p></div></section>
    </>
  );
}
