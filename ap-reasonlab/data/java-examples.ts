/** Starter examples for the Java training editor. */

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
    id: "java-scanner",
    title: "Scanner add two ints",
    code: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    System.out.println(a + b);
  }
}
`,
  },
  {
    id: "java-student-write",
    title: "Student class (write / download)",
    code: `public class Student {
  private String name;
  private int score;

  public Student(String name, int score) {
    this.name = name;
    this.score = score;
  }

  public String toString() {
    return name + " (" + score + ")";
  }

  public static void main(String[] args) {
    // Practice Run only executes simple main() drills.
    // For full classes, Download .java and use a real JDK / IntelliJ.
    System.out.println("Write the class above, then download for real Java.");
  }
}
`,
  },
];
