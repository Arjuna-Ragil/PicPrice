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
          bg-[#F9F9F9]
          border-2 
          rounded-xl 
          h-60
          mt-4
        `}>

          {/* keterangan */}
          <div
          className={`
            flex
            flex-col
            items-start
            mb-2
          `}>

            <h2 
              className={`
                font-poppins 
                text-[33px]
                font-medium
              `}>
                Snap a Photo. Find the Best Price.
            </h2>

            <p
            className={`
              font-poppins
              font-normal
            `}>
              Upload a picture to discover the lowest price online.
            </p>

            <Link className={`
            bg-[#ACCBE4] 
            font-poppins 
            px-5 
            py-2
            mt-3
            rounded-xl
            hover:scale-105
            hover:translate-y-[-2px] 
            transition-transform 
            duration-300 
            `}
            to={"/search"}
            >
              Find my Price
            </Link>
          </div>


          {/* untuk icon camera */}
          <div>
            <img
            src={picPrice}
            alt='picPrice'
            className={`
              w-70
              h-auto
              ml-30
            `}/>
          </div>

            
        </main>
    </>
  )
}

export default Main
;