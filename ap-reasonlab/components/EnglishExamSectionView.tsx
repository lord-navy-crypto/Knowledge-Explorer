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
          "Practice Complete the Words, daily-life texts, and academic passages using current TOEFL iBT task families. Every item is labeled Exam-style or Skill drill.",
        guideTitle: "Reading · current task families",
        guideBody:
          "In-site items use Complete the Words, Read in Daily Life, and Read an Academic Passage. Items that do not fully meet the current format remain visibly labeled Skill drill instead of being presented as mock-test questions.",
        uploadTitle: "Upload TOEFL reading articles",
      };
    case "writing":
      return {
        eyebrow: "English · TOEFL · Daily practice",
        headerDescription:
          "Practice Build a Sentence, Write an Email, and Write for an Academic Discussion with actual typed responses — not substitute multiple-choice scoring.",
        guideTitle: "Writing · real response mode",
        guideBody:
          "Write first, then reveal the original reference response and scoring criteria. The 7-minute and 10-minute timers support timed drafts; simplified legacy strategy items remain labeled Skill drill.",
        uploadTitle: "Upload writing prompts & model responses",
      };
    case "listening":
      return {
        eyebrow: "English · TOEFL · Daily practice",
        headerDescription:
          "Practice current listening task families with original transcripts; browser speech can read scripts aloud when recorded audio is not available.",
        guideTitle: "Listening · current task families",
        guideBody:
          "In-site items use Listen and Choose a Response, Conversation, Announcement, and Academic Talk task families. Upload audio or transcripts below and use replay for additional listening practice.",
        uploadTitle: "Upload listening materials (audio / transcript)",
      };
    case "speaking":
      return {
        eyebrow: "English · TOEFL · Daily practice",
        headerDescription:
          "Practice Listen and Repeat and Take an Interview with an actual spoken-response workflow. Browser mic transcription is available where supported.",
        guideTitle: "Speaking · real spoken response",
        guideBody:
          "Play the prompt, answer aloud, and compare your transcript with response criteria after submitting. Mic transcription is only a practice aid, not an official TOEFL score.",
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
  const sectionQuestions = questionsForSection(exam.id, section.id);
  const timedMinutes = sectionTimerMinutes(exam.id, section.id);
  const authenticCount = sectionQuestions.filter((q) => q.authenticity === "exam_authentic").length;
  const productiveCount = sectionQuestions.filter((q) => (q.responseMode || "single_choice") !== "single_choice").length;

  return (
    <div className="space-y-8">
      <EnglishPageHeader
        eyebrow={lane?.eyebrow ?? `English · ${exam.title} · Practice questions`}
        title={`${exam.title} · ${section.title}`}
        description={
          lane?.headerDescription ??
          `${section.description} Uploads below stay in this subject’s file folder — practice questions for ${section.title} go here automatically.`
        }
      />

      <nav aria-label={`${exam.title} subject folders`} className="flex flex-wrap gap-2">
        <Link href={exam.hubHref} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 hover:border-brand-300">
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
            Original practice only. Current-exam-shaped items and simplified skill drills are labeled separately.
          </p>
        </section>
      ) : (
        <section className="rounded-xl border border-rose-200 bg-rose-50/70 px-4 py-3 text-sm text-rose-950">
          <p className="font-semibold">{section.title} · own file folder</p>
          <p className="mt-1 text-rose-900/85">
            This page is only for {exam.title} · {section.title}. Upload practice questions, PDFs, images, audio, or notes in the panel below — they stay in this subject folder.
          </p>
        </section>
      )}

      {official ? <OfficialResourceLinks block={official} tone={isToefl ? "emerald" : "rose"} /> : null}

      {sectionQuestions.length > 0 ? (
        <EnglishPracticeBank
          title={`${section.title} · practice questions`}
          description={`${sectionQuestions.length} original in-site items · ${authenticCount} Exam-style · ${sectionQuestions.length - authenticCount} Skill drill${productiveCount ? ` · ${productiveCount} require a produced response` : ""}.`}
          questions={sectionQuestions}
          storageKey={`${exam.id}-${section.id}`}
          timedMinutes={timedMinutes}
          formatNote={examFormatBlurb(exam.id)}
        />
      ) : null}

      {isToefl && section.id === "speaking" ? <ToeflSpeakShadow /> : null}
      {isToefl && section.id === "writing" ? <ToeflWritingTimers /> : null}

      <EnglishResourcePanel
        space={section.spaceKey}
        basePath={section.href}
        title={lane?.uploadTitle ?? `${exam.title} · ${section.title} · upload files`}
      />

      {isToefl && section.id === "listening" ? <ToeflListenReplay /> : null}

      <p className="text-xs text-slate-500">
        <Link href={exam.hubHref} className="text-brand-600 hover:underline">Back to {exam.title}</Link>
        {" · "}
        <Link href="/english#skills" className="text-brand-600 hover:underline">Basic skills</Link>
      </p>
    </div>
  );
}
