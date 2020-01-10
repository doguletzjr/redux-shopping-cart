import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/CartList";
import PRODUCTS from "../data/DATA";
import {
  addToCartAction,
  updateCartAction
} from "../redux/actions/cart_actions";
import "./App.scss";

const Links = () => (
  <nav>
    <NavLink to="/">Products</NavLink>
    <NavLink to={{ pathname: "/Cart" }}>Cart</NavLink>
  </nav>
);

const App = (props: any) => {
  const {
    cart,
    addToCartAction,
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
              updateCartAction={updateCartAction}
            />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/Cart"
        render={() => (
          <Cart
            cartItems={cart}
            updateCartAction={updateCartAction}
          />
        )}
      />
    </Router>
  );
};

const mapStateToProps = ({ cart }: any) => {
  return {
    cart
  };
};

const mapActionsToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      addToCartAction,
      updateCartAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionsToProps)(App);
