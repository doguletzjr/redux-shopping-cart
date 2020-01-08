import React from "react";
import Product from "../product";
import "./Products.scss";
import ProductType from "../../Interfaces/productType";

export default class Products extends React.Component<Array<ProductType>> {
  addToCart = (product: ProductType) => {
    console.log(this.props);
    // this.props.addToCartAction(product);
  };

  render() {
    const props: any = this.props;

    return (
      <div className="container">
        {props.products.map((product: ProductType) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    );
  }
}
