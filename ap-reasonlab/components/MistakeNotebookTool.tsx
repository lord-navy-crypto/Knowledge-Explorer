"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Severity = "low" | "med" | "high";

type Mistake = {
  id: string;
  subject: string;
  question: string;
  mistake: string;
  fix: string;
  tag: string;
  severity: Severity;
  reviewed: boolean;
  createdAt: number;
};

type Tab = "log" | "review" | "export";

const KEY = "ke-mistake-notebook-v1";

function normalize(item: Mistake & { tag?: string; severity?: Severity; reviewed?: boolean }): Mistake {
  return {
    ...item,
    tag: item.tag || "",
    severity: item.severity || "med",
    reviewed: Boolean(item.reviewed),
  };
}

export default function MistakeNotebookTool() {
  const [tab, setTab] = useState<Tab>("log");
  const [items, setItems] = useState<Mistake[]>([]);
  const [subject, setSubject] = useState("AP Physics");
  const [question, setQuestion] = useState("");
  const [mistake, setMistake] = useState("");
  const [fix, setFix] = useState("");
  const [tag, setTag] = useState("");
  const [severity, setSeverity] = useState<Severity>("med");
  const [filter, setFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [showReviewed, setShowReviewed] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewFlipped, setReviewFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Mistake[];
        setItems(parsed.map(normalize));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, mounted]);

  const subjects = useMemo(() => {
    const set = new Set(items.map((i) => i.subject).filter(Boolean));
    return ["all", ...Array.from(set).sort()];
  }, [items]);

  const visible = useMemo(() => {
    const q = filter.trim().toLowerCase();
    return items.filter((item) => {
      if (subjectFilter !== "all" && item.subject !== subjectFilter) return false;
      if (!showReviewed && item.reviewed) return false;
      if (!q) return true;
      return `${item.subject} ${item.question} ${item.mistake} ${item.fix} ${item.tag}`
        .toLowerCase()
        .includes(q);
    });
  }, [items, filter, subjectFilter, showReviewed]);

  const reviewQueue = useMemo(
    () => items.filter((i) => !i.reviewed).sort((a, b) => {
      const rank = { high: 0, med: 1, low: 2 };
      return rank[a.severity] - rank[b.severity] || b.createdAt - a.createdAt;
    }),
    [items]
  );

  const reviewCard = reviewQueue[reviewIndex] || reviewQueue[0];

  const bySubject = useMemo(() => {
    const map = new Map<string, number>();
    items.forEach((i) => map.set(i.subject, (map.get(i.subject) || 0) + 1));
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [items]);

  function clearForm() {
    setQuestion("");
    setMistake("");
    setFix("");
    setTag("");
    setSeverity("med");
    setEditId(null);
  }

  function addItem(event: React.FormEvent) {
    event.preventDefault();
    if (!question.trim() || !mistake.trim()) return;
    if (editId) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editId
            ? {
                ...item,
                subject: subject.trim() || "General",
                question: question.trim(),
                mistake: mistake.trim(),
                fix: fix.trim(),
                tag: tag.trim(),
                severity,
              }
            : item
        )
      );
      clearForm();
      return;
    }
    setItems((prev) => [
      {
        id: `m-${Date.now()}`,
        subject: subject.trim() || "General",
        question: question.trim(),
        mistake: mistake.trim(),
        fix: fix.trim(),
        tag: tag.trim(),
        severity,
        reviewed: false,
        createdAt: Date.now(),
      },
      ...prev,
    ]);
    clearForm();
  }

  function startEdit(item: Mistake) {
    setEditId(item.id);
    setSubject(item.subject);
    setQuestion(item.question);
    setMistake(item.mistake);
    setFix(item.fix);
    setTag(item.tag);
    setSeverity(item.severity);
    setTab("log");
  }

  function exportMarkdown(): string {
    return items
      .map(
        (i) =>
          `## ${i.subject}${i.tag ? ` · #${i.tag}` : ""} (${i.severity})\n` +
          `**Q:** ${i.question}\n\n**Miss:** ${i.mistake}\n\n**Fix:** ${i.fix || "—"}\n\n` +
          `_Reviewed: ${i.reviewed ? "yes" : "no"}_ · ${new Date(i.createdAt).toLocaleDateString()}\n`
      )
      .join("\n---\n\n");
  }

  async function copyExport() {
    await navigator.clipboard.writeText(exportMarkdown() || "(empty notebook)");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  const severityClass: Record<Severity, string> = {
    low: "bg-slate-100 text-slate-700",
    med: "bg-amber-100 text-amber-900",
    high: "bg-rose-100 text-rose-800",
  };

  return (
    <StudyToolShell
      title="Mistake notebook"
      description="Log wrong answers with tags & severity, review unreviewed misses, and export markdown. Stored only in this browser."
      tip="Filter by subject, mark reviewed after you re-solve, export before exams."
    >
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["log", "Notebook"],
            ["review", `Review (${reviewQueue.length})`],
            ["export", "Export / stats"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={tab === id ? "btn-primary text-sm" : "btn-secondary text-sm"}
            onClick={() => {
              setTab(id);
              if (id === "review") {
                setReviewIndex(0);
                setReviewFlipped(false);
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "log" ? (
        <>
          <form onSubmit={addItem} className="card space-y-3">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="block text-sm">
                <span className="font-medium">Subject</span>
                <input className="input mt-1" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Tag</span>
                <input
                  className="input mt-1"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="kinematics, FRQ…"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Severity</span>
                <select
                  className="input mt-1"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value as Severity)}
                >
                  <option value="low">Low</option>
                  <option value="med">Medium</option>
                  <option value="high">High</option>
                </select>
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
              <textarea
                className="input mt-1 min-h-[5rem]"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">What I got wrong</span>
              <textarea
                className="input mt-1 min-h-[4rem]"
                value={mistake}
                onChange={(e) => setMistake(e.target.value)}
                required
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">Correct idea / fix</span>
              <textarea className="input mt-1 min-h-[4rem]" value={fix} onChange={(e) => setFix(e.target.value)} />
            </label>
            <div className="flex flex-wrap gap-2">
              <button type="submit" className="btn-primary">
                {editId ? "Update mistake" : "Save mistake"}
              </button>
              {editId ? (
                <button type="button" className="btn-ghost" onClick={clearForm}>
                  Cancel edit
                </button>
              ) : null}
            </div>
          </form>

          <div className="flex flex-wrap items-center gap-2">
            {subjects.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSubjectFilter(s)}
                className={
                  subjectFilter === s
                    ? "rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white"
                    : "rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
                }
              >
                {s === "all" ? "All subjects" : s}
              </button>
            ))}
            <label className="ml-auto flex items-center gap-2 text-xs text-slate-600">
              <input
                type="checkbox"
                checked={showReviewed}
                onChange={(e) => setShowReviewed(e.target.checked)}
              />
              Show reviewed
            </label>
          </div>

          <ul className="space-y-3">
            {visible.map((item) => (
              <li key={item.id} className="card space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                      {item.subject}
                    </p>
                    {item.tag ? (
                      <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">
                        #{item.tag}
                      </span>
                    ) : null}
                    <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${severityClass[item.severity]}`}>
                      {item.severity}
                    </span>
                    {item.reviewed ? (
                      <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                        reviewed
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <button
                      type="button"
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-700"
                      onClick={() =>
                        setItems((prev) =>
                          prev.map((x) => (x.id === item.id ? { ...x, reviewed: !x.reviewed } : x))
                        )
                      }
                    >
                      {item.reviewed ? "Unreview" : "Mark reviewed"}
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-700"
                      onClick={() => startEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-700"
                      onClick={() => setItems((prev) => prev.filter((x) => x.id !== item.id))}
                    >
                      Delete
                    </button>
                  </div>
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
        </>
      ) : null}

      {tab === "review" ? (
        <div className="space-y-4">
          {!reviewCard ? (
            <div className="card text-sm text-slate-600">All mistakes marked reviewed. Nice work.</div>
          ) : (
            <>
              <p className="text-sm text-slate-600">
                Unreviewed · {reviewIndex + 1}/{reviewQueue.length} · high severity first
              </p>
              <button
                type="button"
                className="card min-h-[12rem] w-full space-y-2 text-left"
                onClick={() => setReviewFlipped((v) => !v)}
              >
                <p className="text-xs font-semibold uppercase text-brand-700">{reviewCard.subject}</p>
                <p className="text-lg font-semibold text-slate-900">{reviewCard.question}</p>
                {reviewFlipped ? (
                  <>
                    <p className="text-sm text-rose-800">Miss: {reviewCard.mistake}</p>
                    <p className="text-sm text-emerald-800">Fix: {reviewCard.fix || "—"}</p>
                  </>
                ) : (
                  <p className="text-sm text-slate-500">Tap to reveal miss + fix</p>
                )}
              </button>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setReviewIndex((i) => (i - 1 + reviewQueue.length) % reviewQueue.length);
                    setReviewFlipped(false);
                  }}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    setReviewIndex((i) => (i + 1) % reviewQueue.length);
                    setReviewFlipped(false);
                  }}
                >
                  Next
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800"
                  onClick={() => {
                    const id = reviewCard.id;
                    setItems((prev) => prev.map((x) => (x.id === id ? { ...x, reviewed: true } : x)));
                    setReviewFlipped(false);
                    setReviewIndex(0);
                  }}
                >
                  Mark reviewed
                </button>
              </div>
            </>
          )}
        </div>
      ) : null}

      {tab === "export" ? (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="card">
              <p className="text-xs font-semibold uppercase text-slate-500">Total</p>
              <p className="mt-1 text-2xl font-bold tabular-nums">{items.length}</p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase text-slate-500">Unreviewed</p>
              <p className="mt-1 text-2xl font-bold tabular-nums text-rose-700">{reviewQueue.length}</p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase text-slate-500">High severity</p>
              <p className="mt-1 text-2xl font-bold tabular-nums">
                {items.filter((i) => i.severity === "high").length}
              </p>
            </div>
          </div>
          <ul className="card space-y-1 text-sm">
            <li className="font-semibold text-slate-800">By subject</li>
            {bySubject.map(([s, n]) => (
              <li key={s} className="flex justify-between text-slate-600">
                <span>{s}</span>
                <span className="tabular-nums">{n}</span>
              </li>
            ))}
            {!bySubject.length ? <li className="text-slate-500">No data yet.</li> : null}
          </ul>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-primary" onClick={() => void copyExport()}>
              {copied ? "Copied" : "Copy markdown export"}
            </button>
          </div>
        </div>
      ) : null}
    </StudyToolShell>
  );
}
