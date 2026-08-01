import Link from "next/link";
import EnglishPageHeader from "@/components/EnglishPageHeader";
import EnglishResourcePanel from "@/components/EnglishResourcePanel";

export default function IeltsPage() {
  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow="English · Exam · Real questions"
        title="IELTS Academic"
        description="This exam lane is for authentic IELTS practice: official samples and real papers you upload. Grammar, vocab, and writing craft stay under Basic skills."
      />

      <section className="rounded-xl border border-rose-200 bg-rose-50/70 px-4 py-3 text-sm text-rose-950">
        <p className="font-semibold">Real questions only</p>
        <p className="mt-1 text-rose-900/85">
          Prefer official IELTS samples and your own past papers below. Skill tools are on{" "}
          <Link href="/english#skills" className="font-semibold underline">
            Basic skills
          </Link>
          .
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Listening", text: "Four parts · about 30 minutes · answers follow recording order" },
          { title: "Reading", text: "60 minutes · academic sources · matching, completion, views" },
          { title: "Writing", text: "60 minutes · Task 1 visual · Task 2 position or argument" },
          { title: "Speaking", text: "11–14 minutes · three-part interactive interview" },
        ].map((item) => (
          <article key={item.title} className="card">
            <h2 className="font-semibold text-brand-800">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2 className="font-semibold">Official IELTS (real / authentic sources)</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            className="btn-secondary"
            href="https://ielts.org/take-a-test/test-types/ielts-academic-test"
            target="_blank"
            rel="noreferrer"
          >
            Academic format ↗
          </a>
          <a
            className="btn-secondary"
            href="https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test"
            target="_blank"
            rel="noreferrer"
          >
            Official samples ↗
          </a>
        </div>
      </section>

      <EnglishResourcePanel
        space="ielts"
        title="IELTS · upload real papers, past questions & notes"
      />

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
