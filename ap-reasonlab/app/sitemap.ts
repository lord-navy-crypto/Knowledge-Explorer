import type { MetadataRoute } from "next";
import { AP_CATALOG } from "@/data/ap-catalog";
import { concepts } from "@/data/content";
import { listedStudyTools } from "@/data/study-tools";
import { keyConceptGuides } from "@/data/key-concepts";
import { writingFrameworks } from "@/data/humanities-writing-frameworks";
import { questionnaires } from "@/data/questionnaires";

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
    "/explore/sentinel",
    "/explore/simulation-workshop",
    "/explore/download",
    "/english/toefl",
    "/english/sat",
    "/english/vocabulary",
    "/english/grammar",
    "/english/ai",
    "/hints?tool=calculator",
    "/hints?tool=grapher",
    "/hints?section=ai-for-ap",
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
      url: `${BASE}${tool.href}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const framework of writingFrameworks) {
    entries.push({
      url: `${BASE}/ap/writing-frameworks#${framework.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  for (const quiz of questionnaires.filter((q) => !q.id.startsWith("m-quiz"))) {
    entries.push({
      url: `${BASE}/questionnaires/${quiz.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.55,
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
