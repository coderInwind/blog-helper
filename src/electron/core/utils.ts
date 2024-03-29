import { ipcMain, BrowserWindow } from "electron";
import WindowManager from "./windows";

const setUtilsListener = (manager: WindowManager) => {
  ipcMain.handle("minimize-window", () => {
    if(manager.hasWindow()){
      manager.mainWindow.minimize();
    }
  });

  ipcMain.handle("maximize-window", () => {
    manager.zoom()
  });

  ipcMain.handle("close-window", () => {
    if(manager.hasWindow()){
      manager.mainWindow.close();
    }
  });

  ipcMain.on("is-maximized",(event)=>{
     event.returnValue = false
  })
};

export default setUtilsListener;
