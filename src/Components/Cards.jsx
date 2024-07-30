import React, { useState } from 'react';

function Cards({ item, handleClick }) { // Receive item and handleClick as props
    const { name, price, img } = item;

    const [count, setCount] = useState(0); // Local state for count

    const handleAddClick = () => {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            handleClick(item, 1); // Notify parent about addition
            return newCount;
        });
    };

    const handleRemoveClick = () => {
        setCount(prevCount => {
            if (prevCount > 0) {
                const newCount = prevCount - 1;
                handleClick(item, -1); // Notify parent about removal
                return newCount;
            }
            return prevCount;
        });
    };

    return (
        <div className="cards" style={{ height: 280, width: 170, top: 300, background: '#EDECE9', borderRadius: 8, position: 'relative', alignContent: 'center' }}>
            <div className="img_box">
                <img src={img} alt="food" style={{ width: 130, height: 100, borderRadius: 10, alignItems: 'center', display: 'block', marginLeft: 20 }} />
            </div>
            <div className="details">
                <p style={{ fontWeight: 'bolder', marginLeft: 20, marginBottom: 0 }}>{name}</p>
                <p style={{ fontWeight: 'lighter', color: 'dark-grey', marginLeft: 20, marginTop: 6 }}>Price- ₹{price}</p>
                <button onClick={handleAddClick} style={{ height: 30, marginLeft: 40, marginBottom: 10, borderRadius: 8, fontWeight: 'bold', backgroundColor: 'white', border: '2px solid lightgrey' }}>Add to Cart</button>
                {count > 0 && (
                    <div style={{ marginLeft: 40, marginBottom: 10 }}>
                        <button onClick={handleRemoveClick} style={{ borderRadius: 8, fontWeight: 'bold', backgroundColor: 'white', border: '2px solid lightgrey' }}>-</button>
                        <span style={{ margin: '0 10px' }}>{count}</span>
                        <button onClick={handleAddClick} style={{ borderRadius: 8, fontWeight: 'bold', backgroundColor: 'white', border: '2px solid lightgrey' }}>+</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cards;
