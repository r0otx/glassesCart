import React from "react";
import cls from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    return (
        <div>
            <h2 className={cls["main__title"]}>
                My Cart
            </h2>
                <CartItem/>
        </div>
    );
};

export default Cart;