import { type FormEvent, useState } from "react";
import type { DeskCard } from "../lib/workspace";

type Props = {
  cards: DeskCard[];
  onChange: (cards: DeskCard[]) => void;
};
export default function Flashcards({ cards, onChange }: Props) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [position, setPosition] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = cards.filter((card) => (card.front + " " + card.back).toLowerCase().includes(search.toLowerCase()));
  const index = Math.min(position, Math.max(filtered.length - 1, 0));
  const current = filtered[index];

  function addCard(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!front.trim() || !back.trim() || cards.length >= 500) return;
    onChange([{ id: crypto.randomUUID(), front: front.trim().slice(0, 300), back: back.trim().slice(0, 1200) }, ...cards]);
    setPosition(0);
    setFlipped(false);
    setSearch("");
    setFront("");
    setBack("");
  }

  function navigate(delta: number) {
    setPosition((previous) => Math.max(0, Math.min(filtered.length - 1, previous + delta)));
    setFlipped(false);
  }

  return (
    <section className="panel">
      <p className="eyebrow">ACTIVE RECALL</p>
      <h2>Flashcards & vocabulary</h2>
      <p className="subtle">Write a prompt and answer, then test yourself by flipping the card. Saved locally with the rest of your workspace.</p>
      <div className="flashcard-layout">
        <div>
          <label className="field-label" htmlFor="flashcard-search">Find a card</label>
          <input id="flashcard-search" className="field" value={search} onChange={(event) => { setSearch(event.target.value); setPosition(0); setFlipped(false); }} placeholder="Search prompts and answers" />
          {current ? (
            <button type="button" className="flashcard" onClick={() => setFlipped((value) => !value)} aria-label={flipped ? "Show question" : "Reveal answer"}>
              <span className="card-face-label">{flipped ? "ANSWER" : "QUESTION"} · CLICK TO FLIP</span>
              <strong>{flipped ? current.back : current.front}</strong>
            </button>
          ) : <div className="flashcard empty-card">No matching flashcards yet. Add one to start reviewing.</div>}
          <div className="actions spaced">
            <button type="button" className="secondary-button" onClick={() => navigate(-1)} disabled={index === 0 || !current}>Previous</button>
            <span className="subtle">{current ? `${index + 1} of ${filtered.length}` : "0 cards"}</span>
            <button type="button" className="secondary-button" onClick={() => navigate(1)} disabled={index >= filtered.length - 1 || !current}>Next</button>
          </div>
          {current && <button type="button" className="text-button" onClick={() => { onChange(cards.filter((card) => card.id !== current.id)); setPosition(Math.max(index - 1, 0)); setFlipped(false); }}>Delete current card</button>}
        </div>
        <form className="entry-form" onSubmit={addCard}>
          <h3>Add a new card</h3>
          <label className="field-label" htmlFor="flashcard-front">Prompt or word</label>
          <textarea id="flashcard-front" className="field" rows={3} maxLength={300} value={front} onChange={(event) => setFront(event.target.value)} placeholder="e.g. What is the derivative of sin(x)?" />
          <label className="field-label" htmlFor="flashcard-back">Answer or definition</label>
          <textarea id="flashcard-back" className="field" rows={4} maxLength={1200} value={back} onChange={(event) => setBack(event.target.value)} placeholder="e.g. cos(x)" />
          <button className="primary-button" type="submit" disabled={!front.trim() || !back.trim() || cards.length >= 500}>Save flashcard</button>
        </form>
      </div>
    </section>
  );
}
