"use client";

import { createContext, useContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <SidebarContext.Provider value={{ open, setOpen, toggleMenu }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;

export const useSidebarContext = () => useContext(SidebarContext);
