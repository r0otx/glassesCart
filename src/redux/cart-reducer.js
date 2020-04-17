const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";

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

export default cartReducer;