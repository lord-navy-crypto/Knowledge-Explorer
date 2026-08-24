"""TOEFL Listening / Speaking / Vocabulary batch 2 (titles numbered beyond existing sets)."""
from __future__ import annotations

TIP_LISTEN = (
    "> **Tip:** Paste the script below into **Listening Replay** (browser TTS). "
    "Listen once without reading, then check the notes or answer key.\n\n"
)
TIP_SHADOW = (
    "**How to practice:** Play each line with the machine voice (ToeflSpeakShadow), "
    "then repeat immediately. Do not look at the text on the second pass if you can manage it.\n\n"
)


def _d(title: str, content: str, category: str, space: str) -> dict[str, str]:
    return {"title": title, "content": content, "category": category, "space": space}


def _car(n: int, topic: str, prompt: str, opts: dict[str, str], ans: str, why: str) -> dict[str, str]:
    body = (
        "# Listen and Choose a Response\n\n"
        f"{TIP_LISTEN}"
        "## Spoken prompt (for TTS)\n\n"
        f"{prompt}\n\n"
        "## Response options\n\n"
        f"**A.** {opts['A']}\n\n**B.** {opts['B']}\n\n**C.** {opts['C']}\n\n**D.** {opts['D']}\n\n"
        "## Answer key\n\n"
        f"**Correct answer:** {ans}  \n**Why:** {why}\n"
    )
    return _d(f"TOEFL Listening · Choose a Response {n:02d}: {topic}", body, "TOEFL Listening", "toefl-listening")


def _conv(n: int, topic: str, turns: list[tuple[str, str]], main: str, details: str, intent: str) -> dict[str, str]:
    dlg = "\n\n".join(f"{sp}: {tx}" for sp, tx in turns)
    body = (
        "# Listen to a Conversation\n\n"
        f"{TIP_LISTEN}"
        "## Dialogue script (one turn per line for TTS)\n\n"
        f"{dlg}\n\n"
        "## Comprehension notes\n\n"
        f"**Main idea:** {main}\n\n**Key details:** {details}\n\n**Speaker intent:** {intent}\n"
    )
    return _d(f"TOEFL Listening · Conversation {n:02d}: {topic}", body, "TOEFL Listening", "toefl-listening")


def _ann(n: int, topic: str, script: str, purpose: str, key: str, action: str) -> dict[str, str]:
    body = (
        "# Listen to an Announcement\n\n"
        f"{TIP_LISTEN}"
        "## Announcement script (for TTS)\n\n"
        f"{script}\n\n"
        "## Listening notes\n\n"
        f"**Purpose:** {purpose}\n\n**Key information:** {key}\n\n**Next action for listeners:** {action}\n"
    )
    return _d(f"TOEFL Listening · Announcement {n:02d}: {topic}", body, "TOEFL Listening", "toefl-listening")


def _talk(n: int, topic: str, disc: str, script: str, main: str, points: list[str]) -> dict[str, str]:
    wc = len(script.split())
    pts = "\n".join(f"{i}. {p}" for i, p in enumerate(points, 1))
    body = (
        "# Listen to an Academic Talk\n\n"
        f"{TIP_LISTEN}"
        f"**Discipline:** {disc}  \n**Approximate length:** {wc} words\n\n"
        "## Lecture script (for TTS)\n\n"
        f"{script}\n\n"
        "## Outline\n\n"
        f"**Main idea:** {main}\n\n**Three supporting points:**\n\n{pts}\n"
    )
    return _d(f"TOEFL Listening · Academic Talk {n:02d}: {topic}", body, "TOEFL Listening", "toefl-listening")


def _lar(n: int, topic: str, focus: str, lines: list[str]) -> dict[str, str]:
    body = (
        "# TOEFL Speaking · Listen and Repeat\n"
        f"**Topic:** {topic}\n\n{TIP_SHADOW}"
        f"**Pronunciation focus:** {focus}\n\n"
        "## Lines (paste into ToeflSpeakShadow — one sentence per line)\n"
        + "\n".join(lines)
        + "\n"
    )
    return _d(f"TOEFL Speaking · Listen and Repeat {n:02d}: {topic}", body, "TOEFL Speaking", "toefl-speaking")


def _interview(n: int, scenario: str, blurb: str, tip: str, qa: list[tuple[str, str]]) -> dict[str, str]:
    parts = [
        "# TOEFL Speaking · Take an Interview\n"
        f"**Scenario:** {scenario}\n\n{blurb}\n\n"
        "**Format tip:** Answer each question in about 45 seconds (~80–120 words). "
        "Speak in full sentences; use one concrete example per answer when possible.\n"
        f"**Fluency tip:** {tip}\n"
        "**Shadow tip:** Paste each model answer into **ToeflSpeakShadow** (one paragraph per line) "
        "to rehearse pacing before you record your own version.\n"
    ]
    for i, (q, a) in enumerate(qa, 1):
        parts.append(f"\n## Interviewer Question {i}\n{q}\n\n### Model spoken answer (~45s)\n{a}\n")
    return _d(
        f"TOEFL Speaking · Interview {n:02d}: {scenario}",
        "".join(parts),
        "TOEFL Speaking",
        "toefl-speaking",
    )


def _dial(n: int, topic: str, turns: list[str]) -> dict[str, str]:
    body = (
        "# TOEFL Speaking · Dialogue Shadow\n"
        f"**Campus conversation:** {topic}\n\n"
        "**Tip for ToeflSpeakShadow:** Paste only the A/B lines below (one turn per line). "
        "Play a line, shadow it immediately, then advance. Switch roles on the second pass.\n\n"
        "**Speaking goal:** Match thought groups and polite intonation; keep final consonants clear.\n\n"
        "## Dialogue (paste into ToeflSpeakShadow)\n"
        + "\n".join(turns)
        + "\n"
    )
    return _d(f"TOEFL Speaking · Dialogue Shadow {n:02d}: {topic}", body, "TOEFL Speaking", "toefl-speaking")


def _drill(n: int, topic: str, focus: str, variety: str, lines: list[str]) -> dict[str, str]:
    body = (
        "# TOEFL Speaking · Fluency Drill\n"
        f"**Drill:** {topic}\n\n"
        "**How to use:** Paste the drill lines into ToeflSpeakShadow. Play → shadow → "
        "increase speed slightly on pass two while keeping endings audible.\n\n"
        f"**Variety note:** {variety}\n\n**Focus:** {focus}\n\n"
        "## Drill lines (paste into ToeflSpeakShadow)\n"
        + "\n".join(lines)
        + "\n"
    )
    return _d(f"TOEFL Speaking · Fluency Drill {n:02d}: {topic}", body, "TOEFL Speaking", "toefl-speaking")


def _vocab(n: int, theme: str, words: list[tuple[str, str, str, str]]) -> dict[str, str]:
    entries = [
        f"### {w}\n\n- **Definition:** {d}\n- **Collocations:** {c}\n- **Example:** {e}\n"
        for w, d, c, e in words
    ]
    body = (
        f"# TOEFL Academic Vocabulary — {theme}\n\n"
        f"**Category:** TOEFL Vocabulary  \n**Words:** {len(words)}\n\n"
        + "\n".join(entries)
    )
    return _d(f"TOEFL Vocabulary · List {n:02d}: {theme}", body, "TOEFL Vocabulary", "vocabulary")


BATCH2_LS: list[dict[str, str]] = []

# --- Choose a Response 21–40 ---
BATCH2_LS.extend(
    [
        _car(
            21,
            "Lab Equipment Checkout",
            "Lab manager: The microscopes are available for checkout until five. Do you want to reserve one for tomorrow's section, or will you share with your partner?",
            {
                "A": "I'll reserve one for tomorrow afternoon.",
                "B": "The cafeteria has pizza today.",
                "C": "My major is undeclared.",
                "D": "Parking is free on Sundays.",
            },
            "A",
            "The manager offers reserve versus share; A reserves a microscope.",
        ),
        _car(
            22,
            "Counseling Appointment Reminder",
            "Counselor: Your wellness check-in is scheduled for Friday at noon. Would you like a reminder text the night before, or is your calendar enough?",
            {
                "A": "A reminder text would be helpful, please.",
                "B": "I collect stamps as a hobby.",
                "C": "The river freezes in January.",
                "D": "Who coaches the swim team?",
            },
            "A",
            "The counselor offers a reminder; A accepts the text.",
        ),
        _car(
            23,
            "Maker Space Orientation",
            "Staff: New makers must complete a fifteen-minute safety orientation before using the laser cutter. Can you stay now, or should I book you for tomorrow morning?",
            {
                "A": "I can stay now and finish the orientation.",
                "B": "My roommate prefers tea.",
                "C": "The museum opens at ten.",
                "D": "I already bought notebooks.",
            },
            "A",
            "Staff offer now versus tomorrow; A chooses to stay now.",
        ),
        _car(
            24,
            "Scholarship Essay Workshop",
            "Peer mentor: We're hosting a scholarship essay workshop tonight at seven in the writing center. Want me to save you a seat, or are you submitting without feedback?",
            {
                "A": "Please save me a seat—I'll be there at seven.",
                "B": "The fountain is under repair.",
                "C": "I dislike spicy food.",
                "D": "Graduation caps are black.",
            },
            "A",
            "The mentor offers a seat; A accepts.",
        ),
        _car(
            25,
            "Bike Share Lock Issue",
            "Support: Your bike-share lock won't release. I can unlock it remotely from here, or you can walk to the hub for a replacement bike. Which do you prefer?",
            {
                "A": "Please unlock it remotely if you can.",
                "B": "I wrote a poem last night.",
                "C": "The chemistry midterm is hard.",
                "D": "Does the lake allow fishing?",
            },
            "A",
            "Support offers remote unlock versus hub; A chooses remote unlock.",
        ),
        _car(
            26,
            "Language Exchange Signup",
            "Coordinator: Language exchange partners are matched every Monday. Should I put you on this week's list for Spanish practice, or wait until you finish finals?",
            {
                "A": "Add me to this week's list for Spanish.",
                "B": "The printer needs toner.",
                "C": "I lost my umbrella.",
                "D": "What time is sunrise?",
            },
            "A",
            "The coordinator asks list versus wait; A joins this week.",
        ),
        _car(
            27,
            "Quiet Carrel Booking",
            "Librarian: All quiet carrels are booked until three. There's an open table in the atrium, or you can join the wait list for a carrel. What works for you?",
            {
                "A": "I'll take the atrium table for now.",
                "B": "My cousin visits in May.",
                "C": "Soccer tryouts are Tuesday.",
                "D": "I prefer window seats on planes.",
            },
            "A",
            "The librarian offers atrium versus wait list; A takes the atrium.",
        ),
        _car(
            28,
            "Course Withdrawal Deadline",
            "Advisor: The withdrawal deadline is tomorrow at five. If you withdraw, it shows as a W; if you stay, you can still take the final. Have you decided?",
            {
                "A": "I'm going to stay and take the final.",
                "B": "The snack machine is empty.",
                "C": "Birds nest on the roof.",
                "D": "I need new headphones.",
            },
            "A",
            "The advisor presents withdraw versus stay; A chooses to stay.",
        ),
        _car(
            29,
            "Poster Printing Queue",
            "Print desk: Large posters take forty minutes. You can leave your file and pick it up after lunch, or wait here if you prefer. What would you like?",
            {
                "A": "I'll leave the file and pick it up after lunch.",
                "B": "The gym towel fee is two dollars.",
                "C": "I study astronomy.",
                "D": "Is there a jazz band?",
            },
            "A",
            "The desk offers leave-and-pick-up versus wait; A leaves the file.",
        ),
        _car(
            30,
            "Roommate Agreement Form",
            "RA: Housing needs your signed roommate agreement by Sunday. Can you submit it online tonight, or do you need a paper copy from my office?",
            {
                "A": "I'll submit it online tonight.",
                "B": "The clock tower chimes hourly.",
                "C": "I packed only summer clothes.",
                "D": "Who runs the radio station?",
            },
            "A",
            "The RA offers online versus paper; A chooses online.",
        ),
        _car(
            31,
            "Field Trip Permission",
            "Instructor: The geology field trip requires a signed liability form. Can you bring it Thursday, or do you need me to email a digital version now?",
            {
                "A": "Please email the digital version now.",
                "B": "My desk lamp flickered.",
                "C": "I like documentary films.",
                "D": "The bakery sells croissants.",
            },
            "A",
            "The instructor offers Thursday versus email now; A requests email.",
        ),
        _car(
            32,
            "Campus Job Interview Slot",
            "HR: We have interview slots at nine and at two tomorrow. Morning interviews run shorter; afternoon ones include a tour. Which slot do you want?",
            {
                "A": "I'll take the two o'clock slot with the tour.",
                "B": "Snow tires are expensive.",
                "C": "I water plants on Fridays.",
                "D": "The choir rehearses Mondays.",
            },
            "A",
            "HR offers nine versus two; A chooses two with the tour.",
        ),
        _car(
            33,
            "Missing Package Notice",
            "Mailroom: A package for your suite arrived damaged. We can refuse it and reorder, or you can inspect it and keep what is usable. Your choice?",
            {
                "A": "I'll inspect it and keep anything usable.",
                "B": "The lake trail is muddy.",
                "C": "I collect vinyl records.",
                "D": "Who teaches ceramics?",
            },
            "A",
            "The mailroom offers refuse versus inspect; A inspects.",
        ),
        _car(
            34,
            "Allergy Menu Request",
            "Dining staff: We can print an allergen chart for tonight's menu, or you can scan the QR code at each station. Do you want a printed copy?",
            {
                "A": "Yes, a printed allergen chart would help.",
                "B": "My laptop needs an update.",
                "C": "The bridge is closed.",
                "D": "I applied for housing.",
            },
            "A",
            "Staff offer print versus QR; A wants a printed chart.",
        ),
        _car(
            35,
            "Peer Review Swap",
            "Classmate: For the draft workshop, we need partners. Want to swap papers with me, or are you already paired with someone?",
            {
                "A": "I'm free—let's swap papers.",
                "B": "The elevator smells like paint.",
                "C": "I ordered new shoes.",
                "D": "Is calculus curved?",
            },
            "A",
            "The classmate offers pairing; A accepts.",
        ),
        _car(
            36,
            "Late Bus Replacement",
            "Dispatcher: The ten-thirty shuttle is canceled. A van will leave at ten-forty-five from the same stop, or you can use the downtown city bus. What will you do?",
            {
                "A": "I'll wait for the ten-forty-five van.",
                "B": "My highlighter dried out.",
                "C": "I prefer aisle seats.",
                "D": "The statue was cleaned yesterday.",
            },
            "A",
            "The dispatcher offers van versus city bus; A waits for the van.",
        ),
        _car(
            37,
            "Instrument Practice Room",
            "Music office: Practice rooms are first-come after five. I can put you on the reservation list for a Saturday morning slot if you want a guaranteed time.",
            {
                "A": "Please put me on the Saturday reservation list.",
                "B": "I finished my laundry.",
                "C": "The pond has ducks.",
                "D": "Who grades lab reports?",
            },
            "A",
            "The office offers a Saturday reservation; A accepts.",
        ),
        _car(
            38,
            "Volunteer Shift Coverage",
            "Coordinator: We're short one volunteer for Saturday's campus cleanup. Can you cover noon to three, or should I keep asking the list?",
            {
                "A": "I can cover noon to three on Saturday.",
                "B": "My charger is missing.",
                "C": "I dislike early alarms.",
                "D": "The atrium has new chairs.",
            },
            "A",
            "The coordinator needs coverage; A volunteers for the shift.",
        ),
        _car(
            39,
            "Exam Conflict Form",
            "Registrar: You have two finals at the same hour. Submit an exam conflict form by Wednesday, or speak with both instructors yourself. Which path do you prefer?",
            {
                "A": "I'll submit the conflict form by Wednesday.",
                "B": "The vending machine jammed.",
                "C": "I watched a documentary.",
                "D": "Is the roof garden open?",
            },
            "A",
            "The registrar offers form versus self-negotiate; A chooses the form.",
        ),
        _car(
            40,
            "Lost-and-Found Claim",
            "Security: We found a blue backpack matching your description. Can you describe one unique item inside to claim it, or do you want to look through the photos first?",
            {
                "A": "There's a red keychain with my initials inside.",
                "B": "I need more sleep.",
                "C": "The plaza hosts markets.",
                "D": "Who waters the plants?",
            },
            "A",
            "Security asks for a unique identifier; A describes the keychain.",
        ),
    ]
)

# --- Conversation 21–40 ---
BATCH2_LS.extend(
    [
        _conv(
            21,
            "Career Fair Résumé Check",
            [
                ("Student", "Could you glance at my résumé before the career fair?"),
                ("Career coach", "Sure. What's the target role?"),
                ("Student", "A summer analyst internship at a local nonprofit."),
                ("Career coach", "Lead with impact numbers, not only duties."),
                ("Student", "I tutored twelve students last term—should that come first?"),
                ("Career coach", "Yes, and quantify improvement if you have it."),
                ("Student", "Average quiz scores rose about fifteen percent."),
                ("Career coach", "Perfect. Put that in the first bullet."),
                ("Student", "Is a one-page limit strict for undergraduates?"),
                ("Career coach", "Yes—cut the older high-school section."),
                ("Student", "I'll revise tonight and bring printed copies."),
                ("Career coach", "Great. Stop by tomorrow if you want a two-minute final check."),
            ],
            "The student seeks résumé feedback before a nonprofit internship fair.",
            "Lead with impact; quantify tutoring (+15%); one page; drop high-school section; optional final check.",
            "Student: improve materials. Coach: prioritize measurable results.",
        ),
        _conv(
            22,
            "Writing Center Thesis Focus",
            [
                ("Student", "My thesis statement keeps getting called too broad."),
                ("Tutor", "What's your current version?"),
                ("Student", "Social media affects teenagers' mental health."),
                ("Tutor", "Try narrowing to one platform and one outcome."),
                ("Student", "Maybe sleep disruption from late-night scrolling?"),
                ("Tutor", "Stronger. Add a clear claim about mechanism or policy."),
                ("Student", "Late-night use of short-video apps reduces sleep quality among first-year students."),
                ("Tutor", "Excellent scope. Now preview your evidence types."),
                ("Student", "Survey data and two sleep-lab studies."),
                ("Tutor", "Mention those briefly in the thesis or next sentence."),
                ("Student", "I'll revise and send a paragraph draft by Thursday."),
                ("Tutor", "I'll leave comments within a day of receiving it."),
            ],
            "Narrowing an overly broad thesis with a writing tutor.",
            "From a broad social-media claim to short-video apps, sleep, and first-years; survey plus sleep-lab evidence; Thursday draft.",
            "Student: focus the claim. Tutor: constrain scope and preview evidence.",
        ),
        _conv(
            23,
            "International Office Travel Letter",
            [
                ("Student", "I need a travel letter for winter break flights home."),
                ("Advisor", "Are you traveling on an F-1 visa?"),
                ("Student", "Yes. I'll reenter in January before classes."),
                ("Advisor", "Bring your I-20, passport, and enrollment verification."),
                ("Student", "How many business days does signing take?"),
                ("Advisor", "Usually three if documents are complete."),
                ("Student", "Can I request an expedited signature? My flight is in ten days."),
                ("Advisor", "We can mark it urgent if you submit today before noon."),
                ("Student", "I'll upload everything this morning."),
                ("Advisor", "After signing, keep the letter with your travel documents."),
                ("Student", "Should I also update my U.S. address in the portal?"),
                ("Advisor", "Yes—do that before you leave campus."),
            ],
            "Getting a visa travel letter before winter break.",
            "F-1; I-20, passport, and enrollment proof; about three days; expedite if submitted before noon; update address.",
            "Student: meet the flight timeline. Advisor: explain documents and the urgency path.",
        ),
        _conv(
            24,
            "Lab Notebook Feedback",
            [
                ("Student", "Professor, my lab notebook lost points for incomplete observations."),
                ("Professor", "Which experiment?"),
                ("Student", "The titration from week four."),
                ("Professor", "You recorded final volumes but not color-change timing."),
                ("Student", "I thought the endpoint volume was enough."),
                ("Professor", "Process notes help when results look unexpected later."),
                ("Student", "Should I rewrite that entry or improve future ones?"),
                ("Professor", "Improve future entries; rewriting won't change past grades."),
                ("Student", "Is a timestamp for each major step required?"),
                ("Professor", "Yes—approximate minutes are fine."),
                ("Student", "I'll add a checklist to my notebook cover."),
                ("Professor", "Good plan. Bring it to next lab for a quick glance."),
            ],
            "Understanding lab-notebook grading after a titration write-up.",
            "Missing color-change timing; process notes matter; no rewrite for the grade; timestamps; checklist.",
            "Student: fix the method. Professor: clarify expectations going forward.",
        ),
        _conv(
            25,
            "Housing Lottery Explained",
            [
                ("Student", "How does the housing lottery priority work?"),
                ("Housing officer", "Priority is mainly by earned credits, then random within bands."),
                ("Student", "Do club leadership roles add points?"),
                ("Housing officer", "Not for general housing—only RA roles have separate housing."),
                ("Student", "When do rising juniors select rooms?"),
                ("Housing officer", "Their window opens April twelfth at nine a.m."),
                ("Student", "Can I room with a friend in a lower credit band?"),
                ("Housing officer", "You select together using the higher priority number."),
                ("Student", "What if our preferred suite is gone?"),
                ("Housing officer", "Have two backup buildings ranked in the portal."),
                ("Student", "I'll talk with my roommate tonight about backups."),
                ("Housing officer", "Save preferences before the window; changes freeze when it opens."),
            ],
            "Understanding housing lottery priority and roommate pairing.",
            "Credits then random; no club points; juniors April 12 at 9 a.m.; use higher priority; rank backups.",
            "Student: plan selection. Officer: explain rules and timing.",
        ),
        _conv(
            26,
            "Research Poster Printing Specs",
            [
                ("Student", "What size should the research symposium poster be?"),
                ("Coordinator", "Thirty-six by forty-eight inches, landscape."),
                ("Student", "Matte or glossy paper?"),
                ("Coordinator", "Matte reduces glare under the hall lights."),
                ("Student", "Is there a campus printer that handles that size?"),
                ("Coordinator", "Yes—the media lab on floor two; book a slot."),
                ("Student", "How early should I print to avoid the rush?"),
                ("Coordinator", "At least forty-eight hours before the event."),
                ("Student", "Do you check file resolution?"),
                ("Coordinator", "Three hundred dpi minimum for images."),
                ("Student", "I'll export from the template and book a slot today."),
                ("Coordinator", "Email me if the template link expires."),
            ],
            "Preparing a symposium poster to printing specifications.",
            "36 by 48 landscape; matte; media lab floor two; print at least 48 hours early; 300 dpi.",
            "Student: meet print standards. Coordinator: specs and logistics.",
        ),
        _conv(
            27,
            "Disability Services Note-Taking",
            [
                ("Student", "I was approved for a note-taking accommodation."),
                ("Specialist", "Do you prefer peer notes or an audio recording option?"),
                ("Student", "Peer notes, if a classmate in each lecture can share."),
                ("Specialist", "We'll recruit volunteers and send encrypted PDFs."),
                ("Student", "How quickly do notes usually arrive?"),
                ("Specialist", "Within twenty-four hours of the class meeting."),
                ("Student", "What if a volunteer misses a week?"),
                ("Specialist", "Message us the same day; we assign a backup."),
                ("Student", "Are slides still my responsibility to download?"),
                ("Specialist", "Yes—notes supplement slides, they don't replace them."),
                ("Student", "Understood. I'll confirm my course list in the portal."),
                ("Specialist", "Do that by Friday so recruiting can start."),
            ],
            "Setting up peer note-taking after accommodation approval.",
            "Peer notes versus audio; encrypted PDFs; within 24 hours; backup if missed; slides still required; confirm by Friday.",
            "Student: activate support. Specialist: explain the workflow.",
        ),
        _conv(
            28,
            "Sustainability Office Compost Pickup",
            [
                ("Student", "Our suite wants to join the compost pickup pilot."),
                ("Staff", "You need a lidded caddy and weekly hallway drop-off."),
                ("Student", "What foods are banned from the caddy?"),
                ("Staff", "No liquids, oils, or compostable plastics in this pilot."),
                ("Student", "Which day is hallway pickup?"),
                ("Staff", "Wednesdays before nine a.m."),
                ("Student", "Is there a training session?"),
                ("Staff", "A ten-minute video quiz unlocks your building code."),
                ("Student", "Can all four roommates share one caddy?"),
                ("Staff", "Yes—one caddy per suite is the design."),
                ("Student", "We'll watch the video tonight."),
                ("Staff", "Great. Email us if the hallway bin is full."),
            ],
            "Joining a residence-hall compost pilot program.",
            "Lidded caddy; no liquids, oils, or compostable plastics; Wednesday before 9; video quiz; one caddy per suite.",
            "Student: start composting. Staff: rules and access.",
        ),
        _conv(
            29,
            "Orchestra Audition Logistics",
            [
                ("Student", "I'd like to audition for the campus orchestra."),
                ("Director", "Auditions are next Monday in the recital hall."),
                ("Student", "Do I need an accompanist?"),
                ("Director", "For strings, a pianist is optional but helpful."),
                ("Student", "What should I prepare?"),
                ("Director", "Two contrasting excerpts and a short scale set."),
                ("Student", "How long is each audition slot?"),
                ("Director", "Eight minutes including setup."),
                ("Student", "When are results posted?"),
                ("Director", "Wednesday evening on the ensemble board."),
                ("Student", "I'll book a practice room this weekend."),
                ("Director", "Sign up for a time slot online by Sunday noon."),
            ],
            "Preparing for a campus orchestra audition.",
            "Monday recital hall; accompanist optional for strings; two excerpts and scales; eight minutes; results Wednesday; signup by Sunday noon.",
            "Student: prepare materials. Director: logistics and expectations.",
        ),
        _conv(
            30,
            "Parking Appeal After Ticket",
            [
                ("Student", "I received a ticket for parking in a faculty lot by mistake."),
                ("Officer", "Was the signage visible from your spot?"),
                ("Student", "There was a sign, but a truck blocked it when I arrived."),
                ("Officer", "You can appeal online within seven days with photos."),
                ("Student", "Do photos from after the ticket still count?"),
                ("Officer", "Yes, if they show the obstructed sightline."),
                ("Student", "How long do appeals take?"),
                ("Officer", "About ten business days; payment pauses during review."),
                ("Student", "If denied, can I set up a payment plan?"),
                ("Officer", "Yes—through the student account portal."),
                ("Student", "I'll submit the appeal tonight with photos."),
                ("Officer", "Include your ticket number in the subject line."),
            ],
            "Appealing a parking ticket due to blocked signage.",
            "Appeal in seven days with photos; later photos OK; about ten business days; payment paused; payment plan if denied.",
            "Student: seek a waiver. Officer: explain the appeal process.",
        ),
        _conv(
            31,
            "Chem Stockroom Reagent Request",
            [
                ("Student", "I need additional sodium chloride for a remake lab."),
                ("Stockroom", "Do you have your teaching assistant's approval code?"),
                ("Student", "Yes—here it is on the form."),
                ("Stockroom", "Quantity is limited to fifty grams per remake."),
                ("Student", "Is that enough for two titration trials?"),
                ("Stockroom", "Usually yes if you measure carefully."),
                ("Student", "Can I pick it up after four today?"),
                ("Stockroom", "We close at four—come by three-thirty."),
                ("Student", "Understood. Do I return unused reagent?"),
                ("Stockroom", "Return sealed portions only; never pour back opened stock."),
                ("Student", "I'll arrive at three-thirty."),
                ("Stockroom", "Bring your goggles even for pickup."),
            ],
            "Requesting remake-lab reagent from the chemistry stockroom.",
            "TA approval code; 50 gram limit; close at 4 so arrive at 3:30; return sealed only; bring goggles.",
            "Student: obtain sodium chloride. Stockroom: enforce limits and safety.",
        ),
        _conv(
            32,
            "Study Abroad Credit Transfer",
            [
                ("Student", "Will my study-abroad literature course count toward my major?"),
                ("Advisor", "Only if the syllabus matches a pre-approved equivalent."),
                ("Student", "I have the syllabus in English translation."),
                ("Advisor", "Submit it with the transfer petition form."),
                ("Student", "How many credits usually transfer for a semester abroad?"),
                ("Advisor", "Twelve to fifteen, depending on contact hours."),
                ("Student", "Does a pass/fail grade abroad convert here?"),
                ("Advisor", "Major courses need letter grades to count in the major GPA."),
                ("Student", "Then I should choose the graded option abroad."),
                ("Advisor", "Yes—confirm that before the add deadline there."),
                ("Student", "I'll file the petition this week."),
                ("Advisor", "Allow two weeks for faculty review."),
            ],
            "Checking whether abroad coursework will satisfy major requirements.",
            "Pre-approved equivalent; petition plus syllabus; 12–15 credits; letter grades for major GPA; two-week review.",
            "Student: protect major progress. Advisor: clarify transfer rules.",
        ),
        _conv(
            33,
            "Clinic Appointment for Vaccination",
            [
                ("Student", "I need an influenza vaccination before clinical rotations."),
                ("Nurse", "We have walk-in hours tomorrow from nine to noon."),
                ("Student", "Do I need to bring my immunization record?"),
                ("Nurse", "Yes, and your student ID."),
                ("Student", "Is there a fee for insured students?"),
                ("Nurse", "Most campus plans cover it fully."),
                ("Student", "How long should I wait after the shot before lab work?"),
                ("Nurse", "Fifteen minutes on site for monitoring."),
                ("Student", "Can I get a signed form for my program?"),
                ("Nurse", "We'll print verification before you leave."),
                ("Student", "I'll come at nine when doors open."),
                ("Nurse", "Eat a light breakfast so you feel steady."),
            ],
            "Arranging a required flu shot before clinical rotations.",
            "Walk-in 9–noon; bring record and ID; usually covered; 15-minute wait; printed verification.",
            "Student: meet a program requirement. Nurse: explain visit steps.",
        ),
        _conv(
            34,
            "Maker Lab 3D Print Queue",
            [
                ("Student", "How long is the wait for a three-hour print job?"),
                ("Technician", "Right now about two days for standard filament."),
                ("Student", "Can I submit overnight for a morning pickup?"),
                ("Technician", "Yes—upload before midnight for next-day start."),
                ("Student", "What file format do you need?"),
                ("Technician", "STL only, with wall thickness at least two millimeters."),
                ("Student", "Is support material removed for me?"),
                ("Technician", "Basic cleanup is included; delicate sanding is DIY."),
                ("Student", "I'll upload tonight and label the job with my course code."),
                ("Technician", "Add your phone number in case the print fails."),
                ("Student", "Done. Thanks for the tips."),
                ("Technician", "Check the dashboard tomorrow afternoon for status."),
            ],
            "Submitting a 3D print job and understanding queue rules.",
            "About a two-day wait; upload before midnight; STL; at least 2 mm walls; basic cleanup; phone for failures.",
            "Student: print a part on time. Technician: queue and file requirements.",
        ),
        _conv(
            35,
            "Debate Tournament Travel",
            [
                ("Student", "Is travel funding available for the regional debate tournament?"),
                ("Coach", "Yes, if you compete in at least two preliminary rounds."),
                ("Student", "Do we book our own hotel?"),
                ("Coach", "The team books a block; you pay a fifty-dollar deposit."),
                ("Student", "When is the deposit due?"),
                ("Coach", "Friday at noon through the club portal."),
                ("Student", "What if I have a Friday midterm?"),
                ("Coach", "Travel leaves at four; schedule the midterm earlier if possible."),
                ("Student", "I'll email my professor about an earlier slot."),
                ("Coach", "CC me so I can confirm team travel need."),
                ("Student", "Should I prepare both affirmative and negative cases?"),
                ("Coach", "Yes—pairings can flip overnight."),
            ],
            "Arranging funded travel for a debate tournament.",
            "Funding if at least two prelims; team hotel plus $50 deposit by Friday noon; leave at 4 p.m.; prep both sides.",
            "Student: join travel. Coach: funding and logistics.",
        ),
        _conv(
            36,
            "Library Digitization Request",
            [
                ("Student", "Can rare maps be digitized for a history paper?"),
                ("Archivist", "Yes, if they are not too fragile and you need details."),
                ("Student", "I need a high-resolution crop of the harbor inset."),
                ("Archivist", "Submit a digitization form with page and figure notes."),
                ("Student", "How long does scanning usually take?"),
                ("Archivist", "Five business days for standard requests."),
                ("Student", "May I photograph with my phone instead?"),
                ("Archivist", "No flash, and only if staff approve the item's condition."),
                ("Student", "I'll file the form and wait for the scan."),
                ("Archivist", "We'll email a download link to your campus account."),
                ("Student", "Is citation guidance included?"),
                ("Archivist", "Yes—use the preferred citation on the item record."),
            ],
            "Requesting a digital scan from special collections.",
            "Form with figure notes; about five business days; phone photo only if approved, no flash; email link; use preferred citation.",
            "Student: obtain map detail. Archivist: protect materials while enabling research.",
        ),
        _conv(
            37,
            "Peer Tutoring Schedule Swap",
            [
                ("Student", "I can't make my Thursday tutoring shift this week."),
                ("Coordinator", "Can you trade with another tutor or find a substitute?"),
                ("Student", "Maya said she can cover if I take her Monday hour."),
                ("Coordinator", "That works—update the shared calendar today."),
                ("Student", "Do I need to message students who booked Thursday?"),
                ("Coordinator", "Yes, and copy the tutoring email alias."),
                ("Student", "What if a drop-in arrives expecting me?"),
                ("Coordinator", "The front desk will redirect using the calendar."),
                ("Student", "I'll send notices within the hour."),
                ("Coordinator", "Thanks—reliability keeps the center trustworthy."),
                ("Student", "Should I still log hours after the swap?"),
                ("Coordinator", "Log the hours you actually work, not the original slots."),
            ],
            "Swapping a tutoring shift while protecting booked students.",
            "Trade with Maya; update calendar; notify booked students and alias; desk redirects; log actual hours.",
            "Student: cover a conflict. Coordinator: keep service continuous.",
        ),
        _conv(
            38,
            "Food Pantry First Visit",
            [
                ("Student", "Is the campus food pantry open to all students?"),
                ("Volunteer", "Yes—bring your ID; no income paperwork is required."),
                ("Student", "How much can I take per visit?"),
                ("Volunteer", "Guidelines are posted; usually a few days of staples."),
                ("Student", "Are there options for gluten-free items?"),
                ("Volunteer", "We keep a labeled shelf when donations allow."),
                ("Student", "What are today's hours?"),
                ("Volunteer", "Two to six p.m., and Saturday eleven to one."),
                ("Student", "Can I donate unused meal swipes somehow?"),
                ("Volunteer", "There's a swipe-donation drive each exam week."),
                ("Student", "I'll stop by after class today."),
                ("Volunteer", "Reusable bags help if you have one."),
            ],
            "Learning how to use the campus food pantry.",
            "ID only; posted limits; gluten-free shelf when available; hours 2–6 and Saturday 11–1; swipe drive on exam weeks.",
            "Student: access food support. Volunteer: explain norms.",
        ),
        _conv(
            39,
            "Senior Thesis Advisor Match",
            [
                ("Student", "How do I request a senior thesis advisor?"),
                ("Chair", "Browse faculty profiles, then submit ranked preferences."),
                ("Student", "Do professors see who ranked them first?"),
                ("Chair", "Yes—honest ranking helps matching."),
                ("Student", "What if my first choice is on leave?"),
                ("Chair", "List a second and third in the same subfield."),
                ("Student", "Is a proposal required with the form?"),
                ("Chair", "A one-page abstract is enough at this stage."),
                ("Student", "When are matches announced?"),
                ("Chair", "In three weeks, before registration."),
                ("Student", "I'll submit by the Friday deadline."),
                ("Chair", "Ask questions on the form if methods training is needed."),
            ],
            "Requesting a faculty advisor for a senior thesis.",
            "Ranked preferences visible; backups if leave; one-page abstract; matches in three weeks; note methods needs.",
            "Student: secure an advisor. Chair: explain matching.",
        ),
        _conv(
            40,
            "Emergency Alert Opt-In",
            [
                ("Student", "I'm not receiving campus emergency texts."),
                ("IT staff", "Check whether your mobile number is verified in the portal."),
                ("Student", "It shows pending verification."),
                ("IT staff", "Request a new code; it expires after ten minutes."),
                ("Student", "Will this also cover weather closures?"),
                ("IT staff", "Yes—weather, safety, and major IT outages."),
                ("Student", "Can I add a parent as a secondary contact?"),
                ("IT staff", "Secondary contacts are optional under 'family alerts.'"),
                ("Student", "I'll verify my number now."),
                ("IT staff", "After verifying, send yourself a test alert."),
                ("Student", "Is there a quiet-hours mute?"),
                ("IT staff", "Emergency alerts cannot be muted; only event newsletters can."),
            ],
            "Fixing campus emergency alert registration.",
            "Verify mobile; code expires in 10 minutes; covers weather, safety, and IT; optional family alerts; emergencies cannot mute.",
            "Student: receive alerts. IT: walk through verification.",
        ),
    ]
)

# --- Announcement 16–30 ---
BATCH2_LS.extend(
    [
        _ann(
            16,
            "North Gym Temporary Closure",
            "Attention students. The North Gym will close from Monday through Wednesday for floor refinishing. Group fitness classes move to the South Studio at the same times. Locker rooms remain open, but please use temporary shoe covers near the gym doors when floors are curing on Thursday morning. Membership holds are not required for this short closure. Updates will post in the Recreation app. Thank you for planning workouts around the maintenance window.",
            "Notify students of a North Gym closure and class relocation.",
            "Closed Monday through Wednesday; classes move to the South Studio; shoe covers Thursday morning; no membership hold; app updates.",
            "Use the South Studio; avoid wet floors Thursday; check the app.",
        ),
        _ann(
            17,
            "Research Symposium Registration Opens",
            "This is the Undergraduate Research Office. Registration for the spring research symposium opens tomorrow at nine a.m. Poster and oral presentation slots are limited. Abstracts are due two weeks from Friday and must include a faculty mentor name. Students may present completed work or work in progress labeled as preliminary. A template and rubric are available on the symposium website. Early registration is recommended because popular time blocks fill quickly.",
            "Open symposium registration and state abstract requirements.",
            "Opens tomorrow at 9 a.m.; abstracts due in two weeks on Friday; mentor name required; template and rubric online.",
            "Register early; prepare an abstract with a mentor.",
        ),
        _ann(
            18,
            "East Hall Hot Water Interruption",
            "Residents of East Hall, please note a planned hot water interruption tomorrow from one to four p.m. while valves are replaced. Cold water will remain available. Consider showering before one or using West Hall's facilities with your ID. Laundry machines should not be started after noon tomorrow. We apologize for the inconvenience and expect full service by late afternoon.",
            "Warn East Hall of hot-water maintenance.",
            "Tomorrow 1–4 p.m.; cold water available; West Hall showers with ID; no laundry after noon.",
            "Shower early or use West Hall; delay laundry.",
        ),
        _ann(
            19,
            "Career Closet Pop-Up",
            "Student Success announces a Career Closet pop-up this Thursday in the Student Center ballroom from eleven to three. Borrow professional clothing for interviews and career fairs at no cost. Items must be returned within seven days, dry-cleaned if needed using the provided voucher. Appointments are encouraged but walk-ins are welcome while supplies last. Volunteers will help with basic fitting. Bring your student ID to check out garments.",
            "Advertise a free professional clothing borrow event.",
            "Thursday 11–3 in the ballroom; free borrow; return in seven days; cleaning voucher; ID required.",
            "Visit with ID; book an appointment if possible.",
        ),
        _ann(
            20,
            "Final Exam Quiet Hours Campus-Wide",
            "Beginning Sunday at eight p.m., campus-wide quiet hours for final exams will be enforced in all residence halls and nearby academic courtyards until the last exam Friday. Courtesy hours still apply in libraries with existing quiet floors. Outdoor amplified sound permits are suspended during this period. Report persistent disturbances to Campus Safety using the non-emergency line. Thank you for protecting a focused study environment for everyone.",
            "Announce exam-week quiet hours.",
            "Sunday 8 p.m. through the last exam Friday; halls and courtyards; library rules unchanged; no amplified permits; non-emergency line.",
            "Keep volume down; report issues appropriately.",
        ),
        _ann(
            21,
            "Bike Registration Drive",
            "Campus Safety will host a free bike registration drive Friday from ten to two near the bookstore plaza. Engraving and QR sticker registration help recover stolen bicycles. Bring your bike and student ID. Helmets will be sold at cost while supplies last. Registration takes about ten minutes per bike. Previously registered bikes can update contact information on site.",
            "Promote a free bike registration event.",
            "Friday 10–2 by the bookstore; engraving and QR; bring bike and ID; helmets at cost; about ten minutes.",
            "Bring a bike and ID; update old registrations.",
        ),
        _ann(
            22,
            "Language Placement Retest Window",
            "The Department of Modern Languages announces a placement retest window next Tuesday and Wednesday for students who believe their initial score does not reflect current ability. Sign up in the department office by Monday at four. Retests use a different form and scores are final. Results post within three business days and may adjust fall course registration if seats remain.",
            "Explain a language placement retest opportunity.",
            "Tuesday–Wednesday retests; signup Monday by 4; different form; final scores; results in three days; may adjust registration.",
            "Sign up by Monday if retesting.",
        ),
        _ann(
            23,
            "Storm Drain Construction Near Science Quad",
            "Facilities Management advises that storm drain construction will begin Monday on the path between the Science Quad and the parking garage. Expect fenced areas and a temporary pedestrian detour marked with orange signs for approximately two weeks. Bicycle traffic should dismount through the detour. Accessible routes remain open via the covered walkway. Noise will be highest before noon. Thank you for following detour signs.",
            "Warn about construction detours near the Science Quad.",
            "Starts Monday for about two weeks; orange detour; bikes dismount; covered walkway is accessible; loud before noon.",
            "Follow detours; allow extra walking time.",
        ),
        _ann(
            24,
            "Student Health Portal Password Reset",
            "Student Health Services requires all students to reset health-portal passwords before Friday due to a system upgrade. Use the 'forgot password' link and a code sent to your campus email. After resetting, review your immunization record for completeness. Clinical programs may block registration if records are incomplete. Technical help is available at the portal help desk in the health center lobby weekdays nine to four.",
            "Require a health-portal password reset before an upgrade.",
            "Reset by Friday; code via campus email; review immunizations; help desk 9–4 weekdays.",
            "Reset the password; check immunization completeness.",
        ),
        _ann(
            25,
            "Open Mic Night Guidelines",
            "The Campus Arts Collective invites performers to Friday's open mic night at eight in the coffeehouse. Sign-ups begin at seven-thirty; slots are five minutes each. Content should follow community standards posted at the door. Acoustic instruments are welcome; drums require advance approval. Audience members please keep aisles clear. Free admission with student ID.",
            "Invite performers and set open-mic rules.",
            "Friday 8 p.m.; signup 7:30; five-minute slots; standards posted; drums need approval; free with ID.",
            "Arrive early to sign up; follow content rules.",
        ),
        _ann(
            26,
            "Printer Credit Midterm Boost",
            "Information Technology announces a one-time printer credit boost of ten dollars for all active students, applied tonight at midnight to support midterm printing. Credits appear under Print Services in the portal. Color printing still deducts at the standard rate. Unused boost credits expire at the end of the term. No action is required to receive the boost.",
            "Notify students of an automatic midterm print-credit boost.",
            "Ten dollars at midnight; portal Print Services; color at the standard rate; expires end of term; automatic.",
            "No action needed; monitor the balance.",
        ),
        _ann(
            27,
            "Blood Donor Bus Location Change",
            "This week's blood donor bus will park beside the field house instead of the student center due to plaza paving. Appointments remain valid; walk-ins welcome if supply allows. Bring photo ID and eat beforehand. The bus operates Tuesday from ten a.m. to four p.m. Volunteers directing donors will wear yellow vests near the field house entrance.",
            "Relocate the blood drive bus for the week.",
            "Field house, not student center; Tuesday 10–4; appointments valid; ID and eat; yellow-vest guides.",
            "Go to the field house; keep the appointment.",
        ),
        _ann(
            28,
            "Graduate Fair Tabling Lottery",
            "Clubs seeking tables at Graduate and Professional School Fair must enter the tabling lottery by Thursday at five p.m. Selected clubs will be notified Friday and must confirm within twenty-four hours. Tables include one power strip; extra chairs require a facilities request. Fair day is March third in the arena concourse. Late requests cannot be accommodated.",
            "Explain the club tabling lottery for the graduate fair.",
            "Lottery entry by Thursday 5; notify Friday; confirm in 24 hours; power included; fair March 3.",
            "Enter the lottery by Thursday; confirm if selected.",
        ),
        _ann(
            29,
            "Night Ride Escort Hours Extended",
            "Campus Safety is extending Night Ride escort hours during finals week. Service will run until two a.m. Sunday through Thursday nights. Request a ride through the safety app or by calling the non-emergency number. Wait in well-lit posted locations. Escorts are for campus destinations only. Please cancel promptly if plans change so drivers can help other students.",
            "Extend Night Ride hours for finals.",
            "Until 2 a.m. Sunday–Thursday during finals week; app or phone; lit wait points; campus only; cancel if unused.",
            "Request rides as needed; cancel unused requests.",
        ),
        _ann(
            30,
            "Art Building Kiln Schedule Notice",
            "Ceramic students: kiln firings for final projects must be scheduled online before next Monday. Bisque and glaze loads have separate calendars. Unscheduled work left in the studio may not be fired before critique. Studio monitors will lock clay storage at ten p.m. this week. Questions about cone settings should go to the technician during afternoon hours.",
            "Require kiln scheduling before finals critiques.",
            "Schedule by next Monday; separate bisque and glaze calendars; storage locks at 10 p.m.; technician for cone questions.",
            "Book kiln slots; do not leave unscheduled work.",
        ),
    ]
)

# --- Academic Talk 21–40 ---
_CUE = (
    " As you review, notice how the speaker signals transitions with phrases like 'for example,' "
    "'in contrast,' and 'for your assignment.' Successful TOEFL listeners track those cues to "
    "anticipate definitions, evidence, and tasks."
)

BATCH2_LS.extend(
    [
        _talk(
            21,
            "Tide Pools and Zonation",
            "Biology",
            "Today we examine rocky intertidal zonation—the banding of organisms between high and low tide marks. Physical stress from desiccation and temperature sets an upper limit for many species, while competition and predation often set lower limits. Classic experiments removing competitive dominants show that subordinate species expand downward when space opens. Students sometimes assume every band is genetic destiny; in fact, many patterns are ecological outcomes you can disrupt with a careful removal study. Wave exposure further modifies zones: wave-swept shores differ from sheltered coves even at the same tidal height. For lab, you will map a local seawall using meter tapes and abundance counts, then compare your sketch to textbook diagrams. Write a one-sentence main idea after the first listen, then add two mechanisms on the second listen."
            + _CUE,
            "Physical stress and species interactions create vertical bands of life in intertidal habitats.",
            [
                "Desiccation and heat limit upper edges.",
                "Competition and predation shape lower edges; removals test causes.",
                "Wave exposure and a mapping lab connect theory to field pattern.",
            ],
        ),
        _talk(
            22,
            "Working Memory in Second-Language Reading",
            "Psychology",
            "This talk links working memory capacity to second-language reading comprehension. Working memory briefly holds and manipulates information; in a new language, decoding consumes more of that limited resource, leaving less for inference. Studies compare readers on span tasks and then on comprehension passages with and without glosses. Glosses that reduce lookup costs often help lower-span readers more. Strategy training—predicting and summarizing chunk by chunk—can partially compensate. Classroom implication: vocabulary previews are not merely extra; they free working memory for meaning. For your response paper, critique one study's span measure and whether it matches the reading task modality. Track repeated terms like 'span' and 'inference' as anchors for the main claim."
            + _CUE,
            "Limited working memory constrains second-language reading; supports and strategies can free capacity for comprehension.",
            [
                "Decoding load competes with inference.",
                "Glosses and previews help especially lower-span readers.",
                "Strategy training plus a study-critique assignment.",
            ],
        ),
        _talk(
            23,
            "Ledger Books and Merchant Trust",
            "History",
            "We turn to double-entry bookkeeping as a technology of trust in early modern trade. Merchants needed to track credit across long distances without constant face-to-face settlement. Double-entry records debits and credits so errors become more visible and partnerships can audit claims. Historians debate whether the method created capitalism or merely accompanied expanding markets; avoid simplistic origin stories. Notarial archives and surviving ledgers let us see interest charges, currency conversions, and disputed accounts. Literacy and numeracy requirements meant access was uneven. For Thursday, compare two ledger pages and identify one entry that reveals risk management, such as diversifying cargo across ships. Listen for the speaker's contrast between technique and broader economic change."
            + _CUE,
            "Double-entry bookkeeping supported long-distance credit and auditability amid expanding trade.",
            [
                "Credit across distance needed reliable records.",
                "Debates on causation versus accompaniment of market growth.",
                "Uneven access; ledger comparison task for risk clues.",
            ],
        ),
        _talk(
            24,
            "Heat Islands and Nighttime Temperatures",
            "Environmental Science",
            "Urban heat islands form when cities replace vegetation with dark, impermeable surfaces that store daytime heat and release it at night. Nighttime minimum temperatures often show the strongest urban-rural gap, stressing sleep and health. Satellite thermal images map hotspots, but ground sensors catch street-canyon effects satellites miss. Mitigation includes reflective roofs, urban trees, and permeable pavements that support evaporative cooling. Equity matters: cooler neighborhoods frequently have more tree canopy. In discussion, propose a sensor placement plan for our campus that distinguishes courtyard, parking lot, and green-roof sites. Distinguish correlation—hotter where denser—from interventions that change albedo or shade."
            + _CUE,
            "Cities elevate nighttime temperatures via stored heat; canopy and reflective design can mitigate unevenly.",
            [
                "Impervious surfaces store and reradiate heat.",
                "Satellites plus ground sensors; health and equity stakes.",
                "Campus sensor plan comparing surface types.",
            ],
        ),
        _talk(
            25,
            "Network Effects in Campus Apps",
            "Economics",
            "Network effects arise when a product becomes more valuable as more people use it. Campus ride boards and used-textbook chats illustrate the idea: a marketplace with few listings attracts few buyers, which attracts few sellers. Direct network effects involve same-side users; indirect effects link complementary groups, like riders and drivers. Critical mass and switching costs shape whether a new app displaces an old group chat. Be careful: not every popular app has strong network effects—habit and design quality also matter. For problem set three, sketch demand as a function of expected users and discuss multiple equilibria. Notice how the lecture separates definition, campus example, and measurement warning."
            + _CUE,
            "A good's value can rise with user count, creating feedback loops and multiple adoption equilibria.",
            [
                "Direct versus indirect network effects.",
                "Critical mass, switching costs, and campus marketplace examples.",
                "Model expected users; avoid assuming every hit app is network-driven.",
            ],
        ),
        _talk(
            26,
            "Gravitational Lensing Basics",
            "Astronomy",
            "Mass bends spacetime, so light from a distant galaxy can be deflected by a foreground cluster—gravitational lensing. Strong lensing produces arcs and multiple images; weak lensing slightly distorts many background shapes, revealing dark matter maps statistically. Time delays between multiple images constrain cosmology when carefully modeled. Lensing is a geometric probe that does not require the lensed source to be standard in luminosity. Caveats include mass-sheet degeneracies in models. In lab you will inspect a public Hubble image and identify candidate arcs versus chance alignments. Repeated phrases like 'foreground mass' and 'background source' mark the causal chain."
            + _CUE,
            "Foreground mass deflects background light, enabling imaging of dark matter structure and geometric cosmology tests.",
            [
                "Strong arcs versus weak statistical distortions.",
                "Time delays and modeling caveats.",
                "Image inspection lab for candidate arcs.",
            ],
        ),
        _talk(
            27,
            "Ritual and Social Cohesion",
            "Anthropology",
            "Anthropologists study rituals not only as belief statements but as practices that synchronize attention and emotion. Collective movement, music, and repetition can increase reported belonging in experimental and ethnographic accounts. Costly rituals may signal commitment, discouraging free riders in cooperative groups. Yet rituals also exclude; cohesion for insiders can harden boundaries. Avoid reducing ritual to a single function. For your field notes, observe a campus ceremony—orientation, game day, or graduation rehearsal—and record who speaks, who watches, and how space is arranged. Track the lecturer's move from definition to function to critique."
            + _CUE,
            "Rituals can build belonging and signal commitment while also drawing social boundaries.",
            [
                "Synchrony and emotion in collective practice.",
                "Costly signaling versus exclusion risks.",
                "Campus ceremony observation assignment.",
            ],
        ),
        _talk(
            28,
            "Enzyme Specificity and Active Sites",
            "Chemistry",
            "Enzymes accelerate reactions by stabilizing transition states in shaped active sites. Specificity arises because substrates must fit geometrically and chemically; lock-and-key is a useful start, induced fit a refinement when binding changes enzyme shape. Inhibitors may compete for the active site or bind elsewhere allosterically. Temperature and pH alter activity by changing structure. In lab you will measure rate versus substrate concentration and sketch a Michaelis curve conceptually—even if you do not fit parameters fully yet. Listen for contrasts between competitive and noncompetitive inhibition as TOEFL-style detail traps."
            + _CUE,
            "Active-site chemistry explains how enzymes speed specific reactions and how inhibitors interfere.",
            [
                "Transition-state stabilization and fit models.",
                "Competitive versus allosteric inhibition; pH and temperature effects.",
                "Rate versus concentration lab sketch.",
            ],
        ),
        _talk(
            29,
            "Federal Agencies and Rulemaking",
            "Political Science",
            "After legislatures pass broad statutes, agencies write detailed rules through notice-and-comment procedures. Proposed rules appear in publications like the Federal Register; stakeholders submit comments; agencies respond and issue final rules. Courts may review whether agencies exceeded authority. Critics worry about democratic accountability; defenders note expertise and capacity legislatures lack. Case studies on clean-air standards show how science, industry, and advocacy groups shape comments. For discussion, trace one campus-relevant rule—financial aid disclosure or lab safety—and identify the statute behind it. Follow cues that separate process steps from normative debates."
            + _CUE,
            "Agency rulemaking translates statutes into detailed policy via public comment and possible judicial review.",
            [
                "Notice-and-comment stages.",
                "Expertise versus accountability debate.",
                "Trace a campus-relevant rule to its statute.",
            ],
        ),
        _talk(
            30,
            "Sediment Cores as Climate Archives",
            "Earth Science",
            "Lakes and oceans accumulate layered sediments that archive past environments. Pollen, charcoal, and isotopic ratios in cores indicate vegetation, fires, and temperature proxies. Dating uses radiocarbon or volcanic ash layers as time markers. Interpretation requires care: a pollen spike might reflect local shoreline change rather than continental climate. Bioturbation can blur fine layers. In lab, you will examine a core photo, mark candidate event layers, and propose two hypotheses for a dark band. The lecture's 'however' statements often introduce alternative explanations—prime TOEFL detail."
            + _CUE,
            "Sediment cores store dated environmental proxies that need careful, alternative-aware interpretation.",
            [
                "Proxies: pollen, charcoal, isotopes.",
                "Dating tools; local versus regional signals; bioturbation.",
                "Core photo hypothesis exercise.",
            ],
        ),
        _talk(
            31,
            "Politeness Strategies in Requests",
            "Linguistics",
            "Speakers soften requests using politeness strategies: modals like 'could,' hedges like 'maybe,' and supportive moves like reasons. Brown and Levinson's framework contrasts face-threatening acts with redressive language, though cultures differ in what counts as polite. Directness is not always rude; emergency contexts favor clarity. Corpus studies of office-hour emails show students often over-apologize while under-specifying the ask. Practice rewriting a blunt request into a clear, respectful version without excessive deference. Notice definitions before examples—typical lecture scaffolding."
            + _CUE,
            "Request wording balances clarity with attention to social face, varying by culture and context.",
            [
                "Modals, hedges, and supportive moves.",
                "Face theory and cultural variation; emergencies favor clarity.",
                "Email rewrite practice.",
            ],
        ),
        _talk(
            32,
            "Vaccine Coverage and Outbreak Risk",
            "Public Health",
            "Community outbreak risk depends partly on vaccine coverage and contact patterns. When coverage falls, pathogens with high transmissibility exploit susceptible clusters—even if average coverage looks acceptable. School requirements, access clinics, and trust messaging influence uptake. Measurement challenges include outdated records and privacy-protected data. Models are tools, not crystal balls; assumptions about mixing matter. For seminar, critique a news chart that shows coverage without uncertainty bands. Repeated terms like 'coverage' and 'cluster' signal the main mechanism."
            + _CUE,
            "Uneven vaccine coverage and contact clustering shape outbreak potential beyond simple averages.",
            [
                "Susceptible clusters despite decent averages.",
                "Access, requirements, and trust; data limits.",
                "Critique coverage charts lacking uncertainty.",
            ],
        ),
        _talk(
            33,
            "Linear Perspective and Viewer Position",
            "Art History",
            "Linear perspective organizes pictorial space so parallel lines appear to converge toward vanishing points, implying a viewer position. Renaissance treatises linked geometry to realistic space, yet artists also manipulated perspective for emphasis. Multiple vanishing points can coexist in complex interiors. Later movements rejected strict perspective to flatten or fragment space. When you analyze a painting, ask where you are asked to stand and what is distorted on purpose. In the gallery worksheet, sketch vanishing lines lightly on a postcard reproduction and note one anomaly. Lecture transitions from technique to intention are key listening targets."
            + _CUE,
            "Perspective systems place the viewer and can be followed or deliberately broken for effect.",
            [
                "Vanishing points imply stance.",
                "Historical treatises versus artistic manipulation.",
                "Sketch lines; note intentional anomalies.",
            ],
        ),
        _talk(
            34,
            "Version Control for Collaboration",
            "Computer Science",
            "Version control systems record snapshots of code so teams can branch, merge, and recover. Commits with clear messages document intent; pull requests invite review before integration. Conflicts arise when two edits touch the same lines—resolution is a communication task as much as a technical one. For scientists writing analysis scripts, version control prevents 'final_v7_really_final' chaos. In lab, initialize a repository, make two branches, and merge a trivial change. Listen for the distinction between local commits and remote sharing."
            + _CUE,
            "Version control tracks history and enables safer collaborative software and analysis workflows.",
            [
                "Commits, branches, merges, and pull requests.",
                "Conflicts as socio-technical problems.",
                "Mini lab: branch and merge.",
            ],
        ),
        _talk(
            35,
            "Participant Observation Tradeoffs",
            "Sociology",
            "Participant observation places researchers inside ongoing social settings to understand meanings in context. Access and trust take time; complete membership may risk losing analytic distance, while pure observation may miss insider knowledge. Ethics require consent when possible and careful handling of sensitive disclosures. Field notes separate description from early interpretation—though the split is never perfect. For a methods memo, justify why a dining-hall ethnography would use overt rather than covert roles. The lecture's weighing of tradeoffs mirrors TOEFL academic talk structure."
            + _CUE,
            "Participant observation yields contextual insight but involves access, role, and ethics tradeoffs.",
            [
                "Insider knowledge versus analytic distance.",
                "Consent and sensitive data.",
                "Overt-role justification memo.",
            ],
        ),
        _talk(
            36,
            "Estuaries as Nutrient Filters",
            "Oceanography",
            "Estuaries mix fresh and salt water, often trapping sediments and transforming nutrients before they reach the sea. Wetland plants and microbes can remove nitrogen through uptake and denitrification, but overload produces hypoxia. Dams and channelization alter residence time and filtering capacity. Restoration projects reconnect floodplains to recover functions. Compare two estuary case studies in reading: one nutrient-limited, one light-limited by turbidity. Track causal chains from watershed inputs to dissolved oxygen."
            + _CUE,
            "Estuaries can filter nutrients yet fail under overload or hydrologic alteration.",
            [
                "Mixing zones transform nutrients and sediments.",
                "Hypoxia under overload; dams change residence time.",
                "Case comparison: nutrient versus light limitation.",
            ],
        ),
        _talk(
            37,
            "Thought Experiments in Ethics",
            "Philosophy",
            "Thought experiments isolate moral principles by imagining controlled scenarios—trolley problems being the celebrity example. Their value is clarifying intuitions and revealing inconsistencies, not predicting real behavior perfectly. Critics argue sparse scenarios hide emotionally relevant details; defenders say abstraction is the point. When reading, identify the intended principle under test and one confounding detail an opponent might add. In seminar, invent a campus-life thought experiment about scarce study rooms and fairness. Listen for the speaker's 'on the one hand' structure."
            + _CUE,
            "Ethical thought experiments clarify principles and intuitions while inviting critiques about realism.",
            [
                "Controlled scenarios test principles.",
                "Abstraction debate: feature or bug.",
                "Campus fairness scenario design.",
            ],
        ),
        _talk(
            38,
            "Cover Crops and Soil Structure",
            "Agriculture",
            "Cover crops grow between cash-crop seasons to protect soil. Roots reduce erosion, add organic matter, and can fix nitrogen if legumes are used. Tradeoffs include seed cost and timing relative to weather windows. Farmers choose species mixes for goals: compaction relief versus pollinator habitat versus nitrogen. Satellite and field trials measure biomass and subsequent yield effects. For the problem set, recommend a cover mix for a sandy campus farm plot with spring vegetable planting. Separate goals from mechanisms in your notes."
            + _CUE,
            "Cover crops protect and enrich soils between seasons, with species choice matching specific goals.",
            [
                "Erosion control, organic matter, and possible nitrogen fixation.",
                "Cost and timing tradeoffs; mix design by goal.",
                "Campus farm recommendation task.",
            ],
        ),
        _talk(
            39,
            "Long-Term Potentiation Overview",
            "Neuroscience",
            "Long-term potentiation, or LTP, refers to lasting strengthening of synapses after certain activity patterns—widely studied as a cellular candidate for learning. High-frequency stimulation can increase postsynaptic responses in hippocampal pathways. Molecular cascades involve calcium signaling and receptor trafficking. Correlation with behavior is supportive but not proof that all memories are LTP. Drugs and genetic tools test necessity and sufficiency carefully. In discussion, explain why 'cells that fire together wire together' is a slogan needing experimental nuance. Watch for definition, evidence, and limitation sections."
            + _CUE,
            "LTP is activity-dependent synaptic strengthening studied as a mechanism related to learning, with important caveats.",
            [
                "Activity patterns strengthen synapses.",
                "Calcium and receptor mechanisms; behavioral links incomplete.",
                "Slogan versus experimental nuance.",
            ],
        ),
        _talk(
            40,
            "Confounding in Observational Studies",
            "Statistics",
            "Observational studies associate variables without assigning treatments, so confounders—common causes—can create misleading links. Example: ice cream sales and drowning both rise in summer; temperature confounds. Researchers use restriction, matching, stratification, or statistical adjustment, each with assumptions. Randomized experiments balance confounders on average but are not always ethical or feasible. For workshop, draw a causal diagram for library hours and GPA, list two confounders, and propose a better design. The phrase 'in contrast' often switches from problem to remedy—prime for outline notes."
            + _CUE,
            "Without randomization, confounders threaten causal claims; design and adjustment strategies help under assumptions.",
            [
                "Common-cause examples.",
                "Restriction, matching, and adjustment; randomized-trial contrast.",
                "Causal diagram workshop on campus variables.",
            ],
        ),
    ]
)

# --- Listen and Repeat 21–40 ---
BATCH2_LS.extend(
    [
        _lar(21, "Research Consent Form", "Articulate 'consent,' 'voluntary,' and 'withdraw.' Keep a calm, informative tone.", [
            "Participation in this study is voluntary at every stage.",
            "You may withdraw without penalty to your course grade.",
            "Please read the consent form before signing.",
            "Data will be stored on an encrypted campus drive.",
            "Ask the researcher to clarify any sentence you do not understand.",
            "Do you agree to audio recording during the interview portion?",
            "I confirm that I have had time to ask questions about the procedures.",
        ]),
        _lar(22, "Group Project Deadlines", "Stress dates and names clearly. Pause lightly between responsibilities.", [
            "Our shared draft is due on Thursday at midnight.",
            "Please upload figures to the folder before Wednesday evening.",
            "I will revise the introduction after peer comments arrive.",
            "We should meet for twenty minutes after lab on Tuesday.",
            "Confirm that everyone can access the spreadsheet link.",
            "Would it help if I sent a reminder the morning of the deadline?",
            "Let's freeze major edits six hours before submission.",
        ]),
        _lar(23, "Campus Safety Escort", "Practice polite requests and clear locations. Finish consonants on 'request' and 'street.'", [
            "I would like a Night Ride escort to East Hall.",
            "I am waiting under the lights by the library plaza.",
            "My building entrance faces the tennis courts.",
            "Please call when the driver is two minutes away.",
            "I need to reach the dorm before midnight quiet hours.",
            "Is the escort available until two during finals week?",
            "Thank you for walking me through the request steps in the app.",
        ]),
        _lar(24, "Office Printer Jam", "Keep instructional tone steady. Emphasize 'jam,' 'tray,' and 'settings.'", [
            "The printer on floor two shows a paper jam warning.",
            "Open the side panel and gently pull the wrinkled sheet.",
            "Check that the paper tray is not overfilled.",
            "Resend the job using the double-sided setting.",
            "If the error remains, reboot the print queue station.",
            "Should I report this through the IT ticket portal?",
            "I need twenty clean copies for the seminar handout.",
        ]),
        _lar(25, "Scholarship Recommendation Ask", "Use polite rising-falling intonation on requests. Link 'would you be willing' smoothly.", [
            "Would you be willing to write a recommendation letter for me?",
            "The scholarship deadline is the fifteenth of next month.",
            "I can send my résumé and a draft statement this week.",
            "The letter should address leadership and academic promise.",
            "A PDF upload to the portal is preferred by the committee.",
            "Would two weeks be enough time for you to write it?",
            "I appreciate your mentorship throughout this research project.",
        ]),
        _lar(26, "Quiet Hours Negotiation", "Practice a firm but respectful tone. Keep /z/ clear in 'hours' and 'please.'", [
            "Quiet hours begin at eleven on weeknights.",
            "Could you use headphones after that time please?",
            "We have an early exam tomorrow morning.",
            "The lounge is available for group conversations.",
            "I can compromise on weekends until midnight.",
            "Should we write this agreement on our roommate chart?",
            "Thanks for helping keep the suite workable for everyone.",
        ]),
        _lar(27, "Lab Coat Laundry", "Emphasize safety vocabulary. Keep list intonation on requirements.", [
            "Lab coats must be washed after chemical spills.",
            "Use the designated laundry service in the science building.",
            "Do not take contaminated coats on the campus bus.",
            "Mark your coat with your section number inside the collar.",
            "Replacement coats are available for a semester deposit.",
            "Is the laundry drop box open after five o'clock?",
            "I spilled a small amount of dye and need a clean coat tomorrow.",
        ]),
        _lar(28, "Internship Offer Reply", "Practice professional gratitude and clarity on deadlines.", [
            "Thank you for offering me the summer internship position.",
            "I am pleased to accept and can start on June second.",
            "Please let me know what paperwork I should complete next.",
            "I will arrange housing near the downtown office.",
            "Could you confirm the dress code for the first week?",
            "Is there a preferred email for submitting tax forms?",
            "I look forward to contributing to the outreach team.",
        ]),
        _lar(29, "Library Fine Dispute", "Stay courteous while stating facts. Stress numbers clearly.", [
            "I returned the book on Monday before closing.",
            "The portal still shows an overdue fine of twelve dollars.",
            "Here is the email receipt from the self-check machine.",
            "Could you check whether the barcode scanned correctly?",
            "I am happy to pay if the record is accurate.",
            "Would you reverse the fine if the return is confirmed?",
            "Thank you for looking into this before my registration hold.",
        ]),
        _lar(30, "Club Budget Request", "Practice formal meeting language. Chunk budget figures carefully.", [
            "We request two hundred dollars for guest speaker travel.",
            "The event is free for students with campus ID.",
            "Our club contributed fifty dollars from membership dues.",
            "A detailed budget spreadsheet is attached to this form.",
            "We expect about eighty attendees based on last year.",
            "Can student government approve funds before next Friday?",
            "We will submit photos and a short report after the event.",
        ]),
        _lar(31, "Weather Makeup Lab", "Clear conditionals such as 'if canceled.' Keep schedule details precise.", [
            "If the storm cancels Friday's outdoor lab, we meet Monday.",
            "Bring the same worksheet and a charged tablet.",
            "Indoor backup activities are posted on the course site.",
            "Attendance still counts for the rearranged session.",
            "Check email Sunday night for the final decision.",
            "Should we return borrowed clipboards to the prep room?",
            "I can help set up tables if we move indoors.",
        ]),
        _lar(32, "Peer Feedback Delivery", "Practice a constructive tone. Soften criticism with specifics.", [
            "Your introduction states the claim clearly in one sentence.",
            "The second paragraph needs a tighter topic sentence.",
            "I suggest cutting one example to protect your time limit.",
            "Your data slide is readable from the back row.",
            "Please slow down when you define the key term.",
            "Would you like me to time a second practice run?",
            "Overall, the structure is strong and easy to follow.",
        ]),
        _lar(33, "Housing Maintenance Follow-Up", "Calm service tone. Articulate repair vocabulary.", [
            "I submitted a ticket about the leaking ceiling last week.",
            "The stain has spread toward the light fixture.",
            "Could someone inspect it before the weekend rains?",
            "My suite number is four twelve in West Hall.",
            "I am available after three o'clock on weekdays.",
            "Is there an emergency line if water starts dripping faster?",
            "Please text me when the technician is on the way.",
        ]),
        _lar(34, "Conference Abstract Submit", "Academic register. Stress 'abstract,' 'symposium,' and 'keywords.'", [
            "I plan to submit an abstract to the undergraduate symposium.",
            "The research examines sleep routines among first-year students.",
            "My faculty mentor has approved the current draft.",
            "Keywords include sleep, stress, and campus health.",
            "The submission portal closes Friday at five.",
            "Do posters require a separate registration fee?",
            "I will upload the PDF after one final proofreading pass.",
        ]),
        _lar(35, "Cafeteria Allergy Question", "Polite inquiry intonation. Clear food-allergy terms.", [
            "Does this soup contain any tree nuts or peanut oil?",
            "I have a mild allergy and need to confirm the ingredients.",
            "Is a separate utensil used for the allergen-free station?",
            "Could you check with the kitchen about today's sauce?",
            "A printed allergen chart would help me choose quickly.",
            "Are gluten-free bread options available at dinner?",
            "Thank you for verifying before I take a portion.",
        ]),
        _lar(36, "TA Review Session Plan", "Organizing language: first, next, finally. Keep a steady pace.", [
            "The review session starts at six in room two-oh-one.",
            "First we will outline major theories from weeks one to four.",
            "Next we will work two practice short-answer questions.",
            "Finally we will preview the exam logistics and timing.",
            "Bring questions on index cards if you prefer anonymity.",
            "Will the slides be posted after the session ends?",
            "I can stay ten extra minutes for individual clarifications.",
        ]),
        _lar(37, "Campus Map Orientation", "Direction phrases with clear stress on landmarks.", [
            "The admissions pavilion faces the main fountain.",
            "Walk past the oak grove and turn toward the glass atrium.",
            "The advising offices are on the third floor of South Hall.",
            "Elevators are slower during the lunch peak.",
            "You can follow the blue line painted on the sidewalk.",
            "Is the visitor parking lot behind the bookstore?",
            "I will meet you at the clock tower at ten-fifteen.",
        ]),
        _lar(38, "Data Survey Invitation", "Neutral research tone. Pronounce 'anonymous' carefully.", [
            "You are invited to complete a fifteen-minute anonymous survey.",
            "The study concerns study-space preferences on campus.",
            "Participation is optional and unrelated to course grades.",
            "Results will be reported only in aggregate form.",
            "A small dining voucher is offered as a thank-you.",
            "May I send the secure link to your campus email?",
            "You may skip any question you prefer not to answer.",
        ]),
        _lar(39, "Recital Program Proof", "Arts vocabulary; careful names and titles.", [
            "Please proof the recital program for spelling of titles.",
            "My piece begins after the intermission break.",
            "Confirm that the composer's dates are correct.",
            "Stage crew needs the final order by Wednesday noon.",
            "I will bring my own sheet music to the warm-up room.",
            "Should biographies be limited to fifty words each?",
            "Thank you for coordinating the printed programs.",
        ]),
        _lar(40, "Finals Week Check-In", "Supportive tone. Clear time-management phrases.", [
            "I am spacing review blocks across five days.",
            "Short walks between sessions help me reset attention.",
            "I will sleep at least seven hours before each exam.",
            "Practice problems matter more than rereading highlights.",
            "A quiet carrel is reserved for tomorrow afternoon.",
            "Would you like to exchange quiz questions tonight?",
            "We can celebrate briefly after the last final on Friday.",
        ]),
    ]
)

# --- Interview 21–40 ---
BATCH2_LS.extend(
    [
        _interview(
            21,
            "Campus Podcast Co-Host",
            "The media club is hiring a co-host for a weekly student podcast on campus research and arts.",
            "Sound curious and organized; mention listening skills.",
            [
                (
                    "Why do you want to co-host the campus podcast?",
                    "I want to help translate student research and arts projects into clear conversations that classmates actually finish listening to. I already draft questions for a study group newsletter, and I enjoy editing filler words without erasing personality. Co-hosting would sharpen my interviewing habits under a clock while serving listeners who feel shut out of academic jargon. I would treat preparation as respect for guests and for the audience's time.",
                ),
                (
                    "How would you prepare for an interview with a nervous guest?",
                    "I would send three sample questions in advance, start with an easy success story, and agree on a hand signal if they need a pause. In a class project interview last term, that approach helped a shy researcher explain methods without freezing. I would also keep water nearby and remind them that editing can remove false starts. Comfort produces better content than pressure.",
                ),
                (
                    "Describe a time you handled technical problems during a presentation.",
                    "During a club event my slides failed to project, so I switched to a printed outline and kept speaking while a teammate fixed the cable. The audience stayed engaged because I narrated the next point instead of apologizing for two minutes. I learned to arrive early, carry a backup PDF, and assign a tech role. Podcasts need the same redundancy with recorders and cloud backups.",
                ),
                (
                    "How would you split hosting duties fairly with a partner?",
                    "I would rotate who leads questions, who watches timing, and who drafts show notes, then review the split monthly. Fairness is visible when both names appear in preparation work, not only on air. If one person prefers editing, we could trade research-heavy episodes. Clear defaults prevent silent resentment and missed uploads.",
                ),
            ],
        ),
        _interview(
            22,
            "Biology Field Course Assistant",
            "A field ecology course needs an undergraduate assistant for weekend trips and gear checks.",
            "Emphasize reliability, safety, and teaching patience.",
            [
                (
                    "What experience prepares you to assist a field course?",
                    "I completed the introductory ecology lab with careful notebook habits and later volunteered on a campus habitat cleanup. I am comfortable waking early, checking packing lists, and reminding peers about closed-toe shoes without sounding harsh. I also enjoy explaining simple identification tips using plain language. The assistant role fits my plan to apply for a summer field internship.",
                ),
                (
                    "How would you help a student who feels unsafe near water?",
                    "I would acknowledge the feeling, review the specific safety boundary the instructor set, and offer a shoreline task with equal learning value when possible. Forcing bravado helps no one. I would alert the instructor privately if anxiety seemed severe. Inclusion means adapting roles within safety rules, not pretending risk is imaginary.",
                ),
                (
                    "Tell us about keeping inventory accurate under time pressure.",
                    "At the makerspace I checked tools in and out during busy evenings using a simple sheet and a photo of damaged gear. When counts were short, I paused new checkouts until we resolved the gap. That habit prevents blame later. For field gear I would label bags by station and verify before the van leaves.",
                ),
                (
                    "What would you do if weather forced a last-minute plan change?",
                    "I would help the instructor communicate the new meeting point clearly, move sensitive equipment inside, and keep a calm tone so students do not panic. I would confirm attendance twice—once at departure and once at the backup site. Flexibility with checklists beats improvising without structure. Afterward I would note lessons for the next trip brief.",
                ),
            ],
        ),
        _interview(
            23,
            "Student Court Peer Advocate",
            "The student conduct board seeks peer advocates who help respondents prepare respectful statements.",
            "Be fair, discreet, and process-focused.",
            [
                (
                    "Why does peer advocacy interest you?",
                    "Campus conduct processes can feel opaque to students who have never read a policy handbook. I want to help peers prepare factual timelines and a respectful tone without pretending to be a lawyer. Confidentiality and fairness matter more than winning a dramatic argument. My goal is informed participation, not coaching dishonesty.",
                ),
                (
                    "How would you handle confidential information?",
                    "I would store notes in approved systems only, avoid hallway conversations, and refuse gossip even when friends ask. If I were unsure whether something must be reported for safety, I would consult the advisor immediately. Trust collapses if advocates talk casually. Discretion is a daily practice, not a slogan.",
                ),
                (
                    "Describe a disagreement you resolved using evidence.",
                    "In a group project dispute about missed work, I suggested we open the shared document history instead of arguing from memory. The timestamps clarified who drafted which section, and we redistributed tasks without personal attacks. Evidence cooled the conflict. I would bring the same habit to advocacy preparation.",
                ),
                (
                    "What limits should a peer advocate respect?",
                    "I should not invent excuses, contact complainants improperly, or promise outcomes. My role is preparation, clarity, and emotional steadiness before a hearing. Crossing into intimidation or dishonesty would harm the student and the process. Knowing limits is part of ethical help.",
                ),
            ],
        ),
        _interview(
            24,
            "Math Emporium Evening Proctor",
            "The math emporium hires evening proctors to check in students and enforce quiet testing rules.",
            "Be firm, friendly, and consistent.",
            [
                (
                    "What attracts you to an evening proctor role?",
                    "I like structured environments where clear rules help students focus. Evening hours fit my schedule, and I am comfortable greeting people, verifying IDs, and explaining policies without embarrassment. I also remember how stressful timed quizzes feel, so tone matters. Reliability during closing shifts is something I can offer.",
                ),
                (
                    "How would you stop whispering during a quiz without escalating?",
                    "I would walk closer, make brief eye contact, and quietly restate the no-talking rule, offering a warning before involving a supervisor if required. Public shaming creates more noise than it stops. Consistency across students prevents claims of favoritism. I would document repeat issues per protocol.",
                ),
                (
                    "Tell us about multitasking at a desk job.",
                    "At the recreation desk I checked IDs while answering phone questions and restocking forms. I learned to finish the in-person verification before long phone explanations, or to take a callback number. Prioritizing the person in front reduces errors. I would apply that triage to check-ins versus equipment questions.",
                ),
                (
                    "Are you willing to close the lab and report incidents?",
                    "Yes. I can follow the closing checklist, secure machines, and file incident notes the same night while details are fresh. Delaying reports creates confusion. I understand proctoring is about academic integrity as much as customer service.",
                ),
            ],
        ),
        _interview(
            25,
            "Community Garden Plot Leader",
            "The sustainability office needs a student leader to coordinate community garden plot assignments.",
            "Show practical leadership and inclusive scheduling.",
            [
                (
                    "Why do you want to lead garden plot coordination?",
                    "I have tended a shared plot for two seasons and seen how unclear rules create conflict over watering and harvest. I want to publish a simple schedule, welcome new gardeners, and keep tools accounted for. Food growing also connects to campus waste-reduction goals I care about. Leadership here is logistics plus hospitality.",
                ),
                (
                    "How would you handle two students claiming the same plot?",
                    "I would check the timestamped application list, explain the rule publicly used for assignment, and offer the next available plot plus mentorship from an experienced gardener. Transparency beats private deals. If records were unclear, I would escalate to the sustainability staff. Fair process protects community trust.",
                ),
                (
                    "Describe a time you taught a practical skill.",
                    "I taught two friends to start seeds indoors using consistent moisture and labels. We lost one tray to overwatering, then adjusted. Teaching with a demo and a checklist worked better than a long lecture. I would use the same approach for tool orientations.",
                ),
                (
                    "What is one system you would improve in the first month?",
                    "I would create a shared watering calendar with rain delays and a photo inventory of tools. Many conflicts are really missing information. A monthly thirty-minute workday would also rebuild paths together. Systems reduce the need for constant personal policing.",
                ),
            ],
        ),
        _interview(
            26,
            "Accessibility Note Template Designer",
            "Disability services wants a student assistant to improve shared note templates for peer note-takers.",
            "Be user-centered and precise.",
            [
                (
                    "What makes note templates worth improving?",
                    "Inconsistent headings make notes hard to scan when students are already managing accommodations and coursework. A shared template with date, topic, key terms, and action items can raise quality without slowing note-takers. I care about usable documents, not decorative formatting. Clarity is an access issue.",
                ),
                (
                    "How would you gather feedback from users?",
                    "I would run two short surveys—one for note-takers and one for recipients—plus three think-aloud sessions watching someone find information in a sample packet. Watching beats guessing. I would also ask disability specialists what privacy constraints shape sharing. Feedback should drive revisions in weekly sprints.",
                ),
                (
                    "Describe a document you redesigned.",
                    "I rebuilt a club handoff guide that buried deadlines in paragraphs. I moved dates into a table and added a checklist on page one. New officers stopped missing room reservations. The lesson was hierarchy: put time-critical facts first.",
                ),
                (
                    "How do you balance detail with readability?",
                    "I keep a short first page and move examples to an appendix so skilled users are not slowed down. Headings and bold key terms help skimming without shouting. If everything is emphasized, nothing is. I would test both beginner and experienced note-takers.",
                ),
            ],
        ),
        _interview(
            27,
            "Esports Tournament Marshal",
            "Campus recreation is hiring marshals to keep weekend esports tournaments on schedule and fair.",
            "Stay calm, neutral, and clock-aware.",
            [
                (
                    "Why are you a good fit for tournament marshal?",
                    "I play in intramural games and have refereed club matches where emotions run high. I can read brackets, call matches on time, and explain rules without sarcasm. Fairness matters more than being liked in the moment. I also communicate clearly on headset when noise rises.",
                ),
                (
                    "How would you handle an accused rules violation?",
                    "I would pause the match if required, collect statements briefly, check the written rulebook, and call a head marshal for close calls. Guessing under pressure creates appeals later. Neutrality means not debating fans. Clear notes protect everyone.",
                ),
                (
                    "Describe managing a schedule delay.",
                    "When a club fair ran late, I shortened setup buffers and posted new start times on a shared board so teams were not surprised. Communication reduced anger more than the delay itself. I would do the same with bracket updates on a projector and chat channel.",
                ),
                (
                    "Can you stay impartial if friends compete?",
                    "Yes. I would ask to be rotated off their matches when staffing allows, and otherwise apply identical procedures. Friendship is not a rules exemption. If I felt compromised, I would say so early. Integrity keeps the tournament respected.",
                ),
            ],
        ),
        _interview(
            28,
            "First-Year Orientation Storyteller",
            "Orientation leaders will deliver short campus stories that help new students feel welcome.",
            "Be warm, specific, and concise.",
            [
                (
                    "Why do you want to be an orientation storyteller?",
                    "A senior's honest story about failing a first midterm and then using tutoring changed how I sought help. I want to offer that kind of specific, hopeful narrative rather than vague inspiration. Storytelling can point to real offices and habits. I would keep humor kind, never at a new student's expense.",
                ),
                (
                    "Tell a ninety-second campus story you might share.",
                    "In my second week I got lost between the science complex and the dining hall and arrived sweaty and embarrassed. An orientation leader walked me there and also showed the shortcut through the atrium. That small kindness made me more willing to ask for help later with registration. I would end by naming the information desk as a resource.",
                ),
                (
                    "How do you adapt stories for different audiences?",
                    "I watch for confusion, shorten side details, and swap examples—commuters may care more about parking than dorm laundry. Inclusivity means not assuming everyone lives on campus or shares the same traditions. I prepare two optional details I can drop if time is short.",
                ),
                (
                    "What would you avoid in orientation storytelling?",
                    "I would avoid alcohol-centered humor, gated gossip about professors, and stories that shame struggle. Fear is not a bonding strategy. I would also avoid promising outcomes I cannot control, like guaranteed easy classes. Accuracy builds trust for the week.",
                ),
            ],
        ),
        _interview(
            29,
            "Lab Archives Digitization Aide",
            "The science library seeks an aide to scan legacy lab manuals under copyright guidance.",
            "Show care with fragile materials and rules.",
            [
                (
                    "What interests you in digitization work?",
                    "I like projects where careful process preserves access for future students. Scanning manuals with correct metadata beats rushing files into a messy drive. I have experience photographing documents for a history methods course without damaging bindings. Patience and checklist discipline fit this role.",
                ),
                (
                    "How would you handle uncertain copyright status?",
                    "I would stop and ask the librarian rather than guess, because incorrect posting can harm the library. Flagging uncertainty is part of the job. I would keep a log of items awaiting review. Speed never outranks compliance here.",
                ),
                (
                    "Describe quality control you have used.",
                    "When scanning club archives, I checked every tenth page for skew and readability and rescanned errors immediately. Catching problems early saved a full redo. I would apply dpi and filename standards posted for the project. Quality control is kindness to the next user.",
                ),
                (
                    "Can you do repetitive tasks without losing accuracy?",
                    "Yes. I use micro-breaks, keep water nearby, and reset attention by verifying the checklist aloud every hour. Boredom is when mistakes appear, so I plan for it. I also welcome spot checks from supervisors. Steady accuracy matters more than burst speed.",
                ),
            ],
        ),
        _interview(
            30,
            "Public Speaking Fellow",
            "The communication center hires fellows to coach peers on short academic talks.",
            "Model clear structure and encouraging critique.",
            [
                (
                    "Why coach public speaking?",
                    "I improved my own grades when a tutor taught me to open with a stance, preview two reasons, and land a concrete example. I want to pass on that structure to students who freeze in seminars. Coaching also sharpens my listening. Progress shows when speakers shorten openings and slow key terms.",
                ),
                (
                    "How do you give feedback in five minutes?",
                    "I name one strength, one high-impact change, and one drill for the next practice—never a list of ten flaws. Working memory cannot use ten flaws. I ask what the speaker wants to improve so buy-in rises. Brief written bullets help after the session.",
                ),
                (
                    "Describe coaching someone unlike you in style.",
                    "A teammate spoke softly with excellent content. Instead of forcing a loud persona, we worked on projection to the back wall and clearer ends of sentences. Authenticity plus intelligibility beat imitation. I would keep that principle with multilingual speakers too.",
                ),
                (
                    "What is your approach to speech anxiety?",
                    "I normalize nerves, teach boxed breathing before the first line, and start practice with a trusted peer audience. Avoidance grows fear; graded exposure shrinks it. I also separate rehearsal speed from exam clarity. Anxiety management is part of speaking skill.",
                ),
            ],
        ),
        _interview(
            31,
            "Residence Desk Overnight Aide",
            "Housing needs overnight desk aides for weekend coverage and package logs.",
            "Stress vigilance, courtesy, and protocol.",
            [
                (
                    "Are you comfortable with overnight weekend shifts?",
                    "Yes. I already keep late study hours and can remain polite when tired. Overnight work is mostly procedure: logging packages, checking IDs for lockouts, and calling on-call staff for true emergencies. I would not treat the desk as a private study only. Presence is the service.",
                ),
                (
                    "How would you verify identity for a lockout?",
                    "I would follow the posted steps: photo ID, portal photo match, and any temporary code protocol, without improvising shortcuts for friends. Inconsistent exceptions become safety issues. If documents were insufficient, I would contact the on-call RA. Courtesy and firmness can coexist.",
                ),
                (
                    "Tell us about accurate logging under interruption.",
                    "At a campus event check-in I restarted counts after each interruption rather than trusting memory. Packages need the same discipline: scan, shelf location, and student notification before the next visitor. Interruptions are normal at a desk. Systems beat heroic memory.",
                ),
                (
                    "What would you do if you felt unsafe alone?",
                    "I would contact campus safety immediately using the desk phone, lock procedures as trained, and avoid confronting unknown risks myself. Heroics are not the job. Reporting early is responsible. I would also document the incident afterward.",
                ),
            ],
        ),
        _interview(
            32,
            "Open-Source Documentation Intern",
            "A campus research lab wants an intern to improve README docs for public code.",
            "Be clear, humble about jargon, and test instructions.",
            [
                (
                    "Why documentation instead of only coding features?",
                    "Features without install steps waste outsider time and hide the lab's work. I enjoy translating setup into numbered actions I verify on a clean account. Documentation is user research as much as writing. I want that skill for collaborative science.",
                ),
                (
                    "How would you test a README?",
                    "I would follow it on a fresh virtual environment without using insider knowledge, note every place I stall, and fix those lines. If a command needs a prerequisite, I would state it before the command. Screenshots help only when kept updated. Testing prevents optimistic writing.",
                ),
                (
                    "Describe explaining a technical idea simply.",
                    "I taught a classmate Git commit versus push using a draft-versus-mail metaphor, then returned to real commands so the metaphor did not float free. They succeeded on the next assignment. Simple language plus a concrete check builds competence.",
                ),
                (
                    "How do you handle conflicting reviewer comments on docs?",
                    "I would ask which audience the lab prioritizes—new students or advanced collaborators—and revise to that default, noting optional advanced sections. Conflict often hides audience mismatch. I would summarize the decision in the pull request. Clarity about readers reduces churn.",
                ),
            ],
        ),
        _interview(
            33,
            "Museum Family Day Guide",
            "The university museum seeks guides for Family Day stations explaining one exhibit simply.",
            "Be playful without being inaccurate.",
            [
                (
                    "Why guide Family Day visitors?",
                    "I liked museum visits as a child when guides asked questions instead of lecturing. I want to offer that experience with accurate but light explanations. Family Day also trains me to adjust language quickly for mixed ages. Welcoming curiosity is the goal.",
                ),
                (
                    "How would you explain a difficult exhibit to a seven-year-old?",
                    "I would start with what they see, add one idea, and ask what they notice next—for example, these pots were used for cooking; what marks look like fire to you? I would avoid sarcasm about simple questions. If caregivers want more depth, I can layer it afterward.",
                ),
                (
                    "Describe managing a crowded station.",
                    "I would keep a short demo loop, invite people to rotate after three minutes, and use a colleague for overflow questions. Hoarding attention frustrates families waiting. A visible next-story sign helps. Calm pacing beats shouting.",
                ),
                (
                    "What if you do not know an answer?",
                    "I would say I do not know, offer to check the label or ask a curator, and share what I can confirm. Inventing facts teaches the wrong lesson. Modeling honest inquiry fits a university museum. I would follow up if the family is still nearby.",
                ),
            ],
        ),
        _interview(
            34,
            "Statistical Consulting Drop-In Peer",
            "The stats lab needs peer consultants for basic software and graph questions.",
            "Teach; do not merely click for the student.",
            [
                (
                    "Why peer statistical consulting?",
                    "I struggled with software menus before I understood the statistical question underneath. Peers helped me name the variable types first. I want to offer that sequencing: question, method, then buttons. Consulting also reinforces my own methods coursework.",
                ),
                (
                    "How do you avoid doing the assignment for someone?",
                    "I keep my hands off their keyboard when possible, ask them to narrate the next step, and stop at conceptual understanding checks. If they only want answers, I redirect to tutors for content while I handle tool how-tos within policy. Integrity protects learning.",
                ),
                (
                    "Describe a time you debugged a plot.",
                    "A classmate's bars were stacked wrong because the data were in wide format. We reshaped a small example together, then reapplied the plot code. Seeing the table fix made the graph click. I would keep minimal reproducible examples ready.",
                ),
                (
                    "What is your limit as a peer consultant?",
                    "I will not interpret results for high-stakes papers beyond basic readings, and I will escalate advanced models to graduate consultants. Knowing limits is professionalism. I will also refuse to edit take-home exam code. Boundaries keep the lab credible.",
                ),
            ],
        ),
        _interview(
            35,
            "Language Partner Program Mentor",
            "The language center hires mentors to structure conversation hours for mixed-level partners.",
            "Balance fluency practice with inclusion.",
            [
                (
                    "What is your approach to language partnership?",
                    "Equal time, patient repair, and topics both partners choose. I post a simple agenda: warm-up, topic cards, and feedback minutes. Unstructured chat often leaves quieter partners behind. Structure creates fairness and more speech time.",
                ),
                (
                    "How would you help a dominant speaker share time?",
                    "I would use a visible timer and roles like question asker versus storyteller, switching each block. I would privately coach the dominant speaker on short turns. Public shaming fails. Clear norms help both proficiency levels.",
                ),
                (
                    "Tell us about a cross-cultural misunderstanding you navigated.",
                    "A partner thought my quick okay meant agreement to meet, while I meant I heard you. We fixed it by repeating decisions at the end of chat. I learned to confirm plans explicitly. Mentors should teach that repair move.",
                ),
                (
                    "How do you measure a successful session?",
                    "Both partners speak, leave with one phrase they can reuse, and know the next meeting time. Satisfaction surveys help, but observed talk time matters more than vibes alone. I would log recurring topics that need new cards.",
                ),
            ],
        ),
        _interview(
            36,
            "Climate Action Pledge Canvasser",
            "A student sustainability referendum needs canvassers who explain the pledge accurately.",
            "Be informative, not pushy.",
            [
                (
                    "Why canvass for the climate pledge?",
                    "Referenda fail when students hear only slogans. I want to explain what the pledge does and does not fund in plain numbers, then let peers decide. Persuasion without accuracy backfires. My environmental coursework helps me answer basic mechanism questions.",
                ),
                (
                    "How do you respond to a skeptical student?",
                    "I would ask which part concerns them—cost, effectiveness, or trust—and address that point with the FAQ sheet rather than a moral lecture. Listening first increases the chance they read the text. If I cannot answer, I collect the question for the campaign leads. Respect matters more than a hurried signature.",
                ),
                (
                    "Describe staying on message when tired.",
                    "During a long voter-registration shift I used a three-sentence script and sat for ninety seconds between waves instead of improvising cranky jokes. Fatigue creates mistakes. Rotating locations with a partner also helped. I would schedule short breaks into canvas blocks.",
                ),
                (
                    "What ethics guide collecting signatures?",
                    "No pressure on students in class, no misleading claims, and no copying IDs beyond what rules allow. I would stop if someone feels cornered. Process legitimacy is part of climate action too. I want signatures that still look fair the next day.",
                ),
            ],
        ),
        _interview(
            37,
            "Theater Box Office Associate",
            "The theater department hires box-office staff for evening performances and will-call.",
            "Be precise with names and calm under crowd pressure.",
            [
                (
                    "What draws you to box-office work?",
                    "I like event nights where organization shapes someone's first impression of a show. I can handle will-call lists, explain seat maps, and stay polite when lines form at curtain. Attention to name spelling prevents awkward delays. I also respect that late seating policies exist for a reason.",
                ),
                (
                    "How would you handle an angry patron with the wrong night ticket?",
                    "I would apologize for the frustration, verify the ticket date, and offer allowed options such as exchange if policy permits or manager assistance. Arguing about blame in public helps no one. Clear options restore dignity. I would keep my voice steady and low.",
                ),
                (
                    "Describe accuracy with lists.",
                    "I managed check-in for a conference using alphabetical sheets and highlighted completed rows to avoid double entry. When a name was missing, I searched variants before creating a duplicate. Similar care applies to will-call. Small errors become entrance bottlenecks.",
                ),
                (
                    "Can you enforce late seating politely?",
                    "Yes. I would explain the rule, offer the lobby monitor feed if available, and seat at the next approved break. Friends do not get special doors. Consistency protects performers and other patrons. Politeness is stating the rule without sarcasm.",
                ),
            ],
        ),
        _interview(
            38,
            "Undergraduate Grant Reviewer",
            "A student research fund needs reviewers who score short proposals with a rubric.",
            "Be consistent, humble about fields, and bias-aware.",
            [
                (
                    "Why serve as a grant reviewer?",
                    "I benefited from a small grant that paid for survey software, and I want the process to feel fair to applicants outside famous labs. Rubric-based scoring is a skill I want to practice. Reviewing also teaches me what clarity looks like in methods writing. Service here improves the research culture.",
                ),
                (
                    "How do you score a proposal outside your major?",
                    "I rely on the rubric's clarity, feasibility, and mentoring plan criteria rather than pretending deep subject expertise. I flag jargon I cannot parse as a clarity issue, not as intellectual failure. I would consult the faculty chair if safety claims confuse me. Cross-disciplinary respect matters.",
                ),
                (
                    "Describe checking your bias.",
                    "I read proposals in random order, hide applicant photos when possible, and write a one-sentence justification tied to rubric cells before seeing others' scores. If I notice affinity for a project similar to mine, I double-check standards. Bias control is procedural. I welcome calibration meetings.",
                ),
                (
                    "What would you do with a conflict of interest?",
                    "I would recuse myself from a friend's proposal or one from my own lab group and ask for a replacement reviewer. Undisclosed conflicts damage trust in the fund. Reporting early is the ethical move. The process is larger than one person's curiosity.",
                ),
            ],
        ),
        _interview(
            39,
            "Quiet Hours Peer Mediator",
            "Residence life seeks mediators for low-level noise and shared-space disputes.",
            "Stay neutral and solution-focused.",
            [
                (
                    "What qualifies you for peer mediation?",
                    "Roommates asked me to help set a quiet-hours chart last year, and the written plan reduced repeat arguments. I listen to both sides before proposing options. I am not interested in declaring winners. Mediation succeeds when people leave with a trial agreement and a check-in date.",
                ),
                (
                    "How do you start a mediation session?",
                    "I set norms—no interruptions, focus on behaviors not character—and ask each person for a preferred outcome. Then I restate interests to confirm understanding. Starting with rules lowers heat. I keep sessions short enough to stay productive.",
                ),
                (
                    "Describe a compromise you facilitated.",
                    "Two suite mates fought about kitchen cleaning. We agreed on a rotating checklist photo posted weekly instead of vague promises. The photo made accountability less personal. Concrete systems beat apologies alone.",
                ),
                (
                    "When would you escalate beyond mediation?",
                    "If safety threats, harassment, or repeated policy breaches appear, I stop mediation and involve professional staff. Mediation is not for everything. Knowing the boundary protects residents. I would not promise secrecy that policy forbids.",
                ),
            ],
        ),
        _interview(
            40,
            "Data Desk Visualization Helper",
            "The library data desk wants helpers who guide students to choose ethical, readable charts.",
            "Prioritize honesty over decoration.",
            [
                (
                    "Why help with data visualization?",
                    "Charts persuade quickly, so misleading axes harm academic conversations. I want to help students match chart type to variable type and label clearly. I enjoy the moment when a messy table becomes a readable figure. Ethics and aesthetics belong together.",
                ),
                (
                    "How do you warn someone about a truncated y-axis?",
                    "I would show the same data with a zero baseline and ask what impression changes, then explain when truncation might be justified with a clear note. Demonstrations teach faster than scolding. I would also mention audience and assignment rubric. Honesty includes documenting transformations.",
                ),
                (
                    "Describe a visualization mistake you fixed.",
                    "I once used a pie chart with nine tiny categories that nobody could read. A ranked bar chart fixed it in minutes. Choosing simpler encodings is often the real sophistication. I share that story to reduce perfection anxiety.",
                ),
                (
                    "What tools can you support?",
                    "I can help with spreadsheet charts and basic R or Python plotting for common graphs, and I know when to refer specialists for interactive dashboards. I will not claim expertise I lack. Clear referrals are part of good service. I keep a tip sheet for exports to PDF.",
                ),
            ],
        ),
    ]
)

# --- Dialogue Shadow 16–30 ---
BATCH2_LS.extend(
    [
        _dial(16, "Booking a Study Room", [
            "A: Hi — I'd like to book a study room for four people tomorrow.",
            "B: Sure. Do you prefer morning or evening?",
            "A: Evening, after six, near the stacks if possible.",
            "B: Room B fourteen is free from six-thirty to eight-thirty.",
            "A: Perfect. Does it include a whiteboard and markers?",
            "B: Whiteboard yes; grab markers at the desk with your ID.",
            "A: Can I extend the booking if the next slot is empty?",
            "B: Yes, starting fifteen minutes before your end time.",
            "A: Great. Please confirm under my student email.",
            "B: Done — you'll get a calendar invite within a minute.",
        ]),
        _dial(17, "Clarify Citation Style", [
            "A: For the history paper, is it Chicago notes or author-date?",
            "B: Notes and bibliography for this course.",
            "A: Do footnotes count toward the page limit?",
            "B: No, but keep them concise.",
            "A: What about citations for archival scans?",
            "B: Include collection name, box, and URL if stable.",
            "A: Should I use Ibid. for repeated sources?",
            "B: Yes, following the handout examples.",
            "A: Thanks — I'll fix my draft tonight.",
            "B: Bring one sample footnote to office hours if you want a check.",
        ]),
        _dial(18, "Swap Lab Sections", [
            "A: Is it possible to swap into the Wednesday lab section?",
            "B: Only if someone swaps out and the instructor approves.",
            "A: Where do I post a swap request?",
            "B: Use the course forum thread labeled 'section swaps.'",
            "A: Does the portal update automatically after we agree?",
            "B: No — both of you must submit the swap form.",
            "A: How long does approval usually take?",
            "B: About two business days before the next lab meeting.",
            "A: I'll post today and watch for a reply.",
            "B: Good. Don't miss Monday's lab until the swap is official.",
        ]),
        _dial(19, "Guest Meal Pass", [
            "A: Can I bring a visiting friend to dinner tonight?",
            "B: Yes, with a guest meal if your plan includes one.",
            "A: How do I check how many guest meals I have left?",
            "B: Open the dining app under 'benefits remaining.'",
            "A: Does my friend need to show ID?",
            "B: A photo ID helps at the door during busy hours.",
            "A: Are guest meals valid at the food trucks too?",
            "B: Only at dining halls this semester.",
            "A: Okay — we'll go to the south hall at six.",
            "B: Arrive a bit early; guest lines form fast after six.",
        ]),
        _dial(20, "Request Soft Deadline", [
            "A: Professor, I have a fever and may miss tomorrow's quiz.",
            "B: I'm sorry you're sick. Have you seen health services?",
            "A: I have an appointment this afternoon.",
            "B: Email me the visit confirmation and rest today.",
            "A: Could I take a makeup quiz next week?",
            "B: Yes — Wednesday during office hours.",
            "A: Will it be the same format?",
            "B: Same skills, different questions.",
            "A: Thank you. I'll send the confirmation after the visit.",
            "B: Feel better. Don't come to class contagious.",
        ]),
        _dial(21, "Find a Quiet Printer", [
            "A: The main library printers are all queued up.",
            "B: Try the satellite lab in the language building.",
            "A: Does it use the same print credits?",
            "B: Yes — same campus account.",
            "A: Is it open after nine?",
            "B: Until eleven on weeknights.",
            "A: Do I need a special door code?",
            "B: Your ID badge unlocks it after six.",
            "A: Perfect. I'll head there now.",
            "B: If it's full, the union business center is Plan C.",
        ]),
        _dial(22, "Club Storage Key", [
            "A: Who has the key to the club storage closet?",
            "B: The treasurer this month — Maya.",
            "A: I need the banner for Friday's table.",
            "B: Text her; she usually replies within an hour.",
            "A: Can I sign the key out myself?",
            "B: Only officers on the authorized list.",
            "A: I'm the outreach officer — I should be listed.",
            "B: Then the front desk can check your ID and hand it over.",
            "A: I'll go there after class.",
            "B: Return it before five or the closet stays locked all weekend.",
        ]),
        _dial(23, "Software License VPN", [
            "A: The statistics software says my license is offline.",
            "B: Are you connected through the campus VPN?",
            "A: Not yet — I'm in my apartment.",
            "B: Connect to VPN, then restart the license manager.",
            "A: Which VPN profile should I choose?",
            "B: 'Campus-full' — not the library-only profile.",
            "A: How long do license checkouts last?",
            "B: Twelve hours; renew if your session runs longer.",
            "A: Thanks. I'll try that before filing a ticket.",
            "B: If it still fails, note the exact error code for IT.",
        ]),
        _dial(24, "Peer Review Timing", [
            "A: When do we exchange drafts for peer review?",
            "B: Upload by Sunday night; comments due Tuesday noon.",
            "A: Is there a minimum comment length?",
            "B: At least three specific suggestions, not just praise.",
            "A: Can I review a friend in our same group?",
            "B: No — the system assigns across groups.",
            "A: What if my partner uploads late?",
            "B: Message the TA; don't wait silently.",
            "A: Understood. I'll set a reminder for Sunday afternoon.",
            "B: Good. Late uploads delay everyone downstream.",
        ]),
        _dial(25, "Campus Job Timesheet", [
            "A: My timesheet isn't showing yesterday's shift.",
            "B: Did you clock out on the tablet or on paper?",
            "A: On paper — the tablet was frozen.",
            "B: Give the paper to your supervisor before Friday.",
            "A: Will that still meet payroll for this period?",
            "B: Yes, if it's entered by noon Friday.",
            "A: Should I also note the tablet problem?",
            "B: Please — IT tracks repeat freezes.",
            "A: I'll scan the sheet and email it today.",
            "B: Keep the original until your pay stub looks correct.",
        ]),
        _dial(26, "Reserve a Recorder", [
            "A: I'd like to borrow an audio recorder for interviews.",
            "B: For how many days?",
            "A: Two days — Thursday pickup, Saturday return.",
            "B: We have one left; bring a charged SD card.",
            "A: Does it come with a lapel microphone?",
            "B: Yes, in the case — test it before you leave.",
            "A: What is the late fee?",
            "B: Ten dollars per day, billed to your account.",
            "A: I'll set two return reminders.",
            "B: Sign here and keep the checkout email.",
        ]),
        _dial(27, "Explain a Hold on Registration", [
            "A: The portal says I have a registration hold.",
            "B: Open the holds tab — which office is listed?",
            "A: Immunization compliance.",
            "B: Upload your records to the health portal.",
            "A: How long after upload does the hold clear?",
            "B: Usually one to two business days.",
            "A: Can I still browse courses meanwhile?",
            "B: Browse yes; enroll no until it clears.",
            "A: I'll upload tonight.",
            "B: After uploading, email health services with your ID number.",
        ]),
        _dial(28, "Share Lab Data Ethically", [
            "A: Can I send our group's raw data to a friend in another section?",
            "B: Not without the instructor's permission.",
            "A: Even if we already finished the analysis?",
            "B: Yes — data rules still apply.",
            "A: What if they only want the cleaned spreadsheet?",
            "B: Ask the TA in writing and wait for a yes.",
            "A: Okay. I'll tell my friend to request access properly.",
            "B: Thanks for checking before sharing.",
            "A: I don't want an integrity case over a favor.",
            "B: Smart. When in doubt, ask first.",
        ]),
        _dial(29, "Move Office Hours Online", [
            "A: Will office hours be in person tomorrow?",
            "B: Switching to Zoom because of the transit strike.",
            "A: Same time as usual?",
            "B: Yes — link is at the top of the course page.",
            "A: Should we enable waiting room?",
            "B: Already on; I'll admit students one at a time.",
            "A: Can I ask about the problem set grading?",
            "B: Of course — have your draft open to share.",
            "A: See you online at three.",
            "B: Send a chat message if you get disconnected.",
        ]),
        _dial(30, "Campus Lost Phone", [
            "A: I left my phone in the lecture hall after Chem.",
            "B: Have you checked with the department office yet?",
            "A: Not yet — class just ended twenty minutes ago.",
            "B: Go now; they hold found devices until five.",
            "A: If it's not there, what's next?",
            "B: Campus Safety lost-and-found, then freeze accounts if needed.",
            "A: Can you unlock the hall if it's empty?",
            "B: Facilities can, but Safety should escort after hours.",
            "A: I'll run to the office first.",
            "B: Good luck — hope it's sitting on a chair.",
        ]),
    ]
)

# --- Fluency Drill 11–25 ---
BATCH2_LS.extend(
    [
        _drill(
            11,
            "Final Consonant Clusters",
            "Keep /sts/, /sks/, /pts/ audible at ends of words without adding vowels.",
            "Clusters vary slightly by accent; aim for intelligibility, not caricature.",
            [
                "The scientists asked for the results of the tests.",
                "She asks for desks near the exits during exams.",
                "He accepts the facts and adapts his drafts.",
                "The projects' risks surfaced in the last reports.",
                "Please list costs, texts, and next steps separately.",
                "Guests requested maps of the campus districts.",
                "My notes capture contrasts, concepts, and contexts.",
                "Practice soft endings: asks, desks, accepts, adapts.",
            ],
        ),
        _drill(
            12,
            "Contrastive Stress for Correction",
            "Stress the corrected word; keep the rest lighter.",
            "Contrastive stress is shared across English varieties; use it to repair meaning.",
            [
                "I said WEDNESDAY, not Tuesday, for the review.",
                "We need the DRAFT, not the final, in the folder.",
                "He teaches BIOLOGY, not chemistry, this term.",
                "Put the citation in the FOOTNOTE, not the caption.",
                "I can meet at FOUR, not at three-thirty.",
                "She meant the NORTH gate, not the south gate.",
                "Submit the PDF, not the editable DOCUMENT.",
                "My question is about METHODS, not results.",
            ],
        ),
        _drill(
            13,
            "List Intonation Patterns",
            "Rise on early items; fall on the final item.",
            "List tunes differ by region; clear final fall helps listeners know you finished.",
            [
                "Bring a laptop, a charger, and your student ID.",
                "We reviewed theory, methods, and limitations.",
                "The fair includes tech, nonprofit, and public-sector booths.",
                "Please read chapters one, two, and four.",
                "Office hours are Monday, Wednesday, and Friday.",
                "Pack goggles, a notebook, and closed-toe shoes.",
                "I applied to tutoring, research, and housing jobs.",
                "The talk covered causes, evidence, and next steps.",
            ],
        ),
        _drill(
            14,
            "Chunking Long Noun Phrases",
            "Group modifiers; avoid equal stress on every word.",
            "Academic English stacks nouns; chunking aids TOEFL clarity across accents.",
            [
                "the campus / sustainability office / internship application",
                "a peer-reviewed / environmental science / journal article",
                "the undergraduate / research symposium / poster session",
                "first-year / writing seminar / portfolio guidelines",
                "the residence life / quiet hours / policy reminder",
                "an encrypted / student health / portal message",
                "the financial aid / satisfactory progress / appeal form",
                "a double-blind / psychology lab / consent protocol",
            ],
        ),
        _drill(
            15,
            "Polite Softeners Without Mumble",
            "Keep hedges clear; do not swallow 'could' and 'maybe.'",
            "Softening exists in many English varieties; clarity still matters for scoring.",
            [
                "Could you possibly clarify the rubric section on sources?",
                "I was wondering whether an extension is possible.",
                "It might help to look at one example together.",
                "Would you mind repeating the registration deadline?",
                "Perhaps we could divide the chapters by Thursday.",
                "I think this graph may need a clearer title.",
                "Do you happen to have a spare lab handout?",
                "If you have a moment, could we review my outline?",
            ],
        ),
        _drill(
            16,
            "Number and Date Clarity",
            "Say numbers in thought groups; confirm years and times.",
            "Date formats vary internationally; speak them unambiguously for campus life.",
            [
                "The midterm is on March fourteenth at nine-thirty.",
                "Please arrive by fourteen ten for the shuttle.",
                "My ID number ends in five three eight.",
                "Office hours run from thirteen hundred to fifteen hundred.",
                "The grant awards up to two thousand five hundred dollars.",
                "Submit version three point two before Friday.",
                "We need twelve copies, not twenty.",
                "The building opens at eight o'clock sharp.",
            ],
        ),
        _drill(
            17,
            "Repair and Clarification Phrases",
            "Use fixed repair lines; then restate the content word.",
            "Repair strategies help all English users in noisy or fast talk.",
            [
                "Sorry — I meant the rubric, not the syllabus.",
                "Let me rephrase that more clearly.",
                "Did you say office hours or online hours?",
                "What I meant was a one-page abstract.",
                "Could you say that last part again?",
                "In other words, the sample was not random.",
                "To clarify, the deadline is tonight at midnight.",
                "I misspoke — the lab is in South Hall, not North.",
            ],
        ),
        _drill(
            18,
            "Emphasis with Do Does Did",
            "Use emphatic auxiliaries for correction or insistence.",
            "Emphatic do appears widely; keep vowel quality clear.",
            [
                "I did submit the form before Friday.",
                "She does understand the main theorem.",
                "We do need a control condition.",
                "He did email the mentor yesterday.",
                "They do offer a payment plan.",
                "I do want feedback on the methods slide.",
                "The results do support the second claim.",
                "Please do check the spam folder for the code.",
            ],
        ),
        _drill(
            19,
            "Smooth For To Of Sequences",
            "Keep preposition chains light; stress content nouns.",
            "Function-word reduction is common; do not erase them entirely on TOEFL.",
            [
                "This is a guide for students new to lab safety.",
                "We need approval from the committee for the survey.",
                "Here is a summary of the article for your notes.",
                "I sent a request to the office for a letter.",
                "Bring a list of questions for the advisor.",
                "She wrote a review of the study for class.",
                "They set a date for the meeting with mentors.",
                "He asked for feedback on the design of the poster.",
            ],
        ),
        _drill(
            20,
            "Rising Check-Questions",
            "End confirmation checks with a gentle rise.",
            "Check-questions invite response; keep them sincere, not theatrical.",
            [
                "You're free after lab, right?",
                "This is the north entrance, isn't it?",
                "We need goggles today, correct?",
                "The quiz is open-book, yeah?",
                "I should upload a PDF, okay?",
                "Office hours moved to Zoom, right?",
                "We're meeting at the fountain, yes?",
                "The form needs a signature, doesn't it?",
            ],
        ),
        _drill(
            21,
            "Academic Stance Verbs",
            "Differentiate 'suggest,' 'show,' 'prove,' and 'imply' with calm stress.",
            "Stance verbs are TOEFL gold; avoid claiming 'prove' too easily.",
            [
                "The data suggest a modest improvement after tutoring.",
                "These results show a difference between the two groups.",
                "The authors imply a policy change but do not test it.",
                "We cannot prove causation from this survey alone.",
                "The figure indicates a seasonal pattern in usage.",
                "Prior studies argue for a stronger training effect.",
                "My analysis supports the second interpretation.",
                "The limitation cautions against wide generalization.",
            ],
        ),
        _drill(
            22,
            "Shadow Speed Ladder",
            "Say each line slow, then medium, then clearer-fast.",
            "Speed ladders train fluency without sacrificing endings.",
            [
                "I outline first, then I add one example.",
                "Please pause between reasons, not mid-phrase.",
                "Clear vowels matter more than racing the clock.",
                "Record once for flow, then once for precision.",
                "Short silent gaps beat spoken fillers.",
                "Finish the last word before you breathe.",
                "Keep volume steady through the final clause.",
                "End with a complete sentence every time.",
            ],
        ),
        _drill(
            23,
            "Minimal Pair Awareness Ship Sheep",
            "Lengthen the vowel in 'sheep'; keep 'ship' shorter.",
            "Vowel quality differs by accent; contrast still aids listening flexibility.",
            [
                "The research ship collected sheep population data near shore.",
                "Please sit in this seat near the screen.",
                "Bit by bit, beat the habit of clipping vowels.",
                "Fill the form fully before you feel rushed.",
                "Sleep schedules shape speech clarity in early classes.",
                "He listed the least likely outcomes first.",
                "We need a cheap chip for the lab kit demo.",
                "Keep peak and pick distinct when you give directions.",
            ],
        ),
        _drill(
            24,
            "Topic-Comment Pausing",
            "Pause lightly after the topic noun phrase.",
            "Topic-comment rhythm helps listeners across English varieties.",
            [
                "The registration hold / cleared after I uploaded records.",
                "My study group / meets in the atrium on Thursdays.",
                "The guest lecture / moved to the field house.",
                "This dataset / needs a clearer codebook.",
                "Campus transit / runs less often on Sundays.",
                "The consent form / explains how to withdraw.",
                "Our poster draft / still lacks a limitations box.",
                "Quiet hours / start earlier during finals week.",
            ],
        ),
        _drill(
            25,
            "Closing Lines Without Trail-Off",
            "Keep energy through the last stressed syllable.",
            "Trail-off hurts TOEFL delivery; practice decisive endings.",
            [
                "That is why I would choose the morning section.",
                "In short, the internship offers stronger mentoring.",
                "For these reasons, I support the library proposal.",
                "Overall, the evidence favors the second method.",
                "To summarize, sleep routines affect attention in class.",
                "I appreciate your time and welcome any questions.",
                "Thank you for considering my application today.",
                "I will revise the outline and send it tonight.",
            ],
        ),
    ]
)

# --- Vocabulary List 21–35 ---
BATCH2_LS.extend(
    [
        _vocab(
            21,
            "Education Policy",
            [
                ("accountability", "responsibility for outcomes and decisions", "accountability measures; public accountability", "Schools faced new accountability rules tied to graduation rates."),
                ("equity", "fairness in access and opportunity", "equity gap; promote equity", "The plan aimed to improve equity in tutoring access."),
                ("inclusion", "practice of involving diverse participants fully", "inclusion policy; classroom inclusion", "Inclusion required captions on all lecture videos."),
                ("remediation", "support to rebuild foundational skills", "remediation course; need remediation", "Students placed into remediation still earned credit later."),
                ("articulation", "formal alignment of courses across institutions", "articulation agreement; articulation pathway", "The articulation agreement mapped community-college credits to majors."),
                ("cohort", "a group sharing a program timeline", "cohort model; entering cohort", "Our cohort met weekly during the first semester."),
                ("capstone", "culminating project near degree completion", "capstone course; capstone presentation", "Her capstone evaluated a campus recycling pilot."),
                ("prerequisite", "required prior course or condition", "meet a prerequisite; prerequisite knowledge", "Calculus is a prerequisite for the modeling elective."),
                ("pedagogy", "method and practice of teaching", "inclusive pedagogy; pedagogy workshop", "The faculty discussed pedagogy for large lectures."),
                ("assessment", "process of evaluating learning", "formative assessment; assessment rubric", "Weekly quizzes provided low-stakes assessment."),
                ("retention", "keeping students enrolled through completion", "retention rate; improve retention", "Mentoring programs raised first-year retention."),
                ("transferable", "able to count toward another program", "transferable credit; transferable skill", "Not all elective hours were transferable."),
                ("orientation", "introduction program for new members", "orientation week; orientation leader", "Orientation explained advising and safety resources."),
                ("advisor", "person guiding academic planning", "faculty advisor; meet an advisor", "My advisor helped balance labs and language study."),
            ],
        ),
        _vocab(
            22,
            "Climate & Energy",
            [
                ("carbon", "element central to greenhouse gases and fuels", "carbon emissions; carbon footprint", "The report tracked carbon emissions from campus heating."),
                ("grid", "network delivering electricity", "power grid; grid reliability", "Storms tested the regional power grid."),
                ("efficiency", "useful output relative to input energy", "energy efficiency; efficiency gains", "LED lighting improved energy efficiency in dorms."),
                ("transition", "shift from one system to another", "energy transition; transition plan", "The city published an energy transition timeline."),
                ("storage", "holding energy for later use", "battery storage; storage capacity", "Storage capacity limited how much solar could be used at night."),
                ("offset", "compensation for emissions elsewhere", "carbon offset; offset program", "Critics questioned the quality of the carbon offsets."),
                ("footprint", "total measured environmental impact", "ecological footprint; reduce footprint", "Meal choices can shrink a student's footprint."),
                ("adaptation", "adjustment to actual climate impacts", "climate adaptation; adaptation strategy", "Flood gates were part of the adaptation strategy."),
                ("mitigate", "to make less severe", "mitigate risk; mitigate emissions", "Trees can mitigate localized heat somewhat."),
                ("renewables", "energy sources replenished naturally", "expand renewables; renewables mix", "Renewables supplied a growing share of summer power."),
                ("leakage", "unintended escape of gas or benefit shift", "methane leakage; carbon leakage", "Pipeline leakage reduced climate gains."),
                ("electrify", "to convert systems to electric power", "electrify transit; electrify heating", "The plan would electrify the campus bus fleet."),
                ("baseline", "reference level for comparison", "baseline emissions; baseline year", "Savings were measured against a 2019 baseline."),
                ("throughput", "amount processed in a period", "energy throughput; data throughput", "Higher throughput strained the aging transformers."),
            ],
        ),
        _vocab(
            23,
            "Media Literacy",
            [
                ("source", "origin of information", "primary source; verify the source", "Always identify the source before sharing a claim."),
                ("headline", "title summarizing a news story", "misleading headline; headline claim", "The headline overstated what the study found."),
                ("byline", "line naming the author", "check the byline; under the byline", "The byline listed a staff science writer."),
                ("paywall", "restriction requiring payment for content", "behind a paywall; paywall access", "The full methods section sat behind a paywall."),
                ("viral", "spreading rapidly online", "go viral; viral post", "A misleading chart went viral before fact-checkers responded."),
                ("algorithmic", "driven by automated ranking rules", "algorithmic feed; algorithmic bias", "Algorithmic feeds can narrow what users see."),
                ("verification", "process of confirming accuracy", "verification step; identity verification", "Verification delayed publication by one day."),
                ("attribution", "crediting the origin of words or media", "proper attribution; lack of attribution", "Images need attribution even when shared casually."),
                ("deepfake", "synthetic media that imitates real people", "detect deepfakes; deepfake audio", "The workshop taught signs of deepfake video."),
                ("context", "surrounding information that shapes meaning", "out of context; provide context", "The quote was cut out of context."),
                ("correction", "published fix to an earlier error", "issue a correction; correction notice", "The paper issued a correction on the sample size."),
                ("engagement", "user interactions with content", "engagement metrics; drive engagement", "Outrage often boosts engagement more than accuracy."),
                ("saturation", "point of overwhelming volume", "news saturation; market saturation", "During crises, news saturation can numb readers."),
                ("literacy", "ability to interpret a media form", "media literacy; digital literacy", "Media literacy is now part of first-year seminars."),
            ],
        ),
        _vocab(
            24,
            "Urban Planning",
            [
                ("zoning", "rules governing land use by area", "zoning code; rezoning request", "Zoning limited café seating on that block."),
                ("density", "people or buildings per unit area", "housing density; dense neighborhood", "Higher density can support frequent transit."),
                ("corridor", "linear route for travel or development", "transit corridor; commercial corridor", "New housing clustered along the transit corridor."),
                ("setback", "required distance from property lines", "building setback; setback rule", "The setback kept façades aligned on the street."),
                ("mixed-use", "combining residential and commercial functions", "mixed-use development; mixed-use zoning", "A mixed-use building put shops under apartments."),
                ("walkability", "ease and safety of traveling on foot", "walkability score; improve walkability", "Better lighting raised nighttime walkability."),
                ("infill", "new building on vacant urban parcels", "infill housing; infill project", "Infill reduced pressure to expand city edges."),
                ("easement", "legal right to use another's land for a purpose", "utility easement; access easement", "A utility easement blocked fencing along the lot."),
                ("stakeholder", "party with an interest in a decision", "stakeholder meeting; key stakeholders", "Cyclists were stakeholders in the lane redesign."),
                ("amenities", "useful or pleasant neighborhood features", "local amenities; public amenities", "Parks and clinics count as public amenities."),
                ("congestion", "overcrowding that slows movement", "traffic congestion; congestion pricing", "Congestion worsened near the stadium on game days."),
                ("retrofit", "upgrade an existing structure", "retrofit buildings; energy retrofit", "Schools received grants to retrofit ventilation."),
                ("parcel", "defined plot of land", "vacant parcel; parcel map", "The vacant parcel became a community garden."),
                ("ordinance", "local law", "city ordinance; noise ordinance", "A new ordinance limited overnight construction noise."),
            ],
        ),
        _vocab(
            25,
            "Lab & Field Methods",
            [
                ("protocol", "standardized procedure", "follow the protocol; safety protocol", "The protocol required duplicate measurements."),
                ("calibration", "adjustment of an instrument to a standard", "calibration curve; needs calibration", "The probe failed calibration and was replaced."),
                ("replicate", "repeated run of the same procedure", "biological replicate; technical replicate", "Three replicates reduced random error."),
                ("blank", "sample without the analyte for comparison", "method blank; run a blank", "A blank confirmed the solvent was clean."),
                ("artifact", "misleading signal from the method itself", "measurement artifact; imaging artifact", "Vibration created an artifact in the reading."),
                ("transect", "line along which observations are made", "sample transect; walk a transect", "We counted plants along a fifty-meter transect."),
                ("specimen", "individual sample for study", "preserve a specimen; specimen label", "Each specimen received a unique code."),
                ("contamination", "unwanted introduction of material", "avoid contamination; sample contamination", "Dirty gloves risked contamination of the culture."),
                ("fieldwork", "research conducted outside the lab", "fieldwork season; fieldwork notes", "Fieldwork paused during the lightning warning."),
                ("instrument", "tool used for measurement", "calibrate the instrument; sensitive instrument", "The instrument logged temperature every minute."),
                ("threshold", "value at which a response begins", "detection threshold; above threshold", "Signals below the threshold were discarded."),
                ("metadata", "data describing other data", "metadata file; incomplete metadata", "Missing metadata made the dataset hard to reuse."),
                ("custody", "documented control of a sample", "chain of custody; custody form", "Chain-of-custody forms tracked the water samples."),
                ("pilot", "small preliminary trial", "pilot study; pilot survey", "A pilot revealed confusing survey wording."),
            ],
        ),
        _vocab(
            26,
            "Workplace Communication",
            [
                ("agenda", "planned list of meeting topics", "meeting agenda; set the agenda", "The agenda put budget votes last."),
                ("actionable", "clear enough to act on", "actionable feedback; actionable item", "She asked for actionable comments, not vague praise."),
                ("follow-up", "later communication continuing a matter", "send a follow-up; follow-up email", "A follow-up confirmed the decision in writing."),
                ("bandwidth", "available capacity to take on work", "limited bandwidth; bandwidth this week", "I lack bandwidth for another committee now."),
                ("deadline", "time when work is due", "hard deadline; miss a deadline", "The printer deadline is harder than the draft deadline."),
                ("escalate", "refer an issue to higher authority", "escalate a problem; escalate politely", "We escalated the outage after two hours."),
                ("deliverable", "tangible output owed to others", "key deliverable; list deliverables", "The slide deck was our main deliverable."),
                ("sync", "short alignment meeting or update", "quick sync; sync tomorrow", "Let's sync for ten minutes before the client call."),
                ("ownership", "responsibility for a task's outcome", "take ownership; clear ownership", "Ownership of the spreadsheet was unclear."),
                ("blocker", "obstacle preventing progress", "remove a blocker; current blocker", "Missing credentials were the blocker."),
                ("handoff", "transfer of work between people", "clean handoff; handoff notes", "A written handoff prevented duplicated emails."),
                ("priority", "rank of importance", "top priority; prioritize tasks", "Safety was the top priority during the outage."),
                ("clarification", "act of making meaning clearer", "ask for clarification; need clarification", "I requested clarification on the acceptance criteria."),
                ("stakeholder", "person affected by a project", "update stakeholders; stakeholder input", "Weekly notes kept stakeholders aligned."),
            ],
        ),
        _vocab(
            27,
            "Cognitive Science Basics",
            [
                ("attention", "selective focus of mental resources", "sustained attention; attention span", "Notifications fragment sustained attention."),
                ("encoding", "process of forming a memory trace", "encoding strategy; shallow encoding", "Elaborative encoding improved recall on the quiz."),
                ("retrieval", "accessing stored information", "retrieval practice; retrieval cue", "Retrieval practice beat rereading for long-term memory."),
                ("schema", "organized knowledge structure", "activate a schema; existing schema", "Prior schemas shaped how we interpreted the story."),
                ("heuristic", "mental shortcut for decisions", "use a heuristic; availability heuristic", "The availability heuristic skewed risk judgments."),
                ("inhibition", "suppression of a response or thought", "cognitive inhibition; inhibitory control", "Inhibitory control helps ignore irrelevant cues."),
                ("load", "demand placed on processing systems", "cognitive load; high load", "Split-attention formats raise cognitive load."),
                ("priming", "exposure that influences later response", "semantic priming; primed participants", "Priming with related words sped recognition."),
                ("metacognition", "thinking about one's own thinking", "metacognitive skill; metacognition check", "Metacognition helps students choose better study tactics."),
                ("transfer", "applying learning to a new context", "far transfer; transfer of learning", "Far transfer to new problem types was limited."),
                ("chunking", "grouping items to ease memory", "chunking strategy; chunk information", "Chunking phone digits improves short-term recall."),
                ("interference", "competition that disrupts memory", "proactive interference; reduce interference", "Similar vocabulary lists caused interference."),
                ("salience", "how much a stimulus stands out", "perceptual salience; high salience", "Bright errors had high salience on the dashboard."),
                ("automatize", "make a skill require less attention", "automatize steps; become automatic", "Drill helped automatize unit conversions."),
            ],
        ),
        _vocab(
            28,
            "Global Trade Terms",
            [
                ("tariff", "tax on imported goods", "impose a tariff; tariff rate", "A higher tariff raised consumer prices for appliances."),
                ("quota", "quantity limit on imports or production", "import quota; quota system", "The quota capped foreign steel volumes."),
                ("logistics", "organization of moving goods", "logistics chain; logistics cost", "Logistics delays slowed bookstore restocking."),
                ("supplier", "provider of goods or inputs", "supplier contract; reliable supplier", "The lab changed suppliers after quality issues."),
                ("invoice", "bill for goods or services", "pay an invoice; invoice number", "Accounts payable matched each invoice to a purchase order."),
                ("customs", "agency or process controlling border trade", "customs clearance; customs form", "Customs clearance added two days to delivery."),
                ("commodity", "standardized traded good", "commodity price; commodity market", "Coffee is traded as a global commodity."),
                ("subsidy", "government financial support", "export subsidy; farm subsidy", "Critics argued the subsidy distorted competition."),
                ("arbitrage", "profit from price differences across markets", "arbitrage opportunity; price arbitrage", "Traders sought arbitrage between regional markets."),
                ("embargo", "official ban on trade", "trade embargo; impose an embargo", "An embargo blocked certain technology exports."),
                ("freight", "goods transported in bulk", "freight costs; freight train", "Freight costs rose with fuel prices."),
                ("incoterm", "standard trade term defining shipping duties", "choose an Incoterm; Incoterms rules", "The contract specified an Incoterm for delivery risk."),
                ("ledger", "record of financial transactions", "digital ledger; general ledger", "Each shipment posted to the ledger the same day."),
                ("margin", "difference between cost and price", "profit margin; thin margin", "Thin margins left little room for returns."),
            ],
        ),
        _vocab(
            29,
            "Public Speaking Craft",
            [
                ("hook", "opening that captures attention", "opening hook; narrative hook", "She opened with a hook about a missed bus."),
                ("cadence", "rhythmic flow of speech", "steady cadence; change cadence", "A slower cadence helped the definition land."),
                ("projection", "voice strength to reach an audience", "vocal projection; project to the back", "Projection mattered in the unmiked hall."),
                ("gesture", "meaningful hand or body movement", "natural gesture; distracting gesture", "One deliberate gesture marked the transition."),
                ("signpost", "phrase that signals structure", "verbal signpost; signpost language", "'Second' is a simple verbal signpost."),
                ("impromptu", "spoken with little preparation", "impromptu talk; impromptu response", "Impromptu answers still need a clear stance."),
                ("rehearse", "practice a performance", "rehearse aloud; dress rehearsal", "Rehearse with a timer, not only in your head."),
                ("filler", "empty sound used while planning", "filler word; reduce fillers", "Silent pauses replaced filler words."),
                ("rapport", "sense of connection with listeners", "build rapport; audience rapport", "A brief shared campus reference built rapport."),
                ("visual", "image supporting a talk", "visual aid; cluttered visual", "One clean visual beat five crowded slides."),
                ("takeaway", "main point listeners should remember", "key takeaway; memorable takeaway", "End with one takeaway sentence."),
                ("pacing", "speed management across a talk", "adjust pacing; uneven pacing", "Pacing slowed on data and sped on examples."),
                ("microphone", "device amplifying voice", "lapel microphone; microphone check", "A microphone check prevented opening feedback."),
                ("debrief", "structured reflection after performance", "post-talk debrief; debrief notes", "The debrief named one habit to keep and one to change."),
            ],
        ),
        _vocab(
            30,
            "Ethics in Research",
            [
                ("consent", "voluntary agreement to participate", "informed consent; consent form", "Informed consent explained risks and withdrawal."),
                ("anonymize", "remove identifying details", "anonymize data; anonymized file", "Researchers anonymized transcripts before sharing."),
                ("protocol", "approved research plan", "ethics protocol; follow protocol", "Any protocol change needed committee review."),
                ("beneficence", "obligation to promote wellbeing", "principle of beneficence; beneficence review", "Beneficence weighed benefits against burdens."),
                ("autonomy", "right to self-determination", "respect autonomy; participant autonomy", "Autonomy requires understandable choice, not pressure."),
                ("deception", "misleading participants about aspects of a study", "use of deception; debrief after deception", "Deception demanded a thorough debrief."),
                ("stewardship", "responsible care of resources or data", "data stewardship; stewardship role", "Stewardship included secure storage and access logs."),
                ("plagiarism", "presenting others' work as one's own", "avoid plagiarism; plagiarism case", "Missing citations triggered a plagiarism review."),
                ("retraction", "withdrawal of a published paper", "journal retraction; retract a study", "Fabrication led to retraction of the article."),
                ("conflict", "competing interests that may bias judgment", "conflict of interest; disclose conflict", "Authors disclosed a funding conflict of interest."),
                ("vulnerable", "at higher risk of coercion or harm", "vulnerable population; protect vulnerable groups", "Extra safeguards applied to vulnerable participants."),
                ("oversight", "supervisory review of conduct", "ethical oversight; oversight committee", "Independent oversight reviewed adverse events."),
                ("integrity", "honesty and consistency of methods", "research integrity; integrity training", "Integrity training covered image manipulation rules."),
                ("transparency", "openness about methods and limitations", "methodological transparency; transparency report", "Transparency included posting analysis code."),
            ],
        ),
        _vocab(
            31,
            "Digital Security Habits",
            [
                ("phishing", "fraudulent messages seeking sensitive data", "phishing email; phishing attempt", "The phishing email mimicked the registrar's tone."),
                ("authentication", "proving identity to a system", "two-factor authentication; authentication app", "Authentication apps reduce SMS interception risk."),
                ("encryption", "encoding data to limit unauthorized reading", "encrypt files; end-to-end encryption", "Encryption protected the backup drive."),
                ("credential", "login information proving access rights", "stolen credentials; credential manager", "Never reuse credentials across campus services."),
                ("patch", "software update fixing vulnerabilities", "security patch; apply a patch", "Apply patches before attackers scan for old flaws."),
                ("malware", "software designed to harm or exploit", "malware scan; malware infection", "A malware scan found a suspicious browser extension."),
                ("firewall", "system controlling network traffic", "campus firewall; firewall rule", "The firewall blocked unused remote ports."),
                ("breach", "unauthorized access to protected data", "data breach; breach notification", "Students received a breach notification within days."),
                ("permission", "authorized level of access", "app permissions; revoke permission", "Review app permissions on your phone monthly."),
                ("backup", "copy of data for recovery", "cloud backup; backup schedule", "A weekly backup saved the thesis draft."),
                ("vpn", "encrypted tunnel for network traffic", "campus VPN; VPN connection", "Use the campus VPN on public Wi-Fi."),
                ("spoofing", "faking an identity or address", "email spoofing; caller ID spoofing", "Spoofing made the fake dean email look local."),
                ("session", "period of authenticated use", "session timeout; active session", "Log out to end sessions on shared computers."),
                ("update", "install a newer software version", "automatic updates; update promptly", "Update the OS before connecting to lab networks."),
            ],
        ),
        _vocab(
            32,
            "Literary Analysis Moves",
            [
                ("motif", "recurring element with significance", "central motif; track a motif", "Water imagery forms a motif of renewal."),
                ("irony", "contrast between expectation and reality", "dramatic irony; situational irony", "Irony undercuts the narrator's confidence."),
                ("voice", "distinctive speaking presence in a text", "narrative voice; authorial voice", "The child's voice filters adult conflicts."),
                ("diction", "word choice", "elevated diction; precise diction", "Diction shifts from slang to formal legal terms."),
                ("syntax", "arrangement of words and phrases", "complex syntax; syntax pattern", "Short syntax speeds the chase scene."),
                ("allusion", "reference to another text or event", "biblical allusion; literary allusion", "The title's allusion rewards careful readers."),
                ("juxtaposition", "placing elements side by side for contrast", "sharp juxtaposition; juxtapose scenes", "Juxtaposition of feast and famine heightens critique."),
                ("ambiguity", "multiple possible meanings", "productive ambiguity; resolve ambiguity", "Ending ambiguity invites competing readings."),
                ("tone", "attitude conveyed toward subject", "ironic tone; shift in tone", "Tone darkens after the betrayal chapter."),
                ("symbol", "concrete thing standing for an idea", "recurring symbol; interpret a symbol", "The locked gate becomes a symbol of exclusion."),
                ("perspective", "vantage from which a story is told", "limited perspective; shift perspective", "A dual perspective reveals hidden motives."),
                ("structure", "organization of parts in a work", "narrative structure; structure analysis", "Circular structure returns us to the opening image."),
                ("theme", "central idea explored by a work", "develop a theme; theme statement", "One theme concerns loyalty under pressure."),
                ("close-reading", "careful analysis of textual details", "close-reading essay; practice close-reading", "Close-reading slowed us at each metaphor."),
            ],
        ),
        _vocab(
            33,
            "Health Systems Vocabulary",
            [
                ("triage", "sorting patients by urgency", "triage desk; triage protocol", "Triage sent non-urgent cases to a later clinic."),
                ("referral", "direction to another provider", "specialist referral; referral form", "A referral was required before the MRI."),
                ("coverage", "benefits provided by insurance", "insurance coverage; coverage gap", "Coverage included vaccines but not all dental care."),
                ("copay", "fixed patient fee at service", "flat copay; copay amount", "The copay for urgent care was forty dollars."),
                ("preventive", "aimed at stopping illness early", "preventive care; preventive screening", "Preventive visits were free under the plan."),
                ("chronic", "lasting a long time", "chronic condition; chronic pain", "Chronic asthma needed an updated action plan."),
                ("acute", "sudden and severe", "acute injury; acute infection", "Acute symptoms appeared overnight."),
                ("outpatient", "care without overnight hospital stay", "outpatient clinic; outpatient surgery", "Most vaccinations are outpatient procedures."),
                ("inpatient", "care involving hospital admission", "inpatient ward; inpatient stay", "Inpatient stay lasted two nights after surgery."),
                ("compliance", "following a prescribed regimen", "medication compliance; improve compliance", "Reminder apps supported medication compliance."),
                ("screening", "test to detect disease early", "cancer screening; screening rate", "Campus screening events offered blood-pressure checks."),
                ("telehealth", "care delivered remotely", "telehealth visit; telehealth option", "Telehealth reduced travel for follow-ups."),
                ("discharge", "release from clinical care", "discharge instructions; hospital discharge", "Discharge instructions listed warning signs."),
                ("epidemiology", "study of disease patterns in populations", "epidemiology course; epidemiology data", "Epidemiology tracked flu trends by week."),
            ],
        ),
        _vocab(
            34,
            "Academic Debate Language",
            [
                ("motion", "statement under debate", "debate motion; oppose the motion", "The motion concerned mandatory attendance policies."),
                ("rebuttal", "response that challenges an argument", "strong rebuttal; rebuttal speech", "Her rebuttal targeted the causal claim."),
                ("burden", "obligation to prove a claim", "burden of proof; carry the burden", "The affirmative side carries the main burden."),
                ("criterion", "standard used to judge success", "weighing criterion; meet the criterion", "Fairness was their primary criterion."),
                ("clash", "direct conflict between arguments", "point of clash; create clash", "Good debate requires clash, not parallel speeches."),
                ("flow", "notes tracking arguments across a round", "keep flow; flow sheet", "Flow helped him spot dropped arguments."),
                ("framework", "lens for evaluating the round", "interpretive framework; framework debate", "They debated the framework before the evidence."),
                ("card", "quoted evidence with citation", "read a card; evidence card", "The card included author, year, and warrant."),
                ("warrant", "reason linking evidence to claim", "strong warrant; missing warrant", "Without a warrant, the statistic floated free."),
                ("impact", "why an argument matters", "impact calculus; largest impact", "They weighed impacts on student wellbeing."),
                ("drop", "failure to answer an argument", "dropped argument; drop on flow", "A dropped argument can lose the round."),
                ("cross-ex", "cross-examination questioning period", "during cross-ex; cross-ex strategy", "Cross-ex clarified how they defined 'mandatory.'"),
                ("ballot", "judge's decision and reason", "reason for ballot; win the ballot", "The ballot cited clearer impact comparison."),
                ("resolution", "formal wording of the topic", "debate resolution; affirm the resolution", "Teams defined key terms in the resolution."),
            ],
        ),
        _vocab(
            35,
            "Campus Sustainability Ops",
            [
                ("compost", "decayed organic matter used to enrich soil", "compost bin; food compost", "Dining hall scraps went to the compost program."),
                ("diversion", "keeping waste out of landfills", "waste diversion; diversion rate", "Diversion rates rose after adding compost pickup."),
                ("audit", "systematic inspection of practices", "waste audit; energy audit", "A waste audit found recyclables in trash bags."),
                ("procurement", "process of purchasing goods", "green procurement; procurement policy", "Procurement preferred refurbished laptops."),
                ("lifecycle", "stages from production to disposal", "lifecycle cost; product lifecycle", "Lifecycle thinking included repairability."),
                ("steward", "person who cares for a shared resource", "steward a plot; building steward", "Floor stewards checked lights after events."),
                ("retrofit", "upgrade existing infrastructure", "lighting retrofit; retrofit project", "The retrofit cut hallway electricity use."),
                ("metering", "measuring resource use", "water metering; sub-metering", "Sub-metering revealed which labs used most power."),
                ("surplus", "unused excess materials", "surplus sale; surplus furniture", "Surplus furniture was redistributed to clubs."),
                ("reusable", "designed to be used multiple times", "reusable container; reusable bag", "Reusable containers earned a dining discount."),
                ("landfill", "site for burying waste", "landfill bound; reduce landfill", "Food waste need not be landfill bound."),
                ("emissions", "gases released into the air", "campus emissions; track emissions", "Emissions inventories guided heating upgrades."),
                ("circular", "keeping materials in use through reuse or recycle", "circular economy; circular design", "Circular design favored repair over replacement."),
                ("benchmark", "reference standard for comparison", "benchmark building; set a benchmark", "The residence hall became an energy benchmark."),
            ],
        ),
    ]
)


def _validate() -> None:
    assert len(BATCH2_LS) == 160, len(BATCH2_LS)
    spaces = {"toefl-listening": 0, "toefl-speaking": 0, "vocabulary": 0}
    kinds = {
        "Choose a Response": 0,
        "Conversation": 0,
        "Announcement": 0,
        "Academic Talk": 0,
        "Listen and Repeat": 0,
        "Interview": 0,
        "Dialogue Shadow": 0,
        "Fluency Drill": 0,
        "List": 0,
    }
    for doc in BATCH2_LS:
        assert {"title", "content", "category", "space"} <= set(doc)
        spaces[doc["space"]] += 1
        if doc["space"] == "toefl-listening":
            assert "Listening Replay" in doc["content"]
            assert doc["category"] == "TOEFL Listening"
        if doc["space"] == "toefl-speaking":
            assert "ToeflSpeakShadow" in doc["content"]
            assert doc["category"] == "TOEFL Speaking"
        if doc["space"] == "vocabulary":
            assert doc["category"] == "TOEFL Vocabulary"
            assert "**Definition:**" in doc["content"]
            assert "**Collocations:**" in doc["content"]
        for k in kinds:
            if f" · {k} " in doc["title"] or doc["title"].endswith(f" · {k}") or f" · {k}:" in doc["title"]:
                # titles look like "TOEFL Listening · Choose a Response 21: ..."
                pass
        title = doc["title"]
        for k in kinds:
            if f"· {k} " in title:
                kinds[k] += 1
                break
    assert spaces == {"toefl-listening": 75, "toefl-speaking": 70, "vocabulary": 15}, spaces
    assert kinds == {
        "Choose a Response": 20,
        "Conversation": 20,
        "Announcement": 15,
        "Academic Talk": 20,
        "Listen and Repeat": 20,
        "Interview": 20,
        "Dialogue Shadow": 15,
        "Fluency Drill": 15,
        "List": 15,
    }, kinds


if __name__ == "__main__":
    _validate()
    print(f"OK: {len(BATCH2_LS)} batch2 docs")







