import React from 'react'
import MainLayout from '../layout/mainLayout'
import ImageBox from '../Component/search/imageBox'
import Result from '../Component/search/result'
import Control from '../Component/search/control'
import { useState } from 'react'

const Search = () => {

  const [imageFile, setImageFile] = useState(null);
  const [changePreview, setChangePreview] = useState(null)
  const [retry, setRetry] = useState(0);
  const [firebaseImage, setFirebaseImage] = useState(null)
  const [firebaseSearch, setFirebaseSearch] = useState("")

  return (
    <>
        <MainLayout/>
        <div className={`
            lg:grid
            grid-cols-7
            grid-rows-11
            ml-10
            gap-7
            lg:px-35
            px-3
            py-5
            flex
            flex-col
        `}>
            <main className={`
              col-start-1
              col-end-8
              row-start-1
              row-end-7
            `}>
              <ImageBox imageResult={setImageFile} changeImagePreview={changePreview} setFirebaseImage={setFirebaseImage} setFirebaseSearch={setFirebaseSearch}/>
            </main>
            <section className={`
              col-start-6
              col-end-8
              row-start-7
              row-end-12
            `}>
              <Control setRetryTrigger={setRetry} imageChange={setImageFile} previewChange={setChangePreview} retryCheck={imageFile}/>
            </section>
            <section className={`
              col-start-1
              col-end-6
              row-start-7
              row-end-12
            `}>
              <Result processImage={imageFile} retry={retry} firebaseImage={firebaseImage} firebaseSearch={firebaseSearch}/>
            </section>
        </div>
    </>
  )
}

export default Search