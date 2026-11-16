import LogoComponent from '@/components/(main)/navbar/logo'
import SearchInputComponent from '@/components/(main)/navbar/search_input'
import TopActions from '@/components/(main)/navbar/top_actions'
import React from 'react'



const   NavbarTopBar = () => {
  return (
  <div className="flex items-center justify-between box-border w-full h-22 max-[1000px]:none max-[1000px]:hidden">
      <LogoComponent />
      <SearchInputComponent placeholder="Number One yapışdırıcısı" />
      <TopActions />
  </div>
  )
}

export default NavbarTopBar