"use client";

import MarkdownLatexField from "@/components/MarkdownLatexField";
import { BULK_ROW_LIMIT, blankBulkDraftEntry, type BulkDraftEntry } from "@/lib/bulk-draft-rows";

type Variant = "concept" | "formula" | "document" | "folder" | "practice";

type Props = {
  variant: Variant;
  entries: BulkDraftEntry[];
  onChange: (entries: BulkDraftEntry[]) => void;
};

function entryLabel(variant: Variant, index: number) {
  if (variant === "formula") return `Formula ${index + 1}`;
  if (variant === "document") return `Document ${index + 1}`;
  if (variant === "folder") return `Folder ${index + 1}`;
  if (variant === "practice") return `Practice set ${index + 1}`;
  return `Item ${index + 1}`;
}

export default function BulkEntryEditor({ variant, entries, onChange }: Props) {
  function updateEntry(key: string, patch: Partial<BulkDraftEntry>) {
    onChange(entries.map((row) => (row.key === key ? { ...row, ...patch } : row)));
  }

  function addEntry() {
    if (entries.length >= BULK_ROW_LIMIT) return;
    onChange([...entries, blankBulkDraftEntry()]);
  }

  function removeEntry(key: string) {
    if (entries.length <= 1) return;
    onChange(entries.filter((row) => row.key !== key));
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-500">
        Add up to {BULK_ROW_LIMIT} at once — fill each row, then save the batch.
      </p>
      {entries.map((row, index) => (
        <div key={row.key} className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {entryLabel(variant, index)}
            </p>
            {entries.length > 1 ? (
              <button
                type="button"
                className="text-xs font-medium text-red-600 hover:underline"
                onClick={() => removeEntry(row.key)}
              >
                Remove
              </button>
            ) : null}
          </div>
          <input
            className="input"
            placeholder={
              variant === "formula"
                ? "Formula name"
                : variant === "folder"
                  ? "Folder name"
                  : variant === "practice"
                    ? "Practice set title"
                    : "Title"
            }
            value={row.title}
            onChange={(e) => updateEntry(row.key, { title: e.target.value })}
            required
          />
          {variant === "folder" ? (
            <input
              className="input"
              placeholder="Note (optional)"
              value={row.note}
              onChange={(e) => updateEntry(row.key, { note: e.target.value })}
            />
          ) : null}
          {variant === "document" ? (
            <input
              className="input"
              placeholder="Category"
              value={row.category}
              onChange={(e) => updateEntry(row.key, { category: e.target.value })}
            />
          ) : null}
          {variant !== "folder" ? (
            <MarkdownLatexField
              label={
                variant === "document"
                  ? "Document text"
                  : variant === "practice"
                    ? "Description + first question"
                    : "Full content"
              }
              value={row.content}
              onChange={(value) => updateEntry(row.key, { content: value })}
              required
              minHeightClass="min-h-[10rem]"
              showPreview={false}
            />
          ) : null}
        </div>
      ))}
      <button
        type="button"
        onClick={addEntry}
        className="btn-secondary text-sm"
        disabled={entries.length >= BULK_ROW_LIMIT}
      >
        + Add another
      </button>
    </div>
  );
}
