import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

let mainWindow: BrowserWindow | null = null;

// __dirname cho CJS build đã đủ; đoạn dưới dành cho ESM scenario.
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools({ mode: "detach" });
  } else {
    // Nếu bạn dùng `next export`: out/index.html
    const indexHtml = path.join(__dirname, "../out/index.html");
    mainWindow.loadURL(`file://${indexHtml}`);
  }

  mainWindow.on("closed", () => (mainWindow = null));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
