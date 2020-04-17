const ADD_ITEM = "ADD_ITEM";

let initialState = {
    order: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                order: action.item
            }
        }
        default:
            return state;
    }
}

export const AddItemActionCreator = (item) => {
    return {
        type: ADD_ITEM, item
    }
}

export default cartReducer;