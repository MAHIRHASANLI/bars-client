import BtnFolloverComponent from "../btn_icon_follover";
import BtnIconUserComponent from "../btn_icon_user/icon";
import PhoneIconComponent from "../btn_phone_icon/icon";
import BasketIconComponent from "../btn_basket/icon";

//* NAVBAR-DAKI ƏMƏLİYYAT İKONLARI
// Telefon, istifadəçi hesabı, izləmə siyahısı və səbət ikonlarını bir araya gətirir.
const ActionIcons = () => {
  return (
    <div className="flex items-start gap-5 max-[1000px]:gap-4">
      <PhoneIconComponent />
      <BtnIconUserComponent />
      <BtnFolloverComponent />
      <BasketIconComponent />
    </div>
  );
};

export default ActionIcons;
