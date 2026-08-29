export type MathDeskPad = "units" | "sci" | "vector" | "latex" | "formulas";

/** Fused Calc + Graph tab for a catalog math tool. Must keep `calculator` in the href. */
export function mathDeskHref(pad: MathDeskPad): string {
  return `/hints?tool=calculator&pad=${pad}`;
}
