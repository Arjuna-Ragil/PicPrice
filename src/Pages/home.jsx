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
        grid
        size-full
        grid-cols-2
        grid-rows-6
        gap-y-7
        gap-x-20
        px-35
        items-center
        `}>
          <div className={`col-span-2 row-start-1 row-end-2`}>
            <Welcome /> 
          </div>
          <div className={`col-span-2 row-start-2 row-end-4 h-full`}>
            <Main />
          </div>
          <div className={`col-start-2 col-end-3 row-start-4 row-end-7 h-full`}>
            <MiniWishlist />
          </div>

          <div className={`col-start-1 col-end-2 row-start-4 row-end-7 h-full `}>
            <Tips />
          </div>
      </div>
    </>
  )
}

export default Home