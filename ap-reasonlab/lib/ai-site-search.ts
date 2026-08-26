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

/** How many site hits to inject into AI prompts. */
export const AI_SITE_SEARCH_LIMIT = 10;
/** Longer excerpts so the model can actually use formulas/steps from KE articles. */
export const AI_SITE_DETAIL_MAX = 1600;

/**
 * Search Knowledge Explorer built-in + managed study content.
 * Uses the unified site search engine — not the open web. No LLM API cost.
 */
export function searchKnowledgeExplorerContent(
  query: string,
  managed?: Partial<ManagedContent> | null,
  limit = AI_SITE_SEARCH_LIMIT
): AiSiteSearchHit[] {
  return searchSiteEngine(query, managed, {
    limit: Math.max(1, Math.min(limit, AI_SITE_SEARCH_LIMIT)),
    detailMax: AI_SITE_DETAIL_MAX,
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
