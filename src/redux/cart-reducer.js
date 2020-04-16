const REMOVE_ITEM = "REMOVE_ITEM";

let initialState = {
    order: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_ITEM: {
            return {
                ...state,
                item: action.del
            }
        }
        default:
            return state;
    }
}

export default cartReducer;