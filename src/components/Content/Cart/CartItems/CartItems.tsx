import React from "react";
import cls from "./CartItem.module.scss";
import {InitialStateItemsType} from "../../../../types";
import CartGoods from "./CartGoods/CartGoods";

type PropsTypes = {
    order: Array<InitialStateItemsType>
    deleteItemOfCartActionCreator: (i: number) => void
    countUpCartActionCreator: (i: number) => void
    countDownCartActionCreator: (i: number) => void
    toggleInCartActionCreator: (i: number) => void
    getSubTotal: (i: number) => void
    getOrderTotal: (i: number) => void
    shippingFee: number
}

const CartItems: React.FC<PropsTypes> = ({order, deleteItemOfCartActionCreator, countUpCartActionCreator,
                      countDownCartActionCreator, shippingFee, toggleInCartActionCreator, getSubTotal, getOrderTotal}) => {

    return (
        <div className={cls["wrapper"]}>
            <div className={cls["col-1"]}>
                {order.length > 0
                    ? <CartGoods order={order}
                                 deleteItemOfCartActionCreator={deleteItemOfCartActionCreator}
                                 countDownCartActionCreator={countDownCartActionCreator}
                                 countUpCartActionCreator={countUpCartActionCreator}
                                 toggleInCartActionCreator={toggleInCartActionCreator}/>
                    : <div className={cls["item__empty"]}>Cart Empty</div>}
            </div>
            <div className={cls["col-2"]}>
                <div className={cls["total__subtotal"]}>
                    <div className={cls["total__subtotal_name"]}>Subtotal</div>
                    <div className={cls["total__subtotal_cost"]}>{getSubTotal}$</div>
                </div>
                <div className={cls["total__shipping"]}>
                    <div className={cls["total__shipping_name"]}>Shipping Fee</div>
                    <div className={cls["total__shipping_cost"]}>{shippingFee}$</div>
                </div>
                <div className={cls["total__cost"]}>
                    <div className={cls["total__cost_name"]}>Order Total</div>
                    <div className={cls["total__cost_cost"]}>{order.length > 0 ? getOrderTotal : 0}$</div>
                </div>
                <div className={cls["total__buy"]}>
                    <button className={cls["total__buy_button-proceed"]}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;