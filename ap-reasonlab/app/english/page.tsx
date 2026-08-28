import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnglishResourcePanel from "@/components/EnglishResourcePanel";
import {
  englishExamAreas,
  englishPracticeTools,
  englishSkillAreas,
} from "@/data/english-content";

export default function EnglishHubPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "AP & English", href: "/explore/ap-english" },
          { label: "English" },
        ]}
      />

      <section className="rounded-2xl border border-sky-200 bg-sky-50/80 px-5 py-4 text-sm text-sky-950">
        <p className="font-semibold">TOEFL &amp; SAT MCQ banks are live (120+ each)</p>
        <p className="mt-1 text-sky-900/85">
          Exam folders, vocabulary, grammar, and English AI are ready. Upload more lanes via Manage,
          or ask for sets on Forum — built-in banks already include hand-curated and challenge-tier
          items.
        </p>
      </section>

      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-blue-900 to-brand-700 px-6 py-10 text-white shadow-xl md:px-10">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          English Learning
        </span>
        <h1 className="mt-4 text-4xl font-bold">English Learning Hub</h1>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-blue-100">
          Two study lanes plus a tutor: <strong className="text-white">Exams</strong> for TOEFL
          daily materials &amp; SAT practice, <strong className="text-white">Skills</strong> for
          core English, and <strong className="text-white">English AI</strong> when you want
          feedback.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/english/ai"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-800"
          >
            Open English AI Tutor
          </Link>
          <a
            href="#exams"
            className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold"
          >
            Exam lanes
          </a>
          <a
            href="#skills"
            className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold"
          >
            Basic skills
          </a>
        </div>
      </section>

      <section id="exams" className="space-y-3 scroll-mt-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-700">
            Exams · materials &amp; practice
          </p>
          <h2 className="section-title mt-1">TOEFL · SAT</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            TOEFL is daily materials practice (articles, listening replay, writing 范文, speaking
            shadow). SAT keeps practice-set folders. Core language drills live under Basic skills.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {englishExamAreas.map((area) => (
            <Link key={area.href} href={area.href} className="card-hover group flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-sm font-bold text-rose-700">
                {area.icon}
              </span>
              <span>
                <span className="block text-lg font-semibold group-hover:text-brand-700">
                  {area.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">
                  {area.description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="skills" className="space-y-3 scroll-mt-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
            Skills · real English
          </p>
          <h2 className="section-title mt-1">Vocabulary · Grammar</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Build language ability here — words and sentences. Each page can add theory cubes and
            practice sets (same flow as AP Concepts). Writing materials live under TOEFL Writing.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {englishSkillAreas.map((area) => (
            <Link key={area.href} href={area.href} className="card-hover group flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-sm font-bold text-indigo-700">
                {area.icon}
              </span>
              <span>
                <span className="block text-lg font-semibold group-hover:text-brand-700">
                  {area.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">
                  {area.description}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4">
          <h3 className="text-sm font-semibold text-indigo-950">Skill practice tools</h3>
          <p className="mt-1 text-xs text-indigo-900/80">
            Local helpers for skills study. They are not exam practice sets.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {englishPracticeTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-xl bg-white px-3 py-2.5 text-sm shadow-sm ring-1 ring-indigo-100 hover:ring-brand-300"
              >
                <span className="font-semibold text-slate-900">{tool.title}</span>
                <span className="mt-0.5 block text-xs text-slate-600">{tool.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="tutor" className="scroll-mt-24">
        <div className="card flex flex-wrap items-center justify-between gap-4 border-brand-200 bg-brand-50/40">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              Tutor · AI
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">English AI Tutor</h2>
            <p className="mt-1 max-w-xl text-sm text-slate-600">
              Kept in AI Toolbox — writing feedback, vocab help, and strategy. Use it with either
              exam practice or skills work.
            </p>
          </div>
          <Link href="/english/ai" className="btn-primary">
            Open English AI
          </Link>
        </div>
      </section>

      <EnglishResourcePanel space="_root" title="English shared resources" />
    </div>
  );
}
