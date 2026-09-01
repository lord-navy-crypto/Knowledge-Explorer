/**
 * Curated Local AI catalog for WebLLM (browser WebGPU).
 * Keep the default/featured set conservative. The optional extended library is
 * generated from WebLLM's runtime `prebuiltAppConfig.model_list`, so users can
 * never select an extended model that the installed runtime does not know.
 */

export type LocalModelGroup = "superlight" | "light" | "medium" | "heavy";

export type LocalModelTag =
  | "New"
  | "Bilingual"
  | "English"
  | "Math"
  | "Coding"
  | "Reasoning"
  | "Tiny"
  | "Recommended";

export type LocalModelOption = {
  id: string;
  label: string;
  group: LocalModelGroup;
  series: string;
  summary: string;
  bestFor: string;
  parameterSize: string;
  vramMB: number;
  tags: LocalModelTag[];
  cached: boolean | null;
  recommended?: boolean;
  extended?: boolean;
};

/** Stable small bilingual starter supported by the WebLLM generation used here. */
export const DEFAULT_LOCAL_MODEL_ID = "Qwen3-0.6B-q4f16_1-MLC";

/**
 * Conservative curated list. Newer model families belong in the runtime-discovered
 * extended library until the pinned WebLLM version has been verified with them.
 */
export const FEATURED_LOCAL_MODELS: LocalModelOption[] = [
  {
    id: "Qwen3-0.6B-q4f16_1-MLC",
    label: "Qwen3 Micro",
    group: "superlight",
    series: "Qwen3",
    summary: "Small bilingual starter with low memory demand.",
    bestFor: "First Local AI test and everyday Chinese / English chat",
    parameterSize: "0.6B",
    vramMB: 1403,
    tags: ["Bilingual", "Tiny", "Recommended"],
    cached: null,
    recommended: true,
  },
  {
    id: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Micro",
    group: "superlight",
    series: "Qwen2.5",
    summary: "Mature ultra-light bilingual fallback.",
    bestFor: "Weak devices and a second smoke-test option",
    parameterSize: "0.5B",
    vramMB: 945,
    tags: ["Bilingual", "Tiny"],
    cached: null,
  },
  {
    id: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
    label: "Llama 3.2 Light",
    group: "superlight",
    series: "Llama 3.2",
    summary: "Compact English-first instruct model.",
    bestFor: "English explanations and short drafting",
    parameterSize: "1B",
    vramMB: 879,
    tags: ["English", "Tiny"],
    cached: null,
  },
  {
    id: "Qwen2.5-Coder-0.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Coder Micro",
    group: "superlight",
    series: "Qwen2.5 Coder",
    summary: "Small code-focused local model.",
    bestFor: "Short code explanations and small fixes",
    parameterSize: "0.5B",
    vramMB: 945,
    tags: ["Coding", "Tiny"],
    cached: null,
  },
  {
    id: "Qwen3-1.7B-q4f16_1-MLC",
    label: "Qwen3 Light+",
    group: "light",
    series: "Qwen3",
    summary: "Stronger bilingual step up while staying laptop-friendly.",
    bestFor: "AP / English bilingual study",
    parameterSize: "1.7B",
    vramMB: 2037,
    tags: ["Bilingual", "Recommended"],
    cached: null,
    recommended: true,
  },
  {
    id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Light",
    group: "light",
    series: "Qwen2.5",
    summary: "Stable bilingual instruct model.",
    bestFor: "General Chinese / English help",
    parameterSize: "1.5B",
    vramMB: 1630,
    tags: ["Bilingual"],
    cached: null,
  },
  {
    id: "Qwen2.5-Math-1.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Math Light",
    group: "light",
    series: "Qwen2.5 Math",
    summary: "Math-tuned light model for equations and symbolic language.",
    bestFor: "AP math hints and formulas",
    parameterSize: "1.5B",
    vramMB: 1630,
    tags: ["Math", "Bilingual"],
    cached: null,
  },
  {
    id: "Qwen2.5-Coder-1.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Coder Light",
    group: "light",
    series: "Qwen2.5 Coder",
    summary: "Code-focused light assistant.",
    bestFor: "Programming explanations on laptops",
    parameterSize: "1.5B",
    vramMB: 1630,
    tags: ["Coding"],
    cached: null,
  },
  {
    id: "gemma-2-2b-it-q4f16_1-MLC",
    label: "Gemma 2 2B",
    group: "light",
    series: "Gemma 2",
    summary: "English-first 2B instruct model.",
    bestFor: "English writing feedback and explanations",
    parameterSize: "2B",
    vramMB: 1895,
    tags: ["English"],
    cached: null,
  },
  {
    id: "Llama-3.2-3B-Instruct-q4f16_1-MLC",
    label: "Llama 3.2 Medium",
    group: "medium",
    series: "Llama 3.2",
    summary: "Solid English quality / speed balance.",
    bestFor: "Longer English tutoring on capable laptops",
    parameterSize: "3B",
    vramMB: 2264,
    tags: ["English", "Recommended"],
    cached: null,
    recommended: true,
  },
  {
    id: "Qwen2.5-Coder-3B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Coder Medium",
    group: "medium",
    series: "Qwen2.5 Coder",
    summary: "Stronger local coding model.",
    bestFor: "Code explanations and AI Developer drafts",
    parameterSize: "3B",
    vramMB: 2505,
    tags: ["Coding"],
    cached: null,
  },
  {
    id: "Qwen3-4B-q4f16_1-MLC",
    label: "Qwen3 Medium+",
    group: "medium",
    series: "Qwen3",
    summary: "Strong bilingual mid-size model.",
    bestFor: "Harder bilingual study when device memory allows",
    parameterSize: "4B",
    vramMB: 3432,
    tags: ["Bilingual", "Reasoning"],
    cached: null,
  },
  {
    id: "Qwen2.5-7B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Heavy",
    group: "heavy",
    series: "Qwen2.5",
    summary: "Large bilingual option for strong GPUs.",
    bestFor: "Higher-quality local study answers",
    parameterSize: "7B",
    vramMB: 5107,
    tags: ["Bilingual"],
    cached: null,
  },
  {
    id: "Llama-3.1-8B-Instruct-q4f16_1-MLC",
    label: "Llama 3.1 Heavy",
    group: "heavy",
    series: "Llama 3.1",
    summary: "Strong English 8B instruct model.",
    bestFor: "Deep English tutoring on strong GPUs",
    parameterSize: "8B",
    vramMB: 5001,
    tags: ["English"],
    cached: null,
  },
];

export const FEATURED_LOCAL_MODEL_IDS = new Set(FEATURED_LOCAL_MODELS.map((m) => m.id));

type WebLLMModelRecord = {
  model_id: string;
  vram_required_MB?: number;
  low_resource_required?: boolean;
};

function parseParameterSize(modelId: string): string {
  const match = modelId.match(/(\d+(?:\.\d+)?)[Bb]\b/) || modelId.match(/(\d+)M\b/);
  if (!match) return "?";
  return modelId.includes("M-") || /-\d+M-/.test(modelId) || /\d+M-Instruct/.test(modelId)
    ? `${match[1]}M`
    : `${match[1]}B`;
}

function guessSeries(modelId: string): string {
  if (/Qwen3\.5/i.test(modelId)) return "Qwen3.5";
  if (/Qwen3-/i.test(modelId)) return "Qwen3";
  if (/Qwen2\.5-Coder/i.test(modelId)) return "Qwen2.5 Coder";
  if (/Qwen2\.5-Math/i.test(modelId)) return "Qwen2.5 Math";
  if (/Qwen2\.5/i.test(modelId)) return "Qwen2.5";
  if (/Llama-3\.2/i.test(modelId)) return "Llama 3.2";
  if (/Llama-3\.1/i.test(modelId)) return "Llama 3.1";
  if (/Llama-3/i.test(modelId)) return "Llama 3";
  if (/Phi/i.test(modelId)) return "Phi";
  if (/gemma/i.test(modelId)) return "Gemma";
  if (/SmolLM/i.test(modelId)) return "SmolLM";
  if (/Hermes/i.test(modelId)) return "Hermes";
  if (/Ministral/i.test(modelId)) return "Ministral";
  if (/Mistral/i.test(modelId)) return "Mistral";
  if (/OLMo/i.test(modelId)) return "OLMo";
  const head = modelId.split("-")[0];
  return head || "Other";
}

function groupFromVram(vramMB: number, parameterSize: string): LocalModelGroup {
  const n = Number.parseFloat(parameterSize);
  const isM = parameterSize.endsWith("M");
  if (vramMB >= 4500 || (Number.isFinite(n) && !isM && n >= 7)) return "heavy";
  if (vramMB >= 2200 || (Number.isFinite(n) && !isM && n >= 3)) return "medium";
  if (vramMB < 1200 || isM || (Number.isFinite(n) && n <= 1)) return "superlight";
  return "light";
}

function tagsFromId(modelId: string): LocalModelTag[] {
  const tags: LocalModelTag[] = [];
  if (/Qwen3\.5|Qwen3-|Phi-4|gemma3|Ministral/i.test(modelId)) tags.push("New");
  if (/Qwen/i.test(modelId)) tags.push("Bilingual");
  else if (/Llama|Phi|gemma|Mistral|Hermes|OLMo|SmolLM/i.test(modelId)) tags.push("English");
  if (/Math|WizardMath/i.test(modelId)) tags.push("Math");
  if (/Coder|code/i.test(modelId)) tags.push("Coding");
  if (/Reasoning|Hermes|Phi/i.test(modelId)) tags.push("Reasoning");
  if (/0\.5B|0\.6B|0\.8B|135M|360M|1B-Instruct|gemma3-1b/i.test(modelId)) tags.push("Tiny");
  return tags;
}

export function shouldIncludeExtendedModel(modelId: string): boolean {
  if (FEATURED_LOCAL_MODEL_IDS.has(modelId)) return false;
  if (/embed|Embedding|bge|e5|jina|Snowflake|Viper|binary/i.test(modelId)) return false;
  if (/vision|VL-/i.test(modelId)) return false;
  if (/DeepSeek-R1|R1-Distill/i.test(modelId)) return false;
  if (!/q4f16_1-MLC/.test(modelId)) return false;
  if (/-1k$/i.test(modelId)) return false;
  if (/Base-/i.test(modelId) && !/Instruct|it-|Chat/i.test(modelId)) return false;
  return true;
}

export function buildExtendedLocalModels(records: WebLLMModelRecord[]): LocalModelOption[] {
  const options: LocalModelOption[] = [];
  for (const record of records) {
    const id = record.model_id;
    if (!shouldIncludeExtendedModel(id)) continue;
    const parameterSize = parseParameterSize(id);
    const vramMB = Math.max(1, Math.round(Number(record.vram_required_MB) || 0)) || 2000;
    const series = guessSeries(id);
    options.push({
      id,
      label: id.replace(/-q4f16_1-MLC$/i, "").replace(/-/g, " "),
      group: groupFromVram(vramMB, parameterSize),
      series,
      summary: `Runtime WebLLM library · ${series}.`,
      bestFor: "Additional model verified by the installed WebLLM runtime",
      parameterSize,
      vramMB,
      tags: tagsFromId(id),
      cached: null,
      extended: true,
    });
  }
  options.sort((a, b) => {
    const order = { superlight: 0, light: 1, medium: 2, heavy: 3 };
    if (order[a.group] !== order[b.group]) return order[a.group] - order[b.group];
    if (a.series !== b.series) return a.series.localeCompare(b.series);
    return a.vramMB - b.vramMB;
  });
  return options;
}

export function mergeLocalModelLists(
  featured: LocalModelOption[],
  extended: LocalModelOption[],
  showFullLibrary: boolean
): LocalModelOption[] {
  if (!showFullLibrary) return featured.map((m) => ({ ...m }));
  const byId = new Map<string, LocalModelOption>();
  for (const model of featured) byId.set(model.id, { ...model });
  for (const model of extended) {
    if (!byId.has(model.id)) byId.set(model.id, { ...model });
  }
  return Array.from(byId.values());
}

export function formatLocalModelTags(tags: LocalModelTag[]): string {
  return tags.filter((t) => t !== "Recommended").join(" · ");
}

export const LOCAL_MODEL_GROUP_LABELS: Record<LocalModelGroup, string> = {
  superlight: "Super light",
  light: "Light",
  medium: "Medium",
  heavy: "Heavy",
};

export const LOCAL_MODEL_GROUP_ORDER: LocalModelGroup[] = [
  "superlight",
  "light",
  "medium",
  "heavy",
];

export type LocalModelUseCase = {
  id: string;
  title: string;
  detail: string;
  preferTags?: LocalModelTag[];
  preferIdIncludes?: string[];
  preferRecommended?: boolean;
};

export const LOCAL_MODEL_USE_CASES: LocalModelUseCase[] = [
  {
    id: "bilingual-daily",
    title: "Everyday Chinese / English study",
    detail: "Default path — stable Qwen3 / Qwen2.5 bilingual tutors.",
    preferTags: ["Bilingual"],
    preferRecommended: true,
  },
  {
    id: "ap-math",
    title: "AP math & formulas",
    detail: "Math-tuned models for symbolic steps and equation language.",
    preferTags: ["Math"],
  },
  {
    id: "coding",
    title: "Coding / AI Developer",
    detail: "Coder series for debug, write, and explain.",
    preferTags: ["Coding"],
  },
  {
    id: "english-only",
    title: "English writing & explanations",
    detail: "English-first instruct models such as Llama and Gemma.",
    preferTags: ["English"],
  },
  {
    id: "weak-gpu",
    title: "Weak GPU / first enable",
    detail: "Start with Qwen3 0.6B or another super-light model.",
    preferTags: ["Tiny"],
    preferRecommended: true,
  },
];

export function modelsForUseCase(
  models: LocalModelOption[],
  useCase: LocalModelUseCase,
  limit = 3
): LocalModelOption[] {
  const curated = models.filter((m) => !m.extended);
  const scored = curated
    .map((model) => {
      let score = 0;
      if (useCase.preferRecommended && model.recommended) score += 5;
      if (useCase.preferTags?.some((tag) => model.tags.includes(tag))) score += 3;
      if (useCase.preferIdIncludes?.some((part) => model.id.includes(part))) score += 2;
      if (useCase.id === "weak-gpu" && model.group === "superlight") score += 2;
      if (useCase.id === "bilingual-daily" && /Qwen3|Qwen2\.5/.test(model.id) && !/Coder|Math/.test(model.id)) score += 2;
      return { model, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.model.vramMB - b.model.vramMB);
  return scored.slice(0, limit).map((row) => row.model);
}
