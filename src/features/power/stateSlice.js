import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenLocked: true,
  shutDownScreen: false,
  bootingScreen: false,
};

const stateSlice = createSlice({
  name: "power",
  initialState,
  reducers: {
    screenOn: (state) => {
      state.screenLocked = false;
    },
    screenOff: (state) => {
      state.screenLocked = true;
    },
    shutOffScreen: (state) => {
      state.shutDownScreen = true;
    },
    shutOnScreen: (state) => {
      state.shutDownScreen = false;
    },
  },
});

export const { screenOn, screenOff, shutOffScreen, shutOnScreen } =
  stateSlice.actions;

export const screenLockedValue = (state) => state.power.screenLocked;
export const shutDownScreenValue = (state) => state.power.shutDownScreen;

export default stateSlice.reducer;
