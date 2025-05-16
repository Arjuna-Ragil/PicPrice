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
        grid
        md:grid-cols-2
        md:grid-rows-3
        grid-cols-1
        grid-rows-5
        md:pl-25
        lg:pr-15
        p-5
        max-md:pt-20
        max-sm:pt-10
        h-full
        w-full
        2xl:gap-10
        gap-10
        gap-x-5
        items-center
        justify-between
        dark:text-white
      `}>

        <div
          className={`
            md:col-span-2
            w-full
            justify-center  
        `}>
          <Main />
        </div>

        <div
        className={`
          h-full
          w-full
          row-start-2
          row-end-4
          lg:p-10
          flex sm:flex-none
          justify-center 
        `}>
          <Tips />
        </div>

        <div
        className={`
          h-full
          w-full
          row-start-2
          row-end-4
          max-md:row-start-4
          max-md:row-end-6
          lg:p-10
          flex sm:flex-none
          justify-center 
        `}>
          <MiniWishlist />
        </div>
      </div>
    </>
  )
}

export default Home