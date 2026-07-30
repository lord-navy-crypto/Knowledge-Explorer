/** Build deep links into the AI Toolbox with task + subject prefill. */

export type ToolboxApTask =
  | "advice"
  | "concept"
  | "guide"
  | "formula-derive"
  | "generate-questions";

export type ToolboxEnglishTask =
  | "grammar-explanation"
  | "vocab-extract"
  | "optimize-reading"
  | "corpus-find"
  | "corpus-generate"
  | "writing-feedback"
  | "test-strategy"
  | "original-practice";

export function toolboxHref(params: {
  category?: "ap" | "english" | "coding";
  apTask?: ToolboxApTask;
  englishTask?: ToolboxEnglishTask;
  codingTask?: "debug" | "write" | "explain";
  subject?: string;
  tool?: "calculator" | "grapher";
}): string {
  const q = new URLSearchParams();
  if (params.tool) {
    q.set("tool", params.tool);
  } else if (params.category === "english") {
    q.set("tool", "english");
  } else if (params.category === "coding") {
    q.set("tool", "coding");
  }
  if (params.apTask) q.set("apTask", params.apTask);
  if (params.englishTask) q.set("englishTask", params.englishTask);
  if (params.codingTask) q.set("codingTask", params.codingTask);
  if (params.subject) q.set("subject", params.subject);
  const query = q.toString();
  return query ? `/hints?${query}` : "/hints";
}

/** Legacy `?tool=hint|concept|guide` → apTask */
export function legacyToolToApTask(tool: string | null): ToolboxApTask | undefined {
  if (tool === "hint") return "advice";
  if (tool === "concept") return "concept";
  if (tool === "guide") return "guide";
  return undefined;
}

/** Per ai_for_ap guide id → recommended toolbox entry */
export const GUIDE_TOOLBOX_LINKS: Record<
  string,
  { href: string; label: string; blurb: string }
> = {
  "guide-ai-explain": {
    href: toolboxHref({
      apTask: "concept",
      subject: "Study Skills / AI for AP",
    }),
    label: "Open Concept explain in AI Toolbox",
    blurb: "Local AI first — rephrase concepts and get check questions without final answers.",
  },
  "guide-ai-images": {
    href: "/guide",
    label: "Open setup & workflow guide",
    blurb: "Image tools are external; use diagrams as drafts you correct by hand.",
  },
  "guide-ai-generate-questions": {
    href: toolboxHref({
      apTask: "generate-questions",
      subject: "Study Skills / AI for AP",
    }),
    label: "Generate practice in AI Toolbox",
    blurb: "Create original items, then save as a practice set when you are an editor.",
  },
  "guide-stats-ai-generate": {
    href: toolboxHref({
      apTask: "generate-questions",
      subject: "AP Statistics",
    }),
    label: "Generate Stats practice",
    blurb: "Original AP Statistics drills — hints only, no answer keys.",
  },
};
