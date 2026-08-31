import type { Metadata } from "next";
import Link from "next/link";
import GuidePageLayout from "@/components/GuidePageLayout";
import UserGuideToolsGrid from "@/components/UserGuideToolsGrid";
import { brand } from "@/data/brand";
import { USER_GUIDE_INTRO, USER_GUIDE_SECTIONS } from "@/data/user-guide";

export const metadata: Metadata = {
  title: `User Guide — ${brand.name}`,
  description:
    "Walk through every major area of Knowledge Explorer — home boxes, AP, English, contextual AI assistants, tools, workshops, and forum.",
};

export default function UserGuidePage() {
  return (
    <GuidePageLayout
      title={USER_GUIDE_INTRO.title}
      subtitle={USER_GUIDE_INTRO.subtitle}
      lead={USER_GUIDE_INTRO.lead}
      sections={USER_GUIDE_SECTIONS}
      breadcrumbLabel="User Guide"
      extra={
        <div className="space-y-5">
          <section className="card flex flex-wrap items-center justify-between gap-4 border-violet-200 bg-violet-50/50">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">AI Guide</p>
              <h2 className="mt-1 text-xl font-bold text-slate-950">Need help choosing or using the site AI?</h2>
              <p className="mt-1 max-w-xl text-sm text-slate-600">
                AI guidance now lives here instead of inside a global AI Toolbox.
              </p>
            </div>
            <Link href="/user-guide/ai" className="btn-primary">Open AI Guide</Link>
          </section>
          <UserGuideToolsGrid />
        </div>
      }
    />
  );
}
