var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { app, BrowserWindow } from "electron";
class WindowManager {
  constructor() {
    __publicField(this, "mainWindow", null);
    this.init();
  }
  init() {
    this.setListeners();
  }
  setListeners() {
    app.whenReady().then(() => {
      this.createWindow();
    });
  }
  createWindow() {
    const createWindow = () => {
      this.mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        title: "Blog Helper"
      });
      this.mainWindow.loadURL("http://localhost:5173/");
    };
    createWindow();
  }
}
new WindowManager();
