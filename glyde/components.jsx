// G//LYDE WORLD — shared components

const { useState, useEffect, useMemo, useRef } = React;

// Wordmark: G // LYDE with optional sizing
function Wordmark({ size = 26, color }) {
  const style = { fontSize: size, color: color || "var(--bone)" };
  return (
    <span className="wordmark" style={style}>
      G<span className="slash">//</span>LYDE
    </span>
  );
}

// "g//lyde" lowercase variant
function WordmarkLower({ size = 26, color }) {
  const style = { fontSize: size, color: color || "var(--bone)", fontFamily: "Antonio, sans-serif", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, textTransform: "lowercase" };
  return <span style={style}>g<span style={{ color: "var(--text-dim)", letterSpacing: "-0.08em" }}>//</span>lyde</span>;
}

// Globe glyph
function GlobeGlyph({ size = 12 }) {
  return <span className="glb" style={{ width: size, height: size }}></span>;
}

// Pill
function Pill({ children, color = "var(--chrome)" }) {
  return (
    <span className="pill" style={{ color }}>
      <span className="dot" style={{ background: color }}></span>
      {children}
    </span>
  );
}

// Eyebrow
function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

// Label
function Label({ children, style }) {
  return <span className="label" style={style}>{children}</span>;
}

// Section header
function SHead({ title, num, right }) {
  return (
    <div className="s-head">
      <div style={{ display: "flex", alignItems: "end", gap: 18 }}>
        {num && <span className="s-num">{num}</span>}
        <h2>{title}</h2>
      </div>
      {right && <div className="s-num">{right}</div>}
    </div>
  );
}

// Generic page header
function PageHeader({ tag, title, code, meta }) {
  return (
    <div className="page-header">
      <div>
        <div className="ptag"><span className="dot"></span>{tag}</div>
        <h1>{title}</h1>
      </div>
      <div className="ph-meta">
        {code && <div>{code}</div>}
        {meta && meta.map((m, i) => <div key={i}><b>{m}</b></div>)}
        <div>GG // 001</div>
        <div>LIVE WORLDWIDE</div>
      </div>
    </div>
  );
}

// Discipline rail
function DisciplineRail() {
  return (
    <div className="disc-rail">
      {window.DISCIPLINES.map((d) => (
        <div key={d.id}>
          <span className="dot" style={{ background: d.color }}></span>
          <span style={{ color: "var(--bone)" }}>{d.label.toUpperCase()}</span>
          <span style={{ marginLeft: "auto", color: "var(--text-faint)" }}>{d.line}</span>
        </div>
      ))}
    </div>
  );
}

// Loop bar (RIDE > SCORE > ...)
function LoopBar({ steps }) {
  return (
    <div className="loop">
      {steps.map((s, i) => (
        <div className="loop-step" key={i}>
          <span className="num">{String(i+1).padStart(2,"0")}</span>
          <h4>{s.label}</h4>
          <span className="muted" style={{ fontSize: 12 }}>{s.sub}</span>
        </div>
      ))}
    </div>
  );
}

// Ticker
function Ticker({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((it, i) => (
          <span className="ticker-item" key={i}>
            <span className="dot"></span>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

// Modal panel (side sheet)
function ModalPanel({ open, onClose, children, accent }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()} style={accent ? { borderLeftColor: accent } : undefined}>
        {children}
      </div>
    </div>
  );
}

// Spec table
function SpecTable({ stats }) {
  return (
    <div>
      {Object.entries(stats).map(([k, v]) => (
        <div className="spec-row" key={k}>
          <b>{k}</b>
          <div className="bar"><i style={{ width: `${v}%`, background: v > 80 ? "var(--acid)" : v < 50 ? "var(--crimson)" : "var(--bone)" }}></i></div>
          <span className="val">{String(v).padStart(2,"0")}</span>
        </div>
      ))}
    </div>
  );
}

// Faux barcode
function Barcode({ height = 28 }) {
  // deterministic widths
  const widths = [2,1,3,1,2,1,1,3,2,1,2,3,1,2,1,3,2,1,1,2,1,3,1,2,1,1,3,2,1,2,1,3,2,1,1,2];
  return (
    <div style={{ display: "flex", gap: 1, height, alignItems: "stretch" }}>
      {widths.map((w, i) => (
        <span key={i} style={{ width: w, background: i % 6 === 0 ? "var(--bone)" : "var(--chrome-2)" }}></span>
      ))}
    </div>
  );
}

// Vertical text helper
function VText({ children }) {
  return <span className="vtext">{children}</span>;
}

// Animated route line — SVG
function RouteLine({ stroke = "var(--acid)", style }) {
  return (
    <svg viewBox="0 0 600 80" preserveAspectRatio="none" style={{ width: "100%", height: 60, ...style }}>
      <defs>
        <linearGradient id="rl-grad" x1="0" x2="1">
          <stop offset="0" stopColor={stroke} stopOpacity="0"/>
          <stop offset="0.5" stopColor={stroke} stopOpacity="1"/>
          <stop offset="1" stopColor={stroke} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M0 60 L120 60 L160 20 L240 20 L300 60 L380 60 L420 30 L520 30 L560 60 L600 60"
        fill="none" stroke="url(#rl-grad)" strokeWidth="1.4" strokeDasharray="4 6">
        <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="6s" repeatCount="indefinite"/>
      </path>
      <path d="M0 60 L120 60 L160 20 L240 20 L300 60 L380 60 L420 30 L520 30 L560 60 L600 60"
        fill="none" stroke={stroke} strokeWidth="0.6" opacity="0.3"/>
    </svg>
  );
}

// Crosshair corner marker
function CornerMarks({ color = "var(--text-faint)", size = 12 }) {
  const s = {
    position: "absolute", width: size, height: size,
    borderColor: color, borderStyle: "solid", borderWidth: 0,
  };
  return (
    <>
      <span style={{ ...s, top: 8, left: 8, borderTopWidth: 1, borderLeftWidth: 1 }}/>
      <span style={{ ...s, top: 8, right: 8, borderTopWidth: 1, borderRightWidth: 1 }}/>
      <span style={{ ...s, bottom: 8, left: 8, borderBottomWidth: 1, borderLeftWidth: 1 }}/>
      <span style={{ ...s, bottom: 8, right: 8, borderBottomWidth: 1, borderRightWidth: 1 }}/>
    </>
  );
}

Object.assign(window, {
  Wordmark, WordmarkLower, GlobeGlyph, Pill, Eyebrow, Label, SHead, PageHeader,
  DisciplineRail, LoopBar, Ticker, ModalPanel, SpecTable, Barcode, VText, RouteLine, CornerMarks
});
