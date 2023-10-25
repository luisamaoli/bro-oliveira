// Receita de bolo de contexto, eh olhar um que ja tem e se espelhar, nao tem pra onde correr
import React, { createContext, useContext, useEffect, useState } from "react";
import { get } from "../services/api.service";

interface ICart{
  title: string;
  setTitle: (value: string) => void;
  teste: (count : number) => void;
}

export const CartContext = createContext<ICart>({
  title: '',
  setTitle: () => null,
  teste: () => null
})


interface ICartProviderProps{
  children: React.ReactNode
}

// provider eh onde vai ficar toda a logica que eu preciso, ele tem que englobar toda a aplicacao
const CartProvider = ({ children }: ICartProviderProps) => {
  const [title, setTitle] = useState<string>('Luisa');

  // aqui eh um metodo
  const teste = () => {
    console.log('chamou')
  }

  useEffect(() => {
    const onMount = async () => {
      const lista = await get('users/luisamaoli');
      console.log(lista);
    };
    onMount();
    console.log('aqui esta')
  }, [])

  return(
    <CartContext.Provider
      value={{
        title: title,
        setTitle: setTitle,
        teste: teste
      }}
    >
    {children}
    </CartContext.Provider>
  )
}
const useCart = () => useContext(CartContext);

export { CartProvider, useCart }