import { PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_STATE_PROPERTY_KEY = 'items' as const;
const ITEM_NOT_FOUND = -1;
const EMPTY_UPDATES = {};

type ItemId = string | number;

interface BaseItem {
    id: ItemId;
}

type UpdatePayload<ItemType> = Omit<Partial<ItemType>, 'id'> & Pick<BaseItem, 'id'>;

interface CrudOperations<ItemType extends BaseItem, PropertyKey extends string> {
    addItem(state: CrudState<ItemType, PropertyKey>, action: PayloadAction<ItemType>): void;
    updateItem(state: CrudState<ItemType, PropertyKey>, action: PayloadAction<UpdatePayload<ItemType>>): void;
    deleteItem(state: CrudState<ItemType, PropertyKey>, action: PayloadAction<ItemId>): void;
    setItems(state: CrudState<ItemType, PropertyKey>, action: PayloadAction<ItemType[]>): void;
}

interface CrudState<ItemType, PropertyKey extends string = typeof DEFAULT_STATE_PROPERTY_KEY> {
    [key in PropertyKey]: ItemType[];
}

const getItemIndexById = <ItemType extends BaseItem>(
    items: ItemType[],
    id: ItemId
): number => items.findIndex((item) => item.id === id);

const updateItemAtIndex = <ItemType>(
    items: ItemType[],
    index: number,
    updates: Partial<ItemType>
): void => {
    if (index !== ITEM_NOT_FOUND) {
        items[index] = { ...items[index], ...(updates || EMPTY_UPDATES) };
    }
};


export const createCrudReducers = <
    ItemType extends BaseItem,
    PropertyKey extends string = typeof DEFAULT_STATE_PROPERTY_KEY
>(
    statePropertyKey: PropertyKey = DEFAULT_STATE_PROPERTY_KEY as PropertyKey
): CrudOperations<ItemType, PropertyKey> => ({
    addItem: (state: CrudState<ItemType, PropertyKey>, action: PayloadAction<ItemType>) => {
        state[statePropertyKey].push(action.payload);
    },
    updateItem: (state: CrudState<ItemType, PropertyKey>, action: PayloadAction<UpdatePayload<ItemType>>) => {
        const { id, ...updates } = action.payload;
        const index = getItemIndexById(state[statePropertyKey], id);
        updateItemAtIndex(state[statePropertyKey], index, updates);
    },
    deleteItem: (state: CrudState<ItemType, PropertyKey>, action: PayloadAction<ItemId>) => {
        state[statePropertyKey] = state[statePropertyKey].filter((item) => item.id !== action.payload);
    },
    setItems: (state: CrudState<ItemType, PropertyKey>, action: PayloadAction<ItemType[]>) => {
        state[statePropertyKey] = action.payload;
    },
});