import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import {RootState} from "./store.ts";

const API_BASE_URL = "http://localhost:5001"; // Ersetze mit deiner API-URL

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootState;
            const token = state.auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}), // Leer, wird in Features erweitert
});