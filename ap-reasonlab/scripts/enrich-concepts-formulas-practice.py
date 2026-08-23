#!/usr/bin/env python3
"""Add CED references, concept scaffolds, and formula-linked AP practice."""

import json
import random
import re
import string
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
SOURCE_NOTE = "College Board AP CED / equation sheet"
FORMULA_UNIT = "CED Formula Reference"
FORMULA_TAGS = [
    "formula-practice",
    "ced-aligned",
    "generated",
    "with-solutions",
]
GEN_NOTE = (
    "Original formula-linked practice aligned to the College Board AP CED. "
    "Not College Board exam verbatim. Includes process and answers."
)


def rid(prefix):
    """Return an id such as m-formula-12ab34cd-a1b2c."""
    hex_part = f"{random.getrandbits(32):08x}"
    suffix = "".join(
        random.choices(string.ascii_lowercase + string.digits, k=5)
    )
    return f"{prefix}-{hex_part}-{suffix}"


def mcq(prompt, choices, answer_idx, steps, concept_id=None, tier=2):
    letter = "ABCD"[answer_idx]
    answer = choices[answer_idx]
    body = answer.split(") ", 1)[-1] if ") " in answer else answer
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
            "Identify the relevant formula and its conditions.",
            "Substitute with units, then check the direction and scale.",
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
            "State the formula and conditions before substituting.",
            "Show the intermediate quantity and preserve units.",
            "Interpret the result in the problem's context.",
        ],
    }


def quiz(title, subject, description, tags, items, minutes=30, tier=2):
    return {
        "id": rid("m-quiz"),
        "title": title,
        "subject": subject,
        "kind": "generated",
        "description": description,
        "generationNote": GEN_NOTE,
        "estimatedMinutes": minutes,
        "tags": FORMULA_TAGS + tags,
        "items": items,
        "difficultyTier": tier,
    }


FORMULA_SHEETS = [
    {
        "subject": "AP Statistics",
        "name": "AP Statistics CED Formula Table",
        "content": r"""# AP Statistics CED Formula Table

Use this table to choose a procedure; formulas do not replace checking conditions or interpreting results in context.

| Unit | Formula or relationship | AP use |
| --- | --- | --- |
| 1: One-variable data | $\mathrm{IQR}=Q_3-Q_1$ | Describe spread; flag a potential outlier below $Q_1-1.5\mathrm{IQR}$ or above $Q_3+1.5\mathrm{IQR}$. |
| 1: Standardization | $z=\dfrac{x-\mu}{\sigma}$ | Express a value in standard-deviation units; use $\bar x,s$ for sample standardization when appropriate. |
| 2: Least-squares regression | $\hat y=a+bx$ | Predict a response within the useful data range. |
| 2: Regression coefficients | $b=r\dfrac{s_y}{s_x},\quad a=\bar y-b\bar x$ | Connect correlation, center, and spread to the LSRL. |
| 2: Residual | $e=y-\hat y$ | Assess prediction error; residual plots should show no systematic pattern. |
| 3: Probability | $P(A^c)=1-P(A)$; $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ | Combine events without double-counting overlap. |
| 3: Conditional probability | $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ | Restrict the sample space to cases where $B$ occurred. |
| 3: Independence | $P(A\cap B)=P(A)P(B)$ | Use only when events are independent. |
| 4: Random variables | $\mu_{X\pm Y}=\mu_X\pm\mu_Y$ | Add or subtract expected values. |
| 4: Independent variances | $\sigma^2_{X\pm Y}=\sigma_X^2+\sigma_Y^2$ | Add variances—even when random variables are subtracted. |
| 4: Binomial | $P(X=k)=\binom nkp^k(1-p)^{n-k}$ | Fixed $n$, independent trials, two outcomes, constant $p$. |
| 4: Binomial center/spread | $\mu=np,\quad \sigma=\sqrt{np(1-p)}$ | Describe a binomial count. |
| 5: Sample proportion | $\mu_{\hat p}=p,\quad \sigma_{\hat p}=\sqrt{\dfrac{p(1-p)}n}$ | Use with random sampling and the 10% condition; Normal approximation needs large counts. |
| 5: Sample mean | $\mu_{\bar x}=\mu,\quad \sigma_{\bar x}=\dfrac{\sigma}{\sqrt n}$ | Central Limit Theorem supports approximate Normality for sufficiently large $n$. |
| 6: One-proportion CI | $\hat p\pm z^*\sqrt{\dfrac{\hat p(1-\hat p)}n}$ | Estimate one population proportion after checking random, 10%, and success/failure conditions. |
| 6: Two-proportion CI | $(\hat p_1-\hat p_2)\pm z^*\sqrt{\dfrac{\hat p_1(1-\hat p_1)}{n_1}+\dfrac{\hat p_2(1-\hat p_2)}{n_2}}$ | Estimate a difference of independent proportions. |
| 7: One-mean inference | $t=\dfrac{\bar x-\mu_0}{s/\sqrt n}$; CI $\bar x\pm t^*\dfrac{s}{\sqrt n}$ | Use a $t$ procedure when population $\sigma$ is unknown. |
| 7: Two-mean CI | $(\bar x_1-\bar x_2)\pm t^*\sqrt{\dfrac{s_1^2}{n_1}+\dfrac{s_2^2}{n_2}}$ | Compare independent population means. |
| 8: Chi-square | $\chi^2=\sum\dfrac{(O-E)^2}{E}$ | Goodness-of-fit, homogeneity, or independence; expected counts, not observed counts, set conditions. |
| 8: Expected count | $E=\dfrac{(\text{row total})(\text{column total})}{n}$ | Find an expected cell count under independence. |
| 9: Slope inference | $t=\dfrac{b-\beta_0}{SE_b}$; CI $b\pm t^*SE_b$ | Test or estimate the population regression slope after checking LINE conditions. |

## Inference reminders

- A confidence level describes the long-run success rate of the method, not the probability that one fixed parameter moves.
- A $p$-value is computed assuming the null hypothesis and is not $P(H_0\text{ is true})$.
- Statistical significance does not by itself establish practical importance or causation.""",
    },
    {
        "subject": "AP Calculus AB/BC",
        "name": "AP Calculus AB/BC CED Formula Table",
        "content": r"""# AP Calculus AB/BC CED Formula Table

| Topic | Formula | When to use |
| --- | --- | --- |
| Limits | $f'(a)=\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}h$ | Connect a difference quotient to instantaneous rate of change. |
| Continuity | $\lim_{x\to a}f(x)=f(a)$ | Check that the limit exists and equals the defined value. |
| Product/quotient | $(fg)'=f'g+fg'$; $\left(\frac fg\right)'=\frac{f'g-fg'}{g^2}$ | Differentiate combined functions. |
| Chain rule | $\dfrac d{dx}f(g(x))=f'(g(x))g'(x)$ | Differentiate a composition. |
| Inverse derivative | $(f^{-1})'(a)=\dfrac1{f'(f^{-1}(a))}$ | Find an inverse-function slope. |
| Linearization | $L(x)=f(a)+f'(a)(x-a)$ | Approximate near $x=a$. |
| Motion | $v=s'$, $a=v'=s''$, speed $=|v|$ | Interpret derivatives with units and signs. |
| Definite integral | $\displaystyle\int_a^b f(x)\,dx$ | Net signed accumulation or area with sign. |
| FTC | $\displaystyle\int_a^bf=F(b)-F(a)$, $F'=f$ | Evaluate a definite integral. |
| FTC + chain rule | $\dfrac d{dx}\int_a^{g(x)}f(t)\,dt=f(g(x))g'(x)$ | Differentiate accumulation with a variable bound. |
| Average value | $f_{\rm avg}=\dfrac1{b-a}\int_a^bf(x)\,dx$ | Find the mean value of a function. |
| Differential equation | $\dfrac{dy}{dx}=f(x,y)$ | Build slope fields, Euler steps, or separable solutions. |
| Exponential model | $\dfrac{dy}{dt}=ky\Rightarrow y=y_0e^{kt}$ | Model growth or decay proportional to amount. |
| Area/volume | $A=\int(\text{top}-\text{bottom})\,dx$; $V=\pi\int(R^2-r^2)\,dx$ | Set bounds from intersections and use geometric cross sections. |
| BC geometric series | $\sum_{n=0}^\infty ar^n=\dfrac a{1-r}$ for $|r|<1$ | Sum a convergent geometric series. |
| BC Taylor series | $f(x)=\sum_{n=0}^\infty\dfrac{f^{(n)}(a)}{n!}(x-a)^n$ | Represent a function locally and estimate error. |
| BC convergence | $R=\lim\left|\dfrac{a_{n+1}}{a_n}\right|$ | Ratio test: $R<1$ converges, $R>1$ diverges; test endpoints separately. |

Always distinguish a function value, a derivative (rate), and an integral (accumulation), and include units in applied conclusions.""",
    },
    {
        "subject": "AP Chemistry",
        "name": "AP Chemistry CED Formula Table",
        "content": r"""# AP Chemistry CED Formula Table

| Area | Relationship | Conditions and use |
| --- | --- | --- |
| Stoichiometry | $n=\dfrac mM$; particles $=nN_A$ | Convert through moles and use balanced-equation coefficients. |
| Solutions | $M=\dfrac{\text{mol solute}}{L\text{ solution}}$; $M_1V_1=M_2V_2$ | Concentration and dilution with conserved solute. |
| Ideal gases | $PV=nRT$ | Use absolute temperature and compatible $R$ units. |
| Gas mixtures | $P_{\rm total}=\sum P_i$; $P_i=X_iP_{\rm total}$ | Dalton's law for ideal mixtures. |
| First law | $\Delta U=q+w$; $w=-P_{\rm ext}\Delta V$ | Chemistry sign convention: work on the system is positive. |
| Enthalpy | $q_p=\Delta H$; $\Delta H^\circ_{\rm rxn}=\sum n\Delta H_f^\circ(\text{prod})-\sum n\Delta H_f^\circ(\text{react})$ | Constant-pressure heat and Hess-law calculations. |
| Calorimetry | $q=mc\Delta T$; $q_{\rm system}+q_{\rm surroundings}=0$ | Track signs between reacting system and calorimeter. |
| Entropy/free energy | $\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ$ | Predict thermodynamic favorability at stated temperature. |
| Equilibrium | $K_c=\dfrac{\prod[\text{products}]^{\nu}}{\prod[\text{reactants}]^{\nu}}$ | Omit pure solids and liquids; exponents are coefficients. |
| Reaction quotient | Compare $Q$ with $K$ | $Q<K$: net forward; $Q>K$: net reverse. |
| Kinetics | $\text{rate}=k[A]^m[B]^n$; $\ln[A]_t=-kt+\ln[A]_0$ for first order | Determine orders experimentally; stoichiometry alone does not set them. |
| Arrhenius | $\ln k=-\dfrac{E_a}{RT}+\ln A$ | Relate temperature to rate constant or use a linear plot. |
| Acids/bases | $\mathrm{pH}=-\log[H_3O^+]$; $\mathrm{pOH}=-\log[OH^-]$ | At $25^\circ$C, $\mathrm{pH+pOH}=14.00$. |
| Weak acid | $K_a=\dfrac{[H_3O^+][A^-]}{[HA]}$ | Use an equilibrium table and verify approximations. |
| Buffer | $\mathrm{pH}=pK_a+\log\dfrac{[A^-]}{[HA]}$ | Perform strong-acid/base stoichiometry before this equation. |
| Electrochemistry | $E^\circ_{\rm cell}=E^\circ_{\rm cathode}-E^\circ_{\rm anode}$ | Reduction at cathode, oxidation at anode. |
| Cell energy | $\Delta G^\circ=-nFE^\circ$; $\Delta G^\circ=-RT\ln K$ | Connect voltage, favorability, and equilibrium. |
| Nernst | $E=E^\circ-\dfrac{RT}{nF}\ln Q$ | Find nonstandard cell potential. |

## Constants

$N_A=6.022\times10^{23}\ \mathrm{mol^{-1}}$, $R=8.314\ \mathrm{J\,mol^{-1}K^{-1}}$, and $F=96485\ \mathrm{C\,mol^{-1}}$.""",
    },
    {
        "subject": "AP Biology",
        "name": "AP Biology CED Formula Table",
        "content": r"""# AP Biology CED Quantitative Formula Table

| Skill | Formula | Biological interpretation |
| --- | --- | --- |
| Water potential | $\Psi=\Psi_s+\Psi_p$ | Water tends to move from higher (less negative) $\Psi$ to lower $\Psi$. |
| Solute potential | $\Psi_s=-iCRT$ | Use molarity, Kelvin temperature, and the ionization constant $i$. |
| Surface area/volume | $\dfrac{SA}{V}$ | Smaller cells usually exchange materials more efficiently. |
| Hardy-Weinberg | $p+q=1$; $p^2+2pq+q^2=1$ | Under model assumptions, connect allele and genotype frequencies. |
| Chi-square | $\chi^2=\sum\dfrac{(O-E)^2}{E}$ | Compare observed genetic/ecological counts with a null model. |
| Degrees of freedom | $df=(\text{categories}-1)$ | Use for a goodness-of-fit critical-value comparison. |
| Exponential growth | $\dfrac{dN}{dt}=rN$; $N_t=N_0e^{rt}$ | Unlimited-resource growth at constant per-capita rate. |
| Logistic growth | $\dfrac{dN}{dt}=rN\left(\dfrac{K-N}{K}\right)$ | Growth slows as population size approaches carrying capacity. |
| Population rate | $\dfrac{\Delta N}{\Delta t}=B-D+I-E$ | Account for births, deaths, immigration, and emigration. |
| Primary productivity | $\mathrm{NPP=GPP-R}$ | Energy stored after producer respiration. |
| Ecological efficiency | $\mathrm{efficiency}=\dfrac{\text{energy at higher level}}{\text{energy at lower level}}\times100\%$ | Quantify trophic transfer; do not assume exactly 10%. |
| Rate | $\text{rate}=\dfrac{\Delta y}{\Delta t}$ | Interpret graph slope with biological units. |
| Percent change | $\dfrac{\text{new-old}}{\text{old}}\times100\%$ | State sign and biological meaning. |
| Dilution/absorbance | $C_1V_1=C_2V_2$; $A=\varepsilon bc$ | Prepare standards and connect absorbance to concentration in a valid range. |

Equations support evidence-based explanations: define variables, state assumptions, show substitutions, and interpret the result biologically.""",
    },
    {
        "subject": "AP Environmental Science",
        "name": "AP Environmental Science CED Formula Table",
        "content": r"""# AP Environmental Science CED Formula Table

| Topic | Relationship | Application |
| --- | --- | --- |
| Population change | $\Delta N=(B+I)-(D+E)$ | Net change from births, immigration, deaths, and emigration. |
| Growth rate | $\dfrac{\Delta N}{N}\times100\%$ | Express population change relative to starting size. |
| Doubling time | $\text{years}\approx\dfrac{70}{\text{annual growth rate (\%)}}$ | Rule-of-70 estimate for roughly constant exponential growth. |
| Exponential growth | $N_t=N_0e^{rt}$ | Model unconstrained growth at constant $r$. |
| Logistic growth | $\dfrac{dN}{dt}=rN(1-N/K)$ | Include carrying-capacity limits. |
| Energy efficiency | $\eta=\dfrac{\text{useful output}}{\text{input}}\times100\%$ | Compare technologies or trophic transfers. |
| Electricity | $E=Pt$ | Convert power and operating time to energy; track kW and kWh. |
| Percent change | $\dfrac{\text{new-old}}{\text{old}}\times100\%$ | Quantify changes in emissions, use, or concentration. |
| Dose | $\text{dose}=\dfrac{\text{amount received}}{\text{body mass}}$ | Compare exposure in $\mathrm{mg/kg}$ or similar units. |
| Dose-response | $\mathrm{LD}_{50}$ or $\mathrm{ED}_{50}$ | Median lethal/effective dose; a lower LD50 indicates greater acute toxicity under matched conditions. |
| Pollution loading | $\text{load}=(\text{concentration})(\text{flow rate})$ | Convert concentration and discharge to mass per time. |
| Rule of ten | one order of magnitude $=10\times$ | Interpret logarithmic scales and scientific notation. |

## Dose-response cautions

A threshold, no-observed-effect level, or LD50 does not by itself measure persistence, bioaccumulation, chronic effects, or risk to every species. Risk combines hazard with exposure.""",
    },
    {
        "subject": "AP Macroeconomics",
        "name": "AP Macroeconomics CED Formula Table",
        "content": r"""# AP Macroeconomics CED Formula Table

| Topic | Relationship | AP use |
| --- | --- | --- |
| Expenditure GDP | $Y=C+I+G+NX$ | Add final domestic spending; $NX=X-M$. |
| Income approach | GDP $=$ wages + rent + interest + profit + indirect adjustments | Recognize equivalent measures of production. |
| Real GDP | $\text{Real GDP}=\dfrac{\text{Nominal GDP}}{\text{GDP deflator}}\times100$ | Remove price-level change when deflator base is 100. |
| GDP deflator | $\dfrac{\text{Nominal GDP}}{\text{Real GDP}}\times100$ | Broad domestic-production price index. |
| Inflation | $\dfrac{\mathrm{CPI}_{new}-\mathrm{CPI}_{old}}{\mathrm{CPI}_{old}}\times100\%$ | Compute percentage price-level change. |
| Unemployment | $\dfrac{\text{unemployed}}{\text{labor force}}\times100\%$ | Labor force is employed plus actively seeking work. |
| Spending multiplier | $\dfrac1{1-MPC}=\dfrac1{MPS}$ | Maximum simple-model change in aggregate demand from autonomous spending. |
| Tax multiplier | $-\dfrac{MPC}{1-MPC}$ | Taxes first alter disposable income and consumption. |
| Money equation | $MV=PY$ | Connect money supply, velocity, price level, and real output. |
| Real interest rate | $r\approx i-\pi$ | Fisher approximation using expected or actual inflation as specified. |
| Phillips curve | short run: inflation and unemployment may move inversely | Supply shocks shift SRPC; long-run curve is vertical at natural unemployment. |
| Current account | exports, imports, net income, and transfers | A trade deficit is a major component of a current-account deficit. |
| Balance of payments | current account $+$ capital/financial account $\approx0$ | A current-account deficit is matched by a financial-account surplus, ignoring discrepancy. |
| Exchange rate | price of one currency in another | Appreciation makes that country's exports relatively dearer and imports cheaper, all else equal. |

Always pair a calculation with the correct graph shift and a ceteris-paribus explanation.""",
    },
    {
        "subject": "AP Microeconomics",
        "name": "AP Microeconomics CED Formula Table",
        "content": r"""# AP Microeconomics CED Formula Table

| Topic | Relationship | AP use |
| --- | --- | --- |
| Price elasticity | $E_d=\left|\dfrac{\%\Delta Q_d}{\%\Delta P}\right|$ | $E_d>1$ elastic, $E_d<1$ inelastic; midpoint method avoids direction bias. |
| Cross/income elasticity | $E_{xy}=\dfrac{\%\Delta Q_x}{\%\Delta P_y}$; $E_I=\dfrac{\%\Delta Q}{\%\Delta I}$ | Classify substitutes/complements and normal/inferior goods by sign. |
| Total revenue | $TR=P\times Q$ | For elastic demand, price and TR move oppositely. |
| Profit | $\pi=TR-TC$ | Economic profit includes explicit and implicit opportunity costs. |
| Marginal cost | $MC=\dfrac{\Delta TC}{\Delta Q}$ | Profit-maximizing firms produce where $MR=MC$ if the shutdown condition is met. |
| Average costs | $ATC=TC/Q$; $AVC=VC/Q$; $AFC=FC/Q$ | $ATC=AVC+AFC$. |
| Competitive revenue | $P=MR=AR$ | A price-taking firm's demand is horizontal at market price. |
| Monopoly revenue | $MR<P$ for a downward-sloping demand curve | Choose quantity at $MR=MC$, then use demand for price. |
| Labor demand | $MRP_L=MP_L\times MR$ | Hire each unit of labor while $MRP_L\ge MRC_L$. |
| Competitive labor | $MRC_L=w$ | Wage is the marginal resource cost for a price-taking employer. |
| Consumer surplus | area below demand and above price | Measure buyer gains from trade. |
| Producer surplus | area above supply and below price | Measure seller gains from trade. |
| Tax revenue | $(\text{tax per unit})(Q_{\rm after})$ | Rectangle between buyer and seller prices. |
| Deadweight loss | $\tfrac12(\text{wedge})(Q_{\rm before}-Q_{\rm after})$ for a linear graph | Triangle of mutually beneficial trades no longer made. |

Graph labels matter: identify the market, axes, equilibrium, wedge, quantity change, and welfare areas.""",
    },
    {
        "subject": "AP Psychology",
        "name": "AP Psychology Research Methods Formula Table",
        "content": r"""# AP Psychology Research Methods Formula Table

| Measure | Relationship | Interpretation |
| --- | --- | --- |
| Mean | $\bar x=\dfrac{\sum x_i}{n}$ | Sensitive to extreme scores. |
| Range | $\max-\min$ | Quick spread measure that uses only endpoints. |
| Standard deviation | typical distance of scores from the mean | Compare variability only with attention to scale and shape. |
| Standard score | $z=\dfrac{x-\mu}{\sigma}$ | Positive is above the mean; magnitude is distance in standard deviations. |
| Correlation | $-1\le r\le1$ | Sign gives direction; $|r|$ gives linear strength. |
| Shared variation | $r^2$ | Proportion of linear variation statistically associated in a simple two-variable model. |
| Percent change | $\dfrac{\text{new-old}}{\text{old}}\times100\%$ | Describe a measured change without claiming a cause. |

## Research-method rules

- Correlation does not establish causation because directionality and third variables remain possible.
- Random sampling supports generalization; random assignment supports causal inference.
- Statistical significance does not measure effect size, practical importance, or replication.
- Operational definitions make variables measurable and a study reproducible.
- Informed consent, protection from harm, confidentiality, and debriefing guide ethical human research.""",
    },
    {
        "subject": "AP Computer Science A",
        "name": "AP Computer Science A Big-O Formula Table",
        "content": r"""# AP Computer Science A Big-O Reference Table

This is a reasoning reference, not a collection of code solutions. Let $n$ be input size.

| Growth | Typical operation | Scaling intuition |
| --- | --- | --- |
| $O(1)$ | One indexed access or fixed number of operations | Work does not grow with $n$. |
| $O(\log n)$ | Binary search on sorted data | Each step discards a constant fraction. |
| $O(n)$ | One complete traversal | Doubling $n$ roughly doubles work. |
| $O(n\log n)$ | Efficient comparison sorting such as merge sort | Logarithmic levels, with linear work per level. |
| $O(n^2)$ | Two full nested traversals | Doubling $n$ roughly quadruples work. |
| $O(2^n)$ | Exploring every include/exclude combination | Adding one input can roughly double work. |

## AP reasoning rules

- Sequential search is $O(n)$ in the worst case; binary search is $O(\log n)$ only when ordering and indexing support halving.
- A loop over $n$ elements containing another full $n$ traversal is generally $O(n^2)$.
- Consecutive traversals add costs, so $O(n)+O(n)=O(n)$.
- Nested loops whose bounds shrink can still sum to a quadratic amount of work.
- Big-O describes growth, not exact running time, language speed, or correctness.
- Recursion must make progress toward a reachable base case; analyze both depth and work per call.""",
    },
    {
        "subject": "AP Computer Science Principles",
        "name": "AP Computer Science Principles Computing Formula Table",
        "content": r"""# AP Computer Science Principles Computing Formula Table

| Topic | Relationship | Use |
| --- | --- | --- |
| Unsigned binary range | $0$ through $2^n-1$ | An $n$-bit unsigned value has $2^n$ distinct patterns. |
| Bits required | smallest $n$ with $2^n\ge N$ | Encode at least $N$ distinct states. |
| Binary place value | $\sum b_i2^i$ | Convert a binary numeral to decimal. |
| Hexadecimal | one hex digit $=4$ bits | Convert by grouping binary digits in fours. |
| Data size | bits $=(\text{samples})(\text{bits/sample})$ | Estimate uncompressed digital data. |
| Transmission time | $\dfrac{\text{data size}}{\text{bandwidth}}$ | Ideal lower bound; use matching bit/byte units. |
| Bandwidth | data transmitted per unit time | Capacity differs from latency, the delay before/while communication occurs. |
| Sequential search | up to proportional to $n$ checks | Linear-time growth. |
| Binary search | proportional to $\log_2n$ checks | Requires sorted data and repeatedly halves the remaining range. |
| Two full nested passes | proportional to $n^2$ operations | Polynomial, but grows faster than a single pass. |
| Exponential enumeration | proportional to $2^n$ | Generally not reasonable for large input sizes. |

## Representation and runtime reminders

Overflow occurs when a value lies outside the available bit range. Lossless compression permits exact reconstruction; lossy compression discards information. Runtime categories compare growth as input increases and do not guarantee a particular clock time.""",
    },
    {
        "subject": "AP Physics 2",
        "name": "AP Physics 2 Thermo Optics Waves Modern Formula Table",
        "content": r"""# AP Physics 2 Thermodynamics, Optics, Waves, and Modern Formula Table

| Area | Formula | Use |
| --- | --- | --- |
| Ideal gas | $PV=nRT=Nk_BT$ | Relate macroscopic state variables using absolute temperature. |
| First law | $\Delta U=Q-W_{\rm by}$ | Track heat into a gas and work done by it. |
| Gas work | $W_{\rm by}=\int P\,dV$ | Signed area under a $P$-$V$ path. |
| Efficiency | $\eta=W_{\rm out}/Q_H=1-Q_C/Q_H$ | Heat-engine performance. |
| Waves | $v=f\lambda$ | Frequency stays fixed at a boundary; speed and wavelength may change. |
| Refraction | $n_1\sin\theta_1=n_2\sin\theta_2$ | Angles are measured from the normal. |
| Thin lens/mirror | $\dfrac1f=\dfrac1{d_o}+\dfrac1{d_i}$ | Apply the course sign convention consistently. |
| Magnification | $m=\dfrac{h_i}{h_o}=-\dfrac{d_i}{d_o}$ | Sign indicates orientation. |
| Photon | $E=hf=hc/\lambda$ | Quantized electromagnetic energy. |
| Photoelectric effect | $K_{\max}=hf-\phi$ | Frequency controls maximum electron energy. |
| Matter wavelength | $\lambda=h/p$ | de Broglie wavelength of a particle. |
| Mass-energy | $E=mc^2$ | Relate mass defect to energy. |
| Radioactive decay | $N=N_0e^{-\lambda t}$; $t_{1/2}=\ln2/\lambda$ | Model random decay of a large sample. |

State idealizations, signs, and units before applying a special-case equation.""",
    },
    {
        "subject": "AP US History",
        "name": "AP US History Skills Reference",
        "content": r"""# AP US History Skills Reference

## Thesis

Make a historically defensible claim that answers every part of the prompt and establishes a line of reasoning. A thesis is not a topic announcement.

## Contextualization

Situate the argument in a broader development before, during, or after the prompt's period, then explain the connection.

## HIPP source analysis

| Lens | Question |
| --- | --- |
| Historical situation | What immediate development shaped the document? |
| Intended audience | Whom was the creator trying to reach? |
| Purpose | What action or belief did the creator seek? |
| Point of view | How did the creator's position shape the source? |

## SAQ

Answer the verb directly, identify specific evidence, and explain how the evidence supports the answer. Treat each part independently.

## DBQ / LEQ

Organize evidence into claims, use documents as evidence rather than summaries, add relevant outside evidence, source documents with HIPP, and develop complexity through qualification, connection, or multiple variables.""",
    },
    {
        "subject": "AP World History",
        "name": "AP World History Skills Reference",
        "content": r"""# AP World History Skills Reference

## Historical reasoning

| Skill | Core move |
| --- | --- |
| Comparison | Establish a meaningful similarity and difference under the same categories. |
| Causation | Rank or connect causes and effects rather than listing them. |
| Continuity and change | Identify both, anchor them in time, and explain why the pattern changed or persisted. |

## Thesis and contextualization

Answer the prompt with a defensible line of reasoning. Connect the argument to a broader regional, interregional, or global development.

## HIPP

Explain how historical situation, intended audience, purpose, or point of view affects a source's meaning or usefulness.

## SAQ / DBQ / LEQ

Use specific evidence, explain its relevance, and organize paragraphs around claims. In a DBQ, use documents as evidence, add outside knowledge, source multiple documents, and pursue complexity through interactions across regions, periods, or causes.""",
    },
    {
        "subject": "AP European History",
        "name": "AP European History Skills Reference",
        "content": r"""# AP European History Skills Reference

## Claim-evidence-reasoning

1. State a defensible claim responsive to the prompt.
2. Select precise evidence from the correct place and period.
3. Explain how the evidence advances the line of reasoning.

## Source analysis (HIPP)

Analyze historical situation, intended audience, purpose, or point of view; do not merely label it. Connect the feature to the document's argument or limitation.

## Reasoning processes

- **Causation:** distinguish long-term conditions, triggers, and consequences.
- **Comparison:** use consistent categories and explain significance.
- **Continuity/change:** establish a baseline and explain turning points.

## SAQ / DBQ / LEQ

Answer every task verb. Build DBQ paragraphs around arguments, not document order. Add outside evidence and qualification, contradiction, or cross-period connections where they genuinely deepen the argument.""",
    },
    {
        "subject": "AP Human Geography",
        "name": "AP Human Geography Skills Reference",
        "content": r"""# AP Human Geography Skills Reference

## Spatial reasoning

Move from **pattern** (what/where) to **process** (why) to **consequence** (so what). State the geographic scale because a relationship may change from local to global.

## Models and maps

| Tool | Required reasoning |
| --- | --- |
| Choropleth map | Read normalized rates, not raw totals; check class intervals. |
| Dot/proportional map | Infer concentration while respecting symbol scale. |
| Demographic transition | Link birth/death-rate change to social and economic processes. |
| Gravity model | Interaction rises with size and falls with distance/friction. |
| Core-periphery model | Explain uneven power, investment, and flows without treating the model as universal. |

## FRQ structure

Define precisely, describe a visible pattern, explain a process with because/how language, then apply it to a named place or stimulus. For comparison, use the same category for both places.

## Common rubric moves

Distinguish scale, avoid environmental determinism, identify model limits, and connect evidence to a geographic mechanism.""",
    },
    {
        "subject": "AP English Language",
        "name": "AP English Language Rhetorical Skills Reference",
        "content": r"""# AP English Language Rhetorical Skills Reference

## Rhetorical situation

Identify exigence, audience, purpose, context, writer/speaker, and message before naming choices.

## Rhetorical analysis

Use the chain **choice → local effect → audience response → purpose**. Name a choice precisely (contrast, syntax, anecdote, concession, evidence, diction), quote or paraphrase briefly, and explain function rather than assigning a generic emotion.

## Argument

Write a defensible thesis, establish reasons, use specific evidence, and explain the warrant connecting evidence to the claim. Address a counterargument through concession, rebuttal, or qualification.

## Synthesis

Use sources in conversation: group by idea, attribute accurately, and explain how each source supports, complicates, or limits the argument. Do not write one paragraph per source.

## Line of reasoning

Each paragraph should advance a distinct reason while transitions clarify how the reasons build. Sophistication comes from meaningful nuance and control, not decorative vocabulary.""",
    },
    {
        "subject": "AP English Literature",
        "name": "AP English Literature Analysis Skills Reference",
        "content": r"""# AP English Literature Analysis Skills Reference

## Thesis

Make an interpretive claim that answers the prompt and names the work's complexity; avoid merely restating plot or a device list.

## Evidence and commentary

Use brief, precise textual evidence. For each detail, explain **how** the writer's choice develops character, conflict, setting, structure, narration, or meaning.

## Poetry

Track speaker, situation, shifts, imagery, diction, syntax, sound, and form. Connect technique to an evolving interpretation rather than identifying devices in isolation.

## Prose fiction

Analyze perspective, selection of detail, characterization, setting, pacing, and structure. Distinguish narrator from author.

## Literary argument

Choose a work that fits the prompt, use accurate moments from across the work, and connect them to an interpretation of the work as a whole.

## Complexity

Develop tensions, contradictions, ambiguities, or changes over time. A qualified interpretation is stronger than claiming one device always creates one universal effect.""",
    },
]


def clean_title(value):
    title = re.sub(r"^\s*#+\s*", "", str(value or "this concept"))
    title = re.sub(r"^\s*\d+(?:\.\d+)*[.)]?\s*", "", title).strip()
    return title or "this concept"


def subject_lens(subject):
    if "Calculus" in subject or "Statistics" in subject:
        return (
            "AP questions test whether students can select a mathematical model, "
            "justify its conditions, and interpret the result rather than merely substitute.",
            [
                "Identify the requested quantity and list the information supplied.",
                "Choose the relationship or procedure and state why its conditions hold.",
                "Substitute or transform symbolically, then compute with signs and units.",
                "Interpret the result in context and check whether its magnitude is reasonable.",
            ],
            "Using a familiar formula before checking its assumptions or explaining the result.",
        )
    if any(
        label in subject
        for label in ("Physics", "Chemistry", "Biology", "Environmental")
    ):
        return (
            "AP questions use models to connect evidence, mechanisms, and measurable outcomes. "
            "Credit usually depends on naming assumptions and explaining why the result follows.",
            [
                "Represent the system, variables, evidence, and relevant assumptions.",
                "State the governing relationship or biological/chemical mechanism.",
                "Apply it step by step while tracking direction, units, or controls.",
                "Compare the result with the prediction and explain its scientific meaning.",
            ],
            "Quoting a law or equation without connecting each term to the stated system.",
        )
    if "Computer Science" in subject:
        return (
            "AP questions test tracing, abstraction, and the reason an algorithm behaves correctly. "
            "A complete response accounts for state changes, boundaries, and the stated preconditions.",
            [
                "Identify inputs, outputs, state, and any preconditions.",
                "Trace a small representative case before generalizing the algorithm.",
                "Apply the rule one operation or iteration at a time.",
                "Check boundary cases and state why the result satisfies the specification.",
            ],
            "Tracing only the typical path while ignoring an endpoint, empty case, or changed state.",
        )
    if any(label in subject for label in ("History", "Geography")):
        return (
            "AP questions reward a defensible claim supported by specific evidence and historical or "
            "spatial reasoning. Evidence earns its force only when the response explains the connection.",
            [
                "Underline the task verb, scope, place, and time period.",
                "State a defensible claim using the required reasoning process.",
                "Select precise evidence and explain how it supports the claim.",
                "Qualify the conclusion with a relevant limit, comparison, or counterpoint.",
            ],
            "Listing accurate evidence without explaining how it answers the prompt's reasoning task.",
        )
    if "English" in subject:
        return (
            "AP questions reward an interpretation or argument with a coherent line of reasoning. "
            "Naming a technique is not enough; the response must explain how textual choices create meaning.",
            [
                "Identify the rhetorical or literary situation and the exact task.",
                "Write a defensible claim that establishes a line of reasoning.",
                "Select a precise textual detail and analyze how it functions.",
                "Connect the analysis to purpose or meaning, then add a meaningful qualification.",
            ],
            "Using device labels or plot summary in place of commentary about function and meaning.",
        )
    return (
        "AP questions use this topic to test application, comparison, and evidence-based justification. "
        "Strong responses name the governing idea and connect it directly to the scenario.",
        [
            "Identify the task verb, relevant evidence, and the quantity or claim at issue.",
            "Recall the governing definition, model, or relationship.",
            "Apply it to the scenario in a short chain of explicit reasoning.",
            "State the conclusion in context and note one assumption or limitation.",
        ],
        "Giving a memorized definition without applying it to the evidence in the prompt.",
    )


def worked_section(title, subject):
    why, steps, trap = subject_lens(subject)
    return (
        "\n\n## Worked Example & Deeper Points\n\n"
        "### Why AP asks this\n\n"
        f"Questions on **{title}** require more than recognition. {why}\n\n"
        "### Mini walkthrough\n\n"
        + "\n".join(f"{index}. {step}" for index, step in enumerate(steps, 1))
        + "\n\n### Trap\n\n"
        + trap
    )


def headers_from_summary(summary):
    headers = re.findall(r"(?m)^\s{0,3}#{1,6}\s+(.+?)\s*$", summary)
    result = []
    seen = set()
    for header in headers:
        cleaned = re.sub(r"[*_`#]", "", header).strip()
        if not cleaned or "worked example" in cleaned.casefold():
            continue
        key = cleaned.casefold()
        if key not in seen:
            seen.add(key)
            result.append(cleaned)
        if len(result) == 3:
            break
    return result


def make_key_points(summary, title):
    points = [
        f"{header}: connect this section explicitly to {title}."
        for header in headers_from_summary(summary)
    ]
    fallbacks = [
        f"Define {title} precisely before applying it.",
        "State the relevant assumptions, evidence, or conditions.",
        "Show the reasoning and interpret the conclusion in AP rubric language.",
    ]
    for fallback in fallbacks:
        if len(points) == 3:
            break
        if fallback not in points:
            points.append(fallback)
    return points[:3]


def make_common_mistakes(title, subject):
    _, _, trap = subject_lens(subject)
    return [
        trap,
        f"Reaching a conclusion about {title} without showing the evidence-to-claim reasoning.",
    ]


def make_example(title, subject):
    if "English" in subject:
        return (
            f"Identify one precise choice related to {title}, cite a short detail, "
            "and explain how it advances meaning or purpose."
        )
    if any(label in subject for label in ("History", "Geography")):
        return (
            f"Make one claim about {title}, support it with a named example, "
            "and explain the relevant cause, comparison, or change."
        )
    if "Computer Science" in subject:
        return (
            f"Trace {title} on a three-element input, then explain the boundary case "
            "and the resulting output."
        )
    return (
        f"Given a changed input in a {title} scenario, predict the outcome, "
        "apply the governing relationship, and interpret the result."
    )


def enrich_concepts(concepts):
    enriched = 0
    for concept in concepts:
        subject = concept.get("subject", "")
        if not isinstance(subject, str) or not subject.startswith("AP"):
            continue

        summary = concept.get("summary")
        if not isinstance(summary, str):
            summary = "" if summary is None else str(summary)
        title = clean_title(concept.get("title"))
        changed = False

        has_worked = (
            "## Worked Example" in summary
            or "Worked Example & Deeper Points" in summary
        )
        if not has_worked:
            summary = summary.rstrip() + worked_section(title, subject)
            concept["summary"] = summary
            changed = True

        if not concept.get("keyPoints"):
            concept["keyPoints"] = make_key_points(summary, title)
            changed = True

        if not concept.get("commonMistakes"):
            concept["commonMistakes"] = make_common_mistakes(title, subject)
            changed = True

        if not concept.get("example"):
            concept["example"] = make_example(title, subject)
            changed = True

        if changed:
            enriched += 1
    return enriched


def add_formula_sheets(data):
    formulas = data.setdefault("formulas", [])
    existing_ids = {
        formula.get("id") for formula in formulas if formula.get("id")
    }
    existing_names = {
        str(formula.get("name", "")).strip().casefold() for formula in formulas
    }
    blocked_subjects = {
        formula.get("subject")
        for formula in formulas
        if any(
            marker in str(formula.get("name", "")).casefold()
            for marker in ("ultimate", "formula table")
        )
    }

    added = 0
    for sheet in FORMULA_SHEETS:
        name_key = sheet["name"].strip().casefold()
        if sheet["subject"] in blocked_subjects or name_key in existing_names:
            continue
        formula_id = rid("m-formula")
        while formula_id in existing_ids:
            formula_id = rid("m-formula")
        formulas.append(
            {
                "id": formula_id,
                "subject": sheet["subject"],
                "unit": FORMULA_UNIT,
                "name": sheet["name"],
                "expression": "",
                "content": sheet["content"].strip(),
                "variables": "",
                "whenToUse": "",
                "sourceNote": SOURCE_NOTE,
            }
        )
        existing_ids.add(formula_id)
        existing_names.add(name_key)
        blocked_subjects.add(sheet["subject"])
        added += 1
    return added


def add_quizzes(data):
    questionnaires = data.setdefault("questionnaires", [])
    existing_titles = {
        str(questionnaire.get("title", "")).strip().casefold()
        for questionnaire in questionnaires
    }
    existing_ids = {
        questionnaire.get("id")
        for questionnaire in questionnaires
        if questionnaire.get("id")
    }
    for questionnaire in questionnaires:
        existing_ids.update(
            item.get("id")
            for item in questionnaire.get("items", [])
            if item.get("id")
        )

    added = 0
    for candidate in QUIZZES:
        title_key = candidate["title"].strip().casefold()
        if title_key in existing_titles:
            continue
        while candidate["id"] in existing_ids:
            candidate["id"] = rid("m-quiz")
        existing_ids.add(candidate["id"])
        for item in candidate["items"]:
            while item["id"] in existing_ids:
                item["id"] = rid("m-item")
            existing_ids.add(item["id"])
        questionnaires.append(candidate)
        existing_titles.add(title_key)
        added += 1
    return added


def main():
    with DATA.open("r", encoding="utf-8") as handle:
        data = json.load(handle)

    formulas_added = add_formula_sheets(data)
    concepts_enriched = enrich_concepts(data.setdefault("concepts", []))
    quizzes_added = add_quizzes(data)

    with DATA.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, ensure_ascii=False, indent=2)
        handle.write("\n")

    print(f"Formulas added: {formulas_added}")
    print(f"Concepts enriched: {concepts_enriched}")
    print(f"Quizzes added: {quizzes_added}")


STATS = "AP Statistics"
CALC = "AP Calculus AB/BC"
CHEM = "AP Chemistry"
BIO = "AP Biology"
MACRO = "AP Macroeconomics"
MICRO = "AP Microeconomics"


QUIZZES = [
    quiz(
        "Formula Practice — AP Statistics: Describing Data and Regression",
        STATS,
        "Original formula-linked practice with IQR, standardization, and least-squares regression.",
        ["statistics", "units-1-2", "regression"],
        [
            mcq(
                r"A distribution has \(Q_1=18\) and \(Q_3=30\). Using the \(1.5\mathrm{IQR}\) rule, which value is a potential high outlier?",
                ["A) 39", "B) 45", "C) 47", "D) 50"],
                3,
                [
                    r"\(\mathrm{IQR}=30-18=12\).",
                    r"The upper fence is \(30+1.5(12)=48\); a high outlier must be greater than 48.",
                    "Of the choices, 50 is the only value beyond the upper fence.",
                ],
                "stats-iqr-formula-practice",
                2,
            ),
            frq(
                r"For paired data, \(\bar x=12\), \(s_x=3\), \(\bar y=50\), \(s_y=8\), and \(r=0.75\). Find the least-squares line and predict \(y\) at \(x=14\). Interpret the slope.",
                [
                    r"Use \(b=r(s_y/s_x)\).",
                    r"Use \(a=\bar y-b\bar x\), then substitute \(x=14\).",
                    "Interpret slope in response-variable units per explanatory-variable unit.",
                ],
                [
                    r"\(b=0.75(8/3)=2\) and \(a=50-2(12)=26\), so \(\hat y=26+2x\).",
                    r"At \(x=14\), \(\hat y=54\).",
                    "For each one-unit increase in x, predicted y increases by 2 units on average.",
                ],
                "stats-lsrl-formula-practice",
                3,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Statistics: Probability and Inference",
        STATS,
        "Original formula-linked practice with binomial probability and confidence intervals.",
        ["statistics", "units-3-9", "inference"],
        [
            mcq(
                r"If \(X\sim\mathrm{Binomial}(10,0.30)\), what is \(P(X=2)\)?",
                [
                    r"A) \((0.3)^2(0.7)^8\)",
                    r"B) \(\binom{10}{2}(0.3)^2(0.7)^8\)",
                    r"C) \(\binom{10}{2}(0.3)^8(0.7)^2\)",
                    r"D) \(10(0.3)(0.7)\)",
                ],
                1,
                [
                    r"Use \(P(X=k)=\binom nkp^k(1-p)^{n-k}\).",
                    r"Substitute \(n=10\), \(k=2\), and \(p=0.30\).",
                ],
                "stats-binomial-formula-practice",
            ),
            frq(
                r"In an SRS of \(200\) students, \(124\) support a proposal. Construct a 95% confidence interval for the population proportion using \(z^*=1.96\), check the large-count condition, and interpret the interval.",
                [
                    r"Compute \(\hat p=124/200\) and success/failure counts.",
                    r"Use \(\hat p\pm z^*\sqrt{\hat p(1-\hat p)/n}\).",
                    "Interpret the interval for the population proportion.",
                ],
                [
                    r"\(\hat p=0.62\); 124 successes and 76 failures both exceed 10.",
                    r"\(\mathrm{SE}=\sqrt{(0.62)(0.38)/200}\approx0.0343\); the interval is \(0.62\pm1.96(0.0343)\approx(0.553,0.687)\).",
                    "We are 95% confident that about 55.3% to 68.7% of all students support the proposal, assuming the sampling conditions hold.",
                ],
                "stats-ci-formula-practice",
                3,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Calculus: Limits and Derivatives",
        CALC,
        "Original formula-linked practice with a removable limit and chain/product rules.",
        ["calculus", "units-1-5", "derivatives"],
        [
            mcq(
                r"If \(f(x)=x^2\sin x\), what is \(f'(x)\)?",
                [
                    r"A) \(2x\cos x\)",
                    r"B) \(2x\sin x+x^2\cos x\)",
                    r"C) \(x^2\cos x\)",
                    r"D) \(2x\sin x\cos x\)",
                ],
                1,
                [
                    "The function is a product, so differentiate both factors.",
                    r"\((x^2)'\sin x+x^2(\sin x)'=2x\sin x+x^2\cos x\).",
                ],
                "calc-product-rule-formula-practice",
            ),
            frq(
                r"Evaluate \(\displaystyle\lim_{x\to4}\frac{\sqrt{x}-2}{x-4}\), and explain how the result connects to a derivative.",
                [
                    "Rationalize the numerator.",
                    "Cancel only for values away from the limiting point.",
                    r"Recognize the difference quotient for \(f(x)=\sqrt{x}\) at \(x=4\).",
                ],
                [
                    r"Multiplying by the conjugate gives \(\frac{1}{\sqrt{x}+2}\) for \(x\ne4\).",
                    r"The limit is \(1/(2+2)=1/4\).",
                    r"It equals \(f'(4)\) for \(f(x)=\sqrt{x}\), consistent with \(f'(x)=1/(2\sqrt{x})\).",
                ],
                "calc-limit-derivative-formula-practice",
                2,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Calculus: FTC and BC Series",
        CALC,
        "Original formula-linked practice with the Fundamental Theorem of Calculus and power-series endpoints.",
        ["calculus", "units-6-10", "ftc", "bc-series"],
        [
            mcq(
                r"For \(\sum_{n=1}^{\infty}\frac{(x-1)^n}{2^n n}\), which interval of convergence is correct?",
                [r"A) \((-1,3)\)", r"B) \([-1,3)\)", r"C) \((-1,3]\)", r"D) \([-1,3]\)"],
                1,
                [
                    r"The ratio test gives \(|x-1|<2\), initially \((-1,3)\).",
                    r"At \(x=3\), the harmonic series diverges; at \(x=-1\), the alternating harmonic series converges.",
                ],
                "calc-series-endpoints-formula-practice",
                3,
            ),
            frq(
                r"Let \(F(x)=\displaystyle\int_{1}^{x^2}\ln(1+t^2)\,dt\). Find \(F'(x)\) and \(F'(2)\).",
                [
                    "Apply FTC to the integrand evaluated at the upper bound.",
                    "Multiply by the derivative of the upper bound.",
                    "Then substitute x = 2.",
                ],
                [
                    r"\(F'(x)=\ln(1+(x^2)^2)(2x)=2x\ln(1+x^4)\).",
                    r"\(F'(2)=4\ln17\).",
                ],
                "calc-ftc-formula-practice",
                2,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Chemistry: Stoichiometry, Gases, and Equilibrium",
        CHEM,
        "Original formula-linked practice with the ideal-gas law and reaction quotient.",
        ["chemistry", "stoichiometry", "gas-laws", "equilibrium"],
        [
            mcq(
                r"What volume does \(0.500\) mol of an ideal gas occupy at \(300\ \mathrm K\) and \(1.00\ \mathrm{atm}\), using \(R=0.08206\ \mathrm{L\,atm\,mol^{-1}K^{-1}}\)?",
                ["A) 6.16 L", "B) 12.3 L", "C) 24.6 L", "D) 41.0 L"],
                1,
                [
                    r"Rearrange \(PV=nRT\) to \(V=nRT/P\).",
                    r"\(V=(0.500)(0.08206)(300)/(1.00)=12.3\ \mathrm L\).",
                ],
                "chem-gas-law-formula-practice",
            ),
            frq(
                r"For \(\mathrm{N_2O_4(g)\rightleftharpoons2NO_2(g)}\), \(K_c=0.20\). A mixture has \([\mathrm{N_2O_4}]=0.50\ \mathrm M\) and \([\mathrm{NO_2}]=0.20\ \mathrm M\). Calculate \(Q_c\) and predict the net direction of reaction.",
                [
                    r"Write \(Q_c=[NO_2]^2/[N_2O_4]\).",
                    "Substitute the current concentrations.",
                    "Compare Q with K.",
                ],
                [
                    r"\(Q_c=(0.20)^2/0.50=0.080\).",
                    r"Because \(Q_c<K_c\), net reaction proceeds right, producing more \(\mathrm{NO_2}\).",
                ],
                "chem-equilibrium-formula-practice",
                2,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Chemistry: Acids, Thermodynamics, and Cells",
        CHEM,
        "Original formula-linked practice with pH and electrochemical free energy.",
        ["chemistry", "acid-base", "thermodynamics", "electrochemistry"],
        [
            mcq(
                r"What is the pH of a solution with \([\mathrm{H_3O^+}]=2.5\times10^{-3}\ \mathrm M\)?",
                ["A) 1.60", "B) 2.60", "C) 3.40", "D) 11.40"],
                1,
                [
                    r"Use \(\mathrm{pH}=-\log[H_3O^+]\).",
                    r"\(-\log(2.5\times10^{-3})\approx2.60\).",
                ],
                "chem-ph-formula-practice",
            ),
            frq(
                r"A galvanic cell transfers \(2\) mol of electrons per mole of reaction and has \(E^\circ_{\rm cell}=0.46\ \mathrm V\). Calculate \(\Delta G^\circ\) using \(F=96485\ \mathrm{C\,mol^{-1}}\), and state whether the standard reaction is thermodynamically favorable.",
                [
                    r"Use \(\Delta G^\circ=-nFE^\circ\).",
                    "Substitute n as the balanced electron count.",
                    "Use the sign of free energy to interpret favorability.",
                ],
                [
                    r"\(\Delta G^\circ=-(2)(96485)(0.46)=-8.88\times10^4\ \mathrm{J\,mol^{-1}}\), or \(-88.8\ \mathrm{kJ\,mol^{-1}}\).",
                    "The negative value indicates a thermodynamically favorable standard cell reaction.",
                ],
                "chem-cell-energy-formula-practice",
                3,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Biology: Water Potential and Hardy-Weinberg",
        BIO,
        "Original formula-linked practice with water potential and population-genetics frequencies.",
        ["biology", "water-potential", "hardy-weinberg"],
        [
            mcq(
                r"A cell has \(\Psi_s=-0.70\ \mathrm{MPa}\) and \(\Psi_p=0.20\ \mathrm{MPa}\). Its total water potential is",
                [r"A) \(-0.90\ \mathrm{MPa}\)", r"B) \(-0.50\ \mathrm{MPa}\)", r"C) \(0.50\ \mathrm{MPa}\)", r"D) \(0.90\ \mathrm{MPa}\)"],
                1,
                [
                    r"Use \(\Psi=\Psi_s+\Psi_p\).",
                    r"\(\Psi=-0.70+0.20=-0.50\ \mathrm{MPa}\).",
                ],
                "bio-water-potential-formula-practice",
            ),
            frq(
                "In a Hardy-Weinberg population, 9% of individuals show a recessive phenotype. Estimate p, q, and the expected heterozygote frequency, and state two model assumptions.",
                [
                    r"The recessive phenotype frequency is \(q^2\).",
                    r"Find \(q\), then \(p=1-q\), then \(2pq\).",
                    "Name assumptions of the Hardy-Weinberg model.",
                ],
                [
                    r"\(q^2=0.09\), so \(q=0.30\) and \(p=0.70\).",
                    r"The expected heterozygote frequency is \(2pq=2(0.70)(0.30)=0.42\), or 42%.",
                    "Valid assumptions include random mating, a very large population, no mutation, no migration, and no natural selection.",
                ],
                "bio-hardy-weinberg-formula-practice",
                3,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Biology: Chi-Square, Growth, and Efficiency",
        BIO,
        "Original formula-linked practice with trophic efficiency and chi-square analysis.",
        ["biology", "chi-square", "population-growth", "energy-efficiency"],
        [
            mcq(
                "Producers store 18,000 kJ of energy and primary consumers store 2,700 kJ. What is the observed trophic-transfer efficiency?",
                ["A) 6.7%", "B) 10%", "C) 15%", "D) 67%"],
                2,
                [
                    "Efficiency is higher-level energy divided by lower-level energy, times 100%.",
                    r"\((2700/18000)(100\%)=15\%\).",
                ],
                "bio-efficiency-formula-practice",
            ),
            frq(
                "A genetic model predicts offspring in a 3:1 ratio. A cross produces 84 dominant-phenotype and 36 recessive-phenotype offspring. Calculate expected counts and chi-square. Using a critical value of 3.84 at df = 1, evaluate the null model.",
                [
                    "Find the total and multiply it by 3/4 and 1/4.",
                    r"Compute \(\chi^2=\sum(O-E)^2/E\).",
                    "Compare the statistic with the critical value.",
                ],
                [
                    "The total is 120, so expected counts are 90 dominant and 30 recessive.",
                    r"\(\chi^2=(84-90)^2/90+(36-30)^2/30=0.40+1.20=1.60\).",
                    "Because 1.60 < 3.84, fail to reject the 3:1 null model; the deviations are plausibly due to chance.",
                ],
                "bio-chi-square-formula-practice",
                3,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Macroeconomics: GDP and Multipliers",
        MACRO,
        "Original formula-linked practice with expenditure GDP and fiscal multipliers.",
        ["macroeconomics", "gdp", "multipliers"],
        [
            mcq(
                "If C = 600, I = 150, G = 200, exports = 90, and imports = 120 (all in billions), expenditure GDP equals",
                ["A) 830", "B) 860", "C) 920", "D) 1,160"],
                2,
                [
                    r"Use \(Y=C+I+G+(X-M)\).",
                    r"\(Y=600+150+200+(90-120)=920\).",
                ],
                "macro-gdp-formula-practice",
            ),
            frq(
                "In a simple closed economy with an MPC of 0.75 and a recessionary gap of $80 billion, calculate the spending multiplier and the minimum increase in government spending predicted to close the gap. State one reason the actual change may be smaller.",
                [
                    r"Use \(1/(1-MPC)\).",
                    "Divide the desired aggregate-demand change by the multiplier.",
                    "Identify a leakage, crowding-out effect, price-level response, or timing issue.",
                ],
                [
                    r"The spending multiplier is \(1/(1-0.75)=4\).",
                    "The model predicts a minimum government-spending increase of $80/4 = $20 billion.",
                    "The actual effect may be smaller because of imports, taxes, crowding out, changing prices, or a nonconstant MPC.",
                ],
                "macro-multiplier-formula-practice",
                3,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Macroeconomics: Money, Phillips, and Trade",
        MACRO,
        "Original formula-linked practice with the quantity equation and open-economy reasoning.",
        ["macroeconomics", "money", "phillips-curve", "trade"],
        [
            mcq(
                r"If velocity and real output are constant, a 6% increase in \(M\) in \(MV=PY\) predicts approximately",
                [
                    "A) a 6% decrease in the price level",
                    "B) no price-level change",
                    "C) a 6% increase in the price level",
                    "D) a 12% increase in real output",
                ],
                2,
                [
                    "With V and Y constant, percentage changes in M and P match.",
                    "A 6% rise in money supply therefore predicts about 6% inflation in this simplified model.",
                ],
                "macro-quantity-equation-formula-practice",
            ),
            frq(
                "Country A has a current-account deficit of $40 billion. Ignoring statistical discrepancy, state the corresponding financial-account balance. Then explain how an appreciation of A's currency would tend to affect A's exports, imports, and aggregate demand.",
                [
                    "Use the balance-of-payments offset.",
                    "Connect appreciation to relative prices faced by foreign and domestic buyers.",
                    "Connect net exports to aggregate demand.",
                ],
                [
                    "Country A has an approximately $40 billion financial-account surplus.",
                    "Appreciation makes A's exports relatively more expensive to foreigners and imports relatively cheaper to residents, tending to reduce exports and increase imports.",
                    "Net exports and aggregate demand therefore tend to decrease, all else equal.",
                ],
                "macro-trade-formula-practice",
                3,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Microeconomics: Elasticity and Profit",
        MICRO,
        "Original formula-linked practice with midpoint elasticity and economic profit.",
        ["microeconomics", "elasticity", "profit"],
        [
            mcq(
                "Using the midpoint method, price rises from $10 to $12 while quantity demanded falls from 100 to 80. Demand over this range is approximately",
                ["A) perfectly inelastic", "B) inelastic", "C) unit elastic", "D) elastic"],
                2,
                [
                    r"\(\%\Delta Q=-20/90=-22.2\%\) and \(\%\Delta P=2/11=18.2\%\).",
                    r"\(E_d=|-22.2/18.2|\approx1.22\), so demand is elastic.",
                ],
                "micro-elasticity-formula-practice",
            ),
            frq(
                "A firm sells 500 units at $14 each. Its explicit costs are $4,800, and the owner's forgone salary is $1,500. Calculate total revenue, accounting profit, and economic profit. Explain why the two profit measures differ.",
                [
                    r"Use \(TR=P\times Q\).",
                    "Accounting profit subtracts explicit costs.",
                    "Economic profit also subtracts implicit opportunity costs.",
                ],
                [
                    r"\(TR=(14)(500)=\$7{,}000\).",
                    r"Accounting profit is \(\$7{,}000-\$4{,}800=\$2{,}200\).",
                    r"Economic profit is \(\$2{,}200-\$1{,}500=\$700\); it includes the owner's forgone salary as an implicit cost.",
                ],
                "micro-profit-formula-practice",
                2,
            ),
        ],
    ),
    quiz(
        "Formula Practice — AP Microeconomics: Marginal Decisions and Welfare",
        MICRO,
        "Original formula-linked practice with MRP hiring and deadweight loss.",
        ["microeconomics", "marginal-analysis", "mrp", "deadweight-loss"],
        [
            mcq(
                "A competitive employer sells output for $8. The next worker's marginal product is 6 units per hour, and the hourly wage is $44. The firm should",
                [
                    "A) hire the worker because MRP is $48",
                    "B) not hire the worker because MRP is $36",
                    "C) hire only if the output price falls",
                    "D) ignore marginal product and compare wage with total revenue",
                ],
                0,
                [
                    r"For a competitive seller, \(MRP=MP\times P=(6)(8)=\$48\).",
                    "Because MRP exceeds the $44 marginal resource cost, hiring the worker adds $4 to profit.",
                ],
                "micro-mrp-formula-practice",
            ),
            frq(
                "A per-unit tax of $6 reduces equilibrium quantity from 1,000 to 800 units in a market with linear supply and demand. Calculate tax revenue and deadweight loss, and identify the shapes on a correctly labeled graph.",
                [
                    "Tax revenue uses the post-tax quantity.",
                    r"For linear curves, use \(\tfrac12(\text{tax wedge})(\text{quantity reduction})\).",
                    "Describe the rectangle and triangle.",
                ],
                [
                    r"Tax revenue is \((\$6)(800)=\$4{,}800\).",
                    r"Deadweight loss is \(\tfrac12(\$6)(1000-800)=\$600\).",
                    "Tax revenue is the wedge-by-800 rectangle; deadweight loss is the triangle over the 200 trades no longer made.",
                ],
                "micro-dwl-formula-practice",
                3,
            ),
        ],
    ),
]


if __name__ == "__main__":
    main()
