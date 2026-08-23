#!/usr/bin/env python3
"""Batch 4 CED-aligned practice across all supported AP subjects."""

import random
import string


BASE_TAGS = [
    "ai-topic-exercises",
    "ced-aligned",
    "generated",
    "with-solutions",
    "batch-4",
]
GEN_NOTE = (
    "Original AI-generated practice aligned to College Board CED. "
    "Not College Board exam verbatim. Includes process + answers. "
    "(batch 4 · 2026-08-23)"
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


PHYSICS_1 = "AP Physics 1"
PHYSICS_2 = "AP Physics 2"
PHYSICS_EM = "AP Physics C: E&M"
PHYSICS_MECH = "AP Physics C: Mechanics"
STATS = "AP Statistics"
CALC = "AP Calculus AB/BC"
CHEM = "AP Chemistry"
BIO = "AP Biology"
APES = "AP Environmental Science"
CSA = "AP Computer Science A"
CSP = "AP Computer Science Principles"
PSYCH = "AP Psychology"
MACRO = "AP Macroeconomics"
MICRO = "AP Microeconomics"
APUSH = "AP US History"
WORLD = "AP World History"
EURO = "AP European History"
HUG = "AP Human Geography"
LANG = "AP English Language"
LIT = "AP English Literature"


QUIZZES = [
    # AP Physics 1
    quiz(
        "AI Topic Exercises — AP Physics 1 Unit 3 Set 4: Circular Motion and Gravitation",
        PHYSICS_1,
        "CED-aligned practice connecting radial acceleration, force diagrams, orbits, and experimental evidence.",
        ["ap-physics-1", "unit-3", "circular-motion", "gravitation", "set-4"],
        [
            mcq(
                r"A \(0.50\text{ kg}\) puck moves at \(6.0\text{ m/s}\) in a horizontal circle of radius "
                r"\(3.0\text{ m}\). What is the magnitude of the net force on the puck?",
                [
                    r"A) \(3.0\text{ N}\)",
                    r"B) \(6.0\text{ N}\)",
                    r"C) \(9.0\text{ N}\)",
                    r"D) \(18\text{ N}\)",
                ],
                1,
                [
                    r"Uniform circular motion requires radial acceleration \(a_r=v^2/r\).",
                    r"Apply \(F_{\mathrm{net}}=ma_r=(0.50)(6.0^2/3.0)\).",
                    r"The result is \(6.0\text{ N}\), directed toward the circle's center.",
                ],
                "p1-3.2-circular-net-force-b4",
            ),
            frq(
                r"A \(900\text{ kg}\) car rounds a flat curve of radius \(45\text{ m}\). The coefficient of "
                r"static friction is \(0.40\). Using \(g=10\text{ m/s}^2\), determine the greatest speed at "
                "which the car can round the curve without slipping. Explain why the car's mass cancels.",
                [
                    "Draw a free-body diagram and identify static friction as the horizontal radial force.",
                    r"At impending slip, set \(f_{s,\max}=\mu_sN\) equal to \(mv^2/r\).",
                    r"Use vertical equilibrium, \(N=mg\), before solving for speed.",
                ],
                [
                    r"\(\mu_smg=mv^2/r\), so \(v_{\max}=\sqrt{\mu_sgr}\).",
                    r"\(v_{\max}=\sqrt{(0.40)(10)(45)}=\sqrt{180}\approx13.4\text{ m/s}\).",
                    "Both the available friction and required radial force are proportional to mass, so mass cancels.",
                ],
                "p1-3.3-friction-curve-b4",
                2,
            ),
            mcq(
                r"A satellite moves from a circular orbit of radius \(R\) to a circular orbit of radius \(4R\) "
                "around the same planet. Its orbital speed changes by what factor?",
                [
                    "A) It becomes one fourth as large.",
                    "B) It becomes one half as large.",
                    "C) It doubles.",
                    "D) It quadruples.",
                ],
                1,
                [
                    r"For a circular orbit, gravity supplies \(mv^2/r\).",
                    r"Solving \(GMm/r^2=mv^2/r\) gives \(v=\sqrt{GM/r}\).",
                    r"Replacing \(r\) by \(4R\) divides the speed by \(\sqrt{4}=2\).",
                ],
                "p1-3.5-orbital-speed-b4",
            ),
            frq(
                "Students whirl the same stopper in circles of several radii while keeping its speed constant. "
                r"They measure string tension \(T\). Describe a graph that tests the circular-motion model, state "
                "its predicted slope, and identify one measurement that should be repeated to reduce uncertainty.",
                [
                    r"Begin with the model \(T=mv^2/r\) for a horizontal radial string force.",
                    "Choose transformed axes that produce a linear relation.",
                    "Connect the fitted slope to independently measurable quantities.",
                ],
                [
                    r"Plot \(T\) vertically against \(1/r\) horizontally; the model predicts a straight line.",
                    r"The ideal slope is \(mv^2\), with an intercept of zero.",
                    "Repeating the period measurement over many revolutions reduces timing uncertainty in the calculated speed.",
                ],
                "p1-3.4-circular-experiment-b4",
                3,
            ),
        ],
        42,
    ),
    quiz(
        "AI Topic Exercises — AP Physics 1 Units 5–6 Set 4: Momentum and Oscillations",
        PHYSICS_1,
        "Original momentum, collision, impulse, and simple-harmonic-motion problems using multiple representations.",
        ["ap-physics-1", "unit-5", "unit-6", "momentum", "oscillations", "set-4"],
        [
            frq(
                r"A \(0.20\text{ kg}\) cart moving right at \(5.0\text{ m/s}\) collides and sticks to a "
                r"\(0.30\text{ kg}\) cart initially moving left at \(1.0\text{ m/s}\). Find their final velocity "
                "and the change in total kinetic energy.",
                [
                    "Choose right as positive and conserve momentum during the short collision.",
                    "Because the carts stick, use their combined mass for the final kinetic energy.",
                    "Subtract initial kinetic energy from final kinetic energy.",
                ],
                [
                    r"\(p_i=(0.20)(5.0)+(0.30)(-1.0)=0.70\text{ kg m/s}\).",
                    r"\(v_f=0.70/(0.50)=1.4\text{ m/s}\) to the right.",
                    r"\(K_i=2.65\text{ J}\), \(K_f=\tfrac12(0.50)(1.4)^2=0.49\text{ J}\), so "
                    r"\(\Delta K=-2.16\text{ J}\).",
                ],
                "p1-5.3-inelastic-collision-b4",
                2,
            ),
            mcq(
                r"A force on a ball rises linearly from \(0\) to \(12\text{ N}\) during \(0.030\text{ s}\), then "
                r"falls linearly to \(0\) during the next \(0.020\text{ s}\). What impulse does the ball receive?",
                [
                    r"A) \(0.18\text{ N s}\)",
                    r"B) \(0.30\text{ N s}\)",
                    r"C) \(0.36\text{ N s}\)",
                    r"D) \(0.60\text{ N s}\)",
                ],
                1,
                [
                    "Impulse equals area under the force-time graph.",
                    r"The graph is a triangle with base \(0.050\text{ s}\) and height \(12\text{ N}\).",
                    r"\(J=\tfrac12(0.050)(12)=0.30\text{ N s}\).",
                ],
                "p1-5.2-impulse-graph-b4",
            ),
            mcq(
                r"A block attached to an ideal spring oscillates with period \(T\). If its mass is multiplied by "
                "4 while the spring is unchanged, what is the new period?",
                [r"A) \(T/4\)", r"B) \(T/2\)", r"C) \(2T\)", r"D) \(4T\)"],
                2,
                [
                    r"For a mass-spring oscillator, \(T=2\pi\sqrt{m/k}\).",
                    "The period depends on the square root of mass.",
                    r"Multiplying mass by 4 multiplies the period by 2.",
                ],
                "p1-6.2-spring-period-b4",
            ),
            frq(
                r"A \(0.50\text{ kg}\) block oscillates on a spring with \(k=200\text{ N/m}\) and amplitude "
                r"\(0.10\text{ m}\). Determine its period, maximum speed, and speed at \(x=0.060\text{ m}\).",
                [
                    r"Use \(T=2\pi\sqrt{m/k}\) and \(\omega=\sqrt{k/m}\).",
                    r"The maximum speed is \(v_{\max}=\omega A\).",
                    r"At an intermediate position, conserve \(E=\tfrac12kA^2=\tfrac12kx^2+\tfrac12mv^2\).",
                ],
                [
                    r"\(\omega=\sqrt{200/0.50}=20\text{ rad/s}\), so \(T=2\pi/20\approx0.314\text{ s}\).",
                    r"\(v_{\max}=(20)(0.10)=2.0\text{ m/s}\).",
                    r"\(v=\omega\sqrt{A^2-x^2}=20\sqrt{0.10^2-0.060^2}=1.6\text{ m/s}\).",
                ],
                "p1-6.3-shm-energy-b4",
                3,
            ),
        ],
        44,
        3,
    ),
    # AP Physics 2
    quiz(
        "AI Topic Exercises — AP Physics 2 Unit 10 Set 4: Electric Fields and Potential",
        PHYSICS_2,
        "CED-aligned electrostatics practice on superposition, field, potential, and charged-particle energy.",
        ["ap-physics-2", "unit-10", "electric-field", "electric-potential", "set-4"],
        [
            mcq(
                r"Charges \(+q\) are fixed at \(x=-a\) and \(x=+a\). At the origin, which statement is correct?",
                [
                    "A) Both electric field and electric potential are zero.",
                    "B) Electric field is zero, but electric potential is positive.",
                    "C) Electric field points right, and electric potential is zero.",
                    "D) Electric field points left, and electric potential is negative.",
                ],
                1,
                [
                    "Electric field is a vector, so equal opposing contributions cancel at the midpoint.",
                    "Electric potential is a scalar, so the two positive contributions add.",
                    r"Thus \(E=0\) while \(V=2kq/a>0\).",
                ],
                "p2-10.3-field-potential-superposition-b4",
            ),
            frq(
                r"Two point charges, \(+3.0\,\mu\text{C}\) and \(-1.0\,\mu\text{C}\), are separated by "
                r"\(0.40\text{ m}\). Find the electric potential at the midpoint and the work an external agent "
                r"must do to bring a \(+2.0\,\mu\text{C}\) test charge from infinity to that point. Use "
                r"\(k=9.0\times10^9\text{ N m}^2/\text{C}^2\).",
                [
                    "Add the scalar potentials of the source charges.",
                    r"Each source is \(0.20\text{ m}\) from the midpoint.",
                    r"For a slow transfer from infinity, \(W_{\mathrm{ext}}=\Delta U=q_{\mathrm{test}}V\).",
                ],
                [
                    r"\(V=k(3.0\times10^{-6}-1.0\times10^{-6})/0.20=9.0\times10^4\text{ V}\).",
                    r"\(W_{\mathrm{ext}}=(2.0\times10^{-6})(9.0\times10^4)=0.18\text{ J}\).",
                    "The positive work increases the electric potential energy of the test charge.",
                ],
                "p2-10.5-potential-work-b4",
                2,
            ),
            mcq(
                "A proton is released from rest and moves only under an electrostatic force. As it moves toward "
                "a location of lower electric potential, which change occurs?",
                [
                    "A) Its electric potential energy and kinetic energy both increase.",
                    "B) Its electric potential energy increases while kinetic energy decreases.",
                    "C) Its electric potential energy decreases while kinetic energy increases.",
                    "D) Neither energy changes.",
                ],
                2,
                [
                    r"For a positive charge, \(U=qV\), so lower \(V\) means lower \(U\).",
                    "With only the conservative electric force acting, mechanical energy is constant.",
                    "The decrease in potential energy becomes kinetic energy.",
                ],
                "p2-10.6-charge-energy-b4",
            ),
            frq(
                "Students map equipotential lines in a conducting-paper region. Adjacent lines differ by "
                r"\(2.0\text{ V}\); near point P they are \(0.010\text{ m}\) apart. Estimate the electric-field "
                "magnitude at P, state its direction relative to the equipotentials, and explain where a map "
                "with more closely spaced lines has the stronger field.",
                [
                    r"Approximate the local field magnitude with \(E\approx|\Delta V|/\Delta s\).",
                    "The electric field is perpendicular to equipotential lines.",
                    "Use the potential decrease to determine the field direction.",
                ],
                [
                    r"\(E\approx2.0/0.010=2.0\times10^2\text{ V/m}\).",
                    "The field points perpendicular to the lines, from higher toward lower potential.",
                    "For the same potential increment, closer spacing gives a larger potential gradient and therefore a stronger field.",
                ],
                "p2-10.7-equipotential-map-b4",
                3,
            ),
        ],
        42,
    ),
    quiz(
        "AI Topic Exercises — AP Physics 2 Units 11–12 Set 4: Circuits and Magnetism",
        PHYSICS_2,
        "Original practice with multiloop reasoning, RC behavior, magnetic forces, and charged-particle paths.",
        ["ap-physics-2", "unit-11", "unit-12", "circuits", "magnetism", "set-4"],
        [
            frq(
                r"A \(12\text{ V}\) ideal battery is connected to a \(4.0\,\Omega\) resistor in series with a "
                r"parallel combination of \(6.0\,\Omega\) and \(3.0\,\Omega\). Find the total current and the "
                "current through each parallel branch.",
                [
                    "Replace the parallel pair by its equivalent resistance.",
                    "Add the series resistance and use the battery voltage to find total current.",
                    "Find the voltage across the parallel pair, then apply Ohm's law to each branch.",
                ],
                [
                    r"\(R_{\parallel}=(1/6.0+1/3.0)^{-1}=2.0\,\Omega\), so \(R_{\mathrm{eq}}=6.0\,\Omega\).",
                    r"The battery current is \(I=12/6.0=2.0\text{ A}\).",
                    r"The parallel voltage is \(I R_{\parallel}=4.0\text{ V}\), giving \(I_{6\Omega}=0.667\text{ A}\) "
                    r"and \(I_{3\Omega}=1.33\text{ A}\).",
                ],
                "p2-11.4-series-parallel-b4",
                2,
            ),
            mcq(
                "An initially uncharged capacitor charges through a resistor from an ideal battery. Immediately "
                "after the switch closes, which statement is correct?",
                [
                    "A) The capacitor voltage equals the battery voltage and current is zero.",
                    "B) The capacitor voltage is zero and current has its maximum value.",
                    "C) Both capacitor voltage and current are zero.",
                    "D) Both capacitor voltage and current have their final maximum values.",
                ],
                1,
                [
                    "Capacitor voltage cannot jump from its initial value.",
                    "At the first instant the uncharged capacitor behaves like a wire in the ideal model.",
                    r"Thus \(V_C=0\) and \(I=\mathcal{E}/R\), its maximum value.",
                ],
                "p2-11.7-rc-initial-b4",
            ),
            mcq(
                r"A positive charge moves east through a uniform magnetic field directed north. The magnetic "
                "force on the charge points",
                ["A) north", "B) south", "C) upward", "D) downward"],
                2,
                [
                    r"Use \(\vec F=q\vec v\times\vec B\) for a positive charge.",
                    "Point fingers east and curl them north.",
                    "The right-hand rule gives an upward force.",
                ],
                "p2-12.2-magnetic-force-direction-b4",
            ),
            frq(
                r"A proton with speed \(3.0\times10^6\text{ m/s}\) enters perpendicular to a uniform "
                r"\(0.20\text{ T}\) magnetic field. Using \(m_p=1.67\times10^{-27}\text{ kg}\) and "
                r"\(q_p=1.60\times10^{-19}\text{ C}\), determine its circular-path radius and period. Explain "
                "why its speed remains constant.",
                [
                    "Set magnetic force equal to the required radial force.",
                    r"Use \(r=mv/(qB)\), then obtain the period from circumference divided by speed.",
                    "Relate the magnetic-force direction to the instantaneous velocity.",
                ],
                [
                    r"\(r=(1.67\times10^{-27})(3.0\times10^6)/[(1.60\times10^{-19})(0.20)]\approx0.157\text{ m}\).",
                    r"\(T=2\pi r/v=2\pi m/(qB)\approx3.28\times10^{-7}\text{ s}\).",
                    "The magnetic force is always perpendicular to velocity, so it does no work and changes direction but not speed.",
                ],
                "p2-12.4-charged-particle-circle-b4",
                3,
            ),
        ],
        44,
        3,
    ),
    # AP Physics C: E&M
    quiz(
        "AI Topic Exercises — E&M Unit 11 Set 4: Circuits and Transients",
        PHYSICS_EM,
        "Calculus-based circuit practice on Kirchhoff equations, power, and capacitor transients.",
        ["ap-physics-c-em", "unit-11", "circuits", "rc-transients", "set-4"],
        [
            mcq(
                r"A capacitor \(C\) charged to \(V_0\) discharges through a resistor \(R\). At time "
                r"\(t=RC\ln 2\), its stored energy is what fraction of its initial energy?",
                [r"A) \(1/2\)", r"B) \(1/4\)", r"C) \(1/e\)", r"D) \(1/e^2\)"],
                1,
                [
                    r"During discharge, \(V(t)=V_0e^{-t/(RC)}\).",
                    r"At \(t=RC\ln2\), the voltage is \(V_0/2\).",
                    r"Because \(U=\tfrac12CV^2\), the energy is \(1/4\) of its initial value.",
                ],
                "em-11.6-rc-energy-b4",
                3,
            ),
            frq(
                r"A \(10\text{ V}\) battery with negligible internal resistance drives two meshes. The left "
                r"mesh contains a \(2\,\Omega\) resistor, the right mesh a \(4\,\Omega\) resistor, and a shared "
                r"\(3\,\Omega\) resistor lies between them. Define clockwise mesh currents \(I_1\) and \(I_2\), "
                "with the battery only in the left mesh. Write and solve the mesh equations.",
                [
                    r"Across the shared resistor, the left-mesh current is \(I_1-I_2\).",
                    "Apply the loop rule independently to each mesh with a consistent sign convention.",
                    "Solve the resulting simultaneous linear equations.",
                ],
                [
                    r"Left mesh: \(10-2I_1-3(I_1-I_2)=0\), or \(5I_1-3I_2=10\).",
                    r"Right mesh: \(-4I_2-3(I_2-I_1)=0\), or \(-3I_1+7I_2=0\).",
                    r"The solution is \(I_1=35/13\text{ A}\approx2.69\text{ A}\) and "
                    r"\(I_2=15/13\text{ A}\approx1.15\text{ A}\).",
                ],
                "em-11.3-kirchhoff-mesh-b4",
                3,
            ),
            mcq(
                r"An ideal battery remains connected while the plate separation of a parallel-plate capacitor "
                "is doubled. Neglect fringing. Which change occurs?",
                [
                    "A) Capacitance doubles and stored energy doubles.",
                    "B) Capacitance halves and stored energy halves.",
                    "C) Charge is unchanged and stored energy doubles.",
                    "D) Charge doubles and stored energy is unchanged.",
                ],
                1,
                [
                    r"\(C=\epsilon_0A/d\), so doubling \(d\) halves \(C\).",
                    "The connected battery keeps voltage constant.",
                    r"Therefore \(Q=CV\) and \(U=\tfrac12CV^2\) both halve.",
                ],
                "em-10.4-capacitor-battery-b4",
                2,
            ),
            frq(
                r"A capacitor \(C\), initially uncharged, is connected at \(t=0\) in series with resistance "
                r"\(R\) and battery emf \(\mathcal E\). Derive \(q(t)\), state the current \(i(t)\), and find "
                r"the time when \(q=0.90C\mathcal E\).",
                [
                    r"Use the loop equation \(\mathcal E-iR-q/C=0\) with \(i=dq/dt\).",
                    r"Separate variables or quote the first-order charging solution that satisfies \(q(0)=0\).",
                    "Solve the exponential equation for the 90% charging time.",
                ],
                [
                    r"\(q(t)=C\mathcal E(1-e^{-t/(RC)})\).",
                    r"\(i(t)=(\mathcal E/R)e^{-t/(RC)}\).",
                    r"\(0.90=1-e^{-t/(RC)}\) gives \(t=RC\ln10\approx2.303RC\).",
                ],
                "em-11.7-rc-derivation-b4",
                4,
            ),
        ],
        48,
        3,
    ),
    quiz(
        "AI Topic Exercises — E&M Units 12–13 Set 4: Magnetism and Induction",
        PHYSICS_EM,
        "Calculus-based magnetic-field, force, flux, and induction problems with sign reasoning.",
        ["ap-physics-c-em", "unit-12", "unit-13", "magnetism", "induction", "set-4"],
        [
            frq(
                r"A long cylindrical conductor of radius \(a\) carries total current \(I\) uniformly over its "
                r"cross section. Use Ampère's law to derive the magnetic-field magnitude for \(r<a\) and \(r>a\), "
                r"and show that the expressions agree at \(r=a\).",
                [
                    "Choose a circular Amperian loop concentric with the conductor.",
                    r"For \(r<a\), compute enclosed current from the area fraction \(r^2/a^2\).",
                    r"Apply \(\oint\vec B\cdot d\vec\ell=\mu_0I_{\mathrm{enc}}\) in both regions.",
                ],
                [
                    r"For \(r<a\), \(I_{\mathrm{enc}}=I r^2/a^2\), so \(B=\mu_0Ir/(2\pi a^2)\).",
                    r"For \(r>a\), \(I_{\mathrm{enc}}=I\), so \(B=\mu_0I/(2\pi r)\).",
                    r"Both give \(B(a)=\mu_0I/(2\pi a)\), so the field is continuous at the surface.",
                ],
                "em-12.5-ampere-cylinder-b4",
                4,
            ),
            mcq(
                r"A square conducting loop moves at constant velocity entirely within a uniform magnetic field "
                "that is perpendicular to its plane. Which statement is correct?",
                [
                    "A) A clockwise current is induced.",
                    "B) A counterclockwise current is induced.",
                    "C) No current is induced because magnetic flux is constant.",
                    "D) Current is induced only if the loop has zero resistance.",
                ],
                2,
                [
                    "Induced emf depends on the time rate of change of magnetic flux.",
                    "The loop's area, orientation, and field strength remain constant.",
                    "Translation within the uniform field does not change flux, so no current is induced.",
                ],
                "em-13.2-flux-translation-b4",
            ),
            mcq(
                r"A conducting rod of length \(L\) slides right with speed \(v\) on rails in a uniform magnetic "
                "field into the page. Which end of the rod is at higher potential?",
                [
                    "A) The upper end",
                    "B) The lower end",
                    "C) Both ends have equal potential",
                    "D) The answer depends on the rod's resistance",
                ],
                0,
                [
                    r"Positive charges experience \(q\vec v\times\vec B\).",
                    "Right crossed into the page points upward.",
                    r"Positive charge accumulates at the upper end, which is higher by \(BLv\).",
                ],
                "em-13.4-motional-emf-direction-b4",
                3,
            ),
            frq(
                r"A \(0.20\text{ m}\) conducting rod slides without friction on rails through a uniform "
                r"\(0.50\text{ T}\) field. The rails and a \(2.0\,\Omega\) resistor form a circuit. An external "
                r"agent pulls the rod at constant \(3.0\text{ m/s}\). Find the induced emf, current, magnetic "
                "force on the rod, and mechanical power supplied.",
                [
                    r"Use motional emf \(\mathcal E=BLv\).",
                    "Apply Ohm's law, then calculate the force on the current-carrying rod.",
                    "Check energy consistency by comparing mechanical power with resistor heating.",
                ],
                [
                    r"\(\mathcal E=(0.50)(0.20)(3.0)=0.30\text{ V}\), so \(I=0.30/2.0=0.15\text{ A}\).",
                    r"\(F_B=ILB=(0.15)(0.20)(0.50)=0.015\text{ N}\), opposite the motion by Lenz's law.",
                    r"\(P_{\mathrm{ext}}=Fv=0.045\text{ W}\), equal to \(I^2R=(0.15)^2(2.0)=0.045\text{ W}\).",
                ],
                "em-13.5-motional-emf-energy-b4",
                3,
            ),
        ],
        48,
        4,
    ),
    # AP Physics C: Mechanics
    quiz(
        "AI Topic Exercises — Mechanics Unit 3 Set 4: Work, Energy, and Power",
        PHYSICS_MECH,
        "Calculus-based mechanics practice with variable forces, potentials, equilibrium, and power.",
        ["ap-physics-c-mechanics", "unit-3", "work-energy", "power", "set-4"],
        [
            frq(
                r"A particle moves along the \(x\)-axis under force \(F(x)=6x-2x^2\) N, with \(x\) in meters. "
                r"Find the work done from \(x=0\) to \(x=4\text{ m}\). If its mass is \(2.0\text{ kg}\) and it "
                r"starts at \(3.0\text{ m/s}\), find its speed at \(x=4\text{ m}\).",
                [
                    r"Compute work using \(W=\int_0^4F(x)\,dx\).",
                    "Apply the work-energy theorem to the particle.",
                    "Reject any negative root when reporting speed.",
                ],
                [
                    r"\(W=\int_0^4(6x-2x^2)\,dx=[3x^2-\tfrac23x^3]_0^4=16/3\text{ J}\).",
                    r"\(K_i=\tfrac12(2.0)(3.0)^2=9.0\text{ J}\), so \(K_f=43/3\text{ J}\).",
                    r"\(v_f=\sqrt{2K_f/m}=\sqrt{43/3}\approx3.79\text{ m/s}\).",
                ],
                "mech-3.2-variable-force-work-b4",
                3,
            ),
            mcq(
                r"A one-dimensional potential is \(U(x)=ax^4-bx^2\), where \(a,b>0\). Which nonzero "
                "equilibrium positions are stable?",
                [
                    r"A) \(x=\pm\sqrt{b/(2a)}\), both stable",
                    r"B) \(x=\pm\sqrt{2b/a}\), both stable",
                    r"C) \(x=\pm b/(2a)\), both unstable",
                    r"D) There are no nonzero equilibria",
                ],
                0,
                [
                    r"Equilibrium requires \(dU/dx=4ax^3-2bx=0\).",
                    r"The nonzero roots satisfy \(x^2=b/(2a)\).",
                    r"There \(d^2U/dx^2=12ax^2-2b=4b>0\), so both are stable minima.",
                ],
                "mech-3.4-potential-stability-b4",
                4,
            ),
            mcq(
                r"A motor lifts a load vertically at constant speed \(v\). If the motor's useful power is \(P\), "
                "the load's mass is",
                [r"A) \(Pv/g\)", r"B) \(P/(gv)\)", r"C) \(Pg/v\)", r"D) \(gv/P\)"],
                1,
                [
                    r"At constant speed, the lifting force equals the weight \(mg\).",
                    r"Instantaneous mechanical power is \(P=Fv=mgv\).",
                    r"Solving gives \(m=P/(gv)\).",
                ],
                "mech-3.6-power-lifting-b4",
            ),
            frq(
                r"A \(1.0\text{ kg}\) block is released from rest at \(x=0\) on a horizontal track. Its potential "
                r"energy is \(U(x)=8x-2x^2\) J for \(0\le x\le4\text{ m}\). Determine the force as a function "
                r"of \(x\), the location and type of equilibrium, and the block's speed at \(x=3.0\text{ m}\), "
                "assuming it can reach that point.",
                [
                    r"Use \(F_x=-dU/dx\).",
                    "Find equilibrium from zero force and classify it from the shape of the potential.",
                    "Use conservation of mechanical energy between release and the requested location.",
                ],
                [
                    r"\(F_x=-(8-4x)=4x-8\text{ N}\).",
                    r"Equilibrium is at \(x=2\text{ m}\); because \(d^2U/dx^2=-4<0\), it is unstable.",
                    r"\(U(0)=0\) while \(U(3)=6\text{ J}\), so a block released from rest at \(x=0\) cannot reach "
                    r"\(x=3\text{ m}\); the requested real speed does not exist without added energy.",
                ],
                "mech-3.5-energy-reachability-b4",
                4,
            ),
        ],
        48,
        4,
    ),
    quiz(
        "AI Topic Exercises — Mechanics Units 5–6 Set 4: Rotation and Oscillations",
        PHYSICS_MECH,
        "Calculus-based rotational dynamics, angular momentum, and oscillation problems.",
        ["ap-physics-c-mechanics", "unit-5", "unit-6", "rotation", "oscillations", "set-4"],
        [
            mcq(
                r"A uniform disk and a thin hoop have equal mass and radius. The same constant torque acts on "
                "each from rest for the same time. Which object has greater angular speed afterward?",
                [
                    "A) The disk, because its rotational inertia is smaller",
                    "B) The hoop, because its rotational inertia is larger",
                    "C) They have equal angular speeds because the torques are equal",
                    "D) The answer depends only on their masses",
                ],
                0,
                [
                    r"Angular acceleration is \(\alpha=\tau/I\).",
                    r"For equal \(M,R\), \(I_{\mathrm{disk}}=\tfrac12MR^2<I_{\mathrm{hoop}}=MR^2\).",
                    "The disk therefore has greater angular acceleration and angular speed after equal times.",
                ],
                "mech-5.2-rotational-inertia-torque-b4",
            ),
            frq(
                r"A uniform rod of mass \(M\) and length \(L\) pivots without friction about one end. It is "
                "released from rest while horizontal. Derive its angular speed and the speed of its free end "
                "when it reaches the vertical-down position.",
                [
                    "Track the change in gravitational potential energy of the rod's center of mass.",
                    r"Use \(I_{\mathrm{end}}=\tfrac13ML^2\).",
                    "Relate the free-end linear speed to angular speed.",
                ],
                [
                    r"The center of mass falls \(L/2\), so \(MgL/2=\tfrac12I\omega^2\).",
                    r"With \(I=\tfrac13ML^2\), \(\omega=\sqrt{3g/L}\).",
                    r"The free-end speed is \(v=\omega L=\sqrt{3gL}\).",
                ],
                "mech-5.4-physical-pendulum-energy-b4",
                3,
            ),
            mcq(
                r"A person on a frictionless rotating platform pulls two equal masses inward. No external torque "
                "acts. Which statement correctly describes the system?",
                [
                    "A) Angular speed decreases and rotational kinetic energy decreases.",
                    "B) Angular speed increases and rotational kinetic energy remains constant.",
                    "C) Angular speed increases and rotational kinetic energy increases.",
                    "D) Angular momentum decreases while energy increases.",
                ],
                2,
                [
                    "No external torque means angular momentum is conserved.",
                    "Pulling masses inward decreases rotational inertia, so angular speed increases.",
                    r"Since \(K=L^2/(2I)\), decreasing \(I\) at fixed \(L\) increases kinetic energy; internal work supplies it.",
                ],
                "mech-5.7-angular-momentum-energy-b4",
                3,
            ),
            frq(
                r"A physical pendulum has moment of inertia \(I\) about its pivot, mass \(M\), and center of mass "
                r"a distance \(d\) below the pivot at equilibrium. Derive its small-angle equation of motion and "
                r"period. Then state what happens to the period if \(I\) is quadrupled while \(M\) and \(d\) remain fixed.",
                [
                    r"Write rotational dynamics using the gravitational torque \(\tau=-Mgd\sin\theta\).",
                    r"For small angles, use \(\sin\theta\approx\theta\).",
                    "Compare the resulting differential equation with simple harmonic motion.",
                ],
                [
                    r"\(I\ddot\theta=-Mgd\sin\theta\approx-Mgd\,\theta\), so "
                    r"\(\ddot\theta+(Mgd/I)\theta=0\).",
                    r"\(\omega=\sqrt{Mgd/I}\) and \(T=2\pi\sqrt{I/(Mgd)}\).",
                    r"Quadrupling \(I\) doubles the period.",
                ],
                "mech-6.3-physical-pendulum-b4",
                4,
            ),
        ],
        48,
        4,
    ),
    # AP Statistics
    quiz(
        "AI Topic Exercises — AP Statistics Unit 3 Set 4: Collecting Data",
        STATS,
        "CED-aligned practice on sampling, experimental design, bias, blocking, and scope of inference.",
        ["ap-statistics", "unit-3", "collecting-data", "experimental-design", "set-4"],
        [
            mcq(
                "A city posts an online poll asking residents whether bus service should be expanded. Of the "
                "people who choose to respond, 82% support expansion. What is the primary problem with using "
                "82% to estimate support among all city residents?",
                [
                    "A) Undercoverage caused only by residents without bus passes",
                    "B) Voluntary-response bias because people with strong opinions are more likely to participate",
                    "C) Nonresponse bias because selected residents refused to answer",
                    "D) Response bias caused by random assignment",
                ],
                1,
                [
                    "Identify how participants entered the sample.",
                    "No random sample was selected; residents chose whether to participate.",
                    "Self-selection can overrepresent people with strong views, creating voluntary-response bias.",
                ],
                "stats-3.3-voluntary-response-b4",
                1,
            ),
            frq(
                "A school has 600 ninth graders and 400 tenth graders. A researcher wants an SRS of 100 students "
                "but also wants each grade represented in proportion to enrollment. Describe a valid selection "
                "procedure and explain one advantage over a single SRS of 100 from the whole school.",
                [
                    "Treat grade level as the stratification variable.",
                    "Use the enrollment proportions to determine each stratum's sample size.",
                    "Describe random selection within each grade, not convenience selection.",
                ],
                [
                    "Label the ninth graders and randomly select 60 distinct labels; independently label the tenth graders and randomly select 40.",
                    "Combining those selections gives 100 students with the population's 60%-40% grade composition.",
                    "If opinions differ by grade, stratification can reduce sampling variability and guarantees representation of both grades.",
                ],
                "stats-3.4-stratified-sample-b4",
                2,
            ),
            mcq(
                "In an experiment comparing two study apps, students are first grouped by their prior test-score "
                "quartile. Within every quartile, students are randomly assigned to one of the apps. Why is "
                "quartile used as a block?",
                [
                    "A) To eliminate the need for a control group",
                    "B) To create a census of each score group",
                    "C) To control variation associated with prior achievement",
                    "D) To make the students blind to treatment",
                ],
                2,
                [
                    "A block groups similar experimental units before random assignment.",
                    "Prior score is plausibly related to the response.",
                    "Comparing apps within score quartiles reduces variation due to prior achievement.",
                ],
                "stats-3.7-blocking-b4",
            ),
            frq(
                "A company randomly assigns 120 volunteers to receive either a caffeine drink or a visually "
                "identical placebo, then measures reaction time. Neither participants nor evaluators know the "
                "assignment. State the roles of random assignment, placebo, and double blinding. Also state the "
                "population to which a causal conclusion can safely be generalized.",
                [
                    "Separate the purpose of random assignment from the purpose of random sampling.",
                    "Explain how a placebo and blinding address expectation and evaluator effects.",
                    "Use the volunteer recruitment method when setting the scope of generalization.",
                ],
                [
                    "Random assignment tends to balance lurking variables and permits a cause-and-effect conclusion for these volunteers.",
                    "The placebo controls for expectations, and double blinding limits participant and evaluator bias.",
                    "Because the participants were volunteers rather than a random sample, broad generalization is not justified; the safest population is people similar to these volunteers.",
                ],
                "stats-3.8-scope-inference-b4",
                3,
            ),
        ],
        43,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Statistics Unit 7 Set 4: Inference for Means",
        STATS,
        "Original one- and two-sample t-inference problems emphasizing conditions and interpretation.",
        ["ap-statistics", "unit-7", "inference", "means", "t-distribution", "set-4"],
        [
            frq(
                r"An SRS of \(16\) rechargeable batteries has mean life \(9.8\) hours and standard deviation "
                r"\(1.2\) hours. The battery-life distribution shows no strong skew or outliers. Construct a 95% "
                r"confidence interval for the population mean using \(t^*=2.131\), and interpret it.",
                [
                    "Check random sampling, independence, and the small-sample shape condition.",
                    r"Use \(\bar x\pm t^*s/\sqrt n\) because the population standard deviation is unknown.",
                    "Interpret the interval for the population mean, not for individual batteries.",
                ],
                [
                    r"The SRS supports randomness; the population should contain at least 160 batteries, and the stated shape is acceptable for \(n=16\).",
                    r"\(\mathrm{SE}=1.2/\sqrt{16}=0.30\), so the interval is "
                    r"\(9.8\pm2.131(0.30)=(9.161,10.439)\) hours.",
                    "We are 95% confident that the population mean battery life is between about 9.16 and 10.44 hours.",
                ],
                "stats-7.2-one-mean-ci-b4",
                2,
            ),
            mcq(
                "A paired t procedure is most appropriate for which study?",
                [
                    "A) Compare mean heights from independent SRSs of adults in two cities.",
                    "B) Compare each runner's pulse immediately before and after a training program.",
                    "C) Compare proportions of defective parts from two factories.",
                    "D) Compare three independent teaching methods.",
                ],
                1,
                [
                    "Paired data arise when observations have a natural one-to-one link.",
                    "Before and after measurements on the same runner form a matched pair.",
                    "The analysis uses the mean of within-runner differences.",
                ],
                "stats-7.3-paired-design-b4",
            ),
            mcq(
                r"A one-sample test of \(H_0:\mu=50\) versus \(H_a:\mu>50\) gives \(t=2.20\) with \(14\) "
                r"degrees of freedom. If the sample standard deviation were smaller while \(\bar x\) and \(n\) "
                "stayed fixed, what would happen?",
                [
                    "A) The t statistic would decrease and the p-value would increase.",
                    "B) The t statistic would increase and the p-value would decrease.",
                    "C) Both the t statistic and p-value would increase.",
                    "D) Neither would change.",
                ],
                1,
                [
                    r"The statistic is \(t=(\bar x-\mu_0)/(s/\sqrt n)\).",
                    r"A smaller \(s\) makes the standard error smaller and the positive t statistic larger.",
                    "For a fixed right-tailed t distribution, a larger statistic has a smaller p-value.",
                ],
                "stats-7.4-t-statistic-b4",
                3,
            ),
            frq(
                r"Independent random samples give \(\bar x_A=72,\ s_A=8,\ n_A=25\) and "
                r"\(\bar x_B=67,\ s_B=6,\ n_B=36\). Test \(H_0:\mu_A-\mu_B=0\) against a two-sided alternative. "
                r"Compute the unpooled standard error and test statistic. State the conclusion if \(p=0.021\).",
                [
                    "Use the two-sample standard error without pooling population variances.",
                    "Standardize the observed difference around the null difference of zero.",
                    "Compare the supplied p-value with a stated significance level.",
                ],
                [
                    r"\(\mathrm{SE}=\sqrt{8^2/25+6^2/36}=\sqrt{3.56}\approx1.887\).",
                    r"\(t=[(72-67)-0]/1.887\approx2.65\).",
                    r"At \(\alpha=0.05\), \(p=0.021<0.05\), so reject \(H_0\); there is convincing evidence that the population means differ.",
                ],
                "stats-7.6-two-mean-test-b4",
                3,
            ),
        ],
        45,
        3,
    ),
    # AP Calculus AB/BC
    quiz(
        "AI Topic Exercises — AP Calculus Unit 7 Set 4: Differential Equations",
        CALC,
        "CED-aligned slope fields, separable equations, Euler approximation, and logistic models.",
        ["ap-calculus", "unit-7", "differential-equations", "set-4"],
        [
            mcq(
                r"For the differential equation \(\frac{dy}{dx}=x-y\), what is the slope of the solution curve "
                r"at the point \((2,-1)\)?",
                [r"A) \(-3\)", r"B) \(-1\)", r"C) \(1\)", r"D) \(3\)"],
                3,
                [
                    "A differential equation gives the local slope directly.",
                    r"Substitute \(x=2\) and \(y=-1\).",
                    r"\(dy/dx=2-(-1)=3\).",
                ],
                "calc-7.1-slope-field-b4",
                1,
            ),
            frq(
                r"Solve \(\frac{dy}{dx}=2xy\) subject to \(y(0)=3\). Then find the value of \(y(1)\).",
                [
                    r"Separate the \(y\) and \(x\) variables.",
                    "Integrate both sides and include an arbitrary constant.",
                    "Use the initial condition before evaluating the requested value.",
                ],
                [
                    r"\(\frac{dy}{y}=2x\,dx\), so \(\ln|y|=x^2+C\).",
                    r"Thus \(y=Ae^{x^2}\); \(y(0)=3\) gives \(A=3\).",
                    r"The solution is \(y=3e^{x^2}\), and \(y(1)=3e\).",
                ],
                "calc-7.6-separation-b4",
                2,
            ),
            mcq(
                r"Euler's method with step size \(0.5\) is used for \(\frac{dy}{dx}=x+y\), starting at "
                r"\((0,1)\). What approximation does it give for \(y(1)\)?",
                [r"A) \(1.75\)", r"B) \(2.00\)", r"C) \(2.50\)", r"D) \(2.75\)"],
                2,
                [
                    r"From \((0,1)\), slope \(=1\), so \(y(0.5)\approx1+0.5(1)=1.5\).",
                    r"At \((0.5,1.5)\), slope \(=2.0\).",
                    r"Thus \(y(1)\approx1.5+0.5(2.0)=2.5\).",
                ],
                "calc-7.5-euler-b4",
                2,
            ),
            frq(
                r"A population \(P\) satisfies \(\frac{dP}{dt}=\frac{1}{500}P(1000-P)\), with \(P(0)=100\). "
                "Find the population's initial growth rate, the population at which growth is fastest, and "
                r"whether the graph is concave up or concave down at \(P=100\).",
                [
                    "Substitute the initial population into the differential equation.",
                    r"For a logistic model, maximize the quadratic \(P(K-P)\).",
                    r"Determine the sign of \(d^2P/dt^2=f'(P)\,dP/dt\).",
                ],
                [
                    r"At \(P=100\), \(dP/dt=(1/500)(100)(900)=180\) population units per time.",
                    r"Growth is fastest at half the carrying capacity, \(P=500\).",
                    r"Here \(f'(P)=(1000-2P)/500>0\) and \(dP/dt>0\), so the graph is concave up at \(P=100\).",
                ],
                "calc-7.8-logistic-b4",
                3,
            ),
        ],
        43,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Calculus Units 9–10 Set 4: Polar Curves and Series",
        CALC,
        "BC-focused practice with polar area, parametric motion, Taylor polynomials, and convergence.",
        ["ap-calculus-bc", "unit-9", "unit-10", "polar", "series", "set-4"],
        [
            frq(
                r"The polar curve \(r=2\cos\theta\) is traced for \(-\pi/2\le\theta\le\pi/2\). Find the enclosed "
                "area and identify the Cartesian curve.",
                [
                    r"Use polar area \(A=\tfrac12\int r^2\,d\theta\).",
                    r"Apply \(\cos^2\theta=(1+\cos2\theta)/2\) to evaluate the integral.",
                    r"Convert the equation using \(r^2=x^2+y^2\) and \(r\cos\theta=x\).",
                ],
                [
                    r"\(A=\tfrac12\int_{-\pi/2}^{\pi/2}4\cos^2\theta\,d\theta=2(\pi/2)=\pi\).",
                    r"\(r=2\cos\theta\) implies \(r^2=2r\cos\theta\), so \(x^2+y^2=2x\).",
                    r"This is \((x-1)^2+y^2=1\), a circle of radius \(1\), consistent with area \(\pi\).",
                ],
                "calc-9.8-polar-area-b4",
                3,
            ),
            mcq(
                r"A particle has \(x(t)=t^2-1\) and \(y(t)=t^3-3t\). What is \(\frac{dy}{dx}\) at \(t=2\)?",
                [r"A) \(3/4\)", r"B) \(2\)", r"C) \(9/4\)", r"D) \(4\)"],
                2,
                [
                    r"For parametric equations, \(dy/dx=(dy/dt)/(dx/dt)\).",
                    r"Here \(dy/dt=3t^2-3\) and \(dx/dt=2t\).",
                    r"At \(t=2\), the ratio is \(9/4\).",
                ],
                "calc-9.2-parametric-slope-b4",
                2,
            ),
            mcq(
                r"Which series converges conditionally?",
                [
                    r"A) \(\sum_{n=1}^{\infty}\frac{1}{n^2}\)",
                    r"B) \(\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\)",
                    r"C) \(\sum_{n=1}^{\infty}\frac{1}{n}\)",
                    r"D) \(\sum_{n=1}^{\infty}\frac{(-1)^n}{2^n}\)",
                ],
                1,
                [
                    "Conditional convergence requires convergence but not absolute convergence.",
                    "The alternating harmonic series converges by the alternating-series test.",
                    "Its absolute-value series is the divergent harmonic series.",
                ],
                "calc-10.7-conditional-convergence-b4",
                3,
            ),
            frq(
                r"Use the degree-3 Maclaurin polynomial for \(f(x)=\ln(1+x)\) to approximate \(\ln(1.2)\). "
                "Then bound the error using the alternating-series error bound.",
                [
                    r"Use \(\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots\) for \(|x|<1\).",
                    r"Substitute \(x=0.2\) and retain terms through degree 3.",
                    "For an alternating series with decreasing terms, the error is at most the first omitted term.",
                ],
                [
                    r"\(P_3(0.2)=0.2-0.2^2/2+0.2^3/3=0.182666\ldots\).",
                    r"Thus \(\ln(1.2)\approx0.182667\).",
                    r"The error is at most \(0.2^4/4=0.0004\).",
                ],
                "calc-10.11-taylor-error-b4",
                3,
            ),
        ],
        46,
        3,
    ),
    # AP Chemistry
    quiz(
        "AI Topic Exercises — AP Chemistry Unit 2 Set 4: Molecular Structure and Forces",
        CHEM,
        "CED-aligned bonding, geometry, polarity, resonance, and intermolecular-force practice.",
        ["ap-chemistry", "unit-2", "molecular-structure", "intermolecular-forces", "set-4"],
        [
            mcq(
                r"Which molecule has polar bonds but a net molecular dipole of zero?",
                [r"A) \(\mathrm{NH_3}\)", r"B) \(\mathrm{H_2O}\)", r"C) \(\mathrm{CO_2}\)", r"D) \(\mathrm{SO_2}\)"],
                2,
                [
                    "Determine both bond polarity and molecular geometry.",
                    r"Each \(\mathrm{C{=}O}\) bond in \(\mathrm{CO_2}\) is polar.",
                    "The molecule is linear, so equal bond dipoles point oppositely and cancel.",
                ],
                "chem-2.6-molecular-polarity-b4",
            ),
            frq(
                r"For the nitrate ion, \(\mathrm{NO_3^-}\), draw or describe valid resonance structures, assign "
                "formal charges in one structure, and explain why all three N–O bonds have the same measured length.",
                [
                    "Count total valence electrons, including the extra electron for the negative charge.",
                    "Construct an octet-satisfying structure and calculate formal charges.",
                    "Use resonance to connect equivalent Lewis structures to observed bond lengths.",
                ],
                [
                    r"There are three equivalent structures, each with one \(\mathrm{N{=}O}\) bond and two \(\mathrm{N{-}O^-}\) bonds.",
                    r"In any one structure, N has formal charge \(+1\), each singly bonded O has \(-1\), and the doubly bonded O has \(0\), totaling \(-1\).",
                    r"The pi bonding is delocalized across all three N–O positions, so each bond has the same average bond order \(4/3\) and the same intermediate length.",
                ],
                "chem-2.5-resonance-nitrate-b4",
                3,
            ),
            mcq(
                r"Which substance is expected to have the highest normal boiling point?",
                [r"A) \(\mathrm{CH_4}\)", r"B) \(\mathrm{NH_3}\)", r"C) \(\mathrm{H_2S}\)", r"D) \(\mathrm{PH_3}\)"],
                1,
                [
                    "Compare the strongest intermolecular force available in each pure substance.",
                    r"\(\mathrm{NH_3}\) forms hydrogen bonds because H is bonded to N.",
                    "The others lack hydrogen bonding; their dispersion and dipole forces are weaker at these sizes.",
                ],
                "chem-3.1-intermolecular-forces-b4",
                2,
            ),
            frq(
                r"The measured bond angle in \(\mathrm{NH_3}\) is about \(107^\circ\), whereas the ideal "
                r"tetrahedral angle is \(109.5^\circ\). Use electron-domain geometry and repulsion to explain "
                r"the shape, angle difference, and molecular polarity of \(\mathrm{NH_3}\).",
                [
                    "Count bonding and lone-pair electron domains around nitrogen.",
                    "Distinguish electron-domain geometry from molecular geometry.",
                    "Compare lone-pair–bonding-pair repulsion with bonding-pair–bonding-pair repulsion.",
                ],
                [
                    "Nitrogen has four electron domains, giving tetrahedral electron-domain geometry; one is a lone pair, so the molecular shape is trigonal pyramidal.",
                    r"The lone pair repels bonding pairs more strongly and compresses the H–N–H angles below \(109.5^\circ\).",
                    "The asymmetric trigonal-pyramidal geometry prevents the N–H bond dipoles from canceling, so the molecule is polar.",
                ],
                "chem-2.7-vsepr-ammonia-b4",
                2,
            ),
        ],
        43,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Chemistry Unit 6 Set 4: Thermochemistry",
        CHEM,
        "Original calorimetry, enthalpy, Hess's law, and bond-energy problems.",
        ["ap-chemistry", "unit-6", "thermochemistry", "enthalpy", "set-4"],
        [
            frq(
                r"A \(50.0\text{ g}\) metal sample at \(95.0^\circ\text{C}\) is placed in \(100.0\text{ g}\) of "
                r"water at \(22.0^\circ\text{C}\). The final temperature is \(25.0^\circ\text{C}\). Assuming no "
                r"heat loss and \(c_{\mathrm{water}}=4.184\text{ J g}^{-1}\text{K}^{-1}\), find the metal's "
                "specific heat.",
                [
                    "Set heat gained by water equal in magnitude to heat lost by the metal.",
                    r"Use \(q=mc\Delta T\) with a consistent sign convention.",
                    "Use the metal's 70.0 K temperature decrease in the denominator.",
                ],
                [
                    r"\(q_{\mathrm{water}}=(100.0)(4.184)(25.0-22.0)=1255.2\text{ J}\).",
                    r"\(1255.2=(50.0)c_{\mathrm{metal}}(95.0-25.0)\).",
                    r"\(c_{\mathrm{metal}}=0.359\text{ J g}^{-1}\text{K}^{-1}\).",
                ],
                "chem-6.2-coffee-cup-calorimetry-b4",
                2,
            ),
            mcq(
                r"For an exothermic reaction at constant pressure, which statement is correct?",
                [
                    r"A) \(\Delta H>0\) and the surroundings cool.",
                    r"B) \(\Delta H<0\) and heat flows from the system to the surroundings.",
                    r"C) \(\Delta H=0\) because energy is conserved.",
                    r"D) \(\Delta H<0\) and heat flows into the system.",
                ],
                1,
                [
                    "Exothermic describes heat transfer out of the reacting system.",
                    "At constant pressure, system heat equals enthalpy change.",
                    r"Heat leaving the system gives \(q_p=\Delta H<0\) and warms the surroundings.",
                ],
                "chem-6.1-exothermic-sign-b4",
                1,
            ),
            mcq(
                r"Given \(\mathrm{C(s)+O_2(g)\rightarrow CO_2(g)}\), \(\Delta H=-394\text{ kJ/mol}\), and "
                r"\(\mathrm{CO(g)+\tfrac12O_2(g)\rightarrow CO_2(g)}\), \(\Delta H=-283\text{ kJ/mol}\), what is "
                r"\(\Delta H\) for \(\mathrm{C(s)+\tfrac12O_2(g)\rightarrow CO(g)}\)?",
                [
                    r"A) \(-677\text{ kJ/mol}\)",
                    r"B) \(-111\text{ kJ/mol}\)",
                    r"C) \(+111\text{ kJ/mol}\)",
                    r"D) \(+677\text{ kJ/mol}\)",
                ],
                1,
                [
                    "Reverse the CO combustion reaction so CO appears as a product.",
                    "Reversing a reaction changes the sign of its enthalpy.",
                    r"Add: \(-394+283=-111\text{ kJ/mol}\).",
                ],
                "chem-6.3-hess-law-b4",
                2,
            ),
            frq(
                r"Estimate \(\Delta H\) for \(\mathrm{H_2(g)+Cl_2(g)\rightarrow2HCl(g)}\) using bond energies "
                r"\(D(\mathrm{H-H})=436\), \(D(\mathrm{Cl-Cl})=243\), and \(D(\mathrm{H-Cl})=431\text{ kJ/mol}\). "
                "Explain the sign.",
                [
                    "List bonds broken in the reactants and bonds formed in the products.",
                    r"Use \(\Delta H\approx\sum D_{\mathrm{broken}}-\sum D_{\mathrm{formed}}\).",
                    "Connect a negative result to relative bond-energy totals.",
                ],
                [
                    r"Bonds broken require \(436+243=679\text{ kJ/mol}\).",
                    r"Two H–Cl bonds release \(2(431)=862\text{ kJ/mol}\), so \(\Delta H\approx679-862=-183\text{ kJ/mol}\).",
                    "The reaction is exothermic because forming the product bonds releases more energy than breaking the reactant bonds requires.",
                ],
                "chem-6.4-bond-enthalpy-b4",
                2,
            ),
        ],
        44,
        2,
    ),
    # AP Biology
    quiz(
        "AI Topic Exercises — AP Biology Unit 4 Set 4: Cell Communication and Cell Cycle",
        BIO,
        "CED-aligned signal transduction, feedback, checkpoints, and experimental-design practice.",
        ["ap-biology", "unit-4", "cell-communication", "cell-cycle", "set-4"],
        [
            mcq(
                "A steroid hormone can often bind an intracellular receptor, whereas a peptide hormone usually "
                "binds a membrane receptor. What best explains this difference?",
                [
                    "A) Steroid hormones are nonpolar enough to cross the phospholipid bilayer.",
                    "B) Peptide hormones have no specific three-dimensional shape.",
                    "C) Steroid receptors are always enzymes in the plasma membrane.",
                    "D) Peptide hormones diffuse through membrane cholesterol channels.",
                ],
                0,
                [
                    "The membrane's hydrophobic interior restricts large polar molecules.",
                    "Steroid hormones are lipid-soluble and can diffuse through the bilayer.",
                    "Peptides are generally polar and signal through receptors exposed at the cell surface.",
                ],
                "bio-4.1-receptor-location-b4",
            ),
            frq(
                "A mutation makes a G protein remain active after a ligand leaves its receptor. Predict the "
                "effect on the downstream second-messenger concentration and cellular response. Propose one "
                "measurement that would distinguish mutant cells from wild-type cells after ligand removal.",
                [
                    "Locate the mutation within reception, transduction, or response.",
                    "Track how persistent G-protein activity affects downstream enzymes and second messengers.",
                    "Specify a measurable dependent variable and a post-ligand comparison.",
                ],
                [
                    "The mutation affects transduction by preventing normal G-protein shutoff.",
                    "Second-messenger production and the downstream response should remain elevated after ligand removal compared with wild type.",
                    "Remove ligand from both groups and measure cAMP over time; mutant cells should show a slower decline or persistently higher cAMP.",
                ],
                "bio-4.2-g-protein-mutation-b4",
                3,
            ),
            mcq(
                "Which event most directly activates the spindle-assembly checkpoint during mitosis?",
                [
                    "A) DNA has not been replicated before S phase.",
                    "B) A chromosome's kinetochore is not properly attached to spindle microtubules.",
                    "C) Growth factors are absent during G1.",
                    "D) Homologous chromosomes fail to pair during prophase I.",
                ],
                1,
                [
                    "The spindle checkpoint operates during mitosis before anaphase.",
                    "It verifies attachment of kinetochores to opposite spindle poles.",
                    "An unattached kinetochore delays chromatid separation.",
                ],
                "bio-4.6-spindle-checkpoint-b4",
            ),
            frq(
                "A drug inhibits cyclin degradation after metaphase. Predict its effect on cyclin-dependent "
                "kinase activity and progression through mitosis. Explain why this could reduce cell proliferation.",
                [
                    "Recall that cyclin abundance regulates CDK activity.",
                    "Connect cyclin destruction to exit from a mitotic phase.",
                    "Link cell-cycle arrest to population growth.",
                ],
                [
                    "Cyclin would remain abundant, so its associated CDK would stay abnormally active.",
                    "Cells would fail to complete the normal transition out of mitosis, potentially arresting near metaphase/anaphase or mitotic exit.",
                    "Arrested cells do not complete cytokinesis to produce daughter cells, reducing the rate of proliferation.",
                ],
                "bio-4.7-cyclin-degradation-b4",
                3,
            ),
        ],
        43,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Biology Unit 7 Set 4: Natural Selection and Population Genetics",
        BIO,
        "Original selection, Hardy–Weinberg, drift, phylogeny, and evidence-based evolution problems.",
        ["ap-biology", "unit-7", "natural-selection", "population-genetics", "set-4"],
        [
            frq(
                r"In a large population at Hardy–Weinberg equilibrium, \(9\%\) of individuals express a recessive "
                r"phenotype controlled by allele \(a\). Calculate \(q\), \(p\), and the expected heterozygote "
                "frequency. State two assumptions required by the model.",
                [
                    r"Set the recessive phenotype frequency equal to \(q^2\).",
                    r"Use \(p+q=1\), then calculate \(2pq\).",
                    "Separate model assumptions from conclusions.",
                ],
                [
                    r"\(q=\sqrt{0.09}=0.30\), so \(p=0.70\).",
                    r"The expected heterozygote frequency is \(2pq=2(0.70)(0.30)=0.42\).",
                    "Any two of random mating, no selection, no mutation, no migration, and a very large population are required.",
                ],
                "bio-7.4-hardy-weinberg-b4",
                2,
            ),
            mcq(
                "After a hurricane, five insects randomly survive on an island and rebuild the population. Allele "
                "frequencies differ sharply from those before the hurricane. Which mechanism best explains the change?",
                [
                    "A) Directional selection",
                    "B) Bottleneck genetic drift",
                    "C) Gene flow",
                    "D) Assortative mating",
                ],
                1,
                [
                    "The survivors were few and selected by chance rather than by phenotype.",
                    "A drastic random reduction in population size is a bottleneck.",
                    "Sampling error in survivors can strongly shift allele frequencies through genetic drift.",
                ],
                "bio-7.3-bottleneck-drift-b4",
            ),
            mcq(
                "Two distantly related desert plants independently evolve thick, water-storing stems. This similarity is best described as",
                [
                    "A) a homologous trait produced by common ancestry",
                    "B) an analogous trait produced by convergent evolution",
                    "C) genetic drift in identical populations",
                    "D) artificial selection",
                ],
                1,
                [
                    "The plants are distantly related, so the trait was not inherited from a recent common ancestor.",
                    "Similar environmental pressures can favor similar functional solutions.",
                    "Independent evolution of similar traits is convergence and produces analogous structures.",
                ],
                "bio-7.8-convergent-evolution-b4",
                2,
            ),
            frq(
                "A bacterial population is exposed to an antibiotic. Before exposure, one cell in a million carries "
                "a resistance allele. Explain how resistance becomes common over generations and why saying that "
                "\"the antibiotic caused individual bacteria to adapt\" is inaccurate.",
                [
                    "Identify the source and timing of heritable variation.",
                    "Compare reproductive success of resistant and susceptible cells under antibiotic exposure.",
                    "Distinguish changes in individuals from changes in population allele frequencies.",
                ],
                [
                    "The resistance allele arose before exposure through mutation and was inherited by descendants.",
                    "The antibiotic kills or inhibits susceptible cells, while resistant cells survive and reproduce more successfully.",
                    "Individuals do not evolve a needed allele in response; natural selection increases the preexisting resistance allele's frequency in the population.",
                ],
                "bio-7.2-antibiotic-selection-b4",
                3,
            ),
        ],
        43,
        3,
    ),
    # AP Environmental Science
    quiz(
        "AI Topic Exercises — AP Environmental Science Unit 5 Set 4: Land and Water Use",
        APES,
        "CED-aligned practice on agriculture, forestry, fisheries, irrigation, and sustainable resource management.",
        ["ap-environmental-science", "unit-5", "land-use", "water-use", "set-4"],
        [
            mcq(
                "Which agricultural practice most directly reduces soil erosion on a steep cultivated slope?",
                [
                    "A) Flood irrigation",
                    "B) Contour plowing",
                    "C) Removing windbreaks",
                    "D) Increasing tillage frequency",
                ],
                1,
                [
                    "Erosion accelerates when runoff moves unobstructed down a slope.",
                    "Contour plowing follows elevation contours and creates ridges across the downhill flow.",
                    "The ridges slow runoff and increase infiltration, reducing soil loss.",
                ],
                "apes-5.4-contour-plowing-b4",
                1,
            ),
            frq(
                r"A farm applies \(8{,}000\text{ m}^3\) of irrigation water each week. Flood irrigation delivers "
                r"45% of applied water to crops, whereas a proposed drip system delivers 85%. Calculate the weekly "
                "water reaching crops now and the volume the drip system would need to deliver the same amount. "
                "Identify one additional environmental benefit of drip irrigation.",
                [
                    "Multiply applied water by efficiency to find useful crop water.",
                    "Set the useful amount equal to 85% of the new applied volume.",
                    "Choose an environmental effect causally linked to lower or more targeted water use.",
                ],
                [
                    r"Flood irrigation delivers \((0.45)(8{,}000)=3{,}600\text{ m}^3\) to crops each week.",
                    r"The drip system needs \(3{,}600/0.85\approx4{,}235\text{ m}^3\) per week.",
                    "Targeted delivery can reduce waterlogging and salinization, reduce pumping energy, or leave more water in aquifers and streams.",
                ],
                "apes-5.5-irrigation-efficiency-b4",
                2,
            ),
            mcq(
                "A marine fishery is most likely being harvested above its maximum sustainable yield when",
                [
                    "A) catch per unit effort falls despite increased fishing effort",
                    "B) older fish become a larger fraction of the catch",
                    "C) the breeding population grows each year",
                    "D) fishing effort declines while catch stays constant",
                ],
                0,
                [
                    "Catch per unit effort is an indicator of stock abundance.",
                    "Needing more effort for less catch suggests the fish population is declining.",
                    "That pattern is consistent with harvest exceeding the population's replacement rate.",
                ],
                "apes-5.8-overfishing-indicator-b4",
                2,
            ),
            frq(
                "A clear-cut forest and a selectively logged forest have similar climate and soil before harvest. "
                "Predict which site will have greater stream sediment after heavy rain and explain why. Propose one "
                "controlled field measurement that could test the prediction.",
                [
                    "Compare vegetation cover and root structure after each harvest method.",
                    "Trace their effects on interception, infiltration, runoff, and erosion.",
                    "Specify a common response variable measured after comparable rainfall.",
                ],
                [
                    "The clear-cut site should produce more stream sediment.",
                    "Removing most canopy and roots reduces interception and soil stabilization, increasing surface runoff and erosion.",
                    "Install identical turbidity sensors or collect equal-volume stream samples downstream of paired watersheds after the same storms and compare suspended-sediment concentration.",
                ],
                "apes-5.2-forestry-erosion-b4",
                3,
            ),
        ],
        42,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Environmental Science Unit 6 Set 4: Energy Resources",
        APES,
        "Original quantitative and conceptual practice on fossil fuels, nuclear power, renewables, and efficiency.",
        ["ap-environmental-science", "unit-6", "energy-resources", "efficiency", "set-4"],
        [
            frq(
                r"A building uses \(2.4\times10^5\text{ kWh}\) of electricity annually. An efficiency retrofit "
                r"reduces use by 18%. Electricity costs \(\$0.14\) per kWh and the grid emits "
                r"\(0.40\text{ kg CO}_2\) per kWh. Calculate annual energy, cost, and emissions savings.",
                [
                    "Apply the 18% reduction to the original annual consumption.",
                    "Multiply saved kilowatt-hours by the unit price.",
                    "Use the grid emission factor for avoided carbon dioxide.",
                ],
                [
                    r"Energy saved is \((0.18)(2.4\times10^5)=4.32\times10^4\text{ kWh/yr}\).",
                    r"Cost saved is \((4.32\times10^4)(\$0.14)=\$6{,}048\) per year.",
                    r"Emissions avoided are \((4.32\times10^4)(0.40)=1.728\times10^4\text{ kg CO}_2\) per year.",
                ],
                "apes-6.11-energy-efficiency-b4",
                2,
            ),
            mcq(
                "Compared with a coal-fired power plant, a commercial nuclear fission plant generally",
                [
                    "A) emits more carbon dioxide during routine electricity generation",
                    "B) produces no hazardous waste of any kind",
                    "C) emits less operational carbon dioxide but produces long-lived radioactive waste",
                    "D) relies on a renewable fuel that regenerates annually",
                ],
                2,
                [
                    "Separate operational air emissions from waste and fuel concerns.",
                    "Fission does not combust carbon during routine generation.",
                    "Spent fuel remains radioactive and requires secure long-term management.",
                ],
                "apes-6.6-nuclear-tradeoffs-b4",
            ),
            mcq(
                "Which location is generally best suited for a utility-scale wind farm?",
                [
                    "A) A sheltered valley with highly variable weak winds",
                    "B) An exposed ridge with persistent strong winds near transmission lines",
                    "C) A dense forest far from electric demand and transmission",
                    "D) A region where air is consistently still during peak demand",
                ],
                1,
                [
                    "Wind generation depends strongly on sustained wind speed.",
                    "Exposed ridges often have less obstructed and more persistent wind.",
                    "Nearby transmission reduces the infrastructure needed to connect generation to users.",
                ],
                "apes-6.9-wind-siting-b4",
                1,
            ),
            frq(
                "A community is comparing a large reservoir hydroelectric project with distributed rooftop solar. "
                "Describe one environmental cost and one operational advantage of each option. Then identify one "
                "site-specific datum needed before choosing.",
                [
                    "Evaluate land, habitat, flow, material, and intermittency effects.",
                    "Distinguish environmental impacts from operational properties.",
                    "Name a measurable local variable that would change the comparison.",
                ],
                [
                    "Hydropower can inundate habitat and block fish migration, but a reservoir can provide dispatchable generation and energy storage.",
                    "Rooftop solar has intermittent output and material/end-of-life impacts, but uses existing roof area and has no direct operational emissions.",
                    "Useful site data include seasonal river flow and habitat, local solar irradiance, available roof area, or hourly electricity demand.",
                ],
                "apes-6.8-renewable-comparison-b4",
                3,
            ),
        ],
        43,
        3,
    ),
    # AP Computer Science A
    quiz(
        "AI Topic Exercises — AP Computer Science A Units 3–4 Set 4: Selection and Iteration",
        CSA,
        "CED-aligned Java reasoning with boolean expressions, nested selection, loops, and boundary cases.",
        ["ap-computer-science-a", "unit-3", "unit-4", "selection", "iteration", "set-4"],
        [
            mcq(
                "Assume `x` and `y` are integers. Which expression is equivalent to "
                "`!(x < 5 || y >= 10)`?",
                [
                    "A) `x >= 5 && y < 10`",
                    "B) `x >= 5 || y < 10`",
                    "C) `x < 5 && y >= 10`",
                    "D) `x > 5 && y <= 10`",
                ],
                0,
                [
                    "Apply De Morgan's law to change negated OR into AND.",
                    "Negate each relational comparison, including its boundary.",
                    "`!(x < 5)` is `x >= 5`, and `!(y >= 10)` is `y < 10`.",
                ],
                "csa-3.5-demorgan-b4",
                2,
            ),
            frq(
                "Write a Java method `countRuns(String s)` that returns the number of maximal groups of identical "
                "consecutive characters. For example, `countRuns(\"aaabbcaa\")` returns 4, and the empty string "
                "returns 0. Explain why your loop avoids an out-of-bounds access.",
                [
                    "Handle the empty string before assuming that a run exists.",
                    "For a nonempty string, count the first run and then count each character that differs from its predecessor.",
                    "Begin comparison at index 1 so both compared indices are valid.",
                ],
                [
                    "One correct implementation is: `public static int countRuns(String s) { if (s.length() == 0) return 0; int runs = 1; for (int i = 1; i < s.length(); i++) { if (s.charAt(i) != s.charAt(i - 1)) runs++; } return runs; }`",
                    "For `aaabbcaa`, changes occur at the first `b`, `c`, and later `a`, producing four runs.",
                    "The loop uses `i < s.length()` and starts at 1, so both `i` and `i - 1` stay within the string.",
                ],
                "csa-4.3-string-loop-b4",
                3,
            ),
            mcq(
                "What is printed by `int sum = 0; for (int k = 1; k <= 8; k *= 2) { sum += k; } "
                "System.out.print(sum);`?",
                ["A) `7`", "B) `8`", "C) `15`", "D) The loop never terminates"],
                2,
                [
                    "Trace the loop variable after each multiplication.",
                    "`k` takes the values 1, 2, 4, and 8; it then becomes 16.",
                    r"The sum is \(1+2+4+8=15\), and 16 fails the condition.",
                ],
                "csa-4.2-for-loop-trace-b4",
                2,
            ),
            frq(
                "Write a Java method `firstDivisor(int n)` for `n > 1` that returns the smallest divisor of `n` "
                "greater than 1. If `n` is prime, return `n`. The method should not test candidate divisors larger "
                "than the square root of `n`.",
                [
                    "Test candidates in increasing order so the first successful one is smallest.",
                    "Use `d * d <= n` as an integer-friendly square-root boundary.",
                    "If no candidate divides evenly, use the definition of primality.",
                ],
                [
                    "One correct implementation is: `public static int firstDivisor(int n) { for (int d = 2; d * d <= n; d++) { if (n % d == 0) return d; } return n; }`",
                    "A composite integer has at least one factor no greater than its square root.",
                    "Testing in ascending order ensures the first returned divisor is the smallest; reaching the final return means `n` is prime.",
                ],
                "csa-4.4-divisor-loop-b4",
                3,
            ),
        ],
        45,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Computer Science A Unit 5 Set 4: Writing Classes",
        CSA,
        "Original Java class-design practice on encapsulation, constructors, methods, aliasing, and static state.",
        ["ap-computer-science-a", "unit-5", "writing-classes", "objects", "set-4"],
        [
            mcq(
                "A class declares `private int balance;`. What is the strongest reason for making the field private?",
                [
                    "A) Private integers use less memory.",
                    "B) Only constructors can ever change private fields.",
                    "C) The class can control access and preserve its representation invariants.",
                    "D) Private fields are automatically constant.",
                ],
                2,
                [
                    "Access modifiers are about encapsulation, not storage size.",
                    "Methods of the same class can read and modify private fields.",
                    "Restricting direct client access lets class methods validate changes and protect valid state.",
                ],
                "csa-5.2-encapsulation-b4",
                1,
            ),
            frq(
                "Define a Java class `Counter` with a private integer field `value`, a no-argument constructor "
                "that initializes it to 0, a method `increment()` that adds 1, a method `add(int amount)` that "
                "adds only nonnegative amounts, and an accessor `getValue()`.",
                [
                    "Declare instance data private.",
                    "Give each constructor and method the required visibility, return type, and parameters.",
                    "Enforce the nonnegative precondition inside `add` without exposing the field.",
                ],
                [
                    "One correct class is: `public class Counter { private int value; public Counter() { value = 0; } public void increment() { value++; } public void add(int amount) { if (amount >= 0) value += amount; } public int getValue() { return value; } }`",
                    "`value` is initialized for every newly constructed object and is changed only by class methods.",
                    "`add` ignores negative arguments, preserving the stated rule.",
                ],
                "csa-5.3-counter-class-b4",
                2,
            ),
            mcq(
                "After `Counter a = new Counter(); Counter b = a; b.increment();`, which statement is true?",
                [
                    "A) `a` and `b` refer to different objects with values 0 and 1.",
                    "B) `a` and `b` refer to the same object, whose value is 1.",
                    "C) Assignment copies the object, so both values are 1 independently.",
                    "D) The code fails because object references cannot be assigned.",
                ],
                1,
                [
                    "Variables of a class type hold references to objects.",
                    "The assignment copies the reference, not the object.",
                    "Calling a mutator through `b` changes the one object also referenced by `a`.",
                ],
                "csa-5.8-reference-alias-b4",
                2,
            ),
            frq(
                "A `Ticket` class should assign serial numbers 1, 2, 3, ... in construction order. Write the "
                "relevant field declarations, constructor, and `getSerial()` method. Explain why one field must "
                "be static and the other should not be.",
                [
                    "Use class-wide state to remember the next available number.",
                    "Store the assigned serial separately in each object.",
                    "Update the shared counter exactly once in the constructor.",
                ],
                [
                    "One correct design is: `private static int nextSerial = 1; private int serial; public Ticket() { serial = nextSerial; nextSerial++; } public int getSerial() { return serial; }`",
                    "`nextSerial` is static because all tickets must share one sequence.",
                    "`serial` is an instance field because each ticket retains its own assigned number.",
                ],
                "csa-5.7-static-instance-b4",
                3,
            ),
        ],
        44,
        3,
    ),
    # AP Computer Science Principles
    quiz(
        "AI Topic Exercises — AP CSP Big Ideas 1 and 3 Set 4: Development and Algorithms",
        CSP,
        "CED-grounded CSP practice on iterative development, abstraction, procedures, simulation, and algorithm behavior.",
        ["ap-csp", "big-idea-1", "big-idea-3", "creative-development", "algorithms", "set-4"],
        [
            mcq(
                "A team develops a scheduling app by implementing a small feature, testing it with users, revising "
                "it, and then adding the next feature. Which development practice does this best illustrate?",
                [
                    "A) Incremental and iterative development",
                    "B) Lossless compression",
                    "C) Parallel computing",
                    "D) Binary search",
                ],
                0,
                [
                    "Incremental development builds a system in manageable portions.",
                    "Iterative development repeatedly tests and improves a version.",
                    "The team's repeated feature-test-revise cycle uses both practices.",
                ],
                "csp-1.1-iterative-development-b4",
                1,
            ),
            frq(
                "A program uses the list `temps` to store daily temperatures. Design a procedure "
                "`countAbove(temps, threshold)` that returns how many list values exceed `threshold`. Describe "
                "the algorithm in AP-style pseudocode and explain how the list manages complexity.",
                [
                    "Initialize an accumulator before traversing the list.",
                    "Inspect every element and update the count only when the condition is true.",
                    "Explain what would become harder if each day's value required a separate variable.",
                ],
                [
                    "Pseudocode: `count ← 0; FOR EACH value IN temps { IF (value > threshold) { count ← count + 1 } }; RETURN(count)`.",
                    "The algorithm visits each list element once and returns the number above the threshold.",
                    "The list lets one loop process any number of temperatures; separate variables would require repeated special-case code and changes whenever the number of days changed.",
                ],
                "csp-3.2-list-abstraction-b4",
                2,
            ),
            mcq(
                "Consider `result ← 0; REPEAT 4 TIMES { result ← result * 2 + 1 }`. What is the final value of `result`?",
                ["A) 4", "B) 8", "C) 15", "D) 16"],
                2,
                [
                    "Trace the accumulator once per repetition.",
                    "The successive values are 1, 3, 7, and 15.",
                    "Therefore the fourth update leaves `result` equal to 15.",
                ],
                "csp-3.4-iteration-trace-b4",
                2,
            ),
            frq(
                "A simulation estimates the probability that two fair six-sided dice sum to 8. Describe a "
                "simulation algorithm, the result recorded on each trial, and how increasing the number of trials "
                "affects the estimate. Give the exact probability for comparison.",
                [
                    "Use two independent random integers from 1 through 6 per trial.",
                    "Count trials satisfying the event and divide by total trials.",
                    "Enumerate equally likely ordered outcomes for the exact benchmark.",
                ],
                [
                    "On each trial generate `a ← RANDOM(1, 6)` and `b ← RANDOM(1, 6)`; record a success if `a + b = 8`. Return successes divided by trials.",
                    "More trials generally reduce random sampling variability and make the estimate stabilize near the true probability, though no finite run guarantees exact agreement.",
                    r"The successful ordered pairs are (2,6), (3,5), (4,4), (5,3), and (6,2), so the exact probability is \(5/36\).",
                ],
                "csp-3.16-random-simulation-b4",
                3,
            ),
        ],
        43,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP CSP Big Ideas 4 and 5 Set 4: Networks, Security, and Impact",
        CSP,
        "Substantive CSP practice on Internet protocols, fault tolerance, cryptography, privacy, bias, and digital impact.",
        ["ap-csp", "big-idea-4", "big-idea-5", "networks", "cybersecurity", "computing-impact", "set-4"],
        [
            mcq(
                "Why can two packets from the same message take different routes across the Internet?",
                [
                    "A) Every packet is translated into a different programming language.",
                    "B) Routers can forward packets using current connectivity and traffic conditions.",
                    "C) TCP requires all packets to visit every router.",
                    "D) Domain names specify a unique physical path.",
                ],
                1,
                [
                    "The Internet uses packet switching rather than reserving one fixed path.",
                    "Routers make local forwarding decisions, and available routes can differ over time.",
                    "Protocols allow packets to be reordered and reassembled at the destination.",
                ],
                "csp-4.1-packet-routing-b4",
                2,
            ),
            frq(
                "A hospital sends patient records over public networks. Explain how symmetric encryption, public-key "
                "encryption, and a digital certificate can work together to protect a session. Identify one threat "
                "that encryption alone does not prevent.",
                [
                    "Distinguish fast bulk-data encryption from secure key exchange.",
                    "Explain how a certificate binds a public key to an identity through trust.",
                    "Choose a security or privacy risk outside confidentiality in transit.",
                ],
                [
                    "The parties can use the hospital's authenticated public key to establish a secret session key, then use faster symmetric encryption for the records.",
                    "A certificate signed by a trusted certificate authority helps the client verify that the public key belongs to the hospital, reducing impersonation risk.",
                    "Encryption alone does not prevent a compromised endpoint, stolen login credentials, harmful insider access, deletion, or denial-of-service attacks.",
                ],
                "csp-4.6-cryptography-certificates-b4",
                3,
            ),
            mcq(
                "A loan-screening model is trained mostly on historical records from one demographic group and "
                "performs poorly for other groups. What is the best explanation?",
                [
                    "A) Digital data can never be used in models.",
                    "B) The training data may encode sampling bias that produces unequal model performance.",
                    "C) Any use of an algorithm eliminates human bias.",
                    "D) The model necessarily uses lossless compression.",
                ],
                1,
                [
                    "A model learns patterns represented in its training data.",
                    "Underrepresentation can make learned relationships less accurate for omitted groups.",
                    "Historical decisions may also encode existing bias, so algorithmic output is not automatically neutral.",
                ],
                "csp-5.3-data-bias-b4",
                2,
            ),
            frq(
                "A transit app collects precise location every five seconds to predict bus arrivals and publishes "
                "an open data set for researchers. Describe one beneficial use, one privacy risk, and two concrete "
                "data-governance measures that preserve useful analysis while reducing risk.",
                [
                    "Connect the data to a plausible public or operational benefit.",
                    "Explain how repeated locations can reveal more than an isolated coordinate.",
                    "Propose safeguards that address collection, access, retention, or identifiability.",
                ],
                [
                    "Aggregated traces can reveal delays and demand patterns, helping agencies improve schedules and routes.",
                    "Fine-grained trajectories can identify individuals or infer homes, workplaces, routines, and sensitive visits even if names are removed.",
                    "The app could collect only the precision and frequency needed and delete raw traces after a short retention period; released data could also be aggregated, access-controlled, or privacy-protected with noise.",
                ],
                "csp-5.6-location-privacy-b4",
                3,
            ),
        ],
        44,
        3,
    ),
    # AP Psychology
    quiz(
        "AI Topic Exercises — AP Psychology Unit 0 Set 4: Research Methods and Data",
        PSYCH,
        "CED-aligned psychological-science practice on variables, design, ethics, statistics, and valid conclusions.",
        ["ap-psychology", "unit-0", "research-methods", "data-interpretation", "set-4"],
        [
            mcq(
                r"A researcher reports a correlation of \(r=-0.78\) between nightly sleep duration and daytime "
                "sleepiness. Which conclusion is justified?",
                [
                    "A) More sleep causes less daytime sleepiness.",
                    "B) Less sleep causes greater daytime sleepiness.",
                    "C) Longer sleep is strongly associated with lower reported sleepiness, but causation is not established.",
                    "D) Sleep duration explains exactly 78% of differences in sleepiness.",
                ],
                2,
                [
                    "The sign gives direction and the magnitude gives strength of a linear association.",
                    "A negative value means higher sleep duration tends to accompany lower sleepiness.",
                    "Correlation alone cannot rule out directionality or third-variable explanations, so it does not establish causation.",
                ],
                "psych-0.5-correlation-interpretation-b4",
                2,
            ),
            frq(
                "A psychologist tests whether background music affects reading comprehension. Eighty volunteers "
                "are randomly assigned to read the same passage in silence or with instrumental music, then take "
                "the same 20-question test. Identify the independent variable, operationally defined dependent "
                "variable, purpose of random assignment, and one limit on generalization.",
                [
                    "Separate the manipulated condition from the measured outcome.",
                    "State the dependent variable in the exact measurable terms used.",
                    "Distinguish random assignment from random sampling.",
                ],
                [
                    "The independent variable is sound condition: silence versus instrumental music.",
                    "Reading comprehension is operationally defined as the score on the 20-question test.",
                    "Random assignment helps balance participant differences between conditions and supports a causal inference.",
                    "Because participants volunteered rather than being randomly sampled from a defined population, results may not generalize beyond people similar to the volunteers.",
                ],
                "psych-0.3-experimental-design-b4",
                2,
            ),
            mcq(
                "Which measure is most affected by one extremely high score in an otherwise symmetric distribution?",
                ["A) Mean", "B) Median", "C) Mode", "D) Percentile rank of every score equally"],
                0,
                [
                    "An extreme value enters directly into the arithmetic sum used for the mean.",
                    "The median depends on rank order and is resistant to a single outlier.",
                    "Therefore the mean is generally pulled most strongly toward the extreme score.",
                ],
                "psych-0.6-central-tendency-b4",
                1,
            ),
            frq(
                "Researchers plan to induce moderate stress and record memory performance. Describe how informed "
                "consent, protection from harm, confidentiality, and debriefing should be implemented. Explain "
                "why participants must be allowed to withdraw.",
                [
                    "Apply each ethical principle to this specific stress study.",
                    "Distinguish keeping identities private from explaining the study afterward.",
                    "Connect voluntary participation to the right to stop without penalty.",
                ],
                [
                    "Before participation, researchers should disclose foreseeable procedures, discomforts, and rights in understandable language without compromising necessary design details.",
                    "Stress must remain within approved minimal-risk limits with monitoring and a stop procedure; identifying data should be secured and reports should use nonidentifying results.",
                    "Afterward, researchers should explain the purpose and any deception, check well-being, and provide support information.",
                    "Withdrawal preserves voluntary consent because agreement at the start does not obligate a participant to continue experiencing distress.",
                ],
                "psych-0.7-research-ethics-b4",
                3,
            ),
        ],
        43,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Psychology Units 1–2 Set 4: Neural Processes and Cognition",
        PSYCH,
        "Substantive CED practice linking biological bases of behavior with sensation, memory, and cognition.",
        ["ap-psychology", "unit-1", "unit-2", "biological-bases", "cognition", "set-4"],
        [
            mcq(
                "A drug blocks receptor sites for a neurotransmitter and prevents that neurotransmitter from "
                "producing its usual postsynaptic effect. The drug is best classified as",
                ["A) an agonist", "B) an antagonist", "C) a hormone", "D) a reuptake transporter"],
                1,
                [
                    "An agonist increases or mimics a neurotransmitter's effect.",
                    "An antagonist reduces an effect by blocking receptors or otherwise inhibiting action.",
                    "Occupying the receptor without activating its usual response is antagonism.",
                ],
                "psych-1.2-neurotransmitter-antagonist-b4",
                1,
            ),
            frq(
                "After a head injury, a patient speaks fluently but the speech has little meaning, and the patient "
                "has difficulty understanding spoken language. Identify the most likely cortical region affected, "
                "name the cerebral lobe containing it, and explain how evidence from this case supports localization "
                "while not proving that language depends on only one area.",
                [
                    "Match the symptom profile to receptive rather than speech-production impairment.",
                    "Place the associated region in the correct lobe.",
                    "Use the case as evidence for specialization while acknowledging distributed networks.",
                ],
                [
                    "The pattern is most consistent with damage to Wernicke's area.",
                    "This region is classically located in the left temporal lobe.",
                    "Selective disruption of comprehension supports functional specialization, but normal language also requires connected auditory, semantic, motor, and executive regions, so one lesion does not establish a single-area language system.",
                ],
                "psych-1.5-language-localization-b4",
                3,
            ),
            mcq(
                "A student remembers a locker combination by grouping the digits `1 7 7 6 2 0 2 6` as `1776` "
                "and `2026`. Which memory strategy is the student using?",
                ["A) Chunking", "B) Proactive interference", "C) Shaping", "D) Sensory adaptation"],
                0,
                [
                    "Chunking reorganizes separate pieces into larger meaningful units.",
                    "The student turns eight digits into two familiar four-digit groups.",
                    "This reduces the number of units held in working memory.",
                ],
                "psych-2.5-chunking-b4",
                1,
            ),
            frq(
                "Students learn 20 word pairs. Group A recalls them immediately; Group B sleeps for eight hours "
                "before recall; Group C stays awake for eight hours before recall. Predict a plausible pattern of "
                "results using memory consolidation and interference. Identify one confounding variable if group "
                "membership is self-selected and describe how random assignment addresses it.",
                [
                    "Use sleep's role in consolidation and waking activity's opportunity for interference.",
                    "Make a directional prediction rather than claiming certainty.",
                    "Name a preexisting participant characteristic tied to both group choice and recall.",
                ],
                [
                    "Group B may recall more than Group C because sleep supports consolidation and introduces less new waking information to interfere with the pairs.",
                    "Group A may perform well because little time has passed, although the exact ordering of A and B depends on the task and consolidation benefit.",
                    "If students self-select, habitual sleep quality, schedule, motivation, or baseline memory could differ systematically; random assignment tends to distribute such characteristics across conditions.",
                ],
                "psych-2.6-sleep-memory-b4",
                3,
            ),
        ],
        43,
        3,
    ),
    # AP Macroeconomics
    quiz(
        "AI Topic Exercises — AP Macroeconomics Unit 2 Set 4: Economic Indicators",
        MACRO,
        "CED-aligned quantitative practice on GDP, price indexes, unemployment, and the business cycle.",
        ["ap-macroeconomics", "unit-2", "economic-indicators", "gdp", "unemployment", "set-4"],
        [
            frq(
                r"An economy produces only books and coffee. In Year 1 it produces 100 books at \(\$20\) and "
                r"200 coffees at \(\$5\). In Year 2 it produces 120 books at \(\$22\) and 180 coffees at \(\$6\). "
                "Using Year 1 prices, calculate Year 2 nominal GDP, Year 2 real GDP, and the Year 2 GDP deflator.",
                [
                    "Use current-year quantities and prices for nominal GDP.",
                    "Use Year 2 quantities with base-year prices for real GDP.",
                    r"Compute the deflator as \(100(\text{nominal}/\text{real})\).",
                ],
                [
                    r"Year 2 nominal GDP is \(120(22)+180(6)=\$3{,}720\).",
                    r"Year 2 real GDP in Year 1 prices is \(120(20)+180(5)=\$3{,}300\).",
                    r"The Year 2 GDP deflator is \(100(3720/3300)\approx112.7\).",
                ],
                "macro-2.2-gdp-deflator-b4",
                2,
            ),
            mcq(
                "Which person is counted as unemployed in the official unemployment rate?",
                [
                    "A) A full-time student who does not want a job",
                    "B) A retired person who is not seeking work",
                    "C) A person without a job who applied for jobs during the previous four weeks",
                    "D) A discouraged worker who stopped looking six months ago",
                ],
                2,
                [
                    "Official unemployment requires no current job plus active recent job search.",
                    "Students and retirees who do not seek work are outside the labor force.",
                    "A discouraged worker who has stopped searching is also outside the measured labor force.",
                ],
                "macro-2.3-unemployment-definition-b4",
                1,
            ),
            mcq(
                "Unexpected inflation is most likely to benefit",
                [
                    "A) lenders receiving fixed nominal repayments",
                    "B) borrowers repaying fixed-rate loans with dollars of lower purchasing power",
                    "C) savers holding currency",
                    "D) workers whose nominal wages are fixed and do not adjust",
                ],
                1,
                [
                    "Unexpected inflation reduces the real value of fixed nominal payments.",
                    "Borrowers make repayments in dollars that purchase less than anticipated.",
                    "Lenders and people with fixed nominal incomes lose purchasing power.",
                ],
                "macro-2.5-unexpected-inflation-b4",
                2,
            ),
            frq(
                "The labor force contains 8 million employed workers and 0.5 million unemployed workers. Another "
                "0.3 million people want jobs but have stopped searching. Calculate the official unemployment rate. "
                "Then explain what happens to the rate if 0.2 million unemployed workers become discouraged, with "
                "no other changes.",
                [
                    "Include employed and actively unemployed people in the official labor force.",
                    "Exclude discouraged workers from both official unemployment and the labor force.",
                    "Recalculate both numerator and denominator after the status change.",
                ],
                [
                    r"Initially, the labor force is \(8.0+0.5=8.5\) million, so unemployment is \(0.5/8.5\approx5.88\%\).",
                    r"After 0.2 million stop searching, unemployed workers number 0.3 million and the labor force is 8.3 million.",
                    r"The official rate falls to \(0.3/8.3\approx3.61\%\), even though none of the discouraged workers found jobs.",
                ],
                "macro-2.4-discouraged-workers-b4",
                3,
            ),
        ],
        44,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Macroeconomics Unit 5 Set 4: Long-Run Adjustment and Growth",
        MACRO,
        "Original long-run aggregate supply, Phillips curve, growth, and stabilization trade-off practice.",
        ["ap-macroeconomics", "unit-5", "long-run-adjustment", "economic-growth", "set-4"],
        [
            mcq(
                "Starting from long-run equilibrium, an unanticipated increase in aggregate demand causes which "
                "short-run combination?",
                [
                    "A) Lower price level and lower real output",
                    "B) Higher price level and higher real output",
                    "C) Higher price level and unchanged real output immediately",
                    "D) Lower price level and higher unemployment",
                ],
                1,
                [
                    "In the short run, the aggregate supply curve slopes upward.",
                    "A rightward aggregate-demand shift raises both the equilibrium price level and real output.",
                    "Output temporarily exceeds full-employment output, so unemployment tends to fall.",
                ],
                "macro-5.1-long-run-adjustment-b4",
                2,
            ),
            frq(
                "An economy is in a recessionary gap. Assume policymakers take no action and input prices are "
                "flexible over time. Explain the self-correction process using short-run aggregate supply. State "
                "the long-run effects on real output, the price level, and unemployment.",
                [
                    "Connect weak labor demand to nominal wages and other input prices.",
                    "Identify the direction of the short-run aggregate supply shift.",
                    "Return each real variable to its full-employment or natural level.",
                ],
                [
                    "High cyclical unemployment puts downward pressure on nominal wages and input prices.",
                    "Lower production costs shift short-run aggregate supply right until aggregate demand intersects long-run aggregate supply.",
                    "Real output returns to full-employment output and unemployment returns to its natural rate, while the price level is lower than before the adjustment.",
                ],
                "macro-5.2-self-correction-b4",
                3,
            ),
            mcq(
                "Which policy most directly increases long-run aggregate supply?",
                [
                    "A) A one-time increase in transfer payments",
                    "B) Investment in worker training and productive infrastructure",
                    "C) A higher required reserve ratio during a recession",
                    "D) Price controls on final goods",
                ],
                1,
                [
                    "Long-run aggregate supply grows when productive capacity increases.",
                    "Human capital and infrastructure can raise labor productivity and potential output.",
                    "Demand stimulus alone does not necessarily increase productive capacity.",
                ],
                "macro-5.6-growth-policy-b4",
                2,
            ),
            frq(
                "Productivity grows 2% in a year, the labor force grows 1%, and the price level is stable. Estimate "
                "the economy's potential real-output growth rate. Then use the rule of 70 to estimate doubling time "
                "if that rate persists, and explain one reason actual growth might differ.",
                [
                    "Approximate potential output growth by combining labor-force and productivity growth.",
                    "Apply the rule of 70 to the percentage growth rate.",
                    "Identify a channel that affects utilization or productive capacity.",
                ],
                [
                    r"Potential real output grows approximately \(2\%+1\%=3\%\).",
                    r"The rule of 70 gives a doubling time of about \(70/3\approx23.3\) years.",
                    "Actual growth can differ because of recessions, changes in capital formation, labor-force participation, technology, institutions, or resource shocks.",
                ],
                "macro-5.7-productivity-growth-b4",
                2,
            ),
        ],
        44,
        3,
    ),
    # AP Microeconomics
    quiz(
        "AI Topic Exercises — AP Microeconomics Unit 2 Set 4: Costs and Perfect Competition",
        MICRO,
        "CED-aligned production, cost curves, profit maximization, shutdown, and market-entry practice.",
        ["ap-microeconomics", "unit-2", "production-costs", "perfect-competition", "set-4"],
        [
            mcq(
                "When marginal product of labor is increasing and labor is the only variable input, marginal cost is generally",
                [
                    "A) increasing because each worker adds less output",
                    "B) decreasing because each additional unit of output requires less additional labor",
                    "C) constant because fixed cost is unchanged",
                    "D) equal to average fixed cost",
                ],
                1,
                [
                    "Marginal product measures extra output from an additional worker.",
                    "When marginal product rises, fewer additional labor resources are needed per extra unit of output.",
                    "With a constant wage, that means marginal cost falls.",
                ],
                "micro-2.2-mp-mc-relationship-b4",
                2,
            ),
            frq(
                r"A perfectly competitive firm's market price is \(\$18\). At output \(q=40\), "
                r"\(MC=\$18\), \(ATC=\$15\), and \(AVC=\$11\). Determine whether 40 units is profit maximizing, "
                "calculate economic profit, and state whether firms enter or exit in the long run.",
                [
                    r"For a price-taking firm, compare \(P=MR\) with marginal cost.",
                    "Compute per-unit profit as price minus average total cost.",
                    "Use the sign of economic profit to predict long-run entry or exit.",
                ],
                [
                    r"Assuming marginal cost is rising at \(q=40\), \(P=MR=MC=\$18\), so 40 units is profit maximizing.",
                    r"Profit is \((P-ATC)q=(18-15)(40)=\$120\).",
                    "Positive economic profit attracts entry, shifting market supply right until long-run economic profit is zero.",
                ],
                "micro-2.5-perfect-competition-profit-b4",
                2,
            ),
            mcq(
                "A competitive firm should shut down in the short run when",
                [
                    "A) price is below average variable cost at every positive output",
                    "B) price is below average total cost but above average variable cost",
                    "C) marginal revenue equals marginal cost",
                    "D) total revenue exceeds total variable cost",
                ],
                0,
                [
                    "In the short run, fixed cost is paid whether the firm operates or shuts down.",
                    "Operating is worthwhile only if revenue covers variable cost.",
                    "If price is below minimum average variable cost, producing adds more variable cost than revenue, so the firm shuts down.",
                ],
                "micro-2.6-shutdown-rule-b4",
                2,
            ),
            frq(
                r"A firm's total fixed cost is \(\$120\). At 10 units, total variable cost is \(\$300\); at 11 "
                r"units, total variable cost is \(\$336\). Calculate AFC, AVC, and ATC at 10 units and MC of the "
                r"11th unit. If market price is \(\$34\), explain whether producing the 11th unit raises profit.",
                [
                    "Divide each cost total by the 10-unit output for average measures.",
                    "Marginal cost is the change in total cost, which here equals the change in variable cost.",
                    "Compare marginal revenue from one more unit with marginal cost.",
                ],
                [
                    r"At 10 units, \(AFC=120/10=\$12\), \(AVC=300/10=\$30\), and \(ATC=\$42\).",
                    r"The 11th unit's marginal cost is \(336-300=\$36\).",
                    r"In perfect competition \(MR=P=\$34<MC=\$36\), so producing the 11th unit would reduce profit by \(\$2\).",
                ],
                "micro-2.4-cost-calculation-b4",
                2,
            ),
        ],
        44,
        2,
    ),
    quiz(
        "AI Topic Exercises — AP Microeconomics Unit 5 Set 4: Externalities and Public Goods",
        MICRO,
        "Substantive market-failure practice with social costs, corrective policy, common resources, and public goods.",
        ["ap-microeconomics", "unit-5", "externalities", "public-goods", "market-failure", "set-4"],
        [
            frq(
                r"A factory's marginal private cost is \(MPC=10+Q\), and each unit creates a constant "
                r"\(\$6\) marginal external cost. Market demand is \(P=50-Q\). Find the unregulated market "
                "quantity, the socially efficient quantity, and the per-unit corrective tax.",
                [
                    "Set demand, which is marginal social benefit here, equal to private marginal cost for the market outcome.",
                    "Add external cost to private cost to obtain marginal social cost.",
                    "Set marginal social benefit equal to marginal social cost and identify the Pigouvian tax.",
                ],
                [
                    r"Unregulated equilibrium: \(50-Q=10+Q\), so \(Q_m=20\).",
                    r"\(MSC=16+Q\); efficiency requires \(50-Q=16+Q\), so \(Q^*=17\).",
                    r"A \(\$6\) per-unit tax makes firms face the full marginal social cost and implements the efficient quantity.",
                ],
                "micro-5.2-negative-externality-b4",
                3,
            ),
            mcq(
                "A lighthouse warning all ships near a rocky coast is a public good primarily because its service is",
                [
                    "A) rival and excludable",
                    "B) rival and nonexcludable",
                    "C) nonrival and nonexcludable",
                    "D) nonrival and always privately profitable",
                ],
                2,
                [
                    "One ship benefiting from the signal does not meaningfully reduce another ship's benefit, so it is nonrival.",
                    "It is difficult to prevent nearby ships from observing the warning, so it is nonexcludable.",
                    "Those two properties define a public good and create a free-rider problem.",
                ],
                "micro-5.4-public-good-b4",
                1,
            ),
            mcq(
                "An open-access fishery tends to be overused because",
                [
                    "A) fish are nonrival and excludable",
                    "B) each fisher considers private benefit but not the stock depletion imposed on others",
                    "C) marginal social benefit is always zero",
                    "D) a binding price floor limits every catch",
                ],
                1,
                [
                    "Fish in an open-access stock are rival but difficult to exclude users from harvesting.",
                    "Each catch reduces the stock available to other fishers and future users.",
                    "Ignoring that external cost leads individual incentives to produce excessive total harvest.",
                ],
                "micro-5.5-common-resource-b4",
                2,
            ),
            frq(
                "Vaccination creates a positive consumption externality. Using marginal-benefit language, explain "
                "why the market quantity is below the efficient quantity. Compare a per-dose subsidy with a binding "
                "vaccination mandate, giving one efficiency or implementation concern for each.",
                [
                    "Distinguish marginal private benefit from marginal social benefit.",
                    "Locate the market and efficient quantities using the appropriate benefit curve.",
                    "Evaluate how each policy changes incentives or quantities and note practical limits.",
                ],
                [
                    "Because reduced transmission benefits others, marginal social benefit exceeds marginal private benefit; consumers equate private benefit to marginal cost and choose too few vaccinations.",
                    "A subsidy equal to marginal external benefit can raise private demand toward the efficient quantity, but estimating the external benefit and financing the subsidy are difficult.",
                    "A mandate can push uptake toward a target even when willingness to pay is low, but a poorly set mandate can exceed the efficient quantity and creates enforcement, access, and exemption concerns.",
                ],
                "micro-5.3-positive-externality-policy-b4",
                3,
            ),
        ],
        44,
        3,
    ),
    # AP US History
    quiz(
        "AI Topic Exercises — AP US History Periods 2–3 Set 4: Colonies and Revolution",
        APUSH,
        "CED-aligned evidence and reasoning practice on colonial development, imperial conflict, revolution, and the new republic.",
        ["ap-us-history", "period-2", "period-3", "colonial-america", "revolution", "set-4"],
        [
            mcq(
                "A historian comparing British North American regions around 1750 would most likely explain the "
                "greater prevalence of large plantations in the Chesapeake than in New England by emphasizing",
                [
                    "A) the Chesapeake's tobacco economy and demand for bound labor",
                    "B) New England's legal prohibition of all commercial agriculture",
                    "C) the absence of Atlantic trade in the Chesapeake",
                    "D) New England's dependence on Spanish silver mines",
                ],
                0,
                [
                    "Connect regional environment and staple production to labor systems.",
                    "Tobacco was land- and labor-intensive and profitable in the Chesapeake climate.",
                    "Planters first used substantial indentured labor and increasingly relied on racial slavery.",
                ],
                "apush-2.6-regional-economies-b4",
                2,
            ),
            frq(
                "Develop a historically defensible claim evaluating the extent to which the Seven Years' War "
                "changed relations between Britain and its North American colonies from 1763 to 1776. Use at "
                "least two specific pieces of evidence and address one continuity or limitation.",
                [
                    "Establish the pre-1763 pattern of salutary neglect and colonial self-government.",
                    "Use postwar taxation, enforcement, western policy, or protest as evidence of changed relations.",
                    "Qualify the claim with continued loyalism, British political identity, or earlier imperial conflict.",
                ],
                [
                    "The war transformed a loose imperial relationship into a sustained constitutional crisis because Britain sought revenue and tighter control while colonists defended practices of self-taxation.",
                    "The Proclamation of 1763 restricted western settlement, and measures such as the Stamp Act and Townshend duties prompted organized resistance over representation and sovereignty.",
                    "The change was gradual rather than immediate: many colonists remained loyal to the Crown and initially sought restoration of traditional British rights rather than independence.",
                ],
                "apush-3.2-seven-years-war-change-b4",
                3,
            ),
            mcq(
                "Which weakness of the Articles of Confederation was most directly highlighted by Shays' Rebellion?",
                [
                    "A) Congress could not effectively raise revenue or maintain forces to address domestic unrest.",
                    "B) The national executive had become too powerful.",
                    "C) Federal courts routinely overturned state tax laws.",
                    "D) Congress could regulate interstate commerce without state consent.",
                ],
                0,
                [
                    "The Confederation government lacked independent taxing power and a robust executive apparatus.",
                    "Massachusetts had to respond to the uprising largely through state and privately funded forces.",
                    "Nationalists used the unrest to argue for a stronger federal government.",
                ],
                "apush-3.8-articles-shays-b4",
                2,
            ),
            frq(
                "Compare how supporters of the Constitution and Anti-Federalists understood the principal danger "
                "to republican liberty during the ratification debate. Use one specific argument or publication "
                "from each side and explain one outcome of the debate.",
                [
                    "Identify the Federalist concern about instability, faction, or weak national authority.",
                    "Contrast it with Anti-Federalist concern about consolidated power, distant government, or missing rights.",
                    "Connect the debate to ratification design or the Bill of Rights.",
                ],
                [
                    "Federalists argued that weak central authority and majority faction threatened ordered liberty; Federalist No. 10 claimed an extended republic could control factional effects.",
                    "Anti-Federalists warned that a large consolidated republic and powerful federal offices could become remote and oppressive, especially without explicit protections for individual rights.",
                    "Promises to add protections helped secure ratification, and the first Congress proposed the Bill of Rights, reflecting Anti-Federalist pressure within the new Federalist framework.",
                ],
                "apush-3.9-ratification-debate-b4",
                3,
            ),
        ],
        47,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP US History Periods 6–7 Set 4: Industry, Reform, and State Power",
        APUSH,
        "Original analytical practice on industrial capitalism, migration, Progressivism, the New Deal, and federal authority.",
        ["ap-us-history", "period-6", "period-7", "industrialization", "reform", "set-4"],
        [
            mcq(
                "The growth of national consumer markets in the late nineteenth century was most directly enabled by",
                [
                    "A) railroad networks and new systems of mass production and distribution",
                    "B) the disappearance of immigration to industrial cities",
                    "C) a return to household subsistence production",
                    "D) federal prohibition of advertising",
                ],
                0,
                [
                    "A national market requires goods and information to move across regions.",
                    "Railroads linked producers, wholesalers, and consumers, while industrial methods lowered unit costs.",
                    "Mail-order catalogs and advertising then connected mass-produced goods to a wider public.",
                ],
                "apush-6.6-national-market-b4",
                2,
            ),
            frq(
                "Evaluate the extent to which Progressive Era reformers changed the relationship between government "
                "and industrial capitalism from 1890 to 1920. Use at least two reforms and address one limit.",
                [
                    "Make a degree claim about regulation, expertise, labor, or consumer protection.",
                    "Use reforms that demonstrate a mechanism of expanded public oversight.",
                    "Qualify with uneven enforcement, constitutional limits, racial exclusion, or continued corporate power.",
                ],
                [
                    "Progressives substantially expanded acceptance of government oversight by treating industrial conditions as public problems rather than purely private contracts.",
                    "The Pure Food and Drug Act and Meat Inspection Act established federal consumer protections, while antitrust actions and state labor regulations constrained some corporate practices.",
                    "Change remained limited because enforcement was uneven, courts sometimes struck down regulations, and many reforms neglected Black workers, agricultural laborers, and other marginalized groups.",
                ],
                "apush-7.4-progressive-regulation-b4",
                3,
            ),
            mcq(
                "Which New Deal development most clearly created a continuing federal responsibility for individual economic security?",
                [
                    "A) The Social Security Act",
                    "B) The Dawes Act",
                    "C) The Open Door notes",
                    "D) The Volstead Act",
                ],
                0,
                [
                    "Look for a durable program tying the federal government to income security.",
                    "The Social Security Act created old-age pensions and unemployment-related protections.",
                    "Its continuing national framework changed expectations of the federal government's welfare role.",
                ],
                "apush-7.10-social-security-b4",
                1,
            ),
            frq(
                "Compare federal responses to economic inequality during the Gilded Age and the New Deal. Use one "
                "specific policy or development from each era and explain one reason for the difference.",
                [
                    "Characterize the typical federal role in each period without treating either era as uniform.",
                    "Use concrete evidence, such as labor policy, regulation, relief, or social insurance.",
                    "Explain the shift through ideology, crisis severity, political coalitions, or institutional change.",
                ],
                [
                    "In much of the Gilded Age, the federal government protected property and intervened against labor more readily than it redistributed security; federal action during the Pullman Strike illustrates this orientation.",
                    "The New Deal built direct relief, labor protections, and social insurance through programs such as the WPA, Wagner Act, and Social Security Act.",
                    "The Great Depression's scale discredited limited responses and enabled a durable electoral coalition that accepted broader federal responsibility, although New Deal benefits remained unequal.",
                ],
                "apush-6-7-economic-inequality-comparison-b4",
                4,
            ),
        ],
        47,
        4,
    ),
    # AP World History
    quiz(
        "AI Topic Exercises — AP World History Units 1–2 Set 4: States and Exchange Networks",
        WORLD,
        "CED-aligned comparison and causation practice on state building and exchange across Afro-Eurasia, c. 1200–1450.",
        ["ap-world-history", "unit-1", "unit-2", "state-building", "exchange-networks", "set-4"],
        [
            mcq(
                "The spread of Champa rice in Song China most directly contributed to",
                [
                    "A) increased agricultural output and population growth",
                    "B) the end of urban commercial activity",
                    "C) abandonment of southern Chinese settlement",
                    "D) replacement of Confucian administration by feudal knights",
                ],
                0,
                [
                    "Champa rice matured quickly and tolerated environmental conditions in southern China.",
                    "Multiple harvests and expanded cultivation increased the food supply.",
                    "Greater agricultural productivity supported demographic growth and urbanization.",
                ],
                "world-1.1-champa-rice-b4",
                1,
            ),
            frq(
                "Compare one method used by the Mali Empire and one method used by the Mongol Empire to support "
                "long-distance trade. Explain one important difference in the political context of their trade networks.",
                [
                    "Choose comparable categories such as security, infrastructure, taxation, or diplomacy.",
                    "Use specific evidence for each empire and explain its effect on exchange.",
                    "Distinguish Mali's regional commercial position from Mongol rule across Eurasian routes.",
                ],
                [
                    "Mali's rulers protected and taxed trans-Saharan routes and drew merchants to cities such as Timbuktu; Mansa Musa's pilgrimage also advertised the empire's gold wealth and Islamic ties.",
                    "Mongol rulers secured extensive overland routes, used relay stations, and protected merchants and envoys across much of Eurasia.",
                    "Mali controlled a strategic West African segment linking gold fields to North Africa, whereas Mongol successor states imposed related rule across a much broader set of Silk Road territories.",
                ],
                "world-2.1-mali-mongol-trade-b4",
                3,
            ),
            mcq(
                "Which technology most directly improved Indian Ocean sailors' ability to plan voyages around seasonal wind patterns?",
                [
                    "A) Knowledge of monsoon cycles",
                    "B) The heavy plow",
                    "C) Quipu accounting",
                    "D) Chinampa agriculture",
                ],
                0,
                [
                    "Indian Ocean winds reverse direction on a predictable seasonal schedule.",
                    "Merchants timed outbound and return voyages to those monsoon patterns.",
                    "This environmental knowledge made regular long-distance maritime exchange more reliable.",
                ],
                "world-2.3-monsoon-navigation-b4",
                1,
            ),
            frq(
                "Evaluate the extent to which long-distance exchange networks caused cultural change in Afro-Eurasia "
                "from c. 1200 to c. 1450. Use at least two regions and address one limit or local adaptation.",
                [
                    "Make a degree claim that distinguishes diffusion from complete cultural replacement.",
                    "Use specific religious, artistic, linguistic, or scientific transfers in two regions.",
                    "Explain how local communities adapted, blended, or resisted an imported tradition.",
                ],
                [
                    "Exchange networks caused substantial cultural diffusion by carrying beliefs and knowledge alongside commodities, but imported traditions were commonly localized.",
                    "Indian Ocean merchants helped spread Islam to East African port cities and Southeast Asia, while Silk Road and Mongol connections moved technologies and scientific knowledge across Eurasia.",
                    "Change was not simple homogenization: Swahili culture blended Bantu and Islamic influences, and Southeast Asian states combined Islam with existing political and cultural practices.",
                ],
                "world-2.5-cultural-diffusion-b4",
                3,
            ),
        ],
        47,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP World History Units 5–6 Set 4: Revolutions and Imperialism",
        WORLD,
        "Original global reasoning practice on political revolutions, industrialization, migration, and modern empire.",
        ["ap-world-history", "unit-5", "unit-6", "revolutions", "industrialization", "imperialism", "set-4"],
        [
            mcq(
                "Which feature most clearly distinguished the Haitian Revolution from the American Revolution?",
                [
                    "A) It produced the abolition of slavery through a successful uprising led largely by enslaved people.",
                    "B) It drew no ideas from Enlightenment political thought.",
                    "C) It preserved direct rule by a European monarchy.",
                    "D) It occurred before Atlantic plantation slavery developed.",
                ],
                0,
                [
                    "Both revolutions used language of rights and challenged imperial authority.",
                    "Saint-Domingue's enslaved majority became central actors in the revolution.",
                    "The resulting Haitian state abolished slavery, giving the revolution a uniquely radical social dimension.",
                ],
                "world-5.2-haitian-revolution-b4",
                2,
            ),
            frq(
                "Explain one reason industrialization began in Britain and one way industrialization changed labor "
                "systems in a different region from c. 1750 to c. 1900. Then explain one continuity in labor despite industrial change.",
                [
                    "Use a specific British condition involving resources, capital, institutions, agriculture, or markets.",
                    "Trace industrial demand to a named labor change outside or beyond Britain.",
                    "Identify a labor practice that persisted alongside factories and wage work.",
                ],
                [
                    "Britain combined accessible coal, investment capital, improving transport, property institutions, and overseas markets; any one of these, explained as a mechanism, helped support early mechanization.",
                    "Industrial demand expanded indentured labor migration from India to plantations after emancipation, or intensified coerced raw-material labor in colonized regions.",
                    "Household production, peasant agriculture, slavery, and other coerced labor systems persisted in many regions even as urban wage labor expanded.",
                ],
                "world-5.4-industrial-labor-b4",
                3,
            ),
            mcq(
                "European colonial construction of railroads in nineteenth-century Africa and Asia was most often designed primarily to",
                [
                    "A) connect resource-producing interiors to ports and imperial markets",
                    "B) eliminate export agriculture",
                    "C) ensure equal industrial development among all regions",
                    "D) end European military access to colonies",
                ],
                0,
                [
                    "Colonial infrastructure reflected imperial economic priorities.",
                    "Rail lines commonly moved minerals and cash crops from interior production zones to coastal export points.",
                    "Such networks could aid local travel but were usually not designed for balanced domestic integration.",
                ],
                "world-6.2-colonial-railroads-b4",
                2,
            ),
            frq(
                "Evaluate the extent to which economic motives explain European imperial expansion from c. 1750 "
                "to c. 1900. Use two specific examples and address a non-economic motive.",
                [
                    "State how far demand for markets, raw materials, or investment opportunities explains expansion.",
                    "Use examples in which the economic mechanism is explicit.",
                    "Weigh strategic rivalry, nationalism, missionary activity, racism, or technology as an additional cause.",
                ],
                [
                    "Economic motives were major drivers because industrial states sought reliable raw materials and outlets, but strategic and ideological competition also shaped when and where conquest occurred.",
                    "British influence in Egypt protected the Suez route and financial interests, while Belgian exploitation of the Congo pursued rubber and ivory with extreme coercion.",
                    "Imperial rivalry, Social Darwinist claims, missionary goals, and prestige encouraged territorial acquisition even where immediate profits were uncertain, so economics alone is insufficient.",
                ],
                "world-6.1-imperial-motives-b4",
                4,
            ),
        ],
        47,
        4,
    ),
    # AP European History
    quiz(
        "AI Topic Exercises — AP European History Units 2–3 Set 4: Reformation and State Building",
        EURO,
        "CED-aligned practice on confessional conflict, absolutism, constitutionalism, and early modern state power.",
        ["ap-european-history", "unit-2", "unit-3", "reformation", "state-building", "set-4"],
        [
            mcq(
                "The Peace of Augsburg of 1555 attempted to reduce conflict in the Holy Roman Empire by",
                [
                    "A) allowing each territorial ruler to choose Lutheranism or Catholicism for the territory",
                    "B) establishing complete religious toleration for all faiths",
                    "C) placing the empire under Calvinist rule",
                    "D) dissolving the political authority of princes",
                ],
                0,
                [
                    "The settlement applied the principle often summarized as whose realm, his religion.",
                    "It recognized Lutheranism and Catholicism as choices for territorial rulers.",
                    "It did not create individual toleration or settle the status of every confession.",
                ],
                "euro-2.4-peace-augsburg-b4",
                2,
            ),
            frq(
                "Compare one way Louis XIV strengthened royal authority in France with one way Parliament limited "
                "royal authority in England during the seventeenth century. Explain one factor producing the different outcomes.",
                [
                    "Use comparable evidence about taxation, administration, military power, religion, or law.",
                    "Explain how each institution changed the practical balance of authority.",
                    "Link divergence to representative traditions, fiscal structures, civil conflict, or elite alliances.",
                ],
                [
                    "Louis XIV used intendants, court patronage at Versailles, and a standing army to reduce noble independence and centralize administration.",
                    "After civil war and the Glorious Revolution, Parliament secured regular sessions, control of taxation, and protections in the English Bill of Rights.",
                    "England's established parliamentary tax role and successful coalition against James II constrained monarchy, while French rulers built fiscal and administrative institutions that bypassed representative national bodies.",
                ],
                "euro-3.2-absolutism-constitutionalism-b4",
                3,
            ),
            mcq(
                "The Edict of Nantes issued by Henry IV is best understood as",
                [
                    "A) a pragmatic effort to stabilize France by granting limited protections to Huguenots",
                    "B) a decree making Calvinism the only legal French religion",
                    "C) the beginning of the French Revolution",
                    "D) a papal order ending royal taxation",
                ],
                0,
                [
                    "France had experienced destructive wars between Catholics and Huguenots.",
                    "Henry IV remained a Catholic monarch but granted Huguenots specified rights and protections.",
                    "The policy sought political stability without establishing modern equality among religions.",
                ],
                "euro-2.5-edict-nantes-b4",
                2,
            ),
            frq(
                "Evaluate the extent to which the Thirty Years' War changed European politics. Use the Peace of "
                "Westphalia and at least one wartime development, while identifying one continuity.",
                [
                    "Make a degree claim about confessional conflict, dynastic rivalry, sovereignty, or state power.",
                    "Explain how a specific wartime alliance or outcome complicates a purely religious interpretation.",
                    "Identify a political practice or rivalry that persisted after 1648.",
                ],
                [
                    "The war accelerated a shift toward state-centered diplomacy because dynastic and strategic interests increasingly overrode simple confessional blocs.",
                    "Catholic France's intervention against the Catholic Habsburgs demonstrated raison d'état, and Westphalia confirmed territorial settlements and greater autonomy within the empire.",
                    "The settlement did not create fully sovereign modern nation-states overnight; dynastic monarchy, warfare, and balance-of-power rivalry continued.",
                ],
                "euro-3.3-thirty-years-war-b4",
                4,
            ),
        ],
        47,
        4,
    ),
    quiz(
        "AI Topic Exercises — AP European History Units 7–8 Set 4: Mass Politics and Global Conflict",
        EURO,
        "Original evidence-based practice on nationalism, mass society, total war, fascism, and interwar crisis.",
        ["ap-european-history", "unit-7", "unit-8", "mass-politics", "world-wars", "set-4"],
        [
            mcq(
                "The expansion of voting rights for European men in the late nineteenth century most directly encouraged",
                [
                    "A) growth of mass political parties and organized electoral campaigns",
                    "B) disappearance of socialist and nationalist movements",
                    "C) restoration of serfdom in western Europe",
                    "D) elimination of newspapers from political life",
                ],
                0,
                [
                    "A larger electorate required political organizations to mobilize many more voters.",
                    "Parties built local branches, platforms, newspapers, and disciplined campaigns.",
                    "Mass suffrage therefore helped create modern mass politics rather than ending ideological competition.",
                ],
                "euro-7.3-mass-politics-b4",
                2,
            ),
            frq(
                "Explain two ways World War I expanded state power over European societies and one way civilians "
                "challenged or resisted that expansion. Use specific evidence.",
                [
                    "Choose distinct mechanisms such as economic planning, conscription, propaganda, censorship, or rationing.",
                    "Explain why total war pushed governments toward each mechanism.",
                    "Use a strike, mutiny, revolution, protest, or evasion as evidence of limits.",
                ],
                [
                    "Governments conscripted mass armies and directed industrial production, labor, prices, and food distribution to sustain total war.",
                    "They also used propaganda and censorship to shape morale and suppress information judged harmful to the war effort.",
                    "Resistance appeared in labor strikes, soldiers' mutinies, and the Russian revolutions, showing that mobilization could exhaust legitimacy and provoke challenges to state authority.",
                ],
                "euro-7.8-total-war-state-b4",
                3,
            ),
            mcq(
                "Fascist movements in interwar Europe generally gained support by promising to",
                [
                    "A) restore national strength through authoritarian unity and suppress Marxism",
                    "B) abolish nationalism in favor of global parliamentary rule",
                    "C) dismantle military institutions and colonial ambitions",
                    "D) protect liberal pluralism against one-party government",
                ],
                0,
                [
                    "Fascism rejected liberal pluralism and Marxist class politics.",
                    "It elevated an organic national community, hierarchy, leadership, and often militarism.",
                    "Economic crisis and fear of communism helped such promises attract conservative and mass support.",
                ],
                "euro-8.4-fascist-appeal-b4",
                2,
            ),
            frq(
                "Compare how the Great Depression affected democratic government in Germany and Britain. Explain "
                "one political or institutional reason the outcomes differed.",
                [
                    "Describe a concrete political effect of economic crisis in each country.",
                    "Avoid claiming that Britain escaped hardship or that Germany's outcome was economically inevitable.",
                    "Use constitutional structure, party coalitions, war legacies, or elite choices to explain divergence.",
                ],
                [
                    "In Germany, mass unemployment weakened centrist parties, expanded support for extremist movements, and enabled presidential emergency rule before Hitler's appointment and destruction of democracy.",
                    "Britain experienced unemployment and political realignment but retained parliamentary competition through coalition government and established institutions.",
                    "Germany's fragile Weimar coalitions, Article 48, polarizing war legacies, and conservative elites' decision to empower Hitler made democratic collapse more likely; Britain's older parliamentary legitimacy and different party system supported continuity.",
                ],
                "euro-8.3-depression-democracy-b4",
                4,
            ),
        ],
        47,
        4,
    ),
    # AP Human Geography
    quiz(
        "AI Topic Exercises — AP Human Geography Unit 1 Set 4: Geographic Thinking and Data",
        HUG,
        "CED-aligned spatial reasoning with scale, projections, diffusion, GIS, and quantitative geographic data.",
        ["ap-human-geography", "unit-1", "geographic-thinking", "gis", "set-4"],
        [
            mcq(
                "A choropleth map shades counties by total number of farms. Which revision would best support fair "
                "comparison among counties of very different sizes?",
                [
                    "A) Map farm density or percentage of land in farms instead of raw totals.",
                    "B) Assign darker shading to every geographically larger county.",
                    "C) Remove the legend and county boundaries.",
                    "D) Convert every county total to the same number.",
                ],
                0,
                [
                    "Raw totals often reflect the size or population of enumeration units.",
                    "Standardizing by land area or another relevant denominator produces a rate or density.",
                    "Choropleth maps are generally more meaningful when they display normalized values.",
                ],
                "hug-1.6-choropleth-normalization-b4",
                2,
            ),
            frq(
                "A public-health department maps asthma cases, highways, industrial sites, population, and prevailing "
                "winds. Explain how GIS overlay analysis could identify priority study areas. Distinguish spatial "
                "correlation from causation and identify one additional variable researchers should collect.",
                [
                    "Describe how multiple georeferenced layers can be combined.",
                    "Use population-adjusted cases rather than raw case totals where appropriate.",
                    "Name a plausible confounder or exposure measurement needed for causal analysis.",
                ],
                [
                    "GIS can overlay asthma rates with distance from highways and industrial sites and downwind zones to locate clusters where high rates and likely exposures coincide.",
                    "Co-location is a spatial association and does not prove pollution caused illness because populations differ in age, smoking, housing, health access, and other factors.",
                    "Researchers could collect measured particulate exposure, smoking prevalence, income, housing quality, age structure, or individual residential histories.",
                ],
                "hug-1.7-gis-health-b4",
                3,
            ),
            mcq(
                "A fashion trend spreads first among major global cities, then to smaller regional cities, and "
                "finally to nearby towns. This pattern is best described as",
                [
                    "A) hierarchical diffusion followed by contagious diffusion",
                    "B) relocation diffusion only",
                    "C) reverse distance decay",
                    "D) environmental determinism",
                ],
                0,
                [
                    "Initial movement among influential large cities follows an urban hierarchy.",
                    "Subsequent spread from regional centers to nearby towns depends more on proximity.",
                    "The sequence therefore combines hierarchical and contagious diffusion.",
                ],
                "hug-1.4-diffusion-pattern-b4",
                2,
            ),
            frq(
                "A national map suggests a region has high average income, but neighborhood maps reveal concentrated "
                "poverty within its cities. Explain how scale affects the observed pattern, name the relevant "
                "aggregation problem, and state one policy risk of relying only on the national-scale map.",
                [
                    "Compare what broad aggregation reveals with what fine spatial resolution reveals.",
                    "Identify the modifiable areal unit problem or ecological fallacy as appropriate.",
                    "Connect hidden within-region variation to resource allocation.",
                ],
                [
                    "At a broad scale, neighborhood differences are averaged into a high regional mean; finer-scale mapping exposes local clusters of poverty.",
                    "The result illustrates the modifiable areal unit problem because patterns change with the size and boundaries of aggregated units.",
                    "Officials relying only on the broad map could underfund housing, health, transit, or school programs in disadvantaged neighborhoods.",
                ],
                "hug-1.6-scale-maup-b4",
                3,
            ),
        ],
        45,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP Human Geography Unit 6 Set 4: Cities and Urban Land Use",
        HUG,
        "Original urban geography practice on models, suburbanization, segregation, infrastructure, and sustainability.",
        ["ap-human-geography", "unit-6", "cities", "urban-land-use", "set-4"],
        [
            mcq(
                "In the sector model of urban land use, high-income residential areas often extend outward from "
                "the central city in a wedge because",
                [
                    "A) growth follows transportation corridors and attractive amenities over time",
                    "B) every social group must live the same distance from the CBD",
                    "C) all industry is located in a uniform outer ring",
                    "D) the model assumes cities have multiple unrelated central business districts",
                ],
                0,
                [
                    "The sector model modifies a purely concentric pattern.",
                    "Transportation routes and environmental amenities channel outward development.",
                    "Once established, desirable residential sectors can extend outward along those axes.",
                ],
                "hug-6.5-sector-model-b4",
                2,
            ),
            frq(
                "A metropolitan region builds a light-rail line and permits high-density mixed-use housing around "
                "stations. Explain two ways transit-oriented development can reduce environmental impacts and one "
                "way it could contribute to displacement. Propose one policy response.",
                [
                    "Connect compact land use to travel behavior and infrastructure demand.",
                    "Trace accessibility improvements to land values and housing pressure.",
                    "Choose a policy that preserves access for lower-income residents.",
                ],
                [
                    "Dense mixed-use development can shorten trips and shift travel from private cars to transit, lowering fuel use and air pollution.",
                    "Concentrating growth can also limit outward sprawl and reduce conversion of farmland or habitat.",
                    "Improved access may raise rents and property values, displacing existing residents; inclusionary zoning, community land trusts, rent protections, or subsidized housing near stations can mitigate this effect.",
                ],
                "hug-6.8-transit-oriented-development-b4",
                3,
            ),
            mcq(
                "Which process most directly contributed to rapid suburbanization in the United States after World War II?",
                [
                    "A) Federal highway construction and mortgage policies favoring new suburban homes",
                    "B) Elimination of automobile ownership",
                    "C) Closure of all metropolitan manufacturing",
                    "D) A national ban on detached housing",
                ],
                0,
                [
                    "Postwar transportation and housing policy lowered costs for suburban commuters and buyers.",
                    "Highways expanded automobile access to peripheral land.",
                    "Federally supported mortgages facilitated home purchases, though discriminatory practices distributed benefits unequally.",
                ],
                "hug-6.3-postwar-suburbanization-b4",
                2,
            ),
            frq(
                "Two neighborhoods are separated by a highway. Neighborhood A has frequent buses, grocery stores, "
                "and a tree canopy; Neighborhood B has limited transit, no full-service grocery store, and much "
                "higher summer surface temperatures. Explain how infrastructure can produce spatial inequality, "
                "identify one measurable health consequence, and propose one geographically targeted intervention.",
                [
                    "Connect accessibility and environmental exposure to the built environment.",
                    "Name a health outcome and the data needed to compare neighborhoods.",
                    "Target the proposed intervention to a mapped need rather than offering a generic citywide policy.",
                ],
                [
                    "Past routing and investment decisions can isolate Neighborhood B, limit access to food and jobs, and create an urban heat island through pavement and low canopy.",
                    "Researchers could compare heat-related emergency visits, asthma rates, or food-insecurity prevalence while accounting for population size.",
                    "The city could prioritize shaded bus stops and frequent routes, subsidize a grocery site, cap and reconnect across the highway, or plant trees specifically in B's hottest blocks.",
                ],
                "hug-6.10-urban-spatial-inequality-b4",
                3,
            ),
        ],
        45,
        3,
    ),
    # AP English Language
    quiz(
        "AI Topic Exercises — AP English Language Set 4: Rhetorical Situations and Choices",
        LANG,
        "Original rhetorical analysis practice with short passages, audience, evidence, organization, and style.",
        ["ap-english-language", "rhetorical-analysis", "rhetorical-situation", "set-4"],
        [
            mcq(
                "Read this original passage: “We can call the library renovation an expense, and expenses are easy "
                "to postpone. Or we can call it what it is: an invitation—to the child who needs quiet, the job "
                "seeker who needs a connection, the neighbor who needs a room where belonging costs nothing.” "
                "The repeated clause beginning with “the” primarily serves to",
                [
                    "A) catalogue distinct community members who make the abstract claim concrete",
                    "B) concede that the renovation benefits only three people",
                    "C) replace the speaker's argument with statistical evidence",
                    "D) create uncertainty about the library's purpose",
                ],
                0,
                [
                    "Notice the parallel grammatical structure and the sequence of specific people.",
                    "The opening contrast reframes renovation from cost to investment in access.",
                    "The catalogue embodies that claim in varied community needs and broadens audience identification.",
                ],
                "lang-rhetoric-anaphora-catalogue-b4",
                2,
            ),
            frq(
                "An original mayoral address states: “Last summer, our river wore a green coat of algae. We posted "
                "warning signs; families turned back from the shore. Tonight I ask you to approve runoff controls "
                "not because regulation is pleasant, but because a river closed to children is the costliest policy "
                "of all.” Write a defensible rhetorical-analysis claim and explain how two choices advance the "
                "mayor's purpose for the council audience.",
                [
                    "Identify the speaker, immediate decision-making audience, purpose, and local exigence.",
                    "Select choices rather than merely labeling broad appeals.",
                    "Explain how each choice shapes the council's understanding of costs or responsibility.",
                ],
                [
                    "Model thesis: Addressing a council weighing runoff controls, the mayor turns visible local damage into a fiscal and moral argument, redefining the perceived burden of regulation as smaller than the communal cost of inaction.",
                    "The personification that the river “wore a green coat” makes pollution vivid and memorable, while the image of families turning away converts an environmental measure into lost public use.",
                    "The concession that regulation is not “pleasant” acknowledges the council's cost concerns, then the superlative “costliest” reverses their frame by presenting inaction as the more expensive choice.",
                ],
                "lang-rhetoric-mayor-river-b4",
                3,
            ),
            mcq(
                "A writer begins an essay on school start times with a student's predawn commute, then presents "
                "sleep research, addresses scheduling objections, and ends by returning to the same student's now "
                "later commute. The framing return most likely",
                [
                    "A) signals that the scientific evidence should be ignored",
                    "B) links the policy evidence back to a concrete human consequence",
                    "C) proves that every student has the same experience",
                    "D) changes the essay's audience from officials to researchers",
                ],
                1,
                [
                    "The essay moves from a representative experience to evidence and counterargument.",
                    "Returning to the opening figure creates structural closure.",
                    "It also shows how the proposed policy would alter the lived problem that introduced the issue.",
                ],
                "lang-rhetoric-framing-structure-b4",
                2,
            ),
            frq(
                "A conservation group must persuade rural landowners, not its existing donors, to join a voluntary "
                "wetland-restoration program. Recommend three concrete rhetorical choices for a one-page letter and "
                "explain how each responds to the audience and situation.",
                [
                    "Infer likely audience concerns without stereotyping all landowners.",
                    "Choose content, evidence, source, organization, or diction suited to voluntary participation.",
                    "Explain the audience effect of every recommendation.",
                ],
                [
                    "Open with a local landowner's brief account and shared values of stewardship, property continuity, and flood protection; a peer voice creates identification more effectively than donor-oriented celebration.",
                    "State compensation, time commitment, and property terms in a scannable list with a link to full details, directly reducing practical uncertainty that could block voluntary action.",
                    "Use local flood-loss and water-quality evidence from a named credible agency, then end with a low-pressure site-assessment invitation; relevant evidence establishes utility while the manageable next step respects autonomy.",
                ],
                "lang-rhetoric-audience-adaptation-b4",
                3,
            ),
        ],
        45,
        3,
    ),
    quiz(
        "AI Topic Exercises — AP English Language Set 4: Synthesis and Argument",
        LANG,
        "Original source-integration and argument practice emphasizing line of reasoning, qualification, and evidence.",
        ["ap-english-language", "synthesis", "argument", "evidence", "set-4"],
        [
            frq(
                "A city considers making downtown buses fare-free. Source A reports a 14% ridership increase in a "
                "six-month pilot; Source B warns that removing fares would reduce annual transit revenue by $3 "
                "million; Source C finds that service frequency predicts ridership more strongly than fare price; "
                "Source D describes a hospital worker whose two-bus commute consumes 9% of monthly income. Develop "
                "a nuanced thesis and outline how at least three sources could be synthesized rather than summarized.",
                [
                    "Take a position that defines conditions or priorities instead of treating the choice as purely binary.",
                    "Group sources by claims about access, ridership, service quality, and fiscal trade-offs.",
                    "Put sources into conversation by using one to qualify or complicate another.",
                ],
                [
                    "Model thesis: The city should adopt targeted fare-free service for low-income riders while protecting funding for frequent routes, because affordability is a real access barrier but free fares cannot compensate for unreliable service.",
                    "Use A's pilot increase with D's household example to connect aggregate ridership to equity, while acknowledging that one pilot does not establish a universal long-term effect.",
                    "Use C to qualify a blanket fare-free claim: frequency may produce larger ridership gains; then use B to argue that replacing lost revenue must be part of the policy so equity gains do not cause service cuts.",
                ],
                "lang-synthesis-transit-b4",
                4,
            ),
            mcq(
                "Which sentence most effectively integrates a source into an argument rather than merely dropping a quotation?",
                [
                    "A) A report says, “Trees cool streets.”",
                    "B) “Trees cool streets,” and that is the quotation.",
                    r"C) Because the county heat survey found blocks with mature canopy averaged \(4^\circ\text{C}\) cooler, targeted planting can function as heat infrastructure rather than decoration.",
                    "D) There are many quotations about trees and cities.",
                ],
                2,
                [
                    "Effective integration identifies a source's relevant evidence and explains its role.",
                    "Choice C supplies context, a specific finding, and an inference tied to the argument.",
                    "The other choices provide little attribution or explanation.",
                ],
                "lang-synthesis-source-integration-b4",
                2,
            ),
            mcq(
                "A student argues, “Because automation can displace some workers, governments should prohibit all "
                "workplace automation.” Which revision would most improve the line of reasoning?",
                [
                    "A) Repeat the claim with stronger absolute language.",
                    "B) Define which harms require intervention and weigh retraining, transition support, and productivity benefits before proposing limits.",
                    "C) Remove all acknowledgment of worker displacement.",
                    "D) Replace reasons with a rhetorical question.",
                ],
                1,
                [
                    "The original moves from a real concern to an unlimited policy without considering scope or alternatives.",
                    "A stronger argument defines criteria and evaluates consequences and competing values.",
                    "Qualification can make the position more defensible without abandoning concern for workers.",
                ],
                "lang-argument-qualification-b4",
                2,
            ),
            frq(
                "Write a position on whether institutions should preserve inefficient traditions because those "
                "traditions create community. Provide a defensible thesis, two distinct evidence categories, and "
                "a concession that genuinely limits the claim.",
                [
                    "Define what counts as meaningful community and what degree of inefficiency matters.",
                    "Use evidence from different domains, such as civic life, education, history, organizations, or observation.",
                    "Make the concession alter the policy rule rather than serving as a token sentence.",
                ],
                [
                    "Model thesis: Institutions should retain participatory traditions whose shared meaning cannot be reproduced cheaply, but they should redesign traditions that impose substantial exclusion, environmental harm, or opportunity cost.",
                    "One paragraph could use civic rituals such as in-person public deliberation to show how slower practices build trust and accountability; another could use a school or workplace custom whose burdens fall unequally to establish a threshold for reform.",
                    "Concession: efficiency metrics can miss belonging, yet tradition is not self-justifying; when affected members cannot participate or essential services suffer, preservation should yield to an accessible alternative.",
                ],
                "lang-argument-tradition-efficiency-b4",
                4,
            ),
        ],
        47,
        4,
    ),
    # AP English Literature
    quiz(
        "AI Topic Exercises — AP English Literature Set 4: Poetry and Drama",
        LIT,
        "Original close-reading practice on imagery, form, dramatic tension, characterization, and thematic complexity.",
        ["ap-english-literature", "poetry", "drama", "close-reading", "set-4"],
        [
            mcq(
                "Read these original lines: “At dawn the empty station keeps / one coin of moon beneath the rail; / "
                "the timetable, rain-softened, / promises every town but this.” The description of the timetable "
                "most strongly suggests",
                [
                    "A) confidence that travel will restore the speaker's past",
                    "B) tension between imagined possibility and present isolation",
                    "C) anger at inaccurate astronomical observation",
                    "D) comic relief from the station's crowd",
                ],
                1,
                [
                    "The station is empty and the timetable is damaged, establishing absence and delay.",
                    "Its “promise” extends outward to every town while excluding “this” place.",
                    "The personification therefore sharpens a contrast between routes of possibility and local isolation.",
                ],
                "lit-poetry-timetable-image-b4",
                2,
            ),
            frq(
                "Read this original stanza: “My mother labeled every jar— / PEACHES, BEANS, THE SUMMER'S LAST— / "
                "as if a name could hold the lid / against the dark beneath the house.” Develop a thesis about how "
                "the poet's choices create a complex attitude toward preservation, and support it with two details.",
                [
                    "Track the literal household act and its figurative implications.",
                    "Examine capitalization, naming, containment, and the final spatial image.",
                    "State an attitude with tension, such as affection joined to doubt or fear.",
                ],
                [
                    "Model thesis: The stanza treats preservation as both loving defiance and fragile illusion, honoring the mother's careful naming while recognizing that labels cannot permanently contain loss.",
                    "The capitalized labels make ordinary food into an archive, and “THE SUMMER'S LAST” expands canning into an attempt to preserve time itself.",
                    "The conditional “as if” undercuts that control, while the lid set against “dark beneath the house” turns the cellar into an image of decay or mortality pressing against domestic care.",
                ],
                "lit-poetry-preservation-b4",
                3,
            ),
            mcq(
                "In an original scene, a ruler asks, “Who locked the western gate?” Three advisers remain silent. "
                "The youngest says, “The wind, perhaps,” while holding the gate key behind his back. The stage "
                "direction primarily creates",
                [
                    "A) dramatic irony by letting the audience recognize concealment the ruler may not see",
                    "B) a reliable historical account of the weather",
                    "C) proof that the ruler ordered the gate locked",
                    "D) a shift from drama to omniscient narration",
                ],
                0,
                [
                    "The audience receives visual information not contained in the adviser's spoken excuse.",
                    "The hidden key contradicts “The wind, perhaps.”",
                    "That knowledge creates dramatic irony and tension around whether the ruler will discover the deception.",
                ],
                "lit-drama-stage-direction-irony-b4",
                2,
            ),
            frq(
                "In an original play, two siblings inherit a failing neighborhood theater. Mara wants to sell it "
                "to pay their father's debts; Eli wants to stage one final free performance. Write a defensible "
                "claim about how a playwright could use the theater setting and the siblings' conflict to explore "
                "inheritance. Include one staging choice and one recurring object.",
                [
                    "Treat inheritance as financial, emotional, and cultural rather than only as property.",
                    "Make the setting actively shape the conflict.",
                    "Explain how the staging choice and object change meaning across the scene.",
                ],
                [
                    "Model claim: By making the decaying theater both an unpaid debt and a shared public memory, the play can present inheritance as a burden whose value depends on whether the siblings can transform rather than merely keep it.",
                    "A staging choice could leave half the auditorium dark while Mara calculates debts under a work light and Eli tests the stage lights; their competing pools of light embody private liability versus public possibility.",
                    "A box-office ledger can recur first as proof of failure, then reveal notes about free community performances, complicating the father's legacy and motivating a compromise that preserves access without romanticizing insolvency.",
                ],
                "lit-drama-inheritance-setting-b4",
                4,
            ),
        ],
        46,
        4,
    ),
    quiz(
        "AI Topic Exercises — AP English Literature Set 4: Fiction and Literary Argument",
        LIT,
        "Original prose analysis and literary argument practice on perspective, symbols, structure, and complexity.",
        ["ap-english-literature", "fiction", "literary-argument", "prose-analysis", "set-4"],
        [
            mcq(
                "Read this original sentence: “Mr. Vale generously permitted the tenants to repair, at their own "
                "expense, the stairs he had neglected for eleven years.” The narrator's use of “generously” is best "
                "understood as",
                [
                    "A) sincere praise for Mr. Vale's charitable maintenance",
                    "B) verbal irony exposing exploitation disguised as benevolence",
                    "C) neutral technical language about a lease",
                    "D) uncertainty about who owns the stairs",
                ],
                1,
                [
                    "Compare the positive connotation of “generously” with the details that follow.",
                    "The tenants pay to fix a hazard the landlord neglected.",
                    "The mismatch creates verbal irony and directs criticism at his self-serving posture.",
                ],
                "lit-fiction-verbal-irony-b4",
                2,
            ),
            frq(
                "Read this original passage: “Nia had rehearsed the apology on the bus, polishing each sentence "
                "until it reflected no one. At the door, her brother's shoes were still muddy beside hers. She "
                "stepped over them, entered, and said only his name.” Develop a thesis about how narration and "
                "imagery reveal Nia's changing approach to reconciliation.",
                [
                    "Contrast prepared language with the action at the threshold.",
                    "Interpret the figurative verb “polishing” and the paired shoes.",
                    "Explain the effect of reducing the final speech to a name.",
                ],
                [
                    "Model thesis: The passage moves Nia from self-protective performance toward vulnerable recognition, using reflective language that erases identity and concrete shared objects that restore it.",
                    "Her polished sentences “reflected no one,” suggesting that rhetorical perfection has made the apology impersonal and evasive.",
                    "The muddy shoes placed together recall an imperfect shared life; stepping across the threshold and speaking only her brother's name abandons control for direct acknowledgment, leaving reconciliation uncertain but genuine.",
                ],
                "lit-fiction-reconciliation-b4",
                3,
            ),
            mcq(
                "A novel opens with a character burning an unopened letter, then ends years later with the character "
                "carefully preserving an empty envelope. This structural parallel most likely emphasizes",
                [
                    "A) an unchanged indifference to communication",
                    "B) a transformation in how the character values possibility, absence, or memory",
                    "C) proof that both objects contain identical messages",
                    "D) the narrator's inability to distinguish fire from paper",
                ],
                1,
                [
                    "The opening and ending actions deliberately mirror one another.",
                    "Destruction of an unread message contrasts with preservation of an object that contains no message.",
                    "The inversion invites readers to measure a change in the character's relation to memory, absence, or unrealized possibility.",
                ],
                "lit-fiction-frame-transformation-b4",
                2,
            ),
            frq(
                "Choose a novel or play in which a character's attempt to control a story—about the past, a family, "
                "a community, or the self—produces both power and blindness. Present a defensible literary-argument "
                "thesis, identify two different kinds of evidence, and explain how the contradiction contributes "
                "to the work's meaning.",
                [
                    "Name the character's narrative and the audience it seeks to influence.",
                    "Select evidence from distinct moments, relationships, symbols, or formal choices.",
                    "Explain both the practical power of the story and what it prevents the character from perceiving.",
                ],
                [
                    "Model framework: In the chosen work, the character's constructed account secures authority by organizing uncertainty for others, yet dependence on that account makes contradictory people and memories illegible; the work thus portrays narrative control as potent but self-defeating.",
                    "One evidence paragraph can analyze an early scene in which the story persuades or unifies others; another can examine a later contradiction, excluded voice, recurring symbol, or structural reversal that exposes its cost.",
                    "The conclusion should show how power and blindness coexist: the narrative works socially precisely because it simplifies reality, but that simplification produces the recognition, rupture, or tragedy that defines the work's larger meaning.",
                ],
                "lit-argument-narrative-control-b4",
                4,
            ),
        ],
        48,
        4,
    ),
]


if __name__ == "__main__":
    print(len(QUIZZES), sum(len(q["items"]) for q in QUIZZES))
