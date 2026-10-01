import NavbarLinks from '@/sections/(user)/header/navbar_links'
import NavbarTopBar from '@/sections/(user)/header/navbar_top_bar'
import React from 'react'

const HeaderContainer = () => {
  return (
    <nav>
        <NavbarTopBar/>
        <NavbarLinks/>
    </nav>
  )
}

export default HeaderContainer