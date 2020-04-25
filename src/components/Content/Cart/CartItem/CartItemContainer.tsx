import {connect} from "react-redux";
import CartItem from "./CartItem";
import {
    CountDownCartActionCreator,
    CountUpCartActionCreator,
    DeleteItemOfCartActionCreator
} from "../../../../redux/cart-reducer";
import {ToggleInCartActionCreator} from "../../../../redux/goods-reducer";
import {AppStateTypes} from "../../../../redux/store";

let mapDispatchToProps = (state: AppStateTypes) => ({
    items: state.cartPage.order,
    shippingFee: state.cartPage.shippingFee
});

export default connect(mapDispatchToProps, {DeleteItemOfCartActionCreator,
    CountUpCartActionCreator, CountDownCartActionCreator, ToggleInCartActionCreator})(CartItem)