import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const SidebarButton = ({activeIcon, deactiveIcon,name, isOpen, destination}) => {

    const location = useLocation();

    const isActive = location.pathname === destination;

  return (
    <>
      <Link 
      to={destination} 
      className='w-full'>
        
        <div className={` 
        flex 
        flex-row 
        w-full 
        items-center 
        justify-start 
        rounded-4xl
        transition-transform 
        duration-300 
        ease-in-out
        ${isOpen ? "px-2" : "bg-transparent"} 
        ${isActive ? "bg-white" : "text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-[#a2a2a2]"}
        `}
        >
            <img className={`size-12 p-2`} src={`${isActive ? activeIcon : deactiveIcon}`} alt='icon'/>
            <h4 className={` w-full justify-center font-bold ${isOpen ? "flex" : "hidden"}`}>{name}</h4>
        </div>
      </Link>
    </>
  )
}

export default SidebarButton