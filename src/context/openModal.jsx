"use client";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const OpenModalContext = createContext();

export const OpenModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cantCart, setCantCart] = useState(0);
  const [cartInfo, setCartInfo] = useState([]);

  return (
    <OpenModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cantCart,
        setCantCart,
        cartInfo,
        setCartInfo,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
};
