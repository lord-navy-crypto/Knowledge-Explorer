import Link from "next/link";
import EnglishPageHeader from "@/components/EnglishPageHeader";
import EnglishResourcePanel from "@/components/EnglishResourcePanel";
import EnglishSkillsBoard from "@/components/EnglishSkillsBoard";
import { academicVocabulary } from "@/data/english-content";

const VOCAB_SUBJECT = "English Vocabulary";

export default function VocabularyPage() {
  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow="English · Skills · Real English"
        title="Academic Vocabulary"
        description="Build usable word knowledge: meaning, word family, collocation, and context. Add theory cubes and practice sets the same way as AP Concepts."
      />

      <section className="flex flex-wrap gap-2 text-sm">
        <Link href="/tools/vocab-book" className="btn-primary">
          Open my vocab book
        </Link>
        <Link href="/tools/dictation" className="btn-secondary">
          Dictation practice
        </Link>
        <Link href="/english/ai" className="btn-secondary">
          English AI Tutor
        </Link>
      </section>

      <EnglishSkillsBoard
        subject={VOCAB_SUBJECT}
        theoryLabel="Vocabulary theory cubes"
        practiceLabel="Vocabulary practice cubes"
      />

      <section className="space-y-3">
        <h2 className="section-title">Starter academic word cards</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {academicVocabulary.map((item) => (
            <article key={item.word} className="card">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold text-brand-800">{item.word}</h2>
                <span className="badge">academic</span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-500">{item.family}</p>
              <p className="mt-3 text-sm text-slate-700">{item.meaning}</p>
              <p className="mt-3 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-900">
                {item.collocation}
              </p>
              <p className="mt-3 text-sm italic leading-6 text-slate-600">“{item.example}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">How to add a word</h2>
        <ol className="mt-3 grid gap-3 text-sm text-slate-700 md:grid-cols-4">
          <li className="rounded-xl bg-slate-50 p-3">
            <strong>1. Meaning</strong>
            <br />
            One precise English explanation.
          </li>
          <li className="rounded-xl bg-slate-50 p-3">
            <strong>2. Family</strong>
            <br />
            Noun, verb, adjective, adverb.
          </li>
          <li className="rounded-xl bg-slate-50 p-3">
            <strong>3. Collocation</strong>
            <br />
            Words it naturally appears with.
          </li>
          <li className="rounded-xl bg-slate-50 p-3">
            <strong>4. Your sentence</strong>
            <br />
            A specific original example.
          </li>
        </ol>
      </section>

      <EnglishResourcePanel
        space="vocabulary"
        title="Vocabulary lists & decks"
        defaultSubject={VOCAB_SUBJECT}
        alsoShow={["concept", "questionnaire", "document", "folder"]}
      />
    </div>
  );
}
