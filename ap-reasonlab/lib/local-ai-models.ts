/**
 * Curated Local AI catalog for WebLLM (browser WebGPU).
 * Featured list = study-focused picks with flash-point tags.
 * Extended library = broader official WebLLM prebuilt list (opt-in).
 */

export type LocalModelGroup = "superlight" | "light" | "medium" | "heavy";

/** Short flash points shown in the Local AI picker. */
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
  /** True when pulled from the full WebLLM library (not curated). */
  extended?: boolean;
};

/** Safe default — newest light bilingual starter. */
export const DEFAULT_LOCAL_MODEL_ID = "Qwen3.5-0.8B-q4f16_1-MLC";

/**
 * Featured Local AI series for Knowledge Explorer.
 * Prefer Qwen3 / Qwen3.5; keep specialist Math/Coder and English options.
 */
export const FEATURED_LOCAL_MODELS: LocalModelOption[] = [
  // —— Super light ——
  {
    id: "SmolLM2-135M-Instruct-q0f16-MLC",
    label: "SmolLM2 Tiny",
    group: "superlight",
    series: "SmolLM2",
    summary: "Smallest smoke-test model — very fast, basic English only.",
    bestFor: "Checking that Local AI works on weak devices",
    parameterSize: "135M",
    vramMB: 360,
    tags: ["Tiny", "English"],
    cached: null,
  },
  {
    id: "gemma3-1b-it-q4f16_1-MLC",
    label: "Gemma 3 1B",
    group: "superlight",
    series: "Gemma 3",
    summary: "Google’s tiny instruct model — crisp short English replies.",
    bestFor: "Short English rewrites on low VRAM",
    parameterSize: "1B",
    vramMB: 711,
    tags: ["New", "English", "Tiny"],
    cached: null,
  },
  {
    id: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Micro",
    group: "superlight",
    series: "Qwen2.5",
    summary: "Proven ultra-light bilingual starter.",
    bestFor: "Phones / Chromebooks when newer Qwen3.5 feels heavy",
    parameterSize: "0.5B",
    vramMB: 945,
    tags: ["Bilingual", "Tiny"],
    cached: null,
  },
  {
    id: "Qwen3-0.6B-q4f16_1-MLC",
    label: "Qwen3 Micro",
    group: "superlight",
    series: "Qwen3",
    summary: "Qwen3 micro — bilingual with light reasoning.",
    bestFor: "Newer micro bilingual chat",
    parameterSize: "0.6B",
    vramMB: 1403,
    tags: ["Bilingual", "Tiny"],
    cached: null,
  },
  {
    id: "Qwen3.5-0.8B-q4f16_1-MLC",
    label: "Qwen3.5 Starter",
    group: "superlight",
    series: "Qwen3.5",
    summary: "Newest light bilingual default for this site.",
    bestFor: "Everyday Chinese / English study on modest GPUs",
    parameterSize: "0.8B",
    vramMB: 1629,
    tags: ["New", "Bilingual", "Recommended"],
    cached: null,
    recommended: true,
  },
  {
    id: "Qwen2.5-Coder-0.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Coder Micro",
    group: "superlight",
    series: "Qwen2.5 Coder",
    summary: "Tiny coding helper for short snippets.",
    bestFor: "Comments, tiny fixes, weak-device Coding AI",
    parameterSize: "0.5B",
    vramMB: 945,
    tags: ["Coding", "Tiny"],
    cached: null,
  },

  // —— Light ——
  {
    id: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
    label: "Llama 3.2 Light",
    group: "light",
    series: "Llama 3.2",
    summary: "Compact Meta model — strong English for its size.",
    bestFor: "English explanations and light Q&A",
    parameterSize: "1B",
    vramMB: 879,
    tags: ["English"],
    cached: null,
  },
  {
    id: "OLMo-2-0425-1B-Instruct-q4f16_1-MLC",
    label: "OLMo 2 1B",
    group: "light",
    series: "OLMo 2",
    summary: "Open English instruct model from AI2.",
    bestFor: "Clear English tutoring on light hardware",
    parameterSize: "1B",
    vramMB: 1777,
    tags: ["English", "New"],
    cached: null,
  },
  {
    id: "Qwen3-1.7B-q4f16_1-MLC",
    label: "Qwen3 Light+",
    group: "light",
    series: "Qwen3",
    summary: "Best light bilingual jump up from the 0.8B starter.",
    bestFor: "AP / English bilingual study without medium VRAM",
    parameterSize: "1.7B",
    vramMB: 2037,
    tags: ["New", "Bilingual", "Recommended"],
    cached: null,
    recommended: true,
  },
  {
    id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Light",
    group: "light",
    series: "Qwen2.5",
    summary: "Stable bilingual light model.",
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
    summary: "Math-tuned light model for formula language.",
    bestFor: "AP math hints and symbolic steps",
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
    bestFor: "Small snippets and Coding AI on laptops",
    parameterSize: "1.5B",
    vramMB: 1630,
    tags: ["Coding"],
    cached: null,
  },
  {
    id: "SmolLM2-1.7B-Instruct-q4f16_1-MLC",
    label: "SmolLM2 1.7B",
    group: "light",
    series: "SmolLM2",
    summary: "Much stronger than Tiny/Mini while staying light.",
    bestFor: "English summaries without jumping to 3B",
    parameterSize: "1.7B",
    vramMB: 1774,
    tags: ["English"],
    cached: null,
  },
  {
    id: "gemma-2-2b-it-q4f16_1-MLC",
    label: "Gemma 2 2B",
    group: "light",
    series: "Gemma 2",
    summary: "Google 2B instruct — fluent English tutoring.",
    bestFor: "English writing feedback and explanations",
    parameterSize: "2B",
    vramMB: 1895,
    tags: ["English"],
    cached: null,
  },

  // —— Medium ——
  {
    id: "Qwen3.5-2B-q4f16_1-MLC",
    label: "Qwen3.5 Medium",
    group: "medium",
    series: "Qwen3.5",
    summary: "Newer mid-size bilingual Qwen3.5.",
    bestFor: "Longer Chinese / English study answers",
    parameterSize: "2B",
    vramMB: 2245,
    tags: ["New", "Bilingual", "Recommended"],
    cached: null,
    recommended: true,
  },
  {
    id: "Llama-3.2-3B-Instruct-q4f16_1-MLC",
    label: "Llama 3.2 Medium",
    group: "medium",
    series: "Llama 3.2",
    summary: "Solid English quality / speed balance.",
    bestFor: "General English tutoring on desktops",
    parameterSize: "3B",
    vramMB: 2264,
    tags: ["English"],
    cached: null,
  },
  {
    id: "Hermes-3-Llama-3.2-3B-q4f16_1-MLC",
    label: "Hermes 3 3B",
    group: "medium",
    series: "Hermes 3",
    summary: "Instruction-tuned Llama 3.2 — helpful chat style.",
    bestFor: "Dialogue-style study coaching in English",
    parameterSize: "3B",
    vramMB: 2264,
    tags: ["English", "Reasoning"],
    cached: null,
  },
  {
    id: "Ministral-3-3B-Instruct-2512-BF16-q4f16_1-MLC",
    label: "Ministral 3 3B",
    group: "medium",
    series: "Ministral 3",
    summary: "Mistral’s compact instruct model (2025-12).",
    bestFor: "Crisp English reasoning on mid GPUs",
    parameterSize: "3B",
    vramMB: 2864,
    tags: ["New", "English", "Reasoning"],
    cached: null,
  },
  {
    id: "Qwen3-4B-q4f16_1-MLC",
    label: "Qwen3 Medium+",
    group: "medium",
    series: "Qwen3",
    summary: "Strong bilingual mid model with light thinking.",
    bestFor: "Harder AP bilingual help when VRAM allows",
    parameterSize: "4B",
    vramMB: 3432,
    tags: ["Bilingual", "Reasoning"],
    cached: null,
  },
  {
    id: "Qwen3.5-4B-q4f16_1-MLC",
    label: "Qwen3.5 Medium+",
    group: "medium",
    series: "Qwen3.5",
    summary: "Newest 4B bilingual — best mid-tier quality pick.",
    bestFor: "High-quality Chinese / English tutoring mid-size",
    parameterSize: "4B",
    vramMB: 3868,
    tags: ["New", "Bilingual", "Recommended"],
    cached: null,
    recommended: true,
  },
  {
    id: "Phi-4-mini-instruct-q4f16_1-MLC",
    label: "Phi-4 Mini",
    group: "medium",
    series: "Phi-4",
    summary: "Microsoft’s newer mini — careful structured answers.",
    bestFor: "Step-by-step reasoning and short precise replies",
    parameterSize: "3.8B",
    vramMB: 3438,
    tags: ["New", "Reasoning", "English"],
    cached: null,
  },
  {
    id: "Qwen2.5-Coder-3B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Coder Medium",
    group: "medium",
    series: "Qwen2.5 Coder",
    summary: "Stronger local coding without jumping to 7B.",
    bestFor: "Code explanations and AI Developer drafts",
    parameterSize: "3B",
    vramMB: 2505,
    tags: ["Coding"],
    cached: null,
  },

  // —— Heavy ——
  {
    id: "Qwen3-8B-q4f16_1-MLC",
    label: "Qwen3 Heavy",
    group: "heavy",
    series: "Qwen3",
    summary: "Flagship bilingual local general model — needs a strong GPU; start lighter if it feels laggy.",
    bestFor: "Best all-round Chinese / English study answers on capable devices",
    parameterSize: "8B",
    vramMB: 5696,
    tags: ["New", "Bilingual"],
    cached: null,
  },
  {
    id: "Qwen3.5-9B-q4f16_1-MLC",
    label: "Qwen3.5 Heavy",
    group: "heavy",
    series: "Qwen3.5",
    summary: "Newest large bilingual Qwen — needs a strong GPU.",
    bestFor: "Highest local quality when device memory allows",
    parameterSize: "9B",
    vramMB: 6433,
    tags: ["New", "Bilingual"],
    cached: null,
  },
  {
    id: "Qwen2.5-7B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Heavy",
    group: "heavy",
    series: "Qwen2.5",
    summary: "Proven 7B bilingual fallback.",
    bestFor: "High-quality study answers on ~5 GB VRAM",
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
    bestFor: "Deep English tutoring and long-form writing",
    parameterSize: "8B",
    vramMB: 5001,
    tags: ["English"],
    cached: null,
  },
  {
    id: "Mistral-7B-Instruct-v0.3-q4f16_1-MLC",
    label: "Mistral 7B",
    group: "heavy",
    series: "Mistral",
    summary: "Classic strong English instruct 7B.",
    bestFor: "English reasoning and drafting",
    parameterSize: "7B",
    vramMB: 4573,
    tags: ["English", "Reasoning"],
    cached: null,
  },
  {
    id: "Qwen2.5-Coder-7B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Coder Heavy",
    group: "heavy",
    series: "Qwen2.5 Coder",
    summary: "Strongest featured coder.",
    bestFor: "Complex code help and AI Developer work",
    parameterSize: "7B",
    vramMB: 5107,
    tags: ["Coding"],
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
  if (/Qwen2/i.test(modelId)) return "Qwen2";
  if (/Llama-3\.2/i.test(modelId)) return "Llama 3.2";
  if (/Llama-3\.1/i.test(modelId)) return "Llama 3.1";
  if (/Llama-3/i.test(modelId)) return "Llama 3";
  if (/Phi-4/i.test(modelId)) return "Phi-4";
  if (/Phi-3/i.test(modelId)) return "Phi-3";
  if (/gemma3/i.test(modelId)) return "Gemma 3";
  if (/gemma-2/i.test(modelId)) return "Gemma 2";
  if (/SmolLM2/i.test(modelId)) return "SmolLM2";
  if (/Hermes-3/i.test(modelId)) return "Hermes 3";
  if (/Hermes-2/i.test(modelId)) return "Hermes 2";
  if (/Mistral/i.test(modelId)) return "Mistral";
  if (/Ministral/i.test(modelId)) return "Ministral";
  if (/OLMo/i.test(modelId)) return "OLMo";
  if (/DeepSeek/i.test(modelId)) return "DeepSeek";
  if (/WizardMath/i.test(modelId)) return "WizardMath";
  const head = modelId.split("-")[0];
  return head || "Other";
}

function groupFromVram(vramMB: number, parameterSize: string): LocalModelGroup {
  const n = Number.parseFloat(parameterSize);
  const isM = parameterSize.endsWith("M");
  if (isM || (Number.isFinite(n) && n <= 1 && parameterSize.endsWith("B") && vramMB < 1700)) {
    if (vramMB < 1700 || isM || n <= 0.8) return "superlight";
  }
  if (vramMB >= 4500 || (Number.isFinite(n) && !isM && n >= 7)) return "heavy";
  if (vramMB >= 2200 || (Number.isFinite(n) && !isM && n >= 3)) return "medium";
  if (vramMB < 1200 || isM || (Number.isFinite(n) && n <= 1)) return "superlight";
  return "light";
}

function tagsFromId(modelId: string): LocalModelTag[] {
  const tags: LocalModelTag[] = [];
  if (/Qwen3\.5|Qwen3-|Phi-4|gemma3|Ministral|OLMo-2-0425/i.test(modelId)) tags.push("New");
  if (/Qwen/i.test(modelId)) tags.push("Bilingual");
  else if (/Llama|Phi|gemma|Mistral|Hermes|OLMo|Ministral|SmolLM/i.test(modelId)) tags.push("English");
  if (/Math|WizardMath/i.test(modelId)) tags.push("Math");
  if (/Coder|code/i.test(modelId)) tags.push("Coding");
  if (/DeepSeek-R1|Reasoning|Hermes|Phi/i.test(modelId)) tags.push("Reasoning");
  if (/0\.5B|0\.6B|0\.8B|135M|360M|1B-Instruct|gemma3-1b/i.test(modelId)) tags.push("Tiny");
  return tags;
}

/** Prefer q4f16 instruct variants; skip embeddings / vision / laggy reasoning dumps. */
export function shouldIncludeExtendedModel(modelId: string): boolean {
  if (FEATURED_LOCAL_MODEL_IDS.has(modelId)) return false;
  if (/embed|Embedding|bge|e5|jina|Snowflake|Viper|binary/i.test(modelId)) return false;
  if (/vision|VL-/i.test(modelId)) return false;
  // DeepSeek-R1 Distill reintroduces multi-minute hidden thinking lag in-browser.
  if (/DeepSeek-R1|R1-Distill/i.test(modelId)) return false;
  // Prefer the common q4f16_1 build; allow q0f16 only for tiny SmolLM already featured.
  if (!/q4f16_1-MLC/.test(modelId)) return false;
  // Skip short-context -1k forks when a normal id exists in featured/extended.
  if (/-1k$/i.test(modelId)) return false;
  // Skip base (non-instruct) unless clearly it/instruct/chat.
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
      summary: `Full WebLLM library · ${series}.`,
      bestFor: "Extra official WebLLM model (not in the curated study list)",
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
