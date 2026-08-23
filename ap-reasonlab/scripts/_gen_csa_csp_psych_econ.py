#!/usr/bin/env python3
"""Original CED-aligned practice for CSA, CSP, Psychology, Macro, and Micro."""

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
            "hints": ["Eliminate wrong choices.", "Check definitions carefully.", f"Final check: {letter}) {body}"]}

def frq(prompt, steps, answers, concept_id=None, tier=2):
    return {"id": rid("m-item"), "format": "frq_half", "prompt": prompt, "conceptId": concept_id,
            "conceptIntro": None, "difficultyTier": tier, "visibleSteps": steps,
            "blankSteps": answers if isinstance(answers, list) else [answers],
            "hints": ["State the approach first.", "Be precise with vocabulary.", "Answers in blankSteps."]}

def quiz(title, subject, desc, tags, items, minutes=40, tier=2):
    return {"id": rid("m-quiz"), "title": title, "subject": subject, "kind": "generated",
            "description": desc, "generationNote": GEN_NOTE, "estimatedMinutes": minutes,
            "tags": BASE_TAGS + tags, "items": items, "difficultyTier": tier}


CSA = "AP Computer Science A"
CSP = "AP Computer Science Principles"
PSYCH = "AP Psychology"
MACRO = "AP Macroeconomics"
MICRO = "AP Microeconomics"


QUIZZES = [
    # AP Computer Science A
    quiz(
        "AI Topic Exercises — Unit 1: Primitive Types",
        CSA,
        "CED-aligned practice with variables, arithmetic expressions, casting, and assignment.",
        ["unit-1", "primitive-types", "expressions"],
        [
            mcq(
                "What is the value of `result` after `double result = 7 / 2;` executes?",
                ["A) 2.0", "B) 3.0", "C) 3.5", "D) 4.0"],
                1,
                [
                    "Both operands of `/` are `int`, so Java performs integer division first.",
                    "`7 / 2` evaluates to `3`; assignment then widens it to `3.0`.",
                ],
                "csa-primitive-arithmetic",
            ),
            frq(
                "Given `int total = 29; int count = 4;`, write an expression that computes the decimal average and state its value.",
                [
                    "Force floating-point division by casting either operand to `double`.",
                    "`(double) total / count` becomes `29.0 / 4`.",
                ],
                ["Expression: `(double) total / count`; value: `7.25`."],
                "csa-casting",
            ),
            mcq(
                "After `int x = 5; x += 2 * 3; x--;`, what is `x`?",
                ["A) 7", "B) 9", "C) 10", "D) 11"],
                2,
                [
                    "Multiplication occurs first: `2 * 3` is `6`.",
                    "`x += 6` makes `x` 11, and `x--` makes it 10.",
                ],
                "csa-assignment",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Using Objects",
        CSA,
        "CED-aligned practice with constructors, method calls, Strings, and object references.",
        ["unit-2", "objects", "strings"],
        [
            mcq(
                'What is printed by `String s = "reason"; System.out.println(s.substring(1, 4));`?',
                ["A) rea", "B) eas", "C) easo", "D) aso"],
                1,
                [
                    "`substring(start, end)` includes `start` and excludes `end`.",
                    "Indices 1, 2, and 3 of `reason` spell `eas`.",
                ],
                "csa-string-methods",
            ),
            frq(
                'A variable contains `String word = "level";`. Give one Java expression that determines whether its first and last characters are equal, and evaluate it.',
                [
                    "Extract one-character strings at indices 0 and `word.length() - 1`.",
                    "Compare String contents with `.equals`, not `==`.",
                ],
                ['`word.substring(0, 1).equals(word.substring(word.length() - 1))` evaluates to `true`.'],
                "csa-string-comparison",
            ),
            mcq(
                "Which statement about a variable declared `Book b = null;` is correct?",
                [
                    "A) It refers to a Book whose fields have default values",
                    "B) It refers to an empty String",
                    "C) It currently refers to no object, so calling `b.getTitle()` causes a runtime exception",
                    "D) It cannot later be assigned a Book object",
                ],
                2,
                [
                    "`null` means that the reference does not designate an object.",
                    "Dereferencing it for an instance method causes `NullPointerException`.",
                ],
                "csa-object-references",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 3: Boolean Expressions and Selection",
        CSA,
        "CED-aligned practice with Boolean logic, if statements, and equivalent expressions.",
        ["unit-3", "boolean", "selection"],
        [
            mcq(
                "Which expression is equivalent to `!(age >= 13 && age <= 19)`?",
                [
                    "A) `age < 13 || age > 19`",
                    "B) `age < 13 && age > 19`",
                    "C) `age >= 13 || age <= 19`",
                    "D) `age > 13 && age < 19`",
                ],
                0,
                [
                    "Apply De Morgan's law: negate each comparison and change `&&` to `||`.",
                    "`!(age >= 13)` is `age < 13`; `!(age <= 19)` is `age > 19`.",
                ],
                "csa-demorgan",
            ),
            frq(
                "Write an if/else-if/else statement that sets `label` to `\"high\"` for scores at least 90, `\"middle\"` for scores at least 70 but below 90, and `\"low\"` otherwise.",
                [
                    "Test the most restrictive high range first.",
                    "Because the first branch removes scores at least 90, the second needs only test `score >= 70`.",
                ],
                [
                    '`if (score >= 90) label = "high"; else if (score >= 70) label = "middle"; else label = "low";'
                ],
                "csa-selection",
            ),
            mcq(
                "Why is `text != null && text.length() > 0` safe when `text` is null?",
                [
                    "A) Java changes null to an empty String",
                    "B) `&&` short-circuits, so the method call is not evaluated",
                    "C) `length()` is a static method",
                    "D) Comparing a reference with null constructs an object",
                ],
                1,
                [
                    "The left operand is false when `text` is null.",
                    "With short-circuit `&&`, Java skips the right operand once the whole expression must be false.",
                ],
                "csa-short-circuit",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Iteration",
        CSA,
        "CED-aligned practice with while loops, for loops, nested iteration, and loop reasoning.",
        ["unit-4", "iteration", "loops"],
        [
            mcq(
                "What is printed by `for (int k = 1; k <= 7; k += 2) System.out.print(k);`?",
                ["A) 1234567", "B) 1357", "C) 246", "D) 135"],
                1,
                [
                    "`k` starts at 1 and increases by 2 while it is at most 7.",
                    "The visited values are 1, 3, 5, and 7.",
                ],
                "csa-for-loops",
            ),
            frq(
                "Describe a loop that computes the sum of the decimal digits in a positive integer `n`, and apply it to `n = 5032`.",
                [
                    "Repeatedly add `n % 10`, the last digit, to an accumulator.",
                    "Replace `n` with `n / 10` using integer division until `n` is 0.",
                    "For 5032, the digits contribute `2 + 3 + 0 + 5`.",
                ],
                ["`int sum = 0; while (n > 0) { sum += n % 10; n /= 10; }`; the sum is `10`."],
                "csa-while-loops",
            ),
            mcq(
                "How many times does the body execute? `for (int r = 0; r < 3; r++) for (int c = r; c < 4; c++) count++;`",
                ["A) 6", "B) 9", "C) 10", "D) 12"],
                1,
                [
                    "For `r = 0`, the inner loop runs 4 times; for 1 it runs 3; for 2 it runs 2.",
                    "The total is `4 + 3 + 2 = 9`.",
                ],
                "csa-nested-loops",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Writing Classes",
        CSA,
        "CED-aligned practice with class design, constructors, encapsulation, and methods.",
        ["unit-5", "classes", "encapsulation"],
        [
            mcq(
                "A `Counter` class has a private instance variable `value`. Which method best preserves encapsulation while increasing the value?",
                [
                    "A) `public void increment() { value++; }`",
                    "B) `private void increment(int value) { value++; }`",
                    "C) `public static void increment() { value++; }`",
                    "D) `public int value;`",
                ],
                0,
                [
                    "An instance method can update the private state of the receiving object.",
                    "Keeping the field private and exposing a controlled public behavior preserves encapsulation.",
                ],
                "csa-encapsulation",
            ),
            frq(
                "A `Rectangle` class stores private doubles `width` and `height`. Specify a two-parameter constructor and an `area` method.",
                [
                    "The constructor name matches the class and has no return type.",
                    "Use `this` to distinguish fields from parameters.",
                    "The area method returns the product of the two instance variables.",
                ],
                [
                    "`public Rectangle(double width, double height) { this.width = width; this.height = height; }`",
                    "`public double area() { return width * height; }`",
                ],
                "csa-class-writing",
            ),
            mcq(
                "Which statement correctly distinguishes instance and static variables?",
                [
                    "A) Every object has a separate copy of each static variable",
                    "B) An instance variable is shared by all classes in a program",
                    "C) Each object has its own instance variables, while a static variable belongs to the class",
                    "D) Static variables can only store primitive values",
                ],
                2,
                [
                    "Instance state represents each object's own data.",
                    "A static field has one class-level value shared through the class.",
                ],
                "csa-class-members",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 6: Arrays",
        CSA,
        "CED-aligned practice with array creation, traversal, and array algorithms.",
        ["unit-6", "arrays", "traversal"],
        [
            mcq(
                "Given `int[] a = {4, 1, 7, 1};`, what is `a[a.length - 2]`?",
                ["A) 1", "B) 4", "C) 7", "D) An index error occurs"],
                2,
                [
                    "The array length is 4, so `a.length - 2` is index 2.",
                    "The element at index 2 is 7.",
                ],
                "csa-array-indexing",
            ),
            frq(
                "Write the key loop for a method that returns the largest value in a nonempty `int[] values`.",
                [
                    "Initialize the maximum from the first element rather than an arbitrary sentinel.",
                    "Visit the remaining valid indices and replace the maximum when a larger value appears.",
                ],
                [
                    "`int max = values[0]; for (int i = 1; i < values.length; i++) { if (values[i] > max) max = values[i]; } return max;`"
                ],
                "csa-array-algorithms",
            ),
            mcq(
                "Why does `for (int x : nums) { x *= 2; }` not double the elements of an `int[] nums`?",
                [
                    "A) Enhanced for loops cannot read primitive arrays",
                    "B) `x` receives a copy of each primitive element",
                    "C) Multiplication is not allowed in enhanced for loops",
                    "D) Arrays are immutable",
                ],
                1,
                [
                    "For a primitive array, the loop variable contains each element's value.",
                    "Changing the local variable does not assign through an array index.",
                ],
                "csa-enhanced-for",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 7: ArrayList",
        CSA,
        "CED-aligned practice with ArrayList methods, traversals, insertion, and removal.",
        ["unit-7", "arraylist", "collections"],
        [
            mcq(
                "For `ArrayList<Integer> nums = new ArrayList<>(); nums.add(4); nums.add(7); nums.add(1, 5);`, what does `nums` contain?",
                ["A) `[4, 7, 5]`", "B) `[4, 5, 7]`", "C) `[5, 4, 7]`", "D) `[4, 1, 5]`"],
                1,
                [
                    "`add(index, value)` inserts at the given index.",
                    "Inserting 5 at index 1 shifts 7 right, producing `[4, 5, 7]`.",
                ],
                "csa-arraylist-methods",
            ),
            frq(
                "Describe a safe indexed traversal that removes every negative integer from `ArrayList<Integer> data`.",
                [
                    "When an element is removed, later elements shift left.",
                    "Traverse from the last index down to zero so shifts affect only indices already processed.",
                ],
                [
                    "`for (int i = data.size() - 1; i >= 0; i--) { if (data.get(i) < 0) data.remove(i); }`"
                ],
                "csa-arraylist-removal",
            ),
            mcq(
                "For `ArrayList<Integer> a`, what does `a.remove(2)` do when the list has at least three elements?",
                [
                    "A) Removes the first element whose value is 2",
                    "B) Removes the element at index 2",
                    "C) Removes all elements equal to 2",
                    "D) Causes a compile-time error",
                ],
                1,
                [
                    "The primitive `int` argument selects the `remove(int index)` overload.",
                    "Removing a value of 2 would require an `Integer` object, such as `Integer.valueOf(2)`.",
                ],
                "csa-arraylist-overloads",
                3,
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 8: 2D Arrays",
        CSA,
        "CED-aligned practice with two-dimensional arrays, row-major traversal, and algorithms.",
        ["unit-8", "2d-arrays", "matrix"],
        [
            mcq(
                "For `int[][] grid = new int[3][5];`, which expression is the number of columns?",
                ["A) `grid.length`", "B) `grid[0].length`", "C) `grid.length[0]`", "D) `grid[1]`"],
                1,
                [
                    "`grid.length` gives the number of rows.",
                    "The length of a row, such as `grid[0].length`, gives its number of columns.",
                ],
                "csa-2d-dimensions",
            ),
            frq(
                "Write a loop that returns the sum of column `col` in a rectangular `int[][] table`.",
                [
                    "Hold the column fixed and vary the row.",
                    "Valid row indices run from 0 through `table.length - 1`.",
                ],
                [
                    "`int sum = 0; for (int r = 0; r < table.length; r++) { sum += table[r][col]; } return sum;`"
                ],
                "csa-2d-algorithms",
            ),
            mcq(
                "What is the standard row-major visit order for a 2D array?",
                [
                    "A) Visit every row position for one column before the next column",
                    "B) Visit each row from left to right before moving to the next row",
                    "C) Visit only diagonal elements",
                    "D) Alternate corners toward the center",
                ],
                1,
                [
                    "Row-major traversal uses the outer loop for rows.",
                    "The inner loop visits all columns in the current row.",
                ],
                "csa-row-major",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 9: Inheritance",
        CSA,
        "CED-aligned practice with class hierarchies, overriding, super, and polymorphism.",
        ["unit-9", "inheritance", "polymorphism"],
        [
            mcq(
                "Suppose `Dog extends Animal` and overrides `speak`. What method runs after `Animal pet = new Dog(); pet.speak();`?",
                [
                    "A) The overridden `Dog.speak` method",
                    "B) Always `Animal.speak` because the variable type is Animal",
                    "C) Both methods automatically",
                    "D) Neither method because the types differ",
                ],
                0,
                [
                    "The reference type controls which method signatures are accessible.",
                    "Dynamic dispatch selects the overridden method of the actual `Dog` object.",
                ],
                "csa-polymorphism",
            ),
            frq(
                "A subclass constructor `Student(String name, int grade)` extends `Person`, whose constructor is `Person(String name)`. Give a valid constructor if `Student` stores `grade`.",
                [
                    "The superclass constructor call must be the first constructor statement.",
                    "After inherited state is initialized through `super`, initialize the subclass field.",
                ],
                [
                    "`public Student(String name, int grade) { super(name); this.grade = grade; }`"
                ],
                "csa-super",
            ),
            mcq(
                "Which members of a superclass are directly accessible by name in a subclass?",
                [
                    "A) All private fields",
                    "B) Accessible inherited members, such as public or protected members",
                    "C) Only constructors",
                    "D) No methods",
                ],
                1,
                [
                    "Private members remain part of superclass state but are not directly accessible by the subclass.",
                    "The subclass can directly use inherited members whose access permits it.",
                ],
                "csa-inheritance-access",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 10: Recursion",
        CSA,
        "CED-aligned practice with recursive calls, base cases, and tracing.",
        ["unit-10", "recursion", "tracing"],
        [
            mcq(
                "What does `f(4)` return for `int f(int n) { if (n <= 1) return 1; return n * f(n - 1); }`?",
                ["A) 4", "B) 10", "C) 24", "D) The method never stops"],
                2,
                [
                    "Expand calls until the base case: `f(4) = 4 * 3 * 2 * f(1)`.",
                    "`f(1)` is 1, so the result is 24.",
                ],
                "csa-recursion-trace",
            ),
            frq(
                "Write a recursive method `sumTo(int n)` that returns `1 + 2 + ... + n` for nonnegative `n`.",
                [
                    "Use 0 as a base case.",
                    "Reduce the problem from `n` to `n - 1` so every call moves toward the base case.",
                ],
                [
                    "`public static int sumTo(int n) { if (n == 0) return 0; return n + sumTo(n - 1); }`"
                ],
                "csa-recursive-design",
            ),
            mcq(
                "What is essential for a terminating recursive method?",
                [
                    "A) Every call must create an ArrayList",
                    "B) A reachable base case and progress toward it",
                    "C) At least two recursive calls",
                    "D) A for loop in the base case",
                ],
                1,
                [
                    "The base case stops further self-calls.",
                    "Recursive arguments must move toward a state that satisfies that case.",
                ],
                "csa-recursion-base-case",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mixed Review: AP Computer Science A",
        CSA,
        "Mixed CED review connecting classes, collections, iteration, inheritance, and recursion.",
        ["mixed-review", "csa"],
        [
            mcq(
                "A loop removes elements from an `ArrayList` while moving its index upward. Which change most directly prevents skipping shifted elements?",
                [
                    "A) Traverse backward",
                    "B) Make the list static",
                    "C) Replace every `if` with `while`",
                    "D) Cast each index to double",
                ],
                0,
                [
                    "Removal shifts all later elements one index left.",
                    "Backward traversal leaves unprocessed lower indices unchanged.",
                ],
                "csa-mixed-collections",
            ),
            frq(
                "A `Library` stores a `Book[] books`. Describe an algorithm for a method that returns how many non-null books have a title equal to `target`.",
                [
                    "Initialize a count and traverse every array element.",
                    "Check for null before calling an object method.",
                    "Compare title contents with `.equals(target)` and increment for each match.",
                ],
                [
                    "`int count = 0; for (Book b : books) { if (b != null && b.getTitle().equals(target)) count++; } return count;`"
                ],
                "csa-mixed-objects",
            ),
            mcq(
                "A recursive search checks half of a sorted array at each call. What design feature makes this reduction valid?",
                [
                    "A) The array is sorted, so one comparison identifies which half can contain the target",
                    "B) Every array element is distinct",
                    "C) The array contains only positive values",
                    "D) Recursion automatically sorts the array",
                ],
                0,
                [
                    "Ordering lets the comparison eliminate one entire half.",
                    "Recursion handles the remaining interval with smaller bounds.",
                ],
                "csa-mixed-recursion",
                3,
            ),
        ],
    ),

    # AP Computer Science Principles
    quiz(
        "AI Topic Exercises — Big Idea 1: Creative Development",
        CSP,
        "CED-aligned practice with collaboration, iterative development, testing, and program purpose.",
        ["big-idea-1", "creative-development", "collaboration"],
        [
            mcq(
                "Which practice best supports effective collaboration on a program?",
                [
                    "A) Keep component assumptions undocumented",
                    "B) Agree on interfaces and test components as they are integrated",
                    "C) Let every teammate rename shared data independently",
                    "D) Delay all testing until every feature is complete",
                ],
                1,
                [
                    "Shared interfaces clarify what each component expects and returns.",
                    "Incremental integration testing reveals mismatches early.",
                ],
                "csp-collaboration",
            ),
            frq(
                "A team is designing a study-reminder app. Explain one advantage of using an iterative development process and name one useful test case.",
                [
                    "Iteration produces a working version that can be evaluated and revised from feedback.",
                    "A test should include expected behavior and an edge condition.",
                ],
                [
                    "Advantage: early prototypes expose usability or logic problems before the design is fixed.",
                    "Test case: a reminder scheduled for exactly midnight should appear on the intended date.",
                ],
                "csp-iterative-development",
            ),
            mcq(
                "What is the main purpose of program documentation?",
                [
                    "A) Guarantee that a program has no errors",
                    "B) Explain purpose, behavior, and usage so others can understand or maintain the program",
                    "C) Increase processor speed",
                    "D) Convert all algorithms to binary",
                ],
                1,
                [
                    "Documentation communicates design intent and how components are used.",
                    "It aids collaboration and maintenance but cannot guarantee correctness.",
                ],
                "csp-documentation",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Big Idea 2: Data",
        CSP,
        "CED-aligned practice with binary representation, compression, data abstraction, and data analysis.",
        ["big-idea-2", "data", "binary"],
        [
            mcq(
                "How many distinct values can be represented with 6 bits?",
                ["A) 6", "B) 12", "C) 32", "D) 64"],
                3,
                [
                    "Each bit has two possible states.",
                    "Six independent bits represent `2^6 = 64` distinct bit patterns.",
                ],
                "csp-binary",
            ),
            frq(
                "A city data set contains temperatures entered in both Celsius and Fahrenheit without a unit column. Explain the data problem and one cleaning step.",
                [
                    "Values with inconsistent units are not directly comparable and can create misleading summaries.",
                    "Cleaning requires identifying the unit and converting records to one standard scale.",
                ],
                [
                    "Problem: inconsistent representation reduces data quality; fix: verify each source, convert all temperatures to one unit, and record that unit."
                ],
                "csp-data-cleaning",
            ),
            mcq(
                "Which statement correctly compares lossless and lossy compression?",
                [
                    "A) Lossy compression always produces a larger file",
                    "B) Lossless compression permits exact reconstruction; lossy compression may discard information",
                    "C) Only lossy compression can reduce file size",
                    "D) Lossless compression changes the meaning of every file",
                ],
                1,
                [
                    "Lossless encoding preserves enough information to reproduce the original exactly.",
                    "Lossy methods trade some information for size reduction and are useful when exact recovery is unnecessary.",
                ],
                "csp-compression",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Big Idea 3: Algorithms and Programming",
        CSP,
        "CED-aligned practice with sequencing, selection, iteration, procedures, lists, and simulations.",
        ["big-idea-3", "algorithms", "programming"],
        [
            mcq(
                "What is displayed by this pseudocode? `x ← 1; REPEAT 3 TIMES { x ← 2 * x + 1 }; DISPLAY(x)`",
                ["A) 7", "B) 9", "C) 15", "D) 16"],
                2,
                [
                    "Trace each iteration: 1 becomes 3, then 7, then 15.",
                    "The displayed value is 15.",
                ],
                "csp-algorithm-trace",
            ),
            frq(
                "Describe an algorithm that returns the number of values greater than 10 in a list `scores`.",
                [
                    "Create a counter initialized to zero.",
                    "Traverse the list; use selection to increment only when the current value exceeds 10.",
                    "Return the counter after all elements are processed.",
                ],
                [
                    "`count ← 0; FOR EACH value IN scores { IF(value > 10) { count ← count + 1 } }; RETURN(count)`"
                ],
                "csp-list-algorithm",
            ),
            mcq(
                "How can a procedure with a parameter reduce program complexity?",
                [
                    "A) It gives a reusable name to behavior that can operate on different inputs",
                    "B) It removes the need for all data",
                    "C) It guarantees constant running time",
                    "D) It prevents any procedure from calling another",
                ],
                0,
                [
                    "A procedure abstracts a sequence of operations behind a meaningful name.",
                    "Parameters let the same algorithm serve multiple input values without duplicated code.",
                ],
                "csp-procedural-abstraction",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Big Idea 4: Computer Systems and Networks",
        CSP,
        "CED-aligned practice with the Internet, fault tolerance, protocols, and cybersecurity.",
        ["big-idea-4", "systems", "networks"],
        [
            mcq(
                "Why can two packets from the same message travel by different Internet routes?",
                [
                    "A) Packet metadata permits routers to forward packets independently",
                    "B) Every message must use exactly one permanent circuit",
                    "C) DNS encrypts each packet with a different alphabet",
                    "D) An IP address changes after every router",
                ],
                0,
                [
                    "The Internet uses packet switching rather than reserving one end-to-end circuit.",
                    "Routers can select available paths for independently addressed packets.",
                ],
                "csp-packet-switching",
            ),
            frq(
                "Explain how redundant routes can make a network fault tolerant, and identify one limitation.",
                [
                    "If one connection fails, routing can direct traffic over another working path.",
                    "Redundancy reduces single points of failure but cannot guarantee service under every widespread failure or attack.",
                ],
                [
                    "Alternative paths allow continued delivery after some link failures; capacity limits or failures affecting all available paths can still interrupt service."
                ],
                "csp-fault-tolerance",
            ),
            mcq(
                "What does DNS primarily do?",
                [
                    "A) Translates domain names into IP addresses",
                    "B) Compresses every web image",
                    "C) Chooses a user's password",
                    "D) Executes code in a browser",
                ],
                0,
                [
                    "Humans commonly use domain names, while Internet routing uses numeric addresses.",
                    "DNS supplies the mapping needed to locate the addressed host.",
                ],
                "csp-dns",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Big Idea 5: Impact of Computing",
        CSP,
        "CED-aligned practice with computing impacts, access, privacy, bias, and intellectual property.",
        ["big-idea-5", "impact", "ethics"],
        [
            mcq(
                "A hiring model is trained mostly on records from one demographic group. What is the clearest concern?",
                [
                    "A) The model must use lossless compression",
                    "B) Unrepresentative data may produce biased outcomes for other groups",
                    "C) The model cannot contain an algorithm",
                    "D) More processor speed automatically removes the bias",
                ],
                1,
                [
                    "A model learns patterns present in its training data.",
                    "Underrepresentation can make its errors or decisions uneven across groups.",
                ],
                "csp-algorithmic-bias",
            ),
            frq(
                "A free online tutoring service requires high-speed video. Describe one benefit and one harmful effect related to the digital divide.",
                [
                    "Computing innovations can broaden access beyond geographic boundaries.",
                    "Benefits may be uneven when users lack affordable broadband or suitable devices.",
                ],
                [
                    "Benefit: remote learners with connectivity gain tutoring access; harm: learners without fast Internet or capable devices may be further disadvantaged."
                ],
                "csp-digital-divide",
            ),
            mcq(
                "Which action best protects a user's privacy when an app collects location data?",
                [
                    "A) Collect location continuously whether or not it is needed",
                    "B) Clearly disclose the purpose, request informed permission, and minimize retained data",
                    "C) Publish raw coordinates under anonymous screen names",
                    "D) Reuse the data for unrelated purposes without notice",
                ],
                1,
                [
                    "Privacy-respecting design gives users meaningful information and control.",
                    "Data minimization reduces exposure by collecting and retaining only what serves the stated purpose.",
                ],
                "csp-privacy",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mixed Review: AP Computer Science Principles",
        CSP,
        "Mixed CED review connecting development, data, algorithms, networks, and computing impacts.",
        ["mixed-review", "csp"],
        [
            mcq(
                "A sensor sends repeated readings across a network. Which pair of ideas best helps the system remain useful after a single link fails and limits transmission size?",
                [
                    "A) Redundant routing and data compression",
                    "B) Sequencing and the digital divide",
                    "C) Copyright and decimal notation",
                    "D) A single route and uncompressed duplication",
                ],
                0,
                [
                    "Redundant paths support delivery when one route fails.",
                    "Compression represents the readings with fewer bits when appropriate.",
                ],
                "csp-mixed-systems",
            ),
            frq(
                "A program predicts bus crowding from historical rider data. Identify one algorithmic step, one data-quality risk, and one potential impact.",
                [
                    "An algorithm can aggregate riders by route and time, then compare a prediction with a threshold.",
                    "Missing or unrepresentative records can distort estimates.",
                    "The innovation can improve planning but may distribute service unfairly if predictions inherit data bias.",
                ],
                [
                    "Step: compute average ridership for matching route/time records; risk: missing low-connectivity riders; impact: better scheduling or inequitable service allocation."
                ],
                "csp-mixed-impact",
                3,
            ),
            mcq(
                "Why should a developer test a list-processing procedure with an empty list?",
                [
                    "A) It checks an edge case that may reveal invalid indexing or assumptions",
                    "B) Empty lists always contain the number zero",
                    "C) It proves every possible input is correct",
                    "D) Procedures cannot accept nonempty lists until they accept text",
                ],
                0,
                [
                    "Algorithms often assume at least one element when accessing an index or initializing a result.",
                    "An empty-list test exposes that boundary assumption.",
                ],
                "csp-mixed-testing",
            ),
        ],
    ),

    # AP Psychology
    quiz(
        "AI Topic Exercises — Unit 0: Research Methods",
        PSYCH,
        "CED-aligned practice with study design, variables, statistics, ethics, and interpretation.",
        ["unit-0", "research-methods", "statistics"],
        [
            mcq(
                "A researcher defines stress as a participant's score on a 20-item stress inventory. This definition is a(n):",
                [
                    "A) random assignment",
                    "B) operational definition",
                    "C) confounding variable",
                    "D) placebo effect",
                ],
                1,
                [
                    "An operational definition states exactly how a variable is measured or manipulated.",
                    "Here, an abstract construct is made measurable through the inventory score.",
                ],
                "psych-operational-definition",
            ),
            frq(
                "A survey finds that daily screen time and reported fatigue are positively correlated. State what can and cannot be concluded, and name one possible third variable.",
                [
                    "A positive correlation means higher screen time is associated with higher fatigue.",
                    "A correlational design does not establish which variable causes the other.",
                    "A third variable could influence both measures.",
                ],
                [
                    "Conclusion: the variables are positively associated, not necessarily causal; possible third variable: sleep duration."
                ],
                "psych-correlation",
            ),
            mcq(
                "What is the main purpose of random assignment in an experiment?",
                [
                    "A) Make the sample representative of the entire population",
                    "B) Distribute participant differences across conditions to support causal inference",
                    "C) Ensure participants know the hypothesis",
                    "D) Eliminate the need for informed consent",
                ],
                1,
                [
                    "Random assignment concerns placement into experimental conditions, not population sampling.",
                    "It helps make groups comparable before the manipulation.",
                ],
                "psych-random-assignment",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 1: Biological Bases of Behavior",
        PSYCH,
        "CED-aligned practice with neurons, the nervous system, brain structures, genetics, and sleep.",
        ["unit-1", "biological-bases", "neuroscience"],
        [
            mcq(
                "Which part of a neuron typically receives incoming signals from other neurons?",
                ["A) Axon terminals", "B) Dendrites", "C) Myelin sheath", "D) Pituitary gland"],
                1,
                [
                    "Dendrites branch from the cell body and receive many incoming messages.",
                    "Axons carry neural impulses away from the cell body.",
                ],
                "psych-neuron",
            ),
            frq(
                "A patient can understand speech but produces slow, effortful speech after damage to the left frontal lobe. Identify the likely language area and justify the answer.",
                [
                    "Broca's area is commonly associated with speech production.",
                    "Damage can impair fluent expression while leaving much comprehension relatively intact.",
                ],
                [
                    "Likely Broca's area; the pattern is consistent with impaired language production (Broca's aphasia)."
                ],
                "psych-brain-language",
            ),
            mcq(
                "Which nervous-system division mobilizes the body during an acute threat?",
                [
                    "A) Parasympathetic division",
                    "B) Sympathetic division",
                    "C) Somatic sensory cortex",
                    "D) Circadian rhythm",
                ],
                1,
                [
                    "The sympathetic division supports arousal such as increased heart rate.",
                    "The parasympathetic division generally supports calming and restoration.",
                ],
                "psych-autonomic",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Cognition",
        PSYCH,
        "CED-aligned practice with perception, memory, thinking, intelligence, and language.",
        ["unit-2", "cognition", "memory"],
        [
            mcq(
                "Remembering a new locker combination by repeating it several times is an example of:",
                [
                    "A) maintenance rehearsal",
                    "B) sensory adaptation",
                    "C) spontaneous recovery",
                    "D) functional fixedness",
                ],
                0,
                [
                    "Maintenance rehearsal keeps information active through repetition.",
                    "It can support short-term retention without necessarily adding deep meaning.",
                ],
                "psych-memory-encoding",
            ),
            frq(
                "A witness recalls a stop sign after another person incorrectly mentions one, although the intersection had a yield sign. Name and explain the memory phenomenon.",
                [
                    "Post-event information can become integrated with or alter the original memory.",
                    "Memory is reconstructive rather than a literal recording.",
                ],
                [
                    "This is the misinformation effect: misleading information after the event distorts later recall."
                ],
                "psych-misinformation-effect",
            ),
            mcq(
                "A person cannot think of using a coin as a screwdriver because the coin is seen only as money. This best illustrates:",
                [
                    "A) divergent validity",
                    "B) functional fixedness",
                    "C) state-dependent memory",
                    "D) negative reinforcement",
                ],
                1,
                [
                    "Functional fixedness narrows thinking to an object's customary use.",
                    "It can block a solution that requires repurposing the object.",
                ],
                "psych-problem-solving",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 3: Development and Learning",
        PSYCH,
        "CED-aligned practice with development, classical and operant conditioning, and observational learning.",
        ["unit-3", "development", "learning"],
        [
            mcq(
                "A child begins cleaning a room more often because doing so stops a parent's repeated reminders. The increased cleaning is maintained by:",
                [
                    "A) positive punishment",
                    "B) negative reinforcement",
                    "C) positive reinforcement",
                    "D) negative punishment",
                ],
                1,
                [
                    "The behavior increases, so the consequence is reinforcement.",
                    "An aversive stimulus—the reminders—is removed, making it negative reinforcement.",
                ],
                "psych-operant-conditioning",
            ),
            frq(
                "In a conditioning study, a tone is repeatedly paired with food until a dog salivates to the tone. Identify the unconditioned stimulus, unconditioned response, conditioned stimulus, and conditioned response.",
                [
                    "Food naturally elicits salivation before learning.",
                    "The formerly neutral tone acquires the ability to elicit salivation through pairing.",
                ],
                [
                    "US: food; UR: salivation to food; CS: tone after pairing; CR: salivation to the tone."
                ],
                "psych-classical-conditioning",
            ),
            mcq(
                "Which behavior best illustrates observational learning?",
                [
                    "A) A student imitates a lab technique after watching a classmate demonstrate it",
                    "B) A reflex occurs when a doctor taps the knee",
                    "C) A person adapts to a constant background odor",
                    "D) A newborn grasps a finger placed in its palm",
                ],
                0,
                [
                    "Observational learning occurs by watching a model and reproducing behavior.",
                    "The other examples are reflexes or sensory adaptation, not modeled learning.",
                ],
                "psych-observational-learning",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Social Psychology and Personality",
        PSYCH,
        "CED-aligned practice with attribution, social influence, attitudes, personality, and motivation.",
        ["unit-4", "social-psychology", "personality"],
        [
            mcq(
                "A driver calls another motorist careless while ignoring that road construction forced a sudden lane change. This judgment best illustrates:",
                [
                    "A) the fundamental attribution error",
                    "B) the mere-exposure effect",
                    "C) reciprocal determinism",
                    "D) drive-reduction theory",
                ],
                0,
                [
                    "The judgment overemphasizes a personal trait such as carelessness.",
                    "It underestimates a situational explanation—the construction.",
                ],
                "psych-attribution",
            ),
            frq(
                "A participant gives an obviously wrong answer after every other group member gives that answer aloud. Explain how normative social influence could account for the response.",
                [
                    "Normative influence arises from the desire for acceptance or avoidance of social rejection.",
                    "A person may publicly conform even without privately believing the group is correct.",
                ],
                [
                    "The participant may match the group to fit in or avoid disapproval, despite privately recognizing the answer is wrong."
                ],
                "psych-conformity",
            ),
            mcq(
                "Which statement is most consistent with trait theories of personality?",
                [
                    "A) Personality can be described using relatively stable dimensions such as conscientiousness",
                    "B) All behavior is determined by one unconscious conflict",
                    "C) Personality cannot be measured",
                    "D) Situations never affect behavior",
                ],
                0,
                [
                    "Trait approaches describe consistent patterns using dimensions.",
                    "They do not require claiming that traits are the only influences on behavior.",
                ],
                "psych-traits",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Mental and Physical Health",
        PSYCH,
        "CED-aligned practice with disorders, treatment, stress, health, and well-being.",
        ["unit-5", "mental-health", "treatment"],
        [
            mcq(
                "A persistent pattern of intrusive thoughts followed by repetitive acts intended to reduce distress is most characteristic of:",
                [
                    "A) obsessive-compulsive disorder",
                    "B) dissociative identity disorder",
                    "C) bipolar disorder",
                    "D) antisocial personality disorder",
                ],
                0,
                [
                    "Obsessions are intrusive thoughts; compulsions are repetitive behaviors or mental acts.",
                    "The compulsions are often performed to reduce anxiety related to the obsessions.",
                ],
                "psych-disorders",
            ),
            frq(
                "A therapist helps a client identify an inaccurate thought, examine evidence, and replace it with a more balanced interpretation. Identify the broad therapy approach and explain the technique.",
                [
                    "Cognitive approaches target maladaptive or distorted patterns of thought.",
                    "Cognitive restructuring evaluates and revises those interpretations.",
                ],
                [
                    "Cognitive therapy, often used within CBT; the technique challenges distorted thinking and replaces it with a more evidence-based appraisal."
                ],
                "psych-therapy",
            ),
            mcq(
                "Which strategy is most directly associated with reducing the physiological effects of chronic stress?",
                [
                    "A) Regular aerobic exercise and adequate sleep",
                    "B) Increasing sleep deprivation",
                    "C) Avoiding all social support",
                    "D) Ruminating continuously about the stressor",
                ],
                0,
                [
                    "Exercise and adequate sleep can support stress regulation and physical health.",
                    "Sleep loss, isolation, and rumination can worsen stress outcomes.",
                ],
                "psych-health",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mixed Review: AP Psychology",
        PSYCH,
        "Mixed CED review connecting research, biological, cognitive, developmental, social, and health perspectives.",
        ["mixed-review", "psychology"],
        [
            mcq(
                "Participants assigned by chance to sleep 4 or 8 hours are later tested on recall. What is the independent variable?",
                [
                    "A) Recall-test score",
                    "B) Assigned amount of sleep",
                    "C) The population from which participants came",
                    "D) The correlation coefficient",
                ],
                1,
                [
                    "The independent variable is manipulated by the researcher.",
                    "Here, participants are assigned different amounts of sleep; recall is the measured outcome.",
                ],
                "psych-mixed-methods",
            ),
            frq(
                "A teenager studies vocabulary by connecting each word to a personal example and later remembers more words. Explain the result using one cognitive concept and one biological concept.",
                [
                    "Elaborative rehearsal creates meaningful links and supports durable encoding.",
                    "Practice is associated with neural plasticity: experience can strengthen or reorganize relevant neural connections.",
                ],
                [
                    "Cognitive: elaborative encoding provides retrieval cues; biological: learning reflects experience-dependent neural plasticity."
                ],
                "psych-mixed-learning",
                3,
            ),
            mcq(
                "A student attributes a classmate's silence to unfriendliness, but the classmate is anxious in unfamiliar groups. Which two perspectives best reveal the error?",
                [
                    "A) Social attribution and mental-health context",
                    "B) Classical conditioning and retinal disparity",
                    "C) Genetics and random sampling only",
                    "D) Circadian rhythm and operant extinction",
                ],
                0,
                [
                    "Attribution research warns against overemphasizing disposition.",
                    "Anxiety supplies a plausible situational and psychological context for the behavior.",
                ],
                "psych-mixed-social",
            ),
        ],
    ),

    # AP Macroeconomics
    quiz(
        "AI Topic Exercises — Unit 1: Basic Economic Concepts",
        MACRO,
        "CED-aligned practice with scarcity, opportunity cost, production possibilities, and comparative advantage.",
        ["unit-1", "basic-concepts", "comparative-advantage"],
        [
            mcq(
                "If an economy moves from a point inside its production possibilities curve to a point on the curve, this most directly represents:",
                [
                    "A) A decrease in available resources",
                    "B) More efficient use of existing resources",
                    "C) An unattainable production combination",
                    "D) Necessarily equal production of both goods",
                ],
                1,
                [
                    "A point inside the curve indicates unemployed or inefficiently used resources.",
                    "A point on the curve is productively efficient with current resources and technology.",
                ],
                "macro-ppc",
            ),
            frq(
                "Country A can produce either 12 wheat or 6 cloth per day; Country B can produce either 8 wheat or 8 cloth. Determine each country's opportunity cost of one cloth and identify comparative advantage in cloth.",
                [
                    "For A, one cloth costs `12/6 = 2` wheat.",
                    "For B, one cloth costs `8/8 = 1` wheat.",
                    "The lower opportunity cost determines comparative advantage.",
                ],
                [
                    "A: 2 wheat per cloth; B: 1 wheat per cloth; Country B has comparative advantage in cloth."
                ],
                "macro-comparative-advantage",
            ),
            mcq(
                "Which statement best expresses scarcity?",
                [
                    "A) Every person has no goods",
                    "B) Limited resources must satisfy competing wants",
                    "C) Governments can eliminate all opportunity costs",
                    "D) Only low-income economies face choices",
                ],
                1,
                [
                    "Scarcity reflects the mismatch between finite resources and competing wants.",
                    "It makes choice and opportunity cost relevant in every economy.",
                ],
                "macro-scarcity",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Economic Indicators and the Business Cycle",
        MACRO,
        "CED-aligned practice with GDP, inflation, unemployment, and business cycles.",
        ["unit-2", "economic-indicators", "gdp"],
        [
            mcq(
                "Which transaction is counted in this year's domestic GDP?",
                [
                    "A) The sale of a used bicycle",
                    "B) A household's purchase of newly produced domestic furniture",
                    "C) A transfer payment from the government",
                    "D) The purchase of a share of stock",
                ],
                1,
                [
                    "GDP counts the market value of currently produced final goods and services within a country.",
                    "Used goods, financial transactions, and transfers do not represent current production.",
                ],
                "macro-gdp",
            ),
            frq(
                "A market basket costs $200 in the base year and $218 this year. Calculate the current consumer price index and inflation rate from the base year.",
                [
                    "`CPI = (current basket cost / base-year basket cost) × 100`.",
                    "`CPI = (218 / 200) × 100 = 109`.",
                    "The percentage increase in the price index from 100 is 9 percent.",
                ],
                ["Current CPI: 109; inflation from the base year: 9%."],
                "macro-inflation",
            ),
            mcq(
                "A worker who leaves one job and is actively searching for a better-matching job is primarily:",
                [
                    "A) cyclically unemployed",
                    "B) frictionally unemployed",
                    "C) structurally unemployed",
                    "D) not in the labor force",
                ],
                1,
                [
                    "Frictional unemployment arises from normal job search and transitions.",
                    "Because the person is actively seeking work, the person remains in the labor force.",
                ],
                "macro-unemployment",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 3: National Income and Price Determination",
        MACRO,
        "CED-aligned practice with aggregate demand, short-run aggregate supply, equilibrium, and multipliers.",
        ["unit-3", "ad-as", "multipliers"],
        [
            mcq(
                "Which event shifts the aggregate demand curve to the right, all else equal?",
                [
                    "A) A decrease in consumer confidence",
                    "B) An increase in government purchases",
                    "C) An increase in input prices",
                    "D) A decrease in worker productivity",
                ],
                1,
                [
                    "Government purchases are a component of aggregate demand.",
                    "Higher purchases increase total planned spending at each price level.",
                ],
                "macro-aggregate-demand",
            ),
            frq(
                "If the marginal propensity to consume is 0.75 and autonomous investment rises by $40 billion, calculate the simple spending multiplier and the maximum change in real output when there is spare capacity.",
                [
                    "`Multiplier = 1 / (1 - MPC)`.",
                    "`1 / (1 - 0.75) = 4`.",
                    "Multiply the initial spending change by 4: `4 × $40 billion`.",
                ],
                ["Spending multiplier: 4; maximum increase in real output: $160 billion."],
                "macro-spending-multiplier",
            ),
            mcq(
                "A sudden increase in oil prices most directly causes which short-run change?",
                [
                    "A) SRAS shifts right, lowering the price level",
                    "B) SRAS shifts left, raising the price level and lowering real output",
                    "C) AD shifts right, lowering real output",
                    "D) LRAS shifts right immediately",
                ],
                1,
                [
                    "Oil is an important input, so higher oil prices raise production costs.",
                    "Short-run aggregate supply shifts left, creating inflationary pressure and lower output.",
                ],
                "macro-sras",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Financial Sector",
        MACRO,
        "CED-aligned practice with money, banking, the money market, loanable funds, and monetary policy.",
        ["unit-4", "financial-sector", "money"],
        [
            mcq(
                "If the required reserve ratio is 0.20, what is the simple deposit multiplier?",
                ["A) 0.20", "B) 4", "C) 5", "D) 20"],
                2,
                [
                    "The simple deposit multiplier is `1 / required reserve ratio`.",
                    "`1 / 0.20 = 5`.",
                ],
                "macro-money-multiplier",
            ),
            frq(
                "The central bank buys government securities in the open market. Explain the immediate effect on bank reserves, the money supply, and nominal interest rates.",
                [
                    "Payment for securities adds reserves to the banking system.",
                    "Greater reserves support deposit expansion and increase the money supply.",
                    "In the money market, an increased money supply lowers the nominal interest rate, all else equal.",
                ],
                [
                    "Bank reserves rise; the money supply rises; nominal interest rates fall, ceteris paribus."
                ],
                "macro-monetary-policy",
            ),
            mcq(
                "An increase in government budget deficits, with private saving unchanged, most directly affects the loanable-funds market by:",
                [
                    "A) Increasing the supply of loanable funds",
                    "B) Increasing demand for loanable funds and raising the real interest rate",
                    "C) Decreasing demand for loanable funds and lowering the real interest rate",
                    "D) Making investment spending vertical",
                ],
                1,
                [
                    "Greater government borrowing increases demand for loanable funds.",
                    "The equilibrium real interest rate rises, which can crowd out private investment.",
                ],
                "macro-loanable-funds",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Long-Run Consequences of Stabilization Policies",
        MACRO,
        "CED-aligned practice with fiscal and monetary policy, Phillips curves, deficits, and growth.",
        ["unit-5", "stabilization", "long-run"],
        [
            mcq(
                "In the long run, an economy's Phillips curve is vertical because:",
                [
                    "A) Expected inflation adjusts and unemployment returns to its natural rate",
                    "B) Inflation must always be zero",
                    "C) Fiscal policy cannot affect aggregate demand",
                    "D) The labor force stops changing",
                ],
                0,
                [
                    "The short-run tradeoff depends partly on inflation differing from expectations.",
                    "Once expectations adjust, unemployment returns to the natural rate regardless of the inflation rate.",
                ],
                "macro-phillips-curve",
            ),
            frq(
                "An economy is in a recessionary gap. Identify one expansionary fiscal action and explain its short-run effects on aggregate demand, real output, and the price level.",
                [
                    "Government can increase purchases or decrease taxes.",
                    "Either action increases aggregate demand.",
                    "In the short run, equilibrium real output and the price level rise relative to no policy action.",
                ],
                [
                    "Example: increase government purchases; AD shifts right, increasing real output and the price level in the short run."
                ],
                "macro-fiscal-policy",
            ),
            mcq(
                "Which policy is most likely to increase long-run aggregate supply?",
                [
                    "A) Investment in productive infrastructure and human capital",
                    "B) A temporary increase in transfer payments only",
                    "C) A price ceiling on all final goods",
                    "D) Destruction of capital stock",
                ],
                0,
                [
                    "Long-run aggregate supply grows when productive capacity increases.",
                    "Infrastructure and human capital can raise productivity and potential output.",
                ],
                "macro-economic-growth",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 6: Open Economy—International Trade and Finance",
        MACRO,
        "CED-aligned practice with balance of payments, foreign exchange markets, and policy linkages.",
        ["unit-6", "open-economy", "foreign-exchange"],
        [
            mcq(
                "If demand for a country's currency increases in the foreign exchange market, all else equal, the currency will:",
                [
                    "A) Appreciate",
                    "B) Depreciate",
                    "C) Become legally worthless",
                    "D) Cause its demand curve to shift left automatically",
                ],
                0,
                [
                    "Greater demand raises the equilibrium price of the currency.",
                    "A rise in a currency's value relative to another currency is appreciation.",
                ],
                "macro-exchange-rates",
            ),
            frq(
                "A resident imports a $1,000 computer and pays a foreign producer. State the direct entry in the current account and describe the balancing financial flow.",
                [
                    "An import of a good is recorded as a debit in the current account.",
                    "The payment supplies domestic currency or transfers a financial claim to the foreign sector.",
                    "Balance-of-payments accounting records an offsetting financial-account credit, absent reserve adjustments.",
                ],
                [
                    "Current-account debit of $1,000; an offsetting financial-account credit reflects the foreign acquisition of a domestic financial claim or currency."
                ],
                "macro-balance-of-payments",
            ),
            mcq(
                "If a country's real interest rate rises relative to rates abroad, what is the likely short-run foreign-exchange effect?",
                [
                    "A) Financial capital inflow increases and the currency tends to appreciate",
                    "B) Financial capital inflow decreases and the currency must depreciate",
                    "C) Net exports necessarily rise because the currency appreciates",
                    "D) Foreign demand for its assets becomes zero",
                ],
                0,
                [
                    "Higher relative returns attract financial capital.",
                    "Foreign investors demand the country's currency to purchase its assets, tending to appreciate it.",
                ],
                "macro-capital-flows",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mixed Review: AP Macroeconomics",
        MACRO,
        "Mixed CED review connecting indicators, AD–AS, policy, financial markets, and the open economy.",
        ["mixed-review", "macroeconomics"],
        [
            mcq(
                "Expansionary monetary policy lowers domestic interest rates. Which chain is most likely, all else equal?",
                [
                    "A) Capital inflow rises, currency appreciates, and net exports fall",
                    "B) Capital outflow rises, currency depreciates, and net exports rise",
                    "C) Currency appreciates and aggregate demand rises through lower net exports",
                    "D) The money supply falls and investment rises",
                ],
                1,
                [
                    "Lower relative interest rates reduce demand for domestic financial assets and encourage capital outflow.",
                    "The currency tends to depreciate, making exports cheaper and imports dearer, so net exports rise.",
                ],
                "macro-mixed-policy",
                3,
            ),
            frq(
                "Actual unemployment is 8 percent while the natural rate is 5 percent. Identify the output gap and describe an automatic stabilizer that responds.",
                [
                    "Unemployment above its natural rate signals a recessionary gap with actual output below potential output.",
                    "During a downturn, tax collections tend to fall and unemployment benefits tend to rise without new legislation.",
                ],
                [
                    "The economy has a recessionary gap; an automatic stabilizer is increased unemployment-benefit spending or reduced tax collections."
                ],
                "macro-mixed-stabilizers",
            ),
            mcq(
                "Nominal GDP rises 6 percent while the GDP deflator rises 4 percent. Real GDP changes by approximately:",
                [
                    "A) A 10 percent increase",
                    "B) A 2 percent increase",
                    "C) A 2 percent decrease",
                    "D) No change",
                ],
                1,
                [
                    "Approximate real growth equals nominal growth minus inflation in the GDP deflator.",
                    "`6% - 4% ≈ 2%` real growth.",
                ],
                "macro-mixed-indicators",
            ),
        ],
    ),

    # AP Microeconomics
    quiz(
        "AI Topic Exercises — Unit 1: Basic Concepts and Supply and Demand",
        MICRO,
        "CED-aligned practice with opportunity cost, demand, supply, equilibrium, and government intervention.",
        ["unit-1", "supply-demand", "equilibrium"],
        [
            mcq(
                "Which event shifts the demand curve for electric bicycles to the right?",
                [
                    "A) A decrease in the price of electric bicycles",
                    "B) An increase in consumer income when electric bicycles are a normal good",
                    "C) A decrease in the cost of bicycle batteries",
                    "D) An increase in the number of bicycle sellers",
                ],
                1,
                [
                    "A change in the good's own price causes movement along demand, not a shift.",
                    "For a normal good, higher consumer income increases demand at every price.",
                ],
                "micro-demand",
            ),
            frq(
                "Demand is `Qd = 50 - 2P` and supply is `Qs = 10 + 2P`. Calculate equilibrium price and quantity.",
                [
                    "At equilibrium, quantity demanded equals quantity supplied.",
                    "`50 - 2P = 10 + 2P`, so `40 = 4P` and `P = 10`.",
                    "Substitute to obtain `Q = 50 - 2(10) = 30`.",
                ],
                ["Equilibrium price: $10; equilibrium quantity: 30 units."],
                "micro-equilibrium",
            ),
            mcq(
                "A binding price ceiling below equilibrium creates:",
                [
                    "A) A surplus because quantity supplied exceeds quantity demanded",
                    "B) A shortage because quantity demanded exceeds quantity supplied",
                    "C) A new equilibrium above the original price",
                    "D) No change in market quantity",
                ],
                1,
                [
                    "At the lower controlled price, buyers demand more while sellers supply less.",
                    "The difference `Qd - Qs` is a shortage.",
                ],
                "micro-price-controls",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 2: Elasticity, Costs, and Perfect Competition",
        MICRO,
        "CED-aligned practice with elasticity, production costs, profit, and competitive firms.",
        ["unit-2", "elasticity", "perfect-competition"],
        [
            mcq(
                "If price rises by 10 percent and quantity demanded falls by 25 percent, demand over this range is:",
                [
                    "A) Perfectly inelastic",
                    "B) Inelastic",
                    "C) Unit elastic",
                    "D) Elastic",
                ],
                3,
                [
                    "The absolute price elasticity is `% change in quantity / % change in price`.",
                    "`25% / 10% = 2.5`, which is greater than 1, so demand is elastic.",
                ],
                "micro-elasticity",
            ),
            frq(
                "A perfectly competitive firm faces a market price of $18. Its marginal cost for units 1–5 is $6, $10, $14, $18, and $23. State the profit-maximizing output using the marginal rule.",
                [
                    "For a price-taking firm, marginal revenue equals price: `MR = $18`.",
                    "Produce units for which marginal cost is no greater than marginal revenue, stopping where the next unit costs more.",
                    "The fourth unit has `MC = MR`; the fifth has `MC > MR`.",
                ],
                ["Profit-maximizing output: 4 units, assuming price covers average variable cost."],
                "micro-firm-output",
            ),
            mcq(
                "When marginal cost is below average total cost, producing one more unit causes average total cost to:",
                [
                    "A) Rise",
                    "B) Fall",
                    "C) Remain fixed by definition",
                    "D) Equal marginal revenue",
                ],
                1,
                [
                    "A marginal value below the current average pulls that average downward.",
                    "Therefore ATC falls while MC is below ATC.",
                ],
                "micro-cost-curves",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 3: Imperfect Competition",
        MICRO,
        "CED-aligned practice with monopoly, price discrimination, monopolistic competition, and oligopoly.",
        ["unit-3", "imperfect-competition", "monopoly"],
        [
            mcq(
                "A single-price monopolist maximizes profit by producing where:",
                [
                    "A) Price equals marginal cost in every case",
                    "B) Marginal revenue equals marginal cost, then charging the demand-curve price",
                    "C) Average total cost is highest",
                    "D) Demand equals marginal revenue at every output",
                ],
                1,
                [
                    "The marginal decision rule chooses the quantity where MR equals MC.",
                    "The monopolist then uses the demand curve to identify the highest price buyers will pay for that quantity.",
                ],
                "micro-monopoly",
            ),
            frq(
                "Explain why a profit-maximizing single-price monopoly generally creates deadweight loss relative to a competitive market.",
                [
                    "A monopoly restricts output to the quantity where `MR = MC` and charges a price above marginal cost.",
                    "Units for which consumer willingness to pay exceeds marginal cost remain unproduced.",
                    "The lost mutually beneficial trades create deadweight loss.",
                ],
                [
                    "Because monopoly output is below the allocatively efficient `P = MC` quantity, gains from trade on omitted units are lost."
                ],
                "micro-monopoly-efficiency",
            ),
            mcq(
                "Which characteristic most distinguishes monopolistic competition from perfect competition?",
                [
                    "A) Product differentiation",
                    "B) A single seller protected by insurmountable barriers",
                    "C) Strategic interaction among only two firms is required",
                    "D) Firms can never enter or exit",
                ],
                0,
                [
                    "Monopolistically competitive firms sell differentiated but substitutable products.",
                    "Entry and exit remain relatively easy, unlike a protected monopoly.",
                ],
                "micro-market-structures",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 4: Factor Markets",
        MICRO,
        "CED-aligned practice with derived demand, marginal revenue product, labor markets, and income distribution.",
        ["unit-4", "factor-markets", "labor"],
        [
            mcq(
                "For a perfectly competitive firm selling output at price `P`, the marginal revenue product of labor equals:",
                [
                    "A) Wage divided by price",
                    "B) Marginal product of labor times output price",
                    "C) Total product minus fixed cost",
                    "D) Average product times the number of workers",
                ],
                1,
                [
                    "Marginal revenue product is the added revenue from one more unit of input.",
                    "For a price-taking seller, `MRP_L = MP_L × P`.",
                ],
                "micro-mrp",
            ),
            frq(
                "A competitive firm's third worker adds 8 units of output per hour, and output sells for $5 per unit. Calculate that worker's marginal revenue product and state whether the worker should be hired at a $35 hourly wage.",
                [
                    "`MRP = marginal product × output price = 8 × $5`.",
                    "Hire an additional worker when the worker's MRP is at least the marginal resource cost.",
                ],
                ["MRP is $40 per hour; hire the third worker because $40 exceeds the $35 wage."],
                "micro-labor-demand",
            ),
            mcq(
                "Why is a firm's demand for labor called a derived demand?",
                [
                    "A) It derives from consumer demand for the output labor helps produce",
                    "B) It is set only by the legal minimum wage",
                    "C) It is unrelated to worker productivity",
                    "D) It always slopes upward",
                ],
                0,
                [
                    "Labor is valued for its contribution to producing goods and services.",
                    "Changes in demand for the final output therefore affect demand for the input.",
                ],
                "micro-derived-demand",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Unit 5: Market Failure and the Role of Government",
        MICRO,
        "CED-aligned practice with externalities, public goods, common resources, equity, and policy.",
        ["unit-5", "market-failure", "externalities"],
        [
            mcq(
                "In an unregulated market with a negative production externality, the market quantity is typically:",
                [
                    "A) Below the socially efficient quantity because MSC is below MPC",
                    "B) Above the socially efficient quantity because marginal social cost exceeds marginal private cost",
                    "C) Efficient because external costs are included in supply",
                    "D) Zero",
                ],
                1,
                [
                    "Producers consider private costs but not all costs imposed on others.",
                    "Because `MSC > MPC`, market output extends beyond the socially efficient quantity.",
                ],
                "micro-negative-externality",
            ),
            frq(
                "A factory's emissions impose an external cost of $12 per unit of output. Identify a corrective per-unit tax and explain its intended market effect.",
                [
                    "A Pigouvian tax equal to the marginal external cost makes the producer face the social cost at the efficient quantity.",
                    "The tax shifts the private supply curve upward and reduces output toward the socially efficient level.",
                ],
                [
                    "Corrective tax: $12 per unit; it internalizes the external cost and lowers output toward the efficient quantity."
                ],
                "micro-corrective-tax",
            ),
            mcq(
                "A public good is defined by which pair of characteristics?",
                [
                    "A) Rival and excludable",
                    "B) Rival and nonexcludable",
                    "C) Nonrival and nonexcludable",
                    "D) Nonrival and always privately profitable",
                ],
                2,
                [
                    "Nonrival means one person's use does not substantially reduce availability to others.",
                    "Nonexcludable means it is difficult to prevent nonpayers from benefiting.",
                ],
                "micro-public-goods",
            ),
        ],
    ),
    quiz(
        "AI Topic Exercises — Mixed Review: AP Microeconomics",
        MICRO,
        "Mixed CED review connecting markets, elasticity, firm behavior, factor demand, and externalities.",
        ["mixed-review", "microeconomics"],
        [
            mcq(
                "Demand for a product increases, raising its price. For a competitive firm using labor to produce it, what happens to labor demand, all else equal?",
                [
                    "A) Labor demand decreases because marginal product must fall",
                    "B) Labor demand increases because each worker's marginal revenue product rises",
                    "C) Labor supply becomes perfectly inelastic",
                    "D) The wage must become zero",
                ],
                1,
                [
                    "For a competitive seller, `MRP_L = MP_L × output price`.",
                    "A higher output price raises MRP at each labor quantity and shifts labor demand right.",
                ],
                "micro-mixed-factor",
            ),
            frq(
                "A competitive market has an equilibrium price of $20, but production creates an external cost. Compare marginal private cost and marginal social cost, then identify one policy that can improve efficiency.",
                [
                    "With a negative production externality, marginal social cost equals private cost plus external cost.",
                    "Thus MSC lies above MPC, and the unregulated market overproduces.",
                    "A per-unit tax tied to marginal external cost can internalize the spillover.",
                ],
                [
                    "`MSC > MPC`; impose a corrective tax equal to the marginal external cost at the efficient output."
                ],
                "micro-mixed-externality",
                3,
            ),
            mcq(
                "If demand is elastic, a firm's price decrease will cause total revenue to:",
                [
                    "A) Increase because quantity rises by a larger percentage than price falls",
                    "B) Decrease because quantity never responds to price",
                    "C) Stay constant by definition",
                    "D) Become equal to total cost",
                ],
                0,
                [
                    "Elastic demand has an absolute elasticity greater than one.",
                    "The percentage increase in quantity demanded exceeds the percentage decrease in price, so total revenue rises.",
                ],
                "micro-mixed-elasticity",
            ),
        ],
    ),
]


if __name__ == "__main__":
    print(len(QUIZZES), sum(len(q['items']) for q in QUIZZES))
