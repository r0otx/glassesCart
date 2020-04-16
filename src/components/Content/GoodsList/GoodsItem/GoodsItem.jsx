import React from "react";
import cls from "./GoodsItem.module.scss";

const GoodsItem = ({items}) => {
    debugger
    return (
        items.map(i =>
            <li>
                <article className={` ${cls["goods-card"]} ${cls["goods-card--top"]}`}>
                    <div className={cls["goods-card__cover"]}>
                        <img className={cls["goods-card__image"]} src={i.img} alt=""/>
                    </div>
                    <h3 className={cls["goods-card__title"]}>{i.title}</h3>
                    <div className={cls["goods-card__description"]}>{i.description}</div>
                    <div className={cls["goodsCard__price"]}>Price: {i.price}$</div>
                    <div className={cls["goods-card__quantity"]}>
                        < button className={cls["goods-card__button-less"]}>-</button>
                        <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                               placeholder="0"/>
                        <button className={cls["goods-card__button-more"]}>+</button>
                    </div>
                    <button className={cls["goods-card__button"]}>Add Cart</button>
                </article>
            </li>
        )
    );
};

export default GoodsItem;