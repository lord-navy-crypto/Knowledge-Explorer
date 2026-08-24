#!/usr/bin/env python3
"""Inject TOEFL listening + speaking corpora into managed-content.json."""

from __future__ import annotations

import importlib.util
import json
import random
import string
import time
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
NOW_MS = int(time.time() * 1000)


def rid() -> str:
    h = format(random.getrandbits(32), "x")[:8]
    s = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"m-doc-toefl-{h}-{s}"


def load_attr(filename: str, attr: str):
    path = ROOT / "scripts" / filename
    spec = importlib.util.spec_from_file_location(filename.replace(".py", ""), path)
    mod = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    spec.loader.exec_module(mod)
    return getattr(mod, attr)


def inject(data: dict, candidates: list[dict]) -> int:
    docs = data.setdefault("documents", [])
    existing = {(d.get("space"), d.get("title")) for d in docs}
    ids = {d.get("id") for d in docs}
    added = 0
    for item in candidates:
        key = (item.get("space"), item.get("title"))
        if key in existing:
            continue
        doc_id = rid()
        while doc_id in ids:
            doc_id = rid()
        docs.append(
            {
                "id": doc_id,
                "title": item["title"],
                "content": item["content"],
                "category": item.get("category") or "TOEFL",
                "updatedAt": NOW_MS,
                "area": "english",
                "space": item["space"],
            }
        )
        existing.add(key)
        ids.add(doc_id)
        added += 1
    return added


def main() -> None:
    listening = load_attr("_toefl_listening_corpus.py", "LISTENING_DOCS")
    speaking = load_attr("_toefl_speaking_corpus.py", "SPEAKING_DOCS")
    data = json.loads(DATA.read_text(encoding="utf-8"))
    n_listen = inject(data, listening)
    n_speak = inject(data, speaking)
    DATA.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    english = [d for d in data["documents"] if d.get("area") == "english"]
    print("Injected listening:", n_listen, "speaking:", n_speak)
    print("English docs by space:", Counter(d.get("space") for d in english))
    print("Listening categories:", Counter(
        d.get("title", "").split(" · ")[1].split(" 0")[0]
        if " · " in d.get("title", "") else "?"
        for d in english
        if d.get("space") == "toefl-listening"
    ))


if __name__ == "__main__":
    main()
