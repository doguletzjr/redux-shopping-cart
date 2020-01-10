import React from "react";

const CartItem = ({updateCartFunc, ...cartItems} : {updateCartFunc: Function}) => {
  const cart: any = cartItems;
  return (
    // <article className="cart">
    //   <h1 className="cart-item__title">{cart.name}</h1>
    //   <span className="cart-item__cost">$ {cart.price}</span>
    //   <span className="cart-item__cost">Count: {cart.units}</span>
    //   <button className="cart-item__remove" onClick={() => removeFunc(cart)}>
    //     remove
    //   </button>
    // </article>
    <tr>
      <td>{cart.name}</td>
      <td>$ {cart.price}</td>
      <td>{cart.units}</td>
      <td>
        <button className="cart-item__remove" onClick={() => updateCartFunc({...cart, units: 0})}>
          remove
        </button>
        <button className="cart-item__remove" onClick={() => updateCartFunc({...cart, units: cart.units += 1})}>
          add
        </button>
        <button className="cart-item__remove" onClick={() => updateCartFunc({...cart, units: cart.units -= 1})}>
          subtract
        </button>
    </td>
    </tr>
  );
};

export default CartItem;
