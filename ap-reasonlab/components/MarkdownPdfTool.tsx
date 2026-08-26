"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";

const STORAGE_KEY = "ke-markdown-pdf-v1";

const STARTER = `# Study export

Subject: AP Physics 1

## Key idea

$$F_{\\mathrm{net}} = ma$$

1. Draw the free-body diagram.
2. Resolve components.
3. Write $\\Sigma F = ma$ per axis.
`;

export default function MarkdownPdfTool() {
  const [value, setValue] = useState(STARTER);
  const [title, setTitle] = useState("");
  const [fontScale, setFontScale] = useState(100);
  const [mounted, setMounted] = useState(false);
  const [hint, setHint] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { value?: string; title?: string; fontScale?: number };
      if (typeof parsed.value === "string" && parsed.value.length) setValue(parsed.value);
      if (typeof parsed.title === "string") setTitle(parsed.title);
      if (typeof parsed.fontScale === "number") setFontScale(parsed.fontScale);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, title, fontScale }));
      } catch {
        /* ignore */
      }
    }, 400);
    return () => window.clearTimeout(id);
  }, [value, title, fontScale, mounted]);

  const stats = useMemo(() => {
    const words = value.trim().split(/\s+/).filter(Boolean).length;
    return { words, chars: value.length };
  }, [value]);

  function printPdf() {
    window.print();
  }

  function downloadMd() {
    const blob = new Blob([value], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(title || "study-export").replace(/\s+/g, "-")}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function saveNow() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, title, fontScale }));
      setHint("Saved on this device.");
      window.setTimeout(() => setHint(""), 1600);
    } catch {
      setHint("Could not save.");
    }
  }

  return (
    <StudyToolShell
      title="Markdown → PDF"
      description="Write Markdown + LaTeX, preview, then use your browser’s Print → Save as PDF. Draft auto-saves locally."
      tip="Chrome tip: Print → Destination: Save as PDF → Paper size A4. Adjust print scale below for denser pages."
    >
      <div className="no-print flex flex-wrap items-end gap-3">
        <button type="button" className="btn-primary" onClick={printPdf}>
          Print / Save as PDF
        </button>
        <button type="button" className="btn-secondary" onClick={downloadMd}>
          Download .md
        </button>
        <button type="button" className="btn-secondary" onClick={saveNow}>
          Save draft
        </button>
        <button type="button" className="btn-secondary" onClick={() => setValue(STARTER)}>
          Reset sample
        </button>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Optional title</span>
          <input
            className="input mt-1 min-w-[12rem]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Print heading"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Preview scale {fontScale}%</span>
          <input
            type="range"
            min={80}
            max={140}
            step={5}
            className="mt-2 block w-40"
            value={fontScale}
            onChange={(e) => setFontScale(Number(e.target.value))}
          />
        </label>
        <p className="pb-2 text-xs tabular-nums text-slate-500">
          {stats.words} words · {stats.chars} chars
        </p>
        {hint ? <span className="pb-2 text-xs text-emerald-700">{hint}</span> : null}
      </div>

      <div className="no-print grid gap-4 lg:grid-cols-2">
        <MarkdownLatexField
          label="Source"
          value={value}
          onChange={setValue}
          minHeightClass="min-h-[24rem]"
          showPreview={false}
        />
        <div
          className="min-h-[24rem] overflow-auto rounded-2xl border border-slate-200 bg-white p-5"
          style={{ fontSize: `${fontScale}%` }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Preview
          </p>
          {title.trim() ? <h1 className="mb-3 text-xl font-bold">{title.trim()}</h1> : null}
          <RichContent className="text-sm">{value}</RichContent>
        </div>
      </div>

      <article className="hidden print:block" style={{ fontSize: `${fontScale}%` }}>
        {title.trim() ? <h1>{title.trim()}</h1> : null}
        <RichContent>{value}</RichContent>
      </article>
    </StudyToolShell>
  );
}
