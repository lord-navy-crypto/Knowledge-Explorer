import { NextRequest, NextResponse } from "next/server";
import { extractAiSearchQuery } from "@/lib/ai-site-query";
import { AI_SITE_SEARCH_LIMIT } from "@/lib/ai-site-search";
import { runServerAiSiteSearch } from "@/lib/ai-site-context-server";

/**
 * Search Liji Explore study content for AI context.
 * Free of LLM token cost — only reads site data (45s managed-content cache).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawQuery = String(body.query || body.q || "").trim();
    const query = extractAiSearchQuery(rawQuery);
    // Always search Liji Explore — ignore legacy enabled:false from older clients.
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

    const result = await runServerAiSiteSearch(query, limit);
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Site search failed.", hits: [], context: "", hitCount: 0 },
      { status: 500 }
    );
  }
}
