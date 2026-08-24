#!/usr/bin/env python3
"""Add TOEFL vocabulary concepts and practice questionnaires to managed-content.json."""

from __future__ import annotations

import json
import random
import string
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
SUBJECT = "English Vocabulary"
GEN_NOTE = (
    "Original TOEFL-aligned vocabulary practice. Not ETS exam content. "
    "Aligned to updated TOEFL iBT reading/writing task vocabulary."
)


def rid(prefix: str) -> str:
    token = f"{random.getrandbits(32):08x}"
    suffix = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{token}-{suffix}"


CONCEPTS = [
    {
        "title": "TOEFL Academic Word Families",
        "summary": (
            "# TOEFL Academic Word Families\n\n"
            "TOEFL reading and writing reward **word-family fluency**: knowing that "
            "*analyze, analysis, analytical, analytically* share a core meaning but "
            "shift grammar roles.\n\n"
            "## Strategy\n"
            "- Learn the **verb + noun + adjective** trio for high-frequency academic words.\n"
            "- In Complete the Words tasks, first letters often reveal Latin/Greek roots.\n"
            "- In academic passages, infer meaning from **prefix + root + suffix**.\n\n"
            "## High-yield families\n"
            "| Root | Verb | Noun | Adjective |\n"
            "| --- | --- | --- | --- |\n"
            "| hypothes- | hypothesize | hypothesis | hypothetical |\n"
            "| conclude | conclude | conclusion | conclusive |\n"
            "| distribute | distribute | distribution | distributional |\n"
            "| significant | — | significance | significant |"
        ),
        "keyPoints": [
            "Learn verb/noun/adjective forms together, not isolated words.",
            "Complete the Words: use grammar (article, plural -s) to narrow blanks.",
            "Academic passages reuse the same family across paragraphs.",
        ],
        "commonMistakes": [
            "Choosing a word that fits grammar but not academic register.",
            "Ignoring suffix cues (-tion, -ive, -ly) when completing blanks.",
        ],
        "example": "From *evidence*, infer *evident*, *evidently* — all signal visibility or proof.",
    },
    {
        "title": "TOEFL Reading: Complete the Words",
        "summary": (
            "# Complete the Words (TOEFL Reading)\n\n"
            "Short texts with **partially missing words** — you type the remaining letters. "
            "Tests vocabulary in context, not isolated definitions.\n\n"
            "## How to approach\n"
            "1. Read the whole paragraph once for topic.\n"
            "2. Use **grammar**: articles (a/an/the), plural -s, verb tense endings.\n"
            "3. Use **collocation**: which word normally pairs with the next word?\n"
            "4. Check **first letters** against common academic roots.\n\n"
            "## Timing\n"
            "Part of the multistage reading section (~35 min total). "
            "Do not spend more than ~45 seconds per blank on first pass."
        ),
        "keyPoints": [
            "Grammar and collocation narrow choices faster than guessing.",
            "Topic sentence predicts field-specific vocabulary (biology, history, etc.).",
            "Review blanks where the first letter could match multiple words.",
        ],
        "commonMistakes": [
            "Filling a grammatically possible word that breaks the passage topic.",
            "Skipping the full paragraph and guessing word-by-word.",
        ],
        "example": "p_____ + 'convert sunlight' → photosynthesis, not 'process' alone.",
    },
    {
        "title": "TOEFL Reading: Daily Life Texts",
        "summary": (
            "# Read in Daily Life\n\n"
            "Short **campus and everyday texts**: emails, notices, flyers, schedules. "
            "Questions target main purpose, key details, and implied meaning.\n\n"
            "## Text types\n"
            "- Housing / maintenance notices\n"
            "- Library or lab schedule changes\n"
            "- Event announcements\n"
            "- Email threads with a clear request\n\n"
            "## Skills\n"
            "- Identify **purpose** (inform, request, warn, invite).\n"
            "- Track **dates, locations, requirements**.\n"
            "- Infer tone (formal notice vs casual message)."
        ),
        "keyPoints": [
            "Scan for who, what, when, where, and what action is required.",
            "Implied meaning often appears in polite requests or deadlines.",
            "Daily-life vocabulary is simpler but time pressure is real.",
        ],
        "commonMistakes": [
            "Importing outside knowledge not stated in the text.",
            "Confusing the sender's opinion with a stated fact.",
        ],
        "example": "A notice says 'facilities will be unavailable' — infer no access, not optional use.",
    },
    {
        "title": "TOEFL Writing: Email Register",
        "summary": (
            "# Write an Email (TOEFL Writing)\n\n"
            "Write a **clear email** for an academic or social scenario: request, "
            "invitation, complaint, or update. ~150–220 words typed on keyboard.\n\n"
            "## Structure\n"
            "1. Greeting + purpose in sentence one.\n"
            "2. Specific details (dates, names, reasons).\n"
            "3. Polite closing with next step.\n\n"
            "## Register\n"
            "- Academic: full sentences, no slang, clear subject line if prompted.\n"
            "- Social: friendly but still organized; avoid overly casual abbreviations."
        ),
        "keyPoints": [
            "State purpose in the opening line — professors scan quickly.",
            "Include all bullet points from the prompt.",
            "Use polite modals: could, would, I appreciate, thank you for.",
        ],
        "commonMistakes": [
            "Missing one required bullet from the prompt.",
            "Overly informal tone in academic emails.",
        ],
        "example": "Request extension: state course, assignment, reason, proposed date, thanks.",
    },
    {
        "title": "TOEFL Writing: Academic Discussion",
        "summary": (
            "# Write for an Academic Discussion\n\n"
            "Contribute to an **online class discussion**: respond to a professor's "
            "question and engage with two student posts. Minimum ~100 words; ~10 minutes.\n\n"
            "## Strong response\n"
            "- Take a **clear position**.\n"
            "- Add a **new reason or example** not copied from students.\n"
            "- Optionally **acknowledge** another view then extend.\n\n"
            "## Tone\n"
            "Semi-formal academic: I think, In my experience, Research suggests, "
            "However, One limitation is..."
        ),
        "keyPoints": [
            "Do not only agree — add a distinct reason or example.",
            "Reference the professor's question directly in sentence one.",
            "100+ words with at least two developed supporting points.",
        ],
        "commonMistakes": [
            "Repeating student posts without new content.",
            "Writing a generic essay that ignores the discussion thread.",
        ],
        "example": "Professor asks about online vs in-person labs — add safety, equipment access, or data quality.",
    },
    {
        "title": "TOEFL Writing: Build a Sentence",
        "summary": (
            "# Build a Sentence\n\n"
            "Arrange **word tiles** into grammatical sentences or questions. "
            "Tests syntax, word order, and function words (articles, prepositions, auxiliaries).\n\n"
            "## Patterns to master\n"
            "- Question inversion: *Did the advisor approve your proposal?*\n"
            "- Passive: *The results were published in March.*\n"
            "- Subordinate clauses: *Although costs rose, enrollment increased.*\n"
            "- Relative clauses: *The student who led the project graduated early.*"
        ),
        "keyPoints": [
            "Find the subject and main verb first, then attach modifiers.",
            "Questions need auxiliary + subject inversion.",
            "Prepositions often attach to fixed phrases (depend on, interested in).",
        ],
        "commonMistakes": [
            "Correct words in wrong order (adjective after noun in English).",
            "Missing auxiliary in questions or passive forms.",
        ],
        "example": "Tiles: the / submitted / yesterday / was / report → The report was submitted yesterday.",
    },
]


def mcq_item(prompt: str, choices: list[str], answer_idx: int, steps: list[str]):
    letter = "ABCD"[answer_idx]
    body = choices[answer_idx].split(") ", 1)[-1] if ") " in choices[answer_idx] else choices[answer_idx]
    return {
        "id": rid("m-item"),
        "format": "mcq",
        "prompt": prompt,
        "choices": choices,
        "visibleSteps": steps,
        "blankSteps": [f"Answer: {letter}) {body}"],
        "hints": [
            "Eliminate choices that break grammar or academic register.",
            "Check collocation: which word normally follows?",
            f"Best fit: {letter}) {body}",
        ],
    }


QUIZZES = [
    {
        "title": "TOEFL Vocab · Academic Register Set 1",
        "items": [
            mcq_item(
                "The study _____ a link between sleep and memory consolidation.",
                ["A) substantiates", "B) substantiate", "C) substantiation", "D) substantial"],
                0,
                ["Need third-person singular verb.", "Substantiate = provide evidence for.", "Answer: substantiates."],
            ),
            mcq_item(
                "Which word best completes: 'The policy had _____ effects on rural clinics.'",
                ["A) adverse", "B) averse", "C) advertised", "D) advanced"],
                0,
                ["Adverse = harmful; averse = unwilling.", "Context: negative impact on clinics.", "Answer: adverse."],
            ),
            mcq_item(
                "Researchers drew a _____ from the survey data.",
                ["A) inference", "B) infer", "C) inferred", "D) inferential"],
                0,
                ["Need noun after article 'a'.", "Inference = conclusion from evidence.", "Answer: inference."],
            ),
            mcq_item(
                "The passage implies that the author is _____ about the new method.",
                ["A) skeptical", "B) skeptic", "C) skepticism", "D) skeptically"],
                0,
                ["After 'is', need adjective.", "Skeptical = doubting.", "Answer: skeptical."],
            ),
            mcq_item(
                "Urban planners must _____ traffic flow during peak hours.",
                ["A) mitigate", "B) mitigation", "C) mitigating", "D) mitigative"],
                0,
                ["Need base verb after modal 'must'.", "Mitigate = reduce severity.", "Answer: mitigate."],
            ),
        ],
    },
    {
        "title": "TOEFL Vocab · Word Form Set 2",
        "items": [
            mcq_item(
                "The _____ of the experiment surprised the team.",
                ["A) findings", "B) found", "C) founded", "D) founder"],
                0,
                ["Need plural noun after 'The'.", "Findings = results discovered.", "Answer: findings."],
            ),
            mcq_item(
                "Evidence _____ that temperatures are rising faster in cities.",
                ["A) indicates", "B) indication", "C) indicative", "D) indicatedly"],
                0,
                ["Subject 'Evidence' is singular.", "Indicates = shows.", "Answer: indicates."],
            ),
            mcq_item(
                "The professor asked for a brief _____ of the main argument.",
                ["A) summary", "B) summarize", "C) summarily", "D) summative"],
                0,
                ["After adjective 'brief', need noun.", "Summary = short overview.", "Answer: summary."],
            ),
            mcq_item(
                "Students must _____ to the honor code before registering.",
                ["A) adhere", "B) adhesion", "C) adhesive", "D) adherent"],
                0,
                ["Must + base verb.", "Adhere to = follow rules.", "Answer: adhere."],
            ),
            mcq_item(
                "The data are _____ with earlier studies.",
                ["A) consistent", "B) consistency", "C) consistently", "D) consist"],
                0,
                ["After 'are', need adjective.", "Consistent with = matches.", "Answer: consistent."],
            ),
        ],
    },
    {
        "title": "TOEFL Vocab · Collocation Set 3",
        "items": [
            mcq_item(
                "Which collocation is correct?",
                ["A) pose a challenge", "B) pose a challenge to do", "C) pose challenge", "D) posing challenge"],
                0,
                ["Pose a challenge = present difficulty.", "Article 'a' required.", "Answer: pose a challenge."],
            ),
            mcq_item(
                "The committee will _____ a decision by Friday.",
                ["A) reach", "B) achieve", "C) arrive", "D) gain"],
                0,
                ["Reach a decision (fixed collocation).", "Achieve a goal, not decision.", "Answer: reach."],
            ),
            mcq_item(
                "Scientists _____ an experiment to test the hypothesis.",
                ["A) conduct", "B) make", "C) do a research", "D) execute a homework"],
                0,
                ["Conduct an experiment (academic collocation).", "Answer: conduct."],
            ),
            mcq_item(
                "The lecture _____ on renewable energy policy.",
                ["A) focused", "B) focused at", "C) focused in", "D) focused by"],
                0,
                ["Focus on (preposition).", "Answer: focused."],
            ),
            mcq_item(
                "High humidity can _____ the spread of mold.",
                ["A) facilitate", "B) facility", "C) facile", "D) facilitation"],
                0,
                ["Can + verb.", "Facilitate = make easier.", "Answer: facilitate."],
            ),
        ],
    },
]


def main() -> None:
    data = json.loads(DATA.read_text(encoding="utf-8"))
    concepts = data.setdefault("concepts", [])
    questionnaires = data.setdefault("questionnaires", [])
    existing_titles = {c.get("title") for c in concepts}
    existing_quiz = {q.get("title") for q in questionnaires}
    added_c = added_q = 0

    for block in CONCEPTS:
        if block["title"] in existing_titles:
            continue
        concepts.append(
            {
                "id": rid("m-concept"),
                "title": block["title"],
                "subject": SUBJECT,
                "summary": block["summary"],
                "keyPoints": block["keyPoints"],
                "commonMistakes": block["commonMistakes"],
                "example": block["example"],
            }
        )
        added_c += 1

    for spec in QUIZZES:
        if spec["title"] in existing_quiz:
            continue
        questionnaires.append(
            {
                "id": rid("m-quiz"),
                "title": spec["title"],
                "subject": SUBJECT,
                "kind": "generated",
                "description": "TOEFL-aligned vocabulary MCQ practice.",
                "generationNote": GEN_NOTE,
                "estimatedMinutes": 15,
                "tags": ["toefl", "vocabulary", "generated", "with-solutions"],
                "items": spec["items"],
                "difficultyTier": 2,
            }
        )
        added_q += 1

    DATA.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Added {added_c} concepts, {added_q} questionnaires for {SUBJECT}")


if __name__ == "__main__":
    main()
