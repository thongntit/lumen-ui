import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { dirname, join, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const srcRoot = resolve(root, "src");
const distRoot = resolve(root, "dist");

const DIRECTIVE_RE = /^\s*['"]use client['"]\s*;?/;

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walk(full);
    else if (entry.endsWith(".tsx") || entry.endsWith(".ts")) yield full;
  }
}

let patched = 0;
for (const srcFile of walk(srcRoot)) {
  const head = readFileSync(srcFile, "utf8").slice(0, 120);
  if (!DIRECTIVE_RE.test(head)) continue;

  const rel = relative(srcRoot, srcFile).replace(/\.tsx?$/, ".js");
  const distFile = join(distRoot, rel);

  try {
    const current = readFileSync(distFile, "utf8");
    if (DIRECTIVE_RE.test(current)) continue;
    writeFileSync(distFile, `"use client";\n${current}`);
    console.log(`patched "use client" -> ${relative(root, distFile)}`);
    patched++;
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }
}

console.log(`preserve-use-client: patched ${patched} file(s)`);
