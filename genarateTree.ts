const fs = require("fs");
const path = require("path");

// ANSI colors
const RESET = "\x1b[0m";
const BLUE = "\x1b[34m";     // directories
const GREEN = "\x1b[32m";    // .ts, .tsx
const CYAN = "\x1b[36m";     // .json, .md
const YELLOW = "\x1b[33m";   // .js

const IGNORE = ["node_modules", ".git", ".next", "dist", ".turbo"];

function colorize(fileName: string, isDir: boolean) {
  if (isDir) return BLUE + fileName + RESET;
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) return GREEN + fileName + RESET;
  if (fileName.endsWith(".js")) return YELLOW + fileName + RESET;
  if (fileName.endsWith(".json") || fileName.endsWith(".md")) return CYAN + fileName + RESET;
  return fileName;
}
function printTree(dir: string, indent = "") {
  const items = fs.readdirSync(dir).filter((item: string) => !IGNORE.includes(item));  for (const item of items) {
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();
    const icon = isDir ? "📁" : "📄";
    console.log(`${indent}${icon} ${colorize(item, isDir)}`);
    if (isDir) printTree(fullPath, indent + "   ");
  }
}
const baseDir = process.argv[2] || ".";
printTree(path.resolve(baseDir));



// to run the file 
// ===========================================================================


"scripts": {
"tree": "npx ts-node scripts/generateTree.ts" },
}

// this command run only typescript 
// ============================================================================