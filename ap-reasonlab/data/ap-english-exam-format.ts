import { Questionnaire } from "@/lib/types";

/**
 * Original AP English items in College Board exam shape.
 * Not College Board exam text. Lang: 4-choice MCQ (reading + writing revision) + 3 FRQ types.
 * Lit: poetry/prose MCQ + poetry, prose, and literary-argument FRQs.
 */

export const apEnglishExamFormatQuestionnaires: Questionnaire[] = [
  {
    id: "aplang-exam-format-a",
    title: "AP English Language — Exam Format Set A",
    subject: "AP English Language",
    kind: "generated",
    description:
      "College Board AP English Language shape: 4-choice reading and writing MCQs plus Synthesis, Rhetorical Analysis, and Argument FRQs. Original passages — not AP exam text.",
    generationNote:
      "Original 2026-format practice aligned to AP English Language and Composition exam structure (Section I MCQ; Section II Q1–Q3).",
    estimatedMinutes: 55,
    difficultyTier: 2,
    tags: ["exam-format", "MCQ", "FRQ", "synthesis", "rhetoric", "argument", "generated"],
    items: [
      {
        id: "aplang-fmt-r1",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elang-rhetoric",
        conceptIntro: "Section I · Reading: rhetorical situation (audience, purpose, exigence).",
        prompt: `The following is an excerpt from a 2024 city-council letter (original practice text).

“I write not as a contractor but as a parent who walks this corridor at 7:40 a.m. The painted bike lane disappears at Oak Street, exactly where two school buses idle. You have already heard cost estimates. I am asking you to hear the daily sequence: a child on a bike, a bus’s blind spot, and a paint line that ends.”

The writer’s primary purpose in this paragraph is to`,
        choices: [
          "A. summarize a contractor’s bid for the council",
          "B. shift the council from abstract cost talk to a specific, timed scene of risk",
          "C. prove that all painted lanes are illegal",
          "D. request that school buses be banned citywide",
        ],
        mcqAnswer: 1,
        hints: ["Look at the contrast between ‘cost estimates’ and the 7:40 a.m. sequence."],
        answerKey: "B. The letter uses a concrete morning scene to reframe a budget discussion as a safety sequence.",
      },
      {
        id: "aplang-fmt-r2",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elang-evidence-types",
        conceptIntro: "Section I · Reading: claims, evidence, and commentary.",
        prompt: `Same letter, next sentences:

“Last winter the hospital logged nine bicycle–vehicle collisions on this mile, three involving students under sixteen. I do not claim paint alone would have prevented each one. I do claim that a physical barrier at Oak would have changed the geometry the buses face.”

The writer’s concession (“I do not claim…”) mainly functions to`,
        choices: [
          "A. abandon the argument for a barrier",
          "B. limit the causal claim so the later geometry point remains defensible",
          "C. show that hospital records are fake",
          "D. argue that students should not bike",
        ],
        mcqAnswer: 1,
        hints: ["A concession often narrows a claim so the remaining claim is stronger."],
        answerKey: "B. The writer refuses a total-cause claim, then offers a more limited geometric claim.",
      },
      {
        id: "aplang-fmt-r3",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elang-audience-purpose",
        conceptIntro: "Section I · Reading: audience and appeals.",
        prompt: `A scientist writing for a general newspaper begins: “You do not need a chemistry degree to follow this. Think of a battery as a crowded hallway: ions are people trying to get through a door.”

The analogy is best understood as an appeal to`,
        choices: [
          "A. specialized laboratory jargon for expert peers",
          "B. a general audience’s everyday spatial experience",
          "C. legal precedent about batteries",
          "D. nostalgia for a specific historical event",
        ],
        mcqAnswer: 1,
        hints: ["Who is ‘you,’ and what kind of knowledge does the hallway image assume?"],
        answerKey: "B. The hallway image translates electrochemistry into ordinary movement.",
      },
      {
        id: "aplang-fmt-r4",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elang-rhetoric",
        conceptIntro: "Section I · Reading: line of reasoning.",
        prompt: `An op-ed argues: (1) city trees cut summer peak temperatures; (2) low-income blocks have fewer trees; (3) therefore cooling policy should prioritize those blocks rather than downtown plazas that already have shade.

The third sentence is best described as`,
        choices: [
          "A. a restatement of a definition with no claim",
          "B. a policy inference that follows from a disparity plus a mechanism",
          "C. a personal anecdote about one plaza",
          "D. a concession that trees do not affect temperature",
        ],
        mcqAnswer: 1,
        hints: ["(1) mechanism, (2) distribution, (3) who should get the resource."],
        answerKey: "B. The conclusion allocates a cooling resource using mechanism + inequity.",
      },
      {
        id: "aplang-fmt-w1",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elang-rhetoric",
        conceptIntro: "Section I · Writing: revise a sentence for a stated goal.",
        prompt: `A student wants to emphasize a limitation.

Current sentence: “The survey of 40 seniors at one high school found that 70% wanted later start times.”

Which revision best meets the goal?`,
        choices: [
          "A. The survey proved that every teenager in the country wants later start times.",
          "B. Because the survey sampled only 40 seniors at one school, the 70% figure cannot be treated as a national result.",
          "C. Surveys are a type of homework.",
          "D. Delete the sentence and replace it with “School exists.”",
        ],
        mcqAnswer: 1,
        hints: ["The goal is limitation, not a bigger claim."],
        answerKey: "B. Names sample size and site so the statistic is not over-generalized.",
      },
      {
        id: "aplang-fmt-w2",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elang-synthesis-sources",
        conceptIntro: "Section I · Writing: transitions and coherence.",
        prompt: `Which sentence most effectively introduces a paragraph that will concede a counterargument and then limit it?`,
        choices: [
          "A. Trees are green.",
          "B. Critics are right that barriers cost more than paint; the question is whether the extra cost is justified by the crash geometry at Oak Street.",
          "C. I like bicycles.",
          "D. Cost never matters in public policy.",
        ],
        mcqAnswer: 1,
        hints: ["Look for a real concession plus a narrowed issue."],
        answerKey: "B. Grants the cost point, then reframes the issue as justification at a specific site.",
      },
      {
        id: "aplang-fmt-w3",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elang-rhetoric",
        conceptIntro: "Section I · Writing: combine sentences without a comma splice.",
        prompt: `Combine without creating a comma splice:

“The sample was small.” “The pattern appeared in all three trials.”`,
        choices: [
          "A. The sample was small, the pattern appeared in all three trials.",
          "B. Although the sample was small, the pattern appeared in all three trials.",
          "C. The sample was small although.",
          "D. Pattern trials three the sample.",
        ],
        mcqAnswer: 1,
        hints: ["Need a subordinating word or a semicolon, not a comma alone."],
        answerKey: "B. A concessive clause plus a complete main clause.",
      },
      {
        id: "aplang-fmt-w4",
        format: "mcq",
        difficultyTier: 1,
        conceptId: "elang-audience-purpose",
        conceptIntro: "Section I · Writing: delete off-topic material.",
        prompt: `A paragraph’s purpose is to explain how to keep a lab notebook. Which sentence should be deleted?`,
        choices: [
          "A. Date every page before you write data.",
          "B. Record raw values before averaging.",
          "C. My favorite streaming show is about chefs in space.",
          "D. Note which instrument produced each number.",
        ],
        mcqAnswer: 2,
        hints: ["Keep only notebook-procedure sentences."],
        answerKey: "C. The show sentence does not serve the paragraph’s purpose.",
      },
      {
        id: "aplang-fmt-frq1",
        format: "frq_half",
        difficultyTier: 3,
        conceptId: "elang-synthesis",
        conceptIntro:
          "Section II · Question 1 Synthesis (suggested 40 minutes, including reading). Use at least three of the sources below. Original sources — not AP exam packets.",
        prompt: `Prompt: Write an essay that synthesizes at least three of the sources to argue your position on whether public high schools should replace some final exams with portfolio defenses.

Source A (district FAQ): Portfolios can show revision over time; scoring still needs rubrics so grades stay comparable.

Source B (teacher blog): Defenses reward students who speak easily; quiet students may be underrated unless written commentary counts equally.

Source C (university study excerpt): In one 600-student sample, portfolios predicted first-year writing marks slightly better than a single sit-down exam, but the study was not randomized.

Source D (parent letter): Families without home computers struggle to assemble multimedia portfolios.

Source E (table): Schools that kept a short common exam plus a portfolio had smaller score gaps by income than schools that used portfolios only (observational data).`,
        visibleSteps: [
          "Take a defensible position (not “it depends” without a claim).",
          "Put at least two sources in conversation in each body paragraph (agree, complicate, or limit).",
          "Use commentary: explain how the evidence supports your line of reasoning.",
        ],
        blankSteps: [
          "Thesis: ______",
          "How Source C’s limitation affects your claim: ______",
          "How you will use Source B or D as a complication: ______",
        ],
        hints: [
          "Synthesis is not a tour of sources. Group them by argument.",
          "Qualify: a hybrid (short common exam + portfolio) can answer both reliability and process.",
        ],
        blankAnswers: [
          "Schools should keep a short common exam and add a portfolio defense with written options so speaking skill is not the only gate.",
          "Source C is observational and not randomized, so it supports a cautious claim, not proof that portfolios always predict college writing.",
          "Source B/D: score speaking separately or allow written defense; provide school-day lab time and devices.",
        ],
      },
      {
        id: "aplang-fmt-frq2",
        format: "frq_half",
        difficultyTier: 3,
        conceptId: "elang-rhetoric",
        conceptIntro:
          "Section II · Question 2 Rhetorical Analysis (suggested 40 minutes). Analyze the writer’s rhetorical choices — not whether you agree.",
        prompt: `Analyze how the writer of this original practice speech uses rhetorical choices to persuade a school board to fund late buses.

“You already fund the 3:15 buses. I am asking you to fund the 5:10 buses — not as a luxury, but as the second half of the school day you already claim to value. Last spring, 40 students stayed for robotics until 5:00 and then walked a four-lane road in the dark. I can show you the attendance sheet. I can also show you the police report from the near-miss in November. If after-school is ‘optional,’ say so. If it is part of learning, stop stranding the students who stay.”`,
        visibleSteps: [
          "Identify speaker, audience (school board), exigence, and purpose.",
          "Choose 2–3 choices (contrast, evidence types, direct address, conditional ‘If…’) and explain their effect on this audience.",
        ],
        blankSteps: [
          "Thesis (writer + choices + purpose): ______",
          "One choice and its effect: ______",
        ],
        hints: [
          "Do not write an argument essay for late buses. Analyze HOW the speech works.",
          "The attendance sheet vs police report pair fact with urgency.",
        ],
        blankAnswers: [
          "The speaker uses contrast between funded 3:15 buses and missing 5:10 buses, documentary evidence, and a conditional challenge to push the board to treat after-school as part of learning.",
          "The ‘If after-school is optional…’ pair forces the board to own a definition rather than hide behind cost talk.",
        ],
      },
      {
        id: "aplang-fmt-frq3",
        format: "frq_half",
        difficultyTier: 2,
        conceptId: "elang-synthesis",
        conceptIntro: "Section II · Question 3 Argument (suggested 40 minutes). Support a position with reasoning and evidence from reading, observation, or study — no provided sources.",
        prompt: `Prompt (original): To what extent should schools limit students’ use of generative AI when they write take-home essays?

Write a defensible thesis and one body-paragraph plan (claim, evidence, commentary, concession).`,
        visibleSteps: [
          "Take a position you can defend (ban / allow with citation / process-based checks).",
          "Use specific evidence (a class policy, a study you know, an observed misuse) — not empty ‘AI is good/bad.’",
        ],
        blankSteps: ["Thesis: ______", "Body ¶1 claim + evidence + commentary: ______"],
        hints: [
          "A qualified claim (process checks, oral follow-up, citation of tools) is often stronger than an absolute ban.",
          "Name a limitation of your own evidence.",
        ],
        blankAnswers: [
          "Schools should allow AI as a drafting aid only if students submit process notes and can explain choices in a short oral check, because take-home essays otherwise measure tool access more than writing skill.",
          "Claim: undetected AI flattens voice. Evidence: a class set where several essays shared the same generic opener. Commentary: similar openers suggest template generation. Concession: detection tools err, so process evidence is fairer than a detector score alone.",
        ],
      },
    ],
  },
  {
    id: "aplit-exam-format-a",
    title: "AP English Literature — Exam Format Set A",
    subject: "AP English Literature",
    kind: "generated",
    description:
      "College Board AP English Literature shape: 4-choice close-reading MCQs on original poetry and prose, plus poetry, prose, and literary-argument FRQs. Not AP exam text.",
    generationNote:
      "Original 2026-format practice aligned to AP English Literature and Composition (Section I MCQ; Section II poetry, prose, literary argument).",
    estimatedMinutes: 55,
    difficultyTier: 2,
    tags: ["exam-format", "MCQ", "FRQ", "poetry", "prose", "generated"],
    items: [
      {
        id: "aplit-fmt-p1",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elit-poetry",
        conceptIntro: "Section I · Poetry: original short poem (practice text, not a published AP passage).",
        prompt: `The Wait

The kettle does not boil because I watch.
It boils because the coil is honest.
I set two cups out anyway—
one for you, one for the steam.

The speaker’s attitude toward waiting is best described as`,
        choices: [
          "A. purely scientific, with no feeling",
          "B. self-aware: the speaker knows watching does not heat water, yet still prepares a second cup",
          "C. angry at the kettle for being slow",
          "D. certain that the guest has already arrived",
        ],
        mcqAnswer: 1,
        hints: ["Contrast line 1–2 with the two cups."],
        answerKey: "B. The correction about the coil is dry; the extra cup keeps hope or ritual in play.",
      },
      {
        id: "aplit-fmt-p2",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elit-poetry",
        conceptIntro: "Section I · Poetry: diction and image.",
        prompt: `In “The Wait,” the phrase “the coil is honest” most nearly suggests that`,
        choices: [
          "A. the appliance has a moral character like a person in a novel",
          "B. physical cause, not the speaker’s gaze, produces the boil",
          "C. the guest is lying",
          "D. steam cannot be seen",
        ],
        mcqAnswer: 1,
        hints: ["Honest here contrasts with the superstition of watching."],
        answerKey: "B. ‘Honest’ credits the heating element’s actual work.",
      },
      {
        id: "aplit-fmt-p3",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elit-poetry",
        conceptIntro: "Section I · Poetry: structure and turn.",
        prompt: `The dash before “one for you, one for the steam” mainly functions to`,
        choices: [
          "A. introduce a list of grocery items",
          "B. pause before splitting the second cup’s purpose between a person and vapor",
          "C. mark a change of speaker",
          "D. correct a spelling error",
        ],
        mcqAnswer: 1,
        hints: ["What two things receive cups?"],
        answerKey: "B. The dash opens an appositive split: guest vs steam (presence vs absence).",
      },
      {
        id: "aplit-fmt-pr1",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elit-prose-voice",
        conceptIntro: "Section I · Prose: original excerpt (practice text).",
        prompt: `We kept the porch light on because my father believed darkness was an opinion. Moths wrote their brief essays against the bulb. I sat on the step with a library book I did not open. When a car slowed, he would say, “Not ours,” as if the street had a duty to deliver someone.

The narrator’s tone toward the father is closest to`,
        choices: [
          "A. simple worship with no distance",
          "B. affectionate irony: the father’s sayings are quoted and slightly too large for the scene",
          "C. courtroom accusation of a crime",
          "D. indifference; the father is never characterized",
        ],
        mcqAnswer: 1,
        hints: ["‘Darkness was an opinion’ and ‘Not ours’ are slightly oversized."],
        answerKey: "B. The narrator repeats the father’s formulas with a wry, fond gap.",
      },
      {
        id: "aplit-fmt-pr2",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elit-theme",
        conceptIntro: "Section I · Prose: image and theme.",
        prompt: `In the porch excerpt, “Moths wrote their brief essays against the bulb” most nearly implies that`,
        choices: [
          "A. moths are professional journalists",
          "B. small, repetitive collisions with light stand in for failed or unfinished attempts at meaning",
          "C. the bulb is about to explode",
          "D. the library book is about insects",
        ],
        mcqAnswer: 1,
        hints: ["Essays + brief + against the light."],
        answerKey: "B. The metaphor makes the moths’ circling a figure for short, doomed composition.",
      },
      {
        id: "aplit-fmt-pr3",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elit-prose-voice",
        conceptIntro: "Section I · Prose: what is left unread.",
        prompt: `The closed library book on the step most clearly emphasizes`,
        choices: [
          "A. that the narrator prefers television",
          "B. waiting as a state that postpones other kinds of attention",
          "C. that the town has no library",
          "D. a scientific experiment about moths",
        ],
        mcqAnswer: 1,
        hints: ["The book is present but unused."],
        answerKey: "B. The unread book shows attention held in reserve for the street.",
      },
      {
        id: "aplit-fmt-d1",
        format: "mcq",
        difficultyTier: 2,
        conceptId: "elit-drama-conflict",
        conceptIntro: "Section I · Drama-style dialogue (original).",
        prompt: `MARA: You can stay if you want the last word.
LEO: I want the first quiet.
MARA: That’s a kind of last word.

The exchange mainly develops`,
        choices: [
          "A. a debate about furniture",
          "B. a power struggle over who controls silence and speech",
          "C. agreement that both will leave immediately",
          "D. a weather report",
        ],
        mcqAnswer: 1,
        hints: ["Last word vs first quiet."],
        answerKey: "B. Each character claims a different kind of control over the conversation’s end.",
      },
      {
        id: "aplit-fmt-frq1",
        format: "frq_half",
        difficultyTier: 3,
        conceptId: "elit-poetry",
        conceptIntro: "Section II · Poetry analysis (suggested 40 minutes). Thesis about how craft creates meaning — not paraphrase only.",
        prompt: `Read “The Wait” again (kettle / coil / two cups). In a well-developed essay, analyze how the poet uses contrast, image, and structure to convey the speaker’s relationship to waiting.`,
        visibleSteps: [
          "Thesis: waiting as ritual vs physical cause.",
          "Body: coil ‘honest’ vs watching; dash and second cup for steam.",
        ],
        blankSteps: ["Thesis: ______", "One device → meaning: ______"],
        hints: [
          "Avoid ‘the poet uses imagery to paint a picture.’ Name the picture’s job.",
          "Steam as guest-substitute is a claim you can evidence.",
        ],
        blankAnswers: [
          "The poem undercuts the superstition of watching a kettle, then restores waiting as a ritual by pouring a cup for steam rather than a person.",
          "The dash delays the split between ‘you’ and ‘steam,’ making absence occupy a cup.",
        ],
      },
      {
        id: "aplit-fmt-frq2",
        format: "frq_half",
        difficultyTier: 3,
        conceptId: "elit-prose-voice",
        conceptIntro: "Section II · Prose fiction analysis (suggested 40 minutes).",
        prompt: `Using the porch-light excerpt, analyze how the narrator’s voice and selected details characterize the father’s hope and the narrator’s distance from it.`,
        visibleSteps: [
          "Track diction: ‘darkness was an opinion,’ ‘Not ours.’",
          "Closed book vs moths’ ‘essays’ as parallel unfinished attention.",
        ],
        blankSteps: ["Thesis: ______", "One detail → characterization: ______"],
        hints: ["Voice can be fond and critical in the same sentence."],
        blankAnswers: [
          "The narrator frames the father’s watchfulness as a slightly comic philosophy, while withholding the opening of the book — a quiet refusal to join the vigil fully.",
          "‘Not ours’ treats passing cars as a civic failure, revealing the father’s scale of hope; the narrator’s quotation marks put a gap around that scale.",
        ],
      },
      {
        id: "aplit-fmt-frq3",
        format: "frq_half",
        difficultyTier: 2,
        conceptId: "elit-theme",
        conceptIntro:
          "Section II · Literary argument (suggested 40 minutes). Choose a novel, play, or epic you know well. Do not use the short practice excerpts above as your only text.",
        prompt: `Prompt (original): Many works of literature present a character who keeps a ritual that no longer matches the facts of the situation. Choose a work of literary merit and argue how that ritual reveals a theme of the work. Avoid mere plot summary.`,
        visibleSteps: [
          "Name the work and the ritual.",
          "Thesis: ritual vs fact → theme (not a topic word like ‘family’).",
        ],
        blankSteps: ["Work + ritual: ______", "Thematic claim: ______"],
        hints: [
          "Theme is a sentence, not ‘love’ or ‘power.’",
          "Two precise moments beat a full plot recap.",
        ],
        blankAnswers: [
          "Example shape: In [work], [character] continues [ritual] after [fact has changed].",
          "The persistence of the ritual shows [theme about denial, care, or control], which the work complicates when [later scene].",
        ],
      },
    ],
  },
];
