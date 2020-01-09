import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ProductList from "./components/products/ProductList";
import Cart from "./components/cart/CartList";
import PRODUCTS from "./data/DATA";
import {
  addToCartAction,
  removeFromCartAction,
  updateCartAction
} from "./redux/actions/cart_actions";
import "./App.scss";

const Links = () => (
  <nav>
    <NavLink to="/">Products</NavLink>
    <NavLink to={{ pathname: "/Cart" }}>Cart</NavLink>
  </nav>
);

const App = props => {
  const {
    cart,
    addToCartAction,
    removeFromCartAction,
    updateCartAction
  } = props;
  return (
    <Router>
      <Links />
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <ProductList
              products={PRODUCTS}
              addToCartAction={addToCartAction}
            />
            <Cart
              cartItems={cart}
              removeFromCartAction={removeFromCartAction}
            />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/Cart"
        render={() => (
          <Cart cartItems={cart} removeFromCartAction={removeFromCartAction} />
        )}
      />
    </Router>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart
  };
};

const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      addToCartAction,
      removeFromCartAction,
      updateCartAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionsToProps)(App);
