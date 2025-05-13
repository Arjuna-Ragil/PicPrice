import React, { useState } from 'react'
import MainLayout from '../layout/mainLayout'
import WishlistList from '../Component/wishlist/wishlistList'
import ControlBarWishlist from '../Component/wishlist/controlBarWishlist'

const Wishlist = () => {
  const [search, setSearch] = useState("")
  const [priceSort, setPriceSort] = useState("")

  return (
    <>
        <MainLayout/>
        <div className={`
          flex
          flex-col
          xl:px-35
          lg:pr-10
          md:pl-20
          py-5
          px-3
          gap-5
        `}>
          <nav className='max-md:mt-20'>
            <ControlBarWishlist search={search} setSearch={setSearch} priceSort={priceSort} setPriceSort={setPriceSort}/>
          </nav>

          <main>
            <WishlistList searchResult={search} priceSort={priceSort}/>
          </main>
        </div>
    </>
  )
}

export default Wishlist