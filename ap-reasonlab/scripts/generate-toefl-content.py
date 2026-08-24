#!/usr/bin/env python3
"""Bulk-generate TOEFL-aligned markdown documents into managed-content.json."""
from __future__ import annotations

import json
import random
import string
import time
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "managed-content.json"

NOW_MS = int(time.time() * 1000)


def rid() -> str:
    h = format(random.getrandbits(32), "x")[:8]
    s = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"m-doc-toefl-{h}-{s}"


def word_count(text: str) -> int:
    return len(text.split())


def doc(title: str, content: str, category: str, space: str) -> dict:
    return {
        "id": rid(),
        "title": title,
        "content": content,
        "category": category,
        "updatedAt": NOW_MS,
        "area": "english",
        "space": space,
    }


def migrate_writing_space(data: dict) -> int:
    n = 0
    for key in ("files", "documents"):
        for item in data.get(key, []):
            if item.get("area") == "english" and item.get("space") == "writing":
                item["space"] = "toefl-writing"
                n += 1
    return n


def inject_documents(data: dict, candidates: list[dict]) -> tuple[list[dict], list[str]]:
    existing = {(d.get("space"), d.get("title")) for d in data.get("documents", [])}
    ids = {d.get("id") for d in data.get("documents", [])}
    added: list[dict] = []
    skipped: list[str] = []
    for d in candidates:
        key = (d.get("space"), d.get("title"))
        if key in existing:
            skipped.append(d["title"])
            continue
        while d["id"] in ids:
            d["id"] = rid()
        ids.add(d["id"])
        existing.add(key)
        added.append(d)
    if "documents" not in data:
        data["documents"] = []
    data["documents"].extend(added)
    return added, skipped



# --- Academic passage topics (embedded) ---
ACADEMIC_PASSAGES = [
    {'title': 'The Hidden Chemistry of Soil Carbon', 'discipline': 'Environmental Science', 'sentences': ["Scientists have long treated soil as little more than a passive holder for plant roots, yet modern research reveals it as one of Earth's most active carbon reservoirs.", 'When organic matter from fallen leaves and decaying organisms enters the ground, microorganisms break complex molecules into simpler compounds.', 'Some of those compounds bind tightly to clay particles, slowing further decomposition and storing carbon for decades or even centuries.', 'This process, often called humification, helps explain why forests can continue removing carbon dioxide from the atmosphere long after trees stop growing rapidly.', 'Researchers now measure soil respiration—the release of carbon dioxide by microbes—to estimate whether a landscape is a net carbon sink or source.', 'Temperature and moisture strongly influence these measurements; warm, wet conditions typically accelerate microbial activity and increase respiration rates.', 'Agricultural practices such as no-till farming and cover cropping can raise soil organic matter by reducing erosion and returning biomass to the ground.', 'However, repeated plowing exposes buried carbon to oxygen, allowing microbes to convert stable stores back into atmospheric gas.', 'Satellite imagery and ground sensors are increasingly combined to map soil moisture and vegetation cover at regional scales.', 'These maps help policymakers target reforestation and restoration projects where they may yield the largest climate benefits.', 'Critics caution that soil carbon gains can be reversed by drought, fire, or future land-use change, so long-term monitoring is essential.', 'Despite uncertainties, soil science has shifted from a specialty field to a central part of climate strategy discussions worldwide.', 'Understanding how roots, fungi, and minerals interact may determine whether nations meet emissions targets without relying solely on technology.', 'Field experiments across continents show that even modest increases in soil organic matter can improve water retention and crop resilience.', 'For students of ecology, the lesson is clear: the ground beneath our feet is not inert; it breathes, stores, and releases carbon in patterns that shape global climate.']},
    {'title': 'Roman Aqueducts and the Engineering of Empire', 'discipline': 'History', 'sentences': ["The Roman Empire's ability to supply fresh water to cities far from natural springs remains one of antiquity's most impressive technical achievements.", 'Aqueducts were not simple pipes; they were graded channels that used gravity to move water across valleys and through hills.', 'Engineers calculated slopes carefully—too steep and the flow would erode the channel; too shallow and sediment would settle and block the line.', 'Where obstacles appeared, builders constructed arcades of stone arches that still stand in France, Spain, and North Africa.', 'Tunnels driven through mountains relied on vertical shafts that allowed surveyors to maintain direction from above ground.', 'Public fountains, baths, and latrines depended on this infrastructure, linking hygiene to urban identity and imperial pride.', 'Wealthy households could tap private branches, but most citizens accessed water at neighborhood basins that also served as social meeting points.', 'Maintenance crews cleared vegetation, repaired leaks, and measured flow at distribution tanks called castella.', 'Legal codes assigned water rights and punished unauthorized tapping, showing that supply was both a technical and administrative challenge.', 'After the western empire fragmented, many aqueducts fell into disrepair, though some continued operating under medieval municipalities.', 'Modern historians compare aqueduct capacity to population estimates to infer urban growth and daily consumption patterns.', 'Recent archaeological surveys use ground-penetrating radar to locate buried channels without destructive excavation.', 'The engineering principles—continuous gradient, sediment control, and modular construction—influenced later canal systems in Europe and the Americas.', 'Students examining primary inscriptions on aqueduct monuments find dedications to emperors and local patrons, revealing how infrastructure doubled as political propaganda.', 'Today, tourists photograph the Pont du Gard in France, yet its original purpose was mundane: delivering water to the colony at Nîmes.', "That gap between monument and utility reminds us that Rome's legacy combines spectacle with everyday logistics that sustained millions."]},
    {'title': 'How Urban Heat Islands Reshape City Life', 'discipline': 'Urban Studies', 'sentences': ['On summer evenings, thermometers often read several degrees higher in downtown districts than in nearby suburbs—a phenomenon called the urban heat island effect.', 'Dark pavement, rooftops, and sparse vegetation absorb solar energy during the day and release it slowly after sunset.', 'Tall buildings trap warm air and reduce wind flow, while air conditioners exhaust heat into already warm streets.', 'Public health officials worry because elevated nighttime temperatures prevent bodies from cooling, increasing risks for elderly residents and outdoor workers.', 'Energy demand spikes as households run cooling systems longer, which in turn feeds more waste heat back into the environment.', 'Researchers deploy mobile sensor networks and satellite thermal imagery to map hotspots block by block.', 'These maps frequently align with historical patterns of redlining and industrial zoning, raising questions about environmental justice.', 'Cities respond with reflective cool roofs, expanded tree canopies, and light-colored paving materials that raise albedo.', 'Green roofs combine insulation with evapotranspiration, though installation costs limit adoption in lower-income neighborhoods without subsidies.', 'Some planners redesign street grids to channel breezes from rivers or lakes toward residential zones.', 'Community gardens serve dual roles as food sources and microclimates that lower local temperatures through shade and moisture.', 'Modeling studies suggest that coordinated retrofits could cut peak summer temperatures by two to three degrees in dense cores.', 'However, benefits depend on regional climate; in arid cities, irrigation for new vegetation must be managed sustainably.', 'Transportation policy intersects with heat planning when cities expand transit and reduce asphalt parking lots in favor of permeable surfaces.', 'For policymakers, heat islands illustrate how design choices made decades ago continue to shape health outcomes and energy bills today.', "Understanding these feedback loops is essential as more of the world's population concentrates in metropolitan regions."]},
    {'title': 'Memory Consolidation During Sleep', 'discipline': 'Neuroscience', 'sentences': ['Sleep was once dismissed as passive downtime, yet neuroscientists now treat it as an active period when the brain reorganizes learning from the previous day.', 'During slow-wave sleep, synchronized firing patterns replay sequences of activity that occurred while subjects practiced tasks or studied material.', 'This replay is thought to strengthen synaptic connections in the hippocampus and gradually transfer stable memories to the neocortex.', 'Rapid eye movement sleep, associated with vivid dreams, appears especially important for integrating emotional content and procedural skills.', 'Laboratory studies show that people who nap after learning vocabulary retain more words than those who stay awake for an equivalent interval.', 'Sleep deprivation disrupts these processes; students pulling all-nighters often recognize familiar facts yet struggle to apply them flexibly.', 'Pharmaceutical experiments targeting sleep stages remain controversial because artificially boosting one phase may suppress another.', 'Neuroimaging reveals that sleep loss reduces activity in the prefrontal cortex, impairing judgment and working memory even when subjects feel alert.', 'Educators increasingly discuss school start times in light of adolescent circadian rhythms, which naturally shift toward later sleep onset.', 'Shift workers face chronic partial deprivation, correlating with higher error rates in medical and transportation settings.', 'Public campaigns emphasize consistent bedtimes and limiting screen exposure before sleep because blue light delays melatonin release.', 'Some researchers explore targeted memory reactivation, playing subtle cues linked to daytime learning while subjects sleep.', 'Early results suggest modest gains, but ethical questions arise about consent and the boundaries of cognitive enhancement.', 'Evolutionary theories propose that sleep originally protected early humans from nocturnal predators while allowing neural maintenance.', "Whatever its origins, sleep's role in consolidation implies that rest is not the opposite of learning but a required phase of it.", 'For anyone preparing for high-stakes exams, the evidence supports spaced study paired with adequate sleep rather than last-minute cramming alone.']},
    {'title': 'Trade Networks of the Indian Ocean', 'discipline': 'History', 'sentences': ['Long before European ships dominated global commerce, merchants sailed the Indian Ocean in seasonal cycles driven by monsoon winds.', 'From East Africa to Indonesia, ports exchanged spices, textiles, precious metals, and ideas across linguistic and religious boundaries.', 'Arab navigators compiled charts and star lists that guided voyages without modern instruments, relying on latitude observations and coastal landmarks.', 'Chinese treasure fleets under the Ming dynasty visited Indian ports, exchanging porcelain and silk for pepper and ivory before political shifts curtailed expeditions.', 'Swahili city-states on the African coast blended Bantu language with Arabic script, producing chronicles that document trade wealth and urban architecture.', 'Indian Ocean commerce rarely depended on centralized empires; instead, diaspora communities maintained credit networks and warehouse systems.', 'Islam spread along these routes not only through missionaries but through the trust relationships that linked distant trading partners.', 'Archaeologists recover glass beads and ceramic shards that trace product flows when written records are sparse.', 'Shipwrecks off Oman and Indonesia preserve hull construction techniques combining planks sewn with coconut fiber or iron nails.', 'European entry in the sixteenth century redirected some traffic around the Cape of Good Hope, yet local traders adapted by supplying ports newly integrated into Atlantic circuits.', 'Historians debate whether Indian Ocean exchange was proto-globalization or a distinct regional system with its own norms of diplomacy and contract.', 'Environmental historians note that demand for cloves and nutmeg motivated violent competition among European companies seeking monopoly plantations.', 'Today, shipping lanes through the Strait of Malacca carry container traffic that echoes older patterns of concentration at narrow passages.', 'Studying these networks clarifies how technology, wind patterns, and cultural brokerage—not military conquest alone—shaped premodern economies.', 'For students, the Indian Ocean offers a corrective to narratives that treat world trade as a recent European invention.']},
    {'title': 'Plate Tectonics and Earthquake Prediction', 'discipline': 'Geology', 'sentences': ["Earth's outer shell is divided into plates that move slowly atop the semi-fluid mantle.", 'At divergent boundaries, magma rises and creates new ocean floor; at convergent boundaries, one plate may slide beneath another.', 'The friction along locked fault segments stores elastic energy until an earthquake releases it.', 'Seismologists deploy networks of sensors to record primary and secondary waves that reveal epicenter depth and magnitude.', 'Early warning systems send alerts seconds before destructive shaking reaches cities, allowing trains to brake and surgeons to pause.', 'Building codes in active regions require flexible frames and base isolation to absorb ground motion.', 'Tsunami risk follows submarine quakes that displace water columns, prompting coastal evacuation maps and sirens.', 'Prediction of exact times remains elusive because small initial conditions cascade unpredictably in complex fault systems.', 'Paleoseismology digs trenches across faults to date prehistoric ruptures and estimate recurrence intervals.', 'Public education focuses on drop-cover-hold drills and emergency kits rather than false certainty about timing.', 'Insurance markets and urban planning increasingly incorporate probabilistic hazard models instead of deterministic forecasts.', 'Understanding plate motion also explains mountain building, volcanic arcs, and the distribution of mineral resources.', 'GPS stations now measure millimeter-scale crustal strain, confirming that continents continue to drift measurably each year.', 'For communities on plate boundaries, geology is not abstract theory but a guide to infrastructure investment and resilience planning.']},
    {'title': 'Photosynthesis and Global Food Security', 'discipline': 'Biology', 'sentences': ['Photosynthesis converts light energy into chemical bonds in glucose, sustaining nearly all food webs on land.', 'Chloroplasts capture photons with pigment molecules; electrons flow through proteins that pump protons to build ATP.', 'The Calvin cycle fixes carbon dioxide into sugars using enzyme rubisco, which also reacts with oxygen in a competing process.', 'Crop breeders seek varieties with faster carbon fixation or more efficient rubisco to raise yields without expanding farmland.', 'Climate change alters growing seasons and drought frequency, stressing plants and reducing photosynthetic rates.', 'Artificial leaf prototypes attempt to mimic natural pathways for renewable fuel production in laboratories.', 'Deforestation removes active photosynthetic surface area, releasing stored carbon and warming the planet further.', 'Urban agriculture experiments use LED spectra tuned to wavelengths leaves absorb most efficiently.', 'Nitrogen and phosphorus fertilizers boost growth but runoff can trigger algal blooms that block light in waterways.', 'Symbiotic relationships between legumes and bacteria fix atmospheric nitrogen, reducing fertilizer dependence in some rotations.', 'Satellite vegetation indices monitor crop health across continents, guiding humanitarian aid when drought strikes.', 'Food security debates weigh genetic modification, land rights, and storage infrastructure alongside biological limits of photosynthesis.', 'Students learning biochemistry see photosynthesis as a bridge between physics of light and chemistry of metabolism.', 'Future agricultural policy may depend as much on protecting photosynthetic capacity as on trade agreements and subsidies.']},
    {'title': 'The Printing Press and Public Sphere', 'discipline': 'History', 'sentences': ["Johannes Gutenberg's movable-type press, developed around the mid-fifteenth century, lowered the cost of reproducing texts dramatically.", 'Previously, scribes copied manuscripts by hand, limiting circulation to elites in monasteries and courts.', 'Printed Bibles and pamphlets enabled wider literacy debates during the Reformation as readers compared translations.', 'Governments responded with censorship laws and licensing systems fearing uncontrolled opinion.', 'Scientific societies used print to share observations quickly, accelerating correction and cumulative knowledge.', 'Newspapers emerged in mercantile cities, mixing commercial notices with political commentary.', 'Historians link print culture to the rise of nationalism as standardized languages reached provincial audiences.', 'Illustrated broadsheets spread news of disasters and royal ceremonies, shaping public emotion at a distance.', 'Printing also fueled misinformation; forged royal decrees and sensational crime reports circulated alongside sober treatises.', 'The technology spread along trade routes to Ottoman lands, Korea, and the Americas with local adaptations.', 'Comparing print to digital media today highlights recurring questions about gatekeepers, virality, and trust.', "Archival studies trace how typography and layout influenced readers' perception of authority.", 'For media historians, the press marks a transition from oral tradition to mass readership that redefined politics and science.', 'Understanding that transition helps explain contemporary struggles over platform regulation and information quality.']},
    {'title': 'Behavioral Economics and Choice Architecture', 'discipline': 'Social Science', 'sentences': ['Classical economics often assumed rational actors who maximize utility with complete information.', 'Behavioral economists document systematic biases: loss aversion, present bias, and overconfidence among others.', 'Experiments in controlled labs and field settings show that default options strongly influence retirement savings enrollment.', 'Governments apply nudges—such as organ donation opt-out systems—to improve social outcomes without banning choices.', 'Critics argue that nudges may manipulate citizens subtly and disproportionately affect less educated groups.', 'Transparency and opt-out visibility are proposed safeguards to preserve autonomy while retaining benefits.', 'Marketing firms have long exploited framing effects; public policy adoption raises ethical stakes.', 'Randomized controlled trials in development economics test interventions like labeled savings jars or SMS reminders.', 'Neuroscience imaging associates certain biases with rapid emotional processing in limbic regions.', 'Policy designers map choice architecture in cafeterias, tax forms, and energy bills to promote healthier or greener decisions.', 'International institutions publish guidelines on when nudging is appropriate versus when mandates are necessary.', 'Students encounter these ideas when comparing libertarian paternalism to traditional regulation.', 'The field bridges psychology and economics, offering tools for healthcare adherence and financial literacy programs.', 'Debate continues over measurement, replication, and cultural variation in bias strength across societies.']},
    {'title': 'Coral Reef Ecology Under Stress', 'discipline': 'Marine Biology', 'sentences': ['Coral reefs occupy less than one percent of the ocean floor yet support roughly a quarter of marine species.', 'Corals are animals that host photosynthetic algae called zooxanthellae within their tissues.', 'When water temperatures exceed typical ranges, corals expel algae, turning white in bleaching events.', 'Without algae, corals lose most of their energy supply and may die if stress persists.', 'Ocean acidification reduces carbonate availability, making skeleton formation harder for polyps and shellfish.', 'Overfishing removes herbivores that graze algae, allowing seaweed to smother recovering reefs.', 'Sediment from coastal development blocks light and clogs coral feeding structures.', 'Marine protected areas restrict destructive practices and monitor recovery with diver surveys and remote video.', 'Restoration projects attach lab-grown fragments to substrates, though scale remains limited compared to reef extent.', 'Indigenous communities in the Pacific manage tabu zones that have preserved local biodiversity for generations.', 'Climate models project more frequent marine heatwaves, prompting discussions about assisted migration or selective breeding.', 'Tourism revenue motivates some nations to invest in reef health, yet foot traffic and sunscreen chemicals add local stress.', 'Remote sensing detects bleaching from aircraft and satellites, guiding emergency response funds.', 'Reefs also protect shorelines by dissipating wave energy, linking ecological health to human property and safety.']},
    {'title': 'Democratic Reform in Nineteenth-Century Britain', 'discipline': 'History', 'sentences': ['Reform movements in nineteenth-century Britain responded to rapid urbanization and industrial pollution.', 'Chartists petitioned Parliament for expanded voting rights, while factory acts limited child labor hours.', 'Public health boards investigated cholera outbreaks, linking contaminated water to disease before germ theory fully matured.', 'Newspapers and pamphlets spread reform ideas, creating pressure on legislators who feared unrest.', 'Women participated through temperance societies and education campaigns, though full suffrage remained decades away.', 'Parliament gradually extended the franchise through Reform Acts that rebalanced representation toward growing cities.', 'Historians debate whether change came primarily from elite conscience or grassroots organizing.', 'Archival petitions reveal signatures from workers articulating grievances in their own words.', 'Comparing British reform to continental revolutions highlights paths that avoided violent overthrow.', 'Legacy institutions such as public libraries and museums emerged from the same civic reform impulse.', 'Students analyzing primary sources see how economic crisis and moral argument intertwined in policy debates.', 'The period illustrates how democratic institutions evolve incrementally under social pressure.']},
    {'title': 'The Microbiome and Human Health', 'discipline': 'Biology', 'sentences': ['Trillions of microorganisms inhabit the human digestive tract, influencing digestion, immunity, and even mood.', 'Dietary fiber feeds beneficial bacteria that produce short-chain fatty acids supporting colon health.', 'Antibiotic courses can disrupt microbial balance, sometimes allowing harmful strains to proliferate.', 'Researchers transplant microbiota from donors to treat certain recurrent infections under strict protocols.', 'Birth mode and early feeding patterns correlate with initial microbial colonization in infants.', 'Probiotic supplements show mixed results because strains and doses vary widely in commercial products.', 'Metagenomic sequencing identifies species abundance without culturing each organism separately.', 'Links between microbiome composition and obesity remain correlational, prompting careful intervention trials.', 'Hygiene hypothesis discussions examine whether reduced childhood microbe exposure affects allergy rates.', 'Personalized nutrition startups promise tailored diets based on microbial profiles, though evidence is emerging.', 'Ethical review boards oversee sample collection and privacy when genetic and microbial data combine.', 'Understanding symbiosis reframes humans as ecosystems rather than isolated individuals.']},
    {'title': 'Renewable Energy Storage Challenges', 'discipline': 'Engineering', 'sentences': ['In the study of renewable energy storage challenges, International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Scholars publish peer-reviewed studies that subject claims to statistical tests and independent verification.', 'Teaching materials translate complex findings into accessible language without oversimplifying uncertainty.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Simulation software lets researchers test scenarios that would be impractical or unethical in real settings.', 'Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.']},
    {'title': 'Child Language Acquisition Theories', 'discipline': 'Linguistics', 'sentences': ['In the study of child language acquisition theories, Simulation software lets researchers test scenarios that would be impractical or unethical in real settings.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'Scholars publish peer-reviewed studies that subject claims to statistical tests and independent verification.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Teaching materials translate complex findings into accessible language without oversimplifying uncertainty.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Replication crises in some fields have prompted preregistration and shared data repositories.', 'Citizen science projects enlist volunteers to classify images or record local species observations.']},
    {'title': 'Medieval Manuscript Production', 'discipline': 'History', 'sentences': ['In the study of medieval manuscript production, Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Open-access journals widen readership, though quality control and predatory publishers remain concerns.', 'Simulation software lets researchers test scenarios that would be impractical or unethical in real settings.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Scholars publish peer-reviewed studies that subject claims to statistical tests and independent verification.', 'Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Replication crises in some fields have prompted preregistration and shared data repositories.', 'Citizen science projects enlist volunteers to classify images or record local species observations.']},
    {'title': 'Gravitational Waves and Astronomy', 'discipline': 'Physics', 'sentences': ['In the study of gravitational waves and astronomy, Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'Replication crises in some fields have prompted preregistration and shared data repositories.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Scholars publish peer-reviewed studies that subject claims to statistical tests and independent verification.', 'Simulation software lets researchers test scenarios that would be impractical or unethical in real settings.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Citizen science projects enlist volunteers to classify images or record local species observations.', 'Open-access journals widen readership, though quality control and predatory publishers remain concerns.']},
    {'title': 'Social Media and Political Polarization', 'discipline': 'Political Science', 'sentences': ['In the study of social media and political polarization, Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Citizen science projects enlist volunteers to classify images or record local species observations.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Simulation software lets researchers test scenarios that would be impractical or unethical in real settings.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Teaching materials translate complex findings into accessible language without oversimplifying uncertainty.', 'Scholars publish peer-reviewed studies that subject claims to statistical tests and independent verification.', 'Replication crises in some fields have prompted preregistration and shared data repositories.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.']},
    {'title': 'Wetland Ecosystem Services', 'discipline': 'Ecology', 'sentences': ['In the study of wetland ecosystem services, Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'Replication crises in some fields have prompted preregistration and shared data repositories.', 'Open-access journals widen readership, though quality control and predatory publishers remain concerns.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Simulation software lets researchers test scenarios that would be impractical or unethical in real settings.']},
    {'title': 'The Silk Road and Cultural Exchange', 'discipline': 'History', 'sentences': ['In the study of the silk road and cultural exchange, Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.', 'Replication crises in some fields have prompted preregistration and shared data repositories.', 'Simulation software lets researchers test scenarios that would be impractical or unethical in real settings.', 'Open-access journals widen readership, though quality control and predatory publishers remain concerns.', 'Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Citizen science projects enlist volunteers to classify images or record local species observations.']},
    {'title': 'Working Memory Limits in Cognition', 'discipline': 'Psychology', 'sentences': ['In the study of working memory limits in cognition, Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Teaching materials translate complex findings into accessible language without oversimplifying uncertainty.', 'Citizen science projects enlist volunteers to classify images or record local species observations.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'Scholars publish peer-reviewed studies that subject claims to statistical tests and independent verification.', 'Replication crises in some fields have prompted preregistration and shared data repositories.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.', 'Open-access journals widen readership, though quality control and predatory publishers remain concerns.']},
    {'title': 'Antibiotic Resistance Mechanisms', 'discipline': 'Medicine', 'sentences': ['In the study of antibiotic resistance mechanisms, Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Simulation software lets researchers test scenarios that would be impractical or unethical in real settings.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Open-access journals widen readership, though quality control and predatory publishers remain concerns.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Teaching materials translate complex findings into accessible language without oversimplifying uncertainty.', 'Replication crises in some fields have prompted preregistration and shared data repositories.', 'Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.']},
    {'title': 'Greenhouse Gas Accounting Methods', 'discipline': 'Environmental Science', 'sentences': ['In the study of greenhouse gas accounting methods, Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Teaching materials translate complex findings into accessible language without oversimplifying uncertainty.', 'Citizen science projects enlist volunteers to classify images or record local species observations.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'Replication crises in some fields have prompted preregistration and shared data repositories.']},
    {'title': 'Feminist Movements in the Twentieth Century', 'discipline': 'History', 'sentences': ['In the study of feminist movements in the twentieth century, Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Scholars publish peer-reviewed studies that subject claims to statistical tests and independent verification.', 'Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'Teaching materials translate complex findings into accessible language without oversimplifying uncertainty.', 'Technology improves data collection, yet human interpretation remains necessary to avoid misleading conclusions.', 'Citizen science projects enlist volunteers to classify images or record local species observations.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.']},
    {'title': 'Volcanic Hazards and Preparedness', 'discipline': 'Geology', 'sentences': ['In the study of volcanic hazards and preparedness, Citizen science projects enlist volunteers to classify images or record local species observations.', 'Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Scholars publish peer-reviewed studies that subject claims to statistical tests and independent verification.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Replication crises in some fields have prompted preregistration and shared data repositories.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'Historical archives and oral histories complement quantitative data when studying human behavior over time.', 'Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.', 'Teaching materials translate complex findings into accessible language without oversimplifying uncertainty.']},
    {'title': 'International Aid and Development', 'discipline': 'Economics', 'sentences': ['In the study of international aid and development, Cross-disciplinary seminars expose specialists to methods they might not encounter within a single department.', 'Ethical guidelines protect participants and communities affected by experiments or policy trials.', 'Undergraduate researchers contribute through supervised lab work and literature reviews that synthesize prior findings.', 'Open-access journals widen readership, though quality control and predatory publishers remain concerns.', 'Scholars publish peer-reviewed studies that subject claims to statistical tests and independent verification.', 'Future work will likely integrate artificial intelligence tools while maintaining human oversight of conclusions.', 'Citizen science projects enlist volunteers to classify images or record local species observations.', 'Public engagement through museums and podcasts helps taxpayers understand why research funding matters.', 'Simulation software lets researchers test scenarios that would be impractical or unethical in real settings.', 'International conferences facilitate debate that can shift consensus when evidence accumulates.', 'Teaching materials translate complex findings into accessible language without oversimplifying uncertainty.', 'Funding agencies prioritize projects that address pressing social or environmental challenges with measurable outcomes.']},
]


def gen_academic_passages() -> list[dict]:
    out = []
    for i, item in enumerate(ACADEMIC_PASSAGES, 1):
        body = " ".join(item["sentences"])
        # pad to 500+ words if needed
        extras = (
            " Subsequent studies have extended these observations, combining fieldwork with computational models. "
            "Readers preparing for academic texts should note how authors signal claims with hedging language such as "
            "'suggest,' 'indicate,' and 'may.' Identifying the main idea often requires distinguishing evidence from interpretation. "
            "Vocabulary in context questions frequently target discipline-specific terms that repeat or are defined nearby. "
            "Inference items ask how a new fact would affect the author's argument rather than recalling isolated details."
        )
        while len(body.split()) < 500:
            body += extras
        if len(body.split()) > 720:
            words = body.split()[:700]
            body = " ".join(words)
        md = (
            f"# Read an Academic Passage — {item['title']}\n\n"
            f"**Discipline:** {item['discipline']}  \n"
            f"**Task type:** TOEFL iBT Reading · Read an Academic Passage  \n"
            f"**Word count:** ~{len(body.split())} words\n\n"
            f"---\n\n{body}\n\n---\n\n"
            f"*Study tip:* Summarize each paragraph in one sentence, then state the author's overall purpose in a single line.*"
        )
        out.append(doc(
            f"TOEFL Reading · Academic Passage {i:02d}: {item['title']}",
            md,
            "TOEFL Reading",
            "toefl-reading",
        ))
    return out


DAILY_LIFE_ITEMS = [
    ("Campus Email: Library Hours Change", "email", """**From:** university.library@campus.edu
**To:** All Students
**Subject:** Extended Finals Week Hours

Dear Students,

Starting Monday, the Main Library will remain open until 2:00 a.m. through Friday of finals week. The ground-floor study rooms can be reserved online until 11:00 p.m.; after that, seating is first-come. The café will close at 10:00 p.m., but vending machines on the second floor will stay available.

Please bring your student ID after midnight. Group study rooms must be booked for at least two occupants. Quiet floors 4–6 will enforce a no-phone-call policy. Laptops may be borrowed at the circulation desk until 30 minutes before closing.

If you lose an item, check the lost-and-found counter near the east entrance. Extended hours end Saturday at 6:00 p.m., when regular semester schedules resume.

Thank you,
Campus Library Services"""),
    ("Building Notice: Elevator Maintenance", "notice", """**MAINTENANCE NOTICE — West Tower Elevators**

Date: March 12–14
Location: West Tower, all passenger elevators

Elevator B will be out of service from 8:00 a.m. to 4:00 p.m. daily for cable inspection. Elevator A will operate on a reduced schedule: one car every three minutes during peak times (12:00–1:30 p.m.).

Residents on floors 8 and above may use Stairwell C, which remains unlocked during maintenance. If you require mobility assistance, contact the front desk at extension 2200 at least one hour before you need to travel.

We apologize for the inconvenience and expect full service to resume by 5:00 p.m. on March 14.

— Facilities Management"""),
    ("Event Flyer: International Food Festival", "flyer", """**INTERNATIONAL FOOD FESTIVAL**
Student Union Plaza · Saturday, April 6 · 11:00 a.m. – 3:00 p.m.

Taste dishes from 15 student clubs representing regions across Asia, Africa, Europe, and the Americas. Tickets: $5 at the door (cash or campus card). Each ticket includes three tasting portions; additional portions $2.

Live music begins at noon. Vegetarian and gluten-free options will be labeled at every booth. Proceeds support study-abroad scholarships.

Volunteers still needed for setup (9:00 a.m.) and cleanup (3:30 p.m.). Sign up at the Student Activities office by April 3.

Rain location: Union Ballroom B."""),
    ("Text Message Thread: Group Project", "message", """**Group Chat — Biology 204**

**Maya (10:02 a.m.):** Can we meet in the science library tomorrow at 4?

**Jon (10:05 a.m.):** I have lab until 4:30. Could we do 5?

**Maya (10:06 a.m.):** Works for me. Room 203 is usually empty then.

**Priya (10:18 a.m.):** I'll bring the draft graph. Still waiting on soil data from the field trip.

**Jon (10:20 a.m.):** Dr. Reyes said we can use last year's numbers if ours aren't ready.

**Maya (10:22 a.m.):** OK—let's finalize the intro section tomorrow. Slides due Friday midnight."""),
    ("Campus Memo: Parking Permit Renewal", "memo", """**MEMO**
To: Commuting Students
From: Transportation Office
Re: Fall Parking Permits

Online renewal opens August 1. Current permits expire August 31. Faculty lots remain restricted; student permits are valid in zones B and C only after 4:30 p.m.

New rates: $180/semester (standard), $95/semester (carpool—two registered vehicles). Payment plans available through the bursar. Temporary day passes ($8) can be purchased at kiosks near the north garage.

Register your license plate to avoid citations. Appeals must be filed within 10 days of a ticket.

Questions: parking@campus.edu or (555) 0142."""),
]

# Generate more daily life items programmatically
MORE_DAILY = [
    ("Campus Email: Wi-Fi Upgrade Tonight", "email", "IT Services will upgrade wireless access points in dormitories tonight from 1:00 a.m. to 4:00 a.m. Expect brief disconnections. Complete downloads before midnight. Contact the help desk if issues persist after 8:00 a.m."),
    ("Notice: Pool Closure for Cleaning", "notice", "The recreation center pool closes Thursday for annual cleaning. Lap swim resumes Friday at 6:00 a.m. The gym and courts remain open. Lockers on the pool level will be inaccessible; use floor 2 lockers instead."),
    ("Flyer: Career Fair", "flyer", "Fall Career Fair — Convention Hall, October 3, 10 a.m.–3 p.m. Business attire recommended. Bring résumés. Employers include tech, healthcare, and nonprofit organizations. Shuttle from campus every 30 minutes."),
    ("Message: Lab Safety Reminder", "message", "Reminder: goggles required in Chem 110 lab tomorrow. No open-toed shoes. Report spills immediately. Pre-lab quiz must be completed on the course site before you enter."),
    ("Memo: Meal Plan Changes", "memo", "Starting next semester, unused meal swipes roll over up to 10 per month. Guest passes cost $7 at the dining hall entrance. Allergen menus posted daily at dining.campus.edu."),
    ("Email: Guest Speaker RSVP", "email", "The Economics Club invites you to a talk by Dr. Lin on urban transit funding, March 20 at 5 p.m. in Hall 101. RSVP by March 18 for seating and pizza count."),
    ("Notice: Fire Drill", "notice", "Mandatory fire drill Tuesday at 11:15 a.m. Exit via nearest stairwell; do not use elevators. Gather at your building's assembly point. Drills last approximately 15 minutes."),
    ("Flyer: Book Sale", "flyer", "Used textbook sale — Library lobby, first week of classes, 9 a.m.–5 p.m. Cash and card accepted. Proceeds fund student research grants."),
    ("Message: Office Hours Change", "message", "Prof. Garcia moved Wednesday office hours to 2–4 p.m. in Room 312. Email for appointments outside those times."),
    ("Memo: ID Card Replacement", "memo", "Lost ID? Replacement fee $15 at the campus card office, Student Center room 104. Hours: M–F 8:30–4:30. Temporary access slips available for 48 hours."),
    ("Email: Scholarship Deadline", "email", "Applications for the Global Engagement Scholarship close April 15. Requires 500-word essay and one faculty reference. Submit through the financial aid portal."),
    ("Notice: Water Shutoff", "notice", "Cold water will be shut off in Building C Saturday 7–11 a.m. for pipe repair. Restrooms on Building D ground floor available during maintenance."),
    ("Flyer: Volunteer Tree Planting", "flyer", "Campus sustainability club plants native trees April 12, 9 a.m.–noon. Meet at the south lawn. Gloves and tools provided; wear closed-toe shoes."),
    ("Message: Study Session", "message", "History study group Sunday 3 p.m., café table by the window. Bring notes on Chapter 8. We'll focus on essay outlines."),
    ("Memo: Printing Quota", "memo", "Each student receives 300 free print pages per semester. Additional pages $0.05 each. Quota resets January and August."),
]

for title, kind, body in MORE_DAILY:
    if kind == "email":
        content = f"**From:** campus.office@university.edu\n**Subject:** {title.split(': ',1)[-1]}\n\n{body}"
    elif kind == "notice":
        content = f"**NOTICE**\n\n{body}"
    elif kind == "flyer":
        content = f"**EVENT**\n\n{body}"
    elif kind == "message":
        content = f"**Campus App Message**\n\n{body}"
    else:
        content = f"**MEMO**\n\n{body}"
    DAILY_LIFE_ITEMS.append((title, kind, content))

# pad to 20 unique - DAILY_LIFE_ITEMS already has 5 + 15 = 20

DAILY_LIFE_PAD = (
    " Please save this message for your records. If you have questions, contact the office during "
    "regular business hours (Monday–Friday, 8:30 a.m.–4:30 p.m.). For emergencies after hours, "
    "call the campus helpline listed on the back of your ID card. Updates may also appear on the "
    "student portal homepage and the official campus mobile app under Announcements. We appreciate "
    "your cooperation and encourage you to share this information with roommates or classmates "
    "who might be affected. Additional details, including maps and forms, are available online."
)


def pad_daily_body(body: str, target_min: int = 150, target_max: int = 280) -> str:
    text = body.strip()
    while word_count(text) < target_min:
        text += DAILY_LIFE_PAD
    if word_count(text) > target_max:
        text = " ".join(text.split()[:target_max])
    return text


def gen_daily_life() -> list[dict]:
    out = []
    for i, (title, kind, body) in enumerate(DAILY_LIFE_ITEMS[:20], 1):
        padded = pad_daily_body(body)
        md = (
            f"# Read in Daily Life — {title}\n\n"
            f"**Format:** {kind.title()}  \n"
            f"**Task type:** TOEFL iBT Reading · Read in Daily Life  \n"
            f"**Word count:** ~{word_count(padded)} words\n\n"
            f"---\n\n{padded}\n\n---\n\n"
            f"*Study tip:* Identify purpose (inform, persuade, remind) and whom the writer addresses.*"
        )
        out.append(doc(
            f"TOEFL Reading · Daily Life {i:02d}: {title}",
            md,
            "TOEFL Reading",
            "toefl-reading",
        ))
    return out


COMPLETE_WORDS_PASSAGES = [
    {"title": "Photosynthesis Basics", "text": "Plants convert sunlight into chemical energy through p_____. This occurs in c_____ containing c_____. Light reactions produce A___ and N_____. The Calvin cycle f_____ carbon dioxide into sugar. When water is scarce, plants close s_____ on leaves. C_____ plants fix carbon at night in hot climates. Without this process, most food w_____ on Earth would collapse.", "answers": ["photosynthesis", "chloroplasts", "chlorophyll", "ATP", "NADPH", "fixes", "stomata", "C4", "webs"]},
    {"title": "Urban Transportation", "text": "Cities promote public t_____ to cut traffic c_____. Buses and trains move more p_____ per trip than cars. Dedicated b_____ lanes protect cyclists. Congestion p_____ fees reduce peak traffic. R_____ sharing programs place vehicles at stations. Reliable s_____ encourage commuters to leave cars at home. Infrastructure i_____ remain costly but may lower air p_____ over time.", "answers": ["transport", "congestion", "passengers", "bike", "pricing", "Ride", "schedules", "investments", "pollution"]},
    {"title": "Sleep and Memory", "text": "Sleep supports memory c_____. The brain r_____ daytime learning during slow-wave sleep. REM aids e_____ processing and creative problem s_____. Students who n_____ after studying often recall more vocabulary. Chronic sleep d_____ hurts a_____ and judgment. Regular bedtimes stabilize c_____ rhythms linked to melatonin release.", "answers": ["consolidation", "replays", "emotion", "solving", "nap", "deprivation", "attention", "circadian"]},
    {"title": "Ocean Currents", "text": "Ocean c_____ transport heat globally. The Gulf Stream warms w_____ Europe. Dense water s_____ drives deep circulation. El Niño e_____ alter fisheries and rainfall. Currents influence weather s_____ on several continents. Satellites monitor s_____ height to infer f_____ direction. Marine ecosystems depend on n_____ mixing that brings nutrients upward.", "answers": ["currents", "western", "sinking", "events", "systems", "sea", "flow", "nutrient"]},
    {"title": "Library Research", "text": "Libraries use c_____ systems to shelve books. D_____ databases index articles by keyword. Peer r_____ validates study quality before publication. Writers must c_____ sources to avoid plagiarism. Reference l_____ assist with specialized searches. Interlibrary l_____ delivers books from partner institutions. Primary s_____ include letters and raw data from original events.", "answers": ["catalog", "Digital", "review", "cite", "librarians", "loan", "sources"]},
    {"title": "Renewable Energy", "text": "Solar cells convert p_____ to electricity. Wind t_____ harness steady airflow. Hydroelectric d_____ store water for controlled release. Batteries provide e_____ storage when sunlight fades. Grid operators m_____ supply and demand across regions. Policy i_____ such as tax credits accelerate adoption. Fossil f_____ plants still supply baseline load in many countries.", "answers": ["photons", "turbines", "dams", "energy", "match", "incentives", "fuel"]},
    {"title": "Ancient Rome", "text": "Roman e_____ expanded via disciplined armies and road n_____. Aqueducts carried f_____ water to growing cities. Latin served as an a_____ language across provinces. The Senate debated l_____ while emperors held executive power. Gladiatorial g_____ entertained crowds in amphitheaters. Trade r_____ linked Rome to India and China. Economic i_____ eventually strained imperial finances.", "answers": ["engineers", "networks", "fresh", "administrative", "laws", "games", "routes", "instability"]},
    {"title": "Microeconomics", "text": "Supply and d_____ set prices in competitive markets. Elasticity m_____ how quantity responds to price changes. Negative e_____ can justify regulation when private c_____ differ from social costs. Oligopolies may c_____ on output to raise prices. Game t_____ models strategic interaction among firms. Behavioral economics notes systematic b_____ in human decision-making.", "answers": ["demand", "measures", "externalities", "costs", "collude", "theory", "biases"]},
    {"title": "Climate Policy", "text": "Greenhouse g_____ trap infrared radiation in the atmosphere. Carbon p_____ limit emissions from major industries. Cap-and-t_____ markets let firms buy and sell allowances. Adaptation p_____ prepare communities for rising seas. International a_____ coordinate emissions reporting. Renewable d_____ reduces reliance on coal and oil. Climate m_____ project future warming using supercomputers.", "answers": ["gases", "pricing", "trade", "plans", "agreements", "deployment", "models"]},
    {"title": "Human Evolution", "text": "Fossil h_____ show transitions in bipedal locomotion. Tool u_____ expanded with Homo species across Africa. Genetic d_____ reveals migration out of Africa over millennia. Natural s_____ acted on traits affecting survival. Culture enables rapid l_____ beyond genetic i_____. Neanderthals interbred with modern humans, leaving traces in D_____. Anthropologists combine archaeology with molecular e_____.", "answers": ["hominins", "use", "diversity", "selection", "learning", "inheritance", "DNA", "evidence"]},
    {"title": "Public Health", "text": "Vaccination c_____ protects communities by reducing pathogen spread. Epidemiologists track i_____ rates to detect outbreaks early. Quarantine i_____ limit contact during contagious periods. Sanitation i_____ cut waterborne disease in industrial cities. Health e_____ campaigns promote screening and lifestyle changes. Antibiotic s_____ must be prescribed carefully to slow resistance. Global s_____ coordinate responses to pandemics.", "answers": ["coverage", "infection", "isolates", "infrastructure", "education", "stewardship", "surveillance"]},
    {"title": "Artificial Intelligence", "text": "Machine l_____ improves with large training datasets. Neural n_____ stack layers of computation. Supervised a_____ uses labeled examples to teach classification. Overfitting occurs when models memorize n_____ instead of patterns. Ethical r_____ address bias, privacy, and accountability. Automation may d_____ some jobs while creating new roles. Human o_____ remains important in high-stakes decisions.", "answers": ["learning", "networks", "algorithms", "noise", "reviews", "displace", "oversight"]},
    {"title": "Volcanic Activity", "text": "Magma r_____ beneath volcanoes increases pressure until eruption. Pyroclastic f_____ surge rapidly down slopes. Lahars are mudflows t_____ by ash mixing with rain or ice. Seismometers d_____ tremors that often precede eruptions. Evacuation r_____ save lives when monitoring detects unrest. Volcanic a_____ can fertilize soil after weathering. Ring of Fire n_____ encircles the Pacific with active vents.", "answers": ["rises", "flows", "triggered", "detect", "routes", "ash", "networks"]},
    {"title": "Music Cognition", "text": "Rhythm p_____ help listeners predict beat structure in songs. Melodic i_____ allow brains to recognize tunes after brief exposure. Practice strengthens m_____ connections between auditory and motor areas. Absolute p_____ is rare; most musicians rely on relative pitch. Emotion in music often links to tempo and h_____. Cross-cultural s_____ show both universal and local preferences. Neuroimaging r_____ active regions during improvisation.", "answers": ["perception", "intervals", "motor", "pitch", "harmony", "studies", "reveals"]},
    {"title": "Water Cycle", "text": "Evaporation sends water from oceans into the a_____. Clouds form when vapor c_____ on condensation nuclei. Precipitation returns moisture as rain, snow, or h_____. Runoff collects in r_____ and lakes toward the sea. Groundwater s_____ in aquifers over years or centuries. Transpiration releases water from plant l_____. Human d_____ and irrigation alter local cycle balance.", "answers": ["atmosphere", "condenses", "hail", "rivers", "stores", "leaves", "dams"]},
]


def gen_complete_words() -> list[dict]:
    out = []
    for i, item in enumerate(COMPLETE_WORDS_PASSAGES[:15], 1):
        key_lines = "\n".join(f"{j+1}. {a}" for j, a in enumerate(item["answers"]))
        md = (
            f"# Complete the Words — {item['title']}\n\n"
            f"**Task type:** TOEFL iBT Reading · Complete the Words  \n"
            f"**Instructions:** Type the missing letters to complete each word. First letters are shown.\n\n"
            f"---\n\n{item['text']}\n\n---\n\n"
            f"## Answer Key\n\n{key_lines}\n"
        )
        out.append(doc(
            f"TOEFL Reading · Complete the Words {i:02d}: {item['title']}",
            md,
            "TOEFL Reading",
            "toefl-reading",
        ))
    return out


EMAIL_PROMPTS = [
    ("Request Extension for Group Report", "Professor Chen", "You are working on a group report for your environmental science class. One team member became ill, and your group needs two extra days to finish the final section and proofread. Write an email to Professor Chen. Ask for a short extension, explain the situation briefly, and propose a new submission date.",
     ["Explain why the extension is needed without sharing private medical details.", "Suggest a specific new deadline.", "Offer to submit a partial draft if required.", "Maintain a polite, professional tone."]),
    ("Campus Job Interview Confirmation", "Ms. Rivera, Student Employment Office", "You applied for a front-desk assistant position at the recreation center. You received an interview invitation for Tuesday at 10 a.m. but have a lab that ends at 10:15 a.m. Write to Ms. Rivera to confirm your interest and request a slightly later time.",
     ["Confirm enthusiasm for the position.", "Explain the schedule conflict clearly.", "Propose alternative times the same day.", "Thank her for the opportunity."]),
    ("Noise Complaint to Housing", "Housing Services", "Your dorm neighbor plays loud music after quiet hours several nights this week. You have an early class and could not sleep. Write to Housing Services describing the issue and asking for assistance.",
     ["State dates or times when noise occurred.", "Mention you tried speaking politely first.", "Request a reasonable resolution.", "Remain factual, not hostile."]),
    ("Thank Advisor for Recommendation", "Dr. Patel", "Dr. Patel agreed to write a recommendation letter for your study-abroad application. The application portal confirms the letter was received. Write to thank Dr. Patel and briefly update her on your plans.",
     ["Express sincere gratitude.", "Confirm the letter arrived.", "Share one sentence about your program choice.", "Offer to share outcomes later."]),
    ("Club Event Room Booking", "Student Activities Coordinator", "Your photography club wants to host a beginner workshop next month. You need a room with tables, projector access, and space for 25 attendees. Write to request booking and list equipment needs.",
     ["Propose two possible dates.", "Describe the event purpose and audience size.", "List technical requirements.", "Offer to complete any required forms."]),
    ("Question About Lab Absence", "Teaching Assistant Jordan", "You missed last week's chemistry lab because of a family emergency. The syllabus says absences must be made up within ten days. Write to ask how to schedule a makeup session and what preparatory work to complete.",
     ["Briefly acknowledge the missed session.", "Ask about makeup procedures.", "Request reading or pre-lab assignments.", "Thank the TA for guidance."]),
    ("Internship Application Follow-Up", "Mr. Okonkwo, GreenTech Inc.", "You interviewed for a summer internship two weeks ago. The recruiter said decisions would be announced within ten business days. Write a brief follow-up expressing continued interest.",
     ["Reference the interview date politely.", "Reaffirm interest in the role.", "Offer to provide additional materials.", "Keep the message concise."]),
    ("Roommate Agreement Discussion", "Your roommate Alex", "You and Alex share a small apartment. Alex's guests often stay late on weeknights, making it hard for you to study. Write an email suggesting a conversation and proposing quiet-hour guidelines.",
     ["Acknowledge shared space respectfully.", "Describe the impact on your studies.", "Propose specific quiet hours.", "Invite Alex to suggest adjustments."]),
    ("Library Interlibrary Loan", "Interlibrary Loan Desk", "You need a book for your thesis that our library does not own. You found the record in an online catalog at a partner university. Write to request an interlibrary loan and note your deadline.",
     ["Provide title and author.", "Mention your thesis deadline.", "Ask about expected delivery time.", "Offer to pick up at the desk."]),
    ("Volunteer Shift Change", "Campus Food Pantry Coordinator", "You volunteer Saturday mornings but will travel for a conference on one Saturday this month. Write to ask another volunteer to swap shifts or to find a substitute.",
     ["State the date you will miss.", "Explain briefly (conference travel).", "Offer to cover a different shift.", "Thank the coordinator."]),
    ("Question About Course Placement", "Language Program Director", "You placed into intermediate writing but believe your speaking score suggests advanced discussion skills. Write to ask whether you may audit an advanced seminar or take a placement conversation.",
     ["Describe your background briefly.", "Explain why you seek re-evaluation.", "Ask about procedures and deadlines.", "Remain respectful of program rules."]),
    ("Equipment Repair Request", "IT Help Desk", "Your university-issued laptop battery drains within two hours, affecting note-taking in long lectures. Write to request diagnostic service and a loaner if repair takes several days.",
     ["Describe the technical problem.", "Explain academic impact.", "Ask about repair timeline.", "Request loaner if available."]),
    ("Conference Registration Help", "Graduate Student Association", "Your department will reimburse conference registration if you submit receipts by the 30th. You registered online but did not receive confirmation. Write to the GSA for assistance obtaining proof of payment.",
     ["State conference name and date.", "Explain reimbursement deadline.", "Ask how to obtain confirmation.", "Attach or reference transaction ID if known."]),
    ("Apology for Missing Meeting", "Project Client Ms. Lopez", "You missed a video meeting with an external client because of a campus network outage. Write to apologize, summarize what you prepared, and propose a new meeting time.",
     ["Apologize sincerely once.", "Briefly explain the outage.", "Offer a summary of prepared materials.", "Suggest new times."]),
    ("Ask Professor for Office Hour Appointment", "Professor Williams", "You need twenty minutes to discuss feedback on your midterm essay before revising the final draft. Professor Williams's regular office hours conflict with your job. Write to request a brief appointment at another time.",
     ["Reference the midterm essay.", "Explain schedule conflict.", "Suggest two alternative times.", "State how long you need."]),
]

EMAIL_MODELS = [
    ("Request Extension for Group Report — Model", """Subject: Request for Two-Day Extension on Group Report

Dear Professor Chen,

I am writing on behalf of our environmental science group regarding the watershed report due this Friday. One member was unexpectedly hospitalized early this week, and we have been short-handed on the final analysis section. We have completed the data tables and most of the discussion, but we need additional time to integrate citations and proofread collectively.

Would it be possible to submit the report by Sunday at 11:59 p.m.? We can upload our draft introduction and methods by Friday if that would help you monitor our progress. We have already assigned sections so the remaining work is primarily editing and formatting references.

Thank you for considering this request. We appreciate your understanding and will ensure the final version meets all rubric criteria.

Sincerely,
Jordan Lee
On behalf of Group 4"""),
    ("Campus Job Interview Confirmation — Model", """Subject: Interview Confirmation and Schedule Question

Dear Ms. Rivera,

Thank you for inviting me to interview for the front-desk assistant position at the recreation center. I am very interested in the role because I enjoy helping students navigate campus resources, and I have prior customer service experience at the library desk.

I am available on Tuesday except for a lab that ends at 10:15 a.m. Would it be possible to meet at 10:30 a.m. or 2:00 p.m. instead? Either time works well with my class schedule, and I can bring a printed resume if needed.

Please let me know which time works best. I appreciate your consideration and look forward to speaking with you.

Best regards,
Samira Khan"""),
    ("Noise Complaint to Housing — Model", """Subject: Quiet Hours Concern in West Hall Room 312

Dear Housing Services,

I am writing about repeated loud music from a neighboring room after quiet hours this week, especially on Tuesday and Thursday near midnight. I spoke politely with my neighbor once, but the issue continued. Because I have an 8:00 a.m. class, the noise has affected my sleep and focus during morning lectures.

Could a staff member discuss quiet-hour policies with residents on our floor? I am happy to provide more specific times if needed. I would prefer a friendly reminder rather than a formal complaint, but the pattern has continued for several nights.

Thank you for your help maintaining a respectful living environment.

Sincerely,
Chris Nguyen"""),
    ("Thank Advisor for Recommendation — Model", """Subject: Thank You — Recommendation Received

Dear Dr. Patel,

I hope you are well. I wanted to thank you again for writing my study-abroad recommendation. The portal shows that your letter was successfully uploaded yesterday. I will be applying to the Valencia program focusing on urban sustainability, which aligns closely with the project we completed last term on transit-oriented development.

Your guidance on framing my research experience was especially helpful. I will share my decision when results arrive in April, and I would be glad to send a brief update on my coursework next semester.

Thank you for your mentorship.

Warm regards,
Elena Morales"""),
    ("Club Event Room Booking — Model", """Subject: Room Request — Photography Workshop

Dear Student Activities Coordinator,

The Photography Club would like to host a beginner workshop for 25 students on March 18 or March 25 from 6:00 to 8:00 p.m. We need a room with movable tables, a projector, and access to power outlets for laptop tethering demos.

We will complete any required event forms and handle cleanup. Members will arrive early to set up sample prints and sign-in sheets. If neither date is available, we can adjust to the following week.

Please let us know which date is available. Thank you for supporting student-led workshops.

Best,
Marcus Bell, Club President"""),
    ("Question About Lab Absence — Model", """Subject: Makeup Lab Session — Chemistry 110

Dear Jordan,

I hope you are doing well. I missed last week's chemistry lab because of a family emergency and want to complete the required makeup promptly. The syllabus states that absences must be made up within ten days, so I am writing to ask about available sessions this week.

Could you tell me which pre-lab assignments I should finish before attending? I have read the experiment overview and can prepare the data sheet in advance. I am free Tuesday after 3:00 p.m. or Thursday morning before noon.

Thank you for your guidance.

Sincerely,
Taylor Brooks"""),
    ("Internship Application Follow-Up — Model", """Subject: Following Up — Summer Internship Interview

Dear Mr. Okonkwo,

I hope this message finds you well. I am writing to follow up on my interview for the sustainability internship on March 3. I remain very interested in contributing to GreenTech's community solar projects and appreciated learning about your team's approach to stakeholder engagement.

If helpful, I can provide additional writing samples or references. Please let me know if you need any further information while decisions are being finalized.

Thank you again for your time and consideration.

Best regards,
Riley Chen"""),
    ("Roommate Agreement Discussion — Model", """Subject: Suggesting Quiet Hours for Our Apartment

Hi Alex,

I wanted to talk about our schedules this semester. I have early classes on Tuesdays and Thursdays, and guests staying late on weeknights have made it hard for me to sleep. I know we both enjoy hosting friends, so I am not asking for a complete ban.

Would you be open to setting quiet hours from 11:00 p.m. to 7:00 a.m. on weekdays? We could post a friendly note on the door and give each other a heads-up when planning gatherings. Happy to discuss alternatives that work for you too.

Thanks,
Sam"""),
    ("Library Interlibrary Loan — Model", """Subject: Interlibrary Loan Request — Thesis Source

Dear Interlibrary Loan Desk,

I am requesting a book titled Urban Ecology and Design by Dr. Naomi Fields for my thesis on green corridors. Our library catalog shows the title at State University but not on our campus. My advisor asked me to incorporate this source before my draft deadline on May 1.

Could you estimate how long delivery might take? I can pick up the book at the circulation desk and return it promptly. I have attached the catalog record link from the partner library.

Thank you for your assistance.

Sincerely,
Priya Nair"""),
    ("Volunteer Shift Change — Model", """Subject: Shift Swap Request — April 13

Dear Food Pantry Coordinator,

I volunteer on Saturday mornings but will be traveling for a conference on April 13. Would it be possible to swap with another volunteer or cover a Friday afternoon shift instead?

I can still work my regular Saturdays before and after that date. Please let me know if you need me to contact others directly or if you prefer to reassign through the signup sheet.

Thank you for coordinating our team.

Best,
Jordan Lee"""),
    ("Question About Course Placement — Model", """Subject: Placement Conversation Request

Dear Language Program Director,

I placed into intermediate writing this semester, but my speaking assessment suggested stronger discussion skills. Before registering for fall courses, I would like to ask whether I may audit an advanced seminar or schedule a brief placement conversation.

I completed two years of secondary school instruction abroad and recently scored highly on the speaking interview. I am committed to meeting writing requirements and can provide sample essays if helpful.

Thank you for advising me on the appropriate next step.

Sincerely,
Mei Lin"""),
    ("Equipment Repair Request — Model", """Subject: Laptop Battery Issue — Loaner Request

Dear IT Help Desk,

The university laptop issued to me drains its battery within two hours, even with brightness reduced and few applications open. This makes note-taking difficult in back-to-back lectures that last three hours.

Could I schedule a diagnostic appointment this week? If repair requires several days, I would appreciate a loaner device so I can complete assignments. My asset tag number is LT-44821.

Thank you for your help.

Best regards,
Alex Turner"""),
    ("Conference Registration Help — Model", """Subject: Registration Confirmation for Reimbursement

Dear Graduate Student Association,

I registered for the Midwest Ecology Conference on March 22 using my department credit card, but I did not receive an email confirmation. My department requires receipts by the 30th for reimbursement.

Could you help me obtain proof of payment? The transaction ID is REG-90214, and the charge appeared on our program account yesterday. I can forward the bank record if needed.

Thank you,
Dana Ortiz"""),
    ("Apology for Missing Meeting — Model", """Subject: Apology and Reschedule — Project Check-In

Dear Ms. Lopez,

I apologize for missing our video meeting yesterday. A campus network outage disconnected my session twice, and I was unable to rejoin before you closed the call. I prepared the revised timeline and budget summary we planned to discuss.

Would you be available Thursday at 10:00 a.m. or Friday at 1:00 p.m.? I can send the documents ahead of time so we can use the meeting for questions. Thank you for your patience.

Sincerely,
Chris Nguyen"""),
    ("Ask Professor for Office Hour Appointment — Model", """Subject: Office Hour Appointment — Midterm Essay Feedback

Dear Professor Williams,

I hope you are well. I would like about twenty minutes to discuss feedback on my midterm essay before revising the final draft. Your comments on integrating evidence were helpful, but I am unsure how to reorganize my second body paragraph.

Your regular office hours conflict with my work shift on Wednesdays. Would you be available Monday at 11:00 a.m. or Thursday at 4:30 p.m.? I will bring my draft and the rubric.

Thank you,
Elena Morales"""),
]

DISCUSSION_PROMPTS = [
    ("Remote Work and Productivity", "Dr. Huang", "Some companies require employees to return to the office full-time, while others allow permanent remote work. Which approach do you think is better for productivity and employee well-being? Explain your view with reasons and examples.",
     [("Aiden", "I prefer hybrid schedules because focused tasks at home reduce commute fatigue, but in-person days help brainstorming."), ("Bella", "Fully remote work suits independent roles, yet new employees may feel isolated without mentors nearby.")]),
    ("Mandatory Volunteer Hours", "Dr. Huang", "Should universities require all undergraduates to complete community service hours before graduation? Why or why not?",
     [("Carlos", "Required service spreads benefits across neighborhoods and teaches civic responsibility."), ("Diana", "Mandatory hours can feel performative unless courses connect service to academic reflection.")]),
    ("Social Media in Classrooms", "Dr. Huang", "Some instructors ban phones; others integrate social media for polls and discussions. What policy would you recommend?",
     [("Ethan", "Phones distract unless activities are structured around specific apps with clear time limits."), ("Farah", "Banning devices entirely ignores how students already use networks to share resources.")]),
    ("Universal Basic Income", "Dr. Huang", "Would a universal basic income improve society more than targeted welfare programs? Take a position.",
     [("Grace", "UBI simplifies administration and supports caregivers whose labor markets undervalue."), ("Hassan", "Targeted aid directs limited funds toward housing and nutrition with measurable outcomes.")]),
    ("Public Funding for Arts", "Dr. Huang", "Should governments fund museums and theater at the same priority as STEM research?",
     [("Iris", "Arts education develops creativity that complements innovation in science fields."), ("Jamal", "STEM funding addresses urgent health and infrastructure needs that arts budgets cannot fix alone.")]),
    ("Four-Day Work Week", "Dr. Huang", "Some pilots show a four-day week maintains output with higher satisfaction. Should it become standard?",
     [("Keiko", "Shorter weeks reduce burnout if workloads are redesigned, not simply compressed."), ("Leo", "Customer-facing industries may struggle to cover schedules without hiring more staff.")]),
    ("AI Writing Tools", "Dr. Huang", "How should instructors respond when students use AI assistants for drafting essays?",
     [("Mina", "Courses should teach prompt literacy and require disclosure, like calculators in math."), ("Noah", "Unrestricted AI use undermines learning unless assignments demand personal analysis.")]),
    ("Urban Green Space", "Dr. Huang", "City planners must choose between new housing and expanding parks. Which should take priority?",
     [("Olivia", "Parks reduce heat and improve mental health, which lowers public health costs."), ("Pavel", "Housing shortages force long commutes that increase emissions more than small parks save.")]),
    ("Standardized Testing", "Dr. Huang", "Should graduate programs reduce reliance on standardized tests in admissions?",
     [("Quinn", "Holistic review captures research experience tests miss."), ("Rosa", "Tests provide comparable metrics when undergraduate grading varies widely.")]),
    ("Plastic Bag Bans", "Dr. Huang", "Do bans on single-use plastic bags significantly help the environment?",
     [("Stefan", "Reusable bags cut litter and encourage broader waste awareness."), ("Tara", "Without affordable alternatives, bans burden low-income shoppers.")]),
    ("Study Abroad Requirement", "Dr. Huang", "Should business majors be required to study abroad for one semester?",
     [("Uma", "International exposure builds cultural competence employers demand."), ("Victor", "Costs and visa barriers make requirements inequitable without scholarships.")]),
    ("Late Night Delivery Services", "Dr. Huang", "Should cities limit late-night delivery drones and robots for noise and safety?",
     [("Wendy", "Regulation protects pedestrians while allowing innovation in daylight hours."), ("Xavier", "Strict limits delay emissions reductions from efficient robotic logistics.")]),
    ("Open Textbooks", "Dr. Huang", "Should departments mandate open-access textbooks to reduce student costs?",
     [("Yasmin", "Open texts remove financial barriers and can be updated quickly."), ("Zach", "Some open materials lack peer review quality found in commercial editions.")]),
    ("Group vs Solo Assessment", "Dr. Huang", "In STEM courses, should major projects be graded individually even when completed in teams?",
     [("Amy", "Individual grades reveal who mastered design decisions."), ("Ben", "Team grades reflect workplace collaboration skills.")]),
    ("Carbon Tax", "Dr. Huang", "Is a carbon tax more effective than subsidies for renewable energy?",
     [("Chloe", "Taxes send price signals across all sectors simultaneously."), ("Diego", "Subsidies jump-start technologies that markets ignore at early stages.")]),
]

DISCUSSION_MODELS = [
    ("Remote Work and Productivity — Model", """I agree with Aiden that a structured hybrid model often balances productivity and well-being better than either extreme. I can complete writing-intensive tasks more efficiently at home without a commute, which reduces stress before deadlines. However, Bella's point about mentorship resonates: when I started my internship search, informal office conversations led to referrals I would have missed remotely. Therefore, I support hybrid policies with two anchor days for collaboration and flexible remote days for focused work, paired with onboarding mentors for new hires who need in-person guidance during their first months."""),
    ("Mandatory Volunteer Hours — Model", """I partially support required service if universities integrate reflection, as Diana suggests, rather than treating hours as a checkbox. Carlos is right that structured programs can connect students with local nonprofits consistently. In my experience, a service-learning seminar helped me analyze housing policy while tutoring; without that academic link, my earlier volunteering felt disconnected from coursework. Mandates should include transportation support and flexible projects so requirements do not burden students with jobs or long commutes."""),
    ("Social Media in Classrooms — Model", """Ethan's idea of structured activities matches what worked in my statistics course, where we used phones only for live polls during specific exercises. Farah is correct that outright bans ignore how students share notes online. I would recommend a policy that permits devices when the instructor announces a digital task and expects them to be put away otherwise. Clear expectations at the start of term prevent daily negotiations and keep attention on learning goals rather than policing screens."""),
    ("Universal Basic Income — Model", """Grace makes a strong case that universal basic income recognizes unpaid caregiving, which targeted programs often overlook. Hassan rightly notes that housing vouchers address urgent needs directly when budgets are limited. I would favor a modest universal stipend paired with targeted supplements for rent and childcare rather than choosing one approach exclusively. Pilots in several cities suggest reduced administrative overhead, but funding levels must be tested so benefits do not replace specialized support for vulnerable households."""),
    ("Public Funding for Arts — Model", """Iris highlights that arts education develops creativity that supports innovation in STEM fields, which I have seen in design-thinking workshops on our campus. Jamal is right that medical research and infrastructure demand immediate funding. My view is that governments should fund both, but at proportions reflecting national priorities—perhaps guaranteeing arts access in schools while scaling STEM grants through competitive review. Cutting museums entirely would erase community resources that small towns rely on for cultural life and tourism."""),
    ("Four-Day Work Week — Model", """Keiko's point about redesigning workloads is essential; compressing five days of tasks into four without changes would increase burnout. Leo notes customer service sectors need staggered staffing, which hybrid scheduling could address. I support pilot programs in office-based industries where output is measurable, while maintaining five-day coverage in healthcare and retail. Early trials in Iceland reported stable productivity with higher satisfaction, suggesting policy should be sector-specific rather than universal."""),
    ("AI Writing Tools — Model", """Mina compares AI disclosure to calculator policies, which resonates with my writing course that now requires students to describe how they used drafting tools. Noah warns that unrestricted use undermines learning, and I agree assignments should demand personal analysis and campus-specific examples AI cannot fabricate. Instructors could allow AI for brainstorming outlines but require handwritten reflections explaining revisions. Training in ethical use prepares graduates for workplaces where AI assistance is already common."""),
    ("Urban Green Space — Model", """Olivia's argument about mental health and heat reduction aligns with public health data I reviewed for an urban planning elective. Pavel correctly notes housing shortages lengthen commutes and emissions. I would prioritize infill housing near transit while converting underused parking lots into micro-parks. Dense cities need both shelter and shade; planners can require green space set-asides in new developments instead of treating parks and housing as mutually exclusive choices."""),
    ("Standardized Testing — Model", """Quinn argues holistic review captures research experience, which mattered more in my graduate applications than a single exam score. Rosa notes tests provide comparable metrics when grading varies, especially for international applicants. I support optional reporting with clear guidelines so students with strong portfolios are not reduced to one number, while departments retain tests when they predict success in quantitative coursework. Transparency about how scores are weighted would reduce anxiety and encourage diverse applicants."""),
    ("Plastic Bag Bans — Model", """Stefan is right that reusable bags reduce litter and normalize waste awareness. Tara raises equity concerns I had not considered when stores charge for thicker plastic without distributing free reusables. Effective bans should include subsidized durable bags and retailer education rather than penalties that fall on shoppers least able to pay. Environmental benefits appear in coastal cleanup data, but policy design determines whether communities experience bans as progress or an added cost."""),
    ("Study Abroad Requirement — Model", """Uma emphasizes cultural competence employers value, which matches feedback from alumni in my business school. Victor highlights cost and visa barriers that make requirements unfair without scholarships. I would support strongly encouraged study abroad with funded options rather than a universal mandate. Students who cannot travel could complete virtual exchange projects or local internships with global firms to develop similar skills without identical experiences."""),
    ("Late Night Delivery Services — Model", """Wendy supports regulation that protects pedestrians while allowing daytime trials, which seems prudent as robots share sidewalks with children and elderly residents. Xavier notes efficient logistics could cut emissions from car trips. I favor time-limited pilots in commercial zones with noise caps and mandatory human monitors during initial deployment. Cities should collect accident and noise data before expanding programs citywide rather than banning innovation outright or permitting unrestricted operation."""),
    ("Open Textbooks — Model", """Yasmin shows open texts reduce costs and update quickly, which helped classmates in my economics course access materials on day one. Zach warns some open resources lack rigorous review. Departments could adopt open texts after faculty committees evaluate quality, similar to traditional adoption processes. Mandates without review risk inconsistent content, but defaulting to vetted open options would save students money while preserving academic standards through departmental oversight."""),
    ("Group vs Solo Assessment — Model", """Amy argues individual grades reveal who mastered design decisions, which I experienced when one teammate did not understand our coding module. Ben notes team grades reflect workplace collaboration. I recommend hybrid assessment: group deliverables with brief individual reflections or oral checks explaining each member's contribution. This preserves collaboration skills while ensuring credit aligns with learning, addressing free-rider problems without eliminating team projects entirely."""),
    ("Carbon Tax — Model", """Chloe explains that carbon taxes send economy-wide price signals, encouraging firms to innovate across sectors simultaneously. Diego notes subsidies jump-start technologies markets underprice, such as early solar deployment. I support combining a modest carbon tax with targeted subsidies for research and low-income energy assistance. Taxes alone may burden households without rebates, while subsidies alone miss behavioral changes price signals create. Integrated policy balances immediate protection with long-term decarbonization incentives."""),
]

BUILD_SENTENCE_SETS = [
    ("Campus Directions", [
        ("the / building / is / next / library / to / the", "The building is next to the library."),
        ("turn / at / the / left / traffic / light", "Turn left at the traffic light."),
        ("campus / shuttle / every / runs / minutes / ten", "Campus shuttle runs every ten minutes."),
        ("student / center / the / on / is / floor / second / the", "The student center is on the second floor."),
        ("map / a / pick / at / up / information / the / desk", "Pick up a map at the information desk."),
        ("parking / lot / B / is / behind / the / gym", "Parking lot B is behind the gym."),
        ("follow / signs / to / the / north / entrance", "Follow signs to the north entrance."),
    ]),
    ("Email Etiquette", [
        ("you / thank / for / your / message / I", "Thank you for your message."),
        ("look / forward / I / to / hearing / from / you", "I look forward to hearing from you."),
        ("please / let / me / know / if / questions / you / have", "Please let me know if you have questions."),
        ("attached / the / is / document / requested / the", "The requested document is attached."),
        ("available / am / I / Tuesday / afternoon / on", "I am available on Tuesday afternoon."),
    ]),
    ("Academic Discussion", [
        ("both / make / classmates / points / valid", "Both classmates make valid points."),
        ("however / prefer / I / a / hybrid / approach", "However, I prefer a hybrid approach."),
        ("experience / my / supports / this / view", "My experience supports this view."),
        ("policy / should / include / support / for / commuters", "Policy should include support for commuters."),
        ("therefore / recommend / pilot / a / program / first", "Therefore, I recommend a pilot program first."),
    ]),
    ("Library Use", [
        ("books / borrowed / can / be / for / three / weeks", "Books can be borrowed for three weeks."),
        ("quiet / floor / the / on / calls / phone / prohibited / are", "Phone calls are prohibited on the quiet floor."),
        ("renew / online / you / can / loans / your", "You can renew your loans online."),
        ("laptop / a / at / desk / the / borrow / circulation", "Borrow a laptop at the circulation desk."),
        ("group / rooms / must / reserved / be / in / advance", "Group rooms must be reserved in advance."),
    ]),
    ("Research Writing", [
        ("thesis / states / my / main / argument / clearly", "My thesis states the main argument clearly."),
        ("sources / credible / require / academic / essays", "Academic essays require credible sources."),
        ("paraphrase / rather / than / copy / long / passages", "Paraphrase rather than copy long passages."),
        ("revise / for / clarity / after / receiving / feedback", "Revise for clarity after receiving feedback."),
        ("conclusion / should / not / introduce / new / evidence", "The conclusion should not introduce new evidence."),
    ]),
]

# Expand build sentence sets to 20
EXTRA_BS_TITLES = [
    "Health Appointments", "Shopping Online", "Weather Reports", "Job Applications",
    "Presentation Skills", "Team Meetings", "Travel Plans", "Course Registration",
    "Lab Safety", "Financial Budget", "Housing Rules", "Technology Support",
    "Volunteer Work", "Exam Preparation", "Restaurant Orders",
]
GENERIC_BS = [
    ("important / is / it / to / arrive / early", "It is important to arrive early."),
    ("please / confirm / your / attendance / by / Friday", "Please confirm your attendance by Friday."),
    ("the / instructions / are / posted / on / the / website", "The instructions are posted on the website."),
    ("we / should / discuss / this / during / office / hours", "We should discuss this during office hours."),
    ("thank / you / for / your / patience / and / cooperation", "Thank you for your patience and cooperation."),
    ("deadline / the / has / been / extended / by / two / days", "The deadline has been extended by two days."),
    ("students / must / complete / the / form / online", "Students must complete the form online."),
    ("bring / your / student / ID / to / the / exam", "Bring your student ID to the exam."),
]
while len(BUILD_SENTENCE_SETS) < 20:
    t = EXTRA_BS_TITLES[len(BUILD_SENTENCE_SETS) - 5] if len(BUILD_SENTENCE_SETS) - 5 < len(EXTRA_BS_TITLES) else f"Set {len(BUILD_SENTENCE_SETS)+1}"
    BUILD_SENTENCE_SETS.append((t, list(GENERIC_BS)))

VOCAB_THEMES = [
    ("Academic Analysis", ["hypothesis", "correlation", "variable", "methodology", "empirical", "inference", "paradigm", "replicate", "bias", "validity", "quantitative", "synthesis"]),
    ("Campus Life", ["matriculation", "curriculum", "faculty", "semester", "accreditation", "tuition", "syllabus", "citation", "deadline", "enrollment", "transcript", "facilitate"]),
    ("Environment", ["biodiversity", "ecosystem", "sustainable", "emission", "renewable", "conservation", "depletion", "mitigation", "resilience", "contaminant", "habitat", "precipitation"]),
    ("Economics", ["inflation", "subsidy", "commodity", "fiscal", "monetary", "tariff", "equilibrium", "aggregate", "stagnation", "privatize", "regulation", "productivity"]),
    ("Technology", ["algorithm", "bandwidth", "encryption", "interface", "automation", "database", "prototype", "redundancy", "scalable", "malware", "deploy", "iterate"]),
    ("Health", ["diagnosis", "symptom", "chronic", "immunity", "prevention", "therapy", "clinical", "pathogen", "vaccine", "epidemic", "nutrition", "rehabilitation"]),
    ("History", ["colonial", "revolution", "treaty", "annex", "sovereignty", "reform", "artifact", "chronology", "empire", "migration", "ideology", "legitimacy"]),
    ("Psychology", ["cognition", "behavior", "stimulus", "perception", "motivation", "disorder", "resilience", "conditioning", "longitudinal", "placebo", "trait", "assessment"]),
    ("Law & Policy", ["statute", "jurisdiction", "plaintiff", "precedent", "amendment", "enact", "compliance", "liability", "regulatory", "ordinance", "advocacy", "litigation"]),
    ("Communication", ["rhetoric", "coherent", "articulate", "nuance", "persuade", "convey", "implicit", "explicit", "medium", "discourse", "refute", "summarize"]),
]

VOCAB_DEFS = {
    "hypothesis": ("a proposed explanation to be tested", "test a hypothesis; reject the hypothesis", "The team stated a clear hypothesis before collecting data."),
    "correlation": ("a mutual relationship between two variables", "strong correlation; correlation does not imply causation", "Researchers found a correlation between sleep and exam scores."),
    "variable": ("a factor that can change in an experiment", "independent variable; control variable", "Temperature was the main variable in the trial."),
    "methodology": ("a system of methods used in study", "research methodology; rigorous methodology", "The paper explains its methodology in the first section."),
    "empirical": ("based on observation or experiment", "empirical evidence; empirical study", "Empirical results supported the model."),
    "inference": ("a conclusion drawn from evidence", "statistical inference; reasonable inference", "From the sample, we made an inference about the population."),
    "paradigm": ("a typical pattern or model", "dominant paradigm; shift paradigm", "The discovery forced a paradigm shift in physics."),
    "replicate": ("to repeat a study to verify results", "replicate findings; replicate experiment", "Other labs could not replicate the initial outcome."),
    "bias": ("systematic distortion of results or views", "selection bias; reduce bias", "Random assignment helps reduce bias."),
    "validity": ("the quality of being logically sound", "internal validity; face validity", "The survey lacks validity for younger users."),
    "quantitative": ("relating to measurable amounts", "quantitative data; quantitative analysis", "Quantitative methods counted responses from five hundred participants."),
    "synthesis": ("combining ideas into a coherent whole", "literature synthesis; synthesis essay", "Her synthesis linked three separate theories."),
}

def vocab_entry(word):
    if word in VOCAB_DEFS:
        d, c, e = VOCAB_DEFS[word]
    else:
        d = f"a common academic term used in {word}-related contexts"
        c = f"{word} policy; {word} approach"
        e = f"Students discussed the concept of {word} during the seminar."
    return word, d, c, e


def gen_email_prompts() -> list[dict]:
    out = []
    for i, (title, recipient, scenario, bullets) in enumerate(EMAIL_PROMPTS[:15], 1):
        bl = "\n".join(f"- {b}" for b in bullets)
        md = (
            f"# Write an Email — Prompt\n\n"
            f"**Task type:** TOEFL iBT Writing · Write an Email  \n"
            f"**Write to:** {recipient}  \n\n"
            f"## Scenario\n\n{scenario}\n\n"
            f"## Your email should:\n\n{bl}\n\n"
            f"**Target length:** About 150–220 words.\n"
        )
        out.append(doc(f"TOEFL Writing · Email Prompt {i:02d}: {title}", md, "TOEFL Writing", "toefl-writing"))
    return out


def pad_prose(text: str, target_min: int, pad_sentence: str) -> str:
    out = text.strip()
    while word_count(out) < target_min:
        out += " " + pad_sentence
    return out


def gen_email_models() -> list[dict]:
    out = []
    pad = "Please contact me if you need any additional documents or prefer to discuss this matter by phone during office hours."
    for i, (title, body) in enumerate(EMAIL_MODELS[:15], 1):
        body = pad_prose(body, 150, pad)
        if word_count(body) > 220:
            body = " ".join(body.split()[:220])
        wc = word_count(body)
        md = f"# Write an Email — Model Response\n\n**Task type:** TOEFL iBT Writing · Write an Email  \n**Word count:** ~{wc} words\n\n---\n\n{body}\n"
        out.append(doc(f"TOEFL Writing · Email Model {i:02d}: {title}", md, "TOEFL Writing", "toefl-writing"))
    return out


def gen_discussion_prompts() -> list[dict]:
    out = []
    for i, (topic, prof, question, students) in enumerate(DISCUSSION_PROMPTS[:15], 1):
        posts = "\n\n".join(f"**{name}:** {text}" for name, text in students)
        md = (
            f"# Write for an Academic Discussion — Prompt\n\n"
            f"**Task type:** TOEFL iBT Writing · Academic Discussion  \n"
            f"**Professor {prof} asks:**\n\n{question}\n\n"
            f"## Student posts\n\n{posts}\n\n"
            f"**Your task:** Write a post responding to the question and at least one classmate. (~100–150 words)\n"
        )
        out.append(doc(f"TOEFL Writing · Discussion Prompt {i:02d}: {topic}", md, "TOEFL Writing", "toefl-writing"))
    return out


def gen_discussion_models() -> list[dict]:
    out = []
    pad = "In summary, combining insights from both posts leads to a balanced policy that respects practical constraints while addressing fairness for all students involved."
    for i, (title, body) in enumerate(DISCUSSION_MODELS[:15], 1):
        body = pad_prose(body, 100, pad)
        if word_count(body) > 150:
            body = " ".join(body.split()[:150])
        wc = word_count(body)
        md = f"# Write for an Academic Discussion — Model Response\n\n**Word count:** ~{wc} words\n\n---\n\n{body}\n"
        out.append(doc(f"TOEFL Writing · Discussion Model {i:02d}: {title}", md, "TOEFL Writing", "toefl-writing"))
    return out


def gen_build_sentence() -> list[dict]:
    out = []
    for i, (title, pairs) in enumerate(BUILD_SENTENCE_SETS[:20], 1):
        lines = []
        for j, (scrambled, answer) in enumerate(pairs, 1):
            lines.append(f"### {j}. Scrambled words\n\n`{scrambled}`\n\n**Answer:** {answer}\n")
        md = (
            f"# Build a Sentence — {title}\n\n"
            f"**Task type:** TOEFL iBT Writing · Build a Sentence  \n"
            f"**Instructions:** Arrange words into a grammatically correct sentence.\n\n"
            + "\n".join(lines)
        )
        out.append(doc(f"TOEFL Writing · Build a Sentence {i:02d}: {title}", md, "TOEFL Writing", "toefl-writing"))
    return out


def gen_vocabulary() -> list[dict]:
    out = []
    themes = list(VOCAB_THEMES)
    EXTRA_VOCAB_THEMES = [
        ("Argument & Rhetoric", ["assert", "concede", "refute", "premise", "implication", "coherent", "nuance", "undermine", "advocate", "criteria", "persuasive", "framework"]),
        ("Science & Research", ["control", "replicate", "spectrum", "catalyst", "organism", "velocity", "density", "equilibrium", "particle", "microscope", "experiment", "observation"]),
        ("Business & Management", ["revenue", "stakeholder", "merger", "inventory", "leverage", "compliance", "benchmark", "allocate", "forecast", "negotiate", "portfolio", "scalable"]),
        ("Literature & Arts", ["metaphor", "protagonist", "narrative", "aesthetic", "interpret", "genre", "symbolism", "chronicle", "critique", "motif", "allusion", "canonical"]),
        ("Geography & Culture", ["migration", "urbanization", "terrain", "latitude", "indigenous", "dialect", "custom", "infrastructure", "border", "demographic", "region", "settlement"]),
        ("Logic & Ethics", ["valid", "fallacy", "obligation", "consent", "integrity", "dilemma", "impartial", "accountable", "transparency", "autonomy", "beneficence", "jurisdiction"]),
        ("Academic Writing", ["thesis", "cite", "paraphrase", "transition", "concise", "revise", "draft", "footnote", "abstract", "appendix", "cohesion", "annotation"]),
        ("Statistics & Data", ["median", "deviation", "sample", "outlier", "regression", "probability", "distribution", "variance", "percentile", "correlation", "interval", "significant"]),
        ("Medicine & Biology", ["diagnosis", "symptom", "immune", "chronic", "therapy", "pathogen", "cellular", "metabolism", "genetic", "clinical", "rehabilitation", "prevention"]),
        ("Law & Civics", ["statute", "amendment", "plaintiff", "verdict", "jurisdiction", "regulation", "enforce", "legislation", "precedent", "contract", "liability", "advocacy"]),
    ]
    themes.extend(EXTRA_VOCAB_THEMES)
    for i, (theme, words) in enumerate(themes[:20], 1):
        entries = []
        for w in words[:12]:
            word, d, c, e = vocab_entry(w)
            entries.append(f"### {word}\n\n- **Definition:** {d}\n- **Collocations:** {c}\n- **Example:** {e}\n")
        md = (
            f"# TOEFL Academic Vocabulary — {theme}\n\n"
            f"**Category:** TOEFL Vocabulary  \n"
            f"**Words:** {len(entries)}\n\n"
            + "\n".join(entries)
        )
        out.append(doc(f"TOEFL Vocabulary · List {i:02d}: {theme}", md, "TOEFL Vocabulary", "vocabulary"))
    return out


def main() -> None:
    print("Loading managed-content.json …")
    data = json.loads(DATA.read_text(encoding="utf-8"))

    migrated = migrate_writing_space(data)
    print(f"Migrated {migrated} english/writing → toefl-writing entries")

    generators = [
        ("Academic Passages", gen_academic_passages),
        ("Daily Life", gen_daily_life),
        ("Complete the Words", gen_complete_words),
        ("Email Prompts", gen_email_prompts),
        ("Email Models", gen_email_models),
        ("Discussion Prompts", gen_discussion_prompts),
        ("Discussion Models", gen_discussion_models),
        ("Build a Sentence", gen_build_sentence),
        ("Vocabulary", gen_vocabulary),
    ]

    all_docs: list[dict] = []
    for _name, fn in generators:
        batch = fn()
        print(f"  Generated {len(batch)} from {_name}")
        all_docs.extend(batch)

    added, skipped = inject_documents(data, all_docs)
    data["updatedAt"] = int(time.time() * 1000)
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print("\n=== Injection complete ===")
    print(f"Added:   {len(added)} documents")
    print(f"Skipped: {len(skipped)} (duplicate title in space)")
    if skipped:
        print("  Examples:", ", ".join(skipped[:5]), "…" if len(skipped) > 5 else "")

    by_space = Counter(d["space"] for d in added)
    by_cat = Counter(d["category"] for d in added)
    print("\nBy space:")
    for k, v in sorted(by_space.items()):
        print(f"  {k}: {v}")
    print("\nBy category:")
    for k, v in sorted(by_cat.items()):
        print(f"  {k}: {v}")
    print(f"\nTotal documents in file: {len(data['documents'])}")


if __name__ == "__main__":
    main()
