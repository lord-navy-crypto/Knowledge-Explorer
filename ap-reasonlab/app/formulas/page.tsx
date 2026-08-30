"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FolderGrid from "@/components/FolderGrid";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { ROOT_SPACE, spaceFromSearchParams } from "@/lib/storage-space";
import { subjectsMatch } from "@/lib/managed-types";
import RichContent, { FormulaMath } from "@/components/RichContent";
import type { Formula } from "@/lib/types";

type SubjectCount = { name: string; formulaCount: number };

function FormulasContent() {
  const searchParams = useSearchParams();
  const activeSubject = searchParams.get("subject");
  const folderParam = searchParams.get("folder");
  const spaceKey = spaceFromSearchParams({ subject: activeSubject, folder: folderParam });
  const [managedSubjects, setManagedSubjects] = useState<string[]>([]);
  const [managedFormulas, setManagedFormulas] = useState<Formula[]>([]);
  const [builtInFormulas, setBuiltInFormulas] = useState<Formula[]>([]);
  const [catalogSubjects, setCatalogSubjects] = useState<SubjectCount[]>([]);
  const [query, setQuery] = useState("");
  const [catalogLoading, setCatalogLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setCatalogLoading(true);
    const params = new URLSearchParams({ kind: "formulas" });
    if (activeSubject) params.set("subject", activeSubject);
    fetch(`/api/study-catalog?${params}`, { cache: "no-store", signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        if (activeSubject) setBuiltInFormulas(Array.isArray(data.formulas) ? data.formulas : []);
        else setCatalogSubjects(Array.isArray(data.subjects) ? data.subjects : []);
      })
      .catch(() => {})
      .finally(() => { if (!controller.signal.aborted) setCatalogLoading(false); });
    return () => controller.abort();
  }, [activeSubject]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/managed-study?view=formulas${activeSubject ? `&subject=${encodeURIComponent(activeSubject)}` : ""}`, { cache: "no-store" });
        const data = await res.json();
        if (cancelled) return;
        setManagedSubjects(Array.isArray(data.subjects) ? data.subjects.map((s: unknown) => typeof s === "string" ? s : String((s as { name?: string }).name || "")).filter(Boolean) : []);
        setManagedFormulas(Array.isArray(data.formulas) ? data.formulas : []);
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [spaceKey, activeSubject]);

  const subjectFolders = useMemo(() => {
    const byName = new Map(catalogSubjects.map((s) => [s.name, s]));
    managedSubjects.forEach((name) => { if (!byName.has(name)) byName.set(name, { name, formulaCount: 0 }); });
    managedFormulas.forEach((item) => { if (!byName.has(item.subject)) byName.set(item.subject, { name: item.subject, formulaCount: 0 }); });
    return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name)).map((s) => ({
      id: s.name,
      title: s.name,
      subtitle: "Open to browse formulas by unit · + to add",
      count: s.formulaCount + managedFormulas.filter((f) => subjectsMatch(f.subject, s.name)).length,
      href: `/formulas?subject=${encodeURIComponent(s.name)}`,
    }));
  }, [catalogSubjects, managedSubjects, managedFormulas]);

  const filtered = useMemo(() => {
    if (!activeSubject) return [];
    const seen = new Set(builtInFormulas.map((f) => f.id));
    return [...builtInFormulas, ...managedFormulas.filter((f) => subjectsMatch(f.subject, activeSubject) && !seen.has(f.id))];
  }, [activeSubject, builtInFormulas, managedFormulas]);

  const byUnit = useMemo(() => filtered.reduce<Record<string, Formula[]>>((acc, f) => {
    if (!acc[f.unit]) acc[f.unit] = [];
    acc[f.unit].push(f);
    return acc;
  }, {}), [filtered]);

  const visibleUnits = useMemo(() => {
    if (!query.trim()) return Object.entries(byUnit);
    const q = query.toLowerCase();
    return Object.entries(byUnit).filter(([unit, items]) => unit.toLowerCase().includes(q) || items.some((f) => `${f.name} ${f.expression}`.toLowerCase().includes(q)));
  }, [byUnit, query]);

  if (!activeSubject) {
    return <div className="space-y-6"><div><Link href="/ap" className="text-sm text-brand-600 hover:underline">← AP Area</Link><h1 className="mt-2 text-3xl font-bold">Formulas</h1><p className="mt-2 text-slate-600">Open a subject folder to add formulas. Built-in formula data now stays server-side until you open one subject.</p></div><UnifiedMediaFrame alsoShow={["subject", "folder", "document"]} folderArea="formulas" spaceKey={ROOT_SPACE} spaceBasePath="/formulas" title="Formulas hub · pictures, documents, files & subject folders" onSubjectsChange={setManagedSubjects} collapsedByDefault />{catalogLoading && subjectFolders.length === 0 ? <p className="text-sm text-slate-500">Loading subject folders…</p> : <FolderGrid folders={subjectFolders} />}</div>;
  }

  return <div className="space-y-6"><div><Link href="/formulas" className="text-sm text-brand-600 hover:underline">← All subject folders</Link><h1 className="mt-2 text-3xl font-bold">{activeSubject}</h1><p className="mt-2 text-slate-600">Formulas for this subject, grouped by unit. Only this subject’s built-in formulas are fetched.</p></div><UnifiedMediaFrame alsoShow={["formula", "document", "folder"]} folderArea="formulas" defaultSubject={activeSubject || undefined} spaceKey={spaceKey} spaceBasePath="/formulas" title={`${activeSubject} · pictures, documents, files & formulas`} onSubjectsChange={setManagedSubjects} collapsedByDefault /><input type="text" className="input" placeholder="Search formulas in this subject..." value={query} onChange={(e) => setQuery(e.target.value)} />{catalogLoading ? <p className="text-sm text-slate-500">Loading {activeSubject} formulas…</p> : <div className="space-y-8">{visibleUnits.length > 0 ? visibleUnits.map(([unit, items]) => <section key={unit} className="space-y-3"><h2 className="flex items-center gap-2 text-xl font-semibold text-brand-800"><span aria-hidden>📁</span> {unit}</h2><div className="grid gap-4">{items.map((f) => <article key={f.id} className="card space-y-2"><div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-semibold">{f.name}</h3>{f.id.startsWith("m-formula") ? <span className="badge-generated">ADDED</span> : null}{f.relatedConceptId ? <Link href={`/concepts/${f.relatedConceptId}`} className="text-xs text-brand-600 hover:underline">Related concept →</Link> : null}</div>{f.content ? <div className="max-h-[65vh] overflow-auto overscroll-contain rounded-xl border border-slate-100 bg-slate-50 p-4"><RichContent>{f.content}</RichContent></div> : <FormulaMath expression={f.expression} />}{!f.content ? <div className="text-sm text-slate-600"><span className="font-medium">Variables:</span> <RichContent className="inline [&>p]:inline">{f.variables}</RichContent></div> : null}{!f.content ? <div className="text-sm text-slate-600"><span className="font-medium">When to use:</span> <RichContent className="inline [&>p]:inline">{f.whenToUse}</RichContent></div> : null}<p className="text-xs text-slate-400">{f.sourceNote}</p></article>)}</div></section>) : <p className="text-sm text-slate-500">No formulas yet. Use + Add formula above.</p>}</div>}<section className="card bg-brand-50/50"><h2 className="section-title">Practice this subject</h2><p className="text-sm text-slate-600">Open the matching subject folder in Practice for drills and generated sets.</p><Link href={`/practice?subject=${encodeURIComponent(activeSubject)}`} className="btn-primary mt-3 inline-block">Open practice folder</Link></section></div>;
}

export default function FormulasPage() {
  return <Suspense fallback={<div className="text-sm text-slate-500">Loading formula reference...</div>}><FormulasContent /></Suspense>;
}
