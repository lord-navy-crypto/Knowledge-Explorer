import { NextResponse } from "next/server";

/** Public health check — which cloud AI providers are configured (no secrets exposed). */
export async function GET() {
  const providers = {
    groq: Boolean(process.env.GROQ_API_KEY?.trim()),
    gemini: Boolean(process.env.GEMINI_API_KEY?.trim()),
    openrouter: Boolean(process.env.OPENROUTER_API_KEY?.trim()),
    deepseek: Boolean(process.env.DEEPSEEK_API_KEY?.trim()),
    kimi: Boolean(
      process.env.KIMI_API_KEY?.trim() || process.env.MOONSHOT_API_KEY?.trim()
    ),
    githubModels: Boolean(process.env.CONTENT_GITHUB_TOKEN?.trim()),
  };
  const configured = Object.values(providers).some(Boolean);
  return NextResponse.json({
    configured,
    providers,
    note: configured
      ? "Cloud AI is available for site routes."
      : "No cloud AI keys detected — use Local AI in the browser or add keys in Vercel env (see /guide).",
  });
}
