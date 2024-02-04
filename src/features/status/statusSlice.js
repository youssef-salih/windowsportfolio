import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  volume: 50,
  brightness: 100,
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
  },
});

export const { changeBrightness, changeVolume } = statusSlice.actions;

export const volumeValue = (state) => state.status.volume;
export const brightnessValue = (state) => state.status.brightness;

export default statusSlice.reducer;
