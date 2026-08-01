/** Starter examples for the C# training editor. */

export type CsharpExample = { id: string; title: string; code: string };

export const csharpExamples: CsharpExample[] = [
  {
    id: "cs-hello",
    title: "Hello Main",
    code: `using System;

class Program {
  static void Main() {
    Console.WriteLine("Hello, C#!");
  }
}
`,
  },
  {
    id: "cs-array-sum",
    title: "Array sum",
    code: `using System;

class Program {
  static void Main() {
    int[] a = {1, 2, 3, 4};
    int sum = 0;
    foreach (int x in a) sum += x;
    Console.WriteLine(sum);
  }
}
`,
  },
  {
    id: "cs-readline",
    title: "ReadLine add two ints",
    code: `using System;

class Program {
  static void Main() {
    int a = int.Parse(Console.ReadLine());
    int b = int.Parse(Console.ReadLine());
    Console.WriteLine(a + b);
  }
}
`,
  },
];
