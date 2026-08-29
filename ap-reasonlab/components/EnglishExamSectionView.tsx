import Link from "next/link";
import EnglishPageHeader from "@/components/EnglishPageHeader";
import EnglishPracticeBank from "@/components/EnglishPracticeBank";
import EnglishResourcePanel from "@/components/EnglishResourcePanel";
import { questionsForSection } from "@/lib/english-question-bank";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import ToeflListenReplay from "@/components/ToeflListenReplay";
import ToeflSpeakShadow from "@/components/ToeflSpeakShadow";
import ToeflWritingTimers from "@/components/ToeflWritingTimers";
import type { EnglishExamConfig, EnglishExamSection } from "@/data/english-exam-sections";
import { getExamSectionOfficial } from "@/data/official-resources";
import { sectionTimerMinutes } from "@/lib/english-section-timers";
import { examFormatBlurb } from "@/lib/english-exam-format";

type LaneCopy = {
  eyebrow: string;
  headerDescription: string;
  guideTitle: string;
  guideBody: string;
  uploadTitle: string;
};

function toeflLaneCopy(sectionId: string): LaneCopy {
  switch (sectionId) {
    case "reading":
      return {
        eyebrow: "English · TOEFL · Daily practice",
        headerDescription:
          "Practice Complete the Words, campus/daily-life texts, and short academic passages in official TOEFL iBT shape. Upload extra articles below.",
        guideTitle: "Reading · official task types",
        guideBody:
          "In-site items follow ETS task names: Complete the Words, Read in Daily Life, and Read an Academic Passage. Upload extra TOEFL-shaped passages (PDF, Word, Markdown, or text) in the folder below.",
        uploadTitle: "Upload TOEFL reading articles",
      };
    case "writing":
      return {
        eyebrow: "English · TOEFL · Daily practice",
        headerDescription:
          "Practice Build a Sentence, Write an Email, and Write for an Academic Discussion. Upload extra prompts (题目) and model essays (范文) below.",
        guideTitle: "Writing · official task types",
        guideBody:
          "In-site items match ETS writing tasks. Use the 7-minute and 10-minute timers for timed drafts. Clear file names (e.g. Prompt-…, Model-…) help students find 题目 and 范文.",
        uploadTitle: "Upload writing prompts & model essays (范文)",
      };
    case "listening":
      return {
        eyebrow: "English · TOEFL · Daily practice",
        headerDescription:
          "Practice Listen and Choose a Response, conversations, announcements, and academic talks (transcripts stand in for audio). Replay extra scripts with the machine voice.",
        guideTitle: "Listening · official task types",
        guideBody:
          "In-site items use ETS listening task names. Upload audio or transcripts below. Paste a script into the replay box so the browser can read it aloud.",
        uploadTitle: "Upload listening materials (audio / transcript)",
      };
    case "speaking":
      return {
        eyebrow: "English · TOEFL · Daily practice",
        headerDescription:
          "Practice Listen and Repeat and Take an Interview. Shadow extra dialogues line by line with the model voice.",
        guideTitle: "Speaking · official task types",
        guideBody:
          "In-site items follow ETS speaking tasks. Load dialogues or tongue twisters, play each line, shadow the model, and optionally score your reading with the mic.",
        uploadTitle: "Upload speaking dialogues / shadow sheets (optional)",
      };
    default:
      return {
        eyebrow: "English · TOEFL · Daily practice",
        headerDescription: "Daily English practice materials for this lane.",
        guideTitle: "TOEFL practice lane",
        guideBody: "Upload materials into this folder.",
        uploadTitle: "Upload files",
      };
  }
}

export default function EnglishExamSectionView({
  exam,
  section,
}: {
  exam: EnglishExamConfig;
  section: EnglishExamSection;
}) {
  const isToefl = exam.id === "toefl";
  const lane = isToefl ? toeflLaneCopy(section.id) : null;
  const official = getExamSectionOfficial(exam.id, section.id);
  const sectionMcqs = questionsForSection(exam.id, section.id);
  const timedMinutes = sectionTimerMinutes(exam.id, section.id);

  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow={
          lane?.eyebrow ?? `English · ${exam.title} · Practice questions`
        }
        title={`${exam.title} · ${section.title}`}
        description={
          lane?.headerDescription ??
          `${section.description} Uploads below stay in this subject’s file folder — practice questions for ${section.title} go here automatically.`
        }
      />

      <nav aria-label={`${exam.title} subject folders`} className="flex flex-wrap gap-2">
        <Link
          href={exam.hubHref}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 hover:border-brand-300"
        >
          All subjects
        </Link>
        {exam.sections.map((s) => {
          const active = s.id === section.id;
          return (
            <Link
              key={s.id}
              href={s.href}
              className={
                active
                  ? "rounded-lg border border-brand-700 bg-brand-700 px-3 py-1.5 text-sm font-medium text-white"
                  : "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-brand-300"
              }
            >
              {s.title}
            </Link>
          );
        })}
      </nav>

      {lane ? (
        <section className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-sm text-emerald-950">
          <p className="font-semibold">{lane.guideTitle}</p>
          <p className="mt-1 text-emerald-900/85">{lane.guideBody}</p>
          <p className="mt-2 text-xs text-emerald-800/80">
            Design: official ETS task names for in-site items; uploads stay in this lane for extra
            materials.
          </p>
        </section>
      ) : (
        <section className="rounded-xl border border-rose-200 bg-rose-50/70 px-4 py-3 text-sm text-rose-950">
          <p className="font-semibold">{section.title} · own file folder</p>
          <p className="mt-1 text-rose-900/85">
            This page is only for {exam.title} · {section.title}. Upload practice questions, PDFs,
            images, audio, or notes in the panel below — they stay in this subject folder. Other
            subjects have separate folders and upload pages.
          </p>
        </section>
      )}

      {official ? (
        <OfficialResourceLinks block={official} tone={isToefl ? "emerald" : "rose"} />
      ) : null}

      {sectionMcqs.length > 0 ? (
        <EnglishPracticeBank
          title={`${section.title} · practice questions`}
          description={`${sectionMcqs.length} in-site MCQ items tagged for ${section.title}. Upload lanes below for your own materials.`}
          questions={sectionMcqs}
          storageKey={`${exam.id}-${section.id}`}
          timedMinutes={timedMinutes}
          formatNote={examFormatBlurb(exam.id)}
        />
      ) : null}

      {/* Reading / Writing / Listening: upload slot first. Speaking: shadow tool first. */}
      {isToefl && section.id === "speaking" ? <ToeflSpeakShadow /> : null}
      {isToefl && section.id === "writing" ? <ToeflWritingTimers /> : null}

      <EnglishResourcePanel
        space={section.spaceKey}
        basePath={section.href}
        title={lane?.uploadTitle ?? `${exam.title} · ${section.title} · upload files`}
      />

      {isToefl && section.id === "listening" ? <ToeflListenReplay /> : null}

      <p className="text-xs text-slate-500">
        <Link href={exam.hubHref} className="text-brand-600 hover:underline">
          Back to {exam.title}
        </Link>
        {" · "}
        <Link href="/english#skills" className="text-brand-600 hover:underline">
          Basic skills
        </Link>
      </p>
    </div>
  );
}
