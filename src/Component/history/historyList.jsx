import React, { useEffect, useState } from 'react'
import HistoryCard from './historyCard'
import { FixedSizeList as List } from 'react-window'
import { useAuth } from '../../hooks/authContext'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useResizeDetector } from 'react-resize-detector'
 
const Row = ({index, style, data}) => {
  const item = data.data[index]
  return (
    <div style={style} className='border-b-2 border-gray-500'>
      <HistoryCard item={item} setRefresh={data.refresh}/>
    </div>
  )
}

const HistoryList = ({searchResult, priceSort, dateSort}) => {
  const { user } = useAuth()
  const [historyData, setHistoryData] = useState([])
  const [showLoading, setShowLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const { width, ref} = useResizeDetector()
  const itemHeightFirst = width && width < 690 ? 90 : 50
  const itemHeightSecond = width && width < 560 ? 120 : itemHeightFirst

  async function getHistoryData() {
    try {
      setShowLoading(true)
      const historyRef = collection(db, "users", user.uid, "history");
      let q = query(historyRef)

      if (priceSort && dateSort) {
        q = query(historyRef, orderBy("createdAt", dateSort === "desc" ? "desc" : "asc"),
        orderBy("average_price", priceSort === "desc" ? "desc" : "asc"))
      } else if (priceSort) {
        q = query(historyRef, orderBy("average_price", priceSort === "desc" ? "desc" : "asc"))
      } else if (dateSort) {
        q = query(historyRef, orderBy("createdAt", dateSort === "desc" ? "desc" : "asc"))
      }

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
      setHistoryData(data)
      setShowLoading(false)
    } catch (error) {
      console.error("error fetching history data: ", error)
    }
  }
  
  useEffect(() => {
    if (refresh) {
      getHistoryData()
      setRefresh(false)
    }
  }, [refresh])

  useEffect(() => {
    getHistoryData()
  }, [user, dateSort, priceSort])   
  
  const filteredHistory = historyData.filter(item => 
    item.product_name?.toLowerCase().includes(searchResult.toLowerCase())
  )

  return (
    <div className='flex flex-col gap-4 h-[68vh] bg-history-container dark:bg-container-dark rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.3)] p-7' ref={ref}>
      <div className='grid sm:grid-cols-4 grid-cols-2 gap-15 items-center p-3 bg-white dark:bg-subcontainer-dark rounded-xl border-2 border-gray-400 dark:border-0 dark:text-white'>
        <p className='font-poppins font-semibold lg:text-xl sm:text-base text-sm'>Product Name</p>
        <p className='font-poppins justify-self-center mr-2 font-semibold lg:text-xl text-base max-sm:hidden'>Price</p>
        <p className='font-poppins justify-self-center mr-10 font-semibold lg:text-xl text-base max-sm:hidden'>Date</p>
        <p className='font-poppins justify-self-end font-semibold lg:text-xl text-base max-sm:hidden'>Action Buttons</p>

        <p className='font-poppins sm:hidden justify-self-end font-semibold sm:text-base text-sm'>Price & Date</p>
      </div>
      {showLoading ? 
      <>
        <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <div className="absolute inset-3 bg-gray-900 rounded-full"></div>
        </div>
        <p className="text-lg font-semibold tracking-wider animate-pulse">
          Loading, please wait...
        </p>
      </div>
      </>
      :
      (filteredHistory.length > 0 ? (
      <List
        height={600}
        itemCount={filteredHistory.length}
        itemSize={itemHeightSecond}
        width={"100%"}
        itemData={{data: filteredHistory, refresh: setRefresh}}
      >
        {Row}
      </List>
      ) : (
        <p>No History found</p>
      ))
    }
    </div>
  )
}

export default HistoryList