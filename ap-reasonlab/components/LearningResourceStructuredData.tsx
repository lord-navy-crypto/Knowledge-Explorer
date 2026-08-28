type Props = {
  title: string;
  description: string;
  url: string;
  subject?: string;
  type?: "Concept" | "Guide" | "Course";
};

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://ap-webside.vercel.app";

export default function LearningResourceStructuredData({
  title,
  description,
  url,
  subject,
  type = "Concept",
}: Props) {
  const absolute = url.startsWith("http") ? url : `${BASE}${url}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description: description.slice(0, 500),
    url: absolute,
    learningResourceType: type,
    inLanguage: "en",
    ...(subject
      ? {
          about: {
            "@type": "Thing",
            name: subject,
          },
        }
      : {}),
    provider: {
      "@type": "Organization",
      name: "Knowledge Explorer",
      url: BASE,
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
