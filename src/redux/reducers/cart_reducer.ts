import { CartActionTypes } from "../../Interfaces/cartActionTypes";
import productType from "../../Interfaces/productType";

const INITIAL_STATE: any = [];

export default function cartReducer(
  state = INITIAL_STATE,
  action: CartActionTypes
) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProductIndex = state.find(
        (products: productType) => products.id === action?.payload?.id
      );

      return !existingProductIndex
        ? [...state, { ...action.payload, units: 1 }]
        : state.map((product: productType) =>
            product.id === action.payload.id
              ? { ...product, units: product.units + 1 }
              : product
          );
    }
    case "UPDATE_CART": {
      return action.payload.units
        ? state.map((product: productType) =>
            product.id === action.payload.id ? action.payload : product
          )
        : state.filter(
            (products: productType) => products.id !== action.payload.id
          );
    }
    default: {
      return state;
    }
  }
}
