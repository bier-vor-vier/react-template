import {baseApi} from "../../../store/baseApi.ts";

export const profileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query<{ name: string; email: string }, void>({
            query: () => "/profile",
        }),
    }),
    overrideExisting: false, // Falls du bestehende Endpunkte überschreiben willst, auf `true` setzen
});

// Export für den Hook
export const { useGetUserProfileQuery } = profileApi;