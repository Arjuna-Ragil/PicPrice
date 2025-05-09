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
        ml-7
        h-lvh
        items-center
        `}>

          <div 
          className={`
            w-270
          `}>
            <Main />
          </div>
        
          <div
          className={`
            flex
            justify-between
            items-center
            w-270
            mt-10
          `}>

            <div className={``}>
              <Tips />
            </div>

            <div className={``}>
              <MiniWishlist />
            </div>


          </div>
      </div>
    </>
  )
}

export default Home