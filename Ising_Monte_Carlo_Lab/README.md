# Ising Monte Carlo Lab

An interactive localhost computational-physics platform rebuilt from
`jason (1).ipynb`. It studies the 1D and 2D Ising models while testing the
Monte Carlo methods used to sample them.

The project is not a graphical wrapper around the notebook. The Hamiltonian,
update methods, exact references, diagnostics, scans, exports, configuration
handling, and tests are separated into reusable code.

## Main capabilities

- Metropolis (random, notebook original), checkerboard Metropolis, heat-bath, and Wolff
- Exact periodic 1D transfer-matrix energy, magnetization, specific heat, and susceptibility
- Independent infinite-volume 2D Onsager/Yang reference
- Spontaneous magnetization from `<|M|>/N`, with the notebook's `|<M>|/N` kept as a diagnostic
- Intensive equilibration-time estimate from energy per site
- Temperature scans with `T` on the independent axis and 2D `Tc` marked only on 2D plots
- Finite-size scans that are labelled as not like-for-like with Onsager
- Lattice snapshots, JSON configuration import/export, and CSV downloads
- External measurement CSV alignment against the independent reference
- Progress reporting for long scans
- macOS and Windows one-click launchers
- GitHub Actions tests on Python 3.10–3.14

## Corrections to the notebook

- Magnetization used `abs(mean(M))`. Sign flips then destroyed the ordered-phase signal. The platform reports `<|M|>/N`.
- Equilibration thresholded the variance of *extensive* energy against `0.05`, so the diagnostic changed with lattice size. The platform uses energy per site.
- `calculate_equil_time` was printed but never used to set the production sweep budget.
- 1D plots inherited the 2D Onsager temperature `Tc ≈ 2.269` even though 1D has no finite-T transition at `h = 0`.
- One 2D specific-heat panel drew its `axvline` on the magnetization axes by copy-paste.
- SciPy/NumPy Monte Carlo is a finite-N sampler, not an exact answer. 1D uses the transfer matrix; 2D uses Onsager.
- Finite-N Monte Carlo and infinite-volume Onsager are labelled as different ensembles.
- Coupling `J`, field `h`, temperature `T`, and energy carry explicit units (`J/kB` for temperature).
- Temperature scans put temperature on the horizontal axis.

## Five-model interaction

Shared Hamiltonian, shared lattice, shared temperature, and work-equivalent sweeps:

1. Random Metropolis (notebook)
2. Checkerboard Metropolis
3. Heat-bath / Glauber
4. Wolff cluster
5. Independent exact reference (1D transfer matrix or 2D Onsager/Yang)

A smooth curve is not proof of a reliable sampler. Random Metropolis can look ordered while remaining trapped; Wolff mixes through clusters near criticality; the exact overlay is independent of every update method.

## Quick start on macOS

1. Unzip or clone the `Ising_Monte_Carlo_Lab` folder.
2. Double-click `RUN_ISING_LAB.command`.
3. The launcher creates a private `.venv`, installs dependencies, and opens
   `http://localhost:8501`.

If macOS blocks the first launch:

```bash
chmod +x RUN_ISING_LAB.command
./RUN_ISING_LAB.command
```

Windows users can double-click `RUN_ISING_LAB.bat`.

## Manual launch

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m streamlit run app.py
```

## Tests

```bash
python -m pip install -r requirements-dev.txt
python -m pytest -q
```

## External data format

The External Data page accepts CSV with at least:

```text
temperature,energy
```

or

```text
temperature,magnetization
```

Use `J/kB` for temperature, energy per site in units of `J`, and dimensionless
magnetization per site. The platform sorts, validates, and compares the data
with the current exact reference.

## Numerical interpretation

For 1D, exact magnetization is zero at `h = 0` for every `T > 0`. A nonzero
Monte Carlo `<|M|>/N` is a finite-size fluctuation, not a phase transition.

For 2D, Onsager magnetization is a thermodynamic-limit spontaneous moment.
A 16×16 lattice rounds the transition. Forced or finite-field 2D systems have
no elementary Onsager overlay in this platform.

Specific heat from a single finite lattice does not diverge at `Tc`. The
logarithmic divergence belongs to the infinite-volume limit.

## Project layout

```text
Ising_Monte_Carlo_Lab/
├── app.py
├── ising_lab/
│   ├── __init__.py
│   └── core.py
├── presets/notebook_repaired.json
├── notebooks/jason_1_original.ipynb
├── tests/
├── .github/workflows/tests.yml
├── RUN_ISING_LAB.command
├── RUN_ISING_LAB.bat
├── requirements.txt
└── README.md
```
