import Link from "next/link";
import EnglishPageHeader from "@/components/EnglishPageHeader";
import EnglishResourcePanel from "@/components/EnglishResourcePanel";
import type { EnglishExamConfig, EnglishExamSection } from "@/data/english-exam-sections";

export default function EnglishExamSectionView({
  exam,
  section,
}: {
  exam: EnglishExamConfig;
  section: EnglishExamSection;
}) {
  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow={`English · ${exam.title} · Practice questions`}
        title={`${exam.title} · ${section.title}`}
        description={`${section.description} Uploads below stay in this subject’s file folder — practice questions for ${section.title} go here automatically.`}
      />

      <nav aria-label={`${exam.title} subject folders`} className="flex flex-wrap gap-2">
        <Link
          href={exam.hubHref}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 hover:border-brand-300"
        >
          All subjects
        </Link>
        {exam.sections.map((s) => {
          const active = s.id === section.id;
          return (
            <Link
              key={s.id}
              href={s.href}
              className={
                active
                  ? "rounded-lg border border-brand-700 bg-brand-700 px-3 py-1.5 text-sm font-medium text-white"
                  : "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-brand-300"
              }
            >
              {s.title}
            </Link>
          );
        })}
      </nav>

      <section className="rounded-xl border border-rose-200 bg-rose-50/70 px-4 py-3 text-sm text-rose-950">
        <p className="font-semibold">{section.title} file folder</p>
        <p className="mt-1 text-rose-900/85">
          Add practice questions, PDFs, audio, or notes here. Other {exam.title} subjects have their
          own folders. Skills like vocabulary stay under Basic skills.
        </p>
      </section>

      <EnglishResourcePanel
        space={section.spaceKey}
        basePath={section.href}
        title={`${exam.title} · ${section.title} · practice questions`}
      />

      <p className="text-xs text-slate-500">
        <Link href={exam.hubHref} className="text-brand-600 hover:underline">
          Back to {exam.title}
        </Link>
        {" · "}
        <Link href="/english#skills" className="text-brand-600 hover:underline">
          Basic skills
        </Link>
      </p>
    </div>
  );
}
