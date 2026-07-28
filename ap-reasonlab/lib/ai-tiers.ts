/**
 * Cloud spend tiers — client-safe helpers (no Node fs).
 * Manage Advanced Default override lives in ai-tiers-managed.ts (server only).
 */

export type CloudSpendTier = "public" | "author" | "byok";

/** Env-only fallback when managed settings cannot be read. */
export function resolveSiteCloudTierFromEnv(): "public" | "author" {
  const raw = (process.env.SITE_AI_TIER || process.env.AUTHOR_AI_TIER || "public")
    .trim()
    .toLowerCase();
  return raw === "author" || raw === "mid" || raw === "standard" ? "author" : "public";
}

const TOKEN_CAPS: Record<CloudSpendTier, number> = {
  public: 1400,
  author: 2400,
  byok: 3000,
};

const TOKEN_DEFAULTS: Record<CloudSpendTier, number> = {
  public: 1100,
  author: 1800,
  byok: 2200,
};

export function capMaxTokens(requested: number | undefined, tier: CloudSpendTier): number {
  const base = requested ?? TOKEN_DEFAULTS[tier];
  return Math.max(64, Math.min(base, TOKEN_CAPS[tier]));
}

/** Mid versatile models for Advanced Default / BYOK (not Instant). Overridable via env. */
export function midModelFor(provider: string): string {
  switch (provider) {
    case "groq":
      return (
        process.env.AUTHOR_GROQ_MODEL?.trim() ||
        process.env.BYOK_GROQ_MODEL?.trim() ||
        "llama-3.3-70b-versatile"
      );
    case "gemini":
      return (
        process.env.AUTHOR_GEMINI_MODEL?.trim() ||
        process.env.BYOK_GEMINI_MODEL?.trim() ||
        "gemini-2.0-flash"
      );
    case "githubmodels":
      return (
        process.env.AUTHOR_GITHUB_MODELS_MODEL?.trim() ||
        process.env.GITHUB_MODELS_MODEL?.trim() ||
        "openai/gpt-4o-mini"
      );
    case "kimi":
      return (
        process.env.AUTHOR_KIMI_MODEL?.trim() ||
        process.env.KIMI_MODEL?.trim() ||
        process.env.MOONSHOT_MODEL?.trim() ||
        "moonshot-v1-32k"
      );
    case "openrouter":
      return (
        process.env.AUTHOR_OPENROUTER_MODEL?.trim() ||
        process.env.OPENROUTER_MODEL?.trim() ||
        "meta-llama/llama-3.1-70b-instruct"
      );
    case "deepseek":
      return (
        process.env.AUTHOR_DEEPSEEK_MODEL?.trim() ||
        process.env.DEEPSEEK_MODEL?.trim() ||
        "deepseek-chat"
      );
    default:
      return "llama-3.3-70b-versatile";
  }
}

export function tierLabel(tier: CloudSpendTier): string {
  if (tier === "public") return "Instant (lowest)";
  if (tier === "author") return "Advanced Default";
  return "Your API (Advanced)";
}
