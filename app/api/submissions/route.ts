import { NextRequest, NextResponse } from "next/server";
import { createSubmission, getStorageMode, listSubmissions, normalizeSubmission, validateSubmission } from "@/lib/submissions";

export const runtime = "nodejs";

function isAdmin(request: NextRequest) {
  return request.headers.get("x-admin-password") === "ggchamp";
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, errors: ["Invalid JSON payload."] }, { status: 400 });
  }

  const record = normalizeSubmission(body, request.headers.get("user-agent") ?? "");
  const errors = validateSubmission(record);
  if (errors.length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const saved = await createSubmission(record);
  return NextResponse.json({
    ok: true,
    id: saved.id,
    status: saved.status,
    message: "Submission received. The G//LYDE team will review it for fit, clarity, and continuity.",
  });
}

export async function GET(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const records = await listSubmissions();
  const type = request.nextUrl.searchParams.get("type");
  const filtered = type && type !== "all" ? records.filter((record) => record.type === type) : records;
  return NextResponse.json({ ok: true, storage: await getStorageMode(), submissions: filtered });
}
