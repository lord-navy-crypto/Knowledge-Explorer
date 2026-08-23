#!/usr/bin/env python3
"""Append unit formula sheets, batch-4 practice, and concept examples."""

import json
import random
import re
import string
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
SOURCE_NOTE = "Original AP-aligned unit reference; equations and skills, not exam questions."
GENERATION_NOTE = (
    "Original formula/skill application practice aligned to AP course skills. "
    "Not College Board exam material. Includes process and model answers. · batch 4"
)
BASE_TAGS = [
    "formula-practice",
    "batch-4",
    "ced-aligned",
    "generated",
    "with-solutions",
]


def rid(prefix):
    """Return a fresh managed-content id."""
    token = f"{random.getrandbits(32):08x}"
    suffix = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{token}-{suffix}"


def sheet(subject, unit, name, content):
    return {
        "subject": subject,
        "unit": unit,
        "name": name,
        "content": content.strip(),
    }


FORMULA_SHEETS = [
    sheet(
        "AP Statistics",
        "Unit 6: Inference for Proportions",
        "AP Statistics Unit 6 Proportions Formula Sheet",
        r"""
# AP Statistics Unit 6 — Inference for Proportions

## Core relationships

| Procedure | Statistic or interval | Conditions |
| --- | --- | --- |
| One-proportion $z$ test | $z=\dfrac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}$ | Random data; $n\le 0.10N$ when sampling without replacement; $np_0,n(1-p_0)\ge10$. |
| One-proportion interval | $\hat p\pm z^*\sqrt{\dfrac{\hat p(1-\hat p)}n}$ | Check successes and failures with $\hat p$. |
| Two-proportion $z$ test | $z=\dfrac{\hat p_1-\hat p_2}{\sqrt{\hat p_c(1-\hat p_c)(1/n_1+1/n_2)}}$ | Independent groups; $\hat p_c=\dfrac{x_1+x_2}{n_1+n_2}$. |
| Two-proportion interval | $(\hat p_1-\hat p_2)\pm z^*\sqrt{\dfrac{\hat p_1(1-\hat p_1)}{n_1}+\dfrac{\hat p_2(1-\hat p_2)}{n_2}}$ | Do not pool for an interval. |

## Planning and interpretation

For margin of error $m$, use $n=\hat p(1-\hat p)(z^*/m)^2$ and round **up**. If no prior estimate exists, $\hat p=0.5$ is conservative. A $p$-value assumes $H_0$; it is not the probability that $H_0$ is true.
""",
    ),
    sheet(
        "AP Statistics",
        "Unit 7: Inference for Quantitative Data",
        "AP Statistics Unit 7 t-Tests Formula Sheet",
        r"""
# AP Statistics Unit 7 — $t$ Procedures

| Procedure | Formula | AP use |
| --- | --- | --- |
| One-sample statistic | $t=\dfrac{\bar x-\mu_0}{s/\sqrt n}$, $df=n-1$ | Test one population mean when $\sigma$ is unknown. |
| One-sample interval | $\bar x\pm t^*\dfrac{s}{\sqrt n}$ | Estimate a population mean. |
| Paired statistic | $t=\dfrac{\bar d-\mu_{d,0}}{s_d/\sqrt n}$ | Analyze within-pair differences as one sample. |
| Two-sample statistic | $t=\dfrac{(\bar x_1-\bar x_2)-0}{\sqrt{s_1^2/n_1+s_2^2/n_2}}$ | Compare independent means; technology supplies $df$. |
| Two-sample interval | $(\bar x_1-\bar x_2)\pm t^*\sqrt{\dfrac{s_1^2}{n_1}+\dfrac{s_2^2}{n_2}}$ | Estimate $\mu_1-\mu_2$. |

Check randomization, independence, and an approximately Normal sampling distribution. For small $n$, strong skew or outliers are serious. Pairing is determined by the design—not by equal sample sizes.
""",
    ),
    sheet(
        "AP Statistics",
        "Unit 8: Chi-Square Inference",
        "AP Statistics Unit 8 Chi-Square Formula Sheet",
        r"""
# AP Statistics Unit 8 — Chi-Square Inference

$$\chi^2=\sum\frac{(O-E)^2}{E}$$

| Test | Expected count | Degrees of freedom |
| --- | --- | --- |
| Goodness of fit | $E_i=n p_i$ | $k-1$ |
| Homogeneity | $E=\dfrac{(\text{row total})(\text{column total})}{n}$ | $(r-1)(c-1)$ |
| Independence | $E=\dfrac{(\text{row total})(\text{column total})}{n}$ | $(r-1)(c-1)$ |

Use counts, not percents, and verify that every expected count is at least 5. Every cell contribution is nonnegative. A large statistic is evidence against the null model, but the largest contribution identifies where observed and expected counts differ most—not a causal explanation.
""",
    ),
    sheet(
        "AP Calculus AB/BC",
        "Unit 5: Analytical Applications of Differentiation",
        "AP Calculus Unit 5 MVT and Extrema Formula Sheet",
        r"""
# AP Calculus Unit 5 — MVT, Extrema, and Curve Analysis

| Result | Relationship | Required check |
| --- | --- | --- |
| Extreme Value Theorem | absolute max/min exist on $[a,b]$ | $f$ is continuous on the closed interval. |
| Mean Value Theorem | $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ for some $c\in(a,b)$ | $f$ continuous on $[a,b]$ and differentiable on $(a,b)$. |
| Critical numbers | $f'(c)=0$ or $f'(c)$ does not exist | $c$ must lie in the domain of $f$. |
| First derivative test | sign change of $f'$ classifies a local extremum | Test intervals on both sides. |
| Second derivative test | $f'(c)=0,\ f''(c)>0$ gives a local min; $f''(c)<0$ gives a local max | If $f''(c)=0$, the test is inconclusive. |

For absolute extrema on $[a,b]$, compare $f$ at every interior critical number and both endpoints. An inflection point requires a change in concavity; $f''=0$ alone is insufficient.
""",
    ),
    sheet(
        "AP Calculus AB/BC",
        "Unit 8: Applications of Integration",
        "AP Calculus Unit 8 Area and Volume Formula Sheet",
        r"""
# AP Calculus Unit 8 — Area and Volume

| Model | Formula | Setup cue |
| --- | --- | --- |
| Area between curves | $A=\int_a^b\lvert f(x)-g(x)\rvert\,dx$ | Split where the upper curve changes. |
| Known cross sections | $V=\int_a^b A(x)\,dx$ | Write the slice area before integrating. |
| Disks/washers | $V=\pi\int_a^b\left(R(x)^2-r(x)^2\right)\,dx$ | Radii are perpendicular distances to the axis. |
| Cylindrical shells | $V=2\pi\int_a^b(\text{radius})(\text{height})\,dx$ | Slices are parallel to the axis. |
| Average value | $f_{\mathrm{avg}}=\dfrac1{b-a}\int_a^bf(x)\,dx$ | Average output, not average input. |

Bounds describe the slicing variable. With $dy$, rewrite left/right boundaries as functions of $y$. Signed accumulation may be negative, but geometric area and volume are nonnegative.
""",
    ),
    sheet(
        "AP Chemistry",
        "Unit 5: Kinetics",
        "AP Chemistry Unit 5 Kinetics Formula Sheet",
        r"""
# AP Chemistry Unit 5 — Kinetics

| Relationship | Use |
| --- | --- |
| $\text{rate}=k[A]^m[B]^n$ | Determine $m,n$ from experiments; overall order is $m+n$. |
| Zero order: $[A]_t=[A]_0-kt$ | A $[A]$ versus $t$ plot is linear; $t_{1/2}=[A]_0/(2k)$. |
| First order: $\ln[A]_t=\ln[A]_0-kt$ | A $\ln[A]$ versus $t$ plot is linear; $t_{1/2}=\ln2/k$. |
| Second order: $\dfrac1{[A]_t}=\dfrac1{[A]_0}+kt$ | A $1/[A]$ versus $t$ plot is linear; $t_{1/2}=1/(k[A]_0)$. |
| $\ln(k_2/k_1)=-\dfrac{E_a}{R}(1/T_2-1/T_1)$ | Compare rate constants at two temperatures. |

Orders come from data, not balanced coefficients, unless the step is known to be elementary. A catalyst lowers activation energy and changes $k$ but not $\Delta G^\circ$, $K$, or the equilibrium composition.
""",
    ),
    sheet(
        "AP Chemistry",
        "Unit 7: Equilibrium",
        "AP Chemistry Unit 7 Equilibrium Formula Sheet",
        r"""
# AP Chemistry Unit 7 — Equilibrium

For $aA+bB\rightleftharpoons cC+dD$,

$$K_c=\frac{[C]^c[D]^d}{[A]^a[B]^b},\qquad
K_p=\frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}.$$

Pure solids and liquids are omitted. Use the same expression with current values to compute $Q$: $Q<K$ shifts forward, $Q>K$ shifts reverse, and $Q=K$ is at equilibrium.

| Transformation | New constant |
| --- | --- |
| Reverse a reaction | $K'=1/K$ |
| Multiply coefficients by $n$ | $K'=K^n$ |
| Add reactions | $K_{\mathrm{overall}}=\prod K_i$ |

An ICE table tracks concentration changes with stoichiometric ratios. A catalyst reaches equilibrium faster but does not change $K$. Only temperature changes the value of $K$ for a fixed reaction.
""",
    ),
    sheet(
        "AP Chemistry",
        "Unit 9: Applications of Thermodynamics",
        "AP Chemistry Unit 9 Electrochemistry Formula Sheet",
        r"""
# AP Chemistry Unit 9 — Electrochemistry

| Relationship | Meaning |
| --- | --- |
| $E^\circ_{\mathrm{cell}}=E^\circ_{\mathrm{cathode}}-E^\circ_{\mathrm{anode}}$ | Use tabulated reduction potentials; cathode is reduction. |
| $\Delta G^\circ=-nFE^\circ_{\mathrm{cell}}$ | Positive cell voltage gives negative standard free energy. |
| $\Delta G^\circ=-RT\ln K$ | Connect equilibrium and standard favorability. |
| $E=E^\circ-\dfrac{RT}{nF}\ln Q$ | Nernst equation for nonstandard conditions. |
| $q=It$ and $\text{mol e}^-=q/F$ | Electrolysis charge and amount reacted. |

$F=96485\ \mathrm{C\,mol^{-1}}$. Balance the redox equation before choosing $n$. In a galvanic cell electrons travel anode $\to$ cathode; oxidation is always at the anode, even when electrode signs change in an electrolytic cell.
""",
    ),
    sheet(
        "AP Biology",
        "Unit 5: Heredity",
        "AP Biology Unit 5 Heredity and Hardy-Weinberg Formula Sheet",
        r"""
# AP Biology Unit 5 — Heredity and Population Genetics

## Probability

$$P(A\text{ and }B)=P(A)P(B)\quad\text{for independent events},$$
$$P(A\text{ or }B)=P(A)+P(B)\quad\text{for mutually exclusive events}.$$

## Hardy-Weinberg model

$$p+q=1,\qquad p^2+2pq+q^2=1.$$

$p^2$ and $q^2$ are expected homozygote frequencies; $2pq$ is the expected heterozygote frequency. Start from a recessive-phenotype frequency only when the phenotype maps reliably to $q^2$.

## Model test

$$\chi^2=\sum\frac{(O-E)^2}{E}.$$

Hardy-Weinberg requires a very large population, random mating, and no selection, migration, or mutation. A departure identifies inconsistency with the model; it does not by itself identify which assumption failed.
""",
    ),
    sheet(
        "AP Biology",
        "Unit 6: Gene Expression and Regulation",
        "AP Biology Unit 6 Gene Expression Quick Reference",
        r"""
# AP Biology Unit 6 — Gene Expression

## Information flow

$$\mathrm{DNA}\xrightarrow{\text{transcription}}\mathrm{RNA}
\xrightarrow{\text{translation}}\mathrm{protein}.$$

RNA polymerase reads the DNA template $3'\to5'$ and synthesizes RNA $5'\to3'$. Ribosomes read mRNA codons $5'\to3'$; tRNA anticodons pair antiparallel.

| Change | Likely consequence |
| --- | --- |
| Silent substitution | Codon changes but encoded amino acid does not. |
| Missense substitution | One amino acid may change. |
| Nonsense substitution | A premature stop codon may shorten the protein. |
| Frameshift insertion/deletion | Downstream reading frame changes unless the length is a multiple of 3. |

Regulation can alter transcription, RNA processing, translation, or protein activity. A change in mRNA abundance is evidence about expression, not automatic proof of protein function.
""",
    ),
    sheet(
        "AP Physics 1",
        "Unit 1: Kinematics",
        "AP Physics 1 Unit 1 Kinematics Equation Sheet",
        r"""
# AP Physics 1 Unit 1 — Kinematics

$$\bar v=\frac{\Delta x}{\Delta t},\qquad v=\frac{dx}{dt},\qquad
\bar a=\frac{\Delta v}{\Delta t},\qquad a=\frac{dv}{dt}.$$

For constant acceleration only:

$$v=v_0+at,\quad \Delta x=v_0t+\frac12at^2,\quad
v^2=v_0^2+2a\Delta x,\quad \Delta x=\frac{v_0+v}{2}t.$$

Projectile components are independent when drag is neglected:

$$x=x_0+v_{0x}t,\qquad y=y_0+v_{0y}t-\frac12gt^2.$$

Slope of an $x$-$t$ graph is velocity; slope of a $v$-$t$ graph is acceleration; area under a $v$-$t$ graph is displacement. A negative velocity is direction, not necessarily slowing down.
""",
    ),
    sheet(
        "AP Physics 1",
        "Unit 3: Work, Energy, and Power",
        "AP Physics 1 Unit 3 Energy Equation Sheet",
        r"""
# AP Physics 1 Unit 3 — Work and Energy

| Relationship | Application |
| --- | --- |
| $W=\int\vec F\cdot d\vec r$; constant force $W=Fd\cos\theta$ | Energy transferred by a force. |
| $K=\frac12mv^2$ and $W_{\mathrm{net}}=\Delta K$ | Net work changes kinetic energy. |
| $U_g=mgy$ near Earth; $U_s=\frac12kx^2$ | Gravitational and spring potential energy. |
| $K_i+U_i+W_{\mathrm{ext,nc}}=K_f+U_f$ | Define the system before classifying work. |
| $P=\dfrac{W}{\Delta t}$ and instantaneous $P=\vec F\cdot\vec v$ | Rate of energy transfer. |

Potential energy belongs to an interaction within the chosen system. Friction can convert mechanical energy to thermal energy without violating total-energy conservation.
""",
    ),
    sheet(
        "AP Physics 2",
        "Waves and Optics",
        "AP Physics 2 Waves Formula Sheet",
        r"""
# AP Physics 2 — Waves and Optics

| Relationship | Use |
| --- | --- |
| $v=f\lambda$ | Frequency is fixed by the source; crossing a boundary changes $v$ and $\lambda$. |
| $f_n=n\dfrac{v}{2L}$ | String or open-open pipe harmonics, $n=1,2,3,\ldots$. |
| $f_n=n\dfrac{v}{4L}$, $n=1,3,5,\ldots$ | Closed-open pipe allowed harmonics. |
| $n_1\sin\theta_1=n_2\sin\theta_2$ | Refraction; measure angles from the normal. |
| $\dfrac1f=\dfrac1{d_o}+\dfrac1{d_i}$, $m=-d_i/d_o$ | Thin lenses and spherical mirrors with one sign convention. |
| $d\sin\theta=m\lambda$ | Double-slit bright fringes; small-angle spacing $\Delta y\approx\lambda L/d$. |

Interference changes intensity distribution, not photon energy. State whether the wave model, ray model, or quantum model is being used.
""",
    ),
    sheet(
        "AP Physics 2",
        "Modern Physics",
        "AP Physics 2 Modern Physics Quick Reference",
        r"""
# AP Physics 2 — Modern Physics Quick Reference

| Relationship | Interpretation |
| --- | --- |
| $E=hf=hc/\lambda$ | Photon energy depends on frequency. |
| $K_{\max}=hf-\phi=eV_s$ | Photoelectric energy and stopping potential. |
| $\lambda=h/p$ | de Broglie wavelength of matter. |
| $\Delta E=hf$ | Atomic emission or absorption connects energy levels. |
| $E=\Delta mc^2$ | Mass defect and binding energy. |
| $N=N_0e^{-\lambda t}=N_0(1/2)^{t/t_{1/2}}$ | Radioactive decay; $t_{1/2}=\ln2/\lambda$. |

Above threshold, raising light intensity increases the emission rate but not $K_{\max}$. Nuclear charge, nucleon number, energy, and momentum must be conserved; half-life predicts a population trend, not the exact decay time of one nucleus.
""",
    ),
    sheet(
        "AP Macroeconomics",
        "Unit 3: National Income and Price Determination",
        "AP Macroeconomics Unit 3 AD-AS and Multiplier Formula Sheet",
        r"""
# AP Macroeconomics Unit 3 — AD-AS and Multipliers

$$Y=C+I+G+NX,\qquad k_G=\frac1{1-MPC}=\frac1{MPS},\qquad
k_T=-\frac{MPC}{1-MPC}.$$

| Change | Simple-model result |
| --- | --- |
| Autonomous spending changes by $\Delta A$ | $\Delta Y=k_G\Delta A$ |
| Lump-sum taxes change by $\Delta T$ | $\Delta Y=k_T\Delta T$ |
| Equal increases in $G$ and $T$ | Balanced-budget multiplier is $1$ in the simplest model. |

Aggregate demand slopes downward because of wealth, interest-rate, and foreign-purchases effects. Changes in the price level move along AD; changes in spending determinants shift AD. Actual multipliers may be smaller because of taxes, imports, crowding out, and price-level changes.
""",
    ),
    sheet(
        "AP Microeconomics",
        "Unit 5: Factor Markets",
        "AP Microeconomics Unit 5 Factor Markets Formula Sheet",
        r"""
# AP Microeconomics Unit 5 — Factor Markets

$$MP_L=\frac{\Delta Q}{\Delta L},\qquad
MRP_L=MP_L\times MR,\qquad
MRC_L=\frac{\Delta TC_{\mathrm{resource}}}{\Delta L}.$$

For a competitive output seller, $MR=P$, so $MRP_L=MP_LP$. A profit-maximizing employer hires through the last unit for which $MRP_L\ge MRC_L$.

| Market | Key feature |
| --- | --- |
| Competitive labor market | The firm is a wage taker, so $MRC_L=w$. |
| Monopsony | Hiring another worker can raise the wage paid to existing workers, so $MRC_L>w$. |

Labor demand is derived from worker productivity and output demand. A wage floor can increase employment in a monopsony over some range, unlike the standard competitive-market prediction.
""",
    ),
]


def practice_item(prompt, method, answer, concept_id, tier=2):
    return {
        "id": rid("m-item"),
        "format": "frq_half",
        "prompt": prompt,
        "conceptId": concept_id,
        "conceptIntro": None,
        "difficultyTier": tier,
        "visibleSteps": [
            method,
            "Carry units, signs, or quoted evidence through the reasoning.",
            "State what the result means in the scenario.",
        ],
        "blankSteps": [answer],
        "hints": [
            "Identify the governing formula or skill before using the data.",
            "Show the intermediate substitution or evidence-to-claim link.",
            "Check the result against the question's conditions.",
        ],
    }


def practice_quiz(title, subject, description, topic_tags, entries, minutes=30):
    if len(entries) != 3:
        raise ValueError(f"{title!r} must contain exactly three items")
    return {
        "id": rid("m-quiz"),
        "title": title,
        "subject": subject,
        "kind": "generated",
        "description": description,
        "generationNote": GENERATION_NOTE,
        "estimatedMinutes": minutes,
        "tags": BASE_TAGS + topic_tags,
        "items": [practice_item(*entry) for entry in entries],
        "difficultyTier": max(entry[4] if len(entry) > 4 else 2 for entry in entries),
    }


QUIZZES = [
    practice_quiz(
        "Formula Practice Batch 4 — AP Physics 1: Kinematics and Energy",
        "AP Physics 1",
        "Three original applications of constant acceleration, projectile motion, and energy.",
        ["ap-physics-1", "kinematics", "energy"],
        [
            (
                r"A cart moving at \(5.0\,\mathrm{m/s}\) accelerates at \(3.0\,\mathrm{m/s^2}\) for \(4.0\,\mathrm s\). Find its final speed and displacement.",
                r"Use \(v=v_0+at\) and \(\Delta x=v_0t+\tfrac12at^2\).",
                r"\(v=17\,\mathrm{m/s}\) and \(\Delta x=(5)(4)+\tfrac12(3)(4^2)=44\,\mathrm m\).",
                "physics1-constant-acceleration-b4",
                2,
            ),
            (
                r"A ball is launched from level ground at \(20\,\mathrm{m/s}\), \(30^\circ\) above horizontal. With \(g=10\,\mathrm{m/s^2}\), find its flight time and range.",
                r"Resolve \(v_0\): \(v_{0y}=10\) and \(v_{0x}=10\sqrt3\,\mathrm{m/s}\); use vertical motion for time.",
                r"\(t=2v_{0y}/g=2.0\,\mathrm s\), so \(R=v_{0x}t=20\sqrt3\approx34.6\,\mathrm m\).",
                "physics1-projectile-components-b4",
                2,
            ),
            (
                r"A \(0.50\,\mathrm{kg}\) block is released from a spring compressed \(0.15\,\mathrm m\), with \(k=200\,\mathrm{N/m}\). Neglect friction. Find its speed at equilibrium.",
                r"Set initial spring energy \(\tfrac12kx^2\) equal to final kinetic energy \(\tfrac12mv^2\).",
                r"\(v=x\sqrt{k/m}=0.15\sqrt{200/0.50}=3.0\,\mathrm{m/s}\).",
                "physics1-spring-energy-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Physics 1: Momentum and Rotation",
        "AP Physics 1",
        "Three original applications of torque, collision momentum, and circular dynamics.",
        ["ap-physics-1", "momentum", "rotation"],
        [
            (
                r"A \(12\,\mathrm N\) force is applied \(0.40\,\mathrm m\) from a pivot at \(30^\circ\) to the lever arm. Find the torque magnitude.",
                r"Use \(\tau=rF\sin\theta\), where \(\theta\) is between \(\vec r\) and \(\vec F\).",
                r"\(\tau=(0.40)(12)\sin30^\circ=2.4\,\mathrm{N\,m}\).",
                "physics1-torque-angle-b4",
                2,
            ),
            (
                r"A \(2.0\,\mathrm{kg}\) cart at \(+6.0\,\mathrm{m/s}\) sticks to a \(1.0\,\mathrm{kg}\) cart at \(-3.0\,\mathrm{m/s}\). Find their common velocity.",
                r"Conserve signed momentum for the two-cart system.",
                r"\(v_f=[2(6)+1(-3)]/(2+1)=+3.0\,\mathrm{m/s}\). Kinetic energy is not conserved.",
                "physics1-inelastic-momentum-b4",
                2,
            ),
            (
                r"A \(0.50\,\mathrm{kg}\) object moves at \(4.0\,\mathrm{m/s}\) in a circle of radius \(2.0\,\mathrm m\). Find the net radial force and its value if speed triples.",
                r"Use \(F_r=mv^2/r\); distinguish net inward force from any one named force.",
                r"Initially \(F_r=4.0\,\mathrm N\). Tripling speed multiplies \(F_r\) by \(9\), giving \(36\,\mathrm N\) inward.",
                "physics1-circular-force-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Physics 2: Fluids and Thermodynamics",
        "AP Physics 2",
        "Three original applications of pressure, ideal gases, and the first law.",
        ["ap-physics-2", "fluids", "thermodynamics"],
        [
            (
                r"A hydraulic lift has input area \(0.020\,\mathrm{m^2}\) and output area \(0.50\,\mathrm{m^2}\). What output force results from a \(160\,\mathrm N\) input force?",
                r"Equate transmitted pressures: \(F_1/A_1=F_2/A_2\).",
                r"\(F_2=160(0.50/0.020)=4.0\times10^3\,\mathrm N\). The larger force accompanies a smaller output displacement.",
                "physics2-pascal-lift-b4",
                2,
            ),
            (
                r"An ideal gas remains at constant pressure while its absolute temperature rises from \(300\,\mathrm K\) to \(450\,\mathrm K\). If \(V_i=2.0\,\mathrm L\), find \(V_f\).",
                r"For fixed \(n\) and \(P\), use \(V/T=\text{constant}\).",
                r"\(V_f=2.0(450/300)=3.0\,\mathrm L\). Celsius temperatures cannot be used in the ratio.",
                "physics2-ideal-gas-scaling-b4",
                2,
            ),
            (
                r"A gas absorbs \(500\,\mathrm J\) of heat and does \(180\,\mathrm J\) of work on its surroundings. Find \(\Delta U\).",
                r"With work by the gas positive, apply \(\Delta U=Q-W_{\rm by}\).",
                r"\(\Delta U=500-180=+320\,\mathrm J\); the gas's internal energy increases.",
                "physics2-first-law-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Physics 2: Waves and Modern Physics",
        "AP Physics 2",
        "Three original applications of wave speed, imaging, and photon energy.",
        ["ap-physics-2", "waves", "optics", "modern-physics"],
        [
            (
                r"A sound wave has frequency \(250\,\mathrm{Hz}\) and speed \(300\,\mathrm{m/s}\). Find its wavelength.",
                r"Use \(v=f\lambda\).",
                r"\(\lambda=v/f=300/250=1.20\,\mathrm m\).",
                "physics2-wave-speed-b4",
                1,
            ),
            (
                r"A converging lens has \(f=10\,\mathrm{cm}\) and an object at \(d_o=30\,\mathrm{cm}\). Find \(d_i\) and magnification.",
                r"Apply \(1/f=1/d_o+1/d_i\), then \(m=-d_i/d_o\).",
                r"\(d_i=15\,\mathrm{cm}\) and \(m=-0.50\); the real image is inverted and half as tall.",
                "physics2-thin-lens-b4",
                2,
            ),
            (
                r"Light of wavelength \(400\,\mathrm{nm}\) strikes a metal with work function \(2.20\,\mathrm{eV}\). Using \(hc=1240\,\mathrm{eV\,nm}\), find \(K_{\max}\).",
                r"Calculate \(E_\gamma=hc/\lambda\), then subtract \(\phi\).",
                r"\(E_\gamma=1240/400=3.10\,\mathrm{eV}\), so \(K_{\max}=0.90\,\mathrm{eV}\).",
                "physics2-photoelectric-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Physics C E&M: Fields and Capacitors",
        "AP Physics C: E&M",
        "Three original calculus-ready applications of fields, capacitors, and dielectrics.",
        ["ap-physics-c-em", "electric-fields", "capacitors"],
        [
            (
                r"Find the electric-field magnitude \(0.30\,\mathrm m\) from a \(+2.0\,\mu\mathrm C\) point charge using \(k=9.0\times10^9\). State its direction.",
                r"Use \(E=k|q|/r^2\) and infer direction from the source charge.",
                r"\(E=(9.0\times10^9)(2.0\times10^{-6})/(0.30)^2=2.0\times10^5\,\mathrm{N/C}\), radially outward.",
                "em-point-charge-field-b4",
                2,
            ),
            (
                r"A \(6.0\,\mu\mathrm F\) capacitor is charged to \(12\,\mathrm V\). Find its charge and stored energy.",
                r"Use \(Q=CV\) and \(U=\tfrac12CV^2\).",
                r"\(Q=72\,\mu\mathrm C\) and \(U=\tfrac12(6.0\times10^{-6})(12^2)=4.32\times10^{-4}\,\mathrm J\).",
                "em-capacitor-energy-b4",
                2,
            ),
            (
                r"A charged parallel-plate capacitor is disconnected from its battery, then fully filled with dielectric \(\kappa=3\). Compare \(C,Q,V,U\) with their initial values.",
                r"Use \(C'=\kappa C\), fixed isolated charge, \(V=Q/C\), and \(U=Q^2/(2C)\).",
                r"\(C'=3C,\ Q'=Q,\ V'=V/3,\ U'=U/3\). Treating voltage as fixed after disconnection is the trap.",
                "em-dielectric-disconnected-b4",
                3,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Physics C E&M: Circuits and Induction",
        "AP Physics C: E&M",
        "Three original applications of equivalent resistance, RC time, and motional emf.",
        ["ap-physics-c-em", "circuits", "induction"],
        [
            (
                r"Resistors \(6.0\,\Omega\) and \(3.0\,\Omega\) are in parallel across \(12\,\mathrm V\). Find equivalent resistance and total current.",
                r"Use \(1/R_{\rm eq}=1/R_1+1/R_2\), then \(I_{\rm total}=V/R_{\rm eq}\).",
                r"\(R_{\rm eq}=2.0\,\Omega\) and \(I_{\rm total}=6.0\,\mathrm A\).",
                "em-parallel-resistance-b4",
                2,
            ),
            (
                r"A \(50\,\mu\mathrm F\) capacitor charges through \(20\,\mathrm{k}\Omega\). Find the time constant and the fraction of final charge after one time constant.",
                r"Use \(\tau=RC\) and \(q/Q_f=1-e^{-t/\tau}\).",
                r"\(\tau=(2.0\times10^4)(50\times10^{-6})=1.0\,\mathrm s\); at \(t=\tau\), \(q/Q_f=1-e^{-1}\approx0.632\).",
                "em-rc-time-constant-b4",
                2,
            ),
            (
                r"A \(0.25\,\mathrm m\) rod moves at \(6.0\,\mathrm{m/s}\) perpendicular to a \(0.80\,\mathrm T\) field. Find the motional emf.",
                r"For mutually perpendicular rod, velocity, and field, use \(\mathcal E=BLv\).",
                r"\(\mathcal E=(0.80)(0.25)(6.0)=1.20\,\mathrm V\). Polarity follows the magnetic force \(q\vec v\times\vec B\).",
                "em-motional-emf-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Physics C Mechanics: Calculus Motion and Work",
        "AP Physics C: Mechanics",
        "Three original applications of derivatives, integrals, and work.",
        ["ap-physics-c-mechanics", "kinematics", "work-energy"],
        [
            (
                r"A particle has \(x(t)=t^3-3t+2\) in SI units. Find \(v\) and \(a\) at \(t=2.0\,\mathrm s\).",
                r"Differentiate position once for velocity and twice for acceleration.",
                r"\(v=3t^2-3\), so \(v(2)=9\,\mathrm{m/s}\); \(a=6t\), so \(a(2)=12\,\mathrm{m/s^2}\).",
                "mech-calculus-kinematics-b4",
                2,
            ),
            (
                r"A one-dimensional force is \(F(x)=4x\,\mathrm N\). Find the work done from \(x=0\) to \(x=3.0\,\mathrm m\).",
                r"Integrate force over displacement: \(W=\int_0^3F(x)\,dx\).",
                r"\(W=\int_0^3 4x\,dx=[2x^2]_0^3=18\,\mathrm J\).",
                "mech-variable-force-work-b4",
                2,
            ),
            (
                r"A particle starts at \(x=0\) with \(v(t)=6t-t^2\). Find when it first stops after \(t=0\) and its displacement by then.",
                r"Solve \(v=0\), then integrate velocity over the resulting interval.",
                r"The next zero is \(t=6\,\mathrm s\). \(\Delta x=\int_0^6(6t-t^2)dt=[3t^2-t^3/3]_0^6=36\,\mathrm m\).",
                "mech-integral-displacement-b4",
                3,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Physics C Mechanics: Rotation and Gravitation",
        "AP Physics C: Mechanics",
        "Three original applications of rotational inertia, orbital scaling, and angular momentum.",
        ["ap-physics-c-mechanics", "rotation", "gravitation"],
        [
            (
                r"A uniform disk has \(M=4.0\,\mathrm{kg}\), \(R=0.50\,\mathrm m\), and net torque \(1.0\,\mathrm{N\,m}\). Find its angular acceleration.",
                r"Use \(I=\tfrac12MR^2\) and \(\tau=I\alpha\).",
                r"\(I=0.50\,\mathrm{kg\,m^2}\), so \(\alpha=1.0/0.50=2.0\,\mathrm{rad/s^2}\).",
                "mech-disk-rotation-b4",
                2,
            ),
            (
                r"A satellite's circular-orbit radius changes from \(r\) to \(4r\) around the same planet. Find \(v_{new}/v_{old}\).",
                r"Equate gravity to radial force to obtain \(v=\sqrt{GM/r}\).",
                r"\(v_{new}/v_{old}=\sqrt{r/(4r)}=1/2\). The orbital period, however, increases by \(4^{3/2}=8\).",
                "mech-orbit-scaling-b4",
                2,
            ),
            (
                r"An isolated rotating student pulls masses inward so the system's moment of inertia halves. Compare final \(\omega\) and rotational kinetic energy with initial values.",
                r"Conserve \(L=I\omega\), then use \(K=L^2/(2I)\) for fixed angular momentum.",
                r"\(\omega_f=2\omega_i\) and \(K_f=2K_i\). Internal work by the student supplies the kinetic-energy increase.",
                "mech-angular-momentum-b4",
                3,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Environmental Science: Population and Energy",
        "AP Environmental Science",
        "Three original quantitative applications involving growth, efficiency, and population balance.",
        ["ap-environmental-science", "population", "energy"],
        [
            (
                "Estimate the doubling time of a population growing at 2.0% per year.",
                r"Apply the rule of 70: doubling time \(\approx70/r_{\%}\).",
                r"\(70/2.0=35\) years, an approximation assuming a roughly constant exponential rate.",
                "apes-rule-of-70-b4",
                1,
            ),
            (
                r"A power plant receives \(900\,\mathrm{MJ}\) of fuel energy and delivers \(315\,\mathrm{MJ}\) of electricity. Calculate efficiency and waste heat.",
                r"Use \(\eta=(\text{useful output}/\text{input})100\%\) and energy conservation.",
                r"\(\eta=(315/900)100\%=35\%\); waste heat is \(900-315=585\,\mathrm{MJ}\).",
                "apes-energy-efficiency-b4",
                2,
            ),
            (
                "During one year a population has 120 births, 80 deaths, 25 immigrants, and 15 emigrants. Find the net population change.",
                r"Use \(\Delta N=(B+I)-(D+E)\).",
                r"\(\Delta N=(120+25)-(80+15)=+50\) individuals.",
                "apes-population-balance-b4",
                1,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Environmental Science: Pollution and Resources",
        "AP Environmental Science",
        "Three original quantitative applications involving pollutant load, percent change, and trophic transfer.",
        ["ap-environmental-science", "pollution", "resources"],
        [
            (
                r"A stream carries \(2.0\times10^6\,\mathrm{L/day}\) with nitrate concentration \(8.0\,\mathrm{mg/L}\). Find the nitrate load in \(\mathrm{kg/day}\).",
                r"Multiply concentration by flow and convert \(10^6\,\mathrm{mg}=1\,\mathrm{kg}\).",
                r"Load \(=(8.0)(2.0\times10^6)=1.6\times10^7\,\mathrm{mg/day}=16\,\mathrm{kg/day}\).",
                "apes-pollution-load-b4",
                2,
            ),
            (
                "Annual water use falls from 500 million liters to 380 million liters. Calculate percent change.",
                r"Use \((\text{new}-\text{old})/\text{old}\times100\%\).",
                r"\((380-500)/500\times100\%=-24\%\), a 24% decrease.",
                "apes-percent-change-b4",
                1,
            ),
            (
                "Producers store 20,000 kJ. Transfer to primary consumers is 12%, then to secondary consumers is 8%. Find secondary-consumer energy.",
                "Apply each observed transfer efficiency sequentially rather than assuming 10%.",
                r"\(20{,}000(0.12)(0.08)=192\,\mathrm{kJ}\).",
                "apes-trophic-transfer-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Psychology: Research Statistics",
        "AP Psychology",
        "Three original applications of descriptive statistics, standard scores, and correlation.",
        ["ap-psychology", "research-methods", "statistics"],
        [
            (
                "A sample has scores 4, 6, 8, and 10. Calculate the mean and range.",
                r"Use \(\bar x=\sum x/n\) and range \(=\max-\min\).",
                "The mean is 28/4 = 7 and the range is 10 − 4 = 6.",
                "psych-mean-range-b4",
                1,
            ),
            (
                r"A score is 85 in a distribution with \(\mu=70\) and \(\sigma=10\). Find and interpret its \(z\)-score.",
                r"Use \(z=(x-\mu)/\sigma\).",
                r"\(z=(85-70)/10=1.5\); the score is 1.5 standard deviations above the mean.",
                "psych-z-score-b4",
                1,
            ),
            (
                r"A study reports \(r=-0.80\) between sleep hours and reported fatigue. Interpret \(r\), calculate \(r^2\), and identify one invalid conclusion.",
                r"Use sign for direction, \(|r|\) for linear strength, and square \(r\) for shared variation.",
                r"The association is strong and negative; \(r^2=0.64\). It is invalid to conclude that added sleep necessarily causes lower fatigue from correlation alone.",
                "psych-correlation-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Psychology: Behavioral Data and Design",
        "AP Psychology",
        "Three original skill applications involving schedules, retention, and experimental design.",
        ["ap-psychology", "behavior", "experimental-design"],
        [
            (
                "A game rewards a player after an unpredictable number of responses, averaging one reward per 12 responses. Identify the reinforcement schedule and predict response pattern.",
                "Classify by response versus time and fixed versus varying requirement.",
                "This is a variable-ratio schedule; it typically produces high, persistent responding with little post-reinforcement pause.",
                "psych-variable-ratio-b4",
                2,
            ),
            (
                "A student correctly recalls 30 of 40 terms one week after learning them. Calculate retention percentage and state one limitation of this measure.",
                r"Use \((\text{recalled}/\text{studied})100\%\), then separate measurement from explanation.",
                r"Retention is \((30/40)100\%=75\%\). The percentage alone does not reveal why ten terms were forgotten or control study conditions.",
                "psych-retention-rate-b4",
                2,
            ),
            (
                "A caffeine group studies at 8 a.m.; a no-caffeine group studies at 8 p.m. The morning group recalls more words. Identify the confound and propose a repair.",
                "Compare what changed systematically between conditions besides the independent variable.",
                "Time of day is confounded with caffeine. Randomly assign participants and test both groups at matched or counterbalanced times.",
                "psych-confound-design-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP US History: Quantitative and Source Skills",
        "AP US History",
        "Three original applications of quantitative evidence, sourcing, and causal argument.",
        ["ap-us-history", "historical-reasoning", "source-analysis"],
        [
            (
                "A table shows a population rising from 3.9 million in 1790 to 5.3 million in 1800. Calculate percent increase and state one claim the number supports.",
                "Compute percent change, then make a bounded historical claim rather than inferring a cause from one statistic.",
                r"The increase is \((5.3-3.9)/3.9\times100\%\approx35.9\%\). It supports rapid early national population growth, but not any single causal explanation.",
                "apush-quantitative-evidence-b4",
                2,
            ),
            (
                "An 1890 industrialist tells investors that concentrated corporations bring efficiency and national progress. Analyze how audience or purpose shapes the claim.",
                "Identify a sourcing feature and explain how it affects content or usefulness.",
                "Because the audience is investors, the speaker has reason to emphasize efficiency and minimize labor conflict or monopoly power; the source is useful evidence of pro-corporate justification.",
                "apush-hipp-industrialization-b4",
                2,
            ),
            (
                "Evaluate the claim that federal policy was the primary cause of western settlement from 1862 to 1890. Use two specific developments and one qualification.",
                "Build a causal hierarchy using named policy evidence and a distinct nonpolicy factor.",
                "The Homestead and Pacific Railway Acts directly lowered access barriers, supporting the claim; railroad capital, mineral discoveries, migration, and Indigenous dispossession qualify a policy-only explanation.",
                "apush-causation-west-b4",
                3,
            ),
        ],
        35,
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP World History: Data and Comparison Skills",
        "AP World History",
        "Three original applications of quantitative evidence, sourcing, and global comparison.",
        ["ap-world-history", "historical-reasoning", "comparison"],
        [
            (
                "A port's annual Indian Ocean trade rises from 240,000 to 330,000 tons. Calculate percent increase and explain one limit of using the figure alone.",
                "Calculate relative change, then distinguish scale evidence from evidence of cause or distribution.",
                r"The increase is \((330-240)/240\times100\%=37.5\%\). It shows growth in volume but not who profited, which goods changed, or why trade grew.",
                "world-quantitative-trade-b4",
                2,
            ),
            (
                "A colonial official in 1900 describes forced cash-crop production as a civilizing program. Analyze one sourcing implication.",
                "Connect the author's institutional position and purpose to a likely emphasis or omission.",
                "An official administering empire is likely to legitimize coercive extraction and omit local costs; the source reveals imperial ideology more reliably than colonized approval.",
                "world-sourcing-imperialism-b4",
                2,
            ),
            (
                "Compare one way the Ottoman and Mughal states used religion to support rule, and explain one meaningful difference.",
                "Use the same category for both states, provide specific evidence, and explain significance.",
                "Both linked authority to Islamic institutions and patronage. Ottoman rulers institutionalized the millet framework, while Akbar used broader accommodation such as abolishing the jizya; the difference reflected distinct strategies for diverse populations.",
                "world-comparison-empires-b4",
                3,
            ),
        ],
        35,
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Computer Science A: Tracing and Runtime",
        "AP Computer Science A",
        "Three original applications of loop tracing, growth analysis, and array mutation.",
        ["ap-csa", "code-tracing", "big-o"],
        [
            (
                "Trace `int s=0; for (int k=1; k<=5; k+=2) s += k*k;` and give the final value of `s`.",
                "List the values taken by `k` and update state once per iteration.",
                "`k` is 1, 3, 5, so `s = 1 + 9 + 25 = 35`.",
                "csa-loop-trace-b4",
                1,
            ),
            (
                "A method runs a full loop over an array of length `n` inside another full loop over the same array. Give its Big-O runtime and predict scaling when `n` doubles.",
                "Count the number of inner operations as a product of loop lengths.",
                r"The runtime is \(O(n^2)\); doubling \(n\) makes the dominant operation count about four times as large.",
                "csa-nested-loop-runtime-b4",
                2,
            ),
            (
                "Given `int[] a={2,4,6,8}; for(int i=1;i<a.length;i++) a[i]=a[i]-a[i-1];`, trace the final array.",
                "Apply updates in order, remembering that later iterations see already-mutated earlier elements.",
                "After `i=1`: `{2,2,6,8}`; after `i=2`: `{2,2,4,8}`; after `i=3`: `{2,2,4,4}`.",
                "csa-array-mutation-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP Computer Science Principles: Data and Efficiency",
        "AP Computer Science Principles",
        "Three original applications of binary capacity, media size, and algorithmic efficiency.",
        ["ap-csp", "data", "algorithmic-efficiency"],
        [
            (
                "What is the minimum number of bits needed to encode 100 distinct states? Justify.",
                r"Find the smallest \(n\) for which \(2^n\ge100\).",
                r"\(2^6=64<100\) and \(2^7=128\ge100\), so 7 bits are required.",
                "csp-bits-capacity-b4",
                1,
            ),
            (
                "An uncompressed 800 by 600 image uses 24 bits per pixel. Estimate ideal transmission time over a 12 megabit/s link.",
                "Multiply pixels by bits per pixel, then divide matching bit units by bandwidth.",
                r"Size \(=800(600)(24)=11.52\) megabits, so ideal time \(=11.52/12=0.96\) s; protocol overhead can make actual time longer.",
                "csp-image-transmission-b4",
                2,
            ),
            (
                "A binary search examines a sorted list of 1,024 items. Approximately how many halvings locate or eliminate a target, and why would linear search differ?",
                r"Use \(1024=2^{10}\) and compare logarithmic with linear growth.",
                r"About 10 halvings suffice because each comparison halves the search space; linear search may require about 1,024 checks.",
                "csp-search-efficiency-b4",
                2,
            ),
        ],
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP English Language: Rhetorical Analysis",
        "AP English Language",
        "Three original skill applications using rhetorical situation, contrast, and evidence commentary.",
        ["ap-english-language", "rhetorical-analysis", "commentary"],
        [
            (
                'A mayor says, "We can fund another study, or we can fund the buses that carry workers tonight." Analyze how the contrast advances the speaker\'s purpose.',
                "Name the choice, explain its local effect on the audience, and connect that effect to purpose.",
                "The either-or contrast makes delay seem abstract and immediate transit seem practical, pressuring residents to view bus funding as the urgent response. A strong answer can also question the false binary.",
                "lang-rhetorical-contrast-b4",
                2,
            ),
            (
                'An essay opens with one student\'s two-hour commute, then shifts to regional transit statistics. Explain the function of the structural shift.',
                "Track how the kind and scale of evidence change and what each stage asks the audience to do.",
                "The anecdote gives the problem a human cost; the statistics broaden it beyond one exceptional case. Together they invite empathy while supporting a policy-scale claim.",
                "lang-anecdote-data-b4",
                2,
            ),
            (
                'A writer calls a proposal "not a perfect bridge, but a bridge we can reinforce while crossing." Analyze the concession and metaphor.',
                "Explain each choice's effect and how the choices work together.",
                "The concession establishes measured credibility by admitting flaws, while the bridge metaphor frames action as revisable progress rather than irreversible risk, supporting qualified adoption.",
                "lang-concession-metaphor-b4",
                3,
            ),
        ],
        35,
    ),
    practice_quiz(
        "Formula Practice Batch 4 — AP English Language: Argument and Synthesis",
        "AP English Language",
        "Three original skill applications involving quantitative evidence, warrants, and source synthesis.",
        ["ap-english-language", "argument", "synthesis"],
        [
            (
                "A survey finds 62% of 500 volunteer respondents favor later school start times. Explain one valid use and one limitation of the statistic in an argument.",
                "Separate what the measured result supports from what the sampling method cannot support.",
                "The result can show support among these respondents, but voluntary response may overrepresent strongly interested people, so it cannot by itself establish 62% support among all families.",
                "lang-quantitative-evidence-b4",
                2,
            ),
            (
                "Claim: Cities should convert some parking lanes to trees because summer heat is dangerous. Supply a warrant connecting evidence about tree shade to the claim.",
                "State the unstated principle that makes the evidence relevant to the policy conclusion.",
                "If street trees measurably reduce pedestrian-level heat exposure, and cities should use feasible public-space changes to reduce preventable heat risk, then reallocating some curb space can advance public health.",
                "lang-argument-warrant-b4",
                2,
            ),
            (
                "Source A reports lower temperatures on shaded blocks; Source B warns that young trees need years and maintenance to deliver benefits. Write a synthesis move using both.",
                "Put sources in conversation by supporting, qualifying, or limiting one claim rather than summarizing separately.",
                "Source A supports canopy expansion as heat mitigation, while Source B qualifies the timeline: cities should plant now but pair trees with near-term shade structures and funded maintenance.",
                "lang-synthesis-qualification-b4",
                3,
            ),
        ],
        35,
    ),
]


def existing_ids(data):
    ids = set()
    for key in ("concepts", "formulas", "questionnaires"):
        for entry in data.get(key, []):
            if entry.get("id"):
                ids.add(entry["id"])
            for item in entry.get("items", []):
                if item.get("id"):
                    ids.add(item["id"])
    return ids


def unique_id(prefix, used):
    candidate = rid(prefix)
    while candidate in used:
        candidate = rid(prefix)
    used.add(candidate)
    return candidate


def add_formula_sheets(data):
    formulas = data.setdefault("formulas", [])
    names = {
        str(formula.get("name", "")).strip().casefold()
        for formula in formulas
    }
    used = existing_ids(data)
    added = 0
    for candidate in FORMULA_SHEETS:
        name_key = candidate["name"].strip().casefold()
        if name_key in names:
            continue
        formulas.append(
            {
                "id": unique_id("m-formula", used),
                "subject": candidate["subject"],
                "unit": candidate["unit"],
                "name": candidate["name"],
                "expression": "",
                "content": candidate["content"],
                "variables": "",
                "whenToUse": "",
                "sourceNote": SOURCE_NOTE,
            }
        )
        names.add(name_key)
        added += 1
    return added


def add_quizzes(data):
    questionnaires = data.setdefault("questionnaires", [])
    titles = {
        str(questionnaire.get("title", "")).strip().casefold()
        for questionnaire in questionnaires
    }
    used = existing_ids(data)
    added = 0
    items_added = 0
    for candidate in QUIZZES:
        title_key = candidate["title"].strip().casefold()
        if title_key in titles:
            continue
        candidate["id"] = unique_id("m-quiz", used)
        for item in candidate["items"]:
            item["id"] = unique_id("m-item", used)
        questionnaires.append(candidate)
        titles.add(title_key)
        added += 1
        items_added += len(candidate["items"])
    return added, items_added


def clean_title(value):
    title = re.sub(r"\s+", " ", str(value or "this concept")).strip()
    title = re.sub(r"^#+\s*", "", title)
    title = re.sub(r"^\d+(?:\.\d+)*[.)]?\s*", "", title).strip()
    if len(title) > 72:
        title = title[:69].rstrip() + "..."
    return title or "this concept"


def extended_examples(title, subject):
    title = clean_title(title)
    if "Computer Science" in subject:
        example_a = (
            f"Trace **{title}** on a three-value input. Record state after each step, "
            "then explain why the final output follows."
        )
        example_b = (
            f"A student generalizes **{title}** from one normal input. Test an empty or "
            "boundary input before accepting the claim."
        )
    elif any(word in subject for word in ("History", "Geography")):
        example_a = (
            f"For **{title}**, make a scoped claim, cite two named pieces of evidence, "
            "and explain the causal, comparative, or spatial link."
        )
        example_b = (
            f"A response about **{title}** lists accurate facts but no link. Facts earn "
            "analysis only when their relevance to the claim is explained."
        )
    elif "English" in subject:
        example_a = (
            f"For **{title}**, quote one precise textual choice and trace choice → "
            "audience effect → purpose or meaning."
        )
        example_b = (
            f"A student labels a device in **{title}** and stops. Naming is not analysis; "
            "explain how the language functions in context."
        )
    elif "Psychology" in subject:
        example_a = (
            f"Apply **{title}** to a small study: identify variables, calculate or compare "
            "the result, and state what the design permits."
        )
        example_b = (
            f"A student treats association in **{title}** as causation. Check assignment, "
            "confounds, and operational definitions first."
        )
    elif any(word in subject for word in ("Economics", "Government")):
        example_a = (
            f"For **{title}**, change one numerical input, compute the result, and connect "
            "it to the correctly labeled model or graph."
        )
        example_b = (
            f"A student shifts a curve in **{title}** when only an axis variable changed. "
            "Distinguish a movement along from a shift."
        )
    else:
        example_a = (
            f"For **{title}**, choose sample values, apply the governing relationship, "
            "track units, and interpret the result."
        )
        example_b = (
            f"A student applies **{title}** without checking assumptions. Test a limiting "
            "case and name the condition that may fail."
        )
    section = (
        "\n\n## Extended Examples\n\n"
        "### Example A (calculation or analysis)\n\n"
        f"{example_a}\n\n"
        "### Example B (conceptual trap)\n\n"
        f"{example_b}"
    )
    if len(section) > 600:
        raise ValueError(f"Extended example section unexpectedly long: {len(section)}")
    return section


def extend_concepts(data):
    concepts = data.setdefault("concepts", [])
    added = 0
    for concept in concepts:
        subject = concept.get("subject", "")
        if not isinstance(subject, str) or not subject.startswith("AP"):
            continue
        summary = concept.get("summary")
        if not isinstance(summary, str):
            summary = "" if summary is None else str(summary)
        if "## Extended Examples" in summary:
            continue
        concept["summary"] = summary.rstrip() + extended_examples(
            concept.get("title"), subject
        )
        added += 1
    return added


def main():
    with DATA.open("r", encoding="utf-8") as handle:
        data = json.load(handle)

    formulas_added = add_formula_sheets(data)
    quizzes_added, items_added = add_quizzes(data)
    concepts_extended = extend_concepts(data)

    with DATA.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, ensure_ascii=False, indent=2)
        handle.write("\n")

    print(f"Formulas added: {formulas_added}")
    print(f"Quizzes added: {quizzes_added}")
    print(f"Quiz items added: {items_added}")
    print(f"Concepts extended: {concepts_extended}")


if __name__ == "__main__":
    main()
