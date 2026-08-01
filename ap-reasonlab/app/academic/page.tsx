"use client";

import Link from "next/link";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";

const academicTools = [
  {
    href: "/forum?tab=box",
    title: "My box (in Forum)",
    description:
      "Private notes, documents, and pictures in this browser — plus Random Draw. Opens inside the Forum hub.",
  },
  {
    href: "/forum?tab=shared",
    title: "Shared library (in Forum)",
    description:
      "Public materials everyone can upload and view — now part of the Forum hub alongside discussions.",
  },
  {
    href: "/forum",
    title: "Forum discussions",
    description: "Ask questions, share tips, and reply in public threads.",
  },
  {
    href: "/hints?tool=grapher",
    title: "Function plotter",
    description: "In AI Toolbox — plot y = f(x) with zoom and trace.",
  },
];

export default function AcademicPlatformPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-8 text-white shadow-lg">
        <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
          ACADEMIC PLATFORM
        </span>
        <h1 className="mt-3 text-3xl font-bold">Academic Platform</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Cross-curriculum tools. Shared materials and your private learning box now live in{" "}
          <Link href="/forum" className="font-semibold text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
            Forum
          </Link>
          . Page storage below still uses a change code for + add.
        </p>
      </section>

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea="academic"
        spaceKey="_root"
        spaceBasePath="/academic"
        title="Academic · pictures, documents & files"
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {academicTools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="card-hover group flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl">
              →
            </span>
            <div>
              <h2 className="font-semibold group-hover:text-brand-700">{tool.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
