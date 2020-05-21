import GoodsItem from "./GoodsItem";
import {connect} from "react-redux";
import {
        countDownActionCreator,
        countUpActionCreator, getAllItems,
        markInCartActionCreator,
        toggleInCartActionCreator
} from "../../../../redux/goods-reducer";
import {
        addItemToCart,
        addItemToCartActionCreator,
        deleteItemOfCartActionCreator
} from "../../../../redux/cart-reducer";
import {AppStateTypes} from "../../../../redux/store";
import {InitialStateItemsType} from "../../../../types";

type mapStateToPropsTypes = {
        items: Array<InitialStateItemsType>
}
type mapDispatchToPropsTypes = {
        countUpActionCreator: (item: number) => void
        countDownActionCreator: (item: number) => void
        addItemToCartActionCreator: (item: InitialStateItemsType) => void
        markInCartActionCreator: (item: number) => void
        deleteItemOfCartActionCreator: (item: number) => void
        toggleInCartActionCreator: (item: number) => void
        getAllItems: () => void
        addItemToCart: (item: Array<InitialStateItemsType>) => void
}

let mapStateToProps = (state: AppStateTypes): mapStateToPropsTypes => ({
        items: state.goodsPage.items
})

export default connect<mapStateToPropsTypes, mapDispatchToPropsTypes, null, AppStateTypes>(mapStateToProps,
    {countUpActionCreator, countDownActionCreator, addItemToCartActionCreator, markInCartActionCreator,
            deleteItemOfCartActionCreator, toggleInCartActionCreator, getAllItems, addItemToCart})(GoodsItem);