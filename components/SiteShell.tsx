"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSiteContent } from "@/components/ContentProvider";

export function Wordmark({ small = false }: { small?: boolean }) {
  return <span className="wordmark" style={{ fontSize: small ? 28 : undefined }}>G<span>//</span>LYDE</span>;
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
        <Link className="nav-cta" href="/garage">Join the World</Link>
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
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Wordmark />
          <p className="muted" style={{ maxWidth: 520 }}>{content.settings.footerCopy}</p>
          <p className="label" style={{ marginTop: 18 }}>{content.settings.conceptArtNote}</p>
        </div>
        <div>
          <b className="label">World</b>
          {content.nav.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <b className="label">Archive</b>
          {content.nav.slice(4, 8).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <b className="label">Join</b>
          <Link href="/garage">The Garage</Link>
          <Link href="/support">Support</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
      <div className="footer-tape">
        <span>G//NET makes you visible.</span>
        <span>The Index prices you.</span>
        <span>The Black Book remembers what you owe.</span>
      </div>
    </footer>
  );
}
