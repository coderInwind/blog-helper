import { ipcRenderer } from "electron";

// 通过ipcrender 给electron 发消息

const utilsBridge = {
  minimize: () => {
    ipcRenderer.invoke("minimize-window");
  },
};

export default utilsBridge;
