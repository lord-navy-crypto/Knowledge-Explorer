/** Starter examples for browser-only online editors (no remote runner). */

export type EasyLangExample = { id: string; title: string; code: string };

export const jsExamples: EasyLangExample[] = [
  {
    id: "js-hello",
    title: "Hello + loop",
    code: `const name = "Explorer";
console.log("Hello,", name);

for (let i = 1; i <= 3; i++) {
  console.log("step", i);
}`,
  },
  {
    id: "js-array",
    title: "Array map / filter",
    code: `const nums = [3, 7, 2, 9, 4];
const evens = nums.filter((n) => n % 2 === 0);
const doubled = nums.map((n) => n * 2);
console.log("evens:", evens);
console.log("doubled:", doubled);
console.log("sum:", nums.reduce((a, b) => a + b, 0));`,
  },
];

export const tsExamples: EasyLangExample[] = [
  {
    id: "ts-hello",
    title: "Typed greet",
    code: `function greet(name: string, times: number = 1): string {
  return Array.from({ length: times }, () => \`Hi, \${name}!\`).join(" ");
}

console.log(greet("CSA", 2));

type Point = { x: number; y: number };
const p: Point = { x: 3, y: 4 };
console.log("distance:", Math.hypot(p.x, p.y));`,
  },
  {
    id: "ts-filter",
    title: "Interface + filter",
    code: `interface Student {
  name: string;
  score: number;
}

const classList: Student[] = [
  { name: "Alex", score: 92 },
  { name: "Blake", score: 78 },
  { name: "Casey", score: 88 },
];

const honor = classList.filter((s) => s.score >= 85);
console.log("honor roll:", honor.map((s) => s.name).join(", "));`,
  },
];

export const sqlExamples: EasyLangExample[] = [
  {
    id: "sql-basics",
    title: "Create + select",
    code: `CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT,
  score INTEGER
);

INSERT INTO students (name, score) VALUES
  ('Alex', 92),
  ('Blake', 78),
  ('Casey', 88);

SELECT name, score
FROM students
WHERE score >= 85
ORDER BY score DESC;`,
  },
  {
    id: "sql-group",
    title: "GROUP BY average",
    code: `CREATE TABLE attempts (
  subject TEXT,
  score INTEGER
);

INSERT INTO attempts VALUES
  ('Physics', 80),
  ('Physics', 90),
  ('Chem', 70),
  ('Chem', 85),
  ('Chem', 95);

SELECT subject,
       COUNT(*) AS n,
       ROUND(AVG(score), 1) AS avg_score
FROM attempts
GROUP BY subject
ORDER BY avg_score DESC;`,
  },
];

export const markdownExamples: EasyLangExample[] = [
  {
    id: "md-notes",
    title: "Study notes",
    code: `# Code lab notes

## Goal
Practice **Markdown** with a little math: $E = mc^2$.

### Checklist
- [x] Open the editor
- [ ] Write one paragraph
- [ ] Add a formula

\`\`\`python
print("optional code fence")
\`\`\`

> Tip: use headings to keep notes scannable.
`,
  },
  {
    id: "md-lab",
    title: "Lab report sketch",
    code: `## Lab: pendulum period

**Hypothesis:** longer string → longer period.

| Trial | Length (m) | Period (s) |
|------:|-----------:|-----------:|
| 1 | 0.40 | 1.27 |
| 2 | 0.60 | 1.55 |

$$T \\approx 2\\pi\\sqrt{L/g}$$
`,
  },
];
