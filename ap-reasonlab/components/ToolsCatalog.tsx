"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  STUDY_TOOL_CATEGORIES,
  TOOL_SECURITY_LABELS,
  type StudyTool,
  type StudyToolCategory,
  type ToolSecurity,
} from "@/data/study-tools";
import { readRecentTools, trackToolVisit, type RecentToolEntry } from "@/lib/recent-tools";

function SecurityBadge({ level }: { level?: ToolSecurity }) {
  const key = level || "safe";
  const meta = TOOL_SECURITY_LABELS[key];
  return (
    <span
      className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${meta.className}`}
      title={meta.detail}
    >
      {meta.label}
    </span>
  );
}

export default function ToolsCatalog({ tools }: { tools: StudyTool[] }) {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<StudyToolCategory | "all">("all");
  const [recent, setRecent] = useState<RecentToolEntry[]>([]);

  useEffect(() => {
    setRecent(readRecentTools());
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      if (activeCat !== "all" && tool.category !== activeCat) return false;
      if (!q) return true;
      const hay = [tool.title, tool.blurb, tool.category, tool.badge || ""].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [tools, query, activeCat]);

  const categories = STUDY_TOOL_CATEGORIES.filter((cat) =>
    tools.some((tool) => tool.category === cat.id)
  );

  return (
    <div className="space-y-6">
      <section className="space-y-3 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="block min-w-0 flex-1 text-sm">
            <span className="sr-only">Search tools</span>
            <input
              className="input w-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools by name or topic…"
            />
          </label>
          <p className="text-xs tabular-nums text-slate-500">
            {filtered.length} of {tools.length} tools
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCat("all")}
            className={
              activeCat === "all"
                ? "rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white"
                : "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:border-brand-300"
            }
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCat(cat.id)}
              className={
                activeCat === cat.id
                  ? "rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white"
                  : "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:border-brand-300"
              }
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {recent.length > 0 && !query.trim() && activeCat === "all" ? (
        <section className="space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Recent</h2>
          <div className="flex flex-wrap gap-2">
            {recent.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-100"
              >
                {entry.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center text-sm text-slate-500">
          No tools match. Try another search or category.
        </p>
      ) : (
        STUDY_TOOL_CATEGORIES.map((category) => {
          const items = filtered.filter((tool) => tool.category === category.id);
          if (!items.length) return null;
          if (activeCat !== "all" && activeCat !== category.id) return null;
          return (
            <section key={category.id} id={`tools-${category.id}`} className="scroll-mt-28 space-y-3">
              <div className="flex items-end justify-between gap-3 border-b border-slate-200 pb-2">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {category.label}
                </h2>
                <span className="text-[11px] tabular-nums text-slate-400">{items.length}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((tool) => (
                  <Link
                    key={tool.id}
                    href={tool.href}
                    onClick={() => trackToolVisit(tool.href, tool.title)}
                    className="card-hover group flex min-h-[7.5rem] flex-col touch-manipulation active:scale-[0.99]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700">
                        {tool.title}
                      </h3>
                      <SecurityBadge level={tool.security} />
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{tool.blurb}</p>
                    {tool.badge ? (
                      <p className="mt-2 text-[11px] font-medium text-brand-700">{tool.badge}</p>
                    ) : null}
                  </Link>
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
