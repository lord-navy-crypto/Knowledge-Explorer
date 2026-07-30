"use client";

import Link from "next/link";

type Folder = {
  id: string;
  title: string;
  subtitle?: string;
  count?: number;
  href: string;
};

export default function FolderGrid({
  folders,
  emptyText = "No folders yet.",
}: {
  folders: Folder[];
  emptyText?: string;
}) {
  if (folders.length === 0) {
    return <div className="card text-sm text-slate-500">{emptyText}</div>;
  }

  return (
    <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
      {folders.map((f) => (
        <Link key={f.id} href={f.href} className="directory-link relative group">
          <span
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[var(--ke-border)] bg-[var(--ke-surface)] font-display text-[10px] font-semibold uppercase tracking-wide text-[var(--ke-navy)]"
            aria-hidden
          >
            {f.title.slice(0, 2)}
          </span>
          <div className="min-w-0">
            <h2 className="font-display font-semibold text-[var(--ke-ink)] group-hover:text-[var(--ke-navy)]">
              {f.title}
            </h2>
            {f.subtitle && (
              <p className="mt-1 text-sm text-slate-600 line-clamp-2">{f.subtitle}</p>
            )}
            {typeof f.count === "number" && (
              <p className="mt-2 text-xs text-slate-400">{f.count} items</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
