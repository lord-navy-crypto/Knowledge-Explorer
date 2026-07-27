"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import RichContent from "@/components/RichContent";
import type { ManagedContent } from "@/lib/managed-types";
import {
  SITE_SEARCH_TYPE_OPTIONS,
  searchSiteEngine,
  type SiteSearchHit,
} from "@/lib/site-search-engine";

function SearchPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") || "";
  const initialType = searchParams.get("type") || "all";

  const [query, setQuery] = useState(initialQ);
  const [type, setType] = useState(initialType);
  const [managed, setManaged] = useState<Partial<ManagedContent>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/api/edit", { cache: "no-store" });
        const data = (await res.json()) as Partial<ManagedContent>;
        if (!cancelled) setManaged(data);
      } catch {
        /* ignore */
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const q = query.trim();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (type && type !== "all") params.set("type", type);
    const next = params.toString();
    router.replace(next ? `/search?${next}` : "/search", { scroll: false });
  }, [query, type, router]);

  const results = useMemo<SiteSearchHit[]>(() => {
    const needle = query.trim();
    if (needle.length < 2) return [];
    return searchSiteEngine(needle, managed, { type, limit: 100 });
  }, [managed, query, type]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const hit of results) {
      map.set(hit.type, (map.get(hit.type) || 0) + 1);
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [results]);

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <div>
        <h1 className="text-3xl font-bold">Site search engine</h1>
        <p className="mt-2 text-slate-600">
          Search pages, AP subjects, concepts, formulas, practice, guides, English, code, documents,
          files, folders, forum, and more — ranked by relevance.
        </p>
      </div>

      <section className="card grid gap-3 md:grid-cols-[1fr_14rem]">
        <input
          autoFocus
          type="search"
          className="input"
          placeholder="Search the whole site (at least 2 characters)…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          className="input"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          {SITE_SEARCH_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </section>

      {loading ? (
        <p className="text-sm text-slate-500">Loading live site content into the index…</p>
      ) : null}

      {query.trim().length >= 2 ? (
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">
            {results.length} result{results.length === 1 ? "" : "s"}
          </span>
          {counts.slice(0, 8).map(([kind, count]) => (
            <button
              key={kind}
              type="button"
              onClick={() => setType(kind)}
              className={`rounded-full border px-2.5 py-1 ${
                type === kind
                  ? "border-brand-400 bg-brand-50 text-brand-800"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {kind} · {count}
            </button>
          ))}
          {type !== "all" ? (
            <button
              type="button"
              onClick={() => setType("all")}
              className="text-brand-700 hover:underline"
            >
              Clear type filter
            </button>
          ) : null}
        </div>
      ) : (
        <p className="text-sm text-slate-500">
          Tip: try “kinematics”, “TOEFL”, “python”, a subject name, or a file title.
        </p>
      )}

      <section className="space-y-3">
        {results.map((item) => (
          <Link key={`${item.type}-${item.id}`} href={item.href} className="card-hover block">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge">{item.type}</span>
              <span className="text-xs text-slate-500">{item.subject}</span>
              <span className="ml-auto text-[10px] font-medium uppercase tracking-wide text-slate-400">
                score {item.score}
              </span>
            </div>
            <h2 className="mt-2 font-semibold text-slate-900">{item.title}</h2>
            <RichContent clampLines={2} className="mt-1 text-sm text-slate-600">
              {item.detail}
            </RichContent>
            <p className="mt-1 truncate text-[11px] text-brand-700">{item.href}</p>
          </Link>
        ))}
        {query.trim().length >= 2 && results.length === 0 && (
          <div className="card text-sm text-slate-500">No matching content in the site index.</div>
        )}
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="card text-sm text-slate-500">Loading search engine…</div>}>
      <SearchPageInner />
    </Suspense>
  );
}
