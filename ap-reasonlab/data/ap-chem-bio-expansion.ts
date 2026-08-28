import { Concept } from "@/lib/types";

/** Additional Chem/Bio starter concepts for search and concept library */
export const chemBioConcepts: Concept[] = [
  {
    id: "chem-stoichiometry",
    title: "Stoichiometry & Limiting Reagent",
    subject: "AP Chemistry",
    summary:
      "Convert between moles, mass, and particles using balanced equations. The limiting reagent sets the maximum product.",
    keyPoints: [
      "Use mole ratios from balanced coefficients.",
      "Limiting reagent is consumed first; excess remains.",
      "Theoretical yield uses limiting reagent moles.",
    ],
    commonMistakes: [
      "Using mass ratios directly without converting to moles.",
      "Picking the wrong limiting reagent by comparing grams only.",
    ],
    example: "2 H₂ + O₂ → 2 H₂O: 4 mol H₂ needs 2 mol O₂; if only 1 mol O₂, O₂ limits.",
  },
  {
    id: "chem-equilibrium",
    title: "Chemical Equilibrium",
    subject: "AP Chemistry",
    summary:
      "At equilibrium, forward and reverse rates are equal. Le Châtelier's principle predicts shifts when stress is applied.",
    keyPoints: [
      "K = products/reactants (each raised to stoichiometric powers).",
      "Q compared to K tells direction of shift.",
      "Changing concentration, pressure, or temperature shifts equilibrium.",
    ],
    commonMistakes: [
      "Assuming K changes when concentration changes (K changes only with T).",
      "Adding inert gas at constant volume does not shift equilibrium.",
    ],
    example: "For N₂ + 3 H₂ ⇌ 2 NH₃, increasing pressure favors fewer gas moles (products side).",
  },
  {
    id: "bio-cell-membrane",
    title: "Cell Membrane Transport",
    subject: "AP Biology",
    summary:
      "The plasma membrane regulates passage via passive diffusion, facilitated diffusion, and active transport.",
    keyPoints: [
      "Passive transport moves down concentration gradient without ATP.",
      "Active transport uses ATP against gradient.",
      "Osmosis is water movement across a selectively permeable membrane.",
    ],
    commonMistakes: [
      "Confusing hypertonic/hypotonic from the cell's perspective vs solution label.",
      "Assuming all proteins are channels — carriers also exist.",
    ],
    example: "In a hypertonic solution, animal cells shrink as water leaves by osmosis.",
  },
  {
    id: "bio-photosynthesis",
    title: "Photosynthesis Overview",
    subject: "AP Biology",
    summary:
      "Light reactions in thylakoids produce ATP and NADPH; Calvin cycle in stroma fixes CO₂ into sugar.",
    keyPoints: [
      "6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂ (overall).",
      "Photolysis splits water; O₂ is released.",
      "Rubisco fixes CO₂ in Calvin cycle.",
    ],
    commonMistakes: [
      "Thinking O₂ comes from CO₂ (it comes from water).",
      "Confusing light-dependent and light-independent locations.",
    ],
    example: "Blocking photosystem II stops ATP/NADPH production and eventually stops Calvin cycle.",
  },
  {
    id: "chem-kinetics",
    title: "Reaction Kinetics",
    subject: "AP Chemistry",
    summary:
      "Rate laws express reaction speed as a function of concentration. Activation energy controls temperature sensitivity.",
    keyPoints: [
      "Rate = k[A]^m[B]^n from experimental data.",
      "Higher T increases fraction of collisions exceeding E_a.",
      "Catalysts lower activation energy without changing ΔG.",
    ],
    commonMistakes: [
      "Confusing coefficients in balanced equation with reaction orders.",
      "Assuming rate doubles whenever temperature rises slightly without context.",
    ],
    example: "If rate doubles when [A] doubles and order in A is 1, doubling [A] doubles rate.",
  },
  {
    id: "bio-gene-expression",
    title: "Gene Expression & Regulation",
    subject: "AP Biology",
    summary:
      "DNA → RNA → protein with multiple control points. Operons and transcription factors regulate prokaryotic and eukaryotic expression.",
    keyPoints: [
      "Transcription and translation can be regulated separately.",
      "lac operon model: repressor vs inducer.",
      "Mutations in regulatory regions affect expression level.",
    ],
    commonMistakes: [
      "Assuming every gene is always transcribed.",
      "Confusing gene regulation with DNA replication.",
    ],
    example: "Lactose presence inactivates the lac repressor, allowing transcription of lac genes.",
  },
];
