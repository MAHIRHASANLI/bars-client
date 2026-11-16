import React from "react";
import LinksComponent from "@/components/(main)/navbar/links";
import NavbarTopBar from "@/components/(main)/navbar/navbar_top_bar";

const DesktopNavbar = () => {
  return (
    <div>
      <NavbarTopBar/>
      <LinksComponent />
    </div>
  );
};

export default DesktopNavbar;
