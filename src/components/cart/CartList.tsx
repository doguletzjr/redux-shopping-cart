import React from "react";
import CartItem from "./cart-item";
import "./CartList.scss";
import ProductType from "../../Interfaces/productType";

export default class Cart extends React.Component<{cartItems: Array<ProductType>; removeFromCartAction: any}> {

  render() {
    const props: any = this.props;

    return (
      <div className="container">
        {props.cartItems.map((cartItem: any) => (
          <CartItem
            key={cartItem.id}
            {...cartItem}
            removeFunc={props.removeFromCartAction}
          />
        ))}
        {props.cartItems.length > 0 && (
          <div>
            Total: ${" "}
            {props.cartItems.reduce(
              (acc: number, cartItem: any) =>
                (acc += cartItem.price * cartItem.units * 1.19),
              0
            )}
          </div>
        )}
      </div>
    );
  }
}
