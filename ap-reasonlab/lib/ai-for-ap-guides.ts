import { keyConceptGuides } from "@/data/key-concepts";
import { statsGuides } from "@/data/ap-stats";
import type { KeyConceptGuide } from "@/lib/types";
import { GUIDE_TOOLBOX_LINKS, toolboxHref } from "@/lib/ai-toolbox-url";

export function listAiForApGuides(): KeyConceptGuide[] {
  const fromMain = keyConceptGuides.filter((g) => g.category === "ai_for_ap");
  const fromStats = statsGuides.filter((g) => g.category === "ai_for_ap");
  const seen = new Set(fromMain.map((g) => g.id));
  return [...fromMain, ...fromStats.filter((g) => !seen.has(g.id))];
}

export function getAnyGuideById(id: string): KeyConceptGuide | undefined {
  const fromMain = keyConceptGuides.find((g) => g.id === id);
  if (fromMain) return fromMain;
  return statsGuides.find((g) => g.id === id);
}

export function toolboxLinkForGuide(guideId: string) {
  return (
    GUIDE_TOOLBOX_LINKS[guideId] || {
      href: toolboxHref({ apTask: "concept", subject: "Study Skills / AI for AP" }),
      label: "Open AI Toolbox",
      blurb: "Local AI recommended — use as a Socratic tutor, not an answer key.",
    }
  );
}
