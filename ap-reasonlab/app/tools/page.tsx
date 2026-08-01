import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import RecommendedStudyTools from "@/components/RecommendedStudyTools";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { STUDY_TOOL_CATEGORIES, STUDY_TOOLS } from "@/data/study-tools";

export const metadata = {
  title: "Tools — Knowledge Explorer",
  description:
    "AI Toolbox plus writing, math, study helpers, Word/PDF tools, image compress, and quick utilities — all in one toolbox.",
};

export default function ToolsPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools" }]} />

      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-5 py-7 sm:px-8">
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl"
          aria-hidden
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          One toolbox
        </p>
        <h1 className="relative mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Online tools
        </h1>
        <p className="relative mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          AI helpers live in the{" "}
          <Link href="/hints" className="font-medium text-brand-700 underline">
            AI Toolbox
          </Link>
          . Everything below is a practical study utility — draft, convert files, compress images,
          merge PDFs, and more. Processing stays in this browser unless a tool says otherwise.
        </p>
        <LocalAiRecommendation className="relative mt-4 max-w-2xl" />
        <div className="relative mt-5 flex flex-wrap gap-2 text-xs">
          {[
            { href: "/tools/word-pdf", label: "Word → PDF" },
            { href: "/tools/image-compress", label: "Image compress" },
            { href: "/tools/pdf-tools", label: "PDF merge & split" },
            { href: "/hints", label: "AI panel" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg bg-white px-3 py-1.5 font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {STUDY_TOOL_CATEGORIES.map((category) => {
        const items = STUDY_TOOLS.filter((tool) => tool.category === category.id);
        if (!items.length) return null;
        return (
          <section key={category.id} className="space-y-3">
            <div className="flex items-end justify-between gap-3 border-b border-slate-200 pb-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {category.label}
              </h2>
              <span className="text-[11px] tabular-nums text-slate-400">{items.length}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="card-hover group flex min-h-[7.5rem] flex-col"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700">
                      {tool.title}
                    </h3>
                    {tool.badge ? (
                      <span className="shrink-0 rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800">
                        {tool.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{tool.blurb}</p>
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
