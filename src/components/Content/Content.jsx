import React from "react";
import cls from "./Content.module.scss"
import Goods from "./Goods/Goods";
import Cart from "./Cart/Cart";
import {Route} from "react-router-dom";

const Content = () => {
    return (
        <main className={cls["main"]}>
            <Route exact path='/' render={() => <Goods/>}/>
            <Route path='/cart' render={() => <Cart/>}/>
        </main>
    );
};

export default Content;