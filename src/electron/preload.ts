import { contextBridge } from "electron";

import utilsBridge from "../bridges/utils";


contextBridge.exposeInMainWorld("utils", utilsBridge);
