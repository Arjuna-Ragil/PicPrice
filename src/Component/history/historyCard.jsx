import React from 'react'
import { useAuth } from '../../hooks/authContext';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

const HistoryCard = ({item}) => {

if (!item) return null
const { user } = useAuth()
const navigate = useNavigate()

async function addWishlistHandler(user, data) {
    if (!user) {
        console.log("not logged in");
        return
    }
    try {
        const userDocRef = doc(db, "users", user.uid)
        const wishlistRef = collection(userDocRef, "wishlist")
        await addDoc(wishlistRef, data)
    } catch (error) {
        console.log(error)
    }
  }

  async function removeHistoryHandler(user, data) {
    if (!user) {
        console.log("not logged in");
        return
    }
    try {
        const itemRef = doc(db, "users", user.uid, "history", data)
        await deleteDoc(itemRef)
        console.log("item deleted")
    } catch (error) {
        console.log(error)
    }
  }

  function handleSearhAgain() {
    navigate('/search', { state: { product: item}})
  }

  return (
    <div className={`
        grid
        grid-cols-4
        items-center
        gap-5
        mr-4
        pb-3
        border-b-2
        border-gray-500
    `}>
        <p className='truncate font-poppins font-medium text-xl'>{item.product_name}</p>
        <p className='truncate justify-self-center font-poppins font-medium text-xl'>${item.average_price}</p>
        <p className='truncate justify-self-center font-poppins font-medium text-xl'>{item.createdAt?.toDate().toLocaleString()}</p>
        <div className='flex flex-row gap-3 justify-self-end'>
          <button onClick={handleSearhAgain} className='bg-search-btn px-3 py-1 rounded-md active:bg-search-btn-press font-poppins font-medium text-sm'>Search</button>
          <div className='bg-buy-btn px-3 rounded-md active:bg-buy-btn-press font-poppins font-medium text-sm py-1'><a href={item.link_one}>buy</a></div>
          <button onClick={() => addWishlistHandler(user, item)} className='bg-like-btn px-3 rounded-md active:bg-like-btn-press font-poppins font-medium text-sm py-1'>like</button>
          <button onClick={() => removeHistoryHandler(user, item.id)} className='bg-delete-btn px-3 rounded-md active:bg-delete-btn-press font-poppins font-medium text-sm py-1'>Remove</button>
        </div>
    </div>
  )
}

export default HistoryCard