import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "../features/power/stateSlice";

export default configureStore({
  reducer: { power: stateSlice },
});
