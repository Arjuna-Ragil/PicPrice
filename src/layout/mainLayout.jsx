import React, { useState } from 'react'
import Sidebar from '../Component/main/sidebar'
import Background from '../Component/main/background'
import BackgroundBlurOverlay from '../Component/main/backgroundBlurOverlay'
import TopBar from '../Component/main/topBar'
import SidebarSmall from '../Component/main/sidebarSmall'

const MainLayout = () => {
  const [blur, setBlur] = useState(false)
  const [isOpenSmall, setIsOpenSmall] = useState(false);

  return (
    <>
        <Background />
        <BackgroundBlurOverlay blur={blur}/>
        <div className='max-md:hidden'>
          <Sidebar setBlur={setBlur}/>
        </div>

        <div className='md:hidden'> 
          <TopBar setIsOpen={setIsOpenSmall} setBlur={setBlur}/>
          <SidebarSmall isOpen={isOpenSmall}/>
        </div>
    </>
  )
}

export default MainLayout