import {combineReducers, createStore} from "redux";
import cartReducer from "./cart-reducer";
import goodsReducer from "./goods-reducer";

type ReducersType = typeof reducers;

let reducers = combineReducers({
    cartPage: cartReducer,
    goodsPage: goodsReducer
});

const store = createStore(reducers);

export default store;