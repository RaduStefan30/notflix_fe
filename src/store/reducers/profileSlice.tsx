import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

const profile = localStorage.getItem("profile");
const { name, display, manage } = profile
  ? JSON.parse(profile)
  : { name: "", display: true, manage: "general" };

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: name,
    display: display,
    manage: manage,
  },
  reducers: {
    setProfile(state: any, action: any) {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return { ...state, ...action.payload };
    },
  },
});

export const getProfiles = (onSuccess: any, onError: any) => {
  return async () => {
    const profiles = ((await api.getProfiles()) as any).data.userProfiles;
    if (profiles.error) {
      return onError(profiles.message);
    }
    return onSuccess(profiles);
  };
};

export const addProfile = (
  name: string,
  image: string,
  onSuccess: any,
  onError: any
) => {
  return async (dispatch: any) => {
    const response = (await api.addProfile({ name, image })) as any;

    if (response.message) {
      return onError(response.response.data.message);
    }
    dispatch({
      type: "profile/setProfile",
      payload: { display: "true", manage: "general" },
    });
    return onSuccess(profile);
  };
};

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
