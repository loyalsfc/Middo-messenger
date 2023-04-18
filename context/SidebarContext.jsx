"use client";

import { createContext, useState } from "react";

const SidebarContext = createContext();

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

export { SidebarContextProvider, SidebarContext};