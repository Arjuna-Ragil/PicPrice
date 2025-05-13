import React from 'react'
import logo from '../../assets/sidebar/picPriceLogo.svg'
import hamburger from '../../assets/sidebar/hamburger.png'

const TopBar = ({setIsOpen, setBlur}) => {
  return (
    <>
        <div className={`flex flex-row fixed z-60 w-full items-center justify-between bg-[#161E36] dark:bg-sidebar-dark shadow-lg p-4`}>
            <div className={`flex flex-row items-center gap-2`}>
                <img src={hamburger} alt='hamburger' onClick={() => [setIsOpen(prev => !prev), setBlur(prev => !prev)]}/>
            </div>
            <div className={`flex flex-row items-center gap-2`}>
                <img src={logo} alt='logo'/>
                <h1 className={`text-white text-lg font-bold`}>PicPrice</h1>
            </div>
        </div>
    </>
  )
}

export default TopBar