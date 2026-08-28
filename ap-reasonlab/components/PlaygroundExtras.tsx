"use client";

import Link from "next/link";
import { useState } from "react";
import type { CodeBoardLanguage } from "@/data/code-board";
import { appendToCodeBoard } from "@/lib/code-board-store";
import { copySource, downloadSource } from "@/lib/playground-export";

type Props = {
  code: string;
  language: CodeBoardLanguage;
  filename: string;
  onNote?: (message: string) => void;
};

export default function PlaygroundExtras({ code, language, filename, onNote }: Props) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleCopy() {
    const ok = await copySource(code);
    setCopied(ok);
    onNote?.(ok ? "Source copied." : "Copy failed.");
    window.setTimeout(() => setCopied(false), 1500);
  }

  function handleDownload() {
    downloadSource(code, filename);
    onNote?.(`Downloaded ${filename}.`);
  }

  function handleSaveToBoard() {
    appendToCodeBoard({
      language,
      title: filename.replace(/\.\w+$/, ""),
      code,
      comment: "Saved from playground",
    });
    setSaved(true);
    onNote?.("Saved to code block adder library.");
    window.setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="flex flex-wrap items-center gap-2 self-end">
      <button type="button" className="btn-secondary text-xs" onClick={() => void handleCopy()}>
        {copied ? "Copied" : "Copy"}
      </button>
      <button type="button" className="btn-secondary text-xs" onClick={handleDownload}>
        Download
      </button>
      <button type="button" className="btn-secondary text-xs" onClick={handleSaveToBoard}>
        {saved ? "Saved ✓" : "Save to code board"}
      </button>
      <Link href="/tools/code-board" className="text-xs text-brand-600 hover:underline">
        Open adder →
      </Link>
      <span className="hidden text-[10px] text-slate-400 sm:inline">
        ⌘/Ctrl+Enter run · ⌘/Ctrl+Shift+C copy
      </span>
    </div>
  );
}
