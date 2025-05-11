import React, { useState } from 'react'
import Sidebar from '../Component/main/sidebar'
import Background from '../Component/main/background'
import BackgroundBlurOverlay from '../Component/main/backgroundBlurOverlay'

const MainLayout = () => {
  const [blur, setBlur] = useState(false)

  return (
    <>
        <Background />
        <BackgroundBlurOverlay blur={blur}/>
        <Sidebar setBlur={setBlur}/>
    </>
  )
}

export default MainLayout