import React from "react";
import NavBar from "../Components/NavBar";
import Ad from "../Components/Ad";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  // List of paths where the NavBar should not be displayed
  const hideNavBarOnPaths = ["/404", "/error"]; 

  // Check if the current path is one of the valid paths that i have in my Routes
  const validPaths = [
    "/",
    "/about-us",
    "/contact-us",
    "/why-choose-us",
    "/training",
    "/consulting",
    "/join-us",
    "/startup-accelerator",
    "/our-solutions",
    "/connect-lagos",
    "/courses/software-engineering",
    "/courses/data-analysis",
    "/courses/ui-ux",
    "/courses/product-management",
    "/courses/community-management",
    "/courses/cyber-security",
  ];

  // Now i have to determine if the current path is valid
  const isValidPath = validPaths.includes(location.pathname);

  // Hide NavBar if the path is in the hide list or if the path is not valid
  const shouldHideNavBar =
    hideNavBarOnPaths.includes(location.pathname) || !isValidPath;

  return (
    <div>
      <Ad />
      {!shouldHideNavBar && <NavBar />}
      <Outlet />
    </div>
  );
}

export default Layout;
