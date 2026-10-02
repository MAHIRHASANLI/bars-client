import DesktopNavbar from '@/sections/(user)/header/desktop_nav'
import MobileNavbar from '@/sections/(user)/header/mobile_nav'
import React from 'react'

const HeaderContainer = () => {
  return (
   <header>
     <nav>
        <div className="max-[1000px]:hidden">
            <DesktopNavbar/>
        </div>
        <div className="min-[1000px]:hidden">
            <MobileNavbar/>
        </div>
    </nav>
    </header>
  )
}

export default HeaderContainer