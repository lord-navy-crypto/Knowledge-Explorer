"""Original Digital SAT Reading and Writing practice corpus for managed-content injection.

College Board Digital SAT R&W domains mapped to site spaces:
  - sat-reading  (category "SAT Reading"): Information and Ideas + Craft and Structure
  - sat-grammar  (category "SAT Grammar"): Standard English Conventions
  - sat-english  (category "SAT English"): Expression of Ideas + mixed R&W + strategy guides

Combine component lists or use SAT_RW_DOCS for the full set (~80 docs).
Original practice aligned to Digital SAT domains. Not College Board exam verbatim.
"""

from __future__ import annotations

SAT_READING_INFO_IDEAS: list[dict[str, str]] = [
    {
        'title': 'SAT Reading · Info & Ideas Pack 01: Urban Heat Islands and Nighttime Cooling',
        'content': """# SAT Reading · Information and Ideas Pack 01
**Focus:** Urban Heat Islands and Nighttime Cooling

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

Cities often remain warmer at night than surrounding rural areas, a pattern called the urban heat island effect. Dark roofs and asphalt absorb sunlight during the day and release heat slowly after sunset. A 2022 municipal study found that neighborhoods with at least 30 percent tree canopy cooled 2–3°C more overnight than sparsely vegetated blocks. Researchers caution that planting alone cannot offset heat if irrigation is unavailable during droughts.

## Passage 2

Cool-roof coatings reflect a larger share of incoming solar radiation than conventional dark membranes. In one pilot, school buildings with cool roofs used 8 percent less afternoon air-conditioning energy during a July heat wave. Critics note that reflective surfaces can increase glare for nearby pedestrians, so design guidelines now pair cool roofs with shaded walkways.

## Passage 3

Some planners argue that denser housing near transit reduces regional emissions even if local heat islands intensify. Their claim rests on the idea that shorter car trips and shared walls cut overall energy use more than neighborhood-scale warming raises it. Opponents reply that health risks from nighttime heat, especially for older adults without cooling, deserve equal weight in zoning decisions.

## Passage 4

Community science volunteers placed low-cost temperature sensors on porch railings across twelve census tracts. The densest sensor grid revealed hotspots that citywide weather stations had missed, including a warehouse district with almost no nighttime cooling. Officials used the map to prioritize shade structures at bus stops before the next summer.

## Passage 5

A comparative table in the report showed mean overnight lows: park-adjacent streets 21.4°C, commercial corridors 24.9°C, and industrial yards 26.1°C. Humidity differences were smaller than temperature differences, suggesting that radiant heat from surfaces, not moisture, drove most of the gap. The authors recommend permeable pavements mainly for stormwater benefits, with cooling treated as a secondary effect.

## Passage 6

Historians note that nineteenth-century cities already debated street-tree ordinances after cholera epidemics, though the science then linked trees mainly to “bad air.” Modern heat research reframes trees as infrastructure that stores carbon, slows runoff, and buffers extreme temperatures. Funding debates continue over whether shade equity should be measured by canopy cover, cooling hours, or emergency-room visits during heat waves.

## Questions

### Question 1

Based on the first passage, which choice best states the main finding of the 2022 municipal study?

**A)** Cool roofs cut school energy use by 8 percent during heat waves.
**B)** Neighborhoods with substantial tree canopy cooled more overnight than sparsely vegetated blocks.
**C)** Industrial yards were cooler at night than park-adjacent streets.
**D)** Humidity, not surface heat, explained most urban–rural temperature gaps.

**Answer:** B
**Why:** The study directly linked ≥30% canopy to 2–3°C greater overnight cooling versus sparse vegetation.

### Question 2

Which detail from the cool-roof pilot most directly supports a claim that reflective roofs can save energy?

**A)** Glare guidelines now pair cool roofs with shaded walkways.
**B)** Dark asphalt releases heat slowly after sunset.
**C)** School buildings with cool roofs used 8 percent less afternoon air-conditioning energy in July.
**D)** Volunteers placed sensors on porch railings across twelve tracts.

**Answer:** C
**Why:** The 8% reduction is concrete evidence of energy savings from cool roofs.

### Question 3

The planners who favor denser transit-oriented housing primarily assume that

**A)** nighttime heat poses no health risk to older adults.
**B)** regional emission cuts from shorter trips outweigh local heat-island intensifying effects.
**C)** permeable pavement is the main cooling strategy cities should fund.
**D)** nineteenth-century tree ordinances were based on modern climate science.

**Answer:** B
**Why:** They argue shorter car trips and shared walls reduce overall energy use more than local warming increases it.

### Question 4

What function do the community science sensors serve in the report’s argument?

**A)** They prove humidity differences exceed temperature differences citywide.
**B)** They identify fine-scale hotspots missed by official weather stations.
**C)** They measure glare from cool-roof coatings on pedestrians.
**D)** They replace the need for tree canopy in industrial yards.

**Answer:** B
**Why:** The dense grid revealed hotspots citywide stations had missed, guiding shade priorities.

### Question 5

According to the comparative overnight lows, which setting was warmest?

**A)** Park-adjacent streets
**B)** Commercial corridors
**C)** Industrial yards
**D)** Rural reference farms mentioned in the study

**Answer:** C
**Why:** Industrial yards averaged 26.1°C, higher than commercial (24.9°C) and park-adjacent (21.4°C).

### Question 6

The historian comparison most strongly suggests that

**A)** tree planting debates are new to the twenty-first century.
**B)** cities have long linked urban vegetation to public health, though the scientific framing has changed.
**C)** cholera epidemics were caused by insufficient cool-roof coatings.
**D)** emergency-room visits are the only valid equity metric today.

**Answer:** B
**Why:** Nineteenth-century ordinances already tied trees to health; modern science reframes the mechanism.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 02: Library Late Fees and Access Equity',
        'content': """# SAT Reading · Information and Ideas Pack 02
**Focus:** Library Late Fees and Access Equity

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

Several public library systems have eliminated daily late fees after finding that fines discouraged return visits more than they recovered lost materials. In one midwestern city, card renewals among households below the median income rose 18 percent in the year after fines ended. Staff reported that conversations at the desk shifted from debt collection to reader advisory.

## Passage 2

Opponents of fine-free policies worry that without penalties, popular titles will circulate more slowly. A six-month audit, however, found average loan periods changed by less than half a day for bestsellers. Replacement fees for long-overdue or damaged items remained in place.

## Passage 3

Researchers surveyed teens who had stopped using libraries after accruing small balances. Many said even a five-dollar fine felt embarrassing when they could not pay immediately. After amnesty weeks, a majority of those teens checked out at least one item within two months.

## Passage 4

Some rural libraries kept modest fines but capped total debt at three dollars and allowed fee waivers for community service. Directors argued that local voters expected some accountability while still wanting barriers low. Circulation in those systems stayed flat rather than rising as in fully fine-free peers.

## Passage 5

Digital lending complicates the debate: e-books expire automatically, so late fees never apply, yet hold queues can stretch for months. Equity advocates note that households with unreliable internet still depend on physical copies and were hit hardest by legacy fine systems. Hybrid models now prioritize buying additional e-licenses for high-demand titles while keeping print fine-free.

## Passage 6

A national association brief concludes that fine revenue typically covered a small slice of operating budgets—often under two percent—while generating negative publicity. Cities that replaced fines with donation jars or optional “gratitude” payments saw little change in materials budgets after adjusting for grants. The brief urges boards to measure success by active-card rates among underserved zip codes, not by fine dollars collected.

## Questions

### Question 1

The midwestern city’s 18 percent figure primarily supports which claim?

**A)** Bestsellers circulate more slowly without late fees.
**B)** Ending fines can increase engagement among lower-income households.
**C)** E-book hold queues shrank after fine elimination.
**D)** Fine revenue usually exceeds two percent of budgets.

**Answer:** B
**Why:** Card renewals rose 18% among below-median-income households after fines ended.

### Question 2

Which finding most weakens the worry that fine-free policies slow bestsellers?

**A)** Teens felt embarrassed by five-dollar fines.
**B)** Average loan periods for bestsellers changed by less than half a day.
**C)** Rural systems capped debt at three dollars.
**D)** Donation jars replaced some fine revenue.

**Answer:** B
**Why:** The audit shows negligible change in loan periods, undercutting the slowdown claim.

### Question 3

The teen survey evidence is best described as

**A)** anecdotal only, with no behavioral follow-up.
**B)** linking prior fine-related avoidance to renewed use after amnesty.
**C)** proof that all teens prefer e-books to print.
**D)** a controlled experiment randomly assigning fines.

**Answer:** B
**Why:** Teens who had stopped using libraries returned after amnesty, connecting stigma to re-engagement.

### Question 4

Compared with fully fine-free peers, the rural hybrid approach was associated with

**A)** sharply higher circulation.
**B)** flat circulation rather than the increases seen elsewhere.
**C)** elimination of replacement fees.
**D)** longer e-book hold queues only.

**Answer:** B
**Why:** Circulation stayed flat in capped-fine rural systems versus rising in fine-free peers.

### Question 5

What inference about equity does the digital-lending paragraph support?

**A)** E-books make late fees equally burdensome for all households.
**B)** Households with unreliable internet were disproportionately harmed by print late fees.
**C)** Hold queues disappear when print is fine-free.
**D)** Physical copies are obsolete in rural areas.

**Answer:** B
**Why:** Advocates note offline-dependent households relied on print and bore the brunt of fines.

### Question 6

The association brief recommends evaluating fine-free policies mainly by

**A)** total fine dollars collected each quarter.
**B)** active-card rates in underserved zip codes.
**C)** number of donation jars placed near exits.
**D)** average glare complaints about cool roofs.

**Answer:** B
**Why:** The brief urges measuring success via active-card rates among underserved areas, not fine revenue.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 03: Coral Nursery Restoration Success Rates',
        'content': """# SAT Reading · Information and Ideas Pack 03
**Focus:** Coral Nursery Restoration Success Rates

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Coral Nursery Restoration Success Rates tracked outcomes across paired sites for two seasons. Where protocols for coral nursery restoration success rates were written down and coached, the primary survival rate improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Coral Nursery Restoration Success Rates asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better coral nursery restoration success rates is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Coral Nursery Restoration Success Rates may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-quarter. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Coral Nursery Restoration Success Rates compared control, low-support, and high-support conditions. High-support beat control on the main survival rate; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Coral Nursery Restoration Success Rates claimed each dollar for coordination staff moved the survival rate more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether coral nursery restoration success rates matters.

## Passage 6

Archival memos show public fights over Coral Nursery Restoration Success Rates repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the survival rate more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Coral Nursery Restoration Success Rates, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Coral Nursery Restoration Success Rates primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 04: Peer Tutoring and Algebra Persistence',
        'content': """# SAT Reading · Information and Ideas Pack 04
**Focus:** Peer Tutoring and Algebra Persistence

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Peer Tutoring and Algebra Persistence tracked outcomes across paired sites for three seasons. Where protocols for peer tutoring and algebra persistence were written down and coached, the primary course completion improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Peer Tutoring and Algebra Persistence asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better peer tutoring and algebra persistence is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Peer Tutoring and Algebra Persistence may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-third. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Peer Tutoring and Algebra Persistence compared control, low-support, and high-support conditions. High-support beat control on the main course completion; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Peer Tutoring and Algebra Persistence claimed each dollar for coordination staff moved the course completion more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether peer tutoring and algebra persistence matters.

## Passage 6

Archival memos show public fights over Peer Tutoring and Algebra Persistence repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the course completion more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Peer Tutoring and Algebra Persistence, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Peer Tutoring and Algebra Persistence primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 05: Night-Shift Nurses and Decision Fatigue',
        'content': """# SAT Reading · Information and Ideas Pack 05
**Focus:** Night-Shift Nurses and Decision Fatigue

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Night-Shift Nurses and Decision Fatigue tracked outcomes across paired sites for two seasons. Where protocols for night-shift nurses and decision fatigue were written down and coached, the primary error rate improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Night-Shift Nurses and Decision Fatigue asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better night-shift nurses and decision fatigue is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Night-Shift Nurses and Decision Fatigue may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-third. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Night-Shift Nurses and Decision Fatigue compared control, low-support, and high-support conditions. High-support beat control on the main error rate; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Night-Shift Nurses and Decision Fatigue claimed each dollar for coordination staff moved the error rate more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether night-shift nurses and decision fatigue matters.

## Passage 6

Archival memos show public fights over Night-Shift Nurses and Decision Fatigue repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the error rate more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Night-Shift Nurses and Decision Fatigue, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Night-Shift Nurses and Decision Fatigue primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 06: Citizen Archaeologists and Site Protection',
        'content': """# SAT Reading · Information and Ideas Pack 06
**Focus:** Citizen Archaeologists and Site Protection

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Citizen Archaeologists and Site Protection tracked outcomes across paired sites for three seasons. Where protocols for citizen archaeologists and site protection were written down and coached, the primary damage incidents improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Citizen Archaeologists and Site Protection asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better citizen archaeologists and site protection is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Citizen Archaeologists and Site Protection may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-quarter. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Citizen Archaeologists and Site Protection compared control, low-support, and high-support conditions. High-support beat control on the main damage incidents; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Citizen Archaeologists and Site Protection claimed each dollar for coordination staff moved the damage incidents more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether citizen archaeologists and site protection matters.

## Passage 6

Archival memos show public fights over Citizen Archaeologists and Site Protection repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the damage incidents more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Citizen Archaeologists and Site Protection, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Citizen Archaeologists and Site Protection primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 07: Micromobility Data and Sidewalk Safety',
        'content': """# SAT Reading · Information and Ideas Pack 07
**Focus:** Micromobility Data and Sidewalk Safety

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Micromobility Data and Sidewalk Safety tracked outcomes across paired sites for two seasons. Where protocols for micromobility data and sidewalk safety were written down and coached, the primary injury reports improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Micromobility Data and Sidewalk Safety asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better micromobility data and sidewalk safety is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Micromobility Data and Sidewalk Safety may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-third. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Micromobility Data and Sidewalk Safety compared control, low-support, and high-support conditions. High-support beat control on the main injury reports; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Micromobility Data and Sidewalk Safety claimed each dollar for coordination staff moved the injury reports more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether micromobility data and sidewalk safety matters.

## Passage 6

Archival memos show public fights over Micromobility Data and Sidewalk Safety repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the injury reports more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Micromobility Data and Sidewalk Safety, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Micromobility Data and Sidewalk Safety primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 08: Fermentation Startups and Food Waste',
        'content': """# SAT Reading · Information and Ideas Pack 08
**Focus:** Fermentation Startups and Food Waste

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Fermentation Startups and Food Waste tracked outcomes across paired sites for three seasons. Where protocols for fermentation startups and food waste were written down and coached, the primary waste diverted improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Fermentation Startups and Food Waste asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better fermentation startups and food waste is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Fermentation Startups and Food Waste may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-third. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Fermentation Startups and Food Waste compared control, low-support, and high-support conditions. High-support beat control on the main waste diverted; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Fermentation Startups and Food Waste claimed each dollar for coordination staff moved the waste diverted more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether fermentation startups and food waste matters.

## Passage 6

Archival memos show public fights over Fermentation Startups and Food Waste repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the waste diverted more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Fermentation Startups and Food Waste, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Fermentation Startups and Food Waste primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 09: Museum Audio Guides and Visitor Retention',
        'content': """# SAT Reading · Information and Ideas Pack 09
**Focus:** Museum Audio Guides and Visitor Retention

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Museum Audio Guides and Visitor Retention tracked outcomes across paired sites for two seasons. Where protocols for museum audio guides and visitor retention were written down and coached, the primary dwell time improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Museum Audio Guides and Visitor Retention asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better museum audio guides and visitor retention is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Museum Audio Guides and Visitor Retention may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-quarter. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Museum Audio Guides and Visitor Retention compared control, low-support, and high-support conditions. High-support beat control on the main dwell time; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Museum Audio Guides and Visitor Retention claimed each dollar for coordination staff moved the dwell time more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether museum audio guides and visitor retention matters.

## Passage 6

Archival memos show public fights over Museum Audio Guides and Visitor Retention repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the dwell time more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Museum Audio Guides and Visitor Retention, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Museum Audio Guides and Visitor Retention primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 10: Wildfire Smoke Days and Outdoor Recess',
        'content': """# SAT Reading · Information and Ideas Pack 10
**Focus:** Wildfire Smoke Days and Outdoor Recess

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Wildfire Smoke Days and Outdoor Recess tracked outcomes across paired sites for three seasons. Where protocols for wildfire smoke days and outdoor recess were written down and coached, the primary canceled outdoor periods improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Wildfire Smoke Days and Outdoor Recess asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better wildfire smoke days and outdoor recess is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Wildfire Smoke Days and Outdoor Recess may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-third. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Wildfire Smoke Days and Outdoor Recess compared control, low-support, and high-support conditions. High-support beat control on the main canceled outdoor periods; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Wildfire Smoke Days and Outdoor Recess claimed each dollar for coordination staff moved the canceled outdoor periods more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether wildfire smoke days and outdoor recess matters.

## Passage 6

Archival memos show public fights over Wildfire Smoke Days and Outdoor Recess repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the canceled outdoor periods more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Wildfire Smoke Days and Outdoor Recess, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Wildfire Smoke Days and Outdoor Recess primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 11: Open Textbook Pilots and Course Costs',
        'content': """# SAT Reading · Information and Ideas Pack 11
**Focus:** Open Textbook Pilots and Course Costs

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Open Textbook Pilots and Course Costs tracked outcomes across paired sites for two seasons. Where protocols for open textbook pilots and course costs were written down and coached, the primary dollar savings improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Open Textbook Pilots and Course Costs asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better open textbook pilots and course costs is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Open Textbook Pilots and Course Costs may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-third. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Open Textbook Pilots and Course Costs compared control, low-support, and high-support conditions. High-support beat control on the main dollar savings; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Open Textbook Pilots and Course Costs claimed each dollar for coordination staff moved the dollar savings more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether open textbook pilots and course costs matters.

## Passage 6

Archival memos show public fights over Open Textbook Pilots and Course Costs repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the dollar savings more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Open Textbook Pilots and Course Costs, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Open Textbook Pilots and Course Costs primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 12: Bat Guano Surveys and Cave Closures',
        'content': """# SAT Reading · Information and Ideas Pack 12
**Focus:** Bat Guano Surveys and Cave Closures

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Bat Guano Surveys and Cave Closures tracked outcomes across paired sites for three seasons. Where protocols for bat guano surveys and cave closures were written down and coached, the primary species counts improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Bat Guano Surveys and Cave Closures asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better bat guano surveys and cave closures is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Bat Guano Surveys and Cave Closures may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-quarter. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Bat Guano Surveys and Cave Closures compared control, low-support, and high-support conditions. High-support beat control on the main species counts; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Bat Guano Surveys and Cave Closures claimed each dollar for coordination staff moved the species counts more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether bat guano surveys and cave closures matters.

## Passage 6

Archival memos show public fights over Bat Guano Surveys and Cave Closures repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the species counts more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Bat Guano Surveys and Cave Closures, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Bat Guano Surveys and Cave Closures primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 13: Subtitles in Science Videos and Quiz Scores',
        'content': """# SAT Reading · Information and Ideas Pack 13
**Focus:** Subtitles in Science Videos and Quiz Scores

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Subtitles in Science Videos and Quiz Scores tracked outcomes across paired sites for two seasons. Where protocols for subtitles in science videos and quiz scores were written down and coached, the primary quiz accuracy improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Subtitles in Science Videos and Quiz Scores asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better subtitles in science videos and quiz scores is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Subtitles in Science Videos and Quiz Scores may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-third. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Subtitles in Science Videos and Quiz Scores compared control, low-support, and high-support conditions. High-support beat control on the main quiz accuracy; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Subtitles in Science Videos and Quiz Scores claimed each dollar for coordination staff moved the quiz accuracy more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether subtitles in science videos and quiz scores matters.

## Passage 6

Archival memos show public fights over Subtitles in Science Videos and Quiz Scores repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the quiz accuracy more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Subtitles in Science Videos and Quiz Scores, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Subtitles in Science Videos and Quiz Scores primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 14: Community Solar Subscriptions and Renters',
        'content': """# SAT Reading · Information and Ideas Pack 14
**Focus:** Community Solar Subscriptions and Renters

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Community Solar Subscriptions and Renters tracked outcomes across paired sites for three seasons. Where protocols for community solar subscriptions and renters were written down and coached, the primary signup rate improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Community Solar Subscriptions and Renters asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better community solar subscriptions and renters is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Community Solar Subscriptions and Renters may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-third. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Community Solar Subscriptions and Renters compared control, low-support, and high-support conditions. High-support beat control on the main signup rate; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Community Solar Subscriptions and Renters claimed each dollar for coordination staff moved the signup rate more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether community solar subscriptions and renters matters.

## Passage 6

Archival memos show public fights over Community Solar Subscriptions and Renters repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the signup rate more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Community Solar Subscriptions and Renters, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Community Solar Subscriptions and Renters primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 15: Historical Map Digitization and Local Claims',
        'content': """# SAT Reading · Information and Ideas Pack 15
**Focus:** Historical Map Digitization and Local Claims

Short-passage set targeting main ideas, evidence, inferences, and quantitative reading.

## Passage 1

A research team investigating Historical Map Digitization and Local Claims tracked outcomes across paired sites for two seasons. Where protocols for historical map digitization and local claims were written down and coached, the primary claim disputes improved more steadily than at sites that reinvented steps each week. The authors treat standardization—not enthusiasm alone—as the ingredient that made comparisons trustworthy.

## Passage 2

Follow-up interviews about Historical Map Digitization and Local Claims asked stakeholders to rank barriers. Upfront cost and schedule conflicts dominated; “people do not care” ranked near the bottom. The write-up concludes that demand for better historical map digitization and local claims is real, while coordination capacity remains scarce.

## Passage 3

Skeptics warn that early champions of Historical Map Digitization and Local Claims may be unusually motivated volunteers. Re-running the analysis on randomly recruited participants shrank the headline effect by about one-quarter. Selection bias likely inflated first reports, yet a smaller positive signal remained.

## Passage 4

A results table for Historical Map Digitization and Local Claims compared control, low-support, and high-support conditions. High-support beat control on the main claim disputes; low-support landed between them. Because the low-support versus control confidence intervals overlapped, that pairwise contrast stayed inconclusive.

## Passage 5

A budget brief on Historical Map Digitization and Local Claims claimed each dollar for coordination staff moved the claim disputes more than a dollar for publicity. Communications staff replied that awareness effects are real but harder to meter than operational metrics. The disagreement is about what counts as evidence, not about whether historical map digitization and local claims matters.

## Passage 6

Archival memos show public fights over Historical Map Digitization and Local Claims repeating across decades: pilot excitement, strained scale-up, then redesign. Modern studies measure the claim disputes more carefully than older pamphlets did. Even so, the core trade-off—rigorous design versus wide reach—still shapes what decision makers can claim.

## Questions

### Question 1

Based on the opening passage on Historical Map Digitization and Local Claims, standardized training protocols were associated with

**A)** noisier data than improvisation.
**B)** more reliable conclusions than week-to-week improvisation.
**C)** higher promotional spending only.
**D)** elimination of all selection bias.

**Answer:** B
**Why:** Standardized protocols yielded modest consistent gains and more reliable conclusions versus improvisation.

### Question 2

According to the barrier survey, which obstacle ranked near the bottom?

**A)** Cost
**B)** Scheduling conflicts
**C)** Lack of interest
**D)** Shortage of coordination staff

**Answer:** C
**Why:** Cost and scheduling ranked highest; lack of interest ranked near the bottom.

### Question 3

What happened when analyses were limited to randomly recruited participants?

**A)** Effect sizes increased dramatically.
**B)** Effect sizes shrank, suggesting earlier estimates were inflated by selection bias.
**C)** All confidence intervals disappeared.
**D)** Volunteer samples became the preferred gold standard.

**Answer:** B
**Why:** Reanalysis on random recruits reduced effect sizes, implying selection bias had inflated claims.

### Question 4

Which statement about the three-condition comparison is best supported?

**A)** Low-support clearly beat control with non-overlapping intervals.
**B)** High-support outperformed control; low-support versus control was inconclusive.
**C)** Control outperformed both interventions.
**D)** Only promotional materials differed across conditions.

**Answer:** B
**Why:** High-support beat control; low-support vs control intervals overlapped.

### Question 5

The budget-focused brief claims coordination staff spending is more effective than spending on

**A)** random recruitment bonuses.
**B)** promotional materials.
**C)** archive digitization.
**D)** confidence-interval software.

**Answer:** B
**Why:** The brief says coordination dollars yielded more measurable improvement than promotion dollars.

### Question 6

The historical closing paragraph implies that research on Historical Map Digitization and Local Claims primarily

**A)** escapes older political trade-offs through perfect measurement.
**B)** still faces familiar tensions between rigorous design and wide reach.
**C)** proves pilots never need redesign.
**D)** shows public funding fights are newly invented.

**Answer:** B
**Why:** New studies improve measurement but inherit familiar rigor-versus-reach trade-offs.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
]

SAT_READING_CRAFT_STRUCTURE: list[dict[str, str]] = [
    {
        'title': 'SAT Reading · Craft & Structure Pack 01: Marine Biologist Field Notes — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 01
**Setting:** Marine Biologist Field Notes

## Passage

Despite storms that canceled two boat days, the crew remained tenacious about finishing the transect grid before the grant window closed. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "tenacious" most nearly means

**A)** Persistent.
**B)** Temporary and easily abandoned.
**C)** Decoratively colorful.
**D)** Numerically average.

**Answer:** A
**Why:** Context supports sense close to “persistent / stubbornly continuing.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'tenacious' while preserving meaning in context?

**A)** Persistent
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “persistent / stubbornly continuing” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 02: City Council Minutes Excerpt — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 02
**Setting:** City Council Minutes Excerpt

## Passage

Residents called the zoning summary opaque, saying even attentive listeners could not tell which parcels would change. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "opaque" most nearly means

**A)** Unclear.
**B)** Fully transparent.
**C)** Musically rhythmic.
**D)** Overly generous.

**Answer:** A
**Why:** Context supports sense close to “unclear / hard to understand.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'opaque' while preserving meaning in context?

**A)** Unclear
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “unclear / hard to understand” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 03: Economics Podcast Transcript — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 03
**Setting:** Economics Podcast Transcript

## Passage

The host joked that coffee demand shows little elasticity—price spikes rarely stop the morning line. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "elasticity" most nearly means

**A)** Responsiveness of demand.
**B)** Complete rigidity with no response.
**C)** Historical nostalgia.
**D)** Visual brightness.

**Answer:** A
**Why:** Context supports sense close to “responsiveness of demand/supply to price.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'elasticity' while preserving meaning in context?

**A)** Responsiveness of demand
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “responsiveness of demand/supply to price” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 04: Trail Guide Preface — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 04
**Setting:** Trail Guide Preface

## Passage

From the valley floor the ridge looks formidable, yet switchbacks make the climb manageable for careful hikers. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "formidable" most nearly means

**A)** Impressive and intimidating.
**B)** Trivial and easily ignored.
**C)** Newly invented yesterday.
**D)** Liquid at room temperature.

**Answer:** A
**Why:** Context supports sense close to “impressive and intimidating.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'formidable' while preserving meaning in context?

**A)** Impressive and intimidating
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “impressive and intimidating” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 05: Lab Safety Memo — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 05
**Setting:** Lab Safety Memo

## Passage

Secondary containment trays mitigate spill risk when students transfer solvents between benches. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "mitigate" most nearly means

**A)** Reduce the severity of.
**B)** Intensify on purpose.
**C)** Ignore documentation.
**D)** Celebrate publicly.

**Answer:** A
**Why:** Context supports sense close to “reduce the severity of.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'mitigate' while preserving meaning in context?

**A)** Reduce the severity of
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “reduce the severity of” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 06: Museum Wall Text — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 06
**Setting:** Museum Wall Text

## Passage

The curator chose to juxtapose wartime posters with quiet domestic sketches from the same year. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "juxtapose" most nearly means

**A)** Place side by side for contrast.
**B)** Hide permanently from view.
**C)** Translate into Latin.
**D)** Sell at auction only.

**Answer:** A
**Why:** Context supports sense close to “place side by side for contrast.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'juxtapose' while preserving meaning in context?

**A)** Place side by side for contrast
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “place side by side for contrast” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 07: Climate Op-Ed — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 07
**Setting:** Climate Op-Ed

## Passage

Paving wetlands can exacerbate flooding by removing natural sponges that absorb stormwater. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "exacerbate" most nearly means

**A)** Make worse.
**B)** Improve or relieve.
**C)** Catalog alphabetically.
**D)** Photograph from above.

**Answer:** A
**Why:** Context supports sense close to “make worse.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'exacerbate' while preserving meaning in context?

**A)** Make worse
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “make worse” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 08: Psychology Abstract — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 08
**Setting:** Psychology Abstract

## Passage

Under stress, emotionally salient words were recalled more accurately than neutral controls. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "salient" most nearly means

**A)** Most noticeable or important.
**B)** Easy to overlook as unimportant.
**C)** Frozen solid.
**D)** Borrowable from a library.

**Answer:** A
**Why:** Context supports sense close to “most noticeable or important.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'salient' while preserving meaning in context?

**A)** Most noticeable or important
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “most noticeable or important” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 09: Engineering Blog — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 09
**Setting:** Engineering Blog

## Passage

A robust algorithm keeps accurate readings even when sensors briefly lose calibration. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "robust" most nearly means

**A)** Strong under varied conditions.
**B)** Fragile under slight change.
**C)** Rhyming in couplets.
**D)** Forbidden in labs.

**Answer:** A
**Why:** Context supports sense close to “strong under varied conditions.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'robust' while preserving meaning in context?

**A)** Strong under varied conditions
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “strong under varied conditions” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 10: Literary Headnote — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 10
**Setting:** Literary Headnote

## Passage

The narrator feels ambivalent toward homecoming: eager for familiar streets yet wary of old conflicts. Colleagues debated whether the tone of the write-up should stay technical or invite general readers. The revised draft kept precise terms but added a one-sentence definition after first use. That compromise preserved credibility while widening access—an editorial purpose visible in the paragraph’s pacing.

## Questions

### Question 1

As used in the passage, "ambivalent" most nearly means

**A)** Having mixed feelings.
**B)** Entirely one-sided in feeling.
**C)** Geometrically square.
**D)** Written in code.

**Answer:** A
**Why:** Context supports sense close to “having mixed feelings.”

### Question 2

Which choice best describes the primary purpose of the revised draft’s one-sentence definition?

**A)** To mock general readers for needing help.
**B)** To widen access while keeping precise terminology.
**C)** To remove all technical vocabulary.
**D)** To lengthen the text for a word-count requirement.

**Answer:** B
**Why:** The passage states the compromise preserved credibility while widening access.

### Question 3

The colleagues’ debate mainly concerns

**A)** whether sensors lost calibration.
**B)** audience and tone: technical precision versus broader readability.
**C)** which boat days were canceled.
**D)** how to pave wetlands safely.

**Answer:** B
**Why:** They debated staying technical versus inviting general readers.

### Question 4

Which structural feature most clearly signals an editorial compromise?

**A)** Keeping precise terms but adding a brief definition after first use.
**B)** Deleting the opening sentence entirely.
**C)** Switching the text into a poem.
**D)** Refusing to revise after feedback.

**Answer:** A
**Why:** That pairing is explicitly named as the compromise.

### Question 5

A student claims the passage’s ending is mainly narrative suspense. Is that accurate?

**A)** Yes; it withholds the grant outcome deliberately.
**B)** No; the ending explains an editorial purpose rather than building plot suspense.
**C)** Yes; it introduces a new antagonist.
**D)** No; the passage has no ending sentence.

**Answer:** B
**Why:** The close clarifies purpose (credibility + access), not cliffhanger suspense.

### Question 6

Which choice would best replace 'ambivalent' while preserving meaning in context?

**A)** Having mixed feelings
**B)** Unrelated jargon
**C)** Sarcastic insult
**D)** Random date

**Answer:** A
**Why:** A near-synonym matching “having mixed feelings” fits the sentence.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
]

SAT_READING_CROSS_TEXT: list[dict[str, str]] = [
    {
        'title': 'SAT Reading · Cross-Text Pack 01: Homework Bans in Middle School',
        'content': """# SAT Reading · Cross-Text & Purpose Pack 01
**Topic:** Homework Bans in Middle School

## Paired Texts

Text A: Principal Nguyen argues that a homework ban in grades 6–8 improved sleep logs and reduced reported anxiety. Class time now includes guided practice, so skill gaps are addressed before dismissal. Families in a spring survey described evenings as calmer, though a minority missed challenge problems.

Text B: Tutor Morales warns that banning homework can widen gaps for students who need spaced practice. Without short at-home reviews, she says, algebra procedures fade between Monday and Thursday. She favors optional enrichment packets rather than a blanket ban.

## Questions

### Question 1

The author of Text B would most likely respond to Text A’s central claim by

**A)** denying that any data exist on the topic.
**B)** accepting the goal in part but stressing overlooked costs, limits, or uneven effects.
**C)** arguing that Text A is fiction rather than argument.
**D)** insisting the issue cannot be discussed in schools.

**Answer:** B
**Why:** Text B typically qualifies Text A with trade-offs, harms, or implementation limits.

### Question 2

Which choice best describes the relationship between the two texts?

**A)** Text B offers a cautionary or corrective perspective on Text A’s optimistic policy reading.
**B)** Both texts narrate identical personal memoirs without policy claims.
**C)** Text A refutes a scientific law stated in Text B.
**D)** The texts address unrelated subjects.

**Answer:** A
**Why:** A advances a policy benefit; B complicates it with risks or equity concerns.

### Question 3

A primary purpose shared by both authors is to

**A)** entertain with unrelated jokes.
**B)** influence how readers evaluate a contested education or environmental policy choice.
**C)** provide a complete laboratory protocol.
**D)** translate a poem into prose.

**Answer:** B
**Why:** Both argue about real-world policy trade-offs for an evaluative audience.

### Question 4

Which evidence from Text A is most central to its persuasive strategy?

**A)** A concrete outcome or metric offered as support for the proposed approach.
**B)** An insult directed at Text B’s author.
**C)** A claim that no monitoring is needed.
**D)** A demand to end all public debate.

**Answer:** A
**Why:** Text A leans on reported outcomes (surveys, audits, scores, flow data, etc.).

### Question 5

On which point would the authors most likely agree?

**A)** Implementation details and affected groups matter when judging the policy.
**B)** No stakeholders outside experts should ever be consulted.
**C)** Measurement is irrelevant to decision-making.
**D)** The status quo requires zero examination.

**Answer:** A
**Why:** Both engage who is helped or harmed and how the policy runs in practice.

### Question 6

Which choice best captures Text B’s rhetorical purpose?

**A)** To introduce overlooked constraints so readers do not treat Text A’s solution as cost-free.
**B)** To announce a product recall unrelated to the topic.
**C)** To summarize only Text A without adding critique.
**D)** To replace argument with a shopping list.

**Answer:** A
**Why:** Text B foregrounds burdens, false substitutes, or health/equity side effects.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Cross-Text Pack 02: Plastic Packaging Taxes',
        'content': """# SAT Reading · Cross-Text & Purpose Pack 02
**Topic:** Plastic Packaging Taxes

## Paired Texts

Text A: Economist Park claims a per-item plastic packaging tax nudged manufacturers toward cardboard and reusable crates. Store audits showed a 12 percent drop in single-use plastic units within a year. Park treats consumer price increases of a few cents as an acceptable signal.

Text B: Grocer Patel responds that the tax hit smaller markets harder because they lack bulk contracts for alternatives. Some switched to thicker plastic that still counts as recyclable on paper but uses more material. Patel wants subsidies for reusable systems, not taxes alone.

## Questions

### Question 1

The author of Text B would most likely respond to Text A’s central claim by

**A)** denying that any data exist on the topic.
**B)** accepting the goal in part but stressing overlooked costs, limits, or uneven effects.
**C)** arguing that Text A is fiction rather than argument.
**D)** insisting the issue cannot be discussed in schools.

**Answer:** B
**Why:** Text B typically qualifies Text A with trade-offs, harms, or implementation limits.

### Question 2

Which choice best describes the relationship between the two texts?

**A)** Text B offers a cautionary or corrective perspective on Text A’s optimistic policy reading.
**B)** Both texts narrate identical personal memoirs without policy claims.
**C)** Text A refutes a scientific law stated in Text B.
**D)** The texts address unrelated subjects.

**Answer:** A
**Why:** A advances a policy benefit; B complicates it with risks or equity concerns.

### Question 3

A primary purpose shared by both authors is to

**A)** entertain with unrelated jokes.
**B)** influence how readers evaluate a contested education or environmental policy choice.
**C)** provide a complete laboratory protocol.
**D)** translate a poem into prose.

**Answer:** B
**Why:** Both argue about real-world policy trade-offs for an evaluative audience.

### Question 4

Which evidence from Text A is most central to its persuasive strategy?

**A)** A concrete outcome or metric offered as support for the proposed approach.
**B)** An insult directed at Text B’s author.
**C)** A claim that no monitoring is needed.
**D)** A demand to end all public debate.

**Answer:** A
**Why:** Text A leans on reported outcomes (surveys, audits, scores, flow data, etc.).

### Question 5

On which point would the authors most likely agree?

**A)** Implementation details and affected groups matter when judging the policy.
**B)** No stakeholders outside experts should ever be consulted.
**C)** Measurement is irrelevant to decision-making.
**D)** The status quo requires zero examination.

**Answer:** A
**Why:** Both engage who is helped or harmed and how the policy runs in practice.

### Question 6

Which choice best captures Text B’s rhetorical purpose?

**A)** To introduce overlooked constraints so readers do not treat Text A’s solution as cost-free.
**B)** To announce a product recall unrelated to the topic.
**C)** To summarize only Text A without adding critique.
**D)** To replace argument with a shopping list.

**Answer:** A
**Why:** Text B foregrounds burdens, false substitutes, or health/equity side effects.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Cross-Text Pack 03: AI Writing Detectors in Schools',
        'content': """# SAT Reading · Cross-Text & Purpose Pack 03
**Topic:** AI Writing Detectors in Schools

## Paired Texts

Text A: Administrator Cole defends detectors as a stopgap that flags sudden style shifts for teacher review. False positives occur, Cole admits, but human judgment remains the final step. The goal is conversation about process, not automatic punishment.

Text B: Student essayist Ramos calls detectors unreliable for bilingual writers whose phrasing already looks “nonstandard” to models. Fear of false flags, Ramos argues, pushes students toward safer, less ambitious prose. Transparent process portfolios would build trust better than secret scores.

## Questions

### Question 1

The author of Text B would most likely respond to Text A’s central claim by

**A)** denying that any data exist on the topic.
**B)** accepting the goal in part but stressing overlooked costs, limits, or uneven effects.
**C)** arguing that Text A is fiction rather than argument.
**D)** insisting the issue cannot be discussed in schools.

**Answer:** B
**Why:** Text B typically qualifies Text A with trade-offs, harms, or implementation limits.

### Question 2

Which choice best describes the relationship between the two texts?

**A)** Text B offers a cautionary or corrective perspective on Text A’s optimistic policy reading.
**B)** Both texts narrate identical personal memoirs without policy claims.
**C)** Text A refutes a scientific law stated in Text B.
**D)** The texts address unrelated subjects.

**Answer:** A
**Why:** A advances a policy benefit; B complicates it with risks or equity concerns.

### Question 3

A primary purpose shared by both authors is to

**A)** entertain with unrelated jokes.
**B)** influence how readers evaluate a contested education or environmental policy choice.
**C)** provide a complete laboratory protocol.
**D)** translate a poem into prose.

**Answer:** B
**Why:** Both argue about real-world policy trade-offs for an evaluative audience.

### Question 4

Which evidence from Text A is most central to its persuasive strategy?

**A)** A concrete outcome or metric offered as support for the proposed approach.
**B)** An insult directed at Text B’s author.
**C)** A claim that no monitoring is needed.
**D)** A demand to end all public debate.

**Answer:** A
**Why:** Text A leans on reported outcomes (surveys, audits, scores, flow data, etc.).

### Question 5

On which point would the authors most likely agree?

**A)** Implementation details and affected groups matter when judging the policy.
**B)** No stakeholders outside experts should ever be consulted.
**C)** Measurement is irrelevant to decision-making.
**D)** The status quo requires zero examination.

**Answer:** A
**Why:** Both engage who is helped or harmed and how the policy runs in practice.

### Question 6

Which choice best captures Text B’s rhetorical purpose?

**A)** To introduce overlooked constraints so readers do not treat Text A’s solution as cost-free.
**B)** To announce a product recall unrelated to the topic.
**C)** To summarize only Text A without adding critique.
**D)** To replace argument with a shopping list.

**Answer:** A
**Why:** Text B foregrounds burdens, false substitutes, or health/equity side effects.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Cross-Text Pack 04: Reintroducing Beavers Downstream',
        'content': """# SAT Reading · Cross-Text & Purpose Pack 04
**Topic:** Reintroducing Beavers Downstream

## Paired Texts

Text A: Ecologist Stein highlights beaver dams that raise water tables and create wetlands supporting birds and amphibians. Downstream farmers initially feared flooding, yet monitored sites showed more stable late-summer flow. Stein calls beavers low-cost partners in drought resilience.

Text B: Orchard owner Blake documents tree-root damage where beavers felled border poplars. Fencing and paint deterrents help but require labor small farms struggle to spare. Blake supports reintroduction only with funded coexistence tools.

## Questions

### Question 1

The author of Text B would most likely respond to Text A’s central claim by

**A)** denying that any data exist on the topic.
**B)** accepting the goal in part but stressing overlooked costs, limits, or uneven effects.
**C)** arguing that Text A is fiction rather than argument.
**D)** insisting the issue cannot be discussed in schools.

**Answer:** B
**Why:** Text B typically qualifies Text A with trade-offs, harms, or implementation limits.

### Question 2

Which choice best describes the relationship between the two texts?

**A)** Text B offers a cautionary or corrective perspective on Text A’s optimistic policy reading.
**B)** Both texts narrate identical personal memoirs without policy claims.
**C)** Text A refutes a scientific law stated in Text B.
**D)** The texts address unrelated subjects.

**Answer:** A
**Why:** A advances a policy benefit; B complicates it with risks or equity concerns.

### Question 3

A primary purpose shared by both authors is to

**A)** entertain with unrelated jokes.
**B)** influence how readers evaluate a contested education or environmental policy choice.
**C)** provide a complete laboratory protocol.
**D)** translate a poem into prose.

**Answer:** B
**Why:** Both argue about real-world policy trade-offs for an evaluative audience.

### Question 4

Which evidence from Text A is most central to its persuasive strategy?

**A)** A concrete outcome or metric offered as support for the proposed approach.
**B)** An insult directed at Text B’s author.
**C)** A claim that no monitoring is needed.
**D)** A demand to end all public debate.

**Answer:** A
**Why:** Text A leans on reported outcomes (surveys, audits, scores, flow data, etc.).

### Question 5

On which point would the authors most likely agree?

**A)** Implementation details and affected groups matter when judging the policy.
**B)** No stakeholders outside experts should ever be consulted.
**C)** Measurement is irrelevant to decision-making.
**D)** The status quo requires zero examination.

**Answer:** A
**Why:** Both engage who is helped or harmed and how the policy runs in practice.

### Question 6

Which choice best captures Text B’s rhetorical purpose?

**A)** To introduce overlooked constraints so readers do not treat Text A’s solution as cost-free.
**B)** To announce a product recall unrelated to the topic.
**C)** To summarize only Text A without adding critique.
**D)** To replace argument with a shopping list.

**Answer:** A
**Why:** Text B foregrounds burdens, false substitutes, or health/equity side effects.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Cross-Text Pack 05: Four-Day School Weeks',
        'content': """# SAT Reading · Cross-Text & Purpose Pack 05
**Topic:** Four-Day School Weeks

## Paired Texts

Text A: District analyst Cho reports teacher retention improved after switching to a four-day week with longer school days. Friday childcare partnerships reduced the burden for many families. Standardized scores held steady in year one.

Text B: Pediatrician Okonkwo notes longer schooldays correlated with more afternoon fatigue referrals in younger grades. Food-insecure students lost a regular Friday meal unless districts expanded grab-and-go. Okonkwo urges health metrics alongside retention statistics.

## Questions

### Question 1

The author of Text B would most likely respond to Text A’s central claim by

**A)** denying that any data exist on the topic.
**B)** accepting the goal in part but stressing overlooked costs, limits, or uneven effects.
**C)** arguing that Text A is fiction rather than argument.
**D)** insisting the issue cannot be discussed in schools.

**Answer:** B
**Why:** Text B typically qualifies Text A with trade-offs, harms, or implementation limits.

### Question 2

Which choice best describes the relationship between the two texts?

**A)** Text B offers a cautionary or corrective perspective on Text A’s optimistic policy reading.
**B)** Both texts narrate identical personal memoirs without policy claims.
**C)** Text A refutes a scientific law stated in Text B.
**D)** The texts address unrelated subjects.

**Answer:** A
**Why:** A advances a policy benefit; B complicates it with risks or equity concerns.

### Question 3

A primary purpose shared by both authors is to

**A)** entertain with unrelated jokes.
**B)** influence how readers evaluate a contested education or environmental policy choice.
**C)** provide a complete laboratory protocol.
**D)** translate a poem into prose.

**Answer:** B
**Why:** Both argue about real-world policy trade-offs for an evaluative audience.

### Question 4

Which evidence from Text A is most central to its persuasive strategy?

**A)** A concrete outcome or metric offered as support for the proposed approach.
**B)** An insult directed at Text B’s author.
**C)** A claim that no monitoring is needed.
**D)** A demand to end all public debate.

**Answer:** A
**Why:** Text A leans on reported outcomes (surveys, audits, scores, flow data, etc.).

### Question 5

On which point would the authors most likely agree?

**A)** Implementation details and affected groups matter when judging the policy.
**B)** No stakeholders outside experts should ever be consulted.
**C)** Measurement is irrelevant to decision-making.
**D)** The status quo requires zero examination.

**Answer:** A
**Why:** Both engage who is helped or harmed and how the policy runs in practice.

### Question 6

Which choice best captures Text B’s rhetorical purpose?

**A)** To introduce overlooked constraints so readers do not treat Text A’s solution as cost-free.
**B)** To announce a product recall unrelated to the topic.
**C)** To summarize only Text A without adding critique.
**D)** To replace argument with a shopping list.

**Answer:** A
**Why:** Text B foregrounds burdens, false substitutes, or health/equity side effects.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
]

SAT_GRAMMAR_CONVENTIONS: list[dict[str, str]] = [
    {
        'title': 'SAT Grammar · Conventions Pack 01: Boundaries 01 — Comma Splices And Fused Sentences',
        'content': """# SAT Grammar · Standard English Conventions Pack 01
**Skill focus:** comma splices and fused sentences

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

The museum opens at ten____ the first tour begins at ten-thirty.

**A)** ten, the
**B)** ten; the
**C)** ten the
**D)** ten: and the

**Answer:** B
**Why:** A semicolon correctly joins two independent clauses; A is a comma splice, C is fused.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 02: Boundaries 02 — Unnecessary Periods / Fragments',
        'content': """# SAT Grammar · Standard English Conventions Pack 02
**Skill focus:** unnecessary periods / fragments

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

Although the forecast predicted rain____ the match continued under lights.

**A)** rain. The
**B)** rain; and the
**C)** rain, the
**D)** rain: the

**Answer:** C
**Why:** A dependent Although-clause must attach with a comma, not a period that creates a fragment.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 03: Boundaries 03 — Conjuncts With However',
        'content': """# SAT Grammar · Standard English Conventions Pack 03
**Skill focus:** conjuncts with however

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

Tickets sold out by noon____ however, standby seats opened at dusk.

**A)** noon, however,
**B)** noon; however,
**C)** noon however,
**D)** noon: however

**Answer:** B
**Why:** When however links independents, use semicolon before and comma after.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 04: Form 01 — Subject-Verb Agreement',
        'content': """# SAT Grammar · Standard English Conventions Pack 04
**Skill focus:** subject-verb agreement

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

A bundle of export documents ____ waiting on the clerk’s desk.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** Bundle is singular; intervening prepositional phrase does not change the verb.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 05: Form 02 — Pronoun-Antecedent',
        'content': """# SAT Grammar · Standard English Conventions Pack 05
**Skill focus:** pronoun-antecedent

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

Each of the finalists brought ____ portfolio to the interview.

**A)** they
**B)** its
**C)** their
**D)** them

**Answer:** C
**Why:** Each takes a singular possessive; their is the conventional inclusive singular possessive here (not subject pronoun they).

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 06: Form 03 — Verb Tense Consistency',
        'content': """# SAT Grammar · Standard English Conventions Pack 06
**Skill focus:** verb tense consistency

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

By the time the judges arrived, the choir ____ already rehearsed twice.

**A)** has
**B)** have
**C)** had
**D)** having

**Answer:** C
**Why:** Past perfect marks rehearsal completed before a past arrival.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 07: Form 04 — Modifier Placement',
        'content': """# SAT Grammar · Standard English Conventions Pack 07
**Skill focus:** modifier placement

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

____ the volunteers packed two hundred kits in an hour.

**A)** Working quickly,
**B)** Worked quickly,
**C)** To working quickly,
**D)** Quickly worked,

**Answer:** A
**Why:** A participial opener must modify the subject volunteers; Working quickly does so.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 08: Form 05 — Parallelism',
        'content': """# SAT Grammar · Standard English Conventions Pack 08
**Skill focus:** parallelism

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

The internship offers mentoring, networking, and ____.

**A)** to build a portfolio
**B)** portfolio building
**C)** you can build a portfolio
**D)** that portfolios get built

**Answer:** B
**Why:** Mentoring / networking / portfolio building keeps noun-gerund parallel structure.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 09: Form 06 — Comparative/Superlative',
        'content': """# SAT Grammar · Standard English Conventions Pack 09
**Skill focus:** comparative/superlative

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

Of the two prototypes, the lighter one is the ____ choice for fieldwork.

**A)** more better
**B)** best
**C)** better
**D)** most best

**Answer:** C
**Why:** Comparisons of exactly two items use comparative better, not superlative best.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 10: Punctuation 01 — Nonessential Clauses',
        'content': """# SAT Grammar · Standard English Conventions Pack 10
**Skill focus:** nonessential clauses

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

My cousin____ who designs board games____ visited the studio.

**A)** , who designs board games,
**B)**  who designs board games 
**C)** ; who designs board games;
**D)** —who designs board games

**Answer:** A
**Why:** Nonessential who-clause needs commas on both sides.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 11: Punctuation 02 — Colons For Lists/Explanations',
        'content': """# SAT Grammar · Standard English Conventions Pack 11
**Skill focus:** colons for lists/explanations

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

Bring only the essentials____ passport, charger, and rain jacket.

**A)** essentials,
**B)** essentials;
**C)** essentials:
**D)** essentials

**Answer:** C
**Why:** A colon introduces a list after a complete independent clause.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 12: Punctuation 03 — Apostrophes',
        'content': """# SAT Grammar · Standard English Conventions Pack 12
**Skill focus:** apostrophes

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

The ____ uniforms arrived before Friday’s parade.

**A)** players
**B)** player’s
**C)** players’
**D)** players’s

**Answer:** C
**Why:** Plural players owning uniforms takes players’.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 13: Punctuation 04 — Dashes For Interrupters',
        'content': """# SAT Grammar · Standard English Conventions Pack 13
**Skill focus:** dashes for interrupters

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

The final clue____ a torn ticket stub____ was hidden in the liner notes.

**A)** , a torn ticket stub,
**B)** — a torn ticket stub —
**C)** ; a torn ticket stub;
**D)** : a torn ticket stub:

**Answer:** B
**Why:** Paired dashes set off an abrupt interrupting appositive cleanly (commas also possible; B matches dash skill).

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 14: Punctuation 05 — Essential Vs Nonessential That/Which',
        'content': """# SAT Grammar · Standard English Conventions Pack 14
**Skill focus:** essential vs nonessential that/which

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

Buildings ____ fail inspection cannot open to the public.

**A)** , which
**B)** which
**C)** that
**D)** , that

**Answer:** C
**Why:** Essential restrictive clause uses that without commas.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 15: Sense 01 — Logical Comparisons',
        'content': """# SAT Grammar · Standard English Conventions Pack 15
**Skill focus:** logical comparisons

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

The cost of the electric model is higher than ____.

**A)** gas
**B)** a gas car
**C)** that of a gas car
**D)** buying gas

**Answer:** C
**Why:** Compare cost to cost (that of), not cost to a car or to gas.

### Question 2

Which choice best corrects the boundary error?

The data were incomplete____ the team delayed publication.

**A)** incomplete, the
**B)** incomplete; the
**C)** incomplete the
**D)** incomplete: and the

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a comma splice.

### Question 3

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 4

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 5

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 6

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
]

SAT_GRAMMAR_EDITING: list[dict[str, str]] = [
    {
        'title': 'SAT Grammar · Editing Passage Pack 01: Campus Garden Proposal',
        'content': """# SAT Grammar · Editing Passage Pack 01
**Passage title:** Campus Garden Proposal

## Passage

The student government proposes a campus garden outside the science wing. [1] Vegetables will be donated to the food pantry, and herbs will supply the culinary club. [2] Volunteers from three clubs has already signed up for weekend shifts. [3] A soil test, completed in March, shows adequate drainage. [4] Critics worry about vandalism however fencing and lighting are included in the budget.

## Questions

### Question 1

Which choice best corrects the error in sentence [2]?

**A)** NO CHANGE (has already signed up)
**B)** have already signed up
**C)** having already signed up
**D)** is already signed up

**Answer:** B
**Why:** Volunteers is plural, so the verb must be have.

### Question 2

Which choice best corrects the boundary error in sentence [4]?

**A)** vandalism, however fencing
**B)** vandalism; however, fencing
**C)** vandalism however, fencing
**D)** vandalism: however fencing

**Answer:** B
**Why:** However joining independents needs a semicolon before and a comma after.

### Question 3

Which choice most effectively combines the donation targets in [1] without redundancy?

**A)** Vegetables and herbs will support the pantry and culinary club, respectively.
**B)** Vegetables will be donated and herbs will also be donated too.
**C)** Everything grown goes everywhere on campus always.
**D)** Delete mention of the pantry and culinary club.

**Answer:** A
**Why:** A is concise and preserves both beneficiaries clearly.

### Question 4

Is sentence [3] conventionally punctuated?

**A)** Yes; the participial phrase completed in March is correctly set off.
**B)** No; March must be written as Mar.
**C)** No; a colon must follow test.
**D)** No; shows must be show.

**Answer:** A
**Why:** Nonessential participial detail is correctly enclosed with commas.

### Question 5

Which transition best begins a follow-up sentence that concedes remaining risk after [4]?

**A)** Therefore,
**B)** Still,
**C)** Likewise,
**D)** In conclusion,

**Answer:** B
**Why:** Still marks a concession that risk remains despite fencing and lighting.

### Question 6

Which revision best avoids a vague pronoun if a later sentence begins with They oppose watering costs?

**A)** Keep They with no nearby noun.
**B)** Residents who criticize the garden oppose watering costs.
**C)** One oppose watering costs.
**D)** Opposing watering costs happens.

**Answer:** B
**Why:** A clear noun phrase removes ambiguous They.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Editing Passage Pack 02: Museum Internship Report',
        'content': """# SAT Grammar · Editing Passage Pack 02
**Passage title:** Museum Internship Report

## Passage

This summer I cataloged photographs from the 1920s flood. [1] Each envelope contained negatives, contact sheets, and a index card with location notes. [2] Working carefully, fragile plates were placed in archival sleeves by me. [3] The curator asked that everyone wear gloves, and that we log humidity readings hourly. [4] By August, the searchable database were ready for visiting historians.

## Questions

### Question 1

Which choice best corrects the article error in sentence [1]?

**A)** NO CHANGE (a index card)
**B)** an index card
**C)** a indexes card
**D)** the index cardses

**Answer:** B
**Why:** Index begins with a vowel sound, so an is required.

### Question 2

Which choice best corrects the dangling modifier in sentence [2]?

**A)** NO CHANGE
**B)** Working carefully, I placed fragile plates in archival sleeves.
**C)** Working carefully, archival sleeves placed the plates.
**D)** Fragile plates, working carefully, placed me.

**Answer:** B
**Why:** The opener Working carefully must modify I, the person working.

### Question 3

Which choice best corrects agreement in sentence [4]?

**A)** NO CHANGE (were ready)
**B)** was ready
**C)** are ready
**D)** be ready

**Answer:** B
**Why:** Database is singular, so was is correct.

### Question 4

Which choice keeps the that-clauses in sentence [3] parallel?

**A)** wear gloves, and that we log
**B)** to wear gloves, and logging
**C)** wearing gloves, and we logged
**D)** gloves, and humidity

**Answer:** A
**Why:** That everyone wear… and that we log… maintains parallel clauses.

### Question 5

Which punctuation correctly adds a nonessential year after flood?

**A)** flood, a disaster in 1927,
**B)** flood a disaster in 1927
**C)** flood; a disaster in 1927;
**D)** flood: a disaster in 1927:

**Answer:** A
**Why:** Nonessential appositives take enclosing commas.

### Question 6

Which word is the most precise replacement if stuff appeared in place of archival materials?

**A)** materials
**B)** things
**C)** stuff
**D)** whatever

**Answer:** A
**Why:** Materials is precise in an archival report.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Editing Passage Pack 03: Bus Rapid Transit Brief',
        'content': """# SAT Grammar · Editing Passage Pack 03
**Passage title:** Bus Rapid Transit Brief

## Passage

The city plans a bus rapid transit lane on Maple Avenue. [1] Dedicated lanes can cut travel times, reduce bunching, and improving reliability. [2] Merchants fear lost parking, but a pilot on Oak Street saw foot traffic rise. [3] Engineers will install platforms that are raised, well lit, and with shelters. [4] If funding holds the first segment could open within two years.

## Questions

### Question 1

Which choice best restores parallelism in sentence [1]?

**A)** NO CHANGE (improving reliability)
**B)** improve reliability
**C)** reliability improving
**D)** reliability is improved

**Answer:** B
**Why:** Cut, reduce, and improve are parallel verbs.

### Question 2

If a contrast transition is added at the start of [2], which works best?

**A)** Similarly,
**B)** Nevertheless,
**C)** In other words,
**D)** For instance,

**Answer:** B
**Why:** Nevertheless contrasts merchants’ fear with pilot evidence of rising foot traffic.

### Question 3

Which choice best parallelizes the list in sentence [3]?

**A)** raised, well lit, and sheltered
**B)** NO CHANGE (and with shelters)
**C)** raise, lighting, shelters
**D)** raised and well lit and sheltering is

**Answer:** A
**Why:** Three adjectives stay parallel: raised, well lit, sheltered.

### Question 4

Which boundary fix is best for sentence [4]?

**A)** If funding holds, the first segment
**B)** NO CHANGE
**C)** If funding holds; the first segment
**D)** If funding holds: the first segment

**Answer:** A
**Why:** An introductory adverbial clause needs a comma.

### Question 5

Which detail from the Oak Street pilot best supports the Maple Avenue proposal?

**A)** Foot traffic rose during the pilot.
**B)** Merchants fear lost parking.
**C)** Maple Avenue is a street name.
**D)** Two years is a duration.

**Answer:** A
**Why:** Rising foot traffic undercuts the parking-loss objection.

### Question 6

Which title best matches the brief’s persuasive purpose?

**A)** Why a Maple Avenue BRT Lane Merits a Pilot
**B)** My Summer Vacation Diary
**C)** Random Facts About Buses
**D)** Ban All Parking Forever

**Answer:** A
**Why:** The brief advocates a BRT pilot with reasons.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Editing Passage Pack 04: Lab Notebook Guidelines',
        'content': """# SAT Grammar · Editing Passage Pack 04
**Passage title:** Lab Notebook Guidelines

## Passage

Students must record procedures the same day they run them. [1] Ink is required; pencil smudges when pages get damp. [2] Cross out errors with a single line do not erase. [3] Each entry should include date, materials, and what was observed. [4] Partners may share data tables, but conclusions needs to be written individually.

## Questions

### Question 1

Which choice best corrects the fused sentence in [2]?

**A)** NO CHANGE
**B)** line; do not erase
**C)** line, do not erase
**D)** line do not, erase

**Answer:** B
**Why:** Two independents need a semicolon (or period), not a fused join or comma splice.

### Question 2

Which choice best corrects agreement in sentence [4]?

**A)** NO CHANGE (needs)
**B)** need
**C)** needing
**D)** has needed

**Answer:** B
**Why:** Conclusions is plural, so need is correct.

### Question 3

Which revision best improves parallelism in sentence [3]?

**A)** date, materials, and observations
**B)** NO CHANGE
**C)** dating, materials, observe
**D)** date and materials and you observed things

**Answer:** A
**Why:** Date / materials / observations keeps a noun list parallel.

### Question 4

Sentence [1] correctly uses a semicolon because

**A)** it joins two related independent clauses.
**B)** semicolons always precede lists.
**C)** ink is a proper noun.
**D)** pencil cannot appear after a semicolon.

**Answer:** A
**Why:** Both sides of the semicolon are independent clauses.

### Question 5

Which concise opener could replace the first sentence without changing meaning?

**A)** Record procedures the same day you run them.
**B)** Procedures, being recorded, same day running.
**C)** Eventually someone might write something.
**D)** Do not use notebooks.

**Answer:** A
**Why:** Imperative form preserves the rule compactly.

### Question 6

Which choice maintains formal tone for a lab policy?

**A)** Do not erase errors; strike through them once.
**B)** Nah, just scribble weird stuff.
**C)** Erase until the page rips maybe.
**D)** Whatever happens is fine.

**Answer:** A
**Why:** A is clear, formal, and consistent with scientific integrity rules.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Editing Passage Pack 05: Podcast Launch Plan',
        'content': """# SAT Grammar · Editing Passage Pack 05
**Passage title:** Podcast Launch Plan

## Passage

Our history club will launch a six-episode podcast on local landmarks. [1] Episode one focuses on the clock tower; episode two covering the river mills. [2] Guests include an archivist, a muralist, and someone who restores stained glass. [3] We need microphones, editing software, and to reserve the studio. [4] Publicity posters—hung in the cafeteria—should go up two weeks prior.

## Questions

### Question 1

Which choice best corrects sentence [1]’s verb form?

**A)** NO CHANGE (covering)
**B)** covers the river mills
**C)** to cover the river mills
**D)** coverings of the river mills

**Answer:** B
**Why:** Focuses…; covers… keeps parallel present-tense verbs across clauses.

### Question 2

Which choice best restores parallelism in sentence [3]?

**A)** NO CHANGE
**B)** microphones, editing software, and studio reservations
**C)** microphones, to edit, and reserving
**D)** mic, software, reserve

**Answer:** B
**Why:** Three nouns parallelize the list of needs.

### Question 3

Which revision of [2] is most concise while keeping meaning?

**A)** Guests include an archivist, a muralist, and a stained-glass restorer.
**B)** Guests include an archivist, a muralist, and someone who is a person who restores stained glass windows and things.
**C)** Guests exist.
**D)** There are guests who guest.

**Answer:** A
**Why:** Stained-glass restorer compresses the clause without loss.

### Question 4

The dashes in sentence [4] function to

**A)** set off a nonessential detail about where posters are hung.
**B)** join two independent clauses like a period.
**C)** introduce a formal title only.
**D)** mark a possessive noun.

**Answer:** A
**Why:** Paired dashes enclose extra information about poster location.

### Question 5

Which transition best links a sentence about needing hosts after listing equipment?

**A)** In addition,
**B)** In contrast,
**C)** Otherwise,
**D)** Meanwhile in 1910,

**Answer:** A
**Why:** In addition continues the logistics list.

### Question 6

Which choice best completes a purpose statement for the plan?

**A)** The plan outlines episodes, guests, gear, and publicity timing for the landmark podcast.
**B)** The plan secretly cancels the podcast.
**C)** The plan is only about cafeteria food.
**D)** The plan avoids all logistics.

**Answer:** A
**Why:** A accurately summarizes the document’s aims.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Editing Passage Pack 06: Recycling Audit Memo',
        'content': """# SAT Grammar · Editing Passage Pack 06
**Passage title:** Recycling Audit Memo

## Passage

Last month’s recycling audit found contamination in three buildings. [1] Pizza boxes with grease were the most common problem they belong in landfill trash. [2] Custodial staff request clearer signage, training for new residents, and bins that is color-coded. [3] After a two-week campaign, contamination fell by 40 percent in dorms. [4] The committee recommends expanding the campaign to offices next.

## Questions

### Question 1

Which choice best corrects the fused sentence in [1]?

**A)** NO CHANGE
**B)** problem; they belong
**C)** problem, they belong
**D)** problem they, belong

**Answer:** B
**Why:** A semicolon separates two independent clauses.

### Question 2

Which choice best corrects agreement in sentence [2]?

**A)** NO CHANGE (bins that is)
**B)** bins that are color-coded
**C)** bins that was color-coded
**D)** bin that are color-coded

**Answer:** B
**Why:** Bins is plural → are.

### Question 3

Which choice keeps the list in [2] parallel?

**A)** clearer signage, resident training, and color-coded bins
**B)** NO CHANGE
**C)** signage clearer, train, color
**D)** signs, and training and also that bins

**Answer:** A
**Why:** Three noun phrases parallelize cleanly.

### Question 4

Sentence [3] provides what kind of support for expanding the campaign?

**A)** Quantitative evidence of improvement in dorms
**B)** A joke about pizza
**C)** A denial that contamination existed
**D)** A budget spreadsheet for offices only

**Answer:** A
**Why:** A 40% drop is measurable support for expansion.

### Question 5

Which transition best begins [4] if the writer wants to show result?

**A)** Therefore,
**B)** Nevertheless,
**C)** For example,
**D)** In 1890,

**Answer:** A
**Why:** Therefore marks a recommendation following the dorm success.

### Question 6

Which concise subject line fits the memo?

**A)** Recycling contamination down 40% in dorms—expand to offices
**B)** Hello
**C)** Random thoughts
**D)** Ignore audits

**Answer:** A
**Why:** A captures finding and recommendation.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Editing Passage Pack 07: Scholarship Essay Workshop',
        'content': """# SAT Grammar · Editing Passage Pack 07
**Passage title:** Scholarship Essay Workshop

## Passage

Counselors will host a scholarship essay workshop on Saturday. [1] Students should bring a draft, a laptop, and questions about prompts. [2] Sitting in a circle, feedback will be exchanged by participants every twenty minutes. [3] One common error is writing more about the award then about the applicant’s goals. [4] Snacks are provided, however, attendees must RSVP by Thursday.

## Questions

### Question 1

Which choice best corrects the dangling modifier in [2]?

**A)** NO CHANGE
**B)** Sitting in a circle, participants will exchange feedback every twenty minutes.
**C)** Sitting in a circle, feedback exchanges participants.
**D)** Feedback, sitting in a circle, will participant.

**Answer:** B
**Why:** Participants (people) sit in a circle—not feedback.

### Question 2

Which choice corrects the then/than error in [3]?

**A)** NO CHANGE (then)
**B)** than about the applicant’s goals
**C)** then about applicants goals’
**D)** then: about the applicant’s goals

**Answer:** B
**Why:** Comparisons use than, not then.

### Question 3

Which choice best corrects the boundary issue in [4]?

**A)** NO CHANGE
**B)** provided; however, attendees
**C)** provided however attendees
**D)** provided: however attendees

**Answer:** B
**Why:** However between independents needs semicolon + comma.

### Question 4

Sentence [1] is conventionally strong because it

**A)** uses a parallel list of things to bring.
**B)** contains a comma splice.
**C)** lacks a subject.
**D)** misuses an apostrophe on laptop.

**Answer:** A
**Why:** Draft, laptop, and questions are parallel nouns.

### Question 5

Which added sentence best supports the workshop’s purpose?

**A)** Peer reviewers will use a rubric focused on clarity, evidence, and fit to the prompt.
**B)** Snacks may include pretzels or not.
**C)** Saturday is a day of the week.
**D)** Laptops sometimes need chargers somewhere.

**Answer:** A
**Why:** A rubric ties directly to essay quality goals.

### Question 6

Which concise announcement sentence includes RSVP guidance?

**A)** Join Saturday’s essay workshop; RSVP by Thursday for snacks and a seat.
**B)** Workshop happens; people come; maybe.
**C)** Do not tell anyone the time.
**D)** RSVP is optional forever and never.

**Answer:** A
**Why:** A states the event and RSVP requirement clearly.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Editing Passage Pack 08: Trail Repair Notice',
        'content': """# SAT Grammar · Editing Passage Pack 08
**Passage title:** Trail Repair Notice

## Passage

Volunteers will repair the north ridge trail after winter washouts. [1] Bring gloves, water, and shoes that has sturdy treads. [2] The crew leader, Ms. Ortiz who is a park ranger will assign tools at the trailhead. [3] Work includes clearing debris, resetting steps, and to pack gravel into ruts. [4] If lightning is spotted; everyone must descend immediately.

## Questions

### Question 1

Which choice best corrects agreement in sentence [1]?

**A)** NO CHANGE (that has)
**B)** that have sturdy treads
**C)** that having sturdy treads
**D)** that is sturdy treads

**Answer:** B
**Why:** Shoes is plural → have.

### Question 2

Which punctuation correctly sets off the nonessential clause in [2]?

**A)** Ms. Ortiz, who is a park ranger,
**B)** NO CHANGE
**C)** Ms. Ortiz who is a park ranger,
**D)** Ms. Ortiz; who is a park ranger;

**Answer:** A
**Why:** Nonessential who-clause needs commas on both sides.

### Question 3

Which choice restores parallelism in sentence [3]?

**A)** NO CHANGE
**B)** clearing debris, resetting steps, and packing gravel into ruts
**C)** clear debris, resetting, and to pack
**D)** debris, steps, gravel packing is

**Answer:** B
**Why:** Three gerunds parallelize the work list.

### Question 4

Which choice best corrects sentence [4]?

**A)** NO CHANGE
**B)** If lightning is spotted, everyone must descend immediately.
**C)** If lightning is spotted everyone; must descend immediately.
**D)** If lightning is spotted: everyone must descend immediately.

**Answer:** B
**Why:** Introductory clause takes a comma, not a semicolon before the main clause.

### Question 5

Which detail most effectively emphasizes safety without adding unrelated content?

**A)** Hard hats are required near active tool use.
**B)** The trail is named north ridge for mysterious reasons maybe.
**C)** Volunteers sometimes like podcasts.
**D)** Winter happened last year.

**Answer:** A
**Why:** Hard hats are a concrete on-task safety requirement.

### Question 6

Which subject line best fits an urgent volunteer call?

**A)** North Ridge Trail Repair — Saturday crew needed
**B)** Untitled
**C)** Please ignore
**D)** Lightning forever

**Answer:** A
**Why:** A names the project and need clearly.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Editing Passage Pack 09: Science Fair Abstract Edits',
        'content': """# SAT Grammar · Editing Passage Pack 09
**Passage title:** Science Fair Abstract Edits

## Passage

Our project tested whether music tempo affects typing speed. [1] Twenty classmates typed the same paragraph under silence, slow tempo, and fast tempo. [2] Results suggest that fast tempo correlate with more errors, not higher speed. [3] Limitations include a small sample and the fact that all participants were already familiar with keyboards. [4] Future work could compare instrumental tracks with songs that has lyrics.

## Questions

### Question 1

Which choice best corrects agreement in sentence [2]?

**A)** NO CHANGE (correlate)
**B)** correlates
**C)** correlating
**D)** have correlated

**Answer:** B
**Why:** Fast tempo is singular → correlates.

### Question 2

Which choice best corrects agreement in sentence [4]?

**A)** NO CHANGE (has lyrics)
**B)** that have lyrics
**C)** that having lyrics
**D)** that is lyrics

**Answer:** B
**Why:** Songs is plural → have.

### Question 3

Which revision most improves concision in [3] without losing meaning?

**A)** Limitations include a small sample and participants’ prior keyboard familiarity.
**B)** Limitations include a small sample and the fact that all participants were already familiar with keyboards in a way that is familiar.
**C)** There are limitations.
**D)** Delete limitations entirely.

**Answer:** A
**Why:** A removes filler while keeping both limitations.

### Question 4

Sentence [1] is effective primarily because it

**A)** states method details: sample size, task, and conditions.
**B)** tells a joke about music.
**C)** omits what was tested.
**D)** uses a comma splice on purpose.

**Answer:** A
**Why:** Abstracts need clear methods; [1] supplies them.

### Question 5

Which transition best introduces [4] as a next step?

**A)** Building on this,
**B)** In contrast to gravity,
**C)** Meanwhile in unrelated news,
**D)** Nevertheless about shoes,

**Answer:** A
**Why:** Building on this signals future-work continuation.

### Question 6

Which title is most precise for the project?

**A)** Music Tempo and Typing Speed: Error Rates under Three Conditions
**B)** Music Is Cool
**C)** Typing
**D)** Science Fair

**Answer:** A
**Why:** A names variables and outcome focus precisely.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Editing Passage Pack 10: Community Theater Budget Note',
        'content': """# SAT Grammar · Editing Passage Pack 10
**Passage title:** Community Theater Budget Note

## Passage

Ticket sales covered costumes but not the lighting rental. [1] A local hardware store donated paint brushes, rollers, and lumber that were unused. [2] The director asks that cast members arrive early, and that phones are silenced backstage. [3] Because rain canceled outdoor rehearsal we moved into the cafeteria. [4] Everyone agree that the matinee audience was the most responsive of the weekend.

## Questions

### Question 1

Which choice best corrects agreement in sentence [4]?

**A)** NO CHANGE (agree)
**B)** agrees
**C)** agreeing
**D)** have agree

**Answer:** B
**Why:** Everyone is singular → agrees.

### Question 2

Which boundary fix is best for sentence [3]?

**A)** Because rain canceled outdoor rehearsal, we moved into the cafeteria.
**B)** NO CHANGE
**C)** Because rain canceled outdoor rehearsal; we moved into the cafeteria.
**D)** Because rain canceled outdoor rehearsal: we moved into the cafeteria.

**Answer:** A
**Why:** Introductory Because-clause needs a comma before the main clause.

### Question 3

Which choice best preserves parallel that-clauses in [2]?

**A)** arrive early, and that phones be silenced backstage
**B)** arrive early, and phones silencing
**C)** to arrive early, silencing phones is
**D)** arriving early and phones

**Answer:** A
**Why:** After asks that, parallel subjunctive forms (arrive / be silenced) are conventional.

### Question 4

In sentence [1], that were unused most logically modifies

**A)** the donated materials left unused by the store.
**B)** ticket sales.
**C)** the matinee audience.
**D)** phones backstage.

**Answer:** A
**Why:** The relative clause attaches to the donated materials.

### Question 5

Which sentence best states a fundraising purpose for the note?

**A)** We still need donations to cover the lighting rental gap after costumes were paid.
**B)** Rain exists as weather.
**C)** Matinees happen before evenings.
**D)** Hardware stores sell brushes.

**Answer:** A
**Why:** A connects the budget gap to a clear ask.

### Question 6

Which choice is the most precise meaning of responsive in [4]’s context?

**A)** Engaged and reactive to the performance
**B)** Asleep
**C)** Absent
**D)** Unrelated to theater

**Answer:** A
**Why:** Responsive audiences react/engage during a show.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
]

SAT_ENGLISH_EXPRESSION: list[dict[str, str]] = [
    {
        'title': 'SAT English · Expression of Ideas Pack 01: Trail Sign Redesign',
        'content': """# SAT English · Expression of Ideas Pack 01
**Scenario:** Trail Sign Redesign
**Skill emphasis:** transitions

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Trail Sign Redesign. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the trail sign redesign confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in Trail Sign Redesign?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 02: Food Pantry Newsletter',
        'content': """# SAT English · Expression of Ideas Pack 02
**Scenario:** Food Pantry Newsletter
**Skill emphasis:** rhetorical synthesis

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Food Pantry Newsletter. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the food pantry newsletter confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in Food Pantry Newsletter?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 03: Robotics Club Recruiting Email',
        'content': """# SAT English · Expression of Ideas Pack 03
**Scenario:** Robotics Club Recruiting Email
**Skill emphasis:** concision

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Robotics Club Recruiting Email. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the robotics club recruiting email confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in Robotics Club Recruiting Email?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 04: City Tree Inventory Report',
        'content': """# SAT English · Expression of Ideas Pack 04
**Scenario:** City Tree Inventory Report
**Skill emphasis:** transitions

## Stimulus notes (use as directed in each question)

A student is drafting materials related to City Tree Inventory Report. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the city tree inventory report confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in City Tree Inventory Report?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 05: Student Art Show Catalog Note',
        'content': """# SAT English · Expression of Ideas Pack 05
**Scenario:** Student Art Show Catalog Note
**Skill emphasis:** effective language use

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Student Art Show Catalog Note. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the student art show catalog note confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in Student Art Show Catalog Note?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 06: Blood Drive Day-Of Script',
        'content': """# SAT English · Expression of Ideas Pack 06
**Scenario:** Blood Drive Day-Of Script
**Skill emphasis:** rhetorical synthesis

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Blood Drive Day-Of Script. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the blood drive day-of script confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in Blood Drive Day-Of Script?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 07: Open House Agenda Intro',
        'content': """# SAT English · Expression of Ideas Pack 07
**Scenario:** Open House Agenda Intro
**Skill emphasis:** logical sequence

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Open House Agenda Intro. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the open house agenda intro confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in Open House Agenda Intro?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 08: Climate Club Petition Preamble',
        'content': """# SAT English · Expression of Ideas Pack 08
**Scenario:** Climate Club Petition Preamble
**Skill emphasis:** transitions

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Climate Club Petition Preamble. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the climate club petition preamble confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in Climate Club Petition Preamble?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 09: Library Display Caption Set',
        'content': """# SAT English · Expression of Ideas Pack 09
**Scenario:** Library Display Caption Set
**Skill emphasis:** concision

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Library Display Caption Set. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the library display caption set confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in Library Display Caption Set?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 10: Volunteer Fair Host Remarks',
        'content': """# SAT English · Expression of Ideas Pack 10
**Scenario:** Volunteer Fair Host Remarks
**Skill emphasis:** rhetorical synthesis

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Volunteer Fair Host Remarks. Some questions ask for the best transition, the most precise wording, or the note that best accomplishes a stated goal using provided bullets.

## Questions

### Question 1

Which transition best completes the sentence?

Early designs for the volunteer fair host remarks confused visitors. ____, the revised version uses fewer words and a clearer hierarchy of headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing designs to a clearer revision.

### Question 2

Which choice most effectively combines the sentences?

The committee reviewed three drafts. The committee selected the shortest one.

**A)** The committee reviewed three drafts, and the committee selected the shortest one after reviewing.
**B)** After reviewing three drafts, the committee selected the shortest one.
**C)** The committee reviewed three drafts; selecting the shortest one being the committee.
**D)** Reviewing three drafts the shortest one the committee selected.

**Answer:** B
**Why:** B is concise and clear without repetition or broken syntax.

### Question 3

A student wants to emphasize logistical readiness. Which sentence should be added?

**A)** Supplies were inventoried on Tuesday, and backups are stored in the labeled cabinet.
**B)** Many people have feelings about events in general.
**C)** The history of paper clips is surprisingly long.
**D)** Someone once saw a similar project in another town maybe.

**Answer:** A
**Why:** A alone gives concrete readiness details tied to logistics.

### Question 4

Rhetorical synthesis: A writer must satisfy all three notes—(1) thank volunteers, (2) state the Saturday start time of 9 a.m., (3) mention rain location: gym balcony. Which choice does so best?

**A)** Thanks to our volunteers: we start Saturday at 9 a.m., moving to the gym balcony if it rains.
**B)** Volunteers are great. Rain happens. Nine is a number.
**C)** Saturday may occur this week at some hour in some place.
**D)** The gym balcony has windows, and volunteers sometimes help.

**Answer:** A
**Why:** Only A hits thanks, 9 a.m. Saturday, and rain contingency location.

### Question 5

Which choice deletes unnecessary words without losing meaning?

**A)** Due to the fact that attendance rose, we extended hours.
**B)** Because attendance rose, we extended hours.
**C)** In light of the reality of the situation of attendance having risen, hours got extended by us.
**D)** Attendance rose; hours; extended; because.

**Answer:** B
**Why:** Because is concise; A/C are wordy; D is telegraphic and unclear.

### Question 6

Which concluding sentence best supports the purpose of persuading readers to participate in Volunteer Fair Host Remarks?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
]

SAT_ENGLISH_MIXED_TIMED: list[dict[str, str]] = [
    {
        'title': 'SAT English · Mixed R&W Timed Set 01: Quiet Cars on Regional Trains',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 01
**Theme:** Quiet Cars on Regional Trains

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for quiet cars on regional trains argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set 02: School Start Times and Adolescent Sleep',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 02
**Theme:** School Start Times and Adolescent Sleep

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for school start times and adolescent sleep argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set 03: Public Piano in the Transit Hub',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 03
**Theme:** Public Piano in the Transit Hub

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for public piano in the transit hub argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set 04: Refill Stations versus Bottled Water Sales',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 04
**Theme:** Refill Stations versus Bottled Water Sales

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for refill stations versus bottled water sales argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set 05: Caption Accuracy at Live Theater',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 05
**Theme:** Caption Accuracy at Live Theater

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for caption accuracy at live theater argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set 06: Student-Run Thrift Pop-Up',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 06
**Theme:** Student-Run Thrift Pop-Up

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for student-run thrift pop-up argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set 07: Neighborhood Tool Library Rules',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 07
**Theme:** Neighborhood Tool Library Rules

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for neighborhood tool library rules argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set 08: Indoor Recess Kits for Smoke Days',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 08
**Theme:** Indoor Recess Kits for Smoke Days

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for indoor recess kits for smoke days argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set 09: Multilingual Wayfinding in Clinics',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 09
**Theme:** Multilingual Wayfinding in Clinics

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for multilingual wayfinding in clinics argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set 10: Campus Lost-and-Found Transparency',
        'content': """# SAT English · Mixed Reading & Writing Timed Set 10
**Theme:** Campus Lost-and-Found Transparency

**Timing suggestion:** 10–12 minutes for all six items (Digital SAT pacing practice).

## Shared passage

Advocates for campus lost-and-found transparency argue that small design changes can improve daily experience without huge budgets. A six-week pilot gathered comment cards, ridership or attendance counts, and staff incident logs. Results were mixed: satisfaction rose among targeted users, yet a minority reported new frictions. Managers now must decide whether to expand, modify, or retire the pilot.

## Questions

### Question 1

Which choice best states the main purpose of the passage?

**A)** To narrate a fictional adventure unrelated to policy.
**B)** To summarize a pilot’s mixed results and the decision managers face.
**C)** To provide a full legal code for transit agencies.
**D)** To argue that budgets never constrain design.

**Answer:** B
**Why:** The passage reports mixed pilot evidence and frames expand/modify/retire choices.

### Question 2

As used in the passage, "frictions" most nearly means

**A)** physical sandpaper grades.
**B)** minor conflicts or inconveniences.
**C)** musical dissonance only.
**D)** legal corporations.

**Answer:** B
**Why:** In context, frictions are new inconveniences reported by a minority of users.

### Question 3

Which choice completes the sentence conventionally?

Satisfaction rose among targeted users____ a minority reported new problems.

**A)** users, a
**B)** users; a
**C)** users a
**D)** users: and a

**Answer:** B
**Why:** Semicolon joins two independent clauses; A is a comma splice.

### Question 4

Which transition best begins a sentence conceding a limitation before recommending modification?

**A)** Granted,
**B)** Likewise,
**C)** Namely,
**D)** Previously,

**Answer:** A
**Why:** Granted introduces concession before a turn to recommendations.

### Question 5

Rhetorical synthesis: Notes say (1) keep the feature on weekdays, (2) add clearer signage, (3) survey again in 30 days. Best sentence?

**A)** Keep weekday operation, install clearer signs, and resurvey in 30 days.
**B)** End the pilot immediately without communication.
**C)** Survey only, ignoring signage and schedule.
**D)** Add signage but remove all weekday service forever.

**Answer:** A
**Why:** A alone satisfies all three notes.

### Question 6

Which revision best maintains parallelism?

Managers may expand the pilot, modify its rules, or ____.

**A)** retirement of it
**B)** retire it
**C)** it is retired
**D)** to retiring

**Answer:** B
**Why:** Expand / modify / retire keeps parallel verb forms.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
]

SAT_ENGLISH_STRATEGY_GUIDES: list[dict[str, str]] = [
    {
        'title': 'SAT English · Strategy Guide 01: Craft and Structure Domain Guide',
        'content': """# SAT English · Strategy Guide: Craft and Structure

## What this domain tests
- Words in Context: meaning as used in a short passage, not the rarest dictionary sense.
- Text Structure and Purpose: why a sentence or paragraph is there (illustrate, qualify, conclude, etc.).
- Cross-Text Connections: how two short texts agree, disagree, or diverge in emphasis.

## High-yield habits
1. **Read the question stem before deep re-reading** when the item points to a line or word.
2. **For vocab**, substitute each choice into the sentence; eliminate tones that break logic.
3. **For purpose**, name the job of the sentence in one verb (define, concede, exemplify).
4. **For paired texts**, write a 5-word gist for A and for B, then compare gists.

## Mini drill
Passage: "The chemist’s notebook looks chaotic, yet every stain maps to a dated trial."
Question focus: purpose of "yet every stain maps to a dated trial."
Best purpose label: **qualify the appearance of chaos by revealing underlying order.**

## Answer-key style check
**Q:** In context, chaotic most nearly means?  
**A:** Disorganized in appearance.  
**Why:** Contrast with mapped stains shows surface mess, not randomness of method.


## Self-check (2 items)

### Question 1
Which habit best fits the Craft and Structure domain as described above?
**A)** Ignore the passage and rely only on prior class knowledge  
**B)** Use domain-specific habits listed in this guide (evidence bounds, clause checks, transition logic, etc.)  
**C)** Always pick the longest answer  
**D)** Never read charts  

**Answer:** B  
**Why:** The guide’s habits are domain-aligned; A/C/D are anti-strategies.

### Question 2
True or false framing: Extreme absolute choices are often traps on SAT R&W.
**A)** True — prefer precise, passage-bounded options  
**B)** False — always/never answers are usually safest  
**C)** Only true for math modules  
**D)** Only true for essay tasks (not on Digital SAT R&W)  

**Answer:** A  
**Why:** Absolute language frequently overreaches what short stimuli support.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Strategy Guide 02: Information and Ideas Domain Guide',
        'content': """# SAT English · Strategy Guide: Information and Ideas

## What this domain tests
- Central Ideas and Details
- Command of Evidence (textual and quantitative)
- Inferences that stay inside the passage’s bounds

## High-yield habits
1. **Main idea ≠ hottest detail.** Prefer statements that cover the whole stimulus.
2. **Evidence questions** reward the choice that actually proves the prior claim, not a related fact.
3. **Charts:** read titles, units, and extremes before answering.
4. **Inference:** must be true if the passage is true—avoid world-knowledge leaps.

## Mini drill
If a table shows Site B with the highest nighttime temperature, a question asking where cooling is weakest should point to **Site B**, not a site praised in prose alone.

## Pitfalls
- Extreme words (always, never) in choices
- True statements from the wrong paragraph
- Reverse cause/effect


## Self-check (2 items)

### Question 1
Which habit best fits the Information and Ideas domain as described above?
**A)** Ignore the passage and rely only on prior class knowledge  
**B)** Use domain-specific habits listed in this guide (evidence bounds, clause checks, transition logic, etc.)  
**C)** Always pick the longest answer  
**D)** Never read charts  

**Answer:** B  
**Why:** The guide’s habits are domain-aligned; A/C/D are anti-strategies.

### Question 2
True or false framing: Extreme absolute choices are often traps on SAT R&W.
**A)** True — prefer precise, passage-bounded options  
**B)** False — always/never answers are usually safest  
**C)** Only true for math modules  
**D)** Only true for essay tasks (not on Digital SAT R&W)  

**Answer:** A  
**Why:** Absolute language frequently overreaches what short stimuli support.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Strategy Guide 03: Standard English Conventions Domain Guide',
        'content': """# SAT English · Strategy Guide: Standard English Conventions

## What this domain tests
- Boundaries: fragments, comma splices, fused sentences
- Form, Structure, and Sense: agreement, tense, pronouns, modifiers, parallelism
- Punctuation: commas, semicolons, colons, dashes, apostrophes

## High-yield habits
1. **Find independent clauses** first; punctuation follows clause count.
2. **Subject ≠ nearest noun**—strip prepositional phrases when checking agreement.
3. **Lists:** match form (all nouns or all verbs).
4. **Nonessential extras** need paired commas or dashes; essential that-clauses do not.

## Mini drill
"The results were clear, the team published." → comma splice → fix with period, semicolon, or conjunction.

## Timing tip
Conventions items are often faster than reading items—bank time, but still justify the rule.


## Self-check (2 items)

### Question 1
Which habit best fits the Standard English Conventions domain as described above?
**A)** Ignore the passage and rely only on prior class knowledge  
**B)** Use domain-specific habits listed in this guide (evidence bounds, clause checks, transition logic, etc.)  
**C)** Always pick the longest answer  
**D)** Never read charts  

**Answer:** B  
**Why:** The guide’s habits are domain-aligned; A/C/D are anti-strategies.

### Question 2
True or false framing: Extreme absolute choices are often traps on SAT R&W.
**A)** True — prefer precise, passage-bounded options  
**B)** False — always/never answers are usually safest  
**C)** Only true for math modules  
**D)** Only true for essay tasks (not on Digital SAT R&W)  

**Answer:** A  
**Why:** Absolute language frequently overreaches what short stimuli support.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Strategy Guide 04: Expression of Ideas Domain Guide',
        'content': """# SAT English · Strategy Guide: Expression of Ideas

## What this domain tests
- Transitions
- Rhetorical synthesis (bullet notes → one sentence meeting all constraints)
- Concision / precision / logical order

## High-yield habits
1. **Transitions:** label the relationship (contrast, cause, example, sequence) before looking at choices.
2. **Synthesis:** checklist the notes; eliminate any sentence missing a constraint.
3. **Concision:** shorter only if meaning stays intact—do not delete necessary content.
4. **Order:** each sentence should earn its place; cut repeated ideas.

## Mini drill
Notes: thank donors; event at 5 p.m.; free admission.  
Winning sentence must include **all three**—eloquence without a constraint still fails.


## Self-check (2 items)

### Question 1
Which habit best fits the Expression of Ideas domain as described above?
**A)** Ignore the passage and rely only on prior class knowledge  
**B)** Use domain-specific habits listed in this guide (evidence bounds, clause checks, transition logic, etc.)  
**C)** Always pick the longest answer  
**D)** Never read charts  

**Answer:** B  
**Why:** The guide’s habits are domain-aligned; A/C/D are anti-strategies.

### Question 2
True or false framing: Extreme absolute choices are often traps on SAT R&W.
**A)** True — prefer precise, passage-bounded options  
**B)** False — always/never answers are usually safest  
**C)** Only true for math modules  
**D)** Only true for essay tasks (not on Digital SAT R&W)  

**Answer:** A  
**Why:** Absolute language frequently overreaches what short stimuli support.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Strategy Guide 05: Digital SAT R&W Full-Test Game Plan',
        'content': """# SAT English · Strategy Guide: Full Reading & Writing Game Plan

## Module mindset
Digital SAT Reading and Writing mixes domains in two adaptive modules. Expect short stimuli and rapid shifts among vocab, evidence, grammar, and synthesis.

## Target pacing
- Rough average: well under 1.5 minutes per question
- Skip and flag hard inference/cross-text items; return after quick conventions wins

## Domain mix reminder
| Domain | Site space practice |
| Craft & Structure / Info & Ideas (reading) | sat-reading |
| Standard English Conventions | sat-grammar |
| Expression of Ideas + mixed sets | sat-english |

## Before test day
1. Drill **wrong-answer patterns** (extreme, out of scope, opposite).
2. Practice **rhetorical synthesis** with a literal checklist.
3. Review **boundary punctuation** until comma splices feel obvious.
4. Read widely in short nonfiction: science news, museum notes, civic explainers.

## After each practice set
Log: question type · trap chosen · rule or evidence missed · 1 fix for next set.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
]

SAT_RW_DOCS: list[dict[str, str]] = (
    SAT_READING_INFO_IDEAS
    + SAT_READING_CRAFT_STRUCTURE
    + SAT_READING_CROSS_TEXT
    + SAT_GRAMMAR_CONVENTIONS
    + SAT_GRAMMAR_EDITING
    + SAT_ENGLISH_EXPRESSION
    + SAT_ENGLISH_MIXED_TIMED
    + SAT_ENGLISH_STRATEGY_GUIDES
)
