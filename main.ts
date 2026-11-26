import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Vacuum's Best Excuse — one fixed line, deterministic.
// The vacuum misfiled a dirty corner on its own map and now hides
// behind policy instead of admitting the mistake.
const EXCUSE =
  "My map lists that corner as decorative dust. I don't clean decor, and appeals go to the dustbin.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
