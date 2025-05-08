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
        mr-10
    `}>
        <p className='truncate'>{item.product_name}</p>
        <p className='truncate justify-self-center'>${item.average_price}</p>
        <p className='truncate justify-self-center'>{item.createdAt?.toDate().toLocaleString()}</p>
        <div className='flex flex-row gap-10 justify-self-end'>
          <button onClick={handleSearhAgain}>Search</button>
          <div><a href={item.link_one}>buy</a></div>
          <button onClick={() => addWishlistHandler(user, item)}>like</button>
          <button onClick={() => removeHistoryHandler(user, item.id2)}>Remove</button>
        </div>
    </div>
  )
}

export default HistoryCard