import random, string

BASE_TAGS = ["ai-topic-exercises", "ced-aligned", "generated", "with-solutions"]
GEN_NOTE = "Original AI-generated practice aligned to College Board CED. Not College Board exam verbatim. Includes process + answers. · 2026-08-23"


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
    # AP Chemistry
    quiz(
        "AP Chemistry Unit 1: Atomic Structure and Properties",
        "AP Chemistry",
        "CED-aligned practice with moles, mass spectra, electron configurations, photoelectron spectroscopy, and periodic trends.",
        ["unit-1", "atomic-structure-and-properties"],
        [
            mcq(
                r"A \(5.60\text{ g}\) sample of iron contains approximately how many Fe atoms? "
                r"Use \(M_{\mathrm{Fe}}=55.85\text{ g mol}^{-1}\).",
                [
                    r"A) \(6.04\times10^{22}\)",
                    r"B) \(1.00\times10^{23}\)",
                    r"C) \(3.37\times10^{24}\)",
                    r"D) \(6.02\times10^{23}\)",
                ],
                0,
                [
                    r"Convert mass to amount: \(5.60/55.85=0.100\text{ mol Fe}\).",
                    r"Multiply the amount by \(N_A=6.022\times10^{23}\text{ mol}^{-1}\).",
                    "Round to three significant figures.",
                ],
                "1.1 Moles and Molar Mass",
                1,
            ),
            mcq(
                "The valence-electron peak in the photoelectron spectrum of Mg is at a higher binding energy than "
                "the corresponding peak for Na. Which explanation is best?",
                [
                    "A) Mg has more occupied principal energy levels than Na.",
                    "B) Mg has a larger nuclear charge with similar shielding for its valence electrons.",
                    "C) Na has a filled valence subshell, which increases repulsion.",
                    "D) Mg has fewer protons and therefore attracts valence electrons less strongly.",
                ],
                1,
                [
                    "Compare the atoms within the same period, so their valence electrons have similar core shielding.",
                    "A greater nuclear charge increases effective nuclear attraction.",
                    "Stronger attraction means more energy is needed to remove an electron.",
                ],
                "1.6 Photoelectron Spectroscopy",
                2,
            ),
            frq(
                "Element X has two stable isotopes: X-62 with mass 61.93 u and X-64 with mass 63.93 u. "
                "Its average atomic mass is 62.55 u. Calculate the fractional abundance of X-62. Then write the "
                "ground-state electron configuration of nickel as a separate task.",
                [
                    r"Let \(x\) be the fractional abundance of X-62 and write the weighted-average equation.",
                    "Solve for the fraction and check that both isotope fractions sum to 1.",
                    "For the separate Ni task, place 28 electrons according to the Aufbau pattern.",
                ],
                [
                    r"\(62.55=61.93x+63.93(1-x)\), so \(x=0.690\); X-62 is about \(69.0\%\).",
                    r"\(\mathrm{Ni}:[Ar]\,3d^8 4s^2\).",
                ],
                "1.2 Mass Spectra of Elements",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Chemistry Unit 2: Compound Structure and Properties",
        "AP Chemistry",
        "CED-aligned practice with ionic solids, Lewis diagrams, resonance, formal charge, bond polarity, and molecular geometry.",
        ["unit-2", "compound-structure-and-properties"],
        [
            mcq(
                "Which substance is expected to have the greatest lattice energy?",
                ["A) NaF", "B) NaCl", "C) MgO", "D) KBr"],
                2,
                [
                    "Lattice energy increases as the ionic charge product increases.",
                    "For comparable structures, lattice energy also increases as ion separation decreases.",
                    r"\(\mathrm{Mg^{2+}}\) and \(\mathrm{O^{2-}}\) have the largest charge product among the choices.",
                ],
                "2.2 Intramolecular Force and Potential Energy",
                2,
            ),
            mcq(
                r"Which description of the molecular geometry and polarity of \(\mathrm{SO_2}\) is correct?",
                [
                    "A) Linear and nonpolar",
                    "B) Bent and polar",
                    "C) Trigonal planar and nonpolar",
                    "D) Tetrahedral and polar",
                ],
                1,
                [
                    "Draw the Lewis structure and count electron domains around sulfur.",
                    "Three electron domains give trigonal-planar electron geometry; one is a lone pair.",
                    "The bent shape prevents the S–O bond dipoles from canceling.",
                ],
                "2.7 VSEPR and Hybridization",
                2,
            ),
            frq(
                r"Draw a valid Lewis structure for \(\mathrm{NO_3^-}\). State the electron-domain geometry around N, "
                "the average N–O bond order, and why all three measured N–O bond lengths are equal.",
                [
                    "Count total valence electrons, including the electron added for the negative charge.",
                    "Minimize formal charges and identify equivalent placements of the double bond.",
                    "Use resonance to determine the average bond order and observed bond lengths.",
                ],
                [
                    "A valid contributor has central N bonded to three O atoms, one N=O and two N–O⁻ bonds, in brackets with overall −1 charge.",
                    "The electron-domain geometry is trigonal planar.",
                    r"There are three equivalent resonance contributors, so each N–O bond has average bond order "
                    r"\((2+1+1)/3=4/3\); electron delocalization makes the three lengths equal.",
                ],
                "2.6 Resonance and Formal Charge",
                3,
            ),
        ],
        40,
    ),
    quiz(
        "AP Chemistry Unit 3: Properties of Substances and Mixtures",
        "AP Chemistry",
        "CED-aligned practice with intermolecular forces, gases, solutions, separation methods, and electromagnetic spectroscopy.",
        ["unit-3", "properties-of-substances-and-mixtures"],
        [
            mcq(
                "At the same temperature, which pure liquid is expected to have the lowest vapor pressure?",
                ["A) CH₄", "B) CH₃OCH₃", "C) CH₃CH₂OH", "D) CH₃CH₂CH₃"],
                2,
                [
                    "Lower vapor pressure corresponds to stronger attractions between liquid particles.",
                    "Identify the strongest intermolecular force available to each molecular substance.",
                    "Ethanol molecules form hydrogen bonds through their O–H groups.",
                ],
                "3.1 Intermolecular and Interparticle Forces",
                1,
            ),
            mcq(
                r"A gas occupies \(2.00\text{ L}\) at \(1.20\text{ atm}\) and \(300\text{ K}\). What volume will it "
                r"occupy at \(0.800\text{ atm}\) and \(360\text{ K}\), assuming ideal behavior?",
                [
                    r"A) \(1.11\text{ L}\)",
                    r"B) \(1.80\text{ L}\)",
                    r"C) \(3.00\text{ L}\)",
                    r"D) \(3.60\text{ L}\)",
                ],
                3,
                [
                    r"Use the combined gas law: \(P_1V_1/T_1=P_2V_2/T_2\).",
                    r"Rearrange: \(V_2=V_1(P_1/P_2)(T_2/T_1)\).",
                    r"Substitute to obtain \(2.00(1.20/0.800)(360/300)\).",
                ],
                "3.4 Ideal Gas Law",
                2,
            ),
            frq(
                "A mixture contains a blue dye that is more polar than a red dye. Paper chromatography is performed "
                "with a relatively nonpolar mobile phase and polar paper. Predict which dye has the larger retention "
                r"factor, \(R_f\). If the solvent front travels \(8.0\text{ cm}\) and the red dye travels "
                r"\(6.0\text{ cm}\), calculate its \(R_f\).",
                [
                    "Compare each dye's attraction to the polar stationary phase with its attraction to the mobile phase.",
                    "The component traveling farther relative to the solvent front has the larger retention factor.",
                    r"Use \(R_f=(\text{distance traveled by solute})/(\text{distance traveled by solvent})\).",
                ],
                [
                    r"The less polar red dye should have the larger \(R_f\) because it interacts less strongly with the polar paper.",
                    r"For the red dye, \(R_f=6.0/8.0=0.75\).",
                ],
                "3.9 Separation of Solutions and Mixtures",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Chemistry Unit 4: Chemical Reactions",
        "AP Chemistry",
        "CED-aligned practice with reaction representations, net ionic equations, stoichiometry, titration, and oxidation-reduction.",
        ["unit-4", "chemical-reactions"],
        [
            mcq(
                r"When aqueous \(\mathrm{BaCl_2}\) and \(\mathrm{Na_2SO_4}\) are mixed, which is the correct net ionic equation?",
                [
                    r"A) \(\mathrm{Ba^{2+}+SO_4^{2-}\rightarrow BaSO_4(s)}\)",
                    r"B) \(\mathrm{Na^++Cl^-\rightarrow NaCl(s)}\)",
                    r"C) \(\mathrm{BaCl_2+Na_2SO_4\rightarrow BaSO_4+2NaCl}\)",
                    r"D) \(\mathrm{Ba^{2+}+2Cl^-\rightarrow BaCl_2(s)}\)",
                ],
                0,
                [
                    "Use solubility rules to identify the precipitate.",
                    "Dissociate soluble strong electrolytes into ions.",
                    r"Cancel the spectator ions \(\mathrm{Na^+}\) and \(\mathrm{Cl^-}\).",
                ],
                "4.2 Net Ionic Equations",
                1,
            ),
            mcq(
                r"How many moles of \(\mathrm{O_2}\) are required to completely combust \(0.50\text{ mol}\) "
                r"of propane according to \(\mathrm{C_3H_8+5O_2\rightarrow3CO_2+4H_2O}\)?",
                [
                    r"A) \(0.10\text{ mol}\)",
                    r"B) \(1.5\text{ mol}\)",
                    r"C) \(2.0\text{ mol}\)",
                    r"D) \(2.5\text{ mol}\)",
                ],
                3,
                [
                    "Read the stoichiometric ratio from the balanced equation.",
                    r"The ratio is \(5\text{ mol O}_2:1\text{ mol C}_3\text{H}_8\).",
                    r"Multiply \(0.50\text{ mol}\) propane by 5.",
                ],
                "4.5 Stoichiometry",
                1,
            ),
            frq(
                r"A \(25.00\text{ mL}\) sample containing \(\mathrm{Fe^{2+}}\) requires \(18.60\text{ mL}\) of "
                r"\(0.0200\text{ M }\mathrm{MnO_4^-}\) for titration in acid. The reaction is "
                r"\(\mathrm{MnO_4^-+5Fe^{2+}+8H^+\rightarrow Mn^{2+}+5Fe^{3+}+4H_2O}\). "
                r"Calculate \([\mathrm{Fe^{2+}}]\) and identify the species oxidized.",
                [
                    r"Find moles of \(\mathrm{MnO_4^-}\) from molarity and volume in liters.",
                    r"Apply the \(5:1\) mole ratio to find moles of \(\mathrm{Fe^{2+}}\).",
                    "Divide by the sample volume in liters and compare oxidation states.",
                ],
                [
                    r"\(n(\mathrm{MnO_4^-})=(0.0200)(0.01860)=3.72\times10^{-4}\text{ mol}\).",
                    r"\(n(\mathrm{Fe^{2+}})=5(3.72\times10^{-4})=1.86\times10^{-3}\text{ mol}\), so "
                    r"\([\mathrm{Fe^{2+}}]=0.0744\text{ M}\).",
                    r"\(\mathrm{Fe^{2+}}\) is oxidized to \(\mathrm{Fe^{3+}}\).",
                ],
                "4.9 Oxidation-Reduction (Redox) Reactions",
                3,
            ),
        ],
        40,
    ),
    quiz(
        "AP Chemistry Unit 5: Kinetics",
        "AP Chemistry",
        "CED-aligned practice with rate laws, concentration-time relationships, collision models, mechanisms, and catalysis.",
        ["unit-5", "kinetics"],
        [
            mcq(
                "For a reaction, doubling [A] while holding [B] constant quadruples the initial rate; doubling [B] "
                "while holding [A] constant doubles the rate. Which rate law is consistent with the data?",
                [
                    r"A) \(\text{rate}=k[A][B]\)",
                    r"B) \(\text{rate}=k[A]^2[B]\)",
                    r"C) \(\text{rate}=k[A][B]^2\)",
                    r"D) \(\text{rate}=k[A]^2[B]^2\)",
                ],
                1,
                [
                    "Relate each concentration factor to the resulting rate factor.",
                    r"For A, \(2^m=4\), so \(m=2\).",
                    r"For B, \(2^n=2\), so \(n=1\).",
                ],
                "5.2 Introduction to Rate Law",
                2,
            ),
            mcq(
                r"A proposed mechanism is: (1) \(\mathrm{NO_2+NO_2\rightarrow NO_3+NO}\) slow; "
                r"(2) \(\mathrm{NO_3+CO\rightarrow NO_2+CO_2}\) fast. Which rate law is predicted?",
                [
                    r"A) \(\text{rate}=k[\mathrm{NO_2}]^2\)",
                    r"B) \(\text{rate}=k[\mathrm{NO_3}][\mathrm{CO}]\)",
                    r"C) \(\text{rate}=k[\mathrm{NO_2}][\mathrm{CO}]\)",
                    r"D) \(\text{rate}=k[\mathrm{CO}]^2\)",
                ],
                0,
                [
                    "Identify the rate-determining elementary step.",
                    "For a slow elementary step, use its reactant molecularity in the predicted rate law.",
                    r"Two \(\mathrm{NO_2}\) molecules are reactants in the slow step.",
                ],
                "5.8 Reaction Mechanism and Rate Law",
                2,
            ),
            frq(
                r"A first-order decomposition has \(k=0.0350\text{ min}^{-1}\). Calculate the fraction of reactant "
                r"remaining after \(30.0\text{ min}\). Explain how a catalyst changes the energy profile and why it "
                "does not change the reaction enthalpy.",
                [
                    r"Use the first-order relation \([A]_t/[A]_0=e^{-kt}\).",
                    "Calculate the dimensionless exponent using consistent time units.",
                    "Distinguish activation energy, which is pathway-dependent, from state-function enthalpy.",
                ],
                [
                    r"\([A]_t/[A]_0=e^{-(0.0350)(30.0)}=e^{-1.05}=0.350\), so \(35.0\%\) remains.",
                    "A catalyst provides an alternate pathway with lower activation energy for both directions.",
                    r"The initial and final states are unchanged, so \(\Delta H_{\mathrm{rxn}}\) is unchanged.",
                ],
                "5.11 Catalysis",
                2,
            ),
        ],
        40,
    ),
    quiz(
        "AP Chemistry Unit 6: Thermochemistry",
        "AP Chemistry",
        "CED-aligned practice with heat transfer, calorimetry, phase changes, reaction enthalpy, Hess's law, and bond enthalpy.",
        ["unit-6", "thermochemistry"],
        [
            mcq(
                r"A reaction warms \(100.0\text{ g}\) of solution from \(22.0^\circ\text{C}\) to "
                r"\(28.0^\circ\text{C}\). Assume \(c=4.18\text{ J g}^{-1}\text{K}^{-1}\). What is "
                r"\(q_{\mathrm{rxn}}\) for the reaction as performed?",
                [
                    r"A) \(-2.51\text{ kJ}\)",
                    r"B) \(+2.51\text{ kJ}\)",
                    r"C) \(-25.1\text{ kJ}\)",
                    r"D) \(+25.1\text{ kJ}\)",
                ],
                0,
                [
                    r"Calculate heat gained by the solution with \(q=mc\Delta T\).",
                    r"\(q_{\mathrm{solution}}=(100.0)(4.18)(6.0)=2.51\times10^3\text{ J}\).",
                    "The reaction loses the heat that the surroundings gain.",
                ],
                "6.4 Heat Capacity and Calorimetry",
                2,
            ),
            mcq(
                r"Given \(\Delta H_f^\circ[\mathrm{CO_2(g)}]=-394\text{ kJ mol}^{-1}\), "
                r"\(\Delta H_f^\circ[\mathrm{H_2O(l)}]=-286\text{ kJ mol}^{-1}\), and "
                r"\(\Delta H_f^\circ[\mathrm{CH_4(g)}]=-75\text{ kJ mol}^{-1}\), what is \(\Delta H^\circ\) for "
                r"\(\mathrm{CH_4+2O_2\rightarrow CO_2+2H_2O(l)}\)?",
                [
                    r"A) \(-891\text{ kJ mol}^{-1}\)",
                    r"B) \(-605\text{ kJ mol}^{-1}\)",
                    r"C) \(+891\text{ kJ mol}^{-1}\)",
                    r"D) \(+1037\text{ kJ mol}^{-1}\)",
                ],
                0,
                [
                    r"Use \(\Delta H^\circ_{\mathrm{rxn}}=\sum n\Delta H_f^\circ(\text{products})-\sum n\Delta H_f^\circ(\text{reactants})\).",
                    r"Products sum to \(-394+2(-286)=-966\text{ kJ mol}^{-1}\).",
                    r"Subtract the reactant sum, \(-75\text{ kJ mol}^{-1}\).",
                ],
                "6.8 Enthalpy of Formation",
                2,
            ),
            frq(
                r"A \(50.0\text{ g}\) sample of ice at \(0^\circ\text{C}\) melts and the resulting water warms to "
                r"\(20.0^\circ\text{C}\). Use \(\Delta H_{\mathrm{fus}}=334\text{ J g}^{-1}\) and "
                r"\(c_{\mathrm{water}}=4.18\text{ J g}^{-1}\text{K}^{-1}\). Calculate the total energy absorbed "
                "and identify which part changes potential energy.",
                [
                    "Separate the process into melting at constant temperature and warming liquid water.",
                    r"Calculate \(q_{\mathrm{melt}}=m\Delta H_{\mathrm{fus}}\) and \(q_{\mathrm{warm}}=mc\Delta T\).",
                    "Add the energies and interpret particle-level changes.",
                ],
                [
                    r"\(q_{\mathrm{melt}}=(50.0)(334)=16.7\text{ kJ}\).",
                    r"\(q_{\mathrm{warm}}=(50.0)(4.18)(20.0)=4.18\text{ kJ}\); total \(q=20.9\text{ kJ}\).",
                    "Melting increases potential energy by overcoming some intermolecular attractions; warming increases average kinetic energy.",
                ],
                "6.5 Energy of Phase Changes",
                2,
            ),
        ],
        40,
    ),
    quiz(
        "AP Chemistry Unit 7: Equilibrium",
        "AP Chemistry",
        "CED-aligned practice with dynamic equilibrium, reaction quotients, equilibrium constants, Le Châtelier's principle, and solubility.",
        ["unit-7", "equilibrium"],
        [
            mcq(
                r"For \(\mathrm{N_2O_4(g)\rightleftharpoons2NO_2(g)}\), which is the correct \(K_c\) expression?",
                [
                    r"A) \(K_c=[\mathrm{N_2O_4}]/[\mathrm{NO_2}]^2\)",
                    r"B) \(K_c=[\mathrm{NO_2}]^2/[\mathrm{N_2O_4}]\)",
                    r"C) \(K_c=2[\mathrm{NO_2}]/[\mathrm{N_2O_4}]\)",
                    r"D) \(K_c=[\mathrm{NO_2}]/[\mathrm{N_2O_4}]\)",
                ],
                1,
                [
                    "Place product activities in the numerator and reactant activities in the denominator.",
                    "Use stoichiometric coefficients as exponents.",
                    "Both species are gases, so both appear in the expression.",
                ],
                "7.4 Calculating the Equilibrium Constant",
                1,
            ),
            mcq(
                r"For an exothermic reaction at equilibrium, \(\mathrm{A(g)\rightleftharpoons B(g)+heat}\), "
                "which change increases the equilibrium amount of A?",
                [
                    "A) Decreasing temperature",
                    "B) Increasing temperature",
                    "C) Adding a catalyst",
                    "D) Removing A",
                ],
                1,
                [
                    "Treat heat as a product for an exothermic forward reaction.",
                    "Increasing temperature adds a product, so the system shifts toward reactants.",
                    "A catalyst changes the time to equilibrium but not equilibrium composition.",
                ],
                "7.9 Introduction to Le Châtelier's Principle",
                2,
            ),
            frq(
                r"For \(\mathrm{PCl_5(g)\rightleftharpoons PCl_3(g)+Cl_2(g)}\), \(K_c=0.040\). Initially "
                r"\([\mathrm{PCl_5}]=0.50\text{ M}\) and both products are absent. Write the ICE relation, calculate "
                "the equilibrium concentrations, and state whether equilibrium is static or dynamic.",
                [
                    r"Let \(x\) molar of PCl₅ dissociate and express all equilibrium concentrations in terms of x.",
                    r"Substitute into \(K_c=x^2/(0.50-x)\) and solve the quadratic.",
                    "Check that the root is physically possible and describe molecular behavior at equilibrium.",
                ],
                [
                    r"ICE changes are \(-x,+x,+x\), so \(0.040=x^2/(0.50-x)\).",
                    r"The physical root is \(x=0.123\text{ M}\); \([\mathrm{PCl_5}]=0.377\text{ M}\) and "
                    r"\([\mathrm{PCl_3}]=[\mathrm{Cl_2}]=0.123\text{ M}\).",
                    "Equilibrium is dynamic: forward and reverse reaction rates are equal while both reactions continue.",
                ],
                "7.7 Calculating Equilibrium Concentrations",
                3,
            ),
        ],
        42,
    ),
    quiz(
        "AP Chemistry Unit 8: Acids and Bases",
        "AP Chemistry",
        "CED-aligned practice with acid-base definitions, pH, weak-acid equilibria, buffers, titrations, and molecular structure.",
        ["unit-8", "acids-and-bases"],
        [
            mcq(
                r"What is the pH of \(2.5\times10^{-3}\text{ M HCl}\) at \(25^\circ\text{C}\)?",
                ["A) 2.60", "B) 3.40", "C) 11.40", "D) 12.60"],
                0,
                [
                    "HCl is a strong acid and dissociates essentially completely.",
                    r"Thus \([\mathrm{H_3O^+}]=2.5\times10^{-3}\text{ M}\).",
                    r"Use \(\mathrm{pH}=-\log[\mathrm{H_3O^+}]\).",
                ],
                "8.2 pH and pOH of Strong Acids and Bases",
                1,
            ),
            mcq(
                r"A buffer contains equal concentrations of \(\mathrm{CH_3COOH}\) and \(\mathrm{CH_3COO^-}\). "
                r"Given \(pK_a=4.76\), what is its approximate pH?",
                ["A) 2.38", "B) 4.76", "C) 7.00", "D) 9.52"],
                1,
                [
                    r"Use the Henderson–Hasselbalch equation: \(\mathrm{pH}=pK_a+\log([A^-]/[HA])\).",
                    "The concentration ratio is 1.",
                    r"Because \(\log(1)=0\), pH equals \(pK_a\).",
                ],
                "8.9 Henderson-Hasselbalch Equation",
                2,
            ),
            frq(
                r"A \(25.0\text{ mL}\) sample of \(0.100\text{ M }\mathrm{CH_3COOH}\) (\(K_a=1.8\times10^{-5}\)) "
                r"is titrated with \(0.100\text{ M NaOH}\). Calculate the initial pH, the volume of NaOH at the "
                "equivalence point, and the pH at the half-equivalence point.",
                [
                    r"For the initial weak acid, use \(K_a=x^2/(C-x)\) and verify the small-x approximation.",
                    "At equivalence, set moles of added hydroxide equal to initial moles of acid.",
                    "At half-equivalence, conjugate base and acid concentrations are equal.",
                ],
                [
                    r"Initially, \(x\approx\sqrt{(1.8\times10^{-5})(0.100)}=1.34\times10^{-3}\text{ M}\), so pH \(=2.87\).",
                    r"Initial acid is \(0.00250\text{ mol}\); equivalence requires \(25.0\text{ mL}\) of \(0.100\text{ M NaOH}\).",
                    r"At half-equivalence, \(\mathrm{pH}=pK_a=-\log(1.8\times10^{-5})=4.74\).",
                ],
                "8.5 Acid-Base Titrations",
                3,
            ),
        ],
        42,
    ),
    quiz(
        "AP Chemistry Unit 9: Thermodynamics and Electrochemistry",
        "AP Chemistry",
        "CED-aligned practice with entropy, Gibbs free energy, thermodynamic favorability, galvanic cells, electrolysis, and Faraday's law.",
        ["unit-9", "thermodynamics-and-electrochemistry"],
        [
            mcq(
                r"For a process with \(\Delta H>0\) and \(\Delta S>0\), under which condition is the process "
                r"thermodynamically favorable?",
                [
                    "A) At all temperatures",
                    "B) At no temperatures",
                    r"C) At sufficiently high temperatures where \(T\Delta S>\Delta H\)",
                    r"D) At sufficiently low temperatures where \(T\Delta S>\Delta H\)",
                ],
                2,
                [
                    r"Use \(\Delta G=\Delta H-T\Delta S\).",
                    r"Favorability under standard conditions requires \(\Delta G<0\).",
                    "With both terms positive, the entropy term must dominate, which occurs at high temperature.",
                ],
                "9.3 Gibbs Free Energy and Thermodynamic Favorability",
                2,
            ),
            mcq(
                r"Given \(E^\circ(\mathrm{Cu^{2+}/Cu})=+0.34\text{ V}\) and "
                r"\(E^\circ(\mathrm{Zn^{2+}/Zn})=-0.76\text{ V}\), what is \(E^\circ_{\mathrm{cell}}\) for the "
                "spontaneous Zn–Cu galvanic cell?",
                ["A) −1.10 V", "B) −0.42 V", "C) +0.42 V", "D) +1.10 V"],
                3,
                [
                    "The more positive reduction potential identifies reduction at the cathode.",
                    "Copper(II) is reduced and zinc is oxidized.",
                    r"Use \(E^\circ_{\mathrm{cell}}=E^\circ_{\mathrm{cathode}}-E^\circ_{\mathrm{anode}}\).",
                ],
                "9.8 Galvanic (Voltaic) and Electrolytic Cells",
                2,
            ),
            frq(
                r"An electrolytic cell plates Cu from \(\mathrm{Cu^{2+}}\) using a constant current of \(2.00\text{ A}\) "
                r"for \(32.0\text{ min}\). Calculate the mass of Cu deposited. Use \(F=96485\text{ C mol}^{-1}\) "
                r"and \(M_{\mathrm{Cu}}=63.55\text{ g mol}^{-1}\). State the cathode half-reaction.",
                [
                    r"Find charge from \(Q=It\), converting minutes to seconds.",
                    "Convert charge to moles of electrons with Faraday's constant.",
                    "Use the half-reaction stoichiometry to obtain moles and then mass of copper.",
                ],
                [
                    r"\(Q=(2.00)(32.0\times60)=3840\text{ C}\), or \(0.0398\text{ mol }e^-\).",
                    r"\(\mathrm{Cu^{2+}+2e^-\rightarrow Cu(s)}\), so \(n(\mathrm{Cu})=0.0199\text{ mol}\).",
                    r"The deposited mass is \((0.0199)(63.55)=1.26\text{ g Cu}\).",
                ],
                "9.11 Electrolysis and Faraday's Law",
                3,
            ),
        ],
        42,
    ),
    quiz(
        "AP Chemistry Mixed CED Review",
        "AP Chemistry",
        "Mixed-unit synthesis of structure, kinetics, equilibrium, acid-base chemistry, thermodynamics, and electrochemistry.",
        ["mixed-review", "units-1-9"],
        [
            mcq(
                "A catalyst is added to a system already at equilibrium. Which statement is correct?",
                [
                    "A) The equilibrium constant increases.",
                    "B) The product concentration increases permanently.",
                    "C) Forward and reverse rates increase, but the equilibrium composition does not change.",
                    "D) Only the forward activation energy decreases.",
                ],
                2,
                [
                    "A catalyst provides a lower-energy pathway for both directions.",
                    "It affects rates, not the thermodynamic state function or equilibrium constant.",
                    "Because the system is already at equilibrium, concentrations remain at equilibrium values.",
                ],
                "5.11 Catalysis / 7.1 Introduction to Equilibrium",
                2,
            ),
            mcq(
                r"A \(0.10\text{ M}\) solution of which solute should have the highest electrical conductivity?",
                [
                    r"A) \(\mathrm{CH_3OH}\)",
                    r"B) \(\mathrm{CH_3COOH}\)",
                    r"C) \(\mathrm{NaCl}\)",
                    r"D) \(\mathrm{AlCl_3}\)",
                ],
                3,
                [
                    "Conductivity increases with the concentration and charge of mobile ions.",
                    "Distinguish nonelectrolytes, weak electrolytes, and strong electrolytes.",
                    r"\(\mathrm{AlCl_3}\) dissociates into four ions per formula unit under the stated idealized comparison.",
                ],
                "3.7 Solutions and Mixtures",
                2,
            ),
            frq(
                r"A student mixes \(50.0\text{ mL}\) of \(0.100\text{ M HCl}\) with \(50.0\text{ mL}\) of "
                r"\(0.0800\text{ M NaOH}\) in a coffee-cup calorimeter. The temperature rises by "
                r"\(2.20^\circ\text{C}\). Assume density \(1.00\text{ g mL}^{-1}\) and "
                r"heat capacity \(4.18\text{ J g}^{-1}\text{K}^{-1}\). Identify the excess reactant, calculate "
                r"the final pH, and calculate \(\Delta H\) per mole of water formed.",
                [
                    "Calculate moles of acid and base; the smaller amount limits neutralization.",
                    "Find excess strong acid concentration using the total volume, then calculate pH.",
                    r"Use \(q_{\mathrm{solution}}=mc\Delta T\), reverse its sign for the reaction, and divide by moles of water.",
                ],
                [
                    r"HCl: \(0.00500\text{ mol}\); NaOH: \(0.00400\text{ mol}\). HCl is excess by \(0.00100\text{ mol}\).",
                    r"\([\mathrm{H_3O^+}]=0.00100/0.1000=0.0100\text{ M}\), so pH \(=2.00\).",
                    r"\(q_{\mathrm{solution}}=(100.0)(4.18)(2.20)=0.920\text{ kJ}\); "
                    r"\(\Delta H=-0.920/0.00400=-230\text{ kJ mol}^{-1}\) for the experimental data.",
                ],
                "4.5 Stoichiometry / 6.4 Heat Capacity and Calorimetry / 8.2 pH and pOH of Strong Acids and Bases",
                3,
            ),
        ],
        45,
        3,
    ),

    # AP Biology
    quiz(
        "AP Biology Unit 1: Chemistry of Life",
        "AP Biology",
        "CED-aligned practice with water, elements of life, macromolecular structure, hydrolysis, and dehydration synthesis.",
        ["unit-1", "chemistry-of-life"],
        [
            mcq(
                "Water striders can remain on the surface of a pond primarily because",
                [
                    "A) ionic bonds form between adjacent water molecules",
                    "B) hydrogen bonding creates strong cohesion and surface tension",
                    "C) water is nonpolar and repels the insects' legs",
                    "D) covalent bonds between water molecules resist breaking",
                ],
                1,
                [
                    "Relate water's polar O–H bonds to attractions among separate molecules.",
                    "Hydrogen bonds create cohesion among surface molecules.",
                    "Cohesion accounts for high surface tension.",
                ],
                "1.1 Structure of Water and Hydrogen Bonding",
                1,
            ),
            mcq(
                "Which change most directly converts a polymer into monomers?",
                [
                    "A) Removing water to form covalent bonds",
                    "B) Adding water to break covalent bonds",
                    "C) Adding phosphate to form hydrogen bonds",
                    "D) Removing carbon dioxide to break ionic bonds",
                ],
                1,
                [
                    "Recall the opposing reactions used to build and break biological polymers.",
                    "Hydrolysis consumes water as a covalent linkage is broken.",
                    "Dehydration synthesis removes water while making a linkage.",
                ],
                "1.3 Introduction to Macromolecules",
                1,
            ),
            frq(
                "A single amino-acid substitution replaces a hydrophobic residue in the interior of an enzyme with "
                "a charged residue. Predict one effect on tertiary structure and one effect on enzyme activity. "
                "Explain why the primary structure has changed but peptide bonds elsewhere remain intact.",
                [
                    "Identify the interactions that normally stabilize a hydrophobic protein interior.",
                    "Connect altered side-chain interactions to three-dimensional shape and active-site function.",
                    "Distinguish amino-acid sequence from the peptide-bonded backbone.",
                ],
                [
                    "The charged side chain can disrupt hydrophobic interactions and form new ionic or hydrogen-bond interactions, altering tertiary structure.",
                    "If the active site's shape or chemistry changes, substrate binding or catalysis will likely decrease.",
                    "The substitution changes the amino-acid sequence (primary structure), but it does not require hydrolysis of the other peptide bonds.",
                ],
                "1.7 Proteins",
                2,
            ),
        ],
        36,
    ),
    quiz(
        "AP Biology Unit 2: Cells",
        "AP Biology",
        "CED-aligned practice with organelles, cell size, plasma membranes, membrane transport, tonicity, and compartmentalization.",
        ["unit-2", "cells"],
        [
            mcq(
                "A pancreatic cell that exports large quantities of digestive enzymes would be expected to contain abundant",
                [
                    "A) smooth endoplasmic reticulum and peroxisomes",
                    "B) rough endoplasmic reticulum and Golgi apparatus",
                    "C) lysosomes and central vacuoles",
                    "D) chloroplasts and plasmodesmata",
                ],
                1,
                [
                    "Digestive enzymes are proteins destined for secretion.",
                    "Ribosomes on rough ER synthesize proteins entering the endomembrane system.",
                    "The Golgi modifies, sorts, and packages secreted proteins.",
                ],
                "2.1 Cell Structure and Function",
                1,
            ),
            mcq(
                "As a spherical cell's radius increases without a shape change, its surface-area-to-volume ratio",
                [
                    "A) increases because surface area grows faster than volume",
                    "B) remains constant",
                    "C) decreases because volume grows faster than surface area",
                    "D) becomes zero",
                ],
                2,
                [
                    r"For a sphere, surface area scales with \(r^2\) and volume with \(r^3\).",
                    r"Thus the ratio scales as \(1/r\).",
                    "A larger radius therefore reduces exchange area available per unit volume.",
                ],
                "2.2 Cell Size",
                1,
            ),
            frq(
                "A plant cell with solute potential −0.70 MPa and pressure potential +0.20 MPa is placed in an open "
                "solution with solute potential −0.30 MPa. Calculate the water potential of the cell and solution, "
                "predict net water movement, and describe the likely short-term change in cell pressure potential.",
                [
                    r"Use \(\Psi=\Psi_s+\Psi_p\) for each compartment.",
                    "Water moves from higher (less negative) water potential to lower (more negative) water potential.",
                    "Relate incoming or outgoing water to turgor pressure.",
                ],
                [
                    r"Cell \(\Psi=-0.70+0.20=-0.50\text{ MPa}\); open solution \(\Psi=-0.30+0=-0.30\text{ MPa}\).",
                    "Water moves from the solution into the cell because −0.30 MPa is higher than −0.50 MPa.",
                    "The cell's pressure potential increases as the cell becomes more turgid, until equilibrium is approached.",
                ],
                "2.7 Tonicity and Osmoregulation",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Biology Unit 3: Cellular Energetics",
        "AP Biology",
        "CED-aligned practice with enzymes, environmental effects, photosynthesis, cellular respiration, and energy coupling.",
        ["unit-3", "cellular-energetics"],
        [
            mcq(
                "A competitive inhibitor reduces an enzyme's reaction rate by",
                [
                    "A) permanently denaturing the enzyme at all temperatures",
                    "B) binding the active site and competing with substrate",
                    "C) lowering the free energy of the products",
                    "D) increasing the reaction's activation energy above the uncatalyzed value",
                ],
                1,
                [
                    "Identify where a competitive inhibitor binds.",
                    "Competition reduces the fraction of active sites occupied by substrate.",
                    "Sufficiently high substrate concentration can reduce the inhibitor's effect.",
                ],
                "3.2 Environmental Impacts on Enzyme Function",
                1,
            ),
            mcq(
                "The oxygen gas released during photosynthesis comes most directly from",
                [
                    "A) reduction of carbon dioxide in the Calvin cycle",
                    "B) splitting water during the light-dependent reactions",
                    "C) oxidation of glucose during glycolysis",
                    "D) ATP hydrolysis in the chloroplast stroma",
                ],
                1,
                [
                    "Track the electron donor in oxygenic photosynthesis.",
                    "Photosystem II replaces lost electrons by oxidizing water.",
                    "That reaction produces electrons, protons, and molecular oxygen.",
                ],
                "3.4 Photosynthesis",
                1,
            ),
            frq(
                "Yeast cultures receive equal amounts of glucose. Culture A has oxygen; Culture B lacks oxygen. "
                "Predict which culture produces more ATP per glucose, identify the final electron acceptor in A, "
                "and explain why fermentation permits glycolysis to continue in B.",
                [
                    "Compare substrate-level phosphorylation alone with respiration that includes oxidative phosphorylation.",
                    "Trace electrons at the end of the aerobic electron transport chain.",
                    "Identify the oxidized electron carrier required by glycolysis.",
                ],
                [
                    "Culture A produces much more ATP per glucose because aerobic respiration includes the citric acid cycle and oxidative phosphorylation.",
                    "Oxygen is the final electron acceptor in Culture A and is reduced to water.",
                    r"Fermentation oxidizes NADH to regenerate \(\mathrm{NAD^+}\), allowing glycolysis to continue producing ATP.",
                ],
                "3.5 Cellular Respiration",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Biology Unit 4: Cell Communication and Cell Cycle",
        "AP Biology",
        "CED-aligned practice with signal transduction, feedback, cell-cycle regulation, and disruption of signaling pathways.",
        ["unit-4", "cell-communication-and-cell-cycle"],
        [
            mcq(
                "A steroid hormone can bind an intracellular receptor because the hormone",
                [
                    "A) is nonpolar enough to cross the phospholipid bilayer",
                    "B) is transported through a membrane ion channel",
                    "C) binds first to a cell-wall receptor",
                    "D) is made entirely of charged amino acids",
                ],
                0,
                [
                    "Relate a signaling molecule's chemical properties to membrane permeability.",
                    "Small nonpolar molecules can diffuse through the hydrophobic membrane interior.",
                    "The hormone-receptor complex can then regulate targets inside the cell.",
                ],
                "4.1 Cell Communication",
                1,
            ),
            mcq(
                "Which example is a negative-feedback mechanism?",
                [
                    "A) Oxytocin intensifies uterine contractions during labor.",
                    "B) Platelet activation recruits additional platelets to a wound.",
                    "C) Rising blood glucose stimulates insulin release, which lowers blood glucose.",
                    "D) A fruit releases ethylene, accelerating ripening and further ethylene release.",
                ],
                2,
                [
                    "Negative feedback counteracts a deviation from a regulated condition.",
                    "Insulin promotes glucose uptake and storage after glucose rises.",
                    "The response therefore reduces the original stimulus.",
                ],
                "4.4 Feedback",
                1,
            ),
            frq(
                "A mutation produces a cyclin-dependent kinase that remains active without cyclin. Predict its effect "
                "on a cell-cycle checkpoint, explain how the mutation could contribute to cancer, and propose one "
                "experimental comparison that would test the prediction.",
                [
                    "State the normal role of regulated cyclin-CDK complexes at checkpoints.",
                    "Connect constitutive activity to cell division despite damage or missing signals.",
                    "Define control and mutant groups and identify a measurable cell-cycle outcome.",
                ],
                [
                    "The kinase may drive cells through a checkpoint even when cyclin levels or checkpoint conditions are insufficient.",
                    "Unregulated checkpoint passage can increase proliferation and allow replication of damaged DNA, contributing to tumor formation.",
                    "Compare otherwise matched wild-type and mutant cells after DNA damage; measure the fraction entering S phase or mitosis. More mutant cells proceeding supports the prediction.",
                ],
                "4.6 Regulation of Cell Cycle",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Biology Unit 5: Heredity",
        "AP Biology",
        "CED-aligned practice with meiosis, genetic diversity, Mendelian inheritance, probability, pedigrees, and chi-square analysis.",
        ["unit-5", "heredity"],
        [
            mcq(
                "Crossing over that increases genetic variation normally occurs between",
                [
                    "A) sister chromatids during mitotic anaphase",
                    "B) nonsister chromatids of homologous chromosomes during prophase I",
                    "C) homologous chromosomes during meiosis II",
                    "D) two unrelated chromosomes during cytokinesis",
                ],
                1,
                [
                    "Identify when homologous chromosomes pair as tetrads.",
                    "During prophase I, nonsister chromatids can exchange corresponding DNA segments.",
                    "The exchange creates recombinant chromatids.",
                ],
                "5.2 Meiosis and Genetic Diversity",
                1,
            ),
            mcq(
                "Two heterozygous parents are crossed for a trait with complete dominance, Aa × Aa. What is the "
                "probability that an offspring has the recessive phenotype?",
                ["A) 0", "B) 1/4", "C) 1/2", "D) 3/4"],
                1,
                [
                    "Each parent produces A and a gametes with equal probability.",
                    "Combine gametes to obtain AA, Aa, Aa, and aa.",
                    "Only aa expresses the recessive phenotype.",
                ],
                "5.3 Mendelian Genetics",
                1,
            ),
            frq(
                "A dihybrid testcross predicts a 1:1:1:1 ratio. The observed offspring counts are 48, 55, 52, and 45 "
                r"(\(n=200\)). Calculate \(\chi^2\), identify the degrees of freedom, and state the conclusion using "
                r"a critical value of 7.815 at \(\alpha=0.05\).",
                [
                    "Use the predicted ratio to calculate the expected count in each category.",
                    r"Calculate \(\chi^2=\sum (O-E)^2/E\).",
                    "Compare the statistic with the critical value using categories minus one degree of freedom.",
                ],
                [
                    "Each expected count is 50.",
                    r"\(\chi^2=[(-2)^2+5^2+2^2+(-5)^2]/50=58/50=1.16\); \(df=4-1=3\).",
                    "Because 1.16 < 7.815, fail to reject the null hypothesis; the deviations are consistent with chance under the 1:1:1:1 model.",
                ],
                "5.3 Mendelian Genetics",
                2,
            ),
        ],
        40,
    ),
    quiz(
        "AP Biology Unit 6: Gene Expression and Regulation",
        "AP Biology",
        "CED-aligned practice with DNA replication, transcription, translation, gene regulation, mutations, biotechnology, and genomes.",
        ["unit-6", "gene-expression-and-regulation"],
        [
            mcq(
                "During DNA replication, DNA polymerase adds nucleotides",
                [
                    "A) to the 5′ end while reading the template 5′ to 3′",
                    "B) to the 3′ end while reading the template 3′ to 5′",
                    "C) to either end while reading both directions",
                    "D) only after RNA polymerase translates the template",
                ],
                1,
                [
                    "A new phosphodiester bond forms at a free 3′ hydroxyl group.",
                    "Therefore the new strand is synthesized 5′ to 3′.",
                    "The antiparallel template is read 3′ to 5′.",
                ],
                "6.2 DNA Replication",
                1,
            ),
            mcq(
                "In the lac operon, when lactose is present and glucose is scarce, transcription is generally high because",
                [
                    "A) the repressor binds the operator and cAMP levels fall",
                    "B) allolactose inactivates the repressor and the CAP-cAMP complex promotes transcription",
                    "C) RNA polymerase is destroyed by lactose",
                    "D) glucose binds the operator and activates the repressor",
                ],
                1,
                [
                    "Lactose availability controls the repressor through allolactose.",
                    "Low glucose raises cAMP, allowing CAP-cAMP to bind near the promoter.",
                    "Repressor removal plus positive CAP regulation yields high transcription.",
                ],
                "6.5 Regulation of Gene Expression",
                2,
            ),
            frq(
                r"A coding DNA strand contains \(5'\text{-ATG GAA TTT CCG TAA-}3'\). Write the corresponding mRNA "
                "and amino-acid sequence. Then predict the likely effect of deleting the first nucleotide after the "
                "start codon.",
                [
                    "The mRNA matches the coding strand except that U replaces T.",
                    "Read codons from the start codon and use the genetic code until a stop codon.",
                    "Determine whether a one-nucleotide deletion preserves or shifts the reading frame.",
                ],
                [
                    r"mRNA: \(5'\text{-AUG GAA UUU CCG UAA-}3'\).",
                    "Peptide: Met–Glu–Phe–Pro, followed by Stop.",
                    "Deleting one nucleotide after AUG causes a frameshift, changing downstream codons and often introducing a premature stop; protein function is likely altered.",
                ],
                "6.4 Translation",
                2,
            ),
        ],
        40,
    ),
    quiz(
        "AP Biology Unit 7: Natural Selection",
        "AP Biology",
        "CED-aligned practice with evidence for evolution, natural selection, Hardy-Weinberg equilibrium, phylogeny, and speciation.",
        ["unit-7", "natural-selection"],
        [
            mcq(
                "After an antibiotic treatment, resistant bacteria make up a larger fraction of a population. The best explanation is that",
                [
                    "A) individual bacteria intentionally developed resistance",
                    "B) antibiotics created only beneficial directed mutations",
                    "C) resistant variants survived and reproduced more than susceptible variants",
                    "D) all susceptible bacteria transformed into resistant bacteria",
                ],
                2,
                [
                    "Heritable variation exists before or arises independently of a selective challenge.",
                    "The antibiotic changes relative survival and reproductive success.",
                    "Alleles associated with resistance therefore become more frequent.",
                ],
                "7.1 Introduction to Natural Selection",
                1,
            ),
            mcq(
                "In a Hardy-Weinberg population, the recessive phenotype frequency is 0.09. What is the expected "
                "heterozygote frequency?",
                ["A) 0.09", "B) 0.21", "C) 0.42", "D) 0.70"],
                2,
                [
                    r"The recessive phenotype frequency is \(q^2=0.09\), so \(q=0.30\).",
                    r"Then \(p=1-q=0.70\).",
                    r"The heterozygote frequency is \(2pq=2(0.70)(0.30)=0.42\).",
                ],
                "7.5 Hardy-Weinberg Equilibrium",
                2,
            ),
            frq(
                "Species A and B share a derived DNA insertion that is absent from species C and D. A and C share "
                "an ancestral morphological trait. Infer the better-supported sister relationship, explain why the "
                "insertion is informative, and describe one additional molecular test.",
                [
                    "Distinguish shared derived characters from shared ancestral characters.",
                    "Use the least-homoplasy interpretation to infer common ancestry.",
                    "Propose comparable sequence data from all species.",
                ],
                [
                    "A and B are better supported as sister taxa because they share the derived insertion.",
                    "The insertion is a synapomorphy likely inherited from their recent common ancestor; the ancestral trait shared by A and C may predate several lineages.",
                    "Sequence the same homologous genes in all four species and compare aligned substitutions, using an outgroup to root the inferred tree.",
                ],
                "7.9 Phylogeny",
                2,
            ),
        ],
        40,
    ),
    quiz(
        "AP Biology Unit 8: Ecology",
        "AP Biology",
        "CED-aligned practice with responses to environments, energy flow, population dynamics, communities, biodiversity, and ecosystem disruption.",
        ["unit-8", "ecology"],
        [
            mcq(
                "If producers in an ecosystem store 20,000 kJ of energy and ecological transfer efficiency is 10%, "
                "approximately how much energy is available to secondary consumers?",
                ["A) 20 kJ", "B) 200 kJ", "C) 2,000 kJ", "D) 200,000 kJ"],
                1,
                [
                    "Primary consumers receive about 10% of producer energy.",
                    "Secondary consumers receive about 10% of primary-consumer energy.",
                    r"Apply two transfers: \(20{,}000(0.10)^2=200\text{ kJ}\).",
                ],
                "8.2 Energy Flow Through Ecosystems",
                1,
            ),
            mcq(
                "A population growing logistically has its greatest absolute growth rate when population size is",
                [
                    "A) near zero",
                    r"B) near \(K/2\)",
                    r"C) exactly \(K\)",
                    "D) far above carrying capacity",
                ],
                1,
                [
                    r"Use the logistic model \(dN/dt=rN(1-N/K)\).",
                    "Very small N limits growth by few reproducing individuals; near K, resource limitation suppresses growth.",
                    r"The product is maximized at \(N=K/2\).",
                ],
                "8.3 Population Ecology",
                2,
            ),
            frq(
                "Removal of a top predator is followed by an increase in herbivores and a decrease in plant biomass. "
                "Identify this pattern, explain the direct and indirect effects, and design a field comparison that "
                "could test whether predator removal caused the plant decline.",
                [
                    "Trace interactions one trophic level at a time.",
                    "Distinguish the predator's direct effect on herbivores from its indirect effect on plants.",
                    "Include replicated treatment and control sites with before-and-after measurements.",
                ],
                [
                    "The pattern is a trophic cascade.",
                    "Predator removal directly releases herbivores from predation; increased herbivory indirectly lowers plant biomass.",
                    "Randomly assign replicated comparable plots to predator exclusion or access, measure herbivore density and plant biomass before and after treatment, and compare changes between groups.",
                ],
                "8.5 Community Ecology",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Biology Mixed CED Review",
        "AP Biology",
        "Mixed-unit synthesis of membranes, energetics, information flow, heredity, evolution, and ecology.",
        ["mixed-review", "units-1-8"],
        [
            mcq(
                "A mutation changes the shape of a membrane receptor's ligand-binding site. Which outcome is most direct?",
                [
                    "A) The cell must immediately change its DNA sequence again.",
                    "B) Ligand binding and downstream signal transduction may decrease.",
                    "C) ATP can no longer be produced by any pathway.",
                    "D) All phospholipids become water-soluble.",
                ],
                1,
                [
                    "Connect protein primary structure to folding and three-dimensional shape.",
                    "Receptor activation begins with specific ligand-receptor interactions.",
                    "Reduced binding can reduce activation of the intracellular signaling cascade.",
                ],
                "1.7 Proteins / 4.2 Introduction to Signal Transduction",
                2,
            ),
            mcq(
                "Which observation most strongly supports common ancestry of two species?",
                [
                    "A) They live in similar climates.",
                    "B) They have the same population size.",
                    "C) They share many homologous DNA sequences with matching rare mutations.",
                    "D) They consume food with similar energy content.",
                ],
                2,
                [
                    "Separate environmental similarity from inherited similarity.",
                    "Homologous sequences are compared at corresponding genomic locations.",
                    "Multiple shared rare mutations are unlikely to arise independently at the same positions.",
                ],
                "7.2 Natural Selection / 7.9 Phylogeny",
                1,
            ),
            frq(
                "A herbicide blocks electron transfer from photosystem II. Predict the immediate effects on oxygen "
                "production, ATP and NADPH production, and carbon fixation. Explain a possible population-level "
                "selective response if rare resistant plants are present.",
                [
                    "Trace the source and path of electrons through the light-dependent reactions.",
                    "Connect ATP and NADPH supply to the Calvin cycle.",
                    "Apply differential reproductive success to heritable resistance.",
                ],
                [
                    "Water oxidation and oxygen production decline because photosystem II cannot sustain electron flow.",
                    "Linear electron flow, proton-gradient formation, ATP production, and NADPH production decline; carbon fixation then declines from insufficient ATP and NADPH.",
                    "Resistant plants leave more offspring under herbicide exposure, so resistance alleles can increase in frequency over generations.",
                ],
                "3.4 Photosynthesis / 7.1 Introduction to Natural Selection",
                3,
            ),
        ],
        43,
        3,
    ),

    # AP Environmental Science
    quiz(
        "AP Environmental Science Unit 1: The Living World: Ecosystems",
        "AP Environmental Science",
        "CED-aligned practice with ecosystem structure, terrestrial and aquatic biomes, productivity, trophic levels, and biogeochemical cycles.",
        ["unit-1", "the-living-world-ecosystems"],
        [
            mcq(
                "Which terrestrial biome is characterized by permafrost, low-growing vegetation, and a short growing season?",
                ["A) Tropical rainforest", "B) Temperate grassland", "C) Tundra", "D) Chaparral"],
                2,
                [
                    "Match climate and soil constraints to characteristic biome vegetation.",
                    "Permafrost limits drainage and deep root growth.",
                    "Cold temperatures and a short growing season characterize tundra.",
                ],
                "1.2 Terrestrial Biomes",
                1,
            ),
            mcq(
                r"An ecosystem has gross primary productivity of \(2{,}400\text{ kcal m}^{-2}\text{yr}^{-1}\) "
                r"and producer respiration of \(900\text{ kcal m}^{-2}\text{yr}^{-1}\). What is its net primary productivity?",
                [
                    r"A) \(900\text{ kcal m}^{-2}\text{yr}^{-1}\)",
                    r"B) \(1{,}500\text{ kcal m}^{-2}\text{yr}^{-1}\)",
                    r"C) \(2{,}400\text{ kcal m}^{-2}\text{yr}^{-1}\)",
                    r"D) \(3{,}300\text{ kcal m}^{-2}\text{yr}^{-1}\)",
                ],
                1,
                [
                    r"Use \(\mathrm{NPP}=\mathrm{GPP}-R\).",
                    "Subtract energy used by producers in respiration.",
                    r"\(2{,}400-900=1{,}500\text{ kcal m}^{-2}\text{yr}^{-1}\).",
                ],
                "1.8 Primary Productivity",
                1,
            ),
            frq(
                "A forest is clear-cut and its trees are burned. Describe one immediate effect on the carbon cycle, "
                "one likely effect on the nitrogen cycle, and one management action that could reduce nutrient loss.",
                [
                    "Identify carbon pools and fluxes altered by combustion and vegetation removal.",
                    "Connect loss of roots and plant uptake to mobile soil nitrogen.",
                    "Choose a practice that keeps soil covered or restores plant uptake.",
                ],
                [
                    "Combustion rapidly transfers stored biomass carbon to atmospheric CO₂, while reduced photosynthesis lowers carbon uptake.",
                    "Reduced plant uptake and increased runoff or leaching can remove nitrate from the soil; burning may also volatilize some nitrogen.",
                    "Retaining buffer strips, using selective cutting, or promptly replanting ground cover can reduce erosion and nutrient loss.",
                ],
                "1.4 The Carbon Cycle / 1.5 The Nitrogen Cycle",
                2,
            ),
        ],
        36,
    ),
    quiz(
        "AP Environmental Science Unit 2: The Living World: Biodiversity",
        "AP Environmental Science",
        "CED-aligned practice with levels of biodiversity, ecosystem services, island biogeography, succession, and conservation.",
        ["unit-2", "the-living-world-biodiversity"],
        [
            mcq(
                "According to island biogeography theory, which island should generally support the greatest species richness?",
                [
                    "A) A small island far from the mainland",
                    "B) A small island near the mainland",
                    "C) A large island far from the mainland",
                    "D) A large island near the mainland",
                ],
                3,
                [
                    "Near islands have higher immigration rates than distant islands.",
                    "Large islands usually have lower extinction rates and more habitat diversity than small islands.",
                    "Combining proximity and large area predicts the greatest richness.",
                ],
                "2.3 Island Biogeography",
                1,
            ),
            mcq(
                "After a low-intensity fire leaves soil intact in a grassland, recovery begins by",
                [
                    "A) primary succession because no organic matter remains",
                    "B) secondary succession because soil and some propagules remain",
                    "C) geological succession beginning with bare rock",
                    "D) speciation without any community change",
                ],
                1,
                [
                    "Determine whether the disturbance removed the existing soil.",
                    "Primary succession begins where soil is absent.",
                    "With soil remaining, recolonization is secondary succession.",
                ],
                "2.7 Ecological Succession",
                1,
            ),
            frq(
                "A highway fragments one continuous forest into several patches. Explain one effect on gene flow, "
                "one edge effect, and one design feature that could reduce biodiversity loss.",
                [
                    "Connect physical isolation to movement and mating among subpopulations.",
                    "Compare conditions at a forest edge with interior conditions.",
                    "Propose a feature that restores connectivity or protects interior habitat.",
                ],
                [
                    "Fragmentation can reduce migration and gene flow, increasing inbreeding and genetic drift within small patches.",
                    "Edges may be warmer, drier, brighter, and more accessible to predators or invasive species than forest interiors.",
                    "Wildlife corridors or vegetated overpasses can reconnect patches; wide protected buffers can also preserve interior habitat.",
                ],
                "2.1 Introduction to Biodiversity / 2.2 Ecosystem Services",
                2,
            ),
        ],
        36,
    ),
    quiz(
        "AP Environmental Science Unit 3: Populations",
        "AP Environmental Science",
        "CED-aligned practice with generalist and specialist species, survivorship, population growth, carrying capacity, and human demography.",
        ["unit-3", "populations"],
        [
            mcq(
                "Which trait is most characteristic of a K-selected species?",
                [
                    "A) Many small offspring with little parental care",
                    "B) Early reproduction and short generation time",
                    "C) Few offspring with substantial parental care",
                    "D) Large population fluctuations far above carrying capacity",
                ],
                2,
                [
                    "K-selected life histories are favored in relatively stable environments near carrying capacity.",
                    "Investment per offspring tends to be high.",
                    "This strategy generally produces fewer, larger offspring with more parental care.",
                ],
                "3.2 K-Selected r-Selected Species",
                1,
            ),
            mcq(
                "A country has a crude birth rate of 24 per 1,000 and a crude death rate of 9 per 1,000, with negligible "
                "migration. What is its approximate annual population growth rate?",
                ["A) 0.15%", "B) 1.5%", "C) 15%", "D) 33%"],
                1,
                [
                    "Subtract crude death rate from crude birth rate.",
                    "The difference is 15 people per 1,000 per year.",
                    "Divide per-thousand units by 10 to express the rate as a percent.",
                ],
                "3.8 Human Population Dynamics",
                1,
            ),
            frq(
                r"A deer population starts at 200 individuals and has an intrinsic growth rate \(r=0.20\text{ yr}^{-1}\). "
                r"The habitat carrying capacity is \(K=500\). Use \(dN/dt=rN(1-N/K)\) to calculate the initial "
                "growth rate. Then explain how a severe drought could change K and population growth.",
                [
                    "Substitute N, r, and K into the logistic-growth expression.",
                    "Evaluate the unused-capacity term before multiplying.",
                    "Relate drought-driven resource scarcity to carrying capacity and density-dependent effects.",
                ],
                [
                    r"\(dN/dt=(0.20)(200)(1-200/500)=24\) deer per year initially.",
                    "Drought can lower carrying capacity by reducing water and forage.",
                    "If the new K approaches or falls below N, growth slows or becomes negative as competition and mortality increase.",
                ],
                "3.5 Population Growth and Resource Availability",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Environmental Science Unit 4: Earth Systems and Resources",
        "AP Environmental Science",
        "CED-aligned practice with plate tectonics, soils, the atmosphere, watersheds, solar radiation, seasons, and climate patterns.",
        ["unit-4", "earth-systems-and-resources"],
        [
            mcq(
                "At a convergent boundary where an oceanic plate meets a continental plate, the most likely result is",
                [
                    "A) seafloor spreading and a mid-ocean ridge",
                    "B) subduction of oceanic lithosphere and formation of a volcanic arc",
                    "C) no earthquakes because the plates move together",
                    "D) formation of a transform fault with no volcanism",
                ],
                1,
                [
                    "Oceanic lithosphere is generally denser than continental lithosphere.",
                    "The oceanic plate descends into the mantle at the boundary.",
                    "Subduction produces earthquakes and magma that can feed a continental volcanic arc.",
                ],
                "4.1 Plate Tectonics",
                1,
            ),
            mcq(
                "Which soil type generally has the greatest permeability and the lowest water-holding capacity?",
                ["A) Clay", "B) Silt", "C) Sand", "D) Loam rich in organic matter"],
                2,
                [
                    "Compare particle size and pore spaces among soil separates.",
                    "Large sand particles create larger connected spaces through which water drains.",
                    "Rapid drainage leaves less retained water.",
                ],
                "4.3 Soil Composition and Properties",
                1,
            ),
            frq(
                "Warm surface water accumulates in the eastern equatorial Pacific during an El Niño event. Describe "
                "the change in coastal upwelling near Peru, one effect on fisheries, and one way atmospheric circulation "
                "can alter precipitation patterns.",
                [
                    "Connect weakened trade winds to movement of warm surface water.",
                    "Relate upwelling to nutrient supply and marine productivity.",
                    "Explain that changed ocean heating shifts convection and global circulation patterns.",
                ],
                [
                    "Coastal upwelling near Peru weakens because warm surface water suppresses the rise of cold deep water.",
                    "Reduced nutrient delivery lowers primary productivity and can reduce fish populations and catches.",
                    "Convection and rainfall shift toward the warmer eastern Pacific, often increasing rain in western South America while contributing to drought in parts of the western Pacific.",
                ],
                "4.9 El Niño and La Niña",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Environmental Science Unit 5: Land and Water Use",
        "AP Environmental Science",
        "CED-aligned practice with agriculture, irrigation, pest management, meat production, fisheries, forestry, mining, urbanization, and sustainability.",
        ["unit-5", "land-and-water-use"],
        [
            mcq(
                "Repeated irrigation in an arid region can reduce crop productivity when",
                [
                    "A) evaporation leaves dissolved salts concentrated in the topsoil",
                    "B) all soil minerals are converted into atmospheric nitrogen",
                    "C) irrigation permanently eliminates erosion",
                    "D) water removes every soil pore",
                ],
                0,
                [
                    "Irrigation water contains dissolved ions even when it appears fresh.",
                    "High evaporation removes water but leaves salts behind.",
                    "Salt accumulation can impair plant water uptake and damage crops.",
                ],
                "5.5 Irrigation Methods",
                1,
            ),
            mcq(
                "Which practice is most consistent with integrated pest management?",
                [
                    "A) Applying the maximum pesticide dose on a fixed schedule",
                    "B) Eradicating every insect species in a field",
                    "C) Monitoring pest levels and combining biological, cultural, and limited chemical controls",
                    "D) Planting one susceptible crop variety continuously",
                ],
                2,
                [
                    "Integrated pest management uses pest thresholds and monitoring.",
                    "It combines prevention and biological or physical methods.",
                    "Targeted pesticides are used only when needed, reducing resistance and non-target harm.",
                ],
                "5.14 Integrated Pest Management",
                1,
            ),
            frq(
                "A city plans to replace a forested watershed with low-density housing and roads. Explain one effect "
                "on runoff, one effect on aquatic habitat, and two design strategies that could reduce those impacts.",
                [
                    "Compare infiltration in vegetated soil with runoff from impervious surfaces.",
                    "Trace sediment, pollutants, and warmer stormwater to streams.",
                    "Choose strategies that retain, infiltrate, or filter stormwater.",
                ],
                [
                    "Impervious surfaces and vegetation removal reduce infiltration and increase the volume and speed of runoff.",
                    "Greater erosion, pollutant loads, flashier flows, and warmer water can degrade habitat and lower dissolved oxygen.",
                    "Use permeable pavement and rain gardens or bioswales; preserving riparian buffers and clustering development are also valid strategies.",
                ],
                "5.10 Impacts of Urbanization",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Environmental Science Unit 6: Energy Resources and Consumption",
        "AP Environmental Science",
        "CED-aligned practice with energy use, fossil fuels, nuclear power, renewable resources, conservation, and energy calculations.",
        ["unit-6", "energy-resources-and-consumption"],
        [
            mcq(
                "Compared with a coal-fired power plant, electricity generation by a wind turbine during operation directly produces",
                [
                    "A) more sulfur dioxide per kilowatt-hour",
                    "B) more coal ash per kilowatt-hour",
                    "C) little to no direct carbon dioxide or sulfur dioxide",
                    "D) high-level radioactive waste",
                ],
                2,
                [
                    "Focus on emissions during operation rather than claiming zero life-cycle impact.",
                    "Wind turbines do not combust carbon- or sulfur-containing fuel.",
                    "Therefore direct operational CO₂ and SO₂ emissions are minimal.",
                ],
                "6.12 Wind Energy",
                1,
            ),
            mcq(
                r"A \(1.5\text{ kW}\) appliance operates for \(4.0\text{ h}\). How much electrical energy does it use?",
                ["A) 0.375 kWh", "B) 5.5 kWh", "C) 6.0 kWh", "D) 21.6 kWh"],
                2,
                [
                    r"Use energy = power \(\times\) time.",
                    "Kilowatts multiplied by hours directly gives kilowatt-hours.",
                    r"\((1.5\text{ kW})(4.0\text{ h})=6.0\text{ kWh}\).",
                ],
                "6.1 Renewable and Nonrenewable Resources",
                1,
            ),
            frq(
                "A home uses 900 kWh of electricity each month. An efficiency retrofit reduces use by 20%. Calculate "
                "the annual electricity savings and the annual avoided CO₂ emissions if grid electricity emits "
                "0.40 kg CO₂ per kWh. Describe one limitation of using this constant emissions factor.",
                [
                    "Calculate monthly savings as the fractional reduction times baseline use.",
                    "Convert monthly savings to annual savings, then apply the emissions factor.",
                    "Identify why grid emissions can vary with time, place, or marginal generator.",
                ],
                [
                    r"Monthly savings are \(900(0.20)=180\) kWh; annual savings are \(180(12)=2,160\) kWh.",
                    r"Avoided emissions are \(2,160(0.40)=864\) kg CO₂ per year.",
                    "The grid generation mix and marginal power source vary, so a single average factor may not equal the emissions avoided at the times energy is saved.",
                ],
                "6.13 Energy Conservation",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Environmental Science Unit 7: Atmospheric Pollution",
        "AP Environmental Science",
        "CED-aligned practice with primary and secondary pollutants, photochemical smog, indoor pollution, acid deposition, and pollution control.",
        ["unit-7", "atmospheric-pollution"],
        [
            mcq(
                "Ground-level ozone in photochemical smog is best classified as",
                [
                    "A) a primary pollutant emitted directly by vehicles",
                    "B) a secondary pollutant formed from nitrogen oxides and volatile organic compounds in sunlight",
                    "C) a harmless form of stratospheric oxygen",
                    "D) particulate matter released only by volcanoes",
                ],
                1,
                [
                    "Primary pollutants are emitted directly; secondary pollutants form through atmospheric reactions.",
                    "NOₓ and VOC reactions are driven by sunlight.",
                    "Their reaction network produces tropospheric ozone.",
                ],
                "7.2 Photochemical Smog",
                1,
            ),
            mcq(
                "A temperature inversion often worsens urban air pollution because it",
                [
                    "A) places warm air below cold air and accelerates vertical mixing",
                    "B) traps cooler surface air and pollutants beneath a warmer air layer",
                    "C) removes all particulate matter through precipitation",
                    "D) converts secondary pollutants into harmless nitrogen gas",
                ],
                1,
                [
                    "Normally, warmed surface air can rise and disperse pollutants.",
                    "An inversion has a warm layer above cooler surface air.",
                    "The stable layering suppresses vertical mixing and concentrates pollutants near the ground.",
                ],
                "7.3 Thermal Inversion",
                1,
            ),
            frq(
                "A coal power plant installs flue-gas desulfurization and an electrostatic precipitator. Identify the "
                "major pollutant targeted by each device, explain how reducing sulfur emissions affects acid deposition, "
                "and name one pollutant not substantially removed by either device.",
                [
                    "Match each control technology to gases or particles.",
                    "Trace sulfur dioxide oxidation to sulfuric acid and deposition.",
                    "Select a combustion emission requiring a different control or carbon strategy.",
                ],
                [
                    "Flue-gas desulfurization targets SO₂; the electrostatic precipitator removes particulate matter or fly ash.",
                    "Less SO₂ means less atmospheric sulfuric acid formation, reducing acidic wet and dry deposition.",
                    "CO₂ is not substantially removed by either device; NOₓ also generally requires separate controls.",
                ],
                "7.6 Reduction of Air Pollutants / 7.7 Acid Rain",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Environmental Science Unit 8: Aquatic and Terrestrial Pollution",
        "AP Environmental Science",
        "CED-aligned practice with sources of pollution, human health, solid waste, wastewater, eutrophication, and lethal-dose analysis.",
        ["unit-8", "aquatic-and-terrestrial-pollution"],
        [
            mcq(
                "Excess nitrate and phosphate entering a lake most directly initiate eutrophication by",
                [
                    "A) suppressing all photosynthesis immediately",
                    "B) stimulating rapid growth of algae and phytoplankton",
                    "C) increasing water transparency permanently",
                    "D) converting all dissolved oxygen into nitrogen gas",
                ],
                1,
                [
                    "Nitrogen and phosphorus often limit primary production in aquatic systems.",
                    "Nutrient enrichment removes that limitation and promotes algal growth.",
                    "Later decomposition can consume dissolved oxygen and create hypoxia.",
                ],
                "8.5 Eutrophication",
                1,
            ),
            mcq(
                "Which waste-management option generally conserves the most material and energy for an aluminum beverage can?",
                [
                    "A) Disposal in a sanitary landfill",
                    "B) Open burning",
                    "C) Recycling into new aluminum products",
                    "D) Export without processing",
                ],
                2,
                [
                    "Compare disposal with recovery of usable material.",
                    "Aluminum production from ore is highly energy intensive.",
                    "Recycling retains the metal and generally requires much less energy than primary production.",
                ],
                "8.10 Waste Reduction Methods",
                1,
            ),
            frq(
                "Mercury enters a lake at a low concentration and is converted to methylmercury. Explain "
                "bioaccumulation and biomagnification, predict which trophic level has the highest concentration, "
                "and recommend one action that reduces human exposure.",
                [
                    "Describe retention of a persistent contaminant within an individual over time.",
                    "Trace transfer through prey to predators across trophic levels.",
                    "Choose either a source-control or exposure-reduction action.",
                ],
                [
                    "Bioaccumulation is increasing contaminant concentration in an organism because uptake exceeds elimination.",
                    "Biomagnification is increasing concentration at successively higher trophic levels; long-lived top predatory fish should have the highest concentration.",
                    "Reduce mercury emissions at the source or issue fish-consumption advisories, especially for pregnant people and children.",
                ],
                "8.8 Bioaccumulation and Biomagnification",
                2,
            ),
        ],
        38,
    ),
    quiz(
        "AP Environmental Science Unit 9: Global Change",
        "AP Environmental Science",
        "CED-aligned practice with stratospheric ozone depletion, global climate change, ocean warming and acidification, invasive species, and biodiversity loss.",
        ["unit-9", "global-change"],
        [
            mcq(
                "International restrictions on chlorofluorocarbons were adopted primarily because CFCs",
                [
                    "A) release chlorine radicals that catalytically destroy stratospheric ozone",
                    "B) directly create all tropospheric particulate matter",
                    "C) neutralize acid deposition in lakes",
                    "D) increase stratospheric ozone by releasing oxygen",
                ],
                0,
                [
                    "CFCs are stable in the lower atmosphere but can reach the stratosphere.",
                    "Ultraviolet radiation releases reactive chlorine from CFCs.",
                    "A chlorine radical can participate repeatedly in ozone-destroying reactions.",
                ],
                "9.1 Stratospheric Ozone Depletion",
                1,
            ),
            mcq(
                "As atmospheric CO₂ dissolves in seawater, ocean acidification occurs because",
                [
                    "A) carbonic acid reactions increase hydrogen-ion concentration",
                    "B) seawater loses all dissolved carbon",
                    "C) carbonate ions are converted directly into oxygen gas",
                    "D) salinity always doubles",
                ],
                0,
                [
                    r"Dissolved CO₂ reacts with water to form \(\mathrm{H_2CO_3}\).",
                    r"Acid dissociation increases \(\mathrm{H^+}\), lowering pH.",
                    "Hydrogen ions also reduce carbonate availability, challenging calcifying organisms.",
                ],
                "9.7 Ocean Acidification",
                1,
            ),
            frq(
                "A region's electricity generation emits 5.0 million metric tons of CO₂ annually. A policy cuts "
                "electricity demand by 12% with no change in generation mix. Calculate annual avoided emissions. "
                "Then distinguish climate mitigation from adaptation and give one example of each.",
                [
                    "Multiply baseline emissions by the fractional reduction.",
                    "Define mitigation in terms of causes of climate change.",
                    "Define adaptation in terms of reducing harm from expected impacts.",
                ],
                [
                    r"Avoided emissions are \(5.0\times10^6(0.12)=6.0\times10^5\) metric tons CO₂ per year.",
                    "Mitigation reduces greenhouse-gas sources or increases sinks; examples include efficiency, renewable electricity, or reforestation.",
                    "Adaptation reduces vulnerability to impacts; examples include heat-response plans, drought-tolerant crops, or restored coastal wetlands.",
                ],
                "9.5 Global Climate Change",
                2,
            ),
        ],
        40,
    ),
    quiz(
        "AP Environmental Science Mixed CED Review",
        "AP Environmental Science",
        "Mixed-unit synthesis of ecosystems, populations, land and energy use, pollution, and global environmental change.",
        ["mixed-review", "units-1-9"],
        [
            mcq(
                "Restoring a forested riparian buffer along an agricultural stream is most likely to",
                [
                    "A) increase nitrate runoff and stream temperature",
                    "B) reduce sediment and nutrient inputs while shading the stream",
                    "C) eliminate infiltration and increase flash flooding",
                    "D) increase atmospheric sulfur dioxide",
                ],
                1,
                [
                    "Vegetation slows overland flow and traps sediment.",
                    "Roots take up nutrients and stabilize streambanks.",
                    "Canopy shade can lower stream temperature and benefit dissolved oxygen conditions.",
                ],
                "5.4 Impacts of Agricultural Practices / 8.5 Eutrophication",
                1,
            ),
            mcq(
                "Which policy most directly internalizes an external cost of carbon dioxide emissions?",
                [
                    "A) A subsidy for greater fossil-fuel consumption",
                    "B) A fee charged per metric ton of CO₂ emitted",
                    "C) Removal of all appliance efficiency labels",
                    "D) Free disposal of coal ash into rivers",
                ],
                1,
                [
                    "An external cost is imposed on others without being included in the market price.",
                    "A per-ton emissions fee assigns a price to the environmental harm.",
                    "Emitters then have an incentive to reduce emissions when reductions cost less than the fee.",
                ],
                "6.13 Energy Conservation / 9.5 Global Climate Change",
                2,
            ),
            frq(
                "A fast-growing city replaces 30% of a wetland with development. Predict one effect on flood risk, "
                "one effect on biodiversity, and one effect on water quality. Propose one measurable indicator for "
                "monitoring each effect.",
                [
                    "List wetland ecosystem services before evaluating their loss.",
                    "Pair each predicted effect with a quantitative field measure.",
                    "Keep indicators specific enough for comparison before and after development.",
                ],
                [
                    "Flood risk likely rises because less water is stored; monitor peak downstream discharge or flood frequency after comparable storms.",
                    "Biodiversity likely falls from habitat loss and fragmentation; monitor native species richness or occupancy of indicator species.",
                    "Water quality may decline because less sediment and nutrient removal occurs; monitor turbidity, nitrate, phosphate, or dissolved oxygen.",
                ],
                "2.2 Ecosystem Services / 5.10 Impacts of Urbanization",
                3,
            ),
        ],
        43,
        3,
    ),
]


if __name__ == "__main__":
    print(len(QUIZZES), sum(len(q['items']) for q in QUIZZES))
