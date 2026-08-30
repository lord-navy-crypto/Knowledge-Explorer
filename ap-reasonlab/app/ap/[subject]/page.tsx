"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FrqPackCard from "@/components/FrqPackCard";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import RichContent from "@/components/RichContent";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { useEditorMode } from "@/components/EditorModeProvider";
import { useSiteDialog } from "@/components/SiteDialog";
import { getSubjectBySlug } from "@/data/ap-catalog";
import { getApSubjectOfficial } from "@/data/official-resources";
import type { ManagedContent, ManagedContentItem } from "@/lib/managed-types";
import { canonicalizeSubjectId, subjectIdsMatch } from "@/lib/managed-types";

const UnifiedAddContent = dynamic(() => import("@/components/UnifiedAddContent"), {
  ssr: false,
  loading: () => <span className="text-sm text-slate-500">Loading editor…</span>,
});
const ResourceEditor = dynamic(() => import("@/components/ResourceEditor"), {
  ssr: false,
  loading: () => null,
});

const sectionConfig = [
  { key: "concept", label: "Concepts", icon: "◇" },
  { key: "formula", label: "Formulas", icon: "∑" },
  { key: "practice", label: "Practice", icon: "✓" },
  { key: "hints", label: "AI Toolbox", icon: "✦" },
] as const;

type BuiltInCounts = {
  concept: number;
  formula: number;
  practice: number;
};

function SubjectWorkspaceContent() {
  const { active: editMode } = useEditorMode();
  const { confirm, dialog } = useSiteDialog();
  const params = useParams<{ subject: string }>();
  const searchParams = useSearchParams();
  const builtIn = getSubjectBySlug(params.subject);
  const [managed, setManaged] = useState<Partial<ManagedContent>>({});
  const [builtInCounts, setBuiltInCounts] = useState<BuiltInCounts | null>(null);
  const [query, setQuery] = useState("");
  const [type, setType] = useState(() => {
    const fromQuery = searchParams.get("type");
    return fromQuery === "concept" || fromQuery === "formula" || fromQuery === "practice"
      ? fromQuery
      : "all";
  });
  const [actionError, setActionError] = useState("");

  const refresh = useCallback(() => {
    fetch(
      `/api/managed-study?view=subject-content&subject=${encodeURIComponent(params.subject)}`,
      { cache: "no-store" }
    )
      .then((response) => response.json())
      .then(setManaged)
      .catch(() => undefined);
  }, [params.subject]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    let cancelled = false;
    setBuiltInCounts(null);

    fetch(`/api/ap-subject-counts/${encodeURIComponent(params.subject)}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("Count request failed"))))
      .then((data: BuiltInCounts) => {
        if (!cancelled) setBuiltInCounts(data);
      })
      .catch(() => {
        if (!cancelled) setBuiltInCounts({ concept: 0, formula: 0, practice: 0 });
      });

    return () => {
      cancelled = true;
    };
  }, [params.subject]);

  useEffect(() => {
    const fromQuery = searchParams.get("type");
    if (fromQuery === "concept" || fromQuery === "formula" || fromQuery === "practice") {
      setType(fromQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#subject-content") {
      requestAnimationFrame(() => {
        document.getElementById("subject-content")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  const managedSubject = managed.subjects?.find((subject) => subject.slug === params.subject);
  const subject = builtIn
    ? builtIn
    : managedSubject
      ? {
          ...managedSubject,
          shortName: managedSubject.shortName || managedSubject.name,
          description: managedSubject.description || "Managed AP subject workspace.",
          icon: managedSubject.icon || "◇",
        }
      : undefined;

  useEffect(() => {
    if (!subject) return;
    const current = JSON.parse(localStorage.getItem("results-recent-subjects") || "[]") as string[];
    localStorage.setItem(
      "results-recent-subjects",
      JSON.stringify(
        [params.subject, ...current.filter((slug) => slug !== params.subject)].slice(0, 6)
      )
    );
  }, [params.subject, subject]);

  const subjectName = subject?.name || "";
  const managedSubjectId = canonicalizeSubjectId(
    managedSubject?.id || managedSubject?.slug || params.subject
  );

  const items = useMemo(
    () =>
      (managed.contentItems || []).filter(
        (item) =>
          subjectIdsMatch(item.subjectId, managedSubjectId) &&
          !item.deletedAt &&
          item.status === "published"
      ),
    [managed.contentItems, managedSubjectId]
  );
  const filteredItems = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return items
      .filter(
        (item) =>
          (type === "all" || item.type === type) &&
          item.type !== "document" &&
          (!needle ||
            `${item.title} ${item.content} ${item.tags.join(" ")}`.toLowerCase().includes(needle))
      )
      .sort((a, b) => a.order - b.order || b.updatedAt - a.updatedAt);
  }, [items, query, type]);

  async function deleteContentItem(item: ManagedContentItem) {
    const ok = await confirm({
      title: "Delete content?",
      message: `Delete “${item.title}”? It can be restored from Manage → Recycle Bin.`,
      confirmLabel: "Delete",
      danger: true,
    });
    if (!ok) return;
    setActionError("");
    try {
      const response = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", target: "content_item", id: item.id }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Delete failed");
      refresh();
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "Delete failed");
    }
  }

  if (!subject) {
    return (
      <div className="card">
        <h1 className="text-xl font-bold">Subject not found</h1>
        <Link href="/ap" className="mt-3 inline-block text-brand-600">
          Return to AP subjects
        </Link>
      </div>
    );
  }

  const managedCounts = {
    concept: items.filter((item) => item.type === "concept").length,
    formula: items.filter((item) => item.type === "formula").length,
    practice: items.filter((item) => item.type === "practice").length,
  };

  const counts: Record<string, number> = {
    concept: (builtInCounts?.concept ?? 0) + managedCounts.concept,
    formula: (builtInCounts?.formula ?? 0) + managedCounts.formula,
    practice: (builtInCounts?.practice ?? 0) + managedCounts.practice,
    hints: 1,
  };

  const hrefFor = (key: string) => {
    if (key === "concept") return `/concepts?subject=${encodeURIComponent(subjectName)}`;
    if (key === "formula") return `/formulas?subject=${encodeURIComponent(subjectName)}`;
    if (key === "practice") return `/practice?subject=${encodeURIComponent(subjectName)}`;
    if (key === "hints") return `/hints?subject=${encodeURIComponent(subjectName)}&apTask=advice`;
    return `#${key}`;
  };

  const isStatistics = params.subject === "statistics" || subjectName === "AP Statistics";

  return (
    <div className="space-y-7">
      <Breadcrumbs items={[{ label: "AP", href: "/ap" }, { label: subject.shortName }]} />
      <section className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-indigo-50 p-6 md:p-8">
        <div className="max-w-3xl">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-2xl font-bold text-white">
            {subject.icon}
          </span>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">{subject.name}</h1>
          <p className="mt-2 text-slate-600">{subject.description}</p>
        </div>
      </section>

      <OfficialResourceLinks block={getApSubjectOfficial(params.subject, subjectName)} />
      {isStatistics ? <FrqPackCard /> : null}

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {sectionConfig.map((section) => (
          <Link key={section.key} href={hrefFor(section.key)} className="card-hover flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-xl font-bold text-brand-700">
              {section.icon}
            </span>
            <div>
              <h2 className="font-semibold">{section.label}</h2>
              <p className="text-sm text-slate-500">
                {section.key === "practice"
                  ? "Sets, drills & exam & paper"
                  : section.key === "hints"
                    ? `${counts[section.key]} available`
                    : builtInCounts
                      ? `${counts[section.key]} available`
                      : "Loading count…"}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <section id="media-frame" className="space-y-3 scroll-mt-24">
        <div>
          <h2 className="section-title">Pictures, documents &amp; files</h2>
          <p className="mt-1 text-sm text-slate-600">
            In-page storage for this AP subject — images, files, and documents in three vertical
            columns; upload and download anytime.
          </p>
        </div>
        <UnifiedMediaFrame
          title={`${subject.shortName} · pictures, documents & files`}
          folderArea="ap-subject"
          spaceKey={subjectName}
          defaultSubject={subjectName}
          alsoShow={["document", "folder"]}
          collapsedByDefault
        />
      </section>

      <section id="subject-content" className="space-y-4">
        <div>
          <h2 className="section-title">Subject content</h2>
          <p className="mt-1 text-sm text-slate-500">
            Search concepts, formulas, and practice published through Manage. Documents live in the
            storage panel above.
          </p>
        </div>
        <div className="card grid gap-3 md:grid-cols-2">
          <input
            type="search"
            className="input md:col-span-2"
            placeholder="Search title, content, or tags…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select
            className="input md:col-span-2"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="all">All types</option>
            {["concept", "formula", "practice"].map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        {actionError && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{actionError}</p>}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredItems.map((item: ManagedContentItem) => (
            <article key={item.id} className="card min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  <span className="badge">{item.type}</span>
                  <span className="badge">{item.difficulty}</span>
                </div>
                {editMode && (
                  <div className="flex items-center gap-1">
                    <ResourceEditor
                      target="content_item"
                      item={item}
                      onSaved={() => refresh()}
                    />
                    <button
                      type="button"
                      className="btn-ghost px-2 py-1 text-xs text-red-600"
                      onClick={() => void deleteContentItem(item)}
                    >
                      − Delete
                    </button>
                  </div>
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <div className="mt-2 max-h-[65vh] overflow-auto overscroll-contain">
                <RichContent className="text-sm">{item.content}</RichContent>
              </div>
              {item.tags.length > 0 && (
                <p className="mt-3 text-xs text-slate-500">{item.tags.join(" · ")}</p>
              )}
            </article>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="card text-sm text-slate-500">
            No managed content matches these filters yet. Built-in materials remain available through
            the section cards above.
          </div>
        )}
      </section>

      <section className="card flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-semibold text-slate-900">Add content for this subject</h2>
          <p className="mt-1 text-sm text-slate-500">
            Editors can publish concepts, formulas, and practice here. Use the storage panel for documents and files.
          </p>
        </div>
        {editMode ? (
          <UnifiedAddContent subjectId={managedSubjectId} subjectName={subjectName} onSaved={refresh} />
        ) : (
          <span className="text-xs text-slate-400">Editor tools load only in edit mode.</span>
        )}
      </section>
      {dialog}
    </div>
  );
}

export default function SubjectWorkspacePage() {
  return (
    <Suspense fallback={<div className="text-sm text-slate-500">Loading subject workspace...</div>}>
      <SubjectWorkspaceContent />
    </Suspense>
  );
}
