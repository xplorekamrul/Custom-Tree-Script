# 📂 Directory Tree Visualizer (Node.js)

This project includes a simple script (`generateTree.cjs`) that prints a **colorized directory tree** to your terminal — similar to the Unix `tree` command — but written in **Node.js** using **CommonJS**.

## 🌟 Features

- 📁 Shows folders and 📄 files with icons
- 🎨 Color-codes by file type (TypeScript, JavaScript, JSON, etc.)
- ❌ Automatically ignores common folders like `node_modules`, `.git`, `.next`, etc.
- ✅ No need for `tree` CLI or Unix tools — just Node.js

---

## 🚀 How to Use

### 1. Add the Script

The tree script is saved at:

```
scripts/generateTree.cjs
```

### 2. Update `package.json`

Add this to your `scripts` section:

```json
"scripts": {
    "tree": "npx ts-node scripts/generateTree.ts" ,
}
```

### 3. Run from the Terminal

```bash
pnpm tree
```

> You’ll see a full directory tree starting from the current working directory, printed in color with emojis.

---

## 🛠 How It Works

- Uses built-in Node.js modules:
  - `fs` for reading file system contents
  - `path` for resolving directory paths
- Recursively walks through all directories and files
- Applies color codes using ANSI escape sequences
- Uses emojis to distinguish 📁 directories and 📄 files
- Filters out folders like `node_modules`, `.git`, `.next`, and `dist` for clarity

---

## 🧪 Example Output

```
📁 src
   📁 components
      📄 App.tsx
      📄 Button.tsx
   📁 lib
      📄 utils.ts
📁 public
   📄 favicon.ico
📄 package.json
📄 README.md
```

---

## 💡 Tip

You can optionally pass a directory path:

```bash
node scripts/generateTree.cjs ./src
```

---

## 📎 License

MIT — free to use and modify.
