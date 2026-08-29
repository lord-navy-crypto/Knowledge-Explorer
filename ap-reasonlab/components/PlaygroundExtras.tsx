"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { appendToCodeBoard, updateCodeBoardBlock } from "@/lib/code-board-store";
import { copySource, downloadSource } from "@/lib/playground-export";
import { codeEditorDeskHref, peekCodeBoardEditId } from "@/lib/code-draft-bridge";
import { preloadForumComposer } from "@/lib/forum-local";
import { usePlaygroundHandoffNotice } from "@/lib/use-playground-handoff";
import { usePlaygroundShortcuts } from "@/lib/use-playground-shortcuts";
import type { CodeBoardLanguage } from "@/data/code-board";

type Props = {
  code: string;
  language: CodeBoardLanguage;
  filename: string;
  onNote?: (message: string) => void;
  onRun?: () => void;
};

export default function PlaygroundExtras({ code, language, filename, onNote, onRun }: Props) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const handoff = usePlaygroundHandoffNotice();

  useEffect(() => {
    setEditId(peekCodeBoardEditId());
  }, []);

  useEffect(() => {
    if (handoff) onNote?.(handoff);
  }, [handoff, onNote]);

  const handleCopy = useCallback(async () => {
    const ok = await copySource(code);
    setCopied(ok);
    onNote?.(ok ? "Source copied." : "Copy failed.");
    window.setTimeout(() => setCopied(false), 1500);
  }, [code, onNote]);

  usePlaygroundShortcuts({ onRun, onCopy: () => void handleCopy() });

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

  function handleUpdateBlock() {
    if (!editId) return;
    const ok = updateCodeBoardBlock(editId, code);
    setUpdated(ok);
    onNote?.(ok ? "Code board block updated." : "Could not update that block.");
    window.setTimeout(() => setUpdated(false), 2000);
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
      <button
        type="button"
        className="btn-secondary text-xs"
        onClick={() => {
          const fenceLang = language === "html" ? "html" : language;
          preloadForumComposer({
            title: filename.replace(/\.\w+$/, "") || "Playground snippet",
            body: "```" + fenceLang + "\n" + code + "\n```",
            postCategory: "questions",
          });
          router.push("/forum");
        }}
      >
        Post to Forum
      </button>
      {editId ? (
        <button type="button" className="btn-secondary text-xs" onClick={handleUpdateBlock}>
          {updated ? "Updated ✓" : "Update code board block"}
        </button>
      ) : null}
      <Link href={codeEditorDeskHref("board")} className="text-xs text-brand-600 hover:underline">
        Board tab →
      </Link>
      <Link href="/tools/code-board" className="text-xs text-slate-500 hover:underline">
        Catalog adder
      </Link>
      {onRun ? (
        <span className="hidden text-[10px] text-slate-400 sm:inline">
          ⌘/Ctrl+Enter run · ⌘/Ctrl+Shift+C copy
        </span>
      ) : (
        <span className="hidden text-[10px] text-slate-400 sm:inline">⌘/Ctrl+Shift+C copy</span>
      )}
      {handoff ? <span className="w-full text-[11px] text-emerald-700">{handoff}</span> : null}
    </div>
  );
}
