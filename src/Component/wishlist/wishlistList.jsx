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

const WishlistList = () => {
  const { user } = useAuth()
  const [wishlistData, setWishlistData] = useState([])

  useEffect(() => {
    async function getWishlistData() {
      try {
        const historyRef = collection(db, "users", user.uid, "wishlist");
        const snapshot = await getDocs(historyRef);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
        setWishlistData(data)
        console.log(data)
      } catch (error) {
        console.error("error fetching wishlist data: ", error)
      }
    }

    getWishlistData()
  }, [user])    

  return (
    <div className='h-[68vh] bg-tertiary shadow-[0px_10px_10px_rgba(0,0,0,0.3)] p-5'>
      {wishlistData.length > 0 ? (
      <List
        height={600}
        itemCount={wishlistData.length}
        itemSize={50}
        width={"100%"}
        itemData={wishlistData}
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