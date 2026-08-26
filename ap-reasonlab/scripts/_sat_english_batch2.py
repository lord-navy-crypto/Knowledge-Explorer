"""Original Digital SAT Reading and Writing practice corpus — Batch 2.

College Board Digital SAT R&W domains mapped to site spaces:
  - sat-reading  (category "SAT Reading"): Information and Ideas + Craft and Structure
  - sat-grammar  (category "SAT Grammar"): Standard English Conventions
  - sat-english  (category "SAT English"): Expression of Ideas + mixed R&W strategy practice

Pack numbering starts at 31+ to avoid collisions with Batch 1 (Packs 01–15-ish).
Original practice aligned to Digital SAT domains. Not College Board exam verbatim.
"""

from __future__ import annotations

SAT_RW_BATCH2: list[dict[str, str]] = [
    {
        'title': 'SAT Reading · Info & Ideas Pack 31: Kelp Forest Rebound After Sea Otter Recovery',
        'content': """# SAT Reading · Information and Ideas Pack 31
**Focus:** Kelp Forest Rebound After Sea Otter Recovery

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

Along a Pacific cove system, dive teams logged denser kelp canopies within five years after sea otter counts rose. Otters prey on sea urchins that otherwise graze kelp holdfasts to bare rock. Surveys found urchin density about 60 percent lower in otter-rich coves than in otter-scarce controls matched for depth.

## Passage 2

Recovery was uneven. Wave-exposed headlands stayed patchy, implying that surge and sediment scour can limit regrowth even when herbivores decline. Managers therefore call otter recovery necessary but not sufficient for canopy restoration.

## Passage 3

A fisheries board feared denser kelp would tangle crab pots. A one-season gear trial with taller floats cut entanglement reports by half without reducing catch per trap.

## Passage 4

1930s photographs show continuous kelp where barren grounds later appeared. Ecologists treat the images as baselines yet warn that warmer water may have shifted which species can thrive, so nostalgia alone cannot set targets.

## Passage 5

Kayakers logged canopy with phone apps calibrated to dive transects. Agreement was high in calm weather but fell when glare hid subsurface fronds, so analysts weight observations by conditions.

## Passage 6

Hotels near recovering coves reported longer summer stays, but a new coastal road opened the same year, leaving tourism causality debated.

## Questions

### Question 1

Which finding most directly supports the claim that otters aid kelp recovery?

**A)** Hotels reported longer summer stays.
**B)** Urchin density was about 60 percent lower in otter-rich coves than in controls.
**C)** Headlands remained patchy.
**D)** Phone apps failed in glare.

**Answer:** B
**Why:** Lower urchin density where otters are present is mechanistic evidence for reduced grazing.

### Question 2

Managers treat otter recovery as necessary but not sufficient because

**A)** crab pots always tangle in kelp.
**B)** wave exposure and scour still limit regrowth at some sites.
**C)** historical photos are useless.
**D)** tourism revenue proved a single cause.

**Answer:** B
**Why:** Hydrodynamics still constrain canopy even when herbivores decline.

### Question 3

The gear trial’s main practical result was that

**A)** catch per trap fell sharply.
**B)** taller floats halved entanglement reports without cutting catch per trap.
**C)** otters avoided all crab gear.
**D)** dive surveys became unnecessary.

**Answer:** B
**Why:** The pilot reports fewer entanglements with catch maintained.

### Question 4

Why caution against using 1930s photographs alone as restoration targets?

**A)** The photos show only barren ground.
**B)** Water temperatures may have changed which species can thrive.
**C)** Kayakers refuse baselines.
**D)** Otters were absent in the 1930s.

**Answer:** B
**Why:** Shifting temperatures may make past species mixes unrealistic goals.

### Question 5

Community canopy logs were least reliable when

**A)** dive transects ran the same day.
**B)** surface glare hid subsurface fronds.
**C)** otter density was high.
**D)** crab pots used taller floats.

**Answer:** B
**Why:** Agreement fell under glare conditions.

### Question 6

Which claim about tourism is best supported?

**A)** Restored kelp alone caused longer hotel stays.
**B)** Hotels near recovering coves reported longer stays, but road access also improved.
**C)** Tourism fell wherever kelp returned.
**D)** Economists proved zero tourism effect.

**Answer:** B
**Why:** The text notes longer stays and a competing explanation (the new road).

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 32: Municipal Compost Contaminants and Soil Tests',
        'content': """# SAT Reading · Information and Ideas Pack 32
**Focus:** Municipal Compost Contaminants and Soil Tests

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

After expanding curbside compost pickup, a city found elevated plastic fragments in finished mulch. Lab sieving showed 1.2 percent contamination by weight at the worst depot, above the state’s 0.5 percent threshold for agricultural use.

## Passage 2

Mailing illustrated sorting guides cut household contamination about 40 percent in three months. Depots serving apartments improved less, partly because shared bins dilute individual accountability.

## Passage 3

Growers who had used municipal compost temporarily switched to commercial amendments. Extension agents arranged discounted soil tests so farms could verify contaminant levels before resuming use.

## Passage 4

Critics preferred optical sorters over education. A cost study found sorters reduced fragments but raised processing fees by eighteen dollars per ton.

## Passage 5

Historians noted wartime scrap drives also struggled with mixed materials, framing contamination as a recurring logistics challenge rather than a uniquely modern failure.

## Passage 6

Council minutes recorded a compromise: keep curbside collection, tighten bag rules, and reserve agricultural-grade compost for verified low-contaminant batches.

## Questions

### Question 1

What was the state’s agricultural-use threshold for plastic fragments?

**A)** 1.2 percent by weight
**B)** 0.5 percent by weight
**C)** 40 percent by weight
**D)** Eighteen dollars per ton

**Answer:** B
**Why:** The worst depot at 1.2% exceeded the 0.5% threshold.

### Question 2

Which setting improved least after the sorting-guide campaign?

**A)** Single-family households receiving mail guides
**B)** Depots serving apartment buildings
**C)** County extension offices
**D)** Commercial amendment vendors

**Answer:** B
**Why:** Apartment-serving depots improved less due to shared bins.

### Question 3

Farmers paused municipal compost mainly because

**A)** fees rose overnight by eighteen dollars.
**B)** contamination raised soil-quality concerns.
**C)** wartime scrap drives resumed.
**D)** optical sorters banned farm deliveries.

**Answer:** B
**Why:** Elevated plastic in mulch prompted growers to pause use.

### Question 4

The cost study implies optical sorters

**A)** eliminate any need for education.
**B)** reduce fragments while increasing processing fees.
**C)** are cheaper than behavior campaigns.
**D)** raise contamination rates.

**Answer:** B
**Why:** Sorters cut fragments but added $18/ton in fees.

### Question 5

The historian comparison mainly suggests that

**A)** contamination challenges are not unique to modern composting.
**B)** wartime scrap contained no mixed materials.
**C)** education campaigns always fail.
**D)** council minutes cannot be trusted.

**Answer:** A
**Why:** Past scrap drives also faced mixed-material problems.

### Question 6

The council compromise kept curbside collection while

**A)** ending all agricultural sales forever.
**B)** tightening bag rules and reserving farm-grade batches for verified low contamination.
**C)** banning apartment bins.
**D)** sending all organics to landfill only.

**Answer:** B
**Why:** That pairing is the recorded compromise.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 33: Transit Signal Priority and Bus Reliability',
        'content': """# SAT Reading · Information and Ideas Pack 33
**Focus:** Transit Signal Priority and Bus Reliability

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

A transit agency activated signal priority for late buses on three corridors. Peak-hour on-time arrivals within a five-minute window rose from 68 percent to 81 percent during the pilot.

## Passage 2

Drivers complained that green extensions lengthened car waits. Models estimated twelve extra seconds per car at the busiest intersection, below the agency’s thirty-second impact threshold.

## Passage 3

Ridership on priority routes rose 6 percent, mostly in morning commute trips. Surveyed riders most often credited fewer missed transfers.

## Passage 4

Opponents preferred dedicated bus lanes, saying software cannot fix buses stuck behind turning cars. Planners answered that curb redesigns take years while signal software can ship in months.

## Passage 5

An audit found gains shrank when operators disabled priority during special events, showing reliability depends on consistent activation.

## Passage 6

Equity analysts mapped riders: early-shift service workers gained more reliable arrivals than midday shoppers, shaping which routes kept permanent priority.

## Questions

### Question 1

Peak-hour on-time performance rose to

**A)** 68 percent
**B)** 81 percent
**C)** 6 percent
**D)** twelve seconds

**Answer:** B
**Why:** On-time arrivals rose from 68% to 81%.

### Question 2

Average added car delay at the busiest intersection was

**A)** thirty seconds
**B)** twelve seconds
**C)** five minutes
**D)** six percent

**Answer:** B
**Why:** Models estimated twelve seconds—under the thirty-second threshold.

### Question 3

Riders most often credited increased use to

**A)** cheaper fares
**B)** fewer missed transfers
**C)** dedicated lanes already built
**D)** special-event priority

**Answer:** B
**Why:** Surveys cited fewer missed transfers.

### Question 4

Planners favored signal priority over lanes mainly because

**A)** lanes never help reliability.
**B)** software can deploy faster than curb redesigns.
**C)** cars face zero delay.
**D)** equity maps banned lanes.

**Answer:** B
**Why:** They contrast months for software with years for curb work.

### Question 5

The audit’s key lesson is that

**A)** installation alone guarantees lasting gains.
**B)** consistent activation matters for sustained reliability.
**C)** special events always improve on-time rates.
**D)** midday shoppers gained the most.

**Answer:** B
**Why:** Benefits shrank when priority was disabled.

### Question 6

Equity mapping influenced permanent priority by showing

**A)** only tourists rode the corridors.
**B)** early-shift service workers gained more reliability than midday shoppers.
**C)** cars outnumbered buses two to one.
**D)** transfers never mattered.

**Answer:** B
**Why:** That rider profile shaped route selection.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 34: Archival Oral Histories and Flood Memory',
        'content': """# SAT Reading · Information and Ideas Pack 34
**Focus:** Archival Oral Histories and Flood Memory

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

After a record crest, a historical society recorded oral histories from residents who remembered earlier floods. Narrators described water marks on barns that no longer stand, supplying elevations gauges of those decades never logged.

## Passage 2

Engineers cross-checked stories with sediment cores. In several cases remembered crest heights matched core evidence within half a meter, strengthening confidence in community memory for hazard planning.

## Passage 3

Skeptics warned trauma can inflate recalled heights. Interview protocols therefore asked for landmarks—windowsills, fence posts—rather than numeric guesses alone.

## Passage 4

A digital map layered oral points over modern floodplain models. Alignments became outreach priorities; mismatches triggered more field surveys.

## Passage 5

Younger residents who had never seen a major flood rated risk lower until they heard elders describe attic rescues; risk perception rose after listening sessions.

## Passage 6

Grant reviewers who once dismissed oral archives as soft evidence funded a second season after sediment corroboration and outreach results.

## Questions

### Question 1

Oral histories were especially useful because they

**A)** replaced all modern gauges.
**B)** provided elevations where historical gauges were missing.
**C)** proved trauma always inflates heights.
**D)** banned numeric estimates.

**Answer:** B
**Why:** Barn water marks supplied elevations gauges never logged.

### Question 2

Engineers gained confidence when

**A)** stories contradicted cores completely.
**B)** remembered crests matched sediment evidence within half a meter.
**C)** barns were rebuilt taller.
**D)** grants were rejected.

**Answer:** B
**Why:** Close agreement with cores strengthened confidence.

### Question 3

Interview protocols preferred landmarks over bare numbers to

**A)** entertain listeners.
**B)** reduce distortion from trauma-inflated numeric guesses.
**C)** avoid sediment coring.
**D)** shorten each interview to one minute.

**Answer:** B
**Why:** Landmarks anchor recall when trauma may inflate numbers.

### Question 4

Mismatches between oral points and models led to

**A)** deleting the digital map.
**B)** additional field surveys.
**C)** ending all outreach.
**D)** raising barns overnight.

**Answer:** B
**Why:** Mismatches triggered more field work.

### Question 5

Listening sessions most clearly changed

**A)** sediment core chemistry.
**B)** younger residents’ risk perception.
**C)** river crest physics.
**D)** grant application fonts.

**Answer:** B
**Why:** Younger residents rated risk higher after hearing elders.

### Question 6

What helped fund a second recording season?

**A)** Soft-evidence branding alone
**B)** Sediment corroboration plus outreach results
**C)** A ban on upstream towns
**D)** Removal of interview protocols

**Answer:** B
**Why:** Those outcomes persuaded reviewers.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 35: Night-Sky Ordinances and Migratory Birds',
        'content': """# SAT Reading · Information and Ideas Pack 35
**Focus:** Night-Sky Ordinances and Migratory Birds

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

A coastal county dimmed nonessential outdoor lighting during peak songbird migration after radar showed dense nocturnal flight paths. Window-strike counts in a volunteer network fell 22 percent the first season versus the prior three-year average.

## Passage 2

Business owners feared darker storefronts would cut evening sales. Paired receipt comparisons found no significant decline on ordinance nights versus matched nights the year before.

## Passage 3

Astronomers liked clearer skies, but biologists emphasized bird safety as the primary legal rationale. Dual benefits widened the hearing coalition.

## Passage 4

Residential areas dimmed quickly; some warehouses kept bright floods. Site visits and free shield kits raised warehouse compliance from 40 to 78 percent.

## Passage 5

Critics blamed weather for fewer strikes. Analysts controlled for wind and cloud cover; the lighting association remained significant.

## Passage 6

Neighboring counties without ordinances saw stable strike rates, a rough spatial control that strengthened causal reading of the coastal drop.

## Questions

### Question 1

Window-strike counts fell by about

**A)** 40 percent
**B)** 22 percent
**C)** 78 percent
**D)** three years

**Answer:** B
**Why:** Strikes fell 22% versus the prior three-year average.

### Question 2

Storefront sales on ordinance nights

**A)** collapsed by half.
**B)** showed no significant decline versus matched prior-year nights.
**C)** rose only for astronomers.
**D)** were not measured.

**Answer:** B
**Why:** Paired receipt comparison found no significant decline.

### Question 3

Biologists’ primary legal rationale was

**A)** tourism photography
**B)** bird safety during migration
**C)** warehouse aesthetics
**D)** cloud-cover research

**Answer:** B
**Why:** Bird safety was emphasized as the main rationale.

### Question 4

Warehouse compliance improved after

**A)** banning all security lights permanently.
**B)** targeted visits and free shield kits.
**C)** ending residential dimming.
**D)** ignoring radar.

**Answer:** B
**Why:** Those interventions raised compliance from 40% to 78%.

### Question 5

Analysts addressed the weather critique by

**A)** ignoring wind.
**B)** controlling for wind and cloud cover.
**C)** studying only sunny days.
**D)** moving radar inland.

**Answer:** B
**Why:** Controls left the lighting association significant.

### Question 6

Neighboring counties mainly served as

**A)** warehouse relocation sites.
**B)** a spatial control with stable strike rates.
**C)** proof ordinances always fail.
**D)** sources of shield kits.

**Answer:** B
**Why:** Stable rates elsewhere support interpreting the drop as local.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 36: Public Market Vendor Lotteries and Fairness',
        'content': """# SAT Reading · Information and Ideas Pack 36
**Focus:** Public Market Vendor Lotteries and Fairness

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

A city redesigned farmers-market stall assignment after longtime vendors locked the best corners. A seasonal lottery reserved a newcomer share while keeping some slots for vendors with multi-year food-safety compliance records.

## Passage 2

Average wait for a first stall fell from fourteen months to five. Customer surveys noted slightly higher produce variety, though some legacy vendors lost visibility.

## Passage 3

Vendors facing uncertain renewal spent about 12 percent less on signage—an investment trade-off managers accepted for broader access.

## Passage 4

A hybrid later let high-scoring vendors lock one stall and still lottery for a second. Newer-farm participation rose another 9 percent.

## Passage 5

Op-ed critics said lotteries disrespect craft. Staff replied that compliance scores still reward care while chance prevents exclusive capture of foot traffic.

## Passage 6

Total market revenue held steady; gains among new vendors roughly offset losses among some established ones.

## Questions

### Question 1

First-stall wait time fell to about

**A)** fourteen months
**B)** five months
**C)** twelve percent
**D)** nine percent

**Answer:** B
**Why:** Wait fell from fourteen months to five.

### Question 2

Uncertain renewal mainly reduced spending on

**A)** food-safety training
**B)** signage
**C)** lottery tickets
**D)** customer surveys

**Answer:** B
**Why:** Signage investment fell about 12%.

### Question 3

The hybrid rule’s notable effect was

**A)** ending all lotteries.
**B)** raising newer-farm participation another 9 percent.
**C)** eliminating compliance scores.
**D)** shrinking total revenue sharply.

**Answer:** B
**Why:** Participation among newer farms rose another 9%.

### Question 4

Staff’s reply to craft-skill critics emphasizes that

**A)** skill no longer matters.
**B)** compliance scores still reward care while lottery limits location capture.
**C)** foot traffic is irrelevant.
**D)** only newcomers may sell.

**Answer:** B
**Why:** That dual point is their fairness argument.

### Question 5

Total revenue evidence best supports

**A)** overall market collapse.
**B)** redistribution across vendors with steady totals.
**C)** proof that signage spending rose.
**D)** a ban on legacy vendors.

**Answer:** B
**Why:** Gains and losses offset; totals held steady.

### Question 6

Corner-spot dominance prompted

**A)** ending the market.
**B)** redesigning assignment with a lottery share for newcomers.
**C)** removing food-safety rules.
**D)** raising waits on purpose.

**Answer:** B
**Why:** The redesign targeted exclusive capture of prime spots.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 37: Glacier Meltwater Timing and Downstream Farms',
        'content': """# SAT Reading · Information and Ideas Pack 37
**Focus:** Glacier Meltwater Timing and Downstream Farms

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

Hydrologists found peak glacial melt arriving nearly three weeks earlier than in the 1980s. Orchards once watered by late-summer flows faced dry August ditches unless they stored spring runoff.

## Passage 2

A cooperative built lined reservoirs timed to the earlier peak. Users kept yields within 5 percent of historical averages; farms without storage saw 18 percent declines in a drought year.

## Passage 3

Some growers proposed cloud seeding. Regional scientists cited limited evidence for reliable local effects and urged storage and crop-timing changes instead.

## Passage 4

Indigenous water stewards noted earlier peaks also compress fish spawning windows, so the cooperative dashboard tracked ecological as well as agricultural metrics.

## Passage 5

Insurers raised premiums for farms lacking storage plans. Lenders began requesting melt-timing risk statements before equipment loans.

## Passage 6

A classroom unit used local hydrographs so students could see the three-week shift tied to community livelihoods, not only global averages.

## Questions

### Question 1

Peak meltwater now arrives roughly

**A)** three weeks earlier than in the 1980s.
**B)** three weeks later than in the 1980s.
**C)** unchanged since the 1980s.
**D)** only in August.

**Answer:** A
**Why:** The text states nearly three weeks earlier.

### Question 2

In the drought year, orchards without storage saw declines of about

**A)** 5 percent
**B)** 18 percent
**C)** three weeks
**D)** zero

**Answer:** B
**Why:** Non-storage orchards fell 18%; storage users stayed within 5%.

### Question 3

Scientists’ stance on cloud seeding was that

**A)** it reliably fixes local melt timing.
**B)** evidence for reliable local effects is limited.
**C)** it replaces all reservoirs.
**D)** lenders require seeding contracts.

**Answer:** B
**Why:** They urged storage and timing adjustments instead.

### Question 4

Ecological metrics entered planning because

**A)** fish spawning windows are also stressed by earlier peaks.
**B)** insurance banned agriculture.
**C)** hydrographs confused students.
**D)** yields never changed.

**Answer:** A
**Why:** Indigenous stewards highlighted fish timing stress.

### Question 5

Lenders newly requested

**A)** cloud-seeding certificates only.
**B)** melt-timing risk statements before equipment loans.
**C)** orchard abandonment.
**D)** deletion of hydrographs.

**Answer:** B
**Why:** Risk statements became a loan condition.

### Question 6

The classroom module’s distinctive approach was to

**A)** avoid local data.
**B)** use local hydrographs tying climate shifts to livelihoods.
**C)** teach only global averages.
**D)** ban community examples.

**Answer:** B
**Why:** Local hydrographs connected the shift to community life.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 38: Museum Provenance Research and Display Labels',
        'content': """# SAT Reading · Information and Ideas Pack 38
**Focus:** Museum Provenance Research and Display Labels

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

A university museum paused several ceramics while provenance staff traced ownership gaps between 1933 and 1945. Temporary labels read “research ongoing” rather than asserting unbroken title.

## Passage 2

Donor families split between praising transparency and fearing the pause implied wrongdoing without proof. Forums explained peer-institution standards.

## Passage 3

When files confirmed a licit mid-century dealer purchase, objects returned with labels summarizing the research path. Visitor trust scores rose afterward.

## Passage 4

One object with unresolved gaps stayed off view, with a digital dossier available on request. Scholars argued file access matters even when gallery display pauses.

## Passage 5

A methods seminar rebuilt timelines from auction catalogs and letters, practicing corroboration used in cultural-property research.

## Passage 6

Budget critics called provenance a luxury. The director replied that reputational risk from weak title claims can exceed research staffing costs.

## Questions

### Question 1

Temporary “research ongoing” labels primarily signal

**A)** proof of theft in every case.
**B)** that title claims are not overstated while gaps are studied.
**C)** permanent removal of all ceramics.
**D)** cancellation of donor forums.

**Answer:** B
**Why:** The museum avoids asserting unbroken title during research.

### Question 2

After a licit purchase was confirmed, surveys indicated

**A)** collapsing trust.
**B)** increased trust after transparency.
**C)** indifference to labels.
**D)** demand to hide research paths.

**Answer:** B
**Why:** Trust rose after the transparent process.

### Question 3

For the unresolved object, scholars valued

**A)** deleting all files.
**B)** digital dossier access even without gallery display.
**C)** immediate sale abroad.
**D)** anonymous ownership only.

**Answer:** B
**Why:** Access to files mattered despite paused display.

### Question 4

The methods seminar trained students mainly in

**A)** ignoring auction catalogs.
**B)** timeline corroboration from catalogs and letters.
**C)** writing fictional labels.
**D)** cutting research budgets.

**Answer:** B
**Why:** They rebuilt timelines practicing corroboration.

### Question 5

The director’s budget reply emphasizes

**A)** research staff are optional décor.
**B)** reputational risk from weak title can exceed research costs.
**C)** provenance never affects reputation.
**D)** donors forbid research.

**Answer:** B
**Why:** That cost–risk comparison is the reply.

### Question 6

Donor disagreement mainly concerned

**A)** whether ceramics were clay.
**B)** whether the pause unfairly implied wrongdoing versus praised transparency.
**C)** dossier fonts.
**D)** seminar caps.

**Answer:** B
**Why:** Families split between transparency praise and stigma concerns.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 39: Remote Work Hubs and Small-Town Retail',
        'content': """# SAT Reading · Information and Ideas Pack 39
**Focus:** Remote Work Hubs and Small-Town Retail

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

When a software firm opened a remote-work hub in a town of twelve thousand, weekday café receipts rose 30 percent. Hardware stores gained less, suggesting knowledge workers spent more on daily services than durables.

## Passage 2

Rents near the hub climbed 15 percent in eighteen months. Teachers and hospital staff reported longer commutes after being priced out of core blocks.

## Passage 3

Council debated a housing trust funded partly by a commercial fee on the hub. The firm offered voluntary contributions instead of a mandatory fee; talks continued.

## Passage 4

A midday shuttle from outlying neighborhoods drew highest ridership among service workers whose shifts aligned with hub office hours.

## Passage 5

Some residents liked walkable lunch crowds; others disliked parking spillover. Painted curb zones and time limits reduced complaints within two months.

## Passage 6

A regional economist warned hubs can reverse if hybrid policies change, so the comprehensive plan kept employer diversification as a resilience goal.

## Questions

### Question 1

Café receipts rose about

**A)** 15 percent
**B)** 30 percent
**C)** twelve thousand percent
**D)** two months

**Answer:** B
**Why:** Weekday café receipts rose 30%.

### Question 2

Who reported longer commutes after rent increases?

**A)** Only tourists
**B)** Teachers and hospital staff priced out of core blocks
**C)** Software executives alone
**D)** Curb painters

**Answer:** B
**Why:** Those workers were priced out of core housing.

### Question 3

The firm’s stance on the housing-trust fee was to

**A)** accept any mandatory fee immediately.
**B)** offer voluntary contributions instead of a mandatory fee.
**C)** leave town at once.
**D)** ban shuttles.

**Answer:** B
**Why:** Negotiations continued around voluntary versus mandatory support.

### Question 4

Midday shuttle ridership was highest among

**A)** weekend tourists only.
**B)** service workers whose shifts aligned with hub hours.
**C)** remote workers living on-site.
**D)** economists studying resilience.

**Answer:** B
**Why:** Service workers’ shifts matched office hours.

### Question 5

Parking complaints fell after

**A)** removing all curb rules.
**B)** painted curb zones and time limits.
**C)** closing cafés.
**D)** ending the hub.

**Answer:** B
**Why:** Those measures reduced complaints within two months.

### Question 6

The economist’s caution implies towns should

**A)** rely on a single hub forever.
**B)** diversify employers because hybrid policies can reverse hubs.
**C)** ignore comprehensive plans.
**D)** maximize parking spillover.

**Answer:** B
**Why:** Diversification is framed as resilience.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 40: Phonograph Digitization and Performance Practice',
        'content': """# SAT Reading · Information and Ideas Pack 40
**Focus:** Phonograph Digitization and Performance Practice

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

Musicologists digitizing early phonograph cylinders found tempo choices unlike later published editions. 1910s performers often used freer rubato than mid-century urtext culture encouraged.

## Passage 2

A conservatory seminar compared transfers with modern recordings. Students revised essays after hearing ornaments absent from their printed scores.

## Passage 3

Copyright issues delayed some online releases. The archive prioritized clear public-domain cylinders while negotiating licenses for others.

## Passage 4

Critics said surface noise makes cylinders unreliable. Engineers answered that multiple takes of the same piece show consistent tempo shapes beneath the noise.

## Passage 5

A community listening night paired cylinders with period-instrument demos. Attendance exceeded projections; surveys highlighted surprise at historical flexibility.

## Passage 6

Funders required open metadata. Shared matrix-number fields helped libraries cut duplicate digitization nationwide.

## Questions

### Question 1

Cylinder evidence mainly challenged assumptions about

**A)** public-domain law only.
**B)** historical tempo and rubato versus later editions.
**C)** survey forms.
**D)** matrix-number fonts.

**Answer:** B
**Why:** 1910s performances showed freer rubato than later norms.

### Question 2

Students revised essays after encountering

**A)** identical modern recordings only.
**B)** ornaments absent from their printed scores.
**C)** banned listening nights.
**D)** closed metadata.

**Answer:** B
**Why:** Transfers revealed ornaments missing from scores.

### Question 3

The archive’s release strategy prioritized

**A)** every cylinder at once regardless of rights.
**B)** clear public-domain cylinders while negotiating other licenses.
**C)** deleting noisy takes.
**D)** hiding matrix numbers.

**Answer:** B
**Why:** That triage managed copyright constraints.

### Question 4

Engineers answered the noise critique by noting

**A)** noise proves tempos random.
**B)** multiple takes show consistent tempo shapes beneath noise.
**C)** cylinders cannot be studied.
**D)** live demos replace transfers.

**Answer:** B
**Why:** Consistency across takes supports reliability.

### Question 5

Listening-night surveys emphasized surprise at

**A)** low attendance.
**B)** historical interpretive flexibility.
**C)** metadata standards.
**D)** urtext rules alone.

**Answer:** B
**Why:** Comments highlighted surprise at historical flexibility.

### Question 6

Shared matrix-number fields helped libraries

**A)** increase duplicate work.
**B)** reduce duplicate digitization effort.
**C)** ban open metadata.
**D)** end seminars.

**Answer:** B
**Why:** Aligned catalogs cut duplicated effort.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 41: Urban Beekeeping Caps and Allergy Clinics',
        'content': """# SAT Reading · Information and Ideas Pack 41
**Focus:** Urban Beekeeping Caps and Allergy Clinics

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

As rooftop hive density rose, an allergy clinic saw more patients describing new sting sensitization. Health staff proposed per-block hive caps; beekeepers argued citywide pollen, not hive count, drove many reactions.

## Passage 2

A joint map of hives versus clinic zip codes found weak correlation with nearby hives and a stronger link to high tree-pollen weeks.

## Passage 3

Beekeepers offered free sting first-aid workshops and clearer rooftop signs. Clinic staff supported education while still debating caps.

## Passage 4

Council capped hives in dense residential zones only, leaving industrial roofs uncapped where pedestrian exposure was lower.

## Passage 5

Insurers asked community gardens for updated liability certificates. Gardens documenting training saw fewer policy cancellations.

## Passage 6

Science writers urged messaging that distinguishes venom allergy from seasonal pollen allergy to avoid misplaced fear of bees.

## Questions

### Question 1

The joint study found stronger association with

**A)** exact adjacent hive counts.
**B)** high tree-pollen weeks.
**C)** industrial uncapped roofs only.
**D)** insurance certificates.

**Answer:** B
**Why:** Pollen weeks correlated more than nearby hive density.

### Question 2

Beekeepers’ main causal claim was that

**A)** hive caps always increase stings.
**B)** citywide pollen, not hive count, drove many reactions.
**C)** clinics invent sensitization.
**D)** signage causes allergies.

**Answer:** B
**Why:** They pointed to pollen rather than hive density.

### Question 3

Council’s policy distinction hinged on

**A)** banning all bees citywide.
**B)** capping dense residential zones while leaving lower-exposure industrial roofs uncapped.
**C)** closing allergy clinics.
**D)** ending workshops.

**Answer:** B
**Why:** That geographic split was adopted.

### Question 4

Gardens reduced insurance cancellations by

**A)** hiding hive locations.
**B)** documenting training and updating liability certificates.
**C)** increasing hive density only.
**D)** refusing education.

**Answer:** B
**Why:** Documented training correlated with fewer cancellations.

### Question 5

Science writers urged messaging that

**A)** equates all allergies with hive venom.
**B)** distinguishes venom allergy from seasonal pollen allergy.
**C)** bans public discussion.
**D)** ignores clinic data.

**Answer:** B
**Why:** Clear distinctions reduce misplaced fear.

### Question 6

Clinic staff’s stance on education was to

**A)** oppose workshops while debating caps.
**B)** support education even amid the cap debate.
**C)** cancel intake mapping.
**D)** require industrial caps first.

**Answer:** B
**Why:** They backed workshops regardless of the regulatory fight.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 42: Ship Ballast Water Rules and Invasive Mussels',
        'content': """# SAT Reading · Information and Ideas Pack 42
**Focus:** Ship Ballast Water Rules and Invasive Mussels

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

Mandatory ballast-water exchange farther offshore coincided with fewer new zebra-mussel detections at inland ports the next decade. Causation stayed debated because hull-fouling rules tightened in the same years.

## Passage 2

Port biologists sampled eDNA in docking basins. Mussel signals fell after exchange rules, including at docks with little hull-cleaning traffic—a pattern tentatively favoring the ballast explanation.

## Passage 3

Shipping firms cited fuel costs of longer exchange routes. Regulators allowed certified on-board treatment systems as an alternative compliance path.

## Passage 4

Recreational boaters still moved mussels between lakes on trailers. Hot-water wash stations at ramps addressed a pathway ship rules could not close.

## Passage 5

Economic models weighed treatment costs against avoided cleanup of clogged intakes; mid-range assumptions showed positive net public benefits.

## Passage 6

A retrospective paper urged humility: stacked policies mean crediting one rule alone overstates certainty.

## Questions

### Question 1

Why is causation still debated?

**A)** Mussel detections never fell.
**B)** Hull-fouling rules tightened in the same years as ballast exchange.
**C)** eDNA cannot be sampled.
**D)** Wash stations were banned.

**Answer:** B
**Why:** Concurrent hull rules confound simple attribution.

### Question 2

eDNA patterns favoring ballast included declines at docks with

**A)** maximum hull-cleaning traffic only.
**B)** little hull-cleaning traffic.
**C)** no exchange rules.
**D)** closed ports.

**Answer:** B
**Why:** Declines where hull cleaning was scarce tentatively point to ballast.

### Question 3

Firms could alternatively comply by

**A)** ignoring all rules.
**B)** using certified on-board treatment systems.
**C)** moving only recreational boats.
**D)** clogging intake pipes.

**Answer:** B
**Why:** Treatment systems became an allowed path.

### Question 4

Hot-water wash stations targeted

**A)** ocean ballast tanks exclusively.
**B)** recreational trailers moving mussels between lakes.
**C)** eDNA labs.
**D)** fuel subsidies.

**Answer:** B
**Why:** Boaters’ trailers were a separate pathway.

### Question 5

Economic models compared

**A)** only treatment costs with no benefits.
**B)** treatment costs against avoided cleanup of clogged intakes.
**C)** recreational fees alone.
**D)** eDNA patent royalties.

**Answer:** B
**Why:** Net benefits used those cost and avoided-damage terms.

### Question 6

The retrospective paper warns that

**A)** single-rule credit when policies stacked overstates certainty.
**B)** eDNA is always false.
**C)** models must ignore cleanup.
**D)** wash stations fail everywhere.

**Answer:** A
**Why:** Stacked policies complicate causal claims.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 43: Captioned Theater and Deaf Audience Retention',
        'content': """# SAT Reading · Information and Ideas Pack 43
**Focus:** Captioned Theater and Deaf Audience Retention

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

A regional theater added open captions on Fridays and tracked renewals among Deaf and hard-of-hearing patrons. Renewals in that group rose from 41 percent to 63 percent season over season.

## Passage 2

Some hearing patrons said caption screens distracted from lighting. A/B nights found no significant difference in overall satisfaction for hearing audiences.

## Passage 3

Actors slightly adjusted punch-line spacing so caption readers could catch jokes. Directors saved pacing notes for future captioned runs.

## Passage 4

Funders required demographic reporting; the renewal bump helped secure multi-year access funding.

## Passage 5

Early caption errors sparked social-media criticism. A two-person booth with live correction cut error reports by three-quarters.

## Passage 6

Neighboring companies copied the Friday model after shared data suggested access gains need not harm general audience metrics.

## Questions

### Question 1

Deaf and hard-of-hearing renewals rose to

**A)** 41 percent
**B)** 63 percent
**C)** three-quarters
**D)** Friday forever as a percent

**Answer:** B
**Why:** Renewals rose from 41% to 63%.

### Question 2

Hearing-audience satisfaction on captioned nights

**A)** collapsed.
**B)** showed no significant difference versus non-captioned nights.
**C)** was never measured.
**D)** required removing punch lines.

**Answer:** B
**Why:** A/B nights found no significant satisfaction gap.

### Question 3

Actors changed timing primarily to

**A)** shorten plays by half.
**B)** help caption readers catch jokes.
**C)** eliminate grants.
**D)** increase errors.

**Answer:** B
**Why:** Punch-line spacing aided caption readers.

### Question 4

Error reports fell after

**A)** ending captions.
**B)** adding a two-person booth with live correction.
**C)** banning social media.
**D)** removing lighting design.

**Answer:** B
**Why:** Live correction cut reports by three-quarters.

### Question 5

Shared data encouraged neighbors by suggesting

**A)** access gains must harm general metrics.
**B)** access improvements need not harm general audience metrics.
**C)** renewals always fall.
**D)** captions replace actors.

**Answer:** B
**Why:** That trade-off finding supported copying the model.

### Question 6

Funders cared about the renewal bump because

**A)** demographic reporting tied to multi-year access funding.
**B)** jokes became optional.
**C)** lighting design was banned.
**D)** A/B tests were forbidden.

**Answer:** A
**Why:** The bump helped secure access funding under reporting rules.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 44: Soil Lead Screening Near Older Schools',
        'content': """# SAT Reading · Information and Ideas Pack 44
**Focus:** Soil Lead Screening Near Older Schools

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

County workers screened playground soil at sites built before 1978 and found lead above action levels at four of seventeen schools. Temporary mulch caps and hand-washing stations went in within two weeks.

## Passage 2

Parents wanted full soil replacement. Estimates put replacement at about eight times the interim-cap budget, so phased replacement began at the two highest-read sites first.

## Passage 3

Blood-lead vans parked at affected schools. Elevated readings in children remained rare, yet clinicians stressed soil controls still matter for long-term exposure reduction.

## Passage 4

Facilities records showed one high-lead site once hosted painted bleachers demolished on-site—a plausible source for follow-up testing.

## Passage 5

Community meetings drew highest attendance with evening hours and translated materials plus plain-language risk charts.

## Passage 6

State auditors praised rapid interim controls and urged clearer public dashboards of lab results by site.

## Questions

### Question 1

How many screened sites exceeded action levels?

**A)** Seventeen
**B)** Four
**C)** Eight
**D)** Two

**Answer:** B
**Why:** Four of seventeen sites were above action levels.

### Question 2

Full replacement was phased because

**A)** mulch caps were illegal.
**B)** replacement cost about eight times the interim budget.
**C)** blood-lead vans failed.
**D)** auditors banned dashboards.

**Answer:** B
**Why:** Cost drove phased priority at the worst sites.

### Question 3

Clinicians’ message about rare elevated blood-lead readings was that

**A)** soil controls are pointless.
**B)** soil controls still matter for long-term exposure reduction.
**C)** vans should close.
**D)** bleachers must return.

**Answer:** B
**Why:** Rare elevations did not erase the case for soil controls.

### Question 4

A plausible lead source hypothesis involved

**A)** new plastic toys.
**B)** on-site demolition of painted bleachers decades earlier.
**C)** translated flyers.
**D)** evening meetings.

**Answer:** B
**Why:** Demolished painted bleachers were a hypothesized source.

### Question 5

Meeting attendance rose when organizers provided

**A)** morning-only English-only sessions.
**B)** evening hours and translated materials.
**C)** no risk charts.
**D)** closed dashboards.

**Answer:** B
**Why:** Those access features raised attendance.

### Question 6

Auditors’ dual message was to

**A)** slow interim controls and hide results.
**B)** praise rapid interim controls and urge clearer public lab dashboards.
**C)** ban mulch caps.
**D)** replace all seventeen sites overnight only.

**Answer:** B
**Why:** Speed praised; transparency urged.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 45: Podcast Citation Standards in High School Research',
        'content': """# SAT Reading · Information and Ideas Pack 45
**Focus:** Podcast Citation Standards in High School Research

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

A district librarian issued citation standards after students cited news podcasts in history papers. The guide required host, episode title, publisher, date, and a timestamp for quoted claims.

## Passage 2

Teachers saw fewer unverifiable quotes once timestamps were required. Students resisted at first but adapted within one grading cycle.

## Passage 3

Because podcasts vary in editorial review, the guide ranked sources partly by whether transcripts and correction policies were public.

## Passage 4

A before/after pilot found annotation completeness up 28 percent while average grades shifted only slightly.

## Passage 5

Parents worried rules would chill current-events engagement. Librarians ran workshops on finding high-quality audio rather than banning it.

## Passage 6

Neighboring districts reused the guide under a share-alike license, creating informal regional consistency for college-prep research skills.

## Questions

### Question 1

Required podcast citation elements included

**A)** only the show’s logo color.
**B)** host, episode title, publisher, date, and timestamp for quotes.
**C)** paywall passwords.
**D)** teacher home addresses.

**Answer:** B
**Why:** Those elements are listed in the guide.

### Question 2

Timestamps most directly reduced

**A)** paper length.
**B)** unverifiable quotes.
**C)** workshop attendance.
**D)** share-alike licensing.

**Answer:** B
**Why:** Teachers saw fewer unverifiable quotes.

### Question 3

Podcasts were ranked partly by

**A)** theme-song length.
**B)** public transcripts and correction policies.
**C)** microphone brand.
**D)** ban status only.

**Answer:** B
**Why:** Editorial transparency features informed ranking.

### Question 4

After the standard, annotation completeness rose about

**A)** 28 percent
**B)** one percent
**C)** zero
**D)** ninety percent

**Answer:** A
**Why:** Completeness scores rose 28%.

### Question 5

Librarians responded to parental worry by

**A)** banning all audio sources.
**B)** teaching how to find high-quality audio rather than forbidding it.
**C)** removing timestamps.
**D)** ending history papers.

**Answer:** B
**Why:** Workshops supported quality engagement.

### Question 6

Neighboring districts’ reuse mainly created

**A)** conflicting rules on purpose.
**B)** informal regional consistency for research skills.
**C)** lower completeness scores.
**D)** secret licenses.

**Answer:** B
**Why:** Share-alike reuse aligned expectations regionally.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 46: Tidal Gauge Gaps and Coastal Planning Equity',
        'content': """# SAT Reading · Information and Ideas Pack 46
**Focus:** Tidal Gauge Gaps and Coastal Planning Equity

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

A nonprofit mapped tidal gauges and found denser instruments along wealthier waterfronts than working harbor districts. Flood models for under-gauged shores relied more on interpolation, widening uncertainty bands.

## Passage 2

Advocacy helped site two new gauges near seafood-processing piers. Within a year, tighter surge estimates justified a targeted pump upgrade.

## Passage 3

Insurers had quoted higher premiums in data-poor zones. Premium spreads narrowed slightly after gauge data improved, though many factors still shaped rates.

## Passage 4

Residents asked why their blocks were low priority. Planners admitted legacy placement followed yacht-club partnerships more than population exposure.

## Passage 5

Students built a low-cost sensor bridge network. Officials cautioned that volunteer sensors need calibration before entering formal models.

## Passage 6

The equity report called data infrastructure part of climate justice, not a neutral technical backdrop.

## Questions

### Question 1

Under-gauged shores faced wider uncertainty because models

**A)** banned interpolation.
**B)** relied more on interpolation without local gauges.
**C)** ignored surges entirely.
**D)** treated yacht clubs as the only residents.

**Answer:** B
**Why:** Interpolation widened uncertainty bands.

### Question 2

New gauges near processing piers helped justify

**A)** removing all pumps.
**B)** a targeted pump upgrade after tighter surge estimates.
**C)** higher yacht-club fees only.
**D)** ending advocacy.

**Answer:** B
**Why:** Tighter estimates supported the upgrade.

### Question 3

Premium spreads in data-poor zones

**A)** were unrelated to data.
**B)** narrowed slightly after gauge improvements.
**C)** disappeared completely forever.
**D)** rose only for students.

**Answer:** B
**Why:** Spreads narrowed slightly post-data.

### Question 4

Planners admitted legacy placement favored

**A)** population exposure first.
**B)** yacht-club partnerships over exposure equity.
**C)** seafood-worker housing.
**D)** volunteer calibration only.

**Answer:** B
**Why:** Partnerships drove placement more than exposure.

### Question 5

Officials cautioned that volunteer sensors need

**A)** to replace all gauges immediately.
**B)** calibration before formal model use.
**C)** to end equity reports.
**D)** zero documentation.

**Answer:** B
**Why:** Calibration protocols were required for formal use.

### Question 6

The report frames data infrastructure as

**A)** a neutral backdrop only.
**B)** part of climate justice.
**C)** irrelevant to premiums.
**D)** solely a yacht-club concern.

**Answer:** B
**Why:** Equity framing treats data as justice-relevant.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Info & Ideas Pack 47: Community Translator Co-Ops at Clinics',
        'content': """# SAT Reading · Information and Ideas Pack 47
**Focus:** Community Translator Co-Ops at Clinics

Practice central ideas, evidence, and data inferences in Digital SAT style (short stimuli).

## Passage 1

A clinic network contracted a cooperative of community translators after surveys linked missed follow-ups to language barriers. Missed specialist appointments fell 19 percent for preferred-language visits within six months.

## Passage 2

Physicians worried about visit length. Time-motion studies found added minutes were offset by fewer repeat explanations and clearer medication teach-backs.

## Passage 3

Translators requested briefing sheets before complex visits. Clinics that provided sheets saw higher translator-reported readiness scores.

## Passage 4

Confusing insurance codes for language services led the co-op to open a shared billing desk that reduced claim denials.

## Passage 5

Patients rated respect highest when translators used regional dialects matching home speech, not only textbook standard forms.

## Passage 6

A policy brief argued gig-style interpreter extras undercut quality; co-op jobs with training stipends showed better retention.

## Questions

### Question 1

Missed specialist appointments for preferred-language visits fell about

**A)** 19 percent
**B)** six percent
**C)** zero
**D)** fifty percent

**Answer:** A
**Why:** Missed appointments fell 19%.

### Question 2

Time-motion results suggested added minutes were

**A)** pure loss with no offset.
**B)** offset by fewer repeats and clearer teach-backs.
**C)** caused only by billing codes.
**D)** unrelated to translation.

**Answer:** B
**Why:** Offsets came from explanation efficiency.

### Question 3

Higher readiness scores correlated with

**A)** no briefing sheets.
**B)** advance briefing sheets from clinics.
**C)** removing dialects.
**D)** gig-only hiring.

**Answer:** B
**Why:** Sheets raised translator readiness scores.

### Question 4

The co-op billing desk mainly reduced

**A)** patient respect ratings.
**B)** claim denials for language services.
**C)** training stipends.
**D)** specialist referrals.

**Answer:** B
**Why:** Shared billing cut denials.

### Question 5

Patients especially valued translators who

**A)** used only textbook standard forms.
**B)** matched regional home dialects.
**C)** shortened visits to one minute.
**D)** avoided medication topics.

**Answer:** B
**Why:** Dialect match raised respect ratings.

### Question 6

The policy brief favored co-op employment because

**A)** gig extras had better retention.
**B)** training stipends and co-op jobs showed better retention than gig extras.
**C)** billing codes vanished.
**D)** surveys banned language access.

**Answer:** B
**Why:** Retention metrics favored the co-op model.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 31: Hydrology Field Log — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 31
**Setting:** Hydrology Field Log

## Passage

After the storm pulsed through the canyon, the downstream crest arrived attenuated, lower than models predicted from upstream gauges alone. The log notes that debris jams temporarily stored water, releasing it later in smaller pulses. Colleagues debated whether the write-up should stay technical or invite watershed volunteers. The revised draft kept precise terms but added a brief definition after first use.

## Questions

### Question 1

As used in the passage, "attenuated" most nearly means

**A)** Weakened or reduced in force.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “weakened or reduced in force.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Hydrology Field Log) uses the keyed term in a nonsense way.
**B)** Context around “attenuated” supports a meaning aligned with “weakened or reduced in force.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in hydrology field log while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "attenuated" while preserving meaning in context?

**A)** A near-synonym matching “Weakened or reduced in force”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 32: City Budget Hearing Excerpt — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 32
**Setting:** City Budget Hearing Excerpt

## Passage

Residents called the capital-projects summary opaque, saying even attentive listeners could not tell which parcels would change. Staff answered with a one-page map legend and a glossary. The revised minutes kept precise parcel codes but defined them on first mention, aiming to preserve credibility while widening access.

## Questions

### Question 1

As used in the passage, "opaque" most nearly means

**A)** Difficult to understand or see through.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “difficult to understand or see through.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (City Budget Hearing Excerpt) uses the keyed term in a nonsense way.
**B)** Context around “opaque” supports a meaning aligned with “difficult to understand or see through.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in city budget hearing excerpt while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "opaque" while preserving meaning in context?

**A)** A near-synonym matching “Difficult to understand or see through”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 33: Labor Economics Brief — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 33
**Setting:** Labor Economics Brief

## Passage

The brief argues that short-run labor demand showed low elasticity when a local wage floor rose, with hours barely changing for three quarters. Authors contrast that stickiness with longer-run adjustments via automation pilots. A footnote defines elasticity for non-specialist council readers without dropping the technical claim.

## Questions

### Question 1

As used in the passage, "elasticity" most nearly means

**A)** Responsiveness of one variable to another.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “responsiveness of one variable to another.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Labor Economics Brief) uses the keyed term in a nonsense way.
**B)** Context around “elasticity” supports a meaning aligned with “responsiveness of one variable to another.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in labor economics brief while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "elasticity" while preserving meaning in context?

**A)** A near-synonym matching “Responsiveness of one variable to another”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 34: Trail Stewardship Preface — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 34
**Setting:** Trail Stewardship Preface

## Passage

The preface frames volunteer brush clearing as stewardship rather than conquest of wildness. Sentences balance ecological goals with visitor safety, and a parenthetical gloss explains stewardship as caretaking responsibility. The tone invites hikers to see maintenance as shared duty.

## Questions

### Question 1

As used in the passage, "stewardship" most nearly means

**A)** Careful responsibility for something entrusted.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “careful responsibility for something entrusted.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Trail Stewardship Preface) uses the keyed term in a nonsense way.
**B)** Context around “stewardship” supports a meaning aligned with “careful responsibility for something entrusted.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in trail stewardship preface while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "stewardship" while preserving meaning in context?

**A)** A near-synonym matching “Careful responsibility for something entrusted”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 35: Lab Safety Circular — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 35
**Setting:** Lab Safety Circular

## Passage

The circular asks teams to mitigate splash risk by using face shields near acid baths. It distinguishes mitigation (reducing severity) from elimination (removing a hazard entirely). A revised sentence places the shield rule before decorative posters so priority stays clear.

## Questions

### Question 1

As used in the passage, "mitigate" most nearly means

**A)** Make less severe.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “make less severe.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Lab Safety Circular) uses the keyed term in a nonsense way.
**B)** Context around “mitigate” supports a meaning aligned with “make less severe.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in lab safety circular while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "mitigate" while preserving meaning in context?

**A)** A near-synonym matching “Make less severe”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 36: Gallery Wall Text — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 36
**Setting:** Gallery Wall Text

## Passage

Wall text describes the sculptor’s turn toward vernacular materials—bus tickets, hardware-store rope—after years of marble studies. The curator’s note defines vernacular as ordinary local materials and speech-like visual idiom. Visitors are asked to notice how commonplace objects gain formal weight.

## Questions

### Question 1

As used in the passage, "vernacular" most nearly means

**A)** Everyday or local language/style.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “everyday or local language/style.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Gallery Wall Text) uses the keyed term in a nonsense way.
**B)** Context around “vernacular” supports a meaning aligned with “everyday or local language/style.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in gallery wall text while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "vernacular" while preserving meaning in context?

**A)** A near-synonym matching “Everyday or local language/style”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 37: Climate Column Draft — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 37
**Setting:** Climate Column Draft

## Passage

The column claims poorly timed controlled burns can exacerbate respiratory spikes if smoke settles in valleys overnight. Editors asked for a plainer synonym in the headline while keeping exacerbate in the body where precision matters. A sidebar lists valley towns with sensors.

## Questions

### Question 1

As used in the passage, "exacerbate" most nearly means

**A)** Make worse.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “make worse.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Climate Column Draft) uses the keyed term in a nonsense way.
**B)** Context around “exacerbate” supports a meaning aligned with “make worse.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in climate column draft while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "exacerbate" while preserving meaning in context?

**A)** A near-synonym matching “Make worse”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 38: Cognitive Science Abstract — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 38
**Setting:** Cognitive Science Abstract

## Passage

The abstract reports that color salience, not font size alone, predicted which icons participants remembered. Authors define salience as the degree to which a feature stands out against its surroundings. Limitations note laboratory screens differ from phone glare outdoors.

## Questions

### Question 1

As used in the passage, "salience" most nearly means

**A)** Prominence or noticeability.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “prominence or noticeability.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Cognitive Science Abstract) uses the keyed term in a nonsense way.
**B)** Context around “salience” supports a meaning aligned with “prominence or noticeability.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in cognitive science abstract while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "salience" while preserving meaning in context?

**A)** A near-synonym matching “Prominence or noticeability”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 39: Bridge Inspection Blog — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 39
**Setting:** Bridge Inspection Blog

## Passage

The engineer writes that load paths were designed to be redundant so one failed member would not collapse the span. A glossary blurb equates redundant here with backup capacity, not with useless repetition. Photos show sister beams installed during retrofit.

## Questions

### Question 1

As used in the passage, "redundant" most nearly means

**A)** Providing backup beyond the minimum needed.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “providing backup beyond the minimum needed.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Bridge Inspection Blog) uses the keyed term in a nonsense way.
**B)** Context around “redundant” supports a meaning aligned with “providing backup beyond the minimum needed.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in bridge inspection blog while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "redundant" while preserving meaning in context?

**A)** A near-synonym matching “Providing backup beyond the minimum needed”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 40: Literary Headnote — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 40
**Setting:** Literary Headnote

## Passage

The headnote calls the narrator’s praise of the factory “quietly ironic,” because later chapters reveal poisoned wells. Students are reminded that irony here is tonal contrast between stated admiration and implied critique, not mere coincidence.

## Questions

### Question 1

As used in the passage, "ironic" most nearly means

**A)** Meaning opposite to literal sense, often knowingly.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “meaning opposite to literal sense, often knowingly.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Literary Headnote) uses the keyed term in a nonsense way.
**B)** Context around “ironic” supports a meaning aligned with “meaning opposite to literal sense, often knowingly.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in literary headnote while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "ironic" while preserving meaning in context?

**A)** A near-synonym matching “Meaning opposite to literal sense, often knowingly”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 41: Marine Policy Memo — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 41
**Setting:** Marine Policy Memo

## Passage

The memo endorses a precautionary seasonal closure where stock assessments remain incomplete. It defines the precautionary approach as limiting harvest while uncertainty is high rather than waiting for perfect data. Industry letters call the stance overly cautious; managers cite irreversible risk.

## Questions

### Question 1

As used in the passage, "precautionary" most nearly means

**A)** Acting to avoid harm despite uncertainty.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “acting to avoid harm despite uncertainty.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Marine Policy Memo) uses the keyed term in a nonsense way.
**B)** Context around “precautionary” supports a meaning aligned with “acting to avoid harm despite uncertainty.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in marine policy memo while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "precautionary" while preserving meaning in context?

**A)** A near-synonym matching “Acting to avoid harm despite uncertainty”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 42: Anthropology Methods Note — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 42
**Setting:** Anthropology Methods Note

## Passage

The methods note distinguishes emic categories—terms speakers themselves use—from outsider analytic labels. A classroom example contrasts villagers’ own season names with researchers’ calendar months. The author argues both lenses are useful if labeled clearly.

## Questions

### Question 1

As used in the passage, "emic" most nearly means

**A)** From an insider cultural perspective.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “from an insider cultural perspective.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Anthropology Methods Note) uses the keyed term in a nonsense way.
**B)** Context around “emic” supports a meaning aligned with “from an insider cultural perspective.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in anthropology methods note while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "emic" while preserving meaning in context?

**A)** A near-synonym matching “From an insider cultural perspective”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 43: Solar Coop Newsletter — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 43
**Setting:** Solar Coop Newsletter

## Passage

The newsletter explains that solar intermittency—output rising and falling with clouds—motivates pairing panels with storage. A diagram shows afternoon peaks. Members are asked not to confuse intermittency with total unreliability.

## Questions

### Question 1

As used in the passage, "intermittency" most nearly means

**A)** Irregular starting and stopping.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “irregular starting and stopping.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Solar Coop Newsletter) uses the keyed term in a nonsense way.
**B)** Context around “intermittency” supports a meaning aligned with “irregular starting and stopping.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in solar coop newsletter while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "intermittency" while preserving meaning in context?

**A)** A near-synonym matching “Irregular starting and stopping”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 44: Courtroom Sketch Caption — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 44
**Setting:** Courtroom Sketch Caption

## Passage

The caption notes the defendant’s impassive expression during testimony about damaged murals. The artist’s accompanying sentence clarifies impassive as outwardly unemotional, without claiming inner feelings. Editors cut speculative mind-reading adjectives.

## Questions

### Question 1

As used in the passage, "impassive" most nearly means

**A)** Not showing emotion.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “not showing emotion.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Courtroom Sketch Caption) uses the keyed term in a nonsense way.
**B)** Context around “impassive” supports a meaning aligned with “not showing emotion.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in courtroom sketch caption while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "impassive" while preserving meaning in context?

**A)** A near-synonym matching “Not showing emotion”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 45: Epidemiology FAQ — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 45
**Setting:** Epidemiology FAQ

## Passage

The FAQ states that asymptomatic carriers can still transmit in some illnesses, which is why contact tracing does not rely on symptom checklists alone. A plain-language box defines asymptomatic as infected without noticeable symptoms.

## Questions

### Question 1

As used in the passage, "asymptomatic" most nearly means

**A)** Showing no symptoms.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “showing no symptoms.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Epidemiology FAQ) uses the keyed term in a nonsense way.
**B)** Context around “asymptomatic” supports a meaning aligned with “showing no symptoms.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in epidemiology faq while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "asymptomatic" while preserving meaning in context?

**A)** A near-synonym matching “Showing no symptoms”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 46: Urban Design Charrette Notes — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 46
**Setting:** Urban Design Charrette Notes

## Passage

Notes praise the block’s permeability: frequent mid-block passages let pedestrians cut through without long detours. The facilitator defines permeability as ease of movement through a fabric of streets and paths, distinct from stormwater permeability discussed later.

## Questions

### Question 1

As used in the passage, "permeability" most nearly means

**A)** How easily people/water can pass through.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “how easily people/water can pass through.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Urban Design Charrette Notes) uses the keyed term in a nonsense way.
**B)** Context around “permeability” supports a meaning aligned with “how easily people/water can pass through.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in urban design charrette notes while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "permeability" while preserving meaning in context?

**A)** A near-synonym matching “How easily people/water can pass through”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Reading · Craft & Structure Pack 47: Philosophy Seminar Handout — Words in Context',
        'content': """# SAT Reading · Craft & Structure Pack 47
**Setting:** Philosophy Seminar Handout

## Passage

The handout labels a conclusion contingent on accepting premise set B, warning students not to treat it as necessary in all frameworks. A margin gloss: contingent means dependent on conditions that might have been otherwise.

## Questions

### Question 1

As used in the passage, "contingent" most nearly means

**A)** Dependent on conditions; not necessary.
**B)** Completely unrelated decoration.
**C)** A type of punctuation mark.
**D)** A numerical average only.

**Answer:** A
**Why:** Context supports the sense close to “dependent on conditions; not necessary.”

### Question 2

Based on the passage, which statement is best supported?

**A)** The setting (Philosophy Seminar Handout) uses the keyed term in a nonsense way.
**B)** Context around “contingent” supports a meaning aligned with “dependent on conditions; not necessary.”
**C)** The author refuses any clarification.
**D)** The passage is only a shopping list.

**Answer:** B
**Why:** Contextual clues point to that meaning.

### Question 3

The passage’s purpose is best described as

**A)** narrating an unrelated adventure.
**B)** explaining a concept in philosophy seminar handout while clarifying key wording.
**C)** listing grocery prices.
**D)** announcing a sports score.

**Answer:** B
**Why:** Content and definitions serve explanatory/clarifying aims in that setting.

### Question 4

Which choice would best replace "contingent" while preserving meaning in context?

**A)** A near-synonym matching “Dependent on conditions”
**B)** Unrelated jargon
**C)** A sarcastic insult
**D)** A random date

**Answer:** A
**Why:** A near-synonym fitting the sentence preserves meaning.

### Question 5

A student claims the passage exists only to create plot suspense. Is that accurate?

**A)** Yes; it withholds a villain’s name.
**B)** No; it primarily clarifies meaning and purpose in an informational register.
**C)** Yes; it introduces cliffhangers every sentence.
**D)** No; the passage has no sentences.

**Answer:** B
**Why:** Craft/structure items here target wording and purpose, not thriller suspense.

### Question 6

Which structural feature most helps general readers?

**A)** A brief definition, gloss, or plain-language clarification near a technical term
**B)** Removing all examples
**C)** Using undefined abbreviations only
**D)** Ending mid-clause

**Answer:** A
**Why:** Glosses and brief definitions widen access without abandoning precision.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Reading',
        'space': 'sat-reading',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 31: Boundaries — Semicolons vs Comma Splices',
        'content': """# SAT Grammar · Standard English Conventions Pack 31
**Skill focus:** Boundaries — Semicolons vs Comma Splices

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

The sensors failed at midnight____ the survey team postponed the launch.

**A)** midnight, the
**B)** midnight; the
**C)** midnight the
**D)** midnight: and the

**Answer:** B
**Why:** A semicolon correctly joins two independent clauses; A is a comma splice.

### Question 2

Which choice best corrects the boundary error?

Results were promising____ volunteers still requested a larger sample.

**A)** promising, volunteers
**B)** promising; volunteers
**C)** promising volunteers
**D)** promising: and volunteers

**Answer:** B
**Why:** Two independents need a semicolon (or period/conjunction), not a comma splice.

### Question 3

Which choice avoids a fragment?

____ reviewed the field notes twice.

**A)** Because the lead scientist
**B)** The lead scientist
**C)** After reviewing which
**D)** Which the scientist who

**Answer:** B
**Why:** B supplies a complete independent clause; A/C/D leave fragments or broken syntax.

### Question 4

Which choice correctly joins the clauses?

The survey team finished early____ and the bus arrived on time.

**A)** early, and
**B)** early; and
**C)** early and,
**D)** early: and,

**Answer:** A
**Why:** Comma + coordinating conjunction correctly joins two independents.

### Question 5

Which choice punctuates the conjunctive adverb correctly?

The first model failed____ however, the backup sensors logged clean data.

**A)** failed, however,
**B)** failed; however,
**C)** failed however,
**D)** failed: however

**Answer:** B
**Why:** Semicolon before however and comma after when joining independents.

### Question 6

Which choice eliminates a fused sentence?

Rain began at noon the crew sheltered under the canopy.

**A)** noon the crew
**B)** noon, the crew
**C)** noon; the crew
**D)** noon: and the crew

**Answer:** C
**Why:** A semicolon (or period) separates the two independents; B is a comma splice.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 32: Boundaries — Fragments and Complete Sentences',
        'content': """# SAT Grammar · Standard English Conventions Pack 32
**Skill focus:** Boundaries — Fragments and Complete Sentences

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

The sensors failed at midnight____ the clinic postponed the launch.

**A)** midnight, the
**B)** midnight; the
**C)** midnight the
**D)** midnight: and the

**Answer:** B
**Why:** A semicolon correctly joins two independent clauses; A is a comma splice.

### Question 2

Which choice best corrects the boundary error?

Results were promising____ volunteers still requested a larger sample.

**A)** promising, volunteers
**B)** promising; volunteers
**C)** promising volunteers
**D)** promising: and volunteers

**Answer:** B
**Why:** Two independents need a semicolon (or period/conjunction), not a comma splice.

### Question 3

Which choice avoids a fragment?

____ reviewed the field notes twice.

**A)** Because the lead scientist
**B)** The lead scientist
**C)** After reviewing which
**D)** Which the scientist who

**Answer:** B
**Why:** B supplies a complete independent clause; A/C/D leave fragments or broken syntax.

### Question 4

Which choice correctly joins the clauses?

The clinic finished early____ and the bus arrived on time.

**A)** early, and
**B)** early; and
**C)** early and,
**D)** early: and,

**Answer:** A
**Why:** Comma + coordinating conjunction correctly joins two independents.

### Question 5

Which choice punctuates the conjunctive adverb correctly?

The first model failed____ however, the backup sensors logged clean data.

**A)** failed, however,
**B)** failed; however,
**C)** failed however,
**D)** failed: however

**Answer:** B
**Why:** Semicolon before however and comma after when joining independents.

### Question 6

Which choice eliminates a fused sentence?

Rain began at noon the crew sheltered under the canopy.

**A)** noon the crew
**B)** noon, the crew
**C)** noon; the crew
**D)** noon: and the crew

**Answer:** C
**Why:** A semicolon (or period) separates the two independents; B is a comma splice.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 33: Boundaries — Coordinating Conjunctions',
        'content': """# SAT Grammar · Standard English Conventions Pack 33
**Skill focus:** Boundaries — Coordinating Conjunctions

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

The sensors failed at midnight____ the orchard cooperative postponed the launch.

**A)** midnight, the
**B)** midnight; the
**C)** midnight the
**D)** midnight: and the

**Answer:** B
**Why:** A semicolon correctly joins two independent clauses; A is a comma splice.

### Question 2

Which choice best corrects the boundary error?

Results were promising____ volunteers still requested a larger sample.

**A)** promising, volunteers
**B)** promising; volunteers
**C)** promising volunteers
**D)** promising: and volunteers

**Answer:** B
**Why:** Two independents need a semicolon (or period/conjunction), not a comma splice.

### Question 3

Which choice avoids a fragment?

____ reviewed the field notes twice.

**A)** Because the lead scientist
**B)** The lead scientist
**C)** After reviewing which
**D)** Which the scientist who

**Answer:** B
**Why:** B supplies a complete independent clause; A/C/D leave fragments or broken syntax.

### Question 4

Which choice correctly joins the clauses?

The orchard cooperative finished early____ and the bus arrived on time.

**A)** early, and
**B)** early; and
**C)** early and,
**D)** early: and,

**Answer:** A
**Why:** Comma + coordinating conjunction correctly joins two independents.

### Question 5

Which choice punctuates the conjunctive adverb correctly?

The first model failed____ however, the backup sensors logged clean data.

**A)** failed, however,
**B)** failed; however,
**C)** failed however,
**D)** failed: however

**Answer:** B
**Why:** Semicolon before however and comma after when joining independents.

### Question 6

Which choice eliminates a fused sentence?

Rain began at noon the crew sheltered under the canopy.

**A)** noon the crew
**B)** noon, the crew
**C)** noon; the crew
**D)** noon: and the crew

**Answer:** C
**Why:** A semicolon (or period) separates the two independents; B is a comma splice.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 34: Boundaries — Conjunctive Adverbs with However',
        'content': """# SAT Grammar · Standard English Conventions Pack 34
**Skill focus:** Boundaries — Conjunctive Adverbs with However

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes the text so that it conforms to conventions?

The sensors failed at midnight____ the transit pilot postponed the launch.

**A)** midnight, the
**B)** midnight; the
**C)** midnight the
**D)** midnight: and the

**Answer:** B
**Why:** A semicolon correctly joins two independent clauses; A is a comma splice.

### Question 2

Which choice best corrects the boundary error?

Results were promising____ volunteers still requested a larger sample.

**A)** promising, volunteers
**B)** promising; volunteers
**C)** promising volunteers
**D)** promising: and volunteers

**Answer:** B
**Why:** Two independents need a semicolon (or period/conjunction), not a comma splice.

### Question 3

Which choice avoids a fragment?

____ reviewed the field notes twice.

**A)** Because the lead scientist
**B)** The lead scientist
**C)** After reviewing which
**D)** Which the scientist who

**Answer:** B
**Why:** B supplies a complete independent clause; A/C/D leave fragments or broken syntax.

### Question 4

Which choice correctly joins the clauses?

The transit pilot finished early____ and the bus arrived on time.

**A)** early, and
**B)** early; and
**C)** early and,
**D)** early: and,

**Answer:** A
**Why:** Comma + coordinating conjunction correctly joins two independents.

### Question 5

Which choice punctuates the conjunctive adverb correctly?

The first model failed____ however, the backup sensors logged clean data.

**A)** failed, however,
**B)** failed; however,
**C)** failed however,
**D)** failed: however

**Answer:** B
**Why:** Semicolon before however and comma after when joining independents.

### Question 6

Which choice eliminates a fused sentence?

Rain began at noon the crew sheltered under the canopy.

**A)** noon the crew
**B)** noon, the crew
**C)** noon; the crew
**D)** noon: and the crew

**Answer:** C
**Why:** A semicolon (or period) separates the two independents; B is a comma splice.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 35: Form — Subject-Verb Agreement with Interrupters',
        'content': """# SAT Grammar · Standard English Conventions Pack 35
**Skill focus:** Form — Subject-Verb Agreement with Interrupters

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice maintains subject-verb agreement?

The box of calibrated weights ____ missing from the museum lab.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** Subject box is singular; the prepositional phrase does not change number.

### Question 2

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 3

Which choice makes the pronoun clear and conventional?

When Jordan met Riley at the museum lab, ____ offered a spare badge.

**A)** they
**B)** Jordan
**C)** it
**D)** them

**Answer:** B
**Why:** Naming Jordan avoids ambiguous they/them reference.

### Question 4

Which choice agrees with the collective sense intended?

The jury ____ delivering separate opinions in signed addenda.

**A)** is
**B)** are
**C)** was
**D)** has

**Answer:** B
**Why:** Separate opinions signal members acting individually → plural verb.

### Question 5

Which choice maintains agreement with a delayed subject?

There ____ several anomalies in the overnight log.

**A)** is
**B)** was
**C)** are
**D)** hasn't

**Answer:** C
**Why:** Anomalies (plural) is the true subject after there.

### Question 6

Which choice keeps pronoun-antecedent agreement?

Each of the interns submitted ____ timesheet on Friday.

**A)** their
**B)** his or her
**C)** its
**D)** them

**Answer:** B
**Why:** Each is singular; his or her agrees (their is common in speech but B is the conventional test answer here).

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 36: Form — Neither/Nor and Either/Or Agreement',
        'content': """# SAT Grammar · Standard English Conventions Pack 36
**Skill focus:** Form — Neither/Nor and Either/Or Agreement

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice maintains subject-verb agreement?

The box of calibrated weights ____ missing from the archive.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** Subject box is singular; the prepositional phrase does not change number.

### Question 2

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 3

Which choice makes the pronoun clear and conventional?

When Jordan met Riley at the archive, ____ offered a spare badge.

**A)** they
**B)** Jordan
**C)** it
**D)** them

**Answer:** B
**Why:** Naming Jordan avoids ambiguous they/them reference.

### Question 4

Which choice agrees with the collective sense intended?

The jury ____ delivering separate opinions in signed addenda.

**A)** is
**B)** are
**C)** was
**D)** has

**Answer:** B
**Why:** Separate opinions signal members acting individually → plural verb.

### Question 5

Which choice maintains agreement with a delayed subject?

There ____ several anomalies in the overnight log.

**A)** is
**B)** was
**C)** are
**D)** hasn't

**Answer:** C
**Why:** Anomalies (plural) is the true subject after there.

### Question 6

Which choice keeps pronoun-antecedent agreement?

Each of the interns submitted ____ timesheet on Friday.

**A)** their
**B)** his or her
**C)** its
**D)** them

**Answer:** B
**Why:** Each is singular; his or her agrees (their is common in speech but B is the conventional test answer here).

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 37: Form — Pronoun-Antecedent Clarity',
        'content': """# SAT Grammar · Standard English Conventions Pack 37
**Skill focus:** Form — Pronoun-Antecedent Clarity

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice maintains subject-verb agreement?

The box of calibrated weights ____ missing from the survey team.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** Subject box is singular; the prepositional phrase does not change number.

### Question 2

Which choice maintains agreement?

Neither the maps nor the atlas ____ current.

**A)** are
**B)** is
**C)** were
**D)** have been

**Answer:** B
**Why:** With neither/nor, the verb agrees with the nearer subject atlas (singular).

### Question 3

Which choice makes the pronoun clear and conventional?

When Jordan met Riley at the survey team, ____ offered a spare badge.

**A)** they
**B)** Jordan
**C)** it
**D)** them

**Answer:** B
**Why:** Naming Jordan avoids ambiguous they/them reference.

### Question 4

Which choice agrees with the collective sense intended?

The jury ____ delivering separate opinions in signed addenda.

**A)** is
**B)** are
**C)** was
**D)** has

**Answer:** B
**Why:** Separate opinions signal members acting individually → plural verb.

### Question 5

Which choice maintains agreement with a delayed subject?

There ____ several anomalies in the overnight log.

**A)** is
**B)** was
**C)** are
**D)** hasn't

**Answer:** C
**Why:** Anomalies (plural) is the true subject after there.

### Question 6

Which choice keeps pronoun-antecedent agreement?

Each of the interns submitted ____ timesheet on Friday.

**A)** their
**B)** his or her
**C)** its
**D)** them

**Answer:** B
**Why:** Each is singular; his or her agrees (their is common in speech but B is the conventional test answer here).

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 38: Form — Verb Tense in Narratives',
        'content': """# SAT Grammar · Standard English Conventions Pack 38
**Skill focus:** Form — Verb Tense in Narratives

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice keeps tense consistent?

Last summer the clinic collected cores and later ____ the same sites.

**A)** revisits
**B)** revisited
**C)** will revisiting
**D)** revisit

**Answer:** B
**Why:** Past narrative pairs collected with revisited.

### Question 2

Which choice fits the time marker?

Since 2019, the sensors ____ continuous salinity readings.

**A)** provide
**B)** provided
**C)** have provided
**D)** provides

**Answer:** C
**Why:** Since + present perfect for action continuing from past to present.

### Question 3

Which choice is conventional?

By the time the ferry docked, the volunteers ____ the canopy.

**A)** fold
**B)** had folded
**C)** folding
**D)** have fold

**Answer:** B
**Why:** Past perfect marks the earlier completed action.

### Question 4

Which choice maintains logical tense?

The report states that ice cover ____ rapidly this decade.

**A)** shrink
**B)** has shrunk
**C)** shrinking
**D)** have shrink

**Answer:** B
**Why:** Present perfect fits a change spanning the current decade.

### Question 5

Which choice avoids an unnecessary shift?

She opens the logbook and ____ the anomaly in red.

**A)** marked
**B)** marks
**C)** marking
**D)** had mark

**Answer:** B
**Why:** Present opens pairs with present marks.

### Question 6

Which choice is best?

For three hours the team ____ for clearance before launching.

**A)** waits
**B)** waited
**C)** has been waiting
**D)** waiting

**Answer:** C
**Why:** For + duration often takes present perfect progressive for ongoing wait.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 39: Form — Verb Tense with Since/For',
        'content': """# SAT Grammar · Standard English Conventions Pack 39
**Skill focus:** Form — Verb Tense with Since/For

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice keeps tense consistent?

Last summer the orchard cooperative collected cores and later ____ the same sites.

**A)** revisits
**B)** revisited
**C)** will revisiting
**D)** revisit

**Answer:** B
**Why:** Past narrative pairs collected with revisited.

### Question 2

Which choice fits the time marker?

Since 2019, the sensors ____ continuous salinity readings.

**A)** provide
**B)** provided
**C)** have provided
**D)** provides

**Answer:** C
**Why:** Since + present perfect for action continuing from past to present.

### Question 3

Which choice is conventional?

By the time the ferry docked, the volunteers ____ the canopy.

**A)** fold
**B)** had folded
**C)** folding
**D)** have fold

**Answer:** B
**Why:** Past perfect marks the earlier completed action.

### Question 4

Which choice maintains logical tense?

The report states that ice cover ____ rapidly this decade.

**A)** shrink
**B)** has shrunk
**C)** shrinking
**D)** have shrink

**Answer:** B
**Why:** Present perfect fits a change spanning the current decade.

### Question 5

Which choice avoids an unnecessary shift?

She opens the logbook and ____ the anomaly in red.

**A)** marked
**B)** marks
**C)** marking
**D)** had mark

**Answer:** B
**Why:** Present opens pairs with present marks.

### Question 6

Which choice is best?

For three hours the team ____ for clearance before launching.

**A)** waits
**B)** waited
**C)** has been waiting
**D)** waiting

**Answer:** C
**Why:** For + duration often takes present perfect progressive for ongoing wait.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 40: Form — Modifier Placement',
        'content': """# SAT Grammar · Standard English Conventions Pack 40
**Skill focus:** Form — Modifier Placement

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 2

Which choice avoids a dangling modifier?

____ the samples were stored in the cold room.

**A)** Walking into the lab,
**B)** After the team logged temperatures,
**C)** Tired and hungry,
**D)** Running down the hall,

**Answer:** B
**Why:** B names the actors who logged temperatures; A/C/D dangle onto samples.

### Question 3

Which choice is clearest?

The intern almost documented ____.

**A)** all of the errors in the margin
**B)** in the margin all of the errors almost
**C)** almost in the margin errors
**D)** errors almost all margin the

**Answer:** A
**Why:** A keeps almost with the intended scope and natural word order.

### Question 4

Which choice fixes the misplaced modifier?

We returned the drone that malfunctioned to the warehouse ____.

**A)** with new propellers
**B)** that had new propellers after malfunctioning only in jokes
**C)** —new propellers—malfunctioned
**D)** propellers new with

**Answer:** A
**Why:** A cleanly attaches the warehouse action; convoluted alternatives obscure meaning.

### Question 5

Which introductory phrase is placed correctly?

____ Maya tightened the bolts on the frame.

**A)** Using a torque wrench,
**B)** A torque wrench using,
**C)** Bolts using,
**D)** Torque,

**Answer:** A
**Why:** Participial phrase modifies Maya, the one using the wrench.

### Question 6

Which choice removes ambiguity?

The supervisor praised the technician ____.

**A)** who calibrated the sensor yesterday
**B)** yesterday who the sensor calibrated
**C)** calibrating yesterday the who
**D)** whom calibrate yesterday sensor

**Answer:** A
**Why:** A relative clause clearly modifies technician.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 41: Form — Dangling Modifiers',
        'content': """# SAT Grammar · Standard English Conventions Pack 41
**Skill focus:** Form — Dangling Modifiers

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice places the modifier logically?

____ the chemist labeled each vial twice.

**A)** To avoid mix-ups,
**B)** Mix-ups avoiding,
**C)** Avoided mix-ups,
**D)** Mix-ups,

**Answer:** A
**Why:** Infinitive purpose phrase correctly modifies the chemist’s action.

### Question 2

Which choice avoids a dangling modifier?

____ the samples were stored in the cold room.

**A)** Walking into the lab,
**B)** After the team logged temperatures,
**C)** Tired and hungry,
**D)** Running down the hall,

**Answer:** B
**Why:** B names the actors who logged temperatures; A/C/D dangle onto samples.

### Question 3

Which choice is clearest?

The intern almost documented ____.

**A)** all of the errors in the margin
**B)** in the margin all of the errors almost
**C)** almost in the margin errors
**D)** errors almost all margin the

**Answer:** A
**Why:** A keeps almost with the intended scope and natural word order.

### Question 4

Which choice fixes the misplaced modifier?

We returned the drone that malfunctioned to the warehouse ____.

**A)** with new propellers
**B)** that had new propellers after malfunctioning only in jokes
**C)** —new propellers—malfunctioned
**D)** propellers new with

**Answer:** A
**Why:** A cleanly attaches the warehouse action; convoluted alternatives obscure meaning.

### Question 5

Which introductory phrase is placed correctly?

____ Maya tightened the bolts on the frame.

**A)** Using a torque wrench,
**B)** A torque wrench using,
**C)** Bolts using,
**D)** Torque,

**Answer:** A
**Why:** Participial phrase modifies Maya, the one using the wrench.

### Question 6

Which choice removes ambiguity?

The supervisor praised the technician ____.

**A)** who calibrated the sensor yesterday
**B)** yesterday who the sensor calibrated
**C)** calibrating yesterday the who
**D)** whom calibrate yesterday sensor

**Answer:** A
**Why:** A relative clause clearly modifies technician.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 42: Form — Parallelism in Lists',
        'content': """# SAT Grammar · Standard English Conventions Pack 42
**Skill focus:** Form — Parallelism in Lists

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 2

Which choice is parallel after not only?

The plan will not only cut waste but also ____ costs.

**A)** lowering
**B)** lower
**C)** to lower
**D)** lowers

**Answer:** B
**Why:** Not only… but also takes parallel verb forms: cut / lower.

### Question 3

Which comparative form is conventional?

Of the two routes, the coastal path is ____.

**A)** more safer
**B)** safer
**C)** safest
**D)** more safest

**Answer:** B
**Why:** Safer is the correct comparative for two items; avoid double marking.

### Question 4

Which superlative is conventional?

This gauge is the ____ of the five on the pier.

**A)** more accurate
**B)** most accurate
**C)** accurater
**D)** most accuratest

**Answer:** B
**Why:** Most accurate is the superlative among five.

### Question 5

Which choice keeps structure parallel?

She wants to measure salinity, to log depth, and ____.

**A)** recording wind
**B)** to record wind
**C)** wind recording
**D)** that wind is recorded

**Answer:** B
**Why:** Matches the infinitive pattern to measure / to log / to record.

### Question 6

Which choice is best?

The new protocol is ____ than the old checklist.

**A)** more clear
**B)** clearer
**C)** clearerer
**D)** most clear

**Answer:** B
**Why:** Clearer is the standard comparative.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 43: Form — Comparative and Superlative',
        'content': """# SAT Grammar · Standard English Conventions Pack 43
**Skill focus:** Form — Comparative and Superlative

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice yields a parallel list?

The workshop covers drafting, revising, and ____.

**A)** how you edit
**B)** editing
**C)** to edit carefully
**D)** you will edit

**Answer:** B
**Why:** Drafting / revising / editing keeps gerund parallelism.

### Question 2

Which choice is parallel after not only?

The plan will not only cut waste but also ____ costs.

**A)** lowering
**B)** lower
**C)** to lower
**D)** lowers

**Answer:** B
**Why:** Not only… but also takes parallel verb forms: cut / lower.

### Question 3

Which comparative form is conventional?

Of the two routes, the coastal path is ____.

**A)** more safer
**B)** safer
**C)** safest
**D)** more safest

**Answer:** B
**Why:** Safer is the correct comparative for two items; avoid double marking.

### Question 4

Which superlative is conventional?

This gauge is the ____ of the five on the pier.

**A)** more accurate
**B)** most accurate
**C)** accurater
**D)** most accuratest

**Answer:** B
**Why:** Most accurate is the superlative among five.

### Question 5

Which choice keeps structure parallel?

She wants to measure salinity, to log depth, and ____.

**A)** recording wind
**B)** to record wind
**C)** wind recording
**D)** that wind is recorded

**Answer:** B
**Why:** Matches the infinitive pattern to measure / to log / to record.

### Question 6

Which choice is best?

The new protocol is ____ than the old checklist.

**A)** more clear
**B)** clearer
**C)** clearerer
**D)** most clear

**Answer:** B
**Why:** Clearer is the standard comparative.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 44: Punctuation — Nonessential Appositives',
        'content': """# SAT Grammar · Standard English Conventions Pack 44
**Skill focus:** Punctuation — Nonessential Appositives

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

### Question 2

Which choice correctly uses a colon?

The kit included three tools____ a wrench, a gauge, and a brush.

**A)** tools,
**B)** tools;
**C)** tools:
**D)** tools and

**Answer:** C
**Why:** A colon introduces the list after a complete independent clause.

### Question 3

Which choice shows correct possession?

The ____ antennae were damaged in transit.

**A)** sensors
**B)** sensor's
**C)** sensors'
**D)** sensors's

**Answer:** C
**Why:** Plural sensors + possessive apostrophe after s → sensors’.

### Question 4

Which choice punctuates the interrupter with dashes?

The samples____ all collected before dawn____ were chilled immediately.

**A)** , all collected before dawn,
**B)** — all collected before dawn —
**C)** : all collected before dawn :
**D)** ; all collected before dawn ;

**Answer:** B
**Why:** Paired dashes can set off a nonessential interrupter (commas in A also work, but B matches dash focus).

### Question 5

Which choice correctly marks an essential clause?

The sensors that failed overnight ____ replaced by noon.

**A)** , were
**B)** were
**C)** ; were
**D)** : were

**Answer:** B
**Why:** Essential that-clause takes no comma before were.

### Question 6

Which series punctuation is clearest?

We packed lenses, batteries____ and spare cables.

**A)** batteries and
**B)** batteries, and
**C)** batteries; and
**D)** batteries: and

**Answer:** B
**Why:** Serial comma before and clarifies the three-item list.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 45: Punctuation — Colons Before Explanations',
        'content': """# SAT Grammar · Standard English Conventions Pack 45
**Skill focus:** Punctuation — Colons Before Explanations

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

### Question 2

Which choice correctly uses a colon?

The kit included three tools____ a wrench, a gauge, and a brush.

**A)** tools,
**B)** tools;
**C)** tools:
**D)** tools and

**Answer:** C
**Why:** A colon introduces the list after a complete independent clause.

### Question 3

Which choice shows correct possession?

The ____ antennae were damaged in transit.

**A)** sensors
**B)** sensor's
**C)** sensors'
**D)** sensors's

**Answer:** C
**Why:** Plural sensors + possessive apostrophe after s → sensors’.

### Question 4

Which choice punctuates the interrupter with dashes?

The samples____ all collected before dawn____ were chilled immediately.

**A)** , all collected before dawn,
**B)** — all collected before dawn —
**C)** : all collected before dawn :
**D)** ; all collected before dawn ;

**Answer:** B
**Why:** Paired dashes can set off a nonessential interrupter (commas in A also work, but B matches dash focus).

### Question 5

Which choice correctly marks an essential clause?

The sensors that failed overnight ____ replaced by noon.

**A)** , were
**B)** were
**C)** ; were
**D)** : were

**Answer:** B
**Why:** Essential that-clause takes no comma before were.

### Question 6

Which series punctuation is clearest?

We packed lenses, batteries____ and spare cables.

**A)** batteries and
**B)** batteries, and
**C)** batteries; and
**D)** batteries: and

**Answer:** B
**Why:** Serial comma before and clarifies the three-item list.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 46: Punctuation — Apostrophes for Possession',
        'content': """# SAT Grammar · Standard English Conventions Pack 46
**Skill focus:** Punctuation — Apostrophes for Possession

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

### Question 2

Which choice correctly uses a colon?

The kit included three tools____ a wrench, a gauge, and a brush.

**A)** tools,
**B)** tools;
**C)** tools:
**D)** tools and

**Answer:** C
**Why:** A colon introduces the list after a complete independent clause.

### Question 3

Which choice shows correct possession?

The ____ antennae were damaged in transit.

**A)** sensors
**B)** sensor's
**C)** sensors'
**D)** sensors's

**Answer:** C
**Why:** Plural sensors + possessive apostrophe after s → sensors’.

### Question 4

Which choice punctuates the interrupter with dashes?

The samples____ all collected before dawn____ were chilled immediately.

**A)** , all collected before dawn,
**B)** — all collected before dawn —
**C)** : all collected before dawn :
**D)** ; all collected before dawn ;

**Answer:** B
**Why:** Paired dashes can set off a nonessential interrupter (commas in A also work, but B matches dash focus).

### Question 5

Which choice correctly marks an essential clause?

The sensors that failed overnight ____ replaced by noon.

**A)** , were
**B)** were
**C)** ; were
**D)** : were

**Answer:** B
**Why:** Essential that-clause takes no comma before were.

### Question 6

Which series punctuation is clearest?

We packed lenses, batteries____ and spare cables.

**A)** batteries and
**B)** batteries, and
**C)** batteries; and
**D)** batteries: and

**Answer:** B
**Why:** Serial comma before and clarifies the three-item list.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 47: Punctuation — Dashes for Interrupters',
        'content': """# SAT Grammar · Standard English Conventions Pack 47
**Skill focus:** Punctuation — Dashes for Interrupters

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

### Question 2

Which choice correctly uses a colon?

The kit included three tools____ a wrench, a gauge, and a brush.

**A)** tools,
**B)** tools;
**C)** tools:
**D)** tools and

**Answer:** C
**Why:** A colon introduces the list after a complete independent clause.

### Question 3

Which choice shows correct possession?

The ____ antennae were damaged in transit.

**A)** sensors
**B)** sensor's
**C)** sensors'
**D)** sensors's

**Answer:** C
**Why:** Plural sensors + possessive apostrophe after s → sensors’.

### Question 4

Which choice punctuates the interrupter with dashes?

The samples____ all collected before dawn____ were chilled immediately.

**A)** , all collected before dawn,
**B)** — all collected before dawn —
**C)** : all collected before dawn :
**D)** ; all collected before dawn ;

**Answer:** B
**Why:** Paired dashes can set off a nonessential interrupter (commas in A also work, but B matches dash focus).

### Question 5

Which choice correctly marks an essential clause?

The sensors that failed overnight ____ replaced by noon.

**A)** , were
**B)** were
**C)** ; were
**D)** : were

**Answer:** B
**Why:** Essential that-clause takes no comma before were.

### Question 6

Which series punctuation is clearest?

We packed lenses, batteries____ and spare cables.

**A)** batteries and
**B)** batteries, and
**C)** batteries; and
**D)** batteries: and

**Answer:** B
**Why:** Serial comma before and clarifies the three-item list.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 48: Punctuation — Essential vs Nonessential Clauses',
        'content': """# SAT Grammar · Standard English Conventions Pack 48
**Skill focus:** Punctuation — Essential vs Nonessential Clauses

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

### Question 2

Which choice correctly uses a colon?

The kit included three tools____ a wrench, a gauge, and a brush.

**A)** tools,
**B)** tools;
**C)** tools:
**D)** tools and

**Answer:** C
**Why:** A colon introduces the list after a complete independent clause.

### Question 3

Which choice shows correct possession?

The ____ antennae were damaged in transit.

**A)** sensors
**B)** sensor's
**C)** sensors'
**D)** sensors's

**Answer:** C
**Why:** Plural sensors + possessive apostrophe after s → sensors’.

### Question 4

Which choice punctuates the interrupter with dashes?

The samples____ all collected before dawn____ were chilled immediately.

**A)** , all collected before dawn,
**B)** — all collected before dawn —
**C)** : all collected before dawn :
**D)** ; all collected before dawn ;

**Answer:** B
**Why:** Paired dashes can set off a nonessential interrupter (commas in A also work, but B matches dash focus).

### Question 5

Which choice correctly marks an essential clause?

The sensors that failed overnight ____ replaced by noon.

**A)** , were
**B)** were
**C)** ; were
**D)** : were

**Answer:** B
**Why:** Essential that-clause takes no comma before were.

### Question 6

Which series punctuation is clearest?

We packed lenses, batteries____ and spare cables.

**A)** batteries and
**B)** batteries, and
**C)** batteries; and
**D)** batteries: and

**Answer:** B
**Why:** Serial comma before and clarifies the three-item list.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 49: Punctuation — Series Commas and Clarity',
        'content': """# SAT Grammar · Standard English Conventions Pack 49
**Skill focus:** Punctuation — Series Commas and Clarity

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice punctuates the nonessential phrase correctly?

The novel____ first published in 1998____ still sells well.

**A)** , first published in 1998,
**B)**  first published in 1998 
**C)** ; first published in 1998;
**D)** : first published in 1998:

**Answer:** A
**Why:** Nonessential appositive needs enclosing commas.

### Question 2

Which choice correctly uses a colon?

The kit included three tools____ a wrench, a gauge, and a brush.

**A)** tools,
**B)** tools;
**C)** tools:
**D)** tools and

**Answer:** C
**Why:** A colon introduces the list after a complete independent clause.

### Question 3

Which choice shows correct possession?

The ____ antennae were damaged in transit.

**A)** sensors
**B)** sensor's
**C)** sensors'
**D)** sensors's

**Answer:** C
**Why:** Plural sensors + possessive apostrophe after s → sensors’.

### Question 4

Which choice punctuates the interrupter with dashes?

The samples____ all collected before dawn____ were chilled immediately.

**A)** , all collected before dawn,
**B)** — all collected before dawn —
**C)** : all collected before dawn :
**D)** ; all collected before dawn ;

**Answer:** B
**Why:** Paired dashes can set off a nonessential interrupter (commas in A also work, but B matches dash focus).

### Question 5

Which choice correctly marks an essential clause?

The sensors that failed overnight ____ replaced by noon.

**A)** , were
**B)** were
**C)** ; were
**D)** : were

**Answer:** B
**Why:** Essential that-clause takes no comma before were.

### Question 6

Which series punctuation is clearest?

We packed lenses, batteries____ and spare cables.

**A)** batteries and
**B)** batteries, and
**C)** batteries; and
**D)** batteries: and

**Answer:** B
**Why:** Serial comma before and clarifies the three-item list.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 50: Sense — Logical Comparisons',
        'content': """# SAT Grammar · Standard English Conventions Pack 50
**Skill focus:** Sense — Logical Comparisons

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes a logical comparison?

The new drone’s battery lasts longer than ____.

**A)** the old drone
**B)** the old drone’s
**C)** what the old
**D)** old

**Answer:** B
**Why:** Compare battery to battery (old drone’s), not battery to drone.

### Question 2

Which pronoun case is conventional?

The award went to Nora and ____.

**A)** I
**B)** me
**C)** myself
**D)** we

**Answer:** B
**Why:** Object of to takes me.

### Question 3

Which choice is logical?

Her score was higher than ____ of any other finalist.

**A)** those
**B)** that
**C)** them
**D)** these

**Answer:** B
**Why:** That stands for score (singular) of any other finalist.

### Question 4

Which choice avoids an illogical comparison?

This year’s rainfall exceeded ____.

**A)** last year
**B)** last year’s
**C)** of last year
**D)** last

**Answer:** B
**Why:** Compare rainfall to last year’s (rainfall), not to the year itself.

### Question 5

Which choice is best in the compound object?

Please contact either the lead technician or ____.

**A)** I
**B)** myself
**C)** me
**D)** we

**Answer:** C
**Why:** Object of contact takes me.

### Question 6

Which choice is conventional?

Few performers are as disciplined as ____.

**A)** her
**B)** she
**C)** herself
**D)** hers is performer

**Answer:** B
**Why:** Subject case she (as she is) is the formal conventional choice.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 51: Sense — Pronoun Case in Compounds',
        'content': """# SAT Grammar · Standard English Conventions Pack 51
**Skill focus:** Sense — Pronoun Case in Compounds

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice completes a logical comparison?

The new drone’s battery lasts longer than ____.

**A)** the old drone
**B)** the old drone’s
**C)** what the old
**D)** old

**Answer:** B
**Why:** Compare battery to battery (old drone’s), not battery to drone.

### Question 2

Which pronoun case is conventional?

The award went to Nora and ____.

**A)** I
**B)** me
**C)** myself
**D)** we

**Answer:** B
**Why:** Object of to takes me.

### Question 3

Which choice is logical?

Her score was higher than ____ of any other finalist.

**A)** those
**B)** that
**C)** them
**D)** these

**Answer:** B
**Why:** That stands for score (singular) of any other finalist.

### Question 4

Which choice avoids an illogical comparison?

This year’s rainfall exceeded ____.

**A)** last year
**B)** last year’s
**C)** of last year
**D)** last

**Answer:** B
**Why:** Compare rainfall to last year’s (rainfall), not to the year itself.

### Question 5

Which choice is best in the compound object?

Please contact either the lead technician or ____.

**A)** I
**B)** myself
**C)** me
**D)** we

**Answer:** C
**Why:** Object of contact takes me.

### Question 6

Which choice is conventional?

Few performers are as disciplined as ____.

**A)** her
**B)** she
**C)** herself
**D)** hers is performer

**Answer:** B
**Why:** Subject case she (as she is) is the formal conventional choice.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 52: Mixed — End Marks and Quotations',
        'content': """# SAT Grammar · Standard English Conventions Pack 52
**Skill focus:** Mixed — End Marks and Quotations

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice correctly punctuates the quotation?

Maya asked, ____

**A)** "Is the gauge calibrated"?
**B)** "Is the gauge calibrated?"
**C)** "Is the gauge calibrated"?.
**D)** "Is the gauge calibrated."?

**Answer:** B
**Why:** Question mark stays inside the closing quotation marks for a quoted question.

### Question 2

Which choice is conventional?

____ left the field kit on the bench?

**A)** Who
**B)** Whom
**C)** Whose
**D)** Who’se

**Answer:** A
**Why:** Who is subject of left.

### Question 3

Which choice is correct?

The drone returned to ____ nest on the roof.

**A)** it's
**B)** its
**C)** its'
**D)** it

**Answer:** B
**Why:** Possessive its has no apostrophe; it’s means it is.

### Question 4

Which choice is correct?

____ preparing the slides now.

**A)** Their
**B)** There
**C)** They’re
**D)** There’re

**Answer:** C
**Why:** They’re = they are.

### Question 5

To ____ should we send the calibrated weights?

**A)** who
**B)** whom
**C)** whoever
**D)** whose

**Answer:** B
**Why:** Object of preposition to takes whom.

### Question 6

Which end mark is conventional?

What an unexpected result____

**A)** .
**B)** ?
**C)** !
**D)** ;

**Answer:** C
**Why:** Exclamatory what-exclamation conventionally takes an exclamation point.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 53: Mixed — Who vs Whom in Context',
        'content': """# SAT Grammar · Standard English Conventions Pack 53
**Skill focus:** Mixed — Who vs Whom in Context

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice correctly punctuates the quotation?

Maya asked, ____

**A)** "Is the gauge calibrated"?
**B)** "Is the gauge calibrated?"
**C)** "Is the gauge calibrated"?.
**D)** "Is the gauge calibrated."?

**Answer:** B
**Why:** Question mark stays inside the closing quotation marks for a quoted question.

### Question 2

Which choice is conventional?

____ left the field kit on the bench?

**A)** Who
**B)** Whom
**C)** Whose
**D)** Who’se

**Answer:** A
**Why:** Who is subject of left.

### Question 3

Which choice is correct?

The drone returned to ____ nest on the roof.

**A)** it's
**B)** its
**C)** its'
**D)** it

**Answer:** B
**Why:** Possessive its has no apostrophe; it’s means it is.

### Question 4

Which choice is correct?

____ preparing the slides now.

**A)** Their
**B)** There
**C)** They’re
**D)** There’re

**Answer:** C
**Why:** They’re = they are.

### Question 5

To ____ should we send the calibrated weights?

**A)** who
**B)** whom
**C)** whoever
**D)** whose

**Answer:** B
**Why:** Object of preposition to takes whom.

### Question 6

Which end mark is conventional?

What an unexpected result____

**A)** .
**B)** ?
**C)** !
**D)** ;

**Answer:** C
**Why:** Exclamatory what-exclamation conventionally takes an exclamation point.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 54: Mixed — Its/It’s and Their/There/They’re',
        'content': """# SAT Grammar · Standard English Conventions Pack 54
**Skill focus:** Mixed — Its/It’s and Their/There/They’re

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice correctly punctuates the quotation?

Maya asked, ____

**A)** "Is the gauge calibrated"?
**B)** "Is the gauge calibrated?"
**C)** "Is the gauge calibrated"?.
**D)** "Is the gauge calibrated."?

**Answer:** B
**Why:** Question mark stays inside the closing quotation marks for a quoted question.

### Question 2

Which choice is conventional?

____ left the field kit on the bench?

**A)** Who
**B)** Whom
**C)** Whose
**D)** Who’se

**Answer:** A
**Why:** Who is subject of left.

### Question 3

Which choice is correct?

The drone returned to ____ nest on the roof.

**A)** it's
**B)** its
**C)** its'
**D)** it

**Answer:** B
**Why:** Possessive its has no apostrophe; it’s means it is.

### Question 4

Which choice is correct?

____ preparing the slides now.

**A)** Their
**B)** There
**C)** They’re
**D)** There’re

**Answer:** C
**Why:** They’re = they are.

### Question 5

To ____ should we send the calibrated weights?

**A)** who
**B)** whom
**C)** whoever
**D)** whose

**Answer:** B
**Why:** Object of preposition to takes whom.

### Question 6

Which end mark is conventional?

What an unexpected result____

**A)** .
**B)** ?
**C)** !
**D)** ;

**Answer:** C
**Why:** Exclamatory what-exclamation conventionally takes an exclamation point.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 55: Editing — Campus Maker-Space Rules',
        'content': """# SAT Grammar · Standard English Conventions Pack 55
**Skill focus:** Editing — Campus Maker-Space Rules

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice best revises the sentence for conventions?

Working late into the evening the inventory for the survey team were unfinished.

**A)** Working late into the evening, the inventory for the site were unfinished.
**B)** Working late into the evening, the team left the inventory unfinished.
**C)** Working late into the evening the inventory was unfinished by working.
**D)** Working late, inventory unfinished evening the.

**Answer:** B
**Why:** B fixes the dangling modifier and subject-verb issues by naming the team.

### Question 2

Which choice fixes agreement and punctuation?

The list of spare parts, including gaskets and seals, are on the bench.

**A)** The list of spare parts, including gaskets and seals, is on the bench.
**B)** The list of spare parts including gaskets and seals are on the bench.
**C)** The list of spare parts; including gaskets and seals; are on the bench.
**D)** The list of spare parts including, gaskets and seals, is on the bench.

**Answer:** A
**Why:** List is singular; nonessential including-phrase takes commas.

### Question 3

Which transition and boundary pair is conventional?

The trial failed on Monday____ the team redesigned the fixture on Tuesday.

**A)** Monday, the
**B)** Monday; the
**C)** Monday the
**D)** Monday: and the

**Answer:** B
**Why:** Semicolon joins two independents without a conjunction.

### Question 4

Which choice yields parallel structure?

Interns will label samples, enter metadata, and ____.

**A)** backup files are created
**B)** create backups
**C)** to create backups
**D)** backups creating

**Answer:** B
**Why:** Label / enter / create keeps parallel verbs.

### Question 5

Which choice places the modifier correctly?

____ the supervisor initialed the log.

**A)** After checking the seals,
**B)** The seals checking,
**C)** Checked the seals,
**D)** Seals,

**Answer:** A
**Why:** Participial phrase modifies the supervisor.

### Question 6

Which choice is concise and conventional?

Due to the fact that rain delayed staging, we paused.

**A)** Due to the fact that rain delayed staging, we paused.
**B)** Because rain delayed staging, we paused.
**C)** Rain delaying staging being why pausing occurred.
**D)** Rain; staging; paused; because.

**Answer:** B
**Why:** Because is concise and grammatical.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 56: Editing — Watershed Cleanup Brief',
        'content': """# SAT Grammar · Standard English Conventions Pack 56
**Skill focus:** Editing — Watershed Cleanup Brief

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice best revises the sentence for conventions?

Working late into the evening the inventory for the clinic were unfinished.

**A)** Working late into the evening, the inventory for the site were unfinished.
**B)** Working late into the evening, the team left the inventory unfinished.
**C)** Working late into the evening the inventory was unfinished by working.
**D)** Working late, inventory unfinished evening the.

**Answer:** B
**Why:** B fixes the dangling modifier and subject-verb issues by naming the team.

### Question 2

Which choice fixes agreement and punctuation?

The list of spare parts, including gaskets and seals, are on the bench.

**A)** The list of spare parts, including gaskets and seals, is on the bench.
**B)** The list of spare parts including gaskets and seals are on the bench.
**C)** The list of spare parts; including gaskets and seals; are on the bench.
**D)** The list of spare parts including, gaskets and seals, is on the bench.

**Answer:** A
**Why:** List is singular; nonessential including-phrase takes commas.

### Question 3

Which transition and boundary pair is conventional?

The trial failed on Monday____ the team redesigned the fixture on Tuesday.

**A)** Monday, the
**B)** Monday; the
**C)** Monday the
**D)** Monday: and the

**Answer:** B
**Why:** Semicolon joins two independents without a conjunction.

### Question 4

Which choice yields parallel structure?

Interns will label samples, enter metadata, and ____.

**A)** backup files are created
**B)** create backups
**C)** to create backups
**D)** backups creating

**Answer:** B
**Why:** Label / enter / create keeps parallel verbs.

### Question 5

Which choice places the modifier correctly?

____ the supervisor initialed the log.

**A)** After checking the seals,
**B)** The seals checking,
**C)** Checked the seals,
**D)** Seals,

**Answer:** A
**Why:** Participial phrase modifies the supervisor.

### Question 6

Which choice is concise and conventional?

Due to the fact that rain delayed staging, we paused.

**A)** Due to the fact that rain delayed staging, we paused.
**B)** Because rain delayed staging, we paused.
**C)** Rain delaying staging being why pausing occurred.
**D)** Rain; staging; paused; because.

**Answer:** B
**Why:** Because is concise and grammatical.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 57: Editing — Internship Offer Letter',
        'content': """# SAT Grammar · Standard English Conventions Pack 57
**Skill focus:** Editing — Internship Offer Letter

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice best revises the sentence for conventions?

Working late into the evening the inventory for the orchard cooperative were unfinished.

**A)** Working late into the evening, the inventory for the site were unfinished.
**B)** Working late into the evening, the team left the inventory unfinished.
**C)** Working late into the evening the inventory was unfinished by working.
**D)** Working late, inventory unfinished evening the.

**Answer:** B
**Why:** B fixes the dangling modifier and subject-verb issues by naming the team.

### Question 2

Which choice fixes agreement and punctuation?

The list of spare parts, including gaskets and seals, are on the bench.

**A)** The list of spare parts, including gaskets and seals, is on the bench.
**B)** The list of spare parts including gaskets and seals are on the bench.
**C)** The list of spare parts; including gaskets and seals; are on the bench.
**D)** The list of spare parts including, gaskets and seals, is on the bench.

**Answer:** A
**Why:** List is singular; nonessential including-phrase takes commas.

### Question 3

Which transition and boundary pair is conventional?

The trial failed on Monday____ the team redesigned the fixture on Tuesday.

**A)** Monday, the
**B)** Monday; the
**C)** Monday the
**D)** Monday: and the

**Answer:** B
**Why:** Semicolon joins two independents without a conjunction.

### Question 4

Which choice yields parallel structure?

Interns will label samples, enter metadata, and ____.

**A)** backup files are created
**B)** create backups
**C)** to create backups
**D)** backups creating

**Answer:** B
**Why:** Label / enter / create keeps parallel verbs.

### Question 5

Which choice places the modifier correctly?

____ the supervisor initialed the log.

**A)** After checking the seals,
**B)** The seals checking,
**C)** Checked the seals,
**D)** Seals,

**Answer:** A
**Why:** Participial phrase modifies the supervisor.

### Question 6

Which choice is concise and conventional?

Due to the fact that rain delayed staging, we paused.

**A)** Due to the fact that rain delayed staging, we paused.
**B)** Because rain delayed staging, we paused.
**C)** Rain delaying staging being why pausing occurred.
**D)** Rain; staging; paused; because.

**Answer:** B
**Why:** Because is concise and grammatical.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT Grammar · Conventions Pack 58: Editing — Science Olympiad Logistics',
        'content': """# SAT Grammar · Standard English Conventions Pack 58
**Skill focus:** Editing — Science Olympiad Logistics

Choose the response that makes the sentence clear and conventional.

## Questions

### Question 1

Which choice best revises the sentence for conventions?

Working late into the evening the inventory for the transit pilot were unfinished.

**A)** Working late into the evening, the inventory for the site were unfinished.
**B)** Working late into the evening, the team left the inventory unfinished.
**C)** Working late into the evening the inventory was unfinished by working.
**D)** Working late, inventory unfinished evening the.

**Answer:** B
**Why:** B fixes the dangling modifier and subject-verb issues by naming the team.

### Question 2

Which choice fixes agreement and punctuation?

The list of spare parts, including gaskets and seals, are on the bench.

**A)** The list of spare parts, including gaskets and seals, is on the bench.
**B)** The list of spare parts including gaskets and seals are on the bench.
**C)** The list of spare parts; including gaskets and seals; are on the bench.
**D)** The list of spare parts including, gaskets and seals, is on the bench.

**Answer:** A
**Why:** List is singular; nonessential including-phrase takes commas.

### Question 3

Which transition and boundary pair is conventional?

The trial failed on Monday____ the team redesigned the fixture on Tuesday.

**A)** Monday, the
**B)** Monday; the
**C)** Monday the
**D)** Monday: and the

**Answer:** B
**Why:** Semicolon joins two independents without a conjunction.

### Question 4

Which choice yields parallel structure?

Interns will label samples, enter metadata, and ____.

**A)** backup files are created
**B)** create backups
**C)** to create backups
**D)** backups creating

**Answer:** B
**Why:** Label / enter / create keeps parallel verbs.

### Question 5

Which choice places the modifier correctly?

____ the supervisor initialed the log.

**A)** After checking the seals,
**B)** The seals checking,
**C)** Checked the seals,
**D)** Seals,

**Answer:** A
**Why:** Participial phrase modifies the supervisor.

### Question 6

Which choice is concise and conventional?

Due to the fact that rain delayed staging, we paused.

**A)** Due to the fact that rain delayed staging, we paused.
**B)** Because rain delayed staging, we paused.
**C)** Rain delaying staging being why pausing occurred.
**D)** Rain; staging; paused; because.

**Answer:** B
**Why:** Because is concise and grammatical.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT Grammar',
        'space': 'sat-grammar',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 31: Harbor Cleanup Briefing Card',
        'content': """# SAT English · Expression of Ideas Pack 31
**Scenario:** Harbor Cleanup Briefing Card
**Skill emphasis:** transitions

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Harbor Cleanup Briefing Card. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the harbor cleanup briefing card confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Harbor Cleanup Briefing Card. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Harbor Cleanup Briefing Card?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 32: Youth Climate Summit Program Note',
        'content': """# SAT English · Expression of Ideas Pack 32
**Scenario:** Youth Climate Summit Program Note
**Skill emphasis:** rhetorical synthesis

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Youth Climate Summit Program Note. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the youth climate summit program note confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Youth Climate Summit Program Note. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Youth Climate Summit Program Note?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 33: Mobile Library Route Flyer',
        'content': """# SAT English · Expression of Ideas Pack 33
**Scenario:** Mobile Library Route Flyer
**Skill emphasis:** logical sequence

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Mobile Library Route Flyer. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the mobile library route flyer confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Mobile Library Route Flyer. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Mobile Library Route Flyer?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 34: Campus Pollinator Garden Proposal',
        'content': """# SAT English · Expression of Ideas Pack 34
**Scenario:** Campus Pollinator Garden Proposal
**Skill emphasis:** transitions

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Campus Pollinator Garden Proposal. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the campus pollinator garden proposal confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Campus Pollinator Garden Proposal. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Campus Pollinator Garden Proposal?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 35: Night-Bus Safety Tip Sheet',
        'content': """# SAT English · Expression of Ideas Pack 35
**Scenario:** Night-Bus Safety Tip Sheet
**Skill emphasis:** precision

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Night-Bus Safety Tip Sheet. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the night-bus safety tip sheet confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Night-Bus Safety Tip Sheet. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Night-Bus Safety Tip Sheet?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 36: Oral History Exhibit Brochure',
        'content': """# SAT English · Expression of Ideas Pack 36
**Scenario:** Oral History Exhibit Brochure
**Skill emphasis:** rhetorical synthesis

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Oral History Exhibit Brochure. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the oral history exhibit brochure confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Oral History Exhibit Brochure. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Oral History Exhibit Brochure?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 37: Student Maker Faire Welcome Script',
        'content': """# SAT English · Expression of Ideas Pack 37
**Scenario:** Student Maker Faire Welcome Script
**Skill emphasis:** logical sequence

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Student Maker Faire Welcome Script. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the student maker faire welcome script confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Student Maker Faire Welcome Script. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Student Maker Faire Welcome Script?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 38: River Gauge Crowdsource Invite',
        'content': """# SAT English · Expression of Ideas Pack 38
**Scenario:** River Gauge Crowdsource Invite
**Skill emphasis:** transitions

## Stimulus notes (use as directed in each question)

A student is drafting materials related to River Gauge Crowdsource Invite. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the river gauge crowdsource invite confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for River Gauge Crowdsource Invite. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in River Gauge Crowdsource Invite?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 39: Accessible Trail Map Legend Draft',
        'content': """# SAT English · Expression of Ideas Pack 39
**Scenario:** Accessible Trail Map Legend Draft
**Skill emphasis:** precision

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Accessible Trail Map Legend Draft. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the accessible trail map legend draft confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Accessible Trail Map Legend Draft. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Accessible Trail Map Legend Draft?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 40: Food Recovery Fridge Guidelines',
        'content': """# SAT English · Expression of Ideas Pack 40
**Scenario:** Food Recovery Fridge Guidelines
**Skill emphasis:** rhetorical synthesis

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Food Recovery Fridge Guidelines. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the food recovery fridge guidelines confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Food Recovery Fridge Guidelines. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Food Recovery Fridge Guidelines?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 41: Astronomy Night Host Remarks',
        'content': """# SAT English · Expression of Ideas Pack 41
**Scenario:** Astronomy Night Host Remarks
**Skill emphasis:** logical sequence

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Astronomy Night Host Remarks. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the astronomy night host remarks confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Astronomy Night Host Remarks. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Astronomy Night Host Remarks?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 42: Bilingual Clinic Wayfinding Poster',
        'content': """# SAT English · Expression of Ideas Pack 42
**Scenario:** Bilingual Clinic Wayfinding Poster
**Skill emphasis:** transitions

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Bilingual Clinic Wayfinding Poster. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the bilingual clinic wayfinding poster confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Bilingual Clinic Wayfinding Poster. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Bilingual Clinic Wayfinding Poster?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 43: Theater Caption Volunteer Guide',
        'content': """# SAT English · Expression of Ideas Pack 43
**Scenario:** Theater Caption Volunteer Guide
**Skill emphasis:** precision

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Theater Caption Volunteer Guide. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the theater caption volunteer guide confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Theater Caption Volunteer Guide. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Theater Caption Volunteer Guide?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 44: Neighborhood Cool-Roof Pledge',
        'content': """# SAT English · Expression of Ideas Pack 44
**Scenario:** Neighborhood Cool-Roof Pledge
**Skill emphasis:** rhetorical synthesis

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Neighborhood Cool-Roof Pledge. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the neighborhood cool-roof pledge confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Neighborhood Cool-Roof Pledge. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Neighborhood Cool-Roof Pledge?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 45: High School Podcast Style Sheet',
        'content': """# SAT English · Expression of Ideas Pack 45
**Scenario:** High School Podcast Style Sheet
**Skill emphasis:** logical sequence

## Stimulus notes (use as directed in each question)

A student is drafting materials related to High School Podcast Style Sheet. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the high school podcast style sheet confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for High School Podcast Style Sheet. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in High School Podcast Style Sheet?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 46: Tool Library Borrowing FAQ',
        'content': """# SAT English · Expression of Ideas Pack 46
**Scenario:** Tool Library Borrowing FAQ
**Skill emphasis:** transitions

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Tool Library Borrowing FAQ. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the tool library borrowing faq confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Tool Library Borrowing FAQ. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Tool Library Borrowing FAQ?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 47: Wetland Class Field Trip Permission Intro',
        'content': """# SAT English · Expression of Ideas Pack 47
**Scenario:** Wetland Class Field Trip Permission Intro
**Skill emphasis:** precision

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Wetland Class Field Trip Permission Intro. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the wetland class field trip permission intro confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Wetland Class Field Trip Permission Intro. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Wetland Class Field Trip Permission Intro?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Expression of Ideas Pack 48: Open Data Portal Launch Email',
        'content': """# SAT English · Expression of Ideas Pack 48
**Scenario:** Open Data Portal Launch Email
**Skill emphasis:** rhetorical synthesis

## Stimulus notes (use as directed in each question)

A student is drafting materials related to Open Data Portal Launch Email. Some questions ask for the best transition, the most precise wording, logical sequence, or the note that best accomplishes a stated goal.

## Questions

### Question 1

Which transition best completes the sentence?

Early drafts of the open data portal launch email confused readers. ____, the revised version uses fewer words and clearer headings.

**A)** In other words
**B)** By contrast
**C)** For example
**D)** Meanwhile

**Answer:** B
**Why:** By contrast signals a shift from confusing drafts to a clearer revision.

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

A student wants to emphasize logistical readiness for Open Data Portal Launch Email. Which sentence should be added?

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

Which concluding sentence best supports persuading readers to participate in Open Data Portal Launch Email?

**A)** If you can spare an hour, your help will make the plan visible and workable for everyone involved.
**B)** Participation is irrelevant to outcomes.
**C)** This document ends now without a request.
**D)** Only experts thousands of miles away can assist.

**Answer:** A
**Why:** A issues a clear, reasonable call to action aligned with persuasion.

### Question 7

Which order of sentences is most logical?

(1) Post the final checklist on the door. (2) Gather feedback from Friday’s rehearsal. (3) Revise unclear steps.

**A)** 1–2–3
**B)** 2–3–1
**C)** 3–1–2
**D)** 1–3–2

**Answer:** B
**Why:** Gather feedback, revise, then post the final checklist.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 31: Quiet Study Pods in the Transit Hub',
        'content': """# SAT English · Mixed R&W Timed Set Pack 31
**Topic:** Quiet Study Pods in the Transit Hub

A city placed three glass study pods beside a busy transit concourse. Signage asks users to keep calls under two minutes. A short pilot found average occupancy at 74 percent on weekdays.

## Questions

### Question 1

Based on the stimulus for Quiet Study Pods in the Transit Hub, which choice best states a central detail?

A city placed three glass study pods beside a busy transit concourse. Signage asks users to keep calls under two minutes. A short pilot found average occupancy at 74 percent on weekdays.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Quiet Study Pods in the Transit Hub posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 32: Campus Rain-Garden Mentorship',
        'content': """# SAT English · Mixed R&W Timed Set Pack 32
**Topic:** Campus Rain-Garden Mentorship

First-year students paired with facilities staff to plant a rain garden beside the science wing. Mulch delivery ran late, so planting shifted from Tuesday to Thursday without changing the plant list.

## Questions

### Question 1

Based on the stimulus for Campus Rain-Garden Mentorship, which choice best states a central detail?

First-year students paired with facilities staff to plant a rain garden beside the science wing. Mulch delivery ran late, so planting shifted from Tuesday to Thursday without changing the plant list.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Campus Rain-Garden Mentorship posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 33: Caption Accuracy Drills for Student A/V Crew',
        'content': """# SAT English · Mixed R&W Timed Set Pack 33
**Topic:** Caption Accuracy Drills for Student A/V Crew

The A/V club ran timed caption drills before livestreaming debates. Error rates fell after a two-person check system mirrored professional booths.

## Questions

### Question 1

Based on the stimulus for Caption Accuracy Drills for Student A/V Crew, which choice best states a central detail?

The A/V club ran timed caption drills before livestreaming debates. Error rates fell after a two-person check system mirrored professional booths.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Caption Accuracy Drills for Student A/V Crew posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 34: Neighborhood Battery Swap Locker Pilot',
        'content': """# SAT English · Mixed R&W Timed Set Pack 34
**Topic:** Neighborhood Battery Swap Locker Pilot

A corner store hosted a locker for shared e-bike batteries. Users scanned a library card; average wait dropped from eleven minutes to four after a second locker arrived.

## Questions

### Question 1

Based on the stimulus for Neighborhood Battery Swap Locker Pilot, which choice best states a central detail?

A corner store hosted a locker for shared e-bike batteries. Users scanned a library card; average wait dropped from eleven minutes to four after a second locker arrived.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Neighborhood Battery Swap Locker Pilot posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 35: Multilingual Homework Hotline Scripts',
        'content': """# SAT English · Mixed R&W Timed Set Pack 35
**Topic:** Multilingual Homework Hotline Scripts

Counselors drafted hotline scripts in three languages with the same logical order: identify the course, restate the question, then offer a strategy—not the final answer.

## Questions

### Question 1

Based on the stimulus for Multilingual Homework Hotline Scripts, which choice best states a central detail?

Counselors drafted hotline scripts in three languages with the same logical order: identify the course, restate the question, then offer a strategy—not the final answer.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Multilingual Homework Hotline Scripts posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 36: Indoor Seedling Swap on Smoke Days',
        'content': """# SAT English · Mixed R&W Timed Set Pack 36
**Topic:** Indoor Seedling Swap on Smoke Days

When outdoor air quality worsened, the gardening club moved its seedling swap to the cafeteria and posted a simple flow: check in, choose trays, sanitize tools, exit.

## Questions

### Question 1

Based on the stimulus for Indoor Seedling Swap on Smoke Days, which choice best states a central detail?

When outdoor air quality worsened, the gardening club moved its seedling swap to the cafeteria and posted a simple flow: check in, choose trays, sanitize tools, exit.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Indoor Seedling Swap on Smoke Days posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 37: Open-Source Map of Drinking Fountains',
        'content': """# SAT English · Mixed R&W Timed Set Pack 37
**Topic:** Open-Source Map of Drinking Fountains

Students mapped working fountains after complaints about sealed units. The map’s legend distinguished refrigerated, bottle-filler, and out-of-service icons.

## Questions

### Question 1

Based on the stimulus for Open-Source Map of Drinking Fountains, which choice best states a central detail?

Students mapped working fountains after complaints about sealed units. The map’s legend distinguished refrigerated, bottle-filler, and out-of-service icons.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Open-Source Map of Drinking Fountains posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 38: Peer-Led Lab Notebook Clinics',
        'content': """# SAT English · Mixed R&W Timed Set Pack 38
**Topic:** Peer-Led Lab Notebook Clinics

Upper-year mentors hosted drop-in clinics on dated entries and significant figures. Faculty still graded notebooks; mentors only coached process.

## Questions

### Question 1

Based on the stimulus for Peer-Led Lab Notebook Clinics, which choice best states a central detail?

Upper-year mentors hosted drop-in clinics on dated entries and significant figures. Faculty still graded notebooks; mentors only coached process.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Peer-Led Lab Notebook Clinics posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 39: Sunday Museum Sketch Hours',
        'content': """# SAT English · Mixed R&W Timed Set Pack 39
**Topic:** Sunday Museum Sketch Hours

The museum opened galleries an hour early on Sundays for sketchers with soft graphite only. Guarding staff reported no increase in incidents versus regular hours.

## Questions

### Question 1

Based on the stimulus for Sunday Museum Sketch Hours, which choice best states a central detail?

The museum opened galleries an hour early on Sundays for sketchers with soft graphite only. Guarding staff reported no increase in incidents versus regular hours.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Sunday Museum Sketch Hours posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    },
    {
        'title': 'SAT English · Mixed R&W Timed Set Pack 40: Shared Refrigerator Label Audit',
        'content': """# SAT English · Mixed R&W Timed Set Pack 40
**Topic:** Shared Refrigerator Label Audit

A dorm council audited unlabeled food after repeated disposal disputes. A color-dot system by floor cut anonymous complaints in half within a month.

## Questions

### Question 1

Based on the stimulus for Shared Refrigerator Label Audit, which choice best states a central detail?

A dorm council audited unlabeled food after repeated disposal disputes. A color-dot system by floor cut anonymous complaints in half within a month.

**A)** The pilot or program includes a concrete operational detail (rules, rates, or process steps).
**B)** The passage proves the idea failed universally.
**C)** No measurable information appears.
**D)** The only topic is ancient mythology.

**Answer:** A
**Why:** Each mixed set stimulus includes concrete operational detail.

### Question 2

Which transition best links a problem sentence to a solution sentence?

**A)** In other words
**B)** Therefore
**C)** Meanwhile unrelatedly
**D)** For instance forever

**Answer:** B
**Why:** Therefore signals consequence from problem to solution.

### Question 3

Which choice completes the text so that it conforms to conventions?

The checklist was clear____ volunteers still asked one clarifying question.

**A)** clear, volunteers
**B)** clear; volunteers
**C)** clear volunteers
**D)** clear: and volunteers

**Answer:** B
**Why:** Semicolon joins two independent clauses.

### Question 4

Rhetorical synthesis notes: (1) name the program, (2) give one measurable result, (3) invite new volunteers on Saturdays. Which sentence works best?

**A)** Shared Refrigerator Label Audit posted a measurable improvement in its pilot and welcomes new volunteers on Saturdays.
**B)** Programs exist. Saturdays exist. Numbers exist.
**C)** Volunteers should never see results.
**D)** The program has no name and no times.

**Answer:** A
**Why:** A hits name, measurable result framing, and Saturday invite.

### Question 5

Which sentence should come first in a logical how-to sequence?

**A)** Celebrate completion with snacks.
**B)** Gather required materials and review safety rules.
**C)** Post photos before reading instructions.
**D)** Skip the checklist entirely.

**Answer:** B
**Why:** Materials and safety precede execution and celebration.

### Question 6

Which choice is most precise?

**A)** Things got better somehow.
**B)** Weekday occupancy averaged 74 percent during the pilot.
**C)** Lots of people maybe came.
**D)** Success was vibes-based only.

**Answer:** B
**Why:** B offers a specific, checkable figure.

### Question 7

As used in a caption draft, “concise” most nearly means

**A)** Wordy and repetitive.
**B)** Brief while still clear.
**C)** Printed in gold ink.
**D)** Numerically odd.

**Answer:** B
**Why:** Concise means brief and clear—common craft/expression crossover.

---

*Original practice aligned to Digital SAT domains. Not College Board exam verbatim.*
""",
        'category': 'SAT English',
        'space': 'sat-english',
    }
]
