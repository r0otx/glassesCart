import {InitialStateItemsType} from "../types";

const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const DELETE_ITEM_OF_CART = "DELETE_ITEM_OF_CART";
const UP_CART_QUANTITY = "UP_CART_QUANTITY";
const DOWN_CART_QUANTITY = "DOWN_CART_QUANTITY";

type InitialStateType = typeof initialState;

let initialState = {
    order: [] as Array<InitialStateItemsType>,
    shippingFee: 10 as number
}

const cartReducer = (state = initialState, action: any): InitialStateType => {
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

type AddItemToCartActionType = {
    type: typeof ADD_ITEM_TO_CART
    item: Array<InitialStateItemsType>
}
export const AddItemToCartActionCreator = (item: Array<InitialStateItemsType>):AddItemToCartActionType => {
    return {
        type: ADD_ITEM_TO_CART, item
    }
}

type DeleteItemOfCartActionType = {
    type: typeof DELETE_ITEM_OF_CART
    id: number
}
export const DeleteItemOfCartActionCreator = (id: number): DeleteItemOfCartActionType => {
    return {
        type: DELETE_ITEM_OF_CART, id
    }
}

type CountUpCartActionType = {
    type: typeof UP_CART_QUANTITY
    id: number
}
export const CountUpCartActionCreator = (id: number): CountUpCartActionType => {
    return {
        type: UP_CART_QUANTITY, id
    }
}

type CountDownCartActionType = {
    type: typeof DOWN_CART_QUANTITY
    id: number
}
export const CountDownCartActionCreator = (id: number): CountDownCartActionType => {
    return {
        type: DOWN_CART_QUANTITY, id
    }
}

export default cartReducer;