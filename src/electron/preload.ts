import { contextBridge } from "electron";

import utilsBridge from "../bridges/utils";
import settingsBridge from "../bridges/settings";

contextBridge.exposeInMainWorld("utils", utilsBridge);

contextBridge.exposeInMainWorld("settings", settingsBridge);
