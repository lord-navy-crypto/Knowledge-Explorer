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

function pickFrqLabel(subject: string, item: QuestionnaireItem, set?: Questionnaire): string {
  const spec = AP_EXAM_BLUEPRINT[subject];
  const labels = spec?.frq ?? ["Section II · Free Response"];
  const itemText = `${item.id} ${item.prompt} ${item.conceptIntro ?? ""}`.toLowerCase();
  const title = (set?.title ?? "").toLowerCase();
  const text = `${itemText} ${title}`;

  if (subject.includes("History") || subject === "AP US History") {
    if (/^\s*a\)|\bbriefly explain one\b|-fmt-saq/.test(item.prompt.toLowerCase() + " " + item.id.toLowerCase())) {
      return "Section I Part B · Short-Answer Question";
    }
    if (/\bdbq\b|-fmt-dbq|using the documents/.test(itemText) || (/\bdbq\b/.test(title) && /evaluate the extent/.test(itemText))) {
      return "Section II · DBQ";
    }
    if (/\bleq\b|-fmt-leq|evaluate the extent|compare the effects|compare.*period/.test(text)) {
      return "Section II · Long Essay Question";
    }
    if (/\bdbq\b/.test(title)) return "Section II · DBQ";
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

function alreadyHasParts(prompt: string): boolean {
  return /\(\s*a\s*\)|\ba\)\s+/i.test(prompt) && /\(\s*b\s*\)|\bb\)\s+/i.test(prompt);
}

function alreadyHasDocs(prompt: string): boolean {
  return /Doc(?:ument)?\s*1\b|Documents \(original/i.test(prompt);
}

function alreadyHasStimulus(prompt: string): boolean {
  return /Stimulus \(original\)|Source \(original\)|excerpt from|Poem \(original\)|Passage \(original\)/i.test(
    prompt
  );
}

function isHistorySubject(subject: string): boolean {
  return /History/.test(subject);
}

function dbqDocuments(prompt: string): string {
  if (/Progressive|suffrage|1890|1920/i.test(prompt)) {
    return `Documents (original practice — not College Board):
Doc 1 (1912, settlement house worker): “Night classes filled once women could vote in school elections.”
Doc 2 (1911, mill owner): “State factory inspection is an assault on property.”
Doc 3 (1920, newspaper): “The Nineteenth Amendment closed one fight and opened another over enforcement.”`;
  }
  if (/New Deal|1933|federal government/i.test(prompt)) {
    return `Documents (original practice — not College Board):
Doc 1 (1935, newspaper): “Factories hum again, yet breadlines remain in the mill towns.”
Doc 2 (1937, worker letter): “The job is back, but the union meeting is why I keep it.”
Doc 3 (1935, critic): “Relief agencies teach dependence, not recovery.”`;
  }
  if (/Cold War/i.test(prompt)) {
    return `Documents (original practice — not College Board):
Doc 1 (1950, suburban ad): “A lawn and a fallout pamphlet in every kitchen.”
Doc 2 (1954, student paper): “We practiced duck-and-cover between algebra problems.”
Doc 3 (1964, pamphlet): “The highway is prosperity; the watchlist is the price.”`;
  }
  if (/Enlightenment|absolut/i.test(prompt)) {
    return `Documents (original practice — not College Board):
Doc 1 (1751, salon letter): “Print makes a public that kings did not invite.”
Doc 2 (1685, minister): “Uniform worship is the peace of the realm.”
Doc 3 (1789, cahier): “We ask for law, not a gift from the throne.”`;
  }
  if (/industrial|empire|tribute|1450|1750|1900/i.test(prompt)) {
    return `Documents (original practice — not College Board):
Doc 1 (1880s export table): Raw staples leave; factory cloth returns on the same ships.
Doc 2 (official gazette): “Rail and telegraph will make the provinces legible.”
Doc 3 (artisan petition): “Machine cloth undersells the workshop but not the tax.”`;
  }
  return `Documents (original practice — not College Board):
Doc 1 (contemporary observer): “The reform looked complete from the capital and unfinished on the ground.”
Doc 2 (critic): “Law on paper is not the same as practice in the provinces.”
Doc 3 (later commentator): “Participation widened in some arenas and narrowed in others.”`;
}

function historyStimulus(prompt: string): string {
  if (/New Deal/i.test(prompt)) {
    return "A 1935 newspaper: “Factories hum again, yet breadlines remain in the mill towns.”";
  }
  if (/industrial|cotton|imperial/i.test(prompt)) {
    return "1880s export table — raw cotton exports rise while finished cloth imports into the same ports also rise.";
  }
  return "A period observer wrote: “The law changed faster than daily practice, and both still matter as evidence.”";
}

function langExcerpt(prompt: string): string {
  if (/park|bike|corridor/i.test(prompt)) {
    return `Excerpt (original practice): “I write not as a contractor but as a parent who walks this corridor at 7:40 a.m. You have heard cost estimates. Hear instead a child on a bike and a paint line that ends.”`;
  }
  if (/start time|parent/i.test(prompt)) {
    return `Excerpt (original practice): “Buses already idle at 6:50 a.m. A later bell would not erase homework; it would let teenagers meet the clock their bodies already keep.”`;
  }
  return `Excerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”`;
}

function litExcerpt(prompt: string): string {
  if (/enjamb|storm|poem|poetry/i.test(prompt)) {
    return `Poem (original practice): “The shutters / did not wait for the sentence to end / the rain kept walking into the kitchen.”`;
  }
  return `Passage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”`;
}

function defaultBlanks(label: string, existing?: string[]): string[] | undefined {
  if (existing && existing.length >= 2) return existing;
  if (label.includes("DBQ")) return ["(a) Thesis: ______", "(b) Document use: ______", "(c) Outside evidence: ______"];
  if (label.includes("Long Essay") || label.includes("LEQ")) {
    return ["(a) Context: ______", "(b) Thesis: ______", "(c) Evidence: ______"];
  }
  if (label.includes("Short-Answer")) return ["(a) ______", "(b) ______", "(c) ______"];
  return existing && existing.length ? existing : ["(a) ______", "(b) ______"];
}

function defaultVisible(label: string, existing?: string[]): string[] | undefined {
  if (existing && existing.length) return existing;
  if (label.includes("DBQ")) {
    return [
      "(a) Defensible thesis with a line of reasoning.",
      "(b) Use at least two documents.",
      "(c) Outside evidence beyond the documents.",
    ];
  }
  return ["Answer each labeled part in AP free-response style."];
}

function expandOfficialFrq(
  subject: string,
  label: string,
  item: QuestionnaireItem
): Pick<QuestionnaireItem, "prompt" | "blankSteps" | "visibleSteps"> {
  const original = item.prompt.trim();
  let prompt = original;

  if (label.includes("DBQ") && !alreadyHasDocs(prompt)) {
    prompt = `${dbqDocuments(original)}\n\nPrompt: ${original}`;
  }
  if (
    (subject === "AP English Language" && /Rhetorical Analysis/i.test(label) && !alreadyHasStimulus(prompt))
  ) {
    prompt = `${langExcerpt(original)}\n\n${prompt}`;
  }
  if (
    subject === "AP English Literature" &&
    /Poetry|Prose|Literary argument/i.test(label) &&
    !alreadyHasStimulus(prompt)
  ) {
    prompt = `${litExcerpt(original)}\n\n${prompt}`;
  }

  if (!alreadyHasParts(prompt)) {
    if (label.includes("DBQ")) {
      prompt = `${prompt}\n\n(a) Write a thesis that responds to the prompt.\n(b) Use TWO documents, explaining how each supports your argument.\n(c) Provide ONE piece of outside evidence.`;
    } else if (label.includes("Long Essay") || /\bLEQ\b/.test(label)) {
      prompt = `${prompt}\n\n(a) Contextualize the topic (1–2 sentences).\n(b) Write a thesis that takes a position.\n(c) Support with TWO specific examples.`;
    } else if (label.includes("Short-Answer")) {
      prompt = `${prompt}\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.`;
    } else if (/Rhetorical Analysis/i.test(label)) {
      prompt = `${prompt}\n\n(a) Identify the rhetorical situation (speaker, audience, purpose).\n(b) Analyze TWO rhetorical choices and their effects.`;
    } else if (/Poetry|Prose fiction|Literary argument/i.test(label)) {
      prompt = `${prompt}\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.`;
    } else if (/Synthesis|Argument/i.test(label) && subject === "AP English Language") {
      prompt = `${prompt}\n\n(a) State a defensible thesis.\n(b) Support it with specific evidence and commentary.`;
    } else {
      prompt = `${prompt}\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.`;
    }
  }

  return {
    prompt,
    blankSteps: defaultBlanks(label, item.blankSteps),
    visibleSteps: defaultVisible(label, item.visibleSteps),
  };
}

function expandHistoryMcq(item: QuestionnaireItem): QuestionnaireItem {
  if (alreadyHasStimulus(item.prompt)) return item;
  return {
    ...item,
    prompt: `Stimulus (original): ${historyStimulus(item.prompt)}\n\n${item.prompt}`,
  };
}

export function shapeApItem(subject: string, item: QuestionnaireItem, set?: Questionnaire): QuestionnaireItem {
  const spec = AP_EXAM_BLUEPRINT[subject];
  if (!spec) {
    if (item.format === "concept_check") {
      const expanded = expandOfficialFrq(subject, "Free-response skill check", item);
      return {
        ...item,
        ...expanded,
        format: "frq_half",
        examSection: "Free-response skill check",
        conceptIntro: prefixIntro(item.conceptIntro, "Free-response skill check"),
      };
    }
    return { ...item, examSection: item.format === "mcq" ? "Multiple Choice (4 options)" : "Free Response" };
  }

  if (item.format === "mcq") {
    const labeled = {
      ...item,
      examSection: spec.mcq,
      conceptIntro: prefixIntro(item.conceptIntro, spec.mcq),
    };
    return isHistorySubject(subject) ? expandHistoryMcq(labeled) : labeled;
  }

  const label = pickFrqLabel(subject, item, set);
  const expanded = expandOfficialFrq(subject, label, item);
  return {
    ...item,
    ...expanded,
    format: item.format === "concept_check" ? "frq_half" : item.format,
    examSection: label,
    conceptIntro: prefixIntro(item.conceptIntro, label),
  };
}

export function shapeApQuestionnaire(set: Questionnaire): Questionnaire {
  const spec = AP_EXAM_BLUEPRINT[set.subject];
  const items = set.items.map((item) => shapeApItem(set.subject, item, set));
  if (!spec) return { ...set, items };
  const note = spec.blurb;
  const description = set.description.includes("College Board") ? set.description : `${set.description} Official exam shape: ${note}`;
  return { ...set, items, description, examFormatNote: note };
}

export function shapeApQuestionnaires(sets: Questionnaire[]): Questionnaire[] {
  return sets.map(shapeApQuestionnaire);
}
