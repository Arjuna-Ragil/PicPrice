import React from 'react';
import Feature from '../../assets/landingPage/feature.svg'

const Features = () => {
  return (
    <section 
    id="features" 
    className={`
        py-31
        sm:px-9 lg:px-12 xl:px-14 2xl:px-25
        font-poppins
        w-full
        h-full
    `}>
        <p 
        className={`
          text-center 
          text-[11px] sm:text-[13px] lg:text-[15px] 2xl:text-3xl
        `}>Web Features</p>

        <h2 
        className={`
          text-lg sm:text-xl lg:text-3xl 2xl:text-6xl
          font-semibold 
          sm:mb-5 lg:mb-8 2xl:mb-15
          text-center
        `}>Awesome Features</h2>

      {/* container */}
      <div className={`
        flex
        flex-col sm:flex-row 
        items-center 
        justify-center sm:justify-around
        gap-3 sm:gap-5 lg:gap-12
      `}>

        {/* first feature */}
        <div 
        className={`
            bg-[#E0F2FE] 
            w-50 sm:w-80 xl:w- 2xl:w-130
            h-50 sm:h-80 xl:h- 2xl:h-130
            py-6 sm:py-8 lg:py-13 xl:py-15 2xl:py-20
            px-8 sm:px-10 2xl:px-20
            rounded-3xl 
            space-y-1 lg:space-y-2 xl:space-y-3 2xl:space-y-6
            text-left
          `}>

            <img 
            src={Feature} 
            className={`
              size-6 sm:size-8 lg:size-10 2xl:size-15
            `}/>

            <h3 
            className={`
              text-sm sm:text-lg lg:text-xl 2xl:text-4xl
              font-semibold 
              mb-1 sm:mb-2
            `}>Search using Gemini AI</h3>

            <p
            className={`
              text-[10px] sm:text-[12px] 2xl:text-2xl   
            `}>Instantly identify products just by uploading a photo—Gemini AI understands images and finds what you're looking for.</p>
          </div> 
          
          {/* second feature */}
          <div 
          className={`
            bg-[#E0F2FE] 
            w-50 sm:w-80 xl:w- 2xl:w-130
            h-50 sm:h-80 xl:h- 2xl:h-130
            py-6 sm:py-8 lg:py-13 xl:py-15 2xl:py-20
            px-8 sm:px-10 2xl:px-20
            rounded-3xl 
            space-y-1 lg:space-y-2 xl:space-y-3 2xl:space-y-6
            text-left
          `}>
            <img 
            src={Feature} 
            className={`
              size-6 sm:size-8 lg:size-10 2xl:size-15
            `}/>

            <h3 
            className={`
              text-sm sm:text-lg lg:text-xl 2xl:text-4xl
              font-semibold 
              mb-1 sm:mb-2
            `}>Multiple e-commerce sources</h3>

            <p 
            className={`
              text-[10px] sm:text-[12px] 2xl:text-2xl
            `}>Compare prices from various online stores to ensure you get the best deal across the web.</p>
          </div>
            
          {/* third feature */}
          <div 
          className={`
            bg-[#E0F2FE] 
            w-50 sm:w-80 xl:w- 2xl:w-130
            h-50 sm:h-80 xl:h- 2xl:h-130
            py-6 sm:py-8 lg:py-13 xl:py-15 2xl:py-20
            px-8 sm:px-10 2xl:px-20
            rounded-3xl 
            space-y-1 lg:space-y-2 xl:space-y-3 2xl:space-y-6
            text-left
          `}>
            <img 
            src={Feature} 
            className={`
              size-6 sm:size-8 lg:size-10 2xl:size-15
            `}/>

            <h3 
            className={`
              text-sm sm:text-lg lg:text-xl 2xl:text-4xl
              font-semibold 
              mb-1 sm:mb-2
            `}>Save your product</h3>

            <p
            className={`
              text-[10px] sm:text-[12px] 2xl:text-2xl
            `}>Add items to your wishlist to track prices and revisit your favorite finds anytime.</p>
          </div>
      </div>
    </section>
  );
};

export default Features;