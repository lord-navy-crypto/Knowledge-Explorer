"use client";

import Link from "next/link";
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
    text: "Use Local AI above for strategy, rephrasing, and concept checks.",
  },
  {
    step: "3",
    title: "Generate practice",
    text: "Create original drills (Generate practice task), then save as practice sets (editors).",
  },
  {
    step: "4",
    title: "Verify",
    text: "Cross-check with your textbook — AI can be confidently wrong.",
  },
];

/** AI for AP study guidance — embedded in the AI Toolbox (not a separate nav destination). */
export default function AiForApToolboxSection() {
  const guides = listAiForApGuides();

  return (
    <section id="ai-for-ap" className="card space-y-6 scroll-mt-24">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
          Study Skills · AI for AP
        </p>
        <h2 className="section-title">How to use AI for AP</h2>
        <p className="max-w-3xl text-sm text-slate-600">
          Safe tutor workflows — explain concepts, use diagrams as drafts, and build original
          practice. Local AI is recommended; cloud API is backup. Guides below open prompts into
          this Toolbox.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            href={toolboxHref({
              apTask: "generate-questions",
              subject: "Study Skills / AI for AP",
            })}
            className="btn-secondary text-sm"
          >
            Generate practice
          </Link>
          <Link
            href="/practice?subject=Study%20Skills%20%2F%20AI%20for%20AP"
            className="btn-ghost text-sm"
          >
            AI for AP practice set
          </Link>
          <Link href="/guide" className="btn-ghost text-sm">
            Admin &amp; setup guide
          </Link>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-slate-800">Suggested workflow</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {WORKFLOW.map((item) => (
            <div
              key={item.step}
              className="rounded-lg border border-[var(--ke-border)] bg-[var(--ke-surface)] px-4 py-3"
            >
              <p className="font-display text-base font-semibold text-[var(--ke-ink)]">
                {item.step}. {item.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-slate-800">Guides</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {guides.map((guide) => {
            const link = toolboxLinkForGuide(guide.id);
            return (
              <article
                key={guide.id}
                className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 space-y-2"
              >
                <h4 className="font-display text-lg font-semibold text-slate-900">{guide.title}</h4>
                <p className="line-clamp-2 text-sm text-slate-600">{guide.introduction}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link href={`/key-concepts/${guide.id}`} className="btn-secondary text-xs">
                    Read guide
                  </Link>
                  <Link href={link.href} className="btn-primary text-xs">
                    {link.label}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
