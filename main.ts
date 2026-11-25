// The Internet in One Word — entry program.
//
// Writes one word for the whole internet to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — every run
// writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "yapping";

// Gate self-check: refuse to write an invalid entry instead of
// producing one the sealed scorer would reject. The gate requires
// UTF-8 text of 1-30 chars, not only whitespace, exactly one word.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  WORD.trim() !== WORD ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
