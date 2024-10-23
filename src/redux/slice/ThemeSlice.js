import { createSlice } from "@reduxjs/toolkit";
import { DARKTHEME, LIGHTTHEME } from "../../contants/ThemeConstant";
const ThemeSlice = createSlice({
  name: "theme",
  initialState: DARKTHEME,
  reducers: {
    toggleToDarkMode: (state = initialState) => {
      return DARKTHEME;
    },
    toggleToLightMode: (state = initialState) => {
      return LIGHTTHEME;
    },
  },
});

export default ThemeSlice;
export const { toggleToDarkMode, toggleToLightMode } = ThemeSlice.actions;
