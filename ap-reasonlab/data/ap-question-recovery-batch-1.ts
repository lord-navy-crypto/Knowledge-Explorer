import type { QuestionnaireItem } from "@/lib/types";

/**
 * Audited replacements for quarantined historical AP items.
 * Keep the original item id so the aggregate bank can replace the legacy item in place.
 * Every replacement must have a defensible reference answer, rationale, and scoring guide.
 */
export const recoveredApItemsBatch1: Record<string, QuestionnaireItem> = {
  "p2-th-1": {
    id: "p2-th-1",
    format: "frq_half",
    conceptId: "p2-thermo",
    conceptIntro: "Section II · Mathematical Routines. Energy transfer and sign conventions in calorimetry.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt:
      "A 0.500 kg aluminum block with specific heat capacity 900 J/(kg·K) is initially at 80.0°C. It is placed in a large thermal reservoir at 20.0°C and eventually reaches thermal equilibrium with the reservoir. Assume the block remains solid and its specific heat is constant.\n\n(a) Calculate the change in thermal energy of the aluminum block. Include the sign of your answer.\n(b) State the magnitude of the energy transferred from the block to the reservoir.\n(c) A student claims that the numerical value of ΔT must be converted to kelvins before using Q = mcΔT. Evaluate the claim and justify your answer.",
    visibleSteps: [
      "Use ΔT = T_f − T_i for the block.",
      "Apply Q = mcΔT and interpret the sign.",
      "Compare temperature differences measured in Celsius and kelvins."
    ],
    hints: [
      "ΔT = 20.0°C − 80.0°C = −60.0°C, which is also −60.0 K as a temperature difference.",
      "A negative Q for the block means energy leaves the block."
    ],
    answerKey:
      "(a) ΔT = 20.0 − 80.0 = −60.0 K, so Q = (0.500 kg)(900 J/(kg·K))(−60.0 K) = −2.70 × 10^4 J. (b) The reservoir receives 2.70 × 10^4 J from the block. (c) The student's claim is incorrect. Absolute Celsius temperatures cannot generally replace kelvin temperatures in formulas that require absolute temperature, but a temperature interval has the same numerical size in °C and K, so ΔT = −60.0°C and −60.0 K are numerically equivalent here.",
    rationale:
      "The task tests both calculation and interpretation. The sign follows from defining Q for the aluminum block, and the conceptual part distinguishes absolute temperature from a temperature difference.",
    scoringGuide: [
      "Point 1: determines ΔT = −60.0 K (or −60.0°C as a temperature change) and substitutes consistently into Q = mcΔT.",
      "Point 2: obtains Q = −2.70 × 10^4 J for the block with an appropriate sign and units.",
      "Point 3: states that 2.70 × 10^4 J is transferred to the reservoir.",
      "Point 4: explains that Celsius and kelvin temperature differences have the same numerical magnitude, while absolute temperatures do not."
    ],
    examSection: "Section II · Mathematical Routines"
  },

  "p2-opt-1": {
    id: "p2-opt-1",
    format: "frq_half",
    conceptId: "p2-geometric-optics",
    conceptIntro: "Section II · Mathematical Routines. Refraction, geometry, and physical interpretation.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt:
      "A narrow beam of monochromatic light travels from air (n = 1.00) into water (n = 1.33). The incident ray makes an angle of 30.0° with the normal to the surface.\n\n(a) Calculate the angle the refracted ray makes with the normal in the water.\n(b) State whether the ray bends toward or away from the normal and explain how your calculated result supports your statement.\n(c) The frequency of the light is f in air. Determine whether its frequency in the water is less than, equal to, or greater than f, and justify your answer.",
    visibleSteps: [
      "Apply n₁ sin θ₁ = n₂ sin θ₂.",
      "Use the relative sizes of θ₁ and θ₂ to interpret the bending.",
      "Use boundary continuity of frequency for part (c)."
    ],
    hints: [
      "sin θ₂ = (1.00/1.33) sin 30.0°.",
      "The wave speed and wavelength change at the boundary, but the source frequency does not."
    ],
    answerKey:
      "(a) sin θ₂ = (1.00/1.33)(0.500) = 0.37594, so θ₂ ≈ 22.1°. (b) The ray bends toward the normal because θ₂ < θ₁ when light enters the higher-index medium. (c) The frequency remains equal to f. The frequency is fixed by the source and must match across the boundary; the reduced speed in water is accompanied by a reduced wavelength.",
    rationale:
      "The numerical Snell's-law result is paired with two conceptual checks so the item assesses more than substitution into an equation.",
    scoringGuide: [
      "Point 1: correctly applies Snell's law to obtain sin θ₂ ≈ 0.376.",
      "Point 2: obtains θ₂ ≈ 22.1° with the angle measured from the normal.",
      "Point 3: states that the ray bends toward the normal and connects this to entering a higher-index medium or to θ₂ < θ₁.",
      "Point 4: states that frequency is unchanged across the boundary and gives a valid wave-based justification."
    ],
    examSection: "Section II · Mathematical Routines"
  },

  "p2-wv-1": {
    id: "p2-wv-1",
    format: "frq_half",
    conceptId: "p2-waves-optics",
    conceptIntro: "Section II · Mathematical Routines. Standing waves in an air column.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt:
      "A tube of length 0.680 m is closed at one end and open at the other. The speed of sound in the air is 340 m/s. End correction may be neglected.\n\n(a) Calculate the fundamental frequency of the air column.\n(b) Calculate the next resonant frequency above the fundamental.\n(c) Sketch or describe the displacement-node/antinode pattern for the fundamental, identifying what occurs at the closed and open ends.",
    visibleSteps: [
      "For a closed-open tube, allowed harmonics are n = 1, 3, 5, … in f_n = nv/(4L).",
      "The closed end is a displacement node and the open end is a displacement antinode."
    ],
    hints: [
      "The fundamental uses n = 1.",
      "The next allowed mode uses n = 3, not n = 2."
    ],
    answerKey:
      "(a) f₁ = v/(4L) = 340/[4(0.680)] = 125 Hz. (b) The next allowed mode has n = 3, so f₃ = 3f₁ = 375 Hz. (c) For the fundamental, the closed end is a displacement node and the open end is a displacement antinode; one quarter of a wavelength fits in the tube.",
    rationale:
      "The item checks the closed-pipe harmonic sequence and the physical boundary conditions, two common sources of error in standing-wave problems.",
    scoringGuide: [
      "Point 1: uses the closed-open fundamental relation f₁ = v/(4L).",
      "Point 2: obtains f₁ = 125 Hz with units.",
      "Point 3: identifies the next allowed harmonic as n = 3 and obtains 375 Hz.",
      "Point 4: correctly identifies a displacement node at the closed end and a displacement antinode at the open end."
    ],
    examSection: "Section II · Mathematical Routines"
  },

  "p2-mod-1": {
    id: "p2-mod-1",
    format: "frq_half",
    conceptId: "p2-modern",
    conceptIntro: "Section II · Mathematical Routines. Photon energy and the photoelectric effect.",
    authenticity: "exam_authentic",
    responseMode: "extended_response",
    difficultyTier: 2,
    prompt:
      "Ultraviolet light of frequency 1.00 × 10^15 Hz is incident on a metal surface whose work function is 3.00 × 10^−19 J. Use h = 6.63 × 10^−34 J·s.\n\n(a) Calculate the maximum kinetic energy of an emitted photoelectron.\n(b) The intensity of the light is doubled while its frequency is unchanged. State what happens to the maximum kinetic energy of the emitted electrons and justify your answer using the photon model.\n(c) The original light is replaced by light of lower frequency whose photon energy is less than the work function. Predict whether photoelectrons are emitted, even if the new light is very intense, and explain.",
    visibleSteps: [
      "Compute photon energy E = hf.",
      "Apply K_max = hf − φ.",
      "Separate photon energy (frequency) from photon flux (intensity)."
    ],
    hints: [
      "At 1.00 × 10^15 Hz, hf = 6.63 × 10^−19 J.",
      "Increasing intensity increases the number of photons per unit time, not the energy of each photon."
    ],
    answerKey:
      "(a) K_max = hf − φ = (6.63 × 10^−34)(1.00 × 10^15) − 3.00 × 10^−19 = 3.63 × 10^−19 J. (b) K_max is unchanged because each photon still has energy hf; doubling intensity increases photon flux and can increase the number of emitted electrons, not the maximum energy per electron. (c) No photoelectrons are emitted when hf < φ, regardless of intensity, because an individual photon does not supply enough energy to free an electron in the standard photoelectric model.",
    rationale:
      "The calculation is followed by two photon-model predictions that distinguish the roles of frequency and intensity in the photoelectric effect.",
    scoringGuide: [
      "Point 1: calculates photon energy hf = 6.63 × 10^−19 J.",
      "Point 2: obtains K_max = 3.63 × 10^−19 J with units.",
      "Point 3: states that doubling intensity does not change K_max and explains intensity as increased photon flux.",
      "Point 4: predicts no emission below threshold frequency and explains that each photon has insufficient energy when hf < φ."
    ],
    examSection: "Section II · Mathematical Routines"
  }
};
