import React from "react";
import Product from "../product";
import "./Products.scss";
import ProductType from "../../Interfaces/productType";

export default class Products extends React.Component<Array<ProductType>> {

  render() {
    const props: any = this.props;

    return (
      <div className="container">
        {props.products.map((product: any) => (
          <Product key={product.id} {...product} addFunc={props.addToCartAction} />
        ))}
      </div>
    );
  }
}
