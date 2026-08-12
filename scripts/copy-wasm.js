import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(rootDir, "node_modules", "zxing-wasm", "dist", "reader", "zxing_reader.wasm");
const target = join(rootDir, "public", "zxing_reader.wasm");

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
console.log("Copied zxing_reader.wasm into public assets.");
