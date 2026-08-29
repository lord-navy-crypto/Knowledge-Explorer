import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getStudyTool } from "@/data/study-tools";
import { getToolWorkbench } from "@/data/tool-workbenches";

export default async function ToolWorkbenchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workbench = getToolWorkbench(id);
  if (!workbench) notFound();

  const modules = workbench.moduleIds.map((toolId) => getStudyTool(toolId)).filter(Boolean);

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Convenient Tools & Code", href: "/explore/tools-code" },
          { label: workbench.title },
        ]}
      />

      <section className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-sky-50 px-5 py-7 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Workbench</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {workbench.title}
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">{workbench.blurb}</p>
        <p className="mt-4 text-xs font-semibold text-brand-800">{workbench.capabilityLabel}</p>
      </section>

      <section className="space-y-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Inside this workbench</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-slate-900">Modules</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            These smaller routes are kept for compatibility, but they no longer appear as separate products in Tools & Code.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {modules.map((tool) =>
            tool ? (
              <Link
                key={tool.id}
                href={tool.href}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-800">{tool.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{tool.blurb}</p>
                <p className="mt-3 text-xs font-semibold text-brand-700">Open module →</p>
              </Link>
            ) : null
          )}
        </div>
      </section>
    </div>
  );
}
