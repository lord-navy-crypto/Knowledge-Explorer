"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  deleteImage,
  deleteLearningItem,
  getImages,
  getLearningItems,
  getRandomLearningItem,
  saveImage,
  saveLearningItem,
  type LearningBoxItem,
  type StoredImage,
} from "@/lib/storage";
import { starterLearningMaterials } from "@/data/starter-learning";
import RichContent from "@/components/RichContent";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import LocalImageEditor from "@/components/LocalImageEditor";

export type LearningBoxView = "library" | "pictures" | "random";

const SEEDED_KEY = "results-learning-seeded-v1";

type Props = {
  /** When true, omit page chrome (used inside Forum hub). */
  embedded?: boolean;
  initialView?: LearningBoxView;
  /** Sync My box sub-view to parent URL (Forum hub). */
  onViewChange?: (view: LearningBoxView) => void;
};

/**
 * Private Learning Box — browser-local notes, pictures, and Random Draw.
 */
export default function PrivateLearningBoxPanel({
  embedded = false,
  initialView = "library",
  onViewChange,
}: Props) {
  const [tab, setTab] = useState<LearningBoxView>(initialView);
  const [items, setItems] = useState<LearningBoxItem[]>([]);
  const [pictures, setPictures] = useState<StoredImage[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const [preview, setPreview] = useState<StoredImage | null>(null);
  const [randomPick, setRandomPick] = useState<LearningBoxItem | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [listQuery, setListQuery] = useState("");
  const [listCategory, setListCategory] = useState("all");
  const [importText, setImportText] = useState("");
  const [boxNotice, setBoxNotice] = useState("");

  useEffect(() => {
    setTab(initialView);
  }, [initialView]);

  function selectView(next: LearningBoxView) {
    setTab(next);
    onViewChange?.(next);
  }

  useEffect(() => {
    setMounted(true);
    (async () => {
      try {
        if (typeof localStorage !== "undefined" && !localStorage.getItem(SEEDED_KEY)) {
          for (const m of starterLearningMaterials) {
            await saveLearningItem(m);
          }
          localStorage.setItem(SEEDED_KEY, "1");
        }
      } catch {
        // ignore seed errors
      }
      await refresh();
    })();
  }, []);

  async function refresh() {
    try {
      const list = await getLearningItems();
      setItems(list);
      const imgs = await getImages("uploaded");
      setPictures(imgs);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
    }
  }

  const itemCategories = useMemo(() => {
    const set = new Set(items.map((item) => item.category || "General"));
    return ["all", ...Array.from(set).sort()];
  }, [items]);

  const visibleItems = useMemo(() => {
    const q = listQuery.trim().toLowerCase();
    return items.filter((item) => {
      if (listCategory !== "all" && item.category !== listCategory) return false;
      if (!q) return true;
      return `${item.title} ${item.content} ${item.category}`.toLowerCase().includes(q);
    });
  }, [items, listQuery, listCategory]);

  async function exportBox() {
    const payload = JSON.stringify({ version: 1, exportedAt: Date.now(), items }, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `my-box-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setBoxNotice("Exported My box JSON.");
    window.setTimeout(() => setBoxNotice(""), 3000);
  }

  async function importBox() {
    setError("");
    try {
      const parsed = JSON.parse(importText) as { items?: LearningBoxItem[] };
      const list = Array.isArray(parsed?.items) ? parsed.items : Array.isArray(parsed) ? parsed : [];
      if (!list.length) throw new Error("No items found in JSON.");
      for (const entry of list) {
        if (!entry?.title || !entry?.content) continue;
        await saveLearningItem({
          title: String(entry.title),
          content: String(entry.content),
          category: String(entry.category || "General"),
        });
      }
      setImportText("");
      await refresh();
      setBoxNotice(`Imported ${list.length} item(s).`);
      window.setTimeout(() => setBoxNotice(""), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed");
    }
  }

  function resetForm() {
    setTitle("");
    setContent("");
    setCategory("General");
    setEditingId(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setError("");
    try {
      await saveLearningItem({
        id: editingId ?? undefined,
        title: title.trim(),
        content: content.trim(),
        category: category.trim() || "General",
      });
      resetForm();
      await refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    }
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setError("");
    try {
      for (const file of Array.from(files)) {
        const text = await file.text();
        await saveLearningItem({
          title: file.name.replace(/\.[^.]+$/, ""),
          content: text.slice(0, 100_000),
          category: category.trim() || "Uploaded",
        });
      }
      await refresh();
      e.target.value = "";
    } catch (err) {
      setError(err instanceof Error ? err.message : "File upload failed");
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setError("");
    try {
      for (const file of Array.from(files)) {
        if (!file.type.startsWith("image/")) continue;
        if (file.size > 4_500_000) throw new Error("Keep images under ~4 MB.");
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result || ""));
          reader.onerror = () => reject(new Error("Could not read image"));
          reader.readAsDataURL(file);
        });
        const name = file.name.replace(/\.[^.]+$/, "") || "Picture";
        await saveImage({
          kind: "uploaded",
          name,
          dataUrl,
          note: "Private Learning Box",
          tags: ["learning-box"],
        });
        await saveLearningItem({
          title: name,
          content: dataUrl,
          category: "Private image",
        });
      }
      await refresh();
      e.target.value = "";
      selectView("pictures");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Image upload failed");
    }
  }

  function startEdit(item: LearningBoxItem) {
    setEditingId(item.id);
    setTitle(item.title);
    setContent(item.content);
    setCategory(item.category);
    selectView("library");
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this learning item?")) return;
    await deleteLearningItem(id);
    if (editingId === id) resetForm();
    await refresh();
  }

  async function handleDeletePicture(id: string) {
    if (!confirm("Delete this private picture?")) return;
    await deleteImage(id);
    if (preview?.id === id) setPreview(null);
    await refresh();
  }

  async function spin() {
    setSpinning(true);
    setRandomPick(null);
    setError("");
    await new Promise((r) => setTimeout(r, 600));
    try {
      const pick = await getRandomLearningItem(randomPick?.id);
      setRandomPick(pick);
      if (!pick) setError("My box is empty. Add some items first.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Draw failed");
    } finally {
      setSpinning(false);
    }
  }

  return (
    <div className="space-y-6">
      {!embedded ? (
        <div>
          <h1 className="text-3xl font-bold">My box</h1>
          <p className="mt-2 text-slate-600">
            Your private folder stored only in this browser — notes, documents, and pictures. No
            change code required. Use Random Draw for spaced review.
          </p>
          <Link
            href="/forum?tab=box"
            className="mt-2 inline-block text-sm text-brand-600 hover:underline"
          >
            Open inside Forum hub →
          </Link>
        </div>
      ) : (
        <div className="rounded-xl border border-violet-200 bg-violet-50/70 px-4 py-3 text-sm text-violet-950">
          <p className="font-semibold">My box · private to this browser</p>
          <p className="mt-1 text-violet-900/80">
            Notes, pictures, and Random Draw stay on this device only — never uploaded to the shared
            Forum library.
          </p>
        </div>
      )}

      <div className="rounded-xl border border-slate-200 bg-white p-2">
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              ["library", "Documents"],
              ["pictures", "Pictures"],
              ["random", "Random Draw"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => selectView(id)}
              className={
                tab === id
                  ? "rounded-xl bg-brand-600 px-3 py-2.5 text-sm font-semibold text-white shadow"
                  : "rounded-xl bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {mounted && tab === "library" && (
        <div className="grid gap-6 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="card space-y-4">
            <h2 className="text-lg font-semibold">
              {editingId ? "Edit item" : "Add learning material"}
            </h2>
            <div>
              <label className="mb-1 block text-sm font-medium">Title</label>
              <input
                type="text"
                className="input"
                placeholder="e.g. Memory hooks for biology"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Category</label>
              <input
                type="text"
                className="input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <MarkdownLatexField
              label="Content"
              value={content}
              onChange={setContent}
              required
              minHeightClass="min-h-40"
              placeholder="Paste notes, Markdown, or a summary…"
            />
            <div>
              <label className="mb-1 block text-sm font-medium">Or upload document files</label>
              <input
                type="file"
                accept=".txt,.md,.markdown,.csv,.json,text/*"
                multiple
                onChange={handleFileUpload}
                className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-600 file:px-4 file:py-2 file:text-white hover:file:bg-brand-700"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Or upload private pictures</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:text-white hover:file:bg-violet-700"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="btn-primary">
                {editingId ? "Update" : "Save to box"}
              </button>
              {editingId ? (
                <button type="button" onClick={resetForm} className="btn-ghost">
                  Cancel edit
                </button>
              ) : null}
            </div>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
          </form>

          <div className="space-y-3">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-lg font-semibold">Stored materials ({visibleItems.length})</h2>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="btn-secondary text-xs" onClick={() => void exportBox()}>
                  Export JSON
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <input
                className="input min-w-[10rem] flex-1 text-sm"
                placeholder="Search notes…"
                value={listQuery}
                onChange={(e) => setListQuery(e.target.value)}
              />
              <select
                className="input py-2 text-sm"
                value={listCategory}
                onChange={(e) => setListCategory(e.target.value)}
              >
                {itemCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All categories" : cat}
                  </option>
                ))}
              </select>
            </div>
            <details className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
              <summary className="cursor-pointer font-medium text-slate-700">Import backup JSON</summary>
              <textarea
                className="textarea mt-2 min-h-[6rem] font-mono text-xs"
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder='Paste {"items":[...]} export'
              />
              <button type="button" className="btn-secondary mt-2 text-xs" onClick={() => void importBox()}>
                Import
              </button>
            </details>
            {boxNotice ? <p className="text-xs text-emerald-700">{boxNotice}</p> : null}
            {items.length === 0 ? (
              <div className="card text-sm text-slate-500">
                Nothing stored yet. Add your first learning material on the left.
              </div>
            ) : visibleItems.length === 0 ? (
              <div className="card text-sm text-slate-500">No items match this search or category.</div>
            ) : (
              <ul className="max-h-[min(40rem,70vh)] space-y-3 overflow-y-auto overscroll-contain pr-1">
                {visibleItems.map((item) => (
                  <li key={item.id} className="card space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <span className="badge">{item.category}</span>
                    </div>
                    <div className="max-h-48 overflow-y-auto overscroll-contain rounded-lg bg-slate-50 p-3">
                      {item.content.startsWith("data:image") ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.content}
                          alt={item.title}
                          className="mx-auto max-h-40 rounded-lg object-contain"
                        />
                      ) : (
                        <RichContent className="text-sm text-slate-700">{item.content}</RichContent>
                      )}
                    </div>
                    <div className="flex gap-3 text-xs">
                      <button
                        type="button"
                        onClick={() => startEdit(item)}
                        className="text-brand-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => void handleDelete(item.id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {mounted && tab === "pictures" && (
        <section className="space-y-4">
          <div className="card space-y-3">
            <h2 className="text-lg font-semibold">Private pictures</h2>
            <p className="text-sm text-slate-600">
              Upload photos of handwritten notes, textbook pages, and diagrams. Stored only in this
              browser.
            </p>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:text-white hover:file:bg-violet-700"
            />
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
          </div>

          {pictures.length === 0 ? (
            <div className="card text-sm text-slate-500">No private pictures yet.</div>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pictures.map((img) => (
                <li key={img.id} className="card space-y-2">
                  <button type="button" onClick={() => setPreview(img)} className="block w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.dataUrl}
                      alt={img.name}
                      className="mx-auto max-h-40 rounded-lg object-contain"
                    />
                  </button>
                  <p className="truncate text-sm font-medium">{img.name}</p>
                  <div className="flex gap-3 text-xs">
                    <button
                      type="button"
                      onClick={() => setPreview(img)}
                      className="text-brand-600 hover:underline"
                    >
                      View / edit
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleDeletePicture(img.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {preview ? (
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4"
              onClick={() => setPreview(null)}
              role="presentation"
            >
              <div
                className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-4 shadow-xl"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{preview.name}</h3>
                  <button type="button" className="btn-ghost text-sm" onClick={() => setPreview(null)}>
                    Close
                  </button>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview.dataUrl}
                  alt={preview.name}
                  className="mx-auto max-h-[50vh] rounded-lg object-contain"
                />
                <div className="mt-3">
                  <LocalImageEditor
                    item={preview}
                    onSaved={() => {
                      void refresh();
                    }}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </section>
      )}

      {mounted && tab === "random" && (
        <div className="card mx-auto max-w-xl space-y-4 text-center">
          <h2 className="text-lg font-semibold">Random Draw</h2>
          <p className="text-sm text-slate-600">
            Draw a random item from My box for quick review.
          </p>
          <button type="button" className="btn-primary" onClick={() => void spin()} disabled={spinning}>
            {spinning ? "Drawing…" : "Draw one"}
          </button>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {randomPick ? (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left">
              <p className="badge">{randomPick.category}</p>
              <h3 className="mt-2 text-lg font-semibold">{randomPick.title}</h3>
              <div className="mt-2 max-h-80 overflow-y-auto">
                {randomPick.content.startsWith("data:image") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={randomPick.content}
                    alt={randomPick.title}
                    className="mx-auto max-h-64 rounded-lg object-contain"
                  />
                ) : (
                  <RichContent className="text-sm">{randomPick.content}</RichContent>
                )}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {!mounted ? <div className="card text-sm text-slate-500">Loading private storage…</div> : null}
    </div>
  );
}
