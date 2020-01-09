import { CartActionTypes } from "../../Interfaces/cartActionTypes";
import productType from "../../Interfaces/productType";

const INITIAL_STATE: any = [];

export default function cartReducer(
  state = INITIAL_STATE,
  action: CartActionTypes
) {
  switch (action.type) {
    case "ADD_TO_CART": {
      //   state.map((product: productType) => {
      //     console.log(product.id === action.payload.id);
      //   });
      const existingProductIndex = state.findIndex(
        (products: productType) => products.id === action?.payload?.id
      );

      return existingProductIndex === -1
        ? [...state, { ...action.payload, units: 1 }]
        : state.map((product: productType) =>
            product.id === action.payload.id
              ? { ...product, units: product.units + 1 }
              : product
          );
    }
    case "REMOVE_FROM_CART":
      {
        return state.filter(
          (products: productType) => products.id !== action.payload.id
        );
      }
      break;
    case "UPDATE_CART": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}
