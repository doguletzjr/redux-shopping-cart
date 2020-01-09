import React from "react";

const Product = ({addFunc, ...products} : {addFunc: Function}) => {
  const product: any = products;

  return (
    <article className="article">
      <div>
        <img
          className="article__image"
          src={product.img}
          alt={product.name}
        />
        <h1 className="article__title">{product.name}</h1>
        <h2 className="article__description">{product.description}</h2>
        <span className="article__price">$ {product.price}</span>
        <button className="article__button" onClick={() => addFunc(product)}>
          Add
        </button>
      </div>
    </article>
  );
};

export default Product;
