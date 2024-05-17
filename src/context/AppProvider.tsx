import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  isLoggedIn: boolean;
  isSidebarExpanded: boolean,
  toggleSidebar: () => void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isSidebarExpanded: false,
  toggleSidebar: () => {}
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(prev => !prev);
  };


  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, isSidebarExpanded, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};