import Link from "next/link";
import EnglishPageHeader from "@/components/EnglishPageHeader";
import type { EnglishExamConfig } from "@/data/english-exam-sections";

type OfficialLink = { href: string; label: string };

export default function EnglishExamHub({
  exam,
  title,
  description,
  officialNote,
  officialLinks,
}: {
  exam: EnglishExamConfig;
  title: string;
  description: string;
  officialNote?: string;
  officialLinks: OfficialLink[];
}) {
  const cols =
    exam.sections.length === 3
      ? "sm:grid-cols-3"
      : exam.sections.length === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-4";
  const isToefl = exam.id === "toefl";

  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow={
          isToefl ? "English · TOEFL · Daily practice" : "English · Exam · Practice questions"
        }
        title={title}
        description={description}
      />

      <section
        className={
          isToefl
            ? "rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-sm text-emerald-950"
            : "rounded-xl border border-rose-200 bg-rose-50/70 px-4 py-3 text-sm text-rose-950"
        }
      >
        <p className="font-semibold">
          {isToefl ? "Four practice lanes (materials, not quizzes)" : "Subject file folders"}
        </p>
        <p className={`mt-1 ${isToefl ? "text-emerald-900/85" : "text-rose-900/85"}`}>
          {exam.blurb} Vocabulary and basic skills stay under{" "}
          <Link href="/english#skills" className="font-semibold underline">
            Basic skills
          </Link>
          — no change needed there.
        </p>
      </section>

      <section className={`grid gap-4 ${cols}`}>
        {exam.sections.map((item) => (
          <Link key={item.id} href={item.href} className="card transition hover:border-brand-300">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              {item.short} · {isToefl ? "lane" : "folder"}
            </p>
            <h2 className="mt-1 font-semibold text-brand-800">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            <p className="mt-3 text-sm font-medium text-brand-700">
              Open {item.title} {isToefl ? "lane" : "folder"} →
            </p>
          </Link>
        ))}
      </section>

      <section className="card">
        <h2 className="font-semibold">Official {exam.title} practice</h2>
        {officialNote ? <p className="mt-2 text-sm text-slate-600">{officialNote}</p> : null}
        <div className="mt-3 flex flex-wrap gap-3">
          {officialLinks.map((link) => (
            <a
              key={link.href}
              className="btn-secondary"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </section>

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
