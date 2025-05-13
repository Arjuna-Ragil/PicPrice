import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/authContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'
import wishImage3 from '../../assets/home/wishImage3.svg'
import WishlistCard from '../wishlist/wishlistCard'

const MiniWishlistList = () => {
  const { user } = useAuth()
  const [wishlistData, setWishlistData] = useState([])

  useEffect(() => {
    async function getWishlistData() {
      try {
        const wishlistRef = collection(db, "users", user.uid, "wishlist");
        const snapshot = await getDocs(wishlistRef);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setWishlistData(data)
      } catch (error) {
        console.error("error fetching wishlist data: ", error)
      }
    }

    if (user) getWishlistData()
  }, [user])

  return (
    <div 
    className={`
      w-full 
      max-w-128 2xl:max-w-236
      max-h-[100px] sm:max-h-[135px] lg:max-h-[167px] xl:max-h-[199px] 2xl:max-h-[312px]
      overflow-y-auto 
      bg-history-container
      px-4
      pb-2 
      rounded-b-xl
    `}>
      {wishlistData.length > 0 ? (
        wishlistData.map((item) => (
          <WishlistCard key={item.id} item={item} form="mini" />
        ))
      ) : (
        <div className="text-center">
          <p 
          className="font-poppins text-welcome-text">You don't have any wished items yet :C</p>
          
          <img 
          src={wishImage3} 
          alt="shopping list" 
          className="mx-auto w-1/3 mt-2"/>
        </div>
      )}
    </div>
  )
}

export default MiniWishlistList
