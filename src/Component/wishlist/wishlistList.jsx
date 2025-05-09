import React, { useEffect, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import { useAuth } from '../../hooks/authContext'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase'
import WishlistCard from './wishlistCard'
 
const Row = ({index, style, data}) => {
  const item = data[index]
  return (
    <div style={style}>
      <WishlistCard item={item}/>
    </div>
  )
}

const WishlistList = ({searchResult, priceSort}) => {
  const { user } = useAuth()
  const [wishlistData, setWishlistData] = useState([])

  useEffect(() => {
    async function getWishlistData() {
      try {
        const wishlistRef = collection(db, "users", user.uid, "wishlist");
        let q = query(wishlistRef)
        if (priceSort) {
          q = query(wishlistRef, orderBy("average_price", priceSort === "desc" ? "desc" : "asc"))
        }
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id2: doc.id, ...doc.data()}));
        setWishlistData(data)
      } catch (error) {
        console.error("error fetching wishlist data: ", error)
      }
    }

    if (user) getWishlistData()
  }, [user, wishlistData, priceSort])  
  
  const filteredWishlist = wishlistData.filter(item =>
    item.product_name?.toLowerCase().includes(searchResult.toLowerCase())
  )

  return (
    <div className='flex flex-col gap-4 h-[68vh] bg-history-container rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.3)] p-7'>
      <div className='grid grid-cols-3 gap-15 items-center p-3 bg-white rounded-xl border-2 border-gray-400'>
        <p className='font-poppins font-semibold text-xl'>Product Name</p>
        <div className='grid grid-cols-3 font-semibold text-xl'>
          <p>Average</p>
          <p>Lowest</p>
          <p>Highest</p>
        </div>
        <p className='justify-self-end font-semibold text-xl'>Action Buttons</p>
      </div>
      {filteredWishlist.length > 0 ? (
      <List
        height={600}
        itemCount={filteredWishlist.length}
        itemSize={50}
        width={"100%"}
        itemData={filteredWishlist}
      >
        {Row}
      </List>
      ) : (
        <p>No Wishlist found</p>
      )}
    </div>
  )
}

export default WishlistList