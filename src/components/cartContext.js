// src/components/cartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible((prevState) => !prevState);
  };

  return (
    <CartContext.Provider value={{ isCartVisible, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};
