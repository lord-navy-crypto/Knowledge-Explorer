#!/usr/bin/env python3
"""Build _hss_deep_blocks.py with CED-aligned deepening content."""

from pathlib import Path

OUTPUT = Path(__file__).resolve().parent / "_hss_deep_blocks.py"

LANG = "AP English Language"
LIT = "AP English Literature"
HUG = "AP Human Geography"
EURO = "AP European History"
WORLD = "AP World History"


def block(text: str) -> str:
    return text.strip()


BLOCKS = {}

# ── AP English Language ──────────────────────────────────────────────────────

BLOCKS[(LANG, "Unit 1: Rhetorical Situation")] = block("""
## Detailed Knowledge

## 1. The Rhetorical Situation as an Analytical Framework

The AP English Language and Composition Course and Exam Description (CED) organizes rhetorical analysis around the rhetorical situation: the dynamic relationship among exigence, audience, writer, purpose, context, and message. Exigence is the problem, gap, or tension that invites a response—not merely a topic but a need for discourse. A heat-wave op-ed does not exist because "weather exists"; it exists because record temperatures create urgency for policy debate. Audience includes both the intended readers and the resistant or skeptical segments a writer must address. Purpose is what the writer wants the audience to think, feel, or do, and it must be inferred from strategic choices rather than assumed from genre alone. Context encompasses historical moment, cultural assumptions, prior debates, and medium (speech, editorial, letter, visual text). Message is the content shaped by all other elements. On the exam, strong analysis always returns choices to this framework: a metaphor is not interesting because it is poetic; it is interesting because, for this audience facing this exigence, it reframes responsibility or risk.

## 2. Exigence, Kairos, and Constraints

Exigence differs from subject matter. Subject matter is what the text is "about"; exigence is why the text must exist now. Kairos names the timeliness of an appeal—the sense that delay would miss a window of persuasion. Constraints include both intrinsic factors (genre conventions, available evidence, the writer's ethos) and extrinsic factors (legal limits, social taboos, platform rules). A Supreme Court dissent faces different constraints than a TikTok explainer on the same case. Students often conflate exigence with thesis; the thesis is the writer's answer, while exigence is the pressure that makes an answer necessary. When analyzing College Board passages, locate exigence by asking what would remain unresolved if the text disappeared. Strong commentary links a specific word or structural move to the exigence: for example, repeated second-person address may intensify kairos by placing the reader inside an immediate crisis.

## 3. Audience, Persona, and Stance

Audience analysis on AP Lang requires specificity. "General public" is rarely sufficient unless the text truly assumes no specialized knowledge and no single stake. Audiences carry values, fears, prior beliefs, and thresholds for credibility. Persona is the version of the self the writer constructs—expert, neighbor, prophet, pragmatist—not the private biography. Stance is the writer's implied attitude toward subject and audience: urgent, ironic, mournful, combative, conciliatory. These three interact. A scientist writing for legislators may adopt a restrained persona and deferential stance while still arguing forcefully for regulation. AP readers reward students who distinguish persona from author biography and who explain how diction or syntax signals stance. A formal Latinate lexicon may build institutional ethos for a policy audience; blunt monosyllables may signal solidarity with affected communities.

## 4. Purpose, Appeals, and Strategic Choices

Purpose is plural in most real texts. A eulogy may console, celebrate, and argue for continued commitment to a cause. The CED treats ethos, pathos, and logos as resources deployed situationally, not as labels to paste onto sentences. Ethos emerges from credentials, fairness, acknowledgment of limits, and tone. Pathos operates through concrete detail, narrative, analogy, and rhythm—not through melodrama alone. Logos includes data, causal reasoning, definition, and comparison, but also the internal coherence of a line of reasoning. The critical AP skill is explaining how a choice advances purpose for this audience. Instead of "this is pathos," write "the catalog of ruined harvests turns abstract drought statistics into sensory loss, pressing farmers and suburban voters alike to accept water restrictions." Organization, evidence selection, and refutation are purpose-driven strategies, not separate from "style."

## 5. Context, Genre, and Intertextuality

Context situates a text within ongoing conversations. An abolitionist speech of the 1850s must be read against fugitive-slave law politics; a contemporary climate essay may respond to specific IPCC findings or local ballot measures. Genre shapes expectations: a letter to the editor invites brevity and a clear claim; a keynote speech permits narrative arcs and applause lines. Intertextuality—quotation, allusion, parody—can compress context for knowledgeable audiences. When a writer invokes Lincoln or King, they borrow associated values and frame the present as a test of inherited principles. Visual and multimodal texts add design context: font, layout, and juxtaposition can constitute argument. For exam passages, note publication type and date when provided; they are clues to exigence and audience.

## 6. From Identification to Commentary

Unit 1 establishes the habit that earns points: observation → effect → purpose/situation. Identification names the device or feature. Commentary explains function. Situation-connection ties function to exigence, audience, or purpose. A three-layer sentence model helps: (1) The writer uses X; (2) which causes the audience to Y; (3) advancing the purpose of Z in a context of W. Avoid device lists that ignore audience effect. Avoid summary that retells content without analyzing why it is arranged that way. If two passages address the same exigence, compare how different audiences or purposes produce different strategies—this is a common comparative prompt structure.

## 7. AP Skill Connections and Assessment Tasks

CED skills in Unit 1 align with reading rhetorically (identify situation components; explain relationships) and writing rhetorically (choose strategies suited to one's own situation). The multiple-choice section often asks about function of a phrase in context or the likely audience of a passage. FRQ 1 (Rhetorical Analysis) rewards sustained situation-aware commentary on a nonfiction passage. Scoring emphasizes line of reasoning: claims about strategy must be developed, not scattered. When practicing, annotate exigence and audience in the margin first, then mark only those choices that clearly serve them. Revision for your own arguments begins here too: if you cannot name your audience's objection, your purpose is probably vague. Unit 1 is the foundation for every later unit because claims, evidence, synthesis, and style are always situation-bound.
""")

BLOCKS[(LANG, "Unit 2: Claims, Reasoning, and Evidence")] = block("""
## Detailed Knowledge

## 1. Claims as Defensible, Qualified Assertions

A claim is not a topic ("social media") nor a fact ("many teens use TikTok"). It is a debatable assertion that a reasonable person could dispute. The CED distinguishes thesis claims in argument from analytical claims in rhetorical essays. In argument, a strong claim answers the prompt with a clear position and appropriate qualification: "Although social media enables civic organizing, its algorithmic amplification of outrage undermines deliberative democracy in local school board politics." Qualification (although, while, to a limited extent) increases credibility by anticipating complexity. Over-broad claims ("social media destroys society") invite easy refutation. Under-narrow claims ("my school should extend lunch by five minutes") may lack significance unless tied to broader stakes. On AP essays, place the claim where readers expect it—typically the opening paragraph—and ensure every body paragraph advances it.

## 2. Line of Reasoning and Warrant

Evidence does not speak alone; reasoning connects evidence to claim. The line of reasoning is the logical path the reader follows. A paragraph may contain a sub-claim, evidence, and commentary that functions as warrant—the unstated or stated principle explaining why the evidence proves the point. Example: Evidence—districts with later start times show improved attendance. Warrant—students with adequate sleep can engage consistently in morning instruction. Link to main claim—policy should prioritize learning over bus-schedule inertia. Circular reasoning fails because the warrant merely restates the claim ("later starts are good because starting later helps"). AP readers look for explicit commentary sentences after evidence, often beginning with "This shows," "Therefore," or "Because." In rhetorical analysis, the "claim" may concern the author's implicit argument about an issue; reasoning still must be traced.

## 3. Types of Evidence and Strategic Selection

CED-aligned writers choose evidence types for audience and purpose: statistics, expert testimony, anecdote, analogy, precedent, observation, and textual citation. Each carries strengths and limits. Statistics suggest scale but can feel abstract; anecdotes humanize but may not generalize. Expert testimony builds ethos if the expert's field matches the claim; it weakens if credentials are irrelevant. Effective arguments combine types: a policy op-ed might open with a scene (anecdote), introduce state-level data (statistics), and cite a pediatric sleep study (expert). Selection also means omitting weak or distracting evidence. In synthesis and argument FRQs, use sources as evidence, not as substitutes for your reasoning. Attribute and interpret; do not assume agreement among sources.

## 4. Commentary: Where AP Points Are Won

Commentary explains how and why evidence supports the claim. It is the most under-developed skill in student writing. Weak commentary repeats evidence in different words ("this proves social media is bad because it is harmful"). Strong commentary names the mechanism ("by comparing platform notifications to slot-machine variable rewards, the author analogizes habitual scrolling to gambling, implying regulation should treat design features as consumer-protection issues"). In rhetorical analysis, commentary links evidence of strategy to audience effect and purpose. Aim for a commentary-to-evidence ratio of at least one sentence of analysis per sentence quoted or paraphrased. When time is short, shorten evidence rather than skipping commentary.

## 5. Counterargument, Concession, and Rebuttal

Unit 2 introduces the expectation that arguments acknowledge opposition. Concession validates a legitimate part of the opposing view ("Critics rightly note that later starts complicate athletics scheduling"). Rebuttal explains why the original claim still stands ("However, student health and academic outcomes are the district's primary mission, and phased schedules in comparable districts preserved most programs"). Straw-manning—misrepresenting opposition—damages ethos. Ignoring strong counters makes claims seem naive. In your own argument FRQ, dedicate at least one paragraph or a substantial portion of a paragraph to counterargument. In analysis, note when authors preempt objections; that move itself is evidence of strategic reasoning.

## 6. Coherence, Transitions, and Paragraph Architecture

A body paragraph often follows CEEC: Claim (topic sentence), Evidence, Explanation (commentary), Concluding link (tie back to thesis or transition forward). Transitions should show logical relations: cause, contrast, addition, example. Generic transitions ("another example") are weaker than logical ones ("Even more costly is the long-term effect on graduation rates"). Thesis coherence means no orphan paragraphs that could be deleted without loss. If a paragraph does not advance the line of reasoning, cut or revise it. For rhetorical essays, paragraphs may be organized by strategy clusters (diction, structure, appeals) or by movement through the passage—both work if reasoning is explicit.

## 7. AP Skill Connections and Common Errors

Skills include identifying claim/evidence/ reasoning in readings and constructing them in writing. MCQ items may ask which sentence best supports a claim or which reasoning is flawed. FRQ 2 (Argument) and FRQ 3 (Synthesis) depend directly on Unit 2 craft. Common errors: evidence dumping (listing facts without commentary), thesis drift (body argues something new), hasty generalization, false causality, and confusing summary with analysis. Self-check before submitting: underline every commentary sentence; if evidence lines outnumber them, revise. Another check: highlight the warrant in each paragraph—if missing, add a sentence that states why the evidence matters.
""")

BLOCKS[(LANG, "Unit 3: Perspectives and Complexity")] = block("""
## Detailed Knowledge

## 1. Multiple Perspectives as a Rhetorical and Intellectual Requirement

Complex public questions rarely reduce to heroes and villains. The CED expects students to recognize that writers and readers inhabit different positions shaped by experience, identity, institutional role, and material interest. A dam proposal looks different to an engineer, an Indigenous nation, a downstream farmer, and a city ratepayer. Unit 3 trains students to describe perspectives accurately before evaluating them. Description without caricature is an ethical and analytical skill: steel-manning opposition strengthens your credibility. In synthesis prompts, sources embody perspectives; your task is not to list them but to explain relationships—agreement, tension, qualification—while maintaining your own line of reasoning.

## 2. Qualification, Nuance, and the Through-Line

Qualification narrows or conditions a claim without abandoning it. Phrases such as "in most cases," "for urban districts," or "when enforcement exists" prevent overreach. Nuance adds depth by recognizing conditions and limits. A through-line is the coherent spine that keeps a qualified argument from collapsing into "both sides." The reader should always know what you ultimately affirm. A useful template: "While X and Y both matter, Z should guide policy because …" Complexity is not indecision; it is informed judgment. AP readers penalize essays that oscillate without resolution or that hide behind "everything is complicated" to avoid taking a position.

## 3. Concession Without Surrender

Effective concession grants specific ground: "Opponents correctly observe that plastic bag bans alone will not solve ocean pollution." The grant must be genuine—readers detect grudging or sarcastic concessions. After conceding, reassert the claim with a pivot (yet, however, still) and explain why the conceded point does not defeat your thesis—or why your proposal addresses it. Concession can also redefine terms: if critics say "ban hurts low-income shoppers," you might concede cost concerns while arguing for subsidized reusable programs. In rhetorical analysis, identify concessions as ethos-building moves that anticipate audience resistance.

## 4. Rebuttal Strategies

Rebuttal may refute evidence (flawed data), logic (non sequitur), assumption (questionable warrant), or significance (even if true, less important than another factor). Matching rebuttal type to counterclaim shows sophistication. Ad hominem attacks weaken student arguments. Dismissing opposition as " ignorant" destroys ethos. Instead, explain why an alternative interpretation fails or costs too much. When sources disagree in synthesis, rebuttal may explain why one source's conditions do not apply locally. Keep rebuttal proportional—minor objections deserve brief treatment; major ones need developed response.

## 5. Tension, Irony, and Ambivalence in Texts

Literary and rhetorical texts often internalize tension: a memoir may celebrate migration while mourning lost language; a policy speech may praise freedom while endorsing surveillance. Unit 3 applies to reading as well as writing. Note when authors hold competing values simultaneously and explain how structure or juxtaposition manages that tension. Irony can signal complexity—saying one thing to mean another—requiring audience inference. Ambivalence is not always weakness; it may reflect genuine trade-offs. Analytical essays should avoid flattening nuanced texts into single-message slogans.

## 6. Building Complexity in Your Own Arguments

Layer perspectives by stakeholder, scale, or time horizon. Short-term job gains may conflict with long-term environmental costs. Local benefits may impose distant harms. Show awareness of these layers, then prioritize using explicit criteria (equity, sustainability, constitutional rights). Use conditional reasoning: "If the goal is maximum yield, …; if the goal is soil conservation, …" This demonstrates intellectual range while preserving judgment. Practice prompts about technology, education, and civil liberties especially reward this skill.

## 7. AP Skill Connections and Assessment Notes

Unit 3 supports synthesis (FRQ 3) and argument (FRQ 2) where rubrics reward sophistication of thought and resiliency of line of reasoning. Rhetorical analysis may ask how a writer acknowledges alternative views to strengthen credibility. MCQ may present paired passages with divergent perspectives on the same exigence—compare purposes and strategies. Common errors: straw-man counterarguments; false balance (treating unequal evidence as 50–50); qualification without thesis; and "both sides are valid" endings that evade the prompt. Before submitting, ask: Did I fairly state opposition? Did I resolve tension with a clear judgment? Did every qualification serve the through-line?
""")

BLOCKS[(LANG, "Unit 4: Organization and Methods of Development")] = block("""
## Detailed Knowledge

## 1. Organization as Argument

Structure is not decoration; it is reasoning made visible. The CED treats organization as a rhetorical choice that reveals priority, causality, comparison, or narrative urgency. Chronological order suits processes and personal testimony; spatial order suits tours and place-based policy; order of importance builds toward a climax or opens with the strongest claim. AP students must explain why a writer begins or ends where they do. An op-ed that opens with a child's asthma attack before citing air-quality data uses narrative to establish stakes, then shifts to logical development. If you reverse the sections, audience reception changes. When analyzing, map the skeleton: introduction function, body segments, conclusion move.

## 2. Methods of Development

Definition clarifies contested terms ("What counts as 'gifted' in admissions?"). Comparison/contrast juxtaposes options or models. Cause and effect traces chains—often with qualification when multiple causes interact. Narration supplies scene and character. Process analysis explains steps. Classification divides a large set into meaningful categories. Description creates sensory grounding. Most effective passages blend methods: a causal argument may embed narrative examples; a comparison may rely on definition of shared criteria. Identify the dominant method in each major segment and explain how it serves purpose. Weak essays name methods without linking them to audience or exigence.

## 3. Introductions and Conclusions That Work

Introductions establish exigence, frame stakes, and often imply thesis without clumsy announcement ("In this essay I will …"). Effective hooks are specific: a statistic with context, a vivid moment, a provocative question tied to the issue—not generic encyclopedia openings ("Since the dawn of time …"). Conclusions should not merely repeat; they deepen by resolving tension, calling to action, widening implications, or returning to an opening image with transformed meaning. AP rhetorical essays often note how a conclusion's shift in tone or pronoun use repositions the audience. In your own writing, avoid introducing new major claims in the conclusion; extend or crystallize existing reasoning.

## 4. Cohesion, Transitions, and Signposting

Cohesion keeps readers oriented. Transitions may be verbal (however, therefore, similarly) or structural (parallel headings, repeated key terms, anaphora). Signposting previews structure ("Three reforms matter most …"). Over-signposting feels mechanical; under-signposting loses readers in dense policy prose. Pronoun reference and synonym control affect clarity—vague "this" without antecedent frustrates AP readers. When revising, read only first sentences of paragraphs; they should sequence logically. If they feel like random topic jumps, add transitional reasoning.

## 5. Paragraph Logic and Developmental Density

Each paragraph should have a job. Developmental density means enough evidence and commentary to justify the paragraph's place—not padding. Extended development may use multi-step causation, nested examples, or refutation. Shorter paragraphs create emphasis and pace; long unified paragraphs suit complex reasoning. Variety serves rhythm. In synthesis essays, organize by idea, not by source: one paragraph might combine Source A's statistic with Source C's anecdote to support a sub-claim about rural broadband, then address a counter from Source B.

## 6. Visual, Multimodal, and Hybrid Structures

CED texts include charts, sidebars, and images whose placement is organizational. A chart after a claim verifies; a sidebar may address skeptics without derailing main flow. Note captions as argumentative. Headings segment audiences (experts vs. newcomers). For digital texts, hyperlinks imply optional depth. Analysis should mention how layout directs attention.

## 7. AP Skill Connections

Organization appears in scoring criteria for coherence and sophistication. MCQ may ask how relocating a sentence affects argument. FRQ 1 rewards tracking movement through a passage. FRQ 2 and 3 expect clear progression, not list-like source summaries. Common errors: random example paragraphs, thesis repeated without development, conclusion that introduces new evidence. Outline before writing: one line per paragraph's function. If a line repeats, merge paragraphs.
""")

BLOCKS[(LANG, "Unit 5: Style in Argument")] = block("""
## Detailed Knowledge

## 1. Style as Strategic Choice, Not Ornament

Style encompasses diction, syntax, tone, figurative language, and imagery—choices that shape meaning and audience response. The CED rejects memorized device hunting divorced from purpose. A writer selects Latinate abstractions to sound institutional or monosyllabic verbs to sound blunt and honest. Style must be analyzed as argument: "The accumulation of polysyllabic bureaucratic nouns mirrors the opacity the author condemns in zoning boards." Unit 5 builds precision in naming choices and explaining effects. Avoid laundry lists; cluster related choices that produce a combined effect (urgency, intimacy, authority, irony).

## 2. Diction: Connotation, Register, and Jargon

Diction is word choice at the level of individual terms. Connotation carries emotional color ("uprising" vs. "riot"). Register situates formality (slang vs. academic prose). Jargon signals in-group membership—useful for expert audiences, alienating for general readers unless defined. Euphemism and dysphemism reveal stance ("enhanced interrogation" vs. "torture"). When quoting, select the precise word and speculate what alternatives would lose. Domain-specific diction can build ethos if accurate; it destroys credibility if misused. In your own arguments, match register to audience without sacrificing clarity.

## 3. Syntax: Sentence Shape and Pace

Syntax analysis examines sentence length, structure (simple, compound, complex), parallelism, periodic vs. loose sentences, and deliberate fragments. Long periodic sentences delay main clauses to build suspense or complexity; short sentences after them deliver punch. Parallelism creates rhythm and equivalence ("We cannot spend, we cannot borrow, we cannot pretend"). Asyndeton speeds listing; polysyndeton slows and weighs. AP commentary connects syntax to cognition: rapid clauses may mimic crisis; balanced syntax may suggest fairness. Name patterns with purpose, not jargon alone.

## 4. Tone, Voice, and Irony

Tone is the writer's attitude toward subject and audience—sardonic, earnest, outraged, contemplative. Tone emerges from combined choices; it is not a single adjective pasted on an essay. Irony says less or more than literal meaning; satire weaponizes irony for critique. Detecting tone requires evidence; if tone shifts mid-passage, explain why (e.g., from diagnostic to urgent call). Voice is the distinctive stylistic fingerprint; persona connects to voice. Misidentifying tone (calling a satire "celebratory") undermines entire analyses.

## 5. Figurative Language and Imagery in Nonfiction

Metaphor, simile, analogy, personification, and imagery appear in speeches and essays as well as poems. Extended analogy can carry whole arguments (social contract as machine). Imagery makes abstract harm concrete—oil on pelicans, empty lunchboxes. Symbolism may appear in op-eds through repeated motifs (chains, bridges). Analyze extended figures across paragraphs, not only isolated lines. Ask what concept the figure maps and where the mapping strains. Mixed metaphors can undermine ethos if unintentional; if intentional, they may signal chaos.

## 6. Style Across the Full Passage

Track accumulative effect: an essay may begin with detached clinical diction and shift to second-person address to implicate readers. Contrast creates rhetorical energy. When comparing two writers on the same issue, style differences often reveal audience or purpose differences—one legislative, one moral.exhortation. In your writing, use stylistic shifts deliberately, not accidentally.

## 7. AP Skill Connections

Style dominates FRQ 1 scoring when tied to situation. MCQ frequently asks about function of a word or sentence structure. Common errors: device labeling without effect; misdefined terms (confusing tone with mood in nonfiction); ignoring syntax; treating figurative language as literal. Practice micro-commentary: one sentence on diction, one on syntax, one on combined effect—then expand. Style without situation is trivia; situation without style analysis is incomplete.
""")

BLOCKS[(LANG, "Unit 6: Synthesis")] = block("""
## Detailed Knowledge

## 1. What Synthesis Requires

Synthesis is combining sources and one's own reasoning to develop a coherent position—not summarizing four texts in sequence. The CED FRQ 3 presents multiple sources (print and visual) around an issue. You must cite at least three sources meaningfully, attribute correctly, and maintain your line of reasoning. Synthesis tests whether you can enter an ongoing conversation with evidence and judgment. A strong thesis responds to the prompt's tension; body paragraphs integrate sources as support for sub-claims; commentary explains how sources relate (corroborate, complicate, limit).

## 2. Reading Sources Rhetorically

Before outlining, read for claim, perspective, evidence type, and limits in each source. Label internally: Source A favors national standards with statistical evidence; Source B warns about local autonomy using rural case studies. Note agreements and fault lines. Visual sources require the same: a cartoon's exaggeration is an argument; a chart's axis choices matter. Misreading one source can derail an essay. Spend the first ten minutes reading and annotating; do not start writing with only partial understanding.

## 3. Integrating Sources: Attribution and Conversation

Integrate sources smoothly with signal phrases ("According to Source C," "While Source A emphasizes …"). Avoid dropped quotations. Prefer paraphrase with selective quotation for precision. "Source-driven" paragraphs that begin "Source A says … Source B says …" read like reports. Instead, idea-driven paragraphs use sources as needed: "Expanding preschool access improves long-term earnings (Source A), yet rural districts face teacher shortages that standardized mandates ignore (Source B)." Your voice stays primary. Address at least one source that complicates your thesis.

## 4. Building Your Own Argument Within Synthesis

The exam rewards "your own reasoning"—examples from observation, history, or ethics not present in packets. Outside examples must be plausible and relevant. Do not fabricate statistics. Use them to extend or test source claims. If all paragraphs only paraphrase sources, sophistication scores suffer. Take a position; sources are tools, not bosses. If sources conflict, adjudicate with criteria (fairness, cost, evidence quality).

## 5. Organization Models for FRQ 3

Thesis-first model: claim, then reasons, each reason drawing on multiple sources. Issue-subtopic model: one paragraph on equity, one on cost, one on implementation—sources distributed accordingly. Concession paragraph: engage strongest opposition source, then rebut. Choose model based on prompt wording. Ensure conclusion resolves without new unsupported claims. Time management: leave five minutes to verify attributions and thesis alignment.

## 6. Ethical Use and Accuracy

Misrepresentation of sources is a serious flaw. Do not attribute views a source does not hold. Partial quoting that changes meaning damages ethos. When uncertain, paraphrase cautiously. Visual sources: describe accurately before interpreting. Plagiarism includes copying source language without quotation marks.

## 7. AP Skill Connections and Rubric Priorities

Row A: thesis and line of reasoning. Row B: evidence and commentary—including sources. Row C: sophistication (nuance, stylistic voice, complex structure). MCQ synthesis items may ask how to combine information from two brief sources. Practice with timed prompts on education, environment, and technology. Common errors: source summary chains; ignoring visual source; thesis that merely restates prompt; no commentary linking sources to claim. Self-check: highlight sentences that contain your reasoning only—there should be several per paragraph.
""")

BLOCKS[(LANG, "Unit 7: Clarity and Revision")] = block("""
## Detailed Knowledge

## 1. Clarity as a Rhetorical Virtue

Clear writing serves readers and strengthens ethos. The CED treats revision as recursive, not a final spell-check. Clarity involves precise referents, strong verbs, appropriate subordination, and defined terms. Ambiguity often hides weak reasoning—if you cannot state a claim plainly, the idea may be undeveloped. Clarity does not mean simplistic thinking; complex ideas can be expressed cleanly with careful syntax and signposting. On timed exams, clarity prevents misreading by exhausted AP readers.

## 2. Global Revision: Thesis, Structure, and Reasoning

Global revision addresses argument architecture before sentences. Ask: Does the thesis answer the prompt? Does each paragraph advance the thesis? Are counters addressed? Is evidence sufficient and interpreted? Re-outline from memory after drafting; gaps appear quickly. Move paragraphs if order weakens reasoning. Cut paragraphs that repeat or digress. Global revision yields the largest score improvements; local editing cannot fix a missing thesis.

## 3. Local Revision: Sentences and Word Choice

Local revision tightens prose: replace passive voice where actor matters; cut redundant pairs ("future plans"); replace vague nouns ("thing," "aspect") with specifics; vary sentence openings. Read aloud to catch awkward rhythm. Ensure transitions reflect logic, not mere addition. In rhetorical essays, verify every quoted word is discussed. In argument essays, verify statistics include context (year, population).

## 4. Grammar, Usage, and Mechanics on the AP Exam

Scoring uses a holistic rubric; pervasive errors can impede communication but minor slips rarely dominate if argument is strong. Still, sentence boundaries, agreement, and pronoun reference affect clarity. Comma splices and fused sentences confuse logic. Apostrophe errors do not ruin essays, but patterns of breakdown signal weak control. Prioritize fixes that change meaning. Do not sacrifice content time for cosmetic edits unless errors are severe.

## 5. Peer Review and Self-Questioning Protocols

Effective revisers use questions: What would a skeptic ask? Where did I assume instead of prove? Which paragraph is weakest? Swap introductions with conclusions mentally—does the conclusion actually answer opening stakes? For synthesis, check source fairness. For rhetorical analysis, check situation linkage. Peer review works when partners respond as readers, not copy editors only.

## 6. Style Revision Without Inflation

Students sometimes "sound academic" by adding unnecessary Latinate words. Revision should increase precision, not puffiness. Prefer concrete nouns and active verbs. Maintain consistent tone. Sophistication is not verbosity. One well-placed analogy beats three abstractions.

## 7. AP Skill Connections

Revision supports all FRQs and the optional portfolio if applicable. Classroom units connect to publishing processes—drafts, feedback, polish. Timed exam strategy: reserve two to four minutes for global check. Common errors: spending all time drafting with no review; rewriting entire essay instead of targeted fixes; deleting evidence to save time—better shorten commentary slightly than drop support. Build revision habits in practice so exam pass feels automatic.
""")

BLOCKS[(LANG, "Unit 8: Advanced Argument Practice")] = block("""
## Detailed Knowledge

## 1. Moving From Competence to Sophistication

Unit 8 consolidates argument skills at higher difficulty: prompts with tighter tensions, sources with sharper disagreements, and expectations for resilient reasoning. Sophistication in AP scoring includes nuance, acknowledgment of limits, and purposeful style—not gimmicks. Advanced practice means defending claims when evidence is mixed, when stakeholders conflict, and when easy answers fail. Treat each prompt as a real decision problem requiring criteria, not cheerleading.

## 2. Staking and Defending Criteria

Arguments often hinge on unstated criteria: efficiency vs. equity, liberty vs. security, growth vs. sustainability. Advanced writers name criteria explicitly: "When choosing transit investments, long-term carbon reduction should outweigh short-term construction disruption because climate commitments bind the region for decades." Criteria let you adjudicate among sources and counters. Changing criteria mid-essay confuses readers; establish early and apply consistently.

## 3. Layered Evidence and Causal Chains

Complex prompts require multi-link causation: policy A increases funding, which lowers class size, which improves feedback, which raises graduation rates—with limits at each link. Show awareness where links weaken. Combine quantitative and qualitative evidence. Use hypotheticals sparingly and label them clearly. Historical analogies need explicit comparison points, not vague "history repeats."

## 4. Engaging Strong Counterarguments

Advanced arguments dedicate serious space to the best opposition, not weak straw men. Structure: present counter fairly, explain its force, then rebut with evidence or criteria. Sometimes partial agreement repositioned thesis ("National standards should set floor skills but not prescribe daily lesson scripts"). Sophistication includes knowing when to narrow claim rather than over-argue.

## 5. Rhetorical Analysis at Advanced Level

Advanced rhetorical essays track shifts across passage sections, integrate situation throughout, and avoid template paragraphs (ethos paragraph, pathos paragraph). Instead, follow the author's movement while naming strategies. Compare micro and macro: how a single anaphora echoes the introduction's framing. Advanced analysis may note what the author chooses not to say—significant omissions when exigence suggests they should appear.

## 6. Timed Performance and Prompt Parsing

Underline task verbs: defend, qualify, refute, analyze. Advanced prompts may embed definitions—use them. Budget time by section points. Thesis in first page. If stuck, write a provisional thesis and refine in body—better than delay. Practice with released prompts and review sample responses for what separates upper scores: commentary density, specific vocabulary, controlled qualification.

## 7. AP Skill Connections

Unit 8 mirrors exam difficulty for FRQ 2 and 3 and advanced MCQ stems. Portfolio students extend to multi-draft researched arguments. Common advanced errors: sophistication performance (big words, no thought); criteria smuggled without defense; ignoring prompt qualification instructions; rhetorical essays that become opinion pieces about issue instead of analysis of strategies. Self-assess with rubric rows explicitly.
""")

BLOCKS[(LANG, "Unit 9: Sustained Arguments")] = block("""
## Detailed Knowledge

## 1. Sustained Argument as Extended Reasoning

Sustained arguments maintain coherence, development, and voice across longer stretches than single FRQs—multi-page essays, portfolio pieces, or chained tasks. The CED emphasizes endurance: keeping thesis alive, avoiding repetition, deepening rather than circling. Sustained work exposes weak warrants that one-paragraph drills hide. Unit 9 trains students to plan for length without filler—each section advances the conversation.

## 2. Voice, Persona, and Audience Awareness Over Time

Maintaining a consistent persona builds trust. Shifts in tone should be deliberate (e.g., move from narrative opening to policy analysis). Audience awareness evolves: early paragraphs define terms for lay readers; later paragraphs may address expert objections. Avoid sudden register jumps. First-person use is acceptable when purposeful; know when it helps ethos (personal stake) vs. when it narrows appeal.

## 3. Coherent Endings That Deepen

Conclusions in sustained arguments should synthesize sub-claims, restate thesis with earned specificity, and point to implications or actions—not introduce new major evidence. Effective endings echo opening motifs with transformed meaning: the opening classroom scene returns after policy analysis to show human stakes of abstract funding formulas. Avoid cliché calls to action ("only time will tell"). End with clarity about what you have proven.

## 4. Managing Complexity Without Sprawl

Long arguments need signposts and sectional thesis sentences. Subheadings may appear in portfolio work; exam essays use paragraph transitions instead. When treating multiple causes or stakeholders, use explicit organization (three barriers, two reforms). Periodically tie paragraphs back to thesis with key terms. Sprawl happens when every idea feels equally important; prioritize using criteria from Unit 8.

## 5. Research, Documentation, and Source Ecology

Extended arguments draw on wider research than exam packets. Evaluate source credibility, recency, and bias. Synthesize research clusters—do not let one source dominate. Document ethically. Introduce outside evidence with context. In classroom sustained pieces, bibliographies matter; on exam, selective credible examples suffice.

## 6. Revision Cycles for Long Pieces

Multi-draft sustained arguments benefit from reverse outlining, section swaps, and reader tests at different scales. Check global coherence first, then paragraph development, then sentences. Peer review at outline stage saves time. Set deadlines for partial drafts. Revision logs help AP Seminar-adjacent thinking even in Lang course contexts.

## 7. AP Skill Connections

Unit 9 prepares for portfolio submission where applicable and for college writing beyond AP. Skills overlap FRQ 2/3 at higher length. Readers reward mature judgment, proportional development, and stylistic control. Common errors: thesis repetition without new insight; conclusion new claims; voice drift; evidence repetition. Final checklist: Does each major section answer "so what?" for the thesis? Does ending reflect what body actually proved?
""")

# ── AP English Literature ────────────────────────────────────────────────────

BLOCKS[(LIT, "Unit 1: Short Fiction Foundations")] = block("""
## Detailed Knowledge

## 1. Elements of Short Fiction

Short fiction compresses character, setting, plot, conflict, and theme into limited space—every detail potentially load-bearing. The AP Literature CED expects close reading: noticing what the text presents, how it is arranged, and what meanings emerge. Character may be revealed through action, dialogue, interiority, and contrast with others. Setting includes place, time, and social environment; it can mirror psychological states or constrain choices. Plot is the sequence of events; structure is how those events are ordered (linear, framed, in medias res). Conflict may be external (person vs. person/society/nature) or internal (competing desires, values). Theme is not a moral tag but an interpretive claim about what the work explores—often irresolvable tensions rather than slogans.

## 2. Narrative Perspective and Reliability

Point of view determines access and bias. First person creates intimacy but limits knowledge; unreliable narrators invite readers to infer gaps between perception and reality. Third-person limited tracks one consciousness closely; omniscient narrators may comment or shift focalization. Second person is rare but can implicate readers. AP prompts ask how perspective shapes sympathy, suspense, or irony. When analyzing, cite specific moments where narrative distance changes or where the narrator's language betrays bias. Avoid assuming omniscience equals authorial belief—distinguish narrator from implied author.

## 3. Characterization and Motivation

Round characters exhibit complexity and change; flat characters embody types or functions—but flatness can be purposeful. Dynamic characters transform; static characters may anchor thematic contrast. Indirect characterization shows through behavior; direct tells traits explicitly. Motivation should be inferred from evidence, not imported from outside the text. AP essays weaken when they psychoanalyze without textual support or reduce characters to single adjectives ("Ophelia is weak"). Track how relationships reveal power, desire, and constraint.

## 4. Structure, Pacing, and Scene vs. Summary

Authors choose what to dramatize and what to summarize. Scenes slow time and heighten significance; summary compresses routine. Openings establish patterns (Chekhov's gun); endings may resolve, ironize, or open questions. Flashbacks reorder causality; frame narratives comment on inner stories. Pacing affects theme—a rushed climax may suggest chaos; a lingering final scene may emphasize loss. Map structure in margins before writing; essays organized by beginning/middle/end often beat device hunting.

## 5. Language Basics in Prose Fiction

Even in Unit 1, attend to diction, syntax, imagery, and figurative language as they reveal character consciousness or thematic pressure. A narrator's colloquialisms vs. formal syntax mark class and education. Recurrent images (light, water, doors) may form motifs AP prompts reward when traced. Symbolism requires repeated, patterned use—not one-off objects treated as symbols because they appear once.

## 6. Beginning Interpretive Arguments

Literary arguments need claims about meaning, not plot recap. Use observation, context within text, and inference. A thesis might argue that the story's fragmented structure enacts the protagonist's dislocation after migration—not merely "the story is about migration." Evidence = short quotations or precise paraphrase with line references when provided. Commentary explains how language or structure creates effect.

## 7. AP Skill Connections

Skills include character, setting, and structure analysis (CED Big Idea: Structure). MCQ tests function of details, inference, and perspective. FRQ 1 (Poetry) and FRQ 2 (Prose Fiction) apply these foundations; prose prompts often focus on character relationships or narrative techniques. Common errors: plot summary; fixed symbols; ignoring title; treating theme as cliché. Practice with canonical short stories and contemporary diverse texts aligned to CED representative authors list.
""")

BLOCKS[(LIT, "Unit 2: Poetry Foundations")] = block("""
## Detailed Knowledge

## 1. Reading Poetry as Craft, Not Riddle

Poetry operates through compressed language, sound, rhythm, and form. AP Literature expects students to read slowly, re-read, and notice patterns. Meaning emerges from how ideas are embodied in words—not hidden as a puzzle to decode. Unit 2 builds vocabulary for describing poetic elements without replacing analysis with labels. Always move from observation ("repeated sibilance") to effect ("creates hushed intimacy") to meaning ("mirrors the speaker's fear of being overheard").

## 2. Speaker, Situation, and Tone

Poems have speakers, not automatic author surrogates. Situation is the implied occasion—mourning, argument, memory, seduction, prayer. Tone derives from diction, syntax, and sound: tender, bitter, meditative, outraged, playful. Dramatic monologues reveal character through voice alone. Identify shifts ( volta ) where argument or emotion turns. Misidentifying tone undermines essays. Support adjectives with textual evidence.

## 3. Imagery, Figurative Language, and Symbol

Imagery appeals to senses; figurative language includes metaphor, simile, personification, apostrophe, and metonymy. Extended metaphors structure whole poems (Donne's conceits). Symbols gain power through recurrence and contextual emphasis—not every noun is symbolic. Analyze connotations within the poem's world. Mixed or overturned metaphors may signal instability. AP prompts often center on how figurative language develops complex attitude toward a subject (death, love, heritage, war).

## 4. Sound, Rhythm, and Line

Sound patterns include rhyme (end, internal, slant), alliteration, assonance, consonance, and onomatopoeia. Rhythm arises from syllable stress and foot patterns (iambic, trochaic)—but free verse uses varied line lengths for emphasis. Enjambment runs lines without pause; end-stopped lines create closure. Caesura interrupts mid-line. Sound is never "just decoration"; it can mimic content (harsh consonants for violence) or ironize it (sing-song rhyme for grim subject). Scanning helps but explain effect, not only mark feet.

## 5. Structure and Form at Introductory Level

Stanzas segment ideas; couplets may punch closure; quatrains suggest balance. Repetition and anaphora build incantatory force. Questions, lists, and contradictions organize thought. Before advanced forms (sonnets, villanelles in later units), recognize that form generates expectations—sonnet turn at line 9 or 13, for example. Free verse still has architecture via sections and echoes.

## 6. Theme and Complexity in Lyric Poetry

Lyric poems often explore tensions: love and mortality, beauty and decay, individual and collective memory. Theme statements should be specific and arguable: "The poem argues that inherited language fails to capture migrant grief, so the speaker hybridizes idioms." Avoid moralizing ("the poem teaches us to live life to the fullest"). Multiple readings may coexist if anchored in evidence; acknowledge ambiguity when real.

## 7. AP Skill Connections

Poetry MCQ tests detail function, paraphrase accuracy, and inference. FRQ 1 requires thesis about meaning and systematic reference to poetic choices. Common errors: paraphrasing entire poem; ignoring title and epigraph; treating speaker as poet biography; listing devices. Practice thesis-first outlines: three claims about meaning, each tied to a cluster of poetic evidence. Time management: leave minutes to refine thesis if poem complexity emerges late in reading.
""")

BLOCKS[(LIT, "Unit 3: Longer Fiction and Drama Foundations")] = block("""
## Detailed Knowledge

## 1. Extended Narrative and Dramatic Forms

Novels and full-length plays allow deeper development of plot arcs, character networks, and thematic systems. Drama adds performance constraints: stage directions, dialogue, acts/scenes, asides, soliloquies. AP excerpts focus on representative passages; you must infer whole-work patterns from parts. Longer works use subplots, foils, and delayed revelations. Time may span decades; spatial settings may multiply. Unit 3 teaches reading excerpts as windows into larger design.

## 2. Plot Architecture and Subplot

Main plots intersect subplots to comment on theme—comic relief can ironize tragedy; parallel plots reveal social scope. Rising action, climax, falling action, and resolution may be distributed across hundreds of pages or compressed in acts. Episodic structures differ from tightly causal ones. In drama, act breaks often mark turning points or time jumps. When analyzing an excerpt, note where it likely falls in arc (crisis, recognition, reversal) and how that placement shapes tone.

## 3. Character Systems and Relationships

Ensemble casts create relational meaning: mentors, rivals, doubles, foils. Power dynamics—gender, class, race, colonial status—often drive conflict. Character webs in novels may track social institutions (family, church, state). In drama, dialogue is primary characterization; what characters say and withhold matters. Subtext in plays emerges when stage directions contradict speech or when other characters react silently.

## 4. Setting and Social Context in Long Works

Expanded settings show social worlds: households, cities, colonies, courts. Historical and cultural context informs but does not replace textual reading. A passage about property law in a nineteenth-century novel ties to gender and class themes. In drama, set descriptions and props signify (Ibsen's realistic interiors vs. Beckett's bare stages). Track how movement between settings marks change or entrapment.

## 5. Dramatic Conventions and Genre

Tragedy, comedy, realism, modernism, absurdism carry expectations tragedy ends in loss; comedy resolves marriage or reconciliation (often ironized). Soliloquy grants audience access to interior thought in ways realistic dialogue denies. Aside breaks illusion. AP may include classical, early modern, and modern drama. Recognize when playwrights subvert genre—comedy with tragic undertones.

## 6. Narrative Techniques in Novels

Extended fiction uses free indirect discourse blending narrator and character voice, multiple narrators, epistolary forms, and nonlinear time. Foreshadowing and irony accumulate over length. Motifs recur with variation. When writing on novel excerpts, link local detail to likely global themes—without claiming to have read entire novel if you have not; instead say "within this passage" or "as the excerpt suggests."

## 7. AP Skill Connections

FRQ 2 often uses novel excerpts; occasional drama appears. MCQ tests inference about character motivation and function of stage details. Common errors: treating excerpt as isolated short story ignoring dramatic conventions; confusing playwright with character; plot summary of unseen portions. Build stamina reading longer assigned works; annotate motif and relationship maps early.
""")

BLOCKS[(LIT, "Unit 4: Figurative Language in Fiction")] = block("""
## Detailed Knowledge

## 1. Figurative Language as Fictional Meaning-Making

In prose fiction, figurative language reveals consciousness, theme, and social worldview. Metaphor can characterize (a merciless character described through predatory animal imagery) or thematicize (harvest metaphors linking labor and mortality). AP analysis ties figures to narrative function—not isolated identification. Track clusters: if water imagery shifts from nurturing to drowning, interpret the shift.

## 2. Metaphor, Simile, and Conceit

Metaphor asserts identity ("the city was a furnace"); simile uses like/as with possible ironic distance. Extended conceits sustain comparisons across paragraphs (scientific metaphors in Enlightenment prose fiction). Dead metaphors may be revived by context. Analyze tenor and vehicle: what is being compared to what, and what qualities transfer? Failed or strained metaphors may signal character delusion or authorial irony.

## 3. Symbolism and Motif

Symbols carry meaning beyond literal function when text emphasizes them through repetition, dialogue, or structural placement. Motifs are recurring elements (colors, weather, body parts) accruing significance. Distinguish universal symbol readings from text-specific ones—green light in a novel means what this work makes it mean. Avoid symbol hunting in every object; prioritize patterned evidence.

## 4. Irony and Ambiguity

Verbal irony says opposite of meaning; situational irony reverses expectation; dramatic irony gives readers knowledge characters lack. Irony can critique social norms or character self-deception. Ambiguity leaves multiple interpretations viable; strong essays acknowledge without forcing single readings when text resists. Sarcasm and wit in dialogue carry social power markers.

## 5. Imagery and Sensory Detail

Imagery anchors abstract themes in bodies and places—food, fabric, wounds, landscapes. Synesthesia mixes senses for intensity. Imagery selection reflects ideology (what a society notices or ignores). In realist fiction, seemingly neutral description may encode class gaze. Link imagery to point of view: what the narrator notices reveals values.

## 6. Allegory and Parable (Selective Use)

Some fiction operates allegorically (characters represent abstract ideas or political forces). Allegory requires sustained parallel structure—not every political novel is pure allegory. Parables compress moral or philosophical insight. When claiming allegory, show systematic correspondence; otherwise discuss localized figurative effects.

## 7. AP Skill Connections

FRQ 2 frequently rewards figurative language analysis tied to character or theme. MCQ may ask function of a simile in context. Common errors: figurative language list without character/theme link; treating symbols as fixed codebooks; ignoring narrative voice in metaphors (whose metaphor is it?). Practice tracing one motif through an excerpt with three cited moments showing evolution.
""")

BLOCKS[(LIT, "Unit 5: Poetry — Form and Figuration")] = block("""
## Detailed Knowledge

## 1. Form as Meaning

Poetic form is not packaging; it generates expectations and tensions. Closed forms (sonnet, villanelle, ode) constrain language, producing emphasis through repetition or turn. Open forms use visual layout, variable stanzas, and idiosyncratic spacing. AP Unit 5 expects recognition of major forms and explanation of how formal constraints interact with content—a sonnet arguing against rigid order might ironize its own form.

## 2. Sonnet and Fixed Forms

Italian sonnet: octave + sestet, often volta between. English sonnet: three quatrains + couplet, volta before final couplet. Petrarchan conceits compare love to spiritual experience. Villanelle uses refrains to enact obsession or inability to change. Sestina's word repetition creates haunting circularity. When analyzing, name form, locate volta, and explain how rhyme scheme paces argument. Slant rhyme may suggest imperfect resolution.

## 3. Free Verse and Organic Structure

Free verse organizes through imagery patterns, rhetorical repetition, section breaks, and syntactic parallelism rather than meter. Whitmanesque catalogs expand democratic scope; Imagist compression presents stark pictures. Visual poetry and unconventional line breaks direct eye movement. Analyze why a line breaks where it does—emphasis, surprise, double meaning across enjambment.

## 4. Advanced Figuration

Paradox, oxymoron, litotes, metonymy, synecdoche, apostrophe, and personification compress complex attitudes. Metaphysical conceits yoke unlike realms (love and compass geometry). Symbolist poetry layers symbol systems. Extended apostrophe addresses absent or abstract listeners, revealing desire or grief. Track how figuration evolves through poem—early metaphors may be overturned by volta.

## 5. Tone, Voice, and Intertextuality

Form interacts with tone: rigid form + casual diction may ironize tradition. Intertextual allusions rewrite prior poems (myth, scripture, canonical lyric). Recognizing allusions deepens reading but requires textual hooks—do not invent sources. Speaker's relationship to literary tradition may be theme itself.

## 6. Comparing Poetic Craft

Some prompts pair poems; compare form, figuration, and treatment of shared theme. Comparison needs basis: both use natural imagery but one domesticates nature while other presents sublime terror. Balance attention between texts. AP readers penalize two mini-essays glued together without comparison language (whereas, similarly, by contrast).

## 7. AP Skill Connections

FRQ 1 often features canonical and diverse poets with formal variety. Sophistication includes integrating form into meaning thesis. Common errors: misidentifying form; ignoring rhyme's role in closure; generic volta comments without tie to argument; neglecting title. Outline: thesis about tension between form and content; body paragraphs on stanza/ rhyme movement; conclusion on final formal gesture (couplet punch, truncated last line).
""")

BLOCKS[(LIT, "Unit 6: Literary Argument")] = block("""
## Detailed Knowledge

## 1. Literary Argument vs. Rhetorical Argument

Literary argument interprets texts—claims about meaning, character, structure, or values constructed by the work—not debates about policy. The CED FRQ 3 (Literary Argument) prompts with a thematic statement or quotation; you choose works to apply. Thesis must be defensible interpretation, not plot summary. Evidence comes from remembered texts: novels, plays, poems you know well. Commentary explains how scenes, language, or structure support your reading.

## 2. Selecting and Applying Textual Evidence

Choose works you can specify: title, author, character names, plot moments, quotations if remembered, paraphrase accurately. Two works minimum often strengthen comparison or development; one deep work suffices if thoroughly developed. Avoid obscure works readers cannot verify; canonical and diverse CED authors are safe. Match work complexity to prompt—do not force unrelated texts. Brief plot context only to set evidence.

## 3. Thesis and Line of Reasoning

Thesis answers prompt with interpretive claim: "Both works portray ambition as socially coded performance that destroys intimacy, not merely personal flaw." Line of reasoning develops sub-claims across paragraphs. Each paragraph needs textual proof and analysis of how detail proves interpretive point. Avoid author biography unless it illuminates text (usually minimal). Center the literary work.

## 4. Comparison and Contrast in Literary Argument

When using two works, unify under shared theme with meaningful difference: both explore exile, but one treats return as possible while other closes door. Integrate comparison within paragraphs rather than two isolated halves. Use transitions showing relationship. Comparison reveals insight neither work alone shows.

## 5. Complexity, Ambiguity, and Qualification

Strong literary arguments acknowledge tensions within works: a character may resist and embody systemic harm. Qualify thoughtfully: "While the novel appears to endorse X, the final scene undercuts that reading through …" Avoid reducing texts to single morals. Sophistication row rewards nuance when earned by evidence.

## 6. Building a Repertoire

Maintain prepared works across periods and genres—at least one play, several novels, multiple poets. Annotated notes on themes, key scenes, and quotations speed exam writing. Practice prompts on identity, power, memory, morality, nature, and art. Quality of knowledge beats quantity of titles.

## 7. AP Skill Connections

FRQ 3 scoring: thesis, evidence and commentary, sophistication. No outside research required. Common errors: plot summary; mismatched texts; vague references ("a book I read"); ignoring prompt's specific wording; listing themes without argument. Timed practice: 40 minutes, thesis in 5, outline 5, write 25, review 5. Self-check: every paragraph has quoted or specific paraphrased evidence?
""")

BLOCKS[(LIT, "Unit 7: Multiple Perspectives")] = block("""
## Detailed Knowledge

## 1. Perspective in Literary Study

Literary texts present events through situated consciousness—class, gender, race, nationality, age, disability shape what can be seen and said. Unit 7 examines how multiple perspectives within and across texts produce meaning. A single novel may include competing narrators or focal characters; reading considers whose story is centered and whose is marginalized. AP prompts may ask how perspective affects sympathy, reliability, or theme.

## 2. Narrative Focalization and Voice

Genette's terms help AP students: who sees (focalization) vs. who speaks (voice). Internal focalization limits to character knowledge; external observes from outside. Shifts in focalization redistribute empathy—sudden access to antagonist interiority complicates judgment. Polyphonic novels present multiple valid voices without single authorial merge. Analyze pronouns and lexical shifts signaling perspective change.

## 3. Drama and Multiple Viewpoints

Plays distribute perspective through dialogue; no single narrator controls truth. Competing monologues (Shaw, Churchill) expose ideological clash. Audience assembles meaning from juxtaposed scenes. Staging choices affect perspective—who stands center, who exits silently. In analysis, cite stage directions and line delivery cues.

## 4. Historical and Cultural Context Without Reduction

Context informs perspective—colonial novels read differently when noting imperial gaze—but AP essays must prioritize textual evidence. Avoid presentism that ignores author's historical limits or flattens complexity. Instead, show how text encodes or challenges its moment's assumptions through character and imagery.

## 5. Comparative Perspective Across Texts

Pairing texts from different eras on shared theme reveals shifting narrators of history—slave narrative vs. neo-slave narrative, for example. Comparison should illuminate perspective as construct, not tally differences. Ask: who gets to speak, who is spoken about, what silences appear?

## 6. Ethical Reading and Interpretation

Multiple perspectives invite readers to examine bias and empathy. Strong essays avoid caricature of characters or cultures. Acknowledge reader position without centering essay on personal reaction alone—stay text anchored. When prompts address injustice, analyze craft choices that expose or reproduce power.

## 7. AP Skill Connections

Skills connect to character, setting, structure, and literary argument. MCQ may ask how switching narrator affects understanding. FRQ 2 prose prompts sometimes focus on relationship or voice shifts. Common errors: assuming single authoritative reading; ignoring marginalized character perspective; biographical fallacy. Practice rewriting a scene from another character's view to understand craft, then analyze original choices.
""")

BLOCKS[(LIT, "Unit 8: Advanced Poetry Analysis")] = block("""
## Detailed Knowledge

## 1. Integrating Multiple Poetic Dimensions

Advanced poetry analysis weaves speaker, situation, form, sound, imagery, and figuration into unified thesis—not sequential device paragraphs. A thesis might argue the poem uses broken heroic couplets to mock imperial triumph rhetoric. Every paragraph links craft to meaning. Complexity increases with allusion, intertextuality, and formal subversion.

## 2. Allusion, Myth, and Intertextuality

Poets invoke prior texts—Greek myth, Bible, earlier lyrics—to compress meaning or ironize tradition. Allusion requires recognition from clues within poem; explain function when identified (contrast with expected myth ending). Unidentified echoes may still appear as diction clusters suggesting archaic register. Avoid claiming specific allusion without textual basis.

## 3. Tone Shifts, Volta, and Structural Turns

Advanced readers map multiple turns—not only sonnet volta but mid-poem reversals, final-line undercutting, or title that reframes last stanza. Track pronoun shifts (we to I to you) and tense changes signaling memory vs. present. Explain cumulative effect of turns on theme.

## 4. Syntax, Grammar, and Punctuation as Craft

Poets manipulate sentence length, questions, imperatives, ellipses, and dashes. Capitalization and punctuation may be unconventional. Analyze how syntax enacts content—fragmentation after trauma, parallel syntax for ritual. AP essays benefit from one syntax paragraph integrated with sound and line.

## 5. Difficult and Ambiguous Poetry

Modern and contemporary poems may resist paraphrase; analysis can focus on tensions, gaps, and contradictions. Ambiguity is not excuse for vagueness—anchor in specific words. Multiple valid readings possible if argued. Avoid forcing resolution when poem withholds closure intentionally.

## 6. Comparative Poetry Analysis

Advanced comparison aligns formal strategies: two elegies, one formal one free verse, treat grief differently. Use comparative topic sentences. Balance length. Integrate one combined paragraph if helpful showing divergent craft serving similar theme.

## 7. AP Skill Connections

FRQ 1 upper scores need precise vocabulary, sustained commentary, and thesis sophistication. Time discipline: annotate poem for 8–10 minutes marking shifts, repeats, oddities. Common errors: thesis too broad; ignoring end of poem; separating form from content; paraphrase dominating. Model essay: each quote embedded in interpretive sentence; no orphaned fragments.
""")

BLOCKS[(LIT, "Unit 9: Complexity and Craft")] = block("""
## Detailed Knowledge

## 1. Complexity as Literary Value

Major literature often holds contradictions: characters desire freedom while craving belonging; societies praise virtue while rewarding cruelty. Unit 9 integrates skills to interpret unresolved tensions without simplifying. Complexity differs from confusion—essays must articulate tension clearly: "The novel simultaneously mourns and satirizes nostalgia, using sentimental imagery in a narrator who undercuts those images with economic facts."

## 2. Craft Synthesis Across Genres

Students compare how poetry, fiction, and drama encode complexity differently—interior monologue vs. soliloquy vs. lyric compression. Craft choices create meaning: nonlinear time shows trauma; unreliable narration exposes ideology; dramatic irony forces audience complicity. Advanced essays name craft and interpret function in same movement.

## 3. Thematic Depth Without Cliché

Themes like love, death, identity require specific textual instantiation. Replace generic theme statements with arguable claims tied to unique craft: "The play uses comic subplots not for relief alone but to expose how labor exploitation continues unchanged while aristocrats resolve personal marriages." Complexity includes recognizing when texts fail or exclude perspectives—critique grounded in evidence.

## 4. Conclusions That Deepen Interpretation

Strong conclusions resolve tension already developed—new claims in conclusions undermine essays. Effective endings widen implication: what the text's complexity suggests about narrative, ethics, or art. Return to opening image or question with transformed understanding. Avoid moralizing endings unrelated to analysis.

## 5. Longer Works and Sustained Interpretation

Novels and plays sustain motifs across hundreds of pages; essays may reference trajectory ("early chapters associate sea with promise, but storm scenes recode water as mortality"). Even in excerpt-based FRQs, infer pattern cautiously with hedged language. Sustained interpretation requires note-taking during reading—motif charts, character maps.

## 6. Preparing for Exam Integration

Unit 9 mirrors full exam integration: poetry FRQ, prose FRQ, literary argument. Rotate practice among types; maintain repertoire of works. Sophistication rubric rewards stylistic maturity in student prose—clear, precise literary vocabulary without overwriting.

## 7. AP Skill Connections

""")

# ── AP Human Geography ───────────────────────────────────────────────────────

BLOCKS[(HUG, "Unit 1: Thinking Geographically")] = block("""
## Detailed Knowledge

## 1. Geography's Spatial Perspective

Human geography studies how people organize space, interact with environments, and produce place meaning. The CED centers spatial thinking: location, distance, direction, pattern, and process across scales. Space is abstract coordinate grid; place is space invested with meaning (home, homeland, sacred site). Scale ranges from local (neighborhood) to global (climate agreements)—processes look different at each scale, and AP expects scale-aware answers. Maps are arguments, not neutral pictures: projection, classification, and symbolization choices encode power and purpose.

## 2. Key Geographic Concepts

Location may be absolute (coordinates) or relative (near, upstream, bordering). Distance can be absolute (miles) or friction of distance (social/cost barriers compressing effective distance—internet reduces friction for some flows). Connectivity and accessibility describe how linked places are. Region is an area sharing one or more characteristics: formal (statistical uniformity), functional (nodal organization around a hub), vernacular (perceived, like "the South"). Boundaries may be natural, geometric, or cultural. Diffusion spreads phenomena: relocation (people carry ideas) and expansion (wave from hearth). Hearths are innovation origins; barriers and time-distance decay shape diffusion patterns.

## 3. Maps, GIS, and Spatial Data

Maps use point, line, and area symbols; choropleth maps show rates by area (must use rates, not raw counts, for fair comparison). Dot maps, isoline maps, cartograms, and proportional symbols each emphasize different truths. GIS layers data spatially, enabling analysis of overlap (flood zones + poverty). Remote sensing captures imagery; GPS locates precisely. Students must critique map choices: Mercator inflates high latitudes; choosing bin sizes on choropleths can exaggerate patterns. AP FRQs often describe pattern then explain process.

## 4. Scale, Aggregation, and the Modifiable Areal Unit Problem

Changing scale or aggregation alters apparent patterns—crime hotspots may vanish when units enlarge (MAUP). Ecological fallacy assumes individuals match area averages. Scale interdependence means local decisions have regional effects (zoning and sprawl). Global processes (trade agreements) reshape local labor markets. Strong answers name scale explicitly: "At the metropolitan scale … however at the household scale …"

## 5. Environmental Interaction and Possibilism

Geographers reject environmental determinism (climate dictates culture) in favor of possibilism (environment sets constraints/opportunities; human choice matters) and cultural ecology (reciprocal adaptation). Sustainability balances resource use for future generations. Carrying capacity limits population an environment can support given technology and consumption. These concepts underpin later units on agriculture, urbanization, and development without re-explaining basics each time.

## 6. Spatial Analysis Skills for AP

CED skills include concepts and processes, spatial relationships, data analysis, and source analysis. MCQ may present maps or tables; identify pattern (cluster, dispersion, linear) then infer process (migration, policy, physical barrier). FRQ responses need specific vocabulary and at least one named example when prompted. Comparison across regions strengthens arguments. Avoid vague "culture" without mechanism.

## 7. AP Skill Connections and Common Errors

Unit 1 foundations appear in every later topic. Common errors: confusing scale and scope; treating maps as facts without critique; describing without explaining process; using "globalization" as magic word. Practice writing two-sentence explanations: sentence one names pattern; sentence two names process and example (e.g., "Tech firms cluster in Bengaluru due to educational infrastructure and English-language labor pools, creating a functional region linked to Silicon Valley via venture capital flows").
""")

BLOCKS[(HUG, "Unit 2: Population and Migration")] = block("""
## Detailed Knowledge

## 1. Population Distribution and Density

Population concentrates where economic opportunity, arable land, temperate climate, and connectivity align—coasts, river valleys, urban cores. Physiological density (people per arable land) and agricultural density (farmers per arable land) reveal pressure differently from arithmetic density. Dot maps and choropleths show distribution; note sparsity in deserts, high latitudes, and rugged interiors. Historical shifts tie to agricultural revolution, industrialization, and colonization.

## 2. Demographic Components and the Demographic Transition Model (DTM)

Population change = births + in-migration − deaths − out-migration. Crude birth/death rates, total fertility rate (TFR), infant mortality, and life expectancy describe dynamics. The DTM stages: (1) high stationary CBR/CDR; (2) early expanding—death rates fall; (3) late expanding—CBR falls lagging; (4) low stationary; (5) optional post-industrial slight decline. DTM is model, not law—countries deviate due to policy (China's past one-child), AIDS mortality, or migration. Age-sex pyramids visualize cohorts: expansive (youth bulge), constrictive (aging), stationary.

## 3. Population Policies and Debates

Pro-natalist (France benefits, Singapore campaigns) vs. anti-natalist (India historical, Iran temporary). Eugenic policies are ethically condemned but historically appeared. Immigration policy shapes growth (US, Gulf states guest workers). Youth bulges can fuel economic growth or instability if jobs lacking. Aging societies face dependency ratio increases, pension stress, and healthcare demand—Japan and Italy examples. Gender equity and education correlate with fertility decline (empowerment pathway).

## 4. Migration Types and Ravenstein's Laws

Migration may be internal (rural-to-urban, urban-to-suburban counterurbanization) or international. Voluntary vs. forced (refugees, internally displaced). Push factors: lack of jobs, conflict, environmental disaster; pull factors: employment, family reunification, safety, education. Ravenstein: short-distance predominance, step migration, counterstreams, urban preference, gender differences historically. Intervening obstacles include borders, cost, and policy. Brain drain exports skilled labor; remittances return capital to origin communities.

## 5. Forced Migration and Refugees

Refugees flee persecution/conflict; asylum seekers request protection; IDPs displaced internally. UNHCR framework; durable solutions: repatriation, local integration, resettlement. Border enforcement, xenophobia, and securitization affect flows. Climate-induced displacement grows—drought in Sahel, sea-level rise in Pacific atolls—often without clear legal refugee status. AP expects ethical awareness with geographic mechanism.

## 6. Epidemiological Transition and Health Geography

Disease patterns shift with development: pestilence/famine, receding pandemics, degenerative diseases, emerging re-emerging (COVID, antibiotic resistance). Spatial diffusion models (hierarchical, contagious) explain spread. Healthcare access varies spatially—food deserts parallel medical deserts. Pandemics reveal connectivity and inequality.

## 7. AP Skill Connections

FRQs on population often combine DTM, migration, or policy with named regions. Data interpretation: read pyramids and tables carefully. Common errors: calling stage 2 "overpopulation" without nuance; ignoring migration in population change; treating DTM as universal timeline. Use precise terms: TFR replacement level ~2.1; dependency ratio; net migration.
""")

BLOCKS[(HUG, "Unit 3: Cultural Patterns and Processes")] = block("""
## Detailed Knowledge

## 1. Culture Components and Traits

Culture includes folk culture (small homogeneous groups, local origins, slow diffusion—Amish) and popular culture (large societies, rapid global diffusion—streaming platforms). Traits spread via diffusion, acculturation (minority adopts dominant traits), assimilation, and syncretism (blending religions at boundaries). Cultural landscape (Carl Sauer) reads human values in built environment—churches, skyscrapers, fences. AP avoids cultural stereotyping; explain processes with examples.

## 2. Language Families and Lingua Francas

Language branches from families (Indo-European, Sino-Tibetan); dialects vary regionally. Isoglosses mark boundaries. Lingua francas enable trade (English, Swahili); official languages encode state power. Endangered languages signal cultural loss. Toponymy reveals history (New York, San Francisco). Colonization and migration reshape linguistic maps—creoles and pidgins at contact zones.

## 3. Religion: Universalizing and Ethnic

Universalizing religions seek converts (Christianity, Islam, Buddhism)—diffuse widely. Ethnic religions tied to ethnicity/place (Hinduism, Judaism, Shinto). Hearths and diffusion paths matter: Christianity from Southwest Asia via relocation/expansion; Islam across trade routes. Sacred spaces (Jerusalem, Mecca, Varanasi) generate pilgrimage flows and conflict. Secularization rises in some developed regions; fundamentalism persists elsewhere. Religious landscapes: churches, minarets, cemeteries.

## 4. Ethnicity, Identity, and Nationalism

Ethnicity shares cultural heritage; race is social construct with geographic effects. Self-determination drives nationalist movements; nation-states idealize nation-state congruence rarely achieved. Multicultural states manage diversity through federalism, autonomy, or conflict. Centrifugal forces (separatism, devolution) vs. centripetal (shared institutions, symbols). AP connects to political unit later but cultural roots here.

## 5. Gender, Popular Culture, and Globalization

Gender roles vary spatially; education and labor participation reshape family geography. Popular culture homogenizes consumption (McDonaldization debate) yet adapts locally (glocalization—menu variations). Media hierarchies flow core to periphery but reverse flows exist (K-pop, Bollywood). Cultural imperialism critiques vs. hybridity celebrations—both may partial truths.

## 6. Cultural Ecology and Environmental Perception

Groups perceive and use environments differently—sacred groves, taboo species, varying risk tolerance in hazards. Ethnocentrism vs. cultural relativism in analysis (relativism informs understanding; does not forbid critique of harm). Gendered spaces (public/private divisions) appear in urban design.

## 7. AP Skill Connections

FRQs may ask diffusion of language/religion or cultural landscape reading from imagery. MCQ tests map regions and concepts. Common errors: confusing ethnicity and religion; treating cultures as static; naming trait without diffusion type. Compare folk vs. popular with same element (food, music) for depth.
""")

BLOCKS[(HUG, "Unit 4: Political Patterns and Processes")] = block("""
## Detailed Knowledge

## 1. State, Nation, and Nation-State

State = sovereign territory with defined boundaries and government. Nation = people with shared identity. Nation-state when congruent (idealized Iceland; rare globally). Multinational states (UK, Russia), stateless nations (Kurds, Palestinians), and multinational empires complicate map. AP emphasizes boundaries: geometric (lat/long), physical (rivers—problematic if channel shifts), cultural/religious. Boundaries can be antecedent, subsequent, superimposed, or relic.

## 2. Political Geography and Power

Territoriality controls space. Core-periphery within states mirrors global patterns. Enclave/exclave anomalies (Kaliningrad, Baarle-Hertog). Gerrymandering manipulates electoral districts; voting methods affect representation. Supranational organizations (EU, AU, NATO) pool sovereignty. Devolution transfers power downward (Scotland, Catalonia tensions). Federal vs. unitary states structure autonomy.

## 3. Colonialism and Boundaries

European colonialism imposed boundaries ignoring ethnic lines—African straight borders leading to future conflict. Heartland/Rimland theories (Mackinder, Spykman) explained geopolitical rivalry historically—know as models, not destiny. Shatterbelts buffer great powers. Neo-colonialism economic influence post-independence. Cold War proxy conflicts shaped political maps.

## 4. Terrorism, Conflict, and Irredentism

Irredentism seeks annexation of territory based on national ties. Terrorism uses violence for political aims; spatial patterns shift with state collapse. Resource conflicts (oil, water) tie to Unit 5 but appear politically. Peace agreements, partitions (India/Pakistan), and international law (UNCLOS for seas) manage disputes.

## 5. Electoral Geography and Gerrymandering

Spatial analysis of voting: urban-rural divides, redistricting, voter ID access. Packing and cracking dilute opposition votes. AP may present maps asking implications for representation. Gerrymandering interacts with ethnicity and party geography.

## 6. Sovereignty Challenges

Globalization, transnational corporations, and NGOs complicate state control. Maritime claims, Arctic opening, cyber domain extend geography. Migration policy externalization (EU-Turkey deals) shifts borders functionally.

## 7. AP Skill Connections

Compare boundary types with examples. Explain devolution causes (cultural distinctiveness, economic grievance, spatial isolation). Common errors: confusing state and country colloquially; ignoring scale of conflict; describing gerrymandering without mechanism. Use vocabulary: balkanization, centripetal/centrifugal, supranationalism.
""")

BLOCKS[(HUG, "Unit 5: Agriculture and Rural Land-Use")] = block("""
## Detailed Knowledge

## 1. Origins and Types of Agriculture

First agricultural revolution (Neolithic) shifted from hunting-gathering to domestication—hearths in Fertile Crescent, Mesoamerica, others independently. Subsistence agriculture feeds producers; commercial agriculture sells for profit. Shifting cultivation (slash-and-burn), pastoral nomadism, intensive subsistence (wet rice), plantation agriculture (colonial legacy, monoculture export) each suit environments and economies. AP links environment via climate, soil, topography.

## 2. Von Thünen Model

Isolated state model: rings of land use by transport cost—market gardening/dairy nearest city; forest; grain; ranching farthest. Assumptions simplify reality (uniform plain, one city) but teach distance decay and bid-rent logic. Explains dairy near metros, ranching in interiors. Modifications: refrigeration, highways, global shipping alter rings but principle persists.

## 3. Third Agricultural Revolution and Green Revolution

Mechanization, irrigation, fertilizers, HYV seeds increased yields (Green Revolution in Mexico, India—rice/wheat). Benefits: food security. Costs: water depletion, pesticide pollution, social inequality favoring large farms, dependency on seed corporations. Biotech (GMO debates) continues revolution. Precision agriculture uses GPS/GIS for efficiency.

## 4. Commercial Agriculture Patterns

Mixed crop/livestock (Corn Belt), grain farming (Eurasian steppes), Mediterranean horticulture (viticulture), plantation tropics (bananas, palm oil), luxury crops (coffee terroir). Agribusiness vertical integration controls supply chains. Fair trade and organic movements respond to global commodity chains exposing farmer vulnerability.

## 5. Rural Land Use and Environmental Issues

Desertification from overgrazing; salinization from irrigation; deforestation for pasture (Amazon). Monoculture reduces biodiversity; CAFOs concentrate waste. Food miles debate—transport vs. production emissions. Urbanization consumes farmland at metropolitan edges. Community-supported agriculture shortens chains locally.

## 6. Food Security and Policy

Availability, access, utilization, stability framework. Famines often political/logistical not absolute shortage (Sen). Subsidies (US, EU CAP) distort global prices. Land grabbing in Africa/Asia for export crops. Climate change shifts growing zones—wine regions, pest ranges.

## 7. AP Skill Connections

FRQs compare subsistence vs. commercial or explain Von Thünen with scenario. Map analysis of agricultural regions. Common errors: treating Green Revolution as unmixed good; ignoring gender labor in subsistence systems; confusing pastoralism with ranching economics. Tie every pattern to process and example region.
""")

BLOCKS[(HUG, "Unit 6: Cities and Urban Land-Use")] = block("""
## Detailed Knowledge

## 1. Urbanization and Metropolitan Growth

Urbanization increases urban share of population; cities grow by natural increase and migration. Primate cities dominate small countries (Bangkok, Paris); rank-size rule in larger states (US). Megacities exceed 10 million; metacities 20 million+. Suburbanization, edge cities (Garreau), exurban leapfrog development reshape U.S. landscapes. Global South urbanization often faster with informal housing (favelas, bidonvilles).

## 2. Models of Urban Structure

Burgess concentric zones: CBD center, transition zone, working class, middle class, commuter—Chicago basis. Hoyt sector model: wedges along transport. Harris-Ullman multiple nuclei: specialized centers. Galactic city post-suburban dispersion. Models simplify; race, redlining, and zoning historically distorted rings (US). AP expects critique with application.

## 3. Bid-Rent Theory and Land Use

Land value highest near CBD; competing uses bid for accessible sites—retail/office beats residential near core. Manufacturing once inner, now often suburban or overseas. Gentrification reinvests in inner city, displacing lower-income residents. Zoning separates uses (Euclidean zoning); mixed-use New Urbanism reacts.

## 4. Global Cities and Hierarchy

Sassen global cities command finance, corporate HQ, advanced services (NY, London, Tokyo). World city network links through flows. Secondary cities regional hubs. Colonial port cities legacy shapes infrastructure. Tourism urban economies (Dubai, Venice overtourism).

## 5. Urban Sustainability and Planning

Smart growth, transit-oriented development, greenbelts, urban growth boundaries (Portland). Informal sector economies in Global South. Infrastructure inequality—water, sewage, electricity. Climate risks: heat islands, flooding, sea-level cities (Jakarta subsidence). Public space, segregation, and policing geography.

## 6. Inner City vs. Suburban Issues

US: white flight, FHA policies, food deserts, suburban sprawl environmental costs. Global: slum upgrading, tenure security, microfinance. Counterurbanization and retirement migration to amenity-rich rural areas. Commuting sheds define functional urban regions.

## 7. AP Skill Connections

Apply models to maps/photos; explain why model fits or fails. FRQs on suburbanization causes/effects or urban sustainability. Common errors: describing model rings without naming; ignoring racial/economic dimensions; conflating urbanization and city size. Use terms: CBD, gentrification, primate city, squatter settlements.
""")

BLOCKS[(HUG, "Unit 7: Industrial and Economic Development")] = block("""
## Detailed Knowledge

## 1. Sectors of Economy

Primary (extractive—mining, agriculture), secondary (manufacturing), tertiary (services), quaternary (info/R&D), quinary (top decision-makers). Clark Fisher model shifts sectors with development—not universal timing but useful. Deindustrialization in core post-1970s; service economy rise. AP links sectors to employment geography.

## 2. Industrial Location Theory

Weber least-cost: minimize transport and labor costs; agglomeration economies cluster firms (silicon hardware, fashion). Bulk-gaining vs. bulk-reducing products affect plant location near raw materials or markets. Footloose industries less tied to inputs (tech, finance). Just-in-time shipping and containerization reconfigured global factories. Offshoring to low-wage Export Processing Zones; reshoring/nearshoring trends recently.

## 3. Development Measurement and Inequality

GDP/GNI per capita, PPP adjustments, HDI (health, education, income), GII gender inequality, informal economy omitted in stats. Core-periphery (Wallerstein world-systems): core exploits periphery semi-periphery buffer. Rostow modernization stages criticized as linear/Eurocentric. Dependency theory emphasizes structural inequality. Sustainable development goals (SDGs) current framework.

## 4. Rostow, Wallerstein, and Alternatives

Rostow: traditional → preconditions → takeoff → drive to maturity → high mass consumption. Critics note coercion, environmental costs, skipping stages. Wallerstein historical development of capitalist world economy. AP compares models fairly—know strengths/limits. Microfinance, fair trade, ecotourism as local strategies with debated impact.

## 5. Special Economic Zones and Global Production Networks

China SEZs attracted FDI; maquiladoras on US-Mexico border. Global commodity chains split design/marketing (core) from assembly (periphery). Race to bottom on labor/environment standards; labor unions weak in many export zones. Technology transfer uneven.

## 6. Energy, Resources, and Sustainability

Fossil fuels, renewables geography—solar deserts, wind corridors, rare earth mining pollution. Resource curse: oil wealth without diversified development (Nigeria, Venezuela complexities). Ecotourism balances conservation and income. Circular economy attempts reduce waste.

## 7. AP Skill Connections

""")

# ── AP European History ──────────────────────────────────────────────────────

BLOCKS[(EURO, "Unit 1: Renaissance and Exploration")] = block("""
## Detailed Knowledge

## 1. Italian Renaissance Context and Humanism

The Renaissance (14th–16th centuries) revived classical texts and ideals while developing distinctly urban Italian patronage cultures. Humanism emphasized education in rhetoric, history, and moral philosophy—Petrarch's ad fontes return to sources. Civic humanism in Florence linked republican virtue to classical models. Patronage from Medici and papal courts funded art as political display. AP distinguishes Renaissance innovation from medieval continuity—many medieval roots persisted. Secular themes increased but Christianity remained central.

## 2. Art, Architecture, and Intellectual Change

Artists (Leonardo, Michelangelo, Raphael) applied linear perspective, anatomical study, and classical proportion. Architecture revived Roman domes and columns (Brunelleschi's dome). Printing press (Gutenberg c. 1450) accelerated diffusion of ideas and religious debate later. Scientific observation grew though full Scientific Revolution follows next unit chronologically but overlaps methodologically. Women like Isabella d'Este patronized arts; most formal humanist education excluded women, yet some (Catherine of Siena earlier, Christine de Pizan) participated intellectually.

## 3. Northern Renaissance and Christian Humanism

Erasmus criticized church corruption in In Praise of Folly; advocated philological Bible study and inner piety. More's Utopia questioned social inequality. Northern art (Dürer, van Eyck) detailed domestic piety and portraiture. Spread via print networks. Compared to Italian focus on classical pagan themes, North often fused humanism with reform impulses leading toward Reformation.

## 4. New Monarchies and State Building

France (Louis XI), England (Henry VII), Spain (Ferdinand and Isabella) consolidated power: standing armies, bureaucratic tax systems, reduced noble autonomy. Marriage alliances (Habsburg-Valois rivalry brewing). Renaissance diplomacy and Machiavelli's The Prince (1513) analyzed power realistically—virtù and fortune. Not democracy—centralization served dynastic control.

## 5. Age of Exploration Causes and Technology

Motives: gold/spices, glory, God (crusading zeal, conversion). Technologies: caravel, astrolabe, magnetic compass, improved maps (Ptolemy rediscovery). Portuguese exploration down African coast (Dias, da Gama to India 1498). Spanish Columbus 1492 backed by Isabella; Treaty of Tordesillas 1494 divided Atlantic claims with Portugal.

## 6. Consequences of Contact

Columbian Exchange transferred crops (potatoes, maize, tomatoes to Europe; wheat, horses to Americas), diseases (smallpox devastated Indigenous populations), and animals. Demographic collapse in Americas enabled European colonization and African enslavement expansion. Silver from Potosí flowed to Spain, fueling inflation and global trade (Manila galleons). Mercantilist assumptions viewed colonies as bullion sources.

## 7. AP Skill Connections

Historical reasoning: causation (print + humanism → reform readiness), comparison (Italian vs. Northern Renaissance), continuity (Christian framework). SAQ may define humanism or explain exploration motive. DBQ might use Renaissance art patronage documents. LEQ compare Renaissance to medieval scholasticism or explain exploration effects. Avoid teleology treating Renaissance as inevitable modernity. Use specific artists, rulers, dates as anchors.
""")

BLOCKS[(EURO, "Unit 2: Age of Reformation")] = block("""
## Detailed Knowledge

## 1. Church Crisis and Calls for Reform

Late medieval papacy faced simony, nepotism, pluralism, and sale of indulgences (Tetzel). Conciliar movement earlier attempted limit papal power. Christian humanists sought moral reform without schism initially. Political context: Holy Roman Empire fragmentation enabled Lutheran survival. Printing press spread reform tracts rapidly—media revolution parallel to theological.

## 2. Martin Luther and Lutheranism

Luther's 95 Theses (1517) protested indulgence theology. Justification by faith alone (sola fide), priesthood of all believers, authority of Scripture (sola scriptura). Peasant War (1524–25) invoked Lutheran language; Luther sided with princes against rebels. Augsburg Confession (1530) codified doctrine. Lutheranism established where local rulers converted (Scandinavia, parts of Germany).

## 3. Calvinism, Radical Reformation, and Catholic Response

Calvin's Institutes emphasized predestination, moral discipline, congregational elders—Geneva model. Spread to France (Huguenots), Scotland (Knox), Netherlands. Anabaptists rejected infant baptism, often pacifist— persecuted by Catholics and Protestants. English Reformation under Henry VIII (Act of Supremacy 1534) politically driven by succession; Edward VI Protestant, Mary I Catholic restoration, Elizabeth I Anglican via via media. Catholic Reformation (Counter-Reformation): Council of Trent (1545–63) affirmed transubstantiation, seven sacraments, clerical celibacy; improved seminary training; new orders (Jesuits—Ignatius Loyola, global missionary and educational network).

## 4. Religious Wars and Political Outcomes

French Wars of Religion (Huguenots vs. Catholics), St. Bartholomew's Day Massacre (1572), Edict of Nantes (1598) limited tolerance. Spanish Armada (1588) failed against England. Thirty Years' War (1618–48) devastated Holy Roman Empire; Peace of Westphalia (1648) recognized cuius regio, eius religio legacy expanded state sovereignty. Confessional states emerged; pluralism limited.

## 5. Social and Cultural Effects

Literacy campaigns for Bible reading; catechisms standardized doctrine. Witch-hunt peaks linked to social anxiety and confessional competition—mostly women targeted. Art: Baroque Catholic drama (Bernini) vs. Protestant iconoclasm. Family and gender roles reinforced patriarchy though Protestant marriage clergy model changed. Education expanded via Jesuit and Protestant schools.

## 6. Jews and Minorities

Expulsions and ghettos (Venice 1516); Iberian Inquisition targeted conversos. Ottoman Empire absorbed Sephardic exiles. Toleration remained exceptional not norm until later Enlightenment-influenced policies.

## 7. AP Skill Connections

Causation: printing, political authority, economic grievances. Comparison: Lutheran vs. Calvinist vs. Catholic reform. Continuity: state-church entanglement. DBQ often Trent or indulgence documents. LEQ on reform causes or social effects. Avoid claiming Luther intended full pluralism. Tie theological points to political support mechanisms.
""")

BLOCKS[(EURO, "Unit 3: Absolutism and Constitutionalism")] = block("""
## Detailed Knowledge

## 1. Absolutist Theory and Practice

Absolutism claimed sovereign power unchecked by estates—Bossuet's divine right. Reality required cooperation with nobility and bureaucracy. Louis XIV (1643–1715) epitomized centralized court at Versailles—nobles co-opted, intendants supervised provinces, mercantilism under Colbert (tariffs, monopolies, trade companies). Wars costly (Dutch War, War of Spanish Succession) strained finances. Palace culture displayed splendor as politics.

## 2. Alternatives to French Model

Spain declined post-Armada and inflation; Habsburgs faced regionalism. Central and eastern Europe stronger absolutisms often: Prussia under Frederick William Great Elector and Frederick II—army, Junker nobility tied to state; Russia Peter the Great westernizing reforms (St. Petersburg, navy, table of ranks) and Catherine II enlightened rhetoric with expanded serfdom. Austria Habsburgs balanced diverse lands. Ottoman and European interactions continue at borders.

## 3. English Constitutionalism

Conflict Stuart kings vs. Parliament: James I divine right tensions; Charles I Personal Rule, Ship Money, Bishops' Wars; English Civil War, Commonwealth under Cromwell; Restoration Charles II; Glorious Revolution 1688—William and Mary, Bill of Rights 1689 limited monarchy, no standing army without Parliament, trial by jury affirmed. Locke's Two Treatises (1690) theorized consent and property— influenced later revolutions though written earlier context.

## 4. Dutch Golden Age

United Provinces merchant republic—toleration attracted capital and talent; East/West India Companies; art market (Rembrandt, Vermeer). Model of commercial constitutionalism contrasting Versailles. Financial innovations (stock exchange) supported war against Louis XIV.

## 5. Enlightened Absolutism (Bridge)

Frederick II, Catherine II, Joseph II reforms from above—religious toleration limited, legal codification, education—without surrendering monarchical power. Serfdom often persisted. Shows limits of Enlightenment in politics until revolutionary era.

## 6. Mercantilism and Colonial Rivalry

Bullionism, favorable balance of trade, colonial monopolies. Triangular trade connected Europe, Africa, Atlantic Americas—enslaved labor foundational to sugar, tobacco economies. Navigation Acts enforced English trade control. Competition set stage for Seven Years' War globally.

## 7. AP Skill Connections

Comparison absolutism vs. constitutionalism with England/France pair. Causation: tax revolts, religious war legacy, military need. SAQ on Versailles purpose or Glorious Revolution significance. Avoid calling Louis fully absolute in practice ignoring nobles. Link colonial economies to state power.
""")

BLOCKS[(EURO, "Unit 4: Scientific Revolution and Enlightenment")] = block("""
## Detailed Knowledge

## 1. Scientific Revolution Methods and Figures

Shift from Aristotelian scholasticism to empirical/mathematical inquiry. Copernicus heliocentric hypothesis (1543); Kepler elliptical orbits; Galileo telescopic evidence, Inquisition conflict; Newton Principia (1687) unified celestial and terrestrial mechanics with calculus, laws of motion, universal gravitation. Bacon induction; Descartes deduction and doubt ("Cogito"). Experimentation institutionalized via Royal Society (1660). Paradigm change challenged geocentric cosmology and teleology.

## 2. Impact on Knowledge and Society

Mechanistic universe suggested natural laws govern matter—implications for religion (deism later). Medicine advanced slowly (Harvey blood circulation) but chemistry/alchemy transition (Priestley oxygen later 1770s edges unit). Technology applications: improved navigation, clocks. Gender: women excluded from academies yet noblewomen patronized salons contributing informally (Maria Winkelmann, Émilie du Châtelet translating Newton).

## 3. Enlightenment Intellectual Currents

Enlightenment (c. 1685–1815) applied reason to society: Locke natural rights, life liberty property; Montesquieu separation of powers Spirit of Laws; Voltaire religious toleration and critique of church; Rousseau social contract and general will but also critique of civilization; Diderot Encyclopédie spread knowledge challenging privilege. Salons, coffeehouses, print culture diffused ideas internationally.

## 4. Political and Social Thought

Beccaria against torture; Wollstonecraft Vindication of Rights of Woman (1792) extended rights discourse. Enlightenment often elite movement—did not immediately emancipate peasants or colonized peoples; some thinkers justified empire (civilizing mission tensions). Skepticism toward tradition supported reform not always revolution until 1789.

## 5. Arts: Rococo to Neoclassicism

Rococo playful aristocratic interiors (Fragonard); Neoclassicism revived republican Roman virtue (David's Oath of Horatii pre-Revolution). Architecture (Soufflot Pantheon). Music: Bach to Mozart classical clarity. Arts reflected patronage shifts and political mood before revolutionary rupture.

## 6. Religion and Enlightenment Tension

Deists rejected revealed religion extremes; philosophes criticized superstition. Catholic and Protestant establishments responded with censorship. Jesuit suppression 1773 example of monarch-enlightened reform attacking church power. Toleration edicts (Joseph II 1781) partial wins.

## 7. AP Skill Connections

Causation: print, patronage, previous Reformation questioning authority. Comparison Newton vs. Descartes methods. Continuity religion persists. DBQ philosophe or scientific society documents. LEQ role of Enlightenment in French Revolution—avoid monocausal; note fiscal crisis and political structure. Define terms precisely: empiricism, heliocentrism, separation of powers.
""")

BLOCKS[(EURO, "Unit 5: French Revolution and Napoleonic Era")] = block("""
## Detailed Knowledge

## 1. Old Regime Crisis

French society three estates—Clergy, Nobility, common Third Estate bearing taxes. Louis XVI fiscal bankruptcy from wars and Versailles spending; failed reform by Turgot, Necker. Bad harvests 1788–89 raised bread prices. Enlightenment ideas plus American Revolution example; cahiers de doléances listed grievances. Estates-General May 1789 deadlocked; Third Estate formed National Assembly, Tennis Court Oath.

## 2. Revolutionary Phases

Liberal constitutional phase: Bastille July 1789; Great Fear peasant revolts; Declaration of Rights of Man and Citizen August 1789—liberty, property, popular sovereignty, legal equality (men). Civil Constitution of Clergy 1790 alienated Catholics. Constitutional monarchy 1791 limited king power. Radical phase: war with Austria/Prussia 1792; Republic declared; Louis executed 1793; Committee of Public Safety—Robespierre, Jacobins, Reign of Terror against perceived enemies; de-Christianization campaigns; Levée en masse total war. Thermidorian Reaction 1794 ended Terror; Directory 1795–99 unstable.

## 3. Society, Women, and Limits of Revolution

Women marched Versailles October 1789; Olympe de Gouges Declaration of Rights of Woman executed 1793. Sans-culottes pushed price controls; enslaved revolt in Saint-Domingue (Haiti) inspired by revolution ideals—Toussaint L'Ouverture; later abolition 1794 then Napoleonic reversal. Revolution abolished feudal privileges, metric system, legal equality for men, secularized institutions—but excluded women from citizenship, reinstated slavery under Napoleon.

## 4. Napoleon Rise and Domestic Reforms

Coup 18 Brumaire 1799; Consulate then Empire 1804. Napoleonic Code (1804) unified law—property rights, patriarchal family authority, restricted women's legal status compared to some revolutionary gains. Bank of France, lycees, Concordat 1801 with Pope balancing church state. Merit promotion in army bureaucracy. Centralized authoritarian state with plebiscitary legitimacy.

## 5. Napoleonic Wars and Empire

Defeated coalitions; Continental System blockade Britain backfired; Peninsular War drained resources; 1812 invasion Russia catastrophic. Spread Code and administrative reforms across Europe—legal modernity mixed with imperial extraction. Nationalism stimulated in resistance (Spain guerrillas, German intellectuals). Defeat Leipzig 1813; exile Elba; Hundred Days Waterloo 1815; St. Helena exile.

## 6. Congress of Vienna and Restoration

Metternich led conservative order: legitimacy, compensation, balance of power. France restored Bourbons (Louis XVIII); Poland partitioned; German Confederation. Concert of Europe managed great power relations suppressing revolutions temporarily. Revolutions of 1848 later challenge order.

## 7. AP Skill Connections

Causation long/short term; comparison revolutionary phases; continuity/modification of Enlightenment ideals. DBQ documents on Declaration or women's rights. LEQ evaluate most significant cause or compare revolution to other Atlantic revolutions. Avoid simplistic "good/bad Napoleon." Address Haiti as integral to revolution story.
""")

BLOCKS[(EURO, "Unit 6: Industrialization and Its Effects")] = block("""
## Detailed Knowledge

## 1. Origins of Industrialization in Britain

Agricultural revolution (enclosure, crop rotation) freed labor and raised food supply. Coal and iron deposits; waterways and ports; colonial markets and capital from empire ( cotton from slave-grown Americas ). Stable banking (Bank of England) and patent culture. Textile innovations ( flying shuttle, spinning jenny, water frame, mule ) then steam engine (Watt) powering factories. Factory system concentrated workers under machine pace—shift from domestic putting-out system.

## 2. Spread and Second Industrial Revolution

Belgium, France, Germany, US industrialize later with state role (tariffs, railways). Second Industrial Revolution late 19th c.: steel (Bessemer), chemicals, electricity (Edison, Tesla systems), internal combustion, telegraph/telephone. Corporations and stock markets scale capital. Scientific research integrated into industry (German chemical firms).

## 3. Social Classes and Labor

Industrial bourgeoisie vs. industrial proletariat—Marx and Engels Communist Manifesto (1848) predicted class struggle; Luddites destroyed machines early protest. Urbanization overcrowded tenements, cholera, child labor in mines/mills. Factory Acts gradually regulated hours/age. Trade unions legalized slowly; strikes (Match Girls 1888). Reform movements: Owen utopian socialism; Chartism political demands in Britain.

## 4. Demographic and Environmental Effects

Population growth accelerated with better nutrition/sanitation later. Malthusian fears debated—productivity outpaced population in industrial cores. Pollution, deforestation for coal, smog in Manchester (Engels Condition of Working Class). Public health movements and urban planning responded.

## 5. Family, Gender, and Migration

Separate spheres ideology—middle-class women homemakers; working-class women and children wage labor essential. Irish migration to Britain/US after famine; internal rural to urban migration. Seasonal labor patterns changed. Birth rates eventually declined in urban industrial families (demographic transition).

## 6. Imperialism Linkages

Industrial powers sought raw materials and markets—rubber, palm oil, cotton expansion. Railway and steamship integrated colonies. Berlin Conference 1884–85 partitioned Africa among Europeans with little African consent. Economic imperialism in Latin America (British investments). Technology gap justified civilizing rhetoric critiqued by later anticolonial thinkers.

## 7. AP Skill Connections

Causation for British first industrialization; comparison industrial vs. agricultural social structure; CCOT urban growth. SAQ on factory system or reform. LEQ evaluate industrialization as turning point. Avoid environmental determinism alone; include social and political factors. Cite Engels, Marx, factory legislation examples.
""")

BLOCKS[(EURO, "Unit 7: Nineteenth-Century Politics and Nationalism")] = block("""
## Detailed Knowledge

## 1. Ideologies After 1815

Liberalism: constitutional government, free press, property voting (often male limited), free trade. Conservatism: tradition, church, monarchy, suspicion of revolution—Burke. Nationalism: shared culture/language/state unity—cultural (Herder) vs. civic variants. Socialism: utopian (Saint-Simon, Fourier), Marxist scientific socialism predicting proletarian revolution. Feminism emerges—Seneca Falls 1848 connected transatlantic rights discourse.

## 2. Revolutions of 1848

Liberal and nationalist uprisings across France, German states, Austrian Empire, Italian states. France Second Republic briefly; Louis Napoleon Bonaparte elected then coup Second Empire 1852. Frankfurt Assembly failed German unification liberal plan. Habsburgs suppressed Hungary (Kossuth) and Czech/national claims with Russian aid. Italy Rome Republic Mazzini; Garibaldi later contributes to unification differently. 1848 shows nationalism can be liberal or conservative.

## 3. Italian and German Unification

Cavour Piedmont realpolitik diplomacy, Plombières with Napoleon III, war with Austria 1859, Garibaldi southern expedition 1860; Rome capital 1871. Bismarck Prussia Realpolitik: Danish War 1864, Austro-Prussian War 1866 dissolved German Confederation, Franco-Prussian War 1870–71 proclamation German Empire Versailles—humiliated France, Alsace-Lorraine loss fuels revanche. Both unifications used warfare and elite negotiation more than pure popular will.

## 4. Imperial Russia and Ottoman Reform

Alexander II emancipation serfs 1861 incomplete land reform; zemstvos local assemblies; radicals Narodniks; anarchists; later Lenin. Ottoman Tanzimat reforms modernized law/education; Young Turks 1908. Both empires multiethnic—nationalism threatened integrity (Polish uprisings, Balkans).

## 5. Second Industrial Society Politics

Mass politics emerges: expanded male suffrage Britain Reform Acts; socialism parties (German SPD 1875). Anti-Semitism politicized—Dreyfus Affair (1894–1906) France exposed army injustice and antisemitism; Zionism Herzl response. New imperialism peaks—Boer War, scramble Africa. Cultural nationalism in arts: Wagner, national operas, historicist architecture.

## 6. Science and Culture Fin de Siècle

Darwin Origin of Species (1859) challenged fixed species—Social Darwinism misapplied to society (Spencer). Pasteur germ theory, Koch, public health. Freud psychoanalysis unsettled Victorian rationality. Realism in literature (Dickens, Zola); Impressionism (Monet) and Post-Impressionism (Van Gogh) broke academic norms. Physics nearing relativity (Einstein 1905 edges next unit).

## 7. AP Skill Connections

Comparison liberal vs. conservative nationalism outcomes. Causation 1848 failures. CCOT nationalist idea 1815–1914. DBQ on unification diplomacy or Dreyfus documents. LEQ evaluate nationalism as force for unity vs. empire breakup. Define Realpolitik, distinguish cultural/civic nationalism with examples.
""")

BLOCKS[(EURO, "Unit 8: Twentieth-Century Global Conflicts")] = block("""
## Detailed Knowledge

## 1. World War I Causes and Course

Long-term: militarism, alliances (Triple Entente vs. Triple Alliance), imperial rivalry, nationalism (Balkans). Short-term: assassination Archduke Franz Ferdinand June 1914, July Crisis, Schlieffen Plan failure, trench stalemate Western Front. Total war: conscription, rationing, propaganda, women in munitions, economies mobilized. Technology: machine guns, artillery, poison gas, tanks late, aircraft reconnaissance. Eastern Front more mobile; Italy joined 1915; Ottoman joined Central Powers; Armenian genocide 1915. US entry 1917 tipped balance; Russian exit after Bolshevik Revolution 1917 Treaty Brest-Litovsk.

## 2. WWI Consequences

Paris Peace Conference 1919: Treaty of Versailles—war guilt clause, reparations, colonies mandates, new states (Poland, Czechoslovakia), League of Nations US absent. Self-determination applied unevenly. Economic devastation, flu pandemic 1918–19. Lost generation trauma; art Dada, surrealism; writers Owen, Remarque. Revolutions: Russia 1917; Germany November Revolution 1918 Kaiser abdicates Weimar Republic.

## 3. Interwar Instability

Weimar hyperinflation 1923, Dawes Plan, brief Stresemann stability then Great Depression 1929 hit Germany hard. Fascism Italy Mussolini 1922 march on Rome; corporatist state. Nazi rise: Hitler Beer Hall Putsch 1923, Mein Kampf, electoral growth after Depression, Hindenburg appoints Chancellor 1933, Enabling Act dictatorship, Nuremberg Laws 1935, Kristallnacht 1938. Stalin Five-Year Plans, collectivization famine Ukraine, Great Purge 1930s. Spanish Civil War 1936–39 proxy ideologies.

## 4. World War II in Europe

Appeasement Munich 1938; Molotov-Ribbentrop Pact 1939; invasion Poland Sept 1939. Blitzkrieg conquered Poland, France 1940; Battle of Britain; Operation Barbarossa 1941 opened Eastern Front atrocities and Holocaust industrial murder (Wannsee 1942, death camps Auschwitz). Holocaust: systematic genocide Jews, Roma, disabled, political enemies—AP requires specificity on racial ideology and complicity. D-Day June 1944; Soviet push west; V-E Day May 1945 after Hitler suicide.

## 5. Home Front and Holocaust Responsibility

Collaboration Vichy France, Quisling Norway; resistance partisans varied. Bombing cities total war moral debates. Wannsee conference coordinated Final Solution; camps combined slave labor and extermination. Aftermath: Nuremberg Trials established crimes against humanity precedent; displaced persons crisis.

## 6. Decolonization Foreshadowing

WWII weakened Britain/France; Japanese occupation undermined European prestige in Asia; Atlantic Charter language self-determination; independence movements accelerate post-1945 (Unit 9 overlap). AP connects war to end of empires.

## 7. AP Skill Connections

Causation WWI; comparison WWI vs. WWII home fronts; continuity nationalism. DBQ propaganda or Treaty documents. LEQ evaluate treaty responsibility for WWII or role of economics in fascism rise. Avoid Holocaust euphemism " camps" without purpose; center victim experience and Nazi ideology.
""")

BLOCKS[(EURO, "Unit 9: Cold War and Contemporary Europe")] = block("""
## Detailed Knowledge

## 1. Cold War Division of Europe

Iron Curtain speech 1946; Truman Doctrine and Marshall Plan 1947 rebuild Western Europe contain communism; Comecon Soviet bloc response. Germany divided; Berlin Blockade 1948–49 airlift; NATO 1949 vs. Warsaw Pact 1955. Nuclear deterrence MAD; arms race hydrogen bombs, ICBMs. Proxy wars global though unit focuses Europe: Greek Civil War, Hungarian Revolution 1956 crushed, Prague Spring 1968 Warsaw Pact invasion.

## 2. Western European Recovery and Integration

Economic miracle FRG Wirtschaftswunder; Christian Democrats and social market economy. ECSC 1951, EEC 1957 Treaty of Rome—Monnet functional integration toward peace. De Gaulle Fifth Republic 1958 assertive France; UK joined 1973. Social welfare states expanded— NHS Britain, pensions, labor rights. Consumer society, television, youth culture 1960s.

## 3. Eastern Bloc Life and Dissent

Stalinist repression eased somewhat after death 1953; Khrushchev thaw destalinization 1956 Secret Speech. Planned economies prioritized heavy industry; shortages consumer goods; Stasi surveillance GDR; Berlin Wall 1961 stopped emigration. Solidarity Poland 1980 Lech Wałęsa; Gorbachev reforms glasnost/perestroika enabled 1989 openings.

## 4. 1989 Revolutions and German Reunification

Fall of Berlin Wall November 1989; velvet revolutions Czechoslovakia, Hungary; Romania violent overthrow Ceaușescu. USSR dissolved 1991. Germany reunified 1990; EU expanded eastward 2004 Poland etc. Yugoslav wars ethnic nationalism 1990s—Slovenia, Bosnia genocide Srebrenica, Kosovo NATO intervention 1999—exception to post-Cold War peace in Europe.

## 5. Contemporary Issues

EU deepening: euro 1999 currency zone crisis 2010s austerity debates; Brexit 2016 referendum leave 2020 complicated UK-EU trade. Immigration from Middle East/Africa debates Schengen open borders strain. Populism rise Orban Hungary, various nationalist parties. Ukraine war 2022+ reshaped European security NATO expansion Finland Sweden; energy dependence on Russia reduced. Climate policy Green Deal tensions with industry.

## 6. Social and Cultural Trends

Secularization continued; gender equality laws; LGBTQ rights advances varied by country. Technology Silicon Valley influence; GDPR privacy regulation. Aging population threatens pension systems; migration needed for labor. Cultural unity vs. diversity debates—not identical to US frames but parallel populist media dynamics.

## 7. AP Skill Connections

""")

# ── AP World History ───────────────────────────────────────────────────────────

BLOCKS[(WORLD, "Unit 1: The Global Tapestry (c. 1200–c. 1450)")] = block("""
## Detailed Knowledge

## 1. Framework for World History c. 1200

Unit 1 surveys major civilizations interacting but not yet globally integrated by industrial capitalism. AP World emphasizes comparisons across Afro-Eurasia and the Americas with attention to state-building, belief systems, social structures, and technologies. Avoid teleology toward European dominance; treat each society on its terms while noting connections (Silk Roads preview Unit 2). Dates approximate regional peaks; overlap exists.

## 2. East Asia: Song China and Neighbors

Song dynasty (960–1279) commercial revolution: rice cultivation, iron production, gunpowder weapons, compass navigation, paper money, urban markets Kaifeng/Hangzhou. Neo-Confucianism synthesized Zhu Xi reinforced patriarchy and civil service examination meritocracy—limited mobility but cultural prestige. Buddhist influence persisted. Japan feudalization under shoguns after Kamakura; court aristocracy Heian legacy; samurai bushido emerging. Korea Koryo then Joseon tributary relations with China. Vietnam developing distinct statehood under Chinese influence.

## 3. Dar al-Islam and South Asia

Abbasid Caliphate fragmented but Islamic culture spread via trade and conversion networks. Mamluks in Egypt; Delhi Sultanate in India introduced Turkic Muslim rule over diverse Hindu population—syncretic and conflictual dynamics. Ibn Battuta travels illustrate connectivity. Islamic learning preserved/translated classical texts (House of Wisdom legacy). Sufi orders facilitated conversion in South/Southeast Asia. Hindu kingdoms Vijayanagara later period edges unit; bhakti devotional movements spread.

## 4. Africa c. 1200–1450

Great Zimbabwe stone architecture and gold trade Indian Ocean; Ethiopia Christian Solomonic dynasty; Mali Empire Mansa Musa hajj 1324 displayed gold wealth Timbuktu learning; Swahili city-states (Kilwa) Islam trade; Hausa states; Ife Yoruba art. Trans-Saharan trade linked West Africa to Mediterranean—gold, salt, slaves small scale pre-Atlantic. Sub-Saharan diversity—pastoral, agricultural, urban.

## 5. Americas and Oceania

Maya city-states classical collapse earlier but postclassic continue; Aztec (Mexica) Triple Alliance 1430s rising—tenochtitlan chinampas, tribute empire, human sacrifice religio-political; Inca Andean state building later 1438 expansion edges unit. Mississippian cultures Cahokia mounds trade. Polynesian navigation settled Pacific islands—environmental adaptation. American isolation meant no Old World disease exchange yet—demographic catastrophe awaits Columbian Exchange.

## 6. Europe in Global Context

High Middle Ages feudal fragmentation; Byzantine Empire shrinking; Mongol disruptions upcoming Unit 2. Western Europe Gothic cathedrals, universities, growing trade Italian city-states. Not yet dominant globally—peripheral to Silk Road economics. Orthodox Christianity vs. Catholic West split.

## 7. AP Skill Connections

Comparison: Song commercialization vs. feudal Europe economies. Causation: environmental (rice, horses) and technological factors. Contextualization within regional networks. LEQ might compare state religions' role in legitimacy. Avoid describing all Africa/Islam as monolithic. Use specific empires, technologies, and trade goods as evidence.
""")

BLOCKS[(WORLD, "Unit 2: Networks of Exchange (c. 1200–c. 1450)")] = block("""
## Detailed Knowledge

## 1. Silk Roads and Trans-Saharan Routes

Silk Roads (misnomer—many goods) connected China to Mediterranean via Central Asian steppe and oasis cities (Samarkand). Caravans, relay trade, cultural diffusion—Buddhism to East Asia, Islam to Central Asia, technologies papermaking, printing. Trans-Saharan camel caravans moved gold, salt, slaves, Islam to West Africa. Environmental knowledge and credit instruments (checks) facilitated trade. Disease along routes including Black Death later 1340s.

## 2. Indian Ocean Network

Monsoon winds timed sailing East Africa to Arabia to India to Southeast Asia to China. Larger ships dhows, junks under Zheng He Ming voyages 1405–1433 displayed Chinese naval capacity then withdrawn—political choice not inability. Swahili coast, Gujarat, Malacca entrepôt states. Islam and Hinduism spread via merchants; cosmopolitan port cities multilingual. Spices, textiles, porcelain high value low bulk.

## 3. Mongol Empires and Pax Mongolica

Genghis Khan unified Mongol tribes 1200s; successors created khanates from China (Yuan) to Persia (Ilkhanate) to Golden Horde Russia. Pax Mongolica secured routes temporarily—facilitated Marco Polo narratives, spread gunpowder, plague. Mongol religious tolerance pragmatic; adopted cultures locally. Collapse increased fragmentation; Ottoman rise upcoming.

## 4. Cultural and Technological Exchanges

Spread of crops sugar, citrus; chess; numerals; artistic motifs. Paper and printing altered administration and religion dissemination. Syncretism at nodes—Nestorian Christianity in Asia faded; Islam strengthened Indian Ocean. Intellectual exchanges at courts.

## 5. Environmental and Biological Exchanges Pre-1492

Limited compared to Columbian Exchange but still significant— crops millet, sorghum across Sahara; rats via ships. Black Death 1347–1351 originated Central Asia, entered Europe via trade ports—killed third Europe population, labor scarcity later feudal weakening, scapegoating Jews, flagellants. Demonstrates integration costs of networks.

## 6. Comparisons of Exchange Networks

Silk Road overland vs. Indian Ocean maritime—different goods, technologies, political sponsors. Role of states: Mongols secured land; Ming sponsored then retreated sea. African kingdoms leveraged Saharan trade without controlling entire routes.

## 7. AP Skill Connections

Causation network effects; comparison land vs. sea trade; CCOT Indian Ocean Islam spread. DBQ often trade account or traveler narrative. LEQ evaluate Mongols as disruptors vs. connectors. Map reading: identify chokepoints (Strait Malacca, Hormuz). Avoid treating Zheng He as beginning of Chinese exploration only—context of tributary system.
""")

BLOCKS[(WORLD, "Unit 3: Land-Based Empires (c. 1450–c. 1750)")] = block("""
## Detailed Knowledge

## 1. Gunpowder Empires Overview

Ottomans, Safavids, Mughals, Ming/Qing China, Russia, Songhai then smaller states—used firearms, centralized bureaucracy, religious legitimacy to expand. Comparison framework: military slavery (devshirme Janissaries), religious tolerance limits, monumental architecture displays power. AP asks similarities/differences in administration and legitimacy.

## 2. Ottoman Empire

Mehmed II conquered Constantinople 1453; Suleiman golden age—law, navy Mediterranean. Millet system organized religious communities; devshirme recruited Christian boys to elite service converting to Islam. Tension with Safavids Shia vs. Sunni; Habsburg rivals Vienna sieges. Decline narratives later oversimplify 17th c. still strong.

## 3. Safavid Iran and Mughal India

Safavids imposed Twelver Shia distinct from Ottoman Sunni—Shah Ismail; art Isfahan. Mughals Babur to Akbar to Aurangzeb—Hindu majority ruled by Muslim minority; Akbar religious debate house, mansabdari military ranking, Taj Mahal Shah Jahan; Aurangzeb less tolerant Hindu temple policies stirred resistance Marathas. Sikhism emerged in Punjab tension zone.

## 4. Ming and Qing China

Ming restored Chinese rule expelled Mongols; Zheng He early then isolationist tendencies, Great Wall reinforcement, civil service exams Neo-Confucian. Qing Manchu conquest 1644—multiethnic empire, expansion Xinjiang Tibet Taiwan; Kangxi/Qianlong emperors; tribute system; population boom New World crops maize sweet potato; foot binding gender oppression persisted.

## 5. Russia and Other Empires

Ivan IV, Romanov rise, Peter Great westernization preview overlaps Euro. Songhai Timbuktu learning then Moroccan invasion 1591. Tokugawa Japan unification 1600 sakoku limited trade Dutch Dejima—internal stability urban culture kabuki.

## 6. Administration and Legitimacy Themes

Religion legitimized rulers—caliph titles, Mandate of Heaven, divine-right equivalents. Tax farming, land grants, census measurement (Mughal zabt). Architecture: mosques, Forbidden City, Topkapi. Resistance: Cossacks, peasant revolts, banditry on margins.

## 7. AP Skill Connections

Comparison gunpowder empire administration; causation military tech; continuity bureaucratic traditions. SAQ on devshirme or Qing expansion. LEQ compare two empires' religious policies. Avoid essentializing "Muslim empires" as identical. Tie architecture to legitimacy claims with specifics.
""")

BLOCKS[(WORLD, "Unit 4: Transoceanic Interconnections (c. 1450–c. 1750)")] = block("""
## Detailed Knowledge

## 1. European Maritime Expansion

Portuguese Vasco da Gama 1498 Indian Ocean; Spanish Columbus Caribbean; later Dutch VOC, English East India Company private trade empires. Motives God glory gold; technology caravel, guns, corporate charters. Treaty Tordesillas 1494 divided Atlantic spheres—ignored by others.

## 2. Columbian Exchange and Demographic Catastrophe

Already in Euro Unit 1 but World emphasizes global asymmetry: Americas lost 50–90% population disease; Africa drawn into Atlantic slave trade; Europe gained calories silver. Silver pesos de ocho fueled global trade especially China Ming tax reforms single-whip policy needed silver; Potosí mines labor coerced mita.

## 3. Atlantic Slave Trade System

Triangular trade manufactured goods to Africa, enslaved people to Americas, commodities to Europe. Middle Passage mortality; seasoning; codification racial slavery hereditary unlike many prior systems. African kingdoms ( Dahomey, Kongo ) participated under gun pressure—not passive victims nor sole blame avoid simplistic moral math without analysis. Haitian revolution later response.

## 4. Maritime Empires in Asia

Portugal fortified ports ( Goa, Malacca ); did not conquer interior India. Dutch dominated spice islands violently (Banda massacre). British East India Company shifted from trade to territorial rule after Plassey 1757 preview. China Canton system limited European trade silver tea porcelain. Japan sakoku exception limiting European penetration.

## 5. American Colonial Societies

Spanish casta system hierarchy peninsulares creoles mestizos; encomienda to hacienda; Catholic missions. Portuguese Brazil sugar plantations African slavery. British Caribbean tobacco then sugar brutal. Columbian biological transfers reshaped ecologies—horses transformed Plains Native economies later.

## 6. Global Economic Integration Early Modern

Mercantilism bullionism; joint-stock companies spread risk. World GDP shifts slowly but networks truly global—Manila galleons connected Americas to Asia via Acapulco Philippines. Syncretic cultures creole languages, vodou syncretism.

## 7. AP Skill Connections

Causation Atlantic trade effects; comparison Spanish vs. British colonization; CCOT African societies pre/post trade. DBQ silver flow documents common. LEQ evaluate extent of change 1450–1750 for Americas or Africa. Center Indigenous and African agency where evidence allows. Avoid Columbus hero/villain binary without analysis of structures.
""")

BLOCKS[(WORLD, "Unit 5: Revolutions (c. 1750–c. 1900)")] = block("""
## Detailed Knowledge

## 1. Enlightenment and Atlantic Revolutions Framework

Political revolutions drew on Enlightenment ideas, fiscal crises, social tensions. Compare American Revolution 1776 independence colonial self-government vs. French 1789 social equality radical phases vs. Haitian 1791–1804 only successful slave revolution universal rights claim vs. Latin American independence 1808–1825 creole elites often preserved inequality.

## 2. American and French Outcomes

US federal system, slavery continued contradiction to liberty rhetoric. French Republic Terror Napoleon authoritarian turn; spread Code civil across Europe. Women participated excluded legally Olympe de Gouges. Estates General Third Estate nationalism civic.

## 3. Haitian Revolution Significance

Toussaint L'Ouverture, Dessalines independence 1804; French reparations debt crippling; isolation from powers fear contagion. Challenges narrative limiting revolution to white Atlantic. Environmental and warfare devastation; plantation economy destroyed then rebuilt coercively.

## 4. Latin American Independence

Napoleon invaded Iberia 1808 juntas; Bolívar Andean campaigns; San Martín Pacific crossing; Mexico Hidalgo Miguel priest Grito 1810; Brazil Pedro II monarchy separate path from Portugal 1822. Political instability caudillos; economy export dependency continued; Indigenous/African rights largely unaddressed.

## 5. Nationalism and Unification Elsewhere

Italian Risorgimento Garibaldi Cavour; German Bismarck wars—overlap Euro course but World compares global nationalism. Greek independence 1830 romantic nationalism. Polish failures 1830 1863. Nationalism could unify or break empires Ottoman Tanzimat, Austrian minorities.

## 6. Revolutions of Industrial and Social Thought

Not all revolutions political—Industrial Revolution transformed production (Unit 6 deeper). Marx socialism responded class conflict. Feminist first wave Seneca Falls 1848. Reactions conservatism Metternich Congress Vienna restored monarchies temporarily.

## 7. AP Skill Connections

Comparison revolution goals/methods/outcomes; causation role of Enlightenment vs. material factors; continuity legal inequality post-independence. LEQ compare two revolutions' social effects. DBQ Declaration or Bolívar letter. Always address Haiti as revolution equal to US/France in significance.
""")

BLOCKS[(WORLD, "Unit 6: Consequences of Industrialization (c. 1750–c. 1900)")] = block("""
## Detailed Knowledge

## 1. Industrialization Spread

Britain first as in Euro unit; US railroads, Germany Ruhr steel, Japan Meiji Restoration 1868 deliberate industrialization fukoku kyohei rich country strong army—textiles, military, constitution 1889 hybrid modernity. Russia emancipation 1861 then Trans-Siberian railway late century. Industrialization reshaped global power—non-industrialized faced dependency.

## 2. Social Transformations Global

Urbanization slums, labor unions strikes, middle class consumerism, separate spheres gender ideology spread globally with variations. Child labor reforms Britain Factory Acts influenced models. Migration Irish to US, Chinese coolie labor railroads Peru Cuba, Indian indentured to Caribbean Fiji after slavery abolition—new coerced mobilities.

## 3. Imperialism Second Wave

New imperialism 1880s–1914: Berlin Conference Africa 1884–85; Leopold II Congo atrocities rubber terror; British India Raj after 1857 Mutiny direct rule; French Indochina Algeria; Dutch East Indies; US Philippines 1898 Spanish-American War. Economic motives markets raw materials investment; strategic naval bases; ideology Social Darwinism civilization mission racism.

## 4. Responses to Imperialism

Local elites reform—Egypt Muhammad Ali modernization debt British control Suez 1882; Ottoman Young Turks; China Self-Strengthening Movement ships factories vs. conservatives; Boxer Rebellion 1900 anti-foreign Qing weakness; Japan successful resistance models. Intellectuals: Ram Mohan Roy India reform Hinduism; nationalism emerges Congress 1885.

## 5. Global Commodity Chains

Rubber Congo Amazon; cotton Egypt; opium British trade China caused Opium Wars 1839–42 1856–60 unequal treaties treaty ports extraterritoriality. Silver flows earlier continued; gold standard later 1870s. Environmental extraction deforestation mining pollution global.

## 6. Technology and Communication

Telegraph undersea cables connected markets hours not months; steamships shortened passages; Suez Canal 1869 Panama later 1914; railroads inland empires India Transcontinental US Siberia. Time zones standardized coordination. Print newspapers nationalism spread.

## 7. AP Skill Connections

Causation imperialism; comparison colonizer methods direct vs. informal (Latin America British investments); CCOT labor systems post-slavery. LEQ evaluate industrialization as cause of imperialism vs. other factors. Avoid treating colonized as homogeneous; include resistance and collaboration nuances. Quantitative env stats optional when illustrative.
""")

BLOCKS[(WORLD, "Unit 7: Global Conflict (c. 1900–present)")] = block("""
## Detailed Knowledge

## 1. World War I Global Scope

European origins but fought globally: Africa campaigns, Middle East Gallipoli Arab Revolt Sykes-Picot betrayal promises, Asian colonies contributed troops India Vietnam—expectations for autonomy raised. Ottoman genocide Armenians. Total war economies, propaganda, women workforce. Russian Revolution 1917 Bolshevik exit Treaty Brest-Litovsk; civil war; Lenin NEP; Stalin later Five-Year Plans collectivization terror.

## 2. Interwar Global Instability

Great Depression 1929 spread via gold standard trade collapse—Germany Weimar hyperinflation earlier 1923 then depression fueled Nazis; Latin America export collapse; Japan militarism Manchuria 1931 League weak. Fascism Italy Ethiopia invasion 1935; Spanish Civil War international brigades. Gandhi Salt March 1930 nonviolent resistance British Raj; Mexican Revolution 1910–20 land reform Constitution 1917; Atatürk Turkey secularization reforms post-Ottoman collapse.

## 3. World War II Worldwide

Holocaust centered Europe but war Pacific theater Pearl Harbor 1941 US entry; atomic bombs Hiroshima Nagasaki 1945 moral debates; Chinese resistance Japan Rape of Nanjing 1937; Southeast Asia Japanese occupation nationalist collaborations/resistance; North Africa El Alamein; D-Day; Soviet Eastern Front majority German casualties. War mobilization decolonization seeds.

## 4. Cold War Globalized

US-USSR rivalry not only Europe: proxy Korea 1950–53 divided; Vietnam French then US war; Afghanistan Soviet invasion 1979; Cuba Missile Crisis 1962; Non-Aligned Movement Bandung 1955 Nehru Nasser Nkrumah attempted third path. Nuclear arms race ICBMs MAD; space race Sputnik 1957 Moon 1969. Red Scare McCarthyism; Soviet purges earlier.

## 5. Decolonization Overlap Preview Unit 8

India/Pakistan partition 1947 violence; Ghana 1957 Nkrumah; Algerian War 1954–62; Indonesia Sukarno; Kenya Mau Mau. Cold War superpowers backed regimes anti-communist vs. socialist—sometimes trumped self-determination rhetoric.

## 6. Technology Warfare and Society

Trench machine guns WWI; blitzkrieg tanks WWII; carrier aviation; radar. Civilian bombing cities strategic. Postwar UN 1945 founded prevent war; Universal Declaration Human Rights 1948; genocide convention. Medical penicillin mass production.

## 7. AP Skill Connections

Comparison WWI vs WWII global impacts; causation decolonization from war; continuity imperial economic patterns. DBQ wartime propaganda or decolonization speech. LEQ evaluate extent Cold War was continuation imperial rivalry. Name specific non-European theaters to earn contextualization credit.
""")

BLOCKS[(WORLD, "Unit 8: Cold War and Decolonization")] = block("""
## Detailed Knowledge

## 1. Decolonization Processes Varied

Peaceful transitions India 1947 Nehru nonalignment though partition bloodshed Muslim Pakistan Bangladesh 1971 later; violent Algeria FLN terrorism counterterror French; Kenya Mau Mau; Rhodesia/Zimbabwe delayed majority rule; Angola Mozambique liberation wars Cuban intervention. French Indochina Vietnam Dien Bien Phu 1954 Geneva split US involvement follows. Reasons: war-weakened Europe, US/USSR anti-colonial rhetoric selectively, nationalist movements organized parties unions military veterans.

## 2. State-Building Challenges

Artificial borders Berlin Conference legacy ethnic conflict Nigeria Biafra, Rwanda 1994 genocide Hutu Tutsi colonial categorization legacies debatable; economic dependency export mono-crops neocolonialism Nkrumah term; one-party states Nyerere Tanzania ujamaa idealism vs. authoritarianism Mobutu Zaire corruption; military coups frequent Latin America Cold War context.

## 3. Cold War in Global South

US supported coups Iran 1953 Mossadegh oil nationalization; Guatemala 1954 Arbenz; Chile 1973 Allende; Congo Lumumba assassination. USSR backed Cuba Castro 1959 revolution Bay of Pigs 1961 missile crisis; Angola Cuban troops; Vietnam unified 1975 communist. Non-Aligned Movement limited success amid superpower pressure. Bandung principles sovereignty.

## 4. Middle East and Oil

Israel established 1948 Nakba Palestinian displacement ongoing conflict wars 1967 1973; OPEC oil embargo 1973 economic shock; Iranian Revolution 1979 Islamic Republic hostage crisis; Afghanistan Soviet invasion mujahideen US support later blowback. Secular Arab nationalism Nasser pan-Arabism vs. Islamist movements Muslim Brotherhood.

## 5. Latin America Cold War Era

Cuban Revolution export revolution attempts; US Monroe Doctrine updated intervention Guatemala Chile Nicaragua Contras 1980s; import substitution industrialization mixed results debt crisis 1980s Washington Consensus IMF structural adjustment protests. Liberation theology Catholic social justice.

## 6. Apartheid and Human Rights

South Africa apartheid formalized 1948; ANC Mandela imprisoned Robben Island; international sanctions divestment; released 1990 negotiated transition 1994—rare peaceful overturn racist state. Universal human rights discourse strengthened Amnesty International 1961; women rights conferences; anti-apartheid global civil society example.

## 7. AP Skill Connections

Comparison decolonization India vs Algeria; causation Cold War influence on independence timing; CCOT economic dependency. LEQ evaluate most significant effect decolonization. Avoid treating Global South as passive Cold War chessboard—center local leaders' goals. Connect to contemporary conflicts roots responsibly.
""")

BLOCKS[(WORLD, "Unit 9: Globalization")] = block("""
## Detailed Knowledge

## 1. Economic Globalization Post-1991

Collapse USSR expanded capitalist integration; China Deng Xiaoping reforms 1978 special economic zones, WTO 2001 factory of world; neoliberal policies privatization deregulation trade agreements NAFTA 1994 USMCA later, EU single market. Supply chains just-in-time containerization standard box 1956 revolution lowered shipping costs. Multinational corporations offshore production; maquiladoras; Bangladesh garment industry Rana Plaza 2013 labor conditions critique.

## 2. Technology and Communication

Internet commercialized 1990s; mobile phones Global South leapfrog landlines; social media Arab Spring 2011 debates causality; misinformation global elections. Financial globalization electronic trading crises contagious 1997 Asian financial crisis IMF austerity; 2008 Great Recession subprime US spread worldwide stimulus G20.

## 3. Migration and Diasporas

Labor migration Gulf states guest workers remittances Philippines India; undocumented migration US-Mexico border debates; refugee crises Syria 2015 Europe Schengen strain; Rohingya Myanmar; climate migration Pacific islands planning relocation. Brain drain vs. remittance development debate. Cultural diasporas maintain transnational ties food media religion hybrid identities.

## 4. Environmental Global Challenges

Climate change IPCC reports greenhouse emissions historical responsibility core vs periphery debates; Paris Agreement 2015 US withdrawal rejoin fluctuation; deforestation Amazon Congo; biodiversity loss; plastic oceans. Sustainability SDGs 2015. Green energy transition solar wind uneven—rare earth mining pollution China dominance. Environmental justice protests indigenous Amazon fires.

## 5. Cultural Globalization

Hollywood Bollywood K-pop anime diffusion; English lingua franca; UNESCO heritage preservation vs. commodification tourism overtourism Venice Machu Picchu. Religious revivalism fundamentalisms reactions perceived Westernization— Iranian revolution earlier, Hindu nationalism BJP, evangelical growth Global South. FIFA World Cup Olympic global spectacles nationalism commercialized.

## 6. Resistance and Alternatives

Anti-globalization protests Seattle 1999 WTO; Occupy Wall Street 2011 inequality; Fair Trade movement; local food sovereignty La Via Campesina. Regional trade blocs ASEAN African Union MERCOSUR counterweight somewhat. China Belt and Road Initiative 2013 infrastructure loans debt diplomacy critiques Sri Lanka port. Vaccine nationalism COVID-19 2020–22 revealed interdependence and inequality pharmaceutical patents waiver debates.

## 7. AP Skill Connections

CCOT global integration 1900–present acceleration periods; comparison winners/losers globalization; causation technology role. LEQ evaluate continuity/discontinuity imperial economic patterns. Use specific examples not buzzwords. Contemporary issues require historical grounding—trace present inequality to colonial legacies industrial division of labor where relevant without deterministic claims.
""")

# ── Write output file ──────────────────────────────────────────────────────────

def word_count(text: str) -> int:
    return len(text.split())


def validate():
    expected = {
        LANG: 9,
        LIT: 9,
        HUG: 7,
        EURO: 9,
        WORLD: 9,
    }
    counts = {}
    for (subject, title), content in BLOCKS.items():
        counts.setdefault(subject, []).append(title)
        wc = word_count(content)
        if wc < 1400:
            print(f"WARN low word count ({wc}): {subject} / {title}")
        if not content.startswith("## Detailed Knowledge"):
            raise ValueError(f"Bad header: {subject} / {title}")
        if "Worked Example" in content or "Extended Examples" in content:
            raise ValueError(f"Forbidden section: {subject} / {title}")
    for subject, n in expected.items():
        if len(counts.get(subject, [])) != n:
            raise ValueError(f"{subject}: expected {n}, got {len(counts.get(subject, []))}")
    print(f"Validated {len(BLOCKS)} blocks")


def write_output():
    lines = ['"""HSS concept deepening blocks for deepen-concept-knowledge.py."""\n', "HSS_DEEP_BLOCKS = {\n"]
    for key in sorted(BLOCKS.keys(), key=lambda k: (k[0], k[1])):
        subject, title = key
        content = BLOCKS[key]
        lines.append(f"    ({subject!r}, {title!r}): {content!r},\n")
    lines.append("}\n")
    OUTPUT.write_text("".join(lines), encoding="utf-8")
    print(f"Wrote {OUTPUT} ({len(BLOCKS)} entries)")


if __name__ == "__main__":
    validate()
    write_output()

