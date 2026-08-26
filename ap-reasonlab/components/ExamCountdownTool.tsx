"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type ChecklistItem = { id: string; text: string; done: boolean };

type Exam = {
  id: string;
  name: string;
  date: string;
  note: string;
  remindDays: number;
  checklist: ChecklistItem[];
};

type Tab = "list" | "prep" | "presets";

const KEY = "ke-exam-countdown-v1";

const PRESETS: Array<{ name: string; note: string; offsetDays: number }> = [
  { name: "AP Calculus AB", note: "Graphing calculator · FRQ practice", offsetDays: 45 },
  { name: "AP Physics 1", note: "Equation sheet · lab skills", offsetDays: 50 },
  { name: "AP Chemistry", note: "Periodic trends · FRQ stoichiometry", offsetDays: 55 },
  { name: "SAT", note: "Reading / Writing + Math", offsetDays: 30 },
  { name: "TOEFL", note: "Speaking timing · listening notes", offsetDays: 21 },
];

function daysUntil(dateStr: string): number | null {
  const t = new Date(`${dateStr}T12:00:00`).getTime();
  if (!Number.isFinite(t)) return null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round((t - today) / 86_400_000);
}

function offsetDate(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function normalizeExam(e: Exam & { remindDays?: number; checklist?: ChecklistItem[] }): Exam {
  return {
    ...e,
    remindDays: typeof e.remindDays === "number" ? e.remindDays : 7,
    checklist: Array.isArray(e.checklist) ? e.checklist : [],
  };
}

export default function ExamCountdownTool() {
  const [tab, setTab] = useState<Tab>("list");
  const [exams, setExams] = useState<Exam[]>([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [remindDays, setRemindDays] = useState(7);
  const [hidePast, setHidePast] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const [prepId, setPrepId] = useState<string | null>(null);
  const [checkText, setCheckText] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Exam[];
        setExams(parsed.map(normalizeExam));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(KEY, JSON.stringify(exams));
  }, [exams, mounted]);

  const sorted = useMemo(
    () =>
      [...exams]
        .filter((e) => {
          if (!hidePast) return true;
          const d = daysUntil(e.date);
          return d == null || d >= 0;
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [exams, hidePast]
  );

  const prepExam = exams.find((e) => e.id === prepId) || exams[0] || null;

  function clearForm() {
    setName("");
    setNote("");
    setRemindDays(7);
    setEditId(null);
  }

  function addExam(event: React.FormEvent) {
    event.preventDefault();
    if (!name.trim() || !date) return;
    if (editId) {
      setExams((prev) =>
        prev.map((e) =>
          e.id === editId
            ? { ...e, name: name.trim(), date, note: note.trim(), remindDays }
            : e
        )
      );
      clearForm();
      return;
    }
    setExams((prev) => [
      ...prev,
      {
        id: `e-${Date.now()}`,
        name: name.trim(),
        date,
        note: note.trim(),
        remindDays,
        checklist: [],
      },
    ]);
    clearForm();
  }

  function startEdit(exam: Exam) {
    setEditId(exam.id);
    setName(exam.name);
    setDate(exam.date);
    setNote(exam.note);
    setRemindDays(exam.remindDays);
    setTab("list");
  }

  function addPreset(p: (typeof PRESETS)[number]) {
    setExams((prev) => [
      ...prev,
      {
        id: `e-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
        name: p.name,
        date: offsetDate(p.offsetDays),
        note: p.note,
        remindDays: 7,
        checklist: [
          { id: `c-${Date.now()}`, text: "Skim syllabus / units", done: false },
          { id: `c-${Date.now() + 1}`, text: "Do one timed practice set", done: false },
        ],
      },
    ]);
    setTab("list");
  }

  function addCheckItem(event: React.FormEvent) {
    event.preventDefault();
    if (!prepExam || !checkText.trim()) return;
    const id = prepExam.id;
    setExams((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              checklist: [
                ...e.checklist,
                { id: `c-${Date.now()}`, text: checkText.trim(), done: false },
              ],
            }
          : e
      )
    );
    setCheckText("");
  }

  return (
    <StudyToolShell
      title="Exam countdown"
      description="Track exam dates with reminder windows, prep checklists, and quick presets. Saved only in this browser."
      tip="Hide past exams, set remind-N-days, and tick prep tasks as you go."
    >
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["list", "Countdowns"],
            ["prep", "Prep checklist"],
            ["presets", "Presets"],
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

      {tab === "list" ? (
        <>
          <form onSubmit={addExam} className="card grid gap-3 sm:grid-cols-2">
            <label className="block text-sm sm:col-span-1">
              <span className="font-medium">Exam name</span>
              <input
                className="input mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="AP Calculus AB"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">Date</span>
              <input
                className="input mt-1"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">Remind when ≤ N days</span>
              <input
                className="input mt-1"
                type="number"
                min={1}
                max={60}
                value={remindDays}
                onChange={(e) => setRemindDays(Math.max(1, Number(e.target.value) || 7))}
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium">Note (optional)</span>
              <input
                className="input mt-1"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Bring calculator · Unit 5–8"
              />
            </label>
            <div className="flex flex-wrap gap-2 sm:col-span-2">
              <button type="submit" className="btn-primary sm:w-fit">
                {editId ? "Update exam" : "Add exam"}
              </button>
              {editId ? (
                <button type="button" className="btn-ghost" onClick={clearForm}>
                  Cancel
                </button>
              ) : null}
              <label className="ml-auto flex items-center gap-2 self-center text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={hidePast}
                  onChange={(e) => setHidePast(e.target.checked)}
                />
                Hide past exams
              </label>
            </div>
          </form>

          <ul className="grid gap-3 sm:grid-cols-2">
            {sorted.map((exam) => {
              const d = daysUntil(exam.date);
              const label =
                d == null
                  ? "—"
                  : d > 0
                    ? `${d} day${d === 1 ? "" : "s"} left`
                    : d === 0
                      ? "Today!"
                      : `${Math.abs(d)} day${Math.abs(d) === 1 ? "" : "s"} ago`;
              const urgent = d != null && d >= 0 && d <= exam.remindDays;
              const doneCount = exam.checklist.filter((c) => c.done).length;
              return (
                <li key={exam.id} className="card space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-900">{exam.name}</h3>
                      <p className="text-xs text-slate-500">{exam.date}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <button
                        type="button"
                        className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-700"
                        onClick={() => startEdit(exam)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-700"
                        onClick={() => setExams((prev) => prev.filter((x) => x.id !== exam.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p
                    className={`text-2xl font-bold tabular-nums ${
                      urgent ? "text-rose-700" : "text-brand-700"
                    }`}
                  >
                    {label}
                  </p>
                  {urgent ? (
                    <p className="text-xs font-semibold text-rose-700">
                      Inside {exam.remindDays}-day reminder window
                    </p>
                  ) : null}
                  {exam.note ? <p className="text-sm text-slate-600">{exam.note}</p> : null}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <span>
                      Prep {doneCount}/{exam.checklist.length}
                    </span>
                    <button
                      type="button"
                      className="font-semibold text-brand-700 hover:underline"
                      onClick={() => {
                        setPrepId(exam.id);
                        setTab("prep");
                      }}
                    >
                      Open checklist →
                    </button>
                  </div>
                </li>
              );
            })}
            {!sorted.length ? (
              <li className="card text-sm text-slate-500 sm:col-span-2">No exams yet.</li>
            ) : null}
          </ul>
        </>
      ) : null}

      {tab === "prep" ? (
        <div className="space-y-4">
          {!exams.length ? (
            <div className="card text-sm text-slate-500">Add an exam first.</div>
          ) : (
            <>
              <label className="block text-sm">
                Exam
                <select
                  className="input mt-1"
                  value={prepExam?.id || ""}
                  onChange={(e) => setPrepId(e.target.value)}
                >
                  {exams.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name} · {e.date}
                    </option>
                  ))}
                </select>
              </label>
              {prepExam ? (
                <>
                  <form onSubmit={addCheckItem} className="flex flex-wrap gap-2">
                    <input
                      className="input min-w-[12rem] flex-1"
                      value={checkText}
                      onChange={(e) => setCheckText(e.target.value)}
                      placeholder="Add a prep task…"
                    />
                    <button type="submit" className="btn-primary">
                      Add task
                    </button>
                  </form>
                  <ul className="space-y-2">
                    {prepExam.checklist.map((item) => (
                      <li
                        key={item.id}
                        className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                      >
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={item.done}
                            onChange={() =>
                              setExams((prev) =>
                                prev.map((e) =>
                                  e.id === prepExam.id
                                    ? {
                                        ...e,
                                        checklist: e.checklist.map((c) =>
                                          c.id === item.id ? { ...c, done: !c.done } : c
                                        ),
                                      }
                                    : e
                                )
                              )
                            }
                          />
                          <span className={item.done ? "text-slate-400 line-through" : ""}>
                            {item.text}
                          </span>
                        </label>
                        <button
                          type="button"
                          className="text-[10px] font-semibold text-red-700"
                          onClick={() =>
                            setExams((prev) =>
                              prev.map((e) =>
                                e.id === prepExam.id
                                  ? {
                                      ...e,
                                      checklist: e.checklist.filter((c) => c.id !== item.id),
                                    }
                                  : e
                              )
                            )
                          }
                        >
                          Delete
                        </button>
                      </li>
                    ))}
                    {!prepExam.checklist.length ? (
                      <li className="card text-sm text-slate-500">No prep tasks yet.</li>
                    ) : null}
                  </ul>
                </>
              ) : null}
            </>
          )}
        </div>
      ) : null}

      {tab === "presets" ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {PRESETS.map((p) => (
            <li key={p.name} className="card space-y-2">
              <h3 className="font-semibold text-slate-900">{p.name}</h3>
              <p className="text-sm text-slate-600">{p.note}</p>
              <p className="text-xs text-slate-500">Suggested date: ~{p.offsetDays} days from today</p>
              <button type="button" className="btn-secondary text-sm" onClick={() => addPreset(p)}>
                Add with starter checklist
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </StudyToolShell>
  );
}
