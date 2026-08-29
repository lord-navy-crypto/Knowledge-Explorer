import { TOOL_WORKBENCHES } from "@/data/tool-workbenches";

/**
 * Compatibility layer for older components that still import cluster data.
 * Clusters are no longer a separate product concept; each one mirrors a Workbench.
 */
export type ToolCluster = {
  id: string;
  title: string;
  blurb: string;
  toolIds: readonly string[];
  codeHrefs?: readonly string[];
};

export const TOOL_CLUSTERS: ToolCluster[] = TOOL_WORKBENCHES.map((workbench) => ({
  id: workbench.id,
  title: workbench.title,
  blurb: workbench.blurb,
  toolIds: workbench.moduleIds,
  codeHrefs: workbench.id === "code" ? ["/code/editor?lang=python"] : undefined,
}));

export function clusterForToolId(toolId: string): ToolCluster | undefined {
  return TOOL_CLUSTERS.find((workbench) => workbench.toolIds.includes(toolId));
}
