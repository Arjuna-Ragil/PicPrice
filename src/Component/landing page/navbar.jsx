import React, { useState, useEffect, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import PicPrice from '../../assets/sidebar/picPrice.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isTop, setIsTop] = useState(true)

    const handleLoginClick = () => {
        navigate('/signin');
    };

    useEffect(() => {
        const handleScroll = () => {
        setIsTop(window.scrollY < 10); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
    <nav
        className={`
            font-poppins
            text-white
            bg-[#161E36]
            shadow-md 
            sticky 
            top-0 
            z-50
            w-full
            ${isTop ? 'border-b-1 border-white' : 'border-none'}
        `}
    >   
        {/* container */}
        <div className={`
            flex 
            items-center 
            justify-between 
            px-3 sm:px-10 xl:px-10 2xl:px-20
            py-1.5 sm:py-4 xl:py-4 2xl:py-8
        `}>

            {/* Logo */}
            <div className={`
                flex 
                items-center 
                gap-2 
                font-bold
                text-[11px] sm:text-[18px] lg:text-xl xl:text-2xl 2xl:text-5xl
            `}>
                <img 
                src={PicPrice} 
                className={`
                    size-5 sm:size-8 xl:size-10 2xl:size-17
                `} />
                <p>PicPrice</p>
            </div>

            {/* Desktop Nav */}
            <div className={`
                hidden 
                lg:flex 
                lg:space-x-7 xl:space-x-10 2xl:space-x-12 
                lg:text-[14px] xl:text-[15px] 2xl:text-3xl
            `}>
            {['home', 'about', 'features', 'team'].map((id) => (
                <a
                key={id}
                href={`#${id}`}
                className={`
                    relative 
                    
                    hover:text-[#a9bfff]
                    after:content-[''] 
                    after:absolute 
                    after:left-1/2 
                    after:bottom-0 
                    after:w-0 
                    after:h-[2px] 
                    after:bg-[#a0b7fc]
                    after:transition-all 
                    after:duration-300 
                    after:ease-in-out 
                    hover:after:w-full 
                    hover:after:left-0
                `}
                >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
            ))}
            </div>

            {/* Login Button */}
            <div
            className={`
                flex
                items-center
                gap-2
            `}>
            <button
            onClick={handleLoginClick}
            className={`
                hidden 
                sm:block
                relative
                bg-white 
                text-black 
                sm:text-sm md:text-base xl:text-sm 2xl:text-4xl
                font-bold 
                sm:px-6 md:px-3.5 lg:px-4.5 xl:px-6 2xl:px-9
                sm:py-2 md:py-1 lg:py-1.5 xl:py-2 2xl:py-3 
                rounded-full 
                overflow-hidden
                transition-all 
                duration-500 
                shadow-md
                hover:text-white
                hover:bg-[#677dc1]
                hover:shadow-lg
                group
            `}
            >
            <span
                className="
                absolute 
                inset-0 
                bg-[#677dc1]
                scale-x-0 
                origin-left 
                transition-transform 
                duration-300 
                ease-in-out 
                group-hover:scale-x-100 
                z-0 
                rounded-full
                "
            ></span>
            <span className="relative z-10">Log in</span>
            </button>

            {/* Mobile Hamburger */}
                <button onClick={() => setIsOpen(!isOpen)} className="text-white lg:hidden">
                    {isOpen ? <X size={18} sm:size={25} /> : <Menu size={18} sm:size={25} />}
                </button>
            
            </div>
        </div>
    </nav>

        {/* Mobile Dropdown */}
        <div
        className={`
            lg:hidden 
            fixed
            top-9 sm:top-[70px]
            right-0 sm:right-4
            z-20
            flex
            flex-col
            ml-auto
            w-full sm:w-1/4 
            justify-end
            items-end
            px-3
            py-2.5
            space-y-1
            text-[12px] 
            bg-white
            rounded-xl
            shadow-lg
            transition-all
            duration-300
            ease-in-out
            transform
            ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
        `}
        >
        {['home', 'about', 'features', 'team'].map((id) => (
            <a
            key={id}
            href={`#${id}`}
            className="block text-white text-center rounded-2xl py-1.5 px-5 w-full bg-[#1d2745] hover:text-[#a9bfff] transition-all"
            onClick={() => setIsOpen(false)}
            >
            {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
        ))}
        </div>

    </>
  );
};

export default Navbar;
