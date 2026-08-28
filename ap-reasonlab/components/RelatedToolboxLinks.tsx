import Link from "next/link";
import { TOOL_CLUSTERS, type ToolCluster } from "@/data/tool-clusters";
import { getStudyTool } from "@/data/study-tools";

type Props = {
  /** Show one cluster on a tool page; omit for full grid on /tools. */
  clusterId?: string;
  /** Hide this tool from the cluster list (current page). */
  currentToolId?: string;
  className?: string;
};

function ClusterCard({ cluster }: { cluster: ToolCluster }) {
  const tools = cluster.toolIds
    .map((id) => getStudyTool(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <article className="card space-y-3 border-slate-200 bg-gradient-to-br from-white to-slate-50/80">
      <div>
        <h3 className="font-semibold text-slate-900">{cluster.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{cluster.blurb}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.href}
            className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800 hover:bg-brand-100"
          >
            {tool.title}
          </Link>
        ))}
        {(cluster.codeHrefs || []).map((href) => (
          <Link
            key={href}
            href={href}
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 hover:bg-emerald-100"
          >
            {href === "/code" ? "Code hub" : href.replace("/code/", "") + " playground"}
          </Link>
        ))}
      </div>
    </article>
  );
}

/** Related tools grouped by cluster — on /tools or individual tool pages. */
export default function RelatedToolboxLinks({
  clusterId,
  currentToolId,
  className = "",
}: Props) {
  const clusters = clusterId
    ? TOOL_CLUSTERS.filter((c) => c.id === clusterId)
    : TOOL_CLUSTERS;

  if (!clusters.length) return null;

  return (
    <section className={`space-y-3 ${className}`}>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {clusterId ? "Works well together" : "Tool groups"}
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {clusters.map((cluster) => {
          const filtered: ToolCluster = currentToolId
            ? {
                ...cluster,
                toolIds: cluster.toolIds.filter((id) => id !== currentToolId),
              }
            : cluster;
          if (filtered.toolIds.length === 0 && !filtered.codeHrefs?.length) return null;
          return <ClusterCard key={cluster.id} cluster={filtered} />;
        })}
      </div>
    </section>
  );
}
