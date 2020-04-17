const CHANGE_ITEM_QUANTITY = "CHANGE_ITEM_QUANTITY";

let initialState = {
    items: [
        {
            id: 1,
            img: "https://i.ibb.co/r5vG7V2/item-1.png",
            name: "Prada",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "60",
            quantity: 10,
            bestSales: true
        },
        {
            id: 2,
            img: "https://i.ibb.co/4S91btW/item-2.png",
            name: "Ray Ban",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "20",
            quantity: 15,
            bestSales: false
        },
        {
            id: 3,
            img: "https://i.ibb.co/ryXsyVn/item-3.png",
            name: "Gucci",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "240",
            quantity: 20,
            bestSales: true
        },
        {
            id: 4,
            img: "https://i.ibb.co/wsyx0gm/item-4.png",
            name: "Oakley",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "70",
            quantity: 1,
            bestSales: false
        },
        {
            id: 5,
            img: "https://i.ibb.co/Pz6M12X/item-5.png",
            name: "Michael Kors",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "10",
            quantity: 0,
            bestSales: false
        },
        {
            id: 6,
            img: "https://i.ibb.co/D9Cmtxz/item-6.png",
            name: "Tory Barch",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "150",
            quantity: 0,
            bestSales: true
        },
        {
            id: 7,
            img: "https://i.ibb.co/5GzVRC2/item-7.png",
            name: "Prada",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "650",
            quantity: 60,
            bestSales: true
        },
        {
            id: 8,
            img: "https://i.ibb.co/FbDXMYr/item-8.png",
            name: "Calvin Klein",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "30",
            quantity: 12,
            bestSales: false
        },
        {
            id: 9,
            img: "https://i.ibb.co/VVsr3Nn/item-9.png",
            name: "Saint Laurent",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "20",
            quantity: 12,
            bestSales: false
        }
    ]
}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ITEM_QUANTITY: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export default goodsReducer;