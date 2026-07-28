import {
  appendAiSiteContext,
  formatAiSiteSearchContext,
  searchKnowledgeExplorerContent,
  AI_SITE_SEARCH_LIMIT,
} from "@/lib/ai-site-search";
import { extractAiSearchQuery } from "@/lib/ai-site-query";

export { appendAiSiteContext, formatAiSiteSearchContext, searchKnowledgeExplorerContent };

/** Client helper: fetch Knowledge Explorer site search context for Local AI prompts. */
export async function fetchAiSiteContext(
  query: string,
  enabled = true
): Promise<{ context: string; note: string; hitCount: number }> {
  if (!enabled) {
    return { context: "", note: "Site search off.", hitCount: 0 };
  }
  const searchQuery = extractAiSearchQuery(query);
  if (searchQuery.length < 2) {
    return { context: "", note: "Query too short for site search.", hitCount: 0 };
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
      };
    }
    const hits = Array.isArray(data.hits) ? data.hits : [];
    return {
      context: String(data.context || ""),
      note: String(data.note || ""),
      hitCount: hits.length,
    };
  } catch {
    return { context: "", note: "Site search unavailable.", hitCount: 0 };
  }
}
