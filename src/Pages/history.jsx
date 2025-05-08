import React, { useState } from 'react'
import MainLayout from '../layout/mainLayout'
import Title from '../Component/common/title'
import HistoryList from '../Component/history/historyList'
import ControlBarHistory from '../Component/history/controlBarHistory'

const History = () => {
  const [search, setSearch] = useState("")
  const [priceSort, setPriceSort] = useState("")
  const [dateSort, setDateSort] = useState("")

  return (
    <>
        <MainLayout/>
        <div className={`
          flex
          flex-col
          py-5
          px-35
          gap-15
        `}>
          <nav>
            <ControlBarHistory search={search} setSearch={setSearch} setPriceSort={setPriceSort} dateSort={dateSort} setDateSort={setDateSort}/>
          </nav>

          <main>
            <HistoryList searchResult={search} priceSort={priceSort} dateSort={dateSort}/>
          </main>
        </div>
    </>
  )
}

export default History