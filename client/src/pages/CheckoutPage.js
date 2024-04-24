import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutPage({ cartItems }) {
    const handleOrder = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: Math.floor(Math.random() * 1000), // Generate a random user ID
                    structures: cartItems.map(item => item.structure_id)
                })
            });
            if (!response.ok) {
                throw new Error('Failed to create order');
            }
            // Remove everything from the cart
            // Redirect the user back to the main page
            window.location.href = 'http://localhost:3000/';
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.structure_id}>
                        ID: {item.structure_id}, Type: {item.structure_type}, Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
            <button onClick={handleOrder}>Order</button>
        </div>
    );
}

export default CheckoutPage;