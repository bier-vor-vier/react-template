import {createCrudReducers} from './crudHelper';
import {PayloadAction} from '@reduxjs/toolkit';

type ItemType = { id: number; name: string };

const DEFAULT_STATE_PROPERTY_KEY = 'items';
type CrudState<ItemType, PropertyKey extends string> = Record<PropertyKey, ItemType[]>;

const mockState = {
    [DEFAULT_STATE_PROPERTY_KEY]: [] as ItemType[],
};

describe('createCrudReducers', () => {
    const reducers = createCrudReducers<ItemType>();

    it('should add an item to the state', () => {
        const action: PayloadAction<ItemType> = {
            type: 'addItem',
            payload: {id: 1, name: 'Test Item'},
        };
        const state = {...mockState};
        reducers.addItem(state, action);
        expect(state.items).toEqual([{id: 1, name: 'Test Item'}]);
    });

    it('should update an item in the state', () => {
        const initialState = {
            items: [{id: 1, name: 'Test Item'}] as ItemType[],
        };
        const action: PayloadAction<{ id: number; name: string }> = {
            type: 'updateItem',
            payload: {id: 1, name: 'Updated Item'},
        };
        reducers.updateItem(initialState, action);
        expect(initialState.items).toEqual([{id: 1, name: 'Updated Item'}]);
    });

    it('should delete an item from the state', () => {
        const initialState = {
            items: [{id: 1, name: 'Item to Delete'}] as ItemType[],
        };
        const action: PayloadAction<number> = {
            type: 'deleteItem',
            payload: 1,
        };
        reducers.deleteItem(initialState, action);
        expect(initialState.items).toEqual([]);
    });

    it('should set all items in the state', () => {
        const initialState = {
            items: [] as ItemType[],
        };
        const action: PayloadAction<ItemType[]> = {
            type: 'setItems',
            payload: [
                {id: 1, name: 'Item 1'},
                {id: 2, name: 'Item 2'},
            ],
        };
        reducers.setItems(initialState, action);
        expect(initialState.items).toEqual([
            {id: 1, name: 'Item 1'},
            {id: 2, name: 'Item 2'},
        ]);
    });
});