import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/authContext';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const WishlistCard = ({item, form, refresh}) => {
if (!item) return null

const { user } = useAuth()
const navigate = useNavigate()

function handleSearhAgain() {
  navigate('/search', { state: { product: item}})
}

async function removeWishlistHandler(user, data) {
    if (!user) {
        console.log("not logged in");
        return
    }
    try {
        const itemRef = doc(db, "users", user.uid, "wishlist", data)
        await deleteDoc(itemRef)
        console.log("item deleted")
    } catch (error) {
        console.log(error)
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

  return (
    <div className={`
        grid
        grid-cols-3
        items-center
        gap-15
        mr-4
        pb-3
        border-b-2
        border-gray-500
    `}>
        <p className='truncate font-poppins font-medium text-xl'>{item.product_name}</p>
        <div className='grid grid-cols-3 w-full gap-3 divide-x-2 truncate justify-self-center font-poppins font-medium text-xl'>
          <p className=''>${item.average_price}</p>
          <p className=''>${item.lowest_price}</p>
          <p className=''>${item.highest_price}</p>
        </div>
        <div className='flex flex-row gap-3 justify-self-end'>
          <button onClick={handleSearhAgain} className='bg-search-btn px-3 py-1 rounded-md active:bg-search-btn-press font-poppins font-medium text-sm'>Search</button>
          <div className='bg-buy-btn px-3 rounded-md active:bg-buy-btn-press font-poppins font-medium text-sm py-1'><a href={item.link_one}>buy</a></div>
          <button onClick={() => {removeWishlistHandler(user, item.id2)}}
            className='bg-delete-btn px-3 rounded-md active:bg-delete-btn-press font-poppins font-medium text-sm py-1'
          >Remove</button>
        </div>
    </div>
  )
}

export default WishlistCard