import { brand } from "@/data/brand";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://ap-webside.vercel.app";

export default function SiteStructuredData() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    description: brand.description,
    url: BASE,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: brand.name,
    url: BASE,
    description: brand.tagline,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Knowledge Explorer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Knowledge Explorer is an academic platform with AP subjects, English exam practice, study tools, contextual AI assistants, Forum, and browser-local Easy Local AI.",
        },
      },
      {
        "@type": "Question",
        name: "Is Knowledge Explorer affiliated with the College Board?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. AP and College Board are trademarks of the College Board. This site is an unofficial study aid.",
        },
      },
      {
        "@type": "Question",
        name: "Where do I start studying?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open Explore from the home page, choose AP & English, Tools & Code, workshops, or Sentinel Map and Easy Local AI, then enter the task-specific area you need.",
        },
      },
    ],
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AP & English study hub",
    description: "Concepts, formulas, practice, TOEFL/SAT lanes, and contextual AI-assisted study workflows.",
    provider: {
      "@type": "Organization",
      name: brand.name,
      url: BASE,
    },
    url: `${BASE}/explore/ap-english`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
      />
    </>
  );
}
