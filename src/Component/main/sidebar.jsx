import React, { useEffect, useState } from 'react'
import home from "../../assets/sidebar/home.svg"
import ProfileIcon from "../../assets/sidebar/user.svg"
import hamburger from "../../assets/sidebar/hamburger.png"
import search from "../../assets/sidebar/search.svg"
import heart from "../../assets/sidebar/heart.svg"
import setting from "../../assets/sidebar/settings.svg"
import SidebarButton from './sidebarButton'
import { useAuth } from '../../hooks/authContext'
import { db } from '../../services/firebase'
import { doc, getDoc } from 'firebase/firestore'

const Sidebar = ({setBlur}) => {
  const { user } = useAuth()

  const [isOpen, setIsOpen] = React.useState(false);
  const [userInfo, setUserInfo] = useState([])

  async function getUserInfo() {
    try {
      const accountRef = doc(db, "users", user.uid)
      const getAccount = await getDoc(accountRef)
      setUserInfo(getAccount.data())
    } catch (error) {
      console.log("failed", error)
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
          ${isOpen ? "w-61" : "w-16"}`}
          onMouseEnter={() => [setIsOpen(true), setBlur(true)]}
          onMouseLeave={() => [setIsOpen(false),setBlur(false)]}
        >
            <div className={`
              flex 
              flex-row 
              gap-5
              items-center`}
              >
                <img className={` size-8 mr-1 `} src={hamburger} alt='PicPrice Logo'/>
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
              <SidebarButton icon={home} name={"Home"} isOpen={isOpen} destination={"/"}/>

              <SidebarButton icon={search} name={"Search Price"} isOpen={isOpen} destination={"/search"}/>
              
              <SidebarButton icon={heart} name={"Wishlist"} isOpen={isOpen} destination={"/wishlist"}/>

              <SidebarButton icon={setting} name={"Settings"} isOpen={isOpen} destination={"/setting"}/>
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
              <img className={` size-11 p-1 rounded-full ${isOpen ? "" : "invert bg-transparent"}`} src={userInfo.profilePictureURL || ProfileIcon} alt='ProfilePic'/>
              <div className={`
                flex 
                flex-col 
                w-full
                items-start
                justify-center
                ml-3
                ${isOpen ? "" : "hidden"}`}
              >
                <label className='text-[13px] font-semibold'>{userInfo.username}</label>
                <label className='text-[11px]'>{userInfo.email}</label>
              </div>
            </div>
        </nav>
    </>
  )
}

export default Sidebar