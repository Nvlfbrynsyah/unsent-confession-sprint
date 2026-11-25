// Writes the Unsent micro-confession to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
// The entry is exactly two parts: a "To:" line and the one-line unsent message.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const CONFESSION = [
  "To: Daniel",
  "I've stopped coming because you always wait at the second corner, not because of my knee.",
].join("\n");

const outDir = process.env.OUTPUT_DIR;
const target = outDir && outDir.length > 0 ? join(outDir, "entry.txt") : "/output/entry.txt";

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, CONFESSION + "\n", { encoding: "utf8" });

console.log(target);
