"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

function mdToPlain(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/```\w*\n?/, "").replace(/```$/, ""))
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
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
  const output = useMemo(
    () => (mode === "md2plain" ? mdToPlain(input) : plainToMd(input)),
    [mode, input]
  );

  return (
    <StudyToolShell
      title="Markdown ↔ plain text"
      description="Strip Markdown to readable plain text, or wrap plain paragraphs into simple Markdown."
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
        <button type="button" className="btn-secondary" onClick={() => void navigator.clipboard.writeText(output)}>
          Copy output
        </button>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium">Input</span>
          <textarea className="input mt-1 min-h-[18rem] font-mono text-xs" value={input} onChange={(e) => setInput(e.target.value)} />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Output</span>
          <textarea className="input mt-1 min-h-[18rem] font-mono text-xs" readOnly value={output} />
        </label>
      </div>
    </StudyToolShell>
  );
}
