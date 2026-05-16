"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ArchiveEntry, Character, PageContent } from "@/content/siteContent";
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
  const spotlight = content.characters.find((character) => character.id === home.characterSpotlight.characterId) ?? content.characters[0];
  const latestDrops = home.latestDropIds
    .map((id) => content.archive.find((entry) => entry.id === id))
    .filter((entry): entry is ArchiveEntry => Boolean(entry));
  const tickerItems = Array.from({ length: 4 }, () => content.featureStrip).flat();

  return (
    <>
      <section className="hero">
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
          <div className="hero-copy-panel">
            <p className="label hero-kicker">{page.hero.eyebrow}</p>
            <h1 className="display">{page.hero.title}</h1>
            <p className="hero-copy">{page.hero.body}</p>
            <CtaButtons ctas={page.hero.ctas} />
          </div>
          <div className="telemetry">
            <div><span className="label">First planet</span><b>Eidolon</b></div>
            <div><span className="label">First city</span><b>Neo Noctis</b></div>
            <div><span className="label">Primary lens</span><b>Kellan Roux</b></div>
            <div><span className="label">First arc</span><b>OFF LEDGER</b></div>
          </div>
        </div>
      </section>

      <div className="ticker gnet-ticker" aria-label="G//NET signal ticker">
        <div className="ticker-track">
          {tickerItems.map((item, i) => <span key={`${item}-${i}`}><i />{item}</span>)}
        </div>
      </div>

      <section className="section start-section">
        <div className="section-head compact">
          <div>
            <span className="label">Start here</span>
            <h2 className="display">START WHERE YOU ARE.</h2>
          </div>
          <p className="lead">Three clean doors into the sport, the story, and the living archive.</p>
        </div>
        <div className="path-grid">
          {home.startHere.map((card, index) => (
            <Link className="path-card" href={card.href} key={card.title}>
              {card.image && <img src={card.image} alt="" />}
              <span className="label">{card.eyebrow}</span>
              <h3 className="display">{card.title}</h3>
              <p>{card.body}</p>
              <div className="tag-row">{card.tags?.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <b className="path-index">{String(index + 1).padStart(2, "0")}</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section editorial-section">
        <div className="section-head">
          <div>
            <span className="label">{page.blocks[0].kicker}</span>
            <h2 className="display">{page.blocks[0].title}</h2>
          </div>
          <p className="lead">{page.blocks[0].body}</p>
        </div>
        <div className="quote-panel"><p className="display">{page.blocks[0].quote}</p></div>
      </section>

      <section className="section alt movement-section">
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

      <section className="section city-story-section">
        <div className="city-story-grid">
          <Link href={home.neoNoctis.href} className="feature-panel city-panel">
            <img src={content.images[0].url} alt={content.images[0].alt} />
            <div>
              <span className="label">{home.neoNoctis.eyebrow}</span>
              <h2 className="display">{home.neoNoctis.title}</h2>
              <p>{home.neoNoctis.body}</p>
              <div className="tag-row">{home.neoNoctis.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
          </Link>
          <Link href={home.offLedger.href} className="feature-panel ledger-panel">
            <div>
              <span className="label">{home.offLedger.eyebrow}</span>
              <h2 className="display">{home.offLedger.title}</h2>
              <p>{home.offLedger.body}</p>
              <span className="btn">Read Off Ledger →</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section character-section alt">
        <div className="section-inner character-spotlight">
          <div className="spotlight-image">
            <img src={spotlight.image} alt={spotlight.name} />
          </div>
          <div className="spotlight-copy">
            <span className="label">{home.characterSpotlight.eyebrow}</span>
            <h2 className="display">{spotlight.name}</h2>
            <h3>{home.characterSpotlight.title}</h3>
            <p>{home.characterSpotlight.body}</p>
            <blockquote>"{spotlight.quote}"</blockquote>
            <p className="label">{home.characterSpotlight.microcopy}</p>
            <CtaButtons ctas={home.characterSpotlight.ctas} />
          </div>
        </div>
      </section>

      <section className="section drops-section">
        <div className="section-inner">
          <div className="section-head">
            <div><span className="label">Latest drops</span><h2 className="display">THE ARCHIVE IS ALREADY MOVING.</h2></div>
            <Link className="btn" href="/archive">Open Archive →</Link>
          </div>
          <div className="drops-grid">
            {latestDrops.map((entry) => <ArchiveCard key={entry.id} entry={entry} />)}
          </div>
        </div>
      </section>

      <section className="section garage-home-section alt">
        <div className="section-inner">
          <div className="section-head">
            <div>
            <span className="label">The Garage</span>
              <h2 className="display">BUILD IN THE GARAGE.</h2>
            </div>
            <p className="lead">Submit riders, crews, sponsors, circuits, machines, and story entries for curated review inside the evolving G//LYDE universe.</p>
          </div>
          <p className="garage-intro">G//LYDE WORLD is being built as a living archive. The Garage is where early supporters, writers, artists, builders, and worldmakers can help shape the edges of the sport without breaking the canon.</p>
          <div className="garage-card-grid">
            {home.garageCards.map((card) => (
              <Link className="garage-card" href={card.href} key={card.title}>
                <span className="label">{card.eyebrow}</span>
                <h3 className="display">{card.title}</h3>
                <p>{card.body}</p>
                <div className="tag-row">{card.tags?.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </Link>
            ))}
          </div>
          <div className="garage-actions">
            <CtaButtons ctas={[
              { label: "Enter The Garage", href: "/garage", kind: "primary" },
              { label: "Submit A Rider", href: "/garage", kind: "submission" },
              { label: "Support Volume 0", href: "/support", kind: "secondary" },
            ]} />
            <details className="policy-note">
              <summary>Read Submission Policy</summary>
              <p>{home.canonNotice}</p>
            </details>
          </div>
        </div>
      </section>

      <section className="section support-band">
        <div className="support-panel">
          <span className="label">{home.supportCta.eyebrow}</span>
          <h2 className="display">{home.supportCta.title}</h2>
          <p>{home.supportCta.body}</p>
          <CtaButtons ctas={home.supportCta.ctas} />
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

function ArchiveCard({ entry }: { entry: ArchiveEntry }) {
  return (
    <Link className="card archive-card" href="/archive">
      <div className="card-img"><img src={entry.image} alt={entry.title} /></div>
      <div className="card-body">
        <span className="label">{entry.category} // {entry.status}</span>
        <h3 className="display">{entry.title}</h3>
        <p className="muted">{entry.excerpt}</p>
        <div className="tag-row">{entry.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      </div>
    </Link>
  );
}

export function ArchiveView() {
  const { content } = useSiteContent();
  const categories = useMemo(() => ["All", ...Array.from(new Set(content.archive.map((entry) => entry.category)))], [content.archive]);
  const [category, setCategory] = useState("All");
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
        <div className="grid">{entries.map((entry) => <ArchiveCard key={entry.id} entry={entry} />)}</div>
      </section>
    </>
  );
}

export function CollectionView({ type }: { type: "circuits" | "factions" }) {
  const { content } = useSiteContent();
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
            <article className="card" key={item.id}>
              <div className="card-img"><img src={item.image} alt={item.name} /></div>
              <div className="card-body">
                <span className="label">{isCircuits ? `${item.planet} // ${item.status}` : item.role}</span>
                <h3 className="display">{item.name}</h3>
                <p className="muted">{isCircuits ? item.description : item.description}</p>
                <div className="tag-row">{(item.tags || []).map((tag: string) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function GarageView() {
  const { content } = useSiteContent();
  const page = content.pages.garage;
  return (
    <>
      <RouteHero page={page} />
      <section className="section" id="submission-paths">
        <div className="section-head">
          <div><span className="label">Submission paths</span><h2 className="display">{content.garage.title}</h2></div>
          <p className="lead">{content.garage.prompt}</p>
        </div>
        <div className="grid">
          {content.garage.paths.map((path) => (
            <article className="card" key={path.title}>
              <div className="card-body">
                <span className="label">Curated review</span>
                <h3 className="display">{path.title}</h3>
                <p className="muted">{path.body}</p>
                <a className="btn" href={path.href}>{path.linkLabel} →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt"><div className="section-inner grid two"><div className="notice"><b>Canon & Submission Notice</b><p>{content.garage.canonNotice}</p></div><div className="notice"><b>Support Notice</b><p>{content.garage.supportNotice}</p></div></div></section>
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
            <article className="card" key={card.title}>
              <div className="card-body">
                <span className="label">Support path</span>
                <h3 className="display">{card.title}</h3>
                <p className="muted">{card.body}</p>
                <a className="btn" href={card.href}>{card.linkLabel} →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt"><div className="section-inner notice"><b>Support Notice</b><p>{content.support.supportNotice}</p></div></section>
    </>
  );
}
