"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type PlannerTask = {
  id: string;
  title: string;
  done: boolean;
};

const STORAGE_KEY = "knowledge-explorer-productivity-tasks-v1";

const TOOL_GROUPS = [
  {
    id: "plan",
    eyebrow: "Plan & focus",
    title: "Plan the day",
    description: "Turn a busy day into a few clear next steps.",
    tools: [
      { title: "Focus desk", detail: "Pomodoro sessions and focus sounds", href: "/tools/focus-desk" },
      { title: "Exam countdown", detail: "Keep important dates in view", href: "/tools/exam-countdown" },
      { title: "Mistake notebook", detail: "Record errors and what you learned", href: "/tools/mistake-notebook" },
    ],
  },
  {
    id: "memory",
    eyebrow: "Remember & practise",
    title: "Build knowledge",
    description: "Review vocabulary, concepts, and material you want to retain.",
    tools: [
      { title: "Flashcards", detail: "Make quick flip cards from pasted notes", href: "/tools/flashcards" },
      { title: "Vocabulary book", detail: "Save words and self-test in your browser", href: "/tools/vocab-book" },
      { title: "Dictation", detail: "Listen, type, and check your accuracy", href: "/tools/dictation" },
      { title: "Reading highlights", detail: "Mark passages and add private notes", href: "/tools/reading-highlight" },
    ],
  },
  {
    id: "documents",
    eyebrow: "Write & organise",
    title: "Documents and writing",
    description: "Move from a rough draft to a clean, shareable document.",
    tools: [
      { title: "Write & convert", detail: "A guided draft-to-export workflow", href: "/tools/write-convert" },
      { title: "Dual-column editor", detail: "Write Markdown with a live preview", href: "/tools/dual" },
      { title: "Word count", detail: "Count words, characters, and reading time", href: "/tools/word-count" },
      { title: "PDF desk", detail: "Merge, split, rotate, and manage PDFs", href: "/tools/pdf-tools" },
      { title: "Word to PDF", detail: "Prepare a Word document for PDF export", href: "/tools/word-pdf" },
      { title: "Markdown to PDF", detail: "Preview notes and export a printable copy", href: "/tools/markdown-pdf" },
    ],
  },
  {
    id: "quick",
    eyebrow: "Quick utilities",
    title: "Small tools, less friction",
    description: "Open a useful utility without searching through a long list.",
    tools: [
      { title: "Calculator & graph", detail: "Calculation and graphing for STEM work", href: "/hints?tool=calculator" },
      { title: "Units & constants", detail: "Convert units and check common constants", href: "/tools/units" },
      { title: "QR code", detail: "Create a QR code from a link or short text", href: "/tools/qr-code" },
      { title: "JSON formatter", detail: "Validate and format JSON locally", href: "/tools/json-formatter" },
      { title: "Image desk", detail: "Compress, convert, crop, or annotate images", href: "/tools/image-compress" },
      { title: "External tools", detail: "Browse curated external study resources", href: "/tools/external" },
    ],
  },
] as const;

export default function ProductivityHub() {
  const [tasks, setTasks] = useState<PlannerTask[]>([]);
  const [draft, setDraft] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const safeTasks = parsed.filter((item): item is PlannerTask => {
            if (!item || typeof item !== "object") return false;
            const candidate = item as Record<string, unknown>;
            return (
              typeof candidate.id === "string" &&
              typeof candidate.title === "string" &&
              typeof candidate.done === "boolean"
            );
          });
          setTasks(safeTasks.slice(0, 100));
        }
      }
    } catch {
      // Keep the desk usable when browser storage is unavailable or invalid.
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // The planner still works for the current page session.
    }
  }, [tasks, ready]);

  const completedCount = tasks.filter((task) => task.done).length;
  const progress = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0;

  function addTask() {
    const title = draft.trim();
    if (!title) return;
    setTasks((current) =>
      [
        {
          id: "task-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8),
          title,
          done: false,
        },
        ...current,
      ].slice(0, 100)
    );
    setDraft("");
  }

  function toggleTask(id: string) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  function removeTask(id: string) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-brand-200 bg-brand-50/50 px-5 py-7 sm:px-8 sm:py-9">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
          Knowledge Explorer · Experimental branch
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Daily Desk
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          A calm home for study planning, quick office jobs, vocabulary review, writing, and everyday utilities.
          Start with the tools already in Knowledge Explorer; add new modules only when they solve a real need.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-brand-800">Local-first planner</span>
          <span className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-brand-800">Existing tools reused</span>
          <span className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-brand-800">No main-branch changes</span>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">Quick planner</p>
              <h2 className="mt-1 text-xl font-bold text-slate-900">What do you want to get done?</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">Add a short task, then tick it off when it is done.</p>
            </div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-right">
              <p className="text-2xl font-bold tabular-nums text-slate-900">{completedCount}/{tasks.length}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">completed</p>
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Task completion">
            <div className="h-full rounded-full bg-brand-600 transition-[width]" style={{ width: progress + "%" }} />
          </div>

          <form
            className="mt-5 flex flex-col gap-2 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              addTask();
            }}
          >
            <label className="sr-only" htmlFor="daily-task">New task</label>
            <input
              id="daily-task"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              maxLength={140}
              placeholder="e.g. Review 15 vocabulary words"
              className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
            <button
              type="submit"
              disabled={!draft.trim()}
              className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-45"
            >
              Add task
            </button>
          </form>

          <div className="mt-4 space-y-2">
            {!ready ? (
              <p className="rounded-xl bg-slate-50 px-4 py-5 text-sm text-slate-500">Loading your saved tasks…</p>
            ) : tasks.length === 0 ? (
              <p className="rounded-xl border border-dashed border-slate-300 px-4 py-6 text-center text-sm leading-6 text-slate-500">
                Your list is empty. Add one small, achievable task to get started.
              </p>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 rounded-xl border border-slate-200 px-3.5 py-3">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    aria-label={"Mark " + task.title + " as " + (task.done ? "not done" : "done")}
                    className="mt-1 h-4 w-4 shrink-0 accent-slate-700"
                  />
                  <span className={"min-w-0 flex-1 break-words text-sm leading-6 " + (task.done ? "text-slate-400 line-through" : "text-slate-800")}>
                    {task.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeTask(task.id)}
                    aria-label={"Delete task: " + task.title}
                    className="shrink-0 rounded-lg px-2 py-1 text-xs font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {completedCount > 0 ? (
            <button
              type="button"
              onClick={() => setTasks((current) => current.filter((task) => !task.done))}
              className="mt-4 text-xs font-bold text-brand-700 underline decoration-brand-200 underline-offset-4 hover:text-brand-900"
            >
              Clear completed tasks
            </button>
          ) : null}

          <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
            Privacy note: this list is stored in this browser only. It is not uploaded or synced to an account.
          </p>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">A simple workflow</p>
          <h2 className="mt-1 text-xl font-bold text-slate-900">Plan → Focus → Review</h2>
          <ol className="mt-4 space-y-4">
            <li className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-brand-800 ring-1 ring-slate-200">1</span>
              <div><p className="text-sm font-semibold text-slate-800">Choose one next step</p><p className="mt-1 text-sm leading-6 text-slate-600">Keep the task list small enough to act on.</p></div>
            </li>
            <li className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-brand-800 ring-1 ring-slate-200">2</span>
              <div><p className="text-sm font-semibold text-slate-800">Work in a focused session</p><p className="mt-1 text-sm leading-6 text-slate-600">Open the Focus Desk for a timer and optional background sounds.</p></div>
            </li>
            <li className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-brand-800 ring-1 ring-slate-200">3</span>
              <div><p className="text-sm font-semibold text-slate-800">Capture what you learned</p><p className="mt-1 text-sm leading-6 text-slate-600">Use flashcards, the vocabulary book, or the mistake notebook for review.</p></div>
            </li>
          </ol>
          <Link
            href="/tools/focus-desk"
            prefetch={false}
            className="mt-6 inline-flex rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm font-bold text-brand-800 transition hover:border-brand-400 hover:bg-brand-50"
          >
            Open Focus Desk →
          </Link>
        </aside>
      </section>

      <section className="space-y-5">
        <div className="border-b border-slate-200 pb-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">Tool collection</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-slate-900">Your everyday toolkit</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
            These cards reuse existing Knowledge Explorer routes instead of creating duplicate versions of tools that already work.
          </p>
        </div>

        <div className="space-y-7">
          {TOOL_GROUPS.map((group) => (
            <section key={group.id} className="space-y-3" aria-labelledby={"group-" + group.id}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{group.eyebrow}</p>
                <h3 id={"group-" + group.id} className="mt-1 text-lg font-bold text-slate-900">{group.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{group.description}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {group.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    prefetch={false}
                    className="group flex min-h-28 flex-col rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-300 hover:bg-brand-50/30"
                  >
                    <span className="font-semibold text-slate-900 group-hover:text-brand-800">{tool.title}</span>
                    <span className="mt-1 text-sm leading-6 text-slate-600">{tool.detail}</span>
                    <span className="mt-auto pt-3 text-xs font-bold text-brand-700">Open tool →</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
