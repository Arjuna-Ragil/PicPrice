import React from 'react';
import { useNavigate } from 'react-router-dom';
import PicPrice from '../../assets/sidebar/picPrice.png';

const Navbar = () => {
    const navigate = useNavigate(); 
      
    const handleLoginClick = () => {
        navigate('/signin'); 
    };

    return (
        <nav 
        className={`
            flex 
            justify-between 
            items-center 
            font-poppins
            text-white
            px-10 
            py-4 
            bg-[#161E36]
            shadow-md 
            sticky 
            top-0 
            z-50
        `}>
            <div 
            className={`
                flex
                items-center
                gap-2
                text-xl 
                font-bold
            `}>
                <img 
                src={PicPrice}
                className='size-10'/>
                <p>PicPrice</p>
            </div>

            <div
            className={`
                flex 
                space-x-10
                text-3xl    
            `}>
                {['home', 'about', 'features', 'team'].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`
                    text-sm 
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

            <button
            onClick={handleLoginClick}
            className={`
                relative
                bg-white 
                text-black 
                text-sm 
                font-bold 
                px-6 
                py-2 
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
        </nav>
    );
};

export default Navbar;
