import {InitialStateItemsType} from "../types";
import {itemsAPI} from "../api";

const UP_ITEM_QUANTITY = "UP_ITEM_QUANTITY";
const DOWN_ITEM_QUANTITY = "DOWN_ITEM_QUANTITY";
const MARK_IN_CART = "MARK_IN_CART";
const TOGGLE_GOODS_OF_CART = "TOGGLE_GOODS_OF_CART";
const SET_ITEMS = "SET_ITEMS";

type InitialStateType = any[] | any;
let initialState: InitialStateType = {
    items: []
};

// Action Creators
type ActionsType = SetItemsType | CountUpActionType | CountDownActionType | MarkInCartActionType | ToggleInCartActionType

const goodsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.items
            }
        case UP_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map((item: any) => {
                    if (item.id === action.id) {
                        item.quantity += 1;
                    }
                    return item
                })
            }
        case DOWN_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map((item: any) => {
                    if (item.id === action.id) {
                        if (item.quantity > 1) {
                            item.quantity -= 1;
                        } else {
                            item.quantity = 1;
                        }
                    }
                    return item
                })
            }
        case MARK_IN_CART:
            return {
                ...state,
                items: state.items.map((item: any) => {
                    if (item.id === action.id) {
                        return {...item, inCart: true}
                    }
                    return item
                })
            }
        case TOGGLE_GOODS_OF_CART:
            return {
                ...state,
                items: state.items.map((item: any) => {
                    if (item.id === action.id) {
                        return {...item, inCart: false}
                    }
                    return item
                })
            }
        default:
            return state;
    }
}

type SetItemsType = {
    type: typeof SET_ITEMS
    items: Array<InitialStateItemsType>
}
export const setItems = (items: Array<InitialStateItemsType>): SetItemsType => {
    return {
        type: SET_ITEMS, items
    }
};

type CountUpActionType = {
    type: typeof UP_ITEM_QUANTITY
    id: number
}
export const countUpActionCreator = (id: number): CountUpActionType => {
    return {
        type: UP_ITEM_QUANTITY, id
    }
}

type CountDownActionType = {
    type: typeof DOWN_ITEM_QUANTITY
    id: number
}
export const countDownActionCreator = (id: number): CountDownActionType => {
    return {
        type: DOWN_ITEM_QUANTITY, id
    }
}

type MarkInCartActionType = {
    type: typeof MARK_IN_CART
    id: number
}
export const markInCartActionCreator = (id: number): MarkInCartActionType => {
    return {
        type: MARK_IN_CART, id
    }
}

type ToggleInCartActionType = {
    type: typeof TOGGLE_GOODS_OF_CART
    id: number
}
export const toggleInCartActionCreator = (id: number): ToggleInCartActionType => {
    return {
        type: TOGGLE_GOODS_OF_CART, id
    }
}

// Thunks Creators
export const getAllItems = () => async (dispatch: any) => {
    let items = await itemsAPI.getItems();
    // @ts-ignore
    dispatch(setItems(items));
}

export default goodsReducer;