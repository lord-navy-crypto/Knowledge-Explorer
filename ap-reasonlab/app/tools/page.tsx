import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import RecommendedStudyTools from "@/components/RecommendedStudyTools";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { STUDY_TOOL_CATEGORIES, STUDY_TOOLS } from "@/data/study-tools";

export const metadata = {
  title: "Tools — Knowledge Explorer",
  description:
    "AI Toolbox plus draft paper, dual-column editor, LaTeX, units, timer, flashcards, Markdown→PDF, and Word import.",
};

export default function ToolsPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools" }]} />
      <section className="space-y-2">
        <h1 className="section-title">Online tools</h1>
        <p className="max-w-3xl text-sm text-slate-600">
          AI helpers live in the{" "}
          <Link href="/hints" className="font-medium text-brand-700 underline">
            AI Toolbox
          </Link>
          . Below are study utilities for drafting, drawing, math, timing, flashcards, and file
          conversion — tuned for laptop screens and stylus/drawing devices. Settings that matter for
          AI stay saved in this browser.
        </p>
        <LocalAiRecommendation className="mt-3 max-w-3xl" />
      </section>

      {STUDY_TOOL_CATEGORIES.map((category) => {
        const items = STUDY_TOOLS.filter((tool) => tool.category === category.id);
        if (!items.length) return null;
        return (
          <section key={category.id} className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {category.label}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((tool) => (
                <Link key={tool.id} href={tool.href} className="card-hover block min-h-[8.5rem]">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{tool.title}</h3>
                    {tool.badge ? (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800">
                        {tool.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{tool.blurb}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <RecommendedStudyTools />

      <UnifiedMediaFrame
        title="Tools · pictures, documents, files & folders"
        folderArea="tools"
        spaceKey="_root"
        alsoShow={["document", "folder"]}
        collapsedByDefault={false}
      />
    </div>
  );
}
