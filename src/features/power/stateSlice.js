import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenLocked: true,
  shutDownScreen: false,
  bootingScreen: false,
  bgImage: "wall-1",
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
    changeBg: (state, action) => {
      const obj = action.payload;
      state.bgImage = obj;
    },
  },
});

export const { screenOn, screenOff, shutOffScreen, shutOnScreen, changeBg } =
  stateSlice.actions;

export const screenLockedValue = (state) => state.power.screenLocked;
export const shutDownScreenValue = (state) => state.power.shutDownScreen;
export const bgImageValue = (state) => state.power.bgImage;

export default stateSlice.reducer;
