import { CartActionTypes } from "../../Interfaces/cartActionTypes";
import productType from "../../Interfaces/productType";

const INITIAL_STATE= [
    {
        id: 4,
        name: "Banana",
        description: "I need those carbs",
        img: "https://tachyons.io/img/avatar_1.jpg",
        price: 100,
        units: 2
    }
];

export default function cartReducer(state = INITIAL_STATE, action: CartActionTypes) {
    const oldState = [...state];
    const existingProductIndex = oldState.findIndex((products: productType) => products.id === action?.payload?.id)
    switch(action.type) {
        case 'ADD_TO_CART': {
            if (existingProductIndex !== -1) {
                oldState[existingProductIndex].units++
                return [...oldState]
            } else {
                action.payload.units = 1
                return [...oldState, action.payload]
            }
        };
        case 'REMOVE_FROM_CART': {
            // return oldState.splice(existingProductIndex, 1)
        };
        break;
        case 'UPDATE_CART': {
            return [...oldState, action.payload]
        };
        default: {
            return state
        }
    }
}