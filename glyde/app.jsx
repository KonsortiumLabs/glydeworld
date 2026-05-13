// G//LYDE WORLD — Router, Nav, Footer, App

const { useState: useStateA, useEffect: useEffectA } = React;

function TopNav({ route, go }) {
  const [mobileOpen, setMobileOpen] = useStateA(false);
  return (
    <>
      <nav className="topnav">
        <div className="topnav-inner">
          <div className="topnav-brand" onClick={() => { go("home"); setMobileOpen(false); }}>
            <Wordmark size={24}/>
            <div className="meta">
              <b>GLYDEWORLD.COM</b>
              <span>AN OVER//UNDER STORY</span>
            </div>
          </div>
          <div className="topnav-links">
            {window.ROUTES.map((r) => (
              <a key={r.id} className={"topnav-link " + (route === r.id ? "active" : "")} onClick={() => go(r.id)}>{r.label}</a>
            ))}
          </div>
          <button className="topnav-cta" onClick={() => go("overcity")}>
            ENTER OVERCITY <GlobeGlyph/>
          </button>
          <button className="topnav-mobile-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
              <rect width="16" height="1.5" fill="currentColor"/>
              <rect y="6.25" width="16" height="1.5" fill="currentColor"/>
              <rect y="12.5" width="16" height="1.5" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", paddingBottom: 18 }}>
            <Wordmark size={32}/>
            <button onClick={() => setMobileOpen(false)} style={{ width: 38, height: 38, border: "1px solid var(--line-2)", borderRadius: 4, color: "var(--bone)", fontFamily: "JetBrains Mono, monospace" }}>✕</button>
          </div>
          <div style={{ marginTop: 12, flex: 1, overflowY: "auto" }}>
            {window.ROUTES.map((r) => (
              <a key={r.id} className="mobile-menu-link" onClick={() => { go(r.id); setMobileOpen(false); }} style={{ color: route === r.id ? "var(--acid)" : "var(--bone)" }}>
                <span>{r.label.toUpperCase()}</span>
                <span className="idx">{r.num}</span>
              </a>
            ))}
          </div>
          <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 18 }} onClick={() => { go("overcity"); setMobileOpen(false); }}>ENTER OVERCITY →</button>
        </div>
      )}
    </>
  );
}

function Footer({ go }) {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Wordmark size={64}/>
          <p>
            GLYDEWORLD.COM<br/>
            AN OVER//UNDER STORY<br/>
            RIDE. RISK. RISE.
          </p>
          <div style={{ marginTop: 22, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Pill color="var(--acid)">LIVE WORLDWIDE</Pill>
            <Pill color="var(--ion)">GG // 001</Pill>
            <Pill color="var(--sol)">CIRCUIT OPEN</Pill>
          </div>
        </div>
        <div className="footer-col">
          <h5>The World</h5>
          {window.ROUTES.slice(0, 5).map((r) => <a key={r.id} onClick={() => go(r.id)}>{r.label}</a>)}
        </div>
        <div className="footer-col">
          <h5>The System</h5>
          {window.ROUTES.slice(5).map((r) => <a key={r.id} onClick={() => go(r.id)}>{r.label}</a>)}
        </div>
        <div className="footer-col">
          <h5>Signals</h5>
          <a>@GLYDEWORLD</a>
          <a>OVER//UNDER</a>
          <a>PRESS // 001</a>
          <a>CONTACT</a>
        </div>
      </div>
      <div className="footer-tape">
        <span>© G//LYDE WORLD · GLYDEWORLD.COM</span>
        <span>STYLE IS NOT COSMETIC. IT IS MECHANICAL.</span>
        <span>RIDE · RISK · RISE</span>
      </div>
    </footer>
  );
}

function App() {
  const [route, setRoute] = useStateA(() => {
    const hash = window.location.hash.replace("#", "");
    return window.ROUTES.find(r => r.id === hash) ? hash : "home";
  });

  const go = (r) => {
    setRoute(r);
    window.location.hash = r;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffectA(() => {
    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (window.ROUTES.find(r => r.id === hash)) setRoute(hash);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Page = {
    home: window.HomePage,
    lore: window.LorePage,
    overcity: window.OvercityPage,
    sport: window.SportPage,
    gcore: window.GCorePage,
    riders: window.RidersPage,
    rigs: window.RigsPage,
    factions: window.FactionsPage,
    lostlines: window.LostLinesPage,
    codex: window.CodexPage,
  }[route] || window.HomePage;

  return (
    <div className="app">
      <TopNav route={route} go={go}/>
      <main className="app-main" key={route}>
        <Page go={go}/>
      </main>
      <Footer go={go}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
