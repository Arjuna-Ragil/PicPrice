import React, { useEffect, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import { useAuth } from '../../hooks/authContext'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase'
import WishlistCard from './wishlistCard'
import { useResizeDetector } from 'react-resize-detector'
 
const Row = ({index, style, data}) => {
  const item = data.data[index]
  return (
    <div style={style}>
      <WishlistCard item={item} setRefresh={data.refresh}/>
    </div>
  )
}

const WishlistList = ({searchResult, priceSort}) => {
  const { user } = useAuth()
  const [wishlistData, setWishlistData] = useState([])
  const [refresh, setRefresh] = useState(false)

  const { width, ref} = useResizeDetector()
  const itemHeight = width && width > 600 ? 50 : 130

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
  
  const filteredWishlist = wishlistData.filter(item =>
    item.product_name?.toLowerCase().includes(searchResult.toLowerCase())
  )

  useEffect(() => {
      if (refresh) {
        getWishlistData()
        setRefresh(false)
      }
  }, [refresh])

  useEffect(() => {
      getWishlistData()
    }, [user, priceSort])  

  return (
    <div className='flex flex-col gap-4 h-[68vh] bg-history-container dark:bg-container-dark rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.3)] p-7' ref={ref}>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-15 items-center p-3 bg-white dark:bg-subcontainer-dark rounded-xl border-2 border-gray-400 dark:border-0 dark:text-white'>
        <p className='font-poppins font-semibold lg:text-xl md:text-base text-xs'>Product Name</p>
        <p className='md:justify-self-center justify-self-end font-semibold lg:text-xl md:text-base text-xs'>Price</p>
        <p className='justify-self-end font-semibold lg:text-xl text-base max-md:hidden'>Action Buttons</p>
      </div>
      {filteredWishlist.length > 0 ? (
      <List
        height={600}
        itemCount={filteredWishlist.length}
        itemSize={itemHeight}
        width={"100%"}
        itemData={{ data:filteredWishlist, refresh: setRefresh}}
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