import {combineReducers, createStore} from "redux";
import cartReducer from "./cart-reducer";
import goodsReducer from "./goods-reducer";

let reducers = combineReducers({
    cartPage: cartReducer,
    goodsPage: goodsReducer
});

const store = createStore(reducers);

window.store = store;

export default store;