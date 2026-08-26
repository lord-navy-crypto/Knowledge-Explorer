from __future__ import annotations

import json
from datetime import datetime, timezone

import numpy as np
import pandas as pd
import plotly.graph_objects as go
import streamlit as st

from ising_lab import (
    IsingParams,
    Method,
    estimate_equilibration_sweep,
    exact_observables,
    finite_size_scan,
    magnetization_estimators,
    method_comparison,
    notebook_temperature_grid,
    onsager_tc,
    simulate,
    thermodynamic_scan,
)


APP_VERSION = "1.0.0"
METHOD_LABELS = {
    "Metropolis (random, notebook)": Method.METROPOLIS,
    "Metropolis (checkerboard)": Method.CHECKERBOARD,
    "Heat-bath": Method.HEAT_BATH,
    "Wolff cluster": Method.WOLFF,
}

st.set_page_config(
    page_title="Ising Monte Carlo Lab",
    page_icon="▦",
    layout="wide",
    initial_sidebar_state="expanded",
)

st.markdown(
    """
    <style>
    .stApp{background:linear-gradient(145deg,#f7faff 0%,#fff 45%,#f7f4ff 100%)}
    .hero{padding:1.45rem 1.7rem;border-radius:20px;color:white;
      background:linear-gradient(120deg,#172a46 0%,#365fa0 50%,#6b3fa0 100%);
      box-shadow:0 14px 34px rgba(23,42,70,.2);margin-bottom:1rem}
    .hero h1{margin:0 0 .35rem;font-size:2.1rem}.hero p{margin:0;opacity:.93}
    .note{padding:.85rem 1rem;border-left:4px solid #365fa0;border-radius:8px;
      background:#edf4ff;margin:.5rem 0 1rem}
    div[data-testid="stMetric"]{background:white;border:1px solid #dce5ef;
      padding:.7rem;border-radius:14px;box-shadow:0 4px 14px rgba(23,42,70,.05)}
    </style>
    """,
    unsafe_allow_html=True,
)


def defaults() -> dict[str, object]:
    return {
        "size": 16,
        "coupling": 1.0,
        "field": 0.0,
        "temperature": 2.5,
        "dimension": 2,
        "seed": 2026,
        "eq_sweeps": 400,
        "mc_sweeps": 800,
        "measure_every": 1,
        "record_every": 10,
        "comparison_eq": 250,
        "comparison_mc": 400,
        "thermo_method": "Wolff cluster",
        "T_min": 0.8,
        "T_max": 3.5,
        "T_points": 17,
        "use_notebook_grid": False,
        "eq_diagnostic_sweeps": 1200,
        "finite_sizes": "8,12,16,24",
        "snapshot_sweeps": 200,
        "snapshot_initial": "random",
    }


RESULT_KEYS = (
    "comparison_result",
    "equilibration_result",
    "thermo_1d_result",
    "thermo_2d_result",
    "finite_size_result",
    "snapshot_result",
    "external_result",
    "validation_result",
)


def initialize() -> None:
    for key, value in defaults().items():
        st.session_state.setdefault(key, value)
    for key in RESULT_KEYS:
        st.session_state.setdefault(key, None)


def params(**overrides: float | int) -> IsingParams:
    values = {
        "size": int(st.session_state.size),
        "coupling": float(st.session_state.coupling),
        "field": float(st.session_state.field),
        "temperature": float(st.session_state.temperature),
        "dimension": int(st.session_state.dimension),
    }
    values.update(overrides)
    return IsingParams(**values)


def config() -> dict[str, object]:
    return {
        "schema": "ising-monte-carlo-lab-v1",
        "app_version": APP_VERSION,
        "created_utc": datetime.now(timezone.utc).isoformat(),
        **{key: st.session_state[key] for key in defaults()},
    }


def load_config(uploaded) -> None:
    if uploaded is None:
        return
    signature = (uploaded.name, uploaded.size)
    if st.session_state.get("loaded_signature") == signature:
        return
    try:
        loaded = json.loads(uploaded.getvalue().decode("utf-8"))
        if not isinstance(loaded, dict):
            raise ValueError("configuration root must be a JSON object")
        candidate = defaults()
        for key, fallback in candidate.items():
            if key in loaded:
                candidate[key] = type(fallback)(loaded[key])
        if candidate["size"] < 4 or candidate["coupling"] <= 0 or candidate["temperature"] <= 0:
            raise ValueError("size, coupling, and temperature must be positive with size >= 4")
        if candidate["thermo_method"] not in METHOD_LABELS:
            raise ValueError("unknown Monte Carlo method")
        if int(candidate["dimension"]) not in (1, 2):
            raise ValueError("dimension must be 1 or 2")
        for key, value in candidate.items():
            st.session_state[key] = value
        for key in RESULT_KEYS:
            st.session_state[key] = None
        st.session_state.loaded_signature = signature
        st.success("Configuration loaded. Run an experiment to refresh results.")
    except (ValueError, TypeError, UnicodeDecodeError) as exc:
        st.error(f"Could not load configuration: {exc}")


def progress(label: str):
    bar = st.progress(0, text=label)

    def update(done: int, total: int) -> None:
        bar.progress(done / total, text=f"{label}: {done}/{total}")

    return bar, update


def download_frame(label: str, frame: pd.DataFrame, filename: str) -> None:
    st.download_button(
        label,
        frame.to_csv(index=False).encode("utf-8"),
        file_name=filename,
        mime="text/csv",
    )


def plot_lines(
    x: np.ndarray,
    series: dict[str, np.ndarray],
    *,
    title: str,
    x_title: str,
    y_title: str,
    log_y: bool = False,
    vline: float | None = None,
) -> go.Figure:
    colors = ["#1f5f99", "#d1495b", "#2a9d8f", "#7b2cbf", "#f4a261", "#111111"]
    figure = go.Figure()
    for index, (name, values) in enumerate(series.items()):
        figure.add_scatter(
            x=x,
            y=values,
            mode="lines",
            name=name,
            line={"width": 2, "color": colors[index % len(colors)]},
        )
    if vline is not None:
        figure.add_vline(x=vline, line_dash="dash", line_color="#111111", annotation_text="Tc")
    figure.update_layout(
        template="plotly_white",
        height=450,
        title=title,
        xaxis_title=x_title,
        yaxis_title=y_title,
        yaxis_type="log" if log_y else "linear",
        hovermode="x unified",
    )
    return figure


def selected_method() -> Method:
    method = METHOD_LABELS[st.session_state.thermo_method]
    if method is Method.WOLFF and abs(float(st.session_state.field)) > 0:
        st.warning("Wolff requires h = 0; the scan will use checkerboard Metropolis instead.")
        return Method.CHECKERBOARD
    return method


def temperature_grid() -> np.ndarray:
    if st.session_state.use_notebook_grid:
        return notebook_temperature_grid()
    return np.linspace(st.session_state.T_min, st.session_state.T_max, int(st.session_state.T_points))


initialize()

st.markdown(
    """
    <section class="hero">
      <h1>Ising Monte Carlo Lab</h1>
      <p>1D transfer-matrix and 2D Onsager references, four Monte Carlo
      update methods, equilibration diagnostics, and finite-size checks.</p>
    </section>
    """,
    unsafe_allow_html=True,
)

with st.sidebar:
    st.header("Physical configuration")
    load_config(st.file_uploader("Import configuration", type=["json"]))
    st.selectbox("Dimension", [1, 2], key="dimension")
    st.number_input("Linear size N", min_value=4, max_value=128, step=1, key="size")
    st.number_input("Coupling J", min_value=0.001, max_value=100.0, key="coupling")
    st.number_input("Magnetic field h", min_value=-10.0, max_value=10.0, key="field")
    st.number_input("Temperature T (J/kB)", min_value=0.05, max_value=20.0, key="temperature")
    st.number_input("Random seed", min_value=0, max_value=10_000_000, step=1, key="seed")
    st.subheader("Monte Carlo budget")
    c1, c2 = st.columns(2)
    c1.number_input("Equilibration sweeps", min_value=0, max_value=200000, step=50, key="eq_sweeps")
    c2.number_input("Measurement sweeps", min_value=10, max_value=200000, step=50, key="mc_sweeps")
    st.selectbox("Default scan method", list(METHOD_LABELS), key="thermo_method")
    st.download_button(
        "Download configuration",
        json.dumps(config(), indent=2).encode("utf-8"),
        file_name="ising_lab_config.json",
        mime="application/json",
        width="stretch",
    )
    if st.button("Reset configuration", width="stretch"):
        for key, value in defaults().items():
            st.session_state[key] = value
        for key in RESULT_KEYS:
            st.session_state[key] = None
        st.rerun()
    critical = onsager_tc(float(st.session_state.coupling))
    st.caption(f"2D Onsager Tc = {critical:.6g} J/kB (infinite volume, h = 0)")
    st.caption("1D has no finite-temperature transition at h = 0.")
    st.caption(f"Platform version: {APP_VERSION}")

overview_tab, methods_tab, equilibration_tab, d1_tab, d2_tab, finite_tab, snapshot_tab, external_tab, validation_tab = st.tabs(
    [
        "Overview",
        "Method comparison",
        "Equilibration",
        "1D vs exact",
        "2D vs Onsager",
        "Finite size",
        "Snapshots",
        "External data",
        "Validation",
    ]
)

with overview_tab:
    st.subheader("What this platform investigates")
    st.latex(r"\mathcal{H} = -J\sum_{\langle ij\rangle}\sigma_i\sigma_j - h\sum_i\sigma_i,\quad \sigma_i=\pm 1")
    a, b, c, d = st.columns(4)
    a.metric("Exact 1D reference", "Transfer matrix")
    b.metric("Exact 2D reference", "Onsager / Yang")
    c.metric("Fixed-work methods", "4")
    d.metric("2D critical T", f"{onsager_tc(float(st.session_state.coupling)):.4g} J/kB")
    st.markdown(
        """
        <div class="note"><b>Interpretation rule:</b> a smooth magnetization curve is not proof of
        equilibrium. The original notebook used |&lt;M&gt;|/N, which collapses under sign flips;
        this platform reports &lt;|M|&gt;/N, measures mixing, and compares Monte Carlo to an
        independent exact reference. Finite-N data are not like-for-like with the infinite-volume
        Onsager solution.</div>
        """,
        unsafe_allow_html=True,
    )
    st.write(
        "The notebook also reused the 2D critical temperature on 1D plots, thresholded extensive "
        "energy variance, and drew one specific-heat axvline on the magnetization panel. Those "
        "defects are repaired here."
    )
    grid = np.linspace(0.6, 3.6, 181)
    one_d = [exact_observables(IsingParams(size=64, coupling=float(st.session_state.coupling), temperature=float(t), dimension=1)) for t in grid]
    two_d = [exact_observables(IsingParams(size=64, coupling=float(st.session_state.coupling), temperature=float(t), dimension=2)) for t in grid]
    left, right = st.columns(2)
    left.plotly_chart(
        plot_lines(
            grid,
            {
                "1D exact energy": np.array([row["energy_per_site"] for row in one_d]),
                "2D Onsager energy": np.array([row["energy_per_site"] for row in two_d]),
            },
            title="Independent exact energy references",
            x_title="Temperature T (J/kB) — scanned independent variable",
            y_title="Energy per site (J)",
            vline=onsager_tc(float(st.session_state.coupling)),
        ),
        width="stretch",
    )
    right.plotly_chart(
        plot_lines(
            grid,
            {
                "1D exact M = 0": np.array([row["magnetization"] for row in one_d]),
                "2D Onsager spontaneous M": np.array([row["magnetization"] for row in two_d]),
            },
            title="1D has no finite-T transition; 2D does",
            x_title="Temperature T (J/kB)",
            y_title="Magnetization per site",
            vline=onsager_tc(float(st.session_state.coupling)),
        ),
        width="stretch",
    )

with methods_tab:
    st.subheader("Four Monte Carlo methods versus the independent exact reference")
    c1, c2 = st.columns(2)
    c1.number_input("Comparison equilibration sweeps", min_value=0, max_value=50000, step=50, key="comparison_eq")
    c2.number_input("Comparison measurement sweeps", min_value=10, max_value=50000, step=50, key="comparison_mc")
    wolff_blocked = abs(float(st.session_state.field)) > 0
    if wolff_blocked:
        st.warning("Wolff is omitted while h ≠ 0 because the cluster embedding used here is zero-field.")
    if st.button("Run method comparison", type="primary"):
        bar, update = progress("Method comparison")
        st.session_state.comparison_result = method_comparison(
            params(),
            equilibration_sweeps=int(st.session_state.comparison_eq),
            measurement_sweeps=int(st.session_state.comparison_mc),
            seed=int(st.session_state.seed),
            progress_callback=update,
        )
        bar.progress(1.0, text="Method comparison complete")
    if st.session_state.comparison_result is not None:
        result = st.session_state.comparison_result
        metrics = []
        energy_series = {}
        for name, data in result.items():
            if name == "analytic":
                metrics.append(
                    {
                        "method": name,
                        "energy_per_site": data["energy_per_site"],
                        "mean_abs_magnetization": data["magnetization"],
                        "abs_mean_magnetization": data.get("magnetization", np.nan),
                        "specific_heat": data["specific_heat"],
                        "ensemble": data.get("ensemble", ""),
                    }
                )
                continue
            stride = int(data["record_stride"])
            sweeps = np.arange(1, np.asarray(data["trajectory_energy"]).size + 1) * stride
            energy_series[name] = np.asarray(data["trajectory_energy"])
            metrics.append(
                {
                    "method": name,
                    "energy_per_site": data["energy_per_site"],
                    "mean_abs_magnetization": data["mean_abs_magnetization"],
                    "abs_mean_magnetization": data["abs_mean_magnetization"],
                    "specific_heat": data["specific_heat"],
                    "ensemble": "finite-N Monte Carlo",
                }
            )
        first = next(iter(energy_series.values()))
        times = np.arange(1, first.size + 1) * int(next(data["record_stride"] for name, data in result.items() if name != "analytic"))
        st.plotly_chart(
            plot_lines(
                times,
                energy_series,
                title="Energy mixing at the current temperature",
                x_title="Sweep (work-equivalent)",
                y_title="Energy per site (J)",
            ),
            width="stretch",
        )
        metric_frame = pd.DataFrame(metrics)
        st.dataframe(metric_frame, width="stretch", hide_index=True)
        download_frame("Download method metrics", metric_frame, "method_comparison_metrics.csv")

with equilibration_tab:
    st.subheader("Intensive equilibration diagnostic")
    st.number_input("Diagnostic sweeps", min_value=50, max_value=200000, step=50, key="eq_diagnostic_sweeps")
    st.number_input("Record every n sweeps", min_value=1, max_value=200, step=1, key="record_every")
    if st.button("Run equilibration trajectory", type="primary"):
        bar, update = progress("Equilibration")
        st.session_state.equilibration_result = simulate(
            params(),
            method=selected_method(),
            equilibration_sweeps=0,
            measurement_sweeps=int(st.session_state.eq_diagnostic_sweeps),
            seed=int(st.session_state.seed),
            record_every=int(st.session_state.record_every),
            progress_callback=update,
        )
        bar.progress(1.0, text="Equilibration complete")
    if st.session_state.equilibration_result is not None:
        result = st.session_state.equilibration_result
        energy_series = np.asarray(result["trajectory_energy"])
        times = np.arange(1, energy_series.size + 1) * int(result["record_stride"])
        estimated = estimate_equilibration_sweep(energy_series, int(result["record_stride"]))
        st.metric("Estimated equilibration time", f"{estimated} sweeps")
        st.plotly_chart(
            plot_lines(
                times,
                {"Energy per site": energy_series, "Magnetization per site": np.asarray(result["trajectory_magnetization"])},
                title="Equilibration uses energy per site, not extensive energy",
                x_title="Sweep",
                y_title="Intensive observable",
            ),
            width="stretch",
        )
        frame = pd.DataFrame(
            {
                "sweep": times,
                "energy_per_site": energy_series,
                "magnetization_per_site": np.asarray(result["trajectory_magnetization"]),
            }
        )
        download_frame("Download equilibration series", frame, "equilibration_series.csv")

with d1_tab:
    st.subheader("1D thermodynamics versus the periodic transfer matrix")
    c1, c2, c3 = st.columns(3)
    c1.number_input("Minimum T", min_value=0.05, max_value=10.0, key="T_min")
    c2.number_input("Maximum T", min_value=0.1, max_value=20.0, key="T_max")
    c3.slider("Scan points", 5, 60, key="T_points")
    st.checkbox("Use original notebook temperature mesh", key="use_notebook_grid")
    invalid = st.session_state.T_min >= st.session_state.T_max
    if st.button("Run 1D temperature scan", type="primary", disabled=invalid):
        bar, update = progress("1D scan")
        st.session_state.thermo_1d_result = thermodynamic_scan(
            temperature_grid(),
            params(dimension=1),
            method=selected_method(),
            equilibration_sweeps=int(st.session_state.eq_sweeps),
            measurement_sweeps=int(st.session_state.mc_sweeps),
            seed=int(st.session_state.seed),
            progress_callback=update,
        )
        bar.progress(1.0, text="1D scan complete")
    if st.session_state.thermo_1d_result is not None:
        result = st.session_state.thermo_1d_result
        temps = result["temperature"]
        left, right = st.columns(2)
        left.plotly_chart(
            plot_lines(
                temps,
                {
                    "Monte Carlo energy": result["energy_per_site"],
                    "Exact finite-N energy": result["analytic_energy"],
                },
                title="1D energy per site",
                x_title="Temperature T (J/kB) — scanned independent variable",
                y_title="Energy per site (J)",
            ),
            width="stretch",
        )
        right.plotly_chart(
            plot_lines(
                temps,
                {
                    "Monte Carlo <|M|>/N": result["mean_abs_magnetization"],
                    "Notebook |<M>|/N": result["abs_mean_magnetization"],
                    "Exact M = 0": result["analytic_magnetization"],
                },
                title="1D magnetization estimators",
                x_title="Temperature T (J/kB)",
                y_title="Magnetization per site",
            ),
            width="stretch",
        )
        frame = pd.DataFrame(result)
        st.dataframe(frame, width="stretch", hide_index=True)
        download_frame("Download 1D scan", frame, "ising_1d_temperature_scan.csv")

with d2_tab:
    st.subheader("2D thermodynamics versus Onsager, with Tc on the scan axis")
    if abs(float(st.session_state.field)) > 0:
        st.warning("The Onsager overlay requires h = 0. Monte Carlo can still run at finite field.")
    if st.button("Run 2D temperature scan", type="primary", disabled=st.session_state.T_min >= st.session_state.T_max):
        bar, update = progress("2D scan")
        st.session_state.thermo_2d_result = thermodynamic_scan(
            temperature_grid(),
            params(dimension=2),
            method=selected_method(),
            equilibration_sweeps=int(st.session_state.eq_sweeps),
            measurement_sweeps=int(st.session_state.mc_sweeps),
            seed=int(st.session_state.seed),
            progress_callback=update,
        )
        bar.progress(1.0, text="2D scan complete")
    if st.session_state.thermo_2d_result is not None:
        result = st.session_state.thermo_2d_result
        temps = result["temperature"]
        critical = onsager_tc(float(st.session_state.coupling))
        left, right = st.columns(2)
        left.plotly_chart(
            plot_lines(
                temps,
                {
                    "Monte Carlo <|M|>/N": result["mean_abs_magnetization"],
                    "Notebook |<M>|/N": result["abs_mean_magnetization"],
                    "Onsager spontaneous M": result["analytic_magnetization"],
                },
                title="2D magnetization; finite N rounds the infinite-volume jump",
                x_title="Temperature T (J/kB) — scanned independent variable",
                y_title="Magnetization per site",
                vline=critical,
            ),
            width="stretch",
        )
        right.plotly_chart(
            plot_lines(
                temps,
                {
                    "Monte Carlo energy": result["energy_per_site"],
                    "Onsager energy": result["analytic_energy"],
                },
                title="2D energy per site",
                x_title="Temperature T (J/kB)",
                y_title="Energy per site (J)",
                vline=critical,
            ),
            width="stretch",
        )
        heat = go.Figure()
        heat.add_scatter(x=temps, y=result["specific_heat"], name="Monte Carlo Cv")
        analytic_heat = np.asarray(result["analytic_specific_heat"], dtype=float)
        finite = np.isfinite(analytic_heat)
        heat.add_scatter(x=temps[finite], y=analytic_heat[finite], name="Onsager Cv", line={"dash": "dash"})
        heat.add_vline(x=critical, line_dash="dash", line_color="#111111")
        heat.update_layout(
            template="plotly_white",
            height=450,
            title="Specific heat; Onsager diverges only in the infinite-volume limit",
            xaxis_title="Temperature T (J/kB)",
            yaxis_title="Specific heat per site (kB)",
        )
        st.plotly_chart(heat, width="stretch")
        frame = pd.DataFrame(result)
        download_frame("Download 2D scan", frame, "ising_2d_temperature_scan.csv")

with finite_tab:
    st.subheader("Finite-size approach to the thermodynamic-limit reference")
    st.text_input("Lattice sizes", key="finite_sizes")
    if st.button("Run finite-size scan", type="primary"):
        try:
            sizes = np.asarray([int(part.strip()) for part in str(st.session_state.finite_sizes).split(",") if part.strip()], dtype=int)
            bar, update = progress("Finite-size scan")
            st.session_state.finite_size_result = finite_size_scan(
                sizes,
                params(),
                method=selected_method(),
                equilibration_sweeps=int(st.session_state.eq_sweeps),
                measurement_sweeps=int(st.session_state.mc_sweeps),
                seed=int(st.session_state.seed),
                progress_callback=update,
            )
            bar.progress(1.0, text="Finite-size scan complete")
        except ValueError as exc:
            st.error(f"Could not parse lattice sizes: {exc}")
    if st.session_state.finite_size_result is not None:
        result = st.session_state.finite_size_result
        st.plotly_chart(
            plot_lines(
                result["size"],
                {
                    "Monte Carlo <|M|>/N": result["mean_abs_magnetization"],
                    "Independent reference M": result["analytic_magnetization"],
                },
                title="Finite N versus the independent reference at the current T",
                x_title="Linear size N — scanned independent variable",
                y_title="Magnetization per site",
            ),
            width="stretch",
        )
        frame = pd.DataFrame(result)
        download_frame("Download finite-size scan", frame, "ising_finite_size_scan.csv")

with snapshot_tab:
    st.subheader("Single-run lattice snapshot")
    st.selectbox("Initial condition", ["random", "plus", "minus"], key="snapshot_initial")
    st.number_input("Snapshot sweeps", min_value=1, max_value=20000, step=10, key="snapshot_sweeps")
    if st.button("Generate snapshot", type="primary"):
        bar, update = progress("Snapshot")
        st.session_state.snapshot_result = simulate(
            params(),
            method=selected_method(),
            equilibration_sweeps=0,
            measurement_sweeps=int(st.session_state.snapshot_sweeps),
            seed=int(st.session_state.seed),
            initial=str(st.session_state.snapshot_initial),
            progress_callback=update,
        )
        bar.progress(1.0, text="Snapshot complete")
    if st.session_state.snapshot_result is not None:
        result = st.session_state.snapshot_result
        config_array = np.asarray(result["final_config"])
        a, b, c = st.columns(3)
        a.metric("Energy per site", f"{result['energy_per_site']:.6g} J")
        b.metric("<|M|>/N", f"{result['mean_abs_magnetization']:.6g}")
        c.metric("Notebook |<M>|/N", f"{result['abs_mean_magnetization']:.6g}")
        if config_array.ndim == 1:
            figure = go.Figure(
                go.Heatmap(z=config_array[np.newaxis, :], colorscale="RdBu", zmin=-1, zmax=1)
            )
        else:
            figure = go.Figure(go.Heatmap(z=config_array, colorscale="RdBu", zmin=-1, zmax=1))
        figure.update_layout(
            template="plotly_white",
            height=480,
            title="Final spin configuration",
            xaxis_title="Lattice x",
            yaxis_title="Lattice y",
        )
        st.plotly_chart(figure, width="stretch")

with external_tab:
    st.subheader("Compare an external measurement or simulator CSV")
    st.write(
        "Upload columns named `temperature` and at least one of `magnetization` or `energy`. "
        "Units must be J/kB for temperature, dimensionless magnetization per site, and J for energy per site."
    )
    uploaded = st.file_uploader("Upload external CSV", type=["csv"], key="external_csv")
    if uploaded is not None:
        try:
            measured = pd.read_csv(uploaded)
            if "temperature" not in measured.columns:
                raise ValueError("CSV must contain a temperature column")
            measured = measured.sort_values("temperature").dropna(subset=["temperature"])
            if len(measured) < 3 or not np.all(np.diff(measured.temperature) > 0):
                raise ValueError("temperature must contain at least three strictly increasing values")
            reference_energy = []
            reference_magnetization = []
            for temperature in measured.temperature:
                reference = exact_observables(params(temperature=float(temperature)))
                reference_energy.append(reference["energy_per_site"])
                reference_magnetization.append(reference["magnetization"])
            comparison = measured.copy()
            comparison["model_energy"] = reference_energy
            comparison["model_magnetization"] = reference_magnetization
            metrics = []
            if "energy" in comparison.columns:
                residual = comparison.energy.to_numpy() - comparison.model_energy.to_numpy()
                comparison["energy_residual"] = residual
                metrics.append(("Energy RMSE", float(np.sqrt(np.nanmean(residual**2)))))
            if "magnetization" in comparison.columns:
                residual = comparison.magnetization.to_numpy() - comparison.model_magnetization.to_numpy()
                comparison["magnetization_residual"] = residual
                metrics.append(("Magnetization RMSE", float(np.sqrt(np.nanmean(residual**2)))))
            for label, value in metrics:
                st.metric(label, f"{value:.6g}")
            series = {"Independent reference energy": comparison.model_energy.to_numpy()}
            if "energy" in comparison.columns:
                series["External energy"] = comparison.energy.to_numpy()
            st.plotly_chart(
                plot_lines(
                    comparison.temperature.to_numpy(),
                    series,
                    title="External data versus independent reference",
                    x_title="Temperature T (J/kB)",
                    y_title="Energy per site (J)",
                    vline=onsager_tc(float(st.session_state.coupling)) if int(st.session_state.dimension) == 2 else None,
                ),
                width="stretch",
            )
            download_frame("Download aligned comparison", comparison, "ising_external_comparison.csv")
            st.session_state.external_result = comparison
        except (ValueError, pd.errors.ParserError) as exc:
            st.error(f"Could not interpret CSV: {exc}")

with validation_tab:
    st.subheader("Built-in physical and numerical compliance checks")
    st.markdown(
        """
        - 1D energy uses the periodic transfer matrix, not a high-T guess;
        - 2D energy at Tc equals `-√2 J` from Onsager;
        - spontaneous magnetization uses `<|M|>/N`, not the notebook's `|<M>|/N`;
        - 1D plots no longer inherit the 2D critical temperature as if a transition existed;
        - equilibration is diagnosed from energy per site;
        - Wolff, heat-bath, checkerboard, and random Metropolis share a work-equivalent sweep;
        - all parameters carry explicit units (`J`, `h`, `T` in `J/kB`).
        """
    )
    if st.button("Run compliance suite", type="primary"):
        critical = onsager_tc()
        onsager = exact_observables(IsingParams(temperature=critical, dimension=2))
        one_d = exact_observables(IsingParams(size=48, temperature=1.0, dimension=1))
        low_t = simulate(
            IsingParams(size=10, temperature=1.4, dimension=2),
            method=Method.WOLFF,
            equilibration_sweeps=60,
            measurement_sweeps=120,
            seed=4,
        )
        estimators = magnetization_estimators(np.array([50.0, -40.0, 30.0, -20.0]), 100)
        report = {
            "Onsager energy at Tc": onsager["energy_per_site"],
            "1D energy at T=1": one_d["energy_per_site"],
            "2D Wolff <|M|> at T=1.4": low_t["mean_abs_magnetization"],
            "notebook estimator gap": estimators["mean_abs_magnetization"] - estimators["abs_mean_magnetization"],
        }
        report["passed"] = bool(
            abs(float(onsager["energy_per_site"]) + np.sqrt(2.0)) < 1e-10
            and abs(float(one_d["energy_per_site"]) + np.tanh(1.0)) < 5e-3
            and float(low_t["mean_abs_magnetization"]) > 0.9
            and float(report["notebook estimator gap"]) > 0.3
        )
        st.session_state.validation_result = report
    if st.session_state.validation_result is not None:
        report = st.session_state.validation_result
        if report["passed"]:
            st.success("Compliance suite passed.")
        else:
            st.error("One or more compliance checks failed.")
        st.dataframe(pd.DataFrame([report]), width="stretch", hide_index=True)
