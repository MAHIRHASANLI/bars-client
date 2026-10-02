import React from "react";
import { Phone } from "lucide-react";
import BtnFolloverComponent from "../btn_icon_follover";
import BtnIconUserComponent from "../btn_icon_user";

const ActionIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="max-[1000px]:hidden">
        <BtnFolloverComponent />
      </div>
      <button>
        <Phone className="size-4 cursor-pointer" />
      </button>
      <div>
        <BtnIconUserComponent />
      </div>
    </div>
  );
};

export default ActionIcons;
