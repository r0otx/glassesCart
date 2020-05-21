import {connect} from "react-redux";
import CartItems from "./CartItems";
import {
    countDownCartActionCreator,
    countUpCartActionCreator,
    deleteItemOfCartActionCreator
} from "../../../../redux/cart-reducer";
import {toggleInCartActionCreator} from "../../../../redux/goods-reducer";
import {AppStateTypes} from "../../../../redux/store";
import {InitialStateItemsType} from "../../../../types";
import {getOrderSelector, getShippingFeeSelector, getSubTotal, getOrderTotal} from "../../../../redux/cart-selectors";

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
    order: getOrderSelector(state),
    shippingFee: getShippingFeeSelector(state),
    // @ts-ignore
    getSubTotal: getSubTotal(state),
    // @ts-ignore
    getOrderTotal: getOrderTotal(state)
});

export default connect<mapStateToPropsTypes, mapDispatchToPropsTypes, null, AppStateTypes>(mapStateToProps,
    {deleteItemOfCartActionCreator, countUpCartActionCreator,
        countDownCartActionCreator, toggleInCartActionCreator})(CartItems)