import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "../features/power/stateSlice";
import appsSlice from "../features/apps/appsSlice";
import statusSlice from "../features/status/statusSlice";

export default configureStore({
  reducer: { power: stateSlice, apps: appsSlice, status: statusSlice },
});
