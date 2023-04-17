"use client";

import SidebarContextProvider from "@/context/SidebarContext";
import Themes from "./Themes";

export function Providers({ children }) {
  return (
    <Themes>
      <SidebarContextProvider>{children}</SidebarContextProvider>
    </Themes>
  );
}
