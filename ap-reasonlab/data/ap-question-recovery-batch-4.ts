import type { QuestionnaireItem } from "@/lib/types";

function frq(
  id: string,
  conceptIntro: string,
  prompt: string,
  answerKey: string,
  rationale: string,
  scoringGuide: string[],
  hints: string[],
  examSection: string,
  difficultyTier: 2 | 3 = 3,
  conceptId?: string
): QuestionnaireItem {
  return {
    id,
    format: "frq_half",
    conceptId,
    conceptIntro,
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier,
    prompt,
    answerKey,
    rationale,
    scoringGuide,
    hints,
    examSection,
  };
}

/**
 * Batch 4, tranche A: deep rewrites of legacy questions that were structurally thin,
 * templated, or too easy to support an exam-authentic label. Every replacement keeps
 * the historical item id so the change is auditable and does not inflate question counts.
 */
export const recoveredApItemsBatch4: Record<string, QuestionnaireItem> = {
  "stats-inf-a1": frq(
    "stats-inf-a1",
    "Section II Part A · Inference. Interpret a one-proportion interval and reason about changed confidence level.",
    "A simple random sample of 400 eligible seniors finds that 208 intend to vote in a local election. A 95% confidence interval for the population proportion is reported as 0.52 ± 0.04. (a) Identify the population parameter and interpret the interval in context. (b) Explain what the margin of error 0.04 means and what it does NOT mean about individual seniors. (c) Without recalculating from raw data, state how the interval would change if the confidence level were increased to 99%, assuming the same sample and method, and justify your answer.",
    "(a) The parameter is p, the true proportion of all eligible seniors in the target population who intend to vote. The interval is (0.48, 0.56): using this method, we are 95% confident that p lies between 0.48 and 0.56. (b) The 0.04 is the margin of error for estimating the population proportion; it is not a statement that each person's response is accurate within 0.04 or that 95% of individual responses lie in that range. (c) A 99% interval would be wider because a larger critical value is required for greater confidence while the sample estimate and standard error are otherwise unchanged.",
    "A confidence interval concerns uncertainty in a population parameter, not uncertainty for individual observations. Increasing confidence at fixed sample size requires a larger critical value, increasing margin of error.",
    ["1 point: identifies p in context.", "1 point: interprets the 95% interval in population terms.", "1 point: correctly interprets margin of error and rejects an individual-level interpretation.", "1 point: states a 99% interval is wider and connects this to the larger critical value."],
    ["Convert 0.52 ± 0.04 to endpoints.", "Ask what changes in critical value when confidence increases."],
    "Section II Part A · Inference"
  ),

  "psych-rm-a1": frq(
    "psych-rm-a1",
    "Section II · Research methods. Variables, operationalization, random assignment, and confounding.",
    "A psychologist studies whether instrumental background music affects delayed word recall. Eighty volunteers are randomly assigned to study the same 40-word list either in silence or while hearing the same instrumental track at a fixed volume. Twenty-four hours later, all participants take an unexpected free-recall test in silence. (a) Identify the independent and dependent variables. (b) Give an operational definition of the dependent variable. (c) Explain how random assignment strengthens a causal interpretation. (d) Identify one plausible confounding variable that would arise if participants instead chose whether to study with music and explain how it could distort the result.",
    "(a) IV: study condition, instrumental music versus silence. DV: delayed word recall. (b) For example, the number of target words correctly recalled after 24 hours. (c) Random assignment tends to balance preexisting participant differences across conditions, reducing systematic confounding and supporting a causal comparison. (d) If participants self-select, prior study habits, music preference, attention, or baseline memory could differ between groups and also affect recall, so an observed difference could not confidently be attributed to music.",
    "The task distinguishes manipulation, measurement, operationalization, and the reason random assignment matters. Self-selection creates alternative explanations for group differences.",
    ["1 point: correct IV and DV.", "1 point: measurable operational definition of recall.", "1 point: explains random assignment as reducing systematic preexisting differences and supporting causation.", "1 point: identifies a plausible self-selection confound and explains its effect."],
    ["Operational definitions must say exactly how a variable is measured.", "Random assignment is different from random sampling."],
    "Section II · Research methods"
  ),

  "micro-sd-a1": frq(
    "micro-sd-a1",
    "Section II · Microeconomics. Per-unit producer tax, tax wedge, incidence, and surplus.",
    "A competitive coffee market initially has equilibrium price $5 per cup and quantity 1,000 cups per day. The government imposes a $2 per-cup tax on sellers. After adjustment, buyers pay $6.20 and sellers receive $4.20 after tax, and quantity falls to 850 cups. (a) State which curve shifts in the standard supply-demand diagram and by how much vertically. (b) Calculate the per-unit tax burden borne by buyers and by sellers relative to the original equilibrium. (c) Calculate daily government tax revenue. (d) Based only on the observed division of the tax burden, identify which side of the market appears relatively less price elastic and justify.",
    "(a) The supply curve shifts vertically upward/left by $2 because sellers require $2 more buyer-paid price for each quantity to receive the same net price. (b) Buyers bear $1.20 per cup; sellers bear $0.80 per cup. (c) Tax revenue = $2 × 850 = $1,700 per day. (d) Buyers appear relatively less elastic because they bear the larger share of the tax burden.",
    "A per-unit tax creates a wedge between the buyer price and seller net price. Tax incidence depends on relative elasticity, not on which side legally remits the tax.",
    ["1 point: correct $2 supply shift/tax wedge.", "1 point: buyer burden $1.20 and seller burden $0.80.", "1 point: tax revenue $1,700.", "1 point: connects larger buyer burden to relatively more inelastic demand."],
    ["Compare the new buyer and seller prices with the original $5 equilibrium.", "Tax revenue is tax per unit times post-tax quantity."],
    "Section II · Short free response"
  ),

  "macro-ad-a1": frq(
    "macro-ad-a1",
    "Section II · Macroeconomics. Fiscal expansion, multiplier, short-run trade-offs, and crowding out.",
    "A closed economy is in a recessionary gap of $120 billion. The marginal propensity to consume is 0.75. Assume initially that the simple spending multiplier applies and there is no crowding out. The government increases infrastructure purchases by $20 billion with no immediate tax change. (a) Calculate the simple spending multiplier and the predicted change in equilibrium real GDP. (b) Determine whether the $20 billion policy fully closes the stated gap under these assumptions. (c) On an AD-AS model with upward-sloping SRAS, state the expected short-run direction of real GDP and the price level. (d) Explain how government borrowing could make the actual increase in real GDP smaller than the simple-multiplier prediction.",
    "(a) Multiplier = 1/(1-0.75)=4; predicted ΔY = 4($20B) = $80B. (b) No. An $80B increase leaves about a $40B recessionary gap. (c) AD shifts right; real GDP and the price level rise in the short run. (d) Deficit-financed spending can raise demand for loanable funds and interest rates, reducing interest-sensitive private investment; this crowding out reduces the net increase in AD and output.",
    "The simple multiplier gives an upper-style benchmark under restrictive assumptions. AD-AS and loanable-funds reasoning explain why actual output changes can differ.",
    ["1 point: multiplier 4 and ΔY = $80B.", "1 point: concludes the gap is not fully closed and identifies $40B remaining.", "1 point: GDP and price level both rise in the short run.", "1 point: valid crowding-out chain from borrowing to interest rates to lower private investment."],
    ["Use 1/(1-MPC).", "Compare the predicted GDP change with the original output gap."],
    "Section II · Long free response"
  ),

  "ush-src-a1": frq(
    "ush-src-a1",
    "Section I Part B · AP US History sourcing and contextualization.",
    "Original practice source: In a 1917 newspaper editorial, a suffrage organizer argues that a nation asking women to staff hospitals, factories, farms, and relief organizations during wartime cannot logically deny them a political voice after the emergency. (a) Identify ONE development from 1890–1917 that provides relevant historical context for the argument. (b) Explain how the intended audience of a mass-circulation newspaper could shape the organizer's choice of argument. (c) Explain ONE way the wartime claim could be used as evidence for continuity OR change in women's political activism between the Progressive Era and the ratification of the Nineteenth Amendment.",
    "A strong response might use Progressive reform networks, state-level suffrage victories, settlement-house activism, or women's expanding public roles as context. A newspaper audience encourages a broadly patriotic and publicly accessible argument rather than an internal movement strategy memo. The wartime service claim illustrates change by linking established reform activism to a new national citizenship argument that helped broaden support before the Nineteenth Amendment; a continuity argument could emphasize that suffragists continued using moral/reform rhetoric and organized pressure developed before the war.",
    "High-quality historical sourcing requires linking contextual knowledge to how and why the source makes its argument, not merely naming HIPP labels.",
    ["1 point: accurate contextual development from the period.", "1 point: explains a plausible audience effect on rhetoric.", "1 point: makes a defensible continuity-or-change claim.", "1 point: supports that claim with a specific historical connection."],
    ["Do not just say 'the audience is the public'; explain how that affects the message.", "Connect wartime participation to citizenship claims."],
    "Section I Part B · Short-Answer Question",
    3,
    "ush-constitution"
  ),

  "wh-comp-a1": frq(
    "wh-comp-a1",
    "Section II · AP World History comparison and causation.",
    "Compare the Ottoman and Mughal empires' methods of governing religiously diverse populations in the period 1450–1750. (a) Provide one piece of broader context for the rise of large gunpowder empires. (b) State a defensible thesis that identifies one meaningful similarity and one meaningful difference in how the two empires managed diversity. (c) Support the comparison with at least two specific pieces of historical evidence, one connected to each empire. (d) Explain one factor that helps account for the difference you identified.",
    "One defensible thesis: Both empires used pragmatic accommodation to govern diverse subjects, but Ottoman rule institutionalized communal autonomy more formally through arrangements associated with religious communities, whereas Mughal policy varied more sharply by ruler, from Akbar's broad accommodation to Aurangzeb's more explicitly Islamic measures. Evidence may include Ottoman millet practices and devshirme/elite integration; Mughal religious debate at Akbar's court, abolition/reimposition of jizya, Rajput alliances, or Aurangzeb's policies. Differences can be explained by distinct political coalitions, dynastic strategies, and changing ruler priorities.",
    "The rewrite forces comparison within a shared category, specific evidence, and causal explanation rather than a list of facts.",
    ["1 point: relevant context.", "1 point: thesis with both similarity and difference.", "1 point: at least two accurate, comparative pieces of evidence.", "1 point: explains a plausible cause of the difference."],
    ["Use the same comparison category for both empires.", "A difference should be explained, not merely named."],
    "Section II · Long Essay Question",
    3,
    "whap-industrial"
  ),

  "aplang-rhet-a1": frq(
    "aplang-rhet-a1",
    "Section II · AP English Language rhetorical analysis with a complete original passage.",
    "Original practice passage: 'At 6:47 each morning, the first bus turns into the student lot with its lights on and half its seats silent. We have treated that scene as evidence of discipline: teenagers must learn to meet the clock. But a schedule is a tool, not a virtue. When biology, transportation, after-school work, and family routines all pull at the same hour, the question is not whether students can endure the timetable. The question is whether the timetable is earning the cost we ask families to pay. A later bell will not erase homework, traffic, or responsibility. It would simply move one policy closer to the evidence we already accept everywhere else in public health.' Analyze how the writer uses rhetorical choices to persuade parents who are worried that a later school start would reduce responsibility. Discuss at least two choices and explain how each contributes to the writer's line of reasoning.",
    "A defensible analysis could argue that the writer first uses concrete visual imagery of an early bus to make the abstract schedule tangible, then reframes 'discipline' by contrasting a schedule as a tool rather than a moral virtue. The concession that a later bell will not erase homework, traffic, or responsibility anticipates parental objections and makes the claim appear measured. The final appeal to evidence and public health shifts the issue from indulgence to policy effectiveness. Strong responses connect these choices to the audience's concern about responsibility and to the passage's progression from familiar scene to reframing to qualified policy claim.",
    "Rhetorical analysis must explain how choices function for a particular audience and purpose, not simply identify devices.",
    ["1 point: defensible thesis about rhetorical strategy and purpose.", "1 point: analyzes a first specific textual choice with evidence.", "1 point: analyzes a second specific textual choice with evidence.", "1 point: explains how the choices work together in the line of reasoning for the parental audience."],
    ["Name the audience concern explicitly.", "Move from evidence → rhetorical function → persuasive effect."],
    "Section II · Question 2 Rhetorical Analysis",
    3,
    "elang-rhetoric"
  ),

  "aplit-cr-a1": frq(
    "aplit-cr-a1",
    "Section II · AP English Literature poetry analysis with complete original text.",
    "Original practice poem:\n'Before the storm, my father latched each shutter / and named the rooms as if counting children. / By midnight, the hinges answered first— / not with a break, but with a stutter, / a sentence pushed beyond its breath. / Rain crossed the kitchen without knocking. / In the morning he opened every window / and listened to the house relearn its walls.' Analyze how the poem's syntax, personification, and shifting imagery develop the speaker's understanding of vulnerability. Your response should make a defensible claim and use specific textual evidence.",
    "One defensible reading is that the poem moves from the father's attempt at control to recognition that the house is vulnerable but resilient. Enjambed and interrupted syntax around 'stutter' and 'sentence pushed beyond its breath' imitates instability. Personification—hinges that 'answered,' rain that enters without knocking, and a house that 'relearn[s]'—turns the storm into a challenge to ordinary boundaries. The final open windows reverse the earlier latching of shutters, suggesting that vulnerability is no longer treated only as something to seal out but as something to acknowledge and survive.",
    "The task requires an interpretive claim about a whole-poem development and explanation of how multiple formal choices create that meaning.",
    ["1 point: defensible interpretive thesis.", "1 point: specific evidence from syntax/enjambment with analysis.", "1 point: specific evidence from personification/imagery with analysis.", "1 point: explains a meaningful shift or development across the poem."],
    ["Track what changes between the first and final images.", "Do not stop at naming personification; explain its effect."],
    "Section II · Poetry analysis",
    3,
    "elit-poetry"
  ),

  "es-eco-a1": frq(
    "es-eco-a1",
    "Section II · AP Environmental Science energy flow and ecological efficiency.",
    "A restored marsh has estimated annual net primary production of 12,000 kJ per square meter. Field measurements suggest that primary consumers incorporate 14% of producer energy into biomass, secondary consumers incorporate 9% of the energy available at the primary-consumer level, and tertiary consumers incorporate 8% of the energy available at the secondary-consumer level. (a) Calculate the energy incorporated into biomass at each consumer level. (b) Compare the measured tertiary-consumer energy with the value predicted by applying a simple 10% rule at every transfer. (c) Explain why actual ecological transfer efficiencies need not equal exactly 10%. (d) Predict one consequence for sustainable tertiary-consumer population size if producer productivity declines by 30% while transfer efficiencies remain unchanged.",
    "(a) Primary: 12,000(0.14)=1,680 kJ/m²; secondary: 1,680(0.09)=151.2 kJ/m²; tertiary: 151.2(0.08)=12.096 ≈ 12.1 kJ/m². (b) A strict 10% rule gives 12,000(0.1)^3 = 12 kJ/m², very close here but only coincidentally. (c) Efficiency varies with organism physiology, digestibility, respiration, waste, temperature, and ecosystem structure. (d) With unchanged efficiencies, energy reaching tertiary consumers also falls by 30%, reducing the energy base that can support their biomass/population.",
    "The 10% rule is an approximation. Multi-step calculation and proportional reasoning show how productivity changes propagate through trophic levels.",
    ["1 point: correct three transfer calculations.", "1 point: correct 10% benchmark and comparison.", "1 point: valid biological reason transfer efficiency varies.", "1 point: explains proportional decline in tertiary energy/population support."],
    ["Apply each measured efficiency sequentially.", "If every later multiplier stays constant, a 30% change at the base propagates proportionally."],
    "Section II · Analyze an environmental problem (data)"
  ),

  "csa-m-a1": frq(
    "csa-m-a1",
    "Section II · AP CSA methods and control structures.",
    "Write a Java method `secondDistinctLargest(int[] values)` that returns the second-largest DISTINCT integer in a nonempty array. You may assume the array contains at least two distinct values. The method must make one pass through the array and may not sort or create another collection. (a) Write the method. (b) Trace the values of your two tracking variables after processing each element of `{7, 4, 7, 9, 2, 9, 8}`. (c) Explain why simply initializing both tracking variables to 0 can make an otherwise similar algorithm incorrect for some valid inputs.",
    "One correct implementation tracks largest and second-largest distinct values while scanning, for example by initializing from the first elements carefully or using Integer.MIN_VALUE with explicit distinct checks. For the sample array, the final largest is 9 and second distinct largest is 8. Initializing both trackers to 0 can fail for arrays containing only negative values because 0 may incorrectly remain larger than every actual array element even though 0 is not in the data.",
    "The problem requires code, trace reasoning, handling duplicates, and a boundary-case correctness argument rather than a trivial max comparison.",
    ["1 point: one-pass method with correct tracking updates.", "1 point: handles duplicate maxima so second-largest is distinct.", "1 point: correct trace/final values 9 and 8.", "1 point: explains the negative-input failure of zero initialization."],
    ["When a new maximum appears, the old maximum may become the second maximum.", "Do not let a duplicate maximum overwrite the second-distinct value."],
    "Section II · Methods and control structures"
  ),

  "csp-d-a1": frq(
    "csp-d-a1",
    "Create performance task written-response practice · data, sampling, and algorithmic bias.",
    "A school develops a model to predict which students need optional tutoring. The training data come only from students enrolled in honors courses because those records were easiest to digitize. The model uses assignment completion rate, course level, and prior test scores, then recommends tutoring when a risk score exceeds a threshold. (a) Identify one way the training sample could introduce bias. (b) Explain one harmful consequence when the model is applied to the entire school. (c) Describe one concrete change to data collection that would reduce the problem. (d) Explain why removing student names alone would not solve the representativeness problem.",
    "(a) Honors-only training data are not representative of the full student population and may encode different course structures, grading patterns, or access to resources. (b) The model may systematically misclassify students outside honors courses, leading to missed support or unnecessary intervention. (c) Collect a stratified or otherwise representative training sample across course levels and relevant student groups, while monitoring performance by subgroup. (d) Removing names helps direct identification/privacy but does not change the distributional bias in which students are represented.",
    "The task separates privacy from representativeness and requires connecting biased data collection to model behavior and mitigation.",
    ["1 point: identifies honors-only sampling/coverage bias.", "1 point: explains a plausible downstream harm.", "1 point: proposes a concrete representative-data mitigation.", "1 point: distinguishes anonymization from fixing sampling bias."],
    ["Ask who is missing from the training data.", "Privacy and representativeness are different properties."],
    "Create performance task · written responses (practice)"
  ),

  "phys2-w-a1": frq(
    "phys2-w-a1",
    "Section II · AP Physics 2 mathematical routines and representations for waves.",
    "A loudspeaker produces a 500 Hz tone in air where the speed of sound is 340 m/s. The tone then enters a long tube filled with a gas in which sound travels at 255 m/s. The source frequency is unchanged. (a) Calculate the wavelength in air. (b) Calculate the wavelength in the second gas. (c) Explain why the frequency does not change at the boundary even though wavelength does. (d) A second 505 Hz tone is played simultaneously in air. Calculate the beat frequency and explain whether changing the gas surrounding both sources changes that beat frequency.",
    "(a) λ_air = 340/500 = 0.680 m. (b) λ_gas = 255/500 = 0.510 m. (c) The oscillation frequency is set by the source and must remain continuous across the boundary; wave speed changes with medium, so wavelength changes through v=fλ. (d) Beat frequency = |505-500| = 5 Hz. If both source frequencies remain 500 and 505 Hz, changing the propagation medium changes wavelengths/speeds but not their frequency difference, so the beat frequency remains 5 Hz.",
    "The question distinguishes source-controlled frequency from medium-dependent speed and wavelength, then tests transfer of that principle to beats.",
    ["1 point: 0.680 m.", "1 point: 0.510 m.", "1 point: correct boundary explanation tying source frequency to changed wavelength.", "1 point: 5 Hz and correct statement that the beat frequency is unchanged if source frequencies are unchanged."],
    ["Use v=fλ separately in each medium.", "Beat frequency depends on source frequencies, not wave speed."],
    "Section II · Mathematical Routines"
  ),

  "phycm-r-a1": frq(
    "phycm-r-a1",
    "Section II · AP Physics C Mechanics rotational dynamics.",
    "A uniform disk of mass 2.0 kg and radius 0.30 m rotates freely about its central axis. A constant tangential force of 4.0 N is applied at the rim for 1.5 s, starting from rest. Neglect axle friction. (a) Calculate the disk's moment of inertia. (b) Calculate the applied torque and angular acceleration. (c) Calculate the angular speed after 1.5 s. (d) Calculate the rotational kinetic energy at that instant. (e) Verify that the work done by the applied torque over the angular displacement equals the rotational kinetic-energy increase.",
    "For a uniform disk, I=(1/2)MR²=0.09 kg·m². Torque τ=FR=1.2 N·m, so α=τ/I=13.33 rad/s². After 1.5 s, ω=20 rad/s. Rotational kinetic energy K=(1/2)Iω²=18 J. Angular displacement from rest under constant α is θ=(1/2)αt²=15 rad, so W=τθ=1.2(15)=18 J, matching ΔK.",
    "The problem links torque, rotational kinematics, work, and energy, providing an internal consistency check rather than direct substitution only.",
    ["1 point: I=0.09 kg·m².", "1 point: τ=1.2 N·m and α≈13.3 rad/s².", "1 point: ω=20 rad/s.", "1 point: K=18 J and verifies W=τθ=18 J."],
    ["For a uniform disk use I=MR²/2.", "Use constant-angular-acceleration kinematics before checking work-energy."],
    "Section II · Free Response 2"
  ),

  "phycem-g-a1": frq(
    "phycem-g-a1",
    "Section II · AP Physics C E&M Gauss's law with piecewise electric field.",
    "An infinitely long solid insulating cylinder of radius R carries uniform volume charge density ρ. (a) Choose a Gaussian surface and derive the magnitude of the electric field for r<R. (b) Derive the field for r>R. (c) Show that your two expressions agree at r=R. (d) State how the radial dependence of E differs inside and outside the cylinder and explain physically why the enclosed charge changes differently in the two regions.",
    "Use a coaxial Gaussian cylinder of radius r and length L. For r<R, Q_enc=ρπr²L and E(2πrL)=Q_enc/ε0, giving E=ρr/(2ε0). For r>R, Q_enc=ρπR²L, giving E=ρR²/(2ε0 r). At r=R both give ρR/(2ε0). Thus E grows linearly with r inside because enclosed charge grows as r² while Gaussian area grows as r; outside, enclosed charge is fixed while Gaussian area grows as r, so E falls as 1/r.",
    "Symmetry makes E constant on the curved Gaussian surface; the piecewise result tests both calculus-style modeling and physical interpretation.",
    ["1 point: correct Gaussian surface and inside derivation.", "1 point: correct outside derivation.", "1 point: verifies continuity at r=R.", "1 point: explains linear-inside and inverse-r-outside behavior using enclosed charge and area."],
    ["The end caps contribute zero flux because E is radial.", "Inside, enclosed charge depends on r; outside it does not."],
    "Section II · Free Response 1"
  ),

  "hg-pat-a1": frq(
    "hg-pat-a1",
    "Section II · AP Human Geography urbanization, scale, and spatial consequences.",
    "A metropolitan government rezones agricultural land at the urban fringe for low-density housing. Over ten years, average commute distance rises, retail centers relocate toward highway interchanges, farmland becomes fragmented, and municipal water demand grows. (a) Identify the urban process illustrated by the scenario. (b) Explain one local-scale transportation consequence and one local-scale land-use consequence. (c) Explain one regional or global environmental consequence that could result from the new spatial pattern. (d) Propose one planning policy that could reduce one of the identified consequences and explain the mechanism by which it would work.",
    "The process is suburbanization/urban sprawl. Longer and more automobile-dependent trips can increase congestion and travel time; fragmented farmland and dispersed development convert open land and can raise infrastructure costs. At larger scales, increased vehicle travel and energy/resource demand can raise greenhouse-gas emissions and ecological pressure. A defensible policy could include transit-oriented development, urban growth boundaries, mixed-use zoning, or farmland protection, with an explanation linking the policy to shorter trips, denser land use, or reduced conversion.",
    "The task moves beyond naming local/global effects by requiring scale-specific causal chains and a policy mechanism.",
    ["1 point: identifies suburbanization/urban sprawl.", "1 point: explains one transportation consequence.", "1 point: explains one land-use or larger-scale environmental consequence.", "1 point: proposes a plausible policy and explains how it mitigates the problem."],
    ["Separate local spatial effects from larger-scale environmental effects.", "A policy earns credit only if the mechanism is explained."],
    "Section II · Free Response 1"
  ),

  "eur-ctx-a1": frq(
    "eur-ctx-a1",
    "Section I Part B · AP European History contextualization and causation.",
    "A historian argues that eighteenth-century 'enlightened absolutism' was less a rejection of absolutism than an attempt to make it more administratively effective. (a) Identify ONE seventeenth-century development that provides context for the growth of absolutist states. (b) Explain ONE Enlightenment idea that rulers could adopt without surrendering monarchical authority. (c) Explain ONE specific reform by an eighteenth-century ruler that supports the historian's argument. (d) Explain ONE limitation of using that reform as evidence that political authority had fundamentally become liberal or democratic.",
    "Possible context includes warfare and state centralization, fiscal-military institutions, or the decline of some representative bodies. Enlightenment-compatible reforms could include religious toleration, legal rationalization, education, or administrative efficiency. Evidence could include Joseph II's toleration and legal reforms, Frederick II's administrative/legal changes, or Catherine II's selective reform efforts. The limitation is that these rulers generally retained dynastic sovereignty, limited political participation, censored opposition, or reversed reforms when threatened; reform from above did not equal democratic government.",
    "The prompt requires contextualization, specific evidence, and evaluation of the limits of a historical label rather than a generic two-sentence context exercise.",
    ["1 point: accurate seventeenth-century context.", "1 point: relevant Enlightenment idea compatible with monarchy.", "1 point: specific ruler/reform used as evidence.", "1 point: explains why reform does not by itself establish liberal-democratic authority."],
    ["Distinguish administrative reform from popular sovereignty.", "Use a named ruler and reform."],
    "Section I Part B · Short-Answer Question",
    3,
    "euro-renaissance"
  ),

  "stats-inf-b1": frq(
    "stats-inf-b1",
    "Section II Part A · Inference. P-value, decision, effect size, and significance level.",
    "A manufacturer tests H0: μ=50 grams against Ha: μ≠50 grams for the mean fill mass of a packaging line. A random sample produces x̄=50.8 grams and p=0.030. (a) State the decision at α=0.05 and interpret the p-value in context. (b) State the decision at α=0.01. (c) Explain why the change in decision between the two significance levels does not mean the sample data changed. (d) Explain why statistical significance alone does not establish that a 0.8-gram departure is practically important for the manufacturer.",
    "(a) Reject H0 at 0.05. If μ really were 50 g and the model conditions held, the probability of obtaining a sample result at least as inconsistent with H0 as the observed one is 0.030. (b) Fail to reject H0 at 0.01 because 0.030>0.01. (c) The evidence/data and p-value are unchanged; only the decision threshold is stricter. (d) Practical importance depends on production tolerances, costs, regulatory limits, and consequences of a 0.8-g shift, not only on p<α.",
    "The item separates evidence strength, decision threshold, and practical importance—three concepts commonly conflated in significance testing.",
    ["1 point: correct α=.05 decision and contextual p-value interpretation.", "1 point: correct α=.01 decision.", "1 point: explains threshold changed but data did not.", "1 point: distinguishes statistical from practical significance."],
    ["A p-value is conditional on H0; it is not P(H0 is true).", "Compare 0.030 separately with each alpha."],
    "Section II Part A · Inference"
  ),

  "stats-inf-b2": frq(
    "stats-inf-b2",
    "Section II Part A · Inference. Type I/II errors, power, and quality-control consequences.",
    "A bottling company tests H0: μ=500 mL versus Ha: μ≠500 mL before deciding whether to stop a filling line for recalibration. (a) Describe a Type I error and a Type II error in this context. (b) Give one operational consequence of each error. (c) Suppose the true mean is 493 mL. Explain how increasing sample size, with α held fixed, generally affects the probability of a Type II error and the power of the test. (d) Explain one trade-off the company faces if it raises α from 0.01 to 0.05 while keeping the same test design.",
    "Type I: stop/recalibrate after rejecting H0 when the true mean is actually 500 mL, causing unnecessary downtime/cost. Type II: fail to stop when the true mean is not 500 mL, potentially shipping misfilled bottles. If μ=493, increasing n reduces standard error, making that departure easier to detect; Type II probability generally decreases and power increases. Raising α makes rejection easier, reducing Type II risk/increasing power but increasing the Type I error probability.",
    "The task ties abstract error definitions to decisions, then connects sample size and alpha to power trade-offs.",
    ["1 point: correct contextual Type I error/consequence.", "1 point: correct contextual Type II error/consequence.", "1 point: larger n → lower β and higher power for the stated alternative.", "1 point: explains alpha trade-off between Type I risk and power/Type II risk."],
    ["Translate each error into the actual stop/do-not-stop decision.", "Power is the probability of rejecting H0 when a specified alternative is true."],
    "Section II Part A · Inference"
  ),

  "psych-rm-b1": frq(
    "psych-rm-b1",
    "Section II · Psychology correlation, third variables, and causal design.",
    "A city dataset shows a strong positive correlation between weekly ice-cream sales and drowning incidents across 30 summer weeks. A journalist claims that buying ice cream increases drowning risk. (a) Explain why the correlation does not justify the causal claim. (b) Identify a plausible third variable and explain how it can produce the observed association. (c) Describe one ethically feasible research design that could test a narrower causal question related to heat and ice-cream purchasing without manipulating drowning risk. (d) Explain why a very large correlation coefficient would still not, by itself, eliminate the third-variable problem.",
    "Correlation alone does not establish direction or rule out confounding. Temperature is a plausible third variable: hotter weeks can increase swimming exposure and ice-cream purchases simultaneously. An ethical study could experimentally manipulate exposure to temperature-related marketing or controlled environmental temperature and measure purchasing intention/behavior, or use a natural experiment with strong controls; drowning must not be manipulated. Even a very strong r only describes association strength and does not identify causal structure.",
    "The rewrite tests causal reasoning, ethical design, and the misconception that strength of correlation proves causation.",
    ["1 point: rejects causal inference from correlation with a valid reason.", "1 point: identifies and explains a plausible confound.", "1 point: proposes an ethical design for a narrower causal question.", "1 point: explains why magnitude of r does not remove confounding."],
    ["Ask what variable changes both swimming exposure and ice-cream demand.", "Strength of association and causal identification are different."],
    "Section II · Article analysis / concept application"
  ),

  "psych-rm-b2": frq(
    "psych-rm-b2",
    "Section II · Psychology sampling, assignment, validity, and attrition.",
    "A researcher wants to test a new 20-minute memory-training routine. From a district of 8,000 students, 240 students are selected with a true simple random sample. The 240 are then randomly assigned to training or control groups. After four weeks, 25% of the training group but only 5% of the control group have dropped out. (a) Explain what the initial random sampling supports. (b) Explain what random assignment supports. (c) Explain why the unequal attrition threatens the causal interpretation even though assignment was initially random. (d) Describe one analysis or design practice that would help the researcher assess the attrition problem.",
    "Random sampling supports generalization from the sample to the district population, subject to nonresponse/implementation issues. Random assignment supports causal comparison by balancing preexisting characteristics in expectation. Differential attrition can break that comparability if the types of students remaining differ systematically by condition. The researcher should compare attrition rates and baseline characteristics of completers/dropouts by condition, report the loss, use appropriate intention-to-treat/sensitivity analyses where possible, and design follow-up procedures to reduce differential dropout.",
    "This item distinguishes external validity from internal validity and shows how post-assignment events can damage an initially strong experiment.",
    ["1 point: random sampling → population generalization.", "1 point: random assignment → causal/internal validity.", "1 point: explains differential attrition as a post-randomization threat.", "1 point: proposes a valid diagnostic or mitigation practice."],
    ["Sampling answers 'who enters?'; assignment answers 'who gets which condition?'.", "Randomization cannot prevent every later source of bias."],
    "Section II · Research-method FRQ"
  ),

  "micro-el-b1": frq(
    "micro-el-b1",
    "Section II · Microeconomics elasticity, total revenue, and consumer response.",
    "A streaming service estimates the price elasticity of demand for its monthly plan to be -2.4 around the current price. Management considers raising price by 5%, and assumes the elasticity estimate is locally valid. (a) Approximate the percentage change in quantity demanded. (b) Predict the direction of change in total revenue and justify using elasticity. (c) Explain why this calculation is only a local approximation rather than a guarantee for a very large price change. (d) Suppose instead demand were perfectly inelastic over the relevant range. State what would happen to quantity demanded and total revenue after the same price increase.",
    "(a) Quantity demanded would fall by about 12% because %ΔQ≈(-2.4)(5%)=-12%. (b) Total revenue would fall because demand is elastic: quantity falls proportionally more than price rises. (c) Elasticity can vary along a demand curve and with market conditions, so a local estimate need not apply to a much larger move. (d) With perfectly inelastic demand, quantity would not change and total revenue would rise in proportion to the price increase.",
    "The task integrates calculation, revenue logic, limitations of elasticity estimates, and a boundary case.",
    ["1 point: approximately 12% decrease in quantity.", "1 point: predicts lower total revenue with correct elastic-demand reasoning.", "1 point: explains local/variable elasticity limitation.", "1 point: correctly handles perfectly inelastic boundary case."],
    ["Use elasticity = %ΔQ/%ΔP.", "For elastic demand, quantity changes proportionally more than price."],
    "Section II · Short free response"
  ),

  "micro-el-b2": frq(
    "micro-el-b2",
    "Section II · Microeconomics midpoint elasticity and revenue comparison.",
    "A firm raises price from $4 to $6 and quantity demanded falls from 100 to 80 units per day. (a) Calculate the price elasticity of demand in absolute value using the midpoint method. (b) Classify demand over this range as elastic, unit elastic, or inelastic. (c) Calculate total revenue before and after the change and reconcile the revenue result with your elasticity classification. (d) Explain why computing percentage changes using only the initial values would make the elasticity depend on the direction in which the price change is described, whereas the midpoint method avoids that problem.",
    "Midpoint %ΔQ = -20/90 = -22.22%; midpoint %ΔP = 2/5 = 40%; |Ed|≈0.556, so demand is inelastic. TR rises from $400 to $480, consistent with inelastic demand because the percentage fall in quantity is smaller than the percentage rise in price. Initial-value percentage changes use different bases depending on direction; midpoint uses the same average base in either direction.",
    "The problem combines computation with conceptual interpretation and asks why the midpoint convention is symmetric.",
    ["1 point: correct midpoint percentage changes and |Ed|≈0.56.", "1 point: classifies demand as inelastic.", "1 point: TR $400→$480 and reconciles with elasticity.", "1 point: explains midpoint symmetry versus initial-value dependence."],
    ["Use average quantity 90 and average price 5.", "Check your elasticity conclusion against the actual revenue numbers."],
    "Section II · Long free response"
  ),

  "macro-fp-b1": frq(
    "macro-fp-b1",
    "Section II · Macroeconomics fiscal policy, multiplier, and automatic adjustment.",
    "An economy has a recessionary output gap of $150 billion and an MPC of 0.80. Policymakers consider a $20 billion increase in government purchases. Assume first a simple multiplier model with no crowding out. (a) Calculate the spending multiplier and the predicted GDP change. (b) Determine whether the policy closes, overcloses, or only partly closes the gap. (c) On an AD-AS graph with upward-sloping SRAS, explain why the actual real-output increase may be smaller than the simple multiplier calculation even before considering crowding out. (d) Identify one automatic stabilizer that would operate during the recession and explain its direction of effect on aggregate demand.",
    "Multiplier = 1/(1-.80)=5; predicted ΔY=$100B, so the $150B gap is only partly closed, leaving about $50B under the simple model. With upward-sloping SRAS, part of the increase in nominal spending raises the price level rather than translating one-for-one into real output; the simple Keynesian multiplier abstracts from that price response. Automatic stabilizers include progressive taxes or unemployment benefits: falling income reduces tax payments and/or raises transfers, supporting disposable income/consumption and cushioning the fall in AD.",
    "The question forces students to reconcile the simple multiplier with AD-AS and automatic stabilizers rather than treating the multiplier as a universal mechanical rule.",
    ["1 point: multiplier 5 and $100B GDP change.", "1 point: correctly states the gap is only partly closed with about $50B remaining.", "1 point: explains SRAS/price-level reason real output may rise less.", "1 point: identifies and explains a valid automatic stabilizer."],
    ["Separate the fixed-price multiplier model from the AD-AS model.", "Automatic stabilizers work without a new discretionary law each time."],
    "Section II · Long free response"
  ),

  "macro-fp-b2": frq(
    "macro-fp-b2",
    "Section II · Macroeconomics loanable funds, crowding out, and long-run implications.",
    "The federal government increases deficit spending by borrowing more in the domestic loanable-funds market. Assume private saving behavior and other factors are initially unchanged. (a) State the direction of the shift in demand for loanable funds and the resulting change in the real interest rate. (b) Explain how the interest-rate change affects private investment spending. (c) Explain how this channel can partially offset an expansionary fiscal policy's effect on aggregate demand in the short run. (d) Explain one plausible long-run consequence if persistently lower private investment reduces the growth of the capital stock.",
    "Government borrowing increases demand for loanable funds, raising the equilibrium real interest rate. Higher real rates make some private investment projects unprofitable, reducing investment. Because investment is a component of AD, the fall in private investment offsets part of the increase in government spending—crowding out. Persistently lower investment can slow capital accumulation, productivity growth, and potential output/LRAS growth.",
    "The item traces the full causal chain from fiscal borrowing through a financial market to short-run AD and long-run productive capacity.",
    ["1 point: demand for loanable funds right and real interest rate up.", "1 point: private investment down with mechanism.", "1 point: connects lower I to partial offset of AD expansion.", "1 point: valid long-run capital/productivity/potential-output consequence."],
    ["Do not jump directly from deficits to GDP; trace the loanable-funds channel.", "Investment affects both current AD and future productive capacity."],
    "Section II · Short free response"
  ),

  "ush-src-b1": frq(
    "ush-src-b1",
    "Section I Part B · AP US History audience and purpose.",
    "Two original practice sources concern a 1963 civil-rights campaign. Source A is a speech delivered to thousands of marchers: 'We have waited through promises; now our presence must make delay visible.' Source B is a private memo from an organizer to a presidential adviser: 'A public confrontation before the vote may cost the wavering senators we still need.' (a) Explain one way intended audience helps account for the difference in tone or strategy. (b) Identify one broader historical development that contextualizes both sources. (c) Explain how the two sources together reveal a tension within civil-rights strategy in the early 1960s.",
    "The mass speech uses mobilizing, morally urgent language because its audience includes supporters who must be energized and publicly visible. The private memo can emphasize tactical compromise and legislative arithmetic because it is aimed at an insider policymaker. Context may include sit-ins, Freedom Rides, Birmingham, the March on Washington, Kennedy/Johnson civil-rights initiatives, or congressional resistance. Together the sources show tension between public direct action that creates pressure and insider negotiation designed to secure legislation.",
    "The task requires using audience to explain source differences and synthesizing sources into a strategic historical tension.",
    ["1 point: explains audience effect on Source A/B.", "1 point: accurate early-1960s context.", "1 point: identifies public-pressure versus insider-legislative strategy tension.", "1 point: uses details from both sources to support the explanation."],
    ["Compare what each author needs the audience to do.", "Use both sources in the final tension claim."],
    "Section I Part B · Short-Answer Question"
  ),

  "ush-src-b2": frq(
    "ush-src-b2",
    "Section I Part B · AP US History source purpose and evidentiary limits.",
    "Original practice Source A is an 1858 plantation ledger listing purchases, cotton output, medical expenses, and payments to overseers. Source B is an 1858 abolitionist pamphlet describing family separation, coercion, and violence under slavery. (a) Explain how the purpose of each source shapes the kinds of information it emphasizes. (b) Identify one claim about slavery that the ledger could help investigate and one claim for which it would be inadequate by itself. (c) Explain why a historian would gain a stronger interpretation by using the two sources together rather than treating either one as a complete account.",
    "The ledger's administrative/accounting purpose emphasizes quantities, costs, output, and transactions, while the abolitionist pamphlet's persuasive purpose emphasizes moral harms and human experiences intended to mobilize opposition. The ledger can help investigate production, costs, material provisioning, or management patterns but is inadequate by itself for the lived experience of coercion or family separation. Used together, the sources provide different evidence types and allow historians to cross-check economic structure against human experience while accounting for each source's purpose and omissions.",
    "Historical reasoning requires both sourcing and evaluation of what a source can and cannot establish.",
    ["1 point: explains purpose-driven emphasis for both sources.", "1 point: valid claim the ledger can investigate.", "1 point: valid limitation of the ledger alone.", "1 point: explains evidentiary value of combining sources."],
    ["A source can be useful and limited at the same time.", "Tie the limitation to what the source was created to record."],
    "Section I Part B · Short-Answer Question"
  ),

  "wh-comp-b1": frq(
    "wh-comp-b1",
    "Section I Part B · AP World History comparative administration.",
    "Compare the Mongol Empire and the Mali Empire in the period 1200–1450 with respect to governing culturally diverse populations. (a) Identify one similarity in how rulers used local intermediaries, merchants, religious authorities, or regional elites. (b) Identify one difference in the relationship between political authority and religion. (c) Explain one historical factor that helps account for the difference. Use specific evidence in each part.",
    "A defensible similarity is pragmatic use of existing local elites or networks to govern large and diverse territories and facilitate taxation/trade. A difference is that Mali's ruling legitimacy was increasingly connected to Islam while also incorporating local traditions, whereas Mongol rulers often practiced broad religious pluralism across a multi-faith empire and did not require a single imperial religion. Factors include Mali's integration into trans-Saharan Islamic commercial/intellectual networks versus the Mongols' conquest of multiple established religious regions and the political usefulness of toleration.",
    "The task fixes the comparison category and requires evidence plus causal explanation rather than allowing vague empire summaries.",
    ["1 point: valid similarity with evidence.", "1 point: valid religion/political-authority difference with evidence.", "1 point: explains a factor producing the difference.", "1 point: maintains direct comparison rather than separate mini-essays."],
    ["Use the same category for both empires.", "Explain why the difference makes sense in each empire's historical setting."],
    "Section I Part B · Short-Answer Question"
  ),

  "wh-comp-b2": frq(
    "wh-comp-b2",
    "Section I Part B · AP World History continuity and change over time.",
    "Evaluate continuity and change in Afro-Eurasian trade networks from 1450 to 1750. (a) State a one-sentence thesis that identifies at least one significant continuity and one significant change. (b) Support the continuity with one specific piece of evidence. (c) Support the change with one specific piece of evidence. (d) Explain why the change did not completely eliminate the continuity you identified.",
    "One defensible thesis is that long-distance trade continued to depend on established commercial communities and luxury-demand networks, while the scale and geography of exchange changed substantially as European maritime empires linked Atlantic and Indian Ocean routes more directly. Continuity evidence can include enduring Indian Ocean merchant diasporas, caravan trade, or demand for spices/textiles. Change evidence can include Portuguese fortified trading posts, Dutch/English chartered companies, Manila galleons, or Atlantic silver flows. These changes layered new routes and political controls onto older commercial networks rather than instantly replacing them.",
    "CCOT requires simultaneously explaining persistence and transformation and how they coexist.",
    ["1 point: thesis includes both continuity and change.", "1 point: specific evidence for continuity.", "1 point: specific evidence for change.", "1 point: explains coexistence rather than treating change as total replacement."],
    ["A continuity must persist across the period, not just exist at one endpoint.", "Use the final part to connect—not separate—the continuity and change."],
    "Section I Part B · Short-Answer Question"
  ),

  "csp-d-b1": frq(
    "csp-d-b1",
    "Create performance task written-response practice · metadata privacy and re-identification.",
    "A transit agency publishes an 'anonymous' dataset in which each rider is represented by a random ID. For every trip, the dataset includes timestamp to the nearest minute, boarding stop, exit stop, and device type. Names and account numbers are removed. (a) Explain how a person's identity could still be inferred from repeated location-time patterns. (b) Identify one privacy-risk reduction technique and one analytic cost it introduces. (c) Explain why replacing names with random IDs is pseudonymization rather than a guarantee of anonymity. (d) Describe one additional data-use rule or access control that could reduce risk without deleting the dataset entirely.",
    "Repeated commute patterns can reveal likely home/work locations and be linked with outside knowledge to re-identify a rider. Risk can be reduced by coarsening times/locations, suppressing rare trips, aggregation, or carefully designed privacy methods, but these reduce precision or utility. Random IDs remove direct identifiers yet preserve linkable longitudinal patterns, so re-identification remains possible. Additional protections include controlled researcher access, purpose limits, minimum-cell-size rules, auditing, or secure query systems.",
    "The item tests the difference between removing direct identifiers and preventing linkage attacks, plus the privacy-utility trade-off.",
    ["1 point: plausible re-identification mechanism.", "1 point: valid mitigation plus analytic cost.", "1 point: explains why random IDs do not guarantee anonymity.", "1 point: valid governance/access safeguard."],
    ["Think about what a repeated home-to-work pattern reveals.", "A mitigation can reduce risk while also reducing data precision."],
    "Create performance task · written responses (practice)"
  ),

  "csp-d-b2": frq(
    "csp-d-b2",
    "Create performance task written-response practice · data cleaning, ambiguity, and validation.",
    "A school merges attendance files from three systems. One date column contains values such as `03/04/2026`, `2026-03-04`, and `4 Mar 2026`; some rows also use `03/04/2026` to mean March 4 while another system uses the same string to mean April 3. (a) Explain why merely changing display formatting cannot safely clean the data. (b) Describe a robust two-stage cleaning procedure that addresses both parsing and ambiguous records. (c) Explain one validation check that could detect remaining errors after conversion. (d) Explain why keeping the original raw value alongside the standardized value can improve auditability.",
    "Display formatting does not resolve semantic ambiguity about month/day ordering. A robust process first identifies source system/locale or uses unambiguous metadata to parse known formats, then flags truly ambiguous strings for source-based resolution or manual review instead of guessing. Validation can check allowed date ranges, impossible dates, sequence consistency, source-specific patterns, or compare a sample against original records. Retaining raw values preserves provenance and allows investigators to trace or reverse a questionable transformation.",
    "The rewrite turns a trivial 'standardize the format' exercise into a realistic data-quality problem where silent guessing is itself an error.",
    ["1 point: explains why formatting alone cannot resolve ambiguous meaning.", "1 point: robust parse + ambiguity-handling procedure.", "1 point: valid post-cleaning validation check.", "1 point: explains provenance/audit benefit of retaining raw values."],
    ["Do not guess whether 03/04 means March 4 or April 3.", "Cleaning should preserve a path back to the original data."],
    "Create performance task · written responses (practice)"
  ),

  "phys2-w-b1": frq(
    "phys2-w-b1",
    "Section II · AP Physics 2 standing waves and boundary conditions.",
    "A string of length L is fixed at both ends and driven at one of its resonant frequencies. A snapshot shows four antinodes along the string. (a) Identify the harmonic number and write the wavelength in terms of L. (b) If wave speed on the string is v, write the resonant frequency in terms of v and L. (c) The tension is then increased by a factor of 4 while linear mass density and length remain constant. Determine the factor by which this mode's resonant frequency changes. (d) Explain why the endpoints remain nodes after the tension change even though the resonant frequencies change.",
    "Four antinodes correspond to the fourth harmonic, n=4. For a string fixed at both ends, L=nλ/2, so λ=2L/4=L/2. Thus f=v/λ=2v/L. Wave speed v=sqrt(T/μ); quadrupling T doubles v and therefore doubles every resonant frequency for fixed L and mode number. The fixed endpoints are geometric boundary conditions requiring zero displacement, independent of the particular wave speed.",
    "The question links standing-wave geometry, harmonic formulas, wave-speed dependence on tension, and physical boundary conditions.",
    ["1 point: n=4 and λ=L/2.", "1 point: f=2v/L.", "1 point: frequency doubles when tension quadruples.", "1 point: explains fixed endpoints remain displacement nodes due to boundary conditions."],
    ["Count antinodes to identify n.", "Wave speed on a string scales as square root of tension."],
    "Section II · Qualitative/Quantitative Translation"
  ),

  "phys2-w-b2": frq(
    "phys2-w-b2",
    "Section II · AP Physics 2 standing waves, harmonics, and inverse inference.",
    "A string of length 0.80 m is fixed at both ends. Its linear mass density is 0.010 kg/m, and its tension is adjusted until the fundamental frequency is 200 Hz. (a) Calculate the wave speed. (b) Calculate the required tension. (c) Find the frequencies of the second and third harmonics. (d) A student measures resonances at 200, 400, 600, and 805 Hz and claims the 805-Hz peak is the fourth harmonic. Evaluate the claim quantitatively and give one experimental reason a measured peak might differ slightly from the ideal model.",
    "For the fundamental, λ1=2L=1.60 m, so v=fλ=320 m/s. T=μv²=0.010(320²)=1,024 N. Ideal harmonics are integer multiples: f2=400 Hz, f3=600 Hz, f4=800 Hz. The 805-Hz peak differs from ideal by 5 Hz, about 0.625%, so it is reasonably close to the predicted fourth harmonic depending on experimental uncertainty. Differences can arise from imperfect length determination, tension variation, nonideal endpoints, sensor resolution, or string stiffness.",
    "Students must infer mechanical parameters from resonance, predict harmonics, and evaluate a measurement rather than only apply f=v/2L once.",
    ["1 point: v=320 m/s.", "1 point: T=1.024×10^3 N.", "1 point: f2=400 Hz and f3=600 Hz (with ideal f4=800 Hz used in evaluation).", "1 point: quantitative evaluation of 805 Hz plus plausible experimental explanation."],
    ["For the fundamental, wavelength is twice the string length.", "Compare 805 Hz to the ideal integer-multiple prediction."],
    "Section II · Mathematical Routines"
  ),

  "phycm-r-b1": frq(
    "phycm-r-b1",
    "Section II · AP Physics C Mechanics angular momentum and rotational energy.",
    "A student on a low-friction rotating platform has total moment of inertia 4.0 kg·m² and rotates at 1.5 rad/s. By pulling two masses inward, the total moment of inertia decreases to 2.5 kg·m². External torque about the axis is negligible. (a) Calculate the final angular speed. (b) Calculate the initial and final rotational kinetic energies. (c) Explain why rotational kinetic energy changes even though angular momentum is conserved. (d) Identify the source of the energy change.",
    "Angular momentum is conserved: Iiωi=Ifωf, so ωf=(4.0×1.5)/2.5=2.4 rad/s. Ki=0.5(4.0)(1.5²)=4.5 J. Kf=0.5(2.5)(2.4²)=7.2 J. Angular momentum conservation does not require kinetic-energy conservation when internal forces do work while the configuration changes. The student does positive internal work pulling the masses inward, converting biochemical/internal energy into rotational kinetic energy.",
    "The item targets a common misconception: conservation of angular momentum does not imply conservation of rotational kinetic energy.",
    ["1 point: ωf=2.4 rad/s.", "1 point: Ki=4.5 J and Kf=7.2 J.", "1 point: explains why angular momentum conservation does not imply K conservation.", "1 point: identifies internal/biochemical work as energy source."],
    ["Conserve angular momentum first.", "Then calculate energy separately; do not assume it is conserved."],
    "Section II · Free Response 2"
  ),

  "phycm-r-b2": frq(
    "phycm-r-b2",
    "Section II · AP Physics C Mechanics rolling without slipping and energy.",
    "A uniform solid disk of mass M and radius R starts from rest and rolls without slipping down a ramp through a vertical height h. (a) Derive the center-of-mass speed at the bottom in terms of g and h. (b) Compare this speed with the speed of a frictionless block sliding from the same height and explain the difference. (c) State the relationship between v_cm and angular speed ω. (d) Suppose the coefficient of static friction is insufficient and the disk begins to slip. Explain why the simple rolling-energy derivation no longer applies unchanged.",
    "For rolling without slipping, Mgh=(1/2)Mv²+(1/2)Iω² with I=(1/2)MR² and ω=v/R. Thus Mgh=(1/2+1/4)Mv²=(3/4)Mv², giving v=sqrt(4gh/3). A frictionless sliding block has v=sqrt(2gh), which is larger because none of its energy is rotational. Rolling constraint: v_cm=Rω. If slipping occurs, that constraint fails and kinetic friction can dissipate mechanical energy, so the previous substitution and conservation form cannot be used unchanged.",
    "The problem combines derivation, comparison, the rolling constraint, and a boundary-condition failure case.",
    ["1 point: derives v=sqrt(4gh/3).", "1 point: correctly compares with sqrt(2gh) and explains rotational-energy sharing.", "1 point: states v=Rω.", "1 point: explains why slipping breaks the constraint and may introduce dissipation."],
    ["Use both translational and rotational kinetic energy.", "Ask which assumption fails when the contact point is no longer instantaneously at rest."],
    "Section II · Free Response 3"
  ),

  "phycem-c-b1": frq(
    "phycem-c-b1",
    "Section II · AP Physics C E&M capacitor, dielectric, and energy accounting.",
    "A parallel-plate capacitor has capacitance C0, is charged by a battery to potential difference V0, and is then disconnected from the battery. A dielectric with constant κ completely fills the gap. (a) Determine the new capacitance, charge, and potential difference in terms of C0, V0, and κ. (b) Determine the ratio Uf/Ui of stored electric energy. (c) State whether the dielectric is pulled into or pushed out of the capacitor and use an energy argument to justify. (d) Contrast the energy result with the case in which the battery remains connected during insertion.",
    "Disconnected: C=κC0, Q=C0V0 remains fixed, and V=Q/C=V0/κ. Ui=(1/2)C0V0² and Uf=Q²/(2κC0)=Ui/κ, so energy decreases. The dielectric is pulled into the capacitor; increasing insertion lowers electric energy at fixed charge, with the decrease appearing as mechanical work/kinetic energy (and ultimately other forms). If the battery remains connected, V stays V0, C increases to κC0, Q increases, and capacitor energy (1/2)CV² increases by factor κ; the battery supplies energy.",
    "The task forces students to distinguish fixed-Q and fixed-V boundary conditions and account for where energy goes.",
    ["1 point: correct disconnected C, Q, and V relations.", "1 point: Uf/Ui=1/κ.", "1 point: correct force direction with fixed-Q energy argument.", "1 point: contrasts fixed-V connected-battery case and identifies battery energy transfer."],
    ["After disconnection, charge cannot flow to or from the plates.", "Choose the energy formula whose controlled variable is easiest to use."],
    "Section II · Free Response 3"
  ),

  "phycem-c-b2": frq(
    "phycem-c-b2",
    "Section II · AP Physics C E&M parallel-plate capacitor scaling.",
    "A vacuum parallel-plate capacitor of plate area A and separation d is connected to an ideal battery of voltage V. While the battery remains connected, the plate separation is slowly doubled to 2d. Neglect fringing. (a) Determine the factor change in capacitance. (b) Determine the factor change in charge on the plates. (c) Determine the factor change in electric-field magnitude between the plates. (d) Determine the factor change in stored capacitor energy. (e) Explain qualitatively why an external agent must do positive or negative mechanical work during the separation process.",
    "C=ε0A/d, so doubling d halves C. With ideal battery connected, V is fixed, so Q=CV halves. E=V/d also halves. U=(1/2)CV² therefore halves. The plates attract; an external agent separating them slowly must do positive mechanical work against the electric attraction. Energy accounting also involves energy transferred to/from the battery as charge flows while C changes.",
    "The question tests consistent scaling under a fixed-voltage constraint and qualitative force/energy accounting.",
    ["1 point: C halves and Q halves.", "1 point: E halves.", "1 point: U halves.", "1 point: explains external positive work against attraction and notes battery participates in energy transfer."],
    ["The battery fixes V, not Q.", "Use both C=ε0A/d and E=V/d."],
    "Section II · Free Response 2"
  ),

  "hg-pat-b1": frq(
    "hg-pat-b1",
    "Section II · AP Human Geography diffusion processes and barriers.",
    "A language spoken by migrants appears first in several distant metropolitan neighborhoods. Ten years later, locally born residents in some of those cities adopt selected words through schools, music, and social media, while surrounding rural areas show little change. (a) Identify the diffusion process that best explains the initial appearance of the language in distant cities. (b) Identify the diffusion process that best explains adoption among locally born residents. (c) Explain one reason the pattern may show hierarchical diffusion in addition to contagious diffusion. (d) Explain one cultural or spatial barrier that could slow diffusion into nearby rural areas.",
    "Initial appearance in distant cities through migrants is relocation diffusion. Later adoption among nonmigrants is expansion diffusion; it can include contagious spread through interaction. If adoption is especially rapid through influential metropolitan schools, artists, or media nodes before smaller places, hierarchical diffusion is also present. Rural diffusion may be slowed by weaker network connectivity, lower migrant concentration, language institutions, social boundaries, or physical/digital access differences.",
    "The task requires distinguishing multiple diffusion mechanisms within one evolving spatial pattern rather than supplying isolated examples.",
    ["1 point: relocation diffusion for initial migrant-linked spread.", "1 point: expansion/contagious diffusion for local adoption.", "1 point: valid hierarchical mechanism.", "1 point: plausible barrier with spatial/cultural explanation."],
    ["Ask whether the trait moves with people or spreads to new adopters.", "Large influential nodes can create hierarchical diffusion."],
    "Section II · Free Response 3"
  ),

  "hg-pat-b2": frq(
    "hg-pat-b2",
    "Section II · AP Human Geography site, situation, and transport-network evolution.",
    "A city was founded at a deep natural harbor where a navigable river meets the sea. A century later it becomes a major air-cargo hub after highways, rail lines, and an international airport connect it to inland manufacturing regions and overseas markets. (a) Identify two SITE characteristics that helped the original settlement. (b) Identify two SITUATION characteristics that help explain its later growth as a logistics hub. (c) Explain how a technological change in transportation can make situation more important even when the physical site remains unchanged. (d) Explain one reason a once-advantageous site characteristic could become less important over time.",
    "Site characteristics include the deep harbor, navigable river mouth, relatively favorable terrain, or local physical resources. Situation characteristics include relative location to inland manufacturing, major highways/rail, global shipping lanes, and international air networks. Containerization, aviation, highways, or rail integration can increase the value of network position even though physical terrain is unchanged. A harbor advantage can diminish if trade shifts to air freight, ships outgrow port depth, competing hubs gain better intermodal links, or engineering makes alternative sites viable.",
    "The item separates absolute physical characteristics from relational network position and asks students to reason through change over time.",
    ["1 point: two valid site characteristics.", "1 point: two valid situation characteristics.", "1 point: explains technology-network mechanism.", "1 point: explains why a site advantage can lose relative importance."],
    ["Site = characteristics of the place itself; situation = relative position and connections.", "Think about how transport technology changes what counts as accessible."],
    "Section II · Free Response 3"
  ),

  "eur-ctx-b1": frq(
    "eur-ctx-b1",
    "Section II · AP European History argumentation about industrialization and living standards.",
    "Evaluate the extent to which industrialization improved living standards for European workers from 1750 to 1900. Your response must (a) state a defensible thesis that addresses change over time rather than giving a simple yes/no answer, (b) use at least three specific pieces of evidence from more than one part of the period, (c) explain one factor that produced differences among regions or social groups, and (d) explain one way a different measure of 'living standards' could lead to a different evaluation.",
    "A defensible argument may conclude that early industrialization often worsened urban crowding, hours, workplace risk, and insecurity for many workers, while later nineteenth-century gains in real wages, sanitation, public health, labor organization, and regulation improved several material indicators—unevenly across regions and occupations. Evidence may include factory discipline, urban disease, child labor, Chartism/trade unions, public-health acts, rising mass consumption, housing/sanitation reform, and later wage gains. Measures matter: income, life expectancy, work hours, housing, autonomy, and job security can move differently.",
    "The task requires temporal nuance, multiple measures, and variation, correcting a shallow binary thesis exercise.",
    ["1 point: nuanced thesis with change over time.", "1 point: at least three specific accurate pieces of evidence across the period.", "1 point: explains regional/social-group variation.", "1 point: evaluates how a different living-standard measure could alter the conclusion."],
    ["Separate early industrialization from later nineteenth-century developments.", "Define what you mean by living standards rather than treating it as one variable."],
    "Section II · Long Essay Question"
  ),

  "eur-ctx-b2": frq(
    "eur-ctx-b2",
    "Section I Part B · AP European History continuity and change in gender roles.",
    "Evaluate continuity and change in women's economic and political roles in Europe from 1815 to 1914. (a) Identify one important continuity and support it with a specific example. (b) Identify one important change and support it with a specific example. (c) Explain one industrial, ideological, or political development that helped produce the change. (d) Explain why the change did not affect all women in the same way.",
    "Continuities included legal/political exclusion in many states and persistent gendered expectations around domestic work and family authority. Changes included expanded wage labor, growth of women's education and professions, organized suffrage movements, socialist/feminist activism, and some legal reforms. Industrialization, liberal ideas, mass politics, urbanization, and reform movements helped create new opportunities and claims. Effects varied by class, region, marital status, occupation, and national law; middle-class professional gains or suffrage organizing did not map directly onto rural or working-class women's experiences.",
    "The rewrite requires evidence-based CCOT and attention to uneven historical change rather than merely naming one continuity and one change.",
    ["1 point: accurate continuity plus evidence.", "1 point: accurate change plus evidence.", "1 point: explains a causal development.", "1 point: explains uneven effects across groups/regions."],
    ["Use concrete examples, not only broad labels like 'more rights'.", "Historical change can be real without being universal."],
    "Section I Part B · Short-Answer Question"
  )
};
