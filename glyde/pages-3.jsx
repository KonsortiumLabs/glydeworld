// G//LYDE WORLD — G-Core, Riders, Machines

const { useState: useState3 } = React;

// =====================================================================
// G-CORE
// =====================================================================
function GCorePage({ go }) {
  const [selected, setSelected] = useState3("sol");
  const core = window.CORES.find(c => c.id === selected);

  return (
    <div className="page page-wrap" data-screen-label="04 G-Core">
      <PageHeader tag="G-CORE · 04" title={<>G–CORE<br/>ENGINE</>} code="ENGINE // 08 VARIANTS"/>

      <section style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40, marginBottom: 56 }} className="oc-grid">
        <div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 90px)", margin: 0, color: "var(--bone)", letterSpacing: "-0.015em" }}>
            The rig learns you.
          </h2>
          <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
            Every G//LYDE machine is powered by a G-Core. Publicly, G-Core is described as an anti-gravity engine. It creates lift, speed, stabilization, control, boost, and rider response. The deeper truth is that a G-Core does not simply power the rig.
          </p>
          <h3 className="display" style={{ marginTop: 24, fontSize: "clamp(28px, 3.4vw, 44px)", color: "var(--acid)" }}>
            It learns the rider.
          </h3>
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.7, color: "var(--text-dim)", maxWidth: 620 }}>
            Pressure. Timing. Instinct. Risk. Reaction. Aggression. Style. Fear. Confidence. Decision-making. The Core records all of it and slowly reshapes itself around how its rider actually moves.
          </p>
        </div>
        <div style={{ position: "relative", border: "1px solid var(--line)", padding: 22, background: "var(--bg-panel)", overflow: "hidden" }}>
          <Label>SYSTEM // DRIFT</Label>
          <h3 className="display" style={{ fontSize: 44, margin: "10px 0 12px", color: "var(--bone)" }}>DRIFT</h3>
          <p style={{ fontSize: 13.5, color: "var(--text)", lineHeight: 1.6 }}>
            Drift is the process by which a rider's build slowly reshapes around how they actually move.
          </p>
          <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Cuts corners under pressure → sharper handling.",
              "Survives near-crashes → recovery instincts.",
              "Overtakes through gaps → reaction + aggression.",
              "Hunts hidden routes → spatial memory, hidden skills.",
              "Masters multiple categories → rare hybrid sync."
            ].map((b, i) => (
              <div key={i} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.06em", color: "var(--chrome)", display: "flex", gap: 10 }}>
                <span style={{ color: "var(--acid)" }}>▸</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", bottom: -40, right: -40, width: 220, height: 220, borderRadius: "50%", border: "1px dashed var(--line-2)" }}></div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "40px 0", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 56 }} className="lore-twocol">
        {["The rig learns the body.", "The body learns the rig.", "The world watches what emerges."].map((l, i) => (
          <h3 key={i} className="display" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", color: i === 2 ? "var(--bone)" : "var(--chrome)", margin: 0, lineHeight: 1.05 }}>{l}</h3>
        ))}
      </section>

      <section style={{ marginBottom: 56 }}>
        <SHead title="G-CORE AFFINITY" num="// 04·SOUL" right="UNVERIFIED PHENOMENON"/>
        <div className="g3">
          <div className="tile">
            <Label style={{ color: "var(--sol)" }}>THE ELITE</Label>
            <p style={{ marginTop: 8, fontSize: 16, color: "var(--bone)", lineHeight: 1.5 }}>...call it performance compatibility.</p>
          </div>
          <div className="tile">
            <Label style={{ color: "var(--acid)" }}>THE STREETS</Label>
            <p style={{ marginTop: 8, fontSize: 16, color: "var(--bone)", lineHeight: 1.5 }}>...call it soul.</p>
          </div>
          <div className="tile">
            <Label style={{ color: "var(--rift)" }}>THE OLD WORLD</Label>
            <p style={{ marginTop: 8, fontSize: 16, color: "var(--bone)", lineHeight: 1.5 }}>...might call it <i>Grace</i>.</p>
          </div>
        </div>
      </section>

      <section>
        <SHead title="CORE VARIANTS" num="// 04·VARIANTS" right={`${window.CORES.length} TYPES`}/>
        <div className="g4">
          {window.CORES.map((c) => (
            <div key={c.id} className="core-card" onClick={() => setSelected(c.id)} style={{ borderColor: selected === c.id ? c.color : "var(--line)" }}>
              <div className="glow" style={{ background: c.color, opacity: c.prism ? 0.3 : 0.45 }}></div>
              <div className="ring" style={{ color: c.color, background: c.prism ? "conic-gradient(from 0deg, #ffb547, #ff4dc4, #b975ff, #2e8bff, #46e6d4, #ffb547)" : "transparent" }}>
                <span style={{ background: c.prism ? "var(--bg-panel)" : c.dark ? "var(--bg-panel)" : "transparent", borderRadius: "50%", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, position: "relative", zIndex: 2 }}>{c.glyph}</span>
              </div>
              <div style={{ position: "relative", zIndex: 2, marginTop: "auto" }}>
                <Label>{c.id.toUpperCase()} · CORE</Label>
                <h3 className="display" style={{ fontSize: 30, margin: "8px 0 14px", color: "var(--bone)" }}>{c.name.toUpperCase()}</h3>
                <p style={{ fontSize: 11.5, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.06em", color: "var(--chrome)", lineHeight: 1.55, textTransform: "uppercase" }}>{c.affinity}</p>
                <p style={{ marginTop: 12, fontSize: 13, color: c.color, fontStyle: "italic", lineHeight: 1.5 }}>"{c.line}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 60, padding: 32, border: `1px solid var(--line)`, background: "var(--bg-panel)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 320, height: 320, borderRadius: "50%", background: core.color, filter: "blur(80px)", opacity: 0.25 }}></div>
        <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 36 }} className="oc-grid">
          <div>
            <Label style={{ color: core.color }}>DETAIL · {core.id.toUpperCase()}</Label>
            <h2 className="display" style={{ fontSize: 60, margin: "12px 0 0", color: "var(--bone)" }}>{core.name.toUpperCase()}</h2>
            <div style={{ marginTop: 14, width: 120, height: 120, borderRadius: "50%", border: `1px solid ${core.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Antonio, sans-serif", fontSize: 56, color: core.color, position: "relative" }}>
              {core.glyph}
              <span style={{ position: "absolute", inset: -6, borderRadius: "50%", border: `1px dashed ${core.color}`, opacity: 0.5 }}></span>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <DetailRow label="AFFINITY" val={core.affinity}/>
              <DetailRow label="RIDER" val={core.rider}/>
              <DetailRow label="WEAKNESS" val={core.weakness}/>
            </div>
            <p className="display" style={{ marginTop: 28, fontSize: 32, color: core.color, lineHeight: 1.1, fontStyle: "italic" }}>
              "{core.line}"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// =====================================================================
// RIDERS
// =====================================================================
function RidersPage({ go }) {
  const [tab, setTab] = useState3("roster");
  const [open, setOpen] = useState3(null);

  return (
    <div className="page page-wrap" data-screen-label="05 Riders">
      <PageHeader tag="RIDERS · 05" title={<>RIDER<br/>ROSTER</>} code="REGISTRY // GG-001"/>

      <div style={{ display: "flex", gap: 6, marginBottom: 28, borderBottom: "1px solid var(--line)" }}>
        {[{ id: "roster", label: "Roster" }, { id: "classes", label: "Rider Classes" }].map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: "12px 18px",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: tab === t.id ? "var(--bone)" : "var(--text-dim)",
            borderBottom: tab === t.id ? "1px solid var(--bone)" : "1px solid transparent",
            marginBottom: -1
          }}>{t.label}</button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
          <span className="label">{tab === "roster" ? `${window.RIDERS.length} REGISTERED` : `${window.RIDER_CLASSES.length} CLASSES`}</span>
        </div>
      </div>

      {tab === "roster" && (
        <div className="g3">
          {window.RIDERS.map((r, i) => (
            <RiderCard key={r.id} rider={r} idx={i} onOpen={() => setOpen(r)}/>
          ))}
        </div>
      )}

      {tab === "classes" && (
        <div className="g3">
          {window.RIDER_CLASSES.map((c) => (
            <div key={c.id} className="card" style={{ borderTop: `2px solid ${c.accent}`, minHeight: 280 }}>
              <Label style={{ color: c.accent }}>CLASS · {c.id.toUpperCase()}</Label>
              <h3 className="display" style={{ fontSize: 40, margin: "10px 0 14px", color: "var(--bone)" }}>{c.name.toUpperCase()}</h3>
              <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.55 }}>{c.short}</p>
              <p className="display" style={{ marginTop: 18, fontSize: 22, color: c.accent, lineHeight: 1.1, fontStyle: "italic" }}>"{c.question}"</p>
              <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10, fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--chrome)", letterSpacing: "0.06em" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--text-dim)" }}>AFFINITY</span><span>{c.affinity}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}><span style={{ color: "var(--text-dim)" }}>RIGS</span><span style={{ textAlign: "right", maxWidth: 220 }}>{c.rigs}</span></div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ModalPanel open={!!open} onClose={() => setOpen(null)} accent={open?.accent}>
        {open && <RiderDetail rider={open} onClose={() => setOpen(null)} go={go}/>}
      </ModalPanel>
    </div>
  );
}

function RiderCard({ rider, idx, onOpen }) {
  const refImages = ["assets/ref-catalog.jpg", "assets/ref-night.jpg", "assets/ref-metroascent.jpg", "assets/ref-daylight.jpg"];
  const positions = ["55% 18%", "60% 30%", "20% 25%", "70% 45%", "45% 35%", "10% 20%"];
  const img = refImages[idx % refImages.length];
  const pos = positions[idx % positions.length];

  return (
    <div className="rider-card" onClick={onOpen}>
      <div className="portrait">
        <img src={img} alt={rider.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, filter: "saturate(0.9) contrast(1.05)" }}/>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 30%, rgba(10,11,13,0.92) 95%), radial-gradient(circle at top left, ${rider.accent}22, transparent 60%)` }}></div>
        <div className="pmeta">
          <span style={{ color: rider.accent }}>● {rider.status.toUpperCase()}</span>
          <span style={{ color: "var(--bone)" }}>{rider.number}</span>
        </div>
        <div className="pname">
          <Label style={{ color: rider.accent }}>{rider.classType.toUpperCase()} · {rider.category}</Label>
          <h4>{rider.name.toUpperCase()}</h4>
        </div>
        <CornerMarks color="rgba(245,243,236,0.5)"/>
      </div>
      <div className="pinfo">
        <span>{rider.affiliation.toUpperCase()}</span>
        <span style={{ color: "var(--bone)" }}>{rider.affinity.join(" · ")}</span>
      </div>
    </div>
  );
}

function RiderDetail({ rider, onClose, go }) {
  const refImages = ["assets/ref-catalog.jpg", "assets/ref-night.jpg", "assets/ref-metroascent.jpg", "assets/ref-daylight.jpg"];
  const idx = window.RIDERS.findIndex(r => r.id === rider.id);
  return (
    <div>
      <div style={{ position: "relative", aspectRatio: "4/5" }}>
        <img src={refImages[idx % refImages.length]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 40%, rgba(20,22,26,0.98) 95%), radial-gradient(circle at 80% 20%, ${rider.accent}33, transparent 50%)` }}></div>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, width: 34, height: 34, border: "1px solid var(--line-2)", borderRadius: 4, color: "var(--bone)", fontFamily: "JetBrains Mono, monospace", fontSize: 14, background: "rgba(0,0,0,0.4)" }}>✕</button>
        <div style={{ position: "absolute", top: 18, left: 18 }}>
          <Label style={{ color: rider.accent }}>● {rider.status.toUpperCase()}</Label>
          <div className="label" style={{ marginTop: 6 }}>{rider.number} · {rider.affiliation.toUpperCase()}</div>
        </div>
        <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
          <Label style={{ color: rider.accent }}>{rider.classType.toUpperCase()}</Label>
          <h2 className="display" style={{ fontSize: 64, margin: "8px 0 0", color: "var(--bone)", lineHeight: 0.9 }}>{rider.name.toUpperCase()}</h2>
        </div>
        <CornerMarks color="rgba(245,243,236,0.5)"/>
      </div>

      <div style={{ padding: 28 }}>
        <p className="display" style={{ fontSize: 26, color: "var(--bone)", margin: "0 0 22px", lineHeight: 1.1, fontStyle: "italic" }}>"{rider.quote}"</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 26 }}>
          <DetailRow label="AFFILIATION" val={rider.affiliation}/>
          <DetailRow label="CLASS" val={rider.classType}/>
          <DetailRow label="CATEGORY" val={rider.category}/>
          <DetailRow label="AFFINITY" val={rider.affinity.join(" · ")}/>
          <DetailRow label="PREFERRED RIG" val={rider.rig}/>
          <DetailRow label="STATUS" val={rider.status}/>
          <DetailRow label="SIGNATURE SKILL" val={rider.skill}/>
          <DetailRow label="DISCIPLINE" val={rider.discipline}/>
          <DetailRow label="CIRCUIT" val={rider.circuit}/>
        </div>

        <Label>BIO</Label>
        <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.65, color: "var(--text)" }}>{rider.bio}</p>

        <div style={{ marginTop: 28, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="btn btn-secondary" onClick={() => { onClose(); go("machines"); }}>VIEW MACHINE CLASS →</button>
          <button className="btn btn-secondary" onClick={() => { onClose(); go("gcore"); }}>OPEN G-CORE →</button>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// MACHINES
// =====================================================================
function MachinesPage({ go }) {
  const [active, setActive] = useState3("gsuit");
  const m = window.MACHINES.find(x => x.id === active);

  return (
    <div className="page page-wrap" data-screen-label="06 Machines">
      <PageHeader tag="MACHINES · 06" title={<>MACHINE<br/>ATLAS</>} code={`${window.MACHINES.length} CLASSES // GG-001`}/>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, marginBottom: 56 }} className="oc-grid">
        <div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0, color: "var(--bone)", letterSpacing: "-0.015em" }}>
            Machines are not vehicles.<br/>They are identity objects.
          </h2>
          <p style={{ marginTop: 22, fontSize: 16, lineHeight: 1.7, color: "var(--text)", maxWidth: 580 }}>
            Every machine is a platform, signature, status symbol, and risk asset. G-Suits become the rider. Gravboards make the rider famous. G-Rigs make the rider expensive. Prototypes break the rider. Relics remember the rider.
          </p>
        </div>
        <div style={{ padding: 24, border: "1px solid var(--line)", background: "var(--bg-panel)" }}>
          <Label style={{ color: "var(--acid)" }}>NOTE · CIRCUIT DOCTRINE</Label>
          <p className="display" style={{ fontSize: 26, margin: "12px 0 0", color: "var(--bone)", lineHeight: 1.1 }}>
            You can see what a rider owns.<br/>You cannot always see what they can do.
          </p>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Boards made it famous. Rigs made it war.
          </p>
        </div>
      </div>

      {/* Tab strip */}
      <div style={{ display: "flex", gap: 0, border: "1px solid var(--line)", marginBottom: 0, overflowX: "auto" }}>
        {window.MACHINES.map((r) => (
          <button key={r.id} onClick={() => setActive(r.id)} style={{
            flex: "1 1 0",
            minWidth: 140,
            padding: "16px 14px",
            background: active === r.id ? "var(--bg-panel-2)" : "transparent",
            borderRight: "1px solid var(--line)",
            borderTop: active === r.id ? "2px solid var(--acid)" : "2px solid transparent",
            textAlign: "left",
            color: active === r.id ? "var(--bone)" : "var(--chrome-2)",
            cursor: "pointer",
            transition: "background 200ms"
          }}>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-faint)" }}>{r.code}</div>
            <div className="display" style={{ fontSize: 22, marginTop: 4 }}>{r.name.toUpperCase()}</div>
          </button>
        ))}
      </div>

      <div key={active} className="fade-in" style={{ border: "1px solid var(--line)", borderTop: "none", padding: 32, background: "var(--bg-panel)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40 }} className="oc-grid">
          <div>
            <Label style={{ color: "var(--acid)" }}>{m.code} · {m.category.toUpperCase()} · {m.tag.toUpperCase()}</Label>
            <h2 className="display" style={{ fontSize: 64, margin: "12px 0 16px", color: "var(--bone)", lineHeight: 0.92 }}>{m.name.toUpperCase()}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text)", maxWidth: 560 }}>{m.body}</p>

            <div className="hero-photo" style={{ marginTop: 26, aspectRatio: "16/9", border: "1px solid var(--line-2)" }}>
              <img src="assets/ref-night.jpg" style={{ filter: "saturate(1.1) contrast(1.05)" }}/>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,11,13,0.2), rgba(10,11,13,0.7))" }}></div>
              <CornerMarks color="rgba(245,243,236,0.4)"/>
              <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
                <div>
                  <Label style={{ color: "var(--acid)" }}>EXAMPLES</Label>
                  <div className="display" style={{ fontSize: 22, color: "var(--bone)", marginTop: 4 }}>{m.example}</div>
                </div>
                <Barcode/>
              </div>
            </div>
          </div>

          <div>
            <Label>SPEC CARD · {m.code}</Label>
            <div style={{ marginTop: 14, padding: 22, background: "var(--bg-graphite)", border: "1px solid var(--line)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span className="label" style={{ color: "var(--bone)" }}>{m.name.toUpperCase()}</span>
                <span className="label">SPEC // 8 AXES</span>
              </div>
              <SpecTable stats={m.stats}/>
            </div>

            <div style={{ marginTop: 18, padding: 16, border: "1px dashed var(--line-2)" }}>
              <Label>WARNING</Label>
              <p style={{ marginTop: 8, fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em", color: "var(--text-dim)", lineHeight: 1.6, textTransform: "uppercase" }}>
                Stats are public-facing baseline values. Hidden behaviors, Lost Line skills, and Drift adaptations are not registered with the Crown.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section style={{ marginTop: 64 }}>
        <SHead title="MACHINE ARCHIVE" num="// 06·INDEX" right={`${window.MACHINES.length} CLASSES`}/>
        <div className="g3">
          {window.MACHINES.map((r) => (
            <div key={r.id} className="card clickable sweep" onClick={() => setActive(r.id)} style={{ minHeight: 200, position: "relative", borderTop: active === r.id ? "2px solid var(--acid)" : "1px solid var(--line)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <Label>{r.code}</Label>
                <Pill>{r.category}</Pill>
              </div>
              <h3 className="display" style={{ fontSize: 30, margin: "12px 0 8px", color: "var(--bone)" }}>{r.name.toUpperCase()}</h3>
              <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.55 }}>{r.body.split(".")[0]}.</p>
              <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
                {Object.entries(r.stats).slice(0, 4).map(([k, v]) => (
                  <div key={k} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "var(--text-faint)", letterSpacing: "0.1em" }}>
                    {k.slice(0,3).toUpperCase()}<br/><span style={{ color: "var(--bone)", fontSize: 13 }}>{String(v).padStart(2,"0")}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { GCorePage, RidersPage, MachinesPage });
