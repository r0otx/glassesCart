const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const DELETE_ITEM_OF_CART = "DELETE_ITEM_OF_CART";

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

export default cartReducer;