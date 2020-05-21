import React, {useEffect} from "react";
import cls from "./GoodsItem.module.scss";
import {InitialStateItemsType} from "../../../../types";

type PropsTypes = {
    items: any[] | any
    countUpActionCreator: (item: number) => void
    countDownActionCreator: (item: number) => void
    markInCartActionCreator: (item: number) => void
    deleteItemOfCartActionCreator: (item: number) => void
    toggleInCartActionCreator: (item: number) => void
    getAllItems: () => void
    addItemToCart: (item: any) => void
}

const GoodsItem: React.FC<PropsTypes> = ({items, countUpActionCreator, countDownActionCreator, getAllItems,
                                             markInCartActionCreator, addItemToCart,
                                             deleteItemOfCartActionCreator, toggleInCartActionCreator}) => {

    useEffect(() => {
        items.length <= 0 && getAllItems()
    }, [items, getAllItems])

    return (
        items.map((item: InitialStateItemsType) =>
            <li key={item.id}>
                <article className={` ${cls["goods-card"]} ${item.bestSales ? cls["goods-card--top"] : ""}`}>
                    <div className={cls["goods-card__cover"]}>
                        <img className={cls["goods-card__image"]} src={item.img} alt=""/>
                    </div>
                    <h3 className={cls["goods-card__title"]}>{item.name}</h3>
                    <div className={cls["goods-card__description"]}>{item.description}</div>
                    <div className={cls["goodsCard__price"]}>Price: {item.price}$</div>
                    {!item.inCart
                        ? <>
                            <div className={cls["goods-card__quantity"]}>
                                <button onClick={() => countDownActionCreator(item.id)}
                                        className={cls["goods-card__button-count"]}>-
                                </button>
                                <input className={cls["goods-card__input"]} type="text" name="count" aria-label="count"
                                       value={item.quantity}/>
                                <button onClick={() => countUpActionCreator(item.id)}
                                        className={cls["goods-card__button-count"]}>+
                                </button>
                            </div>
                            <button onClick={() => {
                                addItemToCart(item);
                                markInCartActionCreator(item.id)
                            }} className={cls["goods-card__button"]}>Add Cart
                            </button>
                        </>
                        : <button onClick={() => {
                            deleteItemOfCartActionCreator(item.id);
                            toggleInCartActionCreator(item.id)
                        }} className={cls["goods-card__button-disabled"]}>Remove from Cart</button>}
                </article>
            </li>
        )
    );
};

export default GoodsItem;