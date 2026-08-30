"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const UploadAndShow = dynamic(() => import("@/components/UploadAndShow"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-500">
      Loading files & editor…
    </div>
  ),
});

type AlsoShow = Array<
  "concept" | "topic" | "formula" | "document" | "member" | "folder" | "subject" | "questionnaire"
>;

type Props = {
  title?: string;
  folderArea: string;
  spaceKey?: string;
  spaceBasePath?: string;
  defaultSubject?: string;
  collapsedByDefault?: boolean;
  allowPublicContributions?: boolean;
  alsoShow?: AlsoShow;
  mediaOnly?: boolean;
  onSubjectsChange?: (subjects: string[]) => void;
  onQuestionnairesChange?: (quizzes: unknown[]) => void;
  className?: string;
};

/**
 * Lightweight shell for the page media/editor panel.
 * The heavy upload/editor implementation lives in a separate client chunk and is
 * not requested until the panel is actually opened. This keeps browsing/navigation
 * pages fast while preserving the full editor when a user asks for it.
 */
export default function UnifiedMediaFrame({
  title = "Pictures, documents & files",
  folderArea,
  spaceKey,
  spaceBasePath,
  defaultSubject,
  collapsedByDefault = false,
  allowPublicContributions = false,
  alsoShow = ["document", "folder"],
  mediaOnly: mediaOnlyProp,
  onSubjectsChange,
  onQuestionnairesChange,
  className = "",
}: Props) {
  const [open, setOpen] = useState(!collapsedByDefault);
  const mediaOnly =
    mediaOnlyProp ?? (folderArea === "ap-subject" || folderArea === "past-papers");
  const extras = mediaOnly
    ? (["folder", "document"] as AlsoShow)
    : (Array.from(new Set([...alsoShow, "folder", "document"])) as AlsoShow);

  return (
    <section
      id="page-media"
      className={`scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-800">{title}</p>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="shrink-0 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300 hover:bg-slate-50"
          aria-expanded={open}
        >
          {open ? "Hide" : "Open files"}
        </button>
      </div>

      {open ? (
        <div className="p-3 md:p-4">
          <UploadAndShow
            title="Files"
            folderArea={folderArea}
            spaceKey={spaceKey}
            spaceBasePath={spaceBasePath}
            defaultSubject={defaultSubject}
            collapsedByDefault={false}
            allowPublicContributions={allowPublicContributions}
            alsoShow={extras}
            mediaOnly={mediaOnly}
            onSubjectsChange={onSubjectsChange}
            onQuestionnairesChange={onQuestionnairesChange}
          />
        </div>
      ) : (
        <div className="px-4 py-3 text-sm text-slate-500">
          Files and editing tools load only when opened.
        </div>
      )}
    </section>
  );
}