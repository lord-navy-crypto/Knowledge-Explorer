"use client";

import { useMemo, useState } from "react";
import ResourceEditor from "@/components/ResourceEditor";
import type { ManagedContent, ManagedDocument, ManagedFile } from "@/lib/managed-types";
import {
  groupByMonth,
  matchesMediaSearch,
  type MonthBucket,
} from "@/lib/media-month-buckets";

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

function FolderIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative flex h-11 w-11 shrink-0 items-end justify-center pb-1 ${className}`}
      aria-hidden
    >
      <span className="absolute left-2 top-2 h-2.5 w-5 rounded-t-sm bg-amber-300" />
      <span className="h-7 w-10 rounded-md bg-gradient-to-b from-amber-300 to-amber-500 shadow-sm" />
    </span>
  );
}

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
        className="h-14 w-full rounded-md object-cover"
        loading="lazy"
      />
    );
  }
  return (
    <div className="flex h-14 w-full items-center justify-center rounded-md bg-rose-50 text-lg">
      🖼
    </div>
  );
}

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
  const [activeMonth, setActiveMonth] = useState<string | null>(null);

  const filteredRows = useMemo(() => {
    if (!search.trim()) return rows;
    return rows.filter((row) => matchesMediaSearch(search, row.searchFields));
  }, [rows, search]);

  const buckets = useMemo(
    () => groupByMonth(filteredRows, (row) => row.timestamp),
    [filteredRows]
  );

  const activeBucket = useMemo(
    () => buckets.find((b) => b.key === activeMonth) || null,
    [activeMonth, buckets]
  );

  const visibleRows = useMemo(() => {
    if (search.trim()) return filteredRows;
    if (activeMonth && activeBucket) return activeBucket.items;
    return [];
  }, [activeBucket, activeMonth, filteredRows, search]);

  const atRoot = !search.trim() && !activeMonth;

  function renderRowActions(row: MediaRow) {
    return (
      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          onClick={() => void onDownload(row)}
          className="rounded-md bg-slate-900 px-2.5 py-1 text-[10px] font-semibold text-white hover:bg-slate-800"
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

  function renderListRow(row: MediaRow) {
    return (
      <li
        key={row.item.id}
        className="flex items-center gap-2 border-b border-slate-100 px-2 py-2 last:border-b-0 hover:bg-slate-50"
      >
        <FileGlyph variant={variant} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-slate-900">{row.title}</p>
          {row.subtitle ? (
            <p className="truncate text-[11px] text-slate-500">{row.subtitle}</p>
          ) : null}
        </div>
        {renderRowActions(row)}
      </li>
    );
  }

  function renderImageGrid(items: MediaRow[]) {
    return (
      <ul className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4">
        {items.map((row) => {
          if (row.kind !== "file") return null;
          return (
            <li
              key={row.item.id}
              className="flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-white p-1.5"
            >
              <ImageThumb file={row.item} />
              <p className="truncate px-0.5 text-[11px] font-medium text-slate-800" title={row.title}>
                {row.title}
              </p>
              <div className="flex items-center justify-between gap-1 px-0.5">
                <button
                  type="button"
                  onClick={() => void onDownload(row)}
                  className="flex-1 rounded-md bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white hover:bg-slate-800"
                >
                  Download
                </button>
                {editMode ? (
                  <button
                    type="button"
                    title="Delete"
                    disabled={deletingId === row.item.id}
                    onClick={() => onDelete?.(row)}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold text-red-600 hover:bg-red-50"
                  >
                    −
                  </button>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  function renderMonthFolders(bucketList: MonthBucket<MediaRow>[]) {
    return (
      <ul className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {bucketList.map((bucket) => (
          <li key={bucket.key}>
            <button
              type="button"
              onClick={() => setActiveMonth(bucket.key)}
              className="flex w-full flex-col items-center gap-1.5 rounded-xl border border-amber-100 bg-amber-50/70 px-2 py-3 text-center transition hover:bg-amber-50"
            >
              <FolderIcon />
              <span className="line-clamp-2 text-xs font-semibold text-slate-900">{bucket.label}</span>
              <span className="text-[10px] text-slate-500">
                {bucket.items.length} item{bucket.items.length === 1 ? "" : "s"}
              </span>
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="space-y-2">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">{sectionTitle}</h3>
          {sectionHint ? <p className="text-[11px] text-slate-400">{sectionHint}</p> : null}
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (e.target.value.trim()) setActiveMonth(null);
          }}
          placeholder={`Search ${variant === "image" ? "images" : variant === "document" ? "documents" : "files"}…`}
          className="input max-w-xs text-xs"
          aria-label={`Search ${sectionTitle}`}
        />
      </div>

      {rows.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
          {emptyMessage}
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2">
            {search.trim() ? (
              <p className="text-[11px] font-medium text-slate-600">
                Search · {filteredRows.length} match{filteredRows.length === 1 ? "" : "es"}
              </p>
            ) : activeMonth && activeBucket ? (
              <>
                <button
                  type="button"
                  onClick={() => setActiveMonth(null)}
                  className="text-[11px] font-semibold text-brand-700 hover:underline"
                >
                  ← All folders
                </button>
                <span className="text-[11px] text-slate-400">/</span>
                <p className="text-[11px] font-medium text-slate-700">{activeBucket.label}</p>
                <span className="text-[11px] text-slate-400">
                  · {activeBucket.items.length} item{activeBucket.items.length === 1 ? "" : "s"}
                </span>
              </>
            ) : (
              <p className="text-[11px] font-medium text-slate-600">
                Open a month folder · newest first · download only
              </p>
            )}
          </div>

          <div className="max-h-[min(22rem,50vh)] overflow-y-auto overscroll-contain">
            {atRoot ? renderMonthFolders(buckets) : null}
            {!atRoot && visibleRows.length === 0 ? (
              <p className="p-4 text-sm text-slate-500">No matches.</p>
            ) : null}
            {!atRoot && visibleRows.length > 0 ? (
              variant === "image" ? (
                renderImageGrid(visibleRows)
              ) : (
                <ul>{visibleRows.map((row) => renderListRow(row))}</ul>
              )
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}
