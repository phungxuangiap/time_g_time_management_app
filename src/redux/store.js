import { configureStore } from "@reduxjs/toolkit";
import AuthStateSlice from "./slice/AuthStateSlice";
import ThemeSlice from "./slice/ThemeSlice";

const store = configureStore({
  reducer: {
    auth: AuthStateSlice.reducer,
    theme: ThemeSlice.reducer,
  },
});
export default store;
