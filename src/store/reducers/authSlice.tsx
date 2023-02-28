import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

const auth = localStorage.getItem("auth");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    token: "",
  },
  reducers: {
    logout: (state: any) => {
      state.token = "";
      localStorage.removeItem("auth");
    },
    setUser(state: any, action: any) {
      return { ...state, ...action.payload };
    },
  },
});

export const login = (
  data: { email: string; password: string },
  onSuccess: () => void,
  onError: (message: string) => void
) => {
  return async (dispatch: any) => {
    const response = (await api.auth(data, "login")) as any;

    if (response.error) {
      return onError(response.message);
    }
    const userData = response.data;
    localStorage.setItem("auth", JSON.stringify(userData));

    dispatch(authSlice.actions.setUser(userData));

    return onSuccess();
  };
};

export const authActions = authSlice.actions;
export default authSlice.reducer;
