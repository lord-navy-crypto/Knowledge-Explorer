import { readFile } from "node:fs/promises";

const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
const lock = JSON.parse(await readFile(new URL("../package-lock.json", import.meta.url), "utf8"));
const expected = pkg.dependencies?.["@mlc-ai/web-llm"];
const declared = lock.packages?.[""]?.dependencies?.["@mlc-ai/web-llm"];
const installed = lock.packages?.["node_modules/@mlc-ai/web-llm"]?.version;

if (!expected || expected !== "0.2.82") {
  throw new Error(`WebLLM must stay pinned to 0.2.82; package.json has ${expected ?? "missing"}.`);
}

if (declared !== expected || (installed && installed !== expected)) {
  console.warn(
    `[webllm] package-lock metadata is stale (${declared ?? "missing"}/${installed ?? "missing"}); npm install must resolve package.json exact ${expected}.`
  );
}

console.log(`[webllm] runtime pin: ${expected}`);
