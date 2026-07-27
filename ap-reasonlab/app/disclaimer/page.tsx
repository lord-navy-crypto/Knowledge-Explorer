import Link from "next/link";
import DisclaimerPanel from "@/components/DisclaimerPanel";
import { brand } from "@/data/brand";

export const metadata = {
  title: `Copyright & disclaimers — ${brand.name}`,
  description: "Trademark, original-source ownership, and accuracy notices.",
};

/** Keep a simple page that points people back to the home collapsible block. */
export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4">
      <p className="text-sm text-slate-600">
        Full notices live on the{" "}
        <Link href="/#copyright-disclaimers" className="font-medium text-brand-700 hover:underline">
          home page
        </Link>{" "}
        (expandable). Same text below for convenience.
      </p>
      <DisclaimerPanel />
    </div>
  );
}
