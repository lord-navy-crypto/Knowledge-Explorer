import { getGithubTokenFromCookie } from "@/lib/auth";
import { extractAiSearchQuery } from "@/lib/ai-site-query";
import {
  appendAiSiteContext,
  AI_SITE_SEARCH_LIMIT,
  formatAiSiteSearchContext,
  searchKnowledgeExplorerContent,
} from "@/lib/ai-site-search";
import { loadManagedContent, normalizeManagedContent, type ManagedContent } from "@/lib/managed-store";

export { appendAiSiteContext };

/** Drop base64 payloads — search only needs metadata/text. */
function slimManagedForSearch(content: ManagedContent): ManagedContent {
  return {
    ...content,
    files: (content.files || []).map((file) => {
      if (!file.dataUrl) return file;
      const { dataUrl: _omit, ...rest } = file;
      return rest;
    }),
    recycleBin: [],
  };
}

type SearchCache = {
  at: number;
  managed: ManagedContent;
};

let searchCache: SearchCache | null = null;
const SEARCH_CACHE_TTL_MS = 45_000;

async function loadSlimManagedCached(): Promise<ManagedContent> {
  const now = Date.now();
  if (searchCache && now - searchCache.at < SEARCH_CACHE_TTL_MS) {
    return searchCache.managed;
  }
  const token = await getGithubTokenFromCookie();
  const managed = slimManagedForSearch(normalizeManagedContent(await loadManagedContent(token)));
  searchCache = { at: now, managed };
  return managed;
}

export type ServerAiSiteSearchResult = {
  hits: ReturnType<typeof searchKnowledgeExplorerContent>;
  context: string;
  hitCount: number;
  searchQuery: string;
  note: string;
};

/** Shared cached search used by cloud AI routes and `/api/ai/site-search`. */
export async function runServerAiSiteSearch(
  query: string,
  limit = AI_SITE_SEARCH_LIMIT
): Promise<ServerAiSiteSearchResult> {
  const searchQuery = extractAiSearchQuery(query);
  if (searchQuery.length < 2) {
    return {
      hits: [],
      context: "",
      hitCount: 0,
      searchQuery,
      note: "Query too short.",
    };
  }
  const managed = await loadSlimManagedCached();
  const capped = Math.max(1, Math.min(limit, AI_SITE_SEARCH_LIMIT));
  const hits = searchKnowledgeExplorerContent(searchQuery, managed, capped);
  return {
    hits,
    context: formatAiSiteSearchContext(hits),
    hitCount: hits.length,
    searchQuery,
    note:
      hits.length > 0
        ? `Found ${hits.length} NauWiki Explorer match(es) — AI will use these site materials.`
        : "No matching site content for this question.",
  };
}

/** Server-side NauWiki Explorer search for AI prompts. No LLM API cost.
 * Always searches when a usable query exists — site materials stay primary.
 */
export async function buildServerAiSiteContext(query: string, _enabled = true): Promise<string> {
  void _enabled;
  try {
    return (await runServerAiSiteSearch(query, AI_SITE_SEARCH_LIMIT)).context;
  } catch {
    return "";
  }
}

/** Invalidate after Manage publishes so the next AI call sees fresh content. */
export function invalidateAiSiteSearchCache() {
  searchCache = null;
}
