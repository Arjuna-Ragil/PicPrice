import React from 'react'

const Welcome = () => {
  return (
    <div>
        <h1 className={`
            flex
            w-full
            items-center
            justify-center
            font-VictorMono
            text-3xl
            font-semibold
            text-welcome-text
            `}>Welcome to PicPrice, Guest!</h1>
    </div>
  )
}

export default Welcome