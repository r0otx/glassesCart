import React from "react";
import cls from "./GoodsItem.module.scss";

const GoodsItem = ({items, CountUpActionCreator, CountDownActionCreator, AddItemToCartActionCreator}) => {

    return (
        items.map(i =>
            <li>
                <article className={` ${cls["goods-card"]} ${i.bestSales ? cls["goods-card--top"] : ""}`}>
                    <div className={cls["goods-card__cover"]}>
                        <img className={cls["goods-card__image"]} src={i.img} alt=""/>
                    </div>
                    <h3 className={cls["goods-card__title"]}>{i.name}</h3>
                    <div className={cls["goods-card__description"]}>{i.description}</div>
                    <div className={cls["goodsCard__price"]}>Price: {i.price}$</div>
                    {i.inventory > 0
                        ? <>
                            <div className={cls["goods-card__quantity"]}>
                            <button onClick={() => CountDownActionCreator(i.id)} className={cls["goods-card__button-less"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   placeholder={i.quantity} />
                            <button onClick={() => CountUpActionCreator(i.id)} className={cls["goods-card__button-more"]}>+</button>
                        </div>
                        <button onClick={() => AddItemToCartActionCreator(i)} className={cls["goods-card__button"]}>Add Cart</button>
                        </>
                        : <button disabled className={cls["goods-card__button-disabled"]}>Sold Out</button>}
                </article>
            </li>
        )
    );
};

export default GoodsItem;