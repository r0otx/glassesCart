import React from "react";
import cls from "./CartItem.module.scss";
import {InitialStateItemsType} from "../../../../types";

type PropsTypes = {
    order: Array<InitialStateItemsType>
    deleteItemOfCartActionCreator: (i: number) => void
    countUpCartActionCreator: (i: number) => void
    countDownCartActionCreator: (i: number) => void
    toggleInCartActionCreator: (i: number) => void
    shippingFee: number
}

const CartItem: React.FC<PropsTypes> = ({order, deleteItemOfCartActionCreator, countUpCartActionCreator,
                      countDownCartActionCreator, shippingFee, toggleInCartActionCreator}) => {

    let cartGoods = order.map(i =>
        <div key={i.id} className={cls["item"]}>
            <div className={cls["item__image"]}>
                <img src={i.img} alt="Img"/>
            </div>
            <div className={cls["item__information"]}>
                <div className={cls["item__information_title"]}>
                    {i.name}
                </div>
                <div className={cls["item__information_description"]}>
                    {i.description}
                </div>
            </div>
            <div className={cls["item__quantity"]}>
                <button onClick={() => countDownCartActionCreator(i.id)} className={cls["item__quantity_button-count"]}>-</button>
                <input className={cls["item__quantity_input"]} type="text" name="count" aria-label="count"
                       value={i.quantity} />
                <button onClick={() => countUpCartActionCreator(i.id)} className={cls["item__quantity_button-count"]}>+</button>
            </div>
            <div className={cls["item__total"]}>
                <div className={cls["item__total-price"]}>{i.quantity * i.price}$</div>
                <div className={cls["item__total-remove"]}>
                    <button onClick={() => {deleteItemOfCartActionCreator(i.id); toggleInCartActionCreator(i.id)}} className={cls["item__quantity_button-count"]}>x</button>
                </div>
            </div>
        </div>
    );

    let subTotal = order.map(i => i.price * i.quantity).reduce((a, b) => a + b, 0);

    let orderTotal = subTotal + shippingFee;

    return (
        <div className={cls["wrapper"]}>
            <div className={cls["col-1"]}>
                {cartGoods.length > 0 ? cartGoods : <div className={cls["item__empty"]}>Cart Empty</div>}
            </div>
            <div className={cls["col-2"]}>
                <div className={cls["total__subtotal"]}>
                    <div className={cls["total__subtotal_name"]}>Subtotal</div>
                    <div className={cls["total__subtotal_cost"]}>{subTotal}$</div>
                </div>
                <div className={cls["total__shipping"]}>
                    <div className={cls["total__shipping_name"]}>Shipping Fee</div>
                    <div className={cls["total__shipping_cost"]}>{shippingFee}$</div>
                </div>
                <div className={cls["total__cost"]}>
                    <div className={cls["total__cost_name"]}>Order Total</div>
                    <div className={cls["total__cost_cost"]}>{order.length > 0 ? orderTotal : 0}$</div>
                </div>
                <div className={cls["total__buy"]}>
                    <button className={cls["total__buy_button-proceed"]}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;