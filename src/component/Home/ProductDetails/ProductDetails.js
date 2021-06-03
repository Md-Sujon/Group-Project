import React from 'react';

import './ProductDetails.css'

const ProductDetails = ({product}) => {
    return (
        <div className="col-md-3 text-center product">
        <img style={{width:'200px'}} src={product.image} alt=""/>
        <h3 className="mt-3">Model: {product.name}</h3>
        <h6>Brand: {product.Brand}</h6>
        <p >Price: {product.Price}</p>
    </div>
    );
};

export default ProductDetails;