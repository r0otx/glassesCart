import {applyMiddleware, combineReducers, createStore} from "redux";
import cartReducer from "./cart-reducer";
import goodsReducer from "./goods-reducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

type ReducersType = typeof reducers;
export type AppStateTypes = ReturnType<ReducersType>

let reducers = combineReducers({
    cartPage: cartReducer,
    goodsPage: goodsReducer,
    authPage: authReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;