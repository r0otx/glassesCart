const CHANGE_ITEM_QUANTITY = "CHANGE_ITEM_QUANTITY";

let initialState = {
    items: [
        {
            id: 1,
            img: "",
            name: "Item 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "60"
        },
        {
            id: 2,
            img: "",
            name: "Item 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "20"
        },
        {
            id: 3,
            img: "",
            name: "Item 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "240"
        },
        {
            id: 4,
            img: "",
            name: "Item 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "70"
        },
        {
            id: 5,
            img: "",
            name: "Item 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "10"
        },
        {
            id: 6,
            img: "",
            name: "Item 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "150"
        },
        {
            id: 7,
            img: "",
            name: "Item 7",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "650"
        },
        {
            id: 8,
            img: "",
            name: "Item 8",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "30"
        },
        {
            id: 9,
            img: "",
            name: "Item 9",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
            price: "20"
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