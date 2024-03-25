"use strict";
const electron = require("electron");
const utilsBridge = {
  minimize: () => {
    electron.ipcRenderer.invoke("minimize-window");
  },
  maximize: () => {
    electron.ipcRenderer.invoke("maximize-window");
  },
  close: () => {
    electron.ipcRenderer.invoke("close-window");
  }
};
electron.contextBridge.exposeInMainWorld("utils", utilsBridge);
