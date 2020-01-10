import React from "react";
import CartItem from "./cart-item";
import "./CartList.scss";
import ProductType from "../../Interfaces/productType";

export default class Cart extends React.Component<{
  cartItems: Array<ProductType>;
  updateCartAction: Function;
}> {
  render() {
    if(this.props.cartItems.length > 0) {
      return (
        <div className="container container--column">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Units</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cartItems.map((cartItem: any) => (
                  <CartItem
                    key={cartItem.id}
                    {...cartItem}
                    updateCartFunc={this.props.updateCartAction}
                  />
                ))}
              </tbody>
            </table>
            <div>
              Total: ${" "}
              {this.props.cartItems.reduce(
                (acc: number, cartItem: any) =>
                  Math.round((acc += cartItem.price * cartItem.units * 1.19)),
                0
              )}
            </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
