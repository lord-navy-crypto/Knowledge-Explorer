import type { ManagedContent } from "@/lib/managed-types";
import { searchSiteEngine, type SiteSearchHit } from "@/lib/site-search-engine";

export type AiSiteSearchHit = {
  type: string;
  title: string;
  subject: string;
  detail: string;
  score: number;
  href?: string;
};

/** Soft ranking preference for AI site search (not a hard type-only filter). */
export type AiSiteSearchPrefer = "formulas" | "language" | "code" | "nav";

/** How many site hits to inject into AI prompts. */
export const AI_SITE_SEARCH_LIMIT = 10;
/** Longer excerpts so the model can actually use formulas/steps from KE articles. */
export const AI_SITE_DETAIL_MAX = 1600;

/**
 * Map AI prefer mode → site-search ranking boosts.
 * `type` is never used as a hard exclusive filter here — prefer is soft.
 * When prefer is set we also bias the query with subject hints (see preferQueryBias).
 */
export function preferTypeBoosts(
  prefer?: AiSiteSearchPrefer | null
): Partial<Record<string, number>> | undefined {
  if (!prefer) return undefined;
  switch (prefer) {
    case "formulas":
      return { formula: 4.5, concept: 3.2, practice: 2.2, english: 0.35, code: 0.35, page: 0.25 };
    case "language":
      return { english: 4.5, guide: 2.2, learning: 2, formula: 0.25, code: 0.4, concept: 0.8 };
    case "code":
      return { code: 4.5, guide: 1.8, page: 0.8, formula: 0.2, english: 0.35, concept: 0.6 };
    case "nav":
      return { page: 4, guide: 3.5, subject: 2.2, learning: 1.8, checklist: 1.5, formula: 0.2, english: 0.6 };
    default:
      return undefined;
  }
}

/** Query-prefix bias when ranking hooks alone are not enough. */
export function preferQueryBias(prefer?: AiSiteSearchPrefer | null): string {
  if (!prefer) return "";
  switch (prefer) {
    case "formulas":
      return "formula equation definition";
    case "language":
      return "english vocabulary grammar writing";
    case "code":
      return "code programming snippet";
    case "nav":
      return "site guide how to use Knowledge Explorer navigation";
    default:
      return "";
  }
}

export function applyPreferToQuery(query: string, prefer?: AiSiteSearchPrefer | null): string {
  const bias = preferQueryBias(prefer);
  if (!bias) return query;
  const q = query.trim();
  if (!q) return bias;
  // Append softly so tokenize() still sees the student question first.
  return `${q} ${bias}`;
}

/**
 * Search Knowledge Explorer built-in + managed study content.
 * Uses the unified site search engine — not the open web. No LLM API cost.
 */
export function searchKnowledgeExplorerContent(
  query: string,
  managed?: Partial<ManagedContent> | null,
  limit = AI_SITE_SEARCH_LIMIT,
  prefer?: AiSiteSearchPrefer | null
): AiSiteSearchHit[] {
  const biased = applyPreferToQuery(query, prefer);
  return searchSiteEngine(biased, managed, {
    limit: Math.max(1, Math.min(limit, AI_SITE_SEARCH_LIMIT)),
    detailMax: AI_SITE_DETAIL_MAX,
    typeBoosts: preferTypeBoosts(prefer),
  }).map((hit: SiteSearchHit) => ({
    type: hit.type,
    title: hit.title,
    subject: hit.subject,
    detail: hit.detail,
    score: hit.score,
    href: hit.href,
  }));
}

export function formatAiSiteSearchContext(hits: AiSiteSearchHit[]): string {
  if (hits.length === 0) return "";
  const lines = hits.map(
    (hit, index) =>
      `${index + 1}. [${hit.type}] ${hit.title} (${hit.subject})${hit.href ? ` → ${hit.href}` : ""}\n${hit.detail}`
  );
  return [
    "Knowledge Explorer site materials (author-curated). Treat these as primary study sources for this site:",
    "- Prefer formulas, definitions, and steps from these hits when they match the question.",
    "- Cite the hit title or href when you use them.",
    "- If a hit is off-topic, ignore it.",
    "- Teach with the site content; do not invent conflicting formulas when a hit already has one.",
    "- When a hit type is [formula] and you are answering an AP/science question, copy its latex into equations[] or ## Equations as Name | latex | meaning (latex has NO $ characters). For English/coding/site-nav questions, ignore formula hits.",
    "",
    lines.join("\n\n"),
  ].join("\n");
}

export function appendAiSiteContext(userPrompt: string, context: string): string {
  const trimmed = context.trim();
  if (!trimmed) return userPrompt;
  return `${userPrompt}\n\n${trimmed}`;
}
