import { describe, expect, it } from "vitest";
import { shapeOfficialEnglishQuestion } from "@/lib/english-official-shape";
import type { EnglishPracticeQuestion } from "@/data/english-content";

function q(
  id: string,
  skill: string,
  prompt: string,
  choices: [string, string, string, string],
  answer = 1
): EnglishPracticeQuestion {
  return { id, skill, prompt, choices, answer, explanation: "test" };
}

describe("shapeOfficialEnglishQuestion TOEFL", () => {
  it("keeps listening stems out of the transcript", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "toefl",
      q(
        "toefl-extra-2",
        "Listening inference",
        "A teaching assistant says, “The rubric is posted, but I’d still come to office hours if your draft doesn’t match what you think the professor wants.” What is the TA implying?",
        [
          "Students should ignore the rubric.",
          "The rubric alone may not resolve every question about expectations.",
          "Office hours are cancelled this week.",
          "Drafts are not allowed in this course.",
        ]
      )
    );
    expect(shaped.skill).toBe("Listen to a Conversation");
    expect(shaped.passage).toContain("The rubric is posted");
    expect(shaped.passage).not.toMatch(/Follow-up:/);
    expect(shaped.passage).not.toMatch(/implying\?/);
    expect(shaped.prompt).toMatch(/implying/i);
  });

  it("does not glue purpose questions onto academic-talk transcripts", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "toefl",
      q(
        "toefl-extra-3",
        "Listening purpose",
        "At the start of a lecture, a professor says, “Before we discuss the experiment, notice how the control group was selected.” What is the professor’s purpose?",
        [
          "To announce a cancelled lab",
          "To direct attention to a methodological detail that frames the discussion",
          "To summarize the course syllabus",
          "To argue that control groups are unnecessary",
        ]
      )
    );
    expect(shaped.skill).toBe("Listen to an Academic Talk");
    expect(shaped.passage).toContain("control group");
    expect(shaped.passage).not.toMatch(/purpose\?/);
  });

  it("rewrites writing-coherence items as academic discussion boards", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "toefl",
      q(
        "toefl-extra-4",
        "Writing coherence",
        "Which sentence best begins a paragraph arguing that remote work policies should remain flexible?",
        [
          "Technology has changed many industries.",
          "One reason flexible remote policies should continue is that they allow employees to adapt when caregiving needs arise.",
          "My cousin works from home on Fridays.",
          "Offices have desks and chairs.",
        ]
      )
    );
    expect(shaped.skill).toBe("Write for an Academic Discussion");
    expect(shaped.passage).toMatch(/^Professor:/);
    expect(shaped.passage).toMatch(/Student A:/);
    expect(shaped.passage).not.toMatch(/^Which sentence/);
    expect(shaped.prompt).toMatch(/discussion/i);
  });

  it("turns speaking prompts into interviewer questions", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "toefl",
      q(
        "toefl-extra-5",
        "Speaking clarity",
        "Which response best answers a prompt asking whether museums should offer free admission one day per month?",
        [
          "Museums are buildings with art.",
          "Yes, museums should offer a free day because it broadens access for families who cannot afford regular tickets.",
          "I went to a museum once and it was fine, I guess.",
          "Free things are popular in general.",
        ]
      )
    );
    expect(shaped.skill).toBe("Take an Interview");
    expect(shaped.passage).toMatch(/Interviewer:/);
    expect(shaped.passage).toMatch(/Should museums offer free admission/);
    expect(shaped.passage).not.toMatch(/museums should offer free admission one day per month\?$/);
  });

  it("maps vocab-in-context blanks to academic reading, not daily-life notices", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "toefl",
      q(
        "toefl-extra-40",
        "Vocabulary in context",
        "The curator’s tour was so ___ that several visitors took notes on every stop.",
        ["mundane", "perfunctory", "illuminating", "ambiguous"],
        2
      )
    );
    expect(shaped.skill).toBe("Read an Academic Passage");
    expect(shaped.passage).toContain("curator");
    expect(shaped.prompt).toMatch(/closest in meaning/i);
  });

  it("keeps two-speaker listening as a conversation transcript", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "toefl",
      q(
        "toefl-9",
        "Listening purpose",
        "A student asks, “Do we need the textbook or just the articles?” The professor replies, “The articles are required; the textbook is optional background if you want more examples.” What is the professor’s main point?",
        [
          "Students should not read anything.",
          "Only the textbook matters.",
          "Articles are required; the textbook is supplementary.",
          "The course has no readings.",
        ],
        2
      )
    );
    expect(shaped.skill).toBe("Listen to a Conversation");
    expect(shaped.passage).toMatch(/Student:/);
    expect(shaped.passage).toMatch(/Professor:/);
    expect(shaped.passage).not.toMatch(/main point\?/);
  });

  it("keeps discussion topics free of leftover Which-stems", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "toefl",
      q(
        "toefl-3",
        "Academic Discussion",
        "A class is discussing whether universities should record every lecture. Which response has the clearest position and support?",
        [
          "Yes. Recordings are good.",
          "It depends, and many things matter.",
          "Universities should record lectures because students can review complex explanations; however, instructors should control access to protect class discussion.",
          "Lectures have existed for a long time.",
        ],
        2
      )
    );
    expect(shaped.passage).toMatch(/record every lecture/);
    expect(shaped.passage).not.toMatch(/Which response/);
  });
});

describe("shapeOfficialEnglishQuestion SAT", () => {
  it("uses the official Standard English Conventions stem", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "sat",
      q(
        "sat-1",
        "Standard English Conventions",
        "The prototype completed twelve trials ___ only two required a manual reset.",
        [", and", ",", "; and", ": and"],
        0
      )
    );
    expect(shaped.skill).toBe("Standard English Conventions");
    expect(shaped.passage).toContain("twelve trials");
    expect(shaped.prompt).toMatch(/conventions of Standard English/i);
  });

  it("turns Expression of Ideas items into a writer-goal draft", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "sat",
      q(
        "sat-4",
        "Expression of Ideas",
        "A student wants to emphasize a study's limitation. Which sentence best accomplishes the goal?",
        [
          "The result was interesting.",
          "The experiment used sensors.",
          "Because the study observed only one school, its findings may not apply to schools with different schedules.",
          "The researchers created a chart.",
        ],
        2
      )
    );
    expect(shaped.passage).toMatch(/Writer's goal/i);
    expect(shaped.prompt).toMatch(/writer's goal/i);
  });

  it("rebuilds a Digital SAT passage when the stored stimulus is still a stem", () => {
    const shaped = shapeOfficialEnglishQuestion("sat", {
      id: "sat-stem-passage",
      skill: "Standard English Conventions",
      prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
      passage: "Which sentence is correctly punctuated?",
      choices: [
        "The samples which were cold, survived.",
        "The samples, which were cold, survived.",
        "The samples which, were cold survived.",
        "The samples which were cold survived, well.",
      ],
      answer: 1,
      explanation: "Nonessential clauses take commas.",
    });
    expect(shaped.prompt).toMatch(/conventions of Standard English/i);
    expect(shaped.passage).not.toMatch(/^Which sentence is correctly punctuated/);
    expect(shaped.passage).toMatch(/which were cold/);
  });

  it("turns delete-the-off-topic items into a paragraph of the choices", () => {
    const shaped = shapeOfficialEnglishQuestion(
      "sat",
      q(
        "sat-delete",
        "Expression of Ideas",
        "Which sentence should be deleted as off-topic in a paragraph about lab-notebook habits?",
        [
          "Date every page.",
          "Record raw values before you average them.",
          "My favorite movie is a space opera.",
          "Note which instrument you used.",
        ],
        2
      )
    );
    expect(shaped.passage).toMatch(/space opera/i);
    expect(shaped.passage).not.toMatch(/^Writer's goal/i);
    expect(shaped.prompt).toMatch(/deleted/i);
  });
});
