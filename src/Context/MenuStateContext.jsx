import { useState, useContext, createContext } from "react";

const MenuContext = createContext();

export const useMenuState = () => useContext(MenuContext);

export default function MenuStateProvider({ children }) {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <MenuContext.Provider value={[isMenuShown, setIsMenuShown]}>
      {children}
    </MenuContext.Provider>
  );
}
