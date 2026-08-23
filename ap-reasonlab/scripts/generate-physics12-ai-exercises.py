#!/usr/bin/env python3
"""Batch-generate CED-aligned AI topic exercises for AP Physics 1 & 2."""
import json
import random
import string
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
GEN_NOTE = (
    "Original AI-generated practice aligned to College Board AP Physics 1 & 2 CED topics. "
    "Not College Board exam verbatim. Includes process steps and answer keys for study. · 2026-08-23"
)
BASE_TAGS = ["ai-topic-exercises", "ced-aligned", "generated", "with-solutions"]


def rid(prefix: str) -> str:
    h = format(random.getrandbits(32), "x")[:8]
    s = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{h}-{s}"


def mcq(prompt, choices, answer_idx, steps, concept_id=None, tier=2):
    letter = "ABCD"[answer_idx]
    ans = choices[answer_idx]
    return {
        "id": rid("m-item"),
        "format": "mcq",
        "prompt": prompt,
        "choices": choices,
        "conceptId": concept_id,
        "conceptIntro": None,
        "difficultyTier": tier,
        "visibleSteps": steps,
        "blankSteps": [f"Answer key: {letter}) {ans.split(') ', 1)[-1] if ') ' in ans else ans}"],
        "hints": [
            "Eliminate choices that violate definitions or limiting cases.",
            "Check units and vector directions before selecting.",
            f"Final check: {letter}) {ans.split(') ', 1)[-1] if ') ' in ans else ans}",
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
            "Write the governing equation before numbers.",
            "Check units and signs.",
            "Answers are in blankSteps.",
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


P1 = "AP Physics 1"
P2 = "AP Physics 2"

QUIZZES = [
    # ── AP Physics 1 ──────────────────────────────────────────────
    quiz(
        "AI Topic Exercises — Unit 1: Kinematics",
        P1,
        "CED Unit 1: motion graphs, 1-D kinematics, projectiles — process + answers.",
        ["unit-1", "kinematics", "projectiles"],
        [
            frq(
                "A car starts from rest and accelerates uniformly at $2.0\\,\\mathrm{m/s^2}$ for $6.0\\,\\mathrm{s}$. Find final speed and displacement.",
                [
                    "$v=v_0+at=0+2(6)=12\\,\\mathrm{m/s}$.",
                    "$\\Delta x=v_0 t+\\tfrac12 at^2=\\tfrac12(2)(36)=36\\,\\mathrm{m}$.",
                ],
                ["$v=12\\,\\mathrm{m/s}$; $\\Delta x=36\\,\\mathrm{m}$."],
                "kinematics",
            ),
            mcq(
                "A ball is thrown straight up with initial speed $20\\,\\mathrm{m/s}$ ($g=10$). Which is the maximum height?",
                [
                    "A) $10\\,\\mathrm{m}$",
                    "B) $20\\,\\mathrm{m}$",
                    "C) $30\\,\\mathrm{m}$",
                    "D) $40\\,\\mathrm{m}$",
                ],
                1,
                [
                    "At top $v=0$: $0=v_0^2-2gH$ ⇒ $H=v_0^2/(2g)$.",
                    "$H=400/20=20\\,\\mathrm{m}$.",
                ],
            ),
            frq(
                "A projectile is launched horizontally at $15\\,\\mathrm{m/s}$ from a cliff $45\\,\\mathrm{m}$ high ($g=10$). Find time to ground and horizontal range.",
                [
                    "Vertical: $y=\\tfrac12 gt^2$ ⇒ $t=\\sqrt{2y/g}=\\sqrt{9}=3.0\\,\\mathrm{s}$.",
                    "Horizontal: $x=v_x t=15(3)=45\\,\\mathrm{m}$.",
                ],
                ["$t=3.0\\,\\mathrm{s}$; range $=45\\,\\mathrm{m}$."],
            ),
            mcq(
                "On a velocity–time graph, the slope of the line represents:",
                [
                    "A) Displacement",
                    "B) Acceleration",
                    "C) Speed always",
                    "D) Jerk",
                ],
                1,
                ["Slope $\\Delta v/\\Delta t$ is acceleration by definition."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Dynamics & Free-Body Diagrams",
        P1,
        "CED Unit 2: Newton’s laws, friction, inclined planes, systems.",
        ["unit-2", "dynamics", "newton", "fbd"],
        [
            frq(
                "A $10\\,\\mathrm{kg}$ block on a horizontal surface has $\\mu_k=0.30$. A horizontal push $F=50\\,\\mathrm{N}$ is applied ($g=10$). Find acceleration.",
                [
                    "Normal $N=mg=100\\,\\mathrm{N}$; friction $f_k=\\mu_k N=30\\,\\mathrm{N}$.",
                    "Net $F_{\\mathrm{net}}=50-30=20\\,\\mathrm{N}$ ⇒ $a=F/m=2.0\\,\\mathrm{m/s^2}$.",
                ],
                ["$a=2.0\\,\\mathrm{m/s^2}$."],
            ),
            mcq(
                "Two blocks ($3\\,\\mathrm{kg}$ and $5\\,\\mathrm{kg}$) are pushed together on a frictionless surface by $24\\,\\mathrm{N}$ on the lighter block. The force the lighter block exerts on the heavier block is:",
                [
                    "A) $9\\,\\mathrm{N}$",
                    "B) $15\\,\\mathrm{N}$",
                    "C) $24\\,\\mathrm{N}$",
                    "D) $40\\,\\mathrm{N}$",
                ],
                1,
                [
                    "System $a=F/(3+5)=24/8=3\\,\\mathrm{m/s^2}$.",
                    "On $5\\,\\mathrm{kg}$ block: contact force $=ma=5(3)=15\\,\\mathrm{N}$.",
                ],
            ),
            frq(
                "A $4.0\\,\\mathrm{kg}$ hanging mass is connected over a frictionless pulley to a $6.0\\,\\mathrm{kg}$ cart on a frictionless track. Find acceleration and tension ($g=10$).",
                [
                    "System: $(6+4)a=4g$ ⇒ $a=4\\,\\mathrm{m/s^2}$.",
                    "On hanging mass: $mg-T=ma$ ⇒ $T=4(10-4)=24\\,\\mathrm{N}$.",
                ],
                ["$a=4.0\\,\\mathrm{m/s^2}$; $T=24\\,\\mathrm{N}$."],
            ),
            mcq(
                "An elevator accelerates upward at $2\\,\\mathrm{m/s^2}$. A $50\\,\\mathrm{kg}$ person ($g=10$) feels an apparent weight of:",
                [
                    "A) $400\\,\\mathrm{N}$",
                    "B) $500\\,\\mathrm{N}$",
                    "C) $600\\,\\mathrm{N}$",
                    "D) $700\\,\\mathrm{N}$",
                ],
                2,
                [
                    "Scale reads normal force: $N=m(g+a)=50(12)=600\\,\\mathrm{N}$.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 3: Circular Motion & Gravitation",
        P1,
        "CED Unit 3: centripetal force, orbits, universal gravitation (algebra-based).",
        ["unit-3", "circular-motion", "gravitation"],
        [
            frq(
                "A $0.50\\,\\mathrm{kg}$ ball on a $1.0\\,\\mathrm{m}$ string moves in a horizontal circle at $4.0\\,\\mathrm{m/s}$. Find centripetal force (tension).",
                [
                    "$F_c=mv^2/r=(0.50)(16)/1.0=8.0\\,\\mathrm{N}$.",
                    "Tension provides centripetal force (ideal horizontal circle model).",
                ],
                ["$F_c=8.0\\,\\mathrm{N}$."],
            ),
            mcq(
                "A satellite in a circular orbit has speed $v$ at radius $r$. If the radius doubles (same central mass), the new orbital speed is:",
                [
                    "A) $v/2$",
                    "B) $v/\\sqrt{2}$",
                    "C) $v\\sqrt{2}$",
                    "D) $2v$",
                ],
                1,
                [
                    "Circular orbit: $v=\\sqrt{GM/r}$ ⇒ $v\\propto r^{-1/2}$.",
                    "Double $r$ ⇒ speed divided by $\\sqrt{2}$.",
                ],
            ),
            frq(
                "Two $1000\\,\\mathrm{kg}$ spheres are $1.0\\,\\mathrm{m}$ apart center-to-center. Find gravitational force ($G=6.67\\times10^{-11}$).",
                [
                    "$F=Gm_1m_2/r^2=(6.67\\times10^{-11})(10^6)/1=6.67\\times10^{-5}\\,\\mathrm{N}$.",
                ],
                ["$F\\approx6.7\\times10^{-5}\\,\\mathrm{N}$, attractive."],
            ),
            mcq(
                "In an elliptical orbit, which quantity is constant for the satellite?",
                [
                    "A) Speed",
                    "B) Kinetic energy",
                    "C) Total mechanical energy",
                    "D) Gravitational potential energy",
                ],
                2,
                [
                    "Only total mechanical energy (and angular momentum) stay constant in a closed orbit.",
                    "Speed and KE vary — fastest at periapsis.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Work, Energy & Power",
        P1,
        "CED Unit 4: work-energy theorem, conservation, power, potential energy.",
        ["unit-4", "energy", "work", "power"],
        [
            frq(
                "A $2.0\\,\\mathrm{kg}$ object slides down a frictionless ramp from height $5.0\\,\\mathrm{m}$ ($g=10$). Find speed at bottom.",
                [
                    "Conservation: $mgh=\\tfrac12 mv^2$ ⇒ $v=\\sqrt{2gh}=\\sqrt{100}=10\\,\\mathrm{m/s}$.",
                ],
                ["$v=10\\,\\mathrm{m/s}$."],
            ),
            frq(
                "A spring ($k=200\\,\\mathrm{N/m}$) is compressed $0.20\\,\\mathrm{m}$ and launches a $0.50\\,\\mathrm{kg}$ block on a frictionless surface. Find launch speed.",
                [
                    "$\\tfrac12 kx^2=\\tfrac12 mv^2$.",
                    "$v=x\\sqrt{k/m}=0.20\\sqrt{400}=4.0\\,\\mathrm{m/s}$.",
                ],
                ["$v=4.0\\,\\mathrm{m/s}$."],
            ),
            mcq(
                "Negative work done by friction on a sliding block means:",
                [
                    "A) Friction adds energy to the block",
                    "B) Mechanical energy of the block decreases",
                    "C) Normal force does negative work",
                    "D) Block accelerates forward",
                ],
                1,
                [
                    "Friction opposes motion ⇒ work by friction is negative.",
                    "That removes mechanical energy (often to thermal).",
                ],
            ),
            frq(
                "A motor lifts a $100\\,\\mathrm{kg}$ load $12\\,\\mathrm{m}$ in $4.0\\,\\mathrm{s}$ ($g=10$). Find average power.",
                [
                    "Work $=mgh=100(10)(12)=12000\\,\\mathrm{J}$.",
                    "$P=W/t=12000/4=3000\\,\\mathrm{W}$.",
                ],
                ["$P=3000\\,\\mathrm{W}$ (3.0 kW)."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Momentum & Collisions",
        P1,
        "CED Unit 5: impulse, conservation, elastic/inelastic collisions.",
        ["unit-5", "momentum", "impulse", "collisions"],
        [
            frq(
                "A $0.20\\,\\mathrm{kg}$ ball moving at $30\\,\\mathrm{m/s}$ is caught by a glove in $0.10\\,\\mathrm{s}$. Find average force on the ball.",
                [
                    "$\\Delta p=0-0.20(30)=-6.0\\,\\mathrm{kg\\cdot m/s}$.",
                    "$F_{\\mathrm{avg}}=\\Delta p/\\Delta t=-60\\,\\mathrm{N}$ (opposite initial motion).",
                ],
                ["$|F|=60\\,\\mathrm{N}$ opposing initial velocity."],
            ),
            frq(
                "A $2.0\\,\\mathrm{kg}$ cart at $4.0\\,\\mathrm{m/s}$ collides and sticks to a $1.0\\,\\mathrm{kg}$ cart at rest. Find final speed and fraction of KE lost.",
                [
                    "Momentum: $(2)(4)=(2+1)v$ ⇒ $v=8/3\\approx2.67\\,\\mathrm{m/s}$.",
                    "$KE_i=\\tfrac12(2)(16)=16\\,\\mathrm{J}$; $KE_f=\\tfrac12(3)(8/3)^2\\approx10.7\\,\\mathrm{J}$.",
                    "Fraction lost $=(16-10.7)/16\\approx0.33$.",
                ],
                ["$v\\approx2.67\\,\\mathrm{m/s}$; about 33% of KE lost (perfectly inelastic)."],
            ),
            mcq(
                "In an isolated system, the total momentum is conserved when:",
                [
                    "A) Only elastic collisions occur",
                    "B) No external net force acts on the system",
                    "C) Kinetic energy is conserved",
                    "D) Friction is zero everywhere",
                ],
                1,
                ["Conservation of momentum requires zero external net impulse."],
            ),
            frq(
                "Object A ($3\\,\\mathrm{kg}$, $+2\\,\\mathrm{m/s}$) collides elastically with object B ($1\\,\\mathrm{kg}$, $-4\\,\\mathrm{m/s}$), one-dimensional. Find final velocities.",
                [
                    "Momentum: $6-4=3v_A+v_B$ ⇒ $v_B=2-3v_A$.",
                    "Elastic 1-D: relative speed same before/after: $v_B-v_A=6$.",
                    "Substitute: $2-3v_A-v_A=6$ ⇒ $v_A=-1\\,\\mathrm{m/s}$, $v_B=+5\\,\\mathrm{m/s}$.",
                ],
                ["$v_A=-1\\,\\mathrm{m/s}$; $v_B=+5\\,\\mathrm{m/s}$."],
                tier=3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 6: Simple Harmonic Motion",
        P1,
        "CED Unit 6: springs, pendulums, energy in SHM, period relationships.",
        ["unit-6", "shm", "springs", "pendulum"],
        [
            frq(
                "A mass-spring system has $m=0.40\\,\\mathrm{kg}$, $k=160\\,\\mathrm{N/m}$. Find period and maximum speed if amplitude $A=0.10\\,\\mathrm{m}$.",
                [
                    "$\\omega=\\sqrt{k/m}=\\sqrt{400}=20\\,\\mathrm{rad/s}$.",
                    "$T=2\\pi/\\omega=\\pi/10\\approx0.314\\,\\mathrm{s}$.",
                    "$v_{\\max}=A\\omega=0.10(20)=2.0\\,\\mathrm{m/s}$.",
                ],
                ["$T\\approx0.31\\,\\mathrm{s}$; $v_{\\max}=2.0\\,\\mathrm{m/s}$."],
            ),
            mcq(
                "Doubling the mass on a horizontal frictionless spring (same $k$) changes the period by:",
                [
                    "A) Stays the same",
                    "B) Multiplies by $\\sqrt{2}$",
                    "C) Multiplies by 2",
                    "D) Divides by 2",
                ],
                1,
                ["$T=2\\pi\\sqrt{m/k}$ ⇒ $T\\propto\\sqrt{m}$."],
            ),
            frq(
                "A simple pendulum has length $L=1.0\\,\\mathrm{m}$ ($g=10$). Find period for small angles.",
                [
                    "$T=2\\pi\\sqrt{L/g}=2\\pi\\sqrt{0.1}\\approx1.99\\,\\mathrm{s}$.",
                ],
                ["$T\\approx2.0\\,\\mathrm{s}$."],
            ),
            mcq(
                "At maximum displacement in SHM, which statement is true?",
                [
                    "A) Kinetic energy is maximum",
                    "B) Potential energy is minimum",
                    "C) Acceleration magnitude is maximum",
                    "D) Net force is zero",
                ],
                2,
                [
                    "At $|x|=A$, speed is zero but $|a|=\\omega^2 A$ is maximum.",
                    "Potential energy is maximum there.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 7: Torque & Rotational Motion",
        P1,
        "CED Unit 7: torque, rotational inertia, rolling, angular momentum (algebra-based).",
        ["unit-7", "torque", "rotation", "angular-momentum"],
        [
            frq(
                "A $30\\,\\mathrm{N}$ force is applied $0.50\\,\\mathrm{m}$ from a pivot at $90^\\circ$. Find torque about the pivot.",
                [
                    "$\\tau=rF\\sin90^\\circ=0.50(30)=15\\,\\mathrm{N\\cdot m}$.",
                ],
                ["$\\tau=15\\,\\mathrm{N\\cdot m}$."],
            ),
            frq(
                "A uniform rod ($M=6.0\\,\\mathrm{kg}$, $L=2.0\\,\\mathrm{m}$) is pivoted at one end horizontally. Find torque due to weight about the pivot ($g=10$).",
                [
                    "Weight acts at center of mass $L/2$ from pivot.",
                    "$\\tau=Mg(L/2)=6(10)(1)=60\\,\\mathrm{N\\cdot m}$ (clockwise if rod horizontal to the right).",
                ],
                ["$\\tau=60\\,\\mathrm{N\\cdot m}$ about pivot."],
            ),
            mcq(
                "A disk and a hoop of equal mass and radius start from rest and roll without slipping down the same incline. Which reaches the bottom first?",
                [
                    "A) The hoop",
                    "B) The disk",
                    "C) They arrive together",
                    "D) Depends only on mass",
                ],
                1,
                [
                    "Smaller rotational inertia ⇒ less energy in rotation ⇒ greater translational speed.",
                    "Disk ($I=\\tfrac12 MR^2$) beats hoop ($I=MR^2$).",
                ],
            ),
            frq(
                "A student on a frictionless rotating stool ($I=3.0\\,\\mathrm{kg\\cdot m^2}$) spins at $2.0\\,\\mathrm{rad/s}$ and pulls arms in, reducing $I$ to $1.5\\,\\mathrm{kg\\cdot m^2}$. Find new angular speed.",
                [
                    "Conservation of $L$: $I_i\\omega_i=I_f\\omega_f$.",
                    "$\\omega_f=(3)(2)/1.5=4.0\\,\\mathrm{rad/s}$.",
                ],
                ["$\\omega_f=4.0\\,\\mathrm{rad/s}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 8: Fluids Extended",
        P1,
        "CED Unit 8 extended: hydrostatics, buoyancy, Pascal, manometers — complements Fluids Core set.",
        ["unit-8", "fluids", "hydrostatics", "buoyancy", "pascal"],
        [
            frq(
                "A U-tube manometer connects a gas tank to the atmosphere. The fluid is mercury ($\\rho=13600\\,\\mathrm{kg/m^3}$, $g=10$). The mercury level is $0.20\\,\\mathrm{m}$ higher on the open side. Find gauge pressure of the gas.",
                [
                    "$P_{\\mathrm{gas}}=P_{\\mathrm{atm}}+\\rho g h$ (open side higher ⇒ gas pushes harder).",
                    "Gauge $=\\rho gh=13600(10)(0.20)=2.72\\times10^4\\,\\mathrm{Pa}$.",
                ],
                ["Gauge pressure $=2.72\\times10^4\\,\\mathrm{Pa}$ (27.2 kPa)."],
                "m-concept-mt5b900q-bpm0p",
            ),
            frq(
                "A hydraulic lift has input piston area $4.0\\,\\mathrm{cm^2}$ and output area $100\\,\\mathrm{cm^2}$. If $F_1=50\\,\\mathrm{N}$, find $F_2$ and explain displacement trade-off.",
                [
                    "Pascal: $P_1=P_2$ ⇒ $F_2=F_1(A_2/A_1)=50(25)=1250\\,\\mathrm{N}$.",
                    "Volume conservation: $d_2=d_1(A_1/A_2)$ — large force, small output displacement.",
                ],
                ["$F_2=1250\\,\\mathrm{N}$; output moves $1/25$ the input distance."],
                "m-concept-mt5b900q-q2lhk",
            ),
            mcq(
                "An object weighs $80\\,\\mathrm{N}$ in air and $60\\,\\mathrm{N}$ when fully submerged in water. Its buoyant force is:",
                [
                    "A) $20\\,\\mathrm{N}$ upward",
                    "B) $60\\,\\mathrm{N}$ upward",
                    "C) $80\\,\\mathrm{N}$ downward",
                    "D) $140\\,\\mathrm{N}$ upward",
                ],
                0,
                [
                    "Apparent weight $=W-F_B$ ⇒ $F_B=W-W_{\\mathrm{app}}=80-60=20\\,\\mathrm{N}$.",
                ],
            ),
            frq(
                "Oil ($\\rho=800\\,\\mathrm{kg/m^3}$) floats on water in a container. A block of wood ($\\rho=600$) floats in the oil layer. If the wood displaces $0.50\\,\\mathrm{m^3}$ of oil, find the buoyant force ($g=10$).",
                [
                    "Floating in oil: $F_B=\\rho_{\\mathrm{oil}} g V_{\\mathrm{disp}}$.",
                    "$F_B=800(10)(0.50)=4000\\,\\mathrm{N}$ upward.",
                ],
                ["$F_B=4000\\,\\mathrm{N}$."],
                "m-concept-ms2oed34-vvr1o",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Physics 1 Mixed Challenge",
        P1,
        "Cross-unit Physics 1 challenges linking kinematics, forces, energy, and rotation.",
        ["mixed", "challenge", "algebra-based"],
        [
            frq(
                "A block slides down a $37^\\circ$ incline of length $5.0\\,\\mathrm{m}$ with $\\mu_k=0.20$ ($g=10$, $\\sin37^\\circ=0.60$, $\\cos37^\\circ=0.80$). Starting from rest, find speed at bottom using energy.",
                [
                    "$\\Delta U=mgh=mgL\\sin37^\\circ$; work by friction $=-\\mu_k mg\\cos37^\\circ\\,L$.",
                    "$\\tfrac12 mv^2=mgL(\\sin37^\\circ-\\mu_k\\cos37^\\circ)=mgL(0.60-0.16)=mgL(0.44)$.",
                    "$v=\\sqrt{2gL(0.44)}=\\sqrt{2(10)(5)(0.44)}=\\sqrt{44}\\approx6.6\\,\\mathrm{m/s}$.",
                ],
                ["$v\\approx6.6\\,\\mathrm{m/s}$."],
                tier=3,
            ),
            mcq(
                "A planet has twice Earth’s radius but the same surface $g$. Its mass compared to Earth’s is:",
                [
                    "A) Same",
                    "B) 2×",
                    "C) 4×",
                    "D) 8×",
                ],
                2,
                [
                    "$g=GM/R^2$. Same $g$ with double $R$ ⇒ $M\\propto R^2$.",
                    "Mass is 4× Earth’s.",
                ],
            ),
            frq(
                "Two springs in parallel ($k_1=100$, $k_2=300\\,\\mathrm{N/m}$) support a $0.50\\,\\mathrm{kg}$ mass. Find effective spring constant and period.",
                [
                    "Parallel: $k_{\\mathrm{eq}}=400\\,\\mathrm{N/m}$.",
                    "$T=2\\pi\\sqrt{m/k}=2\\pi\\sqrt{0.50/400}=2\\pi/28.3\\approx0.22\\,\\mathrm{s}$.",
                ],
                ["$k_{\\mathrm{eq}}=400\\,\\mathrm{N/m}$; $T\\approx0.22\\,\\mathrm{s}$."],
            ),
        ],
        minutes=50,
    ),
    # ── AP Physics 2 ──────────────────────────────────────────────
    quiz(
        "AI Topic Exercises — Unit 9: Thermodynamics",
        P2,
        "CED Unit 9: heat, ideal gas, first law, engines, radiation laws.",
        ["unit-9", "thermodynamics", "heat", "ideal-gas"],
        [
            frq(
                "How much heat is needed to raise $2.0\\,\\mathrm{kg}$ of water from $20^\\circ\\mathrm{C}$ to $80^\\circ\\mathrm{C}$? ($c=4186\\,\\mathrm{J/kg\\cdot K}$)",
                [
                    "$Q=mc\\Delta T=2(4186)(60)=5.02\\times10^5\\,\\mathrm{J}$.",
                ],
                ["$Q\\approx5.0\\times10^5\\,\\mathrm{J}$ (502 kJ)."],
                "p2-thermo",
            ),
            frq(
                "An ideal gas at $300\\,\\mathrm{K}$ and $2.0\\,\\mathrm{atm}$ occupies $4.0\\,\\mathrm{L}$. Find moles ($R=8.31\\,\\mathrm{J/mol\\cdot K}$, $1\\,\\mathrm{atm\\cdot L\\approx101\\,J}$).",
                [
                    "$n=PV/(RT)$. Using $PV=2(101)(4)=808\\,\\mathrm{J}$ in SI-like units.",
                    "$n=808/(8.31\\cdot300)\\approx0.32\\,\\mathrm{mol}$.",
                ],
                ["$n\\approx0.32\\,\\mathrm{mol}$."],
                "p2-thermo",
            ),
            mcq(
                "In the first law $\\Delta U=Q-W$, positive $W$ means:",
                [
                    "A) Work done on the system",
                    "B) Work done by the system",
                    "C) Heat leaves the system",
                    "D) Internal energy decreases always",
                ],
                1,
                ["AP convention: $W$ is work done BY the system on surroundings."],
            ),
            frq(
                "A heat engine absorbs $500\\,\\mathrm{J}$ from a hot reservoir and rejects $350\\,\\mathrm{J}$ to a cold reservoir each cycle. Find work output and efficiency.",
                [
                    "$W=Q_H-Q_C=150\\,\\mathrm{J}$.",
                    "$e=W/Q_H=150/500=0.30$ (30%).",
                ],
                ["$W=150\\,\\mathrm{J}$; $e=30\\%$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 13: Geometric Optics",
        P2,
        "CED Unit 13: reflection, refraction, mirrors, thin lenses, ray diagrams.",
        ["unit-13", "optics", "lenses", "refraction"],
        [
            frq(
                "Light enters glass ($n=1.50$) from air ($n=1.00$) at incident angle $40^\\circ$. Find refracted angle.",
                [
                    "$n_1\\sin\\theta_1=n_2\\sin\\theta_2$.",
                    "$\\sin\\theta_2=(1.00)\\sin40^\\circ/1.50=0.643/1.50\\approx0.429$.",
                    "$\\theta_2\\approx\\arcsin(0.429)\\approx25^\\circ$.",
                ],
                ["$\\theta_2\\approx25^\\circ$ (toward normal)."],
                "p2-geometric-optics",
            ),
            frq(
                "An object is placed $30\\,\\mathrm{cm}$ from a converging lens with $f=10\\,\\mathrm{cm}$. Find image distance and magnification.",
                [
                    "$1/f=1/d_o+1/d_i$ ⇒ $1/10=1/30+1/d_i$.",
                    "$1/d_i=1/10-1/30=2/30$ ⇒ $d_i=15\\,\\mathrm{cm}$ (real).",
                    "$m=-d_i/d_o=-15/30=-0.50$ (inverted, half size).",
                ],
                ["$d_i=15\\,\\mathrm{cm}$ real; $m=-0.50$."],
            ),
            mcq(
                "Total internal reflection can occur when light travels from:",
                [
                    "A) Low $n$ to high $n$ at any angle",
                    "B) High $n$ to low $n$ beyond the critical angle",
                    "C) Vacuum to glass only",
                    "D) Any medium to air at $0^\\circ$",
                ],
                1,
                [
                    "Need $n_1>n_2$ and $\\theta_i>\\theta_c$ where $\\sin\\theta_c=n_2/n_1$.",
                ],
            ),
            frq(
                "A concave mirror has $f=12\\,\\mathrm{cm}$. An object is at $36\\,\\mathrm{cm}$. Locate the image and state whether it is real or virtual.",
                [
                    "$1/12=1/36+1/d_i$ ⇒ $1/d_i=1/12-1/36=2/36$.",
                    "$d_i=18\\,\\mathrm{cm}$ positive ⇒ real, inverted image.",
                ],
                ["Real image at $18\\,\\mathrm{cm}$ in front of mirror."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 14: Waves & Sound",
        P2,
        "CED Unit 14: wave speed, standing waves, beats, Doppler (qualitative + quantitative).",
        ["unit-14", "waves", "sound", "standing-waves"],
        [
            frq(
                "A wave has frequency $440\\,\\mathrm{Hz}$ and wavelength $0.77\\,\\mathrm{m}$ in air. Find wave speed.",
                [
                    "$v=f\\lambda=440(0.77)\\approx340\\,\\mathrm{m/s}$.",
                ],
                ["$v\\approx340\\,\\mathrm{m/s}$."],
                "m-concept-mt5b900q-sa63r",
            ),
            frq(
                "A string of length $0.85\\,\\mathrm{m}$ fixed at both ends has fundamental frequency $200\\,\\mathrm{Hz}$. Find wave speed on the string.",
                [
                    "Fundamental: $f_1=v/(2L)$ ⇒ $v=2Lf_1=2(0.85)(200)=340\\,\\mathrm{m/s}$.",
                ],
                ["$v=340\\,\\mathrm{m/s}$."],
                "m-concept-mt5b900q-yovru",
            ),
            mcq(
                "A closed-end air column of length $L$ has its first harmonic (fundamental) at:",
                [
                    "A) $v/(2L)$",
                    "B) $v/(4L)$",
                    "C) $v/L$",
                    "D) $2v/L$",
                ],
                1,
                ["Closed pipe: quarter-wave pattern ⇒ $f_1=v/(4L)$ (odd harmonics only)."],
            ),
            frq(
                "Two tuning forks produce 512 Hz and 514 Hz. What beat frequency is heard?",
                [
                    "Beat frequency $=|f_1-f_2|=|512-514|=2\\,\\mathrm{Hz}$.",
                ],
                ["Beat frequency $=2\\,\\mathrm{Hz}$."],
                "m-concept-mt5b900q-a8idc",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 14: Physical Optics & Interference",
        P2,
        "CED Unit 14: double-slit, diffraction, thin films, polarization.",
        ["unit-14", "physical-optics", "interference", "diffraction"],
        [
            frq(
                "In a double-slit experiment, slit spacing $d=0.20\\,\\mathrm{mm}$ and $\\lambda=600\\,\\mathrm{nm}$. Find angle to first-order bright fringe ($m=1$).",
                [
                    "$d\\sin\\theta=m\\lambda$ ⇒ $\\sin\\theta=\\lambda/d=600\\times10^{-9}/(0.20\\times10^{-3})=0.003$.",
                    "$\\theta\\approx0.003\\,\\mathrm{rad}\\approx0.17^\\circ$.",
                ],
                ["$\\theta\\approx0.17^\\circ$ (small-angle: $\\theta\\approx0.003\\,\\mathrm{rad}$)."],
                "m-concept-mt5b900q-xt9db",
            ),
            mcq(
                "Single-slit diffraction minima satisfy (slit width $a$, order $m\\neq0$):",
                [
                    "A) $a\\sin\\theta=m\\lambda$",
                    "B) $d\\sin\\theta=m\\lambda$",
                    "C) $a\\cos\\theta=m\\lambda$",
                    "D) $\\lambda/a=\\sin\\theta$ only for $m=0$",
                ],
                0,
                ["Dark fringes: path difference condition $a\\sin\\theta=m\\lambda$, $m=\\pm1,\\pm2,\\ldots$"],
            ),
            frq(
                "Unpolarized light of intensity $I_0$ passes through two ideal polarizers whose transmission axes are $60^\\circ$ apart. Find transmitted intensity (Malus).",
                [
                    "After first polarizer: $I_1=I_0/2$.",
                    "Malus: $I_2=I_1\\cos^2 60^\\circ=(I_0/2)(1/4)=I_0/8$.",
                ],
                ["$I=I_0/8$."],
                "m-concept-mt5b900q-qdbgs",
            ),
            mcq(
                "Thin-film interference with one $180^\\circ$ phase shift on reflection from a higher-index medium means:",
                [
                    "A) Constructive interference needs half-wavelength path difference only",
                    "B) Effective path difference includes the $\\lambda/2$ shift",
                    "C) No fringes can form",
                    "D) Polarization is required",
                ],
                1,
                [
                    "Count phase reversal on reflection when comparing path difference to $\\lambda/2$ steps.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 15: Photons & Photoelectric Effect",
        P2,
        "CED Unit 15: photon energy, photoelectric effect, atomic spectra intro.",
        ["unit-15", "modern", "photon", "photoelectric"],
        [
            frq(
                "Find photon energy for $\\lambda=400\\,\\mathrm{nm}$ ($h=6.63\\times10^{-34}$, $c=3.0\\times10^8$).",
                [
                    "$E=hc/\\lambda=(6.63\\times10^{-34})(3.0\\times10^8)/(400\\times10^{-9})$.",
                    "$E\\approx4.97\\times10^{-19}\\,\\mathrm{J}\\approx3.1\\,\\mathrm{eV}$.",
                ],
                ["$E\\approx5.0\\times10^{-19}\\,\\mathrm{J}$ ($\\approx3.1\\,\\mathrm{eV}$)."],
                "m-concept-mt5b900q-m9b5n",
            ),
            frq(
                "A metal has work function $\\phi=2.5\\,\\mathrm{eV}$. Light of $f=1.0\\times10^{15}\\,\\mathrm{Hz}$ ($h=4.14\\times10^{-15}\\,\\mathrm{eV\\cdot s}$) shines on it. Find $K_{\\max}$ of ejected electrons.",
                [
                    "$E=h f=4.14\\,\\mathrm{eV}$.",
                    "$K_{\\max}=hf-\\phi=4.14-2.5=1.64\\,\\mathrm{eV}$.",
                ],
                ["$K_{\\max}=1.64\\,\\mathrm{eV}$."],
            ),
            mcq(
                "In the photoelectric effect, increasing light intensity at fixed frequency increases:",
                [
                    "A) $K_{\\max}$ of each electron",
                    "B) Number of ejected electrons per second",
                    "C) Work function of the metal",
                    "D) Threshold frequency",
                ],
                1,
                [
                    "$K_{\\max}=hf-\\phi$ depends on frequency, not intensity.",
                    "Higher intensity ⇒ more photons/sec ⇒ more electrons.",
                ],
            ),
            frq(
                "An electron has de Broglie wavelength $\\lambda=0.20\\,\\mathrm{nm}$. Find momentum ($h=6.63\\times10^{-34}$).",
                [
                    "$p=h/\\lambda=6.63\\times10^{-34}/(0.20\\times10^{-9})=3.32\\times10^{-24}\\,\\mathrm{kg\\cdot m/s}$.",
                ],
                ["$p\\approx3.3\\times10^{-24}\\,\\mathrm{kg\\cdot m/s}$."],
                "m-concept-mt5b900q-bpejl",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 15: Nuclear Physics & Decay",
        P2,
        "CED Unit 15: nuclear equations, binding energy, half-life, fission/fusion.",
        ["unit-15", "nuclear", "decay", "fission"],
        [
            mcq(
                "Which decay increases the atomic number $Z$ by 1 without changing mass number $A$?",
                [
                    "A) Alpha decay",
                    "B) Beta-minus ($\\beta^-$) decay",
                    "C) Gamma emission",
                    "D) Beta-plus ($\\beta^+$) decay only",
                ],
                1,
                [
                    "$\\beta^-$: neutron → proton + electron + antineutrino ⇒ $Z$ increases by 1, $A$ unchanged.",
                ],
            ),
            frq(
                "A sample has half-life $T_{1/2}=6.0\\,\\mathrm{hr}$. What fraction remains after $18\\,\\mathrm{hr}$?",
                [
                    "$18/6=3$ half-lives.",
                    "Fraction $=(1/2)^3=1/8$.",
                ],
                ["Fraction remaining $=1/8$ (12.5%)."],
                "m-concept-mt5b900q-fxzac",
            ),
            frq(
                "Complete and balance: $^{238}_{92}\\mathrm{U}\\to\\,^{4}_{2}\\mathrm{He}+\\,^{234}_{90}\\mathrm{Th}$. Verify nucleon and charge conservation.",
                [
                    "Alpha ($^4_2\\mathrm{He}$): $A:238=4+234$ ✓; $Z:92=2+90$ ✓.",
                    "This is standard alpha decay of uranium-238.",
                ],
                ["Balanced alpha decay; $A$ and $Z$ conserved."],
            ),
            mcq(
                "Compared to fission, nuclear fusion of light nuclei:",
                [
                    "A) Releases less energy per nucleon always",
                    "B) Powers main-sequence stars and requires very high temperature",
                    "C) Increases total nucleon number",
                    "D) Only occurs in power plants currently at industrial scale",
                ],
                1,
                [
                    "Fusion of light nuclei (e.g. H → He) releases energy and needs extreme $T$ to overcome Coulomb barrier.",
                ],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Physics 2 Mixed Challenge",
        P2,
        "Cross-unit Physics 2 challenges linking thermo, optics, waves, and modern physics.",
        ["mixed", "challenge"],
        [
            frq(
                "A Carnot engine operates between $500\\,\\mathrm{K}$ and $300\\,\\mathrm{K}$. Find maximum possible efficiency.",
                [
                    "$e_{\\mathrm{Carnot}}=1-T_C/T_H=1-300/500=0.40$.",
                ],
                ["Maximum efficiency $=40\\%$."],
                tier=3,
            ),
            frq(
                "Light of $\\lambda=500\\,\\mathrm{nm}$ in vacuum enters water ($n=1.33$). Find wavelength and speed in water.",
                [
                    "$\\lambda_n=\\lambda/n=500/1.33\\approx376\\,\\mathrm{nm}$.",
                    "$v=c/n=3.0\\times10^8/1.33\\approx2.26\\times10^8\\,\\mathrm{m/s}$.",
                ],
                ["$\\lambda\\approx376\\,\\mathrm{nm}$; $v\\approx2.26\\times10^8\\,\\mathrm{m/s}$."],
            ),
            mcq(
                "If a star’s surface temperature doubles, Wien’s law predicts peak emission wavelength:",
                [
                    "A) Doubles",
                    "B) Halves",
                    "C) Unchanged",
                    "D) Increases by factor 4",
                ],
                1,
                ["$\\lambda_{\\max}T=b$ constant ⇒ $\\lambda\\propto1/T$."],
            ),
        ],
        minutes=50,
    ),
]


def main():
    data = json.loads(DATA.read_text())
    existing_ids = {q["id"] for q in data["questionnaires"]}
    existing_titles = {q["title"] for q in data["questionnaires"]}

    added = []
    skipped = []
    for q in QUIZZES:
        if q["title"] in existing_titles:
            skipped.append(q["title"])
            continue
        if q["id"] in existing_ids:
            q["id"] = rid("m-quiz")
        added.append(q)

    data["questionnaires"].extend(added)
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    p1 = sum(1 for q in added if q["subject"] == P1)
    p2 = sum(1 for q in added if q["subject"] == P2)
    items = sum(len(q["items"]) for q in added)
    print(f"Added {len(added)} questionnaires ({p1} P1, {p2} P2), {items} items")
    if skipped:
        print(f"Skipped {len(skipped)} duplicate titles")
    for q in added:
        print(f"  + {q['subject']}: {q['title']} ({len(q['items'])} items)")


if __name__ == "__main__":
    main()
