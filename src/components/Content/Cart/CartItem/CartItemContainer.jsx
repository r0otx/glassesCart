import React from "react";
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {
    CountDownCartActionCreator,
    CountUpCartActionCreator,
    DeleteItemOfCartActionCreator
} from "../../../../redux/cart-reducer";

let mapDispatchToProps = (state) => ({
    items: state.cartPage.order
});

export default connect(mapDispatchToProps, {DeleteItemOfCartActionCreator,
    CountUpCartActionCreator, CountDownCartActionCreator})(CartItem)