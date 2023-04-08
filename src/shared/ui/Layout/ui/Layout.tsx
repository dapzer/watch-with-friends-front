import React, { FC } from "react";
import { Header } from "@/shared/ui/Layout/ui/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className="layout">
      <Header />
      <main>{props.children}</main>
    </div>
  );
};
