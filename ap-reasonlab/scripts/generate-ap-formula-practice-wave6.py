#!/usr/bin/env python3
"""Append Wave 6 formula-practice questionnaires to data/managed-content.json."""

from __future__ import annotations

import json
import random
import string
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
SCRIPTS = Path(__file__).resolve().parent
if str(SCRIPTS) not in sys.path:
    sys.path.insert(0, str(SCRIPTS))

from _wave6_formula_practice_data import WAVE6_QUIZ_SPECS  # noqa: E402

SOURCE_NOTE = "College Board AP CED / equation sheet"
GEN_NOTE = (
    "Original formula-linked practice aligned to the College Board AP CED. "
    "Not College Board exam verbatim. Includes process and answers. · wave 6"
)
BASE_TAGS = [
    "formula-practice",
    "wave-6",
    "ced-aligned",
    "generated",
    "with-solutions",
]


def rid(prefix: str = "m-item") -> str:
    """Return a fresh managed-content id."""
    token = f"{random.getrandbits(32):08x}"
    suffix = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{token}-{suffix}"


def mcq(prompt, choices, answer_idx, steps, concept_id=None, tier=2):
    letter = "ABCD"[answer_idx]
    answer = choices[answer_idx]
    body = answer.split(") ", 1)[-1] if ") " in answer else answer
    return {
        "id": rid("m-item"),
        "format": "mcq",
        "prompt": prompt,
        "choices": choices,
        "conceptId": concept_id,
        "conceptIntro": None,
        "difficultyTier": tier,
        "visibleSteps": steps,
        "blankSteps": [f"Answer key: {letter}) {body}"],
        "hints": [
            "Identify the relevant formula and its conditions.",
            "Substitute with units, then check the direction and scale.",
            f"Final check: {letter}) {body}",
        ],
    }


def frq(prompt, steps, answers, concept_id=None, tier=2):
    answers_list = answers if isinstance(answers, list) else [answers]
    return {
        "id": rid("m-item"),
        "format": "frq_half",
        "prompt": prompt,
        "conceptId": concept_id,
        "conceptIntro": None,
        "difficultyTier": tier,
        "visibleSteps": steps,
        "blankSteps": answers_list,
        "hints": [
            "State the formula and conditions before substituting.",
            "Show the intermediate quantity and preserve units.",
            "Interpret the result in the problem's context.",
        ],
    }


def build_item(spec):
    kind = spec[0]
    if kind == "mcq":
        _, prompt, choices, answer_idx, steps, concept_id, tier = spec
        return mcq(prompt, choices, answer_idx, steps, concept_id, tier)
    if kind == "frq":
        _, prompt, steps, answers, concept_id, tier = spec
        return frq(prompt, steps, answers, concept_id, tier)
    raise ValueError(f"Unknown item kind: {kind!r}")


def quiz_title(subject: str, label: str, topic: str) -> str:
    return f"{subject} Formula Practice Wave {label} — {topic}"


def build_quiz(spec: dict) -> dict:
    items = [build_item(entry) for entry in spec["items"]]
    if len(items) != 4:
        raise ValueError(f"{spec['subject']} {spec['label']} must have exactly 4 items")
    tier = max(item["difficultyTier"] for item in items)
    return {
        "id": rid("m-quiz"),
        "title": quiz_title(spec["subject"], spec["label"], spec["topic"]),
        "subject": spec["subject"],
        "kind": "generated",
        "description": spec["description"],
        "generationNote": GEN_NOTE,
        "estimatedMinutes": 35,
        "tags": BASE_TAGS + spec["topic_tags"],
        "items": items,
        "difficultyTier": tier,
    }


def build_all_quizzes():
    return [build_quiz(spec) for spec in WAVE6_QUIZ_SPECS]


def existing_ids(data: dict) -> set[str]:
    ids: set[str] = set()
    for key in ("concepts", "formulas", "questionnaires"):
        for entry in data.get(key, []):
            entry_id = entry.get("id")
            if entry_id:
                ids.add(entry_id)
            for item in entry.get("items", []):
                item_id = item.get("id")
                if item_id:
                    ids.add(item_id)
    return ids


def unique_id(prefix: str, used: set[str]) -> str:
    candidate = rid(prefix)
    while candidate in used:
        candidate = rid(prefix)
    used.add(candidate)
    return candidate


def add_quizzes(data: dict, candidates: list[dict]) -> tuple[int, int, list[str]]:
    questionnaires = data.setdefault("questionnaires", [])
    titles = {
        str(questionnaire.get("title", "")).strip().casefold()
        for questionnaire in questionnaires
    }
    used = existing_ids(data)
    added = 0
    items_added = 0
    skipped: list[str] = []

    for candidate in candidates:
        title_key = candidate["title"].strip().casefold()
        if title_key in titles:
            skipped.append(candidate["title"])
            continue
        candidate["id"] = unique_id("m-quiz", used)
        for item in candidate["items"]:
            item["id"] = unique_id("m-item", used)
        questionnaires.append(candidate)
        titles.add(title_key)
        added += 1
        items_added += len(candidate["items"])

    return added, items_added, skipped


def main() -> int:
    candidates = build_all_quizzes()
    with DATA.open("r", encoding="utf-8") as handle:
        data = json.load(handle)

    added, items_added, skipped = add_quizzes(data, candidates)

    with DATA.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, ensure_ascii=False, indent=2)
        handle.write("\n")

    print(f"Wave 6 formula practice: {added} quizzes added ({items_added} items)")
    if skipped:
        print(f"Skipped {len(skipped)} existing titles:")
        for title in skipped:
            print(f"  - {title}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
