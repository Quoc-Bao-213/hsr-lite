# HSR Lite

HSR Lite is a **desktop application** built with [Next.js](https://nextjs.org/) and [Electron](https://www.electronjs.org/).  
It brings the power of web technologies to the desktop, making the app **lightweight, fast, and cross-platform**.

---

## 🚀 Features
- ⚡️ Modern frontend powered by **Next.js**
- 💻 Cross-platform desktop runtime with **Electron**
- 🔄 Hot reload for both Next.js and Electron during development
- 📦 Easy build & distribution using **electron-builder**

---

## 📂 Project Structure
.
├── electron/ # Electron main process code
├── src/ # Next.js source code
├── dist-electron/ # Compiled Electron code (output)
├── out/ # Next.js exported static files
├── tsconfig.json # TypeScript config for Next.js
├── tsconfig.electron.json # TypeScript config for Electron
└── package.json

---

## 🛠 Installation
# Install dependencies
- yarn install

## 🔧 Development
# Run Next.js only
- yarn next

# Run Electron + Next.js (full app)
- yarn dev

# Build
- yarn dist

## 📜 License
MIT © 2025