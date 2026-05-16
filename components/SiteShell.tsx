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
            <b>{content.settings.domain}</b>
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
        <Link className="nav-cta" href="/garage">Join The World</Link>
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
          <span className="label">G//LYDE WORLD</span>
          <h2 className="display">Enter before Volume 0 drops.</h2>
        </div>
        <div className="cta-row">
          <Link className="btn primary" href="/garage">Join The World →</Link>
          <Link className="btn" href="/off-ledger">Read Off Ledger →</Link>
        </div>
      </div>
      <div className="footer-inner">
        <div className="footer-brand">
          {footerLogo ? <img className="footer-logo" src={footerLogo} alt={content.brand.logoText} /> : <Wordmark />}
          <h3>{content.settings.title}</h3>
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
        <span>Canon is curated. Submissions do not guarantee inclusion or ownership.</span>
      </div>
    </footer>
  );
}
