"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PageRelatedTools from "@/components/PageRelatedTools";
import {
  relatedPackForPath,
  shouldHideRelatedBar,
} from "@/data/site-related-tools";

/**
 * Site-wide related toolbox bar — picks tools by route (AP, English, Code, etc.)
 * and always surfaces Short codes · presets.
 */
export default function SiteRelatedToolsBar() {
  const pathname = usePathname() || "/";
  if (pathname === "/explore/tools-code" || shouldHideRelatedBar(pathname)) return null;

  const pack = relatedPackForPath(pathname);

  return (
    <div className="mt-10 space-y-3 border-t border-slate-200 pt-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Toolbox for this page
        </p>
        <Link
          href="/tools/short-code"
          className="rounded-lg border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-100"
        >
          Short codes · presets →
        </Link>
      </div>
      <PageRelatedTools
        title={pack.title}
        toolIds={pack.toolIds}
        externalIds={pack.externalIds}
      />
    </div>
  );
}
