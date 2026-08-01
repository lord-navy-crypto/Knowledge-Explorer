/** Seeded common / long code blocks for the Code board adder. */

export type CodeBoardLanguage = "python" | "java" | "html" | "javascript" | "other";

export type CodeBoardBlock = {
  id: string;
  language: CodeBoardLanguage;
  title: string;
  /** Notes / why this block exists — shown above the code */
  comment: string;
  code: string;
  /** true = shipped seed; false = user-added (localStorage) */
  builtin?: boolean;
};

export const CODE_BOARD_LANGUAGES: Array<{ id: CodeBoardLanguage | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "python", label: "Python" },
  { id: "java", label: "Java" },
  { id: "html", label: "HTML" },
  { id: "javascript", label: "JavaScript" },
  { id: "other", label: "Other" },
];

export const seedCodeBlocks: CodeBoardBlock[] = [
  {
    id: "py-hello",
    language: "python",
    title: "Hello + input",
    comment: "Basic I/O starter — ask for a name and greet.",
    builtin: true,
    code: `name = input("Your name: ")
print(f"Hello, {name}!")`,
  },
  {
    id: "py-list-avg",
    language: "python",
    title: "Average of a list",
    comment: "Loop + sum pattern for AP CSP / intro Python.",
    builtin: true,
    code: `nums = [3, 7, 2, 9]
avg = sum(nums) / len(nums)
print(avg)`,
  },
  {
    id: "py-file-read",
    language: "python",
    title: "Read a text file safely",
    comment: "Longer pattern: open → read lines → strip → close via with.",
    builtin: true,
    code: `# Read every non-empty line from a file
path = "notes.txt"
lines = []
with open(path, encoding="utf-8") as f:
    for raw in f:
        line = raw.strip()
        if line:
            lines.append(line)

print(f"Loaded {len(lines)} lines")
for i, line in enumerate(lines, start=1):
    print(f"{i:02d}. {line}")`,
  },
  {
    id: "java-hello",
    language: "java",
    title: "Hello main",
    comment: "Minimal public class for CSA-style starters.",
    builtin: true,
    code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, CSA!");
  }
}`,
  },
  {
    id: "java-array-sum",
    language: "java",
    title: "Array sum",
    comment: "Enhanced for-loop over an int array.",
    builtin: true,
    code: `int[] a = {1, 2, 3, 4};
int sum = 0;
for (int x : a) sum += x;
System.out.println(sum);`,
  },
  {
    id: "java-class-student",
    language: "java",
    title: "Simple Student class",
    comment: "Fields + constructor + toString — common CSA scaffold.",
    builtin: true,
    code: `public class Student {
  private String name;
  private int score;

  public Student(String name, int score) {
    this.name = name;
    this.score = score;
  }

  public String getName() { return name; }
  public int getScore() { return score; }

  @Override
  public String toString() {
    return name + " (" + score + ")";
  }

  public static void main(String[] args) {
    Student s = new Student("Alex", 92);
    System.out.println(s);
  }
}`,
  },
  {
    id: "html-card",
    language: "html",
    title: "Simple page card",
    comment: "Starter HTML structure for labs / demos.",
    builtin: true,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Knowledge Explorer demo</title>
  <style>
    body { font-family: system-ui; margin: 2rem; }
    .card { border: 1px solid #ddd; padding: 1rem; border-radius: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Simulation placeholder</h1>
    <p>Replace this with your lab page.</p>
  </div>
</body>
</html>`,
  },
  {
    id: "js-debounce",
    language: "javascript",
    title: "Debounce helper",
    comment: "Useful when wiring search boxes or resize handlers.",
    builtin: true,
    code: `function debounce(fn, wait = 250) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

const onSearch = debounce((q) => {
  console.log("search:", q);
}, 300);`,
  },
];
