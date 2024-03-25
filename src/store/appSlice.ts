import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  planeOn: boolean;
}

const initAppState: AppState = {
  planeOn: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState: initAppState,
  reducers: {
    changePlaneState(state, { payload }) {
      window.settings.setDefaultMenu(payload);
    },
  },
});

export default appSlice.reducer;

export const { changePlaneState } = appSlice.actions;
