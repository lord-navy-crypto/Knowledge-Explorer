"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import {
  CODE_BOARD_LANGUAGES,
  seedCodeBlocks,
  type CodeBoardBlock,
  type CodeBoardLanguage,
} from "@/data/code-board";

const KEY = "ke-code-board-v1";

function playgroundHref(language: CodeBoardLanguage): string | null {
  if (language === "python") return "/code/python";
  if (language === "html") return "/code/web";
  if (language === "java") return "/code/java";
  return "/code";
}

export default function CodeBoardTool() {
  const [userBlocks, setUserBlocks] = useState<CodeBoardBlock[]>([]);
  const [lang, setLang] = useState<CodeBoardLanguage | "all">("all");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState("");
  const [mounted, setMounted] = useState(false);

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState<CodeBoardLanguage>("python");
  const [comment, setComment] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUserBlocks(JSON.parse(raw) as CodeBoardBlock[]);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(KEY, JSON.stringify(userBlocks));
  }, [userBlocks, mounted]);

  const allBlocks = useMemo(() => {
    const builtins = seedCodeBlocks.map((b) => ({ ...b, builtin: true as const }));
    return [...userBlocks, ...builtins];
  }, [userBlocks]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allBlocks.filter((b) => {
      if (lang !== "all" && b.language !== lang) return false;
      if (!q) return true;
      return `${b.title} ${b.comment} ${b.code} ${b.language}`.toLowerCase().includes(q);
    });
  }, [allBlocks, lang, query]);

  function addBlock(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim() || !code.trim()) return;
    const block: CodeBoardBlock = {
      id: `cb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      language,
      title: title.trim(),
      comment: comment.trim(),
      code: code.replace(/\r\n/g, "\n"),
      builtin: false,
    };
    setUserBlocks((prev) => [block, ...prev]);
    setTitle("");
    setComment("");
    setCode("");
  }

  async function copyText(id: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    window.setTimeout(() => setCopied((c) => (c === id ? "" : c)), 1500);
  }

  function copyWithComment(block: CodeBoardBlock) {
    const header = [
      block.title ? `// ${block.title}` : "",
      block.comment ? `// ${block.comment}` : "",
      "",
      block.code,
    ]
      .filter((line, i, arr) => !(line === "" && arr[i - 1] === ""))
      .join("\n");
    void copyText(`${block.id}-all`, header);
  }

  return (
    <StudyToolShell
      title="Long code block adder"
      description="Save common / long code blocks with comments. Scroll the library — paste code instead of uploading files. Stored in this browser."
      tip="Use comments for “when to use this” notes. Copy code only, or copy with comment. Open Python / Web playgrounds when you want to run a block."
    >
      <form onSubmit={addBlock} className="card space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base font-semibold text-slate-900">Add a code block</h2>
          <Link href="/code" className="text-xs font-medium text-brand-700 hover:underline">
            Code hub →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="font-medium">Title</span>
            <input
              className="input mt-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Binary search template"
              required
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">Language</span>
            <select
              className="input mt-1"
              value={language}
              onChange={(e) => setLanguage(e.target.value as CodeBoardLanguage)}
            >
              {CODE_BOARD_LANGUAGES.filter((l) => l.id !== "all").map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="block text-sm">
          <span className="font-medium">Comment / notes</span>
          <textarea
            className="input mt-1 min-h-[4rem]"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Why keep this block? Edge cases? Exam tip?"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Code</span>
          <textarea
            className="input mt-1 min-h-[12rem] font-mono text-xs leading-5"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste a long code block here…"
            required
            spellCheck={false}
          />
        </label>
        <button type="submit" className="btn-primary">
          Add to library
        </button>
      </form>

      <div className="flex flex-wrap items-center gap-2">
        {CODE_BOARD_LANGUAGES.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setLang(l.id)}
            className={
              lang === l.id
                ? "rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white"
                : "rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
            }
          >
            {l.label}
          </button>
        ))}
        <input
          className="input max-w-xs text-sm"
          placeholder="Search title, comment, code…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
        {visible.map((block) => {
          const play = playgroundHref(block.language);
          return (
            <article key={block.id} className="card space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="badge">{block.language}</span>
                    {block.builtin ? (
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        Built-in
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                        Yours
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-slate-900">{block.title}</h3>
                  {block.comment ? (
                    <p className="text-sm leading-6 text-slate-600">{block.comment}</p>
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    className="rounded-lg bg-brand-600 px-2.5 py-1 text-[11px] font-semibold text-white hover:opacity-90"
                    onClick={() => void copyText(block.id, block.code)}
                  >
                    {copied === block.id ? "Copied" : "Copy code"}
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                    onClick={() => copyWithComment(block)}
                  >
                    {copied === `${block.id}-all` ? "Copied" : "Copy + comment"}
                  </button>
                  {play ? (
                    <Link
                      href={play}
                      className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50"
                    >
                      Open playground
                    </Link>
                  ) : null}
                  {!block.builtin ? (
                    <button
                      type="button"
                      className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700"
                      onClick={() =>
                        setUserBlocks((prev) => prev.filter((x) => x.id !== block.id))
                      }
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              </div>
              <pre className="max-h-64 overflow-auto rounded-xl bg-slate-900 p-3 text-xs leading-5 text-slate-100">
                {block.code}
              </pre>
            </article>
          );
        })}
        {!visible.length ? (
          <div className="card text-sm text-slate-500">No matching code blocks.</div>
        ) : null}
      </div>
    </StudyToolShell>
  );
}
