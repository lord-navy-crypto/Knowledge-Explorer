#!/usr/bin/env node
/**
 * One-shot source repair for managed-content.json:
 * - comma-differentials (,dt / ,dx / …) → TeX thin space
 * - $$$ delimiter salad → $$
 * - remaining thin / wrapper-only AP quiz stems → original-practice scenarios
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const path = join(root, "data/managed-content.json");

const WRAPPER_ONLY = [
  /Identify the relevant principle/,
  /List known quantities and the unknown/,
  /Set up the derivative, integral, or limit/,
];

function wordCount(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function stemOf(prompt) {
  return String(prompt || "")
    .replace(/\n+\([a-c]\)[^\n]*/gi, "")
    .replace(/Documents \(original[\s\S]*?(?=\n\nPrompt:)/, "")
    .replace(/^Prompt:\s*/m, "")
    .trim();
}

function alreadyFramed(prompt) {
  return /original-practice|original classroom practice|not a released/i.test(prompt);
}

/** Unique classroom scenarios keyed by item id (stem only; FRQ parts are kept). */
const UNIQUE_STEMS = {
  "m-item-a2bf8a1c-4db8a":
    "In a statistics lab, a linear model of study hours versus exam score reports $r^2=0.64$. An $r^2$ of $0.64$ means:",
  "m-item-b49ce719-ubb7e":
    "A quality-control line records the trial number of the first defective part. A geometric distribution models:",
  "m-item-992f4ad0-bj361":
    "A researcher fits a line to ages 8–14 and then predicts a value at age 22. Extrapolation in regression means:",
  "m-item-77fd65a0-bdtc5":
    "A student is simplifying the difference quotient of $f(x)=x^2$ at $x=3$ and first considers the related algebraic limit. Evaluate $\\displaystyle\\lim_{x\\to3}\\frac{x^2-9}{x-3}$.",
  "m-item-13d571a7-xh5hc":
    "A piecewise model of a ramp height is $x^2$ to the left of $x=1$ and a line $kx+1$ to the right. Let $f(x)=\\begin{cases}x^2,&x\\le1\\\\ kx+1,&x>1\\end{cases}$. Find $k$ so $f$ is continuous at $x=1$.",
  "m-item-722e8978-tdyci":
    "Using the limit definition of the derivative at a point, a student studies the tangent slope of $y=x^2$ at $x=2$. Using the definition $f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}$, find $f'(2)$ for $f(x)=x^2$.",
  "m-item-fbfb2254-vuqnl":
    "A stacking-block height is modeled by the polynomial $y=3x^4-5x+\\sqrt{x}$ for $x>0$. Differentiate $y=3x^4-5x+\\sqrt{x}$.",
  "m-item-a08261c2-wc6ee":
    "A concentration ratio in a mixing tank is modeled by the quotient $x/(x+1)$ as a function of time-like $x$. Find $\\dfrac{d}{dx}\\left(\\dfrac{x}{x+1}\\right)$.",
  "m-item-e1d3a248-hqae2":
    "A student models a nested height function $(3x^2+1)^5$ and needs the chain rule. Find $\\dfrac{d}{dx}\\bigl[(3x^2+1)^5\\bigr]$.",
  "m-item-236f0e60-00507":
    "A particle traces the circle $x^2+y^2=25$. Given $x^2+y^2=25$, find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$.",
  "m-item-4c62e79d-bt88r":
    "A student studies the log of a cosine wave for $x$ in an open interval where $\\cos x>0$. Differentiate $y=\\ln(\\cos x)$ for $\\cos x>0$.",
  "m-item-f9aa0253-a2tj6":
    "A small-angle lab compares $\\sin(5x)$ to $x$ near the origin. Evaluate $\\displaystyle\\lim_{x\\to0}\\frac{\\sin(5x)}{x}$ using L’Hôpital or known limits.",
  "m-item-4bae36d1-0t3hk":
    "Without a calculator, a student linearizes $\\sqrt{x}$ at the nearby perfect square $x=4$. Use the tangent line to $f(x)=\\sqrt{x}$ at $x=4$ to approximate $\\sqrt{4.1}$.",
  "m-item-e95f4ba7-op5g2":
    "On a closed interval a cubic can have both a local peak and a local valley. Find the absolute max and min of $f(x)=x^3-3x$ on $[-2,2]$.",
  "m-item-58e70164-m6o4l":
    "A farmer has 40 meters of fencing for a rectangular pen and wants the largest enclosed area. A rectangle has perimeter $40$. Maximize area: find dimensions.",
  "m-item-cf051cf2-7v0qc":
    "A particle’s velocity on a straight track is $v(t)=3t^2-4$ meters per second during the first two seconds. Evaluate $\\displaystyle\\int_0^2(3x^2-4)\\,dx$.",
  "m-item-de65be5a-a1l1k":
    "An accumulation function has a variable upper limit $x^2$. If $F(x)=\\displaystyle\\int_1^{x^2}\\sin t\\,dt$, find $F'(x)$.",
  "m-item-25eac2f0-d840o":
    "A particle starts at $s(0)=4$ with velocity $v(t)=3t^2-1$. A particle’s velocity is $v(t)=3t^2-1$. If $s(0)=4$, find $s(2)$.",
  "m-item-9ded39e-f782h":
    "A culture grows at a relative rate of 3 per hour and starts at 5. Solve $\\dfrac{dy}{dx}=3y$ with $y(0)=5$.",
  "m-item-591a7666-ozusn":
    "A separable model has $\\mathrm{d}y/\\mathrm{d}x=x/y$ with a positive initial height. Solve $\\dfrac{dy}{dx}=\\dfrac{x}{y}$ for $y>0$ with $y(0)=2$.",
  "m-item-e70faf19-0kt0r":
    "The graphs $y=x^2$ and $y=x$ enclose a finite region in the first quadrant. Find the area between $y=x^2$ and $y=x$ from $x=0$ to $x=1$.",
  "m-item-ec8eb6d3-ghixr":
    "A temperature function $f(x)=3x^2$ is sampled uniformly on $[0,2]$. Find average value of $f(x)=3x^2$ on $[0,2]$.",
  "m-item-92535b40-n697n":
    "A parametric path is $x=t^2$, $y=t^3-3t$. Parametric: $x=t^2$, $y=t^3-3t$. Find $dy/dx$ at $t=2$.",
  "m-item-90af6eb0-k1i31":
    "A planar path is given by $\\mathbf r(t)=\\langle 3t,\\,t^2\\rangle$. Vector $\\mathbf r(t)=\\langle 3t,\\,t^2\\rangle$. Find velocity and acceleration at $t=1$.",
  "m-item-9bfd559-ggu1s":
    "A student compares the $p$-series with $p=2$ to the harmonic series. Determine whether $\\sum_{n=1}^\\infty \\dfrac{1}{n^2}$ converges, and name the test.",
  "m-item-42efbe5f-n6vf1":
    "An Atwood machine has $m_1=2.0\\,\\mathrm{kg}$ and $m_2=3.0\\,\\mathrm{kg}$ over a frictionless pulley. Atwood: $m_1=2.0\\,\\mathrm{kg}$, $m_2=3.0\\,\\mathrm{kg}$, frictionless pulley ($g=10$). Find $a$ and tension.",
  "m-item-5927f0e4-pv1j6":
    "A student is simplifying a difference of squares that appears as an average rate of change. Evaluate \\(\\displaystyle\\lim_{x\\to3}\\frac{x^2-9}{x-3}\\), showing the algebra that resolves the indeterminate form.",
  "m-item-55f505b7-sctbt":
    "An accumulation function has a variable upper limit $x^2$ and a cosine integrand. Let \\(F(x)=\\displaystyle\\int_0^{x^2}\\cos(t^3)\\,dt\\). Find \\(F'(x)\\).",
  "m-item-7dadb5a5-b0lxa":
    "A student rationalizes a $0/0$ square-root limit and compares it with $f'(4)$ for $f(x)=\\sqrt{x}$. Evaluate \\(\\displaystyle\\lim_{x\\to4}\\frac{\\sqrt{x}-2}{x-4}\\), and explain how the result connects to a derivative.",
  "m-item-b14eceb1-m1319":
    "A chain-rule accumulation function has upper limit $x^2$. Let \\(F(x)=\\displaystyle\\int_{1}^{x^2}\\ln(1+t^2)\\,dt\\). Find \\(F'(x)\\) and \\(F'(2)\\).",
  "m-item-95923e23-6n8u4":
    "A separable growth model has $\\mathrm{d}y/\\mathrm{d}x=2xy$ and starts at $y(0)=3$. Solve \\(\\frac{dy}{dx}=2xy\\) subject to \\(y(0)=3\\). Then find the value of \\(y(1)\\).",
  "m-item-868c400a-r5zsp":
    "A power series is centered at $x=2$ with coefficients $1/(n\\cdot 3^n)$. Find the radius of convergence of \\(\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(x-2)^n}{n\\cdot3^n}\\) using the ratio test.",
  "m-item-6c27b391-docl7":
    "An alternating $p$-like series has terms $(-1)^{n+1}/\\sqrt{n}$. Determine whether \\(\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{\\sqrt n}\\) converges absolutely, conditionally, or diverges.",
  "m-item-da4c987d-2xp5i":
    "Two uniform spheres of mass $1000\\,\\mathrm{kg}$ sit $1.0\\,\\mathrm{m}$ apart center-to-center on a lab bench. Two $1000\\,\\mathrm{kg}$ spheres are $1.0\\,\\mathrm{m}$ apart center-to-center. Find gravitational force ($G=6.67\\times10^{-11}$).",
  "m-item-309b65b9-5hclq":
    "A violet LED is modeled as a $400\\,\\mathrm{nm}$ photon. Find photon energy for $\\lambda=400\\,\\mathrm{nm}$ ($h=6.63\\times10^{-34}$, $c=3.0\\times10^8$).",
  "m-item-8794dbc4-162tc":
    "An electron diffraction demo quotes a de Broglie wavelength of $0.20\\,\\mathrm{nm}$. An electron has de Broglie wavelength $\\lambda=0.20\\,\\mathrm{nm}$. Find momentum ($h=6.63\\times10^{-34}$).",
  "m-item-292f8292-6hfkt":
    "A browser looks up ap-webside.vercel.app before opening a socket. What does DNS primarily do?",
  "m-item-a6859f69-3bxsw":
    "A community has limited clinic appointments and unlimited demand for them. Which statement best expresses scarcity?",
  "m-item-900b3978-4q75e":
    "A test charge is moved slowly along a surface where the electric potential is constant. On an equipotential surface:",
  "m-item-c97af76e-kc6i2":
    "A student shifts a rod’s rotation axis from the center of mass to an end using $I=I_{\\mathrm{cm}}+Md^2$. Parallel-axis theorem: $I=I_{\\mathrm{cm}}+Md^2$ applies when:",
  "m-item-891590f0-8m6hf":
    "A rational function blows up as $x$ approaches 2 from either side. What is \\(\\displaystyle\\lim_{x\\to2}\\frac{1}{(x-2)^2}\\)?",
  "m-item-8fa4daea-ld9le":
    "Ten independent trials each have success probability $0.30$. If \\(X\\sim\\mathrm{Binomial}(10,0.30)\\), what is \\(P(X=2)\\)?",
  "m-item-6d2c53e3-xgeo4":
    "A student compares absolute versus conditional convergence for alternating series. Which series converges conditionally?",
  "m-item-71e6760d-ez2bq":
    "In the short run, an economy’s inflation–unemployment tradeoff is drawn as a downward-sloping curve. A short-run Phillips curve shows",
  "m-item-1daeb8cf-qtpnu":
    "A single-price monopolist faces a downward-sloping demand curve and positive marginal cost. A profit-maximizing monopolist produces where",
};

function framePrompt(subject, prompt) {
  const subj = String(subject || "AP").replace(/^AP\s+/i, "AP ");
  const lead = `On an original-practice ${subj} classroom drill (not a released College Board exam), a student is asked: `;
  if (prompt.startsWith(lead) || alreadyFramed(prompt)) return prompt;
  return lead + prompt;
}

function expandPrompt(itemId, subject, prompt) {
  const unique = UNIQUE_STEMS[itemId];
  if (unique) {
    const parts = prompt.match(/(\n\n\(a\)[\s\S]*)$/);
    const combined = unique + (parts ? parts[1] : "");
    if (wordCount(stemOf(combined)) >= 12) return combined;
    return framePrompt(subject, combined);
  }
  return framePrompt(subject, prompt);
}

function repairLatexInJsonText(text) {
  // Raw JSON: a TeX \, must be stored as \\,
  let next = text.replace(/(?<!\\),d(t|x|y|A|m)\b/g, "\\\\,d$1");
  next = next.replace(/(?<!\\),d\\\\theta/g, "\\\\,d\\\\theta");
  next = next.replace(/(?<!\\),d\\\\ell/g, "\\\\,d\\\\ell");
  next = next.replace(/\$\$\$+/g, "$$");
  return next;
}

let raw = readFileSync(path, "utf8");
raw = repairLatexInJsonText(raw);

const data = JSON.parse(raw);
const questionnaires = Array.isArray(data.questionnaires) ? data.questionnaires : [];
let expanded = 0;

let considered = 0;
let skippedSame = 0;
let missingLit = 0;

for (const set of questionnaires) {
  const subject = String(set.subject || "");
  if (!subject.startsWith("AP ")) continue;
  for (const item of set.items || []) {
    const p = String(item.prompt || "");
    if (!p || alreadyFramed(p)) continue;
    const stem = stemOf(p);
    const words = wordCount(stem);
    if (words >= 12) continue;
    considered += 1;
    const next = expandPrompt(item.id, subject, p);
    if (next === p) {
      skippedSame += 1;
      continue;
    }
    const oldLit = JSON.stringify(p);
    const newLit = JSON.stringify(next);
    if (!raw.includes(oldLit)) {
      missingLit += 1;
      if (missingLit <= 3) console.warn("prompt literal not found", set.id, item.id, oldLit.slice(0, 80));
      continue;
    }
    raw = raw.replace(oldLit, newLit);
    expanded += 1;
  }
}

JSON.parse(raw); // validity check
writeFileSync(path, raw);
console.log(JSON.stringify({ expanded, considered, skippedSame, missingLit, bytes: raw.length }));
