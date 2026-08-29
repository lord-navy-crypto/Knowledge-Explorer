import Link from "next/link";
import { getStudyTool } from "@/data/study-tools";
import { TOOL_WORKBENCHES, type ToolWorkbench } from "@/data/tool-workbenches";

function WorkbenchCard({ workbench }: { workbench: ToolWorkbench }) {
  const moduleCount = workbench.moduleIds.filter((id) => Boolean(getStudyTool(id))).length;

  return (
    <Link
      href={workbench.href}
      prefetch={false}
      className="group flex min-h-[10rem] flex-col rounded-2xl border border-brand-200 bg-white p-5 transition-colors hover:border-brand-400 hover:bg-brand-50/40 active:bg-brand-50"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">Workbench</p>
          <h3 className="mt-1 font-display text-xl font-bold text-slate-900 group-hover:text-brand-800">
            {workbench.title}
          </h3>
        </div>
        <span className="shrink-0 rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-bold text-brand-800">
          {moduleCount} modules
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{workbench.blurb}</p>
      <p className="mt-3 text-xs font-semibold leading-5 text-brand-800">{workbench.capabilityLabel}</p>
      <p className="mt-auto pt-4 text-sm font-semibold text-brand-700">Open workbench →</p>
    </Link>
  );
}

export default function ToolsCatalog() {
  const external = getStudyTool("external-hub");

  return (
    <div className="space-y-8">
      <section className="space-y-3" aria-labelledby="workbenches-heading">
        <div className="border-b border-brand-200 pb-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">Primary tools</p>
          <h2 id="workbenches-heading" className="text-xl font-bold text-slate-900">Workbenches</h2>
          <p className="mt-1 text-sm text-slate-600">
            Open a workbench directly. Smaller covered tools stay inside their workbench instead of loading as separate catalog items.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {TOOL_WORKBENCHES.map((workbench) => (
            <WorkbenchCard key={workbench.id} workbench={workbench} />
          ))}
        </div>
      </section>

      {external ? (
        <section id="external-tools" className="scroll-mt-28 space-y-3 border-t border-slate-200 pt-7">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Separate</p>
            <h2 className="text-xl font-bold text-slate-900">External Connections & Tools</h2>
            <p className="mt-1 text-sm text-slate-600">
              Off-site resources stay separate because they cannot be absorbed into a local workbench.
            </p>
          </div>
          <Link
            href={external.href}
            prefetch={false}
            className="group block rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-slate-50 active:bg-slate-100"
          >
            <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-brand-800">{external.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{external.blurb}</p>
            <p className="mt-3 text-sm font-semibold text-brand-700">Open external connections →</p>
          </Link>
        </section>
      ) : null}
    </div>
  );
}
