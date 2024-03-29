import WindowManager from "./windows";
import { ipcMain } from "electron";

export default function setSettingsListener(manager: WindowManager) {

  ipcMain.handle("set-menu",()=>{
    console.log(1231313123
      
      );
    
  })


}
