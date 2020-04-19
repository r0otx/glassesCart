import React from "react";
import cls from "./GoodsItem.module.scss";
import {DeleteItemOfCartActionCreator} from "../../../../redux/cart-reducer";

const GoodsItem = ({items, CountUpActionCreator, CountDownActionCreator, AddItemToCartActionCreator,
                       MarkInCartActionCreator, DeleteItemOfCartActionCreator, ToggleInCartActionCreator}) => {

    return (
        items.map(i =>
            <li key={i.id}>
                <article className={` ${cls["goods-card"]} ${i.bestSales ? cls["goods-card--top"] : ""}`}>
                    <div className={cls["goods-card__cover"]}>
                        <img className={cls["goods-card__image"]} src={i.img} alt=""/>
                    </div>
                    <h3 className={cls["goods-card__title"]}>{i.name}</h3>
                    <div className={cls["goods-card__description"]}>{i.description}</div>
                    <div className={cls["goodsCard__price"]}>Price: {i.price}$</div>
                    {!i.inCart
                        ? <>
                            <div className={cls["goods-card__quantity"]}>
                            <button onClick={() => CountDownActionCreator(i.id)} className={cls["goods-card__button-count"]}>-</button>
                            <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                   value={i.quantity} />
                            <button onClick={() => CountUpActionCreator(i.id)} className={cls["goods-card__button-count"]}>+</button>
                        </div>
                        <button onClick={() => {AddItemToCartActionCreator(i); MarkInCartActionCreator(i.id)}} className={cls["goods-card__button"]}>Add Cart</button>
                        </>
                        : <button onClick={() => {DeleteItemOfCartActionCreator(i.id); ToggleInCartActionCreator(i.id)}} className={cls["goods-card__button-disabled"]}>Remove from Cart</button>}
                </article>
            </li>
        )
    );
};

export default GoodsItem;