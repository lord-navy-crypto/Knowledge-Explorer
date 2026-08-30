"use client";

import { Suspense, useDeferredValue, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import RichContent from "@/components/RichContent";

type SearchHit = {
  id: string;
  type: string;
  title: string;
  subject: string;
  detail: string;
  href: string;
  score?: number;
};

const TYPE_OPTIONS = [
  ["all", "All types"], ["page", "Pages"], ["tool", "Tools"], ["subject", "AP subjects"],
  ["concept", "Concepts"], ["formula", "Formulas"], ["practice", "Practice"], ["guide", "Guides"],
  ["document", "Documents"], ["file", "Files"], ["folder", "Folders"], ["english", "English"],
  ["code", "Code"], ["forum", "Forum"], ["member", "Members"], ["learning", "Learning tips"],
  ["checklist", "Checklist"],
] as const;

function SearchPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") || "";
  const initialType = searchParams.get("type") || "all";
  const showScores = searchParams.get("debug") === "1";
  const [query, setQuery] = useState(initialQ);
  const [type, setType] = useState(initialType);
  const [results, setResults] = useState<SearchHit[]>([]);
  const [counts, setCounts] = useState<Array<[string, number]>>([]);
  const [loading, setLoading] = useState(false);
  const deferredQuery = useDeferredValue(query.trim());

  useEffect(() => {
    const handle = window.setTimeout(() => {
      const q = query.trim();
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (type && type !== "all") params.set("type", type);
      if (showScores) params.set("debug", "1");
      const next = params.toString();
      const target = next ? `/search?${next}` : "/search";
      const current = `${window.location.pathname}${window.location.search}`;
      if (current !== target) router.replace(target, { scroll: false });
    }, 250);
    return () => window.clearTimeout(handle);
  }, [query, type, router, showScores]);

  useEffect(() => {
    if (deferredQuery.length < 2) {
      setResults([]);
      setCounts([]);
      setLoading(false);
      return;
    }
    const controller = new AbortController();
    const handle = window.setTimeout(async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({ q: deferredQuery, type });
        if (showScores) params.set("debug", "1");
        const res = await fetch(`/api/site-search?${params.toString()}`, {
          cache: "no-store",
          signal: controller.signal,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Search failed");
        setResults(Array.isArray(data.hits) ? data.hits : []);
        setCounts(Array.isArray(data.counts) ? data.counts : []);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setResults([]);
          setCounts([]);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 120);
    return () => {
      window.clearTimeout(handle);
      controller.abort();
    };
  }, [deferredQuery, type, showScores]);

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <div>
        <h1 className="text-3xl font-bold">Site search engine</h1>
        <p className="mt-2 text-slate-600">
          Search Convenient Tools, Code playgrounds, Forum threads, AP subjects, English, and more.
          The full site index now stays on the server, so opening Search no longer downloads it first.
        </p>
      </div>

      <section className="card grid gap-3 md:grid-cols-[1fr_14rem]">
        <input autoFocus type="search" className="input" placeholder="json pretty, python playground, kinematics…" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
          {TYPE_OPTIONS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </section>

      {loading ? <p className="text-sm text-slate-500">Searching the site index…</p> : null}

      {deferredQuery.length >= 2 ? (
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">{results.length} result{results.length === 1 ? "" : "s"}</span>
          {counts.slice(0, 8).map(([kind, count]) => (
            <button key={kind} type="button" onClick={() => setType(kind)} className={`rounded-full border px-2.5 py-1 ${type === kind ? "border-brand-400 bg-brand-50 text-brand-800" : "border-slate-200 bg-white hover:border-slate-300"}`}>
              {kind} · {count}
            </button>
          ))}
          {type !== "all" ? <button type="button" onClick={() => setType("all")} className="text-brand-700 hover:underline">Clear type filter</button> : null}
        </div>
      ) : (
        <p className="text-sm text-slate-500">Tip: try “json pretty”, “python playground”, “TOEFL”, or a subject name.</p>
      )}

      <section className="space-y-3">
        {results.map((item) => (
          <Link key={`${item.type}-${item.id}`} href={item.href} className="card-hover block">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge">{item.type}</span><span className="text-xs text-slate-500">{item.subject}</span>
              {showScores && typeof item.score === "number" ? <span className="ml-auto text-[10px] font-medium uppercase tracking-wide text-slate-400">score {item.score}</span> : null}
            </div>
            <h2 className="mt-2 font-semibold text-slate-900">{item.title}</h2>
            <RichContent clampLines={2} className="mt-1 text-sm text-slate-600">{item.detail}</RichContent>
            <p className="mt-1 truncate text-[11px] text-brand-700">{item.href}</p>
          </Link>
        ))}
        {!loading && deferredQuery.length >= 2 && results.length === 0 ? (
          <div className="card space-y-2 text-sm text-slate-600">
            <p>No matching content in the site index.</p>
            <p className="text-slate-500">Try a shorter query, clear the type filter, or browse AP / AI Toolbox / Tools & Code.</p>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default function SearchPage() {
  return <Suspense fallback={<div className="card text-sm text-slate-500">Loading search…</div>}><SearchPageInner /></Suspense>;
}
