"""
Wave 3 Advanced Study Notes for AP Physics 1, 2, C: Mechanics, and C: E&M.
Maps (subject, title) -> markdown starting with ## Advanced Study Notes.
Titles use exact strings from data/managed-content.json.
"""

WAVE3_PHYSICS_ADVANCED = {
    ('AP Physics C: Mechanics', 'Newton’s Shell Theorem'): r"""## Advanced Study Notes

Focus topic: **Newton’s Shell Theorem** (AP Physics C: Mechanics).

## 1. Mechanism depth

Outside uniform spherical shell: field as point mass at center. Inside shell: net $g=0$ for uniform thin shell.

## 2. Cross-unit synthesis

Gauss analog in gravity; explains planetary $g(r)$.

## 3. FRQ craft

Compare inside vs outside field; qualitative graphs.

## 4. Formula drills

- Outside: $g=GM/r^2$; inside hollow shell: $g=0$
- Drill: at $r=R/2$ inside shell?

## 5. Misconception repair

Thinking mass outside radius contributes inside shell.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Newton’s Shell Theorem**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Newton’s Shell Theorem**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Newton’s Shell Theorem**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Newton’s Shell Theorem**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Newton’s Shell Theorem**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Newton’s Shell Theorem**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Newton’s Shell Theorem**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Newton’s Shell Theorem**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Newton’s Shell Theorem**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Newton’s Shell Theorem**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Gauss’s law'): r"""## Advanced Study Notes

Focus topic: **Gauss’s law** (AP Physics C: E&M).

## 1. Mechanism depth

Gauss's law $\oint\vec E\cdot d\vec A=Q_{\enc}/\epsilon_0$ relates closed-surface electric flux to enclosed charge. It is equivalent to Coulomb's law for static fields but excels when charge symmetry lets you infer $\vec E$ direction and magnitude without integrating $dq$. Flux $\Phi=\int\vec E\cdot d\vec A$ counts field lines through a closed surface; only enclosed charge contributes to net flux. Symmetry choices (spherical, cylindrical, planar Gaussian surfaces) are the central skill—pick a surface where $\vec E$ is constant in magnitude and parallel or perpendicular to $d\vec A$.

## 2. Cross-unit synthesis

Applications to plane, line, sphere; links Coulomb superposition to field-line pictures and electric potential via $\vec E=-\nabla V$. Gauss's law pairs with conductors (field zero inside static equilibrium) and with capacitors.

## 3. FRQ craft

Derive $E$ for infinite plane; explain why flux is zero through a surface enclosing no net charge; multi-part FRQs integrating $\rho(r)$ for $Q_{\enc}(r)$ before applying Gauss.

## 4. Formula drills

- $\oint\vec E\cdot d\vec A=Q_{\enc}/\epsilon_0$; $\Phi=\int\vec E\cdot d\vec A$
- Drill: enclosed charge zero—flux? Drill: double enclosed charge—flux factor?

## 5. Misconception repair

Using Gauss when symmetry absent; confusing flux through open vs closed surfaces; omitting $\epsilon_0$.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Gauss’s law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Gauss’s law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Gauss’s law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Gauss’s law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Gauss’s law**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Gauss’s law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Gauss’s law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.""",
    ('AP Physics C: E&M', 'Gauss’s Law practise'): r"""## Advanced Study Notes

Focus topic: **Gauss’s Law practise** (AP Physics C: E&M).

## 1. Mechanism depth

FRQ-style nonuniform spheres, slabs—integrate $\rho(r)$ for $Q_{\enc}$.

## 2. Cross-unit synthesis

Links $\rho$, $Q_{\enc}$, and field inside/outside.

## 3. FRQ craft

Derive $E(r)$ piecewise for $\rho\propto r$.

## 4. Formula drills

- $Q_{\enc}=\int\rho\,dV$; Gauss with $r<R$ and $r>R$
- Drill: linear $\rho(r)$—$Q_{\enc}(r)$ setup?

## 5. Misconception repair

Wrong $Q_{\enc}$ limits on Gaussian sphere.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Gauss’s Law practise**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Gauss’s Law practise**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Gauss’s Law practise**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Gauss’s Law practise**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Gauss’s Law practise**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Gauss’s Law practise**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Gauss’s Law practise**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Gauss’s Law practise**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Gauss’s Law practise**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Gauss’s Law practise**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 1', 'Bernoulli’s Equation'): r"""## Advanced Study Notes

Focus topic: **Bernoulli’s Equation** (AP Physics 1).

## 1. Mechanism depth

Bernoulli's equation is steady-flow energy conservation per unit volume along a streamline: $P+\frac{1}{2}\rho v^2+\rho gy=\text{const}$. Pressure term is flow work capacity, $\frac{1}{2}\rho v^2$ is kinetic energy density, $\rho gy$ is gravitational potential energy density. Assumptions: incompressible, non-viscous, steady, laminar flow along a streamline. Horizontal pipes drop static pressure where speed increases (Venturi effect). Combine with continuity $A_1v_1=A_2v_2$ for unknowns.

## 2. Cross-unit synthesis

Links continuity, pressure, buoyancy (static limit), and Torricelli efflux. Energy methods from Unit 4 reappear as energy per volume. Viscosity and turbulence invalidate Bernoulli where Reynolds number is large.

## 3. FRQ craft

Derive speed from height difference (Torricelli); explain pressure drop in constriction; justify assumptions; multi-step with continuity.

## 4. Formula drills

- $P+\frac{1}{2}\rho v^2+\rho gy=\text{const}$; horizontal: $P+\frac{1}{2}\rho v^2=\text{const}$
- Continuity: $A v=\text{const}$; Drill: pipe narrows to half area—speed factor?

## 5. Misconception repair

Bernoulli is not universal; do not apply across pumps/turbines without work term. Higher speed does not always mean higher pressure—static pressure drops.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Bernoulli’s Equation**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Bernoulli’s Equation**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Bernoulli’s Equation**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Bernoulli’s Equation**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Bernoulli’s Equation**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Bernoulli’s Equation**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Bernoulli’s Equation**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Bernoulli’s Equation**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.""",
    ('AP Physics 1', '## 4. Floating, Sinking, and Newton’s Second Law'): r"""## Advanced Study Notes

Focus topic: **## 4. Floating, Sinking, and Newton’s Second Law** (AP Physics 1).

## 1. Mechanism depth

Buoyant force equals the weight of displaced fluid: $F_B=\rho_{\text{fluid}}gV_{\text{displaced}}$.
For a fully submerged object, $V_{\text{displaced}}=V_{\text{object}}$. A floating object
displaces only enough fluid to support its weight: $F_B=mg$ with partial submergence.
Newton's second law governs motion: $\sum F_y=ma_y$, typically $F_B-mg=ma_y$ (upward positive).
Equilibrium floating gives $\rho_{\text{fluid}}V_{\text{sub}}=\rho_{\text{obj}}V_{\text{obj}}$.
Apparent weight in a fluid is $w_{\text{app}}=mg-F_B$. Tension problems add $T+F_B-mg=0$
for suspended equilibrium.

## 2. Cross-unit synthesis

Links hydrostatic pressure to dynamics and to density ratios. Floating fraction
$V_{\sub}/V_{\obj}=\rho_{\obj}/\rho_{\fluid}$ connects Unit 8 fluids to Unit 2 forces.
Archimedes' principle appears again in apparent-weight lab analysis. Combine with
Bernoulli only when flow is specified; static floating is pure force balance.

## 3. FRQ craft

Draw free-body diagrams for floating, sinking, and suspended cases. Derive fraction
submerged from density ratio. Explain acceleration direction from $F_B$ vs $mg$.
Multi-step: object on string partially immersed—find tension and fraction submerged.

## 4. Formula drills

- $F_B=\rho_{\text{fluid}}gV_{\text{disp}}$; float: $F_B=mg$; $\frac{V_{\sub}}{V_{\obj}}=\frac{\rho_{\obj}}{\rho_{\fluid}}$
- Dynamics: $F_B-mg=ma$; suspended: $T+F_B-mg=0$
- Drill: wood $\rho=600\,\mathrm{kg/m^3}$ in water—fraction above water?

## 5. Misconception repair

"Heavier objects sink" ignores volume and density. Buoyant force depends on displaced
fluid volume, not object mass alone. Floating objects can have $F_B=mg$ with $V_{\disp}<V_{\obj}$.
Do not use $F_B=\rho V g$ with wrong volume (must be displaced, not total, unless fully submerged).

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **## 4. Floating, Sinking, and Newton’s Second Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **## 4. Floating, Sinking, and Newton’s Second Law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **## 4. Floating, Sinking, and Newton’s Second Law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **## 4. Floating, Sinking, and Newton’s Second Law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **## 4. Floating, Sinking, and Newton’s Second Law**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **## 4. Floating, Sinking, and Newton’s Second Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.""",
    ('AP Physics 1', 'Pressure'): r"""## Advanced Study Notes

Focus topic: **Pressure** (AP Physics 1).

## 1. Mechanism depth

Pressure is a scalar field $P$ measuring perpendicular force per unit area:
$P=F_\perp/A$. In a static fluid the pressure at depth $h$ below a free surface
at atmospheric pressure $P_0$ is $P=P_0+\rho gh$, where $\rho$ is fluid density
and $g$ is gravitational field strength. The relation follows from force balance on
a horizontal slab of fluid: weight $mg=\rho gA\Delta h$ must be supported by the
pressure difference $\Delta P\,A$. Pressure is isotropic in a fluid at rest—every
surface element experiences the same magnitude regardless of orientation—so force
on a wall is always normal to that wall. On a $P$-versus-$h$ graph the slope is
$\rho g$; changing fluid or gravity changes the slope but not the linearity.

## 2. Cross-unit synthesis

Hydrostatic pressure underpins buoyancy ($F_B=\rho_{\text{fluid}}gV_{\text{submerged}}$),
Pascal's hydraulics, barometer readings, and the pressure terms in Bernoulli's equation.
Connect to Newton's second law when analyzing submerged objects and to energy density
$P$ as work per unit volume. Communicating vessels share a common pressure at equal
depths; container shape affects volume distribution but not pressure at a given depth.

## 3. FRQ craft

Typical tasks: compute gauge vs absolute pressure; compare pressures at two depths;
explain why pressure is the same at the same depth in connected fluids; draw a
pressure-versus-depth graph and interpret slope. Always state whether $P_0$ is included.
For multi-fluid columns use $\Delta P=\rho g\Delta h$ segment by segment. Justify
direction of net force on a surface from pressure difference, not from "pushing down."

## 4. Formula drills

- $P=F_\perp/A$; hydrostatic: $P=P_0+\rho gh$; $\Delta P=\rho g\Delta h$
- Gauge pressure: $P_g=P-P_{\text{atm}}$; slope on $P$-$h$ graph: $\rho g$
- Drill: tank 2 m deep with water ($\rho=1000\,\mathrm{kg/m^3}$): find $P$ at bottom
  including $P_0=1.0\times10^5\,\mathrm{Pa}$; then gauge only.

## 5. Misconception repair

Pressure is not "heavier water pushing down" as a single downward vector; it acts
perpendicular to every surface. Deeper does not mean "more force directionally down"
on a horizontal floor—it means larger normal force per area. Students confuse pressure
with force or confuse gauge and absolute values. Shape of container does not change
$P(h)$ in a single connected fluid at rest.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Pressure**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Pressure**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Pressure**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.""",
    ('AP Physics C: Mechanics', '6. Kepler’s First and Second Law'): r"""## Advanced Study Notes

Focus topic: **6. Kepler’s First and Second Law** (AP Physics C: Mechanics).

## 1. Mechanism depth

First: orbits are ellipses, focus at central body. Second: equal areas in equal times $\Rightarrow$ faster at perihelion.

## 2. Cross-unit synthesis

Angular momentum conservation explains second law.

## 3. FRQ craft

Qualitative speed at peri/apo; area sweep.

## 4. Formula drills

- $L=rmv_\perp=\text{const}$; $v$ larger when $r$ smaller
- Drill: where is $K$ max in ellipse?

## 5. Misconception repair

Memorizing without $L$ conservation reason.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **6. Kepler’s First and Second Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **6. Kepler’s First and Second Law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **6. Kepler’s First and Second Law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **6. Kepler’s First and Second Law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **6. Kepler’s First and Second Law**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **6. Kepler’s First and Second Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **6. Kepler’s First and Second Law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **6. Kepler’s First and Second Law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **6. Kepler’s First and Second Law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics C: Mechanics', 'Elliptical Orbits'): r"""## Advanced Study Notes

Focus topic: **Elliptical Orbits** (AP Physics C: Mechanics).

## 1. Mechanism depth

$E<0$ bound; semi-major axis $a$; $r_{\min}=a(1-e)$, $r_{\max}=a(1+e)$. Speed and $U,K$ trade with $r$.

## 2. Cross-unit synthesis

Kepler laws; escape as $E\ge0$.

## 3. FRQ craft

Energy bar at peri vs apo; is $L$ conserved?

## 4. Formula drills

- $E=K+U=\text{const}$; $L=\text{const}$
- Drill: apo speed vs peri?

## 5. Misconception repair

Treating speed as constant in ellipse.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Elliptical Orbits**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Elliptical Orbits**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Elliptical Orbits**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Elliptical Orbits**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Elliptical Orbits**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Elliptical Orbits**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Elliptical Orbits**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Elliptical Orbits**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Elliptical Orbits**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Elliptical Orbits**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Elliptical Orbits**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.""",
    ('AP Physics C: Mechanics', 'Calculus Used in Rotational Motion'): r"""## Advanced Study Notes

Focus topic: **Calculus Used in Rotational Motion** (AP Physics C: Mechanics).

## 1. Mechanism depth

Rotational work $W=\int\tau\,d\theta$; $K_{\rot}=\tfrac12 I\omega^2$; $\tau=dL/dt$.

## 2. Cross-unit synthesis

Full rotational calculus toolkit.

## 3. FRQ craft

Derive $K_{\rot}$ from integration of power.

## 4. Formula drills

- $W=\int\tau\,d\theta$; $P=\tau\omega$; $L=I\omega$
- Drill: $\tau$ constant—$\omega$ vs $t$?

## 5. Misconception repair

Confusing $\theta$ with $s$ without $r$.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Calculus Used in Rotational Motion**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Calculus Used in Rotational Motion**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Calculus Used in Rotational Motion**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Calculus Used in Rotational Motion**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Calculus Used in Rotational Motion**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Calculus Used in Rotational Motion**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Calculus Used in Rotational Motion**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Calculus Used in Rotational Motion**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Calculus Used in Rotational Motion**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Calculus Used in Rotational Motion**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Angular Position, Velocity, and Acceleration'): r"""## Advanced Study Notes

Focus topic: **Angular Position, Velocity, and Acceleration** (AP Physics C: Mechanics).

## 1. Mechanism depth

$\theta(t)$; $\omega=d\theta/dt$; $\alpha=d\omega/dt$. Integrate like linear kinematics.

## 2. Cross-unit synthesis

Rotational kinematics parallel to linear.

## 3. FRQ craft

Given $\alpha(t)$ find $\omega,\theta$.

## 4. Formula drills

- $\omega=d\theta/dt$; $\alpha=d\omega/dt$; $\theta=\int\omega\,dt$
- Drill: constant $\alpha$—$\omega$ vs $t$ linear?

## 5. Misconception repair

Using $v=r\omega$ without radian measure.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Angular Position, Velocity, and Acceleration**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Angular Position, Velocity, and Acceleration**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Angular Position, Velocity, and Acceleration**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Angular Position, Velocity, and Acceleration**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Angular Position, Velocity, and Acceleration**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Angular Position, Velocity, and Acceleration**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Angular Position, Velocity, and Acceleration**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Angular Position, Velocity, and Acceleration**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Angular Position, Velocity, and Acceleration**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Angular Position, Velocity, and Acceleration**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Electric Charges, Fields, and Gauss’s Law'): r"""## Advanced Study Notes

Focus topic: **Electric Charges, Fields, and Gauss’s Law** (AP Physics C: E&M).

## 1. Mechanism depth

Field $\vec E=\vec F/q$. Flux $\Phi=\oint\vec E\cdot d\vec A$. Gauss: $\Phi=Q_{\enc}/\epsilon_0$.

## 2. Cross-unit synthesis

Unifies electrostatics; links to potential.

## 3. FRQ craft

Choose Gaussian surface; find $E$ for symmetric charge.

## 4. Formula drills

- $\Phi=\oint\vec E\cdot d\vec A$; $\Phi=Q_{\enc}/\epsilon_0$
- Drill: sphere Gaussian surface—$E(r)$?

## 5. Misconception repair

Flux through open surface vs closed confusion.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Electric Charges, Fields, and Gauss’s Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Electric Charges, Fields, and Gauss’s Law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Electric Charges, Fields, and Gauss’s Law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Electric Charges, Fields, and Gauss’s Law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Electric Charges, Fields, and Gauss’s Law**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Electric Charges, Fields, and Gauss’s Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Electric Charges, Fields, and Gauss’s Law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Electric Charges, Fields, and Gauss’s Law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Electric Charges, Fields, and Gauss’s Law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Electric Charges, Fields, and Gauss’s Law**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Electric Potential'): r"""## Advanced Study Notes

Focus topic: **Electric Potential** (AP Physics C: E&M).

## 1. Mechanism depth

$V=-\int_\infty^r\vec E\cdot d\vec l$. Point charge $V=kq/r$. $\vec E=-\nabla V$; equipotentials $\perp\vec E$.

## 2. Cross-unit synthesis

Energy $U=qV$; work moving charge.

## 3. FRQ craft

Find $V$ from $E$; potential difference path independent.

## 4. Formula drills

- $V=kq/r$; $\Delta V=-\int\vec E\cdot d\vec l$; $U=qV$
- Drill: move + charge to higher $V$—$W$ by field?

## 5. Misconception repair

Sign of $W$ and $\Delta U$.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Electric Potential**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Electric Potential**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Electric Potential**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Electric Potential**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Electric Potential**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Electric Potential**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Electric Potential**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Electric Potential**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Electric Potential**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Electric Potential**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Electric Circuits'): r"""## Advanced Study Notes

Focus topic: **Electric Circuits** (AP Physics C: E&M).

## 1. Mechanism depth

Current $I=dQ/dt$ is the rate of charge flow; conventional current direction is positive charge motion. Ohm's law $V=IR$ relates potential difference across a resistor to current when the material is ohmic. Power dissipated in a resistor is $P=IV=I^2R=V^2/R$. Series resistors share the same current; equivalent resistance adds: $R_{\eq}=R_1+R_2+\cdots$. Parallel branches share the same voltage; reciprocals add: $1/R_{\eq}=1/R_1+1/R_2+\cdots$. Kirchhoff's junction and loop rules generalize beyond simple combinations.

## 2. Cross-unit synthesis

RC/RL transients; Kirchhoff multi-loop analysis; links potential and field concepts to emf and terminal voltage.

## 3. FRQ craft

Equivalent resistance; power dissipation; compare brightness of bulbs in rewire problems; justify series vs parallel current splits with conservation laws.

## 4. Formula drills

- $V=IR$; $P=IV$; series $R_{\eq}=\sum R$; parallel $1/R_{\eq}=\sum1/R$
- Drill: three identical in parallel—$R_{\eq}$? Drill: same battery, which dissipates more power?

## 5. Misconception repair

Shorting battery; power sign; thinking parallel always has less total resistance without checking topology.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Electric Circuits**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Electric Circuits**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Electric Circuits**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Electric Circuits**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Electric Circuits**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Electric Circuits**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Electric Circuits**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Electric Circuits**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.""",
    ('AP Physics C: E&M', 'Conductors and Capacitors'): r"""## Advanced Study Notes

Focus topic: **Conductors and Capacitors** (AP Physics C: E&M).

## 1. Mechanism depth

Conductor: $E=0$ inside; excess charge on surface. Capacitance $C=Q/V$; parallel plate $C=\epsilon_0 A/d$.

## 2. Cross-unit synthesis

Gauss with conductors; circuit elements.

## 3. FRQ craft

Find $C$, stored energy $U=\tfrac12 CV^2$.

## 4. Formula drills

- $C=\epsilon_0 A/d$; $U=\tfrac12 QV=\tfrac12 CV^2$
- Drill: double plate separation—$C$?

## 5. Misconception repair

Charge on inner vs outer surface of shell.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Conductors and Capacitors**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Conductors and Capacitors**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Conductors and Capacitors**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Conductors and Capacitors**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Conductors and Capacitors**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Conductors and Capacitors**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Conductors and Capacitors**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Conductors and Capacitors**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Conductors and Capacitors**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Conductors and Capacitors**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Magnetic Fields and Electromagnetism'): r"""## Advanced Study Notes

Focus topic: **Magnetic Fields and Electromagnetism** (AP Physics C: E&M).

## 1. Mechanism depth

$\vec F=q\vec v\times\vec B$; wire $d\vec F=I\,d\vec l\times\vec B$. Biot-Savart and Ampère for field creation.

## 2. Cross-unit synthesis

Full E&M interplay; Lorentz force.

## 3. FRQ craft

Particle motion in $B$; cyclotron radius $r=mv/(qB)$.

## 4. Formula drills

- $F=qvB\sin\theta$; $r=mv/(qB)$ circular motion
- Drill: double $v$—radius?

## 5. Misconception repair

Forgetting $v\perp B$ component only.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Magnetic Fields and Electromagnetism**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Magnetic Fields and Electromagnetism**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Magnetic Fields and Electromagnetism**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Magnetic Fields and Electromagnetism**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Magnetic Fields and Electromagnetism**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Magnetic Fields and Electromagnetism**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Magnetic Fields and Electromagnetism**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Magnetic Fields and Electromagnetism**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Magnetic Fields and Electromagnetism**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Magnetic Fields and Electromagnetism**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Data CollectionsElectromagnetic Induction'): r"""## Advanced Study Notes

Focus topic: **Data CollectionsElectromagnetic Induction** (AP Physics C: E&M).

## 1. Mechanism depth

Lab design for Faraday's law: coils, magnets, flux change measurement; uncertainty in emf vs $d\Phi/dt$.

## 2. Cross-unit synthesis

Science practices in E&M unit.

## 3. FRQ craft

Describe induction demo data collection.

## 4. Formula drills

- Linearize emf vs rate of flux change
- Drill: what graph proves Faraday?

## 5. Misconception repair

Measuring $B$ not $\Phi$ without area context.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Data CollectionsElectromagnetic Induction**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Data CollectionsElectromagnetic Induction**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Data CollectionsElectromagnetic Induction**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Data CollectionsElectromagnetic Induction**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Data CollectionsElectromagnetic Induction**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Data CollectionsElectromagnetic Induction**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Data CollectionsElectromagnetic Induction**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Data CollectionsElectromagnetic Induction**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Data CollectionsElectromagnetic Induction**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Data CollectionsElectromagnetic Induction**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Data Collections'): r"""## Advanced Study Notes

Focus topic: **Data Collections** (AP Physics C: Mechanics).

## 1. Mechanism depth

Physics C lab: calculus-based analysis, error propagation, derivatives from slopes, integrals from areas.

## 2. Cross-unit synthesis

Science practices for mechanics C.

## 3. FRQ craft

Design experiment for $I$ or $g$ determination.

## 4. Formula drills

- Slope $\Rightarrow$ derivative; area $\Rightarrow$ integral
- Drill: $v(t)$ slope at point?

## 5. Misconception repair

Differentiation vs finite $\Delta$ confusion.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Data Collections**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Data Collections**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Data Collections**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Data Collections**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Data Collections**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Data Collections**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Data Collections**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Data Collections**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Data Collections**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Data Collections**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Data Collections**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.""",
    ('AP Physics 2', 'Data Collections'): r"""## Advanced Study Notes

Focus topic: **Data Collections** (AP Physics 2).

## 1. Mechanism depth

Experimental design: identify independent/dependent variables, controls, uncertainty, linearization for AP Physics 2 inquiry.

## 2. Cross-unit synthesis

Science practices across all units.

## 3. FRQ craft

Describe data collection for wave speed lab; justify graph choice.

## 4. Formula drills

- Linearize: $T^2$ vs $L$ for pendulum analogs
- Drill: write method in 3 sentences.

## 5. Misconception repair

Correlation vs causation; missing units on axes.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Data Collections**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Data Collections**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Data Collections**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Data Collections**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Data Collections**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Data Collections**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Data Collections**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Data Collections**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Data Collections**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Data Collections**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Data Collections**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.""",
    ('AP Physics 2', 'Thermodynamics'): r"""## Advanced Study Notes

Focus topic: **Thermodynamics** (AP Physics 2).

## 1. Mechanism depth

First law $\Delta U=Q-W$ (system-centric sign convention). Ideal gas $PV=nRT$. Processes: isothermal $\Delta U=0$; adiabatic $Q=0$. Entropy qualitative on AP P2.

## 2. Cross-unit synthesis

Kinetic theory, heat engines, PV diagrams.

## 3. FRQ craft

PV diagram work as area; $\Delta U$ for monatomic ideal gas.

## 4. Formula drills

- $\Delta U=Q-W$; $W=\int P\,dV$; ideal: $\Delta U=\tfrac{3}{2}nR\Delta T$ (monatomic)
- Drill: isothermal expansion—$\Delta U$?

## 5. Misconception repair

Work sign; heat vs temperature.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Thermodynamics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Thermodynamics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Thermodynamics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Thermodynamics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Thermodynamics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Thermodynamics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Thermodynamics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Thermodynamics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Thermodynamics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Thermodynamics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Thermodynamics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.""",
    ('AP Physics C: Mechanics', 'Work–Energy Theorem and Mechanical Energy'): r"""## Advanced Study Notes

Focus topic: **Work–Energy Theorem and Mechanical Energy** (AP Physics C: Mechanics).

## 1. Mechanism depth

$W_{\net}=\Delta K$; $E=K+U$ conserved if only conservative forces. $W_{\nc}=\Delta E$.

## 2. Cross-unit synthesis

Gravitational $U=mgh$; spring $U=\tfrac12 kx^2$; orbital $U=-GMm/r$.

## 3. FRQ craft

Energy bar charts; find speed from height.

## 4. Formula drills

- $W_{\net}=\Delta K$; $\Delta E=0$ conservative; $W_{\nc}=\Delta E$
- Drill: block slides with friction—use energy.

## 5. Misconception repair

Double-counting work and $\Delta U$.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Work–Energy Theorem and Mechanical Energy**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Work–Energy Theorem and Mechanical Energy**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Work–Energy Theorem and Mechanical Energy**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Work–Energy Theorem and Mechanical Energy**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Work–Energy Theorem and Mechanical Energy**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Work–Energy Theorem and Mechanical Energy**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Work–Energy Theorem and Mechanical Energy**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Work–Energy Theorem and Mechanical Energy**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Work–Energy Theorem and Mechanical Energy**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Work–Energy Theorem and Mechanical Energy**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Linear Momentum, Impulse, and Collisions'): r"""## Advanced Study Notes

Focus topic: **Linear Momentum, Impulse, and Collisions** (AP Physics C: Mechanics).

## 1. Mechanism depth

Elastic: $K$ conserved; inelastic: objects stick, $K$ not conserved. 1D: $m_1v_1+m_2v_2=m_1v_1'+m_2v_2'$.

## 2. Cross-unit synthesis

Impulse in contact; CM frame optional on C.

## 3. FRQ craft

Ballistic pendulum; 2D glancing qualitative.

## 4. Formula drills

- Conservation $\sum p_i=\sum p_f$; elastic also $\sum K$ conserved
- Drill: perfectly inelastic—find final $v$.

## 5. Misconception repair

Using momentum when external impulse present.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Linear Momentum, Impulse, and Collisions**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Linear Momentum, Impulse, and Collisions**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Linear Momentum, Impulse, and Collisions**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Linear Momentum, Impulse, and Collisions**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Linear Momentum, Impulse, and Collisions**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Linear Momentum, Impulse, and Collisions**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Linear Momentum, Impulse, and Collisions**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Linear Momentum, Impulse, and Collisions**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Linear Momentum, Impulse, and Collisions**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Linear Momentum, Impulse, and Collisions**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Torque, Moment of Inertia, and Rotational Dynamics'): r"""## Advanced Study Notes

Focus topic: **Torque, Moment of Inertia, and Rotational Dynamics** (AP Physics C: Mechanics).

## 1. Mechanism depth

$\vec\tau=\vec r\times\vec F$; $\sum\tau=I\alpha$. $I=\int r^2\,dm$ for continuous bodies.

## 2. Cross-unit synthesis

Rolling without slipping; statics balance.

## 3. FRQ craft

Find $\alpha$; rolling down incline.

## 4. Formula drills

- $\tau=rF\sin\theta$; $\sum\tau=I\alpha$; rolling: $v=\omega R$, $a=\alpha R$
- Drill: solid vs hollow cylinder race?

## 5. Misconception repair

Pivot torque sign; $I$ about wrong axis.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Torque, Moment of Inertia, and Rotational Dynamics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Torque, Moment of Inertia, and Rotational Dynamics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Torque, Moment of Inertia, and Rotational Dynamics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Torque, Moment of Inertia, and Rotational Dynamics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Torque, Moment of Inertia, and Rotational Dynamics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Torque, Moment of Inertia, and Rotational Dynamics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Torque, Moment of Inertia, and Rotational Dynamics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Torque, Moment of Inertia, and Rotational Dynamics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Torque, Moment of Inertia, and Rotational Dynamics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics C: Mechanics', 'Angular Momentum and Its Conservation'): r"""## Advanced Study Notes

Focus topic: **Angular Momentum and Its Conservation** (AP Physics C: Mechanics).

## 1. Mechanism depth

$\vec L=\vec r\times\vec p$; particle $L=r mv\sin\theta$. System: $L=I\omega$. $\vec\tau_{\ext}=d\vec L/dt$.

## 2. Cross-unit synthesis

Central forces; orbital mechanics; collisions with rotation.

## 3. FRQ craft

Ice skater spin; collision with point impact.

## 4. Formula drills

- $L=I\omega$; $\Delta L=\int\tau\,dt$; conserved if $\tau_{\ext}=0$
- Drill: $I$ halved—$\omega$?

## 5. Misconception repair

Confusing $L$ with $K_{\rot}$ conservation conditions.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Angular Momentum and Its Conservation**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Angular Momentum and Its Conservation**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Angular Momentum and Its Conservation**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Angular Momentum and Its Conservation**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Angular Momentum and Its Conservation**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Angular Momentum and Its Conservation**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Angular Momentum and Its Conservation**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Angular Momentum and Its Conservation**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Angular Momentum and Its Conservation**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Angular Momentum and Its Conservation**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Simple Harmonic Motion and Oscillations'): r"""## Advanced Study Notes

Focus topic: **Simple Harmonic Motion and Oscillations** (AP Physics C: Mechanics).

## 1. Mechanism depth

$a=-\omega^2 x$; $x=A\cos(\omega t+\phi)$; $T=2\pi/\omega$. Spring $T=2\pi\sqrt{m/k}$; pendulum small angle $T=2\pi\sqrt{L/g}$.

## 2. Cross-unit synthesis

Energy in SHM; links to circular motion projection.

## 3. FRQ craft

Find $T$ from parameters; energy vs position graph.

## 4. Formula drills

- $x=A\cos(\omega t+\phi)$; $T=2\pi\sqrt{m/k}$; $E=\tfrac12 kA^2$
- Drill: double $m$—$T$?

## 5. Misconception repair

Using pendulum formula at large amplitude.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Simple Harmonic Motion and Oscillations**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Simple Harmonic Motion and Oscillations**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Simple Harmonic Motion and Oscillations**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Simple Harmonic Motion and Oscillations**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Simple Harmonic Motion and Oscillations**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Simple Harmonic Motion and Oscillations**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Simple Harmonic Motion and Oscillations**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Simple Harmonic Motion and Oscillations**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Simple Harmonic Motion and Oscillations**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Simple Harmonic Motion and Oscillations**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Newton’s Laws with Variable Forces (Calculus)'): r"""## Advanced Study Notes

Focus topic: **Newton’s Laws with Variable Forces (Calculus)** (AP Physics C: Mechanics).

## 1. Mechanism depth

$F(t)$ or $F(x)$: $a=F/m$, integrate for $v,x$. Spring $F=-kx$ leads to SHM. Work $W=\int F\,dx$.

## 2. Cross-unit synthesis

Calculus core of Physics C; SHM derivation.

## 3. FRQ craft

Given $F(x)$ find $v$ from work-energy or integration.

## 4. Formula drills

- $F=ma=m\,dv/dt$; $W=\int_{x_i}^{x_f}F\,dx$
- Drill: $F=-kx$—show SHM equation.

## 5. Misconception repair

Treating nonconstant $F$ with constant-$F$ kinematics.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Newton’s Laws with Variable Forces (Calculus)**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Newton’s Laws with Variable Forces (Calculus)**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Newton’s Laws with Variable Forces (Calculus)**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Newton’s Laws with Variable Forces (Calculus)**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Newton’s Laws with Variable Forces (Calculus)**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Newton’s Laws with Variable Forces (Calculus)**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Newton’s Laws with Variable Forces (Calculus)**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Newton’s Laws with Variable Forces (Calculus)**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Newton’s Laws with Variable Forces (Calculus)**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Newton’s Laws with Variable Forces (Calculus)**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Equipotential Surfaces and Field Lines'): r"""## Advanced Study Notes

Focus topic: **Equipotential Surfaces and Field Lines** (AP Physics C: E&M).

## 1. Mechanism depth

Equipotentials: no work along surface; field lines perpendicular; closer spacing $\Rightarrow$ stronger $E$.

## 2. Cross-unit synthesis

Graphical electrostatics; conductor surface is equipotential.

## 3. FRQ craft

Sketch lines and surfaces; predict motion of + charge.

## 4. Formula drills

- $E\approx-\Delta V/\Delta n$ (perpendicular)
- Drill: uniform field—equipotential spacing?

## 5. Misconception repair

Field lines crossing; equipotentials not $\perp$ $E$.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Equipotential Surfaces and Field Lines**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Equipotential Surfaces and Field Lines**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Equipotential Surfaces and Field Lines**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Equipotential Surfaces and Field Lines**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Equipotential Surfaces and Field Lines**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Equipotential Surfaces and Field Lines**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Equipotential Surfaces and Field Lines**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Equipotential Surfaces and Field Lines**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Equipotential Surfaces and Field Lines**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Equipotential Surfaces and Field Lines**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Magnetic Force, Currents, and Right-Hand Rules'): r"""## Advanced Study Notes

Focus topic: **Magnetic Force, Currents, and Right-Hand Rules** (AP Physics C: E&M).

## 1. Mechanism depth

Right-hand rules for $\vec F$, $\vec B$ from current, solenoid direction. Torque on loop $\vec\tau=\vec\mu\times\vec B$.

## 2. Cross-unit synthesis

Motors, meters; cross products.

## 3. FRQ craft

Direction FRQ without full calculation.

## 4. Formula drills

- $\vec F=I\vec L\times\vec B$; $\tau=\mu B\sin\theta$
- Drill: reverse current—force direction?

## 5. Misconception repair

Left-hand rule mix-ups.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Magnetic Force, Currents, and Right-Hand Rules**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Magnetic Force, Currents, and Right-Hand Rules**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Magnetic Force, Currents, and Right-Hand Rules**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Magnetic Force, Currents, and Right-Hand Rules**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Magnetic Force, Currents, and Right-Hand Rules**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Magnetic Force, Currents, and Right-Hand Rules**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Magnetic Force, Currents, and Right-Hand Rules**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Magnetic Force, Currents, and Right-Hand Rules**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Magnetic Force, Currents, and Right-Hand Rules**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Magnetic Force, Currents, and Right-Hand Rules**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Biot–Savart Law and Ampère’s Law'): r"""## Advanced Study Notes

Focus topic: **Biot–Savart Law and Ampère’s Law** (AP Physics C: E&M).

## 1. Mechanism depth

Biot-Savart $d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2}$. Ampère $\oint\vec B\cdot d\vec l=\mu_0 I_{\enc}$.

## 2. Cross-unit synthesis

Symmetric wire/solenoid fields; parallel to Gauss.

## 3. FRQ craft

Field of long wire; solenoid $B=\mu_0 nI$.

## 4. Formula drills

- Long wire: $B=\mu_0 I/(2\pi r)$; solenoid: $B=\mu_0 nI$
- Drill: double current—$B$?

## 5. Misconception repair

Using Ampère when $I_{\enc}$ changes with displacement current (beyond static).

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Biot–Savart Law and Ampère’s Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Biot–Savart Law and Ampère’s Law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Biot–Savart Law and Ampère’s Law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Biot–Savart Law and Ampère’s Law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Biot–Savart Law and Ampère’s Law**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Biot–Savart Law and Ampère’s Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Biot–Savart Law and Ampère’s Law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Biot–Savart Law and Ampère’s Law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Biot–Savart Law and Ampère’s Law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Biot–Savart Law and Ampère’s Law**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Faraday’s Law, Lenz’s Law, and Induction Circuits'): r"""## Advanced Study Notes

Focus topic: **Faraday’s Law, Lenz’s Law, and Induction Circuits** (AP Physics C: E&M).

## 1. Mechanism depth

Emf $\mathcal E=-d\Phi/dt$; Lenz opposes flux change. Motional emf $Blv$.

## 2. Cross-unit synthesis

Connects changing fields to circuits.

## 3. FRQ craft

Find direction of induced current; bar sliding on rails.

## 4. Formula drills

- $\mathcal E=-d\Phi/dt$; $\Phi=\int\vec B\cdot d\vec A$
- Drill: flux increasing into page—current direction?

## 5. Misconception repair

Sign error on Lenz; confusing $\Phi$ with $B$.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Faraday’s Law, Lenz’s Law, and Induction Circuits**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Faraday’s Law, Lenz’s Law, and Induction Circuits**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Faraday’s Law, Lenz’s Law, and Induction Circuits**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Faraday’s Law, Lenz’s Law, and Induction Circuits**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Faraday’s Law, Lenz’s Law, and Induction Circuits**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Faraday’s Law, Lenz’s Law, and Induction Circuits**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Faraday’s Law, Lenz’s Law, and Induction Circuits**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Faraday’s Law, Lenz’s Law, and Induction Circuits**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Faraday’s Law, Lenz’s Law, and Induction Circuits**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics C: E&M', 'Inductance, RL Circuits, and LC Oscillations'): r"""## Advanced Study Notes

Focus topic: **Inductance, RL Circuits, and LC Oscillations** (AP Physics C: E&M).

## 1. Mechanism depth

$\mathcal E=-L\,dI/dt$; solenoid $L=\mu_0 n^2 V$. RL: $I(t)=I_f(1-e^{-t/\tau})$, $\tau=L/R$. LC: $T=2\pi\sqrt{LC}$.

## 2. Cross-unit synthesis

Energy $\tfrac12 LI^2$; analog to SHM.

## 3. FRQ craft

RL time constant; LC frequency.

## 4. Formula drills

- $L=\mu_0 n^2 A/\ell$; $\tau=L/R$; LC: $T=2\pi\sqrt{LC}$
- Drill: double $L$ in RL—$\tau$?

## 5. Misconception repair

Shorting inductor at $t=0^+$—current continuity.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Inductance, RL Circuits, and LC Oscillations**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Inductance, RL Circuits, and LC Oscillations**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Inductance, RL Circuits, and LC Oscillations**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Inductance, RL Circuits, and LC Oscillations**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Inductance, RL Circuits, and LC Oscillations**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Inductance, RL Circuits, and LC Oscillations**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Inductance, RL Circuits, and LC Oscillations**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Inductance, RL Circuits, and LC Oscillations**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Inductance, RL Circuits, and LC Oscillations**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Inductance, RL Circuits, and LC Oscillations**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'RC Circuit Transients and Capacitor Switching'): r"""## Advanced Study Notes

Focus topic: **RC Circuit Transients and Capacitor Switching** (AP Physics C: E&M).

## 1. Mechanism depth

Charge $q(t)=Q_f(1-e^{-t/RC})$; $Q_f=CV$. Time constant $\tau=RC$. Current decays exponentially.

## 2. Cross-unit synthesis

Capacitor blocks DC steady state; initial capacitor acts as wire/uncharged.

## 3. FRQ craft

Switch at $t=0$; find $I(0^+)$, $I(\infty)$; energy before/after.

## 4. Formula drills

- $\tau=RC$; $q=Q_f(1-e^{-t/\tau})$; $I=dq/dt$
- Drill: double $R$—$\tau$?

## 5. Misconception repair

Treating capacitor voltage as instant jump without charge conservation.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **RC Circuit Transients and Capacitor Switching**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **RC Circuit Transients and Capacitor Switching**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **RC Circuit Transients and Capacitor Switching**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **RC Circuit Transients and Capacitor Switching**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **RC Circuit Transients and Capacitor Switching**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **RC Circuit Transients and Capacitor Switching**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **RC Circuit Transients and Capacitor Switching**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **RC Circuit Transients and Capacitor Switching**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **RC Circuit Transients and Capacitor Switching**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **RC Circuit Transients and Capacitor Switching**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', '1D and 2D Kinematics with Calculus'): r"""## Advanced Study Notes

Focus topic: **1D and 2D Kinematics with Calculus** (AP Physics C: Mechanics).

## 1. Mechanism depth

$x(t)$, $v=dx/dt$, $a=dv/dt=d^2x/dt^2$. Integrate $a(t)$ for $\Delta v$, $v(t)$ for $\Delta x$. Projectile: $a_x=0$, $a_y=-g$.

## 2. Cross-unit synthesis

Foundation for all mechanics C; links to work integrals.

## 3. FRQ craft

Given $a(t)$ find $v,x$; trajectory from calculus.

## 4. Formula drills

- $v=dx/dt$; $a=dv/dt$; $x_f=x_i+\int v\,dt$
- Drill: $a=kt$—find $v(t)$ given $v_0$.

## 5. Misconception repair

Confusing average vs instantaneous; wrong integration limits.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **1D and 2D Kinematics with Calculus**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **1D and 2D Kinematics with Calculus**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **1D and 2D Kinematics with Calculus**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **1D and 2D Kinematics with Calculus**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **1D and 2D Kinematics with Calculus**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **1D and 2D Kinematics with Calculus**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **1D and 2D Kinematics with Calculus**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **1D and 2D Kinematics with Calculus**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **1D and 2D Kinematics with Calculus**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics C: Mechanics', 'Projectile Motion'): r"""## Advanced Study Notes

Focus topic: **Projectile Motion** (AP Physics C: Mechanics).

## 1. Mechanism depth

Projectile motion separates into independent horizontal and vertical components when air resistance is negligible. With $a_x=0$ and $a_y=-g$, horizontal velocity stays constant while vertical velocity changes linearly with time. Position equations $x=v_{0x}t$ and $y=v_{0y}t-\tfrac12 gt^2$ follow from integrating acceleration. Range on level ground $R=v_0^2\sin2\theta/g$ peaks at $\theta=45^\circ$; time of flight $T=2v_0\sin\theta/g$. Calculus form: $v_y(t)=v_{0y}-gt$, $y(t)=y_0+v_{0y}t-\tfrac12 gt^2$.

## 2. Cross-unit synthesis

2D kinematics with calculus; energy methods give speed at height without time; links to circular motion at launch instant.

## 3. FRQ craft

Max range at $45^\circ$; hit moving target FRQ; find launch angle for given range; justify component independence.

## 4. Formula drills

- $x=v_{0x}t$; $y=v_{0y}t-\tfrac12 gt^2$; $R=v_0^2\sin2\theta/g$; $T=2v_0\sin\theta/g$
- Drill: double $v_0$—$R$ factor? Drill: same range at two angles—symmetry?

## 5. Misconception repair

Mixing components; using speed $v$ instead of $v_{0x}$ or $v_{0y}$; forgetting $g>0$ downward in sign convention.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Projectile Motion**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Projectile Motion**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Projectile Motion**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Projectile Motion**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Projectile Motion**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Projectile Motion**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Projectile Motion**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Projectile Motion**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.""",
    ('AP Physics C: Mechanics', 'Friction, Inclines, and Free-Body Diagrams'): r"""## Advanced Study Notes

Focus topic: **Friction, Inclines, and Free-Body Diagrams** (AP Physics C: Mechanics).

## 1. Mechanism depth

Static $f_s\le\mu_s N$; kinetic $f_k=\mu_k N$. Incline: rotate axes, $mg\sin\theta$ down plane.

## 2. Cross-unit synthesis

Dynamics on surfaces; circular motion banked curves link.

## 3. FRQ craft

Find acceleration on incline with friction; $\mu$ from angle of slip.

## 4. Formula drills

- $f=\mu N$; incline: $a=g(\sin\theta-\mu\cos\theta)$ down if sliding
- Drill: $\theta$ when block starts sliding?

## 5. Misconception repair

Normal equals $mg$ on incline—false.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Friction, Inclines, and Free-Body Diagrams**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Friction, Inclines, and Free-Body Diagrams**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Friction, Inclines, and Free-Body Diagrams**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Friction, Inclines, and Free-Body Diagrams**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Friction, Inclines, and Free-Body Diagrams**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Friction, Inclines, and Free-Body Diagrams**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Friction, Inclines, and Free-Body Diagrams**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Friction, Inclines, and Free-Body Diagrams**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Friction, Inclines, and Free-Body Diagrams**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Friction, Inclines, and Free-Body Diagrams**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Center of Mass and Systems of Particles'): r"""## Advanced Study Notes

Focus topic: **Center of Mass and Systems of Particles** (AP Physics C: Mechanics).

## 1. Mechanism depth

$\vec r_{\cm}=(\sum m_i\vec r_i)/M$. $\vec F_{\ext}=M\vec a_{\cm}$. Internal forces cancel in $\sum\vec F$.

## 2. Cross-unit synthesis

Multi-body problems; collision CM frame.

## 3. FRQ craft

Find CM; treat system as point mass for external forces.

## 4. Formula drills

- $\vec r_{\cm}=\frac{1}{M}\sum m_i\vec r_i$; $M\vec a_{\cm}=\sum\vec F_{\ext}$
- Drill: two masses separated—CM location?

## 5. Misconception repair

Including internal forces in $\vec F_{\net}$ for CM accel.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Center of Mass and Systems of Particles**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Center of Mass and Systems of Particles**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Center of Mass and Systems of Particles**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Center of Mass and Systems of Particles**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Center of Mass and Systems of Particles**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Center of Mass and Systems of Particles**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Center of Mass and Systems of Particles**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Center of Mass and Systems of Particles**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Center of Mass and Systems of Particles**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics C: Mechanics', 'Gravitational Field, Potential, and Escape Speed'): r"""## Advanced Study Notes

Focus topic: **Gravitational Field, Potential, and Escape Speed** (AP Physics C: Mechanics).

## 1. Mechanism depth

$g=GM/r^2$; $U_g=-GMm/r$ (zero at $\infty$). Escape $v_e=\sqrt{2GM/r}$ from energy conservation.

## 2. Cross-unit synthesis

Shell theorem; orbits.

## 3. FRQ craft

Potential energy graphs; escape from planet surface.

## 4. Formula drills

- $F_g=-GMm/r^2$; $U=-GMm/r$; $v_e=\sqrt{2GM/r}$
- Drill: double $M$—$v_e$ factor?

## 5. Misconception repair

Using $U=mgh$ far from surface.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Gravitational Field, Potential, and Escape Speed**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Gravitational Field, Potential, and Escape Speed**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Gravitational Field, Potential, and Escape Speed**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Gravitational Field, Potential, and Escape Speed**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Gravitational Field, Potential, and Escape Speed**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Gravitational Field, Potential, and Escape Speed**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Gravitational Field, Potential, and Escape Speed**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Gravitational Field, Potential, and Escape Speed**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Gravitational Field, Potential, and Escape Speed**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Gravitational Field, Potential, and Escape Speed**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Kepler’s Third Law and Orbital Periods'): r"""## Advanced Study Notes

Focus topic: **Kepler’s Third Law and Orbital Periods** (AP Physics C: Mechanics).

## 1. Mechanism depth

$T^2\propto a^3$ for solar system; $T^2=(4\pi^2/GM)a^3$ for any central $M$.

## 2. Cross-unit synthesis

Circular orbit special case $v=\sqrt{GM/r}$.

## 3. FRQ craft

Find period from $a$; compare two satellites.

## 4. Formula drills

- $T^2=(4\pi^2/GM)a^3$; circular: $v=\sqrt{GM/r}$
- Drill: $a\to2a$—$T$ factor?

## 5. Misconception repair

Using radius not semi-major axis for ellipse.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Kepler’s Third Law and Orbital Periods**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Kepler’s Third Law and Orbital Periods**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Kepler’s Third Law and Orbital Periods**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Kepler’s Third Law and Orbital Periods**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Kepler’s Third Law and Orbital Periods**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Kepler’s Third Law and Orbital Periods**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Kepler’s Third Law and Orbital Periods**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Kepler’s Third Law and Orbital Periods**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Kepler’s Third Law and Orbital Periods**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Kepler’s Third Law and Orbital Periods**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Power and Instantaneous Power'): r"""## Advanced Study Notes

Focus topic: **Power and Instantaneous Power** (AP Physics C: Mechanics).

## 1. Mechanism depth

$P=dW/dt$; instantaneous $P=\vec F\cdot\vec v$. Average vs instant on AP.

## 2. Cross-unit synthesis

Links dynamics and energy rate.

## 3. FRQ craft

Motor climbing at constant $v$—power needed.

## 4. Formula drills

- $P=Fv$ (parallel force); $P=dW/dt$
- Drill: constant $v$ up incline—power?

## 5. Misconception repair

Using average speed for instant power incorrectly.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Power and Instantaneous Power**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Power and Instantaneous Power**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Power and Instantaneous Power**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Power and Instantaneous Power**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Power and Instantaneous Power**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Power and Instantaneous Power**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Power and Instantaneous Power**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Power and Instantaneous Power**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Power and Instantaneous Power**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Power and Instantaneous Power**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Coulomb’s Law and Superposition'): r"""## Advanced Study Notes

Focus topic: **Coulomb’s Law and Superposition** (AP Physics C: E&M).

## 1. Mechanism depth

$\vec F=kq_1q_2/r^2\hat r$. Superposition: total field/force is vector sum of contributions.

## 2. Cross-unit synthesis

Foundation for Gauss, potential, circuits.

## 3. FRQ craft

Find force on charge in array; symmetry arguments.

## 4. Formula drills

- $F=k|q_1q_2|/r^2$; $\vec E=\sum\vec E_i$
- Drill: charge at square corner—$E$ at center?

## 5. Misconception repair

Adding scalars not vectors; missing $\hat r$ direction.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Coulomb’s Law and Superposition**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Coulomb’s Law and Superposition**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Coulomb’s Law and Superposition**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Coulomb’s Law and Superposition**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Coulomb’s Law and Superposition**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Coulomb’s Law and Superposition**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Coulomb’s Law and Superposition**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Coulomb’s Law and Superposition**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Coulomb’s Law and Superposition**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Coulomb’s Law and Superposition**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Continuous Charge Distributions (Line, Ring, Disk)'): r"""## Advanced Study Notes

Focus topic: **Continuous Charge Distributions (Line, Ring, Disk)** (AP Physics C: E&M).

## 1. Mechanism depth

Integrate $d\vec E=k\,dq/r^2\hat r$. Ring on axis; disk as superposition of rings.

## 2. Cross-unit synthesis

Bridge discrete Coulomb to Gauss symmetric limits.

## 3. FRQ craft

Field on axis of ring/disk; limit to point charge.

## 4. Formula drills

- $dE=k\,dq/r^2$; ring axis: $E=kQx/(x^2+R^2)^{3/2}$
- Drill: $x\gg R$ limit?

## 5. Misconception repair

Missing component cancellation by symmetry.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Continuous Charge Distributions (Line, Ring, Disk)**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Continuous Charge Distributions (Line, Ring, Disk)**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Continuous Charge Distributions (Line, Ring, Disk)**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Continuous Charge Distributions (Line, Ring, Disk)**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Continuous Charge Distributions (Line, Ring, Disk)**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Continuous Charge Distributions (Line, Ring, Disk)**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Continuous Charge Distributions (Line, Ring, Disk)**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Continuous Charge Distributions (Line, Ring, Disk)**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Continuous Charge Distributions (Line, Ring, Disk)**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Continuous Charge Distributions (Line, Ring, Disk)**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Dielectrics and Capacitors with Insulators'): r"""## Advanced Study Notes

Focus topic: **Dielectrics and Capacitors with Insulators** (AP Physics C: E&M).

## 1. Mechanism depth

Dielectric: $C=\kappa C_0$; field reduced $E=E_0/\kappa$. Bound charges polarize medium.

## 2. Cross-unit synthesis

Microscopic model of $\kappa$; energy with battery connected vs isolated.

## 3. FRQ craft

Compare $Q,V,E$ when slab inserted.

## 4. Formula drills

- $C=\kappa\epsilon_0 A/d$; $Q=\kappa Q_0$ (isolated)
- Drill: battery connected insert $\kappa$—$Q$?

## 5. Misconception repair

Thinking $\kappa$ increases $E$ inside dielectric.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Dielectrics and Capacitors with Insulators**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Dielectrics and Capacitors with Insulators**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Dielectrics and Capacitors with Insulators**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Dielectrics and Capacitors with Insulators**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Dielectrics and Capacitors with Insulators**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Dielectrics and Capacitors with Insulators**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Dielectrics and Capacitors with Insulators**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Dielectrics and Capacitors with Insulators**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Dielectrics and Capacitors with Insulators**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Dielectrics and Capacitors with Insulators**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Kirchhoff’s Rules and Multi-Loop Circuits'): r"""## Advanced Study Notes

Focus topic: **Kirchhoff’s Rules and Multi-Loop Circuits** (AP Physics C: E&M).

## 1. Mechanism depth

Junction: $\sum I=0$. Loop: $\sum\Delta V=0$. Solve multi-loop systems.

## 2. Cross-unit synthesis

General circuit analysis beyond series/parallel.

## 3. FRQ craft

Write loop equations; sign conventions for emf/resistors.

## 4. Formula drills

- $\sum I_{\in}=\sum I_{\out}$; $\sum\Delta V=0$ per loop
- Drill: two loops—how many independent equations?

## 5. Misconception repair

Inconsistent emf polarity across loops.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Kirchhoff’s Rules and Multi-Loop Circuits**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Kirchhoff’s Rules and Multi-Loop Circuits**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Kirchhoff’s Rules and Multi-Loop Circuits**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Kirchhoff’s Rules and Multi-Loop Circuits**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Kirchhoff’s Rules and Multi-Loop Circuits**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Kirchhoff’s Rules and Multi-Loop Circuits**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Kirchhoff’s Rules and Multi-Loop Circuits**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Kirchhoff’s Rules and Multi-Loop Circuits**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Kirchhoff’s Rules and Multi-Loop Circuits**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Kirchhoff’s Rules and Multi-Loop Circuits**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Mutual Inductance and Transformers'): r"""## Advanced Study Notes

Focus topic: **Mutual Inductance and Transformers** (AP Physics C: E&M).

## 1. Mechanism depth

$M$ couples coils; $\mathcal E_2=-M\,dI_1/dt$. Ideal transformer $V_2/V_1=N_2/N_1$, $I_1/I_2=N_2/N_1$.

## 2. Cross-unit synthesis

Energy transfer; power grid context.

## 3. FRQ craft

Step-up vs step-down; power conservation ideal.

## 4. Formula drills

- $\mathcal E=-M\,dI/dt$; $V_2/V_1=N_2/N_1$
- Drill: step-up—$I_2$ vs $I_1$?

## 5. Misconception repair

Thinking transformer creates power.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Mutual Inductance and Transformers**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Mutual Inductance and Transformers**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Mutual Inductance and Transformers**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Mutual Inductance and Transformers**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Mutual Inductance and Transformers**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Mutual Inductance and Transformers**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Mutual Inductance and Transformers**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Mutual Inductance and Transformers**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Mutual Inductance and Transformers**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Mutual Inductance and Transformers**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Electric Field Energy and Energy Density'): r"""## Advanced Study Notes

Focus topic: **Electric Field Energy and Energy Density** (AP Physics C: E&M).

## 1. Mechanism depth

$u=\tfrac12\epsilon_0 E^2$ energy per volume. Total $U=\int u\,dV$.

## 2. Cross-unit synthesis

Capacitor energy derivation; EM energy storage.

## 3. FRQ craft

Find energy in field region; compare two capacitors.

## 4. Formula drills

- $u=\tfrac12\epsilon_0 E^2$; $U=\tfrac12 CV^2$
- Drill: double $E$—$u$ factor?

## 5. Misconception repair

Confusing $U$ with $u$.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Electric Field Energy and Energy Density**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Electric Field Energy and Energy Density**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Electric Field Energy and Energy Density**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Electric Field Energy and Energy Density**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Electric Field Energy and Energy Density**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Electric Field Energy and Energy Density**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Electric Field Energy and Energy Density**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Electric Field Energy and Energy Density**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Electric Field Energy and Energy Density**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Electric Field Energy and Energy Density**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: E&M', 'Gauss’s Law Applications: Plane, Line, and Sphere'): r"""## Advanced Study Notes

Focus topic: **Gauss’s Law Applications: Plane, Line, and Sphere** (AP Physics C: E&M).

## 1. Mechanism depth

Infinite plane: $E=\sigma/(2\epsilon_0)$ each side. Line: $E=\lambda/(2\pi\epsilon_0 r)$. Sphere outside: $kQ/r^2$.

## 2. Cross-unit synthesis

Standard symmetric geometries on exam.

## 3. FRQ craft

Pick surface matching symmetry.

## 4. Formula drills

- Plane: $E=\sigma/(2\epsilon_0)$; line: $E=\lambda/(2\pi\epsilon_0 r)$
- Drill: double $\sigma$—$E$?

## 5. Misconception repair

Forgotten factor 2 for plane both sides.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Gauss’s Law Applications: Plane, Line, and Sphere**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Gauss’s Law Applications: Plane, Line, and Sphere**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Gauss’s Law Applications: Plane, Line, and Sphere**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Gauss’s Law Applications: Plane, Line, and Sphere**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Gauss’s Law Applications: Plane, Line, and Sphere**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: E&M responses chain symbolic reasoning to a one-sentence interpretation. For **Gauss’s Law Applications: Plane, Line, and Sphere**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Gauss’s Law Applications: Plane, Line, and Sphere**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Gauss’s Law Applications: Plane, Line, and Sphere**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Gauss’s Law Applications: Plane, Line, and Sphere**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Gauss’s Law Applications: Plane, Line, and Sphere**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 1', 'Density and Specific Gravity'): r"""## Advanced Study Notes

Focus topic: **Density and Specific Gravity** (AP Physics 1).

## 1. Mechanism depth

$\rho=m/V$; specific gravity $SG=\rho/\rho_{\water}$ (dimensionless). Density determines buoyancy and hydrostatic pressure. For composite objects use average density $\rho_{\avg}=m_{\total}/V_{\total}$ to predict float/sink.

## 2. Cross-unit synthesis

Foundation for buoyancy, pressure $P=\rho gh$, and continuity. Connect to mass and volume from Unit 1 measurement.

## 3. FRQ craft

Compare densities; predict float; find unknown mass from displacement.

## 4. Formula drills

- $\rho=m/V$; $SG=\rho/\rho_{\water}$; float if $\rho_{\obj}<\rho_{\fluid}$
- Drill: block floats with 40% submerged—find $\rho_{\obj}/\rho_{\fluid}$.

## 5. Misconception repair

Confusing density with mass; forgetting SG is unitless ratio.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Density and Specific Gravity**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Density and Specific Gravity**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Density and Specific Gravity**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Density and Specific Gravity**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Density and Specific Gravity**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Density and Specific Gravity**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Density and Specific Gravity**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Density and Specific Gravity**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Density and Specific Gravity**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Density and Specific Gravity**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 1', 'Hydrostatic Pressure and Communicating Vessels'): r"""## Advanced Study Notes

Focus topic: **Hydrostatic Pressure and Communicating Vessels** (AP Physics 1).

## 1. Mechanism depth

Connected static fluids share the same pressure at equal depths: $P_1+\rho g h_1=P_2+\rho g h_2$ at a horizontal level through the fluid. Surface levels adjust until pressures match at the lowest connected point.

## 2. Cross-unit synthesis

Extends $P=P_0+\rho gh$ to multi-reservoir systems; prerequisite for barometers and manometers.

## 3. FRQ craft

Explain equal levels in communicating vessels; multi-liquid column problems.

## 4. Formula drills

- $P=P_0+\rho gh$; same depth → same $P$
- Drill: two arms, different areas—do levels differ?

## 5. Misconception repair

Thinking wider tubes hold higher pressure at same depth; shape affects volume not $P(h)$.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Hydrostatic Pressure and Communicating Vessels**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Hydrostatic Pressure and Communicating Vessels**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Hydrostatic Pressure and Communicating Vessels**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Hydrostatic Pressure and Communicating Vessels**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Hydrostatic Pressure and Communicating Vessels**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Hydrostatic Pressure and Communicating Vessels**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Hydrostatic Pressure and Communicating Vessels**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Hydrostatic Pressure and Communicating Vessels**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Hydrostatic Pressure and Communicating Vessels**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics 1', 'Barometers and Manometers'): r"""## Advanced Study Notes

Focus topic: **Barometers and Manometers** (AP Physics 1).

## 1. Mechanism depth

Barometer: $P_{\atm}=\rho gh$ for mercury column height. Manometer measures $\Delta P$ via height difference: $\Delta P=\rho g\Delta h$. Open vs closed tube configurations.

## 2. Cross-unit synthesis

Direct application of hydrostatic $P=\rho gh$; connects gauge vs absolute pressure.

## 3. FRQ craft

Read manometer with two fluids; compute gauge pressure; explain inverted barometer.

## 4. Formula drills

- $P=\rho gh$; $\Delta P=\rho g\Delta h$
- Drill: mercury $h=760\,\mathrm{mm}$—approx $P_{\atm}$.

## 5. Misconception repair

Mixing gauge and absolute; wrong fluid density in $\Delta P$.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Barometers and Manometers**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Barometers and Manometers**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Barometers and Manometers**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Barometers and Manometers**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Barometers and Manometers**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Barometers and Manometers**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Barometers and Manometers**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Barometers and Manometers**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Barometers and Manometers**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Barometers and Manometers**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 1', 'Pascal’s Principle and Hydraulics'): r"""## Advanced Study Notes

Focus topic: **Pascal’s Principle and Hydraulics** (AP Physics 1).

## 1. Mechanism depth

Pressure change applied to enclosed fluid transmits undiminished: $\Delta P$ same everywhere. Hydraulic lift: $F_1/A_1=F_2/A_2$ at same height; work conservation: small piston moves farther ($d_1/d_2=A_2/A_1$).

## 2. Cross-unit synthesis

Links pressure to forces and energy/work. Real systems add friction and compressibility limits.

## 3. FRQ craft

Calculate output force; distance trade-off; explain mechanical advantage.

## 4. Formula drills

- $P=F/A$; $F_1/A_1=F_2/A_2$; $F_1d_1=F_2d_2$
- Drill: $A_2=10A_1$, 100 N on small—output force?

## 5. Misconception repair

Hydraulic multiplication of force does not multiply energy; distance decreases inversely.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Pascal’s Principle and Hydraulics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Pascal’s Principle and Hydraulics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Pascal’s Principle and Hydraulics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Pascal’s Principle and Hydraulics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Pascal’s Principle and Hydraulics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Pascal’s Principle and Hydraulics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Pascal’s Principle and Hydraulics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Pascal’s Principle and Hydraulics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Pascal’s Principle and Hydraulics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Pascal’s Principle and Hydraulics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 1', 'Continuity and Volume Flow Rate'): r"""## Advanced Study Notes

Focus topic: **Continuity and Volume Flow Rate** (AP Physics 1).

## 1. Mechanism depth

Volume flow rate $Q=Av=\Delta V/\Delta t$ (units $\mathrm{m^3/s}$). Continuity for incompressible flow: $A_1v_1=A_2v_2$. Mass flow $\dot m=\rho Q$ if density constant.

## 2. Cross-unit synthesis

Pairs with Bernoulli for pipe problems; links kinematics (speed) to geometry (area).

## 3. FRQ craft

Find speed in narrowed section; graph $v$ vs $A$; real-world hose/nozzle.

## 4. Formula drills

- $Q=Av$; $A_1v_1=A_2v_2$; $\dot m=\rho Av$
- Drill: radius halved—$v$ factor?

## 5. Misconception repair

Confusing volume flow with velocity; using diameter instead of area.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Continuity and Volume Flow Rate**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Continuity and Volume Flow Rate**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Continuity and Volume Flow Rate**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Continuity and Volume Flow Rate**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Continuity and Volume Flow Rate**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Continuity and Volume Flow Rate**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Continuity and Volume Flow Rate**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Continuity and Volume Flow Rate**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Continuity and Volume Flow Rate**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics 1', 'Torricelli’s Law, Efflux, and Jets'): r"""## Advanced Study Notes

Focus topic: **Torricelli’s Law, Efflux, and Jets** (AP Physics 1).

## 1. Mechanism depth

Torricelli: efflux speed from hole at depth $h$ below surface: $v=\sqrt{2gh}$ (from Bernoulli). Horizontal range of jet from tank—projectile motion after exit.

## 2. Cross-unit synthesis

Bernoulli + kinematics projectile. Energy: $\frac{1}{2}\rho v^2=\rho gh$.

## 3. FRQ craft

Derive $v=\sqrt{2gh}$; find range; tank draining qualitative.

## 4. Formula drills

- $v=\sqrt{2gh}$; range $R=v\sqrt{2y/g}$ for hole at height $y$ above ground
- Drill: $h=5\,\mathrm{m}$—$v$?

## 5. Misconception repair

Using $v=gh$ without square root; forgetting hole velocity is horizontal initially.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Torricelli’s Law, Efflux, and Jets**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Torricelli’s Law, Efflux, and Jets**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Torricelli’s Law, Efflux, and Jets**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Torricelli’s Law, Efflux, and Jets**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Torricelli’s Law, Efflux, and Jets**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Torricelli’s Law, Efflux, and Jets**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Torricelli’s Law, Efflux, and Jets**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Torricelli’s Law, Efflux, and Jets**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Torricelli’s Law, Efflux, and Jets**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics 1', 'Venturi Meters, Pitot Tubes, and Siphons'): r"""## Advanced Study Notes

Focus topic: **Venturi Meters, Pitot Tubes, and Siphons** (AP Physics 1).

## 1. Mechanism depth

Venturi: constriction lowers $P$, speed rises—measure $\Delta P$ for flow rate. Pitot tube measures stagnation vs static pressure to get $v$. Siphon: fluid flows over barrier when outlet is lower; pressure can drop below atmospheric in high segment (limit: cavitation).

## 2. Cross-unit synthesis

Bernoulli applications; real flow meters in lab/industry context.

## 3. FRQ craft

Explain Venturi pressure drop; Pitot speed from $\Delta P=\frac{1}{2}\rho v^2$; siphon conditions.

## 4. Formula drills

- $\Delta P=\frac{1}{2}\rho(v_2^2-v_1^2)$; Pitot: $v=\sqrt{2\Delta P/\rho}$
- Drill: $\Delta P=200\,\mathrm{Pa}$, $\rho=1000$—$v$?

## 5. Misconception repair

Applying Bernoulli across viscous regions; siphon 'sucks' misconception.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Venturi Meters, Pitot Tubes, and Siphons**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Venturi Meters, Pitot Tubes, and Siphons**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Venturi Meters, Pitot Tubes, and Siphons**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Venturi Meters, Pitot Tubes, and Siphons**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Venturi Meters, Pitot Tubes, and Siphons**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Venturi Meters, Pitot Tubes, and Siphons**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Venturi Meters, Pitot Tubes, and Siphons**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Venturi Meters, Pitot Tubes, and Siphons**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Venturi Meters, Pitot Tubes, and Siphons**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics 1', 'Viscosity, Poiseuille Flow, and Reynolds Number'): r"""## Advanced Study Notes

Focus topic: **Viscosity, Poiseuille Flow, and Reynolds Number** (AP Physics 1).

## 1. Mechanism depth

Viscosity $\eta$ measures internal friction. Poiseuille: $Q=\frac{\pi R^4\Delta P}{8\eta L}$ for laminar pipe flow. Reynolds number $Re=\rho v L/\eta$—low $Re$ laminar, high turbulent.

## 2. Cross-unit synthesis

Beyond ideal fluids; explains when Bernoulli fails. AP Physics 2 extends thermal/fluid overlap.

## 3. FRQ craft

Compare $Q$ if $R$ doubles; predict laminar vs turbulent; $\Delta P$ across pipe.

## 4. Formula drills

- Poiseuille: $Q\propto R^4\Delta P/(\eta L)$; $Re=\rho v L/\eta$
- Drill: $R\to2R$—$Q$ factor?

## 5. Misconception repair

Bernoulli in viscous pipe without $\Delta P$ loss term; $R$ vs diameter confusion.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Viscosity, Poiseuille Flow, and Reynolds Number**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Viscosity, Poiseuille Flow, and Reynolds Number**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Viscosity, Poiseuille Flow, and Reynolds Number**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Viscosity, Poiseuille Flow, and Reynolds Number**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Viscosity, Poiseuille Flow, and Reynolds Number**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Viscosity, Poiseuille Flow, and Reynolds Number**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Viscosity, Poiseuille Flow, and Reynolds Number**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Viscosity, Poiseuille Flow, and Reynolds Number**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Viscosity, Poiseuille Flow, and Reynolds Number**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics 1', 'Drag Forces and Stokes’ Law'): r"""## Advanced Study Notes

Focus topic: **Drag Forces and Stokes’ Law** (AP Physics 1).

## 1. Mechanism depth

Linear drag $F_d=kv$ at low speed; Stokes' law for spherical laminar flow in viscous fluid: $F_d=6\pi\eta r v$. Terminal velocity when $mg=F_d$ (plus buoyancy if submerged).

## 2. Cross-unit synthesis

Newton's second law with velocity-dependent force; connects to viscosity and Reynolds number.

## 3. FRQ craft

Find terminal speed; graph $v(t)$; explain why larger drops fall faster.

## 4. Formula drills

- Stokes: $F_d=6\pi\eta r v$; terminal: $mg=6\pi\eta r v_t$ (sphere in fluid)
- Drill: double radius—$v_t$ factor?

## 5. Misconception repair

Using Stokes when Reynolds $>1$; ignoring buoyancy on small particles.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Drag Forces and Stokes’ Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Drag Forces and Stokes’ Law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Drag Forces and Stokes’ Law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Drag Forces and Stokes’ Law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Drag Forces and Stokes’ Law**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Drag Forces and Stokes’ Law**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Drag Forces and Stokes’ Law**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Drag Forces and Stokes’ Law**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Drag Forces and Stokes’ Law**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics 1', 'Surface Tension and Capillarity'): r"""## Advanced Study Notes

Focus topic: **Surface Tension and Capillarity** (AP Physics 1).

## 1. Mechanism depth

Surface tension $\gamma$ (N/m) minimizes surface area; excess pressure in bubble $\Delta P=4\gamma/r$ (two surfaces). Capillary rise $h=2\gamma\cos\theta/(\rho g r)$.

## 2. Cross-unit synthesis

Microscopic force balance at fluid interfaces; connects to pressure and adhesion/cohesion.

## 3. FRQ craft

Explain meniscus; compute capillary rise; compare soap bubble vs droplet.

## 4. Formula drills

- $\Delta P=4\gamma/r$ (soap film); $h=2\gamma\cos\theta/(\rho g r)$
- Drill: smaller tube—$h$ increases or decreases?

## 5. Misconception repair

Confusing surface tension with bulk pressure; wrong factor of 2 for single surface.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Surface Tension and Capillarity**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Surface Tension and Capillarity**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Surface Tension and Capillarity**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Surface Tension and Capillarity**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Surface Tension and Capillarity**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Surface Tension and Capillarity**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Surface Tension and Capillarity**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Surface Tension and Capillarity**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Surface Tension and Capillarity**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Surface Tension and Capillarity**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 1', 'Apparent Weight and Tension with Buoyancy'): r"""## Advanced Study Notes

Focus topic: **Apparent Weight and Tension with Buoyancy** (AP Physics 1).

## 1. Mechanism depth

Scale reading equals normal force, not mass. In fluid: $N=mg-F_B$ when fully submerged
and not touching bottom. Spring scale on submerged object: $T=mg-F_B$ if no other vertical
forces. Buoyant force reduces effective weight without changing gravitational mass.
$w_{\text{app}}=w-F_B$. If object rests on bottom, normal force includes buoyant support
plus contact force; do not double-count $F_B$ and normal from fluid separately incorrectly.

## 2. Cross-unit synthesis

Combines Newton's laws, buoyancy, and measurement interpretation from lab skills.

## 3. FRQ craft

Find scale reading for submerged block; compare in air vs water; explain why weight 'loss' equals $F_B$.

## 4. Formula drills

- $w_{\app}=mg-F_B$; $T=mg-F_B$ (suspended); $N+F_B=mg$ on bottom contact
- Drill: 5 kg block, $F_B=20\,\mathrm{N}$: spring scale reading?

## 5. Misconception repair

Confusing mass with weight; thinking buoyancy 'removes mass'; ignoring tension direction.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Apparent Weight and Tension with Buoyancy**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Apparent Weight and Tension with Buoyancy**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Apparent Weight and Tension with Buoyancy**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Apparent Weight and Tension with Buoyancy**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Apparent Weight and Tension with Buoyancy**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Apparent Weight and Tension with Buoyancy**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Apparent Weight and Tension with Buoyancy**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Apparent Weight and Tension with Buoyancy**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.""",
    ('AP Physics 2', 'Traveling Waves and Wave Speed'): r"""## Advanced Study Notes

Focus topic: **Traveling Waves and Wave Speed** (AP Physics 2).

## 1. Mechanism depth

Wave $y(x,t)=A\sin(kx-\omega t)$; speed $v=f\lambda=\omega/k$. Energy propagates; medium particles oscillate.

## 2. Cross-unit synthesis

Standing waves, sound, optics all use $v=f\lambda$.

## 3. FRQ craft

Find $\lambda$, $f$, or $v$ from graph; Doppler prep.

## 4. Formula drills

- $v=f\lambda$; $k=2\pi/\lambda$; $\omega=2\pi f$
- Drill: $f=440\,\Hz$, $\lambda=0.78\,\m$—$v$?

## 5. Misconception repair

Confusing particle speed with wave speed.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Traveling Waves and Wave Speed**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Traveling Waves and Wave Speed**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Traveling Waves and Wave Speed**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Traveling Waves and Wave Speed**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Traveling Waves and Wave Speed**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Traveling Waves and Wave Speed**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Traveling Waves and Wave Speed**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Traveling Waves and Wave Speed**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Traveling Waves and Wave Speed**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Traveling Waves and Wave Speed**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Wave Intensity and Sound Level'): r"""## Advanced Study Notes

Focus topic: **Wave Intensity and Sound Level** (AP Physics 2).

## 1. Mechanism depth

Intensity $I=P/A$ (W/m$^2$); inverse square $I\propto 1/r^2$. Sound level $\beta=10\log(I/I_0)$ dB.

## 2. Cross-unit synthesis

Energy transport with waves; links to power and area.

## 3. FRQ craft

Compare intensities in dB; halving distance effect.

## 4. Formula drills

- $I=P/A$; $\beta=10\log(I/I_0)$; $I\propto 1/r^2$
- Drill: 20 dB increase—$I$ factor?

## 5. Misconception repair

Adding dB like linear; confusing intensity with loudness linearly.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Wave Intensity and Sound Level**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Wave Intensity and Sound Level**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Wave Intensity and Sound Level**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Wave Intensity and Sound Level**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Wave Intensity and Sound Level**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Wave Intensity and Sound Level**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Wave Intensity and Sound Level**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Wave Intensity and Sound Level**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Wave Intensity and Sound Level**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Wave Intensity and Sound Level**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Sound Waves, Beats, and the Doppler Effect'): r"""## Advanced Study Notes

Focus topic: **Sound Waves, Beats, and the Doppler Effect** (AP Physics 2).

## 1. Mechanism depth

Sound: longitudinal $v=\sqrt{B/\rho}$ approx. Beats $f_{\beat}=|f_1-f_2|$. Doppler: $f'=f(v\pm v_o)/(v\mp v_s)$ with sign convention for motion toward/away.

## 2. Cross-unit synthesis

Standing waves in air columns; intensity and decibels.

## 3. FRQ craft

Beat frequency; Doppler shifted pitch.

## 4. Formula drills

- Doppler: $f'=f\frac{v\pm v_o}{v\mp v_s}$; beats: $|f_1-f_2|$
- Drill: source toward observer—$f'$ higher?

## 5. Misconception repair

Wrong Doppler sign; beats as amplitude not frequency.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Sound Waves, Beats, and the Doppler Effect**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Sound Waves, Beats, and the Doppler Effect**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Sound Waves, Beats, and the Doppler Effect**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Sound Waves, Beats, and the Doppler Effect**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Sound Waves, Beats, and the Doppler Effect**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Sound Waves, Beats, and the Doppler Effect**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Sound Waves, Beats, and the Doppler Effect**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Sound Waves, Beats, and the Doppler Effect**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Sound Waves, Beats, and the Doppler Effect**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics 2', 'Superposition and Interference'): r"""## Advanced Study Notes

Focus topic: **Superposition and Interference** (AP Physics 2).

## 1. Mechanism depth

Superposition: displacements add. Constructive when path difference $\Delta r=m\lambda$; destructive $(m+\tfrac12)\lambda$.

## 2. Cross-unit synthesis

Double slit, beats, standing waves.

## 3. FRQ craft

Path difference geometry; phase from path.

## 4. Formula drills

- $\Delta r=m\lambda$ bright; $\Delta r=(m+\tfrac12)\lambda$ dark
- Drill: path diff $2.5\lambda$—type?

## 5. Misconception repair

Forgetting phase change on reflection.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Superposition and Interference**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Superposition and Interference**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Superposition and Interference**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Superposition and Interference**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Superposition and Interference**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Superposition and Interference**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Superposition and Interference**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Superposition and Interference**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Superposition and Interference**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Superposition and Interference**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Superposition and Interference**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.""",
    ('AP Physics 2', 'Standing Waves on Strings and in Pipes'): r"""## Advanced Study Notes

Focus topic: **Standing Waves on Strings and in Pipes** (AP Physics 2).

## 1. Mechanism depth

Standing waves: superposition of oppositely traveling waves; nodes and antinodes. String fixed both ends: $f_n=n v/(2L)$. Pipe open both: $f_n=n v/(2L)$; closed: odd harmonics only.

## 2. Cross-unit synthesis

Links resonance, sound pipes, and interference.

## 3. FRQ craft

Harmonic series FRQ; end correction qualitative.

## 4. Formula drills

- String: $f_n=n v/(2L)$; open pipe: $f_n=n v/(2L)$; closed: $f_n=n v/(4L)$ (odd $n$)
- Drill: double string length—fundamental?

## 5. Misconception repair

Wrong boundary conditions for pipes.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Standing Waves on Strings and in Pipes**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Standing Waves on Strings and in Pipes**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Standing Waves on Strings and in Pipes**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Standing Waves on Strings and in Pipes**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Standing Waves on Strings and in Pipes**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Standing Waves on Strings and in Pipes**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Standing Waves on Strings and in Pipes**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Standing Waves on Strings and in Pipes**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Standing Waves on Strings and in Pipes**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.""",
    ('AP Physics 2', 'Diffraction and Interference of Light'): r"""## Advanced Study Notes

Focus topic: **Diffraction and Interference of Light** (AP Physics 2).

## 1. Mechanism depth

Young: $d\sin\theta=m\lambda$. Single-slit min: $a\sin\theta=p\lambda$. Small angle $\sin\theta\approx y/L$.

## 2. Cross-unit synthesis

Physical optics unit; connects to wavelength measurement.

## 3. FRQ craft

Fringe spacing; change $\lambda$, $d$, $L$.

## 4. Formula drills

- $d\sin\theta=m\lambda$; $a\sin\theta=p\lambda$; $\Delta y\approx L\lambda/d$
- Drill: red vs blue light—fringe spacing?

## 5. Misconception repair

Mixing slit width $a$ and separation $d$.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Diffraction and Interference of Light**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Diffraction and Interference of Light**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Diffraction and Interference of Light**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Diffraction and Interference of Light**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Diffraction and Interference of Light**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Diffraction and Interference of Light**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Diffraction and Interference of Light**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Diffraction and Interference of Light**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Diffraction and Interference of Light**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Diffraction and Interference of Light**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Polarization and Thin-Film Interference'): r"""## Advanced Study Notes

Focus topic: **Polarization and Thin-Film Interference** (AP Physics 2).

## 1. Mechanism depth

Polarization by selective absorption/reflection (Brewster). Thin film: path difference $2nt=m\lambda$ or half-wavelength phase shift on reflection.

## 2. Cross-unit synthesis

Wave nature of light; optical coatings.

## 3. FRQ craft

Explain phase reversal; film thickness for constructive.

## 4. Formula drills

- Thin film: $2nt=(m+\tfrac12)\lambda$ with one inversion
- Brewster: $\tan\theta_B=n_2/n_1$

## 5. Misconception repair

Forgetting $\pi$ phase shift at higher-$n$ interface.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Polarization and Thin-Film Interference**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Polarization and Thin-Film Interference**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Polarization and Thin-Film Interference**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Polarization and Thin-Film Interference**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Polarization and Thin-Film Interference**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Polarization and Thin-Film Interference**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Polarization and Thin-Film Interference**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Polarization and Thin-Film Interference**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Polarization and Thin-Film Interference**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Polarization and Thin-Film Interference**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Special Relativity'): r"""## Advanced Study Notes

Focus topic: **Special Relativity** (AP Physics 2).

## 1. Mechanism depth

Special relativity rests on two postulates: physics laws are identical in inertial frames, and $c$ is the same for all observers. Time dilation $\Delta t=\gamma\Delta t_0$ means a moving clock ticks slower as measured in the lab frame; $\gamma=1/\sqrt{1-v^2/c^2}$ diverges as $v\to c$. Length contraction $L=L_0/\gamma$ applies along the direction of motion. Relativistic energy-momentum $E^2=(pc)^2+(mc^2)^2$ unifies rest energy $mc^2$ with kinetic contributions on AP P2 at qualitative level. Experimental evidence includes muon atmospheric decay rates and particle accelerator energy requirements.

## 2. Cross-unit synthesis

Modern physics capstone; connects to photon momentum $p=E/c$ and nuclear mass-energy; contrasts Galilean relativity at $v\ll c$.

## 3. FRQ craft

Proper vs improper time; muon decay evidence; compare classical vs relativistic predictions; explain why $v$ cannot exceed $c$ given $\gamma$.

## 4. Formula drills

- $\gamma=1/\sqrt{1-v^2/c^2}$; $\Delta t=\gamma\Delta t_0$; $L=L_0/\gamma$; $E=mc^2$ rest energy
- Drill: $v=0.6c$—$\gamma$? Drill: which frame measures proper time?

## 5. Misconception repair

Symmetric twin paradox without acceleration distinction; applying length contraction perpendicular to motion.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Special Relativity**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Special Relativity**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Special Relativity**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Special Relativity**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Special Relativity**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Special Relativity**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Special Relativity**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Special Relativity**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.""",
    ('AP Physics 2', 'Photons and the Photoelectric Effect'): r"""## Advanced Study Notes

Focus topic: **Photons and the Photoelectric Effect** (AP Physics 2).

## 1. Mechanism depth

Photon energy $E=hf=hc/\lambda$. Photoelectric: $K_{\max}=hf-\phi$; threshold $\nu_0=\phi/h$. Intensity affects rate, not $K_{\max}$.

## 2. Cross-unit synthesis

Wave-particle duality; atomic spectra.

## 3. FRQ craft

Graph $K$ vs $f$; find $\phi$ from intercept.

## 4. Formula drills

- $E=hf$; $K_{\max}=hf-\phi$; $\lambda=hc/E$
- Drill: double intensity—$K_{\max}$ change?

## 5. Misconception repair

Classical wave predicts intensity affects $K_{\max}$—false.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Photons and the Photoelectric Effect**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Photons and the Photoelectric Effect**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Photons and the Photoelectric Effect**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Photons and the Photoelectric Effect**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Photons and the Photoelectric Effect**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Photons and the Photoelectric Effect**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Photons and the Photoelectric Effect**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Photons and the Photoelectric Effect**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Photons and the Photoelectric Effect**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Photons and the Photoelectric Effect**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Matter Waves and Quantum Behavior'): r"""## Advanced Study Notes

Focus topic: **Matter Waves and Quantum Behavior** (AP Physics 2).

## 1. Mechanism depth

de Broglie $\lambda=h/p=h/(mv)$. Double-slit with electrons shows interference; probability interpretation.

## 2. Cross-unit synthesis

Connects momentum from mechanics to optics interference.

## 3. FRQ craft

Find $\lambda$ for electron; explain quantization qualitatively.

## 4. Formula drills

- $\lambda=h/p$; $p=mv$ nonrelativistic
- Drill: faster electron—$\lambda$?

## 5. Misconception repair

Using classical orbits instead of probability clouds.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Matter Waves and Quantum Behavior**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Matter Waves and Quantum Behavior**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Matter Waves and Quantum Behavior**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Matter Waves and Quantum Behavior**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Matter Waves and Quantum Behavior**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Matter Waves and Quantum Behavior**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Matter Waves and Quantum Behavior**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Matter Waves and Quantum Behavior**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Matter Waves and Quantum Behavior**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Matter Waves and Quantum Behavior**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Atomic Energy Levels and Spectra'): r"""## Advanced Study Notes

Focus topic: **Atomic Energy Levels and Spectra** (AP Physics 2).

## 1. Mechanism depth

Bohr model: $E_n=-13.6\,\mathrm{eV}/n^2$ (hydrogen). Transitions: $\Delta E=hf=hc/\lambda$.

## 2. Cross-unit synthesis

Photoelectric and nuclear binding.

## 3. FRQ craft

Identify series; ionization energy; emission vs absorption.

## 4. Formula drills

- $E_n=-13.6/n^2\,\mathrm{eV}$; $|\Delta E|=hf$
- Drill: $n=3\to2$ transition energy?

## 5. Misconception repair

Using $E_n$ as photon energy not difference.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Atomic Energy Levels and Spectra**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Atomic Energy Levels and Spectra**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Atomic Energy Levels and Spectra**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Atomic Energy Levels and Spectra**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Atomic Energy Levels and Spectra**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Atomic Energy Levels and Spectra**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Atomic Energy Levels and Spectra**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Atomic Energy Levels and Spectra**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Atomic Energy Levels and Spectra**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Atomic Energy Levels and Spectra**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Nuclear Structure and Binding Energy'): r"""## Advanced Study Notes

Focus topic: **Nuclear Structure and Binding Energy** (AP Physics 2).

## 1. Mechanism depth

Binding energy $E_b=(Zm_p+Nm_n-M_{\nucleus})c^2$. Mass defect explains stability; peak near Fe.

## 2. Cross-unit synthesis

E=mc$^2$ from modern physics; fission/fusion energy release.

## 3. FRQ craft

Compute mass defect; explain why fusion releases energy for light nuclei.

## 4. Formula drills

- $E=\Delta mc^2$; $E_b$ per nucleon curve
- Drill: lighter products—$Q$ sign for fusion?

## 5. Misconception repair

Confusing binding energy with released energy sign.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Nuclear Structure and Binding Energy**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Nuclear Structure and Binding Energy**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Nuclear Structure and Binding Energy**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Nuclear Structure and Binding Energy**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Nuclear Structure and Binding Energy**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Nuclear Structure and Binding Energy**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Nuclear Structure and Binding Energy**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Nuclear Structure and Binding Energy**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Nuclear Structure and Binding Energy**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Nuclear Structure and Binding Energy**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Radioactive Decay and Nuclear Transformations'): r"""## Advanced Study Notes

Focus topic: **Radioactive Decay and Nuclear Transformations** (AP Physics 2).

## 1. Mechanism depth

Exponential decay $N=N_0 e^{-\lambda t}$; half-life $t_{1/2}=\ln2/\lambda$. Activity $A=\lambda N$. Alpha, beta, gamma rules.

## 2. Cross-unit synthesis

Statistics of decay; conservation of charge and nucleon number.

## 3. FRQ craft

Half-life graph; multi-step decay qualitative.

## 4. Formula drills

- $N=N_0 e^{-\lambda t}$; $t_{1/2}=\ln2/\lambda$; $A=\lambda N$
- Drill: two half-lives—fraction remaining?

## 5. Misconception repair

Linear not exponential decay graph.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Radioactive Decay and Nuclear Transformations**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Radioactive Decay and Nuclear Transformations**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Radioactive Decay and Nuclear Transformations**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Radioactive Decay and Nuclear Transformations**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Radioactive Decay and Nuclear Transformations**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Radioactive Decay and Nuclear Transformations**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Radioactive Decay and Nuclear Transformations**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Radioactive Decay and Nuclear Transformations**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Radioactive Decay and Nuclear Transformations**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Radioactive Decay and Nuclear Transformations**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Fission and Fusion'): r"""## Advanced Study Notes

Focus topic: **Fission and Fusion** (AP Physics 2).

## 1. Mechanism depth

Fission: heavy nucleus splits; fusion: light nuclei merge. Energy from mass defect $\Delta E=\Delta mc^2$. Chain reactions need critical mass.

## 2. Cross-unit synthesis

Binding energy curve; nuclear power context.

## 3. FRQ craft

Explain energy release from $E_b$ per nucleon increase.

## 4. Formula drills

- $Q=\Delta mc^2$; compare $E_b/A$ before/after
- Drill: why fusion needs high $T$?

## 5. Misconception repair

Thinking fission creates mass.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Fission and Fusion**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Fission and Fusion**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Fission and Fusion**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Fission and Fusion**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Fission and Fusion**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Fission and Fusion**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Fission and Fusion**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Fission and Fusion**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Fission and Fusion**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Fission and Fusion**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Oscillations'): r"""## Advanced Study Notes

Focus topic: **Oscillations** (AP Physics C: Mechanics).

## 1. Mechanism depth

Oscillatory motion repeats in time; simple harmonic motion (SHM) is the prototype with restoring force linear in displacement: $F=-kx$ giving $a=-\omega^2 x$. Energy sloshes between kinetic $K=\tfrac12 mv^2$ and potential $U=\tfrac12 kx^2$ with total $E=\tfrac12 kA^2$ constant for ideal SHM. Damped oscillations lose amplitude due to non-conservative forces; driven oscillations reach steady amplitude at resonance when driving frequency matches natural frequency. On AP Physics C, calculus links $x(t)$, $v(t)$, and $a(t)$ through derivatives.

## 2. Cross-unit synthesis

Energy exchange kinetic-potential in oscillators; parallels LC circuits in E&M; projection of uniform circular motion.

## 3. FRQ craft

Compare SHM to circular motion at constant $\omega$; graph $x$, $v$, $a$ phase relationships; explain resonance qualitatively.

## 4. Formula drills

- $a=-\omega^2 x$; $T=2\pi/\omega$; $E=\tfrac12 kA^2$; $x=A\cos(\omega t+\phi)$
- Drill: where is $K$ max in SHM? Drill: at equilibrium what are $U$ and $a$?

## 5. Misconception repair

Damped amplitude vs frequency confusion; using amplitude where displacement is needed; ignoring phase constant role.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Oscillations**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Oscillations**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Oscillations**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Oscillations**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Oscillations**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Oscillations**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Oscillations**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Oscillations**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.""",
    ('AP Physics C: Mechanics', 'Linear Momentum'): r"""## Advanced Study Notes

Focus topic: **Linear Momentum** (AP Physics C: Mechanics).

## 1. Mechanism depth

$\vec p=m\vec v$. Impulse $\vec J=\int\vec F\,dt=\Delta\vec p$. Center of mass motion.

## 2. Cross-unit synthesis

Collisions; rocket motion qualitative.

## 3. FRQ craft

Impulse from $F(t)$ graph area.

## 4. Formula drills

- $\vec p=m\vec v$; $\vec J=\Delta\vec p$; $\vec F_{\avg}=\Delta p/\Delta t$
- Drill: force-time graph area meaning?

## 5. Misconception repair

Confusing momentum with kinetic energy.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Linear Momentum**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Linear Momentum**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Linear Momentum**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Linear Momentum**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Linear Momentum**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Linear Momentum**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Linear Momentum**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Linear Momentum**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Linear Momentum**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Linear Momentum**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Linear Momentum**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.""",
    ('AP Physics C: Mechanics', 'Work, Energy, and Power'): r"""## Advanced Study Notes

Focus topic: **Work, Energy, and Power** (AP Physics C: Mechanics).

## 1. Mechanism depth

Work $W=\int\vec F\cdot d\vec r$. Kinetic $K=\tfrac12 mv^2$. Power $P=dW/dt=\vec F\cdot\vec v$.

## 2. Cross-unit synthesis

Conservative forces and potential; rotational analogs.

## 3. FRQ craft

Variable force work from graph area; power at instant.

## 4. Formula drills

- $W=\int F\,dx$; $K=\tfrac12 mv^2$; $P=Fv\cos\theta$
- Drill: linear $F(x)$—work from graph?

## 5. Misconception repair

Power as constant when $F$ varies with $v$.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Work, Energy, and Power**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Work, Energy, and Power**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Work, Energy, and Power**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Work, Energy, and Power**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Work, Energy, and Power**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Work, Energy, and Power**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Work, Energy, and Power**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Work, Energy, and Power**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Work, Energy, and Power**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Work, Energy, and Power**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Force and Translational Dynamics'): r"""## Advanced Study Notes

Focus topic: **Force and Translational Dynamics** (AP Physics C: Mechanics).

## 1. Mechanism depth

$\vec F_{\net}=m\vec a$. Free-body diagrams; component equations. $F=ma$ differential form for variable mass contexts (rocket qualitative).

## 2. Cross-unit synthesis

Newton's laws through entire course.

## 3. FRQ craft

Multi-object systems; inclined planes with calculus.

## 4. Formula drills

- $\sum F_x=ma_x$; $\sum F_y=ma_y$
- Drill: draw FBD for three-body Atwood.

## 5. Misconception repair

Action-reaction on same body; missing tension direction.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Force and Translational Dynamics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Force and Translational Dynamics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Force and Translational Dynamics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Force and Translational Dynamics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Force and Translational Dynamics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Force and Translational Dynamics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Force and Translational Dynamics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Force and Translational Dynamics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Force and Translational Dynamics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Force and Translational Dynamics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Unit 15: Modern Physics'): r"""## Advanced Study Notes

Focus topic: **Unit 15: Modern Physics** (AP Physics 2).

## 1. Mechanism depth

Synthesis of photons, atoms, nuclei, relativity—quantum and nuclear phenomena on AP P2.

## 2. Cross-unit synthesis

Entire modern unit cross-links.

## 3. FRQ craft

Multi-part modern FRQ spanning photoelectric and decay.

## 4. Formula drills

- Review $E=hf$, $E_n$, $\Delta mc^2$, $\lambda=h/p$
- Drill: one page concept map.

## 5. Misconception repair

Isolated memorization without mechanisms.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Unit 15: Modern Physics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Unit 15: Modern Physics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Unit 15: Modern Physics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Unit 15: Modern Physics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Unit 15: Modern Physics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Unit 15: Modern Physics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Unit 15: Modern Physics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Unit 15: Modern Physics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Unit 15: Modern Physics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Unit 15: Modern Physics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics 2', 'Waves, Sound, and Physical Optics'): r"""## Advanced Study Notes

Focus topic: **Waves, Sound, and Physical Optics** (AP Physics 2).

## 1. Mechanism depth

Umbrella synthesis: wave equation, interference, diffraction, polarization, sound phenomena.

## 2. Cross-unit synthesis

Full AP Physics 2 wave unit integration.

## 3. FRQ craft

Multi-topic FRQ combining path difference and intensity.

## 4. Formula drills

- Review $v=f\lambda$, superposition, $d\sin\theta=m\lambda$
- Drill: outline three wave skills in one scenario.

## 5. Misconception repair

Treating subtopics as unrelated.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Waves, Sound, and Physical Optics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Waves, Sound, and Physical Optics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Waves, Sound, and Physical Optics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Waves, Sound, and Physical Optics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Waves, Sound, and Physical Optics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 2 responses chain symbolic reasoning to a one-sentence interpretation. For **Waves, Sound, and Physical Optics**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Waves, Sound, and Physical Optics**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Waves, Sound, and Physical Optics**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Waves, Sound, and Physical Optics**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Waves, Sound, and Physical Optics**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
    ('AP Physics C: Mechanics', 'Parallel-Axis Theorem'): r"""## Advanced Study Notes

Focus topic: **Parallel-Axis Theorem** (AP Physics C: Mechanics).

## 1. Mechanism depth

The parallel-axis theorem relocates the rotation axis: $I=I_{\cm}+Md^2$, where $I_{\cm}$ is moment of inertia about the center of mass and $d$ is the distance between the CM axis and the new parallel axis. It follows from integrating $r^2\,dm$ with the shift $r=r'+d$. Essential for pivots at ends of rods ($I=\tfrac13 ML^2$ from $\tfrac1{12}ML^2+ M(L/2)^2$) and for composite bodies treated as point masses plus extended parts.

## 2. Cross-unit synthesis

Composite objects; quick $I$ for off-center pivots; pairs with torque $\tau=I\alpha$ and rolling $K=\tfrac12 I\omega^2+\tfrac12 mv^2$.

## 3. FRQ craft

Apply after finding $I_{\cm}$; compare two pivot choices on same object; rolling race with different $I$.

## 4. Formula drills

- $I=I_{\cm}+Md^2$; rod end: $I=\tfrac13 ML^2$; disk edge: $I=\tfrac32 MR^2$
- Drill: rod end pivot—$I$ from CM value? Drill: double distance—$I$ change?

## 5. Misconception repair

Adding $Md^2$ twice or wrong $d$; using diameter instead of radius for $d$; applying to non-parallel axes.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Parallel-Axis Theorem**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Parallel-Axis Theorem**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Parallel-Axis Theorem**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Parallel-Axis Theorem**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Parallel-Axis Theorem**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics C: Mechanics responses chain symbolic reasoning to a one-sentence interpretation. For **Parallel-Axis Theorem**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Parallel-Axis Theorem**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Parallel-Axis Theorem**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.""",
    ('AP Physics 1', 'Volume Flow Rate and Continuity'): r"""## Advanced Study Notes

Focus topic: **Volume Flow Rate and Continuity** (AP Physics 1).

## 1. Mechanism depth

Same as continuity topic: $Q=Av$, conservation of volume for incompressible fluids. Streamlines closer together indicate higher speed in a constriction.

## 2. Cross-unit synthesis

Bernoulli, Torricelli, Poiseuille (P2 extension). Measurement devices: Venturi, flow meters.

## 3. FRQ craft

Multi-step pipe; justify $Q$ constant; units check.

## 4. Formula drills

- $Q=Av$; $A=\pi r^2$
- Drill: $Q=2.0\times10^{-4}\,\mathrm{m^3/s}$, $r=1.0\,\mathrm{cm}$—find $v$.

## 5. Misconception repair

Duplicate topic with Continuity—keep definitions consistent.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Volume Flow Rate and Continuity**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Volume Flow Rate and Continuity**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Volume Flow Rate and Continuity**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Volume Flow Rate and Continuity**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Volume Flow Rate and Continuity**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.

High-scoring AP Physics 1 responses chain symbolic reasoning to a one-sentence interpretation. For **Volume Flow Rate and Continuity**, rehearse explaining the mechanism aloud without notes, then write the same argument with equations embedded in sentences rather than isolated strings. Redraw the governing diagram from memory and label every symbol on the equation sheet before substituting numbers.

Spaced review for **Volume Flow Rate and Continuity**: day 1 reconstruct all five sections; day 3 combine with an adjacent unit in one FRQ-style paragraph; day 7 teach the idea to a peer and compare to notes. Teaching exposes hidden gaps that silent rereading misses, especially sign conventions and unit checks.

Exam hardening for **Volume Flow Rate and Continuity**: convert one MCQ into a four-sentence justification; annotate every symbol; end with a limiting case that clarifies when the model fails. Boundary clarity separates upper-band AP physics from formula shopping under time pressure.

Keep a two-column error log for **Volume Flow Rate and Continuity**—wrong move vs corrected AP sentence—and revisit before timed sets. Pair each miss with a neighboring CED topic so transfer questions feel familiar.

Closing self-audit for **Volume Flow Rate and Continuity**: explain core mechanism in four sentences without notes; name two cross-unit links; write one FRQ setup; list three formulas; correct one personal misconception. Revisit after timed practice so feedback compounds rather than resets each week.""",
}
