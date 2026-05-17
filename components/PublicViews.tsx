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

      <section className="section movement-section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <span className="label">{page.blocks[1].kicker}</span>
              <h2 className="display">{page.blocks[1].title}</h2>
            </div>
            <p className="lead">{page.blocks[1].body}</p>
          </div>
          <div className="movement-grid">
            {home.movementSystems.map((system, index) => (
              <Link className="movement-card" href={system.href} key={system.title}>
                <div className="movement-image"><img src={system.image} alt="" /></div>
                <div className="card-body">
                  <span className="label">{system.eyebrow}</span>
                  <h3 className="display">{system.title}</h3>
                  <p className="muted">{system.body}</p>
                  <div className="spec-strip">
                    {system.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <span className="system-number">{String(index + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </div>
        </div>
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
        image: content.images[0].url,
        definition: "Sponsor towers, official events, broadcast decks, luxury suites, and the version of the sport sold in perfect light.",
        description: "The Overcity is where Neo Noctis performs itself. Grand Cup guests arrive here first. Sponsors buy glass, height, and proximity to the cameras. The official sport looks clean from this altitude because the debts are below the frame.",
        whyItMatters: "The Overcity sells the dream that every Lowline rider is trying to touch without being owned by it.",
        tags: ["Official", "Sponsors", "Broadcast", "Luxury"],
      },
      {
        title: "The Lowline",
        category: "Neo Noctis // Below the route map",
        image: content.images[1].url,
        definition: "Off-route races, hidden access, Black Book terms, street crews, mechanics, and people with nothing to lose.",
        description: "The Lowline is not simply underground. It is the part of Neo Noctis that keeps the official sport honest, dangerous, and hungry. Runs happen there because sanctioned routes cannot answer every ambition.",
        whyItMatters: "Official racing has rules. Lowline racing has terms.",
        tags: ["Lowline Runs", "Black Book", "Crews", "Terms"],
      },
      {
        title: "The Rouxline",
        category: "Neo Noctis // Lounge / garage / family asset",
        image: content.images[2].url,
        definition: "Uno Roux's private lounge and rider house: part social room, part board room, part family territory.",
        description: "The Rouxline is where Uno Roux keeps the room warm, the doors selective, and the family close to the sport's hidden economy. It sits close enough to the Lowline to hear the terms being written, and polished enough for sponsors to pretend they are only there for the view.",
        whyItMatters: "It gives OFF LEDGER an intimate pressure point: family, sponsors, riders, and route whispers in the same room.",
        tags: ["Uno Roux", "Kellan Roux", "Garage", "Access"],
      },
      {
        title: "Gate 8",
        category: "Neo Noctis // Private route access",
        image: content.images[3].url,
        definition: "A valuable gate and route-access point near the Roux family orbit.",
        description: "Gate 8 matters because route access matters. It is one pressure point among many in Neo Noctis, a place where private runs, wager terms, and family position can become public market weather.",
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
                <span className="label">Open city file</span>
                <h2 className="display">The city that made board culture feel like nightlife.</h2>
                <p>Above, Neo Noctis sells glamour. Below, the Lowline sets the terms.</p>
                <span className="btn">Open Neo Noctis File →</span>
              </div>
            </button>
            <div className="city-node-grid">
              {cityFiles.map((file) => (
                <button className="city-node-card clickable-card" onClick={() => setSelected({ ...file, ctas: [{ label: "Open Related Archive", href: "/archive", kind: "primary" }] })} key={file.title}>
                  <img src={file.image} alt="" />
                  <span className="label">{file.category}</span>
                  <h3 className="display">{file.title}</h3>
                  <p>{file.definition}</p>
                  <span className="btn card-cta">Open File →</span>
                </button>
              ))}
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
                <h3 className="display">{block.title}</h3>
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
            { label: "Build In GG", href: "/garage", kind: "submission" },
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

export function CharactersView() {
  const { content } = useSiteContent();
  const [selected, setSelected] = useState<Character | null>(null);

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "Rider files // OFF LEDGER",
          title: "FOLLOW THE RIDERS BEFORE THE INDEX OWNS THEM.",
          body: "Clickable character files for Kellan Roux, Gio Roux, Uno Roux, Vey Sable, and future community-created riders, handlers, oddsmakers, mechanics, models, inventors, brand owners, G//NET personalities, sponsors, and crew members.",
          image: content.images[1].url,
          ctas: [{ label: "Submit a Rider", href: "/garage", kind: "primary" }],
        }
      }} />
      <section className="section">
        <div className="grid four">
          {content.characters.map((character) => (
            <button className="card" key={character.id} onClick={() => setSelected(character)} style={{ textAlign: "left", color: "inherit" }}>
              <div className="card-img"><img src={character.image} alt={character.name} /></div>
              <div className="card-body">
                <span className="label">{character.status}</span>
                <h3 className="display">{character.name}</h3>
                <p className="muted">{character.role}</p>
                <div className="tag-row">{character.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
            </button>
          ))}
        </div>
      </section>
      {selected && <CharacterModal character={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function CharacterModal({ character, onClose }: { character: Character; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="close" onClick={onClose}>x</button>
        <div className="modal-head">
          <img src={character.image} alt={character.name} />
          <div className="modal-title">
            <span className="label">{character.role}</span>
            <h2 className="display" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", margin: 0 }}>{character.name}</h2>
          </div>
        </div>
        <div className="detail-grid"><span className="label">Quote</span><p className="display" style={{ margin: 0, fontSize: "2rem", color: "var(--acid)" }}>"{character.quote}"</p></div>
        {[
          ["Discipline", character.discipline],
          ["Affiliation", character.affiliation],
          ["Location", character.location],
          ["Status", character.status],
          ["Bio", character.bio],
        ].map(([label, value]) => <div className="detail-grid" key={label}><span className="label">{label}</span><span>{value}</span></div>)}
      </div>
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
          <CtaButtons ctas={item.ctas ?? [{ label: "Enter GG", href: "/garage", kind: "primary" }]} />
        </div>
      </div>
    </div>
  );
}

function ArchiveReader({ entry, onClose }: { entry: ArchiveEntry; onClose: () => void }) {
  const { content } = useSiteContent();
  const relatedCharacters = entry.relatedCharacters
    .map((id) => content.characters.find((character) => character.id === id))
    .filter((character): character is Character => Boolean(character));
  const relatedFactions = entry.relatedFactions
    .map((id) => content.factions.find((faction) => faction.id === id))
    .filter((faction): faction is Faction => Boolean(faction));
  const paragraphs = entry.body.split(/\n{2,}/).map((part) => part.trim()).filter(Boolean);

  return (
    <div className="modal-backdrop archive-reader-backdrop" onClick={onClose}>
      <article className="archive-reader" onClick={(event) => event.stopPropagation()}>
        <button className="close reader-close" onClick={onClose}>x</button>
        <header className="archive-reader-hero">
          <img src={entry.image} alt={entry.title} />
          <div className="archive-reader-title">
            <span className="label">{entry.category} // {entry.status} // {entry.publishDate}</span>
            <h2 className="display">{entry.title}</h2>
            <p>{entry.excerpt}</p>
          </div>
        </header>
        <div className="archive-reader-layout">
          <aside className="archive-reader-rail">
            <div><span className="label">Source</span><b>{entry.source}</b></div>
            <div><span className="label">Location</span><b>{entry.location}</b></div>
            <div><span className="label">Canon status</span><b>{entry.status}</b></div>
            <div><span className="label">Related characters</span>{relatedCharacters.length ? relatedCharacters.map((character) => <b key={character.id}>{character.name}</b>) : <b>Unassigned</b>}</div>
            <div><span className="label">Related factions</span>{relatedFactions.length ? relatedFactions.map((faction) => <b key={faction.id}>{faction.name}</b>) : <b>Unassigned</b>}</div>
          </aside>
          <main className="archive-reader-body">
            <span className="label">Archive file</span>
            {paragraphs.map((paragraph, index) => (
              <p className={index === 0 ? "lede" : ""} key={`${entry.id}-${index}`}>{paragraph}</p>
            ))}
            <div className="reader-callout">
              <span className="label">Why this file exists</span>
              <p>The Archive is how G//LYDE WORLD opens before Volume 0: story fragments, route lore, character pressure, visual drops, and files that make the sport feel lived in.</p>
            </div>
            <div className="tag-row">{entry.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            <CtaButtons ctas={[
              { label: "Submit Related Lore", href: "/garage", kind: "submission" },
              { label: "Support A Visual Drop", href: "/support-a-drop", kind: "support" },
              { label: "Open Archive", href: "/archive", kind: "secondary" },
            ]} />
          </main>
        </div>
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
      </div>
    </>
  );
  if (onOpen) {
    return <button className="card archive-card clickable-card" onClick={() => onOpen(entry)}>{inner}<span className="btn card-cta">Read File →</span></button>;
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
  const [selected, setSelected] = useState<ArchiveEntry | null>(null);
  const entries = category === "All" ? content.archive : content.archive.filter((entry) => entry.category === category);

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "THE ARCHIVE",
          title: "STORY DROPS, ROUTE FILES, BLACK BOOK NOTES, AND G//NET CLIPS.",
          body: "The Archive is the story portal: character journals, Off Ledger files, G//NET clips, Black Book notes, route files, sponsor memos, interviews, community submissions, staff canon, and visual drops.",
          image: content.images[0].url,
          ctas: [{ label: "Read Off Ledger", href: "#entries", kind: "primary" }],
        }
      }} />
      <section id="entries" className="section">
        <div className="filters">{categories.map((item) => <button key={item} className={`filter-btn ${item === category ? "active" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="grid">{entries.map((entry) => <ArchiveCard key={entry.id} entry={entry} onOpen={setSelected} />)}</div>
      </section>
      {selected && (
        <ArchiveReader
          onClose={() => setSelected(null)}
          entry={selected}
        />
      )}
    </>
  );
}

export function CollectionView({ type }: { type: "circuits" | "factions" }) {
  const { content } = useSiteContent();
  const [selected, setSelected] = useState<Circuit | Faction | null>(null);
  const isCircuits = type === "circuits";
  const items = isCircuits ? content.circuits : content.factions;
  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: isCircuits ? "Routes & Cities" : "Power blocs",
          title: isCircuits ? "PLANET. CITY. DISTRICT. ROUTE. GATE. CIRCUIT. EVERY LINE HAS A PRICE." : "G//NET MAKES YOU VISIBLE. THE INDEX PRICES YOU. THE BLACK BOOK REMEMBERS WHAT YOU OWE.",
          body: isCircuits ? "A city is not a circuit. Explore the places, gates, tracks, districts, and routes where board culture becomes status, risk, and story." : "The institutions, houses, crews, manufacturers, sponsors, and unofficial systems that control movement, visibility, terms, and debt.",
          image: isCircuits ? content.images[3].url : content.images[2].url,
          ctas: [{ label: isCircuits ? "Submit a Route or City" : "Enter GG", href: isCircuits ? "/submit-circuit" : "/garage", kind: "primary" }],
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
            ctas: [{ label: isCircuits ? "Submit a Route or City" : "Build in GG", href: isCircuits ? "/submit-circuit" : "/garage", kind: "primary" }],
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
          <p className="lead">OFF LEDGER is the first story arc from G//LYDE WORLD: Neo Noctis, The Rouxline, route rights, Oddsmaker pressure, and the moment a local run becomes market weather.</p>
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
    eyebrow: "Garage intake // Rider file",
    title: "Submit a rider for curated review.",
    body: "Create a racer, Handler, Oddsmaker, mechanic, G//NET personality, model, inventor, sponsor figure, or rival. Sharp concepts may influence future archive files after review.",
    titleLabel: "Rider / character name",
    descriptionLabel: "Rider concept, look, personality, pressure, and story hook",
    roleLabel: "Discipline / role / affiliation",
    fitLabel: "Why does this rider belong in G//LYDE?",
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
    body: "Get archive drops, rider files, Garage calls, and Volume 0 development signals as G//LYDE WORLD opens.",
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
    fitLabel: "Why does this collaboration fit G//LYDE WORLD?",
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
          ctas: [{ label: "Back to GG", href: "/garage", kind: "secondary" }],
        }
      }} />
      <section className="section submission-section">
        <div className="submission-layout">
          <form
            className="submission-form"
            onSubmit={async (event) => {
              event.preventDefault();
              setState({ status: "sending", message: "Sending to GG..." });
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
            <label className="field"><span className="label">Visual references link</span><input value={form.visualReferences} onChange={(event) => set("visualReferences", event.target.value)} placeholder="Portfolio, moodboard, Drive folder, social post, etc." /></label>
            <label className="field"><span className="label">{copy.fitLabel}</span><textarea required minLength={24} value={form.fitReason} onChange={(event) => set("fitReason", event.target.value)} /></label>
            <label className="consent-field">
              <input required type="checkbox" checked={form.consent} onChange={(event) => set("consent", event.target.checked)} />
              <span> I understand G//LYDE WORLD is curated. Submission does not guarantee inclusion, ownership, compensation, publication, or canon status.</span>
            </label>
            <button className="btn primary" disabled={state.status === "sending"} type="submit">{state.status === "sending" ? "Submitting..." : "Submit To GG"} →</button>
            {state.message && <div className={`form-status ${state.status}`}><b>{state.status === "sent" ? "Received" : state.status === "error" ? "Check the file" : "Working"}</b><p>{state.message}</p>{state.id && <span className="label">Reference: {state.id}</span>}</div>}
          </form>
          <aside className="submission-side">
            <span className="label">What happens next</span>
            <h2 className="display">Curated review. Clean records. No fake door.</h2>
            <p>Your submission is saved through the site backend for review in GG CONTROL. Strong concepts may be adapted, renamed, merged, expanded, or declined to protect continuity.</p>
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
  const openCalls = ["Neo Noctis Lowline Crews", "G//NET Personalities", "Rival Riders", "Wager House Concepts", "Sponsor Brands", "Gate 8 Rumors", "Board Tuning Houses", "Off-World Routes"];
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
              <span className="label">GG route</span>
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
          <p className="lead">GG is curated, not closed. Every submission becomes a clean review file, then moves through fit, continuity, follow-up, and possible adaptation.</p>
        </div>
        <div className="review-flow-grid">
          {[
            ["01", "Received", "The submission is saved to the backend and appears in GG CONTROL for review."],
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
          <div className="section-head"><div><span className="label">Open calls</span><h2 className="display">What we are looking for now.</h2></div></div>
          <div className="garage-card-grid">{openCalls.map((call) => <Link className="garage-card" href={call.includes("Route") ? "/submit-circuit" : call.includes("Sponsor") || call.includes("House") ? "/submit-sponsor" : call.includes("Board") ? "/submit-machine" : "/submit-rider"} key={call}><span className="label">Open call</span><h3 className="display">{call}</h3><p>Bring a clean hook, a visual direction, and a reason it matters to Neo Noctis or the wider board culture.</p></Link>)}</div>
          <details className="policy-note"><summary>Canon & support notice</summary><p>{content.garage.canonNotice}</p><p>{content.garage.supportNotice}</p></details>
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
