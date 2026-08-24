#!/usr/bin/env python3
"""Inject Digital SAT Math + Reading & Writing AI practice into managed-content.json."""

from __future__ import annotations

import json
import uuid
from datetime import datetime, timezone
from pathlib import Path

from _sat_english_rw_corpus import SAT_RW_DOCS
from _sat_math_corpus import SAT_MATH_DOCS

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "data" / "managed-content.json"
NOW = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")


def main() -> None:
    data = json.loads(CONTENT.read_text(encoding="utf-8"))
    docs = data.setdefault("documents", [])
    existing = {(d.get("space"), d.get("title")) for d in docs}

    added = 0
    by_space: dict[str, int] = {}
    for item in [*SAT_MATH_DOCS, *SAT_RW_DOCS]:
        key = (item["space"], item["title"])
        if key in existing:
            continue
        docs.append(
            {
                "id": str(uuid.uuid4()),
                "title": item["title"],
                "content": item["content"],
                "area": "english",
                "space": item["space"],
                "createdAt": NOW,
                "updatedAt": NOW,
            }
        )
        existing.add(key)
        added += 1
        by_space[item["space"]] = by_space.get(item["space"], 0) + 1

    CONTENT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    sat_spaces = {"sat-english", "sat-grammar", "sat-reading", "sat-mathematics"}
    totals = {}
    for s in sat_spaces:
        totals[s] = sum(1 for d in docs if d.get("space") == s)

    print(f"added={added}")
    print("by_space", by_space)
    print("totals", totals)
    print(f"english_docs={sum(1 for d in docs if d.get('area') == 'english')}")


if __name__ == "__main__":
    main()
