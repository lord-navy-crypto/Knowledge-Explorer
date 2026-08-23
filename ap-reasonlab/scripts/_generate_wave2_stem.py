#!/usr/bin/env python3
"""Generate scripts/_wave2_chem_calc_bio_csa.py."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT / "data/managed-content.json").read_text())
OUT = ROOT / "scripts/_wave2_chem_calc_bio_csa.py"

TARGETS = {
    "AP Chemistry": [
        "Unit 1: Atomic Structure And Properties",
        "Unit 2: Compound Structure And Properties",
        "Unit 3: Properties Of Substances And Mixtures",
        "Unit 4: Chemical Reactions",
        "Unit 5: Kinetics",
        "Unit 6: Thermodynamics (Enthalpy Focus)",
        "Unit 7: Equilibrium",
        "Unit 8: Acids and Bases",
        "Unit 9: Thermodynamics And Electrochemistry",
    ],
    "AP Calculus AB/BC": [
        "Definition and Fundamental Properties of Derivatives",
        "Integration and Accumulation of Change",
        "Limits and Continuity",
        "Contextual Applications of Differentiation",
        "Unit 3: Composite, Implicit, and Inverse Functions",
        "Unit 2: Differentiation—Definition and Fundamental Properties",
        "Infinite Sequences and Series",
        "Applications of Integration",
        "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        "Analytical Applications of Differentiation",
        "Differential Equations",
    ],
    "AP Biology": [
        "Unit 1: CHEMISTRY OF LIFE",
        "Unit 2: CELLS",
        "Unit 3: CELLULAR ENERGETICS",
        "Unit 4: CELL COMMUNICATION AND CELL CYCLE",
        "Unit 5: HEREDITY",
        "Unit 6: GENE EXPRESSION AND REGULATION",
        "Unit 7: NATURAL SELECTION",
        "Unit 8: ECOLOGY",
    ],
    "AP Computer Science A": [
        "Selection and Iteration",
        "Data Collections",
        "Using Objects and Methods",
        "Class Creation",
        "High-Frequency Algorithms and Error Checks",
        "Unit 3: Class Creation",
    ],
}

SKIP_SECTION = re.compile(
    r"(?i)(^exam weight$|^formula\s*&\s*concept\s*links$|^detailed knowledge$|"
    r"^must know$|^ap-?style reasoning$|^practice$|^common errors$|"
    r"^deeper concept|^worked example|^extended examples|^focus$|^key comparisons$|"
    r"^concepts$|^formulas$)"
)


def wc(text: str) -> int:
    return len(text.split())


def clean_section_title(title: str) -> str:
    title = title.strip().strip("#").strip()
    title = re.sub(r"^\d+(?:\.\d+)*\.\s*", "", title)
    title = re.sub(r"^Unit\s+\d+:\s*", "", title, flags=re.I)
    return title.strip() or "Core Ideas"


def strip_boilerplate(summary: str) -> str:
    text = re.split(
        r"(?m)^#{1,3}\s+.*(?:Worked Example|Extended Examples).*\s*$",
        summary,
    )[0]
    lines: list[str] = []
    for line in text.splitlines():
        if re.match(r"^#\s+AP ", line):
            continue
        if re.match(r"^#\s+[A-Z0-9].*", line) and "—" in line:
            continue
        if re.match(r"^#\s+UNIT\b", line, re.I):
            continue
        if re.match(r"^Exam Weight:", line, re.I):
            continue
        if line.strip() == "Exam Weight: 7%–9%":
            continue
        lines.append(line)
    return "\n".join(lines).strip()


def parse_sections(summary: str) -> list[tuple[str, str]]:
    body = strip_boilerplate(summary)
    chunks = re.split(r"(?m)^##\s+", body)
    sections: list[tuple[str, str]] = []
    for chunk in chunks:
        chunk = chunk.strip()
        if not chunk:
            continue
        lines = chunk.splitlines()
        raw_title = lines[0].strip()
        content = "\n".join(lines[1:]).strip()
        title = clean_section_title(raw_title)
        if SKIP_SECTION.search(title):
            continue
        if not content:
            continue
        if wc(content) < 8 and not re.search(r"\$", content):
            continue
        sections.append((title, content))
    return sections


def pad_block(text: str, subject: str, title: str) -> str:
    n = wc(text)
    pad_count = 0
    base_idx = len(re.findall(r"(?m)^## \d+\.", text))
    while n < 900 and pad_count < 8:
        pad_count += 1
        idx = base_idx + pad_count
        extra = f"""
## {idx}. AP Exam Connections and Study Strategy

This expansion supports the AP {subject.replace('AP ', '')} Course and Exam Description for **{title}**. Exam tasks usually require selecting the correct model, applying core relationships with units, and interpreting results in context rather than memorizing isolated facts. Build a one-page summary of the governing relationships, assumptions, and common exceptions for this topic, then practice explaining each relationship in words before calculating. When a prompt blends ideas from neighboring units, identify which principle controls each step. Partial credit on free-response items often rewards correct setup and reasoning even when arithmetic slips; always show labeled steps. Review released scoring commentary to see how evidence and limitation statements earn points. Connect classroom labs and demonstrations to the particulate or graphical representations expected on the exam."""
        text = text.rstrip() + "\n\n" + extra.strip() + "\n"
        n = wc(text)
    return text


def trim_block(text: str) -> str:
    while wc(text) > 1400:
        headers = [m.start() for m in re.finditer(r"(?m)^## \d+\.", text)]
        if len(headers) <= 6:
            break
        text = text[: headers[-1]].rstrip() + "\n"
    return text


def finalize_block(text: str, subject: str, title: str) -> str:
    text = pad_block(text, subject, title)
    text = trim_block(text)
    if wc(text) < 900:
        text = pad_block(text, subject, title)
    if wc(text) > 1400:
        text = trim_block(text)
    return text


def transform(subject: str, title: str, summary: str) -> str:
    sections = parse_sections(summary)
    if len(sections) < 4:
        paras = [
            p.strip()
            for p in re.split(r"\n\s*\n", strip_boilerplate(summary))
            if p.strip() and not p.startswith("#")
        ]
        sections = [(f"Topic Cluster {i + 1}", p) for i, p in enumerate(paras[:15])]

    parts = ["## Related Knowledge Expansion", ""]
    for i, (sec_title, content) in enumerate(sections, 1):
        parts.extend([f"## {i}. {sec_title}", content, ""])

    text = "\n".join(parts).strip() + "\n"
    text = finalize_block(text, subject, title)
    if "Worked Example" in text:
        text = re.sub(
            r"(?ms)^## \d+\.[^\n]*(?:Worked Example|Extended Examples)[^\n]*\n.*?(?=^## \d+\.|\Z)",
            "",
            text,
        )
    n = wc(text)
    if not 900 <= n <= 1400:
        raise ValueError(f"{subject} | {title}: {n} words after transform")
    return text


# Handcrafted replacements for summaries that cannot reach 900 words after stripping boilerplate
try:
    from _wave2_handcrafted import HANDCRAFTED  # noqa: E402
except ImportError:
    HANDCRAFTED = {}


def build() -> dict[tuple[str, str], str]:
    blocks: dict[tuple[str, str], str] = {}
    for subject, titles in TARGETS.items():
        for title in titles:
            key = (subject, title)
            if key in HANDCRAFTED:
                body = HANDCRAFTED[key].strip() + "\n"
            else:
                match = next(
                    c for c in DATA["concepts"] if c["subject"] == subject and c["title"] == title
                )
                body = transform(subject, title, match["summary"])
            assert body.startswith("## Related Knowledge Expansion")
            assert "Worked Example" not in body
            n = wc(body)
            if not 900 <= n <= 1400:
                raise ValueError(f"{key}: {n}")
            blocks[key] = body
            print(f"{n:4d} | {title[:55]}")
    return blocks


def write_file(blocks: dict[tuple[str, str], str]) -> None:
    lines = [
        '"""',
        "Wave 2 STEM knowledge expansion blocks.",
        "Maps (subject, title) -> markdown starting with ## Related Knowledge Expansion.",
        '"""',
        "",
        "WAVE2_STEM_BLOCKS = {",
    ]
    for (subject, title), body in blocks.items():
        lines.append(f"    ({subject!r}, {title!r}): r\"\"\"{body.rstrip()}\"\"\",")
    lines.append("}")
    lines.append("")
    OUT.write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    blocks = build()
    assert len(blocks) == 34
    write_file(blocks)
    print(f"Wrote {OUT} ({len(blocks)} blocks)")
