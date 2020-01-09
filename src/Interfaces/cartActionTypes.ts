import productType from "./productType";

export enum ReduxActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_CART = "UPDATE_CART",
}

interface AddToCartAction {
  type: ReduxActionTypes;
  payload: productType;
}

interface RemoveFromCartAction {
  type: ReduxActionTypes;
  payload: productType;
}

interface UpdateCartAction {
  type: ReduxActionTypes;
  payload: productType;
}

export type CartActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartAction;
