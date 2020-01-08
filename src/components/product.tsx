import React from 'react';
import ProductType from '../Interfaces/productType';


const Product = (product: ProductType, addFunc: any) => {
    console.log(addFunc);
    return (
        <article className='article' id='id'>
            <div>
                <img className='article__image' src={product.img} title='name' alt={product.name}/>
                <h1 className='article__title'>{product.name}</h1>
                <h2 className='article__description'>{product.description}</h2>
                <span className='article__price'>$ {product.price}</span>
                <button className='article__button' onClick={() => addFunc(product)}>
                    Add
                </button>
            </div>
        </article>
    );
}

export default Product;