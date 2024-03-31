import { ipcRenderer } from "electron";

// sendSync => ipcMain.on      双向的（可以有返回值）
// invoke   => ipcMain.handle  单向的

const settingsBridge = {
  setDefaultMenu: (state: boolean) => {
    ipcRenderer.invoke("set-menu", state);
  },
  getDefaultMenu: () => {
    return ipcRenderer.sendSync("get-menu");
  },
};

declare global {
  interface Window {
    settings: typeof settingsBridge;
  }
}

export default settingsBridge;
