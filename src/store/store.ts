import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from "../features/auth/store/authSlice.ts";
import {baseApi} from "./baseApi.ts";
import appSlice from "@store/appSlice.ts";
import storage from 'redux-persist/lib/storage';
import {createMigrate, persistReducer, persistStore} from 'redux-persist';
import {migrations} from "@store/migrations.ts";
import settingsSlice from "../features/settings/store/settingsSlice.ts";

const reducer = combineReducers({
    auth: authSlice,
    app: appSlice,
    settings: settingsSlice,
    [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
    key: "root",
    version: 2,
    storage,
    migrate: createMigrate(migrations, { debug: true }), // 🔥 Automatische Migrationen
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export const selectIsAuthenticated = (state: RootState) => !!state.auth.token;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
