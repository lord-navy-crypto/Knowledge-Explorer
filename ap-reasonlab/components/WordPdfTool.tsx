"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import StudyToolShell from "@/components/StudyToolShell";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";

/**
 * One-shot Word → preview → Print/Save as PDF (browser local).
 * Uses mammoth for .docx → Markdown, then the same print path as Markdown→PDF.
 */
export default function WordPdfTool() {
  const [markdown, setMarkdown] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const [warnings, setWarnings] = useState("");
  const [docTitle, setDocTitle] = useState("");
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    const words = markdown.trim().split(/\s+/).filter(Boolean).length;
    return { words, chars: markdown.length };
  }, [markdown]);

  async function onFile(file: File | null) {
    if (!file) return;
    if (!/\.docx$/i.test(file.name)) {
      setError("Please choose a .docx Word file (not legacy .doc).");
      return;
    }
    setBusy(true);
    setError("");
    setWarnings("");
    setFileName(file.name);
    setDocTitle(file.name.replace(/\.docx$/i, ""));
    try {
      const mammoth = await import("mammoth");
      const buffer = await file.arrayBuffer();
      const result = await mammoth.convertToMarkdown({ arrayBuffer: buffer });
      const text = String(result.value || "").trim();
      setMarkdown(text);
      if (!text) setError("No readable text found in this document.");
      if (result.messages?.length) {
        setWarnings(result.messages.map((m) => m.message).slice(0, 4).join(" · "));
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not read Word file.");
    } finally {
      setBusy(false);
    }
  }

  function downloadMd() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(docTitle || fileName || "word-export").replace(/\s+/g, "-")}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function copyMd() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <StudyToolShell
      title="Word → PDF"
      description="Upload a .docx, preview the extracted content, then use Print → Save as PDF. Everything stays in this browser."
      tip="Layout will not match Word pixel-for-pixel (tables/images may simplify). For editable Markdown first, use Word → Markdown."
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
          className="btn-primary"
          disabled={!markdown.trim()}
          onClick={() => window.print()}
        >
          Print / Save as PDF
        </button>
        <button type="button" className="btn-secondary" disabled={!markdown.trim()} onClick={() => void copyMd()}>
          {copied ? "Copied" : "Copy Markdown"}
        </button>
        <button type="button" className="btn-secondary" disabled={!markdown.trim()} onClick={downloadMd}>
          Download .md
        </button>
        <Link href="/tools/word-import" className="btn-secondary text-sm">
          Edit as Markdown →
        </Link>
        <Link href="/tools/markdown-pdf" className="text-sm text-brand-600 hover:underline">
          Markdown → PDF
        </Link>
      </div>

      {markdown.trim() ? (
        <div className="no-print flex flex-wrap items-end gap-3">
          <label className="block text-sm">
            <span className="font-medium text-slate-700">Print title</span>
            <input
              className="input mt-1 min-w-[14rem]"
              value={docTitle}
              onChange={(e) => setDocTitle(e.target.value)}
              placeholder="Optional heading on PDF"
            />
          </label>
          <p className="pb-2 text-xs tabular-nums text-slate-500">
            {stats.words} words · {stats.chars} chars
          </p>
        </div>
      ) : null}

      {error ? <p className="no-print text-sm text-red-700">{error}</p> : null}
      {warnings ? <p className="no-print text-sm text-amber-700">{warnings}</p> : null}

      <div className="no-print grid gap-4 lg:grid-cols-2">
        <MarkdownLatexField
          label="Extracted content (editable)"
          value={markdown}
          onChange={setMarkdown}
          minHeightClass="min-h-[22rem]"
          showPreview={false}
          placeholder="Upload a .docx to fill this field…"
        />
        <div className="min-h-[22rem] overflow-auto rounded-2xl border border-slate-200 bg-white p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            PDF preview
          </p>
          {markdown.trim() ? (
            <>
              {docTitle.trim() ? (
                <h1 className="mb-4 text-xl font-bold text-slate-900">{docTitle.trim()}</h1>
              ) : null}
              <RichContent className="text-sm">{markdown}</RichContent>
            </>
          ) : (
            <p className="text-sm text-slate-500">Nothing extracted yet.</p>
          )}
        </div>
      </div>

      <article className="hidden print:block">
        {docTitle.trim() ? <h1>{docTitle.trim()}</h1> : null}
        <RichContent>{markdown}</RichContent>
      </article>
    </StudyToolShell>
  );
}
