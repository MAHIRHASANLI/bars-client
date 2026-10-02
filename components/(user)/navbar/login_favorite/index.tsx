import React from 'react'
import BtnIconFolloverComponent from '../btn_icon_follover'
import BtnIconUserComponent from '../btn_icon_user'

const LoginAndFavoriteComponent = () => {
  return (
  < div className="flex items-center justify-around ">
        <div className="flex items-center gap-2">
        <BtnIconFolloverComponent/> <p>Seçilmişlər</p><span className="mx-2 text-(--secondary-color)">(0)</span>
    </div>

    <div className="relative h-6 w-px after:absolute after:content-[''] after:bg-(--secondary-color) after:h-6 after:w-px "></div>
{/* relative h-4 w-px after:absolute after:content-[''] after:h-4 after:w-px after:bg-red-500 */}
    <div className="flex items-center gap-2">
        <BtnIconUserComponent/> <p>Hesaba giriş</p>  
    </div>
    </div>
  )
}

export default LoginAndFavoriteComponent