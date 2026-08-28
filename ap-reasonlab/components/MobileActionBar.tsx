"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEditorMode } from "@/components/EditorModeProvider";

const moreGroups = [
  {
    label: "Knowledge Explorer boxes",
    links: [
      { href: "/", label: "Home" },
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
      { href: "/ap", label: "AP" },
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
      { href: "/manage", label: "Manage content" },
      { href: "/manage-guide", label: "Manage Guide" },
      { href: "/admin", label: "Admin guide" },
      { href: "/login", label: "Editor login" },
    ],
  },
] as const;

export default function MobileActionBar() {
  const pathname = usePathname();
  const { editor } = useEditorMode();
  const [moreOpen, setMoreOpen] = useState(false);
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
    group.links.some(
      (link) => pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`))
    )
  );
  const hintsActive = pathname === "/hints" || pathname.startsWith("/hints/");

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMoreOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [moreOpen]);

  return (
    <>
      {moreOpen && (
        <>
          <button
            type="button"
            aria-label="Close More menu"
            className="fixed inset-0 z-40 bg-slate-950/25 md:hidden"
            onClick={() => setMoreOpen(false)}
          />
          <section
            id="mobile-more-menu"
            aria-label="More navigation"
            className="fixed inset-x-3 z-50 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl md:hidden"
            style={{ bottom: "calc(env(safe-area-inset-bottom) + 4.75rem)" }}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">More</h2>
              <button
                type="button"
                className="rounded-lg px-2 py-1 text-sm text-slate-500 hover:bg-slate-100"
                onClick={() => setMoreOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {visibleMoreGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <nav
        aria-label="Mobile shortcuts"
        className="fixed inset-x-3 z-50 grid grid-cols-4 rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-xl backdrop-blur md:hidden"
        style={{ bottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
      >
        <Link
          href="/"
          className={
            pathname === "/"
              ? "rounded-xl bg-brand-600 px-2 py-2 text-center text-[11px] font-semibold text-white"
              : "rounded-xl px-2 py-2 text-center text-[11px] font-semibold text-slate-700"
          }
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
        <Link
          href="/search"
          className={
            pathname === "/search"
              ? "rounded-xl bg-brand-600 px-2 py-2 text-center text-[11px] font-semibold text-white"
              : "rounded-xl px-2 py-2 text-center text-[11px] font-semibold text-slate-700"
          }
          aria-current={pathname === "/search" ? "page" : undefined}
        >
          Search
        </Link>
        <Link
          href="/hints"
          className={
            hintsActive
              ? "rounded-xl bg-brand-600 px-2 py-2 text-center text-[11px] font-semibold text-white"
              : "rounded-xl px-2 py-2 text-center text-[11px] font-semibold text-slate-700"
          }
          aria-current={hintsActive ? "page" : undefined}
        >
          AI Toolbox
        </Link>
        <button
          type="button"
          className={
            moreOpen || moreActive
              ? "rounded-xl bg-brand-600 px-2 py-2 text-center text-[11px] font-semibold text-white"
              : "rounded-xl px-2 py-2 text-center text-[11px] font-semibold text-slate-700"
          }
          aria-expanded={moreOpen}
          aria-controls="mobile-more-menu"
          onClick={() => setMoreOpen((value) => !value)}
        >
          More
        </button>
      </nav>
    </>
  );
}
