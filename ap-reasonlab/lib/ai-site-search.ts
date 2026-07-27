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

/**
 * Search Knowledge Explorer built-in + managed study content.
 * Uses the unified site search engine — not the open web. No LLM API cost.
 */
export function searchKnowledgeExplorerContent(
  query: string,
  managed?: Partial<ManagedContent> | null,
  limit = 5
): AiSiteSearchHit[] {
  return searchSiteEngine(query, managed, { limit: Math.max(1, Math.min(limit, 8)) }).map(
    (hit: SiteSearchHit) => ({
      type: hit.type,
      title: hit.title,
      subject: hit.subject,
      detail: hit.detail,
      score: hit.score,
      href: hit.href,
    })
  );
}

export function formatAiSiteSearchContext(hits: AiSiteSearchHit[]): string {
  if (hits.length === 0) return "";
  const lines = hits.map(
    (hit, index) =>
      `${index + 1}. [${hit.type}] ${hit.title} (${hit.subject})${hit.href ? ` → ${hit.href}` : ""}\n${hit.detail}`
  );
  return `Knowledge Explorer site search results (use only if relevant; prefer teaching over copying):\n${lines.join("\n\n")}`;
}

export function appendAiSiteContext(userPrompt: string, context: string): string {
  const trimmed = context.trim();
  if (!trimmed) return userPrompt;
  return `${userPrompt}\n\n${trimmed}`;
}
