import { Search } from 'lucide-react'
import React from 'react'

const SearchInputComponent = () => {
  return (
    <div className="relative max-w-xs">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
      <input className="bg-gray-100 text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-4xl px-4 py-2 pl-9" type="text" placeholder="Search..." />
    </div>
  )
}

export default SearchInputComponent