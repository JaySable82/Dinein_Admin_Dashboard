import React from 'react';
import { Link } from 'react-router-dom';
import vegIcon from '../assets/food.jpg';
import nonVegIcon from '../assets/food.jpg'; // Assuming you have this icon for non-veg items
import "../Components/Kart.css";

const Kart = ({ cart, setCart, updateCartItemQuantity }) => {
    const incrementQuantity = (item) => {
        updateCartItemQuantity(item.id, item.quantity + 1);
    };

    const decrementQuantity = (item) => {
        updateCartItemQuantity(item.id, item.quantity - 1);
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="kart-container">
            <div className="header">
                <Link to="/userprofile" className="back-button">←</Link>
                <div className="title">Cart</div>
                <div className="order-id">Order ID #45789</div>
            </div>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.veg ? vegIcon : nonVegIcon} alt="item type" className="item-icon" />
                        <div className="item-details">
                            <div className="item-name">{item.name}</div>
                            <div className="item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                            <div className="item-price">₹{item.price}</div>
                        </div>
                        <div className="item-quantity">
                            <button onClick={() => decrementQuantity(item)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => incrementQuantity(item)}>+</button>
                        </div>
                    </div>
                ))}
                <div className="extra-options">
                    <div className="option">Add more items</div>
                    <div className="option">Add cooking requests</div>
                </div>
            </div>
            <div className="bill-details">
                <div className="bill-item">
                    <span>Item total</span>
                    <span>₹{getTotal()}</span>
                </div>
                <div className="bill-item total">
                    <span>To Pay</span>
                    <span>₹{getTotal()}</span>
                </div>
            </div>
            <div className="place-order">
                <button className="place-order-button">Place Order</button>
            </div>
        </div>
    );
};

export default Kart;
