import React from "react";
import Product from "../product";
import "./Products.scss";
import ProductType from "../../Interfaces/productType";

export default class Products extends React.Component<Array<ProductType>> {

  addToCart = (product: ProductType) => {
    const props:any  = this.props
    props.addFunc(product);
  };

  render() {
    const props: any = this.props;

    console.log(props);
    console.log(this.addToCart);

    return (
      <div className="container">
        {props.products.map((product: any) => (
          <Product key={product.id} {...product} addFunc={this.addToCart} />
        ))}
      </div>
    );
  }
}
