import Link from "next/link";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import { listAiForApGuides, toolboxLinkForGuide } from "@/lib/ai-for-ap-guides";
import { toolboxHref } from "@/lib/ai-toolbox-url";

const WORKFLOW = [
  {
    step: "1",
    title: "Attempt first",
    text: "Try the problem or concept yourself before asking AI.",
  },
  {
    step: "2",
    title: "Ask for hints or explanation",
    text: "Use Local AI in the Toolbox for strategy, rephrasing, and concept checks.",
  },
  {
    step: "3",
    title: "Generate practice",
    text: "Create original drills, then save them as practice sets (editors).",
  },
  {
    step: "4",
    title: "Verify",
    text: "Cross-check with your textbook — AI can be confidently wrong.",
  },
];

export default function AiForApPage() {
  const guides = listAiForApGuides();

  return (
    <div className="space-y-10">
      <section className="hero-gradient relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 px-6 py-12 text-white md:px-16 md:py-16">
        <div className="mx-auto max-w-6xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f7f4ee]/70">
            Study Skills · AI for AP
          </p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">AI for AP</h1>
          <p className="max-w-2xl text-[#f7f4ee]/85">
            How to use AI as a tutor — explain concepts, sketch diagrams, and build original practice
            sets. Local AI is recommended (no usage caps); cloud API is backup.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={toolboxHref({ apTask: "advice", subject: "Study Skills / AI for AP" })}
              className="rounded-lg bg-[#f7f4ee] px-5 py-2.5 text-sm font-semibold text-[#152a45] hover:bg-white"
            >
              Open AI Toolbox
            </Link>
            <Link
              href={toolboxHref({
                apTask: "generate-questions",
                subject: "Study Skills / AI for AP",
              })}
              className="rounded-lg border border-[#f7f4ee]/35 px-5 py-2.5 text-sm font-semibold text-[#f7f4ee] hover:bg-white/10"
            >
              Generate practice
            </Link>
            <Link
              href="/practice?subject=Study%20Skills%20%2F%20AI%20for%20AP"
              className="rounded-lg border border-[#f7f4ee]/35 px-5 py-2.5 text-sm font-semibold text-[#f7f4ee] hover:bg-white/10"
            >
              AI for AP practice set
            </Link>
          </div>
        </div>
      </section>

      <LocalAiRecommendation />

      <section className="card space-y-4">
        <h2 className="section-title">Suggested workflow</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {WORKFLOW.map((item) => (
            <div
              key={item.step}
              className="rounded-lg border border-[var(--ke-border)] bg-[var(--ke-surface)] px-4 py-3"
            >
              <p className="font-display text-lg font-semibold text-[var(--ke-ink)]">
                {item.step}. {item.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-title">Guides</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => {
            const link = toolboxLinkForGuide(guide.id);
            return (
              <article key={guide.id} className="card space-y-3">
                <span className="badge">{guide.subject}</span>
                <h3 className="font-display text-xl font-semibold">{guide.title}</h3>
                <p className="line-clamp-3 text-sm text-slate-600">{guide.introduction}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link href={`/key-concepts/${guide.id}`} className="btn-secondary text-sm">
                    Read guide
                  </Link>
                  <Link href={link.href} className="btn-primary text-sm">
                    {link.label}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="card text-sm text-slate-600">
        <p>
          Full site workflow docs:{" "}
          <Link href="/guide" className="font-medium text-brand-700 hover:underline">
            Admin &amp; setup guide
          </Link>
          . Practice sets use hints only — paste or save generated items without answer keys.
        </p>
      </section>
    </div>
  );
}
