#!/usr/bin/env python3
"""Wave 7 FRQ-half practice packs for AP Macro, Micro, CSA, and CSP.

Original CED-aligned free-response items (not College Board exam verbatim).
Each quiz has five ``frq_half`` items. Calculus / chem / physics / bio / stats /
history / English packs live in other wave-7 files, so they are omitted here.
"""

from __future__ import annotations

BASE_TAGS = ["frq-practice", "wave-7", "ced-aligned", "generated", "with-solutions"]
GEN_NOTE = (
    "Original AI-generated FRQ-style practice aligned to College Board CED. "
    "Not College Board exam verbatim. Includes process steps and answer keys. "
    "· wave 7 · 2026-08-24"
)

MACRO = "AP Macroeconomics"
MICRO = "AP Microeconomics"
CSA = "AP Computer Science A"
CSP = "AP Computer Science Principles"


def _qid(slug: str) -> str:
    return f"m-quiz-frq-w7-{slug}"


def _iid(slug: str, n: int) -> str:
    return f"m-item-frq-w7-{slug}-{n:02d}"


def frq(prompt, steps, answers, concept_id, slug, n, intro=None, tier=2):
    return {
        "id": _iid(slug, n),
        "format": "frq_half",
        "prompt": prompt,
        "conceptId": concept_id,
        "conceptIntro": intro,
        "difficultyTier": tier,
        "visibleSteps": steps,
        "blankSteps": answers if isinstance(answers, list) else [answers],
        "hints": [
            "Label the graph or state the rule before substituting numbers.",
            "Show the intermediate quantity (shift, multiplier, or return value).",
            "Close with a signed conclusion that answers every labeled part.",
        ],
    }


def quiz(title, subject, desc, extra_tags, items, slug, minutes=50, tier=2):
    if len(items) != 5:
        raise ValueError(f"{title}: expected 5 frq_half items, got {len(items)}")
    return {
        "id": _qid(slug),
        "title": title,
        "subject": subject,
        "kind": "generated",
        "description": desc,
        "generationNote": GEN_NOTE,
        "estimatedMinutes": minutes,
        "tags": BASE_TAGS + extra_tags,
        "items": items,
        "difficultyTier": tier,
    }


FRQ_QUIZZES = [
    # ── AP Macroeconomics Wave 7A: graphs ──
    quiz(
        "AP Macroeconomics FRQ Practice Wave 7A — AD–AS Graphs and Policy Shifts",
        MACRO,
        "Half-FRQ practice drawing AD–AS, labeling gaps, and tracing fiscal and monetary graph shifts.",
        ["ap-macroeconomics", "ad-as", "graphs", "wave-7a"],
        [
            frq(
                "The economy is at long-run equilibrium with PL0 and YF. Consumer confidence falls. "
                "(a) On an AD–AS diagram, show the short-run effects on AD, the price level, and real output. "
                "(b) Identify the output gap that appears. "
                "(c) If the government takes no action, explain the long-run self-correction using SRAS.",
                [
                    "Lower consumption shifts AD left: AD0 → AD1.",
                    "Short-run equilibrium: PL and Y both fall; Y < YF is a recessionary gap.",
                    "Idle resources and lower expected input prices shift SRAS right until Y returns to YF at a lower PL.",
                ],
                [
                    "(a) AD shifts left; PL↓ and Y↓.",
                    "(b) Recessionary (negative output) gap.",
                    "(c) Sticky-wage/price adjustment: SRAS shifts right to YF; long-run PL is lower than PL0.",
                ],
                "macro-adas-recession-w7",
                "macro-7a",
                1,
                intro="AD–AS: demand shocks move PL and Y together in the short run.",
                tier=2,
            ),
            frq(
                "Starting from long-run equilibrium, a sudden rise in imported oil raises firms’ unit costs. "
                "(a) Which curve shifts, and in which direction? "
                "(b) What happens to the short-run price level, real output, and unemployment? "
                "(c) Name the combination of inflation and stagnation this produces.",
                [
                    "An adverse supply shock shifts SRAS left (cost-push).",
                    "PL rises while Y falls, so cyclical unemployment rises.",
                    "Simultaneous inflation and falling output is stagflation.",
                ],
                [
                    "(a) SRAS left.",
                    "(b) PL↑, Y↓, unemployment↑.",
                    "(c) Stagflation (cost-push inflation with a recessionary gap).",
                ],
                "macro-sras-oil-w7",
                "macro-7a",
                2,
                intro="Supply shocks break the usual AD correlation between PL and Y.",
                tier=2,
            ),
            frq(
                "The economy has a recessionary gap. Congress increases government purchases by a given amount "
                "financed by borrowing. On a correctly labeled AD–AS graph: "
                "(a) show the intended AD shift; "
                "(b) state what happens to the price level and real output in the short run; "
                "(c) explain crowding out using the loanable-funds or money-market channel and how it mutes the AD shift.",
                [
                    "G↑ raises planned spending, so AD shifts right toward YF.",
                    "Short run: PL and Y both rise (gap shrinks).",
                    "Deficit borrowing raises real interest rates → I↓ (and possibly NX via appreciation), so AD shifts right by less than the full multiplier.",
                ],
                [
                    "(a) AD right.",
                    "(b) PL↑ and Y↑ in the short run.",
                    "(c) Higher r from public borrowing crowds out private investment (and may reduce NX), so the AD shift is smaller than with a closed, interest-insensitive economy.",
                ],
                "macro-fiscal-crowding-w7",
                "macro-7a",
                3,
                intro="Graph the fiscal impulse, then qualify it with interest-rate crowding out.",
                tier=3,
            ),
            frq(
                "The central bank sells government bonds in an open-market operation while the economy is at YF. "
                "(a) Show the short-run AD–AS result. "
                "(b) Identify the short-run change in unemployment relative to the natural rate. "
                "(c) If wages are sticky downward, explain why returning to YF may be slow without further policy.",
                [
                    "Bond sales shrink bank reserves and the money supply → r↑ → I↓ → AD left.",
                    "Y falls below YF, so unemployment rises above the natural rate.",
                    "Downward wage stickiness slows the rightward SRAS adjustment that would restore YF.",
                ],
                [
                    "(a) AD shifts left; short-run PL↓ and Y↓.",
                    "(b) Unemployment rises above the natural rate.",
                    "(c) Sticky wages delay SRAS right-shift, so the recessionary gap can persist.",
                ],
                "macro-omo-contraction-w7",
                "macro-7a",
                4,
                intro="Money-market tightening shows up as a left shift of AD.",
                tier=2,
            ),
            frq(
                "An economy is in a short-run equilibrium with Y > YF (inflationary gap). "
                "(a) Draw AD–AS and label the gap. "
                "(b) Show a contractionary fiscal policy that closes the gap without shifting LRAS. "
                "(c) Contrast that policy with a leftward LRAS movement (e.g., capital destruction) in terms of potential output.",
                [
                    "Inflationary gap: actual Y exceeds potential YF at a high PL.",
                    "Lower G or higher net taxes shift AD left until Y = YF; LRAS stays put.",
                    "A left shift of LRAS lowers potential output itself — that is not a stabilization policy.",
                ],
                [
                    "(a) Horizontal (or labeled) distance Y − YF is the inflationary gap.",
                    "(b) AD left via ↓G or ↑T until intersection is at YF.",
                    "(c) Fiscal stabilization preserves YF; LRAS left reduces the economy’s productive capacity.",
                ],
                "macro-inflationary-gap-w7",
                "macro-7a",
                5,
                intro="Distinguish demand management from a change in potential output.",
                tier=2,
            ),
        ],
        "macro-7a",
        tier=3,
    ),
    # ── AP Macroeconomics Wave 7B: multipliers ──
    quiz(
        "AP Macroeconomics FRQ Practice Wave 7B — Spending, Tax, and Money Multipliers",
        MACRO,
        "Half-FRQ practice with MPC/MPS, spending and tax multipliers, and the simple money multiplier.",
        ["ap-macroeconomics", "multipliers", "mpc", "wave-7b"],
        [
            frq(
                "MPC = 0.80 and there are no income taxes or imports. "
                "(a) Find MPS and the simple spending multiplier. "
                "(b) By how much must government purchases change to close a $40 billion recessionary gap? "
                "(c) If instead lump-sum taxes are changed, what tax change closes the same gap? Sign the tax change.",
                [
                    "MPS = 1 − MPC = 0.20; spending multiplier = 1/MPS = 5.",
                    "Needed ΔY = 40; ΔG = 40/5 = 8 (increase).",
                    "Tax multiplier = −MPC/MPS = −4; ΔT = 40/(−4) = −10 (tax cut of 10).",
                ],
                [
                    "(a) MPS = 0.20; spending multiplier = 5.",
                    "(b) Increase G by $8 billion.",
                    "(c) Cut lump-sum taxes by $10 billion.",
                ],
                "macro-spend-tax-mult-w7",
                "macro-7b",
                1,
                intro="Spending multiplier 1/(1−MPC); tax multiplier −MPC/(1−MPC).",
                tier=2,
            ),
            frq(
                "Autonomous investment falls by $12 billion. MPC = 0.75, closed economy, no taxes. "
                "(a) Calculate the spending multiplier and the change in equilibrium real GDP. "
                "(b) Explain why the GDP change is larger than $12 billion. "
                "(c) State one reason the actual change could be smaller than your calculation.",
                [
                    "Multiplier = 1/0.25 = 4; ΔY = 4 × (−12) = −48.",
                    "Each round of income generates extra consumption = MPC × extra income.",
                    "Crowding in/out via interest rates, imports, taxes, or idle-capacity limits shrink the multiplier.",
                ],
                [
                    "(a) Multiplier = 4; equilibrium GDP falls by $48 billion.",
                    "(b) Induced consumption amplifies the autonomous shock.",
                    "(c) Example: higher r, income taxes, or import leakage reduce the multiplier.",
                ],
                "macro-investment-shock-mult-w7",
                "macro-7b",
                2,
                intro="Autonomous spending shocks are scaled by 1/(1−MPC).",
                tier=2,
            ),
            frq(
                "The required reserve ratio is 0.10 and banks hold no excess reserves. The public holds no cash. "
                "(a) State the simple money multiplier. "
                "(b) The central bank buys $5 million of bonds from banks. Find the maximum increase in checkable deposits. "
                "(c) If banks then choose to hold $1 million of excess reserves after the purchase, explain how the deposit expansion changes (qualitative or quantitative).",
                [
                    "Simple multiplier = 1/rr = 10.",
                    "Maximum ΔD = 10 × 5 = $50 million.",
                    "Excess reserves are a leakage: less of each deposit is loaned, so the expansion is smaller than $50 million "
                    "(new effective multiplier < 10).",
                ],
                [
                    "(a) Money multiplier = 10.",
                    "(b) Deposits can rise by up to $50 million.",
                    "(c) Holding excess reserves reduces lending; maximum deposit creation falls below $50 million.",
                ],
                "macro-money-mult-w7",
                "macro-7b",
                3,
                intro="Deposit expansion is 1/rr only if excess reserves and currency drain are zero.",
                tier=2,
            ),
            frq(
                "MPC = 0.90. A balanced-budget increase raises G and T by the same $20 billion. "
                "(a) Compute the spending-multiplier effect of ΔG. "
                "(b) Compute the tax-multiplier effect of ΔT. "
                "(c) Find the net change in equilibrium GDP and name the theorem this illustrates.",
                [
                    "Spending multiplier = 10; ΔY from G = +200.",
                    "Tax multiplier = −9; ΔY from T = −180.",
                    "Net ΔY = +20, equal to ΔG; balanced-budget multiplier is 1 in the simple Keynesian model.",
                ],
                [
                    "(a) +$200 billion from ΔG.",
                    "(b) −$180 billion from ΔT.",
                    "(c) Net +$20 billion; balanced-budget multiplier = 1.",
                ],
                "macro-balanced-budget-w7",
                "macro-7b",
                4,
                intro="Equal ΔG and ΔT do not cancel: G enters GDP one-for-one at the first round.",
                tier=3,
            ),
            frq(
                "An economy has a $30 billion inflationary gap. MPC = 0.60. "
                "(a) What change in government purchases closes the gap? Include the sign. "
                "(b) What change in lump-sum taxes closes the gap? Include the sign. "
                "(c) Why might policymakers prefer a mix of small G and T changes rather than one large instrument?",
                [
                    "Spending multiplier = 1/0.40 = 2.5; ΔG = −30/2.5 = −12.",
                    "Tax multiplier = −0.60/0.40 = −1.5; ΔT = −30/(−1.5) = +20 (tax increase).",
                    "Political feasibility, composition of spending, and interest-rate/forex side effects differ by instrument.",
                ],
                [
                    "(a) Decrease G by $12 billion.",
                    "(b) Increase lump-sum taxes by $20 billion.",
                    "(c) Smaller moves on two instruments can spread incidence, limit crowding out, or protect particular programs.",
                ],
                "macro-close-inflation-mult-w7",
                "macro-7b",
                5,
                intro="To cool an overheating economy, reduce G or raise T using the matching multiplier.",
                tier=2,
            ),
        ],
        "macro-7b",
        tier=3,
    ),
    # ── AP Macroeconomics Wave 7C: money market + open economy ──
    quiz(
        "AP Macroeconomics FRQ Practice Wave 7C — Money Market and the Open Economy",
        MACRO,
        "Half-FRQ practice with money demand/supply, loanable funds, exchange rates, and net exports.",
        ["ap-macroeconomics", "money-market", "open-economy", "wave-7c"],
        [
            frq(
                "Draw a money-market graph with nominal interest rate on the vertical axis and quantity of money on the horizontal. "
                "(a) Show an increase in real income. "
                "(b) State the short-run effect on the equilibrium nominal interest rate if the money supply is fixed. "
                "(c) Explain the investment-spending channel to AD.",
                [
                    "Higher Y raises transactions demand for money: MD shifts right.",
                    "With MS vertical (or fixed), r rises.",
                    "Higher r reduces interest-sensitive I, so AD shifts left (or rises less).",
                ],
                [
                    "(a) MD right.",
                    "(b) Equilibrium nominal r increases.",
                    "(c) I(r) falls → planned investment ↓ → AD ↓.",
                ],
                "macro-md-income-w7",
                "macro-7c",
                1,
                intro="Money demand depends on Y and r; MS is set by the central bank.",
                tier=2,
            ),
            frq(
                "The central bank increases the money supply. "
                "(a) Show the money-market result for r. "
                "(b) On a foreign-exchange graph for the domestic currency, show the effect of the interest-rate change on capital flows and the exchange rate (other countries’ rates unchanged). "
                "(c) What happens to net exports, and how does that reinforce or offset the domestic I channel for AD?",
                [
                    "MS right → r↓.",
                    "Lower domestic r → capital outflow / less inflow → supply of domestic currency in forex rises (or demand falls) → depreciation.",
                    "Depreciation raises NX; together with higher I, AD rises more than from I alone.",
                ],
                [
                    "(a) Nominal r falls.",
                    "(b) Domestic currency depreciates as financial capital leaves.",
                    "(c) NX rises; the open-economy channel reinforces expansionary monetary policy.",
                ],
                "macro-ms-forex-w7",
                "macro-7c",
                2,
                intro="Interest-rate parity-style capital flows link money markets to the exchange rate.",
                tier=3,
            ),
            frq(
                "National saving falls because the budget deficit widens (private saving unchanged). Closed economy. "
                "(a) Show the loanable-funds market: which curve shifts? "
                "(b) What happens to the real interest rate and private investment? "
                "(c) Open the economy: explain how a higher domestic real rate tends to affect the capital-and-financial account and the currency.",
                [
                    "Public saving ↓ shifts national saving (supply of loanable funds) left.",
                    "r↑ and I↓ (crowding out).",
                    "Higher r attracts financial inflows; capital-and-financial account moves toward surplus; currency appreciates.",
                ],
                [
                    "(a) Supply of loanable funds left (or demand for funds by government right — equivalent crowding-out story).",
                    "(b) Real r↑, private I↓.",
                    "(c) Net capital inflow ↑; domestic currency appreciates.",
                ],
                "macro-lf-deficit-w7",
                "macro-7c",
                3,
                intro="Twin deficits: fiscal deficit, capital inflow, stronger currency, weaker NX.",
                tier=2,
            ),
            frq(
                "Domestic inflation exceeds foreign inflation under a floating rate, other things equal. "
                "(a) What happens to demand for the domestic currency in the forex market? "
                "(b) Does the currency tend to appreciate or depreciate? "
                "(c) Explain how that exchange-rate movement affects net exports in the short run.",
                [
                    "Domestic goods become relatively expensive → foreigners demand fewer exports → demand for domestic currency falls (and residents supply more currency to buy cheaper imports).",
                    "The currency depreciates.",
                    "Depreciation cheapens exports and dearens imports, so NX tends to recover (partial offset to the inflation gap).",
                ],
                [
                    "(a) Demand for the currency falls (supply may rise).",
                    "(b) Depreciation.",
                    "(c) NX rises relative to the no-depreciation case (exports more competitive).",
                ],
                "macro-ppp-forex-w7",
                "macro-7c",
                4,
                intro="Relative price levels shift forex demand for a currency.",
                tier=2,
            ),
            frq(
                "A country runs a current-account deficit of $40 billion. "
                "(a) In a floating-rate world with official reserves unchanged, what must be true of the capital-and-financial account? "
                "(b) Identify one domestic interest-rate story that could produce that financial inflow. "
                "(c) Explain why a current-account deficit is not automatically ‘bad’ in AP Macro terms.",
                [
                    "Balance of payments: CA + CFA ≈ 0 if reserve changes are zero, so CFA surplus ≈ $40 billion.",
                    "Example: relatively high real r attracting purchases of domestic assets.",
                    "Inflows can finance productive investment; the issue is sustainability and composition, not the sign alone.",
                ],
                [
                    "(a) Capital-and-financial account surplus of about $40 billion.",
                    "(b) e.g. higher domestic real interest rates than abroad.",
                    "(c) The counterpart is foreign financing; it can fund capital formation rather than implying insolvency by itself.",
                ],
                "macro-bop-identity-w7",
                "macro-7c",
                5,
                intro="Current-account and financial-account balances are counterparts.",
                tier=2,
            ),
        ],
        "macro-7c",
        tier=3,
    ),
    # ── AP Microeconomics Wave 7A: elasticity ──
    quiz(
        "AP Microeconomics FRQ Practice Wave 7A — Elasticity and Tax Incidence",
        MICRO,
        "Half-FRQ practice with price, income, and cross-price elasticity plus who pays a per-unit tax.",
        ["ap-microeconomics", "elasticity", "tax-incidence", "wave-7a"],
        [
            frq(
                "Price rises from $8 to $10 and quantity demanded falls from 120 to 80. Use the midpoint formula. "
                "(a) Compute the price elasticity of demand. "
                "(b) Classify demand as elastic, inelastic, or unit elastic. "
                "(c) Does total revenue rise or fall? Justify with the elasticity.",
                [
                    "Midpoint %ΔQ = (80−120)/((80+120)/2) = −40/100 = −0.40; %ΔP = (10−8)/((10+8)/2) = 2/9 ≈ 0.222.",
                    "|Ed| = 0.40/0.222 ≈ 1.80 > 1, so elastic.",
                    "Along elastic demand, P↑ reduces TR.",
                ],
                [
                    "(a) |Ed| ≈ 1.8 (midpoint).",
                    "(b) Elastic.",
                    "(c) Total revenue falls because quantity falls proportionally more than price rises.",
                ],
                "micro-midpoint-ed-w7",
                "micro-7a",
                1,
                intro="Midpoint elasticity avoids the start- vs end-point bias.",
                tier=2,
            ),
            frq(
                "Income rises 5 percent. Demand for good N falls 2 percent; demand for good L rises 8 percent. "
                "(a) Compute income elasticity for N and L. "
                "(b) Classify each as inferior or normal, and say whether L is a luxury in the usual AP cutoff. "
                "(c) If two goods have cross-price elasticity +0.6, are they substitutes or complements?",
                [
                    "Ei,N = −2/5 = −0.4; Ei,L = 8/5 = 1.6.",
                    "N inferior (Ei < 0); L normal luxury (Ei > 1).",
                    "Positive Exy means substitutes.",
                ],
                [
                    "(a) Ei(N) = −0.4; Ei(L) = 1.6.",
                    "(b) N inferior; L normal luxury.",
                    "(c) Substitutes.",
                ],
                "micro-income-cross-w7",
                "micro-7a",
                2,
                intro="Sign of Ei sorts inferior vs normal; |Ei|>1 is income-elastic (luxury).",
                tier=2,
            ),
            frq(
                "A per-unit tax of $4 is levied on sellers in a competitive market. Demand is relatively inelastic; supply is relatively elastic. "
                "(a) Show the tax as a wedge or a left shift of supply by $4. "
                "(b) Who bears more of the statutory tax in economic incidence, buyers or sellers? "
                "(c) Explain using relative elasticities.",
                [
                    "Supply shifts up by the tax; the vertical gap between demand price and seller net price is $4.",
                    "Inelastic demand → buyers’ price rises by most of the $4.",
                    "The less elastic side cannot escape the tax, so it bears more of the burden.",
                ],
                [
                    "(a) Supply up/left by $4 per unit.",
                    "(b) Buyers bear more of the burden.",
                    "(c) Steep (inelastic) demand vs flat (elastic) supply assigns more incidence to consumers.",
                ],
                "micro-tax-incidence-w7",
                "micro-7a",
                3,
                intro="Incidence depends on elasticities, not on whether the law names buyers or sellers.",
                tier=2,
            ),
            frq(
                "Linear demand Q = 100 − 2P. "
                "(a) Find the price elasticity of demand at P = 20 using the point formula Ed = (dQ/dP)×(P/Q). "
                "(b) Find Q at that price. "
                "(c) Is a small price increase at this point TR-increasing or TR-decreasing?",
                [
                    "dQ/dP = −2; Q = 100 − 40 = 60.",
                    "Ed = (−2)×(20/60) = −2/3, so |Ed| = 2/3 < 1 (inelastic).",
                    "Inelastic region: P↑ raises TR.",
                ],
                [
                    "(a) Ed = −2/3 (|Ed| = 2/3).",
                    "(b) Q = 60.",
                    "(c) TR increases if price rises slightly.",
                ],
                "micro-point-elasticity-w7",
                "micro-7a",
                4,
                intro="Point elasticity uses the slope of the demand function.",
                tier=3,
            ),
            frq(
                "A city raises the cigarette tax. Short-run demand is inelastic; long-run demand is more elastic because substitutes and quitting take time. "
                "(a) Compare short-run vs long-run quantity responses to the same tax-inclusive price rise. "
                "(b) Will tax revenue be larger in the short run or the long run, other things equal? "
                "(c) Name one non-revenue goal of the tax that is stronger in the long run.",
                [
                    "Long-run |Ed| larger → bigger drop in Q for a given P rise.",
                    "Larger Q drop erodes the tax base, so revenue is typically higher in the short run.",
                    "Health/externality reduction: more quitting and substitution over time.",
                ],
                [
                    "(a) Quantity falls more in the long run.",
                    "(b) Tax revenue is typically larger in the short run.",
                    "(c) Greater reduction in smoking (externality/internalities) in the long run.",
                ],
                "micro-sr-lr-elasticity-w7",
                "micro-7a",
                5,
                intro="Time horizon is a determinant of elasticity.",
                tier=2,
            ),
        ],
        "micro-7a",
        tier=3,
    ),
    # ── AP Microeconomics Wave 7B: surplus ──
    quiz(
        "AP Microeconomics FRQ Practice Wave 7B — Surplus, Efficiency, and Controls",
        MICRO,
        "Half-FRQ practice with consumer/producer surplus, deadweight loss, price ceilings, and taxes.",
        ["ap-microeconomics", "surplus", "dwl", "wave-7b"],
        [
            frq(
                "Demand: P = 40 − Q. Supply: P = 10 + Q. "
                "(a) Find competitive equilibrium P* and Q*. "
                "(b) Compute consumer surplus and producer surplus. "
                "(c) State total surplus.",
                [
                    "40 − Q = 10 + Q ⇒ 30 = 2Q ⇒ Q* = 15, P* = 25.",
                    "CS = (1/2)(40−25)(15) = 112.5; PS = (1/2)(25−10)(15) = 112.5.",
                    "TS = CS + PS = 225.",
                ],
                [
                    "(a) P* = 25, Q* = 15.",
                    "(b) CS = 112.5; PS = 112.5.",
                    "(c) Total surplus = 225.",
                ],
                "micro-cs-ps-eq-w7",
                "micro-7b",
                1,
                intro="Triangles under demand/above price and above supply/below price.",
                tier=2,
            ),
            frq(
                "Using the same curves P = 40 − Q and P = 10 + Q, a price ceiling is set at Pc = 20. "
                "(a) Find Qd and Qs at Pc and identify shortage or surplus. "
                "(b) What quantity actually trades if the short side rules? "
                "(c) Explain why total surplus is lower than at the free-market equilibrium.",
                [
                    "Qd = 40 − 20 = 20; Qs = 20 − 10 = 10 (from P = 10 + Q ⇒ Q = P − 10).",
                    "Shortage of 10; trades = Qs = 10.",
                    "Units 10–15 have MB > MC but are not produced; DWL triangle appears.",
                ],
                [
                    "(a) Qd = 20, Qs = 10 → shortage of 10.",
                    "(b) Quantity traded = 10.",
                    "(c) Mutually beneficial trades between Q = 10 and Q* = 15 are lost (DWL).",
                ],
                "micro-ceiling-surplus-w7",
                "micro-7b",
                2,
                intro="A binding ceiling is below P*; the short side (sellers) sets quantity.",
                tier=2,
            ),
            frq(
                "A $6 per-unit tax is placed on sellers (same linear market as before, or a generic competitive market). "
                "(a) Identify the two prices after tax: what buyers pay and what sellers receive. "
                "(b) Which area is tax revenue? "
                "(c) Which area is deadweight loss, and why it exists.",
                [
                    "Buyers pay Pb; sellers net Pb − 6; the $6 wedge sits between demand and supply.",
                    "Revenue = tax × Qt (rectangle).",
                    "DWL is the triangle of unproduced units where MB > MC after the tax.",
                ],
                [
                    "(a) Pb on demand at Qt; Ps = Pb − 6 on supply at Qt.",
                    "(b) Rectangle height $6 and width Qt.",
                    "(c) DWL triangle between demand and supply from Qt to Q*; lost gains from trade.",
                ],
                "micro-tax-dwl-w7",
                "micro-7b",
                3,
                intro="A tax drives a wedge; revenue is a transfer, DWL is lost surplus.",
                tier=2,
            ),
            frq(
                "A price floor is set above equilibrium in a labor market (minimum wage). "
                "(a) Show surplus labor (unemployment of the covered type). "
                "(b) Identify the change in producer surplus for workers who keep jobs vs those who lose jobs (qualitative). "
                "(c) State one reason measured unemployment might understate or overstate the efficiency loss.",
                [
                    "At wmin, Qs > Qd; the gap is surplus labor.",
                    "Employed workers may earn higher surplus per hour; displaced workers lose surplus.",
                    "Hours cuts, informal work, or search frictions can diverge from the simple Qs−Qd rectangle.",
                ],
                [
                    "(a) Horizontal gap Qs − Qd at the floor.",
                    "(b) Remaining workers: higher wage (more PS per job); some workers: zero hours (lose surplus).",
                    "(c) e.g. understatement if hours fall without headcount; overstatement if the floor is not binding for many workers.",
                ],
                "micro-floor-labor-w7",
                "micro-7b",
                4,
                intro="Binding floors create surplus of the good (labor).",
                tier=2,
            ),
            frq(
                "Perfectly competitive market, no externalities. A policymaker claims ‘any redistribution from CS to PS that keeps Q at Q* is inefficient.’ "
                "(a) Evaluate the claim using the definition of total surplus. "
                "(b) Give an example of a transfer that does not change TS (ignore incentive effects). "
                "(c) Give an example of a policy that changes Q and therefore can change TS.",
                [
                    "Efficiency in this model is about TS = CS+PS, not the CS/PS split.",
                    "A lump-sum transfer between consumers and producers (if it does not change Q) leaves TS unchanged.",
                    "A tax, quota, or ceiling that moves Q away from Q* creates DWL.",
                ],
                [
                    "(a) The claim is false: TS can be unchanged when CS and PS merely swap.",
                    "(b) Example: lump-sum rebate equal to a rectangle that does not alter Q*.",
                    "(c) Example: per-unit tax reducing Q below Q*.",
                ],
                "micro-ts-distribution-w7",
                "micro-7b",
                5,
                intro="Equity (who gets surplus) is distinct from efficiency (size of TS).",
                tier=3,
            ),
        ],
        "micro-7b",
        tier=3,
    ),
    # ── AP Microeconomics Wave 7C: monopoly + externalities ──
    quiz(
        "AP Microeconomics FRQ Practice Wave 7C — Monopoly and Externalities",
        MICRO,
        "Half-FRQ practice with MR=MC monopoly pricing, efficiency, Pigouvian taxes, and MSC/MSB.",
        ["ap-microeconomics", "monopoly", "externalities", "wave-7c"],
        [
            frq(
                "A single-price monopolist faces P = 24 − Q and MC = ATC = 6 (constant). "
                "(a) Find MR and the profit-maximizing Qm and Pm. "
                "(b) Find the efficient Q (P = MC). "
                "(c) Compute deadweight loss of monopoly.",
                [
                    "TR = 24Q − Q^2; MR = 24 − 2Q. Set 24 − 2Q = 6 ⇒ Qm = 9, Pm = 15.",
                    "P = MC ⇒ 24 − Q = 6 ⇒ Qe = 18.",
                    "DWL = (1/2)(15−6)(18−9) = (1/2)(9)(9) = 40.5.",
                ],
                [
                    "(a) MR = 24 − 2Q; Qm = 9, Pm = 15.",
                    "(b) Qe = 18.",
                    "(c) DWL = 40.5.",
                ],
                "micro-mono-mr-mc-w7",
                "micro-7c",
                1,
                intro="Linear demand: MR is twice as steep; monopoly uses demand for P, not MR.",
                tier=3,
            ),
            frq(
                "Same monopolist as above (Qm = 9, Pm = 15, MC = 6). "
                "(a) Calculate monopoly profit. "
                "(b) If the firm can perfectly price-discriminate, what Q does it produce? "
                "(c) What happens to DWL and to consumer surplus under perfect price discrimination?",
                [
                    "Profit = (Pm − ATC)×Q = (15−6)×9 = 81.",
                    "Perfect discrimination sells every unit with MB ≥ MC, so Q = Qe = 18.",
                    "DWL → 0; CS → 0 as the firm captures all surplus (PS = former TS).",
                ],
                [
                    "(a) Profit = 81.",
                    "(b) Q = 18.",
                    "(c) DWL eliminated; CS = 0 (all surplus to the firm).",
                ],
                "micro-price-disc-w7",
                "micro-7c",
                2,
                intro="Perfect discrimination restores efficient Q but redistributes all surplus to the seller.",
                tier=2,
            ),
            frq(
                "A competitive industry produces with private MC = 2 + Q. Marginal external cost is constant at 3. Demand: P = 20 − Q. "
                "(a) Find the unregulated competitive Q and P. "
                "(b) Find the socially efficient Q. "
                "(c) State the Pigouvian per-unit tax that aligns private MC with MSC, and the post-tax P consumers pay.",
                [
                    "Private: 20 − Q = 2 + Q ⇒ Qp = 9, Pp = 11.",
                    "MSC = 5 + Q; 20 − Q = 5 + Q ⇒ Qs = 7.5.",
                    "Tax = MEC = 3; supply becomes 5 + Q; Pbuyers = 20 − 7.5 = 12.5.",
                ],
                [
                    "(a) Qp = 9, Pp = 11.",
                    "(b) Qs = 7.5.",
                    "(c) Pigouvian tax = $3; consumers pay $12.50.",
                ],
                "micro-negative-ext-w7",
                "micro-7c",
                3,
                intro="Negative production externality: MSC = MPC + MEC; tax = MEC at Qs.",
                tier=3,
            ),
            frq(
                "A vaccine has a positive consumption externality. MSB = MPB + $4. Competitive market otherwise efficient on the private curves. "
                "(a) Relative to the private equilibrium, is the market quantity too high or too low? "
                "(b) Should a Pigouvian policy be a tax or a subsidy, and of what size per unit if MEB is constant at $4? "
                "(c) Identify the DWL region without the policy (in words: which units?).",
                [
                    "Positive externality ⇒ Qmarket < Qsocial.",
                    "Per-unit subsidy of $4 to consumers or producers.",
                    "DWL is the units between Qm and Qs where MSB > MSC but they are not consumed.",
                ],
                [
                    "(a) Too low.",
                    "(b) Subsidy of $4 per unit.",
                    "(c) Underconsumption: lost surplus on units Qm to Qs.",
                ],
                "micro-positive-ext-w7",
                "micro-7c",
                4,
                intro="Positive externalities are underprovided; subsidies shift MPB toward MSB.",
                tier=2,
            ),
            frq(
                "Compare a profit-maximizing single-price monopolist with a competitive industry, both with the same MC and no externalities. "
                "(a) Which produces more output? "
                "(b) Which has P closer to MC? "
                "(c) If the monopolist is also a polluter with unpriced MEC, explain why monopoly’s output restriction might accidentally reduce pollution — and why that is not a first-best argument for monopoly.",
                [
                    "Competition produces Qe > Qm.",
                    "Competition: P = MC; monopoly: P > MC.",
                    "Lower Q can mean less pollution, but the right tool is a Pigouvian tax/permit; monopoly also creates DWL in the product market and may still pollute the wrong amount.",
                ],
                [
                    "(a) Competitive industry produces more.",
                    "(b) Competitive price equals MC; monopoly price exceeds MC.",
                    "(c) Restricted output may cut emissions, but first-best is to price the externality; monopoly is a blunt, distortionary instrument.",
                ],
                "micro-mono-vs-ext-w7",
                "micro-7c",
                5,
                intro="Two market failures do not reliably cancel; use the matching policy for each.",
                tier=3,
            ),
        ],
        "micro-7c",
        tier=3,
    ),
    # ── AP Computer Science A Wave 7A: write methods ──
    quiz(
        "AP Computer Science A FRQ Practice Wave 7A — Write Java Methods",
        CSA,
        "FRQ-style method writing: arrays, strings, and ArrayList processing in Java.",
        ["ap-csa", "java-methods", "arrays", "wave-7a"],
        [
            frq(
                "Write a static method `public static int countRange(int[] a, int low, int high)` that returns how many elements of `a` satisfy `low <= a[i] <= high`. "
                "If `a` is `null` or length 0, return 0. You may not use `ArrayList`.",
                [
                    "Guard null/empty.",
                    "Loop with a counter; test the closed interval.",
                    "Return the count.",
                ],
                [
                    "```java\npublic static int countRange(int[] a, int low, int high) {\n"
                    "    if (a == null || a.length == 0) return 0;\n"
                    "    int n = 0;\n"
                    "    for (int v : a) {\n"
                    "        if (v >= low && v <= high) n++;\n"
                    "    }\n"
                    "    return n;\n}\n```",
                ],
                "csa-count-range-w7",
                "csa-7a",
                1,
                intro="Linear scan with a predicate; null-safe.",
                tier=2,
            ),
            frq(
                "Write `public static String longestWord(String[] words)` that returns the longest string in `words`. "
                "If there is a tie, return the one that appears first. If `words` is `null` or empty, return `null`. "
                "Do not use `Arrays.sort`.",
                [
                    "Handle null/empty.",
                    "Track best string and best length while scanning left to right (keeps first on ties).",
                    "Return best.",
                ],
                [
                    "```java\npublic static String longestWord(String[] words) {\n"
                    "    if (words == null || words.length == 0) return null;\n"
                    "    String best = words[0];\n"
                    "    for (int i = 1; i < words.length; i++) {\n"
                    "        if (words[i] != null && words[i].length() > best.length()) best = words[i];\n"
                    "    }\n"
                    "    return best;\n}\n``` "
                    "(If `words[0]` may be null, initialize `best` to the first non-null or treat null length as -1.)",
                ],
                "csa-longest-word-w7",
                "csa-7a",
                2,
                intro="Tie-breaking by scan order is the natural first-occurrence rule.",
                tier=2,
            ),
            frq(
                "Write `public static ArrayList<Integer> evensOnly(ArrayList<Integer> nums)` that returns a new list "
                "containing every even value from `nums` in the same order. Do not modify `nums`. Skip `null` elements.",
                [
                    "Allocate a new `ArrayList<Integer>`.",
                    "For each element, if non-null and `n % 2 == 0`, `add` it.",
                    "Return the new list.",
                ],
                [
                    "```java\npublic static ArrayList<Integer> evensOnly(ArrayList<Integer> nums) {\n"
                    "    ArrayList<Integer> out = new ArrayList<Integer>();\n"
                    "    if (nums == null) return out;\n"
                    "    for (Integer n : nums) {\n"
                    "        if (n != null && n % 2 == 0) out.add(n);\n"
                    "    }\n"
                    "    return out;\n}\n```",
                ],
                "csa-evens-arraylist-w7",
                "csa-7a",
                3,
                intro="Filter into a new list; never `remove` while iterating the source unless required.",
                tier=2,
            ),
            frq(
                "Write `public static boolean isRotation(String a, String b)` that returns `true` if `b` is a rotation of `a` "
                "(e.g. `\"abcde\"` and `\"cdeab\"`). Treat `null` as not a rotation of anything, including the other null. "
                "Hint: `b` is a rotation of `a` iff lengths match and `b` is a substring of `a + a`.",
                [
                    "Reject nulls; require equal length (empty strings are rotations of each other).",
                    "Form `a + a` and use `indexOf(b) >= 0`.",
                ],
                [
                    "```java\npublic static boolean isRotation(String a, String b) {\n"
                    "    if (a == null || b == null) return false;\n"
                    "    if (a.length() != b.length()) return false;\n"
                    "    return (a + a).indexOf(b) >= 0;\n}\n```",
                ],
                "csa-string-rotation-w7",
                "csa-7a",
                4,
                intro="Concatenation trick: every rotation appears inside `a+a`.",
                tier=3,
            ),
            frq(
                "A class `ScoreTable` stores `private int[] scores` (possibly unsorted). Write instance method "
                "`public int rankOf(int target)` that returns how many elements are strictly greater than `target` "
                "(the ‘number of scores beating target’). If `scores` is `null`, return 0.",
                [
                    "Null-safe; count `scores[i] > target`.",
                    "Do not sort unless you still count correctly; a single pass is enough.",
                ],
                [
                    "```java\npublic int rankOf(int target) {\n"
                    "    if (scores == null) return 0;\n"
                    "    int c = 0;\n"
                    "    for (int s : scores) {\n"
                    "        if (s > target) c++;\n"
                    "    }\n"
                    "    return c;\n}\n```",
                ],
                "csa-rank-count-w7",
                "csa-7a",
                5,
                intro="Instance method uses the private field; no static needed.",
                tier=2,
            ),
        ],
        "csa-7a",
        tier=3,
    ),
    # ── AP Computer Science A Wave 7B: trace ──
    quiz(
        "AP Computer Science A FRQ Practice Wave 7B — Trace Execution",
        CSA,
        "FRQ-style tracing: references, loops, strings, and short recursive methods.",
        ["ap-csa", "tracing", "references", "wave-7b"],
        [
            frq(
                "```java\nint[] a = {2, 4, 6};\nint[] b = a;\nb[1] = 9;\na = new int[] {1, 1, 1};\n``` "
                "(a) What is `b[1]` after line 3? "
                "(b) After line 4, does `b` alias the new array? "
                "(c) State `b[0]`, `b[1]`, `b[2]` at the end.",
                [
                    "`b = a` copies the reference; `b[1] = 9` mutates the shared array → `{2,9,6}`.",
                    "`a = new int[]...` rebinds only `a`; `b` still points at `{2,9,6}`.",
                ],
                [
                    "(a) 9.",
                    "(b) No — `b` still refers to the original array object.",
                    "(c) 2, 9, 6.",
                ],
                "csa-array-alias-w7",
                "csa-7b",
                1,
                intro="Assignment of arrays copies references, not elements.",
                tier=2,
            ),
            frq(
                "```java\npublic static int mystery(int n) {\n  if (n <= 0) return 1;\n  return n + mystery(n - 2);\n}\n``` "
                "(a) Trace `mystery(5)` showing the call stack returns. "
                "(b) Give the numeric result. "
                "(c) What does `mystery(-3)` return and why?",
                [
                    "mystery(5) = 5 + mystery(3); mystery(3) = 3 + mystery(1); mystery(1) = 1 + mystery(-1); mystery(-1) = 1.",
                    "1+1=2, +3=5, +5=10.",
                    "Base case `n <= 0` fires immediately.",
                ],
                [
                    "(a) mystery(5)→mystery(3)→mystery(1)→mystery(-1)=1, then 1+1, 3+2, 5+5.",
                    "(b) 10.",
                    "(c) 1, because −3 ≤ 0.",
                ],
                "csa-recursion-trace-w7",
                "csa-7b",
                2,
                intro="Unwind after the base case; odd n hits −1, not 0.",
                tier=2,
            ),
            frq(
                "```java\nString s = \"APCS\";\nString t = s;\ns = s.substring(1);\n``` "
                "(a) Is `String` mutable? "
                "(b) What is `t` after line 3? "
                "(c) What is `s` after line 3?",
                [
                    "Strings are immutable; `substring` returns a new object.",
                    "`t` still refers to `\"APCS\"`.",
                    "`s` refers to `\"PCS\"`.",
                ],
                [
                    "(a) No.",
                    "(b) `\"APCS\"`.",
                    "(c) `\"PCS\"`.",
                ],
                "csa-string-immut-w7",
                "csa-7b",
                3,
                intro="Rebinding `s` does not change the object `t` points to.",
                tier=1,
            ),
            frq(
                "```java\nint x = 0;\nfor (int i = 1; i <= 4; i++) {\n  for (int j = i; j <= 4; j++) {\n    x++;\n  }\n}\n``` "
                "(a) How many times does `x++` execute? "
                "(b) Explain by counting inner-loop iterations for each `i`. "
                "(c) If the inner loop were `j = 1; j <= 4`, what would `x` be instead?",
                [
                    "i=1: 4 times; i=2: 3; i=3: 2; i=4: 1; total 10.",
                    "Rectangular 4×4 nested loops would run 16 times.",
                ],
                [
                    "(a) 10.",
                    "(b) 4+3+2+1 = 10.",
                    "(c) 16.",
                ],
                "csa-nested-loop-count-w7",
                "csa-7b",
                4,
                intro="Triangular nested bounds: n(n+1)/2 for n=4.",
                tier=2,
            ),
            frq(
                "```java\npublic static void swap(int a, int b) {\n  int t = a; a = b; b = t;\n}\n// caller:\nint p = 3, q = 8;\nswap(p, q);\n``` "
                "(a) What are `p` and `q` after the call? "
                "(b) Why does this fail to swap the caller’s variables? "
                "(c) How would you swap two entries of an `int[]` inside a method so the caller sees the change?",
                [
                    "Java passes primitives by value; `swap` mutates copies.",
                    "Arrays are references: `void swap(int[] arr, int i, int j)` can exchange `arr[i]` and `arr[j]`.",
                ],
                [
                    "(a) p = 3, q = 8 (unchanged).",
                    "(b) Pass-by-value of `int`; the method cannot rebind the caller’s locals.",
                    "(c) Pass the array (reference) and swap by index, or return a pair/object.",
                ],
                "csa-pass-by-value-w7",
                "csa-7b",
                5,
                intro="Primitives vs object references is a standard CSA FRQ trap.",
                tier=2,
            ),
        ],
        "csa-7b",
        tier=2,
    ),
    # ── AP Computer Science A Wave 7C: complexity ──
    quiz(
        "AP Computer Science A FRQ Practice Wave 7C — Complexity and Method Design",
        CSA,
        "FRQ-style analysis of nested loops, search, and writing an efficient helper.",
        ["ap-csa", "complexity", "big-o", "wave-7c"],
        [
            frq(
                "```java\nfor (int i = 0; i < n; i++) {\n  for (int j = 0; j < n; j++) {\n    sum += a[i][j];\n  }\n}\n``` "
                "(a) In terms of n, how many additions to `sum` occur? "
                "(b) Give Big-O of the running time. "
                "(c) If the inner loop ran only while `j < i`, what is the Big-O then?",
                [
                    "n×n = n² additions.",
                    "O(n²).",
                    "About n(n−1)/2 still quadratic: O(n²).",
                ],
                [
                    "(a) n².",
                    "(b) O(n²).",
                    "(c) Still O(n²) (triangular but same order).",
                ],
                "csa-nested-big-o-w7",
                "csa-7c",
                1,
                intro="Drop constants and lower-order terms for Big-O.",
                tier=2,
            ),
            frq(
                "A method checks whether a sorted `int[] a` of length n contains `key`. "
                "(a) State the worst-case number of comparisons for binary search vs linear search, in Big-O. "
                "(b) Why is binary search incorrect if `a` is unsorted? "
                "(c) Write the comparison that chooses the left half in binary search when `a[mid] > key` (assume ascending order).",
                [
                    "Binary: O(log n); linear: O(n).",
                    "The discarded half may still contain `key` if order is wrong.",
                    "Set `high = mid - 1` (or equivalent).",
                ],
                [
                    "(a) Binary search O(log n); linear O(n).",
                    "(b) Ordering is the invariant that justifies discarding a half.",
                    "(c) Search the left side: `high = mid - 1`.",
                ],
                "csa-binary-vs-linear-w7",
                "csa-7c",
                2,
                intro="Binary search requires a sorted array (for the usual algorithm).",
                tier=2,
            ),
            frq(
                "Consider inserting one value into an `ArrayList<Integer>` of size n. "
                "(a) Best-case vs worst-case time for `add(value)` at the end (amortized vs a single overflowing add — discuss both). "
                "(b) Worst-case time to `add(0, value)` (insert at index 0). "
                "(c) Why might a CSA FRQ prefer an `int[]` with a size field over repeated `ArrayList` inserts at index 0?",
                [
                    "End add is amortized O(1), occasional O(n) resize.",
                    "Insert at 0 shifts n elements: O(n).",
                    "Shifting on every front insert is expensive; an array plus index can append in O(1) if capacity allows.",
                ],
                [
                    "(a) Amortized O(1) at the end; a resizing add is O(n) that call.",
                    "(b) O(n) due to shifting.",
                    "(c) Avoid O(n) shifts; keep extra capacity and a length index.",
                ],
                "csa-arraylist-cost-w7",
                "csa-7c",
                3,
                intro="Index-0 inserts are linear because of element movement.",
                tier=2,
            ),
            frq(
                "Write `public static boolean hasDuplicate(int[] a)` that returns whether any value occurs more than once. "
                "(a) Give a correct O(n²) nested-loop solution (you may assume `a` is non-null). "
                "(b) State a faster approach if you may sort a copy. Give its Big-O. "
                "(c) Why is sorting the original array in place a bad idea if the caller still needs the original order?",
                [
                    "Compare each pair i < j.",
                    "Copy, sort O(n log n), then adjacent scan O(n).",
                    "In-place sort mutates caller data.",
                ],
                [
                    "(a) Nested loops: for i, for j>i, if a[i]==a[j] return true; return false.",
                    "(b) Sort a copy then check neighbors: O(n log n).",
                    "(c) Side effect: caller’s order is destroyed unless you copy first.",
                ],
                "csa-has-duplicate-w7",
                "csa-7c",
                4,
                intro="Correctness first; then discuss a faster design and side effects.",
                tier=3,
            ),
            frq(
                "A method `maxVal` finds the maximum in `int[] a` of length n > 0. "
                "(a) Write the method. "
                "(b) How many element comparisons does a standard one-pass algorithm perform? "
                "(c) Can you do it in fewer than n−1 comparisons in the worst case? Justify.",
                [
                    "Initialize `m = a[0]`; for i=1..n-1, if a[i] > m then m = a[i].",
                    "Exactly n−1 comparisons in that pattern.",
                    "Each element except the first must be looked at; n−1 is optimal for unstructured maximum-finding.",
                ],
                [
                    "(a) One-pass max as above.",
                    "(b) n−1 comparisons.",
                    "(c) No, in the worst case every remaining element can be a new max; you must inspect all n values.",
                ],
                "csa-max-comparisons-w7",
                "csa-7c",
                5,
                intro="Lower bound: you cannot ignore an unseen array entry.",
                tier=2,
            ),
        ],
        "csa-7c",
        tier=3,
    ),
    # ── AP CSP Wave 7A: algorithms ──
    quiz(
        "AP Computer Science Principles FRQ Practice Wave 7A — Algorithms",
        CSP,
        "Written FRQ-style items on search, sort, heuristics, correctness, and efficiency.",
        ["ap-csp", "algorithms", "search-sort", "wave-7a"],
        [
            frq(
                "A list of 16 unsorted names is searched for one target using linear search. "
                "(a) What is the maximum number of name comparisons in the worst case? "
                "(b) If the same list is sorted and binary search is used, what is the maximum number of comparisons (approximately)? "
                "(c) Explain one reason you might still use linear search on a short list.",
                [
                    "Worst-case linear: 16 (target last or absent, depending on implementation; absent often 16).",
                    "Binary search on 16 items: about 4 comparisons (log2 16 = 4), plus implementation off-by-one.",
                    "No sort cost; simpler code; n is tiny so constants dominate.",
                ],
                [
                    "(a) 16 comparisons in the usual worst case.",
                    "(b) About 4 (log₂ 16).",
                    "(c) Avoid sorting overhead or keep implementation simple when n is small.",
                ],
                "csp-linear-binary-w7",
                "csp-7a",
                1,
                intro="Binary search pays off after data are ordered.",
                tier=2,
            ),
            frq(
                "Describe bubble sort on the list `[3, 1, 4, 2]`. "
                "(a) Show the list after the first full pass that swaps adjacent out-of-order pairs left to right. "
                "(b) Is the list sorted after that one pass? "
                "(c) State the typical Big-O of bubble sort on n items in the worst case, and what ‘worst case’ means here.",
                [
                    "Pass 1: 3>1 swap → [1,3,4,2]; 3<4; 4>2 swap → [1,3,2,4].",
                    "Not sorted (3 and 2 still wrong).",
                    "O(n²); reverse-sorted input causes a swap on essentially every adjacent pair each pass.",
                ],
                [
                    "(a) [1, 3, 2, 4].",
                    "(b) No.",
                    "(c) O(n²) when many swaps are required (e.g. reverse order).",
                ],
                "csp-bubble-pass-w7",
                "csp-7a",
                2,
                intro="One bubble pass guarantees the largest element sinks to the end.",
                tier=2,
            ),
            frq(
                "A navigation app must choose a driving route. An exact shortest-path algorithm is too slow on a continental map. "
                "(a) What is a heuristic in this setting? "
                "(b) Give one benefit and one risk of using a heuristic. "
                "(c) Explain how ‘undecidable’ problems differ from ‘intractable’ problems in CSP vocabulary.",
                [
                    "A heuristic is a practical rule that may not be optimal (e.g. prefer highways, A* estimate).",
                    "Benefit: faster answers; risk: a longer or blocked route.",
                    "Undecidable: no algorithm always solves it (halting); intractable: solvable but not efficiently for large n (exponential).",
                ],
                [
                    "(a) A fast rule of thumb that need not find the true shortest path.",
                    "(b) Benefit: speed/scalability; risk: suboptimal or wrong route.",
                    "(c) Undecidable = no general algorithm; intractable = algorithm exists but scales poorly.",
                ],
                "csp-heuristic-undecidable-w7",
                "csp-7a",
                3,
                intro="CSP distinguishes solvability from efficient solvability.",
                tier=3,
            ),
            frq(
                "Procedure `isSorted(list)` is supposed to return true iff each element is ≤ the next. "
                "(a) Write clear steps (pseudocode) that visit neighbors once. "
                "(b) Give a 3-element list that should return false. "
                "(c) Why is testing only the first and last elements insufficient?",
                [
                    "For i from 1 to n−1, if list[i] < list[i−1] return false; return true.",
                    "Example: [1, 3, 2].",
                    "A dip can be in the middle; endpoints can still be ordered.",
                ],
                [
                    "(a) Adjacent comparison scan as above.",
                    "(b) e.g. [1, 3, 2].",
                    "(c) Middle inversions would be missed.",
                ],
                "csp-correctness-sorted-w7",
                "csp-7a",
                4,
                intro="Correctness requires checking the actual invariant, not a proxy.",
                tier=2,
            ),
            frq(
                "Two algorithms compute the same output. Algorithm P takes 2n steps; algorithm Q takes n² steps. "
                "(a) Which is better for n = 5? For n = 1000? "
                "(b) In CSP terms, which is polynomial time? "
                "(c) Why might a programmer still ship Q for n = 5?",
                [
                    "n=5: Q is 25 vs P’s 10 — P fewer steps; n=1000: P is 2000 vs Q’s 1e6 — P much better.",
                    "Both 2n and n² are polynomial; exponential would be like 2^n.",
                    "Constants, simplicity, libraries, or Q already written and n stays tiny.",
                ],
                [
                    "(a) P uses fewer steps at n=5 (10 vs 25) and far fewer at n=1000.",
                    "(b) Both are polynomial-time growth.",
                    "(c) Engineering tradeoffs: clarity, reuse, or small n in production.",
                ],
                "csp-poly-compare-w7",
                "csp-7a",
                5,
                intro="Asymptotic comparison depends on n; both linear and quadratic are polynomial.",
                tier=2,
            ),
        ],
        "csp-7a",
        tier=3,
    ),
    # ── AP CSP Wave 7B: data ──
    quiz(
        "AP Computer Science Principles FRQ Practice Wave 7B — Data",
        CSP,
        "Written FRQ-style items on compression, metadata, bias, and visualization.",
        ["ap-csp", "data", "compression", "bias", "wave-7b"],
        [
            frq(
                "A run-length encoding replaces `AAAAABBB` with `5A3B`. "
                "(a) Is this lossless or lossy? Justify. "
                "(b) Encode `XXXYYXXXX`. "
                "(c) Give a string for which this encoding is longer than the original, and explain why compression is not always smaller.",
                [
                    "Lossless: you can reconstruct the exact original.",
                    "`3X2Y4X`.",
                    "Highly alternating data, e.g. `ABABAB`, encodes poorly; compression exploits redundancy.",
                ],
                [
                    "(a) Lossless — exact recovery of the bits/characters.",
                    "(b) 3X2Y4X.",
                    "(c) e.g. ABABAB → 1A1B1A1B1A1B, which is longer; no redundancy to exploit.",
                ],
                "csp-rle-lossless-w7",
                "csp-7b",
                1,
                intro="Lossless compression is reversible; ratio depends on redundancy.",
                tier=2,
            ),
            frq(
                "A photo app saves a JPEG. "
                "(a) Is typical JPEG compression lossless or lossy? "
                "(b) State one visual artifact you might see at high compression. "
                "(c) Why might a scientist archive raw sensor data instead of JPEG?",
                [
                    "Standard JPEG is lossy (DCT quantization).",
                    "Blockiness, ringing, or washed detail.",
                    "Analysis needs reversible, unquantized measurements.",
                ],
                [
                    "(a) Lossy.",
                    "(b) e.g. 8×8 blocking or blur of fine texture.",
                    "(c) Preserve full precision for later measurement; JPEG discards information.",
                ],
                "csp-jpeg-lossy-w7",
                "csp-7b",
                2,
                intro="Lossy formats trade fidelity for size.",
                tier=2,
            ),
            frq(
                "A dataset of city bike trips includes start time, duration, and station IDs. Filenames also store the download date. "
                "(a) Which of those are metadata vs the primary observations? "
                "(b) Give one way metadata helps reuse. "
                "(c) Give one privacy risk of keeping high-resolution start times plus station IDs.",
                [
                    "Trips’ times/stations/durations are data; download date in the filename is metadata about the file.",
                    "Metadata supports provenance (‘when was this extracted?’).",
                    "Re-identification: regular commute patterns can fingerprint a person.",
                ],
                [
                    "(a) Download date: metadata; trip fields: data (metadata can also describe columns).",
                    "(b) e.g. knowing extraction date to merge versions.",
                    "(c) Unique travel patterns can identify individuals.",
                ],
                "csp-metadata-privacy-w7",
                "csp-7b",
                3,
                intro="Metadata is data about data; it still carries privacy risk.",
                tier=2,
            ),
            frq(
                "A hiring model is trained on ten years of a firm’s past promotions. Historically the firm promoted men more often. "
                "(a) Explain how this training data can bias predictions. "
                "(b) Give one mitigation that is about the data, and one that is about the process (human review). "
                "(c) Why is ‘the algorithm is just math’ an incomplete response to harm?",
                [
                    "The model copies historical inequity as if it were job-relevant signal.",
                    "Data: rebalance/audit labels; process: humans override and monitor outcomes by group.",
                    "Math embeds the chosen features, labels, and objective — social choices, not neutrality.",
                ],
                [
                    "(a) Past bias becomes a predictive pattern (men scored higher).",
                    "(b) Data: cleaner/fairer labels or representative samples; process: appeal, audits, disparate-impact checks.",
                    "(c) Objectives and data encode values; outputs still affect people.",
                ],
                "csp-bias-training-w7",
                "csp-7b",
                4,
                intro="Bias often enters through historical labels, not only through buggy code.",
                tier=3,
            ),
            frq(
                "A bar chart of average test scores by school omits the number of students per school. "
                "(a) What misinterpretation can that cause? "
                "(b) Name one additional visualization or statistic that would help. "
                "(c) Distinguish correlation from causation with a one-sentence example involving school funding and scores.",
                [
                    "Tiny schools’ averages are noisy; equal-looking bars hide n.",
                    "Show n, error bars, or a scatter of n vs average.",
                    "Funding and scores may rise together because of parent income, not because funding caused scores.",
                ],
                [
                    "(a) Treating a 3-student school like a 3000-student school; overconfidence in small-n averages.",
                    "(b) e.g. labeled n, weighted averages, or box plots.",
                    "(c) Example: both funding and scores track neighborhood wealth, so a correlation need not mean funding caused scores.",
                ],
                "csp-viz-causation-w7",
                "csp-7b",
                5,
                intro="Visualizations can hide sample size; association is not a causal design.",
                tier=2,
            ),
        ],
        "csp-7b",
        tier=3,
    ),
    # ── AP CSP Wave 7C: internet + impact ──
    quiz(
        "AP Computer Science Principles FRQ Practice Wave 7C — Internet and Impact",
        CSP,
        "Written FRQ-style items on protocols, redundancy, cybersecurity, and social impact.",
        ["ap-csp", "internet", "cybersecurity", "impact", "wave-7c"],
        [
            frq(
                "Explain the roles of IP and TCP in sending a photo as packets. "
                "(a) What problem does IP address? "
                "(b) What problem does TCP address that IP does not? "
                "(c) Why can packets of one photo take different paths?",
                [
                    "IP: addressing and forwarding toward the destination network.",
                    "TCP: ports, reliable byte stream, retransmission, ordering.",
                    "Dynamic routing and redundancy: routers choose links hop by hop.",
                ],
                [
                    "(a) Getting packets to the right host (IP addresses / routing).",
                    "(b) Reliability, order, and a connection (lost packet recovery).",
                    "(c) The Internet is redundant; routing can change per packet or per flow.",
                ],
                "csp-ip-tcp-w7",
                "csp-7c",
                1,
                intro="IP delivers datagrams; TCP builds a reliable stream on top.",
                tier=2,
            ),
            frq(
                "A DNS lookup translates `practice.example` to an IP address. "
                "(a) Why do humans prefer domain names? "
                "(b) What happens to reachability if a DNS server is unavailable but you already know the IP? "
                "(c) Give one security risk involving fake DNS answers.",
                [
                    "Names are memorable; IPs are not.",
                    "You can still connect by IP if routing works; DNS is not the data path.",
                    "Cache poisoning / spoofing sends users to a malicious host.",
                ],
                [
                    "(a) Easier to remember and communicate than numeric IPs.",
                    "(b) Direct IP access can still work; name resolution fails for others.",
                    "(c) User is redirected to a phishing site that looks like the real name.",
                ],
                "csp-dns-w7",
                "csp-7c",
                2,
                intro="DNS is a naming service, not the only way packets find a host.",
                tier=2,
            ),
            frq(
                "A streaming service uses HTTPS. "
                "(a) What does the ‘S’ indicate about the HTTP conversation? "
                "(b) Name one property cryptography provides here (confidentiality, integrity, or authentication) and define it in one phrase. "
                "(c) Why is HTTPS not sufficient by itself to stop a user from choosing a weak password?",
                [
                    "TLS encrypts and authenticates the channel (certificates).",
                    "Confidentiality: eavesdroppers cannot read payloads; integrity: tampering detected; authentication: you talk to the claimed server.",
                    "TLS protects the pipe; password quality is an endpoint/policy issue.",
                ],
                [
                    "(a) HTTP over TLS: encrypted (and authenticated) transport.",
                    "(b) e.g. confidentiality — data unreadable in transit.",
                    "(c) Attackers can still guess/reuse passwords; HTTPS does not enforce password strength.",
                ],
                "csp-https-crypto-w7",
                "csp-7c",
                3,
                intro="Channel security ≠ user-account security.",
                tier=2,
            ),
            frq(
                "A rural school has only intermittent satellite Internet while an urban school has gigabit fiber. "
                "(a) Define the digital divide in this example. "
                "(b) Give one educational impact. "
                "(c) Propose one policy or design response that is not ‘everyone must move to a city.’",
                [
                    "Unequal access to reliable, high-bandwidth connectivity and devices.",
                    "Cloud homework, video lessons, and research become unequal.",
                    "Offline-first apps, community Wi-Fi, device lending, subsidized service.",
                ],
                [
                    "(a) Gap in access/quality of digital resources between the two communities.",
                    "(b) e.g. cannot stream required class video during school hours.",
                    "(c) e.g. cacheable curricula, libraries as hubs, or infrastructure subsidies.",
                ],
                "csp-digital-divide-w7",
                "csp-7c",
                4,
                intro="Impact questions need a concrete harm and a plausible remedy.",
                tier=2,
            ),
            frq(
                "A crowdsourced traffic app reports speeds from phones. "
                "(a) How could open data here create a positive effect and a negative effect? "
                "(b) The company stores precise GPS traces. State one aggregation or limitation that reduces privacy risk. "
                "(c) Explain redundancy: if one cell tower fails, why might some reports still arrive.",
                [
                    "Positive: faster routing, fewer jams; negative: revealing police locations or crowding side streets, or stalking risk.",
                    "Snap to road segments, drop identity, coarsen time, delete raw traces quickly.",
                    "Multiple towers/paths and store-and-forward; the Internet routes around failures.",
                ],
                [
                    "(a) Positive: better ETAs; negative: e.g. exposing home locations or overwhelming quiet streets.",
                    "(b) e.g. publish only street-level averages, not individual traces.",
                    "(c) Alternate towers/routers; packets take another path (fault tolerance).",
                ],
                "csp-crowdsource-privacy-w7",
                "csp-7c",
                5,
                intro="Computing innovations have dual-use effects; redundancy is an Internet design goal.",
                tier=3,
            ),
        ],
        "csp-7c",
        tier=3,
    ),
]


def _validate() -> None:
    assert len(FRQ_QUIZZES) == 12, len(FRQ_QUIZZES)
    n_items = 0
    titles = []
    for q in FRQ_QUIZZES:
        titles.append(q["title"])
        assert q["kind"] == "generated"
        assert "frq-practice" in q["tags"] and "wave-7" in q["tags"]
        assert len(q["items"]) == 5
        for it in q["items"]:
            assert it["format"] == "frq_half"
            n_items += 1
    assert n_items == 60, n_items
    assert len(set(titles)) == 12


_validate()
