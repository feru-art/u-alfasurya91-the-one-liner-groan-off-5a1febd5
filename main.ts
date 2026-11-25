import { mkdirSync, writeFileSync } from "node:fs";

const line = "My socks went to couples therapy because they kept drifting apart.";

const outputDir = "/output";
const outputPath = "/output/entry.txt";

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, line, "utf8");
