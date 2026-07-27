import Link from "next/link";
import DisclaimerPanel from "@/components/DisclaimerPanel";
import { brand } from "@/data/brand";

export const metadata = {
  title: `Copyright & disclaimers — ${brand.name}`,
  description:
    "AP / College Board trademark notice, original-source ownership, and content accuracy disclaimers.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <DisclaimerPanel />
      <p className="text-sm text-slate-500">
        The same notices are posted on the{" "}
        <Link href="/" className="font-medium text-brand-700 hover:underline">
          home page
        </Link>
        . Also see{" "}
        <Link href="/about" className="font-medium text-brand-700 hover:underline">
          About {brand.name}
        </Link>
        .
      </p>
    </div>
  );
}
