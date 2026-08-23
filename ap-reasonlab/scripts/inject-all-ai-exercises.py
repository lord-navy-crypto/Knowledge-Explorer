#!/usr/bin/env python3
"""Inject all _gen_*.py QUIZZES + E&M/Mech batch2 into managed-content.json."""
import importlib.util
import json
import random
import string
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"
SCRIPTS = Path(__file__).resolve().parent


def rid(prefix: str) -> str:
    h = format(random.getrandbits(32), "x")[:8]
    s = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{h}-{s}"


def load_module(path: Path):
    spec = importlib.util.spec_from_file_location(path.stem, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def inject(quizzes):
    data = json.loads(DATA.read_text())
    titles = {q["title"] for q in data["questionnaires"]}
    ids = {q["id"] for q in data["questionnaires"]}
    for q in data["questionnaires"]:
        for it in q.get("items", []):
            ids.add(it["id"])

    added = []
    skipped = []
    for q in quizzes:
        if q["title"] in titles:
            skipped.append(q["title"])
            continue
        while q["id"] in ids:
            q["id"] = rid("m-quiz")
        ids.add(q["id"])
        for item in q["items"]:
            while item["id"] in ids:
                item["id"] = rid("m-item")
            ids.add(item["id"])
        titles.add(q["title"])
        added.append(q)

    data["questionnaires"].extend(added)
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    return added, skipped


def main():
    all_q = []
    for name in [
        "_gen_chem_bio_env.py",
        "_gen_csa_csp_psych_econ.py",
        "_gen_history_english_geo.py",
        "generate-em-mech-ai-exercises-batch2.py",
    ]:
        path = SCRIPTS / name
        if not path.exists():
            print("MISSING", path)
            continue
        mod = load_module(path)
        qs = getattr(mod, "QUIZZES", None)
        if qs is None:
            print("no QUIZZES in", name)
            continue
        print(f"load {name}: {len(qs)} quizzes")
        all_q.extend(qs)

    added, skipped = inject(all_q)
    from collections import Counter

    c = Counter(q["subject"] for q in added)
    items = sum(len(q["items"]) for q in added)
    print(f"Added {len(added)} quizzes / {items} items; skipped {len(skipped)}")
    for s, n in sorted(c.items()):
        print(f"  {s}: {n}")


if __name__ == "__main__":
    main()
