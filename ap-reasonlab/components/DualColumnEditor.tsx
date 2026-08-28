"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import { useSiteDialog } from "@/components/SiteDialog";
import RichContent from "@/components/RichContent";
import { consumeWriteToolHandoff } from "@/lib/write-tool-handoff";

const STORAGE_KEY = "ke-dual-column-v1";

const STARTER = `# Dual-column desk

Write Markdown + $\\LaTeX$ on the left.

$$F_{\\mathrm{net}} = ma$$

- Claim
- Evidence
- Reasoning
`;

const TEMPLATES: Array<{ id: string; label: string; body: string }> = [
  { id: "starter", label: "Starter", body: STARTER },
  {
    id: "frq",
    label: "FRQ outline",
    body: `# FRQ outline

## (a) Claim
…

## (b) Evidence / derivation
$$

$$

## (c) Reasoning
- 
`,
  },
  {
    id: "vocab",
    label: "Vocab cards",
    body: `# Vocab

| Term | Definition | Example |
| --- | --- | --- |
|  |  |  |
`,
  },
];

function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function DualColumnEditor() {
  const { confirm, dialog } = useSiteDialog();
  const [value, setValue] = useState(STARTER);
  const [savedHint, setSavedHint] = useState("");
  const [focusPreview, setFocusPreview] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handoff = consumeWriteToolHandoff("dual");
    if (handoff?.text) {
      setValue(handoff.text);
      return;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { value?: string };
        if (typeof parsed.value === "string" && parsed.value.length) setValue(parsed.value);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, savedAt: Date.now() }));
      } catch {
        /* ignore */
      }
    }, 400);
    return () => window.clearTimeout(id);
  }, [value, mounted]);

  const stats = useMemo(() => {
    const words = value.trim().split(/\s+/).filter(Boolean).length;
    const chars = value.length;
    const lines = value ? value.split(/\r?\n/).length : 0;
    return { words, chars, lines };
  }, [value]);

  function saveNow() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, savedAt: Date.now() }));
      setSavedHint("Saved on this device.");
      window.setTimeout(() => setSavedHint(""), 1800);
    } catch {
      setSavedHint("Could not save.");
    }
  }

  return (
    <StudyToolShell
      title="Dual-column editor"
      description="Write on the left, see rendered Markdown + LaTeX on the right — good for FRQ drafts and concept notes. Auto-saves in this browser."
      tip={`${stats.words} words · ${stats.chars} chars · ${stats.lines} lines · stays local until you copy or download.`}
    >
      <div className="no-print flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="btn-secondary text-sm"
          disabled={!value.trim()}
          onClick={() => void navigator.clipboard.writeText(value)}
        >
          Copy Markdown
        </button>
        <button
          type="button"
          className="btn-secondary text-sm"
          disabled={!value.trim()}
          onClick={() => downloadText(`dual-notes-${Date.now()}.md`, value)}
        >
          Download .md
        </button>
        <button type="button" className="btn-secondary text-sm" onClick={saveNow}>
          Save now
        </button>
        <button
          type="button"
          className="btn-ghost text-sm"
          onClick={() => setFocusPreview((v) => !v)}
        >
          {focusPreview ? "Show editor" : "Focus preview"}
        </button>
        <button type="button" className="btn-primary text-sm" onClick={() => window.print()}>
          Print / PDF
        </button>
        <div className="flex flex-wrap gap-1">
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              type="button"
              className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600 hover:border-brand-300"
              onClick={async () => {
                if (
                  value.trim() &&
                  value !== STARTER &&
                  !(await confirm({
                    title: "Replace draft?",
                    message: "Replace the current draft with this template?",
                    confirmLabel: "Replace",
                    danger: true,
                  }))
                ) {
                  return;
                }
                setValue(t.body);
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        {savedHint ? <span className="text-xs text-emerald-700">{savedHint}</span> : null}
      </div>

      <div className={`grid gap-4 ${focusPreview ? "" : "lg:grid-cols-2"}`}>
        {!focusPreview ? (
          <MarkdownLatexField
            label="Write"
            value={value}
            onChange={setValue}
            minHeightClass="min-h-[28rem]"
            showPreview={false}
            help="Paste ChatGPT KaTeX or write $...$ / $$...$$ yourself. Draft auto-saves locally."
          />
        ) : null}
        <div className="min-h-[28rem] overflow-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Live render
          </p>
          <RichContent className="text-sm text-slate-800">{value}</RichContent>
        </div>
      </div>

      <article className="hidden print:block">
        <RichContent>{value}</RichContent>
      </article>
      {dialog}
    </StudyToolShell>
  );
}
