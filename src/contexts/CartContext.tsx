import React, { createContext, useContext, useState } from "react";
import { IProduct } from "../interface/product.interface";

interface ICart {
  items: IProduct[];
  addItem: (item: IProduct, quantity: number) => void;
}

export const CartContext = createContext<ICart>({
  items: [],
  addItem: (item: IProduct, quantity: number) => {},
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

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };