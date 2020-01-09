import React from "react";
import Product from "./product";
import "./Products.scss";
import ProductType from "../../Interfaces/productType";

export default class Products extends React.Component<{products: Array<ProductType>; addToCartAction: any}> {

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
