import type { Questionnaire, QuestionnaireItem } from "@/lib/types";

/**
 * Batch 5 is intentionally generated from legacy IDs rather than legacy answer hints.
 * We only select severe candidates (missing a defensible answer or structurally shallow
 * constructed response), preserve the historical ID for traceability, and replace the
 * entire assessment task with an original, self-contained skill drill.
 */

const SUPPORTED = /Physics|Calculus|Statistics|Chemistry|Biology|Environmental|Economics|Psychology|Computer Science/i;

function words(text?: string) {
  return (text || "").trim().split(/\s+/).filter(Boolean).length;
}

function hasLegacyAnswer(item: QuestionnaireItem) {
  if (item.answerKey?.trim()) return true;
  if (item.blankAnswers?.some((x) => x.trim())) return true;
  if (item.format === "mcq") {
    return Boolean(item.choices?.length && Number.isInteger(item.mcqAnswer) && Number(item.mcqAnswer) >= 0 && Number(item.mcqAnswer) < item.choices.length);
  }
  return false;
}

function severe(item: QuestionnaireItem) {
  if (!hasLegacyAnswer(item)) return true;
  if (item.format !== "mcq" && (words(`${item.stimulus || ""} ${item.prompt}`) < 35 || !item.scoringGuide?.length)) return true;
  if (item.format === "mcq" && (!item.choices || item.choices.length !== 4 || words(`${item.stimulus || ""} ${item.prompt}`) < 18)) return true;
  return false;
}

function drill(
  id: string,
  conceptIntro: string,
  prompt: string,
  answerKey: string,
  rationale: string,
  scoringGuide: string[],
  hints: string[]
): QuestionnaireItem {
  return {
    id,
    format: "frq_half",
    conceptIntro,
    authenticity: "skill_drill",
    responseMode: "extended_response",
    difficultyTier: 3,
    prompt,
    answerKey,
    rationale,
    scoringGuide,
    hints,
    examSection: "Constructed-response skill drill · evidence, calculation, and misconception check",
  };
}

function stats(id: string, n: number): QuestionnaireItem {
  const v = n % 8;
  if (v === 0) {
    const sample = 200 + 20 * (n % 5);
    const yes = Math.round(sample * 0.55);
    const phat = yes / sample;
    const se = Math.sqrt(phat * (1 - phat) / sample);
    const me = 1.96 * se;
    return drill(id, "Statistics · one-proportion inference with conditions and interpretation",
      `A city surveys a simple random sample of ${sample} registered voters; ${yes} support a proposed transit levy. (a) Compute the sample proportion and verify the large-count condition for a one-proportion z interval. (b) Construct an approximate 95% confidence interval using z*=1.96. (c) Interpret the interval in context without assigning a probability to the fixed population parameter. (d) A student says, “95% of voters have opinions inside this interval.” Diagnose the error.`,
      `(a) p-hat=${phat.toFixed(3)}; successes=${yes} and failures=${sample - yes}, both at least 10. (b) SE=sqrt[p-hat(1-p-hat)/n]=${se.toFixed(4)} and ME≈${me.toFixed(3)}, so the interval is approximately (${(phat-me).toFixed(3)}, ${(phat+me).toFixed(3)}). (c) We are 95% confident the true proportion of registered voters in the city who support the levy lies in this interval. (d) The interval estimates one population proportion; it is not a range containing 95% of individual voters or opinions.`,
      "The task requires computation, condition checking, contextual interpretation, and rejection of a common individual-level confidence-interval misconception.",
      ["1 point: correct p-hat and large-count check.", "1 point: correct standard error, margin of error, and interval.", "1 point: correct population-parameter interpretation.", "1 point: explicitly rejects the individual-voter interpretation."],
      ["Use p-hat, not 0.50, in the interval standard error.", "A confidence interval is about a population parameter, not individual observations."]);
  }
  if (v === 1) {
    const nn = 80 + 10 * (n % 4);
    const mean = 51 + (n % 3);
    const sd = 10;
    const mu0 = 50;
    const t = (mean - mu0) / (sd / Math.sqrt(nn));
    return drill(id, "Statistics · one-sample significance test, p-value logic, and error interpretation",
      `A manufacturer advertises a mean battery life of ${mu0} hours. An independent random sample of ${nn} batteries has mean ${mean} hours and standard deviation ${sd} hours. Test H0: μ=${mu0} against Ha: μ>${mu0}. (a) State the parameter and check the independence/large-sample justification. (b) Compute the one-sample t statistic. (c) Explain what a small one-sided p-value would mean in context and give the decision at α=0.05 if p<0.05. (d) Describe a Type I error in context.`,
      `(a) μ is the true mean life of this battery model; a random independent sample and n=${nn} large support the t procedure. (b) t=(${mean}-${mu0})/(${sd}/sqrt(${nn}))≈${t.toFixed(2)}. (c) A small p-value means results at least this favorable to a mean above ${mu0} would be unlikely if μ=${mu0}; if p<0.05, reject H0 in favor of evidence that μ>${mu0}. (d) A Type I error is concluding the true mean exceeds ${mu0} hours when in fact it equals ${mu0} hours.`,
      "Students must connect the numerical statistic to conditional p-value reasoning and distinguish evidence from proof.",
      ["1 point: parameter and procedure justification.", "1 point: correct t statistic.", "1 point: correct conditional p-value meaning and decision rule.", "1 point: Type I error stated in context."],
      ["The p-value is computed assuming H0 is true.", "Type I error means rejecting a true null."]);
  }
  if (v === 2) {
    const p = 0.30 + 0.05 * (n % 3);
    const nn = 12;
    const mean = nn * p;
    const sd = Math.sqrt(nn * p * (1 - p));
    return drill(id, "Statistics · binomial model, expected value, variability, and boundary conditions",
      `For each of ${nn} independently selected seedlings, the probability of germinating within three days is ${p.toFixed(2)}. Let X be the number that germinate. (a) Explain why a binomial model is appropriate. (b) Compute E(X) and SD(X). (c) Write, without evaluating, an exact expression for P(X≥5). (d) Explain why the same binomial calculation would be questionable if all ${nn} seedlings came from one tray exposed to the same fungal outbreak.`,
      `(a) There is a fixed number ${nn} of trials, two outcomes per seedling, constant success probability ${p.toFixed(2)}, and independence is assumed. (b) E(X)=np=${mean.toFixed(2)} and SD(X)=sqrt[np(1-p)]=${sd.toFixed(3)}. (c) P(X≥5)=Σ from k=5 to ${nn} of C(${nn},k)(${p.toFixed(2)})^k(${(1-p).toFixed(2)})^(${nn}-k). (d) A shared fungal exposure can make outcomes dependent and can change success probabilities, violating binomial conditions.`,
      "The boundary-condition part tests whether the student knows when a memorized probability model stops applying.",
      ["1 point: all essential binomial conditions.", "1 point: correct mean and standard deviation.", "1 point: correct upper-tail summation.", "1 point: explains dependence/nonconstant p under shared exposure."],
      ["Check fixed n, two outcomes, constant p, independence.", "A common environmental shock can correlate trials."]);
  }
  if (v === 3) {
    const slope = 1.8 + 0.1 * (n % 4);
    const intercept = 12;
    const x = 8 + (n % 5);
    const pred = intercept + slope * x;
    return drill(id, "Statistics · regression prediction, residuals, extrapolation, and association versus causation",
      `A least-squares model relating weekly practice time x (hours) to a performance score y is ŷ=${intercept}+${slope.toFixed(1)}x for students observed between 2 and 15 hours. (a) Interpret the slope in context. (b) Predict the score for x=${x}. A student with that practice time scores ${(pred-4).toFixed(1)}; compute the residual and interpret its sign. (c) Explain why predicting at x=30 is risky. (d) Explain why the regression alone does not show that forcing every student to practice one additional hour will raise the score by ${slope.toFixed(1)} points.`,
      `(a) Within the observed range, each additional hour of weekly practice is associated with an average predicted score increase of ${slope.toFixed(1)} points. (b) ŷ=${pred.toFixed(1)}; residual=observed-predicted=${(pred-4).toFixed(1)}-${pred.toFixed(1)}=-4.0, so the student scored 4 points below the model prediction. (c) x=30 is far outside the observed 2–15 hour range, so the linear pattern may not continue. (d) Observational association can reflect confounding or selection; regression alone does not establish a causal treatment effect.`,
      "The item joins computation with two validity limits: extrapolation and causal overclaiming.",
      ["1 point: contextual slope interpretation.", "1 point: prediction and signed residual.", "1 point: identifies extrapolation beyond the data range.", "1 point: rejects causal inference from association alone."],
      ["Residual = observed − predicted.", "Association is not automatically causation."]);
  }
  if (v === 4) {
    return drill(id, "Statistics · experimental design, random assignment, blocking, and generalization",
      `Researchers compare two tutoring programs using 120 volunteers from one school. They first block students by prior mathematics achievement (below/at/above grade level), then randomly assign students within each block to Program A or Program B. After eight weeks, they compare score gains. (a) Identify the experimental units, treatments, and response variable. (b) Explain why blocking can improve the comparison. (c) Explain what random assignment permits the researchers to conclude if a clear difference appears. (d) Explain why the volunteer sample limits generalization to all students in the state.`,
      `(a) Experimental units are the 120 students; treatments are Programs A and B; response is the eight-week score gain. (b) Blocking controls an important source of baseline variation so treatment comparisons are made among students with similar prior achievement. (c) Random assignment reduces systematic confounding, supporting a causal conclusion about the programs for students like those in the experiment. (d) The students were volunteers from one school rather than a random state-wide sample, so external validity is limited.`,
      "The design separates internal validity from external validity and makes blocking serve a statistical purpose rather than a vocabulary label.",
      ["1 point: units, treatments, response.", "1 point: explains blocking as variance/confounding control.", "1 point: explains causal role of random assignment.", "1 point: explains generalization limit from nonrandom sampling."],
      ["Random assignment supports causation; random sampling supports generalization.", "Blocking compares like with like."]);
  }
  if (v === 5) {
    const p = 0.4;
    const n1 = 100 + 20 * (n % 4);
    const se = Math.sqrt(p * (1-p) / n1);
    return drill(id, "Statistics · sampling distribution and sample-size effect",
      `Suppose 40% of a very large population has a certain characteristic. Independent simple random samples of size ${n1} are repeatedly drawn and p-hat is recorded. (a) State the mean and standard deviation of the sampling distribution of p-hat. (b) Verify the large-count condition for an approximately normal sampling distribution. (c) Explain quantitatively what happens to the standard deviation if the sample size is quadrupled. (d) A student claims a larger sample removes all sampling variability. Explain why that is false.`,
      `(a) Mean=p=0.40; SD=sqrt[0.4(0.6)/${n1}]=${se.toFixed(4)}. (b) np=${(n1*p).toFixed(0)} and n(1-p)=${(n1*(1-p)).toFixed(0)}, both at least 10. (c) Quadrupling n multiplies the standard deviation by 1/sqrt(4)=1/2. (d) A finite random sample still varies from sample to sample; larger n reduces but does not eliminate sampling variability.`,
      "The question tests both the square-root sample-size law and the limiting misconception that precision becomes certainty.",
      ["1 point: mean and SD.", "1 point: correct large-count verification.", "1 point: derives factor-of-two reduction.", "1 point: distinguishes reduced variability from zero variability."],
      ["Standard error scales as 1/sqrt(n).", "Larger samples are more precise, not perfectly deterministic."]);
  }
  if (v === 6) {
    return drill(id, "Statistics · chi-square test logic and contribution analysis",
      `A school compares preferred study location (library, home, café) for 120 day students and 80 boarding students. Under independence, the expected counts for day students are 60, 40, 20; the observed counts are 50, 45, 25. (a) Compute the three day-student contributions (O−E)^2/E to χ². (b) Identify which of those cells contributes most and explain what the sign of O−E says even though the contribution is squared. (c) State the null hypothesis for a chi-square test of independence. (d) Explain why percentages, not raw counts alone, are important when comparing groups of different sizes.`,
      `(a) Contributions are 100/60≈1.67, 25/40=0.625, and 25/20=1.25. (b) Library contributes most; O−E=-10 means fewer day students chose the library than expected under independence. (c) H0: study-location preference and residential status are independent in the population represented by the data. (d) Raw counts are affected by the unequal group totals; conditional percentages put the distributions on a comparable scale.`,
      "Students calculate a statistic component, recover directional information hidden by squaring, and articulate the null model.",
      ["1 point: all three contributions correctly computed.", "1 point: correct largest cell and directional interpretation.", "1 point: null hypothesis of independence in context.", "1 point: explains need for conditional proportions with unequal totals."],
      ["The chi-square contribution is nonnegative, but O−E still has a sign.", "Compare distributions using conditional percentages."]);
  }
  return drill(id, "Statistics · inference for a slope and model assumptions",
    `A regression of dissolved oxygen y on stream temperature x for 32 randomly selected sites gives slope b=-0.41 mg/L per °C with SE(b)=0.12. (a) Compute the t statistic for testing H0: β=0. (b) State the direction of evidence supplied by the sign. (c) Name two diagnostics or conditions that should be examined before trusting slope inference. (d) Explain why a statistically significant negative slope would not by itself prove that temperature is the only cause of lower dissolved oxygen.`,
    `(a) t=(-0.41-0)/0.12≈-3.42. (b) The sample relation supports a negative population slope. (c) Appropriate checks include linearity, independent observations, roughly constant residual spread, approximately normal residuals for inference, and attention to influential points. (d) Statistical significance addresses compatibility with β=0 under the model; observational data can still contain confounding variables, so it does not establish a unique causal mechanism.`,
    "The item integrates numerical evidence with diagnostics and the distinction between statistical significance and causal sufficiency.",
    ["1 point: t≈-3.42.", "1 point: correct negative-direction interpretation.", "1 point: two relevant model/diagnostic checks.", "1 point: explains why significance does not prove sole causation."],
    ["Slope t = b/SE(b) under H0:β=0.", "Inference assumptions and causal assumptions are different."]);
}

function mechanics(id: string, n: number): QuestionnaireItem {
  const v = n % 4;
  if (v === 0) {
    const m = 2 + (n % 3);
    const force = 14 + 2 * (n % 4);
    const friction = 4;
    const a = (force-friction)/m;
    return drill(id, "Physics mechanics · force model, acceleration, energy check, and limiting case",
      `A ${m}.0 kg cart on a horizontal track is pulled by a constant horizontal force of ${force} N while kinetic friction is ${friction} N. It starts from rest. (a) Draw or describe the horizontal force balance and calculate the acceleration. (b) Calculate the cart's speed after it travels 3.0 m using work–energy. (c) Show that constant-acceleration kinematics gives the same speed. (d) State what changes in your model if the applied force is reduced to exactly ${friction} N while the cart is already sliding.`,
      `(a) Net horizontal force=${force}-${friction}=${force-friction} N, so a=Fnet/m=${a.toFixed(2)} m/s². (b) Net work=(${force-friction})(3.0) J=ΔK, giving v=sqrt[2(${force-friction})(3.0)/${m}]≈${Math.sqrt(2*(force-friction)*3/m).toFixed(2)} m/s. (c) v²=2aΔx gives the same result because the net force is constant. (d) If applied force equals kinetic friction, net force and acceleration are zero; an already-moving cart continues at constant speed in this model.`,
      "Two independent solution routes cross-check the same physical model, while the limiting case probes whether zero net force is confused with zero velocity.",
      ["1 point: force balance and acceleration.", "1 point: correct work–energy speed.", "1 point: consistent kinematic cross-check.", "1 point: zero-net-force limiting case interpreted as constant velocity."],
      ["Use net work, not applied-force work alone.", "Zero acceleration does not require zero velocity."]);
  }
  if (v === 1) {
    const r=0.50+0.10*(n%3), speed=4.0;
    return drill(id, "Physics mechanics · circular motion, force direction, and energy reasoning",
      `A 0.50 kg puck moves at ${speed.toFixed(1)} m/s in a horizontal circle of radius ${r.toFixed(2)} m on a frictionless table, attached to a string through a central post. (a) Calculate the string tension. (b) State the instantaneous direction of the puck's velocity and acceleration. (c) Explain why the tension does no work on the puck while the radius is fixed. (d) A student says “because the net force points inward, the puck must be moving inward.” Diagnose the misconception.`,
      `(a) T=mv²/r=0.50(${speed}²)/${r.toFixed(2)}≈${(0.5*speed*speed/r).toFixed(2)} N. (b) Velocity is tangent to the circle; acceleration points radially inward. (c) The tension is perpendicular to the instantaneous displacement/velocity, so T·ds=0 and the speed stays constant. (d) Force determines acceleration, not the instantaneous direction of velocity; inward acceleration continually turns the tangential velocity.`,
      "The problem distinguishes velocity, acceleration, force, and work—quantities that are often conflated in circular motion.",
      ["1 point: correct tension.", "1 point: tangent velocity and inward acceleration.", "1 point: perpendicular-force work argument.", "1 point: correctly separates acceleration direction from velocity direction."],
      ["Centripetal is a direction for net force/acceleration, not a new force.", "Work uses the component of force along displacement."]);
  }
  if (v === 2) {
    return drill(id, "Physics mechanics · momentum, impulse, system boundary, and collision energy",
      `A 0.40 kg cart moving right at 3.0 m/s collides and sticks to a 0.60 kg cart initially moving left at 1.0 m/s on a nearly frictionless track. (a) Define a two-cart system and calculate its initial momentum. (b) Find the common final velocity. (c) Compare total kinetic energy before and after and state whether mechanical kinetic energy is conserved. (d) Explain why momentum can be conserved for the two-cart system even though each individual cart experiences a large force during the collision.`,
      `(a) p_i=(0.40)(3.0)+(0.60)(-1.0)=0.60 kg·m/s. (b) v_f=0.60/(1.00)=0.60 m/s to the right. (c) K_i=0.5(0.40)(9)+0.5(0.60)(1)=2.10 J; K_f=0.5(1.00)(0.60²)=0.18 J, so kinetic energy is not conserved. (d) The collision forces are internal to the chosen two-cart system and occur in equal-and-opposite pairs; with negligible external impulse, total system momentum is conserved.`,
      "System choice is made explicit so conservation is justified rather than invoked as a memorized rule.",
      ["1 point: correct signed initial momentum.", "1 point: final velocity with direction.", "1 point: kinetic-energy comparison and conclusion.", "1 point: internal-force/external-impulse explanation."],
      ["Choose a sign convention before summing momentum.", "Internal forces can change individual momenta without changing total system momentum."]);
  }
  return drill(id, "Physics mechanics · oscillation model, energy, and approximation boundary",
    `A 0.50 kg block attached to a horizontal spring of constant 80 N/m oscillates with amplitude 0.12 m on a frictionless surface. (a) Calculate the angular frequency and period. (b) Calculate the maximum speed using energy. (c) State where acceleration magnitude is greatest and where speed is greatest. (d) Explain why the simple harmonic model would need revision if the spring force stopped being proportional to displacement at large extensions.`,
    `(a) ω=sqrt(k/m)=sqrt(80/0.50)≈12.65 rad/s and T=2π/ω≈0.497 s. (b) 1/2 kA²=1/2 mv_max², so v_max=A sqrt(k/m)≈1.52 m/s. (c) |a| is greatest at x=±A; speed is greatest at x=0. (d) SHM requires a linear restoring force F=-kx. If that proportionality fails, the equation of motion is no longer sinusoidal with a constant ω=sqrt(k/m).`,
    "The boundary-condition part checks whether the learner recognizes Hooke's law as a model assumption rather than a universal spring law.",
    ["1 point: ω and T.", "1 point: maximum speed by energy.", "1 point: correct locations of maximum |a| and speed.", "1 point: identifies linear restoring force as the SHM assumption."],
    ["At equilibrium spring potential is minimum and speed is maximum.", "SHM depends on F being proportional to -x."]);
}

function physics2(id: string, n: number): QuestionnaireItem {
  const v=n%4;
  if(v===0) return drill(id,"Physics 2 · thermodynamics, first law, and sign convention",
    `A gas absorbs 450 J of energy by heating while expanding and doing 170 J of work on its surroundings. Use the convention ΔU=Q−W_by. (a) Calculate ΔU. (b) If the gas returns to its initial state through another path, what is the net change in internal energy over the complete cycle? (c) Explain why heat and work for the return path need not be the negatives of the first-path values individually. (d) Diagnose the claim “because the gas expanded, its temperature must have increased.”`,
    `(a) ΔU=450−170=280 J. (b) Internal energy is a state function, so ΔU_cycle=0. (c) Heat and work are path-dependent; only their combination must give the state-function change in U. For the return path, ΔU=-280 J, but many Q and W combinations can satisfy it. (d) Expansion alone does not determine temperature change; the result depends on energy transfer and the gas model.`,
    "The task makes the sign convention explicit and separates state variables from path-dependent energy transfers.",
    ["1 point: ΔU=280 J.","1 point: ΔU_cycle=0 with state-function reasoning.","1 point: explains path dependence of Q and W.","1 point: rejects expansion⇒temperature-rise as unsupported."],
    ["Internal energy is a state function.","Use the stated sign convention rather than memorizing a sign."]);
  if(v===1) return drill(id,"Physics 2 · fluids, continuity, Bernoulli assumptions, and model limits",
    `Water flows steadily through a horizontal pipe that narrows from cross-sectional area 6.0 cm² to 2.0 cm². The speed in the wide section is 1.5 m/s. (a) Use continuity to find the speed in the narrow section. (b) Using ideal Bernoulli reasoning, determine which section has the greater static pressure and explain why. (c) State two assumptions behind this calculation. (d) Explain how strong viscosity or turbulence could make the ideal prediction quantitatively inaccurate.`,
    `(a) A1v1=A2v2 gives v2=(6.0/2.0)(1.5)=4.5 m/s. (b) At equal height, greater speed corresponds to lower static pressure, so the wide section has greater pressure. (c) Suitable assumptions include steady flow, negligible viscosity, incompressible fluid, and comparison along a streamline. (d) Viscosity/turbulence dissipates mechanical energy, so pressure changes include losses not represented by ideal Bernoulli conservation.`,
    "Students must both use the ideal model and name the conditions under which it is trustworthy.",
    ["1 point: v2=4.5 m/s.","1 point: correct pressure comparison with Bernoulli reasoning.","1 point: two valid assumptions.","1 point: explains dissipative loss as a limitation."],
    ["Continuity conserves volume flow rate for incompressible steady flow.","Bernoulli is an ideal-energy model."]);
  if(v===2) return drill(id,"Physics 2 · geometric optics, sign-independent ray reasoning, and limiting behavior",
    `A converging thin lens has focal length 20 cm. An object is placed 60 cm from the lens. (a) Use 1/f=1/do+1/di to find the image distance. (b) Find the magnification and describe the image as real/virtual and upright/inverted. (c) Predict qualitatively what happens to image distance as the object is moved toward the focal point from beyond 2f. (d) Explain why an object placed exactly at the focal point does not form a finite real image on a screen in the ideal thin-lens model.`,
    `(a) 1/di=1/20−1/60=1/30, so di=30 cm. (b) m=-di/do=-30/60=-0.50: the image is real, inverted, and half the object's height. (c) As do approaches f from above, di increases toward positive infinity. (d) Emerging rays become parallel when do=f, so they do not converge at a finite screen distance.`,
    "The limiting case tests the physical meaning of the lens equation rather than only algebraic substitution.",
    ["1 point: di=30 cm.","1 point: m=-0.50 and correct image description.","1 point: correct trend as do→f+.","1 point: parallel-ray explanation at the focal point."],
    ["A negative magnification means inverted.","Consider the denominator in di=f do/(do-f)."]);
  return drill(id,"Physics 2 · modern physics, photon energy, threshold condition, and misconception check",
    `A metal has work function 2.2 eV and is illuminated with 400 nm light. Use hc≈1240 eV·nm. (a) Calculate the photon energy. (b) Determine the maximum photoelectron kinetic energy. (c) State what changes if the light intensity is doubled while wavelength remains 400 nm, assuming the metal is not saturated. (d) Explain why increasing intensity cannot eject electrons if the wavelength is instead so long that each photon has energy below the work function.`,
    `(a) E=1240/400=3.10 eV. (b) Kmax=3.10−2.20=0.90 eV. (c) Doubling intensity increases photon arrival rate and therefore can increase the number/current of emitted electrons, but Kmax remains set by photon energy and work function. (d) In the single-photon photoelectric model each electron needs one photon with E≥φ; more sub-threshold photons do not raise the energy of an individual photon.`,
    "The intensity part distinguishes photon number from photon energy and directly probes the classical-intensity misconception.",
    ["1 point: photon energy 3.10 eV.","1 point: Kmax=0.90 eV.","1 point: correct intensity effect on rate but not Kmax.","1 point: threshold explanation based on per-photon energy."],
    ["Photon energy depends on frequency/wavelength, not intensity.","Compare hf with the work function."]);
}

function em(id:string,n:number):QuestionnaireItem{
  const v=n%3;
  if(v===0) return drill(id,"Physics C E&M · electric potential, field, energy, and sign reasoning",
    `A +2.0 μC point charge is fixed at the origin. A +1.0 μC test charge moves quasistatically from r=0.40 m to r=0.80 m. Use k=9.0×10^9 N·m²/C². (a) Calculate the electric potential at each radius due to the fixed charge. (b) Calculate the change in electric potential energy of the test charge. (c) State the sign of the work done by the electric field. (d) Explain why zero electric potential at some chosen reference would not imply zero electric field there.`,
    `(a) V(0.40)=kQ/r=45,000 V; V(0.80)=22,500 V. (b) ΔU=q(Vf−Vi)=(1.0×10^-6)(-22,500)=-2.25×10^-2 J. (c) W_field=-ΔU=+2.25×10^-2 J. (d) Potential value depends on the chosen zero, while field is related to the spatial gradient of potential; V can equal zero at a point while ∇V is nonzero.`,
    "The item ties scalar potential to energy and field while checking a common zero-potential/zero-field confusion.",
    ["1 point: both potentials.","1 point: ΔU with correct sign.","1 point: field-work sign and value.","1 point: distinguishes potential reference from field gradient."],
    ["U=qV.","Electric field is related to how potential changes with position."]);
  if(v===1) return drill(id,"Physics C E&M · RC transient, time constant, and asymptotic behavior",
    `A 12 V battery charges a 20 μF capacitor through a 150 kΩ resistor from an initially uncharged state. (a) Calculate the time constant. (b) Find the capacitor voltage after one time constant. (c) Find the initial current and describe its long-time limit. (d) Explain why the capacitor voltage approaches but does not overshoot 12 V in the ideal first-order model.`,
    `(a) τ=RC=(150×10^3)(20×10^-6)=3.0 s. (b) Vc(τ)=12(1-e^-1)≈7.59 V. (c) I(0)=12/(150 kΩ)=80 μA and I→0 as t→∞. (d) The solution Vc=12(1-e^-t/τ) rises monotonically toward the battery voltage; no inductive/inertial term exists in the ideal RC differential equation to create overshoot.`,
    "The final part connects the mathematical solution shape to the physical order of the circuit model.",
    ["1 point: τ=3.0 s.","1 point: Vc≈7.59 V.","1 point: I0=80 μA and long-time zero current.","1 point: monotonic asymptotic explanation."],
    ["At one time constant, charging reaches about 63.2%.","An ideal RC circuit is first order."]);
  return drill(id,"Physics C E&M · magnetic force, circular trajectory, and no-work condition",
    `A proton enters a uniform 0.30 T magnetic field perpendicular to the field with speed 2.0×10^6 m/s. Use mp=1.67×10^-27 kg and q=1.60×10^-19 C. (a) Calculate the magnetic-force magnitude. (b) Calculate the radius of the circular path. (c) Explain why the proton's speed remains constant in the uniform magnetic field. (d) State how the radius changes if the speed doubles while B is unchanged.`,
    `(a) F=qvB=(1.60×10^-19)(2.0×10^6)(0.30)=9.6×10^-14 N. (b) r=mv/(qB)≈0.0696 m. (c) Magnetic force is perpendicular to velocity, so it changes direction but does no work and does not change kinetic energy. (d) r is proportional to v, so doubling speed doubles the radius.`,
    "Computation is paired with the geometric no-work argument and a scaling check.",
    ["1 point: magnetic force.","1 point: radius.","1 point: perpendicular force/no work reasoning.","1 point: correct proportional scaling."],
    ["For perpendicular entry, sinθ=1.","A force perpendicular to velocity changes direction, not speed."]);
}

function calculus(id:string,n:number):QuestionnaireItem{
  const v=n%4;
  if(v===0) return drill(id,"Calculus · derivative model, critical point, and sign analysis",
    `A particle's position is s(t)=t^3−6t^2+9t for t≥0. (a) Find velocity and acceleration. (b) Find all times in 0≤t≤5 when the particle is at rest. (c) Use the sign of velocity to identify intervals where the particle moves right and left. (d) Explain why a time at which acceleration is zero need not be a turning point of position.`,
    `(a) v=3t²−12t+9=3(t−1)(t−3); a=6t−12. (b) t=1 and t=3. (c) v>0 on [0,1) and (3,5], so motion is right there; v<0 on (1,3), so motion is left. (d) A turning point of position requires velocity to change sign; a=0 only marks a critical point of velocity and does not by itself force v=0 or a sign change in v.`,
    "The misconception check separates derivative levels rather than equating every zero derivative with a position extremum.",
    ["1 point: v and a.","1 point: rest times.","1 point: correct sign intervals.","1 point: explains why a=0 does not imply a position turning point."],
    ["Direction comes from the sign of velocity.","Acceleration is the derivative of velocity, not position."]);
  if(v===1) return drill(id,"Calculus · definite integral, average value, and units",
    `Water enters a tank at rate R(t)=4+0.5t liters/minute for 0≤t≤8, while a drain removes water at a constant 3 liters/minute. (a) Write and evaluate an integral for the net change in water volume over 8 minutes. (b) If the tank starts with 50 L, find the final volume. (c) Find the average inflow rate R over the interval. (d) Explain why the value of ∫R(t)dt has units of liters rather than liters/minute.`,
    `(a) Net change=∫_0^8[(4+0.5t)-3]dt=[t+0.25t²]_0^8=24 L. (b) Final volume=74 L. (c) Average inflow=(1/8)∫_0^8(4+0.5t)dt=(1/8)(48)=6 L/min. (d) Integration multiplies a rate unit L/min by the time differential in minutes, yielding accumulated liters.`,
    "The units check distinguishes accumulation from rate and catches a common dimensional-error shortcut.",
    ["1 point: correct net-rate integral and 24 L.","1 point: final 74 L.","1 point: average inflow 6 L/min.","1 point: correct dimensional explanation."],
    ["Net rate = inflow − outflow.","Average value is (1/(b-a)) times the integral."]);
  if(v===2) return drill(id,"Calculus · separable differential equation, initial condition, and model domain",
    `A population P(t) satisfies dP/dt=0.20P with P(0)=500. (a) Solve the differential equation. (b) Find P(5). (c) Find the doubling time. (d) Give one reason the model should not automatically be extrapolated indefinitely for a real biological population.`,
    `(a) Separation/integration gives P=Ce^{0.20t}; P(0)=500 gives P(t)=500e^{0.20t}. (b) P(5)=500e≈1359. (c) 2=e^{0.20T}, so T=ln2/0.20≈3.47 time units. (d) Unlimited exponential growth assumes a constant per-capita rate and no resource or density constraints; real populations may face carrying capacity, changing rates, migration, or other limits.`,
    "The model-domain part prevents a correct differential-equation solution from being mistaken for a universal physical prediction.",
    ["1 point: correct exponential solution.","1 point: P(5).","+1 point: doubling-time derivation.","1 point: defensible real-world model limitation."],
    ["Use the initial condition after integrating.","Exponential growth assumes constant relative growth rate."]);
  return drill(id,"Calculus BC · series convergence, endpoint checks, and approximation logic",
    `Consider Σ_{n=1}^∞ (-1)^{n+1} x^n/n centered at 0. (a) Use a standard convergence test to determine the radius of convergence. (b) Test x=1 and x=-1 separately and give the interval of convergence. (c) For x=1/2, explain how the alternating-series error bound controls the error after N terms. (d) Explain why knowing the radius alone is insufficient to decide endpoint convergence.`,
    `(a) The ratio/root test gives radius R=1. (b) At x=1 the alternating harmonic series converges; at x=-1 the series becomes -Σ1/n and diverges, so the interval is (-1,1]. (c) At x=1/2 the terms decrease in magnitude to zero, so the truncation error is at most the magnitude of the first omitted term, (1/2)^{N+1}/(N+1). (d) Ratio/root tests typically become inconclusive at |x|=R; endpoints produce distinct numerical series that must be tested individually.`,
    "The endpoint and error parts distinguish three different uses of series tests instead of reducing the task to a memorized radius.",
    ["1 point: R=1.","1 point: endpoint tests and interval (-1,1].","1 point: correct alternating error bound.","1 point: explains why endpoints require separate tests."],
    ["Always test both endpoints after finding R.","The alternating-series remainder is bounded by the first omitted term."]);
}

function chemistry(id:string,n:number):QuestionnaireItem{
  const v=n%4;
  if(v===0) return drill(id,"Chemistry · calorimetry, system-surroundings signs, and uncertainty",
    `A 50.0 g metal sample at 95.0°C is placed in 100.0 g of water at 22.0°C in an insulated cup. The final temperature is 25.0°C. Take c_water=4.18 J g^-1 °C^-1 and assume the cup absorbs negligible heat. (a) Calculate q_water. (b) Determine q_metal and the metal's specific heat. (c) Explain the sign relation between q_water and q_metal. (d) Predict the direction of error in the calculated metal specific heat if substantial heat actually escaped to the room.`,
    `(a) q_water=(100.0)(4.18)(3.0)=1254 J. (b) q_metal=-1254 J; ΔT_metal=25.0-95.0=-70.0°C, so c=q/(mΔT)=(-1254)/(50.0×-70.0)=0.358 J g^-1 °C^-1. (c) In the ideal insulated two-part system, energy gained by water equals energy lost by metal. (d) If heat escaped, the metal lost more energy than the water gained; using only q_water would underestimate |q_metal| and therefore underestimate c_metal.`,
    "The uncertainty part requires directional reasoning rather than merely naming heat loss as an error source.",
    ["1 point: q_water=1254 J.","1 point: c_metal≈0.358 with signs handled.","1 point: energy-conservation sign relation.","1 point: correctly predicts underestimation if heat escapes."],
    ["For an insulated two-component model, q_water+q_metal=0.","Ask whether the measured water heat captures all energy lost by the metal."]);
  if(v===1) return drill(id,"Chemistry · equilibrium quotient, Le Châtelier reasoning, and catalyst misconception",
    `For N2O4(g) ⇌ 2 NO2(g), Kc=0.50 at a certain temperature. At one instant [N2O4]=0.80 M and [NO2]=0.40 M. (a) Calculate Qc. (b) Predict the direction of net reaction as equilibrium is approached. (c) Explain how decreasing the container volume affects the equilibrium composition at constant temperature. (d) Explain why adding a catalyst does not change Kc or the final equilibrium composition.`,
    `(a) Qc=[NO2]^2/[N2O4]=(0.40)^2/0.80=0.20. (b) Q<K, so net reaction proceeds right to make more products. (c) Compression favors the side with fewer gas moles, so it shifts toward N2O4. (d) A catalyst lowers activation barriers for forward and reverse reactions and changes the rate of reaching equilibrium, not the thermodynamic equilibrium constant at fixed temperature.`,
    "The task connects quantitative Q-versus-K evidence to perturbation reasoning and rejects the catalyst-shifts-equilibrium misconception.",
    ["1 point: Qc=0.20.","1 point: correct rightward direction from Q<K.","1 point: correct compression response.","1 point: catalyst changes kinetics, not K/equilibrium composition."],
    ["Compare Q with K before invoking Le Châtelier.","K changes with temperature, not catalyst amount."]);
  if(v===2) return drill(id,"Chemistry · kinetics, rate law, reaction order, and mechanism limits",
    `Initial-rate data for A + B → products show: Trial 1 [A]=0.10 M, [B]=0.10 M, rate=2.0×10^-3 M/s; Trial 2 [A]=0.20 M, [B]=0.10 M, rate=8.0×10^-3 M/s; Trial 3 [A]=0.20 M, [B]=0.20 M, rate=1.6×10^-2 M/s. (a) Determine the order in A and B. (b) Write the rate law and calculate k with units. (c) Predict the rate at [A]=0.15 M, [B]=0.30 M. (d) Explain why the experimentally determined rate law does not by itself prove that the overall balanced equation is one elementary step.`,
    `(a) Doubling A quadruples rate, so second order in A; doubling B doubles rate, so first order in B. (b) rate=k[A]^2[B]; k=(2.0×10^-3)/(0.10²×0.10)=2.0 M^-2 s^-1. (c) rate=2.0(0.15²)(0.30)=1.35×10^-2 M/s. (d) Overall stoichiometric coefficients need not equal rate-law exponents unless the reaction is elementary; multistep mechanisms can generate the same observed rate law.`,
    "The mechanism check distinguishes empirical kinetics from an unsupported molecular-level inference.",
    ["1 point: orders 2 and 1.","1 point: rate law and k with units.","1 point: predicted rate 1.35×10^-2 M/s.","1 point: explains why rate law does not prove a one-step mechanism."],
    ["Change one reactant concentration at a time.","Rate-law exponents are experimental for an overall reaction."]);
  return drill(id,"Chemistry · electrochemistry, cell potential, spontaneity, and concentration effects",
    `A galvanic cell uses Zn(s)|Zn2+(1.0 M) and Cu2+(1.0 M)|Cu(s). Standard reduction potentials are E°(Cu2+/Cu)=+0.34 V and E°(Zn2+/Zn)=-0.76 V. (a) Identify anode and cathode. (b) Calculate E°cell. (c) Write the net ionic reaction and direction of electron flow. (d) Without calculating a Nernst value, predict how Ecell changes if [Zn2+] increases substantially while [Cu2+] is held fixed, and justify using reaction quotient Q.`,
    `(a) Zn is oxidized at the anode; Cu2+ is reduced at the cathode. (b) E°cell=0.34-(-0.76)=1.10 V. (c) Zn(s)+Cu2+(aq)→Zn2+(aq)+Cu(s); electrons flow externally from Zn to Cu. (d) Q=[Zn2+]/[Cu2+] increases; from E=E°-(RT/nF)lnQ, E decreases.`,
    "The concentration perturbation forces thermodynamic direction reasoning beyond a memorized standard-potential subtraction.",
    ["1 point: correct electrodes.","1 point: E°cell=1.10 V.","1 point: reaction and electron direction.","1 point: Q increase implies lower E."],
    ["Oxidation occurs at the anode in both galvanic and electrolytic cells.","Products in the numerator make Q larger here."]);
}

function biology(id:string,n:number):QuestionnaireItem{
  const v=n%4;
  if(v===0) return drill(id,"Biology · enzyme experiment, controls, rate interpretation, and denaturation boundary",
    `Students measure catalase activity by recording O2 production for 60 s at pH 3, 5, 7, 9, and 11 while keeping enzyme concentration, substrate concentration, and temperature constant. Mean O2 production peaks at pH 7 and is low at pH 3 and 11. (a) Identify the independent and dependent variables. (b) Explain why holding temperature and concentrations constant strengthens the inference about pH. (c) Propose one additional control or replication feature. (d) Explain, at the molecular level, why extreme pH can reduce enzyme activity without claiming that every enzyme has an optimum of pH 7.`,
    `(a) IV=pH; DV=O2 produced per unit time (catalase reaction rate). (b) Controlling other rate-affecting variables reduces alternative explanations for differences among pH treatments. (c) Valid choices include multiple independent replicates, a no-enzyme negative control, standardized timing, or calibration of gas measurement. (d) Extreme pH can alter protonation and interactions that maintain active-site/protein structure, reducing substrate binding or catalysis; optimal pH is enzyme-specific, so the data support pH 7 only for this catalase system.`,
    "The last clause checks against overgeneralizing one experiment into a universal enzyme rule.",
    ["1 point: IV and DV.","1 point: control-variable reasoning.","1 point: valid control/replication improvement.","1 point: molecular explanation plus enzyme-specific boundary."],
    ["Explain how a variable could affect reaction rate, not just name it.","Do not generalize one enzyme's optimum to all enzymes."]);
  if(v===1) return drill(id,"Biology · population genetics, Hardy-Weinberg calculation, and assumption check",
    `In a large population, a recessive phenotype occurs in 9% of individuals. Assume Hardy-Weinberg conditions for the calculation. (a) Estimate q and p. (b) Estimate the heterozygote frequency 2pq. (c) For a sample of 1,000 individuals, predict the expected number of heterozygotes. (d) Name one Hardy-Weinberg assumption and explain how violating it could make the genotype-frequency prediction unreliable.`,
    `(a) q²=0.09, so q=0.30 and p=0.70. (b) 2pq=2(0.70)(0.30)=0.42. (c) About 420 heterozygotes. (d) Assumptions include random mating, very large population, no migration, no mutation, and no selection; violating one can change allele/genotype frequencies or genotype proportions so the H-W prediction need not hold.`,
    "The problem explicitly labels Hardy-Weinberg as a conditional model and asks the learner to test its boundary.",
    ["1 point: p=0.70, q=0.30.","1 point: 2pq=0.42.","1 point: 420 expected heterozygotes.","1 point: assumption plus consequence of violation."],
    ["The recessive phenotype frequency is q², not q.","Hardy-Weinberg is a null model with assumptions."]);
  if(v===2) return drill(id,"Biology · membrane transport, tonicity, prediction, and mechanism",
    `Identical plant cells are placed for 30 min in solutions A, B, and C. Mean cell mass changes are +8%, 0%, and -12%, respectively. (a) Rank the external solutions from lowest to highest effective solute concentration, assuming water is the main freely moving species. (b) Identify which solution is approximately isotonic to the cells. (c) Explain the direction of water movement in C using water potential/osmosis. (d) Explain why the data alone do not reveal the chemical identity of the dissolved solute.`,
    `(a) A has the lowest effective solute concentration, B is intermediate/isotonic, and C has the highest because cells gain water in A and lose water in C. (b) B is approximately isotonic. (c) In C, the external solution has lower water potential (greater effective solute concentration), so net water movement is out of the cells, decreasing mass. (d) Mass change reports the osmotic effect, not molecular identity; different solutes at appropriate effective concentrations could produce similar water movement.`,
    "The final part separates a functional measurement from an unsupported claim about molecular identity.",
    ["1 point: correct concentration ranking.","1 point: B isotonic.","1 point: correct osmosis/water-potential explanation.","1 point: explains why solute identity is underdetermined."],
    ["Water moves toward lower water potential under these conditions.","An observed osmotic effect does not identify the solute."]);
  return drill(id,"Biology · ecological energy transfer, quantitative efficiency, and system boundary",
    `A grassland study estimates 24,000 kJ m^-2 yr^-1 of net primary production. Herbivores assimilate 2,400 kJ m^-2 yr^-1, and carnivores assimilate 240 kJ m^-2 yr^-1. (a) Calculate the transfer efficiency from producers to herbivores and from herbivores to carnivores. (b) Explain two biological fates of energy that account for less than 100% transfer. (c) Predict how an increase in herbivore metabolic respiration, with intake unchanged, would affect energy available to the next trophic level. (d) Explain why energy flow and matter cycling should not be described as the same process.`,
    `(a) Both stated efficiencies are 10%: 2400/24000 and 240/2400. (b) Energy is lost from the measured trophic transfer through respiration as heat, unconsumed biomass, egestion/excretion, and maintenance. (c) More respiration leaves less biomass production available to carnivores, so transfer upward decreases. (d) Energy enters and ultimately dissipates as heat, whereas atoms/nutrients can be recycled through biogeochemical pathways.`,
    "The item combines calculation with system accounting and distinguishes two ecological conservation ideas.",
    ["1 point: both 10% efficiencies.","1 point: two valid energy fates.","1 point: increased respiration lowers next-level availability.","1 point: distinguishes one-way energy flow from matter cycling."],
    ["Use energy at the receiving level divided by energy at the source level.","Matter can cycle; usable energy is dissipated."]);
}

function economics(id:string,subject:string,n:number):QuestionnaireItem{
  const macro=/Macro/i.test(subject); const v=n%3;
  if(macro){
    if(v===0) return drill(id,"Macroeconomics · multiplier, AD-AS, and crowding-out boundary",
      `An economy has an MPC of 0.75 and a recessionary output gap of $120 billion. The government increases purchases by $20 billion with no immediate tax change. (a) Calculate the simple spending multiplier and predicted change in real GDP under the simple model. (b) Determine whether the policy closes the gap. (c) State the short-run direction of real GDP and price level in an AD-AS model with upward-sloping SRAS. (d) Explain one mechanism that can make the actual GDP increase smaller than the simple-multiplier prediction.`,
      `(a) Multiplier=1/(1-0.75)=4; predicted ΔY=$80 billion. (b) It does not close the $120 billion gap; about $40 billion remains under the simple arithmetic. (c) AD shifts right, so short-run real GDP and the price level rise. (d) Examples include crowding out: deficit borrowing raises demand for loanable funds/interest rates and reduces interest-sensitive private investment, or other leakages/capacity effects.`,
      "The calculation is treated as a benchmark whose assumptions are then stress-tested.",
      ["1 point: multiplier 4 and $80B.","1 point: $40B gap remains.","1 point: GDP and price level rise.","1 point: coherent mechanism reducing the simple prediction."],
      ["Compare the predicted change with the original gap.","The simple multiplier assumes away several feedbacks."]);
    if(v===1) return drill(id,"Macroeconomics · money market, interest rates, investment, and policy transmission",
      `The central bank conducts an open-market purchase of government securities while the economy is below full employment. (a) Describe the immediate effect on bank reserves and the money supply. (b) On a money-market graph, state the direction of the money-supply shift and the effect on the nominal interest rate, holding money demand fixed. (c) Trace the expected effect through investment and aggregate demand to short-run real GDP. (d) Explain one circumstance in which the real-GDP response could be weak even if the money supply increases.`,
      `(a) The purchase adds reserves and tends to expand the money supply. (b) Money supply shifts right; the nominal interest rate falls, ceteris paribus. (c) Lower rates can raise interest-sensitive investment, shifting AD right and increasing short-run real GDP below capacity. (d) The response can be weak if investment is interest-insensitive, banks/borrowers do not expand credit, expectations are pessimistic, or the economy is near another constraint.`,
      "The item requires a complete causal transmission chain and a boundary condition rather than a one-arrow policy slogan.",
      ["1 point: reserves/money supply rise.","1 point: money-supply shift and lower rate.","1 point: investment→AD→GDP chain.","1 point: valid weak-transmission condition."],
      ["Keep money demand fixed for the graph result.","Policy changes incentives; it does not guarantee a fixed-sized GDP response."]);
    return drill(id,"Macroeconomics · foreign exchange, net exports, and current-account reasoning",
      `Suppose U.S. interest rates rise relative to comparable foreign rates, making dollar-denominated financial assets more attractive, with other factors held constant. (a) Predict the effect on demand for U.S. dollars in the foreign-exchange market. (b) Predict the direction of the dollar's exchange value. (c) Explain the likely effect on U.S. exports, imports, and net exports. (d) Explain why “a stronger currency is always better for the domestic economy” is not a defensible general conclusion.`,
      `(a) Foreign demand for dollars rises to purchase dollar assets. (b) The dollar appreciates. (c) U.S. goods become relatively more expensive to foreigners and foreign goods cheaper to U.S. buyers, tending to reduce exports, increase imports, and reduce net exports. (d) Appreciation can benefit consumers/importers but hurt exporters and reduce net exports; welfare and output effects depend on context, so “always better” ignores trade-offs.`,
      "The final part forces the student to distinguish a price movement from a universal welfare judgment.",
      ["1 point: dollar demand rises.","1 point: appreciation.","1 point: correct X/M/NX chain.","1 point: explains trade-offs invalidating 'always better'."],
      ["Ask who needs dollars to buy dollar assets.","An appreciation changes relative prices for both imports and exports."]);
  }
  if(v===0) return drill(id,"Microeconomics · elasticity, midpoint calculation, revenue, and incidence logic",
    `A product's price rises from $10 to $12 and quantity demanded falls from 120 to 90 units per day. (a) Use the midpoint method to calculate the absolute value of price elasticity of demand. (b) Classify demand over this interval as elastic, unit elastic, or inelastic. (c) Calculate total revenue before and after and connect the change to your elasticity classification. (d) Explain why the statutory side that sends a tax payment to the government does not determine the economic incidence of a tax.`,
    `(a) %ΔQ=(-30/105)=-0.2857; %ΔP=(2/11)=0.1818; |Ed|≈1.57. (b) Demand is elastic. (c) TR changes from $1200 to $1080; with elastic demand, the proportional quantity decrease exceeds the price increase, so revenue falls. (d) Incidence depends on relative elasticities because market prices adjust; legal remittance does not by itself determine who bears the burden.`,
    "The item cross-checks elasticity against observed revenue and separates legal from economic tax burden.",
    ["1 point: midpoint elasticity ≈1.57.","1 point: elastic classification.","1 point: both revenues and correct connection.","1 point: incidence determined by relative elasticity, not remittance."],
    ["Use midpoint denominators for both percentage changes.","Elasticity predicts the direction of total-revenue change."]);
  if(v===1) return drill(id,"Microeconomics · externality, efficient quantity, and policy design",
    `A competitive market produces a good whose marginal social cost exceeds marginal private cost by a constant $6 per unit because of pollution, while marginal social benefit equals demand. (a) On a standard graph, identify the relationship between MSC and MPC. (b) Compare the unregulated market quantity with the socially efficient quantity. (c) State a per-unit corrective tax that would align private and social marginal cost under the stated constant-damage assumption. (d) Explain why a $6 tax would not necessarily be correct if marginal external damage varied with output.`,
    `(a) MSC lies $6 above MPC at every quantity. (b) The market equates demand/MSB with MPC and therefore overproduces relative to the quantity where MSB=MSC. (c) A $6 per-unit Pigouvian tax shifts the private marginal cost faced by decision makers to the stated MSC. (d) If marginal damage changes with quantity, an efficient corrective wedge should match marginal external damage at the efficient quantity rather than a constant $6 everywhere.`,
    "The boundary condition prevents the corrective-tax rule from being memorized without reference to marginal damage.",
    ["1 point: MSC $6 above MPC.","1 point: market overproduction.","1 point: $6 corrective tax under stated assumption.","1 point: explains why varying marginal damage changes the rule."],
    ["Efficiency uses marginal social benefit and marginal social cost.","Corrective policy targets the external marginal wedge."]);
  return drill(id,"Microeconomics · monopoly choice, marginal reasoning, and price discrimination limit",
    `A single-price monopolist faces downward-sloping demand and has positive marginal cost. At its current output, marginal revenue is $18 and marginal cost is $12. (a) State whether the firm should increase, decrease, or keep output unchanged to raise profit. (b) Explain the MR=MC profit-maximizing rule. (c) After choosing the profit-maximizing quantity, explain how the single-price monopolist determines price. (d) Explain why charging every buyer that same price is different from first-degree price discrimination.`,
    `(a) Increase output because MR>MC, so the next units add more revenue than cost. (b) Profit rises while MR>MC and falls for marginal units after MC>MR, so an interior optimum occurs where MR=MC (subject to the relevant demand/cost conditions). (c) The firm uses the demand curve at the chosen quantity to find the highest single market price consumers will pay for that quantity. (d) First-degree price discrimination charges different buyers/units according to willingness to pay and requires information/conditions not present in a single-price market.`,
    "The response must connect a marginal inequality to an action, then distinguish quantity choice from price reading.",
    ["1 point: increase output.","1 point: correct marginal-profit reasoning.","1 point: price read from demand at Q*.","1 point: distinguishes uniform price from first-degree discrimination."],
    ["MR compares the revenue from one more unit with MC.","For a single-price monopolist, price is not set equal to MR."]);
}

function psychology(id:string,n:number):QuestionnaireItem{
  const v=n%3;
  if(v===0) return drill(id,"Psychology · experimental design, operationalization, confounding, and ethics",
    `A psychologist tests whether phone notifications impair delayed recall. Eighty volunteers are randomly assigned to study the same 30-word list with notifications enabled or disabled. Twenty-four hours later, all take an unexpected recall test with phones removed. (a) Identify the independent and dependent variables and operationally define the dependent variable. (b) Explain how random assignment supports causal inference. (c) Identify one variable that must be controlled or balanced and explain why. (d) Name one ethical protection relevant to the study and explain how it applies.`,
    `(a) IV=notification condition; DV=delayed recall, operationalized for example as number of target words correctly recalled after 24 hours. (b) Random assignment tends to distribute preexisting differences across conditions, reducing systematic confounding and supporting causation. (c) Examples include study time, list exposure, testing environment, prior sleep, or device settings; systematic differences could affect recall independently of notifications. (d) Appropriate protections include informed consent for foreseeable procedures, confidentiality, right to withdraw, minimizing harm, and debriefing if justified deception is used.`,
    "The task integrates measurement, design validity, and ethics rather than asking for isolated definitions.",
    ["1 point: IV/DV plus measurable operational definition.","1 point: causal role of random assignment.","1 point: plausible control variable with confounding explanation.","1 point: relevant ethical protection applied to the scenario."],
    ["Operationalization says exactly how a construct is measured.","Random assignment differs from random sampling."]);
  if(v===1) return drill(id,"Psychology · correlation, third-variable reasoning, and prediction limits",
    `A school survey finds r=-0.62 between nightly sleep duration and reported daytime sleepiness. (a) Interpret the sign and strength of the correlation in context. (b) Explain why the result does not establish that increasing any student's sleep will cause a fixed decrease in sleepiness. (c) Propose one plausible third variable and explain how it could influence both measures. (d) Explain why an extreme outlier could materially change r.`,
    `(a) There is a moderately strong negative linear association: students reporting more sleep tend to report less daytime sleepiness. (b) Correlation from observational data does not establish causation or a fixed individual treatment effect. (c) Examples include illness, workload, stress, medication, or work schedule; each could affect sleep duration and daytime sleepiness. (d) Pearson r depends on the pattern and leverage of observations, so a point far from the main cloud can strengthen, weaken, or reverse the measured linear association.`,
    "The item tests interpretation, causal limits, confounding, and sensitivity rather than the slogan 'correlation is not causation' alone.",
    ["1 point: contextual sign/strength interpretation.","1 point: rejects causal/fixed-effect inference.","1 point: plausible third variable with two-path explanation.","1 point: explains outlier influence on r."],
    ["Describe what higher x tends to accompany in y.","A confound must plausibly relate to both variables."]);
  return drill(id,"Psychology · memory study, retrieval cues, alternative explanations, and replication",
    `Participants study 24 paired words. One group studies and is tested in the same quiet room; another studies in the quiet room but is tested in a room with background conversation. The same-room group recalls more pairs. (a) Use context-dependent memory to explain the result. (b) Identify one alternative explanation besides context matching. (c) Describe a design change that would help separate the retrieval-context effect from general distraction during testing. (d) Explain why replication with a larger and more diverse sample would strengthen confidence without guaranteeing the same numerical effect size.`,
    `(a) Environmental cues present during encoding can become retrieval cues; matching study/test context can improve access to stored information. (b) The conversational room may simply distract attention during retrieval, or groups may differ by chance in another relevant trait. (c) Add a condition tested in a different but equally quiet room, counterbalance contexts, or manipulate matching while holding test-time noise constant. (d) Replication tests robustness and a broader sample improves precision/generalizability, but sampling variation and population/context differences mean the exact effect size need not repeat.`,
    "The design-improvement part requires distinguishing a target mechanism from a rival explanation.",
    ["1 point: context-dependent retrieval explanation.","1 point: plausible alternative explanation.","1 point: design change that isolates context matching from distraction.","1 point: nuanced replication/generalization explanation."],
    ["Ask what differs besides 'same versus different'.", "Replication improves evidence; it does not make outcomes deterministic."]);
}

function computer(id:string,n:number):QuestionnaireItem{
  const v=n%3;
  if(v===0) return drill(id,"Computer Science · loop invariant, trace, and boundary case",
    `Consider this pseudocode: sum←0; FOR each value x in [3, -2, 5, 0, 4] { IF x>0 { sum←sum+x } }. (a) Trace the value of sum after each list element. (b) State the final value. (c) Give a loop invariant that explains what sum represents after processing any prefix of the list. (d) Explain what happens for an empty input list and why that boundary case is consistent with the invariant.`,
    `(a) The successive sum values are 3, 3, 8, 8, 12. (b) Final sum=12. (c) After processing any prefix, sum equals the total of the positive values in exactly that processed prefix. (d) For an empty list the loop executes zero times and sum remains 0, which is the sum of positive values in an empty prefix.`,
    "The invariant turns a simple trace into a correctness argument and explicitly checks the empty-input boundary.",
    ["1 point: correct trace.","1 point: final 12.","1 point: valid prefix invariant.","1 point: correct empty-list behavior tied to invariant."],
    ["An invariant should be true before and after every iteration.","The sum of no selected elements is 0."]);
  if(v===1) return drill(id,"Computer Science · algorithmic complexity, scaling, and hidden constants",
    `Algorithm A performs approximately 6n elementary operations. Algorithm B performs approximately n²/4 operations on an input of size n. (a) Compare the operation counts at n=20 and n=200. (b) State the asymptotic time complexity of each. (c) Explain why B can be competitive for some small n even though its asymptotic growth is worse. (d) Explain why Big-O notation alone does not predict exact wall-clock runtime on every machine.`,
    `(a) At n=20: A≈120, B≈100; at n=200: A≈1200, B≈10,000. (b) A is O(n); B is O(n²). (c) Constants and crossover points matter for finite inputs, so the smaller constant in B can offset worse growth at small n. (d) Big-O suppresses constants/lower-order terms and does not encode implementation language, memory hierarchy, hardware, input distribution, or parallelism.`,
    "The numerical crossover prevents asymptotic notation from being treated as an exact runtime formula.",
    ["1 point: both operation comparisons.","1 point: O(n) and O(n²).","1 point: finite-size/crossover explanation.","1 point: explains limits of Big-O for exact runtime."],
    ["Compute first; then discuss growth as n becomes large.","Asymptotic notation is not a stopwatch."]);
  return drill(id,"Computer Science · data abstraction, aliasing, and mutation reasoning",
    `A program sets list A to [2,4,6], then sets B←A so that B refers to the same mutable list object. It then executes B[1]←9. (a) State A and B after the mutation under reference semantics. (b) Explain why both names observe the change. (c) Describe one way to create B so later element mutations do not change A. (d) Explain why a shallow copy may still be insufficient if the list contains nested mutable objects.`,
    `(a) Both A and B refer to [2,9,6]. (b) B←A copied the reference/alias, not the list contents, so both names designate the same mutable object. (c) Create a separate copy of the top-level list using the language's copy operation or explicit element copy. (d) A shallow copy duplicates only the outer container; nested objects can still be shared aliases, so mutating a nested object may appear through both structures.`,
    "The nested-object boundary distinguishes top-level copying from full independence of mutable state.",
    ["1 point: correct post-mutation lists.","1 point: reference/alias explanation.","1 point: valid independent top-level copy method.","1 point: explains nested aliasing under shallow copy."],
    ["Ask whether assignment copies an object or a reference in the stated model.","Shallow copying does not recursively duplicate nested objects."]);
}

function environmental(id:string,n:number):QuestionnaireItem{
  const v=n%3;
  if(v===0) return drill(id,"Environmental Science · population growth, doubling, and model limitation",
    `A city of 250,000 people grows at a net rate of 2.0% per year. (a) Using the rule of 70, estimate the doubling time. (b) Use discrete annual growth P=P0(1.02)^t to estimate the population after 10 years. (c) Identify one environmental infrastructure demand likely to rise with population. (d) Explain why a constant 2.0% exponential model should not automatically be extended many decades.`,
    `(a) Doubling time≈70/2=35 years. (b) P≈250,000(1.02)^10≈304,750. (c) Examples include water supply, wastewater treatment, solid-waste handling, energy, housing/land conversion, or transportation. (d) Growth rates change with migration, age structure, economics, policy, resource constraints, and carrying capacity; a constant proportional rate is a simplified short-range model.`,
    "The task couples quantitative projection with infrastructure consequences and a model-domain check.",
    ["1 point: 35-year estimate.","1 point: population ≈305,000.","1 point: plausible environmental infrastructure demand.","1 point: explains why constant exponential extrapolation can fail."],
    ["Rule of 70 uses percent growth, not decimal growth.","A growth model is conditional on its rate remaining roughly stable."]);
  if(v===1) return drill(id,"Environmental Science · pollutant concentration, mass loading, and dilution misconception",
    `A treatment plant discharges 2.0×10^6 L/day of effluent containing nitrate at 15 mg/L into a river. (a) Calculate the nitrate mass discharged per day in kg/day. (b) If treatment lowers concentration to 6 mg/L at the same flow, calculate the new mass loading and percent reduction. (c) Explain why concentration and total mass loading answer different environmental questions. (d) Explain why simply adding clean water to dilute the effluent may lower measured concentration without reducing the total nitrate mass released.`,
    `(a) (2.0×10^6 L/day)(15 mg/L)=3.0×10^7 mg/day=30 kg/day. (b) New loading=12 kg/day; reduction=(30-12)/30=60%. (c) Concentration describes amount per volume/exposure intensity, while loading describes total mass entering the environment per time. (d) Dilution increases volume and lowers mg/L but, absent removal or transformation, leaves the nitrate mass essentially unchanged.`,
    "The dilution check targets a frequent confusion between concentration control and pollutant removal.",
    ["1 point: 30 kg/day.","1 point: 12 kg/day and 60% reduction.","1 point: distinguishes concentration from loading.","1 point: explains dilution without mass removal."],
    ["Track units from mg to kg.","Dilution changes denominator; treatment can change pollutant mass."]);
  return drill(id,"Environmental Science · energy efficiency, emissions accounting, and system boundary",
    `A building uses 12,000 kWh of electricity per month. An efficiency retrofit reduces use by 18%. The grid emits on average 0.40 kg CO2 per kWh delivered. (a) Calculate monthly electricity saved. (b) Estimate avoided operational CO2 emissions per month. (c) State one reason the grid-average estimate may differ from the actual marginal emissions avoided at a particular hour. (d) Explain why an operational-emissions calculation alone is not a complete life-cycle assessment of the retrofit.`,
    `(a) Savings=0.18(12,000)=2,160 kWh/month. (b) Avoided operational emissions≈2,160(0.40)=864 kg CO2/month. (c) The marginal generator mix varies by time, region, demand, renewable output, and dispatch, so marginal emissions can differ from the average factor. (d) A life-cycle assessment can include manufacturing, transport, installation, maintenance, replacement, and end-of-life impacts of retrofit materials in addition to operational savings.`,
    "The question distinguishes average from marginal emissions and operational accounting from a full system boundary.",
    ["1 point: 2,160 kWh saved.","1 point: 864 kg CO2 avoided using stated factor.","1 point: valid reason marginal factor differs.","1 point: explains additional life-cycle boundaries."],
    ["Percent savings multiply the baseline use.","Average grid factor and marginal generator are not always the same."]);
}

function makeReplacement(subject:string,id:string,n:number):QuestionnaireItem|null{
  if(/Statistics/i.test(subject)) return stats(id,n);
  if(/Physics C.*E&M|Physics C.*E.M/i.test(subject)) return em(id,n);
  if(/Physics 2/i.test(subject)) return physics2(id,n);
  if(/Physics|Mechanics/i.test(subject)) return mechanics(id,n);
  if(/Calculus/i.test(subject)) return calculus(id,n);
  if(/Chemistry/i.test(subject)) return chemistry(id,n);
  if(/Biology/i.test(subject)) return biology(id,n);
  if(/Economics/i.test(subject)) return economics(id,subject,n);
  if(/Psychology/i.test(subject)) return psychology(id,n);
  if(/Computer Science/i.test(subject)) return computer(id,n);
  if(/Environmental/i.test(subject)) return environmental(id,n);
  return null;
}

export type RecoveryBatch5Result = {
  items: Record<string, QuestionnaireItem>;
  ids: string[];
  severeMissingAnswer: number;
  severeStructural: number;
};

export function buildRecoveredApItemsBatch5(
  sets: Questionnaire[],
  excludedIds: Set<string>,
  target = 100
): RecoveryBatch5Result {
  const candidates: Array<{subject:string; item:QuestionnaireItem; missing:boolean}> = [];
  for(const set of sets){
    if(!SUPPORTED.test(set.subject || "")) continue;
    for(const item of set.items || []){
      if(excludedIds.has(item.id) || !severe(item)) continue;
      candidates.push({subject:set.subject,item,missing:!hasLegacyAnswer(item)});
    }
  }
  if(candidates.length < target){
    throw new Error(`AP recovery batch 5 expected ${target} severe supported candidates but found ${candidates.length}.`);
  }
  const selected=candidates.slice(0,target);
  const items:Record<string,QuestionnaireItem>={};
  selected.forEach((candidate,index)=>{
    const replacement=makeReplacement(candidate.subject,candidate.item.id,index);
    if(!replacement) throw new Error(`No Batch 5 deep-rewrite factory for ${candidate.subject} / ${candidate.item.id}`);
    items[candidate.item.id]=replacement;
  });
  return {
    items,
    ids:selected.map((x)=>x.item.id),
    severeMissingAnswer:selected.filter((x)=>x.missing).length,
    severeStructural:selected.filter((x)=>!x.missing).length,
  };
}
