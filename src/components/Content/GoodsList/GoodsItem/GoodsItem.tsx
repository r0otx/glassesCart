import React, {useEffect} from "react";
import cls from "./GoodsItem.module.scss";
import {InitialStateItemsType} from "../../../../types";

type PropsTypes = {
    items: any[] | any
    countUpActionCreator: (i: number) => void
    countDownActionCreator: (i: number) => void
    markInCartActionCreator: (i: number) => void
    deleteItemOfCartActionCreator: (i: number) => void
    toggleInCartActionCreator: (i: number) => void
    getAllItems: () => void
    addItemToCart: (i: any) => void
}

const GoodsItem: React.FC<PropsTypes> = ({items, countUpActionCreator, countDownActionCreator, getAllItems,
                                             markInCartActionCreator, addItemToCart,
                                             deleteItemOfCartActionCreator, toggleInCartActionCreator}) => {

    useEffect(() => {
        items.length <= 0 && getAllItems()
    }, [items, getAllItems])

    return (
        items.map((i: InitialStateItemsType) =>
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
                                <button onClick={() => countDownActionCreator(i.id)}
                                        className={cls["goods-card__button-count"]}>-
                                </button>
                                <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                       value={i.quantity}/>
                                <button onClick={() => countUpActionCreator(i.id)}
                                        className={cls["goods-card__button-count"]}>+
                                </button>
                            </div>
                            <button onClick={() => {
                                addItemToCart(i);
                                markInCartActionCreator(i.id)
                            }} className={cls["goods-card__button"]}>Add Cart
                            </button>
                        </>
                        : <button onClick={() => {
                            deleteItemOfCartActionCreator(i.id);
                            toggleInCartActionCreator(i.id)
                        }} className={cls["goods-card__button-disabled"]}>Remove from Cart</button>}
                </article>
            </li>
        )
    );
};

export default GoodsItem;