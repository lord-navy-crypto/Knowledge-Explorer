from pathlib import Path

from streamlit.testing.v1 import AppTest


APP_PATH = Path(__file__).resolve().parents[1] / "app.py"


def _button(app: AppTest, label: str):
    return next(item for item in app.button if item.label == label)


def test_app_loads_expected_sections() -> None:
    app = AppTest.from_file(str(APP_PATH)).run(timeout=30)
    assert not app.exception
    labels = [tab.label for tab in app.tabs]
    for expected in (
        "Overview",
        "Method comparison",
        "Equilibration",
        "1D vs exact",
        "2D vs Onsager",
        "Finite size",
        "Snapshots",
        "External data",
        "Validation",
    ):
        assert expected in labels
    assert any(metric.label == "Exact 1D reference" for metric in app.metric)


def test_snapshot_and_compliance_run() -> None:
    app = AppTest.from_file(str(APP_PATH)).run(timeout=30)
    _button(app, "Generate snapshot").click()
    app.run(timeout=60)
    assert not app.exception
    _button(app, "Run compliance suite").click()
    app.run(timeout=60)
    assert not app.exception
