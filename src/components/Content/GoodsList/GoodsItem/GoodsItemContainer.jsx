import React from "react";
import GoodsItem from "./GoodsItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
        items: state.goodsPage.items
})

export default connect(mapStateToProps, null)(GoodsItem);