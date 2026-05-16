import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { get, list, put } from "@vercel/blob";

export type SubmissionStatus = "new" | "reviewing" | "approved" | "declined" | "adapted";

export type SubmissionRecord = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: SubmissionStatus;
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
  userAgent: string;
};

export type PublicSubmissionInput = {
  type: string;
  name: string;
  email: string;
  conceptTitle: string;
  conceptDescription: string;
  roleOrDiscipline?: string;
  visualReferences?: string;
  fitReason: string;
  consent: boolean;
  source?: string;
};

const localPath = path.join(process.cwd(), ".data", "submissions.json");
const blobIndexPath = "submissions/index.json";

function hasBlob() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function makeId() {
  return `sub_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

function clean(value: unknown, fallback = "") {
  return String(value ?? fallback).trim();
}

export function normalizeSubmission(input: PublicSubmissionInput, userAgent = ""): SubmissionRecord {
  const now = new Date().toISOString();
  return {
    id: makeId(),
    createdAt: now,
    updatedAt: now,
    status: "new",
    type: clean(input.type, "concept").toLowerCase(),
    name: clean(input.name),
    email: clean(input.email).toLowerCase(),
    conceptTitle: clean(input.conceptTitle),
    conceptDescription: clean(input.conceptDescription),
    roleOrDiscipline: clean(input.roleOrDiscipline),
    visualReferences: clean(input.visualReferences),
    fitReason: clean(input.fitReason),
    consent: Boolean(input.consent),
    notes: "",
    source: clean(input.source, "site"),
    userAgent,
  };
}

export function validateSubmission(record: SubmissionRecord) {
  const errors: string[] = [];
  if (!record.name) errors.push("Name is required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(record.email)) errors.push("A valid email is required.");
  if (!record.conceptTitle) errors.push("Concept title is required.");
  if (record.conceptDescription.length < 40) errors.push("Description must be at least 40 characters.");
  if (record.fitReason.length < 24) errors.push("Tell us why it fits G//LYDE.");
  if (!record.consent) errors.push("Consent is required.");
  return errors;
}

async function readLocal(): Promise<SubmissionRecord[]> {
  try {
    const text = await readFile(localPath, "utf8");
    return JSON.parse(text) as SubmissionRecord[];
  } catch {
    return [];
  }
}

async function writeLocal(records: SubmissionRecord[]) {
  await mkdir(path.dirname(localPath), { recursive: true });
  await writeFile(localPath, JSON.stringify(records, null, 2));
}

async function readBlobIndex(): Promise<SubmissionRecord[]> {
  try {
    const response = await get(blobIndexPath, { access: "private", useCache: false });
    if (!response || response.statusCode !== 200) return [];
    const text = await new Response(response.stream).text();
    return JSON.parse(text) as SubmissionRecord[];
  } catch {
    return [];
  }
}

async function writeBlobIndex(records: SubmissionRecord[]) {
  await put(blobIndexPath, JSON.stringify(records, null, 2), {
    access: "private",
    contentType: "application/json",
    allowOverwrite: true,
  });
}

export async function listSubmissions() {
  if (hasBlob()) return readBlobIndex();
  return readLocal();
}

export async function createSubmission(record: SubmissionRecord) {
  if (hasBlob()) {
    await put(`submissions/${record.id}.json`, JSON.stringify(record, null, 2), {
      access: "private",
      contentType: "application/json",
      allowOverwrite: true,
    });
    const records = await readBlobIndex();
    await writeBlobIndex([record, ...records.filter((item) => item.id !== record.id)]);
    return record;
  }

  const records = await readLocal();
  await writeLocal([record, ...records.filter((item) => item.id !== record.id)]);
  return record;
}

export async function updateSubmission(id: string, patch: Partial<Pick<SubmissionRecord, "status" | "notes">>) {
  const records = await listSubmissions();
  const existing = records.find((item) => item.id === id);
  if (!existing) return null;
  const next: SubmissionRecord = {
    ...existing,
    status: patch.status ?? existing.status,
    notes: patch.notes ?? existing.notes,
    updatedAt: new Date().toISOString(),
  };
  const updated = records.map((item) => item.id === id ? next : item);

  if (hasBlob()) {
    await put(`submissions/${next.id}.json`, JSON.stringify(next, null, 2), {
      access: "private",
      contentType: "application/json",
      allowOverwrite: true,
    });
    await writeBlobIndex(updated);
  } else {
    await writeLocal(updated);
  }

  return next;
}

export async function getStorageMode() {
  if (!hasBlob()) return "local";
  try {
    await list({ prefix: "submissions/", limit: 1 });
    return "vercel-blob";
  } catch {
    return "vercel-blob";
  }
}
