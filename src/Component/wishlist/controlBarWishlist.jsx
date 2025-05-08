import React from 'react'

const ControlBarWishlist = ({search, setSearch}) => {

  return (
    <>
        <div className={`
            grid
            grid-cols-2
            grid-rows-2
            gap-y-3
            gap-x-10
            bg-control-bg
            p-5
            shadow-[0px_10px_10px_rgba(0,0,0,0.3)]
        `}>
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Product Name...'
                className={`
                    col-span-2
                    w-full
                    p-3
                    bg-neutral
                    border-2
                    border-secondary    
                `}
            />
            <div className='flex flex-row gap-3 items-start justify-start'>
                <select className={`
                    bg-secondary
                    p-3
                `}>
                    <option>Select Price</option>
                    <option>Lowest to Highest</option>
                    <option>Highest to Lowest</option>
                </select>
            </div>

        </div>
    </>
  )
}

export default ControlBarWishlist