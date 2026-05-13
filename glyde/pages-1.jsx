// G//LYDE WORLD — Home, Lore

const { useState: useState1, useEffect: useEffect1 } = React;

// Shared row used in detail tables
function Row({ label, val }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px dashed var(--line)", fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>
      <span style={{ color: "var(--text-dim)" }}>{label}</span>
      <span style={{ color: "var(--bone)" }}>{val}</span>
    </div>
  );
}

function DetailRow({ label, val }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 16, paddingBottom: 10, borderBottom: "1px dashed var(--line-2)" }}>
      <span className="label">{label}</span>
      <span style={{ fontSize: 14, color: "var(--bone)" }}>{val}</span>
    </div>
  );
}

window.Row = Row;
window.DetailRow = DetailRow;

// =====================================================================
// HOME
// =====================================================================
function HomePage({ go }) {
  return (
    <div className="page-wrap" data-screen-label="00 Home">
      {/* Hero — bright, fashion-tech campaign feel */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>

        {/* Top broadcast strip */}
        <div style={{ position: "relative", zIndex: 5, borderBottom: "1px solid var(--line)", background: "var(--bg-graphite)" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "10px 28px", display: "flex", gap: 24, alignItems: "center", fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--chrome-2)", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--crimson)", boxShadow: "0 0 8px var(--crimson)" }}></span><b style={{ color: "var(--bone)" }}>LIVE</b> · GLYDEWORLD.COM</span>
            <span><GlobeGlyph/> WORLDWIDE CIRCUIT</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span>GG // 001</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span>SEASON 1 — GRAND CUP OPEN</span>
            <span style={{ marginLeft: "auto", color: "var(--acid)" }}>VOLUME 0 — INCOMING</span>
          </div>
        </div>

        {/* Hero photo backdrop with corner-pinned content */}
        <div style={{ position: "relative", minHeight: "76vh", overflow: "hidden" }}>
          <img src="assets/ref-daylight.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}/>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,11,13,0.15) 0%, rgba(10,11,13,0) 25%, rgba(10,11,13,0) 55%, rgba(10,11,13,0.95) 100%)" }}></div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,11,13,0.55) 0%, rgba(10,11,13,0.0) 35%, rgba(10,11,13,0.0) 65%, rgba(10,11,13,0.55) 100%)" }}></div>

          {/* Left vertical strip — disciplines */}
          <div style={{ position: "absolute", top: 28, left: 28, zIndex: 4, display: "flex", flexDirection: "column", gap: 10 }}>
            <Label style={{ color: "var(--bone)" }}>DISCIPLINES · 05</Label>
            {window.DISCIPLINES.map((d) => (
              <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--bone)" }}>
                <span style={{ width: 16, height: 2, background: d.color }}></span>
                <span>{d.label}</span>
              </div>
            ))}
          </div>

          {/* Right vertical strip — circuit IDs */}
          <div style={{ position: "absolute", top: 28, right: 28, zIndex: 4, textAlign: "right", display: "flex", flexDirection: "column", gap: 4 }}>
            <Label style={{ color: "var(--bone)" }}>GRAND CUP · GG-001</Label>
            <span className="label" style={{ color: "var(--text-dim)" }}>SEASON 1 · ROUND 03</span>
            <span className="label" style={{ color: "var(--text-dim)" }}>NEXT: SOLAR HARBOR</span>
            <div style={{ marginTop: 18 }}>
              <Pill color="var(--acid)">CIRCUIT OPEN</Pill>
            </div>
          </div>

          {/* Center: massive wordmark */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 3, padding: "0 28px", textAlign: "center" }}>
            <Wordmark size="clamp(120px, 22vw, 360px)" />
            <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "center", color: "var(--bone)" }}>
              <span className="label" style={{ color: "var(--bone)" }}>An OVER//UNDER Universe</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span className="label" style={{ color: "var(--bone)" }}>The world's most dangerous gravsport</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span className="label" style={{ color: "var(--acid)" }}>Ride. Risk. Rise.</span>
            </div>
          </div>

          {/* Bottom: CTAs + tagline */}
          <div style={{ position: "absolute", bottom: 36, left: 0, right: 0, zIndex: 4, padding: "0 28px" }}>
            <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr auto", gap: 30, alignItems: "end" }} className="hero-grid">
              <div>
                <h2 className="display" style={{ fontSize: "clamp(40px, 5.6vw, 84px)", margin: 0, color: "var(--bone)", letterSpacing: "-0.015em", lineHeight: 0.95 }}>
                  Three ways to move. One way to rise.
                </h2>
                <p style={{ marginTop: 14, fontSize: 15.5, color: "var(--bone)", maxWidth: 700, lineHeight: 1.55, opacity: 0.9 }}>
                  Riders race across cities, skyways, orbital routes, and illegal circuits using <b>G-Suits</b>, <b>Gravboards</b>, and <b>G-Rigs</b>. Style shapes your build. Wagers shape your fate. Every route has a price.
                </p>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={() => go("gravsport")}>EXPLORE G//LYDE WORLD →</button>
                <button className="btn btn-secondary" onClick={() => go("leagues")} style={{ background: "rgba(10,11,13,0.45)", backdropFilter: "blur(6px)" }}>VIEW GRAND CUP →</button>
                <button className="btn btn-secondary" onClick={() => go("machines")} style={{ background: "rgba(10,11,13,0.45)", backdropFilter: "blur(6px)" }}>DISCOVER MACHINES →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Discipline rail */}
        <DisciplineRail/>
      </section>

      {/* Sponsor ticker */}
      <Ticker items={window.SPONSORS.map(s => `${s.name} · ${s.role.toUpperCase()}`)}/>

      {/* ============================================================
          THREE CATEGORIES
         ============================================================ */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "84px 28px 56px" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 26, flexWrap: "wrap", gap: 14 }}>
          <div>
            <Eyebrow>GRAVSPORT · 02</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(46px, 6.5vw, 100px)", margin: "12px 0 0", color: "var(--bone)", letterSpacing: "-0.015em" }}>
              G-SUIT · GRAVBOARD · G-RIG
            </h2>
          </div>
          <button className="btn btn-secondary" onClick={() => go("gravsport")}>OPEN GRAVSPORT →</button>
        </div>

        <div className="g3">
          {window.CATEGORIES.map((c) => (
            <div key={c.id} className="card clickable sweep" onClick={() => go("gravsport")} style={{ padding: 0, overflow: "hidden", minHeight: 460, display: "flex", flexDirection: "column", borderTop: `2px solid ${c.accent}` }}>
              <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                <img src={c.image} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 30%, rgba(10,11,13,0.85) 100%), radial-gradient(circle at top right, ${c.accent}22, transparent 60%)` }}></div>
                <div style={{ position: "absolute", top: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <Label style={{ color: c.accent }}>{c.code} · {c.tag.toUpperCase()}</Label>
                  <Label style={{ color: "var(--bone)" }}>0{window.CATEGORIES.indexOf(c)+1}/03</Label>
                </div>
                <div style={{ position: "absolute", bottom: 14, left: 14, right: 14 }}>
                  <h3 className="display" style={{ fontSize: 60, color: "var(--bone)", margin: 0, lineHeight: 0.92, letterSpacing: "-0.02em" }}>{c.name.toUpperCase()}</h3>
                </div>
                <CornerMarks color="rgba(245,243,236,0.5)"/>
              </div>
              <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.55, margin: 0 }}>{c.short}</p>
                <p className="display" style={{ fontSize: 22, color: c.accent, margin: 0, lineHeight: 1.05, fontStyle: "italic" }}>"{c.tagline}"</p>
                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="label">OPEN CATEGORY →</span>
                  <GlobeGlyph/>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28, padding: 22, border: "1px solid var(--line)", background: "var(--bg-panel)", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <Label style={{ color: "var(--acid)" }}>WORLD NOTE</Label>
          <p className="display" style={{ margin: 0, fontSize: 22, color: "var(--bone)", letterSpacing: "-0.005em" }}>
            The world does not race on wheels anymore. Three ways to move. One way to rise.
          </p>
        </div>
      </section>

      {/* ============================================================
          FEATURED CIRCUITS
         ============================================================ */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "56px 28px" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 22, flexWrap: "wrap", gap: 14 }}>
          <div>
            <Eyebrow>CIRCUITS · 03</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 76px)", margin: "10px 0 0", color: "var(--bone)" }}>FEATURED CIRCUITS</h2>
          </div>
          <button className="btn btn-secondary" onClick={() => go("circuits")}>ALL CIRCUITS →</button>
        </div>

        <div className="g4" style={{ gap: 14 }}>
          {window.CIRCUITS.slice(0, 4).map((c) => (
            <div key={c.id} className="card clickable sweep" onClick={() => go("circuits")} style={{ padding: 0, overflow: "hidden", minHeight: 280, display: "flex", flexDirection: "column", borderTop: `2px solid ${c.accent}` }}>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <img src={c.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(1.1)" }}/>
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(10,11,13,0.0) 30%, rgba(10,11,13,0.92) 100%), radial-gradient(circle at top right, ${c.accent}33, transparent 50%)` }}></div>
                <div style={{ position: "absolute", top: 12, left: 12, display: "flex", flexDirection: "column", gap: 4 }}>
                  <Label style={{ color: c.accent }}>{c.code}</Label>
                  <span className="label" style={{ color: "var(--bone)" }}>● {c.status}</span>
                </div>
                <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
                  <h3 className="display" style={{ fontSize: 26, color: "var(--bone)", margin: 0, lineHeight: 0.95 }}>{c.name.toUpperCase()}</h3>
                </div>
                <CornerMarks color="rgba(245,243,236,0.4)" size={10}/>
              </div>
              <div style={{ padding: 14, fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--chrome)", display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-dim)" }}>{c.region.split("·")[0]}</span>
                <span>{c.tag.split("·")[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          GRAND CUP MODULE
         ============================================================ */}
      <section style={{ background: "var(--bg-graphite)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "64px 28px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 50, alignItems: "center" }} className="hero-grid">
          <div>
            <Label style={{ color: "var(--sol)" }}>SEASON 1 · ROUND 03</Label>
            <h2 className="display" style={{ fontSize: "clamp(50px, 8vw, 130px)", margin: "10px 0 0", color: "var(--bone)", letterSpacing: "-0.02em", lineHeight: 0.9 }}>
              THE<br/>GRAND CUP
            </h2>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--text)", lineHeight: 1.65, maxWidth: 560 }}>
              The premier worldwide championship of G//LYDE. A year-long calendar of marquee circuits — Overcity, Solar Harbor, Skyport, Glacial Edge — ending in a televised final on the Overcity skyline.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={() => go("leagues")}>OPEN GRAND CUP →</button>
              <button className="btn btn-secondary" onClick={() => go("riders")}>SEEDING & RIDERS →</button>
            </div>
          </div>
          <div className="tile" style={{ padding: 24, background: "var(--bg-panel)", border: "1px solid var(--line)" }}>
            <Label>CALENDAR · GG//001 SEASON 1</Label>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column" }}>
              {[
                { r: "R01", name: "OVERCITY METRO CORE", date: "06.22", status: "✓" },
                { r: "R02", name: "ASHFALL RUN", date: "07.05", status: "✓" },
                { r: "R03", name: "SOLAR HARBOR", date: "07.19", status: "● LIVE" },
                { r: "R04", name: "SKYPORT DISTRICT", date: "08.02", status: "—" },
                { r: "R05", name: "GLACIAL EDGE", date: "08.16", status: "—" },
                { r: "R06", name: "VEILREACH", date: "??.??", status: "REDACTED" },
              ].map((round) => (
                <div key={round.r} style={{ display: "grid", gridTemplateColumns: "44px 1fr auto auto", gap: 14, padding: "12px 0", borderBottom: "1px dashed var(--line)", alignItems: "center", fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  <span style={{ color: "var(--text-faint)" }}>{round.r}</span>
                  <span style={{ color: "var(--bone)" }}>{round.name}</span>
                  <span style={{ color: "var(--text-dim)" }}>{round.date}</span>
                  <span style={{ color: round.status.startsWith("●") ? "var(--acid)" : round.status === "REDACTED" ? "var(--rift)" : "var(--text-faint)" }}>{round.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SPONSORS GRID
         ============================================================ */}
      <section style={{ background: "var(--bone)", color: "var(--bg)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "64px 28px" }}>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 22, flexWrap: "wrap", gap: 14 }}>
            <div>
              <Label style={{ color: "#5a5a52" }}>OFFICIAL · 09 PARTNERS</Label>
              <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 72px)", margin: "10px 0 0", color: "var(--bg)" }}>OFFICIAL SPONSORS</h2>
            </div>
            <span className="label" style={{ color: "#5a5a52" }}>SEASON 1 · WORLDWIDE</span>
          </div>
          <div className="g3" style={{ gap: 0, border: "1px solid rgba(0,0,0,0.12)" }}>
            {window.SPONSORS.map((s, i) => (
              <div key={s.id} style={{ padding: "26px 22px", borderRight: (i+1) % 3 !== 0 ? "1px solid rgba(0,0,0,0.12)" : "none", borderBottom: i < 6 ? "1px solid rgba(0,0,0,0.12)" : "none", display: "flex", flexDirection: "column", gap: 8 }} className="sponsor-cell">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <Label style={{ color: s.legit ? "#5a5a52" : "var(--crimson)" }}>{s.code} · {s.legit ? "LICENSED" : "RESTRICTED"}</Label>
                  <span className="display" style={{ fontSize: 28, color: s.legit ? "var(--bg)" : "var(--crimson)", letterSpacing: "-0.02em" }}>{s.mono}</span>
                </div>
                <h3 className="display" style={{ fontSize: 22, margin: 0, color: "var(--bg)" }}>{s.name}</h3>
                <span className="label" style={{ color: "#5a5a52" }}>{s.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          RUMORS FROM THE GRID
         ============================================================ */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "84px 28px 60px" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 22, flexWrap: "wrap", gap: 14 }}>
          <div>
            <Eyebrow>UNVERIFIED · GRID INTERCEPT</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(38px, 5vw, 76px)", margin: "10px 0 0", color: "var(--bone)" }}>RUMORS FROM THE GRID</h2>
          </div>
          <button className="btn btn-secondary" onClick={() => go("codex")}>OPEN CODEX →</button>
        </div>
        <div className="g3">
          {window.RUMORS.map((r, i) => (
            <div key={i} className="card" style={{ borderLeft: "2px solid var(--rift)", minHeight: 140 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Label style={{ color: "var(--rift)" }}>● UNVERIFIED · {r.tag}</Label>
                <span className="label" style={{ color: "var(--text-faint)" }}>R{String(i+1).padStart(2,"0")}</span>
              </div>
              <p style={{ marginTop: 10, fontSize: 14, color: "var(--bone)", lineHeight: 1.55, fontStyle: "italic" }}>"{r.body}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          THESIS BAND
         ============================================================ */}
      <section style={{ background: "var(--bone)", color: "var(--bg)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "56px 28px", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 30, alignItems: "center" }} className="thesis-grid">
          <Label style={{ color: "#5a5a52" }}>THESIS · 001</Label>
          <h2 className="display" style={{ fontSize: "clamp(34px, 5vw, 70px)", margin: 0, letterSpacing: "-0.02em" }}>
            STYLE IS NOT COSMETIC.<br/>IT IS MECHANICAL.
          </h2>
          <button className="btn" style={{ background: "var(--bg)", color: "var(--bone)" }} onClick={() => go("gcore")}>READ G-CORE →</button>
        </div>
      </section>

      {/* ============================================================
          VOLUME 0 / TRANSMEDIA TEASER
         ============================================================ */}
      <section style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--line)" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--prism)" }}></div>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 50, alignItems: "end" }} className="hero-grid">
            <div>
              <Eyebrow>FORTHCOMING · VOLUME 0</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(46px, 7vw, 110px)", margin: "16px 0 0", color: "var(--bone)", letterSpacing: "-0.02em", lineHeight: 0.9 }}>
                AN OVER//UNDER<br/>UNIVERSE.
              </h2>
              <p style={{ marginTop: 20, fontSize: 16, color: "var(--text)", lineHeight: 1.7, maxWidth: 580 }}>
                G//LYDE is the first opened chamber of <b style={{ color: "var(--bone)" }}>OVER//UNDER</b> — a universe built to be read, played, watched, worn, and entered. Volume 0 establishes the foundation. Volume 1 expands the world.
              </p>
            </div>
            <div className="g2" style={{ gap: 8 }}>
              {[
                { t: "MANGA", c: "var(--acid)" },
                { t: "GAME PROTOTYPES", c: "var(--ion)" },
                { t: "ANIMATED SHORTS", c: "var(--rift)" },
                { t: "MUSIC & BROADCAST", c: "var(--sol)" },
                { t: "CHARACTER DROPS", c: "var(--nova)" },
                { t: "FASHION + GEAR", c: "var(--crimson)" },
                { t: "INTERACTIVE LORE", c: "var(--verdant)" },
                { t: "RIDER SUBMISSIONS", c: "var(--bone)" },
              ].map((it) => (
                <div key={it.t} className="tile" style={{ borderLeft: `2px solid ${it.c}`, padding: "14px 16px" }}>
                  <Label style={{ color: it.c }}>FORMAT</Label>
                  <h4 className="display" style={{ fontSize: 18, margin: "4px 0 0", color: "var(--bone)" }}>{it.t}</h4>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 40, padding: 22, background: "var(--bg-graphite)", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
            <p style={{ margin: 0, fontFamily: "JetBrains Mono, monospace", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--chrome)" }}>
              THE SPORT IS THE ENTRY POINT. THE WORLD IS THE ENGINE. THE COMMUNITY IS THE ACCELERATION.
            </p>
            <button className="btn btn-acid" onClick={() => go("lore")}>READ THE LORE →</button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .thesis-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </div>
  );
}

// =====================================================================
// LORE
// =====================================================================
function LorePage({ go }) {
  return (
    <div className="page page-wrap" data-screen-label="01 Lore">
      <PageHeader tag="LORE · 01" title={<>LORE<br/>ARCHIVE</>} code="ARCHIVE // GG-001" meta={["AN OVER//UNDER UNIVERSE"]}/>

      <section style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, marginBottom: 80 }} className="lore-grid">
        <div>
          <Eyebrow>FILE 01 · WHAT IS G//LYDE</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 24px", color: "var(--bone)" }}>
            A planetary sport made out of survival.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)", maxWidth: 600 }}>
            On the surface, G//LYDE is the world's most dangerous gravsport — riders racing across cities, skyways, deserts, harbors, polar plateaus, broken transit lines, and illegal markets, on three categories of personal anti-gravity machine.
          </p>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: "var(--text)", maxWidth: 600 }}>
            Beneath the surface, G//LYDE is an economy. A social ladder. A wager system. A culture of style. A path out of poverty. A stage for the elite. A battlefield for the desperate. A religion for those who believe motion is freedom.
          </p>
          <p style={{ marginTop: 26, fontSize: 13, lineHeight: 1.7, color: "var(--text-dim)", maxWidth: 600, fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            G//LYDE began with boards. It evolved into a full gravsport ecosystem of G-Suits, Gravboards, and G-Rigs — circling the planet and, if the rumors hold, already touching low orbit.
          </p>
        </div>
        <div className="hero-photo" style={{ aspectRatio: "4/5", border: "1px solid var(--line)" }}>
          <img src="assets/ref-metroascent.jpg" alt=""/>
          <div className="scrim"></div>
          <CornerMarks color="rgba(245,243,236,0.4)"/>
          <div style={{ position: "absolute", bottom: 18, left: 18, right: 18 }}>
            <Label style={{ color: "var(--acid)" }}>METRO ASCENT // RD-01</Label>
            <div className="display" style={{ fontSize: 30, color: "var(--bone)", marginTop: 4 }}>RIDE. RISK. RISE.</div>
          </div>
        </div>
      </section>

      <RouteLine/>

      <section style={{ background: "var(--bg-panel)", border: "1px solid var(--line)", padding: "48px", marginTop: 60 }}>
        <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 30 }} className="thesis-row">
          <Label>THESIS · 02</Label>
          <div>
            <h3 className="display" style={{ fontSize: "clamp(34px, 4vw, 60px)", margin: 0, color: "var(--bone)" }}>
              Style is not cosmetic. It is mechanical.
            </h3>
            <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="lore-twocol">
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text)" }}>
                G//LYDE is not only about winning races. It is about how movement exposes the truth of the rider. A sloppy first-place finish may win the match. A legendary third-place trick line may win the city.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text)" }}>
                A rider becomes what they repeatedly do under pressure. An aggressive rider becomes aggression. A technical rider becomes precision. A stylish rider becomes spectacle.
              </p>
            </div>
          </div>
        </div>
        <div className="g4" style={{ marginTop: 40 }}>
          {[
            { who: "AGGRESSIVE", line: "becomes aggression.", color: "var(--crimson)" },
            { who: "TECHNICAL", line: "becomes precision.", color: "var(--nova)" },
            { who: "STYLISH", line: "becomes spectacle.", color: "var(--acid)" },
            { who: "DESPERATE", line: "becomes someone the city cannot ignore.", color: "var(--rift)" },
          ].map((b, i) => (
            <div key={i} className="tile" style={{ borderLeft: `2px solid ${b.color}` }}>
              <Label style={{ color: b.color }}>A {b.who} RIDER</Label>
              <p style={{ marginTop: 8, fontSize: 14, color: "var(--bone)", lineHeight: 1.55 }}>{b.line}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60 }} className="lore-grid">
        <div className="hero-photo" style={{ aspectRatio: "4/5", border: "1px solid var(--line)" }}>
          <img src="assets/ref-night.jpg" alt=""/>
          <div className="scrim"></div>
          <CornerMarks color="rgba(245,243,236,0.4)"/>
        </div>
        <div>
          <Eyebrow>FILE 03 · MOVEMENT AS SURVIVAL</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 24px", color: "var(--bone)" }}>
            The Grand Cup crowns champions.<br/>The Lowline makes legends.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
            On every continent, on every layer of every city, the same loop repeats: riders trade speed for status, status for sponsors, sponsors for distance. Movement is the only ladder the system forgot to lock.
          </p>
          <div style={{ marginTop: 26, padding: 22, border: "1px solid var(--line)", background: "var(--bg-panel)" }}>
            <Label>QUOTE · UNATTRIBUTED</Label>
            <p className="display" style={{ fontSize: 26, margin: "10px 0 0", color: "var(--bone)" }}>
              "Freedom moves fast."
            </p>
          </div>
        </div>
      </section>

      {/* OVER//UNDER UNIVERSE */}
      <section style={{ marginTop: 80, padding: "56px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--prism)" }}></div>
        <div style={{ textAlign: "center", maxWidth: 980, margin: "0 auto", padding: "0 20px" }}>
          <Eyebrow>FILE 04 · OVER//UNDER UNIVERSE</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(46px, 7vw, 110px)", margin: "20px 0 0", color: "var(--bone)", letterSpacing: "-0.02em" }}>
            OVER // UNDER
          </h2>
          <p style={{ marginTop: 22, fontSize: 16, lineHeight: 1.7, color: "var(--text-dim)" }}>
            G//LYDE is the first opened chamber of a larger universe called <b style={{ color: "var(--bone)" }}>OVER//UNDER</b>. The world above the clouds, and the world buried beneath. Wager Races, The Blooded, Grace, Pre-Core relics, Orbital 9 — every term in the Codex points down into a deeper story still being unearthed.
          </p>
          <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.7, color: "var(--text-faint)", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", letterSpacing: "0.16em" }}>
            Volume 0 forthcoming · Volume 1 incoming · The first off-world circuit is only a rumor. For now.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={() => go("codex")}>OPEN CODEX →</button>
            <button className="btn btn-secondary" onClick={() => go("circuits")}>SEE THE CIRCUITS →</button>
          </div>
        </div>
      </section>

      {/* The First Run story callout */}
      <section style={{ marginTop: 80, padding: 40, background: "var(--bg-panel)", border: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 50 }} className="lore-grid">
          <div>
            <Eyebrow>STORY · THE FIRST RUN</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", margin: "16px 0 0", color: "var(--bone)" }}>Two riders.<br/>One world.</h2>
            <p style={{ marginTop: 22, fontSize: 15, lineHeight: 1.7, color: "var(--text)", maxWidth: 540 }}>
              The first opened story does not center one hero. It follows two connected riders moving through the same world from opposite altitudes — bound by family, debt, rivalry, or survival.
            </p>
          </div>
          <div className="g2" style={{ alignContent: "start" }}>
            <div className="tile" style={{ borderLeft: "2px solid var(--acid)", minHeight: 200 }}>
              <Label style={{ color: "var(--acid)" }}>PERSPECTIVE A · LOWLINE</Label>
              <h3 className="display" style={{ fontSize: 24, margin: "10px 0", color: "var(--bone)" }}>THE STREET BROTHER</h3>
              <p style={{ fontSize: 13.5, color: "var(--text)", lineHeight: 1.55 }}>Illegal runs. Street crews. Wagers. Black Shops. Escape velocity from a system that never planned to release him.</p>
            </div>
            <div className="tile" style={{ borderLeft: "2px solid var(--nova)", minHeight: 200 }}>
              <Label style={{ color: "var(--nova)" }}>PERSPECTIVE B · CROWN-ADJACENT</Label>
              <h3 className="display" style={{ fontSize: 24, margin: "10px 0", color: "var(--bone)" }}>THE CIRCUIT BROTHER</h3>
              <p style={{ fontSize: 13.5, color: "var(--text)", lineHeight: 1.55 }}>Official circuits. Sponsorships. Cameras. A career engineered before he was old enough to refuse it.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .lore-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .thesis-row { grid-template-columns: 1fr !important; }
          .lore-twocol { grid-template-columns: 1fr !important; gap: 18px !important; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { HomePage, LorePage });
