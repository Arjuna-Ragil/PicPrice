import React from 'react'
import MainLayout from '../layout/mainLayout'
import Main from '../Component/home/mainHome'
import MiniWishlist from '../Component/home/miniWishlist'
import Tips from '../Component/home/tips'

const Home = () => {

  return (
    <>
      <MainLayout/>
      <div className={`
        flex
        flex-col
        sm:pl-12 xl:pl-10
        min-h-screen 
        items-center
        min-w-screen 
        `}>

          <div
        className={`
          w-screen sm:w-160 lg:w-220 xl:w-270 2xl:w-500
          px-5 sm:px-0 
          flex
          justify-center  
        `}>
            <Main />
          </div>
        
          <div
          className={`
            flex
            flex-col sm:flex-row
            justify-between
            items-center
            sm:w-160 lg:w-220 xl:w-270 2xl:w-500
            mt-6 2xl:mt-20
            gap-7 sm:gap-0 
          `}>

            <div
            className={`
              w-screen sm:w-75 lg:w-110 xl:w-130 2xl:w-240
              px-5 sm:px-0 
              flex sm:flex-none
              justify-center 
            `}>
              <Tips />
            </div>

            <div
            className={`
              w-screen sm:w-75 lg:w-105 xl:w-130 2xl:w-240
              px-5 sm:px-0
              flex sm:flex-none
              justify-center 
            `}>
              <MiniWishlist />
            </div>
          </div>
      </div>
    </>
  )
}

export default Home