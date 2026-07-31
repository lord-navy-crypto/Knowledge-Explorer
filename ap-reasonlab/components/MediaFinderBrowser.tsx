"use client";

import { useMemo, useState } from "react";
import ResourceEditor from "@/components/ResourceEditor";
import type { ManagedContent, ManagedDocument, ManagedFile } from "@/lib/managed-types";
import { matchesMediaSearch } from "@/lib/media-month-buckets";

type FileRow = {
  kind: "file";
  item: ManagedFile;
  timestamp: number;
  title: string;
  subtitle?: string;
  searchFields: string[];
};

type DocumentRow = {
  kind: "document";
  item: ManagedDocument;
  timestamp: number;
  title: string;
  subtitle?: string;
  searchFields: string[];
};

export type MediaRow = FileRow | DocumentRow;

type Props = {
  sectionTitle: string;
  sectionHint?: string;
  emptyMessage: string;
  rows: MediaRow[];
  variant: "image" | "file" | "document";
  onDownload: (row: MediaRow) => void | Promise<void>;
  editMode?: boolean;
  deletingId?: string | null;
  onDelete?: (row: MediaRow) => void;
  onContentSaved?: (content: ManagedContent) => void;
};

function FileGlyph({ variant }: { variant: "image" | "file" | "document" }) {
  if (variant === "image") {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-sm">
        🖼
      </span>
    );
  }
  if (variant === "document") {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-sm">
        📄
      </span>
    );
  }
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sm">
      📎
    </span>
  );
}

function ImageThumb({ file }: { file: ManagedFile }) {
  if (file.dataUrl?.startsWith("data:image")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={file.dataUrl}
        alt=""
        className="h-10 w-10 shrink-0 rounded-md object-cover"
        loading="lazy"
      />
    );
  }
  return <FileGlyph variant="image" />;
}

/**
 * Simple vertical file column — one type per column (images / files / documents).
 * Newest first, search filter, no month-folder abstraction.
 */
export default function MediaFinderBrowser({
  sectionTitle,
  sectionHint,
  emptyMessage,
  rows,
  variant,
  onDownload,
  editMode = false,
  deletingId = null,
  onDelete,
  onContentSaved,
}: Props) {
  const [search, setSearch] = useState("");

  const sortedRows = useMemo(
    () => [...rows].sort((a, b) => b.timestamp - a.timestamp),
    [rows]
  );

  const visibleRows = useMemo(() => {
    if (!search.trim()) return sortedRows;
    return sortedRows.filter((row) => matchesMediaSearch(search, row.searchFields));
  }, [sortedRows, search]);

  function renderRowActions(row: MediaRow) {
    return (
      <div className="flex shrink-0 flex-wrap items-center justify-end gap-1">
        <button
          type="button"
          onClick={() => void onDownload(row)}
          className="rounded-md bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white hover:bg-slate-800"
        >
          Download
        </button>
        {editMode && row.kind === "file" ? (
          <>
            <ResourceEditor
              target="file"
              item={row.item}
              label="Edit"
              onSaved={(content) => {
                if (content) onContentSaved?.(content as ManagedContent);
              }}
            />
            <button
              type="button"
              title="Delete"
              disabled={deletingId === row.item.id}
              onClick={() => onDelete?.(row)}
              className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-red-600 hover:bg-red-50"
            >
              −
            </button>
          </>
        ) : null}
        {editMode && row.kind === "document" ? (
          <>
            <ResourceEditor
              target="document"
              item={row.item}
              onSaved={(content) => {
                if (content) onContentSaved?.(content as ManagedContent);
              }}
            />
            <button
              type="button"
              title="Delete"
              disabled={deletingId === row.item.id}
              onClick={() => onDelete?.(row)}
              className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-red-600 hover:bg-red-50"
            >
              −
            </button>
          </>
        ) : null}
      </div>
    );
  }

  return (
    <section className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="shrink-0 space-y-2 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {sectionTitle}
          </h3>
          {sectionHint ? <p className="text-[11px] text-slate-400">{sectionHint}</p> : null}
          <p className="text-[11px] text-slate-500">
            {visibleRows.length} item{visibleRows.length === 1 ? "" : "s"}
            {search.trim() ? " · filtered" : " · newest first"}
          </p>
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${variant === "image" ? "images" : variant === "document" ? "documents" : "files"}…`}
          className="input w-full text-xs"
          aria-label={`Search ${sectionTitle}`}
        />
      </div>

      <div className="min-h-[14rem] max-h-[min(28rem,55vh)] flex-1 overflow-y-auto overscroll-contain">
        {rows.length === 0 ? (
          <p className="px-3 py-8 text-center text-sm text-slate-500">{emptyMessage}</p>
        ) : visibleRows.length === 0 ? (
          <p className="px-3 py-8 text-center text-sm text-slate-500">No matches.</p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {visibleRows.map((row) => (
              <li
                key={row.item.id}
                className="flex flex-col gap-2 px-2.5 py-2.5 hover:bg-slate-50 sm:flex-row sm:items-center"
              >
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  {variant === "image" && row.kind === "file" ? (
                    <ImageThumb file={row.item} />
                  ) : (
                    <FileGlyph variant={variant} />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-900" title={row.title}>
                      {row.title}
                    </p>
                    {row.subtitle ? (
                      <p className="truncate text-[11px] text-slate-500">{row.subtitle}</p>
                    ) : null}
                  </div>
                </div>
                {renderRowActions(row)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
