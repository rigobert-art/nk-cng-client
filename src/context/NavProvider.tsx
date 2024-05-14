import React, { createContext, useState, useContext } from 'react';

interface NavigationContextType {
  showBottomNav: boolean;
  setShowBottomNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [showBottomNav, setShowBottomNav] = useState(false);

  return (
    <NavigationContext.Provider value={{ showBottomNav, setShowBottomNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};