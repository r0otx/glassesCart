(this["webpackJsonpglasses-usa-nots"]=this["webpackJsonpglasses-usa-nots"]||[]).push([[0],{2:function(t,e,a){t.exports={wrapper:"CartItem_wrapper__2c_OT","col-1":"CartItem_col-1__XbzO2","col-2":"CartItem_col-2__3sDEw",item:"CartItem_item__2K1W8",item__empty:"CartItem_item__empty__UCnCl",item__image:"CartItem_item__image__hrmAx",item__information:"CartItem_item__information__3-tBl",item__information_title:"CartItem_item__information_title__2IvEh",item__quantity:"CartItem_item__quantity__UUuDS",item__total:"CartItem_item__total__1zL28","item__total-price":"CartItem_item__total-price__plMUn","item__quantity_button-count":"CartItem_item__quantity_button-count__1Zt0K",item__quantity_input:"CartItem_item__quantity_input__35O2n",total__subtotal:"CartItem_total__subtotal__3FJib",total__subtotal_cost:"CartItem_total__subtotal_cost__1Xs73",total__shipping:"CartItem_total__shipping__3Qe_h",total__shipping_cost:"CartItem_total__shipping_cost__z0Kjd",total__cost:"CartItem_total__cost__Ao4cs","total__buy_button-proceed":"CartItem_total__buy_button-proceed__2wm1c"}},22:function(t,e,a){t.exports={footer:"Footer_footer__3Rwpb","footer__item-copyright":"Footer_footer__item-copyright__XwzQP"}},23:function(t,e,a){t.exports={main__title:"GoodsList_main__title__1luCE",list:"GoodsList_list__zFteH"}},29:function(t,e,a){t.exports={main:"Content_main__27GtK"}},3:function(t,e,a){t.exports={"goods-card":"GoodsItem_goods-card__1xlPo","goods-card--top":"GoodsItem_goods-card--top__2z4Jt","goods-card__cover":"GoodsItem_goods-card__cover__cfCV8","goods-card__image":"GoodsItem_goods-card__image__1Ry7u","goods-card__title":"GoodsItem_goods-card__title__1S4Y5","goods-card__description":"GoodsItem_goods-card__description__2bAaa",goodsCard__price:"GoodsItem_goodsCard__price__35Ki0","goods-card__button":"GoodsItem_goods-card__button__3MwYS","goods-card__button-disabled":"GoodsItem_goods-card__button-disabled__iBA54","goods-card__quantity":"GoodsItem_goods-card__quantity__dmdcp","goods-card__button-less":"GoodsItem_goods-card__button-less__3lmrS","goods-card__button-more":"GoodsItem_goods-card__button-more__2XOtq","goods-card__input":"GoodsItem_goods-card__input__2E58y"}},31:function(t,e,a){t.exports={main__title:"Cart_main__title__2fYyp"}},34:function(t,e,a){t.exports=a(49)},39:function(t,e,a){},40:function(t,e,a){},49:function(t,e,a){"use strict";a.r(e);var i=a(0),o=a.n(i),n=a(15),r=a.n(n),s=(a(39),a(40),a(32)),c=a(6),m=a.n(c),_=a(26),u=a(28),l=a(10),d=function(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),a=e[0],n=e[1];return a?document.documentElement.classList.add("font-zoom"):document.documentElement.classList.remove("font-zoom"),o.a.createElement("header",{className:m.a.header},o.a.createElement("h1",{className:m.a.header__title},o.a.createElement("a",{href:"/"},"Shopping")),o.a.createElement("nav",{className:m.a.header__nav},o.a.createElement("ul",{className:m.a["header__nav-list"]},o.a.createElement("li",{className:m.a["header__nav-item"]},o.a.createElement("div",{onClick:function(){return n(!a)},className:m.a["header__nav-link"]},"aA")),o.a.createElement("li",{className:m.a["header__nav-item"]},o.a.createElement(l.b,{to:"/",className:m.a["header__nav-link"]},"Shop")),o.a.createElement("li",{className:m.a["header__nav-item"]},o.a.createElement(l.b,{to:"/cart",className:m.a["header__nav-link"]},o.a.createElement(_.a,{icon:u.a}))))))},p=a(22),g=a.n(p),b=function(){return o.a.createElement("footer",{className:g.a.footer},o.a.createElement("div",{className:g.a["footer__item-copyright"]},"\xa9 Test task for GlassesUSA"))},E=a(29),y=a.n(E),v=a(23),f=a.n(v),C=a(3),h=a.n(C),N=function(t){var e=t.items,a=t.CountUpActionCreator,i=t.CountDownActionCreator,n=t.AddItemToCartActionCreator;return e.map((function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("article",{className:" ".concat(h.a["goods-card"]," ").concat(t.bestSales?h.a["goods-card--top"]:"")},o.a.createElement("div",{className:h.a["goods-card__cover"]},o.a.createElement("img",{className:h.a["goods-card__image"],src:t.img,alt:""})),o.a.createElement("h3",{className:h.a["goods-card__title"]},t.name),o.a.createElement("div",{className:h.a["goods-card__description"]},t.description),o.a.createElement("div",{className:h.a.goodsCard__price},"Price: ",t.price,"$"),t.inventory>0?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:h.a["goods-card__quantity"]},o.a.createElement("button",{onClick:function(){return i(t.id)},className:h.a["goods-card__button-less"]},"-"),o.a.createElement("input",{className:h.a["goods-card__input"],type:"text",name:"count","aria-label":"count",value:t.quantity}),o.a.createElement("button",{onClick:function(){return a(t.id)},className:h.a["goods-card__button-more"]},"+")),o.a.createElement("button",{onClick:function(){return n(t)},className:h.a["goods-card__button"]},"Add Cart")):o.a.createElement("button",{disabled:!0,className:h.a["goods-card__button-disabled"]},"Sold Out")))}))},A=a(9),I=a(8),q={items:[{id:1,img:"https://i.ibb.co/r5vG7V2/item-1.png",name:"Prada",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",price:60,inventory:10,quantity:1,bestSales:!0},{id:2,img:"https://i.ibb.co/4S91btW/item-2.png",name:"Ray Ban",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",price:20,inventory:15,quantity:1,bestSales:!1},{id:3,img:"https://i.ibb.co/ryXsyVn/item-3.png",name:"Gucci",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",price:240,inventory:20,quantity:1,bestSales:!0},{id:4,img:"https://i.ibb.co/wsyx0gm/item-4.png",name:"Oakley",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",price:70,inventory:1,quantity:1,bestSales:!1},{id:5,img:"https://i.ibb.co/Pz6M12X/item-5.png",name:"Michael Kors",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",price:10,inventory:0,quantity:1,bestSales:!1},{id:6,img:"https://i.ibb.co/D9Cmtxz/item-6.png",name:"Tory Barch",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",price:150,inventory:0,quantity:1,bestSales:!0},{id:7,img:"https://i.ibb.co/5GzVRC2/item-7.png",name:"Prada",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",price:650,inventory:60,quantity:1,bestSales:!0},{id:8,img:"https://i.ibb.co/FbDXMYr/item-8.png",name:"Calvin Klein",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",price:30,inventory:12,quantity:1,bestSales:!1},{id:9,img:"https://i.ibb.co/VVsr3Nn/item-9.png",name:"Saint Laurent",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",price:20,inventory:12,quantity:1,bestSales:!1}]},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UP_ITEM_QUANTITY":return Object(I.a)({},t,{items:t.items.map((function(t){return t.id===e.payload&&(t.quantity+=1),t}))});case"DOWN_ITEM_QUANTITY":return Object(I.a)({},t,{items:t.items.map((function(t){return t.id===e.payload&&(t.quantity>1?t.quantity-=1:t.quantity=1),t}))});default:return t}},O=a(33),S={order:[],shippingFee:10},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_ITEM_TO_CART":return Object(I.a)({},t,{order:[e.item].concat(Object(O.a)(t.order))});case"DELETE_ITEM_OF_CART":return Object(I.a)({},t,{order:t.order.filter((function(t){return t.id!==e.item}))});case"UP_CART_QUANTITY":return Object(I.a)({},t,{order:t.order.map((function(t){return t.id===e.payload&&(t.quantity+=1),t}))});case"DOWN_CART_QUANTITY":return Object(I.a)({},t,{order:t.order.map((function(t){return t.id===e.payload&&(t.quantity>1?t.quantity-=1:t.quantity=1),t}))});default:return t}},x=Object(A.b)((function(t){return{items:t.goodsPage.items,quantity:t.goodsPage.quantity}}),{CountUpActionCreator:function(t){return{type:"UP_ITEM_QUANTITY",payload:t}},CountDownActionCreator:function(t){return{type:"DOWN_ITEM_QUANTITY",payload:t}},AddItemToCartActionCreator:function(t){return{type:"ADD_ITEM_TO_CART",item:t}}})(N),U=function(t){return o.a.createElement("div",null,o.a.createElement("h2",{className:f.a.main__title},"Shop Items"),o.a.createElement("ul",{className:f.a.list},o.a.createElement(x,null)))},D=a(31),G=a.n(D),k=a(2),L=a.n(k),P=function(t){var e=t.items,a=t.DeleteItemOfCartActionCreator,i=t.CountUpCartActionCreator,n=t.CountDownCartActionCreator,r=t.shippingFee,s=e.map((function(t){return o.a.createElement("div",{key:t.id,className:L.a.item},o.a.createElement("div",{className:L.a.item__image},o.a.createElement("img",{src:t.img,alt:"Img"})),o.a.createElement("div",{className:L.a.item__information},o.a.createElement("div",{className:L.a.item__information_title},t.name),o.a.createElement("div",{className:L.a.item__information_description},t.description)),o.a.createElement("div",{className:L.a.item__quantity},o.a.createElement("button",{onClick:function(){return n(t.id)},className:L.a["item__quantity_button-count"]},"-"),o.a.createElement("input",{className:L.a.item__quantity_input,type:"text",name:"count","aria-label":"count",value:t.quantity}),o.a.createElement("button",{onClick:function(){return i(t.id)},className:L.a["item__quantity_button-count"]},"+")),o.a.createElement("div",{className:L.a.item__total},o.a.createElement("div",{className:L.a["item__total-price"]},t.quantity*t.price,"$"),o.a.createElement("div",{className:L.a["item__total-remove"]},o.a.createElement("button",{onClick:function(){return a(t.id)},className:L.a["item__quantity_button-count"]},"x"))))})),c=e.map((function(t){return t.price*t.quantity})).reduce((function(t,e){return t+e}),0),m=c+r;return o.a.createElement("div",{className:L.a.wrapper},o.a.createElement("div",{className:L.a["col-1"]},s.length>0?s:o.a.createElement("div",{className:L.a.item__empty},"Cart Empty")),o.a.createElement("div",{className:L.a["col-2"]},o.a.createElement("div",{className:L.a.total__subtotal},o.a.createElement("div",{className:L.a.total__subtotal_name},"Subtotal"),o.a.createElement("div",{className:L.a.total__subtotal_cost},c,"$")),o.a.createElement("div",{className:L.a.total__shipping},o.a.createElement("div",{className:L.a.total__shipping_name},"Shipping Fee"),o.a.createElement("div",{className:L.a.total__shipping_cost},r,"$")),o.a.createElement("div",{className:L.a.total__cost},o.a.createElement("div",{className:L.a.total__cost_name},"Order Total"),o.a.createElement("div",{className:L.a.total__cost_cost},e.length>0?m:0,"$")),o.a.createElement("div",{className:L.a.total__buy},o.a.createElement("button",{className:L.a["total__buy_button-proceed"]},"Proceed to Checkout"))))},j=Object(A.b)((function(t){return{items:t.cartPage.order,shippingFee:t.cartPage.shippingFee}}),{DeleteItemOfCartActionCreator:function(t){return{type:"DELETE_ITEM_OF_CART",item:t}},CountUpCartActionCreator:function(t){return{type:"UP_CART_QUANTITY",payload:t}},CountDownCartActionCreator:function(t){return{type:"DOWN_CART_QUANTITY",payload:t}}})(P),M=function(){return o.a.createElement("div",null,o.a.createElement("h2",{className:G.a.main__title},"My Cart"),o.a.createElement(j,null))},F=a(7),R=function(){return o.a.createElement("main",{className:y.a.main},o.a.createElement(F.a,{exact:!0,path:"/glassesCart/",render:function(){return o.a.createElement(U,null)}}),o.a.createElement(F.a,{path:"/cart",render:function(){return o.a.createElement(M,null)}}))},Y=a(14),z=Object(Y.b)({cartPage:w,goodsPage:T}),Q=Object(Y.c)(z);window.store=Q;var W=Q;var X=function(){return o.a.createElement(l.a,null,o.a.createElement(A.a,{store:W},o.a.createElement(d,null),o.a.createElement(R,null),o.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},6:function(t,e,a){t.exports={header:"Header_header__3_RjQ",header__title:"Header_header__title__X3fbe",header__nav:"Header_header__nav__poSpL"}}},[[34,1,2]]]);
//# sourceMappingURL=main.955eedb7.chunk.js.map