import { createSlice } from "@reduxjs/toolkit";

const LANG = "language";
const lang = localStorage.getItem(LANG);
const initialState = {
  [LANG]: lang || "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      localStorage.setItem(LANG, action.payload);
      return { ...state, [LANG]: action.payload };
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
