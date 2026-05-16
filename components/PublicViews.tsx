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
      body: "The city where gravsports became nightlife, status, and religion.",
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
            <span>A GRAVSPORTS SAGA FROM THE OVER//UNDER UNIVERSE</span>
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
            <div className="hero-poster-card">
              <div className="feed-topline">
                <span className="label"><i className="live-dot" /> G//NET mirror</span>
                <span className="feed-status">unverified clip</span>
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
                <span className="label">Neo Noctis feed</span>
                <b>OFF LEDGER CLIP DETECTED</b>
                <p>Route-right challenge. Sponsor interest rising. Black Book terms unknown.</p>
              </div>
              <div className="feed-metrics">
                <div><span className="label">Source</span><b>G//NET scrape</b></div>
                <div><span className="label">Sector</span><b>Unknown</b></div>
                <div><span className="label">Price</span><b>moving</b></div>
              </div>
            </div>
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
            { label: "Join The World", href: "/support", kind: "primary" },
            { label: "Submit A Concept", href: "/garage", kind: "submission" },
            { label: "Support A Drop", href: "/support", kind: "support" },
            { label: "Collaborate", href: "/support", kind: "secondary" },
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
        definition: "A chrome lounge above the Lowline, beautiful enough for celebrities and useful enough for danger.",
        description: "The Rouxline is a small nightclub, private garage, social room, and old access node. Uno Roux built it like a place to be seen. People who understand route rights know it is also a place to disappear into the city.",
        whyItMatters: "The Rouxline was the lounge. Gate 8 was the reason people came.",
        tags: ["Uno Roux", "Kellan Roux", "Garage", "Access"],
      },
      {
        title: "Gate 8",
        category: "Neo Noctis // Private route access",
        image: content.images[3].url,
        definition: "The private route point worth more than the building. The door everyone pretends not to want.",
        description: "Gate 8 is route geometry, family leverage, and market pressure in one place. When a Wager House challenges it, they are not challenging a door. They are challenging who gets to control visibility.",
        whyItMatters: "In Neo Noctis, real estate was expensive. Access was priceless.",
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
              definition: "The Miami / Vegas / Monaco of Eidolon, where gravsports became nightlife, status, and religion.",
              description: "Neo Noctis is coastal, vertical, luxurious, hot, social, and dangerous underneath the beauty. Off-world visitors, models, inventors, brand owners, riders, Oddsmakers, sponsors, and G//NET personalities come here to watch, wager, party, and become part of the sport.",
              whyItMatters: "This is the first iconic setting because it makes the promise and the cost of G//LYDE visible in the same skyline.",
              tags: ["Eidolon", "Lowline", "Gate 8", "The Rouxline"],
              ctas: [{ label: "Read Off Ledger", href: "/off-ledger", kind: "primary" }],
            })}>
              <img src={content.images[0].url} alt={content.images[0].alt} />
              <div>
                <span className="label">Open city file</span>
                <h2 className="display">The city that made gravsports feel like nightlife.</h2>
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
      "G-SUIT": {
        category: "Body discipline // Gravsports",
        definition: "A body-based gravsport built around G-Suits, foot-thrust, glide soles, wallrides, contact pressure, and raw athletic movement.",
        description: "G-Suit riders turn their own bodies into the vehicle. They launch, brake, wallride, redirect, and absorb impact through suit control instead of standing on a board or sitting inside a rig. It is the most exposed discipline because the rider has the least separation from the route.",
        whyItMatters: "G-Suit owns the nerve. It proves who can make gravity personal before the machines and sponsors start translating talent into market value.",
        tags: ["Foot-thrust", "Glide soles", "Wallrides", "Contact control", "Raw movement"],
      },
      "G-BOARD": {
        category: "Culture discipline // Gravsports",
        definition: "The style-led discipline of boards, Steez, tricks, Lost Lines, crowd impact, route expression, and remembered movement.",
        description: "G-Board is where G//LYDE gets its cultural heat. A great board rider does not only clear a route. They make the route feel newly possible. Crowds remember the line, the posture, the risk, the sound, and the moment the rider decides to take a path nobody priced correctly.",
        whyItMatters: "G-Board owns the culture. It is the discipline kids copy, G//NET clips fastest, and sponsors chase when technique becomes a look.",
        tags: ["Steez", "Lost Lines", "Crowd impact", "Route expression", "Trick pressure"],
      },
      "G-RIG": {
        category: "Machine discipline // Gravsports",
        definition: "The high-money machine discipline of speeders, one-rider rigs, elite engineering, sponsor pressure, and sector dominance.",
        description: "G-Rig is where engineering becomes status. Rigs can be bikes, speeders, single-rider craft, and prototype machines tuned around a rider's sync behavior. Official circuits love them because they are fast, measurable, expensive, and easy to package as spectacle.",
        whyItMatters: "G-Rig owns the money. Manufacturers, sponsors, and Grand Cup teams use it to turn speed into empire.",
        tags: ["Sector speed", "Engineering", "Sponsors", "Telemetry", "Prototype money"],
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
    ["Core fantasy", "Your body becomes the route.", "Your line becomes culture.", "Your machine becomes status."],
    ["What wins", "Control, nerve, contact discipline.", "Placement, Steez, execution, crowd memory.", "Sector dominance, speed, sync, engineering."],
    ["Where it lives", "Training decks, wall routes, contact-heavy events.", "Lowline runs, showcases, broadcast clips.", "Official circuits, team garages, sponsor decks."],
    ["What can go wrong", "Impact, overcorrection, suit lag.", "Lost line, crowd pressure, route misread.", "Core failure, sync drift, expensive mistakes."],
  ];

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "Movement systems // Body / Board / Machine",
          title: "G-SUIT. G-BOARD. G-RIG. THREE WAYS TO ENTER THE SPORT.",
          body: "Gravsports are not one machine or one style. G//LYDE is fought across body, board, and rig. Each discipline has its own culture, scoring logic, danger, and path into Neo Noctis.",
          image: content.images[2].url,
          ctas: [
            { label: "Explore Gravsports", href: "/gravsports", kind: "primary" },
            { label: "Open G//LYDE Racing", href: "/glyde-racing", kind: "secondary" },
          ],
        }
      }} />
      <section className="section movement-deep-section">
        <div className="section-head">
          <div>
            <span className="label">System files</span>
            <h2 className="display">Three ways to move. One way to be remembered.</h2>
          </div>
          <p className="lead">Open each discipline for the rules, culture, risk, and story value behind the equipment. This is where G//LYDE stops being hoverboards and becomes an ecosystem.</p>
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
            <div className="system-table-row header"><span>Signal</span><span>G-Suit</span><span>G-Board</span><span>G-Rig</span></div>
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
          <h2 className="display">G-Board owns the culture. G-Rig owns the money. G-Suit owns the nerve.</h2>
          <p>The dream changes depending on what you ride. So does the danger, the sponsor interest, the crowd memory, and the price The Index puts beside your name.</p>
          <CtaButtons ctas={[
            { label: "Open The Codex", href: "/codex", kind: "primary" },
            { label: "View Characters", href: "/characters", kind: "secondary" },
            { label: "Build In The Garage", href: "/garage", kind: "submission" },
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
          <CtaButtons ctas={item.ctas ?? [{ label: "Enter The Garage", href: "/garage", kind: "primary" }]} />
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
          body: "The Archive is the story portal: Rider Logs, Off Ledger Files, G//NET Clips, Black Book Notes, Circuit Reports, Character Entries, Route Files, Sponsor Memos, Wager Notes, and Visual Drops.",
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
          eyebrow: isCircuits ? "Planetary routes" : "Power blocs",
          title: isCircuits ? "THOUSANDS RIDE LOCAL. HUNDREDS QUALIFY PLANETARY. TWELVE WORLDS HOST THE CUP." : "G//NET MAKES YOU VISIBLE. THE INDEX PRICES YOU. THE BLACK BOOK REMEMBERS WHAT YOU OWE.",
          body: isCircuits ? "Neo Noctis is the first key setting, but the world is interplanetary. Grand Cup hosts span multiple worlds." : "The institutions, houses, crews, manufacturers, sponsors, and unofficial systems that control movement, visibility, terms, and debt.",
          image: isCircuits ? content.images[3].url : content.images[2].url,
          ctas: [{ label: isCircuits ? "Submit a Circuit" : "Enter The Garage", href: "/garage", kind: "primary" }],
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
            category: isCircuits ? "Circuit / Location" : "Faction / Power bloc",
            image: selected.image,
            definition: isCircuits ? `${(selected as Circuit).planet} // ${(selected as Circuit).status}` : (selected as Faction).role,
            description: selected.description,
            whyItMatters: isCircuits ? `${(selected as Circuit).risk} // ${(selected as Circuit).discipline}` : (selected as Faction).agenda,
            tags: selected.tags,
            ctas: [{ label: isCircuits ? "Submit a Circuit" : "Build in The Garage", href: "/garage", kind: "primary" }],
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
  const categories = useMemo(() => ["All", ...Array.from(new Set(content.codex.map((term) => term.category)))], [content.codex]);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<CodexTerm | null>(null);
  const terms = content.codex.filter((term) => {
    const matchesCategory = category === "All" || term.category === category;
    const text = `${term.term} ${term.definition} ${term.tags.join(" ")}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase());
  });

  return (
    <>
      <RouteHero page={{
        hero: {
          eyebrow: "Codex",
          title: "THE SPORT HAS LANGUAGE. THE CITY HAS MEMORY.",
          body: "Every term in G//LYDE carries weight: a rule, a risk, a rumor, a debt, a machine, a route, or a way to disappear.",
          image: content.images[2].url,
          ctas: [{ label: "Submit a Term", href: "/garage", kind: "submission" }],
        }
      }} />
      <section className="section codex-page-section">
        <div className="filters">
          {categories.map((item) => <button key={item} className={`filter-btn ${item === category ? "active" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="field codex-search"><span className="label">Search Codex</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="G-Core, Steez, Black Book..." /></label>
        <div className="codex-grid">
          {terms.map((term) => (
            <button className="codex-card clickable-card" onClick={() => setSelected(term)} key={term.id}>
              <span className="label">{term.category}</span>
              <h3 className="display">{term.term}</h3>
              <p>{term.definition}</p>
              <div className="tag-row">{term.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <span className="btn card-cta">Open File →</span>
            </button>
          ))}
        </div>
      </section>
      {selected && <FileModal onClose={() => setSelected(null)} item={{
        title: selected.term,
        category: selected.category,
        image: selected.image,
        definition: selected.definition,
        description: `${selected.fullDescription}\n\nIn-world usage: ${selected.usage}`,
        whyItMatters: selected.whyItMatters,
        tags: selected.tags,
        ctas: [{ label: "Submit Related Lore", href: "/garage", kind: "submission" }],
      }} />}
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
    title: "Submit a circuit, city, route, planet, or gate.",
    body: "Pitch an official circuit, Lowline route, private gate, city district, Grand Cup host, or off-world location.",
    titleLabel: "Circuit / route / location name",
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
          ctas: [{ label: "Back to The Garage", href: "/garage", kind: "secondary" }],
        }
      }} />
      <section className="section submission-section">
        <div className="submission-layout">
          <form
            className="submission-form"
            onSubmit={async (event) => {
              event.preventDefault();
              setState({ status: "sending", message: "Sending to The Garage..." });
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
            <button className="btn primary" disabled={state.status === "sending"} type="submit">{state.status === "sending" ? "Submitting..." : "Submit To The Garage"} →</button>
            {state.message && <div className={`form-status ${state.status}`}><b>{state.status === "sent" ? "Received" : state.status === "error" ? "Check the file" : "Working"}</b><p>{state.message}</p>{state.id && <span className="label">Reference: {state.id}</span>}</div>}
          </form>
          <aside className="submission-side">
            <span className="label">What happens next</span>
            <h2 className="display">Curated review. Clean records. No fake door.</h2>
            <p>Your submission is saved through the site backend for review in Admin. Strong concepts may be adapted, renamed, merged, expanded, or declined to protect continuity.</p>
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
  const openCalls = ["Neo Noctis Lowline Crews", "G//NET Personalities", "Rival Riders", "Wager House Concepts", "Sponsor Brands", "Gate 8 Rumors", "G-Rig Teams", "Off-World Circuits"];
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
            ["01", "Received", "The submission is saved to the backend and appears in Admin for review."],
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
          <div className="garage-card-grid">{openCalls.map((call) => <Link className="garage-card" href={call.includes("Circuit") ? "/submit-circuit" : call.includes("Sponsor") || call.includes("House") ? "/submit-sponsor" : call.includes("G-Rig") ? "/submit-machine" : "/submit-rider"} key={call}><span className="label">Open call</span><h3 className="display">{call}</h3><p>Bring a clean hook, a visual direction, and a reason it matters to Neo Noctis or the wider Cup.</p></Link>)}</div>
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
