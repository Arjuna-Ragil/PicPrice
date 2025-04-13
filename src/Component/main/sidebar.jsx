import React from 'react'
import Logo from "../../assets/sidebar/Logo.svg"
import HomeIcon from "../../assets/sidebar/Home.svg"
import SearchIcon from "../../assets/sidebar/Search.svg"
import WishlistIcon from "../../assets/sidebar/Wishlist.svg"
import SettingIcon from "../../assets/sidebar/Setting.svg"
import ProfileIcon from "../../assets/sidebar/Profile.svg"
import SidebarButton from './sidebarButton'

const Sidebar = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
        <nav className={`
          flex
          flex-col
          items-center
          justify-between
          fixed
          top-0
          min-h-screen
          bg-gradient-to-b from-primary to-accent-dark
          shadow-lg
          transition-all
          duration-300
          p-2
          py-6
          z-50
          ${isOpen ? "w-75" : "w-16"}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
            <div className={`
              flex 
              flex-row 
              gap-4
              items-center`}
              >
                <img className={` size-12`} src={Logo} alt='PicPrice Logo'/>
                <h2 className={` font-bold text-3xl text-neutral ${isOpen ? "flex" : "hidden"}`}>PicPrice</h2>
            </div>

            <div className={`
            flex
            flex-col
            w-full
            items-center
            justify-center
            gap-14
            transition-all
            duration-300
            ${isOpen ? "px-4" : "px-0"}`}
            >
              <SidebarButton icon={HomeIcon} name={"Home"} isOpen={isOpen} destination={"/"}/>

              <SidebarButton icon={SearchIcon} name={"Search Price"} isOpen={isOpen} destination={"/search"}/>
              
              <SidebarButton icon={WishlistIcon} name={"Wishlist"} isOpen={isOpen} destination={"/wishlist"}/>

              <SidebarButton icon={SettingIcon} name={"Settings"} isOpen={isOpen} destination={"/setting"}/>
            </div>
            
            <div className={` 
            flex 
            flex-row 
            w-full 
            items-center 
            justify-start 
            rounded-full 
            ${isOpen ? "bg-neutral p-1" : "bg-transparent"}`}
            >
              <img className={` size-12 rounded-full ${isOpen ? "bg-accent-dark" : "bg-transparent"}`} src={ProfileIcon} alt='ProfilePic'/>
              <div className={`
                flex 
                flex-col 
                w-full 
                items-center 
                justify-center 
                ${isOpen ? "flex" : "hidden"}`}
              >
                <label>Username</label>
                <label>arjunaragilputera@gmail.com</label>
              </div>
            </div>
        </nav>
    </>
  )
}

export default Sidebar