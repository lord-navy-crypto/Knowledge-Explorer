"""Physics tests for the repaired 1D/2D Ising Monte Carlo laboratory."""

import numpy as np
import pytest

from ising_lab import (
    IsingParams,
    Method,
    all_plus_energy,
    energy,
    exact_1d,
    exact_2d_onsager,
    initial_state,
    magnetization_estimators,
    method_comparison,
    notebook_temperature_grid,
    onsager_tc,
    simulate,
)


def test_all_plus_energy_counts_each_bond_once() -> None:
    params = IsingParams(size=8, dimension=2)
    config = initial_state(params, np.random.default_rng(0), kind="plus")
    assert energy(config, params) == pytest.approx(all_plus_energy(params))
    assert energy(config, params) == pytest.approx(-2 * 8 * 8)


def test_onsager_energy_at_critical_temperature() -> None:
    critical = onsager_tc()
    result = exact_2d_onsager(IsingParams(temperature=critical, dimension=2))
    assert result["energy_per_site"] == pytest.approx(-np.sqrt(2.0), rel=0, abs=1e-12)
    assert result["magnetization"] == pytest.approx(0.0)
    assert np.isinf(result["specific_heat"])


def test_onsager_limits() -> None:
    low = exact_2d_onsager(IsingParams(temperature=0.4, dimension=2))
    high = exact_2d_onsager(IsingParams(temperature=8.0, dimension=2))
    assert low["energy_per_site"] == pytest.approx(-2.0, abs=1e-4)
    assert low["magnetization"] == pytest.approx(1.0, abs=1e-3)
    assert high["magnetization"] == pytest.approx(0.0)
    assert high["energy_per_site"] > -0.3


def test_1d_energy_matches_finite_n_tanh_limit() -> None:
    params = IsingParams(size=48, temperature=1.0, dimension=1)
    result = exact_1d(params)
    assert result["energy_per_site"] == pytest.approx(-np.tanh(1.0), rel=0, abs=2e-3)
    assert result["magnetization"] == pytest.approx(0.0)
    assert result["specific_heat"] == pytest.approx(np.cosh(1.0) ** -2, rel=0, abs=2e-2)


def test_notebook_magnetization_estimator_is_not_spontaneous_m() -> None:
    samples = np.array([80.0, -90.0, 70.0, -60.0])
    result = magnetization_estimators(samples, 100)
    assert result["mean_abs_magnetization"] == pytest.approx(0.75)
    assert result["abs_mean_magnetization"] == pytest.approx(0.0)
    assert result["mean_abs_magnetization"] > result["abs_mean_magnetization"]


def test_1d_wolff_energy_agrees_with_transfer_matrix() -> None:
    params = IsingParams(size=24, temperature=1.2, dimension=1)
    exact = exact_1d(params)
    result = simulate(
        params,
        method=Method.WOLFF,
        equilibration_sweeps=100,
        measurement_sweeps=250,
        seed=7,
    )
    assert result["energy_per_site"] == pytest.approx(exact["energy_per_site"], abs=0.08)


def test_2d_wolff_ordered_phase_uses_abs_magnetization() -> None:
    params = IsingParams(size=12, temperature=1.5, dimension=2)
    result = simulate(
        params,
        method=Method.WOLFF,
        equilibration_sweeps=80,
        measurement_sweeps=160,
        seed=11,
    )
    onsager = exact_2d_onsager(params)
    assert result["mean_abs_magnetization"] == pytest.approx(onsager["magnetization"], abs=0.08)
    assert result["mean_abs_magnetization"] >= result["abs_mean_magnetization"] - 1e-12


@pytest.mark.parametrize("method", [Method.METROPOLIS, Method.CHECKERBOARD, Method.HEAT_BATH, Method.WOLFF])
def test_methods_keep_spins_binary(method: Method) -> None:
    params = IsingParams(size=8, temperature=2.5, dimension=2)
    result = simulate(
        params,
        method=method,
        equilibration_sweeps=5,
        measurement_sweeps=10,
        seed=3,
    )
    final = np.asarray(result["final_config"])
    assert set(np.unique(final)).issubset({-1, 1})


def test_method_comparison_includes_independent_reference() -> None:
    params = IsingParams(size=8, temperature=2.8, dimension=2)
    result = method_comparison(
        params, equilibration_sweeps=4, measurement_sweeps=8, seed=1
    )
    assert "analytic" in result
    for name in ("metropolis", "checkerboard", "heat_bath", "wolff"):
        assert name in result


def test_notebook_temperature_grid_is_denser_near_tc() -> None:
    grid = notebook_temperature_grid()
    assert grid[0] == pytest.approx(0.5)
    assert grid[-1] == pytest.approx(3.5)
    near = np.sum((grid >= 2.0) & (grid <= 2.5))
    far = np.sum((grid > 2.5))
    assert near > far


def test_invalid_parameters_are_rejected() -> None:
    with pytest.raises(ValueError):
        simulate(IsingParams(size=2), measurement_sweeps=10)
    with pytest.raises(ValueError):
        exact_2d_onsager(IsingParams(dimension=2, field=0.3))
    with pytest.raises(ValueError):
        simulate(IsingParams(field=0.2), method=Method.WOLFF, measurement_sweeps=10)
