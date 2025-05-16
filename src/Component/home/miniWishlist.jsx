import React from 'react'
import wishImage1 from '../../assets/home/wishImage1.svg'
import wishImage2 from '../../assets/home/wishImage2.svg'
import wishImage3 from '../../assets/home/wishImage3.svg'
import MiniWishlistList from './miniWishlistList'

const MiniWishlist = () => {
  return (
    <>
        <section 
        className={`
            bg-history-container
            border-2 
            rounded-xl
            w-90 sm:w-75 lg:w-105 xl:w-130 2xl:w-240
            h-40 sm:h-45 lg:h-55 xl:h-63 2xl:h-100
            
        `}>
            <div 
            className={`
                flex 
                items-center 
                justify-center
                gap-3
                mt-3 sm:mt-4 2xl:mt-7
            `}>

                <h3 
                className={`
                    font-poppins
                    text-sm lg:text-xl xl:text-2xl 2xl:text-4xl
                    font-medium
                `}>Your Wishlist</h3>

                <span 
                className={`
                    text-[8px] sm:text-[10px] lg:text-sm 2xl:text-xl 
                    font-poppins
                `}>(0 Items)</span>
            </div>

            <div className={`
                flex 
                flex-col 
                items-center 
                justify-center 
                gap-4 
                text-center
            `}> 
                <MiniWishlistList />
            </div>
        </section>
    </>
  )
}

export default MiniWishlist