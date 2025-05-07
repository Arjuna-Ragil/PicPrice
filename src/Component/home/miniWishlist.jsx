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
            items-center
            justify-start
            p-5
            gap-5
            bg-neutral
            shadow-[5px_10px_5px_rgba(0,0,0,0.3)]
        `}>
            <div className={`
                flex
                flex-row
                items-center
                justify-center
                gap-5
            `}>
                <img className={``} src={wishImage1} alt='star 1'/>
                <h3 className={` font-VictorMono text-3xl font-semibold text-welcome-text`}>
                    Your Wishlist
                </h3>
                <img className={``} src={wishImage2} alt='star 2'/>
            </div>

            <MiniWishlistList />
        </section>
    </>
  )
}

export default MiniWishlist