"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import type { ArchiveEntry, Character, CodexTerm, Circuit, Faction, GCore, PageContent } from "@/content/siteContent";
import { useSiteContent } from "@/components/ContentProvider";

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
              <span className="label">Neo Noctis feed</span>
              <b>OFF LEDGER CLIP DETECTED</b>
              <p>Gate 8 access dispute. Rouxline signal. Lowline terms unknown.</p>
              <div className="mini-map">
                <i /><i /><i /><i />
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
    return <button className="card archive-card clickable-card" onClick={() => onOpen(entry)}>{inner}<span className="btn card-cta">Open File →</span></button>;
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
        <FileModal
          onClose={() => setSelected(null)}
          item={{
            title: selected.title,
            category: `${selected.category} // ${selected.status}`,
            image: selected.image,
            definition: selected.excerpt,
            description: selected.body,
            whyItMatters: `${selected.source} // ${selected.location}`,
            tags: selected.tags,
            ctas: [
              { label: "Submit Related Lore", href: "/garage", kind: "submission" },
              { label: "Support A Visual Drop", href: "/support", kind: "support" },
            ],
          }}
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

export function GarageView() {
  const { content } = useSiteContent();
  const page = content.pages.garage;
  const openCalls = ["Neo Noctis Lowline Crews", "G//NET Personalities", "Rival Riders", "Wager House Concepts", "Sponsor Brands", "Gate 8 Rumors", "G-Rig Teams", "Off-World Circuits"];
  return (
    <>
      <RouteHero page={page} />
      <section className="section world-teaser-section">
        <div className="section-head">
          <div><span className="label">Not a form. A front door.</span><h2 className="display">G//LYDE is curated, but it is not closed.</h2></div>
          <p className="lead">Join the world. Support a drop. Submit a concept. Build with us. Support does not buy canon. It funds development, review, visual production, and the chance to build with the team.</p>
        </div>
        <div className="signal-card-grid">
          {[
            ["Follow The World", "Get updates, drops, and early Volume 0 signals.", "/support"],
            ["Support The Build", "Fund character files, visual drops, and pitch-ready materials.", "/support"],
            ["Create With Us", "Submit a rider, crew, sponsor, route, machine, or story file.", "#submission-paths"],
          ].map(([title, body, href]) => (
            <Link className="signal-card" href={href} key={title}><span className="label">Entry point</span><h3 className="display">{title}</h3><p>{body}</p></Link>
          ))}
        </div>
      </section>
      <section className="section" id="submission-paths">
        <div className="section-head">
          <div><span className="label">Choose your route</span><h2 className="display">Entry points</h2></div>
          <p className="lead">{content.garage.prompt}</p>
        </div>
        <div className="grid">
          {content.garage.paths.map((path) => (
            <Link className="card" key={path.title} href={path.href}>
              <div className="card-body">
                <span className="label">Curated review</span>
                <h3 className="display">{path.title}</h3>
                <p className="muted">{path.body}</p>
                <span className="btn">{path.linkLabel} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section garage-home-section">
        <div className="section-inner">
          <div className="section-head"><div><span className="label">Open calls</span><h2 className="display">What we are looking for now.</h2></div></div>
          <div className="garage-card-grid">{openCalls.map((call) => <Link className="garage-card" href="/garage" key={call}><span className="label">Open call</span><h3 className="display">{call}</h3><p>Bring a clean hook, a visual direction, and a reason it matters to Neo Noctis or the wider Cup.</p></Link>)}</div>
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
