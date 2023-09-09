import React, { FC } from "react";
import { Poppins } from "next/font/google";
import Navbar from "./Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`relative ${poppins.className}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
