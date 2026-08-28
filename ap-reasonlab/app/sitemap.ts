import type { MetadataRoute } from "next";
import { AP_CATALOG } from "@/data/ap-catalog";
import { concepts } from "@/data/content";
import { listedStudyTools } from "@/data/study-tools";
import { keyConceptGuides } from "@/data/key-concepts";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://ap-webside.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/search",
    "/user-guide",
    "/about",
    "/disclaimer",
    "/partners",
    "/hints",
    "/ap",
    "/ap/writing-frameworks",
    "/english",
    "/tools",
    "/code",
    "/forum",
    "/concepts",
    "/formulas",
    "/practice",
    "/key-concepts",
    "/questionnaires",
    "/checklist",
    "/guide",
    "/explore",
    "/explore/ap-english",
    "/explore/tools-code",
    "/explore/workshops",
    "/explore/simulation-workshop",
    "/explore/download",
    "/english/toefl",
    "/english/sat",
    "/english/vocabulary",
    "/english/grammar",
    "/english/ai",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/hints") || path === "/user-guide" ? 0.9 : 0.7,
  }));

  for (const subject of AP_CATALOG) {
    entries.push({
      url: `${BASE}/ap/${subject.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const tool of listedStudyTools()) {
    if (!tool.href.startsWith("/")) continue;
    entries.push({
      url: `${BASE}${tool.href.split("?")[0]}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const guide of keyConceptGuides) {
    entries.push({
      url: `${BASE}/key-concepts/${guide.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  for (const concept of concepts) {
    entries.push({
      url: `${BASE}/concepts/${concept.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
