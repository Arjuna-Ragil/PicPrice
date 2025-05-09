import React from 'react'
import dropDownArrow from '../../assets/history/chevron-down.svg'

const ControlBarWishlist = ({search, setSearch, priceSort, setPriceSort}) => {

  return (
    <>
        <div className={`
            grid
            grid-cols-2
            grid-rows-2
            gap-y-8
            bg-control-container
            rounded-lg
            p-5
            shadow-[0px_2px_7px_rgba(0,0,0,0.3)]
        `}>
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Product Name...'
                className={`
                    col-span-2
                    w-full
                    p-4
                    bg-white
                    border-2
                    border-black
                    rounded-4xl     
                `}
            />
            <div className='
                flex 
                flex-row 
                gap-3 
                w-1/3
                bg-sort-btn
                p-3
                rounded-3xl
                text-white'>
                <select 
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className={`
                    w-full
                    appearance-none
                `}>
                    <option value={""}>Select Price</option>
                    <option value={"asc"}>Lowest to Highest</option>
                    <option value={"desc"}>Highest to Lowest</option>
                </select>
                <img src={dropDownArrow} alt='drop down'/>
            </div>

        </div>
    </>
  )
}

export default ControlBarWishlist