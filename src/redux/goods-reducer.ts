import {InitialStateItemsType} from "../types";

const UP_ITEM_QUANTITY = "UP_ITEM_QUANTITY";
const DOWN_ITEM_QUANTITY = "DOWN_ITEM_QUANTITY";
const MARK_IN_CART = "MARK_IN_CART";
const TOGGLE_GOODS_OF_CART = "TOGGLE_GOODS_OF_CART";

type InitialStateType = {
    items: Array<InitialStateItemsType>
}
let initialState: InitialStateType = {
    items: [
        {
            id: 1,
            img: "https://i.ibb.co/r5vG7V2/item-1.png",
            name: "Prada",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: 60,
            inventory: 10,
            quantity: 1,
            bestSales: true
        },
        {
            id: 2,
            img: "https://i.ibb.co/4S91btW/item-2.png",
            name: "Ray Ban",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: 20,
            inventory: 0,
            quantity: 1,
            bestSales: false
        },
        {
            id: 3,
            img: "https://i.ibb.co/ryXsyVn/item-3.png",
            name: "Gucci",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: 240,
            inventory: 20,
            quantity: 1,
            bestSales: true
        },
        {
            id: 4,
            img: "https://i.ibb.co/wsyx0gm/item-4.png",
            name: "Oakley",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: 70,
            inventory: 1,
            quantity: 1,
            bestSales: false
        },
        {
            id: 5,
            img: "https://i.ibb.co/Pz6M12X/item-5.png",
            name: "Michael Kors",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: 10,
            inventory: 0,
            quantity: 1,
            bestSales: false
        },
        {
            id: 6,
            img: "https://i.ibb.co/D9Cmtxz/item-6.png",
            name: "Tory Barch",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: 150,
            inventory: 2,
            quantity: 1,
            bestSales: true
        },
        {
            id: 7,
            img: "https://i.ibb.co/5GzVRC2/item-7.png",
            name: "Prada",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: 650,
            inventory: 60,
            quantity: 1,
            bestSales: true
        },
        {
            id: 8,
            img: "https://i.ibb.co/FbDXMYr/item-8.png",
            name: "Calvin Klein",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: 30,
            inventory: 12,
            quantity: 1,
            bestSales: false
        },
        {
            id: 9,
            img: "https://i.ibb.co/VVsr3Nn/item-9.png",
            name: "Saint Laurent",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: 20,
            inventory: 0,
            quantity: 1,
            bestSales: false
        }
    ]
}

type ActionsType = CountUpActionType | CountDownActionType | MarkInCartActionType | ToggleInCartActionType

const goodsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case UP_ITEM_QUANTITY: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        item.quantity +=1;
                    }
                    return item
                })
            }
        }
        case DOWN_ITEM_QUANTITY: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        if (item.quantity > 1) {
                            item.quantity -=1;
                        } else {
                            item.quantity = 1;
                        }
                    }
                    return item
                })
            }
        }
        case MARK_IN_CART: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        return {...item, inCart: true}
                    }
                    return item
                })
            }
        }
        case TOGGLE_GOODS_OF_CART: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        return {...item, inCart: false}
                    }
                    return item
                })
            }
        }
        default:
            return state;
    }
}

type CountUpActionType = {
    type: typeof UP_ITEM_QUANTITY
    id: number
}
export const countUpActionCreator = (id: number): CountUpActionType => {
    return {
        type: UP_ITEM_QUANTITY, id
    }
}

type CountDownActionType = {
    type: typeof DOWN_ITEM_QUANTITY
    id: number
}
export const countDownActionCreator = (id: number): CountDownActionType => {
    return {
        type: DOWN_ITEM_QUANTITY, id
    }
}

type MarkInCartActionType = {
    type: typeof MARK_IN_CART
    id: number
}
export const markInCartActionCreator = (id: number): MarkInCartActionType => {
    return {
        type: MARK_IN_CART, id
    }
}

type ToggleInCartActionType = {
    type: typeof TOGGLE_GOODS_OF_CART
    id: number
}
export const toggleInCartActionCreator = (id: number): ToggleInCartActionType => {
    return {
        type: TOGGLE_GOODS_OF_CART, id
    }
}

export default goodsReducer;