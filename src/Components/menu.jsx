import React, { useRef } from "react";
import list from "./data";
import Cards from "./Cards";

function Menu({ handleClick }) {
    // Function to filter items by ID range
    const filterItems = (minId, maxId) => 
        list.filter(item => item.id >= minId && item.id <= maxId);

    const nonGrilledItems = filterItems(1, 9);
    const grilledItems = filterItems(10, 25);
    const chocolateItems = filterItems(26, 29);

    const Grilled = useRef();
    const NonGrilled = useRef();
    const Chocolate = useRef();

    const scrollHandler = (elmRef) => {
        window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    };

    return (
        <div>
            <div className="button" style={{ display: 'flex', justifyContent: 'space-around', top: 30, position: 'relative' }}>
                <button onClick={() => scrollHandler(Grilled)} style={{ width: 90, height: 32, borderRadius: 8, background: 'white', border: '1px solid darkgrey' }}>
                    Grilled
                </button>
                <button onClick={() => scrollHandler(NonGrilled)} style={{ width: 90, height: 32, borderRadius: 8, background: 'white', border: '1px solid darkgrey' }}>
                    Non-Grilled
                </button>
                <button onClick={() => scrollHandler(Chocolate)} style={{ width: 90, height: 32, borderRadius: 8, background: 'white', border: '1px solid darkgrey' }}>
                    Chocolate
                </button>
            </div>
            <div style={{ textAlign: 'center', color: '#6D6D6D', position: 'relative', top: '230px', fontWeight: 'bolder', fontSize: 50 }}>Menu</div>
            
            <div style={{ marginBottom: '40px' }} ref={NonGrilled}>
                <div className="Vector2" style={{ width: 128.5, height: 1, left: 10, top: 435, position: 'absolute', border: '1px #B6ADAD solid' }}></div>
                <div className="Vector2" style={{ width: 128.5, height: 1, right: 10, top: 435, position: 'absolute', border: '1px #B6ADAD solid' }}></div>
                <div style={{ textAlign: 'center', color: '#6D6D6D', marginTop: '20px', position: 'relative', top: 245, marginBottom: '20px', fontWeight: 'bold' }}>Non-Grilled</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                    {
                        nonGrilledItems.map((item) => (
                            <Cards item={item} key={item.id} handleClick={handleClick} />
                        ))
                    }
                </div>
            </div>
            
            <div style={{ marginBottom: '40px' }}>
                <div className="Vector2" style={{ width: 148.5, height: 1, left: 10, top: 2035, position: 'absolute', border: '1px #B6ADAD solid' }}></div>
                <div className="Vector2" style={{ width: 148.5, height: 1, right: 10, top: 2035, position: 'absolute', border: '1px #B6ADAD solid' }}></div>
                <div ref={Grilled} style={{ textAlign: 'center', marginBottom: '20px', color: '#6D6D6D', position: 'relative', top: 285, fontWeight: 'bold' }}>Grilled</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                    {
                        grilledItems.map((item) => (
                            <Cards item={item} key={item.id} handleClick={handleClick} />
                        ))
                    }
                </div>
            </div>
            
            <div ref={Chocolate}>
                <div className="Vector2" style={{ width: 138.5, height: 1, left: 10, top: 4508, position: 'absolute', border: '1px #B6ADAD solid' }}></div>
                <div className="Vector2" style={{ width: 138.5, height: 1, right: 10, top: 4508, position: 'absolute', border: '1px #B6ADAD solid' }}></div>
                <div style={{ textAlign: 'center', marginBottom: '20px', color: '#6D6D6D', position: 'relative', top: 290, fontWeight: 'bold' }}>Chocolate</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', paddingBottom: '400px' }}>
                    {
                        chocolateItems.map((item) => (
                            <Cards item={item} key={item.id} handleClick={handleClick} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Menu;
