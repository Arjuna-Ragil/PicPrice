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
      flex
      flex-col
      gap-5
      bg-history-container
      dark:bg-container-dark
      border-2 
      rounded-xl
      w-full
      h-full
      p-10
    `}>

      <h3 
      className={`
        font-poppins 
        2xl:text-5xl
        xl:text-3xl
        text-xl
        font-medium
        text-center
      `}>Tips to use this website </h3>

      <ol 
      className={`
        list-decimal 
        list-inside 
        2xl:text-2xl
        xl:text-xl
        text-sm
        py-15
        text-center md:text-left 
        font-poppins 
        2xl:space-y-4
        xl:space-y-5
        lg:space-y-8
        space-y-7.5

      `}>
        {tipsList.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ol>
    </section>
  )
}

export default Tips