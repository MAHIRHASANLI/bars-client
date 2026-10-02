"use client";
import ActionIcons from "@/components/(user)/navbar/action_icons";
import LogoComponent from "@/components/(user)/navbar/logo";
import MobileMenuButton from "@/components/(user)/navbar/mobile_menu_button";
import MobileNavbarContent from "@/components/(user)/navbar/mobile_navbar_content";

import React from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="flex items-center justify-between w-full h-20 bg-white sticky top-0 z-50 min-[1000px]:none min-[1000px]:hidden">
        <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <LogoComponent />
        <ActionIcons />
      </div>
      <div>
        {isOpen && <MobileNavbarContent />}
      </div>
    </div>
  );
};

export default MobileNavbar;
