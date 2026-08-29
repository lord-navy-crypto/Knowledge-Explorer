import type { Questionnaire, QuestionnaireItem } from "@/lib/types";

/** Official AP exam section labels (College Board CEDs / 2025–2026 exam overviews). Original practice only. */

export const AP_EXAM_BLUEPRINT: Record<
  string,
  { blurb: string; mcq: string; frq: string[] }
> = {
  "AP Physics 1": {
    blurb: "Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min).",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: [
      "Section II · Mathematical Routines",
      "Section II · Translation Between Representations",
      "Section II · Experimental Design and Analysis",
      "Section II · Qualitative/Quantitative Translation",
    ],
  },
  "AP Physics 2": {
    blurb: "Section I: 40 four-choice MCQ. Section II: 4 FRQs (mathematical routines, representations, experimental design, qualitative/quantitative translation).",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: [
      "Section II · Mathematical Routines",
      "Section II · Translation Between Representations",
      "Section II · Experimental Design and Analysis",
      "Section II · Qualitative/Quantitative Translation",
    ],
  },
  "AP Physics C: Mechanics": {
    blurb: "Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min).",
    mcq: "Section I · Multiple Choice (4 options, calculator)",
    frq: ["Section II · Free Response 1", "Section II · Free Response 2", "Section II · Free Response 3"],
  },
  "AP Physics C: E&M": {
    blurb: "Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min).",
    mcq: "Section I · Multiple Choice (4 options, calculator)",
    frq: ["Section II · Free Response 1", "Section II · Free Response 2", "Section II · Free Response 3"],
  },
  "AP Chemistry": {
    blurb: "Section I: 60 MCQ (90 min). Section II: 7 FRQs — 3 long, 4 short (105 min).",
    mcq: "Section I · Multiple Choice (4 options; discrete or stimulus set)",
    frq: ["Section II · Long free response", "Section II · Short free response"],
  },
  "AP Biology": {
    blurb: "Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short.",
    mcq: "Section I · Multiple Choice (4 options; discrete or stimulus set)",
    frq: [
      "Section II · Long FRQ · Interpret experimental results",
      "Section II · Long FRQ · Experimental results with graphing",
      "Section II · Short FRQ · Scientific investigation",
      "Section II · Short FRQ · Conceptual analysis",
      "Section II · Short FRQ · Model or visual",
      "Section II · Short FRQ · Data analysis",
    ],
  },
  "AP Calculus AB/BC": {
    blurb: "Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator).",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: ["Section II · Free Response (calculator)", "Section II · Free Response (no calculator)"],
  },
  "AP Statistics": {
    blurb: "Section I: 40 MCQ (90 min). Section II: 5 FRQs + 1 Investigative Task (90 min).",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: [
      "Section II Part A · Collecting data / methods",
      "Section II Part A · Exploring data",
      "Section II Part A · Probability / sampling distributions",
      "Section II Part A · Inference",
      "Section II Part A · Multi-skill",
      "Section II Part B · Investigative Task",
    ],
  },
  "AP English Language": {
    blurb: "Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min).",
    mcq: "Section I · Multiple Choice (4 options · reading or writing)",
    frq: [
      "Section II · Question 1 Synthesis",
      "Section II · Question 2 Rhetorical Analysis",
      "Section II · Question 3 Argument",
    ],
  },
  "AP English Literature": {
    blurb: "Section I: 55 four-choice MCQ on poetry, prose, and drama (60 min). Section II: poetry analysis, prose analysis, literary argument.",
    mcq: "Section I · Multiple Choice (4 options · close reading)",
    frq: [
      "Section II · Poetry analysis",
      "Section II · Prose fiction analysis",
      "Section II · Literary argument",
    ],
  },
  "AP US History": {
    blurb: "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    mcq: "Section I Part A · Stimulus-based Multiple Choice (4 options)",
    frq: ["Section I Part B · Short-Answer Question", "Section II · DBQ", "Section II · Long Essay Question"],
  },
  "AP World History": {
    blurb: "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    mcq: "Section I Part A · Stimulus-based Multiple Choice (4 options)",
    frq: ["Section I Part B · Short-Answer Question", "Section II · DBQ", "Section II · Long Essay Question"],
  },
  "AP European History": {
    blurb: "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    mcq: "Section I Part A · Stimulus-based Multiple Choice (4 options)",
    frq: ["Section I Part B · Short-Answer Question", "Section II · DBQ", "Section II · Long Essay Question"],
  },
  "AP Psychology": {
    blurb: "Section I: 75 MCQ. Section II: 2 FRQs (concept application + research-method design).",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: ["Section II · Article analysis / concept application", "Section II · Research-method FRQ"],
  },
  "AP Microeconomics": {
    blurb: "Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min).",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: ["Section II · Long free response", "Section II · Short free response"],
  },
  "AP Macroeconomics": {
    blurb: "Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min).",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: ["Section II · Long free response", "Section II · Short free response"],
  },
  "AP Environmental Science": {
    blurb: "Section I: 80 MCQ. Section II: 3 FRQs (including a lab/data-analysis question).",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: ["Section II · Design an investigation", "Section II · Analyze an environmental problem", "Section II · Analyze an environmental problem (data)"],
  },
  "AP Human Geography": {
    blurb: "Section I: 60 MCQ. Section II: 3 FRQs.",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: ["Section II · Free Response 1", "Section II · Free Response 2", "Section II · Free Response 3"],
  },
  "AP Computer Science A": {
    blurb: "Section I: 42 MCQ. Section II: 4 FRQs (methods, class design, array/ArrayList, 2D array).",
    mcq: "Section I · Multiple Choice (4 options)",
    frq: [
      "Section II · Methods and control structures",
      "Section II · Class design",
      "Section II · Array / ArrayList",
      "Section II · 2D array",
    ],
  },
  "AP Computer Science Principles": {
    blurb: "Section I: 70 MCQ (including stimulus questions). Create performance task is separate.",
    mcq: "Section I · Multiple Choice (4 options; some stimulus)",
    frq: ["Create performance task · written responses (practice)"],
  },
};

function hashId(id: string): number {
  let n = 0;
  for (let i = 0; i < id.length; i += 1) n = (n + id.charCodeAt(i) * (i + 1)) % 997;
  return n;
}

function pickFrqLabel(subject: string, item: QuestionnaireItem): string {
  const spec = AP_EXAM_BLUEPRINT[subject];
  const labels = spec?.frq ?? ["Section II · Free Response"];
  const text = `${item.prompt} ${item.conceptIntro ?? ""}`.toLowerCase();

  if (subject.includes("History") || subject === "AP US History") {
    if (/\bdbq\b|documents?/.test(text)) return "Section II · DBQ";
    if (/\bleq\b|evaluate the extent|compare.*period/.test(text)) return "Section II · Long Essay Question";
    return "Section I Part B · Short-Answer Question";
  }
  if (subject === "AP English Language") {
    if (/synthes/.test(text)) return "Section II · Question 1 Synthesis";
    if (/rhetoric/.test(text)) return "Section II · Question 2 Rhetorical Analysis";
    if (/argument/.test(text)) return "Section II · Question 3 Argument";
  }
  if (subject === "AP English Literature") {
    if (/poem|poetry|enjamb/.test(text)) return "Section II · Poetry analysis";
    if (/prose|narrator|fiction/.test(text)) return "Section II · Prose fiction analysis";
    return "Section II · Literary argument";
  }
  if (subject === "AP Statistics" && /investigat/.test(text)) {
    return "Section II Part B · Investigative Task";
  }
  if (subject.startsWith("AP Physics") && !subject.includes("C:")) {
    if (/experiment|procedure|design a/.test(text)) return "Section II · Experimental Design and Analysis";
    if (/graph|sketch|represent/.test(text)) return "Section II · Translation Between Representations";
    if (/calculate|find |determine |how far|speed/.test(text)) return "Section II · Mathematical Routines";
    return "Section II · Qualitative/Quantitative Translation";
  }
  return labels[hashId(item.id) % labels.length]!;
}

function prefixIntro(existing: string | undefined, label: string): string {
  const rest = existing?.trim() ?? "";
  if (rest.startsWith("Section I") || rest.startsWith("Section II") || rest.startsWith("Create performance")) {
    return rest;
  }
  return rest ? `${label}. ${rest}` : label;
}

export function shapeApItem(subject: string, item: QuestionnaireItem): QuestionnaireItem {
  const spec = AP_EXAM_BLUEPRINT[subject];
  if (!spec) {
    if (item.format === "concept_check") {
      return {
        ...item,
        format: "frq_half",
        examSection: "Free-response skill check",
        conceptIntro: prefixIntro(item.conceptIntro, "Free-response skill check"),
        blankSteps: item.blankSteps?.length ? item.blankSteps : ["Response: ______"],
        visibleSteps: item.visibleSteps?.length ? item.visibleSteps : ["Write 1–3 complete sentences."],
      };
    }
    return { ...item, examSection: item.format === "mcq" ? "Multiple Choice (4 options)" : "Free Response" };
  }

  if (item.format === "mcq") {
    const label = spec.mcq;
    return {
      ...item,
      examSection: label,
      conceptIntro: prefixIntro(item.conceptIntro, label),
    };
  }

  if (item.format === "concept_check") {
    const label = pickFrqLabel(subject, item);
    return {
      ...item,
      format: "frq_half",
      examSection: label,
      conceptIntro: prefixIntro(item.conceptIntro, label),
      blankSteps: item.blankSteps?.length ? item.blankSteps : ["Response: ______"],
      visibleSteps: item.visibleSteps?.length ? item.visibleSteps : ["Answer in the style of a short AP free-response part."],
    };
  }

  const label = pickFrqLabel(subject, item);
  return {
    ...item,
    examSection: label,
    conceptIntro: prefixIntro(item.conceptIntro, label),
  };
}

export function shapeApQuestionnaire(set: Questionnaire): Questionnaire {
  const spec = AP_EXAM_BLUEPRINT[set.subject];
  const items = set.items.map((item) => shapeApItem(set.subject, item));
  if (!spec) return { ...set, items };
  const note = spec.blurb;
  const description = set.description.includes("College Board") ? set.description : `${set.description} Official exam shape: ${note}`;
  return { ...set, items, description, examFormatNote: note };
}

export function shapeApQuestionnaires(sets: Questionnaire[]): Questionnaire[] {
  return sets.map(shapeApQuestionnaire);
}
