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
    <section className={`
        bg-[#F9F9F9]
          border-2 
          rounded-xl
          w-130
          h-57
          py-2
          px-6
    `}>

      <h3 className={`
        font-poppins 
        text-2xl
        font-medium
        text-center
      `}>
        Tips for use this website 
      </h3>

      <ol 
      className={`
        list-decimal 
        mt-4
        list-inside 
        text-left 
        space-y-2 
        font-poppins 
      `}>
        {tipsList.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ol>
    </section>
  )
}

export default Tips