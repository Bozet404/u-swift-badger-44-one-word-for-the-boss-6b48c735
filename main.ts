// One Word for the Boss — entry program.
//
// The whole entry is a single word that describes my boss. It has to land
// on its own: no phrase, no caption, no explanation. This program writes
// exactly that word to /output/entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Nuklir";

// The gate, enforced here before anything is written: one word, 1 to 30
// characters, no whitespace anywhere. A word that fails this never reaches
// the judge, so refuse loudly instead of writing a bad entry.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

console.log(`wrote ${WORD.length} characters to /output/entry.txt`);
