import React from 'react'
import ControlButtonLayout from './controlButton'

const Control = ({setRetryTrigger, imageChange, previewChange}) => {

  const handleRetry = () => {
    setRetryTrigger(prev => prev + 1);
  }

  async function fileChange(event) {
    const fileUpload = event.target.files[0]

    if (!fileUpload) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result.split(',')[1];
      
      const file = {
        type: fileUpload.type,
        file: base64Data,
        imageURL: URL.createObjectURL(fileUpload)
      }
      imageChange(file)
      previewChange(file.imageURL)

    }
    reader.readAsDataURL(fileUpload);
  }

  return (
    <>
        <div className={`
            flex
            flex-col
            h-full
            items-center
            justify-evenly
            bg-control-bg
            shadow-[5px_10px_5px_rgba(0,0,0,0.3)]
            p-7
        `}>
            <h3 className={`
                font-VictorMono
                font-semibold
                text-4xl
            `}>
              Controls
            </h3>

            <button onClick={handleRetry}>
              <ControlButtonLayout use={"Retry Search"} bg={"accent"}/>
            </button>
            
            <input
              type='file'
              accept='.jpg, .jpeg, .png'
              onChange={fileChange}
              className={`
                w-full
                p-5
                rounded-2xl
                bg-secondary
                border-2
                border-black
                font-poppins
                hover:scale-105
                hover:border-white
                transition-all
                duration-300  
              `}
            />

            <ControlButtonLayout use={"Search History"} bg={"secondary"}/>
        </div>
    </>
  )
}

export default Control