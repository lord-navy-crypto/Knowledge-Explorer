"use client";

import Link from "next/link";
import {
  EXTERNAL_TOOL_CATEGORIES,
  featuredExternalTools,
  type ExternalTool,
} from "@/data/external-tools";

type Props = {
  /** Where this block is shown — changes the intro copy. */
  context?: "tools" | "hints";
};

function ExternalCard({ tool }: { tool: ExternalTool }) {
  return (
    <a
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover block"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">External</p>
      <h3 className="mt-1 font-semibold text-slate-900">{tool.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{tool.blurb}</p>
      <p className="mt-2 text-[11px] text-slate-400">{tool.tags.join(" · ")}</p>
    </a>
  );
}

export default function RecommendedStudyTools({
  context = "tools",
}: Props) {
  const featured = featuredExternalTools();

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="section-title">
            {context === "hints" ? "External study links" : "External connections & tools"}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            {context === "hints" ? (
              <>
                Built-in study utilities live on the{" "}
                <Link href="/tools" className="font-medium text-brand-700 underline">
                  Tools
                </Link>{" "}
                page. Links below open outside sites — follow your teacher’s calculator / AI rules
                on graded work.
              </>
            ) : (
              <>
                Built-in tools are listed by category above. These are optional off-site connections
                — calculators, official exam hubs, dictionaries, sims, and more.
              </>
            )}
          </p>
        </div>
        <Link href="/tools/external" className="btn-secondary text-sm">
          Browse all external tools →
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {EXTERNAL_TOOL_CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/tools/external#${cat.id}`}
            className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:border-brand-300 hover:text-brand-700"
          >
            {cat.label}
          </Link>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((tool) => (
          <ExternalCard key={tool.id} tool={tool} />
        ))}
      </div>

      <p className="text-xs text-slate-500">
        Showing {featured.length} featured connections ·{" "}
        <Link href="/tools/external" className="font-medium text-brand-700 underline">
          open the full external catalog
        </Link>{" "}
        for every category.
      </p>
    </section>
  );
}
