"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSiteContent } from "@/components/ContentProvider";

export function Wordmark({ small = false }: { small?: boolean }) {
  const { content } = useSiteContent();
  const logoUrl = content.brand.wordmarkUrl || content.brand.logoImageUrl;
  if (logoUrl) {
    return <img className={`brand-logo ${small ? "small" : ""}`} src={logoUrl} alt={content.brand.logoText} />;
  }
  const [first, second = "LYDE"] = content.brand.logoText.split("//");
  return <span className="wordmark" style={{ fontSize: small ? 28 : undefined }}>{first}<span>//</span>{second}</span>;
}

export function SiteHeader() {
  const { content } = useSiteContent();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="topnav">
      <div className="nav-inner">
        <Link href="/" className="brand-block" onClick={() => setOpen(false)}>
          <Wordmark small />
          <span className="brand-meta mono">
            <b>G//LYDE</b>
            <span>{content.settings.universeLabel}</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/join">Join Early List</Link>
        <button className="mobile-toggle mono" onClick={() => setOpen((value) => !value)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {content.nav.map((item, index) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            <span>{item.label}</span>
            <span className="label">{String(index).padStart(2, "0")}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const { content } = useSiteContent();
  const footerLogo = content.brand.footerLogoUrl || content.brand.wordmarkUrl || content.brand.logoImageUrl;
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div>
          <span className="label">FINAL TRANSMISSION</span>
          <h2 className="display">
            <span className="split-display-title">
              <span>The feed ends here.</span>
              <span>The Lowlines do not.</span>
            </span>
          </h2>
          <p>Rider files, route records, board data, faction notes, and Black Book entries are still surfacing before Volume Zero.</p>
        </div>
        <div className="cta-row">
          <Link className="btn primary" href="/archive">Open the Archive →</Link>
          <Link className="btn" href="/garage">Enter G// Garage →</Link>
        </div>
      </div>
      <div className="footer-inner">
        <div className="footer-brand">
          {footerLogo ? <img className="footer-logo" src={footerLogo} alt={content.brand.logoText} /> : <Wordmark />}
          <h3>G//LYDE</h3>
          <p className="label">{content.footer.tagline}</p>
          <p className="muted">{content.footer.copy}</p>
        </div>
        {content.footer.columns.map((column) => (
          <div key={column.title}>
            <b className="label">{column.title}</b>
            {column.links.map((item) => <Link key={`${column.title}-${item.href}-${item.label}`} href={item.href}>{item.label}</Link>)}
          </div>
        ))}
      </div>
      <div className="footer-tape">
        <span>{content.settings.copyrightText}</span>
        <span>{content.settings.conceptArtNote}</span>
        <span>Canon is curated. Submissions do not guarantee inclusion, credit, or ownership.</span>
      </div>
    </footer>
  );
}
