import React from 'react'

const HistoryCard = ({item}) => {
if (!item) return null

  return (
    <div className={`
        flex
        flex-row
        items-center
        justify-between
    `}>
        <h1>{item.product_name}</h1>
    </div>
  )
}

export default HistoryCard