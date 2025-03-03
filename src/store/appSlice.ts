import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Theme = "light" | "dark" | "system";

export interface AppState {
    isCollapsed: boolean;
    theme: Theme;
    locale: string;
}

const initialState: AppState = {
    isCollapsed: false,
    theme: "light",
    locale: "en",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isCollapsed = !state.isCollapsed;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLocale: (state, action) => {
            state.locale = action.payload;
        }
    },
});

export const { toggleSidebar, setTheme, setLocale } = appSlice.actions;
export const selectIsCollapsed = (state: RootState) => state.app.isCollapsed;
export const selectTheme = (state: RootState) => state.app.theme;
export const selectLocale = (state: RootState) => state.app.locale;
export default appSlice.reducer;
