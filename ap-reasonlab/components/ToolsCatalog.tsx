"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  STUDY_TOOL_CATEGORIES,
  TOOL_SECURITY_LABELS,
  type StudyTool,
  type StudyToolCategory,
  type ToolSecurity,
} from "@/data/study-tools";
import {
  isPinnedTool,
  readPinnedToolIds,
  togglePinnedTool,
} from "@/lib/pinned-tools";
import { readRecentTools, trackToolboxVisit, type RecentToolEntry } from "@/lib/recent-tools";
import { toolSearchHaystack } from "@/lib/toolbox-search";

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

function PinButton({ id, pinned, onToggle }: { id: string; pinned: boolean; onToggle: (id: string) => void }) {
  return (
    <button
      type="button"
      aria-label={pinned ? "Unpin tool" : "Pin tool"}
      className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-amber-600"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle(id);
      }}
    >
      {pinned ? "★" : "☆"}
    </button>
  );
}

export default function ToolsCatalog({ tools }: { tools: StudyTool[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<StudyToolCategory | "all">("all");
  const [activeSecurity, setActiveSecurity] = useState<ToolSecurity | "all">("all");
  const [recent, setRecent] = useState<RecentToolEntry[]>([]);
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
    const cat = searchParams.get("cat");
    const validCat = STUDY_TOOL_CATEGORIES.some((c) => c.id === cat);
    setActiveCat(validCat && cat ? (cat as StudyToolCategory) : "all");
    const sec = searchParams.get("sec");
    const validSec = sec && sec in TOOL_SECURITY_LABELS;
    setActiveSecurity(validSec ? (sec as ToolSecurity) : "all");
    setRecent(readRecentTools().filter((e) => e.href.startsWith("/tools/")));
    setPinnedIds(readPinnedToolIds());
  }, [searchParams]);

  const syncUrl = useCallback(
    (next: { q?: string; cat?: StudyToolCategory | "all"; sec?: ToolSecurity | "all" }) => {
      const params = new URLSearchParams(searchParams.toString());
      const q = next.q !== undefined ? next.q : query;
      const cat = next.cat !== undefined ? next.cat : activeCat;
      const sec = next.sec !== undefined ? next.sec : activeSecurity;
      if (q.trim()) params.set("q", q.trim());
      else params.delete("q");
      if (cat !== "all") params.set("cat", cat);
      else params.delete("cat");
      if (sec !== "all") params.set("sec", sec);
      else params.delete("sec");
      const qs = params.toString();
      router.replace(qs ? `/tools?${qs}` : "/tools", { scroll: false });
    },
    [searchParams, query, activeCat, activeSecurity, router]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      if (activeCat !== "all" && tool.category !== activeCat) return false;
      const sec = tool.security || "safe";
      if (activeSecurity !== "all" && sec !== activeSecurity) return false;
      if (!q) return true;
      const hay = toolSearchHaystack(tool).toLowerCase();
      return q.split(/\s+/).every((token) => hay.includes(token));
    });
  }, [tools, query, activeCat, activeSecurity]);

  const pinnedTools = useMemo(
    () =>
      pinnedIds
        .map((id) => tools.find((t) => t.id === id))
        .filter((t): t is StudyTool => Boolean(t)),
    [pinnedIds, tools]
  );

  const categories = STUDY_TOOL_CATEGORIES.filter((cat) =>
    tools.some((tool) => tool.category === cat.id)
  );

  const securityLevels = (Object.keys(TOOL_SECURITY_LABELS) as ToolSecurity[]).filter((key) =>
    tools.some((tool) => (tool.security || "safe") === key)
  );

  function handlePinToggle(id: string) {
    setPinnedIds(togglePinnedTool(id));
  }

  const showShortcuts = !query.trim() && activeCat === "all" && activeSecurity === "all";

  return (
    <div className="space-y-6">
      <section className="space-y-3 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="block min-w-0 flex-1 text-sm">
            <span className="sr-only">Search tools</span>
            <input
              className="input w-full"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                syncUrl({ q: e.target.value });
              }}
              placeholder="Search tools, aliases, workflows… (json, base64, pdf, timer)"
            />
          </label>
          <p className="text-xs tabular-nums text-slate-500">
            {filtered.length} of {tools.length} tools
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveCat("all");
              syncUrl({ cat: "all" });
            }}
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
              onClick={() => {
                setActiveCat(cat.id);
                syncUrl({ cat: cat.id });
              }}
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
        <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-3">
          <span className="self-center text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Security
          </span>
          <button
            type="button"
            onClick={() => {
              setActiveSecurity("all");
              syncUrl({ sec: "all" });
            }}
            className={
              activeSecurity === "all"
                ? "rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-white"
                : "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            }
          >
            Any
          </button>
          {securityLevels.map((key) => {
            const meta = TOOL_SECURITY_LABELS[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setActiveSecurity(key);
                  syncUrl({ sec: key });
                }}
                className={
                  activeSecurity === key
                    ? `rounded-full px-3 py-1 text-xs font-semibold ${meta.className}`
                    : "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                }
                title={meta.detail}
              >
                {meta.label}
              </button>
            );
          })}
        </div>
      </section>

      {showShortcuts && pinnedTools.length > 0 ? (
        <section className="space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-700">Pinned</h2>
          <div className="flex flex-wrap gap-2">
            {pinnedTools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                onClick={() => trackToolboxVisit(tool.href, tool.title)}
                className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-950 hover:bg-amber-100"
              >
                ★ {tool.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {showShortcuts && recent.length > 0 ? (
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
          No tools match. Try aliases like json, base64, pretty, pdf, pomodoro, or a workflow name.
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
                    onClick={() => trackToolboxVisit(tool.href, tool.title)}
                    className="card-hover group relative flex min-h-[7.5rem] flex-col touch-manipulation active:scale-[0.99]"
                  >
                    <div className="absolute right-2 top-2">
                      <PinButton
                        id={tool.id}
                        pinned={isPinnedTool(tool.id) || pinnedIds.includes(tool.id)}
                        onToggle={handlePinToggle}
                      />
                    </div>
                    <div className="flex items-start justify-between gap-2 pr-8">
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
