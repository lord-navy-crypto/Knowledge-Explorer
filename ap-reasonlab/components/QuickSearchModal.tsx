"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchSiteEngine, type SiteSearchHit } from "@/lib/site-search-engine";
import type { ManagedContent } from "@/lib/managed-types";

type QuickSearchContextValue = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const QuickSearchContext = createContext<QuickSearchContextValue | null>(null);

export function useQuickSearch() {
  const ctx = useContext(QuickSearchContext);
  if (!ctx) throw new Error("useQuickSearch must be used within QuickSearchProvider");
  return ctx;
}

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function QuickSearchModal({ open, onClose }: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [managed, setManaged] = useState<Partial<ManagedContent>>({});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActiveIndex(0);
    const handle = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(handle);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/api/edit", { cache: "no-store", credentials: "include" });
        if (!res.ok) return;
        const data = (await res.json()) as Partial<ManagedContent>;
        if (!cancelled) setManaged(data);
      } catch {
        /* static corpus only */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open]);

  const hits = useMemo<SiteSearchHit[]>(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    return searchSiteEngine(q, managed, { limit: 8 });
  }, [query, managed]);

  const goToSearch = useCallback(
    (q: string) => {
      onClose();
      const trimmed = q.trim();
      router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
    },
    [onClose, router]
  );

  const openHit = useCallback(
    (hit: SiteSearchHit) => {
      onClose();
      router.push(hit.href);
    },
    [onClose, router]
  );

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, Math.max(0, hits.length - 1)));
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        const hit = hits[activeIndex];
        if (hit) openHit(hit);
        else goToSearch(query);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, hits, activeIndex, query, onClose, openHit, goToSearch]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]">
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Quick search"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
          <span className="text-slate-400" aria-hidden="true">
            ⌕
          </span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="json pretty, python playground, my box…"
            className="flex-1 bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="hidden rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 sm:inline">
            esc
          </kbd>
        </div>

        {query.trim().length < 2 ? (
          <p className="px-4 py-6 text-sm text-slate-500">
            Type at least 2 characters. Try <strong>json pretty</strong>, <strong>python playground</strong>,{" "}
            <strong>my box</strong>, or <strong>TOEFL</strong>.
          </p>
        ) : hits.length === 0 ? (
          <div className="px-4 py-6">
            <p className="text-sm text-slate-500">No quick matches.</p>
            <button
              type="button"
              className="mt-2 text-sm font-semibold text-brand-600 hover:underline"
              onClick={() => goToSearch(query)}
            >
              Search all results for &ldquo;{query.trim()}&rdquo;
            </button>
          </div>
        ) : (
          <ul className="max-h-[min(60vh,420px)] overflow-y-auto py-2" role="listbox">
            {hits.map((hit, index) => (
              <li key={`${hit.type}:${hit.id}`}>
                <button
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  className={
                    index === activeIndex
                      ? "flex w-full flex-col gap-0.5 px-4 py-2.5 text-left bg-brand-50"
                      : "flex w-full flex-col gap-0.5 px-4 py-2.5 text-left hover:bg-slate-50"
                  }
                  onClick={() => openHit(hit)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span className="text-sm font-semibold text-slate-900">{hit.title}</span>
                  <span className="text-xs text-slate-500">
                    {hit.subject} · {hit.type}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2 text-xs text-slate-400">
          <span>
            <kbd className="rounded border border-slate-200 px-1">↑↓</kbd> navigate ·{" "}
            <kbd className="rounded border border-slate-200 px-1">↵</kbd> open
          </span>
          <Link
            href={query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : "/search"}
            className="font-medium text-brand-600 hover:underline"
            onClick={onClose}
          >
            Full search
          </Link>
        </div>
      </div>
    </div>
  );
}

export function QuickSearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo<QuickSearchContextValue>(
    () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen((v) => !v),
    }),
    []
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isK = event.key.toLowerCase() === "k";
      if (!isK || !(event.metaKey || event.ctrlKey)) return;
      const tag = (event.target as HTMLElement | null)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      event.preventDefault();
      value.toggle();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [value]);

  return (
    <QuickSearchContext.Provider value={value}>
      {children}
      <QuickSearchModal open={open} onClose={() => setOpen(false)} />
    </QuickSearchContext.Provider>
  );
}
