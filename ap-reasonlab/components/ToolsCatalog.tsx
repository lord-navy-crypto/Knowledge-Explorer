"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getStudyTool, type StudyTool } from "@/data/study-tools";
import { TOOL_WORKBENCHES, type ToolWorkbench } from "@/data/tool-workbenches";

function searchText(workbench: ToolWorkbench): string {
  const moduleText = workbench.moduleIds
    .map((id) => getStudyTool(id))
    .filter(Boolean)
    .map((tool) => `${tool!.title} ${tool!.blurb}`)
    .join(" ");
  return `${workbench.title} ${workbench.blurb} ${workbench.capabilityLabel} ${moduleText}`.toLowerCase();
}

function WorkbenchCard({ workbench }: { workbench: ToolWorkbench }) {
  const modules = workbench.moduleIds.map((id) => getStudyTool(id)).filter(Boolean);

  return (
    <Link
      href={workbench.href}
      className="group flex min-h-[11rem] flex-col rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-sky-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">Workbench</p>
          <h3 className="mt-1 font-display text-xl font-bold text-slate-900 group-hover:text-brand-800">
            {workbench.title}
          </h3>
        </div>
        <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-bold text-brand-800">
          {modules.length} modules
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{workbench.blurb}</p>
      <p className="mt-3 text-xs font-semibold leading-5 text-brand-800">{workbench.capabilityLabel}</p>
      <p className="mt-auto pt-4 text-sm font-semibold text-brand-700">Open workbench →</p>
    </Link>
  );
}

export default function ToolsCatalog({
  basePath = "/explore/tools-code",
}: {
  tools?: StudyTool[];
  basePath?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TOOL_WORKBENCHES;
    const tokens = q.split(/\s+/);
    return TOOL_WORKBENCHES.filter((workbench) => {
      const haystack = searchText(workbench);
      return tokens.every((token) => haystack.includes(token));
    });
  }, [query]);

  const external = getStudyTool("external-hub");
  const externalMatches = useMemo(() => {
    if (!external) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const haystack = `${external.title} ${external.blurb} external connection tools`.toLowerCase();
    return q.split(/\s+/).every((token) => haystack.includes(token));
  }, [external, query]);

  function updateQuery(value: string) {
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) params.set("q", value.trim());
    else params.delete("q");
    const qs = params.toString();
    router.replace(qs ? `${basePath}?${qs}` : basePath, { scroll: false });
  }

  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="block min-w-0 flex-1 text-sm">
            <span className="sr-only">Search workbenches</span>
            <input
              className="input w-full"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search workbenches or included capabilities…"
            />
          </label>
          <p className="text-xs tabular-nums text-slate-500">{filtered.length} workbenches</p>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Clusters and covered single tools are no longer separate products. They are modules inside these workbenches.
        </p>
      </section>

      {filtered.length ? (
        <section className="space-y-3" aria-labelledby="workbenches-heading">
          <div className="border-b border-brand-200 pb-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">Primary tools</p>
            <h2 id="workbenches-heading" className="text-xl font-bold text-slate-900">Workbenches</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((workbench) => (
              <WorkbenchCard key={workbench.id} workbench={workbench} />
            ))}
          </div>
        </section>
      ) : null}

      {!filtered.length && !externalMatches ? (
        <p className="rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center text-sm text-slate-500">
          No workbench matches that search.
        </p>
      ) : null}

      {external && externalMatches ? (
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
            className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
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
