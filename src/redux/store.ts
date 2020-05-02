import {applyMiddleware, combineReducers, createStore} from "redux";
import cartReducer from "./cart-reducer";
import goodsReducer from "./goods-reducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";

type ReducersType = typeof reducers;
export type AppStateTypes = ReturnType<ReducersType>

let reducers = combineReducers({
    cartPage: cartReducer,
    goodsPage: goodsReducer,
    authPage: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;