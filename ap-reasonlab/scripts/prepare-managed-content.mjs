import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const appRoot = join(here, "..");
const sourcePath = join(appRoot, "data", "managed-content.json");
const generatedDir = join(appRoot, "data", ".generated");
const questionnairePath = join(generatedDir, "managed-questionnaires.json");
const manifestPath = join(generatedDir, "managed-content-manifest.json");

const raw = await readFile(sourcePath, "utf8");
const managed = JSON.parse(raw);
const questionnaires = Array.isArray(managed?.questionnaires) ? managed.questionnaires : [];

await mkdir(generatedDir, { recursive: true });
await Promise.all([
  writeFile(questionnairePath, `${JSON.stringify(questionnaires)}\n`, "utf8"),
  writeFile(
    manifestPath,
    `${JSON.stringify(
      {
        sourceBytes: Buffer.byteLength(raw),
        questionnaireCount: questionnaires.length,
        generatedAtBuild: true,
        schema: 1,
      },
      null,
      2
    )}\n`,
    "utf8"
  ),
]);

console.log(
  `[managed-content] generated questionnaire shard: ${questionnaires.length} questionnaires from ${Buffer.byteLength(raw)} source bytes`
);
