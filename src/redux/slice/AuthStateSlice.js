import { createSlice } from "@reduxjs/toolkit";
import {
  AUTH_LOGGED_IN_STATE,
  AUTH_LOGIN,
  AUTH_NO_USER_STATE,
} from "../../contains/AuthConstain";

const AuthStateSlice = createSlice({
  name: "auth",
  initialState: {
    value: AUTH_NO_USER_STATE,
  },
  reducers: {
    loggingIn: (state) => {
      state.value = AUTH_LOGGED_IN_STATE;
    },
    loggingOut: (state) => {
      state.value = AUTH_NO_USER_STATE;
    },
  },
});

export const { loggingIn, loggingOut } = AuthStateSlice.actions;
export default AuthStateSlice;
