import React from 'react'
import { ChevronDown } from "lucide-react";

const Select = () => {
    const helpOptions = [
    "Məhsul haqqında məlumat",
    "Texniki xidmət",
    "Qiymət haqqında məlumat",
    "Satış",
    "Digər",
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
        <div className="relative flex flex-col gap-1">
        <label htmlFor="help-type" className="text-sm font-normal text-gray-600 max-[1000px]:text-xs">
          sizə necə kömək edə bilərik?
        </label>

        <button
          id="help-type"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-sm border border-(--line-color) p-3 text-left focus:outline-none focus:ring-1 focus:ring-(--logo-color)  max-[1000px]:py-2"
        >
          <span
            className={
              selected ? "text-gray-900 text-sm max-[1000px]:text-xs" : "text-gray-400 text-sm  max-[1000px]:text-xs"
            }
          >
            {selected || "Müraciət növünü seçin"}
          </span>

          <span
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <ChevronDown className="size-4" />
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full z-10 mt-1 w-full border border-(--line-color) bg-white shadow-md">
            {helpOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className="block w-full px-6 py-3  max-[1000px]:py-2 text-left hover:bg-gray-100  font-normal max-[1000px]:text-xs"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
  )
}

export default Select