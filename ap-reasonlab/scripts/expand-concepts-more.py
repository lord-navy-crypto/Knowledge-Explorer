#!/usr/bin/env python3
"""Second-wave concept expansion: Related Knowledge + formula links."""

from __future__ import annotations

import importlib.util
import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
MARKER = "## Related Knowledge Expansion"
STUDY_MARKER = "## Study Connections"
ADVANCED_STUDY_MARKER = "## Advanced Study Notes"
WORKED_MARKERS = (
    "## Worked Example",
    "Worked Example & Deeper Points",
    "## Extended Examples",
)


def load_module(path: Path, name: str):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    spec.loader.exec_module(module)
    return module


def normalize_title(title: str) -> str:
    text = unicodedata.normalize("NFKC", title or "")
    text = text.replace("\u2019", "'").replace("\u2018", "'")
    text = text.replace("\u2013", "-").replace("\u2014", "-")
    text = text.replace("\u00a0", " ")
    return re.sub(r"\s+", " ", text).strip()


def clean_title(title: str | None) -> str:
    if not title:
        return "this topic"
    return re.sub(r"^#+\s*", "", title).strip()


def build_lookup(*dicts: dict) -> dict[tuple[str, str], str]:
    lookup: dict[tuple[str, str], str] = {}
    for block_dict in dicts:
        for (subject, title), body in block_dict.items():
            lookup[(subject, normalize_title(title))] = body
    return lookup


def insert_before_worked(summary: str, block: str) -> str:
    for marker in WORKED_MARKERS:
        index = summary.find(marker)
        if index != -1:
            before = summary[:index].rstrip()
            after = summary[index:].lstrip()
            return f"{before}\n\n{block.rstrip()}\n\n{after}"
    return summary.rstrip() + "\n\n" + block.rstrip()


def extract_formula_lines(formulas: list[dict], subject: str) -> list[str]:
    lines: list[str] = []
    for formula in formulas:
        if formula.get("subject") != subject:
            continue
        name = str(formula.get("name", "")).strip()
        content = str(formula.get("content") or formula.get("expression") or "").strip()
        if not content:
            continue
        eqs = re.findall(r"\$\$[^$]+\$\$|\$[^$]+\$", content)
        if eqs:
            preview = "; ".join(eqs[:4])
            lines.append(f"- **{name}:** {preview}")
        else:
            snippet = re.sub(r"\s+", " ", content)[:140]
            lines.append(f"- **{name}:** {snippet}...")
    return lines[:10]


def related_fallback(title: str, subject: str, formulas: list[dict]) -> str:
    formula_lines = extract_formula_lines(formulas, subject)
    parts = [
        MARKER,
        "",
        f"### Extending {title}",
        "",
        "Go beyond definitions: connect this topic to adjacent units, governing "
        "relationships, and AP task verbs (explain, compare, evaluate, calculate, "
        "justify).",
        "",
        "### Cross-topic connections",
        f"- Link **{title}** to at least two earlier or later course ideas.",
        "- Name the skill being tested (causation, comparison, continuity/change, "
        "modeling, experimental design, or rhetorical analysis).",
        "- Prepare one limiting case, counterexample, or competing interpretation.",
        "",
        "### Study expansion checklist",
        "- Can you teach the idea with one concrete scenario and one abstract rule?",
        "- Can you state assumptions before applying a formula, model, or claim?",
        "- Can you write a three-sentence FRQ-style explanation without listing only terms?",
    ]
    if formula_lines:
        parts.extend(["", "### Formula / model anchors", ""] + formula_lines)
    return "\n".join(parts)


def study_fallback(title: str, subject: str, formulas: list[dict]) -> str:
    formula_lines = extract_formula_lines(formulas, subject)
    skill = (
        "rhetorical analysis and argumentation"
        if "English Language" in subject
        else "close reading and literary argument"
        if "English Literature" in subject
        else "historical thinking (causation, comparison, CCOT)"
        if "History" in subject
        else "spatial analysis and models"
        if "Geography" in subject
        else "modeling with equations and assumptions"
        if any(x in subject for x in ("Physics", "Calculus", "Chemistry", "Statistics"))
        else "AP course skills for this subject"
    )
    parts = [
        STUDY_MARKER,
        "",
        f"## 1. Prerequisites for {title}",
        f"Before applying **{title}**, make sure earlier course ideas are fluent. "
        f"Name the definitions, conditions, or prior units this topic depends on.",
        "",
        "## 2. Formula and model anchors",
    ]
    if formula_lines:
        parts.extend(formula_lines)
    else:
        parts.append(
            "- Use the course formula/model sheet for this subject; write symbols "
            "before substituting numbers or evidence."
        )
    parts.extend(
        [
            "",
            "## 3. AP exam patterns",
            f"Expect tasks that require {skill}. Respond with a claim, supporting "
            "steps, and an explicit interpretation — not vocabulary alone.",
            "",
            "## 4. Common traps",
            f"- Treating **{title}** as isolated facts instead of a connected system.",
            "- Skipping assumptions, context, or units before concluding.",
            "- Stopping after the first correct-looking special case.",
            "",
            "## 5. Self-check",
            f"- Explain **{title}** in three sentences with one concrete example.",
            "- Change one input and predict the directional effect.",
            "- Name one distractor assumption that does **not** apply.",
        ]
    )
    return "\n".join(parts)


def rid(prefix: str) -> str:
    import random
    import string

    token = f"{random.getrandbits(32):08x}"
    suffix = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{token}-{suffix}"


def add_wave3_formula_sheets(data: dict) -> int:
    path = ROOT / "scripts" / "_wave3_formula_sheets.py"
    if not path.exists():
        return 0
    sheets = load_module(path, "wave3_sheets").WAVE3_FORMULA_SHEETS
    formulas = data.setdefault("formulas", [])
    existing_names = {
        str(f.get("name", "")).strip().casefold() for f in formulas
    }
    existing_ids = {f.get("id") for f in formulas if f.get("id")}
    added = 0
    for sheet in sheets:
        name = str(sheet.get("name", "")).strip()
        if not name or name.casefold() in existing_names:
            continue
        formula_id = rid("m-formula")
        while formula_id in existing_ids:
            formula_id = rid("m-formula")
        formulas.append(
            {
                "id": formula_id,
                "subject": sheet["subject"],
                "unit": sheet.get("unit") or "CED Formula Reference",
                "name": name,
                "expression": "",
                "content": sheet["content"],
                "variables": "",
                "whenToUse": "Use as a unit reference while studying related concepts.",
                "sourceNote": "Original AP-aligned reference; CED skills and equations, not exam questions.",
            }
        )
        existing_names.add(name.casefold())
        existing_ids.add(formula_id)
        added += 1
    return added


def deepen_key_points(concept: dict, title: str, subject: str) -> list[str]:
    existing = [str(p) for p in (concept.get("keyPoints") or []) if p]
    extras: list[str] = []
    if "English" in subject:
        extras = [
            f"For {title}, practice choice → effect → purpose in every paragraph.",
            "Use qualification: acknowledge complexity without abandoning the claim.",
        ]
    elif any(x in subject for x in ("History", "Geography")):
        extras = [
            f"Pair {title} claims with named evidence and a clear historical skill.",
            "Explain significance: why this example changes the argument.",
        ]
    elif "Physics" in subject or subject in {"AP Calculus AB/BC", "AP Chemistry", "AP Statistics"}:
        extras = [
            f"Write symbols first for {title}, then substitute with units.",
            "Check a limiting case before accepting a numerical answer.",
        ]
    elif "Economics" in subject:
        extras = [
            "Label axes and shift directions; distinguish movement vs shift.",
            "Connect short-run outcomes to long-run adjustment when relevant.",
        ]
    else:
        extras = [
            f"Define {title} operationally before applying it.",
            "Trace one concrete example end-to-end.",
        ]

    merged = existing[:]
    for item in extras:
        if item not in merged and len(merged) < 5:
            merged.append(item)
    return merged[:5]


def deepen_mistakes(concept: dict, title: str, subject: str) -> list[str]:
    existing = [str(m) for m in (concept.get("commonMistakes") or []) if m]
    extras = [
        f"Treating {title} as isolated vocabulary instead of a connected system.",
        "Skipping assumptions, conditions, or audience/context before concluding.",
    ]
    if "Physics" in subject:
        extras.append("Mixing special-case equations when the problem regime differs.")
    if "English" in subject:
        extras.append("Device-labeling without commentary on effect.")
    if any(x in subject for x in ("History", "Geography")):
        extras.append("Fact lists without causation, comparison, or continuity analysis.")

    merged = existing[:]
    for item in extras:
        if item not in merged and len(merged) < 4:
            merged.append(item)
    return merged[:4]


def load_block_modules(candidates: list[tuple[str, str]]) -> dict[tuple[str, str], str]:
    dicts = []
    for filename, attr in candidates:
        path = ROOT / "scripts" / filename
        if not path.exists():
            continue
        mod = load_module(path, filename.replace(".py", ""))
        dicts.append(getattr(mod, attr))
    return build_lookup(*dicts)


def load_all_blocks() -> dict[tuple[str, str], str]:
    return load_block_modules(
        [
            ("_wave2_hss_stem_blocks.py", "WAVE2_BLOCKS"),
            ("_wave2_chem_calc_bio_csa.py", "WAVE2_STEM_BLOCKS"),
            ("_wave2_physics2_stats.py", "WAVE2_P2_STATS"),
            ("_wave2_english_hss_p1.py", "WAVE2_MORE"),
        ]
    )


def load_study_blocks() -> dict[tuple[str, str], str]:
    return load_block_modules(
        [
            ("_wave3_physics_c.py", "WAVE3_PHYSICS_C"),
        ]
    )


def load_advanced_study_blocks() -> dict[tuple[str, str], str]:
    return load_block_modules(
        [
            ("_wave3_hss_study.py", "WAVE3_HSS_STUDY"),
            ("_wave3_physics_advanced.py", "WAVE3_PHYSICS_ADVANCED"),
        ]
    )


def expand(data: dict) -> dict[str, int]:
    blocks = load_all_blocks()
    study_blocks = load_study_blocks()
    advanced_study_blocks = load_advanced_study_blocks()
    formulas = data.get("formulas", [])
    stats = {
        "related_inserted": 0,
        "fallback_related": 0,
        "study_inserted": 0,
        "study_fallback": 0,
        "advanced_study_inserted": 0,
        "key_points_expanded": 0,
        "mistakes_expanded": 0,
        "examples_expanded": 0,
        "formula_sheets_added": 0,
    }

    stats["formula_sheets_added"] = add_wave3_formula_sheets(data)
    formulas = data.get("formulas", [])

    for concept in data.get("concepts", []):
        subject = concept.get("subject", "")
        if not isinstance(subject, str) or not subject.startswith("AP"):
            continue
        title = clean_title(concept.get("title"))
        summary = concept.get("summary")
        if not isinstance(summary, str):
            summary = "" if summary is None else str(summary)

        changed = False
        if MARKER not in summary:
            key = (subject, normalize_title(title))
            block = blocks.get(key)
            if not block:
                block = blocks.get((subject, normalize_title(concept.get("title") or "")))
            if block:
                summary = insert_before_worked(summary, block)
                stats["related_inserted"] += 1
            else:
                summary = insert_before_worked(
                    summary, related_fallback(title, subject, formulas)
                )
                stats["fallback_related"] += 1
            changed = True

        if STUDY_MARKER not in summary:
            key = (subject, normalize_title(title))
            study = study_blocks.get(key) or study_blocks.get(
                (subject, normalize_title(concept.get("title") or ""))
            )
            if study:
                summary = insert_before_worked(summary, study)
                stats["study_inserted"] += 1
            else:
                summary = insert_before_worked(
                    summary, study_fallback(title, subject, formulas)
                )
                stats["study_fallback"] += 1
            changed = True

        if ADVANCED_STUDY_MARKER not in summary:
            key = (subject, normalize_title(title))
            advanced = advanced_study_blocks.get(key) or advanced_study_blocks.get(
                (subject, normalize_title(concept.get("title") or ""))
            )
            if advanced:
                summary = insert_before_worked(summary, advanced)
                stats["advanced_study_inserted"] += 1
                changed = True

        new_kp = deepen_key_points(concept, title, subject)
        if new_kp != (concept.get("keyPoints") or []):
            concept["keyPoints"] = new_kp
            stats["key_points_expanded"] += 1
            changed = True

        new_mistakes = deepen_mistakes(concept, title, subject)
        if new_mistakes != (concept.get("commonMistakes") or []):
            concept["commonMistakes"] = new_mistakes
            stats["mistakes_expanded"] += 1
            changed = True

        example = str(concept.get("example") or "")
        if len(example) < 80:
            concept["example"] = (
                f"For {title}: state the model or claim, apply one concrete case "
                "(with formula, evidence, or textual detail), then interpret the "
                "result in AP rubric language."
            )
            stats["examples_expanded"] += 1
            changed = True

        if changed:
            concept["summary"] = summary

    return stats


def main() -> None:
    data = json.loads(DATA.read_text(encoding="utf-8"))
    stats = expand(data)
    DATA.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print("Wave-3 concept expansion complete:")
    for key, value in stats.items():
        print(f"  {key}: {value}")


if __name__ == "__main__":
    main()
