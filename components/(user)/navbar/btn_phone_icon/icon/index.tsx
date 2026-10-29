import { Phone } from "lucide-react";
import PhoneModalComponent from "../phone_modal";
import { useState } from "react";

const PhoneIconComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = ()=>setIsOpenModal(true)
  return (
    <div className="relative">
      <button onClick={handleOpenModal}>
        <Phone className="size-4 cursor-pointer" />
      </button>
      {isOpenModal && <PhoneModalComponent setIsOpenModal={setIsOpenModal}/>}
    </div>
  );
};

export default PhoneIconComponent;
