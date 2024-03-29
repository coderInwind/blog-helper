import { ipcRenderer } from "electron";
import { WindowStateListenerType } from "../schema-types";

// 通过ipcrender 给electron 发消息

const utilsBridge = {
  minimize: () => {
    ipcRenderer.invoke("minimize-window");
  },

  maximize: () => {
    ipcRenderer.invoke("maximize-window");
  },

  close: () => {
    ipcRenderer.invoke("close-window");
  },

  isMaximized: () => {
    return ipcRenderer.sendSync("is-maximized");
  },

  addWindowStateListener: (
    callback: (type: WindowStateListenerType, state: boolean) => void
  ) => {
    ipcRenderer.removeAllListeners("maximized");
    ipcRenderer.on("maximized", () => {
      callback(WindowStateListenerType.Maximized, true);
    });

    ipcRenderer.on("minimized", () => {
      callback(WindowStateListenerType.Minimiaed, false);
    });

    ipcRenderer.on("unmaximized", () => {
      callback(WindowStateListenerType.Minimiaed, false);
    });
  },
};

declare global {
  interface Window {
    utils: typeof utilsBridge;
  }
}

export default utilsBridge;
