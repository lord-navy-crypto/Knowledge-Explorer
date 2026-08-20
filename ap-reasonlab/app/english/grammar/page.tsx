import Link from "next/link";
import EnglishPageHeader from "@/components/EnglishPageHeader";
import EnglishResourcePanel from "@/components/EnglishResourcePanel";
import EnglishSkillsBoard from "@/components/EnglishSkillsBoard";
import PageRelatedTools from "@/components/PageRelatedTools";
import { sentencePatterns } from "@/data/english-content";
import { ENGLISH_RELATED } from "@/data/english-related-tools";

const GRAMMAR_SUBJECT = "English Grammar";

export default function GrammarPage() {
  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow="English · Skills · Real English"
        title="Grammar & Sentences"
        description="Build reliable sentences for school writing and tests. Add theory cubes and practice sets the same way as AP Concepts."
      />

      <section className="flex flex-wrap gap-2 text-sm">
        <Link href="/tools/paraphrase" className="btn-secondary">
          Paraphrase compare
        </Link>
        <Link href="/english/toefl/writing" className="btn-secondary">
          TOEFL Writing
        </Link>
        <Link href="/english/ai" className="btn-primary">
          English AI Tutor
        </Link>
      </section>

      <EnglishSkillsBoard
        subject={GRAMMAR_SUBJECT}
        theoryLabel="Grammar theory cubes"
        practiceLabel="Grammar practice cubes"
      />

      <section className="space-y-3">
        <h2 className="section-title">Starter sentence patterns</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {sentencePatterns.map((item) => (
            <article key={item.title} className="card">
              <h2 className="font-semibold text-brand-800">{item.title}</h2>
              <p className="mt-3 rounded-xl bg-slate-950 px-4 py-3 font-mono text-sm text-slate-100">
                {item.pattern}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.example}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Sentence repair checklist</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Can each independent clause stand alone?",
            "Does punctuation match the clause relationship?",
            "Does every pronoun have one clear referent?",
            "Does the transition express the actual logic?",
          ].map((item, index) => (
            <div key={item} className="rounded-xl border border-slate-200 p-3 text-sm">
              <span className="mr-2 font-bold text-brand-700">{index + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <EnglishResourcePanel
        space="grammar"
        title="Grammar exercises & sentence notes"
        defaultSubject={GRAMMAR_SUBJECT}
        alsoShow={["concept", "questionnaire", "document", "folder"]}
      />

      <PageRelatedTools {...ENGLISH_RELATED.grammar} />
    </div>
  );
}
