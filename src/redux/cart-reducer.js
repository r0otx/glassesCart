const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const DELETE_ITEM_OF_CART = "DELETE_ITEM_OF_CART";
const UP_CART_QUANTITY = "UP_CART_QUANTITY";
const DOWN_CART_QUANTITY = "DOWN_CART_QUANTITY";

let initialState = {
    order: []
}

const cartReducer = (state = initialState, action) => {
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
                order: state.order.filter(item => item.id !== action.item)
            }
        }
        case UP_CART_QUANTITY: {
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === action.payload) {
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
                    if (item.id === action.payload) {
                        if (item.quantity > 0) {
                            item.quantity -=1;
                        } else {
                            item.quantity = 0;
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

export const AddItemToCartActionCreator = (item) => {
    return {
        type: ADD_ITEM_TO_CART, item
    }
}

export const DeleteItemOfCartActionCreator = (item) => {
    return {
        type: DELETE_ITEM_OF_CART, item
    }
}

export const CountUpCartActionCreator = (payload) => {
    return {
        type: UP_CART_QUANTITY, payload
    }
}

export const CountDownCartActionCreator = (payload) => {
    return {
        type: DOWN_CART_QUANTITY, payload
    }
}

export default cartReducer;