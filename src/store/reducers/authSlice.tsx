import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

const auth = localStorage.getItem("auth");
const { email, token } = auth ? JSON.parse(auth) : { email: "", token: "" };

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: email,
    token: token,
  },
  reducers: {
    logout: (state: any, action: any) => {
      localStorage.removeItem("auth");
      localStorage.removeItem("profile");
      return { ...state, ...action.payload };
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

    console.log(response);
    if (response.message) {
      return onError(response.response.data.message);
    }
    const userData = response.data;
    if (userData) localStorage.setItem("auth", JSON.stringify(userData));

    dispatch(authSlice.actions.setUser(userData));

    return onSuccess();
  };
};

export const authActions = authSlice.actions;
export default authSlice.reducer;
