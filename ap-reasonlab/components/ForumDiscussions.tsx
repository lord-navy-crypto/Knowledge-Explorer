"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { saveLearningItem } from "@/lib/storage";
import RichContent from "@/components/RichContent";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import type { ManagedForumPost } from "@/lib/managed-types";

const NAME_KEY = "results-forum-display-name";

type Category = "all" | "questions" | "resources" | "announcements";

const CATEGORIES: { id: Category; label: string; match: (p: ManagedForumPost) => boolean }[] = [
  { id: "all", label: "All", match: () => true },
  {
    id: "questions",
    label: "Questions",
    match: (p) => /question|\?|help|how|why|what/i.test(`${p.title} ${p.body}`),
  },
  {
    id: "resources",
    label: "Resources",
    match: (p) => /resource|share|note|link|material|pdf|guide|tip/i.test(`${p.title} ${p.body}`),
  },
  {
    id: "announcements",
    label: "Announcements",
    match: (p) => /announce|update|news|notice|important/i.test(`${p.title} ${p.body}`),
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

export function ForumDiscussions({ embedded = false }: { embedded?: boolean }) {
  const [posts, setPosts] = useState<ManagedForumPost[]>([]);
  const [displayName, setDisplayName] = useState("");
  const [nameDraft, setNameDraft] = useState("");
  const [nameOpen, setNameOpen] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<"post" | string | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [replyBody, setReplyBody] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"newest" | "active">("newest");
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
    setDisplayName(localStorage.getItem(NAME_KEY) || "");
    void refresh();
  }, [refresh]);

  const filtered = useMemo(() => {
    const cat = CATEGORIES.find((c) => c.id === category) || CATEGORIES[0];
    const q = query.trim().toLowerCase();
    let list = posts.filter((p) => cat.match(p));
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.body.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          (p.replies || []).some(
            (r) => r.body.toLowerCase().includes(q) || r.author.toLowerCase().includes(q)
          )
      );
    }
    list = [...list].sort((a, b) => {
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
  }, [posts, category, query, sort]);

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
      setReplyBody("");
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
    localStorage.setItem(NAME_KEY, next);
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

  async function submitPost(event: React.FormEvent) {
    event.preventDefault();
    if (!displayName) return requestIdentity("post");
    const ok = await publish("add_forum_post", { author: displayName, title, body });
    if (ok) {
      setTitle("");
      setBody("");
      setComposerOpen(false);
    }
  }

  async function submitReply(event: React.FormEvent, postId: string) {
    event.preventDefault();
    if (!displayName) return requestIdentity(postId);
    const ok = await publish("add_forum_reply", { postId, author: displayName, body: replyBody });
    if (ok) {
      setReplyBody("");
      setReplyingTo(null);
    }
  }

  async function moderate(target: "forum_post" | "forum_reply", id: string, postId?: string) {
    const changeCode = window.prompt("Enter a content or master change code to delete:");
    if (!changeCode) return;
    if (!window.confirm("Delete this shared Forum content?")) return;
    setError("");
    const response = await fetch("/api/edit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", target, id, postId, changeCode }),
    });
    const data = await response.json();
    if (!response.ok) return setError(data.error || "Delete failed");
    setPosts(Array.isArray(data.content?.forumPosts) ? data.content.forumPosts : []);
  }

  async function saveToMyBox(post: ManagedForumPost) {
    await saveLearningItem({
      title: `[Forum] ${post.title}`,
      content: `${post.body}\n\n— ${post.author}`,
      category: "Forum",
    });
    window.alert("Saved to My box (this browser only).");
  }

  return (
    <div className="space-y-5">
      {!embedded && (
        <section className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Discussions</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Ask questions and share tips. Use Shared library for files and My box for private notes.
            </p>
          </div>
        </section>
      )}

      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-sm text-amber-950">
        Be kind and constructive. Do not post personal data, private answer keys, or copyrighted
        material you do not have rights to share. Display names are public but not verified accounts.
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Discussion categories">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={category === c.id}
              onClick={() => setCategory(c.id)}
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
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search threads…"
            className="input min-w-[10rem] flex-1 sm:flex-none sm:w-48"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "newest" | "active")}
            className="input py-1.5 text-xs"
            aria-label="Sort threads"
          >
            <option value="newest">Newest</option>
            <option value="active">Most active</option>
          </select>
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
            <button type="button" className="btn-ghost" onClick={() => setComposerOpen(false)}>
              Cancel
            </button>
          </div>
          <input
            className="input"
            maxLength={120}
            placeholder="Discussion title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <MarkdownLatexField
            label="Discussion body"
            value={body}
            onChange={setBody}
            required
            minHeightClass="min-h-[10rem]"
            placeholder="Write your question or idea…"
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

      {loading ? (
        <div className="card text-sm text-slate-500">Loading discussions…</div>
      ) : filtered.length === 0 ? (
        <div className="card border-dashed text-center text-sm text-slate-500">
          {query || category !== "all"
            ? "No threads match this filter. Try another search."
            : "No shared discussions yet. Start the first one."}
        </div>
      ) : (
        <ul className="space-y-3">
          {filtered.map((post) => {
            const open = expandedId === post.id;
            const replyCount = (post.replies || []).length;
            return (
              <li key={post.id} className="card overflow-hidden !p-0">
                <button
                  type="button"
                  onClick={() => setExpandedId(open ? null : post.id)}
                  className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-slate-50/80"
                >
                  <Avatar name={post.author} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <h3 className="font-semibold text-slate-900">{post.title}</h3>
                      <span className="text-[11px] text-slate-500">
                        {replyCount} {replyCount === 1 ? "reply" : "replies"} · {relativeTime(post.createdAt)}
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

                {open && (
                  <div className="space-y-4 border-t border-slate-100 px-4 py-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="text-xs text-slate-500">{new Date(post.createdAt).toLocaleString()}</p>
                      <button
                        type="button"
                        className="text-xs text-slate-400 hover:text-red-600"
                        onClick={() => void moderate("forum_post", post.id)}
                      >
                        Moderate
                      </button>
                    </div>
                    <RichContent className="text-sm text-slate-700">{post.body}</RichContent>
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
                        onClick={() => void saveToMyBox(post)}
                      >
                        Save to My box
                      </button>
                      <Link href="/forum?tab=box" className="text-slate-500 hover:underline">
                        Open My box →
                      </Link>
                    </div>

                    {replyCount > 0 && (
                      <div className="space-y-3 border-l-2 border-brand-100 pl-4">
                        {(post.replies || []).map((reply) => (
                          <div key={reply.id} className="flex gap-2 rounded-xl bg-slate-50 p-3">
                            <Avatar name={reply.author} />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-xs font-medium text-slate-600">
                                  {reply.author} · {relativeTime(reply.createdAt)}
                                </p>
                                <button
                                  type="button"
                                  className="text-xs text-slate-400 hover:text-red-600"
                                  onClick={() => void moderate("forum_reply", reply.id, post.id)}
                                >
                                  Moderate
                                </button>
                              </div>
                              <RichContent className="mt-2 text-sm text-slate-700">{reply.body}</RichContent>
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
                          help="Markdown + LaTeX supported."
                          value={replyBody}
                          onChange={setReplyBody}
                          required
                          minHeightClass="min-h-[7rem]"
                          placeholder={`Reply publicly as ${displayName}…`}
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
              A display name is required before posting or replying. It will be visible publicly and
              saved only in this browser.
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
    </div>
  );
}
