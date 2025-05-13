import React, { useState } from 'react'
import MainLayout from '../layout/mainLayout'
import HistoryList from '../Component/history/historyList'
import ControlBarHistory from '../Component/history/controlBarHistory'

const History = () => {
  const [search, setSearch] = useState("")
  const [priceSort, setPriceSort] = useState("")
  const [dateSort, setDateSort] = useState("")
  const [refresh, setRefresh] = useState(false)

  return (
    <>
        <MainLayout/>
        <div className={`
          flex
          flex-col
          py-5
          xl:px-35
          lg:pr-10
          pr-5
          md:pl-20
          px-3
          gap-15
        `}>
          <nav className='max-md:mt-20'>
            <ControlBarHistory search={search} setSearch={setSearch} setPriceSort={setPriceSort} dateSort={dateSort} setDateSort={setDateSort} setRefresh={setRefresh}/>
          </nav>

          <main>
            <HistoryList searchResult={search} priceSort={priceSort} dateSort={dateSort} refresh={refresh} setRefresh={setRefresh}/>
          </main>
        </div>
    </>
  )
}

export default History