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
  const spotlight = content.characters[0];
  const archivePreview = content.archive.slice(0, 3);
  const doubled = [...content.featureStrip, ...content.featureStrip];

  return (
    <>
      <section className="hero">
        <img className="bg" src={page.hero.image} alt="" />
        <div className="broadcast-strip">
          <div>
            <span><i className="live-dot" /> LIVE // GLYDEWORLD.COM</span>
            <span>OFF LEDGER // VOLUME 0</span>
            <span>NEO NOCTIS // EIDOLON</span>
            <span style={{ marginLeft: "auto", color: "var(--acid)" }}>JOIN THE WORLD</span>
          </div>
        </div>
        <div className="hero-inner">
          <div>
            <p className="label hero-kicker">{page.hero.eyebrow}</p>
            <h1 className="display">{page.hero.title}</h1>
            <p className="hero-copy">{page.hero.body}</p>
            <CtaButtons ctas={page.hero.ctas} />
          </div>
          <div className="telemetry">
            <div><span className="label">First planet</span><b>Eidolon</b></div>
            <div><span className="label">First city</span><b>Neo Noctis</b></div>
            <div><span className="label">First POV</span><b>Kellan Roux</b></div>
            <div><span className="label">First arc</span><b>OFF LEDGER</b></div>
          </div>
        </div>
      </section>

      <div className="ticker"><div className="ticker-track">{doubled.map((item, i) => <span key={`${item}-${i}`}>{item}</span>)}</div></div>

      <section className="section">
        <div className="section-head">
          <div>
            <span className="label">{page.blocks[0].kicker}</span>
            <h2 className="display">{page.blocks[0].title}</h2>
          </div>
          <p className="lead">{page.blocks[0].body}</p>
        </div>
        <div className="quote-panel"><p className="display">{page.blocks[0].quote}</p></div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <span className="label">{page.blocks[1].kicker}</span>
              <h2 className="display">{page.blocks[1].title}</h2>
            </div>
          </div>
          <div className="grid">
            {[
              ["G-Suit", "Body-based gravsport. Foot-thrust, glide soles, wallrides, contact-heavy movement, raw athleticism.", content.images[2].url],
              ["G-Board", "Culture-defining discipline. Boards, tricks, Steez, Lost Lines, crowd impact, style-heavy racing.", content.images[1].url],
              ["G-Rig", "Machine discipline. Speeders, bikes, one-rider rigs, sponsorship money, engineering, elite circuits.", content.images[3].url],
            ].map(([title, body, image]) => (
              <article className="card" key={title}>
                <div className="card-img"><img src={image} alt="" /></div>
                <div className="card-body">
                  <span className="label">Movement system</span>
                  <h3 className="display">{title}</h3>
                  <p className="muted">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid two">
          <article className="card">
            <div className="card-img"><img src={content.images[0].url} alt={content.images[0].alt} /></div>
            <div className="card-body">
              <span className="label">Neo Noctis preview</span>
              <h3 className="display">Above sells glamour. Below sets terms.</h3>
              <p className="muted">The Rouxline was the lounge. Gate 8 was the reason people came.</p>
              <div className="tag-row"><span className="tag">Eidolon</span><span className="tag">Lowline</span><span className="tag">Gate 8</span></div>
            </div>
          </article>
          <article className="card">
            <div className="card-img"><img src={spotlight.image} alt={spotlight.name} /></div>
            <div className="card-body">
              <span className="label">Character spotlight</span>
              <h3 className="display">{spotlight.name}</h3>
              <p className="muted">{spotlight.bio}</p>
              <p className="display" style={{ color: "var(--acid)", fontSize: "1.8rem" }}>"{spotlight.quote}"</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head">
            <div><span className="label">Latest archive drops</span><h2 className="display">THE ARCHIVE IS ALREADY MOVING.</h2></div>
            <Link className="btn" href="/archive">Open Archive →</Link>
          </div>
          <div className="grid">
            {archivePreview.map((entry) => <ArchiveCard key={entry.id} entry={entry} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid two">
          <div>
            <span className="label">The Garage</span>
            <h2 className="display">Curated co-creation, not an open dump.</h2>
            <p className="lead">{content.garage.intro}</p>
            <CtaButtons ctas={[{ label: "Enter The Garage", href: "/garage", kind: "primary" }, { label: "Support Volume 0", href: "/support", kind: "secondary" }]} />
          </div>
          <div className="notice">
            <b>Canon & Submission Notice</b>
            <p>{content.garage.canonNotice}</p>
          </div>
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
    <article className="card">
      <div className="card-img"><img src={entry.image} alt={entry.title} /></div>
      <div className="card-body">
        <span className="label">{entry.category} // {entry.status}</span>
        <h3 className="display">{entry.title}</h3>
        <p className="muted">{entry.excerpt}</p>
        <div className="tag-row">{entry.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      </div>
    </article>
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
