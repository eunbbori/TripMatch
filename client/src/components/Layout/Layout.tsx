import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MyHeader from "../MyHeader/MyHeader";
import MyFooter from "../MyFooter/MyFooter";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <MyHeader />
      <Outlet />
      <MyFooter />
    </main>
  );
};

export default Layout;
