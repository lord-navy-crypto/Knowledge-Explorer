"""
Wave 4 Exam Application Labs for STEM and economics subjects.
Maps (subject, title) -> markdown starting with ## Exam Application Lab.
Titles use exact strings from data/managed-content.json.
"""

WAVE4_STEM_EXAM = {
    ('AP Calculus AB/BC', 'Definition and Fundamental Properties of Derivatives'): r"""## Exam Application Lab

Focus topic: **Definition and Fundamental Properties of Derivatives** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Definition and Fundamental Properties of Derivatives** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Definition and Fundamental Properties of Derivatives** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Definition and Fundamental Properties of Derivatives** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Definition and Fundamental Properties of Derivatives** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Integration and Accumulation of Change'): r"""## Exam Application Lab

Focus topic: **Integration and Accumulation of Change** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Integration and Accumulation of Change** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Integration and Accumulation of Change** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Integration and Accumulation of Change** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Integration and Accumulation of Change** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science A', 'Selection and Iteration'): r"""## Exam Application Lab

Focus topic: **Selection and Iteration** (AP Computer Science A).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Selection and Iteration** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Selection and Iteration** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Array traversal: index $0 \le i < \texttt{a.length}$.
- Nested loop visit counts: outer $\times$ inner iterations for typical bounds.
- String methods: immutability; substring, indexOf, compareTo semantics.
- ArrayList: size() vs capacity; add, remove, indexed access.
- Recursion: base case + progress toward base; call-stack depth.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Java tracing, object behavior, and algorithm correctness.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- References vs primitives: assignment copies reference for objects.
- No null dereference unless the prompt tests error awareness.
- Integer overflow not tested unless explicitly in scope.
- Standard AP Java subset—no advanced libraries beyond the reference sheet.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Selection and Iteration** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The loop executes while i < arr.length, so the final value of i is arr.length.
- toUpperCase returns a new String; the original reference is unchanged unless reassigned.
- The method returns the accumulated sum because the base case returns 0 and each call adds the next term.
- The ArrayList size decreases by 1 after remove(0).

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Selection and Iteration** to neighboring ideas on the same exam.

- Selection/iteration ↔ array and ArrayList traversals.
- Class design ↔ encapsulation and method contracts.
- Algorithms ↔ counting operations and informal Big-O comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Java tracing, object behavior, and algorithm correctness but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science A', 'Data Collections'): r"""## Exam Application Lab

Focus topic: **Data Collections** (AP Computer Science A).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Data Collections** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Data Collections** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Array traversal: index $0 \le i < \texttt{a.length}$.
- Nested loop visit counts: outer $\times$ inner iterations for typical bounds.
- String methods: immutability; substring, indexOf, compareTo semantics.
- ArrayList: size() vs capacity; add, remove, indexed access.
- Recursion: base case + progress toward base; call-stack depth.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Java tracing, object behavior, and algorithm correctness.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- References vs primitives: assignment copies reference for objects.
- No null dereference unless the prompt tests error awareness.
- Integer overflow not tested unless explicitly in scope.
- Standard AP Java subset—no advanced libraries beyond the reference sheet.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Data Collections** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The loop executes while i < arr.length, so the final value of i is arr.length.
- toUpperCase returns a new String; the original reference is unchanged unless reassigned.
- The method returns the accumulated sum because the base case returns 0 and each call adds the next term.
- The ArrayList size decreases by 1 after remove(0).

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Data Collections** to neighboring ideas on the same exam.

- Selection/iteration ↔ array and ArrayList traversals.
- Class design ↔ encapsulation and method contracts.
- Algorithms ↔ counting operations and informal Big-O comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Java tracing, object behavior, and algorithm correctness but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Limits and Continuity'): r"""## Exam Application Lab

Focus topic: **Limits and Continuity** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Limits and Continuity** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Limits and Continuity** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Limits and Continuity** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Limits and Continuity** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Contextual Applications of Differentiation'): r"""## Exam Application Lab

Focus topic: **Contextual Applications of Differentiation** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Contextual Applications of Differentiation** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Contextual Applications of Differentiation** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Contextual Applications of Differentiation** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Contextual Applications of Differentiation** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Unit 3: Composite, Implicit, and Inverse Functions'): r"""## Exam Application Lab

Focus topic: **Unit 3: Composite, Implicit, and Inverse Functions** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 3: Composite, Implicit, and Inverse Functions** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 3: Composite, Implicit, and Inverse Functions** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 3: Composite, Implicit, and Inverse Functions** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 3: Composite, Implicit, and Inverse Functions** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Unit 2: Differentiation—Definition and Fundamental Properties'): r"""## Exam Application Lab

Focus topic: **Unit 2: Differentiation—Definition and Fundamental Properties** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 2: Differentiation—Definition and Fundamental Properties** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 2: Differentiation—Definition and Fundamental Properties** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 2: Differentiation—Definition and Fundamental Properties** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 2: Differentiation—Definition and Fundamental Properties** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Infinite Sequences and Series'): r"""## Exam Application Lab

Focus topic: **Infinite Sequences and Series** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Infinite Sequences and Series** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Infinite Sequences and Series** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Infinite Sequences and Series** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Infinite Sequences and Series** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Applications of Integration'): r"""## Exam Application Lab

Focus topic: **Applications of Integration** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Applications of Integration** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Applications of Integration** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Applications of Integration** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Applications of Integration** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Parametric Equations, Polar Coordinates, and Vector-Valued Functions'): r"""## Exam Application Lab

Focus topic: **Parametric Equations, Polar Coordinates, and Vector-Valued Functions** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Parametric Equations, Polar Coordinates, and Vector-Valued Functions** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Parametric Equations, Polar Coordinates, and Vector-Valued Functions** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Parametric Equations, Polar Coordinates, and Vector-Valued Functions** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Parametric Equations, Polar Coordinates, and Vector-Valued Functions** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Analytical Applications of Differentiation'): r"""## Exam Application Lab

Focus topic: **Analytical Applications of Differentiation** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Analytical Applications of Differentiation** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Analytical Applications of Differentiation** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Analytical Applications of Differentiation** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Analytical Applications of Differentiation** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Statistics', 'Probability, Random Variables, and Probability Distributions'): r"""## Exam Application Lab

Focus topic: **Probability, Random Variables, and Probability Distributions** (AP Statistics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Probability, Random Variables, and Probability Distributions** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Probability, Random Variables, and Probability Distributions** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- One-variable summaries: mean, SD, quartiles, z-scores $z=\dfrac{x-\mu}{\sigma}$.
- Regression: least-squares line, $r$, $r^2$, residual $=$ observed $-$ predicted.
- Binomial: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$; mean $\mu=np$, SD $\sigma=\sqrt{np(1-p)}$.
- Normal models and CLT when conditions support them.
- Inference: $z$ and $t$ statistics; CI = estimate $\pm$ critical $\times$ SE.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ for GOF, homogeneity, independence.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to data production, probability models, and inference with conditions.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random sample or random assignment as stated in the prompt.
- Independence (10% rule or replacement) for sampling without replacement.
- Large counts / Normal condition / expected counts for the chosen procedure.
- Linear relationship for inference on slope when using regression tools.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Probability, Random Variables, and Probability Distributions** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- We use a one-sample $t$ interval because $\sigma$ is unknown and the random sample condition is met.
- Because the $P$-value is less than $\alpha$, we reject $H_0$ and conclude in context.
- The interval does not contain the hypothesized value, consistent with rejecting $H_0$ at this level.
- Expected counts are all at least 5, so the chi-square procedure is appropriate.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Probability, Random Variables, and Probability Distributions** to neighboring ideas on the same exam.

- Sampling design ↔ scope of inference (population vs causal).
- Probability models ↔ inference formulas (same parameter, different stage).
- Regression residuals ↔ checking linearity before inference on slope.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require data production, probability models, and inference with conditions but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Statistics', 'Inference for Categorical Data — Proportions'): r"""## Exam Application Lab

Focus topic: **Inference for Categorical Data — Proportions** (AP Statistics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Inference for Categorical Data — Proportions** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Inference for Categorical Data — Proportions** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- One-variable summaries: mean, SD, quartiles, z-scores $z=\dfrac{x-\mu}{\sigma}$.
- Regression: least-squares line, $r$, $r^2$, residual $=$ observed $-$ predicted.
- Binomial: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$; mean $\mu=np$, SD $\sigma=\sqrt{np(1-p)}$.
- Normal models and CLT when conditions support them.
- Inference: $z$ and $t$ statistics; CI = estimate $\pm$ critical $\times$ SE.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ for GOF, homogeneity, independence.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to data production, probability models, and inference with conditions.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random sample or random assignment as stated in the prompt.
- Independence (10% rule or replacement) for sampling without replacement.
- Large counts / Normal condition / expected counts for the chosen procedure.
- Linear relationship for inference on slope when using regression tools.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Inference for Categorical Data — Proportions** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- We use a one-sample $t$ interval because $\sigma$ is unknown and the random sample condition is met.
- Because the $P$-value is less than $\alpha$, we reject $H_0$ and conclude in context.
- The interval does not contain the hypothesized value, consistent with rejecting $H_0$ at this level.
- Expected counts are all at least 5, so the chi-square procedure is appropriate.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Inference for Categorical Data — Proportions** to neighboring ideas on the same exam.

- Sampling design ↔ scope of inference (population vs causal).
- Probability models ↔ inference formulas (same parameter, different stage).
- Regression residuals ↔ checking linearity before inference on slope.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require data production, probability models, and inference with conditions but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Statistics', 'Inference for Quantitative Data — Means'): r"""## Exam Application Lab

Focus topic: **Inference for Quantitative Data — Means** (AP Statistics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Inference for Quantitative Data — Means** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Inference for Quantitative Data — Means** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- One-variable summaries: mean, SD, quartiles, z-scores $z=\dfrac{x-\mu}{\sigma}$.
- Regression: least-squares line, $r$, $r^2$, residual $=$ observed $-$ predicted.
- Binomial: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$; mean $\mu=np$, SD $\sigma=\sqrt{np(1-p)}$.
- Normal models and CLT when conditions support them.
- Inference: $z$ and $t$ statistics; CI = estimate $\pm$ critical $\times$ SE.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ for GOF, homogeneity, independence.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to data production, probability models, and inference with conditions.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random sample or random assignment as stated in the prompt.
- Independence (10% rule or replacement) for sampling without replacement.
- Large counts / Normal condition / expected counts for the chosen procedure.
- Linear relationship for inference on slope when using regression tools.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Inference for Quantitative Data — Means** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- We use a one-sample $t$ interval because $\sigma$ is unknown and the random sample condition is met.
- Because the $P$-value is less than $\alpha$, we reject $H_0$ and conclude in context.
- The interval does not contain the hypothesized value, consistent with rejecting $H_0$ at this level.
- Expected counts are all at least 5, so the chi-square procedure is appropriate.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Inference for Quantitative Data — Means** to neighboring ideas on the same exam.

- Sampling design ↔ scope of inference (population vs causal).
- Probability models ↔ inference formulas (same parameter, different stage).
- Regression residuals ↔ checking linearity before inference on slope.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require data production, probability models, and inference with conditions but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Statistics', 'Regression Analysis'): r"""## Exam Application Lab

Focus topic: **Regression Analysis** (AP Statistics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Regression Analysis** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Regression Analysis** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- One-variable summaries: mean, SD, quartiles, z-scores $z=\dfrac{x-\mu}{\sigma}$.
- Regression: least-squares line, $r$, $r^2$, residual $=$ observed $-$ predicted.
- Binomial: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$; mean $\mu=np$, SD $\sigma=\sqrt{np(1-p)}$.
- Normal models and CLT when conditions support them.
- Inference: $z$ and $t$ statistics; CI = estimate $\pm$ critical $\times$ SE.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ for GOF, homogeneity, independence.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to data production, probability models, and inference with conditions.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random sample or random assignment as stated in the prompt.
- Independence (10% rule or replacement) for sampling without replacement.
- Large counts / Normal condition / expected counts for the chosen procedure.
- Linear relationship for inference on slope when using regression tools.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Regression Analysis** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- We use a one-sample $t$ interval because $\sigma$ is unknown and the random sample condition is met.
- Because the $P$-value is less than $\alpha$, we reject $H_0$ and conclude in context.
- The interval does not contain the hypothesized value, consistent with rejecting $H_0$ at this level.
- Expected counts are all at least 5, so the chi-square procedure is appropriate.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Regression Analysis** to neighboring ideas on the same exam.

- Sampling design ↔ scope of inference (population vs causal).
- Probability models ↔ inference formulas (same parameter, different stage).
- Regression residuals ↔ checking linearity before inference on slope.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require data production, probability models, and inference with conditions but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Microeconomics', 'Basic Concepts, Supply and Demand, and Perfect Competition'): r"""## Exam Application Lab

Focus topic: **Basic Concepts, Supply and Demand, and Perfect Competition** (AP Microeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Basic Concepts, Supply and Demand, and Perfect Competition** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Basic Concepts, Supply and Demand, and Perfect Competition** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Elasticity: $E_d=|\%\Delta Q/\%\Delta P|$; midpoint formula when two points given.
- Surplus: CS and PS as areas; DWL from taxes, price floors/ceilings, monopoly.
- Production: marginal product, marginal cost, profit max $MR=MC$.
- Perfect competition vs monopoly: $P=MR$ vs $MR<P$; deadweight loss shapes.
- Factor markets: $MRP=MFC$ hiring rule.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to marginal analysis, market equilibrium, and efficiency.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Rational agents compare marginal benefit and marginal cost at the margin.
- Competitive markets: price takers unless labeled imperfect competition.
- No externalities unless the unit is market failure.
- Short-run vs long-run supply distinguished when plant capacity is fixed.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Basic Concepts, Supply and Demand, and Perfect Competition** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because demand is inelastic, the price increase raises total revenue.
- The tax creates deadweight loss because mutually beneficial trades no longer occur at $Q_E$.
- The firm hires labor until $MRP=MFC$ to maximize profit.
- A negative externality causes market quantity to exceed the socially efficient quantity.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Basic Concepts, Supply and Demand, and Perfect Competition** to neighboring ideas on the same exam.

- Supply/demand ↔ elasticity and incidence on policy graphs.
- Perfect competition ↔ efficiency and consumer/producer surplus.
- Imperfect competition ↔ price, output, and DWL comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require marginal analysis, market equilibrium, and efficiency but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Macroeconomics', 'Unit 4: Financial Sector'): r"""## Exam Application Lab

Focus topic: **Unit 4: Financial Sector** (AP Macroeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 4: Financial Sector** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 4: Financial Sector** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- GDP components: $Y=C+I+G+X_n$; real vs nominal with GDP deflator.
- Unemployment: labor force participation; types (frictional, structural, cyclical).
- Multipliers: $k=1/(1-\text{MPC})$; tax multiplier $-\text{MPC}/\text{MPS}$.
- Money market: demand/supply of money and interest rate; $MV=PY$ identity.
- Phillips curve tradeoffs short run vs long run at $Y_f$.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to national income, price level, money, and policy in AD–AS and financial markets.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Short-run sticky wages/prices unless the prompt specifies long-run Classical adjustment.
- Ceteris paribus when shifting one curve at a time on AD–AS.
- Banking multiplier models assume required reserve ratio and no currency drain unless stated.
- Open-economy problems name exchange-rate regime (flexible vs fixed) when relevant.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 4: Financial Sector** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Expansionary fiscal policy shifts AD right, increasing real GDP and price level in the short run.
- An increase in the money supply lowers the nominal interest rate, increasing investment and AD.
- In the long run, the economy returns to $Y_f$ as nominal wages adjust.
- Crowding out partially offsets fiscal stimulus when higher $r$ reduces investment.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 4: Financial Sector** to neighboring ideas on the same exam.

- Business cycle indicators ↔ AD shocks and policy responses.
- Financial sector ↔ money creation and interest-sensitive $I$.
- Open economy ↔ net exports and capital flows on AD.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require national income, price level, money, and policy in AD–AS and financial markets but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Macroeconomics', 'Long-Run Consequences of Stabilization Policies'): r"""## Exam Application Lab

Focus topic: **Long-Run Consequences of Stabilization Policies** (AP Macroeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Long-Run Consequences of Stabilization Policies** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Long-Run Consequences of Stabilization Policies** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- GDP components: $Y=C+I+G+X_n$; real vs nominal with GDP deflator.
- Unemployment: labor force participation; types (frictional, structural, cyclical).
- Multipliers: $k=1/(1-\text{MPC})$; tax multiplier $-\text{MPC}/\text{MPS}$.
- Money market: demand/supply of money and interest rate; $MV=PY$ identity.
- Phillips curve tradeoffs short run vs long run at $Y_f$.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to national income, price level, money, and policy in AD–AS and financial markets.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Short-run sticky wages/prices unless the prompt specifies long-run Classical adjustment.
- Ceteris paribus when shifting one curve at a time on AD–AS.
- Banking multiplier models assume required reserve ratio and no currency drain unless stated.
- Open-economy problems name exchange-rate regime (flexible vs fixed) when relevant.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Long-Run Consequences of Stabilization Policies** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Expansionary fiscal policy shifts AD right, increasing real GDP and price level in the short run.
- An increase in the money supply lowers the nominal interest rate, increasing investment and AD.
- In the long run, the economy returns to $Y_f$ as nominal wages adjust.
- Crowding out partially offsets fiscal stimulus when higher $r$ reduces investment.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Long-Run Consequences of Stabilization Policies** to neighboring ideas on the same exam.

- Business cycle indicators ↔ AD shocks and policy responses.
- Financial sector ↔ money creation and interest-sensitive $I$.
- Open economy ↔ net exports and capital flows on AD.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require national income, price level, money, and policy in AD–AS and financial markets but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Macroeconomics', 'Open Economy—International Trade and Finance'): r"""## Exam Application Lab

Focus topic: **Open Economy—International Trade and Finance** (AP Macroeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Open Economy—International Trade and Finance** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Open Economy—International Trade and Finance** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- GDP components: $Y=C+I+G+X_n$; real vs nominal with GDP deflator.
- Unemployment: labor force participation; types (frictional, structural, cyclical).
- Multipliers: $k=1/(1-\text{MPC})$; tax multiplier $-\text{MPC}/\text{MPS}$.
- Money market: demand/supply of money and interest rate; $MV=PY$ identity.
- Phillips curve tradeoffs short run vs long run at $Y_f$.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to national income, price level, money, and policy in AD–AS and financial markets.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Short-run sticky wages/prices unless the prompt specifies long-run Classical adjustment.
- Ceteris paribus when shifting one curve at a time on AD–AS.
- Banking multiplier models assume required reserve ratio and no currency drain unless stated.
- Open-economy problems name exchange-rate regime (flexible vs fixed) when relevant.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Open Economy—International Trade and Finance** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Expansionary fiscal policy shifts AD right, increasing real GDP and price level in the short run.
- An increase in the money supply lowers the nominal interest rate, increasing investment and AD.
- In the long run, the economy returns to $Y_f$ as nominal wages adjust.
- Crowding out partially offsets fiscal stimulus when higher $r$ reduces investment.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Open Economy—International Trade and Finance** to neighboring ideas on the same exam.

- Business cycle indicators ↔ AD shocks and policy responses.
- Financial sector ↔ money creation and interest-sensitive $I$.
- Open economy ↔ net exports and capital flows on AD.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require national income, price level, money, and policy in AD–AS and financial markets but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Microeconomics', 'Imperfect Competition'): r"""## Exam Application Lab

Focus topic: **Imperfect Competition** (AP Microeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Imperfect Competition** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Imperfect Competition** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Elasticity: $E_d=|\%\Delta Q/\%\Delta P|$; midpoint formula when two points given.
- Surplus: CS and PS as areas; DWL from taxes, price floors/ceilings, monopoly.
- Production: marginal product, marginal cost, profit max $MR=MC$.
- Perfect competition vs monopoly: $P=MR$ vs $MR<P$; deadweight loss shapes.
- Factor markets: $MRP=MFC$ hiring rule.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to marginal analysis, market equilibrium, and efficiency.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Rational agents compare marginal benefit and marginal cost at the margin.
- Competitive markets: price takers unless labeled imperfect competition.
- No externalities unless the unit is market failure.
- Short-run vs long-run supply distinguished when plant capacity is fixed.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Imperfect Competition** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because demand is inelastic, the price increase raises total revenue.
- The tax creates deadweight loss because mutually beneficial trades no longer occur at $Q_E$.
- The firm hires labor until $MRP=MFC$ to maximize profit.
- A negative externality causes market quantity to exceed the socially efficient quantity.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Imperfect Competition** to neighboring ideas on the same exam.

- Supply/demand ↔ elasticity and incidence on policy graphs.
- Perfect competition ↔ efficiency and consumer/producer surplus.
- Imperfect competition ↔ price, output, and DWL comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require marginal analysis, market equilibrium, and efficiency but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Microeconomics', 'Factor Markets'): r"""## Exam Application Lab

Focus topic: **Factor Markets** (AP Microeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Factor Markets** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Factor Markets** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Elasticity: $E_d=|\%\Delta Q/\%\Delta P|$; midpoint formula when two points given.
- Surplus: CS and PS as areas; DWL from taxes, price floors/ceilings, monopoly.
- Production: marginal product, marginal cost, profit max $MR=MC$.
- Perfect competition vs monopoly: $P=MR$ vs $MR<P$; deadweight loss shapes.
- Factor markets: $MRP=MFC$ hiring rule.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to marginal analysis, market equilibrium, and efficiency.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Rational agents compare marginal benefit and marginal cost at the margin.
- Competitive markets: price takers unless labeled imperfect competition.
- No externalities unless the unit is market failure.
- Short-run vs long-run supply distinguished when plant capacity is fixed.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Factor Markets** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because demand is inelastic, the price increase raises total revenue.
- The tax creates deadweight loss because mutually beneficial trades no longer occur at $Q_E$.
- The firm hires labor until $MRP=MFC$ to maximize profit.
- A negative externality causes market quantity to exceed the socially efficient quantity.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Factor Markets** to neighboring ideas on the same exam.

- Supply/demand ↔ elasticity and incidence on policy graphs.
- Perfect competition ↔ efficiency and consumer/producer surplus.
- Imperfect competition ↔ price, output, and DWL comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require marginal analysis, market equilibrium, and efficiency but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Microeconomics', 'Market Failure and the Role of Government'): r"""## Exam Application Lab

Focus topic: **Market Failure and the Role of Government** (AP Microeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Market Failure and the Role of Government** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Market Failure and the Role of Government** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Elasticity: $E_d=|\%\Delta Q/\%\Delta P|$; midpoint formula when two points given.
- Surplus: CS and PS as areas; DWL from taxes, price floors/ceilings, monopoly.
- Production: marginal product, marginal cost, profit max $MR=MC$.
- Perfect competition vs monopoly: $P=MR$ vs $MR<P$; deadweight loss shapes.
- Factor markets: $MRP=MFC$ hiring rule.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to marginal analysis, market equilibrium, and efficiency.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Rational agents compare marginal benefit and marginal cost at the margin.
- Competitive markets: price takers unless labeled imperfect competition.
- No externalities unless the unit is market failure.
- Short-run vs long-run supply distinguished when plant capacity is fixed.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Market Failure and the Role of Government** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because demand is inelastic, the price increase raises total revenue.
- The tax creates deadweight loss because mutually beneficial trades no longer occur at $Q_E$.
- The firm hires labor until $MRP=MFC$ to maximize profit.
- A negative externality causes market quantity to exceed the socially efficient quantity.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Market Failure and the Role of Government** to neighboring ideas on the same exam.

- Supply/demand ↔ elasticity and incidence on policy graphs.
- Perfect competition ↔ efficiency and consumer/producer surplus.
- Imperfect competition ↔ price, output, and DWL comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require marginal analysis, market equilibrium, and efficiency but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science Principles', 'Big Idea 1: Creative Development'): r"""## Exam Application Lab

Focus topic: **Big Idea 1: Creative Development** (AP Computer Science Principles).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Big Idea 1: Creative Development** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Big Idea 1: Creative Development** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Binary/decimal conversion; hex nibbles when given.
- Lossless vs lossy compression tradeoffs (size vs fidelity).
- Algorithm efficiency: compare growth of steps vs input size $n$.
- Network models: IP addressing at conceptual level; fault tolerance and redundancy.
- Boolean logic: AND, OR, NOT, De Morgan for traceable truth tables.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to computing concepts, data, algorithms, and impacts—not Java syntax.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Abstraction hides detail but preserves behavior needed for the task.
- Internet protocols stack: application relies on lower layers as named in prompt.
- Privacy/security claims require naming threat model and mitigation.
- Bias in data affects model outcomes even with correct code.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Big Idea 1: Creative Development** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Lossy compression reduces file size by discarding information that may affect quality.
- A parallel solution reduces runtime only if tasks are independent and overhead is small.
- Adding redundancy increases fault tolerance at the cost of additional resources.
- The algorithm is O(n) because each element is processed a constant number of times.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Big Idea 1: Creative Development** to neighboring ideas on the same exam.

- Data representation ↔ compression and metadata.
- Algorithms ↔ programming constructs in pseudocode.
- Networks ↔ distributed computing and reliability.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require computing concepts, data, algorithms, and impacts—not Java syntax but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science Principles', 'Big Idea 2: Data'): r"""## Exam Application Lab

Focus topic: **Big Idea 2: Data** (AP Computer Science Principles).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Big Idea 2: Data** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Big Idea 2: Data** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Binary/decimal conversion; hex nibbles when given.
- Lossless vs lossy compression tradeoffs (size vs fidelity).
- Algorithm efficiency: compare growth of steps vs input size $n$.
- Network models: IP addressing at conceptual level; fault tolerance and redundancy.
- Boolean logic: AND, OR, NOT, De Morgan for traceable truth tables.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to computing concepts, data, algorithms, and impacts—not Java syntax.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Abstraction hides detail but preserves behavior needed for the task.
- Internet protocols stack: application relies on lower layers as named in prompt.
- Privacy/security claims require naming threat model and mitigation.
- Bias in data affects model outcomes even with correct code.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Big Idea 2: Data** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Lossy compression reduces file size by discarding information that may affect quality.
- A parallel solution reduces runtime only if tasks are independent and overhead is small.
- Adding redundancy increases fault tolerance at the cost of additional resources.
- The algorithm is O(n) because each element is processed a constant number of times.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Big Idea 2: Data** to neighboring ideas on the same exam.

- Data representation ↔ compression and metadata.
- Algorithms ↔ programming constructs in pseudocode.
- Networks ↔ distributed computing and reliability.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require computing concepts, data, algorithms, and impacts—not Java syntax but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science Principles', 'Big Idea 3: Algorithms and Programming'): r"""## Exam Application Lab

Focus topic: **Big Idea 3: Algorithms and Programming** (AP Computer Science Principles).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Big Idea 3: Algorithms and Programming** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Big Idea 3: Algorithms and Programming** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Binary/decimal conversion; hex nibbles when given.
- Lossless vs lossy compression tradeoffs (size vs fidelity).
- Algorithm efficiency: compare growth of steps vs input size $n$.
- Network models: IP addressing at conceptual level; fault tolerance and redundancy.
- Boolean logic: AND, OR, NOT, De Morgan for traceable truth tables.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to computing concepts, data, algorithms, and impacts—not Java syntax.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Abstraction hides detail but preserves behavior needed for the task.
- Internet protocols stack: application relies on lower layers as named in prompt.
- Privacy/security claims require naming threat model and mitigation.
- Bias in data affects model outcomes even with correct code.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Big Idea 3: Algorithms and Programming** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Lossy compression reduces file size by discarding information that may affect quality.
- A parallel solution reduces runtime only if tasks are independent and overhead is small.
- Adding redundancy increases fault tolerance at the cost of additional resources.
- The algorithm is O(n) because each element is processed a constant number of times.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Big Idea 3: Algorithms and Programming** to neighboring ideas on the same exam.

- Data representation ↔ compression and metadata.
- Algorithms ↔ programming constructs in pseudocode.
- Networks ↔ distributed computing and reliability.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require computing concepts, data, algorithms, and impacts—not Java syntax but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science Principles', 'Big Idea 4: Computer Systems and Networks'): r"""## Exam Application Lab

Focus topic: **Big Idea 4: Computer Systems and Networks** (AP Computer Science Principles).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Big Idea 4: Computer Systems and Networks** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Big Idea 4: Computer Systems and Networks** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Binary/decimal conversion; hex nibbles when given.
- Lossless vs lossy compression tradeoffs (size vs fidelity).
- Algorithm efficiency: compare growth of steps vs input size $n$.
- Network models: IP addressing at conceptual level; fault tolerance and redundancy.
- Boolean logic: AND, OR, NOT, De Morgan for traceable truth tables.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to computing concepts, data, algorithms, and impacts—not Java syntax.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Abstraction hides detail but preserves behavior needed for the task.
- Internet protocols stack: application relies on lower layers as named in prompt.
- Privacy/security claims require naming threat model and mitigation.
- Bias in data affects model outcomes even with correct code.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Big Idea 4: Computer Systems and Networks** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Lossy compression reduces file size by discarding information that may affect quality.
- A parallel solution reduces runtime only if tasks are independent and overhead is small.
- Adding redundancy increases fault tolerance at the cost of additional resources.
- The algorithm is O(n) because each element is processed a constant number of times.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Big Idea 4: Computer Systems and Networks** to neighboring ideas on the same exam.

- Data representation ↔ compression and metadata.
- Algorithms ↔ programming constructs in pseudocode.
- Networks ↔ distributed computing and reliability.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require computing concepts, data, algorithms, and impacts—not Java syntax but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science Principles', 'Big Idea 5: Impact of Computing'): r"""## Exam Application Lab

Focus topic: **Big Idea 5: Impact of Computing** (AP Computer Science Principles).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Big Idea 5: Impact of Computing** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Big Idea 5: Impact of Computing** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Binary/decimal conversion; hex nibbles when given.
- Lossless vs lossy compression tradeoffs (size vs fidelity).
- Algorithm efficiency: compare growth of steps vs input size $n$.
- Network models: IP addressing at conceptual level; fault tolerance and redundancy.
- Boolean logic: AND, OR, NOT, De Morgan for traceable truth tables.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to computing concepts, data, algorithms, and impacts—not Java syntax.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Abstraction hides detail but preserves behavior needed for the task.
- Internet protocols stack: application relies on lower layers as named in prompt.
- Privacy/security claims require naming threat model and mitigation.
- Bias in data affects model outcomes even with correct code.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Big Idea 5: Impact of Computing** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Lossy compression reduces file size by discarding information that may affect quality.
- A parallel solution reduces runtime only if tasks are independent and overhead is small.
- Adding redundancy increases fault tolerance at the cost of additional resources.
- The algorithm is O(n) because each element is processed a constant number of times.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Big Idea 5: Impact of Computing** to neighboring ideas on the same exam.

- Data representation ↔ compression and metadata.
- Algorithms ↔ programming constructs in pseudocode.
- Networks ↔ distributed computing and reliability.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require computing concepts, data, algorithms, and impacts—not Java syntax but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Chemistry', 'Unit 9: Thermodynamics And Electrochemistry'): r"""## Exam Application Lab

Focus topic: **Unit 9: Thermodynamics And Electrochemistry** (AP Chemistry).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 9: Thermodynamics And Electrochemistry** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 9: Thermodynamics And Electrochemistry** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Moles: $n=m/M$; solutions $M=\dfrac{n_{\text{solute}}}{V_{\text{L}}}$.
- Gas laws: $PV=nRT$; partial pressures and mole fractions when mixed.
- Rate laws: $\text{rate}=k[A]^m[B]^n$ from experimental orders.
- Equilibrium: $K=\dfrac{[\text{products}]}{[\text{reactants}]}$ with ICE tables; $Q$ vs $K$.
- Thermochemistry: $q=mc\Delta T$; $\Delta G=\Delta H-T\Delta S$; electrochemistry $E^\circ_{\text{cell}}$.
- Acids: $K_a$, pH, Henderson–Hasselbalch for buffers when valid.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to particle-level reasoning linked to stoichiometry, equilibrium, or kinetics.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Ideal gas behavior unless real-gas caveats are specified.
- Activity ≈ concentration for dilute aqueous species in $K$ expressions.
- Temperature constant when comparing $K$, $Q$, or rate constants.
- Spectator ions omitted; net ionic equations balanced for charge and atoms.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 9: Thermodynamics And Electrochemistry** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because $Q>K$, the reaction shifts toward reactants to re-establish equilibrium.
- The rate doubles when $[A]$ doubles with other concentrations fixed, so the reaction is first order in $A$.
- $\Delta G<0$ under standard conditions, so the forward process is thermodynamically favored.
- Oxidation occurs at the anode; electrons flow through the external circuit from anode to cathode.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 9: Thermodynamics And Electrochemistry** to neighboring ideas on the same exam.

- Atomic structure (Unit 1) ↔ bonding and IMF explanations in Unit 2.
- Stoichiometry (Unit 4) ↔ equilibrium mole ratios in Unit 7.
- Thermochemistry (Unit 6) ↔ electrochemical cell potential (Unit 9).

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require particle-level reasoning linked to stoichiometry, equilibrium, or kinetics but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Chemistry', 'Unit 7: Equilibrium'): r"""## Exam Application Lab

Focus topic: **Unit 7: Equilibrium** (AP Chemistry).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 7: Equilibrium** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 7: Equilibrium** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Moles: $n=m/M$; solutions $M=\dfrac{n_{\text{solute}}}{V_{\text{L}}}$.
- Gas laws: $PV=nRT$; partial pressures and mole fractions when mixed.
- Rate laws: $\text{rate}=k[A]^m[B]^n$ from experimental orders.
- Equilibrium: $K=\dfrac{[\text{products}]}{[\text{reactants}]}$ with ICE tables; $Q$ vs $K$.
- Thermochemistry: $q=mc\Delta T$; $\Delta G=\Delta H-T\Delta S$; electrochemistry $E^\circ_{\text{cell}}$.
- Acids: $K_a$, pH, Henderson–Hasselbalch for buffers when valid.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to particle-level reasoning linked to stoichiometry, equilibrium, or kinetics.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Ideal gas behavior unless real-gas caveats are specified.
- Activity ≈ concentration for dilute aqueous species in $K$ expressions.
- Temperature constant when comparing $K$, $Q$, or rate constants.
- Spectator ions omitted; net ionic equations balanced for charge and atoms.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 7: Equilibrium** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because $Q>K$, the reaction shifts toward reactants to re-establish equilibrium.
- The rate doubles when $[A]$ doubles with other concentrations fixed, so the reaction is first order in $A$.
- $\Delta G<0$ under standard conditions, so the forward process is thermodynamically favored.
- Oxidation occurs at the anode; electrons flow through the external circuit from anode to cathode.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 7: Equilibrium** to neighboring ideas on the same exam.

- Atomic structure (Unit 1) ↔ bonding and IMF explanations in Unit 2.
- Stoichiometry (Unit 4) ↔ equilibrium mole ratios in Unit 7.
- Thermochemistry (Unit 6) ↔ electrochemical cell potential (Unit 9).

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require particle-level reasoning linked to stoichiometry, equilibrium, or kinetics but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Chemistry', 'Unit 5: Kinetics'): r"""## Exam Application Lab

Focus topic: **Unit 5: Kinetics** (AP Chemistry).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 5: Kinetics** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 5: Kinetics** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Moles: $n=m/M$; solutions $M=\dfrac{n_{\text{solute}}}{V_{\text{L}}}$.
- Gas laws: $PV=nRT$; partial pressures and mole fractions when mixed.
- Rate laws: $\text{rate}=k[A]^m[B]^n$ from experimental orders.
- Equilibrium: $K=\dfrac{[\text{products}]}{[\text{reactants}]}$ with ICE tables; $Q$ vs $K$.
- Thermochemistry: $q=mc\Delta T$; $\Delta G=\Delta H-T\Delta S$; electrochemistry $E^\circ_{\text{cell}}$.
- Acids: $K_a$, pH, Henderson–Hasselbalch for buffers when valid.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to particle-level reasoning linked to stoichiometry, equilibrium, or kinetics.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Ideal gas behavior unless real-gas caveats are specified.
- Activity ≈ concentration for dilute aqueous species in $K$ expressions.
- Temperature constant when comparing $K$, $Q$, or rate constants.
- Spectator ions omitted; net ionic equations balanced for charge and atoms.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 5: Kinetics** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because $Q>K$, the reaction shifts toward reactants to re-establish equilibrium.
- The rate doubles when $[A]$ doubles with other concentrations fixed, so the reaction is first order in $A$.
- $\Delta G<0$ under standard conditions, so the forward process is thermodynamically favored.
- Oxidation occurs at the anode; electrons flow through the external circuit from anode to cathode.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 5: Kinetics** to neighboring ideas on the same exam.

- Atomic structure (Unit 1) ↔ bonding and IMF explanations in Unit 2.
- Stoichiometry (Unit 4) ↔ equilibrium mole ratios in Unit 7.
- Thermochemistry (Unit 6) ↔ electrochemical cell potential (Unit 9).

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require particle-level reasoning linked to stoichiometry, equilibrium, or kinetics but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Chemistry', 'Unit 4: Chemical Reactions'): r"""## Exam Application Lab

Focus topic: **Unit 4: Chemical Reactions** (AP Chemistry).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 4: Chemical Reactions** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 4: Chemical Reactions** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Moles: $n=m/M$; solutions $M=\dfrac{n_{\text{solute}}}{V_{\text{L}}}$.
- Gas laws: $PV=nRT$; partial pressures and mole fractions when mixed.
- Rate laws: $\text{rate}=k[A]^m[B]^n$ from experimental orders.
- Equilibrium: $K=\dfrac{[\text{products}]}{[\text{reactants}]}$ with ICE tables; $Q$ vs $K$.
- Thermochemistry: $q=mc\Delta T$; $\Delta G=\Delta H-T\Delta S$; electrochemistry $E^\circ_{\text{cell}}$.
- Acids: $K_a$, pH, Henderson–Hasselbalch for buffers when valid.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to particle-level reasoning linked to stoichiometry, equilibrium, or kinetics.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Ideal gas behavior unless real-gas caveats are specified.
- Activity ≈ concentration for dilute aqueous species in $K$ expressions.
- Temperature constant when comparing $K$, $Q$, or rate constants.
- Spectator ions omitted; net ionic equations balanced for charge and atoms.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 4: Chemical Reactions** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because $Q>K$, the reaction shifts toward reactants to re-establish equilibrium.
- The rate doubles when $[A]$ doubles with other concentrations fixed, so the reaction is first order in $A$.
- $\Delta G<0$ under standard conditions, so the forward process is thermodynamically favored.
- Oxidation occurs at the anode; electrons flow through the external circuit from anode to cathode.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 4: Chemical Reactions** to neighboring ideas on the same exam.

- Atomic structure (Unit 1) ↔ bonding and IMF explanations in Unit 2.
- Stoichiometry (Unit 4) ↔ equilibrium mole ratios in Unit 7.
- Thermochemistry (Unit 6) ↔ electrochemical cell potential (Unit 9).

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require particle-level reasoning linked to stoichiometry, equilibrium, or kinetics but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Chemistry', 'Unit 3: Properties Of Substances And Mixtures'): r"""## Exam Application Lab

Focus topic: **Unit 3: Properties Of Substances And Mixtures** (AP Chemistry).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 3: Properties Of Substances And Mixtures** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 3: Properties Of Substances And Mixtures** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Moles: $n=m/M$; solutions $M=\dfrac{n_{\text{solute}}}{V_{\text{L}}}$.
- Gas laws: $PV=nRT$; partial pressures and mole fractions when mixed.
- Rate laws: $\text{rate}=k[A]^m[B]^n$ from experimental orders.
- Equilibrium: $K=\dfrac{[\text{products}]}{[\text{reactants}]}$ with ICE tables; $Q$ vs $K$.
- Thermochemistry: $q=mc\Delta T$; $\Delta G=\Delta H-T\Delta S$; electrochemistry $E^\circ_{\text{cell}}$.
- Acids: $K_a$, pH, Henderson–Hasselbalch for buffers when valid.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to particle-level reasoning linked to stoichiometry, equilibrium, or kinetics.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Ideal gas behavior unless real-gas caveats are specified.
- Activity ≈ concentration for dilute aqueous species in $K$ expressions.
- Temperature constant when comparing $K$, $Q$, or rate constants.
- Spectator ions omitted; net ionic equations balanced for charge and atoms.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 3: Properties Of Substances And Mixtures** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because $Q>K$, the reaction shifts toward reactants to re-establish equilibrium.
- The rate doubles when $[A]$ doubles with other concentrations fixed, so the reaction is first order in $A$.
- $\Delta G<0$ under standard conditions, so the forward process is thermodynamically favored.
- Oxidation occurs at the anode; electrons flow through the external circuit from anode to cathode.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 3: Properties Of Substances And Mixtures** to neighboring ideas on the same exam.

- Atomic structure (Unit 1) ↔ bonding and IMF explanations in Unit 2.
- Stoichiometry (Unit 4) ↔ equilibrium mole ratios in Unit 7.
- Thermochemistry (Unit 6) ↔ electrochemical cell potential (Unit 9).

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require particle-level reasoning linked to stoichiometry, equilibrium, or kinetics but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Chemistry', 'Unit 2: Compound Structure And Properties'): r"""## Exam Application Lab

Focus topic: **Unit 2: Compound Structure And Properties** (AP Chemistry).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 2: Compound Structure And Properties** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 2: Compound Structure And Properties** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Moles: $n=m/M$; solutions $M=\dfrac{n_{\text{solute}}}{V_{\text{L}}}$.
- Gas laws: $PV=nRT$; partial pressures and mole fractions when mixed.
- Rate laws: $\text{rate}=k[A]^m[B]^n$ from experimental orders.
- Equilibrium: $K=\dfrac{[\text{products}]}{[\text{reactants}]}$ with ICE tables; $Q$ vs $K$.
- Thermochemistry: $q=mc\Delta T$; $\Delta G=\Delta H-T\Delta S$; electrochemistry $E^\circ_{\text{cell}}$.
- Acids: $K_a$, pH, Henderson–Hasselbalch for buffers when valid.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to particle-level reasoning linked to stoichiometry, equilibrium, or kinetics.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Ideal gas behavior unless real-gas caveats are specified.
- Activity ≈ concentration for dilute aqueous species in $K$ expressions.
- Temperature constant when comparing $K$, $Q$, or rate constants.
- Spectator ions omitted; net ionic equations balanced for charge and atoms.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 2: Compound Structure And Properties** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because $Q>K$, the reaction shifts toward reactants to re-establish equilibrium.
- The rate doubles when $[A]$ doubles with other concentrations fixed, so the reaction is first order in $A$.
- $\Delta G<0$ under standard conditions, so the forward process is thermodynamically favored.
- Oxidation occurs at the anode; electrons flow through the external circuit from anode to cathode.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 2: Compound Structure And Properties** to neighboring ideas on the same exam.

- Atomic structure (Unit 1) ↔ bonding and IMF explanations in Unit 2.
- Stoichiometry (Unit 4) ↔ equilibrium mole ratios in Unit 7.
- Thermochemistry (Unit 6) ↔ electrochemical cell potential (Unit 9).

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require particle-level reasoning linked to stoichiometry, equilibrium, or kinetics but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Chemistry', 'Unit 1: Atomic Structure And Properties'): r"""## Exam Application Lab

Focus topic: **Unit 1: Atomic Structure And Properties** (AP Chemistry).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 1: Atomic Structure And Properties** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 1: Atomic Structure And Properties** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Moles: $n=m/M$; solutions $M=\dfrac{n_{\text{solute}}}{V_{\text{L}}}$.
- Gas laws: $PV=nRT$; partial pressures and mole fractions when mixed.
- Rate laws: $\text{rate}=k[A]^m[B]^n$ from experimental orders.
- Equilibrium: $K=\dfrac{[\text{products}]}{[\text{reactants}]}$ with ICE tables; $Q$ vs $K$.
- Thermochemistry: $q=mc\Delta T$; $\Delta G=\Delta H-T\Delta S$; electrochemistry $E^\circ_{\text{cell}}$.
- Acids: $K_a$, pH, Henderson–Hasselbalch for buffers when valid.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to particle-level reasoning linked to stoichiometry, equilibrium, or kinetics.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Ideal gas behavior unless real-gas caveats are specified.
- Activity ≈ concentration for dilute aqueous species in $K$ expressions.
- Temperature constant when comparing $K$, $Q$, or rate constants.
- Spectator ions omitted; net ionic equations balanced for charge and atoms.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 1: Atomic Structure And Properties** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because $Q>K$, the reaction shifts toward reactants to re-establish equilibrium.
- The rate doubles when $[A]$ doubles with other concentrations fixed, so the reaction is first order in $A$.
- $\Delta G<0$ under standard conditions, so the forward process is thermodynamically favored.
- Oxidation occurs at the anode; electrons flow through the external circuit from anode to cathode.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 1: Atomic Structure And Properties** to neighboring ideas on the same exam.

- Atomic structure (Unit 1) ↔ bonding and IMF explanations in Unit 2.
- Stoichiometry (Unit 4) ↔ equilibrium mole ratios in Unit 7.
- Thermochemistry (Unit 6) ↔ electrochemical cell potential (Unit 9).

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require particle-level reasoning linked to stoichiometry, equilibrium, or kinetics but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Biology', 'Unit 1: CHEMISTRY OF LIFE'): r"""## Exam Application Lab

Focus topic: **Unit 1: CHEMISTRY OF LIFE** (AP Biology).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Conceptual MCQ:** Identify how atomic structure explains bond type and macroscopic property (cohesion, heat capacity).
- **Data FRQ:** Interpret a table of pH or molarity effects on enzyme rate with controlled variables stated.
- **Experimental design:** Propose a control for a macromolecule identification lab (iodine, Benedict, Biuret).
- **Compare/contrast:** Contrast ionic vs covalent interactions in water and carbon chemistry contexts.
- **Graph:** Read a titration or absorption curve and link plateau to limiting reagent or saturation.
- **Claim + evidence:** Evaluate whether a diet claim follows from elemental composition of biomolecules.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Water potential: $\psi=\psi_P+\psi_S$; solute potential $\psi_S=-iCRT$ when used.
- Hardy–Weinberg: $p+q=1$, $p^2+2pq+q^2=1$ for allele and genotype frequencies.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ with stated degrees of freedom.
- Exponential growth: $N_t=N_0 e^{rt}$; logistic adds carrying capacity $K$.
- Percent change and ratios for lab data (mass, rate, concentration as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to biological mechanism and quantitative reasoning where the CED requires it.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random mating and large population when applying Hardy–Weinberg.
- Controlled variables in lab setups match the model (temperature, volume, timing).
- Chi-square expected counts follow the stated genetic or phenotypic ratio.
- Ecology models assume closed system or stated migration unless told otherwise.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A student measures Benedict's reaction time for glucose solutions at 25°C and 35°C with equal volumes. At 35°C the color change is faster. **Model:** collision theory (non-enzymatic). **Setup:** higher temperature increases collision frequency. **Result:** rate increases without changing total sugar moles. **Interpret:** faster color change does not imply higher glucose concentration—temperature must be controlled between trials.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The $\chi^2$ value is below the critical value at $\alpha=0.05$, so we fail to reject the null that the ratio matches the Mendelian expectation.
- Water moves from higher water potential to lower water potential, so the cell plasmolyzes in the hypertonic solution.
- Natural selection increases allele frequencies that raise fitness in the stated environment.
- Negative feedback restores the set point once the response exceeds the target level.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 1: CHEMISTRY OF LIFE** to neighboring ideas on the same exam.

- Unit 2 membrane transport ↔ Unit 3 ATP and enzyme kinetics (rates and constraints).
- Unit 5 pedigree logic ↔ Unit 6 gene expression (genotype to phenotype).
- Unit 7 selection ↔ Unit 8 population growth and community interactions.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require biological mechanism and quantitative reasoning where the CED requires it but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Biology', 'Unit 2: CELLS'): r"""## Exam Application Lab

Focus topic: **Unit 2: CELLS** (AP Biology).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Structure–function:** Relate organelle structure to role in a eukaryotic factory analogy FRQ.
- **Micrograph:** Identify membrane system from an electron micrograph and justify transport route.
- **Quantitative:** Use surface-area-to-volume ratio to explain cell size limits.
- **Experimental:** Predict outcome of plasmolysis in hypertonic vs hypotonic solutions.
- **Evolution link:** Explain prokaryote vs eukaryote compartmentalization advantage.
- **Error analysis:** Spot a faulty osmosis setup (non-isotonic control missing).

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Water potential: $\psi=\psi_P+\psi_S$; solute potential $\psi_S=-iCRT$ when used.
- Hardy–Weinberg: $p+q=1$, $p^2+2pq+q^2=1$ for allele and genotype frequencies.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ with stated degrees of freedom.
- Exponential growth: $N_t=N_0 e^{rt}$; logistic adds carrying capacity $K$.
- Percent change and ratios for lab data (mass, rate, concentration as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to biological mechanism and quantitative reasoning where the CED requires it.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random mating and large population when applying Hardy–Weinberg.
- Controlled variables in lab setups match the model (temperature, volume, timing).
- Chi-square expected counts follow the stated genetic or phenotypic ratio.
- Ecology models assume closed system or stated migration unless told otherwise.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

Red blood cells in 0.9% NaCl appear normal; in distilled water they lyse. **Model:** tonicity and water potential. **Setup:** distilled water is hypotonic; water enters by osmosis. **Result:** cell swells and ruptures without a wall. **Interpret:** isotonic saline approximates cytosol solute activity for clinical IV solutions.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The $\chi^2$ value is below the critical value at $\alpha=0.05$, so we fail to reject the null that the ratio matches the Mendelian expectation.
- Water moves from higher water potential to lower water potential, so the cell plasmolyzes in the hypertonic solution.
- Natural selection increases allele frequencies that raise fitness in the stated environment.
- Negative feedback restores the set point once the response exceeds the target level.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 2: CELLS** to neighboring ideas on the same exam.

- Unit 2 membrane transport ↔ Unit 3 ATP and enzyme kinetics (rates and constraints).
- Unit 5 pedigree logic ↔ Unit 6 gene expression (genotype to phenotype).
- Unit 7 selection ↔ Unit 8 population growth and community interactions.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require biological mechanism and quantitative reasoning where the CED requires it but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Biology', 'Unit 3: CELLULAR ENERGETICS'): r"""## Exam Application Lab

Focus topic: **Unit 3: CELLULAR ENERGETICS** (AP Biology).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Pathway map:** Trace carbon from glucose to CO₂ naming ATP/NADH yield locations.
- **Graph:** Interpret O₂ consumption vs time before/after mitochondrial inhibitor.
- **Compare:** Aerobic respiration vs fermentation when O₂ is absent.
- **Quantitative:** Calculate ATP yield per glucose given stated shuttle efficiency.
- **Experimental:** Design respirometer setup with germinating vs dry seeds control.
- **Regulation:** Explain feedback inhibition in anabolic pathway.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Water potential: $\psi=\psi_P+\psi_S$; solute potential $\psi_S=-iCRT$ when used.
- Hardy–Weinberg: $p+q=1$, $p^2+2pq+q^2=1$ for allele and genotype frequencies.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ with stated degrees of freedom.
- Exponential growth: $N_t=N_0 e^{rt}$; logistic adds carrying capacity $K$.
- Percent change and ratios for lab data (mass, rate, concentration as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to biological mechanism and quantitative reasoning where the CED requires it.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random mating and large population when applying Hardy–Weinberg.
- Controlled variables in lab setups match the model (temperature, volume, timing).
- Chi-square expected counts follow the stated genetic or phenotypic ratio.
- Ecology models assume closed system or stated migration unless told otherwise.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A respirometer shows faster O₂ drop with germinating peas than dry peas at 25°C. **Model:** aerobic respiration consumes O₂. **Setup:** germination raises metabolic rate. **Result:** steeper slope for germinating peas. **Interpret:** normalize by mass when comparing treatments; slope reflects respiration rate, not pea count alone.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The $\chi^2$ value is below the critical value at $\alpha=0.05$, so we fail to reject the null that the ratio matches the Mendelian expectation.
- Water moves from higher water potential to lower water potential, so the cell plasmolyzes in the hypertonic solution.
- Natural selection increases allele frequencies that raise fitness in the stated environment.
- Negative feedback restores the set point once the response exceeds the target level.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 3: CELLULAR ENERGETICS** to neighboring ideas on the same exam.

- Unit 2 membrane transport ↔ Unit 3 ATP and enzyme kinetics (rates and constraints).
- Unit 5 pedigree logic ↔ Unit 6 gene expression (genotype to phenotype).
- Unit 7 selection ↔ Unit 8 population growth and community interactions.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require biological mechanism and quantitative reasoning where the CED requires it but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Biology', 'Unit 4: CELL COMMUNICATION AND CELL CYCLE'): r"""## Exam Application Lab

Focus topic: **Unit 4: CELL COMMUNICATION AND CELL CYCLE** (AP Biology).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Signal transduction:** Order reception → transduction → response for a ligand example.
- **Graph:** Interpret cyclin concentration oscillations across mitosis phases.
- **Cancer context:** Link checkpoint failure to uncontrolled division.
- **Compare:** Paracrine vs endocrine signaling distance and speed.
- **Experimental:** Predict effect of blocking receptor tyrosine kinase.
- **Cell cycle math:** Given phase durations in a pie chart, estimate cells in metaphase in a sample.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Water potential: $\psi=\psi_P+\psi_S$; solute potential $\psi_S=-iCRT$ when used.
- Hardy–Weinberg: $p+q=1$, $p^2+2pq+q^2=1$ for allele and genotype frequencies.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ with stated degrees of freedom.
- Exponential growth: $N_t=N_0 e^{rt}$; logistic adds carrying capacity $K$.
- Percent change and ratios for lab data (mass, rate, concentration as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to biological mechanism and quantitative reasoning where the CED requires it.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random mating and large population when applying Hardy–Weinberg.
- Controlled variables in lab setups match the model (temperature, volume, timing).
- Chi-square expected counts follow the stated genetic or phenotypic ratio.
- Ecology models assume closed system or stated migration unless told otherwise.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A drug blocks S-phase entry; cells accumulate with 2n DNA but do not replicate again. **Model:** cell-cycle checkpoints. **Setup:** block before completion of DNA synthesis cycle. **Result:** arrested population at G1/S depending on mechanism. **Interpret:** chemotherapy targets rapidly cycling cells; side effects on normal proliferative tissues follow the same logic.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The $\chi^2$ value is below the critical value at $\alpha=0.05$, so we fail to reject the null that the ratio matches the Mendelian expectation.
- Water moves from higher water potential to lower water potential, so the cell plasmolyzes in the hypertonic solution.
- Natural selection increases allele frequencies that raise fitness in the stated environment.
- Negative feedback restores the set point once the response exceeds the target level.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 4: CELL COMMUNICATION AND CELL CYCLE** to neighboring ideas on the same exam.

- Unit 2 membrane transport ↔ Unit 3 ATP and enzyme kinetics (rates and constraints).
- Unit 5 pedigree logic ↔ Unit 6 gene expression (genotype to phenotype).
- Unit 7 selection ↔ Unit 8 population growth and community interactions.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require biological mechanism and quantitative reasoning where the CED requires it but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Biology', 'Unit 5: HEREDITY'): r"""## Exam Application Lab

Focus topic: **Unit 5: HEREDITY** (AP Biology).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Punnett / probability:** Multi-step dihybrid with linkage or independent assortment as stated.
- **Pedigree:** Infer mode of inheritance and justify with carrier patterns.
- **Chi-square:** Compare observed offspring counts to Mendelian expectation.
- **Non-Mendelian:** Codominance, incomplete dominance, or epistasis as prompt specifies.
- **Meiosis error:** Relate nondisjunction to aneuploidy karyotype.
- **Molecular link:** Connect allele to protein function change.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Water potential: $\psi=\psi_P+\psi_S$; solute potential $\psi_S=-iCRT$ when used.
- Hardy–Weinberg: $p+q=1$, $p^2+2pq+q^2=1$ for allele and genotype frequencies.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ with stated degrees of freedom.
- Exponential growth: $N_t=N_0 e^{rt}$; logistic adds carrying capacity $K$.
- Percent change and ratios for lab data (mass, rate, concentration as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to biological mechanism and quantitative reasoning where the CED requires it.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random mating and large population when applying Hardy–Weinberg.
- Controlled variables in lab setups match the model (temperature, volume, timing).
- Chi-square expected counts follow the stated genetic or phenotypic ratio.
- Ecology models assume closed system or stated migration unless told otherwise.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

In peas, tall (T) is dominant to short (t); 106 tall and 34 short from a heterozygous cross (140 total). **Model:** monohybrid 3:1. **Setup:** expected 105:35. **Result:** χ² is small; fail to reject 3:1. **Interpret:** data are consistent with single-gene segregation—not proof of dominance mechanism alone.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The $\chi^2$ value is below the critical value at $\alpha=0.05$, so we fail to reject the null that the ratio matches the Mendelian expectation.
- Water moves from higher water potential to lower water potential, so the cell plasmolyzes in the hypertonic solution.
- Natural selection increases allele frequencies that raise fitness in the stated environment.
- Negative feedback restores the set point once the response exceeds the target level.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 5: HEREDITY** to neighboring ideas on the same exam.

- Unit 2 membrane transport ↔ Unit 3 ATP and enzyme kinetics (rates and constraints).
- Unit 5 pedigree logic ↔ Unit 6 gene expression (genotype to phenotype).
- Unit 7 selection ↔ Unit 8 population growth and community interactions.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require biological mechanism and quantitative reasoning where the CED requires it but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Biology', 'Unit 6: GENE EXPRESSION AND REGULATION'): r"""## Exam Application Lab

Focus topic: **Unit 6: GENE EXPRESSION AND REGULATION** (AP Biology).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Central dogma:** Trace template strand to mRNA to polypeptide with mutation effect.
- **Regulation:** lac operon or eukaryotic enhancer scenario with inducer/repressor.
- **Biotech:** Explain PCR or gel electrophoresis outcome from a diagram.
- **Mutation:** Classify silent, missense, nonsense, frameshift by codon table excerpt.
- **Epigenetics:** Describe how methylation alters expression without changing sequence.
- **Compare:** Transcription vs translation inhibitors in antibiotic context.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Water potential: $\psi=\psi_P+\psi_S$; solute potential $\psi_S=-iCRT$ when used.
- Hardy–Weinberg: $p+q=1$, $p^2+2pq+q^2=1$ for allele and genotype frequencies.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ with stated degrees of freedom.
- Exponential growth: $N_t=N_0 e^{rt}$; logistic adds carrying capacity $K$.
- Percent change and ratios for lab data (mass, rate, concentration as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to biological mechanism and quantitative reasoning where the CED requires it.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random mating and large population when applying Hardy–Weinberg.
- Controlled variables in lab setups match the model (temperature, volume, timing).
- Chi-square expected counts follow the stated genetic or phenotypic ratio.
- Ecology models assume closed system or stated migration unless told otherwise.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A point mutation changes codon 12 from GGT to GCT (same amino acid). **Model:** genetic code redundancy. **Setup:** both code for glycine. **Result:** silent mutation; polypeptide unchanged. **Interpret:** phenotype may still change if the mutation affects a splice site—read prompt boundaries before classifying.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The $\chi^2$ value is below the critical value at $\alpha=0.05$, so we fail to reject the null that the ratio matches the Mendelian expectation.
- Water moves from higher water potential to lower water potential, so the cell plasmolyzes in the hypertonic solution.
- Natural selection increases allele frequencies that raise fitness in the stated environment.
- Negative feedback restores the set point once the response exceeds the target level.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 6: GENE EXPRESSION AND REGULATION** to neighboring ideas on the same exam.

- Unit 2 membrane transport ↔ Unit 3 ATP and enzyme kinetics (rates and constraints).
- Unit 5 pedigree logic ↔ Unit 6 gene expression (genotype to phenotype).
- Unit 7 selection ↔ Unit 8 population growth and community interactions.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require biological mechanism and quantitative reasoning where the CED requires it but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Biology', 'Unit 7: NATURAL SELECTION'): r"""## Exam Application Lab

Focus topic: **Unit 7: NATURAL SELECTION** (AP Biology).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Data set:** Interpret shift in trait distribution before/after environmental change.
- **Mechanism:** Distinguish directional, stabilizing, disruptive selection from graphs.
- **Speciation:** Allopatric vs sympatric scenario with reproductive isolation type.
- **Phylogeny:** Read cladogram for shared derived traits.
- **Hardy–Weinberg:** Detect evolution via allele frequency change across generations.
- **Resistance:** Explain antibiotic resistance as selection on variation.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Water potential: $\psi=\psi_P+\psi_S$; solute potential $\psi_S=-iCRT$ when used.
- Hardy–Weinberg: $p+q=1$, $p^2+2pq+q^2=1$ for allele and genotype frequencies.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ with stated degrees of freedom.
- Exponential growth: $N_t=N_0 e^{rt}$; logistic adds carrying capacity $K$.
- Percent change and ratios for lab data (mass, rate, concentration as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to biological mechanism and quantitative reasoning where the CED requires it.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random mating and large population when applying Hardy–Weinberg.
- Controlled variables in lab setups match the model (temperature, volume, timing).
- Chi-square expected counts follow the stated genetic or phenotypic ratio.
- Ecology models assume closed system or stated migration unless told otherwise.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

After drought, beak depth increases in a finch population over 5 years. **Model:** directional selection. **Setup:** deeper beaks crack harder seeds that survive drought. **Result:** mean phenotype shifts. **Interpret:** allele frequencies changed—the population evolved; individuals do not adapt genetically within one lifetime.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The $\chi^2$ value is below the critical value at $\alpha=0.05$, so we fail to reject the null that the ratio matches the Mendelian expectation.
- Water moves from higher water potential to lower water potential, so the cell plasmolyzes in the hypertonic solution.
- Natural selection increases allele frequencies that raise fitness in the stated environment.
- Negative feedback restores the set point once the response exceeds the target level.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 7: NATURAL SELECTION** to neighboring ideas on the same exam.

- Unit 2 membrane transport ↔ Unit 3 ATP and enzyme kinetics (rates and constraints).
- Unit 5 pedigree logic ↔ Unit 6 gene expression (genotype to phenotype).
- Unit 7 selection ↔ Unit 8 population growth and community interactions.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require biological mechanism and quantitative reasoning where the CED requires it but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Biology', 'Unit 8: ECOLOGY'): r"""## Exam Application Lab

Focus topic: **Unit 8: ECOLOGY** (AP Biology).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Energy pyramid:** Calculate energy at trophic level given 10% rule.
- **Population:** Logistic vs exponential graph with carrying capacity labeled.
- **Community:** Predict keystone species removal effects on richness.
- **Biogeochemical:** Trace nitrogen or carbon through a reservoir diagram.
- **Human impact:** Evaluate sustainability metric (ecological footprint) claim.
- **Simpson / diversity:** Compare two communities with richness and evenness.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Water potential: $\psi=\psi_P+\psi_S$; solute potential $\psi_S=-iCRT$ when used.
- Hardy–Weinberg: $p+q=1$, $p^2+2pq+q^2=1$ for allele and genotype frequencies.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ with stated degrees of freedom.
- Exponential growth: $N_t=N_0 e^{rt}$; logistic adds carrying capacity $K$.
- Percent change and ratios for lab data (mass, rate, concentration as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to biological mechanism and quantitative reasoning where the CED requires it.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random mating and large population when applying Hardy–Weinberg.
- Controlled variables in lab setups match the model (temperature, volume, timing).
- Chi-square expected counts follow the stated genetic or phenotypic ratio.
- Ecology models assume closed system or stated migration unless told otherwise.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A lake receives fertilizer runoff; algal bloom then fish kill. **Model:** eutrophication and O₂ depletion. **Setup:** nutrients increase producers; decomposition consumes O₂. **Result:** hypoxia kills fish. **Interpret:** proximate cause is low dissolved O₂; ultimate cause is excess N/P loading.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The $\chi^2$ value is below the critical value at $\alpha=0.05$, so we fail to reject the null that the ratio matches the Mendelian expectation.
- Water moves from higher water potential to lower water potential, so the cell plasmolyzes in the hypertonic solution.
- Natural selection increases allele frequencies that raise fitness in the stated environment.
- Negative feedback restores the set point once the response exceeds the target level.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 8: ECOLOGY** to neighboring ideas on the same exam.

- Unit 2 membrane transport ↔ Unit 3 ATP and enzyme kinetics (rates and constraints).
- Unit 5 pedigree logic ↔ Unit 6 gene expression (genotype to phenotype).
- Unit 7 selection ↔ Unit 8 population growth and community interactions.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require biological mechanism and quantitative reasoning where the CED requires it but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Environmental Science', 'Unit 1: The Living World: Ecosystems'): r"""## Exam Application Lab

Focus topic: **Unit 1: The Living World: Ecosystems** (AP Environmental Science).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 1: The Living World: Ecosystems** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 1: The Living World: Ecosystems** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Population: density, growth rate, doubling time $T\approx 70/r$.
- Energy: efficiency $\eta=E_{\text{out}}/E_{\text{in}}$; power–energy $E=Pt$.
- Productivity: $\text{NPP}=\text{GPP}-R$; trophic transfer often $\sim 10\%$ model.
- pH: $\text{pH}=-\log_{10}[\text{H}^+]$; dose–response and LD$_{50}$ comparisons.
- Percent change, per-capita rates, and unit conversions (kWh, J, ppm as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Earth-systems models, human impacts, and CED quantitative skills.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Closed population when migration is excluded from the prompt.
- Steady-state trophic transfer percentages are illustrative, not exact laws.
- Pollution models assume stated source, medium, and exposure route.
- Global cycles diagrams represent net fluxes over the time scale named.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 1: The Living World: Ecosystems** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- NPP is lower than GPP because autotroph respiration removes energy from gross production.
- The policy reduces point-source loading but not nonpoint runoff unless additional controls are named.
- A lower LD$_{50}$ indicates higher acute toxicity for the tested species and route.
- The tragedy of the commons arises because marginal private benefit exceeds marginal social cost.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 1: The Living World: Ecosystems** to neighboring ideas on the same exam.

- Biogeochemical cycles ↔ pollution sources and remediation choices.
- Energy units ↔ climate forcing and resource comparisons.
- Population models ↔ land use and carrying capacity debates.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Earth-systems models, human impacts, and CED quantitative skills but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Environmental Science', 'Unit 2: The Living World: Biodiversity'): r"""## Exam Application Lab

Focus topic: **Unit 2: The Living World: Biodiversity** (AP Environmental Science).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 2: The Living World: Biodiversity** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 2: The Living World: Biodiversity** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Population: density, growth rate, doubling time $T\approx 70/r$.
- Energy: efficiency $\eta=E_{\text{out}}/E_{\text{in}}$; power–energy $E=Pt$.
- Productivity: $\text{NPP}=\text{GPP}-R$; trophic transfer often $\sim 10\%$ model.
- pH: $\text{pH}=-\log_{10}[\text{H}^+]$; dose–response and LD$_{50}$ comparisons.
- Percent change, per-capita rates, and unit conversions (kWh, J, ppm as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Earth-systems models, human impacts, and CED quantitative skills.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Closed population when migration is excluded from the prompt.
- Steady-state trophic transfer percentages are illustrative, not exact laws.
- Pollution models assume stated source, medium, and exposure route.
- Global cycles diagrams represent net fluxes over the time scale named.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 2: The Living World: Biodiversity** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- NPP is lower than GPP because autotroph respiration removes energy from gross production.
- The policy reduces point-source loading but not nonpoint runoff unless additional controls are named.
- A lower LD$_{50}$ indicates higher acute toxicity for the tested species and route.
- The tragedy of the commons arises because marginal private benefit exceeds marginal social cost.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 2: The Living World: Biodiversity** to neighboring ideas on the same exam.

- Biogeochemical cycles ↔ pollution sources and remediation choices.
- Energy units ↔ climate forcing and resource comparisons.
- Population models ↔ land use and carrying capacity debates.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Earth-systems models, human impacts, and CED quantitative skills but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Environmental Science', 'Unit 3: Populations'): r"""## Exam Application Lab

Focus topic: **Unit 3: Populations** (AP Environmental Science).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 3: Populations** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 3: Populations** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Population: density, growth rate, doubling time $T\approx 70/r$.
- Energy: efficiency $\eta=E_{\text{out}}/E_{\text{in}}$; power–energy $E=Pt$.
- Productivity: $\text{NPP}=\text{GPP}-R$; trophic transfer often $\sim 10\%$ model.
- pH: $\text{pH}=-\log_{10}[\text{H}^+]$; dose–response and LD$_{50}$ comparisons.
- Percent change, per-capita rates, and unit conversions (kWh, J, ppm as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Earth-systems models, human impacts, and CED quantitative skills.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Closed population when migration is excluded from the prompt.
- Steady-state trophic transfer percentages are illustrative, not exact laws.
- Pollution models assume stated source, medium, and exposure route.
- Global cycles diagrams represent net fluxes over the time scale named.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 3: Populations** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- NPP is lower than GPP because autotroph respiration removes energy from gross production.
- The policy reduces point-source loading but not nonpoint runoff unless additional controls are named.
- A lower LD$_{50}$ indicates higher acute toxicity for the tested species and route.
- The tragedy of the commons arises because marginal private benefit exceeds marginal social cost.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 3: Populations** to neighboring ideas on the same exam.

- Biogeochemical cycles ↔ pollution sources and remediation choices.
- Energy units ↔ climate forcing and resource comparisons.
- Population models ↔ land use and carrying capacity debates.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Earth-systems models, human impacts, and CED quantitative skills but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Environmental Science', 'Unit 4: Earth Systems And Resources'): r"""## Exam Application Lab

Focus topic: **Unit 4: Earth Systems And Resources** (AP Environmental Science).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 4: Earth Systems And Resources** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 4: Earth Systems And Resources** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Population: density, growth rate, doubling time $T\approx 70/r$.
- Energy: efficiency $\eta=E_{\text{out}}/E_{\text{in}}$; power–energy $E=Pt$.
- Productivity: $\text{NPP}=\text{GPP}-R$; trophic transfer often $\sim 10\%$ model.
- pH: $\text{pH}=-\log_{10}[\text{H}^+]$; dose–response and LD$_{50}$ comparisons.
- Percent change, per-capita rates, and unit conversions (kWh, J, ppm as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Earth-systems models, human impacts, and CED quantitative skills.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Closed population when migration is excluded from the prompt.
- Steady-state trophic transfer percentages are illustrative, not exact laws.
- Pollution models assume stated source, medium, and exposure route.
- Global cycles diagrams represent net fluxes over the time scale named.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 4: Earth Systems And Resources** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- NPP is lower than GPP because autotroph respiration removes energy from gross production.
- The policy reduces point-source loading but not nonpoint runoff unless additional controls are named.
- A lower LD$_{50}$ indicates higher acute toxicity for the tested species and route.
- The tragedy of the commons arises because marginal private benefit exceeds marginal social cost.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 4: Earth Systems And Resources** to neighboring ideas on the same exam.

- Biogeochemical cycles ↔ pollution sources and remediation choices.
- Energy units ↔ climate forcing and resource comparisons.
- Population models ↔ land use and carrying capacity debates.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Earth-systems models, human impacts, and CED quantitative skills but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Environmental Science', 'Unit 5: Land And Water Use'): r"""## Exam Application Lab

Focus topic: **Unit 5: Land And Water Use** (AP Environmental Science).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 5: Land And Water Use** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 5: Land And Water Use** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Population: density, growth rate, doubling time $T\approx 70/r$.
- Energy: efficiency $\eta=E_{\text{out}}/E_{\text{in}}$; power–energy $E=Pt$.
- Productivity: $\text{NPP}=\text{GPP}-R$; trophic transfer often $\sim 10\%$ model.
- pH: $\text{pH}=-\log_{10}[\text{H}^+]$; dose–response and LD$_{50}$ comparisons.
- Percent change, per-capita rates, and unit conversions (kWh, J, ppm as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Earth-systems models, human impacts, and CED quantitative skills.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Closed population when migration is excluded from the prompt.
- Steady-state trophic transfer percentages are illustrative, not exact laws.
- Pollution models assume stated source, medium, and exposure route.
- Global cycles diagrams represent net fluxes over the time scale named.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 5: Land And Water Use** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- NPP is lower than GPP because autotroph respiration removes energy from gross production.
- The policy reduces point-source loading but not nonpoint runoff unless additional controls are named.
- A lower LD$_{50}$ indicates higher acute toxicity for the tested species and route.
- The tragedy of the commons arises because marginal private benefit exceeds marginal social cost.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 5: Land And Water Use** to neighboring ideas on the same exam.

- Biogeochemical cycles ↔ pollution sources and remediation choices.
- Energy units ↔ climate forcing and resource comparisons.
- Population models ↔ land use and carrying capacity debates.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Earth-systems models, human impacts, and CED quantitative skills but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Environmental Science', 'Unit 6: Energy Resources And Consumption'): r"""## Exam Application Lab

Focus topic: **Unit 6: Energy Resources And Consumption** (AP Environmental Science).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 6: Energy Resources And Consumption** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 6: Energy Resources And Consumption** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Population: density, growth rate, doubling time $T\approx 70/r$.
- Energy: efficiency $\eta=E_{\text{out}}/E_{\text{in}}$; power–energy $E=Pt$.
- Productivity: $\text{NPP}=\text{GPP}-R$; trophic transfer often $\sim 10\%$ model.
- pH: $\text{pH}=-\log_{10}[\text{H}^+]$; dose–response and LD$_{50}$ comparisons.
- Percent change, per-capita rates, and unit conversions (kWh, J, ppm as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Earth-systems models, human impacts, and CED quantitative skills.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Closed population when migration is excluded from the prompt.
- Steady-state trophic transfer percentages are illustrative, not exact laws.
- Pollution models assume stated source, medium, and exposure route.
- Global cycles diagrams represent net fluxes over the time scale named.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 6: Energy Resources And Consumption** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- NPP is lower than GPP because autotroph respiration removes energy from gross production.
- The policy reduces point-source loading but not nonpoint runoff unless additional controls are named.
- A lower LD$_{50}$ indicates higher acute toxicity for the tested species and route.
- The tragedy of the commons arises because marginal private benefit exceeds marginal social cost.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 6: Energy Resources And Consumption** to neighboring ideas on the same exam.

- Biogeochemical cycles ↔ pollution sources and remediation choices.
- Energy units ↔ climate forcing and resource comparisons.
- Population models ↔ land use and carrying capacity debates.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Earth-systems models, human impacts, and CED quantitative skills but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Environmental Science', 'Unit 7: Atmospheric Pollution'): r"""## Exam Application Lab

Focus topic: **Unit 7: Atmospheric Pollution** (AP Environmental Science).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 7: Atmospheric Pollution** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 7: Atmospheric Pollution** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Population: density, growth rate, doubling time $T\approx 70/r$.
- Energy: efficiency $\eta=E_{\text{out}}/E_{\text{in}}$; power–energy $E=Pt$.
- Productivity: $\text{NPP}=\text{GPP}-R$; trophic transfer often $\sim 10\%$ model.
- pH: $\text{pH}=-\log_{10}[\text{H}^+]$; dose–response and LD$_{50}$ comparisons.
- Percent change, per-capita rates, and unit conversions (kWh, J, ppm as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Earth-systems models, human impacts, and CED quantitative skills.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Closed population when migration is excluded from the prompt.
- Steady-state trophic transfer percentages are illustrative, not exact laws.
- Pollution models assume stated source, medium, and exposure route.
- Global cycles diagrams represent net fluxes over the time scale named.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 7: Atmospheric Pollution** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- NPP is lower than GPP because autotroph respiration removes energy from gross production.
- The policy reduces point-source loading but not nonpoint runoff unless additional controls are named.
- A lower LD$_{50}$ indicates higher acute toxicity for the tested species and route.
- The tragedy of the commons arises because marginal private benefit exceeds marginal social cost.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 7: Atmospheric Pollution** to neighboring ideas on the same exam.

- Biogeochemical cycles ↔ pollution sources and remediation choices.
- Energy units ↔ climate forcing and resource comparisons.
- Population models ↔ land use and carrying capacity debates.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Earth-systems models, human impacts, and CED quantitative skills but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Environmental Science', 'Unit 8: Aquatic And Terrestrial Pollution'): r"""## Exam Application Lab

Focus topic: **Unit 8: Aquatic And Terrestrial Pollution** (AP Environmental Science).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 8: Aquatic And Terrestrial Pollution** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 8: Aquatic And Terrestrial Pollution** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Population: density, growth rate, doubling time $T\approx 70/r$.
- Energy: efficiency $\eta=E_{\text{out}}/E_{\text{in}}$; power–energy $E=Pt$.
- Productivity: $\text{NPP}=\text{GPP}-R$; trophic transfer often $\sim 10\%$ model.
- pH: $\text{pH}=-\log_{10}[\text{H}^+]$; dose–response and LD$_{50}$ comparisons.
- Percent change, per-capita rates, and unit conversions (kWh, J, ppm as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Earth-systems models, human impacts, and CED quantitative skills.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Closed population when migration is excluded from the prompt.
- Steady-state trophic transfer percentages are illustrative, not exact laws.
- Pollution models assume stated source, medium, and exposure route.
- Global cycles diagrams represent net fluxes over the time scale named.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 8: Aquatic And Terrestrial Pollution** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- NPP is lower than GPP because autotroph respiration removes energy from gross production.
- The policy reduces point-source loading but not nonpoint runoff unless additional controls are named.
- A lower LD$_{50}$ indicates higher acute toxicity for the tested species and route.
- The tragedy of the commons arises because marginal private benefit exceeds marginal social cost.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 8: Aquatic And Terrestrial Pollution** to neighboring ideas on the same exam.

- Biogeochemical cycles ↔ pollution sources and remediation choices.
- Energy units ↔ climate forcing and resource comparisons.
- Population models ↔ land use and carrying capacity debates.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Earth-systems models, human impacts, and CED quantitative skills but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Environmental Science', 'Unit 9: Global Change'): r"""## Exam Application Lab

Focus topic: **Unit 9: Global Change** (AP Environmental Science).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 9: Global Change** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 9: Global Change** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Population: density, growth rate, doubling time $T\approx 70/r$.
- Energy: efficiency $\eta=E_{\text{out}}/E_{\text{in}}$; power–energy $E=Pt$.
- Productivity: $\text{NPP}=\text{GPP}-R$; trophic transfer often $\sim 10\%$ model.
- pH: $\text{pH}=-\log_{10}[\text{H}^+]$; dose–response and LD$_{50}$ comparisons.
- Percent change, per-capita rates, and unit conversions (kWh, J, ppm as given).

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Earth-systems models, human impacts, and CED quantitative skills.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Closed population when migration is excluded from the prompt.
- Steady-state trophic transfer percentages are illustrative, not exact laws.
- Pollution models assume stated source, medium, and exposure route.
- Global cycles diagrams represent net fluxes over the time scale named.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 9: Global Change** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- NPP is lower than GPP because autotroph respiration removes energy from gross production.
- The policy reduces point-source loading but not nonpoint runoff unless additional controls are named.
- A lower LD$_{50}$ indicates higher acute toxicity for the tested species and route.
- The tragedy of the commons arises because marginal private benefit exceeds marginal social cost.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 9: Global Change** to neighboring ideas on the same exam.

- Biogeochemical cycles ↔ pollution sources and remediation choices.
- Energy units ↔ climate forcing and resource comparisons.
- Population models ↔ land use and carrying capacity debates.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Earth-systems models, human impacts, and CED quantitative skills but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Calculus AB/BC', 'Differential Equations'): r"""## Exam Application Lab

Focus topic: **Differential Equations** (AP Calculus AB/BC).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Differential Equations** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Differential Equations** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Limit laws and continuity: $\lim_{x\to a} f(x)=L$; removable vs infinite discontinuities.
- Derivative rules: power, product, quotient, chain; implicit differentiation.
- Mean Value Theorem: $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ when hypotheses hold.
- Integrals: $\int f(x)\,dx$, FTC $\int_a^b f'(x)\,dx=f(b)-f(a)$.
- Area/volume: disk/washer/shell; arc length and BC polar/vector derivatives as needed.
- Series (BC): geometric, $p$-series, ratio/root, Taylor with Lagrange remainder.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to limits, derivatives, integrals, or series as appropriate to the unit.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Differentiability on an open interval when applying MVT or optimization.
- Convergence hypotheses stated before interchanging limit and integral (series).
- Correct variable of integration and bounds for area/volume setups.
- Radians vs degrees consistent with the problem statement.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Differential Equations** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- By the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$ with $u$ defined.
- The function has a local maximum at $x=c$ because $f'$ changes from positive to negative.
- The definite integral represents net accumulation over the stated interval.
- The series converges by the ratio test because $\lim |a_{n+1}/a_n|<1$.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Differential Equations** to neighboring ideas on the same exam.

- Limits ↔ continuity and differentiability definitions.
- Derivatives ↔ motion (velocity/acceleration) and related rates.
- Integrals ↔ Riemann sums and differential equations for growth/decay.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require limits, derivatives, integrals, or series as appropriate to the unit but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Statistics', 'Exploring One-Variable Data'): r"""## Exam Application Lab

Focus topic: **Exploring One-Variable Data** (AP Statistics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Exploring One-Variable Data** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Exploring One-Variable Data** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- One-variable summaries: mean, SD, quartiles, z-scores $z=\dfrac{x-\mu}{\sigma}$.
- Regression: least-squares line, $r$, $r^2$, residual $=$ observed $-$ predicted.
- Binomial: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$; mean $\mu=np$, SD $\sigma=\sqrt{np(1-p)}$.
- Normal models and CLT when conditions support them.
- Inference: $z$ and $t$ statistics; CI = estimate $\pm$ critical $\times$ SE.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ for GOF, homogeneity, independence.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to data production, probability models, and inference with conditions.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random sample or random assignment as stated in the prompt.
- Independence (10% rule or replacement) for sampling without replacement.
- Large counts / Normal condition / expected counts for the chosen procedure.
- Linear relationship for inference on slope when using regression tools.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Exploring One-Variable Data** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- We use a one-sample $t$ interval because $\sigma$ is unknown and the random sample condition is met.
- Because the $P$-value is less than $\alpha$, we reject $H_0$ and conclude in context.
- The interval does not contain the hypothesized value, consistent with rejecting $H_0$ at this level.
- Expected counts are all at least 5, so the chi-square procedure is appropriate.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Exploring One-Variable Data** to neighboring ideas on the same exam.

- Sampling design ↔ scope of inference (population vs causal).
- Probability models ↔ inference formulas (same parameter, different stage).
- Regression residuals ↔ checking linearity before inference on slope.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require data production, probability models, and inference with conditions but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Statistics', 'Data Collection, Sampling, and Experiments'): r"""## Exam Application Lab

Focus topic: **Data Collection, Sampling, and Experiments** (AP Statistics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Data Collection, Sampling, and Experiments** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Data Collection, Sampling, and Experiments** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- One-variable summaries: mean, SD, quartiles, z-scores $z=\dfrac{x-\mu}{\sigma}$.
- Regression: least-squares line, $r$, $r^2$, residual $=$ observed $-$ predicted.
- Binomial: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$; mean $\mu=np$, SD $\sigma=\sqrt{np(1-p)}$.
- Normal models and CLT when conditions support them.
- Inference: $z$ and $t$ statistics; CI = estimate $\pm$ critical $\times$ SE.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ for GOF, homogeneity, independence.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to data production, probability models, and inference with conditions.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random sample or random assignment as stated in the prompt.
- Independence (10% rule or replacement) for sampling without replacement.
- Large counts / Normal condition / expected counts for the chosen procedure.
- Linear relationship for inference on slope when using regression tools.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Data Collection, Sampling, and Experiments** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- We use a one-sample $t$ interval because $\sigma$ is unknown and the random sample condition is met.
- Because the $P$-value is less than $\alpha$, we reject $H_0$ and conclude in context.
- The interval does not contain the hypothesized value, consistent with rejecting $H_0$ at this level.
- Expected counts are all at least 5, so the chi-square procedure is appropriate.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Data Collection, Sampling, and Experiments** to neighboring ideas on the same exam.

- Sampling design ↔ scope of inference (population vs causal).
- Probability models ↔ inference formulas (same parameter, different stage).
- Regression residuals ↔ checking linearity before inference on slope.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require data production, probability models, and inference with conditions but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Statistics', 'Geometric Distribution'): r"""## Exam Application Lab

Focus topic: **Geometric Distribution** (AP Statistics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Geometric Distribution** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Geometric Distribution** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- One-variable summaries: mean, SD, quartiles, z-scores $z=\dfrac{x-\mu}{\sigma}$.
- Regression: least-squares line, $r$, $r^2$, residual $=$ observed $-$ predicted.
- Binomial: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$; mean $\mu=np$, SD $\sigma=\sqrt{np(1-p)}$.
- Normal models and CLT when conditions support them.
- Inference: $z$ and $t$ statistics; CI = estimate $\pm$ critical $\times$ SE.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ for GOF, homogeneity, independence.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to data production, probability models, and inference with conditions.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random sample or random assignment as stated in the prompt.
- Independence (10% rule or replacement) for sampling without replacement.
- Large counts / Normal condition / expected counts for the chosen procedure.
- Linear relationship for inference on slope when using regression tools.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Geometric Distribution** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- We use a one-sample $t$ interval because $\sigma$ is unknown and the random sample condition is met.
- Because the $P$-value is less than $\alpha$, we reject $H_0$ and conclude in context.
- The interval does not contain the hypothesized value, consistent with rejecting $H_0$ at this level.
- Expected counts are all at least 5, so the chi-square procedure is appropriate.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Geometric Distribution** to neighboring ideas on the same exam.

- Sampling design ↔ scope of inference (population vs causal).
- Probability models ↔ inference formulas (same parameter, different stage).
- Regression residuals ↔ checking linearity before inference on slope.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require data production, probability models, and inference with conditions but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Statistics', 'Chi-Square Goodness of Fit'): r"""## Exam Application Lab

Focus topic: **Chi-Square Goodness of Fit** (AP Statistics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Chi-Square Goodness of Fit** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Chi-Square Goodness of Fit** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- One-variable summaries: mean, SD, quartiles, z-scores $z=\dfrac{x-\mu}{\sigma}$.
- Regression: least-squares line, $r$, $r^2$, residual $=$ observed $-$ predicted.
- Binomial: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$; mean $\mu=np$, SD $\sigma=\sqrt{np(1-p)}$.
- Normal models and CLT when conditions support them.
- Inference: $z$ and $t$ statistics; CI = estimate $\pm$ critical $\times$ SE.
- Chi-square: $\chi^2=\sum(O-E)^2/E$ for GOF, homogeneity, independence.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to data production, probability models, and inference with conditions.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Random sample or random assignment as stated in the prompt.
- Independence (10% rule or replacement) for sampling without replacement.
- Large counts / Normal condition / expected counts for the chosen procedure.
- Linear relationship for inference on slope when using regression tools.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Chi-Square Goodness of Fit** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- We use a one-sample $t$ interval because $\sigma$ is unknown and the random sample condition is met.
- Because the $P$-value is less than $\alpha$, we reject $H_0$ and conclude in context.
- The interval does not contain the hypothesized value, consistent with rejecting $H_0$ at this level.
- Expected counts are all at least 5, so the chi-square procedure is appropriate.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Chi-Square Goodness of Fit** to neighboring ideas on the same exam.

- Sampling design ↔ scope of inference (population vs causal).
- Probability models ↔ inference formulas (same parameter, different stage).
- Regression residuals ↔ checking linearity before inference on slope.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require data production, probability models, and inference with conditions but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science A', 'Using Objects and Methods'): r"""## Exam Application Lab

Focus topic: **Using Objects and Methods** (AP Computer Science A).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Using Objects and Methods** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Using Objects and Methods** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Array traversal: index $0 \le i < \texttt{a.length}$.
- Nested loop visit counts: outer $\times$ inner iterations for typical bounds.
- String methods: immutability; substring, indexOf, compareTo semantics.
- ArrayList: size() vs capacity; add, remove, indexed access.
- Recursion: base case + progress toward base; call-stack depth.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Java tracing, object behavior, and algorithm correctness.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- References vs primitives: assignment copies reference for objects.
- No null dereference unless the prompt tests error awareness.
- Integer overflow not tested unless explicitly in scope.
- Standard AP Java subset—no advanced libraries beyond the reference sheet.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Using Objects and Methods** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The loop executes while i < arr.length, so the final value of i is arr.length.
- toUpperCase returns a new String; the original reference is unchanged unless reassigned.
- The method returns the accumulated sum because the base case returns 0 and each call adds the next term.
- The ArrayList size decreases by 1 after remove(0).

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Using Objects and Methods** to neighboring ideas on the same exam.

- Selection/iteration ↔ array and ArrayList traversals.
- Class design ↔ encapsulation and method contracts.
- Algorithms ↔ counting operations and informal Big-O comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Java tracing, object behavior, and algorithm correctness but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science A', 'Class Creation'): r"""## Exam Application Lab

Focus topic: **Class Creation** (AP Computer Science A).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Class Creation** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Class Creation** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Array traversal: index $0 \le i < \texttt{a.length}$.
- Nested loop visit counts: outer $\times$ inner iterations for typical bounds.
- String methods: immutability; substring, indexOf, compareTo semantics.
- ArrayList: size() vs capacity; add, remove, indexed access.
- Recursion: base case + progress toward base; call-stack depth.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Java tracing, object behavior, and algorithm correctness.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- References vs primitives: assignment copies reference for objects.
- No null dereference unless the prompt tests error awareness.
- Integer overflow not tested unless explicitly in scope.
- Standard AP Java subset—no advanced libraries beyond the reference sheet.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Class Creation** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The loop executes while i < arr.length, so the final value of i is arr.length.
- toUpperCase returns a new String; the original reference is unchanged unless reassigned.
- The method returns the accumulated sum because the base case returns 0 and each call adds the next term.
- The ArrayList size decreases by 1 after remove(0).

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Class Creation** to neighboring ideas on the same exam.

- Selection/iteration ↔ array and ArrayList traversals.
- Class design ↔ encapsulation and method contracts.
- Algorithms ↔ counting operations and informal Big-O comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Java tracing, object behavior, and algorithm correctness but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science A', 'High-Frequency Algorithms and Error Checks'): r"""## Exam Application Lab

Focus topic: **High-Frequency Algorithms and Error Checks** (AP Computer Science A).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **High-Frequency Algorithms and Error Checks** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **High-Frequency Algorithms and Error Checks** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Array traversal: index $0 \le i < \texttt{a.length}$.
- Nested loop visit counts: outer $\times$ inner iterations for typical bounds.
- String methods: immutability; substring, indexOf, compareTo semantics.
- ArrayList: size() vs capacity; add, remove, indexed access.
- Recursion: base case + progress toward base; call-stack depth.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Java tracing, object behavior, and algorithm correctness.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- References vs primitives: assignment copies reference for objects.
- No null dereference unless the prompt tests error awareness.
- Integer overflow not tested unless explicitly in scope.
- Standard AP Java subset—no advanced libraries beyond the reference sheet.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **High-Frequency Algorithms and Error Checks** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The loop executes while i < arr.length, so the final value of i is arr.length.
- toUpperCase returns a new String; the original reference is unchanged unless reassigned.
- The method returns the accumulated sum because the base case returns 0 and each call adds the next term.
- The ArrayList size decreases by 1 after remove(0).

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **High-Frequency Algorithms and Error Checks** to neighboring ideas on the same exam.

- Selection/iteration ↔ array and ArrayList traversals.
- Class design ↔ encapsulation and method contracts.
- Algorithms ↔ counting operations and informal Big-O comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Java tracing, object behavior, and algorithm correctness but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Macroeconomics', 'Basic Macroeconomic Concepts'): r"""## Exam Application Lab

Focus topic: **Basic Macroeconomic Concepts** (AP Macroeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Basic Macroeconomic Concepts** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Basic Macroeconomic Concepts** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- GDP components: $Y=C+I+G+X_n$; real vs nominal with GDP deflator.
- Unemployment: labor force participation; types (frictional, structural, cyclical).
- Multipliers: $k=1/(1-\text{MPC})$; tax multiplier $-\text{MPC}/\text{MPS}$.
- Money market: demand/supply of money and interest rate; $MV=PY$ identity.
- Phillips curve tradeoffs short run vs long run at $Y_f$.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to national income, price level, money, and policy in AD–AS and financial markets.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Short-run sticky wages/prices unless the prompt specifies long-run Classical adjustment.
- Ceteris paribus when shifting one curve at a time on AD–AS.
- Banking multiplier models assume required reserve ratio and no currency drain unless stated.
- Open-economy problems name exchange-rate regime (flexible vs fixed) when relevant.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Basic Macroeconomic Concepts** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Expansionary fiscal policy shifts AD right, increasing real GDP and price level in the short run.
- An increase in the money supply lowers the nominal interest rate, increasing investment and AD.
- In the long run, the economy returns to $Y_f$ as nominal wages adjust.
- Crowding out partially offsets fiscal stimulus when higher $r$ reduces investment.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Basic Macroeconomic Concepts** to neighboring ideas on the same exam.

- Business cycle indicators ↔ AD shocks and policy responses.
- Financial sector ↔ money creation and interest-sensitive $I$.
- Open economy ↔ net exports and capital flows on AD.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require national income, price level, money, and policy in AD–AS and financial markets but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Macroeconomics', 'Economic Indicators and the Business Cycle'): r"""## Exam Application Lab

Focus topic: **Economic Indicators and the Business Cycle** (AP Macroeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Economic Indicators and the Business Cycle** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Economic Indicators and the Business Cycle** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- GDP components: $Y=C+I+G+X_n$; real vs nominal with GDP deflator.
- Unemployment: labor force participation; types (frictional, structural, cyclical).
- Multipliers: $k=1/(1-\text{MPC})$; tax multiplier $-\text{MPC}/\text{MPS}$.
- Money market: demand/supply of money and interest rate; $MV=PY$ identity.
- Phillips curve tradeoffs short run vs long run at $Y_f$.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to national income, price level, money, and policy in AD–AS and financial markets.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Short-run sticky wages/prices unless the prompt specifies long-run Classical adjustment.
- Ceteris paribus when shifting one curve at a time on AD–AS.
- Banking multiplier models assume required reserve ratio and no currency drain unless stated.
- Open-economy problems name exchange-rate regime (flexible vs fixed) when relevant.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Economic Indicators and the Business Cycle** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Expansionary fiscal policy shifts AD right, increasing real GDP and price level in the short run.
- An increase in the money supply lowers the nominal interest rate, increasing investment and AD.
- In the long run, the economy returns to $Y_f$ as nominal wages adjust.
- Crowding out partially offsets fiscal stimulus when higher $r$ reduces investment.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Economic Indicators and the Business Cycle** to neighboring ideas on the same exam.

- Business cycle indicators ↔ AD shocks and policy responses.
- Financial sector ↔ money creation and interest-sensitive $I$.
- Open economy ↔ net exports and capital flows on AD.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require national income, price level, money, and policy in AD–AS and financial markets but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Macroeconomics', 'National Income, AD–AS, and Fiscal Multipliers'): r"""## Exam Application Lab

Focus topic: **National Income, AD–AS, and Fiscal Multipliers** (AP Macroeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **National Income, AD–AS, and Fiscal Multipliers** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **National Income, AD–AS, and Fiscal Multipliers** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- GDP components: $Y=C+I+G+X_n$; real vs nominal with GDP deflator.
- Unemployment: labor force participation; types (frictional, structural, cyclical).
- Multipliers: $k=1/(1-\text{MPC})$; tax multiplier $-\text{MPC}/\text{MPS}$.
- Money market: demand/supply of money and interest rate; $MV=PY$ identity.
- Phillips curve tradeoffs short run vs long run at $Y_f$.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to national income, price level, money, and policy in AD–AS and financial markets.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Short-run sticky wages/prices unless the prompt specifies long-run Classical adjustment.
- Ceteris paribus when shifting one curve at a time on AD–AS.
- Banking multiplier models assume required reserve ratio and no currency drain unless stated.
- Open-economy problems name exchange-rate regime (flexible vs fixed) when relevant.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **National Income, AD–AS, and Fiscal Multipliers** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Expansionary fiscal policy shifts AD right, increasing real GDP and price level in the short run.
- An increase in the money supply lowers the nominal interest rate, increasing investment and AD.
- In the long run, the economy returns to $Y_f$ as nominal wages adjust.
- Crowding out partially offsets fiscal stimulus when higher $r$ reduces investment.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **National Income, AD–AS, and Fiscal Multipliers** to neighboring ideas on the same exam.

- Business cycle indicators ↔ AD shocks and policy responses.
- Financial sector ↔ money creation and interest-sensitive $I$.
- Open economy ↔ net exports and capital flows on AD.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require national income, price level, money, and policy in AD–AS and financial markets but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Macroeconomics', 'AP Macroeconomics — Units 1–3'): r"""## Exam Application Lab

Focus topic: **AP Macroeconomics — Units 1–3** (AP Macroeconomics).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **AP Macroeconomics — Units 1–3** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **AP Macroeconomics — Units 1–3** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- GDP components: $Y=C+I+G+X_n$; real vs nominal with GDP deflator.
- Unemployment: labor force participation; types (frictional, structural, cyclical).
- Multipliers: $k=1/(1-\text{MPC})$; tax multiplier $-\text{MPC}/\text{MPS}$.
- Money market: demand/supply of money and interest rate; $MV=PY$ identity.
- Phillips curve tradeoffs short run vs long run at $Y_f$.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to national income, price level, money, and policy in AD–AS and financial markets.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Short-run sticky wages/prices unless the prompt specifies long-run Classical adjustment.
- Ceteris paribus when shifting one curve at a time on AD–AS.
- Banking multiplier models assume required reserve ratio and no currency drain unless stated.
- Open-economy problems name exchange-rate regime (flexible vs fixed) when relevant.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **AP Macroeconomics — Units 1–3** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Expansionary fiscal policy shifts AD right, increasing real GDP and price level in the short run.
- An increase in the money supply lowers the nominal interest rate, increasing investment and AD.
- In the long run, the economy returns to $Y_f$ as nominal wages adjust.
- Crowding out partially offsets fiscal stimulus when higher $r$ reduces investment.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **AP Macroeconomics — Units 1–3** to neighboring ideas on the same exam.

- Business cycle indicators ↔ AD shocks and policy responses.
- Financial sector ↔ money creation and interest-sensitive $I$.
- Open economy ↔ net exports and capital flows on AD.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require national income, price level, money, and policy in AD–AS and financial markets but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Computer Science A', 'Unit 3: Class Creation'): r"""## Exam Application Lab

Focus topic: **Unit 3: Class Creation** (AP Computer Science A).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 3: Class Creation** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 3: Class Creation** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Array traversal: index $0 \le i < \texttt{a.length}$.
- Nested loop visit counts: outer $\times$ inner iterations for typical bounds.
- String methods: immutability; substring, indexOf, compareTo semantics.
- ArrayList: size() vs capacity; add, remove, indexed access.
- Recursion: base case + progress toward base; call-stack depth.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to Java tracing, object behavior, and algorithm correctness.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- References vs primitives: assignment copies reference for objects.
- No null dereference unless the prompt tests error awareness.
- Integer overflow not tested unless explicitly in scope.
- Standard AP Java subset—no advanced libraries beyond the reference sheet.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 3: Class Creation** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- The loop executes while i < arr.length, so the final value of i is arr.length.
- toUpperCase returns a new String; the original reference is unchanged unless reassigned.
- The method returns the accumulated sum because the base case returns 0 and each call adds the next term.
- The ArrayList size decreases by 1 after remove(0).

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 3: Class Creation** to neighboring ideas on the same exam.

- Selection/iteration ↔ array and ArrayList traversals.
- Class design ↔ encapsulation and method contracts.
- Algorithms ↔ counting operations and informal Big-O comparisons.

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require Java tracing, object behavior, and algorithm correctness but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Chemistry', 'Unit 6: Thermodynamics (Enthalpy Focus)'): r"""## Exam Application Lab

Focus topic: **Unit 6: Thermodynamics (Enthalpy Focus)** (AP Chemistry).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 6: Thermodynamics (Enthalpy Focus)** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 6: Thermodynamics (Enthalpy Focus)** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Moles: $n=m/M$; solutions $M=\dfrac{n_{\text{solute}}}{V_{\text{L}}}$.
- Gas laws: $PV=nRT$; partial pressures and mole fractions when mixed.
- Rate laws: $\text{rate}=k[A]^m[B]^n$ from experimental orders.
- Equilibrium: $K=\dfrac{[\text{products}]}{[\text{reactants}]}$ with ICE tables; $Q$ vs $K$.
- Thermochemistry: $q=mc\Delta T$; $\Delta G=\Delta H-T\Delta S$; electrochemistry $E^\circ_{\text{cell}}$.
- Acids: $K_a$, pH, Henderson–Hasselbalch for buffers when valid.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to particle-level reasoning linked to stoichiometry, equilibrium, or kinetics.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Ideal gas behavior unless real-gas caveats are specified.
- Activity ≈ concentration for dilute aqueous species in $K$ expressions.
- Temperature constant when comparing $K$, $Q$, or rate constants.
- Spectator ions omitted; net ionic equations balanced for charge and atoms.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 6: Thermodynamics (Enthalpy Focus)** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because $Q>K$, the reaction shifts toward reactants to re-establish equilibrium.
- The rate doubles when $[A]$ doubles with other concentrations fixed, so the reaction is first order in $A$.
- $\Delta G<0$ under standard conditions, so the forward process is thermodynamically favored.
- Oxidation occurs at the anode; electrons flow through the external circuit from anode to cathode.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 6: Thermodynamics (Enthalpy Focus)** to neighboring ideas on the same exam.

- Atomic structure (Unit 1) ↔ bonding and IMF explanations in Unit 2.
- Stoichiometry (Unit 4) ↔ equilibrium mole ratios in Unit 7.
- Thermochemistry (Unit 6) ↔ electrochemical cell potential (Unit 9).

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require particle-level reasoning linked to stoichiometry, equilibrium, or kinetics but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
    ('AP Chemistry', 'Unit 8: Acids and Bases'): r"""## Exam Application Lab

Focus topic: **Unit 8: Acids and Bases** (AP Chemistry).

This lab trains you to turn course models into exam-ready reasoning: name the structure, state assumptions, execute the formula or logic sequence, and interpret results in context—not as isolated calculations.

## 1. Prompt shapes you will see

- **Multi-part FRQ:** Apply core models from **Unit 8: Acids and Bases** across two linked parts (setup + interpretation).
- **Quantitative / symbolic:** Show a full symbolic setup before numeric substitution.
- **Conceptual MCQ:** Eliminate distractors by naming a violated assumption.
- **Compare representations:** Move between graph, table, and equation for the same phenomenon.
- **Experimental or policy:** Identify control group, independent variable, or policy lever.
- **Transfer:** Answer a short prompt that combines **Unit 8: Acids and Bases** with an adjacent unit idea.

For each shape, sketch a one-line **given / find / model** header before writing. AP readers reward explicit procedure naming even when arithmetic is imperfect.

## 2. Formula and model sequence

Execute in order; substitute only after the symbolic skeleton is written.

- Moles: $n=m/M$; solutions $M=\dfrac{n_{\text{solute}}}{V_{\text{L}}}$.
- Gas laws: $PV=nRT$; partial pressures and mole fractions when mixed.
- Rate laws: $\text{rate}=k[A]^m[B]^n$ from experimental orders.
- Equilibrium: $K=\dfrac{[\text{products}]}{[\text{reactants}]}$ with ICE tables; $Q$ vs $K$.
- Thermochemistry: $q=mc\Delta T$; $\Delta G=\Delta H-T\Delta S$; electrochemistry $E^\circ_{\text{cell}}$.
- Acids: $K_a$, pH, Henderson–Hasselbalch for buffers when valid.

**Sequence discipline:** (1) identify variables and units, (2) select the governing relationship, (3) solve symbolically if time permits, (4) plug in values, (5) sanity-check magnitude and sign, (6) one-sentence interpretation tied to particle-level reasoning linked to stoichiometry, equilibrium, or kinetics.

## 3. Assumptions and limits

Every model below is conditional. State what must hold for your answer to apply.

- Ideal gas behavior unless real-gas caveats are specified.
- Activity ≈ concentration for dilute aqueous species in $K$ expressions.
- Temperature constant when comparing $K$, $Q$, or rate constants.
- Spectator ions omitted; net ionic equations balanced for charge and atoms.

When an assumption fails, say **qualitatively** what changes (direction of shift, over- vs underestimate, which inference is weakened). That single sentence often earns the last point on a multi-part FRQ.

## 4. Mini original scenario

A timed practice item asks you to explain one mechanism from **Unit 8: Acids and Bases** using evidence from a diagram you sketch. **Model:** state the governing relationship from section 2. **Setup:** list given quantities with units. **Result:** solve or trace to a conclusion. **Interpret:** one sentence using scoring language from section 5, explicitly naming how the result answers the question asked—not a restatement of the givens.

Work this scenario in four lines: **Model**, **Setup**, **Result**, **Interpret**. Keep numbers simple; prioritize clear linkage between representation and conclusion.

## 5. Scoring language

Use AP-style phrasing so your answers read like rubric bullets.

- Because $Q>K$, the reaction shifts toward reactants to re-establish equilibrium.
- The rate doubles when $[A]$ doubles with other concentrations fixed, so the reaction is first order in $A$.
- $\Delta G<0$ under standard conditions, so the forward process is thermodynamically favored.
- Oxidation occurs at the anode; electrons flow through the external circuit from anode to cathode.

Avoid vague trend words without naming the variable; avoid "proves" in statistics and genetics—prefer **consistent with**, **suggests**, **fails to reject**.

## 6. Transfer

Connect **Unit 8: Acids and Bases** to neighboring ideas on the same exam.

- Atomic structure (Unit 1) ↔ bonding and IMF explanations in Unit 2.
- Stoichiometry (Unit 4) ↔ equilibrium mole ratios in Unit 7.
- Thermochemistry (Unit 6) ↔ electrochemical cell potential (Unit 9).

**Mixed review drill:** write one multiple-choice stem and one four-point FRQ outline that both require particle-level reasoning linked to stoichiometry, equilibrium, or kinetics but from different prompt shapes in section 1. Swap with a peer and grade against the scoring bullets above.

**Closing audit (no notes):** define the core model in one sentence; list two assumptions; execute one symbolic setup from section 2; explain your mini-scenario result; name one transfer link. If any step stalls, that gap is your next spaced-repetition target before timed practice.""",
}
