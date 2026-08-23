#!/usr/bin/env python3
"""Batch 3 CED-aligned practice for statistics, calculus, science, and computing."""

import random
import string


BASE_TAGS = [
    "ai-topic-exercises",
    "ced-aligned",
    "generated",
    "with-solutions",
    "batch-3",
]
GEN_NOTE = (
    "Original AI-generated practice aligned to College Board CED. "
    "Not College Board exam verbatim. Includes process + answers. "
    "· 2026-08-23 (batch 3)"
)


def rid(prefix):
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
            "Eliminate wrong choices.",
            "Check definitions, conditions, and units.",
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
            "State the method first.",
            "Check conditions, units, and context.",
            "Answers in blankSteps.",
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


STATS = "AP Statistics"
CALC = "AP Calculus AB/BC"
CHEM = "AP Chemistry"
BIO = "AP Biology"
APES = "AP Environmental Science"
CSA = "AP Computer Science A"
CSP = "AP Computer Science Principles"


QUIZZES = [
    # AP Statistics
    quiz(
        "AI Topic Exercises — Unit 5 Set 2: Sampling Distributions",
        STATS,
        "A second CED-aligned set on sampling distributions, standard error, and Normal approximations.",
        ["unit-5", "sampling-distributions", "standard-error", "set-2"],
        [
            frq(
                r"A population of delivery times has mean \(50\) minutes and standard deviation \(16\) minutes. "
                r"For an SRS of \(64\) deliveries, find the mean and standard deviation of \(\bar{x}\). "
                r"Approximate \(P(\bar{x}>54)\), given \(P(Z>2)=0.0228\), and state the population-size condition.",
                [
                    r"Use \(\mu_{\bar{x}}=\mu\) and \(\sigma_{\bar{x}}=\sigma/\sqrt{n}\).",
                    r"Standardize \(54\) using the sampling-distribution standard deviation.",
                    "For sampling without replacement, check that the sample is no more than 10% of the population.",
                ],
                [
                    r"\(\mu_{\bar{x}}=50\) and \(\sigma_{\bar{x}}=16/\sqrt{64}=2\) minutes.",
                    r"\(z=(54-50)/2=2\), so \(P(\bar{x}>54)\approx0.0228\).",
                    "The population should contain at least 640 deliveries for the 10% condition.",
                ],
                "stats-sampling-mean-set2",
            ),
            mcq(
                "If the sample size used to estimate a population proportion is multiplied by 4, while the population "
                "proportion stays fixed, the standard deviation of the sampling distribution of the sample proportion is",
                [
                    "A) multiplied by 4",
                    "B) multiplied by 2",
                    "C) divided by 2",
                    "D) unchanged",
                ],
                2,
                [
                    r"The standard deviation is \(\sqrt{p(1-p)/n}\).",
                    r"Replacing \(n\) by \(4n\) multiplies the denominator inside the square root by 4.",
                ],
                "stats-standard-error-set2",
                1,
            ),
            frq(
                r"Independent random samples are drawn from populations with \(p_1=0.60\) and \(p_2=0.40\), "
                r"using \(n_1=100\) and \(n_2=150\). Find the mean and standard deviation of "
                r"\(\hat p_1-\hat p_2\). Approximate \(P(\hat p_1-\hat p_2>0.30)\), using "
                r"\(P(Z>1.58)\approx0.057\).",
                [
                    r"The mean difference is \(p_1-p_2\).",
                    "For independent samples, add the two sampling variances.",
                    "Standardize the cutoff 0.30 using the resulting mean and standard deviation.",
                ],
                [
                    r"\(\mu_{\hat p_1-\hat p_2}=0.60-0.40=0.20\).",
                    r"\(\sigma=\sqrt{(0.60)(0.40)/100+(0.40)(0.60)/150}=\sqrt{0.004}\approx0.0632\).",
                    r"\(z=(0.30-0.20)/0.0632\approx1.58\), so the probability is about \(0.057\).",
                ],
                "stats-sampling-difference-set2",
                3,
            ),
            mcq(
                "Which statement correctly describes an unbiased estimator?",
                [
                    "A) It equals the parameter in every random sample.",
                    "B) Its sampling distribution is centered at the parameter.",
                    "C) Its sampling distribution has zero variability.",
                    "D) Its value cannot be affected by sample size.",
                ],
                1,
                [
                    "Bias concerns the center of a sampling distribution over repeated samples.",
                    "An unbiased statistic can differ from the parameter in an individual sample.",
                ],
                "stats-unbiased-estimator-set2",
                1,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 6 Set 2: Inference for Proportions",
        STATS,
        "A second CED-aligned set on confidence intervals and significance tests for one and two proportions.",
        ["unit-6", "inference", "proportions", "set-2"],
        [
            frq(
                r"In an SRS of \(120\) commuters, \(84\) report using public transportation at least weekly. "
                r"Construct a 95% confidence interval for the population proportion using \(z^*=1.96\), "
                "and interpret the interval.",
                [
                    r"Compute \(\hat p=84/120\) and verify at least 10 successes and 10 failures.",
                    r"Use \(\hat p\pm z^*\sqrt{\hat p(1-\hat p)/n}\).",
                    "Interpret the interval as estimating the population proportion, not individual outcomes.",
                ],
                [
                    r"\(\hat p=0.700\), with 84 successes and 36 failures.",
                    r"\(\mathrm{SE}=\sqrt{(0.7)(0.3)/120}\approx0.0418\), so the interval is "
                    r"\(0.700\pm1.96(0.0418)\approx(0.618,0.782)\).",
                    "We are 95% confident that about 61.8% to 78.2% of the commuter population uses public transportation at least weekly.",
                ],
                "stats-one-proportion-ci-set2",
            ),
            mcq(
                r"For a two-proportion \(z\)-test of \(H_0:p_1=p_2\), why is a pooled proportion used in the standard error?",
                [
                    "A) The null hypothesis treats the two population proportions as one common value.",
                    "B) Pooling guarantees that the alternative hypothesis is true.",
                    "C) Confidence intervals always require pooling.",
                    "D) Pooling removes the need for random samples.",
                ],
                0,
                [
                    r"Under \(H_0\), both samples estimate the same population proportion.",
                    "Combining successes and observations estimates that common null value.",
                ],
                "stats-pooled-proportion-set2",
            ),
            frq(
                r"Group A has \(72\) successes among \(120\) observations; Group B has \(50\) successes among "
                r"\(100\) observations. Test \(H_0:p_A=p_B\) against \(H_a:p_A\ne p_B\). Compute the pooled "
                r"proportion, standard error, \(z\), and conclusion if the two-sided \(p\)-value is \(0.137\).",
                [
                    "Pool the successes and sample sizes because the null claims equal proportions.",
                    r"Use the pooled standard error for \(\hat p_A-\hat p_B\).",
                    "Compare the stated p-value with a conventional 0.05 significance level.",
                ],
                [
                    r"\(\hat p_c=(72+50)/(120+100)=122/220\approx0.5545\).",
                    r"\(\mathrm{SE}=\sqrt{(0.5545)(0.4455)(1/120+1/100)}\approx0.0673\), and "
                    r"\(z=(0.60-0.50)/0.0673\approx1.49\).",
                    r"Because \(p=0.137>0.05\), fail to reject \(H_0\); the data do not provide convincing evidence "
                    "that the population proportions differ.",
                ],
                "stats-two-proportion-test-set2",
                3,
            ),
            mcq(
                r"A test of \(H_0:p=0.40\) versus \(H_a:p>0.40\) produces \(p=0.032\). Which interpretation is correct?",
                [
                    r"A) There is a 3.2% probability that \(H_0\) is true.",
                    r"B) If \(p=0.40\), the probability of a result at least as supportive of \(p>0.40\) is 3.2%.",
                    "C) Exactly 3.2% of the population has the characteristic.",
                    r"D) The probability that \(p>0.40\) is 96.8%.",
                ],
                1,
                [
                    "A p-value is computed under the assumption that the null hypothesis is true.",
                    "It measures the probability of the observed statistic or one more extreme in the direction of the alternative.",
                ],
                "stats-pvalue-interpretation-set2",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Units 8–9 Set 2: Chi-Square & Regression Inference",
        STATS,
        "A second CED-aligned set combining chi-square procedures with inference for a regression slope.",
        ["unit-8", "unit-9", "chi-square", "regression-inference", "set-2"],
        [
            mcq(
                r"What are the degrees of freedom for a chi-square test of independence using a \(3\times4\) table?",
                ["A) 5", "B) 6", "C) 7", "D) 12"],
                1,
                [
                    r"For an \(r\times c\) table, \(df=(r-1)(c-1)\).",
                    r"Here, \(df=(3-1)(4-1)=6\).",
                ],
                "stats-chi-square-df-set2",
                1,
            ),
            frq(
                r"In a two-way table with total \(n=200\), one cell lies in a row with total \(80\) and a column "
                r"with total \(75\). Its observed count is \(36\). Find the expected count and that cell's "
                r"contribution to \(\chi^2\).",
                [
                    r"Use \(E=(\text{row total})(\text{column total})/n\).",
                    r"Compute the contribution \((O-E)^2/E\).",
                ],
                [
                    r"\(E=(80)(75)/200=30\).",
                    r"The contribution is \((36-30)^2/30=36/30=1.20\).",
                ],
                "stats-chi-square-contribution-set2",
            ),
            mcq(
                r"Software reports a least-squares slope \(b=0.84\) with \(\mathrm{SE}_b=0.21\). "
                r"The test statistic for \(H_0:\beta=0\) is",
                ["A) 0.1764", "B) 0.25", "C) 4.00", "D) 5.05"],
                2,
                [
                    r"Use \(t=(b-0)/\mathrm{SE}_b\).",
                    r"\(t=0.84/0.21=4.00\).",
                ],
                "stats-regression-t-set2",
            ),
            frq(
                r"A regression of cooling time on fan speed gives slope \(b=-1.80\), "
                r"\(\mathrm{SE}_b=0.50\), and \(df=22\). Compute the test statistic for "
                r"\(H_0:\beta=0\), and construct a 95% confidence interval using \(t^*=2.074\). "
                "State the conclusion and name the regression-inference conditions.",
                [
                    r"Compute \(t=b/\mathrm{SE}_b\).",
                    r"Construct \(b\pm t^*\mathrm{SE}_b\).",
                    "Use LINE: linear form, independent observations, Normal residuals, and equal residual variance.",
                ],
                [
                    r"\(t=-1.80/0.50=-3.60\).",
                    r"The interval is \(-1.80\pm2.074(0.50)\approx(-2.84,-0.76)\).",
                    "Because 0 is not in the interval, the data provide evidence of a negative population slope.",
                    "Check linearity, independence, approximately Normal residuals, and roughly equal residual variance.",
                ],
                "stats-regression-inference-set2",
                3,
            ),
        ],
    ),

    # AP Calculus AB/BC
    quiz(
        "AI Topic Exercises — Unit 1 Set 2: Limits & Continuity",
        CALC,
        "A second CED-aligned set on algebraic limits, infinite limits, continuity, and the Intermediate Value Theorem.",
        ["unit-1", "limits", "continuity", "set-2"],
        [
            frq(
                r"Evaluate \(\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}\), showing the algebra that resolves the indeterminate form.",
                [
                    r"Factor \(x^2-9=(x-3)(x+3)\).",
                    r"For \(x\ne3\), cancel \(x-3\), then evaluate the remaining expression as \(x\to3\).",
                ],
                [r"The limit is \(\lim_{x\to3}(x+3)=6\)."],
                "calc-factor-limit-set2",
                1,
            ),
            mcq(
                r"What is \(\displaystyle\lim_{x\to2}\frac{1}{(x-2)^2}\)?",
                [r"A) \(-\infty\)", r"B) \(0\)", r"C) \(+\infty\)", "D) The one-sided limits have opposite signs"],
                2,
                [
                    r"The squared denominator approaches \(0\) through positive values from both sides.",
                    "A positive numerator divided by an arbitrarily small positive number grows without bound.",
                ],
                "calc-infinite-limit-set2",
                1,
            ),
            frq(
                r"Define \(f(x)=\frac{x^2-1}{x-1}\) for \(x\ne1\) and \(f(1)=k\). "
                r"Find \(k\) so that \(f\) is continuous at \(x=1\), and justify using the definition of continuity at a point.",
                [
                    r"Factor the numerator and simplify the expression for \(x\ne1\).",
                    r"Continuity requires \(\lim_{x\to1}f(x)=f(1)\).",
                ],
                [
                    r"For \(x\ne1\), \(f(x)=x+1\), so \(\lim_{x\to1}f(x)=2\).",
                    r"Choose \(k=2\); then the limit exists and equals \(f(1)\).",
                ],
                "calc-removable-continuity-set2",
            ),
            mcq(
                r"A function \(g\) is continuous on \([1,5]\), with \(g(1)=-3\) and \(g(5)=4\). "
                "Which conclusion is guaranteed?",
                [
                    r"A) There is a \(c\in(1,5)\) such that \(g(c)=0\).",
                    r"B) There is a \(c\in(1,5)\) such that \(g'(c)=0\).",
                    "C) The function is increasing on the entire interval.",
                    "D) The function has exactly one zero.",
                ],
                0,
                [
                    "Zero lies between the endpoint function values.",
                    "The Intermediate Value Theorem guarantees at least one matching function value, but not uniqueness or differentiability.",
                ],
                "calc-ivt-set2",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Units 4–5 Set 2: Applications of Derivatives",
        CALC,
        "A second CED-aligned set on related rates, motion, optimization, and derivative-based analysis.",
        ["unit-4", "unit-5", "derivative-applications", "optimization", "set-2"],
        [
            frq(
                r"A 13-foot ladder rests against a vertical wall. The bottom slides away from the wall at "
                r"\(2\) ft/s. How fast is the top moving when the bottom is \(5\) feet from the wall?",
                [
                    r"Let \(x\) and \(y\) be the horizontal and vertical distances; \(x^2+y^2=169\).",
                    r"When \(x=5\), the positive height is \(y=12\).",
                    r"Differentiate with respect to time and solve for \(dy/dt\).",
                ],
                [
                    r"\(2x\,dx/dt+2y\,dy/dt=0\).",
                    r"\(dy/dt=-(5)(2)/12=-5/6\) ft/s, so the top moves downward at \(5/6\) ft/s.",
                ],
                "calc-related-rates-set2",
            ),
            mcq(
                r"A particle has velocity \(v(t)=t^2-4t+3\). At \(t=4\), the particle is",
                [
                    "A) moving left and speeding up",
                    "B) moving left and slowing down",
                    "C) moving right and slowing down",
                    "D) moving right and speeding up",
                ],
                3,
                [
                    r"\(v(4)=16-16+3=3>0\), so the particle moves right.",
                    r"Acceleration is \(a(t)=2t-4\), and \(a(4)=4>0\).",
                    "Velocity and acceleration have the same sign, so speed is increasing.",
                ],
                "calc-motion-signs-set2",
            ),
            frq(
                r"Equal squares of side \(x\) are cut from the corners of a \(12\)-inch by \(12\)-inch sheet, "
                r"and the sides are folded to make an open box. Find the value of \(x\) that maximizes volume "
                "and give the maximum volume.",
                [
                    r"The physical domain is \(0<x<6\), and \(V(x)=x(12-2x)^2\).",
                    r"Differentiate and factor: \(V'(x)=(12-2x)(12-6x)\).",
                    "Evaluate the interior critical point and compare with limiting endpoint volumes.",
                ],
                [
                    r"The physical interior critical point is \(x=2\) inches.",
                    r"The endpoint volumes approach 0, while \(V(2)=2(8)^2=128\text{ in}^3\), the maximum.",
                ],
                "calc-optimization-box-set2",
                3,
            ),
            mcq(
                r"If \(f'(x)>0\) and \(f''(x)<0\) throughout an interval, then \(f\) is",
                [
                    "A) increasing and concave down",
                    "B) increasing and concave up",
                    "C) decreasing and concave down",
                    "D) decreasing and concave up",
                ],
                0,
                [
                    "The sign of the first derivative determines increasing or decreasing behavior.",
                    "The sign of the second derivative determines concavity.",
                ],
                "calc-derivative-analysis-set2",
                1,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Units 6–10 Set 2: Integration & Series",
        CALC,
        "A second CED-aligned set on accumulation, net change, volume, and one BC sequences-and-series application.",
        ["unit-6", "unit-8", "unit-10", "integration", "bc-series", "set-2"],
        [
            frq(
                r"Let \(F(x)=\displaystyle\int_0^{x^2}\cos(t^3)\,dt\). Find \(F'(x)\).",
                [
                    r"Apply the Fundamental Theorem of Calculus to the variable upper limit.",
                    r"Then apply the chain rule to \(x^2\).",
                ],
                [r"\(F'(x)=\cos((x^2)^3)(2x)=2x\cos(x^6)\)."],
                "calc-ftc-chain-set2",
            ),
            mcq(
                r"Water enters a tank at rate \(R(t)\) liters per minute and leaves at a constant rate of "
                r"3 liters per minute. If the tank initially contains 40 liters, the amount after 5 minutes is",
                [
                    r"A) \(\int_0^5 R(t)\,dt-15\)",
                    r"B) \(40+\int_0^5(R(t)-3)\,dt\)",
                    r"C) \(40+R(5)-3\)",
                    r"D) \(40+\int_0^5(R(t)+3)\,dt\)",
                ],
                1,
                [
                    "Final amount equals initial amount plus accumulated net rate.",
                    r"The net rate is \(R(t)-3\), so integrate it over the five-minute interval.",
                ],
                "calc-net-change-set2",
            ),
            frq(
                r"The region bounded by \(y=\sqrt{x}\) and \(y=x^2\) for \(0\le x\le1\) is revolved about "
                r"the \(x\)-axis. Find the exact volume.",
                [
                    r"On \(0<x<1\), \(\sqrt{x}\) is the outer radius and \(x^2\) is the inner radius.",
                    r"Use washers: \(V=\pi\int_0^1[(\sqrt{x})^2-(x^2)^2]\,dx\).",
                ],
                [
                    r"\(V=\pi\int_0^1(x-x^4)\,dx=\pi[\,x^2/2-x^5/5\,]_0^1\).",
                    r"\(V=\pi(1/2-1/5)=3\pi/10\).",
                ],
                "calc-washer-volume-set2",
                3,
            ),
            mcq(
                r"For AP Calculus BC, what is the interval of convergence of "
                r"\(\displaystyle\sum_{n=1}^{\infty}\frac{(x-2)^n}{3^n n}\)?",
                [r"A) \((-1,5)\)", r"B) \([-1,5)\)", r"C) \((-1,5]\)", r"D) \([-1,5]\)"],
                1,
                [
                    r"The ratio or root test gives \(|x-2|<3\), so first consider \((-1,5)\).",
                    r"At \(x=5\), the series is harmonic and diverges.",
                    r"At \(x=-1\), it is alternating harmonic and converges.",
                ],
                "calc-bc-power-series-set2",
                3,
            ),
        ],
    ),

    # AP Chemistry
    quiz(
        "AI Topic Exercises — Unit 7 Set 2: Equilibrium",
        CHEM,
        "A second CED-aligned set on reaction quotients, equilibrium shifts, equilibrium constants, and solubility.",
        ["unit-7", "equilibrium", "reaction-quotient", "solubility", "set-2"],
        [
            frq(
                r"For \(\mathrm{H_2(g)+I_2(g)\rightleftharpoons2HI(g)}\), \(K_c=50\). At one instant, "
                r"\([\mathrm{H_2}]=0.10\text{ M}\), \([\mathrm{I_2}]=0.10\text{ M}\), and "
                r"\([\mathrm{HI}]=0.50\text{ M}\). Calculate \(Q_c\), predict the direction of net change, "
                "and explain what happens to the forward and reverse rates as equilibrium is approached.",
                [
                    r"Write \(Q_c=[\mathrm{HI}]^2/([\mathrm{H_2}][\mathrm{I_2}])\).",
                    r"Compare \(Q_c\) with \(K_c\).",
                    "Connect the concentration changes to collision frequencies and the two reaction rates.",
                ],
                [
                    r"\(Q_c=(0.50)^2/[(0.10)(0.10)]=25\).",
                    r"Because \(Q_c<K_c\), net reaction proceeds right: HI increases while H₂ and I₂ decrease.",
                    "The forward rate decreases and the reverse rate increases until the rates become equal at equilibrium.",
                ],
                "chem-reaction-quotient-set2",
            ),
            mcq(
                "A catalyst is added to a closed reaction mixture that is already at equilibrium. Which statement is correct?",
                [
                    "A) The equilibrium constant increases.",
                    "B) The equilibrium shifts toward products.",
                    "C) Forward and reverse rates both increase, but equilibrium concentrations do not change.",
                    "D) Only the forward activation energy decreases.",
                ],
                2,
                [
                    "A catalyst supplies an alternate pathway for both reaction directions.",
                    "It changes kinetics, not the equilibrium constant or equilibrium composition.",
                ],
                "chem-equilibrium-catalyst-set2",
                1,
            ),
            frq(
                r"The solubility-product constant of \(\mathrm{CaF_2}\) is \(K_{sp}=3.2\times10^{-11}\) at "
                r"a certain temperature. Calculate its molar solubility in pure water and the equilibrium "
                r"fluoride-ion concentration.",
                [
                    r"Write \(\mathrm{CaF_2(s)\rightleftharpoons Ca^{2+}+2F^-}\).",
                    r"If the molar solubility is \(s\), then \([\mathrm{Ca^{2+}}]=s\) and \([\mathrm{F^-}]=2s\).",
                    r"Substitute into \(K_{sp}=[\mathrm{Ca^{2+}}][\mathrm{F^-}]^2\).",
                ],
                [
                    r"\(K_{sp}=s(2s)^2=4s^3=3.2\times10^{-11}\).",
                    r"\(s=(8.0\times10^{-12})^{1/3}=2.0\times10^{-4}\text{ M}\).",
                    r"\([\mathrm{F^-}]=2s=4.0\times10^{-4}\text{ M}\).",
                ],
                "chem-ksp-set2",
                3,
            ),
            mcq(
                r"If \(K=4.0\) for \(2\mathrm{A(g)}\rightleftharpoons\mathrm{B(g)}\), what is \(K\) for "
                r"\(\mathrm{B(g)}\rightleftharpoons2\mathrm{A(g)}\)?",
                ["A) 0.25", "B) 0.50", "C) 2.0", "D) 4.0"],
                0,
                [
                    "Reversing a reaction takes the reciprocal of its equilibrium constant.",
                    r"\(K_{\mathrm{reverse}}=1/4.0=0.25\).",
                ],
                "chem-equilibrium-constant-transform-set2",
                1,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 8 Set 2: Acids & Bases",
        CHEM,
        "A second CED-aligned set on conjugate pairs, weak-base equilibrium, buffers, and stoichiometric buffer changes.",
        ["unit-8", "acids-bases", "buffers", "ph", "set-2"],
        [
            mcq(
                r"In \(\mathrm{NH_3+H_2O\rightleftharpoons NH_4^++OH^-}\), which pair is a conjugate acid-base pair?",
                [
                    r"A) \(\mathrm{NH_3}\) and \(\mathrm{OH^-}\)",
                    r"B) \(\mathrm{H_2O}\) and \(\mathrm{NH_4^+}\)",
                    r"C) \(\mathrm{NH_3}\) and \(\mathrm{NH_4^+}\)",
                    r"D) \(\mathrm{NH_4^+}\) and \(\mathrm{OH^-}\)",
                ],
                2,
                [
                    "Members of a conjugate pair differ by one proton.",
                    r"\(\mathrm{NH_3}\) accepts a proton to become \(\mathrm{NH_4^+}\).",
                ],
                "chem-conjugate-pairs-set2",
                1,
            ),
            frq(
                r"Calculate the pH and percent ionization of \(0.200\text{ M }\mathrm{NH_3}\), given "
                r"\(K_b=1.8\times10^{-5}\). Assume \(25^\circ\text{C}\) and verify the small-\(x\) approximation.",
                [
                    r"Let \(x=[\mathrm{OH^-}]\) and use \(K_b=x^2/(0.200-x)\).",
                    r"Approximate \(x\approx\sqrt{K_bC}\), then calculate pOH and pH.",
                    r"Percent ionization is \(100x/C\); compare \(x/C\) with 5%.",
                ],
                [
                    r"\(x\approx\sqrt{(1.8\times10^{-5})(0.200)}=1.90\times10^{-3}\text{ M}\).",
                    r"\(\mathrm{pOH}=2.72\), so \(\mathrm{pH}=14.00-2.72=11.28\).",
                    r"Percent ionization \(=100(0.00190/0.200)=0.95\%\), so the small-\(x\) approximation is valid.",
                ],
                "chem-weak-base-set2",
                3,
            ),
            mcq(
                r"A buffer contains comparable amounts of \(\mathrm{HA}\) and \(\mathrm{A^-}\). A small amount of "
                r"strong acid is added. Which buffer component reacts most directly with the added \(\mathrm{H_3O^+}\)?",
                [
                    r"A) \(\mathrm{A^-}\), producing more HA",
                    r"B) \(\mathrm{HA}\), producing more A⁻",
                    r"C) Water only, leaving the buffer ratio unchanged",
                    r"D) Both components decompose completely",
                ],
                0,
                [
                    "The basic member of the conjugate pair consumes added acid.",
                    r"\(\mathrm{A^-+H_3O^+\rightarrow HA+H_2O}\).",
                ],
                "chem-buffer-response-set2",
            ),
            frq(
                r"A buffer initially contains \(0.0300\) mol \(\mathrm{CH_3COOH}\) and \(0.0200\) mol "
                r"\(\mathrm{CH_3COO^-}\). Then \(0.0050\) mol NaOH is added with negligible volume change. "
                r"Calculate the new pH, using \(pK_a=4.76\).",
                [
                    "Use neutralization stoichiometry before applying the buffer equation.",
                    r"Hydroxide consumes HA and produces an equal amount of A⁻.",
                    r"Use \(\mathrm{pH}=pK_a+\log(n_{\mathrm{A^-}}/n_{\mathrm{HA}})\) because volume cancels.",
                ],
                [
                    r"After reaction, \(n_{\mathrm{HA}}=0.0300-0.0050=0.0250\) mol and "
                    r"\(n_{\mathrm{A^-}}=0.0200+0.0050=0.0250\) mol.",
                    r"The ratio is 1, so \(\mathrm{pH}=4.76+\log(1)=4.76\).",
                ],
                "chem-buffer-stoichiometry-set2",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 9 Set 2: Electrochemistry",
        CHEM,
        "A second CED-aligned set on galvanic cells, cell potential, free energy, concentration effects, and electrolysis.",
        ["unit-9", "electrochemistry", "galvanic-cells", "electrolysis", "set-2"],
        [
            mcq(
                "Which statement is true for both galvanic and electrolytic cells?",
                [
                    "A) Oxidation occurs at the cathode.",
                    "B) Electrons travel through the external circuit from anode to cathode.",
                    "C) The anode is always negative.",
                    "D) The cell reaction is always thermodynamically favorable without external energy.",
                ],
                1,
                [
                    "Anode and cathode are defined by reaction type: oxidation at the anode and reduction at the cathode.",
                    "Electrons released by oxidation flow externally toward the reduction half-cell.",
                ],
                "chem-electrode-definitions-set2",
                1,
            ),
            frq(
                r"A standard galvanic cell uses \(\mathrm{Fe^{2+}/Fe}\), \(E^\circ=-0.44\text{ V}\), and "
                r"\(\mathrm{Cu^{2+}/Cu}\), \(E^\circ=+0.34\text{ V}\). Write the spontaneous net ionic equation, "
                r"calculate \(E^\circ_{\mathrm{cell}}\), and calculate \(\Delta G^\circ\). Use "
                r"\(F=96485\text{ C mol}^{-1}\).",
                [
                    "The more positive reduction potential identifies the cathode reduction.",
                    r"Use \(E^\circ_{\mathrm{cell}}=E^\circ_{\mathrm{cathode}}-E^\circ_{\mathrm{anode}}\).",
                    r"Use \(\Delta G^\circ=-nFE^\circ_{\mathrm{cell}}\) with the transferred-electron count.",
                ],
                [
                    r"\(\mathrm{Fe(s)+Cu^{2+}(aq)\rightarrow Fe^{2+}(aq)+Cu(s)}\); \(n=2\).",
                    r"\(E^\circ_{\mathrm{cell}}=0.34-(-0.44)=0.78\text{ V}\).",
                    r"\(\Delta G^\circ=-(2)(96485)(0.78)=-1.51\times10^5\text{ J mol}^{-1}\), or about "
                    r"\(-151\text{ kJ mol}^{-1}\).",
                ],
                "chem-cell-potential-free-energy-set2",
                3,
            ),
            mcq(
                r"For the cell reaction \(\mathrm{Zn(s)+Cu^{2+}(aq)\rightarrow Zn^{2+}(aq)+Cu(s)}\), which "
                "change lowers the cell potential at constant temperature?",
                [
                    r"A) Increasing \([\mathrm{Cu^{2+}}]\)",
                    r"B) Decreasing \([\mathrm{Zn^{2+}}]\)",
                    r"C) Increasing \([\mathrm{Zn^{2+}}]\)",
                    "D) Adding more solid Zn while Zn is already present",
                ],
                2,
                [
                    r"The reaction quotient is \(Q=[\mathrm{Zn^{2+}}]/[\mathrm{Cu^{2+}}]\).",
                    r"From the Nernst relation \(E=E^\circ-(RT/nF)\ln Q\), increasing \(Q\) lowers \(E\).",
                    "The activity of a pure solid does not enter Q.",
                ],
                "chem-nernst-direction-set2",
            ),
            frq(
                r"Molten \(\mathrm{Al^{3+}}\) is electrolyzed with a \(5.00\text{ A}\) current for "
                r"\(1930\text{ s}\). Calculate the mass of Al produced. Use \(F=96485\text{ C mol}^{-1}\) "
                r"and \(M_{\mathrm{Al}}=26.98\text{ g mol}^{-1}\).",
                [
                    r"Calculate charge with \(Q=It\), then convert charge to moles of electrons.",
                    r"Use \(\mathrm{Al^{3+}+3e^-\rightarrow Al}\).",
                    "Convert moles of aluminum to mass.",
                ],
                [
                    r"\(Q=(5.00)(1930)=9650\text{ C}\approx0.1000\text{ mol }e^-\).",
                    r"\(n(\mathrm{Al})=0.1000/3=0.0333\text{ mol}\).",
                    r"Mass \(=(0.0333)(26.98)=0.899\text{ g Al}\).",
                ],
                "chem-electrolysis-set2",
                3,
            ),
        ],
    ),

    # AP Biology
    quiz(
        "AI Topic Exercises — Unit 3 Set 2: Cellular Energetics",
        BIO,
        "A second CED-aligned set on enzymes, photosynthesis, respiration, chemiosmosis, and experimental design.",
        ["unit-3", "cellular-energetics", "photosynthesis", "respiration", "set-2"],
        [
            mcq(
                "An enzyme loses most activity after its solution changes from pH 7 to pH 2. The best explanation is that",
                [
                    "A) the acidic solution supplies the enzyme with extra activation energy",
                    "B) changes in side-chain ionization disrupt interactions that maintain the active site's shape",
                    "C) the enzyme changes the reaction's overall free-energy change",
                    "D) every peptide bond is necessarily hydrolyzed immediately",
                ],
                1,
                [
                    "pH changes the protonation and charge of amino-acid side chains.",
                    "Altered ionic and hydrogen-bond interactions can change tertiary structure and substrate binding.",
                ],
                "bio-enzyme-ph-set2",
            ),
            frq(
                "A herbicide blocks electron transfer from photosystem II to the rest of the thylakoid electron "
                "transport chain. Predict the short-term effects on oxygen release, NADPH production, the proton "
                "gradient, and carbon fixation. Explain each prediction.",
                [
                    "Trace electrons from water through photosystem II toward NADP⁺.",
                    "Relate electron transport and water oxidation to proton-gradient formation.",
                    "Connect ATP and NADPH supply to the Calvin cycle.",
                ],
                [
                    "Oxygen release decreases because sustained photosystem II activity and water oxidation are blocked.",
                    "Linear electron flow to NADP⁺ decreases, so NADPH production declines.",
                    "Proton-gradient formation and ATP production decline, although cyclic flow around photosystem I may retain some ATP production.",
                    "Carbon fixation declines because the Calvin cycle lacks sufficient ATP and NADPH.",
                ],
                "bio-photosynthesis-inhibitor-set2",
                3,
            ),
            mcq(
                "During oxidative phosphorylation in mitochondria, ATP synthase is powered most directly by",
                [
                    "A) carbon dioxide diffusing into the matrix",
                    "B) protons moving down their electrochemical gradient into the matrix",
                    "C) glucose binding directly to ATP synthase",
                    "D) oxygen donating electrons to NADH",
                ],
                1,
                [
                    "The electron transport chain pumps protons from the matrix to the intermembrane space.",
                    "Their return through ATP synthase couples the gradient's potential energy to ATP formation.",
                ],
                "bio-chemiosmosis-set2",
                1,
            ),
            frq(
                "A student compares oxygen-consumption rates of germinating and nongerminating peas in sealed "
                "respirometers. Explain the purpose of KOH in each apparatus, predict which group moves the indicator "
                "fluid farther, and identify one essential control variable and one negative control.",
                [
                    "Respiration consumes oxygen and produces carbon dioxide.",
                    "KOH removes carbon dioxide so gas-volume change reflects oxygen uptake.",
                    "A valid comparison holds environmental and apparatus variables constant.",
                ],
                [
                    "KOH absorbs produced CO₂; the resulting pressure decrease measures net O₂ consumption.",
                    "Germinating peas should move the fluid farther because active growth has a higher respiration rate.",
                    "Keep temperature, time, chamber volume, and organism volume or mass controlled.",
                    "A respirometer containing an equal volume of glass beads can serve as a negative control for nonbiological pressure changes.",
                ],
                "bio-respirometer-set2",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Units 5–6 Set 2: Genetics",
        BIO,
        "A second CED-aligned set on meiosis, linkage, mutation, gene expression, and experimental evidence.",
        ["unit-5", "unit-6", "genetics", "gene-expression", "set-2"],
        [
            mcq(
                "If homologous chromosomes fail to separate during meiosis I, what chromosome-number pattern is "
                "expected among the four resulting gametes?",
                [
                    "A) All four have the normal haploid number.",
                    "B) Two are normal, one is n + 1, and one is n − 1.",
                    "C) Two are n + 1 and two are n − 1.",
                    "D) All four are diploid.",
                ],
                2,
                [
                    "Nondisjunction in meiosis I sends both homologs to one pole and none to the other.",
                    "After meiosis II, every gamete is aneuploid: half have an extra chromosome and half lack one.",
                ],
                "bio-nondisjunction-set2",
            ),
            frq(
                "A testcross of a dihybrid produces offspring corresponding to gametes AB, ab, Ab, and aB in counts "
                "42, 38, 12, and 8, respectively. Identify the parental and recombinant classes, calculate recombination "
                "frequency, and estimate the map distance between the genes.",
                [
                    "The most frequent classes usually represent parental allele combinations.",
                    "Add the less frequent recombinant classes and divide by total offspring.",
                    "For linked genes over short distances, 1% recombination is approximately 1 map unit.",
                ],
                [
                    "AB and ab are parental classes; Ab and aB are recombinant classes.",
                    r"Recombination frequency \(=(12+8)/(42+38+12+8)=20/100=0.20\), or 20%.",
                    "The estimated map distance is about 20 centimorgans.",
                ],
                "bio-linkage-mapping-set2",
                3,
            ),
            mcq(
                "A single nucleotide is inserted near the beginning of a protein-coding sequence. Which effect is most likely?",
                [
                    "A) Only one amino acid changes and all later codons remain the same.",
                    "B) The reading frame shifts, often changing many downstream amino acids and possibly introducing an early stop.",
                    "C) DNA replication stops in every cell of the organism.",
                    "D) The gene is guaranteed to become more highly expressed.",
                ],
                1,
                [
                    "An insertion not divisible by three changes how downstream nucleotides are grouped into codons.",
                    "The altered frame commonly changes the downstream protein sequence.",
                ],
                "bio-frameshift-set2",
            ),
            frq(
                "Researchers suspect that a bacterial gene increases resistance to antibiotic X. Design a transformation "
                "experiment using a plasmid carrying the gene. Specify experimental and control treatments, the result "
                "that would support the claim, and one reason an empty-plasmid control is necessary.",
                [
                    "Change only whether the candidate gene is present while keeping strain, plasmid backbone, and treatment matched.",
                    "Include plates that verify cell viability and antibiotic selection.",
                    "Measure colony formation or growth quantitatively.",
                ],
                [
                    "Transform matched bacteria with either the gene-containing plasmid or an empty plasmid, then plate equal amounts on medium with antibiotic X.",
                    "Also plate both transformed groups without antibiotic to confirm comparable viability and transformation handling.",
                    "Substantially greater survival or colony number for the gene-plasmid group on antibiotic supports the resistance claim.",
                    "The empty-plasmid control distinguishes an effect of the inserted gene from effects of the vector or transformation procedure.",
                ],
                "bio-transformation-design-set2",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 8 Set 2: Ecology",
        BIO,
        "A second CED-aligned set on population regulation, mark-recapture, succession, and nutrient limitation.",
        ["unit-8", "ecology", "populations", "ecosystems", "set-2"],
        [
            mcq(
                "Which factor is most clearly density dependent in a deer population?",
                [
                    "A) A hurricane crossing the habitat",
                    "B) Competition for food as deer abundance rises",
                    "C) A volcanic eruption",
                    "D) An unusually early freeze affecting the whole region",
                ],
                1,
                [
                    "A density-dependent factor has a stronger per-capita effect as population density changes.",
                    "Competition intensifies when more individuals share limited resources.",
                ],
                "bio-density-dependence-set2",
                1,
            ),
            frq(
                "Ecologists mark and release 80 turtles. Later they capture 120 turtles, of which 20 are marked. "
                "Estimate population size using the Lincoln-Petersen method, and state two assumptions whose violation "
                "could bias the estimate.",
                [
                    r"Use \(\hat N=(\text{first marked})(\text{second sample total})/(\text{marked recaptured})\).",
                    "The method assumes marked individuals mix and have the same recapture probability as unmarked individuals.",
                ],
                [
                    r"\(\hat N=(80)(120)/20=480\) turtles.",
                    "Valid assumptions include no major births, deaths, immigration, or emigration between samples; marks are retained and recognized; marked animals mix fully; and capture probabilities are similar.",
                ],
                "bio-mark-recapture-set2",
            ),
            mcq(
                "A glacier retreats and exposes bare rock with no developed soil. The earliest community development is",
                [
                    "A) secondary succession initiated by mature trees",
                    "B) primary succession initiated by pioneer organisms such as lichens",
                    "C) competitive exclusion with no soil formation",
                    "D) logistic growth at carrying capacity",
                ],
                1,
                [
                    "Primary succession begins where a substrate lacks an established soil community.",
                    "Pioneer organisms contribute to weathering and organic-matter accumulation.",
                ],
                "bio-primary-succession-set2",
                1,
            ),
            frq(
                "Investigators want to determine whether nitrogen or phosphorus limits algal growth in a lake. Design "
                "a replicated experiment with a control and appropriate nutrient treatments. State the response variable "
                "and explain how results would identify the limiting nutrient or colimitation.",
                [
                    "Use comparable enclosures and randomly assign no-addition, +N, +P, and +N+P treatments.",
                    "Replicate each treatment and hold light, temperature, water volume, and starting community as similar as possible.",
                    "Compare a quantitative measure of algal production among treatments.",
                ],
                [
                    "Measure chlorophyll-a, algal biomass, or productivity after equal treatment duration.",
                    "Growth only with +N identifies nitrogen limitation; growth only with +P identifies phosphorus limitation.",
                    "A response only or much greater with +N+P indicates colimitation or sequential limitation; no treatment response suggests another factor limits growth.",
                ],
                "bio-nutrient-limitation-set2",
                3,
            ),
        ],
    ),

    # AP Environmental Science
    quiz(
        "AI Topic Exercises — Units 3–4 Set 2: Populations & Earth Systems",
        APES,
        "A second CED-aligned set on human population change, climate processes, and soil-water relationships.",
        ["unit-3", "unit-4", "populations", "earth-systems", "set-2"],
        [
            mcq(
                "During the demographic transition, a country commonly experiences its fastest population growth when",
                [
                    "A) birth and death rates are both high",
                    "B) death rates decline while birth rates remain high",
                    "C) birth rates decline below death rates immediately after industrialization begins",
                    "D) birth and death rates are both low and equal",
                ],
                1,
                [
                    "Improved sanitation, food supply, and medicine often lower mortality first.",
                    "If fertility remains high, the gap between births and deaths creates rapid natural increase.",
                ],
                "apes-demographic-transition-set2",
            ),
            frq(
                "A human population is growing at 1.4% per year. Estimate its doubling time with the rule of 70, "
                "and explain why the estimate may not accurately predict the population 100 years from now.",
                [
                    "Divide 70 by the annual percentage growth rate.",
                    "The estimate assumes a constant exponential growth rate.",
                ],
                [
                    r"Doubling time \(\approx70/1.4=50\) years.",
                    "Fertility, mortality, migration, policy, resource limits, disease, and age structure can change the growth rate, so two constant-rate doublings are not guaranteed.",
                ],
                "apes-doubling-time-set2",
            ),
            mcq(
                "A rain-shadow desert most often forms on the",
                [
                    "A) windward side of a mountain, where rising air warms and dries",
                    "B) leeward side of a mountain, where descending air warms and becomes relatively dry",
                    "C) ocean floor, where air cannot circulate",
                    "D) equatorward side of every lake",
                ],
                1,
                [
                    "Moist air rises on the windward side, cools, and loses precipitation.",
                    "The drier air descends leeward, warms adiabatically, and lowers relative humidity.",
                ],
                "apes-rain-shadow-set2",
                1,
            ),
            frq(
                "Two watershed soils have equal depth and slope. Soil A is mostly sand; Soil B is mostly clay. Compare "
                "their infiltration, permeability, and water-holding capacity. Predict one downstream effect if the "
                "clay-rich watershed is paved extensively.",
                [
                    "Relate particle size to pore size and drainage.",
                    "Distinguish rapid transmission of water from retention of water.",
                    "Connect impervious cover to runoff volume and peak discharge.",
                ],
                [
                    "Sandy Soil A generally has larger pores, greater permeability and infiltration, and lower water-holding capacity.",
                    "Clay-rich Soil B has small pores, slower permeability and infiltration, and greater water retention.",
                    "Paving further reduces infiltration and increases rapid runoff, which can raise peak stream discharge, flooding, erosion, and pollutant transport.",
                ],
                "apes-soils-watershed-set2",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Units 7–8 Set 2: Pollution",
        APES,
        "A second CED-aligned set on water pollution, toxicity, oxygen demand, and wastewater treatment.",
        ["unit-7", "unit-8", "pollution", "water-quality", "set-2"],
        [
            mcq(
                "A large discharge of untreated, biodegradable sewage into a stream most directly raises",
                [
                    "A) dissolved oxygen because decomposers stop respiring",
                    "B) biochemical oxygen demand because microbes consume oxygen while decomposing organic matter",
                    "C) salinity because all sewage is seawater",
                    "D) stratospheric ozone because bacteria emit CFCs",
                ],
                1,
                [
                    "Biochemical oxygen demand measures oxygen used by microorganisms decomposing organic material.",
                    "More biodegradable waste stimulates microbial respiration and can lower dissolved oxygen.",
                ],
                "apes-bod-set2",
                1,
            ),
            frq(
                r"Upstream from a wastewater outfall, dissolved oxygen is \(9.0\text{ mg/L}\). It falls to "
                r"\(3.5\text{ mg/L}\) just downstream and recovers to \(7.5\text{ mg/L}\) several kilometers later. "
                "Explain the decline and recovery, predict one biological effect near the minimum, and name one "
                "additional measurement that could test the explanation.",
                [
                    "Relate organic waste to decomposer respiration and oxygen demand.",
                    "Consider dilution, reaeration, and completion of decomposition downstream.",
                    "Choose a measurement tied to organic loading or aquatic stress.",
                ],
                [
                    "Microbial decomposition of organic waste increases oxygen demand, causing the initial dissolved-oxygen sag.",
                    "Dilution, atmospheric reaeration, photosynthesis, and declining decomposable material permit downstream recovery.",
                    "Oxygen-sensitive fish or invertebrates may leave or die near 3.5 mg/L.",
                    "Useful measurements include BOD, fecal coliform, ammonia, streamflow, temperature, or sensitive-species abundance.",
                ],
                "apes-oxygen-sag-set2",
                3,
            ),
            mcq(
                r"Chemical X has an oral \(\mathrm{LD}_{50}\) of \(8\text{ mg/kg}\), while Chemical Y has an "
                r"\(\mathrm{LD}_{50}\) of \(80\text{ mg/kg}\) in the same test species. Which conclusion is best?",
                [
                    "A) X has greater acute toxicity because a lower dose kills 50% of the test population.",
                    "B) Y has greater acute toxicity because its LD₅₀ is larger.",
                    "C) X is necessarily more persistent in ecosystems.",
                    "D) The chemicals have identical dose-response relationships.",
                ],
                0,
                [
                    "A lower median lethal dose indicates that less chemical is required for the measured acute effect.",
                    "LD₅₀ alone does not establish environmental persistence or chronic effects.",
                ],
                "apes-ld50-set2",
            ),
            frq(
                "Describe the primary, secondary, and one advanced stage of municipal wastewater treatment. For each "
                "stage, identify a pollutant or material it removes, and explain why disinfection is used before discharge.",
                [
                    "Separate physical settling from biological decomposition.",
                    "Advanced treatment can target nutrients or fine dissolved contaminants.",
                    "Disinfection addresses disease-causing organisms rather than bulk solids.",
                ],
                [
                    "Primary treatment screens debris and settles suspended solids.",
                    "Secondary treatment uses aerobic microbes to decompose dissolved and suspended organic matter, lowering BOD.",
                    "Tertiary or advanced treatment can remove nitrogen and phosphorus through biological or chemical processes.",
                    "Disinfection with UV, ozone, or chlorine reduces pathogens before effluent reaches receiving waters.",
                ],
                "apes-wastewater-treatment-set2",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 9 Set 2: Global Change",
        APES,
        "A second CED-aligned set on climate feedbacks, emissions, stratospheric ozone, invasive species, and biodiversity.",
        ["unit-9", "global-change", "climate", "biodiversity", "set-2"],
        [
            mcq(
                "Which sequence describes a positive climate feedback involving ice?",
                [
                    "A) Warming increases ice cover, which raises absorption and causes cooling.",
                    "B) Warming melts reflective ice, exposing darker surfaces that absorb more energy and increase warming.",
                    "C) Cooling melts ice, which lowers sea level and increases warming.",
                    "D) Ice loss increases planetary albedo and stops all solar absorption.",
                ],
                1,
                [
                    "Ice and snow have high albedo; darker ocean or land absorbs a larger fraction of incoming radiation.",
                    "The added absorption amplifies the initial warming.",
                ],
                "apes-ice-albedo-feedback-set2",
                1,
            ),
            frq(
                "A campus uses 4.0 million kWh of grid electricity annually. An efficiency project cuts use by 15%. "
                "If the grid emits 0.45 kg CO₂ per kWh, calculate annual electricity and emissions savings. Explain "
                "one reason the actual avoided emissions could differ from this estimate.",
                [
                    "Multiply baseline electricity by the fractional reduction.",
                    "Apply the emissions factor to saved electricity.",
                    "Distinguish an average grid factor from the marginal generator displaced at a particular time.",
                ],
                [
                    r"Electricity savings \(=(4.0\times10^6)(0.15)=6.0\times10^5\) kWh per year.",
                    r"Avoided emissions \(=(6.0\times10^5)(0.45)=2.7\times10^5\) kg CO₂ per year, or 270 metric tons.",
                    "The generation mix varies by location and time, so the marginal emissions displaced may differ from the average factor.",
                ],
                "apes-emissions-calculation-set2",
            ),
            mcq(
                "Which statement correctly distinguishes stratospheric ozone depletion from climate change?",
                [
                    "A) Ozone depletion is driven mainly by chlorine-catalyzed ozone destruction; climate change is driven largely by greenhouse-gas radiative forcing.",
                    "B) Both are caused only by untreated sewage.",
                    "C) Carbon dioxide directly destroys all stratospheric ozone through the same catalytic cycle as chlorine.",
                    "D) Repairing the ozone layer immediately removes all greenhouse gases.",
                ],
                0,
                [
                    "Reactive chlorine and bromine catalyze ozone destruction in the stratosphere.",
                    "Greenhouse gases alter Earth's energy balance; the problems can interact but are not the same mechanism.",
                ],
                "apes-ozone-climate-distinction-set2",
            ),
            frq(
                "An invasive aquatic plant spreads rapidly after introduction to a lake. Explain two traits or "
                "conditions that can promote its spread, predict one biodiversity effect, and design a field test "
                "of a proposed mechanical-removal program.",
                [
                    "Consider enemy release, rapid reproduction, broad tolerance, and disturbance.",
                    "Connect dominance by the invader to native competition or habitat conditions.",
                    "Use replicated treatment and control areas with before-and-after measurements.",
                ],
                [
                    "Rapid vegetative reproduction, broad environmental tolerance, abundant disturbed habitat, and few local predators or pathogens can promote spread.",
                    "Dense growth can exclude native plants, alter oxygen or habitat, and reduce native richness.",
                    "Randomly assign comparable replicated plots to removal or no removal, measure invasive cover and native richness before treatment and at fixed later times, and compare changes.",
                ],
                "apes-invasive-species-set2",
                3,
            ),
        ],
    ),

    # AP Computer Science A
    quiz(
        "AI Topic Exercises — Units 6–7 Set 2: Arrays & ArrayList",
        CSA,
        "A second CED-aligned set on array aliasing, traversal algorithms, ArrayList mutation, and safe removal.",
        ["unit-6", "unit-7", "arrays", "arraylist", "set-2"],
        [
            mcq(
                "What is printed by `int[] a = {2, 4, 6}; int[] b = a; b[1] = 9; System.out.print(a[1]);`?",
                ["A) 4", "B) 6", "C) 9", "D) A runtime error occurs"],
                2,
                [
                    "`b = a` copies the reference, not the array elements.",
                    "Both variables designate the same array, so the assignment through `b` changes the element read through `a`.",
                ],
                "csa-array-aliasing-set2",
                1,
            ),
            frq(
                "Write the body of a Java method `countAboveAverage(int[] values)` that returns the number of elements "
                "strictly greater than the array's arithmetic mean. Assume `values` is nonempty.",
                [
                    "First traverse to compute the sum, using a `double` for the mean.",
                    "Traverse again and count values strictly greater than that mean.",
                    "Force floating-point division when calculating the mean.",
                ],
                [
                    "`int sum = 0; for (int value : values) sum += value;`",
                    "`double mean = (double) sum / values.length;`",
                    "`int count = 0; for (int value : values) if (value > mean) count++; return count;`",
                ],
                "csa-array-algorithm-set2",
            ),
            mcq(
                "After `ArrayList<Integer> nums` contains `[3, 7, 9]`, the statements "
                "`nums.set(1, 5); nums.add(1, 4);` make the list contain",
                [
                    "A) `[3, 4, 5, 9]`",
                    "B) `[3, 5, 4, 9]`",
                    "C) `[3, 4, 7, 9]`",
                    "D) `[3, 5, 9, 4]`",
                ],
                0,
                [
                    "`set(1, 5)` replaces the element at index 1, producing `[3, 5, 9]`.",
                    "`add(1, 4)` inserts at index 1 and shifts later elements right.",
                ],
                "csa-arraylist-set-add-set2",
            ),
            frq(
                "Write Java code that removes every String with length less than 3 from an "
                "`ArrayList<String> words` without skipping elements. Explain why the traversal is safe.",
                [
                    "Removal shifts every later element one position left.",
                    "Traverse indices from the end toward zero so shifted elements have already been processed.",
                ],
                [
                    "`for (int i = words.size() - 1; i >= 0; i--) { if (words.get(i).length() < 3) words.remove(i); }`",
                    "Backward traversal is safe because a removal changes only indices greater than or equal to the removed index, all of which have already been visited.",
                ],
                "csa-arraylist-removal-set2",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 8 Set 2: 2D Arrays",
        CSA,
        "A second CED-aligned set on two-dimensional indexing, nested traversals, row analysis, and neighbor algorithms.",
        ["unit-8", "2d-arrays", "nested-traversal", "set-2"],
        [
            mcq(
                "What value is printed? `int[][] g = {{1, 2, 3}, {4, 5, 6}}; int sum = 0; "
                "for (int r = 0; r < g.length; r++) sum += g[r][2 - r]; System.out.print(sum);`",
                ["A) 5", "B) 7", "C) 8", "D) 9"],
                2,
                [
                    "For row 0, the column is 2, so the selected value is 3.",
                    "For row 1, the column is 1, so the selected value is 5; the sum is 8.",
                ],
                "csa-2d-trace-set2",
            ),
            frq(
                "Write a Java method `largestRow(int[][] grid)` that returns the index of the row with the greatest "
                "sum. Assume `grid` has at least one row, every row has at least one element, and ties should return "
                "the smallest row index.",
                [
                    "Initialize the best row and sum from row 0.",
                    "For each later row, use an inner traversal to compute its sum.",
                    "Replace the best row only for a strictly greater sum so ties keep the earlier index.",
                ],
                [
                    "`int bestRow = 0; int bestSum = 0; for (int v : grid[0]) bestSum += v;`",
                    "`for (int r = 1; r < grid.length; r++) { int sum = 0; for (int v : grid[r]) sum += v; "
                    "if (sum > bestSum) { bestSum = sum; bestRow = r; } } return bestRow;`",
                ],
                "csa-2d-row-sums-set2",
                3,
            ),
            mcq(
                "Which nested enhanced-for loop visits every element of `int[][] table` in row-major order?",
                [
                    "A) `for (int[] row : table) for (int value : row) use(value);`",
                    "B) `for (int value : table) for (int[] row : value) use(row);`",
                    "C) `for (int r = table.length; r >= 0; r--) use(table[r]);`",
                    "D) `for (int[] row : table[0]) use(row);`",
                ],
                0,
                [
                    "Each element of a 2D array is a row array.",
                    "The outer enhanced loop obtains each row; the inner loop obtains each value in that row.",
                ],
                "csa-2d-enhanced-for-set2",
                1,
            ),
            frq(
                "Write the core of a Java method `orthogonalSum(int[][] grid, int r, int c)` that returns the sum "
                "of valid elements directly above, below, left, and right of `grid[r][c]`. Do not include the center. "
                "Assume a nonempty rectangular grid and valid `r` and `c`.",
                [
                    "Begin at zero and test each boundary before accessing a neighboring index.",
                    "Rows range from 0 through `grid.length - 1`; columns range through `grid[0].length - 1`.",
                ],
                [
                    "`int sum = 0;`",
                    "`if (r > 0) sum += grid[r - 1][c]; if (r + 1 < grid.length) sum += grid[r + 1][c];`",
                    "`if (c > 0) sum += grid[r][c - 1]; if (c + 1 < grid[0].length) sum += grid[r][c + 1]; return sum;`",
                ],
                "csa-2d-neighbors-set2",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Units 9–10 Set 2: Recursion & Inheritance",
        CSA,
        "A second CED-aligned set on recursive reasoning, recursive design, constructors, overriding, and polymorphism.",
        ["unit-9", "unit-10", "inheritance", "recursion", "set-2"],
        [
            mcq(
                "What does `mystery(5)` return? `int mystery(int n) { if (n <= 1) return n; "
                "return 2 + mystery(n - 1); }`",
                ["A) 5", "B) 8", "C) 9", "D) 10"],
                2,
                [
                    "Expand until the base case: `mystery(5) = 2 + 2 + 2 + 2 + mystery(1)`.",
                    "`mystery(1)` returns 1, so the total is 9.",
                ],
                "csa-recursion-trace-set2",
            ),
            frq(
                "Write a recursive Java method `countChar(String s, String target)` that returns how many times the "
                "one-character String `target` occurs in `s`. Assume `target.length() == 1`.",
                [
                    "Use the empty String as the base case.",
                    "Compare the first character-sized substring with `target`.",
                    "Recur on the String with its first character removed.",
                ],
                [
                    "`public static int countChar(String s, String target) {`",
                    "`    if (s.length() == 0) return 0;`",
                    "`    int first = s.substring(0, 1).equals(target) ? 1 : 0;`",
                    "`    return first + countChar(s.substring(1), target);`",
                    "`}`",
                ],
                "csa-recursive-design-set2",
                3,
            ),
            mcq(
                "Suppose `Child extends Parent` and overrides `describe()`. What is called by "
                "`Parent p = new Child(); p.describe();`?",
                [
                    "A) `Child.describe()`, because overridden instance methods use the actual object type",
                    "B) `Parent.describe()`, because the reference variable is declared Parent",
                    "C) Both methods automatically, in unspecified order",
                    "D) Neither method, because the assignment is illegal",
                ],
                0,
                [
                    "A superclass reference can designate a subclass object.",
                    "At run time, dynamic method dispatch selects the override belonging to the actual object.",
                ],
                "csa-polymorphism-set2",
            ),
            frq(
                "A class `ElectricCar` extends `Car`. `Car` has constructor `Car(String model)` and public method "
                "`range()` returning an `int`. `ElectricCar` stores private `int batteryRange`. Write an "
                "`ElectricCar(String model, int batteryRange)` constructor and an overriding `range()` method.",
                [
                    "A subclass constructor must call the matching superclass constructor first.",
                    "Initialize the subclass field with `this`.",
                    "Use the same accessible signature and a compatible return type when overriding.",
                ],
                [
                    "`public ElectricCar(String model, int batteryRange) { super(model); this.batteryRange = batteryRange; }`",
                    "`@Override public int range() { return batteryRange; }`",
                ],
                "csa-inheritance-constructor-set2",
            ),
        ],
    ),

    # AP Computer Science Principles
    quiz(
        "AI Topic Exercises — Big Ideas 2–3 Set 2: Data & Algorithms",
        CSP,
        "A second CED-aligned set on digital data, overflow, data quality, algorithm efficiency, and list procedures.",
        ["big-idea-2", "big-idea-3", "data", "algorithms", "set-2"],
        [
            mcq(
                "A device stores unsigned integers in 8 bits. What issue occurs when it attempts to add 1 to 255?",
                [
                    "A) Round-off from lossy image compression",
                    "B) Overflow because 256 is outside the representable range 0 through 255",
                    "C) The Internet becomes not fault tolerant",
                    "D) The value is represented exactly using the same 8 bits",
                ],
                1,
                [
                    "Eight bits provide 256 patterns, representing unsigned values 0 through 255.",
                    "The mathematical result 256 cannot be represented without more bits or defined wraparound behavior.",
                ],
                "csp-overflow-set2",
                1,
            ),
            frq(
                "A fitness data set combines step counts from two device models. One model records missing days as 0; "
                "the other omits those rows. Explain one analysis error this inconsistency could cause, one cleaning "
                "step, and one limitation that may remain after cleaning.",
                [
                    "A zero can mean a real measured value or missing data, while an omitted row is represented differently.",
                    "Standardize missing-value representation before calculating summaries.",
                    "Cleaning cannot recover information that was never collected without assumptions.",
                ],
                [
                    "Treating missing days as true zero activity can bias a mean downward and make device groups appear different.",
                    "Use device metadata to recode known missing-day zeros as a common missing value, then apply one documented inclusion or imputation rule.",
                    "If zero-activity and missing days cannot be distinguished, uncertainty and possible selection bias remain.",
                ],
                "csp-data-cleaning-set2",
            ),
            mcq(
                "Binary search is generally more efficient than sequential search on a large list when",
                [
                    "A) the list is sorted, allowing each comparison to eliminate about half the remaining positions",
                    "B) the list contains only images",
                    "C) every item must be examined regardless of comparisons",
                    "D) the target is guaranteed to be the final item",
                ],
                0,
                [
                    "Ordering tells the algorithm which half cannot contain the target.",
                    "Repeated halving requires far fewer comparisons than visiting every element for large inputs.",
                ],
                "csp-binary-search-set2",
            ),
            frq(
                "Write AP-style pseudocode for a procedure `COUNT_INCREASES(values)` that returns the number of "
                "positions whose value is greater than the immediately preceding value. Assume the list is nonempty. "
                "Explain how the list parameter contributes to abstraction.",
                [
                    "Start at the second list position because the first has no predecessor.",
                    "Compare adjacent values and update a counter.",
                    "The parameter lets one named algorithm operate on many lists.",
                ],
                [
                    "`PROCEDURE COUNT_INCREASES(values) {`",
                    "`  count ← 0`",
                    "`  FOR EACH i FROM 2 TO LENGTH(values) { IF(values[i] > values[i - 1]) { count ← count + 1 } }`",
                    "`  RETURN(count)`",
                    "`}`",
                    "The list abstracts an arbitrary-length collection behind one parameter, so callers reuse the procedure without duplicating its traversal logic.",
                ],
                "csp-list-procedure-set2",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Big Idea 4 Set 2: Networks",
        CSP,
        "A second CED-aligned set on open protocols, packets, routing, encryption, bandwidth, latency, and fault tolerance.",
        ["big-idea-4", "networks", "internet", "cybersecurity", "set-2"],
        [
            mcq(
                "Why do open, agreed-upon Internet protocols support a scalable global network?",
                [
                    "A) Devices made by different organizations can communicate using shared message rules.",
                    "B) Every device must use identical hardware.",
                    "C) A single company must approve every transmitted packet.",
                    "D) Protocols prevent all hardware and software failures.",
                ],
                0,
                [
                    "Protocols specify common formats and behaviors at interfaces.",
                    "Interoperability allows independently designed systems and networks to connect.",
                ],
                "csp-open-protocols-set2",
                1,
            ),
            frq(
                "A large file is divided into packets before crossing the Internet. Explain the role of packet metadata, "
                "why packets can arrive out of order, and how redundant routes improve fault tolerance.",
                [
                    "Headers identify addressing and information needed for delivery or reconstruction.",
                    "Routers forward packets independently according to current conditions.",
                    "Alternative paths prevent one failed link from being the only route.",
                ],
                [
                    "Metadata can include source and destination addresses plus sequence or protocol information used to route and reassemble data.",
                    "Packets may take different paths with different delays, so their arrival order can differ from sending order.",
                    "If one link or router fails, routing can send packets over another working path, although widespread failures can still interrupt service.",
                ],
                "csp-packets-routing-set2",
            ),
            mcq(
                "To send a confidential message using public-key encryption, a sender ordinarily encrypts with",
                [
                    "A) the recipient's public key, so the recipient can decrypt with the matching private key",
                    "B) the recipient's private key, which is published to everyone",
                    "C) no key, because routing itself guarantees confidentiality",
                    "D) the sender's password stored in plaintext with the message",
                ],
                0,
                [
                    "A public key may be distributed, while its paired private key is kept secret.",
                    "Data encrypted for the recipient with the public key can be decrypted using the corresponding private key.",
                ],
                "csp-public-key-set2",
            ),
            frq(
                "A remote surgery-training system sends high-definition interactive video. Distinguish bandwidth from "
                "latency, explain one effect of insufficient bandwidth and one effect of high latency, and propose one "
                "network design feature that improves availability.",
                [
                    "Bandwidth concerns data capacity per unit time; latency concerns end-to-end delay.",
                    "Connect each network property to a different user-visible failure.",
                    "Availability can improve through redundancy rather than a single point of failure.",
                ],
                [
                    "Insufficient bandwidth can force lower resolution, dropped frames, or buffering because data is generated faster than it can be carried.",
                    "High latency creates delayed interaction even if the eventual video quality is high.",
                    "Redundant links, routers, or geographically separate service instances can preserve access after an individual failure.",
                ],
                "csp-network-performance-set2",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Big Idea 5 Set 2: Impact of Computing",
        CSP,
        "A second CED-aligned set on algorithmic bias, crowdsourcing, privacy, accessibility, and unequal access.",
        ["big-idea-5", "impact", "privacy", "equity", "set-2"],
        [
            mcq(
                "A speech-recognition system has much higher error rates for accents rarely represented in its training "
                "data. Which response most directly addresses the likely source of the disparity?",
                [
                    "A) Evaluate performance by user group and improve representative training and testing data.",
                    "B) Increase screen brightness for every user.",
                    "C) Remove all documentation of error rates.",
                    "D) Assume a faster processor will automatically remove data bias.",
                ],
                0,
                [
                    "A model's performance reflects patterns and coverage in its data and evaluation process.",
                    "Disaggregated testing reveals uneven outcomes; representative data and design review can reduce them.",
                ],
                "csp-algorithmic-bias-set2",
            ),
            frq(
                "A citizen-science app asks volunteers to photograph local insects and submit locations. Describe one "
                "benefit of crowdsourcing, one data-quality risk, one privacy risk, and one mitigation for each risk.",
                [
                    "Distributed participants can gather observations across broad places and times.",
                    "Volunteer observations can vary in identification accuracy and sampling effort.",
                    "Precise locations may reveal participant routines or locations of vulnerable species.",
                ],
                [
                    "Benefit: many volunteers can create a larger and wider-ranging data set than a small research team.",
                    "Quality risk: misidentified species or clustered sampling; mitigate with expert review, confidence labels, training examples, and repeated observations.",
                    "Privacy risk: coordinates can expose homes, routines, or sensitive habitats; mitigate by informed consent, coarse public locations, limited retention, and restricted access to exact coordinates.",
                ],
                "csp-crowdsourcing-impact-set2",
                3,
            ),
            mcq(
                "Why can metadata create a privacy concern even when the content of messages is encrypted?",
                [
                    "A) Times, participants, locations, and communication frequency can reveal behavioral patterns.",
                    "B) Encryption always publishes the message content.",
                    "C) Metadata contains no information about communication.",
                    "D) Encrypted messages cannot travel in packets.",
                ],
                0,
                [
                    "Encryption can conceal content without concealing every fact about a communication event.",
                    "Patterns in who communicates, when, and from where can support sensitive inferences.",
                ],
                "csp-metadata-privacy-set2",
            ),
            frq(
                "A city moves applications for housing assistance to an online-only portal. Explain one beneficial "
                "impact, two ways the change could create unequal access, and two design or policy changes that would "
                "make the service more inclusive.",
                [
                    "Online systems can reduce travel and support continuous submission.",
                    "Consider connectivity, devices, disability, language, and digital literacy.",
                    "Pair accessible technical design with a non-digital or supported access path.",
                ],
                [
                    "Applicants with reliable access may apply remotely at any time and receive faster status updates.",
                    "People without affordable broadband or a suitable device may be excluded; inaccessible forms, limited language support, or low digital literacy can create additional barriers.",
                    "Use accessibility standards, plain language, translations, low-bandwidth mobile design, and save-and-return behavior.",
                    "Maintain staffed phone or in-person application options and provide trusted public access points or assistance.",
                ],
                "csp-digital-divide-set2",
                3,
            ),
        ],
    ),
]


if __name__ == "__main__":
    print(len(QUIZZES), sum(len(q["items"]) for q in QUIZZES))
