import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const ImageBox = ({imageResult, changeImagePreview, setFirebaseImage, setFirebaseSearch}) => {

  const [content, setContent] = useState(false);
  const [preview, setPreview] = useState(null);

  const location = useLocation()
  const productFromHistory = location.state?.product

  useEffect(() => {
    if (productFromHistory) {
      setContent(true)
      setPreview(productFromHistory.photoURL)
      setFirebaseSearch(productFromHistory.product_name)
    }
  }, [productFromHistory])

  useEffect(() => {
    if (changeImagePreview) {
      setPreview(changeImagePreview);
      setContent(true)
    }
  }, [changeImagePreview])

  async function fileReceive(event) {
    const fileUpload = event.target.files[0]

    if (!fileUpload) return;

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
            rounded-3xl
            bg-neutral
            border-secondary
            border-2
            justify-center
            items-center
            p-5
        `}>
            {content ? 
              <img className='max-h-full max-w-full object-contain' src={preview} alt='Uploaded Image'/>
              : 
              <input
                type='file'
                accept='.jpg, .jpeg, .png'
                onChange={fileReceive}
              />
            }
        </div>
    </>
  )
}

export default ImageBox