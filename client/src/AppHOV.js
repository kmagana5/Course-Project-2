// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CartDropdown from './CartDropdown';
import CheckoutPage from './CheckoutPage';
import Navigation from './Navigation';
import OrdersPage from './OrdersPage';
import Structure from './Structure';
import './App.css';

function App() {
    const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [cartVisible, setCartVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState('/');

    useEffect(() => {
        fetchData();
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.structure_id === item.structure_id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            updateCart(updatedCartItems);
        } else {
            updateCart([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemToRemove) => {
        const updatedCartItems = cartItems.filter(item => item !== itemToRemove);
        updateCart(updatedCartItems);
    };

    const adjustQuantity = (item, increment) => {
        const updatedCartItems = [...cartItems];
        const itemToUpdateIndex = updatedCartItems.findIndex(cartItem => cartItem.structure_id === item.structure_id);
        updatedCartItems[itemToUpdateIndex].quantity += increment;

        if (updatedCartItems[itemToUpdateIndex].quantity <= 0) {
            updatedCartItems.splice(itemToUpdateIndex, 1);
        }
        updateCart(updatedCartItems);
    };

    const updateCart = (updatedCartItems) => {
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <Router>
            <div className="container">
                <Navigation cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
                <div className="cart-dropdown">
                    {!currentPage.includes('checkout') && (
                        <button onClick={toggleCartVisibility} className="cart-button">
                            Cart 🛒 ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                        </button>
                    )}
                    {cartVisible && !currentPage.includes('checkout') && (
                        <CartDropdown cartItems={cartItems} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />
                    )}
                </div>
                <Routes>
                    <Route
                        path="/"
                        element={<Home data={data} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
                    />
                    <Route
                        path="/checkout"
                        element={<CheckoutPage cartItems={cartItems} setCurrentPage={setCurrentPage} />}
                    />
                    <Route
                        path="/orders"
                        element={<OrdersPage setCurrentPage={setCurrentPage} />} // Pass setCurrentPage function to OrdersPage
                    />
                    <Route
                        path="/structures/:id"
                        element={<Structure />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

const Home = ({ data, addToCart, setCurrentPage }) => (
    <>
        <div className="main-content">
            <div className="structure-list">
                <h2>Structure Listing</h2>
                <ul>
                    {data.map(item => (
                        <li key={item.structure_id}>
                            ID: {item.structure_id}, Type: {item.structure_type}, User ID: {item.user_id}, Tags: {item.tags.join(', ')}
                            <button onClick={() => {addToCart(item); setCurrentPage('/')}} style={{ marginLeft: '10px' }}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
);

export default App;