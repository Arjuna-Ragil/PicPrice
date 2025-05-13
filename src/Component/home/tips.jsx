import React from 'react'

const Tips = () => {
  const tipsList = [
    "Take photos with good lighting.",
    "Ensure the entire product is clearly visible.",
    "Use a clean background.",
    "Avoid excessive effects or filters.",
    "Upload images from the good angles"
  ]

  return (
    <section 
    className={`
      bg-history-container
      border-2 
      rounded-xl
      w-90 sm:w-75 lg:w-110 xl:w-130 2xl:w-240
      h-32 sm:h-45 lg:h-55 xl:h-63 2xl:h-100
      py-2 sm:py-4 xl:py-3 2xl:py-8
      px-1 sm:px-4 lg:px-8 2xl:px-35
    `}>

      <h3 
      className={`
        font-poppins 
        text-sm lg:text-xl xl:text-2xl 2xl:text-4xl
        font-medium
        text-center
      `}>Tips for use this website </h3>

      <ol 
      className={`
        list-decimal 
        mt-1 sm:mt-2.5 lg:mt-4 2xl:mt-8
        list-inside 
        text-[11px] lg:text-sm 2xl:text-3xl
        text-center sm:text-left 
        sm:space-y-1 lg:space-y-2 2xl:space-y-5
        font-poppins 
        sm:pl-0
      `}>
        {tipsList.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ol>
    </section>
  )
}

export default Tips