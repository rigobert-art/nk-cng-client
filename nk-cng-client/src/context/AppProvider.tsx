import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  isSidebarExpanded: boolean,
  toggleSidebar: () => void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType>({
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  setIsLoggedIn: () => {},
  setIsLoading: () => {},
  setIsError: () => {},
  isSidebarExpanded: false,
  toggleSidebar: () => {}
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarExpanded(prev => !prev);
  };


  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, isSidebarExpanded, toggleSidebar, isLoading, setIsLoading, isError, setIsError }}>
      {children}
    </AppContext.Provider>
  );
};