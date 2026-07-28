"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import RichContent from "@/components/RichContent";

type Card = { front: string; back: string };

function parseCards(raw: string): Card[] {
  return raw
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split("|");
      if (parts.length >= 2) {
        return { front: parts[0]!.trim(), back: parts.slice(1).join("|").trim() };
      }
      const dash = line.split(/\s[—–-]\s/);
      if (dash.length >= 2) {
        return { front: dash[0]!.trim(), back: dash.slice(1).join(" - ").trim() };
      }
      return { front: line, back: "(add answer after | )" };
    });
}

export default function FlashcardTool() {
  const [raw, setRaw] = useState(
    "Newton's 2nd law | F_net = ma\nKinetic energy | (1/2)mv^2\nRecursion base case | The case that stops further recursive calls"
  );
  const cards = useMemo(() => parseCards(raw), [raw]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];

  return (
    <StudyToolShell
      title="Flashcards"
      description="Paste concept lines as `front | back` and flip through them on this device."
      tip="One card per line. Example: `Shell theorem | Mass outside a shell feels zero net force from that shell`"
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <label className="block text-sm font-medium">
          Card list
          <textarea
            className="textarea mt-2 min-h-[18rem] font-mono text-sm"
            value={raw}
            onChange={(e) => {
              setRaw(e.target.value);
              setIndex(0);
              setFlipped(false);
            }}
          />
        </label>
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setFlipped((v) => !v)}
            className="flex min-h-[16rem] w-full flex-col justify-center rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 text-left shadow-sm transition hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              {flipped ? "Back" : "Front"} · {cards.length ? index + 1 : 0}/{cards.length}
            </p>
            <div className="mt-4 text-xl font-semibold text-slate-900">
              {card ? (
                <RichContent>{flipped ? card.back : card.front}</RichContent>
              ) : (
                "Add cards…"
              )}
            </div>
            <p className="mt-6 text-xs text-slate-500">Click card to flip</p>
          </button>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setIndex((prev) => (prev - 1 + Math.max(cards.length, 1)) % Math.max(cards.length, 1));
                setFlipped(false);
              }}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setIndex((prev) => (prev + 1) % Math.max(cards.length, 1));
                setFlipped(false);
              }}
            >
              Next
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => {
                setIndex(0);
                setFlipped(false);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </StudyToolShell>
  );
}
