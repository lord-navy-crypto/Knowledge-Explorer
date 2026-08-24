#!/usr/bin/env python3
"""Inject Wave 7 FRQ-only AP practice questionnaires."""

from __future__ import annotations

import importlib.util
import json
import random
import string
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"


def rid(prefix: str) -> str:
    token = f"{random.getrandbits(32):08x}"
    suffix = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{token}-{suffix}"


def load_attr(filename: str, attr: str):
    path = ROOT / "scripts" / filename
    spec = importlib.util.spec_from_file_location(filename.replace(".py", ""), path)
    mod = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    spec.loader.exec_module(mod)
    return getattr(mod, attr)


def stamp_ids(quiz: dict, used_ids: set[str]) -> dict:
    qid = rid("m-quiz")
    while qid in used_ids:
        qid = rid("m-quiz")
    used_ids.add(qid)
    items = []
    for item in quiz.get("items") or []:
        iid = rid("m-item")
        while iid in used_ids:
            iid = rid("m-item")
        used_ids.add(iid)
        row = dict(item)
        row["id"] = iid
        if "hints" not in row:
            row["hints"] = [
                "State the claim or governing relationship first.",
                "Show one intermediate step with evidence or symbols.",
                "Interpret the conclusion in AP rubric language.",
            ]
        items.append(row)
    out = dict(quiz)
    out["id"] = qid
    out["items"] = items
    out.setdefault("kind", "generated")
    out.setdefault("tags", ["frq-practice", "wave-7", "ced-aligned", "generated", "with-solutions"])
    return out


def main() -> None:
    quizzes: list[dict] = []
    for filename in (
        "_frq_wave7_stem.py",
        "_frq_wave7_hss.py",
        "_frq_wave7_econ_cs.py",
    ):
        quizzes.extend(load_attr(filename, "FRQ_QUIZZES"))

    data = json.loads(DATA.read_text(encoding="utf-8"))
    existing_titles = {q.get("title") for q in data.get("questionnaires", [])}
    used_ids = {q.get("id") for q in data.get("questionnaires", []) if q.get("id")}
    for q in data.get("questionnaires", []):
        for item in q.get("items") or []:
            if item.get("id"):
                used_ids.add(item["id"])

    added = 0
    frqs = 0
    for quiz in quizzes:
        if quiz.get("title") in existing_titles:
            continue
        stamped = stamp_ids(quiz, used_ids)
        data.setdefault("questionnaires", []).append(stamped)
        existing_titles.add(stamped["title"])
        added += 1
        frqs += sum(1 for it in stamped["items"] if "frq" in str(it.get("format")))

    DATA.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    allq = data["questionnaires"]
    print(f"Added {added} FRQ quizzes ({frqs} FRQ items)")
    print("Total questionnaires:", len(allq))
    print(
        "Wave-7 quizzes:",
        sum(1 for q in allq if "wave-7" in (q.get("tags") or [])),
    )
    print("Subjects:", Counter(q.get("subject") for q in allq if "wave-7" in (q.get("tags") or [])))


if __name__ == "__main__":
    main()
