// Entry program for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X".
//
// What it does: it hands the grader the address of the X post that is the
// entry. That address lives in POST.json at the repository root; this program
// reads that file and writes the very same bytes to the output directory the
// grader provides, as POST.json.
//
// The program is deliberately boring: standard library only, no network, no
// randomness, no clock, no environment secrets. The same POST.json always
// produces the same output file, so two runs are byte for byte identical.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

let postBytes: Buffer;
try {
  postBytes = readFileSync(join(botDir, 'POST.json'));
} catch (err) {
  console.error(`Could not read POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), postBytes);
console.log(`Wrote ${join(outputDir, 'POST.json')}`);
