import random, string
BASE_TAGS = ["ai-topic-exercises", "ced-aligned", "generated", "with-solutions"]
GEN_NOTE = "Original AI-generated practice aligned to College Board CED. Not College Board exam verbatim. Includes process + answers. · 2026-08-23"

def rid(prefix):
    h = format(random.getrandbits(32), "x")[:8]
    s = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{h}-{s}"

def mcq(prompt, choices, answer_idx, steps, concept_id=None, tier=2):
    letter = "ABCD"[answer_idx]
    ans = choices[answer_idx]
    body = ans.split(") ", 1)[-1] if ") " in ans else ans
    return {"id": rid("m-item"), "format": "mcq", "prompt": prompt, "choices": choices,
            "conceptId": concept_id, "conceptIntro": None, "difficultyTier": tier,
            "visibleSteps": steps, "blankSteps": [f"Answer key: {letter}) {body}"],
            "hints": ["Eliminate wrong choices.", "Use CED vocabulary.", f"Final check: {letter}) {body}"]}

def frq(prompt, steps, answers, concept_id=None, tier=2):
    return {"id": rid("m-item"), "format": "frq_half", "prompt": prompt, "conceptId": concept_id,
            "conceptIntro": None, "difficultyTier": tier, "visibleSteps": steps,
            "blankSteps": answers if isinstance(answers, list) else [answers],
            "hints": ["Thesis/claim first if argument.", "Use specific evidence.", "Answers in blankSteps."]}

def quiz(title, subject, desc, tags, items, minutes=40, tier=2):
    return {"id": rid("m-quiz"), "title": title, "subject": subject, "kind": "generated",
            "description": desc, "generationNote": GEN_NOTE, "estimatedMinutes": minutes,
            "tags": BASE_TAGS + tags, "items": items, "difficultyTier": tier}


APUSH = "AP US History"
WORLD = "AP World History"
EURO = "AP European History"
HUG = "AP Human Geography"
LANG = "AP English Language"
LIT = "AP English Literature"

HISTORY_PROCESS = {
    "causation": [
        "State a defensible causal claim that distinguishes a major cause from background conditions.",
        "Select one precise piece of evidence and explain the mechanism linking cause to outcome.",
        "Qualify the claim with another cause, limit, or unintended effect.",
    ],
    "comparison": [
        "Set a common category for comparison, such as political authority, labor, or social hierarchy.",
        "Use specific evidence for both cases and explain one meaningful similarity or difference.",
        "End by identifying why the similarity or difference mattered in its historical setting.",
    ],
    "continuity-change": [
        "Identify the relevant starting condition and the development that could mark change.",
        "Support both continuity and change with specific evidence from the stated period.",
        "Judge which pattern was more significant and explain the basis for that judgment.",
    ],
    "contextualization": [
        "Place the development within a broader process occurring before or during the period.",
        "Name a specific contextual fact rather than merely restating the prompt.",
        "Explain how that broader setting shaped the development in question.",
    ],
}


def history_quiz(unit, subtitle, subject, desc, tags, questions, minutes=40):
    items = [
        frq(
            prompt,
            HISTORY_PROCESS[skill],
            [f"Model answer: {answer}"],
            concept_id,
            tier,
        )
        for skill, prompt, answer, concept_id, tier in questions
    ]
    skills = list(dict.fromkeys(question[0] for question in questions))
    return quiz(
        f"AI Topic Exercises — Unit {unit}: {subtitle}",
        subject,
        desc,
        [f"unit-{unit}", "historical-reasoning"] + skills + tags,
        items,
        minutes,
        max(question[4] for question in questions),
    )


APUSH_QUIZZES = [
    history_quiz(
        1,
        "Period 1, 1491–1607",
        APUSH,
        "CED Period 1: Indigenous societies, European expansion, and contact in North America.",
        ["period-1", "indigenous-americas", "contact"],
        [
            (
                "causation",
                "Explain one way geography caused Indigenous societies in North America before European contact to develop distinct economic practices.",
                "Geography encouraged distinct adaptations: peoples in the arid Southwest built irrigation-based maize agriculture, while many Great Basin communities relied more on mobile hunting and gathering. Different water and resource conditions therefore produced different economic systems rather than one uniform Indigenous economy.",
                "apush-1-geography",
                2,
            ),
            (
                "comparison",
                "Compare one Spanish motive for colonization in the Americas with one motive of a later English colonizing venture.",
                "Both sought wealth, but Spanish ventures often linked mineral extraction and imperial expansion to Catholic conversion, whereas English ventures such as Jamestown emphasized profitable commodities and investor returns. The difference shaped Spanish mission-encomienda systems and English plantation settlement.",
                "apush-1-colonization",
                2,
            ),
            (
                "causation",
                "Explain one major demographic consequence of the Columbian Exchange for Native peoples by 1607.",
                "Afro-Eurasian diseases such as smallpox caused catastrophic Native population decline because Indigenous communities lacked prior exposure. Depopulation destabilized political networks, eased some European conquests, and intensified colonial demand for other labor sources.",
                "apush-1-columbian-exchange",
                2,
            ),
        ],
    ),
    history_quiz(
        2,
        "Period 2, 1607–1754",
        APUSH,
        "CED Period 2: British colonial regions, Atlantic labor systems, and imperial-Indigenous relations.",
        ["period-2", "colonial-society", "atlantic-world"],
        [
            (
                "comparison",
                "Compare the development of the Chesapeake and New England colonial economies in the seventeenth century.",
                "The Chesapeake centered on export tobacco cultivated first by indentured servants and increasingly by enslaved Africans; New England relied more on family farms, commerce, fishing, and shipbuilding. Climate, settlement patterns, and labor needs helped produce the regional difference.",
                "apush-2-regions",
                2,
            ),
            (
                "causation",
                "Explain one reason hereditary racial slavery expanded in the British mainland colonies after 1676.",
                "Planters wanted a more controllable long-term labor force as indentured migration declined and unrest such as Bacon’s Rebellion exposed tensions among landless Europeans. Colonial laws then hardened racial categories and made enslaved status inheritable.",
                "apush-2-slavery",
                3,
            ),
            (
                "continuity-change",
                "Evaluate one continuity and one change in British relations with Native nations from 1607 to 1754.",
                "Trade and military alliances remained important throughout the period, showing continuity in mutual diplomacy. At the same time, expanding settler populations increased warfare and land dispossession, as seen in conflicts such as the Pequot War and King Philip’s War.",
                "apush-2-native-relations",
                3,
            ),
        ],
    ),
    history_quiz(
        3,
        "Period 3, 1754–1800",
        APUSH,
        "CED Period 3: imperial crisis, Revolution, republican government, and the early republic.",
        ["period-3", "revolution", "constitution"],
        [
            (
                "causation",
                "Explain how the Seven Years’ War contributed to the American Revolution.",
                "British war debt prompted new colonial taxes and tighter imperial enforcement, while the Proclamation of 1763 constrained western settlement. Colonists interpreted these policies as threats to customary self-government, turning an imperial war victory into a constitutional crisis.",
                "apush-3-imperial-crisis",
                2,
            ),
            (
                "comparison",
                "Compare the Articles of Confederation with the Constitution in their treatment of national power.",
                "Both created representative republican governments, but the Articles left taxation and enforcement largely to the states, whereas the Constitution gave Congress taxing and commerce powers and created independent executive and judicial branches. The change answered weaknesses exposed by debt and interstate disputes.",
                "apush-3-government",
                2,
            ),
            (
                "continuity-change",
                "Evaluate the extent to which the Revolution changed the social position of women or African Americans by 1800.",
                "Revolutionary equality encouraged gradual emancipation in parts of the North and expanded women’s civic importance through republican motherhood. Yet slavery grew in the South and women still lacked formal political rights, so ideological change exceeded immediate legal and social transformation.",
                "apush-3-social-change",
                3,
            ),
        ],
    ),
    history_quiz(
        4,
        "Period 4, 1800–1848",
        APUSH,
        "CED Period 4: democracy, the market revolution, antebellum reform, and national expansion.",
        ["period-4", "market-revolution", "reform"],
        [
            (
                "causation",
                "Explain one cause of expanded political participation among white men from 1800 to 1848.",
                "States removed many property qualifications as market growth and western settlement weakened older deference-based politics. Competitive mass parties then mobilized white male voters, even while women and most nonwhite people remained excluded.",
                "apush-4-democracy",
                2,
            ),
            (
                "continuity-change",
                "Evaluate one major change and one continuity produced by the market revolution.",
                "Canals, railroads, and factories integrated regional markets and shifted more production toward wage labor, a major change. Agriculture nevertheless remained central, and the expansion of cotton tied economic growth to the continuing institution of slavery.",
                "apush-4-market",
                2,
            ),
            (
                "contextualization",
                "Place antebellum reform movements in the context of religious and economic developments.",
                "The Second Great Awakening taught that individuals could choose salvation and improve society, while market disruption and urbanization made social disorder more visible. That setting encouraged temperance, abolition, public education, and women’s-rights activism.",
                "apush-4-reform",
                3,
            ),
        ],
    ),
    history_quiz(
        5,
        "Period 5, 1844–1877",
        APUSH,
        "CED Period 5: territorial expansion, sectional crisis, Civil War, and Reconstruction.",
        ["period-5", "civil-war", "reconstruction"],
        [
            (
                "causation",
                "Explain how territorial expansion intensified sectional conflict before the Civil War.",
                "Land acquired from Mexico forced repeated decisions over whether slavery could expand westward. The Compromise of 1850, Kansas-Nebraska Act, and violent contest in Kansas nationalized the issue and weakened parties able to bridge the sections.",
                "apush-5-sectionalism",
                2,
            ),
            (
                "comparison",
                "Compare one Union advantage with one Confederate advantage at the start of the Civil War.",
                "The Union had greater population, industrial capacity, rail mileage, and naval power, supporting a prolonged war. The Confederacy fought defensively on familiar territory and initially benefited from experienced commanders, but those advantages could not fully offset the Union’s material depth.",
                "apush-5-civil-war",
                2,
            ),
            (
                "continuity-change",
                "Evaluate the extent to which Reconstruction changed life for formerly enslaved people by 1877.",
                "The Thirteenth through Fifteenth Amendments ended slavery, established citizenship, and protected male voting, while freedpeople built schools, churches, and families. Sharecropping, racial violence, and the retreat from federal enforcement preserved economic dependence and enabled a new racial order.",
                "apush-5-reconstruction",
                3,
            ),
        ],
    ),
    history_quiz(
        6,
        "Period 6, 1865–1898",
        APUSH,
        "CED Period 6: industrial capitalism, migration, urbanization, and the contested West.",
        ["period-6", "industrialization", "gilded-age"],
        [
            (
                "causation",
                "Explain one factor that enabled the growth of large corporations in the late nineteenth century.",
                "Railroad and telegraph networks created national markets, while new finance and legal forms let firms pool capital and coordinate production. Entrepreneurs then used vertical or horizontal integration to lower costs and limit competition.",
                "apush-6-corporations",
                2,
            ),
            (
                "comparison",
                "Compare the goals of industrial workers with those of Populist farmers in the 1880s and 1890s.",
                "Both challenged concentrated corporate power and sought government action. Workers emphasized wages, hours, and collective bargaining, while Populists prioritized railroad regulation, currency expansion, and credit relief for indebted farmers.",
                "apush-6-protest",
                2,
            ),
            (
                "continuity-change",
                "Evaluate change and continuity in federal policy toward Native peoples from 1865 to 1898.",
                "Policy shifted from treaty-based relations toward reservations, military conquest, and forced assimilation under the Dawes Act. The method changed, but the continuing objective was access to Native land and the erosion of tribal sovereignty.",
                "apush-6-west",
                3,
            ),
        ],
    ),
    history_quiz(
        7,
        "Period 7, 1890–1945",
        APUSH,
        "CED Period 7: reform, overseas expansion, world wars, the Depression, and the New Deal.",
        ["period-7", "progressivism", "world-wars", "new-deal"],
        [
            (
                "comparison",
                "Compare Progressive reform with New Deal reform in its approach to industrial capitalism.",
                "Both expanded public regulation to address problems created by corporate capitalism. Progressives often targeted corruption, monopoly, and specific social abuses, whereas the New Deal built broader federal systems for relief, recovery, labor rights, and economic security during mass depression.",
                "apush-7-reform",
                3,
            ),
            (
                "causation",
                "Explain one reason the United States adopted a more active overseas role around 1898.",
                "Industrial growth encouraged interest in overseas markets and naval bases, while strategic ideas and sensational coverage supported intervention. The war with Spain then gave the United States control of island territories and a larger imperial role.",
                "apush-7-imperialism",
                2,
            ),
            (
                "continuity-change",
                "Evaluate continuity and change in the federal government’s economic role from the 1920s through the New Deal.",
                "The 1920s generally favored business cooperation and limited welfare commitments. The New Deal greatly expanded regulation and social provision through agencies such as the SEC and Social Security, although private ownership and market capitalism continued.",
                "apush-7-government",
                3,
            ),
        ],
    ),
    history_quiz(
        8,
        "Period 8, 1945–1980",
        APUSH,
        "CED Period 8: Cold War policy, postwar society, civil rights, and social movements.",
        ["period-8", "cold-war", "civil-rights"],
        [
            (
                "causation",
                "Explain one cause of the United States containment policy after World War II.",
                "Soviet control in Eastern Europe and crises in Greece, Turkey, and Berlin convinced U.S. officials that unchecked expansion threatened the postwar balance. The Truman Doctrine and Marshall Plan applied economic and military power to contain further communist influence.",
                "apush-8-containment",
                2,
            ),
            (
                "continuity-change",
                "Evaluate the extent of change in the federal government’s role in civil rights from 1945 to 1968.",
                "Federal action moved from limited wartime and judicial measures to decisive enforcement through Brown, the Civil Rights Act, and the Voting Rights Act. Local resistance and persistent housing and economic inequality limited how fully legal victories transformed daily life.",
                "apush-8-civil-rights",
                3,
            ),
            (
                "comparison",
                "Compare the civil-rights movement’s goals with those of one other postwar social movement.",
                "The civil-rights and women’s movements both challenged institutional discrimination and sought federal legal protection. Civil-rights activists centered racial segregation and voting, while feminists also contested workplace exclusion, reproductive limits, and gendered family expectations.",
                "apush-8-movements",
                3,
            ),
        ],
    ),
    history_quiz(
        9,
        "Period 9, 1980–Present",
        APUSH,
        "CED Period 9: conservative resurgence, the end of the Cold War, demographic change, and globalization.",
        ["period-9", "conservatism", "globalization"],
        [
            (
                "causation",
                "Explain one factor behind the conservative resurgence that helped elect Ronald Reagan.",
                "Inflation, distrust of government, reactions against social change, and mobilization by religious conservatives weakened the New Deal liberal coalition. Reagan united these groups around tax cuts, deregulation, anticommunism, and traditional-values rhetoric.",
                "apush-9-conservatism",
                2,
            ),
            (
                "continuity-change",
                "Evaluate change and continuity in the U.S. economy from 1980 into the early twenty-first century.",
                "Information technology, finance, global supply chains, and a shift toward services transformed production and work. Yet market capitalism, consumer culture, and recurring debates over inequality and federal regulation remained central continuities.",
                "apush-9-economy",
                3,
            ),
            (
                "contextualization",
                "Contextualize late-twentieth-century debates over immigration in the United States.",
                "The 1965 immigration law ended national-origins quotas, while globalization and migration from Latin America and Asia increased U.S. diversity. These demographic shifts framed later disputes over borders, citizenship, labor, and multicultural identity.",
                "apush-9-demography",
                2,
            ),
        ],
    ),
    history_quiz(
        10,
        "Mixed Periods 1–9 Review",
        APUSH,
        "Mixed CED review connecting major developments across all nine AP U.S. History periods.",
        ["mixed-review", "periods-1-9"],
        [
            (
                "continuity-change",
                "Evaluate one major continuity and one major change in American labor systems from the colonial era through the late nineteenth century.",
                "Economic elites consistently sought dependable low-cost labor, a continuity visible in bound and dependent work. The dominant forms changed from indenture and racial slavery toward sharecropping and industrial wage labor after emancipation and industrialization.",
                "apush-mixed-labor",
                3,
            ),
            (
                "comparison",
                "Compare the federal response to economic crisis during the 1890s with the response during the Great Depression.",
                "In the 1890s federal leaders largely defended the gold standard and offered little direct relief. During the Great Depression the New Deal created relief jobs, regulation, and social insurance, showing a much larger acceptance of federal responsibility.",
                "apush-mixed-government",
                3,
            ),
            (
                "causation",
                "Explain one recurring way war accelerated political or social change in United States history.",
                "War expanded federal capacity and opened claims to rights: for example, Civil War mobilization produced emancipation and constitutional amendments, while World War II service and defense work strengthened postwar civil-rights demands. Mobilization disrupted existing institutions and made unequal citizenship harder to defend.",
                "apush-mixed-war",
                3,
            ),
        ],
    ),
]


WORLD_QUIZZES = [
    history_quiz(
        1,
        "The Global Tapestry, c. 1200–1450",
        WORLD,
        "CED Unit 1: state formation, belief systems, and regional societies from c. 1200 to 1450.",
        ["global-tapestry", "state-building", "belief-systems"],
        [
            (
                "comparison",
                "Compare how Song China and one South Asian state used belief systems to support social or political order.",
                "Song officials used Confucian education and examinations to staff a centralized bureaucracy, while South Asian states often patronized Hindu temples or Islamic institutions to legitimate rulers and organize communities. Both linked belief to authority, but China relied more directly on a uniform examination bureaucracy.",
                "world-1-belief-state",
                3,
            ),
            (
                "continuity-change",
                "Evaluate continuity and change in Islamic political authority from 1200 to 1450.",
                "Islam and the prestige of the caliphate remained sources of legitimacy, while merchants and scholars sustained a broad cultural sphere. Political authority became more decentralized as sultanates and regional dynasties, including Delhi, exercised power independently.",
                "world-1-islamic-world",
                2,
            ),
            (
                "contextualization",
                "Contextualize the rise of Great Zimbabwe within developments in sub-Saharan Africa.",
                "Bantu migrations had spread farming, ironworking, and languages, while Indian Ocean commerce linked the East African interior to coastal trade. Great Zimbabwe grew by controlling cattle, gold routes, and exchange with Swahili ports.",
                "world-1-africa",
                2,
            ),
        ],
    ),
    history_quiz(
        2,
        "Networks of Exchange, c. 1200–1450",
        WORLD,
        "CED Unit 2: Silk Roads, Mongol exchange, Indian Ocean commerce, and trans-Saharan networks.",
        ["networks-of-exchange", "silk-roads", "indian-ocean"],
        [
            (
                "causation",
                "Explain one factor that increased trade across the Silk Roads from 1200 to 1450.",
                "Mongol conquest placed much of Eurasia under connected regimes that protected routes and merchants. Greater security, relay systems, and commercial privileges lowered transaction costs and encouraged long-distance exchange.",
                "world-2-silk-roads",
                2,
            ),
            (
                "comparison",
                "Compare the role of environmental knowledge in Indian Ocean and trans-Saharan trade.",
                "Indian Ocean sailors timed voyages to monsoon wind cycles, while trans-Saharan caravans depended on knowledge of desert routes, oases, and camel transport. In both networks, specialized environmental knowledge made regular bulk exchange possible.",
                "world-2-environment",
                2,
            ),
            (
                "continuity-change",
                "Evaluate one change and one continuity caused by expanding exchange networks before 1450.",
                "The scale of cross-regional movement grew, spreading technologies, crops, religions, and diseases such as plague more widely. Luxury goods and merchant diasporas remained enduring features of long-distance commerce.",
                "world-2-effects",
                3,
            ),
        ],
    ),
    history_quiz(
        3,
        "Land-Based Empires, c. 1450–1750",
        WORLD,
        "CED Unit 3: expansion, administration, and legitimation in major land-based empires.",
        ["land-empires", "gunpowder-empires", "legitimation"],
        [
            (
                "comparison",
                "Compare one method the Ottoman and Mughal empires used to govern religiously diverse populations.",
                "Both balanced Islamic rulership with pragmatic inclusion. Ottomans organized recognized communities through the millet system, while Akbar incorporated Hindu elites and reduced discriminatory policies; each approach traded uniformity for stability.",
                "world-3-administration",
                3,
            ),
            (
                "causation",
                "Explain how gunpowder technology contributed to the expansion of land-based empires.",
                "Cannons helped rulers break fortified cities and firearms supported disciplined standing forces. States able to tax large populations could finance these weapons, defeating rivals and centralizing control, though technology alone did not guarantee durable administration.",
                "world-3-gunpowder",
                2,
            ),
            (
                "continuity-change",
                "Evaluate continuity and change in imperial legitimation from 1450 to 1750.",
                "Rulers continued to invoke religion and dynastic tradition, but they increasingly displayed wealth through monumental architecture and used salaried bureaucratic or military elites. The tools expanded while sacred legitimacy endured.",
                "world-3-legitimation",
                2,
            ),
        ],
    ),
    history_quiz(
        4,
        "Transoceanic Interconnections, c. 1450–1750",
        WORLD,
        "CED Unit 4: maritime exploration, Columbian Exchange, oceanic empires, and coerced labor.",
        ["transoceanic", "columbian-exchange", "maritime-empires"],
        [
            (
                "causation",
                "Explain one technological or economic cause of European maritime expansion after 1450.",
                "Improved ship designs, navigational instruments, and knowledge of Atlantic winds made longer voyages more feasible, while states and merchants sought direct access to Asian goods. Competition and capital converted technical capacity into sustained expansion.",
                "world-4-exploration",
                2,
            ),
            (
                "comparison",
                "Compare the labor systems used in Spanish America and the British Caribbean.",
                "Both coerced labor for export production and hardened racial hierarchy. Spanish colonists used Indigenous tribute and labor as well as African slavery, especially around mines and estates, whereas British Caribbean sugar plantations depended overwhelmingly on enslaved Africans.",
                "world-4-labor",
                3,
            ),
            (
                "continuity-change",
                "Evaluate the Columbian Exchange as both a continuity and a change in global exchange.",
                "Societies had long exchanged crops, animals, and diseases within connected regions, so biological transfer itself was not new. Permanent Atlantic contact joined previously separate hemispheres, producing unprecedented demographic collapse, crop diffusion, and ecological transformation.",
                "world-4-exchange",
                3,
            ),
        ],
    ),
    history_quiz(
        5,
        "Revolutions, c. 1750–1900",
        WORLD,
        "CED Unit 5: Enlightenment ideas, political revolutions, nationalism, and industrialization.",
        ["revolutions", "enlightenment", "industrialization"],
        [
            (
                "causation",
                "Explain how Enlightenment ideas contributed to one Atlantic revolution.",
                "Claims about natural rights and popular sovereignty supplied language for challenging inherited rule. In Saint-Domingue, enslaved and free people of color applied universal-rights claims more radically than many European thinkers intended, helping legitimate independence and emancipation.",
                "world-5-political-revolution",
                2,
            ),
            (
                "comparison",
                "Compare the early industrialization of Britain with industrialization in Japan after 1868.",
                "Both drew on technology, capital, and expanding transport, but Britain’s process began largely through private enterprise with domestic coal and colonial markets. Meiji Japan used stronger state direction, imported expertise, and model factories to catch up rapidly.",
                "world-5-industrialization",
                3,
            ),
            (
                "continuity-change",
                "Evaluate how industrialization changed social class while preserving older inequalities.",
                "Industrialization expanded wage-working and middle classes and concentrated labor in cities. Wealth and political influence remained unequal, and gendered expectations and elite privilege persisted even as the basis of status shifted toward industrial capital.",
                "world-5-social-effects",
                3,
            ),
        ],
    ),
    history_quiz(
        6,
        "Consequences of Industrialization, c. 1750–1900",
        WORLD,
        "CED Unit 6: imperialism, migration, resistance, and global economic specialization.",
        ["imperialism", "migration", "global-economy"],
        [
            (
                "causation",
                "Explain one economic cause of nineteenth-century imperialism.",
                "Industrial states sought raw materials, investment opportunities, and markets, encouraging political control over strategic regions. Economic motives worked with nationalism and racial ideology rather than operating alone.",
                "world-6-imperialism",
                2,
            ),
            (
                "comparison",
                "Compare Indian resistance in 1857 with one African response to European imperialism.",
                "Both drew on local grievances and defended political or cultural autonomy. The Indian Rebellion united varied soldiers and rulers but lacked unified aims, while Ethiopia’s centralized state acquired modern arms and defeated Italy at Adwa, producing different outcomes.",
                "world-6-resistance",
                3,
            ),
            (
                "continuity-change",
                "Evaluate change and continuity in global labor migration after the abolition of Atlantic slavery.",
                "Large-scale migration continued to supply plantations, mines, and railways with low-cost labor. Contract systems such as Indian and Chinese indenture replaced legal chattel slavery in many regions, changing workers’ formal status while preserving coercive conditions.",
                "world-6-migration",
                3,
            ),
        ],
    ),
    history_quiz(
        7,
        "Global Conflict, c. 1900–Present",
        WORLD,
        "CED Unit 7: world wars, mass mobilization, shifting power, and genocide.",
        ["global-conflict", "world-wars", "mass-atrocities"],
        [
            (
                "causation",
                "Explain one underlying cause that turned a regional crisis in 1914 into a world war.",
                "Alliance commitments connected the Austro-Serbian crisis to major powers, while militarized plans rewarded rapid mobilization. Imperial rivalries and nationalism made leaders less willing to localize the conflict.",
                "world-7-world-war-one",
                2,
            ),
            (
                "comparison",
                "Compare civilian mobilization during the First and Second World Wars.",
                "Both wars expanded state direction of economies, propaganda, rationing, and women’s war work. World War II mobilization was more global and technologically destructive, with strategic bombing and genocidal policies targeting civilians on a larger scale.",
                "world-7-mobilization",
                3,
            ),
            (
                "contextualization",
                "Contextualize anticolonial expectations that grew after World War I.",
                "Millions of colonial subjects served empires during a war publicly linked to national self-determination. Wartime sacrifice, Wilsonian language, and resentment of continued imperial rule strengthened nationalist movements even though the settlement preserved most empires.",
                "world-7-nationalism",
                3,
            ),
        ],
    ),
    history_quiz(
        8,
        "Cold War and Decolonization, c. 1900–Present",
        WORLD,
        "CED Unit 8: ideological rivalry, independence movements, and new states.",
        ["cold-war", "decolonization", "new-states"],
        [
            (
                "causation",
                "Explain one reason European colonial empires weakened after World War II.",
                "War exhausted European states while colonial soldiers and activists demanded the self-determination the Allies claimed to defend. Organized nationalist movements and pressure from new superpowers raised the cost of maintaining empire.",
                "world-8-decolonization",
                2,
            ),
            (
                "comparison",
                "Compare Indian independence with Algerian independence.",
                "Both relied on mass nationalism and faced imperial resistance. India’s movement combined civil disobedience with negotiation before partition, whereas Algeria won independence after a prolonged armed war against a settler colonial regime.",
                "world-8-independence",
                3,
            ),
            (
                "continuity-change",
                "Evaluate how the Cold War changed international conflict while preserving older rivalries.",
                "Nuclear deterrence discouraged direct U.S.-Soviet war and redirected competition into proxy wars, aid, and coups. Strategic rivalry, spheres of influence, and struggles over resources continued patterns familiar from earlier great-power politics.",
                "world-8-cold-war",
                3,
            ),
        ],
    ),
    history_quiz(
        9,
        "Globalization, c. 1900–Present",
        WORLD,
        "CED Unit 9: technology, global economics, environmental change, and transnational culture.",
        ["globalization", "technology", "environment"],
        [
            (
                "causation",
                "Explain one technological cause of accelerated globalization after 1945.",
                "Container shipping, jet travel, satellites, and digital communication sharply reduced the cost and time of moving goods, people, money, and information. Firms could therefore coordinate production across multiple countries.",
                "world-9-technology",
                2,
            ),
            (
                "continuity-change",
                "Evaluate change and continuity in global economic integration from the nineteenth century to the late twentieth century.",
                "Cross-border trade, investment, and labor migration remained central continuities. After 1945 multinational firms, financial institutions, trade agreements, and digital networks increased the speed and institutional depth of integration.",
                "world-9-economy",
                3,
            ),
            (
                "comparison",
                "Compare one supporter’s view of globalization with one critic’s view.",
                "Supporters emphasize lower prices, innovation, investment, and poverty reduction through exchange. Critics stress labor displacement, unequal bargaining power, cultural homogenization, and environmental costs; both assess the same integration but distribute its benefits and harms differently.",
                "world-9-debate",
                2,
            ),
        ],
    ),
    history_quiz(
        10,
        "Mixed Units 1–9 Review",
        WORLD,
        "Mixed CED review connecting state building, exchange, empire, industrialization, conflict, and globalization.",
        ["mixed-review", "units-1-9"],
        [
            (
                "comparison",
                "Compare the role of trade networks in state power before 1450 and after 1450.",
                "States in both periods taxed and protected commerce to gain revenue and prestige. Before 1450 many powers drew on overland and Indian Ocean nodes; after 1450 maritime empires increasingly controlled ocean routes, ports, and plantation zones on an interhemispheric scale.",
                "world-mixed-trade",
                3,
            ),
            (
                "continuity-change",
                "Evaluate continuity and change in coerced labor from 1450 through the nineteenth century.",
                "Empires and commercial producers continually used coercion to extract labor. Atlantic chattel slavery expanded racialized hereditary bondage, while nineteenth-century abolition shifted many employers toward indenture, peonage, and colonial forced labor rather than ending coercion.",
                "world-mixed-labor",
                3,
            ),
            (
                "causation",
                "Explain how industrialization contributed to both imperialism and anticolonial nationalism.",
                "Industrial power gave imperial states weapons, transport, and demand for resources, enabling conquest. Colonial railways, schools, cities, and print networks also connected local activists, who adapted nationalism to organize resistance against imperial rule.",
                "world-mixed-industry",
                3,
            ),
        ],
    ),
]


EURO_QUIZZES = [
    history_quiz(
        1,
        "Renaissance and Exploration, c. 1450–1648",
        EURO,
        "CED Unit 1: Renaissance humanism, state consolidation, overseas exploration, and new encounters.",
        ["renaissance", "exploration", "humanism"],
        [
            (
                "causation",
                "Explain one reason Renaissance humanism first became influential in Italian city-states.",
                "Wealth from Mediterranean commerce supported urban patrons and schools, while access to classical texts encouraged study of rhetoric, history, and civic life. Competitive city-states used humanist learning to train officials and display cultural prestige.",
                "euro-1-humanism",
                2,
            ),
            (
                "comparison",
                "Compare Italian Renaissance humanism with northern Renaissance humanism.",
                "Both returned to classical languages and emphasized educated human agency. Italian humanists often focused on civic life and Greco-Roman models, while northern humanists such as Erasmus more directly applied textual criticism to Christian reform.",
                "euro-1-renaissance",
                2,
            ),
            (
                "causation",
                "Explain one way competition among European states encouraged overseas exploration.",
                "Monarchies sought direct trade routes, precious metals, and strategic advantages over rivals. State sponsorship supplied ships and military protection, turning commercial ambitions and navigational advances into durable overseas empires.",
                "euro-1-exploration",
                2,
            ),
        ],
    ),
    history_quiz(
        2,
        "Age of Reformation, c. 1450–1648",
        EURO,
        "CED Unit 2: Protestant and Catholic reform, religious conflict, and sixteenth-century society.",
        ["reformation", "religious-wars", "printing"],
        [
            (
                "causation",
                "Explain how printing contributed to the rapid spread of Protestant reform.",
                "Cheap vernacular pamphlets and translations circulated criticism beyond universities and let lay readers compare claims. Printers reproduced Luther’s arguments faster than church or imperial authorities could suppress them.",
                "euro-2-print",
                2,
            ),
            (
                "comparison",
                "Compare Lutheran and Calvinist challenges to the Roman Church.",
                "Both rejected papal supremacy and taught salvation through faith rather than purchased or earned merit. Calvinism placed greater emphasis on predestination and disciplined communities, while Lutheran churches often worked closely with territorial princes.",
                "euro-2-protestantism",
                2,
            ),
            (
                "continuity-change",
                "Evaluate one change and one continuity produced by the Catholic Reformation.",
                "The Council of Trent clarified doctrine, improved clerical discipline, and new orders such as the Jesuits expanded education and missions. Catholic sacramental teaching and papal authority remained intact, so reform strengthened rather than replaced the institution.",
                "euro-2-catholic-reform",
                3,
            ),
        ],
    ),
    history_quiz(
        3,
        "Absolutism and Constitutionalism",
        EURO,
        "CED Unit 3: state power, absolutist monarchy, constitutional government, and economic policy.",
        ["absolutism", "constitutionalism", "state-building"],
        [
            (
                "comparison",
                "Compare the political development of France and England in the seventeenth century.",
                "Both monarchies sought greater revenue and authority. French rulers built an absolutist court and bureaucracy under Louis XIV, while conflict between English kings and Parliament produced civil war and a constitutional monarchy after the Glorious Revolution.",
                "euro-3-state-models",
                3,
            ),
            (
                "causation",
                "Explain how warfare contributed to stronger European states in the seventeenth century.",
                "Costly standing armies pushed rulers to improve taxation, credit, and administration. States that bargained successfully with elites or centralized collection gained durable institutions, although war could also provoke revolt and debt crises.",
                "euro-3-war-state",
                2,
            ),
            (
                "continuity-change",
                "Evaluate continuity and change in the social position of eastern European peasants during the age of absolutism.",
                "Noble landownership and agrarian hierarchy remained central. In much of eastern Europe, landlords tightened serf obligations to export grain and secure elite support, deepening rather than eliminating older forms of dependency.",
                "euro-3-serfdom",
                3,
            ),
        ],
    ),
    history_quiz(
        4,
        "Scientific, Philosophical, and Political Developments",
        EURO,
        "CED Unit 4: Scientific Revolution, Enlightenment, eighteenth-century society, and enlightened rule.",
        ["scientific-revolution", "enlightenment", "eighteenth-century"],
        [
            (
                "causation",
                "Explain one factor that enabled the Scientific Revolution.",
                "Renaissance mathematics, improved instruments, print exchange, and problems raised by navigation encouraged investigators to test inherited models. Networks of academies then gave observation and experiment greater authority.",
                "euro-4-science",
                2,
            ),
            (
                "comparison",
                "Compare Hobbes’s and Locke’s arguments about political authority.",
                "Both used a hypothetical state of nature and social contract rather than divine right alone. Hobbes justified near-absolute sovereignty to prevent disorder, while Locke made government conditional on protecting natural rights and accepted resistance to tyranny.",
                "euro-4-political-thought",
                2,
            ),
            (
                "continuity-change",
                "Evaluate the extent to which enlightened absolutists transformed their states.",
                "Rulers such as Joseph II and Frederick II promoted legal, educational, or religious reforms using Enlightenment language. They preserved monarchical hierarchy, military power, and noble privilege when reform threatened state stability, making change substantial but limited.",
                "euro-4-enlightened-rule",
                3,
            ),
        ],
    ),
    history_quiz(
        5,
        "Conflict, Crisis, and Reaction, c. 1648–1815",
        EURO,
        "CED Unit 5: commercial society, French Revolution, Napoleon, and conservative reaction.",
        ["french-revolution", "napoleon", "reaction"],
        [
            (
                "causation",
                "Explain one structural cause of the French Revolution.",
                "A regressive privilege system limited taxation of elites while war debt overwhelmed royal finances. Attempts to reform taxes forced the monarchy to summon representative institutions, opening a fiscal crisis into a sovereignty crisis.",
                "euro-5-french-revolution",
                2,
            ),
            (
                "continuity-change",
                "Evaluate continuity and change in French government from 1789 through Napoleon’s rule.",
                "Revolution abolished legal privilege and spread civic equality, and Napoleon preserved reforms such as the Civil Code. Political authority nevertheless shifted back toward centralized personal rule, censorship, and empire.",
                "euro-5-napoleon",
                3,
            ),
            (
                "contextualization",
                "Contextualize the conservative goals of the Congress of Vienna.",
                "After revolutionary warfare and Napoleonic conquest disrupted dynasties and borders, victorious powers feared renewed French aggression and popular revolution. They restored legitimate monarchies and constructed a balance of power to contain both threats.",
                "euro-5-vienna",
                2,
            ),
        ],
    ),
    history_quiz(
        6,
        "Industrialization and Its Effects",
        EURO,
        "CED Unit 6: industrial growth, urban society, class, reform, and economic thought.",
        ["industrialization", "urbanization", "social-reform"],
        [
            (
                "causation",
                "Explain one reason industrialization began in Britain.",
                "Accessible coal, commercial capital, agricultural productivity, transport networks, and secure property institutions supported mechanized production. Britain’s empire and trade also supplied inputs and markets; no single factor acted alone.",
                "euro-6-britain",
                2,
            ),
            (
                "comparison",
                "Compare liberal and socialist responses to industrial society.",
                "Both criticized inherited privilege and sought a more rational order. Liberals emphasized individual rights, contracts, and representative government, while socialists focused on class exploitation and favored collective ownership or stronger social provision.",
                "euro-6-ideologies",
                3,
            ),
            (
                "continuity-change",
                "Evaluate one change and one continuity in family and gender roles during early industrialization.",
                "Factory labor separated many workplaces from households and made wage earning more central, while middle-class domestic ideals sharpened gender distinctions. Women and children continued productive labor, especially in working-class families, despite the new ideal.",
                "euro-6-gender",
                3,
            ),
        ],
    ),
    history_quiz(
        7,
        "Nineteenth-Century Perspectives and Political Developments",
        EURO,
        "CED Unit 7: nationalism, mass politics, unification, imperialism, and fin-de-siècle culture.",
        ["nationalism", "mass-politics", "imperialism"],
        [
            (
                "comparison",
                "Compare the processes of Italian and German unification.",
                "Both combined nationalist aspirations with warfare and leadership by a strong kingdom. Piedmont used diplomacy and popular action amid regional divisions, while Prussia’s industrial and military power under Bismarck more decisively directed German unification.",
                "euro-7-unification",
                3,
            ),
            (
                "causation",
                "Explain one reason European governments expanded mass political participation late in the nineteenth century.",
                "Urban workers and organized parties demanded representation, while rulers hoped suffrage and social legislation would integrate citizens and weaken revolution. Expanding literacy and national institutions made mass politics administratively possible.",
                "euro-7-mass-politics",
                2,
            ),
            (
                "continuity-change",
                "Evaluate how late-nineteenth-century imperialism differed from earlier European expansion.",
                "Both pursued wealth, strategic power, and cultural influence. Industrial weapons, steam transport, racial pseudoscience, and direct territorial partition gave the later imperialism greater speed, penetration, and bureaucratic control.",
                "euro-7-imperialism",
                3,
            ),
        ],
    ),
    history_quiz(
        8,
        "Twentieth-Century Global Conflicts",
        EURO,
        "CED Unit 8: world wars, Russian Revolution, totalitarianism, depression, and genocide.",
        ["world-wars", "russian-revolution", "totalitarianism"],
        [
            (
                "causation",
                "Explain how World War I contributed to the Russian Revolution.",
                "Military defeats, casualties, inflation, and food shortages discredited the tsar and strained transport and administration. The provisional government’s decision to continue the war then helped the Bolsheviks gain support with promises of peace and land.",
                "euro-8-russia",
                2,
            ),
            (
                "comparison",
                "Compare fascist and communist rule in interwar Europe.",
                "Both created one-party dictatorships, censored opposition, mobilized youth, and used state violence. Fascism defended hierarchy, ultranationalism, and private property under state direction, whereas communism claimed class revolution and nationalized productive property.",
                "euro-8-dictatorships",
                3,
            ),
            (
                "contextualization",
                "Contextualize the rise of extremist politics during the Great Depression.",
                "World War I had weakened liberal legitimacy and left contested borders and reparations. Economic collapse then produced unemployment and fear, allowing movements promising national revival, order, or revolutionary equality to attack parliamentary compromise.",
                "euro-8-depression",
                3,
            ),
        ],
    ),
    history_quiz(
        9,
        "Cold War and Contemporary Europe",
        EURO,
        "CED Unit 9: Cold War division, decolonization, European integration, social change, and migration.",
        ["cold-war", "integration", "contemporary-europe"],
        [
            (
                "causation",
                "Explain one reason western European states pursued integration after World War II.",
                "Leaders sought to bind French and German production together so another war would be materially difficult, while shared markets promised reconstruction and greater leverage between the superpowers. Economic cooperation gradually produced broader institutions.",
                "euro-9-integration",
                2,
            ),
            (
                "comparison",
                "Compare the postwar political and economic systems of western and eastern Europe.",
                "Western Europe generally combined parliamentary democracy with market economies and welfare states. Soviet-dominated eastern Europe used one-party communist rule and planned economies, though both regions pursued industrial reconstruction and social provision.",
                "euro-9-divided-europe",
                2,
            ),
            (
                "continuity-change",
                "Evaluate change and continuity in European migration after 1945.",
                "Decolonization, labor recruitment, refugee crises, and EU mobility made European societies more diverse. Migration continued older patterns of movement driven by work and conflict, while debates over citizenship and identity remained persistent.",
                "euro-9-migration",
                3,
            ),
        ],
    ),
    history_quiz(
        10,
        "Mixed Units 1–9 Review",
        EURO,
        "Mixed CED review connecting Renaissance culture, state power, revolution, industry, conflict, and integration.",
        ["mixed-review", "units-1-9"],
        [
            (
                "continuity-change",
                "Evaluate continuity and change in the relationship between religion and European states from the Reformation to the Enlightenment.",
                "Rulers continued to use religious institutions for legitimacy and social order. Confessional conflict encouraged state control of churches, while toleration and secular political thought later reduced the assumption that one faith must define political membership.",
                "euro-mixed-religion",
                3,
            ),
            (
                "comparison",
                "Compare the political effects of the French Revolution with those of the Industrial Revolution.",
                "The French Revolution directly attacked legal privilege and sovereignty, while industrialization gradually reorganized class power and generated liberal, socialist, and labor movements. Both expanded mass politics and challenged aristocratic dominance through different mechanisms.",
                "euro-mixed-revolutions",
                3,
            ),
            (
                "causation",
                "Explain how repeated European wars contributed to both stronger states and international cooperation.",
                "Early modern war drove taxation, bureaucracy, and national armies, strengthening states. The destruction of two world wars later convinced governments to pool resources through NATO, European communities, and other institutions to restrain conflict and coordinate recovery.",
                "euro-mixed-war",
                3,
            ),
        ],
    ),
]


GEO_PROCESS = [
    "Identify the geographic concept or spatial pattern the prompt targets.",
    "Apply the concept to the stated place, scale, or data rather than only defining it.",
    "Explain a geographic mechanism and, when relevant, a limitation or scale effect.",
]

HUG_QUIZZES = [
    quiz(
        "AI Topic Exercises — Unit 1: Thinking Geographically",
        HUG,
        "CED Unit 1: spatial concepts, maps, data, scale, regions, and human-environment interaction.",
        ["unit-1", "spatial-thinking", "maps", "scale"],
        [
            frq(
                "A national map shows high average income in a coastal province, but neighborhood maps reveal severe inequality inside its largest city. Explain how scale affects the pattern a geographer observes.",
                GEO_PROCESS,
                [
                    "Model answer: National or provincial aggregation smooths local variation. At the neighborhood scale, finer data reveal clusters of high and low income that the larger-scale average conceals; this is a scale-of-analysis effect."
                ],
                "hug-1-scale",
            ),
            mcq(
                "Which statement best distinguishes site from situation?",
                [
                    "A) Site describes relative location; situation describes physical traits.",
                    "B) Site describes a place’s local physical characteristics; situation describes its location relative to other places.",
                    "C) Site and situation both mean absolute latitude and longitude.",
                    "D) Site applies only to rural places and situation only to cities.",
                ],
                1,
                [
                    "Separate characteristics at the location from relationships beyond it.",
                    "Terrain and water are site features; access to routes or markets describes situation.",
                ],
                "hug-1-location",
                1,
            ),
            frq(
                "A disease map uses one large symbol for every 1,000 cases. Explain one advantage and one limitation of this proportional-symbol design.",
                GEO_PROCESS,
                [
                    "Model answer: Proportional symbols make absolute case concentrations easy to compare. Large symbols may overlap and they do not adjust for population, so the map can obscure local detail and does not directly represent infection rates."
                ],
                "hug-1-maps",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Population and Migration Patterns",
        HUG,
        "CED Unit 2: population distribution, demographic transition, migration, and policy.",
        ["unit-2", "population", "migration", "demographic-transition"],
        [
            frq(
                "A country’s total fertility rate falls rapidly while life expectancy rises. Explain one likely short-term and one likely long-term demographic effect.",
                GEO_PROCESS,
                [
                    "Model answer: In the short term, population can keep growing because a large reproductive-age cohort creates demographic momentum. In the longer term, the population ages and growth slows or becomes negative unless immigration offsets low fertility."
                ],
                "hug-2-demographic-transition",
            ),
            mcq(
                "A worker moves from a rural village to a nearby town, then later to the national capital. This sequence best illustrates:",
                [
                    "A) Forced migration",
                    "B) Step migration",
                    "C) Transhumance",
                    "D) Counterurbanization",
                ],
                1,
                [
                    "Track whether movement occurs through intermediate destinations.",
                    "A staged path up the settlement hierarchy is step migration.",
                ],
                "hug-2-migration",
                1,
            ),
            frq(
                "Explain how one push factor and one intervening obstacle can shape an international migration flow.",
                GEO_PROCESS,
                [
                    "Model answer: Political persecution can push people to leave by making residence unsafe. A restrictive visa regime or dangerous border crossing can reduce, delay, or redirect that flow even when the push factor remains strong."
                ],
                "hug-2-migration-model",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 3: Cultural Patterns and Processes",
        HUG,
        "CED Unit 3: culture, diffusion, language, religion, identity, and cultural landscapes.",
        ["unit-3", "culture", "diffusion", "landscape"],
        [
            frq(
                "A restaurant chain enters a new country and changes its menu to follow local religious dietary practices. Explain how this example shows both globalization and local cultural persistence.",
                GEO_PROCESS,
                [
                    "Model answer: The chain’s international spread demonstrates economic and cultural globalization. Menu adaptation shows that local religious norms remain influential, producing glocalization rather than simple cultural replacement."
                ],
                "hug-3-glocalization",
            ),
            mcq(
                "The spread of a dance trend through social-media users with little regard for physical distance is best described as:",
                [
                    "A) Contagious diffusion only",
                    "B) Relocation diffusion only",
                    "C) Hierarchical diffusion through connected nodes",
                    "D) Reverse migration",
                ],
                2,
                [
                    "Ask whether adoption follows adjacency or influential network nodes.",
                    "Platform accounts and influencers create a hierarchy that can leap over space.",
                ],
                "hug-3-diffusion",
                2,
            ),
            frq(
                "Explain one way a toponym can reveal a region’s cultural history and one reason its meaning may be contested.",
                GEO_PROCESS,
                [
                    "Model answer: A place-name can preserve the language or authority of an Indigenous group, settler population, or former empire. Renaming becomes contested when groups attach different identities and political claims to that history."
                ],
                "hug-3-cultural-landscape",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Political Patterns and Processes",
        HUG,
        "CED Unit 4: states, nations, boundaries, territoriality, governance, and devolution.",
        ["unit-4", "political-geography", "boundaries", "devolution"],
        [
            frq(
                "A linguistic minority is concentrated in one peripheral province and demands greater control over schools and taxes. Explain why this pattern may promote devolution.",
                GEO_PROCESS,
                [
                    "Model answer: Territorial concentration gives the minority a regional political base and reinforces a distinct identity. Distance from the core and perceived fiscal or cultural neglect can strengthen demands to transfer power from the central state."
                ],
                "hug-4-devolution",
            ),
            mcq(
                "A boundary drawn along a line of latitude before large-scale settlement is best classified as:",
                [
                    "A) Subsequent",
                    "B) Relic",
                    "C) Antecedent",
                    "D) Consequent",
                ],
                2,
                [
                    "Use the timing of the boundary relative to the cultural landscape.",
                    "A line established before dense settlement is antecedent.",
                ],
                "hug-4-boundaries",
                1,
            ),
            frq(
                "Explain one benefit and one challenge of membership in a supranational organization.",
                GEO_PROCESS,
                [
                    "Model answer: Shared rules can enlarge markets or coordinate security and environmental policy. A state must also yield some decision-making autonomy, which can produce conflict when national preferences differ from organization-wide policy."
                ],
                "hug-4-supranationalism",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Agriculture and Rural Land-Use Patterns",
        HUG,
        "CED Unit 5: agricultural origins, production systems, land-use models, and food systems.",
        ["unit-5", "agriculture", "rural-land-use", "food-systems"],
        [
            frq(
                "Using the logic of the von Thünen model, explain why perishable vegetables may be grown closer to a city than grain.",
                GEO_PROCESS,
                [
                    "Model answer: Perishable vegetables have higher transport sensitivity and often greater value per unit of land, so minimizing travel time and cost favors locations near the market. Less perishable grain can remain profitable farther away."
                ],
                "hug-5-von-thunen",
            ),
            mcq(
                "Which change is most closely associated with the Second Agricultural Revolution?",
                [
                    "A) First domestication of plants",
                    "B) Crop rotation and mechanization that increased yields",
                    "C) Exclusive reliance on hunting and gathering",
                    "D) Satellite-guided precision agriculture",
                ],
                1,
                [
                    "Distinguish initial domestication, industrial-era improvement, and contemporary precision methods.",
                    "Crop rotation and mechanization characterize the Second Agricultural Revolution.",
                ],
                "hug-5-agricultural-revolutions",
                1,
            ),
            frq(
                "Explain one environmental benefit and one social limitation of a local-food movement.",
                GEO_PROCESS,
                [
                    "Model answer: Local sourcing can shorten some transport chains and encourage seasonal awareness, though production method may matter more than distance for emissions. Higher prices or limited retail access can also exclude lower-income consumers."
                ],
                "hug-5-sustainability",
                3,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 6: Cities and Urban Land-Use Patterns",
        HUG,
        "CED Unit 6: urbanization, city models, infrastructure, segregation, and sustainable planning.",
        ["unit-6", "urbanization", "city-models", "sustainability"],
        [
            frq(
                "A new rail station is followed by apartments and shops built within walking distance. Explain the land-use concept and one likely effect.",
                GEO_PROCESS,
                [
                    "Model answer: This is transit-oriented development, which concentrates mixed, higher-density uses around transit. It can reduce car dependence and improve access, but rising land values may also displace lower-income residents without housing protections."
                ],
                "hug-6-transit",
            ),
            mcq(
                "In the sector model, why might high-income housing extend outward from the central city in a wedge?",
                [
                    "A) Similar land uses follow an attractive transport corridor or amenity.",
                    "B) All urban land values are identical.",
                    "C) Cities have no central business district.",
                    "D) Housing is randomly distributed.",
                ],
                0,
                [
                    "Connect the sector shape to transportation axes and environmental amenities.",
                    "A desirable corridor can guide outward growth in a wedge.",
                ],
                "hug-6-sector-model",
                2,
            ),
            frq(
                "Explain how redlining can continue to shape a city after the discriminatory maps are no longer official policy.",
                GEO_PROCESS,
                [
                    "Model answer: Past credit denial suppressed homeownership, property investment, and intergenerational wealth in targeted neighborhoods. Because housing value, school finance, and infrastructure compound over time, spatial inequality can persist after formal redlining ends."
                ],
                "hug-6-redlining",
                3,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 7: Industrial and Economic Development Patterns",
        HUG,
        "CED Unit 7: development measures, industrial location, global production, trade, and sustainability.",
        ["unit-7", "development", "industry", "global-production"],
        [
            frq(
                "A firm places design in a high-income country, assembly in a lower-wage export zone, and customer support in several time zones. Explain the geographic economic process.",
                GEO_PROCESS,
                [
                    "Model answer: The firm uses a global division of labor and a spatially fragmented commodity chain. It locates each task where labor, skills, policy incentives, and market access reduce costs or improve coordination."
                ],
                "hug-7-global-division-labor",
            ),
            mcq(
                "Which measure combines health, education, and income indicators?",
                [
                    "A) Gross domestic product alone",
                    "B) Human Development Index",
                    "C) Total fertility rate",
                    "D) Gender ratio",
                ],
                1,
                [
                    "Look for a composite measure rather than a single economic output measure.",
                    "HDI combines longevity, schooling, and income.",
                ],
                "hug-7-development",
                1,
            ),
            frq(
                "Explain one reason a bulk-reducing industry locates near raw materials and one reason that pattern could change.",
                GEO_PROCESS,
                [
                    "Model answer: Processing near the source avoids paying to transport weight discarded during production. Cheaper transport, altered energy costs, new processing technology, or a shift toward recycled inputs can weaken that locational pull."
                ],
                "hug-7-industrial-location",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 8: Mixed Units 1–7 Review",
        HUG,
        "Mixed CED review connecting spatial thinking, population, culture, politics, agriculture, cities, and development.",
        ["unit-8", "mixed-review", "units-1-7"],
        [
            frq(
                "A coastal megacity receives many rural migrants, expands informal settlements, and attracts export manufacturing. Explain two linked geographic processes in this scenario.",
                GEO_PROCESS,
                [
                    "Model answer: Rural push factors and urban jobs drive internal migration and rapid urbanization. Export-oriented industrialization concentrates work near ports, while housing and infrastructure growth may lag population, producing informal settlements."
                ],
                "hug-mixed-urban-development",
                3,
            ),
            mcq(
                "Which example best shows a local consequence of a global commodity chain?",
                [
                    "A) A factory district grows near a port after a multinational supplier opens.",
                    "B) A mountain’s elevation changes with map projection.",
                    "C) A country moves its absolute location.",
                    "D) A language has no spatial distribution.",
                ],
                0,
                [
                    "Connect a worldwide production network to a measurable place-based effect.",
                    "Supplier investment can reshape local employment and land use near a port.",
                ],
                "hug-mixed-global-local",
                2,
            ),
            frq(
                "Explain how climate change could affect both migration and political cooperation at different scales.",
                GEO_PROCESS,
                [
                    "Model answer: Drought, storms, or sea-level rise can displace households internally or across borders. Local governments manage land and services, states negotiate migration policy, and supranational bodies coordinate adaptation funding, so impacts and responses vary by scale."
                ],
                "hug-mixed-scale",
                3,
            ),
        ],
        40,
        3,
    ),
]


RHETORICAL_PROCESS = [
    "Identify speaker or writer, audience, exigence, purpose, and relevant context.",
    "Choose precise textual evidence and name the rhetorical choice it demonstrates.",
    "Explain how the choice shapes the audience’s response and advances the purpose.",
]

EVIDENCE_PROCESS = [
    "State the passage’s defensible claim and map the relevant reason.",
    "Classify the evidence, then test its relevance, sufficiency, and credibility.",
    "Explain the evidence-to-claim connection and qualify the conclusion if needed.",
]

SYNTHESIS_PROCESS = [
    "Form a position that answers the issue rather than merely listing source views.",
    "Select evidence from at least two provided sources and represent each source accurately.",
    "Connect the sources through your own reasoning; address a tension, limit, or counterpoint.",
]

ARGUMENT_PROCESS = [
    "Define key terms and write a defensible, appropriately qualified thesis.",
    "Develop a reason with specific evidence from history, observation, or informed experience.",
    "Explain the warrant and engage a counterargument or limitation.",
]

STYLE_PROCESS = [
    "Identify the intended meaning, audience, and tone before revising.",
    "Examine diction, syntax, transitions, emphasis, and sentence relationships.",
    "Choose or explain the revision that improves precision without changing the writer’s purpose.",
]

LANG_QUIZZES = [
    quiz(
        "AI Topic Exercises — Unit 1: Rhetorical Situation",
        LANG,
        "CED-aligned practice identifying exigence, audience, purpose, context, and rhetorical choices.",
        ["unit-1", "rhetorical-situation", "audience", "purpose"],
        [
            frq(
                "An original library-director speech begins: “Tonight the lights in this reading room are on, but many neighbors cannot reach them after the last bus leaves at six. A library card opens a door only if the road to that door remains open.” Analyze how the director uses the rhetorical situation to support later hours.",
                RHETORICAL_PROCESS,
                [
                    "Model answer: Speaking to local decision-makers after transit cuts, the director turns an abstract budget choice into an access problem. The contrast between lit rooms and absent neighbors, followed by the door-and-road analogy, appeals to civic fairness and reframes extended hours as necessary public access rather than a convenience."
                ],
                "lang-rhetorical-situation",
            ),
            mcq(
                "A student writes to the school board immediately after temperatures in several classrooms exceed 90°F. Which element is the exigence?",
                [
                    "A) The school board as the audience",
                    "B) The dangerous classroom heat that prompts the message",
                    "C) The student’s use of measured temperature data",
                    "D) The formal tone of the letter",
                ],
                1,
                [
                    "Separate the occasion prompting speech from audience and rhetorical choices.",
                    "The immediate problem creating a need to write is the excessive heat.",
                ],
                "lang-exigence",
                1,
            ),
            frq(
                "Two original openings advocate a town tree-planting plan. Opening A tells residents, “Our blocks can become ten degrees cooler.” Opening B tells a finance committee, “Shade can reduce municipal cooling costs.” Compare how each opening adapts to audience.",
                RHETORICAL_PROCESS,
                [
                    "Model answer: Opening A foregrounds lived comfort and uses the inclusive “our” to help residents imagine a shared neighborhood benefit. Opening B translates shade into budget savings, matching the committee’s fiscal responsibility. Both support the same plan but select benefits their audiences are positioned to value."
                ],
                "lang-audience",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Claims and Evidence",
        LANG,
        "CED-aligned practice evaluating claims, evidence, credibility, warrants, and qualification.",
        ["unit-2", "claims", "evidence", "warrants"],
        [
            frq(
                "A columnist argues that a citywide rise in bicycle commuting proves one protected bike lane caused residents to abandon cars. Evaluate the claim and propose evidence that would better support it.",
                EVIDENCE_PROCESS,
                [
                    "Model answer: The timing is correlational and the citywide conclusion is broader than evidence about one lane. Stronger support would compare travel behavior before and after construction near the lane, use a similar area without a new lane, and control for fuel prices, transit changes, weather, and remote work."
                ],
                "lang-evidence-quality",
                3,
            ),
            mcq(
                "Which evidence most directly supports the claim that a tutoring program improved algebra performance?",
                [
                    "A) Participants say the tutor was friendly.",
                    "B) The program’s website uses bright colors.",
                    "C) Participants’ algebra gains exceed those of a comparable nonparticipant group on the same assessment.",
                    "D) The school offers tutoring in several subjects.",
                ],
                2,
                [
                    "Match the evidence to the exact outcome named in the claim.",
                    "A comparison of algebra gains is relevant; friendliness and design are not performance measures.",
                ],
                "lang-relevant-evidence",
                1,
            ),
            frq(
                "Revise the absolute claim “Remote work always makes employees more productive” into a qualified claim, and explain why the revision is more defensible.",
                EVIDENCE_PROCESS,
                [
                    "Model answer: Revised claim: Remote work can improve productivity for tasks requiring sustained individual focus when employees have suitable technology and clear coordination practices. The revision limits scope, names conditions, and leaves room for collaborative tasks or unequal home environments."
                ],
                "lang-qualification",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 3: Reasoning and Organization",
        LANG,
        "CED-aligned practice tracing lines of reasoning, paragraph function, concessions, and transitions.",
        ["unit-3", "line-of-reasoning", "organization", "counterargument"],
        [
            frq(
                "An essay moves from (1) evidence that lunch waste is costly, to (2) examples of share tables, to (3) a concern about food safety, and to (4) a proposal for supervised share tables. Explain the line of reasoning.",
                EVIDENCE_PROCESS,
                [
                    "Model answer: The essay establishes a problem, presents a plausible response, concedes an implementation risk, and then modifies the response to answer that risk. The safety paragraph is not a detour; it supplies the condition that makes the final proposal more credible."
                ],
                "lang-line-reasoning",
                2,
            ),
            mcq(
                "Which transition best introduces a genuine concession before an author defends public art spending?",
                [
                    "A) Similarly, murals contain color.",
                    "B) Admittedly, urgent infrastructure repairs deserve priority in a constrained budget.",
                    "C) Therefore, every critic dislikes art.",
                    "D) For example, budgets are documents.",
                ],
                1,
                [
                    "A concession fairly acknowledges a relevant concern from another position.",
                    "Budget scarcity is a meaningful objection the writer can answer.",
                ],
                "lang-concession",
                1,
            ),
            frq(
                "A paragraph contains a statistic about sleep, an anecdote about one exhausted student, and a final sentence advocating later school start times. Explain how the writer should order and connect these elements.",
                EVIDENCE_PROCESS,
                [
                    "Model answer: The writer can open with the anecdote to make the problem concrete, broaden to the statistic to show the case is representative, then explicitly warrant that chronic sleep loss impairs learning before proposing later starts. A transition such as “The student’s experience reflects a wider pattern” prevents evidence from becoming a list."
                ],
                "lang-paragraph-development",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Synthesis",
        LANG,
        "Original-source synthesis practice integrating multiple perspectives into a coherent position.",
        ["unit-4", "synthesis", "source-integration", "citation"],
        [
            frq(
                "Original sources on free downtown transit: Source A reports that a six-month pilot increased ridership 18%; Source B warns that lost fares may reduce maintenance; Source C interviews workers whose commute costs fell. Develop a qualified position on whether the city should continue the program.",
                SYNTHESIS_PROCESS,
                [
                    "Model answer: The city should continue free downtown transit for another measured trial while dedicating replacement revenue to maintenance. Source A indicates the policy changes behavior, and Source C shows that the benefit reaches workers directly. Source B identifies a real durability risk, so continuation should depend on published reliability targets and a stable funding plan."
                ],
                "lang-synthesis-position",
                3,
            ),
            mcq(
                "Which sentence synthesizes rather than merely summarizes two sources?",
                [
                    "A) Source A discusses cost. Source B discusses access.",
                    "B) Source A says gardens cost money.",
                    "C) Although Source A’s budget data expose start-up costs, Source B’s participation data suggest those costs may purchase broader community access.",
                    "D) Both sources are about gardens, and this is interesting.",
                ],
                2,
                [
                    "Synthesis puts sources into a meaningful relationship that advances the writer’s reasoning.",
                    "Choice C identifies a tension and interprets it.",
                ],
                "lang-synthesis-relationship",
                2,
            ),
            frq(
                "Original sources on phone-free classrooms: Source A is a teacher survey reporting fewer interruptions; Source B is a student editorial arguing phones support family contact; Source C is a controlled study finding small attention gains. Explain how to use all three without treating them as equally strong evidence.",
                SYNTHESIS_PROCESS,
                [
                    "Model answer: Use Source C as the strongest evidence for a causal attention claim because its design includes controls. Use Source A as practitioner evidence about implementation, while noting self-report limits. Use Source B to represent the family-contact concern and shape an exception policy, not as proof that phones improve learning."
                ],
                "lang-source-credibility",
                3,
            ),
        ],
        40,
        3,
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Argument",
        LANG,
        "CED-aligned practice developing defensible positions, evidence, warrants, and counterarguments.",
        ["unit-5", "argument", "thesis", "counterargument"],
        [
            frq(
                "Develop a position on whether convenience should be treated as a public good when cities design services.",
                ARGUMENT_PROCESS,
                [
                    "Model answer: Cities should treat basic convenience as a public good when it determines meaningful access, not when it merely removes minor effort. Frequent buses and readable forms let residents reach work and benefits, producing shared economic and civic gains. Yet scarce funds justify prioritizing barriers with measurable exclusion over amenities serving preference alone."
                ],
                "lang-argument-thesis",
                3,
            ),
            mcq(
                "Which thesis is most defensible for an argument about preserving old buildings?",
                [
                    "A) Old buildings are always better than new ones.",
                    "B) Buildings exist in cities.",
                    "C) Cities should preserve historically significant buildings when adaptive reuse is safe and financially feasible, while allowing replacement when preservation blocks urgent public needs.",
                    "D) Everyone agrees preservation is good.",
                ],
                2,
                [
                    "Look for a clear position with meaningful criteria and qualification.",
                    "Choice C is arguable, specific, and not absolute.",
                ],
                "lang-defensible-thesis",
                2,
            ),
            frq(
                "A writer claims failure is necessary for innovation and cites a single inventor’s failed prototype. Add a warrant and a counterargument response.",
                ARGUMENT_PROCESS,
                [
                    "Model answer: Warrant: A failed prototype can reveal constraints that abstract planning misses, so analyzing failure can guide a more effective redesign. Counterargument response: Failure alone does not teach; organizations need time, feedback, and psychological safety to learn from it, so productive experimentation—not indiscriminate failure—is the necessary condition."
                ],
                "lang-warrant-counterargument",
                3,
            ),
        ],
        40,
        3,
    ),
    quiz(
        "AI Topic Exercises — Unit 6: Style and Revision",
        LANG,
        "CED-aligned practice analyzing diction and syntax and revising prose for clarity, cohesion, and effect.",
        ["unit-6", "style", "revision", "diction", "syntax"],
        [
            frq(
                "Analyze the effect of syntax in this original sentence: “We waited through one meeting, through two postponements, through a winter of locked gates—and then the playground opened.”",
                STYLE_PROCESS,
                [
                    "Model answer: The repeated “through” phrases delay the independent clause and accumulate the community’s frustration. The dash creates a sharp turn, and the brief final clause releases that tension, making the opening feel earned and decisive."
                ],
                "lang-syntax",
                2,
            ),
            mcq(
                "Which revision is most concise without losing the original meaning of “Due to the fact that the bridge was closed, commuters were required to take an alternative route”?",
                [
                    "A) Commuters took another route because the bridge was closed.",
                    "B) Due to bridge closure facts, alternative routing was required by commuters.",
                    "C) The bridge, being closed in nature, caused a route that was alternative.",
                    "D) Commuters were required, due to the fact, to alternatively route.",
                ],
                0,
                [
                    "Replace inflated phrases and passive constructions while preserving cause and effect.",
                    "Choice A states the same relationship directly.",
                ],
                "lang-concision",
                1,
            ),
            frq(
                "A public-health notice says, “Noncompliant persons will be subject to hydration-protocol enforcement.” Revise it for a general audience that simply needs to drink water during a heat wave, and explain the tonal improvement.",
                STYLE_PROCESS,
                [
                    "Model answer: Revision: “During the heat wave, drink water regularly and check on anyone who may need help.” The direct verbs and familiar words replace punitive bureaucracy with clear, supportive action suited to a broad public audience."
                ],
                "lang-tone",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 7: Mixed Rhetorical Analysis Review",
        LANG,
        "Mixed CED review of rhetorical situation, evidence, synthesis, argument, organization, and style.",
        ["unit-7", "mixed-review", "rhetorical-analysis"],
        [
            frq(
                "An original mayoral statement says, “We can count potholes, but we should also count missed shifts and delayed ambulances. Repair is not cosmetic; it is a promise that the city’s routes belong to everyone.” Analyze the argument’s rhetorical effectiveness.",
                RHETORICAL_PROCESS,
                [
                    "Model answer: Addressing residents during a repair debate, the mayor shifts the issue from appearances to consequences. Parallel references to workers and ambulances broaden the audience, while the semicolon contrast rejects “cosmetic” framing. The metaphor of repair as a promise turns maintenance into an obligation of equal civic access."
                ],
                "lang-mixed-analysis",
                3,
            ),
            mcq(
                "A synthesis paragraph quotes three sources but offers no explanation between quotations. Its primary weakness is:",
                [
                    "A) Too much qualification",
                    "B) Missing commentary that connects evidence to the writer’s claim",
                    "C) An excess of original reasoning",
                    "D) Use of more than one source",
                ],
                1,
                [
                    "Evidence does not become reasoning merely by appearing in sequence.",
                    "The writer must explain relationships among sources and the position.",
                ],
                "lang-mixed-commentary",
                1,
            ),
            frq(
                "Create a mini-argument for adding shade to school courtyards using this original evidence: a temperature survey found shaded pavement averaged 12°F cooler; a facilities memo estimates high installation cost. Include a concession.",
                SYNTHESIS_PROCESS,
                [
                    "Model answer: Schools should phase in shade structures where students gather most. The 12°F difference shows a direct safety and usability benefit. Although the facilities memo makes immediate campus-wide installation unrealistic, prioritizing the hottest high-traffic courtyards and measuring use would control cost without ignoring heat risk."
                ],
                "lang-mixed-argument",
                3,
            ),
        ],
        40,
        3,
    ),
]


FICTION_PROCESS = [
    "Establish the speaker, character, conflict, setting, or narrative situation relevant to the prompt.",
    "Select a precise detail and identify the narrative or dramatic technique at work.",
    "Explain how the detail develops character, relationship, structure, or the work’s larger meaning.",
]

POETRY_PROCESS = [
    "Identify the speaker’s situation and track the poem’s literal movement or central contrast.",
    "Mark patterns and shifts in imagery, diction, syntax, sound, or form.",
    "Explain how those choices develop a defensible interpretation of the poem as a whole.",
]

FIGURATIVE_PROCESS = [
    "Read the image or figure first in its immediate literal context.",
    "Name the device and trace any repetition, contrast, transformation, or ambiguity.",
    "Connect the figure to tone, characterization, conflict, or thematic meaning without reducing it to one fixed code.",
]

LITERARY_ARGUMENT_PROCESS = [
    "Write an interpretive thesis that makes a claim about how the work creates meaning.",
    "Choose specific moments from the work and organize them as evidence for a line of reasoning.",
    "Explain significance, complexity, and a plausible tension or alternative reading.",
]

LIT_QUIZZES = [
    quiz(
        "AI Topic Exercises — Unit 1: Short Fiction",
        LIT,
        "CED-aligned short-fiction practice in characterization, setting, conflict, and narrative detail.",
        ["unit-1", "short-fiction", "characterization", "setting"],
        [
            frq(
                "In an original story, Mara arrives early to unlock the family bakery, notices the “For Sale” sign reflected backward in the glass, and turns it face down before her father enters. Analyze what the action reveals about Mara.",
                FICTION_PROCESS,
                [
                    "Model answer: The reversed reflection makes the sale feel both real and difficult for Mara to confront. Turning the sign down is a small act of denial and protection: she cannot solve the financial crisis, but she tries to shield her father and preserve the bakery’s familiar morning ritual. The gesture develops her as loyal yet avoidant."
                ],
                "lit-short-character",
            ),
            mcq(
                "In a short story about two siblings avoiding a difficult conversation, rain repeatedly drums on a metal roof and makes ordinary speech hard to hear. The setting detail most likely functions to:",
                [
                    "A) Provide meteorological data only",
                    "B) Externalize and prolong the characters’ failure to communicate",
                    "C) Prove that neither character has an inner life",
                    "D) Resolve the conflict before dialogue begins",
                ],
                1,
                [
                    "Connect the repeated environmental obstacle to the central interpersonal tension.",
                    "The noise gives physical form to failed communication.",
                ],
                "lit-short-setting",
                2,
            ),
            frq(
                "An original scene ends with this exchange: “‘Keep the key,’ Inez said. ‘You know I changed the lock,’ Paul answered.” Analyze how the dialogue creates tension.",
                FICTION_PROCESS,
                [
                    "Model answer: Inez’s imperative appears generous or conciliatory, but Paul’s reply exposes it as an empty gesture because the key no longer grants entry. The unsaid history behind the changed lock creates dramatic compression, suggesting exclusion and mistrust without direct exposition."
                ],
                "lit-short-dialogue",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Poetry",
        LIT,
        "CED-aligned poetry practice with speaker, imagery, sound, form, contrast, and shifts.",
        ["unit-2", "poetry", "speaker", "form"],
        [
            frq(
                "Analyze the shift in this original stanza: “All morning I praised the patient snow / for softening each fence and scar. / By noon the branches, bowed too low, / began to break beneath the quiet.”",
                POETRY_PROCESS,
                [
                    "Model answer: The speaker initially treats snow as gentle and restorative, personifying it as “patient” and praising its power to soften damage. “By noon” turns the stanza: bowed branches and the verb “break” reveal that apparent quiet can exert destructive weight. The shift complicates admiration into wary recognition."
                ],
                "lit-poetry-shift",
            ),
            mcq(
                "A poem repeats “I carried” at the start of four lines, then ends with “it carried me.” The reversal most directly emphasizes:",
                [
                    "A) A shift from the speaker’s control to recognition of reciprocal influence",
                    "B) The disappearance of all syntax",
                    "C) A purely chronological date",
                    "D) The speaker’s refusal to reconsider anything",
                ],
                0,
                [
                    "Track how subject and object exchange grammatical roles.",
                    "The reversal transforms what seemed borne by the speaker into a force shaping the speaker.",
                ],
                "lit-poetry-syntax",
                2,
            ),
            frq(
                "An original poem about leaving home uses tight couplets for five stanzas, then ends with a single unpaired line: “The road kept the name I could not take.” Explain the effect of form.",
                POETRY_PROCESS,
                [
                    "Model answer: The couplets establish formal pairing and expectation, fitting a poem concerned with attachment. The isolated final line visually and rhythmically enacts separation. Its personification gives the road continuity while the speaker experiences a break in identity."
                ],
                "lit-poetry-form",
                3,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 3: Longer Fiction and Drama",
        LIT,
        "CED-aligned practice analyzing evolving characters, relationships, dramatic conflict, and setting across a work.",
        ["unit-3", "longer-fiction", "drama", "character-development"],
        [
            frq(
                "Across an original novel, a judge first repairs broken clocks, later stops every clock in his house during a scandal, and finally gives one clock to his estranged daughter. Analyze how the repeated action develops his character.",
                FICTION_PROCESS,
                [
                    "Model answer: Repair initially reflects the judge’s faith in order and his ability to control small systems. Stopping the clocks during scandal reveals retreat from consequences and time. Giving one away finally converts control into a vulnerable acknowledgment that his daughter’s life continues beyond his authority."
                ],
                "lit-long-character-arc",
                3,
            ),
            mcq(
                "In a play, an idealistic candidate’s pragmatic campaign manager consistently points out the costs of the candidate’s promises. The manager primarily serves as:",
                [
                    "A) A foil who exposes tensions in the candidate’s ideals",
                    "B) An unrelated chorus with no effect",
                    "C) Proof that the candidate never changes",
                    "D) A stage direction",
                ],
                0,
                [
                    "A foil’s contrasting traits illuminate another character.",
                    "Pragmatism tests and clarifies the candidate’s idealism.",
                ],
                "lit-drama-foil",
                1,
            ),
            frq(
                "In an original drama, family arguments occur in a greenhouse where each scene shows more condensation on the glass. Explain how the setting can contribute to the play’s meaning.",
                FICTION_PROCESS,
                [
                    "Model answer: The greenhouse is meant to nurture growth, yet its increasingly clouded glass traps heat and limits vision. That contradiction parallels a family whose protective closeness has become pressure and whose members cannot see one another clearly. The accumulating condensation also gives the conflict a visible dramatic progression."
                ],
                "lit-drama-setting",
                3,
            ),
        ],
        40,
        3,
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Figurative Language and Symbol",
        LIT,
        "CED-aligned practice interpreting imagery, metaphor, personification, irony, and symbolic patterns.",
        ["unit-4", "figurative-language", "imagery", "symbol"],
        [
            frq(
                "Analyze the metaphor in this original line about an apology: “He set the sentence between us like a cup filled to the rim.”",
                FIGURATIVE_PROCESS,
                [
                    "Model answer: The apology becomes a fragile, overfull object requiring careful handling. “Between us” suggests it can connect the characters across a table but also remain an obstacle; “to the rim” creates tension because any response may spill what has barely been contained."
                ],
                "lit-figurative-metaphor",
            ),
            mcq(
                "A narrator repeatedly calls a neglected train station “the town’s waiting room,” even after trains stop arriving. The phrase most plausibly symbolizes:",
                [
                    "A) A community suspended between its past and an uncertain future",
                    "B) A technical guide to railway seating",
                    "C) The certainty that service will resume tomorrow",
                    "D) The absence of any shared history",
                ],
                0,
                [
                    "Consider how waiting changes when the expected arrival may never occur.",
                    "The station holds a community in unresolved transition.",
                ],
                "lit-symbol",
                2,
            ),
            frq(
                "In an original story, a character boasts that she notices every detail while the narration repeatedly shows her misreading other people’s expressions. Explain the irony.",
                FIGURATIVE_PROCESS,
                [
                    "Model answer: The gap between the character’s self-description and the narrated evidence creates dramatic irony: readers see limits she cannot. Her sharp observation of surfaces does not become emotional understanding, so the irony develops both her confidence and her isolation."
                ],
                "lit-irony",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Narration and Structure",
        LIT,
        "CED-aligned practice with point of view, chronology, pacing, juxtaposition, and structural choices.",
        ["unit-5", "narration", "structure", "point-of-view"],
        [
            frq(
                "An original story alternates between a child’s present-tense search for a missing dog and the adult narrator’s brief future reflections on that day. Analyze the structural effect.",
                FICTION_PROCESS,
                [
                    "Model answer: Present tense preserves the child’s uncertainty and urgency, while future reflections reveal that the search will carry lasting significance. Alternation creates dramatic irony and lets the work examine both immediate fear and the adult’s later effort to shape memory."
                ],
                "lit-structure-time",
                3,
            ),
            mcq(
                "A first-person narrator describes every guest’s motives with complete certainty, but repeatedly admits forgetting what the guests actually said. This pattern should make a reader:",
                [
                    "A) Treat every inference as objective fact",
                    "B) Question the narrator’s interpretive reliability",
                    "C) Assume point of view has no effect",
                    "D) Ignore the contrast between memory and certainty",
                ],
                1,
                [
                    "Compare the narrator’s confidence with the limits of the available evidence.",
                    "Certainty without remembered speech signals interpretive unreliability.",
                ],
                "lit-narrator-reliability",
                2,
            ),
            frq(
                "A story spends three pages describing a ten-second elevator ride before summarizing the next five years in one sentence. Explain the effect of pacing.",
                FICTION_PROCESS,
                [
                    "Model answer: Extreme dilation marks the elevator ride as psychologically decisive, allowing sensory detail and thought to outweigh clock time. Compressing five years afterward suggests those years are consequences or emotional aftermath, directing attention to the brief moment that reorganized the character’s life."
                ],
                "lit-pacing",
                2,
            ),
        ],
        35,
    ),
    quiz(
        "AI Topic Exercises — Unit 6: Literary Argument",
        LIT,
        "CED-aligned practice constructing interpretive theses, selecting evidence, and explaining complexity.",
        ["unit-6", "literary-argument", "thesis", "evidence"],
        [
            frq(
                "Write a defensible thesis for an essay about a work in which a character’s attempt to preserve tradition produces both belonging and harm.",
                LITERARY_ARGUMENT_PROCESS,
                [
                    "Model answer: In the selected work, the character’s rituals preserve a communal language that gives displaced family members a sense of belonging; however, the character’s insistence that the rituals remain unchanged turns memory into a test of loyalty, revealing that tradition sustains community only when it can accommodate living members."
                ],
                "lit-argument-thesis",
                3,
            ),
            mcq(
                "Which statement is an interpretive thesis rather than a plot summary?",
                [
                    "A) The protagonist returns home and opens a letter.",
                    "B) The novel has twelve chapters.",
                    "C) By delaying the letter’s opening until after the homecoming, the novel turns knowledge into a moral choice and complicates the protagonist’s desire for innocence.",
                    "D) A letter appears near the end.",
                ],
                2,
                [
                    "An interpretive thesis makes an arguable claim about how a choice creates meaning.",
                    "Choice C links structure to a complex idea.",
                ],
                "lit-interpretive-claim",
                2,
            ),
            frq(
                "A student argues, “The locked garden represents freedom,” and lists three scenes containing the garden. Explain how to improve the line of reasoning.",
                LITERARY_ARGUMENT_PROCESS,
                [
                    "Model answer: The student should replace the fixed equation with a claim about change: the locked garden initially embodies freedom imagined but inaccessible, then becomes a test of whether the character will violate another person’s boundary. Each scene should show how access, description, or the character’s response transforms the image and complicates freedom with responsibility."
                ],
                "lit-argument-reasoning",
                3,
            ),
        ],
        40,
        3,
    ),
    quiz(
        "AI Topic Exercises — Unit 7: Mixed Literary Analysis Review",
        LIT,
        "Mixed CED review integrating fiction, poetry, drama, figurative language, structure, and literary argument.",
        ["unit-7", "mixed-review", "literary-analysis"],
        [
            frq(
                "An original prose passage begins with a narrator confidently mapping a forest path and ends, after an argument, with the same path described as “a question written in mud.” Analyze how the changed image contributes to meaning.",
                FIGURATIVE_PROCESS,
                [
                    "Model answer: The opening map implies mastery, fixed direction, and confidence. After the argument, the metaphor transforms the path into uncertain language that must be interpreted. The physical route has not changed; the narrator’s damaged confidence has, showing how conflict alters perception and makes direction a moral as well as spatial problem."
                ],
                "lit-mixed-prose",
                3,
            ),
            mcq(
                "In a poem, regular end rhyme breaks only on the word “elsewhere.” The break most likely:",
                [
                    "A) Enacts departure from the poem’s established pattern",
                    "B) Has no possible relation to meaning",
                    "C) Guarantees the speaker is dishonest",
                    "D) Changes the word into a stage direction",
                ],
                0,
                [
                    "Compare the semantic idea of the word with its formal position.",
                    "Formal departure reinforces the idea of going elsewhere.",
                ],
                "lit-mixed-poetry",
                2,
            ),
            frq(
                "Develop a mini-thesis about an original play in which a family dining table is gradually dismantled for firewood during a winter siege.",
                LITERARY_ARGUMENT_PROCESS,
                [
                    "Model answer: By turning the family table from a setting for shared meals into fuel, the play makes survival consume the object that once organized domestic unity. Each removed board provides temporary warmth while narrowing the family’s place to gather, revealing how crisis can preserve bodies by eroding the rituals that define communal life."
                ],
                "lit-mixed-argument",
                3,
            ),
        ],
        40,
        3,
    ),
]


QUIZZES = (
    APUSH_QUIZZES
    + WORLD_QUIZZES
    + EURO_QUIZZES
    + HUG_QUIZZES
    + LANG_QUIZZES
    + LIT_QUIZZES
)


if __name__ == "__main__":
    print(len(QUIZZES), sum(len(q['items']) for q in QUIZZES))
