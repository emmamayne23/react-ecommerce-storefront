import Navbar from "../components/Navbar"
import Cart from "../components/Cart"
import { Outlet } from "react-router-dom"
import { useState } from "react"

const MainLayout = () => {

  const [cartItems, setCartItems] = useState([])

  // const [cartCount, setCartCount] = useState(0)

// MainLayout.jsx or wherever you handle adding items to the cart
const addItemToCart = (product) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find(item => item.id === product.id);
    if (existingItem) {
      // If the item is already in the cart, increase the quantity
      return prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // If the item is new, add it with an initial quantity of 1
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};


  

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

 const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity + quantity, 1) } // Prevent negative or zero quantities
          : item
      )
    );
  };

const calculateTotal = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

// const calculateTotal = () => {
//   return cartItems.reduce((total, item) => {
//     // Ensure item has a valid price and quantity
//     const itemTotal = item.price * item.quantity;
//     return total + itemTotal;
//   }, 0).toFixed(2);
// };
  

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
          removeItem={removeItemFromCart}
          updateQuantity={updateItemQuantity}
          totalPrice={calculateTotal()}
        />
        <Outlet context={{ addItemToCart }} />
    </>
  )
}

export default MainLayout