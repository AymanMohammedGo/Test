import { configureStore } from "@reduxjs/toolkit";
import userSectionSlice from "./slices/userSectionSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    section: userSectionSlice,
    auth: authSlice,
  },
});
