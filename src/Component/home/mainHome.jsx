import React from 'react'
import { Link } from 'react-router-dom'
import picPrice from '../../assets/sidebar/picPrice(2).png';

const Main = () => {
  return (
    <>
        <main 
        className={`
          flex 
          flex-row
          sm:gap-10
          justify-evenly
          bg-history-container
          dark:bg-container-dark
          border-2 
          rounded-xl 
          w-full
          h-full
          py-10
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
            xl:gap-5
          `}>
            <div>
              <h2 
                className={`
                  font-poppins 
                  2xl:text-4xl
                  xl:text-3xl
                  sm:text-lg
                  text-sm
                  font-semibold
                  max-sm:text-center
                `}>Snap a Photo. Find the Best Price.</h2>

              <p
              className={`
                2xl:text-xl
                xl:text-lg
                sm:text-sm
                text-xs
                font-poppins
                max-sm:p-2
                max-sm:text-center
              `}>Upload a picture to discover the lowest price online.</p>
            </div>

            <Link 
            className={`
              bg-shop-btn
              font-poppins 
              px-3 sm:px-4 lg:px-5 2xl:px-10
              py-0.5 sm:py-2 2xl:py-4
              mt-4 sm:mt-3
              rounded-sm sm:rounded-xl
              2xl:text-2xl
              xl:text-xl
              sm:text-sm
              text-xs
              hover:scale-105
              hover:translate-y-[-2px] 
              transition-transform 
              duration-300 
            `}
            to={"/search"}
            >Find my Price</Link>
          </div>

          {/* untuk icon camera */}
          <div className='max-sm:hidden'>
            <img
            src={picPrice}
            alt='picPrice'
            className={`
              hidden sm:block
              2xl:h-70
              xl:h-60
              lg:h-50
              md:h-35
              sm:h-25
              w-auto
              ml-15 lg:ml-25 xl:ml-30 2xl:ml-60
            `}/>
          </div>
        </main>
    </>
  )
}

export default Main
;