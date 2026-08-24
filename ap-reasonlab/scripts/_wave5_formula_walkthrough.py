"""
Wave 5 formula walkthrough blocks for STEM/HSS subjects with calculable relationships.
Maps (subject, title) -> markdown starting with ## Formula Walkthrough.
Titles match data/managed-content.json exactly.
"""

WAVE5_FORMULA_WALK = {
    ('AP Physics 1', '## 4. Floating, Sinking, and Newton’s Second Law'): r"""## Formula Walkthrough


When reviewing **## 4. Floating, Sinking, and Newton's Second Law**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Floating and sinking problems require simultaneous use of Archimedes' principle and $\sum F=ma$.

## 1. Governing relationships (LaTeX)

**Buoyancy.** Archimedes: buoyant force equals weight of displaced fluid.

$$F_B=\rho_{\mathrm{fluid}}V_{\mathrm{disp}}g$$

**Newton II.** Vertical force balance for submerged or floating objects.

$$\sum F_y=ma_y,\qquad T+F_B-mg=ma$$

**Floating equilibrium.** Floating body displaces fluid mass equal to its own mass.

$$F_B=mg,\qquad \frac{\rho_{\mathrm{obj}}}{\rho_{\mathrm{fl}}}=\frac{V_{\mathrm{disp}}}{V_{\mathrm{obj}}}$$

## 2. When to use each form

Select the form that isolates the unknown in **## 4. Floating, Sinking, and Newton's Second Law** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving ## 4. Floating, Sinking, and Newton's Second Law:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Apparent Weight and Tension with Buoyancy'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Apparent Weight and Tension with Buoyancy**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Apparent Weight and Tension with Buoyancy** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Apparent weight reduced by buoyant force in static equilibrium.

$$F_B=\rho_{\mathrm{fluid}}V_{\mathrm{disp}}g,\qquad T+ F_B=mg$$

## 2. When to use each form

Select the form that isolates the unknown in **Apparent Weight and Tension with Buoyancy** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Apparent Weight and Tension with Buoyancy:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Barometers and Manometers'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Barometers and Manometers**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Barometers and Manometers** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Column height measures gauge or atmospheric pressure difference.

$$P_{\mathrm{abs}}=P_0+\rho g h_{\mathrm{mano}},\qquad P_{\mathrm{atm}}\approx\rho_{\mathrm{Hg}} g h$$

## 2. When to use each form

Select the form that isolates the unknown in **Barometers and Manometers** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Barometers and Manometers:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Bernoulli’s Equation'): r"""## Formula Walkthrough


When reviewing **Bernoulli’s Equation**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Bernoulli's equation relates pressure, speed, and height along a streamline for steady, incompressible, inviscid flow. AP Physics 1 uses it for pipes, tanks, and venturi-style reasoning.

## 1. Governing relationships (LaTeX)

**Bernoulli (streamline).** Sum of static pressure, gravitational energy density, and kinetic energy density is constant along one streamline if the assumptions hold.

$$P+\rho g y+\tfrac12\rho v^2=\text{constant}$$

**Continuity.** Incompressible flow: volume flow rate $Q=Av$ is constant in a single pipe.

$$A_1 v_1=A_2 v_2$$

**Static head.** Hydrostatic contribution when speed is negligible (large reservoir surface).

$$P=P_0+\rho g h$$

## 2. When to use each form

Select the form that isolates the unknown in **Bernoulli’s Equation** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Full Bernoulli:** Two points on the same streamline with different y and v.
- **Torricelli limit:** Open tank with small hole: take $P_1\approx P_0$, $v_1\approx0$, $y_2=0$ datum.
- **Continuity alone:** When only areas and speeds are linked, before energy equation.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Bernoulli’s Equation:

1. Draw the pipe/tank; mark two points on one streamline; set a height datum.
2. List P, y, v at each point; note where speed is ~0 or pressure is atmospheric.
3. Apply continuity if v is unknown at one section.
4. Write Bernoulli between the two points; solve for the unknown.
5. Check: faster flow $\Rightarrow$ lower static pressure (venturi effect).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

All terms in Bernoulli are energy per volume (J/m³ = Pa). Use kg/m³, m/s, m, Pa. $\rho g h$ has units (kg/m³)(m/s²)(m)=N/m³=Pa.

If $\Delta y\approx0$ and speeds equal, pressure is equal. If $v\to0$ everywhere, Bernoulli reduces to hydrostatics. Viscous losses invalidate strict constancy—AP often states ideal flow.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Applying Bernoulli between different streamlines in the same cross-section.
- Forgetting atmospheric pressure at an open surface ($P\approx P_0$).
- Using different $\rho$ for two points in the same liquid.
- Sign error on height (measure y relative to a fixed datum consistently).
""",
    ('AP Physics 1', 'Continuity and Volume Flow Rate'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Continuity and Volume Flow Rate**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Continuity and Volume Flow Rate** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Volume flow rate for incompressible fluid in a single conduit.

$$Q=A v=\mathrm{constant},\qquad Q=\frac{\Delta V}{\Delta t}$$

## 2. When to use each form

Select the form that isolates the unknown in **Continuity and Volume Flow Rate** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Continuity and Volume Flow Rate:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Density and Specific Gravity'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Density and Specific Gravity**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Density and Specific Gravity** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Density from mass and volume; specific gravity is dimensionless ratio to water.

$$\rho=\frac{m}{V},\qquad \mathrm{SG}=\frac{\rho}{\rho_{\mathrm{water}}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Density and Specific Gravity** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Density and Specific Gravity:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Drag Forces and Stokes’ Law'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Drag Forces and Stokes' Law**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Drag Forces and Stokes' Law** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Low-Re sphere drag (Stokes) vs quadratic drag at higher speeds.

$$F_d=6\pi\eta r v\ \text{(Stokes)},\qquad F_d\propto v^2\ \text{(high Re)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Drag Forces and Stokes' Law** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Drag Forces and Stokes' Law:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Hydrostatic Pressure and Communicating Vessels'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Hydrostatic Pressure and Communicating Vessels**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Hydrostatic Pressure and Communicating Vessels** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Same horizontal level in connected static fluid has equal pressure.

$$P=P_0+\rho g h,\qquad P_{\mathrm{same level}}=\text{constant}$$

## 2. When to use each form

Select the form that isolates the unknown in **Hydrostatic Pressure and Communicating Vessels** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Hydrostatic Pressure and Communicating Vessels:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Pascal’s Principle and Hydraulics'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Pascal's Principle and Hydraulics**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Pascal's Principle and Hydraulics** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Pressure transmitted undiminished in confined fluid; force scales with area.

$$\frac{F_1}{A_1}=\frac{F_2}{A_2},\qquad P_1=P_2$$

## 2. When to use each form

Select the form that isolates the unknown in **Pascal's Principle and Hydraulics** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Pascal's Principle and Hydraulics:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Pressure'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Pressure**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Pressure** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Pressure is force per area; in fluids at rest, absolute pressure increases with depth.

$$P=\frac{F_\perp}{A},\qquad P=P_0+\rho g h$$

## 2. When to use each form

Select the form that isolates the unknown in **Pressure** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Pressure:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Surface Tension and Capillarity'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Surface Tension and Capillarity**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Surface Tension and Capillarity** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Capillary rise and contact angle relate surface tension to height.

$$F=2\pi r\gamma\cos\theta,\qquad h=\frac{2\gamma\cos\theta}{\rho g r}$$

## 2. When to use each form

Select the form that isolates the unknown in **Surface Tension and Capillarity** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Surface Tension and Capillarity:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Torricelli’s Law, Efflux, and Jets'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Torricelli's Law, Efflux, and Jets**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Torricelli's Law, Efflux, and Jets** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Efflux speed from Bernoulli/Torricelli with negligible tank surface speed.

$$v=\sqrt{2g h},\qquad Q=A_{\mathrm{hole}}v$$

## 2. When to use each form

Select the form that isolates the unknown in **Torricelli's Law, Efflux, and Jets** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Torricelli's Law, Efflux, and Jets:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Venturi Meters, Pitot Tubes, and Siphons'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Venturi Meters, Pitot Tubes, and Siphons**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Venturi Meters, Pitot Tubes, and Siphons** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Speed from pressure drop (Venturi/Pitot); siphon requires filled continuous tube.

$$P_1+\tfrac12\rho v_1^2=P_2+\tfrac12\rho v_2^2,\qquad v=\sqrt{2g h}$$

## 2. When to use each form

Select the form that isolates the unknown in **Venturi Meters, Pitot Tubes, and Siphons** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Venturi Meters, Pitot Tubes, and Siphons:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Viscosity, Poiseuille Flow, and Reynolds Number'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Viscosity, Poiseuille Flow, and Reynolds Number**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Viscosity, Poiseuille Flow, and Reynolds Number** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Laminar pipe flow rate and dimensionless Reynolds number for flow regime.

$$Q=\frac{\pi r^4\Delta P}{8\eta L},\qquad \mathrm{Re}=\frac{\rho v D}{\eta}$$

## 2. When to use each form

Select the form that isolates the unknown in **Viscosity, Poiseuille Flow, and Reynolds Number** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Viscosity, Poiseuille Flow, and Reynolds Number:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 1', 'Volume Flow Rate and Continuity'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Volume Flow Rate and Continuity**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
Calculations for **Volume Flow Rate and Continuity** combine fluid definitions with Newton's laws when forces or scales are required.

## 1. Governing relationships (LaTeX)

**Primary.** Same as continuity—emphasis on computing Q from area and speed.

$$Q=A_1v_1=A_2v_2$$

## 2. When to use each form

Select the form that isolates the unknown in **Volume Flow Rate and Continuity** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Force balance:** Use when acceleration is zero or known; draw a free-body diagram first.
- **Energy / Bernoulli:** Use for flowing fluids with stated streamline and height datum.
- **Kinematic link:** Use $v^2=v_0^2+2a\Delta x$ when time is not given.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Volume Flow Rate and Continuity:

1. Sketch the scenario; label forces, depths, areas, and flow directions.
2. Choose the governing relation (Newton, pressure, continuity, Bernoulli, buoyancy).
3. Convert all quantities to SI (Pa, m, m/s, kg/m³) before substitution.
4. Solve symbolically for the unknown, then insert numbers once.
5. Check units and a limiting case (e.g., $h\to0$, $A_2\to A_1$).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Pressure in pascals (N/m²), depth in meters, density in kg/m³, speed in m/s. If given cm² or kPa, convert before substituting. A unit breakdown should reproduce the expected unit of the answer (N for force, Pa for pressure, m³/s for volume flow).

In static fluids, $v\approx0$ simplifies Bernoulli to $P=P_0+\rho gh$. Atmospheric gauge pressure goes to zero at the surface open to air. For floating objects at rest, net vertical force is zero: $F_B=mg$.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using gauge and absolute pressure interchangeably without adding $P_0$.
- Applying Bernoulli across different streamlines or viscous turbulent flow without justification.
- Confusing density with specific gravity (SG is dimensionless: $\rho/\rho_{\mathrm{water}}$).
- Dropping g when switching between mass and weight.
""",
    ('AP Physics 2', 'Atomic Energy Levels and Spectra'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Atomic Energy Levels and Spectra**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Atomic Energy Levels and Spectra** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Transition photon energy and hydrogen-like levels.

$$|\Delta E|=hf=\frac{hc}{\lambda},\qquad E_n=-\frac{13.6\,\mathrm{eV}}{n^2}$$

## 2. When to use each form

Select the form that isolates the unknown in **Atomic Energy Levels and Spectra** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Atomic Energy Levels and Spectra:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Data Collections'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Data Collections**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Data Collections** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Wave speed.** Relates frequency, wavelength, intensity, and decibel level for waves and sound.

$$v=f\lambda,\qquad I\propto A^2,\qquad \beta=10\log_{10}\!\left(\frac{I}{I_0}\right)$$

**Quantum / nuclear.** Photon energy, de Broglie wavelength, and exponential decay appear in modern topics.

$$E=hf=\frac{hc}{\lambda},\qquad \lambda=\frac{h}{p},\qquad N=N_0 e^{-\lambda t}$$

## 2. When to use each form

Select the form that isolates the unknown in **Data Collections** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Data Collections:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Diffraction and Interference of Light'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Diffraction and Interference of Light**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Diffraction and Interference of Light** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Double-slit maxima and single-slit minima conditions.

$$d\sin\theta=m\lambda,\qquad \text{minima: }a\sin\theta=m\lambda$$

## 2. When to use each form

Select the form that isolates the unknown in **Diffraction and Interference of Light** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Diffraction and Interference of Light:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Fission and Fusion'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Fission and Fusion**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Fission and Fusion** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Energy from mass difference in nuclear reactions.

$$E_{\mathrm{released}}=(\Delta m)c^2$$

## 2. When to use each form

Select the form that isolates the unknown in **Fission and Fusion** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Fission and Fusion:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Matter Waves and Quantum Behavior'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Matter Waves and Quantum Behavior**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Matter Waves and Quantum Behavior** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** de Broglie wavelength for nonrelativistic particles.

$$\lambda=\frac{h}{p}=\frac{h}{mv}$$

## 2. When to use each form

Select the form that isolates the unknown in **Matter Waves and Quantum Behavior** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Matter Waves and Quantum Behavior:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Nuclear Structure and Binding Energy'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Nuclear Structure and Binding Energy**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Nuclear Structure and Binding Energy** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Mass defect and binding energy per nucleon trend.

$$\Delta E=(\Delta m)c^2,\qquad \text{BE per nucleon}=\frac{\text{BE}}{A}$$

## 2. When to use each form

Select the form that isolates the unknown in **Nuclear Structure and Binding Energy** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Nuclear Structure and Binding Energy:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Photons and the Photoelectric Effect'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Photons and the Photoelectric Effect**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Photons and the Photoelectric Effect** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Photoelectric equation and photon wavelength.

$$K_{\max}=hf-\phi,\qquad \lambda=\frac{hc}{E}$$

## 2. When to use each form

Select the form that isolates the unknown in **Photons and the Photoelectric Effect** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Photons and the Photoelectric Effect:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Polarization and Thin-Film Interference'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Polarization and Thin-Film Interference**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Polarization and Thin-Film Interference** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Optical path difference in thin films.

$$2nt=m\lambda\ \text{(constructive, phase reversal depends on indices)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Polarization and Thin-Film Interference** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Polarization and Thin-Film Interference:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Radioactive Decay and Nuclear Transformations'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Radioactive Decay and Nuclear Transformations**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Radioactive Decay and Nuclear Transformations** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Exponential decay and half-life link.

$$N=N_0 e^{-\lambda t},\qquad T_{1/2}=\frac{\ln 2}{\lambda}$$

## 2. When to use each form

Select the form that isolates the unknown in **Radioactive Decay and Nuclear Transformations** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Radioactive Decay and Nuclear Transformations:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Sound Waves, Beats, and the Doppler Effect'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Sound Waves, Beats, and the Doppler Effect**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Sound Waves, Beats, and the Doppler Effect** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Doppler shifted frequency and beat frequency.

$$f_{\mathrm{obs}}=f_s\left(\frac{v\pm v_o}{v\mp v_s}\right),\qquad f_{\mathrm{beat}}=|f_1-f_2|$$

## 2. When to use each form

Select the form that isolates the unknown in **Sound Waves, Beats, and the Doppler Effect** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Sound Waves, Beats, and the Doppler Effect:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Special Relativity'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Special Relativity**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Special Relativity** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Lorentz factor and energy-momentum invariant.

$$\gamma=\frac1{\sqrt{1-v^2/c^2}},\qquad E^2=(pc)^2+(mc^2)^2$$

## 2. When to use each form

Select the form that isolates the unknown in **Special Relativity** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Special Relativity:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Standing Waves on Strings and in Pipes'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Standing Waves on Strings and in Pipes**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Standing Waves on Strings and in Pipes** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Harmonic frequencies for strings and air columns.

$$f_n=n\frac{v}{2L}\ \text{(fixed both ends)},\qquad f_n=n\frac{v}{4L}\ \text{(pipe one open end)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Standing Waves on Strings and in Pipes** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Standing Waves on Strings and in Pipes:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Superposition and Interference'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Superposition and Interference**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Superposition and Interference** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Path difference phase and interference condition.

$$\Delta\phi=\frac{2\pi\Delta x}{\lambda},\qquad \text{constructive if }\Delta\phi=2\pi m$$

## 2. When to use each form

Select the form that isolates the unknown in **Superposition and Interference** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Superposition and Interference:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Thermodynamics'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Thermodynamics**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Thermodynamics** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** First law, thermal efficiency, and ideal gas relation for heat engines.

$$\Delta U=Q-W,\qquad e=\frac{W_{\mathrm{out}}}{Q_{\mathrm{in}}},\qquad PV=nRT$$

## 2. When to use each form

Select the form that isolates the unknown in **Thermodynamics** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Thermodynamics:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Traveling Waves and Wave Speed'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Traveling Waves and Wave Speed**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Traveling Waves and Wave Speed** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Universal wave relation and string speed from tension and linear density.

$$v=f\lambda,\qquad v_{\mathrm{string}}=\sqrt{\frac{T}{\mu}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Traveling Waves and Wave Speed** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Traveling Waves and Wave Speed:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Unit 15: Modern Physics'): r"""## Formula Walkthrough


When reviewing **Unit 15: Modern Physics**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 15: Modern Physics** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Wave speed.** Relates frequency, wavelength, intensity, and decibel level for waves and sound.

$$v=f\lambda,\qquad I\propto A^2,\qquad \beta=10\log_{10}\!\left(\frac{I}{I_0}\right)$$

**Quantum / nuclear.** Photon energy, de Broglie wavelength, and exponential decay appear in modern topics.

$$E=hf=\frac{hc}{\lambda},\qquad \lambda=\frac{h}{p},\qquad N=N_0 e^{-\lambda t}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 15: Modern Physics** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 15: Modern Physics:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Wave Intensity and Sound Level'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Wave Intensity and Sound Level**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Wave Intensity and Sound Level** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Intensity, decibels, and inverse-square for isotropic sources.

$$I=\frac{P}{A},\qquad \beta=10\log_{10}\!\left(\frac{I}{I_0}\right),\qquad I\propto\frac1{r^2}$$

## 2. When to use each form

Select the form that isolates the unknown in **Wave Intensity and Sound Level** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Wave Intensity and Sound Level:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics 2', 'Waves, Sound, and Physical Optics'): r"""## Formula Walkthrough


When reviewing **Waves, Sound, and Physical Optics**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Waves, Sound, and Physical Optics** in AP Physics 2. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Wave speed.** Relates frequency, wavelength, intensity, and decibel level for waves and sound.

$$v=f\lambda,\qquad I\propto A^2,\qquad \beta=10\log_{10}\!\left(\frac{I}{I_0}\right)$$

**Quantum / nuclear.** Photon energy, de Broglie wavelength, and exponential decay appear in modern topics.

$$E=hf=\frac{hc}{\lambda},\qquad \lambda=\frac{h}{p},\qquad N=N_0 e^{-\lambda t}$$

## 2. When to use each form

Select the form that isolates the unknown in **Waves, Sound, and Physical Optics** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Wave relation:** When frequency and wavelength are both known or one must be found.
- **Intensity / decibels:** When sound level or power per area is compared across distances.
- **Photon / decay:** When threshold, half-life, or transition energy is required.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Waves, Sound, and Physical Optics:

1. Identify the wave, thermodynamic, or quantum subsystem in the prompt.
2. Write the primary equation and list given symbols with units.
3. Use conservation (energy, charge, nucleon number) where applicable.
4. Substitute constants (c, h, k_B) from the AP sheet if needed.
5. Interpret the numeric result (e.g., audible vs ultrasonic, stable vs decayed).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Hz for frequency, m for wavelength, W/m² for intensity, eV or J for photon energy. Half-life times must match the decay constant $\lambda$ (s⁻¹) in $N=N_0 e^{-\lambda t}$.

Long wavelength $\Rightarrow$ small photon energy; $I\to0$ gives $\beta\to-\infty$ dB. Non-relativistic de Broglie uses $p=mv$; at $v\ll c$, $E=hf$ is independent of intensity.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $v=c$ for mechanical waves on strings or in air.
- Assuming intensity doubles when amplitude doubles (it squares).
- Confusing decay constant $\lambda$ with wavelength $\lambda$.
- Applying classical formulas to photoelectric effect below threshold frequency.
""",
    ('AP Physics C: Mechanics', '1D and 2D Kinematics with Calculus'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **1D and 2D Kinematics with Calculus**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **1D and 2D Kinematics with Calculus** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Position-velocity-acceleration calculus chain.

$$v=\frac{dx}{dt},\qquad a=\frac{dv}{dt},\qquad \vec r(t)=\int\vec v\,dt$$

## 2. When to use each form

Select the form that isolates the unknown in **1D and 2D Kinematics with Calculus** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving 1D and 2D Kinematics with Calculus:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', '6. Kepler’s First and Second Law'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **6. Kepler's First and Second Law**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **6. Kepler's First and Second Law** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Areal velocity constant; central force gives angular momentum conservation.

$$A=\frac12 r^2\dot\theta=\text{const},\qquad \tau=r\times F$$

## 2. When to use each form

Select the form that isolates the unknown in **6. Kepler's First and Second Law** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving 6. Kepler's First and Second Law:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Angular Momentum and Its Conservation'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Angular Momentum and Its Conservation**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Angular Momentum and Its Conservation** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Angular momentum and torque rate of change.

$$\vec L=\vec r\times\vec p,\qquad \vec\tau_{\mathrm{ext}}=\frac{d\vec L}{dt}$$

## 2. When to use each form

Select the form that isolates the unknown in **Angular Momentum and Its Conservation** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Angular Momentum and Its Conservation:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Angular Position, Velocity, and Acceleration'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Angular Position, Velocity, and Acceleration**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Angular Position, Velocity, and Acceleration** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Time derivatives of angular variables.

$$\omega=\frac{d\theta}{dt},\qquad \alpha=\frac{d\omega}{dt}$$

## 2. When to use each form

Select the form that isolates the unknown in **Angular Position, Velocity, and Acceleration** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Angular Position, Velocity, and Acceleration:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Calculus Used in Rotational Motion'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Calculus Used in Rotational Motion**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Calculus Used in Rotational Motion** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Calculus links angular kinematics to dynamics.

$$\theta=\int\omega\,dt,\qquad \alpha=\frac{d\omega}{dt},\qquad \tau=I\alpha$$

## 2. When to use each form

Select the form that isolates the unknown in **Calculus Used in Rotational Motion** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Calculus Used in Rotational Motion:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Center of Mass and Systems of Particles'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Center of Mass and Systems of Particles**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Center of Mass and Systems of Particles** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** COM motion follows net external force.

$$\vec r_{\mathrm{cm}}=\frac{\sum m_i\vec r_i}{\sum m_i},\qquad \vec F_{\mathrm{ext}}=M\vec a_{\mathrm{cm}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Center of Mass and Systems of Particles** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Center of Mass and Systems of Particles:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Data Collections'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Data Collections**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Data Collections** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Dynamics / rotation.** Rotational analogues of Newton's laws and angular momentum.

$$\vec\tau=\vec r\times\vec F,\quad \vec\tau=I\vec\alpha,\quad L=I\omega$$

**Energy / gravitation.** Work as a line integral, gravitational potential, and escape speed.

$$W=\int \vec F\cdot d\vec r,\quad U_g=-\frac{GMm}{r},\quad v_{\mathrm{esc}}=\sqrt{\frac{2GM}{R}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Data Collections** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Data Collections:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Elliptical Orbits'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Elliptical Orbits**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Elliptical Orbits** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Orbit geometry and total mechanical energy for closed orbit.

$$r=\frac{a(1-e^2)}{1+e\cos\theta},\qquad E=\frac{-GMm}{2a}$$

## 2. When to use each form

Select the form that isolates the unknown in **Elliptical Orbits** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Elliptical Orbits:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Force and Translational Dynamics'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Force and Translational Dynamics**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Force and Translational Dynamics** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Dynamics / rotation.** Rotational analogues of Newton's laws and angular momentum.

$$\vec\tau=\vec r\times\vec F,\quad \vec\tau=I\vec\alpha,\quad L=I\omega$$

**Energy / gravitation.** Work as a line integral, gravitational potential, and escape speed.

$$W=\int \vec F\cdot d\vec r,\quad U_g=-\frac{GMm}{r},\quad v_{\mathrm{esc}}=\sqrt{\frac{2GM}{R}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Force and Translational Dynamics** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Force and Translational Dynamics:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Friction, Inclines, and Free-Body Diagrams'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Friction, Inclines, and Free-Body Diagrams**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Friction, Inclines, and Free-Body Diagrams** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Static and kinetic friction bounds on components along incline.

$$f_s\le\mu_s N,\qquad f_k=\mu_k N$$

## 2. When to use each form

Select the form that isolates the unknown in **Friction, Inclines, and Free-Body Diagrams** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Friction, Inclines, and Free-Body Diagrams:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Gravitational Field, Potential, and Escape Speed'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Gravitational Field, Potential, and Escape Speed**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Gravitational Field, Potential, and Escape Speed** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Field, potential, and minimum speed to escape.

$$g=\frac{GM}{r^2},\qquad U=-\frac{GMm}{r},\qquad v_{\mathrm{esc}}=\sqrt{\frac{2GM}{R}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Gravitational Field, Potential, and Escape Speed** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Gravitational Field, Potential, and Escape Speed:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Kepler’s Third Law and Orbital Periods'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Kepler's Third Law and Orbital Periods**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Kepler's Third Law and Orbital Periods** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Period squared proportional to semi-major axis cubed.

$$T^2=\frac{4\pi^2}{GM}a^3$$

## 2. When to use each form

Select the form that isolates the unknown in **Kepler's Third Law and Orbital Periods** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Kepler's Third Law and Orbital Periods:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Linear Momentum'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Linear Momentum**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Linear Momentum** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Dynamics / rotation.** Rotational analogues of Newton's laws and angular momentum.

$$\vec\tau=\vec r\times\vec F,\quad \vec\tau=I\vec\alpha,\quad L=I\omega$$

**Energy / gravitation.** Work as a line integral, gravitational potential, and escape speed.

$$W=\int \vec F\cdot d\vec r,\quad U_g=-\frac{GMm}{r},\quad v_{\mathrm{esc}}=\sqrt{\frac{2GM}{R}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Linear Momentum** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Linear Momentum:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Linear Momentum, Impulse, and Collisions'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Linear Momentum, Impulse, and Collisions**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Linear Momentum, Impulse, and Collisions** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Impulse-momentum and conservation in isolated systems.

$$\vec J=\int\vec F\,dt=\Delta\vec p,\qquad \sum\vec p_i=\text{const}$$

## 2. When to use each form

Select the form that isolates the unknown in **Linear Momentum, Impulse, and Collisions** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Linear Momentum, Impulse, and Collisions:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Newton’s Laws with Variable Forces (Calculus)'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Newton's Laws with Variable Forces (Calculus)**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Newton's Laws with Variable Forces (Calculus)** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Variable force requires integration for velocity and work.

$$F=ma=m\frac{dv}{dt},\qquad W=\int F(x)\,dx$$

## 2. When to use each form

Select the form that isolates the unknown in **Newton's Laws with Variable Forces (Calculus)** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Newton's Laws with Variable Forces (Calculus):

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Newton’s Shell Theorem'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Newton's Shell Theorem**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Newton's Shell Theorem** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Gravitational force outside spherically symmetric mass.

$$F=\frac{GMm}{r^2}\ \text{(outside uniform shell/sphere)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Newton's Shell Theorem** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Newton's Shell Theorem:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Oscillations'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Oscillations**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Oscillations** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Dynamics / rotation.** Rotational analogues of Newton's laws and angular momentum.

$$\vec\tau=\vec r\times\vec F,\quad \vec\tau=I\vec\alpha,\quad L=I\omega$$

**Energy / gravitation.** Work as a line integral, gravitational potential, and escape speed.

$$W=\int \vec F\cdot d\vec r,\quad U_g=-\frac{GMm}{r},\quad v_{\mathrm{esc}}=\sqrt{\frac{2GM}{R}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Oscillations** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Oscillations:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Parallel-Axis Theorem'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Parallel-Axis Theorem**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Parallel-Axis Theorem** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Shift rotation axis parallel to CM axis.

$$I=I_{\mathrm{cm}}+Md^2$$

## 2. When to use each form

Select the form that isolates the unknown in **Parallel-Axis Theorem** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Parallel-Axis Theorem:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Power and Instantaneous Power'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Power and Instantaneous Power**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Power and Instantaneous Power** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Instantaneous power as dot product of force and velocity.

$$P=\frac{dW}{dt}=\vec F\cdot\vec v$$

## 2. When to use each form

Select the form that isolates the unknown in **Power and Instantaneous Power** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Power and Instantaneous Power:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Projectile Motion'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Projectile Motion**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Projectile Motion** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Independent horizontal and vertical motion with constant g.

$$x=v_{0x}t,\qquad y=v_{0y}t-\tfrac12 gt^2$$

## 2. When to use each form

Select the form that isolates the unknown in **Projectile Motion** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Projectile Motion:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Simple Harmonic Motion and Oscillations'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Simple Harmonic Motion and Oscillations**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Simple Harmonic Motion and Oscillations** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Restoring force proportional to displacement; period relations.

$$a=-\omega^2 x,\qquad x=A\cos(\omega t+\phi),\qquad T=2\pi\sqrt{\frac{m}{k}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Simple Harmonic Motion and Oscillations** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Simple Harmonic Motion and Oscillations:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Torque, Moment of Inertia, and Rotational Dynamics'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Torque, Moment of Inertia, and Rotational Dynamics**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Torque, Moment of Inertia, and Rotational Dynamics** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Rotational Newton's second law and inertia definition.

$$\vec\tau=\vec r\times\vec F,\qquad \tau=I\alpha,\qquad I=\int r^2\,dm$$

## 2. When to use each form

Select the form that isolates the unknown in **Torque, Moment of Inertia, and Rotational Dynamics** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Torque, Moment of Inertia, and Rotational Dynamics:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Work, Energy, and Power'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Work, Energy, and Power**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Work, Energy, and Power** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Dynamics / rotation.** Rotational analogues of Newton's laws and angular momentum.

$$\vec\tau=\vec r\times\vec F,\quad \vec\tau=I\vec\alpha,\quad L=I\omega$$

**Energy / gravitation.** Work as a line integral, gravitational potential, and escape speed.

$$W=\int \vec F\cdot d\vec r,\quad U_g=-\frac{GMm}{r},\quad v_{\mathrm{esc}}=\sqrt{\frac{2GM}{R}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Work, Energy, and Power** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Work, Energy, and Power:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: Mechanics', 'Work–Energy Theorem and Mechanical Energy'): r"""## Formula Walkthrough


After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Work–Energy Theorem and Mechanical Energy**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Work–Energy Theorem and Mechanical Energy** in AP Physics C: Mechanics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Net work changes kinetic energy; include rotational KE.

$$W_{\mathrm{net}}=\Delta K,\qquad E=\tfrac12 mv^2+\tfrac12 I\omega^2+mgh$$

## 2. When to use each form

Select the form that isolates the unknown in **Work–Energy Theorem and Mechanical Energy** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Torque–angular acceleration:** Rigid body rotation about a fixed axis.
- **Energy / work integral:** Variable force or path-dependent work (calculus form).
- **Orbit / gravitation:** Spherical mass distributions, escape, or Kepler period.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Work–Energy Theorem and Mechanical Energy:

1. Draw a diagram; choose coordinates and rotation sign convention.
2. Select $\sum F=ma$, $\sum\tau=I\alpha$, energy, or momentum form.
3. Use calculus relations ($v=dx/dt$, $a=dv/dt$) when motion is non-uniform.
4. Substitute with consistent SI units; keep rad for angular quantities.
5. Verify via energy or limiting case (e.g., $r\to\infty$, small angle).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Torque in N·m, $I$ in kg·m², $\omega$ in rad/s. Gravitational formulas use SI G unless given otherwise. Power in watts (J/s).

Point mass outside shell: shell theorem gives $F=GMm/r^2$. Small-angle SHM: $\sin\theta\approx\theta$. Elastic collision: KE conserved; inelastic: momentum only.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using $I$ about the wrong axis without parallel-axis shift.
- Mixing degrees and radians in $\omega$ or $\alpha$.
- Forgetting that static friction can vary up to its maximum.
- Sign errors on restoring forces in SHM ($a\propto -x$).
""",
    ('AP Physics C: E&M', 'Biot–Savart Law and Ampère’s Law'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Biot–Savart Law and Ampère's Law**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Biot–Savart Law and Ampère's Law** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Field from current element; symmetry with Ampère.

$$d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec\ell\times\hat r}{r^2}$$

## 2. When to use each form

Select the form that isolates the unknown in **Biot–Savart Law and Ampère's Law** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Biot–Savart Law and Ampère's Law:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Conductors and Capacitors'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Conductors and Capacitors**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Conductors and Capacitors** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Capacitance and stored energy.

$$C=\frac{Q}{V},\qquad C=\frac{\varepsilon_0 A}{d},\qquad U=\tfrac12 CV^2$$

## 2. When to use each form

Select the form that isolates the unknown in **Conductors and Capacitors** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Conductors and Capacitors:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Continuous Charge Distributions (Line, Ring, Disk)'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Continuous Charge Distributions (Line, Ring, Disk)**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Continuous Charge Distributions (Line, Ring, Disk)** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Integrate field contributions from dq.

$$dE=\frac{1}{4\pi\varepsilon_0}\frac{dq}{r^2}\hat r,\qquad \lambda=\frac{Q}{L}$$

## 2. When to use each form

Select the form that isolates the unknown in **Continuous Charge Distributions (Line, Ring, Disk)** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Continuous Charge Distributions (Line, Ring, Disk):

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Coulomb’s Law and Superposition'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Coulomb's Law and Superposition**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Coulomb's Law and Superposition** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Force between point charges; vector sum.

$$\vec F=\frac1{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}\hat r$$

## 2. When to use each form

Select the form that isolates the unknown in **Coulomb's Law and Superposition** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Coulomb's Law and Superposition:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Data CollectionsElectromagnetic Induction'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Data CollectionsElectromagnetic Induction**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Data CollectionsElectromagnetic Induction** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Faraday.** Coil with N turns; experimental data analysis for induced emf.

$$\mathcal E=-N\frac{d\Phi_B}{dt}$$

## 2. When to use each form

Select the form that isolates the unknown in **Data CollectionsElectromagnetic Induction** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Data CollectionsElectromagnetic Induction:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Dielectrics and Capacitors with Insulators'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Dielectrics and Capacitors with Insulators**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Dielectrics and Capacitors with Insulators** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Dielectric constant multiplies capacitance.

$$C'=\kappa C,\qquad \vec D=\varepsilon_0\vec E+\vec P$$

## 2. When to use each form

Select the form that isolates the unknown in **Dielectrics and Capacitors with Insulators** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Dielectrics and Capacitors with Insulators:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Electric Charges, Fields, and Gauss’s Law'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Electric Charges, Fields, and Gauss's Law**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Electric Charges, Fields, and Gauss's Law** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Superposition and Gauss for field.

$$\vec E=\frac1{4\pi\varepsilon_0}\sum\frac{q_i}{r_i^2}\hat r$$

## 2. When to use each form

Select the form that isolates the unknown in **Electric Charges, Fields, and Gauss's Law** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Electric Charges, Fields, and Gauss's Law:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Electric Circuits'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Electric Circuits**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Electric Circuits** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Ohm's law and series resistance.

$$V=IR,\qquad P=IV,\qquad R_{\mathrm{eq}}=\sum R_i\ \text{(series)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Electric Circuits** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Electric Circuits:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.


**Study check for Electric Circuits.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Physics C: E&M', 'Electric Field Energy and Energy Density'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Electric Field Energy and Energy Density**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Electric Field Energy and Energy Density** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Energy stored in electric field.

$$u_E=\tfrac12\varepsilon_0 E^2,\qquad U=\int u_E\,dV$$

## 2. When to use each form

Select the form that isolates the unknown in **Electric Field Energy and Energy Density** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Electric Field Energy and Energy Density:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Electric Potential'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Electric Potential**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Electric Potential** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Potential from field; potential energy.

$$V=-\int_{\infty}^{r}\vec E\cdot d\vec\ell,\qquad U=qV$$

## 2. When to use each form

Select the form that isolates the unknown in **Electric Potential** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Electric Potential:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.


**Study check for Electric Potential.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Physics C: E&M', 'Equipotential Surfaces and Field Lines'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Equipotential Surfaces and Field Lines**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Equipotential Surfaces and Field Lines** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Field perpendicular to equipotentials.

$$\Delta V=-\int\vec E\cdot d\vec\ell,\qquad \vec E=-\nabla V$$

## 2. When to use each form

Select the form that isolates the unknown in **Equipotential Surfaces and Field Lines** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Equipotential Surfaces and Field Lines:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Faraday’s Law, Lenz’s Law, and Induction Circuits'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Faraday's Law, Lenz's Law, and Induction Circuits**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Faraday's Law, Lenz's Law, and Induction Circuits** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Induced emf opposes flux change.

$$\mathcal E=-\frac{d\Phi_B}{dt},\qquad \Phi_B=\int\vec B\cdot d\vec A$$

## 2. When to use each form

Select the form that isolates the unknown in **Faraday's Law, Lenz's Law, and Induction Circuits** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Faraday's Law, Lenz's Law, and Induction Circuits:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Gauss’s Law Applications: Plane, Line, and Sphere'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Gauss's Law Applications: Plane, Line, and Sphere**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Gauss's Law Applications: Plane, Line, and Sphere** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Standard symmetric results from Gauss.

$$E_{\mathrm{line}}=\frac{\lambda}{2\pi\varepsilon_0 r},\qquad E_{\mathrm{sheet}}=\frac{\sigma}{2\varepsilon_0}$$

## 2. When to use each form

Select the form that isolates the unknown in **Gauss's Law Applications: Plane, Line, and Sphere** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Gauss's Law Applications: Plane, Line, and Sphere:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Gauss’s Law practise'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Gauss's Law practise**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Gauss's Law practise** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Practice solving E from symmetry.

$$E=\frac{Q_{\mathrm{enc}}}{\varepsilon_0 A}\ \text{(symmetric surfaces)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Gauss's Law practise** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Gauss's Law practise:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Gauss’s law'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Gauss's law**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Gauss's law** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Flux linked to enclosed charge.

$$\oint\vec E\cdot d\vec A=\frac{Q_{\mathrm{enc}}}{\varepsilon_0}$$

## 2. When to use each form

Select the form that isolates the unknown in **Gauss's law** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Gauss's law:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.


**Study check for Gauss's law.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Physics C: E&M', 'Inductance, RL Circuits, and LC Oscillations'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Inductance, RL Circuits, and LC Oscillations**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Inductance, RL Circuits, and LC Oscillations** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Inductive emf and LC angular frequency.

$$\mathcal E_L=-L\frac{di}{dt},\qquad \omega=\frac1{\sqrt{LC}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Inductance, RL Circuits, and LC Oscillations** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Inductance, RL Circuits, and LC Oscillations:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Kirchhoff’s Rules and Multi-Loop Circuits'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Kirchhoff's Rules and Multi-Loop Circuits**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Kirchhoff's Rules and Multi-Loop Circuits** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Junction and loop rules.

$$\sum I_{\mathrm{in}}=\sum I_{\mathrm{out}},\qquad \sum\mathcal E=\sum IR$$

## 2. When to use each form

Select the form that isolates the unknown in **Kirchhoff's Rules and Multi-Loop Circuits** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Kirchhoff's Rules and Multi-Loop Circuits:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Magnetic Fields and Electromagnetism'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Magnetic Fields and Electromagnetism**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Magnetic Fields and Electromagnetism** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Lorentz force and Ampère's law form.

$$\vec F=q\vec v\times\vec B,\qquad \oint\vec B\cdot d\vec\ell=\mu_0 I_{\mathrm{enc}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Magnetic Fields and Electromagnetism** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Magnetic Fields and Electromagnetism:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Magnetic Force, Currents, and Right-Hand Rules'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Magnetic Force, Currents, and Right-Hand Rules**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Magnetic Force, Currents, and Right-Hand Rules** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Force on wire and dipole torque.

$$\vec F=I\vec L\times\vec B,\qquad \tau=\vec\mu\times\vec B$$

## 2. When to use each form

Select the form that isolates the unknown in **Magnetic Force, Currents, and Right-Hand Rules** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Magnetic Force, Currents, and Right-Hand Rules:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'Mutual Inductance and Transformers'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Mutual Inductance and Transformers**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Mutual Inductance and Transformers** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Coupled coils and ideal transformer voltages.

$$\mathcal E_2=-M\frac{di_1}{dt},\qquad \frac{V_2}{V_1}=\frac{N_2}{N_1}$$

## 2. When to use each form

Select the form that isolates the unknown in **Mutual Inductance and Transformers** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Mutual Inductance and Transformers:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Physics C: E&M', 'RC Circuit Transients and Capacitor Switching'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **RC Circuit Transients and Capacitor Switching**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **RC Circuit Transients and Capacitor Switching** in AP Physics C: E&M. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Charging time constant and exponential approach.

$$\tau=RC,\qquad q(t)=Q_f(1-e^{-t/\tau})$$

## 2. When to use each form

Select the form that isolates the unknown in **RC Circuit Transients and Capacitor Switching** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Coulomb / field:** Point charges or superposition of fields.
- **Gauss's law:** High symmetry: sphere, cylinder, infinite plane.
- **Circuit / transient:** Kirchhoff loops, RC or RL time constants.

## 3. Step-by-step substitution template

Follow this template on AP problems involving RC Circuit Transients and Capacitor Switching:

1. Identify charge configuration or circuit topology.
2. Choose Coulomb, Gauss, potential, or Kirchhoff approach.
3. Define sign conventions for emf and current directions.
4. Convert $\mu$C, cm, mA to SI before substitution.
5. Check units (V, C, T·m²) and steady-state behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Charge in coulombs, field in N/C or V/m, capacitance in farads, inductance in henries. Magnetic flux in weber (T·m²).

Far from a dipole, field falls faster than $1/r^2$. Steady DC: capacitor open, inductor short. $Q\to0$ on conductor $\Rightarrow$ field inside conductor is zero in electrostatic equilibrium.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using Gauss's law without symmetry to claim $E=0$ everywhere.
- Confusing emf sign with Lenz's opposition to flux *change*.
- Treating capacitor charge as instantaneously zero during charging.
- Mixing series and parallel resistor formulas.
""",
    ('AP Calculus AB/BC', 'Analytical Applications of Differentiation'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Analytical Applications of Differentiation**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Analytical Applications of Differentiation** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Extrema and curve analysis.

$$f'(c)=0\ \text{(critical)},\qquad f''\ \text{for concavity}$$

## 2. When to use each form

Select the form that isolates the unknown in **Analytical Applications of Differentiation** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Analytical Applications of Differentiation:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).


**Study check for Analytical Applications of Differentiation.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Calculus AB/BC', 'Applications of Integration'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Applications of Integration**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Applications of Integration** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Area and disk/washer volume.

$$A=\int_a^b f(x)\,dx,\qquad V=\pi\int_a^b [R(x)]^2\,dx$$

## 2. When to use each form

Select the form that isolates the unknown in **Applications of Integration** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Applications of Integration:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).


**Study check for Applications of Integration.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Calculus AB/BC', 'Contextual Applications of Differentiation'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Contextual Applications of Differentiation**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Contextual Applications of Differentiation** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Rates of change in applied settings.

$$v=\frac{ds}{dt},\qquad a=\frac{dv}{dt},\qquad \frac{dA}{dt},\ \frac{dV}{dt}$$

## 2. When to use each form

Select the form that isolates the unknown in **Contextual Applications of Differentiation** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Contextual Applications of Differentiation:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).


**Study check for Contextual Applications of Differentiation.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Calculus AB/BC', 'Definition and Fundamental Properties of Derivatives'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Definition and Fundamental Properties of Derivatives**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Definition and Fundamental Properties of Derivatives** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Limit definition and linearity.

$$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h},\qquad (cf)'=cf'$$

## 2. When to use each form

Select the form that isolates the unknown in **Definition and Fundamental Properties of Derivatives** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Definition and Fundamental Properties of Derivatives:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).
""",
    ('AP Calculus AB/BC', 'Differential Equations'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Differential Equations**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Differential Equations** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Separable exponential growth/decay.

$$\frac{dy}{dt}=ky\Rightarrow y=Ce^{kt},\qquad \frac{dy}{dx}=f(x,y)$$

## 2. When to use each form

Select the form that isolates the unknown in **Differential Equations** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Differential Equations:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).


**Study check for Differential Equations.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Calculus AB/BC', 'Infinite Sequences and Series'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Infinite Sequences and Series**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Infinite Sequences and Series** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Geometric series and Taylor remainder bound.

$$\sum_{n=1}^\infty ar^{n}=\frac{a}{1-r},\qquad |R_n|\le\frac{M}{(n+1)!}|x-a|^{n+1}$$

## 2. When to use each form

Select the form that isolates the unknown in **Infinite Sequences and Series** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Infinite Sequences and Series:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).


**Study check for Infinite Sequences and Series.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Calculus AB/BC', 'Integration and Accumulation of Change'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Integration and Accumulation of Change**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Integration and Accumulation of Change** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** FTC links antiderivatives to net change.

$$\int_a^b f(x)\,dx=F(b)-F(a),\qquad \frac{d}{dx}\int_a^x f(t)\,dt=f(x)$$

## 2. When to use each form

Select the form that isolates the unknown in **Integration and Accumulation of Change** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Integration and Accumulation of Change:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).
""",
    ('AP Calculus AB/BC', 'Limits and Continuity'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Limits and Continuity**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Limits and Continuity** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Limit existence and continuity definition.

$$\lim_{x\to a}f(x)=L,\qquad \text{continuous if }L=f(a)$$

## 2. When to use each form

Select the form that isolates the unknown in **Limits and Continuity** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Limits and Continuity:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).


**Study check for Limits and Continuity.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Calculus AB/BC', 'Parametric Equations, Polar Coordinates, and Vector-Valued Functions'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Parametric Equations, Polar Coordinates, and Vector-Valued Functions**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Parametric Equations, Polar Coordinates, and Vector-Valued Functions** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Parametric slope and polar conversion.

$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt},\qquad x=r\cos\theta,\ y=r\sin\theta$$

## 2. When to use each form

Select the form that isolates the unknown in **Parametric Equations, Polar Coordinates, and Vector-Valued Functions** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Parametric Equations, Polar Coordinates, and Vector-Valued Functions:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).
""",
    ('AP Calculus AB/BC', 'Unit 2: Differentiation—Definition and Fundamental Properties'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 2: Differentiation—Definition and Fundamental Properties**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 2: Differentiation—Definition and Fundamental Properties** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Power, product, quotient rules.

$$\frac{d}{dx}[x^n]=nx^{n-1},\qquad (fg)'=f'g+fg'$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 2: Differentiation—Definition and Fundamental Properties** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 2: Differentiation—Definition and Fundamental Properties:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).
""",
    ('AP Calculus AB/BC', 'Unit 3: Composite, Implicit, and Inverse Functions'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 3: Composite, Implicit, and Inverse Functions**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 3: Composite, Implicit, and Inverse Functions** in AP Calculus AB/BC. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Chain rule and inverse function derivative.

$$\frac{dy}{dx}=\frac{dy/du}{du/dx},\qquad \frac{d}{dx}[f^{-1}(x)]=\frac1{f'(f^{-1}(x))}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 3: Composite, Implicit, and Inverse Functions** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Limit / derivative:** Local behavior, slopes, related rates.
- **Definite integral:** Area, accumulation, net change.
- **Series (BC):** Convergence tests, Taylor remainder.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 3: Composite, Implicit, and Inverse Functions:

1. Restate the target quantity (slope, area, volume, convergence).
2. Identify the theorem or rule (chain, product, FTC, comparison test).
3. Set up the limit or integral with correct bounds and variable.
4. Execute algebra/calculus; simplify exact form before decimals.
5. Verify dimensions (if contextual) or test endpoint behavior.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

In applied problems, derivative units are output/input (e.g., ft/s). Definite integrals of rate functions yield net change in the output unit.

$h\to0$ recovers tangent slope; $b-a\to0$ recovers local rate. For series, if $a_n\not\to0$, the series diverges.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Differentiating under the integral without Leibniz justification on AP scope.
- Forgetting +C on indefinite integrals.
- Misapplying L'Hôpital outside indeterminate forms.
- Radius of convergence vs interval endpoints (BC).
""",
    ('AP Statistics', 'Chi-Square Goodness of Fit'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Chi-Square Goodness of Fit**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Chi-Square Goodness of Fit** in AP Statistics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Compare observed counts to expected.

$$\chi^2=\sum\frac{(O-E)^2}{E},\qquad df=k-1$$

## 2. When to use each form

Select the form that isolates the unknown in **Chi-Square Goodness of Fit** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **CI for proportion/mean:** Random sample, independence, normality/C.L.T. checks.
- **Hypothesis test:** State $H_0$, $H_a$; compute z or t; compare to $\alpha$ or p-value.
- **Regression:** Predict or interpret slope in context with units.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Chi-Square Goodness of Fit:

1. Define parameter of interest in context ($p$, $\mu$, slope).
2. Verify conditions (random, independent, normal/large n).
3. Compute point estimate and standard error.
4. Build interval or test statistic; locate p-value or critical value.
5. Conclude in context with linkage to the question asked.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Proportions are dimensionless; means carry context units. Slope units are y-unit per x-unit. Standard errors inherit estimate units.

As $n\to\infty$, CI width $\to0$ if $\hat p$ fixed. $r=\pm1$ only for perfect linear data; extrapolation is risky beyond observed x.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Saying "prove $H_0$" instead of fail to reject.
- Using z procedures when $\sigma$ unknown without large n justification.
- Confusing correlation with causation.
- Interpreting $R^2$ as causal percent.


**Study check for Chi-Square Goodness of Fit.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Statistics', 'Data Collection, Sampling, and Experiments'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Data Collection, Sampling, and Experiments**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Data Collection, Sampling, and Experiments** in AP Statistics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Sample size effect on precision (conceptual formula).

$$\text{Margin of error}\propto\frac1{\sqrt{n}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Data Collection, Sampling, and Experiments** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **CI for proportion/mean:** Random sample, independence, normality/C.L.T. checks.
- **Hypothesis test:** State $H_0$, $H_a$; compute z or t; compare to $\alpha$ or p-value.
- **Regression:** Predict or interpret slope in context with units.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Data Collection, Sampling, and Experiments:

1. Define parameter of interest in context ($p$, $\mu$, slope).
2. Verify conditions (random, independent, normal/large n).
3. Compute point estimate and standard error.
4. Build interval or test statistic; locate p-value or critical value.
5. Conclude in context with linkage to the question asked.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Proportions are dimensionless; means carry context units. Slope units are y-unit per x-unit. Standard errors inherit estimate units.

As $n\to\infty$, CI width $\to0$ if $\hat p$ fixed. $r=\pm1$ only for perfect linear data; extrapolation is risky beyond observed x.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Saying "prove $H_0$" instead of fail to reject.
- Using z procedures when $\sigma$ unknown without large n justification.
- Confusing correlation with causation.
- Interpreting $R^2$ as causal percent.
""",
    ('AP Statistics', 'Exploring One-Variable Data'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Exploring One-Variable Data**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Exploring One-Variable Data** in AP Statistics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Mean and sample standard deviation.

$$\bar x=\frac{\sum x_i}{n},\qquad s=\sqrt{\frac{\sum(x_i-\bar x)^2}{n-1}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Exploring One-Variable Data** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **CI for proportion/mean:** Random sample, independence, normality/C.L.T. checks.
- **Hypothesis test:** State $H_0$, $H_a$; compute z or t; compare to $\alpha$ or p-value.
- **Regression:** Predict or interpret slope in context with units.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Exploring One-Variable Data:

1. Define parameter of interest in context ($p$, $\mu$, slope).
2. Verify conditions (random, independent, normal/large n).
3. Compute point estimate and standard error.
4. Build interval or test statistic; locate p-value or critical value.
5. Conclude in context with linkage to the question asked.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Proportions are dimensionless; means carry context units. Slope units are y-unit per x-unit. Standard errors inherit estimate units.

As $n\to\infty$, CI width $\to0$ if $\hat p$ fixed. $r=\pm1$ only for perfect linear data; extrapolation is risky beyond observed x.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Saying "prove $H_0$" instead of fail to reject.
- Using z procedures when $\sigma$ unknown without large n justification.
- Confusing correlation with causation.
- Interpreting $R^2$ as causal percent.
""",
    ('AP Statistics', 'Geometric Distribution'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Geometric Distribution**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Geometric Distribution** in AP Statistics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** First success on trial k; mean waiting time.

$$P(X=k)=(1-p)^{k-1}p,\qquad \mu=\frac1p$$

## 2. When to use each form

Select the form that isolates the unknown in **Geometric Distribution** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **CI for proportion/mean:** Random sample, independence, normality/C.L.T. checks.
- **Hypothesis test:** State $H_0$, $H_a$; compute z or t; compare to $\alpha$ or p-value.
- **Regression:** Predict or interpret slope in context with units.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Geometric Distribution:

1. Define parameter of interest in context ($p$, $\mu$, slope).
2. Verify conditions (random, independent, normal/large n).
3. Compute point estimate and standard error.
4. Build interval or test statistic; locate p-value or critical value.
5. Conclude in context with linkage to the question asked.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Proportions are dimensionless; means carry context units. Slope units are y-unit per x-unit. Standard errors inherit estimate units.

As $n\to\infty$, CI width $\to0$ if $\hat p$ fixed. $r=\pm1$ only for perfect linear data; extrapolation is risky beyond observed x.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Saying "prove $H_0$" instead of fail to reject.
- Using z procedures when $\sigma$ unknown without large n justification.
- Confusing correlation with causation.
- Interpreting $R^2$ as causal percent.


**Study check for Geometric Distribution.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Statistics', 'Inference for Categorical Data — Proportions'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Inference for Categorical Data — Proportions**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Inference for Categorical Data — Proportions** in AP Statistics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** CI and z-test for proportion.

$$\hat p\pm z^*\sqrt{\frac{\hat p(1-\hat p)}{n}},\qquad z=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Inference for Categorical Data — Proportions** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **CI for proportion/mean:** Random sample, independence, normality/C.L.T. checks.
- **Hypothesis test:** State $H_0$, $H_a$; compute z or t; compare to $\alpha$ or p-value.
- **Regression:** Predict or interpret slope in context with units.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Inference for Categorical Data — Proportions:

1. Define parameter of interest in context ($p$, $\mu$, slope).
2. Verify conditions (random, independent, normal/large n).
3. Compute point estimate and standard error.
4. Build interval or test statistic; locate p-value or critical value.
5. Conclude in context with linkage to the question asked.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Proportions are dimensionless; means carry context units. Slope units are y-unit per x-unit. Standard errors inherit estimate units.

As $n\to\infty$, CI width $\to0$ if $\hat p$ fixed. $r=\pm1$ only for perfect linear data; extrapolation is risky beyond observed x.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Saying "prove $H_0$" instead of fail to reject.
- Using z procedures when $\sigma$ unknown without large n justification.
- Confusing correlation with causation.
- Interpreting $R^2$ as causal percent.
""",
    ('AP Statistics', 'Inference for Quantitative Data — Means'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Inference for Quantitative Data — Means**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Inference for Quantitative Data — Means** in AP Statistics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** t procedures for one sample mean.

$$\bar x\pm t^*\frac{s}{\sqrt{n}},\qquad t=\frac{\bar x-\mu_0}{s/\sqrt{n}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Inference for Quantitative Data — Means** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **CI for proportion/mean:** Random sample, independence, normality/C.L.T. checks.
- **Hypothesis test:** State $H_0$, $H_a$; compute z or t; compare to $\alpha$ or p-value.
- **Regression:** Predict or interpret slope in context with units.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Inference for Quantitative Data — Means:

1. Define parameter of interest in context ($p$, $\mu$, slope).
2. Verify conditions (random, independent, normal/large n).
3. Compute point estimate and standard error.
4. Build interval or test statistic; locate p-value or critical value.
5. Conclude in context with linkage to the question asked.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Proportions are dimensionless; means carry context units. Slope units are y-unit per x-unit. Standard errors inherit estimate units.

As $n\to\infty$, CI width $\to0$ if $\hat p$ fixed. $r=\pm1$ only for perfect linear data; extrapolation is risky beyond observed x.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Saying "prove $H_0$" instead of fail to reject.
- Using z procedures when $\sigma$ unknown without large n justification.
- Confusing correlation with causation.
- Interpreting $R^2$ as causal percent.
""",
    ('AP Statistics', 'Probability, Random Variables, and Probability Distributions'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Probability, Random Variables, and Probability Distributions**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Probability, Random Variables, and Probability Distributions** in AP Statistics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** General probability and discrete mean.

$$P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad \mu_X=\sum x_i p_i$$

## 2. When to use each form

Select the form that isolates the unknown in **Probability, Random Variables, and Probability Distributions** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **CI for proportion/mean:** Random sample, independence, normality/C.L.T. checks.
- **Hypothesis test:** State $H_0$, $H_a$; compute z or t; compare to $\alpha$ or p-value.
- **Regression:** Predict or interpret slope in context with units.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Probability, Random Variables, and Probability Distributions:

1. Define parameter of interest in context ($p$, $\mu$, slope).
2. Verify conditions (random, independent, normal/large n).
3. Compute point estimate and standard error.
4. Build interval or test statistic; locate p-value or critical value.
5. Conclude in context with linkage to the question asked.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Proportions are dimensionless; means carry context units. Slope units are y-unit per x-unit. Standard errors inherit estimate units.

As $n\to\infty$, CI width $\to0$ if $\hat p$ fixed. $r=\pm1$ only for perfect linear data; extrapolation is risky beyond observed x.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Saying "prove $H_0$" instead of fail to reject.
- Using z procedures when $\sigma$ unknown without large n justification.
- Confusing correlation with causation.
- Interpreting $R^2$ as causal percent.
""",
    ('AP Statistics', 'Regression Analysis'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Regression Analysis**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Regression Analysis** in AP Statistics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Least-squares regression line.

$$b_1=r\frac{s_y}{s_x},\qquad \hat y=b_0+b_1 x$$

## 2. When to use each form

Select the form that isolates the unknown in **Regression Analysis** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **CI for proportion/mean:** Random sample, independence, normality/C.L.T. checks.
- **Hypothesis test:** State $H_0$, $H_a$; compute z or t; compare to $\alpha$ or p-value.
- **Regression:** Predict or interpret slope in context with units.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Regression Analysis:

1. Define parameter of interest in context ($p$, $\mu$, slope).
2. Verify conditions (random, independent, normal/large n).
3. Compute point estimate and standard error.
4. Build interval or test statistic; locate p-value or critical value.
5. Conclude in context with linkage to the question asked.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Proportions are dimensionless; means carry context units. Slope units are y-unit per x-unit. Standard errors inherit estimate units.

As $n\to\infty$, CI width $\to0$ if $\hat p$ fixed. $r=\pm1$ only for perfect linear data; extrapolation is risky beyond observed x.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Saying "prove $H_0$" instead of fail to reject.
- Using z procedures when $\sigma$ unknown without large n justification.
- Confusing correlation with causation.
- Interpreting $R^2$ as causal percent.


**Study check for Regression Analysis.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Chemistry', 'Unit 1: Atomic Structure And Properties'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 1: Atomic Structure And Properties**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 1: Atomic Structure And Properties** in AP Chemistry. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Moles and average atomic mass.

$$n=\frac{m}{M},\qquad \bar M=\sum(\text{abundance})(\text{mass})$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 1: Atomic Structure And Properties** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Mole / gas law:** Mass, volume, pressure-temperature calculations.
- **Equilibrium ICE:** Find Q vs K or equilibrium concentrations.
- **Kinetics / thermo:** Rate laws, $\Delta H$, cell potential.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 1: Atomic Structure And Properties:

1. Balance the chemical equation if moles are involved.
2. Convert given data to moles or molarity.
3. Write the relevant law (gas, K, rate, Nernst).
4. Set up ICE table or substitution; solve for unknown.
5. Check significant figures and physical plausibility.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Pa or atm consistently in PV=nRT; R must match. Concentrations in mol/L for K; pressures in Kp if all gaseous.

Ideal gas at low P and high T; $Q=K$ at equilibrium. Zero order: rate independent of [A].

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using molarity in K without accounting for stoichiometric powers.
- Mixing Kc and Kp without conversion.
- Sign error on $\Delta G$ vs spontaneity.
- Confusing rate law order with coefficients.


**Study check for Unit 1: Atomic Structure And Properties.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Chemistry', 'Unit 2: Compound Structure And Properties'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 2: Compound Structure And Properties**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 2: Compound Structure And Properties** in AP Chemistry. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Percent composition.

$$\%\text{ mass}=\frac{\text{mass element}}{\text{mass compound}}\times100\%$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 2: Compound Structure And Properties** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Mole / gas law:** Mass, volume, pressure-temperature calculations.
- **Equilibrium ICE:** Find Q vs K or equilibrium concentrations.
- **Kinetics / thermo:** Rate laws, $\Delta H$, cell potential.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 2: Compound Structure And Properties:

1. Balance the chemical equation if moles are involved.
2. Convert given data to moles or molarity.
3. Write the relevant law (gas, K, rate, Nernst).
4. Set up ICE table or substitution; solve for unknown.
5. Check significant figures and physical plausibility.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Pa or atm consistently in PV=nRT; R must match. Concentrations in mol/L for K; pressures in Kp if all gaseous.

Ideal gas at low P and high T; $Q=K$ at equilibrium. Zero order: rate independent of [A].

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using molarity in K without accounting for stoichiometric powers.
- Mixing Kc and Kp without conversion.
- Sign error on $\Delta G$ vs spontaneity.
- Confusing rate law order with coefficients.


**Study check for Unit 2: Compound Structure And Properties.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Chemistry', 'Unit 3: Properties Of Substances And Mixtures'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 3: Properties Of Substances And Mixtures**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 3: Properties Of Substances And Mixtures** in AP Chemistry. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Raoult's law and colligative boiling point elevation.

$$P=\chi P^*,\qquad \Delta T=K_fm$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 3: Properties Of Substances And Mixtures** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Mole / gas law:** Mass, volume, pressure-temperature calculations.
- **Equilibrium ICE:** Find Q vs K or equilibrium concentrations.
- **Kinetics / thermo:** Rate laws, $\Delta H$, cell potential.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 3: Properties Of Substances And Mixtures:

1. Balance the chemical equation if moles are involved.
2. Convert given data to moles or molarity.
3. Write the relevant law (gas, K, rate, Nernst).
4. Set up ICE table or substitution; solve for unknown.
5. Check significant figures and physical plausibility.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Pa or atm consistently in PV=nRT; R must match. Concentrations in mol/L for K; pressures in Kp if all gaseous.

Ideal gas at low P and high T; $Q=K$ at equilibrium. Zero order: rate independent of [A].

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using molarity in K without accounting for stoichiometric powers.
- Mixing Kc and Kp without conversion.
- Sign error on $\Delta G$ vs spontaneity.
- Confusing rate law order with coefficients.


**Study check for Unit 3: Properties Of Substances And Mixtures.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Chemistry', 'Unit 4: Chemical Reactions'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 4: Chemical Reactions**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 4: Chemical Reactions** in AP Chemistry. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Stoichiometric mole ratios.

$$\text{moles product}=\text{moles reactant}\times\frac{\nu_{\mathrm{prod}}}{\nu_{\mathrm{react}}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 4: Chemical Reactions** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Mole / gas law:** Mass, volume, pressure-temperature calculations.
- **Equilibrium ICE:** Find Q vs K or equilibrium concentrations.
- **Kinetics / thermo:** Rate laws, $\Delta H$, cell potential.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 4: Chemical Reactions:

1. Balance the chemical equation if moles are involved.
2. Convert given data to moles or molarity.
3. Write the relevant law (gas, K, rate, Nernst).
4. Set up ICE table or substitution; solve for unknown.
5. Check significant figures and physical plausibility.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Pa or atm consistently in PV=nRT; R must match. Concentrations in mol/L for K; pressures in Kp if all gaseous.

Ideal gas at low P and high T; $Q=K$ at equilibrium. Zero order: rate independent of [A].

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using molarity in K without accounting for stoichiometric powers.
- Mixing Kc and Kp without conversion.
- Sign error on $\Delta G$ vs spontaneity.
- Confusing rate law order with coefficients.


**Study check for Unit 4: Chemical Reactions.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Chemistry', 'Unit 5: Kinetics'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 5: Kinetics**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 5: Kinetics** in AP Chemistry. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Rate law and half-life.

$$\text{rate}=k[A]^m[B]^n,\qquad t_{1/2}=\frac{\ln 2}{k}\ \text{(first order)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 5: Kinetics** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Mole / gas law:** Mass, volume, pressure-temperature calculations.
- **Equilibrium ICE:** Find Q vs K or equilibrium concentrations.
- **Kinetics / thermo:** Rate laws, $\Delta H$, cell potential.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 5: Kinetics:

1. Balance the chemical equation if moles are involved.
2. Convert given data to moles or molarity.
3. Write the relevant law (gas, K, rate, Nernst).
4. Set up ICE table or substitution; solve for unknown.
5. Check significant figures and physical plausibility.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Pa or atm consistently in PV=nRT; R must match. Concentrations in mol/L for K; pressures in Kp if all gaseous.

Ideal gas at low P and high T; $Q=K$ at equilibrium. Zero order: rate independent of [A].

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using molarity in K without accounting for stoichiometric powers.
- Mixing Kc and Kp without conversion.
- Sign error on $\Delta G$ vs spontaneity.
- Confusing rate law order with coefficients.


**Study check for Unit 5: Kinetics.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Chemistry', 'Unit 6: Thermodynamics (Enthalpy Focus)'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 6: Thermodynamics (Enthalpy Focus)**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 6: Thermodynamics (Enthalpy Focus)** in AP Chemistry. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Hess's law / formation enthalpies.

$$\Delta H_{\mathrm{rxn}}=\sum n\Delta H_f^\circ(\text{prod})-\sum n\Delta H_f^\circ(\text{react})$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 6: Thermodynamics (Enthalpy Focus)** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Mole / gas law:** Mass, volume, pressure-temperature calculations.
- **Equilibrium ICE:** Find Q vs K or equilibrium concentrations.
- **Kinetics / thermo:** Rate laws, $\Delta H$, cell potential.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 6: Thermodynamics (Enthalpy Focus):

1. Balance the chemical equation if moles are involved.
2. Convert given data to moles or molarity.
3. Write the relevant law (gas, K, rate, Nernst).
4. Set up ICE table or substitution; solve for unknown.
5. Check significant figures and physical plausibility.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Pa or atm consistently in PV=nRT; R must match. Concentrations in mol/L for K; pressures in Kp if all gaseous.

Ideal gas at low P and high T; $Q=K$ at equilibrium. Zero order: rate independent of [A].

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using molarity in K without accounting for stoichiometric powers.
- Mixing Kc and Kp without conversion.
- Sign error on $\Delta G$ vs spontaneity.
- Confusing rate law order with coefficients.


**Study check for Unit 6: Thermodynamics (Enthalpy Focus).** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Chemistry', 'Unit 7: Equilibrium'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 7: Equilibrium**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 7: Equilibrium** in AP Chemistry. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Equilibrium constant and reaction quotient.

$$K=\frac{[\text{products}]^{\nu}}{[\text{reactants}]^{\nu}},\qquad Q\ \text{same form}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 7: Equilibrium** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Mole / gas law:** Mass, volume, pressure-temperature calculations.
- **Equilibrium ICE:** Find Q vs K or equilibrium concentrations.
- **Kinetics / thermo:** Rate laws, $\Delta H$, cell potential.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 7: Equilibrium:

1. Balance the chemical equation if moles are involved.
2. Convert given data to moles or molarity.
3. Write the relevant law (gas, K, rate, Nernst).
4. Set up ICE table or substitution; solve for unknown.
5. Check significant figures and physical plausibility.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Pa or atm consistently in PV=nRT; R must match. Concentrations in mol/L for K; pressures in Kp if all gaseous.

Ideal gas at low P and high T; $Q=K$ at equilibrium. Zero order: rate independent of [A].

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using molarity in K without accounting for stoichiometric powers.
- Mixing Kc and Kp without conversion.
- Sign error on $\Delta G$ vs spontaneity.
- Confusing rate law order with coefficients.


**Study check for Unit 7: Equilibrium.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Chemistry', 'Unit 8: Acids and Bases'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 8: Acids and Bases**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 8: Acids and Bases** in AP Chemistry. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Water autoionization and pH.

$$K_w=[H^+][OH^-]=10^{-14},\qquad \text{pH}=-\log[H^+]$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 8: Acids and Bases** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Mole / gas law:** Mass, volume, pressure-temperature calculations.
- **Equilibrium ICE:** Find Q vs K or equilibrium concentrations.
- **Kinetics / thermo:** Rate laws, $\Delta H$, cell potential.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 8: Acids and Bases:

1. Balance the chemical equation if moles are involved.
2. Convert given data to moles or molarity.
3. Write the relevant law (gas, K, rate, Nernst).
4. Set up ICE table or substitution; solve for unknown.
5. Check significant figures and physical plausibility.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Pa or atm consistently in PV=nRT; R must match. Concentrations in mol/L for K; pressures in Kp if all gaseous.

Ideal gas at low P and high T; $Q=K$ at equilibrium. Zero order: rate independent of [A].

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using molarity in K without accounting for stoichiometric powers.
- Mixing Kc and Kp without conversion.
- Sign error on $\Delta G$ vs spontaneity.
- Confusing rate law order with coefficients.


**Study check for Unit 8: Acids and Bases.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Chemistry', 'Unit 9: Thermodynamics And Electrochemistry'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 9: Thermodynamics And Electrochemistry**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 9: Thermodynamics And Electrochemistry** in AP Chemistry. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Spontaneity and standard cell potential.

$$\Delta G=\Delta H-T\Delta S,\qquad E^\circ_{\mathrm{cell}}=E^\circ_{\mathrm{cathode}}-E^\circ_{\mathrm{anode}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 9: Thermodynamics And Electrochemistry** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Mole / gas law:** Mass, volume, pressure-temperature calculations.
- **Equilibrium ICE:** Find Q vs K or equilibrium concentrations.
- **Kinetics / thermo:** Rate laws, $\Delta H$, cell potential.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 9: Thermodynamics And Electrochemistry:

1. Balance the chemical equation if moles are involved.
2. Convert given data to moles or molarity.
3. Write the relevant law (gas, K, rate, Nernst).
4. Set up ICE table or substitution; solve for unknown.
5. Check significant figures and physical plausibility.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Use Pa or atm consistently in PV=nRT; R must match. Concentrations in mol/L for K; pressures in Kp if all gaseous.

Ideal gas at low P and high T; $Q=K$ at equilibrium. Zero order: rate independent of [A].

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using molarity in K without accounting for stoichiometric powers.
- Mixing Kc and Kp without conversion.
- Sign error on $\Delta G$ vs spontaneity.
- Confusing rate law order with coefficients.


**Study check for Unit 9: Thermodynamics And Electrochemistry.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Biology', 'Unit 1: CHEMISTRY OF LIFE'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 1: CHEMISTRY OF LIFE**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 1: CHEMISTRY OF LIFE** in AP Biology. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Acid-base log scale and water potential components.

$$\text{pH}=-\log[H^+],\qquad \text{water potential}\ \Psi=\Psi_s+\Psi_p$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 1: CHEMISTRY OF LIFE** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Hardy–Weinberg:** Given allele or genotype frequencies; solve for carriers or heterozygotes.
- **Chi-square genetics:** Compare observed vs expected offspring ratios.
- **Log / growth:** Exponential or logistic population models when data are calculable.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 1: CHEMISTRY OF LIFE:

1. Identify whether the task is population genetics, energetics, or data analysis.
2. Write the governing equation and define each symbol biologically.
3. Substitute given frequencies or counts.
4. Compute the requested probability, ratio, or percent.
5. State biological meaning (e.g., carrier risk, energy loss as heat).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Frequencies are dimensionless (0–1). Energy flows use J or kcal/m²/yr in ecology contexts. Rates use per-generation or per-capita units as stated.

Hardy–Weinberg requires no selection, mutation, migration, large population, random mating. 10% rule: only ~10% energy transfers between trophic levels.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Squaring q when asked for heterozygote frequency (use $2pq$).
- Treating phenotype ratio as allele frequency without conversion.
- Ignoring degrees of freedom in chi-square.
- Confusing DNA replication counts with independent assortment probabilities.
""",
    ('AP Biology', 'Unit 2: CELLS'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 2: CELLS**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 2: CELLS** in AP Biology. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Surface-area-to-volume scaling in cells.

$$\text{SA:V ratio}=\frac{\text{surface area}}{\text{volume}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 2: CELLS** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Hardy–Weinberg:** Given allele or genotype frequencies; solve for carriers or heterozygotes.
- **Chi-square genetics:** Compare observed vs expected offspring ratios.
- **Log / growth:** Exponential or logistic population models when data are calculable.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 2: CELLS:

1. Identify whether the task is population genetics, energetics, or data analysis.
2. Write the governing equation and define each symbol biologically.
3. Substitute given frequencies or counts.
4. Compute the requested probability, ratio, or percent.
5. State biological meaning (e.g., carrier risk, energy loss as heat).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Frequencies are dimensionless (0–1). Energy flows use J or kcal/m²/yr in ecology contexts. Rates use per-generation or per-capita units as stated.

Hardy–Weinberg requires no selection, mutation, migration, large population, random mating. 10% rule: only ~10% energy transfers between trophic levels.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Squaring q when asked for heterozygote frequency (use $2pq$).
- Treating phenotype ratio as allele frequency without conversion.
- Ignoring degrees of freedom in chi-square.
- Confusing DNA replication counts with independent assortment probabilities.


**Study check for Unit 2: CELLS.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Biology', 'Unit 3: CELLULAR ENERGETICS'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 3: CELLULAR ENERGETICS**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 3: CELLULAR ENERGETICS** in AP Biology. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Free energy drives metabolic direction.

$$\text{ATP yield context: }\Delta G<0\ \text{for spontaneous catabolism}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 3: CELLULAR ENERGETICS** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Hardy–Weinberg:** Given allele or genotype frequencies; solve for carriers or heterozygotes.
- **Chi-square genetics:** Compare observed vs expected offspring ratios.
- **Log / growth:** Exponential or logistic population models when data are calculable.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 3: CELLULAR ENERGETICS:

1. Identify whether the task is population genetics, energetics, or data analysis.
2. Write the governing equation and define each symbol biologically.
3. Substitute given frequencies or counts.
4. Compute the requested probability, ratio, or percent.
5. State biological meaning (e.g., carrier risk, energy loss as heat).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Frequencies are dimensionless (0–1). Energy flows use J or kcal/m²/yr in ecology contexts. Rates use per-generation or per-capita units as stated.

Hardy–Weinberg requires no selection, mutation, migration, large population, random mating. 10% rule: only ~10% energy transfers between trophic levels.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Squaring q when asked for heterozygote frequency (use $2pq$).
- Treating phenotype ratio as allele frequency without conversion.
- Ignoring degrees of freedom in chi-square.
- Confusing DNA replication counts with independent assortment probabilities.
""",
    ('AP Biology', 'Unit 4: CELL COMMUNICATION AND CELL CYCLE'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 4: CELL COMMUNICATION AND CELL CYCLE**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 4: CELL COMMUNICATION AND CELL CYCLE** in AP Biology. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Fraction of cells in mitosis from samples.

$$\text{Mitotic index}=\frac{\text{mitotic cells}}{\text{total cells}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 4: CELL COMMUNICATION AND CELL CYCLE** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Hardy–Weinberg:** Given allele or genotype frequencies; solve for carriers or heterozygotes.
- **Chi-square genetics:** Compare observed vs expected offspring ratios.
- **Log / growth:** Exponential or logistic population models when data are calculable.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 4: CELL COMMUNICATION AND CELL CYCLE:

1. Identify whether the task is population genetics, energetics, or data analysis.
2. Write the governing equation and define each symbol biologically.
3. Substitute given frequencies or counts.
4. Compute the requested probability, ratio, or percent.
5. State biological meaning (e.g., carrier risk, energy loss as heat).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Frequencies are dimensionless (0–1). Energy flows use J or kcal/m²/yr in ecology contexts. Rates use per-generation or per-capita units as stated.

Hardy–Weinberg requires no selection, mutation, migration, large population, random mating. 10% rule: only ~10% energy transfers between trophic levels.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Squaring q when asked for heterozygote frequency (use $2pq$).
- Treating phenotype ratio as allele frequency without conversion.
- Ignoring degrees of freedom in chi-square.
- Confusing DNA replication counts with independent assortment probabilities.
""",
    ('AP Biology', 'Unit 5: HEREDITY'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 5: HEREDITY**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 5: HEREDITY** in AP Biology. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Hardy–Weinberg allele and genotype frequencies.

$$p+q=1,\qquad p^2+2pq+q^2=1$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 5: HEREDITY** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Hardy–Weinberg:** Given allele or genotype frequencies; solve for carriers or heterozygotes.
- **Chi-square genetics:** Compare observed vs expected offspring ratios.
- **Log / growth:** Exponential or logistic population models when data are calculable.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 5: HEREDITY:

1. Identify whether the task is population genetics, energetics, or data analysis.
2. Write the governing equation and define each symbol biologically.
3. Substitute given frequencies or counts.
4. Compute the requested probability, ratio, or percent.
5. State biological meaning (e.g., carrier risk, energy loss as heat).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Frequencies are dimensionless (0–1). Energy flows use J or kcal/m²/yr in ecology contexts. Rates use per-generation or per-capita units as stated.

Hardy–Weinberg requires no selection, mutation, migration, large population, random mating. 10% rule: only ~10% energy transfers between trophic levels.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Squaring q when asked for heterozygote frequency (use $2pq$).
- Treating phenotype ratio as allele frequency without conversion.
- Ignoring degrees of freedom in chi-square.
- Confusing DNA replication counts with independent assortment probabilities.


**Study check for Unit 5: HEREDITY.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Biology', 'Unit 6: GENE EXPRESSION AND REGULATION'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 6: GENE EXPRESSION AND REGULATION**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 6: GENE EXPRESSION AND REGULATION** in AP Biology. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Gamete diversity for n heterozygous loci (independent).

$$\text{Probability independent assortment}=\left(\frac12\right)^n$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 6: GENE EXPRESSION AND REGULATION** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Hardy–Weinberg:** Given allele or genotype frequencies; solve for carriers or heterozygotes.
- **Chi-square genetics:** Compare observed vs expected offspring ratios.
- **Log / growth:** Exponential or logistic population models when data are calculable.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 6: GENE EXPRESSION AND REGULATION:

1. Identify whether the task is population genetics, energetics, or data analysis.
2. Write the governing equation and define each symbol biologically.
3. Substitute given frequencies or counts.
4. Compute the requested probability, ratio, or percent.
5. State biological meaning (e.g., carrier risk, energy loss as heat).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Frequencies are dimensionless (0–1). Energy flows use J or kcal/m²/yr in ecology contexts. Rates use per-generation or per-capita units as stated.

Hardy–Weinberg requires no selection, mutation, migration, large population, random mating. 10% rule: only ~10% energy transfers between trophic levels.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Squaring q when asked for heterozygote frequency (use $2pq$).
- Treating phenotype ratio as allele frequency without conversion.
- Ignoring degrees of freedom in chi-square.
- Confusing DNA replication counts with independent assortment probabilities.
""",
    ('AP Biology', 'Unit 7: NATURAL SELECTION'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 7: NATURAL SELECTION**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 7: NATURAL SELECTION** in AP Biology. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Selection change in allele frequency (simplified form).

$$\Delta p=\frac{p(1-p)(s_1-s_2)}{1-\bar s}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 7: NATURAL SELECTION** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Hardy–Weinberg:** Given allele or genotype frequencies; solve for carriers or heterozygotes.
- **Chi-square genetics:** Compare observed vs expected offspring ratios.
- **Log / growth:** Exponential or logistic population models when data are calculable.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 7: NATURAL SELECTION:

1. Identify whether the task is population genetics, energetics, or data analysis.
2. Write the governing equation and define each symbol biologically.
3. Substitute given frequencies or counts.
4. Compute the requested probability, ratio, or percent.
5. State biological meaning (e.g., carrier risk, energy loss as heat).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Frequencies are dimensionless (0–1). Energy flows use J or kcal/m²/yr in ecology contexts. Rates use per-generation or per-capita units as stated.

Hardy–Weinberg requires no selection, mutation, migration, large population, random mating. 10% rule: only ~10% energy transfers between trophic levels.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Squaring q when asked for heterozygote frequency (use $2pq$).
- Treating phenotype ratio as allele frequency without conversion.
- Ignoring degrees of freedom in chi-square.
- Confusing DNA replication counts with independent assortment probabilities.
""",
    ('AP Biology', 'Unit 8: ECOLOGY'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 8: ECOLOGY**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 8: ECOLOGY** in AP Biology. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Trophic transfer efficiency.

$$\text{Efficiency}=\frac{E_{\mathrm{next}}}{E_{\mathrm{prev}}}\times100\%$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 8: ECOLOGY** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Hardy–Weinberg:** Given allele or genotype frequencies; solve for carriers or heterozygotes.
- **Chi-square genetics:** Compare observed vs expected offspring ratios.
- **Log / growth:** Exponential or logistic population models when data are calculable.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 8: ECOLOGY:

1. Identify whether the task is population genetics, energetics, or data analysis.
2. Write the governing equation and define each symbol biologically.
3. Substitute given frequencies or counts.
4. Compute the requested probability, ratio, or percent.
5. State biological meaning (e.g., carrier risk, energy loss as heat).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Frequencies are dimensionless (0–1). Energy flows use J or kcal/m²/yr in ecology contexts. Rates use per-generation or per-capita units as stated.

Hardy–Weinberg requires no selection, mutation, migration, large population, random mating. 10% rule: only ~10% energy transfers between trophic levels.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Squaring q when asked for heterozygote frequency (use $2pq$).
- Treating phenotype ratio as allele frequency without conversion.
- Ignoring degrees of freedom in chi-square.
- Confusing DNA replication counts with independent assortment probabilities.


**Study check for Unit 8: ECOLOGY.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Environmental Science', 'Unit 1: The Living World: Ecosystems'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 1: The Living World: Ecosystems**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 1: The Living World: Ecosystems** in AP Environmental Science. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Productivity and trophic efficiency.

$$\mathrm{NPP}=\mathrm{GPP}-R,\qquad \text{efficiency}=\frac{E_{\mathrm{higher}}}{E_{\mathrm{lower}}}\times100\%$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 1: The Living World: Ecosystems** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Population growth:** Percent growth rate, doubling time, per capita impact ($I=PAT$).
- **Energy / efficiency:** Productivity, trophic transfer, EROEI when numeric.
- **Pollution / water:** Dilution, ppm/ppb conversions, BOD-related comparisons.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 1: The Living World: Ecosystems:

1. Identify the system (population, ecosystem, energy source, pollutant).
2. Select the APES formula matching the prompt's units.
3. Convert percent to decimal when using growth formulas.
4. Compute and interpret in environmental context.
5. Note one assumption (e.g., constant r, ideal dilution).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Growth rate r often in percent per year; productivity in energy/area/time. Concentrations may be ppm (mg/kg or mg/L depending on context—read carefully).

Rule of 70 accurate for small r; fails for very large growth. Zero waste $\Rightarrow$ no concentration increase.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using arithmetic mean on exponential growth data.
- Confusing GPP with NPP available to consumers.
- Mixing ppm by mass vs by volume.
- Forgetting that efficiency cannot exceed 100%.
""",
    ('AP Environmental Science', 'Unit 2: The Living World: Biodiversity'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 2: The Living World: Biodiversity**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 2: The Living World: Biodiversity** in AP Environmental Science. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Diversity indices when data provided.

$$H'=-\sum p_i\ln p_i\ \text{(Shannon, qualitative use)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 2: The Living World: Biodiversity** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Population growth:** Percent growth rate, doubling time, per capita impact ($I=PAT$).
- **Energy / efficiency:** Productivity, trophic transfer, EROEI when numeric.
- **Pollution / water:** Dilution, ppm/ppb conversions, BOD-related comparisons.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 2: The Living World: Biodiversity:

1. Identify the system (population, ecosystem, energy source, pollutant).
2. Select the APES formula matching the prompt's units.
3. Convert percent to decimal when using growth formulas.
4. Compute and interpret in environmental context.
5. Note one assumption (e.g., constant r, ideal dilution).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Growth rate r often in percent per year; productivity in energy/area/time. Concentrations may be ppm (mg/kg or mg/L depending on context—read carefully).

Rule of 70 accurate for small r; fails for very large growth. Zero waste $\Rightarrow$ no concentration increase.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using arithmetic mean on exponential growth data.
- Confusing GPP with NPP available to consumers.
- Mixing ppm by mass vs by volume.
- Forgetting that efficiency cannot exceed 100%.


**Study check for Unit 2: The Living World: Biodiversity.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Environmental Science', 'Unit 3: Populations'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 3: Populations**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 3: Populations** in AP Environmental Science. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Population growth approximations.

$$t_{\mathrm{double}}\approx\frac{70}{r},\qquad r\approx\frac{\mathrm{CBR}-\mathrm{CDR}}{10}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 3: Populations** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Population growth:** Percent growth rate, doubling time, per capita impact ($I=PAT$).
- **Energy / efficiency:** Productivity, trophic transfer, EROEI when numeric.
- **Pollution / water:** Dilution, ppm/ppb conversions, BOD-related comparisons.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 3: Populations:

1. Identify the system (population, ecosystem, energy source, pollutant).
2. Select the APES formula matching the prompt's units.
3. Convert percent to decimal when using growth formulas.
4. Compute and interpret in environmental context.
5. Note one assumption (e.g., constant r, ideal dilution).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Growth rate r often in percent per year; productivity in energy/area/time. Concentrations may be ppm (mg/kg or mg/L depending on context—read carefully).

Rule of 70 accurate for small r; fails for very large growth. Zero waste $\Rightarrow$ no concentration increase.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using arithmetic mean on exponential growth data.
- Confusing GPP with NPP available to consumers.
- Mixing ppm by mass vs by volume.
- Forgetting that efficiency cannot exceed 100%.


**Study check for Unit 3: Populations.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Environmental Science', 'Unit 4: Earth Systems And Resources'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 4: Earth Systems And Resources**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 4: Earth Systems And Resources** in AP Environmental Science. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Turnover time for reservoirs.

$$\text{Residence time}=\frac{\text{reservoir size}}{\text{flux rate}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 4: Earth Systems And Resources** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Population growth:** Percent growth rate, doubling time, per capita impact ($I=PAT$).
- **Energy / efficiency:** Productivity, trophic transfer, EROEI when numeric.
- **Pollution / water:** Dilution, ppm/ppb conversions, BOD-related comparisons.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 4: Earth Systems And Resources:

1. Identify the system (population, ecosystem, energy source, pollutant).
2. Select the APES formula matching the prompt's units.
3. Convert percent to decimal when using growth formulas.
4. Compute and interpret in environmental context.
5. Note one assumption (e.g., constant r, ideal dilution).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Growth rate r often in percent per year; productivity in energy/area/time. Concentrations may be ppm (mg/kg or mg/L depending on context—read carefully).

Rule of 70 accurate for small r; fails for very large growth. Zero waste $\Rightarrow$ no concentration increase.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using arithmetic mean on exponential growth data.
- Confusing GPP with NPP available to consumers.
- Mixing ppm by mass vs by volume.
- Forgetting that efficiency cannot exceed 100%.


**Study check for Unit 4: Earth Systems And Resources.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Environmental Science', 'Unit 5: Land And Water Use'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 5: Land And Water Use**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 5: Land And Water Use** in AP Environmental Science. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Human impact model.

$$I=P\times A\times T$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 5: Land And Water Use** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Population growth:** Percent growth rate, doubling time, per capita impact ($I=PAT$).
- **Energy / efficiency:** Productivity, trophic transfer, EROEI when numeric.
- **Pollution / water:** Dilution, ppm/ppb conversions, BOD-related comparisons.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 5: Land And Water Use:

1. Identify the system (population, ecosystem, energy source, pollutant).
2. Select the APES formula matching the prompt's units.
3. Convert percent to decimal when using growth formulas.
4. Compute and interpret in environmental context.
5. Note one assumption (e.g., constant r, ideal dilution).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Growth rate r often in percent per year; productivity in energy/area/time. Concentrations may be ppm (mg/kg or mg/L depending on context—read carefully).

Rule of 70 accurate for small r; fails for very large growth. Zero waste $\Rightarrow$ no concentration increase.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using arithmetic mean on exponential growth data.
- Confusing GPP with NPP available to consumers.
- Mixing ppm by mass vs by volume.
- Forgetting that efficiency cannot exceed 100%.


**Study check for Unit 5: Land And Water Use.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Environmental Science', 'Unit 6: Energy Resources And Consumption'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 6: Energy Resources And Consumption**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 6: Energy Resources And Consumption** in AP Environmental Science. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Energy return on investment.

$$\text{EROEI}=\frac{\text{energy returned}}{\text{energy invested}}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 6: Energy Resources And Consumption** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Population growth:** Percent growth rate, doubling time, per capita impact ($I=PAT$).
- **Energy / efficiency:** Productivity, trophic transfer, EROEI when numeric.
- **Pollution / water:** Dilution, ppm/ppb conversions, BOD-related comparisons.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 6: Energy Resources And Consumption:

1. Identify the system (population, ecosystem, energy source, pollutant).
2. Select the APES formula matching the prompt's units.
3. Convert percent to decimal when using growth formulas.
4. Compute and interpret in environmental context.
5. Note one assumption (e.g., constant r, ideal dilution).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Growth rate r often in percent per year; productivity in energy/area/time. Concentrations may be ppm (mg/kg or mg/L depending on context—read carefully).

Rule of 70 accurate for small r; fails for very large growth. Zero waste $\Rightarrow$ no concentration increase.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using arithmetic mean on exponential growth data.
- Confusing GPP with NPP available to consumers.
- Mixing ppm by mass vs by volume.
- Forgetting that efficiency cannot exceed 100%.


**Study check for Unit 6: Energy Resources And Consumption.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Environmental Science', 'Unit 7: Atmospheric Pollution'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 7: Atmospheric Pollution**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 7: Atmospheric Pollution** in AP Environmental Science. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Concentration units.

$$\text{ppm}=\frac{\text{mg pollutant}}{\text{kg or L medium}}\times10^6$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 7: Atmospheric Pollution** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Population growth:** Percent growth rate, doubling time, per capita impact ($I=PAT$).
- **Energy / efficiency:** Productivity, trophic transfer, EROEI when numeric.
- **Pollution / water:** Dilution, ppm/ppb conversions, BOD-related comparisons.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 7: Atmospheric Pollution:

1. Identify the system (population, ecosystem, energy source, pollutant).
2. Select the APES formula matching the prompt's units.
3. Convert percent to decimal when using growth formulas.
4. Compute and interpret in environmental context.
5. Note one assumption (e.g., constant r, ideal dilution).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Growth rate r often in percent per year; productivity in energy/area/time. Concentrations may be ppm (mg/kg or mg/L depending on context—read carefully).

Rule of 70 accurate for small r; fails for very large growth. Zero waste $\Rightarrow$ no concentration increase.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using arithmetic mean on exponential growth data.
- Confusing GPP with NPP available to consumers.
- Mixing ppm by mass vs by volume.
- Forgetting that efficiency cannot exceed 100%.


**Study check for Unit 7: Atmospheric Pollution.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Environmental Science', 'Unit 8: Aquatic And Terrestrial Pollution'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 8: Aquatic And Terrestrial Pollution**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 8: Aquatic And Terrestrial Pollution** in AP Environmental Science. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Dilution and oxygen demand metrics.

$$C_1V_1=C_2V_2,\qquad \text{BOD}\ \text{mg/L}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 8: Aquatic And Terrestrial Pollution** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Population growth:** Percent growth rate, doubling time, per capita impact ($I=PAT$).
- **Energy / efficiency:** Productivity, trophic transfer, EROEI when numeric.
- **Pollution / water:** Dilution, ppm/ppb conversions, BOD-related comparisons.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 8: Aquatic And Terrestrial Pollution:

1. Identify the system (population, ecosystem, energy source, pollutant).
2. Select the APES formula matching the prompt's units.
3. Convert percent to decimal when using growth formulas.
4. Compute and interpret in environmental context.
5. Note one assumption (e.g., constant r, ideal dilution).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Growth rate r often in percent per year; productivity in energy/area/time. Concentrations may be ppm (mg/kg or mg/L depending on context—read carefully).

Rule of 70 accurate for small r; fails for very large growth. Zero waste $\Rightarrow$ no concentration increase.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using arithmetic mean on exponential growth data.
- Confusing GPP with NPP available to consumers.
- Mixing ppm by mass vs by volume.
- Forgetting that efficiency cannot exceed 100%.


**Study check for Unit 8: Aquatic And Terrestrial Pollution.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Environmental Science', 'Unit 9: Global Change'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 9: Global Change**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 9: Global Change** in AP Environmental Science. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Climate change quantitative when data supplied.

$$\Delta T\ \text{from radiative forcing models (qualitative + given constants)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 9: Global Change** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Population growth:** Percent growth rate, doubling time, per capita impact ($I=PAT$).
- **Energy / efficiency:** Productivity, trophic transfer, EROEI when numeric.
- **Pollution / water:** Dilution, ppm/ppb conversions, BOD-related comparisons.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 9: Global Change:

1. Identify the system (population, ecosystem, energy source, pollutant).
2. Select the APES formula matching the prompt's units.
3. Convert percent to decimal when using growth formulas.
4. Compute and interpret in environmental context.
5. Note one assumption (e.g., constant r, ideal dilution).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Growth rate r often in percent per year; productivity in energy/area/time. Concentrations may be ppm (mg/kg or mg/L depending on context—read carefully).

Rule of 70 accurate for small r; fails for very large growth. Zero waste $\Rightarrow$ no concentration increase.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using arithmetic mean on exponential growth data.
- Confusing GPP with NPP available to consumers.
- Mixing ppm by mass vs by volume.
- Forgetting that efficiency cannot exceed 100%.


**Study check for Unit 9: Global Change.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Macroeconomics', 'AP Macroeconomics — Units 1–3'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **AP Macroeconomics — Units 1–3**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **AP Macroeconomics — Units 1–3** in AP Macroeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Real vs nominal adjustment.

$$\text{Real GDP}=\frac{\text{Nominal GDP}}{\text{GDP deflator}}\times100$$

## 2. When to use each form

Select the form that isolates the unknown in **AP Macroeconomics — Units 1–3** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **GDP / price index:** Nominal vs real using GDP deflator or CPI.
- **Multiplier:** Change in GDP from ΔG or ΔI given MPC or MPS.
- **International:** Balance of payments, exchange rate impacts (qual + numeric).

## 3. Step-by-step substitution template

Follow this template on AP problems involving AP Macroeconomics — Units 1–3:

1. Identify whether the question is real/nominal, multiplier, or labor market.
2. Write the macro identity with labeled components.
3. Substitute given MPC, MPS, or price index values.
4. Compute change or level; state direction of effect.
5. Connect to AD–AS or financial sector if FRQ asks for graph logic.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

GDP in dollars; rates in percent. Multipliers are dimensionless. Real values remove inflation via $\text{Real}=\text{Nominal}/\text{Price index}\times100$.

Multiplier upper bound when MPC$	o1$. At full employment, fiscal stimulus raises price level more than real output.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using MPC and MPS that do not sum to 1.
- Confusing nominal and real interest rates.
- Treating trade deficit as always reducing GDP without NX definition.
- Applying money multiplier when banks hold excess reserves.
""",
    ('AP Macroeconomics', 'Basic Macroeconomic Concepts'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Basic Macroeconomic Concepts**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Basic Macroeconomic Concepts** in AP Macroeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Expenditure approach to GDP.

$$\text{GDP}=\text{C}+\text{I}+\text{G}+\text{NX}$$

## 2. When to use each form

Select the form that isolates the unknown in **Basic Macroeconomic Concepts** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **GDP / price index:** Nominal vs real using GDP deflator or CPI.
- **Multiplier:** Change in GDP from ΔG or ΔI given MPC or MPS.
- **International:** Balance of payments, exchange rate impacts (qual + numeric).

## 3. Step-by-step substitution template

Follow this template on AP problems involving Basic Macroeconomic Concepts:

1. Identify whether the question is real/nominal, multiplier, or labor market.
2. Write the macro identity with labeled components.
3. Substitute given MPC, MPS, or price index values.
4. Compute change or level; state direction of effect.
5. Connect to AD–AS or financial sector if FRQ asks for graph logic.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

GDP in dollars; rates in percent. Multipliers are dimensionless. Real values remove inflation via $\text{Real}=\text{Nominal}/\text{Price index}\times100$.

Multiplier upper bound when MPC$	o1$. At full employment, fiscal stimulus raises price level more than real output.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using MPC and MPS that do not sum to 1.
- Confusing nominal and real interest rates.
- Treating trade deficit as always reducing GDP without NX definition.
- Applying money multiplier when banks hold excess reserves.
""",
    ('AP Macroeconomics', 'Economic Indicators and the Business Cycle'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Economic Indicators and the Business Cycle**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Economic Indicators and the Business Cycle** in AP Macroeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Labor and price indicators.

$$\text{Unemployment}=\frac{U}{LF}\times100\%,\qquad \text{CPI inflation}=\frac{CPI_t-CPI_{t-1}}{CPI_{t-1}}\times100\%$$

## 2. When to use each form

Select the form that isolates the unknown in **Economic Indicators and the Business Cycle** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **GDP / price index:** Nominal vs real using GDP deflator or CPI.
- **Multiplier:** Change in GDP from ΔG or ΔI given MPC or MPS.
- **International:** Balance of payments, exchange rate impacts (qual + numeric).

## 3. Step-by-step substitution template

Follow this template on AP problems involving Economic Indicators and the Business Cycle:

1. Identify whether the question is real/nominal, multiplier, or labor market.
2. Write the macro identity with labeled components.
3. Substitute given MPC, MPS, or price index values.
4. Compute change or level; state direction of effect.
5. Connect to AD–AS or financial sector if FRQ asks for graph logic.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

GDP in dollars; rates in percent. Multipliers are dimensionless. Real values remove inflation via $\text{Real}=\text{Nominal}/\text{Price index}\times100$.

Multiplier upper bound when MPC$	o1$. At full employment, fiscal stimulus raises price level more than real output.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using MPC and MPS that do not sum to 1.
- Confusing nominal and real interest rates.
- Treating trade deficit as always reducing GDP without NX definition.
- Applying money multiplier when banks hold excess reserves.
""",
    ('AP Macroeconomics', 'Long-Run Consequences of Stabilization Policies'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Long-Run Consequences of Stabilization Policies**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Long-Run Consequences of Stabilization Policies** in AP Macroeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Phillips curve form (qualitative/numeric when given).

$$\pi=\pi_e-\beta(u-u_n)+\text{shocks}$$

## 2. When to use each form

Select the form that isolates the unknown in **Long-Run Consequences of Stabilization Policies** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **GDP / price index:** Nominal vs real using GDP deflator or CPI.
- **Multiplier:** Change in GDP from ΔG or ΔI given MPC or MPS.
- **International:** Balance of payments, exchange rate impacts (qual + numeric).

## 3. Step-by-step substitution template

Follow this template on AP problems involving Long-Run Consequences of Stabilization Policies:

1. Identify whether the question is real/nominal, multiplier, or labor market.
2. Write the macro identity with labeled components.
3. Substitute given MPC, MPS, or price index values.
4. Compute change or level; state direction of effect.
5. Connect to AD–AS or financial sector if FRQ asks for graph logic.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

GDP in dollars; rates in percent. Multipliers are dimensionless. Real values remove inflation via $\text{Real}=\text{Nominal}/\text{Price index}\times100$.

Multiplier upper bound when MPC$	o1$. At full employment, fiscal stimulus raises price level more than real output.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using MPC and MPS that do not sum to 1.
- Confusing nominal and real interest rates.
- Treating trade deficit as always reducing GDP without NX definition.
- Applying money multiplier when banks hold excess reserves.
""",
    ('AP Macroeconomics', 'National Income, AD–AS, and Fiscal Multipliers'): r"""## Formula Walkthrough


Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **National Income, AD–AS, and Fiscal Multipliers**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **National Income, AD–AS, and Fiscal Multipliers** in AP Macroeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Fiscal policy output change.

$$\text{Multiplier}=\frac{1}{1-\text{MPC}},\qquad \Delta Y=\text{multiplier}\times\Delta G$$

## 2. When to use each form

Select the form that isolates the unknown in **National Income, AD–AS, and Fiscal Multipliers** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **GDP / price index:** Nominal vs real using GDP deflator or CPI.
- **Multiplier:** Change in GDP from ΔG or ΔI given MPC or MPS.
- **International:** Balance of payments, exchange rate impacts (qual + numeric).

## 3. Step-by-step substitution template

Follow this template on AP problems involving National Income, AD–AS, and Fiscal Multipliers:

1. Identify whether the question is real/nominal, multiplier, or labor market.
2. Write the macro identity with labeled components.
3. Substitute given MPC, MPS, or price index values.
4. Compute change or level; state direction of effect.
5. Connect to AD–AS or financial sector if FRQ asks for graph logic.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

GDP in dollars; rates in percent. Multipliers are dimensionless. Real values remove inflation via $\text{Real}=\text{Nominal}/\text{Price index}\times100$.

Multiplier upper bound when MPC$	o1$. At full employment, fiscal stimulus raises price level more than real output.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using MPC and MPS that do not sum to 1.
- Confusing nominal and real interest rates.
- Treating trade deficit as always reducing GDP without NX definition.
- Applying money multiplier when banks hold excess reserves.
""",
    ('AP Macroeconomics', 'Open Economy—International Trade and Finance'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Open Economy—International Trade and Finance**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Open Economy—International Trade and Finance** in AP Macroeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Net exports and balance of payments identity.

$$\text{NX}=\text{Exports}-\text{Imports},\qquad \text{CA}+\text{KA}=0$$

## 2. When to use each form

Select the form that isolates the unknown in **Open Economy—International Trade and Finance** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **GDP / price index:** Nominal vs real using GDP deflator or CPI.
- **Multiplier:** Change in GDP from ΔG or ΔI given MPC or MPS.
- **International:** Balance of payments, exchange rate impacts (qual + numeric).

## 3. Step-by-step substitution template

Follow this template on AP problems involving Open Economy—International Trade and Finance:

1. Identify whether the question is real/nominal, multiplier, or labor market.
2. Write the macro identity with labeled components.
3. Substitute given MPC, MPS, or price index values.
4. Compute change or level; state direction of effect.
5. Connect to AD–AS or financial sector if FRQ asks for graph logic.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

GDP in dollars; rates in percent. Multipliers are dimensionless. Real values remove inflation via $\text{Real}=\text{Nominal}/\text{Price index}\times100$.

Multiplier upper bound when MPC$	o1$. At full employment, fiscal stimulus raises price level more than real output.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using MPC and MPS that do not sum to 1.
- Confusing nominal and real interest rates.
- Treating trade deficit as always reducing GDP without NX definition.
- Applying money multiplier when banks hold excess reserves.
""",
    ('AP Macroeconomics', 'Unit 4: Financial Sector'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Unit 4: Financial Sector**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Unit 4: Financial Sector** in AP Macroeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Banking multiplier and Fisher equation approximation.

$$\text{Money multiplier}=\frac{1}{\text{rr}},\qquad i_{\mathrm{real}}\approx i_{\mathrm{nom}}-\pi$$

## 2. When to use each form

Select the form that isolates the unknown in **Unit 4: Financial Sector** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **GDP / price index:** Nominal vs real using GDP deflator or CPI.
- **Multiplier:** Change in GDP from ΔG or ΔI given MPC or MPS.
- **International:** Balance of payments, exchange rate impacts (qual + numeric).

## 3. Step-by-step substitution template

Follow this template on AP problems involving Unit 4: Financial Sector:

1. Identify whether the question is real/nominal, multiplier, or labor market.
2. Write the macro identity with labeled components.
3. Substitute given MPC, MPS, or price index values.
4. Compute change or level; state direction of effect.
5. Connect to AD–AS or financial sector if FRQ asks for graph logic.

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

GDP in dollars; rates in percent. Multipliers are dimensionless. Real values remove inflation via $\text{Real}=\text{Nominal}/\text{Price index}\times100$.

Multiplier upper bound when MPC$	o1$. At full employment, fiscal stimulus raises price level more than real output.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using MPC and MPS that do not sum to 1.
- Confusing nominal and real interest rates.
- Treating trade deficit as always reducing GDP without NX definition.
- Applying money multiplier when banks hold excess reserves.
""",
    ('AP Microeconomics', 'Basic Concepts, Supply and Demand, and Perfect Competition'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Basic Concepts, Supply and Demand, and Perfect Competition**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Basic Concepts, Supply and Demand, and Perfect Competition** in AP Microeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Elasticity and long-run competitive condition.

$$E_d=\frac{\%\Delta Q}{\%\Delta P},\qquad P=MC\ \text{(LR competitive equilibrium)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Basic Concepts, Supply and Demand, and Perfect Competition** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Elasticity:** Responsiveness of Q to price or income changes.
- **Surplus / tax:** CS, PS, deadweight loss from triangles/trapezoids.
- **Factor market:** MRP = MPL × P for labor demand under competition.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Basic Concepts, Supply and Demand, and Perfect Competition:

1. Locate market structure (perfect competition, monopoly, etc.).
2. Write profit condition MR=MC or MRP=MFC for factors.
3. Compute elasticity or surplus areas with labeled base/height.
4. Interpret sign (elastic vs inelastic; positive vs negative externality).
5. Relate to efficiency (P=MC in perfect competition long run).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Elasticity is unitless (percent changes). Surplus in dollar terms (price × quantity). Marginal products carry output per input unit.

Perfectly inelastic demand: $E_d=0$. Long-run competitive firms earn zero economic profit at P=min ATC.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using price instead of marginal revenue for a monopolist.
- Confusing accounting profit with economic profit (opportunity cost).
- Drawing DWL from wrong quantity (not where MC=MB).
- Mixing up MPL and MRP when hiring labor.
""",
    ('AP Microeconomics', 'Factor Markets'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Factor Markets**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Factor Markets** in AP Microeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Derived demand for labor.

$$MRP=MPL\times P,\qquad MRC=w\ \text{(competitive labor)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Factor Markets** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Elasticity:** Responsiveness of Q to price or income changes.
- **Surplus / tax:** CS, PS, deadweight loss from triangles/trapezoids.
- **Factor market:** MRP = MPL × P for labor demand under competition.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Factor Markets:

1. Locate market structure (perfect competition, monopoly, etc.).
2. Write profit condition MR=MC or MRP=MFC for factors.
3. Compute elasticity or surplus areas with labeled base/height.
4. Interpret sign (elastic vs inelastic; positive vs negative externality).
5. Relate to efficiency (P=MC in perfect competition long run).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Elasticity is unitless (percent changes). Surplus in dollar terms (price × quantity). Marginal products carry output per input unit.

Perfectly inelastic demand: $E_d=0$. Long-run competitive firms earn zero economic profit at P=min ATC.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using price instead of marginal revenue for a monopolist.
- Confusing accounting profit with economic profit (opportunity cost).
- Drawing DWL from wrong quantity (not where MC=MB).
- Mixing up MPL and MRP when hiring labor.


**Study check for Factor Markets.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Microeconomics', 'Imperfect Competition'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Imperfect Competition**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Imperfect Competition** in AP Microeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Profit max for monopoly with elasticity link.

$$MR=MC,\qquad MR=P\left(1+\frac1{E_d}\right)\ \text{(monopoly)}$$

## 2. When to use each form

Select the form that isolates the unknown in **Imperfect Competition** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Elasticity:** Responsiveness of Q to price or income changes.
- **Surplus / tax:** CS, PS, deadweight loss from triangles/trapezoids.
- **Factor market:** MRP = MPL × P for labor demand under competition.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Imperfect Competition:

1. Locate market structure (perfect competition, monopoly, etc.).
2. Write profit condition MR=MC or MRP=MFC for factors.
3. Compute elasticity or surplus areas with labeled base/height.
4. Interpret sign (elastic vs inelastic; positive vs negative externality).
5. Relate to efficiency (P=MC in perfect competition long run).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Elasticity is unitless (percent changes). Surplus in dollar terms (price × quantity). Marginal products carry output per input unit.

Perfectly inelastic demand: $E_d=0$. Long-run competitive firms earn zero economic profit at P=min ATC.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using price instead of marginal revenue for a monopolist.
- Confusing accounting profit with economic profit (opportunity cost).
- Drawing DWL from wrong quantity (not where MC=MB).
- Mixing up MPL and MRP when hiring labor.


**Study check for Imperfect Competition.** Restate each governing relationship in words, identify which given value maps to which symbol, and predict whether the unknown should increase or decrease if one input doubles. That prediction catches most sign and unit errors before you submit a final numeric answer on an AP free-response.
""",
    ('AP Microeconomics', 'Market Failure and the Role of Government'): r"""## Formula Walkthrough


Compare your result to a familiar benchmark (order of magnitude, special case, or symmetry argument) before boxing the final answer.

Keep assumptions explicit: idealizations, steady state, uniform fields, and whether quantities are instantaneous or average values change which form is valid.

After solving, ask whether the sign, magnitude, and direction (if vector) match the physical story of the prompt. If the item is multi-step, carry intermediate results with extra significant figures and round only at the end.

When reviewing **Market Failure and the Role of Government**, rewrite each given quantity with symbol, numeric value, and unit before substitution. AP readers award partial credit for correct setup even when arithmetic fails, so label each line and keep SI units visible through the solution.
This walkthrough organizes the calculable relationships for **Market Failure and the Role of Government** in AP Microeconomics. Use it when an AP free-response or multiple-choice item asks you to compute a numeric result, compare two scenarios symbolically, or justify a prediction from a governing equation.

## 1. Governing relationships (LaTeX)

**Primary.** Deadweight loss from triangle area.

$$\text{DWL}=\tfrac12|Q_{\mathrm{eff}}-Q_{\mathrm{mkt}}|\times|\Delta P|$$

## 2. When to use each form

Select the form that isolates the unknown in **Market Failure and the Role of Government** with the fewest extra assumptions. If the prompt gives a diagram, translate it to symbols before picking an equation.

- **Elasticity:** Responsiveness of Q to price or income changes.
- **Surplus / tax:** CS, PS, deadweight loss from triangles/trapezoids.
- **Factor market:** MRP = MPL × P for labor demand under competition.

## 3. Step-by-step substitution template

Follow this template on AP problems involving Market Failure and the Role of Government:

1. Locate market structure (perfect competition, monopoly, etc.).
2. Write profit condition MR=MC or MRP=MFC for factors.
3. Compute elasticity or surplus areas with labeled base/height.
4. Interpret sign (elastic vs inelastic; positive vs negative externality).
5. Relate to efficiency (P=MC in perfect competition long run).

Write the substituted equation once with symbols, then a second line with numbers and units. Cancel units explicitly in the margin when the algebra is nontrivial.

## 4. Unit check and limiting case

Elasticity is unitless (percent changes). Surplus in dollar terms (price × quantity). Marginal products carry output per input unit.

Perfectly inelastic demand: $E_d=0$. Long-run competitive firms earn zero economic profit at P=min ATC.

Reconcile the limiting case with the prompt: does the answer grow, vanish, or approach a known constant when a parameter becomes very small or very large?

## 5. Common algebra traps

- Using price instead of marginal revenue for a monopolist.
- Confusing accounting profit with economic profit (opportunity cost).
- Drawing DWL from wrong quantity (not where MC=MB).
- Mixing up MPL and MRP when hiring labor.
""",
}


if __name__ == '__main__':
    print(len(WAVE5_FORMULA_WALK))
