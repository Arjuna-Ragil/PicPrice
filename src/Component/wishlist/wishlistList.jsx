import React, { useEffect, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import { useAuth } from '../../hooks/authContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'
import WishlistCard from './wishlistCard'
 
const Row = ({index, style, data}) => {
  const item = data.data[index]
  const refresh = data.refresh
  return (
    <div style={style}>
      <WishlistCard item={item} refresh={refresh}/>
    </div>
  )
}

const WishlistList = ({searchResult}) => {
  const { user } = useAuth()
  const [wishlistData, setWishlistData] = useState([])
  const [refresh, setrefresh] = useState(0)

  useEffect(() => {
    async function getWishlistData() {
      try {
        const wishlistRef = collection(db, "users", user.uid, "wishlist");
        const snapshot = await getDocs(wishlistRef);
        const data = snapshot.docs.map(doc => ({ id2: doc.id, ...doc.data()}));
        setWishlistData(data)
      } catch (error) {
        console.error("error fetching wishlist data: ", error)
      }
    }

    if (user) getWishlistData()
  }, [user, refresh])  
  
  const filteredWishlist = wishlistData.filter(item =>
    item.product_name?.toLowerCase().includes(searchResult.toLowerCase())
  )

  return (
    <div className='h-[68vh] bg-tertiary shadow-[0px_10px_10px_rgba(0,0,0,0.3)] p-5'>
      {filteredWishlist.length > 0 ? (
      <List
        height={600}
        itemCount={filteredWishlist.length}
        itemSize={50}
        width={"100%"}
        itemData={{ data: filteredWishlist, refresh: () => setrefresh(prev => prev + 1)}}
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