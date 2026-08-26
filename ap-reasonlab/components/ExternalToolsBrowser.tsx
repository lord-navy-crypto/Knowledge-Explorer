"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  EXTERNAL_TOOL_CATEGORIES,
  EXTERNAL_TOOLS,
  externalToolsByCategory,
  type ExternalTool,
  type ExternalToolCategory,
} from "@/data/external-tools";

export default function ExternalToolsBrowser() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<ExternalToolCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EXTERNAL_TOOLS.filter((tool) => {
      if (activeCat !== "all" && tool.category !== activeCat) return false;
      if (!q) return true;
      const hay = [tool.name, tool.blurb, tool.tags.join(" "), tool.category].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [query, activeCat]);

  const byCategory = useMemo(() => {
    const map = new Map<ExternalToolCategory, ExternalTool[]>();
    for (const cat of EXTERNAL_TOOL_CATEGORIES) map.set(cat.id, []);
    for (const tool of filtered) {
      const list = map.get(tool.category);
      if (list) list.push(tool);
    }
    return map;
  }, [filtered]);

  const showingAll = activeCat === "all" && !query.trim();

  return (
    <>
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-5 py-7 sm:px-8">
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-indigo-100/60 blur-3xl"
          aria-hidden
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Off-site connections
        </p>
        <h1 className="relative mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          External connections &amp; tools
        </h1>
        <p className="relative mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          Curated outside links that complement Knowledge Explorer — official exam hubs, graphing
          calculators, science simulations, dictionaries, coding docs, and writing helpers. Links
          open in a new tab. Follow your school’s rules on calculators and AI for graded work.
        </p>
        <div className="relative mt-4 flex flex-wrap gap-2">
          <Link href="/tools" className="btn-secondary text-sm">
            ← Built-in toolbox
          </Link>
          <Link href="/hints" className="btn-ghost text-sm">
            AI Toolbox
          </Link>
          <span className="self-center text-xs tabular-nums text-slate-500">
            {EXTERNAL_TOOLS.length} connections
          </span>
        </div>

        <div className="relative mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="block min-w-0 flex-1 text-sm">
            <span className="sr-only">Search connections</span>
            <input
              className="input w-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, tag, or topic…"
            />
          </label>
          <p className="text-xs tabular-nums text-slate-500">
            Showing {filtered.length}
            {filtered.length !== EXTERNAL_TOOLS.length ? ` of ${EXTERNAL_TOOLS.length}` : ""}
          </p>
        </div>
      </section>

      <nav className="flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-white p-3">
        <button
          type="button"
          onClick={() => setActiveCat("all")}
          className={
            activeCat === "all"
              ? "rounded-md bg-brand-600 px-2.5 py-1 text-xs font-semibold text-white"
              : "rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-brand-300 hover:text-brand-700"
          }
        >
          All
        </button>
        {EXTERNAL_TOOL_CATEGORIES.map((cat) => {
          const count = showingAll
            ? externalToolsByCategory(cat.id).length
            : byCategory.get(cat.id)?.length || 0;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCat(cat.id)}
              className={
                activeCat === cat.id
                  ? "rounded-md bg-brand-600 px-2.5 py-1 text-xs font-semibold text-white"
                  : "rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-brand-300 hover:text-brand-700"
              }
            >
              {cat.label}
              <span className="ml-1 tabular-nums opacity-70">{count}</span>
            </button>
          );
        })}
      </nav>

      {!filtered.length ? (
        <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
          No connections match “{query}”. Try another keyword or clear the filter.
        </p>
      ) : activeCat !== "all" ? (
        <section className="space-y-3">
          <div className="border-b border-slate-200 pb-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {EXTERNAL_TOOL_CATEGORIES.find((c) => c.id === activeCat)?.label}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {EXTERNAL_TOOL_CATEGORIES.find((c) => c.id === activeCat)?.detail}
            </p>
          </div>
          <ToolGrid tools={filtered} />
        </section>
      ) : (
        EXTERNAL_TOOL_CATEGORIES.map((category) => {
          const items = byCategory.get(category.id) || [];
          if (!items.length) return null;
          return (
            <section key={category.id} id={category.id} className="scroll-mt-24 space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <div className="flex items-end justify-between gap-3">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {category.label}
                  </h2>
                  <span className="text-[11px] tabular-nums text-slate-400">{items.length}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{category.detail}</p>
              </div>
              <ToolGrid tools={items} />
            </section>
          );
        })
      )}

      <p className="rounded-xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm text-amber-950">
        Knowledge Explorer is not affiliated with these sites. Prefer built-in tools when they
        cover your need; use external links as optional complements.
      </p>
    </>
  );
}

function ToolGrid({ tools }: { tools: ExternalTool[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <a
          key={tool.id}
          href={tool.href}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover group flex min-h-[7.5rem] flex-col"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700">
              {tool.name}
            </h3>
            <span className="shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
              External
            </span>
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{tool.blurb}</p>
          <p className="mt-2 text-[11px] text-slate-400">{tool.tags.join(" · ")}</p>
        </a>
      ))}
    </div>
  );
}
