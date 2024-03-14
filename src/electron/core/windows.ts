import { app, BrowserWindow } from "electron";

class WindowManager {
  mainWindow: BrowserWindow | null = null;

  constructor() {
    this.init();
  }

  private init() {
    this.setListeners();
  }

  private setListeners() {
    app.whenReady().then(() => {
      this.createWindow();
    });
  }

  createWindow() {
    const createWindow = () => {
      this.mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        title: "Blog Helper",
      });

      this.mainWindow.loadURL("http://localhost:5173/");
    };

    createWindow();
  }
}

export default WindowManager;
