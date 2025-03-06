import {createSlice, ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {createCrudReducers} from "@store/crudHelper.ts";

export type Setting = {
    id: number,
    name: string,
    value: string,
};

type SettingsState = {
    settings: Setting[],
}

const initialState: SettingsState = {
    settings: [],
}

export const useSettingsSelector: TypedUseSelectorHook<{settings: SettingsState}> = useSelector;
type SettingsDispatch = ThunkDispatch<{settings: SettingsState}, void, UnknownAction>;
export const useSettingsDispatch = () => useDispatch<SettingsDispatch>();

const crudReducers = createCrudReducers<Setting, "settings">("settings");
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        ... crudReducers,
    },
});

export const {addItem, setItems, updateItem, deleteItem} = settingsSlice.actions;
export default settingsSlice.reducer;