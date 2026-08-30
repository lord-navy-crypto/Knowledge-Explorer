import { NextRequest, NextResponse } from "next/server";
import { getGithubTokenFromCookie } from "@/lib/auth";
import { loadManagedContent, normalizeManagedContent } from "@/lib/managed-store";
import { searchSiteEngine } from "@/lib/site-search-engine";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const query = String(req.nextUrl.searchParams.get("q") || "").trim();
  const type = String(req.nextUrl.searchParams.get("type") || "all").trim();
  const debug = req.nextUrl.searchParams.get("debug") === "1";

  if (query.length < 2) {
    return NextResponse.json({ hits: [], counts: [] });
  }
  if (query.length > 4000) {
    return NextResponse.json({ error: "Query too long.", hits: [], counts: [] }, { status: 400 });
  }

  try {
    const token = await getGithubTokenFromCookie();
    const managed = normalizeManagedContent(await loadManagedContent(token));
    const hits = searchSiteEngine(query, managed, { type, limit: 100 }).map((hit) =>
      debug ? hit : { ...hit, score: undefined }
    );
    const countMap = new Map<string, number>();
    for (const hit of hits) countMap.set(hit.type, (countMap.get(hit.type) || 0) + 1);
    const counts = [...countMap.entries()].sort((a, b) => b[1] - a[1]);
    return NextResponse.json({ hits, counts });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Search failed.", hits: [], counts: [] }, { status: 500 });
  }
}
