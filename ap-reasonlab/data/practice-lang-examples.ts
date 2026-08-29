import type { PracticeLangSpec } from "@/data/practice-langs";

export type PracticeExample = { id: string; title: string; code: string };

export const PRACTICE_LANG_EXAMPLES: Record<PracticeLangSpec["id"], PracticeExample[]> = {
  c: [
    {
      id: "c-sum",
      title: "Array sum",
      code: `#include <stdio.h>

int main(void) {
  int a[] = {1, 2, 3, 4};
  int n = 4;
  int sum = 0;
  for (int i = 0; i < n; i++) {
    sum += a[i];
  }
  printf("sum = %d\\n", sum);
  return 0;
}
`,
    },
  ],
  cpp: [
    {
      id: "cpp-sum",
      title: "Vector sum",
      code: `#include <iostream>
#include <vector>

int main() {
  std::vector<int> a = {1, 2, 3, 4};
  int sum = 0;
  for (int x : a) sum += x;
  std::cout << "sum = " << sum << "\\n";
  return 0;
}
`,
    },
  ],
  go: [
    {
      id: "go-sum",
      title: "Slice sum",
      code: `package main

import "fmt"

func main() {
  a := []int{1, 2, 3, 4}
  sum := 0
  for _, x := range a {
    sum += x
  }
  fmt.Println("sum =", sum)
}
`,
    },
  ],
  rust: [
    {
      id: "rust-sum",
      title: "Slice sum",
      code: `fn main() {
    let a = [1, 2, 3, 4];
    let sum: i32 = a.iter().sum();
    println!("sum = {}", sum);
}
`,
    },
  ],
  php: [
    {
      id: "php-sum",
      title: "Array sum",
      code: `<?php
$a = [1, 2, 3, 4];
$sum = 0;
foreach ($a as $x) {
  $sum += $x;
}
echo "sum = $sum\\n";
`,
    },
  ],
  ruby: [
    {
      id: "ruby-sum",
      title: "Array sum",
      code: `a = [1, 2, 3, 4]
sum = a.sum
puts "sum = #{sum}"
`,
    },
  ],
  r: [
    {
      id: "r-mean",
      title: "Mean of a vector",
      code: `a <- c(1, 2, 3, 4)
m <- mean(a)
cat("mean =", m, "\\n")
`,
    },
  ],
  swift: [
    {
      id: "swift-sum",
      title: "Array sum",
      code: `let a = [1, 2, 3, 4]
let sum = a.reduce(0, +)
print("sum = \\(sum)")
`,
    },
  ],
  kotlin: [
    {
      id: "kt-sum",
      title: "Array sum",
      code: `fun main() {
  val a = intArrayOf(1, 2, 3, 4)
  val sum = a.sum()
  println("sum = $sum")
}
`,
    },
  ],
};
