import React from 'react'
import { Link } from 'react-router-dom'

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
          overflow-hidden
          h-60
        `}>

          {/* keterangan */}
          <div>
          <h2 
            className={`
              flex
              flex-col
              items-center 
              justify-center 
              font-poppins 
              text-[40px]
              font-medium
            `}>
                Take A Picture, Get The Best Price
            </h2>

            <Link className={`
            col-start-3 col-end-4 row-start-2 row-end-4 z-10 bg-accent text-white font-poppins font-semibold px-6 py-4 rounded-full shadow-lg hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300 border-2 border-transparent hover:border-white
            `}
            to={"/search"}
            >
                Get the price NOW!
            </Link>
          </div>

          {/* untuk icon camera */}
          <div>

          </div>

            
        </main>
    </>
  )
}

export default Main
;