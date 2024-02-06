import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  closed_windows: {
    "about-youssef": false,
  },
  minimized_windows: {},
  maximized_windows: {},
  focused_window: {},
};

const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    openApp: (state, action) => {
      const objId = action.payload;
      state.closed_windows[objId] = false;
      state.minimized_windows[objId] = false;
      state.focused_window = { [objId]: true };
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
    focusApp: (state, action) => {
      const objId = action.payload;

      state.focused_window = { [objId]: true };

      Object.keys(state.closed_windows).forEach((windowId) => {
        if (windowId !== objId) {
          state.focused_window[windowId] = false;
        }
      });
    },
  },
});

export const { openApp, closeApp, minimizeApp, maximizeApp, focusApp } =
  appsSlice.actions;

export const closed_windowsValue = (state) => state.apps.closed_windows;
export const minimized_windowsValue = (state) => state.apps.minimized_windows;
export const maximized_windowsValue = (state) => state.apps.maximized_windows;
export const focused_windowsValue = (state) => state.apps.focused_window;

export default appsSlice.reducer;
