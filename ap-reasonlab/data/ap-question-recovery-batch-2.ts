import type { QuestionnaireItem } from "@/lib/types";

/**
 * Audited AP Statistics recoveries.
 * Each entry either has a directly derivable key from the original data or is rewritten into a
 * complete original item with an independently checked reference answer and scoring criteria.
 */
export const recoveredApItemsBatch2: Record<string, QuestionnaireItem> = {
  "stats-ed-1": {
    id: "stats-ed-1",
    format: "frq_half",
    conceptId: "stats-one-var",
    conceptIntro: "Section II · Exploring data. Five-number summary and the 1.5×IQR rule.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "A random sample of 40 campus-food delivery times (minutes) has five-number summary Min = 8, Q1 = 14, Median = 18, Q3 = 25, Max = 52. (a) Calculate the IQR and the lower and upper 1.5×IQR fences. (b) Determine whether 52 minutes is a potential outlier and justify your answer. (c) Explain why identifying 52 as a potential outlier does not by itself justify deleting that observation from the dataset.",
    answerKey: "(a) IQR = 25 - 14 = 11 minutes. Lower fence = 14 - 1.5(11) = -2.5 minutes; upper fence = 25 + 1.5(11) = 41.5 minutes. (b) Yes. Because 52 > 41.5, the 52-minute delivery is a potential high outlier. (c) The rule flags unusual values; it does not establish that the observation is erroneous. The value should be investigated in context before any removal decision.",
    rationale: "The 1.5×IQR rule uses resistant quartiles to identify unusually distant observations. A flagged value may still be a genuine observation, so statistical unusualness and data error are different claims.",
    scoringGuide: ["1 point: IQR = 11.", "1 point: fences are -2.5 and 41.5 minutes.", "1 point: correctly identifies 52 as a potential high outlier using the upper fence.", "1 point: explains that a potential outlier is not automatically an error and should be investigated before removal."],
    hints: ["Compute IQR = Q3 - Q1 before applying 1.5×IQR.", "Compare 52 with the upper fence."],
    examSection: "Section II · Free Response"
  },

  "stats-ed-2": {
    id: "stats-ed-2",
    format: "frq_half",
    conceptId: "stats-one-var",
    conceptIntro: "Section II · Exploring data. Resistant versus nonresistant measures under skew.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "Commute times for 200 workers are strongly skewed right because a few workers experience very long delays. Method A identifies high outliers using the 1.5×IQR rule. Method B labels a value unusual when it is more than 2 sample standard deviations above the sample mean. Explain why Method A can flag high values that Method B does not flag for this distribution.",
    answerKey: "The long right tail pulls the sample mean upward and also increases the sample standard deviation. Therefore the cutoff mean + 2s can be pushed far to the right. Quartiles and the IQR are resistant to a few extreme high values, so Q3 + 1.5(IQR) is affected much less by the long tail. As a result, some high commute times may exceed the IQR fence while remaining below mean + 2s.",
    rationale: "The key comparison is resistance. Mean and standard deviation are sensitive to extreme values; median/quartiles/IQR are much less sensitive.",
    scoringGuide: ["1 point: states that the right tail pulls the mean upward.", "1 point: states that extreme values inflate the standard deviation.", "1 point: identifies quartiles/IQR as resistant.", "1 point: connects those effects to the IQR cutoff potentially being lower than the mean-plus-2SD cutoff."],
    hints: ["Ask which summaries are resistant to extreme values."],
    examSection: "Section II · Free Response"
  },

  "stats-ed-3": {
    id: "stats-ed-3",
    format: "frq_half",
    conceptId: "stats-two-var",
    conceptIntro: "Section II · Exploring data. Interpreting slope and r² in context.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "For 15 hiking trails, a biologist fits the least-squares regression line ŷ = 4.2 + 0.85x, where x is trail length in kilometers and ŷ is predicted trail rating on a 1–10 scale. The model has r² = 0.64. (a) Interpret the slope in context. (b) Interpret r² in context. (c) Explain why neither interpretation establishes that making a trail longer would cause its rating to increase.",
    answerKey: "(a) For each additional 1 km of trail length, the model predicts an increase of about 0.85 rating point, on average. (b) About 64% of the variation in trail ratings among these trails is explained by the linear relationship between trail length and rating. (c) Regression describes association. Without random assignment of trail length or an appropriate causal design, lurking variables can explain some or all of the association.",
    rationale: "AP Statistics interpretations must name the variables, units, and whether the statement concerns prediction or explained variation. Association alone does not imply causation.",
    scoringGuide: ["1 point: correct contextual slope interpretation with predicted change and units.", "1 point: correct contextual r² interpretation as percent of variation in the response explained by the linear model.", "1 point: rejects a causal conclusion from regression alone.", "1 point: gives a valid design/lurking-variable reason."],
    hints: ["Slope is predicted change in y for a one-unit increase in x.", "r² concerns variation in the response variable."],
    examSection: "Section II · Free Response"
  },

  "stats-ed-4": {
    id: "stats-ed-4",
    format: "frq_half",
    conceptId: "stats-two-var",
    conceptIntro: "Section II · Exploring data. Residual = observed - predicted.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "A least-squares regression model predicting wolf weight y (kg) from body length x (m) is ŷ = -16.5 + 35.0x. One wolf has length 1.3 m and residual -8.2 kg. (a) Calculate the predicted weight for this wolf. (b) Calculate the wolf's actual observed weight. (c) Interpret the negative residual in context.",
    answerKey: "(a) ŷ = -16.5 + 35(1.3) = 29.0 kg. (b) residual = y - ŷ, so y = 29.0 + (-8.2) = 20.8 kg. (c) The wolf weighs 8.2 kg less than the regression model predicts for a 1.3 m wolf.",
    rationale: "A residual is observed minus predicted, so a negative residual means the observed response lies below the regression line.",
    scoringGuide: ["1 point: predicted weight 29.0 kg.", "1 point: uses residual = observed - predicted correctly.", "1 point: actual weight 20.8 kg.", "1 point: interprets the negative residual in context."],
    hints: ["Compute the fitted value first.", "Use y = ŷ + residual."],
    examSection: "Section II · Free Response"
  },

  "stats-ed-5": {
    id: "stats-ed-5",
    format: "mcq",
    conceptId: "stats-one-var",
    conceptIntro: "Section I · Multiple Choice. Comparing what histograms and boxplots reveal.",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    difficultyTier: 2,
    prompt: "A residence hall records the floor area of every student room. A histogram of the room areas has two distinct clusters, one centered near 14 m² and another near 22 m², with relatively few rooms between the clusters. A standard boxplot is made from the same data. Which feature of the distribution can be identified from the histogram but cannot be determined from the boxplot alone?",
    choices: ["A) The approximate median room area", "B) The presence of two distinct modes", "C) The approximate maximum room area", "D) The interquartile range"],
    mcqAnswer: 1,
    answerKey: "B) The presence of two distinct modes",
    rationale: "A boxplot shows the median, quartiles, spread, and potential extreme values, but not detailed distribution shape. Two separated peaks are visible in the histogram but cannot be inferred from a standard boxplot alone.",
    hints: ["Ask which display preserves distribution shape rather than only five-number-summary information."],
    examSection: "Section I · Multiple Choice (4 options)"
  },

  "stats-cd-6": {
    id: "stats-cd-6",
    format: "mcq",
    conceptId: "stats-experiments",
    conceptIntro: "Section I · Multiple Choice. Scope of conclusions from a randomized experiment.",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    difficultyTier: 2,
    prompt: "Participants in a randomized experiment are assigned to one of two treatments: a new drug plus two therapy sessions, or a placebo plus two therapy sessions. The drug group has a statistically significantly better mean outcome. A researcher then claims that the drug plus two sessions is just as effective as eight therapy sessions without the drug. Which statement best identifies the flaw in the researcher's conclusion?",
    choices: ["A) A statistically significant result can never come from a study with only two treatment groups.", "B) The experiment did not include an eight-session, no-drug treatment group, so that comparison is unsupported.", "C) Statistical significance proves that the two treatments in the experiment have exactly the same effect.", "D) A placebo group prevents researchers from making any causal conclusion."],
    mcqAnswer: 1,
    answerKey: "B) The experiment did not include an eight-session, no-drug treatment group, so that comparison is unsupported.",
    rationale: "Random assignment supports a causal comparison between the treatments actually assigned. It does not provide evidence about a third treatment that was never included in the experiment.",
    hints: ["Match the conclusion to the treatment groups that were actually compared."],
    examSection: "Section I · Multiple Choice (4 options)"
  },

  "stats-pr-1": {
    id: "stats-pr-1",
    format: "frq_half",
    conceptId: "stats-probability",
    conceptIntro: "Section II · Probability. Joint, union, conditional probability, and independence.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "A survey reports P(Never) = 0.12, P(Woman) = 0.55, and P(Never and Woman) = 0.07 for a behavior-frequency question. One respondent is selected at random. (a) Find P(Never or Woman). (b) Find P(Never | Woman). (c) Are the events Never and Woman independent? Justify numerically.",
    answerKey: "(a) 0.12 + 0.55 - 0.07 = 0.60. (b) 0.07/0.55 ≈ 0.1273. (c) No. Independence would require P(Never | Woman) = P(Never). Because 0.1273 ≠ 0.12 (equivalently 0.07 ≠ 0.12×0.55 = 0.066), the events are not independent.",
    rationale: "Union probability subtracts the overlap once. Independence can be checked by comparing a conditional probability with its marginal probability or by checking the product rule.",
    scoringGuide: ["1 point: union probability 0.60.", "1 point: conditional probability about 0.127.", "1 point: states the correct independence criterion.", "1 point: concludes not independent using the numerical comparison."],
    hints: ["Use P(A∪B)=P(A)+P(B)-P(A∩B).", "For independence, compare P(A|B) with P(A)."],
    examSection: "Section II · Free Response"
  },

  "stats-pr-2": {
    id: "stats-pr-2",
    format: "frq_half",
    conceptId: "stats-random-vars",
    conceptIntro: "Section II · Probability. Independent repeated trials.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "A rocket igniter fails on each independent test with probability 0.12. Engineers test igniters until the first failure or until 25 successful tests have occurred. (a) Find the probability that the first 20 tests all succeed. (b) Given that the first 20 tests succeeded, find the probability that the first failure occurs on test 21 or test 22.",
    answerKey: "Let success probability be 0.88. (a) P(first 20 succeed) = 0.88^20 ≈ 0.0776. (b) Conditional on the first 20 successes, the desired probability is P(fail on 21) + P(success on 21 and fail on 22) = 0.12 + 0.88(0.12) = 0.2256.",
    rationale: "Independence means the future failure probability remains 0.12 after the first 20 successes. The two cases in part (b) are mutually exclusive.",
    scoringGuide: ["1 point: identifies success probability 0.88.", "1 point: computes 0.88^20 ≈ 0.0776.", "1 point: sets up mutually exclusive cases for tests 21 and 22.", "1 point: computes 0.2256."],
    hints: ["After 20 successes, independence resets the same 0.12 failure probability for the next test."],
    examSection: "Section II · Free Response"
  },

  "stats-pr-3": {
    id: "stats-pr-3",
    format: "frq_half",
    conceptId: "stats-probability",
    conceptIntro: "Section II · Probability and simulation design. Sampling without replacement.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "A club has 7 juniors and 4 seniors. Three members are selected uniformly at random without replacement, and all three selected members are seniors. (a) Find the probability of this result. (b) Explain whether this outcome by itself gives strong evidence that the selection was not random. (c) A proposed simulation rolls three fair six-sided dice independently and calls 1–4 'junior' and 5–6 'senior.' Explain one important way this simulation fails to model the actual selection process.",
    answerKey: "(a) C(4,3)/C(11,3) = 4/165 ≈ 0.0242. (b) The outcome is fairly unusual under random selection (about 2.4%), so it gives some evidence against the random-selection claim, although the context and chosen significance standard matter. (c) The real sampling is without replacement, so probabilities change after each selected member; independent die rolls model sampling with replacement and keep P(senior)=1/3 each draw.",
    rationale: "The exact probability comes from sampling combinations without replacement. A faithful simulation must reproduce both the category proportions and the dependence created by sampling without replacement.",
    scoringGuide: ["1 point: probability 4/165 ≈ 0.0242.", "1 point: recognizes the outcome as unusual under random selection without claiming logical impossibility.", "1 point: identifies without-replacement dependence in the real process.", "1 point: explains why independent die rolls fail to reproduce that dependence."],
    hints: ["Use combinations or sequential probabilities without replacement."],
    examSection: "Section II · Free Response"
  },

  "stats-pr-4": {
    id: "stats-pr-4",
    format: "frq_half",
    conceptId: "stats-random-vars",
    conceptIntro: "Section II · Probability. Normal probability feeding a Binomial model.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 3,
    prompt: "Bottle fill volume A is approximately Normal with mean 0.60 L and standard deviation 0.04 L. A bottle is underfilled if A < 0.50 L. A box contains 10 independently filled bottles, and a crate is rejected if a randomly chosen box contains at least 2 underfilled bottles. (a) Find the probability that one bottle is underfilled. (b) Define a random variable X for the number of underfilled bottles in a box and state its distribution. (c) Find the probability that the crate is rejected.",
    answerKey: "(a) z = (0.50-0.60)/0.04 = -2.5, so p = P(Z<-2.5) ≈ 0.00621. (b) X = number of underfilled bottles among 10 independent bottles; X ~ Binomial(n=10, p≈0.00621). (c) P(X≥2)=1-P(X=0)-P(X=1)≈0.00168.",
    rationale: "The Normal model supplies the single-bottle underfill probability. Independent repeated bottle outcomes with constant p then justify the Binomial count model.",
    scoringGuide: ["1 point: z=-2.5 and underfill probability about 0.0062.", "1 point: defines X in context.", "1 point: states Binomial(10, 0.00621) with independence/constant-p justification.", "1 point: computes P(X≥2) ≈ 0.00168 using the complement."],
    hints: ["First compute a single-bottle probability, then use it as p in a Binomial model."],
    examSection: "Section II · Free Response"
  },

  "stats-pr-5": {
    id: "stats-pr-5",
    format: "frq_half",
    conceptId: "stats-random-vars",
    conceptIntro: "Section II · Probability. Binomial probability and expected value.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "Each week, one of 250 employees is selected uniformly at random for a gift card. Weekly selections are independent, and the same employee may be selected more than once. For a particular employee, let X be the number of gift cards received during 52 weeks. (a) State the distribution of X. (b) Find P(X≥1). (c) Find E(X) and interpret it. (d) If this employee receives no gift cards during the year, explain whether that result is unusually unlikely under the stated random process.",
    answerKey: "(a) X ~ Binomial(n=52, p=1/250). (b) P(X≥1)=1-(249/250)^52≈0.1881. (c) E(X)=np=52/250=0.208 card per employee-year; over many such years, the long-run average number received by this employee would be about 0.208 per year. (d) No. P(X=0)=(249/250)^52≈0.8119, so zero cards is actually the most common kind of outcome, not unusual evidence against randomness.",
    rationale: "A small weekly success probability over only 52 independent weeks yields a high probability of zero selections even though the process is perfectly random.",
    scoringGuide: ["1 point: Binomial(52, 1/250).", "1 point: P(X≥1)≈0.188.", "1 point: E(X)=0.208 with a long-run interpretation.", "1 point: uses P(X=0)≈0.812 to explain why zero is not unusual."],
    hints: ["Use the complement for at least one selection."],
    examSection: "Section II · Free Response"
  },

  "stats-pr-6": {
    id: "stats-pr-6",
    format: "frq_half",
    conceptId: "stats-random-vars",
    conceptIntro: "Section II · Probability. Normal percentile and expected value.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "Phone battery life is approximately Normal with mean 28 months and standard deviation 7 months. A company sells a $40 warranty. If the battery fails before 24 months, the company's net gain on that warranty is -$160; otherwise its net gain is $40. (a) Estimate the 30th percentile of battery life. (b) Find the probability of a warranty claim. (c) Find the company's expected net gain per warranty.",
    answerKey: "(a) The 30th-percentile z-score is about -0.524, so x = 28 + (-0.524)(7) ≈ 24.3 months. (b) z=(24-28)/7≈-0.571, giving P(claim)≈0.2839. (c) E(gain)=40(1-0.2839)+(-160)(0.2839)≈-$16.77 per warranty.",
    rationale: "Percentiles invert the Normal model; the expected-value calculation weights each possible company outcome by its probability.",
    scoringGuide: ["1 point: 30th percentile about 24.3 months.", "1 point: claim probability about 0.284.", "1 point: correct expected-value setup using +40 and -160 outcomes.", "1 point: expected net gain about -$16.77."],
    hints: ["For a percentile, use x=μ+zσ.", "Expected value is a probability-weighted average of the two company outcomes."],
    examSection: "Section II · Free Response"
  },

  "stats-inf-1": {
    id: "stats-inf-1",
    format: "frq_half",
    conceptId: "stats-ci-prop-mean",
    conceptIntro: "Section II · Inference. One-proportion z interval.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "In a random sample of 800 U.S. teens, 496 report using noise-cancelling headphones daily. (a) Check the large-count condition and construct a 95% confidence interval for the population proportion p. (b) Interpret the interval in context. (c) Does the interval provide convincing evidence that p differs from 0.50? Explain.",
    answerKey: "p̂=496/800=0.62. Large counts: np̂=496 and n(1-p̂)=304, both at least 10. SE=sqrt(0.62(0.38)/800)≈0.01716. A 95% CI is 0.62±1.96(0.01716)≈(0.586,0.654). We are 95% confident that the true proportion of U.S. teens who use noise-cancelling headphones daily is between about 58.6% and 65.4%. Because 0.50 is outside the interval, the data provide convincing evidence that p differs from 0.50.",
    rationale: "A one-proportion z interval uses the sample proportion in its standard error. A null value outside a corresponding two-sided 95% interval is inconsistent with the data at the 5% level.",
    scoringGuide: ["1 point: checks large counts correctly.", "1 point: interval approximately (0.586, 0.654).", "1 point: correct 95% confidence interpretation in context.", "1 point: concludes that 0.50 is inconsistent with the interval."],
    hints: ["Use p̂ in the interval standard error."],
    examSection: "Section II · Free Response"
  },

  "stats-inf-2": {
    id: "stats-inf-2",
    format: "frq_half",
    conceptId: "stats-hypothesis-tests",
    conceptIntro: "Section II · Inference. One-proportion z test and error interpretation.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "A café manager believes that after receiving a $2 coupon, more than 35% of past customers will reorder within 30 days. Of 120 randomly selected past customers who receive the coupon, 48 reorder. (a) State hypotheses for testing the manager's claim. (b) Assuming inference conditions are met, calculate the z statistic and p-value. (c) At α=0.05, state a conclusion in context. (d) Identify the type of error that could result from this decision and interpret it in context.",
    answerKey: "(a) H0:p=0.35 versus Ha:p>0.35. (b) p̂=0.40; z=(0.40-0.35)/sqrt(0.35(0.65)/120)≈1.15; one-sided p-value≈0.125. (c) Fail to reject H0 because 0.125>0.05. The data do not provide convincing evidence that more than 35% of past customers reorder after receiving the coupon. (d) A Type II error is possible: in reality p>0.35, but the study fails to detect that the reorder proportion exceeds 35%.",
    rationale: "The null proportion p0, not p̂, determines the test standard error. Failing to reject leaves Type II error as the decision-compatible error.",
    scoringGuide: ["1 point: correct one-sided hypotheses.", "1 point: z≈1.15 and p≈0.125.", "1 point: correct fail-to-reject conclusion in context.", "1 point: correct Type II error interpretation in context."],
    hints: ["Use p0=0.35 in the standard error for the test."],
    examSection: "Section II · Free Response"
  },

  "stats-inf-5": {
    id: "stats-inf-5",
    format: "frq_half",
    conceptId: "stats-hypothesis-tests",
    conceptIntro: "Section II · Inference. Two-sample t test and causal scope.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 3,
    prompt: "Patients with similar knee injuries are randomly assigned to standard surgery (n=110, mean recovery 210 days, s=32 days) or a new surgery (n=100, mean recovery 182 days, s=28 days). (a) Explain what the random assignment permits researchers to conclude about causation for patients represented by the study. (b) Test H0: μnew=μstandard versus Ha: μnew<μstandard at α=0.05. You may use a two-sample t procedure and assume its conditions are met.",
    answerKey: "(a) Random assignment makes the treatment groups comparable on average, so a statistically significant difference can support a causal conclusion about the effect of surgery type for patients like those in the experiment. (b) t=(182-210)/sqrt(28^2/100+32^2/110)≈-6.76. The one-sided p-value is far below 0.05, so reject H0. There is very strong evidence that the new surgery reduces mean recovery time for patients represented by the experiment.",
    rationale: "Random assignment supports causation; random sampling would govern broader population generalization. The observed 28-day difference is many standard errors below zero.",
    scoringGuide: ["1 point: correctly links random assignment to causal inference.", "1 point: states the correct one-sided hypotheses or equivalent parameter comparison.", "1 point: computes t≈-6.76 using the two-sample standard error.", "1 point: rejects H0 and gives the causal conclusion within the study's scope."],
    hints: ["Distinguish random assignment from random sampling."],
    examSection: "Section II · Free Response"
  },

  "stats-inf-6": {
    id: "stats-inf-6",
    format: "frq_half",
    conceptId: "stats-hypothesis-tests",
    conceptIntro: "Section II · Inference. Matched pairs t test.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 3,
    prompt: "For 8 matched car-purchase pairs, one woman and one man bought the same equipped model from the same dealer. Let d = price paid by woman - price paid by man. The differences have mean d̄=$520 and standard deviation sd=$480. Assume the matched differences are reasonably modeled for a t procedure. At α=0.05, do the data provide convincing evidence that the population mean difference μd is greater than 0?",
    answerKey: "Use a one-sample t test on the 8 paired differences: H0:μd=0 versus Ha:μd>0. SE=480/sqrt(8)≈169.7, so t=520/169.7≈3.06 with df=7. The one-sided p-value is about 0.009. Because p<0.05, reject H0. The data provide convincing evidence that the mean woman-minus-man price difference is positive for the population represented by these matched pairs.",
    rationale: "The matching creates one quantitative difference per car model/dealer pair, so the correct analysis is a one-sample t procedure on the differences, not an independent two-sample test.",
    scoringGuide: ["1 point: identifies a paired/one-sample t test on differences and correct hypotheses.", "1 point: t≈3.06 with df=7.", "1 point: p≈0.009 and reject H0.", "1 point: interprets the conclusion using the mean paired price difference and appropriate population scope."],
    hints: ["Analyze the eight differences rather than the sixteen individual prices."],
    examSection: "Section II · Free Response"
  },

  "stats-inf-7": {
    id: "stats-inf-7",
    format: "frq_half",
    conceptId: "stats-ci-prop-mean",
    conceptIntro: "Section II · Inference. One-proportion interval and transformed cost interval.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "Of 90 randomly selected customers who asked for a water cup, 27 filled the cup with soda. (a) Construct a 95% confidence interval for the true proportion p of such customers who fill the cup with soda, assuming the usual conditions are met. (b) Interpret the interval. (c) If 2,400 customers ask for water cups in July and each soda fill costs the restaurant $0.30, use the confidence interval to obtain an interval estimate for July's soda cost from this behavior.",
    answerKey: "p̂=27/90=0.30. SE=sqrt(0.30(0.70)/90)≈0.0483. The 95% CI is 0.30±1.96(0.0483)≈(0.205,0.395). We are 95% confident the true proportion of water-cup customers who fill the cup with soda is about 20.5% to 39.5%. Multiplying endpoints by 2400×$0.30=$720 gives an estimated July cost interval of about $148 to $284.",
    rationale: "A linear transformation of the population proportion into expected total cost transforms the interval endpoints by the same positive constant.",
    scoringGuide: ["1 point: 95% proportion interval approximately (0.205,0.395).", "1 point: correct contextual confidence interpretation.", "1 point: correctly transforms both endpoints using 2400×0.30.", "1 point: cost interval about $148 to $284."],
    hints: ["First construct the interval for p, then transform both endpoints."],
    examSection: "Section II · Free Response"
  },

  "stats-inf-8": {
    id: "stats-inf-8",
    format: "frq_half",
    conceptId: "stats-slope-inference",
    conceptIntro: "Section II · Inference. Confidence interval for a regression slope.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "For n=22 houses, a regression of selling price (thousands of dollars) on distance from downtown (miles) gives slope b=-1.95 with SEb=0.22. Assume all regression-inference conditions hold. Use t*=2.086 for df=20. (a) Construct a 95% confidence interval for the population slope β. (b) Interpret the interval in context. (c) An agent claims that mean selling price decreases by about $2,000 for each additional mile from downtown. Does the interval contradict that claim? Explain.",
    answerKey: "(a) -1.95±2.086(0.22)=(-2.409,-1.491) thousand dollars per mile. (b) We are 95% confident that each additional mile from downtown is associated with a decrease in mean selling price of about $1.49k to $2.41k per mile in the population represented by the model. (c) No. A slope of -2.00 thousand dollars per mile lies inside the interval, so that value is plausible given the data.",
    rationale: "A slope interval estimates the population linear rate of change. A hypothesized slope inside the interval is not contradicted by the data at the corresponding confidence level.",
    scoringGuide: ["1 point: interval approximately (-2.409,-1.491).", "1 point: correct contextual slope interpretation with units.", "1 point: notes that -2 lies inside the interval.", "1 point: correctly concludes the agent's claim is not contradicted."],
    hints: ["Use b±t*SEb."],
    examSection: "Section II · Free Response"
  },

  "stats-inf-9": {
    id: "stats-inf-9",
    format: "frq_half",
    conceptId: "stats-chi-square",
    conceptIntro: "Section II · Inference. Chi-square goodness-of-fit test.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt: "A bank specifies acceptable wait-time category probabilities of 0.30, 0.25, 0.20, 0.15, and 0.10. In a random sample of 100 customers, the observed counts across those categories are 28, 22, 19, 18, and 13. (a) State hypotheses for a chi-square goodness-of-fit test. (b) Calculate the expected counts and chi-square statistic. (c) With df=4, the p-value is approximately 0.728. State a conclusion at α=0.05.",
    answerKey: "(a) H0: the population wait-time category probabilities are (0.30,0.25,0.20,0.15,0.10); Ha: at least one population category probability differs. (b) Expected counts are (30,25,20,15,10). χ²=Σ(O-E)^2/E≈2.043. (c) Because p≈0.728>0.05, fail to reject H0. The sample does not provide convincing evidence that the bank's wait-time distribution differs from the stated acceptable probabilities.",
    rationale: "A goodness-of-fit test compares one categorical distribution with specified population probabilities. The observed deviations are small relative to the expected counts.",
    scoringGuide: ["1 point: correct goodness-of-fit hypotheses in context.", "1 point: expected counts 30,25,20,15,10.", "1 point: χ²≈2.04 with df=4.", "1 point: fail-to-reject conclusion using p≈0.728."],
    hints: ["Expected count = n×claimed probability for each category."],
    examSection: "Section II · Free Response"
  },

  "stats-mix-1": {
    id: "stats-mix-1",
    format: "frq_half",
    conceptId: "stats-two-var",
    conceptIntro: "Section II · Exploring data. Interpreting r².",
    authenticity: "exam_authentic",
    responseMode: "short_response",
    difficultyTier: 1,
    prompt: "A least-squares regression model predicts exam score from hours studied and has r²=0.71. Write a correct interpretation of r² in context.",
    answerKey: "About 71% of the variation in exam scores among the students in the data is explained by the linear relationship between hours studied and exam score.",
    rationale: "r² describes the proportion of variability in the response accounted for by the linear model using the explanatory variable.",
    scoringGuide: ["1 point: identifies 71% of variation in exam scores.", "1 point: says the variation is explained by the linear relationship/model with hours studied, in context."],
    hints: ["Name the response variable first."],
    examSection: "Section II · Free Response"
  },

  "stats-mix-2": {
    id: "stats-mix-2",
    format: "frq_half",
    conceptId: "stats-sampling-design",
    conceptIntro: "Section II · Sampling design. When stratification improves precision.",
    authenticity: "exam_authentic",
    responseMode: "short_response",
    difficultyTier: 2,
    prompt: "A university has two campuses and wants to estimate overall student satisfaction. Explain when stratifying the sample by campus would be expected to produce a more precise estimator than stratifying by gender, assuming both designs use the same total sample size and appropriate random sampling within strata.",
    answerKey: "Stratifying by campus is expected to help more when satisfaction levels differ substantially between campuses while students within each campus are relatively similar in satisfaction, and when gender groups are less internally homogeneous or differ less from each other. Effective strata are internally homogeneous with respect to the response and meaningfully different from one another.",
    rationale: "Stratification gains precision when the stratifying variable separates the population into groups that are internally similar but externally different on the response variable.",
    scoringGuide: ["1 point: identifies the need for meaningful between-campus differences in satisfaction.", "1 point: identifies relative within-campus homogeneity and compares it with the weaker gender stratification."],
    hints: ["Good strata are similar within and different between on the response."],
    examSection: "Section II · Free Response"
  },

  "stats-mix-3": {
    id: "stats-mix-3",
    format: "mcq",
    conceptId: "stats-hypothesis-tests",
    conceptIntro: "Section I · Multiple Choice. Type I and Type II errors.",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    difficultyTier: 2,
    prompt: "A significance test uses H₀: p = 0.50 and Hₐ: p ≠ 0.50. The test fails to reject H₀. Which type of error could have occurred as a result of this decision?",
    choices: ["A) Type I error only", "B) Type II error only", "C) Either a Type I or a Type II error", "D) Neither type of error is possible after failing to reject H₀"],
    mcqAnswer: 1,
    answerKey: "B) Type II error only",
    rationale: "A Type II error occurs when the null hypothesis is false but the test fails to reject it. A Type I error requires rejecting a true null hypothesis, which is inconsistent with the decision made here.",
    hints: ["Identify which error definition is compatible with a fail-to-reject decision."],
    examSection: "Section I · Multiple Choice (4 options)"
  },

  "stats-mix-4": {
    id: "stats-mix-4",
    format: "frq_half",
    conceptId: "stats-experiments",
    conceptIntro: "Section II · Experimental design. Random assignment.",
    authenticity: "exam_authentic",
    responseMode: "short_response",
    difficultyTier: 1,
    prompt: "Twenty-four students will participate in a study comparing learning gains from a physical-dissection lab with gains from a simulation lab. Describe a valid random-assignment procedure that creates two treatment groups of 12 students each.",
    answerKey: "Label the students 1–24. Use a random-number generator or a random shuffle to select 12 distinct labels for the physical-dissection group; assign the remaining 12 students to the simulation group. Each student must have an equal chance to be assigned to either treatment, and exactly 12 students must be placed in each group.",
    rationale: "A valid random-assignment mechanism uses chance rather than researcher choice while enforcing the planned equal group sizes.",
    scoringGuide: ["1 point: uses a genuine random mechanism giving each student an equal assignment chance.", "1 point: clearly produces exactly two groups of 12 without duplicate assignment."],
    hints: ["A shuffle of all 24 labels is sufficient."],
    examSection: "Section II · Free Response"
  },

  "stats-mix-5": {
    id: "stats-mix-5",
    format: "frq_half",
    conceptId: "stats-random-vars",
    conceptIntro: "Section II · Probability. Geometric waiting-time reasoning.",
    authenticity: "exam_authentic",
    responseMode: "short_response",
    difficultyTier: 2,
    prompt: "An airline upgrades a frequent flyer independently on each flight with probability 0.08. Find the probability that the flyer's first upgrade occurs after the fourth flight, and explain what event you calculated.",
    answerKey: "For the first upgrade to occur after flight 4, flights 1–4 must all be non-upgrades. P=(1-0.08)^4=0.92^4≈0.7164. This is the probability of four consecutive failures before any upgrade occurs.",
    rationale: "'First success after the fourth trial' means no successes on the first four independent trials.",
    scoringGuide: ["1 point: identifies four consecutive non-upgrades.", "1 point: computes 0.92^4≈0.7164 and interprets it correctly."],
    hints: ["Translate 'after the fourth flight' into what must happen on flights 1–4."],
    examSection: "Section II · Free Response"
  }
};
