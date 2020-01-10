import React from "react";
import Product from "./product";
import "./Products.scss";
import ProductType from "../../Interfaces/productType";

export default class Products extends React.Component<{products: Array<ProductType>; addToCartAction: any}> {
  render() {
    return (
      <div className="container">
        {this.props.products.map((product: any) => (
          <Product key={product.id} {...product} addFunc={this.props.addToCartAction} />
        ))}
      </div>
    );
  }
}
