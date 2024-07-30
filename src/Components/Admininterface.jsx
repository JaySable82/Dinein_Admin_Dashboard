import React, { useState } from "react";
import '../Components/admin.css';
import AdminCard from "./admincard";
import list from "./data";

const initialOrders = [
    {
        token: 1,
        items: [
            { ...list[0], qty: 1 },
            { ...list[1], qty: 2 },
            { ...list[2], qty: 1 }
        ]
    },
    {
        token: 2,
        items: [
            { ...list[3], qty: 1 },
            { ...list[4], qty: 1 },
            { ...list[5], qty: 2 }
        ]
    },
    {
        token: 3,
        items: [
            { ...list[6], qty: 1 },
            { ...list[7], qty: 1 },
            { ...list[8], qty: 3 }
        ]
    },
    {
        token: 4,
        items: [
            { ...list[22], qty: 1 },
            { ...list[21], qty: 1 },
            { ...list[19], qty: 1 }
        ]
    }
];

function Admin() {
    const [currentOrders, setCurrentOrders] = useState(initialOrders);
    const [acceptedOrders, setAcceptedOrders] = useState([]);
    const [doneOrders, setDoneOrders] = useState([]);

    const handleDone = (token) => {
        const orderToMoveFromCurrent = currentOrders.find(order => order.token === token);
        const orderToMoveFromAccepted = acceptedOrders.find(order => order.token === token);

        if (orderToMoveFromCurrent) {
            setCurrentOrders(currentOrders.filter(order => order.token !== token));
            setAcceptedOrders([...acceptedOrders, orderToMoveFromCurrent]);
        } else if (orderToMoveFromAccepted) {
            setAcceptedOrders(acceptedOrders.filter(order => order.token !== token));
            setDoneOrders([...doneOrders, orderToMoveFromAccepted]);
        }
    };

    const handleDecline = (token) => {
        const updatedCurrentOrders = currentOrders.filter(order => order.token !== token);
        const updatedAcceptedOrders = acceptedOrders.filter(order => order.token !== token);
        setCurrentOrders(updatedCurrentOrders);
        setAcceptedOrders(updatedAcceptedOrders);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
            <div className="Navbar" style={{ width: '100%', height: 80, left: 0, top: 0, position: 'absolute', background: '#0D0F11' }}>
                <div className="Logo" style={{ left: 30, top: 24, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 26, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Logo</div>
                <div className="ViewOrders" style={{ left: 610, top: 24, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 26, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>View Orders</div>
                <div className="LogOut" style={{ right: 30, top: 24, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 26, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Log out</div>
            </div>

            <div className="Current_order" style={{ width: 400, height: '100vh', left: 30, top: 104, position: 'absolute', background: '#EDECE9', borderRadius: 30 }}>
                <div className="grey box" style={{ width: '100%', height: 70, left: 1, top: 1, position: 'absolute', background: '#DDDBD3', borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                <div className="Accepted0" style={{ left: 100, top: 20, position: 'absolute', textAlign: 'center', color: '#0D0F11', fontSize: 30, fontFamily: 'Inter', fontWeight: 'bolder', wordWrap: 'break-word' }}>Current Orders</div>
                {currentOrders.map(order => (
                    <AdminCard
                        key={order.token}
                        token={order.token}
                        items={order.items}
                        onAccept={() => handleDone(order.token)}
                        onDone={() => handleDone(order.token)}
                        onDecline={handleDecline}
                        showDoneButton={true}
                        showDeclineButton={true}
                    />
                ))}
            </div>

            <div className="Accepted" style={{ width: 400, height: '100vh', top: 104, position: 'absolute', background: '#EDECE9', borderRadius: 30 }}>
                <div className="grey box" style={{ width: '100%', height: 70, position: 'absolute', background: '#DDDBD3', borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                <div className="Accepted0" style={{ left: 120, top: 20, position: 'absolute', textAlign: 'center', color: '#0D0F11', fontSize: 30, fontFamily: 'Inter', fontWeight: 'bolder', wordWrap: 'break-word' }}>Accepted</div>
                {acceptedOrders.map(order => (
                    <AdminCard
                        key={order.token}
                        token={order.token}
                        items={order.items}
                        onDone={() => handleDone(order.token)}
                        onDecline={handleDecline}
                        showDoneButton={true}
                        showDeclineButton={true}
                    />
                ))}
            </div>

            <div className="Done" style={{ width: 400, height: '100vh', right: 30, top: 104, position: 'absolute', background: '#EDECE9', borderRadius: 30 }}>
                <div className="grey box" style={{ width: '100%', height: 70, position: 'absolute', background: '#DDDBD3', borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                <div className="Accepted0" style={{ left: 170, top: 20, position: 'absolute', textAlign: 'center', color: '#0D0F11', fontSize: 30, fontFamily: 'Inter', fontWeight: 'bolder', wordWrap: 'break-word' }}>Done</div>
                {doneOrders.map(order => (
                    <AdminCard
                        key={order.token}
                        token={order.token}
                        items={order.items}
                        showDoneButton={false}
                        showDeclineButton={false}
                    />
                ))}
            </div>
        </div>
    );
}

export default Admin;
