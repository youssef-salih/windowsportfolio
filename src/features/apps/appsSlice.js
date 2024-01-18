import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  closed_windows: {
    "about-youssef": false,
  },
  minimized_windows: {},
  maximized_windows: { "about-youssef": false },
};

const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    openApp: (state, action) => {
      const objId = action.payload;
      state.closed_windows[objId] = false;
      state.minimized_windows[objId] = false;
    },
    closeApp: (state, action) => {
      const objId = action.payload;
      state.closed_windows[objId] = true;
      state.maximized_windows[objId] = false;
    },
    minimizeApp: (state, action) => {
      const objId = action.payload;
      state.minimized_windows[objId] = true;
    },
    maximizeApp: (state, action) => {
      const objId = action.payload;
      if (state.maximized_windows[objId] === true) {
        state.maximized_windows[objId] = false;
      } else {
        state.maximized_windows[objId] = true;
      }
    },
  },
});

export const { openApp, closeApp, minimizeApp, maximizeApp } =
  appsSlice.actions;

export const closed_windowsValue = (state) => state.apps.closed_windows;
export const minimized_windowsValue = (state) => state.apps.minimized_windows;
export const maximized_windowsValue = (state) => state.apps.maximized_windows;

export default appsSlice.reducer;
