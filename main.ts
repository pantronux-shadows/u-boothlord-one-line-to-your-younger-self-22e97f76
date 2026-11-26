// One Line to Your Younger Self — writes the entry line to /output/entry.txt.
// Deterministic: no clock, no randomness, no network.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const line =
  "Call Dad back tonight — from here, his voicemail is all I have, and he was funnier than you ever bothered to notice.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
