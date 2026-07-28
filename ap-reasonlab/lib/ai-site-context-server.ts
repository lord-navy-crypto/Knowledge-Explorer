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

/** Server-side Knowledge Explorer search for AI prompts. No LLM API cost. */
export async function buildServerAiSiteContext(query: string, enabled = true): Promise<string> {
  if (!enabled) return "";
  const searchQuery = extractAiSearchQuery(query);
  if (searchQuery.length < 2) return "";
  try {
    const managed = await loadSlimManagedCached();
    return formatAiSiteSearchContext(
      searchKnowledgeExplorerContent(searchQuery, managed, AI_SITE_SEARCH_LIMIT)
    );
  } catch {
    return "";
  }
}

/** Invalidate after Manage publishes so the next AI call sees fresh content. */
export function invalidateAiSiteSearchCache() {
  searchCache = null;
}
