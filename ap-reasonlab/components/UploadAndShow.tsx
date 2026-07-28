"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ChangePanel from "@/components/ChangePanel";
import MediaFinderBrowser, { type MediaRow } from "@/components/MediaFinderBrowser";
import RichContent from "@/components/RichContent";
import ResourceEditor from "@/components/ResourceEditor";
import { useEditorMode } from "@/components/EditorModeProvider";
import type {
  ManagedContent,
  ManagedDocument,
  ManagedFile,
  ManagedFolder,
} from "@/lib/managed-types";
import { managedSubjectNames } from "@/lib/managed-types";
import type { Concept, Formula } from "@/lib/types";
import { readResponseJson } from "@/lib/safe-json";
import {
  ROOT_SPACE,
  folderSpaceId,
  matchesSpace,
  normalizeSpace,
  spaceHref,
  spaceLabel,
} from "@/lib/storage-space";

type Props = {
  alsoShow?: Array<
    "concept" | "topic" | "formula" | "document" | "member" | "folder" | "subject" | "questionnaire"
  >;
  defaultSubject?: string;
  /** Page area key, e.g. concepts | formulas | code */
  folderArea?: string;
  /** Isolated storage space for this folder / panel */
  spaceKey?: string;
  /** Base path for opening nested folders, e.g. /concepts */
  spaceBasePath?: string;
  title?: string;
  /** Called when managed subjects list changes (parent can refresh folder grids) */
  onSubjectsChange?: (subjects: string[]) => void;
  /** Called when managed questionnaires change */
  onQuestionnairesChange?: (quizzes: unknown[]) => void;
  /** Keep uploads collapsed so study content stays first */
  collapsedByDefault?: boolean;
  /** Anonymous users may add to Sharing Materials; deletion still requires a code. */
  allowPublicContributions?: boolean;
};

function isImageFile(file: ManagedFile) {
  const name = file.name.toLowerCase();
  return Boolean(
    file.mime?.startsWith("image/") ||
      file.dataUrl?.startsWith("data:image") ||
      /\.(png|jpe?g|gif|webp|bmp|svg|heic|avif)$/i.test(name)
  );
}

/**
 * Per-area / per-folder storage panel.
 * Each area + folder space is its own bucket — files do not mix across panels.
 * This is shared site content (change code to edit), not per-user private storage.
 */
export default function UploadAndShow({
  alsoShow = [],
  defaultSubject,
  folderArea = "general",
  spaceKey = ROOT_SPACE,
  spaceBasePath,
  title = "This folder’s storage",
  onSubjectsChange,
  onQuestionnairesChange,
  collapsedByDefault = false,
  allowPublicContributions = false,
}: Props) {
  const { active: editMode, unlocked } = useEditorMode();
  const [allFiles, setAllFiles] = useState<ManagedFile[]>([]);
  const [allDocuments, setAllDocuments] = useState<ManagedDocument[]>([]);
  const [allFolders, setAllFolders] = useState<ManagedFolder[]>([]);
  const [allConcepts, setAllConcepts] = useState<Concept[]>([]);
  const [allFormulas, setAllFormulas] = useState<Formula[]>([]);
  const [allSubjects, setAllSubjects] = useState<string[]>([]);
  const [allQuizzes, setAllQuizzes] = useState<
    Array<{ id: string; title: string; subject: string; description?: string; items?: unknown[] }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [changeCode, setChangeCode] = useState("");
  const [githubToken, setGithubToken] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(!collapsedByDefault);

  const scopedSpace = normalizeSpace(spaceKey);
  const subjectForForms =
    defaultSubject ||
    (scopedSpace !== ROOT_SPACE && !scopedSpace.startsWith("folder:")
      ? scopedSpace
      : "AP Physics 1");

  const applyContent = useCallback(
    (data: Partial<ManagedContent> | null) => {
      if (!data) return;
      setAllFiles(Array.isArray(data.files) ? data.files : []);
      setAllDocuments(Array.isArray(data.documents) ? data.documents : []);
      setAllFolders(Array.isArray(data.folders) ? data.folders : []);
      setAllConcepts(Array.isArray(data.concepts) ? data.concepts : []);
      setAllFormulas(Array.isArray(data.formulas) ? data.formulas : []);
      const subjects = managedSubjectNames(data.subjects);
      setAllSubjects(subjects);
      onSubjectsChange?.(subjects);
      const quizzes = Array.isArray(data.questionnaires) ? data.questionnaires : [];
      setAllQuizzes(quizzes as typeof allQuizzes);
      onQuestionnairesChange?.(quizzes);
    },
    [onQuestionnairesChange, onSubjectsChange]
  );

  const refresh = useCallback(async () => {
    setError("");
    try {
      const params = new URLSearchParams({
        area: folderArea,
        space: scopedSpace,
      });
      const res = await fetch(`/api/edit?${params}`, { cache: "no-store" });
      const parsed = await readResponseJson<ManagedContent & { error?: string }>(res);
      if (!parsed.ok) throw new Error(parsed.error);
      if (!res.ok) throw new Error(parsed.data.error || "Failed to load files");
      applyContent(parsed.data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load files");
    } finally {
      setLoading(false);
    }
  }, [applyContent, folderArea, scopedSpace]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const canAdd = editMode || unlocked || allowPublicContributions;

  useEffect(() => {
    if (editMode || unlocked) setExpanded(true);
  }, [editMode, unlocked]);

  const onSaved = (content?: unknown) => {
    // Prefer the slim POST payload when present, then re-load metadata-only list.
    if (content && typeof content === "object") {
      applyContent(content as Partial<ManagedContent>);
    }
    void refresh();
  };

  async function downloadManagedFile(file: ManagedFile) {
    try {
      if (file.dataUrl) {
        const link = document.createElement("a");
        link.href = file.dataUrl;
        link.download = file.name;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.click();
        return;
      }
      const res = await fetch(`/api/edit?fileId=${encodeURIComponent(file.id)}`, {
        cache: "no-store",
      });
      const parsed = await readResponseJson<{ file?: ManagedFile; error?: string }>(res);
      if (!parsed.ok) throw new Error(parsed.error);
      const dataUrl = parsed.data.file?.dataUrl;
      if (!res.ok || !dataUrl) throw new Error(parsed.data.error || "Download unavailable");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = file.name;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.click();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Download failed");
    }
  }

  function downloadDocument(doc: ManagedDocument) {
    const safeName = `${doc.title.replace(/[^\w\s.-]+/g, "_").trim() || "document"}.md`;
    const blob = new Blob([doc.content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = safeName;
    link.click();
    URL.revokeObjectURL(url);
  }

  async function downloadMediaRow(row: MediaRow) {
    if (row.kind === "file") {
      await downloadManagedFile(row.item);
      return;
    }
    downloadDocument(row.item);
  }

  async function handleDelete(
    target:
      | "file"
      | "document"
      | "folder"
      | "concept"
      | "topic"
      | "formula"
      | "subject"
      | "questionnaire",
    id: string
  ) {
    if (!unlocked && !changeCode.trim()) {
      setError("Unlock at /login with the content code, or enter it below, then press − to delete.");
      return;
    }
    if (!confirm("Delete this item from this folder’s storage?")) return;
    setDeletingId(id);
    setError("");
    try {
      const res = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "delete",
          target,
          id,
          changeCode: changeCode.trim() || undefined,
          githubToken: githubToken.trim() || undefined,
        }),
      });
      const parsed = await readResponseJson<{ error?: string; content?: ManagedContent }>(res);
      if (!parsed.ok) throw new Error(parsed.error);
      if (!res.ok) throw new Error(parsed.data.error || "Delete failed");
      if (parsed.data.content) applyContent(parsed.data.content);
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Delete failed");
    } finally {
      setDeletingId(null);
    }
  }

  const folders = useMemo(
    () =>
      allFolders
        .filter((f) => f.area === folderArea && normalizeSpace(f.space) === scopedSpace)
        .slice()
        .sort((a, b) =>
          a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" })
        ),
    [allFolders, folderArea, scopedSpace]
  );

  const files = useMemo(
    () =>
      allFiles
        .filter((f) => matchesSpace(f, folderArea, scopedSpace))
        .slice()
        .sort((a, b) => {
          const byName = a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: "base",
          });
          if (byName !== 0) return byName;
          return (a.uploadedAt || 0) - (b.uploadedAt || 0);
        }),
    [allFiles, folderArea, scopedSpace]
  );

  const images = useMemo(() => files.filter((f) => isImageFile(f)), [files]);
  const otherFiles = useMemo(() => files.filter((f) => !isImageFile(f)), [files]);

  const documents = useMemo(
    () => allDocuments.filter((d) => matchesSpace(d, folderArea, scopedSpace)),
    [allDocuments, folderArea, scopedSpace]
  );

  const imageRows = useMemo<MediaRow[]>(
    () =>
      images.map((file) => ({
        kind: "file" as const,
        item: file,
        timestamp: file.uploadedAt || 0,
        title: file.name,
        subtitle: file.note || "Picture",
        searchFields: [file.name, file.note, file.mime].filter(Boolean) as string[],
      })),
    [images]
  );

  const fileRows = useMemo<MediaRow[]>(
    () =>
      otherFiles.map((file) => ({
        kind: "file" as const,
        item: file,
        timestamp: file.uploadedAt || 0,
        title: file.name,
        subtitle: file.mime || "file",
        searchFields: [file.name, file.note, file.mime].filter(Boolean) as string[],
      })),
    [otherFiles]
  );

  const documentRows = useMemo<MediaRow[]>(
    () =>
      documents.map((doc) => ({
        kind: "document" as const,
        item: doc,
        timestamp: doc.updatedAt || 0,
        title: doc.title,
        subtitle: doc.category || "Document",
        searchFields: [doc.title, doc.category, doc.content],
      })),
    [documents]
  );

  const conceptsHere = useMemo(() => {
    if (!alsoShow.includes("concept") && !alsoShow.includes("topic")) return [];
    if (scopedSpace.startsWith("folder:")) {
      return allConcepts.filter(
        (c) => c.subject === subjectForForms || c.subject === scopedSpace
      );
    }
    if (scopedSpace === ROOT_SPACE) {
      return allConcepts.filter((c) => !c.subject || c.subject === ROOT_SPACE);
    }
    return allConcepts.filter((c) => c.subject === scopedSpace);
  }, [allConcepts, alsoShow, scopedSpace, subjectForForms]);

  const formulasHere = useMemo(() => {
    if (!alsoShow.includes("formula")) return [];
    if (scopedSpace.startsWith("folder:")) {
      return allFormulas.filter(
        (f) => f.subject === subjectForForms || f.subject === scopedSpace
      );
    }
    if (scopedSpace === ROOT_SPACE) return [];
    return allFormulas.filter((f) => f.subject === scopedSpace);
  }, [allFormulas, alsoShow, scopedSpace, subjectForForms]);

  const quizzesHere = useMemo(() => {
    if (!alsoShow.includes("questionnaire")) return [];
    if (scopedSpace === ROOT_SPACE) return allQuizzes;
    return allQuizzes.filter((q) => q.subject === scopedSpace || q.subject === subjectForForms);
  }, [allQuizzes, alsoShow, scopedSpace, subjectForForms]);

  const panelTitle = `${title} · ${spaceLabel(
    scopedSpace,
    folders.find((f) => folderSpaceId(f.id) === scopedSpace)?.title
  )}`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{panelTitle}</p>
          <p className="text-xs text-slate-500">
            {images.length} image{images.length === 1 ? "" : "s"}
            {otherFiles.length
              ? ` · ${otherFiles.length} file${otherFiles.length === 1 ? "" : "s"}`
              : ""}
            {folders.length ? ` · ${folders.length} folder${folders.length === 1 ? "" : "s"}` : ""}
            {documents.length ? ` · ${documents.length} doc${documents.length === 1 ? "" : "s"}` : ""}
            {" · "}month folders · search · download
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={refresh} className="text-xs text-brand-700 hover:underline">
            Refresh
          </button>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="btn-secondary text-xs"
            aria-expanded={expanded}
          >
            {expanded ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {expanded && (
        <>
      {error ? <p className="mb-2 whitespace-pre-wrap text-sm text-red-600">{error}</p> : null}

      <div className={canAdd ? "grid gap-5 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]" : "grid gap-4"}>
        {canAdd && <div className="space-y-2">
          <h2 className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Upload
          </h2>
          <div className="flex flex-col gap-3">
            {alsoShow.includes("subject") && (
              <ChangePanel
                mode="subject"
                label="+ Add subject folder"
                folderArea={folderArea}
                spaceKey={scopedSpace}
                onSaved={onSaved}
              />
            )}
            <ChangePanel
              mode="file"
              label="+ Upload files"
              folderArea={folderArea}
              spaceKey={scopedSpace}
              onSaved={onSaved}
              allowPublicContribution={allowPublicContributions}
            />
            <ChangePanel
              mode="file"
              label="+ Upload images"
              fileAccept="image/*"
              folderArea={folderArea}
              spaceKey={scopedSpace}
              onSaved={onSaved}
              allowPublicContribution={allowPublicContributions}
            />
            {alsoShow.includes("document") && (
              <ChangePanel
                mode="document"
                label="+ Add documents"
                folderArea={folderArea}
                spaceKey={scopedSpace}
                onSaved={onSaved}
                allowPublicContribution={allowPublicContributions}
              />
            )}
            {alsoShow.includes("topic") && (
              <ChangePanel
                mode="topic"
                label="+ Add topics"
                defaultSubject={subjectForForms}
                folderArea={folderArea}
                spaceKey={scopedSpace}
                onSaved={onSaved}
              />
            )}
            {alsoShow.includes("concept") && (
              <ChangePanel
                mode="concept"
                label="+ Add concepts"
                defaultSubject={subjectForForms}
                folderArea={folderArea}
                spaceKey={scopedSpace}
                onSaved={onSaved}
              />
            )}
            {alsoShow.includes("formula") && (
              <ChangePanel
                mode="formula"
                label="+ Add formulas"
                defaultSubject={subjectForForms}
                folderArea={folderArea}
                spaceKey={scopedSpace}
                onSaved={onSaved}
              />
            )}
            {alsoShow.includes("questionnaire") && (
              <ChangePanel
                mode="questionnaire"
                label="+ Add generated practice set"
                defaultSubject={subjectForForms}
                folderArea={folderArea}
                spaceKey={scopedSpace}
                onSaved={onSaved}
              />
            )}
            {alsoShow.includes("member") && (
              <ChangePanel mode="member" label="+ Add member" onSaved={onSaved} />
            )}
            <ChangePanel
              mode="folder"
              label="+ Add file folders"
              folderArea={folderArea}
              spaceKey={scopedSpace}
              onSaved={onSaved}
              allowPublicContribution={allowPublicContributions}
            />
          </div>
          {(editMode || unlocked) && <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
            {unlocked ? (
              <p className="text-xs text-emerald-800">
                Editor unlocked — delete uses your session. Optional code override below.
              </p>
            ) : (
              <label className="block text-xs font-medium text-slate-600">
                Change code (needed to delete with −)
              </label>
            )}
            {!unlocked && <input
              type="password"
              className="input"
              placeholder="Content or master change code"
              value={changeCode}
              onChange={(e) => setChangeCode(e.target.value)}
            />}
            <details className="text-xs text-slate-500">
              <summary className="cursor-pointer">GitHub token (optional)</summary>
              <input
                type="password"
                className="input mt-2"
                placeholder="ghp_... if not set on Vercel"
                value={githubToken}
                onChange={(e) => setGithubToken(e.target.value)}
              />
            </details>
          </div>}
          {allSubjects.length > 0 && alsoShow.includes("subject") && (
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-3 text-xs text-emerald-900">
              Custom subjects saved: {allSubjects.join(" · ")}
            </div>
          )}
        </div>}

        <div className="space-y-4">
          {loading ? (
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-500">
              Loading files…
            </div>
          ) : (
            <div className="space-y-4">
              {folders.length > 0 && (
                <section className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Folders
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {folders.map((f) => (
                      <li key={f.id}>
                        <div className="flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50/70 px-3 py-2.5 transition hover:bg-amber-50">
                          <span
                            className="relative flex h-10 w-10 shrink-0 items-end justify-center pb-1"
                            aria-hidden
                          >
                            <span className="absolute left-1.5 top-1.5 h-2 w-4 rounded-t-sm bg-amber-300" />
                            <span className="h-6 w-8 rounded-md bg-gradient-to-b from-amber-300 to-amber-500 shadow-sm" />
                          </span>
                          <div className="min-w-0 flex-1">
                            {spaceBasePath ? (
                              <Link
                                href={spaceHref(spaceBasePath, folderSpaceId(f.id))}
                                className="block truncate text-sm font-semibold text-slate-900 hover:text-brand-700"
                              >
                                {f.title}
                              </Link>
                            ) : (
                              <p className="truncate text-sm font-semibold text-slate-900">{f.title}</p>
                            )}
                            {f.note ? (
                              <p className="truncate text-[11px] text-slate-500">{f.note}</p>
                            ) : (
                              <p className="text-[11px] text-slate-400">Open folder</p>
                            )}
                          </div>
                          {editMode && (
                            <div className="flex shrink-0 items-center gap-1">
                              <ResourceEditor
                                target="folder"
                                item={f}
                                onSaved={(content) => applyContent(content as ManagedContent)}
                              />
                              <button
                                type="button"
                                title="Delete folder"
                                disabled={deletingId === f.id}
                                onClick={() => handleDelete("folder", f.id)}
                                className="flex h-7 w-7 items-center justify-center rounded-full text-base font-bold text-red-600 hover:bg-red-50"
                              >
                                −
                              </button>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {conceptsHere.length > 0 && (
                <section className="space-y-2">
                  <h3 className="text-sm font-semibold">
                    Topics / concepts in this folder ({conceptsHere.length})
                  </h3>
                  <ul className="space-y-2">
                    {conceptsHere.map((c) => (
                      <li
                        key={c.id}
                        className="flex items-start justify-between gap-2 rounded-xl border border-brand-100 bg-brand-50/40 p-3"
                      >
                        <div className="min-w-0">
                          <Link
                            href={`/concepts/${c.id}`}
                            className="text-sm font-medium text-brand-800 hover:underline"
                          >
                            {c.title}
                          </Link>
                          <RichContent clampLines={2} className="mt-1 text-xs text-slate-600">{c.summary}</RichContent>
                        </div>
                        {editMode && <div className="flex shrink-0 items-center gap-1">
                          <ResourceEditor target={c.id.startsWith("m-topic") ? "topic" : "concept"} item={c} onSaved={(content) => applyContent(content as ManagedContent)} />
                          <button type="button" title="Delete topic/concept" disabled={deletingId === c.id} onClick={() => handleDelete(c.id.startsWith("m-topic") ? "topic" : "concept", c.id)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-red-600 shadow-sm hover:bg-red-50">−</button>
                        </div>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {formulasHere.length > 0 && (
                <section className="space-y-2">
                  <h3 className="text-sm font-semibold">
                    Formulas in this folder ({formulasHere.length})
                  </h3>
                  <ul className="space-y-2">
                    {formulasHere.map((f) => (
                      <li
                        key={f.id}
                        className="flex items-start justify-between gap-2 rounded-xl border border-slate-100 bg-white p-3"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium">{f.name}</p>
                          {f.content ? (
                            <RichContent clampLines={3} className="mt-1 text-xs text-slate-600">{f.content}</RichContent>
                          ) : (
                            <p className="overflow-x-auto font-mono text-xs text-slate-600">{f.expression}</p>
                          )}
                        </div>
                        {editMode && <div className="flex shrink-0 items-center gap-1">
                          <ResourceEditor target="formula" item={f} onSaved={(content) => applyContent(content as ManagedContent)} />
                          <button type="button" title="Delete formula" disabled={deletingId === f.id} onClick={() => handleDelete("formula", f.id)} className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-lg font-bold text-red-600 hover:bg-red-50">−</button>
                        </div>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {quizzesHere.length > 0 && (
                <section className="space-y-2">
                  <h3 className="text-sm font-semibold">
                    Generated sets ({quizzesHere.length})
                  </h3>
                  <ul className="space-y-2">
                    {quizzesHere.map((q) => (
                      <li
                        key={q.id}
                        className="flex items-start justify-between gap-2 rounded-xl border border-violet-100 bg-violet-50/50 p-3"
                      >
                        <div className="min-w-0">
                          <Link
                            href={`/questionnaires/${q.id}`}
                            className="text-sm font-medium text-brand-800 hover:underline"
                          >
                            {q.title}
                          </Link>
                          <RichContent clampLines={2} className="mt-1 text-xs text-slate-600">
                            {q.description || q.subject}
                          </RichContent>
                        </div>
                        {editMode && <div className="flex shrink-0 items-center gap-1">
                          <ResourceEditor target="questionnaire" item={q} onSaved={(content) => applyContent(content as ManagedContent)} />
                          <button type="button" title="Delete set" disabled={deletingId === q.id} onClick={() => handleDelete("questionnaire", q.id)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-red-600 shadow-sm hover:bg-red-50">−</button>
                        </div>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <MediaFinderBrowser
                sectionTitle="Image browser · 图片浏览"
                sectionHint="Month folders · compact grid · download only"
                emptyMessage='No images here yet. Use "Upload images" on the left.'
                rows={imageRows}
                variant="image"
                onDownload={downloadMediaRow}
                editMode={editMode}
                deletingId={deletingId}
                onDelete={(row) => {
                  if (row.kind === "file") void handleDelete("file", row.item.id);
                }}
                onContentSaved={(content) => {
                  applyContent(content);
                  void refresh();
                }}
              />

              <MediaFinderBrowser
                sectionTitle="File browser"
                sectionHint="Non-image files · month folders · download only"
                emptyMessage="No non-image files here yet. Pictures appear in Image browser above."
                rows={fileRows}
                variant="file"
                onDownload={downloadMediaRow}
                editMode={editMode}
                deletingId={deletingId}
                onDelete={(row) => {
                  if (row.kind === "file") void handleDelete("file", row.item.id);
                }}
                onContentSaved={(content) => {
                  applyContent(content);
                  void refresh();
                }}
              />

              <MediaFinderBrowser
                sectionTitle="Document browser"
                sectionHint="Text documents · month folders · download as .md"
                emptyMessage="No documents in this folder yet."
                rows={documentRows}
                variant="document"
                onDownload={downloadMediaRow}
                editMode={editMode}
                deletingId={deletingId}
                onDelete={(row) => {
                  if (row.kind === "document") void handleDelete("document", row.item.id);
                }}
                onContentSaved={(content) => applyContent(content)}
              />
            </div>
          )}
        </div>
      </div>
        </>
      )}
    </div>
  );
}
