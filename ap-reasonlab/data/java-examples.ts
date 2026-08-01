/** Starter examples for the Java writing editor. */

export type JavaExample = { id: string; title: string; code: string };

export const javaExamples: JavaExample[] = [
  {
    id: "java-hello",
    title: "Hello main",
    code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, CSA!");
  }
}
`,
  },
  {
    id: "java-array-sum",
    title: "Array sum",
    code: `public class Main {
  public static void main(String[] args) {
    int[] a = {1, 2, 3, 4};
    int sum = 0;
    for (int x : a) sum += x;
    System.out.println(sum);
  }
}
`,
  },
  {
    id: "java-student",
    title: "Simple Student class",
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
}
`,
  },
];
