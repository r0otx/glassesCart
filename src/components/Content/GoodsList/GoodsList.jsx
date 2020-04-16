import React from "react";
import cls from "./GoodsList.module.scss";
import GoodsItemContainer from "./GoodsItem/GoodsItemContainer";

const GoodsList = (props) => {
    return (
        <div>
            <h2 className={cls["main__title"]}>
                Shop Items
            </h2>
            <ul className={cls["list"]}>
                <GoodsItemContainer />
            </ul>
        </div>
    );
};

export default GoodsList;