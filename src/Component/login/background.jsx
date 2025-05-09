import React from 'react'

const BackgroundLogin = ({direction}) => {
  return (
    <div className={`
        fixed
        h-full
        w-full
        -z-10
        bg-gradient-to-${direction} from-[#ACCBE4] to-[#E4F3FF]
    `}>
    
    </div>
  )
}

export default BackgroundLogin