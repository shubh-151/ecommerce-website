// src/pages/ProductPage.js
import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductPage = ({ addToCart }) => (
    <div>
        <ProductDetails addToCart={addToCart} />
    </div>
);

export default ProductPage;
