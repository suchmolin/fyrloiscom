"use client"
import { createContext } from "react"
import { useState, useEffect } from "react"

export const OpenModalContext = createContext()

export const OpenModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cantCart, setCantCart] = useState(0)
  const [cartInfo, setCartInfo] = useState([])
  const [waButton, setWaButton] = useState(false)

  return (
    <OpenModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cantCart,
        setCantCart,
        cartInfo,
        setCartInfo,
        waButton,
        setWaButton,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  )
}
