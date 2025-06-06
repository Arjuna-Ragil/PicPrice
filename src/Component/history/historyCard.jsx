import React, { useState } from 'react'
import { useAuth } from '../../hooks/authContext';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import search from '../../assets/history/searchIconSmall.svg'
import buy from '../../assets/history/shopping-cart.svg'
import like from '../../assets/history/heartIconSmall.svg'
import trash from '../../assets/history/trash-2.svg'
import { deleteObject, ref } from 'firebase/storage';

const HistoryCard = ({item, setRefresh}) => {

if (!item) return null
const { user } = useAuth()
const navigate = useNavigate()
const [toShop, setToShop] = useState(false)

async function addWishlistHandler(user, data) {
    if (!user) {
        alert("not logged in");
        return
    }
    try {
        const userDocRef = doc(db, "users", user.uid)
        const wishlistRef = collection(userDocRef, "wishlist")
        await addDoc(wishlistRef, data)
    } catch (error) {
        alert("failed to add to wishlist")
    }
  }

  async function removeHistoryHandler(user, data, imagePath) {
    if (!user) {
        alert("not logged in");
        return
    }
    try {
        const itemRef = doc(db, "users", user.uid, "history", data)
        await deleteDoc(itemRef)

        if (imagePath && typeof imagePath === 'string' && imagePath.trim() !== "") {
          const imageRef = ref(storage, imagePath)
          await deleteObject(imageRef)
          setRefresh(true)
        } else {
          alert("imagePath is not valid")
        }
    } catch (error) {
        alert("failed to delete history")
    }
  }

  function handleSearhAgain() {
    navigate('/search', { state: { product: item}})
  }

  if(toShop) {
    window.open(item.link_one)
    setToShop(false)
  }

  return (
    <div className={`
        grid
        sm:grid-cols-4
        grid-cols-2
        grid-rows-2
        items-center
        mt-3
        mr-4
        pb-3
    `}>
        <p className='truncate font-poppins font-medium lg:text-xl sm:text-base text-sm dark:text-white'>{item.product_name}</p>
        <p className='truncate justify-self-center font-poppins font-medium lg:text-xl sm:text-base text-sm max-sm:hidden dark:text-white'>${item.average_price}</p>
        <p className='truncate justify-self-center font-poppins font-medium lg:text-xl sm:text-base text-sm max-sm:hidden dark:text-white'>{item.createdAt?.toDate().toLocaleDateString()}</p>

        <div className='flex flex-col gap-2 sm:hidden justify-self-end'>
        <p className='truncate justify-self-center font-poppins font-medium lg:text-xl text-base'>${item.average_price}</p>
        <p className='truncate justify-self-center font-poppins font-medium lg:text-xl text-base'>{item.createdAt?.toDate().toLocaleDateString()}</p>
        </div>

        <div className='md:flex md:flex-row sm:grid sm:grid-cols-2 sm:grid-rows-2 flex flex-row gap-3 sm:justify-self-end'>
          <button onClick={handleSearhAgain} className='bg-search-btn px-3 py-1 rounded-md active:bg-search-btn-press font-poppins font-medium text-sm max-xl:hidden'>Search</button>
          <img src={search} alt='search' onClick={handleSearhAgain} className='xl:hidden bg-search-btn px-3 py-1 rounded-md active:bg-search-btn-press'/>

          <div className='bg-buy-btn px-3 rounded-md active:bg-buy-btn-press font-poppins font-medium text-sm py-1 max-xl:hidden'><a href={item.link_one}>buy</a></div>
          <img src={buy} alt='buy' onClick={setToShop} className='xl:hidden bg-buy-btn px-3 py-1 rounded-md active:bg-buy-btn-press'/>

          <button onClick={() => addWishlistHandler(user, item)} className='bg-like-btn px-3 rounded-md active:bg-like-btn-press font-poppins font-medium text-sm py-1 max-xl:hidden'>like</button>
          <img src={like} alt='like' onClick={() => addWishlistHandler(user, item)} className='xl:hidden bg-like-btn px-3 py-1 h-6.5 rounded-md active:bg-like-btn-press' />

          <button onClick={() => removeHistoryHandler(user, item.id, item.imagePath)} className='bg-delete-btn px-3 rounded-md active:bg-delete-btn-press font-poppins font-medium text-sm py-1 max-xl:hidden'>Delete</button>
          <img src={trash} alt='delete' onClick={() => removeHistoryHandler(user, item.id, item.imagePath)} className='xl:hidden bg-delete-btn px-3 py-1 rounded-md active:bg-delete-btn-press'/>
        </div>
    </div>
  )
}

export default HistoryCard