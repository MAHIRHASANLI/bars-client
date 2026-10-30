import LinksComponent from "@/components/(user)/navbar/links";
import SearchInputComponent from "@/components/(user)/navbar/search_input";
import LoginAndFavoriteComponent from "../login_favorite";

 

const MobileNavbarContent = ({
  handleCloseMenu,
}: {
  handleCloseMenu: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-9999 opacity-100 transition-opacity duration-300 starting:opacity-0"
      onClick={handleCloseMenu}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-20 left-0 w-full bg-white px-5 translate-x-0 transition-transform duration-300 ease-out starting:translate-x-full"
      >
        <div className="pt-4 pb-4">
          <SearchInputComponent />
        </div>

        <div className="pt-4 pb-4">
          <LoginAndFavoriteComponent />
        </div>

        <div className="pt-4 pb-4">
          <LinksComponent handleCloseMenu={handleCloseMenu} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbarContent;