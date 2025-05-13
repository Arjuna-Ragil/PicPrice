import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/authContext';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import search from '../../assets/history/searchIconSmall.svg'
import buy from '../../assets/history/shopping-cart.svg'
import trash from '../../assets/history/trash-2.svg'

const WishlistCard = ({item, form, setRefresh}) => {
if (!item) return null

const { user } = useAuth()
const navigate = useNavigate()

const [toShop, setToShop] = useState(false)

function handleSearhAgain() {
  navigate('/search', { state: { product: item}})
}

async function removeWishlistHandler(user, data) {
    if (!user) {
        alert("not logged in");
        return
    }
    try {
        const itemRef = doc(db, "users", user.uid, "wishlist", data)
        await deleteDoc(itemRef)
        setRefresh(true)
    } catch (error) {
        alert("failed to remove wishlist: ",error)
    }
  }

if (form === "mini") {
  return (
    <div className="flex flex-row items-center justify-between px-3 text-sm py-2 border-b">
      <p>{item.product_name}</p>
      <p>${item.average_price}</p>
    </div>
  )
}

if(toShop) {
  window.open(item.link_one)
  setToShop(false)
}

  return (
    <div className={`
        grid
        md:grid-cols-3
        md:grid-rows-1
        grid-cols-2
        grid-rows-2
        items-center
        mr-4
        gap-3
        pb-3
        border-b-2
        border-gray-500
    `}>
        <p className='truncate font-poppins font-medium lg:text-xl text-sm dark:text-white'>{item.product_name}</p>
        <div className='grid md:grid-cols-3 max-md:grid-rows-3 truncate md:justify-items-center justify-items-end font-poppins font-medium lg:text-xl md:text-sm text-xs'>
          <p className='text-average-price'>${item.average_price}</p>
          <p className='text-lowest-price'>${item.lowest_price}</p>
          <p className='text-highest-price'>${item.highest_price}</p>
        </div>
        <div className='flex flex-row gap-3 md:justify-self-end'>
          <button onClick={handleSearhAgain} className='bg-search-btn px-3 py-1 rounded-md active:bg-search-btn-press font-poppins font-medium text-sm max-xl:hidden'>Search</button>
          <img src={search} alt='search' onClick={handleSearhAgain} className='xl:hidden bg-search-btn px-3 py-1 rounded-md active:bg-search-btn-press'/>

          <div className='bg-buy-btn px-3 rounded-md active:bg-buy-btn-press font-poppins font-medium text-sm py-1 max-xl:hidden'><a href={item.link_one}>buy</a></div>
          <img src={buy} alt='buy' onClick={setToShop} className='xl:hidden bg-buy-btn px-3 py-1 rounded-md active:bg-buy-btn-press'/>

          <button onClick={() => {removeWishlistHandler(user, item.id2)}} className='bg-delete-btn px-3 rounded-md active:bg-delete-btn-press font-poppins font-medium text-sm py-1 max-xl:hidden'>Remove</button>
          <img src={trash} alt='delete' onClick={() => {removeWishlistHandler(user, item.id2)}} className='xl:hidden bg-delete-btn px-3 py-1 rounded-md active:bg-delete-btn-press'/>
        </div>
    </div>
  )
}

export default WishlistCard