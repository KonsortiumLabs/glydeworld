"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent, type SiteContent } from "@/content/siteContent";
import { useSiteContent } from "@/components/ContentProvider";

type SubmissionRecord = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: "new" | "reviewing" | "approved" | "declined" | "adapted";
  type: string;
  name: string;
  email: string;
  conceptTitle: string;
  conceptDescription: string;
  roleOrDiscipline: string;
  visualReferences: string;
  fitReason: string;
  consent: boolean;
  notes: string;
  source: string;
};

type TabKey =
  | "dashboard"
  | "settings"
  | "brand"
  | "seo"
  | "nav"
  | "homepage"
  | "pages"
  | "characters"
  | "archive"
  | "circuits"
  | "factions"
  | "manufacturers"
  | "sponsors"
  | "codex"
  | "gcores"
  | "submissions"
  | "garage"
  | "support"
  | "footer"
  | "images"
  | "json";

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "dashboard", label: "Dashboard" },
  { key: "settings", label: "Site Settings" },
  { key: "brand", label: "Logo / Brand" },
  { key: "seo", label: "SEO" },
  { key: "nav", label: "Nav / CTAs" },
  { key: "homepage", label: "Homepage" },
  { key: "pages", label: "Pages" },
  { key: "characters", label: "Characters" },
  { key: "archive", label: "Archive" },
  { key: "circuits", label: "Routes & Cities" },
  { key: "factions", label: "Factions" },
  { key: "manufacturers", label: "Manufacturers" },
  { key: "sponsors", label: "Sponsors" },
  { key: "codex", label: "Codex" },
  { key: "gcores", label: "Boards / Gear / G-Cores" },
  { key: "submissions", label: "Submissions" },
  { key: "garage", label: "GG / Garage" },
  { key: "support", label: "Support" },
  { key: "footer", label: "Footer" },
  { key: "images", label: "Images" },
  { key: "json", label: "Backup" },
];

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function setAtPath(target: any, path: Array<string | number>, value: unknown) {
  const draft = clone(target);
  let pointer = draft;
  for (let index = 0; index < path.length - 1; index += 1) {
    pointer = pointer[path[index]];
  }
  pointer[path[path.length - 1]] = value;
  return draft;
}

function Field({
  label,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
}) {
  return (
    <label className="field">
      <span className="label">{label}</span>
      {textarea ? (
        <textarea value={value} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </label>
  );
}

function JsonEditor({
  label,
  value,
  onChange,
}: {
  label: string;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  const [text, setText] = useState(() => JSON.stringify(value, null, 2));
  const [error, setError] = useState("");

  return (
    <div className="field">
      <span className="label">{label}</span>
      <textarea
        value={text}
        style={{ minHeight: 360, fontFamily: "JetBrains Mono, monospace", fontSize: 12 }}
        onChange={(event) => {
          const next = event.target.value;
          setText(next);
          try {
            onChange(JSON.parse(next));
            setError("");
          } catch (caught) {
            setError(caught instanceof Error ? caught.message : "Invalid JSON");
          }
        }}
      />
      {error && <span style={{ color: "var(--red)" }}>{error}</span>}
    </div>
  );
}

function ImageField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="image-field">
      <Field label={label} value={value} onChange={onChange} />
      {value ? <img className="preview-img wide" src={value} alt="" /> : <div className="upload-placeholder">Paste an image URL. Permanent uploads require connected storage.</div>}
      <div className="admin-actions compact">
        <button onClick={() => onChange("")}>Remove</button>
      </div>
    </div>
  );
}

export function AdminView() {
  const { content, setContent, resetContent } = useSiteContent();
  const [unlocked, setUnlocked] = useState(() => typeof window !== "undefined" && window.sessionStorage.getItem("glyde-admin") === "yes");
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState<TabKey>("dashboard");
  const [draft, setDraft] = useState<SiteContent>(content);
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [storageMode, setStorageMode] = useState("");
  const importRef = useRef<HTMLInputElement | null>(null);

  const update = (path: Array<string | number>, value: unknown) => setDraft((current) => setAtPath(current, path, value));
  const loadSubmissions = async () => {
    setSubmissionMessage("Loading submissions...");
    const response = await fetch("/api/submissions", { headers: { "x-admin-password": "ggchamp" } });
    const data = await response.json();
    if (!response.ok) {
      setSubmissionMessage(data.error ?? "Could not load submissions.");
      return;
    }
    setSubmissions(data.submissions ?? []);
    setStorageMode(data.storage ?? "");
    setSubmissionMessage("");
  };

  useEffect(() => {
    if (unlocked && tab === "submissions") {
      loadSubmissions();
    }
  }, [unlocked, tab]);

  if (!unlocked) {
    return (
      <section className="section" style={{ minHeight: "70svh", display: "grid", placeItems: "center" }}>
        <form
          className="admin-panel"
          style={{ width: "min(520px, 100%)" }}
          onSubmit={(event) => {
            event.preventDefault();
            if (password === "ggchamp") {
              window.sessionStorage.setItem("glyde-admin", "yes");
              setUnlocked(true);
            }
          }}
        >
          <span className="label">GG CONTROL // G//LYDE WORLD</span>
          <h1 className="display" style={{ fontSize: "4rem", margin: "0.6rem 0" }}>World Console</h1>
          <p className="muted">Password-gated CMS for the public portal, archive, submissions, and visual development system.</p>
          <Field label="Password" value={password} onChange={setPassword} />
          <button className="btn primary" type="submit">Unlock Admin →</button>
        </form>
      </section>
    );
  }

  return (
    <div className="admin-layout">
      <span className="label">GG CONTROL // editable CMS</span>
      <h1 className="display" style={{ fontSize: "clamp(3rem, 8vw, 8rem)", margin: "0.5rem 0" }}>G//LYDE CONTROL</h1>
      <p className="lead">Manage the public IP portal, character files, archive drops, routes, boards, GG submissions, SEO, and footer. Backup JSON remains available for migration and safekeeping.</p>

      <div className="admin-actions">
        <button className="btn primary" onClick={() => setContent(draft)}>Save Changes</button>
        <button onClick={() => setDraft(content)}>Revert Draft</button>
        <button onClick={() => { resetContent(); setDraft(siteContent); }}>Reset All</button>
        <button onClick={() => {
          const blob = new Blob([JSON.stringify(draft, null, 2)], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "glydeworld-siteContent.json";
          link.click();
          URL.revokeObjectURL(url);
        }}>Export JSON</button>
        <label>
          Import JSON
          <input
            ref={importRef}
            type="file"
            accept="application/json"
            hidden
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              const text = await file.text();
              const imported = JSON.parse(text) as SiteContent;
              setDraft(imported);
              setContent(imported);
              event.target.value = "";
            }}
          />
        </label>
      </div>

      <div className="admin-grid">
        <nav className="admin-tabs">
          {tabs.map((item) => (
            <button key={item.key} className={tab === item.key ? "active" : ""} onClick={() => setTab(item.key)}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="admin-panel">
          {tab === "dashboard" && (
            <div className="cms-dashboard">
              {[
                ["Characters", draft.characters.length],
                ["Archive Drops", draft.archive.length],
                ["Codex Files", draft.codex.length],
                ["Routes & Cities", draft.circuits.length],
                ["Factions", draft.factions.length],
                ["G-Cores", draft.gCores.length],
                ["Submissions", submissions.length],
              ].map(([label, value]) => (
                <button className="cms-stat" key={label} onClick={() => setTab(label === "G-Cores" ? "gcores" : label === "Archive Drops" ? "archive" : label === "Codex Files" ? "codex" : label === "Submissions" ? "submissions" : label === "Routes & Cities" ? "circuits" : String(label).toLowerCase() as TabKey)}>
                  <span className="label">{label}</span>
                  <b className="display">{value}</b>
                </button>
              ))}
              <div className="notice cms-note">
                <b>CMS mode</b>
                <p>Use the section editors for world management. Backup import/export is kept separate for migration and safekeeping.</p>
              </div>
            </div>
          )}

          {tab === "settings" && (
            <>
              <Field label="Site title" value={draft.settings.title} onChange={(value) => update(["settings", "title"], value)} />
              <Field label="Site description" value={draft.settings.description} onChange={(value) => update(["settings", "description"], value)} textarea />
              <Field label="Domain" value={draft.settings.domain} onChange={(value) => update(["settings", "domain"], value)} />
              <Field label="Universe label" value={draft.settings.universeLabel} onChange={(value) => update(["settings", "universeLabel"], value)} />
              <Field label="Footer copy" value={draft.settings.footerCopy} onChange={(value) => update(["settings", "footerCopy"], value)} textarea />
              <Field label="Concept art note" value={draft.settings.conceptArtNote} onChange={(value) => update(["settings", "conceptArtNote"], value)} textarea />
            </>
          )}

          {tab === "brand" && (
            <>
              <Field label="Logo text" value={draft.brand.logoText} onChange={(value) => update(["brand", "logoText"], value)} />
              <ImageField label="Logo image URL" value={draft.brand.logoImageUrl} onChange={(value) => update(["brand", "logoImageUrl"], value)} />
              <ImageField label="Alternate logo image URL" value={draft.brand.alternateLogoImageUrl} onChange={(value) => update(["brand", "alternateLogoImageUrl"], value)} />
              <ImageField label="Mark / icon URL" value={draft.brand.markUrl} onChange={(value) => update(["brand", "markUrl"], value)} />
              <ImageField label="Wordmark URL" value={draft.brand.wordmarkUrl} onChange={(value) => update(["brand", "wordmarkUrl"], value)} />
              <ImageField label="Light logo URL" value={draft.brand.lightLogoUrl} onChange={(value) => update(["brand", "lightLogoUrl"], value)} />
              <ImageField label="Dark logo URL" value={draft.brand.darkLogoUrl} onChange={(value) => update(["brand", "darkLogoUrl"], value)} />
              <ImageField label="Footer logo URL" value={draft.brand.footerLogoUrl} onChange={(value) => update(["brand", "footerLogoUrl"], value)} />
              <ImageField label="Favicon URL" value={draft.brand.faviconUrl} onChange={(value) => update(["brand", "faviconUrl"], value)} />
              <ImageField label="Open Graph image URL" value={draft.seo.ogImage} onChange={(value) => update(["seo", "ogImage"], value)} />
              <Field label="Brand accent color" value={draft.brand.accentColor} onChange={(value) => update(["brand", "accentColor"], value)} />
            </>
          )}

          {tab === "seo" && Object.entries(draft.seo).map(([key, value]) => (
            <Field key={key} label={key} value={String(value)} onChange={(next) => update(["seo", key], next)} textarea={key.toLowerCase().includes("description")} />
          ))}

          {tab === "nav" && (
            <>
              <JsonEditor label="Navigation" value={draft.nav} onChange={(value) => update(["nav"], value)} />
              <JsonEditor label="Global CTAs" value={draft.ctas} onChange={(value) => update(["ctas"], value)} />
              <JsonEditor label="Feature strip" value={draft.featureStrip} onChange={(value) => update(["featureStrip"], value)} />
            </>
          )}

          {tab === "homepage" && <JsonEditor label="Homepage sections: hero, G//LYDE, Off Ledger, Riders / Boards / Routes, Enter the World, GG CTA" value={draft.homepage} onChange={(value) => update(["homepage"], value)} />}
          {tab === "pages" && <JsonEditor label="Pages: home, gravsports, racing, neoNoctis, garage, support" value={draft.pages} onChange={(value) => update(["pages"], value)} />}
          {tab === "characters" && <JsonEditor label="Characters" value={draft.characters} onChange={(value) => update(["characters"], value)} />}
          {tab === "archive" && <JsonEditor label="Archive entries" value={draft.archive} onChange={(value) => update(["archive"], value)} />}
          {tab === "circuits" && <JsonEditor label="Routes & Cities: planets, cities, districts, routes, gates, tracks, circuits, series" value={draft.circuits} onChange={(value) => update(["circuits"], value)} />}
          {tab === "factions" && <JsonEditor label="Factions" value={draft.factions} onChange={(value) => update(["factions"], value)} />}
          {tab === "manufacturers" && <JsonEditor label="Manufacturers" value={draft.manufacturers} onChange={(value) => update(["manufacturers"], value)} />}
          {tab === "sponsors" && <JsonEditor label="Sponsors" value={draft.sponsors} onChange={(value) => update(["sponsors"], value)} />}
          {tab === "codex" && <JsonEditor label="Codex terms" value={draft.codex} onChange={(value) => update(["codex"], value)} />}
          {tab === "gcores" && <JsonEditor label="Boards / gear / G-Core spec panels" value={draft.gCores} onChange={(value) => update(["gCores"], value)} />}
          {tab === "submissions" && (
            <div className="submissions-admin">
              <div className="admin-actions compact">
                <button className="btn primary" onClick={loadSubmissions}>Refresh</button>
                <button onClick={() => {
                  const blob = new Blob([JSON.stringify(submissions, null, 2)], { type: "application/json" });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = "glydeworld-submissions.json";
                  link.click();
                  URL.revokeObjectURL(url);
                }}>Export Submissions</button>
              </div>
              <div className="notice cms-note">
                <b>Submission backend</b>
                <p>Storage: {storageMode || "unknown"}. Local mode works for development. Production persistence uses Vercel Blob with BLOB_READ_WRITE_TOKEN.</p>
                {submissionMessage && <p>{submissionMessage}</p>}
              </div>
              <div className="submission-admin-list">
                {submissions.length === 0 && <p className="muted">No submissions yet.</p>}
                {submissions.map((submission) => (
                  <article className="submission-admin-card" key={submission.id}>
                    <div>
                      <span className="label">{submission.type} // {submission.status} // {new Date(submission.createdAt).toLocaleString()}</span>
                      <h3 className="display">{submission.conceptTitle}</h3>
                      <p><b>{submission.name}</b> · <a href={`mailto:${submission.email}`}>{submission.email}</a></p>
                      <p>{submission.conceptDescription}</p>
                      <p><b>Role:</b> {submission.roleOrDiscipline || "n/a"}</p>
                      <p><b>Why it fits:</b> {submission.fitReason}</p>
                      {submission.visualReferences && <p><b>Refs:</b> <a href={submission.visualReferences}>{submission.visualReferences}</a></p>}
                    </div>
                    <label className="field">
                      <span className="label">Review status</span>
                      <select
                        value={submission.status}
                        onChange={async (event) => {
                          await fetch(`/api/submissions/${submission.id}`, {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json", "x-admin-password": "ggchamp" },
                            body: JSON.stringify({ status: event.target.value, notes: submission.notes }),
                          });
                          await loadSubmissions();
                        }}
                      >
                        {["new", "reviewing", "approved", "declined", "adapted"].map((status) => <option key={status} value={status}>{status}</option>)}
                      </select>
                    </label>
                    <label className="field">
                      <span className="label">Internal notes</span>
                      <textarea
                        value={submission.notes}
                        onChange={(event) => setSubmissions((current) => current.map((item) => item.id === submission.id ? { ...item, notes: event.target.value } : item))}
                      />
                    </label>
                    <button onClick={async () => {
                      await fetch(`/api/submissions/${submission.id}`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json", "x-admin-password": "ggchamp" },
                        body: JSON.stringify({ status: submission.status, notes: submission.notes }),
                      });
                      await loadSubmissions();
                    }}>Save Notes</button>
                  </article>
                ))}
              </div>
            </div>
          )}
          {tab === "garage" && <JsonEditor label="GG / G//LYDE Garage content and submission links" value={draft.garage} onChange={(value) => update(["garage"], value)} />}
          {tab === "support" && <JsonEditor label="Support content and payment links" value={draft.support} onChange={(value) => update(["support"], value)} />}
          {tab === "footer" && <JsonEditor label="Footer tagline, columns, links, and social links" value={draft.footer} onChange={(value) => update(["footer"], value)} />}

          {tab === "images" && (
            <div className="edit-list">
              {draft.images.map((image, index) => (
                <div className="edit-item" key={image.id}>
                  <Field label="Title" value={image.title} onChange={(value) => update(["images", index, "title"], value)} />
                  <Field label="Image URL" value={image.url} onChange={(value) => update(["images", index, "url"], value)} />
                  <img className="preview-img" src={image.url} alt="" />
                  <Field label="Alt text" value={image.alt} onChange={(value) => update(["images", index, "alt"], value)} textarea />
                  <Field label="Caption" value={image.caption} onChange={(value) => update(["images", index, "caption"], value)} textarea />
                  <button onClick={() => update(["images", index, "url"], "")}>Remove image URL</button>
                </div>
              ))}
            </div>
          )}

          {tab === "json" && <JsonEditor label="Full siteContent JSON" value={draft} onChange={(value) => setDraft(value as SiteContent)} />}
        </div>
      </div>
    </div>
  );
}
