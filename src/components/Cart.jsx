// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
    <div>
        {cart.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            <div>
                {cart.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default Cart;
