#!/usr/bin/env python3
"""Second batch: more CED-aligned AI topic exercises for AP Physics C E&M and Mechanics."""
import json
import random
import string
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
GEN_NOTE = (
    "Original AI-generated practice aligned to College Board AP Physics C: E&M / "
    "Mechanics CED topics. Not College Board exam verbatim. Includes process steps "
    "and answer keys for study. · 2026-08-23 (batch 2)"
)
BASE_TAGS = ["ai-topic-exercises", "ced-aligned", "generated", "with-solutions", "batch-2"]

EM = "AP Physics C: E&M"
MECH = "AP Physics C: Mechanics"


def rid(prefix: str) -> str:
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
            "Eliminate choices that violate definitions or limiting cases.",
            "Check units and vector directions before selecting.",
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
            "Write the governing equation before numbers.",
            "Check units, signs, and directions.",
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


QUIZZES = [
    # ══════════════════════════════════════════════════════════════
    # E&M — Batch 2 (deeper CED Units 8–13)
    # ══════════════════════════════════════════════════════════════
    quiz(
        "AI Topic Exercises — Unit 8 Set 2: Coulomb, Superposition & Continuous Charge",
        EM,
        "Deeper Unit 8: superposition, line/ring/sheet fields, Gauss applications.",
        ["unit-8", "coulomb", "continuous-charge", "gauss", "set-2"],
        [
            frq(
                "Charges $+2q$, $-q$, and $+q$ lie on a line at $x=0$, $x=d$, and $x=2d$. Find the net force on $-q$ (magnitude and direction). Express in terms of $k$, $q$, $d$.",
                [
                    "Force from $+2q$ on $-q$: attraction left, $F_L=k(2q)q/d^2=2kq^2/d^2$ toward $-x$.",
                    "Force from $+q$ on $-q$: attraction right, $F_R=kq^2/d^2$ toward $+x$.",
                    "Net: $F_L-F_R=kq^2/d^2$ toward $-x$ (toward $+2q$).",
                ],
                ["$F_{\\mathrm{net}}=kq^2/d^2$ toward $-x$ (toward $+2q$)."],
                "coulomb-superposition",
            ),
            frq(
                "An infinite line charge has linear density $\\lambda=+5.0\\,\\mu\\mathrm{C/m}$. Find $E$ at perpendicular distance $r=2.0\\,\\mathrm{cm}$ (magnitude and direction).",
                [
                    "Gauss (cylinder): $E(2\\pi r L)=\\lambda L/\\varepsilon_0$ ⇒ $E=\\lambda/(2\\pi\\varepsilon_0 r)$.",
                    "$\\lambda=5.0\\times10^{-6}$, $r=0.020$: $E=(5.0\\times10^{-6})/(2\\pi\\varepsilon_0\\cdot0.020)$.",
                    "Using $1/(4\\pi\\varepsilon_0)=9\\times10^9$: $E=2k\\lambda/r=2(9\\times10^9)(5\\times10^{-6})/0.02=4.5\\times10^6\\,\\mathrm{N/C}$ radially outward.",
                ],
                ["$E=4.5\\times10^6\\,\\mathrm{N/C}$ radially outward."],
                tier=3,
            ),
            mcq(
                "For an infinite nonconducting sheet with surface charge $\\sigma>0$, the field magnitude is:",
                [
                    "A) $\\sigma/\\varepsilon_0$, independent of distance",
                    "B) $\\sigma/(2\\varepsilon_0)$, independent of distance",
                    "C) $\\sigma/(4\\pi\\varepsilon_0 r^2)$",
                    "D) Zero everywhere",
                ],
                1,
                [
                    "Pillbox Gauss for infinite sheet: $E=\\sigma/(2\\varepsilon_0)$ on each side, independent of distance.",
                ],
            ),
            frq(
                "A uniformly charged disk of radius $R$ and total charge $Q$ produces on-axis field $E_x=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{x}{\\sqrt{x^2+R^2}}\\right)$ with $\\sigma=Q/(\\pi R^2)$. Take the $x\\gg R$ limit and interpret.",
                [
                    "For $x\\gg R$: $\\sqrt{x^2+R^2}\\approx x(1+R^2/(2x^2))$, so $x/\\sqrt{\\cdots}\\approx1-R^2/(2x^2)$.",
                    "Thus $1-x/\\sqrt{\\cdots}\\approx R^2/(2x^2)$ ⇒ $E\\approx(\\sigma/(2\\varepsilon_0))(R^2/(2x^2))=\\sigma R^2/(4\\varepsilon_0 x^2)$.",
                    "But $\\sigma\\pi R^2=Q$ ⇒ $E\\approx Q/(4\\pi\\varepsilon_0 x^2)=kQ/x^2$ — point-charge limit.",
                ],
                ["Far-field: $E\\approx kQ/x^2$ like a point charge."],
                tier=3,
            ),
            frq(
                "Using Gauss’s law, find $E(r)$ inside a thick spherical shell ($a<r<b$) with uniform volume density $\\rho$ (inner radius $a$, outer $b$).",
                [
                    "Gaussian sphere radius $r$: $Q_{\\mathrm{enc}}=\\tfrac43\\pi\\rho(r^3-a^3)$.",
                    "$E(4\\pi r^2)=Q_{\\mathrm{enc}}/\\varepsilon_0$ ⇒ $E=\\rho(r^3-a^3)/(3\\varepsilon_0 r^2)=\\dfrac{\\rho}{3\\varepsilon_0}\\left(r-\\dfrac{a^3}{r^2}\\right)$.",
                ],
                ["$E(r)=\\dfrac{\\rho}{3\\varepsilon_0}\\left(r-\\dfrac{a^3}{r^2}\\right)$ (outward if $\\rho>0$)."],
            ),
        ],
        minutes=50,
    ),
    quiz(
        "AI Topic Exercises — Unit 9 Set 2: Potential, Energy & Equipotentials",
        EM,
        "Deeper Unit 9: $V$ from $E$, point-charge systems, conductors as equipotentials.",
        ["unit-9", "potential", "energy", "equipotential", "set-2"],
        [
            frq(
                "Two charges $+q$ and $-2q$ are separated by $d$. Taking $V(\\infty)=0$, find the potential at the midpoint.",
                [
                    "Midpoint distances both $d/2$.",
                    "$V=k(+q)/(d/2)+k(-2q)/(d/2)=2kq/d-4kq/d=-2kq/d$.",
                ],
                ["$V=-2kq/d$."],
            ),
            frq(
                "In a uniform field $\\vec E=-E\\hat y$ with $E=100\\,\\mathrm{N/C}$, move a charge $q=+2.0\\,\\mu\\mathrm{C}$ from $(0,0)$ to $(0,0.40\\,\\mathrm{m})$. Find $\\Delta V$ and $\\Delta U$.",
                [
                    "$\\Delta V=-\\int\\vec E\\cdot d\\vec\\ell$. Moving $+y$ while $\\vec E$ is $-y$: $\\vec E\\cdot d\\vec\\ell=-E\\,dy$.",
                    "$\\Delta V=-(-E)(0.40)=+40\\,\\mathrm{V}$ (or $V$ increases in direction opposite $\\vec E$).",
                    "$\\Delta U=q\\Delta V=(2\\times10^{-6})(40)=8.0\\times10^{-5}\\,\\mathrm{J}$.",
                ],
                ["$\\Delta V=+40\\,\\mathrm{V}$; $\\Delta U=8.0\\times10^{-5}\\,\\mathrm{J}$."],
            ),
            mcq(
                "On an equipotential surface:",
                [
                    "A) $\\vec E$ is parallel to the surface",
                    "B) Moving a charge along the surface requires zero electrostatic work",
                    "C) Potential energy is the same for every charge",
                    "D) $E$ must be zero",
                ],
                1,
                [
                    "$W=q\\Delta V=0$ along an equipotential; $\\vec E\\perp$ the surface (may be nonzero).",
                ],
            ),
            frq(
                "A conducting sphere of radius $R$ carries charge $Q$. Find $V(r)$ for $r\\ge R$ and $r<R$ ($V(\\infty)=0$).",
                [
                    "Outside: like point charge, $V=kQ/r$.",
                    "Inside conductor material / solid conductor: $E=0$ ⇒ $V$ constant $=kQ/R$.",
                ],
                ["$r\\ge R$: $V=kQ/r$; $r\\le R$: $V=kQ/R$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 10 Set 2: Capacitors, Energy & Combinations",
        EM,
        "Deeper Unit 10: series/parallel, energy density, dielectrics with battery connected.",
        ["unit-10", "capacitor", "dielectric", "energy", "set-2"],
        [
            frq(
                "Capacitors $C_1=4.0\\,\\mu\\mathrm{F}$ and $C_2=12\\,\\mu\\mathrm{F}$ are in parallel across $9.0\\,\\mathrm{V}$. Find $C_{\\mathrm{eq}}$, total charge, and energy stored.",
                [
                    "$C_{\\mathrm{eq}}=4+12=16\\,\\mu\\mathrm{F}$.",
                    "$Q=C_{\\mathrm{eq}}V=144\\,\\mu\\mathrm{C}$.",
                    "$U=\\tfrac12 C V^2=\\tfrac12(16\\times10^{-6})(81)=6.48\\times10^{-4}\\,\\mathrm{J}$.",
                ],
                ["$C_{\\mathrm{eq}}=16\\,\\mu\\mathrm{F}$; $Q=144\\,\\mu\\mathrm{C}$; $U=6.48\\times10^{-4}\\,\\mathrm{J}$."],
            ),
            frq(
                "A parallel-plate capacitor remains connected to a battery $\\mathcal{E}$. A dielectric $\\kappa$ is inserted filling the gap. How do $C$, $Q$, $V$, and $U$ change?",
                [
                    "Battery connected ⇒ $V=\\mathcal{E}$ fixed.",
                    "$C\\to\\kappa C_0$ increases; $Q=CV$ increases by $\\kappa$.",
                    "$U=\\tfrac12 CV^2$ increases by $\\kappa$ (battery does work).",
                ],
                [
                    "$V$ fixed; $C$, $Q$, $U$ each multiply by $\\kappa$.",
                ],
            ),
            mcq(
                "Energy density in an electric field (vacuum) is:",
                [
                    "A) $\\tfrac12\\varepsilon_0 E$",
                    "B) $\\tfrac12\\varepsilon_0 E^2$",
                    "C) $\\varepsilon_0 E^2$",
                    "D) $E^2/(2\\varepsilon_0)$",
                ],
                1,
                ["$u=\\tfrac12\\varepsilon_0 E^2$."],
            ),
            frq(
                "Two capacitors in series: $C_1=3.0\\,\\mu\\mathrm{F}$, $C_2=6.0\\,\\mu\\mathrm{F}$, across $12\\,\\mathrm{V}$. Find voltage across each.",
                [
                    "$C_s=2.0\\,\\mu\\mathrm{F}$; $Q=C_s V=24\\,\\mu\\mathrm{C}$ same on each.",
                    "$V_1=Q/C_1=8.0\\,\\mathrm{V}$; $V_2=Q/C_2=4.0\\,\\mathrm{V}$.",
                ],
                ["$V_1=8.0\\,\\mathrm{V}$; $V_2=4.0\\,\\mathrm{V}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 11 Set 2: Kirchhoff, Power & RC Circuits",
        EM,
        "Deeper Unit 11: multi-loop Kirchhoff, power, charging/discharging RC.",
        ["unit-11", "circuits", "kirchhoff", "RC", "set-2"],
        [
            frq(
                "A $12\\,\\mathrm{V}$ battery with internal resistance $r=1.0\\,\\Omega$ connects to external $R=5.0\\,\\Omega$. Find terminal voltage and power delivered to $R$.",
                [
                    "$I=\\mathcal{E}/(R+r)=12/6=2.0\\,\\mathrm{A}$.",
                    "$V_{\\mathrm{term}}=\\mathcal{E}-Ir=12-2=10\\,\\mathrm{V}$ (also $IR=10\\,\\mathrm{V}$).",
                    "$P_R=I^2 R=4\\cdot5=20\\,\\mathrm{W}$.",
                ],
                ["$V_{\\mathrm{term}}=10\\,\\mathrm{V}$; $P_R=20\\,\\mathrm{W}$."],
            ),
            frq(
                "A single loop has battery $\\mathcal{E}=9.0\\,\\mathrm{V}$ and resistors $2.0\\,\\Omega$ and $4.0\\,\\Omega$ in series. Find the current and the power dissipated in the $4.0\\,\\Omega$ resistor.",
                [
                    "$I=\\mathcal{E}/(R_1+R_2)=9/6=1.5\\,\\mathrm{A}$.",
                    "$P_4=I^2 R=(1.5)^2(4)=9.0\\,\\mathrm{W}$.",
                ],
                ["$I=1.5\\,\\mathrm{A}$; $P_4=9.0\\,\\mathrm{W}$."],
            ),
            mcq(
                "While discharging an RC circuit, the capacitor voltage decays as:",
                [
                    "A) $\\mathcal{E}(1-e^{-t/\\tau})$",
                    "B) $V_0 e^{-t/\\tau}$",
                    "C) $V_0 t/\\tau$",
                    "D) Constant until $t=\\tau$",
                ],
                1,
                ["Discharge: $V_C(t)=V_0 e^{-t/RC}$."],
            ),
            frq(
                "An RC circuit has $R=50\\,\\mathrm{k}\\Omega$, $C=4.0\\,\\mu\\mathrm{F}$, charged to $20\\,\\mathrm{V}$, then discharged through $R$. Find $\\tau$ and $V_C$ at $t=0.40\\,\\mathrm{s}$.",
                [
                    "$\\tau=RC=(5.0\\times10^4)(4.0\\times10^{-6})=0.20\\,\\mathrm{s}$.",
                    "At $t=0.40=2\\tau$: $V=20e^{-2}\\approx20(0.135)=2.7\\,\\mathrm{V}$.",
                ],
                ["$\\tau=0.20\\,\\mathrm{s}$; $V_C\\approx2.7\\,\\mathrm{V}$."],
            ),
        ],
        minutes=50,
    ),
    quiz(
        "AI Topic Exercises — Unit 12 Set 2: Magnetic Force, Ampère & Biot–Savart",
        EM,
        "Deeper Unit 12: $\\vec F=I\\vec\\ell\\times\\vec B$, cyclotron, Ampère applications.",
        ["unit-12", "magnetic", "ampere", "biot-savart", "set-2"],
        [
            frq(
                "A straight wire of length $0.40\\,\\mathrm{m}$ carries $5.0\\,\\mathrm{A}$ perpendicular to $\\vec B=0.30\\,\\mathrm{T}$. Find the magnetic force magnitude and the direction rule.",
                [
                    "$F=ILB\\sin90^\\circ=(5)(0.40)(0.30)=0.60\\,\\mathrm{N}$.",
                    "Direction: right-hand rule for $\\vec I\\times\\vec B$.",
                ],
                ["$F=0.60\\,\\mathrm{N}$; direction by $\\vec\\ell\\times\\vec B$ RHR."],
            ),
            frq(
                "An electron moves in a circle of radius $2.0\\,\\mathrm{cm}$ in $B=5.0\\times10^{-3}\\,\\mathrm{T}$ perpendicular to $\\vec v$. Find its speed ($m_e=9.11\\times10^{-31}$, $e=1.60\\times10^{-19}$).",
                [
                    "$r=mv/(eB)$ ⇒ $v=eBr/m$.",
                    "$v=(1.60\\times10^{-19})(5.0\\times10^{-3})(0.020)/(9.11\\times10^{-31})\\approx1.76\\times10^7\\,\\mathrm{m/s}$.",
                ],
                ["$v\\approx1.76\\times10^7\\,\\mathrm{m/s}$."],
                tier=3,
            ),
            mcq(
                "Ampère’s law $\\oint\\vec B\\cdot d\\vec\\ell=\\mu_0 I_{\\mathrm{enc}}$ is most useful when:",
                [
                    "A) Charge distributions lack all symmetry",
                    "B) Symmetry makes $|\\vec B|$ constant on an Amperian path",
                    "C) Only electrostatics apply",
                    "D) $E=0$ everywhere",
                ],
                1,
                ["Like Gauss’s law: symmetry lets you pull $B$ out of the line integral."],
            ),
            frq(
                "A long coaxial cable has inner wire current $I$ out of page and return $-I$ on the outer cylindrical sheath of radius $R$. Find $B$ for $r<R$ (between) and $r>R$ (outside).",
                [
                    "Between: Amperian circle encloses $I$ ⇒ $B(2\\pi r)=\\mu_0 I$ ⇒ $B=\\mu_0 I/(2\\pi r)$.",
                    "Outside: net $I_{\\mathrm{enc}}=0$ ⇒ $B=0$.",
                ],
                ["$r<R$: $B=\\mu_0 I/(2\\pi r)$; $r>R$: $B=0$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 13 Set 2: Faraday, Motional Emf & Inductance",
        EM,
        "Deeper Unit 13: flux rules, motional emf, mutual/self inductance, LC energy.",
        ["unit-13", "faraday", "induction", "inductance", "set-2"],
        [
            frq(
                "A $100$-turn coil of area $0.010\\,\\mathrm{m^2}$ has $B$ perpendicular to the area increasing at $0.050\\,\\mathrm{T/s}$. Find the induced emf magnitude.",
                [
                    "$|\\mathcal{E}|=N|d\\Phi/dt|=N A|dB/dt|=100(0.010)(0.050)=0.050\\,\\mathrm{V}$.",
                ],
                ["$|\\mathcal{E}|=0.050\\,\\mathrm{V}$."],
            ),
            frq(
                "A conducting rod of length $\\ell=0.50\\,\\mathrm{m}$ slides at $v=4.0\\,\\mathrm{m/s}$ on rails in $B=0.80\\,\\mathrm{T}$ into the page (standard sliding-bar). Find motional emf and, if circuit resistance is $2.0\\,\\Omega$, the induced current.",
                [
                    "$\\mathcal{E}=B\\ell v=(0.80)(0.50)(4.0)=1.6\\,\\mathrm{V}$.",
                    "$I=\\mathcal{E}/R=1.6/2.0=0.80\\,\\mathrm{A}$.",
                ],
                ["$\\mathcal{E}=1.6\\,\\mathrm{V}$; $I=0.80\\,\\mathrm{A}$."],
            ),
            mcq(
                "Self-inductance $L$ is defined so that $\\mathcal{E}_L=$:",
                [
                    "A) $LI$",
                    "B) $-L\\,dI/dt$",
                    "C) $L\\,d\\Phi/dt$",
                    "D) $I^2 R$",
                ],
                1,
                ["$\\mathcal{E}=-L\\,dI/dt$ (opposes change in current — Lenz)."],
            ),
            frq(
                "An LC circuit has maximum charge $Q_{\\max}=4.0\\,\\mu\\mathrm{C}$ on the capacitor and $C=2.0\\,\\mu\\mathrm{F}$. Find maximum energy stored and maximum current if $L=0.50\\,\\mathrm{H}$.",
                [
                    "$U_{\\max}=Q_{\\max}^2/(2C)=(16\\times10^{-12})/(4\\times10^{-6})=4.0\\times10^{-6}\\,\\mathrm{J}$.",
                    "At max current, all energy in $L$: $\\tfrac12 L I_{\\max}^2=U_{\\max}$ ⇒ $I_{\\max}=\\sqrt{2U/L}=\\sqrt{2(4\\times10^{-6})/0.50}=4.0\\times10^{-3}\\,\\mathrm{A}$.",
                ],
                ["$U_{\\max}=4.0\\times10^{-6}\\,\\mathrm{J}$; $I_{\\max}=4.0\\,\\mathrm{mA}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — E&M Challenge Set 2: Cross-Unit FRQs",
        EM,
        "Multi-concept E&M FRQs linking field–potential–circuit–induction.",
        ["mixed", "challenge", "set-2"],
        [
            frq(
                "A parallel-plate capacitor ($C=5.0\\,\\mathrm{nF}$) charged to $Q=20\\,\\mathrm{nC}$ is disconnected, then plates are pulled apart so $C$ halves. Find new $V$ and the work done by the agent pulling the plates (energy change).",
                [
                    "$Q$ fixed; $C\\to C/2$ ⇒ $V=Q/C$ doubles: was $4.0\\,\\mathrm{V}$, now $8.0\\,\\mathrm{V}$.",
                    "$U=Q^2/(2C)$ doubles: was $4.0\\times10^{-8}\\,\\mathrm{J}$, now $8.0\\times10^{-8}\\,\\mathrm{J}$.",
                    "Agent does positive work $+4.0\\times10^{-8}\\,\\mathrm{J}$ (against attractive force).",
                ],
                [
                    "$V_{\\mathrm{new}}=8.0\\,\\mathrm{V}$; $W_{\\mathrm{agent}}=+4.0\\times10^{-8}\\,\\mathrm{J}$.",
                ],
                tier=3,
            ),
            frq(
                "A proton enters a region with $\\vec E=500\\,\\mathrm{N/C}\\,\\hat x$ and $\\vec B=0.10\\,\\mathrm{T}\\,\\hat y$ with $\\vec v=v\\hat z$. For undeflected motion (net force zero), find $v$.",
                [
                    "Need $qE=qvB$ (crossed fields) with correct directions: $v=E/B=500/0.10=5000\\,\\mathrm{m/s}$.",
                ],
                ["$v=5.0\\times10^3\\,\\mathrm{m/s}$."],
            ),
            mcq(
                "Maxwell–Ampère / displacement current idea: charging capacitor current $I$ in wires implies between plates an effective $I_d$ equal to:",
                [
                    "A) Zero always",
                    "B) $I$ (same magnitude as conduction current in series)",
                    "C) $2I$",
                    "D) Only magnetic field terms",
                ],
                1,
                [
                    "Continuity: $I_d=\\varepsilon_0\\,d\\Phi_E/dt$ equals the conduction current charging the capacitor.",
                ],
            ),
            frq(
                "Loop area $A=0.020\\,\\mathrm{m^2}$, resistance $4.0\\,\\Omega$, $B$ into page decreases from $0.60\\,\\mathrm{T}$ to $0.20\\,\\mathrm{T}$ in $0.050\\,\\mathrm{s}$. Find average induced current and whether it is CW or CCW (viewed from above) to oppose the decrease.",
                [
                    "$|\\mathcal{E}_{\\mathrm{avg}}|=A|\\Delta B|/\\Delta t=(0.020)(0.40)/0.050=0.16\\,\\mathrm{V}$.",
                    "$I=\\mathcal{E}/R=0.040\\,\\mathrm{A}$.",
                    "Into-page flux decreasing ⇒ induced current creates into-page $B$ ⇒ CW (RHR).",
                ],
                ["$I_{\\mathrm{avg}}=0.040\\,\\mathrm{A}$, CW."],
                tier=3,
            ),
        ],
        minutes=55,
    ),
    # ══════════════════════════════════════════════════════════════
    # MECHANICS — Batch 2 (CED-style unit sets)
    # ══════════════════════════════════════════════════════════════
    quiz(
        "AI Topic Exercises — Mechanics Unit 1 Set 2: 1-D & 2-D Kinematics",
        MECH,
        "Deeper kinematics: calculus relations, projectiles, relative motion.",
        ["unit-1", "kinematics", "projectiles", "set-2"],
        [
            frq(
                "Position $x(t)=2t^3-3t^2+5$ (SI). Find $v(t)$, $a(t)$, and acceleration when $v=0$ (for $t>0$).",
                [
                    "$v=6t^2-6t$; $a=12t-6$.",
                    "$v=0$ ⇒ $6t(t-1)=0$ ⇒ $t=1\\,\\mathrm{s}$ (positive).",
                    "$a(1)=6\\,\\mathrm{m/s^2}$.",
                ],
                ["$v=6t^2-6t$; $a=12t-6$; at $t=1$, $a=6\\,\\mathrm{m/s^2}$."],
            ),
            frq(
                "A projectile is launched at $30\\,\\mathrm{m/s}$ at $30^\\circ$ above horizontal ($g=10$). Find time of flight on level ground and maximum height.",
                [
                    "$v_{0y}=15\\,\\mathrm{m/s}$; $T=2v_{0y}/g=3.0\\,\\mathrm{s}$.",
                    "$H=v_{0y}^2/(2g)=225/20=11.25\\,\\mathrm{m}$.",
                ],
                ["$T=3.0\\,\\mathrm{s}$; $H=11.25\\,\\mathrm{m}$."],
            ),
            mcq(
                "If $\\vec a$ is constant and nonzero, which must be true?",
                [
                    "A) Velocity is constant",
                    "B) Acceleration vector does not change with time",
                    "C) Speed is constant",
                    "D) Path must be circular",
                ],
                1,
                ["Constant acceleration means $\\vec a$ fixed in magnitude and direction."],
            ),
            frq(
                "Car A moves at $+20\\,\\mathrm{m/s}$ and car B at $+30\\,\\mathrm{m/s}$ on a straight road. Find velocity of B relative to A.",
                [
                    "$\\vec v_{B/A}=\\vec v_B-\\vec v_A=10\\,\\mathrm{m/s}$ in the forward direction.",
                ],
                ["$v_{B/A}=+10\\,\\mathrm{m/s}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mechanics Unit 2 Set 2: Newton’s Laws & Friction",
        MECH,
        "Deeper dynamics: FBDs, friction, connected systems, circular dynamics.",
        ["unit-2", "newton", "friction", "dynamics", "set-2"],
        [
            frq(
                "A $3.0\\,\\mathrm{kg}$ block on a horizontal surface ($\\mu_s=0.40$, $\\mu_k=0.25$) is pulled by $F=8.0\\,\\mathrm{N}$ horizontal ($g=10$). Does it move? If so, find $a$.",
                [
                    "$f_{s,\\max}=\\mu_s mg=0.40\\cdot30=12\\,\\mathrm{N}>8$ ⇒ does not move; $a=0$.",
                ],
                ["Does not move; $a=0$ (static friction balances $F$)."],
            ),
            frq(
                "Atwood: $m_1=2.0\\,\\mathrm{kg}$, $m_2=3.0\\,\\mathrm{kg}$, frictionless pulley ($g=10$). Find $a$ and tension.",
                [
                    "$a=g(m_2-m_1)/(m_1+m_2)=10(1)/5=2.0\\,\\mathrm{m/s^2}$.",
                    "$T=2m_1m_2 g/(m_1+m_2)=2\\cdot2\\cdot3\\cdot10/5=24\\,\\mathrm{N}$.",
                ],
                ["$a=2.0\\,\\mathrm{m/s^2}$; $T=24\\,\\mathrm{N}$."],
            ),
            mcq(
                "A car rounds a flat unbanked curve of radius $R$ at speed $v$. The centripetal force is provided by:",
                [
                    "A) Gravity",
                    "B) Static friction toward the center",
                    "C) Kinetic friction outward",
                    "D) Normal force",
                ],
                1,
                ["On flat curve, static friction supplies $mv^2/R$ inward."],
            ),
            frq(
                "A $1.0\\,\\mathrm{kg}$ ball on a string moves in a vertical circle of radius $0.50\\,\\mathrm{m}$. At the top, speed is $4.0\\,\\mathrm{m/s}$ ($g=10$). Find tension at the top.",
                [
                    "At top: $T+mg=mv^2/r$.",
                    "$T=m(v^2/r-g)=1(16/0.5-10)=1(32-10)=22\\,\\mathrm{N}$.",
                ],
                ["$T=22\\,\\mathrm{N}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mechanics Unit 3 Set 2: Work, Energy & Power",
        MECH,
        "Deeper energy: work–energy, conservative forces, power, springs.",
        ["unit-3", "energy", "work", "power", "set-2"],
        [
            frq(
                "A $2.0\\,\\mathrm{kg}$ block slides $3.0\\,\\mathrm{m}$ down a $30^\\circ$ incline with $\\mu_k=0.20$ ($g=10$). Find work by friction and by gravity.",
                [
                    "$N=mg\\cos30^\\circ=2\\cdot10\\cdot(\\sqrt{3}/2)\\approx17.3\\,\\mathrm{N}$; $f_k=\\mu N\\approx3.46\\,\\mathrm{N}$.",
                    "$W_f=-f_k d\\approx-10.4\\,\\mathrm{J}$.",
                    "$W_g=mg\\sin30^\\circ\\cdot d=2\\cdot10\\cdot0.5\\cdot3=30\\,\\mathrm{J}$.",
                ],
                ["$W_f\\approx-10.4\\,\\mathrm{J}$; $W_g=30\\,\\mathrm{J}$."],
            ),
            frq(
                "Spring $k=400\\,\\mathrm{N/m}$ compresses $0.10\\,\\mathrm{m}$, launching a $0.20\\,\\mathrm{kg}$ block on frictionless track into a vertical loop of radius $0.50\\,\\mathrm{m}$. Find speed at top of loop if it just maintains contact ($v_{\\mathrm{top}}=\\sqrt{gR}$ with $g=10$), and check if launch energy suffices.",
                [
                    "Need $v_{\\mathrm{top}}=\\sqrt{5}=\\sqrt{10\\cdot0.5}\\approx2.24\\,\\mathrm{m/s}$.",
                    "Energy: $\\tfrac12 kx^2=\\tfrac12 mv_{\\mathrm{top}}^2+mg(2R)$.",
                    "Right side: $0.5\\cdot0.2\\cdot5+0.2\\cdot10\\cdot1=0.5+2=2.5\\,\\mathrm{J}$.",
                    "Left: $\\tfrac12(400)(0.01)=2.0\\,\\mathrm{J}<2.5$ ⇒ insufficient to just clear.",
                ],
                [
                    "Required energy $2.5\\,\\mathrm{J}$; spring gives $2.0\\,\\mathrm{J}$ — not enough for just-contact top.",
                ],
                tier=3,
            ),
            mcq(
                "Power delivered by a force is:",
                [
                    "A) $\\vec F\\cdot\\vec v$",
                    "B) $\\vec F\\times\\vec v$",
                    "C) $F/v$",
                    "D) Only $Fd$",
                ],
                0,
                ["Instantaneous power $P=\\vec F\\cdot\\vec v$."],
            ),
            frq(
                "A motor pulls a $50\\,\\mathrm{kg}$ elevator up at constant $2.0\\,\\mathrm{m/s}$ ($g=10$). Find tension and power.",
                [
                    "Constant $v$ ⇒ $T=mg=500\\,\\mathrm{N}$.",
                    "$P=Tv=500\\cdot2=1000\\,\\mathrm{W}$.",
                ],
                ["$T=500\\,\\mathrm{N}$; $P=1000\\,\\mathrm{W}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mechanics Unit 4 Set 2: Momentum & Collisions",
        MECH,
        "Deeper momentum: impulse graphs, 1-D/2-D collisions, explosions.",
        ["unit-4", "momentum", "impulse", "collisions", "set-2"],
        [
            frq(
                "Force on a $0.50\\,\\mathrm{kg}$ object rises linearly from $0$ to $20\\,\\mathrm{N}$ in $0.10\\,\\mathrm{s}$, then falls linearly to $0$ in another $0.10\\,\\mathrm{s}$. Find impulse and $\\Delta v$ if starting from rest.",
                [
                    "Impulse = area of triangle $=\\tfrac12(0.20)(20)=2.0\\,\\mathrm{N\\cdot s}$.",
                    "$\\Delta v=J/m=2.0/0.50=4.0\\,\\mathrm{m/s}$.",
                ],
                ["$J=2.0\\,\\mathrm{N\\cdot s}$; $\\Delta v=4.0\\,\\mathrm{m/s}$."],
            ),
            frq(
                "Mass $m$ at speed $v$ collides elastically head-on with mass $2m$ at rest. Find final velocities.",
                [
                    "1-D elastic formulas: $v_{1f}=\\dfrac{m-2m}{m+2m}v=-v/3$.",
                    "$v_{2f}=\\dfrac{2m}{m+2m}v=2v/3$.",
                ],
                ["$v_{1f}=-v/3$; $v_{2f}=2v/3$."],
            ),
            mcq(
                "In a perfectly inelastic collision of two free particles, which is always conserved?",
                [
                    "A) Kinetic energy",
                    "B) Momentum (if isolated)",
                    "C) Both KE and momentum",
                    "D) Neither",
                ],
                1,
                ["Momentum conserved if no external impulse; KE not conserved when they stick."],
            ),
            frq(
                "A $4.0\\,\\mathrm{kg}$ object at rest explodes into two pieces: $1.0\\,\\mathrm{kg}$ at $+6.0\\,\\mathrm{m/s}$ and $3.0\\,\\mathrm{kg}$. Find the velocity of the $3.0\\,\\mathrm{kg}$ piece.",
                [
                    "Momentum: $0=1(6)+3v$ ⇒ $v=-2.0\\,\\mathrm{m/s}$.",
                ],
                ["$v=-2.0\\,\\mathrm{m/s}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mechanics Unit 5 Set 2: Rotation & Torque",
        MECH,
        "Deeper rotation: $\\tau=I\\alpha$, rolling, angular momentum, parallel axis.",
        ["unit-5", "rotation", "torque", "angular-momentum", "set-2"],
        [
            frq(
                "A uniform disk ($I=\\tfrac12 MR^2$) has $M=4.0\\,\\mathrm{kg}$, $R=0.20\\,\\mathrm{m}$. A tangential force $8.0\\,\\mathrm{N}$ acts at the rim. Find $\\alpha$.",
                [
                    "$\\tau=RF=1.6\\,\\mathrm{N\\cdot m}$; $I=\\tfrac12(4)(0.04)=0.080\\,\\mathrm{kg\\cdot m^2}$.",
                    "$\\alpha=\\tau/I=1.6/0.080=20\\,\\mathrm{rad/s^2}$.",
                ],
                ["$\\alpha=20\\,\\mathrm{rad/s^2}$."],
            ),
            frq(
                "A solid sphere rolls without slipping down a height $h=1.8\\,\\mathrm{m}$ ($g=10$, $I=\\tfrac25 MR^2$). Find speed at bottom.",
                [
                    "$mgh=\\tfrac12 mv^2+\\tfrac12 I\\omega^2$ with $v=R\\omega$.",
                    "$gh=\\tfrac12 v^2+\\tfrac15 v^2=\\tfrac{7}{10}v^2$ ⇒ $v=\\sqrt{10gh/7}=\\sqrt{10\\cdot18/7}=\\sqrt{180/7}\\approx5.07\\,\\mathrm{m/s}$.",
                ],
                ["$v\\approx5.07\\,\\mathrm{m/s}$."],
            ),
            mcq(
                "Parallel-axis theorem: $I=I_{\\mathrm{cm}}+Md^2$ applies when:",
                [
                    "A) The new axis is any axis through the cm",
                    "B) The new axis is parallel to an axis through the cm",
                    "C) The object is only a point mass",
                    "D) Angular velocity is zero",
                ],
                1,
                ["Axes must be parallel; $d$ is distance between axes."],
            ),
            frq(
                "A rod of length $L$ and mass $M$ pivoted at one end ($I=\\tfrac13 ML^2$) falls from horizontal. Find angular speed when vertical ($g$).",
                [
                    "Loss in PE of cm: $Mg(L/2)$ converts to $\\tfrac12 I\\omega^2$.",
                    "$MgL/2=\\tfrac12(\\tfrac13 ML^2)\\omega^2$ ⇒ $\\omega=\\sqrt{3g/L}$.",
                ],
                ["$\\omega=\\sqrt{3g/L}$."],
                tier=3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mechanics Unit 6 Set 2: Oscillations",
        MECH,
        "Deeper SHM: energy, phase, physical pendulum, damped qualitative.",
        ["unit-6", "shm", "oscillations", "pendulum", "set-2"],
        [
            frq(
                "SHM: $x=0.05\\cos(10t)$ (SI). Find amplitude, $\\omega$, max acceleration, and total energy if $m=0.20\\,\\mathrm{kg}$.",
                [
                    "$A=0.05\\,\\mathrm{m}$; $\\omega=10\\,\\mathrm{rad/s}$.",
                    "$a_{\\max}=A\\omega^2=5.0\\,\\mathrm{m/s^2}$.",
                    "$E=\\tfrac12 m\\omega^2 A^2=\\tfrac12(0.20)(100)(0.0025)=0.025\\,\\mathrm{J}$.",
                ],
                ["$A=0.05\\,\\mathrm{m}$; $\\omega=10$; $a_{\\max}=5.0\\,\\mathrm{m/s^2}$; $E=0.025\\,\\mathrm{J}$."],
            ),
            frq(
                "A physical pendulum has $I=0.50\\,\\mathrm{kg\\cdot m^2}$ about pivot, mass $2.0\\,\\mathrm{kg}$, cm distance $d=0.25\\,\\mathrm{m}$ from pivot ($g=10$). Find small-angle period.",
                [
                    "$T=2\\pi\\sqrt{I/(mgd)}=2\\pi\\sqrt{0.50/(2\\cdot10\\cdot0.25)}=2\\pi\\sqrt{0.50/5}=2\\pi\\sqrt{0.1}\\approx1.99\\,\\mathrm{s}$.",
                ],
                ["$T\\approx2.0\\,\\mathrm{s}$."],
            ),
            mcq(
                "In undamped SHM, period depends on:",
                [
                    "A) Amplitude (always)",
                    "B) Mass and spring constant for a mass-spring (not amplitude, small angles for pendulum)",
                    "C) Phase constant only",
                    "D) Maximum velocity only",
                ],
                1,
                ["Ideal mass-spring: $T=2\\pi\\sqrt{m/k}$ independent of $A$."],
            ),
            frq(
                "A mass $m=0.40\\,\\mathrm{kg}$ on a spring has total energy $E=0.080\\,\\mathrm{J}$ and amplitude $A=0.10\\,\\mathrm{m}$. Find $k$ and the speed when $x=0.060\\,\\mathrm{m}$.",
                [
                    "$E=\\tfrac12 k A^2$ ⇒ $k=2E/A^2=16\\,\\mathrm{N/m}$.",
                    "$KE=E-\\tfrac12 kx^2=0.080-\\tfrac12(16)(0.0036)=0.080-0.0288=0.0512\\,\\mathrm{J}$.",
                    "$v=\\sqrt{2\\,KE/m}=\\sqrt{2(0.0512)/0.40}=\\sqrt{0.256}=0.506\\,\\mathrm{m/s}$.",
                ],
                ["$k=16\\,\\mathrm{N/m}$; $v\\approx0.51\\,\\mathrm{m/s}$."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mechanics Unit 7 Set 2: Gravitation",
        MECH,
        "Deeper gravitation: orbits, energy, escape, shell theorem.",
        ["unit-7", "gravitation", "orbits", "escape", "set-2"],
        [
            frq(
                "Find orbital speed and period for a circular orbit of radius $r=2R_E$ about Earth (mass $M_E$, surface $g=GM_E/R_E^2$). Express in $g$, $R_E$.",
                [
                    "$v=\\sqrt{GM/r}=\\sqrt{gR_E^2/(2R_E)}=\\sqrt{gR_E/2}$.",
                    "$T=2\\pi r/v=2\\pi(2R_E)/\\sqrt{gR_E/2}=4\\pi R_E\\sqrt{2/(gR_E)}$.",
                ],
                [
                    "$v=\\sqrt{gR_E/2}$; $T=4\\pi R_E\\sqrt{2/(gR_E)}$.",
                ],
            ),
            frq(
                "Escape speed from surface of planet radius $R$, mass $M$ is $v_{\\mathrm{esc}}=\\sqrt{2GM/R}$. If $g$ is surface gravity, rewrite $v_{\\mathrm{esc}}$ in terms of $g$ and $R$.",
                [
                    "$g=GM/R^2$ ⇒ $GM=gR^2$ ⇒ $v_{\\mathrm{esc}}=\\sqrt{2gR}$.",
                ],
                ["$v_{\\mathrm{esc}}=\\sqrt{2gR}$."],
            ),
            mcq(
                "Inside a uniform thin spherical shell of mass $M$, gravitational field is:",
                [
                    "A) $GM/r^2$ toward center",
                    "B) Zero everywhere inside",
                    "C) Constant nonzero",
                    "D) Infinite at the center",
                ],
                1,
                ["Newton’s shell theorem: $g=0$ inside a uniform thin shell."],
            ),
            frq(
                "Satellite mass $m$ in circular orbit radius $r$: show total mechanical energy $E=-GMm/(2r)$ and interpret binding.",
                [
                    "$U=-GMm/r$; $K=\\tfrac12 mv^2=GMm/(2r)$ from $v^2=GM/r$.",
                    "$E=K+U=-GMm/(2r)<0$ ⇒ bound orbit.",
                ],
                ["$E=-GMm/(2r)$ (negative ⇒ bound)."],
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mechanics Mixed Challenge Set 2",
        MECH,
        "Cross-unit Mechanics challenges: energy–rotation–gravitation links.",
        ["mixed", "challenge", "set-2"],
        [
            frq(
                "A block slides down a frictionless track of height $H$, then loops a vertical circle of radius $R$. Find minimum $H$ so the block just completes the loop (just loses contact criterion at top).",
                [
                    "At top just in contact: $v_{\\mathrm{top}}^2=gR$.",
                    "Energy: $mgH=\\tfrac12 m(gR)+mg(2R)=\\tfrac52 mgR$ ⇒ $H=\\tfrac52 R$.",
                ],
                ["$H_{\\min}=\\dfrac{5}{2}R$."],
                tier=3,
            ),
            frq(
                "A uniform rod length $L$ pivoted at end is struck perpendicularly by impulse $J$ at the free end. Find immediate angular velocity and linear velocity of cm.",
                [
                    "$L=J\\cdot L=I\\omega$ with $I=\\tfrac13 ML^2$ ⇒ $\\omega=3J/(ML)$.",
                    "$v_{\\mathrm{cm}}=\\omega(L/2)=3J/(2M)$.",
                ],
                ["$\\omega=3J/(ML)$; $v_{\\mathrm{cm}}=3J/(2M)$."],
                tier=3,
            ),
            mcq(
                "Two planets have the same density. Planet B has twice the radius of A. Surface gravity on B relative to A is:",
                [
                    "A) Same",
                    "B) 2×",
                    "C) 4×",
                    "D) 8×",
                ],
                1,
                [
                    "$g=GM/R^2\\propto \\rho R^3/R^2\\propto\\rho R$ ⇒ double $R$ ⇒ double $g$.",
                ],
            ),
            frq(
                "SHM mass $m$ on spring $k$ has amplitude $A$. At what displacement is KE equal to PE?",
                [
                    "$\\tfrac12 kA^2=\\tfrac12 kx^2+\\tfrac12 k(A^2-x^2)$ wait: $KE=PE$ ⇒ $\\tfrac12 k(A^2-x^2)=\\tfrac12 kx^2$ ⇒ $A^2=2x^2$ ⇒ $x=A/\\sqrt{2}$.",
                ],
                ["$|x|=A/\\sqrt{2}$."],
            ),
        ],
        minutes=55,
    ),
]


def main():
    data = json.loads(DATA.read_text())
    existing_titles = {q["title"] for q in data["questionnaires"]}
    existing_ids = {q["id"] for q in data["questionnaires"]}

    added, skipped = [], []
    for q in QUIZZES:
        if q["title"] in existing_titles:
            skipped.append(q["title"])
            continue
        while q["id"] in existing_ids:
            q["id"] = rid("m-quiz")
        existing_ids.add(q["id"])
        for item in q["items"]:
            while item["id"] in existing_ids:
                item["id"] = rid("m-item")
            existing_ids.add(item["id"])
        added.append(q)

    data["questionnaires"].extend(added)
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    em = sum(1 for q in added if q["subject"] == EM)
    mech = sum(1 for q in added if q["subject"] == MECH)
    items = sum(len(q["items"]) for q in added)
    print(f"Added {len(added)} questionnaires ({em} E&M, {mech} Mech), {items} items")
    if skipped:
        print(f"Skipped {len(skipped)} duplicates")
    for q in added:
        print(f"  + {q['subject']}: {q['title']} ({len(q['items'])} items)")


if __name__ == "__main__":
    main()
