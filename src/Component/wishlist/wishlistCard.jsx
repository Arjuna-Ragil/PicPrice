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
        flex
        flex-row
        items-center
        justify-between
    `}>
        <p>{item.product_name}</p>
        <p>${item.average_price}</p>
        <div className='flex flex-row gap-10'>
          <button onClick={handleSearhAgain}>Search</button>
          <div><a href={item.link_one}>buy</a></div>
          <button onClick={ async () => {
            await removeWishlistHandler(user, item.id)
            refresh()
          }
          }>Remove</button>
        </div>
    </div>
  )
}

export default WishlistCard