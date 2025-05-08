import React, { useEffect, useState } from 'react'
import HistoryCard from './historyCard'
import { FixedSizeList as List } from 'react-window'
import { useAuth } from '../../hooks/authContext'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase'
 
const Row = ({index, style, data}) => {
  const item = data[index]
  return (
    <div style={style}>
      <HistoryCard item={item}/>
    </div>
  )
}

const HistoryList = ({searchResult, priceSort, dateSort}) => {
  const { user } = useAuth()
  const [historyData, setHistoryData] = useState([])
  

  useEffect(() => {
    async function getHistoryData() {
      try {
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
      } catch (error) {
        console.error("error fetching history data: ", error)
      }
    }

    getHistoryData()
  }, [user, dateSort, priceSort, historyData])   
  
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
      {filteredHistory.length > 0 ? (
      <List
        height={600}
        itemCount={filteredHistory.length}
        itemSize={50}
        width={"100%"}
        itemData={filteredHistory}
      >
        {Row}
      </List>
      ) : (
        <p>No History found</p>
      )}
    </div>
  )
}

export default HistoryList