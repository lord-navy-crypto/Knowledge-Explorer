"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

function mdToPlain(md: string, keepLinks: boolean): string {
  return md
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/```\w*\n?/, "").replace(/```$/, ""))
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)]\(([^)]+)\)/g, keepLinks ? "$1 ($2)" : "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "• ")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/^>\s?/gm, "")
    .replace(/\|/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function plainToMd(plain: string): string {
  const paras = plain
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
  return paras
    .map((p) => {
      const lines = p.split("\n").map((l) => l.trim());
      if (lines.every((l) => /^[•*-]\s+/.test(l) || /^[-*]\s+/.test(l))) {
        return lines.map((l) => `- ${l.replace(/^[•*-]\s+/, "")}`).join("\n");
      }
      return p.replace(/\n/g, " ");
    })
    .join("\n\n");
}

export default function MarkdownPlainTool() {
  const [mode, setMode] = useState<"md2plain" | "plain2md">("md2plain");
  const [input, setInput] = useState("# Title\n\nHello **world** and a [link](https://example.com).");
  const [keepLinks, setKeepLinks] = useState(false);
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () => (mode === "md2plain" ? mdToPlain(input, keepLinks) : plainToMd(input)),
    [mode, input, keepLinks]
  );

  const stats = useMemo(
    () => ({
      inWords: input.trim().split(/\s+/).filter(Boolean).length,
      outWords: output.trim().split(/\s+/).filter(Boolean).length,
      inChars: input.length,
      outChars: output.length,
    }),
    [input, output]
  );

  function swapIo() {
    setInput(output);
    setMode((m) => (m === "md2plain" ? "plain2md" : "md2plain"));
  }

  function downloadOut() {
    const ext = mode === "md2plain" ? "txt" : "md";
    const blob = new Blob([output], {
      type: ext === "md" ? "text/markdown;charset=utf-8" : "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `converted.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <StudyToolShell
      title="Markdown ↔ plain text"
      description="Strip Markdown to readable plain text, or wrap plain paragraphs into simple Markdown. Swap directions and download results."
      tip="Code fences and complex tables are simplified — fine for notes and FRQ drafts."
    >
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={mode === "md2plain" ? "btn-primary" : "btn-secondary"}
          onClick={() => setMode("md2plain")}
        >
          Markdown → plain
        </button>
        <button
          type="button"
          className={mode === "plain2md" ? "btn-primary" : "btn-secondary"}
          onClick={() => setMode("plain2md")}
        >
          Plain → Markdown
        </button>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => {
            void navigator.clipboard.writeText(output).then(() => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1500);
            });
          }}
        >
          {copied ? "Copied" : "Copy output"}
        </button>
        <button type="button" className="btn-secondary" onClick={downloadOut} disabled={!output}>
          Download
        </button>
        <button type="button" className="btn-ghost" onClick={swapIo} disabled={!output}>
          Use output as input
        </button>
        {mode === "md2plain" ? (
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={keepLinks}
              onChange={(e) => setKeepLinks(e.target.checked)}
            />
            Keep URLs after link text
          </label>
        ) : null}
        <span className="self-center text-xs tabular-nums text-slate-500">
          {stats.inWords} → {stats.outWords} words · {stats.inChars} → {stats.outChars} chars
        </span>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium">Input</span>
          <textarea
            className="input mt-1 min-h-[18rem] font-mono text-xs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Output</span>
          <textarea className="input mt-1 min-h-[18rem] font-mono text-xs" readOnly value={output} />
        </label>
      </div>
    </StudyToolShell>
  );
}
