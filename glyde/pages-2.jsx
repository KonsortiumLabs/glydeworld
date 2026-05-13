// G//LYDE WORLD — Gravsport, Circuits

const { useState: useState2 } = React;

// =====================================================================
// GRAVSPORT — the three categories + core loop + Lost Lines
// =====================================================================
function GravsportPage({ go }) {
  const [active, setActive] = useState2("gsuit");
  const cat = window.CATEGORIES.find(c => c.id === active);

  const loop = [
    { label: "RIDE", sub: "Enter the route." },
    { label: "SCORE", sub: "Place. Trick. Survive." },
    { label: "EARN", sub: "Currency, gear, rep." },
    { label: "DRIFT", sub: "G-Core adapts." },
    { label: "UPGRADE", sub: "Rig and skill." },
    { label: "WAGER", sub: "Risk the ladder." },
    { label: "RISE / FALL", sub: "Ownership shifts." },
  ];

  return (
    <div className="page page-wrap" data-screen-label="02 Gravsport">
      <PageHeader tag="GRAVSPORT · 02" title={<>THE<br/>SPORT</>} code="03 CATEGORIES · GG-001"/>

      <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 96px)", color: "var(--bone)", margin: "0 0 18px", maxWidth: 1200, letterSpacing: "-0.015em", lineHeight: 0.95 }}>
        The world does not race on wheels anymore.
      </h2>
      <p style={{ maxWidth: 780, fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
        G//LYDE is built on three competition categories. They share G-Core technology and a single doctrine. They reward different bodies, different builds, and different kinds of courage.
      </p>

      {/* ============================================================
          CATEGORY TABS + DETAIL
         ============================================================ */}
      <section style={{ marginTop: 48 }}>
        <SHead title="03 CATEGORIES" num="// 02·CATEGORIES" right="G-SUIT · GRAVBOARD · G-RIG"/>

        {/* Tab strip */}
        <div style={{ display: "flex", gap: 0, border: "1px solid var(--line)", marginBottom: 0, overflowX: "auto" }}>
          {window.CATEGORIES.map((c) => (
            <button key={c.id} onClick={() => setActive(c.id)} style={{
              flex: "1 1 0", minWidth: 200,
              padding: "20px 22px",
              background: active === c.id ? "var(--bg-panel-2)" : "transparent",
              borderRight: "1px solid var(--line)",
              borderTop: active === c.id ? `2px solid ${c.accent}` : "2px solid transparent",
              textAlign: "left",
              color: active === c.id ? "var(--bone)" : "var(--chrome-2)",
              cursor: "pointer",
              transition: "background 200ms"
            }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.22em", color: c.accent }}>{c.code} · {c.tag.toUpperCase()}</div>
              <div className="display" style={{ fontSize: 32, marginTop: 6 }}>{c.name.toUpperCase()}</div>
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div key={active} className="fade-in" style={{ border: "1px solid var(--line)", borderTop: "none", padding: 32, background: "var(--bg-panel)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40 }} className="oc-grid">
            <div>
              <Label style={{ color: cat.accent }}>{cat.code} · {cat.tag.toUpperCase()}</Label>
              <h2 className="display" style={{ fontSize: "clamp(50px, 7vw, 100px)", margin: "12px 0 16px", color: "var(--bone)", lineHeight: 0.9, letterSpacing: "-0.02em" }}>{cat.name.toUpperCase()}</h2>
              <p className="display" style={{ fontSize: 28, color: cat.accent, margin: "0 0 14px", fontStyle: "italic" }}>"{cat.tagline}"</p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)", maxWidth: 580 }}>{cat.body}</p>

              <div className="hero-photo" style={{ marginTop: 26, aspectRatio: "16/9", border: "1px solid var(--line-2)" }}>
                <img src={cat.image} alt={cat.name}/>
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(10,11,13,0.2), rgba(10,11,13,0.7)), radial-gradient(circle at 80% 20%, ${cat.accent}30, transparent 50%)` }}></div>
                <CornerMarks color="rgba(245,243,236,0.4)"/>
                <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
                  <div>
                    <Label style={{ color: cat.accent }}>EXAMPLES</Label>
                    <div className="display" style={{ fontSize: 22, color: "var(--bone)", marginTop: 4 }}>{cat.examples}</div>
                  </div>
                  <Barcode/>
                </div>
              </div>
            </div>
            <div>
              <Label>SPEC CARD · {cat.code}</Label>
              <div style={{ marginTop: 14, padding: 22, background: "var(--bg-graphite)", border: "1px solid var(--line)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                  <span className="label" style={{ color: "var(--bone)" }}>{cat.name.toUpperCase()}</span>
                  <span className="label">8 AXES</span>
                </div>
                <SpecTable stats={cat.stats}/>
              </div>

              <div style={{ marginTop: 20, padding: 22, border: `1px dashed ${cat.accent}`, background: "var(--bg-graphite)" }}>
                <Label style={{ color: cat.accent }}>DOCTRINE</Label>
                <p className="display" style={{ fontSize: 26, margin: "10px 0 0", color: "var(--bone)", lineHeight: 1.05 }}>{cat.line}</p>
              </div>

              <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button className="btn btn-secondary" onClick={() => go("machines")}>SEE FULL MACHINE ATLAS →</button>
                <button className="btn btn-secondary" onClick={() => go("riders")}>RIDERS IN CATEGORY →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CORE LOOP
         ============================================================ */}
      <section style={{ marginTop: 80 }}>
        <SHead title="THE CORE LOOP" num="// 02·LOOP" right="07 STAGES"/>
        <LoopBar steps={loop}/>
      </section>

      {/* ============================================================
          RANKED VS WAGER
         ============================================================ */}
      <section style={{ marginTop: 80 }}>
        <SHead title="RANKED IS SPORT. WAGER IS WAR." num="// 02·DOCTRINE"/>
        <div className="g2">
          <div className="card" style={{ borderLeft: "2px solid var(--nova)", minHeight: 280 }}>
            <Label style={{ color: "var(--nova)" }}>RANKED</Label>
            <h3 className="display" style={{ fontSize: 48, margin: "12px 0 0", color: "var(--bone)" }}>SPORT</h3>
            <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
              <Row label="Determines" val="STATUS"/>
              <Row label="Risk" val="REPUTATION"/>
              <Row label="Tells the world" val="HOW GOOD YOU ARE"/>
            </div>
          </div>
          <div className="card" style={{ borderLeft: "2px solid var(--crimson)", minHeight: 280 }}>
            <Label style={{ color: "var(--crimson)" }}>WAGER</Label>
            <h3 className="display" style={{ fontSize: 48, margin: "12px 0 0", color: "var(--bone)" }}>WAR</h3>
            <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
              <Row label="Changes" val="OWNERSHIP"/>
              <Row label="Risk" val="GEAR · SKILLS · LEGENDS · DEBTS"/>
              <Row label="Tells the world" val="WHAT YOU ARE WILLING TO LOSE"/>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BEST OF THREE
         ============================================================ */}
      <section style={{ marginTop: 80 }}>
        <SHead title="BEST OF THREE" num="// 02·DUEL" right="SERIOUS RACE STRUCTURE"/>
        <div className="g3">
          {[
            { i: "01", n: "THE READ", body: "Race One. You learn what they do under pressure. They learn what you give away." },
            { i: "02", n: "THE ADAPTATION", body: "Race Two. The rider who changes faster wins. The rider who can't change loses twice." },
            { i: "03", n: "THE DECLARATION", body: "Race Three. The line you take now is the rider you have chosen to be." },
          ].map((s) => (
            <div key={s.i} className="card" style={{ minHeight: 220 }}>
              <Label>RACE {s.i}</Label>
              <h3 className="display" style={{ fontSize: 32, margin: "10px 0 14px", color: "var(--bone)" }}>{s.n}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-dim)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          RACE TYPES
         ============================================================ */}
      <section style={{ marginTop: 80 }}>
        <SHead title="RACE TYPES" num="// 02·FORMATS" right={`${window.RACE_TYPES.length} FORMATS`}/>
        <div className="g3">
          {window.RACE_TYPES.map((r) => (
            <div key={r.name} className="card" style={{ minHeight: 160 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Label>FORMAT</Label>
                <Pill>{r.type}</Pill>
              </div>
              <h3 className="display" style={{ fontSize: 26, margin: "10px 0 8px", color: "var(--bone)" }}>{r.name.toUpperCase()}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--text-dim)" }}>{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          LOST LINES — folded in as a feature
         ============================================================ */}
      <section style={{ marginTop: 80, padding: 40, background: "var(--bg-panel)", border: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        <RouteLine stroke="var(--acid)" style={{ position: "absolute", top: 30, left: 0, opacity: 0.5 }}/>
        <RouteLine stroke="var(--rift)" style={{ position: "absolute", bottom: 30, left: 0, opacity: 0.3 }}/>

        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, marginBottom: 32 }} className="oc-grid">
            <div>
              <Eyebrow>SUB-SYSTEM · LOST LINES</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 90px)", margin: "16px 0 0", color: "var(--bone)", letterSpacing: "-0.015em", lineHeight: 0.95 }}>
                EVERY ROUTE HAS A SECRET.
              </h2>
              <p style={{ marginTop: 22, fontSize: 16, lineHeight: 1.7, color: "var(--text)", maxWidth: 580 }}>
                A Lost Line is a hidden route sequence buried inside a track, district, or biome. Six gates must chain to clear it. The reward is a one-time <b style={{ color: "var(--acid)" }}>Lineborn Legendary</b> — a relic, skill, or component that cannot be replaced.
              </p>
            </div>
            <div style={{ padding: 22, border: "1px dashed var(--acid)", background: "var(--bg-graphite)" }}>
              <Label style={{ color: "var(--acid)" }}>RIDER PROTOCOL</Label>
              <p className="display" style={{ fontSize: 26, margin: "10px 0 0", color: "var(--bone)", lineHeight: 1.1 }}>
                Knowing the line is not the same as riding it.
              </p>
            </div>
          </div>

          <div className="g3">
            {[
              { i: "01", n: "THE SURFACE", b: "Hit the right surface." },
              { i: "02", n: "THE GAP", b: "Pass through the right gap." },
              { i: "03", n: "THE SKILL", b: "Activate the right skill." },
              { i: "04", n: "THE CHAIN", b: "Chain the right maneuver." },
              { i: "05", n: "THE ANGLE", b: "Hold the right angle." },
              { i: "06", n: "THE COMMIT", b: "Commit at the moment most riders would pull back." },
            ].map((g) => (
              <div key={g.i} className="tile" style={{ minHeight: 110 }}>
                <Label style={{ color: "var(--acid)" }}>GATE {g.i}</Label>
                <h4 className="display" style={{ fontSize: 22, color: "var(--bone)", margin: "6px 0 4px" }}>{g.n}</h4>
                <p style={{ fontSize: 12.5, color: "var(--text-dim)", lineHeight: 1.5, margin: 0 }}>{g.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinction strip */}
      <section style={{ marginTop: 80, background: "var(--bone)", color: "var(--bg)", padding: "44px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }} className="thesis-row">
        <h3 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", margin: 0, letterSpacing: "-0.02em" }}>
          The Grand Cup crowns champions.
        </h3>
        <h3 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", margin: 0, color: "#5e4a00", letterSpacing: "-0.02em" }}>
          The Lowline makes legends.
        </h3>
      </section>
    </div>
  );
}

// =====================================================================
// CIRCUITS — global locations, with Overcity featured + 4-layer detail
// =====================================================================
function CircuitsPage({ go }) {
  const [active, setActive] = useState2("overcity");
  const [overcityLayer, setOvercityLayer] = useState2("crown");
  const c = window.CIRCUITS.find(x => x.id === active);

  return (
    <div className="page page-wrap" data-screen-label="03 Circuits">
      <PageHeader tag="CIRCUITS · 03" title={<>WORLD<br/>CIRCUITS</>} code={`${window.CIRCUITS.length} REGISTERED · 01 RUMORED`}/>

      <p style={{ maxWidth: 760, fontSize: 16, lineHeight: 1.7, color: "var(--text)", marginBottom: 32 }}>
        G//LYDE runs on a planetary calendar — flagship vertical megastructures, coastal sprawls, polar plateaus, deserts, and orbital platforms that may or may not exist. Select a circuit to open its file.
      </p>

      {/* WORLD MAP / circuit cards grid */}
      <div className="g3" style={{ gap: 14, marginBottom: 16 }}>
        {window.CIRCUITS.map((cc) => (
          <div key={cc.id} className={"card clickable sweep " + (active === cc.id ? "active-circuit" : "")} onClick={() => setActive(cc.id)} style={{
            padding: 0, overflow: "hidden", minHeight: 260,
            display: "flex", flexDirection: "column",
            borderTop: `2px solid ${cc.accent}`,
            borderColor: active === cc.id ? cc.accent : "var(--line)"
          }}>
            <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
              <img src={cc.image} alt={cc.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: cc.rumor ? "saturate(0.6) brightness(0.7)" : "saturate(1.1)" }}/>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(10,11,13,0.1) 0%, rgba(10,11,13,0.0) 30%, rgba(10,11,13,0.95) 100%), radial-gradient(circle at top right, ${cc.accent}33, transparent 50%)` }}></div>
              <div style={{ position: "absolute", top: 12, left: 12, right: 12, display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <Label style={{ color: cc.accent }}>{cc.code}</Label>
                <Pill color={cc.mystery || cc.rumor ? "var(--rift)" : cc.accent}>{cc.status}</Pill>
              </div>
              <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
                <span className="label" style={{ color: cc.accent, fontSize: 9 }}>{cc.tag}</span>
                <h3 className="display" style={{ fontSize: 26, color: "var(--bone)", margin: "4px 0 0", lineHeight: 0.95 }}>{cc.name.toUpperCase()}</h3>
              </div>
              <CornerMarks color="rgba(245,243,236,0.4)" size={10}/>
              {(cc.rumor || cc.mystery) && (
                <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, transparent 0 10px, rgba(185,117,255,0.04) 10px 20px)", pointerEvents: "none" }}></div>
              )}
            </div>
            <div style={{ padding: 14, fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--chrome)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
              <span style={{ color: "var(--text-dim)" }}>{cc.region}</span>
              <span style={{ color: "var(--bone)" }}>OPEN →</span>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL PANEL */}
      <div key={active} className="fade-in" style={{ marginTop: 36, padding: 0, border: "1px solid var(--line)", background: "var(--bg-panel)", overflow: "hidden" }}>
        <div style={{ position: "relative", aspectRatio: "21/9", overflow: "hidden" }}>
          <img src={c.image} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(10,11,13,0.2) 0%, rgba(10,11,13,0.0) 30%, rgba(10,11,13,0.92) 100%), radial-gradient(circle at top right, ${c.accent}33, transparent 50%)` }}></div>
          <div style={{ position: "absolute", top: 24, left: 24, display: "flex", flexDirection: "column", gap: 6 }}>
            <Label style={{ color: c.accent }}>{c.code} · {c.tag}</Label>
            <span className="label" style={{ color: "var(--bone)" }}>● {c.status}</span>
          </div>
          <div style={{ position: "absolute", top: 24, right: 24, textAlign: "right" }}>
            <Label style={{ color: "var(--bone)" }}>{c.region}</Label>
          </div>
          <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
            <h2 className="display" style={{ fontSize: "clamp(50px, 7vw, 110px)", color: "var(--bone)", margin: 0, lineHeight: 0.9, letterSpacing: "-0.02em" }}>{c.name.toUpperCase()}</h2>
            <p className="display" style={{ fontSize: 30, color: c.accent, margin: "8px 0 0", fontStyle: "italic" }}>"{c.line}"</p>
          </div>
          <CornerMarks color="rgba(245,243,236,0.4)"/>
        </div>

        <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 36 }} className="oc-grid">
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>{c.body}</p>

            {/* Overcity-specific layered breakdown */}
            {c.layered && (
              <div style={{ marginTop: 28 }}>
                <Label style={{ color: "var(--acid)" }}>EXCLUSIVE · OVERCITY VERTICAL ATLAS</Label>
                <p style={{ marginTop: 8, fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6, marginBottom: 18 }}>
                  The Overcity is the only circuit that races vertically through every social layer of a megastructure. Each layer hosts a separate course segment.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { id: "crown", name: "The Crown", alt: "+1240M", body: "Corporate towers, luxury arenas, manufactured champions. Sponsorship is total. Talent is bought before it becomes dangerous.", line: "The Crown does not hate the streets. It harvests them.", accent: "var(--sol)" },
                    { id: "midline", name: "The Midline", alt: "+220M", body: "Working city. Commuters, training circuits, regulated G-Core shops, entry-level leagues.", line: "The Midline watches the sport. The Lowline lives it.", accent: "var(--nova)" },
                    { id: "lowline", name: "The Lowline", alt: "-040M", body: "Illegal races, crew territory, black markets, debt brokers, stolen rigs.", line: "The Lowline does not teach racing as sport. It teaches racing as escape.", accent: "var(--acid)" },
                    { id: "under", name: "The Under", alt: "-480M", body: "Abandoned infrastructure, illegal G-Core labs, outlaw settlements, relic machines.", line: "Most do not come back with the same build they entered with.", accent: "var(--rift)" },
                  ].map((l) => (
                    <div key={l.id} onClick={() => setOvercityLayer(l.id)} className={"layer-bar " + (overcityLayer === l.id ? "active" : "")} style={{ padding: "18px 18px", gridTemplateColumns: "60px 1fr auto", gap: 16, cursor: "pointer" }}>
                      <div className="lidx" style={{ fontSize: 32 }}>{l.alt}</div>
                      <div>
                        <h3 style={{ fontSize: 26, margin: 0 }}>{l.name}</h3>
                        {overcityLayer === l.id && <p style={{ marginTop: 8, fontSize: 13, color: "var(--text)", lineHeight: 1.55, marginBottom: 6 }}>{l.body}</p>}
                        {overcityLayer === l.id && <p style={{ fontSize: 12, color: l.accent, fontStyle: "italic", lineHeight: 1.4, margin: 0 }}>"{l.line}"</p>}
                      </div>
                      <div style={{ width: 14, height: 14, borderRadius: "50%", background: l.accent, boxShadow: `0 0 0 4px ${l.accent}30`, alignSelf: "start" }}></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <Label>CIRCUIT FILE</Label>
            <div style={{ marginTop: 14, padding: 22, background: "var(--bg-graphite)", border: "1px solid var(--line)" }}>
              {Object.entries(c.stats).map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px dashed var(--line)", fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  <span style={{ color: "var(--text-dim)" }}>{k}</span>
                  <span style={{ color: "var(--bone)" }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18, padding: 16, border: `1px dashed ${c.accent}`, background: "var(--bg-graphite)" }}>
              <Label style={{ color: c.accent }}>PALETTE · {c.code}</Label>
              <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
                {c.palette.map((p, i) => (
                  <div key={i} style={{ flex: 1, height: 38, background: p, border: "1px solid var(--line)" }}></div>
                ))}
              </div>
            </div>

            {(c.rumor || c.mystery) && (
              <div style={{ marginTop: 18, padding: 16, border: "1px dashed var(--rift)", background: "rgba(185,117,255,0.06)" }}>
                <Label style={{ color: "var(--rift)" }}>FILE STATUS</Label>
                <p style={{ marginTop: 8, fontSize: 12.5, color: "var(--text)", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
                  This circuit has not been ratified by the Open Grav League. Photos, footage, and rider reports remain disputed. Consider this entry provisional.
                </p>
              </div>
            )}

            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
              <button className="btn btn-secondary" onClick={() => go("leagues")}>SEE LEAGUES HERE →</button>
              <button className="btn btn-secondary" onClick={() => go("riders")}>RIDERS ON THIS CIRCUIT →</button>
            </div>
          </div>
        </div>
      </div>

      {/* CALENDAR STRIP */}
      <section style={{ marginTop: 80 }}>
        <SHead title="WORLDWIDE CIRCUIT · S1" num="// 03·CALENDAR" right="32 ROUNDS · YEAR-LONG"/>
        <div style={{ border: "1px solid var(--line)", background: "var(--bg-panel)" }}>
          {window.CIRCUITS.map((cc, i) => (
            <div key={cc.id} style={{ display: "grid", gridTemplateColumns: "60px 80px 1fr auto auto", gap: 18, padding: "18px 22px", borderBottom: i < window.CIRCUITS.length - 1 ? "1px solid var(--line)" : "none", alignItems: "center", cursor: "pointer" }} onClick={() => { setActive(cc.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <span className="label" style={{ color: "var(--text-faint)" }}>R{String(i+1).padStart(2,"0")}</span>
              <span style={{ width: 12, height: 12, background: cc.accent, borderRadius: 2 }}></span>
              <div>
                <h4 className="display" style={{ fontSize: 22, color: "var(--bone)", margin: 0 }}>{cc.name.toUpperCase()}</h4>
                <span className="label" style={{ color: "var(--text-dim)", marginTop: 2, display: "block" }}>{cc.region}</span>
              </div>
              <Pill color={cc.rumor || cc.mystery ? "var(--rift)" : cc.accent}>{cc.tag.split("·")[0].trim()}</Pill>
              <span className="label" style={{ color: cc.rumor || cc.mystery ? "var(--rift)" : "var(--bone)" }}>{cc.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { GravsportPage, CircuitsPage });
