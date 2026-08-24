"""
Wave 4 named formula / method sheets.
List WAVE4_FORMULA_SHEETS of dicts: {subject, unit, name, content}.
Names are new relative to data/managed-content.json formulas.
"""

WAVE4_FORMULA_SHEETS = [
    {
        "subject": "AP Physics 1",
        "unit": "Unit: Fluids",
        "name": "AP Physics 1 Fluids calculation sheet",
        "content": r"""# AP Physics 1 — Fluids Calculation Sheet

*CED-aligned original reference. Not exam questions.*

## Density, pressure, and depth

$$\rho=\frac{m}{V},\qquad P=\frac{F_\perp}{A},\qquad P=P_0+\rho g h$$

| Quantity | Symbol | SI | Notes |
| --- | --- | --- | --- |
| Density | $\rho$ | $\mathrm{kg/m^3}$ | Uniform sample: $m=\rho V$ |
| Absolute pressure | $P$ | $\mathrm{Pa}=\mathrm{N/m^2}$ | Gauge pressure $P-P_0$ |
| Depth | $h$ | $\mathrm{m}$ | Vertical distance below the free surface |

Pascal: a pressure change applied to a confined fluid is transmitted undiminished. Hydraulic identity:

$$\frac{F_1}{A_1}=\frac{F_2}{A_2}$$

## Buoyancy (Archimedes)

$$F_B=\rho_{\mathrm{fluid}}V_{\mathrm{displaced}}g$$

| Situation | Force balance (vertical) |
| --- | --- |
| Fully submerged, floating not required | $F_B$ vs $mg$; sink if $mg>F_B$ for that $V$ |
| Floating in equilibrium | $F_B=mg$ so $\rho_{\mathrm{obj}}V_{\mathrm{obj}}=\rho_{\mathrm{fl}}V_{\mathrm{disp}}$ |
| Apparent weight | $W_{\mathrm{app}}=mg-F_B$ |

## Continuity (incompressible)

$$A_1 v_1=A_2 v_2=Q$$

Volume flow rate $Q$ is constant along a single streamline tube if density is constant.

## Bernoulli (steady, inviscid, incompressible, along a streamline)

$$P+\rho g y+\tfrac12\rho v^2=\text{constant}$$

| Term | Meaning |
| --- | --- |
| $P$ | Static pressure |
| $\rho g y$ | Gravitational energy density |
| $\tfrac12\rho v^2$ | Kinetic energy density |

**Checklist:** (1) same fluid, (2) points on one streamline, (3) height datum stated, (4) if $v\approx 0$ at a large reservoir surface, drop the kinetic term there, (5) if height change is negligible, drop $\rho g\Delta y$.
""",
    },
    {
        "subject": "AP Physics 2",
        "unit": "Unit: Modern Physics",
        "name": "AP Physics 2 Modern physics sheet",
        "content": r"""# AP Physics 2 — Modern Physics Sheet

*CED-aligned original reference. Not exam questions. Distinct from the existing Modern Physics Quick Reference.*

## Photons and the photoelectric effect

$$E=hf=\frac{hc}{\lambda},\qquad K_{\max}=hf-\phi=eV_{\mathrm{stop}}$$

| Symbol | Meaning |
| --- | --- |
| $h$ | Planck's constant |
| $f$ | Frequency of incident light |
| $\phi$ | Work function (threshold energy) |
| $V_{\mathrm{stop}}$ | Stopping potential |

Threshold frequency: $f_0=\phi/h$. Intensity changes the number of photoelectrons per second, not $K_{\max}$, provided $f>f_0$.

## Matter waves

$$\lambda=\frac{h}{p}=\frac{h}{mv}\quad\text{(nonrelativistic)}$$

## Nuclear and mass–energy

$$E=(\Delta m)c^2,\qquad N=N_0\left(\tfrac12\right)^{t/T_{1/2}},\qquad A=\lambda N$$

| Process | Conservation notes |
| --- | --- |
| $\alpha$ decay | Mass number $-4$, atomic number $-2$ |
| $\beta^-$ decay | Mass number unchanged, atomic number $+1$ |
| $\gamma$ emission | Nucleon numbers unchanged; energy leaves as a photon |

## Energy-level transitions (atom)

$$\lvert\Delta E\rvert=hf=\frac{hc}{\lambda}$$

Absorption: photon energy matches a gap. Emission: atom drops to a lower level.

| Check | Question to ask |
| --- | --- |
| Photoelectric | Is $f$ above threshold? What does intensity change? |
| Decay | Which particle is emitted? How do $Z$ and $A$ change? |
| Spectra | Is the photon absorbed or emitted? |
""",
    },
    {
        "subject": "AP Calculus AB/BC",
        "unit": "Unit 10: Infinite Sequences and Series (BC)",
        "name": "AP Calculus AB/BC series tests sheet",
        "content": r"""# AP Calculus AB/BC — Series Tests Sheet

*CED-aligned original reference. Not exam questions. BC-weighted; AB students use the remainder/Taylor rows as optional stretch.*

## Sequences vs series

$$\{a_n\}\text{ converges to }L\iff\lim_{n\to\infty}a_n=L,\qquad
s=\sum_{n=1}^\infty a_n\text{ converges }\iff\{s_N\}\text{ converges.}$$

**nth-term (divergence) test:** if $\lim a_n\neq 0$ (or DNE), the series diverges. The converse is false.

## Geometric and $p$-series

$$\sum ar^{n}=\frac{a}{1-r}\quad(\lvert r\rvert<1),\qquad
\sum_{n=1}^\infty\frac{1}{n^p}\ \text{converges iff }p>1.$$

## Comparison toolkit

| Test | Idea |
| --- | --- |
| Direct comparison | $0\le a_n\le b_n$; $\sum b$ conv $\Rightarrow\sum a$ conv; $\sum a$ div $\Rightarrow\sum b$ div |
| Limit comparison | $L=\lim a_n/b_n$ finite and positive $\Rightarrow$ same behavior |
| Integral | $f$ positive, continuous, decreasing: $\sum a_n$ and $\int_N^\infty f$ match |
| Ratio | $L=\lim\lvert a_{n+1}/a_n\rvert$: $L<1$ conv, $L>1$ div, $L=1$ inconclusive |
| Root | $L=\lim\sqrt[n]{\lvert a_n\rvert}$: same $L$ conclusions as ratio |
| Alternating (AST) | $b_n\downarrow 0$ monotonically $\Rightarrow\sum(-1)^n b_n$ conv |

## Conditional vs absolute

If $\sum\lvert a_n\rvert$ converges, the series converges **absolutely**. Alternating harmonic converges **conditionally**.

## Taylor remainder (Lagrange)

$$R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$

Bound $\lvert R_n\rvert$ by replacing $\lvert f^{(n+1)}(c)\rvert$ with a max on the interval.

| Workflow | Action |
| --- | --- |
| 1 | Check $a_n\to 0$ |
| 2 | Identify geometric / $p$ / known Taylor |
| 3 | Choose ratio/root for factorials and exponentials |
| 4 | Use comparison/limit comparison for rational-like terms |
| 5 | AST last for signs; state absolute vs conditional |
""",
    },
    {
        "subject": "AP Statistics",
        "unit": "Units 6–9: Inference",
        "name": "AP Statistics inference decision tree sheet",
        "content": r"""# AP Statistics — Inference Decision Tree Sheet

*CED-aligned original reference. Not exam questions.*

## Start: what parameter is the claim about?

| Parameter | Typical estimator | Default procedure family |
| --- | --- | --- |
| One proportion $p$ | $\hat p$ | $z$ interval / $z$ test |
| Difference $p_1-p_2$ | $\hat p_1-\hat p_2$ | two-proportion $z$ |
| One mean $\mu$ | $\bar x$ | $t$ (unknown $\sigma$) |
| Difference $\mu_1-\mu_2$ | $\bar x_1-\bar x_2$ | two-sample $t$ |
| Mean difference $\mu_d$ | $\bar d$ | paired $t$ |
| Slope $\beta$ | $b$ | $t$ for slope |
| Association of categories | counts | $\chi^2$ GOF / homogeneity / independence |

## Conditions (say them, then check them)

**Proportions ($z$):** random; independence ($n\le 10\%$ of population when sampling without replacement); large counts $n\hat p\ge 10$ and $n(1-\hat p)\ge 10$ (interval) or $np_0\ge 10$, $n(1-p_0)\ge 10$ (test).

**Means ($t$):** random; independence / $10\%$ rule; Normal/CLT (stated nearly Normal, or $n$ large, or graph of sample is unimodal without extreme outliers).

**Chi-square:** random; independence; expected counts $\ge 5$ (all, or at least most with none tiny—follow the problem's standard).

## Tree (short)

1. **Categorical vs quantitative** response/parameter.
2. **One sample, two independent samples, or paired**.
3. **Interval or test**; one-sided vs two-sided from the alternative.
4. **Name the procedure** in a sentence before plugging numbers.
5. **Link $P$-value / interval to the claim** in context.

## Core formulas (structure)

$$z=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}},\qquad
t=\frac{\bar x-\mu_0}{s/\sqrt{n}},\qquad
\chi^2=\sum\frac{(O-E)^2}{E}$$

Interval skeleton: statistic $\pm$ (critical value)$\times$(standard error).

| Do | Don't |
| --- | --- |
| Name df for $t$ and $\chi^2$ | Use $z$ for means with unknown $\sigma$ |
| State $H_0$, $H_a$ with parameters | Write hypotheses about $\hat p$ or $\bar x$ |
| Interpret in context | Stop at “reject” with no meaning |
""",
    },
    {
        "subject": "AP Chemistry",
        "unit": "Units 7–8: Equilibrium, Ksp, Ka",
        "name": "AP Chemistry equilibrium/Ksp/Ka sheet",
        "content": r"""# AP Chemistry — Equilibrium / $K_{sp}$ / $K_a$ Sheet

*CED-aligned original reference. Not exam questions. Complements the Unit 7 equilibrium sheet with solubility and weak-acid algebra in one place.*

## $K$ vs $Q$

For $a\mathrm{A}+b\mathrm{B}\rightleftharpoons c\mathrm{C}+d\mathrm{D}$,

$$K=\frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}\quad\text{(solutes; omit pure solids/liquids)},\qquad
Q\text{ uses the same form at any instant.}$$

| Compare | Shift |
| --- | --- |
| $Q<K$ | Forward (make products) |
| $Q>K$ | Reverse (make reactants) |
| $Q=K$ | Equilibrium |

$K_p=K_c(RT)^{\Delta n_g}$ when gases are in bar/atm as specified by the problem.

## ICE and approximations

Let $x$ be the change. If $K$ is very small and the initial concentration $c_0$ is not tiny, $c_0-x\approx c_0$ may be valid; check $x/c_0$.

## Solubility product

For $\mathrm{M}_a\mathrm{X}_b(s)\rightleftharpoons a\mathrm{M}^{n+}+b\mathrm{X}^{m-}$,

$$K_{sp}=[\mathrm{M}^{n+}]^a[\mathrm{X}^{m-}]^b$$

Common ion: extra ion in $Q$ lowers molar solubility. Precipitation: compare $Q$ to $K_{sp}$.

## Acid–base $K_a$, $K_b$, $K_w$

$$K_w=[\mathrm{H_3O^+}][\mathrm{OH^-}]=K_a K_b,\qquad
K_a=\frac{[\mathrm{H_3O^+}][\mathrm{A^-}]}{[\mathrm{HA}]}$$

Henderson–Hasselbalch (buffer, when the approximation is valid):

$$\mathrm{pH}=\mathrm{p}K_a+\log\frac{[\mathrm{A^-}]}{[\mathrm{HA}]}$$

| Species | Relation |
| --- | --- |
| Conjugate pair | $K_a K_b=K_w$ |
| Strong acid | $[\mathrm{H_3O^+}]$ from complete ionization (watch stoichiometry) |
| Weak acid | ICE with $K_a$; percent ionization $=x/c_0\times 100\%$ |

**Write-up order:** balanced equation $\to$ $K$ expression $\to$ ICE or $Q$ $\to$ justify approximation $\to$ answer with units/none as appropriate $\to$ one-sentence direction of shift if stressed.
""",
    },
    {
        "subject": "AP Biology",
        "unit": "Units 5 and 8: Genetics and Ecology",
        "name": "AP Biology genetics & ecology equations sheet",
        "content": r"""# AP Biology — Genetics and Ecology Equations Sheet

*CED-aligned original reference. Not exam questions. Complements the Unit 5 Hardy–Weinberg sheet with ecology math in one table.*

## Chi-square (genetics)

$$\chi^2=\sum\frac{(O-E)^2}{E},\qquad \mathrm{df}=n-1\text{ (GOF categories)}$$

Compare $\chi^2$ to the critical value (often $p=0.05$). Fail to reject $H_0$ if $\chi^2$ is below the cutoff: data are **consistent with** the expected ratio, not “the ratio is proven.”

## Hardy–Weinberg

$$p+q=1,\qquad p^2+2pq+q^2=1$$

| Symbol | Meaning |
| --- | --- |
| $p,q$ | Allele frequencies |
| $p^2,q^2$ | Homozygote genotype frequencies |
| $2pq$ | Heterozygote frequency |

Assumptions: no selection, no mutation, no migration, random mating, large population.

## Water potential (plant / cell)

$$\psi=\psi_P+\psi_S,\qquad \psi_S=-iCRT$$

Water moves toward **lower** $\psi$.

## Population and energy

$$N_t=N_0 e^{rt}\quad\text{or}\quad N_t=N_0(1+r)^t,\qquad
\frac{dN}{dt}=rN\left(1-\frac{N}{K}\right)$$

Trophic: a common exam model is $\sim 10\%$ of energy transferred to the next level (order-of-magnitude, not a law).

Simpson diversity (if used):

$$D=1-\sum\left(\frac{n_i}{N}\right)^2$$

| Ecology check | Formula cue |
| --- | --- |
| Exponential vs logistic | Is $K$ stated? Is $N$ near $K$? |
| Productivity | NPP $=$ GPP $-$ respiration |
| Population density | individuals / area |
""",
    },
    {
        "subject": "AP Macroeconomics",
        "unit": "Unit 3: National Income and Price Determination",
        "name": "AP Macro AD-AS + multipliers sheet",
        "content": r"""# AP Macroeconomics — AD–AS and Multipliers Sheet

*CED-aligned original reference. Not exam questions. Name is distinct from the Unit 3 AD-AS and Multiplier Formula Sheet already in the library.*

## Multipliers

$$\mathrm{MPC}+\mathrm{MPS}=1,\qquad
k_G=\frac{1}{1-\mathrm{MPC}}=\frac{1}{\mathrm{MPS}},\qquad
k_T=-\frac{\mathrm{MPC}}{\mathrm{MPS}}$$

$$\Delta Y=k_G\Delta G=k_T\Delta T$$

Tax multiplier is smaller in magnitude than the spending multiplier (same $\lvert\Delta\rvert$ of $G$ vs $T$). Balanced-budget multiplier is $1$ in the simple model: $\Delta Y=\Delta G$ when $\Delta G=\Delta T$.

## AD–AS identities (graph language)

AD: $C+I+G+X_n$. SRAS sticky wages/prices; LRAS at $Y_f$ (full employment / potential).

| Shock | AD | SRAS | Short-run $P$, $Y$ | Long-run story |
| --- | --- | --- | --- | --- |
| $\uparrow G$ or $\uparrow$ money supply | right | — | $P\uparrow$, $Y\uparrow$ | if above $Y_f$, wages rise, SRAS left to $Y_f$ |
| $\uparrow$ input costs | — | left | $P\uparrow$, $Y\downarrow$ (stagflation) | depends on policy vs self-correction |
| Positive supply | — | right | $P\downarrow$, $Y\uparrow$ | possible new LRAS if capacity grows |

Crowding out (loanable funds / interest-sensitive $I$): expansionary fiscal $\to$ $\uparrow r$ $\to$ $\downarrow I$ (partial offset of $\Delta Y$).

## Quantity of money (when linked)

$$MV=PY$$

Short-run: $V$ sticky, $Y$ can move; long-run Classical: $Y$ at potential, $P$ absorbs $M$.

| FRQ sentence stems |
| --- |
| “AD shifts right because …” |
| “The spending multiplier is … because unused capacity …” |
| “In the long run, nominal wages adjust, SRAS shifts …” |
""",
    },
    {
        "subject": "AP Microeconomics",
        "unit": "Units 2–6: Elasticity and Surplus",
        "name": "AP Micro elasticity & surplus sheet",
        "content": r"""# AP Microeconomics — Elasticity and Surplus Sheet

*CED-aligned original reference. Not exam questions.*

## Elasticity

$$E_d=\left\lvert\frac{\%\Delta Q_d}{\%\Delta P}\right\rvert,\qquad
E_d=\left\lvert\frac{(Q_2-Q_1)/[(Q_1+Q_2)/2]}{(P_2-P_1)/[(P_1+P_2)/2]}\right\rvert\text{ (midpoint)}$$

| Type | Formula / test | Use |
| --- | --- | --- |
| Price elasticity of demand | $E_d$ | $E_d>1$ elastic; $<1$ inelastic; $=1$ unit |
| Income | $\%\Delta Q/\%\Delta I$ | $+$ normal; $-$ inferior |
| Cross-price | $\%\Delta Q_A/\%\Delta P_B$ | $+$ substitutes; $-$ complements |
| Supply | $\%\Delta Q_s/\%\Delta P$ | steeper $\Rightarrow$ less elastic |

Revenue: if demand is elastic, $\uparrow P$ lowers $TR$; if inelastic, $\uparrow P$ raises $TR$.

## Consumer and producer surplus

CS = area between demand and price (value minus expenditure). PS = area between price and supply (receipts minus variable cost / minimum willingness to supply).

Total surplus $= \mathrm{CS}+\mathrm{PS}$. Deadweight loss is lost total surplus from a wedge (tax, binding price control, quota, tariff) relative to the efficient $Q$.

## Tax incidence (competitive market)

$$P_{\mathrm{buyer}}-P_{\mathrm{seller}}=t$$

The less elastic side bears more of the tax. Graph: vertical gap $t$ between supply and demand; $Q$ falls; DWL is the triangle of unmade mutually beneficial trades.

| Checklist | |
| --- | --- |
| Label $P,Q$ intercepts only if needed | Show $Q_E$ vs $Q_{\mathrm{policy}}$ |
| Shade CS, PS, tax revenue, DWL separately | State who pays more using elasticity |
| Use midpoint if two points are given | Do not confuse slope with elasticity |
""",
    },
    {
        "subject": "AP Computer Science A",
        "unit": "Units 1–4: Tracing and Control Flow",
        "name": "AP CSA Java tracing checklist",
        "content": r"""# AP Computer Science A — Java Tracing Checklist

*CED-aligned original method table. Not exam questions. Not a duplicate of the Essential Java Code table.*

## Method table (use on every FRQ trace)

| Step | Action | Typical miss |
| --- | --- | --- |
| 1. Signature | Note return type, `static` vs instance, parameter types | Assuming a `void` method returns a value |
| 2. Call setup | Write actual arguments; copy primitives; copy **references** | Thinking `int[]` is copied by value of the array body |
| 3. Locals | Open a column for each local; initialize before use | Using a field when a local shadows it |
| 4. Control | For each `if` / `else if` / `else`, evaluate Boolean **once** | Tracing both branches |
| 5. Loops | Header: init; then test $\to$ body $\to$ update | Off-by-one on `i < n` vs `i <= n` |
| 6. Short-circuit | `&&` / `\|\|` may skip the right operand | Evaluating `arr[i]` when `i` is already out of range on the left |
| 7. Strings | Immutability: concat builds a new object | Expecting `s.toUpperCase()` to change `s` without assignment |
| 8. Return | First `return` exits; remaining body is dead | Falling off the end of a non-`void` method |
| 9. Mutators | Methods like `set` / `add` change the referent | Confusing `ArrayList` index vs size |
| 10. Equals | `==` on objects tests references unless documented otherwise | Using `==` for `String` content |

## Loop identity cards

| Construct | Guarantees |
| --- | --- |
| `for (int i = 0; i < a.length; i++)` | Valid index `i` if `a` is non-null |
| enhanced `for (Type x : coll)` | No index; cannot assign into array slots through `x` for primitives |
| `while (cond)` | Body may run zero times |
| nested loops | Inner reset each outer iteration |

## Boolean and De Morgan (trace aid)

$$\lnot(A\land B)\equiv \lnot A\lor \lnot B,\qquad \lnot(A\lor B)\equiv \lnot A\land \lnot B$$

## Null and bounds

If a reference is `null`, any `.method` or `[i]` is a crash. Length of array `a` is `a.length` (field); `String` / `ArrayList` use `.length()` / `.size()`.
""",
    },
    {
        "subject": "AP Environmental Science",
        "unit": "CED Quantitative Skills (toolkit 2)",
        "name": "AP Env Sci math toolkit 2",
        "content": r"""# AP Environmental Science — Math Toolkit 2

*CED-aligned original reference. Not exam questions. Complements the existing Calculations Formula Sheet with conversions, toxicity, and productivity identities.*

## Percent change and doubling

$$\%\Delta=\frac{\text{new}-\text{old}}{\text{old}}\times 100\%,\qquad
T_{\mathrm{double}}\approx\frac{70}{r(\%)}\quad\text{(rule of 70)}$$

## Energy and power

$$1\,\mathrm{kWh}=3.6\times 10^6\,\mathrm{J},\qquad
\eta=\frac{E_{\mathrm{useful}}}{E_{\mathrm{input}}}\times 100\%$$

Dimensional chain: write units on every factor; cancel to the target unit (J, kWh, BTU, quad as given).

## Productivity

$$\mathrm{NPP}=\mathrm{GPP}-R$$

| Symbol | Meaning |
| --- | --- |
| GPP | Total photosynthesis energy capture |
| $R$ | Autotroph respiration |
| NPP | Energy available to consumers |

Trophic transfer is often modeled near $10\%$ per step for order-of-magnitude biomass/energy pyramids.

## Toxicity and dose

$$\text{dose}=\frac{\text{mass of toxin}}{\text{mass of organism}}$$

LD$_{50}$: dose that kills $50\%$ of a test population. Lower LD$_{50}$ $\Rightarrow$ more acutely toxic. Always state species and route if given.

## pH and hydrogen ion (order of magnitude)

$$\mathrm{pH}=-\log_{10}[\mathrm{H^+}],\qquad [\mathrm{H^+}]=10^{-\mathrm{pH}}$$

A drop of $1$ pH unit is a $10\times$ increase in $[\mathrm{H^+}]$.

## Population rates

$$\text{CBR, CDR often per }1000,\qquad
\text{growth rate}\approx \mathrm{CBR}-\mathrm{CDR}\quad\text{(ignore migration if told)}$$

TFR is births per woman over her lifetime, **not** a percent.

| Toolkit 2 checklist | |
| --- | --- |
| Box the requested unit first | Convert prefixes (M, k, m) before multiplying |
| Show one cancelled-unit line | Interpret the number in an environmental sentence |
| Do not treat $10\%$ transfer as exact physics | Do not confuse GPP with NPP |
""",
    },
]
