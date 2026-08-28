"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { GuideLink } from "@/data/user-guide";

export type GuideSection = {
  id: string;
  title: string;
  preview: string;
  body?: string;
  steps?: string[];
  links: GuideLink[];
};

type Props = {
  title: string;
  subtitle: string;
  lead: string;
  sections: GuideSection[];
  /** Extra block rendered after intro (e.g. tools grid). */
  extra?: React.ReactNode;
  breadcrumbLabel: string;
  locked?: boolean;
  lockMessage?: React.ReactNode;
};

function LinkGrid({ links }: { links: GuideLink[] }) {
  if (!links.length) return null;
  return (
    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <Link
            href={link.href}
            className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition hover:border-brand-300 hover:bg-brand-50/40"
          >
            <span className="text-sm font-semibold text-brand-800 group-hover:underline">
              {link.label} →
            </span>
            {link.detail ? (
              <span className="mt-0.5 text-xs leading-snug text-slate-600">{link.detail}</span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function GuidePageLayout({
  title,
  subtitle,
  lead,
  sections,
  extra,
  breadcrumbLabel,
  locked,
  lockMessage,
}: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  const toc = useMemo(() => sections.map((s) => ({ id: s.id, title: s.title })), [sections]);

  useEffect(() => {
    if (locked || typeof window === "undefined") return;
    const nodes = sections
      .map((s) => document.getElementById(`guide-${s.id}`))
      .filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveId(visible.target.id.replace(/^guide-/, ""));
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [locked, sections]);

  if (locked && lockMessage) {
    return (
      <div className="space-y-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: breadcrumbLabel }]} />
        {lockMessage}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: breadcrumbLabel }]} />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          {subtitle}
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h1>
        <p className="max-w-3xl text-slate-600">{lead}</p>
      </header>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <nav
          className="lg:sticky lg:top-20 lg:w-56 lg:shrink-0"
          aria-label="Guide contents"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">On this page</p>
          <ul className="mt-2 space-y-1 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#guide-${item.id}`}
                  className={`block rounded-lg px-2 py-1.5 ${
                    activeId === item.id
                      ? "bg-brand-50 font-medium text-brand-900"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
            {extra ? (
              <li>
                <a
                  href="#guide-tools"
                  className="block rounded-lg px-2 py-1.5 text-slate-600 hover:bg-slate-50"
                >
                  All Convenient Tools
                </a>
              </li>
            ) : null}
          </ul>
        </nav>

        <div className="min-w-0 flex-1 space-y-8">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={`guide-${section.id}`}
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
            >
              <p className="text-xs font-semibold text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-1 font-display text-xl font-semibold text-slate-900">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{section.preview}</p>
              {section.body ? (
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.body}</p>
              ) : null}
              {section.steps?.length ? (
                <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-slate-700">
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ) : null}
              <LinkGrid links={section.links} />
            </section>
          ))}

          {extra ? (
            <section id="guide-tools" className="scroll-mt-24">
              {extra}
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
