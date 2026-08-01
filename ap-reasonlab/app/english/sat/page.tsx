import Link from "next/link";
import EnglishPageHeader from "@/components/EnglishPageHeader";
import EnglishResourcePanel from "@/components/EnglishResourcePanel";

export default function SatPage() {
  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow="English · Exam · Real questions"
        title="Digital SAT · Reading & Writing"
        description="This exam lane is for authentic SAT practice: College Board question banks / Bluebook and real papers you upload. Core language skills stay under Basic skills."
      />

      <section className="rounded-xl border border-rose-200 bg-rose-50/70 px-4 py-3 text-sm text-rose-950">
        <p className="font-semibold">Real questions only</p>
        <p className="mt-1 text-rose-900/85">
          Use official College Board practice and upload your own sets below. Skill drills live on{" "}
          <Link href="/english#skills" className="font-semibold underline">
            Basic skills
          </Link>
          .
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Information and Ideas", text: "Central ideas, details, evidence, and inferences" },
          { title: "Craft and Structure", text: "Words in context, text purpose, and connections" },
          { title: "Expression of Ideas", text: "Rhetorical synthesis and transitions" },
          { title: "Standard English", text: "Sentence structure, usage, and punctuation" },
        ].map((item) => (
          <article key={item.title} className="card">
            <h2 className="font-semibold text-brand-800">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2 className="font-semibold">Official SAT practice (real questions)</h2>
        <p className="mt-2 text-sm text-slate-600">
          Reading and Writing has two 32-minute modules; Module 2 adapts based on Module 1.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            className="btn-secondary"
            href="https://satsuite.collegeboard.org/practice/student-question-bank"
            target="_blank"
            rel="noreferrer"
          >
            Student Question Bank ↗
          </a>
          <a
            className="btn-secondary"
            href="https://satsuite.collegeboard.org/practice/practice-tests"
            target="_blank"
            rel="noreferrer"
          >
            Bluebook & practice tests ↗
          </a>
        </div>
      </section>

      <EnglishResourcePanel space="sat" title="SAT · upload real papers, past questions & notes" />

      <p className="text-xs text-slate-500">
        <Link href="/english#skills" className="text-brand-600 hover:underline">
          Basic skills
        </Link>
        {" · "}
        <Link href="/english/ai" className="text-brand-600 hover:underline">
          English AI Tutor
        </Link>
      </p>
    </div>
  );
}
