import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/login";
import Otpform from "./Components/otp";
import YourComponent from "./Components/userinterface";
import Kart from "./Components/orders";
import Menu from "./Components/menu"; // Assume you have a menu component
import Nav from "./Components/navbar"; // Assuming you have a Nav component
import Admin from "./Components/Admininterface";
import Adminlogin from "./Components/Admin";
import Otplogin from "./Components/adminotp";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    setCart((prevCart) => {
      return prevCart.map(cartItem => 
        cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
      );
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/otp",
      element: <Otpform />,
    },
    {
      path: "/userprofile",
      element: <YourComponent />,
    },
    {
      path: "/cart",
      element: <Kart cart={cart} setCart={setCart} updateCartItemQuantity={updateCartItemQuantity} />,
    },
    {
      path: "/menu",
      element: <Menu addToCart={addToCart}  />,
    },
    {
      path:"/admin",
      element:<Admin/>
    },
    {
      path:"/adminotp",
      element:<Adminlogin/>
    }
  ]);

  return (
    // <RouterProvider router={router} />
    // {/*<React.Fragment> */}
    // {/* <Otpform/> */}
    // {/* <Adminlogin/> */}
    // {/* <Otplogin/> */}
    <Admin/>
    // <AdminCard/>
    // {/* </React.Fragment> */}
  );
}

export default App;
