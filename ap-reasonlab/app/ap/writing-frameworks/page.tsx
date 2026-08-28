import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { writingFrameworks } from "@/data/humanities-writing-frameworks";

export const metadata: Metadata = {
  title: "Writing frameworks — AP humanities",
  description:
    "DBQ, LEQ, rhetorical analysis, argument, poetry, and prose essay frameworks for AP US History, World History, English Language, and English Literature.",
};

const SUBJECT_ORDER = [
  "AP US History",
  "AP World History",
  "AP English Language",
  "AP English Literature",
];

function frameworksBySubject() {
  const grouped = new Map<string, typeof writingFrameworks>();
  for (const framework of writingFrameworks) {
    const list = grouped.get(framework.subject) ?? [];
    list.push(framework);
    grouped.set(framework.subject, list);
  }

  const ordered = SUBJECT_ORDER
    .filter((subject) => grouped.has(subject))
    .map((subject) => ({ subject, frameworks: grouped.get(subject)! }));

  for (const [subject, frameworks] of grouped) {
    if (!SUBJECT_ORDER.includes(subject)) {
      ordered.push({ subject, frameworks });
    }
  }

  return ordered;
}

export default function WritingFrameworksPage() {
  const bySubject = frameworksBySubject();

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "AP & English", href: "/explore/ap-english" },
          { label: "AP", href: "/ap" },
          { label: "Writing frameworks" },
        ]}
      />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Humanities writing · exam essays
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          AP writing frameworks
        </h1>
        <p className="max-w-3xl text-slate-600">
          Structured outlines for DBQs, LEQs, and English essays. Use these as planning checklists
          before you draft — pair them with concept pages and key-concept guides for content
          evidence.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/concepts" className="font-medium text-brand-700 hover:underline">
            Browse concepts →
          </Link>
          <Link href="/key-concepts" className="font-medium text-brand-700 hover:underline">
            Key concepts &amp; guides →
          </Link>
        </div>
      </header>

      <div className="space-y-10">
        {bySubject.map(({ subject, frameworks }) => (
          <section key={subject} className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-slate-900">{subject}</h2>
            <ul className="grid gap-4 lg:grid-cols-2">
              {frameworks.map((framework) => (
                <li key={framework.id} className="card flex flex-col gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">
                      {framework.title}
                    </h3>
                    {framework.exampleThesis ? (
                      <p className="mt-2 text-sm text-slate-600">
                        <span className="font-medium text-slate-700">Example thesis: </span>
                        {framework.exampleThesis}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-3">
                    {framework.sections.map((section) => (
                      <div key={section.heading}>
                        <h4 className="text-sm font-semibold text-brand-800">{section.heading}</h4>
                        <ul className="mt-1.5 space-y-1 text-sm text-slate-600">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <span className="text-brand-500" aria-hidden="true">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
