import { createSlice } from "@reduxjs/toolkit";

const auth = localStorage.getItem("auth");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    auth,
    email: "",
  },
  reducers: {
    login: (state, action) => {
      state.auth = action.payload.auth;
      localStorage.setItem("auth", JSON.stringify(action.payload.auth));
    },
    logout: (state) => {
      state.auth = null;
      localStorage.removeItem("auth");
    },
    update: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
