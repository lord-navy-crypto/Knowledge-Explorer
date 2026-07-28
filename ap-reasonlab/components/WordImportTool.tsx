"use client";

import { useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";

export default function WordImportTool() {
  const [markdown, setMarkdown] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  async function onFile(file: File | null) {
    if (!file) return;
    if (!/\.docx$/i.test(file.name)) {
      setError("Please choose a .docx Word file.");
      return;
    }
    setBusy(true);
    setError("");
    setFileName(file.name);
    try {
      const mammoth = await import("mammoth");
      const buffer = await file.arrayBuffer();
      const result = await mammoth.convertToMarkdown({ arrayBuffer: buffer });
      setMarkdown(String(result.value || "").trim());
      if (result.messages?.length) {
        setError(result.messages.map((m) => m.message).slice(0, 3).join(" · "));
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not read Word file.");
    } finally {
      setBusy(false);
    }
  }

  function copyMarkdown() {
    void navigator.clipboard.writeText(markdown);
  }

  return (
    <StudyToolShell
      title="Word → Markdown"
      description="Upload a .docx file and extract readable Markdown you can paste into concepts, practice, or dual-column editor."
      tip="Complex Word layouts (tables, tracked changes) may simplify. Images are skipped — keep them in the file panel instead."
    >
      <div className="flex flex-wrap items-center gap-3">
        <label className="btn-primary cursor-pointer">
          {busy ? "Reading…" : "Choose .docx"}
          <input
            type="file"
            accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            disabled={busy}
            onChange={(e) => void onFile(e.target.files?.[0] || null)}
          />
        </label>
        {fileName ? <span className="text-sm text-slate-600">{fileName}</span> : null}
        <button
          type="button"
          className="btn-secondary"
          disabled={!markdown}
          onClick={copyMarkdown}
        >
          Copy Markdown
        </button>
      </div>
      {error ? <p className="text-sm text-amber-700">{error}</p> : null}

      <div className="grid gap-4 lg:grid-cols-2">
        <MarkdownLatexField
          label="Extracted Markdown"
          value={markdown}
          onChange={setMarkdown}
          minHeightClass="min-h-[22rem]"
          showPreview={false}
          placeholder="Upload a .docx to fill this field…"
        />
        <div className="min-h-[22rem] overflow-auto rounded-2xl border border-slate-200 bg-white p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Preview
          </p>
          {markdown.trim() ? (
            <RichContent className="text-sm">{markdown}</RichContent>
          ) : (
            <p className="text-sm text-slate-500">Nothing extracted yet.</p>
          )}
        </div>
      </div>
    </StudyToolShell>
  );
}
