import React from 'react'
import { Link } from 'react-router-dom';

const SidebarButton = ({icon, name, isOpen, destination}) => {

    const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <Link to={destination} className='w-full'>
        <div className={` 
        flex 
        flex-row 
        w-full 
        items-center 
        justify-start 
        rounded-2xl 
        transition-transform 
        duration-300 
        ease-in-out
        hover:bg-accent 
        ${isOpen ? "bg-secondary px-1" : "bg-transparent"} 
        ${isHovered ? "hover:-translate-y-1 hover:scale-105 hover:shadow-lg" : ""} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <img className=' size-12' src={icon} alt='Home'/>
            <h4 className={` w-full justify-center font-bold ${isOpen ? "flex" : "hidden"}`}>{name}</h4>
        </div>
      </Link>
    </>
  )
}

export default SidebarButton