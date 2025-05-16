import React from 'react'
import MiniWishlistList from './miniWishlistList'

const MiniWishlist = () => {
  return (
    <>
        <section 
        className={`
            flex
            flex-col
            bg-history-container
            dark:bg-container-dark
            border-2 
            rounded-xl
            w-full
            h-full
            items-center
            justify-center
            sm:p-10
            p-3
            gap-10
        `}>
            <h3 
            className={`
                font-poppins
                text-xl lg:text-xl xl:text-2xl 2xl:text-4xl
                font-medium
            `}>Your Wishlist</h3>

            <div className={`
                w-full
                justify-center
                items-center
            `}> 
                <MiniWishlistList />
            </div>
        </section>
    </>
  )
}

export default MiniWishlist