#!/usr/bin/env python3
"""Batch-generate CED-aligned AI topic exercises for AP Statistics & AP Calculus AB/BC."""
import json
import random
import string
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
GEN_NOTE = (
    "Original AI-generated practice aligned to College Board AP Statistics / "
    "AP Calculus AB/BC CED topics. Not College Board exam verbatim. "
    "Includes process steps and answer keys for study. · 2026-08-23"
)
BASE_TAGS = ["ai-topic-exercises", "ced-aligned", "generated", "with-solutions"]

STATS = "AP Statistics"
CALC = "AP Calculus AB/BC"


def rid(prefix: str) -> str:
    h = format(random.getrandbits(32), "x")[:8]
    s = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{h}-{s}"


def mcq(prompt, choices, answer_idx, steps, concept_id=None, tier=2):
    letter = "ABCD"[answer_idx]
    ans = choices[answer_idx]
    body = ans.split(") ", 1)[-1] if ") " in ans else ans
    return {
        "id": rid("m-item"),
        "format": "mcq",
        "prompt": prompt,
        "choices": choices,
        "conceptId": concept_id,
        "conceptIntro": None,
        "difficultyTier": tier,
        "visibleSteps": steps,
        "blankSteps": [f"Answer key: {letter}) {body}"],
        "hints": [
            "Eliminate choices that violate definitions or conditions.",
            "Check context, units, and statistical language carefully.",
            f"Final check: {letter}) {body}",
        ],
    }


def frq(prompt, steps, answers, concept_id=None, tier=2):
    return {
        "id": rid("m-item"),
        "format": "frq_half",
        "prompt": prompt,
        "conceptId": concept_id,
        "conceptIntro": None,
        "difficultyTier": tier,
        "visibleSteps": steps,
        "blankSteps": answers if isinstance(answers, list) else [answers],
        "hints": [
            "State the procedure / formula before computing.",
            "Interpret in context when the question asks.",
            "Answers are in blankSteps.",
        ],
    }


def quiz(title, subject, desc, tags, items, minutes=45, tier=2):
    return {
        "id": rid("m-quiz"),
        "title": title,
        "subject": subject,
        "kind": "generated",
        "description": desc,
        "generationNote": GEN_NOTE,
        "estimatedMinutes": minutes,
        "tags": BASE_TAGS + tags,
        "items": items,
        "difficultyTier": tier,
    }


QUIZZES = [
    # ══════════════════════════════════════════════════════════════
    # AP STATISTICS — CED Units 1–9
    # ══════════════════════════════════════════════════════════════
    quiz(
        "AI Topic Exercises — Unit 1: Exploring One-Variable Data",
        STATS,
        "CED Unit 1: SOCS, center/spread, boxplots, z-scores, density curves.",
        ["unit-1", "one-variable", "socs", "descriptive"],
        [
            frq(
                "A data set of wait times (minutes) is right-skewed with median $12$, Q1 $=8$, Q3 $=20$. Identify which measures of center and spread are most appropriate and compute the IQR. Would a wait of $40$ minutes be an outlier by the $1.5\\times\\mathrm{IQR}$ rule?",
                [
                    "Right-skewed ⇒ prefer median and IQR over mean and SD.",
                    "$\\mathrm{IQR}=Q3-Q1=20-8=12$.",
                    "Upper fence $=Q3+1.5\\cdot\\mathrm{IQR}=20+18=38$.",
                    "Yes, $40>38$ ⇒ outlier by the $1.5\\times\\mathrm{IQR}$ rule.",
                ],
                [
                    "Use median and IQR; IQR $=12$; $40$ is an outlier (fence $=38$)."
                ],
                "stats-one-var",
            ),
            mcq(
                "Which description of a histogram is incomplete for AP Statistics?",
                [
                    "A) Moderately right-skewed with a possible high outlier; center near 50 minutes; spread from about 20 to 110",
                    "B) The shape is skewed",
                    "C) Unimodal and roughly symmetric; mean about 3.2; SD about 0.4 (in context of the variable)",
                    "D) Left-skewed; median less than mean is unlikely here — check center carefully",
                ],
                1,
                [
                    "AP expects SOCS in context: shape, outliers, center, and spread with the variable named.",
                    "B only names shape vaguely — incomplete.",
                ],
            ),
            frq(
                "Scores are approximately Normal with mean $72$ and SD $8$. Find the $z$-score for a score of $88$ and the proportion of scores above $88$ (use standard Normal: $P(Z>2)\\approx0.0228$).",
                [
                    "$z=(88-72)/8=2.0$.",
                    "$P(X>88)=P(Z>2)\\approx0.0228$ (about 2.3%).",
                ],
                ["$z=2$; proportion $\\approx0.0228$."],
            ),
            mcq(
                "Compared with the mean, the median of a strongly right-skewed distribution tends to be:",
                [
                    "A) Larger than the mean",
                    "B) Smaller than the mean",
                    "C) Always equal to the mean",
                    "D) Undefined",
                ],
                1,
                [
                    "Right skew pulls the mean toward the long right tail; median is resistant and typically smaller.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Exploring Two-Variable Data",
        STATS,
        "CED Unit 2: scatterplots, correlation, LSRL, residuals, $r^2$.",
        ["unit-2", "regression", "correlation", "residuals"],
        [
            frq(
                "The least-squares line relating study hours $x$ to quiz score $\\hat y$ is $\\hat y=48+4.5x$. Interpret the slope in context. If a student studied $6$ hours and scored $70$, find the residual.",
                [
                    "Slope: for each additional study hour, the predicted quiz score increases by about $4.5$ points.",
                    "$\\hat y=48+4.5(6)=75$.",
                    "Residual $=y-\\hat y=70-75=-5$ (model overestimated by 5).",
                ],
                [
                    "Slope: +4.5 predicted points per hour; residual $=-5$.",
                ],
                "stats-two-var",
            ),
            mcq(
                "If $r=-0.82$ for a linear association, which is true?",
                [
                    "A) Strong positive linear association",
                    "B) Strong negative linear association",
                    "C) No linear association",
                    "D) Causation is established",
                ],
                1,
                [
                    "$|r|$ near 1 ⇒ strong; negative sign ⇒ as $x$ increases, $y$ tends to decrease.",
                    "Correlation alone does not imply causation.",
                ],
            ),
            frq(
                "A residual plot for a linear fit shows a clear curved pattern. What does this suggest about using a linear model?",
                [
                    "A curved residual pattern means the linear model is not appropriate for the form of the association.",
                    "Consider a nonlinear transformation or different model form.",
                ],
                [
                    "Linear model is inadequate; association is likely nonlinear."
                ],
            ),
            mcq(
                "An $r^2$ of $0.64$ means:",
                [
                    "A) 64% of data points lie on the regression line",
                    "B) About 64% of the variation in $y$ is explained by the linear relationship with $x$",
                    "C) The correlation is necessarily $0.64$",
                    "D) Predictions have 64% accuracy for every point",
                ],
                1,
                [
                    "$r^2$ is the fraction of variation in the response explained by the LSRL with the explanatory variable.",
                    "Also $r=\\pm\\sqrt{0.64}=\\pm0.8$ depending on direction.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 3: Collecting Data",
        STATS,
        "CED Unit 3: sampling methods, bias, experiments, random assignment, confounding.",
        ["unit-3", "sampling", "experiments", "bias"],
        [
            mcq(
                "A researcher emails a survey to all alumni and analyzes only those who reply. This design primarily suffers from:",
                [
                    "A) Undercoverage only",
                    "B) Voluntary response bias",
                    "C) Nonresponse that is automatically fixed by large $n$",
                    "D) No bias if $n>1000$",
                ],
                1,
                [
                    "Respondents self-select; extreme opinions are often overrepresented — voluntary response bias.",
                    "Large $n$ does not fix a biased sampling method.",
                ],
                "stats-sampling-design",
            ),
            frq(
                "Distinguish stratified sampling from cluster sampling in one sentence each, and give one reason a study might prefer stratification.",
                [
                    "Stratified: divide population into homogeneous strata, then sample within each stratum.",
                    "Cluster: divide into clusters, randomly select whole clusters, and take all (or sample) units in selected clusters.",
                    "Stratification often reduces variability of estimates when strata are homogeneous on the response.",
                ],
                [
                    "Stratified = sample within groups; cluster = take whole groups; stratification can improve precision."
                ],
            ),
            mcq(
                "Random assignment of treatments in an experiment primarily allows researchers to:",
                [
                    "A) Generalize to every human population",
                    "B) Make causal conclusions about the treatments for units like those studied",
                    "C) Eliminate the need for a control group",
                    "D) Guarantee identical responses in every treatment group",
                ],
                1,
                [
                    "Random assignment balances lurking variables ⇒ causal inference for similar experimental units.",
                    "Generalization still depends on how subjects were selected.",
                ],
                "stats-experiments",
            ),
            frq(
                "Forty plants are randomly assigned to fertilizer A or B (20 each). Growth is measured after 4 weeks. Identify the experimental units, treatments, and response. Why can a causal claim be made?",
                [
                    "Units: plants; treatments: A vs B; response: growth (e.g. height increase).",
                    "Random assignment supports a causal conclusion for plants like those in the study.",
                ],
                [
                    "Units=plants; treatments=A/B; response=growth; random assignment ⇒ causation claim OK."
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Probability & Random Variables",
        STATS,
        "CED Unit 4: probability rules, conditional probability, binomial/geometric, expected value.",
        ["unit-4", "probability", "binomial", "geometric", "expected-value"],
        [
            frq(
                "Events $A$ and $B$ satisfy $P(A)=0.4$, $P(B)=0.5$, $P(A\\cap B)=0.2$. Find $P(A\\cup B)$ and $P(A\\mid B)$. Are $A$ and $B$ independent?",
                [
                    "$P(A\\cup B)=0.4+0.5-0.2=0.7$.",
                    "$P(A\\mid B)=P(A\\cap B)/P(B)=0.2/0.5=0.4$.",
                    "Independent if $P(A\\mid B)=P(A)$: $0.4=0.4$ ⇒ yes, independent (also $P(A)P(B)=0.2$).",
                ],
                ["$P(A\\cup B)=0.7$; $P(A\\mid B)=0.4$; independent."],
                "stats-probability",
            ),
            frq(
                "Let $X$ be the number of successes in $n=10$ independent trials with $p=0.3$. Write $P(X=3)$ using the binomial formula (do not simplify numerically).",
                [
                    "$X\\sim\\mathrm{Bin}(10,0.3)$.",
                    "$P(X=3)=\\binom{10}{3}(0.3)^3(0.7)^7$.",
                ],
                ["$P(X=3)=\\binom{10}{3}(0.3)^3(0.7)^7$."],
                "stats-random-vars",
            ),
            mcq(
                "A geometric distribution models:",
                [
                    "A) Number of successes in fixed $n$ trials",
                    "B) Number of trials until the first success (iid Bernoulli)",
                    "C) Continuous waiting times only",
                    "D) Sample means of any size",
                ],
                1,
                [
                    "Geometric: trials until first success; $P(X=k)=(1-p)^{k-1}p$.",
                ],
            ),
            frq(
                "A discrete RV $X$ takes values $0,1,2$ with probabilities $0.2,0.5,0.3$. Find $E(X)$ and $\\mathrm{Var}(X)$.",
                [
                    "$E(X)=0(0.2)+1(0.5)+2(0.3)=1.1$.",
                    "$E(X^2)=0+1(0.5)+4(0.3)=1.7$.",
                    "$\\mathrm{Var}(X)=E(X^2)-[E(X)]^2=1.7-1.21=0.49$.",
                ],
                ["$E(X)=1.1$; $\\mathrm{Var}(X)=0.49$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Sampling Distributions",
        STATS,
        "CED Unit 5: sampling distribution of $\\hat p$ and $\\bar x$, CLT, conditions.",
        ["unit-5", "sampling-distributions", "clt", "hat-p"],
        [
            frq(
                "In a large population, $p=0.40$. For SRS of size $n=100$, find the mean and SD of the sampling distribution of $\\hat p$, and check the Large Counts condition.",
                [
                    "$\\mu_{\\hat p}=p=0.40$.",
                    "$\\sigma_{\\hat p}=\\sqrt{p(1-p)/n}=\\sqrt{0.4\\cdot0.6/100}=\\sqrt{0.0024}=0.049$.",
                    "Large Counts: $np=40\\ge10$ and $n(1-p)=60\\ge10$ ✓.",
                ],
                [
                    "$\\mu=0.40$; $\\sigma\\approx0.049$; Large Counts OK."
                ],
            ),
            mcq(
                "The Central Limit Theorem says that for large $n$, the sampling distribution of $\\bar x$ is approximately Normal when:",
                [
                    "A) The population is always Normal",
                    "B) Sampling is with replacement only",
                    "C) Observations are iid with finite mean and variance (and $n$ is large enough)",
                    "D) $n=2$ always suffices",
                ],
                2,
                [
                    "CLT: $\\bar x$ is approx Normal for large $n$ even if the population is not Normal (iid, finite variance).",
                ],
            ),
            frq(
                "Scores have $\\mu=70$, $\\sigma=12$. For SRS of $n=36$, find $P(\\bar x>74)$ approximately (use $P(Z>2)\\approx0.0228$).",
                [
                    "$\\sigma_{\\bar x}=\\sigma/\\sqrt{n}=12/6=2$.",
                    "$z=(74-70)/2=2$.",
                    "$P(\\bar x>74)\\approx0.0228$.",
                ],
                ["$\\approx0.0228$."],
            ),
            mcq(
                "Increasing sample size $n$ while keeping $p$ fixed primarily:",
                [
                    "A) Increases bias of $\\hat p$",
                    "B) Decreases the SD of the sampling distribution of $\\hat p$",
                    "C) Changes $\\mu_{\\hat p}$ away from $p$",
                    "D) Makes $\\hat p$ always exactly $p$",
                ],
                1,
                [
                    "$\\sigma_{\\hat p}=\\sqrt{p(1-p)/n}$ shrinks as $n$ grows; mean stays $p$ for unbiased sampling.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 6: Inference for Proportions",
        STATS,
        "CED Unit 6: one- and two-sample $z$ intervals and tests for proportions.",
        ["unit-6", "inference", "proportions", "confidence-interval", "hypothesis-test"],
        [
            frq(
                "In an SRS of $200$ voters, $112$ support a measure. Construct a $95\\%$ confidence interval for $p$ (use $z^*=1.96$). State the interval and interpret briefly.",
                [
                    "$\\hat p=112/200=0.56$.",
                    "$\\mathrm{SE}=\\sqrt{\\hat p(1-\\hat p)/n}=\\sqrt{0.56\\cdot0.44/200}\\approx0.0351$.",
                    "CI: $0.56\\pm1.96(0.0351)\\approx(0.491,0.629)$.",
                    "Interpretation: We are 95% confident that the true support proportion is between about 0.491 and 0.629.",
                ],
                [
                    "CI $\\approx(0.491,0.629)$; 95% confident for true $p$.",
                ],
                "stats-ci-prop-mean",
            ),
            mcq(
                "For a one-proportion $z$-test of $H_0:p=0.5$, which conditions must be checked?",
                [
                    "A) Only that the sample is large",
                    "B) Random sample (or random assignment), independence (10% rule), and Large Counts using $p_0$",
                    "C) Population Normality only",
                    "D) Equal variances",
                ],
                1,
                [
                    "Use $n p_0$ and $n(1-p_0)$ for Large Counts under $H_0$; also random and $n\\le10\\%$ of population when sampling without replacement.",
                ],
            ),
            frq(
                "Test $H_0:p=0.30$ vs $H_a:p>0.30$ with $n=150$, $\\hat p=0.38$. Compute the $z$ test statistic (do not find $p$-value).",
                [
                    "$\\mathrm{SE}_0=\\sqrt{0.30\\cdot0.70/150}=\\sqrt{0.0014}\\approx0.0374$.",
                    "$z=(\\hat p-p_0)/\\mathrm{SE}_0=(0.38-0.30)/0.0374\\approx2.14$.",
                ],
                ["$z\\approx2.14$."],
            ),
            mcq(
                "A 95% CI for $p_1-p_2$ is $(-0.02,0.11)$. At $\\alpha=0.05$, what can you conclude about $H_0:p_1=p_2$?",
                [
                    "A) Reject $H_0$ because the interval contains positive values",
                    "B) Fail to reject $H_0$ because 0 is inside the interval",
                    "C) Prove $p_1=p_2$ exactly",
                    "D) The interval is invalid",
                ],
                1,
                [
                    "If 0 is inside a two-sided CI for a difference, the corresponding two-sided test does not reject at that confidence level’s $\\alpha$.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 7: Inference for Means",
        STATS,
        "CED Unit 7: $t$ intervals and tests for means; matched pairs.",
        ["unit-7", "inference", "means", "t-procedures", "matched-pairs"],
        [
            frq(
                "An SRS of $n=16$ yields $\\bar x=52.0$, $s=4.0$. Find a $95\\%$ $t$ interval for $\\mu$ (use $t^*=2.131$ for $\\mathrm{df}=15$).",
                [
                    "$\\mathrm{SE}=s/\\sqrt{n}=4/4=1$.",
                    "CI: $52\\pm2.131(1)\\approx(49.87,54.13)$.",
                ],
                ["CI $\\approx(49.87,54.13)$."],
            ),
            mcq(
                "When should you use a $t$ procedure rather than a $z$ procedure for a mean?",
                [
                    "A) Always when $n>30$",
                    "B) When $\\sigma$ is unknown and $s$ estimates it (with Normal/CLT conditions)",
                    "C) Only for proportions",
                    "D) Never for means",
                ],
                1,
                [
                    "Means with unknown $\\sigma$ use $t$ with $\\mathrm{df}=n-1$; $z$ needs known $\\sigma$ (rare in practice).",
                ],
            ),
            frq(
                "Matched pairs: 10 students take a pre-test and post-test. Define the parameter of interest for a paired $t$-test and state $H_0$ and $H_a$ if we claim the mean post-test score is higher.",
                [
                    "Let $\\mu_d=$ mean difference (post − pre) for students like these.",
                    "$H_0:\\mu_d=0$ vs $H_a:\\mu_d>0$.",
                ],
                [
                    "Parameter: mean paired difference; $H_0:\\mu_d=0$, $H_a:\\mu_d>0$.",
                ],
            ),
            mcq(
                "A two-sample $t$ test comparing independent means requires approximately:",
                [
                    "A) Equal sample sizes only",
                    "B) Two independent random samples (or random assignment) and Normal/CLT conditions for each sample",
                    "C) Known population proportions",
                    "D) Paired observations",
                ],
                1,
                [
                    "Independent samples + Normality/large $n$; pairing is a different design.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 8: Chi-Square Inference",
        STATS,
        "CED Unit 8: goodness-of-fit, homogeneity, independence; expected counts.",
        ["unit-8", "chi-square", "gof", "homogeneity", "independence"],
        [
            frq(
                "A GOF test compares observed counts $(18,22,30,10)$ to equal expected proportions across 4 categories with $n=80$. Find expected count per category and $\\mathrm{df}$.",
                [
                    "Equal proportions ⇒ each $E_i=80/4=20$.",
                    "$\\mathrm{df}=k-1=3$.",
                ],
                ["$E_i=20$; $\\mathrm{df}=3$."],
            ),
            mcq(
                "Chi-square tests for homogeneity and independence both use the statistic $\\sum(O-E)^2/E$, but they differ mainly in:",
                [
                    "A) The formula for expected counts",
                    "B) Study design: comparing distributions across populations/treatments vs association in one population",
                    "C) Whether expected counts can be decimals",
                    "D) Whether $\\mathrm{df}$ can exceed 1",
                ],
                1,
                [
                    "Same mechanics; homogeneity compares groups, independence tests association in a single sample’s two-way table.",
                ],
            ),
            frq(
                "In a $2\\times3$ table for a chi-square test of independence, observed total $n=200$. If a cell has row total $50$ and column total $80$, find that cell’s expected count.",
                [
                    "$E=(\\mathrm{row\\ total}\\times\\mathrm{col\\ total})/n=(50)(80)/200=20$.",
                ],
                ["$E=20$."],
            ),
            mcq(
                "A condition for chi-square inference is that all expected counts are:",
                [
                    "A) Exactly equal",
                    "B) At least 5 (guideline) and data are counts from random sampling/assignment",
                    "C) Less than 1",
                    "D) Equal to observed counts",
                ],
                1,
                [
                    "Standard Large Counts guideline: all expected counts $\\ge5$ (some texts allow a few between 1 and 5).",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 9: Inference for Regression Slope",
        STATS,
        "CED Unit 9: inference for $\\beta$, conditions, interpreting slope CI/test.",
        ["unit-9", "regression-inference", "slope"],
        [
            frq(
                "Computer output for LSRL gives slope $b=2.40$, $\\mathrm{SE}_b=0.75$, $\\mathrm{df}=18$. Test $H_0:\\beta=0$ vs $H_a:\\beta\\ne0$ by computing the $t$ statistic.",
                [
                    "$t=b/\\mathrm{SE}_b=2.40/0.75=3.2$.",
                    "Compare to $t$ distribution with $\\mathrm{df}=18$ (or report $p$-value from technology).",
                ],
                ["$t=3.2$ on $\\mathrm{df}=18$."],
            ),
            mcq(
                "A 95% CI for the true slope $\\beta$ is $(0.8,3.1)$. This suggests:",
                [
                    "A) There is no linear association",
                    "B) Evidence of a positive linear association (0 not in interval)",
                    "C) Predictions are exact",
                    "D) $r$ must be negative",
                ],
                1,
                [
                    "Interval entirely above 0 ⇒ reject $\\beta=0$ at $\\alpha=0.05$ (two-sided) and conclude positive slope.",
                ],
            ),
            frq(
                "List the four LINE conditions for linear regression inference (brief phrases).",
                [
                    "Linear: true relationship is linear (check residual plot).",
                    "Independent: observations independent (random sample / 10% rule).",
                    "Normal: residuals approx Normal for each $x$ (check Normality of residuals).",
                    "Equal variance: roughly constant SD of residuals across $x$ (no fan shape).",
                ],
                ["LINE: Linear, Independent, Normal residuals, Equal variance."],
            ),
            mcq(
                "Extrapolation in regression means:",
                [
                    "A) Predicting within the range of $x$",
                    "B) Predicting for $x$-values outside the observed data range — often unreliable",
                    "C) Using residual plots",
                    "D) Computing $r^2$",
                ],
                1,
                ["Outside the data range, the linear pattern may not continue."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Statistics Mixed Challenge",
        STATS,
        "Cross-unit Stats challenges linking design, probability, and inference.",
        ["mixed", "challenge"],
        [
            frq(
                "A news site posts an online poll: “Should the stadium be built?” and gets 12,000 responses with 78% yes. Explain two reasons this estimate of citywide support may be biased.",
                [
                    "Voluntary response: only motivated readers respond.",
                    "Undercoverage / not an SRS of city residents (only site visitors).",
                    "Large $n$ does not remove these biases.",
                ],
                [
                    "Voluntary response + undercoverage; large $n$ ≠ unbiased.",
                ],
                tier=3,
            ),
            frq(
                "You have $\\hat p=0.62$ from $n=400$. For testing $H_0:p=0.5$ vs $H_a:p>0.5$, find $z$ and say whether you reject at $\\alpha=0.01$ (critical $z^*=2.33$).",
                [
                    "$\\mathrm{SE}_0=\\sqrt{0.5\\cdot0.5/400}=0.025$.",
                    "$z=(0.62-0.5)/0.025=4.8>2.33$ ⇒ reject $H_0$.",
                ],
                ["$z=4.8$; reject at $\\alpha=0.01$."],
            ),
            mcq(
                "Blocking in an experiment is most similar in purpose to:",
                [
                    "A) Stratifying in sampling",
                    "B) Cluster sampling",
                    "C) Convenience sampling",
                    "D) Increasing measurement bias",
                ],
                0,
                [
                    "Both control known variability by grouping similar units before assigning treatments / sampling.",
                ],
            ),
        ],
        minutes=50,
    ),
    # ══════════════════════════════════════════════════════════════
    # AP CALCULUS AB/BC — CED Units 1–10
    # ══════════════════════════════════════════════════════════════
    quiz(
        "AI Topic Exercises — Unit 1: Limits and Continuity",
        CALC,
        "CED Unit 1: limit laws, one-sided limits, continuity, intermediate value theorem.",
        ["unit-1", "limits", "continuity", "ivt"],
        [
            frq(
                "Evaluate $\\displaystyle\\lim_{x\\to3}\\frac{x^2-9}{x-3}$.",
                [
                    "Factor: $(x-3)(x+3)/(x-3)$ for $x\\ne3$.",
                    "Limit $=\\lim_{x\\to3}(x+3)=6$.",
                ],
                ["Limit $=6$."],
            ),
            mcq(
                "If $\\lim_{x\\to a^-}f(x)=2$ and $\\lim_{x\\to a^+}f(x)=5$, then $\\lim_{x\\to a}f(x)$:",
                [
                    "A) Equals 2",
                    "B) Equals 5",
                    "C) Equals 3.5",
                    "D) Does not exist",
                ],
                3,
                ["Two-sided limit exists only if one-sided limits agree."],
            ),
            frq(
                "Let $f(x)=\\begin{cases}x^2,&x\\le1\\\\ kx+1,&x>1\\end{cases}$. Find $k$ so $f$ is continuous at $x=1$.",
                [
                    "Need $\\lim_{x\\to1^-}f=\\lim_{x\\to1^+}f=f(1)$.",
                    "Left: $1$; right: $k+1$; $f(1)=1$.",
                    "So $k+1=1$ ⇒ $k=0$.",
                ],
                ["$k=0$."],
            ),
            mcq(
                "The Intermediate Value Theorem guarantees a root of a continuous $f$ on $[a,b]$ when:",
                [
                    "A) $f'(a)=0$",
                    "B) $f(a)$ and $f(b)$ have opposite signs",
                    "C) $f$ is differentiable",
                    "D) $f$ has a horizontal asymptote",
                ],
                1,
                ["IVT: continuous on $[a,b]$ and $f(a)f(b)<0$ ⇒ some $c$ with $f(c)=0$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Differentiation Basics",
        CALC,
        "CED Unit 2: definition of derivative, power/product/quotient/trig rules.",
        ["unit-2", "derivatives", "definition", "rules"],
        [
            frq(
                "Using the definition $f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}$, find $f'(2)$ for $f(x)=x^2$.",
                [
                    "$f'(2)=\\lim_{h\\to0}\\dfrac{(2+h)^2-4}{h}=\\lim_{h\\to0}\\dfrac{4+4h+h^2-4}{h}=\\lim(4+h)=4$.",
                ],
                ["$f'(2)=4$."],
            ),
            frq(
                "Differentiate $y=3x^4-5x+\\sqrt{x}$.",
                [
                    "$y'=12x^3-5+\\dfrac{1}{2}x^{-1/2}=12x^3-5+\\dfrac{1}{2\\sqrt{x}}$.",
                ],
                ["$y'=12x^3-5+\\dfrac{1}{2\\sqrt{x}}$."],
            ),
            mcq(
                "If $f(x)=\\sin x$ and $g(x)=\\cos x$, then $(fg)'$ equals:",
                [
                    "A) $\\cos^2 x-\\sin^2 x$",
                    "B) $-\\sin x\\cos x$",
                    "C) $\\cos x-\\sin x$",
                    "D) $1$",
                ],
                0,
                [
                    "Product rule: $f'g+fg'=\\cos x\\cdot\\cos x+\\sin x\\cdot(-\\sin x)=\\cos^2 x-\\sin^2 x$.",
                ],
            ),
            frq(
                "Find $\\dfrac{d}{dx}\\left(\\dfrac{x}{x+1}\\right)$.",
                [
                    "Quotient: $\\dfrac{(1)(x+1)-x(1)}{(x+1)^2}=\\dfrac{1}{(x+1)^2}$.",
                ],
                ["$\\dfrac{1}{(x+1)^2}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 3: Chain Rule, Implicit & Inverse",
        CALC,
        "CED Unit 3: composite functions, implicit differentiation, inverse derivatives.",
        ["unit-3", "chain-rule", "implicit", "inverse"],
        [
            frq(
                "Find $\\dfrac{d}{dx}\\bigl[(3x^2+1)^5\\bigr]$.",
                [
                    "Chain: $5(3x^2+1)^4\\cdot6x=30x(3x^2+1)^4$.",
                ],
                ["$30x(3x^2+1)^4$."],
            ),
            frq(
                "Given $x^2+y^2=25$, find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$.",
                [
                    "$2x+2y\\,y'=0$ ⇒ $y'=-x/y$ (for $y\\ne0$).",
                ],
                ["$\\dfrac{dy}{dx}=-\\dfrac{x}{y}$."],
            ),
            mcq(
                "If $f$ is invertible and $f(3)=7$, $f'(3)=5$, then $(f^{-1})'(7)$ equals:",
                [
                    "A) $5$",
                    "B) $1/5$",
                    "C) $7$",
                    "D) $3/5$",
                ],
                1,
                ["$(f^{-1})'(a)=1/f'(b)$ where $f(b)=a$ ⇒ $1/5$."],
            ),
            frq(
                "Differentiate $y=\\ln(\\cos x)$ for $\\cos x>0$.",
                [
                    "$y'=\\dfrac{1}{\\cos x}\\cdot(-\\sin x)=-\\tan x$.",
                ],
                ["$y'=-\\tan x$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Contextual Applications of Derivatives",
        CALC,
        "CED Unit 4: related rates, linearization, L’Hôpital, motion.",
        ["unit-4", "related-rates", "motion", "lhopital"],
        [
            frq(
                "A circular oil slick expands with radius increasing at $2\\,\\mathrm{ft/s}$. When $r=10\\,\\mathrm{ft}$, how fast is the area increasing?",
                [
                    "$A=\\pi r^2$ ⇒ $\\dfrac{dA}{dt}=2\\pi r\\dfrac{dr}{dt}$.",
                    "At $r=10$, $dr/dt=2$: $dA/dt=2\\pi(10)(2)=40\\pi\\,\\mathrm{ft^2/s}$.",
                ],
                ["$40\\pi\\,\\mathrm{ft^2/s}$."],
            ),
            frq(
                "Evaluate $\\displaystyle\\lim_{x\\to0}\\frac{\\sin(5x)}{x}$ using L’Hôpital or known limits.",
                [
                    "Form $0/0$; L’Hôpital: $\\lim 5\\cos(5x)/1=5$, or $\\sin(5x)/x=5\\cdot\\sin(5x)/(5x)\\to5$.",
                ],
                ["Limit $=5$."],
            ),
            mcq(
                "If position $s(t)=t^3-6t^2+9t$, then velocity is zero when:",
                [
                    "A) $t=0$ only",
                    "B) $t=1$ and $t=3$",
                    "C) $t=2$ only",
                    "D) Never",
                ],
                1,
                [
                    "$v=s'=3t^2-12t+9=3(t^2-4t+3)=3(t-1)(t-3)$.",
                    "Zeros at $t=1,3$.",
                ],
            ),
            frq(
                "Use the tangent line to $f(x)=\\sqrt{x}$ at $x=4$ to approximate $\\sqrt{4.1}$.",
                [
                    "$f(4)=2$, $f'(x)=1/(2\\sqrt{x})$, $f'(4)=1/4$.",
                    "$L(x)=2+\\tfrac14(x-4)$; $L(4.1)=2+0.025=2.025$.",
                ],
                ["$\\approx2.025$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Analytical Applications of Derivatives",
        CALC,
        "CED Unit 5: MVT, extrema, concavity, curve sketching, optimization.",
        ["unit-5", "mvt", "extrema", "concavity", "optimization"],
        [
            frq(
                "Find the absolute max and min of $f(x)=x^3-3x$ on $[-2,2]$.",
                [
                    "$f'=3x^2-3=3(x^2-1)$ ⇒ critical points $x=\\pm1$.",
                    "$f(-2)=-2$, $f(-1)=2$, $f(1)=-2$, $f(2)=2$.",
                    "Absolute max $=2$; absolute min $=-2$.",
                ],
                ["Max $2$; min $-2$ on $[-2,2]$."],
            ),
            mcq(
                "If $f''(x)>0$ on an interval, then $f$ is:",
                [
                    "A) Decreasing",
                    "B) Concave up",
                    "C) Concave down",
                    "D) Constant",
                ],
                1,
                ["Positive second derivative ⇒ concave up (like a cup)."],
            ),
            frq(
                "State the Mean Value Theorem hypothesis and conclusion for $f$ on $[a,b]$.",
                [
                    "Hypothesis: $f$ continuous on $[a,b]$, differentiable on $(a,b)$.",
                    "Conclusion: some $c\\in(a,b)$ with $f'(c)=\\dfrac{f(b)-f(a)}{b-a}$.",
                ],
                [
                    "Continuous on closed, differentiable on open ⇒ $f'(c)=$ average rate."
                ],
            ),
            frq(
                "A rectangle has perimeter $40$. Maximize area: find dimensions.",
                [
                    "$2x+2y=40$ ⇒ $y=20-x$; $A=x(20-x)=20x-x^2$.",
                    "$A'=20-2x=0$ ⇒ $x=10$, $y=10$ (square).",
                    "$A_{\\max}=100$.",
                ],
                ["$10\\times10$ square; max area $100$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 6: Integration & Accumulation",
        CALC,
        "CED Unit 6: antiderivatives, FTC, substitution, accumulation functions.",
        ["unit-6", "integration", "ftc", "substitution"],
        [
            frq(
                "Evaluate $\\displaystyle\\int_0^2(3x^2-4)\\,dx$.",
                [
                    "Antiderivative $x^3-4x$; evaluate $[8-8]-[0]=0$.",
                ],
                ["Value $=0$."],
            ),
            frq(
                "If $F(x)=\\displaystyle\\int_1^{x^2}\\sin t\\,dt$, find $F'(x)$.",
                [
                    "FTC + chain: $F'(x)=\\sin(x^2)\\cdot2x=2x\\sin(x^2)$.",
                ],
                ["$F'(x)=2x\\sin(x^2)$."],
            ),
            mcq(
                "The substitution $u=x^3+1$ turns $\\int x^2(x^3+1)^4\\,dx$ into:",
                [
                    "A) $\\int u^4\\,du$",
                    "B) $\\tfrac13\\int u^4\\,du$",
                    "C) $3\\int u^4\\,du$",
                    "D) $\\int 3u^4\\,du$",
                ],
                1,
                ["$du=3x^2\\,dx$ ⇒ $x^2\\,dx=du/3$ ⇒ $\\tfrac13\\int u^4\\,du$."],
            ),
            frq(
                "A particle’s velocity is $v(t)=3t^2-1$. If $s(0)=4$, find $s(2)$.",
                [
                    "$s(2)=s(0)+\\int_0^2 v=4+[t^3-t]_0^2=4+(8-2)=10$.",
                ],
                ["$s(2)=10$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 7: Differential Equations",
        CALC,
        "CED Unit 7: slope fields, separation of variables, exponential models.",
        ["unit-7", "differential-equations", "separation", "exponential"],
        [
            frq(
                "Solve $\\dfrac{dy}{dx}=3y$ with $y(0)=5$.",
                [
                    "Separate: $dy/y=3\\,dx$ ⇒ $\\ln|y|=3x+C$.",
                    "$y=Ae^{3x}$; $y(0)=5$ ⇒ $A=5$; $y=5e^{3x}$.",
                ],
                ["$y=5e^{3x}$."],
            ),
            mcq(
                "On a slope field for $dy/dx=x-y$, at the point $(2,1)$ the segment slope is:",
                [
                    "A) $1$",
                    "B) $2$",
                    "C) $-1$",
                    "D) $0$",
                ],
                0,
                ["Slope $=2-1=1$."],
            ),
            frq(
                "A quantity grows continuously at rate proportional to itself: $\\dfrac{dP}{dt}=kP$. If $P(0)=100$ and $P(5)=200$, find $k$.",
                [
                    "$P=100e^{kt}$; $200=100e^{5k}$ ⇒ $e^{5k}=2$ ⇒ $k=(\\ln2)/5$.",
                ],
                ["$k=\\dfrac{\\ln2}{5}$."],
            ),
            frq(
                "Solve $\\dfrac{dy}{dx}=\\dfrac{x}{y}$ for $y>0$ with $y(0)=2$.",
                [
                    "$y\\,dy=x\\,dx$ ⇒ $\\tfrac12 y^2=\\tfrac12 x^2+C$.",
                    "$y^2=x^2+C'$; $y(0)=2$ ⇒ $C'=4$; $y=\\sqrt{x^2+4}$.",
                ],
                ["$y=\\sqrt{x^2+4}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 8: Applications of Integration",
        CALC,
        "CED Unit 8: area, volume (disk/washer/shell), average value, arc length (BC).",
        ["unit-8", "area", "volume", "average-value"],
        [
            frq(
                "Find the area between $y=x^2$ and $y=x$ from $x=0$ to $x=1$.",
                [
                    "Intersection at $0,1$; $A=\\int_0^1(x-x^2)\\,dx=[\\tfrac12 x^2-\\tfrac13 x^3]_0^1=\\tfrac12-\\tfrac13=\\tfrac16$.",
                ],
                ["Area $=\\dfrac16$."],
            ),
            frq(
                "Region under $y=\\sqrt{x}$ from $x=0$ to $4$ is rotated about the $x$-axis. Find volume (disk).",
                [
                    "$V=\\pi\\int_0^4 x\\,dx=\\pi[\\tfrac12 x^2]_0^4=8\\pi$.",
                ],
                ["$V=8\\pi$."],
            ),
            mcq(
                "Average value of continuous $f$ on $[a,b]$ is:",
                [
                    "A) $\\int_a^b f(x)\\,dx$",
                    "B) $\\dfrac{1}{b-a}\\int_a^b f(x)\\,dx$",
                    "C) $f'(b)-f'(a)$",
                    "D) $\\dfrac{f(b)+f(a)}{2}$ always",
                ],
                1,
                ["Definition: average value $=\\dfrac{1}{b-a}\\int_a^b f$."],
            ),
            frq(
                "Find average value of $f(x)=3x^2$ on $[0,2]$.",
                [
                    "$\\dfrac{1}{2}\\int_0^2 3x^2\\,dx=\\dfrac{1}{2}[x^3]_0^2=\\dfrac{1}{2}(8)=4$.",
                ],
                ["Average value $=4$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 9: Parametric, Polar & Vectors (BC)",
        CALC,
        "CED Unit 9 (BC): parametric derivatives, polar area, vector motion.",
        ["unit-9", "bc", "parametric", "polar", "vectors"],
        [
            frq(
                "Parametric: $x=t^2$, $y=t^3-3t$. Find $dy/dx$ at $t=2$.",
                [
                    "$dx/dt=2t$, $dy/dt=3t^2-3$.",
                    "At $t=2$: $dy/dx=(12-3)/4=9/4$.",
                ],
                ["$\\dfrac{dy}{dx}=\\dfrac{9}{4}$ at $t=2$."],
            ),
            frq(
                "Polar: find area enclosed by $r=2\\cos\\theta$ (one full petal/circle) using $A=\\tfrac12\\int r^2\\,d\\theta$ over appropriate limits.",
                [
                    "$r=2\\cos\\theta$ is a circle; $\\theta$ from $-\\pi/2$ to $\\pi/2$.",
                    "$A=\\tfrac12\\int_{-\\pi/2}^{\\pi/2}4\\cos^2\\theta\\,d\\theta=2\\int_{-\\pi/2}^{\\pi/2}\\dfrac{1+\\cos2\\theta}{2}\\,d\\theta=\\pi$.",
                ],
                ["Area $=\\pi$."],
            ),
            mcq(
                "For a particle with position $\\langle x(t),y(t)\\rangle$, speed equals:",
                [
                    "A) $x'+y'$",
                    "B) $\\sqrt{(x')^2+(y')^2}$",
                    "C) $x'y'$",
                    "D) $|x'|+|y'|$",
                ],
                1,
                ["Speed is magnitude of velocity vector."],
            ),
            frq(
                "Vector $\\mathbf r(t)=\\langle 3t,\\,t^2\\rangle$. Find velocity and acceleration at $t=1$.",
                [
                    "$\\mathbf v=\\langle 3,\\,2t\\rangle$, $\\mathbf a=\\langle 0,\\,2\\rangle$.",
                    "At $t=1$: $\\mathbf v=\\langle3,2\\rangle$, $\\mathbf a=\\langle0,2\\rangle$.",
                ],
                ["$\\mathbf v(1)=\\langle3,2\\rangle$; $\\mathbf a=\\langle0,2\\rangle$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 10: Sequences & Series (BC)",
        CALC,
        "CED Unit 10 (BC): convergence tests, Taylor polynomials, power series.",
        ["unit-10", "bc", "series", "taylor", "convergence"],
        [
            frq(
                "Determine whether $\\sum_{n=1}^\\infty \\dfrac{1}{n^2}$ converges, and name the test.",
                [
                    "$p$-series with $p=2>1$ ⇒ converges.",
                ],
                ["Converges ($p$-series, $p=2$)."],
            ),
            frq(
                "Find the Taylor polynomial of degree $2$ for $f(x)=e^x$ centered at $0$.",
                [
                    "$f=e^x$, $f'=e^x$, $f''=e^x$; at $0$ all equal $1$.",
                    "$P_2(x)=1+x+\\dfrac{x^2}{2}$.",
                ],
                ["$P_2(x)=1+x+x^2/2$."],
            ),
            mcq(
                "The geometric series $\\sum_{n=0}^\\infty r^n$ converges when:",
                [
                    "A) $|r|>1$",
                    "B) $|r|<1$",
                    "C) $r=1$ only",
                    "D) Always",
                ],
                1,
                ["Converges to $1/(1-r)$ for $|r|<1$."],
            ),
            frq(
                "Use the ratio test idea: for $\\sum \\dfrac{n!}{n^n}$, compute $\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|$ and conclude.",
                [
                    "$\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{(n+1)!/(n+1)^{n+1}}{n!/n^n}=\\dfrac{n^n}{(n+1)^n}=\\left(\\dfrac{n}{n+1}\\right)^n\\to1/e<1$.",
                    "Ratio test ⇒ absolute convergence.",
                ],
                ["Limit $=1/e<1$ ⇒ series converges absolutely."],
                tier=3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Calculus Mixed Challenge",
        CALC,
        "Cross-unit Calculus challenges linking derivatives, integrals, and DE / BC topics.",
        ["mixed", "challenge"],
        [
            frq(
                "Let $f$ be continuous with $f(1)=2$ and $f'(x)=\\dfrac{1}{1+x^2}$. Approximate $f(1.1)$ using a local linear approximation at $x=1$.",
                [
                    "$f'(1)=1/(1+1)=1/2$.",
                    "$f(1.1)\\approx2+\\tfrac12(0.1)=2.05$.",
                ],
                ["$\\approx2.05$."],
            ),
            frq(
                "Water flows into a tank at rate $r(t)=20e^{-0.1t}$ L/min. Find how much water enters from $t=0$ to $t=10$.",
                [
                    "$\\int_0^{10}20e^{-0.1t}\\,dt=20\\cdot(-10)[e^{-0.1t}]_0^{10}=-200(e^{-1}-1)=200(1-1/e)$.",
                ],
                ["$200(1-e^{-1})$ liters."],
                tier=3,
            ),
            mcq(
                "If $\\displaystyle\\int_a^b f'(x)\\,dx=7$ and $f(a)=3$, then $f(b)$ equals:",
                [
                    "A) $4$",
                    "B) $7$",
                    "C) $10$",
                    "D) $3$",
                ],
                2,
                ["FTC: $f(b)-f(a)=\\int_a^b f'$ ⇒ $f(b)=3+7=10$."],
            ),
        ],
        minutes=50,
    ),
]


def main():
    data = json.loads(DATA.read_text())
    existing_titles = {q["title"] for q in data["questionnaires"]}
    existing_ids = {q["id"] for q in data["questionnaires"]}

    added = []
    skipped = []
    for q in QUIZZES:
        if q["title"] in existing_titles:
            skipped.append(q["title"])
            continue
        while q["id"] in existing_ids:
            q["id"] = rid("m-quiz")
        existing_ids.add(q["id"])
        for item in q["items"]:
            while item["id"] in existing_ids:
                item["id"] = rid("m-item")
            existing_ids.add(item["id"])
        added.append(q)

    data["questionnaires"].extend(added)
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    stats_n = sum(1 for q in added if q["subject"] == STATS)
    calc_n = sum(1 for q in added if q["subject"] == CALC)
    items = sum(len(q["items"]) for q in added)
    print(f"Added {len(added)} questionnaires ({stats_n} Stats, {calc_n} Calc), {items} items")
    if skipped:
        print(f"Skipped {len(skipped)} duplicate titles")
    for q in added:
        print(f"  + {q['subject']}: {q['title']} ({len(q['items'])} items)")


if __name__ == "__main__":
    main()
