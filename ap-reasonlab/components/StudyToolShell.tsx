import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrackToolboxVisit from "@/components/TrackToolboxVisit";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
  tip?: string;
};

/** Shared chrome for /tools/* study utilities. */
export default function StudyToolShell({ title, description, children, tip }: Props) {
  return (
    <div className="space-y-6">
      <TrackToolboxVisit title={title} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: title },
        ]}
      />
      <section className="space-y-2">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="section-title">{title}</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">{description}</p>
          </div>
          <Link href="/tools" className="btn-secondary text-sm">
            ← All tools
          </Link>
        </div>
        {tip ? (
          <p className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            {tip}
          </p>
        ) : null}
      </section>
      {children}
    </div>
  );
}
