import React from "react";
import cls from "../CartItem.module.scss";

const CartGoods = ({order, countDownCartActionCreator, countUpCartActionCreator,
                       deleteItemOfCartActionCreator, toggleInCartActionCreator}) => {
    return (
        order.map(item =>
        <div key={item.id} className={cls["item"]}>
            <div className={cls["item__image"]}>
                <img src={item.img} alt="Img"/>
            </div>
            <div className={cls["item__information"]}>
                <div className={cls["item__information_title"]}>
                    {item.name}
                </div>
                <div className={cls["item__information_description"]}>
                    {item.description}
                </div>
            </div>
            <div className={cls["item__quantity"]}>
                <button onClick={() => countDownCartActionCreator(item.id)} className={cls["item__quantity_button-count"]}>-</button>
                <input className={cls["item__quantity_input"]} type="text" name="count" aria-label="count"
                       value={item.quantity} />
                <button onClick={() => countUpCartActionCreator(item.id)} className={cls["item__quantity_button-count"]}>+</button>
            </div>
            <div className={cls["item__total"]}>
                <div className={cls["item__total-price"]}>{item.quantity * item.price}$</div>
                <div className={cls["item__total-remove"]}>
                    <button onClick={() => {deleteItemOfCartActionCreator(item.id); toggleInCartActionCreator(item.id)}} className={cls["item__quantity_button-count"]}>x</button>
                </div>
            </div>
        </div>
        ));
}

export default CartGoods;