import type { QuestionnaireItem } from "@/lib/types";
import { recoveredApItemsBatch4 } from "@/data/ap-question-recovery-batch-4";
import { recoveredApItemsBatch4C } from "@/data/ap-question-recovery-batch-4c";

export const recoveredApItemsBatch4Fix: Record<string, QuestionnaireItem> = {
  "wh-comp-b2": {
    ...recoveredApItemsBatch4["wh-comp-b2"],
    rationale: "A strong continuity-and-change response must prove both persistence and transformation across the full period, then explain why new maritime structures layered onto rather than instantly erased older commercial networks."
  },
  "phys1-en-c2": {
    ...recoveredApItemsBatch4C["phys1-en-c2"],
    rationale: "Mechanical energy can compare endpoint states without reproducing every force-time detail, but once nonconservative friction is present the path matters because different normal forces and distances produce different thermal-energy transfers."
  },
  "phys1-shm-c1": {
    ...recoveredApItemsBatch4C["phys1-shm-c1"],
    rationale: "The period relation connects measurable timing to an inferred spring constant; uncertainty and scaling questions test whether the student understands the power-law dependence rather than merely substituting numbers into a formula."
  },
  "phys1-shm-c2": {
    ...recoveredApItemsBatch4C["phys1-shm-c2"],
    rationale: "Simple harmonic motion continuously exchanges spring potential and kinetic energy, while acceleration depends directly on displacement; damping then provides a contrasting case in which mechanical energy and amplitude decrease over time."
  }
};
