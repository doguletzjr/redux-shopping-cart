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
    const newState = [...state];
    const existingProductIndex = newState.findIndex((products: productType) => products.id === action?.payload?.id)
    switch(action.type) {
        case 'ADD_TO_CART': {
            if (existingProductIndex !== -1) {
                newState[existingProductIndex].units++
                return [...newState]
            } else {
                action.payload.units = 1
                return [...newState, action.payload]
            }
        };
        case 'REMOVE_FROM_CART': {
            newState.splice(existingProductIndex, 1)
            return newState
        };
        break;
        case 'UPDATE_CART': {
            
            return [...newState, action.payload]
        };
        default: {
            return state
        }
    }
}