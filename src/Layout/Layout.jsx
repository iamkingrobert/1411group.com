import React from "react";
import NavBar from "../Components/NavBar";
import Ad from "../Components/Ad";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Ad />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
