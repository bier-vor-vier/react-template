import {createSlice, ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {authApi} from "./authApi.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AuthState} from "./authTypes.ts";

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

export const useAuthSelector: TypedUseSelectorHook<{ auth: AuthState }> = useSelector;
type AuthDispatch = ThunkDispatch<{ auth: AuthState }, void, UnknownAction>;
export const useAuthDispatch = () => useDispatch<AuthDispatch>();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        });
    },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;