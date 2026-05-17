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
  | "story"
  | "chapters"
  | "journals"
  | "characters"
  | "archive"
  | "gallery"
  | "circuits"
  | "factions"
  | "manufacturers"
  | "sponsors"
  | "codex"
  | "gcores"
  | "media"
  | "tags"
  | "relationships"
  | "sound"
  | "submissions"
  | "garage"
  | "support"
  | "footer"
  | "images"
  | "json";

const adminSections: Array<{ title: string; items: Array<{ key: TabKey; label: string }> }> = [
  { title: "Dashboard", items: [
    { key: "dashboard", label: "Overview" },
  ] },
  { title: "Story", items: [
    { key: "story", label: "Publishing Queue" },
    { key: "chapters", label: "Chapters / Volume Zero" },
    { key: "journals", label: "Character Journals" },
  ] },
  { title: "Archive", items: [
    { key: "archive", label: "All Files" },
    { key: "gallery", label: "Gallery Images" },
    { key: "codex", label: "Black Book" },
  ] },
  { title: "Characters", items: [
    { key: "characters", label: "All Characters" },
    { key: "relationships", label: "Relationships" },
  ] },
  { title: "World", items: [
    { key: "circuits", label: "Routes & Cities" },
    { key: "factions", label: "Factions" },
    { key: "manufacturers", label: "Manufacturers" },
    { key: "sponsors", label: "Sponsors" },
    { key: "gcores", label: "Boards / Gear / G-Core" },
    { key: "tags", label: "Global Tags" },
  ] },
  { title: "Media", items: [
    { key: "media", label: "Image Library" },
    { key: "images", label: "Reference Uploads" },
    { key: "sound", label: "Sound" },
  ] },
  { title: "G// Garage", items: [
    { key: "submissions", label: "Review Queue" },
    { key: "garage", label: "Garage Page" },
  ] },
  { title: "Site", items: [
    { key: "homepage", label: "Homepage" },
    { key: "pages", label: "Pages" },
    { key: "nav", label: "Navigation / CTAs" },
    { key: "seo", label: "SEO" },
    { key: "footer", label: "Footer" },
    { key: "brand", label: "Brand System" },
    { key: "settings", label: "Settings" },
    { key: "support", label: "Support" },
    { key: "json", label: "Backup" },
  ] },
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

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function humanize(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getItemLabel(value: unknown, fallback: string) {
  if (!isPlainObject(value)) return fallback;
  return String(value.title ?? value.name ?? value.term ?? value.label ?? value.id ?? fallback);
}

function makeEmptyLike(value: unknown): unknown {
  if (Array.isArray(value)) return [];
  if (!isPlainObject(value)) return "";
  return Object.fromEntries(Object.entries(value).map(([key, item]) => {
    if (Array.isArray(item)) return [key, []];
    if (typeof item === "boolean") return [key, false];
    if (typeof item === "number") return [key, 0];
    if (isPlainObject(item)) return [key, makeEmptyLike(item)];
    return [key, ""];
  }));
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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const readFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result ?? ""));
    reader.readAsDataURL(file);
  };

  return (
    <div className="image-field">
      <span className="label">{label}</span>
      <button
        className="media-dropzone"
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          readFile(event.dataTransfer.files[0]);
        }}
      >
        {value ? <img className="preview-img wide" src={value} alt="" /> : <span>Drop image here or click to select</span>}
        <small>Browser-local media is stored as a data URL. Connected storage can replace this later.</small>
      </button>
      <input ref={inputRef} hidden type="file" accept="image/*" onChange={(event) => readFile(event.target.files?.[0])} />
      <Field label="Image URL fallback" value={value} onChange={onChange} />
      <div className="admin-actions compact">
        <button onClick={() => onChange("")}>Remove</button>
      </div>
    </div>
  );
}

function ValueEditor({ label, value, onChange }: { label: string; value: unknown; onChange: (value: unknown) => void }) {
  const lower = label.toLowerCase();

  if (typeof value === "boolean") {
    return (
      <label className="admin-check">
        <input type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} />
        <span>{humanize(label)}</span>
      </label>
    );
  }

  if (typeof value === "number") {
    return <Field label={humanize(label)} value={String(value)} onChange={(next) => onChange(Number(next) || 0)} />;
  }

  if (typeof value === "string") {
    if (lower.includes("image") || lower.includes("logo") || lower.includes("favicon") || lower === "url" || lower.endsWith("url")) {
      return <ImageField label={humanize(label)} value={value} onChange={onChange as (value: string) => void} />;
    }
    const textarea = value.length > 90 || lower.includes("body") || lower.includes("description") || lower.includes("copy") || lower.includes("bio") || lower.includes("notice") || lower.includes("excerpt") || lower.includes("full");
    return <Field label={humanize(label)} value={value} onChange={onChange as (value: string) => void} textarea={textarea} />;
  }

  if (Array.isArray(value)) {
    return <ArrayEditor label={humanize(label)} value={value} onChange={onChange} />;
  }

  if (isPlainObject(value)) {
    return (
      <details className="cms-nested-panel" open>
        <summary>{humanize(label)}</summary>
        <ObjectEditor value={value} onChange={onChange as (value: Record<string, unknown>) => void} />
      </details>
    );
  }

  return null;
}

function ObjectEditor({ value, onChange }: { value: Record<string, unknown>; onChange: (value: Record<string, unknown>) => void }) {
  return (
    <div className="cms-form-grid">
      {Object.entries(value).map(([key, item]) => (
        <ValueEditor key={key} label={key} value={item} onChange={(next) => onChange({ ...value, [key]: next })} />
      ))}
    </div>
  );
}

function ArrayEditor({ label, value, onChange }: { label: string; value: unknown[]; onChange: (value: unknown[]) => void }) {
  const primitive = value.every((item) => typeof item !== "object" || item === null);

  if (primitive) {
    return (
      <Field
        label={`${label} (comma separated)`}
        value={value.map(String).join(", ")}
        onChange={(next) => onChange(next.split(",").map((item) => item.trim()).filter(Boolean))}
      />
    );
  }

  return (
    <div className="cms-list-editor">
      <div className="cms-list-head">
        <span className="label">{label}</span>
        <button type="button" onClick={() => onChange([...value, makeEmptyLike(value[0] ?? {})])}>Add Item</button>
      </div>
      {value.map((item, index) => (
        <details className="cms-edit-card" key={index} open={index < 2}>
          <summary>
            <b>{getItemLabel(item, `${label} ${index + 1}`)}</b>
            <span>{index + 1}</span>
          </summary>
          {isPlainObject(item) ? (
            <ObjectEditor
              value={item}
              onChange={(next) => onChange(value.map((entry, entryIndex) => entryIndex === index ? next : entry))}
            />
          ) : (
            <Field label={label} value={String(item)} onChange={(next) => onChange(value.map((entry, entryIndex) => entryIndex === index ? next : entry))} />
          )}
          <div className="admin-actions compact">
            <button type="button" onClick={() => onChange([...value.slice(0, index + 1), clone(item), ...value.slice(index + 1)])}>Duplicate</button>
            <button type="button" onClick={() => onChange(value.filter((_, entryIndex) => entryIndex !== index))}>Delete</button>
          </div>
        </details>
      ))}
    </div>
  );
}

function ContentEditor({ label, value, onChange }: { label: string; value: unknown; onChange: (value: unknown) => void }) {
  return (
    <section className="cms-visual-editor">
      <div className="cms-editor-head">
        <span className="label">{label}</span>
        <p>Visual CMS editor. Use Backup for raw JSON import/export.</p>
      </div>
      <ValueEditor label={label} value={value} onChange={onChange} />
    </section>
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
          <span className="label">G//LYDE CONTROL // G//LYDE</span>
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
      <div className="admin-command-top">
        <div>
          <span className="label">G//LYDE: LOWLINE // IP CONTROL ROOM</span>
          <h1 className="display">G//LYDE CONTROL</h1>
          <p className="lead">Manage chapters, rider files, Archive drops, Black Book entries, Gallery images, sponsors, routes, tags, submissions, media, and global site copy.</p>
        </div>
        <label className="admin-search">
          <span>Search control room</span>
          <input placeholder="Kellan, Gate 8, MACK'S, G-Res..." />
        </label>
      </div>

      <div className="admin-actions">
        <button className="btn primary" onClick={() => setContent(draft)}>Save Changes</button>
        <button onClick={() => setContent(draft)}>Publish Signal</button>
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
        }}>Export Backup</button>
        <label>
          Import Backup
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
          {adminSections.map((section) => (
            <div className="admin-nav-section" key={section.title}>
              <span>{section.title}</span>
              {section.items.map((item) => (
                <button key={item.key} className={tab === item.key ? "active" : ""} onClick={() => setTab(item.key)}>
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="admin-panel">
          {tab === "dashboard" && (
            <div className="control-dashboard">
              <div className="cms-dashboard">
                {[
                  ["Published Files", draft.archive.filter((item) => item.status?.toLowerCase?.() !== "draft").length, "archive"],
                  ["Drafts", draft.archive.filter((item) => item.status?.toLowerCase?.() === "draft").length + draft.adminHub.chapters.filter((item) => String(item.status).toLowerCase() === "draft").length, "story"],
                  ["Characters", draft.characters.length, "characters"],
                  ["Chapters", draft.adminHub.chapters.length, "chapters"],
                  ["Gallery Images", draft.gallery.length, "gallery"],
                  ["Media Assets", draft.adminHub.mediaAssets.length + draft.images.length, "media"],
                  ["Pending Submissions", submissions.length, "submissions"],
                ].map(([label, value, target]) => (
                  <button className="cms-stat" key={label} onClick={() => setTab(target as TabKey)}>
                    <span className="label">{label}</span>
                    <b className="display">{value}</b>
                  </button>
                ))}
              </div>
              <div className="admin-panel-grid">
                <section className="admin-command-panel">
                  <span className="label">Publishing Queue</span>
                  <h3>Create and schedule the next signal.</h3>
                  <p>Draft chapters, journal entries, Archive files, Gallery uploads, and Sound drops should move through status before publication.</p>
                  <div className="admin-quick-actions">
                    {[
                      ["Create Character", "characters"],
                      ["Create Archive File", "archive"],
                      ["Create Chapter", "chapters"],
                      ["Upload Gallery Image", "gallery"],
                      ["Upload Media", "media"],
                      ["Add Black Book Entry", "codex"],
                      ["Add Route / City / Spot", "circuits"],
                      ["Review Submissions", "submissions"],
                    ].map(([label, target]) => <button key={label} onClick={() => setTab(target as TabKey)}>{label}</button>)}
                  </div>
                </section>
                <section className="admin-command-panel">
                  <span className="label">Recent Archive Files</span>
                  {draft.archive.slice(0, 5).map((item) => <p key={item.id}><b>{item.title}</b><span>{item.category} // {item.status}</span></p>)}
                </section>
                <section className="admin-command-panel">
                  <span className="label">Recent Character Updates</span>
                  {draft.characters.slice(0, 5).map((item) => <p key={item.id}><b>{item.name}</b><span>{item.role} // {item.status}</span></p>)}
                </section>
                <section className="admin-command-panel">
                  <span className="label">Missing Metadata Alerts</span>
                  <p><b>{draft.archive.filter((item) => !item.seoTitle || !item.seoDescription).length}</b><span>Archive files need SEO metadata.</span></p>
                  <p><b>{draft.gallery.filter((item) => !item.credit).length}</b><span>Gallery frames need credit/artist notes.</span></p>
                  <p><b>{draft.characters.filter((item) => !item.image).length}</b><span>Characters need portrait images.</span></p>
                </section>
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
              <ContentEditor label="Navigation" value={draft.nav} onChange={(value) => update(["nav"], value)} />
              <ContentEditor label="Global CTAs" value={draft.ctas} onChange={(value) => update(["ctas"], value)} />
              <ContentEditor label="Feature strip" value={draft.featureStrip} onChange={(value) => update(["featureStrip"], value)} />
            </>
          )}

          {tab === "homepage" && <ContentEditor label="Homepage sections" value={draft.homepage} onChange={(value) => update(["homepage"], value)} />}
          {tab === "pages" && <ContentEditor label="Pages" value={draft.pages} onChange={(value) => update(["pages"], value)} />}
          {tab === "story" && <ContentEditor label="Story control: publishing queue, Volume Zero, episodes, scenes, and timeline" value={{
            chapters: draft.adminHub.chapters,
            episodes: draft.adminHub.episodes,
            scenes: draft.adminHub.scenes,
            volumeZero: draft.adminHub.chapters.filter((item) => String(item.volumeArc ?? "").includes("LOWLINE") || String(item.volumeArc ?? "").includes("Volume Zero")),
          }} onChange={(value) => update(["adminHub"], { ...draft.adminHub, ...(value as Record<string, unknown>) })} />}
          {tab === "chapters" && <ContentEditor label="Chapters / graphic novel entries: pages, reading order, related files, and publish state" value={draft.adminHub.chapters} onChange={(value) => update(["adminHub", "chapters"], value)} />}
          {tab === "journals" && <ContentEditor label="Character journals: first-person files, monologues, interviews, field notes, and Off-Ledger notes" value={draft.adminHub.characterJournals} onChange={(value) => update(["adminHub", "characterJournals"], value)} />}
          {tab === "characters" && <ContentEditor label="Characters" value={draft.characters} onChange={(value) => update(["characters"], value)} />}
          {tab === "archive" && <ContentEditor label="Archive entries" value={draft.archive} onChange={(value) => update(["archive"], value)} />}
          {tab === "gallery" && <ContentEditor label="Gallery: visual wall, image uploads, credits, and related files" value={draft.gallery} onChange={(value) => update(["gallery"], value)} />}
          {tab === "circuits" && <ContentEditor label="Routes & Cities" value={draft.circuits} onChange={(value) => update(["circuits"], value)} />}
          {tab === "factions" && <ContentEditor label="Factions" value={draft.factions} onChange={(value) => update(["factions"], value)} />}
          {tab === "manufacturers" && <ContentEditor label="Manufacturers" value={draft.manufacturers} onChange={(value) => update(["manufacturers"], value)} />}
          {tab === "sponsors" && <ContentEditor label="Sponsors" value={draft.sponsors} onChange={(value) => update(["sponsors"], value)} />}
          {tab === "codex" && <ContentEditor label="Black Book terms" value={draft.codex} onChange={(value) => update(["codex"], value)} />}
          {tab === "gcores" && <ContentEditor label="Boards / gear / G-Core spec panels" value={draft.gCores} onChange={(value) => update(["gCores"], value)} />}
          {tab === "media" && <ContentEditor label="Media library: image uploads, character art, board art, route art, key visuals, and references" value={draft.adminHub.mediaAssets} onChange={(value) => update(["adminHub", "mediaAssets"], value)} />}
          {tab === "tags" && <ContentEditor label="Global tags: reusable labels, categories, accents, and cleanup metadata" value={draft.adminHub.tags} onChange={(value) => update(["adminHub", "tags"], value)} />}
          {tab === "relationships" && <ContentEditor label="Related content graph: characters, files, chapters, Black Book terms, sponsors, routes, Gallery images, and tags" value={draft.adminHub.relationships} onChange={(value) => update(["adminHub", "relationships"], value)} />}
          {tab === "sound" && <ContentEditor label="Sound: Signal Tracks, Route Mixes, and G//NET Audio" value={draft.sound} onChange={(value) => update(["sound"], value)} />}
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
          {tab === "garage" && <ContentEditor label="G// Garage content and submission links" value={draft.garage} onChange={(value) => update(["garage"], value)} />}
          {tab === "support" && <ContentEditor label="Support content and payment links" value={draft.support} onChange={(value) => update(["support"], value)} />}
          {tab === "footer" && <ContentEditor label="Footer tagline, columns, links, and social links" value={draft.footer} onChange={(value) => update(["footer"], value)} />}

          {tab === "images" && (
            <div className="edit-list">
              {draft.images.map((image, index) => (
                <div className="edit-item" key={image.id}>
                  <Field label="Title" value={image.title} onChange={(value) => update(["images", index, "title"], value)} />
                  <ImageField label="Image" value={image.url} onChange={(value) => update(["images", index, "url"], value)} />
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
