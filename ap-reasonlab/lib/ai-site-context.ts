import { extractAiSearchQuery } from "@/lib/ai-site-query";

/** Keep in sync with lib/ai-site-search.ts — duplicated so clients never import the search engine. */
export const AI_SITE_SEARCH_LIMIT = 10;
/**
 * Local WebLLM context is ~4096 tokens. Keep Local site hits lean so answers
 * are not cut mid-sentence when Always-search injects materials.
 */
export const AI_SITE_SEARCH_LIMIT_LOCAL = 5;

/** Soft wait for Local AI — do not block first token on a slow site-search round-trip. */
export const AI_SITE_SEARCH_LOCAL_DEADLINE_MS = 280;

type SiteContextResult = {
  context: string;
  note: string;
  hitCount: number;
  hits: Array<{ title: string; href: string; subject?: string }>;
};

type CacheEntry = { at: number; result: SiteContextResult };

const CLIENT_CACHE_TTL_MS = 45_000;
const clientCache = new Map<string, CacheEntry>();
const inflight = new Map<string, Promise<SiteContextResult>>();

const EMPTY: SiteContextResult = {
  context: "",
  note: "",
  hitCount: 0,
  hits: [],
};

/** Append server-fetched site context to a Local AI / client prompt. */
export function appendAiSiteContext(userPrompt: string, context: string): string {
  const trimmed = context.trim();
  if (!trimmed) return userPrompt;
  return `${userPrompt}\n\n${trimmed}`;
}

function cacheKey(searchQuery: string, limit: number): string {
  return `${limit}:${searchQuery.toLowerCase()}`;
}

async function fetchSiteSearchNetwork(
  searchQuery: string,
  limit: number
): Promise<SiteContextResult> {
  const response = await fetch("/api/ai/site-search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: searchQuery, enabled: true, limit }),
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
}

function remember(key: string, result: SiteContextResult): SiteContextResult {
  clientCache.set(key, { at: Date.now(), result });
  return result;
}

/**
 * Client helper: fetch NauWiki Explorer site search context for Local AI prompts.
 * Always searches when a usable query exists.
 *
 * Local callers should pass `deadlineMs` so a slow network search never holds the
 * first streamed token — warm cache / prefetch usually makes this instant.
 */
export async function fetchAiSiteContext(
  query: string,
  enabled = true,
  options?: { limit?: number; deadlineMs?: number }
): Promise<SiteContextResult> {
  // Always search NauWiki Explorer — ignore legacy off switches from older clients.
  void enabled;
  const searchQuery = extractAiSearchQuery(query);
  if (searchQuery.length < 2) {
    return { ...EMPTY, note: "Query too short for site search." };
  }
  const limit = Math.max(1, Math.min(12, options?.limit ?? AI_SITE_SEARCH_LIMIT));
  const key = cacheKey(searchQuery, limit);
  const now = Date.now();
  const cached = clientCache.get(key);
  if (cached && now - cached.at < CLIENT_CACHE_TTL_MS) {
    return cached.result;
  }

  let pending = inflight.get(key);
  if (!pending) {
    pending = fetchSiteSearchNetwork(searchQuery, limit)
      .then((result) => remember(key, result))
      .catch(() => ({ ...EMPTY, note: "Site search unavailable." }))
      .finally(() => {
        inflight.delete(key);
      });
    inflight.set(key, pending);
  }

  const deadline = options?.deadlineMs;
  if (deadline == null || deadline <= 0) {
    return pending;
  }

  // Soft deadline: prefer fresh result; on timeout use stale cache or start without materials.
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const timedOut = new Promise<SiteContextResult>((resolve) => {
    timeoutId = setTimeout(() => {
      if (cached) {
        resolve({
          ...cached.result,
          note:
            cached.result.note ||
            "Using recent site search (fresh search still running).",
        });
        return;
      }
      resolve({
        ...EMPTY,
        note: "Answering now — site search was slow; next question will use cached materials.",
      });
    }, deadline);
  });

  try {
    return await Promise.race([pending, timedOut]);
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

/** Warm the client site-search cache while the student types (Local path). */
export function prefetchAiSiteContext(
  query: string,
  options?: { limit?: number }
): void {
  const searchQuery = extractAiSearchQuery(query);
  if (searchQuery.length < 8) return;
  void fetchAiSiteContext(searchQuery, true, {
    limit: options?.limit ?? AI_SITE_SEARCH_LIMIT_LOCAL,
  });
}
