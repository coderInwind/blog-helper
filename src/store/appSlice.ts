import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initState: CounterState = {
  count: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState: initState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
  },
});

export default appSlice.reducer;

export const { increment } = appSlice.actions;
