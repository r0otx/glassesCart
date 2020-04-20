const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const DELETE_ITEM_OF_CART = "DELETE_ITEM_OF_CART";
const UP_CART_QUANTITY = "UP_CART_QUANTITY";
const DOWN_CART_QUANTITY = "DOWN_CART_QUANTITY";

let initialState = {
    order: [],
    shippingFee: 10
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

export const AddItemToCartActionCreator = (item) => {
    return {
        type: ADD_ITEM_TO_CART, item
    }
}

export const DeleteItemOfCartActionCreator = (id) => {
    return {
        type: DELETE_ITEM_OF_CART, id
    }
}

export const CountUpCartActionCreator = (id) => {
    return {
        type: UP_CART_QUANTITY, id
    }
}

export const CountDownCartActionCreator = (id) => {
    return {
        type: DOWN_CART_QUANTITY, id
    }
}

export default cartReducer;