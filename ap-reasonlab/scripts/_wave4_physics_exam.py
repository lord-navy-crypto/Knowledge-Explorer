"""
Wave 4 Exam Application Lab blocks for AP Physics 1, AP Physics 2,
AP Physics C: Mechanics, and AP Physics C: E&M.

Maps (subject, title) -> markdown starting with ## Exam Application Lab.
Titles use exact Unicode from managed-content.json.
"""

WAVE4_PHYSICS_EXAM = {
    ('AP Physics 1', 'Bernoulli’s Equation'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Stems place a horizontal pipe, a Venturi throat, or a tank with a small hole and ask for speed, pressure, or height difference. Ranking tasks compare speeds at two cross-sections when volume flow is steady. Multi-part FRQs combine continuity with Bernoulli and sometimes hydrostatic pressure at a free surface. MCQ traps swap static head for dynamic head or ignore that Bernoulli needs inviscid, steady, incompressible flow along a streamline.

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Continuity: $A_1 v_1 = A_2 v_2$. Bernoulli along a horizontal streamline: $P_1 + \tfrac{1}{2}\rho v_1^2 = P_2 + \tfrac{1}{2}\rho v_2^2$. With height change: $P_1 + \tfrac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \tfrac{1}{2}\rho v_2^2 + \rho g h_2$. Torricelli efflux from depth $h$: $v = \sqrt{2gh}$ when the tank is wide and the hole is small.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

State steady flow, incompressible fluid, non-viscous fluid, and that points lie on the same streamline (or the pipe is horizontal if you drop the $\rho g h$ terms). For Torricelli, add that the tank cross-section is much larger than the hole. If the stem mentions turbulence or a viscous oil, Bernoulli is not the primary model.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A garden hose with inner radius $4.0\,\mathrm{mm}$ feeds a nozzle of radius $1.5\,\mathrm{mm}$. Water leaves the wide end at $0.80\,\mathrm{m/s}$. (a) Find the exit speed at the nozzle. Continuity: $v_2 = v_1 A_1/A_2 = 0.80\,(4.0/1.5)^2 \approx 5.7\,\mathrm{m/s}$. (b) If gauge pressure at the wide section is $1.2\times10^5\,\mathrm{Pa}$, estimate pressure at the nozzle on a horizontal run: $P_2 = P_1 + \tfrac{1}{2}\rho(v_1^2-v_2^2)$ with $\rho=1000\,\mathrm{kg/m^3}$ gives $P_2 \approx 1.2\times10^5 - 1.5\times10^4 \approx 1.05\times10^5\,\mathrm{Pa}$. Speed rises in the constriction while pressure drops—qualitative point even if arithmetic slips.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Continuity point: correct area ratio or explicit $A_1v_1=A_2v_2$. Bernoulli point: same streamline and correct sign on $\tfrac{1}{2}\rho v^2$ term. Ranking without numbers still earns credit for “smaller area $\Rightarrow$ larger speed” with continuity cited. Unit point on boxed pressure or speed. Cite why static pressure falls when kinetic energy rises.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Venturi meters and Pitot tubes reuse the same $P$–$v$ trade-off; hydrostatic pressure supplies the absolute level when a free surface is present. Poiseuille flow is the viscous correction when Bernoulli predicts zero pressure drop in a straight pipe.
""",
    ('AP Physics 1', '## 4. Floating, Sinking, and Newton’s Second Law'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Free-body diagrams on floating blocks, submerged percentages, or objects hung from scales in water. Stems ask whether an object floats or sinks, the fraction submerged, or apparent weight. Ranking tasks compare buoyant forces on equal-volume objects of different density. Some items pair a spring scale reading in air versus fluid.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Floating, Sinking, and Newton’s Second Law** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Buoyant force: $F_B = \rho_{\mathrm{fluid}} g V_{\mathrm{displaced}}$. Float: $F_B = mg$ with $V_{\mathrm{displaced}}/V_{\mathrm{obj}} = \rho_{\mathrm{obj}}/\rho_{\mathrm{fluid}}$. Apparent weight: $T = mg - F_B$. Sink: $F_B < mg$ and $a = (mg-F_B)/m$ downward if released from rest.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Fluid is static except for the object; buoyancy uses displaced volume of the submerged portion. Neglect surface tension unless the stem mentions a needle on water. For a scale reading, assume the object is fully submerged if the stem says so.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A wooden cube of side $0.12\,\mathrm{m}$ and density $680\,\mathrm{kg/m^3}$ floats in water ($\rho_w=1000\,\mathrm{kg/m^3}$). Fraction submerged: $f = 680/1000 = 0.68$, so $6.8\,\mathrm{cm}$ of the $12\,\mathrm{cm}$ side is below the surface. Buoyant force equals weight: $F_B = mg = 680\,(0.12)^3\,g \approx 11.8\,\mathrm{N}$. If the same cube is pushed fully underwater and held, the upward buoyant force is $1000\,g\,(0.12)^3 \approx 17.3\,\mathrm{N}$, so the hand must supply an extra $5.5\,\mathrm{N}$ downward beyond the weight.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

FBD point: upward $F_B$ and downward $mg$ labeled. Float condition $F_B=mg$ or fraction submerged $\rho_{\mathrm{obj}}/\rho_{\mathrm{fluid}}$. Apparent-weight point: explicit $T=mg-F_B$ with only submerged volume in $F_B$. Do not double-count weight and buoyancy on the same line.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Apparent weight ties directly to tension problems; density ratio links to specific gravity. Archimedes’ principle appears again in pressure-at-depth problems when a submerged gate is analyzed.
""",
    ('AP Physics 1', 'Pressure'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Calculate gauge or absolute pressure at depth, compare forces on two sides of a submerged plate, or explain why pressure is scalar. MCQ items test $P$ versus $F$ language. FRQs combine $P=F/A$ with hydrostatic $P=P_0+\rho gh$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Pressure** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Hydrostatic: $P = P_0 + \rho g h$. Gauge vs absolute: $P_{\mathrm{abs}} = P_{\mathrm{atm}} + P_{\mathrm{gauge}}$. Force on flat area: $F = PA$. Average depth for rectangular wall: $h_{\mathrm{avg}} = h/2$ if hinged at bottom.

Before substituting numbers for **Pressure**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Fluid at rest; $\rho$ constant with depth unless the stem gives a table. Use gauge pressure when the question asks for force on a dam and atmospheric pressure acts on both faces.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A rectangular aquarium panel is $0.50\,\mathrm{m}$ wide and $0.40\,\mathrm{m}$ tall, with its bottom edge at the tank floor. Water depth is $0.40\,\mathrm{m}$. Average pressure on the panel: $P_{\mathrm{avg}} = \tfrac{1}{2}\rho g h = 0.5(1000)(9.8)(0.40) \approx 1.96\times10^3\,\mathrm{Pa}$. Force: $F = P_{\mathrm{avg}} A = (1.96\times10^3)(0.50)(0.40) \approx 3.9\times10^2\,\mathrm{N}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Correct $\rho gh$ with depth measured from the free surface. Force point requires area, not just pressure. For a hinged gate, mention torque arm if the stem asks where to attach a support.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Barometers read atmospheric pressure; Pascal’s principle multiplies pressure in hydraulics. Bernoulli adds dynamic $\tfrac{1}{2}\rho v^2$ when fluid moves.
""",
    ('AP Physics 1', 'Density and Specific Gravity'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Given mass and dimensions, find $\rho$ or specific gravity $SG=\rho/\rho_{\mathrm{water}}$. Compare whether objects float. Lab-style stems use overflow cans or scale readings.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Density and Specific Gravity** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\rho = m/V$. $SG = \rho/\rho_{\mathrm{water}}$. Float criterion: $SG < 1$ in water. Buoyant fraction: $f = SG$ for a floating uniform object.

Before substituting numbers for **Density and Specific Gravity**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Uniform composition; volume is geometric unless displaced volume is measured directly. Water density $1000\,\mathrm{kg/m^3}$ unless otherwise specified.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Density and Specific Gravity** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A sample metal block has mass $0.540\,\mathrm{kg}$ and dimensions $3.0\,\mathrm{cm}\times4.0\,\mathrm{cm}\times5.0\,\mathrm{cm}$. $V = 6.0\times10^{-5}\,\mathrm{m^3}$, so $\rho = 0.540/(6.0\times10^{-5}) = 9.0\times10^3\,\mathrm{kg/m^3}$ and $SG = 9.0$. It sinks in water. Weight $mg \approx 5.3\,\mathrm{N}$; fully submerged buoyancy $\approx 0.59\,\mathrm{N}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Volume with correct SI conversion from cm. Specific gravity as dimensionless ratio. Float/sink sentence tied to $SG$ or $\rho$ comparison.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Hydrostatic pressure uses the same $\rho$; apparent-weight labs invert the measurement path.
""",
    ('AP Physics 1', 'Hydrostatic Pressure and Communicating Vessels'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

U-tubes with oil and water, open containers connected at the base, or ask why free surfaces level in communicating vessels. Stems find unknown density from height difference.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Hydrostatic Pressure and Communicating Vessels** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Same horizontal level in connected static fluid: $P_1 = P_2$. Often $\\rho_1 g h_1 = \\rho_2 g h_2$. Absolute pressure at depth: $P = P_{\\mathrm{atm}} + \\rho g h$.

Before substituting numbers for **Hydrostatic Pressure and Communicating Vessels**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Fluids are immiscible and static; capillary rise neglected unless stated. The connection is open below both columns.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Hydrostatic Pressure and Communicating Vessels** where the rubric expects the richer model.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A U-tube holds water ($\rho_w=1000$) and an unknown oil. The oil column is $12\,\mathrm{cm}$ above the interface; the water column above the interface is $9.0\,\mathrm{cm}$. At the interface, $\rho_o g (0.12) = \rho_w g (0.09)$, so $\rho_o = 1000(0.09/0.12) = 750\,\mathrm{kg/m^3}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Equal pressure at a common depth cited. Heights measured from the interface, not from the table. Density unit and reasonable magnitude.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Manometers are specialized U-tubes; barometers fix one arm to vacuum above mercury.
""",
    ('AP Physics 1', 'Barometers and Manometers'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Read absolute or gauge pressure from a mercury barometer or open/closed manometer. Explain what happens when the tube is tilted or when gas pressure pushes a column.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Barometers and Manometers** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Barometer: $P_{\\mathrm{atm}} = \\rho_{\\mathrm{Hg}} g h$. Open manometer gauge: $\\Delta P = \\rho g \\Delta h$. Closed manometer: same with reference gas at fixed pressure.

Before substituting numbers for **Barometers and Manometers**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Capillary depression negligible for mercury in a wide tube. Temperature $20^\circ\mathrm{C}$ standard $\rho_{\mathrm{Hg}}$ if not given.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Barometers and Manometers** where the rubric expects the richer model.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A mercury barometer reads $74\,\mathrm{cm}$ at a lab bench. With $\rho_{\mathrm{Hg}} = 1.36\times10^4\,\mathrm{kg/m^3}$, $P_{\mathrm{atm}} \approx (1.36\times10^4)(9.8)(0.74) \approx 9.9\times10^4\,\mathrm{Pa}$. An open U-manometer on a gas line shows the fluid side $6.0\,\mathrm{cm}$ higher than the gas side; gauge pressure $\Delta P = \rho g (0.06) \approx 590\,\mathrm{Pa}$ above atmospheric.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Distinguish absolute (barometer) from gauge (manometer). Use vertical height, not slant length. Correct fluid density in $\Delta P$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Hydrostatic $P=\rho gh$ underlies all column instruments; absolute pressure feeds Bernoulli totals.
""",
    ('AP Physics 1', 'Pascal’s Principle and Hydraulics'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Hydraulic lift: small piston force creates large piston force. Compare displacements when volumes are conserved. Explain multiplication of force.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Pascal’s Principle and Hydraulics** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Pressure transmitted equally: $P = F_1/A_1 = F_2/A_2$. Volume conservation (incompressible): $A_1 \\Delta x_1 = A_2 \\Delta x_2$.

Before substituting numbers for **Pascal’s Principle and Hydraulics**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Incompressible fluid, frictionless pistons, quasi-static motion. Same horizontal level if columns differ in height—otherwise include $\rho g \Delta h$.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Pascal’s Principle and Hydraulics** where the rubric expects the richer model.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A car lift has pistons of area $4.0\,\mathrm{cm^2}$ and $800\,\mathrm{cm^2}$. A $600\,\mathrm{N}$ force on the small piston supports a car weight $F_2$ on the large piston at the same level: $F_2 = F_1 A_2/A_1 = 600(800/4.0) = 1.2\times10^5\,\mathrm{N}$ (about $1.2\times10^4\,\mathrm{kg}$). If the large piston rises $2.0\,\mathrm{mm}$, the small piston moves down $\Delta x_1 = \Delta x_2 A_2/A_1 = 0.40\,\mathrm{m}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Cite equal pressure, not equal force. Area ratio squared error is a common zero. Displacement inverse to area ratio.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Continuity is the flow analog; Bernoulli adds motion when pistons move quickly.
""",
    ('AP Physics 1', 'Continuity and Volume Flow Rate'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Find speed in a narrower pipe section, or total volume delivered in time. Graph $A$ versus $v$ for constant volume flow.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Continuity and Volume Flow Rate** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Volume flow rate: $Q = Av = \\Delta V/\\Delta t$. Continuity: $A_1 v_1 = A_2 v_2 = Q$.

Before substituting numbers for **Continuity and Volume Flow Rate**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Incompressible fluid; fill the entire cross-section (plug flow). Steady flow so $Q$ is constant along the pipe.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Continuity and Volume Flow Rate** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Water flows at $2.4\,\mathrm{L/s}$ through a pipe that narrows from diameter $6.0\,\mathrm{cm}$ to $3.0\,\mathrm{cm}$. $Q = 2.4\times10^{-3}\,\mathrm{m^3/s}$. $v_1 = Q/(\pi(0.03)^2) \approx 0.85\,\mathrm{m/s}$; $v_2 = Q/(\pi(0.015)^2) \approx 3.4\,\mathrm{m/s}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Convert liters to $\mathrm{m^3}$. Use radius, not diameter, in area. State that $Q$ is constant before comparing speeds.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Bernoulli links the speed change to pressure; Poiseuille gives $Q$ when viscosity dominates.
""",
    ('AP Physics 1', 'Torricelli’s Law, Efflux, and Jets'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Speed of water leaving a tank hole at depth $h$; range of a horizontal jet; compare two holes. Energy-loss follow-ups when the hole is large.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Torricelli’s Law, Efflux, and Jets** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$v = \\sqrt{2gh}$ (Torricelli). Horizontal range from height $y$ above floor: $R = v\\sqrt{2y/g}$ if the hole is a height $y$ above the ground and the jet is horizontal.

Before substituting numbers for **Torricelli’s Law, Efflux, and Jets**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Small hole, large tank, negligible viscous loss. Bernoulli between free surface and jet.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Torricelli’s Law, Efflux, and Jets** where the rubric expects the richer model.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A tank’s free surface is $1.8\,\mathrm{m}$ above a small side hole that is $0.60\,\mathrm{m}$ above the floor. $v = \sqrt{2(9.8)(1.8)} \approx 5.9\,\mathrm{m/s}$. Time to fall $0.60\,\mathrm{m}$: $t=\sqrt{2(0.60)/9.8}\approx 0.35\,\mathrm{s}$. Range $\approx (5.9)(0.35) \approx 2.1\,\mathrm{m}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Separate vertical fall from horizontal motion. Depth $h$ for Torricelli is measured to the hole, not the floor. Cite Bernoulli or energy conservation.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Bernoulli’s equation generalizes to moving pipes; projectile kinematics handles the jet trajectory.
""",
    ('AP Physics 1', 'Venturi Meters, Pitot Tubes, and Siphons'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Qualitative pressure drop in a constriction; read flow speed from $\Delta P$; explain siphon operation without violating energy conservation.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Venturi Meters, Pitot Tubes, and Siphons** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Venturi with horizontal flow: $P_1 - P_2 = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2)$ with continuity. Pitot-static: $v = \\sqrt{2(P_t - P_s)/\\rho}$. Siphon: same Bernoulli heights; flow starts if outlet is lower and tube is primed.

Before substituting numbers for **Venturi Meters, Pitot Tubes, and Siphons**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Ideal fluid for meter formulas; siphon requires no cavitation (pressure stays above vapor pressure).

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Venturi Meters, Pitot Tubes, and Siphons** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A Venturi has throat area half the inlet area. Inlet speed $v_1=3.0\,\mathrm{m/s}$, $\rho=1000\,\mathrm{kg/m^3}$. Then $v_2=6.0\,\mathrm{m/s}$ and $\Delta P = \tfrac{1}{2}(1000)(36-9) \approx 1.35\times10^4\,\mathrm{Pa}$ drop at the throat.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Continuity before Bernoulli. Siphon explanation cites continuous fluid column and height difference, not “suction.” Pitot uses stagnation vs static pressure difference.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Bernoulli and continuity together; pressure chapter supplies absolute levels.
""",
    ('AP Physics 1', 'Viscosity, Poiseuille Flow, and Reynolds Number'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Compare volume flow in two pipes; predict laminar vs turbulent regime; explain why wide pipes carry more flow at fixed $\Delta P$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Viscosity, Poiseuille Flow, and Reynolds Number** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Poiseuille: $Q = \\dfrac{\\pi r^4 \\Delta P}{8\\eta L}$. Reynolds: $\\mathrm{Re} = \\rho v d/\\eta$. Laminar often $\\mathrm{Re} < 2000$ in a pipe.

Before substituting numbers for **Viscosity, Poiseuille Flow, and Reynolds Number**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Laminar, incompressible, Newtonian fluid; fully developed flow in a straight cylindrical pipe.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Viscosity, Poiseuille Flow, and Reynolds Number** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Oil ($\eta=0.20\,\mathrm{Pa\cdot s}$, $\rho=900$) flows through a pipe $L=2.0\,\mathrm{m}$, radius $r=0.010\,\mathrm{m}$, with $\Delta P=800\,\mathrm{Pa}$. $Q = \pi(0.010)^4(800)/(8(0.20)(2.0)) \approx 7.9\times10^{-6}\,\mathrm{m^3/s}$. Average speed $v=Q/(\pi r^2)\approx 0.025\,\mathrm{m/s}$; $\mathrm{Re} = 900(0.025)(0.020)/0.20 \approx 2.3$ (laminar).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Strong $r^4$ dependence stated for ranking. Reynolds uses characteristic length $d=2r$. Units on $\eta$ and $\Delta P$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Bernoulli ignores viscosity; Stokes’ law handles spheres in viscous fluids at low Re.
""",
    ('AP Physics 1', 'Drag Forces and Stokes’ Law'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Terminal speed of a small sphere in viscous fluid; compare drag at different speeds; qualitative $v_t$ when radius changes.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Drag Forces and Stokes’ Law** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Stokes: $F_d = 6\\pi \\eta r v$. Terminal: $mg = 6\\pi\\eta r v_t$ for a dense sphere (buoyancy sometimes included: $v_t = 2r^2(\\rho_s-\\rho_f)g/(9\\eta)$).

Before substituting numbers for **Drag Forces and Stokes’ Law**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Spherical particle, laminar flow, low Re. Fluid otherwise quiescent.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Drag Forces and Stokes’ Law** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A steel sphere of radius $0.50\,\mathrm{mm}$ and density $7800\,\mathrm{kg/m^3}$ falls in glycerin ($\rho=1260$, $\eta=1.5\,\mathrm{Pa\cdot s}$). Using $v_t = 2r^2(\rho_s-\rho_f)g/(9\eta)$: $v_t \approx 2(5\times10^{-4})^2(6540)(9.8)/(9(1.5)) \approx 2.4\times10^{-3}\,\mathrm{m/s}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Drag Forces and Stokes’ Law**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Include buoyancy when densities are close. Terminal means $a=0$ with drag balancing net weight. $r^2$ scaling for ranking.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Reynolds number checks laminar validity; Newton’s second law describes approach to $v_t$.
""",
    ('AP Physics 1', 'Surface Tension and Capillarity'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Capillary rise height; explain meniscus shape; compare glass versus plastic tubes. Force to pull a wire frame from a soap film (conceptual).

On the multiple-choice section, expect at least one item that tests whether you recognize when **Surface Tension and Capillarity** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Capillary rise (contact angle $\\theta\\approx 0$): $h = 2\\gamma/(\\rho g r)$. Excess pressure in bubble: $\\Delta P = 4\\gamma/r$ (spherical).

Before substituting numbers for **Surface Tension and Capillarity**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Thin tube, wetting fluid, negligible vapor pressure effects. Isothermal surface tension $\gamma$ given.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Surface Tension and Capillarity** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Water ($\gamma=0.072\,\mathrm{N/m}$, $\rho=1000$) in a glass capillary of radius $0.30\,\mathrm{mm}$. $h = 2(0.072)/(1000(9.8)(3\times10^{-4})) \approx 0.049\,\mathrm{m}$ (about $4.9\,\mathrm{cm}$).

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Surface Tension and Capillarity**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Inverse radius dependence. Distinguish adhesive (rise) vs non-wetting (depression). Correct $\gamma$ units N/m.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Pressure jumps across curved surfaces link to hydrostatic columns; floating ignores capillarity unless stated.
""",
    ('AP Physics 1', 'Apparent Weight and Tension with Buoyancy'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Spring-scale reading when an object is submerged; compare tensions in air vs water; multi-object pulley systems with a submerged weight.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Apparent Weight and Tension with Buoyancy** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$T = mg - F_B$ fully submerged; $F_B = \\rho_{\\mathrm{fluid}} g V_{\\mathrm{obj}}$. Scale reads apparent weight $w_{\\mathrm{app}} = T$.

Before substituting numbers for **Apparent Weight and Tension with Buoyancy**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Static or constant velocity; fluid static. Object fully or partially submerged as stated.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Apparent Weight and Tension with Buoyancy** where the rubric expects the richer model.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A $4.0\,\mathrm{kg}$ aluminum block ($\rho=2700$) is hung from a scale and lowered into water until fully submerged. Volume $V = m/\rho \approx 1.48\times10^{-3}\,\mathrm{m^3}$. $F_B = 1000(9.8)(1.48\times10^{-3}) \approx 14.5\,\mathrm{N}$; $mg \approx 39.2\,\mathrm{N}$; scale reads $T \approx 24.7\,\mathrm{N}$ (about $2.5\,\mathrm{kg}$ equivalent).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Use fluid density for $F_B$, object density only for volume via $m/\rho$. Third-law pairs if a string pulls a submerged block—tension same throughout ideal string.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Floating is the $T=0$ limit when $F_B=mg$ from below; Newton’s second law if acceleration is nonzero.
""",
    ('AP Physics 1', 'Volume Flow Rate and Continuity'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Nearly identical to continuity stems but emphasize $Q$ in $\mathrm{L/min}$ and time to fill a tank. Multi-section pipes with different diameters.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Volume Flow Rate and Continuity** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 1, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$Q = Av$; $A_1v_1=A_2v_2$; $\\Delta V = Q\\,\\Delta t$.

Before substituting numbers for **Volume Flow Rate and Continuity**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Incompressible, steady, uniform flow across each section.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Volume Flow Rate and Continuity** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A hose delivers $Q=1.8\times10^{-4}\,\mathrm{m^3/s}$. How long to fill a $40\,\mathrm{L}$ bucket? $\Delta t = 0.040/Q \approx 220\,\mathrm{s}$ (about $3.7\,\mathrm{min}$). If the nozzle halves the area, exit speed doubles but $Q$ stays $1.8\times10^{-4}$ unless the pump changes.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Volume Flow Rate and Continuity**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Distinguish changing $v$ from changing $Q$. Time-fill uses $\Delta V=Q\Delta t$. Consistent SI volumes.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Bernoulli explains pressure when $v$ changes at fixed $Q$; Poiseuille sets $Q$ from $\Delta P$ in viscous flow.
""",
    ('AP Physics 2', 'Data Collections'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Experimental design on thermodynamics, optics, or nuclear labs: identify independent and dependent variables, propose linearization, or critique sample size. Quantitative skills items ask for uncertainty propagation or best-fit interpretation without full physics derivation.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Data Collections** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Linear fit: $y = mx + b$. Percent uncertainty: $\delta x/x$. For slope $m$, $R^2$ or residual pattern judged qualitatively on AP 2.

Before substituting numbers for **Data Collections**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Random errors independent; systematic error named if equipment is miscalibrated. Linear region only if the graph is curved at extremes.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Data Collections** where the rubric expects the richer model.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Students measure sound level $\beta$ (dB) versus $\log_{10}(I/I_0)$ for five distances and plot $\beta$ vs $\log d$. They propose $\beta = -10\,\log d + C$. A point at $d=0.20\,\mathrm{m}$ sits far above the line because the microphone saturated. They should exclude that run, increase distance samples, and repeat at $d=0.50\,\mathrm{m}$ three times to reduce random scatter.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Variable identification point. Linearization choice tied to expected power law. Outlier handling with physics reason (saturation, background), not “it looks wrong.”

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Every Physics 2 unit lab (waves, modern) reuses the same data-analysis rubric; keep a template paragraph ready.
""",
    ('AP Physics 2', 'Thermodynamics'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

First-law cycles on $P$–$V$ diagrams, efficiency of heat engines, isothermal vs adiabatic qualitative segments, or entropy ranking (qualitative on AP 2).

On the multiple-choice section, expect at least one item that tests whether you recognize when **Thermodynamics** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

First law: $\Delta U = Q - W$ (work by system positive). Ideal gas: $PV = nRT$. Isothermal: $\Delta U=0$, $Q=W$. Carnot efficiency: $\eta = 1 - T_C/T_H$ (temperatures in kelvin).

Before substituting numbers for **Thermodynamics**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Ideal gas unless real-gas note; quasi-static paths on diagrams. Sign convention stated once per problem.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Thermodynamics** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

An ideal monatomic gas ($n=0.50\,\mathrm{mol}$) is heated at constant volume from $300\,\mathrm{K}$ to $450\,\mathrm{K}$. $\Delta U = \tfrac{3}{2}nR\Delta T = 1.5(0.50)(8.31)(150) \approx 935\,\mathrm{J}$. Because $W=0$, $Q=\Delta U \approx 935\,\mathrm{J}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Kelvin for ratios. $W$ as area under $P$–$V$ curve. State constant-volume condition to set $W=0$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Gas laws feed ideal-gas steps; engine cycles connect to entropy discussions in the same unit.
""",
    ('AP Physics 2', 'Traveling Waves and Wave Speed'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Find $v=f\lambda$ on a string or in air; read wavelength from a snapshot graph; compare pulse speed on ropes of different tension.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Traveling Waves and Wave Speed** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$v = f\lambda = \omega/k$. String: $v = \sqrt{T/\mu}$. Sound in ideal gas: $v = \sqrt{\gamma RT/M}$ (often given).

Before substituting numbers for **Traveling Waves and Wave Speed**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Linear medium; sinusoidal steady state for $f$–$\lambda$ relation. Dispersion neglected unless stem mentions it.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Traveling Waves and Wave Speed** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A wave on a string has frequency $120\,\mathrm{Hz}$ and wavelength $0.35\,\mathrm{m}$. $v = f\lambda = 42\,\mathrm{m/s}$. If tension quadruples with $\mu$ fixed, $v\propto\sqrt{T}$ doubles to $84\,\mathrm{m/s}$ and at the same source frequency $\lambda$ doubles to $0.70\,\mathrm{m}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Snapshot vs history graph distinction. Correct pairing of $f$ and $\lambda$ for the same wave. String speed from $T$ and $\mu$ with unit $\mu=\mathrm{kg/m}$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Standing waves need the same $v$; Doppler uses speed relative to medium.
""",
    ('AP Physics 2', 'Wave Intensity and Sound Level'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Convert intensity to decibels; find distance fall-off $I\propto 1/r^2$; compare pain threshold and whisper levels.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Wave Intensity and Sound Level** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$I = P/A$. $\beta = 10\log_{10}(I/I_0)$ with $I_0=10^{-12}\,\mathrm{W/m^2}$. Spherical source: $I = P/(4\pi r^2)$.

Before substituting numbers for **Wave Intensity and Sound Level**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Isotropic point source; no absorption unless given attenuation coefficient.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Wave Intensity and Sound Level** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A speaker radiates $2.0\,\mathrm{W}$ uniformly. At $r=5.0\,\mathrm{m}$, $I = 2.0/(4\pi(5)^2) \approx 6.4\times10^{-3}\,\mathrm{W/m^2}$. $\beta = 10\log_{10}(6.4\times10^{-3}/10^{-12}) \approx 98\,\mathrm{dB}$. Doubling distance quarters $I$, dropping $\beta$ by $10\log_{10}4 \approx 6\,\mathrm{dB}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Wave Intensity and Sound Level**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Use $10\log$, not $20\log$, for intensity. Reference $I_0$ stated. Inverse-square reasoning for ranking distance.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Doppler shifts frequency, not $\beta$ from geometry alone; beats need two sources.
""",
    ('AP Physics 2', 'Sound Waves, Beats, and the Doppler Effect'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Beat frequency from two tuning forks; ambulance pitch shift; moving source vs moving observer.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Sound Waves, Beats, and the Doppler Effect** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Beats: $f_{\mathrm{beat}} = |f_1 - f_2|$. Doppler: $f' = f\,\dfrac{v \pm v_O}{v \mp v_S}$ with signs from motion toward/away.

Before substituting numbers for **Sound Waves, Beats, and the Doppler Effect**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Speed $v$ relative to air; speeds $\ll v$ unless relativistic note (not here). Point source for Doppler formula given on sheet.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Sound Waves, Beats, and the Doppler Effect** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Forks at $440\,\mathrm{Hz}$ and $443\,\mathrm{Hz}$ produce beats of $3\,\mathrm{Hz}$. A train horn $f=320\,\mathrm{Hz}$ approaches a stationary student at $v_S=25\,\mathrm{m/s}$; $v_{\mathrm{sound}}=340\,\mathrm{m/s}$. $f' = 320(340/(340-25)) \approx 346\,\mathrm{Hz}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Sign convention sentence earns partial credit even if arithmetic fails. Beat frequency always positive difference. Identify observer vs source motion separately.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Standing waves set allowed frequencies; intensity explains loudness after Doppler shift.
""",
    ('AP Physics 2', 'Superposition and Interference'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Path difference for constructive/destructive interference; two-source fringe patterns; phase difference from delay.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Superposition and Interference** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Path difference $\Delta r = m\lambda$ (constructive) or $(m+\tfrac12)\lambda$ (destructive) for coherent sources. Phase: $\Delta\phi = 2\pi\Delta r/\lambda$.

Before substituting numbers for **Superposition and Interference**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Coherent, monochromatic sources; unless polychromatic, use single $\lambda$.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Superposition and Interference** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Two speakers emit $680\,\mathrm{Hz}$ in phase ($v=340\,\mathrm{m/s}$, $\lambda=0.50\,\mathrm{m}$). A walk along a line finds constructive interference where path difference is $0, 0.50, 1.0\,\mathrm{m}$, etc. First destructive point aside from null at center requires $\Delta r = 0.25\,\mathrm{m}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Superposition and Interference**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Path difference, not distance from one source alone. Integer vs half-integer $\lambda$ rule stated. Phase and path linked.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Double-slit optics uses the same $\Delta r$ logic; beats are superposition in time.
""",
    ('AP Physics 2', 'Standing Waves on Strings and in Pipes'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Harmonic frequencies on a string fixed at both ends; open vs closed pipe lengths; identify harmonic number from diagram.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Standing Waves on Strings and in Pipes** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

String fixed both ends: $f_n = n v/(2L)$, $n=1,2,3\ldots$. Open pipe: $f_n = n v/(2L)$. Closed pipe: $f_n = n v/(4L)$, odd $n$ only.

Before substituting numbers for **Standing Waves on Strings and in Pipes**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Ideal boundary: node at fixed end, antinode at open end (first harmonic conventions as on sheet).

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Standing Waves on Strings and in Pipes** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A guitar string of length $0.64\,\mathrm{m}$ has $\mu=0.0020\,\mathrm{kg/m}$ under $T=80\,\mathrm{N}$. $v=\sqrt{T/\mu}=200\,\mathrm{m/s}$. Fundamental $f_1 = 200/(2(0.64)) \approx 156\,\mathrm{Hz}$; third harmonic $f_3 = 3f_1 \approx 468\,\mathrm{Hz}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Correct boundary condition for pipe type. Harmonic index $n$ identified on sketch. $L$ is physical length, not half-wavelength unless derived.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Traveling-wave $v$ enters every standing-wave frequency; resonance in LC is the electrical analog in AP C.
""",
    ('AP Physics 2', 'Diffraction and Interference of Light'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Double-slit fringe spacing; single-slit first minimum; change $\lambda$ or slit spacing and predict shift.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Diffraction and Interference of Light** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Double slit bright: $d\sin\theta = m\lambda$. Fringe spacing on screen: $\Delta y \approx \lambda L/d$. Single-slit first minimum: $a\sin\theta = \lambda$.

Before substituting numbers for **Diffraction and Interference of Light**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Small angle: $\sin\theta\approx\tan\theta\approx y/L$. Coherent, monochromatic light.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Diffraction and Interference of Light** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Laser $\lambda=633\,\mathrm{nm}$ passes slits separated by $d=0.25\,\mathrm{mm}$ onto $L=2.4\,\mathrm{m}$ screen. $\Delta y \approx \lambda L/d = (633\times10^{-9})(2.4)/(2.5\times10^{-4}) \approx 6.1\,\mathrm{mm}$. If $\lambda$ increases, fringe spacing increases linearly.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Diffraction and Interference of Light**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Separate $d$ (double slit) from $a$ (single slit). Small-angle justification one line. Predict direction of shift when a parameter changes.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Thin-film interference adds phase reversal on reflection; polarization selects which field component reaches the slit.
""",
    ('AP Physics 2', 'Polarization and Thin-Film Interference'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Malus’s law intensity; explain Brewster angle conceptually; film thickness for constructive reflection given $n$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Polarization and Thin-Film Interference** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Malus: $I = I_0\cos^2\theta$. Thin film (normal incidence, one phase reversal): $2nt = (m+\tfrac12)\lambda$ for bright reflection in air.

Before substituting numbers for **Polarization and Thin-Film Interference**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Know which interfaces produce $\pi$ phase shift (low-to-high $n$).

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Polarization and Thin-Film Interference** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Unpolarized light passes a polarizer then an analyzer at $60^\circ$ to the first. After first polarizer $I_0/2$; after Malus $I = (I_0/2)\cos^2 60^\circ = I_0/8$. Soap film $n=1.35$, $\lambda=540\,\mathrm{nm}$ in air: minimum nonzero thickness for destructive reflection in air might use $2nt=m\lambda$ depending on reversal count—student must list phase shifts.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Half intensity after first polarizer from unpolarized source. Phase reversal bookkeeping on film diagram. Cosine squared on angle between transmission axes.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Double-slit path difference parallels $2nt$; electromagnetic waves in AP C use the same $\cos^2$ for power.
""",
    ('AP Physics 2', 'Special Relativity'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Time dilation and length contraction numericals; relativistic momentum qualitative; light-clock thought experiments (conceptual).

On the multiple-choice section, expect at least one item that tests whether you recognize when **Special Relativity** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Time dilation: $\Delta t = \gamma \Delta t_0$, $\gamma = 1/\sqrt{1-v^2/c^2}$. Length contraction: $L = L_0/\gamma$. Relativistic energy: $E^2 = (pc)^2 + (mc^2)^2$ (given on sheet).

Before substituting numbers for **Special Relativity**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Inertial frames; proper time is in the rest frame of the clock.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Special Relativity** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A muon proper lifetime is $2.2\,\mu\mathrm{s}$. At $v=0.98c$, $\gamma \approx 5.0$, lab lifetime $\approx 11\,\mu\mathrm{s}$, distance $\approx (0.98c)(11\times10^{-6}) \approx 3.2\,\mathrm{km}$, explaining atmospheric arrival.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Special Relativity**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Identify proper vs dilated time. Do not double-apply gamma to both length and time incorrectly in the same step. $c$ value consistent.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Classical Doppler is low-speed limit; nuclear mass-energy uses $E=mc^2$ from the same framework.
""",
    ('AP Physics 2', 'Photons and the Photoelectric Effect'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Find stopping potential from frequency; threshold frequency; graph $K_{\max}$ vs $f$ slope $h/e$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Photons and the Photoelectric Effect** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Photon energy $E = hf$. Photoelectric: $K_{\max} = hf - \phi$. Stopping potential: $eV_{\mathrm{stop}} = K_{\max}$.

Before substituting numbers for **Photons and the Photoelectric Effect**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

One photon ejects one electron; intensity changes current, not $K_{\max}$.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Photons and the Photoelectric Effect** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Light of $\lambda=400\,\mathrm{nm}$ hits metal with work function $\phi=2.1\,\mathrm{eV}$. $E = hc/\lambda \approx 3.10\,\mathrm{eV}$; $K_{\max} \approx 1.0\,\mathrm{eV}$; $V_{\mathrm{stop}} \approx 1.0\,\mathrm{V}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Photons and the Photoelectric Effect**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Work function subtracted once. Below threshold: no electrons regardless of intensity. Graph slope identified as $h/e$ if asked.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Atomic spectra photon energies $\Delta E=hf$; matter waves link momentum $p=h/\lambda$.
""",
    ('AP Physics 2', 'Matter Waves and Quantum Behavior'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

de Broglie wavelength of electron; diffraction through crystal spacing; probability interpretation of wave function (qualitative).

On the multiple-choice section, expect at least one item that tests whether you recognize when **Matter Waves and Quantum Behavior** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

de Broglie: $\lambda = h/p = h/(mv)$. Electron nonrelativistic: $\lambda = h/\sqrt{2m_e K}$.

Before substituting numbers for **Matter Waves and Quantum Behavior**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Nonrelativistic unless $\gamma$ given; crystal spacing acts like a grating.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Matter Waves and Quantum Behavior** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Electrons accelerated through $150\,\mathrm{V}$ have $K=150\,\mathrm{eV}=2.4\times10^{-17}\,\mathrm{J}$. $\lambda = h/\sqrt{2m_e K} \approx 1.0\times10^{-10}\,\mathrm{m}$ (about $0.10\,\mathrm{nm}$), comparable to atomic spacings in crystals.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Matter Waves and Quantum Behavior**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Use momentum, not energy alone, without mass conversion. Qualitative: wave nature explains discrete diffraction rings. Unit conversion on eV.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Photoelectric supplies $K$ to feed $\lambda$; Heisenberg uncertainty is qualitative neighbor in modern unit.
""",
    ('AP Physics 2', 'Atomic Energy Levels and Spectra'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Photon wavelength for a transition; ionization energy; identify series (Lyman, Balmer) from diagram.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Atomic Energy Levels and Spectra** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\Delta E = hf = hc/\lambda$. Hydrogen: $E_n = -13.6\,\mathrm{eV}/n^2$. $\Delta E = E_{\mathrm{final}} - E_{\mathrm{initial}}$ (sign tracks absorption vs emission).

Before substituting numbers for **Atomic Energy Levels and Spectra**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Hydrogen-like one-electron model unless many-electron screening is provided.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Atomic Energy Levels and Spectra** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Hydrogen transition $n=4\to 2$: $\Delta E = -13.6(1/4 - 1/16) \approx -2.55\,\mathrm{eV}$ photon emitted. $\lambda = hc/|\Delta E| \approx 486\,\mathrm{nm}$ (Balmer blue-green line).

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Atomic Energy Levels and Spectra**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Energy difference, not $E_n$ alone, equals photon energy. Emission vs absorption sign. Electron-volt and nanometer consistency.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Photoelectric $\phi$ is a surface work function; nuclear binding energy uses similar level diagrams.
""",
    ('AP Physics 2', 'Nuclear Structure and Binding Energy'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Compute mass defect and binding energy per nucleon; compare stability of isotopes; read values from a binding-energy curve.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Nuclear Structure and Binding Energy** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Mass defect: $\Delta m = Z m_p + N m_n - m_{\mathrm{nucleus}}$. Binding energy: $E_b = \Delta m\, c^2$. Per nucleon: $E_b/A$ compared for stability.

Before substituting numbers for **Nuclear Structure and Binding Energy**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Atomic mass table gives nuclear mass or atomic mass—watch electrons unless unified atomic mass is used consistently.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Nuclear Structure and Binding Energy** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

For $^4_2\mathrm{He}$, suppose $\Delta m = 0.0304\,\mathrm{u}$. $E_b = (0.0304)(931\,\mathrm{MeV/u}) \approx 28.3\,\mathrm{MeV}$, $E_b/A \approx 7.1\,\mathrm{MeV/nucleon}$, near the curve maximum (stable light nucleus).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Unified atomic mass unit conversion $931\,\mathrm{MeV/u}$. Higher $E_b/A$ $\Rightarrow$ more stable for light-to-medium nuclei trend explanation. Distinguish total $E_b$ from per nucleon.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Fission and fusion move toward higher $E_b/A$; decay energy uses $Q$ from mass difference.
""",
    ('AP Physics 2', 'Radioactive Decay and Nuclear Transformations'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Half-life calculations; activity $A=\lambda N$; identify decay type balancing $A$ and $Z$; exponential decay graph.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Radioactive Decay and Nuclear Transformations** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$N = N_0 e^{-\lambda t}$; $t_{1/2} = \ln 2/\lambda$. Activity $A = \lambda N$. Decay chains: conserve nucleon number and charge.

Before substituting numbers for **Radioactive Decay and Nuclear Transformations**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Large $N$ for smooth exponential; daughter product stable unless chain continues.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Radioactive Decay and Nuclear Transformations** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A sample has $N_0=4.0\times10^{12}$ nuclei and $t_{1/2}=6.0\,\mathrm{h}$. After $12\,\mathrm{h}$, $N = N_0/4 = 1.0\times10^{12}$. $\lambda = \ln 2 / 6.0 = 0.115\,\mathrm{h^{-1}}$; initial activity $A_0 = \lambda N_0 \approx 4.6\times10^{11}\,\mathrm{decays/h}$.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Exponential, not linear, halving. Balance nuclear equation for $\alpha$, $\beta^-$, $\beta^+$. Activity unit (Bq or Ci) if requested.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Binding energy explains $Q$ released; fission multiplies decay energy in a chain.
""",
    ('AP Physics 2', 'Fission and Fusion'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Energy release per fission event; compare fusion of light nuclei vs fission of heavy; conceptual reactor control rods and critical mass.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Fission and Fusion** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Energy release $Q = (\sum m_{\mathrm{in}} - \sum m_{\mathrm{out}}) c^2$. Fission: heavy nucleus splits; fusion: light nuclei merge toward peak $E_b/A$.

Before substituting numbers for **Fission and Fusion**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Masses from table; neutrinos ignored in introductory $Q$ unless given.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Fission and Fusion** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A hypothetical fission releases $Q=200\,\mathrm{MeV}$ per event. Fission of $1.0\,\mathrm{mg}$ of $^{235}\mathrm{U}$ contains about $N \approx (10^{-6}/235)(6.02\times10^{23}) \approx 2.6\times10^{18}$ nuclei. Total energy $\approx 200\,\mathrm{MeV}\times N \approx 5\times10^{8}\,\mathrm{MeV}\approx 8\times10^{4}\,\mathrm{MJ}$ (order-of-magnitude classroom estimate).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Trend: fusion raises $E_b/A$ for light elements; fission for very heavy. Mass-to-energy with clear $c^2$. Conceptual control: neutrons and moderation, not “fusion in a reactor” confusion.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Binding-energy curve is the lookup tool; decay half-life governs waste, not $Q$ alone.
""",
    ('AP Physics 2', 'Unit 15: Modern Physics'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Mixed modern topics in one FRQ: photoelectric plus de Broglie, or decay plus $E=mc^2$. Conceptual compare classical vs quantum predictions.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Unit 15: Modern Physics** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Combine $E=hf$, $\lambda=h/p$, $E_n=-13.6\,\mathrm{eV}/n^2$, and $\Delta m c^2$ as needed.

Before substituting numbers for **Unit 15: Modern Physics**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Pick the model the stem names; do not apply Bohr to free electrons in metal.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Unit 15: Modern Physics** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A student shines $450\,\mathrm{nm}$ light on sodium ($\phi=2.3\,\mathrm{eV}$) and also sends $100\,\mathrm{eV}$ electrons at a crystal with spacing $0.15\,\mathrm{nm}$. Photon energy $\approx 2.76\,\mathrm{eV}$ gives $K_{\max}\approx0.46\,\mathrm{eV}$. Electron $\lambda \approx h/\sqrt{2m_e(100\,\mathrm{eV})}\approx 0.12\,\mathrm{nm}$, near spacing for diffraction orders.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Separate photon (quantized absorption) from electron wave (continuous acceleration). Each sub-part cites its own equation. Limiting case: classical prediction for photoelectric fails below threshold.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Split review by mechanism—field interaction vs matter wave—before mixed practice sets.
""",
    ('AP Physics 2', 'Waves, Sound, and Physical Optics'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Composite items linking intensity, standing waves, and double-slit on one setup (e.g., sound then light analogy). Compare longitudinal vs transverse in interference context.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Waves, Sound, and Physical Optics** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics 2, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Use $v=f\lambda$, $\beta=10\log(I/I_0)$, $f_n=n v/(2L)$, and $d\sin\theta=m\lambda$ in one chain when the stem switches media.

Before substituting numbers for **Waves, Sound, and Physical Optics**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

State whether the wave is longitudinal (sound) or transverse (light) when discussing polarization.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Waves, Sound, and Physical Optics** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

A $680\,\mathrm{Hz}$ tuning fork excites a pipe closed at one end of length $0.25\,\mathrm{m}$; third odd harmonic fits $L=3\lambda/4$, giving $\lambda=0.33\,\mathrm{m}$ and $v=f\lambda\approx 225\,\mathrm{m/s}$ (warmer air). Separately, a $633\,\mathrm{nm}$ laser with $d=0.20\,\mathrm{mm}$ at $L=1.5\,\mathrm{m}$ gives $\Delta y\approx 4.7\,\mathrm{mm}$ fringes—same superposition logic, transverse fields.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Correct pipe boundary for harmonic chosen. Do not use sound polarization language. Parallel structure: path difference (sound) vs slit difference (light) named.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Unit 9–14 labs fold into this capstone; keep one page per phenomenon to avoid formula mixing.
""",
    ('AP Physics C: Mechanics', 'Newton’s Shell Theorem'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Spherical mass distributions: field outside like point mass at center; inside uniform sphere field linear in $r$. Compare solid vs hollow shell.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Newton’s Shell Theorem** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Outside: $g = GM/r^2$. Inside uniform solid: $g = GM_{\mathrm{enc}} r/R^3$. Shell: $g=0$ inside hollow shell.

Before substituting numbers for **Newton’s Shell Theorem**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Spherically symmetric mass; Newtonian gravity; test mass outside material for shell theorem statement.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Newton’s Shell Theorem** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Inside Earth modeled uniform ($R=6.4\times10^6\,\mathrm{m}$, $M=6.0\times10^{24}\,\mathrm{kg}$), at $r=R/2$, $g_{\mathrm{in}} = GM r/R^3 = (6.67\times10^{-11})(6.0\times10^{24})(3.2\times10^6)/(6.4\times10^6)^3 \approx 4.9\,\mathrm{m/s^2}$, half the surface value.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Newton’s Shell Theorem**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

State symmetry argument. Inside vs outside formula choice. No shell theorem for elliptical mass without integration.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Gravitational potential integrates $g$; orbital mechanics uses external $GM/r^2$.
""",
    ('AP Physics C: Mechanics', '6. Kepler’s First and Second Law'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Elliptical orbit diagram: identify perihelion speed, areal velocity constant, focus location of Sun.

On the multiple-choice section, expect at least one item that tests whether you recognize when **6. Kepler’s First and Second Law** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Second law: $dA/dt = L/(2m) = \mathrm{const}$. First law: $r = \dfrac{p}{1+e\cos\theta}$ with $p = h^2/(GM)$.

Before substituting numbers for **6. Kepler’s First and Second Law**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Two-body, central inverse-square force; no drag.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **6. Kepler’s First and Second Law** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Comet with $e=0.80$, perihelion $r_p=8.0\times10^{10}\,\mathrm{m}$, aphelion $r_a=(1+e)/(1-e)\,r_p = 7.2\times10^{11}\,\mathrm{m}$. Speed at perihelion exceeds aphelion by inverse $r$ from angular momentum $mvr_\perp=\mathrm{const}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **6. Kepler’s First and Second Law**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Areal sweep equal in equal $\Delta t$. Eccentricity from geometry. Speed higher at closer focus.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Third law links period to semi-major axis; energy sets $e$ from $E$ and $L$.
""",
    ('AP Physics C: Mechanics', 'Elliptical Orbits'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Find semi-major axis, eccentricity, energy from $r_p,r_a$; compare circular and elliptical speeds at a radius.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Elliptical Orbits** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$r_p = a(1-e)$, $r_a = a(1+e)$. $a=(r_p+r_a)/2$. Energy $E = -GMm/(2a)$.

Before substituting numbers for **Elliptical Orbits**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Kepler orbit; point masses.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Elliptical Orbits** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Satellite $r_p=6.8\times10^6\,\mathrm{m}$, $r_a=7.6\times10^6\,\mathrm{m}$. $a=7.2\times10^6\,\mathrm{m}$, $e=(r_a-r_p)/(r_a+r_p)\approx0.056$. For Earth $GM=3.98\times10^{14}$, $E/m = -GM/(2a) \approx -2.76\times10^7\,\mathrm{J/kg}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Elliptical Orbits**—proportionality reasoning alone can earn a point when the calculator fails.

**(c) Limiting check:** State one limit (very small, very large, equilibrium, or $t=0$) where the result must reduce to a known fact from an earlier unit. If that limit fails, revisit sign conventions or subscripts (initial vs final, inside vs outside).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Semi-major from extremes. Negative total energy for bound orbit. Eccentricity dimensionless.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Circular orbit is $e=0$; escape is unbound $E\ge0$.
""",
    ('AP Physics C: Mechanics', 'Calculus Used in Rotational Motion'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Given $\theta(t)$, find $\omega$, $\alpha$; integrate $\alpha$ to get $\omega$; relate $\tau=I\alpha$ with calculus definitions.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Calculus Used in Rotational Motion** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\omega = d\theta/dt$, $\alpha = d\omega/dt$. $\tau = I\alpha = I\, d\omega/dt$.

Before substituting numbers for **Calculus Used in Rotational Motion**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Rigid body; rotation about fixed axis.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Calculus Used in Rotational Motion** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

$\theta(t)=0.40t^2\,\mathrm{rad}$ for $t\ge0$. $\omega=0.80t$, at $t=3.0\,\mathrm{s}$, $\omega=2.4\,\mathrm{rad/s}$, $\alpha=0.80\,\mathrm{rad/s^2}$. With $I=0.25\,\mathrm{kg\cdot m^2}$, $\tau=0.20\,\mathrm{N\cdot m}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Calculus Used in Rotational Motion**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Derivative chain correct. Units on $\omega$, $\alpha$. $\tau=I\alpha$ only about fixed axis through $I$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Linear analog $a=dv/dt$; SHM uses same calculus on $x(t)$.
""",
    ('AP Physics C: Mechanics', 'Angular Position, Velocity, and Acceleration'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Convert between $\theta$, $\omega$, $\alpha$; tangential vs centripetal components on a point at radius $r$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Angular Position, Velocity, and Acceleration** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$v_t = r\omega$, $a_t = r\alpha$, $a_c = r\omega^2 = v^2/r$.

Before substituting numbers for **Angular Position, Velocity, and Acceleration**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Rigid rotation; point at fixed $r$ from axis.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Angular Position, Velocity, and Acceleration** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Wheel $r=0.35\,\mathrm{m}$, $\omega=12\,\mathrm{rad/s}$, $\alpha=3.0\,\mathrm{rad/s^2}$. $v_t=4.2\,\mathrm{m/s}$, $a_t=1.05\,\mathrm{m/s^2}$, $a_c=50\,\mathrm{m/s^2}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Angular Position, Velocity, and Acceleration**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Separate tangential and centripetal. $\omega$ in rad/s. Do not mix linear $a$ with $\alpha$ without $r$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Rolling without slipping ties $v=\omega R$; energy uses $\tfrac{1}{2}I\omega^2$.
""",
    ('AP Physics C: Mechanics', 'Data Collections'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Rotational inertia lab: linearize $T^2$ vs $I$; uncertainty in slope; video analysis of $\theta$ vs $t$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Data Collections** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Linear fit $y=mx+b$; for physical pendulum $T=2\pi\\sqrt{I/(mgh)}$ suggests $T^2$ vs $I$ linear if $h$ fixed.

Before substituting numbers for **Data Collections**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Small angle; negligible friction unless corrected.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Data Collections** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Students plot $T^2$ versus added mass on a rod and get slope $0.042\,\mathrm{s^2/kg}$. One outlier at largest mass came from amplitude $25^\circ$—they should restrict to $10^\circ$ and repeat.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Data Collections**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Linearization matches theory. Angle control as systematic error. Slope units match axes.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Same rubric as AP 2 data skills; pair with parallel-axis lab write-ups.
""",
    ('AP Physics C: Mechanics', 'Work–Energy Theorem and Mechanical Energy'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Variable force $W=\int F\,dx$; spring and gravity; when mechanical energy conserved.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Work–Energy Theorem and Mechanical Energy** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$W_{\mathrm{net}} = \Delta K$. $E = K+U$; if non-conservative work $W_{nc}$, $\Delta E = W_{nc}$.

Before substituting numbers for **Work–Energy Theorem and Mechanical Energy**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Identify all conservative forces; explicit $W_{nc}$ from friction or external push.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Work–Energy Theorem and Mechanical Energy** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Block $m=2.0\,\mathrm{kg}$ slides $d=3.0\,\mathrm{m}$ on rough horizontal ($\mu_k=0.20$) starting at $v_i=5.0\,\mathrm{m/s}$. $W_{nc}=-\mu_k mg d=-11.8\,\mathrm{J}$. $\Delta K = -11.8\,\mathrm{J}$ gives $v_f=\sqrt{25-11.8}\approx3.6\,\mathrm{m/s}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Work–Energy Theorem and Mechanical Energy**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Work-energy replaces Newton if path known. Sign on friction work. Energy bar chart optional but helps partial credit.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Power is $dW/dt$; potential links to fields in gravity unit.
""",
    ('AP Physics C: Mechanics', 'Linear Momentum, Impulse, and Collisions'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Elastic/inelastic collisions 1D and 2D; impulse from force-time graph; center-of-mass frame (conceptual).

On the multiple-choice section, expect at least one item that tests whether you recognize when **Linear Momentum, Impulse, and Collisions** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\vec p = m\vec v$; impulse $J = \Delta p = \int F\,dt$. Closed system: $\sum \vec p_i$ constant.

Before substituting numbers for **Linear Momentum, Impulse, and Collisions**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Identify system boundary; external impulse zero unless stated.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Linear Momentum, Impulse, and Collisions** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Cart $m_1=0.50\,\mathrm{kg}$ at $2.0\,\mathrm{m/s}$ hits $m_2=0.30\,\mathrm{kg}$ at rest and sticks. $v = m_1 v_1/(m_1+m_2)=1.25\,\mathrm{m/s}$. Lost kinetic energy $\Delta K = 0.375\,\mathrm{J}$ to internal thermal/deformation.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Linear Momentum, Impulse, and Collisions**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Momentum conservation vector or scalar as appropriate. Distinguish elastic ($K$ conserved) from inelastic. Impulse area on $F$–$t$ graph.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Rotational analog $L=I\omega$; rocket motion uses momentum with changing mass (qualitative).
""",
    ('AP Physics C: Mechanics', 'Torque, Moment of Inertia, and Rotational Dynamics'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

$\sum\tau=I\alpha$ for extended bodies; pulley with $I$; rolling without slipping.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Torque, Moment of Inertia, and Rotational Dynamics** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\tau = rF\sin\theta$. $\sum \tau = I\alpha$. Rolling: $a = \alpha R$, $v=\\omega R$.

Before substituting numbers for **Torque, Moment of Inertia, and Rotational Dynamics**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Axis fixed; torque about that axis; rolling without slipping connects $a$ and $\alpha$.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Torque, Moment of Inertia, and Rotational Dynamics** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Disk $I=\tfrac{1}{2}MR^2$, $M=1.2\,\mathrm{kg}$, $R=0.20\,\mathrm{m}$, torque $4.0\,\mathrm{N\cdot m}$ about center. $I=0.024\,\mathrm{kg\cdot m^2}$, $\alpha=167\,\mathrm{rad/s^2}$, $a_t=33\,\mathrm{m/s^2}$ at rim.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Torque, Moment of Inertia, and Rotational Dynamics**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

$\tau=I\alpha$ with correct $I$ about axis. Extended object: do not use $F=ma$ for $\alpha$ without $r$. Rolling condition stated.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Angular momentum when $\sum\tau_{\mathrm{ext}}=0$; parallel axis shifts $I$.
""",
    ('AP Physics C: Mechanics', 'Angular Momentum and Its Conservation'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Spinning skater pulls arms in; collision with rotating rod; $L$ about point vs about CM.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Angular Momentum and Its Conservation** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\vec L = \vec r \times \vec p$ for particle; $L = I\omega$ rigid body. If $\sum \vec \tau_{\mathrm{ext}} = 0$, $L$ constant.

Before substituting numbers for **Angular Momentum and Its Conservation**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Choose axis; external torque about that axis must vanish for conservation.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Angular Momentum and Its Conservation** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Student $I_i=3.2\,\mathrm{kg\cdot m^2}$, $\omega_i=2.0\,\mathrm{rad/s}$ folds to $I_f=1.8\,\mathrm{kg\cdot m^2}$. $L$ constant gives $\omega_f = I_i\omega_i/I_f \approx 3.6\,\mathrm{rad/s}$, $K$ increases because internal work done.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

State why $L$ conserved (no external torque about vertical axis). $K$ can change with internal forces. Correct $I$ about same axis.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Central force orbits conserve $L$ (Kepler area law); translational $p$ conservation is the linear limit.
""",
    ('AP Physics C: Mechanics', 'Simple Harmonic Motion and Oscillations'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Find $\omega$, $T$, $x(t)$ for mass-spring or small-angle pendulum; energy swaps in SHM.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Simple Harmonic Motion and Oscillations** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$a = -\omega^2 x$. Spring: $\omega = \sqrt{k/m}$, $T=2\pi/\omega$. Pendulum small angle: $\omega = \sqrt{g/L}$.

Before substituting numbers for **Simple Harmonic Motion and Oscillations**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Restoring force linear in displacement; small angle for pendulum.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Simple Harmonic Motion and Oscillations** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

$k=160\,\mathrm{N/m}$, $m=0.40\,\mathrm{kg}$. $\omega=20\,\mathrm{rad/s}$, $T=0.31\,\mathrm{s}$. At $A=0.05\,\mathrm{m}$, $v_{\max}=\omega A=1.0\,\mathrm{m/s}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Simple Harmonic Motion and Oscillations**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Minus sign in $a=-\omega^2 x$ or equivalent force law. $T$ independent of amplitude for ideal spring. Energy $\tfrac{1}{2}kA^2$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

LC circuits mirror $\omega=1/\sqrt{LC}$ in AP C E&M; damped motion adds friction term.
""",
    ('AP Physics C: Mechanics', 'Newton’s Laws with Variable Forces (Calculus)'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

$F(t)$ or $F(x)$; solve $dv/dt$ or $v\,dv/dx$; terminal speed when $F=0$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Newton’s Laws with Variable Forces** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$F = m\, dv/dt$. Work: $W = \int F(x)\,dx$. For drag linear in $v$, set $mg=kv$ at terminal speed.

Before substituting numbers for **Newton’s Laws with Variable Forces**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Continuous force; specify initial condition.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Newton’s Laws with Variable Forces** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

$F(t)=6.0e^{-0.50t}\,\mathrm{N}$ on $m=2.0\,\mathrm{kg}$ from rest. $a=F/m=3.0e^{-0.50t}$. $v(t)=\int a\,dt = 6.0(1-e^{-0.50t})\,\mathrm{m/s}$, approaching $6.0\,\mathrm{m/s}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Newton’s Laws with Variable Forces**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Separate variables or integrate with IC. Differential equation setup point before solution. Terminal speed from balance.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

SHM is sinusoidal $F(x)$; gravitation uses $F(r)$ with potential integration.
""",
    ('AP Physics C: Mechanics', '1D and 2D Kinematics with Calculus'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Given $x(t)$ or $\vec r(t)$, find $v$, $a$; projectile from parametric derivatives; path curvature (conceptual).

On the multiple-choice section, expect at least one item that tests whether you recognize when **1D and 2D Kinematics with Calculus** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$v_x = dx/dt$, $a_x = dv_x/dt$. $|\vec v| = \sqrt{v_x^2+v_y^2}$.

Before substituting numbers for **1D and 2D Kinematics with Calculus**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Smooth functions; Cartesian components independent unless polar specified.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **1D and 2D Kinematics with Calculus** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

$x(t)=1.5t^2$, $y(t)=0.80t$ (meters, seconds). At $t=2.0\,\mathrm{s}$, $v_x=6.0\,\mathrm{m/s}$, $v_y=0.80\,\mathrm{m/s}$, speed $\approx6.05\,\mathrm{m/s}$, $a_x=3.0\,\mathrm{m/s^2}$, $a_y=0$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **1D and 2D Kinematics with Calculus**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Component derivatives. Do not confuse speed with velocity vector. Position from integrating $v$ with IC.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Rotational $\theta(t)$ same pattern; energy methods shortcut when force is conservative.
""",
    ('AP Physics C: Mechanics', 'Projectile Motion'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Range, max height, time of flight; launch from cliff; hit moving target (relative velocity).

On the multiple-choice section, expect at least one item that tests whether you recognize when **Projectile Motion** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$x = v_{0x}t$, $y = v_{0y}t - \tfrac{1}{2}gt^2$. Range level: $R = v_0^2\sin(2\theta_0)/g$.

Before substituting numbers for **Projectile Motion**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Uniform $g$; neglect air drag unless given.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Projectile Motion** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Ball launched at $v_0=18\,\mathrm{m/s}$, $\theta_0=35^\circ$. $v_{0x}=14.7\,\mathrm{m/s}$, $v_{0y}=10.3\,\mathrm{m/s}$. $t_{\mathrm{flight}}=2v_{0y}/g\approx2.1\,\mathrm{s}$, $R\approx31\,\mathrm{m}$, $H=v_{0y}^2/(2g)\approx5.4\,\mathrm{m}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Projectile Motion**—proportionality reasoning alone can earn a point when the calculator fails.

**(c) Limiting check:** State one limit (very small, very large, equilibrium, or $t=0$) where the result must reduce to a known fact from an earlier unit. If that limit fails, revisit sign conventions or subscripts (initial vs final, inside vs outside).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Separate $x$ and $y$. Symmetry at same height on level ground. Cliff problems: set $y=-h$ for landing.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Circular motion uses different acceleration direction; drag makes range sub-linear in $v_0$.
""",
    ('AP Physics C: Mechanics', 'Friction, Inclines, and Free-Body Diagrams'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Block on incline with $\mu_s$, $\mu_k$; Atwood with friction; draw FBD and solve $a$, $T$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Friction, Inclines, and Free-Body Diagrams** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$f_s \le \mu_s N$, $f_k = \mu_k N$. Incline: $N=mg\cos\theta$, component $mg\sin\theta$.

Before substituting numbers for **Friction, Inclines, and Free-Body Diagrams**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Rigid bodies; friction direction opposes impending or actual slip.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Friction, Inclines, and Free-Body Diagrams** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

$m=5.0\,\mathrm{kg}$ on $30^\circ$ incline, $\mu_k=0.15$. Along plane: $mg\sin30^\circ - \mu_k mg\cos30^\circ = ma$ gives $a\approx3.6\,\mathrm{m/s^2}$ down the slope.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Friction, Inclines, and Free-Body Diagrams**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

FBD with axes along/across plane. Static vs kinetic friction label. Normal not $mg$ on incline.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Rotational incline adds $\tau=I\alpha$; variable friction uses integration.
""",
    ('AP Physics C: Mechanics', 'Center of Mass and Systems of Particles'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Find CM coordinates; motion of CM under external forces; explosion with pieces.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Center of Mass and Systems of Particles** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\vec r_{\mathrm{CM}} = \sum m_i \vec r_i / \sum m_i$. $M\vec a_{\mathrm{CM}} = \sum \vec F_{\mathrm{ext}}$.

Before substituting numbers for **Center of Mass and Systems of Particles**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Point particles or uniform density for continuous bodies (given formula).

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Center of Mass and Systems of Particles** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Two masses $2.0\,\mathrm{kg}$ at $x=0$ and $3.0\,\mathrm{kg}$ at $x=4.0\,\mathrm{m}$. $x_{\mathrm{CM}}=(2(0)+3(4))/5=2.4\,\mathrm{m}$. Internal explosion does not move CM if no external impulse.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Center of Mass and Systems of Particles**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

CM weighted average. Internal forces cancel for CM motion. Velocity of CM from total momentum/M.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Linear momentum of system is $M\vec v_{\mathrm{CM}}$; rotation about CM simplifies $I$.
""",
    ('AP Physics C: Mechanics', 'Gravitational Field, Potential, and Escape Speed'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

$g(r)$, $U(r)=-GMm/r$, escape speed from surface; equipotential vs field lines (link to E&M).

On the multiple-choice section, expect at least one item that tests whether you recognize when **Gravitational Field, Potential, and Escape Speed** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$g = GM/r^2$. $U = -GMm/r$ (zero at infinity). $v_{\mathrm{esc}} = \sqrt{2GM/R}$.

Before substituting numbers for **Gravitational Field, Potential, and Escape Speed**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Spherical planet; no atmosphere drag for escape calculation.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Gravitational Field, Potential, and Escape Speed** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Moon $GM=2.82\times10^{12}\,\mathrm{m^3/s^2}$, $R=1.74\times10^6\,\mathrm{m}$. $v_{\mathrm{esc}}=\sqrt{2GM/R}\approx2.4\times10^3\,\mathrm{m/s}$. At $r=2R$, $g$ is $g_0/4$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Gravitational Field, Potential, and Escape Speed**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Negative potential well diagram. Escape from energy $K+U\ge0$. Field points toward mass.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Electric potential $kQ/r$ parallel; Gauss for gravity outside sphere same as point mass.
""",
    ('AP Physics C: Mechanics', 'Kepler’s Third Law and Orbital Periods'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Compare periods at two radii; find mass of planet from satellite period.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Kepler’s Third Law and Orbital Periods** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$T^2 = \dfrac{4\pi^2}{GM}a^3$. For circular orbit $r=a$, $v=\sqrt{GM/r}$.

Before substituting numbers for **Kepler’s Third Law and Orbital Periods**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Two-body, central $1/r^2$ force; circular if using $r$ not $a$ without correction.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Kepler’s Third Law and Orbital Periods** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Satellite at $r=7.0\times10^6\,\mathrm{m}$ around Earth ($GM=3.98\times10^{14}$). $T = 2\pi\sqrt{r^3/GM}\approx5.8\times10^3\,\mathrm{s}$ (about $96\,\mathrm{min}$). Doubling $r$ multiplies $T$ by $2^{3/2}\approx2.8$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Kepler’s Third Law and Orbital Periods**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

$a^3/T^2$ constant for same central body. Mass of central body from slope, not satellite mass. Kelvin not needed; time in seconds.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Elliptical orbits use semi-major $a$; energy $E=-GMm/(2a)$ consistent with period.
""",
    ('AP Physics C: Mechanics', 'Power and Instantaneous Power'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

$P=Fv$ for constant force along motion; average vs instantaneous power on $F$–$x$ graph.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Power and Instantaneous Power** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Average $P = W/\Delta t$. Instantaneous $P = dW/dt = \vec F \cdot \vec v$.

Before substituting numbers for **Power and Instantaneous Power**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Dot product uses angle between force and velocity.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Power and Instantaneous Power** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Motor pulls crate at constant $v=1.5\,\mathrm{m/s}$ against $F=120\,\mathrm{N}$ friction. $P=Fv=180\,\mathrm{W}$. If speed doubles at same force, power doubles.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Power and Instantaneous Power**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Instantaneous power needs $\cos\theta$. Unit watt = J/s. Do not use $P=Fv$ if force not parallel.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Rotational power $P=\tau\omega$; electrical power pairs in circuits unit.
""",
    ('AP Physics C: Mechanics', 'Oscillations'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Broader than SHM: damped qualitative, driven resonance peak, compare pendulum and spring graphs.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Oscillations** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Same as SHM plus damping qualitative $b$; resonance when drive frequency matches natural $\\omega_0$.

Before substituting numbers for **Oscillations**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Identify whether question is ideal SHM or includes damping.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Oscillations** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Driven cart on spring shows maximum amplitude when drive $f=0.80\,\mathrm{Hz}$ matches measured natural $f_0=0.80\,\mathrm{Hz}$; off-resonance at $0.60\,\mathrm{Hz}$ amplitude drops by half in lab notes.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Oscillations**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Natural frequency from system parameters, not amplitude. Resonance explanation in words earns point. Damping reduces $Q$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

LC resonance in E&M; standing waves are spatial oscillations.
""",
    ('AP Physics C: Mechanics', 'Linear Momentum'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Focused conservation drills without collision classification; recoil, rocket qualitative, 2D components.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Linear Momentum** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\sum p_x$ and $\sum p_y$ separately constant. $p=mv$.

Before substituting numbers for **Linear Momentum**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Isolated system for conservation.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Linear Momentum** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Ice skater $70\,\mathrm{kg}$ throws $2.0\,\mathrm{kg}$ ball at $8.0\,\mathrm{m/s}$ forward. Skater recoils $v=-2.0(8.0)/70\approx-0.23\,\mathrm{m/s}$ backward.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Linear Momentum**—proportionality reasoning alone can earn a point when the calculator fails.

**(c) Limiting check:** State one limit (very small, very large, equilibrium, or $t=0$) where the result must reduce to a known fact from an earlier unit. If that limit fails, revisit sign conventions or subscripts (initial vs final, inside vs outside).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

System choice stated. Vector components if 2D. Sign convention for direction.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Impulse-collision unit adds energy classification; angular momentum is rotational counterpart.
""",
    ('AP Physics C: Mechanics', 'Work, Energy, and Power'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Combined cycle: find speed from energy, then power to maintain speed; incline with friction energy budget.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Work, Energy, and Power** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$W=\\Delta K + \\Delta U + W_{nc}$. $P=Fv$.

Before substituting numbers for **Work, Energy, and Power**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Path for $W_{nc}$ identified.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Work, Energy, and Power** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Climber $60\,\mathrm{kg}$ ascends $h=400\,\mathrm{m}$ in $1800\,\mathrm{s}$ at steady pace. Average power against gravity $mgh/t \approx 130\,\mathrm{W}$ plus extra for metabolic inefficiency not in ideal physics model.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Work, Energy, and Power**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Energy diagram with initial/final. Power average vs instantaneous distinguished. Include $U_g=mgh$ when height changes.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Potential in gravity chapter; rotational energy adds $\tfrac{1}{2}I\omega^2$.
""",
    ('AP Physics C: Mechanics', 'Force and Translational Dynamics'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Multi-block systems; elevators apparent weight; $F=ma$ with constraints.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Force and Translational Dynamics** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\sum F = ma$. Constraint: same $a$ for connected blocks (ideal string).

Before substituting numbers for **Force and Translational Dynamics**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Massless string, ideal pulley unless $I$ given.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Force and Translational Dynamics** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Elevator accelerates upward at $a=2.0\,\mathrm{m/s^2}$ with $m=70\,\mathrm{kg}$ passenger. Scale reads $N=m(g+a)=70(11.8)\approx830\,\mathrm{N}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Force and Translational Dynamics**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Third law pairs not confused with system FBD. Direction of $a$ consistent. Elevator: $N=m(g+a)$ sign from upward acceleration.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Rotational $\sum\tau=I\alpha$ structure parallels this; variable force uses calculus form.
""",
    ('AP Physics C: Mechanics', 'Parallel-Axis Theorem'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Shift $I$ from CM to parallel axis; composite objects; rod about end vs center.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Parallel-Axis Theorem** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: Mechanics, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$I = I_{\mathrm{cm}} + Md^2$. Rod center: $I=\\tfrac{1}{12}ML^2$; end: $I=\\tfrac{1}{3}ML^2$.

Before substituting numbers for **Parallel-Axis Theorem**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Axis parallel to CM axis; $d$ is separation distance.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Parallel-Axis Theorem** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Rod $M=1.5\,\mathrm{kg}$, $L=1.2\,\mathrm{m}$, pivot at one end. $I=\tfrac{1}{3}ML^2=0.72\,\mathrm{kg\cdot m^2}$. Physical pendulum period $T=2\pi\sqrt{I/(Mgh)}$ with $h=L/2$ for end pivot.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Parallel-Axis Theorem**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

$d$ squared. Add $Md^2$ to correct $I_{\mathrm{cm}}$. Composite: sum $I$ and masses about same axis.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Torque and SHM labs use shifted $I$; moment integrals derive CM forms.
""",
    ('AP Physics C: E&M', 'Gauss’s law'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Find flux through cube face near point charge; symmetry arguments; enclosed charge from flux.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Gauss’s law** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\Phi = \oint \vec E \cdot d\vec A = Q_{\mathrm{enc}}/\varepsilon_0$. Spherical: $E = kQ/r^2$.

Before substituting numbers for **Gauss’s law**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Closed Gaussian surface; static fields; symmetry to make $E$ constant on surface patch.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Gauss’s law** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Point charge $Q=3.0\times10^{-9}\,\mathrm{C}$ inside sphere radius $r=0.20\,\mathrm{m}$. Flux $\Phi=Q/\varepsilon_0\approx3.4\times10^2\,\mathrm{N\cdot m^2/C}$; $E(r)=kQ/r^2\approx675\,\mathrm{N/C}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Gauss’s law**—proportionality reasoning alone can earn a point when the calculator fails.

**(c) Limiting check:** State one limit (very small, very large, equilibrium, or $t=0$) where the result must reduce to a known fact from an earlier unit. If that limit fails, revisit sign conventions or subscripts (initial vs final, inside vs outside).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Closed surface stated. $Q_{\mathrm{enc}}$ only inside. Flux independent of radius for single point charge sphere.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Applications specialize geometry; potential integrates $E$.
""",
    ('AP Physics C: E&M', 'Gauss’s Law practise'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Extra drill sets mirroring Gauss’s law with varied surfaces; flux ranking; charge from enclosed flux.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Gauss’s Law practise** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Same as Gauss’s law: $\Phi = Q_{\mathrm{enc}}/\varepsilon_0$, symmetry choices.

Before substituting numbers for **Gauss’s Law practise**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Practice problems assume static $\vec E$ and clearly drawn Gaussian surfaces.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Gauss’s Law practise** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Cube side $0.10\,\mathrm{m}$ in uniform $E=500\,\mathrm{N/C}$ parallel to one face. Flux through one face $EA=5.0\,\mathrm{N\cdot m^2/C}$; net flux zero for closed cube in uniform field (no enclosed charge).

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Gauss’s Law practise**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Uniform field: only faces with $\vec E\perp A$ contribute. Net flux zero without $Q_{\mathrm{enc}}$. Practice items reward symmetry sentence.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Move to plane/line/sphere applications once flux integral is fluent.
""",
    ('AP Physics C: E&M', 'Electric Charges, Fields, and Gauss’s Law'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Combined Coulomb, field lines, and flux; compare force vs field; conductor in external field.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Electric Charges, Fields, and Gauss’s Law** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\vec E = \vec F/q$. Coulomb $F=kq_1q_2/r^2$. Gauss $\Phi=Q_{\\mathrm{enc}}/\varepsilon_0$.

Before substituting numbers for **Electric Charges, Fields, and Gauss’s Law**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Test charge $q$ small; superposition for multiple sources.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Electric Charges, Fields, and Gauss’s Law** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Two charges $+4.0\,\mu\mathrm{C}$ and $-4.0\,\mu\mathrm{C}$ separated $0.30\,\mathrm{m}$. Midpoint field from each $k|q|/(0.15)^2$ adds to $E\approx9.6\times10^5\,\mathrm{N/C}$ toward the negative charge.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Electric Charges, Fields, and Gauss’s Law**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Field vector addition. Force on third charge uses $F=qE$. Flux linked to enclosed charge only.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Potential is scalar line integral of $E$; conductors redistribute charge to $E_\perp=0$ inside.
""",
    ('AP Physics C: E&M', 'Electric Potential'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

$V$ from point charges; $V=\int E\,dr$; equipotential sketch; potential energy $U=qV$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Electric Potential** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$V = kQ/r$. $\Delta V = -\int \vec E \cdot d\vec l$. $U = qV$.

Before substituting numbers for **Electric Potential**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Zero reference at infinity unless grounded conductor sets $V=0$.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Electric Potential** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Uniform field $E=200\,\mathrm{N/C}$ from $+x$. Moving $+2.0\,\mu\mathrm{C}$ from $x=0$ to $x=0.05\,\mathrm{m}$: $\Delta V=-E\Delta x=-10\,\mathrm{V}$, $\Delta U=q\Delta V=-2.0\times10^{-5}\,\mathrm{J}$ (field does positive work on positive charge moving with field).

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Electric Potential**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Sign of $\Delta V$ vs field direction. Scalar sum for $V$ from multiple charges. Energy from $\Delta U$, not $V$ alone.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Capacitors store energy in $V$; Kirchhoff loops sum $\Delta V$.
""",
    ('AP Physics C: E&M', 'Electric Circuits'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Series/parallel resistors; $V=IR$; power $P=IV$; read circuit schematics.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Electric Circuits** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$V=IR$. Series $R_{\mathrm{eq}}=\sum R$. Parallel $1/R_{\mathrm{eq}}=\sum 1/R$. $P=IV=I^2R$.

Before substituting numbers for **Electric Circuits**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Steady DC; ideal wires; unless labeled, meters ideal.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Electric Circuits** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

$12\,\mathrm{V}$ battery, $R_1=6.0\,\Omega$ in series with parallel pair $R_2=12\,\Omega$, $R_3=12\,\Omega$. Parallel section $6.0\,\Omega$, total $12\,\Omega$, current $1.0\,\mathrm{A}$, power battery $12\,\mathrm{W}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Electric Circuits**—proportionality reasoning alone can earn a point when the calculator fails.

**(c) Limiting check:** State one limit (very small, very large, equilibrium, or $t=0$) where the result must reduce to a known fact from an earlier unit. If that limit fails, revisit sign conventions or subscripts (initial vs final, inside vs outside).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Equivalent resistance setup. Current split in parallel. Power dissipation on correct resistor.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

RC transients add capacitors; Kirchhoff for multi-loop.
""",
    ('AP Physics C: E&M', 'Conductors and Capacitors'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Charge on conductor surface; parallel-plate $C=\varepsilon A/d$; energy $U=\tfrac{1}{2}CV^2$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Conductors and Capacitors** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$C = \varepsilon_0 A/d$. $Q=CV$. Energy $U=\\tfrac{1}{2}CV^2= Q^2/(2C)$.

Before substituting numbers for **Conductors and Capacitors**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Fringing neglected unless stated; conductors equipotential.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Conductors and Capacitors** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Plate area $0.020\,\mathrm{m^2}$, separation $1.0\,\mathrm{mm}$. $C=\varepsilon_0 A/d\approx1.8\times10^{-10}\,\mathrm{F}$. At $V=9.0\,\mathrm{V}$, $Q=1.6\times10^{-9}\,\mathrm{C}$, $U\approx7.3\times10^{-9}\,\mathrm{J}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Conductors and Capacitors**—proportionality reasoning alone can earn a point when the calculator fails.

**(c) Limiting check:** State one limit (very small, very large, equilibrium, or $t=0$) where the result must reduce to a known fact from an earlier unit. If that limit fails, revisit sign conventions or subscripts (initial vs final, inside vs outside).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

$E$ zero inside conductor in electrostatics. Capacitance geometry formula cited. Energy doubles if $V$ doubles at fixed $C$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Dielectrics multiply $C$; RC decay uses same $C$.
""",
    ('AP Physics C: E&M', 'Magnetic Fields and Electromagnetism'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Field from long wire; force on charge; right-hand rules; electromagnet qualitative.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Magnetic Fields and Electromagnetism** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Biot–Savart long wire: $B=\mu_0 I/(2\pi r)$. Lorentz $F=qvB\sin\theta$.

Before substituting numbers for **Magnetic Fields and Electromagnetism**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Steady currents; point charge motion unless current wire.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Magnetic Fields and Electromagnetism** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Wire $I=8.0\,\mathrm{A}$, $r=0.050\,\mathrm{m}$. $B=\mu_0 I/(2\pi r)\approx3.2\times10^{-5}\,\mathrm{T}$. Proton speed $2.0\times10^5\,\mathrm{m/s}$ perpendicular: $F=qvB\approx1.0\times10^{-18}\,\mathrm{N}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Magnetic Fields and Electromagnetism**—proportionality reasoning alone can earn a point when the calculator fails.

**(c) Limiting check:** State one limit (very small, very large, equilibrium, or $t=0$) where the result must reduce to a known fact from an earlier unit. If that limit fails, revisit sign conventions or subscripts (initial vs final, inside vs outside).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

RH rule for $\vec B$ direction. Force perpendicular to $\vec v$. Distinguish $q$ sign.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Ampère law for symmetry; induction when flux changes.
""",
    ('AP Physics C: E&M', 'Data CollectionsElectromagnetic Induction'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Faraday lab: induced emf vs $d\Phi/dt$; graph $\mathcal E$ vs magnet speed; uncertainty in coil turns.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Data CollectionsElectromagnetic Induction** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\mathcal E = -N\, d\Phi/dt$. Flux $\Phi = \int \vec B\cdot d\vec A$.

Before substituting numbers for **Data CollectionsElectromagnetic Induction**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Coil N turns counted; uniform $\Delta B$ over area or average stated.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Data CollectionsElectromagnetic Induction** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Coil $N=120$, area $A=0.010\,\mathrm{m^2}$, $\Delta B=0.40\,\mathrm{T}$ in $\Delta t=0.050\,\mathrm{s}$. $\mathcal E \approx N A \Delta B/\Delta t \approx 9.6\,\mathrm{V}$ (magnitude; Lenz opposes change).

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Data CollectionsElectromagnetic Induction**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Faraday setup with $N$. Lenz direction sentence. Data: linearize $\mathcal E$ vs speed if magnet motion varied.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

RL/LC time constants follow in circuit induction unit.
""",
    ('AP Physics C: E&M', 'Equipotential Surfaces and Field Lines'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Sketch equipotentials near dipole; $E$ perpendicular to equipotential; conductor surface is equipotential.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Equipotential Surfaces and Field Lines** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\vec E = -\nabla V$; no work moving charge on equipotential; $E$ lines perpendicular to $V$ contours.

Before substituting numbers for **Equipotential Surfaces and Field Lines**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Electrostatic equilibrium for conductors.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Equipotential Surfaces and Field Lines** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Parallel plates separation $d=0.02\,\mathrm{m}$, $V=100\,\mathrm{V}$. Uniform $E=5000\,\mathrm{N/C}$; equipotentials spaced every $20\,\mathrm{V}$ are $0.004\,\mathrm{m}$ apart.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Equipotential Surfaces and Field Lines**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Perpendicularity stated. No field line crossing. Conductor surface $V$ constant.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Capacitor stored energy tied to $V$ between plates; Gauss links $E$ flux to charge.
""",
    ('AP Physics C: E&M', 'Magnetic Force, Currents, and Right-Hand Rules'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Force on wire in $B$; torque on loop; two parallel wires.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Magnetic Force, Currents, and Right-Hand Rules** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Wire: $F=ILB\sin\theta$. Loop torque $\tau = NIAB\sin\theta$. Parallel wires $F/L=\mu_0 I_1 I_2/(2\pi d)$.

Before substituting numbers for **Magnetic Force, Currents, and Right-Hand Rules**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Uniform $B$ over wire length unless integration specified.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Magnetic Force, Currents, and Right-Hand Rules** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Wire $L=0.40\,\mathrm{m}$, $I=5.0\,\mathrm{A}$ in $B=0.30\,\mathrm{T}$ perpendicular. $F=0.60\,\mathrm{N}$. RH rule gives force direction out of page if $I$ right and $B$ into page.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Magnetic Force, Currents, and Right-Hand Rules**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Three RH rules distinguished (field from current, force on current, force on charge). $\sin\theta$ between $I$ and $B$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Motors use torque; mass spectrometer uses $F=qvB$.
""",
    ('AP Physics C: E&M', 'Biot–Savart Law and Ampère’s Law'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Field at center of loop; infinite wire; solenoid interior $B=\mu_0 n I$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Biot–Savart Law and Ampère’s Law** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Loop center: $B=\mu_0 I/(2R)$. Ampère: $\oint \vec B\cdot d\vec l = \mu_0 I_{\mathrm{enc}}$.

Before substituting numbers for **Biot–Savart Law and Ampère’s Law**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Steady DC; symmetry for Ampère (wire, solenoid).

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Biot–Savart Law and Ampère’s Law** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Loop radius $R=0.15\,\mathrm{m}$, $I=10\,\mathrm{A}$. $B=\mu_0 I/(2R)\approx4.2\times10^{-5}\,\mathrm{T}$ at center. Solenoid $n=800\,\mathrm{turns/m}$, $I=2.0\,\mathrm{A}$ gives $B=\mu_0 n I\approx2.0\times10^{-3}\,\mathrm{T}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Biot–Savart Law and Ampère’s Law**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Ampère path mirrors Gauss symmetry argument. Biot–Savart direction by RH rule. $n$ as turns per length.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Faraday uses changing $B$ flux; energy stored in $B$ field.
""",
    ('AP Physics C: E&M', 'Faraday’s Law, Lenz’s Law, and Induction Circuits'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Induced current direction; motional emf; changing area in field.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Faraday’s Law, Lenz’s Law, and Induction Circuits** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\mathcal E = -d\Phi/dt$. Motional: $\mathcal E = Blv$ (rod perpendicular). $I=\mathcal E/R$.

Before substituting numbers for **Faraday’s Law, Lenz’s Law, and Induction Circuits**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Closed conducting path; Lenz opposes flux change.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Faraday’s Law, Lenz’s Law, and Induction Circuits** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Rod length $\ell=0.25\,\mathrm{m}$ moves at $v=3.0\,\mathrm{m/s}$ in $B=0.50\,\mathrm{T}$. $\mathcal E=Blv=0.375\,\mathrm{V}$. If $R=1.5\,\Omega$, $I=0.25\,\mathrm{A}$; Lenz makes current oppose increasing flux.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Faraday’s Law, Lenz’s Law, and Induction Circuits**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Flux change identified. Lenz sentence for direction. Motional vs transformer emf label.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Inductance resists $\Delta I$; AC generators rotate coil in $B$.
""",
    ('AP Physics C: E&M', 'Inductance, RL Circuits, and LC Oscillations'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

RL time constant; current growth; LC frequency; energy split $U_L=\tfrac{1}{2}LI^2$, $U_C=\tfrac{1}{2}CV^2$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Inductance, RL Circuits, and LC Oscillations** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$V_L = L\, dI/dt$. RL: $I(t)=I_f(1-e^{-t/\\tau})$, $\\tau=L/R$. LC: $\\omega=1/\\sqrt{LC}$, $T=2\\pi\\sqrt{LC}$.

Before substituting numbers for **Inductance, RL Circuits, and LC Oscillations**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Ideal components unless $R$ in LC damping noted.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Inductance, RL Circuits, and LC Oscillations** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

$L=0.40\,\mathrm{H}$, $R=8.0\,\Omega$. $\tau=0.050\,\mathrm{s}$. At $t=\tau$, $I=0.632\,I_f$. LC with $C=5.0\,\mu\mathrm{F}$: $f=1/(2\pi\sqrt{LC})\approx113\,\mathrm{Hz}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Inductance, RL Circuits, and LC Oscillations**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

$\tau$ definition. LC energy oscillates between $L$ and $C$. Initial conditions for RL.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

RC shares exponential form; transformers use mutual $M$.
""",
    ('AP Physics C: E&M', 'RC Circuit Transients and Capacitor Switching'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Charge/discharge curves; switch at $t=0$; time constant $\tau=RC$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **RC Circuit Transients and Capacitor Switching** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$Q(t)=Q_f(1-e^{-t/RC})$. Discharge $Q=Q_0 e^{-t/RC}$. $I=dQ/dt$.

Before substituting numbers for **RC Circuit Transients and Capacitor Switching**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Step voltage; ideal switch.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **RC Circuit Transients and Capacitor Switching** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

$R=10\,\mathrm{k\Omega}$, $C=2.0\,\mu\mathrm{F}$, $\tau=0.020\,\mathrm{s}$, $V_s=9.0\,\mathrm{V}$. At $t=\tau$, $V_C=0.632\,V_s\approx5.7\,\mathrm{V}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **RC Circuit Transients and Capacitor Switching**—proportionality reasoning alone can earn a point when the calculator fails.

**(c) Limiting check:** State one limit (very small, very large, equilibrium, or $t=0$) where the result must reduce to a known fact from an earlier unit. If that limit fails, revisit sign conventions or subscripts (initial vs final, inside vs outside).

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Initial capacitor $V$ continuous. Current discontinuous at switch unless limited. $\tau=RC$ with units.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

RL parallel structure; steady state is DC open capacitor.
""",
    ('AP Physics C: E&M', 'Coulomb’s Law and Superposition'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Force on charge from two others; equilibrium position; vector addition.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Coulomb’s Law and Superposition** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\vec F = k q_1 q_2 \hat r / r^2$. Superposition: $\vec F_{\mathrm{net}}=\sum \vec F_i$.

Before substituting numbers for **Coulomb’s Law and Superposition**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Point charges in vacuum unless $\varepsilon_r$ given.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Coulomb’s Law and Superposition** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

$+1.0\,\mu\mathrm{C}$ at origin feels $+2.0\,\mu\mathrm{C}$ at $x=0.30\,\mathrm{m}$ repulsive $F\approx0.20\,\mathrm{N}$ and $-3.0\,\mu\mathrm{C}$ at $y=0.40\,\mathrm{m}$ attractive $F\approx0.54\,\mathrm{N}$ toward negative charge; vector sum needed.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Coulomb’s Law and Superposition**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Direction on each force. Use components in 2D. Equilibrium sets $F_{\mathrm{net}}=0$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Field is force per charge; Gauss replaces integration for symmetric distributions.
""",
    ('AP Physics C: E&M', 'Continuous Charge Distributions (Line, Ring, Disk)'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Field on axis of ring/disk; infinite line $\lambda$; integrate $dq$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Continuous Charge Distributions** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Ring axis: $E = kQx/(x^2+R^2)^{3/2}$. Line: $E = 2k\\lambda/r$ (infinite). Disk on axis uses integration (given or set up).

Before substituting numbers for **Continuous Charge Distributions**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Uniform charge density; symmetry on axis.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Continuous Charge Distributions** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Ring $Q=5.0\times10^{-9}\,\mathrm{C}$, $R=0.10\,\mathrm{m}$, point $x=0.10\,\mathrm{m}$ on axis. $E = kQx/(x^2+R^2)^{3/2}\approx1.6\times10^3\,\mathrm{N/C}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Continuous Charge Distributions**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Setup $dq$ and $r$ correct. Symmetry cancels transverse components on axis. Limit $x\gg R$ gives dipole/point behavior.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Gauss for infinite line faster; potential integrates same $dq$.
""",
    ('AP Physics C: E&M', 'Dielectrics and Capacitors with Insulators'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Insert dielectric constant $\kappa$; bound charges; energy change at fixed $V$ vs fixed $Q$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Dielectrics and Capacitors with Insulators** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$C = \\kappa \\varepsilon_0 A/d$. With battery connected ($V$ fixed): $Q=\\kappa Q_0$. Isolated ($Q$ fixed): $U=Q^2/(2C)$ drops as $C$ rises.

Before substituting numbers for **Dielectrics and Capacitors with Insulators**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Uniform dielectric fills gap; neglect edge effects.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Dielectrics and Capacitors with Insulators** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Air capacitor $C_0=4.0\,\mathrm{pF}$, $\kappa=3.0$ oil inserted with battery $12\,\mathrm{V}$ connected. New $C=12\,\mathrm{pF}$, $Q=1.44\times10^{-10}\,\mathrm{C}$, stored energy $\tfrac{1}{2}CV^2$ triples at fixed $V$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Dielectrics and Capacitors with Insulators**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Fixed $V$ vs fixed $Q$ branch. Bound charges reduce internal $E$ by $\kappa$. Energy bookkeeping explicit.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

RC timing changes with $C$; microscopic model links to polarization.
""",
    ('AP Physics C: E&M', 'Kirchhoff’s Rules and Multi-Loop Circuits'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Two-loop circuit; sign conventions; solve for branch currents.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Kirchhoff’s Rules and Multi-Loop Circuits** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Junction: $\sum I_{\mathrm{in}}=\sum I_{\mathrm{out}}$. Loop: $\sum \Delta V = 0$ around closed path.

Before substituting numbers for **Kirchhoff’s Rules and Multi-Loop Circuits**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Steady DC; label current directions consistently.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Kirchhoff’s Rules and Multi-Loop Circuits** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Two loops with shared $R=4.0\,\Omega$, batteries $10\,\mathrm{V}$ and $4.0\,\mathrm{V}$ in opposing branches. Simultaneous equations yield branch currents $I_1=1.0\,\mathrm{A}$, $I_2=0.50\,\mathrm{A}$ after sign convention (values illustrative—student must show loop sums).

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Kirchhoff’s Rules and Multi-Loop Circuits**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Junction equation independent of loops. Loop signs from traversal direction. Consistent current arrows.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

RC/RL add reactive elements; power $P=I^2R$ on each resistor.
""",
    ('AP Physics C: E&M', 'Mutual Inductance and Transformers'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Transformer voltage ratio; energy transfer; primary/secondary turns.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Mutual Inductance and Transformers** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$\mathcal E_2 = -M\, dI_1/dt$. Ideal transformer $V_2/V_1 = N_2/N_1$, $I_2/I_1 = N_1/N_2$.

Before substituting numbers for **Mutual Inductance and Transformers**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Ideal: no flux leakage, no resistance (unless efficiency asked).

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Mutual Inductance and Transformers** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Step-down $N_1=500$, $N_2=50$, primary $V_1=120\,\mathrm{V}$ RMS. $V_2=12\,\mathrm{V}$. Load $R=6.0\,\Omega$ draws $I_2=2.0\,\mathrm{A}$, primary current $\approx0.20\,\mathrm{A}$ for ideal power match.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Mutual Inductance and Transformers**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Turns ratio squared for impedance reflection (if advanced). Power in $\approx$ power out ideal. Phase/sign of mutual emf.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Self-inductance $L$ is $M$ with same coil; Faraday underlies both.
""",
    ('AP Physics C: E&M', 'Electric Field Energy and Energy Density'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Energy stored in capacitor; $u=\tfrac{1}{2}\varepsilon E^2$; energy in field volume.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Electric Field Energy and Energy Density** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

$U=\\tfrac{1}{2}CV^2$. Energy density $u=\\tfrac{1}{2}\\varepsilon_0 E^2$ (and $B$ analog later).

Before substituting numbers for **Electric Field Energy and Energy Density**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Uniform field in volume counted.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Electric Field Energy and Energy Density** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Parallel plates $E=2.0\times10^4\,\mathrm{N/C}$, gap $d=0.001\,\mathrm{m}$, area $0.010\,\mathrm{m^2}$. Volume $10^{-5}\,\mathrm{m^3}$, $u=\tfrac{1}{2}\varepsilon_0 E^2\approx1.8\,\mathrm{J/m^3}$, total $U\approx1.8\times10^{-5}\,\mathrm{J}$ consistent with $\tfrac{1}{2}CV^2$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Electric Field Energy and Energy Density**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Two formulas for $U$ must agree. Density times volume. Field energy location in gap.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Magnetic energy density $u_B=B^2/(2\mu_0)$ in inductors; Poynting vector concept at boundary.
""",
    ('AP Physics C: E&M', 'Gauss’s Law Applications: Plane, Line, and Sphere'): r"""## Exam Application Lab

## 1. Typical AP prompt shapes

Infinite sheet $\sigma$; line $\lambda$; insulating sphere $r<R$ and $r>R$.

On the multiple-choice section, expect at least one item that tests whether you recognize when **Gauss’s Law Applications: Plane, Line, and Sphere** applies versus a neighboring model, plus one translation between a diagram and a sentence in words. Free-response subparts often split **qualitative** (explain, compare, justify) and **quantitative** (calculate, derive) so partial credit survives arithmetic slips.

For AP Physics C: E&M, released-style labs and pivot questions frequently ask you to hold one variable fixed while predicting how a readout changes. Treat every stem as a contract: underline the system boundary, the conserved quantity (if any), and the measurement surface (scale, meter, screen, graph axis).

Readers also recycle this idea as a ranking task (greatest to least), a which-graph-is-correct set, or a short experimental design: name the independent variable, the dependent variable, and one quantity that must be controlled. A justification stem awards no calculation credit if the physics sentence is missing.

## 2. Formula sequence (LaTeX, topic-specific)

Sheet: $E=\\sigma/(2\\varepsilon_0)$ both sides. Line: $E=2k\\lambda/r$. Sphere outside $kQ/r^2$; inside uniform $E\\propto r$.

Before substituting numbers for **Gauss’s Law Applications: Plane, Line, and Sphere**, write a one-line **model sentence** that tells the grader which relation is active. Then list symbols in SI with prefixes converted ($\mathrm{mm}\to\mathrm{m}$, $\mathrm{\mu C}\to\mathrm{C}$, $\mathrm{eV}\to\mathrm{J}$ when energy is needed).

When a stem gives a graph, decide whether the slope or the area under the curve carries the physics meaning for this topic. If differentiation or integration appears, state the variable of integration and its limits before antidifferentiating.

Write the sequence in the order you will actually use it, not the order it appears on the equation sheet. Box the unknown. If two subscripts appear, define what 1 versus 2 means in one margin dictionary. Cancel units so a power-of-ten error is visible before you box the number.

## 3. Assumptions you must state

Infinite extent or spherical symmetry as named.

If the idealization fails, name the **real correction** in one clause (viscosity, air resistance, wire resistance, relativity, radiation, friction, image charge, etc.) so you do not apply **Gauss’s Law Applications: Plane, Line, and Sphere** where the rubric expects the richer model.

Exam writers often hide assumptions in adjectives: “ideal,” “uniform,” “small angle,” “point mass,” “infinite,” “negligible,” or “steady state.” Mirror those words back in your first sentence.

If the stem never names an assumption, still write the standard idealization that licenses the equation you chose. Graders cannot award a starts-with-a-valid-expression point if the expression belongs to a different model.

## 4. Worked mini-scenario

Sheet $\sigma=2.0\times10^{-9}\,\mathrm{C/m^2}$. $E=\sigma/(2\varepsilon_0)\approx113\,\mathrm{N/C}$ uniform either side. Line $\lambda=5.0\times10^{-9}\,\mathrm{C/m}$ at $r=0.20\,\mathrm{m}$: $E=2k\lambda/r\approx450\,\mathrm{N/C}$.

**(b) Qualitative follow-up:** Without new numbers, describe what happens to the primary output if the dominant parameter doubles. Tie the direction to the leading term in your formula for **Gauss’s Law Applications: Plane, Line, and Sphere**—proportionality reasoning alone can earn a point when the calculator fails.

This numerical story is original classroom practice, not a released College Board exam. After the number, add one sentence that would still earn the reasoning point if arithmetic slipped: name the dependence (linear, inverse, quadratic) and the direction of the change.

## 5. Scoring language / what earns the point

Gaussian pillbox/cylinder/sphere named. Enclosed charge per length or area. Inside insulating sphere linear $E$.

Match the stem verb: calculate wants a number with a unit; derive wants a starting equation and algebra; determine may be a comparison; a sign question wants an explicit convention. Do not omit the unit on a boxed answer.

## 6. Transfer to a nearby topic

Gravity shell theorem parallel; conductor shields static field inside hollow.
""",
}
