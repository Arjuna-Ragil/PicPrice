import React from 'react'

const ControlButtonLayout = ({use, bg}) => {

  return (
    <>
        <div className={`
            w-full
            p-5
            rounded-2xl
            bg-${bg}
            border-2
            border-black
            font-poppins
            hover:scale-105
            hover:border-white
            transition-all
            duration-300
            `}
        >
            {use}
        </div>
    </>
  )
}

export default ControlButtonLayout