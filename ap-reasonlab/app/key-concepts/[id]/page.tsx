import Link from "next/link";
import { notFound } from "next/navigation";
import { getAnyGuideById } from "@/lib/ai-for-ap-guides";
import { toolboxLinkForGuide } from "@/lib/ai-for-ap-guides";
import { toolboxHref } from "@/lib/ai-toolbox-url";
import GuideToolboxActions from "@/components/GuideToolboxActions";
import RichContent from "@/components/RichContent";

const categoryLabel = {
  ap_content: "AP Content",
  ai_for_ap: "AI for AP",
  study_skill: "Study Skill",
};

export default async function KeyConceptDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const guide = getAnyGuideById(id);
  if (!guide) notFound();

  const toolbox = toolboxLinkForGuide(guide.id);

  return (
    <div className="space-y-6">
      <Link
        href={guide.category === "ai_for_ap" ? "/ai-for-ap" : "/key-concepts"}
        className="text-sm text-brand-600 hover:underline"
      >
        ← {guide.category === "ai_for_ap" ? "AI for AP" : "Key concepts"}
      </Link>

      <section className="card space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="badge">{guide.subject}</span>
          <span className="badge">{categoryLabel[guide.category]}</span>
        </div>
        <h1 className="text-3xl font-bold">{guide.title}</h1>
        {guide.category === "ai_for_ap" ? (
          <div className="rounded-lg border border-[var(--ke-border)] bg-[var(--ke-surface)] p-4">
            <p className="text-sm text-slate-600">{toolbox.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href={toolbox.href} className="btn-primary text-sm">
                {toolbox.label}
              </Link>
              <Link
                href={toolboxHref({ apTask: "advice", subject: guide.subject })}
                className="btn-secondary text-sm"
              >
                Hints &amp; process
              </Link>
            </div>
          </div>
        ) : null}
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-semibold">Introduction</h2>
        <RichContent className="text-sm leading-relaxed text-slate-700">
          {guide.introduction}
        </RichContent>
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-semibold">How to use AI with this concept</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          {guide.howToUseAI.map((tip) => (
            <li key={tip}>
              <RichContent>{tip}</RichContent>
            </li>
          ))}
        </ul>
      </section>

      {guide.category === "ai_for_ap" ? (
        <GuideToolboxActions
          subject={guide.subject}
          guideId={guide.id}
          prompts={guide.howToUseAI}
        />
      ) : null}

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Key concept questions</h2>
        {guide.conceptQuestions.map((q, i) => (
          <article key={q.id} className="card space-y-3">
            <span className="badge">Concept Q{i + 1}</span>
            <RichContent className="font-medium">{q.prompt}</RichContent>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Hints
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                {q.hints.map((h) => (
                  <li key={h}>
                    <RichContent>{h}</RichContent>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
