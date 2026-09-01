/** Build deep links into the dedicated contextual AI routes with task + subject prefill. */

export type ToolboxApTask =
  | "advice"
  | "concept"
  | "guide"
  | "formula-derive"
  | "generate-questions"
  | "concept-extension";

/** Canonical English AI tasks (consolidated). */
export type ToolboxEnglishTask =
  | "grammar-explanation"
  | "translator"
  | "writing-feedback"
  | "language-materials"
  | "test-strategy"
  | "practice-generator"
  | "speaking-practice";

export const TOOLBOX_ENGLISH_TASKS: ToolboxEnglishTask[] = [
  "grammar-explanation",
  "translator",
  "writing-feedback",
  "language-materials",
  "test-strategy",
  "practice-generator",
  "speaking-practice",
];

/** Map legacy English task ids → consolidated ones. */
export function migrateEnglishTask(raw: string | null | undefined): ToolboxEnglishTask | undefined {
  if (!raw) return undefined;
  const value = raw.trim();
  if ((TOOLBOX_ENGLISH_TASKS as string[]).includes(value)) {
    return value as ToolboxEnglishTask;
  }
  switch (value) {
    case "optimize-reading":
    case "reading-simplify":
    case "context":
    case "data-generator":
      return "language-materials";
    case "vocab-extract":
    case "vocabulary-coach":
      return "translator";
    case "corpus-find":
    case "corpus-generate":
    case "original-practice":
      return "practice-generator";
    default:
      return undefined;
  }
}

export function toolboxHref(params: {
  category?: "ap" | "english" | "coding";
  apTask?: ToolboxApTask;
  englishTask?: ToolboxEnglishTask;
  codingTask?: "debug" | "write" | "explain" | "csa-frq";
  subject?: string;
  tool?: "calculator" | "grapher";
  /** Encoded special-feature prompt (from encodeSpecialPrompt) */
  promptEncoded?: string;
}): string {
  const q = new URLSearchParams();
  let route = "/ai-for-ap";

  if (params.tool) {
    route = "/hints";
    q.set("tool", params.tool);
  } else if (params.category === "english") {
    route = "/english/ai";
  } else if (params.category === "coding") {
    route = "/code/ai";
  }

  if (params.apTask) q.set("apTask", params.apTask);
  if (params.englishTask) q.set("englishTask", params.englishTask);
  if (params.codingTask) q.set("codingTask", params.codingTask);
  if (params.subject) q.set("subject", params.subject);
  if (params.promptEncoded) q.set("sf", params.promptEncoded);
  const query = q.toString();
  return query ? `${route}?${query}` : route;
}

/** Legacy `?tool=hint|concept|guide` → apTask */
export function legacyToolToApTask(tool: string | null): ToolboxApTask | undefined {
  if (tool === "hint") return "advice";
  if (tool === "concept") return "concept";
  if (tool === "guide") return "guide";
  return undefined;
}

/** Per ai_for_ap guide id → recommended contextual AI entry. */
export const GUIDE_TOOLBOX_LINKS: Record<
  string,
  { href: string; label: string; blurb: string }
> = {
  "guide-ai-explain": {
    href: toolboxHref({
      apTask: "concept",
      subject: "Study Skills / AI for AP",
    }),
    label: "Open Concept explain in AI for AP",
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
    label: "Generate practice in AI for AP",
    blurb: "Create original items, then save as a practice set when you are an editor.",
  },
  "guide-ai-concept-extension": {
    href: toolboxHref({
      apTask: "concept-extension",
      subject: "Study Skills / AI for AP",
    }),
    label: "Open Concept extension in AI for AP",
    blurb: "Paste a basic concept or formula — map how AP exams stretch it into richer scenes.",
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
