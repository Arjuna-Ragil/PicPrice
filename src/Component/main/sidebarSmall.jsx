import React, { useEffect, useState } from 'react'
import ProfileIcon from "../../assets/sidebar/user.svg"
import activehome from "../../assets/sidebar/home.svg"
import deactivehome from "../../assets/sidebar/homeWhite.svg"
import activesearch from "../../assets/sidebar/search.svg"
import deactivesearch from "../../assets/sidebar/searchWhite.svg"
import activeheart from "../../assets/sidebar/heart.svg"
import deactiveheart from "../../assets/sidebar/heartWhite.svg"
import activesetting from "../../assets/sidebar/settings.svg"
import deactivesetting from "../../assets/sidebar/settingWhite.svg"
import SidebarButton from './sidebarButton'
import { useAuth } from '../../hooks/authContext'
import { db } from '../../services/firebase'
import { doc, getDoc } from 'firebase/firestore'

const SidebarSmall = ({isOpen}) => {
  const { user } = useAuth()

  const [userInfo, setUserInfo] = useState([])

  async function getUserInfo() {
    try {
      const accountRef = doc(db, "users", user.uid)
      const getAccount = await getDoc(accountRef)
      setUserInfo(getAccount.data())
    } catch (error) {
      alert("failed to get user", error)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, []) 
 
  return (
    <>
        <nav className={`
          flex
          flex-col
          items-center
          justify-between
          fixed
          rounded-r-2xl
          min-h-screen
          bg-[#161E36]
          dark:bg-sidebar-dark
          shadow-lg
          transition-all
          duration-300
          p-2
          py-6
          z-50
          ${isOpen ? "w-61" : "w-0 bg-transparent dark:bg-transparent"}`}
        >
            <div className={`
              flex 
              flex-row 
              gap-5
              items-center`}
              >
                <h2 className={` font-bold text-3xl text-neutral ${isOpen ? "flex" : "hidden"}`}>PicPrice</h2>
            </div>

            <div className={`
            flex
            flex-col
            w-full
            gap-5
            items-center
            justify-center
            transition-all
            duration-300
            ${isOpen ? "px-4" : "px-0"}`}
            >
              <SidebarButton activeIcon={activehome} deactiveIcon={deactivehome} name={"Home"} isOpen={isOpen} destination={"/"}/>

              <SidebarButton activeIcon={activesearch} deactiveIcon={deactivesearch} name={"Search Price"} isOpen={isOpen} destination={"/search"}/>
              
              <SidebarButton activeIcon={activeheart} deactiveIcon={deactiveheart} name={"Wishlist"} isOpen={isOpen} destination={"/wishlist"}/>

              <SidebarButton activeIcon={activesetting} deactiveIcon={deactivesetting} name={"Settings"} isOpen={isOpen} destination={"/setting"}/>
            </div>
            
            <div className={` 
            flex 
            flex-row 
            w-full 
            items-center 
            justify-start 
            rounded-full 
            ${isOpen ? "bg-white p-1" : "bg-transparent"}`}
            >
              <img className={` size-11 p-1 rounded-full ${isOpen ? "" : "invert bg-transparent"}`} src={userInfo?.profilePictureURL || ProfileIcon} alt='ProfilePic'/>
              <div className={`
                flex 
                flex-col 
                w-full
                items-start
                justify-center
                ml-3
                ${isOpen ? "" : "hidden"}`}
              >
                <label className='text-[13px] font-semibold'>{userInfo?.username}</label>
                <label className='text-[11px]'>{userInfo?.email}</label>
              </div>
            </div>
        </nav>
    </>
  )
}

export default SidebarSmall