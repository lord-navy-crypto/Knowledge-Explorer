"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Note = { id: string; color: string; text: string; note: string };

const KEY = "ke-reading-highlight-v1";
const COLORS = [
  { id: "yellow", label: "Yellow", className: "bg-yellow-200" },
  { id: "green", label: "Green", className: "bg-emerald-200" },
  { id: "pink", label: "Pink", className: "bg-pink-200" },
  { id: "blue", label: "Blue", className: "bg-sky-200" },
];

export default function ReadingHighlightTool() {
  const [passage, setPassage] = useState(
    "Climate models suggest that rising greenhouse gas concentrations trap more heat in the atmosphere. This enhanced greenhouse effect is linked to higher average global temperatures, shifting precipitation patterns, and more frequent extreme weather events."
  );
  const [selection, setSelection] = useState("");
  const [color, setColor] = useState("yellow");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { passage?: string; notes?: Note[] };
        if (parsed.passage) setPassage(parsed.passage);
        if (parsed.notes) setNotes(parsed.notes);
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
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    if (!notes.length) return escapeHtml(passage).replace(/\n/g, "<br/>");
    // Highlight first occurrence of each note; escape all text first, then inject marks via placeholders.
    let html = escapeHtml(passage);
    const sorted = [...notes].sort((a, b) => b.text.length - a.text.length);
    for (const n of sorted) {
      const cls = COLORS.find((c) => c.id === n.color)?.className || "bg-yellow-200";
      const needle = escapeHtml(n.text);
      const idx = html.indexOf(needle);
      if (idx < 0) continue;
      const title = escapeHtml(n.note || "Highlight");
      html =
        html.slice(0, idx) +
        `<mark class="${cls} rounded px-0.5" title="${title}">${needle}</mark>` +
        html.slice(idx + needle.length);
    }
    return html.replace(/\n/g, "<br/>");
  }, [passage, notes]);

  function addHighlight() {
    const text = selection.trim();
    if (!text || !passage.includes(text)) {
      window.alert("Select text that appears in the passage (copy from the left box).");
      return;
    }
    setNotes((prev) => [
      { id: `h-${Date.now()}`, color, text, note: note.trim() || "Highlight" },
      ...prev,
    ]);
    setSelection("");
    setNote("");
  }

  return (
    <StudyToolShell
      title="Reading highlights"
      description="Paste a passage, mark key phrases with colors, and keep short margin notes — all local to this browser."
      tip="Copy a phrase from the passage into the selection field, pick a color, add an optional note."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm">
          Passage
          <textarea className="input mt-1 min-h-[16rem]" value={passage} onChange={(e) => setPassage(e.target.value)} />
        </label>
        <div className="space-y-3">
          <div
            className="card min-h-[10rem] text-sm leading-relaxed text-slate-800"
            dangerouslySetInnerHTML={{ __html: rendered }}
          />
          <label className="block text-sm">
            Selected phrase
            <input className="input mt-1" value={selection} onChange={(e) => setSelection(e.target.value)} />
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
          <label className="block text-sm">
            Margin note
            <input className="input mt-1" value={note} onChange={(e) => setNote(e.target.value)} />
          </label>
          <button type="button" className="btn-primary" onClick={addHighlight}>
            Add highlight
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {notes.map((n) => (
          <li key={n.id} className="card flex flex-wrap items-start justify-between gap-2 text-sm">
            <div>
              <p className="font-medium">“{n.text}”</p>
              <p className="text-xs text-slate-600">{n.note}</p>
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
      </ul>
    </StudyToolShell>
  );
}
