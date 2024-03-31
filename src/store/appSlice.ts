import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  planeOn: boolean;
}

const initAppState: AppState = {
  planeOn: window.settings.getDefaultMenu()
};

export const appSlice = createSlice({
  name: "app",
  initialState: initAppState,
  reducers: {
    toggleMenu(state, { payload }) {     
      state.planeOn = payload 
      window.settings.setDefaultMenu(state.planeOn);
    },
  },
});

export default appSlice.reducer;

export const { toggleMenu } = appSlice.actions;
