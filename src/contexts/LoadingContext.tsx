import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ILoading{
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<ILoading>({
  isVisible: false,
  setIsVisible: () => null,
});

interface ILoadingProviderProps{
  // usado pra tipar um elemento html
  children: React.ReactNode
}

const LoadingProvider = ({ children }: ILoadingProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return(
    <LoadingContext.Provider
      value={{
        isVisible,
        setIsVisible
      }}
    >
      { children }
    </LoadingContext.Provider>
  )
}

const useLoading = () => useContext(LoadingContext);

export { LoadingProvider, useLoading}