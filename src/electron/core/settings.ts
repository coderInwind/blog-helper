import WindowManager from "./windows";
import { ipcMain } from "electron";
import Store from "electron-store";

export default function setSettingsListener(manager: WindowManager) {
  const store = new Store();

  const MENU_STORE_KEY = "menuOn";
  ipcMain.handle("set-menu", (_, state) => {
    store.set(MENU_STORE_KEY, state);
  });
}
