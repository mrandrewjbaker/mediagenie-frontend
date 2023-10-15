import { createSlice } from "@reduxjs/toolkit";
import { tAppStore } from "./AppStore/AppStore";

export type tAppStatus = "idle" | "init-loading" | "resource-loading" | "ready" | "error";

const initialAppState = {
  status: "idle",
}

export const AppSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setAppStatus: (state, action) => {
      state.status = action.payload;
    }
  },
});

export const { setAppStatus } = AppSlice.actions;
export const selectAppState = (state: tAppStore) => state.app;
export default AppSlice.reducer;
