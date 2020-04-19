import React from "react";
import cls from "./CartItem.module.scss";
import Img1 from "../../../../assets/images/item-1.png"

const CartItem = () => {
    return (
        <div className={cls["wrapper"]}>
            <div className={cls["col-1"]}>
                <div className={cls["item"]}>
                    <div className={cls["item__image"]}>
                        <img src={Img1} alt="Img"/>
                    </div>
                    <div className={cls["item__information"]}>
                        <div className={cls["item__information_title"]}>
                            Title 1
                        </div>
                        <div className={cls["item__information_description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ex placeat soluta veritatis
                            voluptatum? Doloribus hic id, illo modi natus nemo non omnis qui quidem sequi, sunt tempora
                            temporibus voluptas.
                        </div>
                    </div>
                    <div className={cls["item__quantity"]}>
                        <button className={cls["item__quantity_button-count"]}>-</button>
                        <input className={cls["item__quantity_input"]} type="text" name="count" aria-label="count"
                               placeholder="0"/>
                        <button className={cls["item__quantity_button-count"]}>+</button>
                    </div>
                    <div className={cls["item__total"]}>
                        <div className={cls["item__total-price"]}>12.44$</div>
                        <div className={cls["item__total-remove"]}>
                            <button className={cls["item__quantity_button-count"]}>x</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls["col-2"]}>
                <div className={cls["total__subtotal"]}>
                    <div className={cls["total__subtotal_name"]}>Subtotal</div>
                    <div className={cls["total__subtotal_cost"]}>225$</div>
                </div>
                <div className={cls["total__shipping"]}>
                    <div className={cls["total__shipping_name"]}>Shipping Fee</div>
                    <div className={cls["total__shipping_cost"]}>10$</div>
                </div>
                <div className={cls["total__cost"]}>
                    <div className={cls["total__cost_name"]}>Order Total</div>
                    <div className={cls["total__cost_cost"]}>235$</div>
                </div>
                <div className={cls["total__buy"]}>
                    <button className={cls["total__buy_button-proceed"]}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;