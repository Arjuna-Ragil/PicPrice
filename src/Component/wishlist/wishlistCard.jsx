import React from 'react'

const WishlistCard = ({item, form}) => {
if (!item) return null

if (form === "mini") {
  return (
    <div className="flex flex-row items-center justify-between px-3 text-sm py-2 border-b">
      <p>{item.product_name}</p>
      <p>${item.average_price}</p>
    </div>
  )
}

  return (
    <div className={`
        flex
        flex-row
        items-center
        justify-between
    `}>
        <p>{item.product_name}</p>
        <p>${item.average_price}</p>
        <div className='flex flex-row gap-10'>
          <button>Search</button>
          <div><a href={item.link_one}>buy</a></div>
          <div>Remove</div>
        </div>
    </div>
  )
}

export default WishlistCard