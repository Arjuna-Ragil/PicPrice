import React from 'react'
import wishImage1 from '../../assets/home/wishImage1.svg'
import wishImage2 from '../../assets/home/wishImage2.svg'
import wishImage3 from '../../assets/home/wishImage3.svg'
import MiniWishlistList from './miniWishlistList'

const MiniWishlist = () => {
  return (
    <>
        <section className={`
        bg-[#F9F9F9]
          border-2 
          rounded-xl
          w-130
          h-57
        `}>
            <div 
            className={`
                flex 
                items-center 
                gap-3
            `}>

                <h3 
                className={`
                    font-VictorMono 
                    text-3xl 
                    font-semibold
                `}>
                    Your Wishlist
                </h3>

                <span className="text-sm font-poppins">
                    (0 Items)
                </span>
            </div>


            <div className={`
                flex flex-col items-center justify-center gap-4 text-center
            `}> 
                <MiniWishlistList />
            </div>


        </section>
    </>
  )
}

export default MiniWishlist