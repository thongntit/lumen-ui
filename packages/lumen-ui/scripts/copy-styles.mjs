import { cpSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// 1) Top-level token sheets
const stylesSrc = resolve(root, "src/styles");
const stylesDst = resolve(root, "dist/styles");
mkdirSync(stylesDst, { recursive: true });
cpSync(stylesSrc, stylesDst, { recursive: true });
console.log(`copied ${relative(root, stylesSrc)} -> ${relative(root, stylesDst)}`);

// 2) Per-component CSS (mirrors src layout into dist)
const componentsSrc = resolve(root, "src/components");
const componentsDst = resolve(root, "dist/components");

function copyCss(srcDir, dstDir) {
  for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
    const s = join(srcDir, entry.name);
    const d = join(dstDir, entry.name);
    if (entry.isDirectory()) {
      mkdirSync(d, { recursive: true });
      copyCss(s, d);
    } else if (entry.name.endsWith(".css")) {
      cpSync(s, d);
      console.log(`copied ${relative(root, s)} -> ${relative(root, d)}`);
    }
  }
}

copyCss(componentsSrc, componentsDst);
