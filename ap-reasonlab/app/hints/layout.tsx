import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: `Legacy AI & Math Redirect — ${brand.name}`,
  description:
    "Compatibility route for older Knowledge Explorer AI and math links. AI now lives in AP, English, Code, and Guide; calculator and graph links remain available here.",
  openGraph: {
    title: `Legacy AI & Math Redirect — ${brand.name}`,
    description: "Compatibility route for contextual AI and math-tool links.",
    type: "website",
  },
};

export default function HintsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Legacy AI & Math Redirect" },
        ]}
      />
      {children}
    </div>
  );
}
