"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/data/brand";
import { useEditorMode } from "@/components/EditorModeProvider";
import { useQuickSearch } from "@/components/QuickSearchModal";

/** Slim top bar: AI Toolbox + Search always visible; everything else under More. */
const primaryLinks = [
  { href: "/hints", label: "AI Toolbox" },
  { href: "/search", label: "Search" },
];

const moreGroups = [
  {
    label: "Knowledge Explorer boxes",
    links: [
      { href: "/", label: "Home" },
      { href: "/explore", label: "Explore" },
      { href: "/explore/ap-english", label: "AP & English" },
      { href: "/explore/tools-code", label: "Convenient Tools & Code" },
      { href: "/explore/workshops", label: "Simulation & Download" },
      { href: "/explore/simulation-workshop", label: "Simulation Workshop" },
      { href: "/explore/download", label: "Download" },
      { href: "/forum", label: "Forum" },
    ],
  },
  {
    label: "Quick links",
    links: [
      { href: "/ap", label: "AP subjects" },
      { href: "/english", label: "English" },
      { href: "/tools", label: "Convenient Tools" },
      { href: "/code", label: "Code" },
      { href: "/search", label: "Search" },
      { href: "/user-guide", label: "User Guide" },
      { href: "/about", label: "About" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    label: "Admin & developer",
    links: [
      { href: "/login", label: "Editor login" },
      { href: "/manage", label: "Manage content" },
      { href: "/manage-guide", label: "Manage Guide" },
      { href: "/admin", label: "Admin guide" },
    ],
  },
] as const;

function linkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const { editor } = useEditorMode();
  const { open: openQuickSearch } = useQuickSearch();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    function onPointerDown(event: MouseEvent) {
      if (!moreRef.current?.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMoreOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [moreOpen]);

  const visibleMoreGroups = moreGroups
    .map((group) => {
      if (group.label === "Admin & developer") {
        if (!editor) {
          return {
            label: "Editors",
            links: [{ href: "/login", label: "Editor login" }],
          };
        }
        return {
          ...group,
          links: [...group.links, { href: "/ai-developer", label: "AI Developer" }],
        };
      }
      return group;
    });
  const moreActive = visibleMoreGroups.some((group) =>
    group.links.some((link) => linkIsActive(pathname, link.href))
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--ke-border)] bg-[rgba(255,252,247,0.92)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded border border-[var(--ke-border-strong)] bg-[var(--ke-navy)] font-display text-[11px] font-bold tracking-wide text-[#f7f4ee]">
            {brand.shortName}
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-[var(--ke-ink)]">
            {brand.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <button
            type="button"
            className="btn-ghost hidden px-3 sm:inline-flex"
            onClick={openQuickSearch}
            aria-label="Open quick search (Ctrl+K or Cmd+K)"
          >
            <span className="flex items-center gap-2">
              Quick search
              <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                ⌘K
              </kbd>
            </span>
          </button>
          {primaryLinks.map((link) => {
            const active = linkIsActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "inline-flex items-center justify-center rounded-xl bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700"
                    : "btn-ghost px-3"
                }
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="relative" ref={moreRef}>
            <button
              type="button"
              className={
                moreOpen || moreActive
                  ? "inline-flex items-center justify-center rounded-xl bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700"
                  : "btn-ghost px-3"
              }
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              onClick={() => setMoreOpen((value) => !value)}
            >
              More
            </button>
            {moreOpen && (
              <div
                role="menu"
                className="absolute right-0 z-50 mt-2 min-w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
              >
                {visibleMoreGroups.map((group, index) => (
                  <div
                    key={group.label}
                    className={index > 0 ? "mt-2 border-t border-slate-100 pt-2" : undefined}
                  >
                    <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {group.label}
                    </p>
                    {group.links.map((link) => {
                      const active = linkIsActive(pathname, link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          role="menuitem"
                          className={
                            active
                              ? "block rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700"
                              : "block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                          }
                          aria-current={active ? "page" : undefined}
                          onClick={() => setMoreOpen(false)}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
