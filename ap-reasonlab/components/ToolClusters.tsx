"use client";

import Link from "next/link";
import { TOOL_CLUSTERS } from "@/data/tool-clusters";
import { getStudyTool } from "@/data/study-tools";
import { getToolWorkbench } from "@/data/tool-workbenches";

/** Legacy component name; UI now presents only Workbenches. */
export default function ToolClusters() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Related workbenches</h2>
        <p className="mt-1 max-w-2xl text-sm text-slate-600">
          Related modules now belong to a Workbench instead of a separate cluster layer.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {TOOL_CLUSTERS.map((group) => {
          const workbench = getToolWorkbench(group.id);
          const preview = group.toolIds
            .slice(0, 4)
            .map((id) => getStudyTool(id))
            .filter(Boolean);
          return (
            <article key={group.id} className="card space-y-3 border-slate-200">
              <h3 className="font-semibold text-slate-900">{group.title}</h3>
              <p className="text-sm text-slate-600">{group.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {preview.map((tool) =>
                  tool ? (
                    <span key={tool.id} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                      {tool.title}
                    </span>
                  ) : null
                )}
                {group.toolIds.length > 4 ? (
                  <span className="text-[11px] text-slate-400">+{group.toolIds.length - 4} modules</span>
                ) : null}
              </div>
              {workbench ? (
                <Link href={workbench.href} className="text-xs font-semibold text-brand-700 hover:underline">
                  Open workbench →
                </Link>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
