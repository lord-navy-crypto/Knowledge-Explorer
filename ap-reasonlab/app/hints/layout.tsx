import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: `AI Toolbox — ${brand.name}`,
  description:
    "Unified AI panel for AP hints, English tutoring, coding help, Calculator, and Grapher — Local AI, Website API, or your own key.",
  openGraph: {
    title: `AI Toolbox — ${brand.name}`,
    description: "AP · English · Coding · Calculator · Grapher in one study panel.",
    type: "website",
  },
};

export default function HintsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Toolbox" },
        ]}
      />
      {children}
    </div>
  );
}
