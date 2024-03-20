import { ipcRenderer } from "electron";

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
};

declare global {
  interface Window {
    utils: typeof utilsBridge;
  }
}

export default utilsBridge;
