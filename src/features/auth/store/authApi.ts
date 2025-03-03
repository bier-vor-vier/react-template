import {AuthResponse, Credentials} from "./authTypes.ts";
import {baseApi} from "@store/baseApi.ts";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, Credentials>({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
                headers: { "Content-Type": "application/json" },
            }),
        })
    }),
});

export const { useLoginMutation } = authApi;
