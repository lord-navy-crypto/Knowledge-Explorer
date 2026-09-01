import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: `Calculator & Grapher — ${brand.name}`,
  description:
    "Legacy compatibility route for Knowledge Explorer's deterministic calculator and grapher. This route does not run an AI model.",
  openGraph: {
    title: `Calculator & Grapher — ${brand.name}`,
    description: "Compatibility route for deterministic calculator and graphing links.",
    type: "website",
  },
};

export default function HintsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Calculator & Grapher" },
        ]}
      />
      {children}
    </div>
  );
}
