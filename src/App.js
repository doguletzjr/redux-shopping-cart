import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ProductList from "./components/products/ProductList";
import PRODUCTS from "./data/DATA";
import {
  addToCartAction,
  removeFromCartAction,
  updateCartAction
} from "./redux/actions/cart_actions";
import "./App.scss";

const Products = addToCartAction => (
  <ProductList products={PRODUCTS} addToCartAction={addToCartAction} />
);
const Cart = props => {
  console.log(props);
};

const Links = () => (
  <nav>
    <NavLink to="/">Products</NavLink>
    <NavLink to={{ pathname: "/Cart" }}>Cart</NavLink>
  </nav>
);

// const App = () => (
//   <Router>
//     <div>
//       <Links />
//       <Route exact path="/" component={Products} />
//       <Route exact path="/Cart" render={Cart} />
//     </div>
//   </Router>
// );

class App extends React.Component {
  render() {
    const {
      cart,
      addToCartAction,
      removeFromCartAction,
      updateCartAction
    } = this.props;
    console.log({addToCartAction})
    return (
      <Router>
        <div>
          <Links />
          <Route exact path="/" render={() => (
            <ProductList products={PRODUCTS} addFunc={addToCartAction} />
          )} />
          <Route exact path="/Cart" render={() => (
            <div>
              {cart.map(e => e.name)};
            </div>
          )} />
        </div>
      </Router>
    );
  }
}

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
