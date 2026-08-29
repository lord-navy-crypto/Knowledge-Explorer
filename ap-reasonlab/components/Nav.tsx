"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/data/brand";
import { useEditorMode } from "@/components/EditorModeProvider";
import { useQuickSearch } from "@/components/QuickSearchModal";

const primaryLinks = [
  { href: "/hints", label: "AI Toolbox" },
  { href: "/forum", label: "Forum" },
  { href: "/manage", label: "Manage" },
];

const mobileQuickLinks = [
  { href: "/forum", label: "Forum" },
  { href: "/ap", label: "AP" },
  { href: "/english", label: "English" },
  { href: "/hints", label: "AI" },
  { href: "/manage", label: "Manage" },
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
      { href: "/explore/sentinel", label: "Sentinel Mac" },
    ],
  },
  {
    label: "Quick links",
    links: [
      { href: "/ap", label: "AP subjects" },
      { href: "/english", label: "English" },
      { href: "/practice", label: "Practice" },
      { href: "/explore/tools-code", label: "Convenient Tools" },
      { href: "/code", label: "Code" },
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

function linkClass(active: boolean, compact?: boolean) {
  if (active) {
    return compact
      ? "inline-flex shrink-0 items-center rounded-lg bg-brand-50 px-2.5 py-1.5 text-xs font-semibold text-brand-700"
      : "inline-flex items-center justify-center rounded-xl bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700";
  }
  return compact
    ? "inline-flex shrink-0 items-center rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
    : "btn-ghost px-3";
}

export default function Nav() {
  const pathname = usePathname();
  const stopPrefetch = pathname === "/explore/tools-code";
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

  const visibleMoreGroups = moreGroups.map((group) => {
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
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            prefetch={stopPrefetch ? false : undefined}
            className="flex min-w-0 shrink-0 items-center gap-2.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded border border-[var(--ke-border-strong)] bg-[var(--ke-navy)] font-display text-[11px] font-bold tracking-wide text-[#f7f4ee]">
              {brand.shortName}
            </span>
            <span className="truncate font-display text-lg font-semibold tracking-tight text-[var(--ke-ink)] md:max-w-none">
              {brand.name}
            </span>
          </Link>

          <nav className="flex items-center gap-1" aria-label="Primary">
            <button
              type="button"
              className="btn-ghost px-2 text-xs sm:px-3 sm:text-sm"
              onClick={openQuickSearch}
              aria-label="Open quick search (Ctrl+K or Cmd+K)"
            >
              <span className="hidden items-center gap-2 sm:flex">
                Quick search
                <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                  ⌘K
                </kbd>
              </span>
              <span className="sm:hidden">Search</span>
            </button>

            {primaryLinks.map((link) => {
              const active = linkIsActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={stopPrefetch ? false : undefined}
                  className={`hidden md:inline-flex ${linkClass(active)}`}
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
                    ? "inline-flex items-center rounded-lg bg-brand-50 px-2.5 py-1.5 text-xs font-semibold text-brand-700 md:rounded-xl md:px-3 md:py-2 md:text-sm"
                    : "btn-ghost px-2.5 text-xs md:px-3 md:text-sm"
                }
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                onClick={() => setMoreOpen((value) => !value)}
              >
                <span className="md:hidden">Menu</span>
                <span className="hidden md:inline">More</span>
              </button>
              {moreOpen && (
                <div
                  role="menu"
                  className="absolute right-0 z-50 mt-2 max-h-[70vh] min-w-56 overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
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
                        const className =
                          active
                            ? "block rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700"
                            : "block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50";

                        if (link.href === "/explore/tools-code") {
                          return (
                            <a
                              key={`${group.label}-${link.label}`}
                              href={link.href}
                              role="menuitem"
                              className={className}
                              aria-current={active ? "page" : undefined}
                              onClick={() => setMoreOpen(false)}
                            >
                              {link.label}
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={`${group.label}-${link.label}`}
                            href={link.href}
                            prefetch={stopPrefetch ? false : undefined}
                            role="menuitem"
                            className={className}
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

        <nav
          className="-mx-1 mt-2 flex gap-1 overflow-x-auto pb-1 md:hidden"
          aria-label="Mobile quick links"
        >
          {mobileQuickLinks.map((link) => {
            const active = linkIsActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={stopPrefetch ? false : undefined}
                className={linkClass(active, true)}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
