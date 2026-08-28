export type WritingFramework = {
  id: string;
  subject: string;
  title: string;
  sections: Array<{
    heading: string;
    bullets: string[];
  }>;
  exampleThesis?: string;
};

export const writingFrameworks: WritingFramework[] = [
  {
    id: "apush-dbq",
    subject: "AP US History",
    title: "DBQ essay framework",
    exampleThesis:
      "Between 1890 and 1920, Progressive reformers reshaped American government by expanding federal regulatory power and direct democracy, though their gains often excluded racial minorities and working-class women.",
    sections: [
      {
        heading: "Before you write (7-minute plan)",
        bullets: [
          "Read the prompt twice: underline the time period, topic, and what you must explain (causes, effects, continuity, change, comparison).",
          "Group documents by argument (not by author). Aim for 2–3 clusters that support one thesis.",
          "Note one document you can qualify, extend, or challenge — this earns the complexity point.",
          "Sketch a thesis with a defensible claim plus 2–3 categories of evidence (political, economic, social).",
        ],
      },
      {
        heading: "Introduction (~2 paragraphs or 1 dense paragraph)",
        bullets: [
          "Open with 1–2 sentences of historical context that frames the prompt (no fluff biography).",
          "State a clear thesis that answers every part of the prompt.",
          "Optionally preview your line of reasoning (the categories you will prove).",
        ],
      },
      {
        heading: "Body paragraphs (use 3–4)",
        bullets: [
          "Start with a topic sentence that is an argument, not a fact.",
          "Support with 2+ documents per paragraph when possible; explain how each document illustrates your claim.",
          "Add outside evidence (specific facts, names, events) beyond the documents.",
          "Analyze point of view, purpose, audience, or context for at least two documents across the essay.",
          "End with a sentence linking back to the thesis or transitioning to the next idea.",
        ],
      },
      {
        heading: "Complexity & conclusion",
        bullets: [
          "Qualify or nuance your thesis in one paragraph (e.g., reforms helped some groups while harming others).",
          "Conclusion: restate thesis in fresh language; do not introduce new evidence.",
          "If time is short, write a one-sentence conclusion rather than skipping it entirely.",
        ],
      },
    ],
  },
  {
    id: "apush-leq",
    subject: "AP US History",
    title: "LEQ essay framework",
    exampleThesis:
      "The Civil War accelerated industrialization in the North by destroying Southern competition for cotton goods and spurring railroad and factory expansion, while Reconstruction policies briefly opened political participation to formerly enslaved men before retrenchment in the 1870s.",
    sections: [
      {
        heading: "Decode the prompt",
        bullets: [
          "Identify the task word: compare, explain causes, explain effects, evaluate continuity and change, or assess significance.",
          "Box the time boundaries; your essay must stay inside them.",
          "List 4–6 specific evidence bullets you know before outlining.",
        ],
      },
      {
        heading: "Thesis & outline",
        bullets: [
          "Thesis = direct answer + roadmap (2–3 analytical categories).",
          "One body paragraph per category; each paragraph needs a distinct argument.",
          "Plan one paragraph that shows change over time or causation chains if the prompt asks for it.",
        ],
      },
      {
        heading: "Body paragraph structure",
        bullets: [
          "Topic sentence states the sub-argument.",
          "Evidence: specific events, policies, court cases, or demographic shifts with dates when possible.",
          "Analysis: explain why the evidence proves your topic sentence (not what happened — why it matters).",
          "Link: tie the paragraph back to the full thesis.",
        ],
      },
      {
        heading: "Scoring habits",
        bullets: [
          "Contextualization: 1–2 sentences before or after the thesis that situate the issue in a broader era.",
          "Complexity: acknowledge a counterargument, alternate cause, or limitation of your thesis.",
          "Avoid narrative chronology unless the prompt is explicitly chronological.",
        ],
      },
    ],
  },
  {
    id: "aplang-rhetorical-analysis",
    subject: "AP English Language",
    title: "Rhetorical analysis essay",
    exampleThesis:
      "Through juxtaposition of corporate optimism with workers’ lived hardship and a shift from abstract statistics to visceral imagery, the speaker compels her audience to treat labor reform as an urgent moral obligation rather than a distant policy debate.",
    sections: [
      {
        heading: "Read like a rhetorician",
        bullets: [
          "Identify SOAPSTone: Speaker, Occasion, Audience, Purpose, Subject, Tone.",
          "Mark shifts in tone, structure, or imagery — shifts often anchor body paragraphs.",
          "Note the central exigence: what problem or tension the text responds to.",
        ],
      },
      {
        heading: "Thesis",
        bullets: [
          "Argue how the author builds an argument to achieve a purpose for a specific audience.",
          "Name 2–3 rhetorical choices (not a laundry list of devices).",
          "Avoid praising the author (“great speech”); analyze strategy.",
        ],
      },
      {
        heading: "Body paragraphs",
        bullets: [
          "Organize by rhetorical move or section of the text, not by device (avoid one paragraph per device).",
          "Pattern: claim about strategy → embed short quotes → analyze effect on audience.",
          "Connect diction, syntax, imagery, and structure to the speaker’s purpose.",
          "Use rhetorical vocabulary precisely (anaphora, juxtaposition, concession, etc.).",
        ],
      },
      {
        heading: "Line of reasoning & conclusion",
        bullets: [
          "Show how ideas build: early paragraphs may establish credibility; later ones intensify urgency.",
          "Conclusion: explain the cumulative effect — what the audience is likely to think, feel, or do.",
          "Do not argue whether you agree with the author; analyze persuasion.",
        ],
      },
    ],
  },
  {
    id: "aplang-argument",
    subject: "AP English Language",
    title: "Argument essay",
    exampleThesis:
      "Schools should prioritize media literacy over blanket phone bans because teaching students to evaluate sources builds lifelong civic judgment, whereas confiscation policies only push distraction underground without changing habits.",
    sections: [
      {
        heading: "Position & qualification",
        bullets: [
          "Take a clear position on the prompt; ambiguity weakens the line of reasoning.",
          "You may qualify (yes, but…) or propose a nuanced middle path — still defend a thesis.",
          "Brainstorm values at stake: fairness, safety, autonomy, equity, efficiency.",
        ],
      },
      {
        heading: "Thesis & evidence plan",
        bullets: [
          "Thesis states position + strongest reason + optional preview of support.",
          "Mix evidence types: personal experience (brief), historical example, current policy, hypothetical scenario.",
          "At least one paragraph should address a counterargument and refute or reframe it.",
        ],
      },
      {
        heading: "Paragraph moves",
        bullets: [
          "Topic sentence = reason supporting your thesis, not a restatement of the prompt.",
          "Develop with concrete illustration; avoid vague generalities (“technology is bad”).",
          "Use concessive structure when fair: “While X is true, Y matters more because…”",
        ],
      },
      {
        heading: "Style & conclusion",
        bullets: [
          "Vary sentence length; use deliberate syntax for emphasis.",
          "Conclusion: synthesize reasons and end with a broader implication (education, democracy, ethics).",
          "Do not end with a rhetorical question unless you answer it.",
        ],
      },
    ],
  },
  {
    id: "aplit-poetry",
    subject: "AP English Literature",
    title: "Poetry essay",
    exampleThesis:
      "By fracturing syntax across enjambed lines and then resolving into a single imperative in the final stanza, the poem transforms private grief into a public call for remembrance, suggesting that language itself must bear witness before healing can begin.",
    sections: [
      {
        heading: "First read & annotation",
        bullets: [
          "Read aloud for sound: meter, rhyme, repetition, caesuras.",
          "Paraphrase each stanza in one sentence — clarify literal action before symbolism.",
          "Track speaker, setting, and tonal shifts.",
        ],
      },
      {
        heading: "Thesis",
        bullets: [
          "Argue how form and content work together to create meaning.",
          "Reference specific poetic elements tied to theme (not “the poem uses imagery”).",
          "Poetry theses often address tension, transformation, or ambiguity.",
        ],
      },
      {
        heading: "Body paragraphs",
        bullets: [
          "Organize by interpretive claim (e.g., isolation → connection) supported by multiple textual details.",
          "Quote brief phrases; weave quotes into your sentences.",
          "Analyze how line breaks, sound, or stanza shape affect meaning.",
        ],
      },
      {
        heading: "Literary depth",
        bullets: [
          "Discuss ambiguity or multiple readings when honest — complexity strengthens analysis.",
          "Avoid biographical fallacy unless the prompt invites it.",
          "Conclusion: articulate the poem’s central insight without repeating the thesis verbatim.",
        ],
      },
    ],
  },
  {
    id: "aplit-prose-fiction",
    subject: "AP English Literature",
    title: "Prose fiction essay",
    exampleThesis:
      "Through free indirect discourse and ironic descriptions of domestic routine, the narrator exposes how social performance conceals the protagonist’s mounting alienation, ultimately suggesting that conformity demands a quiet surrender of self-knowledge.",
    sections: [
      {
        heading: "Close reading setup",
        bullets: [
          "Identify narrative perspective (first person, third limited, omniscient) and its constraints.",
          "Note setting details that mirror internal states.",
          "Mark moments of dialogue, description, or action that reveal character motivation.",
        ],
      },
      {
        heading: "Thesis",
        bullets: [
          "Argue how a literary element develops a theme or character insight.",
          "Connect technique to meaning: e.g., symbolism, structure, tone, juxtaposition.",
          "Thesis should be interpretive, not plot summary.",
        ],
      },
      {
        heading: "Body paragraphs",
        bullets: [
          "Use PIE or similar: Point, Illustrate with quoted evidence, Explain significance.",
          "Analyze verbs and modifiers — diction reveals attitude toward characters.",
          "Link each paragraph to the evolving relationship between character and society (common AP Lit move).",
        ],
      },
      {
        heading: "Whole-text awareness",
        bullets: [
          "Reference beginning and ending when discussing development or resolution.",
          "Acknowledge what remains unresolved if the ending is ambiguous.",
          "Conclusion: state the larger human question the passage raises (identity, power, love, mortality).",
        ],
      },
    ],
  },
  {
    id: "apwh-leq-comparison",
    subject: "AP World History",
    title: "LEQ comparison framework",
    exampleThesis:
      "Both the Ottoman and Mughal empires used religious tolerance to stabilize diverse populations and secure tax revenue, yet the Ottomans embedded millets in law while Mughal policies shifted more dramatically under individual rulers, producing less institutional continuity.",
    sections: [
      {
        heading: "Comparison prompt checklist",
        bullets: [
          "Identify the two (or more) regions, societies, or processes you must compare.",
          "Decide: compare similarities and differences, or evaluate a claim about both.",
          "Choose 2–3 categories for comparison (political, economic, social, cultural, technological).",
        ],
      },
      {
        heading: "Thesis models",
        bullets: [
          "Direct: “While both X and Y …, X … whereas Y … because ….”",
          "Nested: “Both …; however, the greater difference lies in ….”",
          "Include a reason (why), not only what differs.",
        ],
      },
      {
        heading: "Body organization",
        bullets: [
          "Thematic paragraphs work best: one category discussed for both societies in the same paragraph.",
          "Avoid writing all of society A then all of society B without linking sentences.",
          "Use comparison language: similarly, in contrast, whereas, while, both, unlike.",
        ],
      },
      {
        heading: "Evidence & context",
        bullets: [
          "Name specific empires, trade routes, belief systems, or reforms with approximate dates.",
          "Contextualize each region within its broader world period (e.g., post-1450 connections).",
          "Complexity: explain when a similarity is superficial or when a difference masks a shared cause.",
        ],
      },
    ],
  },
];
