"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import RichContent from "@/components/RichContent";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import { useEditorMode } from "@/components/EditorModeProvider";
import type { ManagedDocument, ManagedFile, ManagedFolder } from "@/lib/managed-types";
import {
  ROOT_SPACE,
  folderSpaceId,
  matchesSpace,
  normalizeSpace,
} from "@/lib/storage-space";
import { readResponseJson } from "@/lib/safe-json";

type Tab = "all" | "folders" | "pics" | "docs" | "files";

type Props = {
  folderArea: string;
  spaceKey?: string;
  title?: string;
  alsoShow?: Array<
    "concept" | "topic" | "formula" | "document" | "member" | "folder" | "subject" | "questionnaire"
  >;
  defaultSubject?: string;
  spaceBasePath?: string;
};

type Preview =
  | { kind: "file"; item: ManagedFile }
  | { kind: "document"; item: ManagedDocument };

type FolderTrail = { id: string; title: string };

function isImage(file: ManagedFile): boolean {
  return Boolean(file.mime?.startsWith("image/") || file.dataUrl?.startsWith("data:image"));
}

function compareName(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

/**
 * Built-in per-page file manager (every webpage, top-right).
 * Folder-first browse + File 1 / File 2 / File 3… ordered list — Apple-like.
 */
export function FloatingMediaWindow({
  folderArea,
  spaceKey = ROOT_SPACE,
  title = "This page",
}: Props) {
  const pageRootSpace = normalizeSpace(spaceKey);
  const { unlocked, editor } = useEditorMode();
  const [minimized, setMinimized] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("all");
  const [folderTrail, setFolderTrail] = useState<FolderTrail[]>([]);
  const [folders, setFolders] = useState<ManagedFolder[]>([]);
  const [files, setFiles] = useState<ManagedFile[]>([]);
  const [documents, setDocuments] = useState<ManagedDocument[]>([]);
  const [preview, setPreview] = useState<Preview | null>(null);
  const [changeCode, setChangeCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [docTitle, setDocTitle] = useState("");
  const [docBody, setDocBody] = useState("");
  const [showDocForm, setShowDocForm] = useState(false);
  const [showFolderForm, setShowFolderForm] = useState(false);
  const [folderTitle, setFolderTitle] = useState("");
  const uploadId = useId();
  const uploadRef = useRef<HTMLInputElement>(null);

  const activeSpace =
    folderTrail.length > 0
      ? folderSpaceId(folderTrail[folderTrail.length - 1]!.id)
      : pageRootSpace;

  const refresh = useCallback(async () => {
    try {
      const params = new URLSearchParams({ area: folderArea, space: activeSpace });
      const res = await fetch(`/api/edit?${params}`, { cache: "no-store" });
      const parsed = await readResponseJson<{
        files?: ManagedFile[];
        documents?: ManagedDocument[];
        folders?: ManagedFolder[];
        error?: string;
      }>(res);
      if (!parsed.ok || !res.ok) return;
      const data = parsed.data;
      const allFiles: ManagedFile[] = Array.isArray(data.files) ? data.files : [];
      const allDocs: ManagedDocument[] = Array.isArray(data.documents) ? data.documents : [];
      const allFolders: ManagedFolder[] = Array.isArray(data.folders) ? data.folders : [];

      setFolders(
        allFolders
          .filter((f) => f.area === folderArea && normalizeSpace(f.space) === activeSpace)
          .sort((a, b) => compareName(a.title, b.title))
      );
      setFiles(
        allFiles
          .filter((f) => matchesSpace(f, folderArea, activeSpace))
          .sort((a, b) => {
            const byName = compareName(a.name, b.name);
            if (byName !== 0) return byName;
            return (a.uploadedAt || 0) - (b.uploadedAt || 0);
          })
      );
      setDocuments(
        allDocs
          .filter((d) => matchesSpace(d, folderArea, activeSpace))
          .sort((a, b) => compareName(a.title, b.title))
      );
    } catch {
      /* keep last good list */
    }
  }, [activeSpace, folderArea]);

  useEffect(() => {
    void refresh();
    const onFocus = () => void refresh();
    window.addEventListener("focus", onFocus);
    const id = window.setInterval(() => void refresh(), 8_000);
    return () => {
      window.removeEventListener("focus", onFocus);
      window.clearInterval(id);
    };
  }, [refresh]);

  // Reset when switching pages
  useEffect(() => {
    setTab("all");
    setFolderTrail([]);
    setPreview(null);
    setNote("");
    setError("");
    setMinimized(false);
  }, [folderArea, pageRootSpace]);

  const orderedFiles = useMemo(
    () =>
      files.map((item, index) => ({
        item,
        seriesIndex: index + 1,
      })),
    [files]
  );
  const pics = useMemo(
    () => orderedFiles.filter((row) => isImage(row.item)),
    [orderedFiles]
  );
  const otherFiles = useMemo(
    () => orderedFiles.filter((row) => !isImage(row.item)),
    [orderedFiles]
  );

  const counts = {
    all: folders.length + files.length + documents.length,
    folders: folders.length,
    pics: pics.length,
    docs: documents.length,
    files: otherFiles.length,
  };

  const canPublish = unlocked || Boolean(changeCode.trim());

  async function openFilePreview(item: ManagedFile) {
    if (item.dataUrl) {
      setPreview({ kind: "file", item });
      return;
    }
    try {
      const res = await fetch(`/api/edit?fileId=${encodeURIComponent(item.id)}`, {
        cache: "no-store",
      });
      const parsed = await readResponseJson<{ file?: ManagedFile; error?: string }>(res);
      if (!parsed.ok) throw new Error(parsed.error);
      if (!res.ok || !parsed.data.file) throw new Error(parsed.data.error || "File unavailable");
      setPreview({ kind: "file", item: parsed.data.file });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not open file");
    }
  }

  async function publishFiles(fileList: FileList | File[]) {
    const chosen = Array.from(fileList).slice(0, 10);
    if (!chosen.length) return;
    if (!canPublish) {
      setError("Unlock edit mode or paste the content code below to publish to this page.");
      return;
    }
    setBusy(true);
    setError("");
    setNote("");
    try {
      const items = [];
      for (const file of chosen) {
        if (file.size > 1_000_000) {
          throw new Error(`${file.name} is too large (keep under ~1MB each).`);
        }
        const dataUrl = await readAsDataUrl(file);
        items.push({
          name: file.name,
          mime: file.type || "application/octet-stream",
          dataUrl,
          area: folderArea,
          space: activeSpace,
        });
      }
      const res = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add_files",
          items,
          changeCode: changeCode.trim() || undefined,
        }),
      });
      const parsed = await readResponseJson<{ error?: string }>(res);
      if (!parsed.ok) throw new Error(parsed.error);
      if (!res.ok) throw new Error(parsed.data.error || "Upload failed");
      setNote(`Added ${items.length} file(s) — File 1, File 2… updated.`);
      if (uploadRef.current) uploadRef.current.value = "";
      setTab("files");
      await refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Upload failed");
    } finally {
      setBusy(false);
      setDragOver(false);
    }
  }

  async function publishDocument(event: React.FormEvent) {
    event.preventDefault();
    if (!docTitle.trim() || !docBody.trim()) return;
    if (!canPublish) {
      setError("Unlock edit mode or paste the content code to add a document.");
      return;
    }
    setBusy(true);
    setError("");
    setNote("");
    try {
      const res = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add_document",
          item: {
            title: docTitle.trim(),
            content: docBody.trim(),
            category: "Uploaded",
            area: folderArea,
            space: activeSpace,
          },
          changeCode: changeCode.trim() || undefined,
        }),
      });
      const parsed = await readResponseJson<{ error?: string }>(res);
      if (!parsed.ok) throw new Error(parsed.error);
      if (!res.ok) throw new Error(parsed.data.error || "Save failed");
      setDocTitle("");
      setDocBody("");
      setShowDocForm(false);
      setNote("Document added to this folder.");
      setTab("docs");
      await refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Save failed");
    } finally {
      setBusy(false);
    }
  }

  async function publishFolder(event: React.FormEvent) {
    event.preventDefault();
    if (!folderTitle.trim()) return;
    if (!canPublish) {
      setError("Unlock edit mode or paste the content code to add a folder.");
      return;
    }
    setBusy(true);
    setError("");
    setNote("");
    try {
      const res = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add_folder",
          item: {
            title: folderTitle.trim(),
            area: folderArea,
            space: activeSpace,
          },
          changeCode: changeCode.trim() || undefined,
        }),
      });
      const parsed = await readResponseJson<{ error?: string }>(res);
      if (!parsed.ok) throw new Error(parsed.error);
      if (!res.ok) throw new Error(parsed.data.error || "Could not create folder");
      setFolderTitle("");
      setShowFolderForm(false);
      setNote(`Folder “${folderTitle.trim()}” ready — open it, then add File 1, File 2…`);
      setTab("folders");
      await refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not create folder");
    } finally {
      setBusy(false);
    }
  }

  function openFolder(folder: ManagedFolder) {
    setFolderTrail((prev) => [...prev, { id: folder.id, title: folder.title }]);
    setTab("all");
    setPreview(null);
    setNote(`Opened “${folder.title}”.`);
  }

  function goToTrailIndex(index: number) {
    // index -1 = page root
    if (index < 0) setFolderTrail([]);
    else setFolderTrail((prev) => prev.slice(0, index + 1));
    setTab("all");
    setPreview(null);
  }

  const locationLabel =
    folderTrail.length > 0
      ? folderTrail.map((f) => f.title).join(" › ")
      : title;

  const chrome = (
    <div
      className={`overflow-hidden rounded-xl border shadow-2xl shadow-black/30 ${
        dragOver ? "border-sky-400 ring-2 ring-sky-300/60" : "border-slate-300/90"
      } bg-white`}
    >
      <div className="flex items-center gap-2 border-b border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200/90 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Close mobile"
            onClick={() => setMobileOpen(false)}
            className="h-3 w-3 rounded-full bg-[#ff5f57] hover:brightness-110"
          />
          <button
            type="button"
            aria-label={minimized ? "Expand" : "Minimize"}
            onClick={() => setMinimized((v) => !v)}
            className="h-3 w-3 rounded-full bg-[#febc2e] hover:brightness-110"
          />
          <Link
            href="/manage?tab=files"
            aria-label="Open Manage Finder"
            className="h-3 w-3 rounded-full bg-[#28c840] hover:brightness-110"
            title="Whole-site Mac Finder in Manage"
          />
        </div>
        <div className="min-w-0 flex-1 text-center">
          <p className="truncate text-[11px] font-semibold text-slate-800">{title}</p>
          <p className="truncate text-[9px] text-slate-500">Page file manager · this webpage</p>
        </div>
        <button
          type="button"
          onClick={() => setMinimized((v) => !v)}
          className="rounded px-1.5 py-0.5 text-[10px] text-slate-500 hover:bg-white"
        >
          {minimized ? "▸" : "▾"}
        </button>
      </div>

      {!minimized ? (
        <>
          {/* Breadcrumb: page › folder › … */}
          <div className="flex flex-wrap items-center gap-1 border-b border-slate-100 bg-[#ececec] px-2 py-1.5 text-[10px]">
            <button
              type="button"
              onClick={() => goToTrailIndex(-1)}
              className="rounded px-1 font-medium text-sky-800 hover:bg-white"
            >
              {title}
            </button>
            {folderTrail.map((folder, index) => (
              <span key={folder.id} className="flex items-center gap-1">
                <span className="text-slate-400">›</span>
                <button
                  type="button"
                  onClick={() => goToTrailIndex(index)}
                  className="rounded px-1 font-medium text-sky-800 hover:bg-white"
                >
                  {folder.title}
                </button>
              </span>
            ))}
          </div>

          <div className="flex gap-1 border-b border-slate-100 bg-slate-50 px-2 py-1.5">
            {(
              [
                ["all", "All"],
                ["folders", "Folders"],
                ["files", "Files"],
                ["pics", "Pics"],
                ["docs", "Docs"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                  tab === id
                    ? "bg-slate-800 text-white"
                    : "text-slate-500 hover:bg-white hover:text-slate-800"
                }`}
              >
                {label}
                <span className="ml-1 opacity-70">{counts[id]}</span>
              </button>
            ))}
          </div>

          <div
            className="max-h-[280px] overflow-y-auto overscroll-contain px-2 py-2"
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              void publishFiles(e.dataTransfer.files);
            }}
          >
            <p className="mb-2 px-1 text-[9px] font-medium text-slate-500">
              {locationLabel} · folders first · files as File 1, File 2, File 3…
            </p>

            {counts.all === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-8 text-center">
                <p className="text-[11px] font-medium text-slate-600">This folder is empty</p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Add a file folder, then drop files — they show as File 1, File 2…
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {(tab === "all" || tab === "folders") && folders.length > 0 ? (
                  <ul className="grid grid-cols-3 gap-1.5">
                    {folders.map((folder) => (
                      <li key={folder.id}>
                        <button
                          type="button"
                          onClick={() => openFolder(folder)}
                          className="flex w-full flex-col items-center gap-1 rounded-lg border border-amber-100 bg-amber-50/80 px-1 py-2 text-center hover:bg-amber-100"
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-b from-amber-200 to-amber-400 text-xl shadow">
                            📁
                          </span>
                          <span className="line-clamp-2 w-full text-[10px] font-semibold text-slate-800">
                            {folder.title}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {(tab === "all" || tab === "files" || tab === "pics") &&
                (tab === "pics" ? pics : tab === "files" ? otherFiles : orderedFiles).length >
                  0 ? (
                  <ul className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <li className="grid grid-cols-[2.25rem_minmax(0,1fr)_auto] gap-1 border-b border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                      <span>#</span>
                      <span>Name</span>
                      <span>Open</span>
                    </li>
                    {(tab === "pics" ? pics : tab === "files" ? otherFiles : orderedFiles).map(
                      (row) => (
                        <li key={row.item.id}>
                          <button
                            type="button"
                            onClick={() => void openFilePreview(row.item)}
                            className="grid w-full grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-1 border-b border-slate-50 px-2 py-1.5 text-left last:border-b-0 hover:bg-slate-50"
                          >
                            <span className="text-[10px] font-bold text-slate-400">
                              {row.seriesIndex}
                            </span>
                            <span className="min-w-0">
                              <span className="block truncate text-[11px] font-medium text-slate-800">
                                File {row.seriesIndex} · {row.item.name}
                              </span>
                              <span className="block truncate text-[9px] text-slate-400">
                                {isImage(row.item) ? "Picture" : row.item.mime || "file"}
                              </span>
                            </span>
                            <span className="text-[10px] font-medium text-sky-600">View</span>
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                ) : null}

                {(tab === "all" || tab === "docs") && documents.length > 0 ? (
                  <ul className="space-y-1">
                    {documents.map((doc) => (
                      <li key={doc.id}>
                        <button
                          type="button"
                          onClick={() => setPreview({ kind: "document", item: doc })}
                          className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-slate-100"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded bg-slate-100 text-sm">
                            📄
                          </span>
                          <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-slate-800">
                            {doc.title}
                          </span>
                          <span className="text-[10px] font-medium text-sky-600">View</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )}
          </div>

          <div className="space-y-2 border-t border-slate-200 bg-slate-50 px-2 py-2">
            {!unlocked && (
              <input
                type="password"
                className="w-full rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px]"
                placeholder="Content code to publish…"
                value={changeCode}
                onChange={(e) => setChangeCode(e.target.value)}
              />
            )}
            {unlocked && (
              <p className="px-1 text-[9px] text-emerald-700">
                Editor unlocked ({editor?.level}) — uploads go into {locationLabel}.
              </p>
            )}

            <div className="flex flex-wrap gap-1.5">
              <label
                htmlFor={uploadId}
                className={`cursor-pointer rounded-md px-2.5 py-1.5 text-[10px] font-semibold text-white ${
                  busy ? "bg-slate-400" : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                {busy ? "Uploading…" : "Upload files"}
              </label>
              <input
                id={uploadId}
                ref={uploadRef}
                type="file"
                multiple
                accept="image/*,.pdf,.txt,.md,.doc,.docx,.png,.jpg,.jpeg,.gif,.webp"
                className="sr-only"
                disabled={busy}
                onChange={(e) => {
                  if (e.target.files) void publishFiles(e.target.files);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setShowFolderForm((v) => !v);
                  setShowDocForm(false);
                }}
                className="rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1.5 text-[10px] font-semibold text-amber-900 hover:bg-amber-100"
              >
                {showFolderForm ? "Hide folder" : "+ File folder"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowDocForm((v) => !v);
                  setShowFolderForm(false);
                }}
                className="rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-slate-700 hover:bg-slate-100"
              >
                {showDocForm ? "Hide doc" : "+ Document"}
              </button>
            </div>

            {showFolderForm ? (
              <form
                onSubmit={(e) => void publishFolder(e)}
                className="flex gap-1.5 rounded-lg border border-amber-200 bg-white p-2"
              >
                <input
                  className="min-w-0 flex-1 rounded border border-slate-200 px-2 py-1 text-[11px]"
                  placeholder="Folder name (e.g. Pack A)"
                  value={folderTitle}
                  onChange={(e) => setFolderTitle(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="rounded bg-amber-600 px-2 py-1 text-[10px] font-semibold text-white"
                  disabled={busy}
                >
                  Create
                </button>
              </form>
            ) : null}

            {showDocForm ? (
              <form
                onSubmit={(e) => void publishDocument(e)}
                className="space-y-1.5 rounded-lg border border-slate-200 bg-white p-2"
              >
                <input
                  className="w-full rounded border border-slate-200 px-2 py-1 text-[11px]"
                  placeholder="Document title"
                  value={docTitle}
                  onChange={(e) => setDocTitle(e.target.value)}
                  required
                />
                <MarkdownLatexField
                  label=""
                  help="Markdown + LaTeX supported."
                  value={docBody}
                  onChange={setDocBody}
                  required
                  minHeightClass="min-h-[5rem]"
                  placeholder="Paste text…"
                />
                <button
                  type="submit"
                  className="rounded bg-sky-600 px-2 py-1 text-[10px] font-semibold text-white"
                  disabled={busy}
                >
                  Save document
                </button>
              </form>
            ) : null}

            {note ? <p className="px-1 text-[10px] text-emerald-700">{note}</p> : null}
            {error ? <p className="px-1 text-[10px] text-red-600">{error}</p> : null}
            <p className="px-1 text-[9px] text-slate-400">
              Shared with this webpage · open a folder to keep many files tidy
            </p>
          </div>
        </>
      ) : (
        <div className="px-3 py-2 text-[10px] text-slate-500">
          {counts.folders} folders · {counts.files + counts.pics} files · expand
        </div>
      )}
    </div>
  );

  return (
    <>
      <div
        className={`fixed z-[70] hidden sm:block ${
          minimized ? "top-16 right-3 w-[220px]" : "top-16 right-3 w-[340px]"
        }`}
        aria-label={`File manager for ${title}`}
      >
        {chrome}
      </div>

      <div className="fixed bottom-20 right-3 z-[70] sm:hidden">
        {!mobileOpen ? (
          <button
            type="button"
            onClick={() => {
              setMobileOpen(true);
              setMinimized(false);
            }}
            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-[11px] font-semibold text-slate-800 shadow-lg"
          >
            Files ({counts.all})
          </button>
        ) : (
          <div className="w-[min(92vw,340px)]">{chrome}</div>
        )}
      </div>

      {preview ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 p-4"
          onClick={() => setPreview(null)}
          role="presentation"
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="h-3 w-3 rounded-full bg-[#ff5f57]"
                aria-label="Close"
              />
              <p className="flex-1 truncate text-center text-xs font-medium text-slate-800">
                {preview.kind === "file" ? preview.item.name : preview.item.title}
              </p>
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="text-[11px] text-slate-500 hover:text-slate-800"
              >
                Close
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto p-4">
              {preview.kind === "file" && isImage(preview.item) && preview.item.dataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={preview.item.dataUrl}
                  alt={preview.item.name}
                  className="mx-auto max-h-[60vh] rounded-lg"
                />
              ) : null}
              {preview.kind === "file" && preview.item.dataUrl && !isImage(preview.item) ? (
                <a
                  href={preview.item.dataUrl}
                  download={preview.item.name}
                  className="inline-flex rounded-lg bg-sky-600 px-3 py-2 text-sm text-white"
                >
                  Download {preview.item.name}
                </a>
              ) : null}
              {preview.kind === "file" && !preview.item.dataUrl ? (
                <p className="text-sm text-slate-500">File stored — reopen to download.</p>
              ) : null}
              {preview.kind === "document" ? (
                <div className="rounded-lg bg-slate-50 p-3 text-slate-800">
                  <RichContent className="text-sm">{preview.item.content}</RichContent>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

export default FloatingMediaWindow;
