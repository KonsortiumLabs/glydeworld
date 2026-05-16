"use client";

import { useRef, useState } from "react";
import { siteContent, type SiteContent } from "@/content/siteContent";
import { useSiteContent } from "@/components/ContentProvider";

type TabKey =
  | "settings"
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
  | "garage"
  | "support"
  | "images"
  | "json";

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "settings", label: "Settings" },
  { key: "seo", label: "SEO" },
  { key: "nav", label: "Nav / CTAs" },
  { key: "homepage", label: "Homepage" },
  { key: "pages", label: "Pages" },
  { key: "characters", label: "Characters" },
  { key: "archive", label: "Archive" },
  { key: "circuits", label: "Circuits" },
  { key: "factions", label: "Factions" },
  { key: "manufacturers", label: "Manufacturers" },
  { key: "sponsors", label: "Sponsors" },
  { key: "garage", label: "Garage" },
  { key: "support", label: "Support" },
  { key: "images", label: "Images" },
  { key: "json", label: "Import / Export" },
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

export function AdminView() {
  const { content, setContent, resetContent } = useSiteContent();
  const [unlocked, setUnlocked] = useState(() => typeof window !== "undefined" && window.sessionStorage.getItem("glyde-admin") === "yes");
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState<TabKey>("settings");
  const [draft, setDraft] = useState<SiteContent>(content);
  const importRef = useRef<HTMLInputElement | null>(null);

  const update = (path: Array<string | number>, value: unknown) => setDraft((current) => setAtPath(current, path, value));

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
          <span className="label">Admin // G//LYDE WORLD</span>
          <h1 className="display" style={{ fontSize: "4rem", margin: "0.6rem 0" }}>Operating Console</h1>
          <p className="muted">Prototype password gate. Content edits save to browser localStorage and can be exported as JSON.</p>
          <Field label="Password" value={password} onChange={setPassword} />
          <button className="btn primary" type="submit">Unlock Admin →</button>
        </form>
      </section>
    );
  }

  return (
    <div className="admin-layout">
      <span className="label">Admin // editable local prototype</span>
      <h1 className="display" style={{ fontSize: "clamp(3rem, 8vw, 8rem)", margin: "0.5rem 0" }}>G//LYDE CONTENT</h1>
      <p className="lead">localStorage edits are browser-local. Use Export JSON / Import JSON to preserve changes and migrate into a real CMS later.</p>

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

          {tab === "homepage" && <JsonEditor label="Homepage sections: Start Here, movement systems, Neo Noctis, Off Ledger, spotlight, latest drops, Garage, Support CTA" value={draft.homepage} onChange={(value) => update(["homepage"], value)} />}
          {tab === "pages" && <JsonEditor label="Pages: home, gravsports, racing, neoNoctis, garage, support" value={draft.pages} onChange={(value) => update(["pages"], value)} />}
          {tab === "characters" && <JsonEditor label="Characters" value={draft.characters} onChange={(value) => update(["characters"], value)} />}
          {tab === "archive" && <JsonEditor label="Archive entries" value={draft.archive} onChange={(value) => update(["archive"], value)} />}
          {tab === "circuits" && <JsonEditor label="Circuits" value={draft.circuits} onChange={(value) => update(["circuits"], value)} />}
          {tab === "factions" && <JsonEditor label="Factions" value={draft.factions} onChange={(value) => update(["factions"], value)} />}
          {tab === "manufacturers" && <JsonEditor label="Manufacturers" value={draft.manufacturers} onChange={(value) => update(["manufacturers"], value)} />}
          {tab === "sponsors" && <JsonEditor label="Sponsors" value={draft.sponsors} onChange={(value) => update(["sponsors"], value)} />}
          {tab === "garage" && <JsonEditor label="Garage content and submission links" value={draft.garage} onChange={(value) => update(["garage"], value)} />}
          {tab === "support" && <JsonEditor label="Support content and payment links" value={draft.support} onChange={(value) => update(["support"], value)} />}

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
