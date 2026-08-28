import type { Metadata } from "next";
import GuidePageLayout from "@/components/GuidePageLayout";
import UserGuideToolsGrid from "@/components/UserGuideToolsGrid";
import { brand } from "@/data/brand";
import { USER_GUIDE_INTRO, USER_GUIDE_SECTIONS } from "@/data/user-guide";

export const metadata: Metadata = {
  title: `User Guide — ${brand.name}`,
  description:
    "Walk through every major area of Knowledge Explorer — home boxes, AP, English, AI Toolbox, tools, workshops, and forum.",
};

export default function UserGuidePage() {
  return (
    <GuidePageLayout
      title={USER_GUIDE_INTRO.title}
      subtitle={USER_GUIDE_INTRO.subtitle}
      lead={USER_GUIDE_INTRO.lead}
      sections={USER_GUIDE_SECTIONS}
      breadcrumbLabel="User Guide"
      extra={<UserGuideToolsGrid />}
    />
  );
}
