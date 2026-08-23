#!/usr/bin/env python3
"""Deepen AP concept summaries with CED-aligned knowledge and formula links."""

from __future__ import annotations

import importlib.util
import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
MARKER = "## Detailed Knowledge"
FORMULA_MARKER = "## Formula & Concept Links"
WORKED_MARKERS = (
    "## Worked Example",
    "Worked Example & Deeper Points",
    "## Extended Examples",
)


def load_module(path: Path, name: str):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


HSS = load_module(ROOT / "scripts" / "_hss_deep_blocks.py", "hss_deep")
PHYS = load_module(ROOT / "scripts" / "_physics_deep_blocks.py", "phys_deep")
HSS_DEEP_BLOCKS = HSS.HSS_DEEP_BLOCKS
PHYSICS_DEEP_BLOCKS = PHYS.PHYSICS_DEEP_BLOCKS


def normalize_title(title: str) -> str:
    if not title:
        return ""
    text = unicodedata.normalize("NFKC", title)
    text = text.replace("\u2019", "'").replace("\u2018", "'")
    text = text.replace("\u2013", "-").replace("\u2014", "-")
    text = text.replace("\u00a0", " ")
    return re.sub(r"\s+", " ", text).strip()


def build_lookup(blocks: dict) -> dict[tuple[str, str], str]:
    lookup: dict[tuple[str, str], str] = {}
    for (subject, title), body in blocks.items():
        lookup[(subject, normalize_title(title))] = body
    return lookup


HSS_LOOKUP = build_lookup(HSS_DEEP_BLOCKS)
PHYS_LOOKUP = build_lookup(PHYSICS_DEEP_BLOCKS)


def clean_title(title: str | None) -> str:
    if not title:
        return "this topic"
    return re.sub(r"^#+\s*", "", title).strip()


def headers_from_summary(summary: str) -> list[str]:
    headers = re.findall(r"(?m)^\s{0,3}#{1,6}\s+(.+?)\s*$", summary)
    result: list[str] = []
    seen: set[str] = set()
    skip = {
        "detailed knowledge",
        "formula & concept links",
        "worked example",
        "extended examples",
        "common errors",
        "deeper concept map",
        "practice",
        "focus",
        "key comparisons",
        "expanded detail",
    }
    for header in headers:
        cleaned = re.sub(r"[*_`#]", "", header).strip()
        if not cleaned:
            continue
        key = cleaned.casefold()
        if any(token in key for token in skip):
            continue
        if key in seen:
            continue
        seen.add(key)
        result.append(cleaned)
        if len(result) == 4:
            break
    return result


def has_generic_key_points(key_points: list[str] | None) -> bool:
    if not key_points:
        return True
    return any("connect this section explicitly" in point.casefold() for point in key_points)


def substantive_key_points(summary: str, title: str, subject: str) -> list[str]:
    headers = headers_from_summary(summary)
    points: list[str] = []

    for header in headers[:3]:
        short = header.split(".", 1)[-1].strip() if re.match(r"^\d+\.", header) else header
        if len(short) > 90:
            short = short[:87] + "..."
        points.append(f"{short}: central to {title} on the AP exam.")

    if "English Language" in subject:
        fallbacks = [
            "Tie every strategy to purpose, audience, and context.",
            "Commentary must explain how evidence advances the claim.",
            "Qualify claims and engage counterarguments when relevant.",
        ]
    elif "English Literature" in subject:
        fallbacks = [
            "Interpretation must be anchored in precise textual evidence.",
            "Structure and form choices shape meaning, not just content.",
            "Theme is an arguable insight, not a one-word topic label.",
        ]
    elif any(label in subject for label in ("History", "Geography")):
        fallbacks = [
            "Support claims with named, specific evidence.",
            "Explain causation, comparison, or continuity/change — not lists.",
            "Connect local examples to broader course themes.",
        ]
    elif "Physics" in subject or "Calculus" in subject or subject in {
        "AP Chemistry",
        "AP Statistics",
    }:
        fallbacks = [
            f"State assumptions before applying relationships in {title}.",
            "Write governing equations in symbols before substituting values.",
            "Check units, limiting cases, and direction of change.",
        ]
    elif "Economics" in subject:
        fallbacks = [
            "Draw and shift the correct curve with a labeled axis.",
            "Distinguish movement along a curve from a shift.",
            "Interpret equilibrium changes in context.",
        ]
    elif "Computer Science" in subject:
        fallbacks = [
            "Trace code or logic on a concrete input before generalizing.",
            "Name preconditions and postconditions for algorithms or data use.",
            "Explain efficiency or abstraction trade-offs in AP terms.",
        ]
    else:
        fallbacks = [
            f"Define core terms for {title} before applying them.",
            "Use evidence or data to justify each step of reasoning.",
            "Interpret conclusions in AP rubric language.",
        ]

    for fallback in fallbacks:
        if len(points) >= 3:
            break
        if fallback not in points:
            points.append(fallback)
    return points[:3]


def substantive_mistakes(title: str, subject: str) -> list[str]:
    if "English Language" in subject:
        return [
            "Labeling rhetorical devices without explaining audience effect.",
            "Summarizing the source instead of building an argument.",
        ]
    if "English Literature" in subject:
        return [
            "Plot summary or paraphrase without interpretive claim.",
            "Identifying a device without linking it to theme or character.",
        ]
    if any(label in subject for label in ("History", "Geography")):
        return [
            "Listing facts without explaining causation or comparison.",
            "Using vague regions or eras instead of named examples.",
        ]
    if "Physics" in subject:
        return [
            f"Applying a special-case formula for {title} when assumptions fail.",
            "Ignoring units, vector direction, or sign conventions.",
        ]
    return [
        f"Reaching a conclusion about {title} without showing reasoning.",
        "Using vocabulary accurately but without explaining significance.",
    ]


def substantive_example(title: str, subject: str) -> str:
    if "English Language" in subject:
        return (
            f"For {title}, cite one precise choice from a short passage and write "
            "three sentences of commentary linking choice → effect → purpose."
        )
    if "English Literature" in subject:
        return (
            f"In {title}, identify one pattern (image, structure, or voice) and "
            "argue how it develops a complex theme."
        )
    if any(label in subject for label in ("History", "Geography")):
        return (
            f"Make one scoped claim about {title}, support it with two named "
            "examples, and explain the causal or comparative link."
        )
    if "Physics" in subject:
        return (
            f"In a {title} scenario, list assumptions, write the governing "
            "relationship, predict a limiting case, then interpret the result."
        )
    return (
        f"Apply {title} to a concrete scenario: state the method, show one "
        "intermediate step, and interpret the outcome."
    )


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
            preview = "; ".join(eqs[:3])
            lines.append(f"- **{name}:** {preview}")
        else:
            snippet = re.sub(r"\s+", " ", content)[:120]
            lines.append(f"- **{name}:** {snippet}...")
    return lines[:8]


def formula_link_block(subject: str, title: str, formulas: list[dict]) -> str | None:
    lines = extract_formula_lines(formulas, subject)
    if not lines:
        return None
    body = "\n".join(lines)
    return (
        f"{FORMULA_MARKER}\n\n"
        f"Use these course relationships when studying **{title}**:\n\n"
        f"{body}\n\n"
        "Always check assumptions (regime, symmetry, randomization, or rhetorical "
        "context) before applying a relationship."
    )


def generic_stem_block(title: str, subject: str, summary: str, formulas: list[dict]) -> str | None:
    headers = headers_from_summary(summary)

    sections: list[str] = [MARKER, ""]
    if headers:
        sections.append(
            f"### Core ideas in {title}\n\n"
            "The AP exam expects you to connect definitions, assumptions, and "
            "applications — not just recall labels."
        )
        for index, header in enumerate(headers[:6], 1):
            sections.append(f"\n### {index}. {header}\n")
            sections.append(
                f"- Define **{header}** in course vocabulary.\n"
                f"- Name one assumption or condition that must hold.\n"
                f"- Give one AP-style use (compare, calculate, justify, or interpret)."
            )
    else:
        sections.append(
            f"### Introducing {title}\n\n"
            f"Build a three-part understanding: (1) definitions, (2) governing "
            f"relationships or evidence types, and (3) interpretation in context."
        )

    formula_lines = extract_formula_lines(formulas, subject)
    if formula_lines:
        sections.append("\n### Governing relationships\n")
        sections.extend(formula_lines)

    sections.append(
        "\n### AP reasoning checklist\n"
        "- State what is given and what must be found.\n"
        "- Write the relationship or claim before substituting evidence or numbers.\n"
        "- Check a limiting case or counterexample.\n"
        "- Conclude in rubric language (justify, compare, interpret)."
    )
    return "\n".join(sections)


def lookup_block(subject: str, title: str) -> str | None:
    key = (subject, normalize_title(title))
    if key in HSS_LOOKUP:
        return HSS_LOOKUP[key]
    if key in PHYS_LOOKUP:
        return PHYS_LOOKUP[key]
    return None


def should_add_detailed_knowledge(summary: str, subject: str) -> bool:
    if MARKER in summary:
        return False
    # Very large uploads already contain extended notes; only add links elsewhere.
    if len(summary) >= 12000:
        return False
    return True


def synthesis_block(title: str, subject: str, summary: str, formulas: list[dict]) -> str:
    """Short overview for concepts that already have long numbered notes."""
    headers = headers_from_summary(summary)
    topics = ", ".join(headers[:5]) if headers else title
    formula_lines = extract_formula_lines(formulas, subject)
    parts = [
        MARKER,
        "",
        f"### How to study {title}",
        "",
        f"This topic connects **{topics}**. On the AP exam, success depends on "
        "linking definitions to evidence, calculations, or interpretation — not "
        "isolated vocabulary.",
        "",
        "### What to prioritize",
        "- State a precise claim or model before supporting details.",
        "- Use named examples, data, or equations with conditions stated.",
        "- Explain *why* each step matters for the prompt skill.",
    ]
    if formula_lines:
        parts.extend(["", "### Key relationships", ""] + formula_lines)
    parts.extend(
        [
            "",
            "### Before you move on",
            "- Can you explain the topic to someone using two concrete examples?",
            "- Can you name one common trap and how to avoid it?",
        ]
    )
    return "\n".join(parts)


def deepen_concepts(data: dict) -> dict[str, int]:
    concepts = data.get("concepts", [])
    formulas = data.get("formulas", [])
    stats = {
        "detailed_inserted": 0,
        "formula_links": 0,
        "key_points_fixed": 0,
        "mistakes_updated": 0,
        "examples_updated": 0,
    }

    for concept in concepts:
        subject = concept.get("subject", "")
        if not isinstance(subject, str) or not subject.startswith("AP"):
            continue

        title = clean_title(concept.get("title"))
        summary = concept.get("summary")
        if not isinstance(summary, str):
            summary = "" if summary is None else str(summary)

        changed = False
        block = lookup_block(subject, title)

        if block and should_add_detailed_knowledge(summary, subject):
            summary = insert_before_worked(summary, block)
            changed = True
            stats["detailed_inserted"] += 1
        elif should_add_detailed_knowledge(summary, subject):
            if len(summary) >= 6500 and len(headers_from_summary(summary)) >= 4:
                extra = synthesis_block(title, subject, summary, formulas)
            else:
                extra = generic_stem_block(title, subject, summary, formulas)
            if extra:
                summary = insert_before_worked(summary, extra)
                changed = True
                stats["detailed_inserted"] += 1

        if FORMULA_MARKER not in summary and subject in {
            "AP Physics 1",
            "AP Physics 2",
            "AP Physics C: Mechanics",
            "AP Physics C: E&M",
            "AP Calculus AB/BC",
            "AP Statistics",
            "AP Chemistry",
            "AP Biology",
            "AP Macroeconomics",
            "AP Microeconomics",
        }:
            link = formula_link_block(subject, title, formulas)
            if link:
                summary = insert_before_worked(summary, link)
                changed = True
                stats["formula_links"] += 1

        if has_generic_key_points(concept.get("keyPoints")):
            concept["keyPoints"] = substantive_key_points(summary, title, subject)
            changed = True
            stats["key_points_fixed"] += 1

        if not concept.get("commonMistakes") or has_generic_key_points(
            concept.get("commonMistakes")
        ):
            concept["commonMistakes"] = substantive_mistakes(title, subject)
            changed = True
            stats["mistakes_updated"] += 1

        if not concept.get("example") or len(str(concept.get("example", ""))) < 40:
            concept["example"] = substantive_example(title, subject)
            changed = True
            stats["examples_updated"] += 1

        if changed:
            concept["summary"] = summary

    return stats


def main() -> None:
    data = json.loads(DATA.read_text(encoding="utf-8"))
    stats = deepen_concepts(data)
    DATA.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print("Concept knowledge deepening complete:")
    for key, value in stats.items():
        print(f"  {key}: {value}")


if __name__ == "__main__":
    main()
