"""
Wave 2 Related Knowledge Expansion blocks for AP Physics 2, Statistics,
Psychology, and thin AP Physics C concepts.

Maps (subject, title) -> markdown starting with ## Related Knowledge Expansion.
"""

WAVE2_P2_STATS = {
    ('AP Physics 2', 'Atomic Energy Levels and Spectra'): r"""## Related Knowledge Expansion

## 1. Quantized Atomic Energies

Electrons in atoms occupy discrete energy levels. Transitions emit or absorb photons with
$$|\Delta E|=hf=\frac{hc}{\lambda}.$$
Only certain $\lambda$ appear, producing line spectra rather than continuous spectra.

## 2. Hydrogen-like Levels

Bohr model energies:
$$E_n=-\frac{13.6\,\mathrm{eV}}{n^2}.$$
Ionization from ground state requires $13.6\,\mathrm{eV}$. Emission from $n=3$ to $n=2$ is the Balmer $H\alpha$ line conceptually.

## 3. Absorption vs Emission

Absorption promotes electrons upward using continuum or lamp photons matching gaps; emission occurs when electrons cascade downward. Cool gas absorption lines appear dark against a hot continuum; emission tubes show bright lines.

## 4. Energy-Level Diagrams

AP free-response often gives a ladder of levels and asks which photon energies are possible. Draw arrows down for emission, up for absorption. Check that photon energy equals exact difference.

## 5. AP Exam Patterns

Compute $\lambda$ from $\Delta E$; identify allowed transitions; explain why a gas absorbs only specific wavelengths; relate series limits to ionization.

## 6. Common Confusions

Using $E_n$ itself as photon energy instead of differences; sign errors with bound negative energies; assuming all $\Delta n$ are allowed without selection-rule caveats (AP usually allows any difference unless stated).

## 7. Worked Sketch

Transition $n=2\to 1$: $\Delta E=13.6(1-1/4)=10.2\,\mathrm{eV}$, $\lambda=hc/\Delta E\approx 122\,\mathrm{nm}$ (UV). Visible Balmer lines involve lower level $n=2$.

## 8. Multi-Electron Atoms

Qualitatively, electron–electron interactions shift levels and produce more complex spectra. Chemical identity of stellar atmospheres is read from line patterns—cross-link to nuclear/astro contexts occasionally.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics 2', 'Diffraction and Interference of Light'): r"""## Related Knowledge Expansion

## 1. Diffraction Basics

Diffraction is the spreading of waves when they pass apertures or edges. Significant diffraction occurs when aperture size $a$ is comparable to $\lambda$. Light's small $\lambda$ makes diffraction subtler than for sound, but single-slit patterns are AP classics.

## 2. Single-Slit Minima

For a slit of width $a$, dark fringes (approximate) satisfy
$$a\sin\theta=m\lambda,\quad m=\pm1,\pm2,\ldots$$
Central maximum is wide; secondary maxima are dimmer. Smaller $a$ widens the pattern.

## 3. Double-Slit Interference

Young's double slit with separation $d$ gives bright fringes
$$d\sin\theta=m\lambda.$$
On a screen at distance $L$, fringe spacing $\Delta y\approx \lambda L/d$ for small angles. Diffraction envelope from each slit modulates fringe brightness.

## 4. Diffraction Grating

A grating with slit spacing $d$ produces principal maxima at
$$d\sin\theta=m\lambda.$$
Many slits sharpen peaks, enabling precise wavelength measurement. Resolving power increases with number of lines illuminated.

## 5. AP Exam Patterns

Predict whether pattern spreads when $\lambda$ increases or $d$ decreases; compute $\lambda$ from fringe data; distinguish single-slit envelope from double-slit fringes; explain why blue light fringes are closer than red for fixed geometry.

## 6. Common Confusions

Swapping $a$ and $d$; using bright-fringe formula for single-slit minima; forgetting small-angle $\sin\theta\approx\tan\theta\approx y/L$; thinking light never diffracts.

## 7. Worked Sketch

$d=0.10\,\mathrm{mm}$, $L=1.5\,\mathrm{m}$, $\Delta y=7.5\,\mathrm{mm}$ between adjacent bright fringes: $\lambda=\Delta y\, d/L=5.0\times 10^{-7}\,\mathrm{m}=500\,\mathrm{nm}$.

## 8. Wave Evidence

Interference and diffraction historically established light's wave behavior. Photon language still requires wave probability amplitudes for pattern formation—bridge to modern physics units.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics 2', 'Fission and Fusion'): r"""## Related Knowledge Expansion

## 1. Fission Process

Heavy nuclei (e.g., $^{235}\mathrm{U}$) can split into medium-mass fragments plus neutrons, releasing energy because fragments have higher $BE/A$. Induced fission often requires a neutron; chain reactions use emitted neutrons.

## 2. Fusion Process

Light nuclei combine into heavier ones (e.g., hydrogen isotopes to helium), increasing $BE/A$ and releasing energy. Requires high temperature/pressure to overcome Coulomb repulsion—stellar cores, tokamaks.

## 3. Energy Release Calculation

Compute $Q=(m_{\mathrm{reactants}}-m_{\mathrm{products}})c^2$ using atomic/nuclear masses consistently. Positive $Q$ means energy released (exothermic).

## 4. Binding-Energy Curve Story

Moving toward $^{56}\mathrm{Fe}$ from either light or very heavy side releases energy. That single curve explains why both fission and fusion can power stars, reactors, or weapons qualitatively.

## 5. AP Exam Patterns

Identify fission vs fusion from equations; compute $Q$; explain role of neutrons in chain reactions; relate to $BE/A$ graph without memorizing every nuclide.

## 6. Common Confusions

Thinking fusion is always "stronger" without comparing specific reactions; forgetting neutrons as products; sign errors in $Q$; confusing chemical combustion energy scales with nuclear MeV scales.

## 7. Worked Sketch

If reactants are heavier than products by $0.200\,\mathrm{u}$, $Q\approx 186\,\mathrm{MeV}$. Per-nucleon comparisons: $0.2\,\mathrm{u}$ across many nucleons still dwarfs eV-scale chemistry.

## 8. Control and Moderation (Qualitative)

Reactors moderate neutron speeds and control absorption to keep multiplication factor near one. AP expects vocabulary-level understanding, not engineering design detail.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics 2', 'Matter Waves and Quantum Behavior'): r"""## Related Knowledge Expansion

## 1. de Broglie Wavelength

Particles have wavelength
$$\lambda=\frac{h}{p}=\frac{h}{mv}$$
(nonrelativistic). Electrons accelerated through voltage $V$ have $K=eV$ and
$$\lambda=\frac{h}{\sqrt{2meV}}.$$
Electron diffraction demonstrates matter waves.

## 2. Wave–Particle Duality

Interference and diffraction reveal wave aspects; localized detections reveal particle aspects. The quantum description uses probability amplitudes; $|\psi|^2$ relates to detection probability.

## 3. Uncertainty Principle

$$\Delta x\,\Delta p_x \ge \frac{\hbar}{2}$$
(qualitative AP use: tighter position localization broadens momentum spread). Explains why electrons do not spiral into nuclei classically—confinement raises kinetic energy scale.

## 4. Standing Waves in Boxes

A particle in a 1D infinite well of width $L$ has
$$\lambda_n=\frac{2L}{n},\quad E_n=\frac{n^2h^2}{8mL^2}.$$
Energy quantization mirrors string harmonics with different boundary physics.

## 5. AP Exam Patterns

Compute $\lambda$ for electrons/protons; compare $\lambda$ to aperture size to predict diffraction; order energy levels; explain why macroscopic objects have undetectable $\lambda$.

## 6. Common Confusions

Using $c$ instead of $v$ for matter waves; mixing photon $E=hc/\lambda$ with particle $\lambda=h/p$; thinking uncertainty is only measurement clumsiness rather than a fundamental spread.

## 7. Worked Sketch

Electron with $K=150\,\mathrm{eV}$: $p=\sqrt{2mK}$, $\lambda\sim 0.1\,\mathrm{nm}$, comparable to atomic spacings—hence crystal diffraction. A $0.15\,\mathrm{kg}$ baseball at $40\,\mathrm{m/s}$ has $\lambda\sim 10^{-34}\,\mathrm{m}$, negligible.

## 8. Probability Interpretation

Repeated identical trials build interference patterns even though each detection is localized. This reconciles single-particle shots with wave predictions—key modern-physics reasoning on AP.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics 2', 'Nuclear Structure and Binding Energy'): r"""## Related Knowledge Expansion

## 1. Nuclear Composition

Nuclei contain $Z$ protons and $N$ neutrons; mass number $A=Z+N$. Isotopes share $Z$ but differ in $N$. Nuclear radii scale roughly as $R\approx R_0 A^{1/3}$.

## 2. Mass Defect and Binding Energy

The nucleus mass is less than the sum of free nucleon masses. Mass defect $\Delta m$ gives binding energy
$$BE=\Delta m\, c^2.$$
Higher binding energy per nucleon means greater stability. Iron–nickel region is near maximum $BE/A$.

## 3. Units and Conversions

Use $1\,\mathrm{u}\leftrightarrow 931.5\,\mathrm{MeV}/c^2$. AP problems often give masses in $\mathrm{u}$ and expect $BE$ in MeV.

## 4. Nuclear Force Qualitatively

The strong nuclear force binds nucleons at short range, overcoming proton repulsion inside the nucleus. Beyond a few femtometers it falls rapidly—explaining limited nuclear size.

## 5. AP Exam Patterns

Compute mass defect and $BE$; compare $BE/A$ to predict fusion/fission energy release direction; interpret binding-energy curves.

## 6. Common Confusions

Forgetting to convert $\mathrm{u}$ to energy; comparing total $BE$ instead of $BE/A$ when discussing stability trends; mixing atomic electrons into nuclear mass accounting inconsistently (follow problem's mass tables).

## 7. Worked Sketch

If $\Delta m=0.030\,\mathrm{u}$ for a nucleus, $BE=0.030\times 931.5\approx 28\,\mathrm{MeV}$. For $A=4$, $BE/A\approx 7\,\mathrm{MeV}$ (helium-scale ballpark).

## 8. Link to Reactions

Energy released in fission/fusion equals the increase in total binding energy of products versus reactants—equivalently, the decrease in rest mass.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics 2', 'Photons and the Photoelectric Effect'): r"""## Related Knowledge Expansion

## 1. Photon Energy and Momentum

Electromagnetic radiation comes in quanta:
$$E=hf=\frac{hc}{\lambda},\quad p=\frac{h}{\lambda}=\frac{E}{c}.$$
Higher frequency means higher photon energy. Intensity measures photon arrival rate for a given $f$, not energy per photon.

## 2. Photoelectric Effect Observations

Electrons eject only if $f>f_0$ (threshold), independent of intensity. Above threshold, max KE increases linearly with $f$; intensity affects photocurrent (number of electrons), not $K_{\max}$. These facts defeat classical wave expectations of waiting time and amplitude-driven KE.

## 3. Einstein Equation

$$hf=K_{\max}+\phi,\quad K_{\max}=eV_s,$$
where $\phi=hf_0$ is the work function and $V_s$ is stopping potential. Slope of $K_{\max}$ vs $f$ is $h$; intercept relates to $\phi$.

## 4. Graphs and Slope

Plotting $V_s$ vs $f$ yields slope $h/e$. Different metals share slope but have different thresholds. AP loves reading $h$ or $\phi$ from graphs.

## 5. AP Exam Patterns

Explain intensity vs frequency roles; compute $K_{\max}$ from $hf-\phi$; interpret stopping voltage; predict effect of changing metal or color of light.

## 6. Common Confusions

Thinking brighter light always raises electron KE; confusing photon energy with beam power; forgetting to convert eV and joules; using $\lambda$ thresholds without $c=f\lambda$.

## 7. Worked Sketch

$\phi=2.0\,\mathrm{eV}$, $\lambda=400\,\mathrm{nm}$: $hf=hc/\lambda\approx 3.1\,\mathrm{eV}$, so $K_{\max}\approx 1.1\,\mathrm{eV}$ and $V_s=1.1\,\mathrm{V}$. Doubling intensity doubles current (ideally) but leaves $V_s$ unchanged.

## 8. Photon Momentum Transfer

Radiation pressure and Compton scattering (qualitative on some AP scopes) reinforce $p=h/\lambda$. Photoelectric focuses on energy bookkeeping with $\phi$.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics 2', 'Polarization and Thin-Film Interference'): r"""## Related Knowledge Expansion

## 1. Polarization of Electromagnetic Waves

Light's electric field oscillates transverse to propagation. Linear polarization means $\vec E$ maintains a fixed direction. Unpolarized light is a rapid mixture of orientations. Polarizers transmit the component parallel to the transmission axis.

## 2. Malus's Law

If polarized light of intensity $I_0$ meets a polarizer at angle $\theta$,
$$I=I_0\cos^2\theta.$$
Two polarizers crossed at $90^\circ$ ideally transmit zero. A third polarizer inserted at intermediate angle can restore light—classic AP conceptual item.

## 3. Polarization by Reflection and Scattering

Light reflected at Brewster's angle is fully polarized parallel to the surface (reflected ray). Sky polarization arises from scattering. Sunglasses with vertical transmission axes reduce horizontal glare.

## 4. Thin-Film Interference Setup

A film of thickness $t$ and index $n$ produces path difference near $2nt$ for near-normal incidence. Phase shifts of $\pi$ occur upon reflection from a higher-index boundary. Net conditions for constructive/destructive depend on whether 0, 1, or 2 phase shifts occur.

## 5. Soap Films and Coatings

Soap film in air: reflections at front (phase shift) and back (often none) differ by $\pi$, so very thin films look dark in reflected light. Antireflection coatings choose $t=\lambda/(4n)$ so reflections cancel at a design wavelength.

## 6. AP Exam Patterns

Apply Malus stepwise through stacked polarizers; determine bright/dark for thin films given indices; explain color of films as $\lambda$-dependent interference. Track phase shifts in a small table before writing $2nt=m\lambda$ conditions.

## 7. Common Confusions

Using $\cos\theta$ instead of $\cos^2\theta$; forgetting which interface causes a phase shift; mixing transmitted vs reflected conditions; using vacuum $\lambda$ inside the film without $n$ (use $\lambda/n$ or $2nt$).

## 8. Worked Sketch

Two polarizers at $0^\circ$ and $60^\circ$: $I=I_0\cos^2 60^\circ=I_0/4$. Film $n=1.4$, design destructive reflection at $560\,\mathrm{nm}$: $t=\lambda/(4n)=100\,\mathrm{nm}$ for single phase-shift difference case.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics 2', 'Radioactive Decay and Nuclear Transformations'): r"""## Related Knowledge Expansion

## 1. Decay Law

Number of undecayed nuclei:
$$N=N_0 e^{-\lambda t},\quad A=\lambda N=\ A_0 e^{-\lambda t},$$
where $\lambda$ here is the decay constant (not wavelength). Half-life
$$T_{1/2}=\frac{\ln 2}{\lambda}.$$
Activity $A$ has units of becquerel ($1/\mathrm{s}$) or curie.

## 2. Alpha, Beta, Gamma

Alpha: emits $^4_2\mathrm{He}$, $Z\to Z-2$, $A\to A-2$. Beta-minus: $n\to p+e^-+\bar\nu$, $Z\to Z+1$. Beta-plus / electron capture lower $Z$. Gamma: nuclear de-excitation photon; $Z,A$ unchanged.

## 3. Conservation Rules

Charge, nucleon number, lepton number, and energy–momentum are conserved in standard AP bookkeeping. Balance nuclear equations before computing energies.

## 4. Decay Chains and Equilibrium

Parent–daughter sequences appear in series. Secular equilibrium can make daughter activity match parent when daughter is short-lived compared with parent.

## 5. AP Exam Patterns

Fill nuclear equations; compute remaining fraction after $n$ half-lives ($1/2^n$); use $\ln$ form for continuous time; interpret activity graphs.

## 6. Common Confusions

Using $\lambda$ as wavelength mid-problem; thinking activity equals $N$; miscounting $Z$ in beta decay; assuming gamma changes identity.

## 7. Worked Sketch

$T_{1/2}=8.0\,\mathrm{d}$, after $24\,\mathrm{d}$ ($3$ half-lives) $N=N_0/8$. Decay constant $\lambda=\ln2/T_{1/2}$. If $A_0=80\,\mathrm{Bq}$, $A=10\,\mathrm{Bq}$.

## 8. Biological and Dating Contexts

Carbon-14 dating uses known $T_{1/2}$ and atmospheric ratios—AP may ask conceptual limits (contamination, calibration). Medical tracers use short half-lives to limit dose.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics 2', 'Sound Waves, Beats, and the Doppler Effect'): r"""## Related Knowledge Expansion

## 1. Sound as a Longitudinal Wave

Sound in air is a longitudinal pressure wave. Particle displacements are parallel to propagation. The relationships $v=f\lambda$ and $v=\sqrt{\gamma RT/M}$ still govern speed. Human hearing roughly spans $20\,\mathrm{Hz}$ to $20\,\mathrm{kHz}$; ultrasound lies above that band.

## 2. Beats from Close Frequencies

Two tones at $f_1$ and $f_2$ produce a beat frequency
$$f_{\mathrm{beat}}=|f_1-f_2|.$$
The ear hears loudness pulsing at $f_{\mathrm{beat}}$. Musicians tune by driving beats to zero. AP problems often give beat frequency and one known frequency and ask for the other possibility $f\pm f_{\mathrm{beat}}$.

## 3. Doppler Effect

When source or observer moves relative to the air,
$$f' = f\,\frac{v\pm v_o}{v\pm v_s},$$
with sign conventions: use the sign that raises $f'$ when observer moves toward the source or source moves toward the observer. For source approaching, denominator decreases. For electromagnetic waves in vacuum a different relativistic formula applies; AP Physics 2 Doppler items are usually mechanical sound.

## 4. Shock Waves and Mach

If a source speed exceeds $v$, a Mach cone forms with $\sin\theta = v/v_s$. AP may ask qualitative recognition rather than heavy algebra. Sonic boom is associated with the cone sweeping an observer.

## 5. AP Exam Patterns

Classic items: find beat frequency; determine unknown tuning-fork frequency; compute Doppler shift for ambulance or whistle; explain why frequency is unchanged when only a reflecting wall is considered carefully (image-source approach). Draw velocity arrows before choosing signs.

## 6. Common Confusions

Mixing up $v_o$ and $v_s$ signs; thinking medium motion is identical to source motion without rewriting; confusing wavelength change with frequency change for a moving source (wavelength shortens ahead of an approaching source).

## 7. Worked Sketch

$f=400\,\mathrm{Hz}$, $v=340\,\mathrm{m/s}$, source toward observer at $20\,\mathrm{m/s}$, observer at rest: $f'=400\cdot 340/(340-20)=425\,\mathrm{Hz}$. If two instruments at $440$ and $444\,\mathrm{Hz}$ sound together, $f_{\mathrm{beat}}=4\,\mathrm{Hz}$.

## 8. Lab Connections

Tube resonance and Doppler phone-app labs appear in AP classroom practice. Record assumptions: still air, point source, no wind. Wind adds a medium-velocity component that modifies effective $v$.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics 2', 'Special Relativity'): r"""## Related Knowledge Expansion

## 1. Postulates

Einstein's two postulates: (1) physical laws are the same in all inertial frames; (2) the speed of light $c$ in vacuum is the same for all inertial observers. These replace Galilean velocity addition for electromagnetic phenomena and high-speed mechanics.

## 2. Time Dilation

A moving clock runs slow as measured in the lab frame:
$$\Delta t=\gamma\Delta t_0,\quad \gamma=\frac{1}{\sqrt{1-v^2/c^2}},$$
where $\Delta t_0$ is proper time (clock at rest in its frame). Muon decay survival to Earth's surface is a classic application.

## 3. Length Contraction

Lengths parallel to motion contract:
$$L=L_0/\gamma,$$
with $L_0$ the proper length. Perpendicular lengths do not contract. Consistency of time dilation and length contraction resolves twin-paradox style bookkeeping when accelerations are handled carefully (AP focuses on inertial-frame results).

## 4. Relativistic Momentum and Energy

$$\vec p=\gamma m\vec v,\quad E=\gamma mc^2,\quad E^2=(pc)^2+(mc^2)^2.$$
Rest energy $E_0=mc^2$. Kinetic energy $K=(\gamma-1)mc^2$, not $\tfrac12 mv^2$ at high $v$.

## 5. Velocity Addition

If $u$ is object speed relative to a rocket moving at $v$ relative to ground (collinear),
$$u'=\frac{u+v}{1+uv/c^2}.$$
Never exceeds $c$ if $|u|,|v|<c$.

## 6. AP Exam Patterns

Compute $\gamma$; compare proper vs dilated times; identify which length is proper; use $E^2=p^2c^2+m^2c^4$ in particle problems; explain why Newtonian KE fails near $c$.

## 7. Common Confusions

Applying dilation to the wrong clock; thinking everything "looks shorter" without defining simultaneity; using $\tfrac12 mv^2$ when $\gamma-1$ is needed; believing mass increases as a dynamic explanation (prefer energy–momentum language).

## 8. Worked Sketch

$v=0.8c$ gives $\gamma=1/0.6\approx 1.67$. A $2.0\,\mu\mathrm{s}$ proper lifetime becomes $3.3\,\mu\mathrm{s}$ in the lab. Rest energy of electron $511\,\mathrm{keV}$; at $\gamma=2$, total energy $1.022\,\mathrm{MeV}$ and $K=511\,\mathrm{keV}$.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics 2', 'Standing Waves on Strings and in Pipes'): r"""## Related Knowledge Expansion

## 1. Formation of Standing Waves

Oppositely traveling waves of the same $f$ and $A$ produce a standing wave
$$y(x,t)=2A\sin(kx)\cos(\omega t)$$
(up to phase conventions). Nodes ($y=0$ always) occur where $\sin(kx)=0$; antinodes where $|\sin(kx)|=1$.

## 2. String Fixed at Both Ends

Boundary conditions require nodes at both ends. Allowed wavelengths:
$$\lambda_n=\frac{2L}{n},\quad f_n=\frac{n v}{2L},\quad n=1,2,3,\ldots$$
The fundamental has $L=\lambda/2$. Harmonics are integer multiples of $f_1$.

## 3. Pipes: Open and Closed

Open–open pipe: antinodes at both ends (displacement), same $f_n=nv/(2L)$ as the string formula. Closed–open pipe: node at closed end, antinode at open end,
$$f_n=\frac{n v}{4L},\quad n=1,3,5,\ldots$$
Only odd harmonics appear for an ideal closed pipe.

## 4. Tension and Temperature Effects

On strings, $v=\sqrt{T/\mu}$ so raising tension raises all $f_n$. In air columns, warming air raises $v$ and thus resonant frequencies—important for wind instruments.

## 5. AP Exam Patterns

Identify which harmonic from a sketch of nodes; compute $f$ after changing $L$ or $T$; contrast open vs closed pipes; match spectra to pipe type. Count loops: one loop is the fundamental on a string.

## 6. Common Confusions

Using $n/2L$ for closed pipes; miscounting nodes; forgetting end corrections in real pipes (usually ignored on AP unless given); confusing displacement nodes with pressure nodes (they are complementary).

## 7. Worked Sketch

String $L=0.75\,\mathrm{m}$, $v=300\,\mathrm{m/s}$: $f_1=v/(2L)=200\,\mathrm{Hz}$, $f_3=600\,\mathrm{Hz}$. Closed pipe same $L$: $f_1=v/(4L)=100\,\mathrm{Hz}$, next is $300\,\mathrm{Hz}$.

## 8. Resonance and Driving

A driver near $f_n$ builds large amplitude because reflections reinforce. Off resonance, partial cancellation limits amplitude. Resonance curves appear in lab-style AP questions.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics 2', 'Superposition and Interference'): r"""## Related Knowledge Expansion

## 1. Principle of Superposition

When waves overlap in a linear medium, the net displacement is the algebraic sum of individual displacements:
$$y_{\mathrm{net}}=y_1+y_2.$$
After passing, pulses continue unchanged. Superposition enables interference, standing waves, and beats.

## 2. Constructive and Destructive Interference

Two harmonic waves of equal amplitude $A$ and phase difference $\delta$ yield amplitude
$$A_{\mathrm{net}}=2A\cos(\delta/2).$$
Constructive interference: $\delta=2\pi m$. Destructive: $\delta=(2m+1)\pi$. For path-length difference $\Delta L$ from coherent sources,
$$\delta=\frac{2\pi}{\lambda}\Delta L$$
(plus any source phase difference).

## 3. Coherence and Path Difference

Stable interference requires a fixed phase relationship (coherence). Young-type setups use a common source split into two paths. Bright fringes satisfy $\Delta L=m\lambda$; dark fringes $\Delta L=(m+\tfrac12)\lambda$ for in-phase sources.

## 4. Phase Change on Reflection

Reflection from a denser medium (higher wave speed drop / higher index for light) can introduce a $\pi$ phase shift. This flips constructive/destructive conditions in thin films and some string boundary problems. Always check both ends of a string or both film interfaces.

## 5. AP Exam Patterns

Predict max/min locations; interpret intensity vs position graphs; combine superposition with $I\propto A^2$; explain why two speakers can create quiet spots. Sketch path lengths before writing equations.

## 6. Common Confusions

Adding intensities instead of amplitudes for coherent waves; forgetting the $\pi$ phase shift; using $\Delta L=m\lambda$ at the wrong boundary condition; confusing temporal beats with spatial interference.

## 7. Worked Sketch

Two in-phase sources separated by $d$ produce a point with $\Delta L=d\sin\theta$. For small angles on a distant screen, fringe spacing $\Delta y\approx \lambda L/d$ in the double-slit geometry. If $\Delta L=\lambda/2$, amplitudes cancel for equal $A$.

## 8. Energy View

Destructive interference redistributes energy; it does not destroy energy globally. Bright fringes receive more, dark fringes less. Time-averaged power is conserved in lossless models.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics 2', 'Traveling Waves and Wave Speed'): r"""## Related Knowledge Expansion

## 1. Wave Function and Propagation

A traveling wave transports energy and momentum through a medium (or fields) without permanently transporting the medium itself. For a harmonic wave traveling in the $+x$ direction,
$$y(x,t)=A\cos(kx-\omega t+\phi)$$
where $A$ is amplitude, $k=2\pi/\lambda$ is the wave number, $\omega=2\pi f$ is angular frequency, and $\phi$ is phase. The wave speed is
$$v=\frac{\omega}{k}=f\lambda.$$
On AP Physics 2, connect $v$, $f$, and $\lambda$ fluently and recognize that changing frequency in a fixed medium usually changes wavelength so that $v$ stays approximately constant.

## 2. Medium Dependence of Speed

For a taut string of linear mass density $\mu$ under tension $T$,
$$v=\sqrt{\frac{T}{\mu}}.$$
Increasing tension raises wave speed; increasing $\mu$ lowers it. For sound in an ideal gas, $v=\sqrt{\gamma RT/M}$, so temperature strongly affects sound speed. Electromagnetic waves in vacuum travel at $c$; in a medium with index $n$, $v=c/n$. AP items often ask which change alters $v$ versus which only alters $f$ or $\lambda$.

## 3. Phase, Crest Tracking, and Snapshots

A crest is a locus of constant phase. Setting $kx-\omega t=\mathrm{const}$ and differentiating gives $dx/dt=\omega/k=v$. Snapshot graphs ($y$ vs $x$ at fixed $t$) reveal $\lambda$; history graphs ($y$ vs $t$ at fixed $x$) reveal $T=1/f$. Translating between graph types is a frequent AP skill. Pulse direction must be consistent with transverse particle motion.

## 4. Energy and Intensity Preview

Average power carried by many mechanical waves scales with $A^2$ and with wave speed. Intensity $I=P/A_{\mathrm{area}}$ falls as $1/r^2$ for spherical spreading. Even when a question focuses on $v=f\lambda$, later optics and sound items reuse amplitude–intensity links.

## 5. AP Exam Patterns

Typical prompts: compute $v$ from $T$ and $\mu$; find $\lambda$ given $f$ and medium speed; interpret which property changes when a wave enters a new medium (frequency continuous at a boundary; wavelength and speed change); read $v$ from successive crest positions. Write $v=f\lambda$ before substituting.

## 6. Common Confusions

Students confuse particle speed $\partial y/\partial t$ with wave speed $v$. Another trap: assuming frequency changes when a wave crosses into a new medium; the source sets $f$. Also, $v=\sqrt{T/\mu}$ applies to string waves, not automatically to sound or light.

## 7. Worked Reasoning Sketch

A string with $\mu=0.040\,\mathrm{kg/m}$ under $T=36\,\mathrm{N}$ has $v=\sqrt{36/0.040}=30\,\mathrm{m/s}$. For $f=150\,\mathrm{Hz}$, $\lambda=v/f=0.20\,\mathrm{m}$. If tension doubles, $v\to 30\sqrt{2}$ and $\lambda$ increases by $\sqrt{2}$ at fixed $f$. State ratios before computing.

## 8. CED Alignment

This topic anchors AP Physics 2 waves and physical optics. Transfer questions connect string waves to sound in pipes and light in media via $v=f\lambda$. Label medium, source frequency, and which quantity is constrained by boundary conditions.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics 2', 'Wave Intensity and Sound Level'): r"""## Related Knowledge Expansion

## 1. Intensity as Power per Area

Intensity is average power per unit area perpendicular to propagation:
$$I=\frac{P}{A}.$$
For isotropic point-source spreading,
$$I=\frac{P}{4\pi r^2},$$
so $I\propto 1/r^2$. Doubling distance quarters intensity. Mechanical wave intensity also scales as $I\propto A^2$.

## 2. Decibel Sound Level

Sound level uses a logarithmic scale:
$$\beta=(10\,\mathrm{dB})\log_{10}\!\left(\frac{I}{I_0}\right),\quad I_0=10^{-12}\,\mathrm{W/m^2}.$$
A factor-of-10 intensity change is $10\,\mathrm{dB}$; doubling intensity is about $3\,\mathrm{dB}$. Invert with $I=I_0\,10^{\beta/10}$.

## 3. Amplitude and Level Links

Because $I\propto A^2$, doubling amplitude multiplies intensity by 4 and raises level by about $6\,\mathrm{dB}$. Intensity ratio from levels:
$$\frac{I_2}{I_1}=10^{(\beta_2-\beta_1)/10}.$$

## 4. Geometry and Absorption

Ideal $1/r^2$ ignores absorption and reflections. For cylindrical (line) sources, intensity falls more like $1/r$. Identify geometry before writing $I(r)$.

## 5. AP Exam Patterns

Compute $\beta$ from $I$; find distance ratios for a required intensity change; relate microphone readings to source power; connect amplitude ratios to decibel differences. Treat "louder" carefully—use intensity or level as the problem defines it.

## 6. Common Confusions

Treating decibels as linear, using $I\propto 1/r$ for spherical sources, and forgetting $\log_{10}(1/4)\approx -0.60$ (a $6\,\mathrm{dB}$ drop) are the top traps.

## 7. Worked Sketch

A $10\,\mathrm{W}$ isotropic speaker at $r=5\,\mathrm{m}$ gives $I=10/(4\pi\cdot 25)\approx 0.032\,\mathrm{W/m^2}$, so $\beta\approx 105\,\mathrm{dB}$. At $10\,\mathrm{m}$, $I\to I/4$ and $\beta\approx 99\,\mathrm{dB}$.

## 8. Interference Caveat

Local intensity with two coherent waves depends on phase; maxima can exceed the sum of separate average intensities. Keep average single-source intensity distinct from interference maxima.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Physics C: E&M', 'Biot–Savart Law and Ampère’s Law'): r"""## Related Knowledge Expansion

## 1. Biot–Savart

$$d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec s\times\hat r}{r^2}.$$
Integrate for wire geometry. Long straight wire: $B=\mu_0 I/(2\pi r)$.

## 2. Ampère's Law

$$\oint \vec B\cdot d\vec\ell=\mu_0 I_{\mathrm{enc}}.$$
Ideal for symmetric steady currents (long wire, solenoid).

## 3. Solenoid

Long ideal solenoid $B=\mu_0 n I$ inside, $n$ turns per length.

## 4. AP Patterns

Field at center of loop; inside solenoid; force between parallel wires; use Ampère for symmetry, Biot–Savart for finite arcs.

## 5. Confusions

Applying Ampère with changing fields (need displacement current in full Maxwell—AP C uses Ampère for steady $I$); wrong $r$ in Biot–Savart.

## 6. Worked Sketch

Loop radius $R$, center field $B=\mu_0 I/(2R)$.

## 7. Direction

Right-hand rule for $B$ around wire: thumb along $I$, curl fingers.

## 8. Superposition

Fields from multiple wires add vectorially.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Continuous Charge Distributions (Line, Ring, Disk)'): r"""## Related Knowledge Expansion

## 1. Linear Density

$\lambda=Q/L$. Field of infinite line (qualitative $1/r$ falloff) or finite line via integration $dE=\frac{1}{4\pi\varepsilon_0}\frac{dq}{r^2}\hat r$.

## 2. Ring on Axis

Ring radius $R$, charge $Q$: on axis distance $x$ from center,
$$E=\frac{1}{4\pi\varepsilon_0}\frac{Qx}{(R^2+x^2)^{3/2}}.$$
At center $E=0$ by symmetry.

## 3. Disk

Uniform disk gives field on axis approaching $\sigma/(2\varepsilon_0)$ as $x\to0$ (infinite plane limit).

## 4. AP Patterns

Set up $dq$; exploit symmetry to cancel components; limit checks at $x\gg R$ (point charge) and $x=0$.

## 5. Confusions

Wrong $dq$ (using total $Q$ without density); missing symmetry cancellation; radians vs degrees in arc length $dq=\lambda R\,d\theta$.

## 6. Worked Sketch

Half ring integration often yields nonzero $E$ perpendicular to symmetry axis—watch bounds.

## 7. Gauss Link

Infinite plane/cylinder/sphere results from Gauss's law complement integration shortcuts.

## 8. Calculus Setup

Show $d\vec E$ direction before integrating—AP FRQ awards setup even if integral is given.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Coulomb’s Law and Superposition'): r"""## Related Knowledge Expansion

## 1. Coulomb's Law

Point charges exert force magnitude
$$F=\frac{1}{4\pi\varepsilon_0}\frac{|q_1 q_2|}{r^2}$$
attractive if unlike, repulsive if like. Superposition: net force is vector sum of contributions from each charge.

## 2. Electric Field View

$\vec E=\vec F/q$. Field of point charge $\vec E=\frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}\hat r$. Superposition applies to fields likewise.

## 3. AP Patterns

Find force on test charge in triangle layout; equilibrium position on line; compare magnitudes without full numbers.

## 4. Confusions

Forgetting vector components; using wrong $\varepsilon_0$ value; treating extended objects as points without justification.

## 5. Worked Sketch

Two $+Q$ separated by $d$: midpoint field cancels; force on third charge depends on placement.

## 6. Units

$\varepsilon_0=8.85\times10^{-12}\,\mathrm{F/m}$; $k=1/(4\pi\varepsilon_0)=8.99\times10^9\,\mathrm{N\cdot m^2/C^2}$.

## 7. Continuous Limit

Integrate $dq$ for line/ring distributions—links to continuous charge topic.

## 8. Energy Preview

Work to assemble charges relates to potential energy—connect when moving charges quasi-statically.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Dielectrics and Capacitors with Insulators'): r"""## Related Knowledge Expansion

## 1. Capacitance Definition

$C=Q/V$. Parallel plate vacuum $C=\varepsilon_0 A/d$. Energy stored $U=\tfrac12 CV^2=\tfrac12 QV$.

## 2. Dielectrics

Inserting dielectric with constant $\kappa$ increases capacitance $C=\kappa C_0$ if battery disconnected ($Q$ fixed) or changes $Q$ if battery connected ($V$ fixed). Polarization reduces internal field by factor $\kappa$.

## 3. AP Patterns

Compare before/after inserting slab; energy changes with constant $V$ vs constant $Q$; partial dielectric fill geometry.

## 4. Confusions

Mixing constant voltage and constant charge cases; forgetting bound surface charges in dielectric.

## 5. Worked Sketch

Disconnect battery, insert $\kappa=3$: $Q$ same, $C\to3C_0$, $V\to V/3$, energy $U=Q^2/(2C)$ drops.

## 6. Force on Plates

Attractive force between plates $F=Q^2/(2\varepsilon_0 A)$ for vacuum gap—occasional FRQ.

## 7. Series/Parallel

$1/C_{\mathrm{eq}}=\sum 1/C_i$ series; $C_{\mathrm{eq}}=\sum C_i$ parallel—combine with dielectric problems.

## 8. Energy Density

$u=\tfrac12 \varepsilon E^2$ in field—links to next topic.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Electric Field Energy and Energy Density'): r"""## Related Knowledge Expansion

## 1. Stored Energy

Charging capacitor stores energy in field: $U=\tfrac12 CV^2$. For uniform field $U=\tfrac12 \varepsilon E^2 (Ad)$.

## 2. Energy Density

$$u=\frac{1}{2}\varepsilon E^2$$
generalizes beyond capacitors to any region with field.

## 3. AP Patterns

Find energy after changing separation; compare energy density in two regions; relate work done by battery vs field energy increase.

## 4. Confusions

Double-counting plate energy and field energy; wrong $\varepsilon$ in $u$ when dielectric present ($\varepsilon=\kappa\varepsilon_0$).

## 5. Worked Sketch

Double plate separation at constant $Q$: $C$ halves, $V$ doubles, $U=Q^2/(2C)$ doubles—work done against attraction.

## 6. Field View

Energy localized in space supports field-as-storage picture for circuits and EM waves qualitatively.

## 7. Integration

Total energy $U=\int u\,dV$ over volume with nonuniform $E$.

## 8. Thermodynamic Note

Real capacitors may dissipate heat—ideal AP problems ignore leakage.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Equipotential Surfaces and Field Lines'): r"""## Related Knowledge Expansion

## 1. Potential and Field Relation

$\vec E=-\nabla V$. In 1D, $E=-dV/dx$. Field points toward decreasing potential.

## 2. Equipotentials

Surfaces (or lines) of constant $V$ cross field lines perpendicularly. No work moving charge along equipotential. Spacing of equipotentials indicates field strength.

## 3. Conductors

Conductor surface is equipotential; field just outside perpendicular. Charge resides on outer surface in electrostatic equilibrium (hollow cavity caveat with internal charges).

## 4. AP Patterns

Sketch equipotentials near dipole; infer $E$ direction from $V$ map; find $E$ from potential slope graph.

## 5. Confusions

Thinking equipotential implies zero field nearby; confusing potential with potential energy ($U=qV$).

## 6. Worked Sketch

Uniform field $E=100\,\mathrm{V/m}$: equipotentials planes separated by $\Delta V=100\,\mathrm{V}$ every $1\,\mathrm{m}$.

## 7. Energy

$\Delta U=q\Delta V$ for moving charge—work by external agent $W=q\Delta V$.

## 8. Graph Reading

Steep $V$–$x$ means large $|E|$; flat regions mean small field.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Faraday’s Law, Lenz’s Law, and Induction Circuits'): r"""## Related Knowledge Expansion

## 1. Faraday's Law

$$\mathcal{E}=-\frac{d\Phi_B}{dt},\quad \Phi_B=\int \vec B\cdot d\vec A.$$
Induced emf drives current opposing flux change (Lenz).

## 2. Motional EMF

Rod length $L$ speed $v$ in $B$: $\mathcal{E}=BLv$ when $v,B,L$ mutually perpendicular.

## 3. AP Patterns

Determine induced current direction; compute emf from changing area or field; analyze sliding rod on rails.

## 4. Confusions

Wrong sign on Lenz; confusing flux with field; ignoring complete circuit resistance $I=\mathcal{E}/R$.

## 5. Worked Sketch

Flux increases into page: induced current circulates to create field out of page (counterclockwise viewed from above if loop in plane).

## 6. Energy

Mechanical work to pull rod equals thermal energy in resistor—conservation check.

## 7. Transformers Link

Changing flux in primary induces emf in secondary—qualitative mutual induction.

## 8. Graphs

Slope of $\Phi$–$t$ gives $|\mathcal{E}|$.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Gauss’s Law Applications: Plane, Line, and Sphere'): r"""## Related Knowledge Expansion

## 1. Gauss's Law

$\oint \vec E\cdot d\vec A=\frac{Q_{\mathrm{enc}}}{\varepsilon_0}$. Useful with high symmetry.

## 2. Infinite Plane

Uniform sheet charge $\sigma$: field magnitude $E=\sigma/(2\varepsilon_0)$ each side, perpendicular to sheet.

## 3. Infinite Line

Linear density $\lambda$: cylindrical Gaussian surface gives $E=\lambda/(2\pi\varepsilon_0 r)$.

## 4. Sphere

Outside spherical shell of charge $Q$, field as point charge; inside uniform shell field zero; inside solid uniform sphere $E\propto r$.

## 5. AP Patterns

Choose Gaussian surface matching symmetry; find $E(r)$; compare inside/outside; justify why $E_{\parallel}=0$ on conductor surface in electrostatic equilibrium.

## 6. Confusions

Using Gauss when symmetry absent; including wrong $Q_{\mathrm{enc}}$; forgetting factor of 2 on plane vs single surface.

## 7. Worked Sketch

$Q_{\mathrm{enc}}=\rho \frac{4}{3}\pi r^3$ inside uniform sphere radius $R$ gives $E=\frac{1}{4\pi\varepsilon_0}\frac{Qr}{R^3}$ for $r<R$.

## 8. Conductor Equilibrium

Excess charge on surface; $E=0$ inside conductor; field perpendicular at surface.

## 9. Differential Form Preview

$\nabla\cdot\vec E=\rho/\varepsilon_0$—optional enrichment beyond AP algebra level.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Inductance, RL Circuits, and LC Oscillations'): r"""## Related Knowledge Expansion

## 1. Self-Inductance

$\mathcal{E}=-L\,dI/dt$. Solenoid $L=\mu_0 n^2 V$. Energy $U=\tfrac12 LI^2$.

## 2. RL Transient

Growth: $I(t)=\frac{V}{R}(1-e^{-tR/L})$, $\tau=L/R$. Decay: $I(t)=I_0 e^{-tR/L}$.

## 3. LC Oscillations

Ideal LC: $Q(t)=Q_0\cos(\omega t)$, $\omega=1/\sqrt{LC}$, energy swaps between $U_C$ and $U_L$.

## 4. AP Patterns

Find $\tau$; initial $dI/dt$ when switch closed; frequency of LC; energy at max charge on capacitor.

## 5. Confusions

Treating inductor as open at all times (only at $t=0^+$ for step in series RL); using wrong $\omega$ formula.

## 6. Worked Sketch

$L=0.10\,\mathrm H$, $R=10\,\Omega$: $\tau=0.01\,\mathrm s$. LC with $C=1\,\mu\mathrm F$: $f=\omega/(2\pi)\approx503\,\mathrm{Hz}$.

## 7. RLC Damping

Qualitative decrease of amplitude when $R$ present—AP may describe underdamped curve.

## 8. Steady State

Inductor acts as wire in DC steady state ($dI/dt=0$).

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Kirchhoff’s Rules and Multi-Loop Circuits'): r"""## Related Knowledge Expansion

## 1. Junction Rule

$\sum I_{\mathrm{in}}=\sum I_{\mathrm{out}}$—charge conservation at nodes.

## 2. Loop Rule

$\sum \Delta V=0$ around closed loop—energy conservation for steady current.

## 3. Multi-Loop Strategy

Choose current directions; label resistors and emfs; write independent junction and loop equations; solve linear system.

## 4. AP Patterns

Two-loop circuits; find current through branch; power dissipated in resistor $P=I^2R=IV$.

## 5. Confusions

Sign errors on emf/resistor drops; counting dependent equations; treating capacitor as short in DC steady state (open instead).

## 6. Worked Sketch

Single loop with battery $V$ and $R_1,R_2$ series: $I=V/(R_1+R_2)$, drops sum to $V$.

## 7. RC at Steady State

Capacitor blocks DC current at steady state; inductor short—used in transient unit.

## 8. Power

Battery power $IV$; internal resistance lowers terminal voltage $V=V_0-Ir$.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Magnetic Force, Currents, and Right-Hand Rules'): r"""## Related Knowledge Expansion

## 1. Lorentz Force

$$\vec F=q\vec v\times\vec B,\quad \vec F=I\vec L\times\vec B.$$
Magnitude $F=qvB\sin\theta$ or $ILB\sin\theta$.

## 2. Right-Hand Rules

v×B force on + charge; thumb $I$, fingers $B$, palm force on wire. Circular motion when $v\perp B$: radius $r=mv/(qB)$.

## 3. AP Patterns

Direction of force on particle/wire; equilibrium in crossed $E,B$ fields ($v=E/B$ selector); torque on current loop $\tau=\mu B\sin\theta$.

## 4. Confusions

Using left-hand rule inconsistently; forgetting negative charge reverses force; wrong angle in $\sin\theta$.

## 5. Worked Sketch

Electron entering uniform $B$ perpendicular: circular path clockwise when viewed along $B$—check sign carefully.

## 6. Applications

Mass spectrometer and velocity selector concepts at AP level.

## 7. Work Done

Magnetic force does no work on moving charge ($\vec F\perp\vec v$)—important conceptual MCQ.

## 8. Current Loop Dipole

Magnetic moment $\vec\mu=I\vec A$ aligns with external $B$.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'Mutual Inductance and Transformers'): r"""## Related Knowledge Expansion

## 1. Mutual Inductance

Changing current in coil 1 induces emf in coil 2: $\mathcal{E}_2=-M\,dI_1/dt$. $M$ depends on geometry and coupling.

## 2. Transformer Ideal Model

For ideal transformer with turns $N_p,N_s$:
$$\frac{V_s}{V_p}=\frac{N_s}{N_p},\quad I_p V_p=I_s V_s.$$
Power in equals power out (ideal).

## 3. AP Patterns

Step-up/down voltage; find secondary current; explain why long-distance transmission uses high voltage low current.

## 4. Confusions

Confusing turns ratio with power ratio incorrectly; ignoring non-ideal losses when problem says ideal.

## 5. Worked Sketch

$N_s/N_p=10$ step-up: $V_s=10V_p$, $I_s=I_p/10$ for ideal.

## 6. Faraday Link

Shared flux links coils—mutual $M$ quantifies linkage strength.

## 7. Sign and Lenz

Secondary current direction still opposes flux change that created it.

## 8. Applications

Phone chargers, grid transformers—qualitative efficiency and safety grounding mentions possible.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: E&M', 'RC Circuit Transients and Capacitor Switching'): r"""## Related Knowledge Expansion

## 1. Charging Equation

Series RC with emf $V$: $q(t)=CV(1-e^{-t/RC})$, $i(t)=\frac{V}{R}e^{-t/RC}$. Time constant $\tau=RC$.

## 2. Discharging

$q(t)=Q_0 e^{-t/RC}$, $V_C=q/C$.

## 3. AP Patterns

Find $\tau$; current immediately after switch flip; energy remaining on capacitor; steady-state open/closed behavior.

## 4. Confusions

Using steady-state formulas during transient; forgetting capacitor voltage continuous at switch instant (ideal).

## 5. Worked Sketch

$C=10\,\mu\mathrm F$, $R=1\,\mathrm{k\Omega}$: $\tau=10\,\mathrm{ms}$. After $3\tau$, $q\approx95\%$ of final.

## 6. Graphs

Exponential approach to asymptote—slope at $t=0$ set by $V/R$.

## 7. Energy

Half energy in $R$ during charging in simple series RC—qualitative split.

## 8. Switching Logic

Redraw circuit for each switch position; identify series/parallel $C_{\mathrm{eq}}$.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', '1D and 2D Kinematics with Calculus'): r"""## Related Knowledge Expansion

## 1. Position, Velocity, and Acceleration as Calculus

For motion along a line, $v(t)=\frac{dx}{dt}$ and $a(t)=\frac{dv}{dt}=\frac{d^2x}{dt^2}$. Conversely $v(t)=v_0+\int_0^t a(\tau)\,d\tau$ and $x(t)=x_0+\int_0^t v(\tau)\,d\tau$. AP Physics C expects fluency moving between graphs and integrals/derivatives.

## 2. Vector Kinematics in 2D

$\vec r(t)=x(t)\hat i+y(t)\hat j$, $\vec v=\frac{d\vec r}{dt}$, $\vec a=\frac{d\vec v}{dt}$. Speed is $|\vec v|$, not necessarily $dx/dt$ alone. Projectile motion separates into $a_x=0$, $a_y=-g$ components.

## 3. AP Exam Patterns

Given $a(t)$, find $v$ and $x$ with initial conditions; interpret area under $a$–$t$ as $\Delta v$; find times when $\vec v$ and $\vec a$ are perpendicular.

## 4. Common Confusions

Using speed formulas with signed velocity; forgetting vector components; integrating without initial conditions.

## 5. Worked Sketch

$a(t)=6t\,\mathrm{m/s^2}$, $v(0)=2$: $v=2+3t^2$. Distance requires integrating $|v|$ if direction changes.

## 6. Links

Feeds directly into Newton's laws with variable force and energy integrals.

## 7. Graph Reading

Slope of $x$–$t$ is $v$; slope of $v$–$t$ is $a$; area under $v$–$t$ is displacement.

## 8. Calculus Limits

Instantaneous quantities are derivatives; finite intervals use integrals—AP FRQ often mixes both in one problem.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', '6. Kepler’s First and Second Law'): r"""## Related Knowledge Expansion

## 1. First Law

Planetary orbits are ellipses with the Sun at one focus. Circle is special case with zero eccentricity.

## 2. Second Law

Areal velocity constant: $\frac{dA}{dt}=\frac{L}{2m}=\mathrm{const}$. Planet moves faster near perihelion, slower at aphelion.

## 3. AP Patterns

Identify perihelion/aphelion speeds qualitatively; relate swept area to angular momentum; interpret eccentricity.

## 4. Confusions

Thinking Sun at geometric center of ellipse; assuming equal arc lengths in equal times rather than equal areas.

## 5. Worked Sketch

At perihelion $r_p$ and aphelion $r_a$, $v_p/v_a=r_a/r_p$ from angular momentum conservation.

## 6. Vector Picture

$\vec r\times\vec v$ direction fixed in space for central force.

## 7. Third Law Link

Period depends on semi-major axis $a$, not eccentricity alone.

## 8. Historical Context

Empirical laws explained by Newtonian central force—common synthesis question.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Angular Momentum and Its Conservation'): r"""## Related Knowledge Expansion

## 1. Definition

$\vec L=\vec r\times\vec p$ for particle; rigid body about fixed axis $L=I\omega$. Torque $\vec\tau=\frac{d\vec L}{dt}$.

## 2. Conservation

If $\vec\tau_{\mathrm{ext}}=0$, $\vec L$ constant. Ice skater pulls arms in: $I$ decreases, $\omega$ increases.

## 3. AP Patterns

Collision with rod pivot; satellite orientation; spinning disk drops mass—find final $\omega$.

## 4. Confusions

Applying conservation when external torque present; scalar $L$ sign errors; forgetting $I$ changes when shape changes.

## 5. Worked Sketch

$I_1\omega_1=I_2\omega_2$. Halve $I$ doubles $\omega$.

## 6. Vector Form

Direction via right-hand rule along axis—AP may stay 1D scalar.

## 7. Relation to Kepler

Areal velocity constant connects to angular momentum in orbits.

## 8. Impulse–Momentum Analog

Angular impulse $\int \tau\,dt=\Delta L$.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Angular Position, Velocity, and Acceleration'): r"""## Related Knowledge Expansion

## 1. Definitions

$\theta(t)$ measured in radians. $\omega=\dot\theta$, $\alpha=\dot\omega$. Analogous to linear $x,v,a$.

## 2. Relations with Linear Quantities

$s=r\theta$, $v=r\omega$, $a_t=r\alpha$, centripetal $a_c=\omega^2 r=v^2/r$.

## 3. AP Patterns

Convert rpm to rad/s; find $\alpha$ from $\omega(t)$ graph slope; point on disk rim vs center rotation.

## 4. Confusions

Mixing degrees and radians; using $v=\omega r$ with wrong $r$ (radius vs diameter).

## 5. Worked Sketch

$\omega$ increases linearly from 0 to $10\,\mathrm{rad/s}$ in $2\,\mathrm{s}$: $\alpha=5\,\mathrm{rad/s^2}$.

## 6. Graphs

Area under $\omega$–$t$ gives $\Delta\theta$; under $\alpha$–$t$ gives $\Delta\omega$.

## 7. Uniform Circular Motion

Constant $\omega$ implies $\alpha=0$ tangentially but $a_c\neq0$ toward center.

## 8. Integration

$\theta=\theta_0+\int\omega\,dt$ essential for rotating systems FRQ.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Calculus Used in Rotational Motion'): r"""## Related Knowledge Expansion

## 1. Angular Kinematics

$\omega=\frac{d\theta}{dt}$, $\alpha=\frac{d\omega}{dt}$. Integrate $\alpha$ for $\Delta\omega$.

## 2. Work and Power in Rotation

$dW=\tau\,d\theta$, power $P=\tau\omega$. Kinetic energy $K=\int \tau\,d\theta$ from rest gives $\tfrac12 I\omega^2$.

## 3. AP Patterns

Given $\alpha(\theta)$ or $\tau(\theta)$, integrate; relate variable $\omega$ to energy.

## 4. Confusions

Using linear kinematics formulas with degrees without radians in $\omega$ integrals.

## 5. Worked Sketch

Constant $\tau$ from rest: $\omega^2=2\tau\theta/I$.

## 6. Rolling Integration

Without slip constraint links translational and rotational differentials: $ds=R\,d\theta$.

## 7. Vector Calculus Preview

$\vec\tau=\vec r\times\vec F$ magnitude uses $\sin\theta$—connects to cross products.

## 8. Exam Strategy

Write $\sum\tau=I\alpha$ then separate variables or integrate once—show setup clearly on FRQ.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Center of Mass and Systems of Particles'): r"""## Related Knowledge Expansion

## 1. Center of Mass Definition

$\vec r_{\mathrm{cm}}=\frac{1}{M}\sum m_i\vec r_i$ or $\int \vec r\,dm/M$. Motion: $M\vec a_{\mathrm{cm}}=\vec F_{\mathrm{ext}}$.

## 2. Internal vs External Forces

Internal forces cancel in pairs for CM motion; only external forces change $\vec v_{\mathrm{cm}}$.

## 3. AP Patterns

Locate CM of rod with point masses; explosion kinematics using CM frame; rocket motion qualitatively.

## 4. Confusions

Treating CM as always midway geometrically; including internal forces in CM acceleration equation incorrectly.

## 5. Worked Sketch

Two masses $m$ at $x=\pm L/2$: $x_{\mathrm{cm}}=0$. If one mass doubles at $+L/2$, CM shifts right.

## 6. Continuous Bodies

Uniform rod CM at center; semicircle requires integration on C exam.

## 7. Energy Note

KE splits into CM translational and internal relative motion—advanced collision analysis.

## 8. Stability

Support under CM for static equilibrium problems.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Elliptical Orbits'): r"""## Related Knowledge Expansion

## 1. Geometry

Semi-major axis $a$, semi-minor $b$, eccentricity $e=\sqrt{1-b^2/a^2}$ (for Kepler ellipse). Foci separated by $2ae$.

## 2. Energies and Extremes

Total energy $E=-GMm/(2a)<0$ for bound orbit. $r_{\min}=a(1-e)$, $r_{\max}=a(1+e)$.

## 3. Speed Variation

Vis-viva equation $v^2=GM(2/r-1/a)$ relates speed to radius on ellipse.

## 4. AP Patterns

Compare speeds at two points; determine $a$ from perihelion/aphelion; energy required to change orbit.

## 5. Confusions

Using circular formulas at aphelion only; forgetting $a$ is average of $r_{\min}$ and $r_{\max}$.

## 6. Worked Sketch

Earth-like orbit with small $e$—speed nearly constant but second-law effects remain testable conceptually.

## 7. Transfer Orbits

Hohmann transfer qualitatively uses two half-ellipses—occasional AP extension.

## 8. Angular Momentum

$L=mrv_\perp$ constant fixes speed–radius tradeoff around ellipse.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Friction, Inclines, and Free-Body Diagrams'): r"""## Related Knowledge Expansion

## 1. Static vs Kinetic Friction

Static: $f_s\le \mu_s N$ with equality at impending slip. Kinetic: $f_k=\mu_k N$ opposite relative motion. Normal force depends on geometry, not always $mg$.

## 2. Inclined Planes

Components parallel/perpendicular to plane: $mg\sin\theta$ down plane, $mg\cos\theta$ into plane. Acceleration without friction $a=g\sin\theta$.

## 3. AP Patterns

Find $\mu$ from angle of repose; multi-block systems with tension; friction direction opposes relative motion tendency.

## 4. Confusions

Putting $\mu mg$ on wrong axis; assuming $f=\mu mg$ always; wrong friction direction on static problems.

## 5. Worked Sketch

Block on $30^\circ$ plane, $\mu_k=0.2$: $a=g(\sin\theta-\mu_k\cos\theta)\approx3.2\,\mathrm{m/s^2}$.

## 6. Systems

For connected masses, write $ \sum F=ma$ for each object with consistent sign for acceleration.

## 7. Circular Preview

Friction provides centripetal force on flat curves—links to uniform circular motion.

## 8. Calculus Cases

If $\mu$ or $N$ varies with position, integrate $F\,dx$ for work lost to friction.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Gravitational Field, Potential, and Escape Speed'): r"""## Related Knowledge Expansion

## 1. Newtonian Gravity

$F=Gm_1m_2/r^2$. Field $\vec g=\vec F/m=-GM\hat r/r^2$.

## 2. Gravitational Potential Energy

$U=-GMm/r$ with $U\to0$ at infinity. $\Delta U$ between radii gives energy needed to move masses.

## 3. Escape Speed

From radius $R$, $v_{\mathrm{esc}}=\sqrt{2GM/R}$ independent of mass of object escaping.

## 4. AP Patterns

Compute $g$ at altitude; energy to lift satellite; compare escape speeds on two planets.

## 5. Confusions

Using $U=mgh$ far from Earth surface; sign errors on $U$; thinking heavier objects need higher escape speed.

## 6. Worked Sketch

Double planet mass doubles $g$ at same $r$; escape speed scales as $\sqrt{M/R}$.

## 7. Orbits Link

Bound orbits have negative total energy; escape corresponds to $E\ge0$.

## 8. Shell Theorem Preview

Spherical mass acts as point mass at center for external points.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Kepler’s Third Law and Orbital Periods'): r"""## Related Knowledge Expansion

## 1. Third Law

For planets about the Sun (or satellites about a central body), $T^2\propto r^3$. For circular orbit radius $r$,
$$T^2=\frac{4\pi^2}{GM}r^3.$$

## 2. Derivation Sketch

Set gravitational centripetal $mv^2/r=GMm/r^2$ with $v=2\pi r/T$.

## 3. AP Patterns

Compare periods at two radii; find $M$ of central body from satellite data.

## 4. Confusions

Using altitude above surface without adding planet radius; applying to wrong central mass $M$.

## 5. Worked Sketch

If $r$ doubles, $T$ increases by factor $2^{3/2}\approx2.8$.

## 6. Elliptical Qualitative

Semi-major axis $a$ replaces $r$ in generalized third law for ellipses.

## 7. Units

Keep $T$ in seconds, $r$ in meters, $G=6.67\times10^{-11}$ for SI consistency.

## 8. Energy Connection

Total orbital energy $E=-GMm/(2a)$ for ellipse—links to escape/bound classification.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Linear Momentum, Impulse, and Collisions'): r"""## Related Knowledge Expansion

## 1. Momentum and Impulse

$\vec p=m\vec v$, $\vec J=\int \vec F\,dt=\Delta \vec p$. For constant force, $J=F\Delta t$.

## 2. Conservation

Isolated system: $\sum \vec p_i$ constant. Applies to explosions and collisions when external impulse negligible during short interaction.

## 3. Elastic vs Inelastic

Elastic: KE conserved. Inelastic: KE not conserved; perfectly inelastic sticks together. Coefficient of restitution $e$ relates relative speeds.

## 4. AP Patterns

1D collision algebra; explosion recoil; impulse from force–time graph area.

## 5. Confusions

Using momentum conservation when external impulse present; forgetting vector signs in 1D.

## 6. Worked Sketch

$2\,\mathrm{kg}$ at $3\,\mathrm{m/s}$ hits $1\,\mathrm{kg}$ at rest, stick: $v'=2\,\mathrm{m/s}$, KE drops—inelastic.

## 7. Center of Mass

System CM velocity unchanged if $\vec F_{\mathrm{ext}}=0$—links to systems unit.

## 8. 2D Glancing

Resolve along line of centers; AP may restrict to 1D for algebra.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Newton’s Laws with Variable Forces (Calculus)'): r"""## Related Knowledge Expansion

## 1. Second Law in Differential Form

$\vec F_{\mathrm{net}}=m\frac{d\vec v}{dt}$. For position-dependent forces, $m\frac{d^2x}{dt^2}=F(x,t)$—may require separation or numerical methods on AP, but linear restoring $F=-kx$ yields SHM.

## 2. Impulse as Integral

$\vec J=\int \vec F\,dt=\Delta \vec p$. Variable force problems integrate force over contact time.

## 3. AP Patterns

Set up $ma$ with given $F(t)$ or $F(x)$; use definite integrals for $\Delta v$; recognize SHM from linear restoring force.

## 4. Confusions

Treating non-constant force with constant-acceleration kinematics without integration.

## 5. Worked Sketch

$F(t)=kt$ for $0\le t\le T$ on mass $m$: $\Delta p=\int_0^T kt\,dt=\tfrac12 kT^2$.

## 6. Drag Qualitative

Linear drag $F=-bv$ leads to terminal velocity when $mg=bv_t$—common conceptual extension.

## 7. Free-Body First

Always draw FBD before writing differential equation—sign conventions matter in integrals.

## 8. Energy Alternative

When force is conservative, energy methods may avoid solving ODEs—compare approaches on FRQ.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Parallel-Axis Theorem'): r"""## Related Knowledge Expansion

## 1. Statement

If $I_{\mathrm{cm}}$ is moment of inertia about CM axis parallel to new axis separated by distance $d$,
$$I=I_{\mathrm{cm}}+Md^2.$$

## 2. Usage

Compute $I$ about pivot at edge of rod: $I_{\mathrm{cm}}=\tfrac1{12}ML^2$, $d=L/2$, so $I=\tfrac1{3}ML^2$.

## 3. AP Patterns

Shift axis for physical pendulum; composite objects; verify with integration when shape nonstandard.

## 4. Confusions

Using distance to geometric center when CM differs; adding $Md^2$ twice; axes not parallel.

## 5. Worked Sketch

Point mass $m$ at end of massless rod length $L$: $I_{\mathrm{cm}}$ about midpoint includes only rod if any; particle contributes $m(L/2)^2$ about CM plus $m(L/2)^2$ shift—or direct $mL^2$ about end.

## 6. Perpendicular-Axis Theorem

For planar objects: $I_z=I_x+I_y$ about CM—occasional AP C use for disks.

## 7. Composite Bodies

Sum $I$ of parts about same axis using theorem on each part's CM.

## 8. Energy Rotation

Correct $I$ essential for $\tfrac12 I\omega^2$ in rolling problems.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Power and Instantaneous Power'): r"""## Related Knowledge Expansion

## 1. Definition

Average power $\bar P=W/\Delta t$. Instantaneous $P=\frac{dW}{dt}=\vec F\cdot\vec v$.

## 2. Applications

Engines, elevators, pumps—same SI unit watt ($1\,\mathrm{W}=1\,\mathrm{J/s}$). Horsepower conversions occasionally appear.

## 3. AP Patterns

Find power to maintain constant velocity against drag; relate power to velocity for constant force.

## 4. Confusions

Using force alone without velocity dot product; confusing energy with power.

## 5. Worked Sketch

Car at constant $v=20\,\mathrm{m/s}$ against $F=1000\,\mathrm{N}$: $P=Fv=20\,\mathrm{kW}$.

## 6. Calculus

If $F(t)$ known, $W=\int Fv\,dt$ then average $\bar P=W/\Delta t$.

## 7. Rotational Analog

Rotational power $P=\tau\omega$—preview rotation connection.

## 8. Efficiency

Useful output over input power—qualitative efficiency problems on AP.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Projectile Motion'): r"""## Related Knowledge Expansion

## 1. Independence of Motion

With negligible air drag, horizontal and vertical motions decouple. $x(t)=x_0+v_{0x}t$, $y(t)=y_0+v_{0y}t-\tfrac12 gt^2$.

## 2. Range and Apex

Time to apex $t_h=v_{0y}/g$. Range on level ground $R=v_{0x}T$ with $T=2v_{0y}/g$. Optimal range at $45^\circ$ only for launch and landing at same height.

## 3. AP Patterns

Find time of flight, maximum height, range, or components given two conditions; launch from cliff adds vertical displacement at landing.

## 4. Confusions

Using $v_0$ instead of components; forgetting launch height in $y$ equation.

## 5. Worked Sketch

$v_0=20\,\mathrm{m/s}$ at $30^\circ$: $v_{0x}=17.3$, $v_{0y}=10$, $h_{\max}=v_{0y}^2/(2g)\approx5.1\,\mathrm{m}$.

## 6. Energy View

Mechanical energy conserved if only gravity does work—links to work–energy unit.

## 7. Vectors

At any instant $\vec v$ is tangent to path; $\vec a=\vec g$ downward throughout flight.

## 8. Calculus Extension

Parametric derivatives give speed $|\vec v|=\sqrt{v_x^2+v_y^2}$ and tangential acceleration components.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Simple Harmonic Motion and Oscillations'): r"""## Related Knowledge Expansion

## 1. SHM Condition

Restoring force linear in displacement: $F=-kx$ gives $a=-\omega^2 x$ with $\omega=\sqrt{k/m}$.

## 2. Solutions

$x(t)=A\cos(\omega t+\phi)$, $v_{\max}=A\omega$, $a_{\max}=A\omega^2$. Period $T=2\pi/\omega=2\pi\sqrt{m/k}$.

## 3. Energy in SHM

$E=\tfrac12 kA^2=\tfrac12 mv_{\max}^2$ swaps between $K$ and $U$.

## 4. AP Patterns

Find period of mass–spring; small-angle pendulum $T=2\pi\sqrt{L/g}$; graph interpretation.

## 5. Confusions

Using circular $\omega$ with wrong $T$; confusing amplitude with maximum velocity.

## 6. Worked Sketch

$m=0.5\,\mathrm{kg}$, $k=200\,\mathrm{N/m}$: $\omega=20\,\mathrm{rad/s}$, $T=0.31\,\mathrm{s}$.

## 7. Physical Pendulum

$T=2\pi\sqrt{I/(mgd)}$ for extended bodies—uses parallel-axis $I$.

## 8. Damping Qualitative

Real oscillations decay; AP may ask effect on frequency/amplitude qualitatively.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Torque, Moment of Inertia, and Rotational Dynamics'): r"""## Related Knowledge Expansion

## 1. Torque

$\vec\tau=\vec r\times\vec F$, magnitude $\tau=rF\sin\theta$. Rotational second law $\sum \tau=I\alpha$.

## 2. Moment of Inertia

$I=\sum m_i r_i^2$ or $\int r^2\,dm$. Depends on axis choice. Parallel-axis theorem: $I=I_{\mathrm{cm}}+Md^2$.

## 3. Rolling

Without slipping: $v=\omega R$, $a=\alpha R$. Energy $K=\tfrac12 Mv^2+\tfrac12 I\omega^2$.

## 4. AP Patterns

Find $\alpha$ with pivot; rolling down incline; tension in Atwood with pulley $I$.

## 5. Confusions

Wrong lever arm; using $mr^2$ for all bodies without table; mixing rolling and sliding friction roles.

## 6. Worked Sketch

Solid disk ($I=\tfrac12 MR^2$) rolls without slip from height $h$: $v=\sqrt{4gh/3}$.

## 7. Sign Conventions

Pick positive rotation direction and stick to it for $\tau$ and $\alpha$.

## 8. Static Equilibrium

$\sum F=0$ and $\sum \tau=0$ for rigid bodies—often combined FRQ.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Physics C: Mechanics', 'Work–Energy Theorem and Mechanical Energy'): r"""## Related Knowledge Expansion

## 1. Work Integral

$W=\int \vec F\cdot d\vec r$. For constant force along displacement, $W=Fd\cos\theta$. Work–energy: $W_{\mathrm{net}}=\Delta K$.

## 2. Potential Energy and Conservation

Conservative forces allow $E=K+U$ constant. Gravity near Earth $U=mgh$; spring $U=\tfrac12 kx^2$. Non-conservative work (friction) changes mechanical energy: $\Delta E=W_{\mathrm{nc}}$.

## 3. AP Patterns

Choose energy or Newton approach; find speed at position; minimum speed at top of loop using $K+U$.

## 4. Confusions

Double-counting work and $\Delta U$; using $U=mgh$ with inconsistent zero; sign of work by friction.

## 5. Worked Sketch

Block slides down height $h$ with friction $W_f=-\mu mg d$: $mgh+W_f=\tfrac12 mv^2$.

## 6. Power Link

$P=dW/dt=\vec F\cdot\vec v$ connects to power unit.

## 7. Curved Paths

Only force component along displacement contributes to work integral—perpendicular components do zero work.

## 8. Graphical

Area under $F$–$x$ equals work for 1D motion.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Psychology', 'Biological Bases of Behavior'): r"""## Related Knowledge Expansion

## 1. Neurons and Neural Communication

The nervous system uses neurons to transmit information. A resting potential near $-70\,\mathrm{mV}$ reflects selective permeability. An action potential is an all-or-none depolarization wave along the axon governed by voltage-gated channels. The refractory period limits firing rate. Synaptic transmission is chemical: neurotransmitters cross the synaptic cleft and bind receptors, producing excitatory or inhibitory postsynaptic potentials that summate.

## 2. Brain Structures and Functions

Key AP structures: brainstem (basic life support), cerebellum (coordination), limbic system (amygdala—emotion/fear; hippocampus—memory consolidation), thalamus (sensory relay), hypothalamus (homeostasis, drives), cerebral cortex (higher cognition). Hemispheric specialization and plasticity allow adaptation after injury, especially in youth.

## 3. Endocrine System

Hormones from glands (e.g., adrenal, thyroid, pituitary) circulate and affect mood, growth, stress response. Adrenaline/epinephrine links to fight-or-flight. Compare fast electrical neural signaling with slower, longer-lasting hormonal effects.

## 4. Genetics and Behavior

Behavior emerges from gene–environment interaction, not genes alone. Twin and adoption studies estimate heritability of traits. Epigenetics modifies expression without changing DNA sequence—environment can influence which genes are active.

## 5. Methods: EEG, fMRI, Lesion Studies

EEG measures electrical activity with high temporal resolution; fMRI tracks blood oxygenation with spatial maps; lesion and stimulation studies infer function from loss or activation. Each method has limits—correlation in imaging is not causation without experimental design.

## 6. AP Exam Patterns

Match structure to function; predict effect of neurotransmitter excess/deficit or agonist/antagonist drugs; interpret simple brain diagrams; connect biological mechanism to behavior example (stress, memory, emotion).

## 7. Common Confusions

Calling all neurotransmitters excitatory; locating memory solely in one spot; confusing brainstem with cerebellum roles; treating heritability as fate rather than population statistic.

## 8. Worked Application

Low serotonin linked to mood regulation debates—AP expects description of synaptic reuptake and SSRI mechanism at introductory level. Damage to hippocampus impairs new explicit memory formation while older memories may remain.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Psychology', 'Development and Learning'): r"""## Related Knowledge Expansion

## 1. Lifespan Development Frameworks

Development is lifelong and multidirectional. Nature and nurture interact. Piaget's stages (sensorimotor through formal operational) describe cognitive shifts; Vygotsky emphasizes social learning and the zone of proximal development with scaffolding. AP expects stage characteristics and limitations of rigid stage models.

## 2. Attachment and Social Development

Harlow's contact comfort and Ainsworth's strange situation classify secure vs insecure attachment patterns. Early attachment correlates with later social confidence but is not absolute destiny—context matters.

## 3. Classical Conditioning

Pavlov: neutral stimulus paired with UCS becomes CS eliciting CR. Acquisition, extinction, spontaneous recovery, generalization, discrimination. Apply to phobias and advertising cues.

## 4. Operant Conditioning

Skinner: consequences shape behavior. Reinforcement increases behavior (positive/negative); punishment decreases it. Schedules of reinforcement (fixed/variable ratio/interval) affect resistance to extinction—slot machines as variable ratio example.

## 5. Observational Learning and Cognition in Learning

Bandura's Bobo doll studies show learning by observation requires attention, retention, reproduction, motivation. Latent learning and cognitive maps (Tolman) show learning without immediate reinforcement.

## 6. AP Exam Patterns

Identify conditioning type in vignette; predict schedule effects; explain developmental stage error; connect attachment pattern to behavior; distinguish punishment from negative reinforcement.

## 7. Common Confusions

Negative reinforcement is not punishment—it removes aversive stimulus to increase behavior; confusing generalization with discrimination; over-applying Piaget ages as fixed.

## 8. Worked Application

Dog sits, gets treat: positive reinforcement. Parent stops nagging when teen cleans room: negative reinforcement of cleaning. Fine for speeding: punishment (positive punishment adds aversive consequence).

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Psychology', 'Mental and Physical Health'): r"""## Related Knowledge Expansion

## 1. Stress and Coping

General adaptation syndrome: alarm, resistance, exhaustion. Stressors trigger physiological arousal (HPA axis, cortisol). Problem-focused vs emotion-focused coping; hardiness and social support moderate impact.

## 2. Anxiety, Mood, and Trauma-Related Disorders

DSM-oriented AP descriptions: GAD (persistent worry), panic disorder, phobias, OCD (intrusive thoughts/compulsions), PTSD after trauma. Major depressive disorder vs persistent depressive disorder—duration and severity differ. Bipolar includes manic episodes.

## 3. Other Disorders Overview

Schizophrenia spectrum involves positive symptoms (hallucinations, delusions) and negative symptoms (flat affect, withdrawal). Dissociative and somatic symptom disorders appear at introductory level. Neurodevelopmental conditions (ADHD, autism spectrum) emphasize spectrum and support needs, not stereotypes.

## 4. Treatment Approaches

Psychotherapy: CBT targets maladaptive thoughts; humanistic emphasizes growth; psychodynamic explores unconscious conflicts. Biomedical: medications (SSRIs, antipsychotics at overview), ECT in severe cases. Eclectic and integrative care is common.

## 5. Biopsychosocial Model

Disorders arise from biological predisposition, psychological patterns, and social context. Diagnosis requires clinical judgment with standardized criteria; stigma reduction is an AP ethical theme.

## 6. AP Exam Patterns

Match disorder to symptom profile; distinguish therapy types; explain stress pathway; apply biopsychosocial analysis to case; avoid labeling individuals with disorder names casually.

## 7. Common Confusions

OCD vs OCPD colloquial mix-ups; schizophrenia vs DID popular culture errors; thinking medication alone always sufficient; using disorder terms as insults—AP expects respectful precision.

## 8. Worked Application

Student with persistent low mood, sleep change, anhedonia for two weeks—consider major depressive episode criteria and recommend professional evaluation plus CBT-oriented strategies in a hypothetical school context.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Psychology', 'Research Methods, Statistics, and Ethics'): r"""## Related Knowledge Expansion

## 1. Scientific Method in Psychology

Theories generate testable hypotheses. Operational definitions translate constructs into measurable variables. Replication and peer review strengthen confidence. Correlation does not imply causation—third variables and directionality problems require experiments or advanced designs.

## 2. Research Designs

Experiments manipulate IV to observe DV with random assignment. Correlational studies measure relationships without manipulation. Longitudinal, cross-sectional, and cross-sequential designs trade time, cost, and cohort effects. Case studies are rich but low generalizability.

## 3. Sampling and Bias

Random sampling supports population inference; convenience samples do not. Selection bias, volunteer bias, and experimenter bias threaten validity. Single-blind and double-blind procedures reduce expectancy effects.

## 4. Descriptive Statistics

Mean, median, mode, range, standard deviation summarize data. Normal distribution and z-scores describe relative standing. Positive/negative skew affects mean–median ordering.

## 5. Inferential Logic

Statistical significance ($p<.05$ convention) means results are unlikely if $H_0$ true—it does not measure effect size or practical importance. Type I error (false positive) and Type II error (false negative) trade off with sample size and alpha.

## 6. Ethics

IRB review, informed consent, debriefing, confidentiality, and minimization of harm (especially deception limits and animal care standards) govern research. APA ethical principles appear in scenario judgment questions.

## 7. AP Exam Patterns

Identify IV/DV; name confound; choose appropriate design; interpret correlation vs causation; compute/interpret mean, median, SD; evaluate ethical violation in vignette.

## 8. Common Confusions

Calling survey correlation an experiment; confusing random assignment with random sampling; thinking significant means large effect; ignoring debriefing after deception.

## 9. Worked Application

Study finds $r=0.6$ between screen time and anxiety in teens—describe correlation direction/strength, list possible third variable (sleep), and propose an experiment randomly limiting screen time in one group to test causation ethically with parental consent.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Psychology', 'Unit 2: Cognition'): r"""## Related Knowledge Expansion

## 1. Memory Systems

Sensory memory holds brief impressions; working memory actively processes limited items; long-term memory stores relatively permanently. Explicit (declarative) memory includes episodic and semantic; implicit includes procedural skills and priming. The Atkinson–Shiffrin and Baddeley models organize these ideas for AP.

## 2. Encoding, Storage, Retrieval

Encoding transforms experience into storable form (elaborative rehearsal, mnemonics). Storage maintains traces; retrieval accesses them. Encoding specificity and context-dependent memory show that cues at retrieval match encoding conditions. State-dependent memory links internal states.

## 3. Forgetting and Distortion

Decay, interference (proactive/retroactive), and retrieval failure explain forgetting. Reconstructive memory and misinformation effect show memories are malleable—eyewitness testimony concerns on AP. Serial position effect: primacy and recency on lists.

## 4. Thinking, Problem Solving, and Creativity

Algorithms guarantee solutions but may be slow; heuristics are fast but bias-prone (availability, representativeness, anchoring). Confirmation bias favors belief-consistent evidence. Functional fixedness and mental set block novel solutions.

## 5. Language and Cognition

Language has phonemes, morphemes, grammar. Broca's area supports production; Wernicke's area supports comprehension. Linguistic relativity (weak form) suggests language may influence thought categories—debated but testable at AP level.

## 6. AP Exam Patterns

Design or critique memory experiments; identify heuristic in scenario; predict interference effects; connect brain area to language deficit type (Broca vs Wernicke symptoms).

## 7. Common Confusions

Equating short-term and working memory without nuance; saying memories are recorded like video; confusing retroactive and proactive interference labels.

## 8. Worked Application

Studying in the same room as the test leverages context-dependent retrieval. After learning Spanish then French, retroactive interference may hinder Spanish recall—define both languages and order in your answer.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Statistics', 'Chi-Square Goodness of Fit'): r"""## Related Knowledge Expansion

## 1. Purpose and Hypotheses

Goodness-of-fit tests whether observed categorical counts match a claimed distribution. $H_0$: specified population proportions $p_1,\ldots,p_k$. $H_a$: at least one proportion differs.

## 2. Expected Counts and Test Statistic

With sample size $n$ and claimed proportions,
$$E_i=np_i,\quad \chi^2=\sum\frac{(O_i-E_i)^2}{E_i}.$$
Large $\chi^2$ suggests poor fit. Conditions: random sample, all $E_i\ge 5$ (or at most 20% below 5 with none below 1).

## 3. Degrees of Freedom and P-Value

$$df=k-1$$
for $k$ categories after estimating no parameters from data except possibly fixed $n$. Compare test statistic to $\chi^2$ distribution upper tail; small $p$ rejects $H_0$.

## 4. AP Exam Patterns

Compute expected counts; carry $\chi^2$; interpret conclusion in context; check conditions; distinguish GOF from homogeneity/independence (other $\chi^2$ tests).

## 5. Common Confusions

Using $df=k$; wrong expected count formula; concluding which category "caused" rejection without follow-up; applying when counts are not random sample counts.

## 6. Worked Sketch

$k=4$, $n=200$, claimed $(0.25,0.25,0.30,0.20)$ gives $E=(50,50,60,40)$. If $O=(45,55,70,30)$, compute components $(O-E)^2/E$ and sum. $df=3$.

## 7. Follow-Up Analysis

Large $\chi^2$ alone does not identify which cells differ most; compare standardized residuals $(O-E)/\sqrt{E}$ qualitatively when asked.

## 8. Link to Randomness

Genetics, Mendelian ratios, and customer preference surveys are classic contexts. Always tie $p_i$ to $H_0$ stated in problem.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Statistics', 'Data Collection, Sampling, and Experiments'): r"""## Related Knowledge Expansion

## 1. Population, Sample, and Bias

A population is the entire group of interest; a sample is the observed subset. Bias is systematic error favoring certain outcomes. Convenience samples, voluntary response, and undercoverage bias invalidate generalization even with large $n$.

## 2. Random Sampling Methods

Simple random sample (SRS): every subset of size $n$ equally likely. Stratified random sample: divide into strata, SRS within each, combine. Cluster sample: randomly choose clusters, census within chosen clusters. Systematic sample: choose every $k$th item from a randomized list. Each method addresses different logistics and variance goals.

## 3. Experimental Design Principles

Control, random assignment, replication, and blocking reduce confounding. Treatments are imposed; response is measured. Placebo and blinding reduce placebo and experimenter effects when feasible.

## 4. Observational vs Experimental

Observational studies can show association, not causation, because lurking variables may explain relationships. Only well-designed experiments with random assignment support causal claims, and even then scope is limited to the experimental units and setting.

## 5. AP Exam Patterns

Identify bias type; choose best sampling method; explain why random assignment supports causation; critique study wording ("prove," "cause," "representative").

## 6. Common Confusions

Thinking larger convenience samples fix bias; confusing stratified with cluster; claiming causation from surveys; ignoring nonresponse bias.

## 7. Worked Sketch

School surveys via first-period classes: undercoverage of late arrivers. Better: stratify by grade, SRS within grade. To test tutoring, randomly assign students to tutoring vs control, block by prior GPA.

## 8. Scope of Inference

State who/what conclusions apply to (population) and what claim type (association vs causation). AP rubrics reward explicit scope sentences.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Statistics', 'Exploring One-Variable Data'): r"""## Related Knowledge Expansion

## 1. Distributions and Shape

One-variable data describe a single quantitative or categorical attribute. For quantitative data, describe shape (symmetric, skewed left/right, uniform, bimodal), center, spread, and unusual features (outliers, gaps, clusters). The five-number summary ($\min$, $Q_1$, median, $Q_3$, $\max$) supports boxplots. Mean $\bar x$ and standard deviation $s$ summarize center and spread but are sensitive to outliers; median and IQR are resistant.

## 2. Measures of Center and Spread

Sample mean $\bar x=\frac{1}{n}\sum x_i$. Sample variance
$$s^2=\frac{1}{n-1}\sum(x_i-\bar x)^2,\quad s=\sqrt{s^2}.$$
IQR $=Q_3-Q_1$. Outlier rule (1.5 IQR): values below $Q_1-1.5\,\mathrm{IQR}$ or above $Q_3+1.5\,\mathrm{IQR}$ are flagged for investigation, not auto-deleted.

## 3. Histograms, Dotplots, and Density

Bin width choice affects histogram appearance—AP expects you to note when different binning could change impressions. Density curves have area 1; normal curves are symmetric bell shapes parameterized by $\mu$ and $\sigma$.

## 4. Normal Model and z-Scores

Standardize with
$$z=\frac{x-\mu}{\sigma}.$$
Use normal probabilities (tables or technology) for relative standing. Empirical rule: about 68% within $1\sigma$, 95% within $2\sigma$, 99.7% within $3\sigma$ for normal data.

## 5. Transformations

Adding a constant shifts center but not spread; multiplying by a positive constant scales both center and spread. $z$-scores are unitless and compare across scales.

## 6. AP Exam Patterns

Compare two distributions with context; interpret $s$ vs IQR; compute/compare percentiles; decide whether mean or median is appropriate; read boxplots for skew and outliers.

## 7. Common Confusions

Confusing parameter ($\mu,\sigma$) with statistic ($\bar x,s$); using mean with strong skew; treating outliers as errors without context; misreading boxplot whiskers vs fences.

## 8. Worked Sketch

Skewed-right income data: median < mean; report median and IQR. A student at $z=1.5$ is 1.5 SD above class mean on a roughly symmetric test—about 93rd percentile if normal.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.
""",
    ('AP Statistics', 'Geometric Distribution'): r"""## Related Knowledge Expansion

## 1. Setting and Conditions

A geometric random variable $X$ counts the number of trials until the first success in independent Bernoulli trials with constant success probability $p$. Notation $X\sim\mathrm{Geom}(p)$. Memoryless property: past failures do not change future success probability.

## 2. Probability Mass Function

$$P(X=k)=(1-p)^{k-1}p,\quad k=1,2,3,\ldots$$
Also $P(X>k)=(1-p)^k$ (at least $k$ failures before first success). These differ from binomial counts of successes in fixed $n$.

## 3. Mean and Standard Deviation

$$\mu=\frac{1}{p},\quad \sigma=\sqrt{\frac{1-p}{p^2}}.$$
Higher $p$ means fewer trials expected on average.

## 4. AP Exam Patterns

Compute $P(X=k)$, $P(X>k)$, or expected trials; recognize geometric vs binomial setting; interpret context (quality control, free throws until first make).

## 5. Common Confusions

Using binomial $ \binom{n}{k}p^k(1-p)^{n-k}$; starting $k$ at 0; forgetting independence; confusing "until first success" with "number of successes in $n$ trials."

## 6. Worked Sketch

Free-throw $p=0.75$: $P(X=3)=0.25^2\cdot0.75=0.0469$. Expected attempts $\mu=1/0.75=1.33$. $P(X>2)=0.25^2=0.0625$.

## 7. Technology and Tables

Use calculator geometpdf/geometcdf with correct $p$ and $k$. On FRQ, show formula and substitution once, then interpret in context.

## 8. Link to Binomial

If $n$ is fixed, use binomial. If waiting time to first success with unbounded trials, use geometric. Many AP stems include cue words "until the first" or "how many attempts."

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Statistics', 'Inference for Categorical Data — Proportions'): r"""## Related Knowledge Expansion

## 1. One-Sample z-Interval for p

For sample proportion $\hat p=x/n$ with SRS and $n\hat p,n(1-\hat p)\ge 10$,
$$\hat p\pm z^*\sqrt{\frac{\hat p(1-\hat p)}{n}}.$$
Interpret: we are C% confident the true population proportion lies in the interval.

## 2. One-Sample z-Test

$$H_0:p=p_0,\quad z=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}.$$
Use $p_0$ in SE under $H_0$. Two-sided $p$-value from normal tail areas.

## 3. Two-Proportion Inference

Difference $\hat p_1-\hat p_2$ with pooled $\hat p$ for tests:
$$\hat p=\frac{x_1+x_2}{n_1+n_2},\quad SE=\sqrt{\hat p(1-\hat p)\left(\frac{1}{n_1}+\frac{1}{n_2}\right)}.$$
Independence between samples required unless paired design (then use different methods).

## 4. Conditions and Errors

Randomness, independence (10% condition if sampling without replacement from large populations), and large counts. Type I/II errors and power appear qualitatively.

## 5. AP Exam Patterns

Construct/interpret CI; perform hypothesis test with stated $\alpha$; compare two groups; explain meaning of $p$-value and confidence level in context—not generic definitions alone.

## 6. Common Confusions

Using $\hat p$ in test SE instead of $p_0$ for one-sample test; claiming probability the parameter is in a specific interval; ignoring independent samples assumption.

## 7. Worked Sketch

$n=400$, $x=100$, 95% CI: $\hat p=0.25$, MOE $=1.96\sqrt{0.25\cdot0.75/400}\approx0.042$. Test $H_0:p=0.20$ gives $z\approx2.31$.

## 8. Scope Language

Conclusions reference population proportion for the defined group, not individuals. Causation requires experiment, not these z procedures alone.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Statistics', 'Inference for Quantitative Data — Means'): r"""## Related Knowledge Expansion

## 1. One-Sample t-Interval

With SRS and approximately normal population or large $n$,
$$\bar x\pm t^*\frac{s}{\sqrt{n}},\quad df=n-1.$$
Use $t$ because $\sigma$ is unknown and $s$ estimates spread.

## 2. One-Sample t-Test

$$t=\frac{\bar x-\mu_0}{s/\sqrt{n}},\quad df=n-1.$$
Check normality via plot or large $n$; watch for strong skew/outliers with small $n$.

## 3. Two-Sample t Procedures

Independent samples: difference $\bar x_1-\bar x_2$ with
$$SE=\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}.$$
Welch $t$ uses approximate $df$ from calculator. Paired data: analyze differences with one-sample $t$ on $d_i$.

## 4. Conditions

Random, independent (or paired), and normal/large $n$. For two samples, similar spread not required for Welch but required for pooled two-sample $t$ when $\sigma_1^2=\sigma_2^2$ assumed.

## 5. AP Exam Patterns

Choose paired vs two-sample; interpret CI for difference; carry out test with $\alpha$; explain practical vs statistical significance.

## 6. Common Confusions

Using $z$ instead of $t$ with unknown $\sigma$; pooling when variances differ; analyzing paired data as independent; forgetting $df$.

## 7. Worked Sketch

Paired differences mean $\bar d=2.1$, $s_d=4.0$, $n=25$: $t=2.1/(4/\sqrt{25})=2.625$, $df=24$. Two independent groups with Welch on technology—state $H_0:\mu_1=\mu_2$.

## 8. Robustness

$t$ procedures are fairly robust to mild non-normality with moderate $n$. Strong skew or outliers with small $n$ invalidate normal-based inference—say so on FRQ.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Statistics', 'Probability, Random Variables, and Probability Distributions'): r"""## Related Knowledge Expansion

## 1. Probability Rules

For events $A,B$: $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. If independent, $P(A\cap B)=P(A)P(B)$. Conditional probability
$$P(A|B)=\frac{P(A\cap B)}{P(B)}.$$
Tree diagrams and two-way tables organize multi-step problems.

## 2. Discrete Random Variables

A discrete random variable $X$ has possible values $x_i$ with probabilities $p_i$ where $\sum p_i=1$. Mean (expected value)
$$\mu_X=\sum x_i p_i.$$
Variance
$$\sigma_X^2=\sum (x_i-\mu_X)^2 p_i=\sum x_i^2 p_i-\mu_X^2.$$

## 3. Linear Transformations

If $Y=a+bX$, then $\mu_Y=a+b\mu_X$ and $\sigma_Y=|b|\sigma_X$ (addition does not change spread).

## 4. Binomial Setting

Fixed $n$ independent trials, two outcomes, constant $p$. $X\sim\mathrm{Bin}(n,p)$:
$$P(X=k)=\binom{n}{k}p^k(1-p)^{n-k},\quad \mu=np,\quad \sigma=\sqrt{np(1-p)}.$$

## 5. Normal Approximation

When $np$ and $n(1-p)$ are both at least 10, binomial probabilities can be approximated by normal with continuity correction when needed.

## 6. AP Exam Patterns

Compute conditional probabilities; expected value of a game; binomial probabilities; combine random variables (sum of independent normals is normal; means add, variances add if independent).

## 7. Common Confusions

Treating dependent events as independent; using binomial without fixed $n$; forgetting $|b|$ in variance scaling; confusing $\mu$ with observed sample mean.

## 8. Worked Sketch

Two fair dice sum $S$: $P(S=7)=6/36=1/6$. Binomial $n=10,p=0.3$: $\mu=3$, $\sigma\approx1.45$, $P(X\ge4)$ via complement or technology.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
    ('AP Statistics', 'Regression Analysis'): r"""## Related Knowledge Expansion

## 1. Least-Squares Regression Line

For paired $(x,y)$, the LSRL $\hat y=a+bx$ minimizes sum of squared residuals. Slope
$$b=r\frac{s_y}{s_x},\quad a=\bar y-b\bar x.$$
Residual $=y-\hat y$. Always plot data first.

## 2. Interpretation in Context

Slope: predicted change in response per one-unit increase in explanatory variable. Intercept meaningful only if $x=0$ is in scope. $r$ measures direction/strength of linear association, not causation.

## 3. Coefficient of Determination

$$r^2$$
is fraction of variation in $y$ explained by linear model with $x$. High $r^2$ does not prove causation or linearity everywhere.

## 4. Inference for Slope

Test $H_0:\beta=0$ using
$$t=\frac{b-0}{SE_b},\quad df=n-2.$$
Conditions: linearity, independent observations, roughly normal residuals with constant spread (check residual plot).

## 5. Predictions and Extrapolation

Interpolation within data $x$ range is safer than extrapolation beyond observed $x$. Influential points strongly affect $b$ and $r$—investigate with and without them when asked.

## 6. AP Exam Patterns

Interpret $b$, $r$, $r^2$; compute/predict $\hat y$; interpret residual; perform $t$ test on slope; read computer output (coefficients, $SE$, $p$-value).

## 7. Common Confusions

Switching $x$ and $y$ roles; interpreting $r^2$ as correlation; claiming causation from regression; using model outside data range without caution.

## 8. Worked Sketch

If $b=1.8$ kg per cm height, predict +1.8 kg for +1 cm. Residual +3 means observed 3 kg above prediction. $r=0.85$ implies $r^2=0.72$ variation explained.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.

## Closing AP Study Checklist

Confirm you can state the governing relationship in symbols, list the assumptions
that make it valid, predict a limiting case, and connect the result to a verbal AP
claim such as increases, decreases, or remains the same. Name one common trap that
produces a wrong answer choice. Practice one multiple-choice item and one free-response
justification for the same relationship so calculation fluency and written reasoning
develop together. When reviewing mistakes, rewrite the correct argument in three
sentences: given, relation, conclusion. Keep units explicit on every intermediate line.
Link this topic to neighboring CED ideas so transfer questions feel familiar rather
than novel. Annotate one textbook figure or lab graph until slope, intercept, and
controlled variables are all named in AP vocabulary.

## Experimental and Graphical Habits

Identify independent and dependent variables, controlled quantities, and the meaning
of slope or intercept on any associated graph. Translate a prose scenario into a
labeled diagram, then into equations, then into a numerical or qualitative prediction.
This three-layer habit mirrors how AP Physics and AP Statistics free-response items
are scored. If data tables appear, estimate uncertainty qualitatively and refuse to
over-claim precision. Check that fitted models remain within the domain where
assumptions hold.
""",
}
