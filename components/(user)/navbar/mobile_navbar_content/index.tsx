  import LinksComponent from "@/components/(user)/navbar/links";
  import SearchInputComponent from "@/components/(user)/navbar/search_input";
  import LoginAndFavoriteComponent from "../login_favorite";

  const MobileNavbarContent = () => {
    return (
      <div>
        <div className="pt-4 pb-4">
          <SearchInputComponent />
        </div>
        <div className="pt-4 pb-4">
          <LoginAndFavoriteComponent/>
        </div>
        <div className="pt-4 pb-4">
          <LinksComponent />
        </div>
      </div>
    );
  };

  export default MobileNavbarContent;