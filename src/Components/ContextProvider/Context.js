import React, { createContext, useState, useContext } from 'react';

export const LoginContext = createContext("");
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const Context = ({ children }) => {
  const [logindata, setLogindata] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]); // Clears the cart
  };

  return (
    <LoginContext.Provider value={{ logindata, setLogindata }}>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
    </LoginContext.Provider>
  );
};

export default Context;
