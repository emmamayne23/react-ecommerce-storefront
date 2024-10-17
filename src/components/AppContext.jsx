// AppContext.js
/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(2);

  const addItemToCart = () => setCartCount((prevCount) => prevCount + 1);

  return (
    <AppContext.Provider value={{ cartCount, addItemToCart }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
