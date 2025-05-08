import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React from 'react'
import { db } from '../../services/firebase';
import { useAuth } from '../../hooks/authContext';

const ControlBarHistory = ({ historydata, search, setSearch, priceSort, setPriceSort, dateSort, setDateSort }) => {
    const { user } = useAuth() 

    async function removeAllHistoryHandler(user) {
        if (!user) {
            console.log("not logged in");
            return
        }
        try {
            const historyRef = collection(db, "users", user.uid, "history")
            const snapshot = await getDocs(historyRef)
            const deletePromises = snapshot.docs.map((docSnap) => {
                deleteDoc(doc(db, "users", user.uid, "history", docSnap.id))
            })
            await Promise.all(deletePromises)
            console.log("item deleted")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <div className={`
            grid
            grid-cols-2
            grid-rows-2
            gap-y-8
            gap-x-10
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
            <div className='flex flex-row w-full gap-3 items-center'>
                <select 
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className={`
                    bg-sort-btn
                    p-3
                    rounded-3xl
                    text-white
                `}>
                    <option value={""}>Price</option>
                    <option value={"asc"}>Lowest to Highest</option>
                    <option value={"desc"}>Highest to Lowest</option>
                </select>

                <select 
                value={dateSort}
                onChange={(e) => setDateSort(e.target.value)}
                className={`
                    bg-sort-btn
                    p-3
                    rounded-3xl
                    text-white
                `}>
                    <option value={""}>Date</option>
                    <option value={"desc"}>Newest</option>
                    <option value={"asc"}>Oldest</option>
                </select>
            </div>
            <button 
            onClick={() => removeAllHistoryHandler(user, historydata)}
            className='justify-self-end  bg-delete-all p-3 rounded-2xl text-white active:bg-delete-all-press'>
                Delete all history
            </button>
        </div>
    </>
  )
}

export default ControlBarHistory