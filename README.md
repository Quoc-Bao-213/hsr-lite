# 🚀 Honkai Gacha Mini (Next.js + Electron + MongoDB)

HSR Lite is a **desktop application** built with [Next.js](https://nextjs.org/) and [Electron](https://www.electronjs.org/).  
It brings the power of web technologies to the desktop, making the app **lightweight, fast, and cross-platform**.

A mini-game simulating the gacha system inspired by HSR.  
Players can:

- Sign up / Sign in with [Clerk](https://clerk.com).
- Purchase **Stellar Jade** using Stripe.
- Roll banners to obtain characters.
- Manage their inventory and roll history.

---

## 🚀 Features

- ⚡️ Modern frontend powered by **Next.js**
- 💻 Cross-platform desktop runtime with **Electron**
- 🔄 Hot reload for both Next.js and Electron during development
- 📦 Easy build & distribution using **electron-builder**

---

## 📂 Project Structure

```bash
.
├── electron/ # Electron main process code
├── src/ # Next.js source code
├── dist-electron/ # Compiled Electron code (output)
├── out/ # Next.js exported static files
├── tsconfig.json # TypeScript config for Next.js
├── tsconfig.electron.json # TypeScript config for Electron
└── package.json
```

---

## ⚙️ Setup & Installation

### 1. Clone the project

- git clone https://github.com/Quoc-Bao-213/hsr-lite.git
- cd hsr-lite

### 2. Install dependencies

- yarn install

# or

- npm install

## 🚀 Development

### Run Next.js only

- yarn next

### Run Electron + Next.js (full app)

- yarn dev

### Build

- yarn dist

## 📜 License

MIT © 2025
