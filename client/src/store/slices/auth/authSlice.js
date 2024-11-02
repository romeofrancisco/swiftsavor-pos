import { createSlice } from "@reduxjs/toolkit";
import { login, fetchUser, logout } from "./authThunk";

const initialState = {
  tokens: { access: null, refresh: null },
  user: { email: null, username: null, role: null },
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Login Reducer
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { tokens, user } = action.payload;
        state.tokens = tokens;
        state.user = user;
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })

      //Fetch User Data Reducer
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { tokens, user } = action.payload;
        state.tokens = tokens;
        state.user = user;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
      })

      //Logout Reducer
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.tokens = { access: null, refresh: null };
        state.user = { email: null, username: null, role: null };
        state.loading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
