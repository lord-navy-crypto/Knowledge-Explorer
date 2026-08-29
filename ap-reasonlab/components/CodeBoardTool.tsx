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
import { preloadPlaygroundDraft } from "@/lib/code-draft-bridge";

const KEY = "ke-code-board-v1";

type Tab = "library" | "add" | "import";
type SortMode = "newest" | "title" | "lang";

type StoredBlock = CodeBoardBlock & { favorite?: boolean; updatedAt?: number };

function playgroundHref(language: CodeBoardLanguage): string | null {
  if (language === "python") return "/code/python";
  if (language === "javascript") return "/code/javascript";
  if (language === "typescript") return "/code/typescript";
  if (language === "html") return "/code/web";
  if (language === "sql") return "/code/sql";
  if (language === "markdown") return "/code/markdown";
  if (language === "java") return "/code/java";
  if (language === "csharp") return "/code/csharp";
  return "/code";
}

export default function CodeBoardTool() {
  const [tab, setTab] = useState<Tab>("library");
  const [userBlocks, setUserBlocks] = useState<StoredBlock[]>([]);
  const [lang, setLang] = useState<CodeBoardLanguage | "all">("all");
  const [query, setQuery] = useState("");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("newest");
  const [copied, setCopied] = useState("");
  const [mounted, setMounted] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [importText, setImportText] = useState("");
  const [importMsg, setImportMsg] = useState("");

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState<CodeBoardLanguage>("python");
  const [comment, setComment] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUserBlocks(JSON.parse(raw) as StoredBlock[]);
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
    let list = allBlocks.filter((b) => {
      if (lang !== "all" && b.language !== lang) return false;
      if (favoritesOnly && !(b as StoredBlock).favorite) return false;
      if (!q) return true;
      return `${b.title} ${b.comment} ${b.code} ${b.language}`.toLowerCase().includes(q);
    });
    list = [...list].sort((a, b) => {
      if (sortMode === "title") return a.title.localeCompare(b.title);
      if (sortMode === "lang") return a.language.localeCompare(b.language) || a.title.localeCompare(b.title);
      const au = (a as StoredBlock).updatedAt || 0;
      const bu = (b as StoredBlock).updatedAt || 0;
      if (au || bu) return bu - au;
      if (!a.builtin && b.builtin) return -1;
      if (a.builtin && !b.builtin) return 1;
      return 0;
    });
    return list;
  }, [allBlocks, lang, query, favoritesOnly, sortMode]);

  function clearForm() {
    setTitle("");
    setComment("");
    setCode("");
    setEditId(null);
    setLanguage("python");
  }

  function addBlock(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim() || !code.trim()) return;
    if (editId) {
      setUserBlocks((prev) =>
        prev.map((b) =>
          b.id === editId
            ? {
                ...b,
                language,
                title: title.trim(),
                comment: comment.trim(),
                code: code.replace(/\r\n/g, "\n"),
                updatedAt: Date.now(),
              }
            : b
        )
      );
      clearForm();
      setTab("library");
      return;
    }
    const block: StoredBlock = {
      id: `cb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      language,
      title: title.trim(),
      comment: comment.trim(),
      code: code.replace(/\r\n/g, "\n"),
      builtin: false,
      favorite: false,
      updatedAt: Date.now(),
    };
    setUserBlocks((prev) => [block, ...prev]);
    clearForm();
    setTab("library");
  }

  function startEdit(block: StoredBlock) {
    if (block.builtin) return;
    setEditId(block.id);
    setTitle(block.title);
    setLanguage(block.language);
    setComment(block.comment);
    setCode(block.code);
    setTab("add");
  }

  function duplicateBlock(block: CodeBoardBlock) {
    const copy: StoredBlock = {
      id: `cb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      language: block.language,
      title: `${block.title} (copy)`,
      comment: block.comment,
      code: block.code,
      builtin: false,
      favorite: false,
      updatedAt: Date.now(),
    };
    setUserBlocks((prev) => [copy, ...prev]);
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

  function exportJson() {
    const payload = JSON.stringify(userBlocks, null, 2);
    void copyText("export", payload);
  }

  function runImport() {
    setImportMsg("");
    try {
      const parsed = JSON.parse(importText) as StoredBlock[];
      if (!Array.isArray(parsed)) throw new Error("Expected a JSON array.");
      const cleaned = parsed
        .filter((b) => b && typeof b.code === "string" && typeof b.title === "string")
        .map((b) => ({
          id: `cb-imp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
          language: (b.language || "other") as CodeBoardLanguage,
          title: String(b.title),
          comment: String(b.comment || ""),
          code: String(b.code).replace(/\r\n/g, "\n"),
          builtin: false as const,
          favorite: Boolean(b.favorite),
          updatedAt: Date.now(),
        }));
      if (!cleaned.length) throw new Error("No valid blocks found.");
      setUserBlocks((prev) => [...cleaned, ...prev]);
      setImportMsg(`Imported ${cleaned.length} block(s).`);
      setImportText("");
      setTab("library");
    } catch (err) {
      setImportMsg(err instanceof Error ? err.message : "Import failed.");
    }
  }

  return (
    <StudyToolShell
      title="Long code block adder"
      description="Save common / long code blocks with comments, favorites, edit/duplicate, and JSON import/export. Stored in this browser."
      tip="Use comments for “when to use this” notes. Copy code only, or copy with comment. Open playgrounds when you want to run a block."
    >
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["library", "Library"],
            ["add", editId ? "Edit block" : "Add block"],
            ["import", "Import / export"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={tab === id ? "btn-primary text-sm" : "btn-secondary text-sm"}
            onClick={() => {
              if (id === "add" && !editId) clearForm();
              setTab(id);
            }}
          >
            {label}
          </button>
        ))}
        <Link href="/code" className="btn-ghost self-center text-xs">
          Code hub →
        </Link>
      </div>

      {tab === "add" ? (
        <form onSubmit={addBlock} className="card space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            {editId ? "Edit code block" : "Add a code block"}
          </h2>
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
          <div className="flex flex-wrap gap-2">
            <button type="submit" className="btn-primary">
              {editId ? "Save changes" : "Add to library"}
            </button>
            {editId ? (
              <button type="button" className="btn-ghost" onClick={clearForm}>
                Cancel
              </button>
            ) : null}
          </div>
        </form>
      ) : null}

      {tab === "import" ? (
        <div className="card space-y-3">
          <p className="text-sm text-slate-600">
            Export copies your saved blocks (not built-ins) as JSON. Paste JSON below to import.
          </p>
          <button type="button" className="btn-secondary text-sm" onClick={exportJson}>
            {copied === "export" ? "Copied JSON" : "Copy export JSON"}
          </button>
          <label className="block text-sm">
            Import JSON
            <textarea
              className="input mt-1 min-h-[10rem] font-mono text-xs"
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder='[{ "title": "...", "language": "python", "comment": "", "code": "..." }]'
              spellCheck={false}
            />
          </label>
          <button type="button" className="btn-primary" onClick={runImport}>
            Import blocks
          </button>
          {importMsg ? <p className="text-sm text-slate-600">{importMsg}</p> : null}
        </div>
      ) : null}

      {tab === "library" ? (
        <>
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
            <label className="flex items-center gap-1.5 text-xs text-slate-600">
              <input
                type="checkbox"
                checked={favoritesOnly}
                onChange={(e) => setFavoritesOnly(e.target.checked)}
              />
              Favorites
            </label>
            <select
              className="input max-w-[10rem] text-xs"
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
            >
              <option value="newest">Sort: newest</option>
              <option value="title">Sort: title</option>
              <option value="lang">Sort: language</option>
            </select>
          </div>

          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {visible.map((block) => {
              const play = playgroundHref(block.language);
              const stored = block as StoredBlock;
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
                        {stored.favorite ? (
                          <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                            ★ Favorite
                          </span>
                        ) : null}
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
                          onClick={() =>
                            preloadPlaygroundDraft(block.language, block.code, {
                              blockId: block.builtin ? undefined : block.id,
                            })
                          }
                        >
                          Open playground
                        </Link>
                      ) : null}
                      <button
                        type="button"
                        className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200"
                        onClick={() => duplicateBlock(block)}
                      >
                        Duplicate
                      </button>
                      {!block.builtin ? (
                        <>
                          <button
                            type="button"
                            className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-200"
                            onClick={() =>
                              setUserBlocks((prev) =>
                                prev.map((x) =>
                                  x.id === block.id ? { ...x, favorite: !x.favorite } : x
                                )
                              )
                            }
                          >
                            {stored.favorite ? "Unfavorite" : "Favorite"}
                          </button>
                          <button
                            type="button"
                            className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200"
                            onClick={() => startEdit(stored)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700"
                            onClick={() =>
                              setUserBlocks((prev) => prev.filter((x) => x.id !== block.id))
                            }
                          >
                            Delete
                          </button>
                        </>
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
        </>
      ) : null}
    </StudyToolShell>
  );
}
