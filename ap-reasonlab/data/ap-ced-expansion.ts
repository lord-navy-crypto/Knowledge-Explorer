import { Concept, Formula } from "@/lib/types";

/**
 * Built-in CED-aligned depth for subjects where starter content was thin.
 * Complements managed uploads — these ship in-repo for search, concepts, and formulas pages.
 */

export const cedExpansionConcepts: Concept[] = [
  // ── AP Chemistry (Units 1, 2, 3, 6, 8, 9) ──
  {
    id: "chem-atomic-structure",
    title: "Atomic Structure & Electron Configuration",
    subject: "AP Chemistry",
    summary:
      "Atoms have protons, neutrons, and electrons. Electron configuration and periodic trends explain chemical behavior.",
    keyPoints: [
      "Aufbau, Pauli exclusion, and Hund's rule build configurations.",
      "Effective nuclear charge increases across a period → smaller atomic radius.",
      "Ionization energy and electronegativity follow predictable trends.",
    ],
    commonMistakes: [
      "Writing 4s before 3d when comparing ionization of transition metals.",
      "Confusing atomic number with mass number in isotope problems.",
    ],
    example: "Na: 1s² 2s² 2p⁶ 3s¹; Na⁺ loses the 3s electron.",
  },
  {
    id: "chem-bonding-imf",
    title: "Bonding & Intermolecular Forces",
    subject: "AP Chemistry",
    summary:
      "Ionic, covalent, and metallic bonding differ in electron transfer/sharing. IMF (LDF, dipole–dipole, H-bond) affect phase and properties.",
    keyPoints: [
      "Electronegativity difference guides bond type.",
      "Stronger IMF → higher boiling point and viscosity.",
      "Hydrogen bonding requires N–H, O–H, or F–H.",
    ],
    commonMistakes: [
      "Calling all polar molecules hydrogen-bonded.",
      "Ignoring molecular size when comparing LDF strength.",
    ],
    example: "H₂O boils higher than H₂S because of hydrogen bonding.",
  },
  {
    id: "chem-thermochemistry",
    title: "Thermochemistry & Enthalpy",
    subject: "AP Chemistry",
    summary:
      "Heat (q) and enthalpy change (ΔH) track energy in chemical processes. Hess's law combines steps.",
    keyPoints: [
      "q = mcΔT for calorimetry (no phase change).",
      "ΔH_rxn from bond energies or Hess's law.",
      "Exothermic ΔH < 0; endothermic ΔH > 0.",
    ],
    commonMistakes: [
      "Sign errors when reversing a reaction (flip sign of ΔH).",
      "Using grams instead of moles in stoichiometric heat problems.",
    ],
    example: "If C + O₂ → CO₂ has ΔH = −394 kJ/mol, reverse is +394 kJ/mol.",
  },
  {
    id: "chem-acids-bases",
    title: "Acids, Bases & Buffers",
    subject: "AP Chemistry",
    summary:
      "Arrhenius, Brønsted–Lowry, and Lewis definitions. pH, Ka/Kb, titration curves, and buffer action.",
    keyPoints: [
      "pH = −log[H⁺]; pOH = −log[OH⁻]; pH + pOH = 14 at 25 °C.",
      "Weak acid: Ka = [H⁺][A⁻]/[HA].",
      "Buffer resists pH change via weak acid/conjugate base pair.",
    ],
    commonMistakes: [
      "Using Ka for strong acids (assume complete dissociation).",
      "Forgetting to account for dilution when mixing solutions.",
    ],
    example: "A buffer of CH₃COOH and CH₃COO⁻ resists added H⁺ or OH⁻.",
  },
  {
    id: "chem-electrochemistry",
    title: "Electrochemistry & Cell Potential",
    subject: "AP Chemistry",
    summary:
      "Redox reactions transfer electrons. Galvanic cells produce voltage; electrolytic cells consume it.",
    keyPoints: [
      "Oxidation = loss of electrons; reduction = gain.",
      "E°cell = E°cathode − E°anode (standard conditions).",
      "ΔG° = −nFE°cell links thermodynamics to electrochemistry.",
    ],
    commonMistakes: [
      "Reversing anode and cathode in cell notation.",
      "Ignoring nonstandard conditions when comparing cell voltage.",
    ],
    example: "Zn(s) | Zn²⁺ || Cu²⁺ | Cu(s): Zn oxidizes, Cu²⁺ reduces.",
  },
  // ── AP Biology (Units 1, 4, 5, 7, 8) ──
  {
    id: "bio-chemistry-of-life",
    title: "Chemistry of Life",
    subject: "AP Biology",
    summary:
      "Water's properties, macromolecules (carbohydrates, lipids, proteins, nucleic acids), and enzyme function underpin all biology.",
    keyPoints: [
      "Hydrogen bonds give water high heat capacity and cohesion.",
      "Proteins: primary → quaternary structure determines function.",
      "Enzymes lower activation energy; denaturation destroys shape.",
    ],
    commonMistakes: [
      "Confusing DNA and RNA bases (T vs U).",
      "Assuming all enzymes work at any temperature.",
    ],
    example: "Amylase breaks starch into sugars; high heat denatures it.",
  },
  {
    id: "bio-cell-cycle",
    title: "Cell Cycle & Signaling",
    subject: "AP Biology",
    summary:
      "Cells divide via mitosis/meiosis; checkpoints and signaling pathways regulate growth and communication.",
    keyPoints: [
      "Mitosis: one diploid → two identical diploid.",
      "Meiosis: diploid → four haploid; crossing over increases variation.",
      "Ligand–receptor binding triggers signal transduction cascades.",
    ],
    commonMistakes: [
      "Saying mitosis produces gametes (meiosis does).",
      "Confusing cytokinesis with mitosis proper.",
    ],
    example: "Cyclin–CDK complexes drive G₁ → S → G₂ → M progression.",
  },
  {
    id: "bio-heredity",
    title: "Heredity & Mendelian Genetics",
    subject: "AP Biology",
    summary:
      "Genes on chromosomes follow segregation and independent assortment. Punnett squares and probability model inheritance.",
    keyPoints: [
      "Law of segregation: alleles separate in gametes.",
      "Testcross reveals unknown genotype.",
      "Linked genes violate independent assortment unless recombination occurs.",
    ],
    commonMistakes: [
      "Ignoring sex-linked inheritance patterns.",
      "Assuming dominant alleles are more common in populations.",
    ],
    example: "Aa × Aa → 1 AA : 2 Aa : 1 aa genotypic ratio.",
  },
  {
    id: "bio-natural-selection",
    title: "Natural Selection & Speciation",
    subject: "AP Biology",
    summary:
      "Variation, heritability, and differential reproductive success drive evolution. Isolation can lead to speciation.",
    keyPoints: [
      "Hardy–Weinberg describes no-evolution conditions.",
      "Directional, stabilizing, and disruptive selection change allele frequencies.",
      "Reproductive isolation defines species boundaries.",
    ],
    commonMistakes: [
      "Thinking individuals evolve (populations do).",
      "Using Hardy–Weinberg when selection or migration is active.",
    ],
    example: "Antibiotic resistance rises when susceptible bacteria die off.",
  },
  {
    id: "bio-ecology",
    title: "Ecology & Ecosystems",
    subject: "AP Biology",
    summary:
      "Energy flows one way; matter cycles. Populations, communities, and biomes interact with abiotic factors.",
    keyPoints: [
      "10% rule: ~10% energy transfers between trophic levels.",
      "Carrying capacity limits population growth (logistic model).",
      "Keystone species disproportionately affect community structure.",
    ],
    commonMistakes: [
      "Confusing biomass pyramid with energy pyramid shapes.",
      "Treating r-selected and K-selected strategies as mutually exclusive labels.",
    ],
    example: "Removal of wolves in Yellowstone changed elk grazing patterns.",
  },
  // ── AP Psychology (Units 1–9) ──
  {
    id: "psych-biological-bases",
    title: "Biological Bases of Behavior",
    subject: "AP Psychology",
    summary:
      "Neurons, neurotransmitters, brain structures, and the endocrine system underpin sensation, movement, and emotion.",
    keyPoints: [
      "Action potential: all-or-none depolarization.",
      "Lobes: frontal (planning), temporal (auditory/memory), etc.",
      "Agonists mimic; antagonists block neurotransmitters.",
    ],
    commonMistakes: [
      "Saying we use only 10% of our brain.",
      "Confusing sympathetic (arousal) with parasympathetic (calm) responses.",
    ],
    example: "Dopamine pathways relate to reward and movement (Parkinson's).",
  },
  {
    id: "psych-cognition",
    title: "Cognition: Memory & Thinking",
    subject: "AP Psychology",
    summary:
      "Information processing models cover encoding, storage, retrieval. Biases and heuristics affect decision-making.",
    keyPoints: [
      "Working memory has limited capacity (Miller ~7±2 chunks).",
      "Encoding specificity: context aids recall.",
      "Availability and representativeness heuristics skew judgments.",
    ],
    commonMistakes: [
      "Calling repressed memories reliably recoverable without evidence.",
      "Confusing proactive vs retroactive interference.",
    ],
    example: "Testing effect: retrieval practice strengthens long-term memory.",
  },
  {
    id: "psych-development",
    title: "Development & Learning",
    subject: "AP Psychology",
    summary:
      "Piaget, Erikson, attachment, and learning theories (classical, operant, observational) explain lifespan change.",
    keyPoints: [
      "Classical: CS–US association (Pavlov).",
      "Operant: reinforcement and punishment shape behavior.",
      "Critical/sensitive periods affect attachment and language.",
    ],
    commonMistakes: [
      "Using punishment and negative reinforcement interchangeably.",
      "Assuming Piaget's stages have rigid age cutoffs.",
    ],
    example: "Bandura's Bobo doll showed observational learning of aggression.",
  },
  {
    id: "psych-motivation-emotion",
    title: "Motivation, Emotion & Personality",
    subject: "AP Psychology",
    summary:
      "Drive-reduction, incentive, and hierarchy models explain motivation. Trait and psychodynamic theories describe personality.",
    keyPoints: [
      "James–Lange vs Cannon–Bard vs Schachter–Singer emotion theories.",
      "Big Five traits: OCEAN framework.",
      "Intrinsic vs extrinsic motivation affects persistence.",
    ],
    commonMistakes: [
      "Equating Freudian concepts with modern empirical personality models.",
      "Ignoring cultural display rules for emotion.",
    ],
    example: "Yerkes–Dodson: moderate arousal often optimizes performance.",
  },
  {
    id: "psych-clinical",
    title: "Clinical Psychology & Treatment",
    subject: "AP Psychology",
    summary:
      "DSM categories, etiology models, and therapies (CBT, biomedical) address psychological disorders.",
    keyPoints: [
      "Diagnosis requires distress/dysfunction and clinical judgment.",
      "CBT targets maladaptive thoughts and behaviors.",
      "Biomedical: medications affect neurotransmitter systems.",
    ],
    commonMistakes: [
      "Stigmatizing disorders as moral failures.",
      "Assuming one therapy fits all disorders.",
    ],
    example: "Exposure therapy treats specific phobias via gradual confrontation.",
  },
  {
    id: "psych-social",
    title: "Social Psychology",
    subject: "AP Psychology",
    summary:
      "Attribution, conformity, obedience, group dynamics, and prejudice explain behavior in social contexts.",
    keyPoints: [
      "Fundamental attribution error: overemphasize disposition, underemphasize situation.",
      "Asch (conformity), Milgram (obedience), Zimbardo (roles).",
      "Social loafing vs social facilitation depends on task and evaluation.",
    ],
    commonMistakes: [
      "Generalizing lab obedience findings without ethical/context limits.",
      "Confusing normative vs informational social influence.",
    ],
    example: "Bystander effect: diffusion of responsibility reduces helping.",
  },
  // ── AP Environmental Science (Units 1–9) ──
  {
    id: "apes-ecosystems",
    title: "Ecosystem Structure & Energy",
    subject: "AP Environmental Science",
    summary:
      "Producers, consumers, decomposers, and trophic levels. Productivity and nutrient cycling sustain ecosystems.",
    keyPoints: [
      "GPP vs NPP: energy available to consumers after respiration.",
      "Biogeochemical cycles: carbon, nitrogen, phosphorus, water.",
      "Edge effects and habitat fragmentation reduce biodiversity.",
    ],
    commonMistakes: [
      "Confusing GPP and NPP in energy pyramid calculations.",
      "Ignoring time scale in carbon sequestration vs emissions.",
    ],
    example: "Eutrophication: excess N/P fuels algal blooms and hypoxia.",
  },
  {
    id: "apes-population",
    title: "Population Dynamics",
    subject: "AP Environmental Science",
    summary:
      "Exponential vs logistic growth, demographic transition, and human population pressures on resources.",
    keyPoints: [
      "Rule of 70 estimates doubling time ≈ 70/r.",
      "IPAT framework: Impact = Population × Affluence × Technology.",
      "Age-structure diagrams predict future growth.",
    ],
    commonMistakes: [
      "Applying exponential model past carrying capacity.",
      "Treating technology factor in IPAT as always reducing impact.",
    ],
    example: "Countries in late-stage demographic transition have aging populations.",
  },
  {
    id: "apes-energy-resources",
    title: "Energy Resources & Climate",
    subject: "AP Environmental Science",
    summary:
      "Fossil fuels, renewables, efficiency, and greenhouse gases link energy choices to climate change.",
    keyPoints: [
      "CO₂, CH₄, N₂O are major anthropogenic greenhouse gases.",
      "Albedo and positive feedback loops amplify warming.",
      "Life-cycle analysis compares full environmental costs of energy sources.",
    ],
    commonMistakes: [
      "Confusing ozone depletion (CFCs) with greenhouse warming.",
      "Ignoring externalities in cost comparisons of fuels.",
    ],
    example: "Coal has high CO₂ per kWh; wind/solar have low operational emissions.",
  },
  {
    id: "apes-pollution",
    title: "Pollution & Waste",
    subject: "AP Environmental Science",
    summary:
      "Point vs nonpoint source pollution, wastewater treatment, solid waste hierarchy, and toxicology (LD50, bioaccumulation).",
    keyPoints: [
      "Reduce–reuse–recycle hierarchy prioritizes source reduction.",
      "Bioaccumulation and biomagnification concentrate toxins up food chains.",
      "Primary vs secondary wastewater treatment targets solids vs biological demand.",
    ],
    commonMistakes: [
      "Assuming dilution solves all pollution problems.",
      "Confusing acute vs chronic toxicity endpoints.",
    ],
    example: "Mercury biomagnifies in predatory fish, affecting human consumers.",
  },
  // ── AP Human Geography (Units 1–7) ──
  {
    id: "hug-population-migration",
    title: "Population & Migration",
    subject: "AP Human Geography",
    summary:
      "Demographic data, push–pull migration, Ravenstein's laws, and migration barriers shape population distribution.",
    keyPoints: [
      "Crude birth/death rates and TFR describe growth.",
      "Ravenstein: most migrants move short distances.",
      "Guest workers and refugee flows have distinct causes.",
    ],
    commonMistakes: [
      "Using arithmetic density alone to compare crowding (need physiological/agricultural density).",
      "Assuming all migration is voluntary.",
    ],
    example: "Rural-to-urban migration often follows economic opportunity in cities.",
  },
  {
    id: "hug-culture",
    title: "Cultural Patterns & Processes",
    subject: "AP Human Geography",
    summary:
      "Culture traits, diffusion (relocation vs expansion), language, religion, and ethnic landscapes.",
    keyPoints: [
      "Hearths: origins of cultural traits.",
      "Acculturation vs assimilation vs multiculturalism.",
      "Syncretism blends cultural elements.",
    ],
    commonMistakes: [
      "Treating culture as static rather than changing.",
      "Confusing ethnicity with race or nationality uncritically.",
    ],
    example: "Indo-European language family spread via relocation and expansion diffusion.",
  },
  {
    id: "hug-political",
    title: "Political Organization of Space",
    subject: "AP Human Geography",
    summary:
      "States, nations, boundaries, supranational organizations, and geopolitical conflicts.",
    keyPoints: [
      "Nation vs state vs nation-state distinctions.",
      "Boundary types: physical, geometric, ethnographic.",
      "Centripetal vs centrifugal forces unify or divide states.",
    ],
    commonMistakes: [
      "Assuming all boundaries match ethnic homogeneity.",
      "Ignoring maritime boundaries and EEZ resources.",
    ],
    example: "Supranational unions (EU) pool sovereignty for trade and policy.",
  },
  {
    id: "hug-agriculture-urban",
    title: "Agriculture & Urban Land Use",
    subject: "AP Human Geography",
    summary:
      "Von Thünen, Green Revolution, CBD models, and urban sprawl explain land-use patterns.",
    keyPoints: [
      "Von Thünen: perishable goods near market rings.",
      "Bid-rent curve: land value peaks at CBD.",
      "Primate city rule in some countries.",
    ],
    commonMistakes: [
      "Applying Von Thünen model without noting assumptions (isolated state).",
      "Confusing site (local) with situation (regional access).",
    ],
    example: "Suburbanization increases VMT and can reduce inner-city tax bases.",
  },
  {
    id: "hug-development",
    title: "Industrialization & Development",
    subject: "AP Human Geography",
    summary:
      "Rostow, Wallerstein world-systems, HDI, and trade relationships explain global inequality.",
    keyPoints: [
      "Core, periphery, semi-periphery in world-systems theory.",
      "HDI combines income, education, and life expectancy.",
      "Special economic zones attract FDI with incentives.",
    ],
    commonMistakes: [
      "Using GDP alone as development proxy.",
      "Treating development models as deterministic stages for all countries.",
    ],
    example: "Export processing zones may boost jobs but depend on global supply chains.",
  },
  // ── AP Computer Science A ──
  {
    id: "csa-arrays",
    title: "Arrays & ArrayLists",
    subject: "AP Computer Science A",
    summary:
      "Fixed-length arrays and resizable ArrayLists store ordered collections. Traversal uses loops or enhanced for.",
    keyPoints: [
      "Array indices run 0 to length−1.",
      "ArrayList methods: add, remove, get, set, size.",
      "Off-by-one errors are common in loop bounds.",
    ],
    commonMistakes: [
      "Using array.length() instead of array.length.",
      "Concurrent modification while iterating without care.",
    ],
    example: "for (int i = 0; i < arr.length; i++) sums all elements.",
  },
  {
    id: "csa-recursion",
    title: "Recursion & Searching",
    subject: "AP Computer Science A",
    summary:
      "Recursive methods call themselves with smaller subproblems. Binary search requires sorted data.",
    keyPoints: [
      "Every recursion needs base case and progress toward it.",
      "Binary search: O(log n) comparisons on sorted array.",
      "Merge sort uses divide-and-conquer recursion.",
    ],
    commonMistakes: [
      "Missing base case → stack overflow.",
      "Using binary search on unsorted data.",
    ],
    example: "factorial(n) = n * factorial(n−1) with base n ≤ 1 → 1.",
  },
  {
    id: "csa-inheritance",
    title: "Inheritance & Polymorphism",
    subject: "AP Computer Science A",
    summary:
      "Subclasses extend superclasses; overriding enables polymorphic behavior through superclass references.",
    keyPoints: [
      "extends keyword; super() calls parent constructor.",
      "Method overriding: same signature, runtime dispatch.",
      "Abstract classes and interfaces define contracts.",
    ],
    commonMistakes: [
      "Confusing overloading (compile-time) with overriding (runtime).",
      "Accessing private fields of superclass directly.",
    ],
    example: "Dog extends Animal; Animal a = new Dog(); a.speak() calls Dog's speak().",
  },
  // ── AP Computer Science Principles ──
  {
    id: "csp-data-internet",
    title: "Data & the Internet",
    subject: "AP Computer Science Principles",
    summary:
      "Binary data representation, compression, protocols (TCP/IP), and cybersecurity basics.",
    keyPoints: [
      "Lossless vs lossy compression tradeoffs.",
      "IP addresses route packets; DNS maps names to IPs.",
      "Encryption protects confidentiality; hashing supports integrity.",
    ],
    commonMistakes: [
      "Thinking the internet is the same as the World Wide Web.",
      "Assuming longer passwords are always sufficient without other practices.",
    ],
    example: "HTTPS uses TLS to encrypt HTTP traffic between client and server.",
  },
  {
    id: "csp-algorithms",
    title: "Algorithms & Programming",
    subject: "AP Computer Science Principles",
    summary:
      "Sequencing, selection, iteration, procedures, and comparing algorithm efficiency.",
    keyPoints: [
      "Linear vs binary search complexity differs on sorted vs unsorted data.",
      "Procedures reduce duplication; parameters pass data.",
      "Debugging: test edge cases and trace variable values.",
    ],
    commonMistakes: [
      "Infinite loops from wrong update in iteration.",
      "Confusing syntax errors with logic errors.",
    ],
    example: "Finding max in a list requires scanning all n elements (O(n)).",
  },
  {
    id: "csp-impact",
    title: "Computing & Society",
    subject: "AP Computer Science Principles",
    summary:
      "Digital divide, algorithmic bias, privacy, intellectual property, and environmental impacts of computing.",
    keyPoints: [
      "Filter bubbles and recommendation systems shape information exposure.",
      "Crowdsourcing and citizen science use distributed participation.",
      "E-waste and data-center energy have environmental costs.",
    ],
    commonMistakes: [
      "Treating technology as neutral without examining design choices.",
      "Ignoring accessibility in interface design.",
    ],
    example: "Training data bias can cause facial recognition errors for underrepresented groups.",
  },
  // ── AP Physics C ──
  {
    id: "physc-mech-rotation",
    title: "Rotation (Physics C: Mechanics)",
    subject: "AP Physics C: Mechanics",
    summary:
      "Calculus-based rotation: τ = Iα, L = Iω, rolling with both translational and rotational KE.",
    keyPoints: [
      "I depends on axis and mass distribution: ∫ r² dm.",
      "Rolling without slipping: v = rω, a = rα.",
      "Angular momentum conserved if τ_ext = 0.",
    ],
    commonMistakes: [
      "Using point-mass I for extended bodies.",
      "Forgetting rotational KE in rolling problems.",
    ],
    example: "Solid disk I = ½MR² about center; rolling KE = ½Mv² + ½Iω².",
  },
  {
    id: "physc-em-circuits",
    title: "DC Circuits (Physics C: E&M)",
    subject: "AP Physics C: E&M",
    summary:
      "Kirchhoff's rules, RC transients, and power in resistive circuits with calculus where needed.",
    keyPoints: [
      "ΣI_in = ΣI_out at junction; ΣΔV = 0 around closed loop.",
      "P = IV = I²R = V²/R for resistors.",
      "RC charging: exponential approach to steady state.",
    ],
    commonMistakes: [
      "Dropping sign conventions in loop equations.",
      "Treating capacitor as short in steady-state DC incorrectly.",
    ],
    example: "Two resistors in series: R_eq = R₁ + R₂; same current through both.",
  },
  {
    id: "physc-em-induction",
    title: "Faraday's Law & Induction",
    subject: "AP Physics C: E&M",
    summary:
      "Changing magnetic flux induces EMF. Lenz's law gives direction; inductors store magnetic energy.",
    keyPoints: [
      "ε = −dΦ_B/dt (Faraday).",
      "Motional EMF: ε = Bℓv for rod moving in field.",
      "Energy in inductor: U = ½LI².",
    ],
    commonMistakes: [
      "Ignoring Lenz's law sign when finding induced current direction.",
      "Confusing flux Φ with field B.",
    ],
    example: "Increasing flux into page induces current opposing the increase (Lenz).",
  },
  // ── AP Calculus BC ──
  {
    id: "calc-bc-parametric",
    title: "Parametric & Polar Equations (BC)",
    subject: "AP Calculus AB/BC",
    summary:
      "Parametric curves x(t), y(t); polar r(θ). Arc length, area in polar, and vector motion.",
    keyPoints: [
      "dy/dx = (dy/dt)/(dx/dt) for parametric curves.",
      "Polar area: A = ½∫ r² dθ.",
      "Speed from parametric: √(x′² + y′²).",
    ],
    commonMistakes: [
      "Forgetting chain rule when differentiating parametrically.",
      "Wrong θ limits for polar area integrals.",
    ],
    example: "Circle r = 2: area = ½∫₀^{2π} 4 dθ = 4π.",
  },
  {
    id: "calc-bc-vectors",
    title: "Vectors & Motion (BC)",
    subject: "AP Calculus AB/BC",
    summary:
      "Position vector r(t); velocity and acceleration are derivatives. Motion in plane with components.",
    keyPoints: [
      "v(t) = r′(t); a(t) = v′(t) = r′′(t).",
      "Speed = |v(t)|; direction from unit tangent.",
      "Projectile motion splits into horizontal and vertical components.",
    ],
    commonMistakes: [
      "Confusing speed with velocity vector.",
      "Using scalar kinematics without vector components in 2D.",
    ],
    example: "r(t) = ⟨t, t²⟩ ⇒ v = ⟨1, 2t⟩.",
  },
  // ── AP World History (Units 1–2, 5–9 depth) ──
  {
    id: "whap-silk-roads",
    title: "Networks of Exchange (1200–1450)",
    subject: "AP World History",
    summary:
      "Silk Roads, Indian Ocean, and Trans-Saharan networks spread goods, ideas, religions, and disease.",
    keyPoints: [
      "Monsoon winds timed Indian Ocean trade.",
      "Islam and Buddhism spread via merchants and missionaries.",
      "Mongol Pax facilitated Eurasian exchange.",
    ],
    commonMistakes: [
      "Treating trade routes as one-directional.",
      "Ignoring environmental limits on caravan scale.",
    ],
    example: "Black Death followed trade routes from Asia to Europe.",
  },
  {
    id: "whap-revolutions",
    title: "Revolutions (1750–1900)",
    subject: "AP World History",
    summary:
      "Atlantic revolutions, Latin American independence, and new ideologies (liberalism, nationalism, socialism).",
    keyPoints: [
      "Enlightenment ideas influenced revolutionary demands.",
      "Haitian Revolution challenged slavery and colonialism.",
      "National unification movements reshaped Europe.",
    ],
    commonMistakes: [
      "Equating all revolutions as identical in goals and outcomes.",
      "Ignoring women's and enslaved peoples' roles.",
    ],
    example: "Simon Bolívar sought independence but elite rule often persisted.",
  },
  {
    id: "whap-cold-war",
    title: "Global Conflict & Cold War",
    subject: "AP World History",
    summary:
      "World wars, Cold War blocs, proxy wars, and non-aligned movements shaped 20th-century geopolitics.",
    keyPoints: [
      "WWI/WWII accelerated decolonization pressures.",
      "Superpower rivalry limited direct US–USSR war.",
      "Bandung Conference signaled Third World solidarity.",
    ],
    commonMistakes: [
      "Viewing Cold War only through European lens.",
      "Assuming decolonization ended inequality.",
    ],
    example: "Korean and Vietnam Wars were Cold War proxy conflicts.",
  },
  // ── AP Physics 2 depth ──
  {
    id: "phys2-thermo",
    title: "Thermodynamics (Physics 2)",
    subject: "AP Physics 2",
    summary:
      "First law: ΔU = Q − W. PV diagrams, ideal gas law, and entropy direction for irreversible processes.",
    keyPoints: [
      "Isothermal: ΔU = 0 for ideal gas ⇒ Q = W.",
      "Adiabatic: Q = 0 ⇒ ΔU = −W.",
      "Second law: entropy of isolated system tends to increase.",
    ],
    commonMistakes: [
      "Sign convention errors for work done BY vs ON gas.",
      "Assuming isothermal and adiabatic have same PV curves.",
    ],
    example: "Compression doing work on gas raises internal energy if Q = 0.",
  },
  {
    id: "phys2-optics",
    title: "Geometric Optics (Physics 2)",
    subject: "AP Physics 2",
    summary:
      "Reflection, refraction (Snell's law), mirrors, and thin lenses. Ray diagrams locate images.",
    keyPoints: [
      "n₁ sin θ₁ = n₂ sin θ₂.",
      "Mirror/lens equation: 1/f = 1/d_o + 1/d_i.",
      "Total internal reflection when θ > critical angle.",
    ],
    commonMistakes: [
      "Sign errors for real vs virtual images.",
      "Applying thin-lens equation without paraxial approximation.",
    ],
    example: "Converging lens with object beyond F produces real inverted image.",
  },
  // ── AP Physics C depth ──
  {
    id: "physc-mech-energy",
    title: "Work–Energy (Physics C: Mechanics)",
    subject: "AP Physics C: Mechanics",
    summary:
      "Calculus-based work W = ∫ F·dx; kinetic and potential energy with variable forces.",
    keyPoints: [
      "W_net = ΔK for particle.",
      "Power P = dW/dt = F·v.",
      "Conservative forces: F = −dU/dx.",
    ],
    commonMistakes: [
      "Using constant-force W = Fd when force varies.",
      "Sign errors on work done by vs on system.",
    ],
    example: "Spring force F = −kx ⇒ U = ½kx².",
  },
  {
    id: "physc-em-potential",
    title: "Electric Potential (Physics C: E&M)",
    subject: "AP Physics C: E&M",
    summary:
      "Voltage is potential energy per charge. Equipotentials are perpendicular to field lines.",
    keyPoints: [
      "V = kQ/r for point charge.",
      "ΔV = −∫ E·dl along path.",
      "Conductors in equilibrium are equipotential surfaces.",
    ],
    commonMistakes: [
      "Confusing V with E (V is scalar, E is vector).",
      "Using point-charge V inside a uniform sphere incorrectly.",
    ],
    example: "Parallel plates: uniform E, linear ΔV between plates.",
  },
  // ── AP European History depth ──
  {
    id: "euro-imperialism",
    title: "New Imperialism (1870–1914)",
    subject: "AP European History",
    summary:
      "Industrial powers competed for colonies, resources, and strategic advantage in Africa and Asia.",
    keyPoints: [
      "Berlin Conference (1884) formalized African partition.",
      "Economic motives: raw materials and markets.",
      "Racial ideology and 'civilizing mission' justified control.",
    ],
    commonMistakes: [
      "Treating imperialism as only political without economic roots.",
      "Ignoring resistance and collaboration by colonized elites.",
    ],
    example: "British rule in India linked cotton exports to Lancashire mills.",
  },
  {
    id: "euro-world-wars",
    title: "World Wars & Total War",
    subject: "AP European History",
    summary:
      "WWI and WWII mobilized entire economies and societies; peace settlements reshaped Europe.",
    keyPoints: [
      "WWI: trench warfare, nationalism, alliance system.",
      "Versailles: reparations, territorial losses, war guilt clause.",
      "WWII: fascism, appeasement failure, Holocaust, Cold War origins.",
    ],
    commonMistakes: [
      "Attributing WWI to a single cause (assassination alone).",
      "Equating fascism and communism without context.",
    ],
    example: "Appeasement at Munich (1938) delayed but did not prevent wider war.",
  },
  {
    id: "euro-integration",
    title: "European Integration",
    subject: "AP European History",
    summary:
      "Post-1945 cooperation aimed to prevent another continental war and rebuild economies.",
    keyPoints: [
      "ECSC (1951) → EEC → European Union.",
      "Eurozone and free movement trade sovereignty for stability.",
      "Brexit shows limits of integration.",
    ],
    commonMistakes: [
      "Assuming EU membership was identical for all states.",
      "Ignoring Eastern Europe's different post-1989 path.",
    ],
    example: "Maastricht Treaty (1993) deepened political and economic union.",
  },
  {
    id: "physc-mech-shm",
    title: "Simple Harmonic Motion (Physics C)",
    subject: "AP Physics C: Mechanics",
    summary:
      "Restoring force proportional to displacement gives sinusoidal motion: x(t) = A cos(ωt + φ).",
    keyPoints: [
      "ω = √(k/m) for mass–spring.",
      "Period T = 2π/ω independent of amplitude (ideal SHM).",
      "Energy oscillates between KE and PE; total mechanical energy constant.",
    ],
    commonMistakes: [
      "Using kinematics equations for non-uniform acceleration.",
      "Confusing angular frequency ω with angular velocity in rotation.",
    ],
    example: "Pendulum small-angle approximation: ω ≈ √(g/L).",
  },
  {
    id: "csp-cybersecurity",
    title: "Cybersecurity & Privacy (CSP)",
    subject: "AP Computer Science Principles",
    summary:
      "Authentication, encryption, and access control protect data; users trade convenience for privacy.",
    keyPoints: [
      "Symmetric vs asymmetric encryption roles.",
      "Phishing exploits human trust, not only technical flaws.",
      "Multi-factor authentication raises attack cost.",
    ],
    commonMistakes: [
      "Assuming HTTPS alone prevents all tracking.",
      "Equating privacy with secrecy for all public posts.",
    ],
    example: "HTTPS encrypts transit; end-to-end encryption protects content from intermediaries.",
  },
  {
    id: "csp-parallel",
    title: "Parallel & Distributed Computing (CSP)",
    subject: "AP Computer Science Principles",
    summary:
      "Breaking work across processors speeds solutions but introduces synchronization and load-balancing issues.",
    keyPoints: [
      "Speedup limited by sequential portions (Amdahl's intuition).",
      "Race conditions when shared state lacks coordination.",
      "Distributed systems add latency and partial-failure risk.",
    ],
    commonMistakes: [
      "Assuming doubling cores always halves runtime.",
      "Ignoring overhead of communication between nodes.",
    ],
    example: "MapReduce splits data processing across many workers.",
  },
  {
    id: "euro-reformation",
    title: "Reformation & Religious Division",
    subject: "AP European History",
    summary:
      "Luther's challenge to church authority splintered Latin Christendom and reshaped politics.",
    keyPoints: [
      "Printing press spread reform ideas rapidly.",
      "Peace of Augsburg: cuius regio, eius religio.",
      "Catholic Reformation (Council of Trent) responded institutionally.",
    ],
    commonMistakes: [
      "Treating Reformation as only theological without political context.",
      "Ignoring role of princes and city councils.",
    ],
    example: "Henry VIII's break with Rome linked dynastic need to broader Reformation currents.",
  },
  {
    id: "euro-industrial",
    title: "Industrialization & Social Change",
    subject: "AP European History",
    summary:
      "Factory production transformed labor, urban life, and class relations in the 19th century.",
    keyPoints: [
      "Steam/coal power enabled factory concentration.",
      "Urbanization strained housing and sanitation.",
      "Labor movements and reform bills responded to harsh conditions.",
    ],
    commonMistakes: [
      "Assuming industrialization happened uniformly across Europe.",
      "Ignoring women's and children's factory roles.",
    ],
    example: "British Factory Acts gradually limited child labor hours.",
  },
];

export const cedExpansionFormulas: Formula[] = [
  // Chemistry
  {
    id: "chem-ph",
    subject: "AP Chemistry",
    unit: "Unit 8: Acids and Bases",
    name: "pH definition",
    expression: "pH = -\\log[H^+]",
    variables: "[H⁺] in mol/L",
    whenToUse: "Convert hydrogen ion concentration to pH.",
    relatedConceptId: "chem-acids-bases",
    sourceNote: "AP Chemistry CED Unit 8",
  },
  {
    id: "chem-ka",
    subject: "AP Chemistry",
    unit: "Unit 8: Acids and Bases",
    name: "Acid dissociation constant",
    expression: "K_a = \\frac{[H^+][A^-]}{[HA]}",
    variables: "Weak acid HA at equilibrium",
    whenToUse: "Find pH of weak acid or compare acid strength.",
    relatedConceptId: "chem-acids-bases",
    sourceNote: "AP Chemistry CED Unit 8",
  },
  {
    id: "chem-q",
    subject: "AP Chemistry",
    unit: "Unit 7: Equilibrium",
    name: "Reaction quotient",
    expression: "Q = \\frac{[products]}{[reactants]}",
    variables: "Current concentrations, same form as K",
    whenToUse: "Compare Q to K to predict shift direction.",
    relatedConceptId: "chem-equilibrium",
    sourceNote: "AP Chemistry CED Unit 7",
  },
  {
    id: "chem-hess",
    subject: "AP Chemistry",
    unit: "Unit 6: Thermochemistry",
    name: "Hess's law",
    expression: "\\Delta H_{rxn} = \\sum \\Delta H_{products} - \\sum \\Delta H_{reactants}",
    variables: "Or sum of step enthalpies",
    whenToUse: "Combine reactions to find overall ΔH.",
    relatedConceptId: "chem-thermochemistry",
    sourceNote: "AP Chemistry CED Unit 6",
  },
  {
    id: "chem-rate-law",
    subject: "AP Chemistry",
    unit: "Unit 5: Kinetics",
    name: "Rate law",
    expression: "rate = k[A]^m[B]^n",
    variables: "m, n from experiment (not coefficients)",
    whenToUse: "Relate concentration to reaction rate.",
    relatedConceptId: "chem-kinetics",
    sourceNote: "AP Chemistry CED Unit 5",
  },
  {
    id: "chem-nernst",
    subject: "AP Chemistry",
    unit: "Unit 9: Applications of Thermodynamics",
    name: "Cell potential (Nernst, simplified)",
    expression: "E_{cell} = E^\\circ_{cell} - \\frac{0.0592}{n}\\log Q",
    variables: "n = moles e⁻ transferred, 25 °C",
    whenToUse: "Nonstandard concentrations in electrochemical cells.",
    relatedConceptId: "chem-electrochemistry",
    sourceNote: "AP Chemistry CED Unit 9",
  },
  // Biology
  {
    id: "bio-hardy-weinberg",
    subject: "AP Biology",
    unit: "Unit 7: Natural Selection",
    name: "Hardy–Weinberg equilibrium",
    expression: "p^2 + 2pq + q^2 = 1",
    variables: "p + q = 1 (allele frequencies)",
    whenToUse: "Predict genotype frequencies with no evolution.",
    relatedConceptId: "bio-natural-selection",
    sourceNote: "AP Biology CED Unit 7",
  },
  {
    id: "bio-chi-square",
    subject: "AP Biology",
    unit: "Unit 5: Heredity",
    name: "Chi-square test (genetics)",
    expression: "\\chi^2 = \\sum \\frac{(O - E)^2}{E}",
    variables: "O = observed, E = expected counts",
    whenToUse: "Test whether data fit expected Mendelian ratios.",
    relatedConceptId: "bio-heredity",
    sourceNote: "AP Biology CED quantitative skills",
  },
  {
    id: "bio-logistic",
    subject: "AP Biology",
    unit: "Unit 8: Ecology",
    name: "Logistic population growth",
    expression: "dN/dt = rN\\left(1 - \\frac{N}{K}\\right)",
    variables: "K = carrying capacity, r = intrinsic rate",
    whenToUse: "Model population approaching carrying capacity.",
    relatedConceptId: "bio-ecology",
    sourceNote: "AP Biology CED Unit 8",
  },
  {
    id: "bio-michaelis",
    subject: "AP Biology",
    unit: "Unit 3: Cellular Energetics",
    name: "Enzyme kinetics (Michaelis–Menten)",
    expression: "v = \\frac{V_{max}[S]}{K_m + [S]}",
    variables: "v = reaction rate, [S] = substrate concentration",
    whenToUse: "Relate substrate concentration to enzyme rate.",
    relatedConceptId: "bio-chemistry-of-life",
    sourceNote: "AP Biology CED Unit 3",
  },
  // Psychology
  {
    id: "psych-z-score",
    subject: "AP Psychology",
    unit: "Unit 1: Scientific Foundations",
    name: "z-score",
    expression: "z = \\frac{x - \\mu}{\\sigma}",
    variables: "Standardize a score in a distribution",
    whenToUse: "Compare scores across different scales.",
    relatedConceptId: "psych-research",
    sourceNote: "AP Psychology CED",
  },
  {
    id: "psych-mean-median",
    subject: "AP Psychology",
    unit: "Unit 1: Scientific Foundations",
    name: "Measures of central tendency",
    expression: "\\bar{x} = \\frac{\\sum x}{n}",
    variables: "Mean for interval/ratio data; median resists outliers",
    whenToUse: "Summarize data sets in research methods.",
    relatedConceptId: "psych-research",
    sourceNote: "AP Psychology CED",
  },
  // Environmental Science
  {
    id: "apes-pop-growth",
    subject: "AP Environmental Science",
    unit: "Unit 3: Populations",
    name: "Rule of 70",
    expression: "Doubling\\ time \\approx 70 / r",
    variables: "r = annual growth rate (percent)",
    whenToUse: "Estimate population doubling time.",
    relatedConceptId: "apes-population",
    sourceNote: "AP Environmental Science CED",
  },
  {
    id: "apes-percent-change",
    subject: "AP Environmental Science",
    unit: "CED Quantitative Skills",
    name: "Percent change",
    expression: "\\%\\ change = \\frac{new - old}{old} \\times 100",
    variables: "Compare quantities over time",
    whenToUse: "Energy use, emissions, or population change problems.",
    relatedConceptId: "apes-energy-resources",
    sourceNote: "AP Environmental Science CED",
  },
  {
    id: "apes-density",
    subject: "AP Environmental Science",
    unit: "Unit 3: Populations",
    name: "Population density",
    expression: "Density = \\frac{population}{area}",
    variables: "People (or organisms) per unit area",
    whenToUse: "Compare crowding across regions.",
    relatedConceptId: "apes-population",
    sourceNote: "AP Environmental Science CED",
  },
  // Human Geography
  {
    id: "hug-crude-birth",
    subject: "AP Human Geography",
    unit: "Unit 2: Population",
    name: "Crude birth rate",
    expression: "CBR = \\frac{births}{population} \\times 1000",
    variables: "Births per 1000 people per year",
    whenToUse: "Compare fertility across countries.",
    relatedConceptId: "hug-population-migration",
    sourceNote: "AP Human Geography CED",
  },
  {
    id: "hug-nri",
    subject: "AP Human Geography",
    unit: "Unit 2: Population",
    name: "Natural rate of increase",
    expression: "NRI = CBR - CDR",
    variables: "CBR and CDR in same units (per 1000)",
    whenToUse: "Growth excluding migration.",
    relatedConceptId: "hug-population-migration",
    sourceNote: "AP Human Geography CED",
  },
  // CSA
  {
    id: "csa-array-access",
    subject: "AP Computer Science A",
    unit: "Unit 6: Array",
    name: "Array index bounds",
    expression: "0 \\leq index < arr.length",
    variables: "Valid indices for Java array",
    whenToUse: "Avoid ArrayIndexOutOfBoundsException.",
    relatedConceptId: "csa-arrays",
    sourceNote: "AP CSA CED",
  },
  {
    id: "csa-binary-search",
    subject: "AP Computer Science A",
    unit: "Unit 7: ArrayList",
    name: "Binary search comparisons",
    expression: "comparisons \\approx \\log_2 n",
    variables: "Sorted array of length n",
    whenToUse: "Efficiency of binary vs linear search.",
    relatedConceptId: "csa-recursion",
    sourceNote: "AP CSA CED",
  },
  // Physics C
  {
    id: "physc-torque",
    subject: "AP Physics C: Mechanics",
    unit: "Rotation",
    name: "Rotational second law",
    expression: "\\tau_{net} = I \\alpha",
    variables: "τ torque, I rotational inertia, α angular acceleration",
    whenToUse: "Angular dynamics problems.",
    relatedConceptId: "physc-mech-rotation",
    sourceNote: "AP Physics C: Mechanics CED",
  },
  {
    id: "physc-faraday",
    subject: "AP Physics C: E&M",
    unit: "Electromagnetic Induction",
    name: "Faraday's law",
    expression: "\\mathcal{E} = -\\frac{d\\Phi_B}{dt}",
    variables: "Φ_B = magnetic flux through loop",
    whenToUse: "Induced EMF from changing flux.",
    relatedConceptId: "physc-em-induction",
    sourceNote: "AP Physics C: E&M CED",
  },
  {
    id: "physc-kirchhoff-v",
    subject: "AP Physics C: E&M",
    unit: "Electric Circuits",
    name: "Kirchhoff's loop rule",
    expression: "\\sum \\Delta V = 0",
    variables: "Around any closed loop in a circuit",
    whenToUse: "Multi-loop circuit analysis.",
    relatedConceptId: "physc-em-circuits",
    sourceNote: "AP Physics C: E&M CED",
  },
  // Calculus BC
  {
    id: "calc-bc-param-dydx",
    subject: "AP Calculus AB/BC",
    unit: "Unit 10: Parametric Equations (BC)",
    name: "Parametric derivative",
    expression: "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
    variables: "Requires dx/dt ≠ 0",
    whenToUse: "Slope of parametric curve at a point.",
    relatedConceptId: "calc-bc-parametric",
    sourceNote: "AP Calculus BC CED",
  },
  {
    id: "calc-bc-polar-area",
    subject: "AP Calculus AB/BC",
    unit: "Unit 10: Polar (BC)",
    name: "Polar area",
    expression: "A = \\frac{1}{2} \\int_\\alpha^\\beta r(\\theta)^2 \\, d\\theta",
    variables: "r(θ) polar radius",
    whenToUse: "Area enclosed by polar curve.",
    relatedConceptId: "calc-bc-parametric",
    sourceNote: "AP Calculus BC CED",
  },
  // World History skills
  {
    id: "whap-causation",
    subject: "AP World History",
    unit: "Historical Thinking",
    name: "Causation frame",
    expression: "Long-term\\ cause \\rightarrow trigger \\rightarrow short/long\\ effect",
    variables: "Use specific evidence at each step",
    whenToUse: "LEQ and DBQ argument structure.",
    relatedConceptId: "whap-revolutions",
    sourceNote: "AP World History CED skills",
  },
  {
    id: "whap-comparison",
    subject: "AP World History",
    unit: "Historical Thinking",
    name: "Comparison frame",
    expression: "Similarity/difference + why\\ (context)",
    variables: "Compare two societies/processes with reasoning",
    whenToUse: "Comparison LEQ prompts.",
    relatedConceptId: "whap-silk-roads",
    sourceNote: "AP World History CED skills",
  },
  // Physics C
  {
    id: "physc-L",
    subject: "AP Physics C: Mechanics",
    unit: "Rotation",
    name: "Angular momentum",
    expression: "L = I \\omega",
    variables: "Conserved when net external torque is zero",
    whenToUse: "Rotation collisions and spinning systems.",
    relatedConceptId: "physc-mech-rotation",
    sourceNote: "AP Physics C: Mechanics CED",
  },
  {
    id: "physc-capacitor",
    subject: "AP Physics C: E&M",
    unit: "Conductors and Capacitors",
    name: "Capacitance",
    expression: "C = Q / V",
    variables: "Q charge on capacitor, V potential difference",
    whenToUse: "Capacitor energy and RC circuits.",
    relatedConceptId: "physc-em-potential",
    sourceNote: "AP Physics C: E&M CED",
  },
  {
    id: "physc-ampere",
    subject: "AP Physics C: E&M",
    unit: "Magnetism",
    name: "Ampère's law",
    expression: "\\oint \\vec{B} \\cdot d\\vec{\\ell} = \\mu_0 I_{enc}",
    variables: "Use symmetry for long wires and solenoids",
    whenToUse: "Magnetic field from steady currents.",
    relatedConceptId: "physc-em-induction",
    sourceNote: "AP Physics C: E&M CED",
  },
  // CSP
  {
    id: "csp-runtime-compare",
    subject: "AP Computer Science Principles",
    unit: "Big Idea 3: Algorithms",
    name: "Sequential vs polynomial runtime",
    expression: "O(n) \\ll O(n^2) \\text{ for large } n",
    variables: "Compare algorithm efficiency qualitatively",
    whenToUse: "Explain why binary search beats linear search on big data.",
    relatedConceptId: "csp-algorithms",
    sourceNote: "AP CSP CED",
  },
  {
    id: "csp-data-size",
    subject: "AP Computer Science Principles",
    unit: "Big Idea 2: Data",
    name: "Bits per symbol",
    expression: "n \\text{ bits} \\Rightarrow 2^n \\text{ distinct values}",
    variables: "Binary encoding of data",
    whenToUse: "Color depth, character encoding, compression tradeoffs.",
    relatedConceptId: "csp-data-internet",
    sourceNote: "AP CSP CED",
  },
  {
    id: "csp-abstraction-layers",
    subject: "AP Computer Science Principles",
    unit: "Big Idea 1: Creative Development",
    name: "Abstraction layers",
    expression: "App \\rightarrow OS \\rightarrow Hardware",
    variables: "Each layer hides lower-level detail",
    whenToUse: "Explain APIs, protocols, and modularity.",
    relatedConceptId: "csp-abstraction",
    sourceNote: "AP CSP CED",
  },
  {
    id: "physc-shm-period",
    subject: "AP Physics C: Mechanics",
    unit: "Oscillations",
    name: "SHM period (spring)",
    expression: "T = 2\\pi \\sqrt{\\frac{m}{k}}",
    variables: "m mass, k spring constant",
    whenToUse: "Mass–spring oscillator period.",
    relatedConceptId: "physc-mech-shm",
    sourceNote: "AP Physics C: Mechanics CED",
  },
  {
    id: "csp-encryption",
    subject: "AP Computer Science Principles",
    unit: "Big Idea 5: Impact",
    name: "Public-key idea",
    expression: "Encrypt_{public} \\; Decrypt_{private}",
    variables: "Asymmetric keys for secure exchange",
    whenToUse: "Explain HTTPS / secure messaging at high level.",
    relatedConceptId: "csp-cybersecurity",
    sourceNote: "AP CSP CED",
  },
  {
    id: "euro-nation-state",
    subject: "AP European History",
    unit: "19th Century",
    name: "Nation-state formula (conceptual)",
    expression: "Shared \\; language + territory + institutions \\Rightarrow nationalism",
    variables: "Unification and separatist movements",
    whenToUse: "Explain Italian/German unification or breakup of empires.",
    relatedConceptId: "euro-industrial",
    sourceNote: "AP European History CED",
  },
];
