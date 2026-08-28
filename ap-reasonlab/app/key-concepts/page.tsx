import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RichContent from "@/components/RichContent";
import { keyConceptGuides } from "@/data/key-concepts";
import { listAiForApGuides } from "@/lib/ai-for-ap-guides";
import { AP_SUBJECTS } from "@/data/ap-expanded";
import type { KeyConceptGuide } from "@/lib/types";

const categoryLabel: Record<KeyConceptGuide["category"], string> = {
  ap_content: "AP content guide",
  ai_for_ap: "AI for AP",
  study_skill: "Study skill",
};

function allGuides(): KeyConceptGuide[] {
  const aiExtras = listAiForApGuides();
  const seen = new Set(keyConceptGuides.map((g) => g.id));
  return [...keyConceptGuides, ...aiExtras.filter((g) => !seen.has(g.id))];
}

export default function KeyConceptsIndexPage() {
  const guides = allGuides();
  const bySubject = AP_SUBJECTS.map((subject) => ({
    subject,
    guides: guides.filter((g) => g.subject === subject),
  })).filter((row) => row.guides.length > 0);

  const uncategorized = guides.filter((g) => !AP_SUBJECTS.includes(g.subject as (typeof AP_SUBJECTS)[number]));

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AP & English", href: "/explore/ap-english" },
          { label: "Key concepts & guides" },
        ]}
      />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Study guides · concept checks
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Key concepts &amp; AI-for-AP guides
        </h1>
        <p className="max-w-3xl text-slate-600">
          Deep introductions with safe AI workflows and concept-check questions. AP content guides
          explain topics; <strong>AI for AP</strong> guides show how to use the toolbox without
          cheating.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/concepts" className="font-medium text-brand-700 hover:underline">
            Browse all concepts →
          </Link>
          <Link href="/hints?section=ai-for-ap" className="font-medium text-brand-700 hover:underline">
            AI for AP in Toolbox →
          </Link>
        </div>
      </header>

      <div className="space-y-8">
        {bySubject.map(({ subject, guides: subjectGuides }) => (
          <section key={subject} className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">{subject}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {subjectGuides.map((guide) => (
                <li key={guide.id}>
                  <Link
                    href={`/key-concepts/${guide.id}`}
                    className="card-hover flex h-full flex-col gap-2"
                  >
                    <div className="flex flex-wrap gap-2">
                      <span className="badge">{categoryLabel[guide.category]}</span>
                      <span className="text-xs text-slate-500">
                        {(guide.conceptQuestions || []).length} check questions
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900">{guide.title}</h3>
                    <RichContent clampLines={3} className="text-sm text-slate-600">
                      {guide.introduction}
                    </RichContent>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {uncategorized.length ? (
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">Other guides</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {uncategorized.map((guide) => (
                <li key={guide.id}>
                  <Link href={`/key-concepts/${guide.id}`} className="card-hover block">
                    <span className="badge">{guide.subject}</span>
                    <h3 className="mt-2 font-semibold">{guide.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
