import React from 'react'
import { Link } from 'react-router-dom'
import picPrice from '../../assets/sidebar/picPrice(2).png';

const Main = () => {
  return (
    <>
        <main 
        className={`
          flex 
          items-center
          justify-center
          bg-history-container
          border-2 
          rounded-xl 
          w-90 sm:w-160 lg:w-220 xl:w-270 2xl:w-500
          h-37 sm:h-45 lg:h-60 2xl:h-140
          mt-20 sm:mt-12 lg:mt-10 xl:mt-4 2xl:mt-30
        `}>

          {/* introduction */}
          <div
          className={`
            flex
            flex-col
            justify-center
            items-center sm:items-start
            lg:mb-2
            2xl:space-y-3
          `}>

            <h2 
              className={`
                font-poppins 
                text-lg sm:text-xl lg:text-2xl xl:text-[33px] 2xl:text-6xl
                font-medium
              `}>Snap a Photo. Find the Best Price.</h2>

            <p
            className={`
              text-[11px] lg:text-sm 2xl:text-3xl
              font-poppins
            `}>Upload a picture to discover the lowest price online.</p>

            <Link 
            className={`
              bg-shop-btn
              font-poppins 
              px-3 sm:px-4 lg:px-5 2xl:px-10
              py-0.5 sm:py-2 2xl:py-4
              mt-4 sm:mt-3
              rounded-sm sm:rounded-xl
              text-sm 2xl:text-2xl
              hover:scale-105
              hover:translate-y-[-2px] 
              transition-transform 
              duration-300 
            `}
            to={"/search"}
            >Find my Price</Link>
          </div>

          {/* untuk icon camera */}
          <div>
            <img
            src={picPrice}
            alt='picPrice'
            className={`
              hidden sm:block
              w-40 lg:w-60 xl:w-70 2xl:w-150
              h-auto
              ml-15 lg:ml-25 xl:ml-30 2xl:ml-60
            `}/>
          </div>
        </main>
    </>
  )
}

export default Main
;