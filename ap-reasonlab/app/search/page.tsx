"use client";

import { Suspense, useDeferredValue, useEffect, useMemo, useState } from "react";
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
  const showScores = searchParams.get("debug") === "1";

  const [query, setQuery] = useState(initialQ);
  const [type, setType] = useState(initialType);
  const [managed, setManaged] = useState<Partial<ManagedContent>>({});
  const [loading, setLoading] = useState(true);
  const deferredQuery = useDeferredValue(query.trim());

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/api/edit", { cache: "no-store", credentials: "include" });
        if (!res.ok) return;
        const data = (await res.json()) as Partial<ManagedContent>;
        if (!cancelled) setManaged(data);
      } catch {
        /* ignore — keep empty managed index */
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Debounce URL sync so typing does not thrash the router on every keystroke.
  useEffect(() => {
    const handle = window.setTimeout(() => {
      const q = query.trim();
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (type && type !== "all") params.set("type", type);
      const next = params.toString();
      const target = next ? `/search?${next}` : "/search";
      const current = `${window.location.pathname}${window.location.search}`;
      if (current !== target) {
        router.replace(target, { scroll: false });
      }
    }, 250);
    return () => window.clearTimeout(handle);
  }, [query, type, router]);

  const results = useMemo<SiteSearchHit[]>(() => {
    if (deferredQuery.length < 2) return [];
    return searchSiteEngine(deferredQuery, managed, { type, limit: 100 });
  }, [managed, deferredQuery, type]);

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
          Search Convenient Tools, Code playgrounds, Forum threads, AP subjects, English, and more.
          Tool, code, and forum queries are ranked higher when the words match those lanes.
        </p>
      </div>

      <section className="card grid gap-3 md:grid-cols-[1fr_14rem]">
        <input
          autoFocus
          type="search"
          className="input"
          placeholder="json pretty, python playground, my box, kinematics…"
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

      {deferredQuery.length >= 2 ? (
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
          Tip: try “json pretty”, “python playground”, “my box”, “TOEFL”, or a subject name.
        </p>
      )}

      <section className="space-y-3">
        {results.map((item) => (
          <Link key={`${item.type}-${item.id}`} href={item.href} className="card-hover block">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge">{item.type}</span>
              <span className="text-xs text-slate-500">{item.subject}</span>
              {showScores ? (
                <span className="ml-auto text-[10px] font-medium uppercase tracking-wide text-slate-400">
                  score {item.score}
                </span>
              ) : null}
            </div>
            <h2 className="mt-2 font-semibold text-slate-900">{item.title}</h2>
            <RichContent clampLines={2} className="mt-1 text-sm text-slate-600">
              {item.detail}
            </RichContent>
            <p className="mt-1 truncate text-[11px] text-brand-700">{item.href}</p>
          </Link>
        ))}
        {deferredQuery.length >= 2 && results.length === 0 && (
          <div className="card space-y-3 text-sm text-slate-600">
            <p>No matching content in the site index.</p>
            <p className="text-slate-500">Try a shorter query, clear the type filter, or browse:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Link href="/user-guide" className="font-medium text-brand-700 hover:underline">
                  User Guide
                </Link>{" "}
                — full site tour
              </li>
              <li>
                <Link href="/hints" className="font-medium text-brand-700 hover:underline">
                  AI Toolbox
                </Link>{" "}
                — AP / English / Coding help
              </li>
              <li>
                <Link href="/tools" className="font-medium text-brand-700 hover:underline">
                  Convenient Tools
                </Link>{" "}
                — JSON, Base64, PDF, timers, write/convert
              </li>
              <li>
                <Link href="/code" className="font-medium text-brand-700 hover:underline">
                  Code playgrounds
                </Link>{" "}
                — Python, JavaScript, SQL, Java, C#
              </li>
              <li>
                <Link href="/forum" className="font-medium text-brand-700 hover:underline">
                  Forum
                </Link>{" "}
                — discussions, shared library, My box
              </li>
            </ul>
            <p className="text-xs text-slate-400">
              Examples: json pretty, python playground, my box, kinematics, TOEFL reading
            </p>
          </div>
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
