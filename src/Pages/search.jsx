import React from 'react'
import MainLayout from '../layout/mainLayout'
import Title from '../Component/common/title'
import ImageBox from '../Component/search/imageBox'
import Result from '../Component/search/result'
import Control from '../Component/search/control'
import { useState } from 'react'

const Search = () => {

  const [imageFile, setImageFile] = useState(null);
  const [changePreview, setChangePreview] = useState(null)
  const [retry, setRetry] = useState(0);
  const [firebaseImage, setFirebaseImage] = useState(null)

  return (
    <>
        <MainLayout/>
        <div className={`
            grid
            grid-cols-5
            grid-rows-11
            gap-7
            px-35
            py-5
        `}>
            <header className={`
              col-start-1
              col-end-2
              row-start-1
              row-end-2
            `}>
              <Title title={"Price Search"}/>
            </header>
            <main className={`
              col-start-2
              col-end-5
              row-start-2
              row-end-7
            `}>
              <ImageBox imageResult={setImageFile} changeImagePreview={changePreview} setFirebaseImage={setFirebaseImage}/>
            </main>
            <section className={`
              col-start-1
              col-end-4
              row-start-7
              row-end-12
            `}>
              <Result processImage={imageFile} retry={retry} firebaseImage={firebaseImage}/>
            </section>
            <section className={`
              col-start-4
              col-end-6
              row-start-7
              row-end-12
            `}>
              <Control setRetryTrigger={setRetry} imageChange={setImageFile} previewChange={setChangePreview}/>
            </section>
        </div>
    </>
  )
}

export default Search