"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import type { ArchiveEntry, Character, CodexTerm, Circuit, Faction, GalleryItem, GCore, PageContent } from "@/content/siteContent";
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
      title: "Black Book",
      href: "/codex",
      image: content.images[3].url,
      body: "Open the private index of terms, factions, sponsors, boards, rules, and off-record systems.",
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
            <span>AN OVER//UNDER STORY</span>
            <span>NEO NOCTIS // EIDOLON</span>
            <span style={{ marginLeft: "auto", color: "var(--acid)" }}>OFF LEDGER // VOLUME ZERO</span>
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
            <Link href="/archive?category=off-ledger&file=gate-8" className="hero-poster-card story-card-link">
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
            <div><span className="label">Release</span><b>LOWLINE</b></div>
            <div><span className="label">Credit</span><b>OVER//UNDER</b></div>
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
            { label: "Join Early List", href: "/join", kind: "primary" },
            { label: "Submit A Signal", href: "/garage", kind: "submission" },
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
              ctas: [{ label: "Open First Signal", href: "/archive?category=off-ledger&file=gate-8", kind: "primary" }],
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
            { label: "Open the Black Book", href: "/codex", kind: "primary" },
            { label: "View Characters", href: "/characters", kind: "secondary" },
            { label: "Enter G// Garage", href: "/garage", kind: "submission" },
          ]} />
        </div>
      </section>
      {selected && <FileModal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function RouteHero({ page }: { page: Pick<PageContent, "hero"> }) {
  const titleLines = page.hero.title.split("\n");
  const bodyLines = page.hero.body.split("\n");
  return (
    <section className="route-hero">
      <img className="bg" src={page.hero.image} alt="" />
      <div className="route-hero-inner">
        <span className="label hero-kicker">{page.hero.eyebrow}</span>
        <h1 className="display">{titleLines.map((line) => <span key={line}>{line}</span>)}</h1>
        <p>{bodyLines.map((line) => <span key={line}>{line}</span>)}</p>
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
          <CtaButtons ctas={item.ctas ?? [{ label: "Enter G// Garage", href: "/garage", kind: "primary" }]} />
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
    : "The Archive is how G//LYDE opens before Volume Zero: story fragments, route lore, character pressure, visual drops, and files that make the sport feel lived in.";
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
                <span className="label">Related Black Book</span>
                <div className="reader-chip-row">{relatedTerms.length ? relatedTerms.map((term) => <Link href="/codex" key={term.id}>{term.term}</Link>) : <span>No Black Book links yet</span>}</div>
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
            <span className="label">Black Book File // {term.category}</span>
            <h2 className="display">{term.term}</h2>
            <p>{term.definition}</p>
          </div>
        </header>
        <div className="codex-reader-layout">
          <aside className="codex-reader-rail">
            <div><span className="label">Category</span><b>{term.category}</b></div>
            <div><span className="label">Related characters</span>{relatedCharacters.length ? relatedCharacters.map((character) => <b key={character.id}>{character.name}</b>) : <b>None yet</b>}</div>
            <div><span className="label">Related routes / tracks</span>{relatedRoutes.length ? relatedRoutes.map((route) => <b key={route.id}>{route.name}</b>) : <b>Unmapped</b>}</div>
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
  const searchParams = useSearchParams();
  const categoryFilters = [
    { label: "All Files", value: "all" },
    { label: "Rider Files", value: "rider" },
    { label: "Route Records", value: "route" },
    { label: "Visual Drops", value: "visual" },
    { label: "Off-Ledger", value: "off-ledger" },
    { label: "G//NET Clips", value: "gnet" },
  ];
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ArchiveEntry | null>(null);
  const matchesArchiveCategory = (entry: ArchiveEntry, filter: string) => {
    const haystack = `${entry.category} ${entry.title} ${entry.tags.join(" ")}`.toLowerCase();
    if (filter === "all") return true;
    if (filter === "rider") return haystack.includes("rider") || haystack.includes("character");
    if (filter === "route") return haystack.includes("route") || haystack.includes("gate") || haystack.includes("lowline");
    if (filter === "visual") return haystack.includes("visual") || haystack.includes("drop");
    if (filter === "off-ledger") return haystack.includes("off ledger") || haystack.includes("off-ledger");
    if (filter === "gnet") return haystack.includes("g//net") || haystack.includes("gnet");
    return true;
  };
  const entries = content.archive.filter((entry) => {
    const matchesCategory = matchesArchiveCategory(entry, category);
    const text = `${entry.title} ${entry.category} ${entry.source} ${entry.location} ${entry.excerpt} ${entry.body} ${entry.tags.join(" ")}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase());
  });
  const offLedgerEntries = content.archive.filter((entry) => ["gate-8", "off-ledger-run", "kellan-rooftop", "rouxline-chrome"].includes(entry.id));
  const firstSignal = content.archive.find((entry) => entry.id === "gate-8") ?? offLedgerEntries[0];
  const preVolumeFiles = [
    {
      label: "RIDER FILE",
      id: "kellan-rooftop",
      title: "KELLAN ROUX // ROOFTOP BEFORE THE RUN",
      teaser: "The city looked expensive from above. From below, it looked hungry.",
      meta: ["CITY: NEO NOCTIS", "TYPE: RIDER JOURNAL", "STATUS: OPEN"],
    },
    {
      label: "RIDER FILE",
      id: "uno-doors",
      fallbackId: "rouxline-chrome",
      title: "UNO ROUX // THE HANDLER WITH DOORS",
      teaser: "He smiled like every contract had already forgiven him.",
      meta: ["CITY: NEO NOCTIS", "TYPE: CHARACTER FILE", "STATUS: OPEN"],
    },
    {
      label: "VISUAL DROP",
      id: "gsync-click",
      title: "G-SYNC AND THE CLICK",
      teaser: "A first look at board pressure, rider timing, and the moment a line becomes visible.",
      meta: ["TYPE: VISUAL DROP", "STATUS: CANON"],
    },
    {
      label: "OFF-LEDGER FILE",
      id: "gate-8",
      title: "GATE 8 // FIRST SIGNAL",
      teaser: "No broadcast. No record. No protection. Then the feed caught what the officials missed.",
      meta: ["CITY: NEO NOCTIS", "PLANET: EIDOLON V", "STATUS: LEAKED"],
    },
    {
      label: "BLACK BOOK NOTE",
      id: "lowline-runs",
      title: "LOWLINES",
      teaser: "Unsanctioned routes outside the official system. Every city has them. Every rider knows the risk.",
      meta: ["TYPE: BLACK BOOK", "STATUS: INDEXED"],
    },
  ].map((file) => ({ ...file, entry: content.archive.find((entry) => entry.id === file.id) ?? content.archive.find((entry) => entry.id === file.fallbackId) ?? content.archive[0] }));

  useEffect(() => {
    const requestedCategory = searchParams.get("category");
    const requestedFile = searchParams.get("file");
    if (requestedCategory === "off-ledger" || location.hash === "#off-ledger") {
      setCategory("off-ledger");
      requestAnimationFrame(() => document.getElementById("off-ledger")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
    if (requestedFile) {
      const file = content.archive.find((entry) => entry.id === requestedFile);
      if (file) setSelected(file);
    }
  }, [content.archive, searchParams]);

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "THE ARCHIVE",
          title: "THE FIRST FILES\nBEFORE VOLUME ZERO.",
          body: "Rider files, route records, visual drops, and Off-Ledger fragments from the early world of G//LYDE.",
          image: content.images[0].url,
          ctas: [{ label: "Open First Signal", href: "#off-ledger", kind: "primary" }, { label: "View Latest Files", href: "#entries", kind: "secondary" }],
        }
      }} />
      <section id="off-ledger" className="section archive-hub-section">
        <div className="section-head">
          <div><span className="label">OFF-LEDGER</span><h2 className="display">FILES THAT NEVER REACHED THE FEED.</h2></div>
          <p className="lead">Unverified route records, leaked clips, missing telemetry, private runs, and fragments the official circuit never claimed.</p>
        </div>
        {firstSignal && (
          <button className="archive-first-signal clickable-card" onClick={() => setSelected(firstSignal)}>
            <img src={firstSignal.image} alt="" />
            <div>
              <span className="label">GATE 8 // FIRST SIGNAL</span>
              <h3 className="display">THE RUN WAS SUPPOSED TO STAY QUIET.</h3>
              <p>No broadcast. No record. No protection. Then the feed caught what the officials missed.</p>
              <span className="btn primary">Open Gate 8 File →</span>
            </div>
          </button>
        )}
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
          <div>
            <span className="label">PRE-VOLUME FILES</span>
            <h2 className="display"><span>THE FILES THAT SURFACED</span><span>BEFORE VOLUME ZERO.</span></h2>
          </div>
          <p className="lead">Before the circuit knows what to call it, the Archive keeps the first records: riders, routes, boards, leaks, and signals from the edge of Volume Zero.</p>
        </div>
        <div className="pre-volume-file-grid">
          {preVolumeFiles.map((file) => (
            <button className="pre-volume-file-card clickable-card" key={`${file.label}-${file.title}`} onClick={() => setSelected(file.entry)}>
              <span className="label">{file.label}</span>
              <h3 className="display">{file.title}</h3>
              <p>{file.teaser}</p>
              <div className="pre-volume-meta">{file.meta.map((item) => <span key={item}>{item}</span>)}</div>
              <b>Open File →</b>
            </button>
          ))}
        </div>
      </section>
      <section id="entries" className="section archive-index-section">
        <div className="section-head">
          <div><span className="label">Latest files</span><h2 className="display">Open the archive index.</h2></div>
          <label className="field archive-search"><span className="label">Search files</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rouxline, Gate 8, Kellan, Lowline..." /></label>
        </div>
        <div className="filters">{categoryFilters.map((item) => <button key={item.value} className={`filter-btn ${item.value === category ? "active" : ""}`} onClick={() => setCategory(item.value)}>{item.label}</button>)}</div>
        {category === "off-ledger" && <p className="archive-filter-note">Viewing Off-Ledger files first: leaked clips, private runs, route pressure, and records the official circuit never claimed.</p>}
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
  category: string;
  type: string;
  access: string;
  priority: string;
  publicFace: string;
  visualIdentity: string;
  privateAgenda: string;
  storyUse: string;
  signature: string;
  body: string;
  detail: string;
  controls: string[];
  tension: string;
  tags: string[];
  primary?: boolean;
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
      tensionWith: ["The Black Book", "Off Ledger Networks"],
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
            <span className="label">{dossier.number} // {dossier.category} // {dossier.type}</span>
            <h2 className="display"><SplitDisplayTitle text={dossier.title} /></h2>
            <p>{dossier.publicFace}</p>
          </div>
        </div>
        <div className="faction-drawer-grid">
          <main>
            <span className="label">Power bloc read</span>
            <p className="lede">{dossier.detail}</p>
            <div className="faction-relation-grid">
              <div><span>Public Face</span><b>{dossier.publicFace}</b></div>
              <div><span>Visual Identity</span><b>{dossier.visualIdentity}</b></div>
              <div><span>Private Agenda</span><b>{dossier.privateAgenda}</b></div>
              <div><span>Story Use</span><b>{dossier.storyUse}</b></div>
              <div className="wide"><span>Signature Line</span><b>{dossier.signature}</b></div>
            </div>
            <div className="faction-control-tags">{dossier.tags.map((chip) => <span key={chip}>{chip}</span>)}</div>
          </main>
          <aside>
            <div><span>CATEGORY</span><b>{dossier.category}</b></div>
            <div><span>WHAT THEY REPRESENT</span><b>{dossier.body}</b></div>
            <div><span>WHAT THEY SHAPE</span><b>{dossier.controls.join(", ")}</b></div>
            <div><span>PRESSURE POINT</span><b>{dossier.tension}</b></div>
            <CtaButtons ctas={[
              { label: "Study the Power Blocs", href: "/factions#power-map", kind: "primary" },
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
  const routeFormats = [
    {
      title: "Tracks",
      code: "01",
      type: "Sanctioned",
      body: "Official racing environments built for regulation, broadcast, sponsorship, and sanctioned competition.",
    },
    {
      title: "Lowline Routes",
      code: "02",
      type: "Off-record",
      body: "Off-record routes outside the official system. Dangerous, local, contested, and rarely clean on the feed.",
    },
    {
      title: "Spots",
      code: "03",
      type: "Public signal",
      body: "Public riding zones where riders gather, trick, socialize, scout, challenge, and claim attention.",
    },
  ];

  if (!isCircuits) {
    const factionDossiers: FactionDossier[] = [
      {
        id: "morrow-actuation",
        number: "01",
        title: "Morrow Actuation",
        category: "Manufacturers",
        type: "Robotics / Mobility",
        access: "Development riders",
        priority: "High",
        publicFace: "The future moves before you do.",
        visualIdentity: "Matte white, surgical gray, soft blue LEDs, elegant machine limbs, quiet drones.",
        privateAgenda: "MORROW wants to reduce the rider into a readable mechanical system. Their endgame is riders who can be modeled, corrected, and replaced.",
        storyUse: "They sponsor official development riders and claim their systems protect talent. Kellan's Gift frustrates them because his best output happens outside predicted body mechanics.",
        signature: "MORROW does not build machines that move like people. It teaches people to move like machines.",
        body: "Robotics, exo-assist, rider stabilization, drone crews, recovery frames, training exos, and predictive balance systems.",
        detail: "MORROW sells protection as progress, but its deepest interest is legibility. If every rider can be modeled, every rider can be priced before they ever touch the line.",
        controls: ["Exo-assist", "Stabilization", "Drone crews", "Predictive balance"],
        tension: "Kellan's best output happens outside predicted body mechanics.",
        tags: ["ROBOTICS", "MOBILITY", "PREDICTION"],
        image: content.images[2].url,
      },
      {
        id: "eidolon-works",
        number: "02",
        title: "Eidolon Works",
        category: "Infrastructure",
        type: "Engineering / Infrastructure",
        access: "Certified lines",
        priority: "High",
        publicFace: "Built for the sanctioned line.",
        visualIdentity: "Steel blue, white, black hazard marks, monumental track pylons, certification geometry.",
        privateAgenda: "They control what counts as safe, certified, and official. If EIDOLON WORKS does not approve it, the sanctioned world can pretend it does not exist.",
        storyUse: "They helped build the official racing world on Eidolon V and may know more about early Core infrastructure than the public record admits.",
        signature: "EIDOLON WORKS decides where speed is allowed to exist.",
        body: "Track construction, gate systems, certified G-Core infrastructure, safety barriers, lift corridors, and official competition environments.",
        detail: "Infrastructure is power before anyone calls it power. EIDOLON WORKS makes the map the official circuit trusts.",
        controls: ["Tracks", "Gate systems", "Core infrastructure", "Certification"],
        tension: "They define safe, then sell access to what they define.",
        tags: ["EIDOLON V", "TRACKS", "CERTIFIED"],
        image: content.images[3].url,
      },
      {
        id: "vector-royal",
        number: "03",
        title: "Vector Royal",
        category: "Racing Houses",
        type: "Racing House / Official Circuit",
        access: "Official ladder",
        priority: "Volume Zero",
        publicFace: "Only the line matters.",
        visualIdentity: "Black, champagne gold, deep red, razor graphics, royal insignia, trackside banners.",
        privateAgenda: "VECTOR ROYAL wants to own the ladder from development tracks to planetary league. Talent only matters once it can be placed into hierarchy.",
        storyUse: "They are the first official racing door Kellan wants access to, but their access comes with control.",
        signature: "VECTOR ROYAL does not discover riders. It crowns the ones it can control.",
        body: "Official racing hierarchy, elite development tracks, title sponsorships, rider contracts, and championship prestige.",
        detail: "The official circuit does not discover talent. It waits for the Lowlines to prove it, then arrives with contracts.",
        controls: ["Development tracks", "Contracts", "Championship prestige", "Rider hierarchy"],
        tension: "Kellan wants the door before he understands the price of entering.",
        tags: ["RACING HOUSE", "OFFICIAL CIRCUIT", "VOLUME ZERO"],
        primary: true,
        image: content.images[1].url,
      },
      {
        id: "aegis-particle",
        number: "04",
        title: "Aegis Particle",
        category: "Performance",
        type: "Particle Shields / Safety Tech",
        access: "Certified protection",
        priority: "High",
        publicFace: "Survive the impossible.",
        visualIdentity: "Translucent violet, silver, shield halos, glasslike impact fields.",
        privateAgenda: "AEGIS makes the sport more dangerous by making audiences believe risk has been solved.",
        storyUse: "Official riders use AEGIS-certified protection. Lowline riders often rely on expired, patched, stolen, or counterfeit protection.",
        signature: "AEGIS sells safety to a sport addicted to danger.",
        body: "Crash protection, particle shields, impact fields, rider containment, gate shields, and emergency safety systems.",
        detail: "AEGIS reduces death statistically, then lets leagues push riders farther because the crowd believes the fall has been solved.",
        controls: ["Particle shields", "Impact fields", "Containment", "Gate safety"],
        tension: "Safety becomes permission to raise the speed.",
        tags: ["SAFETY TECH", "PARTICLE", "RISK"],
        image: content.images[0].url,
      },
      {
        id: "lytewell",
        number: "05",
        title: "LYTE//WELL",
        category: "Performance",
        type: "Hydration / Recovery / Performance",
        access: "Recovery data",
        priority: "High",
        publicFace: "Stay luminous.",
        visualIdentity: "Ice blue, white, glass bottles, chrome caps, clean clinical sport ads.",
        privateAgenda: "LYTE//WELL sells recovery, but collects exhaustion. Their real product is rider stress data.",
        storyUse: "They offer Kellan a free recovery plan after his leaked run. It looks generous. It is actually data capture.",
        signature: "LYTE//WELL sells recovery. What it collects is exhaustion.",
        body: "Hydration, recovery, performance wellness, G-Res recovery supplements, post-run treatment kits, and biometric optimization.",
        detail: "The cleanest brands can be the most invasive. LYTE//WELL turns fatigue into sponsor intelligence.",
        controls: ["Recovery plans", "Stress data", "Supplements", "Biometrics"],
        tension: "A free recovery plan is rarely free.",
        tags: ["PERFORMANCE", "RECOVERY", "DATA"],
        image: content.images[3].url,
      },
      {
        id: "sole-zero",
        number: "06",
        title: "SOLE//ZERO",
        category: "Fashion Houses",
        type: "Footwear / Streetwear / Grip Systems",
        access: "Street credibility",
        priority: "Selective",
        publicFace: "Feel the line.",
        visualIdentity: "Black soles, chrome tread, neon underglow, aggressive silhouettes, sneaker-culture drops.",
        privateAgenda: "SOLE//ZERO wants to own the moment before a rider becomes officially valuable.",
        storyUse: "They are one of the first brands that could make Kellan feel real to the culture without making him feel fully owned by the league.",
        signature: "SOLE//ZERO does not sponsor champions first. It sponsors the moment before everyone else knows.",
        body: "Pressure-responsive riding shoes, magnetic grip soles, limited rider collabs, and the bridge between street credibility and official sport.",
        detail: "SOLE//ZERO lives at the edge where a Spot becomes a market and a rider becomes a silhouette people copy.",
        controls: ["Grip systems", "Drops", "Streetwear", "Rider collabs"],
        tension: "They buy first belief before the official ladder can name it.",
        tags: ["FOOTWEAR", "STREETWEAR", "GRIP"],
        image: content.images[1].url,
      },
      {
        id: "saint-axis",
        number: "07",
        title: "SAINT AXIS",
        category: "Manufacturers",
        type: "G-Skins / Bodysuits / Rider Armor",
        access: "Official rider bodies",
        priority: "Volume Zero",
        publicFace: "The body is the first machine.",
        visualIdentity: "Pearl, black, chrome seams, anatomical lines, elegant armor, almost religious styling.",
        privateAgenda: "SAINT AXIS wants to make the rider's body certifiable: dressed, measured, corrected, and made camera-ready.",
        storyUse: "Official riders look immaculate because of SAINT AXIS. Lowline riders wear mixed parts, old suits, and custom repairs.",
        signature: "SAINT AXIS does not clothe riders. It edits them.",
        body: "G-Skins, rider bodysuits, compression armor, posture tech, crash layers, and official league suits.",
        detail: "Kellan's raw output makes the official suit philosophy look incomplete. SAINT AXIS is beauty, control, and correction in one shell.",
        controls: ["G-Skins", "Posture tech", "Crash layers", "League suits"],
        tension: "A clean body on camera can hide a very controlled rider.",
        tags: ["G-SKINS", "ARMOR", "BODY"],
        primary: true,
        image: content.images[2].url,
      },
      {
        id: "lumenvault",
        number: "08",
        title: "LUMENVAULT",
        category: "Infrastructure",
        type: "Lighting / Broadcast Visual Systems",
        access: "Spectacle control",
        priority: "High",
        publicFace: "Make motion visible.",
        visualIdentity: "Amber, electric white, prism lensing, glowing track edges, giant light rigs.",
        privateAgenda: "LUMENVAULT controls what the audience can see, and what they cannot. In G//LYDE, lighting is legitimacy.",
        storyUse: "Kellan's leaked run becomes iconic partly because a broken LUMENVAULT sign catches the Line perfectly.",
        signature: "LUMENVAULT does not follow the spectacle. It decides where the spectacle begins.",
        body: "Track lighting, route illumination, broadcast light systems, rider spotlights, holographic signage, and arena spectacle.",
        detail: "If the city cannot see the line, it cannot worship it. LUMENVAULT makes visibility feel natural.",
        controls: ["Lighting", "Route illumination", "Signage", "Spectacle"],
        tension: "A broken sign can become a stolen campaign.",
        tags: ["LIGHTING", "BROADCAST", "SPECTACLE"],
        image: content.images[0].url,
      },
      {
        id: "macks",
        number: "09",
        title: "MACK'S",
        category: "Mass Culture",
        type: "Food / Mass Culture",
        access: "Everyday Spots",
        priority: "Volume Zero",
        publicFace: "Everybody eats after the run.",
        visualIdentity: "Red, yellow, white, late-night counters, bright packaging, rider meal deals, collectible cups.",
        privateAgenda: "MACK'S wants to own the everyday culture around G//LYDE, not just elite racing.",
        storyUse: "Lowline riders actually eat there. Clips get filmed outside. Fans gather there. It can be Kellan's first mass-market sellout test.",
        signature: "The Grand Prix has champagne lounges. The Lowlines have MACK'S at 2:17 AM.",
        body: "Global fast food, youth culture, cheap meals, mass-market sponsorships, late-night Spots, and everyday life around the sport.",
        detail: "MACK'S grounds the world. It is where the feed becomes ordinary life and ordinary life starts looking like the sport.",
        controls: ["Youth leagues", "Late-night Spots", "Meal campaigns", "Mass attention"],
        tension: "A rider can become real to everyone before he becomes official to anyone.",
        tags: ["MASS CULTURE", "SPOTS", "VOLUME ZERO"],
        primary: true,
        image: content.images[3].url,
      },
      {
        id: "vellum-house",
        number: "10",
        title: "Vellum House",
        category: "Fashion Houses",
        type: "Luxury Fashion / Image Architecture",
        access: "Image control",
        priority: "Volume Zero",
        publicFace: "Movement as inheritance.",
        visualIdentity: "Ivory, black, chrome, translucent layers, ceremonial portraits, long coats, polished rider styling.",
        privateAgenda: "VELLUM wants to turn riders into icons before they become inconvenient.",
        storyUse: "VELLUM sees Kellan as visually powerful but socially unstable. They want to refine him, rename his narrative, and separate him from the Lowlines.",
        signature: "VELLUM does not dress riders for the race. It dresses them for history.",
        body: "Luxury fashion, rider styling, cultural campaigns, formal G-Skins, house uniforms, and image control.",
        detail: "VELLUM does not sponsor talent. It sponsors image it can own.",
        controls: ["Styling", "Campaigns", "House uniforms", "Narrative control"],
        tension: "The more beautiful the offer, the more carefully it edits the rider.",
        tags: ["FASHION", "IMAGE", "VOLUME ZERO"],
        primary: true,
        image: content.images[1].url,
      },
      {
        id: "noir-maison",
        number: "11",
        title: "Noir Maison",
        category: "Fashion Houses",
        type: "Street-Luxury / Nightlife Fashion",
        access: "Private events",
        priority: "Selective",
        publicFace: "Wear the night moving.",
        visualIdentity: "Black leather, red thread, silver zips, hooded silhouettes, dark runway energy.",
        privateAgenda: "NOIR MAISON profits from underground aesthetics while keeping real Lowline riders at arm's length until useful.",
        storyUse: "They throw the kind of private events where riders, rich spectators, sponsors, and handlers collide.",
        signature: "NOIR MAISON sells the night back to the people who survived it.",
        body: "Street-luxury, rider fashion, nightlife style, Lowline capsules, club uniforms, and sponsor jackets.",
        detail: "NOIR MAISON is the scent of a Lowline turned into a guest list.",
        controls: ["Private events", "Lowline capsules", "Sponsor jackets", "Nightlife image"],
        tension: "The underground becomes luxury once someone else controls the door.",
        tags: ["NIGHTLIFE", "STREET LUXURY", "LOWLINE"],
        image: content.images[0].url,
      },
      {
        id: "kairo-form",
        number: "12",
        title: "KAIRO/FORM",
        category: "Fashion Houses",
        type: "Technical Fashion / Luxury Sportswear",
        access: "Elite discipline",
        priority: "Selective",
        publicFace: "Form follows pressure.",
        visualIdentity: "Slate, cream, pale green, restrained asymmetrical panels, subtle tech, sharp tailoring.",
        privateAgenda: "KAIRO/FORM wants to own the look of discipline.",
        storyUse: "A polished rival or city circuit prospect could be aligned with KAIRO/FORM. Kellan's raw style challenges their belief that discipline has one look.",
        signature: "KAIRO/FORM believes elegance is what survives pressure.",
        body: "Technical outerwear, compression layers, elite training apparel, travel uniforms, and serious rider aesthetics.",
        detail: "KAIRO/FORM is restraint turned into a uniform. It makes control look expensive.",
        controls: ["Technical outerwear", "Travel uniforms", "Training apparel", "Elite image"],
        tension: "Raw style is a problem when the brand sells restraint.",
        tags: ["TECHNICAL FASHION", "DISCIPLINE", "SPORTSWEAR"],
        image: content.images[2].url,
      },
      {
        id: "orbital-saint",
        number: "13",
        title: "Orbital Saint",
        category: "Media Houses",
        type: "Official Media House / Broadcast Rights",
        access: "Official memory",
        priority: "High",
        publicFace: "The race, made eternal.",
        visualIdentity: "White, gold, halo broadcast framing, clean camera language, official highlight packages.",
        privateAgenda: "ORBITAL SAINT controls the public record. If they do not air it, the official world can pretend it did not happen.",
        storyUse: "Kellan's leaked clip threatens them because it becomes more culturally powerful than their official coverage.",
        signature: "ORBITAL SAINT does not report history. It renders it.",
        body: "Official broadcasts, race documentaries, rider mythology, highlight rights, and public memory.",
        detail: "Official memory is not the same as truth. ORBITAL SAINT knows the difference and sells the former.",
        controls: ["Broadcast rights", "Documentaries", "Highlights", "Public record"],
        tension: "A leaked clip can beat an official myth if the street believes it first.",
        tags: ["MEDIA", "OFFICIAL", "MEMORY"],
        image: content.images[3].url,
      },
      {
        id: "gnet",
        number: "14",
        title: "G//NET",
        category: "Media Houses",
        type: "Underground Media / Clip Network",
        access: "Raw visibility",
        priority: "Volume Zero",
        publicFace: "If it moved, someone caught it.",
        visualIdentity: "Glitch green, black, compressed footage, watermarks, raw overlays, comment storms.",
        privateAgenda: "G//NET gives Lowline riders visibility while turning their risk into content.",
        storyUse: "Kellan's rise starts here. His leaked run lives on G//NET before the official world can frame it.",
        signature: "The leagues make records. G//NET makes names.",
        body: "Decentralized clip culture, leaks, rider edits, pirate feeds, rumors, rankings, and viral proof.",
        detail: "G//NET rewards spectacle without caring who gets hurt. It is the fastest door and the least protective one.",
        controls: ["Leaks", "Rider edits", "Pirate feeds", "Viral proof"],
        tension: "Visibility arrives before protection.",
        tags: ["G//NET", "CLIPS", "VOLUME ZERO"],
        primary: true,
        image: content.images[0].url,
      },
      {
        id: "mono-arc",
        number: "15",
        title: "MONO//ARC",
        category: "Media Houses",
        type: "Telemetry / Scouting Analytics",
        access: "Valuation reports",
        priority: "Volume Zero",
        publicFace: "Truth in motion.",
        visualIdentity: "Black UI, white numbers, red anomaly markers, clean data walls.",
        privateAgenda: "MONO//ARC wants to turn Gift into a tradable metric.",
        storyUse: "They are the first serious institution to notice Kellan's clip is not just viral. His G-Res output on Lowline equipment becomes a data problem.",
        signature: "MONO//ARC does not ask who won. It asks what the winner is worth.",
        body: "G-Res scoring, prospect rankings, rider analytics, risk forecasts, sponsor valuation reports, and talent prediction.",
        detail: "If they can quantify talent, sponsors can buy earlier and cheaper.",
        controls: ["G-Res scoring", "Prospect rankings", "Risk forecasts", "Sponsor valuation"],
        tension: "Gift becomes dangerous once a market can read it.",
        tags: ["ANALYTICS", "G-RES", "VOLUME ZERO"],
        primary: true,
        image: content.images[2].url,
      },
      {
        id: "riftworks",
        number: "16",
        title: "RIFTWORKS",
        category: "Lowline / Garage",
        type: "Garage / Lowline Board Culture",
        access: "Unofficial tuning",
        priority: "Volume Zero",
        publicFace: "None officially. Known through the Lowlines.",
        visualIdentity: "Black carbon, exposed wiring, sticker scars, mismatched panels, hand-cut grip, burned-in marks.",
        privateAgenda: "RIFTWORKS does not want to be certified. It wants riders moving without asking permission.",
        storyUse: "RIFTWORKS is Kellan's side of the world. His equipment may come through them, or his board may be tuned by someone connected to them.",
        signature: "RIFTWORKS does not build perfect boards. It builds boards that answer.",
        body: "Underground board tuning, garage builds, repairs, unofficial modifications, rider-first engineering.",
        detail: "RIFTWORKS is proof that a board can be wrong on paper and right under pressure.",
        controls: ["Board tuning", "Garage builds", "Repairs", "Unofficial mods"],
        tension: "Certification wants clean answers. RIFTWORKS wants movement.",
        tags: ["GARAGE", "LOWLINE", "VOLUME ZERO"],
        primary: true,
        image: content.images[1].url,
      },
    ];
    const factionFilters = ["All", "Racing Houses", "Manufacturers", "Media Houses", "Fashion Houses", "Performance", "Infrastructure", "Mass Culture", "Lowline / Garage"];
    const visibleDossiers = factionDossiers.filter((dossier) => factionFilter === "All" || dossier.category === factionFilter);

    return (
      <>
        <RouteHero page={{
          hero: {
            eyebrow: "FACTIONS",
            title: "TALENT GETS SEEN.\nTHEN IT GETS PRICED.",
            body: "Behind every rider is a system trying to rank, dress, measure, sponsor, broadcast, protect, or own them.\nIn G//LYDE, the brands are not on the sidelines.\nThey are part of the sport.",
            image: content.images[2].url,
            ctas: [
              { label: "Study the Power Blocs", href: "#power-map", kind: "primary" },
              { label: "Open the Black Book", href: "/codex", kind: "secondary" },
            ],
          }
        }} />

        <section id="power-map" className="section faction-map-section">
          <div className="section-head">
            <div>
              <span className="label">The economy of access</span>
              <h2 className="display"><span>THE CIRCUIT SELLS LEGENDS.</span><span>THE LOWLINES MAKE THEM REAL.</span></h2>
            </div>
            <p>The official circuit wants clean records, clean bodies, and clean stories. The Lowlines produce everything it cannot manufacture: risk, hunger, style, clips, and riders with Gifts strong enough to make the machines look secondary.</p>
          </div>
          <div className="faction-access-callout"><span>A Core can lift anyone.</span><b>A Gift decides how high.</b></div>
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
              <span className="label">Sponsors / Manufacturers / Power Blocs</span>
              <h2 className="display">Brands are story engines.</h2>
            </div>
            <p>Sponsors are not decoration. They are the architecture of access.</p>
          </div>
          <div className="faction-filter-row">
            {factionFilters.map((filter) => (
              <button className={`filter-btn ${factionFilter === filter ? "active" : ""}`} key={filter} onClick={() => setFactionFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
          <div className="faction-dossier-grid">
            {visibleDossiers.map((dossier) => (
                <button className={`faction-dossier-card ${dossier.primary ? "primary-dossier" : ""}`} key={dossier.id} onClick={() => setSelectedDossier(dossier)}>
                  <div className="faction-card-media">
                    <img src={dossier.image} alt="" />
                    <span>{dossier.number} // {dossier.category}</span>
                  </div>
                  <div className="faction-card-body">
                    <span className="label">{dossier.type}</span>
                    <h3 className="display"><SplitDisplayTitle text={dossier.title} /></h3>
                    <p>{dossier.publicFace}</p>
                    <div className="faction-meta-grid">
                      <div><span>PUBLIC FACE</span><b>{dossier.publicFace}</b></div>
                      <div><span>PRIVATE AGENDA</span><b>{dossier.privateAgenda}</b></div>
                      <div><span>STORY USE</span><b>{dossier.storyUse}</b></div>
                      <div><span>VISUAL ID</span><b>{dossier.visualIdentity}</b></div>
                    </div>
                    <div className="faction-meter" aria-label={`${dossier.title} pressure meter`}><span style={{ width: `${Math.min(96, 55 + Number(dossier.number) * 4)}%` }} /></div>
                    <div className="faction-control-tags">{dossier.tags.slice(0, 3).map((chip) => <span key={chip}>{chip}</span>)}</div>
                  </div>
                  <span className="btn card-cta">Open File →</span>
                </button>
              ))}
          </div>
          <div className="faction-volume-zero">
            <span className="label">Volume Zero pressure</span>
            <h3 className="display"><span>KELLAN'S GIFT IS HIS.</span><span>THE WORLD CALLS IT AN ASSET.</span></h3>
            <p>Kellan does not become dangerous because he owns the best board. He becomes dangerous because his Gift makes the Core answer above its class. Once the clip moves, every system sees him differently.</p>
            <div>
              {["G//NET sees a name.", "MONO//ARC sees a number.", "VECTOR ROYAL sees a prospect.", "VELLUM sees an image.", "MACK'S sees a face.", "RIFTWORKS sees proof.", "Kellan sees a door."].map((line) => <span key={line}>{line}</span>)}
            </div>
            <b>The problem is every door in G//LYDE opens into someone else's system.</b>
            <CtaButtons ctas={[
              { label: "Open the Archive", href: "/archive", kind: "primary" },
              { label: "Enter The Lowlines", href: "/lowline", kind: "secondary" },
            ]} />
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
          title: isCircuits ? "THE GRAND PRIX HAS TRACKS.\nTHE STREETS HAVE LOWLINES." : "G//NET MAKES YOU VISIBLE. THE INDEX PRICES YOU. THE BLACK BOOK REMEMBERS WHAT YOU OWE.",
          body: isCircuits ? "G//LYDE moves through sanctioned circuits, off-record routes, and public spots where riders gather, challenge, and get seen.\nEvery place has a line. Every line has a price." : "The institutions, houses, crews, manufacturers, sponsors, and unofficial systems that control movement, visibility, terms, and debt.",
          image: isCircuits ? content.images[3].url : content.images[2].url,
          ctas: isCircuits
            ? [
                { label: "Open the City Index", href: "#route-index", kind: "primary" },
                { label: "Open the Route Index", href: "#route-index", kind: "secondary" },
              ]
            : [{ label: "Enter G// Garage", href: "/garage", kind: "primary" }],
        }
      }} />
      {isCircuits && (
        <section className="section route-formats-section">
          <div className="section-head">
            <div>
              <span className="label">Spatial files</span>
              <h2 className="display">
                <span>THE MAP IS NOT NEUTRAL.</span>
                <span>EVERY PLACE HAS A LINE.</span>
              </h2>
            </div>
            <p>Tracks crown champions. Lowline routes build reputations. Spots decide who gets watched before the feed ever finds them.</p>
          </div>
          <div className="route-format-grid">
            {routeFormats.map((format) => (
              <button
                className={`route-format-card clickable-card ${format.title === "Lowline Routes" ? "featured" : ""}`}
                key={format.title}
                onClick={() => setSelected({
                  id: format.title.toLowerCase().replaceAll(" ", "-"),
                  name: format.title,
                  planet: "Interplanetary",
                  region: "Every city with a line",
                  type: format.type,
                  status: format.title === "Lowline Routes" ? "Off-record" : format.type,
                  description: format.body,
                  risk: format.title === "Tracks" ? "Broadcast pressure" : "Variable terms",
                  discipline: "G-Board",
                  events: [format.type],
                  image: content.images[3].url,
                  tags: ["Routes & Cities", format.type, "Board culture"],
                } as Circuit)}
              >
                <div className="route-format-top">
                  <span>{format.code}</span>
                  <b>{format.type}</b>
                </div>
                <h3 className="display"><SplitDisplayTitle text={format.title} /></h3>
                <p>{format.body}</p>
                <span className="route-format-cta">Preview Format →</span>
              </button>
            ))}
          </div>
        </section>
      )}
      <section id={isCircuits ? "route-index" : undefined} className="section">
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
            ctas: [{ label: isCircuits ? "Submit a Route or City" : "Enter G// Garage", href: isCircuits ? "/submit-circuit" : "/garage", kind: "primary" }],
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
  const splitTermTitle = (term: string) => {
    const words = term.split(" ");
    if (words.length === 1) return [term];
    if (words.length === 2) return words;
    if (words[0] === "THE") return [words[0], words.slice(1).join(" ")];
    if (term.length > 18) return [words.slice(0, -1).join(" "), words.at(-1) ?? ""];
    return [term];
  };

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "Black Book",
          title: "THE SPORT HAS LANGUAGE.\nTHE NET HAS MEMORY.",
          body: "Every term in G//LYDE carries weight: a rule, a risk, a rumor, a debt, a machine, a route, or a way to disappear.\nOpen the files. See what the cameras miss.",
          image: content.images[2].url,
          ctas: [{ label: "Submit a Term", href: "/garage", kind: "submission" }],
        }
      }} />
      <section className="section codex-page-section">
        <div className="codex-console">
          <div>
            <span className="label">Black Book // World index // Hidden systems</span>
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
                <h3 className="display codex-term-title">{splitTermTitle(term.term).map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{term.definition}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="filters">
          {categories.map((item) => <button key={item} className={`filter-btn ${item === category ? "active" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="field codex-search"><span className="label">Search Black Book</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Neo Noctis, G-Board, Route Rights, The Click..." /></label>
        <div className="codex-result-bar">
          <span>{terms.length} files</span>
          <span>{category === "All" ? "All categories" : category}</span>
        </div>
        <div className="codex-grid">
          {terms.map((term) => (
            <button className="codex-card clickable-card" onClick={() => setSelected(term)} key={term.id}>
              <span className="label">{term.category}</span>
              <h3 className="display codex-term-title">{splitTermTitle(term.term).map((line) => <span key={line}>{line}</span>)}</h3>
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
          ctas: [{ label: "Open the Black Book", href: "/codex", kind: "primary" }],
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

export function LowlineView() {
  const { content } = useSiteContent();
  const files = [
    {
      title: "Lowline",
      type: "Universal slang",
      body: "The name riders use for unsanctioned G//LYDE outside the official circuit. It is not one place. It is what happens when a city refuses to wait for permission.",
    },
    {
      title: "A Lowline",
      type: "Specific run",
      body: "An off-record route, race, trial, or run. Sometimes a shortcut. Sometimes a challenge. Sometimes the only way a rider becomes visible.",
    },
    {
      title: "Lowlines",
      type: "Underground network",
      body: "The wider network of routes across planets, cities, stations, rooftops, tunnels, luxury zones, industrial rings, and private gates.",
    },
  ];

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "G//LYDE: LOWLINE",
          title: "THE GRAND PRIX MAKES CHAMPIONS.\nLOWLINES MAKE PROBLEMS.",
          body: "He came up through Lowline.\nThey are running a Lowline under Gate 8 tonight. Every city has its Lowlines.",
          image: content.images[1].url,
          ctas: [
            { label: "Open the Archive", href: "/archive", kind: "primary" },
            { label: "Routes & Cities", href: "/routes-cities", kind: "secondary" },
          ],
        }
      }} />
      <section className="section route-formats-section">
        <div className="section-head">
          <div>
            <span className="label">Lowline file</span>
            <h2 className="display">
              <span>OFF-RECORD DOES NOT</span>
              <span>MEAN UNWATCHED.</span>
            </h2>
          </div>
          <p>Lowline is how G//LYDE moves when the official circuit ends and the city keeps going.</p>
        </div>
        <div className="route-format-grid">
          {files.map((file, index) => (
            <Link className={`route-format-card ${index === 0 ? "featured" : ""}`} href="/archive" key={file.title}>
              <div className="route-format-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{file.type}</b>
              </div>
              <h3 className="display"><SplitDisplayTitle text={file.title} /></h3>
              <p>{file.body}</p>
              <span className="route-format-cta">Open File →</span>
            </Link>
          ))}
        </div>
      </section>
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
    body: "Get archive drops, rider files, G// Garage calls, and Volume Zero development signals as G//LYDE opens.",
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
    title: "Support a visual drop, review, or Volume Zero.",
    body: "Use this to register serious support interest while paid checkout is being connected. The team can follow up with the correct support route.",
    titleLabel: "Support focus",
    descriptionLabel: "What you want to support: visual drop, Volume Zero, concept review, archive entry, sponsorship, or collaboration",
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
          <p className="lead">G// Garage is curated, not closed. Every submission becomes a clean review file, then moves through fit, continuity, follow-up, and possible adaptation.</p>
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

function GalleryLightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <div className="gallery-lightbox-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <article className="gallery-lightbox" onClick={(event) => event.stopPropagation()}>
        <button className="reader-back-button drawer-close" onClick={onClose}>Close</button>
        <img src={item.imageUpload} alt={item.title} />
        <div className="gallery-lightbox-panel">
          <span className="label">{item.category}</span>
          <h2 className="display">{item.title}</h2>
          <p>{item.caption}</p>
          <div className="gallery-lightbox-meta">
            {item.relatedCharacter && <span>Character <b>{item.relatedCharacter}</b></span>}
            {item.relatedRouteTrackSpot && <span>Route / Spot <b>{item.relatedRouteTrackSpot}</b></span>}
            {item.relatedSponsorManufacturer && <span>Sponsor / Maker <b>{item.relatedSponsorManufacturer}</b></span>}
            {item.credit && <span>Credit <b>{item.credit}</b></span>}
          </div>
          <div className="cta-row">
            {item.relatedArchiveFile && <Link className="btn primary" href={`/archive?file=${item.relatedArchiveFile}`}>Related Archive File →</Link>}
            {item.relatedCharacter && <Link className="btn" href="/characters">Character File →</Link>}
          </div>
        </div>
      </article>
    </div>
  );
}

export function GalleryView() {
  const { content } = useSiteContent();
  const [filter, setFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const filters = ["All", "Riders", "Boards", "Tracks", "Lowlines", "Spots", "Sponsors", "Volume Zero"];
  const published = (content.gallery ?? []).filter((item) => item.status === "published");
  const featured = published.find((item) => item.featured) ?? published[0];
  const filtered = published.filter((item) => filter === "All" || item.category === filter);
  const visible = showMore ? filtered : filtered.slice(0, 8);

  return (
    <>
      <section className="gallery-hero">
        <img src={featured?.imageUpload ?? content.images[0].url} alt="" />
        <div>
          <span className="label">GALLERY</span>
          <h1 className="display"><span>FRAMES FROM</span><span>G//LYDE: LOWLINE.</span></h1>
          <p>Riders, boards, tracks, Lowline routes, Spots, and visual drops from the world before Volume Zero.</p>
        </div>
      </section>
      <section className="section gallery-section">
        <div className="gallery-filter-row">
          {filters.map((item) => (
            <button className={`filter-btn ${filter === item ? "active" : ""}`} key={item} onClick={() => { setFilter(item); setShowMore(false); }}>{item}</button>
          ))}
        </div>
        <div className="gallery-wall">
          {visible.map((item, index) => (
            <button className={`gallery-frame frame-${index % 6}`} key={item.id} onClick={() => setSelected(item)}>
              <img src={item.imageUpload} alt={item.title} />
              <span className="gallery-frame-meta">
                <b>{item.category.toUpperCase()}</b>
                <strong>{item.title}</strong>
                {(item.relatedRouteTrackSpot || item.relatedCharacter) && <em>{item.relatedRouteTrackSpot || item.relatedCharacter}</em>}
              </span>
            </button>
          ))}
        </div>
        {filtered.length > 8 && (
          <button className="gallery-more" onClick={() => setShowMore((value) => !value)}>
            {showMore ? "Show Less" : "View More Frames"} →
          </button>
        )}
      </section>
      {selected && <GalleryLightbox item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
