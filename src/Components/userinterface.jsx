import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bestsellers from './Bestseller';
import Menu from './menu';
import Cart from '../Components/kartpopup';
import Nav from '../Components/navbar'; // Import Nav component

// Importing images
import ambika from '../assets/ambika.png';

const YourComponent = () => {
    const [cart, setCart] = useState([]);


    const handleClick = (item, quantity) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);

            if (existingItemIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += quantity;

                if (updatedCart[existingItemIndex].quantity <= 0) {
                    updatedCart.splice(existingItemIndex, 1);
                }

                return updatedCart;
            } else {
                if (quantity > 0) {
                    return [...prevCart, { ...item, quantity }];
                }
                return prevCart;
            }
        });
    };

    const cartSize = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative', background: '#FCFCF9' }}>
            <Nav size={cartSize} /> {/* Update Nav with cart size */}
            {/* <div className="Logo" style={{ left: 80, top: 32,width:30, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', alignItems: 'center' }}>
                <img src={ambika} alt="Logo" />
            </div> */}
            <Bestsellers handleClick={handleClick} cart={cart} /> {/* Pass cart to Bestsellers */}
            <Menu handleClick={handleClick} cart={cart} /> {/* Pass cart to Menu */}
            <Cart size={cartSize} total={cartTotal} /> {/* Update Cart with cart size and total */}
        </div>
    );
};

export default YourComponent;
