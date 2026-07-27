import Link from "next/link";
import { brand } from "@/data/brand";
import { footerDisclaimerShort } from "@/data/disclaimer";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-8 text-center text-sm text-slate-500">
        <p className="font-medium text-slate-700">
          {brand.name} — Academic box & platform. Tutor, not solver.
        </p>
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-slate-500">
          {footerDisclaimerShort}
        </p>
        <p className="text-xs text-slate-400">
          <Link href="/#copyright-disclaimers" className="font-medium text-brand-700 hover:underline">
            Full disclaimers on home
          </Link>
          {" · "}
          <Link href="/disclaimer" className="hover:underline">
            Disclaimer page
          </Link>
          {" · "}
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </p>
      </div>
    </footer>
  );
}
