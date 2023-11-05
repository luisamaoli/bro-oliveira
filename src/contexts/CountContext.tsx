import {createContext, useContext, useState } from "react";

interface ICount{
  addCount: (value: number) => void;
  deductCount: (value: number) => void;
  resetCount: () => void;
  resultCount: () => number;
}

const CountContext = createContext<ICount>({
  addCount: () => null,
  deductCount: () => null,
  resetCount: () => null,
  resultCount: () => 0,
});

interface ICountProviderProps{
  // usado pra tipar um elemento html
  children: React.ReactNode
}

const CountProvider = ({ children }: ICountProviderProps) => {
  const [count, setCount] = useState<number>(0);

  const addCount = (value: number) => {
    setCount((prevCount) => prevCount + value);
  };

  const deductCount = (value: number) => {
    setCount((prevCount) => Math.max(prevCount - value, 0));
  };

  const resetCount = () => {
    setCount(0);
  }

  const resultCount = ():number => {
    return count;
  }

  return(
    <CountContext.Provider
      value={{
        addCount,
        deductCount,
        resetCount,
        resultCount
      }}
    >
      { children }
    </CountContext.Provider>
  )
}

const useCount = () => useContext(CountContext);

export { CountProvider, useCount}