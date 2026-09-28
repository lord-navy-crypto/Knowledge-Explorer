"""Reusable Ising Monte Carlo core: methods, exact references, and diagnostics."""

from __future__ import annotations

from dataclasses import dataclass
from enum import Enum
from typing import Callable

import numpy as np
from scipy.special import ellipe, ellipk


ProgressCallback = Callable[[int, int], None]

MAX_LINEAR_SIZE = 128
MAX_SWEEPS = 2_000_000
BOLTZMANN_K = 1.0


class Method(str, Enum):
    METROPOLIS = "metropolis"
    CHECKERBOARD = "checkerboard"
    HEAT_BATH = "heat_bath"
    WOLFF = "wolff"


class Dimension(int, Enum):
    D1 = 1
    D2 = 2


@dataclass(frozen=True)
class IsingParams:
    size: int = 16
    coupling: float = 1.0
    field: float = 0.0
    temperature: float = 2.5
    dimension: int = 2


def _positive(name: str, value: float) -> None:
    if not np.isfinite(value) or value <= 0:
        raise ValueError(f"{name} must be positive and finite")


def validate_params(params: IsingParams) -> None:
    if params.dimension not in (1, 2):
        raise ValueError("dimension must be 1 or 2")
    if not isinstance(params.size, (int, np.integer)) or params.size < 4:
        raise ValueError("size must be an integer >= 4")
    if params.size > MAX_LINEAR_SIZE:
        raise ValueError(f"size exceeds the {MAX_LINEAR_SIZE} safety limit")
    _positive("coupling", params.coupling)
    _positive("temperature", params.temperature)
    if not np.isfinite(params.field):
        raise ValueError("field must be finite")


def n_sites(params: IsingParams) -> int:
    return int(params.size if params.dimension == 1 else params.size * params.size)


def onsager_tc(coupling: float = 1.0) -> float:
    _positive("coupling", coupling)
    return 2.0 * coupling / np.log(1.0 + np.sqrt(2.0))


def inverse_temperature(params: IsingParams) -> float:
    return 1.0 / (BOLTZMANN_K * params.temperature)


def initial_state(
    params: IsingParams,
    rng: np.random.Generator,
    kind: str = "random",
) -> np.ndarray:
    validate_params(params)
    shape: tuple[int, ...] = (params.size,) if params.dimension == 1 else (params.size, params.size)
    if kind == "random":
        return rng.choice(np.array([-1, 1], dtype=np.int8), size=shape)
    if kind == "plus":
        return np.ones(shape, dtype=np.int8)
    if kind == "minus":
        return -np.ones(shape, dtype=np.int8)
    raise ValueError("kind must be 'random', 'plus', or 'minus'")


def energy(config: np.ndarray, params: IsingParams) -> float:
    """Total energy: -J Σ_<ij> σiσj - h Σ_i σi. Each bond is counted once."""

    validate_params(params)
    spins = np.asarray(config, dtype=float)
    if params.dimension == 1:
        bond = np.sum(spins * np.roll(spins, 1))
    else:
        bond = np.sum(spins * np.roll(spins, 1, axis=0) + spins * np.roll(spins, 1, axis=1))
    return float(-params.coupling * bond - params.field * np.sum(spins))


def magnetization(config: np.ndarray) -> float:
    return float(np.sum(np.asarray(config, dtype=float)))


def magnetization_estimators(magnetization_samples: np.ndarray, sites: int) -> dict[str, float]:
    """Return both <|M|>/N (correct spontaneous estimator) and |<M>|/N (notebook)."""

    values = np.asarray(magnetization_samples, dtype=float)
    if values.size == 0 or sites <= 0:
        raise ValueError("magnetization samples and site count must be positive")
    mean_abs = float(np.mean(np.abs(values)) / sites)
    abs_mean = float(np.abs(np.mean(values)) / sites)
    return {
        "mean_abs_magnetization": mean_abs,
        "abs_mean_magnetization": abs_mean,
        "signed_magnetization": float(np.mean(values) / sites),
    }


def _neighbor_sum_1d(config: np.ndarray, index: int) -> float:
    n = config.size
    return float(config[(index + 1) % n] + config[(index - 1) % n])


def _neighbor_sum_2d(config: np.ndarray, i: int, j: int) -> float:
    n = config.shape[0]
    return float(
        config[(i + 1) % n, j]
        + config[(i - 1) % n, j]
        + config[i, (j + 1) % n]
        + config[i, (j - 1) % n]
    )


def _metropolis_trial(spin: int, neighbor_sum: float, params: IsingParams, rng: np.random.Generator) -> int:
    delta = 2.0 * spin * (params.coupling * neighbor_sum + params.field)
    if delta <= 0.0 or rng.random() < np.exp(-inverse_temperature(params) * delta):
        return -spin
    return spin


def _sweep_metropolis_random(config: np.ndarray, params: IsingParams, rng: np.random.Generator) -> None:
    if params.dimension == 1:
        n = config.size
        for index in rng.integers(0, n, size=n):
            config[index] = _metropolis_trial(
                int(config[index]), _neighbor_sum_1d(config, int(index)), params, rng
            )
        return
    n = config.shape[0]
    sites = n * n
    ii = rng.integers(0, n, size=sites)
    jj = rng.integers(0, n, size=sites)
    for i, j in zip(ii, jj):
        config[i, j] = _metropolis_trial(
            int(config[i, j]), _neighbor_sum_2d(config, int(i), int(j)), params, rng
        )


def _sweep_checkerboard(config: np.ndarray, params: IsingParams, rng: np.random.Generator) -> None:
    beta = inverse_temperature(params)
    if params.dimension == 1:
        n = config.size
        rolled_left = np.roll(config, 1)
        rolled_right = np.roll(config, -1)
        for color in (0, 1):
            mask = np.arange(n) % 2 == color
            spin = config[mask].astype(float)
            neighbor = rolled_left[mask].astype(float) + rolled_right[mask].astype(float)
            delta = 2.0 * spin * (params.coupling * neighbor + params.field)
            accept = (delta <= 0.0) | (rng.random(spin.size) < np.exp(-beta * delta))
            config[mask] = np.where(accept, -spin, spin).astype(config.dtype)
            rolled_left = np.roll(config, 1)
            rolled_right = np.roll(config, -1)
        return
    n = config.shape[0]
    for color in (0, 1):
        ii, jj = np.indices((n, n))
        mask = ((ii + jj) % 2) == color
        spin = config[mask].astype(float)
        neighbor = (
            np.roll(config, 1, axis=0)
            + np.roll(config, -1, axis=0)
            + np.roll(config, 1, axis=1)
            + np.roll(config, -1, axis=1)
        )[mask].astype(float)
        delta = 2.0 * spin * (params.coupling * neighbor + params.field)
        accept = (delta <= 0.0) | (rng.random(spin.size) < np.exp(-beta * delta))
        config[mask] = np.where(accept, -spin, spin).astype(config.dtype)


def _heat_bath_value(neighbor_sum: np.ndarray | float, params: IsingParams, rng: np.random.Generator) -> np.ndarray:
    local_field = params.coupling * np.asarray(neighbor_sum, dtype=float) + params.field
    plus_probability = 1.0 / (1.0 + np.exp(-2.0 * inverse_temperature(params) * local_field))
    draws = rng.random(np.shape(plus_probability))
    return np.where(draws < plus_probability, 1, -1).astype(np.int8)


def _sweep_heat_bath(config: np.ndarray, params: IsingParams, rng: np.random.Generator) -> None:
    if params.dimension == 1:
        n = config.size
        for color in (0, 1):
            mask = np.arange(n) % 2 == color
            neighbor = np.roll(config, 1)[mask].astype(float) + np.roll(config, -1)[mask].astype(float)
            config[mask] = _heat_bath_value(neighbor, params, rng)
        return
    n = config.shape[0]
    for color in (0, 1):
        ii, jj = np.indices((n, n))
        mask = ((ii + jj) % 2) == color
        neighbor = (
            np.roll(config, 1, axis=0)
            + np.roll(config, -1, axis=0)
            + np.roll(config, 1, axis=1)
            + np.roll(config, -1, axis=1)
        )[mask].astype(float)
        config[mask] = _heat_bath_value(neighbor, params, rng)


def _wolff_cluster_1d(config: np.ndarray, params: IsingParams, rng: np.random.Generator) -> int:
    n = config.size
    add_probability = 1.0 - np.exp(-2.0 * inverse_temperature(params) * params.coupling)
    start = int(rng.integers(0, n))
    seed = int(config[start])
    visited = np.zeros(n, dtype=bool)
    stack = [start]
    visited[start] = True
    cluster = [start]
    while stack:
        index = stack.pop()
        for neighbor in ((index + 1) % n, (index - 1) % n):
            if not visited[neighbor] and int(config[neighbor]) == seed and rng.random() < add_probability:
                visited[neighbor] = True
                stack.append(neighbor)
                cluster.append(neighbor)
    config[cluster] = -seed
    return len(cluster)


def _wolff_cluster_2d(config: np.ndarray, params: IsingParams, rng: np.random.Generator) -> int:
    n = config.shape[0]
    add_probability = 1.0 - np.exp(-2.0 * inverse_temperature(params) * params.coupling)
    i0, j0 = (int(x) for x in rng.integers(0, n, size=2))
    seed = int(config[i0, j0])
    visited = np.zeros((n, n), dtype=bool)
    stack = [(i0, j0)]
    visited[i0, j0] = True
    cluster = [(i0, j0)]
    while stack:
        i, j = stack.pop()
        for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ni, nj = (i + di) % n, (j + dj) % n
            if not visited[ni, nj] and int(config[ni, nj]) == seed and rng.random() < add_probability:
                visited[ni, nj] = True
                stack.append((ni, nj))
                cluster.append((ni, nj))
    for i, j in cluster:
        config[i, j] = -seed
    return len(cluster)


def _sweep_wolff(config: np.ndarray, params: IsingParams, rng: np.random.Generator) -> int:
    if abs(params.field) > 0:
        raise ValueError("Wolff cluster updates require zero magnetic field")
    flipped = 0
    target = n_sites(params)
    while flipped < target:
        if params.dimension == 1:
            flipped += _wolff_cluster_1d(config, params, rng)
        else:
            flipped += _wolff_cluster_2d(config, params, rng)
    return flipped


def sweep(config: np.ndarray, params: IsingParams, method: Method, rng: np.random.Generator) -> int:
    """Perform one work-equivalent sweep. Returns the number of spin touches."""

    selected = Method(method)
    if selected is Method.METROPOLIS:
        _sweep_metropolis_random(config, params, rng)
    elif selected is Method.CHECKERBOARD:
        _sweep_checkerboard(config, params, rng)
    elif selected is Method.HEAT_BATH:
        _sweep_heat_bath(config, params, rng)
    elif selected is Method.WOLFF:
        return _sweep_wolff(config, params, rng)
    else:
        raise ValueError(f"unsupported method: {selected}")
    return n_sites(params)


def estimate_equilibration_sweep(
    energy_per_site: np.ndarray,
    sample_stride: int,
    *,
    window: int = 20,
    relative_variance: float = 1e-4,
) -> int:
    """Estimate equilibration time in sweeps from an intensive energy series.

    The original notebook thresholded the variance of *extensive* energy against
    0.05, so the diagnostic changed with lattice size. This version uses energy
    per site and a relative-variance plateau after the series midpoint.
    """

    values = np.asarray(energy_per_site, dtype=float)
    if values.size < window + 2:
        return int(values.size * sample_stride)
    half = values.size // 2
    for index in range(max(half, window), values.size):
        sample = values[index - window : index]
        mean = float(np.mean(sample))
        variance = float(np.var(sample))
        scale = max(abs(mean), np.finfo(float).tiny)
        if variance / scale**2 < relative_variance:
            return int(index * sample_stride)
    return int(values.size * sample_stride)


def block_error(samples: np.ndarray, blocks: int = 8) -> float:
    values = np.asarray(samples, dtype=float)
    if values.size < blocks:
        return float(np.std(values, ddof=1) / np.sqrt(max(values.size, 1))) if values.size > 1 else 0.0
    split = np.array_split(values, blocks)
    means = np.array([np.mean(chunk) for chunk in split if chunk.size])
    if means.size < 2:
        return 0.0
    return float(np.std(means, ddof=1) / np.sqrt(means.size))


def simulate(
    params: IsingParams,
    *,
    method: Method | str = Method.WOLFF,
    equilibration_sweeps: int = 400,
    measurement_sweeps: int = 800,
    measure_every: int = 1,
    initial: str = "random",
    seed: int | None = 2026,
    progress_callback: ProgressCallback | None = None,
    record_every: int = 10,
) -> dict[str, np.ndarray | float | str | int]:
    """Run one work-equivalent Monte Carlo trajectory and measure observables."""

    validate_params(params)
    if equilibration_sweeps < 0 or measurement_sweeps < 1 or measure_every < 1:
        raise ValueError("sweep counts must be non-negative and measurement_sweeps >= 1")
    total_sweeps = equilibration_sweeps + measurement_sweeps
    if total_sweeps > MAX_SWEEPS:
        raise ValueError(f"trajectory exceeds the {MAX_SWEEPS}-sweep safety limit")
    selected = Method(method)
    rng = np.random.default_rng(seed)
    config = initial_state(params, rng, kind=initial)
    sites = n_sites(params)
    record_stride = max(1, record_every)
    trajectory_energy = []
    trajectory_magnetization = []
    measured_energy = []
    measured_magnetization = []
    stride = max(1, total_sweeps // 100)
    for step in range(total_sweeps):
        sweep(config, params, selected, rng)
        if (step + 1) % record_stride == 0 or step + 1 == total_sweeps:
            trajectory_energy.append(energy(config, params) / sites)
            trajectory_magnetization.append(magnetization(config) / sites)
        if step >= equilibration_sweeps and ((step - equilibration_sweeps) % measure_every == 0):
            measured_energy.append(energy(config, params))
            measured_magnetization.append(magnetization(config))
        if progress_callback and ((step + 1) == total_sweeps or (step + 1) % stride == 0):
            progress_callback(step + 1, total_sweeps)
    if not measured_energy:
        measured_energy.append(energy(config, params))
        measured_magnetization.append(magnetization(config))
    if trajectory_energy and not np.isfinite(trajectory_energy[-1]):
        raise FloatingPointError("non-finite energy in recorded trajectory")
    energy_samples = np.asarray(measured_energy, dtype=float)
    mag_samples = np.asarray(measured_magnetization, dtype=float)
    estimators = magnetization_estimators(mag_samples, sites)
    temperature = params.temperature
    energy_per_site = float(np.mean(energy_samples) / sites)
    specific_heat = float(np.var(energy_samples) / (sites * temperature**2))
    susceptibility = float(
        (np.mean(mag_samples**2) - np.mean(np.abs(mag_samples)) ** 2) / (sites * temperature)
    )
    susceptibility_signed = float(np.var(mag_samples) / (sites * temperature))
    return {
        "method": selected.value,
        "temperature": temperature,
        "n_sites": sites,
        "energy_per_site": energy_per_site,
        "energy_per_site_error": block_error(energy_samples / sites),
        "mean_abs_magnetization": estimators["mean_abs_magnetization"],
        "abs_mean_magnetization": estimators["abs_mean_magnetization"],
        "signed_magnetization": estimators["signed_magnetization"],
        "magnetization_error": block_error(np.abs(mag_samples) / sites),
        "specific_heat": specific_heat,
        "susceptibility": susceptibility,
        "susceptibility_signed": susceptibility_signed,
        "trajectory_energy": np.asarray(trajectory_energy),
        "trajectory_magnetization": np.asarray(trajectory_magnetization),
        "record_stride": record_stride,
        "final_config": config.copy(),
        "samples": energy_samples.size,
    }


def method_comparison(
    params: IsingParams,
    *,
    equilibration_sweeps: int,
    measurement_sweeps: int,
    seed: int = 2026,
    progress_callback: ProgressCallback | None = None,
) -> dict[str, dict[str, np.ndarray | float | str | int]]:
    """Run all four Monte Carlo methods plus the independent exact reference."""

    output: dict[str, dict[str, np.ndarray | float | str | int]] = {}
    methods = list(Method)
    if abs(params.field) > 0:
        methods = [method for method in methods if method is not Method.WOLFF]
    for index, method in enumerate(methods):
        def update(done: int, total: int, captured_index: int = index) -> None:
            if progress_callback:
                progress_callback(captured_index * total + done, len(methods) * total)

        output[method.value] = simulate(
            params,
            method=method,
            equilibration_sweeps=equilibration_sweeps,
            measurement_sweeps=measurement_sweeps,
            seed=seed + index,
            progress_callback=update,
        )
    output["analytic"] = exact_observables(params)
    return output


def notebook_temperature_grid() -> np.ndarray:
    """Reconstruct the original notebook temperature mesh, denser near 2D Tc."""

    low = np.linspace(0.5, 2.0, 12)
    mid = np.linspace(2.0, 2.5, 24)
    high = np.linspace(2.5, 3.5, 8)
    return np.concatenate([low, mid[1:], high[1:]])


def thermodynamic_scan(
    temperatures: np.ndarray,
    params: IsingParams,
    *,
    method: Method | str = Method.WOLFF,
    equilibration_sweeps: int,
    measurement_sweeps: int,
    seed: int = 2026,
    progress_callback: ProgressCallback | None = None,
) -> dict[str, np.ndarray]:
    values = np.asarray(temperatures, dtype=float)
    if values.ndim != 1 or values.size == 0 or np.any(values <= 0):
        raise ValueError("temperatures must be a positive one-dimensional array")
    selected = Method(method)
    records = {
        "temperature": values,
        "energy_per_site": [],
        "energy_per_site_error": [],
        "mean_abs_magnetization": [],
        "abs_mean_magnetization": [],
        "specific_heat": [],
        "susceptibility": [],
        "analytic_energy": [],
        "analytic_magnetization": [],
        "analytic_specific_heat": [],
        "analytic_susceptibility": [],
    }
    for index, temperature in enumerate(values):
        current = IsingParams(
            size=params.size,
            coupling=params.coupling,
            field=params.field,
            temperature=float(temperature),
            dimension=params.dimension,
        )
        result = simulate(
            current,
            method=selected,
            equilibration_sweeps=equilibration_sweeps,
            measurement_sweeps=measurement_sweeps,
            seed=seed + index,
        )
        reference = exact_observables(current)
        records["energy_per_site"].append(result["energy_per_site"])
        records["energy_per_site_error"].append(result["energy_per_site_error"])
        records["mean_abs_magnetization"].append(result["mean_abs_magnetization"])
        records["abs_mean_magnetization"].append(result["abs_mean_magnetization"])
        records["specific_heat"].append(result["specific_heat"])
        records["susceptibility"].append(result["susceptibility"])
        records["analytic_energy"].append(reference["energy_per_site"])
        records["analytic_magnetization"].append(reference["magnetization"])
        records["analytic_specific_heat"].append(reference["specific_heat"])
        records["analytic_susceptibility"].append(reference["susceptibility"])
        if progress_callback:
            progress_callback(index + 1, values.size)
    return {key: np.asarray(value) if key != "temperature" else values for key, value in records.items()}


def finite_size_scan(
    sizes: np.ndarray,
    params: IsingParams,
    *,
    method: Method | str = Method.WOLFF,
    equilibration_sweeps: int,
    measurement_sweeps: int,
    seed: int = 2026,
    progress_callback: ProgressCallback | None = None,
) -> dict[str, np.ndarray]:
    values = np.asarray(sizes, dtype=int)
    if values.ndim != 1 or values.size == 0 or np.any(values < 4):
        raise ValueError("sizes must contain integers >= 4")
    selected = Method(method)
    magnetization_values = []
    energy_values = []
    heat_values = []
    for index, size in enumerate(values):
        current = IsingParams(
            size=int(size),
            coupling=params.coupling,
            field=params.field,
            temperature=params.temperature,
            dimension=params.dimension,
        )
        result = simulate(
            current,
            method=selected,
            equilibration_sweeps=equilibration_sweeps,
            measurement_sweeps=measurement_sweeps,
            seed=seed + index,
        )
        magnetization_values.append(result["mean_abs_magnetization"])
        energy_values.append(result["energy_per_site"])
        heat_values.append(result["specific_heat"])
        if progress_callback:
            progress_callback(index + 1, values.size)
    reference = exact_observables(
        IsingParams(
            size=int(values[-1]),
            coupling=params.coupling,
            field=params.field,
            temperature=params.temperature,
            dimension=params.dimension,
        )
    )
    return {
        "size": values,
        "mean_abs_magnetization": np.asarray(magnetization_values),
        "energy_per_site": np.asarray(energy_values),
        "specific_heat": np.asarray(heat_values),
        "analytic_magnetization": np.full(values.size, reference["magnetization"]),
        "analytic_energy": np.full(values.size, reference["energy_per_site"]),
    }


def _transfer_matrix(beta: float, coupling: float, field: float) -> np.ndarray:
    spins = np.array([1.0, -1.0])
    return np.exp(
        beta
        * (
            coupling * np.outer(spins, spins)
            + 0.5 * field * spins[:, None]
            + 0.5 * field * spins[None, :]
        )
    )


def _scaled_transfer_power(matrix: np.ndarray, n: int) -> tuple[np.ndarray, float]:
    eigenvalues, eigenvectors = np.linalg.eig(matrix)
    order = np.argsort(-np.real(eigenvalues))
    eigenvalues = np.real(eigenvalues[order])
    eigenvectors = np.real(eigenvectors[:, order])
    scale = float(abs(eigenvalues[0]))
    ratio = (eigenvalues / scale) ** n
    powered = eigenvectors @ np.diag(ratio) @ np.linalg.inv(eigenvectors)
    return np.real(powered), scale


def _exact_1d_magnetization(params: IsingParams) -> float:
    beta = inverse_temperature(params)
    powered, _scale = _scaled_transfer_power(
        _transfer_matrix(beta, params.coupling, params.field), params.size
    )
    partition = float(np.trace(powered))
    spin = np.diag([1.0, -1.0])
    return float(np.trace(spin @ powered) / partition)


def exact_1d(params: IsingParams) -> dict[str, float]:
    """Exact periodic 1D Ising observables from the transfer matrix."""

    validate_params(params)
    if params.dimension != 1:
        raise ValueError("exact_1d requires dimension == 1")
    beta = inverse_temperature(params)
    n = params.size
    k = beta * params.coupling
    magnetization_density = _exact_1d_magnetization(params)
    energy_density = _exact_1d_energy_only(params)
    if abs(params.field) == 0.0:
        magnetization_density = 0.0
        if k > 40.0:
            susceptibility = float(beta * n)
        else:
            lam_plus = 2.0 * np.cosh(k)
            lam_minus = 2.0 * np.sinh(k)
            zeta = lam_plus**n + lam_minus**n
            correlations = [
                (lam_plus ** (n - distance) * lam_minus**distance + lam_plus**distance * lam_minus ** (n - distance))
                / zeta
                for distance in range(n)
            ]
            susceptibility = float(beta * np.sum(correlations))
    else:
        dh = 1e-6
        plus_h = IsingParams(
            size=params.size,
            coupling=params.coupling,
            field=params.field + dh,
            temperature=params.temperature,
            dimension=1,
        )
        minus_h = IsingParams(
            size=params.size,
            coupling=params.coupling,
            field=params.field - dh,
            temperature=params.temperature,
            dimension=1,
        )
        susceptibility = (_exact_1d_magnetization(plus_h) - _exact_1d_magnetization(minus_h)) / (2.0 * dh)
    step = 1e-5 * params.temperature
    plus_t = IsingParams(
        size=params.size,
        coupling=params.coupling,
        field=params.field,
        temperature=params.temperature + step,
        dimension=1,
    )
    minus_t = IsingParams(
        size=params.size,
        coupling=params.coupling,
        field=params.field,
        temperature=params.temperature - step,
        dimension=1,
    )
    specific_heat = float((_exact_1d_energy_only(plus_t) - _exact_1d_energy_only(minus_t)) / (2.0 * step))
    return {
        "energy_per_site": energy_density,
        "magnetization": magnetization_density,
        "specific_heat": specific_heat,
        "susceptibility": float(susceptibility),
        "method": "analytic_1d",
        "ensemble": "finite-N periodic",
    }


def _exact_1d_energy_only(params: IsingParams) -> float:
    beta = inverse_temperature(params)
    n = params.size
    if abs(params.field) == 0.0:
        k = beta * params.coupling
        if k > 40.0:
            return float(-params.coupling)
        lam_plus = 2.0 * np.cosh(k)
        lam_minus = 2.0 * np.sinh(k)
        zeta = lam_plus**n + lam_minus**n
        neighbor = (lam_plus ** (n - 1) * lam_minus + lam_minus ** (n - 1) * lam_plus) / zeta
        return float(-params.coupling * neighbor)
    delta = 1e-6 * max(abs(beta), 1e-6)

    def log_partition(value: float) -> float:
        powered, scale = _scaled_transfer_power(
            _transfer_matrix(value, params.coupling, params.field), n
        )
        return float(n * np.log(scale) + np.log(abs(np.trace(powered))))

    return float(-(log_partition(beta + delta) - log_partition(beta - delta)) / (2.0 * delta) / n)


def _onsager_modulus(k: float) -> float:
    return float(2.0 * np.sinh(2.0 * k) / np.cosh(2.0 * k) ** 2)


def exact_2d_onsager(params: IsingParams) -> dict[str, float]:
    """Infinite-volume zero-field Onsager/Yang solution. Not a finite-N result."""

    validate_params(params)
    if params.dimension != 2:
        raise ValueError("exact_2d_onsager requires dimension == 2")
    if abs(params.field) > 0:
        raise ValueError("Onsager's closed form requires zero magnetic field")
    k = params.coupling / params.temperature
    critical = onsager_tc(params.coupling)
    if k > 20.0:
        return {
            "energy_per_site": -2.0 * params.coupling,
            "magnetization": 1.0,
            "specific_heat": 0.0,
            "susceptibility": float("nan"),
            "method": "onsager",
            "ensemble": "infinite volume",
            "critical_temperature": critical,
        }
    modulus = _onsager_modulus(k)
    elliptic_m = float(np.clip(modulus**2, 0.0, 1.0 - np.finfo(float).eps))
    first_kind = float(ellipk(elliptic_m))
    second_kind = float(ellipe(elliptic_m))
    k1 = 2.0 * np.tanh(2.0 * k) ** 2 - 1.0
    coth = float(np.cosh(2.0 * k) / np.sinh(2.0 * k))
    at_critical = abs(params.temperature - critical) / critical < 1e-12 or abs(k1) < 1e-14
    if at_critical:
        energy = -np.sqrt(2.0) * params.coupling
        heat = float("inf")
        magnetization = 0.0
    else:
        energy = -params.coupling * coth * (1.0 + (2.0 / np.pi) * k1 * first_kind)
        heat = (2.0 / np.pi) * (k * coth) ** 2 * (
            2.0 * first_kind
            - 2.0 * second_kind
            - (1.0 - k1) * (np.pi / 2.0 + k1 * first_kind)
        )
        sinh = np.sinh(2.0 * k)
        magnetization = float((1.0 - sinh ** (-4)) ** 0.125) if sinh**4 > 1.0 else 0.0
    return {
        "energy_per_site": float(energy),
        "magnetization": magnetization,
        "specific_heat": float(heat),
        "susceptibility": float("nan"),
        "method": "onsager",
        "ensemble": "infinite volume",
        "critical_temperature": critical,
    }


def exact_observables(params: IsingParams) -> dict[str, float | str]:
    if params.dimension == 1:
        result = exact_1d(params)
        result["reference_note"] = "finite-N periodic transfer matrix"
        return result
    if abs(params.field) > 0:
        return {
            "energy_per_site": float("nan"),
            "magnetization": float("nan"),
            "specific_heat": float("nan"),
            "susceptibility": float("nan"),
            "method": "unavailable",
            "ensemble": "no elementary 2D closed form at nonzero field",
            "reference_note": "2D Onsager reference requires h = 0",
        }
    result = exact_2d_onsager(params)
    result["reference_note"] = "infinite-volume Onsager/Yang; finite-N Monte Carlo is not like-for-like"
    return result


def all_plus_energy(params: IsingParams) -> float:
    validate_params(params)
    if params.dimension == 1:
        bonds = params.size
        return float(-params.coupling * bonds - params.field * params.size)
    bonds = 2 * params.size * params.size
    return float(-params.coupling * bonds - params.field * params.size * params.size)
