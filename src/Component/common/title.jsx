import React from 'react'

const Title = ({title}) => {
  return (
    <>
        <div className={`
            bg-primary
            w-max
            p-3
            px-20
            rounded-lg
        `}>
            <h1 className={`
                font-VictorMono 
                font-semibold 
                text-3xl 
                bg-gradient-to-br from-white to-searchpagetitle-text bg-clip-text
            `}> 
                {title}
            </h1>
        </div>

        
    </>
  )
}

export default Title