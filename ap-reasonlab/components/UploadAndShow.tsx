"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ChangePanel from "@/components/ChangePanel";
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
  return Boolean(file.mime?.startsWith("image/") || file.dataUrl?.startsWith("data:image"));
}

function isPdfFile(file: ManagedFile) {
  return Boolean(
    file.mime === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf") ||
      file.dataUrl?.startsWith("data:application/pdf")
  );
}

function isTextLikeFile(file: ManagedFile) {
  const mime = file.mime || "";
  const name = file.name.toLowerCase();
  return (
    mime.startsWith("text/") ||
    mime.includes("json") ||
    name.endsWith(".md") ||
    name.endsWith(".txt") ||
    name.endsWith(".csv") ||
    name.endsWith(".json")
  );
}

async function decodeDataUrlText(dataUrl: string): Promise<string> {
  const comma = dataUrl.indexOf(",");
  if (comma < 0) return "";
  const meta = dataUrl.slice(0, comma);
  const payload = dataUrl.slice(comma + 1);
  try {
    if (meta.includes(";base64")) {
      const binary = atob(payload);
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
      return new TextDecoder().decode(bytes);
    }
    return decodeURIComponent(payload);
  } catch {
    return "";
  }
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
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [displayFile, setDisplayFile] = useState<ManagedFile | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [displayLoading, setDisplayLoading] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

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

  async function openFileInDisplay(file: ManagedFile) {
    setSelectedFileId(file.id);
    setDisplayLoading(true);
    setDisplayText("");
    setError("");
    try {
      let full = file;
      if (!full.dataUrl) {
        const res = await fetch(`/api/edit?fileId=${encodeURIComponent(file.id)}`, {
          cache: "no-store",
        });
        const parsed = await readResponseJson<{ file?: ManagedFile; error?: string }>(res);
        if (!parsed.ok) throw new Error(parsed.error);
        if (!res.ok || !parsed.data.file) {
          throw new Error(parsed.data.error || "Could not open file");
        }
        full = parsed.data.file;
      }
      setDisplayFile(full);
      if (full.dataUrl && isTextLikeFile(full) && !isImageFile(full)) {
        setDisplayText(await decodeDataUrlText(full.dataUrl));
      }
    } catch (e) {
      setDisplayFile(file);
      setError(e instanceof Error ? e.message : "Could not open file");
    } finally {
      setDisplayLoading(false);
    }
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

  const documents = useMemo(
    () => allDocuments.filter((d) => matchesSpace(d, folderArea, scopedSpace)),
    [allDocuments, folderArea, scopedSpace]
  );

  const selectedDocument = useMemo(
    () => documents.find((d) => d.id === selectedDocId) || null,
    [documents, selectedDocId]
  );

  useEffect(() => {
    if (selectedFileId && !files.some((f) => f.id === selectedFileId)) {
      setSelectedFileId(null);
      setDisplayFile(null);
      setDisplayText("");
    }
  }, [files, selectedFileId]);

  useEffect(() => {
    if (selectedDocId && !documents.some((d) => d.id === selectedDocId)) {
      setSelectedDocId(null);
    }
  }, [documents, selectedDocId]);

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
            {files.length} file{files.length === 1 ? "" : "s"}
            {folders.length ? ` · ${folders.length} folder${folders.length === 1 ? "" : "s"}` : ""}
            {documents.length ? ` · ${documents.length} doc${documents.length === 1 ? "" : "s"}` : ""}
            {" · "}file browser + display browser
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
              label="+ Upload file"
              folderArea={folderArea}
              spaceKey={scopedSpace}
              onSaved={onSaved}
              allowPublicContribution={allowPublicContributions}
            />
            <ChangePanel
              mode="file"
              label="+ Upload image"
              fileAccept="image/*"
              folderArea={folderArea}
              spaceKey={scopedSpace}
              onSaved={onSaved}
              allowPublicContribution={allowPublicContributions}
            />
            {alsoShow.includes("document") && (
              <ChangePanel
                mode="document"
                label="+ Add document"
                folderArea={folderArea}
                spaceKey={scopedSpace}
                onSaved={onSaved}
                allowPublicContribution={allowPublicContributions}
              />
            )}
            {alsoShow.includes("topic") && (
              <ChangePanel
                mode="topic"
                label="+ Add topic"
                defaultSubject={subjectForForms}
                folderArea={folderArea}
                spaceKey={scopedSpace}
                onSaved={onSaved}
              />
            )}
            {alsoShow.includes("concept") && (
              <ChangePanel
                mode="concept"
                label="+ Add concept"
                defaultSubject={subjectForForms}
                folderArea={folderArea}
                spaceKey={scopedSpace}
                onSaved={onSaved}
              />
            )}
            {alsoShow.includes("formula") && (
              <ChangePanel
                mode="formula"
                label="+ Add formula"
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
              label="+ Add file folder"
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

              <section className="space-y-2">
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    File browser
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Click a file to open the display browser · Download stays on the right
                  </p>
                </div>
                {files.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
                    No files here yet.
                  </div>
                ) : (
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="flex h-[16rem] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white md:h-[18rem]">
                      <div className="shrink-0 border-b border-slate-100 bg-slate-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        Files · File 1, 2, 3… · scroll
                      </div>
                      <ul className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                        {files.map((f, index) => {
                          const n = index + 1;
                          const active = selectedFileId === f.id;
                          const isPic = isImageFile(f);
                          return (
                            <li
                              key={f.id}
                              className={`flex items-center gap-2 border-b border-slate-100 px-2 py-2 last:border-b-0 ${
                                active ? "bg-sky-50" : "hover:bg-slate-50"
                              }`}
                            >
                              <button
                                type="button"
                                onClick={() => void openFileInDisplay(f)}
                                className="flex min-w-0 flex-1 items-center gap-2 text-left"
                              >
                                <span
                                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                                    active
                                      ? "bg-sky-600 text-white"
                                      : "bg-slate-100 text-slate-500"
                                  }`}
                                >
                                  {n}
                                </span>
                                <span className="min-w-0">
                                  <span className="block truncate text-sm font-medium text-slate-900">
                                    File {n} · {f.name}
                                  </span>
                                  <span className="block truncate text-[11px] text-slate-500">
                                    {isPic ? "Picture" : f.mime || "file"}
                                    {f.note ? ` · ${f.note}` : ""}
                                  </span>
                                </span>
                              </button>
                              <button
                                type="button"
                                onClick={() => void downloadManagedFile(f)}
                                className="shrink-0 rounded-md bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white hover:bg-slate-800"
                              >
                                Download
                              </button>
                              {editMode && (
                                <div className="flex shrink-0 items-center gap-0.5">
                                  <ResourceEditor
                                    target="file"
                                    item={f}
                                    label="Edit"
                                    onSaved={(content) => {
                                      if (content) applyContent(content as ManagedContent);
                                      void refresh();
                                    }}
                                  />
                                  <button
                                    type="button"
                                    title="Delete file"
                                    disabled={deletingId === f.id}
                                    onClick={() => handleDelete("file", f.id)}
                                    className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-red-600 hover:bg-red-50"
                                  >
                                    −
                                  </button>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="flex h-[16rem] flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 md:h-[18rem]">
                      <div className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2">
                        <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                          Display browser
                        </p>
                        {displayFile ? (
                          <p className="truncate text-[11px] font-medium text-slate-700">
                            {displayFile.name}
                          </p>
                        ) : null}
                      </div>
                      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3">
                        {displayLoading ? (
                          <p className="text-sm text-slate-500">Opening file…</p>
                        ) : !displayFile ? (
                          <p className="text-sm text-slate-500">
                            Click a file on the left to preview it here. Scroll this pane to read.
                          </p>
                        ) : isImageFile(displayFile) && displayFile.dataUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={displayFile.dataUrl}
                            alt={displayFile.name}
                            className="mx-auto max-w-full rounded-lg object-contain"
                          />
                        ) : isPdfFile(displayFile) && displayFile.dataUrl ? (
                          <iframe
                            title={displayFile.name}
                            src={displayFile.dataUrl}
                            className="h-full min-h-[14rem] w-full rounded-lg border border-slate-200 bg-white"
                          />
                        ) : displayText ? (
                          <pre className="whitespace-pre-wrap break-words rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-800">
                            {displayText}
                          </pre>
                        ) : (
                          <div className="space-y-3 text-sm text-slate-600">
                            <p>Preview not available for this type. Download to open locally.</p>
                            <button
                              type="button"
                              onClick={() => void downloadManagedFile(displayFile)}
                              className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                            >
                              Download {displayFile.name}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </section>

              <section className="space-y-2 border-t border-slate-100 pt-4">
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Document browser
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Separate from files · click a document to read in the display pane
                  </p>
                </div>
                {documents.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
                    No documents in this folder yet.
                  </div>
                ) : (
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="flex h-[14rem] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white md:h-[16rem]">
                      <div className="shrink-0 border-b border-slate-100 bg-slate-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        Documents · scroll
                      </div>
                      <ul className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                        {documents.map((d, index) => {
                          const active = selectedDocId === d.id;
                          return (
                            <li
                              key={d.id}
                              className={`flex items-center gap-2 border-b border-slate-100 px-2 py-2 last:border-b-0 ${
                                active ? "bg-emerald-50" : "hover:bg-slate-50"
                              }`}
                            >
                              <button
                                type="button"
                                onClick={() => setSelectedDocId(d.id)}
                                className="flex min-w-0 flex-1 items-center gap-2 text-left"
                              >
                                <span
                                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                                    active
                                      ? "bg-emerald-700 text-white"
                                      : "bg-slate-100 text-slate-500"
                                  }`}
                                >
                                  {index + 1}
                                </span>
                                <span className="min-w-0">
                                  <span className="block truncate text-sm font-medium text-slate-900">
                                    {d.title}
                                  </span>
                                  <span className="block truncate text-[11px] text-slate-500">
                                    {d.category || "Document"}
                                  </span>
                                </span>
                              </button>
                              {editMode && (
                                <div className="flex shrink-0 items-center gap-0.5">
                                  <ResourceEditor
                                    target="document"
                                    item={d}
                                    onSaved={(content) =>
                                      applyContent(content as ManagedContent)
                                    }
                                  />
                                  <button
                                    type="button"
                                    title="Delete document"
                                    disabled={deletingId === d.id}
                                    onClick={() => handleDelete("document", d.id)}
                                    className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-red-600 hover:bg-red-50"
                                  >
                                    −
                                  </button>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="flex h-[14rem] flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 md:h-[20rem]">
                      <div className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                          Document display
                        </p>
                        {selectedDocument ? (
                          <p className="truncate text-[11px] font-medium text-slate-700">
                            {selectedDocument.title}
                          </p>
                        ) : null}
                      </div>
                      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3">
                        {!selectedDocument ? (
                          <p className="text-sm text-slate-500">
                            Click a document on the left to read it here. Scroll this pane.
                          </p>
                        ) : (
                          <div className="rounded-lg border border-slate-200 bg-white p-4">
                            <h4 className="text-base font-semibold text-slate-900">
                              {selectedDocument.title}
                            </h4>
                            {selectedDocument.category ? (
                              <p className="mt-0.5 text-xs text-slate-500">
                                {selectedDocument.category}
                              </p>
                            ) : null}
                            <div className="mt-3 border-t border-slate-100 pt-3">
                              <RichContent className="text-sm text-slate-700">
                                {selectedDocument.content}
                              </RichContent>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
      </div>
        </>
      )}
    </div>
  );
}
