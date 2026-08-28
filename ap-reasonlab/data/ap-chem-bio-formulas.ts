import { Formula } from "@/lib/types";

export const chemBioFormulas: Formula[] = [
  {
    id: "chem-moles",
    subject: "AP Chemistry",
    unit: "Unit 4: Chemical Reactions",
    name: "Moles from mass",
    expression: "n = m / M",
    variables: "n = moles, m = mass (g), M = molar mass (g/mol)",
    whenToUse: "Convert between grams and moles before using stoichiometry.",
    relatedConceptId: "chem-stoichiometry",
    sourceNote: "AP Chemistry curriculum",
  },
  {
    id: "chem-k-expression",
    subject: "AP Chemistry",
    unit: "Unit 7: Equilibrium",
    name: "Equilibrium constant",
    expression: "K = \\frac{[products]}{[reactants]}",
    variables: "Concentrations at equilibrium, each raised to stoichiometric coefficients",
    whenToUse: "Compare Q to K to predict shift direction.",
    relatedConceptId: "chem-equilibrium",
    sourceNote: "AP Chemistry curriculum",
  },
  {
    id: "bio-osmosis",
    subject: "AP Biology",
    unit: "Unit 2: Cell Structure",
    name: "Water potential (simplified)",
    expression: "\\Psi = \\Psi_s + \\Psi_p",
    variables: "Ψ = water potential, Ψs = solute potential, Ψp = pressure potential",
    whenToUse: "Predict direction of water movement in osmosis problems.",
    relatedConceptId: "bio-cell-membrane",
    sourceNote: "AP Biology curriculum",
  },
];
