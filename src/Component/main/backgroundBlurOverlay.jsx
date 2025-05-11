import React from 'react'

const BackgroundBlurOverlay = ({blur}) => {
  return (
    <div className={`
        fixed
        h-full
        w-full
        z-10
        bg-black/50
        ${blur ? "" : "hidden"}
    `}>
    </div>
  )
}

export default BackgroundBlurOverlay