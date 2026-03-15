#!/usr/bin/env node
/**
 * Bumps the patch version (last digit) in package.json.
 * Used by the pre-commit hook to auto-increment the build number.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = join(__dirname, "..", "package.json");

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
const parts = pkg.version.split(".").map(Number);
parts[parts.length - 1]++;
pkg.version = parts.join(".");

writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
console.log(`Bumped version to ${pkg.version}`);
