import { Menu } from "@components/header";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full bg-mainColor w-full">
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
