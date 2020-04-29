import {InitialStateItemsType} from "../types";
import {itemsAPI} from "../api";

const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const DELETE_ITEM_OF_CART = "DELETE_ITEM_OF_CART";
const UP_CART_QUANTITY = "UP_CART_QUANTITY";
const DOWN_CART_QUANTITY = "DOWN_CART_QUANTITY";

type InitialStateType = {
    order: Array<InitialStateItemsType>
    shippingFee: number
}

let initialState: InitialStateType = {
    order: [],
    shippingFee: 10
}

type ActionsTypes = AddItemToCartActionType | DeleteItemOfCartActionType | CountUpCartActionType | CountDownCartActionType

const cartReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            return {
                ...state,
                order: [action.item, ...state.order]
            }
        }
        case DELETE_ITEM_OF_CART: {
            return {
                ...state,
                order: state.order.filter(item => item.id !== action.id)
            }
        }
        case UP_CART_QUANTITY: {
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === action.id) {
                        item.quantity +=1;
                    }
                    return item
                })
            }
        }
        case DOWN_CART_QUANTITY: {
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === action.id) {
                        if (item.quantity > 1) {
                            item.quantity -=1;
                        } else {
                            item.quantity = 1;
                        }
                    }
                    return item
                })
            }
        }
        default:
            return state;
    }
}

// Action Creators
type AddItemToCartActionType = {
    type: typeof ADD_ITEM_TO_CART
    item: InitialStateItemsType
}
export const addItemToCartActionCreator = (item: InitialStateItemsType):AddItemToCartActionType => {
    return {
        type: ADD_ITEM_TO_CART, item
    }
}

type DeleteItemOfCartActionType = {
    type: typeof DELETE_ITEM_OF_CART
    id: number
}
export const deleteItemOfCartActionCreator = (id: number): DeleteItemOfCartActionType => {
    return {
        type: DELETE_ITEM_OF_CART, id
    }
}

type CountUpCartActionType = {
    type: typeof UP_CART_QUANTITY
    id: number
}
export const countUpCartActionCreator = (id: number): CountUpCartActionType => {
    return {
        type: UP_CART_QUANTITY, id
    }
}

type CountDownCartActionType = {
    type: typeof DOWN_CART_QUANTITY
    id: number
}
export const countDownCartActionCreator = (id: number): CountDownCartActionType => {
    return {
        type: DOWN_CART_QUANTITY, id
    }
}

//Thunks
export const addItemToCart = (item: Array<InitialStateItemsType>) => async (dispatch: any) => {
    let response = await itemsAPI.addCart(item);
    // @ts-ignore
    dispatch(addItemToCartActionCreator(response));
}

export default cartReducer;