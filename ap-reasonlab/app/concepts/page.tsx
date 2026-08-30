"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FolderGrid from "@/components/FolderGrid";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import RichContent from "@/components/RichContent";
import { ROOT_SPACE, isFolderSpace, spaceFromSearchParams } from "@/lib/storage-space";
import { subjectsMatch } from "@/lib/managed-types";

type Filter = "all" | "concept" | "guide";
type ConceptLite = { id: string; title: string; subject: string; summary: string };
type GuideLite = { id: string; title: string; subject: string; introduction: string };
type SubjectCount = { name: string; conceptCount: number; guideCount: number };

function ConceptsContent() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const folderParam = searchParams.get("folder");
  const spaceKey = spaceFromSearchParams({ subject, folder: folderParam });
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [folderTitle, setFolderTitle] = useState<string | null>(null);
  const [managedConcepts, setManagedConcepts] = useState<ConceptLite[]>([]);
  const [managedSubjects, setManagedSubjects] = useState<string[]>([]);
  const [catalogSubjects, setCatalogSubjects] = useState<SubjectCount[]>([]);
  const [builtInConcepts, setBuiltInConcepts] = useState<ConceptLite[]>([]);
  const [guides, setGuides] = useState<GuideLite[]>([]);
  const [catalogLoading, setCatalogLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setCatalogLoading(true);
    const params = new URLSearchParams({ kind: "concepts" });
    if (subject && !isFolderSpace(spaceKey)) params.set("subject", subject);
    fetch(`/api/study-catalog?${params}`, { cache: "no-store", signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        if (subject && !isFolderSpace(spaceKey)) {
          setBuiltInConcepts(Array.isArray(data.concepts) ? data.concepts : []);
          setGuides(Array.isArray(data.guides) ? data.guides : []);
        } else {
          setCatalogSubjects(Array.isArray(data.subjects) ? data.subjects : []);
        }
      })
      .catch(() => {})
      .finally(() => { if (!controller.signal.aborted) setCatalogLoading(false); });
    return () => controller.abort();
  }, [subject, spaceKey]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const url = folderParam
          ? `/api/edit?area=concepts&space=${encodeURIComponent(spaceKey)}&view=media`
          : `/api/managed-study?view=concepts${subject ? `&subject=${encodeURIComponent(subject)}` : ""}`;
        const res = await fetch(url, { cache: "no-store" });
        const data = await res.json();
        if (cancelled) return;
        setManagedConcepts(Array.isArray(data.concepts) ? data.concepts : []);
        setManagedSubjects(Array.isArray(data.subjects) ? data.subjects.map((s: unknown) => typeof s === "string" ? s : String((s as { name?: string }).name || "")).filter(Boolean) : []);
        if (folderParam) {
          const found = (data.folders || []).find((f: { id: string }) => f.id === folderParam);
          setFolderTitle(found?.title || folderParam);
        } else setFolderTitle(null);
      } catch {
        if (!cancelled && folderParam) setFolderTitle(folderParam);
      }
    })();
    return () => { cancelled = true; };
  }, [folderParam, spaceKey, subject]);

  const subjectFolders = useMemo(() => {
    const byName = new Map(catalogSubjects.map((s) => [s.name, s]));
    managedSubjects.forEach((name) => { if (!byName.has(name)) byName.set(name, { name, conceptCount: 0, guideCount: 0 }); });
    managedConcepts.forEach((item) => { if (!byName.has(item.subject)) byName.set(item.subject, { name: item.subject, conceptCount: 0, guideCount: 0 }); });
    return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name)).map((s) => {
      const managedCount = managedConcepts.filter((c) => subjectsMatch(c.subject, s.name)).length;
      return {
        id: s.name,
        title: s.name,
        subtitle: `${s.conceptCount + managedCount} topics · ${s.guideCount} guides · own storage`,
        count: s.conceptCount + managedCount + s.guideCount,
        href: `/concepts?subject=${encodeURIComponent(s.name)}`,
      };
    });
  }, [catalogSubjects, managedSubjects, managedConcepts]);

  const list = useMemo(() => {
    if (!subject || isFolderSpace(spaceKey)) return [];
    const items: Array<{ kind: "concept" | "guide"; id: string; title: string; summary: string; href: string }> = [];
    if (filter === "all" || filter === "concept") {
      const seen = new Set<string>();
      builtInConcepts.forEach((c) => { seen.add(c.id); items.push({ kind: "concept", id: c.id, title: c.title, summary: c.summary, href: `/concepts/${c.id}` }); });
      managedConcepts.filter((c) => subjectsMatch(c.subject, subject) && !seen.has(c.id)).forEach((c) => items.push({ kind: "concept", id: c.id, title: c.title, summary: c.summary, href: `/concepts/${c.id}` }));
    }
    if (filter === "all" || filter === "guide") guides.forEach((g) => items.push({ kind: "guide", id: g.id, title: g.title, summary: g.introduction, href: `/key-concepts/${g.id}` }));
    return items;
  }, [subject, filter, spaceKey, builtInConcepts, guides, managedConcepts]);

  const filtered = list.filter((item) => !query.trim() || `${item.title} ${item.summary}`.toLowerCase().includes(query.toLowerCase()));

  if (folderParam && isFolderSpace(spaceKey)) {
    return <div className="space-y-6"><div><Link href={subject ? `/concepts?subject=${encodeURIComponent(subject)}` : "/concepts"} className="text-sm text-brand-600 hover:underline">← Back</Link><h1 className="mt-2 text-3xl font-bold">{folderTitle || "Folder"}</h1><p className="mt-2 text-slate-600">Storage for this folder only. Use <strong>+ Add topic</strong> and paste one complete Markdown document with optional LaTeX math.</p></div><UnifiedMediaFrame alsoShow={["topic", "concept", "document", "folder"]} defaultSubject={subject || folderTitle || "Custom"} folderArea="concepts" spaceKey={spaceKey} spaceBasePath="/concepts" title="Folder · pictures, documents, files & topics" onSubjectsChange={setManagedSubjects} collapsedByDefault /></div>;
  }

  if (!subject) {
    return <div className="space-y-6"><div><Link href="/ap" className="text-sm text-brand-600 hover:underline">← AP Area</Link><h1 className="mt-2 text-3xl font-bold">Concepts</h1><p className="mt-2 text-slate-600">Open a subject folder to add topics. Built-in catalog counts are now loaded from the server instead of shipping the whole library to the browser.</p><div className="mt-4 rounded-2xl border border-brand-200 bg-brand-50/80 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4"><div><p className="font-semibold text-brand-900">Key guides</p><p className="mt-1 text-sm text-brand-900/80">Curated study guides with formulas and exam tips.</p></div><Link href="/key-concepts" className="mt-3 inline-flex shrink-0 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 sm:mt-0">Browse key guides →</Link><Link href="/ap/writing-frameworks" className="mt-3 inline-flex shrink-0 rounded-xl border border-brand-300 bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50 sm:mt-0">Writing frameworks →</Link></div></div><UnifiedMediaFrame alsoShow={["subject", "folder", "document"]} folderArea="concepts" spaceKey={ROOT_SPACE} spaceBasePath="/concepts" title="Concepts hub · pictures, documents, files & subject folders" onSubjectsChange={setManagedSubjects} collapsedByDefault />{catalogLoading && subjectFolders.length === 0 ? <p className="text-sm text-slate-500">Loading subject folders…</p> : <FolderGrid folders={subjectFolders} emptyText="No subject folders yet. Add a subject above." />}</div>;
  }

  return <div className="space-y-6"><div><Link href="/concepts" className="text-sm text-brand-600 hover:underline">← All subject folders</Link><h1 className="mt-2 text-3xl font-bold">{subject}</h1><p className="mt-2 text-slate-600">Use <strong>+ Add topic</strong> to add a topic to this subject. Only this subject’s built-in study data is fetched.</p></div><UnifiedMediaFrame alsoShow={["topic", "concept", "document", "folder"]} defaultSubject={subject} folderArea="concepts" spaceKey={spaceKey} spaceBasePath="/concepts" title={`${subject} · pictures, documents, files & topics`} onSubjectsChange={setManagedSubjects} collapsedByDefault /><div className="flex flex-wrap gap-2">{([ ["all", "All"], ["concept", "Topics"], ["guide", "Guides"] ] as const).map(([value, label]) => <button key={value} type="button" onClick={() => setFilter(value)} className={filter === value ? "filter-pill-active" : "filter-pill"}>{label}</button>)}</div><input type="text" className="input" placeholder="Search topics in this subject..." value={query} onChange={(e) => setQuery(e.target.value)} />{catalogLoading ? <p className="text-sm text-slate-500">Loading {subject} topics…</p> : <div className="grid gap-3 sm:grid-cols-2">{filtered.length > 0 ? filtered.map((item) => <Link key={`${item.kind}-${item.id}`} href={item.href} className="card block transition hover:border-brand-300"><span className="badge">{item.kind === "concept" ? "Topic" : "Guide"}</span><h2 className="mt-3 text-lg font-semibold">{item.title}</h2><RichContent clampLines={2} className="mt-2 text-sm text-slate-600">{item.summary}</RichContent></Link>) : <p className="text-sm text-slate-500">No topics in this folder yet. Use + Add topic above.</p>}</div>}</div>;
}

export default function ConceptsPage() {
  return <Suspense fallback={<div className="text-sm text-slate-500">Loading concepts...</div>}><ConceptsContent /></Suspense>;
}
