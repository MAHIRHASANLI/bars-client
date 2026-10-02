import LogoComponent from '@/components/(user)/navbar/logo'
import SearchInputComponent from '@/components/(user)/navbar/search_input'
import TopActions from '@/components/(user)/navbar/top_actions'
import React from 'react'



const   NavbarTopBar = () => {
  return (
  <div className="flex items-center justify-between box-border w-full h-20 max-[1000px]:none max-[1000px]:hidden">
      <LogoComponent />
      <SearchInputComponent  />
      <TopActions />
  </div>
  )
}

export default NavbarTopBar