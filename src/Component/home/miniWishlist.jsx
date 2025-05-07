import React from 'react'
import wishImage1 from '../../assets/home/wishImage1.svg'
import wishImage2 from '../../assets/home/wishImage2.svg'
import wishImage3 from '../../assets/home/wishImage3.svg'
import MiniWishlistList from './miniWishlistList'

const MiniWishlist = () => {
  return (
    <>
        <section className={`
             flex 
             flex-col 
             h-full 
             w-full 
             items-center 
             justify-center 
             p-6 
             gap-6 
             bg-gradient-to-br from-neutral to-gray-800 
             rounded-2xl 
             shadow-2xl 
             border 
             border-gray-200 
             transition-transform duration-300
        `}>
            <div className={`
                flex items-center gap-3"
            `}>
                <h3 className={`font-VictorMono text-3xl font-semibold text-white`}>
                    Your Wishlist
                </h3>

                <span className="text-sm text-gray-300 font-poppins">
                    (0 Items)
                </span>
            </div>


            <div className={`
                flex flex-col items-center justify-center gap-4 text-center
            `}>
                <div className="flex gap-4">
                    <img src={wishImage1} alt="wishlist placeholder 1" className="w-16 h-16 opacity-60 hover:scale-110 transition-transform duration-300" />
                    <img src={wishImage2} alt="wishlist placeholder 2" className="w-16 h-16 opacity-60 hover:scale-110 transition-transform duration-300" />
                    <img src={wishImage3} alt="wishlist placeholder 3" className="w-16 h-16 opacity-60 hover:scale-110 transition-transform duration-300" />
                </div>
            </div>

            <MiniWishlistList />

        </section>
    </>
  )
}

export default MiniWishlist