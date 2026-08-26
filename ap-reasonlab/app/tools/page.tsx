import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import RecommendedStudyTools from "@/components/RecommendedStudyTools";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import {
  STUDY_TOOL_CATEGORIES,
  TOOL_SECURITY_LABELS,
  listedStudyTools,
  type ToolSecurity,
} from "@/data/study-tools";

export const metadata = {
  title: "Convenient Tools — NauWiki Explorer",
  description:
    "Convenient tools: Study desk, English helpers, STEM pads, File lab, classroom light tools, external connections, and AI — mostly local in your browser.",
};

function SecurityBadge({ level }: { level?: ToolSecurity }) {
  const key = level || "safe";
  const meta = TOOL_SECURITY_LABELS[key];
  return (
    <span
      className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${meta.className}`}
      title={meta.detail}
    >
      {meta.label}
    </span>
  );
}

export default function ToolsPage() {
  const tools = listedStudyTools();

  return (
    <div className="space-y-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Convenient Tools" }]} />

      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-5 py-7 sm:px-8">
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl"
          aria-hidden
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Convenient tools
        </p>
        <h1 className="relative mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Convenient Tools
        </h1>
        <p className="relative mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          AI helpers live in the{" "}
          <Link href="/hints" className="font-medium text-brand-700 underline">
            AI Toolbox
          </Link>
          . Categories below are the single catalog — no duplicate “recommended built-in” strip.
          Badges mark permission level (file upload, API keys, local data, shared/change code).
        </p>
        <LocalAiRecommendation className="relative mt-4 max-w-2xl" />
        <div className="relative mt-4 flex flex-wrap gap-2 text-[11px] text-slate-600">
          {(Object.keys(TOOL_SECURITY_LABELS) as ToolSecurity[]).map((key) => {
            const meta = TOOL_SECURITY_LABELS[key];
            return (
              <span
                key={key}
                className={`rounded-md px-2 py-1 font-semibold ${meta.className}`}
                title={meta.detail}
              >
                {meta.label}
              </span>
            );
          })}
        </div>
      </section>

      {STUDY_TOOL_CATEGORIES.map((category) => {
        const items = tools.filter((tool) => tool.category === category.id);
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
                    <SecurityBadge level={tool.security} />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{tool.blurb}</p>
                  <p className="mt-2 text-[11px] text-slate-400">
                    {TOOL_SECURITY_LABELS[tool.security || "safe"].detail}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <RecommendedStudyTools context="tools" />

      <section className="rounded-xl border border-violet-200 bg-violet-50/60 px-4 py-3 text-sm text-violet-950">
        <p className="font-semibold">Shared uploads on this page</p>
        <p className="mt-1 text-violet-900/85">
          The media panel below can store files with a <strong>change code</strong>. Treat that like
          an edit password — do not paste API keys into change-code fields.
        </p>
      </section>

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
