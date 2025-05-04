import React from 'react'
import MainLayout from '../layout/mainLayout'
import Title from '../Component/common/title'
import ControlBar from '../Component/wishlist/controlBar'
import WishlistList from '../Component/wishlist/wishlistList'
import HistoryList from '../Component/history/historyList'

const History = () => {
  return (
    <>
        <MainLayout/>
        <div className={`
          flex
          flex-col
          py-5
          px-35
          gap-5
        `}>
          <header>
            <Title title={"History"}/>
          </header>

          <nav>
            <ControlBar/>
          </nav>

          <main>
            <HistoryList/>
          </main>
        </div>
    </>
  )
}

export default History