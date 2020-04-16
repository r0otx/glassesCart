import React from "react";
import cls from "./Goods.module.scss";
import item1 from "../../../images/item-1.png"
import item2 from "../../../images/item-2.png"
import item3 from "../../../images/item-3.png"
import item4 from "../../../images/item-4.png"
import item5 from "../../../images/item-5.png"
import item6 from "../../../images/item-6.png"
import item7 from "../../../images/item-7.png"
import item8 from "../../../images/item-8.png"
import item9 from "../../../images/item-9.png"

const Goods = () => {
    return (
        <div>
            <h2 className={cls["main__title"]}>
                Shop Items
            </h2>
            <ul className={cls["list"]}>
                <li>
                    <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                        <div className={cls["goods-card__cover"]}>
                            <img className={cls["goods-card__image"]} src={item1} alt=""/>
                        </div>
                        <h3 className={cls["goods-card__title"]}> Item 1</h3>
                        <div className={cls["goods-card__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias amet
                            architecto dolores eligendi, facere illo in natus officiis ratione reiciendis sapiente
                            tempora! At
                            debitis expedita itaque quis sint!
                        </div>
                        <div className={cls["goodsCard__price"]}>Price: 50$</div>
                        <div className={cls["goods-card__quantity"]}>
                            < button className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0"/>
                            <button className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button className={cls["goods-card__button"]}>Add Cart</button>
                    </article>
                </li>
                <li>
                    <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                        <div className={cls["goods-card__cover"]}>
                            <img className={cls["goods-card__image"]} src={item2} alt=""/>
                        </div>
                        <h3 className={cls["goods-card__title"]}>Item 1</h3>
                        <div className={cls["goods-card__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias amet
                            architecto dolores eligendi, facere illo in natus officiis ratione reiciendis sapiente
                            tempora! At
                            debitis expedita itaque quis sint!
                        </div>
                        <div className={cls["goodsCard__price"]}>Price: 50$</div>
                        <div className={cls["goods-card__quantity"]}>
                            <button className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0"/>
                            <button className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button className={cls["goods-card__button"]}>Add Cart</button>
                    </article>
                </li>
                <li>
                    <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                        <div className={cls["goods-card__cover"]}>
                            <img className={cls["goods-card__image"]} src={item3} alt=""/>
                        </div>
                        <h3 className={cls["goods-card__title"]}>Item 1</h3>
                        <div className={cls["goods-card__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias amet
                            architecto dolores eligendi, facere illo in natus officiis ratione reiciendis sapiente
                            tempora! At
                            debitis expedita itaque quis sint!
                        </div>
                        <div className={cls["goodsCard__price"]}>Price: 50$</div>
                        <div className={cls["goods-card__quantity"]}>
                            <button className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0"/>
                            <button className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button className={cls["goods-card__button"]}>Add Cart</button>
                    </article>
                </li>
                <li>
                    <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                        <div className={cls["goods-card__cover"]}>
                            <img className={cls["goods-card__image"]} src={item4} alt=""/>
                        </div>
                        <h3 className={cls["goods-card__title"]}>Item 1</h3>
                        <div className={cls["goods-card__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias amet
                            architecto dolores eligendi, facere illo in natus officiis ratione reiciendis sapiente
                            tempora! At
                            debitis expedita itaque quis sint!
                        </div>
                        <div className={cls["goodsCard__price"]}>Price: 50$</div>
                        <div className={cls["goods-card__quantity"]}>
                            <button className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0"/>
                            <button className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button className={cls["goods-card__button"]}>Add Cart</button>
                    </article>
                </li>
                <li>
                    <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                        <div className={cls["goods-card__cover"]}>
                            <img className={cls["goods-card__image"]} src={item5} alt=""/>
                        </div>
                        <h3 className={cls["goods-card__title"]}>Item 1</h3>
                        <div className={cls["goods-card__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias amet
                            architecto dolores eligendi, facere illo in natus officiis ratione reiciendis sapiente
                            tempora! At
                            debitis expedita itaque quis sint!
                        </div>
                        <div className={cls["goodsCard__price"]}>Price: 50$</div>
                        <div className={cls["goods-card__quantity"]}>
                            <button className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0"/>
                            <button className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button className={cls["goods-card__button"]}>Add Cart</button>
                    </article>
                </li>
                <li>
                    <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                        <div className={cls["goods-card__cover"]}>
                            <img className={cls["goods-card__image"]} src={item6} alt=""/>
                        </div>
                        <h3 className={cls["goods-card__title"]}>Item 1</h3>
                        <div className={cls["goods-card__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias amet
                            architecto dolores eligendi, facere illo in natus officiis ratione reiciendis sapiente
                            tempora! At
                            debitis expedita itaque quis sint!
                        </div>
                        <div className={cls["goodsCard__price"]}>Price: 50$</div>
                        <div className={cls["goods-card__quantity"]}>
                            <button className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0"/>
                            <button className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button className={cls["goods-card__button"]}>Add Cart</button>
                    </article>
                </li>
                <li>
                    <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                        <div className={cls["goods-card__cover"]}>
                            <img className={cls["goods-card__image"]} src={item7} alt=""/>
                        </div>
                        <h3 className={cls["goods-card__title"]}>Item 1</h3>
                        <div className={cls["goods-card__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias amet
                            architecto dolores eligendi, facere illo in natus officiis ratione reiciendis sapiente
                            tempora! At
                            debitis expedita itaque quis sint!
                        </div>
                        <div className={cls["goodsCard__price"]}>Price: 50$</div>
                        <div className={cls["goods-card__quantity"]}>
                            <button className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0"/>
                            <button className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button className={cls["goods-card__button"]}>Add Cart</button>
                    </article>
                </li>
                <li>
                    <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                        <div className={cls["goods-card__cover"]}>
                            <img className={cls["goods-card__image"]} src={item8} alt=""/>
                        </div>
                        <h3 className={cls["goods-card__title"]}>Item 1</h3>
                        <div className={cls["goods-card__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias amet
                            architecto dolores eligendi, facere illo in natus officiis ratione reiciendis sapiente
                            tempora! At
                            debitis expedita itaque quis sint!
                        </div>
                        <div className={cls["goodsCard__price"]}>Price: 50$</div>
                        <div className={cls["goods-card__quantity"]}>
                            <button className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0"/>
                            <button className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button className={cls["goods-card__button"]}>Add Cart</button>
                    </article>
                </li>
                <li>
                    <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                        <div className={cls["goods-card__cover"]}>
                            <img className={cls["goods-card__image"]} src={item9} alt=""/>
                        </div>
                        <h3 className={cls["goods-card__title"]}>Item 1</h3>
                        <div className={cls["goods-card__description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium alias amet
                            architecto dolores eligendi, facere illo in natus officiis ratione reiciendis sapiente
                            tempora! At
                            debitis expedita itaque quis sint!
                        </div>
                        <div className={cls["goodsCard__price"]}>Price: 50$</div>
                        <div className={cls["goods-card__quantity"]}>
                            <button className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder="0"/>
                            <button className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button className={cls["goods-card__button"]}>Add Cart</button>
                    </article>
                </li>
            </ul>
        </div>
    );
};

export default Goods;