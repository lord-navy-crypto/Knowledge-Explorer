import Link from "next/link";

type ExternalTool = {
  name: string;
  href: string;
  blurb: string;
  tags: string[];
};

/**
 * External complements only — built-in tools already appear in the /tools catalog
 * (and AI Toolbox tabs). Do not re-list built-ins here.
 */
const EXTERNAL_TOOLS: ExternalTool[] = [
  {
    name: "Desmos Graphing Calculator",
    href: "https://www.desmos.com/calculator",
    blurb: "Full graphing calculator for AP Calc / Physics / Stats. Prefer KE Graph in AI Toolbox for quick plots on this site.",
    tags: ["graphing", "external"],
  },
  {
    name: "Khan Academy",
    href: "https://www.khanacademy.org/",
    blurb: "Free concept videos and exercises across AP subjects.",
    tags: ["lessons", "videos"],
  },
  {
    name: "GeoGebra",
    href: "https://www.geogebra.org/graphing",
    blurb: "Interactive geometry and 3D graphs when you need more than KE Graph.",
    tags: ["geometry", "STEM"],
  },
  {
    name: "Wolfram Alpha",
    href: "https://www.wolframalpha.com/",
    blurb: "Step-style math checks and science lookups (follow class rules on graded work).",
    tags: ["check work", "external"],
  },
];

type Props = {
  /** Where this block is shown — changes the intro copy. */
  context?: "tools" | "hints";
};

export default function RecommendedStudyTools({ context = "tools" }: Props) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="section-title">
          {context === "hints" ? "External study links" : "External complements"}
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-slate-600">
          {context === "hints" ? (
            <>
              Built-in study utilities live on the{" "}
              <Link href="/tools" className="font-medium text-brand-700 underline">
                Tools
              </Link>{" "}
              page (focus desk, formula board, vocab, file lab…). Links below are optional
              outside sites — follow your teacher’s calculator / AI rules on graded work.
            </>
          ) : (
            <>
              Built-in tools are already listed by category above. These external links are
              optional complements only — not a second copy of the toolbox.
            </>
          )}
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {EXTERNAL_TOOLS.map((tool) => (
          <a
            key={tool.href}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover block"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">External</p>
            <h3 className="mt-1 font-semibold text-slate-900">{tool.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{tool.blurb}</p>
            <p className="mt-2 text-[11px] text-slate-400">{tool.tags.join(" · ")}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
