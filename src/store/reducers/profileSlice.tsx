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
    display: display || true,
    manage: manage || "general",
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
  return async () => {
    const profile = ((await api.addProfile({ name, image })) as any).data;
    if (profile.error) {
      return onError(profile.message);
    }
    return onSuccess(profile);
  };
};

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
