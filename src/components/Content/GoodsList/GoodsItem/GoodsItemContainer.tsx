import GoodsItem from "./GoodsItem";
import {connect} from "react-redux";
import {
        CountDownActionCreator,
        CountUpActionCreator,
        MarkInCartActionCreator,
        ToggleInCartActionCreator
} from "../../../../redux/goods-reducer";
import {AddItemToCartActionCreator, DeleteItemOfCartActionCreator} from "../../../../redux/cart-reducer";
import {AppStateTypes} from "../../../../redux/store";

let mapStateToProps = (state: AppStateTypes) => ({
        items: state.goodsPage.items
})

export default connect(mapStateToProps, {CountUpActionCreator, CountDownActionCreator,
        AddItemToCartActionCreator, MarkInCartActionCreator, DeleteItemOfCartActionCreator,
        ToggleInCartActionCreator})(GoodsItem);