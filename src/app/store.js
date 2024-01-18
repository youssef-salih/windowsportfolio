import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "../features/power/stateSlice";
import appsSlice from "../features/apps/appsSlice";

export default configureStore({
  reducer: { power: stateSlice, apps: appsSlice },
});
