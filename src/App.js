// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

const App = () => {
    

    return (
        <Router>
        <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path='/Cart' element={<Cart/>}/>
                            
            </Routes>
        </Router>
    );
};

export default App;
