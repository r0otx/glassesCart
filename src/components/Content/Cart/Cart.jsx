import React from "react";
import cls from "./Cart.module.scss";
import CartItemContainer from "./CartItems/CartItemsContainer";

const Cart = () => {
    return (
        <div>
            <h2 className={cls["main__title"]}>
                My Cart
            </h2>
                <CartItemContainer />
        </div>
    );
};

export default Cart;