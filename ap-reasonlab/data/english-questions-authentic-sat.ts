import type { EnglishPracticeQuestion } from "./english-content";

function item(
  id: string,
  skill: string,
  passage: string,
  prompt: string,
  choices: [string, string, string, string],
  answer: number,
  explanation: string
): EnglishPracticeQuestion {
  if (typeof prompt !== "string") {
    throw new Error(`Bad authentic SAT item ${id}: prompt must be a string`);
  }
  return { id, skill, passage, prompt, choices, answer, explanation };
}

/** Original Digital SAT–shaped items (College Board domains). Not real SAT questions. */
export const authenticSatQuestions: EnglishPracticeQuestion[] = [
  item(
    "sat-auth-ii-1",
    "Information and Ideas",
    `After a city library extended weekend hours, weekend checkouts rose 18 percent while weekday checkouts stayed nearly flat. Staff overtime increased on Saturdays only.`,
    "Which claim is best supported by the text?",
    [
      "The library became busier every day of the week.",
      "Longer weekend hours were associated with higher weekend checkouts and more Saturday overtime.",
      "Weekday hours should be cut.",
      "No one used the library on weekdays.",
    ],
    1,
    "Digital SAT Information and Ideas items stay inside the data and avoid extra policy claims."
  ),
  item(
    "sat-auth-ii-2",
    "Information and Ideas",
    `A botanist grew the same crop cultivar in two soils. Plot A (higher nitrogen) produced more biomass; Plot B produced more root mass relative to shoots. The botanist did not vary water.`,
    "Which statement is best supported?",
    [
      "Water caused all differences.",
      "The plots differed in biomass allocation, and nitrogen was one documented difference.",
      "Plot B had no roots.",
      "The cultivar cannot grow in nitrogen-rich soil.",
    ],
    1,
    "The passage supports a documented contrast without inventing unmentioned causes."
  ),
  item(
    "sat-auth-ii-3",
    "Information and Ideas",
    `Table: Bus ridership (thousands)\nJan 12 · Feb 14 · Mar 13 · Apr 18\nA fare-free weekend pilot began in April.`,
    "Which conclusion is most reasonable?",
    [
      "Ridership fell every month.",
      "April ridership was the highest of the four months shown, coinciding with the pilot’s start.",
      "The pilot caused the entire yearly budget surplus.",
      "No one rode in January.",
    ],
    1,
    "The table shows April as the peak; the text only notes coincidence with the pilot, not proof of nationwide effects."
  ),
  item(
    "sat-auth-ii-4",
    "Information and Ideas",
    `Critics argued that a new bike lane would worsen car delays. After installation, average evening car times on the corridor rose 40 seconds, while bike counts tripled and reported injuries fell.`,
    "Which finding is supported?",
    [
      "Car travel became faster.",
      "Bike use rose and injuries fell, while car times increased slightly.",
      "Injuries increased.",
      "No cars used the corridor.",
    ],
    1,
    "All three measured outcomes are stated; absolute claims are not."
  ),
  item(
    "sat-auth-ii-5",
    "Information and Ideas",
    `In a memory study, Group R reread a passage twice; Group T took a short quiz after one reading. One week later, Group T recalled more key terms. Both groups spent 20 minutes.`,
    "Which claim is best supported?",
    [
      "Rereading always beats testing.",
      "With time matched, the quiz group recalled more key terms after a week.",
      "The study lasted one year.",
      "Group R never read the passage.",
    ],
    1,
    "The result is comparative and time-matched, not universal."
  ),
  item(
    "sat-auth-ii-6",
    "Information and Ideas",
    `The author notes that coral bleaching events clustered in years with unusually persistent warm water, then cautions that local pollution can worsen outcomes even when temperatures are similar.`,
    "The author’s caution mainly functions to",
    [
      "deny that temperature matters",
      "prevent readers from treating temperature as the only factor",
      "prove pollution is unrelated",
      "argue bleaching never occurs",
    ],
    1,
    "The text pairs a temperature pattern with a warning about additional local factors."
  ),
  item(
    "sat-auth-cs-1",
    "Craft and Structure",
    `Although the initial results were ____, the team repeated the trial under tighter controls and confirmed the pattern.`,
    "Which choice completes the text with the most logical word?",
    ["definitive", "tentative", "irrelevant", "hostile"],
    1,
    "Repeating the trial implies the first results were preliminary — tentative. (Words in context / Craft and Structure.)"
  ),
  item(
    "sat-auth-cs-2",
    "Craft and Structure",
    `The mayor called the ordinance “a modest step, not a miracle cure,” then listed two measurable targets for the next year.`,
    "The quoted phrase most nearly suggests that the mayor is",
    [
      "claiming the policy solves every problem",
      "setting limited expectations while still offering concrete goals",
      "rejecting all targets",
      "discussing an unrelated historical event",
    ],
    1,
    "The contrast modest vs miracle plus listed targets shows calibrated claims."
  ),
  item(
    "sat-auth-cs-3",
    "Craft and Structure",
    `Passage 1 argues that open-source software spreads because users can inspect the code. Passage 2 argues that it spreads because companies reduce licensing costs. Both agree that documentation quality predicts long-term use.`,
    "The passages primarily",
    [
      "disagree about whether documentation matters",
      "offer different main explanations while sharing a claim about documentation",
      "discuss unrelated industries",
      "deny that anyone uses open-source software",
    ],
    1,
    "Cross-text Craft and Structure items often compare two short related texts."
  ),
  item(
    "sat-auth-cs-4",
    "Craft and Structure",
    `As used in the sentence “The filter was porous to rumor but opaque to data,” opaque most nearly means`,
    "Which choice completes the text with the most logical meaning?",
    [
      "transparent",
      "not allowing data through",
      "colorful",
      "musical",
    ],
    1,
    "The contrast with porous to rumor supports “not letting data through.”"
  ),
  item(
    "sat-auth-cs-5",
    "Craft and Structure",
    `Writer A praises a museum’s new labels for being “spare.” Writer B calls the same labels “thin.” Both are discussing word count on wall text.`,
    "The difference in tone is best described as",
    [
      "agreement that the labels are long",
      "positive vs negative evaluation of brevity",
      "a debate about ticket prices",
      "a claim that no labels exist",
    ],
    1,
    "Spare can praise concision; thin criticizes lack of content."
  ),
  item(
    "sat-auth-cs-6",
    "Craft and Structure",
    `The closing sentence repeats the opening image of a locked gate, but now the gate stands open.`,
    "This structural choice most likely",
    [
      "introduces a new setting with no link to the start",
      "returns to an earlier image to mark a change in situation",
      "proves the narrator is unreliable about dates",
      "lists statistical evidence",
    ],
    1,
    "Returning to a motif to show change is a craft move."
  ),
  item(
    "sat-auth-eoi-1",
    "Expression of Ideas",
    `Draft: The experiment used sensors. The experiment was interesting. Because the study observed only one school, its findings may not apply to schools with different schedules.`,
    "Which revision best emphasizes the study’s limitation (the writer’s goal)?",
    [
      "Keep “The experiment was interesting” as the final sentence.",
      "End with the sentence about the single-school sample and limited generalizability.",
      "Delete all mention of schools.",
      "Replace the limitation with “The sensors were blue.”",
    ],
    1,
    "Expression of Ideas asks which sentence best achieves a stated rhetorical goal."
  ),
  item(
    "sat-auth-eoi-2",
    "Expression of Ideas",
    `Which sentence should begin a paragraph arguing that cities should add protected bike lanes?`,
    "Choose the best topic sentence.",
    [
      "Bicycles have wheels.",
      "One reason cities should add protected bike lanes is that they can replace short car trips and reduce congestion.",
      "I rode a bike yesterday.",
      "Transportation exists in many countries.",
    ],
    1,
    "The sentence states a focused reason tied to the claim."
  ),
  item(
    "sat-auth-eoi-3",
    "Expression of Ideas",
    `A student wants a smoother transition from a problem to a solution.\nSentence 1: Nighttime bus frequency is low.\nSentence 2: ____ the city could add two late runs on the busiest corridor.`,
    "Which choice best connects the sentences?",
    ["In contrast,", "For example,", "Therefore,", "On the other hand,"],
    2,
    "A solution follows a problem, so Therefore is the logical link."
  ),
  item(
    "sat-auth-eoi-4",
    "Expression of Ideas",
    `The writer wants to combine: “The sample was small.” “The trend appeared in all three trials.”`,
    "Which combination is most effective?",
    [
      "The sample was small, the trend appeared in all three trials.",
      "Although the sample was small, the trend appeared in all three trials.",
      "The sample was small although.",
      "Trials three all trend the.",
    ],
    1,
    "A concessive combine keeps both ideas without a comma splice."
  ),
  item(
    "sat-auth-eoi-5",
    "Expression of Ideas",
    `Goal: make the tone more precise, less absolute.\nCurrent: “This method always works.”`,
    "Which revision best meets the goal?",
    [
      "This method always works in every universe.",
      "This method worked in the three conditions we tested.",
      "This method never works.",
      "Methods exist.",
    ],
    1,
    "Precision comes from bounding the claim to tested conditions."
  ),
  item(
    "sat-auth-eoi-6",
    "Expression of Ideas",
    `Lab notebooks should be dated on every page. Record raw values before you average them. My favorite movie is a space opera. Note which instrument you used, and draw a line through mistakes instead of erasing them.`,
    "Which sentence should be deleted because it is least relevant to the paragraph?",
    [
      "Date every page.",
      "Record raw values before you average them.",
      "My favorite movie is a space opera.",
      "Note which instrument you used.",
    ],
    2,
    "The movie sentence does not support a paragraph about lab-notebook habits."
  ),
  item(
    "sat-auth-sec-1",
    "Standard English Conventions",
    `The prototype completed twelve trials ___ only two required a manual reset.`,
    "Which choice completes the text so that it conforms to the conventions of Standard English?",
    [", and", ",", "; and", ": and"],
    0,
    "Two independent clauses join with a comma plus coordinating and."
  ),
  item(
    "sat-auth-sec-2",
    "Standard English Conventions",
    `The first model was faster. ___ the second model produced more consistent measurements.`,
    "Which choice completes the text so that it conforms to the conventions of Standard English?",
    ["For example", "Similarly", "However", "Therefore"],
    2,
    "The second sentence contrasts speed with consistency."
  ),
  item(
    "sat-auth-sec-3",
    "Standard English Conventions",
    `Each of the samples ___ labeled before storage.`,
    "Which choice completes the text so that it conforms to the conventions of Standard English?",
    ["were", "was", "are", "have been"],
    1,
    "Each is singular; past narrative fits was labeled."
  ),
  item(
    "sat-auth-sec-4",
    "Standard English Conventions",
    `The committee submitted its report ___ the deadline had already passed.`,
    "Which choice completes the text so that it conforms to the conventions of Standard English?",
    ["and", "but", "so", "for"],
    1,
    "But signals contrast between submitting and a missed deadline."
  ),
  item(
    "sat-auth-sec-5",
    "Standard English Conventions",
    `Students who review notes within a day tend to score higher ___ those who wait a week.`,
    "Which choice completes the text so that it conforms to the conventions of Standard English?",
    ["then", "than", "that", "them"],
    1,
    "Comparisons use than."
  ),

  item(
    "sat-auth-sec-6",
    "Standard English Conventions",
    `The report, along with a follow-up survey, ___ available in the appendix.`,
    "Which choice completes the text so that it conforms to the conventions of Standard English?",
    ["are", "is", "were being", "have"],
    1,
    "Along with does not make the subject plural; report is singular, so is."
  ),
  item(
    "sat-auth-alg-1",
    "Algebra",
    "",
    "If 3x + 7 = 22, what is the value of x?",
    ["3", "5", "7", "15"],
    1,
    "Subtract 7: 3x = 15. Divide by 3: x = 5."
  ),
  item(
    "sat-auth-alg-2",
    "Algebra",
    "",
    "A line passes through (0, 4) and has slope 2. Which equation represents the line?",
    ["y = 2x + 4", "y = 4x + 2", "y = x + 6", "y = 2x − 4"],
    0,
    "Slope-intercept form: m = 2 and b = 4."
  ),
  item(
    "sat-auth-alg-3",
    "Algebra",
    "A taxi charges a $3.50 flag drop plus $2.25 per mile.",
    "Which equation gives the cost C in dollars for m miles?",
    ["C = 3.50m + 2.25", "C = 2.25m + 3.50", "C = 5.75m", "C = 2.25 + 3.50m"],
    1,
    "The per-mile rate is the coefficient of m; the flag drop is the constant."
  ),
  item(
    "sat-auth-adv-1",
    "Advanced Math",
    "",
    "If f(x) = x² − 6x + 5, what is f(3)?",
    ["−4", "−2", "2", "5"],
    0,
    "f(3) = 9 − 18 + 5 = −4."
  ),
  item(
    "sat-auth-adv-2",
    "Advanced Math",
    "",
    "The graph of y = (x − 2)(x + 4) intersects the x-axis at which values of x?",
    ["−4 and 2", "2 and 4", "−2 and 4", "−4 and −2"],
    0,
    "Zeros occur where each factor is 0: x = 2 and x = −4."
  ),
  item(
    "sat-auth-adv-3",
    "Advanced Math",
    "",
    "If 2^(x+1) = 16, what is x?",
    ["2", "3", "4", "5"],
    1,
    "16 = 2^4, so x + 1 = 4 and x = 3."
  ),
  item(
    "sat-auth-psd-1",
    "Problem-Solving and Data Analysis",
    "A store sells 4 notebooks for $11. At that rate, what is the cost of 10 notebooks?",
    "Choose the correct cost.",
    ["$22.00", "$27.50", "$44.00", "$110.00"],
    1,
    "Unit price is 11/4 = $2.75; 10 × 2.75 = $27.50."
  ),
  item(
    "sat-auth-psd-2",
    "Problem-Solving and Data Analysis",
    "A sample of 200 students: 90 take a bus, 70 walk, 40 cycle. One student is chosen at random.",
    "What is the probability the student walks?",
    ["9/20", "7/20", "2/5", "1/5"],
    1,
    "70/200 = 7/20."
  ),
  item(
    "sat-auth-psd-3",
    "Problem-Solving and Data Analysis",
    "A recipe uses 3 cups of flour for 24 muffins. How many cups are needed for 40 muffins at the same ratio?",
    "Choose the correct amount.",
    ["4", "5", "6", "8"],
    1,
    "3/24 = x/40 → x = 5."
  ),
  item(
    "sat-auth-geo-1",
    "Geometry and Trigonometry",
    "",
    "A right triangle has legs 6 and 8. What is the hypotenuse?",
    ["7", "10", "12", "14"],
    1,
    "6² + 8² = 36 + 64 = 100; √100 = 10."
  ),
  item(
    "sat-auth-geo-2",
    "Geometry and Trigonometry",
    "",
    "A circle has radius 5. What is its area? (Use π.)",
    ["5π", "10π", "25π", "50π"],
    2,
    "A = πr² = 25π."
  ),
  item(
    "sat-auth-geo-3",
    "Geometry and Trigonometry",
    "",
    "In a right triangle, sin θ = 3/5. If the hypotenuse is 10, what is the side opposite θ?",
    ["3", "5", "6", "8"],
    2,
    "Opposite = 10 × (3/5) = 6."
  ),
  item(
    "sat-auth-geo-4",
    "Geometry and Trigonometry",
    "",
    "A circle has radius 6. What is its circumference? (Use π.)",
    ["6π", "12π", "36π", "18π"],
    1,
    "C = 2πr = 2π(6) = 12π."
  ),
  item(
    "sat-auth-sec-7",
    "Standard English Conventions",
    `The researchers’ claim—that the sample was too small to generalize—___ later confirmed by a larger trial.`,
    "Which choice completes the text so that it conforms to the conventions of Standard English?",
    ["were", "was", "are", "have"],
    1,
    "The subject is claim (singular); the dashes add an appositive, not a plural subject."
  ),
  item(
    "sat-auth-ii-7",
    "Information and Ideas",
    `A city posted hourly bike-share checkouts: 6 a.m. 12; 8 a.m. 48; 10 a.m. 21; noon 19. The 8 a.m. peak coincided with the start of two nearby high schools.`,
    "Which statement is best supported?",
    [
      "Checkouts were highest at noon.",
      "The 8 a.m. count was the highest shown and occurred at the same time schools started.",
      "Schools caused every checkout in the city.",
      "No one used bikes at 6 a.m.",
    ],
    1,
    "The data support a peak at 8 a.m. and a coincidence with school start times, not a citywide causal claim."
  ),
  item(
    "sat-auth-cs-7",
    "Craft and Structure",
    `As used in “The treaty was a scaffold, not a finished building,” scaffold most nearly means`,
    "Which choice completes the text with the most logical meaning?",
    [
      "a decorative statue",
      "a temporary supporting structure",
      "a legal punishment",
      "a type of tree",
    ],
    1,
    "The contrast with finished building supports a temporary support."
  ),
  item(
    "sat-auth-adv-4",
    "Advanced Math",
    "A rectangular garden’s length is 3 meters more than its width w. The area is 40 square meters.",
    "Which equation can be used to find w?",
    ["w(w + 3) = 40", "w + 3 = 40", "2w + 3 = 40", "w(w − 3) = 40"],
    0,
    "Length = w + 3, so area w(w + 3) = 40."
  ),
  item(
    "sat-auth-ii-8",
    "Information and Ideas",
    `A campus lab logged overnight freezer alarms for one week: Mon 0, Tue 2, Wed 1, Thu 0, Fri 4, Sat 1, Sun 0. The Friday spike happened during a scheduled defrost test that staff had posted on the door.`,
    "Which claim is best supported by the text?",
    [
      "The freezer failed every night.",
      "Friday had the most alarms, and the text links that day to a posted defrost test.",
      "Staff never check the freezer.",
      "Tuesday proves the thermostat is broken.",
    ],
    1,
    "The table peak is Friday; the only stated coincidence is the defrost test, not a diagnosis of every other day."
  ),
  item(
    "sat-auth-cs-8",
    "Craft and Structure",
    `The chemist called the leftover solvent a ghost in the data: it did not appear in the planned reactions, yet it kept shifting the baseline.`,
    "As used in the text, ghost most nearly means",
    [
      "a costume for a holiday",
      "an unplanned residue that still affects the measurements",
      "a confirmed product of the main reaction",
      "a person who left the lab",
    ],
    1,
    "The contrast with planned reactions and the baseline shift supports an unplanned residue, not a literal spirit."
  ),
  item(
    "sat-auth-eoi-7",
    "Expression of Ideas",
    `The first trial used a wooden ramp. The second trial used a metal ramp of the same length. Friction was the variable of interest. The class also ordered pizza after school.`,
    "Which sentence should be deleted because it is least relevant to the paragraph?",
    [
      "The first trial used a wooden ramp.",
      "The second trial used a metal ramp of the same length.",
      "Friction was the variable of interest.",
      "The class also ordered pizza after school.",
    ],
    3,
    "Pizza is off-topic in a controlled-friction comparison."
  ),
  item(
    "sat-auth-sec-8",
    "Standard English Conventions",
    `Neither the first sensor nor the backup ___ recording when the logger lost power.`,
    "Which choice completes the text so that it conforms to the conventions of Standard English?",
    ["were", "was", "are", "have been"],
    1,
    "Neither/nor with singular nouns takes was in this past narrative."
  ),
  item(
    "sat-auth-psd-4",
    "Problem-Solving and Data Analysis",
    `A club sold 40 tickets. Student tickets were $6 and guest tickets were $9. Total revenue was $285.`,
    "If s is the number of student tickets, which equation is correct?",
    ["6s + 9(40 − s) = 285", "6s + 9s = 285", "s + 40 = 285", "6(40) + 9s = 285"],
    0,
    "Guest tickets are 40 − s, so 6s + 9(40 − s) = 285."
  ),
  item(
    "sat-auth-geo-5",
    "Geometry and Trigonometry",
    `A right triangle has legs 5 cm and 12 cm.`,
    "What is the length of the hypotenuse?",
    ["13 cm", "17 cm", "10 cm", "60 cm"],
    0,
    "5-12-13 is a Pythagorean triple: √(25 + 144) = 13."
  ),
];
