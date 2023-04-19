import React, { ReactNode } from "react";

import Header from "@/layout/header/header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
