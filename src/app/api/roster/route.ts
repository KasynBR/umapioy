import { NextResponse } from "next/server";

export const revalidate = 3600;
const ENDPOINT = "https://umapyoi.net/api/v1/character/list";

export async function GET() {
  try {
    const response = await fetch(ENDPOINT, {
      headers: { Accept: "application/json", "User-Agent": "UmamusumeAtlas/1.0 (+https://agnesbot.xyz; community database)" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(9000),
    });
    if (!response.ok) {
      return NextResponse.json({ ok: false, source: "umapyoi.net", error: "Upstream returned HTTP " + response.status }, { status: 502 });
    }
    const raw: unknown = await response.json();
    const envelope = raw && typeof raw === "object" ? raw as {data?:unknown;results?:{data?:unknown[]}} : null;
    const data = Array.isArray(raw) ? raw : envelope && Array.isArray(envelope.data) ? envelope.data : envelope && envelope.results && Array.isArray(envelope.results.data) ? envelope.results.data : null;
    if (!data) {
      return NextResponse.json({ ok: false, source: "umapyoi.net", error: "The source returned an unrecognized response shape." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, source: "umapyoi.net", sourceUrl: ENDPOINT, fetchedAt: new Date().toISOString(), count: data.length, data }, { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } });
  } catch {
    return NextResponse.json({ ok: false, source: "umapyoi.net", error: "The community API is temporarily unavailable. Try again shortly." }, { status: 502 });
  }
}
