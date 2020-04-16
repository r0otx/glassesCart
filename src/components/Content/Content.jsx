import React from "react";
import cls from "./Content.module.scss"
import GoodsList from "./GoodsList/GoodsList";
import Cart from "./Cart/Cart";
import {Route} from "react-router-dom";

const Content = () => {
    return (
        <main className={cls["main"]}>
            <Route exact path='/' render={() => <GoodsList/>}/>
            <Route path='/cart' render={() => <Cart/>}/>
        </main>
    );
};

export default Content;