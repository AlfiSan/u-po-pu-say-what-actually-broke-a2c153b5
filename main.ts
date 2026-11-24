// Say What Actually Broke — one line of honest error copy.
// The line names the real failure (a double charge) and tells the
// user what to do next, in the voice of a tired support engineer.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The payment went through twice because the retry button works and the first charge did too. Call your bank, not us.";

// The gate only accepts 1–200 characters of real text: refuse to
// write anything outside it instead of shipping a broken entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
