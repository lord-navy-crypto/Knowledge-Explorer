import type { Metadata } from "next";
import { getSubjectBySlug } from "@/data/ap-catalog";
import { brand } from "@/data/brand";

type Props = {
  children: React.ReactNode;
  params: Promise<{ subject: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: slug } = await params;
  const entry = getSubjectBySlug(slug);
  const title = entry?.name || slug.replace(/-/g, " ");
  const description =
    entry?.description ||
    `Concepts, formulas, practice, and AI study tools for ${title} on ${brand.name}.`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} — ${brand.name}`,
      description,
      images: [{ url: `/ap/${slug}/opengraph-image`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${brand.name}`,
      description,
      images: [`/ap/${slug}/opengraph-image`],
    },
  };
}

export default function ApSubjectLayout({ children }: Props) {
  return children;
}
