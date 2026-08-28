"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import InlineNotice from "@/components/InlineNotice";
import { speakEnglish } from "@/lib/english-tts";

type Card = {
  id: string;
  word: string;
  meaning: string;
  example: string;
  tag: string;
  mastery: number; // 0–5
  nextReview: number;
};

type Tab = "book" | "quiz" | "import";

const KEY = "ke-vocab-book-v1";

function normalize(c: Card & { tag?: string; mastery?: number; nextReview?: number }): Card {
  return {
    ...c,
    tag: c.tag || "",
    mastery: typeof c.mastery === "number" ? c.mastery : 0,
    nextReview: typeof c.nextReview === "number" ? c.nextReview : Date.now(),
  };
}

function dueCards(cards: Card[]): Card[] {
  const now = Date.now();
  return [...cards]
    .filter((c) => c.nextReview <= now)
    .sort((a, b) => a.mastery - b.mastery || a.nextReview - b.nextReview);
}

function schedule(mastery: number): number {
  const days = [0, 1, 2, 4, 7, 14][Math.min(5, Math.max(0, mastery))] || 0;
  return Date.now() + days * 86_400_000;
}

export default function VocabBookTool() {
  const [tab, setTab] = useState<Tab>("book");
  const [cards, setCards] = useState<Card[]>([]);
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");
  const [tag, setTag] = useState("");
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("all");
  const [flipId, setFlipId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [bulk, setBulk] = useState("");
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizFlipped, setQuizFlipped] = useState(false);
  const [quizScore, setQuizScore] = useState({ right: 0, wrong: 0 });
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Card[];
        setCards(parsed.map(normalize));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(KEY, JSON.stringify(cards));
  }, [cards, mounted]);

  const tags = useMemo(() => {
    const set = new Set(cards.map((c) => c.tag).filter(Boolean));
    return ["all", ...Array.from(set).sort()];
  }, [cards]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cards.filter((c) => {
      if (tagFilter !== "all" && c.tag !== tagFilter) return false;
      if (!q) return true;
      return `${c.word} ${c.meaning} ${c.example} ${c.tag}`.toLowerCase().includes(q);
    });
  }, [cards, query, tagFilter]);

  const due = useMemo(() => dueCards(cards), [cards]);
  const quizCard = due[quizIndex] || due[0];

  function addCard(event: React.FormEvent) {
    event.preventDefault();
    if (!word.trim() || !meaning.trim()) return;
    setCards((prev) => [
      {
        id: `v-${Date.now()}`,
        word: word.trim(),
        meaning: meaning.trim(),
        example: example.trim(),
        tag: tag.trim(),
        mastery: 0,
        nextReview: Date.now(),
      },
      ...prev,
    ]);
    setWord("");
    setMeaning("");
    setExample("");
  }

  function importBulk() {
    const lines = bulk
      .split(/\n+/)
      .map((l) => l.trim())
      .filter(Boolean);
    const next: Card[] = [];
    for (const line of lines) {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length < 2 || !parts[0] || !parts[1]) continue;
      next.push({
        id: `v-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        word: parts[0]!,
        meaning: parts[1]!,
        example: parts[2] || "",
        tag: parts[3] || tag.trim(),
        mastery: 0,
        nextReview: Date.now(),
      });
    }
    if (!next.length) return;
    setCards((prev) => [...next, ...prev]);
    setBulk("");
    setTab("book");
  }

  function gradeQuiz(ok: boolean) {
    if (!quizCard) return;
    setQuizScore((s) => ({
      right: s.right + (ok ? 1 : 0),
      wrong: s.wrong + (ok ? 0 : 1),
    }));
    setCards((prev) =>
      prev.map((c) => {
        if (c.id !== quizCard.id) return c;
        const mastery = ok ? Math.min(5, c.mastery + 1) : Math.max(0, c.mastery - 1);
        return { ...c, mastery, nextReview: schedule(ok ? mastery : 0) };
      })
    );
    setQuizFlipped(false);
    setQuizIndex(0);
  }

  async function exportList() {
    const text = cards
      .map((c) =>
        [c.word, c.meaning, c.example, c.tag].filter((x, i) => i < 2 || x).join(" | ")
      )
      .join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <StudyToolShell
      title="Vocab book"
      description="Save English words with tags, spaced review, quiz mode, and bulk import. Stored in this browser only."
      tip="Bulk format: `word | meaning | example | tag`. Pair with Dictation for listening practice."
    >
      <InlineNotice message={notice} onDismiss={() => setNotice("")} />
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["book", "Book"],
            ["quiz", `Quiz (${due.length} due)`],
            ["import", "Import / export"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={tab === id ? "btn-primary text-sm" : "btn-secondary text-sm"}
            onClick={() => {
              setTab(id);
              if (id === "quiz") {
                setQuizIndex(0);
                setQuizFlipped(false);
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "book" ? (
        <>
          <form onSubmit={addCard} className="card grid gap-3 sm:grid-cols-2">
            <label className="block text-sm">
              Word
              <input className="input mt-1" value={word} onChange={(e) => setWord(e.target.value)} required />
            </label>
            <label className="block text-sm">
              Search
              <input
                className="input mt-1"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter…"
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              Meaning
              <input
                className="input mt-1"
                value={meaning}
                onChange={(e) => setMeaning(e.target.value)}
                required
              />
            </label>
            <label className="block text-sm">
              Example sentence
              <input className="input mt-1" value={example} onChange={(e) => setExample(e.target.value)} />
            </label>
            <label className="block text-sm">
              Tag
              <input
                className="input mt-1"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="TOEFL, Unit 3…"
              />
            </label>
            <button type="submit" className="btn-primary sm:col-span-2 sm:w-fit">
              Add word
            </button>
          </form>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTagFilter(t)}
                className={
                  tagFilter === t
                    ? "rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white"
                    : "rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
                }
              >
                {t === "all" ? "All tags" : `#${t}`}
              </button>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((card) => {
              const flipped = flipId === card.id;
              return (
                <div key={card.id} className="card min-h-[8rem] space-y-2 text-left">
                  <button
                    type="button"
                    className="w-full text-left"
                    onClick={() => setFlipId(flipped ? null : card.id)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-lg font-bold text-slate-900">
                        {flipped ? card.meaning : card.word}
                      </p>
                      <span className="text-[10px] font-semibold uppercase text-slate-500">
                        M{card.mastery}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {flipped
                        ? card.example || "Tap again for the word"
                        : card.tag
                          ? `#${card.tag} · Tap to reveal`
                          : "Tap to reveal meaning"}
                    </p>
                  </button>
                  <div className="flex flex-wrap gap-1">
                    <button
                      type="button"
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-700"
                      onClick={() => {
                        if (!speakEnglish(card.word, { rate: 0.95 })) {
                          setNotice("Speech synthesis is unavailable in this browser.");
                        }
                      }}
                    >
                      Speak
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-700"
                      onClick={() => setCards((prev) => prev.filter((x) => x.id !== card.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {!visible.length ? (
            <p className="card text-sm text-slate-500">No words yet — add some or import a list.</p>
          ) : null}
        </>
      ) : null}

      {tab === "quiz" ? (
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Spaced review · score {quizScore.right}✓ / {quizScore.wrong}✗ · {due.length} due now
          </p>
          {!quizCard ? (
            <div className="card text-sm text-slate-600">
              Nothing due — come back later or add new words.
            </div>
          ) : (
            <>
              <button
                type="button"
                className="card min-h-[10rem] w-full space-y-2 text-left"
                onClick={() => setQuizFlipped((v) => !v)}
              >
                <p className="text-xs font-semibold uppercase text-brand-700">
                  Mastery {quizCard.mastery}/5
                  {quizCard.tag ? ` · #${quizCard.tag}` : ""}
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {quizFlipped ? quizCard.meaning : quizCard.word}
                </p>
                {quizFlipped && quizCard.example ? (
                  <p className="text-sm text-slate-600">{quizCard.example}</p>
                ) : (
                  <p className="text-sm text-slate-500">Tap to flip</p>
                )}
              </button>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn-secondary text-sm"
                  onClick={() => speakEnglish(quizCard.word, { rate: 0.95 })}
                >
                  Speak word
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-800"
                  onClick={() => gradeQuiz(false)}
                >
                  Still learning
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800"
                  onClick={() => gradeQuiz(true)}
                >
                  Got it
                </button>
              </div>
            </>
          )}
        </div>
      ) : null}

      {tab === "import" ? (
        <div className="card space-y-3">
          <p className="text-sm text-slate-600">
            One entry per line: <code className="text-xs">word | meaning | example | tag</code>
          </p>
          <textarea
            className="input min-h-[10rem] font-mono text-sm"
            value={bulk}
            onChange={(e) => setBulk(e.target.value)}
            placeholder={"abundant | plentiful | Rain was abundant. | TOEFL"}
          />
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-primary" onClick={importBulk}>
              Import lines
            </button>
            <button type="button" className="btn-secondary" onClick={() => void exportList()}>
              {copied ? "Copied" : "Export to clipboard"}
            </button>
          </div>
        </div>
      ) : null}
    </StudyToolShell>
  );
}
