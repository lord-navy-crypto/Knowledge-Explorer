"""
Wave 3 formula / skill sheets for subjects with sparse formula coverage.

List WAVE3_FORMULA_SHEETS of dicts: {subject, unit, name, content}.
Content is markdown with tables and LaTeX. CED-aligned originals.
"""

WAVE3_FORMULA_SHEETS = [
    {
        'subject': 'AP Physics C: E&M',
        'unit': 'Unit: Electrostatics / Gauss’s Law',
        'name': 'AP Physics C E&M Gauss’s Law Formula Sheet',
        'content': r"""# AP Physics C: E&M — Gauss’s Law Formula Sheet

*College Board AP CED aligned, original reference. Not exam questions.*

## Core law

$$\oint\vec E\cdot d\vec A=\frac{Q_{\mathrm{enc}}}{\varepsilon_0}$$

| Geometry | Gaussian surface | Result (vacuum) |
| --- | --- | --- |
| Point / spherical symmetry | Sphere radius $r$ | $E=\dfrac{1}{4\pi\varepsilon_0}\dfrac{Q_{\mathrm{enc}}}{r^2}$ |
| Infinite line $\lambda$ | Cylinder radius $r$ | $E=\dfrac{\lambda}{2\pi\varepsilon_0 r}$ |
| Infinite sheet $\sigma$ | Pillbox | $E=\dfrac{\sigma}{2\varepsilon_0}$ |
| Conductor surface | Pillbox at surface | $E=\dfrac{\sigma}{\varepsilon_0}$ just outside; $E=0$ inside material |

## Insulating uniform sphere (charge $Q$, radius $R$)

$$E(r)=\frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\ (r\ge R),\qquad
E(r)=\frac{1}{4\pi\varepsilon_0}\frac{Qr}{R^3}\ (r\le R).$$

## Checklist

1. Argue symmetry ($E$ constant in magnitude on the surface; direction $\perp$ or $0$).
2. Express $\Phi_E$ as $E\cdot A$ (or sum of faces).
3. Identify **enclosed** charge only.
4. Solve for $E$; check units and limiting cases.""",
    },
    {
        'subject': 'AP Physics C: E&M',
        'unit': 'Unit: Circuits',
        'name': 'AP Physics C E&M Circuits Formula Sheet',
        'content': r"""# AP Physics C: E&M — Circuits Formula Sheet

*College Board AP CED aligned, original reference. Not exam questions.*

## Ohm and power

$$V=IR,\qquad P=IV=I^2R=\frac{V^2}{R}$$

| Network | Series | Parallel |
| --- | --- | --- |
| Resistors | $R_{\mathrm{eq}}=\sum R_i$ | $\dfrac{1}{R_{\mathrm{eq}}}=\sum\dfrac{1}{R_i}$ |
| Capacitors | $\dfrac{1}{C_{\mathrm{eq}}}=\sum\dfrac{1}{C_i}$ | $C_{\mathrm{eq}}=\sum C_i$ |

## Kirchhoff

- Junction: $\sum I_{\mathrm{in}}=\sum I_{\mathrm{out}}$ (charge conservation).
- Loop: $\sum\mathcal{E}=\sum IR$ with consistent direction (energy conservation).

## RC and RL transients

$$\tau_{RC}=RC,\qquad q_{\mathrm{charge}}=q_f(1-e^{-t/\tau}),\qquad q_{\mathrm{discharge}}=q_0 e^{-t/\tau}$$

$$\tau_{RL}=L/R,\qquad \mathcal{E}_L=-L\frac{di}{dt},\qquad U_C=\tfrac12 CV^2,\qquad U_L=\tfrac12 LI^2$$

Steady DC: capacitor $\to$ open; inductor $\to$ short (ideal).""",
    },
    {
        'subject': 'AP Physics C: E&M',
        'unit': 'Unit: Induction',
        'name': 'AP Physics C E&M Induction Formula Sheet',
        'content': r"""# AP Physics C: E&M — Faraday Induction Formula Sheet

*College Board AP CED aligned, original reference. Not exam questions.*

## Faraday and flux

$$\Phi_B=\int\vec B\cdot d\vec A=BA\cos\theta,\qquad
\mathcal{E}=-N\frac{d\Phi_B}{dt}$$

Lenz: induced current creates $\vec B$ opposing the **change** in flux.

## Motional emf and rails

$$\mathcal{E}=B\ell v,\qquad I=\frac{\mathcal{E}}{R},\qquad
F_{\mathrm{mag}}=ILB\ \text{(opposes motion when flux increases through the loop)}$$

Mechanical power in $=I^2R$ in the ideal dissipative case.

## Inductance and LC

$$\mathcal{E}_L=-L\frac{di}{dt},\qquad M\ \text{via}\ \mathcal{E}_2=-M\frac{di_1}{dt},\qquad
\omega_{LC}=\frac{1}{\sqrt{LC}}$$

| Ideal transformer | Relation |
| --- | --- |
| Voltages | $V_2/V_1=N_2/N_1$ |
| Currents (power match) | $I_1/I_2=N_2/N_1$ |

Magnetic energy density: $u_B=B^2/(2\mu_0)$.""",
    },
    {
        'subject': 'AP Environmental Science',
        'unit': 'CED Quantitative Skills',
        'name': 'AP Environmental Science Calculations Formula Sheet',
        'content': r"""# AP Environmental Science — Calculations Formula Sheet

*College Board AP CED aligned, original quantitative reference. Not exam questions.*

| Idea | Relationship | Notes |
| --- | --- | --- |
| Percent change | $\dfrac{\text{new}-\text{old}}{\text{old}}\times100\%$ | Watch sign for increase/decrease. |
| Primary productivity | $\mathrm{NPP}=\mathrm{GPP}-R$ | Units of energy or biomass per area·time. |
| Rule of 70 | $T_d\approx 70/r$ | $r$ as percent growth rate; doubling time estimate. |
| Population growth | $\dfrac{dN}{dt}=rN$ (exponential sketch) | Logistic adds carrying capacity $K$ qualitatively. |
| Half-life | remaining $=N_0(\tfrac12)^{t/T_{1/2}}$ | Radioisotopes / persistence problems. |
| Efficiency | $\eta=\dfrac{\text{useful out}}{\text{total in}}\times100\%$ | Energy chains: multiply stage efficiencies. |
| Dilution | $C_1V_1=C_2V_2$ | Concentrations with consistent units. |
| Dimensional rates | $\text{rate}=\dfrac{\Delta\text{quantity}}{\Delta t}$ | Label per capita vs total carefully. |

**Source note:** Original CED-aligned skills table for dimensional analysis and environmental math—not College Board exam items.""",
    },
    {
        'subject': 'AP Biology',
        'unit': 'CED Quantitative Skills',
        'name': 'AP Biology Equations and Formulas Practice Sheet',
        'content': r"""# AP Biology — Equations and Formulas Practice Sheet

*College Board AP CED aligned, original reference. Not exam questions.*

| Topic | Formula | Interpretation |
| --- | --- | --- |
| Water potential | $\Psi=\Psi_s+\Psi_p$ | Water moves toward lower $\Psi$. |
| Solute potential | $\Psi_s=-iCRT$ | $T$ in kelvin; $i$ ionization factor. |
| Surface area/volume | $\mathrm{SA}/V$ | Limits exchange as size grows. |
| Hardy–Weinberg | $p+q=1$, $p^2+2pq+q^2=1$ | Null model for allele frequencies. |
| Chi-square | $\chi^2=\sum(O-E)^2/E$ | Compare observed counts to expected. |
| Rate | $\text{rate}=\Delta\text{quantity}/\Delta t$ | Enzyme, growth, or transport contexts. |
| Dilution / concentration | $C_1V_1=C_2V_2$ | Solution preparation. |
| Simpson-style diversity (concept) | higher evenness $\Rightarrow$ higher diversity index | Use formula provided on exam if required. |
| $Q_{10}$ (qualitative) | rate roughly doubles each $+10^\circ\mathrm{C}$ in a range | Not universal—state assumptions. |
| Linked genes RF | $\mathrm{RF}=\dfrac{\text{recombinants}}{\text{total}}\times100\%$ | Map distance estimate in cM. |

Always show units, identify the null hypothesis for stats, and connect the number to a biological claim.""",
    },
    {
        'subject': 'AP Psychology',
        'unit': 'Research Methods',
        'name': 'AP Psychology Research Statistics Formulas Sheet',
        'content': r"""# AP Psychology — Research Statistics Formulas Sheet

*College Board AP CED aligned, original methods reference. Not exam questions.*

| Concept | Symbol / relation | AP use |
| --- | --- | --- |
| Mean | $\bar x=\sum x_i/n$ | Central tendency for interval/ratio data. |
| Median / mode | middle value / most frequent | Skewed distributions; nominal mode. |
| Range | $\max-\min$ | Crude spread. |
| Standard deviation (concept) | spread about the mean | Larger SD $\Rightarrow$ more variability. |
| Percentile / z (concept) | relative standing | Compare scores across distributions. |
| Correlation $r$ | $-1\le r\le 1$ | Strength/direction; **not** causation. |
| Statistical significance | $p$-value vs $\alpha$ (often $0.05$) | Unlikely under null if significant. |
| Effect vs significance | practical size vs $p$ | Large $n$ can make tiny effects “significant.” |
| Reliability vs validity | consistency vs measuring the construct | Good measures need both. |
| Normal curve landmarks | $\sim68\%$ / $95\%$ within $1$ / $2$ SD | Interpret test scores. |

**Design reminders:** random assignment supports causal claims in experiments; random sampling supports generalization. Confounds threaten internal validity.""",
    },
    {
        'subject': 'AP English Language',
        'unit': 'Rhetorical Analysis Method',
        'name': 'AP English Language Rhetorical Analysis Method Table',
        'content': r"""# AP English Language — Rhetorical Analysis “Formula” (Method Table)

*College Board AP CED aligned, original skills framework. Not exam prompts.*

| Step | Move | Sentence stem / check |
| --- | --- | --- |
| 1 | Situation | Exigence, audience, purpose in one clause each. |
| 2 | Thesis | Writer + verbs of argument + strategy categories + purpose. |
| 3 | Evidence | Quote/paraphrase **small**; cite line/paragraph if given. |
| 4 | Choice | Name device/appeal/structure precisely (not “uses diction”). |
| 5 | Effect | What the choice does to audience understanding/emotion/trust. |
| 6 | Purpose link | How that effect advances the argumentative aim. |
| 7 | Qualification | Complexity: concede a limit without undoing the claim. |
| 8 | Organization | Chronology, shift, juxtaposition, or line of reasoning. |

**Appeals (use sparingly as labels):** logos (reasons/data), pathos (values/emotion), ethos (credibility/character)—always tied to **specific** textual choices.

**Avoid:** device listing; plot summary; claiming intent you cannot support; quote dumps without commentary.""",
    },
    {
        'subject': 'AP English Literature',
        'unit': 'Close Reading Method',
        'name': 'AP English Literature Close Reading Method Table',
        'content': r"""# AP English Literature — Close Reading Method Table

*College Board AP CED aligned, original skills framework. Not exam prompts.*

| Stage | Focus | Questions to answer on the page |
| --- | --- | --- |
| Observe | Diction, imagery, syntax, form | What repeats, contrasts, or shifts? |
| Pattern | Motif, structure, POV, stanza/paragraphing | Where does the text turn? |
| Interpret | Claim about meaning/effect | What attitude or insight emerges? |
| Evidence | Short quotation | Which words carry the claim? |
| Commentary | Link word $\to$ effect $\to$ meaning | How does *this* language produce *that* idea? |
| Complexity | Ambiguity, irony, multiple tones | What tension remains unresolved? |
| Thesis | Literary claim + “how/why” | Debatable, text-specific, not cliché theme. |
| Close | Return to title/ending/image | What final emphasis does the text give? |

**Poetry add-ons:** line breaks, enjambment, sound devices, form (sonnet, free verse) as meaning—not ornament.

**Prose add-ons:** free indirect discourse, unreliable narration, scenic vs summarized time.""",
    },
    {
        'subject': 'AP US History',
        'unit': 'LEQ / DBQ Skills',
        'name': 'AP US History LEQ/DBQ Skill Framework',
        'content': r"""# AP US History — LEQ/DBQ Skill Framework

*College Board AP CED aligned, original writing framework. Not exam prompts.*

| Skill | What to do | Quick check |
| --- | --- | --- |
| Thesis | Historically defensible claim answering the prompt | Can a classmate disagree productively? |
| Contextualization | Broader setting before/around the issue | Names era + relevant process (not fluff). |
| Evidence (DBQ) | Use documents to support argument | Describe + deploy, not quote-only. |
| Evidence (LEQ) | Specific outside examples | Proper nouns, laws, events with dates/eras. |
| Sourcing (DBQ) | HIPP/HAPPY-style for documents | Audience, purpose, POV, or historical situation. |
| Complexity | Corroborate, qualify, or multi-causal | Shows tension, change, or alternate view. |
| Reasoning | Causation, CCOT, or comparison | Matches the prompt’s skill verb. |
| Organization | Line of reasoning across paragraphs | Each paragraph advances the thesis. |

**Causation stem:** $X$ contributed to $Y$ because…; however, $Z$ limited…

**CCOT stem:** While continuity $A$ persisted, change $B$ transformed… between years…""",
    },
    {
        'subject': 'AP World History',
        'unit': 'Historical Thinking Skills',
        'name': 'AP World History Thinking Skills Framework',
        'content': r"""# AP World History — Thinking Skills Framework

*College Board AP CED aligned, original skills framework. Not exam prompts.*

| Skill | Core move | Evidence habit |
| --- | --- | --- |
| Causation | Multiple causes/effects; short vs long term | Rank causes; avoid single-factor stories. |
| Comparison | Similarities **and** differences | Shared process + divergent outcome. |
| CCOT | Continuity and change over time | Anchor with dates/periods; measure degree. |
| Contextualization | Situate in regional/global processes | Trade, empire, technology, environment, culture. |
| Argumentation | Thesis-driven line of reasoning | Every paragraph earns the claim. |
| Sourcing | POV, purpose, audience, situation | Especially in DBQ documents. |
| Synthesis / complexity | Cross-period or cross-region link | Qualification without abandoning thesis. |

| Periodization cue | Use for framing (examples) |
| --- | --- |
| c. 1200–1450 | State building, trade networks, belief systems |
| c. 1450–1750 | Expansion, land-based vs maritime empires |
| c. 1750–1900 | Industrialization, imperialism, revolutions |
| c. 1900–present | Global conflict, Cold War, decolonization, globalization |

Write comparisons with **both** sides evidenced; write CCOT with **both** continuity and change.""",
    },
    {
        'subject': 'AP Human Geography',
        'unit': 'Models and Theories',
        'name': 'AP Human Geography Models Formula Sheet',
        'content': r"""# AP Human Geography — Models Sheet

*College Board AP CED aligned, original models reference. Not exam questions.*

| Model / theory | Core idea | Typical AP use |
| --- | --- | --- |
| Demographic Transition | Birth/death rates shift with development stages | Explain population pyramids and aging. |
| Epidemiologic Transition | Leading causes of death shift with development | Link health to stages. |
| Malthus / Boserup / Cornucopian | Population vs food / innovation debates | Evaluate limits-to-growth claims. |
| Ravenstein migration “laws” | Distance decay; step migration; economic motives | Critique with modern counterexamples. |
| Gravity model | Interaction $\propto\dfrac{P_1P_2}{d^2}$ (concept) | Predict flows between cities. |
| Christaller central place | Threshold and range; hexagons | Urban hierarchy / service distribution. |
| Concentric / sector / multiple nuclei | Internal city structure | Compare to real cities and edge cities. |
| von Thünen | Land use vs transport cost to market | Rural land-use rings (assumptions matter). |
| Rostow / Wallerstein | Development stages / core–periphery | Evaluate modernization vs world-systems. |
| Bid-rent | Willingness to pay for land vs distance | CBD land prices, retail location. |

**Always state assumptions** (isotropic plain, rational actors) and one real-world limitation.""",
    },
    {
        'subject': 'AP European History',
        'unit': 'Periodization and Skills',
        'name': 'AP European History Periodization and Skills Sheet',
        'content': r"""# AP European History — Periodization + Skills Sheet

*College Board AP CED aligned, original framework. Not exam prompts.*

## Periodization anchors

| CED span | Name cues | Sample processes |
| --- | --- | --- |
| c. 1450–1648 | Renaissance, Reformation, exploration | State centralization; religious conflict |
| c. 1648–1815 | Absolutism, Enlightenment, revolution | Science; Atlantic world; Napoleonic wars |
| c. 1815–1914 | Industrialization, nationalism, imperialism | Ideologies; mass politics; global empires |
| c. 1914–present | Total war, Cold War, integration | Fascism/communism; decolonization; EU |

## Skill “formulas”

| Skill | Template |
| --- | --- |
| Causation | Because $A$ and $B$, event $E$ occurred; $C$ intensified it while $D$ constrained it. |
| CCOT | Between year$_1$ and year$_2$, continuity $X$ persisted; nonetheless change $Y$ reshaped… |
| Comparison | Both societies experienced $P$; however, differed in $Q$ because… |
| DBQ sourcing | Document shows… because of author’s purpose/audience/POV in situation… |
| Complexity | Corroborate two documents **or** qualify the thesis with a plausible alternate factor. |

Contextualization should name a **process** larger than the prompt’s anecdote (economic, political, cultural, or intellectual).""",
    },
    {
        'subject': 'AP Computer Science Principles',
        'unit': 'Pseudocode and Abstractions',
        'name': 'AP CSP Pseudocode and Abstractions Reference',
        'content': r"""# AP Computer Science Principles — Pseudocode / Abstractions Reference

*College Board AP CED aligned, original reference. Not exam questions.*

## Exam pseudocode habits

| Construct | Pattern | Note |
| --- | --- | --- |
| Assignment | `a ← expression` | Evaluate right-hand side first. |
| Indexing | `list[i]` | Know whether the exam list is 1-based in the reference sheet. |
| Length | `LENGTH(list)` | Loops often run to length. |
| Traversal | `FOR EACH item IN list` | Read-only pattern unless reassigned. |
| Counter loop | `REPEAT n TIMES` | Fixed iteration count. |
| Conditional | `IF (condition) { }` | Boolean expressions; relational operators. |
| Procedures | `PROCEDURE name(params) { }` | Abstraction barrier; return vs side effect. |
| Robot / grid | move, rotate, can_move | Simulate state carefully on paper. |

## Big ideas as “formulas”

| Idea | Compact statement |
| --- | --- |
| Abstraction | Hide detail behind a name/interface; manage complexity. |
| Algorithm | Finite, ordered, unambiguous steps; analyze correctness and efficiency qualitatively. |
| Data | Bits represent all digital data; number bases and compression tradeoffs. |
| Internet | Protocols layered; packets; redundancy and fault tolerance. |
| Cybersecurity | Authentication, encryption, and social-engineering risks. |
| Impact | Computing has beneficial and harmful effects; bias can enter data and models. |

**Simulation tip:** Trace variables in a table after each line; never “run” mentally without writing state.""",
    },
    {
        'subject': 'AP Macroeconomics',
        'unit': 'Unit: Financial Sector / Money Market',
        'name': 'AP Macroeconomics Money Market Formula Sheet',
        'content': r"""# AP Macroeconomics — Money Market Formula Sheet

*College Board AP CED aligned, original reference. Not exam questions.*
*(AD–AS multipliers already covered elsewhere; this sheet focuses on money market / monetary policy links.)*

## Money market

| Curve | Meaning | Shifters (examples) |
| --- | --- | --- |
| Money demand $MD$ | Demand for money balances vs nominal interest rate $i$ | Price level $\uparrow$, real GDP $\uparrow$ $\Rightarrow MD$ right |
| Money supply $MS$ | Often vertical if Fed sets stock of money | OMO buy $\Rightarrow MS$ right; sell $\Rightarrow$ left |

Equilibrium $i$ equates $MD$ and $MS$. Higher $i$ raises opportunity cost of holding money $\Rightarrow$ quantity of money demanded falls along $MD$.

## Links to investment and AD

$$i\downarrow \Rightarrow I\uparrow \Rightarrow AD\rightward\ \text{shift (ceteris paribus)}$$

| Fed action (simple model) | MS | Short-run $i$ | I / AD |
| --- | --- | --- | --- |
| Buy bonds (expansionary OMO) | $\uparrow$ | $\downarrow$ | $\uparrow$ |
| Sell bonds (contractionary) | $\downarrow$ | $\uparrow$ | $\downarrow$ |

## Quantity theory sketch

$$MV=PY$$

If $V$ stable, $\%\Delta M\approx\%\Delta P+\%\Delta Y$ qualitatively. Distinguish money market ($i$) from loanable funds (real $r$) when both appear.""",
    },
]

