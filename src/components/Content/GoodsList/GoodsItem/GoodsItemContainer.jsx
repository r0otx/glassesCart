import React from "react";
import GoodsItem from "./GoodsItem";
import {connect} from "react-redux";
import {CountDownActionCreator, CountUpActionCreator} from "../../../../redux/goods-reducer";
import {AddItemToCartActionCreator} from "../../../../redux/cart-reducer";

let mapStateToProps = (state) => ({
        items: state.goodsPage.items,
        quantity: state.goodsPage.quantity
})

export default connect(mapStateToProps, {CountUpActionCreator, CountDownActionCreator, AddItemToCartActionCreator})(GoodsItem);