import React, { createContext, useContext, useState } from "react";
import { IProduct } from "../interface/product.interface";

interface ICart {
  items: IProduct[];
  addItem: (item: IProduct, quantity: number) => void;
  removeItem: (item: IProduct, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICart>({
  items: [],
  addItem: (item: IProduct, quantity: number) => {},
  removeItem: (item: IProduct, quantity: number) => {},
  clearCart: () => {}
});

interface ICartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: ICartProviderProps) => {
  const [items, setItems] = useState<IProduct[]>([]);

  const addItem = (item: IProduct, quantity: number) => {
    const newItemArray = Array(quantity).fill(item);
    setItems((prevItems) => [...prevItems, ...newItemArray]);
  };

  const removeItem = (item: IProduct, quantity: number) => {
    let count = 0;
    setItems(prevItems => prevItems.filter(existingItem => {
      if (existingItem === item && count < quantity) {
        count++;
        return false;
      }
      return true;
    }));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };