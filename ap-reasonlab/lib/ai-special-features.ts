/**
 * AI Toolbox「特殊功能」— clickable starters, exam templates, and saved customs.
 * Not generic “presets”: each item fills a concrete task prompt for the student.
 */

export type SpecialFeatureKind = "starter" | "template" | "saved" | "guide";

export type SpecialFeature = {
  id: string;
  label: string;
  /** Short badge shown on the chip */
  badge?: string;
  kind: SpecialFeatureKind;
  category: "ap" | "english" | "coding";
  apTask?: string;
  englishTask?: string;
  codingTask?: string;
  /** Optional subject hint — empty = any AP subject */
  subjects?: string[];
  prompt: string;
  /** Optional notes field seed (hints task) */
  notes?: string;
  /** Optional code paste seed */
  code?: string;
};

const SAVED_KEY = "ke-ai-special-features-v1";

function subjectMatch(feature: SpecialFeature, subject: string): boolean {
  if (!feature.subjects?.length) return true;
  const s = subject.toLowerCase();
  return feature.subjects.some((part) => s.includes(part.toLowerCase()));
}

/** Built-in special features — curated, exam-shaped, subject-aware. */
export const BUILTIN_SPECIAL_FEATURES: SpecialFeature[] = [
  // —— AP · Hints ——
  {
    id: "ap-hint-half-process",
    label: "Half-process FRQ",
    badge: "Hints",
    kind: "template",
    category: "ap",
    apTask: "advice",
    prompt:
      "I will paste an AP-style problem below. Give a half-process outline: knowns/unknowns, which principle fits, first 2–3 visible steps, then STOP with blank steps for me. Do NOT give the final numeric answer.\n\nProblem:\n",
  },
  {
    id: "ap-hint-error-check",
    label: "Check my attempt",
    badge: "Hints",
    kind: "template",
    category: "ap",
    apTask: "advice",
    prompt:
      "Here is my attempt. Point out unclear or wrong steps only — do not rewrite a full solution or give the final answer.\n\nProblem:\n\nMy work:\n",
    notes: "My attempt so far:\n",
  },
  {
    id: "ap-hint-physics1-kin",
    label: "P1 · kinematics setup",
    badge: "Physics 1",
    kind: "starter",
    category: "ap",
    apTask: "advice",
    subjects: ["Physics 1"],
    prompt:
      "A cart starts at rest and accelerates at 2.0 m/s² for 4.0 s on a straight track, then coasts at constant speed for 3.0 s. Outline how to find the total displacement — knowns/unknowns and process only, no final number.",
  },
  {
    id: "ap-hint-calc-related",
    label: "Calc · related rates checklist",
    badge: "Calculus",
    kind: "starter",
    category: "ap",
    apTask: "advice",
    subjects: ["Calculus"],
    prompt:
      "A spherical balloon’s radius increases at 0.3 cm/s. Narrate a related-rates checklist for dV/dt when r = 5 cm — do not compute the final number for me.",
  },
  {
    id: "ap-hint-chem-stoich",
    label: "Chem · stoichiometry map",
    badge: "Chemistry",
    kind: "starter",
    category: "ap",
    apTask: "advice",
    subjects: ["Chemistry"],
    prompt:
      "2.50 g of NaOH reacts with excess HCl. Map the stoichiometry path to moles of water formed — list knowns, mole ratios, and checkpoints only (no final grams).",
  },
  {
    id: "ap-hint-stats-design",
    label: "Stats · study design",
    badge: "Statistics",
    kind: "starter",
    category: "ap",
    apTask: "advice",
    subjects: ["Statistics"],
    prompt:
      "Researchers want to test a new study app on exam scores. Outline how to design a randomized experiment — factors, treatments, and what to randomize. No fake data analysis.",
  },

  // —— AP · Concept / Extension / Formula / Generate ——
  {
    id: "ap-concept-eli5",
    label: "Explain + 2 checks",
    badge: "Concept",
    kind: "template",
    category: "ap",
    apTask: "concept",
    prompt:
      "Explain this concept like I’m a high schooler. Then ask me 2 check questions without answers.\n\nConcept:\n",
  },
  {
    id: "ap-extension-scene",
    label: "Exam scene map",
    badge: "Extension",
    kind: "template",
    category: "ap",
    apTask: "concept-extension",
    prompt:
      "Take this basic idea and map how AP exams extend it into richer scenes (new variables, graphs, multi-step). List concepts + formulas + typical moves — no full graded solution.\n\nBasic idea:\n",
  },
  {
    id: "ap-formula-derive",
    label: "Derive / justify formula",
    badge: "Formula",
    kind: "template",
    category: "ap",
    apTask: "formula-derive",
    prompt:
      "Derive or justify this formula step by step. State assumptions. End with when it does NOT apply.\n\nFormula:\n",
  },
  {
    id: "ap-gen-mcq",
    label: "Make 5 MCQs (no keys)",
    badge: "Practice",
    kind: "template",
    category: "ap",
    apTask: "generate-questions",
    prompt:
      "Create 5 original multiple-choice concept checks on this topic. Vary contexts. Hints only — do NOT provide answer keys.\n\nTopic:\n",
  },
  {
    id: "ap-gen-frq-half",
    label: "Make FRQ half-process set",
    badge: "Practice",
    kind: "template",
    category: "ap",
    apTask: "generate-questions",
    prompt:
      "Create 3 original AP-style FRQ items on this topic. Each item: visible setup steps + blank steps for me. No final answers.\n\nTopic:\n",
  },
  {
    id: "ap-guide-site",
    label: "How do I use this site?",
    badge: "Guide",
    kind: "starter",
    category: "ap",
    apTask: "guide",
    prompt:
      "I’m new to Knowledge Explorer. How should I use AI Toolbox with Local AI, and where are Convenient Tools and practice materials?",
  },

  // —— English ——
  {
    id: "en-grammar-paste",
    label: "Fix grammar in my paragraph",
    badge: "Grammar",
    kind: "template",
    category: "english",
    englishTask: "grammar-explanation",
    prompt: "Find and explain grammar issues. Give 2 corrected examples and a mini drill.\n\nText:\n",
  },
  {
    id: "en-translate",
    label: "CN ↔ EN translate",
    badge: "Translator",
    kind: "template",
    category: "english",
    englishTask: "translator",
    prompt: "Translate this (auto-detect Chinese ↔ English). Put the full translation first.\n\n",
  },
  {
    id: "en-writing",
    label: "Writing feedback template",
    badge: "Writing",
    kind: "template",
    category: "english",
    englishTask: "writing-feedback",
    prompt:
      "Give strengths, top 2 priorities, a revised snippet, and one next practice prompt.\n\nDraft:\n",
  },
  {
    id: "en-speaking-45",
    label: "45s speaking coach",
    badge: "Speaking",
    kind: "template",
    category: "english",
    englishTask: "speaking-practice",
    prompt:
      "I will dictate or paste a ~45-second spoken response. Coach fluency and clarity; give a cleaner read-aloud rewrite + 3 target phrases + one timed drill.\n\nTranscript:\n",
  },
  {
    id: "en-toefl-strategy",
    label: "TOEFL section tactics",
    badge: "TOEFL",
    kind: "starter",
    category: "english",
    englishTask: "test-strategy",
    prompt:
      "Give practical TOEFL Speaking Task 1 tactics with one micro-example outline (not AP science).",
  },
  {
    id: "en-practice-gen",
    label: "New practice topic from this",
    badge: "Practice",
    kind: "template",
    category: "english",
    englishTask: "practice-generator",
    prompt: "Copy the idea below, then generate a NEW practice topic from it.\n\nSeed:\n",
  },

  // —— Coding ——
  {
    id: "code-debug",
    label: "Debug with failing case",
    badge: "Debug",
    kind: "template",
    category: "coding",
    codingTask: "debug",
    prompt:
      "Find likely bugs. Show a failing case, how to test, and a small patched stub — not a full graded dump.\n\nWhat goes wrong:\n",
  },
  {
    id: "code-write",
    label: "Write a teaching stub",
    badge: "Write",
    kind: "template",
    category: "coding",
    codingTask: "write",
    prompt:
      "Help me implement this with teaching steps and a minimal runnable stub + one edge-case test idea.\n\nGoal:\n",
  },
  {
    id: "code-csa-frq",
    label: "CSA FRQ method coach",
    badge: "CSA",
    kind: "template",
    category: "coding",
    codingTask: "csa-frq",
    prompt:
      "AP CSA-style Java FRQ coaching: identify signatures, plan helpers, write partial method stubs with comments, trace a tiny example, list edge cases. Prefer stubs over full dumps.\n\nFRQ prompt:\n",
  },
  {
    id: "code-csa-arraylist",
    label: "CSA · ArrayList traverse",
    badge: "CSA",
    kind: "starter",
    category: "coding",
    codingTask: "csa-frq",
    prompt:
      "Write a teaching stub for a Java method that takes ArrayList<String> words and returns how many start with a vowel. Include signature, loop plan, and one test case — not a full graded solution.",
    code: "public class Warmup {\n  // TODO: countVowelStarts(ArrayList<String> words)\n}\n",
  },
  {
    id: "code-explain",
    label: "Explain this code by block",
    badge: "Explain",
    kind: "template",
    category: "coding",
    codingTask: "explain",
    prompt: "Explain this code by block. Note complexity if useful. End with one comprehension check.\n\n",
  },
];

export function listMatchingSpecialFeatures(params: {
  category: "ap" | "english" | "coding";
  apTask?: string;
  englishTask?: string;
  codingTask?: string;
  subject?: string;
  saved?: SpecialFeature[];
  guidePrompts?: Array<{ label: string; prompt: string }>;
}): SpecialFeature[] {
  const {
    category,
    apTask,
    englishTask,
    codingTask,
    subject = "",
    saved = [],
    guidePrompts = [],
  } = params;

  const taskOk = (f: SpecialFeature) => {
    if (f.category !== category) return false;
    if (category === "ap" && f.apTask && apTask && f.apTask !== apTask) return false;
    if (category === "english" && f.englishTask && englishTask && f.englishTask !== englishTask)
      return false;
    if (category === "coding" && f.codingTask && codingTask && f.codingTask !== codingTask)
      return false;
    if (category === "ap" && !subjectMatch(f, subject)) return false;
    return true;
  };

  const builtin = BUILTIN_SPECIAL_FEATURES.filter(taskOk);
  // Also show same-category templates that match task loosely: if few matches, include category-wide templates
  const categoryWide =
    builtin.length >= 2
      ? []
      : BUILTIN_SPECIAL_FEATURES.filter(
          (f) =>
            f.category === category &&
            f.kind === "template" &&
            (category !== "ap" || subjectMatch(f, subject))
        ).slice(0, 4);

  const fromGuides: SpecialFeature[] = guidePrompts.slice(0, 4).map((g, i) => ({
    id: `guide-${i}-${g.label.slice(0, 24)}`,
    label: g.label.slice(0, 42),
    badge: "Guide",
    kind: "guide" as const,
    category,
    apTask: category === "ap" ? apTask : undefined,
    englishTask: category === "english" ? englishTask : undefined,
    codingTask: category === "coding" ? codingTask : undefined,
    prompt: g.prompt,
  }));

  const fromSaved = saved.filter(taskOk);
  const merged = [...fromSaved, ...fromGuides, ...builtin, ...categoryWide];
  const seen = new Set<string>();
  const out: SpecialFeature[] = [];
  for (const item of merged) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    out.push(item);
    if (out.length >= 14) break;
  }
  return out;
}

export function loadSavedSpecialFeatures(): SpecialFeature[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(SAVED_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SpecialFeature[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((f) => f && f.id && f.prompt && f.label);
  } catch {
    return [];
  }
}

export function saveSpecialFeature(feature: Omit<SpecialFeature, "kind"> & { kind?: SpecialFeatureKind }) {
  if (typeof window === "undefined") return;
  const list = loadSavedSpecialFeatures();
  const next: SpecialFeature = {
    ...feature,
    kind: "saved",
    id: feature.id || `saved-${Date.now()}`,
  };
  const without = list.filter((f) => f.id !== next.id);
  without.unshift(next);
  localStorage.setItem(SAVED_KEY, JSON.stringify(without.slice(0, 40)));
}

export function deleteSavedSpecialFeature(id: string) {
  if (typeof window === "undefined") return;
  const list = loadSavedSpecialFeatures().filter((f) => f.id !== id);
  localStorage.setItem(SAVED_KEY, JSON.stringify(list));
}

/** Encode prompt for shareable Toolbox URLs (short, URL-safe). */
export function encodeSpecialPrompt(text: string): string {
  const clipped = text.trim().slice(0, 1800);
  if (!clipped) return "";
  try {
    const bytes = new TextEncoder().encode(clipped);
    let bin = "";
    bytes.forEach((b) => {
      bin += String.fromCharCode(b);
    });
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  } catch {
    return "";
  }
}

export function decodeSpecialPrompt(raw: string | null | undefined): string {
  if (!raw?.trim()) return "";
  try {
    const b64 = raw.trim().replace(/-/g, "+").replace(/_/g, "/");
    const pad = b64.length % 4 === 0 ? "" : "=".repeat(4 - (b64.length % 4));
    const bin = atob(b64 + pad);
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch {
    return "";
  }
}
