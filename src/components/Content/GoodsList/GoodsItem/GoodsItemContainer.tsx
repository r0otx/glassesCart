import GoodsItem from "./GoodsItem";
import {connect} from "react-redux";
import {
        countDownActionCreator,
        countUpActionCreator,
        markInCartActionCreator,
        toggleInCartActionCreator
} from "../../../../redux/goods-reducer";
import {addItemToCartActionCreator, deleteItemOfCartActionCreator} from "../../../../redux/cart-reducer";
import {AppStateTypes} from "../../../../redux/store";
import {InitialStateItemsType} from "../../../../types";

type mapStateToPropsTypes = {
        items: Array<InitialStateItemsType>
}
type mapDispatchToPropsTypes = {
        CountUpActionCreator: (i: number) => void
        CountDownActionCreator: (i: number) => void
        AddItemToCartActionCreator: (i: InitialStateItemsType) => void
        MarkInCartActionCreator: (i: number) => void
        DeleteItemOfCartActionCreator: (i: number) => void
        ToggleInCartActionCreator: (i: number) => void
}

let mapStateToProps = (state: AppStateTypes): mapStateToPropsTypes => ({
        items: state.goodsPage.items
})

export default connect<mapStateToPropsTypes, mapDispatchToPropsTypes, null, AppStateTypes>(mapStateToProps, {CountUpActionCreator: countUpActionCreator, CountDownActionCreator: countDownActionCreator,
        AddItemToCartActionCreator: addItemToCartActionCreator, MarkInCartActionCreator: markInCartActionCreator, DeleteItemOfCartActionCreator: deleteItemOfCartActionCreator,
        ToggleInCartActionCreator: toggleInCartActionCreator})(GoodsItem);