import Link from "next/link";
import { brand } from "@/data/brand";
import { footerDisclaimerShort } from "@/data/disclaimer";

export default function SiteFooter() {
  return (
    <footer className="relative z-[1] border-t border-[var(--ke-border)] bg-[rgba(255,252,247,0.88)]">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-8 text-center text-sm text-slate-500">
        <p className="font-display font-medium text-[var(--ke-ink)]">
          {brand.name} — Academic box & platform. Tutor, not solver.
        </p>
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-slate-500">
          {footerDisclaimerShort}
        </p>
        <p className="text-xs text-slate-400">
          <Link href="/#copyright-disclaimers" className="font-medium text-brand-700 hover:underline">
            Copyright &amp; disclaimers (home)
          </Link>
          {" · "}
          <Link href="/search" className="hover:underline">
            Search
          </Link>
          {" · "}
          <Link href="/user-guide" className="hover:underline">
            User Guide
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
