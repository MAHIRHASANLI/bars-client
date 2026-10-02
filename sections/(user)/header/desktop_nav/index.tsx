import React from "react";
import LinksComponent from "@/components/(user)/navbar/links";
import NavbarTopBar from "@/components/(user)/navbar/navbar_top_bar";

const DesktopNavbar = () => {
  return (
    <div>
      <NavbarTopBar/>
      <LinksComponent />
    </div>
  );
};

export default DesktopNavbar;
