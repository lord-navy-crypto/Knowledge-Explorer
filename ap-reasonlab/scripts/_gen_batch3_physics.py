import random, string

BASE_TAGS = ["ai-topic-exercises", "ced-aligned", "generated", "with-solutions", "batch-3"]
GEN_NOTE = "Original AI-generated practice aligned to College Board AP Physics CED. Not College Board exam verbatim. Includes process + answers. · 2026-08-23 batch 3"


def rid(prefix):
    h = format(random.getrandbits(32), "x")[:8]
    s = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{h}-{s}"


def mcq(prompt, choices, answer_idx, steps, concept_id=None, tier=2):
    letter = "ABCD"[answer_idx]
    ans = choices[answer_idx]
    body = ans.split(") ", 1)[-1] if ") " in ans else ans
    return {"id": rid("m-item"), "format": "mcq", "prompt": prompt, "choices": choices,
            "conceptId": concept_id, "conceptIntro": None, "difficultyTier": tier,
            "visibleSteps": steps, "blankSteps": [f"Answer key: {letter}) {body}"],
            "hints": ["Eliminate wrong choices.", "Check definitions/units.", f"Final check: {letter}) {body}"]}


def frq(prompt, steps, answers, concept_id=None, tier=2):
    return {"id": rid("m-item"), "format": "frq_half", "prompt": prompt, "conceptId": concept_id,
            "conceptIntro": None, "difficultyTier": tier, "visibleSteps": steps,
            "blankSteps": answers if isinstance(answers, list) else [answers],
            "hints": ["State method first.", "Check units/context.", "Answers in blankSteps."]}


def quiz(title, subject, desc, tags, items, minutes=40, tier=2):
    return {"id": rid("m-quiz"), "title": title, "subject": subject, "kind": "generated",
            "description": desc, "generationNote": GEN_NOTE, "estimatedMinutes": minutes,
            "tags": BASE_TAGS + tags, "items": items, "difficultyTier": tier}


QUIZZES = [
    # AP Physics 1
    quiz(
        "AI Topic Exercises — AP Physics 1 Unit 1 Set 2: Kinematics",
        "AP Physics 1",
        "CED-aligned kinematics practice with motion representations, projectiles, piecewise acceleration, and experimental analysis.",
        ["ap-physics-1", "unit-1", "kinematics", "set-2"],
        [
            mcq(
                r"A cart's position is \(x(t)=2+3t-\tfrac12t^2\), with SI units. What is its velocity at \(t=2.0\text{ s}\)?",
                [r"A) \(-1.0\text{ m/s}\)", r"B) \(1.0\text{ m/s}\)", r"C) \(3.0\text{ m/s}\)", r"D) \(5.0\text{ m/s}\)"],
                1,
                [
                    "Instantaneous velocity is the time derivative of position.",
                    r"Differentiate to obtain \(v(t)=3-t\).",
                    r"Evaluate \(v(2.0)=1.0\text{ m/s}\).",
                ],
                "1.2 Representations of Motion",
                2,
            ),
            mcq(
                r"A ball is launched from level ground with velocity components \(v_{0x}=12\text{ m/s}\) and "
                r"\(v_{0y}=16\text{ m/s}\). Neglect air resistance and use \(g=10\text{ m/s}^2\). How far "
                "horizontally does it travel before returning to launch height?",
                [r"A) \(9.6\text{ m}\)", r"B) \(16.0\text{ m}\)", r"C) \(38.4\text{ m}\)", r"D) \(76.8\text{ m}\)"],
                2,
                [
                    r"The total flight time is \(2v_{0y}/g=3.2\text{ s}\).",
                    "Horizontal velocity remains constant in the ideal projectile model.",
                    r"The range is \(v_{0x}t=(12)(3.2)=38.4\text{ m}\).",
                ],
                "1.4 Projectile Motion",
                2,
            ),
            frq(
                r"A car starts from rest at \(x=0\). From \(t=0\) to \(4.0\text{ s}\), its acceleration is "
                r"\(+3.0\text{ m/s}^2\). From \(t=4.0\text{ s}\) onward, its acceleration is "
                r"\(-2.0\text{ m/s}^2\) until it stops. Determine the speed and position at \(t=4.0\text{ s}\), "
                "then determine when and where the car stops. Sketch the corresponding velocity-time graph.",
                [
                    "Treat each constant-acceleration interval separately and carry the final conditions of the first interval into the second.",
                    "Use area under the velocity-time graph to check each displacement.",
                    "The stopping time in the second interval follows from the velocity reaching zero.",
                ],
                [
                    r"At \(4.0\text{ s}\), \(v=(3.0)(4.0)=12\text{ m/s}\) and \(x=\tfrac12(3.0)(4.0)^2=24\text{ m}\).",
                    r"The car needs \(12/2.0=6.0\text{ s}\) more to stop, so it stops at \(t=10.0\text{ s}\).",
                    r"During braking it travels \(\tfrac12(12)(6.0)=36\text{ m}\), so the stopping position is \(x=60\text{ m}\).",
                    r"The \(v\)-versus-\(t\) graph rises linearly from \((0,0)\) to \((4,12)\), then falls linearly to \((10,0)\).",
                ],
                "1.3 Acceleration",
                2,
            ),
            frq(
                r"A motion sensor records a cart released from rest at \(t=0\): \(x=0.000,\ 0.040,\ 0.160,\ "
                r"0.360,\ 0.640\text{ m}\) at \(t=0.0,\ 0.1,\ 0.2,\ 0.3,\ 0.4\text{ s}\), respectively. "
                r"Use the data to test whether acceleration is constant, determine its value, and predict \(x\) at "
                r"\(t=0.50\text{ s}\). Describe one graph that would linearize the data.",
                [
                    r"For equally spaced times, compare the second differences or calculate \(x/t^2\) for nonzero times.",
                    r"For release from rest at the origin, use \(x=\tfrac12at^2\).",
                    "A linearized plot should have a slope that can be related directly to acceleration.",
                ],
                [
                    r"The second position differences are constant at \(0.080\text{ m}\), supporting constant acceleration.",
                    r"\(a=(\Delta^2x)/(\Delta t)^2=0.080/(0.10)^2=8.0\text{ m/s}^2\).",
                    r"Thus \(x=\tfrac12(8.0)t^2=4.0t^2\), giving \(x(0.50)=1.00\text{ m}\).",
                    r"A plot of \(x\) versus \(t^2\) is linear with slope \(a/2=4.0\text{ m/s}^2\).",
                ],
                "1.2 Representations of Motion",
                3,
            ),
        ],
        42,
    ),
    quiz(
        "AI Topic Exercises — AP Physics 1 Unit 2 Set 2: Dynamics",
        "AP Physics 1",
        "CED-aligned dynamics practice with free-body diagrams, friction, connected systems, drag, and experimental modeling.",
        ["ap-physics-1", "unit-2", "dynamics", "set-2"],
        [
            mcq(
                r"A \(60\text{ kg}\) passenger stands on a scale in an elevator accelerating upward at "
                r"\(2.0\text{ m/s}^2\). Using \(g=9.8\text{ m/s}^2\), what does the scale read?",
                [r"A) \(468\text{ N}\)", r"B) \(588\text{ N}\)", r"C) \(708\text{ N}\)", r"D) \(828\text{ N}\)"],
                2,
                [
                    "The scale reading is the upward normal force, not the passenger's weight.",
                    r"Apply \(N-mg=ma\).",
                    r"\(N=m(g+a)=60(9.8+2.0)=708\text{ N}\).",
                ],
                "2.5 Newton's Second Law",
                1,
            ),
            mcq(
                r"A \(4.0\text{ kg}\) crate is pulled horizontally by a \(20\text{ N}\) force across a floor with "
                r"coefficient of kinetic friction \(\mu_k=0.30\). What is the crate's acceleration?",
                [r"A) \(0.59\text{ m/s}^2\)", r"B) \(2.1\text{ m/s}^2\)", r"C) \(3.0\text{ m/s}^2\)", r"D) \(5.0\text{ m/s}^2\)"],
                1,
                [
                    r"With no vertical acceleration, \(N=mg\).",
                    r"The kinetic friction is \(f_k=\mu_kmg=(0.30)(4.0)(9.8)=11.76\text{ N}\).",
                    r"Apply \(a=(20-11.76)/4.0=2.06\text{ m/s}^2\).",
                ],
                "2.7 Friction",
                2,
            ),
            frq(
                r"Masses \(m_1=3.0\text{ kg}\) and \(m_2=5.0\text{ kg}\) hang on opposite sides of a light string "
                "over an ideal pulley. Draw a free-body diagram for each mass and determine the acceleration magnitude "
                "and string tension after release.",
                [
                    "Choose the heavier mass's downward direction as positive for the system.",
                    "Add the two Newton's-second-law equations so the internal tension cancels.",
                    "Substitute the acceleration into either individual mass equation to find tension.",
                ],
                [
                    r"For \(m_1\): \(T-m_1g=m_1a\); for \(m_2\): \(m_2g-T=m_2a\).",
                    r"\(a=(m_2-m_1)g/(m_1+m_2)=(2.0)(9.8)/8.0=2.45\text{ m/s}^2\), with \(m_2\) downward.",
                    r"\(T=m_1(g+a)=3.0(9.8+2.45)=36.8\text{ N}\).",
                ],
                "2.8 Newton's Second Law in Connected Systems",
                2,
            ),
            frq(
                r"A \(0.200\text{ kg}\) falling object experiences an upward drag force \(F_d=kv\). Its measured "
                r"terminal speed is \(4.00\text{ m/s}\). Determine \(k\), then find the object's downward acceleration "
                r"when its downward speed is \(2.00\text{ m/s}\). Finally, describe how measurements using several "
                "different masses could test the linear-drag model.",
                [
                    "At terminal speed, the net force and acceleration are zero.",
                    "Before terminal speed, subtract upward drag from downward weight.",
                    r"For several masses, identify a graph based on the terminal relation \(mg=kv_t\).",
                ],
                [
                    r"\(k=mg/v_t=(0.200)(9.8)/4.00=0.490\text{ N·s/m}\).",
                    r"At \(2.00\text{ m/s}\), \(a=(mg-kv)/m=[1.96-(0.490)(2.00)]/0.200=4.90\text{ m/s}^2\) downward.",
                    r"Measure \(v_t\) for several masses and plot \(mg\) versus \(v_t\). A straight line through the origin supports linear drag, and its slope is \(k\).",
                ],
                "2.10 Resistive Forces",
                3,
            ),
        ],
        42,
    ),
    quiz(
        "AI Topic Exercises — AP Physics 1 Units 4 & 7 Set 2: Rotation and Energy",
        "AP Physics 1",
        "CED-aligned synthesis of energy, rolling motion, angular momentum, rotational inertia, and inelastic angular collisions.",
        ["ap-physics-1", "units-4-7", "rotation", "energy", "set-2"],
        [
            mcq(
                "A solid cylinder and a thin hoop of equal mass and radius roll without slipping from rest down the "
                "same incline. Which reaches the bottom first, and why?",
                [
                    "A) The hoop, because its rotational inertia is larger",
                    "B) The cylinder, because less of its energy becomes rotational kinetic energy",
                    "C) They tie, because mechanical energy is conserved",
                    "D) They tie, because static friction does no work",
                ],
                1,
                [
                    r"For rolling, \(mgh=\tfrac12mv^2+\tfrac12I(v/R)^2\).",
                    r"The cylinder has \(I/(mR^2)=1/2\), while the hoop has \(I/(mR^2)=1\).",
                    "The smaller rotational-inertia factor gives the cylinder greater translational speed and acceleration.",
                ],
                "7.4 Rolling Motion",
                2,
            ),
            mcq(
                r"A student on a nearly frictionless rotating platform pulls two equal masses from radius \(r\) to "
                r"radius \(r/2\). If the masses dominate the system's rotational inertia, the angular speed becomes",
                [r"A) \(\omega/4\)", r"B) \(\omega/2\)", r"C) \(2\omega\)", r"D) \(4\omega\)"],
                3,
                [
                    "With negligible external torque, angular momentum is conserved.",
                    r"For point masses, rotational inertia scales as \(r^2\).",
                    r"Halving the radius makes \(I\) one-fourth as large, so \(\omega\) becomes four times as large.",
                ],
                "7.7 Conservation of Angular Momentum",
                2,
            ),
            frq(
                r"A uniform \(3.0\text{ kg}\), \(2.0\text{ m}\) rod rotates freely about a fixed axle through its "
                r"center and is initially at rest. A \(1.0\text{ kg}\) lump of clay moving at \(6.0\text{ m/s}\) "
                "perpendicular to the rod strikes and sticks to one end. Determine the angular speed immediately after "
                "impact and the mechanical energy transformed during the collision.",
                [
                    "During the brief collision, conserve angular momentum about the axle.",
                    r"Include both \(I_{\text{rod}}=ML^2/12\) and the attached clay's \(mr^2\).",
                    "Compare rotational kinetic energy after impact with the clay's translational kinetic energy before impact.",
                ],
                [
                    r"The initial angular momentum is \(L_i=mv(L/2)=(1.0)(6.0)(1.0)=6.0\text{ kg·m}^2\text{/s}\).",
                    r"\(I_f=(3.0)(2.0)^2/12+(1.0)(1.0)^2=2.0\text{ kg·m}^2\), so \(\omega_f=L_i/I_f=3.0\text{ rad/s}\).",
                    r"\(K_i=\tfrac12(1.0)(6.0)^2=18\text{ J}\) and \(K_f=\tfrac12(2.0)(3.0)^2=9.0\text{ J}\).",
                    r"Therefore \(9.0\text{ J}\) of mechanical energy is transformed into thermal energy, sound, and deformation.",
                ],
                "7.7 Conservation of Angular Momentum",
                3,
            ),
            frq(
                r"A solid sphere of radius \(0.200\text{ m}\) rolls without slipping from rest through a vertical drop "
                r"of \(1.20\text{ m}\). Determine its center-of-mass speed and angular speed at the bottom. Explain "
                "why the static friction force can affect the sphere's rotation without reducing its mechanical energy.",
                [
                    "Apply conservation of mechanical energy to translation and rotation.",
                    r"Use \(I=\tfrac25mR^2\) and the rolling condition \(v=\omega R\).",
                    "Analyze the instantaneous velocity of the contact point for ideal rolling.",
                ],
                [
                    r"\(mgh=\tfrac12mv^2+\tfrac12(\tfrac25mR^2)(v/R)^2=\tfrac7{10}mv^2\).",
                    r"\(v=\sqrt{10gh/7}=\sqrt{10(9.8)(1.20)/7}=4.10\text{ m/s}\).",
                    r"\(\omega=v/R=4.10/0.200=20.5\text{ rad/s}\).",
                    "The contact point is instantaneously at rest relative to the surface, so ideal static friction does no mechanical work even though it supplies torque.",
                ],
                "4.3 Conservation of Energy / 7.4 Rolling Motion",
                3,
            ),
        ],
        44,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Physics 1 Unit 8 Set 2: Advanced Fluids",
        "AP Physics 1",
        "CED-aligned advanced fluids practice with pressure, continuity, buoyancy, Bernoulli's equation, and flow experiments.",
        ["ap-physics-1", "unit-8", "fluids", "set-2"],
        [
            mcq(
                r"Two points in still freshwater differ in depth by \(3.0\text{ m}\). What is the pressure difference "
                r"between them? Use \(\rho=1000\text{ kg/m}^3\).",
                [r"A) \(3.0\text{ kPa}\)", r"B) \(9.8\text{ kPa}\)", r"C) \(29.4\text{ kPa}\)", r"D) \(294\text{ kPa}\)"],
                2,
                [
                    r"Hydrostatic pressure difference is \(\Delta P=\rho g\Delta h\).",
                    "Only the depth difference matters; atmospheric pressure cancels.",
                    r"\(\Delta P=(1000)(9.8)(3.0)=2.94\times10^4\text{ Pa}=29.4\text{ kPa}\).",
                ],
                "8.2 Pressure",
                1,
            ),
            mcq(
                "Water flows steadily through a horizontal pipe whose diameter narrows to half its original value. "
                "For incompressible flow, the speed in the narrow section is",
                ["A) one-fourth as large", "B) one-half as large", "C) twice as large", "D) four times as large"],
                3,
                [
                    r"Continuity requires \(A_1v_1=A_2v_2\).",
                    r"Cross-sectional area scales with diameter squared.",
                    "Halving diameter makes area one-fourth as large, requiring four times the speed.",
                ],
                "8.5 Fluids and Conservation Laws",
                2,
            ),
            frq(
                r"A uniform object of volume \(0.0200\text{ m}^3\) and density \(600\text{ kg/m}^3\) floats in "
                r"freshwater. Determine the submerged fraction and buoyant force. Then determine the minimum additional "
                "downward force needed to hold the object just fully submerged.",
                [
                    "For floating equilibrium, set buoyant force equal to the object's weight.",
                    "Relate displaced volume to object density and fluid density.",
                    "At full submersion, compare the maximum buoyant force with the object's weight.",
                ],
                [
                    r"The submerged fraction is \(\rho_{\text{object}}/\rho_{\text{water}}=600/1000=0.600\).",
                    r"The object mass is \((600)(0.0200)=12.0\text{ kg}\), so \(F_B=mg=117.6\text{ N}\) while floating.",
                    r"Fully submerged, \(F_B=(1000)(0.0200)(9.8)=196\text{ N}\).",
                    r"The required downward force is \(196-117.6=78.4\text{ N}\).",
                ],
                "8.4 Fluids and Newton's Laws",
                2,
            ),
            frq(
                r"A large open tank has a small hole of area \(2.00\times10^{-4}\text{ m}^2\) located "
                r"\(1.25\text{ m}\) below the water surface. Estimate the exit speed and volume flow rate. Then describe "
                "an experiment using several water depths that tests the predicted dependence of exit speed on depth.",
                [
                    "Apply Bernoulli's equation between the free surface and the hole.",
                    "For a large tank, take the free-surface speed as negligible; both points are at atmospheric pressure.",
                    r"Linearize \(v=\sqrt{2gh}\) in a way that permits a slope comparison.",
                ],
                [
                    r"Torricelli's result gives \(v=\sqrt{2gh}=\sqrt{2(9.8)(1.25)}=4.95\text{ m/s}\).",
                    r"The volume flow rate is \(Q=Av=(2.00\times10^{-4})(4.95)=9.90\times10^{-4}\text{ m}^3\text{/s}\).",
                    "For several measured depths, obtain exit speed from horizontal range and fall time or from collected volume per time.",
                    r"A plot of \(v^2\) versus \(h\) should be linear with slope \(2g\); systematic deviations can reveal viscosity or contraction at the opening.",
                ],
                "8.5 Fluids and Conservation Laws",
                3,
            ),
        ],
        44,
        3,
    ),

    # AP Physics 2
    quiz(
        "AI Topic Exercises — AP Physics 2 Unit 9 Set 2: Thermodynamics",
        "AP Physics 2",
        "CED-aligned thermodynamics practice with the first law, PV diagrams, ideal gases, heat engines, and entropy limits.",
        ["ap-physics-2", "unit-9", "thermodynamics", "set-2"],
        [
            mcq(
                r"An ideal gas expands at constant pressure \(2.0\times10^5\text{ Pa}\) from "
                r"\(2.0\times10^{-3}\text{ m}^3\) to \(5.0\times10^{-3}\text{ m}^3\). Its internal energy "
                r"increases by \(400\text{ J}\). How much heat enters the gas?",
                [r"A) \(-200\text{ J}\)", r"B) \(200\text{ J}\)", r"C) \(600\text{ J}\)", r"D) \(1000\text{ J}\)"],
                3,
                [
                    r"Work done by the gas is \(W=P\Delta V\).",
                    r"\(W=(2.0\times10^5)(3.0\times10^{-3})=600\text{ J}\).",
                    r"Using \(\Delta U=Q-W\), \(Q=\Delta U+W=1000\text{ J}\).",
                ],
                "9.4 First Law of Thermodynamics",
                2,
            ),
            mcq(
                r"A gas follows a clockwise rectangular cycle on a \(P\)-\(V\) diagram between pressures "
                r"\(1.0\times10^5\) and \(3.0\times10^5\text{ Pa}\) and volumes \(2.0\times10^{-3}\) and "
                r"\(4.0\times10^{-3}\text{ m}^3\). What is the net work done by the gas per cycle?",
                [r"A) \(-400\text{ J}\)", r"B) \(0\text{ J}\)", r"C) \(400\text{ J}\)", r"D) \(800\text{ J}\)"],
                2,
                [
                    "Net work over a cycle is the signed area enclosed on the PV diagram.",
                    "Clockwise traversal corresponds to positive work done by the gas.",
                    r"The area is \((2.0\times10^5)(2.0\times10^{-3})=400\text{ J}\).",
                ],
                "9.5 Thermodynamic Processes",
                2,
            ),
            frq(
                r"One mole of a monatomic ideal gas is heated at constant volume from \(300\text{ K}\) to "
                r"\(600\text{ K}\). It then expands isothermally at \(600\text{ K}\) until its volume doubles. "
                r"Determine \(W\), \(\Delta U\), and \(Q\) for each stage. Use \(R=8.31\text{ J mol}^{-1}\text{K}^{-1}\).",
                [
                    "At constant volume, work is zero and monatomic ideal-gas internal energy depends only on temperature.",
                    r"Use \(\Delta U=\tfrac32nR\Delta T\) for the first stage.",
                    r"For isothermal expansion, use \(W=nRT\ln(V_f/V_i)\) and \(\Delta U=0\).",
                ],
                [
                    r"Constant-volume stage: \(W_1=0\) and \(\Delta U_1=\tfrac32(1)(8.31)(300)=3.74\times10^3\text{ J}\).",
                    r"Thus \(Q_1=\Delta U_1+W_1=3.74\times10^3\text{ J}\).",
                    r"Isothermal stage: \(W_2=(1)(8.31)(600)\ln2=3.46\times10^3\text{ J}\) and \(\Delta U_2=0\).",
                    r"Thus \(Q_2=W_2=3.46\times10^3\text{ J}\).",
                ],
                "9.4 First Law of Thermodynamics",
                3,
            ),
            frq(
                r"A heat engine operates between reservoirs at \(600\text{ K}\) and \(300\text{ K}\). In each cycle "
                r"it absorbs \(1200\text{ J}\) from the hot reservoir and produces \(450\text{ J}\) of work. Determine "
                "its efficiency and heat exhausted. Compare its efficiency with the maximum possible value and explain "
                "the significance of the comparison.",
                [
                    r"Use \(e=W/Q_H\) and energy conservation \(Q_H=W+Q_C\).",
                    r"The reversible upper limit is the Carnot efficiency \(1-T_C/T_H\).",
                    "A real engine may be less efficient but cannot exceed the two-reservoir Carnot limit.",
                ],
                [
                    r"The actual efficiency is \(e=450/1200=0.375\), or \(37.5\%\).",
                    r"The exhausted heat is \(Q_C=1200-450=750\text{ J}\).",
                    r"The Carnot limit is \(e_C=1-300/600=0.500\), or \(50.0\%\).",
                    "The actual efficiency is physically plausible and lower because irreversible processes generate entropy.",
                ],
                "9.7 Heat Engines and the Second Law",
                3,
            ),
        ],
        44,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Physics 2 Unit 13 Set 2: Geometric Optics",
        "AP Physics 2",
        "CED-aligned geometric-optics practice with mirrors, lenses, multi-lens systems, ray diagrams, and focal-length experiments.",
        ["ap-physics-2", "unit-13", "geometric-optics", "set-2"],
        [
            mcq(
                r"An object is \(30\text{ cm}\) in front of a converging thin lens with focal length \(20\text{ cm}\). "
                "Which describes the image?",
                [
                    "A) Virtual, upright, and half as tall",
                    "B) Real, inverted, and twice as tall",
                    "C) Real, upright, and twice as tall",
                    "D) Virtual, inverted, and three times as tall",
                ],
                1,
                [
                    r"Use \(1/f=1/d_o+1/d_i\) with \(f=+20\text{ cm}\) and \(d_o=+30\text{ cm}\).",
                    r"The image distance is \(d_i=+60\text{ cm}\), so the image is real.",
                    r"The magnification is \(m=-d_i/d_o=-2\), indicating inverted and twice as tall.",
                ],
                "13.3 Images Formed by Lenses",
                2,
            ),
            mcq(
                r"An object is \(30\text{ cm}\) in front of a convex mirror whose focal length is \(-15\text{ cm}\). "
                "What is the image distance?",
                [r"A) \(-30\text{ cm}\)", r"B) \(-10\text{ cm}\)", r"C) \(+10\text{ cm}\)", r"D) \(+30\text{ cm}\)"],
                1,
                [
                    r"Apply \(1/f=1/d_o+1/d_i\) with the convex-mirror focal length negative.",
                    r"\(1/d_i=-1/15-1/30=-1/10\text{ cm}^{-1}\).",
                    r"Thus \(d_i=-10\text{ cm}\), a virtual image behind the mirror.",
                ],
                "13.2 Images Formed by Mirrors",
                2,
            ),
            frq(
                r"Two converging lenses are \(40\text{ cm}\) apart. Lens 1 has \(f_1=10\text{ cm}\), and lens 2 has "
                r"\(f_2=20\text{ cm}\). An object is \(15\text{ cm}\) to the left of lens 1. Find the intermediate "
                "image, the final image relative to lens 2, and the total magnification.",
                [
                    "Use the thin-lens equation for lens 1.",
                    "Treat the first image as the object for lens 2, carefully determining its distance from lens 2.",
                    "Multiply the two signed transverse magnifications.",
                ],
                [
                    r"For lens 1, \(1/d_{i1}=1/10-1/15=1/30\), so \(d_{i1}=+30\text{ cm}\) and \(m_1=-2\).",
                    r"The intermediate image is \(10\text{ cm}\) left of lens 2, so \(d_{o2}=+10\text{ cm}\).",
                    r"\(1/d_{i2}=1/20-1/10=-1/20\), so \(d_{i2}=-20\text{ cm}\): the final image is virtual and \(20\text{ cm}\) left of lens 2.",
                    r"\(m_2=-d_{i2}/d_{o2}=+2\), so \(m_{\text{total}}=m_1m_2=-4\).",
                ],
                "13.3 Images Formed by Lenses",
                3,
            ),
            frq(
                "A student is given an unlabeled converging lens, an illuminated object, and a screen. Describe a "
                "procedure for determining the focal length using multiple object and image distances. State what to "
                r"plot so the data are linear, and explain how the intercept yields \(f\). Include one important "
                "source of uncertainty and a way to reduce it.",
                [
                    "For each trial, form a sharply focused real image and measure distances from the lens's optical center.",
                    "Rearrange the thin-lens equation into a linear form.",
                    "Use repeated trials spanning a range of object distances rather than relying on one measurement.",
                ],
                [
                    r"Measure several pairs \((d_o,d_i)\) with \(d_o>f\), refocusing the screen for each object position.",
                    r"From \(1/d_i=-1/d_o+1/f\), plot \(1/d_i\) vertically versus \(1/d_o\) horizontally.",
                    r"The best-fit slope should be \(-1\), and the vertical intercept is \(1/f\), so \(f\) is the reciprocal of the intercept.",
                    "The lens optical center and exact best-focus position are uncertain; use a thin lens holder, measure from a consistent reference plane, darken the room, and fit many trials.",
                ],
                "13.4 Optical Instruments and Experiments",
                3,
            ),
        ],
        44,
    ),
    quiz(
        "AI Topic Exercises — AP Physics 2 Unit 14 Set 2: Waves and Optics",
        "AP Physics 2",
        "CED-aligned wave and physical-optics practice with wave speed, standing waves, interference, diffraction, and measurement.",
        ["ap-physics-2", "unit-14", "waves", "physical-optics", "set-2"],
        [
            mcq(
                r"A string under \(64\text{ N}\) of tension has linear density \(4.0\times10^{-3}\text{ kg/m}\). "
                r"What wavelength travels on it at \(200\text{ Hz}\)?",
                [r"A) \(0.080\text{ m}\)", r"B) \(0.32\text{ m}\)", r"C) \(0.63\text{ m}\)", r"D) \(1.6\text{ m}\)"],
                2,
                [
                    r"The wave speed is \(v=\sqrt{T/\mu}\).",
                    r"\(v=\sqrt{64/(4.0\times10^{-3})}=126.5\text{ m/s}\).",
                    r"The wavelength is \(\lambda=v/f=126.5/200=0.632\text{ m}\).",
                ],
                "14.2 Mechanical Waves",
                2,
            ),
            mcq(
                r"An open-open pipe of length \(0.85\text{ m}\) has a fundamental frequency of \(200\text{ Hz}\). "
                "If one end is closed without changing the effective length or sound speed, the new fundamental is",
                [r"A) \(50\text{ Hz}\)", r"B) \(100\text{ Hz}\)", r"C) \(200\text{ Hz}\)", r"D) \(400\text{ Hz}\)"],
                1,
                [
                    r"For an open-open fundamental, \(L=\lambda/2\).",
                    r"For an open-closed fundamental, \(L=\lambda/4\).",
                    "Closing one end doubles the fundamental wavelength and halves the frequency.",
                ],
                "14.3 Standing Waves and Resonance",
                2,
            ),
            frq(
                r"Light of wavelength \(600\text{ nm}\) passes through two narrow slits separated by \(0.300\text{ mm}\). "
                r"A screen is \(2.00\text{ m}\) away. Determine the small-angle fringe spacing. Predict and explain "
                "what is observed if one slit is covered.",
                [
                    r"For double-slit interference at small angles, use \(\Delta y=\lambda L/d\).",
                    "Convert all lengths to meters before substitution.",
                    "Distinguish two-source interference from the diffraction pattern of one finite-width slit.",
                ],
                [
                    r"\(\Delta y=(600\times10^{-9})(2.00)/(0.300\times10^{-3})=4.00\times10^{-3}\text{ m}=4.00\text{ mm}\).",
                    "Covering one slit removes the two-source path difference, so the regularly spaced double-slit fringes disappear.",
                    "A dimmer single-slit diffraction envelope remains because light from different parts of the uncovered slit can still diffract.",
                ],
                "14.5 Double-Slit Interference",
                2,
            ),
            frq(
                r"A diffraction grating has \(500\) lines per millimeter. Monochromatic light produces a second-order "
                r"maximum at \(30.0^\circ\). Determine the wavelength. If the angle uncertainty is \(0.5^\circ\), "
                r"estimate the resulting wavelength uncertainty using the nearby change in \(\sin\theta\).",
                [
                    "Convert line density to slit spacing.",
                    r"Use the grating condition \(d\sin\theta=m\lambda\).",
                    r"For a small angular uncertainty in radians, use \(\Delta(\sin\theta)\approx\cos\theta\,\Delta\theta\).",
                ],
                [
                    r"The spacing is \(d=1/(500\times10^3)=2.00\times10^{-6}\text{ m}\).",
                    r"\(\lambda=d\sin30.0^\circ/2=(2.00\times10^{-6})(0.500)/2=5.00\times10^{-7}\text{ m}=500\text{ nm}\).",
                    r"\(\Delta\theta=0.5^\circ=8.73\times10^{-3}\text{ rad}\), so \(\Delta(\sin\theta)\approx(0.866)(8.73\times10^{-3})=7.56\times10^{-3}\).",
                    r"\(\Delta\lambda\approx(d/m)\Delta(\sin\theta)=7.6\times10^{-9}\text{ m}\), or about \(8\text{ nm}\).",
                ],
                "14.6 Diffraction",
                3,
            ),
        ],
        44,
    ),
    quiz(
        "AI Topic Exercises — AP Physics 2 Unit 15 Set 2: Modern Physics",
        "AP Physics 2",
        "CED-aligned modern-physics practice with photons, matter waves, atomic spectra, radioactive decay, and quantum evidence.",
        ["ap-physics-2", "unit-15", "modern-physics", "set-2"],
        [
            mcq(
                r"A metal has work function \(2.20\text{ eV}\). Light of wavelength \(400\text{ nm}\) illuminates it. "
                r"Using \(hc=1240\text{ eV·nm}\), what stopping potential is required?",
                [r"A) \(0.90\text{ V}\)", r"B) \(2.20\text{ V}\)", r"C) \(3.10\text{ V}\)", r"D) \(5.30\text{ V}\)"],
                0,
                [
                    r"The photon energy is \(E_\gamma=hc/\lambda=1240/400=3.10\text{ eV}\).",
                    r"The maximum kinetic energy is \(K_{\max}=E_\gamma-\phi=0.90\text{ eV}\).",
                    r"Because \(eV_s=K_{\max}\), the numerical stopping potential is \(0.90\text{ V}\).",
                ],
                "15.2 Photoelectric Effect",
                2,
            ),
            mcq(
                "If a particle's nonrelativistic momentum doubles, its de Broglie wavelength",
                ["A) becomes one-fourth as large", "B) becomes one-half as large", "C) doubles", "D) quadruples"],
                1,
                [
                    r"Use the de Broglie relation \(\lambda=h/p\).",
                    "Wavelength is inversely proportional to momentum.",
                    "Doubling momentum therefore halves wavelength.",
                ],
                "15.3 Wave-Particle Duality",
                1,
            ),
            frq(
                r"A radioactive isotope has a half-life of \(6.0\text{ h}\). A sample initially contains "
                r"\(80\text{ mg}\). Determine the remaining isotope mass and the decayed mass after \(18.0\text{ h}\). "
                "Also determine the fraction of the original activity that remains.",
                [
                    "Count the elapsed number of half-lives.",
                    r"Use \(N=N_0(1/2)^n\); activity is proportional to the number of undecayed nuclei for constant decay constant.",
                    "Distinguish remaining isotope mass from mass that has decayed.",
                ],
                [
                    r"\(18.0\text{ h}\) is \(3.0\) half-lives, so the remaining mass is \(80(1/2)^3=10\text{ mg}\).",
                    r"The decayed mass is \(80-10=70\text{ mg}\).",
                    r"The activity is \(1/8=0.125\) of its initial value.",
                ],
                "15.6 Radioactive Decay",
                2,
            ),
            frq(
                r"An atom emits a \(656\text{ nm}\) photon in a transition from an upper state to a lower state. "
                r"Calculate the energy-level difference in electron-volts using \(hc=1240\text{ eV·nm}\). A "
                r"\(3.00\text{ mW}\), \(656\text{ nm}\) source emits photons at the same energy; estimate the photon "
                r"emission rate using \(1\text{ eV}=1.602\times10^{-19}\text{ J}\).",
                [
                    r"Photon energy equals the magnitude of the atomic energy-level difference: \(E=hc/\lambda\).",
                    "Convert the photon energy from electron-volts to joules.",
                    r"Power is energy per time, so photon rate is \(P/E_\gamma\).",
                ],
                [
                    r"\(\Delta E=1240/656=1.89\text{ eV}\).",
                    r"Each photon has energy \((1.89)(1.602\times10^{-19})=3.03\times10^{-19}\text{ J}\).",
                    r"The rate is \((3.00\times10^{-3})/(3.03\times10^{-19})=9.90\times10^{15}\text{ photons/s}\).",
                    "A discrete emitted wavelength supports the existence of quantized atomic energy levels.",
                ],
                "15.4 Atomic Energy Levels",
                3,
            ),
        ],
        42,
    ),

    # AP Physics C: Electricity and Magnetism
    quiz(
        "AI Topic Exercises — E&M Units 8–10 Challenge Set 3",
        "AP Physics C: E&M",
        "Calculus-based CED challenge practice integrating electric fields, Gauss's law, electric potential, and capacitors.",
        ["ap-physics-c-em", "units-8-10", "electrostatics", "capacitors", "challenge", "set-3"],
        [
            mcq(
                r"A neutral conductor contains an empty cavity. A point charge \(+q\) is placed inside the cavity "
                "without touching the conductor. In electrostatic equilibrium, the net induced charge on the cavity "
                "surface and on the conductor's exterior surface are, respectively,",
                [r"A) \(0,\ 0\)", r"B) \(-q,\ 0\)", r"C) \(-q,\ +q\)", r"D) \(+q,\ -q\)"],
                2,
                [
                    "A Gaussian surface within the conducting material has zero electric flux because the field there is zero.",
                    r"The enclosed charge must therefore vanish, requiring induced cavity-surface charge \(-q\).",
                    r"The conductor remains neutral overall, so its exterior surface carries \(+q\).",
                ],
                "8.5 Gauss's Law",
                2,
            ),
            mcq(
                r"Equal charges \(+q\) and \(-q\) are fixed at \(x=-a\) and \(x=+a\), respectively. At the origin,",
                [
                    "A) both electric potential and electric field are zero",
                    r"B) potential is zero, but the electric field points in the \(+x\) direction",
                    "C) potential is positive, but the electric field is zero",
                    r"D) potential is negative, and the electric field points in the \(-x\) direction",
                ],
                1,
                [
                    "Electric potential is a scalar sum; equal opposite contributions cancel at the midpoint.",
                    r"The field from \(+q\) points away from it, toward \(+x\) at the origin.",
                    r"The field toward \(-q\) also points toward \(+x\), so the fields add.",
                ],
                "9.2 Electric Potential",
                2,
            ),
            frq(
                r"A thin ring of radius \(a\) carries uniform total charge \(Q\). Derive the electric potential "
                r"\(V(x)\) and axial electric field \(E_x(x)\) at a point a distance \(x\) from the center. Evaluate "
                r"both at \(x=a\), taking \(V=0\) at infinity, and find the external work required to bring a test "
                r"charge \(q_0\) from infinity to that point.",
                [
                    "All ring elements are the same distance from an axial observation point.",
                    r"Obtain the axial field from the potential using \(E_x=-dV/dx\).",
                    "Relate quasistatic external work to the change in electric potential energy.",
                ],
                [
                    r"\(V(x)=kQ/\sqrt{x^2+a^2}\).",
                    r"\(E_x(x)=-dV/dx=kQx/(x^2+a^2)^{3/2}\), directed along the signed \(x\) axis for \(Q>0\).",
                    r"At \(x=a\), \(V=kQ/(\sqrt2a)\) and \(E_x=kQ/(2\sqrt2a^2)\).",
                    r"The required external work is \(\Delta U=q_0V(a)=kQq_0/(\sqrt2a)\).",
                ],
                "9.3 Potential from Continuous Charge Distributions",
                3,
            ),
            frq(
                r"A parallel-plate capacitor with plate area \(A\), separation \(d\), and no dielectric is charged "
                r"to potential difference \(V_0\), then disconnected from the battery. A dielectric with constant "
                r"\(\kappa=3\) is inserted completely. Determine the charge, new potential difference, and stored "
                "energy in terms of the original values. Explain the direction of the dielectric's motion if it is "
                "released while only partly inserted.",
                [
                    "After disconnection, free charge on the plates is fixed.",
                    r"A fully inserted dielectric multiplies capacitance by \(\kappa\).",
                    r"At fixed charge, use \(V=Q/C\) and \(U=Q^2/(2C)\).",
                ],
                [
                    r"Initially \(C_0=\epsilon_0A/d\), \(Q_0=C_0V_0\), and \(U_0=\tfrac12C_0V_0^2\).",
                    r"After insertion, \(C'=3C_0\) while \(Q'=Q_0\).",
                    r"Thus \(V'=V_0/3\) and \(U'=U_0/3\).",
                    "The dielectric is pulled farther between the plates because increasing capacitance lowers field energy at fixed charge; the energy decrease becomes mechanical work.",
                ],
                "10.3 Dielectrics",
                3,
            ),
        ],
        48,
        3,
    ),
    quiz(
        "AI Topic Exercises — E&M Units 11–13 Challenge Set 3",
        "AP Physics C: E&M",
        "Calculus-based CED challenge practice integrating RC circuits, magnetic forces, circuit networks, and electromagnetic induction.",
        ["ap-physics-c-em", "units-11-13", "circuits", "magnetism", "induction", "challenge", "set-3"],
        [
            mcq(
                r"An initially uncharged capacitor charges through a resistor from an ideal battery. At \(t=RC\), "
                "the capacitor charge is what fraction of its final value?",
                [r"A) \(e^{-1}\)", r"B) \(1-e^{-1}\)", r"C) \(e\)", r"D) \(1+e^{-1}\)"],
                1,
                [
                    r"For charging, \(q(t)=Q_f(1-e^{-t/RC})\).",
                    r"At one time constant, the exponential factor is \(e^{-1}\).",
                    r"Thus \(q/Q_f=1-e^{-1}\approx0.632\).",
                ],
                "11.7 RC Circuits",
                2,
            ),
            mcq(
                "A proton moves perpendicular to a uniform magnetic field in a circular path. If its speed doubles "
                "while the field is unchanged and relativistic effects are negligible, the orbital radius",
                ["A) is halved", "B) is unchanged", "C) doubles", "D) quadruples"],
                2,
                [
                    "The magnetic force supplies centripetal force.",
                    r"From \(qvB=mv^2/r\), \(r=mv/(qB)\).",
                    "At fixed mass, charge, and field, radius is proportional to speed.",
                ],
                "12.2 Motion of Charged Particles in Magnetic Fields",
                1,
            ),
            frq(
                r"A \(12\text{ V}\) ideal battery and a \(4.0\,\Omega\) resistor are in series with a parallel "
                r"combination of \(6.0\,\Omega\) and \(3.0\,\Omega\). Determine the equivalent resistance, battery "
                "current, current in each parallel branch, and power delivered by the battery.",
                [
                    "Reduce the parallel pair before adding the series resistance.",
                    "Use the parallel section's voltage to determine each branch current.",
                    r"Check that branch currents sum to the total current and that battery power is \(IV\).",
                ],
                [
                    r"\(R_{\parallel}=(1/6.0+1/3.0)^{-1}=2.0\,\Omega\), so \(R_{\text{eq}}=6.0\,\Omega\).",
                    r"The battery current is \(I=12/6.0=2.0\text{ A}\).",
                    r"The parallel pair has \(V_{\parallel}=I(2.0)=4.0\text{ V}\), so \(I_{6\Omega}=0.667\text{ A}\) and \(I_{3\Omega}=1.33\text{ A}\).",
                    r"The battery delivers \(P=(12)(2.0)=24\text{ W}\).",
                ],
                "11.4 Resistor Circuits",
                2,
            ),
            frq(
                r"A conducting rod of length \(0.500\text{ m}\) slides at \(6.00\text{ m/s}\) on conducting rails "
                r"through a uniform \(0.800\text{ T}\) field perpendicular to the rail plane. The total circuit "
                r"resistance is \(3.00\,\Omega\). Determine the induced emf, current, magnetic force opposing the "
                "motion, and external mechanical power required to maintain constant speed. Verify energy conservation.",
                [
                    r"Use motional emf \(\mathcal{E}=BLv\).",
                    "The induced current creates a magnetic force that opposes the flux change.",
                    r"Compare external mechanical power \(Fv\) with resistive power \(I^2R\).",
                ],
                [
                    r"\(\mathcal{E}=(0.800)(0.500)(6.00)=2.40\text{ V}\).",
                    r"\(I=\mathcal{E}/R=2.40/3.00=0.800\text{ A}\).",
                    r"\(F_B=ILB=(0.800)(0.500)(0.800)=0.320\text{ N}\), opposite the motion.",
                    r"\(P_{\text{ext}}=Fv=(0.320)(6.00)=1.92\text{ W}\), equal to \(I^2R=(0.800)^2(3.00)=1.92\text{ W}\).",
                ],
                "13.2 Motional Emf",
                3,
            ),
        ],
        46,
        3,
    ),
    quiz(
        "AI Topic Exercises — E&M FRQ Drill Set 3",
        "AP Physics C: E&M",
        "Original calculus-based E&M free-response drill spanning electrostatic equilibrium, transient circuits, and induction.",
        ["ap-physics-c-em", "mixed-frq", "frq-drill", "set-3"],
        [
            mcq(
                "A conducting loop lies in a magnetic field directed out of the page. The field magnitude is "
                "decreasing. The induced current in the loop is",
                [
                    "A) clockwise, to create a field into the page",
                    "B) clockwise, to create a field out of the page",
                    "C) counterclockwise, to create a field out of the page",
                    "D) counterclockwise, to create a field into the page",
                ],
                2,
                [
                    "Lenz's law says the induced field opposes the change in flux, not necessarily the original field.",
                    "Because outward flux is decreasing, the induced field points out of the page.",
                    "The right-hand rule gives a counterclockwise current for an outward field.",
                ],
                "13.1 Electromagnetic Induction",
                1,
            ),
            frq(
                r"Two identical \(0.0200\text{ kg}\) balls carry equal positive charges and hang from a common point "
                r"on \(0.500\text{ m}\) insulating strings. At equilibrium each string makes \(10.0^\circ\) with the "
                r"vertical. Determine the charge on each ball. Use \(k=8.99\times10^9\text{ N·m}^2\text{/C}^2\).",
                [
                    "Draw a free-body diagram for one ball and resolve tension into components.",
                    "Use the geometry to find the separation between charges.",
                    r"Combine \(F_e=mg\tan\theta\) with Coulomb's law.",
                ],
                [
                    r"The separation is \(r=2L\sin\theta=2(0.500)\sin10.0^\circ=0.1736\text{ m}\).",
                    r"Force balance gives \(F_e=mg\tan\theta=(0.0200)(9.8)\tan10.0^\circ=0.0346\text{ N}\).",
                    r"\(q=\sqrt{F_er^2/k}=\sqrt{(0.0346)(0.1736)^2/(8.99\times10^9)}=3.40\times10^{-7}\text{ C}\).",
                ],
                "8.3 Electric Fields and Forces",
                3,
            ),
            frq(
                r"An uncharged \(100\,\mu\text{F}\) capacitor is connected in series with a \(20.0\text{ k}\Omega\) "
                r"resistor and a \(12.0\text{ V}\) battery at \(t=0\). Determine the time constant, capacitor charge, "
                r"current, and energy stored at \(t=3.00\text{ s}\).",
                [
                    "Use the charging expressions for charge and current.",
                    "Find capacitor voltage from charge or from the exponential charging relation.",
                    r"Use \(U=\tfrac12CV_C^2\) for stored electric energy.",
                ],
                [
                    r"\(\tau=RC=(20.0\times10^3)(100\times10^{-6})=2.00\text{ s}\).",
                    r"\(q=CV(1-e^{-t/\tau})=(1.20\times10^{-3})(1-e^{-1.5})=9.32\times10^{-4}\text{ C}\).",
                    r"\(I=(V/R)e^{-t/\tau}=(12.0/20000)e^{-1.5}=1.34\times10^{-4}\text{ A}\).",
                    r"\(V_C=9.32\text{ V}\), so \(U=\tfrac12(100\times10^{-6})(9.32)^2=4.34\times10^{-3}\text{ J}\).",
                ],
                "11.7 RC Circuits",
                3,
            ),
            frq(
                r"A \(50\)-turn rectangular coil of area \(0.0100\text{ m}^2\) rotates in a uniform \(0.400\text{ T}\) "
                r"field with angular speed \(20.0\text{ rad/s}\). At \(t=0\), its area vector is parallel to the field. "
                r"Derive the induced emf as a function of time. If the coil's resistance is \(2.00\,\Omega\), find "
                r"the current, magnetic torque magnitude, and mechanical power at \(t=\pi/40\text{ s}\).",
                [
                    r"Write flux linkage as \(N\Phi=NBA\cos(\omega t)\) and differentiate.",
                    r"At the specified time, evaluate \(\omega t\).",
                    r"Use \(\tau=NIAB\sin\theta\) and compare \(\tau\omega\) with \(I^2R\).",
                ],
                [
                    r"\(\mathcal{E}(t)=-d(NBA\cos\omega t)/dt=NBA\omega\sin(\omega t)=4.00\sin(20.0t)\text{ V}\).",
                    r"At \(t=\pi/40\text{ s}\), \(\omega t=\pi/2\), so \(\mathcal{E}=4.00\text{ V}\) and \(I=2.00\text{ A}\).",
                    r"The torque magnitude is \(\tau=NIAB=(50)(2.00)(0.0100)(0.400)=0.400\text{ N·m}\).",
                    r"The required mechanical power is \(\tau\omega=(0.400)(20.0)=8.00\text{ W}\), equal to \(I^2R=(2.00)^2(2.00)=8.00\text{ W}\).",
                ],
                "13.3 Induced Emf and Generators",
                3,
            ),
        ],
        50,
        3,
    ),

    # AP Physics C: Mechanics
    quiz(
        "AI Topic Exercises — Mechanics Calculus Kinematics Set 3",
        "AP Physics C: Mechanics",
        "Calculus-based CED kinematics practice using derivatives, integrals, vector motion, and position-dependent velocity.",
        ["ap-physics-c-mechanics", "unit-1", "calculus-kinematics", "set-3"],
        [
            mcq(
                r"A particle moves on the \(x\)-axis according to \(x(t)=t^3-6t^2+9t\). At \(t=1\text{ s}\), "
                "which statement is correct?",
                [
                    r"A) \(v=0\) and \(a=-6\text{ m/s}^2\)",
                    r"B) \(v=0\) and \(a=+6\text{ m/s}^2\)",
                    r"C) \(v=6\text{ m/s}\) and \(a=0\)",
                    r"D) \(v=-6\text{ m/s}\) and \(a=0\)",
                ],
                0,
                [
                    r"Differentiate once: \(v=3t^2-12t+9\).",
                    r"Differentiate again: \(a=6t-12\).",
                    r"At \(t=1\), \(v=0\) and \(a=-6\text{ m/s}^2\).",
                ],
                "1.2 Calculus and Motion",
                2,
            ),
            mcq(
                r"A particle has speed \(v(x)=\sqrt{4+2x}\) in SI units. What is its acceleration as a function of position?",
                [r"A) \(a=1\text{ m/s}^2\)", r"B) \(a=\sqrt{4+2x}\)", r"C) \(a=1/\sqrt{4+2x}\)", r"D) \(a=2x\)"],
                0,
                [
                    r"Use the chain-rule relation \(a=dv/dt=(dv/dx)(dx/dt)=v\,dv/dx\).",
                    r"For \(v=(4+2x)^{1/2}\), \(dv/dx=(4+2x)^{-1/2}\).",
                    r"Therefore \(a=v\,dv/dx=1\text{ m/s}^2\).",
                ],
                "1.2 Calculus and Motion",
                3,
            ),
            frq(
                r"A particle has acceleration \(a(t)=6t-4\), initial velocity \(v(0)=3\text{ m/s}\), and initial "
                r"position \(x(0)=0\). Find \(v(t)\) and \(x(t)\). Determine whether the particle ever reverses "
                r"direction for \(t\ge0\), and find its position at \(t=2.0\text{ s}\).",
                [
                    "Integrate acceleration and use the initial velocity to determine the integration constant.",
                    "Integrate velocity and use the initial position.",
                    "A reversal requires velocity to pass through zero.",
                ],
                [
                    r"\(v(t)=\int(6t-4)\,dt=3t^2-4t+3\text{ m/s}\).",
                    r"\(x(t)=\int(3t^2-4t+3)\,dt=t^3-2t^2+3t\text{ m}\).",
                    r"The discriminant of \(3t^2-4t+3=0\) is \(16-36=-20<0\); with a positive leading coefficient, \(v\) never reaches zero, so there is no reversal.",
                    r"\(x(2.0)=8-8+6=6.0\text{ m}\).",
                ],
                "1.2 Calculus and Motion",
                3,
            ),
            frq(
                r"A projectile is launched from level ground with position vector "
                r"\(\vec r(t)=(4.0t)\hat{\imath}+(12.0t-4.90t^2)\hat{\jmath}\) in meters. Determine the time and "
                "horizontal position when it returns to the ground, its maximum height, and its velocity vector just "
                "before landing.",
                [
                    "Set the vertical coordinate equal to zero and select the nonzero root.",
                    "At maximum height, the vertical component of velocity is zero.",
                    "Differentiate the position vector to obtain velocity.",
                ],
                [
                    r"\(y=t(12.0-4.90t)=0\), so the nonzero landing time is \(t=12.0/4.90=2.45\text{ s}\).",
                    r"The range is \(x=(4.0)(2.45)=9.80\text{ m}\).",
                    r"At \(t=12.0/9.80=1.224\text{ s}\), \(y_{\max}=12.0t-4.90t^2=7.35\text{ m}\).",
                    r"\(\vec v=4.0\hat{\imath}+(12.0-9.80t)\hat{\jmath}\), so just before landing \(\vec v=(4.0\hat{\imath}-12.0\hat{\jmath})\text{ m/s}\).",
                ],
                "1.3 Two-Dimensional Motion",
                2,
            ),
        ],
        46,
        3,
    ),
    quiz(
        "AI Topic Exercises — Mechanics Rotation and Orbits Set 3",
        "AP Physics C: Mechanics",
        "Calculus-based CED challenge practice with angular impulse, rotational work, circular orbits, and orbital-energy reasoning.",
        ["ap-physics-c-mechanics", "units-5-7", "rotation", "gravitation", "orbits", "set-3"],
        [
            mcq(
                r"A satellite of mass \(m\) is in a circular orbit of radius \(r\) around a planet of mass \(M\). "
                "Its total mechanical energy is",
                [r"A) \(-GMm/r\)", r"B) \(-GMm/(2r)\)", r"C) \(0\)", r"D) \(+GMm/(2r)\)"],
                1,
                [
                    r"For a circular orbit, gravity gives \(mv^2/r=GMm/r^2\), so \(K=GMm/(2r)\).",
                    r"The gravitational potential energy is \(U=-GMm/r\).",
                    r"Thus \(E=K+U=-GMm/(2r)\).",
                ],
                "7.3 Gravitational Orbits",
                2,
            ),
            mcq(
                "A skater spins with negligible external torque. She extends her arms, increasing her rotational "
                "inertia. Which combination correctly describes her angular speed and rotational kinetic energy?",
                [
                    "A) Angular speed increases; kinetic energy increases",
                    "B) Angular speed decreases; kinetic energy decreases",
                    "C) Angular speed decreases; kinetic energy is unchanged",
                    "D) Angular speed is unchanged; kinetic energy decreases",
                ],
                1,
                [
                    r"Angular momentum \(L=I\omega\) is conserved when external torque is negligible.",
                    r"Increasing \(I\) therefore decreases \(\omega\).",
                    r"At fixed angular momentum, \(K=L^2/(2I)\), so kinetic energy decreases; internal work accounts for the change.",
                ],
                "5.7 Angular Momentum",
                2,
            ),
            frq(
                r"A wheel with rotational inertia \(I=2.00\text{ kg·m}^2\) starts from rest. From \(t=0\) to "
                r"\(t=3.00\text{ s}\), a torque \(\tau(t)=6.00-2.00t\) N·m acts in a fixed direction. Determine the "
                r"wheel's angular speed and angular displacement at \(3.00\text{ s}\), and the work done by the torque.",
                [
                    "Integrate torque over time to obtain angular impulse and angular momentum.",
                    r"Alternatively find \(\alpha(t)=\tau(t)/I\), then integrate twice.",
                    "Use the rotational work-energy theorem for total work.",
                ],
                [
                    r"\(\Delta L=\int_0^3(6-2t)\,dt=[6t-t^2]_0^3=9.00\text{ kg·m}^2\text{/s}\), so \(\omega=9.00/2.00=4.50\text{ rad/s}\).",
                    r"\(\alpha=3-t\), so \(\omega(t)=3t-\tfrac12t^2\).",
                    r"\(\theta=\int_0^3(3t-\tfrac12t^2)\,dt=[1.5t^2-t^3/6]_0^3=9.00\text{ rad}\).",
                    r"The work is \(\Delta K=\tfrac12I\omega^2=\tfrac12(2.00)(4.50)^2=20.3\text{ J}\).",
                ],
                "5.4 Rotational Dynamics",
                3,
            ),
            frq(
                r"A \(500\text{ kg}\) satellite travels in a circular orbit of radius \(7.00\times10^6\text{ m}\) "
                r"about a planet for which \(GM=3.99\times10^{14}\text{ m}^3\text{/s}^2\). Determine its orbital "
                "speed, period, and total mechanical energy. Predict the immediate orbital consequence of a brief "
                "tangential thrust in the direction of motion.",
                [
                    "Set gravitational force equal to the required centripetal force.",
                    "Use circumference divided by orbital speed for the period.",
                    r"Use \(E=-GMm/(2r)\) for a circular orbit.",
                ],
                [
                    r"\(v=\sqrt{GM/r}=\sqrt{(3.99\times10^{14})/(7.00\times10^6)}=7.55\times10^3\text{ m/s}\).",
                    r"\(T=2\pi r/v=2\pi(7.00\times10^6)/(7.55\times10^3)=5.83\times10^3\text{ s}\).",
                    r"\(E=-GMm/(2r)=-(3.99\times10^{14})(500)/[2(7.00\times10^6)]=-1.43\times10^{10}\text{ J}\).",
                    "A forward tangential thrust increases speed and mechanical energy; the burn point becomes the periapsis of a higher, generally elliptical orbit if the satellite remains bound.",
                ],
                "7.3 Gravitational Orbits",
                3,
            ),
        ],
        48,
        3,
    ),
    quiz(
        "AI Topic Exercises — Mechanics Mixed FRQ Set 3",
        "AP Physics C: Mechanics",
        "Original calculus-based mixed free-response drill integrating oscillation, energy, momentum, impulse, and friction.",
        ["ap-physics-c-mechanics", "mixed-frq", "frq-drill", "set-3"],
        [
            mcq(
                r"A mass in simple harmonic motion has amplitude \(A\) and angular frequency \(\omega\). What is its "
                r"speed when its displacement magnitude is \(A/2\)?",
                [r"A) \(\omega A/2\)", r"B) \(\omega A/\sqrt2\)", r"C) \(\sqrt3\,\omega A/2\)", r"D) \(\omega A\)"],
                2,
                [
                    r"Use \(v^2=\omega^2(A^2-x^2)\), obtained from conservation of energy.",
                    r"At \(x=A/2\), \(A^2-x^2=3A^2/4\).",
                    r"Therefore \(v=\sqrt3\,\omega A/2\).",
                ],
                "6.2 Simple Harmonic Motion",
                2,
            ),
            frq(
                r"A \(2.00\text{ kg}\) block attached to a horizontal spring with \(k=200\text{ N/m}\) is released "
                r"from rest at compression \(0.300\text{ m}\). The entire surface has \(\mu_k=0.200\). Determine the "
                "block's speed as it first passes the spring's equilibrium position and the distance beyond equilibrium "
                "where it first stops.",
                [
                    "Apply energy accounting including the negative work of kinetic friction.",
                    "For the trip to equilibrium, friction acts over the initial compression distance.",
                    "Beyond equilibrium, the remaining kinetic energy becomes spring energy plus thermal energy.",
                ],
                [
                    r"Initially \(U_s=\tfrac12(200)(0.300)^2=9.00\text{ J}\); friction to equilibrium transforms \((0.200)(2.00)(9.8)(0.300)=1.18\text{ J}\).",
                    r"Thus \(K_{\text{eq}}=7.82\text{ J}\) and \(v_{\text{eq}}=\sqrt{2K/m}=2.80\text{ m/s}\).",
                    r"At the stop, \(7.82=\tfrac12(200)x^2+(0.200)(2.00)(9.8)x\), or \(100x^2+3.92x-7.82=0\).",
                    r"The positive root is \(x=0.261\text{ m}\) beyond equilibrium.",
                ],
                "3.6 Energy and Nonconservative Forces / 6.2 Simple Harmonic Motion",
                3,
            ),
            frq(
                r"A \(0.0200\text{ kg}\) projectile moving horizontally at \(100\text{ m/s}\) embeds in a stationary "
                r"\(1.00\text{ kg}\) pendulum bob suspended by a \(0.800\text{ m}\) string. Determine the speed just "
                "after impact and the maximum angular displacement from vertical. Calculate the fraction of initial "
                "kinetic energy transformed during the collision.",
                [
                    "Conserve horizontal momentum during the brief inelastic collision.",
                    "After the collision, conserve mechanical energy during the pendulum's rise.",
                    r"Relate vertical rise to angle with \(h=L(1-\cos\theta)\).",
                ],
                [
                    r"\(V=mv/(M+m)=(0.0200)(100)/(1.020)=1.96\text{ m/s}\).",
                    r"\(h=V^2/(2g)=(1.96)^2/(19.6)=0.196\text{ m}\).",
                    r"\(\cos\theta=1-h/L=1-0.196/0.800=0.755\), so \(\theta=41.0^\circ\).",
                    r"\(K_i=100\text{ J}\) and \(K_{\text{after}}=\tfrac12(1.020)(1.96)^2=1.96\text{ J}\); the transformed fraction is \(1-1.96/100=0.980\), or \(98.0\%\).",
                ],
                "4.5 Inelastic Collisions",
                3,
            ),
            frq(
                r"A \(1.00\text{ kg}\) cart starts from rest on a frictionless track under a time-dependent horizontal "
                r"force \(F(t)=4.00t\) N from \(t=0\) to \(2.00\text{ s}\). It then enters a level rough region with "
                r"\(\mu_k=0.250\). Find its speed and displacement at \(2.00\text{ s}\), then find the stopping distance "
                "in the rough region.",
                [
                    "Integrate force over time to find impulse and momentum.",
                    "Integrate velocity to find displacement during the time-dependent-force interval.",
                    "In the rough region, use work-energy or constant friction acceleration.",
                ],
                [
                    r"\(\Delta p=\int_0^2 4t\,dt=[2t^2]_0^2=8.00\text{ N·s}\), so \(v(2)=8.00\text{ m/s}\).",
                    r"Since \(a=4t\), \(v=2t^2\) and \(x=\int_0^2 2t^2dt=\tfrac23(2)^3=5.33\text{ m}\).",
                    r"On the rough region, \(\tfrac12mv^2=\mu_kmgd\).",
                    r"\(d=v^2/(2\mu_kg)=64/[2(0.250)(9.8)]=13.1\text{ m}\).",
                ],
                "2.3 Time-Dependent Forces / 4.2 Impulse and Momentum",
                3,
            ),
        ],
        50,
        3,
    ),
]


if __name__ == "__main__":
    print(len(QUIZZES), sum(len(q['items']) for q in QUIZZES))
