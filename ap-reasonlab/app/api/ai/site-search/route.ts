import { NextRequest, NextResponse } from "next/server";
import { getGithubTokenFromCookie } from "@/lib/auth";
import { extractAiSearchQuery } from "@/lib/ai-site-query";
import {
  AI_SITE_SEARCH_LIMIT,
  formatAiSiteSearchContext,
  searchKnowledgeExplorerContent,
} from "@/lib/ai-site-search";
import { loadManagedContent, normalizeManagedContent, type ManagedContent } from "@/lib/managed-store";

/**
 * Search Knowledge Explorer study content for AI context.
 * Free of LLM token cost — only reads site data.
 */
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawQuery = String(body.query || body.q || "").trim();
    const query = extractAiSearchQuery(rawQuery);
    // Always search Knowledge Explorer — ignore legacy enabled:false from older clients.
    const limit = Math.min(
      AI_SITE_SEARCH_LIMIT,
      Math.max(1, Number(body.limit) || AI_SITE_SEARCH_LIMIT)
    );

    if (query.length < 2) {
      return NextResponse.json({
        hits: [],
        context: "",
        note: "Query too short.",
        hitCount: 0,
      });
    }
    if (rawQuery.length > 4_000) {
      return NextResponse.json({ error: "Query too long." }, { status: 400 });
    }

    const token = await getGithubTokenFromCookie();
    const managed = slimManagedForSearch(normalizeManagedContent(await loadManagedContent(token)));
    const hits = searchKnowledgeExplorerContent(query, managed, limit);
    const context = formatAiSiteSearchContext(hits);
    return NextResponse.json({
      hits,
      context,
      hitCount: hits.length,
      searchQuery: query,
      note:
        hits.length > 0
          ? `Found ${hits.length} Knowledge Explorer match(es) — AI will use these site materials.`
          : "No matching site content for this question.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Site search failed.", hits: [], context: "", hitCount: 0 },
      { status: 500 }
    );
  }
}
