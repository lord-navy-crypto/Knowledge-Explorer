"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import RichContent from "@/components/RichContent";

type Card = { front: string; back: string; id: string };
type Tab = "study" | "edit" | "stats";
type Grade = "again" | "good";

const KEY = "ke-flashcards-v1";
const DEFAULT_RAW =
  "Newton's 2nd law | F_net = ma\nKinetic energy | (1/2)mv^2\nRecursion base case | The case that stops further recursive calls";

function parseCards(raw: string): Card[] {
  return raw
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, i) => {
      const parts = line.split("|");
      if (parts.length >= 2) {
        return {
          id: `c-${i}-${parts[0]!.trim().slice(0, 12)}`,
          front: parts[0]!.trim(),
          back: parts.slice(1).join("|").trim(),
        };
      }
      const dash = line.split(/\s[—–-]\s/);
      if (dash.length >= 2) {
        return {
          id: `c-${i}-${dash[0]!.trim().slice(0, 12)}`,
          front: dash[0]!.trim(),
          back: dash.slice(1).join(" - ").trim(),
        };
      }
      return { id: `c-${i}`, front: line, back: "(add answer after | )" };
    });
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

export default function FlashcardTool() {
  const [tab, setTab] = useState<Tab>("study");
  const [raw, setRaw] = useState(DEFAULT_RAW);
  const [mounted, setMounted] = useState(false);
  const [order, setOrder] = useState<number[]>([]);
  const [cursor, setCursor] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [queue, setQueue] = useState<number[] | null>(null);
  const [stats, setStats] = useState({ again: 0, good: 0, seen: 0 });

  const cards = useMemo(() => parseCards(raw), [raw]);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { raw?: string; stats?: typeof stats };
        if (parsed.raw) setRaw(parsed.raw);
        if (parsed.stats) setStats(parsed.stats);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(KEY, JSON.stringify({ raw, stats }));
  }, [raw, stats, mounted]);

  useEffect(() => {
    setOrder(cards.map((_, i) => i));
    setCursor(0);
    setFlipped(false);
    setQueue(null);
  }, [cards.length, raw]);

  const activeOrder = queue ?? order;
  const index = activeOrder[cursor] ?? 0;
  const card = cards[index];

  function go(delta: number) {
    if (!activeOrder.length) return;
    setCursor((prev) => (prev + delta + activeOrder.length) % activeOrder.length);
    setFlipped(false);
  }

  function shuffleDeck() {
    const next = shuffle(cards.map((_, i) => i));
    setOrder(next);
    setQueue(null);
    setCursor(0);
    setFlipped(false);
  }

  function startReview() {
    setQueue(shuffle(cards.map((_, i) => i)));
    setCursor(0);
    setFlipped(false);
    setTab("study");
  }

  function grade(g: Grade) {
    if (!card) return;
    setStats((s) => ({
      again: s.again + (g === "again" ? 1 : 0),
      good: s.good + (g === "good" ? 1 : 0),
      seen: s.seen + 1,
    }));
    if (!queue) {
      go(1);
      return;
    }
    if (g === "again") {
      // Put card near end of remaining queue
      setQueue((q) => {
        if (!q || !q.length) return q;
        const rest = q.filter((_, i) => i !== cursor);
        const insertAt = Math.min(rest.length, Math.max(1, Math.floor(rest.length * 0.7)));
        const next = [...rest.slice(0, insertAt), q[cursor]!, ...rest.slice(insertAt)];
        return next;
      });
      setFlipped(false);
      setCursor(0);
    } else {
      setQueue((q) => {
        if (!q) return q;
        const next = q.filter((_, i) => i !== cursor);
        if (!next.length) return null;
        return next;
      });
      setFlipped(false);
      setCursor(0);
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (tab !== "study") return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "TEXTAREA" || tag === "INPUT") return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((v) => !v);
      } else if (e.key === "ArrowRight" || e.key === "j") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "k") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "1") {
        e.preventDefault();
        grade("again");
      } else if (e.key === "2") {
        e.preventDefault();
        grade("good");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, activeOrder, cursor, queue, card]);

  function exportDeck() {
    void navigator.clipboard.writeText(raw);
  }

  return (
    <StudyToolShell
      title="Flashcards"
      description="Paste concept lines as `front | back`, shuffle, and grade Again/Good. Deck + stats stay on this device."
      tip="Keyboard: Space flip · ←/→ navigate · 1 Again · 2 Good. One card per line."
    >
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["study", "Study"],
            ["edit", "Edit deck"],
            ["stats", "Stats"],
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

      {tab === "edit" ? (
        <div className="space-y-3">
          <label className="block text-sm font-medium">
            Card list
            <textarea
              className="textarea mt-2 min-h-[18rem] font-mono text-sm"
              value={raw}
              onChange={(e) => {
                setRaw(e.target.value);
                setStats({ again: 0, good: 0, seen: 0 });
              }}
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-secondary text-sm" onClick={exportDeck}>
              Copy deck text
            </button>
            <button
              type="button"
              className="btn-ghost text-sm"
              onClick={() => {
                setRaw(DEFAULT_RAW);
                setStats({ again: 0, good: 0, seen: 0 });
              }}
            >
              Restore sample
            </button>
            <p className="self-center text-xs text-slate-500">{cards.length} cards · saved locally</p>
          </div>
        </div>
      ) : null}

      {tab === "stats" ? (
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="card">
            <p className="text-xs font-semibold uppercase text-slate-500">Cards in deck</p>
            <p className="mt-1 text-2xl font-bold tabular-nums">{cards.length}</p>
          </div>
          <div className="card">
            <p className="text-xs font-semibold uppercase text-slate-500">Graded Good</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-emerald-700">{stats.good}</p>
          </div>
          <div className="card">
            <p className="text-xs font-semibold uppercase text-slate-500">Again / Seen</p>
            <p className="mt-1 text-2xl font-bold tabular-nums">
              {stats.again} / {stats.seen}
            </p>
          </div>
          <button
            type="button"
            className="btn-ghost text-sm sm:col-span-3 sm:w-fit"
            onClick={() => setStats({ again: 0, good: 0, seen: 0 })}
          >
            Reset grade counts
          </button>
        </div>
      ) : null}

      {tab === "study" ? (
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              {queue
                ? `Review queue: ${queue.length} left`
                : `Deck order · card ${cards.length ? cursor + 1 : 0}/${cards.length}`}
            </p>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn-secondary text-sm" onClick={shuffleDeck}>
                Shuffle
              </button>
              <button type="button" className="btn-primary text-sm" onClick={startReview}>
                Start review queue
              </button>
              {queue ? (
                <button
                  type="button"
                  className="btn-ghost text-sm"
                  onClick={() => {
                    setQueue(null);
                    setCursor(0);
                    setFlipped(false);
                  }}
                >
                  Exit review
                </button>
              ) : null}
            </div>
            <p className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
              Tip: flip, then press <kbd className="rounded bg-white px-1 ring-1 ring-slate-200">1</kbd>{" "}
              Again or <kbd className="rounded bg-white px-1 ring-1 ring-slate-200">2</kbd> Good to
              practice weak cards.
            </p>
            <button
              type="button"
              className="btn-ghost text-xs"
              onClick={() => setTab("edit")}
            >
              Edit deck ({cards.length}) →
            </button>
          </div>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setFlipped((v) => !v)}
              className="flex min-h-[16rem] w-full flex-col justify-center rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 text-left shadow-sm transition hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                {flipped ? "Back" : "Front"} · {cards.length ? cursor + 1 : 0}/
                {queue ? queue.length : cards.length}
              </p>
              <div className="mt-4 text-xl font-semibold text-slate-900">
                {card ? (
                  <RichContent>{flipped ? card.back : card.front}</RichContent>
                ) : queue === null && !cards.length ? (
                  "Add cards in Edit deck…"
                ) : (
                  "Review complete 🎉"
                )}
              </div>
              <p className="mt-6 text-xs text-slate-500">Click card or Space to flip</p>
            </button>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn-secondary" onClick={() => go(-1)}>
                Previous
              </button>
              <button type="button" className="btn-primary" onClick={() => go(1)}>
                Next
              </button>
              <button
                type="button"
                className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-800"
                onClick={() => grade("again")}
                disabled={!card}
              >
                Again
              </button>
              <button
                type="button"
                className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800"
                onClick={() => grade("good")}
                disabled={!card}
              >
                Good
              </button>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => {
                  setCursor(0);
                  setFlipped(false);
                }}
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </StudyToolShell>
  );
}
