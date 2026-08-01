import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/** Keep under typical serverless body limits (e.g. Vercel ~4.5 MB). */
const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED_EXT = /\.(webm|mp3|mp4|mpeg|mpga|m4a|wav|ogg|flac)$/i;
const ALLOWED_MIME =
  /^(audio\/|video\/webm|video\/mp4|application\/octet-stream)/i;

const WHISPER_MODEL = "whisper-large-v3-turbo";

/**
 * Pure speech→text for uploaded / recorded audio via Groq Whisper.
 * Live mic STT stays in the browser (Web Speech); this path is for files.
 */
export async function POST(req: NextRequest) {
  try {
    const groqKey = process.env.GROQ_API_KEY?.trim();
    if (!groqKey) {
      return NextResponse.json(
        {
          error:
            "Audio file transcription needs GROQ_API_KEY on the server. Use live mic speech on Chrome/Edge, or ask the site owner to configure Groq.",
        },
        { status: 503 }
      );
    }

    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing audio file." }, { status: 400 });
    }

    const name = file.name || "audio.webm";
    if (!ALLOWED_EXT.test(name) && file.type && !ALLOWED_MIME.test(file.type)) {
      return NextResponse.json(
        { error: "Unsupported audio type. Try mp3, wav, m4a, webm, or ogg." },
        { status: 400 }
      );
    }
    if (file.size <= 0) {
      return NextResponse.json({ error: "Empty audio file." }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { error: "Audio too large (max 4 MB)." },
        { status: 413 }
      );
    }

    const language = String(form.get("language") || "en").trim().slice(0, 8) || "en";

    const upstream = new FormData();
    upstream.append("file", file, name);
    upstream.append("model", WHISPER_MODEL);
    upstream.append("language", language);
    upstream.append("response_format", "json");
    upstream.append("temperature", "0");

    const res = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
      method: "POST",
      headers: { Authorization: `Bearer ${groqKey}` },
      body: upstream,
    });

    const raw = await res.text();
    let parsed: { text?: string; error?: { message?: string } } = {};
    try {
      parsed = JSON.parse(raw) as typeof parsed;
    } catch {
      /* keep empty */
    }

    if (!res.ok) {
      const msg =
        parsed.error?.message ||
        raw.slice(0, 240) ||
        `Transcription failed (${res.status})`;
      return NextResponse.json({ error: msg }, { status: 502 });
    }

    const text = String(parsed.text || "").trim();
    if (!text) {
      return NextResponse.json(
        { error: "No speech detected in this audio." },
        { status: 422 }
      );
    }

    return NextResponse.json({
      text,
      model: WHISPER_MODEL,
      provider: "groq",
      note: "Transcribed with Groq Whisper (audio leaves the browser for this path).",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Transcription failed." },
      { status: 500 }
    );
  }
}
