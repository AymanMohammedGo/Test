import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sectionShow: 0,
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    nextSection: (state) => {
      if (state.sectionShow === 2) {
        state.sectionShow = 0;
      } else {
        state.sectionShow += 1;
      }
    },
  },
});

export const { nextSection } = sectionSlice.actions;

export default sectionSlice.reducer;
