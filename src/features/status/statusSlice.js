import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  volume: 50,
  brightness: 100,
  statuso: { wifi: true, bluetooth: true },
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    changeBrightness: (state, action) => {
      const value = action.payload;
      state.brightness = value;
    },
    changeVolume: (state, action) => {
      const value = action.payload;
      state.volume = value;
    },
    toggle: (state, action) => {
      const element = action.payload;
      state.statuso[element] = !state.statuso[element];
    },
  },
});

export const { changeBrightness, changeVolume, toggle } = statusSlice.actions;

export const volumeValue = (state) => state.status.volume;
export const brightnessValue = (state) => state.status.brightness;
export const statusValue = (state) => state.status.statuso;
export const bluetoothValue = (state) => state.status.bluetooth;

export default statusSlice.reducer;
