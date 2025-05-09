import React, { useState } from 'react'
import MainLayout from '../layout/mainLayout'
import Title from '../Component/common/title'
import WishlistList from '../Component/wishlist/wishlistList'
import ControlBarWishlist from '../Component/wishlist/controlBarWishlist'

const Wishlist = () => {
  const [search, setSearch] = useState("")

  return (
    <>
        <MainLayout/>
        <div className={`
          flex
          flex-col
          py-5
          px-35
          gap-5
        `}>
          <header>
            <Title title={"Wishlist"}/>
          </header>

          <nav>
            <ControlBarWishlist search={search} setSearch={setSearch}/>
          </nav>

          <main>
            <WishlistList searchResult={search}/>
          </main>
        </div>
    </>
  )
}

export default Wishlist