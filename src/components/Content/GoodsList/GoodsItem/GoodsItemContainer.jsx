import GoodsItem from "./GoodsItem";
import {connect} from "react-redux";
import {
        CountDownActionCreator,
        CountUpActionCreator,
        MarkInCartActionCreator,
        ToggleInCartActionCreator
} from "../../../../redux/goods-reducer";
import {AddItemToCartActionCreator, DeleteItemOfCartActionCreator} from "../../../../redux/cart-reducer";

let mapStateToProps = (state) => ({
        items: state.goodsPage.items,
        quantity: state.goodsPage.quantity
})

export default connect(mapStateToProps, {CountUpActionCreator,
        CountDownActionCreator, AddItemToCartActionCreator, MarkInCartActionCreator, DeleteItemOfCartActionCreator, ToggleInCartActionCreator})(GoodsItem);