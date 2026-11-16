"use client";

import ActionIcons from "@/components/(main)/navbar/btns_icons_action";
import LogoComponent from "@/components/(main)/navbar/logo";
import MobileMenuButton from "@/components/(main)/navbar/mobile_menu_button";
import MobileNavbarContent from "@/components/(main)/navbar/mobile_navbar_content";
import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
function handleCloseMenu(){
  setIsOpen(false)
}
  return (
    <div>
      <div className="flex items-center justify-between w-full h-20 bg-white sticky top-0 z-50 min-[1000px]:none min-[1000px]:hidden">
        <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <LogoComponent />
        <ActionIcons />
      </div>

      <div>
        {isOpen && (
          <MobileNavbarContent  handleCloseMenu={handleCloseMenu} />
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;