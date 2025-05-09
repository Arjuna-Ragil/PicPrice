import React from 'react'
import wishImage1 from '../../assets/home/wishImage1.svg'
import wishImage2 from '../../assets/home/wishImage2.svg'
import wishImage3 from '../../assets/home/wishImage3.svg'

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
                <p className={`font-poppins text-lg`}>
                    You don't have any whished items yet :C
                </p>

                <div className="flex gap-4">
                    <img src={wishImage1} alt="wishlist placeholder 1" className="w-16 h-16 opacity-60 hover:scale-110 transition-transform duration-300" />
                    <img src={wishImage2} alt="wishlist placeholder 2" className="w-16 h-16 opacity-60 hover:scale-110 transition-transform duration-300" />
                    <img src={wishImage3} alt="wishlist placeholder 3" className="w-16 h-16 opacity-60 hover:scale-110 transition-transform duration-300" />
                </div>
            </div>
        </section>
    </>
  )
}

export default MiniWishlist