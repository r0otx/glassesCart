import {createSelector} from "reselect";

export const getOrderSelector = (state) => state.cartPage.order;
export const getShippingFeeSelector = (state) => state.cartPage.shippingFee;

export const getSubTotal = createSelector(getOrderSelector,
    (order) => order.map(item => item.price * item.quantity).reduce((acc, item) => acc + item, 0)
)

export const getOrderTotal = createSelector(getSubTotal, getShippingFeeSelector,
    (subTotal, shippingFee) => subTotal + shippingFee
)