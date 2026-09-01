import { NextResponse } from "next/server";

export const runtime = "nodejs";

const ALLOWED_EVENTS = new Set(["page_view"]);
const ALLOWED_DEVICES = new Set(["mobile", "tablet", "desktop"]);

function cleanString(value: unknown, max: number) {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const event = cleanString(body.event, 40);
    const route = cleanString(body.route, 180);
    const device = cleanString(body.device, 20);

    if (!event || !ALLOWED_EVENTS.has(event) || !route || !route.startsWith("/")) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const entry = {
      type: "usage",
      event,
      route,
      device: device && ALLOWED_DEVICES.has(device) ? device : undefined,
      language: cleanString(body.language, 20),
      timezone: cleanString(body.timezone, 60),
      referrerHost: cleanString(body.referrerHost, 120),
      at: new Date().toISOString(),
    };

    // Deliberately privacy-minimal: no prompt/chat text, API keys, cookies,
    // account identifiers, full referrer URLs, or client IP addresses.
    console.info("[usage]", JSON.stringify(entry));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
