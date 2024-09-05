import React from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();
  const noNavbarFooterRoutes = ["/admin"];
  const isNoNavbarFooterRoute = noNavbarFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  return (
    <>
      {!isNoNavbarFooterRoute && <Header />}
      <Outlet />
      {!isNoNavbarFooterRoute && <Footer />}
    </>
  );
};

export default Layout;
