import React from "react";
import cls from "../CartItem.module.scss";

const CartGoods = ({order, countDownCartActionCreator, countUpCartActionCreator,
                       deleteItemOfCartActionCreator, toggleInCartActionCreator}) => {
    return (
        order.map(i =>
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
        ));
}

export default CartGoods;