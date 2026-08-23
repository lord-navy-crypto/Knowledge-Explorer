#!/usr/bin/env python3
"""Batch 3: original CED-aligned analytical practice for humanities and social sciences."""

import random
import string


BASE_TAGS = [
    "ai-topic-exercises",
    "ced-aligned",
    "generated",
    "with-solutions",
    "batch-3",
]
GEN_NOTE = (
    "Original AI-generated practice aligned to College Board CED. "
    "Not College Board exam verbatim. Includes process + answers. · 2026-08-23 (batch 3)"
)


def rid(prefix):
    h = format(random.getrandbits(32), "x")[:8]
    s = "".join(random.choices(string.ascii_lowercase + string.digits, k=5))
    return f"{prefix}-{h}-{s}"


def mcq(prompt, choices, answer_idx, steps, concept_id=None, tier=2):
    letter = "ABCD"[answer_idx]
    ans = choices[answer_idx]
    body = ans.split(") ", 1)[-1] if ") " in ans else ans
    return {
        "id": rid("m-item"),
        "format": "mcq",
        "prompt": prompt,
        "choices": choices,
        "conceptId": concept_id,
        "conceptIntro": None,
        "difficultyTier": tier,
        "visibleSteps": steps,
        "blankSteps": [f"Answer key: {letter}) {body}"],
        "hints": [
            "Eliminate wrong choices.",
            "Use CED vocabulary and the evidence provided.",
            f"Final check: {letter}) {body}",
        ],
    }


def frq(prompt, steps, answers, concept_id=None, tier=2):
    return {
        "id": rid("m-item"),
        "format": "frq_half",
        "prompt": prompt,
        "conceptId": concept_id,
        "conceptIntro": None,
        "difficultyTier": tier,
        "visibleSteps": steps,
        "blankSteps": answers if isinstance(answers, list) else [answers],
        "hints": [
            "State the claim or method first.",
            "Use precise evidence and explain the connection.",
            "A model answer is in blankSteps.",
        ],
    }


def quiz(title, subject, desc, tags, items, minutes=45, tier=2):
    return {
        "id": rid("m-quiz"),
        "title": title,
        "subject": subject,
        "kind": "generated",
        "description": desc,
        "generationNote": GEN_NOTE,
        "estimatedMinutes": minutes,
        "tags": BASE_TAGS + tags,
        "items": items,
        "difficultyTier": tier,
    }


def analytical_quiz(title, subject, desc, tags, entries, minutes=45):
    """Build a four-item FRQ quiz from prompt/process/model-answer entries."""
    items = [
        frq(prompt, process, [f"Model answer: {answer}"], concept_id, tier)
        for prompt, process, answer, concept_id, tier in entries
    ]
    return quiz(
        title,
        subject,
        desc,
        ["set-2"] + tags,
        items,
        minutes,
        max(entry[4] for entry in entries),
    )


APUSH = "AP US History"
WORLD = "AP World History"
EURO = "AP European History"
HUG = "AP Human Geography"
LANG = "AP English Language"
LIT = "AP English Literature"
PSYCH = "AP Psychology"
MACRO = "AP Macroeconomics"
MICRO = "AP Microeconomics"


HISTORY_CAUSATION = [
    "Make a defensible causal claim and distinguish the most important cause from background conditions.",
    "Use at least two specific historical developments and explain the mechanism connecting each to the outcome.",
    "Qualify the argument by addressing another cause, a limit, or an unintended consequence.",
]
HISTORY_COMPARISON = [
    "Choose a common category of comparison, such as state power, labor, ideology, or social hierarchy.",
    "Use specific evidence for both cases and explain a meaningful similarity or difference.",
    "Explain why the comparison mattered in the broader historical context.",
]
HISTORY_CCOT = [
    "Establish the relevant condition at the beginning of the period and identify a later development.",
    "Support both continuity and change with precise historical evidence.",
    "Judge which pattern was more significant and explain the standard used for that judgment.",
]
HISTORY_SYNTHESIS = [
    "Write a claim that connects developments across periods or regions without treating them as identical.",
    "Use specific evidence from each setting and explain the shared process or important contrast.",
    "Address a limit to the connection and state what the comparison reveals.",
]
GEO_PROCESS = [
    "Identify the geographic concept and the spatial scale relevant to the scenario.",
    "Apply the concept through a clear causal or spatial chain using details from the prompt.",
    "Explain a limitation, variation across places, or consequence at another scale.",
]
RHETORICAL_PROCESS = [
    "Identify the rhetorical situation and make a claim about the writer's relevant choices.",
    "Use precise language from the original passage and explain how each choice shapes the audience's response.",
    "Connect the choices to the writer's purpose and acknowledge any tension or tonal shift.",
]
ARGUMENT_PROCESS = [
    "Define the prompt's key term and state a defensible, appropriately qualified position.",
    "Develop a reason with specific evidence from history, observation, or informed experience.",
    "Explain the warrant and engage a counterargument, condition, or limitation.",
]
SYNTHESIS_PROCESS = [
    "Form a position that answers the issue rather than listing source views.",
    "Use at least two source summaries accurately and explain the relationship between them.",
    "Add your own reasoning and address a tension, limitation, or implementation condition.",
]
POETRY_PROCESS = [
    "Establish the speaker's situation and a defensible interpretation of the poem.",
    "Trace a pattern or shift in imagery, diction, syntax, sound, or form using exact words from the original lines.",
    "Explain how the choices complicate the poem's meaning rather than assigning a fixed symbol.",
]
FICTION_PROCESS = [
    "Make an interpretive claim about characterization, narration, setting, structure, or conflict.",
    "Select concrete details from the original scenario and explain how they work together.",
    "Connect the technique to the passage's larger tension or complexity.",
]
LITERARY_ARGUMENT_PROCESS = [
    "Write an interpretive thesis that answers the prompt and identifies how the work creates meaning.",
    "Organize specific moments from the original work as evidence for a line of reasoning.",
    "Explain significance and address a tension, qualification, or plausible alternative reading.",
]
PSYCH_PROCESS = [
    "Identify the psychological concept or research principle before applying it.",
    "Use the scenario's behavior or data to explain the mechanism; do not merely repeat a definition.",
    "State a justified prediction or conclusion and identify a limitation or relevant alternative when appropriate.",
]
ECON_PROCESS = [
    "Identify the relevant economic model, curve, or decision rule.",
    "Show the calculation or trace the direction of each change in causal order.",
    "State the final result in context and note the ceteris-paribus assumption or efficiency implication.",
]


QUIZZES = [
    # AP US History
    analytical_quiz(
        "AI Topic Exercises — AP US History Periods 3–5 Set 2",
        APUSH,
        "CED-aligned analysis of imperial crisis, the early republic, sectional development, Civil War, and Reconstruction.",
        ["periods-3-5", "historical-reasoning", "apush"],
        [
            (
                "Evaluate the extent to which the Seven Years' War caused the imperial crisis between Britain and its North American colonies from 1763 to 1776.",
                HISTORY_CAUSATION,
                "The war was a major catalyst because its debt and new western territory led Parliament to tax and administer the colonies more directly through measures such as the Stamp Act and Proclamation of 1763. Colonists accustomed to substantial self-government interpreted those changes as threats to representative rights, and resistance escalated through boycotts and intercolonial coordination. The war did not make independence inevitable: Enlightenment ideas, local political traditions, and Britain's coercive responses converted a dispute over regulation into revolution.",
                "apush-3-imperial-crisis",
                3,
            ),
            (
                "Compare how the Market Revolution changed labor and social relations in the North and South from 1800 to 1848.",
                HISTORY_COMPARISON,
                "Both regions became more commercially integrated through transportation and expanding markets, but they organized growth around different labor systems. Northern factories and towns increased wage labor, immigration, and contested ideas about class and women's work, illustrated by the Lowell mills. Southern expansion tied cotton exports to the forced migration and intensified exploitation of enslaved people. Thus commercialization linked the sections economically while making their labor systems and social orders more distinct.",
                "apush-4-market-revolution",
                3,
            ),
            (
                "Evaluate continuity and change in debates over federal power from Jefferson's presidency through the Jacksonian era.",
                HISTORY_CCOT,
                "Suspicion of concentrated federal authority remained visible in Jeffersonian rhetoric, states' rights arguments, and the nullification crisis. Yet federal power also expanded in practice: Jefferson purchased Louisiana, Marshall Court decisions strengthened national supremacy, and Jackson used executive authority against both nullification and the Bank. The most significant change was the broader and more forceful use of national institutions, even as politicians continued to justify preferred policies with limited-government language.",
                "apush-4-federal-power",
                3,
            ),
            (
                "Explain how emancipation changed both the purpose of the Civil War and federal authority during Reconstruction.",
                HISTORY_CAUSATION,
                "The Emancipation Proclamation made destruction of slavery an explicit Union war aim and authorized Black military service, linking victory to freedom as well as reunion. After the war, the Thirteenth, Fourteenth, and Fifteenth Amendments expanded federal responsibility for citizenship and civil rights, while the Freedmen's Bureau and Reconstruction Acts attempted enforcement. That transformation was incomplete because white violence, restrictive court decisions, and the end of sustained federal intervention allowed new systems of racial subordination to emerge.",
                "apush-5-emancipation-reconstruction",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP US History Periods 6–8 Set 2",
        APUSH,
        "CED-aligned analysis of industrialization, reform, imperialism, migration, and the modern state from 1865 to 1945.",
        ["periods-6-8", "historical-reasoning", "apush"],
        [
            (
                "Explain how industrialization and immigration together reshaped urban politics and labor conflict from 1865 to 1900.",
                HISTORY_CAUSATION,
                "Large corporations concentrated wage workers in rapidly growing cities while new immigrants supplied labor and built ethnic institutions. Political machines exchanged services and jobs for votes where municipal welfare was limited, while dangerous work, wage cuts, and employer power contributed to strikes such as Homestead and Pullman. Industrialization created the conditions for conflict, but ethnic divisions, injunctions, and state support for employers often weakened labor's collective response.",
                "apush-6-industrial-urban",
                3,
            ),
            (
                "Compare Progressive Era reform with New Deal reform in their responses to industrial capitalism.",
                HISTORY_COMPARISON,
                "Both reform movements accepted a larger public role in correcting corporate abuse and insecurity: Progressives used regulation and antitrust policy, while New Dealers regulated finance and labor and created social insurance. Progressives often emphasized expertise, municipal reform, and competition; the New Deal responded to mass depression with direct relief, public employment, and stronger federal economic management. Both left exclusions, especially for many Black and agricultural workers, but the New Deal more durably expanded federal responsibility for economic security.",
                "apush-7-progressive-new-deal",
                3,
            ),
            (
                "Evaluate the relative importance of economic and strategic motives in United States expansion overseas from 1890 to 1914.",
                HISTORY_CAUSATION,
                "Economic interests encouraged access to markets and investment in places such as China, Cuba, and the Philippines, while strategic thinkers sought naval bases and an isthmian canal. The annexation of Hawai'i and construction of the Panama Canal show that the motives often reinforced one another. Strategic competition was slightly more decisive in specific territorial actions, but racial ideologies and claims of a civilizing mission helped legitimize both commercial and military expansion.",
                "apush-7-overseas-expansion",
                3,
            ),
            (
                "Evaluate continuity and change in African American efforts to secure freedom from the Great Migration through World War II.",
                HISTORY_CCOT,
                "A continuous goal was protection of political, economic, and personal freedom against segregation and racial violence. Migration changed the terrain of activism by creating larger northern voting blocs and cultural institutions; organizations used courts, protest, journalism, and labor pressure, while the Double V campaign linked victory abroad to equality at home. Wartime executive action against defense-industry discrimination marked change, but housing segregation, military discrimination, and violence showed persistent limits.",
                "apush-7-8-black-freedom",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP US History Period 9 and Synthesis Set 2",
        APUSH,
        "CED-aligned analysis of conservatism, globalization, rights movements, and cross-period synthesis since 1980.",
        ["period-9", "synthesis", "historical-reasoning", "apush"],
        [
            (
                "Explain the political and economic conditions that contributed to the rise of modern conservatism by 1980.",
                HISTORY_CAUSATION,
                "Stagflation and tax resistance weakened confidence in New Deal-style economic management, while backlash against federal civil-rights enforcement and social change mobilized some suburban and southern voters. Religious conservatives organized around education, gender, and abortion, and business groups promoted deregulation and lower taxes. Reagan's coalition succeeded by combining these distinct concerns, although not every supporter shared the same economic or cultural priorities.",
                "apush-9-conservatism",
                3,
            ),
            (
                "Evaluate how globalization changed work and consumption in the United States from 1980 to the early twenty-first century.",
                HISTORY_CCOT,
                "Trade liberalization, container shipping, and digital communication expanded access to inexpensive imported goods and integrated United States firms into global supply chains. At the same time, automation and offshoring contributed to manufacturing job losses in some regions while finance, technology, logistics, and service employment grew. Consumers gained variety and lower prices, but workers experienced uneven bargaining power and insecurity, so globalization's benefits and costs varied sharply by region, education, and industry.",
                "apush-9-globalization",
                3,
            ),
            (
                "Evaluate continuity and change in rights-based activism from the 1980s to the present.",
                HISTORY_CCOT,
                "Movements continued earlier strategies of litigation, protest, voter mobilization, and appeals to equal protection. Change came through new constituencies and communication tools: disability activists won the ADA, LGBTQ+ activists combined public protest with court challenges, immigrant-rights campaigns contested enforcement, and digital networks accelerated organizing. Legal gains expanded formal inclusion, but recurring disputes over enforcement, access, policing, and state authority demonstrate continuity in the gap between rights on paper and lived equality.",
                "apush-9-rights-activism",
                3,
            ),
            (
                "Connect the federal response to the 2008 financial crisis to one earlier expansion of federal economic responsibility. Explain both a similarity and a difference.",
                HISTORY_SYNTHESIS,
                "Like the New Deal response to the Great Depression, the post-2008 response treated financial collapse and mass unemployment as national problems requiring federal intervention, including stabilization of banks, stimulus spending, and new regulation. The difference is that 2008 policy largely worked through existing institutions and rapid financial rescue, whereas the New Deal created a broader array of relief agencies and social programs amid a longer institutional transformation. The connection reveals a durable expectation of federal crisis management, even though tools and political limits changed.",
                "apush-9-synthesis-federal-state",
                3,
            ),
        ],
        50,
    ),

    # AP World History
    analytical_quiz(
        "AI Topic Exercises — AP World History Units 3–5 Set 2",
        WORLD,
        "CED-aligned analysis of land empires, transoceanic exchange, revolutions, and industrialization.",
        ["units-3-5", "historical-reasoning", "world-history"],
        [
            (
                "Compare how the Ottoman and Mughal states legitimized rule over religiously diverse populations from 1450 to 1750.",
                HISTORY_COMPARISON,
                "Both dynasties combined military power with monumental architecture and claims to divinely sanctioned sovereignty. Ottoman rulers incorporated diversity through arrangements such as millets and recruited administrators through the devshirme, while Akbar used alliances with Rajput elites and broad religious accommodation. Later Mughal moves toward Islamic orthodoxy narrowed that accommodation. Both were pragmatic empires, but their institutions managed diversity in different ways and changed with particular rulers.",
                "world-3-empire-legitimation",
                3,
            ),
            (
                "Explain how the Columbian Exchange transformed both population and labor systems in the Atlantic world.",
                HISTORY_CAUSATION,
                "Afro-Eurasian diseases caused catastrophic Indigenous population decline, while American crops contributed to population growth in parts of Europe, Africa, and Asia. Labor demand on plantations and in mines, combined with Indigenous mortality, encouraged coerced systems including encomienda, mita adaptation, and the transatlantic slave trade. Disease was the key demographic cause, but European commercial policy and demand for sugar and silver determined how demographic disruption became a racialized labor regime.",
                "world-4-columbian-exchange",
                3,
            ),
            (
                "Evaluate the extent to which Enlightenment ideas caused Atlantic revolutions from 1750 to 1900.",
                HISTORY_CAUSATION,
                "Ideas about natural rights and popular sovereignty supplied a language for challenging monarchy and colonial rule in British North America, France, Haiti, and Spanish America. Yet local conditions drove timing and outcomes: fiscal crisis mattered in France, slavery and racial hierarchy shaped Haiti, and imperial disruption aided Latin American independence. Enlightenment thought was a significant common framework, but social conflict and state crisis converted ideas into revolutions.",
                "world-5-atlantic-revolutions",
                3,
            ),
            (
                "Evaluate continuity and change in the relationship between states and industrial production from 1750 to 1900.",
                HISTORY_CCOT,
                "States continued to protect trade and mobilize revenue, but industrialization led them to support railroads, legal structures, technical education, tariffs, and in some cases state-owned industry. Britain relied heavily on private capital within a supportive legal and imperial system, while Japan's Meiji government directly sponsored model industries before selling many to private firms. State involvement therefore changed in scale and purpose, though the balance between public direction and private enterprise varied.",
                "world-5-state-industrialization",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP World History Units 6–7 Set 2",
        WORLD,
        "CED-aligned analysis of imperialism, migration, global war, and interwar political transformation.",
        ["units-6-7", "historical-reasoning", "world-history"],
        [
            (
                "Evaluate the relative importance of economic and political causes of imperial expansion from 1750 to 1900.",
                HISTORY_CAUSATION,
                "Industrial economies sought raw materials, markets, and investment opportunities, but strategic rivalry and domestic prestige often determined annexation. British rule in India served commerce and revenue, while the scramble for African territory accelerated as European states feared exclusion by rivals even where immediate profits were uncertain. Economic interests made expansion attractive; nationalism, military technology, and strategic competition shaped its pace and geography.",
                "world-6-imperial-causes",
                3,
            ),
            (
                "Compare indentured migration and free labor migration in the nineteenth-century global economy.",
                HISTORY_COMPARISON,
                "Both moved workers toward plantations, mines, and infrastructure projects after the decline of Atlantic slavery and linked households to global markets through remittances. Indian and Chinese indentured workers signed restrictive contracts that exposed them to coercion, while many European migrants had greater legal freedom but still faced poverty, discrimination, and employer power. The distinction was real but not absolute: both systems reflected unequal access to land and capital and both created diasporic communities.",
                "world-6-global-migration",
                3,
            ),
            (
                "Explain how World War I became a 'total war' and how that transformation affected civilians.",
                HISTORY_CAUSATION,
                "Industrial weaponry and prolonged stalemate required states to conscript soldiers, direct factories, ration goods, borrow heavily, and use propaganda. Submarine warfare, blockade, occupation, famine, and mass displacement brought civilian production and survival into the conflict. Total mobilization widened women's paid work and state authority, but those changes did not produce equal citizenship everywhere and were often partially reversed after the armistice.",
                "world-7-total-war",
                3,
            ),
            (
                "Compare how economic crisis aided authoritarian movements in Germany and Japan between the world wars.",
                HISTORY_COMPARISON,
                "In both states, economic insecurity discredited parliamentary or civilian leaders and strengthened movements promising order, national revival, and expansion. German unemployment after the Great Depression aided Nazi electoral growth and dictatorship; in Japan, depression-era rural distress and distrust of party politics increased military influence. Germany developed a party-centered racial totalitarian state, whereas Japan retained the emperor and existing institutions while military leaders progressively dominated policy.",
                "world-7-authoritarianism",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP World History Units 8–9 Set 2",
        WORLD,
        "CED-aligned analysis of decolonization, Cold War conflict, globalization, and environmental change.",
        ["units-8-9", "historical-reasoning", "world-history"],
        [
            (
                "Compare the processes of decolonization in India and Algeria.",
                HISTORY_COMPARISON,
                "Both movements built mass nationalism and confronted European empires weakened by world war. In India, civil disobedience and negotiation played major roles, though partition produced extensive violence; in Algeria, a large settler population and French refusal to relinquish the colony contributed to a prolonged guerrilla war. Both gained sovereignty, but the level and form of violence reflected different settler, political, and imperial conditions.",
                "world-8-decolonization",
                3,
            ),
            (
                "Explain why Cold War rivalry produced proxy wars in newly independent states.",
                HISTORY_CAUSATION,
                "The superpowers sought influence without risking direct nuclear war, so they supplied weapons, aid, advisers, or troops to local allies. Newly independent states also had their own civil, ideological, and postcolonial conflicts, as in Korea, Vietnam, and Afghanistan, which outside powers intensified. Bipolar rivalry internationalized those wars, but it did not erase local agency or reduce every conflict to a simple United States-Soviet contest.",
                "world-8-proxy-wars",
                3,
            ),
            (
                "Evaluate continuity and change in global production networks from 1900 to the present.",
                HISTORY_CCOT,
                "Production continued to rely on unequal access to labor, resources, and markets, but container shipping, air transport, trade agreements, and digital coordination dispersed stages of production across many states. Multinational firms moved manufacturing toward lower-cost regions while design and finance often remained concentrated elsewhere. The scale and speed changed dramatically, yet dependency, labor exploitation, and efforts by states to capture value remained continuities.",
                "world-9-global-production",
                3,
            ),
            (
                "Connect one environmental consequence of industrialization after 1900 to an earlier pattern of global economic exchange.",
                HISTORY_SYNTHESIS,
                "Fossil-fuel industrialization and global shipping increased greenhouse-gas emissions, producing climate effects that cross borders. This resembles earlier commodity systems such as plantation sugar in that distant consumer demand reorganized land and labor at production sites while externalizing human and ecological costs. The modern system differs in planetary scale and carbon intensity, showing that long-distance exchange remained powerful while its environmental reach expanded.",
                "world-9-environment-synthesis",
                3,
            ),
        ],
        50,
    ),

    # AP European History
    analytical_quiz(
        "AI Topic Exercises — AP European History Units 3–5 Set 2",
        EURO,
        "CED-aligned analysis of state building, scientific and Enlightenment thought, revolution, and Napoleon.",
        ["units-3-5", "historical-reasoning", "european-history"],
        [
            (
                "Compare the development of political authority in France and England from 1648 to 1715.",
                HISTORY_COMPARISON,
                "French monarchy under Louis XIV centralized taxation, administration, military power, and elite court life, though privilege still limited royal control. In England, civil conflict and the Glorious Revolution produced parliamentary supremacy, regular taxation through Parliament, and a constitutional monarchy. Both states increased fiscal-military capacity, but France emphasized dynastic centralization while England institutionalized shared sovereignty and stronger limits on the crown.",
                "euro-3-state-building",
                3,
            ),
            (
                "Explain how the Scientific Revolution changed arguments about political and religious authority during the Enlightenment.",
                HISTORY_CAUSATION,
                "Empirical inquiry and mathematical natural laws encouraged intellectuals to ask whether society and government could also be studied and improved through reason. Locke used natural rights to limit government, while Voltaire criticized intolerance and Montesquieu analyzed divided power. Scientific methods did not mechanically produce one political program, and many thinkers retained religious belief, but they weakened appeals to inherited authority as sufficient proof.",
                "euro-4-science-enlightenment",
                3,
            ),
            (
                "Evaluate the relative importance of fiscal crisis and social inequality in causing the French Revolution.",
                HISTORY_CAUSATION,
                "War debt and an inequitable tax system created the immediate state crisis that forced Louis XVI to summon the Estates-General. Privilege, peasant dues, bourgeois frustration, food prices, and Enlightenment criticism shaped what representatives demanded once the meeting began. Fiscal breakdown was the decisive trigger, but social inequality transformed a revenue problem into a revolution against legal privilege and eventually monarchy.",
                "euro-5-french-revolution",
                3,
            ),
            (
                "Evaluate continuity and change in French political and social institutions from 1789 through Napoleon's rule.",
                HISTORY_CCOT,
                "The abolition of feudal privilege, legal equality for men, secular administration, and careers open to talent survived revolutionary regime changes and were consolidated in the Napoleonic Code. Yet Napoleon restored centralized authoritarian rule, restricted political opposition, and reinforced patriarchal family authority. Revolutionary equality before law represented substantial change, while hierarchy, coercive government, and unequal gender relations remained or reappeared.",
                "euro-5-napoleonic-continuity",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP European History Units 6–7 Set 2",
        EURO,
        "CED-aligned analysis of industrial society, nationalism, mass politics, and imperialism.",
        ["units-6-7", "historical-reasoning", "european-history"],
        [
            (
                "Explain how industrialization changed class and gender relations in nineteenth-century Europe.",
                HISTORY_CAUSATION,
                "Factory production and urbanization expanded industrial bourgeois and wage-working classes, separating workplace from household for many families and generating conflict over hours, wages, and political representation. Middle-class domestic ideals emphasized separate gender spheres, while working-class women and children often remained in paid labor. Later rising wages, education, and labor laws altered family strategies, so industrialization intensified class identity without imposing one uniform gender experience.",
                "euro-6-industrial-society",
                3,
            ),
            (
                "Compare the roles of war and diplomacy in Italian and German unification.",
                HISTORY_COMPARISON,
                "Both movements were led by a strong state—Piedmont-Sardinia and Prussia—and used limited wars plus nationalist sentiment. Cavour relied on French aid and diplomacy against Austria, while popular forces under Garibaldi helped unite southern Italy. Bismarck used diplomatic isolation and wars against Denmark, Austria, and France under Prussian leadership. German unification was more tightly controlled by a powerful army-state; Italian unification depended more on cooperation between elite diplomacy and popular action.",
                "euro-6-national-unification",
                3,
            ),
            (
                "Evaluate continuity and change in European mass politics from 1848 to 1914.",
                HISTORY_CCOT,
                "Elites continued to shape institutions and sometimes repressed opposition, but suffrage expansion, mass newspapers, political parties, unions, and socialist and nationalist organizations drew broader populations into politics. Governments adopted social insurance or electoral reforms partly to integrate workers and contain radicalism. Political participation widened substantially, yet women remained excluded from national voting in most states and authoritarian structures persisted in central and eastern Europe.",
                "euro-7-mass-politics",
                3,
            ),
            (
                "Evaluate the relative importance of economic interests and nationalism in late-nineteenth-century European imperialism.",
                HISTORY_CAUSATION,
                "Businesses and governments sought raw materials, investment outlets, and strategic routes, while mass nationalism made colonies symbols of prestige in competition among states. The Suez route and mineral-rich regions reveal concrete strategic and economic interests; Social Darwinism and missionary claims supplied ideological justification. National rivalry often drove acquisition beyond immediate profitability, but industrial capital and technology made conquest both attractive and feasible.",
                "euro-7-imperialism",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP European History Units 8–9 Set 2",
        EURO,
        "CED-aligned analysis of total war, dictatorships, European integration, migration, and memory.",
        ["units-8-9", "historical-reasoning", "european-history"],
        [
            (
                "Compare the effects of World War I and World War II on European civilians and state power.",
                HISTORY_COMPARISON,
                "Both wars expanded conscription, rationing, propaganda, economic direction, and civilian exposure to deprivation. World War II produced even more systematic targeting and displacement through aerial bombing, occupation, genocide, and racial population policies. In both cases state capacity grew, but World War II's ideological and genocidal dimensions made civilian identity itself a central target and encouraged stronger postwar human-rights institutions.",
                "euro-8-total-war",
                3,
            ),
            (
                "Compare how fascist and communist regimes mobilized society in interwar Europe.",
                HISTORY_COMPARISON,
                "Both used one-party rule, censorship, propaganda, youth organizations, political police, and state direction of social life. Soviet communism justified collectivization and planning through class revolution and state ownership; fascist regimes defended hierarchy, ultranationalism, private property under state priorities, and in Nazi Germany racial conquest. Their methods overlapped, but their ideologies, economic structures, and definitions of the political community differed.",
                "euro-8-dictatorships",
                3,
            ),
            (
                "Explain how Cold War conditions encouraged both western European integration and expansion of welfare states.",
                HISTORY_CAUSATION,
                "Economic devastation and fear of renewed rivalry encouraged cooperation over coal, steel, trade, and eventually broader European institutions. United States aid and security support helped western states rebuild, while competition with communism and strong labor movements increased pressure for public health, pensions, housing, and education. Integration and welfare had domestic roots as well, but Cold War security and legitimacy accelerated both projects.",
                "euro-9-integration-welfare",
                3,
            ),
            (
                "Evaluate continuity and change in European identity debates from postwar labor migration through migration after 1989.",
                HISTORY_CCOT,
                "European economies repeatedly recruited or received migrants, and debates consistently linked belonging to work, religion, race, and citizenship. Postwar guest workers from Turkey, North Africa, and former colonies were often treated as temporary despite permanent settlement; later EU mobility, refugees, and eastern enlargement diversified movement. Legal protections and supranational citizenship expanded, but xenophobia and disputes over assimilation and national sovereignty remained strong continuities.",
                "euro-9-migration-identity",
                3,
            ),
        ],
        48,
    ),

    # AP Human Geography
    analytical_quiz(
        "AI Topic Exercises — AP Human Geography Population and Culture Set 2",
        HUG,
        "CED-aligned spatial analysis of demographic change, migration, cultural diffusion, and cultural landscapes.",
        ["units-2-3", "population", "culture", "human-geography"],
        [
            (
                "Country A's death rate falls rapidly while its birth rate remains high; twenty years later, its cities struggle to provide schools and entry-level jobs. Apply the demographic transition model and explain the lagged urban effect.",
                GEO_PROCESS,
                "Country A is in stage 2 when mortality falls but fertility remains high, producing rapid natural increase and a youthful age structure. That large cohort later reaches school, working, and migration ages, increasing demand for services and encouraging rural-to-urban migration. The model identifies a broad pattern, but policy, gender equity, migration, and economic conditions affect the timing and size of the pressure.",
                "hug-population-dtm",
                3,
            ),
            (
                "A migrant network links one rural province to a distant city. Explain how cumulative causation can sustain the flow even after the city's original labor shortage ends.",
                GEO_PROCESS,
                "Earlier migrants provide information, temporary housing, job contacts, and remittances, lowering the cost and risk for later migrants from the same origin. Each arrival strengthens the network and makes chain migration more likely, so the stream can persist after the initial pull weakens. Recession, restrictive policy, or changing conditions at the origin can still interrupt the process.",
                "hug-migration-networks",
                3,
            ),
            (
                "A minority language gains speakers through schools and digital media even though the national language dominates government. Explain the diffusion processes and one scale-dependent outcome.",
                GEO_PROCESS,
                "Schools create hierarchical diffusion through formal institutions, while social platforms support contagious and network diffusion among dispersed speakers. At the local scale, revitalization can increase intergenerational use and cultural cohesion; at the national scale, bilingual policy may become a political demand. Digital visibility does not guarantee daily use, especially where employment and administration still reward the dominant language.",
                "hug-cultural-diffusion-language",
                3,
            ),
            (
                "A global restaurant chain keeps its brand but adds region-specific menus and redesigns stores to resemble local markets. Analyze this pattern using cultural convergence and glocalization.",
                GEO_PROCESS,
                "The shared brand, production system, and consumer format show convergence as similar commercial landscapes spread globally. Local ingredients, architecture, and tastes demonstrate glocalization: a global product is adapted to place to gain acceptance. The result is neither complete homogenization nor untouched local culture; it creates a hybrid landscape, though the corporation may still displace independent businesses.",
                "hug-culture-glocalization",
                3,
            ),
        ],
        44,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP Human Geography Political and Agriculture Set 2",
        HUG,
        "CED-aligned spatial analysis of boundaries, devolution, agricultural location, and global food systems.",
        ["units-4-5", "political-geography", "agriculture", "human-geography"],
        [
            (
                "A colonial boundary divides one ethnic group between two states and combines several rival groups within each state. Explain two possible political consequences without assuming conflict is inevitable.",
                GEO_PROCESS,
                "The divided group may develop cross-border ties or irredentist claims, while groups combined inside a state may compete over representation and resources, creating centrifugal pressures. Governments can reduce those pressures through federalism, inclusive institutions, or shared infrastructure that acts as a centripetal force. Boundaries shape incentives, but leadership, institutions, and economic conditions determine whether tension becomes conflict.",
                "hug-political-boundaries",
                3,
            ),
            (
                "A prosperous peripheral region with a distinct language demands greater tax control but not full independence. Analyze the demand as devolution.",
                GEO_PROCESS,
                "The movement seeks transfer of authority from the central state to a regional government, so it is devolution rather than necessarily secession. A distinct cultural identity and the belief that the region contributes more revenue than it receives are centrifugal forces. Fiscal autonomy could reduce tension by recognizing regional interests, but it could also deepen territorial inequality or encourage stronger separatist claims.",
                "hug-political-devolution",
                3,
            ),
            (
                "A dairy producer locates farther from a city than the von Thünen model predicts after refrigerated trucking and a highway are introduced. Explain why and identify one assumption of the model that has changed.",
                GEO_PROCESS,
                "Refrigeration reduces perishability and the highway lowers travel time and cost, allowing dairy production to remain profitable farther from the market. The original model assumes uniform transport conditions and transport cost increasing mainly with distance across an isolated plain. Infrastructure creates directional accessibility, so actual agricultural rings become distorted rather than perfectly concentric.",
                "hug-agriculture-von-thunen",
                3,
            ),
            (
                "A country expands export-oriented soybean farming while importing more staple food. Explain one benefit, one vulnerability, and one sustainable policy response.",
                GEO_PROCESS,
                "Soy exports can earn foreign exchange, attract processing investment, and raise some farm incomes. Dependence on a global commodity price and imported staples exposes households to price shocks, while monoculture may increase deforestation and soil loss. Land-use enforcement, crop rotation, support for domestic food crops, or traceable deforestation-free supply chains can reduce risk, though each policy has costs and enforcement limits.",
                "hug-agriculture-global-food",
                3,
            ),
        ],
        44,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP Human Geography Urban and Industrial Set 2",
        HUG,
        "CED-aligned spatial analysis of urban form, suburbanization, industrial location, and development.",
        ["units-6-7", "urban", "industrial-development", "human-geography"],
        [
            (
                "A metropolitan area has an old central business district, an airport logistics cluster, a university technology cluster, and several suburban business centers. Select and apply the most useful urban model.",
                GEO_PROCESS,
                "The multiple-nuclei model is most useful because specialized nodes—airport logistics, university technology, suburban offices, and the historic CBD—organize land use around several centers. Agglomeration draws related firms toward each node, while incompatible uses separate. The model is descriptive rather than universal and should be supplemented with local evidence about zoning, highways, segregation, and topography.",
                "hug-urban-multiple-nuclei",
                3,
            ),
            (
                "Explain how suburbanization can simultaneously increase metropolitan mobility and deepen spatial inequality.",
                GEO_PROCESS,
                "Highways and dispersed housing give car-owning households access to a wider range of jobs and services. Yet low-density zoning, unequal mortgage access, and fragmented tax bases can concentrate wealth and high-quality services in some suburbs while leaving transit-dependent residents distant from employment. Mobility therefore improves for some groups while job-housing mismatch and fiscal inequality worsen at the metropolitan scale.",
                "hug-urban-suburbanization",
                3,
            ),
            (
                "A clothing company moves assembly to a lower-wage country but keeps design, finance, and marketing in a global city. Analyze the decision using the new international division of labor.",
                GEO_PROCESS,
                "The firm separates tasks by their locational requirements: labor-intensive assembly moves where wages and production costs are lower, while command functions remain near specialized services, capital, and skilled labor in the global city. Container transport and digital coordination make the split feasible. The arrangement can create industrial jobs, but value, risk, and bargaining power are unevenly distributed across the commodity chain.",
                "hug-industrial-division-labor",
                3,
            ),
            (
                "Country B's GDP per capita rises while its life expectancy stagnates and regional inequality widens. Evaluate why GDP alone is an incomplete development measure.",
                GEO_PROCESS,
                "GDP per capita measures average output or income but not distribution, health, education, informal activity, environmental loss, or regional variation. Stagnant life expectancy and widening spatial inequality indicate that growth is not becoming broad human development. HDI components and disaggregated measures improve the evaluation, though national averages still conceal local and gender differences.",
                "hug-development-indicators",
                3,
            ),
        ],
        44,
    ),

    # AP English Language
    analytical_quiz(
        "AI Topic Exercises — AP English Language Rhetorical Analysis Set 2",
        LANG,
        "Original-passage rhetorical analysis aligned to AP English Language skills.",
        ["rhetorical-analysis", "english-language"],
        [
            (
                "An original parks director writes after a summer of locked public fountains: “A fountain is a small promise: that the city expected you to walk here, to rest here, to remain. When the taps go dry, the marble still shines, but the welcome does not.” Analyze how the director's choices support funding for repairs.",
                RHETORICAL_PROCESS,
                "The director reframes maintenance as civic belonging rather than plumbing. Calling a fountain a 'small promise' personifies the city and makes access an obligation; the parallel infinitives 'to walk...to rest...to remain' slow the sentence and broaden the public served. The final contrast between shining marble and absent welcome criticizes cosmetic investment, pressing budget officials to treat repair as fulfillment of public trust.",
                "lang-ra-civic-metaphor",
                3,
            ),
            (
                "An original student address says, “We were told the archive was too fragile to touch. So we photographed every page, indexed every name, and returned the originals unharmed. Fragility, we learned, is not an argument for forgetting; it is an instruction to handle memory with care.” Analyze the line of reasoning and syntax.",
                RHETORICAL_PROCESS,
                "The speaker first states the objection, then answers it with a compact sequence of completed actions, using parallel verbs to establish competence. The semicolon in the final sentence pivots from rejecting 'forgetting' to defining responsible access. By transforming fragility from prohibition into 'instruction,' the speaker concedes preservation concerns while making student archival work appear careful and necessary.",
                "lang-ra-rebuttal-syntax",
                3,
            ),
            (
                "An original scientist tells a coastal council, “The tide gauge is not dramatic. It does not shout. It adds three millimeters, then three more, writing its warning in a handwriting so small that budgets can pretend not to read it.” Analyze the use of personification and tone.",
                RHETORICAL_PROCESS,
                "Understatement in 'not dramatic' creates a measured scientific ethos, while short sentences mimic the quiet increments being described. Personifying the gauge as writing and budgets as pretending to read assigns moral responsibility without exaggerating the data. The tension between tiny handwriting and cumulative repetition turns gradual change into an urgent test of whether officials will attend to evidence.",
                "lang-ra-scientific-personification",
                3,
            ),
            (
                "An original community organizer opens a housing forum: “Some of us arrived by deed, some by lease, some with a cousin's key and two suitcases. But every route ends at the same question: can a neighborhood call itself stable when its people must keep moving?” Analyze how the opening adapts to audience and purpose.",
                RHETORICAL_PROCESS,
                "The anaphora 'some...some...some' acknowledges different housing experiences without ranking them, building an inclusive audience from owners, renters, and doubled-up families. Concrete objects—a key and suitcases—make precarity visible. The rhetorical question shifts 'stability' from property values to residents' ability to remain, preparing the mixed audience to consider anti-displacement policy as a shared neighborhood concern.",
                "lang-ra-audience-inclusion",
                3,
            ),
        ],
        46,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP English Language Argument Set 2",
        LANG,
        "CED-aligned argument practice developing qualified claims, evidence, warrants, and counterarguments.",
        ["argument", "english-language"],
        [
            (
                "Develop a position on whether institutions should preserve inefficient traditions when those traditions create community.",
                ARGUMENT_PROCESS,
                "Institutions should preserve a tradition's communal function, not automatically its inefficient form. A weekly in-person meeting may sustain mentorship that an email cannot, but rituals that consume scarce time or exclude participants should be redesigned. The relevant test is whether a tradition produces a distinctive shared good and can be adapted without destroying it; nostalgia alone is not enough, but efficiency alone cannot measure belonging.",
                "lang-argument-tradition",
                3,
            ),
            (
                "Develop a position on the extent to which uncertainty should delay public action.",
                ARGUMENT_PROCESS,
                "Uncertainty should change the scale and reversibility of action, not become a general excuse for delay. When potential harm is severe and early steps are low-cost—testing drinking water or creating heat shelters—officials should act while collecting better evidence. Large irreversible interventions require stronger support. This precautionary approach acknowledges that acting has costs while recognizing that waiting is itself a consequential choice.",
                "lang-argument-uncertainty",
                3,
            ),
            (
                "Develop a position on whether access to quiet should be treated as a public responsibility.",
                ARGUMENT_PROCESS,
                "Governments and schools should protect reasonable access to quiet because concentration, sleep, and health are not luxuries, but policy should target preventable exposure rather than promise silence everywhere. Enforcing nighttime limits, designing libraries, and buffering highways distribute a resource that private wealth otherwise buys. Cultural activity and free expression still matter, so time, place, duration, and measurable harm should guide restrictions.",
                "lang-argument-quiet",
                3,
            ),
            (
                "Develop a position on whether people have an obligation to repair systems from which they benefit but did not create.",
                ARGUMENT_PROCESS,
                "Benefit creates a proportional duty to repair when a system's harms are ongoing and participation helps sustain them. A student did not design a wasteful cafeteria system, for example, but can support sorting and advocate procurement changes because the institution acts collectively. Responsibility should reflect power and knowledge: leaders owe more than individual users, yet lack of original authorship does not erase present capacity to reduce harm.",
                "lang-argument-inherited-systems",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP English Language Synthesis Set 2",
        LANG,
        "Original-source synthesis practice aligned to AP English Language source integration and argument skills.",
        ["synthesis", "english-language"],
        [
            (
                "Original sources on converting a downtown street to pedestrian use: Source A reports a 14% increase in weekend foot traffic during a pilot; Source B interviews delivery drivers who report longer routes; Source C finds lower nitrogen dioxide on the closed block but no citywide change. Develop a qualified recommendation.",
                SYNTHESIS_PROCESS,
                "The city should continue the pedestrian pilot on weekends while adding timed delivery access and collecting weekday spillover data. Source A shows that the design attracts users, and Source C identifies a real but geographically limited air-quality benefit. Source B reveals an implementation cost rather than a reason to abandon the plan; scheduled loading periods can preserve access while the city tests whether traffic and pollution simply move to adjacent streets.",
                "lang-synthesis-pedestrian-street",
                3,
            ),
            (
                "Original sources on a four-day school week: Source A reports district transportation savings; Source B finds no average test-score decline in comparable rural districts; Source C surveys families and finds childcare burdens concentrated among hourly workers. Develop a position on adoption.",
                SYNTHESIS_PROCESS,
                "A district should adopt a four-day week only if transportation savings fund an accessible fifth-day program. Source A establishes a fiscal benefit, and Source B suggests academic damage is not inevitable, but neither answers the unequal burden documented by Source C. A supervised optional day turns some savings into childcare and enrichment, making a limited trial more equitable and allowing local attendance and learning data to determine continuation.",
                "lang-synthesis-school-week",
                3,
            ),
            (
                "Original sources on public facial-recognition use: Source A describes faster identification of missing persons; Source B reports higher false-match rates for some demographic groups; Source C outlines an audit-and-warrant policy. Develop a defensible policy position.",
                SYNTHESIS_PROCESS,
                "Public agencies should restrict facial recognition to serious, defined cases under a warrant, independent accuracy audits, and human corroboration. Source A shows a potentially urgent benefit, while Source B demonstrates that unreviewed matches can distribute error unequally. Source C provides safeguards, but audits cannot eliminate every misuse; agencies should publish use records and forbid a match from serving as sole evidence.",
                "lang-synthesis-facial-recognition",
                3,
            ),
            (
                "Original sources on restoring an urban creek: Source A estimates high construction costs; Source B models reduced flood peaks after wetland restoration; Source C records residents' concern that nearby rents will rise. Develop a recommendation that addresses all three.",
                SYNTHESIS_PROCESS,
                "The city should restore the creek in phases and pair the project with anti-displacement measures. Source B supplies a public-safety reason that can justify the costs identified by Source A, especially if the city begins with flood-prone segments and evaluates performance. Source C warns that environmental improvement can shift benefits away from current residents, so tax relief, affordable-housing preservation, and tenant protections should be part of the project rather than an afterthought.",
                "lang-synthesis-creek-restoration",
                3,
            ),
        ],
        50,
    ),

    # AP English Literature
    analytical_quiz(
        "AI Topic Exercises — AP English Literature Poetry Set 2",
        LIT,
        "Original-poem analysis aligned to AP English Literature interpretation of language, form, and complexity.",
        ["poetry", "literary-analysis", "english-literature"],
        [
            (
                "Analyze the shift in these original lines: “At dawn I called the fog a curtain, / kind enough to hide the shore. / At noon it lifted without asking, / and every wreck returned once more.”",
                POETRY_PROCESS,
                "The speaker initially welcomes concealment, calling the fog a 'kind' curtain that seems to protect the shore from view. The temporal turn 'At noon' and the phrase 'without asking' remove the speaker's control. When wrecks 'returned,' the poem reveals that disappearance was perceptual, not real, complicating comfort as temporary avoidance of damage or memory.",
                "lit-poetry-shift-fog",
                3,
            ),
            (
                "Analyze sound and syntax in these original lines: “Tin rain ticks the sill—then stops. / The house holds one unfinished drop.”",
                POETRY_PROCESS,
                "The clustered t sounds imitate rain striking metal and make the first line quick and percussive. The dash abruptly interrupts both syntax and sound, enacting the stopping rain. The slower second line personifies the house as 'holding' what cannot literally remain; the 'unfinished drop' turns sudden silence into suspended expectation rather than simple calm.",
                "lit-poetry-sound-rain",
                3,
            ),
            (
                "An original poem uses four three-line stanzas and ends with a single line: “No chair answered mine.” Explain how the final form contributes to meaning.",
                POETRY_PROCESS,
                "The repeated tercets establish visual groups, so the isolated last line appears formally excluded from the companionship the stanza pattern promised. Personifying chairs as capable of answering converts an empty seat arrangement into social absence. The line's isolation therefore enacts the speaker's loneliness while leaving ambiguous whether the separation is physical, emotional, or self-imposed.",
                "lit-poetry-form-isolation",
                3,
            ),
            (
                "Analyze the central image in these original lines: “I planted every apology / in jars along the stair; / by spring their roots had cracked the glass, / but none had reached the air.”",
                POETRY_PROCESS,
                "The extended metaphor treats apologies as living things that require conditions for growth. Jars suggest display and containment: the speaker has preserved the words but not released them to their recipients. Roots cracking glass show pressure and partial transformation, yet failure to reach air implies that private remorse has not become restorative action. The image values growth while exposing the limits of apology kept inward.",
                "lit-poetry-extended-metaphor",
                3,
            ),
        ],
        46,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP English Literature Fiction Set 2",
        LIT,
        "Original-fiction analysis aligned to AP English Literature characterization, narration, setting, and structure.",
        ["fiction", "literary-analysis", "english-literature"],
        [
            (
                "In an original story, Dev carefully labels every box before moving, but writes “kitchen” on the box containing his late mother's letters. Analyze what the detail reveals.",
                FICTION_PROCESS,
                "Dev's careful labeling establishes a desire for order and control, making the false label conspicuous. Calling the letters 'kitchen' disguises emotionally charged memory as ordinary household material, perhaps from movers and from himself. The act characterizes grief as managed through misclassification: he preserves the letters, but cannot yet name what carrying them means.",
                "lit-fiction-character-detail",
                3,
            ),
            (
                "An original story is narrated by a child who calls an eviction notice “the red homework on our door” while the adults repeatedly speak in unfinished sentences. Analyze the point of view.",
                FICTION_PROCESS,
                "The child's metaphor interprets an unfamiliar legal threat through school language, preserving limited understanding while making the notice feel like an imposed task. Adults' fragments let readers infer fear the narrator cannot fully explain. This gap creates dramatic irony and intensifies vulnerability: the child notices color and behavior accurately but lacks the social knowledge to name the family's crisis.",
                "lit-fiction-point-of-view",
                3,
            ),
            (
                "In an original story, two former friends meet in a laundromat where one machine remains permanently out of balance and shudders whenever their conversation approaches an old betrayal. Analyze the setting.",
                FICTION_PROCESS,
                "The laundromat suggests an attempt to clean or renew what has been soiled, but the unbalanced machine gives unresolved conflict a physical rhythm. Its shuddering interrupts avoidance at precisely the moments when the betrayal nears speech. Because the machine continues its cycle without becoming balanced, the setting complicates the possibility of easy reconciliation rather than serving as a simple symbol of repair.",
                "lit-fiction-setting-conflict",
                3,
            ),
            (
                "An original story opens with a woman missing a train, then moves backward through three earlier departures before returning to the platform as she chooses not to board the next one. Analyze the structure.",
                FICTION_PROCESS,
                "The initial missed train appears accidental, but the backward sequence places it within a pattern of departures shaped by fear, duty, and loss. Returning to the platform reinterprets delay as a possible choice. The circular structure distinguishes inability from refusal: by not boarding the next train, the protagonist gains agency, though the repeated departures leave open whether staying is courage or another form of avoidance.",
                "lit-fiction-structure-time",
                3,
            ),
        ],
        46,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP English Literature Literary Argument Set 2",
        LIT,
        "Original-work literary argument practice developing theses, evidence, and complex interpretations.",
        ["literary-argument", "english-literature"],
        [
            (
                "In an original novel, a village mapmaker quietly removes abandoned homes from each new edition, then discovers that displaced families preserve his older maps. Develop a literary argument about the relationship between representation and power.",
                LITERARY_ARGUMENT_PROCESS,
                "The novel presents mapping as political authorship: by deleting empty homes, the mapmaker makes displacement appear natural and helps authority convert loss into blank space. The families' preservation of old maps turns the same medium into counter-memory. Yet his secrecy suggests both guilt and limited agency, so the work argues that representation exercises power not only through falsehood but through selective accuracy and control over what later viewers can see.",
                "lit-argument-representation",
                3,
            ),
            (
                "In an original play, a mayor keeps a cracked ceremonial bell ringing by assigning more people to pull its rope. Develop an argument about leadership and collective effort.",
                LITERARY_ARGUMENT_PROCESS,
                "The play uses the bell to expose leadership that mistakes intensified labor for repair. Each added rope-puller produces public sound and an image of unity, but the widening crack shows that spectacle transfers cost to citizens while protecting the mayor from admitting failure. Because the community also values the bell's shared history, the work does not reject collective effort; it distinguishes participation in meaningful preservation from sacrifice used to conceal structural damage.",
                "lit-argument-leadership",
                3,
            ),
            (
                "In an original novel, a character can remember every promise made to her but forgets every promise she makes. Develop an argument about memory and moral responsibility.",
                LITERARY_ARGUMENT_PROCESS,
                "The asymmetrical memory turns grievance into a stable identity while making accountability disappear. Repeated scenes in which the character quotes others exactly but meets her own failures with sincere confusion show that memory can be emotionally truthful yet morally selective. The novel complicates blame because the forgetting is not fully deliberate, but it ultimately locates responsibility in her refusal to trust records and testimony that challenge the self her memory protects.",
                "lit-argument-memory",
                3,
            ),
            (
                "In an original drama, siblings inherit a house whose rooms become smaller whenever they agree and larger whenever they argue. Develop an argument about family conflict.",
                LITERARY_ARGUMENT_PROCESS,
                "The changing house makes both harmony and conflict costly. Agreement creates intimacy but also claustrophobia, suggesting that family unity can erase difference; argument creates space but makes connection harder across expanding rooms. By refusing to reward either condition simply, the drama argues that mature belonging requires negotiated boundaries—enough disagreement for individual identity and enough chosen closeness for relationship.",
                "lit-argument-family-space",
                3,
            ),
        ],
        48,
    ),

    # AP Psychology
    analytical_quiz(
        "AI Topic Exercises — AP Psychology Biological Bases and Cognition Set 2",
        PSYCH,
        "CED-aligned application of neuroscience, sensation and perception, memory, and cognition.",
        ["biological-bases", "cognition", "psychology"],
        [
            (
                "A split-brain participant sees a key in the left visual field while staring at a center point. Predict what the participant can say and what the left hand can select, and explain why.",
                PSYCH_PROCESS,
                "Information from the left visual field reaches the right hemisphere. Because language production is usually left-lateralized and the severed corpus callosum prevents transfer, the participant will generally be unable to name the key aloud. The right hemisphere controls the left hand, so that hand can select the key by touch. Individual lateralization varies, so the conclusion describes the classic research pattern rather than every person.",
                "psych-bio-split-brain",
                3,
            ),
            (
                "A drug acts as an agonist at receptors for a neurotransmitter. Explain two different mechanisms by which it could increase postsynaptic activity and why behavioral effects still depend on the neural pathway.",
                PSYCH_PROCESS,
                "An agonist might bind to and activate the receptor directly, or it might increase transmitter availability by blocking reuptake or enzymatic breakdown. Either mechanism can strengthen or prolong postsynaptic signaling. The same broad transmitter can serve different functions across circuits, so behavior depends on receptor subtype, dose, brain region, and interaction with other systems rather than on a one-transmitter/one-behavior rule.",
                "psych-bio-neurotransmission",
                3,
            ),
            (
                "After learning a new locker code, a student repeatedly enters last year's code. Identify the memory process, predict one way to reduce the error, and justify the prediction.",
                PSYCH_PROCESS,
                "The old code disrupting recall of the new code is proactive interference. The student could use elaborative encoding by connecting the new digits to a meaningful pattern and practice retrieving the new code in the actual hallway context. Stronger distinctive retrieval cues should make the new memory more accessible and reduce competition, although fatigue or divided attention could still produce mistakes.",
                "psych-cognition-interference",
                3,
            ),
            (
                "Two groups view the same ambiguous image. One group first reads a story about animals; the other reads about tools. The groups report different objects in the image. Explain the result and design one control.",
                PSYCH_PROCESS,
                "The stories create different perceptual sets, so top-down processing guides interpretation of identical sensory input toward animals or tools. A control group should view the image without a priming story, with participants randomly assigned and all other instructions held constant. Differences from that baseline would support a priming explanation, though demand characteristics should be reduced by concealing the hypothesis.",
                "psych-cognition-perceptual-set",
                3,
            ),
        ],
        46,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP Psychology Development and Learning Set 2",
        PSYCH,
        "CED-aligned application of development, classical conditioning, operant conditioning, and social learning.",
        ["development", "learning", "psychology"],
        [
            (
                "A researcher finds that securely attached toddlers explore a room, show distress when a caregiver leaves, and are comforted on return. Explain how the pattern differs from a claim that attachment is measured by distress alone.",
                PSYCH_PROCESS,
                "Secure attachment is inferred from the organization of exploration, separation response, and reunion behavior, especially using the caregiver as a secure base and accepting comfort after return. Distress alone is not diagnostic because temperament and context influence its intensity. The Strange Situation provides an operational pattern, but culture and ordinary caregiving environments limit broad conclusions from one laboratory observation.",
                "psych-development-attachment",
                3,
            ),
            (
                "A child calls every four-legged animal 'dog' and later learns to distinguish dogs from goats. Apply assimilation and accommodation.",
                PSYCH_PROCESS,
                "Calling the goat a dog is assimilation because the child fits new information into the existing dog schema. Revising the schema to create a separate category for goats is accommodation because the mental framework changes in response to evidence. Both processes support cognitive development, and an adult's label or guided comparison can scaffold the distinction.",
                "psych-development-schemas",
                2,
            ),
            (
                "A phone tone repeatedly precedes an unpleasant emergency alert. Later, the tone alone produces tension. Identify acquisition, extinction, and spontaneous recovery in this scenario.",
                PSYCH_PROCESS,
                "During acquisition, the neutral phone tone is paired with the alert, an unconditioned stimulus that naturally produces tension; the tone becomes a conditioned stimulus and tension to it a conditioned response. Repeated tone presentations without alerts would weaken the response through extinction. If tension returns after a rest period when the tone is heard again, that return is spontaneous recovery, showing that extinction is not simple erasure.",
                "psych-learning-classical",
                3,
            ),
            (
                "A game gives a rare bonus after an unpredictable number of completed tasks, and players persist for long periods. Identify the reinforcement schedule and explain persistence.",
                PSYCH_PROCESS,
                "The bonus follows a variable-ratio schedule because reinforcement depends on an unpredictable number of responses. Every completed task might be the one that earns the bonus, producing high, steady responding. The learned behavior is relatively resistant to extinction because a run of unreinforced responses is normal under the schedule, although game design and individual motivation also affect persistence.",
                "psych-learning-schedules",
                3,
            ),
        ],
        44,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP Psychology Social and Clinical Set 2",
        PSYCH,
        "CED-aligned application of social psychology, psychological disorders, treatment, and research design.",
        ["social-psychology", "clinical-psychology", "psychology"],
        [
            (
                "A manager calls an employee lazy after one late arrival but explains the manager's own lateness by citing traffic. Apply two attribution concepts and identify missing evidence.",
                PSYCH_PROCESS,
                "Calling the employee lazy while underweighting circumstances illustrates the fundamental attribution error. Explaining one's own behavior situationally while judging another dispositionally is also consistent with an actor-observer difference. A sound conclusion would require information about each person's pattern across time and situations, including whether the same traffic affected both, rather than one salient event.",
                "psych-social-attribution",
                3,
            ),
            (
                "A highly cohesive committee suppresses objections to a risky plan because members believe unanimity is essential. Explain two groupthink symptoms and propose one preventive procedure.",
                PSYCH_PROCESS,
                "Self-censorship occurs when members withhold doubts, and an illusion of unanimity follows because silence is misread as agreement; pressure on dissenters may reinforce both. The chair can solicit independent written judgments before discussion and assign a rotating devil's advocate. Those procedures reduce conformity pressure, though leaders must genuinely protect dissent for them to work.",
                "psych-social-groupthink",
                3,
            ),
            (
                "A student has persistent worry, muscle tension, and sleep difficulty that impair daily functioning across many situations. Explain how a biopsychosocial approach would frame the case without making a diagnosis from the prompt alone.",
                PSYCH_PROCESS,
                "A biopsychosocial formulation would examine biological vulnerability and arousal, cognitive patterns such as threat appraisal, learned avoidance, current stressors, sleep, and social support. The symptoms resemble an anxiety presentation, but duration, medical causes, substance use, and a full clinical assessment are needed before diagnosis. The approach integrates interacting levels instead of assigning a single cause.",
                "psych-clinical-biopsychosocial",
                3,
            ),
            (
                "Design a study comparing cognitive behavioral therapy with a wait-list condition for reducing test anxiety, including an ethical safeguard and an operational definition.",
                PSYCH_PROCESS,
                "Eligible volunteers could be randomly assigned to a standardized CBT program or a temporary wait-list, with anxiety operationalized as change on a validated test-anxiety scale collected before and after the same interval. Random assignment supports causal inference. Participants need informed consent and the right to withdraw, and the wait-list group should receive treatment after the study; researchers should also monitor serious distress rather than withholding necessary care.",
                "psych-clinical-treatment-research",
                3,
            ),
        ],
        48,
    ),

    # AP Macroeconomics
    analytical_quiz(
        "AI Topic Exercises — AP Macroeconomics AD–AS and Fiscal Policy Set 2",
        MACRO,
        "CED-aligned analysis of aggregate demand, aggregate supply, fiscal multipliers, and stabilization trade-offs.",
        ["ad-as", "fiscal-policy", "macroeconomics"],
        [
            (
                "An economy has a $100 billion recessionary gap and an MPC of 0.80. Calculate the minimum increase in government purchases predicted to close the gap using the simple spending multiplier, then trace the AD–AS effect.",
                ECON_PROCESS,
                "The spending multiplier is 1/(1 − 0.80) = 5, so the required increase in government purchases is $100 billion/5 = $20 billion. The spending raises aggregate demand by up to $100 billion, shifting AD right toward full-employment output and increasing the price level. The exact result may be smaller if crowding out, taxes, imports, or rising prices weaken the multiplier.",
                "macro-fiscal-spending-multiplier",
                3,
            ),
            (
                "A major input shortage raises firms' production costs. Use the AD–AS model to explain the short-run effects and one policy trade-off.",
                ECON_PROCESS,
                "Higher input costs shift short-run aggregate supply left, reducing real output and raising the price level; unemployment rises as output falls. Expansionary policy can support output but adds inflationary pressure, while contractionary policy can reduce inflation but deepen the downturn. Because the shock changes supply rather than aggregate demand, policymakers cannot immediately restore both the original price level and output with demand management alone.",
                "macro-ad-as-supply-shock",
                3,
            ),
            (
                "The government cuts lump-sum taxes by $20 billion when the MPC is 0.75. Calculate the maximum change in aggregate demand using the simple tax multiplier and explain the sign.",
                ECON_PROCESS,
                "The simple tax multiplier is −MPC/(1 − MPC) = −0.75/0.25 = −3. A $20 billion tax cut is a −$20 billion tax change, so aggregate demand increases by up to (−3)(−$20 billion) = $60 billion. The effect is smaller than an equal government-purchase change because households initially save part of the tax cut.",
                "macro-fiscal-tax-multiplier",
                3,
            ),
            (
                "Explain how debt-financed expansionary fiscal policy can raise output in the short run yet reduce long-run growth through the loanable-funds market.",
                ECON_PROCESS,
                "Higher government borrowing increases demand for loanable funds, raising the real interest rate, ceteris paribus. In the short run, increased government spending shifts AD right and can reduce a recessionary gap. Over time, the higher real rate can crowd out private investment, slowing capital accumulation and long-run aggregate supply growth. The size of crowding out depends on the state of the economy, saving flows, and how productively the government spends.",
                "macro-fiscal-crowding-out",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP Macroeconomics Money and Banking Set 2",
        MACRO,
        "CED-aligned analysis of bank reserves, money creation, money markets, loanable funds, and monetary policy.",
        ["money", "banking", "monetary-policy", "macroeconomics"],
        [
            (
                "The central bank adds $5,000 of new reserves to the banking system. With a required reserve ratio of 10%, calculate the maximum total increase in deposits under the simple multiplier and state two assumptions.",
                ECON_PROCESS,
                "The simple deposit multiplier is 1/0.10 = 10, so $5,000 of new reserves can support a maximum $50,000 increase in deposits. This maximum assumes banks lend all excess reserves and borrowers redeposit all funds in the banking system. Currency drain, excess-reserve holdings, weak loan demand, or other constraints make actual expansion smaller.",
                "macro-banking-deposit-expansion",
                3,
            ),
            (
                "Trace the effects of a central-bank open-market purchase on bank reserves, the money supply, nominal interest rates, investment, and aggregate demand.",
                ECON_PROCESS,
                "The central bank pays for securities, adding reserves to banks. Greater reserves support deposit and money-supply expansion, shifting money supply right and lowering the nominal interest rate. Lower borrowing costs increase interest-sensitive investment and consumption, shifting aggregate demand right. The chain assumes banks lend, borrowers respond to rates, and other determinants remain constant.",
                "macro-money-open-market-purchase",
                3,
            ),
            (
                "Real income rises while the central bank holds the nominal money supply constant. Explain the money-market effect and the likely short-run effect on interest-sensitive spending.",
                ECON_PROCESS,
                "Higher real income increases transaction demand for money, shifting money demand right. With a fixed nominal money supply and price level, the equilibrium nominal interest rate rises. Higher rates tend to reduce investment and interest-sensitive consumption, partly moderating the initial expansion in aggregate demand. A simultaneous change in the price level or central-bank policy could alter the result.",
                "macro-money-demand-income",
                3,
            ),
            (
                "Distinguish a central-bank sale of securities from an increase in government borrowing by tracing each through the money market or loanable-funds market.",
                ECON_PROCESS,
                "A central-bank sale reduces bank reserves and the money supply, shifting money supply left and raising the nominal interest rate in the money market. Increased government borrowing shifts demand for loanable funds right, raising the real interest rate and potentially crowding out investment. Both can raise rates, but one begins with monetary contraction and the other with fiscal demand for saving, so the models and initial curves differ.",
                "macro-money-loanable-funds",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP Macroeconomics Open Economy Set 2",
        MACRO,
        "CED-aligned analysis of foreign exchange, balance of payments, capital flows, trade, and policy linkages.",
        ["open-economy", "foreign-exchange", "macroeconomics"],
        [
            (
                "Foreign investors increase purchases of Country A's bonds. Trace the effect in Country A's foreign-exchange market and on net exports.",
                ECON_PROCESS,
                "Foreign investors demand more of Country A's currency to buy its bonds, shifting demand for the currency right and causing appreciation. Appreciation makes Country A's exports more expensive to foreigners and imports cheaper to its residents, so exports fall, imports rise, and net exports decrease. The result assumes flexible exchange rates and no offsetting changes in income, prices, or policy.",
                "macro-open-capital-inflow",
                3,
            ),
            (
                "A resident of Country A imports a $2,000 machine and the foreign seller acquires a financial claim on Country A. Record the balance-of-payments entries.",
                ECON_PROCESS,
                "The machine import is a $2,000 debit in Country A's current account because it is a purchase of a foreign good. The foreign acquisition of Country A's currency or financial asset is a $2,000 credit in the financial account. Apart from statistical discrepancy or reserve changes, the offsetting entries reflect double-entry accounting, not a claim that every individual transaction is beneficial.",
                "macro-open-balance-payments",
                3,
            ),
            (
                "Under flexible exchange rates, trace how expansionary fiscal policy can partially crowd out its own aggregate-demand effect through international capital flows.",
                ECON_PROCESS,
                "Expansionary fiscal policy raises aggregate demand and, through greater borrowing, tends to raise domestic real interest rates. Higher relative returns attract financial capital, increasing demand for the domestic currency and causing appreciation. Appreciation reduces net exports, offsetting part of the original rightward shift of AD. The extent depends on capital mobility, exchange-rate flexibility, and foreign conditions.",
                "macro-open-fiscal-exchange",
                3,
            ),
            (
                "Country A can produce either 40 computers or 80 tons of grain; Country B can produce either 30 computers or 30 tons of grain. Identify comparative advantage and propose mutually beneficial terms of trade for one computer.",
                ECON_PROCESS,
                "In Country A, one computer costs 80/40 = 2 tons of grain. In Country B, one computer costs 30/30 = 1 ton of grain. Country B has comparative advantage in computers, and Country A has comparative advantage in grain. A terms-of-trade price strictly between 1 and 2 tons of grain per computer—such as 1.5 tons—can benefit both, assuming constant opportunity costs and voluntary exchange.",
                "macro-open-comparative-advantage",
                3,
            ),
        ],
        48,
    ),

    # AP Microeconomics
    analytical_quiz(
        "AI Topic Exercises — AP Microeconomics Elasticity and Costs Set 2",
        MICRO,
        "CED-aligned analysis of elasticity, revenue, production costs, and competitive-firm decisions.",
        ["elasticity", "costs", "perfect-competition", "microeconomics"],
        [
            (
                "Using the midpoint method, price falls from $12 to $8 and quantity demanded rises from 40 to 60. Calculate price elasticity of demand and predict the change in total revenue.",
                ECON_PROCESS,
                "Quantity changes by 20 relative to a midpoint of 50, or 40%; price changes by −$4 relative to a midpoint of $10, or −40%. The absolute elasticity is 40%/40% = 1, so demand is unit elastic over the range. Total revenue is $480 at both endpoints, consistent with unchanged revenue when elasticity equals one.",
                "micro-elasticity-midpoint",
                3,
            ),
            (
                "Demand for bus rides rises 6% when consumer income falls 3%, and demand for train rides rises 4% when bus fares rise 8%. Calculate and interpret both elasticities.",
                ECON_PROCESS,
                "Income elasticity for bus rides is 6%/−3% = −2, so bus rides are an inferior good over the observed range. Cross-price elasticity of train rides with respect to bus fares is 4%/8% = 0.5, so the positive sign indicates the services are substitutes. These classifications describe the observed range and do not prove the values stay constant at every income or price.",
                "micro-elasticity-income-cross",
                3,
            ),
            (
                "A firm's marginal cost is below average total cost but above average variable cost. Explain what happens to each average when one more unit is produced.",
                ECON_PROCESS,
                "A marginal value below an average pulls that average down, so producing the unit lowers average total cost. A marginal value above an average pulls that average up, so the same unit raises average variable cost. There is no contradiction because ATC includes average fixed cost and exceeds AVC; MC can lie between the two averages.",
                "micro-cost-curves-averages",
                3,
            ),
            (
                "A perfectly competitive firm faces price $24. At its best positive output, MC = $24, ATC = $27, and AVC = $18. Determine the short-run decision, per-unit result, and long-run implication if conditions persist.",
                ECON_PROCESS,
                "The firm produces where P = MR = MC because price $24 exceeds AVC $18, so operating covers variable cost and $6 of fixed cost per unit. It incurs an economic loss of $3 per unit because P − ATC = −$3. In the long run, persistent losses cause firms to exit; market supply falls and price tends to rise until remaining firms earn zero economic profit.",
                "micro-perfect-competition-shutdown",
                3,
            ),
        ],
        48,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP Microeconomics Imperfect Competition Set 2",
        MICRO,
        "CED-aligned analysis of monopoly, regulation, monopolistic competition, oligopoly, and game theory.",
        ["imperfect-competition", "monopoly", "oligopoly", "microeconomics"],
        [
            (
                "A single-price monopolist has prices of $18, $16, $14, $12, and $10 at quantities 1–5. Marginal costs are $4, $7, $9, $11, and $15. Find the profit-maximizing quantity and price. If ATC at that quantity is $8, calculate profit.",
                ECON_PROCESS,
                "Total revenue is $18, $32, $42, $48, and $50, so marginal revenue is $18, $14, $10, $6, and $2. The third unit is produced because MR $10 exceeds MC $9, but the fourth is not because MR $6 is below MC $11. The firm chooses Q = 3, charges the demand-curve price $14, and earns ($14 − $8)(3) = $18 profit.",
                "micro-monopoly-table",
                3,
            ),
            (
                "A natural monopoly has declining ATC throughout market demand. Compare regulation at P = MC with regulation at P = ATC.",
                ECON_PROCESS,
                "Setting P = MC achieves allocative efficiency because consumers buy through the unit whose willingness to pay equals marginal cost, but with declining ATC, MC lies below ATC and the firm incurs a loss requiring subsidy. Setting P = ATC allows normal profit and continued operation without subsidy, but output is lower and price higher than the allocatively efficient level. Regulators trade off efficiency, fiscal cost, and incentives.",
                "micro-natural-monopoly-regulation",
                3,
            ),
            (
                "Explain the long-run adjustment of a monopolistically competitive market after existing firms earn positive economic profit.",
                ECON_PROCESS,
                "Positive profit attracts entry because barriers are relatively low. New differentiated substitutes reduce each existing firm's demand and make it more elastic, shifting the firm's demand left until it is tangent to ATC at the profit-maximizing output. Firms then earn zero economic profit but typically produce with excess capacity and charge a price above marginal cost, unlike perfect competition.",
                "micro-monopolistic-competition-entry",
                3,
            ),
            (
                "Two firms choose Advertise or Not. If neither advertises, profits are (10,10); if only one advertises, profits are (14,5) for advertiser and nonadvertiser; if both advertise, profits are (8,8). Identify dominant strategies, Nash equilibrium, and the cooperative tension.",
                ECON_PROCESS,
                "Advertising is dominant for each firm: it yields 14 rather than 10 when the rival does not advertise and 8 rather than 5 when the rival does. The Nash equilibrium is therefore (Advertise, Advertise) with profits (8,8), because neither can improve by changing alone. Both would prefer (Not, Not) with (10,10), but each has an individual incentive to defect, creating a prisoner's-dilemma tension.",
                "micro-oligopoly-game-theory",
                3,
            ),
        ],
        50,
    ),
    analytical_quiz(
        "AI Topic Exercises — AP Microeconomics Factor Markets and Market Failure Set 2",
        MICRO,
        "CED-aligned analysis of labor demand, monopsony, externalities, public goods, and common resources.",
        ["factor-markets", "market-failure", "microeconomics"],
        [
            (
                "A competitive firm sells output for $5. The marginal products of workers 1–4 are 10, 8, 6, and 4 units. If the market wage is $32, calculate each MRP and the profit-maximizing number of workers.",
                ECON_PROCESS,
                "MRP equals marginal product times output price, so the workers' MRPs are $50, $40, $30, and $20. The firm hires the first two workers because each adds at least the $32 marginal resource cost, but it does not hire the third because $30 is below $32. Profit-maximizing employment is two workers, assuming labor is divisible only in whole workers and other inputs are fixed.",
                "micro-factor-mrp",
                3,
            ),
            (
                "Explain why a binding minimum wage can increase employment in a monopsonistic labor market under some conditions.",
                ECON_PROCESS,
                "A monopsonist faces an upward-sloping labor supply, so hiring another worker raises the wage needed to attract labor and makes marginal resource cost exceed the wage. The firm hires where MRP equals MRC, below the competitive employment level. A minimum wage set above the monopsony wage but no higher than the competitive wage can make MRC horizontal over a range, leading the firm to hire more workers; a sufficiently high minimum instead reduces employment.",
                "micro-factor-monopsony",
                3,
            ),
            (
                "Production creates a constant $7 marginal external cost per unit. Explain the unregulated outcome and identify a corrective tax under the standard model.",
                ECON_PROCESS,
                "Producers base supply on marginal private cost, while marginal social cost equals MPC + $7. Because the market ignores the external cost, it produces where marginal social benefit equals MPC, yielding a quantity above the socially efficient level where MSB equals MSC. A $7 per-unit Pigouvian tax shifts the private supply curve to reflect social cost and moves output toward the efficient quantity.",
                "micro-failure-negative-externality",
                3,
            ),
            (
                "Compare the market failures associated with a flood-warning siren and an open-access fishery, and propose one policy for each.",
                ECON_PROCESS,
                "A flood-warning siren is nonrival and difficult to exclude, so free riding can cause private markets to underprovide it; tax-funded public provision can solve the financing problem. Fish in an open-access fishery are rival but difficult to exclude, so individual harvesters ignore depletion imposed on others and overuse the resource. Enforceable catch limits, tradable quotas, or defined community rights can align harvest with sustainable stock levels.",
                "micro-failure-public-common",
                3,
            ),
        ],
        50,
    ),
]


if __name__ == "__main__":
    print(len(QUIZZES), sum(len(q["items"]) for q in QUIZZES))
