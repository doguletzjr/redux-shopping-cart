import productType from "./productType";

interface AddToCartAction {
    type: 'ADD_TO_CART'
    payload: productType 
}

interface RemoveFromCartAction {
    type: 'REMOVE_FROM_CART'
    payload: productType 
}

interface UpdateCartAction {
    type: 'UPDATE_CART'
    payload: productType 
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction | UpdateCartAction