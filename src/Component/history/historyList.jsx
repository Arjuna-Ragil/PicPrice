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
    <div className='h-[68vh] bg-tertiary shadow-[0px_10px_10px_rgba(0,0,0,0.3)] p-5'>
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