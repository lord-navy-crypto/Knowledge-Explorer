"""
Deep knowledge blocks for AP Physics concepts.
Maps (subject, title) -> markdown starting with ## Detailed Knowledge
"""

PHYSICS_DEEP_BLOCKS = {
    ("AP Physics 1", "Pressure"): r"""## Detailed Knowledge

### 1. Definition and Scalar Nature of Pressure
Pressure is the magnitude of the perpendicular force exerted per unit area on a surface. In a fluid at rest, every surface element experiences a force directed perpendicular to that surface, regardless of the surface's orientation. Pressure is a scalar quantity: it has magnitude but no direction, even though the force produced by pressure is a vector.

The defining relationship is
$$P=\frac{F_{\perp}}{A}$$
where $F_{\perp}$ is the component of force normal to the area $A$. Rearranging gives the force magnitude $F_{\perp}=PA$. On the AP Physics 1 exam, students must distinguish pressure from force. Doubling the area at fixed pressure doubles the force, but the pressure itself depends on how the fluid is distributed, not on the total container size.

Units matter. The SI unit is the pascal (Pa), where $1\ \mathrm{Pa}=1\ \mathrm{N/m^2}$. Atmospheric pressure is often quoted as $P_{\mathrm{atm}}\approx 1.0\times 10^5\ \mathrm{Pa}$ or $101\ \mathrm{kPa}$. Other common units include psi and mmHg; AP problems usually stay in SI but may require unit conversion.

### 2. Hydrostatic Pressure and Depth Dependence
In a stationary, incompressible fluid with uniform density $\rho$, pressure increases linearly with depth below a free surface at pressure $P_0$:
$$P=P_0+\rho gh$$
The change in pressure between two points separated by vertical distance $h$ is
$$\Delta P=\rho g\Delta h$$
This is one of the most tested relationships in AP Physics 1 Unit 8 (Fluids). The slope of a graph of $P$ versus depth $h$ equals $\rho g$ for a uniform fluid.

Critical assumptions: the fluid is static (not flowing), incompressible (constant $\rho$), and the gravitational field $g$ is uniform. Pressure at a given depth does not depend on the shape of the container—only on depth, density, and the surface pressure. A common AP setup compares pressure at the bottom of differently shaped vessels connected at the base; the answer is the same if the fluid height is the same.

### 3. Same Depth, Same Pressure (Communicating Fluids)
At the same horizontal level in a continuous, static fluid, pressure is the same everywhere. This principle underlies communicating vessels, barometers, and manometers. If two arms of a U-tube contain the same fluid and are open to the same atmosphere, the free surfaces settle at equal heights because pressure at the same depth must match.

When fluids of different densities occupy connected regions, equilibrium requires balancing pressure at the interface. AP questions often place oil atop water or mercury beneath water and ask for the height difference that produces equal pressure at a reference level.

### 4. Gauge vs Absolute Pressure
Absolute pressure includes atmospheric contribution; gauge pressure is measured relative to atmospheric pressure:
$$P_{\mathrm{gauge}}=P_{\mathrm{abs}}-P_{\mathrm{atm}}$$
A tire gauge reading "32 psi" is typically gauge pressure. When a problem says a tank is "pressurized to 200 kPa," read the wording carefully—absolute or gauge makes a difference when comparing to atmospheric conditions.

### 5. AP Exam Patterns and Problem-Solving Strategy
Typical AP Physics 1 pressure items include: (a) calculating force on a submerged wall or gate, (b) comparing pressures at two depths, (c) interpreting $P$–$h$ graphs, and (d) combining hydrostatic pressure with Pascal's principle in hydraulic systems.

Always draw a horizontal reference line and write pressure-equality or pressure-difference equations along vertical paths. When finding force on a submerged surface, remember that pressure varies with depth, so you may need to integrate or use the average pressure at the centroid for a rectangular gate: $F=P_{\mathrm{avg}}A$ where $P_{\mathrm{avg}}=P_0+\rho g h_{\mathrm{centroid}}$.

### 6. Common Confusions
Students often treat pressure as directional—it is not. They confuse pressure with weight of the fluid above a point; weight and pressure are related but not identical. Another frequent error is using total container volume instead of depth when finding bottom pressure. Shape independence of pressure at a given depth is counterintuitive and appears often in multiple-choice distractors.

Mixing up absolute and gauge pressure produces answers off by one atmosphere. Finally, when computing force on a slanted surface, use the area projected perpendicular to the force direction, or resolve forces carefully—pressure always acts perpendicular to the surface element.

### 7. CED Alignment
This content aligns with AP Physics 1 Unit 8: Fluids, Essential Knowledge 8.2.A and 8.2.B regarding pressure in static fluids, and Science Practice 1 (Modeling) and 2 (Mathematical Routines). Mastery includes explaining why pressure increases with depth, applying $P=P_0+\rho gh$, and connecting microscopic molecular collisions to macroscopic pressure in qualitative reasoning tasks.

### 8. Microscopic Picture and Macroscopic Pressure
On the AP exam, you may need to explain qualitatively that pressure in a gas arises from molecular collisions with walls, while in liquids it adds the weight of the column above. The macroscopic formula $P=P_0+\rho gh$ is an average effect over many molecular interactions. When a problem asks why pressure acts perpendicular to surfaces, the answer is that only the normal component of molecular momentum transfer produces sustained force on a static wall—tangential components average to zero over time for an ideal static fluid against a smooth wall.

### 9. Worked Reasoning Example
A rectangular gate of width $w=2.0\ \mathrm{m}$ and height $h=1.5\ \mathrm{m}$ is hinged at the top and holds back water ($\rho=1000\ \mathrm{kg/m^3}$) with its top edge at the water surface. Average depth for pressure on the gate is $h_{\mathrm{avg}}=0.75\ \mathrm{m}$, so $P_{\mathrm{avg}}=\rho g h_{\mathrm{avg}}=7350\ \mathrm{Pa}$. Force magnitude $F=P_{\mathrm{avg}}A=(7350)(2.0\times1.5)=2.2\times10^4\ \mathrm{N}$. The torque about the hinge requires locating the center of pressure below the centroid for a submerged plane surface—AP Physics 1 may stop at force magnitude, but advanced items note that pressure increases with depth, shifting the effective application point downward from the geometric center.

### 10. Experimental and Graphical Analysis
Laboratory-style questions provide pressure versus depth data. If the graph is linear with slope $S$, then $\rho=S/g$. Intercept gives $P_0$ (often atmospheric if the sensor reads absolute pressure). Unit check: slope in $\mathrm{Pa/m}$ divided by $9.8\ \mathrm{m/s^2}$ yields $\mathrm{kg/m^3}$. Nonlinear curvature at large depths in real data may indicate compressibility—usually ignored on AP Physics 1 unless noted.

### 11. Multi-Step Exam Architecture
Pressure often appears as the first step in a chain: find $\Delta P$ from depth, compute force on a piston, then apply $F=ma$ or torque. Keep track of whether the question wants force on the fluid, force by the fluid on a container wall, or force on a piston. Each is the same pressure concept but different free-body system.

### 12. Summary Checklist
Before submitting an AP pressure answer: (1) Is fluid static? (2) Absolute or gauge? (3) Vertical depth $h$ identified? (4) Correct $\rho$? (5) Pressure vs force distinguished? (6) Units Pa or converted consistently?""",
    ("AP Physics 1", "Density and Specific Gravity"): r"""## Detailed Knowledge

### 1. Density as Mass per Unit Volume
Density quantifies how much mass is packed into a given volume:
$$\rho=\frac{m}{V}$$
For a uniform object, knowing any two of $\rho$, $m$, and $V$ determines the third: $m=\rho V$ and $V=m/\rho$. SI units are $\mathrm{kg/m^3}$. Water at room temperature has $\rho_{\mathrm{water}}\approx 1000\ \mathrm{kg/m^3}$; air at STP is roughly $\rho_{\mathrm{air}}\approx 1.2\ \mathrm{kg/m^3}$.

On AP Physics 1, density connects fluid mechanics to buoyancy. The density of the object and the density of the surrounding fluid jointly determine whether an object floats, sinks, or remains neutrally buoyant.

### 2. Specific Gravity
Specific gravity (SG) is the ratio of a substance's density to the density of water:
$$SG=\frac{\rho}{\rho_{\mathrm{water}}}$$
It is dimensionless. If $SG>1$, the substance is denser than water and sinks in water (unless shaped to displace enough volume to float). If $SG<1$, it is less dense than water and floats with part of its volume submerged.

Example: mercury has $SG\approx 13.6$, so $\rho_{\mathrm{Hg}}\approx 13.6\times 10^3\ \mathrm{kg/m^3}$. AP problems may give SG instead of $\rho$ and expect conversion before using hydrostatic or buoyancy formulas.

### 3. Density in Buoyancy and Floating
For a floating object in equilibrium,
$$\frac{V_{\mathrm{submerged}}}{V_{\mathrm{object}}}=\frac{\rho_{\mathrm{object}}}{\rho_{\mathrm{fluid}}}$$
This fraction is also the fraction of the object's volume below the fluid surface when floating at rest. A object with $\rho_{\mathrm{object}}=0.80\rho_{\mathrm{water}}$ floats with 80% of its volume submerged.

Do not confuse fluid density with object density. Buoyant force depends on the density of the displaced fluid, while weight depends on the object's density and total volume.

### 4. Measuring Density Experimentally
AP lab-style questions describe finding density by measuring mass (scale) and volume (ruler, graduated cylinder, or water displacement). For an irregular solid, submerge it and measure the overflow volume. For a floating object, you need additional information—you cannot find full volume from submerged volume alone without knowing the float fraction.

When comparing liquids, hydrometers use buoyancy: the float depth indicates SG. Denser liquids support the hydrometer higher (less submerged length).

### 5. Assumptions and Limitations
The formulas above assume uniform composition and temperature. Most AP problems treat $\rho$ as constant, ignoring thermal expansion. For gases, density varies strongly with pressure and temperature; AP Physics 1 usually restricts density calculations to liquids and solids unless explicitly stated otherwise.

### 6. AP Exam Patterns
Expect: (a) unit conversions between $\mathrm{g/cm^3}$ and $\mathrm{kg/m^3}$ ($1\ \mathrm{g/cm^3}=1000\ \mathrm{kg/m^3}$), (b) ranking tasks comparing densities from float behavior, (c) combining $\rho=m/V$ with $P=\rho gh$, and (d) identifying whether a given density belongs to the object or the fluid in a buoyancy setup.

### 7. Common Confusions
Students invert the float fraction, using submerged/total incorrectly. They apply water density when the fluid is oil or salt water. They treat specific gravity as having units. They forget that average density of a composite object (e.g., a steel ship with air inside) determines floatation, not the density of individual materials alone.

### 8. CED Alignment
Aligned with AP Physics 1 Unit 8, topics on fluid properties and buoyancy prerequisites. Supports Science Practices of mathematical modeling and quantitative reasoning with unit consistency.

### 9. Composite and Average Density
Ships float because their average density—including steel, air, and cargo—is less than water. A hollow sphere of outer radius $R$ and shell thickness $t$ has volume $V=\frac{4}{3}\pi[R^3-(R-t)^3]$. Average density $\rho=m/V$ determines floatation, not the density of steel alone. AP problems may give mass and external dimensions and ask whether the object floats.

### 10. Density from Buoyancy Measurements
Archimedes' method: weigh in air ($W_{\mathrm{air}}=mg$) and in fluid ($W_{\mathrm{fluid}}=mg-F_B$). Then $F_B=\rho_{\mathrm{fluid}}Vg$ and $m=\rho_{\mathrm{object}}V$, so
$$\rho_{\mathrm{object}}=\frac{W_{\mathrm{air}}}{W_{\mathrm{air}}-W_{\mathrm{fluid}}}\,\rho_{\mathrm{fluid}}$$
This experimental chain appears in inquiry-style FRQs.

### 11. Temperature and Pressure Effects (Qualitative)
Heating usually decreases liquid density (expansion); increasing pressure slightly increases liquid density. AP Physics 1 treats $\rho$ as constant unless data show otherwise. For gases, $\rho=m/V$ changes dramatically with $P$ and $T$—outside standard AP Physics 1 fluid statics unless explicitly a gas law crossover.

### 12. Ranking and Proportional Reasoning
If two solid cubes of the same material but different edge lengths are dropped into water, both sink with the same $\rho_{\mathrm{object}}>\rho_{\mathrm{water}}$—size does not change density. If two objects have the same mass but different volumes, the larger volume object has lower density and is more likely to float. Practice ranking $\rho$ from float/suspend/sink observations without full calculation.

### 13. Dimensional Analysis Reminder
Density has dimensions $\mathrm{M/L^3}$. Specific gravity is dimensionless because it is a ratio of like quantities. When a problem gives SG$=0.85$ for gasoline, immediately write $\rho=850\ \mathrm{kg/m^3}$ if using SI, or compare directly to water without conversion in ranking tasks.

### 14. Float Fraction and Weight Fraction
For a floating object, the fraction submerged equals $\rho_{\mathrm{obj}}/\rho_{\mathrm{fluid}}$, which also equals the fraction of the object's weight supported by buoyant force. A 60% submerged iceberg has average density $0.60\rho_{\mathrm{water}}$—a favorite proportional reasoning item.

### 15. Exam Distractor Analysis
Wrong choices often use $\rho_{\mathrm{fluid}}/\rho_{\mathrm{object}}$ inverted, report SG with units of $\mathrm{kg/m^3}$, or claim larger objects always sink faster regardless of density. Training yourself to identify the object versus fluid density in every buoyancy sentence prevents most errors.

### 16. Buoyancy Without Full Volume
Given submerged volume and total mass, find average density $\rho=m/V_{\mathrm{total}}$ only if $V_{\mathrm{total}}$ is known—not from submerged fraction alone without additional data.""",
    ("AP Physics 1", "Hydrostatic Pressure and Communicating Vessels"): r"""## Detailed Knowledge

### 1. Hydrostatic Pressure in Static Fluids
For a fluid at rest with uniform density $\rho$, pressure grows linearly with depth:
$$P=P_0+\rho gh,\qquad \Delta P=\rho g\Delta h$$
Here $P_0$ is the pressure at the reference surface (often atmospheric at an open top), $h$ is vertical depth below that surface, and $g$ is gravitational field strength. The relationship follows from force balance on a vertical column of fluid: the weight of fluid above a horizontal slice must be supported by the pressure difference across that slice.

The derivative form $\dfrac{dP}{dy}=-\rho g$ (with $y$ measured upward) appears in calculus-based extensions but AP Physics 1 uses the integrated form for uniform fluids.

### 2. Communicating Vessels
When containers are connected at the bottom and contain the same static fluid open to the same atmosphere, free surfaces reach the same height. Pressure at any common horizontal level inside the connected system is equal. This explains why "Pascal vases"—containers of wildly different shape but equal base area height—have identical pressure at the bottom.

When two immiscible fluids meet in a U-tube, set a reference horizontal line at the interface or at equal-depth points in each arm and write $P_{\mathrm{left}}=P_{\mathrm{right}}$. Include $\rho g h$ contributions from each fluid column above the reference.

### 3. Key Assumptions
The fluid is incompressible and homogeneous; temperature and composition are uniform. Flow is absent (static equilibrium). Gravitational field is uniform. These assumptions fail near strong flow, in compressible gases under large pressure changes, or in stratified fluids (e.g., salt-water gradients)—AP problems usually flag such exceptions explicitly.

### 4. Container Shape Independence
Pressure at depth $h$ depends on $P_0$, $\rho$, $g$, and $h$—not on total fluid volume or container width. Students often incorrectly argue that a narrow tube "concentrates" pressure. Force on the bottom may differ because area differs, but pressure does not.

### 5. AP Exam Patterns
Free-response items ask students to trace pressure along a path through multi-fluid manometers, rank absolute pressures at labeled points, or explain why connected reservoirs level off. Graph interpretation: linear $P$ vs. $h$ with slope $\rho g$. Experimental design: measure $h$ and $\Delta P$ to determine $\rho$.

### 6. Common Confusions
Using slant height instead of vertical depth; forgetting to add $P_0$ when absolute pressure is required; assuming wider containers have higher bottom pressure; mixing gauge and absolute values when comparing to atmospheric pressure.

### 7. CED Alignment
Maps to AP Physics 1 Unit 8 Essential Knowledge on hydrostatic pressure and qualitative treatment of connected fluid systems. Reinforces Science Practice 6: Argumentation—justifying why pressures match at the same depth.

### 8. Step-by-Step Manometer Tracing Method
Step 1: Choose a horizontal reference level in a continuous liquid path. Step 2: Write $P_{\mathrm{left}}=P_{\mathrm{right}}$. Step 3: Move vertically through each fluid segment, adding $\rho g h$ when descending and subtracting when ascending. Step 4: Include atmospheric pressure on any open surface. This algorithm handles three-fluid U-tubes common on exams.

### 9. Worked Example: Oil on Water
A U-tube contains water ($\rho_w$) and oil ($\rho_o<\rho_w$) with oil height $h_o$ above the water-oil interface on one side and water height $h_w$ above the interface on the other relative to a common reference. Equating pressures at the interface level in both arms yields relationships used to find unknown density or height difference.

### 10. Pressure at the Bottom of Complex Vessels
Consider three vessels with different shapes but equal water depth $h$ above their common connected base. Bottom absolute pressure is $P_{\mathrm{atm}}+\rho gh$ in each—identical. Total force on the bottom differs because area differs: $F=PA$. Students frequently select equal force when only pressure is equal.

### 11. Limits of the Hydrostatic Model
Accelerating containers (e.g., water in a cart accelerating horizontally) create tilted free surfaces; pressure is not simply $\rho gh$ vertically in the accelerating frame without pseudo-forces—beyond standard AP Physics 1. Flowing water in pipes uses Bernoulli, not hydrostatic formulas along streamlines with speed changes.

### 12. Gauge Pressure in Deep Pools
A swimmer at depth $h=3.0\ \mathrm{m}$ in water experiences gauge pressure $\Delta P=\rho gh\approx2.94\times10^4\ \mathrm{Pa}$ added to atmospheric pressure on lungs. Ear discomfort arises from $\Delta P$ across the eardrum—qualitative physiology link acceptable on FRQ "real-world connection" points.

### 13. Pascal Vase Ranking Task
Four vases—tall narrow, short wide, inverted cone, right-side-up cone—connected at the base and filled to different total volumes but same water height $h$ above the common base: rank pressure at the base. Correct ranking: all equal. Rank force on base: proportional to base area, not equal.

### 14. Integration with Forces
Once $P$ is known at a gate depth, next steps may include torque about a hinge or work to move a piston. Hydrostatic pressure is rarely the final answer—it feeds force and equilibrium analysis.

### 15. Historical Note and Exam Framing
Pascal's demonstration that column height determines pressure at the base—not vessel shape—was pivotal in fluid statics. On AP exams, when a figure shows oddly shaped flasks, default to $P=P_{\mathrm{atm}}+\rho gh$ at the bottom unless the problem states the flasks are disconnected or the fluid is moving. Always identify the free surface as the reference for $h$.""",
    ("AP Physics 1", "Pascal's Principle and Hydraulics"): r"""## Detailed Knowledge

### 1. Pascal's Principle
Pascal's principle states that a pressure change applied to an enclosed, incompressible fluid is transmitted undiminished to every portion of the fluid and to the walls of the container. If you increase pressure at one piston by $\Delta P$, every point in the fluid experiences the same $\Delta P$ increase, assuming the fluid remains static and enclosed.

This is distinct from hydrostatic pressure due to depth: Pascal's principle addresses *applied* or *additional* pressure changes, often from pistons or pumps.

### 2. Hydraulic Lift Mechanics
A classic hydraulic device uses two pistons of areas $A_1$ and $A_2$ connected by a fluid-filled tube. For an ideal hydraulic lift at constant depth (neglecting height differences between pistons):
$$F_1=A_1\Delta P,\qquad F_2=A_2\Delta P$$
Therefore
$$\frac{F_2}{F_1}=\frac{A_2}{A_1}$$
A small force on the small piston produces a larger force on the large piston—mechanical advantage equals the area ratio. However, the small piston must move farther: volume conservation requires
$$A_1\Delta x_1=A_2\Delta x_2$$
Work input approximately equals work output in the ideal case (ignoring friction and viscosity): $F_1\Delta x_1\approx F_2\Delta x_2$.

### 3. Combining with Hydrostatic Pressure
When pistons are at different heights, include hydrostatic terms:
$$P_1+\rho gh_1=P_2+\rho gh_2$$
for static equilibrium, or add $\rho g\Delta h$ when tracing pressure between levels. AP problems sometimes place the small piston higher than the large one, reducing the mechanical advantage.

### 4. Assumptions
Fluid is incompressible; system is static or quasi-static; no leaks; viscosity and friction negligible. Real hydraulic systems lose energy to friction and require continuous pumping to maintain motion.

### 5. AP Exam Patterns
Calculate output force given input force and piston areas; determine how far each piston moves; explain why hydraulic brakes amplify force but cannot create energy; rank pressures in a multi-piston system at different depths.

### 6. Common Confusions
Believing hydraulic devices multiply energy—they multiply force at the expense of displacement. Forgetting volume/displacement relationships. Ignoring height differences between pistons. Treating pressure as force without dividing by area.

### 7. CED Alignment
AP Physics 1 Unit 8 covers Pascal's principle qualitatively and quantitatively for enclosed fluids. Connects to Science Practice 2: deriving and applying proportional reasoning with $F=PA$.

### 8. Energy and Work Analysis
Because $F_1\Delta x_1=F_2\Delta x_2$ in ideal hydraulics, a person pushing the small piston through a large displacement delivers the same work (approximately) as the load moving a small distance. You cannot get more work out than in. The advantage is force multiplication for lifting heavy loads slowly—consistent with conservation of energy.

### 9. Brake Systems and Real Applications
Hydraulic car brakes use Pascal's principle to transmit pedal force to calipers. If one piston is smaller and farther from the master cylinder in height, include $\rho gh$ corrections. Leaks violate the enclosed-fluid assumption and reduce transmitted pressure—qualitative troubleshooting appears in conceptual questions.

### 10. Worked Example
A hydraulic lift has pistons of area $A_1=0.01\ \mathrm{m^2}$ and $A_2=0.50\ \mathrm{m^2}$. A $600\ \mathrm{N}$ force on the small piston supports what load on the large piston at the same height? $\Delta P=F_1/A_1=F_2/A_2$, so $F_2=(600)(0.50/0.01)=3.0\times10^4\ \mathrm{N}$. If the small piston moves down $0.20\ \mathrm{m}$, the large piston rises $A_1\Delta x_1/A_2=0.004\ \mathrm{m}=4\ \mathrm{mm}$.

### 11. Pressure Gauge vs Force Confusion
A problem may give gauge pressure at the pump and piston area—convert to force via $F=PA$ before applying Newton's laws to the load. Include atmospheric pressure only when computing absolute force differences across sealed systems.

### 12. Multiple-Piston Systems
Three pistons on one closed fluid loop share the same $\Delta P$ from an input pump. Forces scale with areas: $F_i=A_i\Delta P$. If one piston is locked, fluid may not redistribute freely—statics requires satisfying both pressure equality and force balance on each movable piston.

### 13. Hydraulic Lift Safety
Mechanical advantage does not reduce the volume of fluid that must move through the pump. A small pump displacing $100\ \mathrm{cm^3}$ raises the large piston only by $V/A_2$—often millimeters per stroke for heavy loads.

### 14. Historical and CED Context
Pascal's principle explains why enclosed fluid transmits pressure—aligned with AP Physics 1 Essential Knowledge that external pressure applied to confined fluid is transmitted throughout. Pair with hydrostatic $P=P_0+\rho gh$ when pistons are at different elevations.

### 15. Free-Body on Each Piston
Draw separate diagrams for small and large pistons. On the small piston, applied force plus possible atmospheric force on top surface sets input. On the large piston, output force balances fluid pressure force $P A_2$. Connecting via $\Delta P$ consistent across the fluid links the two diagrams without double-counting atmospheric pressure on both sides of an open-atmosphere system.

### 16. Worked Multi-Height Variant
Small piston at $h_1=0.50\ \mathrm{m}$ above large piston at $h_2=0$. Additional pressure at lower piston from fluid column between them: $P_2=P_1+\rho g(h_1-h_2)$ if same fluid connects them. Mechanical advantage calculation must include this hydrostatic head when heights differ appreciably.

### 17. Mechanical Advantage Definition
Mechanical advantage MA$=F_{\mathrm{out}}/F_{\mathrm{in}}=A_2/A_1$ for ideal hydraulics at same height. MA is not efficiency; real systems with friction require larger $F_{\mathrm{in}}$ than ideal prediction. AP problems assume ideal unless friction coefficient given.

### 18. Volume Displacement Connection
Every downward stroke on the small piston displaces $\Delta V=A_1\Delta x_1$ of incompressible fluid, raising the large piston by $\Delta x_2=\Delta V/A_2$. Students who forget volume linkage cannot solve displacement FRQs even when force calculation is correct.""",
    ("AP Physics 1", "## 4. Floating, Sinking, and Newton's Second Law"): r"""## Detailed Knowledge

### 1. Buoyant Force and Newton's Second Law
When an object is immersed in fluid, it experiences an upward buoyant force $F_B$ equal to the weight of displaced fluid (Archimedes' principle):
$$F_B=\rho_{\mathrm{fluid}}V_{\mathrm{displaced}}\,g$$
The object's vertical motion is governed by Newton's second law. Taking upward as positive:
$$\sum F_y=F_B-mg=ma_y$$
If $F_B>mg$, the object accelerates upward (may rise toward surface). If $F_B<mg$, it accelerates downward (sinks). If $F_B=mg$, vertical acceleration is zero—static equilibrium (floating fully submerged, neutrally buoyant, or suspended).

### 2. Floating at the Surface
A floating object at rest has $F_B=mg$ with only partial submersion. The submerged volume satisfies
$$\rho_{\mathrm{fluid}}V_{\mathrm{sub}}g=\rho_{\mathrm{object}}V_{\mathrm{total}}g$$
$$\frac{V_{\mathrm{sub}}}{V_{\mathrm{total}}}=\frac{\rho_{\mathrm{object}}}{\rho_{\mathrm{fluid}}}$$
An ice cube ($\rho\approx 920\ \mathrm{kg/m^3}$) in water floats with about 92% submerged. The fraction above water is $1-\rho_{\mathrm{object}}/\rho_{\mathrm{fluid}}$.

### 3. Sinking Objects
If $\rho_{\mathrm{object}}>\rho_{\mathrm{fluid}}$, the object cannot float in equilibrium—it fully submerges and continues sinking until it hits bottom or reaches neutral buoyancy in a denser layer. On the bottom, normal force from the container may reduce apparent weight; buoyant force still acts on the submerged volume.

### 4. Dynamic Scenarios
AP questions describe objects released underwater: initially $F_B$ may differ from $mg$, producing acceleration. As a rising bubble expands (if compressible), $F_B$ changes—usually beyond AP Physics 1 scope unless stated. For rigid objects, $F_B$ is constant if fully submerged in uniform fluid.

### 5. Free-Body Diagrams
Always draw $F_B$ upward, $mg$ downward, and tension or normal forces if present. Students must not double-count "weight of fluid above" separately from $F_B$—buoyancy already accounts for pressure integration over the surface.

### 6. AP Exam Patterns
Predict float/sink behavior from densities; find fraction submerged; apply $\sum F=ma$ to submerged objects accelerating upward or downward; compare buoyant forces on objects of equal mass but different volume.

### 7. Common Confusions
Using total volume instead of displaced volume for partially floating objects. Thinking heavier objects always sink—volume matters via $F_B$. Assuming floating means zero submerged volume. Forgetting that $F_B$ depends on fluid density, not object density.

### 8. CED Alignment
Core AP Physics 1 Unit 8 content on buoyancy and force diagrams. Essential Knowledge ties Archimedes' principle to Newton's laws for submerged and floating bodies.

### 9. Neutral Buoyancy and Suspended Motion
Neutral buoyancy occurs when $\rho_{\mathrm{object}}=\rho_{\mathrm{fluid}}$ for a fully submerged object: $F_B=mg$ with no acceleration. Submarines adjust average density by flooding ballast tanks. A neutrally buoyant object can remain at any depth without vertical acceleration—distinct from floating at the surface.

### 10. Two-Fluid and Layered Fluids
An object denser than oil but less dense than water sinks through oil until it reaches the water-oil interface, then may partially float at that interface if $\rho_{\mathrm{object}}$ lies between the two fluid densities. Each segment of submerged volume in a given fluid contributes $\rho_{\mathrm{fluid,i}}V_i g$ to buoyant force.

### 11. Dynamic Entry Problem
A block of volume $V$ and density $\rho_b$ is released from rest beneath the surface of liquid of density $\rho_L>\rho_b$. Immediately after release, $F_B=\rho_L Vg>mg=\rho_b Vg$, so $a_y=(F_B-mg)/m=(\rho_L-\rho_b)g/\rho_b$ upward. As it rises, if still fully submerged, acceleration remains constant until the block breaks the surface, where displaced volume changes and acceleration varies.

### 12. Evidence-to-Claim Reasoning on FRQs
College Board rubrics reward stating Archimedes' principle, drawing a correct FBD, writing $\sum F=ma$ with consistent sign convention, and linking density comparison to predicted motion before substituting numbers. A claim that an object floats must cite $F_B=mg$ at equilibrium with partial volume argument.

### 13. Partially Submerged Dynamics
While an object rises toward the surface still fully submerged, $F_B$ and $mg$ are constant if $\rho_{\mathrm{fluid}}$ is uniform. Upon breaking the surface, submerged volume decreases, $F_B$ decreases, until equilibrium at partial submersion. Graph $F_B$ vs depth qualitatively.

### 14. Steel Ball in Mercury vs Water
Steel ($\rho\approx7800$) sinks in water but may float in mercury ($\rho\approx13600$) if average density of hollow shell allows. Always compare $\rho_{\mathrm{object}}$ to $\rho_{\mathrm{fluid}}$ for the specific fluid in the problem.

### 15. Scaffolding for FRQ Rubric
Point 1: correct principle (Archimedes + Newton II). Point 2: diagram. Point 3: correct equation with signs. Point 4: substitution and interpretation. Missing any layer loses credit even with correct final number.

### 16. Spring Scale Underwater Paradox
A submerged object on a scale at the tank bottom reads less than in air, but the object does not accelerate—normal force from scale adjusts so $N+F_B=mg$. Floating and sinking dynamics share the same $F_B$ definition; only which forces balance or dominate acceleration changes.

### 17. Iceberg Fraction Above Water
With $\rho_{\mathrm{ice}}\approx920\ \mathrm{kg/m^3}$, fraction submerged is $920/1000=0.92$, so only 8% visible above ocean surface—classic proportional reasoning without full calculation if densities are given.

### 18. Block on String in Two Fluids
A block suspended in water experiences $T+F_B=mg$. Same block in oil has smaller $F_B$ because $\rho_{\mathrm{oil}}<\rho_{\mathrm{water}}$, so tension must increase to maintain equilibrium. Ranking tensions across fluids tests Archimedes without new equations.

### 19. Acceleration Direction at Release
Released from rest underwater with $\rho_{\mathrm{obj}}<\rho_{\mathrm{fluid}}$: acceleration upward, $a=(F_B-mg)/m>0$. Direction of acceleration, not merely float/sink label, is what Newton II supplies.""",
    ("AP Physics 1", "Apparent Weight and Tension with Buoyancy"): r"""## Detailed Knowledge

### 1. Apparent Weight Defined
Apparent weight is the reading of a scale or the normal/tension force that supports an object when other forces (especially buoyancy) act. It is not the same as gravitational weight $mg$ unless no other vertical forces contribute.

When an object hangs from a spring scale fully submerged in fluid:
$$T+F_B-mg=0\quad\Rightarrow\quad T=mg-F_B$$
The scale reads $T$, which is less than $mg$—the object feels "lighter." Apparent weight in fluid:
$$W_{\mathrm{app}}=mg-F_B=mg-\rho_{\mathrm{fluid}}V_{\mathrm{displaced}}g$$

### 2. Partial Submersion and Changing Tension
If an object is lowered gradually into water, $V_{\mathrm{displaced}}$ increases until fully submerged, so $F_B$ increases and apparent weight decreases until it levels off at $mg-\rho_{\mathrm{fluid}}V_{\mathrm{object}}g$ for a fully submerged rigid object.

### 3. Objects on Underwater Scales
If an object rests on a scale at the bottom of a pool, the scale reading is the normal force:
$$N+F_B=mg\quad\Rightarrow\quad N=mg-F_B$$
Same apparent-weight reduction, but the supporting force is normal force, not tension.

### 4. Systems with Pulleys
Buoyancy problems combine with Atwood-machine setups: treat buoyant force as an additional upward force on the submerged mass. Write separate $\sum F=ma$ equations for each mass, including $F_B$ on the submerged body only.

### 5. Assumptions
Rigid object with known volume; uniform fluid; static or constant acceleration. Scale is calibrated in force units; ignore scale buoyancy (usually negligible).

### 6. AP Exam Patterns
Find tension in a string supporting a submerged block; predict how scale reading changes as object enters water; compare apparent weights in oil vs. water; explain why a submerged object is easier to lift.

### 7. Common Confusions
Subtracting $F_B$ twice; using object density instead of fluid density in $F_B$; forgetting that apparent weight can be zero (neutral buoyancy) or negative in sign conventions if downward tension is required to hold a rising object.

### 8. CED Alignment
Extends AP Physics 1 Unit 8 buoyancy into force-analysis problems requiring free-body diagrams and equilibrium or dynamics with tension—Science Practices 1 and 2.

### 9. Spring Scale in Accelerating Fluids
If the container accelerates upward with acceleration $a$, the effective $g$ for hydrostatic and buoyancy problems becomes $g_{\mathrm{eff}}=g+a$ in the non-inertial frame—or analyze in the lab frame with normal forces adjusted. Standard AP problems keep the container inertial.

### 10. Worked Example: Submerged Stone on a String
A $5.0\ \mathrm{kg}$ stone ($V=2.0\times10^{-3}\ \mathrm{m^3}$) hangs from a scale and is lowered into water. Fully submerged: $F_B=(1000)(2.0\times10^{-3})(9.8)=19.6\ \mathrm{N}$. Scale reading $T=mg-F_B=49-19.6=29.4\ \mathrm{N}$. In air before submersion, reading was $49\ \mathrm{N}$. The difference quantifies buoyant support.

### 11. Apparent Mass
Some texts define apparent mass $m_{\mathrm{app}}=T/g$. Submerged apparent mass is less than true mass. This framing helps compare scale readings directly without converting to force if $g$ is common.

### 12. Pair Problems with Pulleys
When one mass hangs in air and another is submerged, tensions on opposite sides of a ideal pulley may differ if the system accelerates. Write $T_1-T_2=ma$ for the pulley (if massless) or separate equations for each mass including $F_B$ on the wet side only. Do not apply $F_B$ to objects in air.

### 13. Weighing in Oil vs Water
Same object has different apparent weight in fluids of different $\rho_{\mathrm{fluid}}$ because $F_B=\rho_{\mathrm{fluid}}Vg$. Ranking apparent weights in water, oil, and air tests whether student uses fluid density correctly.

### 14. Maximum Tension During Lowering
If lowered slowly at constant speed, tension varies from $mg$ (in air) to $mg-F_B$ (fully submerged). If lowered quickly, acceleration terms modify $T$ via $\sum F=ma$—dynamic case beyond simple apparent weight.

### 15. Connection to Archimedes' Principle
Apparent weight loss equals buoyant force magnitude: $\Delta W=F_B$. This experimental fact is sometimes the fastest path to find $V$ of an irregular solid.

### 16. Two-Scale Comparison FRQ
Part (a): find tension in air. Part (b): find tension submerged. Part (c): explain apparent weight change using Archimedes in words. Part (d): find unknown density from two scale readings. This four-part structure mirrors released AP lab-style prompts.

### 17. Sign Convention Reminder
Upward forces positive: $T+F_B-mg=ma$. If object accelerates downward while lowered, $T$ may exceed $mg-F_B$ temporarily—distinguish static apparent weight from dynamic tension.

### 18. Laboratory Procedure Narrative
CED-aligned lab: measure mass in air with balance, then apparent mass submerged by suspending from scale or using overflow can. Calculate $\rho_{\mathrm{solid}}$ from $\rho_{\mathrm{fluid}}W_{\mathrm{air}}/(W_{\mathrm{air}}-W_{\mathrm{app}})$. Document uncertainty from scale resolution.

### 19. Normal Force vs Tension Language
"Apparent weight" on a bottom scale is normal force; on a hanging scale is tension. Same physics, different label—match the supporting force to the device in the problem statement.

### 20. Quantitative Chain Example
A $3.0\ \mathrm{kg}$ object with volume $1.0\times10^{-3}\ \mathrm{m^3}$ submerged in water: $F_B=9.8\ \mathrm{N}$, $mg=29.4\ \mathrm{N}$, $T=19.6\ \mathrm{N}$. Apparent weight loss $9.8\ \mathrm{N}$ equals buoyant force—verify as independent check.

### 21. Triple Representation
Same scenario in words (tension reduced by buoyant support), equation ($T=mg-F_B$), and number ($19.6\ \mathrm{N}$)—AP rubrics reward multiple representations.""",
    ("AP Physics 1", "Barometers and Manometers"): r"""## Detailed Knowledge

### 1. Atmospheric Pressure Measurement
A barometer measures atmospheric pressure using a column of liquid in equilibrium with the atmosphere. In a mercury barometer, the space above the mercury column is essentially a vacuum (vapor pressure negligible), so at the mercury surface inside the tube:
$$P_{\mathrm{atm}}=\rho_{\mathrm{Hg}}gh$$
Standard atmospheric pressure corresponds to $h\approx 0.760\ \mathrm{m}$ of mercury. With water ($\rho\approx 1000\ \mathrm{kg/m^3}$), the column would be about 10.3 m—impractically tall, which is why mercury is used.

### 2. Manometer Basics
A U-tube manometer compares pressures by measuring a height difference $\Delta h$ of a manometer fluid (often mercury or water):
$$P_1-P_2=\rho_{\mathrm{mano}}g\Delta h$$
The sign convention depends on which side is higher. If gas pressure pushes the manometer fluid down on the gas side relative to the open arm:
$$P_{\mathrm{gas}}=P_{\mathrm{atm}}+\rho g\Delta h$$
If the open side is lower, subtract instead. Always trace pressure changes moving down through fluid (add $\rho g\Delta h$) and up (subtract).

### 3. Multi-Fluid Manometers
When oil, water, and air occupy different sections, pick a horizontal reference level and write pressure equality. Include each fluid segment's $\rho g h$ contribution. Pressure is continuous across any static interface between fluids.

### 4. Assumptions
Fluids are static; manometer fluid does not evaporate significantly; capillary effects negligible for large tubes; temperature constant so $\rho$ is fixed.

### 5. AP Exam Patterns
Calculate $P_{\mathrm{atm}}$ from barometer height; determine unknown gas pressure from U-tube readings; rank pressures at labeled points; explain why barometer height does not depend on tube diameter (for sufficiently wide tubes).

### 6. Common Confusions
Using water density for a mercury manometer; wrong sign on $\Delta h$; forgetting $P_{\mathrm{atm}}$ on the open side; assuming barometer column height increases with wider tubes.

### 7. CED Alignment
AP Physics 1 Unit 8 applications of $P=P_0+\rho gh$ to measurement devices. Supports experimental analysis and proportional reasoning.

### 8. Aneroid and Open-Tube Variants
Mercury barometers measure $P_{\mathrm{atm}}$ directly from column height. Aneroid barometers use a flexible metal cell—qualitative only on AP Physics 1. Open-tube manometers expose one arm to atmosphere; closed-end manometers measure gauge pressure relative to vacuum in the sealed arm if present.

### 9. Worked Example: Gas Pressure
A U-tube with mercury shows the mercury level $12\ \mathrm{cm}$ higher on the open-atmosphere arm than on the gas arm. Then $P_{\mathrm{gas}}=P_{\mathrm{atm}}+\rho_{\mathrm{Hg}}g(0.12)$. If instead the gas side is higher by $12\ \mathrm{cm}$, $P_{\mathrm{gas}}=P_{\mathrm{atm}}-\rho_{\mathrm{Hg}}g(0.12)$. Always sketch which side is pushed down by higher gas pressure.

### 10. Sensitivity and Column Height
Barometer sensitivity improves with denser fluid (shorter readable column) or finer length measurement. Water barometers are more sensitive to small $P_{\mathrm{atm}}$ changes in height but impractically tall. Mercury remains the historical standard partly because of high density.

### 11. Weather and Altitude Connections
Atmospheric pressure decreases with altitude approximately exponentially in real atmospheres; AP may give a linear approximation over small height ranges. Barometer readings drop in storms (lower $P_{\mathrm{atm}}$) and rise in fair high-pressure systems—qualitative science context for interpreting data.

### 12. Mercury vs Water Column Heights
At $P_{\mathrm{atm}}\approx1.01\times10^5\ \mathrm{Pa}$, $h_{\mathrm{Hg}}=P/(\rho g)\approx0.76\ \mathrm{m}$ and $h_{\mathrm{water}}\approx10.3\ \mathrm{m}$. Ratio of heights equals inverse ratio of densities.

### 13. Closed-End Manometer
One arm sealed with vacuum above mercury (ideal barometer branch) fixes reference pressure near zero at top of sealed column. Open manometer always references $P_{\mathrm{atm}}$ on the open side.

### 14. Reading Uncertainty
AP lab questions: measure column height from meniscus consistently (bottom for mercury meniscus in glass). Small reading error propagates to $\Delta P=\rho g\Delta h$.

### 15. Unit Conversion Practice
$760\ \mathrm{mmHg}\approx1\ \mathrm{atm}\approx1.01\times10^5\ \mathrm{Pa}$. Converting mmHg to Pa uses $\Delta P=\rho_{\mathrm{Hg}}g\Delta h$ with $\Delta h=0.760\ \mathrm{m}$.

### 16. Inverted Manometer for Gas Below Atmospheric
When $P_{\mathrm{gas}}<P_{\mathrm{atm}}$, the open side sits lower. Absolute value of height difference still enters $\rho g\Delta h$; sketch prevents sign errors.

### 17. Storm vs Fair Weather
Barometer reading drops before storms because falling $P_{\mathrm{atm}}$ cannot support as high a mercury column—historical weather prediction link. Quantitative AP items use given $P_{\mathrm{atm}}$ rather than weather data.

### 18. Differential Manometer Between Two Gases
Connect two gas lines to opposite arms; $\Delta P=P_{\mathrm{gas,1}}-P_{\mathrm{gas,2}}=\rho_{\mathrm{mano}}g\Delta h$. Neither need be atmospheric—difference is what manometer measures directly.

### 19. Portable Aneroid (Qualitative)
Aneroid barometers use a sealed flexible capsule—no liquid column. AP may contrast with mercury barometer measurement principle without calculation.

### 20. Manometer Sensitivity
Using denser manometer fluid increases $\Delta P$ for same $\Delta h$, improving readability for small pressure differences—design trade-off parallel to barometer fluid choice.

### 21. Complete Tracing Example
Open U-tube, left arm open to air, right connected to tank gas pushing mercury down on gas side by $h=0.15\ \mathrm{m}$: $P_{\mathrm{gas}}=P_{\mathrm{atm}}+\rho g h$. Substitute $\rho=13600\ \mathrm{kg/m^3}$, $g=9.8\ \mathrm{m/s^2}$ to obtain numeric excess over atmospheric. Always add atmospheric baseline when absolute pressure requested.

### Final Review
Barometers and manometers translate height differences into pressure differences using the same hydrostatic relationship that governs all static fluids. Mastery for AP Physics 1 means you can move fluidly between $P$, $\rho$, $g$, and $h$, identify which arm of a U-tube is open to the atmosphere, and explain in words why the mercury column stays at equilibrium when $P_{\mathrm{atm}}$ balances $\rho gh$. Practice sketching three different manometer configurations the night before the exam: open-open, gas-open, and gas-gas differential.""",
    ("AP Physics 1", "Continuity and Volume Flow Rate"): r"""## Detailed Knowledge

### 1. Volume Flow Rate
Volume flow rate $Q_V$ measures how much fluid volume passes a cross section per unit time:
$$Q_V=\frac{\Delta V}{\Delta t}=Av$$
where $A$ is cross-sectional area and $v$ is the fluid speed perpendicular to the area. SI unit: $\mathrm{m^3/s$. Alternative units include L/s and $\mathrm{cm^3/s}$.

For steady flow of incompressible fluid, $Q_V$ is the same at every point along a pipe (what enters must leave).

### 2. Equation of Continuity
For incompressible fluid in a pipe with varying cross section:
$$A_1v_1=A_2v_2,\qquad Q_V=A_1v_1=A_2v_2=\mathrm{constant}$$
Narrower sections have higher speed; wider sections have lower speed. This follows from mass conservation: $\dot m=\rho Av=$ constant, and constant $\rho$ implies constant $Av$.

### 3. Assumptions
Incompressible fluid ($\rho$ constant); steady flow (fields do not change with time at each point); no sources or sinks along the pipe segment. Compressible gas flow at high speeds violates simple continuity unless density changes are included: $\rho_1A_1v_1=\rho_2A_2v_2$.

### 4. AP Exam Patterns
Given $A_1$, $v_1$, and $A_2$, find $v_2$; rank speeds in multi-branch pipes; combine with Bernoulli to find pressure differences; interpret that doubling pipe radius quadruples area and quarters speed if $Q_V$ fixed.

### 5. Common Confusions
Using diameter instead of radius when computing area ($A=\pi r^2=\pi d^2/4$); assuming speed is constant everywhere in a varying pipe; forgetting continuity when applying Bernoulli.

### 6. CED Alignment
AP Physics 1 Unit 8 on fluid flow continuity. Prerequisite for Bernoulli problems and lab analysis of pipe flow.

### 7. Derivation from Mass Conservation
For density $\rho$ and volume flow $Q_V=Av$, mass flow $\dot m=\rho Av$. In a pipe with no leaks and steady flow, $\dot m$ is constant. If $\rho$ is constant (incompressible), $Av$ is constant—continuity. Compressible flow requires $\rho_1A_1v_1=\rho_2A_2v_2$.

### 8. Numerical Example
Water ($Q_V=3.0\times10^{-4}\ \mathrm{m^3/s}$) flows from a hose of radius $r_1=1.0\ \mathrm{cm}$ to a nozzle $r_2=0.50\ \mathrm{cm}$. Areas $A_1=\pi(0.01)^2$ and $A_2=\pi(0.005)^2$ ratio $A_1/A_2=4$. Thus $v_2=4v_1$. If $v_1=Q_V/A_1$, compute $v_2=4Q_V/A_1$.

### 9. Garden Hose Conceptual Question
Why does narrowing the nozzle make the water spray faster? At roughly constant $Q_V$ from the faucet, smaller exit area demands higher exit speed. The continuity equation explains everyday experience without Bernoulli—though pressure in the hose also changes slightly.

### 10. Junction and Conservation Problems
At a Y-split with equal branches of identical area, each branch carries half the inlet $Q_V$ if symmetric. Asymmetric splits require $Q_{\mathrm{in}}=Q_1+Q_2$ with unknowns solved alongside Bernoulli if pressures are asked.

### 11. Units and Conversions
Convert $1\ \mathrm{L/s}=10^{-3}\ \mathrm{m^3/s}$. Diameter vs radius errors are the most common source of factor-of-four mistakes in area.

### 12. Blood Flow Analogy (Qualitative)
Arteries branch into capillaries with huge total area—continuity implies blood slows in capillaries despite constant total $Q_V$ from heart output. Biology crossover strengthens conceptual retention.

### 13. Symbol Consistency
Use $Q_V$ or $Q$ consistently; AP equation sheet may use $A$ for area—do not confuse with amplitude from waves unit. Label diagram areas $A_1,A_2$ before writing continuity.

### 14. Steady vs Unsteady
Continuity assumes steady flow. Filling a bathtub is unsteady—$Q_{\mathrm{in}}$ changes water volume in tub; different analysis. Identify steady segments in pipes before applying $Av=\mathrm{const}$.

### 15. Faucet and Hose
House plumbing: narrow valve increases local speed at fixed $Q_V$ from supply—continuity explains higher exit velocity at constriction before Bernoulli explains pressure drop.

### 16. Conservation Law Statement
Continuity is mass conservation for incompressible flow—same logical status as charge conservation in circuits. State the conservation law in words before equations on FRQs for reasoning credit.

### 17. SI Consistency Drill
Radius $2.0\ \mathrm{cm}=0.020\ \mathrm{m}$ before squaring for area. Mixing cm and m in $A=\pi r^2$ is the dominant error source in released student samples for flow items.

### 18. Conceptual MCQ Template
"Speed doubles when area halves at constant $Q_V$" — True, from $v=Q_V/A$. "Speed doubles when diameter halves" — False, diameter halving quarters area, octupling speed at fixed $Q_V$.

### 19. Filling vs Flowing Distinction
Water entering a bathtub: tub volume increases, not steady pipe flow—continuity applies inside rigid pipes with steady state, not during filling a container.

### 20. Algebraic Solving Pattern
Given $A_1,A_2,v_1$, write $v_2=A_1v_1/A_2$ before any Bernoulli step—saves time on multi-part FRQs.

### 21. Pipe Radius vs Diameter Re-read
Before every calculation, underline whether problem gives radius or diameter. A factor-of-two error in radius becomes factor-of-four in area and factor-of-four in speed—self-check by asking if answer is physically plausible.

### Final Review
Volume flow rate is the bridge between kinematics and fluid dynamics on AP Physics 1. Whenever a problem mentions pipes, hoses, nozzles, or arteries, ask first whether the fluid is approximately incompressible and steady, then whether you know or need $Q_V$, $A$, or $v$. Writing $Q_V=Av$ on your diagram before algebra prevents the common mistake of solving for pressure when the question only asks for speed ratio. Review one numerical example where radius doubles and confirm that speed drops by a factor of four, not two.""",
    ("AP Physics 1", "Volume Flow Rate and Continuity"): r"""## Detailed Knowledge

### 1. Defining and Computing $Q_V$
The volume flow rate quantifies throughput:
$$Q_V=Av=\frac{\Delta V}{\Delta t}$$
Choose $A$ perpendicular to streamlines and $v$ as the average speed over that area. For laminar flow in a circular pipe, speed varies across the cross section (parabolic profile in viscous flow), but AP Physics 1 typically uses uniform average speed unless a profile is specified.

### 2. Continuity for Branched and Tapered Pipes
Main pipe splitting into branches: $Q_{V,\mathrm{in}}=Q_{V,1}+Q_{V,2}+\cdots$. Tapered pipe: $A_1v_1=A_2v_2$. If radius halves, area is one-fourth and speed quadruples.

### 3. Relating to Mass Flow
Mass flow rate $\dot m=\rho Q_V=\rho Av$. For incompressible flow, constant $\dot m$ is equivalent to constant $Q_V$.

### 4. Experimental Context
AP lab scenarios measure $Q_V$ by collecting volume over time ($Q_V=\Delta V/\Delta t$) and compare to $Av$ from measured speed. Discrepancies motivate discussion of measurement error or unsteady flow.

### 5. Assumptions and Limits
Steady, incompressible, non-viscous flow for ideal analysis. Real pipes have boundary layers and Reynolds-number-dependent behavior (see viscosity topic).

### 6. AP Exam Patterns
Multi-step problems: find $v$ from $Q_V$ and $A$; conservation of volume flow in Y-junctions; conceptual questions on why garden hose nozzles increase exit speed (reduce $A$, increase $v$ at fixed $Q_V$ from faucet).

### 7. Common Confusions
Confusing volume flow with speed; using cross-sectional diameter in area formula incorrectly; neglecting branch conservation at junctions.

### 8. CED Alignment
Reinforces AP Physics 1 fluid dynamics skills—often paired with Bernoulli in same problem set.

### 9. Average vs Maximum Speed in a Pipe
Poiseuille flow (viscous, laminar) has parabolic speed profile with $v_{\max}=2v_{\mathrm{avg}}$. If a problem states average speed, use $Q_V=A v_{\mathrm{avg}}$. If it gives centerline speed, $Q_V\ne Av_{\max}$ without correction—check wording.

### 10. Time to Drain a Tank (Qualitative)
Volume $V_{\mathrm{tank}}$ at flow rate $Q_V$ suggests drain time $t\approx V/Q_V$ if $Q_V$ were constant. Real tanks have decreasing $h$ and thus decreasing $Q_V$ through a bottom hole—Torricelli—so time is longer than naive estimate. AP may compare qualitative graphs of $Q_V$ vs time.

### 11. Continuity with Multiple Inlets
If two pipes feed a merger, $Q_{V,3}=Q_{V,1}+Q_{V,2}$. Speed in the common downstream pipe follows from its area. Sign conventions matter when defining direction along each branch.

### 12. Link to AP Science Practices
Practice 4 (Data analysis): measure $\Delta V/\Delta t$ at several points along a demo pipe with dye to verify $Q_V$ constant within uncertainty. Discuss whether leaks or compressibility invalidate continuity.

### 13. Diameter Doubling Effect
If pipe diameter doubles, $A\to4A$. At fixed $Q_V$, speed drops to $v/4$. Students predicting factor $1/2$ confuse diameter with area scaling.

### 14. Conservation at Tee Junction
Incoming $Q_V$ splits; if one branch is blocked, continuity forces all flow through remaining branch—instantaneous speed increase until system adjusts (water hammer is beyond scope).

### 15. Measurement Techniques
Rotameter (float in tapered tube) and venturi flow meter both relate $Q_V$ to pressure or area changes—conceptual link to later Bernoulli applications.

### 16. Integrating with Bernoulli FRQ Template
Step 1: continuity for $v_2$ in terms of $v_1$. Step 2: Bernoulli between two points. Step 3: solve for unknown pressure or speed. Step 4: check units. This template appears in roughly half of AP Physics 1 flow problems.

### 17. Real Pipe Networks
City water systems have branches, pumps, and varying diameter—AP idealizes to single-pipe segments. Identify which segment the question targets before applying $Av=\mathrm{const}$.

### 18. Symmetry in Branching
Equal symmetric branches carry equal $Q_V$; asymmetric branches require additional relation (often pressure equality at junction) if speeds are asked—continuity alone may not close the system.

### 19. From Speed to Mass Flow
Given water $Q_V=2.0\times10^{-4}\ \mathrm{m^3/s}$, mass flow $\dot m=\rho Q_V=0.20\ \mathrm{kg/s}$. Next step in multi-part FRQ might apply Bernoulli between reservoir and pipe exit.

### 20. Conservation Statement for Credit
On FRQ, write: "Because the fluid is incompressible and the pipe has no leaks, the volume flow rate is the same at all cross sections." Then write $A_1v_1=A_2v_2$.

### 21. Proportional Reasoning Drill
If $A_2/A_1=3$, then $v_2=v_1/3$ at fixed $Q_V$. Inverse area-speed relationship is the core conceptual payoff of continuity.

### 22. Link to Unit 1 Kinematics
Fluid speed $v=\Delta x/\Delta t$ at a cross section—same kinematics definition as particle speed, different context. Continuity then connects speeds at two positions like piecewise constant speed in different pipe segments.

### Final Review
Treat continuity as a conservation law on par with charge conservation in circuits: what flows in must flow out for steady incompressible flow. On multi-part free-response questions, earn the first point by stating that principle in a complete sentence before writing $A_1v_1=A_2v_2$. When two student solutions differ, the error is usually area—using $\pi d$ instead of $\pi d^2/4$—rather than misunderstanding conservation itself.

### Closing Note
Revisit the AP Physics 1 equation sheet fluids section and match each symbol to the assumptions listed above. Write one practice paragraph explaining this topic to a classmate without using equations, then add the equations back and verify each term's meaning.""",
    ("AP Physics 1", "Bernoulli's Equation"): r"""## Detailed Knowledge

### 1. Statement and Energy Interpretation
Bernoulli's equation expresses conservation of mechanical energy per unit volume for steady, incompressible, non-viscous flow along a streamline:
$$P_1+\frac{1}{2}\rho v_1^2+\rho gy_1=P_2+\frac{1}{2}\rho v_2^2+\rho gy_2$$
The three terms are static pressure energy, kinetic energy per volume ($\frac{1}{2}\rho v^2$), and gravitational potential energy per volume ($\rho gy$). Constant sum along a streamline under ideal conditions.

### 2. Horizontal Pipe Special Case
When $y_1=y_2$:
$$P_1+\frac{1}{2}\rho v_1^2=P_2+\frac{1}{2}\rho v_2^2$$
Higher speed correlates with lower static pressure—the Bernoulli effect. This explains lift on airplane wings (qualitatively) and pressure drops in constrictions.

### 3. Static vs Stagnation Pressure
Stagnation pressure is the pressure at a point where fluid is brought to rest ($v=0$):
$$P_{\mathrm{stag}}=P+\frac{1}{2}\rho v^2$$
Static pressure $P$ is what a wall-mounted sensor reads; stagnation pressure includes the dynamic term.

### 4. Required Assumptions
Steady flow; incompressible fluid; negligible viscosity (no dissipative losses); flow along a single streamline; no pumps or turbines between points 1 and 2 (those add or remove energy). Violating assumptions (turbulent pipe flow, long viscous pipes) requires energy loss terms not on AP Physics 1 equation sheet.

### 5. Combining with Continuity
Typical AP workflow: use $A_1v_1=A_2v_2$ to relate speeds, then Bernoulli to find pressure difference. Four variables often appear ($P_1,P_2,v_1,v_2$); two equations close the system.

### 6. AP Exam Patterns
Rank pressures at wide vs narrow pipe sections; calculate $v$ from height difference (Torricelli limit); explain qualitatively why windows blow outward in hurricanes (high speed outside, lower outside static pressure); FRQ derivation or application with two points on a streamline.

### 7. Common Confusions
Applying Bernoulli across streamlines with different total energy; forgetting $\rho gy$ term when heights differ; using gauge pressure inconsistently; assuming higher speed always means higher pressure (static pressure drops when speed rises in horizontal flow).

### 8. CED Alignment
Central AP Physics 1 Unit 8 learning objective for ideal fluid flow. Science Practice 2: multi-step mathematical routines linking continuity and energy.

### 9. Elevated Pipe Example
Water flows at $v_1=2.0\ \mathrm{m/s}$ at point 1 ($y_1=0$) where $P_1=2.0\times10^5\ \mathrm{Pa}$. At point 2 ($y_2=5.0\ \mathrm{m}$, same speed because uniform diameter), Bernoulli gives $P_2=P_1-\rho gy_2=2.0\times10^5-(1000)(9.8)(5)=1.51\times10^5\ \mathrm{Pa}$. Static pressure drops with height even at constant speed.

### 10. Venturi Preview
In a horizontal Venturi, speed increase in the throat implies static pressure decrease—Bernoulli's core qualitative prediction. This explains ceiling dust being sucked upward when strong air blows across a curved surface (lift of roof in high wind is related but involves more complex flow).

### 11. When Bernoulli Fails
Long pipes with viscous fluid: significant pressure drop from friction not captured by ideal Bernoulli. Turbulent flow, separated flow around obstacles, and pumps adding energy between points require modified energy equations. AP Physics 1 assumes ideal conditions unless a problem introduces losses explicitly.

### 12. Streamline Selection
Apply Bernoulli between two points on the **same** streamline. Different streamlines in rotational flow (e.g., whirlpool) may have different Bernoulli constants. For uniform pipe flow, any streamline through the center works if height and speed are measured appropriately.

### 13. Airplane Wing (Qualitative)
Faster airflow over curved upper surface implies lower static pressure above wing (horizontal flow approximation)—net lift upward. Full treatment needs angle of attack and 3D flow; AP accepts simplified Bernoulli story with stated assumptions.

### 14. Tank with Small Leak and Large Surface
Surface speed negligible when $A_{\mathrm{surface}}\gg A_{\mathrm{hole}}$—key assumption linking Torricelli to Bernoulli. If hole is large, $v_1$ matters and exit speed drops below $\sqrt{2gh}$.

### 15. Energy Bar Chart for Fluid Element
Per unit volume: $P$ (flow work/pressure energy), $\tfrac12\rho v^2$ (kinetic), $\rho gy$ (gravitational). Bernoulli states sum constant along streamline—parallel to mechanical energy bar charts in mechanics unit.

### 16. Horizontal Constriction Ranking
Three points along horizontal pipe: wide, narrow, wide. Rank $P$ and $v$. Speed highest in narrow; static pressure lowest there—classic MCQ with exactly one correct ranking order.

### 17. Bernoulli and Conservation of Energy
Per unit volume, Bernoulli is energy conservation for ideal fluid along a streamline—connect to prior unit's $K+U=\mathrm{const}$ with pressure work term $P$ included as flow energy.

### 18. Pitot Connection Preview
Stagnation pressure $P_{\mathrm{stag}}=P+\tfrac12\rho v^2$ rearranges Bernoulli between moving fluid and stagnation point where $v=0$. Recognizing this form prevents treating Pitot problems as unrelated.

### 19. Assumption Checklist for FRQ
State: incompressible, non-viscous, steady, along streamline. Omitting assumptions loses qualitative point even if arithmetic is perfect.

### 20. Energy Per Unit Volume Units
Check: $P$ in Pa $=\mathrm{N/m^2}$; $\tfrac12\rho v^2$ in $(\mathrm{kg/m^3})(\mathrm{m/s})^2=\mathrm{N/m^2}$; $\rho gy$ same. All three terms add as pressures.

### 21. Compare Two Points Without Full Numbers
If $v_2>v_1$ and $y_1=y_2$, conclude $P_2<P_1$ without calculation—qualitative MCQ skill.

### 22. Elevator Problem Analogy
Just as changing height affects gravitational energy in mechanics, changing $y$ adds $\rho gy$ term in fluids even when speed unchanged—parallel structure helps memory.

### Final Review
Bernoulli's equation is the energy story for ideal moving fluids. Before substituting numbers, label static pressure, height, and speed at each point on the diagram and state whether the flow is horizontal. If the problem mentions viscosity, long pipes, or turbulence, acknowledge that ideal Bernoulli is incomplete and Poiseuille or qualitative drag may apply instead. Connecting Bernoulli to prior energy conservation unit work is a high-value review strategy.""",
    ("AP Physics 1", "Torricelli's Law, Efflux, and Jets"): r"""## Detailed Knowledge

### 1. Torricelli's Law
Torricelli's law gives the exit speed of liquid draining from a small hole in a tank, derived from Bernoulli between the free surface (large area, approximately $v\approx 0$) and the hole:
$$v=\sqrt{2gh}$$
where $h$ is the vertical distance from the free surface to the hole center. This equals the speed of an object dropped from height $h$—energy per unit mass converts from $\rho gh$ to $\frac{1}{2}\rho v^2$.

### 2. Efflux and Jet Trajectory
Liquid exiting horizontally from a side hole follows projectile motion. Initial horizontal speed is $\sqrt{2gh}$; vertical motion is independent with $a_y=-g$. Range on level ground: $R=v\sqrt{2H/g}$ where $H$ is hole height if jet lands at tank base level.

### 3. Assumptions
Small hole compared to tank area so surface speed negligible; steady drainage; non-viscous; atmospheric pressure at surface and jet. Real tanks drain slower due to viscosity, vena contracta (effective hole smaller), and decreasing $h$ over time.

### 4. Vena Contracta
Actual exit area may be smaller than hole area; AP Physics 1 usually ignores this unless a coefficient is given. Speed formula still commonly appears as $\sqrt{2gh}$ on exams.

### 5. AP Exam Patterns
Find exit speed from liquid height; predict landing distance of jet; compare drain times from holes at different heights; explain why speed increases as tank empties ( $h$ decreases over time—transient, sometimes simplified).

### 6. Common Confusions
Using slant distance instead of vertical $h$; applying Torricelli at the bottom of a tall tank without referencing surface height; forgetting projectile motion after exit.

### 7. CED Alignment
Application of Bernoulli in AP Physics 1 Unit 8; connects fluid mechanics to prior kinematics unit.

### 8. Torricelli Derivation Sketch
Apply Bernoulli from free surface (1) to hole (2): $P_1=P_{\mathrm{atm}}$, $v_1\approx0$, $y_1=h$; $P_2=P_{\mathrm{atm}}$, $y_2=0$. Then $\rho gh=\tfrac12\rho v^2$, giving $v=\sqrt{2gh}$. Hole size must be small relative to tank area so $v_1\approx0$ holds.

### 9. Range of Horizontal Jet
Hole at height $h$ above ground inside tank of height $H$ (base at ground): jet exits horizontally at speed $\sqrt{2g(H-h)}$ if $h$ measured from surface... Careful: $h$ in Torricelli is depth of hole below **free surface**. Range on level ground outside tank: $R=v\sqrt{2h_{\mathrm{hole}}/g}$ where $h_{\mathrm{hole}}$ is height of hole above ground for time-of-flight.

### 10. Draining Transient
As tank drains, $h$ decreases and so does exit speed—flow is not steady. AP may ask qualitative comparison: hole near bottom drains faster initially than hole near top because greater driving pressure head.

### 11. Two Holes Comparison
Two identical tanks with holes at different depths: the lower hole has higher efflux speed and greater volume flow rate for the same hole area because $Q_V=A\sqrt{2gh}$ with larger $h$.

### 12. Energy View
Potential energy of fluid converts to kinetic energy of exiting jet; viscous losses in real tanks reduce observed speed below $\sqrt{2gh}$.

### 13. Cohesive vs Contradictory Claims
Students sometimes claim exit speed depends on hole size—it does not in Torricelli (only on $h$), though volume flow $Q_V=A_{\mathrm{hole}}\sqrt{2gh}$ does depend on hole area.

### 14. Projectile Motion After Exit
Treat horizontal and vertical components separately after leaving tank. Initial $v_x=\sqrt{2gh}$ if hole faces horizontal; $v_y=0$ initially. Gravity acts on jet as on any projectile.

### 15. Comparison to Free Fall
Same $\sqrt{2gh}$ as dropping from height $h$—energy per unit mass converts from $gh$ to $\tfrac12v^2$. Unified theme across mechanics and fluids units for AP review.

### 16. Two Tanks Same Height Different Holes
Same $h$ below surface gives same efflux speed Torricelli regardless of tank shape—parallel to hydrostatic pressure shape independence.

### 17. Jet Power (Extension)
Kinetic energy rate in jet $\propto \rho Q_V v^2$—qualitative link between drain rate and energy loss from tank; not always calculated on AP 1 but supports understanding.

### 18. Tank Draining Graphs
Graph $v_{\mathrm{exit}}$ vs time as tank drains: decreases because $h(t)$ drops. Graph volume remaining vs time: nonlinear decrease; not constant slope unless replenished.

### 19. Multiple Holes at Same Depth
Two holes at same vertical depth below surface have identical efflux speed Torricelli regardless of horizontal separation—pressure depends only on vertical $h$.

### 20. Energy Conservation Wording
State: gravitational potential energy per unit volume at surface $\rho gh$ converts to kinetic per unit volume $\tfrac12\rho v^2$ at jet—words before formula on FRQ.

### 21. Hole at Bottom vs Side
Bottom hole: jet direction downward plus horizontal motion if container moves—choose coordinate system carefully in projectile follow-up.

### 22. Time-to-Empty Order of Magnitude
Large tank draining through small hole: qualitative $t\sim V_{\mathrm{tank}}/Q_V$ with $Q_V$ decreasing as $h$ drops—explain why drain slows near empty without full integral.

### Final Review
Torricelli links the fluids unit back to free-fall kinematics: the exit speed from a hole depends on vertical depth below the free surface, not on how much liquid remains above or on tank shape. Follow-up projectile questions reward careful separation of horizontal launch speed from vertical motion under gravity. When comparing two holes at different depths, deeper holes produce faster jets and, for identical hole areas, greater volume flow rates.""",
    ("AP Physics 1", "Venturi Meters, Pitot Tubes, and Siphons"): r"""## Detailed Knowledge

### 1. Venturi Meter
A Venturi meter constricts pipe flow to measure speed or flow rate from pressure drop. For horizontal flow between wide section 1 and narrow section 2, combine continuity $A_1v_1=A_2v_2$ with Bernoulli:
$$P_1-P_2=\frac{1}{2}\rho(v_2^2-v_1^2)$$
Solve for $v_1$ given $\Delta P$ and areas. Static pressure is lower in the throat (higher speed). AP problems may ask which pressure gauge reads lower and why.

### 2. Pitot Tube
A Pitot tube measures stagnation pressure versus static pressure to find flow speed:
$$P_{\mathrm{stag}}=P_{\mathrm{static}}+\frac{1}{2}\rho v^2$$
$$v=\sqrt{\frac{2(P_{\mathrm{stag}}-P_{\mathrm{static}})}{\rho}}$$
At a stagnation point, fluid velocity is zero and all mechanical energy appears as pressure.

### 3. Siphon
A siphon moves liquid over a barrier to a lower outlet. Ideal exit speed (ignoring friction):
$$v\approx\sqrt{2g(y_{\mathrm{surface}}-y_{\mathrm{outlet}})}$$
Requirements: tube must be filled initially; outlet below reservoir surface; continuous liquid column (no air break at crest). Pressure at the siphon crest can fall below atmospheric—cavitation limits maximum crest height (~10 m for water at 1 atm).

### 4. Assumptions
Ideal fluid, steady flow, no viscosity for basic formulas. Real devices need calibration coefficients.

### 5. AP Exam Patterns
Identify stagnation vs static ports; rank pressures in Venturi throat; explain siphon startup; calculate $v$ from pressure difference.

### 6. Common Confusions
Using Bernoulli without continuity in Venturi problems; assuming siphon works with outlet above surface; confusing static and stagnation pressure taps.

### 7. CED Alignment
AP Physics 1 applied fluid devices—integrates continuity, Bernoulli, and qualitative pressure reasoning.

### 8. Full Venturi Calculation Outline
Given $A_1,A_2,\Delta P,\rho$: from continuity $v_2=(A_1/A_2)v_1$. Substitute into Bernoulli to eliminate $v_1$, solve quadratic-like expression for $v_1$, then $Q_V=A_1v_1$. Show algebra on FRQs for partial credit even if arithmetic slips.

### 9. Pitot-Static on Aircraft
Aircraft airspeed indicators compare stagnation and static ports. At high speed, compressibility breaks incompressible Bernoulli—outside AP Physics 1. Conceptual link: faster flight $\Rightarrow$ larger stagnation-static difference.

### 10. Siphon Break and Cavitation
If the siphon crest is too high, pressure at the crest drops below vapor pressure and the column vaporizes (cavitation), breaking the siphon. Maximum theoretical crest height for water near $1\ \mathrm{atm}$ is about $10\ \mathrm{m}$—order-of-magnitude reasoning acceptable.

### 11. Pitot vs Venturi Distinction
Venturi measures $\Delta P$ between two pipe sections of different area; Pitot measures stagnation minus static at one location in flowing stream. Both extract speed information; setup differs.

### 12. Safety and Real-World Context
Siphons transfer fuel or empty tanks; Venturi meters measure fuel or air flow in engines. AP rewards connecting physics principles to device purpose in one sentence.

### 13. Venturi Diameter Selection
Engineers choose throat diameter to produce measurable $\Delta P$ without excessive speed or cavitation. AP problems supply numbers; real design balances sensitivity and losses.

### 14. Static Port Placement
Pitot-static tubes must not confuse stagnation hole (faces flow) with static side ports (parallel to flow, no stagnation). Misplacement gives wrong airspeed—qualitative troubleshooting.

### 15. Siphon Height Limits
Practical siphon limit near 10 m for water at sea level because crest pressure cannot drop below zero gauge indefinitely without boiling. Order-of-magnitude questions common.

### 16. Combined Device FRQ
A problem may describe Venturi meter readings plus continuity to find $Q_V$, then ask mass flow $\dot m=\rho Q_V$. Chain relationships explicitly.

### 17. Siphon Starting Procedure
Fill tube completely, seal briefly, place outlet below reservoir—qualitative steps explain why air gaps break siphon action.

### 18. Pressure Tap Reading
Venturi throat pressure gauge reads lower than wide section—students must not assume all gauges read the same in flowing fluid. Label "static pressure" on diagram before Bernoulli.

### 19. Siphon Outlet Below Surface Requirement
Outlet must discharge below free surface of source reservoir for sustained siphon; otherwise fluid drains once tube empties above crest.

### 20. Device Identification MCQ
Given diagram with throat pressure taps: Venturi. Single forward-facing tube plus side ports: Pitot-static. Inverted U-tube between two reservoirs: siphon.

### 21. Bernoulli-Continuity Pairing Reminder
Never use Bernoulli alone when two unknown speeds appear—continuity provides second equation.

### 22. Throat Cavitation Warning
If throat speed too high, pressure drops to vapor pressure and flow chokes—qualitative engineering limit beyond AP numbers but explains why throat cannot shrink without limit.

### Final Review
These devices appear on AP exams as applications, not isolated formulas. For Venturi and Pitot problems, always pair a pressure relationship with continuity when more than one speed is unknown. For siphons, explain qualitatively why the outlet must lie below the reservoir surface and why an air gap at the crest stops the flow. One paragraph describing each device's purpose is excellent insurance on conceptual rubric points.

### Closing Note
Revisit the AP Physics 1 equation sheet fluids section and match each symbol to the assumptions listed above. Write one practice paragraph explaining this topic to a classmate without using equations, then add the equations back and verify each term's meaning.

### Exam Tip
Label throat and wide section on every diagram before calculating.""",
    ("AP Physics 1", "Surface Tension and Capillarity"): r"""## Detailed Knowledge

### 1. Surface Tension Phenomenon
Surface tension $\gamma$ (units $\mathrm{N/m}$) quantifies the effective force per length acting along a fluid interface, tending to minimize surface area. It arises from cohesive molecular forces at liquid surfaces. A needle floating on water and spherical droplets illustrate surface tension effects.

Excess pressure inside a spherical liquid drop or bubble (one surface):
$$\Delta P=\frac{2\gamma}{R}$$
For a soap bubble (two surfaces):
$$\Delta P=\frac{4\gamma}{R}$$

### 2. Capillary Rise and Depression
In a narrow tube, adhesive forces between liquid and wall can lift or depress the meniscus. Jurin's law for capillary rise:
$$h=\frac{2\gamma\cos\theta}{\rho gr}$$
where $\theta$ is contact angle, $r$ is tube radius. Water in glass rises ($h>0$); mercury depresses ($\cos\theta<0$).

### 3. AP Scope
AP Physics 1 treats surface tension qualitatively and may use given formulas for excess pressure or capillary height. Full molecular theory is not required; focus on force balance and proportional reasoning ($h\propto 1/r$).

### 4. Assumptions
Uniform tube radius; static equilibrium; negligible vapor pressure effects; known $\gamma$ and $\theta$ if quantitative.

### 5. AP Exam Patterns
Explain why small tubes raise water higher; compare meniscus shape for wetting vs non-wetting fluids; use given $\gamma$ to estimate $\Delta P$ in a droplet.

### 6. Common Confusions
Confusing adhesive and cohesive forces; forgetting factor of 2 vs 4 for drops vs bubbles; using diameter instead of radius in capillary formula.

### 7. CED Alignment
Extension topic within AP Physics 1 fluids unit—supports qualitative understanding of fluid behavior beyond ideal macroscopic models.

### 8. Force Balance on Floating Needle
A needle floats because surface tension provides upward components along the contact line: $F=2\gamma L$ (both sides) approximately balances weight for length $L$ in contact with water—simplified model for qualitative AP reasoning.

### 9. Soap Bubbles and Films
Soap films have two surfaces, hence $\Delta P=4\gamma/R$ for bubble radius $R$. Bubbles drain and thin over time—qualitative observation linked to gravity and evaporation, not quantitative on AP.

### 10. Capillary Example
Water ($\gamma=0.072\ \mathrm{N/m}$, $\theta\approx0$) in radius $r=0.50\ \mathrm{mm}$ tube: $h=2(0.072)/(1000)(9.8)(0.0005)\approx0.029\ \mathrm{m}=2.9\ \mathrm{cm}$ rise. Smaller $r$ gives larger $h$—inverse radius dependence is frequently tested proportionally.

### 11. Contact Angle and Wetting
Wetting fluids ($\theta<90^\circ$) rise in capillary tubes; non-wetting ($\theta>90^\circ$) depress meniscus. Mercury in glass is classic non-wetting example with $h<0$ in Jurin's formula via $\cos\theta<0$.

### 12. CED Scope Note
Surface tension extends the fluids unit beyond ideal continuum mechanics; problems typically provide $\gamma$ or ask qualitative predictions rather than derive from molecular theory.

### 13. Detergent Effect
Soap reduces $\gamma$ of water, weakening surface tension—allows water to wet greasy surfaces and penetrate fabrics. Qualitative real-world application.

### 14. Drops and Minimization of Area
Free droplets tend toward spherical shape to minimize surface area for given volume—surface tension acts like a skin minimizing energy $ \propto \gamma \times \text{area}$.

### 15. Units Check on $\gamma$
$\gamma$ in $\mathrm{N/m}$; multiplying by length scale gives force. $\Delta P$ from curvature has units $\mathrm{N/m^2}$ because $\gamma/R$ has $(\mathrm{N/m})/\mathrm{m}$.

### 16. Rain on Waxy Leaves
Water beads on waxy leaves (high contact angle, non-wetting) due to surface tension resisting spread—qualitative biology crossover.

### 17. Capillary Rise in Soil
Plant roots exploit capillary action in soil pores—qualitative; quantitative Jurin problems stay with cylindrical tubes on AP.

### 18. Floating Paper Clip
Paper clip on water: upward components of surface tension along contact line support weight—analogous to needle; no magic "no gravity" region.

### 19. Combining with Hydrostatics
Capillary rise superposes on hydrostatic $P=\rho gh$ in tube; total pressure profile includes both curvature effect at meniscus and column weight below.

### 20. Excess Pressure in Alveoli (Qualitative)
Small lung alveoli require surfactant to reduce surface tension—biological capillary pressure analogy; qualitative only.

### 21. Formula Sheet Usage
When AP provides $\Delta P=2\gamma/R$, identify $R$ as radius of curvature, not necessarily tube radius—read problem labels.

### 22. Units Practice
Given $\gamma=0.025\ \mathrm{N/m}$ and $R=0.002\ \mathrm{m}$, $\Delta P=2\gamma/R=25\ \mathrm{Pa}$—small but measurable in bubble physics.

### Final Review
Surface tension and capillarity extend the fluids unit into molecular-scale effects without requiring full microscopic derivation. Focus on proportional predictions: smaller capillary radius gives higher rise; larger bubble radius gives smaller excess internal pressure. When formulas are provided on the exam, identify each symbol ($\gamma$, $R$, $r$, $\theta$) before substituting. Qualitative ranking questions appear as often as numeric ones.

### Closing Note
Revisit the AP Physics 1 equation sheet fluids section and match each symbol to the assumptions listed above. Write one practice paragraph explaining this topic to a classmate without using equations, then add the equations back and verify each term's meaning.

### Exam Tip
State whether a problem involves one surface (drop) or two surfaces (soap bubble) before selecting $\Delta P$ formula.

Capillary action lifts sap in trees and ink in pens—mention one application in words on a conceptual FRQ for context credit.""",
    ("AP Physics 1", "Drag Forces and Stokes' Law"): r"""## Detailed Knowledge

### 1. Drag Force Overview
Drag opposes motion through a fluid. At low speeds, drag often scales approximately with speed; at high speeds, with $v^2$. AP Physics 1 emphasizes qualitative terminal velocity: when drag equals weight, acceleration is zero and speed is constant.

### 2. Stokes' Law (Viscous Regime)
For a small sphere of radius $R$ moving slowly ($\mathrm{Re}\lesssim 1$) through viscous fluid with viscosity $\eta$:
$$F_D=6\pi\eta Rv$$
Drag is proportional to speed. At terminal velocity $v_t$ for a falling sphere:
$$6\pi\eta Rv_t=mg\quad\Rightarrow\quad v_t=\frac{2R^2(\rho_{\mathrm{sphere}}-\rho_{\mathrm{fluid}})g}{9\eta}$$
(using $m=\frac{4}{3}\pi R^3\rho_{\mathrm{sphere}}$).

### 3. Reynolds Number Context
$$\mathrm{Re}=\frac{\rho vD}{\eta}$$
Low Re: laminar, Stokes valid. High Re: turbulent, $F_D\propto v^2$ dominates. AP may ask qualitative regime identification.

### 4. Assumptions for Stokes' Law
Spherical particle; uniform fluid; steady laminar flow; no nearby walls. Sedimentation experiments in labs use Stokes to estimate $\eta$ or particle size.

### 5. AP Exam Patterns
Qualitative terminal velocity ranking for different masses/sizes; interpret velocity-time graphs approaching $v_t$; use proportional reasoning from Stokes formula.

### 6. Common Confusions
Applying Stokes at high Reynolds number; forgetting buoyancy in terminal velocity balance ($F_D+F_B=mg$ for sinking spheres).

### 7. CED Alignment
AP Physics 1 connects drag to dynamics and fluids extensions; supports analyzing motion when net force varies with velocity.

### 8. Velocity-Time Graph to Terminal Speed
For a falling object with Stokes drag, $ma=mg-6\pi\eta Rv$. As $v$ increases, net force decreases; $v(t)$ approaches $v_t$ exponentially. Graph shows decreasing slope of $v$ vs $t$ leveling at $v_t$. At $t=0$, $a=g$ (if $F_B$ negligible).

### 9. Including Buoyancy
For a sphere denser than fluid: $ma=mg-F_B-6\pi\eta Rv$. Terminal speed with buoyancy:
$$v_t=\frac{2R^2 g(\rho_s-\rho_f)}{9\eta}$$
Same formula as before with $(\rho_s-\rho_f)$ replacing $\rho_s$ when $F_B=\rho_f V g$.

### 10. $v^2$ Drag Regime (Qualitative)
At highway speeds, air drag $\propto v^2$ dominates; terminal velocity for skydiver occurs when $cv^2=mg$. AP Physics 1 may contrast low-Re Stokes (linear in $v$) with high-speed qualitative behavior without requiring $c$.

### 11. Millikan Oil Drop Connection (Historical Context)
Tiny charged oil drops in air reach terminal velocity under combined electric, gravitational, and drag forces—historical experiment beyond calculation scope but illustrates Stokes regime for small $Re$.

### 12. Proportional Ranking
If two spheres of same density but different radii fall in same fluid, larger $R$ gives larger $v_t$ because $v_t\propto R^2$. Doubling radius quadruples terminal speed in Stokes regime.

### 13. Graphical Analysis
Plot $F_D$ vs $v$ for Stokes: straight line through origin with slope $6\pi\eta R$. Deviation from linearity at high $v$ signals transition toward $v^2$ regime.

### 14. Sedimentation Time Estimate
Sphere falling distance $L$ at roughly $v_t$ gives time $t\approx L/v_t$. Smaller particles take longer to settle—water treatment and lab separations rely on this scaling.

### 15. Force Balance at Terminal Speed
Set $a=0$ in $\sum F_y$: do not use kinematic equations with constant $g$ acceleration after terminal speed is reached. Velocity becomes constant; displacement grows linearly with time.

### 16. Parachute Design
Large area increases drag at given speed—qualitative contrast to Stokes sphere where $R$ enters linearly in $F_D=6\pi\eta Rv$ but parachutes operate at high Re with $v^2$ drag.

### 17. Units of $\eta$ in Stokes
Verify $6\pi\eta Rv$ has units of force: $(\mathrm{Pa\cdot s})(\mathrm{m})(\mathrm{m/s})=\mathrm{N}$—good exam self-check.

### 18. Bubble Rise in Soda
Small bubbles rise slowly; large bubbles faster—qualitative mix of Stokes-like and $v^2$ effects; AP stays qualitative unless Stokes data provided.

### 19. Force-Velocity Graph Regions
Low $v$: linear region Stokes. High $v$: quadratic region. Transition near $\mathrm{Re}\approx1$–$1000$ depending on geometry—identify regime before picking formula.

### 20. Stokes Regime Indicator
If problem states "very small sphere," "slow motion," or gives low $\mathrm{Re}$, default to Stokes. If "highway speed" or "skydiver," use qualitative $v^2$ drag.

### 21. Net Force While Falling
Before terminal speed: $mg-F_D=ma$ with $F_D$ increasing as $v$ increases—calculus extension on Physics C, qualitative curve on Physics 1.

### 22. Balloon vs Ball
Light large balloon reaches low $v_t$ quickly because $m$ small and effective drag area large—qualitative contrast to dense small sphere using Stokes formula.

### Final Review
Drag completes the story of objects moving through fluids when buoyancy alone is insufficient. Know when Stokes' linear drag applies (small, slow, low Reynolds number) versus when qualitative $v^2$ drag dominates everyday high-speed motion. Terminal velocity problems always return to $\sum F=0$ along the vertical axis—set upward buoyant force and drag equal to downward weight at equilibrium, not before.

### Closing Note
Revisit the AP Physics 1 equation sheet fluids section and match each symbol to the assumptions listed above. Write one practice paragraph explaining this topic to a classmate without using equations, then add the equations back and verify each term's meaning.

### Exam Tip
At terminal speed, acceleration is zero—do not use constant-acceleration kinematics after that point.

Raindrops reach terminal speed quickly; very small droplets may evaporate before settling—qualitative weather connection only.

Compare terminal speeds by writing $v_t\propto R^2$ in Stokes regime before substituting numbers.""",
    ("AP Physics 1", "Viscosity, Poiseuille Flow, and Reynolds Number"): r"""## Detailed Knowledge

### 1. Viscosity
Viscosity $\eta$ measures a fluid's resistance to shear flow. In simple shear between parallel plates:
$$F=\eta A\frac{\Delta v}{\Delta y}$$
SI unit: $\mathrm{Pa\cdot s}$. Kinematic viscosity $\nu=\eta/\rho$ appears in advanced contexts.

### 2. Poiseuille's Law
For laminar flow of viscous fluid through a long cylindrical pipe of radius $r$ and length $L$:
$$Q_V=\frac{\pi r^4\Delta P}{8\eta L}$$
Flow rate scales with $r^4$—small radius changes dominate resistance. Pressure drop $\Delta P$ drives flow; longer pipes reduce $Q_V$.

Parabolic velocity profile:
$$v(r)=\frac{\Delta P}{4\eta L}(R^2-r^2)$$
Maximum speed at center, zero at walls.

### 3. Reynolds Number
$$\mathrm{Re}=\frac{\rho vD}{\eta}$$
Characterizes flow regime. Pipe flow: laminar typically $\mathrm{Re}\lesssim 2000$; turbulent $\mathrm{Re}\gtrsim 4000$; transition between. Ideal Bernoulli assumes inviscid flow; Poiseuille adds viscous dissipation for pipes.

### 4. Assumptions for Poiseuille
Laminar, steady, incompressible; rigid pipe; fully developed flow (entrance effects negligible); Newtonian fluid.

### 5. AP Exam Patterns
Compare flow rates when radius doubles ($Q_V$ increases by factor 16); explain why ideal Bernoulli fails for long narrow pipes; qualitative Re classification; rank pressure drops needed for given $Q_V$.

### 6. Common Confusions
Using diameter instead of radius in $r^4$; applying Bernoulli alone when viscous losses matter; confusing $\eta$ with $\rho$.

### 7. CED Alignment
Extension beyond ideal fluids in AP Physics 1—bridges to real pipe flow and experimental limitations of Bernoulli analysis.

### 8. Hydraulic Resistance Analogy
Poiseuille $Q_V=\Delta P/R_f$ with $R_f=8\eta L/(\pi r^4)$ mirrors Ohm's law $I=\Delta V/R$. Series pipes add resistances; parallel paths add conductances—useful conceptual analogy though AP Physics 1 does not require circuit-style pipe networks.

### 9. Numerical Poiseuille Example
Water ($\eta=1.0\times10^{-3}\ \mathrm{Pa\cdot s}$) through pipe $r=1.0\ \mathrm{cm}$, $L=2.0\ \mathrm{m}$, $\Delta P=2.0\times10^4\ \mathrm{Pa}$:
$$Q_V=\frac{\pi(0.01)^4(2.0\times10^4)}{8(1.0\times10^{-3})(2.0)}\approx3.9\times10^{-4}\ \mathrm{m^3/s}$$
Note strong $r^4$ sensitivity.

### 10. Reynolds Number Example
Water at $v=0.50\ \mathrm{m/s}$ in $D=4.0\ \mathrm{cm}$ pipe: $\mathrm{Re}=\rho vD/\eta=(1000)(0.5)(0.04)/(10^{-3})=2.0\times10^4$—likely turbulent, so Poiseuille and ideal Bernoulli are poor models without correction.

### 11. Viscosity and Temperature
Liquid viscosity generally decreases when heated (honey flows easier when warm). AP qualitative questions may ask how heating affects $Q_V$ at fixed $\Delta P$—$\eta$ down implies $Q_V$ up.

### 12. Contrast with Ideal Fluids
AP Physics 1 treats ideal fluids (no viscosity) for Bernoulli, then viscosity as extension explaining real-world deviations—pipe friction, boundary layers, and transition to turbulence via $\mathrm{Re}$.

### 13. Non-Circular Pipes
Poiseuille strictly applies to circular cross section. Non-circular ducts need different geometric factors—AP may state "use given formula" without derivation.

### 14. Pump Addition
Real pipe systems include pumps that add energy per unit volume—equivalent to increasing Bernoulli constant between pump inlet and outlet. Ideal Bernoulli alone cannot model long viscous pipes with pumps.

### 15. Summary Table for Review
| Regime | Key equation | Assumption |
| --- | --- | --- |
| Ideal flow | Bernoulli + continuity | Inviscid, steady |
| Laminar pipe | Poiseuille $Q_V\propto r^4\Delta P/\eta L$ | Low Re, circular |
| Transition | $\mathrm{Re}=\rho vD/\eta$ | Dimensionless indicator |

Use this table on AP review to select the correct model before calculating.

### 16. Medical Application (Qualitative)
Blood viscosity rises when dehydrated—increases $\eta$, decreases $Q_V$ at same arterial $\Delta P$ per Poiseuille—one-sentence real-world link.

### 17. Turbulent Mixing
High Re promotes mixing in pipes—desirable in some engineering contexts, undesirable when laminar flow needed for precise delivery.

### 18. Garden Hose vs Poiseuille
Short garden hose: Bernoulli + continuity often suffice. Long narrow pipe: Poiseuille pressure drop $\Delta P\propto L/r^4$ dominates—problem context tells which model.

### 19. Reynolds Number Without Calculator
Estimate $\mathrm{Re}$ order of magnitude: water in cm-diameter pipe at m/s speeds often $10^3$–$10^5$—turbulent unless pipe is very small or speed very low.

### 20. Poiseuille Proportionality MCQ
Doubling pipe length halves $Q_V$ at fixed $\Delta P$. Doubling radius multiplies $Q_V$ by $2^4=16$—extreme sensitivity frequently tested.

### 21. Ideal vs Viscous Summary Sentence
"Ideal Bernoulli ignores internal friction; Poiseuille quantifies friction in long laminar pipes."—one-sentence exam-ready distinction.

### 22. Temperature Demo
Warm honey flows faster than cold at same $\Delta P$ because $\eta$ decreases—qualitative lab observation tying temperature to viscosity without full equation manipulation.

### Final Review
Viscosity explains why real pipes need pressure gradients to sustain flow and why ideal Bernoulli is an approximation. Poiseuille's $r^4$ dependence is the most tested quantitative fact in this extension topic. Reynolds number tells you which model to trust: low Re favors laminar Poiseuille; high Re means turbulence and simple Bernoulli may fail. End every fluids review by listing which assumptions each equation requires.

### Closing Note
Revisit the AP Physics 1 equation sheet fluids section and match each symbol to the assumptions listed above. Write one practice paragraph explaining this topic to a classmate without using equations, then add the equations back and verify each term's meaning.

### Exam Tip
When $\mathrm{Re}$ is given, state laminar or turbulent before choosing Poiseuille or Bernoulli.

Engine oil is rated by viscosity grade because $\eta$ strongly affects engine lubrication at temperature extremes.""",
    ("AP Physics C: Mechanics", "1D and 2D Kinematics with Calculus"): r"""## Detailed Knowledge

### 1. Calculus Definitions
Instantaneous velocity and acceleration: $v=\dfrac{dx}{dt}$, $a=\dfrac{dv}{dt}=\dfrac{d^2x}{dt^2}$. For motion along a path, $v=\dfrac{ds}{dt}$ and tangential acceleration $a_t=\dfrac{dv}{dt}$.

### 2. Integration Links
Given $a(t)$, $v=v_0+\int a\,dt$; $x=x_0+\int v\,dt$. Given $v(x)$, use $a=v\dfrac{dv}{dx}$.

### 3. 2D Motion
$\vec r(t)=x(t)\hat i+y(t)\hat j$; $\vec v=\dfrac{d\vec r}{dt}$; $\vec a=\dfrac{d\vec v}{dt}$. Components decouple for independent motions.

### 4. AP Patterns
Find $v$ from $x(t)$; piecewise integration; determine when particle reverses ($v=0$).

### 5. Confusions
Differentiating before evaluating at a point; mixing path length with displacement.

**CED:** AP Physics C Unit 1 kinematics with calculus.""",
    ("AP Physics C: Mechanics", "Projectile Motion"): r"""## Detailed Knowledge

### 1. Model
Neglect air drag. Horizontal: $a_x=0$, $v_x=v_{0x}$ constant. Vertical: $a_y=-g$.

### 2. Key Relations
$x=x_0+v_{0x}t$; $y=y_0+v_{0y}t-\tfrac12 gt^2$. Range on level ground: $R=\dfrac{v_0^2\sin 2\theta}{g}$.

### 3. Calculus Form
$y(x)$ via parametric elimination; time of flight from quadratic in $t$.

### 4. AP Patterns
Max height, time aloft, impact speed; launch from cliff—use component integration.

### 5. Confusions
Using speed instead of $v_y$ at apex; forgetting independent components.

**CED:** AP Physics C Unit 1 projectile motion.""",
    ("AP Physics C: Mechanics", "Power and Instantaneous Power"): r"""## Detailed Knowledge

### 1. Definitions
Average power $\bar P=\Delta W/\Delta t$. Instantaneous $P=\dfrac{dW}{dt}=\vec F\cdot\vec v$ for constant force direction along motion.

### 2. Formulas
$P=Fv\cos\theta$. For rotation: $P=\tau\omega$.

### 3. AP Patterns
Motor lifting at constant $v$: $P=mgv$. Find power from $F(x)$ via $P=F(x)v$.

### 4. Confusions
Confusing power with energy; using total force when only component along $v$ matters.

**CED:** AP Physics C work-energy unit.""",
    ("AP Physics C: Mechanics", "Parallel-Axis Theorem"): r"""## Detailed Knowledge

### 1. Statement
If $I_{\mathrm{cm}}$ is moment of inertia about center of mass, then about parallel axis distance $d$:
$$I=I_{\mathrm{cm}}+Md^2$$

### 2. Use
Find $I$ about pivot edge, hinge, or off-center axis—common for rods and composite objects.

### 3. AP Patterns
Rod pivoted at end: $I=\tfrac13 ML^2$ from $I_{\mathrm{cm}}=\tfrac{1}{12}ML^2$, $d=L/2$.

### 4. Confusions
Using distance to geometric end instead of CM offset; forgetting to add $Md^2$.

**CED:** AP Physics C rotation.""",
    ("AP Physics C: Mechanics", "Friction, Inclines, and Free-Body Diagrams"): r"""## Detailed Knowledge

### 1. Static and Kinetic
Static: $f_s\le \mu_s N$. Kinetic: $f_k=\mu_k N$. Direction opposes impending/actual slip.

### 2. Inclines
Components: $mg\sin\theta$ along plane, $mg\cos\theta$ into surface. $N=mg\cos\theta$ (no vertical acceleration).

### 3. FBD Discipline
Draw all forces at interaction points; resolve along/across incline; state $\sum F=ma$ separately.

### 4. AP Patterns
Find $\theta$ to start sliding; acceleration down rough incline $a=g(\sin\theta-\mu_k\cos\theta)$.

### 5. Confusions
Putting $mg$ on incline axis twice; assuming $f=\mu mg$ without checking normal.

**CED:** AP Physics C dynamics.""",
    ("AP Physics C: Mechanics", "Center of Mass and Systems of Particles"): r"""## Detailed Knowledge

### 1. Definition
$$\vec r_{\mathrm{cm}}=\frac{\sum m_i\vec r_i}{\sum m_i}$$
For continuous bodies, integrate over mass distribution.

### 2. Motion
Total external force determines CM acceleration: $\vec F_{\mathrm{ext}}=M\vec a_{\mathrm{cm}}$. Internal forces cancel in pairs.

### 3. AP Patterns
Two-body collision CM frame; find CM velocity; composite rod + point mass $I$ setup.

### 4. Confusions
Averaging positions without mass weighting; treating CM speed as each particle's speed.

**CED:** AP Physics C systems.""",
    ("AP Physics C: Mechanics", "Newton's Laws with Variable Forces (Calculus)"): r"""## Detailed Knowledge

### 1. Differential Form
$\vec F(t)=m\dfrac{d\vec v}{dt}$ or $\vec F(x)=m\vec v\dfrac{d\vec v}{dx}$.

### 2. Examples
Spring $F=-kx$ gives SHM. Drag $F=-bv$ gives exponential approach to terminal speed.

### 3. Solution Strategy
Separate variables or integrate $a(t)$ with initial conditions.

### 4. AP Patterns
Find $v(t)$ for $F=kt$; work from variable force via $W=\int F\,dx$.

### 5. Confusions
Using constant-acceleration kinematics when $F$ varies.

**CED:** AP Physics C dynamics with calculus.""",
    ("AP Physics C: Mechanics", "Work–Energy Theorem and Mechanical Energy"): r"""## Detailed Knowledge

### 1. Work–Energy Theorem
Net work on particle equals kinetic energy change: $W_{\mathrm{net}}=\Delta K$.

### 2. Conservative Forces
$W=-\Delta U$; mechanical energy $E=K+U$ conserved if only conservative forces do work.

### 3. Non-Conservative Work
$W_{\mathrm{nc}}=\Delta E=\Delta K+\Delta U$ (e.g., friction).

### 4. AP Patterns
Track energy bar charts; find speed from height; minimum speed at top of loop $v=\sqrt{gr}$.

### 5. Confusions
Double-counting work and potential energy; sign of work done by friction.

**CED:** AP Physics C energy.""",
    ("AP Physics C: Mechanics", "Simple Harmonic Motion and Oscillations"): r"""## Detailed Knowledge

### 1. Defining Equation
$a=-\omega^2 x$ or $F=-kx=m\ddot x$. Solution $x=A\cos(\omega t+\phi)$.

### 2. Parameters
$\omega=\sqrt{k/m}$ (spring) or $\omega=\sqrt{g/L}$ (small-angle pendulum). Period $T=2\pi/\omega$.

### 3. Energy
$E=\tfrac12 kA^2=\tfrac12 mv_{\max}^2$; exchange between $K$ and $U$.

### 4. AP Patterns
Find $T$ from $k,m$; max speed at equilibrium; graph interpretation.

### 5. Confusions
Using amplitude as period; large-angle pendulum is not SHM.

**CED:** AP Physics C oscillations.""",
    ("AP Physics C: Mechanics", "Angular Position, Velocity, and Acceleration"): r"""## Detailed Knowledge

### 1. Definitions
$\theta(t)$; $\omega=\dfrac{d\theta}{dt}$; $\alpha=\dfrac{d\omega}{dt}$.

### 2. Relations
Constant $\alpha$: $\omega=\omega_0+\alpha t$; $\theta=\theta_0+\omega_0 t+\tfrac12\alpha t^2$.

### 3. Linear–Angular Link
$s=r\theta$, $v=r\omega$, $a_t=r\alpha$.

### 4. AP Patterns
Convert between rpm and rad/s; find $\alpha$ from $\omega(t)$ graph slope.

### 5. Confusions
Using degrees without converting to radians in $s=r\theta$.

**CED:** AP Physics C rotation kinematics.""",
    ("AP Physics C: Mechanics", "Torque, Moment of Inertia, and Rotational Dynamics"): r"""## Detailed Knowledge

### 1. Rotational Second Law
$\sum \tau=I\alpha$. Torque $\vec\tau=\vec r\times\vec F$; magnitude $\tau=rF\sin\theta$.

### 2. Moment of Inertia
$I=\sum m_i r_i^2$ or integral $I=\int r^2\,dm$. Depends on axis choice.

### 3. Rolling
Combine translation and rotation: $a=\dfrac{F_{\mathrm{net}}}{m(1+I/(mr^2))}$ for rolling without slip.

### 4. AP Patterns
Pivot problems; pulley with $I$; find $\alpha$ from hanging mass.

### 5. Confusions
Wrong lever arm for torque; forgetting rolling condition $v=r\omega$.

**CED:** AP Physics C rotation dynamics.""",
    ("AP Physics C: Mechanics", "Angular Momentum and Its Conservation"): r"""## Detailed Knowledge

### 1. Definition
$\vec L=\vec r\times\vec p$ for particle; $L=I\omega$ for rigid body about symmetry axis.

### 2. Impulse–Momentum Analog
$\vec\tau_{\mathrm{net}}=\dfrac{d\vec L}{dt}$. If $\vec\tau_{\mathrm{ext}}=0$, $\vec L$ conserved.

### 3. AP Patterns
Figure skater spin ($I$ decreases, $\omega$ increases); collision with fixed pivot; orbital angular momentum.

### 4. Confusions
Applying conservation when external torque present; mixing linear and angular quantities.

**CED:** AP Physics C angular momentum.""",
    ("AP Physics C: Mechanics", "Linear Momentum, Impulse, and Collisions"): r"""## Detailed Knowledge

### 1. Impulse–Momentum
$\vec J=\int \vec F\,dt=\Delta \vec p$. Average force $\bar F=\Delta p/\Delta t$.

### 2. Collisions
Isolated system: $\vec p_{\mathrm{total}}$ conserved. Elastic: also $K$ conserved.

### 3. 1D Elastic Formulas
$v_1'=\dfrac{(m_1-m_2)v_1+2m_2v_2}{m_1+m_2}$ (and swap indices for $v_2'$).

### 4. AP Patterns
Explosion problems; inelastic ($K$ lost); ballistic pendulum combines collision + swing.

### 5. Confusions
Conserving $K$ in inelastic collisions; wrong sign on relative velocity.

**CED:** AP Physics C momentum.""",
    ("AP Physics C: Mechanics", "Gravitational Field, Potential, and Escape Speed"): r"""## Detailed Knowledge

### 1. Field and Potential
$g(r)=\dfrac{GM}{r^2}$; $U(r)=-\dfrac{GMm}{r}$ (zero at infinity).

### 2. Escape Speed
From $K+U=0$ at infinity: $v_{\mathrm{esc}}=\sqrt{\dfrac{2GM}{R}}$ at planet surface.

### 3. AP Patterns
Compare $g$ at two radii; energy to move satellite; sign of $U$ vs $K$.

### 4. Confusions
Using $mg\Delta h$ far from surface; forgetting $U$ is negative bound state.

**CED:** AP Physics C gravitation.""",
    ("AP Physics C: Mechanics", "Kepler's Third Law and Orbital Periods"): r"""## Detailed Knowledge

### 1. Third Law
For circular orbit: $T^2=\dfrac{4\pi^2}{GM}r^3$. Period depends only on semi-major axis for given central mass.

### 2. Circular Orbit Speed
$v=\sqrt{\dfrac{GM}{r}}$.

### 3. AP Patterns
Compare periods of two moons; find $M$ of planet from satellite data.

### 4. Confusions
Thinking larger orbit means faster speed (actually slower); using radius of planet instead of orbital radius.

**CED:** AP Physics C orbits.""",
    ("AP Physics C: Mechanics", "Elliptical Orbits"): r"""## Detailed Knowledge

### 1. Geometry
Semi-major axis $a$; eccentricity $e$. Sun at focus. Perihelion $r_{\min}=a(1-e)$; aphelion $r_{\max}=a(1+e)$.

### 2. Energy and Period
Total energy $E=-\dfrac{GMm}{2a}$; $T^2\propto a^3$ still holds.

### 3. AP Patterns
Identify fastest point (perihelion); relate $K$ and $U$ at extremes; qualitative areal velocity.

### 4. Confusions
Assuming constant speed on ellipse; using circular formulas with wrong $r$.

**CED:** AP Physics C gravitation/orbits.""",
    ("AP Physics C: Mechanics", "6. Kepler's First and Second Law"): r"""## Detailed Knowledge

### 1. First Law
Planetary orbits are ellipses with the central body at one focus.

### 2. Second Law (Equal Areas)
Line from Sun to planet sweeps equal areas in equal times $\Rightarrow$ faster near perihelion.

### 3. Implication
Angular momentum conservation about focus explains area law qualitatively.

### 4. AP Patterns
Rank speeds at two orbital points; sketch orbit from given perihelion/aphelion.

### 5. Confusions
Placing Sun at ellipse center; ignoring areal law for timing between positions.

**CED:** AP Physics C Kepler laws.""",
    ("AP Physics C: Mechanics", "Calculus Used in Rotational Motion"): r"""## Detailed Knowledge

### 1. Work and Power
$dW=\tau\,d\theta$; $P=\tau\omega$. Integrate torque over angle for work on rotating body.

### 2. Angular Momentum
$L=I\omega$; if $I(t)$ changes, $\tau=dL/dt$ even at constant $\omega$.

### 3. Rolling Without Slip
Constraint $v=r\omega$ differentiates to $a=r\alpha$ relating linear and angular acceleration.

### 4. AP Patterns
Find work by integrating $\tau(\theta)$; analyze changing $I$ systems with calculus.

### 5. Confusions
Treating $\omega$ as constant when $I$ changes without external torque analysis.

**CED:** AP Physics C rotational calculus.""",
    ("AP Physics C: E&M", "Coulomb's Law and Superposition"): r"""## Detailed Knowledge

### 1. Coulomb's Law
$$F=\frac{1}{4\pi\varepsilon_0}\frac{|q_1 q_2|}{r^2}$$
Like charges repel; unlike attract. Vector superposition: $\vec F_{\mathrm{net}}=\sum \vec F_i$.

### 2. AP Patterns
Find force on test charge from multiple fixed charges; equilibrium position on line.

### 3. Confusions
Forgetting vector components; using $r$ instead of $r^2$; missing sign in force direction.

**CED:** AP Physics C E&M electrostatics.""",
    ("AP Physics C: E&M", "Continuous Charge Distributions (Line, Ring, Disk)"): r"""## Detailed Knowledge

### 1. Linear Density
$dq=\lambda\,dl$. Field from finite rod: integrate $d\vec E=\dfrac{k\,dq}{r^2}\hat r$ with symmetry.

### 2. Ring on Axis
$E=\dfrac{kQx}{(x^2+R^2)^{3/2}}$ on axis; maximum field not always at center for off-axis points—standard result at center of ring.

### 3. Disk
Uniform surface charge: use ring integration or known result $E=\dfrac{\sigma}{2\varepsilon_0}$ for infinite plane limit.

### 4. AP Patterns
Symmetry to cancel components; set up integral with correct $dq$.

### 5. Confusions
Using point-charge formula without integration; wrong $\lambda$ units.

**CED:** AP Physics C continuous distributions.""",
    ("AP Physics C: E&M", "Gauss's Law Applications: Plane, Line, and Sphere"): r"""## Detailed Knowledge

### 1. Gauss's Law
$$\oint \vec E\cdot d\vec A=\frac{Q_{\mathrm{enc}}}{\varepsilon_0}$$

### 2. Standard Results
Infinite plane: $E=\sigma/(2\varepsilon_0)$. Infinite line: $E=\lambda/(2\pi\varepsilon_0 r)$. Sphere: outside like point charge; inside uniform sphere $E\propto r$.

### 3. AP Patterns
Choose Gaussian surface matching symmetry; find $Q_{\mathrm{enc}}$ as fraction of total charge.

### 4. Confusions
Using Gauss when symmetry absent; forgetting factor 2 vs plane formulas.

**CED:** AP Physics C Gauss's law.""",
    ("AP Physics C: E&M", "Electric Field Energy and Energy Density"): r"""## Detailed Knowledge

### 1. Energy Stored
$U=\dfrac{1}{2}\varepsilon_0 E^2\,( \text{volume})$ for uniform field region; energy density $u=\dfrac{1}{2}\varepsilon_0 E^2$.

### 2. Capacitor Link
$U=\tfrac12 CV^2=\tfrac12 QV=Q^2/(2C)$.

### 3. AP Patterns
Find energy before/after inserting dielectric; energy density in parallel plates.

### 4. Confusions
Using $U=QV$ instead of $\tfrac12 QV$; missing volume factor in energy density integration.

**CED:** AP Physics C electrostatic energy.""",
    ("AP Physics C: E&M", "Equipotential Surfaces and Field Lines"): r"""## Detailed Knowledge

### 1. Equipotentials
Surfaces where $V$ is constant; $\vec E$ perpendicular to equipotentials; $E=-dV/dn$ (steepest decrease of $V$).

### 2. Field Lines
Begin on $+$, end on $-$; density indicates field strength; never cross.

### 3. AP Patterns
Sketch equipotentials near dipole; relate spacing of $V$ lines to $E$ magnitude.

### 4. Confusions
Drawing equipotentials crossing field lines at non-90°; assuming $E=0$ on entire surface unless inside conductor at equilibrium.

**CED:** AP Physics C potential.""",
    ("AP Physics C: E&M", "Dielectrics and Capacitors with Insulators"): r"""## Detailed Knowledge

### 1. Dielectric Effect
Inserting dielectric ($\kappa>1$) increases capacitance $C=\kappa C_0$ if $Q$ held fixed changes $V$, or decreases $V$ if $Q$ fixed.

### 2. Field Reduction
$E=E_0/\kappa$ with induced surface charges opposing external field.

### 3. AP Patterns
Battery connected vs disconnected when inserting slab; energy changes.

### 4. Confusions
Always assuming $V$ stays constant; forgetting bound charge contribution.

**CED:** AP Physics C capacitors/dielectrics.""",
    ("AP Physics C: E&M", "Kirchhoff's Rules and Multi-Loop Circuits"): r"""## Detailed Knowledge

### 1. Junction Rule
$\sum I_{\mathrm{in}}=\sum I_{\mathrm{out}}$—charge conservation.

### 2. Loop Rule
$\sum \Delta V=0$ around closed loop—energy conservation.

### 3. Strategy
Assign currents; traverse loops with sign conventions for resistors and emfs.

### 4. AP Patterns
Two-loop circuits; find current through shared branch; equivalent resistance checks.

### 5. Confusions
Wrong sign crossing emf/resistor; dependent equations from redundant loops.

**CED:** AP Physics C circuits.""",
    ("AP Physics C: E&M", "RC Circuit Transients and Capacitor Switching"): r"""## Detailed Knowledge

### 1. Charging
$Q(t)=Q_f(1-e^{-t/RC})$, $V_C=Q/C$. Time constant $\tau=RC$.

### 2. Discharging
$Q(t)=Q_0 e^{-t/RC}$.

### 3. AP Patterns
Find $I(t)$ via derivative; steady-state: capacitor open (DC), current zero in capacitor branch.

### 4. Confusions
Using steady-state rules at $t=0^+$ (capacitor continuity of $V_C$); mixing series/parallel $R$ seen by capacitor.

**CED:** AP Physics C RC circuits.""",
    ("AP Physics C: E&M", "Biot–Savart Law and Ampère's Law"): r"""## Detailed Knowledge

### 1. Biot–Savart
$d\vec B=\dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec l\times\hat r}{r^2}$ for current element.

### 2. Ampère's Law
$\oint \vec B\cdot d\vec l=\mu_0 I_{\mathrm{enc}}$ for steady currents with symmetry.

### 3. Standard Results
Long wire: $B=\mu_0 I/(2\pi r)$. Solenoid: $B=\mu_0 nI$ inside.

### 4. AP Patterns
Field at center of loop; choose Amperian loop for wire or solenoid.

### 5. Confusions
Using Biot–Savart without integration setup; wrong $I_{\mathrm{enc}}$ in Ampère loop.

**CED:** AP Physics C magnetostatics.""",
    ("AP Physics C: E&M", "Magnetic Force, Currents, and Right-Hand Rules"): r"""## Detailed Knowledge

### 1. Lorentz Force
$\vec F=q\vec v\times\vec B$; on wire $\vec F=I\vec L\times\vec B$.

### 2. Right-Hand Rules
Fingers: $I$ or $v$; curl to $B$; thumb force. Separate rule for field direction from current loop.

### 3. AP Patterns
Force between parallel wires; motion in uniform $B$ (circular if $v\perp B$).

### 4. Confusions
Sign errors; using $\sin$ where $\cos$ needed for angle between vectors.

**CED:** AP Physics C magnetic forces.""",
    ("AP Physics C: E&M", "Faraday's Law, Lenz's Law, and Induction Circuits"): r"""## Detailed Knowledge

### 1. Faraday's Law
$\mathcal{E}=-\dfrac{d\Phi_B}{dt}$; flux $\Phi_B=\int \vec B\cdot d\vec A$.

### 2. Lenz's Law
Induced current opposes the change in flux (sign in Faraday's law).

### 3. Motional EMF
$\mathcal{E}=Blv$ for rod perpendicular to $B$, $v$, and length.

### 4. AP Patterns
Find direction of induced current; magnitude from changing area or field.

### 5. Confusions
Wrong flux area; ignoring negative sign meaning opposition.

**CED:** AP Physics C induction.""",
    ("AP Physics C: E&M", "Inductance, RL Circuits, and LC Oscillations"): r"""## Detailed Knowledge

### 1. Inductance
$V_L=L\,dI/dt$; energy $U=\tfrac12 LI^2$.

### 2. RL Transient
Current growth $I(t)=I_f(1-e^{-t/\tau})$, $\tau=L/R$.

### 3. LC Oscillation
$Q(t)=Q_0\cos(\omega t)$, $\omega=1/\sqrt{LC}$; energy swaps between $C$ and $L$.

### 4. AP Patterns
Find $\tau$; initial $I$ in RL; period of LC circuit.

### 5. Confusions
Treating inductor as open at $t=0^+$ (short for DC steady state only after long time); confusing RL and RC $\tau$ forms.

**CED:** AP Physics C inductance.""",
    ("AP Physics C: E&M", "Mutual Inductance and Transformers"): r"""## Detailed Knowledge

### 1. Mutual Inductance
$\mathcal{E}_2=-M\,dI_1/dt$; $M$ depends on geometry and coupling.

### 2. Ideal Transformer
$\dfrac{V_p}{V_s}=\dfrac{N_p}{N_s}$, $\dfrac{I_p}{I_s}=\dfrac{N_s}{N_p}$ (power ideally conserved).

### 3. AP Patterns
Find secondary voltage/current; explain step-up vs step-down.

### 4. Confusions
Assuming power increases in transformer; mixing primary/secondary turns ratios inversely.

**CED:** AP Physics C induction applications.""",
}
