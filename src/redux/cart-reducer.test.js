import cartReducer, {
    addItemToCartActionCreator, countDownCartActionCreator,
    countUpCartActionCreator,
    deleteItemOfCartActionCreator
} from "./cart-reducer";
import React from 'react';

test('Order should be increment', () => {
    let order = {
        id: 2,
        img: "https://i.ibb.co/4S91btW/item-2.png",
        name: "Ray Ban",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
        price: 20,
        inventory: 0,
        quantity: 1,
        bestSales: false
    }
    let action = addItemToCartActionCreator(order);
    let state = {
        order: [
            {
                id: 1,
                img: "https://i.ibb.co/r5vG7V2/item-1.png",
                name: "Prada",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 60,
                inventory: 10,
                quantity: 1,
                bestSales: true
            }]
    }
    let newState = cartReducer(state, action);

    expect(newState.order.length).toBe(2);
});

test('Order should be contain name', () => {
    let order = {
        id: 2,
        img: "https://i.ibb.co/4S91btW/item-2.png",
        name: "Ray Ban",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
        price: 20,
        inventory: 0,
        quantity: 1,
        bestSales: false
    }
    let action = addItemToCartActionCreator(order);
    let state = {
        order: [
            {
                id: 1,
                img: "https://i.ibb.co/r5vG7V2/item-1.png",
                name: "Prada",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 60,
                inventory: 10,
                quantity: 1,
                bestSales: true
            }]
    }
    let newState = cartReducer(state, action);

    expect(newState.order[0].name).toBe("Ray Ban");
});

test('Delete item of cart', () => {
    let id = 1
    let action = deleteItemOfCartActionCreator(id);
    let state = {
        order: [
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
            }]
    }
    let newState = cartReducer(state, action);

    expect(newState.order.length).toBe(1);
});

test('Increment count item in cart', () => {
    let id = 1
    let action = countUpCartActionCreator(id);
    let state = {
        order: [
            {
                id: 1,
                img: "https://i.ibb.co/r5vG7V2/item-1.png",
                name: "Prada",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 60,
                inventory: 10,
                quantity: 3,
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
            }]
    }
    let newState = cartReducer(state, action);

    expect(newState.order[0].quantity).toBe(4);
    expect(newState.order[1].quantity).toBe(1);
});

test('Decrement count item in cart', () => {
    let id = 1
    let action = countDownCartActionCreator(id);
    let state = {
        order: [
            {
                id: 1,
                img: "https://i.ibb.co/r5vG7V2/item-1.png",
                name: "Prada",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 60,
                inventory: 10,
                quantity: 3,
                bestSales: true
            },
            {
                id: 2,
                img: "https://i.ibb.co/4S91btW/item-2.png",
                name: "Ray Ban",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus dolore ea fuga incidunt iste iure, necessitatibus odio praesentium quod sint soluta tempore voluptatum. A adipisci culpa dignissimos excepturi modi!",
                price: 20,
                inventory: 0,
                quantity: 7,
                bestSales: false
            }]
    }
    let newState = cartReducer(state, action);

    expect(newState.order[0].quantity).toBe(2);
    expect(newState.order[1].quantity).toBe(7);
});