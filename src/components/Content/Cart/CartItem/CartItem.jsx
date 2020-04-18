import React from "react";
import cls from "./CartItem.module.scss";
import Img1 from "../../../../assets/images/item-1.png"
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CartItem = () => {
    return (
        <div className={cls["wrapper"]}>
            <div className={cls["col-1"]}>
                <div className={cls["item"]}>
                    <div className={cls["item__image"]}>
                        <img src={Img1} alt="Img"/>
                    </div>
                    <div className={cls["item__information"]}>
                        <div className={cls["item__title"]}>
                            Title 1
                        </div>
                        <div className={cls["item__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ex placeat soluta veritatis
                            voluptatum? Doloribus hic id, illo modi natus nemo non omnis qui quidem sequi, sunt tempora
                            temporibus voluptas.
                        </div>
                    </div>
                    <div className={cls["item__quantity"]}>
                        <button className={cls["item__button-count"]}>-</button>
                        <input className={cls["item__input"]} type="text" name="count" aria-label="count"
                               placeholder="0" />
                        <button className={cls["item__button-count"]}>+</button>
                    </div>
                    <div className={cls["item__total"]}>
                        <div className={cls["item__total-price"]}>12.44$</div>
                        <div className={cls["item__total-remove"]}>
                            <button className={cls["item__button-count"]}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                </div>
                <div className={cls["item"]}>
                    <div className={cls["item__image"]}>
                        <img src={Img1} alt="Img"/>
                    </div>
                    <div className={cls["item__information"]}>
                        <div className={cls["item__title"]}>
                            Title 1
                        </div>
                        <div className={cls["item__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ex placeat soluta veritatis
                            voluptatum? Doloribus hic id, illo modi natus nemo non omnis qui quidem sequi, sunt tempora
                            temporibus voluptas.
                        </div>
                    </div>
                    <div className={cls["item__quantity"]}>
                            <button className={cls["item__button-count"]}>-</button>
                            <input className={cls["item__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0" />
                            <button className={cls["item__button-count"]}>+</button>
                    </div>
                    <div className={cls["item__total"]}>
                        <div className={cls["item__total-price"]}>12.44$</div>
                        <div className={cls["item__total-remove"]}>
                            <button className={cls["item__button-count"]}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls["col-2"]}>

            </div>
        </div>
    );
}

export default CartItem;