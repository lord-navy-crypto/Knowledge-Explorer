"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Exam = { id: string; name: string; date: string; note: string };

const KEY = "ke-exam-countdown-v1";

function daysUntil(dateStr: string): number | null {
  const t = new Date(`${dateStr}T12:00:00`).getTime();
  if (!Number.isFinite(t)) return null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round((t - today) / 86_400_000);
}

export default function ExamCountdownTool() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setExams(JSON.parse(raw) as Exam[]);
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
      [...exams].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [exams]
  );

  function addExam(event: React.FormEvent) {
    event.preventDefault();
    if (!name.trim() || !date) return;
    setExams((prev) => [
      ...prev,
      { id: `e-${Date.now()}`, name: name.trim(), date, note: note.trim() },
    ]);
    setName("");
    setNote("");
  }

  return (
    <StudyToolShell
      title="Exam countdown"
      description="Track upcoming exam dates and see how many days remain. Saved only in this browser."
      tip="Add AP exam day, midterms, or language test dates. Delete after the exam."
    >
      <form onSubmit={addExam} className="card grid gap-3 sm:grid-cols-2">
        <label className="block text-sm sm:col-span-1">
          <span className="font-medium">Exam name</span>
          <input className="input mt-1" value={name} onChange={(e) => setName(e.target.value)} required placeholder="AP Calculus AB" />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Date</span>
          <input className="input mt-1" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium">Note (optional)</span>
          <input className="input mt-1" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Bring calculator · Unit 5–8" />
        </label>
        <button type="submit" className="btn-primary sm:col-span-2 sm:w-fit">
          Add exam
        </button>
      </form>

      <ul className="grid gap-3 sm:grid-cols-2">
        {sorted.map((exam) => {
          const d = daysUntil(exam.date);
          const label =
            d == null ? "—" : d > 0 ? `${d} day${d === 1 ? "" : "s"} left` : d === 0 ? "Today!" : `${Math.abs(d)} day${Math.abs(d) === 1 ? "" : "s"} ago`;
          return (
            <li key={exam.id} className="card space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-slate-900">{exam.name}</h3>
                  <p className="text-xs text-slate-500">{exam.date}</p>
                </div>
                <button
                  type="button"
                  className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-700"
                  onClick={() => setExams((prev) => prev.filter((x) => x.id !== exam.id))}
                >
                  Delete
                </button>
              </div>
              <p
                className={`text-2xl font-bold tabular-nums ${
                  d != null && d <= 7 && d >= 0 ? "text-rose-700" : "text-brand-700"
                }`}
              >
                {label}
              </p>
              {exam.note ? <p className="text-sm text-slate-600">{exam.note}</p> : null}
            </li>
          );
        })}
        {!sorted.length ? <li className="card text-sm text-slate-500 sm:col-span-2">No exams yet.</li> : null}
      </ul>
    </StudyToolShell>
  );
}
