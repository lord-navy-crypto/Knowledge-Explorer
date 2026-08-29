"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEditorMode } from "@/components/EditorModeProvider";
import { useToast } from "@/components/ToastProvider";
import { saveLearningItem } from "@/lib/storage";
import RichContent from "@/components/RichContent";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import type { ManagedForumAttachment, ManagedForumPost } from "@/lib/managed-types";
import {
  readForumDisplayName,
  writeForumDisplayName,
} from "@/lib/forum-display-name";
import ForumCodeLaunchers from "@/components/ForumCodeLaunchers";
import {
  clearForumComposerDraft,
  clearForumReplyDraft,
  isForumSortMode,
  loadForumComposerDraft,
  loadForumReplyDraft,
  loadForumSort,
  loadForumStars,
  saveForumComposerDraft,
  saveForumReplyDraft,
  saveForumSort,
  toggleForumStar,
  type ForumSortMode,
} from "@/lib/forum-local";

const MAX_POST_ATTACH = 4;
const MAX_REPLY_ATTACH = 2;
const MAX_ATTACH_BYTES = 650_000;
const POSTS_PER_PAGE = 8;

type Category = "all" | "questions" | "resources" | "announcements" | "beta-feedback";

export function parseForumDiscussionCategory(tag: string | null): Category {
  if (tag === "beta-feedback" || tag === "beta") return "beta-feedback";
  if (tag === "questions" || tag === "resources" || tag === "announcements") return tag;
  return "all";
}
type DraftAttachment = {
  localId: string;
  name: string;
  mime: string;
  dataUrl: string;
  size: number;
};

const CATEGORIES: { id: Category; label: string; match: (p: ManagedForumPost) => boolean }[] = [
  { id: "all", label: "All", match: () => true },
  {
    id: "questions",
    label: "Questions",
    match: (p) => /#questions|\bquestion\b|\?|\bhelp\b|\bhow\b|\bwhy\b|\bwhat\b/i.test(`${p.title} ${p.body}`),
  },
  {
    id: "resources",
    label: "Resources",
    match: (p) => /#resources|\bresource\b|\bshare\b|\bnote\b|\blink\b|\bmaterial\b|\bpdf\b|\bguide\b|\btip\b/i.test(`${p.title} ${p.body}`),
  },
  {
    id: "announcements",
    label: "Announcements",
    match: (p) => /#announcements|\bannounce\b|\bupdate\b|\bnews\b|\bnotice\b|\bimportant\b/i.test(`${p.title} ${p.body}`),
  },
  {
    id: "beta-feedback",
    label: "Beta feedback",
    match: (p) => /#beta-feedback|\[beta feedback\]/i.test(`${p.title} ${p.body}`),
  },
];

function relativeTime(value: string | number): string {
  const t = typeof value === "number" ? value : new Date(value).getTime();
  if (!Number.isFinite(t)) return "";
  const diff = Date.now() - t;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(t).toLocaleDateString();
}

function Avatar({ name }: { name: string }) {
  const letter = (name || "?").trim().charAt(0).toUpperCase() || "?";
  return (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white"
      aria-hidden
    >
      {letter}
    </span>
  );
}

function quoteSnippet(author: string, body: string): string {
  const excerpt = body.trim().split(/\n+/).slice(0, 6).join("\n");
  const quoted = excerpt
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n");
  return `> **${author}** wrote:\n${quoted}\n\n`;
}

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function fileToDraft(file: File): Promise<DraftAttachment> {
  if (file.size > MAX_ATTACH_BYTES) {
    throw new Error(`"${file.name}" is too large (max ~650KB each).`);
  }
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
  return {
    localId: `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: file.name,
    mime: file.type || "application/octet-stream",
    dataUrl,
    size: file.size,
  };
}

function AttachmentPicker({
  drafts,
  max,
  onChange,
  disabled,
  onError,
}: {
  drafts: DraftAttachment[];
  max: number;
  onChange: (next: DraftAttachment[]) => void;
  disabled?: boolean;
  onError?: (message: string) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <label className="btn-secondary cursor-pointer text-xs">
          Attach image / file / document
          <input
            type="file"
            multiple
            accept="image/*,.pdf,.txt,.md,.doc,.docx,.png,.jpg,.jpeg,.gif,.webp,.csv"
            className="sr-only"
            disabled={disabled || drafts.length >= max}
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              e.target.value = "";
              void (async () => {
                const next = [...drafts];
                for (const file of files) {
                  if (next.length >= max) break;
                  next.push(await fileToDraft(file));
                }
                onChange(next);
              })().catch((err) => {
                onError?.(err instanceof Error ? err.message : "Attach failed");
              });
            }}
          />
        </label>
        <span className="text-[11px] text-slate-500">
          Up to {max} files · ~650KB each · no change code needed
        </span>
      </div>
      {drafts.length > 0 ? (
        <ul className="space-y-1 text-xs text-slate-700">
          {drafts.map((d) => (
            <li key={d.localId} className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-2 py-1.5">
              <span className="truncate">
                {d.mime.startsWith("image/") ? "🖼" : "📎"} {d.name} · {formatBytes(d.size)}
              </span>
              <button
                type="button"
                className="text-red-600 hover:underline"
                onClick={() => onChange(drafts.filter((x) => x.localId !== d.localId))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function AttachmentList({ items }: { items?: ManagedForumAttachment[] }) {
  const list = items || [];
  const { error: toastError } = useToast();
  if (!list.length) return null;
  return (
    <ul className="mt-3 space-y-2">
      {list.map((att) => (
        <li key={att.id}>
          {att.mime.startsWith("image/") ? (
            <ForumImage fileId={att.fileId} name={att.name} />
          ) : (
            <a
              href={`/api/edit?fileId=${encodeURIComponent(att.fileId)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-brand-700 hover:bg-slate-50"
              onClick={async (e) => {
                e.preventDefault();
                try {
                  const res = await fetch(`/api/edit?fileId=${encodeURIComponent(att.fileId)}`);
                  const data = await res.json();
                  if (!res.ok || !data.file?.dataUrl) throw new Error(data.error || "Missing file");
                  const a = document.createElement("a");
                  a.href = data.file.dataUrl;
                  a.download = att.name || data.file.name || "download";
                  a.click();
                } catch (err) {
                  toastError(err instanceof Error ? err.message : "Download failed");
                }
              }}
            >
              📎 {att.name}
              <span className="text-slate-400">· {formatBytes(att.size)}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

function ForumImage({ fileId, name }: { fileId: string; name: string }) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch(`/api/edit?fileId=${encodeURIComponent(fileId)}`);
        const data = await res.json();
        if (!cancelled && res.ok && data.file?.dataUrl) setSrc(data.file.dataUrl);
      } catch {
        // ignore
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [fileId]);
  if (!src) {
    return <p className="text-xs text-slate-500">Loading image…</p>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      className="max-h-64 max-w-full rounded-lg border border-slate-200 object-contain"
    />
  );
}

export function ForumDiscussions({
  embedded = false,
  initialCategory = "all",
}: {
  embedded?: boolean;
  initialCategory?: Category;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { unlocked } = useEditorMode();
  const [posts, setPosts] = useState<ManagedForumPost[]>([]);
  const [displayName, setDisplayName] = useState("");
  const [nameDraft, setNameDraft] = useState("");
  const [nameOpen, setNameOpen] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);
  const [postCategory, setPostCategory] = useState<Exclude<Category, "all">>("questions");
  const [pendingAction, setPendingAction] = useState<"post" | string | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postAttachments, setPostAttachments] = useState<DraftAttachment[]>([]);
  const [replyBody, setReplyBody] = useState("");
  const [replyAttachments, setReplyAttachments] = useState<DraftAttachment[]>([]);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState<Category>(initialCategory);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<ForumSortMode>("newest");
  const [stars, setStars] = useState<string[]>([]);
  const [starredOnly, setStarredOnly] = useState(false);
  const [draftReady, setDraftReady] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [notice, setNotice] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<{
    target: "forum_post" | "forum_reply";
    id: string;
    postId?: string;
  } | null>(null);
  const [deleteCode, setDeleteCode] = useState("");

  const refresh = useCallback(async () => {
    try {
      const response = await fetch("/api/edit?area=forum&space=_root", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to load Forum");
      setPosts(Array.isArray(data.forumPosts) ? data.forumPosts : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load Forum");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setDisplayName(readForumDisplayName());
    setStars(loadForumStars());
    setSort(loadForumSort());
    const draft = loadForumComposerDraft();
    if (draft) {
      setTitle(draft.title);
      setBody(draft.body);
      if (draft.postCategory === "questions" || draft.postCategory === "resources" || draft.postCategory === "announcements" || draft.postCategory === "beta-feedback") {
        setPostCategory(draft.postCategory);
      }
      if (draft.title.trim() || draft.body.trim()) setComposerOpen(true);
    }
    setDraftReady(true);
    void refresh();
  }, [refresh]);

  useEffect(() => {
    if (!draftReady) return;
    saveForumComposerDraft({ title, body, postCategory });
  }, [title, body, postCategory, draftReady]);

  useEffect(() => {
    if (!replyingTo) return;
    saveForumReplyDraft(replyingTo, replyBody);
  }, [replyingTo, replyBody]);

  useEffect(() => {
    const thread = searchParams.get("thread");
    if (thread) setExpandedId(thread);
    const qParam = searchParams.get("q");
    if (qParam !== null) setQuery(qParam);
    const sortParam = searchParams.get("sort");
    if (isForumSortMode(sortParam)) setSort(sortParam);
    const starredParam = searchParams.get("starred");
    if (starredParam === "1") setStarredOnly(true);
    if (starredParam === "0") setStarredOnly(false);
    const reply = searchParams.get("reply");
    if (reply) {
      window.setTimeout(() => {
        document.getElementById(`forum-reply-${reply}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 250);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    const cat = CATEGORIES.find((c) => c.id === category) || CATEGORIES[0];
    const q = query.trim().toLowerCase();
    let list = posts.filter((p) => cat.match(p));
    if (starredOnly) list = list.filter((p) => stars.includes(p.id));
    if (q) {
      list = list.filter((p) => {
        const attach = (p.attachments || []).map((a) => a.name || "").join(" ");
        const replyText = (p.replies || [])
          .map((r) => `${r.author} ${r.body} ${(r.attachments || []).map((a) => a.name || "").join(" ")}`)
          .join(" ");
        const hay = `${p.title} ${p.body} ${p.author} ${attach} ${replyText}`.toLowerCase();
        return q.split(/\s+/).every((token) => hay.includes(token));
      });
    }
    list = [...list].sort((a, b) => {
      if (sort === "replies") {
        return (b.replies || []).length - (a.replies || []).length;
      }
      if (sort === "newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      const aLast = Math.max(
        new Date(a.createdAt).getTime(),
        ...(a.replies || []).map((r) => new Date(r.createdAt).getTime())
      );
      const bLast = Math.max(
        new Date(b.createdAt).getTime(),
        ...(b.replies || []).map((r) => new Date(r.createdAt).getTime())
      );
      return bLast - aLast;
    });
    return list;
  }, [posts, category, query, sort, starredOnly, stars]);

  useEffect(() => {
    setPage(1);
  }, [category, query, sort, starredOnly]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const paged = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  function selectCategory(next: Category) {
    setCategory(next);
    if (!embedded) return;
    const params = new URLSearchParams(searchParams.toString());
    if (next === "all") params.delete("tag");
    else params.set("tag", next === "beta-feedback" ? "beta-feedback" : next);
    const qs = params.toString();
    router.replace(qs ? `/forum?${qs}` : "/forum", { scroll: false });
  }

  function patchForumQuery(patch: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(patch)) {
      if (!value) params.delete(key);
      else params.set(key, value);
    }
    const qs = params.toString();
    router.replace(qs ? `/forum?${qs}` : "/forum", { scroll: false });
  }

  function changeSort(next: ForumSortMode) {
    setSort(next);
    saveForumSort(next);
    patchForumQuery({ sort: next === "newest" ? null : next });
  }

  function toggleStarredFilter() {
    setStarredOnly((v) => {
      const next = !v;
      patchForumQuery({ starred: next ? "1" : null });
      return next;
    });
  }

  function requestIdentity(action: "post" | string) {
    setError("");
    if (!displayName) {
      setPendingAction(action);
      setNameDraft("");
      setNameOpen(true);
      return;
    }
    continueAction(action);
  }

  function continueAction(action: "post" | string) {
    if (action === "post") setComposerOpen(true);
    else {
      setReplyingTo(action);
      setReplyBody(loadForumReplyDraft(action));
      setReplyAttachments([]);
      setExpandedId(action);
    }
  }

  function saveName(event: React.FormEvent) {
    event.preventDefault();
    const next = nameDraft.trim();
    if (next.length < 2 || next.length > 40) {
      setError("Display name must be 2–40 characters.");
      return;
    }
    writeForumDisplayName(next);
    setDisplayName(next);
    setNameOpen(false);
    if (pendingAction) continueAction(pendingAction);
    setPendingAction(null);
  }

  async function publish(action: "add_forum_post" | "add_forum_reply", item: object) {
    setSaving(true);
    setError("");
    try {
      const response = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, item }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Publish failed");
      setPosts(Array.isArray(data.content?.forumPosts) ? data.content.forumPosts : []);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Publish failed");
      return false;
    } finally {
      setSaving(false);
    }
  }

  function draftsPayload(drafts: DraftAttachment[]) {
    return drafts.map((d) => ({
      name: d.name,
      mime: d.mime,
      dataUrl: d.dataUrl,
      size: d.size,
    }));
  }

  async function submitPost(event: React.FormEvent) {
    event.preventDefault();
    if (!displayName) return requestIdentity("post");
    const tag =
      postCategory === "beta-feedback" ? "#beta-feedback" : `#${postCategory}`;
    const taggedBody = /^\s*#/.test(body) ? body : `${tag}\n\n${body}`;
    const ok = await publish("add_forum_post", {
      author: displayName,
      title,
      body: taggedBody,
      attachments: draftsPayload(postAttachments),
    });
    if (ok) {
      setTitle("");
      setBody("");
      setPostAttachments([]);
      setComposerOpen(false);
      clearForumComposerDraft();
    }
  }

  async function submitReply(event: React.FormEvent, postId: string) {
    event.preventDefault();
    if (!displayName) return requestIdentity(postId);
    const ok = await publish("add_forum_reply", {
      postId,
      author: displayName,
      body: replyBody,
      attachments: draftsPayload(replyAttachments),
    });
    if (ok) {
      setReplyBody("");
      setReplyAttachments([]);
      setReplyingTo(null);
      clearForumReplyDraft(postId);
    }
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    if (!unlocked && !deleteCode.trim()) {
      setError("Enter the content change code to delete shared Forum content.");
      return;
    }
    setError("");
    const response = await fetch("/api/edit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "delete",
        target: deleteTarget.target,
        id: deleteTarget.id,
        postId: deleteTarget.postId,
        changeCode: unlocked ? undefined : deleteCode.trim(),
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error || "Delete failed");
      return;
    }
    setPosts(Array.isArray(data.content?.forumPosts) ? data.content.forumPosts : []);
    setDeleteTarget(null);
    setDeleteCode("");
  }

  async function deleteContent(target: "forum_post" | "forum_reply", id: string, postId?: string) {
    setDeleteTarget({ target, id, postId });
    setDeleteCode("");
    setError("");
  }

  async function saveToMyBox(post: ManagedForumPost) {
    await saveLearningItem({
      title: `[Forum] ${post.title}`,
      content: `${post.body}\n\n— ${post.author}`,
      category: "Forum",
    });
    setNotice("Saved to My box (private in this browser).");
    window.setTimeout(() => setNotice(""), 4000);
  }

  return (
    <div className="space-y-5">
      {!embedded && (
        <section className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Discussions</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Ask questions, attach files, and share tips. No change code needed to post — only a
              display name.
            </p>
          </div>
        </section>
      )}

      <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-950">
        <p className="font-semibold">Post freely — no content password</p>
        <p className="mt-1 text-emerald-900/85">
          Choose a display name to publish threads and replies (with optional images, files, or
          documents). Deleting shared content still needs a change code.{" "}
          <Link href="/forum?tab=box" className="font-semibold underline">
            My box
          </Link>{" "}
          stays private in this browser only.
        </p>
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-sm text-amber-950">
        Be kind and constructive. Do not post personal data, private answer keys, or copyrighted
        material you do not have rights to share.
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Discussion categories">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={category === c.id}
              onClick={() => selectCategory(c.id)}
              className={
                category === c.id
                  ? "rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white"
                  : "rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
              }
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              const params = new URLSearchParams(searchParams.toString());
              if (e.target.value.trim()) params.set("q", e.target.value.trim());
              else params.delete("q");
              const qs = params.toString();
              router.replace(qs ? `/forum?${qs}` : "/forum", { scroll: false });
            }}
            placeholder="Search title, body, author, file names…"
            className="input min-w-[12rem] flex-1 sm:flex-none sm:w-64"
          />
          <select
            value={sort}
            onChange={(e) => changeSort(e.target.value as ForumSortMode)}
            className="input py-1.5 text-xs"
            aria-label="Sort threads"
          >
            <option value="newest">Newest</option>
            <option value="active">Most active</option>
            <option value="replies">Most replies</option>
          </select>
          <button
            type="button"
            className={
              starredOnly
                ? "rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white"
                : "rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
            }
            onClick={toggleStarredFilter}
          >
            Starred{stars.length ? ` (${stars.length})` : ""}
          </button>
          {displayName && (
            <button
              type="button"
              className="btn-ghost text-xs"
              onClick={() => {
                setNameDraft(displayName);
                setNameOpen(true);
              }}
            >
              As {displayName}
            </button>
          )}
          <button type="button" className="btn-primary text-xs" onClick={() => requestIdentity("post")}>
            + New thread
          </button>
          <button type="button" className="text-xs text-brand-600 hover:underline" onClick={() => void refresh()}>
            Refresh
          </button>
        </div>
      </div>

      {composerOpen && (
        <form onSubmit={submitPost} className="card space-y-3 border-brand-200">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">New discussion</h3>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-[11px] text-slate-500">Draft saved in this browser</p>
              <button
                type="button"
                className="btn-ghost text-xs"
                onClick={() => {
                  setTitle("");
                  setBody("");
                  setPostAttachments([]);
                  clearForumComposerDraft();
                }}
              >
                Discard draft
              </button>
              <button type="button" className="btn-ghost" onClick={() => setComposerOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
          <input
            className="input"
            maxLength={120}
            placeholder="Discussion title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <label className="block text-sm font-medium text-slate-700">
            Category tag
            <select
              className="input mt-1 max-w-xs"
              value={postCategory}
              onChange={(e) => setPostCategory(e.target.value as Exclude<Category, "all">)}
            >
              <option value="questions">Questions</option>
              <option value="resources">Resources</option>
              <option value="announcements">Announcements</option>
              <option value="beta-feedback">Beta feedback</option>
            </select>
          </label>
          <MarkdownLatexField
            label="Discussion body"
            value={body}
            onChange={setBody}
            required
            minHeightClass="min-h-[10rem]"
            placeholder="Write your question or idea…"
          />
          <AttachmentPicker
            drafts={postAttachments}
            max={MAX_POST_ATTACH}
            onChange={setPostAttachments}
            disabled={saving}
            onError={setError}
          />
          <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
            <span>Posting publicly as {displayName}</span>
            <span>{body.length}/8000</span>
          </div>
          <button type="submit" className="btn-primary" disabled={saving}>
            {saving ? "Publishing…" : "Publish discussion"}
          </button>
        </form>
      )}

      {error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {notice ? (
        <p className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800">{notice}</p>
      ) : null}

      {loading ? (
        <div className="card text-sm text-slate-500">Loading discussions…</div>
      ) : filtered.length === 0 ? (
        <div className="card border-dashed text-center text-sm text-slate-500">
          {query || category !== "all" || starredOnly
            ? "No threads match this filter. Try another search or clear Starred."
            : "No shared discussions yet. Start the first one."}
        </div>
      ) : (
        <ul className="space-y-3">
          {paged.map((post) => {
            const open = expandedId === post.id;
            const replyCount = (post.replies || []).length;
            const attachCount = (post.attachments || []).length;
            return (
              <li key={post.id} id={`forum-thread-${post.id}`} className="card overflow-hidden !p-0 scroll-mt-28">
                <div className="flex items-start gap-1">
                <button
                  type="button"
                  onClick={() => setExpandedId(open ? null : post.id)}
                  className="flex min-w-0 flex-1 items-start gap-3 px-4 py-3 text-left hover:bg-slate-50/80"
                >
                  <Avatar name={post.author} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <h3 className="font-semibold text-slate-900">{post.title}</h3>
                      {stars.includes(post.id) ? (
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                          starred
                        </span>
                      ) : null}
                      <span className="text-[11px] text-slate-500">
                        {replyCount} {replyCount === 1 ? "reply" : "replies"}
                        {attachCount ? ` · ${attachCount} file${attachCount === 1 ? "" : "s"}` : ""}
                        {" · "}
                        {relativeTime(post.createdAt)}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">
                      by <span className="font-medium text-slate-700">{post.author}</span>
                    </p>
                    {!open && <p className="mt-1 line-clamp-2 text-sm text-slate-600">{post.body}</p>}
                  </div>
                  <span className="mt-1 text-xs text-slate-400" aria-hidden>
                    {open ? "▾" : "▸"}
                  </span>
                </button>
                <button
                  type="button"
                  className={`mt-3 mr-3 shrink-0 text-lg ${stars.includes(post.id) ? "text-amber-500" : "text-slate-300"}`}
                  aria-label={stars.includes(post.id) ? "Unstar thread" : "Star thread"}
                  onClick={() => setStars(toggleForumStar(post.id))}
                >
                  ★
                </button>
                </div>

                {open && (
                  <div className="space-y-4 border-t border-slate-100 px-4 py-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="text-xs text-slate-500">{new Date(post.createdAt).toLocaleString()}</p>
                      <button
                        type="button"
                        className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100"
                        onClick={() => void deleteContent("forum_post", post.id)}
                      >
                        Delete
                      </button>
                    </div>
                    <RichContent className="text-sm text-slate-700">{post.body}</RichContent>
                    <ForumCodeLaunchers body={post.body} />
                    <AttachmentList items={post.attachments} />
                    <div className="flex flex-wrap gap-3 text-xs">
                      <button
                        type="button"
                        className="text-brand-600 hover:underline"
                        onClick={() => requestIdentity(post.id)}
                      >
                        Reply
                      </button>
                      <button
                        type="button"
                        className="text-brand-600 hover:underline"
                        onClick={() => {
                          saveForumReplyDraft(post.id, quoteSnippet(post.author, post.body));
                          requestIdentity(post.id);
                        }}
                      >
                        Quote reply
                      </button>
                      <button
                        type="button"
                        className="text-brand-600 hover:underline"
                        onClick={() => void saveToMyBox(post)}
                      >
                        Save to My box
                      </button>
                      <button
                        type="button"
                        className="text-slate-500 hover:underline"
                        onClick={() => {
                          const url = `${window.location.origin}/forum?thread=${encodeURIComponent(post.id)}`;
                          void navigator.clipboard.writeText(url);
                          setNotice("Permalink copied.");
                          window.setTimeout(() => setNotice(""), 1500);
                        }}
                      >
                        Copy permalink
                      </button>
                      <Link href="/forum?tab=box" className="text-slate-500 hover:underline">
                        Open My box →
                      </Link>
                    </div>

                    {replyCount > 0 && (
                      <div className="space-y-3 border-l-2 border-brand-100 pl-4">
                        {(post.replies || []).map((reply) => (
                          <div
                            key={reply.id}
                            id={`forum-reply-${reply.id}`}
                            className="flex scroll-mt-28 gap-2 rounded-xl bg-slate-50 p-3"
                          >
                            <Avatar name={reply.author} />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-xs font-medium text-slate-600">
                                  {reply.author} · {relativeTime(reply.createdAt)}
                                </p>
                                <button
                                  type="button"
                                  className="rounded-md border border-red-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-red-700 hover:bg-red-50"
                                  onClick={() => void deleteContent("forum_reply", reply.id, post.id)}
                                >
                                  Delete
                                </button>
                              </div>
                              <RichContent className="mt-2 text-sm text-slate-700">{reply.body}</RichContent>
                              <ForumCodeLaunchers body={reply.body} />
                              <AttachmentList items={reply.attachments} />
                              <button
                                type="button"
                                className="mt-2 text-xs text-brand-600 hover:underline"
                                onClick={() => {
                                  saveForumReplyDraft(post.id, quoteSnippet(reply.author, reply.body));
                                  requestIdentity(post.id);
                                }}
                              >
                                Quote this reply
                              </button>
                              <button
                                type="button"
                                className="ml-3 mt-2 text-xs text-slate-500 hover:underline"
                                onClick={() => {
                                  const url = `${window.location.origin}/forum?thread=${encodeURIComponent(post.id)}&reply=${encodeURIComponent(reply.id)}`;
                                  void navigator.clipboard.writeText(url);
                                  setNotice("Reply permalink copied.");
                                  window.setTimeout(() => setNotice(""), 1500);
                                }}
                              >
                                Copy reply link
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {replyingTo === post.id && (
                      <form
                        onSubmit={(event) => submitReply(event, post.id)}
                        className="space-y-2 rounded-xl border border-brand-100 bg-brand-50/40 p-3"
                      >
                        <MarkdownLatexField
                          label="Reply"
                          help="Markdown + LaTeX supported. Attachments optional."
                          value={replyBody}
                          onChange={setReplyBody}
                          required
                          minHeightClass="min-h-[7rem]"
                          placeholder={`Reply publicly as ${displayName}…`}
                        />
                        <AttachmentPicker
                          drafts={replyAttachments}
                          max={MAX_REPLY_ATTACH}
                          onChange={setReplyAttachments}
                          disabled={saving}
                          onError={setError}
                        />
                        <div className="flex gap-2">
                          <button type="submit" className="btn-primary" disabled={saving}>
                            {saving ? "Publishing…" : "Publish reply"}
                          </button>
                          <button type="button" className="btn-ghost" onClick={() => setReplyingTo(null)}>
                            Cancel
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {!loading && filtered.length > POSTS_PER_PAGE ? (
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
          <span>
            Page {page} of {totalPages} · {filtered.length} threads
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              className="btn-ghost text-xs"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              ← Previous
            </button>
            <button
              type="button"
              className="btn-ghost text-xs"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next →
            </button>
          </div>
        </div>
      ) : null}

      {nameOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="forum-name-title"
        >
          <form onSubmit={saveName} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h2 id="forum-name-title" className="text-xl font-semibold">
              Choose your Forum name
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              No account password or change code — just a public display name saved in this browser.
            </p>
            <input
              autoFocus
              className="input mt-4"
              minLength={2}
              maxLength={40}
              placeholder="Public display name"
              value={nameDraft}
              onChange={(event) => setNameDraft(event.target.value)}
              required
            />
            <div className="mt-4 flex gap-2">
              <button type="submit" className="btn-primary">
                Continue
              </button>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => {
                  setNameOpen(false);
                  setPendingAction(null);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {deleteTarget ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="forum-delete-title"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h2 id="forum-delete-title" className="text-xl font-semibold text-slate-900">
              Delete Forum content?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              This removes the thread or reply and any attached files from the public discussions.
            </p>
            {unlocked ? (
              <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
                Editor session active — no change code needed.
              </p>
            ) : (
              <label className="mt-4 block text-sm font-medium text-slate-700">
                Content change code
                <input
                  type="password"
                  className="input mt-1"
                  value={deleteCode}
                  onChange={(event) => setDeleteCode(event.target.value)}
                  placeholder="Required to delete others’ posts"
                  autoFocus
                />
              </label>
            )}
            <div className="mt-5 flex gap-2">
              <button type="button" className="btn-primary bg-red-600 hover:bg-red-700" onClick={() => void confirmDelete()}>
                Delete permanently
              </button>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => {
                  setDeleteTarget(null);
                  setDeleteCode("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
