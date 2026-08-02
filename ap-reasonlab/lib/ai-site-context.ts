import { extractAiSearchQuery } from "@/lib/ai-site-query";

/** Keep in sync with lib/ai-site-search.ts — duplicated so clients never import the search engine. */
export const AI_SITE_SEARCH_LIMIT = 8;

/** Append server-fetched site context to a Local AI / client prompt. */
export function appendAiSiteContext(userPrompt: string, context: string): string {
  const trimmed = context.trim();
  if (!trimmed) return userPrompt;
  return `${userPrompt}\n\n${trimmed}`;
}

/** Client helper: fetch Knowledge Explorer site search context for Local AI prompts. */
export async function fetchAiSiteContext(
  query: string,
  enabled = true
): Promise<{
  context: string;
  note: string;
  hitCount: number;
  hits: Array<{ title: string; href: string; subject?: string }>;
}> {
  if (!enabled) {
    return { context: "", note: "Site search off.", hitCount: 0, hits: [] };
  }
  const searchQuery = extractAiSearchQuery(query);
  if (searchQuery.length < 2) {
    return { context: "", note: "Query too short for site search.", hitCount: 0, hits: [] };
  }
  try {
    const response = await fetch("/api/ai/site-search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: searchQuery, enabled: true, limit: AI_SITE_SEARCH_LIMIT }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return {
        context: "",
        note: String(data.error || "Site search failed."),
        hitCount: 0,
        hits: [],
      };
    }
    const hits = Array.isArray(data.hits) ? data.hits : [];
    return {
      context: String(data.context || ""),
      note: String(data.note || ""),
      hitCount: hits.length,
      hits: hits.map((hit: { title?: string; href?: string; subject?: string }) => ({
        title: String(hit.title || "Site page"),
        href: String(hit.href || "/"),
        subject: hit.subject ? String(hit.subject) : undefined,
      })),
    };
  } catch {
    return { context: "", note: "Site search unavailable.", hitCount: 0, hits: [] };
  }
}
