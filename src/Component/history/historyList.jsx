import React, { useEffect, useState } from 'react'
import HistoryCard from './historyCard'
import { FixedSizeList as List } from 'react-window'
import { useAuth } from '../../hooks/authContext'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase'
 
const Row = ({index, style, data}) => {
  const item = data.data[index]
  return (
    <div style={style}>
      <HistoryCard item={item} setRefresh={data.refresh}/>
    </div>
  )
}

const HistoryList = ({searchResult, priceSort, dateSort}) => {
  const { user } = useAuth()
  const [historyData, setHistoryData] = useState([])
  const [showLoading, setShowLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)

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
    <div className='flex flex-col gap-4 h-[68vh] bg-history-container rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.3)] p-7'>
      <div className='grid grid-cols-4 gap-15 items-center p-3 bg-white rounded-xl border-2 border-gray-400'>
        <p className='font-poppins font-semibold text-xl'>Product Name</p>
        <p className='justify-self-center mr-2 font-semibold text-xl'>Price</p>
        <p className='justify-self-center mr-10 font-semibold text-xl'>Date</p>
        <p className='justify-self-end font-semibold text-xl'>Action Buttons</p>
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
        itemSize={50}
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