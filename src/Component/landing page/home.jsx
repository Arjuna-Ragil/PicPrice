import React from 'react';
import Laptop from '../../assets/landingPage/laptop.svg';
import TopBackground from '../../assets/landingPage/topBackground.png';

const Home = () => {
    const handleLoginClick = () => {
        navigate('/signin');
    };

  return (
    <section
      id="home"
      className={`
        w-full 
        h-55 sm:h-135 lg:h-155 xl:h-200 2xl:h-350
        font-poppins 
        bg-cover
        bg-center
        bg-no-repeat
      `}
      style={{ backgroundImage: `url(${TopBackground})` }}
    >
        {/* container */}
        <div
            className={`
                flex 
                flex-col lg:flex-row
                items-center 
                justify-center
                relative
                w-full
                z-10
                sm:h-100 xl:h-140 2xl:h-250
                mx-auto
                gap-2 lg:gap-18 2xl:gap-36
                sm:px-20 xl:px-25 2xl:px-45
            `}
        >

            {/* Text Section */}
            <div className={`
                w-full lg:w-1/2 
                px-6 sm:px-
                py-4 sm:py-0
                text-center lg:text-left 
                space-y-2 lg:space-y-2  2xl:space-y-10
                text-white
                
            `}>
                <h1 className={`
                    font-medium sm:font-bold 
                    leading-tight
                    text-sm sm:text-xl lg:text-4xl xl:text-5xl 2xl:text-8xl 
                `}>
                    Shop Smarter with Just a Photo
                </h1>

                <p className={`
                    text-[10px] sm:text-[12px] lg:text-sm xl:text-xl 2xl:text-4xl 
                `}>
                    Snap it. Search it. Compare prices instantly across your favorite stores—all powered by AI.
                </p>
            </div>

            {/* Image Section */}
            <div className={`
                w-full sm:w-1/2 
                flex 
                justify-end sm:justify-center
                mr-15 sm:mr-0
            `}>
            <img
                src={Laptop}
                alt="Laptop Illustration"
                className={`
                hidden sm:block
                w-full 
                max-w-[250px] 
                sm:max-w-[380px] 
                lg:max-w-[550px] 
                xl:max-w-[600px] 
                2xl:max-w-[1080px]
                h-auto
                `}
            />

            <button
            onClick={handleLoginClick}
            className={`
                sm:hidden
                relative
                bg-white 
                text-black 
                text-[10px] sm:text-sm md:text-base xl:text-sm 2xl:text-4xl
                font-bold 
                px-2 sm:px-6 md:px-3.5 lg:px-4.5 xl:px-6 2xl:px-9
                py-0.5 sm:py-2 md:py-1 lg:py-1.5 xl:py-2 2xl:py-3 
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
            className={`
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
            `}></span>

            <span 
            className={`
                relative 
                z-10
            `}>Log in</span>
            </button>

            </div>
        </div>
    </section>
  );
};

export default Home;
