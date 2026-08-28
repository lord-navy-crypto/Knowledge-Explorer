"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readRecentTools, type RecentToolEntry } from "@/lib/recent-tools";

export default function RecentPlaygrounds() {
  const [recent, setRecent] = useState<RecentToolEntry[]>([]);

  useEffect(() => {
    setRecent(readRecentTools().filter((e) => e.href.startsWith("/code/")));
  }, []);

  if (!recent.length) return null;

  return (
    <section className="space-y-2 rounded-xl border border-emerald-200 bg-emerald-50/50 px-4 py-3">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Recent playgrounds</h2>
      <div className="flex flex-wrap gap-2">
        {recent.map((entry) => (
          <Link
            key={entry.href}
            href={entry.href}
            className="rounded-full border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-900 hover:bg-emerald-100"
          >
            {entry.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
