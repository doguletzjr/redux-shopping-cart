import productType from '../../Interfaces/productType';
import { CartActionTypes } from '../../Interfaces/cartActionTypes';

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";

export function addToCartAction(product: productType): CartActionTypes {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCartAction(product: productType): CartActionTypes {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export function updateCartAction(product: productType): CartActionTypes {
    return {
        type: UPDATE_CART,
        payload: product
    }
}
