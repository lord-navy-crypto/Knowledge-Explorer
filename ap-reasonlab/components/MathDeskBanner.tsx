import Link from "next/link";
import { mathDeskHref, type MathDeskPad } from "@/lib/math-desk";

export type { MathDeskPad };

/** Catalog math tools stay listed — this points at the fused Calc + Graph tab. */
export default function MathDeskBanner({ pad }: { pad: MathDeskPad }) {
  return (
    <p className="rounded-xl border border-brand-200 bg-brand-50/70 px-3 py-2 text-sm text-slate-700">
      This catalog page stays here. The same tool is a tab on the{" "}
      <Link href={mathDeskHref(pad)} className="font-semibold text-brand-800 underline">
        Calc + Graph desk
      </Link>
      .
    </p>
  );
}
