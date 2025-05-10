import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import upload from '../../assets/search/upload.svg'

const ImageBox = ({imageResult, changeImagePreview, setFirebaseImage, setFirebaseSearch}) => {

  const [content, setContent] = useState(false);
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false)

  const location = useLocation()
  const productFromHistory = location.state?.product

  useEffect(() => {
    if (productFromHistory) {
      setContent(true)
      setPreview(productFromHistory.photoURL)
      setFirebaseSearch(productFromHistory)
    }
  }, [productFromHistory])

  useEffect(() => {
    if (changeImagePreview) {
      setPreview(changeImagePreview);
      setContent(true)
    }
  }, [changeImagePreview])

  function handleDragOver(event) {
    event.preventDefault()
    setDragActive(true)
  }

  function handleDragLeave() {
    setDragActive(false)
  }

  function handleDrop(event) {
    event.preventDefault()
    setDragActive(false)
    const file = event.dataTransfer.files[0]
    if (file) {
      handleFile(file)
    }
  }

  function fileReceive(event) {
    const file = event.target.files[0]
    if (file) {
      handleFile(file)
    }
    }

  function handleFile(fileUpload) {
    const originalFile = {
      type: fileUpload.type,
      file: fileUpload
    }

    setFirebaseImage(originalFile)

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result.split(',')[1];
      
      const file = {
        type: fileUpload.type,
        file: base64Data,
        imageURL: URL.createObjectURL(fileUpload)
      }
      imageResult(file)
      setPreview(file.imageURL)
      setContent(true)
    }
    reader.readAsDataURL(fileUpload);
  }


  return (

    <>
        <div className={`
            flex
            flex-col
            w-full
            h-[500px]
            max-sm:h-90
            rounded-2xl
            ${dragActive ? 'bg-gray-400' : 'bg-container dark:bg-container-dark'}
            border-black
            border-2
            justify-center
            items-center
            p-5
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        >
            {content ? 
              <img className='max-h-full max-w-full object-contain' src={preview} alt='Uploaded Image'/>
              : 
              <div className='flex flex-col gap-7 items-center'>
                <div className='flex flex-col'>
                  <img src={upload} alt='upload' className={`
                      size-20 self-center 
                    `}/>
                  <h3 className='text-2xl max-sm:text-sm font-medium font-poppins max-lg:hidden dark:text-white'>Drag & drop an image or</h3>
                  <h3 className='text-2xl max-sm:text-sm font-medium font-poppins lg:hidden dark:text-white'>Take a picture or</h3>
                </div>
                <label className={`bg-input-btn p-5 lg:px-10 rounded-4xl text-2xl max-sm:text-sm font-medium font-poppins self-center text-white`}>
                  Choose an image
                  <input
                    type='file'
                    accept='image/*'
                    onChange={fileReceive}
                    className='hidden'
                  />
                </label>
              </div>
            }
        </div>
    </>
  )
}

export default ImageBox