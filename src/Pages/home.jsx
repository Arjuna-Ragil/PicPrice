import React from 'react'
import MainLayout from '../layout/mainLayout'
import Welcome from '../Component/home/welcome'
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
        h-200 sm:h-lvh 
        items-center
        min-w-screen 
        `}>

          <div>
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

            <div>
              <Tips />
            </div>

            <div>
              <MiniWishlist />
            </div>
          </div>
      </div>
    </>
  )
}

export default Home