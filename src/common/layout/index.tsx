// Layout.tsx
import React, { ReactNode } from "react";
import { Menu } from "@components/header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="h-screen bg-mainColor w-screen">
      <Menu />
      <main>{children}</main>
    </div>
  );
};
