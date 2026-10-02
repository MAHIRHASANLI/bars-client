import { Search } from 'lucide-react'
import React from 'react'

const SearchInputComponent = () => {
  return (
    <div className="relative max-w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--secondary-color) size-5" />
      <input className="max-[1000px]:w-full bg-(--main-color) text-gray-500 placeholder:text-(--secondary-color) focus:outline-none focus:bg-white focus:ring-1 focus:ring-(--logo-color) rounded-4xl px-4 py-1.5 pl-9" type="text" placeholder="Number One yapışdırıcısı" />
    </div>
  )
}

export default SearchInputComponent