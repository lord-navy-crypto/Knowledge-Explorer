"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Card = { id: string; word: string; meaning: string; example: string };

const KEY = "ke-vocab-book-v1";

export default function VocabBookTool() {
  const [cards, setCards] = useState<Card[]>([]);
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");
  const [query, setQuery] = useState("");
  const [flipId, setFlipId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setCards(JSON.parse(raw) as Card[]);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(KEY, JSON.stringify(cards));
  }, [cards, mounted]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cards;
    return cards.filter((c) => `${c.word} ${c.meaning} ${c.example}`.toLowerCase().includes(q));
  }, [cards, query]);

  function addCard(event: React.FormEvent) {
    event.preventDefault();
    if (!word.trim() || !meaning.trim()) return;
    setCards((prev) => [
      { id: `v-${Date.now()}`, word: word.trim(), meaning: meaning.trim(), example: example.trim() },
      ...prev,
    ]);
    setWord("");
    setMeaning("");
    setExample("");
  }

  return (
    <StudyToolShell
      title="Vocab book"
      description="Save English words with meanings and examples. Flip to self-test. Stored in this browser only."
      tip="Great for TOEFL / SAT lists. Pair with Dictation for listening practice."
    >
      <form onSubmit={addCard} className="card grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          Word
          <input className="input mt-1" value={word} onChange={(e) => setWord(e.target.value)} required />
        </label>
        <label className="block text-sm">
          Search
          <input className="input mt-1" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter…" />
        </label>
        <label className="block text-sm sm:col-span-2">
          Meaning
          <input className="input mt-1" value={meaning} onChange={(e) => setMeaning(e.target.value)} required />
        </label>
        <label className="block text-sm sm:col-span-2">
          Example sentence
          <input className="input mt-1" value={example} onChange={(e) => setExample(e.target.value)} />
        </label>
        <button type="submit" className="btn-primary sm:col-span-2 sm:w-fit">
          Add word
        </button>
      </form>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((card) => {
          const flipped = flipId === card.id;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setFlipId(flipped ? null : card.id)}
              className="card min-h-[8rem] text-left transition hover:border-brand-300"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-lg font-bold text-slate-900">{flipped ? card.meaning : card.word}</p>
                <span
                  className="rounded border border-red-200 bg-red-50 px-1.5 py-0.5 text-[10px] font-semibold text-red-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCards((prev) => prev.filter((x) => x.id !== card.id));
                  }}
                >
                  Delete
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {flipped ? card.example || "Tap again for the word" : "Tap to reveal meaning"}
              </p>
            </button>
          );
        })}
      </div>
    </StudyToolShell>
  );
}
