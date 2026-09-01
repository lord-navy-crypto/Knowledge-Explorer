import { readFile } from "node:fs/promises";

const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
const expected = pkg.dependencies?.["@mlc-ai/web-llm"];

if (expected !== "0.2.82") {
  throw new Error(`WebLLM must stay pinned to 0.2.82; package.json has ${expected ?? "missing"}.`);
}

let installed;
try {
  installed = JSON.parse(
    await readFile(new URL("../node_modules/@mlc-ai/web-llm/package.json", import.meta.url), "utf8")
  ).version;
} catch (error) {
  throw new Error(`Could not inspect installed WebLLM: ${error instanceof Error ? error.message : String(error)}`);
}

if (installed !== expected) {
  throw new Error(`Installed WebLLM ${installed ?? "missing"} does not match required ${expected}.`);
}

console.log(`[webllm] verified installed runtime: ${installed}`);
