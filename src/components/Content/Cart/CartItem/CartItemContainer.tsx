import {connect} from "react-redux";
import CartItem from "./CartItem";
import {
    countDownCartActionCreator,
    countUpCartActionCreator,
    deleteItemOfCartActionCreator
} from "../../../../redux/cart-reducer";
import {toggleInCartActionCreator} from "../../../../redux/goods-reducer";
import {AppStateTypes} from "../../../../redux/store";
import {InitialStateItemsType} from "../../../../types";

type mapStateToPropsTypes = {
    order: Array<InitialStateItemsType>
    shippingFee: number
}
type mapDispatchToPropsTypes = {
    deleteItemOfCartActionCreator: (i: number) => void
    countUpCartActionCreator: (i: number) => void
    countDownCartActionCreator: (i: number) => void
    toggleInCartActionCreator: (i: number) => void
}

let mapStateToProps = (state: AppStateTypes): mapStateToPropsTypes => ({
    order: state.cartPage.order,
    shippingFee: state.cartPage.shippingFee
});

export default connect<mapStateToPropsTypes, mapDispatchToPropsTypes, null, AppStateTypes>(mapStateToProps,
    {deleteItemOfCartActionCreator, countUpCartActionCreator,
        countDownCartActionCreator, toggleInCartActionCreator})(CartItem)