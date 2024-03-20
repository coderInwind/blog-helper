import { ipcMain, BrowserWindow } from "electron";

const setUtilsListener = (mainWindow: BrowserWindow) => {
  ipcMain.handle("minimize-window", () => {
    mainWindow.minimize();
  });

  ipcMain.handle("maximize-window", () => {
    mainWindow.maximize();
  });

  ipcMain.handle("close-window", () => {
    mainWindow.close();
  });
};

export default setUtilsListener;
