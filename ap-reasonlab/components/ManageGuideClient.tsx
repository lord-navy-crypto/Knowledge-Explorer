"use client";

import Link from "next/link";
import GuidePageLayout from "@/components/GuidePageLayout";
import { useEditorMode } from "@/components/EditorModeProvider";
import { MANAGE_GUIDE_INTRO, MANAGE_GUIDE_SECTIONS } from "@/data/manage-guide";

export default function ManageGuideClient() {
  const { unlocked } = useEditorMode();

  const lockMessage = (
    <section className="card mx-auto max-w-2xl text-center">
      <span
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl text-slate-600"
        aria-hidden
      >
        🔒
      </span>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Manage Guide is locked</h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        This guide is for editors who can change site content. Unlock once at{" "}
        <strong>/login</strong> or with the <strong>edit circle (✎)</strong> using the content change
        code — then return here for the full workflow.
      </p>
      <p className="mt-2 text-sm text-slate-500">
        The public <Link href="/user-guide" className="font-medium text-brand-700 hover:underline">User Guide</Link>{" "}
        is always open and covers student-facing features.
      </p>
      <Link href="/login?next=/manage-guide" className="btn-primary mt-5 inline-flex">
        Unlock at /login
      </Link>
    </section>
  );

  return (
    <GuidePageLayout
      title={MANAGE_GUIDE_INTRO.title}
      subtitle={MANAGE_GUIDE_INTRO.subtitle}
      lead={MANAGE_GUIDE_INTRO.lead}
      sections={MANAGE_GUIDE_SECTIONS}
      breadcrumbLabel="Manage Guide"
      locked={!unlocked}
      lockMessage={lockMessage}
    />
  );
}
