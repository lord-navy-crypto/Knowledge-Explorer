"""Wave 7 HSS FRQ packs: original CED-aligned practice (not College Board exams).

List ``FRQ_QUIZZES`` has questionnaire dicts with no quiz/item ids (injectors add those).
"""

TAGS = ["frq-practice", "wave-7", "ced-aligned", "generated", "with-solutions"]
GEN_NOTE = (
    "Original Wave 7 FRQ practice aligned to College Board CED topic frames. "
    "Not College Board exam verbatim. visibleSteps show how to structure "
    "SAQ/LEQ/DBQ or analysis paragraphs; blankSteps are model answers. · 2026-08-24"
)

HINTS = [
    "Answer every lettered part if the prompt uses (a)(b)(c).",
    "Lead with a claim, then specific evidence, then a warrant.",
    "Model language is in blankSteps after you attempt the item.",
]


def item(prompt, process, model, concept_id, intro):
    answers = model if isinstance(model, list) else [model]
    return {
        "format": "frq_half",
        "prompt": prompt,
        "conceptId": concept_id,
        "conceptIntro": intro,
        "difficultyTier": 2,
        "visibleSteps": process,
        "blankSteps": answers,
        "hints": list(HINTS),
    }


def pack(subject, wave, theme, description, items):
    if len(items) != 5:
        raise ValueError(f"{subject} {wave} needs 5 items, got {len(items)}")
    return {
        "title": f"{subject} FRQ Pack Wave {wave} — {theme}",
        "subject": subject,
        "kind": "generated",
        "description": description,
        "generationNote": GEN_NOTE,
        "estimatedMinutes": 40,
        "tags": list(TAGS),
        "difficultyTier": 2,
        "items": items,
    }


# --- reusable process scaffolds ---

SAQ_ABC = [
    "Circle the task verb in (a), (b), and (c). Each part needs its own complete sentence, not one blended paragraph.",
    "For each part, name a specific historical actor, law, event, or process (proper noun or dated policy), then explain the mechanism.",
    "Spend about 12–14 minutes total: 4 minutes per part. Do not waste words restating the prompt.",
]

LEQ_CLAIM = [
    "Write a one-sentence thesis that takes a position on the prompt’s extent/cause/comparison language and previews two categories of evidence.",
    "Body paragraph = topic claim + two specific facts + warrant showing how those facts prove the thesis (not a timeline dump).",
    "Close with a qualification: a limit, counterexample, or change-over-time judgment so the argument is not absolute.",
]

DBQ_PARA = [
    "After grouping documents (or the described sources), open with a paragraph claim that answers the prompt, not a source summary.",
    "Integrate at least two sources as evidence: quote or paraphrase a concrete detail, then explain how it supports the claim (HIPP one source if time allows).",
    "Add one outside fact not in the sources and a brief complexity move (another cause, audience, or unintended effect).",
]

RA_PARA = [
    "Thesis: name speaker, audience, exigence, and the rhetorical function of two choice clusters (not a device laundry list).",
    "Body: quote a short choice, describe its immediate effect on that audience, then warrant how the effect serves purpose.",
    "If the passage shifts, mark the turn and show how later choices manage a constraint or a resistant audience.",
]

ARG_PARA = [
    "State a defensible, scoped claim (not “there are pros and cons”). Preview two reasons.",
    "Each body paragraph: reason → specific evidence (scenario, comparison, or mechanism) → warrant → qualifier.",
    "Steelman one counterargument, then refute on design, scope, or tradeoff rather than by insulting the other side.",
]

SYN_PARA = [
    "Thesis takes a position and names the criterion you will use to weigh sources (equity, feasibility, evidence quality).",
    "Put sources in conversation by mechanism or stance; never write “Source A says… Source B says…” as the whole paragraph.",
    "Commentary explains how a source’s limitation or bias affects how far it can support your claim.",
]

LIT_POETRY = [
    "Thesis interprets what the poem is doing (attitude, tension, or transformation), tied to two techniques.",
    "Track a shift: stanza, volta, diction cluster, or image pattern. Quote briefly; do not paraphrase the whole poem.",
    "Warrants connect craft to meaning. End by showing how form (lineation, sound, or syntax) enacts the claim.",
]

LIT_PROSE = [
    "Thesis names a character, narrator, or setting function and the complexity (desire vs. constraint, sympathy vs. critique).",
    "Select two moments (gesture, dialogue, free indirect discourse, or spatial detail) rather than plot summary.",
    "Explain how the chosen details produce the reader’s judgment and how later details complicate the first impression.",
]

LIT_DRAMA = [
    "Thesis addresses conflict as staged (status, information gap, public vs. private) rather than as a novelistic summary.",
    "Use stageable evidence: aside, interruption, pause, costume/prop, or who hears whom.",
    "Show how a turn in the scene revises power or knowledge for the audience, not only for the characters.",
]

GEO_FRQ = [
    "Restate the spatial process in one claim. Define any CED term you use (do not assume the reader infers it).",
    "Apply the model or process to the stated place/scale: name a real-world pattern or a clear hypothetical that matches the definition.",
    "Scale jump or limitation: say how the process looks different at local vs. national scale, or name a case the model fits poorly.",
]

AAQ_PROCESS = [
    "Identify research method, design (experiment vs. correlational), and operational definitions of the key variables.",
    "Answer each lettered task separately: statistic meaning, ethical issue, generalizability, or alternative explanation as asked.",
    "Apply a course concept to the study with a definition in your own words plus a study-specific example.",
]

PSYCH_APPLY = [
    "Define the concept in CED language, then apply it to a concrete detail in the scenario (name the person/behavior).",
    "If the prompt has multiple concepts, keep them in separate labeled sentences so a reader can score each.",
    "Avoid circular answers (“they used reinforcement because they were reinforced”). Show the contingency or process.",
]

ENV_FRQ = [
    "Identify the environmental process or law, then the human action that perturbs it.",
    "Use a cause → pathway → receptor chain (source, transport, impact) rather than a topic word list.",
    "Propose a solution that matches the scale of the problem and name one tradeoff or unintended effect.",
]


FRQ_QUIZZES = [
    # ========== AP US History ==========
    pack(
        "AP US History",
        "7A",
        "Period 3 Revolution",
        "Original SAQ and short LEQ/DBQ-paragraph practice on imperial crisis, Revolution, and constitution-making (Period 3). Not a released exam.",
        [
            item(
                "SAQ. Between 1763 and 1776, British North American colonists moved from protest to independence.\n"
                "(a) Identify ONE British imperial policy after the Seven Years’ War that increased colonial resistance.\n"
                "(b) Explain ONE way colonial political culture (assemblies, print, or crowd action) shaped that resistance.\n"
                "(c) Explain ONE way the Revolutionary War itself changed social or political relations inside the new states.",
                SAQ_ABC,
                [
                    "(a) The Stamp Act (1765) taxed paper goods used in legal and commercial life, asserting Parliament’s right to levy internal taxes and triggering boycotts and stamp-distributor resignations.",
                    "(b) Colonial assemblies claimed exclusive rights to tax their constituents; committees of correspondence and newspapers circulated constitutional arguments so local grievances became a continent-wide language of rights.",
                    "(c) State constitutions and wartime militia service expanded (still limited) white male political participation, while some northern states began gradual emancipation—showing the war destabilized older hierarchies even as slavery deepened in the plantation South.",
                ],
                "period-3-imperial-crisis",
                "SAQ scoring wants specific evidence plus explanation, not a three-sentence restatement of ‘the colonists wanted liberty.’",
            ),
            item(
                "SAQ. The Articles of Confederation created a wartime alliance more than a fiscal state.\n"
                "(a) Identify ONE power the Confederation Congress lacked that later appeared in the Constitution.\n"
                "(b) Explain ONE way that weakness produced a political crisis in the 1780s.\n"
                "(c) Explain ONE argument used by supporters of the Constitution to justify a stronger central government.",
                SAQ_ABC,
                [
                    "(a) Congress could not levy taxes directly on individuals or reliably regulate interstate commerce; those powers move to the federal government under the Constitution.",
                    "(b) Without a dependable revenue stream, Congress could not service debts or stabilize currency; farmers’ tax revolts such as Shays’ Rebellion (1786–87) convinced many elites that state governments were too weak to protect property and order.",
                    "(c) Federalists argued that a government able to tax, raise a military, and regulate commerce was necessary to preserve republican liberty against foreign pressure and domestic faction—liberty required energy in government, not only local vetoes.",
                ],
                "articles-to-constitution",
                "Contrast institutional design (powers) with political consequences (debt, revolt, ratification rhetoric).",
            ),
            item(
                "Short LEQ (one thesis + one developed body paragraph). To what extent did the American Revolution produce social change for women, enslaved people, and poor white men between 1775 and 1800? Take a position of substantial, limited, or mixed change and support it with specific evidence.",
                LEQ_CLAIM,
                [
                    "Thesis: The Revolution produced mixed and bounded social change: it expanded political language and some legal footholds for white men and a minority of free Black people, while leaving coverture and plantation slavery largely intact.",
                    "Body: Republican motherhood asked elite women to educate citizens but did not grant suffrage; gradual emancipation statutes in Pennsylvania and New England contrast with the cotton-driven entrenchment of slavery after the 1793 gin and the 1787 fugitive-slave clause. Poor white men gained broader suffrage in some states as property tests eased, yet hierarchy by race and gender remained the organizing principle of citizenship.",
                    "Qualification: ‘Revolution’ here is strongest as a language of rights that later activists could cite, not as an equal social settlement in 1800.",
                ],
                "revolution-social-change",
                "Extent questions require a judgment word (limited/mixed/substantial) in the thesis, not a list of groups.",
            ),
            item(
                "SAQ. Ratification debates, 1787–1788.\n"
                "(a) Identify ONE Anti-Federalist objection to the proposed Constitution.\n"
                "(b) Explain ONE Federalist response (including, if you wish, The Federalist or the Bill of Rights bargain).\n"
                "(c) Explain ONE way the new federal structure still left significant power in the states.",
                SAQ_ABC,
                [
                    "(a) Anti-Federalists warned that a distant Congress and a powerful executive would recreate British-style consolidation and threaten local juries, militias, and rights without an explicit bill of rights.",
                    "(b) Federalists such as Madison argued that an extended republic would dilute faction; many also accepted amendments—the Bill of Rights—to specify limits on federal power and secure swing-state ratifications.",
                    "(c) States retained police powers over slavery, suffrage, family law, and most criminal law; senators were chosen by legislatures, embedding state governments inside the federal design.",
                ],
                "ratification-federalists",
                "Name a concrete objection (consolidation, standing army, missing bill of rights), not ‘they were scared of government.’",
            ),
            item(
                "DBQ-style paragraph (original source set, not a College Board packet). Prompt: Evaluate the relative importance of economic interest and constitutional principle in causing colonial resistance, 1763–1776.\n"
                "Sources (summaries): (1) Boston merchant letter on molasses duties; (2) Virginia resolves on taxation and consent; (3) cartoon of a tarred customs official; (4) British ministry memo on debt from the Seven Years’ War; (5) enslaved petitioner in Massachusetts invoking natural rights; (6) Quaker pamphlet urging boycott discipline.\n"
                "Write one body paragraph that answers the prompt, uses at least two sources as evidence, and adds one outside fact.",
                DBQ_PARA,
                [
                    "Claim: Economic injury made imperial policy urgent, but colonists translated that injury into a constitutional claim about consent—so principle was the language, while Atlantic commerce was the fuel.",
                    "Evidence: Source 1’s molasses complaint shows port elites calculating duties as a business threat; Source 2’s resolves recast the same crisis as a right of representative consent. Crowd punishment in Source 3 shows extra-legal enforcement when legal petitions failed.",
                    "Outside evidence: The 1764 Sugar Act’s vice-admiralty procedures, or the 1773 Tea Act’s favor to the East India Company, illustrate how fiscal design and monopoly mixed with rights talk. Complexity: Source 5 shows some people used revolutionary language to contest bondage, a claim most Patriot elites did not intend to nationalize.",
                ],
                "dbq-resistance-causes",
                "Group sources by mechanism (pocketbook vs. consent vs. coercion), then argue relative importance.",
            ),
        ],
    ),
    pack(
        "AP US History",
        "7B",
        "Period 4 Market & Democracy",
        "Original FRQs on the market revolution, Jacksonian politics, and reform/sectional tensions (Period 4). Not a released exam.",
        [
            item(
                "SAQ. The market revolution remade work and family in the first half of the nineteenth century.\n"
                "(a) Identify ONE transportation or communication innovation that integrated regional markets.\n"
                "(b) Explain ONE way wage labor or outwork changed gender or class relations.\n"
                "(c) Explain ONE way the same market processes intensified sectional difference.",
                SAQ_ABC,
                [
                    "(a) The Erie Canal (completed 1825) and later railroads lowered the cost of moving grain and manufactures between the trans-Appalachian West and Atlantic ports.",
                    "(b) New England mills recruited young women into supervised wage work, pulling some household production into factories while defining respectability against immigrant and poor labor; artisanal households lost control of the production process to merchant-capitalists.",
                    "(c) Cotton gins, steam, and credit tied the Lower South to British and northern mills, raising the political value of enslaved labor even as northern states industrialized with free labor ideology—the same market that unified commodities split the social systems producing them.",
                ],
                "market-revolution",
                "Connect a technology to a social relation, then to sectional political economy.",
            ),
            item(
                "SAQ. Jacksonian democracy and its limits, 1828–1840.\n"
                "(a) Identify ONE political change that expanded white male participation.\n"
                "(b) Explain ONE policy or action that asserted executive power over the economy or Native nations.\n"
                "(c) Explain ONE group that was excluded from the era’s ‘common man’ politics and how exclusion was justified or enforced.",
                SAQ_ABC,
                [
                    "(a) States dropped property requirements for white male suffrage and mass parties used conventions, newspapers, and spoils to mobilize voters.",
                    "(b) Jackson vetoed the recharter of the Second Bank and removed federal deposits; the Indian Removal Act (1830) and the Trail of Tears used federal and state power to seize Native land in the name of white settlement.",
                    "(c) Enslaved people, most free Black men (as states added racial bars), Native nations, and women were outside the electorate; removal treaties, slave codes, and coverture treated them as dependents or obstacles to white men’s independence.",
                ],
                "jacksonian-democracy",
                "Do not equate ‘more voters’ with ‘more democracy for everyone.’ Name the boundary.",
            ),
            item(
                "Short LEQ paragraph. Evaluate the extent to which the Second Great Awakening caused antebellum reform (temperance, abolition, women’s rights, institutions). Argue primarily religious, primarily market/political, or interdependent causes.",
                LEQ_CLAIM,
                [
                    "Thesis: Revival religion was a necessary spark for mass reform, but market disruption and democratic print culture determined which causes spread and who led them—so causation is interdependent, with religion as the organizing language.",
                    "Body: Charles Finney’s perfectionism and voluntary associations trained people to attack sin in society; temperance pledges and Sunday schools scaled through churches. Yet wage work, urban drink, and the cotton frontier created the social problems; Grimké sisters and Seneca Falls also drew on Enlightenment rights and Revolutionary memory, not only camp meetings.",
                    "Qualification: Southern evangelicalism often defended slavery, showing religion could obstruct as well as drive reform.",
                ],
                "second-great-awakening-reform",
                "Causation LEQ: distinguish spark, fuel, and limit.",
            ),
            item(
                "SAQ. Sectional crisis in the 1840s–1850s (lead-in to Period 5).\n"
                "(a) Identify ONE territorial acquisition that reopened the slavery-expansion question.\n"
                "(b) Explain ONE failed or fragile political ‘solution’ intended to manage that question.\n"
                "(c) Explain ONE way African Americans—enslaved or free—shaped the national debate.",
                SAQ_ABC,
                [
                    "(a) The Mexican-American War and the 1848 Treaty of Guadalupe Hidalgo added a vast Southwest, forcing Congress to decide whether slavery would follow the flag.",
                    "(b) The Compromise of 1850 paired California’s free-state admission with a stronger Fugitive Slave Act; popular sovereignty in Utah/New Mexico postponed a durable rule and outraged many Northerners who now saw federal law hunting people in their streets.",
                    "(c) Fugitives, petitioners, and writers such as Frederick Douglass publicized the violence of rendition; enslaved people’s escapes made the Fugitive Slave Act unenforceable without visible federal coercion, radicalizing Northern opinion.",
                ],
                "slavery-expansion-politics",
                "Keep (c) about Black political agency, not only white party splits.",
            ),
            item(
                "DBQ-style paragraph. Prompt: Evaluate whether Jacksonian-era federal policy promoted opportunity or dispossession.\n"
                "Sources (summaries): (1) Bank Veto message celebrating farmers against ‘monopoly’; (2) Cherokee memorial against removal; (3) northern mechanic’s newspaper on wages; (4) map of canal and cotton belts; (5) South Carolina Exposition excerpt on tariff; (6) women’s mill-worker petition on hours.\n"
                "Write one paragraph using ≥2 sources plus outside evidence.",
                DBQ_PARA,
                [
                    "Claim: Jacksonian policy expanded opportunity for many white men in land and party politics while systematically dispossessing Native nations and leaving wage workers and women outside the promised independence.",
                    "Evidence: Source 1 frames the Bank as an enemy of producers; Source 2 shows the same state treating Cherokee constitutionalism as disposable. Source 6’s mill petition reveals that ‘opportunity’ in factories came with long hours the democracy did not regulate.",
                    "Outside evidence: Worcester v. Georgia (1832) was ignored in practice; specie circular and the Panic of 1837 show that destroying the Bank did not stabilize credit. Complexity: nullification (Source 5) was a slaveholding state’s claim of local sovereignty, not a general theory of the little guy.",
                ],
                "jackson-opportunity-dispossession",
                "Relative evaluation: who is the ‘people’ in the documents?",
            ),
        ],
    ),
    pack(
        "AP US History",
        "7C",
        "Period 5 Union & Reconstruction",
        "Original FRQs on Civil War causation, wartime state-building, and Reconstruction’s gains and rollback (Period 5). Not a released exam.",
        [
            item(
                "SAQ. Why the Union held together militarily and politically, 1861–1865.\n"
                "(a) Identify ONE Union advantage in resources or institutions.\n"
                "(b) Explain ONE Confederate political or economic weakness.\n"
                "(c) Explain ONE way emancipation as Union policy changed the purpose and conduct of the war.",
                SAQ_ABC,
                [
                    "(a) The Union possessed a larger population, industrial capacity, and a functioning navy that could blockade Confederate ports.",
                    "(b) The Confederacy struggled to finance the war without a deep tax base, suffered from inflation, and faced states’ rights resistance to Richmond’s drafts and impressment.",
                    "(c) The Emancipation Proclamation (1863) made the destruction of slavery a Union war aim, authorized Black enlistment, and undercut British elite sympathy for a slaveholding republic—turning a war for union into a war that also remade Southern labor.",
                ],
                "civil-war-union-victory",
                "Avoid ‘the North was just better.’ Name a mechanism (blockade, industry, emancipation diplomacy).",
            ),
            item(
                "SAQ. Reconstruction amendments and enforcement.\n"
                "(a) Identify ONE change made by the Thirteenth, Fourteenth, or Fifteenth Amendment.\n"
                "(b) Explain ONE federal action (law, army, or agency) that tried to make that change real.\n"
                "(c) Explain ONE method white Southern Democrats used to restore racial hierarchy after 1867.",
                SAQ_ABC,
                [
                    "(a) The Fourteenth Amendment defined birthright citizenship and required states to provide equal protection and due process; the Fifteenth barred racial disfranchisement of men.",
                    "(b) The Freedmen’s Bureau, Union Leagues, and Enforcement Acts / Ku Klux Klan Act authorized federal prosecution of conspiracies that used violence to deny civil and political rights.",
                    "(c) Paramilitary groups, fraud, and later devices such as poll taxes, literacy tests, and grandfather clauses—plus convict leasing—reimposed white control after federal troops withdrew.",
                ],
                "reconstruction-amendments",
                "Pair the constitutional text with an enforcement story and a rollback method.",
            ),
            item(
                "Short LEQ paragraph. To what extent was Reconstruction a revolution in American federalism and citizenship (1865–1877)? Argue substantial, unfinished, or largely reversed by 1877, using specific evidence.",
                LEQ_CLAIM,
                [
                    "Thesis: Reconstruction was an unfinished revolution: it nationally redefined citizenship and briefly built Black-led biracial governments, but by 1877 federal retreat left those gains dependent on local white power.",
                    "Body: Black officeholding in South Carolina and Mississippi, public school beginnings, and the amendments were revolutionary compared with 1860. Yet Johnson’s leniency, white terror, the Slaughterhouse/Cruikshank narrowing of the Fourteenth Amendment, and the Compromise of 1877 ended sustained federal protection.",
                    "Qualification: Legal tools remained for a later civil-rights movement; 1877 closed the political window, not the constitutional text.",
                ],
                "reconstruction-revolution",
                "Use ‘unfinished revolution’ only if you specify what was built and what was dismantled.",
            ),
            item(
                "SAQ. Home front and dissent.\n"
                "(a) Identify ONE example of Northern or Southern dissent against wartime policy.\n"
                "(b) Explain ONE way the Lincoln administration expanded federal capacity (finance, draft, or civil liberties).\n"
                "(c) Explain ONE social change for women or African Americans on the home front.",
                SAQ_ABC,
                [
                    "(a) New York City draft riots (1863) attacked the conscription system and Black residents; in the Confederacy, bread riots and desertion signaled class strain.",
                    "(b) Congress created a national banking framework, issued greenbacks, and enacted a federal income tax; Lincoln suspended habeas corpus in security zones to hold the rail and telegraph spine.",
                    "(c) Women ran farms, staffed hospitals, and organized aid; enslaved people fled to Union lines as ‘contraband,’ forcing policy to catch up with their self-emancipation.",
                ],
                "civil-war-home-front",
                "Dissent and state-building belong in the same war story.",
            ),
            item(
                "DBQ-style paragraph. Prompt: Evaluate the relative importance of African American political action versus Northern Republican policy in shaping Reconstruction.\n"
                "Sources: (1) Black convention resolutions demanding suffrage; (2) Freedmen’s Bureau labor-contract complaint; (3) cartoon of a Black legislator; (4) Grant’s message on Klan enforcement; (5) sharecropping contract; (6) Liberal Republican criticism of ‘corruption.’\n"
                "One paragraph, ≥2 sources, one outside fact.",
                DBQ_PARA,
                [
                    "Claim: Republican statutes created a legal opening, but Reconstruction’s content—schools, militia, and constitutions—was driven by African American mobilization that Republicans only sometimes protected.",
                    "Evidence: Source 1 shows agenda-setting from below; Source 4 shows federal force as a response to terror against that agenda. Source 5’s sharecropping terms reveal how labor regimes could neutralize political rights without repealing amendments.",
                    "Outside evidence: The Union League and Black churches organized voters in 1867–68. Complexity: Source 6’s reform rhetoric helped Northerners justify abandoning Southern Black allies.",
                ],
                "reconstruction-agency",
                "Avoid a ‘Congress did Reconstruction’ narrative that erases Black politics.",
            ),
        ],
    ),
    # ========== AP World History ==========
    pack(
        "AP World History",
        "7A",
        "Land-Based Empires",
        "Original SAQ/LEQ practice on Ottoman, Mughal, Safavid, and Qing state-building (c. 1450–1750). Not a released exam.",
        [
            item(
                "SAQ. Gunpowder empires and legitimacy, c. 1450–1750.\n"
                "(a) Identify ONE method a land-based empire used to recruit or reward military elites.\n"
                "(b) Explain ONE religious or cultural policy used to legitimize rule over diverse subjects.\n"
                "(c) Explain ONE limit or resistance that policy encountered.",
                SAQ_ABC,
                [
                    "(a) Ottomans used the devshirme to staff janissary and administrative posts; Mughals and others granted jagirs or timars so cavalry elites lived from assigned revenues.",
                    "(b) Mughal Akbar’s relatively inclusive court rituals and tax policy toward non-Muslims, or Ottoman claims as caliphal protectors of Sunni Islam, staged the emperor as the axis of a multiethnic order; Qing emperors performed both Confucian and Inner Asian rituals.",
                    "(c) Aurangzeb’s more exclusionary turn and temple destruction fed unrest; janissary political power later constrained sultans; Qing hair-and-dress mandates sparked resistance even as they marked submission.",
                ],
                "land-based-empire-legitimacy",
                "Name an empire and a concrete institution (devshirme, millet, examination, banner system).",
            ),
            item(
                "SAQ. Comparison: Ottoman and Qing methods of ruling diverse populations.\n"
                "(a) Identify ONE similarity in how both empires managed difference.\n"
                "(b) Explain ONE difference in bureaucratic recruitment.\n"
                "(c) Explain ONE reason the difference you named in (b) developed.",
                SAQ_ABC,
                [
                    "(a) Both ruled vast, multiethnic territories by combining military garrisons with local intermediaries rather than converting everyone immediately.",
                    "(b) Qing civil administration continued a Confucian examination elite (with Manchu banner overlay), while Ottomans relied more on slave-elite households and Islamic legal scholars than on a single exam-based Han-style mandarinate.",
                    "(c) The Qing conquered a preexisting Chinese bureaucratic empire and needed its tax machinery; Ottomans expanded through frontier ghazi warfare and Balkan recruitment paths that produced a different elite sociology.",
                ],
                "ottoman-qing-comparison",
                "Comparison SAQs need a shared category (elites, religion, tax) named in (a).",
            ),
            item(
                "Short LEQ paragraph. Evaluate the extent to which religious division was the primary challenge for land-based empires c. 1450–1750. Consider fiscal-military pressures as an alternative primary challenge.",
                LEQ_CLAIM,
                [
                    "Thesis: Religious difference was a recurring management problem, but the primary structural challenge was fiscal-military: paying gunpowder armies and preventing elite capture of revenue.",
                    "Body: Safavid–Ottoman wars had a Sunni–Shi’a edge, and Mughal succession fights used sectarian language. Yet timar decay, silver inflation, and the cost of muskets/forts drove rebellions and tax farming across empires that were not solely ‘about religion.’",
                    "Qualification: Religion became explosive when it mapped onto tax and status grievances (e.g., jizya restoration as both piety and revenue).",
                ],
                "empire-challenges-religion-fiscal",
                "Primary-challenge prompts require ranking, not a list of problems.",
            ),
            item(
                "SAQ. Monumental architecture and imperial image.\n"
                "(a) Identify ONE monument or capital project from a land-based empire in this period.\n"
                "(b) Explain ONE political message that project was meant to send.\n"
                "(c) Explain ONE way subject populations might have experienced that project differently from the court.",
                SAQ_ABC,
                [
                    "(a) Examples: Mughal Taj Mahal or Fatehpur Sikri; Ottoman Süleymaniye complex; Qing Summer Palace / Beijing ritual axis; Inca (if using Americas land empires) Cusco reshaping—pick one and stay consistent.",
                    "(b) Such projects staged the ruler as pious, just, and cosmically central—hospital-mosque complexes advertised welfare; mausoleums claimed dynastic eternity.",
                    "(c) Corvée, requisitioned artisans, and diverted tax grain meant subjects could experience monuments as extraction; pilgrims might use a mosque as social infrastructure the court counted as glory.",
                ],
                "imperial-monumental-architecture",
                "HIPP the monument: audience is not only foreign ambassadors.",
            ),
            item(
                "DBQ-style paragraph. Prompt: Evaluate how land-based empires used both coercion and incorporation c. 1450–1750.\n"
                "Sources: (1) Ottoman kanun excerpt on reaya taxes; (2) Jesuit letter from Beijing on rites; (3) Mughal miniature of a court durbar; (4) Russian law on serf mobility; (5) map of caravan cities under Qing; (6) Safavid chronicler on converting a Caucasian population.\n"
                "One paragraph, ≥2 sources, outside evidence.",
                DBQ_PARA,
                [
                    "Claim: Empires paired spectacular incorporation (ritual, titles, trade protection) with coercive extraction (serfdom, deportation, tax registers); incorporation was a tool of rule, not the opposite of violence.",
                    "Evidence: Source 3’s durbar shows ranked inclusion; Source 4 shows unfree labor as the agrarian base. Source 2’s rites controversy reveals that cultural incorporation had limits when it threatened core identity.",
                    "Outside evidence: Ottoman millet autonomy or Qing banner garrisons in Xinjiang. Complexity: Source 6’s conversion campaign shows incorporation can itself be coercive.",
                ],
                "coercion-incorporation-empires",
                "Do not treat ‘tolerance’ as a modern liberal policy; it was a governing technology.",
            ),
        ],
    ),
    pack(
        "AP World History",
        "7B",
        "Transoceanic Interconnections",
        "Original FRQs on the Columbian Exchange, maritime empires, labor systems, and syncretism (c. 1450–1750). Not a released exam.",
        [
            item(
                "SAQ. Columbian Exchange as a biological and economic rupture.\n"
                "(a) Identify ONE food crop or animal that crossed the Atlantic and name a region that adopted it.\n"
                "(b) Explain ONE demographic effect of disease in the Americas.\n"
                "(c) Explain ONE way the Exchange reshaped labor demand in the Atlantic world.",
                SAQ_ABC,
                [
                    "(a) Maize and potatoes raised caloric ceilings in parts of Afro-Eurasia; horses transformed Plains and Andean transport and warfare; sugarcane plantations exploded in the Caribbean.",
                    "(b) Smallpox, measles, and other infections, combined with war and displacement, caused catastrophic Indigenous population loss, collapsing labor systems and political structures in many zones.",
                    "(c) Plantation sugar and later other cash crops, plus silver mining, drove demand for coerced labor—Indigenous drafts such as the mita and the transatlantic trade in enslaved Africans—because surviving Indigenous populations could not meet colonial export targets.",
                ],
                "columbian-exchange",
                "Name a species and a place; then link biology to labor, not only to ‘change.’",
            ),
            item(
                "SAQ. Mercantilism and maritime rivalry.\n"
                "(a) Identify ONE mercantilist policy or company form used by a European state.\n"
                "(b) Explain ONE way that policy created conflict with rivals or with colonists.\n"
                "(c) Explain ONE Asian or African response that was not simply ‘being discovered.’",
                SAQ_ABC,
                [
                    "(a) Chartered monopolies (VOC, EIC) and navigation laws that required colonial goods to pass through the metropole.",
                    "(b) Smuggling, pirate/privateer wars, and Anglo-Dutch commercial wars followed from exclusive claims; colonists resented closed markets when prices were worse than foreign buyers offered.",
                    "(c) Tokugawa Japan restricted European access to Nagasaki; West African states such as Dahomey or Asante bargained firearms and captives on their terms; Mughal and Qing courts licensed or limited European factories.",
                ],
                "mercantilism-maritime-empires",
                "Part (c) must have an African or Asian state as an actor.",
            ),
            item(
                "Short LEQ paragraph. Evaluate the extent to which transoceanic connections c. 1450–1750 created a single world economy. Argue substantial integration, regional cores with thin links, or something in between.",
                LEQ_CLAIM,
                [
                    "Thesis: The period created a genuinely global silver-and-plantation circuit, but most people’s calories, textiles, and politics remained regional—so integration was deep in some commodities and thin as a ‘single economy.’",
                    "Body: Potosí silver flowed to China via Manila; sugar and enslaved labor stitched Brazil, the Caribbean, and Europe. Yet Ottoman, Mughal, and Qing agrarian systems still dominated their hinterlands; Indian Ocean trade adapted Europeans more than it vanished.",
                    "Qualification: Integration was coercive for enslaved and Indigenous workers even when peasant China was not ‘Atlanticized.’",
                ],
                "early-modern-world-economy",
                "Avoid both ‘nothing global yet’ and ‘everyone was in one market.’",
            ),
            item(
                "SAQ. Labor systems in the Americas.\n"
                "(a) Identify ONE coerced labor system other than chattel slavery.\n"
                "(b) Explain ONE reason planters or miners shifted toward enslaved African labor in some regions.\n"
                "(c) Explain ONE way enslaved or Indigenous people resisted or created autonomous spaces.",
                SAQ_ABC,
                [
                    "(a) Encomienda, repartimiento/mita, indenture, or Spanish debt peonage.",
                    "(b) Indigenous demographic collapse, legal limits on Indigenous enslavement, and the profitability of sugar made a transatlantic slave trade attractive to planters who wanted a renewable, racially marked labor force they claimed as property.",
                    "(c) Maroon communities, flight, sabotage, Islam or African religious continuities, and legal petitions in Spanish courts; Andean communities used the mita calendar and ayllu structures to buffer extraction.",
                ],
                "coerced-labor-americas",
                "Resistance is not only ‘revolt’; include everyday and legal forms.",
            ),
            item(
                "DBQ-style paragraph. Prompt: Evaluate the social effects of syncretic belief systems in the early modern Atlantic and Americas.\n"
                "Sources: (1) description of Virgin of Guadalupe devotion; (2) Inquisition record of a healer; (3) Jesuit relation from Paraguay; (4) Vodun/Candomblé practice note; (5) Protestant sermon in New England against ‘idolatry’; (6) Andean church mural mixing Christian and local motifs.\n"
                "One paragraph, ≥2 sources, outside evidence.",
                DBQ_PARA,
                [
                    "Claim: Syncretism was not gentle mixing; it was a field of power in which Indigenous and African communities preserved meaning under Christian institutions while clergy tried to police orthodoxy.",
                    "Evidence: Source 1’s Guadalupe cult shows colonial Catholicism absorbing Mesoamerican sacred geography; Source 2’s Inquisition file shows the violence of boundary-making. Source 4 indicates African diasporic religions reconstituting under plantation Christianity.",
                    "Outside evidence: Extirpation campaigns in the Andes or casta paintings ranking mixed ancestry. Complexity: Source 3’s missions could be both refuge and labor control.",
                ],
                "syncretism-power",
                "Define syncretism as a process under inequality, not as a food metaphor.",
            ),
        ],
    ),
    pack(
        "AP World History",
        "7C",
        "Revolutions 1750–1900",
        "Original FRQs on Atlantic revolutions, industrial change, and new nationalisms (Unit 5). Not a released exam.",
        [
            item(
                "SAQ. Enlightenment ideas and Atlantic revolutions.\n"
                "(a) Identify ONE Enlightenment political idea that revolutionaries cited.\n"
                "(b) Explain ONE way a revolution applied that idea selectively (who was left out).\n"
                "(c) Explain ONE way Haitian or Latin American independence differed from the North American case in social outcome.",
                SAQ_ABC,
                [
                    "(a) Popular sovereignty, natural rights, or social-contract limits on monarchy—as in declarations from the U.S., France, or Spanish America.",
                    "(b) U.S. founders excluded enslaved people, Indigenous nations, and women from full citizenship; French revolutionaries debated and then rolled back colonial slavery before Haitian pressure; creole elites in Spanish America often feared Indigenous and mixed-race majorities.",
                    "(c) Haiti destroyed the slave plantation order and faced diplomatic isolation; much of Spanish America replaced peninsular rule with creole republics that preserved hierarchy more than they abolished coerced labor.",
                ],
                "atlantic-revolutions-enlightenment",
                "Selectivity is the point of (b); do not write that ‘they believed in equality for all’ without a limit.",
            ),
            item(
                "SAQ. Industrialization’s global split.\n"
                "(a) Identify ONE technological or organizational change in British (or Western) industry.\n"
                "(b) Explain ONE way industrialization reshaped class relations in an industrializing society.\n"
                "(c) Explain ONE way global economic links made some regions into suppliers of food, metals, or cotton rather than factories.",
                SAQ_ABC,
                [
                    "(a) Mechanized spinning/weaving, coal-steam power, or factory discipline and interchangeable parts.",
                    "(b) A wage-earning proletariat formed beside a capitalist class; urban crowding and new gender ideologies of separate spheres accompanied the shift from household production.",
                    "(c) Egyptian and Indian cotton, Chilean nitrates, or Caribbean sugar entered industrial cores on terms that discouraged local textile competition (e.g., colonial tariff policy), producing export dependency rather than symmetric industrialization.",
                ],
                "industrial-revolution-global",
                "Unit 5 wants the factory and the plantation in one system.",
            ),
            item(
                "Short LEQ paragraph. Evaluate the extent to which nationalism was a force for unification versus a force for fragmentation in the period 1750–1900. Use at least two regions.",
                LEQ_CLAIM,
                [
                    "Thesis: Nationalism both welded some states (Italy, Germany, Meiji Japan) and shattered multiethnic empires’ claims to automatic loyalty (Ottoman Balkans, Habsburgs, and later Qing crises)—so it was a double-edged state-making ideology, not a single ‘rise of nations’ story.",
                    "Body: Cavour/Bismarck used wars and railroads to build territorial states around language myths. Simultaneously, Greek, Serbian, and other movements converted millet difference into separatist politics; anti-colonial writers in India and the Philippines adapted the same language against empires.",
                    "Qualification: Civic nationalisms (some Latin American republics) claimed unity while excluding Indigenous majorities—unification for some, fragmentation of older sovereignties for others.",
                ],
                "nationalism-unify-fragment",
                "Two regions minimum; avoid a Europe-only essay if you can add a colonial example.",
            ),
            item(
                "SAQ. Abolition and the persistence of coercion.\n"
                "(a) Identify ONE political or economic pressure that contributed to the abolition of the transatlantic slave trade or of slavery in a specific empire.\n"
                "(b) Explain ONE way coerced labor continued after legal abolition.\n"
                "(c) Explain ONE intellectual or religious argument used either for or against abolition.",
                SAQ_ABC,
                [
                    "(a) Haitian revolution’s shock, British naval suppression after 1807, industrialists’ preference for free-labor markets, or Civil War military necessity in the United States.",
                    "(b) Indenture of South and East Asian workers to Caribbean and Indian Ocean plantations; sharecropping and convict labor in the U.S. South; Belgian Congo extraction regimes.",
                    "(c) Evangelical ‘sin of slaveholding’ versus proslavery readings of hierarchy and ‘civilizing’ paternalism; Smithian arguments that slave labor was inefficient compared with wages.",
                ],
                "abolition-coerced-labor",
                "Abolition is a process with substitutions, not a moral finish line.",
            ),
            item(
                "DBQ-style paragraph. Prompt: Evaluate the relative importance of ideas versus material interests in causing revolutions 1750–1900.\n"
                "Sources: (1) excerpt on bread prices in Paris; (2) Declaration of the Rights of Man; (3) creole complaint about peninsular monopolies; (4) mill-worker petition on hours; (5) enslaved leader’s proclamation in Saint-Domingue; (6) cartoon of a steam engine as a monarch.\n"
                "One paragraph, ≥2 sources, outside evidence.",
                DBQ_PARA,
                [
                    "Claim: Material crisis made old regimes brittle, but revolutionary coalitions needed a rights language to turn hunger and tax rage into a new sovereignty—ideas were weapons, not the only fuel.",
                    "Evidence: Source 1’s prices show subsistence shock; Source 2 supplies a template for legitimate violence against ‘despots.’ Source 5 shows enslaved people seizing Enlightenment and African political traditions under extreme material exploitation.",
                    "Outside evidence: American colonial debt politics after 1763, or British industrial riots. Complexity: Source 3’s creoles wanted open trade more than racial equality.",
                ],
                "revolution-ideas-vs-interests",
                "Relative importance: pick a ranking and let sources fight.",
            ),
        ],
    ),
    # ========== AP European History ==========
    pack(
        "AP European History",
        "7A",
        "Renaissance & Reformation",
        "Original FRQs on humanism, print, Protestant reform, and confessional conflict (c. 1450–1648). Not a released exam.",
        [
            item(
                "SAQ. Renaissance humanism and politics.\n"
                "(a) Identify ONE humanist educational or literary practice.\n"
                "(b) Explain ONE way rulers used art or history writing to legitimize power.\n"
                "(c) Explain ONE limit of Renaissance ‘individualism’ in social structure (gender, class, or slavery).",
                SAQ_ABC,
                [
                    "(a) Recovery of classical Latin, civic rhetoric, or education in studia humanitatis (grammar, rhetoric, history, moral philosophy).",
                    "(b) Princely patronage of portraiture, tombs, and commissioned histories (e.g., Medici Florence, papal Rome, Burgundian courts) advertised pietas, military virtù, and dynastic continuity.",
                    "(c) Humanist republics still rested on guilds, dowry markets, and unfree or marginally free labor; elite women were more often subjects of portraits than authors of policy; Mediterranean slavery did not vanish because Petrarch was fashionable.",
                ],
                "renaissance-humanism",
                "Tie culture to patronage and social limits, not to a vague ‘rebirth of man.’",
            ),
            item(
                "SAQ. Reformation as a media and state event.\n"
                "(a) Identify ONE Protestant theological claim that challenged Catholic practice.\n"
                "(b) Explain ONE way printing shaped the conflict.\n"
                "(c) Explain ONE political reason a prince or city might adopt Protestantism.",
                SAQ_ABC,
                [
                    "(a) Justification by faith, scripture as authority over certain papal claims, or rejection of indulgences as meritorious sales.",
                    "(b) Cheap pamphlets, vernacular Bibles, and woodcuts let arguments travel faster than university disputation; Catholic presses answered in kind—print was a weapon for both sides.",
                    "(c) Secularizing monastery lands, weakening episcopal courts, and rallying urban elites against tithes made reform fiscally and jurisdictionally attractive; cuius regio, eius religio later formalized princely choice.",
                ],
                "reformation-print-state",
                "Theology plus interest: readers reward both.",
            ),
            item(
                "Short LEQ paragraph. Evaluate the extent to which the Catholic Reformation (or Counter-Reformation) successfully contained Protestant expansion by 1600. Take a regional approach (Italy/Spain vs. France/Holy Roman Empire vs. Poland, etc.).",
                LEQ_CLAIM,
                [
                    "Thesis: Catholic reform recaptured or held southern and much of eastern-central Europe through new orders, councils, and princely alliance, but it failed to reverse Protestant majorities in northern Germany, Scandinavia, and parts of Britain—success was regional, not continental reversal.",
                    "Body: Jesuits, Trent’s seminary and doctrinal decrees, and Spanish/papal power densified Catholic identity. Yet Peace of Augsburg (1555) already legalized Lutheran princes; France’s wars showed a militant Catholic crown that still had to bargain with Huguenots until later.",
                    "Qualification: ‘Success’ included coercion (Inquisition, Index) as much as spiritual revival.",
                ],
                "catholic-reformation-extent",
                "Extent + geography beats a list of Jesuit achievements.",
            ),
            item(
                "SAQ. Wars of religion and state formation.\n"
                "(a) Identify ONE religious war or massacre between 1550 and 1648.\n"
                "(b) Explain ONE way military conflict increased state capacity (tax, army, or bureaucracy).\n"
                "(c) Explain ONE attempt at religious coexistence or settlement.",
                SAQ_ABC,
                [
                    "(a) French Wars of Religion / St. Bartholomew; Dutch Revolt; Thirty Years’ War; English Civil War as a related conflict over church and crown.",
                    "(b) Prolonged war forced rulers to raise standing forces, sell offices, or negotiate with estates for taxes—military revolution arguments: larger armies required more extraction.",
                    "(c) Edict of Nantes (1598), Peace of Augsburg, or Westphalia’s recognition of Calvinism and territorial church control as a (unequal) coexistence framework.",
                ],
                "wars-of-religion-state",
                "Connect battlefield to fiscal-military state, then to a legal settlement.",
            ),
            item(
                "DBQ-style paragraph. Prompt: Evaluate whether the Reformation increased ordinary people’s agency or intensified social discipline.\n"
                "Sources: (1) Luther on priesthood of all believers; (2) city ordinance on poor relief; (3) woodcut of iconoclasm; (4) Genevan consistory minute; (5) peasant twelve articles; (6) Trent decree on marriage registration.\n"
                "One paragraph, ≥2 sources, outside evidence.",
                DBQ_PARA,
                [
                    "Claim: Reform opened vernacular access and sometimes justified revolt, but new churches and Catholic reform alike built disciplinary institutions—agency and surveillance grew together.",
                    "Evidence: Source 1’s priesthood language licensed lay reading; Source 5 shows peasants claiming gospel against serfdom. Source 4’s consistory and Source 2’s poor laws show moral policing of work and sex.",
                    "Outside evidence: Luther’s condemnation of the Peasants’ War. Complexity: Source 3’s iconoclasm is popular action that elites then tried to channel.",
                ],
                "reformation-agency-discipline",
                "Avoid a simple ‘Luther freed the individual’ story.",
            ),
        ],
    ),
    pack(
        "AP European History",
        "7B",
        "Absolutism & Scientific Revolution",
        "Original FRQs on absolutism vs. constitutionalism, the scientific revolution, and Enlightenment public spheres. Not a released exam.",
        [
            item(
                "SAQ. Absolutism as a political project (not a complete description of daily rule).\n"
                "(a) Identify ONE institution Louis XIV or a comparable monarch used to centralize authority.\n"
                "(b) Explain ONE way nobles were co-opted rather than simply crushed.\n"
                "(c) Explain ONE practical limit on ‘absolute’ power (finance, distance, or corporate privilege).",
                SAQ_ABC,
                [
                    "(a) Versailles ritual, intendants, or a standing army loyal to the crown rather than to feudal banners.",
                    "(b) Court pensions, offices, and etiquette turned high nobles into competitors for royal favor; they kept provincial social power while losing independent military capacity.",
                    "(c) Tax farming, venality of office, and provincial estates meant the king bargained for money; logistics limited uniform law in the countryside.",
                ],
                "absolutism-louis-xiv",
                "AP Euro wants ‘absolute’ as a claim and a toolkit, not as total control.",
            ),
            item(
                "SAQ. Constitutionalism in England (and/or the Dutch Republic).\n"
                "(a) Identify ONE conflict that constrained monarchy in seventeenth-century England.\n"
                "(b) Explain ONE institutional outcome (Parliament, parties, or rights language).\n"
                "(c) Explain ONE social group that gained—and one that did not—from that settlement.",
                SAQ_ABC,
                [
                    "(a) Civil Wars, execution of Charles I, or the 1688–89 Revolution against James II’s Catholic and standing-army fears.",
                    "(b) Bill of Rights (1689), regular Parliaments, and later ministerial responsibility to parliamentary majorities; a Protestant succession.",
                    "(c) Landed and commercial elites gained security of property and influence; Catholics, many Dissenters at times, and the propertyless remained outside full political membership; Ireland experienced the settlement as conquest.",
                ],
                "english-constitutionalism",
                "Name a document or practice, then the social boundary of the ‘political nation.’",
            ),
            item(
                "Short LEQ paragraph. Evaluate the extent to which the Scientific Revolution depended on new institutions (academies, print, patronage) rather than on isolated genius. Use at least two thinkers or sites.",
                LEQ_CLAIM,
                [
                    "Thesis: Individual insight mattered, but the Scientific Revolution was an institutional transformation: patronage, instruments, correspondence networks, and academies made replication and credit possible.",
                    "Body: Galileo’s telescope needed Medici patronage and print controversy; the Royal Society’s Philosophical Transactions created a public of witnesses. Newton’s Principia circulated through a mathematical community, not a garret myth.",
                    "Qualification: Artisanal instrument makers and uncredited calculators show the ‘genius’ story hides labor.",
                ],
                "scientific-revolution-institutions",
                "Institutions = who pays, who witnesses, who prints.",
            ),
            item(
                "SAQ. Enlightenment and the public sphere.\n"
                "(a) Identify ONE new venue or genre of public debate (salon, coffeehouse, encyclopedia, newspaper).\n"
                "(b) Explain ONE Enlightenment claim about religion, law, or political economy.\n"
                "(c) Explain ONE way Enlightenment thought was used to justify hierarchy (race, gender, or empire) as well as reform.",
                SAQ_ABC,
                [
                    "(a) Paris salons, London coffeehouses, Diderot’s Encyclopédie, or spectator journalism.",
                    "(b) Religious toleration, checks on arbitrary justice (Beccaria), or physiocratic/Smithian critiques of mercantilist restriction.",
                    "(c) Staging ‘civilization’ scales that ranked Africans and Indigenous peoples as needing European tutelage; Rousseau’s gendered domesticity; some philosophes advising enlightened despots rather than democrats.",
                ],
                "enlightenment-public-sphere",
                "Include the dark side of ‘reason’ so the paragraph earns complexity.",
            ),
            item(
                "DBQ-style paragraph. Prompt: Evaluate whether seventeenth-century state-building was driven more by war or by ideology.\n"
                "Sources: (1) army size table 1600–1700; (2) Bossuet on divine-right monarchy; (3) Dutch pamphlet on true liberty; (4) tax revolt chronicle; (5) map of fortified frontiers; (6) Locke excerpt on consent.\n"
                "One paragraph, ≥2 sources, outside evidence.",
                DBQ_PARA,
                [
                    "Claim: Fiscal-military competition was the engine of state-building; ideology explained and legitimated extraction after the fact, and sometimes limited it.",
                    "Evidence: Source 1’s army growth and Source 5’s fortresses show war’s material demand. Source 2 sacralizes obedience to pay for that machine; Source 6 and Source 3 show ideologies that could restrain kings when elites had already been armed by conflict (England, Dutch Revolt).",
                    "Outside evidence: Louis XIV’s wars and English Navigation-era naval finance. Complexity: ideology could cause war (confessional) as well as follow it.",
                ],
                "war-ideology-state-building",
                "Rank the causes; let a political-theory source be a tool, not the whole story.",
            ),
        ],
    ),
    pack(
        "AP European History",
        "7C",
        "French Revolution & Napoleon",
        "Original FRQs on 1789–1815: crisis, radicalization, Napoleonic rule, and the Vienna settlement. Not a released exam.",
        [
            item(
                "SAQ. Origins of 1789.\n"
                "(a) Identify ONE fiscal or social pressure on the French monarchy in the 1780s.\n"
                "(b) Explain ONE way the Estates-General / National Assembly transformed the crisis into a constitutional one.\n"
                "(c) Explain ONE urban popular action that pushed elites further than they intended.",
                SAQ_ABC,
                [
                    "(a) Debt from wars (including American intervention), an inefficient privilege-ridden tax system, and harvest failure that spiked bread prices.",
                    "(b) The Third Estate’s claim to represent the nation, the Tennis Court Oath, and decrees abolishing feudal dues turned a budget meeting into a sovereignty revolution.",
                    "(c) The storming of the Bastille and the October days (women’s march to Versailles) forced the king to accept Paris as a political actor and to move toward the capital.",
                ],
                "french-revolution-origins",
                "Sequence: structure → assembly politics → crowd.",
            ),
            item(
                "SAQ. Radicalization, 1792–1794.\n"
                "(a) Identify ONE emergency institution or law of the Terror period.\n"
                "(b) Explain ONE reason revolutionaries argued emergency was necessary (war, betrayal, or subsistence).\n"
                "(c) Explain ONE group targeted and why that targeting reveals a limit of ‘universal’ rights.",
                SAQ_ABC,
                [
                    "(a) Committee of Public Safety, Revolutionary Tribunal, Law of Suspects, or levée en masse.",
                    "(b) Coalition invasion, Vendée civil war, and assignat collapse made leaders claim that virtue required unmasking internal enemies.",
                    "(c) Vendée peasants, refractory clergy, political factions (Hébertists, Dantonists), and women political clubs suppressed in 1793—rights were for a disciplined nation, not for all speakers.",
                ],
                "french-revolution-terror",
                "Explain a logic of emergency without writing a morality play only.",
            ),
            item(
                "Short LEQ paragraph. To what extent did Napoleon preserve the French Revolution’s social gains while destroying its political ones? Take a mixed position with specific codes, wars, or institutions.",
                LEQ_CLAIM,
                [
                    "Thesis: Napoleon stabilized key social gains of 1789 (legal equality for men, career open to talent, peasant property) in the Civil Code while replacing parliamentary politics with plebiscitary authoritarianism and dynastic war.",
                    "Body: The Code entrenched property and patriarchal family law; concordat pacified Catholic practice without restoring church lands. Censorship, prefects, and imperial nobility gutted the revolution’s political clubs even as schools and the Legion of Honor advertised merit.",
                    "Qualification: Export of the Code via conquest spread reform and extraction; Haitian independence showed the revolution’s racial limit that Napoleon tried to reverse by restoring slavery in 1802.",
                ],
                "napoleon-revolution-extent",
                "Split social vs. political explicitly in the thesis.",
            ),
            item(
                "SAQ. Europe after Napoleon.\n"
                "(a) Identify ONE goal of the Congress of Vienna settlement.\n"
                "(b) Explain ONE way the settlement tried to contain France or revolution.\n"
                "(c) Explain ONE nationalist or liberal challenge that the settlement failed to resolve.",
                SAQ_ABC,
                [
                    "(a) Balance of power, legitimacy of restored dynasties, or compensation for victors (Prussia, Russia, Austria, Britain).",
                    "(b) Buffer states, Bourbon restoration, and Concert diplomacy/intervention against revolution (Troppau principles in practice).",
                    "(c) German and Italian unification movements, Polish questions, and 1820s–30s liberal revolts showed that restored maps did not restore 1788 social imagination.",
                ],
                "congress-of-vienna",
                "Name a mechanism (buffer, congress system), then a leftover fuse.",
            ),
            item(
                "DBQ-style paragraph. Prompt: Evaluate the role of women in the French Revolution—as political actors and as symbols.\n"
                "Sources: (1) October 1789 march testimony; (2) Olympe de Gouges excerpt; (3) republican allegory of Liberty; (4) law closing women’s clubs; (5) Napoleonic Code article on wives; (6) British cartoon of sans-culottes women.\n"
                "One paragraph, ≥2 sources, outside evidence.",
                DBQ_PARA,
                [
                    "Claim: Women forced subsistence and constitutional issues onto the agenda and produced a feminist rights language, but republican and Napoleonic regimes reduced them to allegory and household legal minority.",
                    "Evidence: Source 1 shows crowd sovereignty; Source 2 claims civic equality. Source 4 and Source 5 close the political and civil door; Source 3’s Liberty as a female body lets men monopolize the speaking republic.",
                    "Outside evidence: Society of Revolutionary Republican Women; Charlotte Corday as a contested symbol. Complexity: Source 6’s foreign satire used gender to delegitimize the revolution itself.",
                ],
                "women-french-revolution",
                "Actors vs. symbols is the analytic split.",
            ),
        ],
    ),
    # ========== AP English Language ==========
    pack(
        "AP English Language",
        "7A",
        "Rhetorical Analysis Civic Voice",
        "Original rhetorical-analysis paragraphs on civic speeches and public letters (invented occasions). Not a released exam prompt or passage.",
        [
            item(
                "Rhetorical analysis (one developed paragraph + thesis). Headnote: At a 2024 city-council hearing on whether to replace a downtown bus barn with luxury condos, mechanic-turned-union-steward Mara Chen, age 54, speaks for 4 minutes. She begins with the names of three night-shift cleaners, then holds up a laminated weekly pass, then concedes that ‘empty lots look tidy in developer renderings,’ then ends by asking councilors to ‘vote as if your last bus already left.’\n"
                "Write a thesis and one body paragraph analyzing how Chen’s choices address a split audience (elected officials, cameras, coworkers).",
                RA_PARA,
                [
                    "Thesis: Chen recasts the bus barn as a public timepiece rather than a parcel, using particular names, a tactile prop, a visual concession, and a kairotic last-bus metaphor to raise the political cost of a yes-vote while performing fiscal seriousness for televised officials.",
                    "Names make displacement countable and local, so councilors must erase people rather than a ‘facility.’ The laminated pass is a working-class ethos object: it is cheap, scuffed, and scheduled—unlike renderings. Conceding tidiness steals the aesthetic argument, then the last-bus close imposes a deadline that matches the hearing’s vote.",
                    "Complexity: coworkers hear solidarity; cameras hear a story; officials hear a threat to being seen as the people who canceled the last bus.",
                ],
                "ra-civic-hearing",
                "Choice → effect on a named audience → purpose. No device list without warrants.",
            ),
            item(
                "Rhetorical analysis. A state university president emails alumni after a storm flattened the campus farm used by first-generation students for paid internships. The email opens with a weather app screenshot, uses ‘we’ 14 times, buries the ask for money after a paragraph on ‘resilience competencies,’ and closes with a Latin motto the school adopted in 1890.\n"
                "In one paragraph, analyze how arrangement and pronoun work manage alumni who may resent fundraising.",
                RA_PARA,
                [
                    "Thesis: The president delays the ask and saturates the letter with institutional ‘we’ so that donation feels like membership in a weather-struck family rather than a pitch, while the Latin motto converts a farm disaster into continuity with a nineteenth-century origin story.",
                    "The screenshot supplies apparent empiricism (this was real wind, not mismanagement). ‘Resilience competencies’ translates loss into educational product language alumni already value. Burying the ask performs reluctance. The motto is a constraint move: it reminds old graduates that the school’s identity predates their checkbook discomfort.",
                    "Risk: competency jargon may sound like it is monetizing students’ jobs; a stronger letter would keep one intern’s schedule visible.",
                ],
                "ra-fundraising-email",
                "Arrangement is a rhetorical choice; say what the delay does to resistance.",
            ),
            item(
                "Rhetorical analysis. Op-ed by a high-school debate coach arguing that the town should not livestream school-board meetings. Devices in the piece (original): extended metaphor of a ‘jury that never recesses’; two short sentences after a 48-word periodic sentence; a parenthetical directed at ‘the clip accounts’; a concession that sunlight laws exist for a reason.\n"
                "Write a paragraph on how syntax and metaphor court parents who want transparency but fear pile-ons.",
                RA_PARA,
                [
                    "Thesis: The coach grants the legitimacy of open government, then uses a jury metaphor and a crash of short sentences to make perpetual recording feel like a due-process violation rather than a civic good, isolating ‘clip accounts’ as the real audience of livestreams.",
                    "The periodic sentence recreates the feeling of a meeting that will not end; the short sentences after it mimic gavel raps—certainty after overwhelm. The parenthetical names a parasitic audience so ordinary parents can oppose livestreams without opposing democracy. The concession on sunlight laws is inoculation: I am not hiding, I am designing a room where speech can be unfinished.",
                    "Purpose: move the stasis from ‘secret vs. open’ to ‘deliberation vs. performance.’",
                ],
                "ra-syntax-metaphor",
                "Name the stasis shift; that is often the sophistication point.",
            ),
            item(
                "Rhetorical analysis. A climate scientist testifies to a rural county commission about a proposed lithium mine. She uses a local creek’s USGS gauge numbers, avoids the word ‘crisis,’ tells a story about her grandfather’s gravel pit, and ends by asking for a two-year monitoring condition rather than a ban.\n"
                "Analyze how she builds ethos with an audience skeptical of ‘outside experts.’",
                RA_PARA,
                [
                    "Thesis: The scientist trades prophetic climate diction for kinship and measurability: creek gauges, a grandfather’s extractive job, and a monitoring ask present her as a neighbor who bargains rather than a cosmopolitan who forbids.",
                    "USGS numbers relocate authority from her PhD to a public instrument the county already funds. The gravel-pit story performs class bilingualism—extraction is heritage, not insult. Avoiding ‘crisis’ refuses a media frame that would license dismissal. The two-year condition is a policy concession that lets commissioners vote yes-with-strings and still look pro-jobs.",
                    "Limitation: if the creek is already politicized, numbers will be heard as cherry-picking; she would need to pre-empt who picks the baseline year.",
                ],
                "ra-expert-ethos-rural",
                "Ethos is audience-relative; define the suspicion you think she is managing.",
            ),
            item(
                "Mini RA (compare two choices). A mayor’s press conference after a water-main break uses (1) a live map with red dots and (2) a list of three ‘what we are doing before midnight’ actions. Some residents shout ‘boil water.’\n"
                "In one paragraph, explain how the two choices attempt different jobs and whether they clash.",
                RA_PARA,
                [
                    "Thesis: The map performs omniscience and scale; the midnight list performs agency and deadline—together they try to replace panic with a plot, but they can clash if the map shows more red than the list can plausibly fix.",
                    "Red dots make the break a shared visual fact, reducing rumor. The three actions answer the exigence ‘is anyone working?’ Shouts of ‘boil water’ are a competing instruction set; if the mayor does not incorporate that chorus, the map looks like a graphics department while the street supplies public-health guidance.",
                    "Better integration: put the boil-water order on the same slide as the dots so expertise and crowd knowledge do not compete for the camera.",
                ],
                "ra-crisis-visuals",
                "When two choices fight, say so—that is complexity, not indecision.",
            ),
        ],
    ),
    pack(
        "AP English Language",
        "7B",
        "Argument Public Tradeoffs",
        "Original argument FRQ paragraphs on public tradeoffs. Not a released exam prompt.",
        [
            item(
                "Argument. Prompt (original): Should public high schools replace most evening homework with optional, staffed ‘mastery clinics’ two nights a week? Write a thesis and one body paragraph that uses a mechanism (time, transportation, or measurement) and a qualifier.",
                ARG_PARA,
                [
                    "Thesis: Schools should replace most take-home homework with staffed clinics, except for brief in-class retrieval practice, because nightly work mainly measures household resources rather than learning.",
                    "Mechanism: completion rates track quiet space, broadband, and whether a sibling needs the only phone—not mastery. Clinics convert ‘help’ from a family lottery into a scheduled public good. Qualifier: districts without late buses must pair clinics with transportation or the policy reproduces the inequity it claims to fix.",
                    "Counter: athletics and jobs—answer with flexible windows, not with ‘school comes first’ as if time were equally owned.",
                ],
                "arg-homework-clinics",
                "Warrant after evidence: why does the mechanism prove the claim?",
            ),
            item(
                "Argument. Prompt: A city proposes a 11 p.m. curfew for under-18s in the commercial district after a viral fight video. Take a position that is not simply ‘safety vs. freedom.’ Use one comparison or analogy and one limit.",
                ARG_PARA,
                [
                    "Thesis: The city should reject an age curfew and instead fund visible late transit, trained de-escalation staff, and targeted penalties for assault, because curfews police presence rather than harm and train teens that public space is conditional on looking unthreatening.",
                    "Analogy: we do not solve adult bar fights by banning all adults from sidewalks after 11; we enforce assault law. A curfew will sweep workers, debate kids, and kids who missed the last bus. Limit: temporary, geographically tight emergency orders after a specific pattern of violence can be justified if they sunset and come with data.",
                    "Sophistication: the video’s audience is national; local policy should not be written for comment sections.",
                ],
                "arg-youth-curfew",
                "Refuse the false dichotomy in the thesis itself.",
            ),
            item(
                "Argument. Prompt: Should universities require a one-credit ‘attention lab’ (phones in lockers during two seminar hours per week)? Defend a yes, no, or hybrid, with a concession to the other side.",
                ARG_PARA,
                [
                    "Thesis: Universities should offer, not universally require, attention labs, because coerced deprivation can become a class performance of focus while leaving lecture halls unreformed—but they should fund small seminars that make undistracted talk a public good.",
                    "Concession: phone-free rooms do improve recall in some studies and protect students who cannot self-limit in a notification economy. Refutation of mandate: a one-credit add-on dumps the problem on students’ willpower and may punish caregivers who need to be reachable. Hybrid: required phone-free discussion in courses that already claim discussion as the method, with documented exceptions.",
                    "Evidence type: mechanism (notifications fragment encoding) plus equity (who can afford to be unreachable).",
                ],
                "arg-attention-lab",
                "Hybrid positions need a principle that decides when the rule applies.",
            ),
            item(
                "Argument. Prompt: A county will either expand landfill capacity or impose a pay-as-you-throw bag fee. Argue which should be the default and why the other is a complement, not a substitute.",
                ARG_PARA,
                [
                    "Thesis: Pay-as-you-throw should be the default price signal, with landfill expansion only as a time-limited backstop, because unlimited cheap disposal hides costs that land, water, and downhill communities pay.",
                    "Fee makes volume visible at the household; expansion without a fee invites more waste (induced demand). Complement: some expansion may still be needed during a transition, plus subsidies for larger families and apartments that cannot store recyclables. Counter: illegal dumping—answer with enforcement and convenient drop-off, not with free unlimited landfill as the only anti-dumping policy.",
                    "Qualifier: rural hauling distances change the fee’s fairness; pair with transfer stations.",
                ],
                "arg-landfill-vs-fee",
                "Default vs. backstop is a clean argument architecture.",
            ),
            item(
                "Argument. Prompt: ‘Politeness is a political technology.’ Using that sentence as a stimulus (not as something you must agree with), take a position on whether schools should teach ‘civil disagreement’ as a graded skill.",
                ARG_PARA,
                [
                    "Thesis: Schools should grade civil disagreement as a skill of representing an opponent accurately and answering their strongest reason, not as a skill of sounding nice, because politeness without steelmanning protects power while cruelty without accuracy is just noise.",
                    "Teaching: require a one-sentence fair paraphrase before rebuttal (a classroom version of the stimulus). That is political: it slows dominance by volume. Limit: do not grade ‘tone’ in ways that punish dialect or trauma; grade moves (concession, distinction, burden of proof).",
                    "Counter: civility codes silence protest—answer by distinguishing hearing a claim from requiring emotional labor toward every speaker.",
                ],
                "arg-civil-disagreement",
                "Define the term you will defend so ‘civility’ is not a fog.",
            ),
        ],
    ),
    pack(
        "AP English Language",
        "7C",
        "Synthesis Source Conversation",
        "Original synthesis-style paragraphs using invented source summaries. Not a College Board source packet.",
        [
            item(
                "Synthesis. Question: Should the city cap short-term rentals in residential zones?\n"
                "Sources (invented): A economist table (rents up 9% on high-Airbnb blocks); B neighborhood letter on noise; C tourism bureau infographic (hotel tax); D housekeeper testimony (no benefits, unstable hours); E urban planner blog on ‘ghost buildings’; F small landlord interview (pays property tax via weekend rentals).\n"
                "Thesis + one paragraph that converses among at least three sources using a criterion (housing security, fiscal health, or labor).",
                SYN_PARA,
                [
                    "Thesis: The city should cap non-owner-occupied short-term rentals in residential zones because housing security and neighborhood function outweigh hotel-tax gains, while still permitting owner-occupied spare-room listings that Source F describes.",
                    "Conversation: A’s rent gradient and E’s ghost buildings name a conversion mechanism; B’s noise is a local internatlity, not nostalgia. C’s tax graphic is real but answers a different question (municipal revenue vs. resident shelter). D shows the labor regime the ‘sharing’ brand hides. F is the exception that should be carved in, not the rule that kills the cap.",
                    "Limitation: A is correlational; pair the cap with vacancy data so opponents cannot call it scapegoating.",
                ],
                "syn-short-term-rentals",
                "Group by mechanism (conversion of housing stock), not by source letter order.",
            ),
            item(
                "Synthesis. Question: Should the state require a personal-finance course for graduation?\n"
                "Sources: A employer survey (new hires lack loan literacy); B teacher union statement (crowds out civics); C randomized study (tiny long-run savings effect); D student who works 25 hours (course at 7 a.m.); E credit-union pamphlet; F sociologist on family wealth as the real predictor.\n"
                "Write a paragraph that does not ignore C and F.",
                SYN_PARA,
                [
                    "Thesis: Require a short, well-designed module inside existing economics/civics rather than a full-year course, because C’s small effects and F’s wealth predictor show that a credit-bearing class cannot substitute for wages and transfers—yet A’s employer demand and E’s practical tools still justify guaranteed access to the vocabulary of loans and taxes.",
                    "B’s crowding-out worry is decisive against a year-long mandate. D shows scheduling can make the requirement a tax on working students; if required, it must be offered in multiple periods. C limits overclaim: do not sell the course as closing the racial wealth gap.",
                    "Use F as a warrant for pairing the module with state policy (aid, wages), not as a reason to teach nothing.",
                ],
                "syn-personal-finance-req",
                "When a study shows small effects, your thesis must shrink—do not narrate it away.",
            ),
            item(
                "Synthesis. Question: Should public libraries install book-lockers outside for 24-hour pickup?\n"
                "Sources: A circulation stats after a pilot; B librarian on staffing holds; C parent worried about ‘unsupervised materials’; D disability advocate (lockers lack ramps at the pilot site); E downtown business association (foot traffic); F teen focus group (privacy from family).\n"
                "Adjudicate using accessibility as a non-negotiable constraint.",
                SYN_PARA,
                [
                    "Thesis: Install lockers only where the path of travel meets accessibility standards and staffing can sustain holds, because A’s circulation bump is not worth creating a two-tier library (D) or a moral panic (C) that recenters control over teens’ reading (F).",
                    "E’s foot-traffic claim is a weak public-good argument compared with the library’s charter. B is the operational bottleneck: lockers fail if holds expire in a back room. C should be answered with existing checkout policy, not architecture that implies danger.",
                    "F’s privacy is a reason for lockers, but not at the cost of D; redesign the pad first.",
                ],
                "syn-library-lockers",
                "Name a non-negotiable so sources have a ranking rule.",
            ),
            item(
                "Synthesis. Question: A school board will adopt AI-writing guidelines. Sources: A university study on detection false positives for bilingual students; B teacher who wants process portfolios; C parent who wants ‘ban it’; D college admissions officer (they assume AI exists); E student with dysgraphia (dictation tools); F newspaper editorial on cheating culture.\n"
                "Write a paragraph that treats detection software as a policy choice, not a fact of nature.",
                SYN_PARA,
                [
                    "Thesis: Ban detector-as-verdict and require process portfolios (B) with permitted assistive uses (E), because A shows racialized error and D shows colleges will not rewind the technology—while C and F describe a real integrity worry that process evidence can answer better than a black-box score.",
                    "Put A and E together: the students most likely to be flagged or to need tools are not the cartoon cheater in F. C’s ban is unenforceable at home and punishes transparency. D prevents nostalgic policy.",
                    "Integrity mechanism: dated outlines, oral defenses, and in-class writes—not a percentage from a vendor.",
                ],
                "syn-ai-writing-policy",
                "Policy synthesis: name the enforcement tool you reject and the one you replace it with.",
            ),
            item(
                "Synthesis. Question: Should the park department create permanent quiet zones and cap amplified events?\n"
                "Sources: A public-health note on noise and sleep; B concert-in-the-park nonprofit budget; C nearby apartment petition; D bird survey (nesting); E food-vendor association; F teenager interview (‘the park is the only free stage’).\n"
                "Use a spatial solution, not a pure yes/no.",
                SYN_PARA,
                [
                    "Thesis: Make quiet zones permanent on the residential and wetland edges (A, C, D) while concentrating a capped number of amplified events on the already-loud commercial edge with transit (B, E, F), because rest and gathering are both public goods that cannot occupy the same acoustic space.",
                    "F’s free-stage claim is met by keeping a stage, not by denying sleep. B’s budget is a reason to fund amplification infrastructure in the right polygon, not everywhere. D gives a seasonal constraint (nesting) that a calendar cap can honor.",
                    "Enforcement: decibel meters beat rotating ‘quiet days’ that nobody can predict.",
                ],
                "syn-park-quiet-zones",
                "Spatial synthesis: different parcels, different rules.",
            ),
        ],
    ),
    # ========== AP English Literature ==========
    pack(
        "AP English Literature",
        "7A",
        "Poetry Close Reading",
        "Original poetry FRQs with short invented poems (not released exam poems).",
        [
            item(
                "Poetry. Read the original poem ‘Inventory of the Porch Light’ by a invented speaker.\n\n"
                "The bulb keeps a small orange hour / after we say we are coming in. / Moths write the same wrong name / on the glass, and the glass / does not correct them. / I count the steps I do not take / toward the switch. / Somewhere a kettle insists / it is the only urgency left.\n\n"
                "In a thesis and one paragraph, analyze how the poem constructs hesitation as an ethical and domestic action. Refer to image, syntax, or sound.",
                LIT_POETRY,
                [
                    "Thesis: The poem treats not-flipping the switch as a form of care—keeping a ‘small orange hour’ for late arrivals—while moths and kettle parody other kinds of insistence, so hesitation is not weakness but a rival clock.",
                    "The enjambment ‘the glass / does not correct them’ makes the porch a failed school; the house refuses pedagogy. Anaphora of domestic objects (bulb, moths, kettle) crowds the speaker’s agency into a single counted refusal (‘steps I do not take’). Assonance in ‘small orange hour’ slows the line into the delay it describes.",
                    "The kettle’s ‘only urgency’ is ironic: steam claims monopoly so the speaker’s quieter ethic can be heard as resistance to household tyranny.",
                ],
                "lit-poetry-hesitation",
                "Quote 4–8 words; warrant to meaning; mention a shift (outside moths vs. inside kettle).",
            ),
            item(
                "Poetry. Original sonnet fragment (lines 1–8 of an invented poem ‘Census of Fog’):\n"
                "We numbered boats until the harbor / learned to lie with a straight face. / Fog took the masts in its mouth / like a child who will not share. / I said your name to the railing / and the railing kept it, wet, / a coin too thin for any fare.\n\n"
                "Analyze how figurative language and sound turn counting into loss. One paragraph + thesis.",
                LIT_POETRY,
                [
                    "Thesis: Counting, which should produce knowledge, becomes a ritual that teaches the harbor to ‘lie’; fog’s child-simile makes weather a greedy agent, and the name-as-thin-coin image converts address into unspendable remainder.",
                    "Hard consonants in ‘counted boats’ mimic tallying; then sibilance in ‘straight face’ and ‘masts in its mouth’ muffles that certainty. The railing that ‘kept’ the name is personified storage without circulation—memory as damp inventory.",
                    "Volta energy (even in an octave) arrives when speech to the beloved becomes an object ‘too thin for any fare’: intimacy fails as ticket, not as feeling.",
                ],
                "lit-poetry-fog-census",
                "Connect a metaphor’s vehicle (child, coin) to the poem’s epistemology (what counting cannot do).",
            ),
            item(
                "Poetry. Original free verse ‘The Substitute Teacher Charts the Periodic Table’:\n"
                "He writes noble and does not smile. / The chalk is already a smaller bone. / In the third row a girl practices / disappearing by perfect posture. / I am only here until the bell / invents a more official loneliness.\n\n"
                "Analyze tone and the function of scientific diction in constructing authority and its collapse.",
                LIT_POETRY,
                [
                    "Thesis: Chemical vocabulary (‘noble’) is borrowed as a social rank the substitute cannot occupy; chalk-as-bone and the bell’s ‘official loneliness’ expose classroom authority as a temporary isotope.",
                    "‘Noble’ without a smile is a failed performance of inert superiority—noble gases do not combine, and neither, apparently, does he. The girl’s ‘disappearing by perfect posture’ inverts visibility: compliance as camouflage. The last line gives the bell agency, demoting the teacher to a placeholder for institutional time.",
                    "Irony: the periodic table promises stable identities; the poem’s people are all interim.",
                ],
                "lit-poetry-substitute",
                "Diction from another field (science) should be read as metaphor for power, not as a chemistry lesson.",
            ),
            item(
                "Poetry. Compare the function of repetition in two original couplets:\n"
                "A: ‘Return, return—the river does not learn / our bridges; it rehearses them to silt.’\n"
                "B: ‘She said enough, enough, as if the word / could put a hinge on weather.’\n"
                "One paragraph: how each repetition’s job differs (futility vs. attempted control).",
                LIT_POETRY,
                [
                    "Thesis: A’s doubled ‘return’ is the river’s indifferent curriculum, grinding human structures; B’s doubled ‘enough’ is a speech-act that tries and fails to legislate climate—repetition as nature’s drill versus repetition as human spell.",
                    "A enjambs into silt, so the couplet’s music is erosional. B’s ‘hinge on weather’ is metaphysical wit: a door metaphor for an unhingeable system. Both use repetition to stage powerlessness, but A locates power in water, B in a speaker who still believes words are hardware.",
                    "Together they sketch two lyric politics: watch the world unbuild, or keep speaking as if speech were infrastructure.",
                ],
                "lit-poetry-repetition-compare",
                "Comparison poems: one contrast category (agency) named in the thesis.",
            ),
            item(
                "Poetry. Original dramatic monologue opening:\n"
                "Do not thank me for the light. I billed the dark / at union rates. The stars are scabs. I pick them.\n\n"
                "Analyze how the speaker’s diction constructs a character who refuses gratitude. What kind of power is being claimed?",
                LIT_POETRY,
                [
                    "Thesis: The speaker recasts cosmic or domestic ‘light’ as waged labor and the sky as a body to be picked, claiming proletarian and slightly violent expertise against a culture of thanks that would make the work a gift.",
                    "‘Billed the dark / at union rates’ yokes lyric night to a contract, comic and bitter. ‘Stars are scabs’ is a labor pun (strikebreakers) and a wound image; ‘I pick them’ is both grooming and harvesting. Gratitude is refused because thanks erases the invoice.",
                    "Character: a technician of darkness who needs the audience to see a workplace, not a miracle.",
                ],
                "lit-poetry-monologue-light",
                "Dramatic monologue: infer a listener (‘do not thank me’) and a social world (unions, bills).",
            ),
        ],
    ),
    pack(
        "AP English Literature",
        "7B",
        "Prose Character & Setting",
        "Original prose analysis using short invented excerpts. Not released exam passages.",
        [
            item(
                "Prose. Excerpt (original):\n"
                "Aunt Nila ironed the tablecloth as if the creases were rumors about her. In the next room the radio apologized in Spanish for a storm that had already arrived. I kept my suitcase closed because open zippers, in this house, counted as opinions.\n\n"
                "Analyze how domestic objects and sound characterize the narrator’s relationship to the aunt and to language. Thesis + one paragraph.",
                LIT_PROSE,
                [
                    "Thesis: The excerpt makes housework a public-relations campaign and sound a belated official weather, so the narrator’s closed suitcase is a strategy of speechlessness in a house where even zippers vote.",
                    "Ironing ‘rumors’ personifies cloth as reputation; the aunt’s power is interpretive, not merely maternal. The radio’s apology ‘for a storm that had already arrived’ stages language as always late—useful for a bilingual space where official words miss lived timing. The suitcase rule is comic hyperbole that reveals surveillance of small gestures.",
                    "Setting is not backdrop: tablecloth, radio, zipper are the social system.",
                ],
                "lit-prose-domestic-surveillance",
                "Read objects as social rules, not as ‘vivid details’ for their own sake.",
            ),
            item(
                "Prose. Excerpt:\n"
                "The intern learned to knock with two knuckles only. Three meant you still thought the office was a door. Mr. Pell’s laugh was a stapler: quick, metallic, good for stacks. When he said we, he meant the firm; when he said you, he meant a future that could be shredded.\n\n"
                "Analyze how the passage constructs institutional power through metaphor and pronoun. What does the intern understand that a summary of ‘a strict boss’ would miss?",
                LIT_PROSE,
                [
                    "Thesis: Power here is a pedagogy of knocks and pronouns: the intern is trained to treat access as a technical skill, while Pell’s stapler-laugh and we/you split turn the firm into a grammar that can dispose of a person as paper.",
                    "Two knuckles vs. three is arbitrary ritual that manufactures insiders. The stapler simile makes violence clerical—no blood, just fastening. ‘We’ absorbs; ‘you’ isolates a shreddable future, so identity is a document status.",
                    "Complexity: the intern’s learning is already complicity; noticing the code is not escaping it.",
                ],
                "lit-prose-office-power",
                "Pronouns are characterization.",
            ),
            item(
                "Prose. Free indirect discourse excerpt:\n"
                "Of course the lake was closed; everything worth wanting wore a chain. She could still see last July’s raft, ridiculous and bright, like a thought she was too old to have in public. If she swam anyway, the town would call it a character. If she didn’t, the town would call it a character. The difference was only which story got there first.\n\n"
                "Analyze how free indirect style and repetition construct a mind trapped in other people’s narratives.",
                LIT_PROSE,
                [
                    "Thesis: The passage uses free indirect discourse to let the town’s voice occupy the woman’s wanting; the repeated ‘character’ punchline shows that action and inaction are equally narratable, so agency collapses into who seizes the plot first.",
                    "‘Of course’ is communal knowing inside her thought. The raft as ‘a thought she was too old to have in public’ fuses object, memory, and shame. Parallel if-clauses with the same predicate empty moral choice; only speed of gossip remains.",
                    "The lake’s chain is literal setting and metaphor for authorized desire.",
                ],
                "lit-prose-free-indirect",
                "Name FID: third person + character’s idiom (‘of course,’ ‘ridiculous’). ",
            ),
            item(
                "Prose. Setting as pressure. Excerpt:\n"
                "The subway map above the doors had been rewritten in marker by someone who needed extra stations. Names that were not stops bloomed in blue. Passengers pretended the official dots were still the only physics. A child sounded them out anyway, making a second city in the car’s air.\n\n"
                "How does the passage use the map to explore unofficial knowledge vs. institutional reality? One paragraph + thesis.",
                LIT_PROSE,
                [
                    "Thesis: The marked map is a palimpsest city: extra stations are needs that the system will not stop for, and adult ‘physics’ is a social agreement to ignore them, while the child re-oralizes the unofficial city and makes it briefly public.",
                    "‘Bloomed’ treats graffiti as growth, not vandalism. ‘Only physics’ ironizes official maps as natural law. The child’s sounding-out is performance that threatens the pretense—sound cannot be unread the way a marker line can be ignored by the eyes of commuters.",
                    "Setting (the car) is a theater of competing cartographies.",
                ],
                "lit-prose-map-setting",
                "Ask what the setting knows that characters refuse to know.",
            ),
            item(
                "Prose. Character through dialogue tags and refusal. Excerpt:\n"
                "‘You’re early,’ he said, which meant she was late to the version of the evening he had already finished without her. ‘I brought tomatoes,’ she said. He nodded at the bag as if it had confessed. ‘We have tomatoes,’ he said, and the we was a closed jar.\n\n"
                "Analyze subtext: how do tomatoes and pronouns enact a relationship crisis without an argumentative thesis from the narrator?",
                LIT_PROSE,
                [
                    "Thesis: The scene stages incompatibility as competing inventories: her gift is surplus in a household ‘we’ that has already been sealed; his remarks rewrite her timing and her offering as errors against a completed private evening.",
                    "‘You’re early’ as accusation-by-clock shows he narrates her arrival from inside his finished script. Nodding ‘as if it had confessed’ treats produce as guilt. The closed-jar simile makes ‘we’ a preserved couple that cannot admit new contents.",
                    "No fight is needed; the diction of groceries does the breakup work.",
                ],
                "lit-prose-dialogue-subtext",
                "Subtext FRQ: say what each line does to status, not what it ‘is about.’",
            ),
        ],
    ),
    pack(
        "AP English Literature",
        "7C",
        "Drama Knowledge & Complexity",
        "Original drama/scene analysis (invented stage action). Not a released exam excerpt.",
        [
            item(
                "Drama. Scene: Two siblings pack a dead parent’s apartment. Sibling A keeps handing B objects and asking ‘keep?’ Sibling B answers only by placing items in a donation box without looking up. A finally puts a music box in B’s coat pocket without asking. A phone on speaker plays a voicemail of the parent saying ‘don’t fight about the lamps.’\n"
                "Thesis + paragraph: how do stage business and the voicemail construct grief as a problem of consent and audience (who hears whom)?",
                LIT_DRAMA,
                [
                    "Thesis: The scene makes inheritance a failed dialogue: A seeks verbal consent, B converts grief into sorting labor, and the pocketed music box plus the speaker-voicemail turn the dead parent into a third actor who can still issue stage directions about lamps while missing the real fight (touch, pockets, looking).",
                    "Refusal to look is a blocking choice that denies A a face to persuade. The secret pocket gift violates the ‘keep?’ ritual, escalating from questions to stealth. The voicemail’s public playback is dramatic irony: the parent forbids the wrong conflict, so the audience hears a misaimed morality.",
                    "Complexity: B’s silence may be care (doing the work) or punishment (withholding speech); the play should not decide too fast.",
                ],
                "lit-drama-grief-props",
                "Drama evidence is who holds what, who looks, who is overheard.",
            ),
            item(
                "Drama. A mayor and a journalist wait for an elevator. The mayor’s aide stands slightly upstage with a tablet. Whenever the journalist asks a question, the elevator ding happens and the mayor treats the ding as an answer. On the fourth ding, the aide mouths ‘no comment’ silently; the journalist sees it; the mayor does not.\n"
                "Analyze dramatic irony and status. What does the elevator become?",
                LIT_DRAMA,
                [
                    "Thesis: The elevator is a mechanical interrupter that the mayor weaponizes as destiny, while the aide’s silent ‘no comment’ creates a knowledge split: the journalist and audience share a truth the mayor’s performance of busy fate cannot see.",
                    "Dings as answers satirize political time—urgency that is really avoidance. Upstage tablet is power’s prompt box. The fourth ding plus mouthing is a turn: staff, not the official, becomes the real source, and the mayor is demoted to a person who cannot read his own scene.",
                    "Status: the journalist gains epistemic status without gaining a quote, a bitter win typical of public-play worlds.",
                ],
                "lit-drama-elevator-irony",
                "Irony: who knows the aide’s line, and how does that revise the mayor’s ‘answers’?",
            ),
            item(
                "Drama. A chorus of night-shift nurses speaks in overlapping medical abbreviations, then one nurse steps into a spotlight and talks in full sentences about a patient’s dog. The abbreviations resume when a supervisor enters.\n"
                "How does the play use chorus, diction shift, and lighting to explore what kinds of speech are permitted at work?",
                LIT_DRAMA,
                [
                    "Thesis: Overlap and abbreviation are the workplace’s official music—efficient, depersonalized, safe under supervision—while spotlighted syntax about a dog is the unsanctioned human remainder that lighting both honors and isolates as exceptional.",
                    "When the supervisor enters, the return to abbreviations is not only fear; it is a demonstration that care has a dialect for managers. The dog story is particularity that cannot be billed. Spotlight risks sentimentality; the play should keep it short so it reads as stolen time, not as a commercial for nurses’ souls.",
                    "Chorus: many bodies, one compressed language; stepping out is a political blocking choice.",
                ],
                "lit-drama-chorus-diction",
                "Connect form (chorus, light) to labor conditions, not only to ‘emotion.’",
            ),
            item(
                "Drama. In a two-hander, Character C only speaks in questions; Character D only speaks in declarative moral slogans. Mid-scene they swap modes for eight lines, then snap back. A glass of water is never drunk; it is moved closer to whoever is currently asking questions.\n"
                "Analyze how the mode-swap and the water glass theatricalize power as a speaking style.",
                LIT_DRAMA,
                [
                    "Thesis: Power is not a personality but a grammar: questions extract, slogans armor; the swap shows both characters can occupy either weapon, and the undrunk water follows interrogation like a spotlight, promising refreshment that is really a mark of who is being examined.",
                    "Never drinking keeps the glass as a token, not as naturalism. When they snap back, the play suggests that style is habitual domination, not a one-time experiment. Eight lines is long enough for the audience to want the swap to be liberation—and to watch it fail.",
                    "Moral slogans as armor: they end conversation; questions reopen it only to control the agenda.",
                ],
                "lit-drama-speech-modes",
                "Treat the water as blocking, not as ‘symbol of life’ unless you warrant it.",
            ),
            item(
                "Literary argument (works you have read—use any appropriate play or novel, original prompt). Prompt: ‘A character’s most revealing action is often a refusal.’ In a thesis and one paragraph, apply this claim to a specific refusal (not a death, not a battle). Show complexity: what the refusal protects and what it costs.",
                LIT_DRAMA,
                [
                    "Thesis (model structure, original example using a public-domain frame): In Sophocles’ Antigone, Antigone’s refusal to leave her brother unburied is a civic-theological speech-act that protects kinship law and costs her life and Ismene’s usable middle path—so refusal is both fidelity and a narrowing of politics to the tomb.",
                    "Alternatively with a modern novel you have studied: name the refusal (not answering a letter, not boarding a train), the institution it defies, and the person it harms besides the hero.",
                    "Sophistication: refusals can be conservative (protecting an old code) even when they look rebellious against a king or a husband.",
                ],
                "lit-argument-refusal",
                "Literary argument still needs a defensible thesis and textual moment, not theme stickers.",
            ),
        ],
    ),
    # ========== AP Human Geography ==========
    pack(
        "AP Human Geography",
        "7A",
        "Population & Migration",
        "Original FRQs on DTM, migration theories, and forced movement. Not a released exam.",
        [
            item(
                "FRQ. A country has a TFR of 1.4, a large elderly share, and net in-migration of working-age adults to two primate metro areas.\n"
                "(a) Identify the likely Demographic Transition stage and one population-pyramid shape implication.\n"
                "(b) Explain ONE economic challenge of aging and ONE way in-migration can offset it.\n"
                "(c) Explain ONE political or cultural tension that spatial concentration of migrants in primate cities can produce.",
                GEO_FRQ,
                [
                    "(a) Stage 4 approaching 5 (low birth, low death, possible decline). Pyramid: narrow base, widening top; dependency ratio tilts old.",
                    "(b) Rising pension/healthcare costs and shrinking native labor force; immigrants can fill jobs and pay taxes if they have legal work and services. Offset is incomplete if migrants’ own fertility assimilates downward quickly or if they are excluded from formal work.",
                    "(c) Nativist politics, housing competition in the primate city, and rural regions that lose youth while receiving little immigration—scale mismatch between national need and local reception.",
                ],
                "hug-dtm-aging-migration",
                "Define TFR/DTM; then jump scales (national labor vs. neighborhood politics).",
            ),
            item(
                "FRQ. Using Ravenstein-style principles (not memorizing a numbered list as magic):\n"
                "(a) Explain why most migrations historically have been relatively short-distance or stepwise.\n"
                "(b) Explain ONE reason rural-to-urban streams dominate in industrializing regions.\n"
                "(c) Identify a contemporary counterexample (e.g., long-haul guest work, climate displacement) and explain what new condition makes it possible or necessary.",
                GEO_FRQ,
                [
                    "(a) Information, cost, and intervening opportunities: people move along known corridors; each step reduces uncertainty.",
                    "(b) Cities concentrate wages, education, and services; agricultural mechanization pushes surplus labor (Lee’s push-pull + intervening obstacles).",
                    "(c) Gulf labor contracts, refugee airlifts, or climate relocation can be long-distance because states, recruiters, and smuggling networks subsidize or compel movement; cheap flights and visas/guest systems change distance friction.",
                ],
                "hug-migration-ravenstein",
                "A ‘law’ is a tendency; (c) must name the new friction-reducer or coercer.",
            ),
            item(
                "FRQ. Malthus vs. Boserup vs. a cornucopian/tech claim, applied to a densely farmed delta facing sea-level rise.\n"
                "(a) State each view in one sentence as it would predict for this delta.\n"
                "(b) Explain why sea-level rise is a poor fit for a simple Malthusian ‘too many people, not enough food’ story.\n"
                "(c) Propose ONE adaptation that is geographic (not only ‘invent a crop’). ",
                GEO_FRQ,
                [
                    "(a) Malthus: population outruns food, famine checks. Boserup: density induces intensification (more labor/tech per hectare). Cornucopian: markets/tech raise yields indefinitely.",
                    "(b) The binding constraint is land loss, salinization, and storm surge—environmental space shrinking—not a universal arithmetic of mouths. Food can still be imported if income and trade allow, which is a political-economic question.",
                    "(c) Managed retreat corridors, mangrove restoration, or elevated housing plus salt-tolerant aquaculture in lost paddy—spatial redesign, not only seed science.",
                ],
                "hug-malthus-boserup-delta",
                "Show that carrying capacity is about resources and institutions, not a single number.",
            ),
            item(
                "FRQ. Refugees, asylum seekers, and IDPs.\n"
                "(a) Define the three terms with the key legal/spatial difference.\n"
                "(b) Explain ONE reason IDPs may be more numerous yet less visible in international media.\n"
                "(c) Explain ONE way a receiving city’s ethnic enclave can be both a pull factor and a constraint on later spatial assimilation.",
                GEO_FRQ,
                [
                    "(a) Refugee: fled across a border, recognized under international protection norms. Asylum seeker: claims protection, status pending. IDP: displaced inside their own country, still under that state’s legal umbrella (often weakly).",
                    "(b) No border crossing means fewer UNHCR camera shots and less diplomatic theater; the same government that failed them may control access.",
                    "(c) Enclaves provide language, jobs, and housing (chain migration) but can concentrate poverty and slow majority-language networks if schools and work remain internally segmented.",
                ],
                "hug-forced-migration-terms",
                "AP Hug loves precise terms; do not interchange refugee and IDP.",
            ),
            item(
                "FRQ. A choropleth of national TFR hides internal variation. Using Nigeria or India or the United States as a mental map:\n"
                "(a) Explain ONE reason subnational fertility can differ (urbanization, education, religion, or policy).\n"
                "(b) Explain how a national DTM label can mislead a health planner.\n"
                "(c) Identify a better representation than a single national choropleth and why.",
                GEO_FRQ,
                [
                    "(a) Urban women with more schooling typically have lower TFR; rural or high-pronatalist regions lag; China’s former policy vs. ethnic exemptions is another pattern (use only if accurate to your example).",
                    "(b) A ‘stage 4’ average can hide high-fertility districts that still need obstetric care and low-fertility districts that need geriatric care—wrong kit shipped to the wrong place.",
                    "(c) A cartogram of births, a dasymetric map, or a small-multiple pyramid by region; at minimum, a two-scale map (state + metro).",
                ],
                "hug-scale-fertility-maps",
                "Scale is the FRQ: national mean vs. lived region.",
            ),
        ],
    ),
    pack(
        "AP Human Geography",
        "7B",
        "Culture & Political Geography",
        "Original FRQs on language, religion, borders, and centripetal/centrifugal forces. Not a released exam.",
        [
            item(
                "FRQ. Lingua francas and official language policy.\n"
                "(a) Define lingua franca and give ONE contemporary example in a named region.\n"
                "(b) Explain ONE reason a state adopts an official language that is not the majority mother tongue.\n"
                "(c) Explain ONE centrifugal risk of that policy and ONE centripetal hope.",
                GEO_FRQ,
                [
                    "(a) A language of wider communication among people with different L1s—e.g., Swahili in much of East Africa, English in Nigerian business, Bahasa Indonesia as a planned national lingua franca.",
                    "(b) Colonial administrative residue, desire to avoid privileging one ethnic L1, or global economic access.",
                    "(c) Risk: speakers of other languages face school and job exclusion (centrifugal). Hope: a shared public language for courts and markets (centripetal)—if access to schooling is real.",
                ],
                "hug-lingua-franca-policy",
                "Centripetal/centrifugal must be tied to a specific language rule, not vibes.",
            ),
            item(
                "FRQ. Borders.\n"
                "(a) Distinguish a subsequent boundary from a superimposed one with a real-world sketch (you may use Africa’s colonial borders or a U.S. example).\n"
                "(b) Explain ONE way a geometric border can still produce conflict.\n"
                "(c) Explain how a federal system might manage cultural difference differently from a unitary state.",
                GEO_FRQ,
                [
                    "(a) Subsequent: drawn after cultural landscape is in place (often attempting to follow groups). Superimposed: imposed by outsiders with limited regard for existing ethnolinguistic geographies (many African colonial lines).",
                    "(b) Straight lines can bisect seasonal grazing, oil fields, or river basins, creating resource and mobility disputes despite looking ‘clean’ on a map.",
                    "(c) Federalism can devolve education/language policy to regions (accommodation); unitary states may standardize (efficiency and nation-building) at the cost of peripheral alienation—or they may still use special autonomous regions.",
                ],
                "hug-boundaries-federalism",
                "Boundary type + function (include how it is administered, not only how it looks).",
            ),
            item(
                "FRQ. Gerrymandering and scale of representation.\n"
                "(a) Define packing and cracking.\n"
                "(b) Explain why a compact-looking district can still be a racial or partisan gerrymander.\n"
                "(c) Explain ONE reform (commission, algorithm, multi-member) and a limitation of that reform.",
                GEO_FRQ,
                [
                    "(a) Packing: concentrate the other party/group into few districts to waste their surplus votes. Cracking: split them so they lose everywhere.",
                    "(b) Compactness is not fairness; a neat shape can still dilute a cohesive urban community by attaching it to a rural majority, or pack a minority into one ‘earmarked’ seat.",
                    "(c) Independent commissions reduce incumbent map-drawing but can still encode criteria (contiguity, communities of interest) that have political effects; algorithms need human-chosen constraints.",
                ],
                "hug-gerrymandering",
                "Do not say ‘weird shapes = gerrymander’ as the whole answer.",
            ),
            item(
                "FRQ. Popular vs. folk culture (use CED carefully: avoid romanticizing ‘folk’).\n"
                "(a) Explain how hierarchical diffusion of a pop-culture commodity differs from relocation diffusion of a foodway.\n"
                "(b) Explain ONE way global media can still produce local remix (glocalization).\n"
                "(c) Identify an environmental or economic impact of a pop-culture production chain (fast fashion, streaming server farms, or stadiums).",
                GEO_FRQ,
                [
                    "(a) Hierarchical: from large nodes/influencers downward through urban ranks. Relocation: people move and bring practices (immigrants opening restaurants).",
                    "(b) A global franchise menu adds a local spice; a platform dance trend uses a regional language sound—format global, content inflected.",
                    "(c) Fast fashion’s water and labor geography; data centers’ electricity; concert tours’ carbon—culture has a material footprint, not only a map of fandom.",
                ],
                "hug-folk-pop-diffusion",
                "Diffusion type + a material consequence earns the last point.",
            ),
            item(
                "FRQ. A multinational state faces a separatist region with a different language and a distinct resource hinterland.\n"
                "(a) Identify ONE centripetal policy the central government might try.\n"
                "(b) Explain how irredentism in a neighboring state could internationalize the conflict.\n"
                "(c) Explain why granting autonomy can either reduce or increase secession risk (the ‘hold together vs. stepping stone’ debate).",
                GEO_FRQ,
                [
                    "(a) Shared infrastructure spending, official bilingualism, consociational cabinets, or a national school curriculum with regional history modules.",
                    "(b) A neighbor claiming the region as lost kin can supply weapons, passports, or diplomatic cover, turning an internal centrifugal force into a geopolitical border crisis.",
                    "(c) Autonomy can satisfy self-rule (hold together) or provide institutions, flags, and tax base that make independence imaginable (stepping stone). Outcome depends on elite bargains and whether resources are shared fairly.",
                ],
                "hug-separatism-autonomy",
                "Name the resource geography; culture alone is rarely the whole centrifugal story.",
            ),
        ],
    ),
    pack(
        "AP Human Geography",
        "7C",
        "Cities Industry Development",
        "Original FRQs on urban models, industry location, and development theories. Not a released exam.",
        [
            item(
                "FRQ. Compare rank-size rule and primate city pattern.\n"
                "(a) State each pattern.\n"
                "(b) Explain ONE political-economic reason a country might have a primate city.\n"
                "(c) Explain ONE planning challenge unique to primate dominance vs. a rank-size urban system.",
                GEO_FRQ,
                [
                    "(a) Rank-size: nth city ≈ 1/n the largest city’s population. Primate: one city vastly larger than the second, dominating economy and culture.",
                    "(b) Colonial port capital, highly centralized government, or agglomeration that snowballs (jobs follow jobs).",
                    "(c) Primate: congestion, land values, and peripheral neglect; rank-size: coordinating many mid-sized infrastructures rather than one mega-project. Neither is automatically ‘developed.’",
                ],
                "hug-rank-size-primate",
                "Do not equate primate city with ‘poor country’ without a mechanism.",
            ),
            item(
                "FRQ. Burgess/Hoyt/Harris-Ullman as models, not maps of your town.\n"
                "(a) Identify ONE assumption of the concentric-zone model that fails in many Global South megacities.\n"
                "(b) Explain how a sector model accounts for a rail or highway industrial corridor.\n"
                "(c) Using multiple-nuclei logic, explain edge cities or informal peri-urban settlements as additional nuclei.",
                GEO_FRQ,
                [
                    "(a) Burgess assumes a CBD-centered bid-rent with poor in inner rings; many megacities have elite cores, informal inner pockets, and vast peripheral informal settlements—poverty is not neatly ring 1.",
                    "(b) Hoyt: similar land uses radiate along transport spines because accessibility is wedge-shaped, not circular.",
                    "(c) Harris-Ullman: specialized nodes (airport, mall, tech park, squatter settlement with its own markets) generate local bid-rent peaks away from the historic CBD.",
                ],
                "hug-urban-models",
                "Say what the model assumes, then where the city violates it.",
            ),
            item(
                "FRQ. Weber’s industrial location (least cost) applied to a battery plant.\n"
                "(a) Identify bulk-gaining vs. bulk-reducing logic and which a finished EV battery is closer to.\n"
                "(b) Explain how labor skill and agglomeration might outweigh pure transport minimization.\n"
                "(c) Explain ONE political factor (tariff, subsidy, or local content rule) that can relocate the plant.",
                GEO_FRQ,
                [
                    "(a) Bulk-reducing locates near inputs; bulk-gaining near markets. Packaged battery modules are often market- or assembly-oriented (heavy, hazardous, just-in-time to auto plants), though lithium processing may be input-oriented.",
                    "(b) Chemists, clustered suppliers, and knowledge spillovers create localization economies that beat a slightly shorter ore haul.",
                    "(c) Inflation-reduction-style credits, EU carbon border logic, or ‘made-in’ rules can pull plants to a political market even if Weber transport costs are worse.",
                ],
                "hug-weber-batteries",
                "Update Weber with agglomeration and the state; that is the sophistication.",
            ),
            item(
                "FRQ. Rostow vs. Wallerstein (world-systems) on a copper-exporting country.\n"
                "(a) How would Rostow narrate ‘takeoff’ for this country?\n"
                "(b) How would a world-systems critic describe the same copper boom?\n"
                "(c) Explain ONE piece of evidence that would support the critic (terms of trade, enclave infrastructure, or elite consumption).",
                GEO_FRQ,
                [
                    "(a) Rostow: investment in mines/ports as preconditions, then takeoff into diversification if profits are reinvested in manufacturing.",
                    "(b) Critic: copper locks the country in a periphery role supplying cheap inputs to core manufacturing; surplus is siphoned via corporations and unequal exchange.",
                    "(c) Rail that only connects mine to port (not to domestic cities), declining relative prices of commodities vs. manufactures, or luxury imports for a small elite during boom years.",
                ],
                "hug-rostow-wallerstein",
                "Same facts, different theory: show you can switch lenses.",
            ),
            item(
                "FRQ. Sustainable cities.\n"
                "(a) Define infill and explain how it can reduce sprawl’s infrastructure cost.\n"
                "(b) Explain ONE equity risk of infill/gentrification.\n"
                "(c) New urbanism vs. a dense informal settlement: identify a similarity in mixed use and a difference in legal security.",
                GEO_FRQ,
                [
                    "(a) Building on vacant or underused lots inside existing urbanized areas; uses already-paid pipes/transit instead of extending them to greenfield edges.",
                    "(b) Rising rents displace long-term residents even as the carbon math improves—environmental gain with social loss.",
                    "(c) Both may mix housing and small commerce at walkable grain; new urbanism typically has titles and codes, while informal settlements often lack tenure, so upgrading (not demolition) is the equity-relevant policy.",
                ],
                "hug-sustainable-infill",
                "Sustainability FRQs should include who gets displaced, not only LEED vocabulary.",
            ),
        ],
    ),
    # ========== AP Psychology ==========
    pack(
        "AP Psychology",
        "7A",
        "Biological Bases & Cognition",
        "Original AAQ-style and concept-application FRQs on methods, biology, and memory. Not a released exam.",
        [
            item(
                "AAQ-style. Researchers randomly assign 80 adults to drink either caffeinated or decaf coffee, then complete a working-memory n-back task. They report that the caffeinated group scored higher (p < .05, d = 0.30). The sample is undergraduates who already drink coffee daily. Participants were not told which coffee they received, but cups were different colors.\n"
                "(a) Identify the research method and the independent and dependent variables.\n"
                "(b) Explain whether the design supports a causal claim and identify ONE confound suggested by cup color.\n"
                "(c) Explain what d = 0.30 indicates and ONE limit on generalizability.",
                AAQ_PROCESS,
                [
                    "(a) Experiment (random assignment). IV: caffeine vs. decaf. DV: n-back performance (operationalized as score/accuracy/RT as defined by the lab).",
                    "(b) Random assignment supports causal inference in principle, but cup color is a confound/demand cue if participants can guess condition (placebo/expectancy). True double-blind identical cups would be stronger.",
                    "(c) A small-to-moderate effect size: the groups differ, but overlap is large. Limit: daily-drinker undergrads—tolerance, age, and education restrict generalization to nonusers, adolescents, or clinical groups.",
                ],
                "psych-aaq-caffeine-wm",
                "AAQ: method, variables, causality, statistic, generalizability—label (a)(b)(c).",
            ),
            item(
                "Concept application. Scenario: A student uses massed cramming, then blankly fails to recognize a term that was in a different font on the exam. Apply EACH: encoding specificity / context-dependent cues, spacing effect, and working-memory limited capacity. One or two sentences per concept, tied to the scenario.",
                PSYCH_APPLY,
                [
                    "Encoding specificity: retrieval is better when cues match encoding; a font change can remove perceptual cues the student accidentally encoded, so recognition fails even if the concept was ‘studied.’",
                    "Spacing effect: distributed practice yields stronger long-term retention than massed cramming, so the night-before pile-up predicts rapid forgetting.",
                    "Working memory: cramming overloads limited WM; without chunking and transfer to long-term memory, the exam’s extra load (anxiety, new font) exceeds capacity.",
                ],
                "psych-memory-application",
                "Each concept needs a definitional hint plus a scenario hook.",
            ),
            item(
                "AAQ-style ethics + biology. A team wants to measure cortisol (saliva) in teens before and after a social-media deprivation weekend. Parents consent; teens assent. Two teens ask to drop out mid-study when their friends mock them.\n"
                "(a) Identify TWO ethical requirements that apply and how to handle dropout.\n"
                "(b) Explain what cortisol measures in this context and ONE reason a weekend change might not reflect ‘addiction.’\n"
                "(c) Apply sympathetic vs. parasympathetic activity to a teen opening a flood of missed notifications on Monday.",
                AAQ_PROCESS,
                [
                    "(a) Informed consent/assent, right to withdraw without penalty, confidentiality, minimizing harm. Dropout: stop procedures, do not coerce with extra credit threats, still protect their data as agreed.",
                    "(b) Cortisol is a HPA-axis stress hormone; a spike could be withdrawal, boredom, family conflict, or disrupted sleep—not a diagnostic of addiction. No control weekend with another deprivation (e.g., no gaming) limits interpretation.",
                    "(c) Notification flood can trigger sympathetic arousal (heart rate, vigilance); recovering attention later involves parasympathetic return—if the study only samples Monday 8 a.m., it may catch sympathetic peak, not baseline.",
                ],
                "psych-ethics-cortisol",
                "Ethics points are easy if you use CED words: withdraw, assent, confidentiality.",
            ),
            item(
                "Concept application. After a concussion, a soccer player cannot form new episodic memories of the hospital stay but still plays a well-practiced drill. Distinguish hippocampus-dependent memory from procedural memory and apply anterograde amnesia. Then explain why a teammate’s ‘just try harder to remember’ advice is psychologically naïve.",
                PSYCH_APPLY,
                [
                    "Anterograde amnesia: impaired encoding of new explicit/episodic memories after the injury, associated with hippocampal disruption.",
                    "Procedural/skill memory (basal ganglia/cerebellum circuits) can remain, so the drill runs without a new story of ‘this morning’s hospital.’",
                    "‘Try harder’ treats a systems failure as a motivation problem; effort cannot substitute for a damaged encoding circuit, and frustration may add stress.",
                ],
                "psych-memory-systems-amnesia",
                "Name systems, not just ‘short-term vs long-term’ as a slogan.",
            ),
            item(
                "AAQ-style statistics. A correlational study finds r = −.42 between hours of night-time phone use and next-day quiz scores in one high school (n = 200). They conclude phones cause worse scores.\n"
                "(a) Explain why the causal conclusion is not justified; name a third-variable or directionality problem.\n"
                "(b) Interpret r = −.42 (direction and approximate strength).\n"
                "(c) Propose an ethical experimental alternative or a stronger quasi-design and one remaining limit.",
                AAQ_PROCESS,
                [
                    "(a) Correlation ≠ causation. Directionality: poor scores/stress may increase night use. Third variable: SES, ADHD, or work hours could drive both.",
                    "(b) Moderate negative association: more night use, lower scores, with substantial scatter.",
                    "(c) Randomly assign a one-week charging-station curfew vs. control, or within-subjects off-nights. Limit: demand characteristics, short duration, one school. Cannot ethically assign harmful deprivation to struggling students without supports.",
                ],
                "psych-correlation-phones",
                "Always kill the causal leap, then interpret r honestly.",
            ),
        ],
    ),
    pack(
        "AP Psychology",
        "7B",
        "Development & Learning",
        "Original FRQs on Piaget/Erikson, conditioning, and observational learning. Not a released exam.",
        [
            item(
                "Concept application. A 4-year-old insists that a tall thin glass has ‘more juice’ after a pour from a wide glass, then later imitates a teacher’s angry tone at a doll after watching a video. Apply conservation failure (Piaget) and Bandura’s observational learning (attention, retention, reproduction, motivation). Do not merely name stages.",
                PSYCH_APPLY,
                [
                    "Conservation: in preoperational thought, the child centers on height and cannot reverse the pour mentally, so quantity is judged by a salient dimension.",
                    "Observational learning: the child attended to the model, retained the tone, can reproduce it on the doll, and is motivated (the video model may have been rewarded with compliance, or the act is intrinsically interesting).",
                    "Note: Piaget describes a cognitive limit on the juice task; Bandura explains acquisition of a social behavior without the child being directly reinforced for yelling—two different learning/development claims.",
                ],
                "psych-piaget-bandura",
                "If two theories appear, keep them in labeled chunks so they are both scorable.",
            ),
            item(
                "AAQ-style. Infants in a habituation study look longer at a new face after repeated exposure to one face. The authors say this ‘proves infants have adult-like face expertise.’\n"
                "(a) Explain habituation/dishabituation as a method.\n"
                "(b) Identify an operational definition of ‘looking longer.’\n"
                "(c) Challenge the adult-expertise claim with a developmental alternative (preference for novelty, not expertise).",
                AAQ_PROCESS,
                [
                    "(a) Repeated stimulus → decreased looking (habituation); a new stimulus that restores looking (dishabituation) indicates discrimination.",
                    "(b) e.g., looking time in seconds coded from video to a criterion of gaze direction; interrater reliability should be reported.",
                    "(c) Dishabituation shows detection of difference, not configural expertise like adults; infants may respond to any novelty (hairline, color) rather than identity. Age, familiarization time, and stimuli set limit the claim.",
                ],
                "psych-habituation-faces",
                "Methods AAQ: operationalize the behavior the camera actually measures.",
            ),
            item(
                "Learning scenarios. For EACH, name the process and identify the stimulus/response pieces: (1) A dog salivates to a garage-door motor that always precedes food. (2) A teen’s phone is taken away after missing curfew, and missing curfew decreases. (3) A worker gets a bonus randomly after some sales, and calling customers increases. (4) A child stops whining in the store after the parent consistently refuses candy (whining had been reinforced before).",
                PSYCH_APPLY,
                [
                    "(1) Classical conditioning: CS = motor sound, US = food, CR = salivation.",
                    "(2) Negative punishment (removal of a pleasant stimulus) contingent on missing curfew, decreasing that behavior—if the contingency is clear.",
                    "(3) Positive reinforcement on a variable-ratio-like schedule (unpredictable bonuses after a number of sales), which produces high, persistent responding.",
                    "(4) Extinction of operant whining when the reinforcer (candy) is withheld; expect an extinction burst first.",
                ],
                "psych-conditioning-four-cases",
                "Label positive/negative × reinforcement/punishment with the actual stimulus change.",
            ),
            item(
                "Development. Apply Erikson’s industry vs. inferiority AND Vygotsky’s zone of proximal development to a fifth-grader who will not attempt challenge math unless a peer is sitting nearby. Include one educational implication that is not ‘try harder.’",
                PSYCH_APPLY,
                [
                    "Industry vs. inferiority: school-age children build competence through successful work; repeated failure without support risks inferiority, so avoidance protects self-view.",
                    "ZPD: the peer is a more-knowledgeable other enabling performance between independent and potential ability; the nearby peer is scaffolding, not cheating by definition.",
                    "Implication: structured pair work and fading prompts, plus tasks slightly above independent level—not public ranking that manufactures inferiority.",
                ],
                "psych-erikson-vygotsky",
                "ZPD is a range with scaffolding, not a synonym for ‘friends help.’",
            ),
            item(
                "AAQ-style. A school tries a token economy: tokens for on-task behavior, traded for extra recess. After tokens stop, on-task behavior falls below baseline.\n"
                "(a) Identify the operant process during tokens and after removal.\n"
                "(b) Explain the overjustification risk if students previously liked reading.\n"
                "(c) Propose a fade-out design that might preserve behavior (partial reinforcement, intrinsic goals).",
                AAQ_PROCESS,
                [
                    "(a) During: positive reinforcement (tokens). After abrupt removal: extinction, possibly plus contrast with baseline if tokens crowded out other motives.",
                    "(b) Overjustification: external rewards can reduce intrinsic motivation for an already-enjoyed activity; reading becomes ‘for tokens.’",
                    "(c) Thin the schedule (VR), pair tokens with praise/mastery goals, then fade tokens while keeping recess as a class-wide noncontingent break plus specific feedback. Measure generalization to unrewarded periods.",
                ],
                "psych-token-economy-fade",
                "Token economies fail on the FRQ when students forget extinction and overjustification.",
            ),
        ],
    ),
    pack(
        "AP Psychology",
        "7C",
        "Social Clinical Research",
        "Original AAQ and application FRQs on social psych, clinical categories, and therapy. Not a released exam.",
        [
            item(
                "Concept application. In a group project, one student loafs, another assumes the quiet teammate is lazy (not situation-constrained), and a third conforms to a wrong calculation because the rest seem confident. Apply social loafing, fundamental attribution error, and normative vs. informational influence. Tie each to the project.",
                PSYCH_APPLY,
                [
                    "Social loafing: reduced effort when individual output is pooled and unidentifiable; the loafer’s work is hidden in the group product.",
                    "FAE: over-attributing the quiet student’s silence to disposition (‘lazy’) rather than to being talked over or language anxiety.",
                    "Conformity: normative (wanting to be liked/not embarrassed) vs. informational (using others as evidence about the math). Confident wrong answers can drive informational influence if the student doubts their own competence.",
                ],
                "psych-social-group-project",
                "FAE is about explaining others; do not confuse it with self-serving bias unless asked.",
            ),
            item(
                "AAQ-style. A clinic advertises that ‘87% of our clients improve’ after 8 weeks of an unspecified therapy. No control group. Clients who dropped out are omitted. Outcome is a 1-item ‘I feel better’ question written by the clinic.\n"
                "(a) Identify TWO threats to internal validity or measurement validity.\n"
                "(b) Explain why a waitlist or active-control comparison matters in therapy research.\n"
                "(c) Apply placebo/expectancy effects to this advertisement.",
                AAQ_PROCESS,
                [
                    "(a) No control (history, regression to the mean, spontaneous remission); survivorship bias (dropouts excluded); a 1-item unvalidated measure written by an interested party (demand characteristics).",
                    "(b) Controls estimate what would have happened with time, attention, or an alternative treatment; otherwise improvement is attributed to the brand.",
                    "(c) Paying and being told one is in a successful clinic can produce expectancy gains independent of specific techniques; the ad harvests that expectancy as if it were efficacy.",
                ],
                "psych-therapy-claims-aaq",
                "Clinical AAQ: measurement + missing comparison + expectancy.",
            ),
            item(
                "Clinical application. Distinguish major depressive disorder from normal grief using course and impairment (do not diagnose a friend). Then apply one cognitive (Beck) and one biological (serotonin/complex monoamine caution) approach as hypotheses, not slogans. Finally, name one reason comorbidity with anxiety would change a treatment plan.",
                PSYCH_APPLY,
                [
                    "Grief: waves of yearning tied to a loss, identity still oriented to the deceased; MDD: persistent depressed mood/anhedonia, broader self-worth collapse, duration/impairment per diagnostic criteria—clinicians use structured assessment, not vibes.",
                    "Beck: negative cognitive triad (self, world, future) and biased appraisal. Biological: monoamine theories are incomplete; current views include stress, inflammation, and circuit-level change—medication can help some, not as a ‘chemical imbalance’ cartoon.",
                    "Comorbidity: anxiety may require targeting avoidance and arousal (e.g., adding exposure or adjusting meds), and suicide risk assessment becomes even more central.",
                ],
                "psych-depression-grief-models",
                "AP Psych wants humility: hypotheses and impairment, not internet diagnosis.",
            ),
            item(
                "Social psych experiment classic logic (original numbers). Participants in a dark room estimate a moving light’s drift (autokinetic). Day 1 alone: estimates vary. Days 2–4 in groups: estimates converge. A year later, many still use the group norm alone.\n"
                "(a) Identify informational social influence and why the stimulus ambiguity matters.\n"
                "(b) Explain the year-later result as internalization vs. mere public compliance.\n"
                "(c) Name ONE ethical issue if modern researchers used deception about the light.",
                AAQ_PROCESS,
                [
                    "(a) Ambiguous autokinetic motion provides no objective anchor, so people use others as information (Sherif-type paradigm).",
                    "(b) Persistence alone suggests private acceptance/internalization of the norm, not only compliance under surveillance.",
                    "(c) Deception requires debriefing; distress if people feel foolish; informed consent limits on what can be hidden. Minimal-risk justification needed.",
                ],
                "psych-sherif-autokinetic",
                "Know Sherif (ambiguity → informational) vs. Asch (clear line → mostly normative).",
            ),
            item(
                "Concept application. A person avoids buses after a panic attack on a bus, then feels relief when skipping the bus (which maintains the fear). Apply classical conditioning of the panic cue, operant negative reinforcement of avoidance, and a therapeutic exposure logic (extinction / new learning). Include why a friend saying ‘just take the bus once’ can fail.",
                PSYCH_APPLY,
                [
                    "Classical: internal sensations or bus stimuli become CSs associated with panic (US-like interoceptive fear).",
                    "Operant: avoidance removes anxiety (negative reinforcement), so the behavior strengthens and prevents extinction.",
                    "Exposure/CBT: stay in the situation (or interoceptive exposure) long enough for new safety learning; ‘once’ may be too brief, poorly planned, or without response prevention—relief after fleeing reconditions fear.",
                ],
                "psych-panic-avoidance-exposure",
                "The maintaining process is negative reinforcement of avoidance; therapy targets that loop.",
            ),
        ],
    ),
    # ========== AP Environmental Science ==========
    pack(
        "AP Environmental Science",
        "7A",
        "Ecosystems & Biodiversity",
        "Original FRQs on energy flow, cycles, and island biogeography. Not a released exam.",
        [
            item(
                "FRQ. A lake food web: phytoplankton → zooplankton → small fish → pike. An invasive mussel filters phytoplankton. A resort also adds fertilizer runoff.\n"
                "(a) Identify the trophic level of pike and explain why a 10% rule estimate of energy to pike is a rough ceiling.\n"
                "(b) Predict ONE effect of mussels and ONE of fertilizer on water clarity and dissolved oxygen, with a mechanism.\n"
                "(c) Propose ONE management action that addresses a root cause, and one tradeoff.",
                ENV_FRQ,
                [
                    "(a) Pike are roughly tertiary consumers here. The 10% rule is a teaching approximation; actual transfer varies with digestibility, respiration, and uneaten tissue—so energy to pike is often less than a naive 10% chain predicts.",
                    "(b) Mussels can increase clarity by filtering phytoplankton but shift nutrients and may boom-bust; fertilizer drives eutrophication: algal blooms, bacterial decomposition, hypoxia (especially at night/bottom).",
                    "(c) Reduce watershed nutrient inputs (riparian buffers, septic upgrades) rather than only stocking fish. Tradeoff: costly for farms/homes; buffers take land.",
                ],
                "apes-trophic-eutrophication",
                "Always give a biogeochemical or food-web mechanism, not ‘pollution is bad.’",
            ),
            item(
                "FRQ. Island biogeography applied to a proposed highway that fragments a forest into two ‘islands’ of habitat.\n"
                "(a) State the species-area relationship qualitatively.\n"
                "(b) Explain how isolation and edge effects could change interior-species richness.\n"
                "(c) Design a corridor or underpass and explain one reason it might fail (behavior, invasive species, or roadkill concentration).",
                ENV_FRQ,
                [
                    "(a) Larger habitat islands generally support more species (more resources, more habitats, lower extinction rate).",
                    "(b) Smaller patches have more edge (drier, noisier, more predators/parasites); isolation reduces immigration/rescue. Interior specialists decline.",
                    "(c) A vegetated overpass connecting interiors can restore gene flow. Failure: animals may not use it if lighting/noise is wrong; corridors can also be invasion highways or funnel wildlife to remaining road gaps.",
                ],
                "apes-island-biogeography-roads",
                "Fragmentation = smaller area + more edge + less connectivity.",
            ),
            item(
                "FRQ. Carbon cycle. A temperate forest is logged; slash is burned; seedlings are replanted.\n"
                "(a) Identify a carbon sink and a carbon source in this sequence.\n"
                "(b) Explain the difference between NPP and GPP and which is more relevant to long-term biomass recovery.\n"
                "(c) Explain why planting trees is not automatically carbon-neutral on a 20-year policy deadline.",
                ENV_FRQ,
                [
                    "(a) Source: combustion of slash and soil carbon disturbance; sink: growing replanted trees and remaining soil/wood products if they persist.",
                    "(b) GPP = total photosynthesis; NPP = GPP − autotrophic respiration, the carbon available for biomass/consumers. Recovery of standing biomass tracks NPP accumulation minus harvest/disturbance.",
                    "(c) Mature forest carbon stocks take decades to recover; burned carbon is in the atmosphere now; albedo and soil carbon can change; leakage if logging shifts elsewhere. Deadlines shorter than rotation age overclaim neutrality.",
                ],
                "apes-carbon-npp-logging",
                "Time scale is the APES sophistication move on trees-as-offsets.",
            ),
            item(
                "FRQ. Biodiversity metrics. A prairie remnant has high species richness but is dominated by one invasive grass (low evenness). A restored plot has fewer species but more even native cover.\n"
                "(a) Distinguish richness, evenness, and a Shannon-type diversity idea qualitatively.\n"
                "(b) Explain why richness alone can mislead a manager.\n"
                "(c) Identify an ecosystem service that evenness of natives might protect better than a long species list.",
                ENV_FRQ,
                [
                    "(a) Richness = count of species. Evenness = how equal abundances are. Combined diversity indices rise when there are more species and less domination by one.",
                    "(b) A site can be ‘rich’ because of weeds plus a few natives while function is a monoculture; conservation goals are usually native composition and function.",
                    "(c) Pollination, invasion resistance, or forage quality often depend on native functional groups being actually present in abundance, not as rare tokens.",
                ],
                "apes-diversity-metrics",
                "Managers care about composition and function, not a richness trophy.",
            ),
            item(
                "FRQ. Trophic cascade. Wolves are reintroduced to a park with overbrowsed riparian shrubs.\n"
                "(a) Diagram in words a three-step cascade to vegetation.\n"
                "(b) Explain a behavioral (ecology of fear) pathway distinct from reduced herbivore numbers.\n"
                "(c) Identify one human conflict (livestock, hunting opportunity) and a mitigation that is not ‘remove the wolves again.’",
                ENV_FRQ,
                [
                    "(a) Wolves ↓ (or redistribute) elk/deer → browsing on willow/aspen ↓ → riparian vegetation ↑, with possible beaver/songbird secondary effects.",
                    "(b) Prey avoid risky high-visibility valleys even if population size is similar, so plants recover in those places (trait-mediated cascade).",
                    "(c) Livestock depredation: range riders, fladry, compensation, carcass management. Hunting: adjust tags based on data rather than a simple wolf-or-elk binary.",
                ],
                "apes-trophic-cascade-wolves",
                "Separate density-mediated from behavior-mediated effects if you want the extra point.",
            ),
        ],
    ),
    pack(
        "AP Environmental Science",
        "7B",
        "Energy & Pollution",
        "Original FRQs on energy sources, air/water pollution, and toxicity. Not a released exam.",
        [
            item(
                "FRQ. Compare a coal plant and a nuclear plant supplying the same annual kWh.\n"
                "(a) Identify the primary air-quality difference during normal operation.\n"
                "(b) Explain ONE solid-waste difference (ash vs. spent fuel) including timescale.\n"
                "(c) Explain a shared problem (thermal pollution or mining/upstream impacts) and one mitigation.",
                ENV_FRQ,
                [
                    "(a) Coal: SOx, NOx, particulates, mercury, CO2. Nuclear: negligible combustion air pollutants in operation (not zero lifecycle).",
                    "(b) Coal ash: huge volume, toxic metals, stored in ponds that can fail. Spent fuel: small volume, high radioactivity, millennial management and security.",
                    "(c) Both can discharge heat to rivers (thermal pollution harming DO and fish); cooling towers reduce but increase water consumption. Uranium mining and coal mining both disturb land—different toxins, shared extraction footprint.",
                ],
                "apes-coal-vs-nuclear",
                "Do not write ‘nuclear is clean’ without waste and mining; do not write ‘coal is the only problem.’",
            ),
            item(
                "FRQ. Photochemical smog in a sunny basin with morning traffic.\n"
                "(a) List the key ingredients and the role of sunlight.\n"
                "(b) Explain why ozone can be higher downwind of the city than downtown at rush hour.\n"
                "(c) Propose a policy mix (transport + VOC) and a reason a weekend/weekday pattern might differ.",
                ENV_FRQ,
                [
                    "(a) NOx + VOCs + sunlight → tropospheric O3 and PAN (secondary pollutants). Primary emissions are not ozone itself from tailpipes.",
                    "(b) Formation takes time as air advects; NOx titration near heavy traffic can scavenge O3 downtown, so peaks occur downwind later.",
                    "(c) Transit, inspection/maintenance, VOC controls on solvents/gas stations. Weekends may have different NOx/VOC ratios (less diesel, more recreational solvent use) shifting ozone.",
                ],
                "apes-photochemical-smog",
                "Secondary pollutant + chemistry + wind = the classic APES air FRQ.",
            ),
            item(
                "FRQ. LD50 and a pesticide label.\n"
                "(a) Define LD50 and explain why a lower LD50 means higher acute toxicity.\n"
                "(b) Explain why LD50 in rats is incomplete for ecosystem risk (chronic, bioaccumulation, nontargets).\n"
                "(c) Describe a safer integrated pest approach that reduces dose to nontarget insects.",
                ENV_FRQ,
                [
                    "(a) LD50: dose killing 50% of a test population; smaller number ⇒ more toxic acutely.",
                    "(b) Ignores chronic endocrine effects, bioaccumulation in food webs, larval aquatic stages, and synergistic mixes; species differ; exposure routes differ.",
                    "(c) IPM: monitoring thresholds, beneficial insects, crop rotation, targeted baits, pheromones—chemical as last/precision tool, not calendar spray.",
                ],
                "apes-ld50-ipm",
                "Toxicity ≠ exposure; risk is both.",
            ),
            item(
                "FRQ. Wastewater. A town’s plant is at capacity; raw sewage bypasses during storms (CSO).\n"
                "(a) Identify TWO pollutants in untreated sewage and a human or ecological effect of each.\n"
                "(b) Explain primary vs. secondary treatment in one sentence each.\n"
                "(c) Propose a green-infrastructure action that reduces CSO volume and a limit of that action in a paved city.",
                ENV_FRQ,
                [
                    "(a) Pathogens (disease); nitrogen/phosphorus (eutrophication); BOD/organic matter (oxygen sag); microplastics/pharmaceuticals as extras.",
                    "(b) Primary: physical settling/screening of solids. Secondary: biological degradation of organic matter (activated sludge, etc.).",
                    "(c) Rain gardens, permeable pavement, cisterns to keep stormwater out of combined sewers. Limit: clay soils, space, maintenance, extreme storms still overflow—need storage tunnels too.",
                ],
                "apes-wastewater-cso",
                "CSO is a storm+sewage mixing problem; solutions include keeping rain out of pipes.",
            ),
            item(
                "FRQ. Stratospheric vs. tropospheric ozone; a community hears ‘ozone is good and bad.’\n"
                "(a) Explain the location-function difference.\n"
                "(b) Identify the human-made cause of stratospheric ozone thinning (CFCs) and why a hole forms seasonally over Antarctica (high-level: polar stratospheric clouds / chlorine activation—keep qualitative).\n"
                "(c) Explain why banning CFCs did not instantly ‘fix’ the issue (lifetime, bank of old equipment).",
                ENV_FRQ,
                [
                    "(a) Stratospheric O3 absorbs UV-B; tropospheric O3 is a pollutant harming lungs and plants.",
                    "(b) CFC chlorine catalyzes O3 destruction; Antarctic winter PSCs enable reactive chlorine; spring light drives the rapid loss (qualitative is enough).",
                    "(c) Long atmospheric lifetimes and remaining banks in foams/AC units mean recovery is multi-decadal; compliance and replacements (HFCs climate tradeoff) still matter.",
                ],
                "apes-ozone-two-stories",
                "Never conflate the ozone hole with climate change, but you may note HFCs as a climate footnote.",
            ),
        ],
    ),
    pack(
        "AP Environmental Science",
        "7C",
        "Land Climate Sustainability",
        "Original FRQs on land use, climate systems, and common-pool resources. Not a released exam.",
        [
            item(
                "FRQ. Urban heat island (UHI).\n"
                "(a) Explain TWO physical reasons downtown stays hotter at night than a rural field.\n"
                "(b) Connect UHI to energy demand and a vulnerable population.\n"
                "(c) Evaluate trees vs. high-albedo roofs: one benefit and one constraint of each.",
                ENV_FRQ,
                [
                    "(a) Impervious dark materials store heat; less evapotranspiration; waste heat from AC/cars; geometry traps longwave radiation.",
                    "(b) Higher AC load increases emissions if the grid is fossil-heavy; elderly and outdoor workers face heat illness; night temperatures deny recovery.",
                    "(c) Trees: cooling via shade+ET, but need water, space, time to grow, and can clash with power lines. White roofs: fast albedo gain, less water, but may not help winter heating in cold climates the same way and do not provide habitat.",
                ],
                "apes-uhi",
                "Nighttime minimum temperature is often the UHI tell.",
            ),
            item(
                "FRQ. Tragedy of the commons applied to an aquifer used by many irrigators.\n"
                "(a) Define the commons problem (open access + subtractability).\n"
                "(b) Explain why ‘each farmer pumping a bit more’ is rational yet collectively ruinous.\n"
                "(c) Compare a cap-and-share rule, a price on water, and a purely voluntary pledge—likely effectiveness.",
                ENV_FRQ,
                [
                    "(a) Rival resource with weak exclusion: my extra acre-foot is not available to others; no one owns the depletion cost.",
                    "(b) Private benefit of extra pumping is concentrated; the falling water table is shared; game theory predicts over-extraction without rules.",
                    "(c) Caps with measured wells can work if enforced; prices internalize scarcity but need equity shields for small farms; voluntary pledges fail when a few defectors take the water. Hybrid: cap + trading with a floor for domestic use.",
                ],
                "apes-commons-aquifer",
                "Name subtractability; ‘people are greedy’ is not the CED mechanism.",
            ),
            item(
                "FRQ. Climate. A coastal city debates seawalls vs. mangrove restoration vs. managed retreat.\n"
                "(a) Identify the climate-related hazard (sea-level + storms) as a risk to people, not only to ‘the environment.’\n"
                "(b) Explain one maladaptation risk of a seawall (induced development, end effects).\n"
                "(c) Explain why mangroves are not a drop-in replacement in a steep urban harbor, and what managed retreat requires socially.",
                ENV_FRQ,
                [
                    "(a) Higher baseline sea level raises storm-surge flood probability and saltwater intrusion into water supplies—risk to housing, jobs, and health.",
                    "(b) Seawalls can encourage building in the protected zone (levee effect) and worsen flooding at wall ends or by reflecting waves.",
                    "(c) Mangroves need shallow intertidal substrate and sediment; a deep armored harbor cannot sprout a forest. Retreat requires buyouts, new housing, and not dumping risk on poorer inland neighborhoods.",
                ],
                "apes-coastal-adaptation",
                "Adaptation FRQ: match the solution to geomorphology and equity.",
            ),
            item(
                "FRQ. Soil and food. Compare a CAFO vs. well-managed rotational grazing for a beef supply of similar calories (qualitative).\n"
                "(a) Identify a water-quality pathway from CAFOs (manure lagoons).\n"
                "(b) Explain antibiotic use as an environmental/health externality.\n"
                "(c) Explain one greenhouse-gas complexity (enteric methane vs. land-use opportunity of feed crops) without claiming a single internet meme settles it.",
                ENV_FRQ,
                [
                    "(a) Lagoon leaks/overflows → nutrient and pathogen runoff to streams; ammonia volatilization.",
                    "(b) Routine antibiotics select for resistance that can move through environment and food chains—a public-health commons problem.",
                    "(c) Ruminant methane is potent but short-lived relative to CO2; feedlot systems shift impacts to fertilizer-intensive feed production. Land that could sequester carbon or grow human food is part of the ledger. Honest answers are system-specific, not ‘beef always/never.’",
                ],
                "apes-cafo-soil-ghg",
                "APES wants pathways (N, pathogens, GHGs), not brand-name food fights.",
            ),
            item(
                "FRQ. A developing country discovers a rare-earth deposit under a forest used by an Indigenous community.\n"
                "(a) Identify TWO environmental impacts of mining beyond ‘trees cut.’\n"
                "(b) Apply the idea of environmental justice / procedural justice (who consents).\n"
                "(c) Propose a policy that is neither ‘never mine’ nor ‘mine with no rules’—include a bond, a no-go zone, or a benefit-sharing rule and a failure mode.",
                ENV_FRQ,
                [
                    "(a) Acid drainage, heavy metals in water, tailings dam risk, roads opening illegal logging, dust, and sacred-site destruction.",
                    "(b) Justice: who bears waste and who gets revenue; procedural: free, prior, informed consent vs. a capital-city permit. Distributional: downstream fishers may pay while exporters profit.",
                    "(c) Example: community veto on a watershed no-go zone + escrowed cleanup bond + royalty share. Failure mode: captured regulators, too-small bonds, or ‘consultation’ after machines arrive. Rare-earth demand for green tech does not erase local rights.",
                ],
                "apes-mining-justice",
                "Green-tech minerals still have extractive geographies—say so if it earns complexity.",
            ),
        ],
    ),
]


def _validate():
    n_q = len(FRQ_QUIZZES)
    n_i = sum(len(q["items"]) for q in FRQ_QUIZZES)
    subjects = [q["subject"] for q in FRQ_QUIZZES]
    assert n_q == 24, n_q
    assert n_i == 120, n_i
    assert all(q["kind"] == "generated" for q in FRQ_QUIZZES)
    assert all(q["estimatedMinutes"] == 40 for q in FRQ_QUIZZES)
    assert all(q["difficultyTier"] == 2 for q in FRQ_QUIZZES)
    assert all(q["tags"] == TAGS for q in FRQ_QUIZZES)
    assert all("id" not in q for q in FRQ_QUIZZES)
    for q in FRQ_QUIZZES:
        assert len(q["items"]) == 5
        for it in q["items"]:
            assert "id" not in it
            assert it["format"] == "frq_half"
            assert it["difficultyTier"] == 2
            assert it["visibleSteps"] and it["blankSteps"]
    expected = [
        "AP US History",
        "AP World History",
        "AP European History",
        "AP English Language",
        "AP English Literature",
        "AP Human Geography",
        "AP Psychology",
        "AP Environmental Science",
    ]
    for i, subj in enumerate(expected):
        chunk = subjects[i * 3 : (i + 1) * 3]
        assert chunk == [subj, subj, subj], chunk
        waves = [FRQ_QUIZZES[i * 3 + j]["title"] for j in range(3)]
        assert f"Wave 7A" in waves[0] and f"Wave 7B" in waves[1] and f"Wave 7C" in waves[2]
    return n_q, n_i


if __name__ == "__main__":
    n_q, n_i = _validate()
    print(f"OK: {n_q} quizzes, {n_i} FRQs")
