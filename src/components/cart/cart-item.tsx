import React from "react";

const CartItem = ({removeFunc, ...cartItems} : {removeFunc: Function}) => {
  const cart: any = cartItems;
  return (
    <article className="cart">
      <div>
        <h1 className="cart-item__title">{cart.name}</h1>
        <span className="cart-item__cost">$ {cart.price}</span>
        <span className="cart-item__cost">Count: {cart.units}</span>
        <button className="cart-item__remove" onClick={() => removeFunc(cart)}>
          remove
        </button>
      </div>
    </article>
  );
};

export default CartItem;
