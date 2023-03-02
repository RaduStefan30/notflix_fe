import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import profileReducer from "./reducers/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
