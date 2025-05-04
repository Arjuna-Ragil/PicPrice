import React from 'react'

const WishlistCard = ({item}) => {
if (!item) return null

  return (
    <div className={`
        flex
        flex-row
        items-center
        justify-between
    `}>
        <p>{item.product_name}</p>
        <p>${item.average_price}</p>
        <p>{item.createdAt?.toDate().toLocaleString()}</p>
        <button>Search</button>
        <div><a href={item.link_one}>buy</a></div>
        <p>like</p>
    </div>
  )
}

export default WishlistCard