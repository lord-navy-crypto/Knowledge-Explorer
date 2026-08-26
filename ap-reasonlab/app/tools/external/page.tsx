import Breadcrumbs from "@/components/Breadcrumbs";
import ExternalToolsBrowser from "@/components/ExternalToolsBrowser";

export const metadata = {
  title: "External connections & tools — Knowledge Explorer",
  description:
    "Curated off-site study links: official exams, math calculators, science sims, dictionaries, coding docs, and more.",
};

export default function ExternalToolsPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "External connections" },
        ]}
      />
      <ExternalToolsBrowser />
    </div>
  );
}
