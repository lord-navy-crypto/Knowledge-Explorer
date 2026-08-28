"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import InlineNotice from "@/components/InlineNotice";

type Note = { id: string; color: string; text: string; note: string; tag: string };

type Tab = "read" | "notes" | "export";

const KEY = "ke-reading-highlight-v1";
const COLORS = [
  { id: "yellow", label: "Yellow", className: "bg-yellow-200" },
  { id: "green", label: "Green", className: "bg-emerald-200" },
  { id: "pink", label: "Pink", className: "bg-pink-200" },
  { id: "blue", label: "Blue", className: "bg-sky-200" },
];

function normalizeNote(n: Note & { tag?: string }): Note {
  return { ...n, tag: n.tag || "" };
}

export default function ReadingHighlightTool() {
  const [tab, setTab] = useState<Tab>("read");
  const [passage, setPassage] = useState(
    "Climate models suggest that rising greenhouse gas concentrations trap more heat in the atmosphere. This enhanced greenhouse effect is linked to higher average global temperatures, shifting precipitation patterns, and more frequent extreme weather events."
  );
  const [selection, setSelection] = useState("");
  const [color, setColor] = useState("yellow");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [colorFilter, setColorFilter] = useState("all");
  const [noteQuery, setNoteQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState("");
  const renderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { passage?: string; notes?: Note[] };
        if (parsed.passage) setPassage(parsed.passage);
        if (parsed.notes) setNotes(parsed.notes.map(normalizeNote));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(KEY, JSON.stringify({ passage, notes }));
  }, [passage, notes, mounted]);

  const rendered = useMemo(() => {
    const escapeHtml = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    if (!notes.length) return escapeHtml(passage).replace(/\n/g, "<br/>");
    let html = escapeHtml(passage);
    const sorted = [...notes].sort((a, b) => b.text.length - a.text.length);
    for (const n of sorted) {
      if (colorFilter !== "all" && n.color !== colorFilter) continue;
      const cls = COLORS.find((c) => c.id === n.color)?.className || "bg-yellow-200";
      const needle = escapeHtml(n.text);
      const idx = html.indexOf(needle);
      if (idx < 0) continue;
      const title = escapeHtml(n.note || n.tag || "Highlight");
      html =
        html.slice(0, idx) +
        `<mark class="${cls} rounded px-0.5" title="${title}" data-hid="${n.id}">${needle}</mark>` +
        html.slice(idx + needle.length);
    }
    return html.replace(/\n/g, "<br/>");
  }, [passage, notes, colorFilter]);

  const filteredNotes = useMemo(() => {
    const q = noteQuery.trim().toLowerCase();
    return notes.filter((n) => {
      if (colorFilter !== "all" && n.color !== colorFilter) return false;
      if (!q) return true;
      return `${n.text} ${n.note} ${n.tag}`.toLowerCase().includes(q);
    });
  }, [notes, colorFilter, noteQuery]);

  function captureSelectionFromPassage() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const text = sel.toString().trim();
    if (!text) return;
    if (!passage.includes(text)) {
      // Try normalizing whitespace
      const compact = text.replace(/\s+/g, " ");
      if (passage.replace(/\s+/g, " ").includes(compact)) {
        setSelection(compact);
        return;
      }
      return;
    }
    setSelection(text);
  }

  function addHighlight() {
    const text = selection.trim();
    if (!text || !passage.includes(text)) {
      setNotice("Select text that appears in the passage (copy from the left box or select in the preview).");
      return;
    }
    setNotes((prev) => [
      {
        id: `h-${Date.now()}`,
        color,
        text,
        note: note.trim() || "Highlight",
        tag: tag.trim(),
      },
      ...prev,
    ]);
    setSelection("");
    setNote("");
  }

  function exportMarkdown(): string {
    const lines = [
      "# Reading highlights",
      "",
      "## Passage",
      "",
      passage,
      "",
      "## Notes",
      "",
    ];
    for (const n of notes) {
      const colorLabel = COLORS.find((c) => c.id === n.color)?.label || n.color;
      lines.push(
        `- **“${n.text}”** (${colorLabel}${n.tag ? ` · #${n.tag}` : ""}) — ${n.note}`
      );
    }
    return lines.join("\n");
  }

  async function copyExport() {
    await navigator.clipboard.writeText(exportMarkdown());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <StudyToolShell
      title="Reading highlights"
      description="Paste a passage, select phrases in the preview, color-code with tags, filter notes, and export markdown — all local to this browser."
      tip="Select text in the highlighted preview (mouseup) to fill the selection field, or paste from the passage box."
    >
      <InlineNotice message={notice} onDismiss={() => setNotice("")} />
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["read", "Read & mark"],
            ["notes", `Notes (${notes.length})`],
            ["export", "Export"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={tab === id ? "btn-primary text-sm" : "btn-secondary text-sm"}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "read" ? (
        <div className="grid gap-4 lg:grid-cols-2">
          <label className="block text-sm">
            Passage
            <textarea
              className="input mt-1 min-h-[16rem]"
              value={passage}
              onChange={(e) => setPassage(e.target.value)}
            />
          </label>
          <div className="space-y-3">
            <div
              ref={renderRef}
              className="card min-h-[10rem] cursor-text text-sm leading-relaxed text-slate-800"
              dangerouslySetInnerHTML={{ __html: rendered }}
              onMouseUp={captureSelectionFromPassage}
            />
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className={
                  colorFilter === "all"
                    ? "rounded-lg bg-brand-600 px-2 py-1 text-xs font-semibold text-white"
                    : "rounded-lg bg-white px-2 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
                }
                onClick={() => setColorFilter("all")}
              >
                All colors
              </button>
              {COLORS.map((c) => (
                <button
                  key={`f-${c.id}`}
                  type="button"
                  onClick={() => setColorFilter(c.id)}
                  className={`rounded-lg px-2 py-1 text-xs font-semibold ${c.className} ${
                    colorFilter === c.id ? "ring-2 ring-slate-800" : ""
                  }`}
                >
                  Filter {c.label}
                </button>
              ))}
            </div>
            <label className="block text-sm">
              Selected phrase
              <input
                className="input mt-1"
                value={selection}
                onChange={(e) => setSelection(e.target.value)}
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setColor(c.id)}
                  className={`rounded-lg px-2 py-1 text-xs font-semibold ${c.className} ${
                    color === c.id ? "ring-2 ring-slate-800" : ""
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <label className="block text-sm">
                Margin note
                <input className="input mt-1" value={note} onChange={(e) => setNote(e.target.value)} />
              </label>
              <label className="block text-sm">
                Tag
                <input
                  className="input mt-1"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="claim, vocab…"
                />
              </label>
            </div>
            <button type="button" className="btn-primary" onClick={addHighlight}>
              Add highlight
            </button>
          </div>
        </div>
      ) : null}

      {tab === "notes" ? (
        <div className="space-y-3">
          <input
            className="input max-w-md"
            placeholder="Search notes…"
            value={noteQuery}
            onChange={(e) => setNoteQuery(e.target.value)}
          />
          <ul className="space-y-2">
            {filteredNotes.map((n) => (
              <li key={n.id} className="card flex flex-wrap items-start justify-between gap-2 text-sm">
                <div>
                  <p className="font-medium">“{n.text}”</p>
                  <p className="text-xs text-slate-600">
                    {n.note}
                    {n.tag ? ` · #${n.tag}` : ""} · {COLORS.find((c) => c.id === n.color)?.label}
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-700"
                  onClick={() => setNotes((prev) => prev.filter((x) => x.id !== n.id))}
                >
                  Delete
                </button>
              </li>
            ))}
            {!filteredNotes.length ? (
              <li className="card text-sm text-slate-500">No matching notes.</li>
            ) : null}
          </ul>
        </div>
      ) : null}

      {tab === "export" ? (
        <div className="card space-y-3">
          <p className="text-sm text-slate-600">
            {notes.length} highlight{notes.length === 1 ? "" : "s"} · export includes full passage +
            notes.
          </p>
          <pre className="max-h-64 overflow-auto rounded-xl bg-slate-900 p-3 text-xs text-slate-100">
            {exportMarkdown()}
          </pre>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-primary" onClick={() => void copyExport()}>
              {copied ? "Copied" : "Copy markdown"}
            </button>
            <button
              type="button"
              className="btn-ghost text-sm"
              onClick={() => {
                setNotes([]);
              }}
            >
              Clear all highlights
            </button>
          </div>
        </div>
      ) : null}
    </StudyToolShell>
  );
}
