import { NextResponse } from "next/server";
import { detectJavaPublicClass, normalizeJavaSource } from "@/lib/java-source";

export const runtime = "nodejs";

type PistonExecuteResponse = {
  language?: string;
  version?: string;
  compile?: { stdout?: string; stderr?: string; output?: string; code?: number | null };
  run?: { stdout?: string; stderr?: string; output?: string; code?: number | null };
  message?: string;
};

const MAX_SOURCE_CHARS = 40_000;

/**
 * Remote Java runner hook.
 * - Without PISTON_URL: returns not_configured (writing editor still works).
 * - With PISTON_URL: POST to Piston /execute (self-hosted recommended).
 */
export async function POST(request: Request) {
  let body: { code?: string; stdin?: string };
  try {
    body = (await request.json()) as { code?: string; stdin?: string };
  } catch {
    return NextResponse.json({ ok: false, status: "bad_request", output: "Invalid JSON body." }, { status: 400 });
  }

  const code = normalizeJavaSource(String(body.code || ""));
  const stdin = String(body.stdin || "");
  if (!code.trim()) {
    return NextResponse.json({ ok: false, status: "bad_request", output: "No Java source provided." }, { status: 400 });
  }
  if (code.length > MAX_SOURCE_CHARS) {
    return NextResponse.json(
      { ok: false, status: "too_large", output: `Source too long (max ${MAX_SOURCE_CHARS} characters).` },
      { status: 413 }
    );
  }

  const pistonBase = (process.env.PISTON_URL || "").trim().replace(/\/$/, "");
  if (!pistonBase) {
    return NextResponse.json({
      ok: false,
      status: "not_configured",
      output: [
        "Java writing editor is ready. Remote Run is not configured yet.",
        "",
        "To enable running:",
        "1) Host a Piston instance (Docker) with the Java runtime installed.",
        "2) Set PISTON_URL on the server (e.g. https://your-host/api/v2).",
        "3) Optional: PISTON_TOKEN if your instance requires auth.",
        "",
        "Until then: edit, copy, or download .java and run in IntelliJ / JDK locally.",
      ].join("\n"),
    });
  }

  const className = detectJavaPublicClass(code) || "Main";
  const version = (process.env.PISTON_JAVA_VERSION || "*").trim() || "*";
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const token = (process.env.PISTON_TOKEN || "").trim();
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(`${pistonBase}/execute`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        language: "java",
        version,
        files: [{ name: `${className}.java`, content: code }],
        stdin,
        run_timeout: 8000,
        compile_timeout: 12000,
      }),
      signal: AbortSignal.timeout(20_000),
    });

    const data = (await res.json().catch(() => ({}))) as PistonExecuteResponse;
    if (!res.ok) {
      return NextResponse.json({
        ok: false,
        status: "runner_error",
        output: data.message || `Runner HTTP ${res.status}`,
      });
    }

    const compileOut = [data.compile?.stdout, data.compile?.stderr, data.compile?.output]
      .filter(Boolean)
      .join("\n")
      .trim();
    const runOut = [data.run?.stdout, data.run?.stderr, data.run?.output].filter(Boolean).join("\n").trim();
    const compileFailed = data.compile && data.compile.code != null && data.compile.code !== 0;
    const parts = [
      compileOut ? `// compile\n${compileOut}` : "",
      runOut ? `// run\n${runOut}` : "",
    ].filter(Boolean);

    return NextResponse.json({
      ok: !compileFailed && (data.run?.code === 0 || data.run?.code == null),
      status: compileFailed ? "compile_error" : "ok",
      output: parts.join("\n\n") || "(no output)",
      language: data.language,
      version: data.version,
      className,
    });
  } catch (err) {
    return NextResponse.json({
      ok: false,
      status: "runner_unreachable",
      output: `Could not reach Java runner: ${err instanceof Error ? err.message : String(err)}`,
    });
  }
}
