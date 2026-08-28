"use client";

import Link from "next/link";
import { TOOL_CLUSTERS } from "@/data/tool-clusters";
import { getStudyTool } from "@/data/study-tools";

export default function ToolClusters() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Similar tools, grouped</h2>
        <p className="mt-1 max-w-2xl text-sm text-slate-600">
          Jump between related utilities — code helpers, file lab, study desk, and more — without
          hunting category by category.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {TOOL_CLUSTERS.map((cluster) => {
          const preview = cluster.toolIds
            .slice(0, 4)
            .map((id) => getStudyTool(id))
            .filter(Boolean);
          return (
            <article
              key={cluster.id}
              id={`cluster-${cluster.id}`}
              className="card scroll-mt-28 space-y-3 border-slate-200"
            >
              <h3 className="font-semibold text-slate-900">{cluster.title}</h3>
              <p className="text-sm text-slate-600">{cluster.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {preview.map((tool) =>
                  tool ? (
                    <Link
                      key={tool.id}
                      href={tool.href}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-brand-100 hover:text-brand-800"
                    >
                      {tool.title}
                    </Link>
                  ) : null
                )}
                {cluster.toolIds.length > 4 ? (
                  <span className="text-[11px] text-slate-400">+{cluster.toolIds.length - 4} more</span>
                ) : null}
              </div>
              {cluster.codeHrefs?.length ? (
                <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-2">
                  {cluster.codeHrefs.map((href) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-[11px] font-semibold text-emerald-700 hover:underline"
                    >
                      {href === "/code" ? "Code hub ↗" : `${href.replace("/code/", "")} ↗`}
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
