"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ForumDiscussions, parseForumDiscussionCategory } from "@/components/ForumDiscussions";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrivateLearningBoxPanel, {
  type LearningBoxView,
} from "@/components/PrivateLearningBoxPanel";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import ForumCompanionStrip from "@/components/ForumCompanionStrip";
import { preloadForumComposer } from "@/lib/forum-local";
import { spaceFromSearchParams } from "@/lib/storage-space";

export type ForumTab = "discussions" | "shared" | "box";

const TABS: { id: ForumTab; label: string; blurb: string }[] = [
  {
    id: "discussions",
    label: "Discussions",
    blurb: "Public threads — questions, tips, and replies.",
  },
  {
    id: "shared",
    label: "Shared library",
    blurb: "Public materials everyone can upload and download.",
  },
  {
    id: "box",
    label: "My box",
    blurb: "Private notes & pictures in this browser only.",
  },
];

function parseTab(raw: string | null): ForumTab {
  if (raw === "shared" || raw === "materials" || raw === "library") return "shared";
  if (raw === "box" || raw === "learning" || raw === "my-box") return "box";
  return "discussions";
}

function parseBoxView(raw: string | null): LearningBoxView {
  if (raw === "pictures" || raw === "random" || raw === "library") return raw;
  return "library";
}

function ForumHub() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = useMemo(() => parseTab(searchParams.get("tab")), [searchParams]);
  const discussionCategory = useMemo(
    () => parseForumDiscussionCategory(searchParams.get("tag")),
    [searchParams]
  );
  const boxView = useMemo(() => parseBoxView(searchParams.get("view")), [searchParams]);
  const sharedSpaceKey = useMemo(
    () =>
      spaceFromSearchParams({
        subject: searchParams.get("subject"),
        folder: searchParams.get("folder"),
      }),
    [searchParams]
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function setTab(next: ForumTab) {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "discussions") params.delete("tab");
    else params.set("tab", next);
    if (next !== "box") params.delete("view");
    const qs = params.toString();
    router.replace(qs ? `/forum?${qs}` : "/forum", { scroll: false });
  }

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Forum" }]} />
      <header className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-5 py-7 sm:px-8">
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-violet-100/50 blur-3xl"
          aria-hidden
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Community hub
        </p>
        <h1 className="relative mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Forum
        </h1>
        <p className="relative mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          Discussions (drafts and starred threads stay in this browser), a public Shared library, and
          My box (private to this browser only). Fence code to run it in the one Code editor.
        </p>
      </header>

      <ForumCompanionStrip />

      <nav
        className="sticky top-16 z-10 -mx-1 flex gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white/95 p-1.5 shadow-sm backdrop-blur scroll-mt-24"
        aria-label="Forum sections"
      >
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "min-w-[7.5rem] flex-1 rounded-lg bg-brand-600 px-3 py-2.5 text-left text-white shadow-sm transition"
                  : "min-w-[7.5rem] flex-1 rounded-lg px-3 py-2.5 text-left text-slate-600 transition hover:bg-slate-50"
              }
            >
              <span className="block text-sm font-semibold">{t.label}</span>
              <span className={`mt-0.5 block text-[11px] leading-snug ${active ? "text-white/85" : "text-slate-500"}`}>
                {t.blurb}
              </span>
            </button>
          );
        })}
      </nav>

      {!mounted ? (
        <div className="card text-sm text-slate-500">Loading Forum…</div>
      ) : tab === "discussions" ? (
        <ForumDiscussions embedded initialCategory={discussionCategory} />
      ) : tab === "shared" ? (
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Shared library</h2>
            <p className="mt-1 text-sm text-slate-600">
              Public documents, files, and folders. Upload without a change code. Each row has a
              Delete button — deleting still asks for a change code.
            </p>
            <p className="mt-2 text-sm text-amber-800">
              Uploads are visible to everyone. Do not share private information or material you do
              not have permission to publish.
            </p>
            <button
              type="button"
              className="btn-secondary mt-3 text-sm"
              onClick={() => {
                preloadForumComposer({
                  title: "Shared library file",
                  body: "I found / uploaded a file in Shared library. Let’s discuss it.\n\n(Attach or name the file after you post.)",
                  postCategory: "resources",
                });
                setTab("discussions");
              }}
            >
              Discuss a Shared file
            </button>
          </div>
          <UnifiedMediaFrame
            alsoShow={["document", "folder"]}
            folderArea="materials"
            spaceKey={sharedSpaceKey}
            spaceBasePath="/forum?tab=shared"
            title="Shared library · pictures, documents & files"
            allowPublicContributions
          />
          <p className="text-xs text-slate-500">
            Prefer private notes?{" "}
            <button type="button" className="text-brand-600 hover:underline" onClick={() => setTab("box")}>
              Open My box
            </button>
            {" "}
            (browser-local only). You can also attach files directly on Discussion threads.
          </p>
        </section>
      ) : (
        <section className="space-y-4">
          <PrivateLearningBoxPanel embedded initialView={boxView} />
          <p className="text-xs text-slate-500">
            Want to share a file with everyone?{" "}
            <button type="button" className="text-brand-600 hover:underline" onClick={() => setTab("shared")}>
              Switch to Shared library
            </button>
            {" · "}
            <Link href="/forum" className="text-brand-600 hover:underline">
              Back to Discussions
            </Link>
          </p>
        </section>
      )}
    </div>
  );
}

export default function ForumPage() {
  return (
    <Suspense fallback={<div className="card text-sm text-slate-500">Loading Forum…</div>}>
      <ForumHub />
    </Suspense>
  );
}
