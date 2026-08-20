import Link from "next/link";
import { EXTERNAL_TOOLS, type ExternalTool } from "@/data/external-tools";
import { STUDY_TOOLS, type StudyTool } from "@/data/study-tools";

export type RelatedToolsSpec = {
  title?: string;
  /** Built-in toolbox tool ids from STUDY_TOOLS */
  toolIds?: readonly string[];
  /** External tool ids from EXTERNAL_TOOLS */
  externalIds?: readonly string[];
};

function pickTools(ids: readonly string[] | undefined): StudyTool[] {
  if (!ids?.length) return [];
  const map = new Map(STUDY_TOOLS.map((t) => [t.id, t]));
  return ids.map((id) => map.get(id)).filter(Boolean) as StudyTool[];
}

function pickExternal(ids: readonly string[] | undefined): ExternalTool[] {
  if (!ids?.length) return [];
  const map = new Map(EXTERNAL_TOOLS.map((t) => [t.id, t]));
  return ids.map((id) => map.get(id)).filter(Boolean) as ExternalTool[];
}

/** Compact strip of related built-in + off-site tools for a study page. */
export default function PageRelatedTools({
  title = "Related toolbox links",
  toolIds,
  externalIds,
}: RelatedToolsSpec) {
  const tools = pickTools(toolIds);
  const external = pickExternal(externalIds);
  if (!tools.length && !external.length) return null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
          <p className="mt-0.5 text-xs text-slate-500">
            Built-in tools + off-site connections for this page.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <Link href="/tools" className="font-medium text-brand-700 underline">
            Toolbox
          </Link>
          <Link href="/tools/external" className="font-medium text-brand-700 underline">
            External
          </Link>
        </div>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.href}
            className={
              tool.id === "short-code"
                ? "rounded-xl bg-brand-50 px-3 py-2.5 text-sm shadow-sm ring-1 ring-brand-200 hover:ring-brand-400"
                : "rounded-xl bg-white px-3 py-2.5 text-sm shadow-sm ring-1 ring-slate-200 hover:ring-brand-300"
            }
          >
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {tool.id === "short-code" ? "Presets" : "Built-in"}
            </span>
            <span className="mt-0.5 block font-semibold text-slate-900">{tool.title}</span>
            <span className="mt-0.5 block text-xs text-slate-600">{tool.blurb}</span>
          </Link>
        ))}
        {external.map((tool) => (
          <a
            key={tool.id}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-3 py-2.5 text-sm shadow-sm ring-1 ring-indigo-100 hover:ring-brand-300"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wide text-indigo-500">
              External
            </span>
            <span className="mt-0.5 block font-semibold text-slate-900">
              {tool.name} ↗
            </span>
            <span className="mt-0.5 block text-xs text-slate-600">{tool.blurb}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
