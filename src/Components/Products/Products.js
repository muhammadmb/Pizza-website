import React from 'react';
import './ProductsStyle.css';

const Products = ({ heading, data }) => {
    return (
        <div className="products-container">
            <h1 className="product-heading">{heading}</h1>
            <div className="product-wrapper">
                {data.map((product, index) => {
                    return (
                        <div className="product-card" key={index}>
                            <img className="product-img" src={product.img} alt={product.alt} />
                            <div className="product-info">
                                <h2 className="product-title">{product.name}</h2>
                                <p className="product-desc">{product.desc}</p>
                                <p className="product-price">{product.price}</p>
                                <button className="product-button">{product.button}</button>
                            </div>
                        </div>
                    );
                }
                )}
            </div>
        </div>
    )
}

export default Products;