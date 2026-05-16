import { NextRequest, NextResponse } from "next/server";
import { updateSubmission, type SubmissionStatus } from "@/lib/submissions";

export const runtime = "nodejs";

const statuses: SubmissionStatus[] = ["new", "reviewing", "approved", "declined", "adapted"];

function isAdmin(request: NextRequest) {
  return request.headers.get("x-admin-password") === "ggchamp";
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });

  const status = body.status as SubmissionStatus | undefined;
  if (status && !statuses.includes(status)) {
    return NextResponse.json({ ok: false, error: "Invalid status." }, { status: 400 });
  }

  const updated = await updateSubmission(id, { status, notes: typeof body.notes === "string" ? body.notes : undefined });
  if (!updated) return NextResponse.json({ ok: false, error: "Submission not found." }, { status: 404 });

  return NextResponse.json({ ok: true, submission: updated });
}
