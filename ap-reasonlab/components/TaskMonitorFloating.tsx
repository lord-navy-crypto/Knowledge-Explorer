"use client";

import { useEffect, useMemo, useState } from "react";
import { useTaskMonitor } from "@/components/TaskMonitorProvider";

function elapsedLabel(startedAt: number, finishedAt?: number) {
  const ms = Math.max(0, (finishedAt || Date.now()) - startedAt);
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  return `${minutes}m ${seconds % 60}s`;
}

export default function TaskMonitorFloating() {
  const { tasks, activeCount, dismissTask, clearFinished } = useTaskMonitor();
  const [open, setOpen] = useState(false);
  const [, setTick] = useState(0);

  useEffect(() => {
    if (activeCount > 0) setOpen(true);
  }, [activeCount]);

  useEffect(() => {
    if (!open || tasks.length === 0) return;
    const timer = window.setInterval(() => setTick((value) => value + 1), 1_000);
    return () => window.clearInterval(timer);
  }, [open, tasks.length]);

  const visibleTasks = useMemo(() => tasks.slice(0, 8), [tasks]);

  return (
    <div className="fixed right-3 top-24 z-[90] md:right-6 md:top-28 print:hidden">
      {!open ? (
        <button
          type="button"
          className="relative rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-xl hover:border-emerald-300 hover:text-emerald-800"
          onClick={() => setOpen(true)}
        >
          Tasks
          {activeCount > 0 ? (
            <span className="ml-2 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] text-white">{activeCount}</span>
          ) : null}
        </button>
      ) : (
        <section className="w-[min(88vw,23rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50/90 px-3 py-2.5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Live task monitor</p>
              <p className="text-sm font-semibold text-slate-900">{activeCount ? `${activeCount} active task${activeCount === 1 ? "" : "s"}` : "No active tasks"}</p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="text-[11px] font-medium text-slate-500 hover:text-slate-900" onClick={clearFinished}>Clear done</button>
              <button type="button" className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600" onClick={() => setOpen(false)}>Hide</button>
            </div>
          </div>

          <div className="max-h-[min(58vh,30rem)] space-y-2 overflow-y-auto p-2.5">
            {visibleTasks.length === 0 ? (
              <p className="px-2 py-8 text-center text-xs text-slate-500">Tasks will appear here when an action starts.</p>
            ) : visibleTasks.map((task) => {
              const isError = task.status === "error";
              const isStalled = task.status === "stalled";
              const isDone = task.status === "success";
              return (
                <article key={task.id} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">{task.title}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-400">{task.source || "Knowledge Explorer"} · {elapsedLabel(task.startedAt, task.finishedAt)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold ${isError ? "text-rose-700" : isStalled ? "text-amber-700" : isDone ? "text-emerald-700" : "text-slate-700"}`}>
                        {isError ? "Failed" : isStalled ? "Stalled?" : isDone ? "Done" : `${task.progress}%`}
                      </span>
                      {(isDone || isError) ? (
                        <button type="button" className="text-xs text-slate-400 hover:text-slate-800" aria-label={`Dismiss ${task.title}`} onClick={() => dismissTask(task.id)}>×</button>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full transition-[width] duration-300 ${isError ? "bg-rose-500" : isStalled ? "bg-amber-500" : "bg-emerald-500"}`}
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                  {task.detail ? <p className={`mt-2 text-xs leading-5 ${isError ? "text-rose-700" : isStalled ? "text-amber-800" : "text-slate-600"}`}>{task.detail}</p> : null}
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
