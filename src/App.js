// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" component={<HomePage/>} />

                {/* <Route path="/product/:id" render={(props) => <ProductPage {...props} addToCart={addToCart} />} />
                <Route path="/cart" render={(props) => <CartPage {...props} cart={cart} removeFromCart={removeFromCart} />} />
             */}
            </Routes>
        </Router>
    );
};

export default App;
