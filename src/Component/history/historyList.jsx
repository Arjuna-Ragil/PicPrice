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

const HistoryList = () => {
  const { user } = useAuth()
  const [historyData, setHistoryData] = useState([])

  useEffect(() => {
    async function getHistoryData() {
      try {
        const historyRef = collection(db, "users", user.uid, "history");
        const q = query(historyRef, orderBy("createdAt", "desc"))
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
        setHistoryData(data)
        console.log(data)
      } catch (error) {
        console.error("error fetching history data: ", error)
      }
    }

    getHistoryData()
    console.log("historyData type:", typeof historyData);
    console.log("historyData isArray:", Array.isArray(historyData));
    console.log("historyData:", historyData);
  }, [user])    

  return (
    <div className='h-[68vh] bg-tertiary shadow-[0px_10px_10px_rgba(0,0,0,0.3)] p-5'>
      {historyData.length > 0 ? (
      <List
        height={600}
        itemCount={historyData.length}
        itemSize={50}
        width={"100%"}
        itemData={historyData}
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