import React from "react";
import BtnFolloverComponent from "../btn_icon_follover";
import BtnIconUserComponent from "../btn_icon_user/icon";
import PhoneIconComponent from "../btn_phone_icon/icon";
import BasketIconComponent from "../btn_basket_icon/icon";

const ActionIcons = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="max-[1000px]:hidden">
        <BtnFolloverComponent />
      </div>
      <PhoneIconComponent />
      <BtnIconUserComponent />
      <BasketIconComponent/>
    </div>
  );
};

export default ActionIcons;
