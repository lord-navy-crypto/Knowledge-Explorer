"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import StudyToolShell from "@/components/StudyToolShell";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";
import { consumeWriteToolHandoff } from "@/lib/write-tool-handoff";

export default function WordImportTool() {
  const [markdown, setMarkdown] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const [compactBlank, setCompactBlank] = useState(false);
  const [copied, setCopied] = useState(false);
  const [handoffNote, setHandoffNote] = useState("");

  useEffect(() => {
    const handoff = consumeWriteToolHandoff("word-import");
    if (handoff?.text) {
      setMarkdown(handoff.text);
      if (handoff.title) setFileName(handoff.title);
      setHandoffNote("Loaded from write & convert wizard.");
    }
  }, []);

  const exportText = useMemo(() => {
    if (!compactBlank) return markdown;
    return markdown.replace(/\n{3,}/g, "\n\n").trim();
  }, [markdown, compactBlank]);

  const stats = useMemo(() => {
    const words = exportText.trim().split(/\s+/).filter(Boolean).length;
    return { words, chars: exportText.length, lines: exportText ? exportText.split(/\r?\n/).length : 0 };
  }, [exportText]);

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
    void navigator.clipboard.writeText(exportText).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    });
  }

  function downloadMd() {
    const base = fileName.replace(/\.docx$/i, "") || "word-import";
    const blob = new Blob([exportText], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${base}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function applyCompact() {
    setMarkdown((m) => m.replace(/\n{3,}/g, "\n\n").trim());
  }

  return (
    <StudyToolShell
      title="Word → Markdown"
      description="Upload a .docx file and extract readable Markdown you can paste into concepts, practice, or dual-column editor."
      tip="Complex Word layouts (tables, tracked changes) may simplify. Images are skipped — keep them in the file panel instead. Need a PDF? Use Word → PDF for a one-shot Print → Save as PDF flow."
    >
      <div className="no-print flex flex-wrap items-center gap-3">
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
          disabled={!exportText}
          onClick={copyMarkdown}
        >
          {copied ? "Copied" : "Copy Markdown"}
        </button>
        <button type="button" className="btn-secondary" disabled={!exportText} onClick={downloadMd}>
          Download .md
        </button>
        <button
          type="button"
          className="btn-primary"
          disabled={!exportText.trim()}
          onClick={() => window.print()}
        >
          Print / Save as PDF
        </button>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={compactBlank}
            onChange={(e) => setCompactBlank(e.target.checked)}
          />
          Compact on copy/download
        </label>
        <button type="button" className="btn-ghost text-sm" disabled={!markdown} onClick={applyCompact}>
          Compact in editor
        </button>
        <Link href="/tools/word-pdf" className="text-sm text-brand-600 hover:underline">
          Open Word → PDF tool →
        </Link>
      </div>
      {exportText.trim() ? (
        <p className="no-print text-xs tabular-nums text-slate-500">
          {stats.words} words · {stats.chars} chars · {stats.lines} lines
        </p>
      ) : null}
      {error ? <p className="text-sm text-amber-700">{error}</p> : null}

      <div className="no-print grid gap-4 lg:grid-cols-2">
        <MarkdownLatexField
          label="Extracted Markdown"
          value={markdown}
          onChange={setMarkdown}
          minHeightClass="min-h-[22rem]"
          showPreview={false}
          placeholder="Upload a .docx to fill this field…"
        />
        <div className="no-print min-h-[22rem] overflow-auto rounded-2xl border border-slate-200 bg-white p-4">
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

      <article className="hidden print:block">
        <RichContent>{exportText}</RichContent>
      </article>
    </StudyToolShell>
  );
}
