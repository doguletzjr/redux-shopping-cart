import productType from '../../Interfaces/productType';
import { CartActionTypes, ReduxActionTypes } from '../../Interfaces/cartActionTypes';

export const addToCartAction = (product: productType): CartActionTypes  => ({
    type: ReduxActionTypes.ADD_TO_CART,
    payload: product
})

export const removeFromCartAction = (product: productType): CartActionTypes => ({
    type: ReduxActionTypes.REMOVE_FROM_CART,
    payload: product
})

export const updateCartAction = (product: productType): CartActionTypes => ({
    type: ReduxActionTypes.UPDATE_CART,
    payload: product
})
