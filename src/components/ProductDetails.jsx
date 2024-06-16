// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';

const ProductDetails = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            const data = await fetchProductById(id);
            setProduct(data);
        };
        getProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
