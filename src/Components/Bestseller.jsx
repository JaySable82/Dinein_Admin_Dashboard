import React from "react";
import Slider from "react-slick";
import pizzaImage from '../assets/pizza.jpeg';
import vegImage from '../assets/veg.png';

function Bestsellers({ handleClick, cart = [] }) {
    const bestsellerSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
    };

    const items = [
        { id: 1, name: 'Peshwai', price: 100, img: pizzaImage },
        { id: 2, name: 'Sadashiv', price: 100, img: pizzaImage },
        { id: 3, name: 'Bombay', price: 100, img: pizzaImage }
    ];

    return (
        <>
            <div className="Bestsellers" style={{ left: 24, top: 130, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400' }}>Bestsellers</div>
            <Slider {...bestsellerSettings} style={{ position: 'absolute', left: 24, top: 150, width: '90%' }}>
                {items.map((item) => {
                    const cartItem = cart.find(cartItem => cartItem.id === item.id);
                    const quantity = cartItem ? cartItem.quantity : 0;
                    return (
                        <div key={item.id}>
                            <div style={{ width: 194, height: 120, background: '#EDECE9', borderRadius: 8, position: 'relative' }}>
                                <img src={item.img} style={{ width: 70, height: 70, borderRadius: 6, position: 'absolute', left: 10, top: 10 }} alt={item.name} />
                                <div style={{ position: 'absolute', left: 90, top: 10, color: 'black' }}><img src={vegImage} alt='veg' style={{ height: 20, width: 20 }} /></div>
                                <div style={{ position: 'absolute', left: 90, top: 30, color: 'black' }}>{item.name}</div>
                                <div style={{ position: 'absolute', left: 90, top: 55, color: 'black' }}>₹{item.price}</div>
                                <div style={{ position: 'absolute', left: 15, top: 85 }}>
                                    {quantity > 0 ? (
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <button
                                                style={{ width: 30, height: 30, borderRadius: 8, backgroundColor: '#ffffff', border: '2px solid lightgrey', cursor: 'pointer' }}
                                                onClick={() => handleClick(item, -1)}
                                            >
                                                -
                                            </button>
                                            <span style={{ margin: '0 10px' }}>{quantity}</span>
                                            <button
                                                style={{ width: 30, height: 30, borderRadius: 8, backgroundColor: '#ffffff', border: '2px solid lightgrey', cursor: 'pointer' }}
                                                onClick={() => handleClick(item, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            style={{ width: 60, height: 30, borderRadius: 8, backgroundColor: '#ffffff', border: '2px solid lightgrey', cursor: 'pointer' }}
                                            onClick={() => handleClick(item, 1)}
                                        >
                                            Add
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}

export default Bestsellers;
