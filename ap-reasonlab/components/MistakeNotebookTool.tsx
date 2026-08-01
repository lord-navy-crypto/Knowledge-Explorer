"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Mistake = {
  id: string;
  subject: string;
  question: string;
  mistake: string;
  fix: string;
  createdAt: number;
};

const KEY = "ke-mistake-notebook-v1";

export default function MistakeNotebookTool() {
  const [items, setItems] = useState<Mistake[]>([]);
  const [subject, setSubject] = useState("AP Physics");
  const [question, setQuestion] = useState("");
  const [mistake, setMistake] = useState("");
  const [fix, setFix] = useState("");
  const [filter, setFilter] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw) as Mistake[]);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, mounted]);

  const visible = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) =>
      `${item.subject} ${item.question} ${item.mistake} ${item.fix}`.toLowerCase().includes(q)
    );
  }, [items, filter]);

  function addItem(event: React.FormEvent) {
    event.preventDefault();
    if (!question.trim() || !mistake.trim()) return;
    setItems((prev) => [
      {
        id: `m-${Date.now()}`,
        subject: subject.trim() || "General",
        question: question.trim(),
        mistake: mistake.trim(),
        fix: fix.trim(),
        createdAt: Date.now(),
      },
      ...prev,
    ]);
    setQuestion("");
    setMistake("");
    setFix("");
  }

  return (
    <StudyToolShell
      title="Mistake notebook"
      description="Log wrong answers, what you missed, and the correct approach. Stored only in this browser."
      tip="Review before exams — filter by subject. Export by copying text if you want a backup."
    >
      <form onSubmit={addItem} className="card space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="font-medium">Subject</span>
            <input className="input mt-1" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </label>
          <label className="block text-sm">
            <span className="font-medium">Filter</span>
            <input
              className="input mt-1"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search notebook…"
            />
          </label>
        </div>
        <label className="block text-sm">
          <span className="font-medium">Question / prompt</span>
          <textarea className="input mt-1 min-h-[5rem]" value={question} onChange={(e) => setQuestion(e.target.value)} required />
        </label>
        <label className="block text-sm">
          <span className="font-medium">What I got wrong</span>
          <textarea className="input mt-1 min-h-[4rem]" value={mistake} onChange={(e) => setMistake(e.target.value)} required />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Correct idea / fix</span>
          <textarea className="input mt-1 min-h-[4rem]" value={fix} onChange={(e) => setFix(e.target.value)} />
        </label>
        <button type="submit" className="btn-primary">
          Save mistake
        </button>
      </form>

      <ul className="space-y-3">
        {visible.map((item) => (
          <li key={item.id} className="card space-y-2">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{item.subject}</p>
              <button
                type="button"
                className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-700"
                onClick={() => setItems((prev) => prev.filter((x) => x.id !== item.id))}
              >
                Delete
              </button>
            </div>
            <p className="text-sm font-semibold text-slate-900">{item.question}</p>
            <p className="text-sm text-rose-800">
              <span className="font-medium">Miss:</span> {item.mistake}
            </p>
            {item.fix ? (
              <p className="text-sm text-emerald-800">
                <span className="font-medium">Fix:</span> {item.fix}
              </p>
            ) : null}
          </li>
        ))}
        {!visible.length ? <li className="card text-sm text-slate-500">No mistakes logged yet.</li> : null}
      </ul>
    </StudyToolShell>
  );
}
