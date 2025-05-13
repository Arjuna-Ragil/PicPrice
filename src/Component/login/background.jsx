import React from 'react'

const BackgroundLogin = ({direction}) => {
  return (
    <div className={`
        fixed
        h-full
        w-full
        -z-10
        dark:bg-background-dark
        ${direction} from-linear to-to-linear 
    `}>
    
    </div>
  )
}

export default BackgroundLogin