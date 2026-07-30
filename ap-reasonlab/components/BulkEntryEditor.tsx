"use client";

import MarkdownLatexField from "@/components/MarkdownLatexField";
import { BULK_ROW_LIMIT, blankBulkDraftEntry, type BulkDraftEntry } from "@/lib/bulk-draft-rows";
import { parsePracticeQuestions } from "@/lib/parse-practice-draft";

type Variant = "concept" | "formula" | "document" | "folder" | "practice";

type Props = {
  variant: Variant;
  entries: BulkDraftEntry[];
  onChange: (entries: BulkDraftEntry[]) => void;
  onStructureConcept?: (key: string) => void;
  structuringKey?: string;
};

function entryLabel(variant: Variant, index: number) {
  if (variant === "formula") return `Formula ${index + 1}`;
  if (variant === "document") return `Document ${index + 1}`;
  if (variant === "folder") return `Folder ${index + 1}`;
  if (variant === "practice") return `Practice set ${index + 1}`;
  return `Item ${index + 1}`;
}

export default function BulkEntryEditor({
  variant,
  entries,
  onChange,
  onStructureConcept,
  structuringKey = "",
}: Props) {
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

  function importQuestionsFromClipboard(key: string) {
  void navigator.clipboard.readText().then((text) => {
      const parsed = parsePracticeQuestions(text);
      if (parsed.length === 0) return;
      const first = parsed[0];
      updateEntry(key, {
        note: first.prompt,
        content: entries.find((row) => row.key === key)?.content || "",
      });
      if (parsed.length > 1) {
        const extra = parsed.slice(1);
        const base = entries.find((row) => row.key === key);
        const newRows = extra.map((q) => ({
          ...blankBulkDraftEntry(),
          title: base?.title ? `${base.title} (Q${extra.indexOf(q) + 2})` : "",
          note: q.prompt,
          content: base?.content || "",
          generationNote: base?.generationNote || "",
          minutes: base?.minutes || "20",
          difficultyTier: base?.difficultyTier || "2",
        }));
        onChange(
          [
            ...entries.map((row) => (row.key === key ? { ...row, note: first.prompt } : row)),
            ...newRows,
          ].slice(0, BULK_ROW_LIMIT)
        );
      }
    });
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
          {variant === "practice" ? (
            <>
              <MarkdownLatexField
                label="Set description"
                help="Short description shown on Practice. Markdown + LaTeX supported."
                value={row.content}
                onChange={(value) => updateEntry(row.key, { content: value })}
                required
                minHeightClass="min-h-[8rem]"
                placeholder="What this practice set covers…"
              />
              <div className="grid gap-2 sm:grid-cols-2">
                <input
                  className="input"
                  placeholder="Estimated minutes (e.g. 20)"
                  value={row.minutes || "20"}
                  onChange={(e) => updateEntry(row.key, { minutes: e.target.value })}
                />
                <select
                  className="input"
                  value={row.difficultyTier || "2"}
                  onChange={(e) => updateEntry(row.key, { difficultyTier: e.target.value })}
                  aria-label="Difficulty tier"
                >
                  <option value="1">Tier 1 · intro</option>
                  <option value="2">Tier 2 · standard</option>
                  <option value="3">Tier 3 · challenge</option>
                </select>
              </div>
              <MarkdownLatexField
                label="First question prompt"
                help="Optional first FRQ / concept-check prompt."
                value={row.note}
                onChange={(value) => updateEntry(row.key, { note: value })}
                minHeightClass="min-h-[10rem]"
                placeholder="Paste the first question (Markdown + $math$)…"
              />
              <input
                className="input"
                placeholder="Generation note (optional)"
                value={row.generationNote || ""}
                onChange={(e) => updateEntry(row.key, { generationNote: e.target.value })}
              />
              <button
                type="button"
                className="btn-ghost text-xs"
                onClick={() => importQuestionsFromClipboard(row.key)}
              >
                Import questions from clipboard (AI chat)
              </button>
            </>
          ) : variant !== "folder" ? (
            <>
              <MarkdownLatexField
                label={
                  variant === "document"
                    ? "Document text"
                    : "Full content"
                }
                value={row.content}
                onChange={(value) => updateEntry(row.key, { content: value })}
                required
                minHeightClass="min-h-[10rem]"
              />
              {variant === "concept" && row.content.trim() && onStructureConcept ? (
                <button
                  type="button"
                  className="btn-secondary text-xs"
                  disabled={structuringKey === row.key}
                  onClick={() => onStructureConcept(row.key)}
                >
                  {structuringKey === row.key
                    ? "Sorting notes with AI…"
                    : "Sort notes with AI (Website API)"}
                </button>
              ) : null}
            </>
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
      <button
        type="button"
        onClick={addEntry}
        className="btn-ghost text-sm"
        disabled={entries.length >= BULK_ROW_LIMIT}
      >
        + Add more
      </button>
    </div>
  );
}
