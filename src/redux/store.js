import { configureStore } from "@reduxjs/toolkit";
import AuthStateSlice from "./slice/AuthStateSlice";

const store = configureStore({
  reducer: {
    auth: AuthStateSlice.reducer,
  },
});
export default store;
