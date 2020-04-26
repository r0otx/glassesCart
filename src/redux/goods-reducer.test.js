import goodsReducer, {
    countDownActionCreator,
    countUpActionCreator,
    markInCartActionCreator,
    toggleInCartActionCreator
} from "./goods-reducer";

test('Increment item count', () => {
    let id = 1
    let action = countUpActionCreator(id);
    let state = {
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
                id: 7,
                img: "https://i.ibb.co/5GzVRC2/item-7.png",
                name: "Prada",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 650,
                inventory: 60,
                quantity: 1,
                bestSales: true
            }]
    }
    let newState = goodsReducer(state, action);

    expect(newState.items[0].quantity).toBe(2);
    expect(newState.items[1].quantity).toBe(1);
});

test('Decrement item count', () => {
    let id = 1
    let action = countDownActionCreator(id);
    let state = {
        items: [
            {
                id: 1,
                img: "https://i.ibb.co/r5vG7V2/item-1.png",
                name: "Prada",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 60,
                inventory: 10,
                quantity: 4,
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
            }]
    }
    let newState = goodsReducer(state, action);

    expect(newState.items[0].quantity).toBe(3);
    expect(newState.items[1].quantity).toBe(1);
});

test('Mark in cart item', () => {
    let id = 1
    let action = markInCartActionCreator(id);
    let state = {
        items: [
            {
                id: 1,
                img: "https://i.ibb.co/r5vG7V2/item-1.png",
                name: "Prada",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 60,
                inventory: 10,
                quantity: 4,
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
            }]
    }
    let newState = goodsReducer(state, action);

    expect(newState.items[0].inCart).toBe(true);
    expect(newState.items[1].inCart).toBeUndefined();
});

test('Unmark of cart item', () => {
    let id = 1
    let action = toggleInCartActionCreator(id);
    let state = {
        items: [
            {
                id: 1,
                img: "https://i.ibb.co/r5vG7V2/item-1.png",
                name: "Prada",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 60,
                inventory: 10,
                quantity: 4,
                bestSales: true,
                inCart: true
            },
            {
                id: 7,
                img: "https://i.ibb.co/5GzVRC2/item-7.png",
                name: "Prada",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 650,
                inventory: 60,
                quantity: 1,
                bestSales: true,
                inCart: true
            }]
    }
    let newState = goodsReducer(state, action);

    expect(newState.items[0].inCart).toBe(false);
    expect(newState.items[1].inCart).toBe(true);
});