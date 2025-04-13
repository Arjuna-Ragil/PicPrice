import React from 'react'
import mainImage1 from '../../assets/home/mainImage1.svg'
import mainImage2 from '../../assets/home/mainImage2.svg'
import mainBackImage1 from '../../assets/home/mainBackImage1.svg'
import mainBackImage2 from '../../assets/home/mainBackImage2.svg'
import mainBackImage3 from '../../assets/home/mainBackImage3.svg'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
        <main className={`
        grid
        h-full
        w-full
        grid-cols-5
        grid-rows-3
        items-center
        justify-items-center
        bg-tertiary
        border-5
        border-welcome-main-outline
        `}>
            <h2 className={`
            flex
            items-center
            justify-center
            col-start-2
            col-span-3
            row-start-1
            row-end-2
            z-10
            font-VictorMono
            text-4xl
            font-semibold
            text-white
            `}>
                Take A Picture, Get The Best Price
            </h2>

            <img className={`col-start-1 col-end-2 row-span-3 h-full items-center justify-center`} src={mainBackImage1} alt='back image'/>

            <img className={`col-start-2 col-end-3 row-start-2 row-end-4 `} src={mainImage1} alt='camera image'/>
            
            <Link className={`
            col-start-3
            col-end-4
            row-start-2
            row-end-4
            z-10
            bg-accent
            text-white
            font-poppins
            font-semibold
            p-5
            rounded-lg
            shadow-[0px_10px_5px_rgba(0,0,0,0.3)]
            hover:border-white
            hover:border-2
            hover:shadow-md
            hover:scale-90
            hover:translate-y-1
            transition-all
            duration-300
            `}
            to={"/search"}
            >
                Get the price NOW!
            </Link>

            <img className={`col-start-4 col-end-5 row-start-2 row-end-4 `} src={mainImage2} alt='camera image'/>
                
            <img className=' absolute items-center justify-center opacity-10' src={mainBackImage2} alt='back image'/>

            <img className={`col-start-5 col-end-6 row-span-3`} src={mainBackImage3} alt='back image' />
        </main>
    </>
  )
}

export default Main
;