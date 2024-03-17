import { configureStore } from "@reduxjs/toolkit";
import appReduce from "./appSlice";

export const store = configureStore({
  reducer: { appReduce },
});


export type RootStore = ReturnType<typeof store.getState>