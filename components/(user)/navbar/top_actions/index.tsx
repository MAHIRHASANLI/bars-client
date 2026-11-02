import { FiChevronDown } from "react-icons/fi";
import ActionIcons from "../btns_icons_action";

const TopActions = () => {
  return (
    <div className="flex items-center gap-10">
      <div>
        <button className="flex cursor-pointer items-center gap-2 text-sm tracking-wide">
          Azərbaycan dili
          <FiChevronDown className="size-4" />
        </button>
      </div>

      {/* Navbarın istifadəçi əlaqə ikonları */}
      <ActionIcons />
    </div>
  );
};

export default TopActions;