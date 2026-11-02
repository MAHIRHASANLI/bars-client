import { FiSearch } from "react-icons/fi";

const SearchInputComponent = () => {
  return (
    <div className="relative max-w-full">
      <FiSearch className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-(--secondary-color)" />

      <input
        className="max-[1000px]:w-full rounded-4xl bg-(--main-color) px-4 py-1.5 pl-9 text-gray-500 placeholder:text-sm placeholder:text-(--secondary-color) focus:bg-white focus:outline-none focus:ring-1 focus:ring-(--logo-color)"
        type="text"
        placeholder="Number One yapışdırıcısı"
      />
    </div>
  );
};

export default SearchInputComponent;