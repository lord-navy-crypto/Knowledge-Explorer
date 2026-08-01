import Link from "next/link";
import EnglishPageHeader from "@/components/EnglishPageHeader";
import EnglishResourcePanel from "@/components/EnglishResourcePanel";

export default function ToeflPage() {
  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow="English · Exam · Practice questions"
        title="TOEFL iBT"
        description="This exam lane is for TOEFL practice questions: official ETS practice materials and practice sets you upload. Build vocabulary, grammar, and writing under Basic skills."
      />

      <section className="rounded-xl border border-rose-200 bg-rose-50/70 px-4 py-3 text-sm text-rose-950">
        <p className="font-semibold">Practice questions</p>
        <p className="mt-1 text-rose-900/85">
          Upload practice sets and notes below, or use ETS official practice links. Skill drills and
          local tools are on{" "}
          <Link href="/english#skills" className="font-semibold underline">
            Basic skills
          </Link>
          .
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Reading", text: "Complete the Words · Read in Daily Life · Academic Passage" },
          { title: "Listening", text: "Responses · conversations · announcements · academic talks" },
          { title: "Writing", text: "Build a Sentence · email · academic discussion" },
          { title: "Speaking", text: "Clear communication in academic and campus settings" },
        ].map((item) => (
          <article key={item.title} className="card">
            <h2 className="font-semibold text-brand-800">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2 className="font-semibold">Official TOEFL practice</h2>
        <p className="mt-2 text-sm text-slate-600">
          Use ETS for current format and official preparation. Knowledge Explorer is not affiliated
          with ETS.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            className="btn-secondary"
            href="https://www.ets.org/toefl/test-takers/ibt/about/content.html"
            target="_blank"
            rel="noreferrer"
          >
            ETS test content ↗
          </a>
          <a
            className="btn-secondary"
            href="https://www.ets.org/toefl/test-takers/ibt/prepare.html"
            target="_blank"
            rel="noreferrer"
          >
            ETS preparation ↗
          </a>
        </div>
      </section>

      <EnglishResourcePanel
        space="toefl"
        title="TOEFL · upload practice questions, sets & notes"
      />

      <p className="text-xs text-slate-500">
        Need language practice first?{" "}
        <Link href="/english#skills" className="text-brand-600 hover:underline">
          Open Basic skills
        </Link>
        {" · "}
        <Link href="/english/ai" className="text-brand-600 hover:underline">
          English AI Tutor
        </Link>
      </p>
    </div>
  );
}
