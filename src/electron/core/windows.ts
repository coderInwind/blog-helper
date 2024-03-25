import { app, BrowserWindow, ipcMain } from "electron";
// 如果你使用 BrowserWindow 来创建多个窗口，每个窗口都会被当作一个独立的进程运行。这可能会影响应用程序的性能和稳定性。要解决这个问题，可以使用 electron-window-state 模块来管理窗口状态，并确保所有窗口在同一个进程中运行
import windowStateKeeper from "electron-window-state";
import path from "node:path";
import setUtilsListener from "./utils";

class WindowManager {
  mainWindow!: BrowserWindow;

  private mainWindowState!: windowStateKeeper.State;

  constructor() {
    this.init();
  }

  private init() {
    app.whenReady().then(() => {
      this.mainWindowState = windowStateKeeper({
        defaultHeight: 1000,
        defaultWidth: 800,
      });
      this.createWindow();
      this.setListeners();
    });
  }

  private setListeners() {
    setUtilsListener(this.mainWindow);
  }

  createWindow() {
    this.mainWindow = new BrowserWindow({
      height: this.mainWindowState.width,
      width: this.mainWindowState.height,
      x: this.mainWindowState.x,
      y: this.mainWindowState.y,
      title: "Blog Helper",
      titleBarStyle: "hiddenInset", // 在mac端隐藏标题栏
      frame: process.platform === "darwin", // 在mac端不隐藏navbar
      webPreferences: {
        preload: path.join(app.getAppPath(), "dist-electron/preload.mjs"),
      },
    });

    this.mainWindow.loadURL("http://localhost:5173/");

    this.mainWindowState.manage(this.mainWindow);
  }



  zoom(){
    
  }
}

export default WindowManager;
