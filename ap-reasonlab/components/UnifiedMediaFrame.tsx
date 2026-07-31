"use client";

import UploadAndShow from "@/components/UploadAndShow";

type AlsoShow = Array<
  "concept" | "topic" | "formula" | "document" | "member" | "folder" | "subject" | "questionnaire"
>;

type Props = {
  /** Window title shown in the chrome bar */
  title?: string;
  /** Shared site storage area key */
  folderArea: string;
  /** Isolated space (subject name, slug, folder:id, _root) */
  spaceKey?: string;
  spaceBasePath?: string;
  defaultSubject?: string;
  /** Collapse shared uploads by default */
  collapsedByDefault?: boolean;
  allowPublicContributions?: boolean;
  /**
   * Extra add actions for this page (topic, concept, formula, nested folder, subject…).
   * Upload file is always available; include "document" for text documents.
   */
  alsoShow?: AlsoShow;
  /** Files/images/documents only — no concept/formula/practice in this panel. */
  mediaOnly?: boolean;
  onSubjectsChange?: (subjects: string[]) => void;
  onQuestionnairesChange?: (quizzes: unknown[]) => void;
  className?: string;
};

/**
 * In-page shared media panel (scrolls with the page).
 * Optimized for browsing/downloading files; upload controls stay the same.
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
  const mediaOnly =
    mediaOnlyProp ?? (folderArea === "ap-subject" || folderArea === "past-papers");
  // Every page panel can create nested file folders (AP, Academic, Tools, Code, Forum…).
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
        <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-slate-400">
          This page
        </span>
      </div>

      <div className="p-3 md:p-4">
        <UploadAndShow
          title="Files"
          folderArea={folderArea}
          spaceKey={spaceKey}
          spaceBasePath={spaceBasePath}
          defaultSubject={defaultSubject}
          collapsedByDefault={collapsedByDefault}
          allowPublicContributions={allowPublicContributions}
          alsoShow={extras}
          mediaOnly={mediaOnly}
          onSubjectsChange={onSubjectsChange}
          onQuestionnairesChange={onQuestionnairesChange}
        />
      </div>
    </section>
  );
}
