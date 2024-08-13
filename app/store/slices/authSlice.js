import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    status: "idle",
  },
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload;
      state.status = "Admin";
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
