import React from "react";
import { Outlet } from "react-router-dom";
import MyHeader from "../MyHeader/MyHeader";
import MyFooter from "../MyFooter/MyFooter";

const Layout = () => {
  return (
    <main>
      <MyHeader />
      <Outlet />
      <MyFooter />
    </main>
  );
};

export default Layout;
