import Navbar from "../components/Navbar"
import Cart from "../components/Cart"
import { Outlet } from "react-router-dom"
import { useState } from "react"

const MainLayout = () => {

  const [cartItems, setCartItems] = useState([])

  // const [cartCount, setCartCount] = useState(0)

  const addItemToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  const removeItemFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId))
  }

{/*  const updateItemQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(item.quantity + quantity, 1) } // Prevent negative or zero quantities
          : item
      )
    );
  }; */}

  const calculateTotal = () => {
    return cartItems.reduce((total, item) =>total + item.price, 0).toFixed(2)
  }

  const [isCartOpen, setIscartOpen] = useState(false)

  const openCart = () => setIscartOpen(true)
  const closeCart = () => setIscartOpen(false)

  return (
    <>
        <Navbar cartCount={ cartItems.length } openCart={openCart} />
        <Cart 
          isOpen={isCartOpen} 
          closeCart={closeCart} 
          cartItems={cartItems} 
          removeItems={removeItemFromCart}
          // updateQuantity={updateItemQuantity}
          totalPrice={calculateTotal()}
        />
        <Outlet context={{ addItemToCart }} />
    </>
  )
}

export default MainLayout