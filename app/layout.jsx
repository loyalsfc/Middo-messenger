import "./globals.css";

// Pages and Components
// import Themes from "@/components/Themes";
// import SidebarContextProvider from "@/context/SidebarContext";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Middo.",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
