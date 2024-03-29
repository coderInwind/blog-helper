"use strict";
const electron = require("electron");
var WindowStateListenerType = /* @__PURE__ */ ((WindowStateListenerType2) => {
  WindowStateListenerType2[WindowStateListenerType2["Maximized"] = 0] = "Maximized";
  WindowStateListenerType2[WindowStateListenerType2["Minimiaed"] = 1] = "Minimiaed";
  WindowStateListenerType2[WindowStateListenerType2["Unmaximized"] = 2] = "Unmaximized";
  return WindowStateListenerType2;
})(WindowStateListenerType || {});
const utilsBridge = {
  minimize: () => {
    electron.ipcRenderer.invoke("minimize-window");
  },
  maximize: () => {
    electron.ipcRenderer.invoke("maximize-window");
  },
  close: () => {
    electron.ipcRenderer.invoke("close-window");
  },
  isMaximized: () => {
    return electron.ipcRenderer.sendSync("is-maximized");
  },
  addWindowStateListener: (callback) => {
    electron.ipcRenderer.removeAllListeners("maximized");
    electron.ipcRenderer.on("maximized", () => {
      callback(WindowStateListenerType.Maximized, true);
    });
    electron.ipcRenderer.on("minimized", () => {
      callback(WindowStateListenerType.Minimiaed, false);
    });
    electron.ipcRenderer.on("unmaximized", () => {
      callback(WindowStateListenerType.Minimiaed, false);
    });
  }
};
const settingsBridge = {
  setDefaultMenu: (state) => {
    electron.ipcRenderer.invoke("set-menu", state);
  },
  getDefaultMenu: () => {
  }
};
electron.contextBridge.exposeInMainWorld("utils", utilsBridge);
electron.contextBridge.exposeInMainWorld("settings", settingsBridge);
